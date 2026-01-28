(() => {
  const NL = window.Neutralino;
  if (!NL || typeof NL.init !== "function") return;

  const STORAGE_KEYS = {
    autosave: "blockscape-nj:autosave",
    lastPath: "blockscape-nj:lastPath",
  };
  const DEFAULT_AUTOSAVE = true;
  const AUTOSAVE_INTERVAL_MS = 2000;

  let currentPath =
    window.localStorage.getItem(STORAGE_KEYS.lastPath) || "";
  let autosaveEnabled = (() => {
    const raw = window.localStorage.getItem(STORAGE_KEYS.autosave);
    if (raw == null) return DEFAULT_AUTOSAVE;
    return raw === "true";
  })();
  let lastSavedText = "";
  let autosaveInFlight = false;
  let autosavePendingDialog = false;
  let autosaveTimer = null;

  const getJsonBox = () => document.getElementById("jsonBox");
  const getJsonText = () => (getJsonBox()?.value || "").trim();
  const setJsonText = (text) => {
    const box = getJsonBox();
    if (box) box.value = text;
  };
  const click = (id) => document.getElementById(id)?.click();
  const byId = (id) => document.getElementById(id);

  const persistState = () => {
    window.localStorage.setItem(
      STORAGE_KEYS.autosave,
      String(autosaveEnabled)
    );
    if (currentPath) {
      window.localStorage.setItem(STORAGE_KEYS.lastPath, currentPath);
    } else {
      window.localStorage.removeItem(STORAGE_KEYS.lastPath);
    }
  };

  const buildMenu = async () => {
    const menu = [
      {
        id: "file",
        text: "File",
        menuItems: [
          { id: "file-open", text: "Open…", shortcut: "Ctrl+O" },
          { id: "file-save", text: "Save", shortcut: "Ctrl+S" },
          { id: "file-save-as", text: "Save As…" },
          { text: "-" },
          {
            id: "file-autosave",
            text: "Autosave",
            isChecked: autosaveEnabled,
          },
        ],
      },
    ];
    await NL.window.setMainMenu(menu);
  };

  const applyTextToViewer = (text) => {
    const trimmed = (text || "").trim();
    if (!trimmed) return;
    setJsonText(trimmed);
    let parsed = null;
    try {
      parsed = JSON.parse(trimmed);
    } catch {
      parsed = null;
    }
    const canReplaceActive =
      parsed && !Array.isArray(parsed) && typeof parsed === "object";
    if (canReplaceActive && document.querySelector(".model-nav-item")) {
      click("replaceActive");
    } else {
      click("appendFromBox");
    }
  };

  const clearAllModels = () => {
    const originalConfirm = window.confirm;
    window.confirm = () => true;
    try {
      let guard = 0;
      while (document.querySelector(".model-nav-button") && guard < 200) {
        const button = document.querySelector(".model-nav-button");
        button?.click();
        click("removeModel");
        guard += 1;
      }
    } finally {
      window.confirm = originalConfirm;
    }
  };

  const openFile = async () => {
    const entries = await NL.os.showOpenDialog("Open Blockscape file", {
      filters: [
        { name: "Blockscape", extensions: ["bs", "json"] },
        { name: "All files", extensions: ["*"] },
      ],
    });
    if (!entries || !entries.length) return;
    const path = entries[0];
    let text = "";
    try {
      text = await NL.filesystem.readFile(path, { encoding: "utf8" });
    } catch {
      text = await NL.filesystem.readFile(path);
    }
    if (text && typeof text !== "string") {
      if (text.data && typeof text.data === "string") {
        text = text.data;
      } else if (text instanceof ArrayBuffer) {
        text = new TextDecoder("utf-8").decode(text);
      } else if (ArrayBuffer.isView(text)) {
        text = new TextDecoder("utf-8").decode(text);
      } else {
        text = String(text);
      }
    }
    clearAllModels();
    applyTextToViewer(text);
    currentPath = path;
    lastSavedText = text;
    autosavePendingDialog = false;
    persistState();
  };

  const saveToPath = async (path) => {
    const text = getJsonText();
    if (!text) return;
    await NL.filesystem.writeFile(path, text);
    currentPath = path;
    lastSavedText = text;
    autosavePendingDialog = false;
    persistState();
  };

  const saveFileAs = async () => {
    const defaultName = currentPath || "blockscape.bs";
    const path = await NL.os.showSaveDialog("Save Blockscape file", {
      defaultPath: defaultName,
      filters: [
        { name: "Blockscape", extensions: ["bs", "json"] },
        { name: "All files", extensions: ["*"] },
      ],
    });
    if (!path) return;
    await saveToPath(path);
  };

  const saveFile = async () => {
    if (!currentPath) {
      await saveFileAs();
      return;
    }
    await saveToPath(currentPath);
  };

  const startAutosave = () => {
    if (autosaveTimer) clearInterval(autosaveTimer);
    autosaveTimer = setInterval(async () => {
      if (!autosaveEnabled || autosaveInFlight) return;
      const text = getJsonText();
      if (!text || text === lastSavedText) return;
      if (!currentPath) {
        if (!autosavePendingDialog) {
          autosavePendingDialog = true;
          await saveFileAs();
        }
        return;
      }
      autosaveInFlight = true;
      try {
        await NL.filesystem.writeFile(currentPath, text);
        lastSavedText = text;
      } catch (err) {
        console.warn("[Neutralino] autosave failed", err);
      } finally {
        autosaveInFlight = false;
      }
    }, AUTOSAVE_INTERVAL_MS);
  };

  NL.init();
  NL.events.on("mainMenuItemClicked", async (evt) => {
    const id = evt?.detail?.id;
    if (!id) return;
    try {
      if (id === "file-open") await openFile();
      if (id === "file-save") await saveFile();
      if (id === "file-save-as") await saveFileAs();
      if (id === "file-autosave") {
        autosaveEnabled = !autosaveEnabled;
        persistState();
        await buildMenu();
      }
    } catch (err) {
      console.warn("[Neutralino] menu action failed", err);
    }
  });

  NL.events.on("ready", async () => {
    await buildMenu();
    startAutosave();

    const autosaveToggle = byId("fileAutosaveToggle");
    if (autosaveToggle) {
      autosaveToggle.checked = autosaveEnabled;
      autosaveToggle.addEventListener("change", async () => {
        autosaveEnabled = autosaveToggle.checked;
        persistState();
        await buildMenu();
      });
    }

    byId("fileOpenBtn")?.addEventListener("click", () => openFile());
    byId("fileSaveBtn")?.addEventListener("click", () => saveFile());
    byId("fileSaveAsBtn")?.addEventListener("click", () => saveFileAs());
  });
})();
