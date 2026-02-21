const { Plugin, Notice, TFile } = require('obsidian');

class BlockscapeViewerPlugin extends Plugin {
  async onload() {
    this.autosaveEnabled = this.loadAutosaveSetting();
    this.headerPref = this.loadHeaderPreference();
    this.saveFingerprints = new Map();
    this.blurTimers = new Map();
    this.settingsSnapshotPromise = this.loadData().catch(() => null);
    this.assetsPromise = this.ensureAssets();
    const render = async (source, el, ctx) => {
      await this.assetsPromise;
      this.renderBlockscape(source, el, ctx);
    };
    this.registerMarkdownCodeBlockProcessor('blockscape', render);
    this.registerMarkdownCodeBlockProcessor('bs', render);
  }

  onunload() {}

  loadAutosaveSetting() {
    try {
      const raw = localStorage.getItem('blockscape:autosaveEnabled');
      if (raw === '0') return false;
    } catch (_) {}
    return true;
  }

  persistAutosaveSetting(enabled) {
    try {
      localStorage.setItem('blockscape:autosaveEnabled', enabled ? '1' : '0');
    } catch (_) {}
  }

  loadHeaderPreference() {
    try {
      const raw = localStorage.getItem('blockscape:obsidianShowHeader');
      if (raw === '1') return true;
      if (raw === '0') return false;
    } catch (_) {}
    return false;
  }

  persistHeaderPreference(show) {
    try {
      localStorage.setItem('blockscape:obsidianShowHeader', show ? '1' : '0');
    } catch (_) {}
  }

  async applySavedSettings() {
    try {
      const payload = await this.settingsSnapshotPromise;
      if (!payload || !payload.settings) return;
      const bridge = window.__blockscapeSettingsBridge;
      if (bridge?.applyPayload) {
        bridge.applyPayload(payload.settings);
      }
    } catch (err) {
      console.warn('Blockscape: unable to apply saved settings', err);
    }
  }

  async exportAndStoreSettings() {
    try {
      const bridge = window.__blockscapeSettingsBridge;
      const payload = bridge?.exportPayload ? bridge.exportPayload() : null;
      if (!payload) return;
      await this.saveData({ settings: payload });
    } catch (err) {
      console.warn('Blockscape: unable to persist settings', err);
    }
  }

  ensureAssets() {
    if (this._assetPromise) return this._assetPromise;
    this._assetPromise = (async () => {
      const cssLoaded = document.querySelector('[data-blockscape-inline-css]');
      const jsLoaded = !!window.Blockscape;
      const pluginId = this.manifest.id || this.manifest.dir;
      const base = `${this.app.vault.configDir}/plugins/${pluginId}`;

      if (!cssLoaded) {
        try {
          const coreCss = await this.app.vault.adapter.read(`${base}/assets/blockscape.css`);
          const style = document.createElement('style');
          style.dataset.blockscapeInlineCss = 'true';
          style.textContent = coreCss;
          document.head.appendChild(style);
          try {
            const extraCss = await this.app.vault.adapter.read(`${base}/styles.css`);
            const style2 = document.createElement('style');
            style2.dataset.blockscapeInlineCss = 'true';
            style2.textContent = extraCss;
            document.head.appendChild(style2);
          } catch (_) {}
        } catch (e) {
          console.error('Blockscape: unable to load CSS', e);
        }
      }

      if (!jsLoaded) {
        try {
          const jsText = await this.app.vault.adapter.read(`${base}/assets/blockscape.js`);
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.textContent = jsText;
          document.head.appendChild(script);
        } catch (e) {
          console.error('Blockscape: unable to load JS', e);
        }
      }
    })();
    return this._assetPromise;
  }

  renderBlockscape(source, el, ctx) {
    let seed;
    try {
      seed = JSON.parse(source);
    } catch (error) {
      el.createEl('pre', {
        text: 'Blockscape: invalid JSON in code block',
      });
      return;
    }

    const root = el.createDiv({ cls: 'blockscape-root blockscape-obsidian' });
    if (Array.isArray(seed)) {
      root.__blockscapeSeriesSeed = seed;
    }

    const Blockscape = window.Blockscape?.default || window.Blockscape;
    if (!Blockscape) {
      el.createEl('pre', { text: 'Blockscape library failed to load.' });
      return;
    }

    const baseFeatures = {
      localBackend: false,
      fileOpen: false,
      fileSave: false,
      autoLoadFromDir: false,
      showHeader: this.headerPref,
      showSidebar: false,
      showFooter: false,
      showModelMeta: false,
      seriesNavMinVersions: 2,
    };

    const instance = new Blockscape({
      target: root,
      props: {
        seed,
        features: baseFeatures,
      },
    });

    this.injectSaveControls({
      el,
      root,
      ctx,
      initialSource: source,
      instance,
      baseFeatures,
    });
    this.applySavedSettings();

    // force dark palette to match Obsidian dark theme
    document.documentElement.setAttribute('data-theme', 'dark');

    // Reposition overlay to align lines with tiles inside the centered container.
    const repositionOverlay = () => {
      const layer = root.querySelector('.svg-layer') || document.querySelector('.svg-layer');
      if (!layer) return;

      // Ensure overlay lives inside a shadow host to avoid external CSS interference
      if (!root._overlayHost) {
        const host = document.createElement('div');
        host.className = 'svg-layer-host';
        host.style.position = 'absolute';
        host.style.inset = '0';
        host.style.pointerEvents = 'none';
        host.style.zIndex = '5';
        host.attachShadow({ mode: 'open' });
        root._overlayHost = host;
        root.appendChild(host);
      }

      const host = root._overlayHost;
      const shadow = host.shadowRoot;

      if (layer.getRootNode() !== shadow) {
        shadow.innerHTML = '';
        const style = document.createElement('style');
        style.textContent = `
          .svg-layer { position:absolute; inset:0; width:100%; height:100%; pointer-events:none; }
          .svg-layer path { stroke-width:2.6px !important; stroke-opacity:0.75 !important; }
        `;
        shadow.appendChild(style);
        shadow.appendChild(layer);
      }

      const rect = root.getBoundingClientRect();
      host.style.width = `${rect.width}px`;
      host.style.height = `${rect.height}px`;
      host.style.transform = 'translate(0, 0)';
      host.style.left = '0px';
      host.style.top = '0px';

      layer.style.position = 'absolute';
      layer.style.left = '0px';
      layer.style.top = '0px';
      layer.style.width = `${rect.width}px`;
      layer.style.height = `${rect.height}px`;
      layer.style.transform = 'translate(0, 0)';
      layer.style.pointerEvents = 'none';
      layer.style.background = 'rgba(255,0,0,0)'; // no tint
      layer.setAttribute('width', String(rect.width));
      layer.setAttribute('height', String(rect.height));
    };

    repositionOverlay();
    window.addEventListener('resize', repositionOverlay);
    root.addEventListener('scroll', repositionOverlay);
  }

  injectSaveControls({ el, root, ctx, initialSource, instance, baseFeatures }) {
    if (!ctx || typeof ctx.getSectionInfo !== 'function' || !ctx.sourcePath) return;
    const section = ctx.getSectionInfo(el);
    if (!section) return;

    const saveKey = this.makeSaveKey(ctx, section);
    // Remember the initial text so blur-save won't rewrite identical content immediately.
    if (initialSource?.trim()) {
      this.saveFingerprints.set(saveKey, initialSource.trim());
    }

    const bar = document.createElement('div');
    bar.className = 'blockscape-save-bar';
    bar.style.display = 'flex';
    bar.style.justifyContent = 'space-between';
    bar.style.gap = '8px';
    bar.style.marginBottom = '8px';

    const controls = document.createElement('div');
    controls.style.display = 'flex';
    controls.style.alignItems = 'center';
    controls.style.gap = '8px';

    const status = document.createElement('span');
    status.className = 'blockscape-save-status muted';
    status.textContent = '';

    const autosaveLabel = document.createElement('label');
    autosaveLabel.style.display = 'flex';
    autosaveLabel.style.alignItems = 'center';
    autosaveLabel.style.gap = '4px';
    autosaveLabel.style.fontSize = '0.9em';
    const autosaveCheckbox = document.createElement('input');
    autosaveCheckbox.type = 'checkbox';
    autosaveCheckbox.checked = this.autosaveEnabled;
    autosaveCheckbox.addEventListener('change', () => {
      this.autosaveEnabled = !!autosaveCheckbox.checked;
      this.persistAutosaveSetting(this.autosaveEnabled);
      status.textContent = this.autosaveEnabled ? '' : 'Autosave off';
    });
    const autosaveText = document.createElement('span');
    autosaveText.textContent = 'Autosave on blur';
    autosaveLabel.appendChild(autosaveCheckbox);
    autosaveLabel.appendChild(autosaveText);
    controls.appendChild(autosaveLabel);

    const headerLabel = document.createElement('label');
    headerLabel.style.display = 'flex';
    headerLabel.style.alignItems = 'center';
    headerLabel.style.gap = '4px';
    headerLabel.style.fontSize = '0.9em';
    const headerCheckbox = document.createElement('input');
    headerCheckbox.type = 'checkbox';
    headerCheckbox.checked = !!baseFeatures?.showHeader;
    headerCheckbox.addEventListener('change', () => {
      const next = !!headerCheckbox.checked;
      this.headerPref = next;
      this.persistHeaderPreference(next);
      if (instance?.$set && baseFeatures) {
        const updatedFeatures = { ...baseFeatures, showHeader: next };
        baseFeatures.showHeader = next;
        instance.$set({ features: updatedFeatures });
      }
    });
    const headerText = document.createElement('span');
    headerText.textContent = 'Show header';
    headerLabel.appendChild(headerCheckbox);
    headerLabel.appendChild(headerText);
    controls.appendChild(headerLabel);

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'blockscape-save-button mod-cta';
    button.textContent = 'Save to note';

    button.addEventListener('click', async () => {
      await this.saveToNote({ ctx, section, root, statusEl: status, buttonEl: button, initialSource, saveKey, reason: 'manual' });
    });

    bar.appendChild(controls);
    bar.appendChild(status);
    bar.appendChild(button);
    el.insertBefore(bar, root);

    // Save when focus leaves the Blockscape render (debounced).
    const scheduleBlurSave = () => {
      if (!this.autosaveEnabled) return;
      const existing = this.blurTimers.get(saveKey);
      if (existing) clearTimeout(existing);
      const timer = setTimeout(() => {
        this.saveToNote({ ctx, section, root, statusEl: status, buttonEl: button, initialSource, saveKey, reason: 'blur', silent: true });
      }, 200);
      this.blurTimers.set(saveKey, timer);
    };

    root.addEventListener('focusout', scheduleBlurSave);
    root.addEventListener('blur', scheduleBlurSave, true);
  }

  makeSaveKey(ctx, section) {
    const start = Number.isInteger(section?.lineStart) ? section.lineStart : 'na';
    const end = Number.isInteger(section?.lineEnd) ? section.lineEnd : 'na';
    return `${ctx.sourcePath}#${start}-${end}`;
  }

  buildSavePayload({ root, parsed, raw }) {
    const seriesSeed = root?.__blockscapeSeriesSeed;
    if (Array.isArray(seriesSeed)) {
      const next = JSON.parse(JSON.stringify(seriesSeed));
      let replaced = false;
      const parsedId = parsed && typeof parsed === 'object' ? parsed.id : undefined;
      if (parsedId) {
        for (let i = 0; i < next.length; i += 1) {
          const candidate = next[i];
          if (candidate && candidate.id === parsedId) {
            next[i] = parsed;
            replaced = true;
            break;
          }
        }
      }
      if (!replaced && next.length) {
        next[0] = parsed;
      }
      return next;
    }
    if (parsed !== undefined) return parsed;
    try {
      return JSON.parse(raw);
    } catch (_) {
      return raw;
    }
  }

  async saveToNote({ ctx, section, root, statusEl, buttonEl, initialSource, saveKey, reason = 'manual', silent = false }) {
    const setStatus = (text, isError = false) => {
      if (!statusEl) return;
      statusEl.textContent = text || '';
      statusEl.style.color = isError ? 'var(--text-error, #ff5555)' : '';
    };

    try {
      if (buttonEl) buttonEl.disabled = true;
      setStatus(reason === 'blur' ? 'Autosaving…' : 'Saving…');

      const file = this.app.vault.getAbstractFileByPath(ctx.sourcePath);
      if (!(file instanceof TFile)) {
        throw new Error('Cannot find source note');
      }

      const jsonBox = root.querySelector('#jsonBox') || document.getElementById('jsonBox');
      const raw = (jsonBox?.value || initialSource || '').trim();
      if (!raw) {
        throw new Error('No JSON content to save');
      }

      const key = saveKey || this.makeSaveKey(ctx, section);
      const last = this.saveFingerprints.get(key);
      if (last && last === raw) {
        setStatus(reason === 'blur' ? 'Up to date' : 'No changes');
        return;
      }

      let parsed;
      try {
        parsed = JSON.parse(raw);
      } catch (err) {
        throw new Error(`Invalid JSON: ${err.message}`);
      }

      const payload = this.buildSavePayload({ root, parsed, raw });
      const pretty =
        typeof payload === 'string' ? payload : JSON.stringify(payload, null, 2);
      const fenced = ['```blockscape', pretty, '```'].join('\n');

      const content = await this.app.vault.read(file);
      const lines = content.split(/\r?\n/);
      let updated = null;

      if (
        Number.isInteger(section?.lineStart) &&
        Number.isInteger(section?.lineEnd) &&
        section.lineStart >= 0 &&
        section.lineEnd >= section.lineStart &&
        section.lineEnd < lines.length
      ) {
        lines.splice(section.lineStart, section.lineEnd - section.lineStart + 1, fenced);
        updated = lines.join('\n');
      } else {
        const blockRegex = /```(?:blockscape|bs)[^\n]*\n[\s\S]*?\n```/m;
        if (blockRegex.test(content)) {
          updated = content.replace(blockRegex, fenced);
        }
      }

      if (!updated) {
        const suffix = content.endsWith('\n') ? '' : '\n';
        updated = `${content}${suffix}\n${fenced}\n`;
      }

      await this.app.vault.modify(file, updated);
      this.saveFingerprints.set(key, raw);
      await this.exportAndStoreSettings();
      setStatus(reason === 'blur' ? 'Autosaved' : 'Saved');
      if (!silent) new Notice('Blockscape saved to note');
    } catch (err) {
      console.error('Blockscape save failed', err);
      setStatus('Save failed', true);
      if (!silent) new Notice(`Blockscape save failed: ${err.message}`);
    } finally {
      if (buttonEl) buttonEl.disabled = false;
    }
  }
}

module.exports = BlockscapeViewerPlugin;
