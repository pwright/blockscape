const { Plugin } = require('obsidian');

class BlockscapeViewerPlugin extends Plugin {
  async onload() {
    this.assetsPromise = this.ensureAssets();
    const render = async (source, el, ctx) => {
      await this.assetsPromise;
      this.renderBlockscape(source, el);
    };
    this.registerMarkdownCodeBlockProcessor('blockscape', render);
    this.registerMarkdownCodeBlockProcessor('bs', render);
  }

  onunload() {}

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

  renderBlockscape(source, el) {
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

    const Blockscape = window.Blockscape?.default || window.Blockscape;
    if (!Blockscape) {
      el.createEl('pre', { text: 'Blockscape library failed to load.' });
      return;
    }

    const instance = new Blockscape({
      target: root,
      props: {
        seed,
        features: {
          localBackend: false,
          fileOpen: false,
          fileSave: false,
          autoLoadFromDir: false,
          showHeader: false,
          showSidebar: false,
          showFooter: false,
          showModelMeta: false,
          seriesNavMinVersions: 2,
        },
      },
    });

    // force dark palette to match Obsidian dark theme
    document.documentElement.setAttribute('data-theme', 'dark');

    const updateOverlayOffset = () => {
      const layer = root.querySelector('.svg-layer') || document.querySelector('.svg-layer');
      if (!layer) return;
      const rect = root.getBoundingClientRect();
      const scrollX = (root.closest('.markdown-preview-view')?.scrollLeft || 0) + (window.scrollX || 0);
      const offset = rect.left + scrollX;
      layer.style.setProperty('--blockscape-view-offset', `${offset}px`);
    };

    updateOverlayOffset();
    window.addEventListener('resize', updateOverlayOffset);
    root.addEventListener('scroll', updateOverlayOffset);
  }
}

module.exports = BlockscapeViewerPlugin;
