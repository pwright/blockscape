var Zr=Object.defineProperty;var el=(o,c,g)=>c in o?Zr(o,c,{enumerable:!0,configurable:!0,writable:!0,value:g}):o[c]=g;var it=(o,c,g)=>el(o,typeof c!="symbol"?c+"":c,g);(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const k of document.querySelectorAll('link[rel="modulepreload"]'))C(k);new MutationObserver(k=>{for(const N of k)if(N.type==="childList")for(const j of N.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&C(j)}).observe(document,{childList:!0,subtree:!0});function g(k){const N={};return k.integrity&&(N.integrity=k.integrity),k.referrerPolicy&&(N.referrerPolicy=k.referrerPolicy),k.crossOrigin==="use-credentials"?N.credentials="include":k.crossOrigin==="anonymous"?N.credentials="omit":N.credentials="same-origin",N}function C(k){if(k.ep)return;k.ep=!0;const N=g(k);fetch(k.href,N)}})();function Jn(){}function Hs(o){return o()}function As(){return Object.create(null)}function di(o){o.forEach(Hs)}function Vs(o){return typeof o=="function"}function Pa(o,c){return o!=o?c==c:o!==c||o&&typeof o=="object"||typeof o=="function"}function nl(o){return Object.keys(o).length===0}const tl=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function T(o,c){o.appendChild(c)}function on(o,c,g){o.insertBefore(c,g||null)}function Xe(o){o.parentNode&&o.parentNode.removeChild(o)}function U(o){return document.createElement(o)}function $s(o){return document.createElementNS("http://www.w3.org/2000/svg",o)}function Ra(o){return document.createTextNode(o)}function oe(){return Ra(" ")}function bt(o,c,g,C){return o.addEventListener(c,g,C),()=>o.removeEventListener(c,g,C)}function il(o){return function(c){return c.preventDefault(),o.call(this,c)}}function y(o,c,g){g==null?o.removeAttribute(c):o.getAttribute(c)!==g&&o.setAttribute(c,g)}function al(o){let c;return{p(...g){c=g,c.forEach(C=>o.push(C))},r(){c.forEach(g=>o.splice(o.indexOf(g),1))}}}function sl(o){return Array.from(o.childNodes)}function ol(o,c){c=""+c,o.data!==c&&(o.data=c)}function Pt(o,c){o.value=c??""}class rl{constructor(c=!1){it(this,"is_svg",!1);it(this,"e");it(this,"n");it(this,"t");it(this,"a");this.is_svg=c,this.e=this.n=null}c(c){this.h(c)}m(c,g,C=null){this.e||(this.is_svg?this.e=$s(g.nodeName):this.e=U(g.nodeType===11?"TEMPLATE":g.nodeName),this.t=g.tagName!=="TEMPLATE"?g:g.content,this.c(c)),this.i(C)}h(c){this.e.innerHTML=c,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(c){for(let g=0;g<this.n.length;g+=1)on(this.t,this.n[g],c)}p(c){this.d(),this.h(c),this.i(this.a)}d(){this.n.forEach(Xe)}}let ci;function li(o){ci=o}function ll(){if(!ci)throw new Error("Function called outside component initialization");return ci}function cl(o){ll().$$.on_mount.push(o)}const Mt=[],Ts=[];let Rt=[];const Ls=[],dl=Promise.resolve();let Aa=!1;function pl(){Aa||(Aa=!0,dl.then(Fs))}function Ta(o){Rt.push(o)}const Ea=new Set;let Tt=0;function Fs(){if(Tt!==0)return;const o=ci;do{try{for(;Tt<Mt.length;){const c=Mt[Tt];Tt++,li(c),ul(c.$$)}}catch(c){throw Mt.length=0,Tt=0,c}for(li(null),Mt.length=0,Tt=0;Ts.length;)Ts.pop()();for(let c=0;c<Rt.length;c+=1){const g=Rt[c];Ea.has(g)||(Ea.add(g),g())}Rt.length=0}while(Mt.length);for(;Ls.length;)Ls.pop()();Aa=!1,Ea.clear(),li(o)}function ul(o){if(o.fragment!==null){o.update(),di(o.before_update);const c=o.dirty;o.dirty=[-1],o.fragment&&o.fragment.p(o.ctx,c),o.after_update.forEach(Ta)}}function ml(o){const c=[],g=[];Rt.forEach(C=>o.indexOf(C)===-1?c.push(C):g.push(C)),g.forEach(C=>C()),Rt=c}const Bi=new Set;let gl;function La(o,c){o&&o.i&&(Bi.delete(o),o.i(c))}function Ns(o,c,g,C){if(o&&o.o){if(Bi.has(o))return;Bi.add(o),gl.c.push(()=>{Bi.delete(o)}),o.o(c)}}function Ms(o){o&&o.c()}function Na(o,c,g){const{fragment:C,after_update:k}=o.$$;C&&C.m(c,g),Ta(()=>{const N=o.$$.on_mount.map(Hs).filter(Vs);o.$$.on_destroy?o.$$.on_destroy.push(...N):di(N),o.$$.on_mount=[]}),k.forEach(Ta)}function Ma(o,c){const g=o.$$;g.fragment!==null&&(ml(g.after_update),di(g.on_destroy),g.fragment&&g.fragment.d(c),g.on_destroy=g.fragment=null,g.ctx=[])}function fl(o,c){o.$$.dirty[0]===-1&&(Mt.push(o),pl(),o.$$.dirty.fill(0)),o.$$.dirty[c/31|0]|=1<<c%31}function Ba(o,c,g,C,k,N,j=null,m=[-1]){const G=ci;li(o);const q=o.$$={fragment:null,ctx:[],props:N,update:Jn,not_equal:k,bound:As(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(G?G.$$.context:[])),callbacks:As(),dirty:m,skip_bound:!1,root:c.target||G.$$.root};j&&j(q.root);let re=!1;if(q.ctx=g?g(o,c.props||{},(J,de,...me)=>{const Re=me.length?me[0]:de;return q.ctx&&k(q.ctx[J],q.ctx[J]=Re)&&(!q.skip_bound&&q.bound[J]&&q.bound[J](Re),re&&fl(o,J)),de}):[],q.update(),re=!0,di(q.before_update),q.fragment=C?C(q.ctx):!1,c.target){if(c.hydrate){const J=sl(c.target);q.fragment&&q.fragment.l(J),J.forEach(Xe)}else q.fragment&&q.fragment.c();c.intro&&La(o.$$.fragment),Na(o,c.target,c.anchor),Fs()}li(G)}class Da{constructor(){it(this,"$$");it(this,"$$set")}$destroy(){Ma(this,1),this.$destroy=Jn}$on(c,g){if(!Vs(g))return Jn;const C=this.$$.callbacks[c]||(this.$$.callbacks[c]=[]);return C.push(g),()=>{const k=C.indexOf(g);k!==-1&&C.splice(k,1)}}$set(c){this.$$set&&!nl(c)&&(this.$$.skip_bound=!0,this.$$set(c),this.$$.skip_bound=!1)}}const hl="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(hl);const bl=`{
  "id": "apis",
  "title": "API Styles",
  "abstract": "APIs expose business capabilities to consumers through fit-for-purpose styles (REST, SOAP, gRPC, GraphQL) and real-time channels (Webhooks, WebSockets, WebRTC). User-facing integrations depend on platform services such as gateways, auth, rate limits, and observability, which in turn rely on core infrastructure like HTTP transport, TLS, and data encodings (JSON, XML, Protobuf).",
  "categories": [
    {
      "id": "experience",
      "title": "Consumption",
      "items": [
        { "id": "client-apps", "name": "Client Applications", "deps": ["rest-api", "graphql-api", "grpc-api"] },
        { "id": "partner-integrations", "name": "Partner Integrations", "deps": ["rest-api", "soap-api", "webhooks"] },
        { "id": "ops-dashboards", "name": "Operational Dashboards", "deps": ["observability"] }
      ]
    },
    {
      "id": "api-styles",
      "title": "Styles",
      "items": [
        { "id": "rest-api", "name": "REST API", "deps": ["api-gateway", "http-transport", "tls", "json-format"] },
        { "id": "soap-api", "name": "SOAP API", "deps": ["api-gateway", "http-transport", "tls", "xml-format"] },
        { "id": "grpc-api", "name": "gRPC API", "deps": ["api-gateway", "http-transport", "tls", "protobuf-format"] },
        { "id": "graphql-api", "name": "GraphQL API", "deps": ["api-gateway", "http-transport", "tls", "json-format"] }
      ]
    },
    {
      "id": "realtime",
      "title": "Real-time & Events",
      "items": [
        { "id": "webhooks", "name": "Webhooks", "deps": ["api-gateway", "http-transport", "tls"] },
        { "id": "websockets", "name": "WebSockets", "deps": ["api-gateway", "http-transport", "tls"] },
        { "id": "webrtc", "name": "WebRTC", "deps": ["api-gateway", "http-transport", "tls"] }
      ]
    },
    {
      "id": "platform",
      "title": "Platform Services",
      "items": [
        { "id": "api-gateway", "name": "API Gateway", "deps": ["http-transport", "tls"] },
        { "id": "authn-authz", "name": "AuthN/AuthZ", "deps": ["tls"] },
        { "id": "rate-limits", "name": "Rate Limiting", "deps": ["http-transport"] },
        { "id": "observability", "name": "Observability", "deps": [] },
        { "id": "docs-portal", "name": "Developer Docs Portal", "deps": [] }
      ]
    },
    {
      "id": "infrastructure",
      "title": "Core Infrastructure",
      "items": [
        { "id": "http-transport", "name": "HTTP Transport", "deps": [] },
        { "id": "tls", "name": "TLS Security", "deps": [] },
        { "id": "json-format", "name": "JSON Encoding", "deps": [] },
        { "id": "xml-format", "name": "XML Encoding", "deps": [] },
        { "id": "protobuf-format", "name": "Protobuf Encoding", "deps": [] }
      ]
    }
  ]
}
`,vl=`{
  "id": "NFR",
  "title": "Non Functional Requirements",
  "abstract": "This blockscape visualizes a comprehensive collection of *ility words - non functionality requirement (NFR) attributes ending in '-ility' - organized into categories and showing their relationships.<br>These *ility words represent various aspects of software quality, system behavior, and architectural characteristics. Each word is categorized by theme (Performance, Security, Maintainability, etc.) and connected to other *ility words through dependency relationships.<br>The visualization helps understand how different quality attributes influence and enable each other, creating a network of interconnected *ility concepts.<br>You can view alternative requirements standards by loading from this URL.<br>https://gist.githubusercontent.com/pwright/281441c9c07eabe9ef0cd43a27e766de/raw/030d6dd59c2c1e7dbff3b7f565acb24f3cc32c78/requirements.bs",

  "categories": [
    {
      "id": "quality",
      "title": "Overall Quality Attributes",
      "items": [
        {
          "id": "correctness",
          "name": "Correctness",
          "deps": []
        },
        {
          "id": "credibility",
          "name": "Credibility",
          "deps": ["correctness"]
        },
        {
          "id": "reliability",
          "name": "Reliability",
          "deps": ["availability", "recoverability"]
        },
        {
          "id": "dependability",
          "name": "Dependability",
          "deps": ["reliability", "robustness"]
        },
        {
          "id": "stability",
          "name": "Stability",
          "deps": ["robustness"]
        },
        {
          "id": "sustainability",
          "name": "Sustainability",
          "deps": ["maintainability", "efficiency"]
        }
      ]
    },
    {
      "id": "performance",
      "title": "Performance and Scalability",
      "items": [
        {
          "id": "efficiency",
          "name": "Efficiency",
          "deps": []
        },
        {
          "id": "performance",
          "name": "Effectiveness",
          "deps": ["efficiency"]
        },
        {
          "id": "scalability",
          "name": "Scalability",
          "deps": ["efficiency"]
        },
        {
          "id": "responsiveness",
          "name": "Responsiveness",
          "deps": ["efficiency"]
        },
        {
          "id": "timeliness",
          "name": "Timeliness",
          "deps": ["responsiveness"]
        },
        {
          "id": "predictability",
          "name": "Predictability",
          "deps": ["efficiency", "timeliness"]
        }
      ]
    },
    {
      "id": "security",
      "title": "Security and Safety",
      "items": [
        {
          "id": "security",
          "name": "Securability",
          "deps": []
        },
        {
          "id": "safety",
          "name": "Safety",
          "deps": ["security"]
        },
        {
          "id": "accountability",
          "name": "Accountability",
          "deps": ["security", "auditability"]
        },
        {
          "id": "auditability",
          "name": "Auditability",
          "deps": []
        },
        {
          "id": "traceability",
          "name": "Traceability",
          "deps": ["auditability"]
        },
        {
          "id": "integrity",
          "name": "Integrity",
          "deps": ["security"]
        }
      ]
    },
    {
      "id": "maintainability",
      "title": "Maintainability and Modifiability",
      "items": [
        {
          "id": "maintainability",
          "name": "Maintainability",
          "deps": []
        },
        {
          "id": "modifiability",
          "name": "Modifiability",
          "deps": ["maintainability"]
        },
        {
          "id": "extensibility",
          "name": "Extensibility",
          "deps": ["modifiability"]
        },
        {
          "id": "evolvability",
          "name": "Evolvability",
          "deps": ["modifiability", "extensibility"]
        },
        {
          "id": "customizability",
          "name": "Customizability",
          "deps": ["modifiability"]
        },
        {
          "id": "configurability",
          "name": "Configurability",
          "deps": ["customizability"]
        },
        {
          "id": "modularity",
          "name": "Modularity",
          "deps": ["configurability"]
        },
        {
          "id": "tailorability",
          "name": "Tailorability",
          "deps": ["customizability"]
        }
      ]
    },
    {
      "id": "usability",
      "title": "Usability and Learnability",
      "items": [
        {
          "id": "usability",
          "name": "Usability",
          "deps": ["learnability", "understandability"]
        },
        {
          "id": "learnability",
          "name": "Learnability",
          "deps": []
        },
        {
          "id": "understandability",
          "name": "Understandability",
          "deps": []
        },
        {
          "id": "accessibility",
          "name": "Accessibility",
          "deps": ["usability"]
        },
        {
          "id": "simplicity",
          "name": "Simplicity",
          "deps": ["understandability"]
        },
        {
          "id": "operability",
          "name": "Operability",
          "deps": ["usability"]
        }
      ]
    },
    {
      "id": "portability",
      "title": "Portability and Deployability",
      "items": [
        {
          "id": "installability",
          "name": "Installability",
          "deps": []
        },
        {
          "id": "deployability",
          "name": "Deployability",
          "deps": ["installability"]
        },
        {
          "id": "distributability",
          "name": "Distributability",
          "deps": ["deployability"]
        },
        {
          "id": "compatibility",
          "name": "Compatibility",
          "deps": ["interoperability"]
        },
        {
          "id": "interoperability",
          "name": "Interoperability",
          "deps": []
        },
        {
          "id": "mobility",
          "name": "Mobility",
          "deps": ["portability"]
        },
        {
          "id": "nomadicity",
          "name": "Nomadicity",
          "deps": ["mobility"]
        }
      ]
    },
    {
      "id": "dependability",
      "title": "Reliability, Robustness, and Recovery",
      "items": [
        {
          "id": "availability",
          "name": "Availability",
          "deps": []
        },
        {
          "id": "recoverability",
          "name": "Recoverability",
          "deps": ["availability"]
        },
        {
          "id": "robustness",
          "name": "Robustness",
          "deps": ["reliability"]
        },
        {
          "id": "durability",
          "name": "Durability",
          "deps": ["reliability"]
        },
        {
          "id": "survivability",
          "name": "Survivability",
          "deps": ["recoverability"]
        },
        {
          "id": "fault_tolerance",
          "name": "Resilience (Implied)",
          "deps": ["robustness", "recoverability"]
        }
      ]
    },
    {
      "id": "verification",
      "title": "Verifiability and Test Attributes",
      "items": [
        {
          "id": "testability",
          "name": "Testability",
          "deps": []
        },
        {
          "id": "debuggability",
          "name": "Debugability",
          "deps": ["testability"]
        },
        {
          "id": "demonstrability",
          "name": "Demonstrability",
          "deps": ["testability"]
        },
        {
          "id": "reproducibility",
          "name": "Reproducability",
          "deps": ["testability"]
        },
        {
          "id": "repeatability",
          "name": "Repeatability",
          "deps": ["testability"]
        },
        {
          "id": "verifiability",
          "name": "Audit/Compliance (Implied)",
          "deps": ["traceability", "testability"]
        }
      ]
    },
    {
      "id": "extensibility",
      "title": "Adaptability and Evolution",
      "items": [
        {
          "id": "adaptability",
          "name": "Adaptability",
          "deps": []
        },
        {
          "id": "flexibility",
          "name": "Flexibility",
          "deps": ["adaptability"]
        },
        {
          "id": "extensibility_alt",
          "name": "Extensibility",
          "deps": ["flexibility"]
        },
        {
          "id": "evolvability_alt",
          "name": "Evolvability",
          "deps": ["extensibility_alt"]
        },
        {
          "id": "scalability_alt",
          "name": "Scalability",
          "deps": ["extensibility_alt"]
        }
      ]
    }
  ]
}
`,yl=`[
  {
    "id": "blockscape-core",
    "title": "Blockscape Core Experience",
    "abstract": "Interactive mapping, editing, and navigation of value-chain landscapes powered by the Blockscape app.",
    "categories": [
      {
        "id": "experience",
        "title": "User Experience",
        "items": [
          { "id": "map-explorer", "name": "Map Explorer", "deps": ["relation-highlights", "layout-engine"], "external": "documentation/maps.md" },
          { "id": "edit-workflow", "name": "Edit Workflow", "deps": ["json-editor", "shortcut-engine"] },
          { "id": "series-navigation", "name": "Series Navigation", "deps": ["series-manager", "version-thumbs"] },
          { "id": "template-loading", "name": "Template Loading", "deps": ["seed-loader", "asset-fetcher"] },
          { "id": "version-thumbs", "name": "Version Thumbnails", "deps": ["series-manager"] }
        ]
      },
      {
        "id": "navigation-ux",
        "title": "Navigation & UX",
        "items": [
          { "id": "search-navigation", "name": "Search Navigation", "deps": ["search-index", "preview-renderer"] },
          { "id": "dependency-inspector", "name": "Dependency Inspector", "deps": ["relation-highlights", "preview-renderer"] },
          { "id": "drag-drop-arrange", "name": "Drag & Drop Arrange", "deps": ["layout-engine"] },
          { "id": "keyboard-travel", "name": "Keyboard Travel", "deps": ["shortcut-engine"] }
        ]
      },
      {
        "id": "data-ops",
        "title": "Data Operations",
        "items": [
          { "id": "series-manager", "name": "Series Manager", "deps": ["model-parser", "storage-cache"], "external": "documentation/series.md" },
          { "id": "json-editor", "name": "JSON Editor", "deps": ["schema-validator", "url-loader"], "external": "documentation/models.md" },
          { "id": "share-export", "name": "Share & Export", "deps": ["encoder"] },
          { "id": "url-loader", "name": "URL Loader", "deps": ["asset-fetcher"] },
          { "id": "seed-loader", "name": "Seed Loader", "deps": ["asset-fetcher"] },
          { "id": "search-index", "name": "Search Index", "deps": ["model-parser"] }
        ]
      },
      {
        "id": "integrations",
        "title": "Integrations",
        "items": [
          { "id": "apicurio-integration", "name": "Apicurio Integration", "deps": ["apicurio-bridge", "model-parser"] },
          { "id": "obsidian-linking", "name": "Obsidian Linking", "deps": ["link-resolver", "encoder"] },
          { "id": "external-linking", "name": "External Linking", "deps": ["link-resolver"] },
          { "id": "prompt-assisted-generation", "name": "Prompt-Assisted Generation", "deps": ["map-prompt", "model-parser"] },
          { "id": "apicurio-bridge", "name": "Apicurio Bridge", "deps": [] }
        ]
      },
      {
        "id": "platform",
        "title": "Platform Services",
        "items": [
          { "id": "layout-engine", "name": "Layout Engine", "deps": ["svelte-runtime"] },
          { "id": "relation-highlights", "name": "Relation Highlights", "deps": ["layout-engine"] },
          { "id": "preview-renderer", "name": "Preview Renderer", "deps": ["svelte-runtime"] },
          { "id": "shortcut-engine", "name": "Shortcut Engine", "deps": ["svelte-runtime"] },
          { "id": "asset-fetcher", "name": "Asset Fetcher", "deps": [] },
          { "id": "svelte-runtime", "name": "Svelte Runtime", "deps": [] }
        ]
      },
      {
        "id": "foundations",
        "title": "Foundations",
        "items": [
          { "id": "model-parser", "name": "Model Parser", "deps": [], "external": "documentation/models.md" },
          { "id": "storage-cache", "name": "Storage Cache", "deps": [] },
          { "id": "schema-validator", "name": "Schema Validator", "deps": ["model-parser"] },
          { "id": "map-prompt", "name": "Map Prompt", "deps": [] },
          { "id": "link-resolver", "name": "Link Resolver", "deps": ["asset-fetcher"] },
          { "id": "encoder", "name": "Encoder", "deps": [] }
        ]
      }
    ]
  },
  {
    "id": "blockscape-sharing",
    "title": "Blockscape Sharing & Encoding",
    "abstract": "How Blockscape packages, encodes, and distributes .bs maps across links, CLI tools, and desktop integrations.",
    "categories": [
      {
        "id": "sharing-experience",
        "title": "Sharing Experience",
        "items": [
          { "id": "share-links", "name": "Share Links", "deps": ["series-encoder", "encode-script"] },
          { "id": "bs-file-handling", "name": ".bs File Handling", "deps": ["mime-association", "file-handler"], "external": "documentation/bs-opener.md" },
          { "id": "clipboard-share", "name": "Clipboard Share", "deps": ["series-encoder", "decode-script"] }
        ]
      },
      {
        "id": "encoding-pipeline",
        "title": "Encoding Pipeline",
        "items": [
          { "id": "series-encoder", "name": "Series Encoder", "deps": ["base64-utils", "json-validator"] },
          { "id": "payload-fingerprint", "name": "Payload Fingerprint", "deps": ["series-encoder"] },
          { "id": "url-tokenizer", "name": "URL Tokenizer", "deps": ["base64-utils"] },
          { "id": "share-payload-guard", "name": "Share Payload Guard", "deps": ["json-validator"] }
        ]
      },
      {
        "id": "desktop-integration",
        "title": "Desktop Integration",
        "items": [
          { "id": "mime-association", "name": "MIME Association", "deps": ["xdg-config"] },
          { "id": "desktop-entry", "name": "Desktop Entry", "deps": ["python-runtime"] },
          { "id": "file-handler", "name": "File Handler", "deps": ["desktop-entry", "encode-script"] },
          { "id": "xdg-config", "name": "XDG Config", "deps": ["desktop-entry"] }
        ]
      },
      {
        "id": "cli-scripts",
        "title": "CLI Scripts",
        "items": [
          { "id": "encode-script", "name": "encode-bs-share.py", "deps": ["python-runtime", "series-encoder"] },
          { "id": "decode-script", "name": "decode-bs-share.py", "deps": ["python-runtime", "json-validator"] },
          { "id": "link-builder", "name": "Link Builder", "deps": ["encode-script", "url-tokenizer"] }
        ]
      },
      {
        "id": "sharing-foundations",
        "title": "Foundations",
        "items": [
          { "id": "base64-utils", "name": "Base64 Utils", "deps": [] },
          { "id": "json-validator", "name": "JSON Validator", "deps": [] },
          { "id": "python-runtime", "name": "Python Runtime", "deps": [] },
          { "id": "file-system", "name": "File System", "deps": [] }
        ]
      }
    ]
  },
  {
    "id": "blockscape-engineering",
    "title": "Blockscape Engineering Lifecycle",
    "abstract": "Development, quality, and content assets that support Blockscape’s delivery and evolution.",
    "categories": [
      {
        "id": "product-outcomes",
        "title": "Product Outcomes",
        "items": [
          { "id": "interactive-landscapes", "name": "Interactive Landscapes", "deps": ["map-ui", "template-library"] },
          { "id": "ai-seeded-maps", "name": "AI-Seeded Maps", "deps": ["map-generation-prompt", "docs-library"] },
          { "id": "shareable-series", "name": "Shareable Series", "deps": ["sharing-links", "template-library"] }
        ]
      },
      {
        "id": "delivery",
        "title": "Delivery",
        "items": [
          { "id": "dev-server", "name": "Dev Server", "deps": ["vite-svelte"] },
          { "id": "static-build", "name": "Static Build", "deps": ["vite-svelte"] },
          { "id": "preview-server", "name": "Preview Server", "deps": ["static-build"] },
          { "id": "release-artifacts", "name": "Release Artifacts", "deps": ["static-build"] }
        ]
      },
      {
        "id": "quality",
        "title": "Quality",
        "items": [
          { "id": "e2e-tests", "name": "E2E Tests", "deps": ["cypress-runner", "built-in-models"] },
          { "id": "schema-checks", "name": "Schema Checks", "deps": ["map-generation-prompt"] },
          { "id": "docs-coverage", "name": "Docs Coverage", "deps": ["docs-library"] }
        ]
      },
      {
        "id": "toolchain",
        "title": "Toolchain",
        "items": [
          { "id": "map-ui", "name": "Map UI", "deps": ["vite-svelte"] },
          { "id": "vite-svelte", "name": "Vite + Svelte", "deps": ["node-deps"] },
          { "id": "npm-scripts", "name": "NPM Scripts", "deps": ["node-deps"] },
          { "id": "cypress-runner", "name": "Cypress Runner", "deps": ["node-deps"] },
          { "id": "node-deps", "name": "Node Dependencies", "deps": [] }
        ]
      },
      {
        "id": "content-assets",
        "title": "Content & Assets",
        "items": [
          { "id": "template-library", "name": "Template Library", "deps": ["built-in-models", "logos-library"] },
          { "id": "map-generation-prompt", "name": "Map Generation Prompt", "deps": ["docs-library"] },
          { "id": "built-in-models", "name": "Built-in Models", "deps": [] },
          { "id": "logos-library", "name": "Logos Library", "deps": [] },
          { "id": "docs-library", "name": "Docs Library", "deps": [] },
          { "id": "sharing-links", "name": "Sharing Links", "deps": ["template-library"] }
        ]
      }
    ]
  }
]
`,wl=`[
{
"id": "index",
"title": "Corporate Communications Evolution – Index (with Lifecycle Layers)",
"abstract": "<p><strong>Metadata</strong>: title: Corporate communications evolution; source: [https://chatgpt.com/share/69346882-c334-8010-86a9-575b672ec59f](https://chatgpt.com/share/69346882-c334-8010-86a9-575b672ec59f); author: ChatGPT; created: 2025-12-06.</p><p>This index map lists the major periods in corporate communication, from courier and postal systems through telephony, proprietary email, internet email, enterprise instant messaging, Slack or Teams-style platforms, and the AI layer. Items are grouped into lifecycle layers from live topics down to historical technologies. Each item id matches the model id of a detailed period map.</p>",
"categories": [
{
"id": "currently-working",
"title": "Currently Working (Dominant Today)",
"items": [
{
"id": "email",
"name": "Internet Email",
"deps": [
"proprietary.email"
]
},
{
"id": "slack",
"name": "Slack& Enterprise Social",
"deps": [
"im"
]
},
{
"id": "ai-layer",
"name": "AI-layered",
"deps": [
"slack"
]
}
]
},
{
"id": "mature-but-fading",
"title": "Mature but Fading (Still Used, Declining)",
"items": [
{
"id": "im",
"name": "Enterprise IM",
"deps": [
"email"
]
},
{
"id": "telephony.fax",
"name": "Telephony & Fax",
"deps": [
"postal.courier"
]
}
]
},
{
"id": "likely-to-die",
"title": "Likely to Die (Residual Use Only)",
"items": [
{
"id": "proprietary.email",
"name": "Proprietary Email",
"deps": [
"telephony.fax"
]
}
]
},
{
"id": "dead-historical",
"title": "Dead / Historical",
"items": [
{
"id": "postal.courier",
"name": "Postal Era",
"deps": []
}
]
}
]
}
,
  {
    "id": "postal.courier",
    "title": "Corporate Communications – Postal & Courier Era",
    "abstract": "<p>This map describes the era in which corporate communication was dominated by courier services, national postal systems, and internal mail rooms. Communication was slow, batch-oriented and highly formal, with paper records, filing cabinets and physical distribution as the core enablers of coordination and governance.</p>",
    "categories": [
      {
        "id": "pc-user-needs",
        "title": "User & Business Needs",
        "items": [
          {
            "id": "pc-internal-coordination",
            "name": "Internal Coordination & Work Routing",
            "deps": [
              "pc-postal-mail",
              "pc-internal-messenger"
            ]
          },
          {
            "id": "pc-formal-record-keeping",
            "name": "Formal Record-keeping & Audit Trail",
            "deps": [
              "pc-postal-mail",
              "pc-filing-systems"
            ]
          },
          {
            "id": "pc-external-notices",
            "name": "External Notices & Legal Correspondence",
            "deps": [
              "pc-postal-mail",
              "pc-postal-network"
            ]
          }
        ]
      },
      {
        "id": "pc-channels-practices",
        "title": "Channels & Practices",
        "items": [
          {
            "id": "pc-postal-mail",
            "name": "Postal Mail & Official Letters",
            "deps": [
              "pc-postal-network"
            ]
          },
          {
            "id": "pc-internal-messenger",
            "name": "Internal Messenger & Mail Room Runs",
            "deps": [
              "pc-postal-network"
            ]
          },
          {
            "id": "pc-memo-practices",
            "name": "Typed Memos & Filing Practices",
            "deps": [
              "pc-filing-systems"
            ]
          }
        ]
      },
      {
        "id": "pc-infrastructure",
        "title": "Infrastructure & Foundations",
        "items": [
          {
            "id": "pc-postal-network",
            "name": "Postal & Courier Network",
            "deps": []
          },
          {
            "id": "pc-filing-systems",
            "name": "Physical Filing Systems & Archives",
            "deps": []
          }
        ]
      }
    ]
  },
  {
    "id": "telephony.fax",
    "title": "Corporate Communications – Telephony, Telex & Fax Era",
    "abstract": "<p>This map captures the rise of synchronous, voice-based communication via telephone, plus telex and fax for near-real-time document transmission. Organisations still relied on formal memos for records, but decision-making and coordination increasingly flowed through calls, switchboards and fax machines, setting expectations for responsiveness and real-time contact.</p>",
    "categories": [
      {
        "id": "tf-user-needs",
        "title": "User & Business Needs",
        "items": [
          {
            "id": "tf-real-time-coordination",
            "name": "Real-time Coordination Across Sites",
            "deps": [
              "tf-telephone-calls",
              "tf-internal-switchboard"
            ]
          },
          {
            "id": "tf-remote-decision-making",
            "name": "Remote Decision-making & Escalation",
            "deps": [
              "tf-telephone-calls",
              "tf-meeting-habits"
            ]
          },
          {
            "id": "tf-document-transmission",
            "name": "Rapid Document Transmission",
            "deps": [
              "tf-fax-workflows",
              "tf-telephone-network"
            ]
          }
        ]
      },
      {
        "id": "tf-channels-practices",
        "title": "Channels & Practices",
        "items": [
          {
            "id": "tf-telephone-calls",
            "name": "Telephone Calls & Phone Trees",
            "deps": [
              "tf-telephone-network",
              "tf-internal-switchboard"
            ]
          },
          {
            "id": "tf-fax-workflows",
            "name": "Fax & Telex Workflows",
            "deps": [
              "tf-telephone-network"
            ]
          },
          {
            "id": "tf-voice-messages",
            "name": "Voice Messages & Answering Services",
            "deps": [
              "tf-telephone-network"
            ]
          },
          {
            "id": "tf-meeting-habits",
            "name": "Meeting & Follow-up Memo Habits",
            "deps": [
              "tf-telephone-calls"
            ]
          }
        ]
      },
      {
        "id": "tf-infrastructure",
        "title": "Infrastructure & Foundations",
        "items": [
          {
            "id": "tf-telephone-network",
            "name": "Telephony & Long-distance Network",
            "deps": []
          },
          {
            "id": "tf-internal-switchboard",
            "name": "Internal Switchboards & Reception",
            "deps": [
              "tf-telephone-network"
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "proprietary.email",
    "title": "Corporate Communications – Proprietary Email & Groupware Era",
    "abstract": "<p>This map describes the early electronic mail period, when proprietary email systems and groupware such as mainframe mail and Lotus Notes complemented rather than replaced paper. Email was intra-company, tied to specific terminals and vendors, and often integrated with shared databases and forms, foreshadowing later digital workflows.</p>",
    "categories": [
      {
        "id": "pe-user-needs",
        "title": "User & Business Needs",
        "items": [
          {
            "id": "pe-electronic-messages",
            "name": "Electronic Messaging Within the Firm",
            "deps": [
              "pe-proprietary-email",
              "pe-terminals"
            ]
          },
          {
            "id": "pe-cross-site-coordination",
            "name": "Cross-site Coordination & Routing",
            "deps": [
              "pe-proprietary-email",
              "pe-groupware"
            ]
          },
          {
            "id": "pe-basic-searchability",
            "name": "Basic Digital Search & Retrieval",
            "deps": [
              "pe-groupware"
            ]
          }
        ]
      },
      {
        "id": "pe-systems-practices",
        "title": "Systems & Practices",
        "items": [
          {
            "id": "pe-proprietary-email",
            "name": "Proprietary Email Systems",
            "deps": [
              "pe-mainframe-servers",
              "pe-terminals"
            ]
          },
          {
            "id": "pe-groupware",
            "name": "Early Groupware & Shared Databases",
            "deps": [
              "pe-mainframe-servers"
            ]
          },
          {
            "id": "pe-mixed-paper-digital",
            "name": "Mixed Paper–Digital Workflows",
            "deps": [
              "pe-proprietary-email",
              "pe-memo-culture"
            ]
          },
          {
            "id": "pe-memo-culture",
            "name": "Memo & Paper-file Culture",
            "deps": []
          }
        ]
      },
      {
        "id": "pe-foundations",
        "title": "Infrastructure & Foundations",
        "items": [
          {
            "id": "pe-mainframe-servers",
            "name": "Mainframe & Minicomputer Servers",
            "deps": []
          },
          {
            "id": "pe-terminals",
            "name": "Terminals & Office Workstations",
            "deps": []
          }
        ]
      }
    ]
  },
  {
    "id": "email",
    "title": "Corporate Communications – Internet Email & Outlook Era",
    "abstract": "<p>This map covers the period in which internet-based email (SMTP, POP, IMAP) and tools like Outlook and Exchange became the default corporate medium. Email turned into both the primary system of record and a major source of overload, with mailing lists, CC culture and compliance archiving shaping how work and attention flowed.</p>",
    "categories": [
      {
        "id": "ie-user-needs",
        "title": "User & Business Needs",
        "items": [
          {
            "id": "ie-global-asynchronous-comm",
            "name": "Global Asynchronous Communication",
            "deps": [
              "ie-internet-email",
              "ie-mailing-lists"
            ]
          },
          {
            "id": "ie-system-of-record",
            "name": "System of Record for Decisions",
            "deps": [
              "ie-internet-email",
              "ie-archive-policies"
            ]
          },
          {
            "id": "ie-compliance-and-audit",
            "name": "Compliance & Audit Requirements",
            "deps": [
              "ie-archive-policies",
              "ie-directory-services"
            ]
          }
        ]
      },
      {
        "id": "ie-channels-practices",
        "title": "Channels & Practices",
        "items": [
          {
            "id": "ie-internet-email",
            "name": "Internet Email (Outlook-style)",
            "deps": [
              "ie-mail-servers",
              "ie-directory-services"
            ]
          },
          {
            "id": "ie-mailing-lists",
            "name": "Mailing Lists & Distribution Groups",
            "deps": [
              "ie-internet-email"
            ]
          },
          {
            "id": "ie-archive-policies",
            "name": "Retention & Archiving Policies",
            "deps": [
              "ie-mail-servers"
            ]
          }
        ]
      },
      {
        "id": "ie-foundations",
        "title": "Infrastructure & Foundations",
        "items": [
          {
            "id": "ie-mail-servers",
            "name": "Mail Servers & Gateways",
            "deps": []
          },
          {
            "id": "ie-directory-services",
            "name": "Directory & Identity Services",
            "deps": []
          }
        ]
      }
    ]
  },
  {
    "id": "im",
    "title": "Corporate Communications – Enterprise IM & Early Social Era",
    "abstract": "<p>This map looks at the rise of enterprise instant messaging and early social platforms, from internal IM clients to tools like Sametime, Lync and Yammer. These channels promised to reduce email and speed up decisions, introduced presence indicators and chat culture, and laid the groundwork for later channel-based collaboration.</p>",
    "categories": [
      {
        "id": "es-user-needs",
        "title": "User & Business Needs",
        "items": [
          {
            "id": "es-fast-coordination",
            "name": "Fast Day-to-day Coordination",
            "deps": [
              "es-enterprise-im",
              "es-presence-indicators"
            ]
          },
          {
            "id": "es-cross-team-qna",
            "name": "Cross-team Q&A and Expertise Location",
            "deps": [
              "es-enterprise-social",
              "es-enterprise-im"
            ]
          },
          {
            "id": "es-reduced-email-volume",
            "name": "Pressure to Reduce Email Volume",
            "deps": [
              "es-enterprise-im",
              "es-enterprise-social"
            ]
          }
        ]
      },
      {
        "id": "es-channels-practices",
        "title": "Channels & Practices",
        "items": [
          {
            "id": "es-enterprise-im",
            "name": "Enterprise Instant Messaging",
            "deps": [
              "es-im-servers",
              "es-identity"
            ]
          },
          {
            "id": "es-enterprise-social",
            "name": "Enterprise Social Platforms",
            "deps": [
              "es-social-platform",
              "es-identity"
            ]
          },
          {
            "id": "es-presence-indicators",
            "name": "Presence Indicators & Status",
            "deps": [
              "es-enterprise-im"
            ]
          }
        ]
      },
      {
        "id": "es-foundations",
        "title": "Infrastructure & Foundations",
        "items": [
          {
            "id": "es-im-servers",
            "name": "IM Servers & Gateways",
            "deps": []
          },
          {
            "id": "es-social-platform",
            "name": "Enterprise Social Platform Backend",
            "deps": []
          },
          {
            "id": "es-identity",
            "name": "Identity & Single Sign-on",
            "deps": []
          }
        ]
      }
    ]
  },
  {
    "id": "slack",
    "title": "Corporate Communications – Slack/Teams & Enterprise Social Era",
    "abstract": "<p>This map focuses on modern channel-based platforms such as Slack and Microsoft Teams. These tools combine synchronous chat, asynchronous threads and deep integrations, turning channels and workspaces into core coordination units, and supporting transparency, social connection and automation in distributed organisations.</p>",
    "categories": [
      {
        "id": "st-user-needs",
        "title": "User & Business Needs",
        "items": [
          {
            "id": "st-channel-collaboration",
            "name": "Channel-based Collaboration & Projects",
            "deps": [
              "st-slack-teams-channels",
              "st-integrated-apps"
            ]
          },
          {
            "id": "st-transparency-and-discovery",
            "name": "Transparency & Knowledge Discovery",
            "deps": [
              "st-slack-teams-channels",
              "st-search-capability"
            ]
          },
          {
            "id": "st-remote-social-support",
            "name": "Remote Social Support & Belonging",
            "deps": [
              "st-social-channels",
              "st-reactions-emojis"
            ]
          }
        ]
      },
      {
        "id": "st-channels-practices",
        "title": "Channels & Practices",
        "items": [
          {
            "id": "st-slack-teams-channels",
            "name": "Slack/Teams Channels & Workspaces",
            "deps": [
              "st-workspace-config",
              "st-identity-layer"
            ]
          },
          {
            "id": "st-social-channels",
            "name": "Social & Interest-based Channels",
            "deps": [
              "st-slack-teams-channels"
            ]
          },
          {
            "id": "st-integrated-apps",
            "name": "Integrated Apps & Bots",
            "deps": [
              "st-app-platform",
              "st-identity-layer"
            ]
          },
          {
            "id": "st-search-capability",
            "name": "Search & Message Indexing",
            "deps": [
              "st-indexing-services"
            ]
          },
          {
            "id": "st-reactions-emojis",
            "name": "Reactions, Emojis & Lightweight Signals",
            "deps": [
              "st-slack-teams-channels"
            ]
          }
        ]
      },
      {
        "id": "st-foundations",
        "title": "Infrastructure & Foundations",
        "items": [
          {
            "id": "st-workspace-config",
            "name": "Workspace & Channel Configuration",
            "deps": []
          },
          {
            "id": "st-identity-layer",
            "name": "Identity Layer & Access Control",
            "deps": []
          },
          {
            "id": "st-app-platform",
            "name": "App & Integration Platform",
            "deps": []
          },
          {
            "id": "st-indexing-services",
            "name": "Indexing & Storage Services",
            "deps": []
          }
        ]
      }
    ]
  },
  {
    "id": "ai-layer",
    "title": "Corporate Communications – AI-layered Communication Era",
    "abstract": "<p>This map represents the emerging AI layer that sits on top of email and chat tools. AI systems summarise threads, prioritise messages, draft responses and translate content, aiming to address digital overload and make vast communication streams more manageable while raising new questions about visibility, bias and memory.</p>",
    "categories": [
      {
        "id": "ai-user-needs",
        "title": "User & Business Needs",
        "items": [
          {
            "id": "ai-reduced-overload",
            "name": "Reduced Overload & Triage Support",
            "deps": [
              "ai-summarisation",
              "ai-priority-triage"
            ]
          },
          {
            "id": "ai-faster-onboarding",
            "name": "Faster Onboarding & Context Access",
            "deps": [
              "ai-context-extraction",
              "ai-summarisation"
            ]
          },
          {
            "id": "ai-multilingual-collaboration",
            "name": "Multilingual Collaboration",
            "deps": [
              "ai-translation",
              "ai-integration-email-chat"
            ]
          }
        ]
      },
      {
        "id": "ai-services",
        "title": "AI Services & Behaviours",
        "items": [
          {
            "id": "ai-summarisation",
            "name": "Conversation Summarisation",
            "deps": [
              "ai-integration-email-chat",
              "ai-model-hosting"
            ]
          },
          {
            "id": "ai-priority-triage",
            "name": "Priority Triage & Notification Control",
            "deps": [
              "ai-integration-email-chat",
              "ai-policy-rules"
            ]
          },
          {
            "id": "ai-context-extraction",
            "name": "Context Extraction & Q&A",
            "deps": [
              "ai-integration-email-chat",
              "ai-model-hosting"
            ]
          },
          {
            "id": "ai-translation",
            "name": "Machine Translation in Channels",
            "deps": [
              "ai-model-hosting"
            ]
          }
        ]
      },
      {
        "id": "ai-foundations",
        "title": "Infrastructure & Foundations",
        "items": [
          {
            "id": "ai-integration-email-chat",
            "name": "Integration with Email & Chat Platforms",
            "deps": []
          },
          {
            "id": "ai-model-hosting",
            "name": "Model Hosting & Inference",
            "deps": []
          },
          {
            "id": "ai-policy-rules",
            "name": "AI Policy & Governance Rules",
            "deps": []
          }
        ]
      }
    ]
  }
]`,kl=`{
  "id": "deployment-models-blockscape",
  "title": "Deployment Models Value Chain",
  "abstract": "Users want reliable, fast, and secure delivery of software into production; value is realized by choosing an appropriate deployment model (from local Maven runs and fat JARs through VMs, containers, Kubernetes, GitOps, serverless, and edge/WASM) that is enabled by platform services (CI/CD, registries, observability, secrets, identity) and grounded on infrastructure (compute, network, storage).<br> Load details from <br> https://gist.githubusercontent.com/pwright/91c0dc3e2a625e44ea1d5f3534f43d8f/raw/d0233131d6bbcec806a885aa50482ece348e3629/deployment-models.bs",
  "categories": [
    {
      "id": "user-capabilities",
      "title": "Deployment Models (User-Facing)",
      "items": [
        {
          "id": "maven-local-run",
          "name": "Maven-Driven Local Run",
          "deps": [
            "compute"
          ]
        },
        {
          "id": "fat-jar-host",
          "name": "Fat JAR on Host",
          "deps": [
            "compute",
            "secrets",
            "monitoring"
          ]
        },
        {
          "id": "war-app-server",
          "name": "WAR/EAR on App Server",
          "deps": [
            "compute",
            "network",
            "secrets",
            "monitoring"
          ]
        },
        {
          "id": "immutable-vm",
          "name": "Immutable VM Images",
          "deps": [
            "compute",
            "network",
            "ci-cd",
            "secrets",
            "monitoring"
          ]
        },
        {
          "id": "single-host-container",
          "name": "Single-Host Container",
          "deps": [
            "registry",
            "compute",
            "network",
            "monitoring"
          ]
        },
        {
          "id": "compose-single-host",
          "name": "Compose on Single Host",
          "deps": [
            "registry",
            "compute",
            "network",
            "monitoring"
          ]
        },
        {
          "id": "buildpack-paas",
          "name": "Buildpack/PaaS Git-Push Deploy",
          "deps": [
            "identity",
            "ci-cd",
            "registry",
            "monitoring",
            "network"
          ]
        },
        {
          "id": "k8s",
          "name": "Kubernetes (Manifests/Helm/Kustomize)",
          "deps": [
            "registry",
            "compute",
            "network",
            "storage",
            "monitoring",
            "secrets",
            "identity"
          ]
        },
        {
          "id": "gitops",
          "name": "GitOps on Kubernetes",
          "deps": [
            "k8s",
            "ci-cd",
            "registry",
            "identity"
          ]
        },
        {
          "id": "k8s-serverless",
          "name": "K8s-Native Serverless (Knative/OpenFaaS)",
          "deps": [
            "k8s",
            "monitoring",
            "secrets"
          ]
        },
        {
          "id": "managed-faas",
          "name": "Managed FaaS (Lambda/Cloud Functions)",
          "deps": [
            "identity",
            "secrets",
            "monitoring",
            "network"
          ]
        },
        {
          "id": "edge-wasm-microvm",
          "name": "Edge/WASM/MicroVM Platforms",
          "deps": [
            "registry",
            "network",
            "identity"
          ]
        }
      ]
    },
    {
      "id": "platform-services",
      "title": "Platform Services",
      "items": [
        {
          "id": "ci-cd",
          "name": "CI/CD Automation",
          "deps": [
            "registry",
            "identity"
          ]
        },
        {
          "id": "registry",
          "name": "Artifact/OCI Registry",
          "deps": [
            "storage"
          ]
        },
        {
          "id": "monitoring",
          "name": "Monitoring & Logging",
          "deps": [
            "storage",
            "network"
          ]
        },
        {
          "id": "secrets",
          "name": "Secrets Management",
          "deps": [
            "identity",
            "storage"
          ]
        },
        {
          "id": "identity",
          "name": "Identity & Access",
          "deps": [
            "storage"
          ]
        }
      ]
    },
    {
      "id": "infrastructure",
      "title": "Infrastructure",
      "items": [
        {
          "id": "compute",
          "name": "Compute",
          "deps": []
        },
        {
          "id": "network",
          "name": "Networking",
          "deps": []
        },
        {
          "id": "storage",
          "name": "Storage",
          "deps": []
        }
      ]
    }
  ]
}`,Sl=`{
"id": "network",
"title": "Network Portfolio",
"abstract": "High-level index of the network BS models. Each tile links to one of the network maps to make hopping between them quick.",
"categories": [
{
"id": "edge-delivery",
"title": "Edge Delivery & HTTP Services",
"items": [
{
"id": "http-caching",
"name": "HTTP Caching",
"deps": ["reverse-proxying", "tcp-delivery", "tls-delivery", "recursive-authoritative-dns"]
},
{
"id": "reverse-proxying",
"name": "Reverse Proxying",
"deps": ["tcp-delivery", "tls-delivery", "recursive-authoritative-dns", "throughput-latency-congestion"]
}
]
},
{
"id": "traffic-steering-load-balancing",
"title": "Traffic Steering & Load Balancing",
"items": [
{
"id": "anycast-delivery",
"name": "Anycast Delivery",
"deps": ["l4-load-balancing", "health-checks", "recursive-authoritative-dns", "throughput-latency-congestion"]
},
{
"id": "l4-load-balancing",
"name": "L4 Load Balancing",
"deps": ["tcp-delivery", "udp-delivery", "mtu-pmtud-delivery", "throughput-latency-congestion", "health-checks"]
},
{
"id": "l7-load-balancing",
"name": "L7 Load Balancing",
"deps": ["reverse-proxying", "tls-delivery", "throughput-latency-congestion", "health-checks"]
}
]
},
{
"id": "dns-naming",
"title": "DNS & Naming",
"items": [
{
"id": "recursive-authoritative-dns",
"name": "Recursive vs Authoritative DNS",
"deps": ["udp-delivery", "tcp-delivery", "throughput-latency-congestion"]
},
{
"id": "geodns-edns",
"name": "GeoDNS & EDNS Client Subnet",
"deps": ["recursive-authoritative-dns", "health-checks", "throughput-latency-congestion"]
}
]
},
{
"id": "transport-security",
"title": "Core Transport & Security Mechanics",
"items": [
{
"id": "transport-protocols",
"name": "Core Transport Protocols",
"deps": ["throughput-latency-congestion", "mtu-pmtud-delivery"]
},
{
"id": "tcp-delivery",
"name": "TCP Data Delivery",
"deps": ["congestion-control-algorithms", "mtu-pmtud-delivery", "throughput-latency-congestion"]
},
{
"id": "udp-delivery",
"name": "UDP Data Delivery",
"deps": ["mtu-pmtud-delivery", "throughput-latency-congestion"]
},
{
"id": "tls-delivery",
"name": "TLS Handshake & Secure Delivery",
"deps": ["tcp-delivery", "recursive-authoritative-dns", "throughput-latency-congestion"]
},
{
"id": "mtu-pmtud-delivery",
"name": "IP Fragmentation & Path MTU Discovery",
"deps": ["throughput-latency-congestion"]
}
]
},
{
"id": "performance-dynamics",
"title": "Performance & Congestion Dynamics",
"items": [
{
"id": "throughput-latency-congestion",
"name": "Throughput, Latency & Congestion",
"deps": []
},
{
"id": "congestion-control-algorithms",
"name": "Congestion Control Algorithms",
"deps": ["throughput-latency-congestion"]
}
]
},
{
"id": "operations-reliability",
"title": "Operations, Reliability & Debugging",
"items": [
{
"id": "observability-troubleshooting",
"name": "Observability & Troubleshooting Concepts",
"deps": ["health-checks", "throughput-latency-congestion", "tcp-delivery", "recursive-authoritative-dns"]
},
{
"id": "health-checks",
"name": "Health Checks",
"deps": ["recursive-authoritative-dns", "tcp-delivery", "udp-delivery", "tls-delivery"]
}
]
}
]
}`,Cl=`{
  "id": "anycast-delivery",
  "title": "Anycast Delivery",
  "abstract": "Anycast delivers traffic to the nearest or best-performing instance of a service by advertising the same IP address from multiple locations. It is foundational to modern CDNs, DNS, and edge platforms, directly shaping latency, failover behavior, and blast radius.",
  "categories": [
    {
      "id": "user-visible-outcomes",
      "title": "User-Visible Outcomes",
      "items": [
        {
          "id": "low-latency-access",
          "name": "Low-Latency Access",
          "deps": [
            "nearest-pop-selection"
          ]
        },
        {
          "id": "implicit-failover",
          "name": "Implicit Failover",
          "deps": [
            "route-withdrawal"
          ]
        }
      ]
    },
    {
      "id": "traffic-behavior",
      "title": "Traffic Behavior",
      "items": [
        {
          "id": "nearest-pop-selection",
          "name": "Nearest PoP Selection",
          "deps": [
            "bgp-path-selection"
          ]
        },
        {
          "id": "traffic-shift",
          "name": "Traffic Shifts on Routing Change",
          "deps": [
            "bgp-convergence"
          ]
        }
      ]
    },
    {
      "id": "operational-dynamics",
      "title": "Operational Dynamics",
      "items": [
        {
          "id": "blast-radius-control",
          "name": "Blast Radius Control",
          "deps": [
            "site-isolation"
          ]
        },
        {
          "id": "capacity-dilution",
          "name": "Capacity Dilution Risk",
          "deps": [
            "traffic-distribution"
          ]
        }
      ]
    },
    {
      "id": "routing-mechanics",
      "title": "Routing Mechanics",
      "items": [
        {
          "id": "bgp-path-selection",
          "name": "BGP Path Selection",
          "deps": [
            "bgp-announcements"
          ]
        },
        {
          "id": "bgp-convergence",
          "name": "BGP Convergence",
          "deps": [
            "bgp-announcements"
          ]
        },
        {
          "id": "route-withdrawal",
          "name": "Route Withdrawal",
          "deps": [
            "bgp-announcements"
          ]
        }
      ]
    },
    {
      "id": "foundation",
      "title": "Foundation",
      "items": [
        {
          "id": "bgp-announcements",
          "name": "BGP Announcements",
          "deps": []
        },
        {
          "id": "site-isolation",
          "name": "Site-Level Isolation",
          "deps": []
        },
        {
          "id": "traffic-distribution",
          "name": "Traffic Distribution Across PoPs",
          "deps": []
        }
      ]
    }
  ]
}`,El=`[
  {
    "id": "http-caching",
    "title": "HTTP Caching",
    "abstract": "HTTP caching defines how responses are stored and reused across browsers, CDNs, and intermediaries. Correct cache semantics directly reduce origin load and global latency while preserving correctness.",
    "categories": [
      {
        "id": "user-impact",
        "title": "User Impact",
        "items": [
          {
            "id": "reduced-origin-latency",
            "name": "Reduced Origin Latency",
            "deps": [
              "cache-hit"
            ]
          },
          {
            "id": "faster-repeat-loads",
            "name": "Faster Repeat Loads",
            "deps": [
              "freshness-lifetime"
            ]
          }
        ]
      },
      {
        "id": "cache-behavior",
        "title": "Cache Behavior",
        "items": [
          {
            "id": "cache-hit",
            "name": "Cache Hits",
            "deps": [
              "cache-storage"
            ]
          },
          {
            "id": "cache-miss",
            "name": "Cache Misses",
            "deps": [
              "cache-storage"
            ]
          }
        ]
      },
      {
        "id": "cache-controls",
        "title": "Cache Controls",
        "items": [
          {
            "id": "cache-control",
            "name": "Cache-Control Directives",
            "deps": []
          },
          {
            "id": "etag-validation",
            "name": "ETag / Revalidation",
            "deps": []
          },
          {
            "id": "stale-while-revalidate",
            "name": "Stale-While-Revalidate",
            "deps": []
          }
        ]
      },
      {
        "id": "correctness-signals",
        "title": "Correctness Signals",
        "items": [
          {
            "id": "vary-header",
            "name": "Vary Header",
            "deps": []
          }
        ]
      },
      {
        "id": "foundation",
        "title": "Foundation",
        "items": [
          {
            "id": "cache-storage",
            "name": "Cache Storage (Browser / CDN)",
            "deps": []
          },
          {
            "id": "freshness-lifetime",
            "name": "Freshness Lifetime",
            "deps": []
          }
        ]
      }
    ]
  },
  {
    "id": "content-negotiation",
    "title": "Content Negotiation",
    "abstract": "Content negotiation allows a single URL to serve multiple representations based on client capabilities. While powerful for performance, it requires careful cache key design to avoid fragmentation and inefficiency.",
    "categories": [
      {
        "id": "user-visible-effects",
        "title": "User-Visible Effects",
        "items": [
          {
            "id": "smaller-payloads",
            "name": "Smaller Payloads",
            "deps": [
              "compression-selection"
            ]
          },
          {
            "id": "format-optimized-content",
            "name": "Format-Optimized Content",
            "deps": [
              "representation-selection"
            ]
          }
        ]
      },
      {
        "id": "representation-selection",
        "title": "Representation Selection",
        "items": [
          {
            "id": "compression-selection",
            "name": "Compression Selection (gzip/brotli)",
            "deps": [
              "accept-encoding"
            ]
          },
          {
            "id": "image-format-selection",
            "name": "Image Format Selection (webp/avif)",
            "deps": [
              "accept-header"
            ]
          }
        ]
      },
      {
        "id": "cache-key-design",
        "title": "Cache Key Design",
        "items": [
          {
            "id": "vary-usage",
            "name": "Vary Usage",
            "deps": [
              "accept-header"
            ]
          },
          {
            "id": "cache-fragmentation",
            "name": "Cache Fragmentation Risk",
            "deps": [
              "vary-usage"
            ]
          }
        ]
      },
      {
        "id": "client-signals",
        "title": "Client Signals",
        "items": [
          {
            "id": "accept-header",
            "name": "Accept / Accept-Encoding Headers",
            "deps": []
          }
        ]
      },
      {
        "id": "foundation",
        "title": "Foundation",
        "items": [
          {
            "id": "representation-variants",
            "name": "Multiple Representations",
            "deps": []
          }
        ]
      }
    ]
  },
  {
    "id": "origin-shield",
    "title": "Origin Shield & Mid-Tier Caching",
    "abstract": "Origin shields and mid-tier caches introduce an additional caching layer between edges and origins. They dramatically reduce origin load and prevent request amplification during cache misses or traffic spikes.",
    "categories": [
      {
        "id": "user-visible-outcomes",
        "title": "User-Visible Outcomes",
        "items": [
          {
            "id": "stable-latency",
            "name": "Stable Latency During Spikes",
            "deps": [
              "request-coalescing"
            ]
          },
          {
            "id": "higher-availability",
            "name": "Higher Availability",
            "deps": [
              "origin-protection"
            ]
          }
        ]
      },
      {
        "id": "load-reduction",
        "title": "Load Reduction",
        "items": [
          {
            "id": "origin-protection",
            "name": "Origin Protection",
            "deps": [
              "mid-tier-cache"
            ]
          },
          {
            "id": "request-coalescing",
            "name": "Request Coalescing",
            "deps": [
              "mid-tier-cache"
            ]
          }
        ]
      },
      {
        "id": "cache-topology",
        "title": "Cache Topology",
        "items": [
          {
            "id": "edge-cache",
            "name": "Edge Cache",
            "deps": []
          },
          {
            "id": "mid-tier-cache",
            "name": "Mid-Tier / Shield Cache",
            "deps": [
              "edge-cache"
            ]
          }
        ]
      },
      {
        "id": "failure-modes",
        "title": "Failure Modes",
        "items": [
          {
            "id": "thundering-herd",
            "name": "Thundering Herd Prevention",
            "deps": [
              "request-coalescing"
            ]
          }
        ]
      },
      {
        "id": "foundation",
        "title": "Foundation",
        "items": [
          {
            "id": "origin-service",
            "name": "Origin Service",
            "deps": []
          }
        ]
      }
    ]
  },
  {
    "id": "resource-hints",
    "title": "Prefetch, Preconnect & Resource Hints",
    "abstract": "Resource hints allow browsers to proactively establish connections or fetch critical resources. When used correctly, they reduce startup latency and smooth page load waterfalls.",
    "categories": [
      {
        "id": "user-experience",
        "title": "User Experience",
        "items": [
          {
            "id": "faster-startup",
            "name": "Faster Page Startup",
            "deps": [
              "early-connection"
            ]
          },
          {
            "id": "reduced-blocking",
            "name": "Reduced Blocking Time",
            "deps": [
              "critical-resource-fetch"
            ]
          }
        ]
      },
      {
        "id": "hint-types",
        "title": "Hint Types",
        "items": [
          {
            "id": "preconnect",
            "name": "Preconnect",
            "deps": [
              "dns-resolution"
            ]
          },
          {
            "id": "preload",
            "name": "Preload",
            "deps": [
              "resource-priority"
            ]
          },
          {
            "id": "prefetch",
            "name": "Prefetch",
            "deps": [
              "idle-bandwidth"
            ]
          }
        ]
      },
      {
        "id": "browser-behavior",
        "title": "Browser Behavior",
        "items": [
          {
            "id": "early-connection",
            "name": "Early Connection Establishment",
            "deps": [
              "preconnect"
            ]
          },
          {
            "id": "critical-resource-fetch",
            "name": "Critical Resource Fetching",
            "deps": [
              "preload"
            ]
          }
        ]
      },
      {
        "id": "scheduling-signals",
        "title": "Scheduling Signals",
        "items": [
          {
            "id": "resource-priority",
            "name": "Resource Priority",
            "deps": []
          },
          {
            "id": "idle-bandwidth",
            "name": "Idle Bandwidth Availability",
            "deps": []
          }
        ]
      },
      {
        "id": "foundation",
        "title": "Foundation",
        "items": [
          {
            "id": "dns-resolution",
            "name": "DNS Resolution",
            "deps": []
          }
        ]
      }
    ]
  }
]`,_l=`[
  {
    "id": "congestion-control-algorithms",
    "title": "Congestion Control Algorithms",
    "abstract": "Congestion control algorithms (e.g., BBR, CUBIC, Reno) determine how quickly a sender increases or reduces sending rate in response to network signals. Their behavior directly impacts throughput, latency under load, and fairness across competing flows.",
    "categories": [
      {
        "id": "user-impact",
        "title": "User Impact",
        "items": [
          {
            "id": "cca-snappiness",
            "name": "Interactive Snappiness",
            "deps": [
              "cca-queue-control",
              "cca-rtt-signal"
            ]
          },
          {
            "id": "cca-throughput",
            "name": "Sustained Throughput",
            "deps": [
              "cca-rate-control",
              "cca-path-capacity"
            ]
          }
        ]
      },
      {
        "id": "algorithm-choices",
        "title": "Algorithm Choices",
        "items": [
          {
            "id": "cca-bbr",
            "name": "BBR (Model-Based)",
            "deps": [
              "cca-bw-estimation",
              "cca-rtt-signal"
            ]
          },
          {
            "id": "cca-cubic",
            "name": "CUBIC (Loss-Based)",
            "deps": [
              "cca-loss-signal",
              "cca-ack-clock"
            ]
          },
          {
            "id": "cca-reno",
            "name": "Reno/NewReno (Classic)",
            "deps": [
              "cca-loss-signal",
              "cca-ack-clock"
            ]
          }
        ]
      },
      {
        "id": "control-loop",
        "title": "Control Loop Mechanics",
        "items": [
          {
            "id": "cca-rate-control",
            "name": "Rate/Pacing Control",
            "deps": [
              "cca-ack-clock"
            ]
          },
          {
            "id": "cca-queue-control",
            "name": "Queue/Delay Sensitivity",
            "deps": [
              "cca-queueing-delay"
            ]
          }
        ]
      },
      {
        "id": "signals",
        "title": "Signals",
        "items": [
          {
            "id": "cca-rtt-signal",
            "name": "RTT Signal",
            "deps": []
          },
          {
            "id": "cca-loss-signal",
            "name": "Loss Signal",
            "deps": []
          },
          {
            "id": "cca-queueing-delay",
            "name": "Queueing Delay",
            "deps": []
          }
        ]
      },
      {
        "id": "foundation",
        "title": "Foundation",
        "items": [
          {
            "id": "cca-ack-clock",
            "name": "ACK Clocking",
            "deps": []
          },
          {
            "id": "cca-bw-estimation",
            "name": "Bandwidth Estimation",
            "deps": [
              "cca-path-capacity"
            ]
          },
          {
            "id": "cca-path-capacity",
            "name": "Path Bottleneck Capacity",
            "deps": []
          }
        ]
      }
    ]
  },
  {
    "id": "bufferbloat-aqm",
    "title": "Bufferbloat & AQM",
    "abstract": "Bufferbloat is excessive queueing that increases latency and jitter under load. Active Queue Management (AQM) and fair queuing reduce queue buildup, improving responsiveness while maintaining good throughput.",
    "categories": [
      {
        "id": "user-outcomes",
        "title": "User Outcomes",
        "items": [
          {
            "id": "aqm-low-latency",
            "name": "Low Latency Under Load",
            "deps": [
              "aqm-queue-control",
              "aqm-fairness"
            ]
          },
          {
            "id": "aqm-stable-streaming",
            "name": "Stable Real-Time Streams",
            "deps": [
              "aqm-jitter-control",
              "aqm-queue-control"
            ]
          }
        ]
      },
      {
        "id": "queue-management",
        "title": "Queue Management",
        "items": [
          {
            "id": "aqm-fqcodel",
            "name": "fq_codel",
            "deps": [
              "aqm-fair-queuing",
              "aqm-delay-targets"
            ]
          },
          {
            "id": "aqm-pie",
            "name": "PIE",
            "deps": [
              "aqm-delay-targets"
            ]
          }
        ]
      },
      {
        "id": "control-mechanisms",
        "title": "Control Mechanisms",
        "items": [
          {
            "id": "aqm-queue-control",
            "name": "Queue Control (Drop/Mark)",
            "deps": [
              "aqm-delay-targets"
            ]
          },
          {
            "id": "aqm-jitter-control",
            "name": "Jitter Smoothing",
            "deps": [
              "aqm-fair-queuing"
            ]
          }
        ]
      },
      {
        "id": "signals-metrics",
        "title": "Signals & Metrics",
        "items": [
          {
            "id": "aqm-queue-delay",
            "name": "Queueing Delay",
            "deps": []
          },
          {
            "id": "aqm-sojourn-time",
            "name": "Sojourn Time",
            "deps": [
              "aqm-queue-delay"
            ]
          }
        ]
      },
      {
        "id": "foundation",
        "title": "Foundation",
        "items": [
          {
            "id": "aqm-fair-queuing",
            "name": "Fair Queuing",
            "deps": []
          },
          {
            "id": "aqm-delay-targets",
            "name": "Delay Targets/Thresholds",
            "deps": []
          },
          {
            "id": "aqm-link-buffers",
            "name": "Link Buffers",
            "deps": []
          }
        ]
      }
    ]
  },
  {
    "id": "jitter-delivery",
    "title": "Jitter",
    "abstract": "Jitter is variability in packet arrival times. It is especially harmful to real-time voice/video and interactive traffic, and is typically driven by queueing dynamics, path changes, and contention.",
    "categories": [
      {
        "id": "user-impact",
        "title": "User Impact",
        "items": [
          {
            "id": "jit-media-quality",
            "name": "Media Quality (Voice/Video)",
            "deps": [
              "jit-playout-buffer",
              "jit-jitter-signal"
            ]
          },
          {
            "id": "jit-interactive-feel",
            "name": "Interactive Responsiveness",
            "deps": [
              "jit-queue-control",
              "jit-jitter-signal"
            ]
          }
        ]
      },
      {
        "id": "application-mitigation",
        "title": "Application Mitigation",
        "items": [
          {
            "id": "jit-playout-buffer",
            "name": "Playout Buffering",
            "deps": [
              "jit-jitter-signal"
            ]
          },
          {
            "id": "jit-adaptive-bitrate",
            "name": "Adaptive Bitrate / Rate Adaptation",
            "deps": [
              "jit-loss-signal",
              "jit-jitter-signal"
            ]
          }
        ]
      },
      {
        "id": "network-controls",
        "title": "Network Controls",
        "items": [
          {
            "id": "jit-queue-control",
            "name": "Queue Control (AQM/FQ)",
            "deps": [
              "jit-queueing-delay"
            ]
          },
          {
            "id": "jit-traffic-shaping",
            "name": "Traffic Shaping",
            "deps": [
              "jit-link-contention"
            ]
          }
        ]
      },
      {
        "id": "signals",
        "title": "Signals",
        "items": [
          {
            "id": "jit-jitter-signal",
            "name": "Jitter Signal",
            "deps": []
          },
          {
            "id": "jit-queueing-delay",
            "name": "Queueing Delay",
            "deps": []
          },
          {
            "id": "jit-loss-signal",
            "name": "Packet Loss",
            "deps": []
          }
        ]
      },
      {
        "id": "foundation",
        "title": "Foundation",
        "items": [
          {
            "id": "jit-link-contention",
            "name": "Link Contention",
            "deps": []
          },
          {
            "id": "jit-path-changes",
            "name": "Path Changes",
            "deps": []
          }
        ]
      }
    ]
  },
  {
    "id": "packet-loss-delivery",
    "title": "Packet Loss",
    "abstract": "Packet loss reduces effective throughput and increases latency via retransmissions and recovery behavior. TCP performance is particularly sensitive to loss, while QUIC can improve recovery patterns but still depends on loss conditions. If I missed a heading from your original list, tell me which one and I’ll continue from there.",
    "categories": [
      {
        "id": "user-visible-effects",
        "title": "User-Visible Effects",
        "items": [
          {
            "id": "loss-slow-pages",
            "name": "Slow Page Loads",
            "deps": [
              "loss-retransmissions",
              "loss-rtt"
            ]
          },
          {
            "id": "loss-media-glitches",
            "name": "Media Glitches / Rebuffering",
            "deps": [
              "loss-jitter",
              "loss-recovery"
            ]
          }
        ]
      },
      {
        "id": "transport-reactions",
        "title": "Transport Reactions",
        "items": [
          {
            "id": "loss-tcp-throughput",
            "name": "TCP Throughput Degradation",
            "deps": [
              "loss-congestion-backoff",
              "loss-retransmissions"
            ]
          },
          {
            "id": "loss-quic-resilience",
            "name": "QUIC Loss Resilience",
            "deps": [
              "loss-recovery",
              "loss-pacing"
            ]
          }
        ]
      },
      {
        "id": "recovery-mechanics",
        "title": "Recovery Mechanics",
        "items": [
          {
            "id": "loss-retransmissions",
            "name": "Retransmissions",
            "deps": [
              "loss-detection"
            ]
          },
          {
            "id": "loss-recovery",
            "name": "Loss Recovery (SACK/ACK Ranges)",
            "deps": [
              "loss-detection"
            ]
          }
        ]
      },
      {
        "id": "signals",
        "title": "Signals",
        "items": [
          {
            "id": "loss-rate",
            "name": "Loss Rate",
            "deps": []
          },
          {
            "id": "loss-rtt",
            "name": "RTT",
            "deps": []
          },
          {
            "id": "loss-jitter",
            "name": "Jitter",
            "deps": []
          }
        ]
      },
      {
        "id": "foundation",
        "title": "Foundation",
        "items": [
          {
            "id": "loss-detection",
            "name": "Loss Detection (Timeout/DupACK)",
            "deps": []
          },
          {
            "id": "loss-congestion-backoff",
            "name": "Congestion Backoff",
            "deps": []
          },
          {
            "id": "loss-pacing",
            "name": "Packet Pacing",
            "deps": []
          }
        ]
      }
    ]
  }
]`,Il=`[
  {
    "id": "transport-protocols",
    "title": "Core Transport Protocols",
    "abstract": "Transport protocols define how bytes move across the network, trading off reliability, latency, and control. Their design and tuning directly shape user-perceived speed, stability, and throughput.",
    "categories": [
      {
        "id": "user-impact",
        "title": "User Impact",
        "items": [
          {
            "id": "latency-experience",
            "name": "Latency Experience",
            "deps": [
              "handshake-cost",
              "congestion-control"
            ]
          },
          {
            "id": "throughput-experience",
            "name": "Throughput Experience",
            "deps": [
              "flow-control",
              "packet-loss"
            ]
          }
        ]
      },
      {
        "id": "transport-semantics",
        "title": "Transport Semantics",
        "items": [
          {
            "id": "reliability-model",
            "name": "Reliability Model",
            "deps": [
              "tcp-transport",
              "udp-transport"
            ]
          },
          {
            "id": "ordering-model",
            "name": "Ordering Guarantees",
            "deps": [
              "tcp-transport",
              "quic-transport"
            ]
          }
        ]
      },
      {
        "id": "connection-setup",
        "title": "Connection Setup",
        "items": [
          {
            "id": "handshake-cost",
            "name": "Handshake Cost",
            "deps": [
              "tcp-transport",
              "tls-handshake",
              "quic-transport"
            ]
          },
          {
            "id": "session-resumption",
            "name": "Session Resumption",
            "deps": [
              "tls-handshake"
            ]
          }
        ]
      },
      {
        "id": "transport-mechanics",
        "title": "Transport Mechanics",
        "items": [
          {
            "id": "congestion-control",
            "name": "Congestion Control",
            "deps": [
              "packet-loss",
              "rtt"
            ]
          },
          {
            "id": "flow-control",
            "name": "Flow Control & Windows",
            "deps": [
              "mss-mtu"
            ]
          }
        ]
      },
      {
        "id": "foundations",
        "title": "Foundations",
        "items": [
          {
            "id": "tcp-transport",
            "name": "TCP",
            "deps": []
          },
          {
            "id": "udp-transport",
            "name": "UDP",
            "deps": []
          },
          {
            "id": "quic-transport",
            "name": "QUIC",
            "deps": [
              "udp-transport"
            ]
          },
          {
            "id": "tls-handshake",
            "name": "TLS",
            "deps": []
          },
          {
            "id": "packet-loss",
            "name": "Packet Loss",
            "deps": []
          },
          {
            "id": "rtt",
            "name": "Round Trip Time",
            "deps": []
          },
          {
            "id": "mss-mtu",
            "name": "MSS / MTU",
            "deps": []
          }
        ]
      }
    ]
  },
  {
    "id": "routing-path-selection",
    "title": "Routing & Path Selection",
    "abstract": "Internet routing determines which physical and logical paths traffic takes between endpoints. Control-plane decisions and convergence behavior heavily influence latency, reliability, and reachability.",
    "categories": [
      {
        "id": "delivery-effects",
        "title": "Delivery Effects",
        "items": [
          {
            "id": "global-latency",
            "name": "Global Latency",
            "deps": [
              "path-selection",
              "anycast"
            ]
          },
          {
            "id": "availability",
            "name": "Availability & Resilience",
            "deps": [
              "route-convergence"
            ]
          }
        ]
      },
      {
        "id": "traffic-steering",
        "title": "Traffic Steering",
        "items": [
          {
            "id": "path-selection",
            "name": "Path Selection",
            "deps": [
              "bgp-policy"
            ]
          },
          {
            "id": "anycast",
            "name": "Anycast",
            "deps": [
              "bgp-announcements"
            ]
          }
        ]
      },
      {
        "id": "routing-dynamics",
        "title": "Routing Dynamics",
        "items": [
          {
            "id": "route-convergence",
            "name": "Route Convergence",
            "deps": [
              "bgp-announcements"
            ]
          },
          {
            "id": "propagation-delay",
            "name": "Propagation Delay",
            "deps": [
              "bgp-announcements"
            ]
          }
        ]
      },
      {
        "id": "control-plane",
        "title": "Control Plane",
        "items": [
          {
            "id": "bgp-policy",
            "name": "BGP Policy",
            "deps": []
          },
          {
            "id": "bgp-announcements",
            "name": "BGP Announcements",
            "deps": []
          }
        ]
      }
    ]
  },
  {
    "id": "dns-level-delivery",
    "title": "DNS-Level Delivery",
    "abstract": "DNS decides where users connect before transport even begins. Resolver behavior, record strategy, and geographic steering significantly influence first-hop latency and backend load distribution.",
    "categories": [
      {
        "id": "user-routing",
        "title": "User Routing Outcome",
        "items": [
          {
            "id": "initial-latency",
            "name": "Initial Connection Latency",
            "deps": [
              "authoritative-dns",
              "geodns"
            ]
          },
          {
            "id": "region-selection",
            "name": "Region Selection Accuracy",
            "deps": [
              "edns-client-subnet"
            ]
          }
        ]
      },
      {
        "id": "resolution-strategy",
        "title": "Resolution Strategy",
        "items": [
          {
            "id": "geodns",
            "name": "GeoDNS",
            "deps": [
              "authoritative-dns"
            ]
          },
          {
            "id": "dns-weighting",
            "name": "Weighted Records",
            "deps": [
              "authoritative-dns"
            ]
          }
        ]
      },
      {
        "id": "dns-roles",
        "title": "DNS Roles",
        "items": [
          {
            "id": "recursive-dns",
            "name": "Recursive Resolvers",
            "deps": []
          },
          {
            "id": "authoritative-dns",
            "name": "Authoritative DNS",
            "deps": []
          }
        ]
      },
      {
        "id": "signals",
        "title": "Routing Signals",
        "items": [
          {
            "id": "edns-client-subnet",
            "name": "EDNS Client Subnet",
            "deps": []
          }
        ]
      }
    ]
  },
  {
    "id": "load-distribution",
    "title": "L4 / L7 Load Distribution",
    "abstract": "Load distribution systems spread traffic across healthy backends while preserving performance. The layer at which balancing occurs determines flexibility, overhead, and observability.",
    "categories": [
      {
        "id": "service-outcomes",
        "title": "Service Outcomes",
        "items": [
          {
            "id": "service-reliability",
            "name": "Service Reliability",
            "deps": [
              "health-checks"
            ]
          },
          {
            "id": "backend-efficiency",
            "name": "Backend Efficiency",
            "deps": [
              "connection-pooling"
            ]
          }
        ]
      },
      {
        "id": "balancing-modes",
        "title": "Balancing Modes",
        "items": [
          {
            "id": "l4-balancing",
            "name": "L4 Load Balancing",
            "deps": []
          },
          {
            "id": "l7-balancing",
            "name": "L7 Load Balancing",
            "deps": [
              "http-awareness"
            ]
          }
        ]
      },
      {
        "id": "proxy-functions",
        "title": "Proxy Functions",
        "items": [
          {
            "id": "reverse-proxy",
            "name": "Reverse Proxying",
            "deps": [
              "connection-pooling"
            ]
          },
          {
            "id": "connection-pooling",
            "name": "Connection Pooling",
            "deps": []
          }
        ]
      },
      {
        "id": "health-management",
        "title": "Health Management",
        "items": [
          {
            "id": "health-checks",
            "name": "Health Checks",
            "deps": []
          }
        ]
      },
      {
        "id": "protocol-awareness",
        "title": "Protocol Awareness",
        "items": [
          {
            "id": "http-awareness",
            "name": "HTTP Awareness",
            "deps": []
          }
        ]
      }
    ]
  },
  {
    "id": "caching-edge",
    "title": "Caching & Edge Delivery",
    "abstract": "Caching and edge strategies reduce distance and load by serving content closer to users. Correct cache semantics are essential for both performance and correctness.",
    "categories": [
      {
        "id": "user-benefits",
        "title": "User Benefits",
        "items": [
          {
            "id": "reduced-latency",
            "name": "Reduced Latency",
            "deps": [
              "edge-cache"
            ]
          },
          {
            "id": "faster-startup",
            "name": "Faster Startup",
            "deps": [
              "preconnect-hints"
            ]
          }
        ]
      },
      {
        "id": "cache-behavior",
        "title": "Cache Behavior",
        "items": [
          {
            "id": "http-caching",
            "name": "HTTP Caching Semantics",
            "deps": []
          },
          {
            "id": "content-variation",
            "name": "Content Negotiation",
            "deps": [
              "http-caching"
            ]
          }
        ]
      },
      {
        "id": "cache-topology",
        "title": "Cache Topology",
        "items": [
          {
            "id": "edge-cache",
            "name": "Edge Caching",
            "deps": []
          },
          {
            "id": "origin-shield",
            "name": "Origin Shield / Mid-Tier",
            "deps": [
              "edge-cache"
            ]
          }
        ]
      },
      {
        "id": "client-hints",
        "title": "Client Hints",
        "items": [
          {
            "id": "preconnect-hints",
            "name": "Preconnect / Preload / Prefetch",
            "deps": []
          }
        ]
      }
    ]
  },
  {
    "id": "observability-troubleshooting",
    "title": "Observability & Troubleshooting",
    "abstract": "Observability tools expose where delivery breaks down across DNS, routing, transport, and application layers. They are essential for diagnosing latency, loss, and availability issues.",
    "categories": [
      {
        "id": "user-metrics",
        "title": "User Metrics",
        "items": [
          {
            "id": "ttfb",
            "name": "Time To First Byte",
            "deps": [
              "dns-latency",
              "handshake-latency"
            ]
          },
          {
            "id": "connection-reuse",
            "name": "Connection Reuse",
            "deps": [
              "keepalive"
            ]
          }
        ]
      },
      {
        "id": "path-analysis",
        "title": "Path Analysis",
        "items": [
          {
            "id": "traceroute",
            "name": "Traceroute / MTR",
            "deps": []
          }
        ]
      },
      {
        "id": "packet-analysis",
        "title": "Packet Analysis",
        "items": [
          {
            "id": "pcap-analysis",
            "name": "PCAP / tcpdump / Wireshark",
            "deps": []
          }
        ]
      },
      {
        "id": "supporting-signals",
        "title": "Supporting Signals",
        "items": [
          {
            "id": "dns-latency",
            "name": "DNS Latency",
            "deps": []
          },
          {
            "id": "handshake-latency",
            "name": "Handshake Latency",
            "deps": []
          },
          {
            "id": "keepalive",
            "name": "Keepalive & Idle Timeouts",
            "deps": []
          }
        ]
      }
    ]
  }
]`,xl=`{
  "id": "geodns-edns",
  "title": "GeoDNS & EDNS Client Subnet",
  "abstract": "GeoDNS and EDNS Client Subnet (ECS) influence where users connect by exposing location signals during DNS resolution. When used correctly, they improve initial routing and reduce long-haul traffic; when misused, they fragment caches and increase latency.",
  "categories": [
    {
      "id": "user-visible-results",
      "title": "User-Visible Results",
      "items": [
        {
          "id": "shorter-paths",
          "name": "Shorter Network Paths",
          "deps": [
            "geo-routing-decision"
          ]
        },
        {
          "id": "faster-first-connection",
          "name": "Faster First Connection",
          "deps": [
            "ecs-signal",
            "authoritative-logic"
          ]
        }
      ]
    },
    {
      "id": "routing-decisions",
      "title": "Routing Decisions",
      "items": [
        {
          "id": "geo-routing-decision",
          "name": "Geographic Routing Decision",
          "deps": [
            "client-location-estimate"
          ]
        },
        {
          "id": "fallback-routing",
          "name": "Fallback / Default Routing",
          "deps": [
            "authoritative-logic"
          ]
        }
      ]
    },
    {
      "id": "location-signals",
      "title": "Location Signals",
      "items": [
        {
          "id": "ecs-signal",
          "name": "EDNS Client Subnet Signal",
          "deps": [
            "recursive-support"
          ]
        },
        {
          "id": "resolver-location",
          "name": "Resolver Location Heuristics",
          "deps": []
        }
      ]
    },
    {
      "id": "authoritative-logic",
      "title": "Authoritative Logic",
      "items": [
        {
          "id": "authoritative-logic",
          "name": "Authoritative Geo Logic",
          "deps": [
            "zone-data"
          ]
        },
        {
          "id": "record-selection",
          "name": "Record Selection Logic",
          "deps": [
            "zone-data"
          ]
        }
      ]
    },
    {
      "id": "foundation",
      "title": "Foundation",
      "items": [
        {
          "id": "zone-data",
          "name": "DNS Zone Data",
          "deps": []
        },
        {
          "id": "recursive-support",
          "name": "Recursive Resolver ECS Support",
          "deps": []
        },
        {
          "id": "client-location-estimate",
          "name": "Client Location Estimation",
          "deps": []
        }
      ]
    }
  ]
}`,Al=`{
  "id": "health-checks",
  "title": "Health Checks",
  "abstract": "Health checks determine whether traffic should be sent to a given backend or endpoint. Their design directly affects failure detection speed, blast radius, and the likelihood of cascading outages during partial failures.",
  "categories": [
    {
      "id": "user-visible-effects",
      "title": "User-Visible Effects",
      "items": [
        {
          "id": "error-rate-reduction",
          "name": "Reduced Error Rates",
          "deps": [
            "unhealthy-node-removal"
          ]
        },
        {
          "id": "faster-recovery",
          "name": "Faster Failure Recovery",
          "deps": [
            "detection-speed"
          ]
        }
      ]
    },
    {
      "id": "decision-outcomes",
      "title": "Decision Outcomes",
      "items": [
        {
          "id": "unhealthy-node-removal",
          "name": "Unhealthy Node Removal",
          "deps": [
            "health-evaluation"
          ]
        },
        {
          "id": "traffic-restoration",
          "name": "Traffic Restoration",
          "deps": [
            "recovery-detection"
          ]
        }
      ]
    },
    {
      "id": "health-evaluation",
      "title": "Health Evaluation",
      "items": [
        {
          "id": "active-check-results",
          "name": "Active Check Results",
          "deps": [
            "active-health-checks"
          ]
        },
        {
          "id": "passive-check-results",
          "name": "Passive Check Results",
          "deps": [
            "passive-health-checks"
          ]
        }
      ]
    },
    {
      "id": "check-types",
      "title": "Check Types",
      "items": [
        {
          "id": "active-health-checks",
          "name": "Active Health Checks",
          "deps": [
            "probe-logic"
          ]
        },
        {
          "id": "passive-health-checks",
          "name": "Passive Health Checks",
          "deps": [
            "traffic-observation"
          ]
        }
      ]
    },
    {
      "id": "foundation",
      "title": "Foundation",
      "items": [
        {
          "id": "probe-logic",
          "name": "Probe Logic (HTTP/TCP/UDP)",
          "deps": []
        },
        {
          "id": "traffic-observation",
          "name": "Live Traffic Observation",
          "deps": []
        },
        {
          "id": "detection-speed",
          "name": "Failure Detection Speed",
          "deps": []
        },
        {
          "id": "recovery-detection",
          "name": "Recovery Detection",
          "deps": []
        }
      ]
    }
  ]
}`,Tl=`{
  "id": "mtu-pmtud-delivery",
  "title": "IP Fragmentation & Path MTU Discovery",
  "abstract": "MTU handling and Path MTU Discovery determine the maximum packet size that can safely traverse a network path. Failures or misconfigurations lead to fragmentation, black holes, retransmissions, and catastrophic throughput collapse—especially for TCP and QUIC.",
  "categories": [
    {
      "id": "user-impact",
      "title": "User-Visible Impact",
      "items": [
        {
          "id": "throughput-collapse",
          "name": "Throughput Collapse",
          "deps": [
            "packet-fragmentation",
            "black-hole-mtu"
          ]
        },
        {
          "id": "connection-instability",
          "name": "Connection Instability & Timeouts",
          "deps": [
            "icmp-filtering"
          ]
        }
      ]
    },
    {
      "id": "transport-effects",
      "title": "Transport Effects",
      "items": [
        {
          "id": "tcp-mss-clamping",
          "name": "TCP MSS Clamping",
          "deps": [
            "path-mtu"
          ]
        },
        {
          "id": "quic-pmtud",
          "name": "QUIC PMTUD Handling",
          "deps": [
            "path-mtu"
          ]
        }
      ]
    },
    {
      "id": "discovery-mechanisms",
      "title": "Discovery Mechanisms",
      "items": [
        {
          "id": "pmtud-classic",
          "name": "Classic PMTUD (ICMP-based)",
          "deps": [
            "icmp-too-big"
          ]
        },
        {
          "id": "pmtud-probing",
          "name": "Packetization Layer PMTUD",
          "deps": [
            "path-mtu"
          ]
        }
      ]
    },
    {
      "id": "failure-modes",
      "title": "Failure Modes",
      "items": [
        {
          "id": "black-hole-mtu",
          "name": "PMTUD Black Holes",
          "deps": [
            "icmp-filtering"
          ]
        },
        {
          "id": "packet-fragmentation",
          "name": "IP Fragmentation",
          "deps": [
            "path-mtu"
          ]
        }
      ]
    },
    {
      "id": "path-constraints",
      "title": "Path Constraints",
      "items": [
        {
          "id": "path-mtu",
          "name": "Path MTU",
          "deps": []
        },
        {
          "id": "icmp-too-big",
          "name": "ICMP Fragmentation Needed",
          "deps": []
        },
        {
          "id": "icmp-filtering",
          "name": "ICMP Filtering / Blocking",
          "deps": []
        }
      ]
    }
  ]
}`,Ll=`{
  "id": "l4-load-balancing",
  "title": "L4 Load Balancing",
  "abstract": "Layer 4 load balancing distributes traffic based on transport-layer attributes such as IP addresses and ports. By remaining protocol-agnostic and avoiding application inspection, L4 balancers achieve extremely high throughput and low latency, making them ideal for large-scale traffic distribution.",
  "categories": [
    {
      "id": "user-visible-impact",
      "title": "User-Visible Impact",
      "items": [
        {
          "id": "minimal-added-latency",
          "name": "Minimal Added Latency",
          "deps": [
            "stateless-forwarding"
          ]
        },
        {
          "id": "high-throughput-delivery",
          "name": "High Throughput Delivery",
          "deps": [
            "connection-distribution"
          ]
        }
      ]
    },
    {
      "id": "balancing-behavior",
      "title": "Balancing Behavior",
      "items": [
        {
          "id": "connection-distribution",
          "name": "Connection Distribution",
          "deps": [
            "hashing-algorithms"
          ]
        },
        {
          "id": "flow-affinity",
          "name": "Flow Affinity (5-Tuple Hashing)",
          "deps": [
            "hashing-algorithms"
          ]
        }
      ]
    },
    {
      "id": "operational-characteristics",
      "title": "Operational Characteristics",
      "items": [
        {
          "id": "stateless-forwarding",
          "name": "Stateless Packet Forwarding",
          "deps": []
        },
        {
          "id": "fast-failover",
          "name": "Fast Failover",
          "deps": [
            "health-signals"
          ]
        }
      ]
    },
    {
      "id": "health-integration",
      "title": "Health Integration",
      "items": [
        {
          "id": "health-signals",
          "name": "Health Signals (Up/Down)",
          "deps": [
            "backend-reachability"
          ]
        }
      ]
    },
    {
      "id": "foundation",
      "title": "Foundation",
      "items": [
        {
          "id": "hashing-algorithms",
          "name": "Hashing Algorithms",
          "deps": []
        },
        {
          "id": "backend-reachability",
          "name": "Backend Reachability",
          "deps": []
        },
        {
          "id": "transport-tuples",
          "name": "Transport Tuples (IP/Port)",
          "deps": []
        }
      ]
    }
  ]
}`,Nl=`{
  "id": "l7-load-balancing",
  "title": "L7 Load Balancing",
  "abstract": "Layer 7 load balancing operates at the application layer, using protocol awareness (typically HTTP) to make routing decisions based on URLs, headers, cookies, and request context. This enables flexible traffic shaping and advanced delivery patterns, at the cost of additional processing and latency.",
  "categories": [
    {
      "id": "user-visible-impact",
      "title": "User-Visible Impact",
      "items": [
        {
          "id": "smart-request-routing",
          "name": "Smart Request Routing",
          "deps": [
            "request-inspection",
            "routing-rules"
          ]
        },
        {
          "id": "feature-targeting",
          "name": "Feature Targeting & Experiments",
          "deps": [
            "header-routing",
            "cookie-routing"
          ]
        }
      ]
    },
    {
      "id": "routing-capabilities",
      "title": "Routing Capabilities",
      "items": [
        {
          "id": "path-routing",
          "name": "Path-Based Routing",
          "deps": [
            "request-inspection"
          ]
        },
        {
          "id": "header-routing",
          "name": "Header-Based Routing",
          "deps": [
            "request-inspection"
          ]
        },
        {
          "id": "cookie-routing",
          "name": "Cookie-Based Routing",
          "deps": [
            "request-inspection"
          ]
        }
      ]
    },
    {
      "id": "protocol-awareness",
      "title": "Protocol Awareness",
      "items": [
        {
          "id": "request-inspection",
          "name": "Request Inspection & Parsing",
          "deps": [
            "http-parsing"
          ]
        },
        {
          "id": "response-modification",
          "name": "Response Modification",
          "deps": [
            "http-parsing"
          ]
        }
      ]
    },
    {
      "id": "operational-controls",
      "title": "Operational Controls",
      "items": [
        {
          "id": "routing-rules",
          "name": "Routing Rules & Policies",
          "deps": [
            "config-management"
          ]
        },
        {
          "id": "canary-rollouts",
          "name": "Canary & Blue-Green Rollouts",
          "deps": [
            "traffic-splitting"
          ]
        }
      ]
    },
    {
      "id": "foundation",
      "title": "Foundation",
      "items": [
        {
          "id": "http-parsing",
          "name": "HTTP Parsing & Semantics",
          "deps": []
        },
        {
          "id": "traffic-splitting",
          "name": "Traffic Splitting Logic",
          "deps": []
        },
        {
          "id": "config-management",
          "name": "Configuration Management",
          "deps": []
        }
      ]
    }
  ]
}`,Ml=`{
  "id": "observability-troubleshooting",
  "title": "Observability & Troubleshooting Concepts",
  "abstract": "When delivery fails, observability tools expose where latency, loss, or routing breaks down across DNS, network paths, transport, and application layers. These signals are essential for rapid diagnosis and safe remediation during incidents.",
  "categories": [
    {
      "id": "user-visible-metrics",
      "title": "User-Visible Metrics",
      "items": [
        {
          "id": "ttfb-metric",
          "name": "Time To First Byte (TTFB)",
          "deps": [
            "dns-timing",
            "handshake-timing",
            "origin-response"
          ]
        },
        {
          "id": "connection-reuse-impact",
          "name": "Connection Reuse Effectiveness",
          "deps": [
            "keepalive-settings"
          ]
        }
      ]
    },
    {
      "id": "path-diagnostics",
      "title": "Path Diagnostics",
      "items": [
        {
          "id": "traceroute-mtr",
          "name": "Traceroute / MTR",
          "deps": [
            "icmp-responses"
          ]
        },
        {
          "id": "latency-hop-analysis",
          "name": "Per-Hop Latency Analysis",
          "deps": [
            "traceroute-mtr"
          ]
        }
      ]
    },
    {
      "id": "packet-level-analysis",
      "title": "Packet-Level Analysis",
      "items": [
        {
          "id": "pcap-capture",
          "name": "Packet Capture (tcpdump)",
          "deps": [
            "interface-access"
          ]
        },
        {
          "id": "wireshark-analysis",
          "name": "Wireshark Analysis",
          "deps": [
            "pcap-capture"
          ]
        }
      ]
    },
    {
      "id": "timing-breakdown",
      "title": "Timing Breakdown",
      "items": [
        {
          "id": "dns-timing",
          "name": "DNS Resolution Timing",
          "deps": []
        },
        {
          "id": "handshake-timing",
          "name": "Transport & TLS Handshake Timing",
          "deps": []
        },
        {
          "id": "origin-response",
          "name": "Origin Response Time",
          "deps": []
        }
      ]
    },
    {
      "id": "foundation",
      "title": "Foundation",
      "items": [
        {
          "id": "keepalive-settings",
          "name": "Keepalive & Idle Timeouts",
          "deps": []
        },
        {
          "id": "icmp-responses",
          "name": "ICMP Responses",
          "deps": []
        },
        {
          "id": "interface-access",
          "name": "Network Interface Access",
          "deps": []
        }
      ]
    }
  ]
}`,Pl=`{
  "id": "recursive-authoritative-dns",
  "title": "Recursive vs Authoritative DNS",
  "abstract": "DNS resolution is split between recursive resolvers that perform lookups on behalf of users and authoritative servers that publish records. Latency, caching behavior, and TTL strategy at this layer directly affect where users connect and how fast connections start.",
  "categories": [
    {
      "id": "user-visible-effects",
      "title": "User-Visible Effects",
      "items": [
        {
          "id": "dns-startup-latency",
          "name": "Startup Latency Before First Byte",
          "deps": [
            "recursive-resolution",
            "authoritative-response"
          ]
        },
        {
          "id": "routing-accuracy",
          "name": "Initial Routing Accuracy",
          "deps": [
            "ttl-strategy",
            "authoritative-response"
          ]
        }
      ]
    },
    {
      "id": "resolution-flow",
      "title": "Resolution Flow",
      "items": [
        {
          "id": "recursive-resolution",
          "name": "Recursive Resolution",
          "deps": [
            "cache-hit",
            "cache-miss"
          ]
        },
        {
          "id": "authoritative-response",
          "name": "Authoritative Response",
          "deps": [
            "zone-data"
          ]
        }
      ]
    },
    {
      "id": "caching-behavior",
      "title": "Caching Behavior",
      "items": [
        {
          "id": "cache-hit",
          "name": "Resolver Cache Hits",
          "deps": [
            "ttl-strategy"
          ]
        },
        {
          "id": "cache-miss",
          "name": "Resolver Cache Misses",
          "deps": [
            "ttl-strategy"
          ]
        }
      ]
    },
    {
      "id": "control-knobs",
      "title": "Control Knobs",
      "items": [
        {
          "id": "ttl-strategy",
          "name": "TTL Strategy",
          "deps": [
            "zone-data"
          ]
        },
        {
          "id": "record-types",
          "name": "Record Types (A/AAAA/CNAME)",
          "deps": [
            "zone-data"
          ]
        }
      ]
    },
    {
      "id": "foundation",
      "title": "Foundation",
      "items": [
        {
          "id": "zone-data",
          "name": "Authoritative Zone Data",
          "deps": []
        },
        {
          "id": "recursive-infrastructure",
          "name": "Recursive Resolver Infrastructure",
          "deps": []
        }
      ]
    }
  ]
}`,Rl=`{
  "id": "reverse-proxying",
  "title": "Reverse Proxying",
  "abstract": "Reverse proxies sit between clients and backends, terminating connections and reshaping traffic. By buffering, multiplexing, and pooling connections, they dramatically reduce backend load while enabling routing, security, and observability at the edge.",
  "categories": [
    {
      "id": "user-visible-impact",
      "title": "User-Visible Impact",
      "items": [
        {
          "id": "reduced-latency",
          "name": "Reduced Per-Request Latency",
          "deps": [
            "connection-reuse",
            "request-buffering"
          ]
        },
        {
          "id": "higher-reliability",
          "name": "Higher Reliability Under Load",
          "deps": [
            "backend-isolation",
            "health-awareness"
          ]
        }
      ]
    },
    {
      "id": "traffic-shaping",
      "title": "Traffic Shaping",
      "items": [
        {
          "id": "request-buffering",
          "name": "Request / Response Buffering",
          "deps": [
            "proxy-runtime"
          ]
        },
        {
          "id": "connection-reuse",
          "name": "Connection Reuse & Pooling",
          "deps": [
            "proxy-runtime"
          ]
        }
      ]
    },
    {
      "id": "routing-capabilities",
      "title": "Routing Capabilities",
      "items": [
        {
          "id": "header-based-routing",
          "name": "Header / Path Based Routing",
          "deps": [
            "http-awareness"
          ]
        },
        {
          "id": "backend-selection",
          "name": "Backend Selection Logic",
          "deps": [
            "service-discovery"
          ]
        }
      ]
    },
    {
      "id": "operational-controls",
      "title": "Operational Controls",
      "items": [
        {
          "id": "health-awareness",
          "name": "Health Awareness",
          "deps": [
            "health-checks"
          ]
        },
        {
          "id": "backend-isolation",
          "name": "Backend Isolation",
          "deps": [
            "timeout-policies"
          ]
        }
      ]
    },
    {
      "id": "foundation",
      "title": "Foundation",
      "items": [
        {
          "id": "proxy-runtime",
          "name": "Proxy Runtime (NGINX / HAProxy / Envoy)",
          "deps": []
        },
        {
          "id": "http-awareness",
          "name": "HTTP Protocol Awareness",
          "deps": []
        },
        {
          "id": "health-checks",
          "name": "Health Checks",
          "deps": []
        },
        {
          "id": "service-discovery",
          "name": "Service Discovery",
          "deps": []
        },
        {
          "id": "timeout-policies",
          "name": "Timeout & Retry Policies",
          "deps": []
        }
      ]
    }
  ]
}`,Bl=`{
  "id": "tcp-delivery",
  "title": "TCP Data Delivery",
  "abstract": "TCP delivers reliable, ordered byte streams with built-in congestion control. While foundational to the web, its performance is highly sensitive to RTT, loss, and tuning choices; misconfiguration can severely degrade latency and throughput.",
  "categories": [
    {
      "id": "user-visible-effects",
      "title": "User-Visible Effects",
      "items": [
        {
          "id": "page-load-latency",
          "name": "Page Load Latency",
          "deps": [
            "tcp-handshake",
            "slow-start"
          ]
        },
        {
          "id": "bulk-transfer-speed",
          "name": "Bulk Transfer Speed",
          "deps": [
            "congestion-control",
            "window-scaling"
          ]
        }
      ]
    },
    {
      "id": "connection-lifecycle",
      "title": "Connection Lifecycle",
      "items": [
        {
          "id": "tcp-handshake",
          "name": "3-Way Handshake",
          "deps": [
            "rtt-signal"
          ]
        },
        {
          "id": "connection-teardown",
          "name": "Connection Teardown (FIN/RST)",
          "deps": []
        }
      ]
    },
    {
      "id": "congestion-dynamics",
      "title": "Congestion Dynamics",
      "items": [
        {
          "id": "slow-start",
          "name": "Slow Start",
          "deps": [
            "congestion-control"
          ]
        },
        {
          "id": "congestion-control",
          "name": "Congestion Control (BBR/CUBIC)",
          "deps": [
            "packet-loss-signal",
            "rtt-signal"
          ]
        }
      ]
    },
    {
      "id": "flow-control",
      "title": "Flow & Window Control",
      "items": [
        {
          "id": "window-scaling",
          "name": "TCP Window Scaling",
          "deps": [
            "mss-mtu"
          ]
        },
        {
          "id": "receiver-window",
          "name": "Receiver Window (rwnd)",
          "deps": []
        }
      ]
    },
    {
      "id": "path-signals",
      "title": "Path Signals & Constraints",
      "items": [
        {
          "id": "rtt-signal",
          "name": "Round-Trip Time (RTT)",
          "deps": []
        },
        {
          "id": "packet-loss-signal",
          "name": "Packet Loss",
          "deps": []
        },
        {
          "id": "mss-mtu",
          "name": "MSS / MTU",
          "deps": []
        }
      ]
    }
  ]
}`,Dl=`[
  {
    "id": "throughput-latency-congestion",
    "title": "Throughput, Latency & Congestion",
    "abstract": "Performance on real networks is governed by congestion dynamics, queueing behavior, and impairments like loss and jitter. Operators tune congestion control and queue management to balance throughput with consistent low latency under load.",
    "categories": [
      {
        "id": "user-perception",
        "title": "User Perception",
        "items": [
          {
            "id": "interactive-snappiness",
            "name": "Interactive Snappiness",
            "deps": [
              "queueing-delay",
              "rtt-signal"
            ]
          },
          {
            "id": "streaming-quality",
            "name": "Streaming Quality",
            "deps": [
              "jitter-signal",
              "packet-loss-signal",
              "throughput-ceiling"
            ]
          }
        ]
      },
      {
        "id": "control-loops",
        "title": "Control Loops",
        "items": [
          {
            "id": "congestion-control-algos",
            "name": "Congestion Control Algorithms (BBR/CUBIC/Reno)",
            "deps": [
              "rtt-signal",
              "packet-loss-signal"
            ]
          },
          {
            "id": "loss-recovery-mechanisms",
            "name": "Loss Recovery",
            "deps": [
              "packet-loss-signal"
            ]
          }
        ]
      },
      {
        "id": "queue-management",
        "title": "Queue Management",
        "items": [
          {
            "id": "aqm",
            "name": "Active Queue Management (fq_codel/PIE)",
            "deps": [
              "queueing-delay"
            ]
          },
          {
            "id": "bufferbloat",
            "name": "Bufferbloat",
            "deps": [
              "queueing-delay"
            ]
          }
        ]
      },
      {
        "id": "network-signals",
        "title": "Network Signals",
        "items": [
          {
            "id": "rtt-signal",
            "name": "Round-Trip Time (RTT)",
            "deps": []
          },
          {
            "id": "packet-loss-signal",
            "name": "Packet Loss",
            "deps": []
          },
          {
            "id": "jitter-signal",
            "name": "Jitter",
            "deps": []
          },
          {
            "id": "queueing-delay",
            "name": "Queueing Delay",
            "deps": []
          },
          {
            "id": "throughput-ceiling",
            "name": "Path Bottleneck Capacity",
            "deps": []
          }
        ]
      }
    ]
  },
  {
    "id": "application-layer-delivery-protocols",
    "title": "Application Layer Protocols Used in Delivery",
    "abstract": "Application protocols (HTTP variants, WebSockets, gRPC) define request/stream semantics on top of transport. Their multiplexing, framing, and connection behavior determine head-of-line blocking risk, cache-friendliness, and end-to-end latency.",
    "categories": [
      {
        "id": "user-experience",
        "title": "User Experience",
        "items": [
          {
            "id": "page-load-speed",
            "name": "Page Load Speed",
            "deps": [
              "http2",
              "http3",
              "connection-reuse-app"
            ]
          },
          {
            "id": "realtime-interactivity",
            "name": "Realtime Interactivity",
            "deps": [
              "websockets",
              "grpc"
            ]
          }
        ]
      },
      {
        "id": "protocol-capabilities",
        "title": "Protocol Capabilities",
        "items": [
          {
            "id": "multiplexing",
            "name": "Multiplexing & Prioritization",
            "deps": [
              "http2",
              "http3"
            ]
          },
          {
            "id": "hol-blocking",
            "name": "Head-of-Line Blocking Risk",
            "deps": [
              "tcp-transport-app",
              "quic-transport-app"
            ]
          }
        ]
      },
      {
        "id": "application-protocols",
        "title": "Application Protocols",
        "items": [
          {
            "id": "http11",
            "name": "HTTP/1.1",
            "deps": [
              "tcp-transport-app",
              "tls-transport-app"
            ]
          },
          {
            "id": "http2",
            "name": "HTTP/2",
            "deps": [
              "tcp-transport-app",
              "tls-transport-app"
            ]
          },
          {
            "id": "http3",
            "name": "HTTP/3",
            "deps": [
              "quic-transport-app"
            ]
          },
          {
            "id": "websockets",
            "name": "WebSockets",
            "deps": [
              "http11"
            ]
          },
          {
            "id": "grpc",
            "name": "gRPC",
            "deps": [
              "http2"
            ]
          }
        ]
      },
      {
        "id": "connection-management",
        "title": "Connection Management",
        "items": [
          {
            "id": "connection-reuse-app",
            "name": "Connection Reuse / Keepalive",
            "deps": [
              "tcp-transport-app"
            ]
          },
          {
            "id": "tls-session-resumption-app",
            "name": "TLS Session Resumption",
            "deps": [
              "tls-transport-app"
            ]
          }
        ]
      },
      {
        "id": "transport-foundation",
        "title": "Transport Foundation",
        "items": [
          {
            "id": "tcp-transport-app",
            "name": "TCP Transport",
            "deps": []
          },
          {
            "id": "quic-transport-app",
            "name": "QUIC Transport",
            "deps": [
              "udp-transport-app"
            ]
          },
          {
            "id": "udp-transport-app",
            "name": "UDP Transport",
            "deps": []
          },
          {
            "id": "tls-transport-app",
            "name": "TLS",
            "deps": []
          }
        ]
      }
    ]
  },
  {
    "id": "traffic-steering-acceleration",
    "title": "Traffic Steering and Acceleration",
    "abstract": "Acceleration systems combine routing decisions, edge logic, and protective controls to make delivery fast and stable. Feedback loops (RUM) and steering algorithms adapt where traffic goes, while optimizers and rate limiting keep systems performant and resilient.",
    "categories": [
      {
        "id": "user-outcomes",
        "title": "User Outcomes",
        "items": [
          {
            "id": "fastest-edge-selection",
            "name": "Fastest Edge Selection",
            "deps": [
              "cdn-steering",
              "rum-feedback"
            ]
          },
          {
            "id": "origin-protection",
            "name": "Origin Protection",
            "deps": [
              "rate-limiting",
              "tcp-acceleration"
            ]
          }
        ]
      },
      {
        "id": "steering-logic",
        "title": "Steering Logic",
        "items": [
          {
            "id": "cdn-steering",
            "name": "CDN Routing Algorithms",
            "deps": [
              "latency-metrics",
              "congestion-metrics"
            ]
          },
          {
            "id": "rum-feedback",
            "name": "RUM Feedback Loops",
            "deps": [
              "client-telemetry"
            ]
          }
        ]
      },
      {
        "id": "acceleration-techniques",
        "title": "Acceleration Techniques",
        "items": [
          {
            "id": "tcp-acceleration",
            "name": "TCP Acceleration / Optimizers",
            "deps": [
              "connection-pooling-accel"
            ]
          },
          {
            "id": "connection-pooling-accel",
            "name": "Connection Pooling / Warm Connections",
            "deps": []
          }
        ]
      },
      {
        "id": "protection-controls",
        "title": "Protection Controls",
        "items": [
          {
            "id": "rate-limiting",
            "name": "Rate Limiting (Token/Leaky Bucket)",
            "deps": [
              "request-meters"
            ]
          }
        ]
      },
      {
        "id": "measurement-signals",
        "title": "Measurement Signals",
        "items": [
          {
            "id": "client-telemetry",
            "name": "Client Telemetry Collection",
            "deps": []
          },
          {
            "id": "latency-metrics",
            "name": "Latency Metrics",
            "deps": []
          },
          {
            "id": "congestion-metrics",
            "name": "Congestion / Throughput Metrics",
            "deps": []
          },
          {
            "id": "request-meters",
            "name": "Request Meters & Counters",
            "deps": []
          }
        ]
      }
    ]
  }
]`,Ol=`{
  "id": "tls-delivery",
  "title": "TLS Handshake & Secure Delivery",
  "abstract": "TLS secures transport connections but also materially impacts delivery latency. Handshake design, certificate validation, and resumption mechanisms strongly influence Time To First Byte, especially for first-time and mobile users.",
  "categories": [
    {
      "id": "user-impact",
      "title": "User-Visible Impact",
      "items": [
        {
          "id": "ttfb-first-load",
          "name": "First-Load TTFB",
          "deps": [
            "tls-handshake",
            "certificate-validation"
          ]
        },
        {
          "id": "repeat-visit-speed",
          "name": "Repeat Visit Speed",
          "deps": [
            "session-resumption",
            "zero-rtt"
          ]
        }
      ]
    },
    {
      "id": "handshake-optimization",
      "title": "Handshake Optimization",
      "items": [
        {
          "id": "session-resumption",
          "name": "Session Resumption",
          "deps": [
            "session-tickets"
          ]
        },
        {
          "id": "zero-rtt",
          "name": "0-RTT Data",
          "deps": [
            "session-resumption"
          ]
        }
      ]
    },
    {
      "id": "protocol-mechanics",
      "title": "Protocol Mechanics",
      "items": [
        {
          "id": "tls-handshake",
          "name": "TLS Handshake",
          "deps": [
            "rtt-signal"
          ]
        },
        {
          "id": "certificate-validation",
          "name": "Certificate Validation",
          "deps": [
            "certificate-chain"
          ]
        }
      ]
    },
    {
      "id": "crypto-material",
      "title": "Cryptographic Material",
      "items": [
        {
          "id": "certificate-chain",
          "name": "Certificate Chain",
          "deps": []
        },
        {
          "id": "key-exchange",
          "name": "Key Exchange (ECDHE)",
          "deps": []
        }
      ]
    },
    {
      "id": "supporting-signals",
      "title": "Supporting Signals",
      "items": [
        {
          "id": "session-tickets",
          "name": "Session Tickets / PSKs",
          "deps": []
        },
        {
          "id": "rtt-signal",
          "name": "Round-Trip Time",
          "deps": []
        }
      ]
    }
  ]
}`,Ul=`{
  "id": "udp-delivery",
  "title": "UDP Data Delivery",
  "abstract": "UDP provides a minimal, connectionless transport with no reliability or congestion guarantees. Its low overhead and lack of kernel-imposed behavior make it ideal as a substrate for application-defined transports like QUIC, real-time media, and custom protocols.",
  "categories": [
    {
      "id": "application-outcomes",
      "title": "Application Outcomes",
      "items": [
        {
          "id": "low-latency-delivery",
          "name": "Low Latency Delivery",
          "deps": [
            "no-handshake",
            "minimal-overhead"
          ]
        },
        {
          "id": "app-controlled-reliability",
          "name": "Application-Controlled Reliability",
          "deps": [
            "user-space-transport"
          ]
        }
      ]
    },
    {
      "id": "transport-characteristics",
      "title": "Transport Characteristics",
      "items": [
        {
          "id": "unreliable-datagrams",
          "name": "Unreliable Datagrams",
          "deps": []
        },
        {
          "id": "unordered-delivery",
          "name": "Unordered Delivery",
          "deps": []
        }
      ]
    },
    {
      "id": "design-tradeoffs",
      "title": "Design Tradeoffs",
      "items": [
        {
          "id": "no-congestion-control",
          "name": "No Built-in Congestion Control",
          "deps": []
        },
        {
          "id": "packet-loss-exposure",
          "name": "Direct Exposure to Packet Loss",
          "deps": []
        }
      ]
    },
    {
      "id": "innovation-surface",
      "title": "Innovation Surface",
      "items": [
        {
          "id": "user-space-transport",
          "name": "User-Space Transport Innovation",
          "deps": [
            "udp-core"
          ]
        },
        {
          "id": "kernel-bypass-evolution",
          "name": "Rapid Protocol Evolution",
          "deps": [
            "udp-core"
          ]
        }
      ]
    },
    {
      "id": "foundation",
      "title": "Foundation",
      "items": [
        {
          "id": "udp-core",
          "name": "UDP Protocol",
          "deps": []
        },
        {
          "id": "no-handshake",
          "name": "No Connection Handshake",
          "deps": []
        },
        {
          "id": "minimal-overhead",
          "name": "Minimal Header Overhead",
          "deps": []
        }
      ]
    }
  ]
}`,Hl=`[
  {
    "id": "solar-system",
    "title": "Solar System Model",
    "abstract": "Index of all planetary exploration models in this series.",
    "categories": [
      {
        "id": "habitable",
        "title": "Habitable",
        "items": [
          {
            "id": "earth",
            "name": "Earth",
            "deps": [],
            "logo": "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg"
          }
        ]
      },
      {
        "id": "visible-by-eye",
        "title": "Visible by Eye",
        "items": [
          {
            "id": "mercury",
            "name": "Mercury",
            "deps": [],
            "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/250px-Mercury_in_true_color.jpg"
          },
          {
            "id": "venus",
            "name": "Venus",
            "deps": [],
            "logo": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg"
          },
          {
            "id": "mars",
            "name": "Mars",
            "deps": [],
            "logo": "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg"
          },
          {
            "id": "jupiter",
            "name": "Jupiter",
            "deps": [],
            "logo": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg"
          },
          {
            "id": "saturn",
            "name": "Saturn",
            "deps": [],
            "logo": "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg"
          }
        ]
      },
      {
        "id": "outer",
        "title": "Telescope",
        "items": [
          {
            "id": "uranus",
            "name": "Uranus",
            "deps": [],
            "logo": "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg"
          },
          {
            "id": "neptune",
            "name": "Neptune",
            "deps": [],
            "logo": "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg"
          }
        ]
      },
      {
        "id": "former-planets",
        "title": "Former Planets",
        "items": [
          {
            "id": "pluto",
            "name": "Pluto",
            "color": "#000000",
            "deps": [],
            "external": "https://en.wikipedia.org/wiki/Pluto"
          }
        ]
      }
    ]
  },
  {
    "id": "mercury",
    "title": "Mercury Exploration Model",
    "abstract": "Value chain for understanding and exploring Mercury.",
    "categories": [
      {
        "id": "observation",
        "title": "Observation",
        "items": [
          {
            "id": "surface-imaging",
            "name": "Surface Imaging",
            "deps": [
              "orbital-navigation",
              "thermal-protection"
            ]
          },
          {
            "id": "spectral-scan",
            "name": "Spectral Scanning",
            "deps": [
              "data-processing"
            ]
          },
          {
            "id": "solar-interaction",
            "name": "Solar Interaction Analysis",
            "deps": [
              "radiation-shielding"
            ]
          }
        ]
      },
      {
        "id": "environment",
        "title": "Environment",
        "items": [
          {
            "id": "crater-mapping",
            "name": "Crater Mapping",
            "deps": [
              "surface-imaging"
            ]
          },
          {
            "id": "exosphere-study",
            "name": "Exosphere Study",
            "deps": [
              "spectral-scan"
            ]
          },
          {
            "id": "thermal-variation",
            "name": "Thermal Variation Modeling",
            "deps": [
              "solar-interaction"
            ]
          }
        ]
      },
      {
        "id": "resources",
        "title": "Resources",
        "items": [
          {
            "id": "minerals-analysis",
            "name": "Minerals Analysis",
            "deps": [
              "crater-mapping",
              "data-processing"
            ]
          },
          {
            "id": "ice-detection",
            "name": "Ice Detection",
            "deps": [
              "spectral-scan"
            ]
          },
          {
            "id": "soil-composition",
            "name": "Soil Composition",
            "deps": [
              "minerals-analysis"
            ]
          }
        ]
      },
      {
        "id": "infrastructure",
        "title": "Infrastructure",
        "items": [
          {
            "id": "orbital-navigation",
            "name": "Orbital Navigation",
            "deps": []
          },
          {
            "id": "thermal-protection",
            "name": "Thermal Protection",
            "deps": []
          },
          {
            "id": "radiation-shielding",
            "name": "Radiation Shielding",
            "deps": []
          },
          {
            "id": "data-processing",
            "name": "Data Processing",
            "deps": []
          }
        ]
      },
      {
        "id": "moons",
        "title": "Moons",
        "items": []
      }
    ]
  },
  {
    "id": "venus",
    "title": "Venus Exploration Model",
    "abstract": "Value chain for atmospheric and surface study of Venus.",
    "categories": [
      {
        "id": "observation",
        "title": "Observation",
        "items": [
          {
            "id": "cloud-imaging",
            "name": "Cloud Imaging",
            "deps": [
              "orbital-control",
              "heat-shielding"
            ]
          },
          {
            "id": "atmospheric-sensing",
            "name": "Atmospheric Sensing",
            "deps": [
              "data-pipeline"
            ]
          },
          {
            "id": "thermal-scan",
            "name": "Thermal Scanning",
            "deps": [
              "heat-shielding"
            ]
          }
        ]
      },
      {
        "id": "environment",
        "title": "Environment",
        "items": [
          {
            "id": "pressure-modeling",
            "name": "Pressure Modeling",
            "deps": [
              "atmospheric-sensing"
            ]
          },
          {
            "id": "cloud-chemistry",
            "name": "Cloud Chemistry Analysis",
            "deps": [
              "cloud-imaging"
            ]
          },
          {
            "id": "surface-temp-mapping",
            "name": "Surface Temperature Mapping",
            "deps": [
              "thermal-scan"
            ]
          }
        ]
      },
      {
        "id": "resources",
        "title": "Resources",
        "items": [
          {
            "id": "mineral-survey",
            "name": "Mineral Survey",
            "deps": [
              "surface-temp-mapping"
            ]
          },
          {
            "id": "atmo-gas-analysis",
            "name": "Atmospheric Gas Analysis",
            "deps": [
              "cloud-chemistry"
            ]
          },
          {
            "id": "volcanic-activity",
            "name": "Volcanic Activity Study",
            "deps": [
              "pressure-modeling"
            ]
          }
        ]
      },
      {
        "id": "infrastructure",
        "title": "Infrastructure",
        "items": [
          {
            "id": "orbital-control",
            "name": "Orbital Control",
            "deps": []
          },
          {
            "id": "heat-shielding",
            "name": "Heat Shielding",
            "deps": []
          },
          {
            "id": "data-pipeline",
            "name": "Data Pipeline",
            "deps": []
          }
        ]
      },
      {
        "id": "moons",
        "title": "Moons",
        "items": []
      }
    ]
  },
  {
    "id": "earth",
    "title": "Earth Systems Model",
    "abstract": "Value chain for observing and managing Earth systems.",
    "categories": [
      {
        "id": "observation",
        "title": "Observation",
        "items": [
          {
            "id": "weather-monitoring",
            "name": "Weather Monitoring",
            "deps": [
              "sat-network"
            ]
          },
          {
            "id": "ocean-sensing",
            "name": "Ocean Sensing",
            "deps": [
              "sensor-grid"
            ]
          },
          {
            "id": "terrain-imaging",
            "name": "Terrain Imaging",
            "deps": [
              "sat-network"
            ]
          }
        ]
      },
      {
        "id": "environment",
        "title": "Environment",
        "items": [
          {
            "id": "climate-modeling",
            "name": "Climate Modeling",
            "deps": [
              "weather-monitoring",
              "data-lake"
            ]
          },
          {
            "id": "ecosystem-mapping",
            "name": "Ecosystem Mapping",
            "deps": [
              "terrain-imaging"
            ]
          },
          {
            "id": "currents-analysis",
            "name": "Ocean Currents Analysis",
            "deps": [
              "ocean-sensing"
            ]
          }
        ]
      },
      {
        "id": "resources",
        "title": "Resources",
        "items": [
          {
            "id": "mineral-analysis-earth",
            "name": "Mineral Analysis",
            "deps": [
              "terrain-imaging"
            ]
          },
          {
            "id": "water-cycle",
            "name": "Water Cycle Modeling",
            "deps": [
              "climate-modeling"
            ]
          },
          {
            "id": "agri-forecasting",
            "name": "Agriculture Forecasting",
            "deps": [
              "climate-modeling",
              "ecosystem-mapping"
            ]
          }
        ]
      },
      {
        "id": "infrastructure",
        "title": "Infrastructure",
        "items": [
          {
            "id": "sat-network",
            "name": "Satellite Network",
            "deps": []
          },
          {
            "id": "sensor-grid",
            "name": "Sensor Grid",
            "deps": []
          },
          {
            "id": "data-lake",
            "name": "Data Lake",
            "deps": []
          }
        ]
      },
      {
        "id": "moons",
        "title": "Moons",
        "items": [
          {
            "id": "moon-earth",
            "name": "Moon",
            "deps": [],
            "external": "https://en.wikipedia.org/wiki/Moon",
            "logo": "https://favicon.im/wikipedia.org"
          }
        ]
      }
    ]
  },
  {
    "id": "mars",
    "title": "Mars Exploration Model",
    "abstract": "Value chain for robotic and human exploration of Mars.",
    "categories": [
      {
        "id": "observation",
        "title": "Observation",
        "items": [
          {
            "id": "surface-roving",
            "name": "Surface Roving",
            "deps": [
              "comm-relay",
              "radiation-hardened"
            ]
          },
          {
            "id": "atmo-profiling",
            "name": "Atmospheric Profiling",
            "deps": [
              "data-store"
            ]
          },
          {
            "id": "orbital-imaging",
            "name": "Orbital Imaging",
            "deps": [
              "comm-relay"
            ]
          }
        ]
      },
      {
        "id": "environment",
        "title": "Environment",
        "items": [
          {
            "id": "dust-storm-modeling",
            "name": "Dust Storm Modeling",
            "deps": [
              "atmo-profiling"
            ]
          },
          {
            "id": "soil-analysis-mars",
            "name": "Soil Analysis",
            "deps": [
              "surface-roving"
            ]
          },
          {
            "id": "temp-gradient-study",
            "name": "Temperature Gradient Study",
            "deps": [
              "orbital-imaging"
            ]
          }
        ]
      },
      {
        "id": "resources",
        "title": "Resources",
        "items": [
          {
            "id": "ice-mapping",
            "name": "Ice Mapping",
            "deps": [
              "temp-gradient-study"
            ]
          },
          {
            "id": "mineral-survey-mars",
            "name": "Mineral Survey",
            "deps": [
              "soil-analysis-mars"
            ]
          },
          {
            "id": "atmo-gas-mars",
            "name": "Atmospheric Gas Analysis",
            "deps": [
              "atmo-profiling"
            ]
          }
        ]
      },
      {
        "id": "infrastructure",
        "title": "Infrastructure",
        "items": [
          {
            "id": "comm-relay",
            "name": "Communications Relay",
            "deps": []
          },
          {
            "id": "radiation-hardened",
            "name": "Radiation Hardened Systems",
            "deps": []
          },
          {
            "id": "data-store",
            "name": "Data Store",
            "deps": []
          }
        ]
      },
      {
        "id": "moons",
        "title": "Moons",
        "items": [
          {
            "id": "phobos",
            "name": "Phobos",
            "deps": [],
            "external": "https://en.wikipedia.org/wiki/Phobos_(moon)",
            "logo": "https://favicon.im/wikipedia.org"
          },
          {
            "id": "deimos",
            "name": "Deimos",
            "deps": [],
            "external": "https://en.wikipedia.org/wiki/Deimos",
            "logo": "https://favicon.im/wikipedia.org"
          }
        ]
      }
    ]
  },
  {
    "id": "jupiter",
    "title": "Jupiter Study Model",
    "abstract": "Value chain for observing Jupiter and its system.",
    "categories": [
      {
        "id": "observation",
        "title": "Observation",
        "items": [
          {
            "id": "storm-imaging",
            "name": "Storm Imaging",
            "deps": [
              "deep-radiation-shielding"
            ]
          },
          {
            "id": "magnetosphere-sensing",
            "name": "Magnetosphere Sensing",
            "deps": [
              "data-center"
            ]
          },
          {
            "id": "moon-tracking",
            "name": "Moon Tracking",
            "deps": [
              "orbital-system"
            ]
          }
        ]
      },
      {
        "id": "environment",
        "title": "Environment",
        "items": [
          {
            "id": "atmo-composition-jupiter",
            "name": "Atmospheric Composition",
            "deps": [
              "storm-imaging"
            ]
          },
          {
            "id": "radiation-modeling",
            "name": "Radiation Modeling",
            "deps": [
              "magnetosphere-sensing"
            ]
          },
          {
            "id": "moon-dynamics",
            "name": "Moon Dynamics",
            "deps": [
              "moon-tracking"
            ]
          }
        ]
      },
      {
        "id": "resources",
        "title": "Resources",
        "items": [
          {
            "id": "moon-ice-mapping",
            "name": "Moon Ice Mapping",
            "deps": [
              "moon-dynamics"
            ]
          },
          {
            "id": "gas-distribution",
            "name": "Gas Distribution Study",
            "deps": [
              "atmo-composition-jupiter"
            ]
          },
          {
            "id": "magnetic-harnessing",
            "name": "Magnetic Field Harnessing Study",
            "deps": [
              "radiation-modeling"
            ]
          }
        ]
      },
      {
        "id": "infrastructure",
        "title": "Infrastructure",
        "items": [
          {
            "id": "deep-radiation-shielding",
            "name": "Deep Radiation Shielding",
            "deps": []
          },
          {
            "id": "orbital-system",
            "name": "Orbital System",
            "deps": []
          },
          {
            "id": "data-center",
            "name": "Data Center",
            "deps": []
          }
        ]
      },
      {
        "id": "moons",
        "title": "Moons",
        "items": [
          {
            "id": "io",
            "name": "Io",
            "deps": [],
            "external": "https://en.wikipedia.org/wiki/Io_(moon)",
            "logo": "https://favicon.im/wikipedia.org"
          },
          {
            "id": "europa",
            "name": "Europa",
            "deps": [],
            "external": "https://en.wikipedia.org/wiki/Europa_(moon)",
            "logo": "https://favicon.im/wikipedia.org"
          },
          {
            "id": "ganymede",
            "name": "Ganymede",
            "deps": [],
            "external": "https://en.wikipedia.org/wiki/Ganymede_(moon)",
            "logo": "https://favicon.im/wikipedia.org"
          },
          {
            "id": "callisto",
            "name": "Callisto",
            "deps": [],
            "external": "https://en.wikipedia.org/wiki/Callisto_(moon)",
            "logo": "https://favicon.im/wikipedia.org"
          }
        ]
      }
    ]
  },
  {
    "id": "saturn",
    "title": "Saturn Study Model",
    "abstract": "Value chain for examining Saturn and its rings.",
    "categories": [
      {
        "id": "observation",
        "title": "Observation",
        "items": [
          {
            "id": "ring-imaging",
            "name": "Ring Imaging",
            "deps": [
              "radiation-layer"
            ]
          },
          {
            "id": "moon-sensing-saturn",
            "name": "Moon Sensing",
            "deps": [
              "telemetry"
            ]
          },
          {
            "id": "atmo-scan-saturn",
            "name": "Atmospheric Scanning",
            "deps": [
              "data-mesh"
            ]
          }
        ]
      },
      {
        "id": "environment",
        "title": "Environment",
        "items": [
          {
            "id": "ring-dynamics",
            "name": "Ring Dynamics",
            "deps": [
              "ring-imaging"
            ]
          },
          {
            "id": "moon-orbits-saturn",
            "name": "Moon Orbit Modeling",
            "deps": [
              "moon-sensing-saturn"
            ]
          },
          {
            "id": "storm-analysis-saturn",
            "name": "Storm Analysis",
            "deps": [
              "atmo-scan-saturn"
            ]
          }
        ]
      },
      {
        "id": "resources",
        "title": "Resources",
        "items": [
          {
            "id": "ice-distribution-saturn",
            "name": "Ice Distribution",
            "deps": [
              "ring-dynamics"
            ]
          },
          {
            "id": "hydrogen-mapping",
            "name": "Hydrogen Mapping",
            "deps": [
              "storm-analysis-saturn"
            ]
          },
          {
            "id": "habitability-study-saturn",
            "name": "Habitability Study",
            "deps": [
              "moon-orbits-saturn"
            ]
          }
        ]
      },
      {
        "id": "infrastructure",
        "title": "Infrastructure",
        "items": [
          {
            "id": "radiation-layer",
            "name": "Radiation Layer",
            "deps": []
          },
          {
            "id": "telemetry",
            "name": "Telemetry",
            "deps": []
          },
          {
            "id": "data-mesh",
            "name": "Data Mesh",
            "deps": []
          }
        ]
      },
      {
        "id": "moons",
        "title": "Moons",
        "items": [
          {
            "id": "titan",
            "name": "Titan",
            "deps": [],
            "external": "https://en.wikipedia.org/wiki/Titan_(moon)",
            "logo": "https://favicon.im/wikipedia.org"
          },
          {
            "id": "enceladus",
            "name": "Enceladus",
            "deps": [],
            "external": "https://en.wikipedia.org/wiki/Enceladus",
            "logo": "https://favicon.im/wikipedia.org"
          },
          {
            "id": "rhea",
            "name": "Rhea",
            "deps": [],
            "external": "https://en.wikipedia.org/wiki/Rhea_(moon)",
            "logo": "https://favicon.im/wikipedia.org"
          }
        ]
      }
    ]
  },
  {
    "id": "uranus",
    "title": "Uranus Study Model",
    "abstract": "Value chain for analyzing Uranus' atmosphere and axial tilt effects.",
    "categories": [
      {
        "id": "observation",
        "title": "Observation",
        "items": [
          {
            "id": "tilt-dynamics",
            "name": "Tilt Dynamics Observation",
            "deps": [
              "long-range-imaging"
            ]
          },
          {
            "id": "atmo-sensing-uranus",
            "name": "Atmospheric Sensing",
            "deps": [
              "data-grid"
            ]
          },
          {
            "id": "moon-scan-uranus",
            "name": "Moon Scanning",
            "deps": [
              "orbital-array"
            ]
          }
        ]
      },
      {
        "id": "environment",
        "title": "Environment",
        "items": [
          {
            "id": "wind-patterns-uranus",
            "name": "Wind Pattern Modeling",
            "deps": [
              "atmo-sensing-uranus"
            ]
          },
          {
            "id": "seasonal-cycles-uranus",
            "name": "Seasonal Cycles Analysis",
            "deps": [
              "tilt-dynamics"
            ]
          },
          {
            "id": "moon-dynamics-uranus",
            "name": "Moon Dynamics",
            "deps": [
              "moon-scan-uranus"
            ]
          }
        ]
      },
      {
        "id": "resources",
        "title": "Resources",
        "items": [
          {
            "id": "ice-discovery-uranus",
            "name": "Ice Discovery",
            "deps": [
              "wind-patterns-uranus"
            ]
          },
          {
            "id": "gas-analysis-uranus",
            "name": "Gas Analysis",
            "deps": [
              "atmo-sensing-uranus"
            ]
          },
          {
            "id": "orbit-energy-study",
            "name": "Orbit Energy Study",
            "deps": [
              "moon-dynamics-uranus"
            ]
          }
        ]
      },
      {
        "id": "infrastructure",
        "title": "Infrastructure",
        "items": [
          {
            "id": "long-range-imaging",
            "name": "Long Range Imaging",
            "deps": []
          },
          {
            "id": "orbital-array",
            "name": "Orbital Array",
            "deps": []
          },
          {
            "id": "data-grid",
            "name": "Data Grid",
            "deps": []
          }
        ]
      },
      {
        "id": "moons",
        "title": "Moons",
        "items": [
          {
            "id": "titania",
            "name": "Titania",
            "deps": [],
            "external": "https://en.wikipedia.org/wiki/Titania_(moon)",
            "logo": "https://favicon.im/wikipedia.org"
          },
          {
            "id": "oberon",
            "name": "Oberon",
            "deps": [],
            "external": "https://en.wikipedia.org/wiki/Oberon_(moon)",
            "logo": "https://favicon.im/wikipedia.org"
          },
          {
            "id": "umbriel",
            "name": "Umbriel",
            "deps": [],
            "external": "https://en.wikipedia.org/wiki/Umbriel_(moon)",
            "logo": "https://favicon.im/wikipedia.org"
          },
          {
            "id": "ariel",
            "name": "Ariel",
            "deps": [],
            "external": "https://en.wikipedia.org/wiki/Ariel_(moon)",
            "logo": "https://favicon.im/wikipedia.org"
          }
        ]
      }
    ]
  },
  {
    "id": "neptune",
    "title": "Neptune Study Model",
    "abstract": "Value chain for distant observation of Neptune.",
    "categories": [
      {
        "id": "observation",
        "title": "Observation",
        "items": [
          {
            "id": "storm-tracking-neptune",
            "name": "Storm Tracking",
            "deps": [
              "deep-imaging"
            ]
          },
          {
            "id": "atmo-sensing-neptune",
            "name": "Atmospheric Sensing",
            "deps": [
              "data-cluster"
            ]
          },
          {
            "id": "moon-observation-neptune",
            "name": "Moon Observation",
            "deps": [
              "nav-system"
            ]
          }
        ]
      },
      {
        "id": "environment",
        "title": "Environment",
        "items": [
          {
            "id": "wind-modeling-neptune",
            "name": "Wind Modeling",
            "deps": [
              "atmo-sensing-neptune"
            ]
          },
          {
            "id": "temp-distribution-neptune",
            "name": "Temperature Distribution",
            "deps": [
              "storm-tracking-neptune"
            ]
          },
          {
            "id": "moon-dynamics-neptune",
            "name": "Moon Dynamics",
            "deps": [
              "moon-observation-neptune"
            ]
          }
        ]
      },
      {
        "id": "resources",
        "title": "Resources",
        "items": [
          {
            "id": "ice-mapping-neptune",
            "name": "Ice Mapping",
            "deps": [
              "temp-distribution-neptune"
            ]
          },
          {
            "id": "gas-analysis-neptune",
            "name": "Gas Analysis",
            "deps": [
              "atmo-sensing-neptune"
            ]
          },
          {
            "id": "energy-dynamics-neptune",
            "name": "Energy Dynamics",
            "deps": [
              "moon-dynamics-neptune"
            ]
          }
        ]
      },
      {
        "id": "infrastructure",
        "title": "Infrastructure",
        "items": [
          {
            "id": "deep-imaging",
            "name": "Deep Imaging",
            "deps": []
          },
          {
            "id": "nav-system",
            "name": "Navigation System",
            "deps": []
          },
          {
            "id": "data-cluster",
            "name": "Data Cluster",
            "deps": []
          }
        ]
      },
      {
        "id": "moons",
        "title": "Moons",
        "items": [
          {
            "id": "triton",
            "name": "Triton",
            "deps": [],
            "external": "https://en.wikipedia.org/wiki/Triton_(moon)",
            "logo": "https://favicon.im/wikipedia.org"
          },
          {
            "id": "proteus",
            "name": "Proteus",
            "deps": [],
            "external": "https://en.wikipedia.org/wiki/Proteus_(moon)",
            "logo": "https://favicon.im/wikipedia.org"
          },
          {
            "id": "nereid",
            "name": "Nereid",
            "deps": [],
            "external": "https://en.wikipedia.org/wiki/Nereid_(moon)",
            "logo": "https://favicon.im/wikipedia.org"
          }
        ]
      }
    ]
  }
]
`,Vl=`[
  {
    "id": "sequential-alphabet",
    "title": "Alphabet Usage Map (Sequential)",
    "abstract": "Letters grouped sequentially across the alphabet. Note that red, white and black are not used.",
    "categories": [
      {
        "id": "first-5-letters",
        "title": "First 5 Letters",
        "items": [
          {
            "id": "a",
            "name": "A",
            "deps": []
          },
          {
            "id": "b",
            "name": "B",
            "deps": []
          },
          {
            "id": "c",
            "name": "C",
            "deps": []
          },
          {
            "id": "d",
            "name": "D",
            "deps": []
          },
          {
            "id": "e",
            "name": "E",
            "deps": []
          }
        ]
      },
      {
        "id": "second-5-letters",
        "title": "Second 5 Letters",
        "items": [
          {
            "id": "f",
            "name": "F",
            "deps": []
          },
          {
            "id": "g",
            "name": "G",
            "deps": []
          },
          {
            "id": "h",
            "name": "H",
            "deps": []
          },
          {
            "id": "i",
            "name": "I",
            "deps": []
          },
          {
            "id": "j",
            "name": "J",
            "deps": []
          }
        ]
      },
      {
        "id": "third-5-letters",
        "title": "Third 5 Letters",
        "items": [
          {
            "id": "k",
            "name": "K",
            "deps": []
          },
          {
            "id": "l",
            "name": "L",
            "deps": []
          },
          {
            "id": "m",
            "name": "M",
            "deps": []
          },
          {
            "id": "n",
            "name": "N",
            "deps": []
          },
          {
            "id": "o",
            "name": "O",
            "deps": []
          }
        ]
      },
      {
        "id": "fourth-5-letters",
        "title": "Fourth 5 Letters",
        "items": [
          {
            "id": "p",
            "name": "P",
            "deps": []
          },
          {
            "id": "q",
            "name": "Q",
            "deps": []
          },
          {
            "id": "r",
            "name": "R",
            "deps": []
          },
          {
            "id": "s",
            "name": "S",
            "deps": []
          },
          {
            "id": "t",
            "name": "T",
            "deps": []
          }
        ]
      },
      {
        "id": "last-6-letters",
        "title": "Last 6 Letters",
        "items": [
          {
            "id": "u",
            "name": "U",
            "deps": []
          },
          {
            "id": "v",
            "name": "V",
            "deps": []
          },
          {
            "id": "w",
            "name": "W",
            "deps": []
          },
          {
            "id": "x",
            "name": "X",
            "deps": []
          },
          {
            "id": "y",
            "name": "Y",
            "deps": []
          },
          {
            "id": "z",
            "name": "Z",
            "deps": []
          }
        ]
      }
    ]
  },
  {
    "id": "frequency-alphabet",
    "title": "Alphabet Usage Map (Frequency)",
    "abstract": "Letters grouped by their usage frequency in common English vocabulary.",
    "categories": [
      {
        "id": "very-common",
        "title": "Very Common Letters",
        "items": [
          {
            "id": "e",
            "name": "E",
            "deps": []
          },
          {
            "id": "t",
            "name": "T",
            "deps": []
          },
          {
            "id": "a",
            "name": "A",
            "deps": []
          },
          {
            "id": "o",
            "name": "O",
            "deps": []
          },
          {
            "id": "i",
            "name": "I",
            "deps": []
          }
        ]
      },
      {
        "id": "common",
        "title": "Common Letters",
        "items": [
          {
            "id": "n",
            "name": "N",
            "deps": []
          },
          {
            "id": "s",
            "name": "S",
            "deps": []
          },
          {
            "id": "h",
            "name": "H",
            "deps": []
          },
          {
            "id": "r",
            "name": "R",
            "deps": []
          },
          {
            "id": "d",
            "name": "D",
            "deps": []
          }
        ]
      },
      {
        "id": "mid",
        "title": "Moderately Common Letters",
        "items": [
          {
            "id": "l",
            "name": "L",
            "deps": []
          },
          {
            "id": "c",
            "name": "C",
            "deps": []
          },
          {
            "id": "u",
            "name": "U",
            "deps": []
          },
          {
            "id": "m",
            "name": "M",
            "deps": []
          },
          {
            "id": "w",
            "name": "W",
            "deps": []
          }
        ]
      },
      {
        "id": "less-common",
        "title": "Less Common Letters",
        "items": [
          {
            "id": "f",
            "name": "F",
            "deps": []
          },
          {
            "id": "g",
            "name": "G",
            "deps": []
          },
          {
            "id": "y",
            "name": "Y",
            "deps": []
          },
          {
            "id": "p",
            "name": "P",
            "deps": []
          },
          {
            "id": "b",
            "name": "B",
            "deps": []
          }
        ]
      },
      {
        "id": "rare",
        "title": "Rare Letters",
        "items": [
          {
            "id": "v",
            "name": "V",
            "deps": []
          },
          {
            "id": "k",
            "name": "K",
            "deps": []
          },
          {
            "id": "j",
            "name": "J",
            "deps": []
          },
          {
            "id": "x",
            "name": "X",
            "deps": []
          },
          {
            "id": "q",
            "name": "Q",
            "deps": []
          },
          {
            "id": "z",
            "name": "Z",
            "deps": []
          }
        ]
      }
    ]
  },
  {
    "id": "emoji-alphabet",
    "title": "Alphabet Usage Map (Frequency with Emoji)",
    "abstract": "Letters grouped by their usage frequency in common English vocabulary, each linked to a Twemoji regional indicator logo.",
    "categories": [
      {
        "id": "very-common",
        "title": "Very Common Letters",
        "items": [
          {
            "id": "e",
            "name": "E",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1ea.svg",
            "deps": []
          },
          {
            "id": "t",
            "name": "T",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1f9.svg",
            "deps": []
          },
          {
            "id": "a",
            "name": "A",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1e6.svg",
            "deps": []
          },
          {
            "id": "o",
            "name": "O",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1f4.svg",
            "deps": []
          },
          {
            "id": "i",
            "name": "I",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1ee.svg",
            "deps": []
          }
        ]
      },
      {
        "id": "common",
        "title": "Common Letters",
        "items": [
          {
            "id": "n",
            "name": "N",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1f3.svg",
            "deps": []
          },
          {
            "id": "s",
            "name": "S",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1f8.svg",
            "deps": []
          },
          {
            "id": "h",
            "name": "H",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1ed.svg",
            "deps": []
          },
          {
            "id": "r",
            "name": "R",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1f7.svg",
            "deps": []
          },
          {
            "id": "d",
            "name": "D",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1e9.svg",
            "deps": []
          }
        ]
      },
      {
        "id": "mid",
        "title": "Moderately Common Letters",
        "items": [
          {
            "id": "l",
            "name": "L",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1f1.svg",
            "deps": []
          },
          {
            "id": "c",
            "name": "C",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1e8.svg",
            "deps": []
          },
          {
            "id": "u",
            "name": "U",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1fa.svg",
            "deps": []
          },
          {
            "id": "m",
            "name": "M",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1f2.svg",
            "deps": []
          },
          {
            "id": "w",
            "name": "W",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1fc.svg",
            "deps": []
          }
        ]
      },
      {
        "id": "less-common",
        "title": "Less Common Letters",
        "items": [
          {
            "id": "f",
            "name": "F",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1eb.svg",
            "deps": []
          },
          {
            "id": "g",
            "name": "G",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1ec.svg",
            "deps": []
          },
          {
            "id": "y",
            "name": "Y",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1fe.svg",
            "deps": []
          },
          {
            "id": "p",
            "name": "P",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1f5.svg",
            "deps": []
          },
          {
            "id": "b",
            "name": "B",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1e7.svg",
            "deps": []
          }
        ]
      },
      {
        "id": "rare",
        "title": "Rare Letters",
        "items": [
          {
            "id": "v",
            "name": "V",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1fb.svg",
            "deps": []
          },
          {
            "id": "k",
            "name": "K",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1f0.svg",
            "deps": []
          },
          {
            "id": "j",
            "name": "J",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1ef.svg",
            "deps": []
          },
          {
            "id": "x",
            "name": "X",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1fd.svg",
            "deps": []
          },
          {
            "id": "q",
            "name": "Q",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1f6.svg",
            "deps": []
          },
          {
            "id": "z",
            "name": "Z",
            "logo": "https://twemoji.maxcdn.com/v/latest/svg/1f1ff.svg",
            "deps": []
          }
        ]
      }
    ]
  },
{
  "id": "conventions",
  "title": "Color Conventions",
  "abstract": "Reference for color conventions.",
  "categories": [
    {
      "id": "color-conventions",
      "title": "Color conventions",
      "items": [
        {
          "id": "old",
          "name": "Old",
          "color": "#000000",
          "deps": []
        },
        {
          "id": "new",
          "name": "New",
          "color": "#FFFFFF",
          "deps": []
        },
        {
          "id": "important",
          "name": "Important",
          "deps": [],
          "color": "#FF0000"
        }
      ]
    }
  ]
}
]
`,$l=`{
  "id": "maven-local-run-model",
  "title": "Maven-Driven Local Run",
  "abstract": "Developers iterate by running Maven-built services on their laptops, relying on fast builds, cached artifacts, and local runtime plumbing to mimic production dependencies.",
  "categories": [
    {
      "id": "developer-flow",
      "title": "Developer Flow",
      "items": [
        { "id": "hot-reload", "name": "Hot Reloaded Runs", "deps": ["maven-build", "local-runtime"] },
        { "id": "cli-tests", "name": "CLI Test Execution", "deps": ["testing-harness", "local-runtime"] },
        { "id": "local-sandbox", "name": "Local Sandbox Profiles", "deps": ["config-management", "dev-compute"] }
      ]
    },
    {
      "id": "build-tooling",
      "title": "Build Tooling",
      "items": [
        { "id": "maven-build", "name": "Maven Build Lifecycle", "deps": ["dependency-cache", "vcs"] },
        { "id": "dependency-cache", "name": "Dependency Cache", "deps": ["artifact-store"] },
        { "id": "testing-harness", "name": "Testing Harness", "deps": ["observability-hooks", "local-runtime"] }
      ]
    },
    {
      "id": "runtime-support",
      "title": "Runtime Support",
      "items": [
        { "id": "local-runtime", "name": "Local Runtime Environment", "deps": ["dev-compute"] },
        { "id": "config-management", "name": "Config & Secrets Management", "deps": ["secrets-store", "vcs"] },
        { "id": "observability-hooks", "name": "Observability Hooks", "deps": ["log-collector"] }
      ]
    },
    {
      "id": "foundation",
      "title": "Foundation",
      "items": [
        { "id": "dev-compute", "name": "Developer Workstation Compute", "deps": [] },
        { "id": "artifact-store", "name": "Artifact Store", "deps": [] },
        { "id": "vcs", "name": "Version Control", "deps": [] },
        { "id": "log-collector", "name": "Local Log Collector", "deps": [] },
        { "id": "secrets-store", "name": "Secrets Store", "deps": [] }
      ]
    }
  ]
}

---
{
  "id": "fat-jar-host-model",
  "title": "Fat JAR on Host",
  "abstract": "Applications are bundled into executable JARs that run on long-lived hosts, so value comes from dependable rollouts, hardened host agents, and tight observability.",
  "categories": [
    {
      "id": "service-experience",
      "title": "Service Experience",
      "items": [
        { "id": "fat-jar-service", "name": "Fat JAR Service", "deps": ["host-orchestrator", "config-loader"] },
        { "id": "health-endpoints", "name": "Health Endpoints", "deps": ["observability-stack"] },
        { "id": "traffic-management", "name": "Traffic Management Scripts", "deps": ["host-agent", "load-balancer"] }
      ]
    },
    {
      "id": "deployment",
      "title": "Deployment Automation",
      "items": [
        { "id": "build-artifact", "name": "Build Artifact Pipeline", "deps": ["ci-system", "artifact-repo"] },
        { "id": "host-orchestrator", "name": "Host Orchestrator", "deps": ["build-artifact", "host-agent"] },
        { "id": "release-approvals", "name": "Release Approvals", "deps": ["ci-system", "audit-logs"] }
      ]
    },
    {
      "id": "runtime-ops",
      "title": "Runtime Operations",
      "items": [
        { "id": "config-loader", "name": "Config Loader", "deps": ["secrets-vault", "config-store"] },
        { "id": "host-agent", "name": "Host Agent", "deps": ["os-image", "monitoring-stack"] },
        { "id": "observability-stack", "name": "Observability Stack", "deps": ["monitoring-stack", "log-pipeline"] }
      ]
    },
    {
      "id": "platform-services",
      "title": "Platform Services",
      "items": [
        { "id": "ci-system", "name": "CI System", "deps": [] },
        { "id": "artifact-repo", "name": "Artifact Repository", "deps": [] },
        { "id": "config-store", "name": "Configuration Store", "deps": [] },
        { "id": "secrets-vault", "name": "Secrets Vault", "deps": [] },
        { "id": "audit-logs", "name": "Audit Logs", "deps": [] }
      ]
    },
    {
      "id": "infrastructure",
      "title": "Infrastructure",
      "items": [
        { "id": "os-image", "name": "Hardened OS Image", "deps": [] },
        { "id": "monitoring-stack", "name": "Monitoring Stack", "deps": [] },
        { "id": "log-pipeline", "name": "Log Pipeline", "deps": [] },
        { "id": "load-balancer", "name": "Load Balancer", "deps": [] }
      ]
    }
  ]
}

---
{
  "id": "war-app-server-model",
  "title": "WAR/EAR on App Server",
  "abstract": "Classic application servers host packaged WAR/EAR artifacts, so dependable rollout, clustering, and stateful services are vital to keep legacy workloads healthy.",
  "categories": [
    {
      "id": "experience",
      "title": "User-Facing Modules",
      "items": [
        { "id": "transaction-uis", "name": "Transaction UI Modules", "deps": ["app-server-runtime", "routing-layer"] },
        { "id": "legacy-integrations", "name": "Legacy Integration Endpoints", "deps": ["app-server-runtime", "mq-bridge"] },
        { "id": "reporting-scripts", "name": "Reporting Scripts", "deps": ["app-server-runtime", "data-source-pool"] }
      ]
    },
    {
      "id": "deployment",
      "title": "Deployment Delivery",
      "items": [
        { "id": "deployment-packages", "name": "WAR/EAR Packages", "deps": ["ci-system-j2ee", "artifact-repo-j2ee"] },
        { "id": "domain-profiles", "name": "Domain Profiles", "deps": ["config-repo", "secrets-vault-j2ee"] },
        { "id": "orchestration-scripts", "name": "Orchestration Scripts", "deps": ["ci-system-j2ee", "config-repo"] },
        { "id": "rolling-rollbacks", "name": "Rolling Deploy & Rollback", "deps": ["orchestration-scripts", "session-clustering"] }
      ]
    },
    {
      "id": "runtime",
      "title": "Runtime Platform",
      "items": [
        { "id": "app-server-runtime", "name": "App Server Runtime", "deps": ["jvm-tuning", "session-clustering", "data-source-pool"] },
        { "id": "session-clustering", "name": "Session Clustering", "deps": ["shared-cache"] },
        { "id": "routing-layer", "name": "Routing Layer", "deps": ["network-segmentation"] },
        { "id": "mq-bridge", "name": "MQ Bridge", "deps": ["messaging-backbone"] },
        { "id": "jvm-tuning", "name": "JVM Tuning Profiles", "deps": ["compute-cluster"] }
      ]
    },
    {
      "id": "state-services",
      "title": "State & Integration Services",
      "items": [
        { "id": "data-source-pool", "name": "Data Source Pool", "deps": ["database-cluster", "secrets-vault-j2ee"] },
        { "id": "database-cluster", "name": "Database Cluster", "deps": ["compute-cluster"] },
        { "id": "shared-cache", "name": "Shared Cache", "deps": ["database-cluster"] },
        { "id": "messaging-backbone", "name": "Messaging Backbone", "deps": ["network-segmentation"] },
        { "id": "network-segmentation", "name": "Network Segmentation", "deps": ["compute-cluster"] }
      ]
    },
    {
      "id": "foundation",
      "title": "Foundation",
      "items": [
        { "id": "ci-system-j2ee", "name": "CI System", "deps": [] },
        { "id": "artifact-repo-j2ee", "name": "Artifact Repository", "deps": [] },
        { "id": "config-repo", "name": "Configuration Repo", "deps": ["ci-system-j2ee"] },
        { "id": "secrets-vault-j2ee", "name": "Secrets Vault", "deps": ["compute-cluster"] },
        { "id": "compute-cluster", "name": "Compute Cluster", "deps": [] }
      ]
    }
  ]
}

---
{
  "id": "immutable-vm-model",
  "title": "Immutable VM Images",
  "abstract": "Teams bake golden VM images, promote them through automated pipelines, and rely on fleet orchestration plus safe networking to roll out replacements quickly.",
  "categories": [
    {
      "id": "service-surfaces",
      "title": "Service Surfaces",
      "items": [
        { "id": "vm-service-rollouts", "name": "VM Service Rollouts", "deps": ["image-pipeline", "traffic-switch"] },
        { "id": "canary-fleets", "name": "Canary Fleets", "deps": ["fleet-orchestrator", "observability-suite"] },
        { "id": "disaster-recovery-plan", "name": "Disaster Recovery Playbooks", "deps": ["snapshot-backups", "fleet-orchestrator"] }
      ]
    },
    {
      "id": "release-engineering",
      "title": "Release Engineering",
      "items": [
        { "id": "image-pipeline", "name": "Immutable Image Pipeline", "deps": ["packer-templates", "artifact-registry"] },
        { "id": "compliance-scans", "name": "Compliance Scans", "deps": ["security-tooling", "artifact-registry"] },
        { "id": "packer-templates", "name": "Packer Templates", "deps": ["base-amis"] }
      ]
    },
    {
      "id": "operations",
      "title": "Operations",
      "items": [
        { "id": "fleet-orchestrator", "name": "Fleet Orchestrator", "deps": ["iam-service", "network-segmentation"] },
        { "id": "snapshot-backups", "name": "Snapshot Backups", "deps": ["storage-backend", "iam-service"] },
        { "id": "traffic-switch", "name": "Traffic Switch Automation", "deps": ["load-balancers", "dns-control"] },
        { "id": "load-balancers", "name": "Load Balancers", "deps": ["network-segmentation"] },
        { "id": "dns-control", "name": "DNS Control", "deps": ["network-segmentation"] }
      ]
    },
    {
      "id": "platform-services",
      "title": "Platform Services",
      "items": [
        { "id": "artifact-registry", "name": "Artifact Registry", "deps": ["storage-backend"] },
        { "id": "security-tooling", "name": "Security Tooling", "deps": ["iam-service"] },
        { "id": "observability-suite", "name": "Observability Suite", "deps": ["metrics-stack", "log-service"] },
        { "id": "metrics-stack", "name": "Metrics Stack", "deps": ["storage-backend"] },
        { "id": "log-service", "name": "Log Service", "deps": ["storage-backend"] }
      ]
    },
    {
      "id": "infrastructure",
      "title": "Infrastructure",
      "items": [
        { "id": "base-amis", "name": "Base AMIs", "deps": ["compute-pool"] },
        { "id": "storage-backend", "name": "Storage Backend", "deps": [] },
        { "id": "iam-service", "name": "IAM Service", "deps": [] },
        { "id": "network-segmentation", "name": "Network Segmentation", "deps": [] },
        { "id": "compute-pool", "name": "Compute Pool", "deps": [] }
      ]
    }
  ]
}

---
{
  "id": "single-host-container-model",
  "title": "Single-Host Container",
  "abstract": "A lone host runs one or a few containers, so productivity hinges on fast image builds, simple release scripts, and lightweight observability tied to that machine.",
  "categories": [
    {
      "id": "service-experience",
      "title": "Service Experience",
      "items": [
        { "id": "containerized-service", "name": "Containerized Service", "deps": ["image-build", "runtime-engine"] },
        { "id": "ad-hoc-scaling", "name": "Ad-hoc Scaling", "deps": ["runtime-engine", "monitoring-hooks"] },
        { "id": "configurable-endpoints", "name": "Configurable Endpoints", "deps": ["config-injector", "host-networking"] }
      ]
    },
    {
      "id": "delivery",
      "title": "Delivery",
      "items": [
        { "id": "image-build", "name": "Image Build", "deps": ["git-repo", "container-registry"] },
        { "id": "registry-sync", "name": "Registry Sync", "deps": ["container-registry", "storage-endpoint"] },
        { "id": "release-scripts", "name": "Release Scripts", "deps": ["config-injector", "runtime-engine"] }
      ]
    },
    {
      "id": "operations",
      "title": "Operations",
      "items": [
        { "id": "runtime-engine", "name": "Runtime Engine", "deps": ["host-os", "compute-node"] },
        { "id": "config-injector", "name": "Config Injector", "deps": ["secrets-vault", "env-profiles"] },
        { "id": "monitoring-hooks", "name": "Monitoring Hooks", "deps": ["metrics-agent", "log-service"] },
        { "id": "host-networking", "name": "Host Networking", "deps": ["network-stack", "host-os"] }
      ]
    },
    {
      "id": "platform-services",
      "title": "Platform Services",
      "items": [
        { "id": "container-registry", "name": "Container Registry", "deps": ["storage-endpoint"] },
        { "id": "secrets-vault", "name": "Secrets Vault", "deps": [] },
        { "id": "env-profiles", "name": "Environment Profiles", "deps": ["git-repo"] },
        { "id": "log-service", "name": "Log Service", "deps": ["storage-endpoint"] },
        { "id": "metrics-agent", "name": "Metrics Agent", "deps": ["log-service"] }
      ]
    },
    {
      "id": "infrastructure",
      "title": "Infrastructure",
      "items": [
        { "id": "host-os", "name": "Host OS", "deps": ["compute-node"] },
        { "id": "compute-node", "name": "Compute Node", "deps": [] },
        { "id": "network-stack", "name": "Network Stack", "deps": [] },
        { "id": "git-repo", "name": "Source Repository", "deps": [] },
        { "id": "storage-endpoint", "name": "Storage Endpoint", "deps": [] }
      ]
    }
  ]
}

---
{
  "id": "compose-single-host-model",
  "title": "Compose on Single Host",
  "abstract": "Multiple containers are orchestrated on a lone host via Docker Compose, so value depends on declarative stacks, secret bundles, and simple host resources.",
  "categories": [
    {
      "id": "service-experience",
      "title": "Service Experience",
      "items": [
        { "id": "stacked-services", "name": "Stacked Services", "deps": ["compose-engine", "service-discovery"] },
        { "id": "preview-envs", "name": "Preview Environments", "deps": ["compose-engine", "secret-bundles"] },
        { "id": "automated-demos", "name": "Automated Demos", "deps": ["release-hooks", "stacked-services"] }
      ]
    },
    {
      "id": "delivery",
      "title": "Delivery",
      "items": [
        { "id": "compose-manifests", "name": "Compose Manifests", "deps": ["git-repo", "secret-bundles"] },
        { "id": "image-curation", "name": "Image Curation", "deps": ["container-registry", "observability-stack"] },
        { "id": "release-hooks", "name": "Release Hooks", "deps": ["compose-manifests", "observability-stack"] }
      ]
    },
    {
      "id": "runtime",
      "title": "Runtime",
      "items": [
        { "id": "compose-engine", "name": "Compose Engine", "deps": ["host-os", "network-bridge"] },
        { "id": "service-discovery", "name": "Service Discovery", "deps": ["compose-engine", "network-bridge"] },
        { "id": "volume-management", "name": "Volume Management", "deps": ["storage-pool"] }
      ]
    },
    {
      "id": "platform-services",
      "title": "Platform Services",
      "items": [
        { "id": "container-registry", "name": "Container Registry", "deps": ["storage-pool"] },
        { "id": "secret-bundles", "name": "Secret Bundles", "deps": ["secret-store"] },
        { "id": "observability-stack", "name": "Observability Stack", "deps": ["storage-pool"] },
        { "id": "git-repo", "name": "Source Repository", "deps": [] }
      ]
    },
    {
      "id": "infrastructure",
      "title": "Infrastructure",
      "items": [
        { "id": "host-os", "name": "Host OS", "deps": ["compute-node"] },
        { "id": "compute-node", "name": "Compute Node", "deps": [] },
        { "id": "network-bridge", "name": "Network Bridge", "deps": [] },
        { "id": "storage-pool", "name": "Storage Pool", "deps": [] },
        { "id": "secret-store", "name": "Secret Store", "deps": [] }
      ]
    }
  ]
}

---
{
  "id": "buildpack-paas-model",
  "title": "Buildpack/PaaS Git-Push Deploy",
  "abstract": "Developers push code to Git, buildpacks produce runnable slugs, and the platform handles routing, scaling, and observability with strong guardrails.",
  "categories": [
    {
      "id": "service-experience",
      "title": "Service Experience",
      "items": [
        { "id": "git-push-deploy", "name": "Git-Push Deploy", "deps": ["buildpack-builder", "routing-tier"] },
        { "id": "preview-apps", "name": "Preview Apps", "deps": ["release-manager", "env-services"] },
        { "id": "autoscale-rules", "name": "Autoscale Rules", "deps": ["runtime-plane", "observability-core"] }
      ]
    },
    {
      "id": "delivery",
      "title": "Application Delivery",
      "items": [
        { "id": "buildpack-builder", "name": "Buildpack Builder", "deps": ["build-service", "artifact-cache"] },
        { "id": "release-manager", "name": "Release Manager", "deps": ["buildpack-builder", "config-service"] },
        { "id": "env-services", "name": "Env Services", "deps": ["config-service", "secret-service"] },
        { "id": "config-service", "name": "Config Service", "deps": ["secret-service", "storage-buckets"] },
        { "id": "build-service", "name": "Build Service", "deps": ["ci-system", "artifact-cache"] }
      ]
    },
    {
      "id": "platform",
      "title": "Platform Runtime",
      "items": [
        { "id": "runtime-plane", "name": "Runtime Plane", "deps": ["container-scheduler", "network-plane"] },
        { "id": "routing-tier", "name": "Routing Tier", "deps": ["edge-router", "dns-service"] },
        { "id": "observability-core", "name": "Observability Core", "deps": ["metrics-pipeline", "log-pipeline"] },
        { "id": "artifact-cache", "name": "Artifact Cache", "deps": ["storage-buckets"] }
      ]
    },
    {
      "id": "operations",
      "title": "Operations",
      "items": [
        { "id": "container-scheduler", "name": "Container Scheduler", "deps": ["compute-cluster"] },
        { "id": "network-plane", "name": "Network Plane", "deps": ["compute-cluster"] },
        { "id": "edge-router", "name": "Edge Router", "deps": ["network-plane"] },
        { "id": "metrics-pipeline", "name": "Metrics Pipeline", "deps": ["storage-buckets"] },
        { "id": "log-pipeline", "name": "Log Pipeline", "deps": ["storage-buckets"] }
      ]
    },
    {
      "id": "infrastructure",
      "title": "Infrastructure",
      "items": [
        { "id": "compute-cluster", "name": "Compute Cluster", "deps": [] },
        { "id": "storage-buckets", "name": "Storage Buckets", "deps": [] },
        { "id": "dns-service", "name": "DNS Service", "deps": [] },
        { "id": "secret-service", "name": "Secret Service", "deps": [] },
        { "id": "ci-system", "name": "CI System", "deps": [] }
      ]
    }
  ]
}

---
{
  "id": "kubernetes-model",
  "title": "Kubernetes (Manifests/Helm/Kustomize)",
  "abstract": "Declarative manifests describe workloads that flow through release pipelines, landing on clusters with mesh, policy, and observability guardrails.",
  "categories": [
    {
      "id": "application-experience",
      "title": "Application Experience",
      "items": [
        { "id": "declarative-apps", "name": "Declarative Apps", "deps": ["release-pipelines", "service-mesh"] },
        { "id": "progressive-delivery", "name": "Progressive Delivery", "deps": ["release-pipelines", "policy-gates"] },
        { "id": "tenant-workspaces", "name": "Tenant Workspaces", "deps": ["namespace-templates", "rbac-guard"] }
      ]
    },
    {
      "id": "delivery",
      "title": "Delivery Tooling",
      "items": [
        { "id": "release-pipelines", "name": "Release Pipelines", "deps": ["ci-controllers", "artifact-registry"] },
        { "id": "gitops-repo", "name": "GitOps Repo", "deps": ["source-control"] },
        { "id": "template-tooling", "name": "Manifest Tooling", "deps": ["gitops-repo", "schema-validators"] },
        { "id": "policy-gates", "name": "Policy Gates", "deps": ["schema-validators", "rbac-guard"] },
        { "id": "source-control", "name": "Source Control", "deps": [] }
      ]
    },
    {
      "id": "platform-operations",
      "title": "Platform Operations",
      "items": [
        { "id": "service-mesh", "name": "Service Mesh", "deps": ["ingress-gateway", "observability-stack"] },
        { "id": "namespace-templates", "name": "Namespace Templates", "deps": ["policy-gates", "cloud-api"] },
        { "id": "rbac-guard", "name": "RBAC Guard", "deps": ["identity-provider"] },
        { "id": "canary-controller", "name": "Canary Controller", "deps": ["service-mesh", "autoscaler"] }
      ]
    },
    {
      "id": "cluster-services",
      "title": "Cluster Services",
      "items": [
        { "id": "ingress-gateway", "name": "Ingress Gateway", "deps": ["load-balancers"] },
        { "id": "observability-stack", "name": "Observability Stack", "deps": ["telemetry-backend"] },
        { "id": "ci-controllers", "name": "CI Controllers", "deps": ["cloud-api"] },
        { "id": "schema-validators", "name": "Schema Validators", "deps": ["artifact-registry"] },
        { "id": "autoscaler", "name": "Cluster Autoscaler", "deps": ["cloud-api"] }
      ]
    },
    {
      "id": "infrastructure",
      "title": "Infrastructure",
      "items": [
        { "id": "cloud-api", "name": "Cloud API", "deps": [] },
        { "id": "identity-provider", "name": "Identity Provider", "deps": [] },
        { "id": "load-balancers", "name": "Load Balancers", "deps": [] },
        { "id": "telemetry-backend", "name": "Telemetry Backend", "deps": [] },
        { "id": "artifact-registry", "name": "Artifact Registry", "deps": [] }
      ]
    }
  ]
}

---
{
  "id": "gitops-kubernetes-model",
  "title": "GitOps on Kubernetes",
  "abstract": "Git is the single source of truth; controllers continuously reconcile clusters, enforcing policy and surfacing compliance insights.",
  "categories": [
    {
      "id": "user-value",
      "title": "User Value",
      "items": [
        { "id": "gitops-workloads", "name": "GitOps Workloads", "deps": ["sync-automation", "controllers"] },
        { "id": "self-service-platform", "name": "Self-Service Platform", "deps": ["declarative-repos", "policy-enforcement"] },
        { "id": "compliance-dashboards", "name": "Compliance Dashboards", "deps": ["observability", "audit-logs"] }
      ]
    },
    {
      "id": "delivery",
      "title": "Delivery",
      "items": [
        { "id": "declarative-repos", "name": "Declarative Repos", "deps": ["source-control", "artifact-registry"] },
        { "id": "change-approval", "name": "Change Approval", "deps": ["declarative-repos", "identity-broker"] },
        { "id": "sync-automation", "name": "Sync Automation", "deps": ["controllers", "policy-enforcement"] },
        { "id": "promotion-workflows", "name": "Promotion Workflows", "deps": ["declarative-repos", "artifact-registry"] }
      ]
    },
    {
      "id": "platform",
      "title": "Platform",
      "items": [
        { "id": "controllers", "name": "GitOps Controllers", "deps": ["kubernetes-clusters", "secret-store"] },
        { "id": "policy-enforcement", "name": "Policy Enforcement", "deps": ["identity-broker", "observability"] },
        { "id": "observability", "name": "Observability", "deps": ["metrics-stack", "log-stack"] },
        { "id": "metrics-stack", "name": "Metrics Stack", "deps": ["storage-backend"] },
        { "id": "log-stack", "name": "Log Stack", "deps": ["storage-backend"] }
      ]
    },
    {
      "id": "support-services",
      "title": "Support Services",
      "items": [
        { "id": "artifact-registry", "name": "Artifact Registry", "deps": ["storage-backend"] },
        { "id": "identity-broker", "name": "Identity Broker", "deps": ["network-plane"] },
        { "id": "audit-logs", "name": "Audit Logs", "deps": ["storage-backend"] },
        { "id": "secret-store", "name": "Secret Store", "deps": ["storage-backend"] }
      ]
    },
    {
      "id": "infrastructure",
      "title": "Infrastructure",
      "items": [
        { "id": "kubernetes-clusters", "name": "Kubernetes Clusters", "deps": ["network-plane"] },
        { "id": "network-plane", "name": "Network Plane", "deps": [] },
        { "id": "storage-backend", "name": "Storage Backend", "deps": [] },
        { "id": "source-control", "name": "Source Control", "deps": [] }
      ]
    }
  ]
}

---
{
  "id": "k8s-serverless-model",
  "title": "K8s-Native Serverless",
  "abstract": "Knative/OpenFaaS extend Kubernetes with serving, eventing, and build flows so functions scale to zero while integrating with cluster services.",
  "categories": [
    {
      "id": "service-experience",
      "title": "Service Experience",
      "items": [
        { "id": "event-driven-apis", "name": "Event-Driven APIs", "deps": ["serving-plane", "eventing-plane"] },
        { "id": "scale-to-zero", "name": "Scale to Zero", "deps": ["autoscaler", "serving-plane"] },
        { "id": "multi-tenancy", "name": "Multi-tenancy", "deps": ["developer-portals", "identity-broker"] }
      ]
    },
    {
      "id": "delivery",
      "title": "Delivery",
      "items": [
        { "id": "function-builds", "name": "Function Builds", "deps": ["source-control", "image-registry"] },
        { "id": "developer-portals", "name": "Developer Portals", "deps": ["release-policies", "identity-broker"] },
        { "id": "release-policies", "name": "Release Policies", "deps": ["policy-engine", "secret-store"] }
      ]
    },
    {
      "id": "platform",
      "title": "Platform",
      "items": [
        { "id": "serving-plane", "name": "Serving Plane", "deps": ["kubernetes-clusters", "network-plane"] },
        { "id": "eventing-plane", "name": "Eventing Plane", "deps": ["messaging-backbone", "serving-plane"] },
        { "id": "autoscaler", "name": "Serverless Autoscaler", "deps": ["metrics-backend", "serving-plane"] },
        { "id": "observability-core", "name": "Observability Core", "deps": ["metrics-backend", "storage-backend"] },
        { "id": "policy-engine", "name": "Policy Engine", "deps": ["secret-store", "identity-broker"] }
      ]
    },
    {
      "id": "support-services",
      "title": "Support Services",
      "items": [
        { "id": "image-registry", "name": "Image Registry", "deps": ["storage-backend"] },
        { "id": "secret-store", "name": "Secret Store", "deps": ["storage-backend"] },
        { "id": "identity-broker", "name": "Identity Broker", "deps": ["network-plane"] },
        { "id": "messaging-backbone", "name": "Messaging Backbone", "deps": ["network-plane"] },
        { "id": "source-control", "name": "Source Control", "deps": [] }
      ]
    },
    {
      "id": "infrastructure",
      "title": "Infrastructure",
      "items": [
        { "id": "kubernetes-clusters", "name": "Kubernetes Clusters", "deps": ["compute-pool"] },
        { "id": "network-plane", "name": "Network Plane", "deps": ["compute-pool"] },
        { "id": "storage-backend", "name": "Storage Backend", "deps": [] },
        { "id": "metrics-backend", "name": "Metrics Backend", "deps": ["storage-backend"] },
        { "id": "compute-pool", "name": "Compute Pool", "deps": [] }
      ]
    }
  ]
}

---
{
  "id": "managed-faas-model",
  "title": "Managed FaaS",
  "abstract": "Cloud Functions/Lambda run code in response to events; teams focus on packaging, guardrails, and observability while the provider operates the runtime.",
  "categories": [
    {
      "id": "service-experience",
      "title": "Service Experience",
      "items": [
        { "id": "event-services", "name": "Event Services", "deps": ["execution-runtime", "event-bridge"] },
        { "id": "api-integrations", "name": "API Integrations", "deps": ["execution-runtime", "networking"] },
        { "id": "workflow-orchestration", "name": "Workflow Orchestration", "deps": ["event-bridge", "release-controls"] }
      ]
    },
    {
      "id": "delivery",
      "title": "Delivery",
      "items": [
        { "id": "function-packaging", "name": "Function Packaging", "deps": ["artifact-registry", "ci-pipeline"] },
        { "id": "environment-config", "name": "Environment Config", "deps": ["secrets-injection", "identity-management"] },
        { "id": "release-controls", "name": "Release Controls", "deps": ["ci-pipeline", "audit-logs"] },
        { "id": "ci-pipeline", "name": "CI Pipeline", "deps": ["source-control", "artifact-registry"] }
      ]
    },
    {
      "id": "platform",
      "title": "Platform",
      "items": [
        { "id": "execution-runtime", "name": "Execution Runtime", "deps": ["cloud-account"] },
        { "id": "event-bridge", "name": "Event Bridge", "deps": ["networking"] },
        { "id": "observability-suite", "name": "Observability Suite", "deps": ["monitoring-backend", "logging-backbone"] },
        { "id": "secrets-injection", "name": "Secrets Injection", "deps": ["identity-management", "kms"] }
      ]
    },
    {
      "id": "support-services",
      "title": "Support Services",
      "items": [
        { "id": "identity-management", "name": "Identity Management", "deps": ["cloud-account"] },
        { "id": "artifact-registry", "name": "Artifact Registry", "deps": ["storage-buckets"] },
        { "id": "monitoring-backend", "name": "Monitoring Backend", "deps": ["storage-buckets"] },
        { "id": "networking", "name": "Networking", "deps": ["cloud-account"] },
        { "id": "audit-logs", "name": "Audit Logs", "deps": ["logging-backbone"] }
      ]
    },
    {
      "id": "infrastructure",
      "title": "Infrastructure",
      "items": [
        { "id": "cloud-account", "name": "Cloud Account", "deps": [] },
        { "id": "storage-buckets", "name": "Storage Buckets", "deps": [] },
        { "id": "logging-backbone", "name": "Logging Backbone", "deps": [] },
        { "id": "kms", "name": "KMS", "deps": [] },
        { "id": "source-control", "name": "Source Control", "deps": [] }
      ]
    }
  ]
}

---
{
  "id": "edge-wasm-microvm-model",
  "title": "Edge/WASM/MicroVM Platforms",
  "abstract": "Workloads ship to constrained edge nodes using WASM or microVM sandboxes, so the value chain hinges on compact builds, remote orchestration, and resilient control planes.",
  "categories": [
    {
      "id": "experience",
      "title": "Experience",
      "items": [
        { "id": "low-latency-apps", "name": "Low-Latency Apps", "deps": ["webassembly-runtime", "edge-orchestrator"] },
        { "id": "offline-first", "name": "Offline-First Experiences", "deps": ["device-fleet-updates", "storage-sync"] },
        { "id": "secure-multitenancy", "name": "Secure Multi-tenancy", "deps": ["microvm-manager", "identity-broker"] }
      ]
    },
    {
      "id": "delivery",
      "title": "Delivery",
      "items": [
        { "id": "wasm-build-pipeline", "name": "WASM Build Pipeline", "deps": ["source-control", "artifact-registry"] },
        { "id": "device-fleet-updates", "name": "Device Fleet Updates", "deps": ["edge-orchestrator", "control-plane"] },
        { "id": "policy-packaging", "name": "Policy Packaging", "deps": ["identity-broker", "key-distribution"] }
      ]
    },
    {
      "id": "platform",
      "title": "Platform",
      "items": [
        { "id": "edge-orchestrator", "name": "Edge Orchestrator", "deps": ["control-plane", "network-backbone"] },
        { "id": "webassembly-runtime", "name": "WebAssembly Runtime", "deps": ["edge-nodes", "observability"] },
        { "id": "microvm-manager", "name": "MicroVM Manager", "deps": ["edge-nodes", "hardware-roots"] },
        { "id": "observability", "name": "Observability", "deps": ["telemetry-pipeline", "storage-sync"] }
      ]
    },
    {
      "id": "support-services",
      "title": "Support Services",
      "items": [
        { "id": "artifact-registry", "name": "Artifact Registry", "deps": ["storage-sync"] },
        { "id": "identity-broker", "name": "Identity Broker", "deps": ["control-plane"] },
        { "id": "key-distribution", "name": "Key Distribution", "deps": ["hardware-roots"] },
        { "id": "control-plane", "name": "Control Plane", "deps": ["network-backbone"] },
        { "id": "telemetry-pipeline", "name": "Telemetry Pipeline", "deps": ["storage-sync"] }
      ]
    },
    {
      "id": "infrastructure",
      "title": "Infrastructure",
      "items": [
        { "id": "edge-nodes", "name": "Edge Nodes", "deps": ["hardware-roots"] },
        { "id": "network-backbone", "name": "Network Backbone", "deps": [] },
        { "id": "storage-sync", "name": "Storage Sync", "deps": [] },
        { "id": "hardware-roots", "name": "Hardware Roots of Trust", "deps": [] },
        { "id": "source-control", "name": "Source Control", "deps": [] }
      ]
    }
  ]
}
`,Fl=`{
  "id": "wardley-mapping",
  "title": "Wardley Mapping",
  "abstract": "A detailed value chain for creating, analysing, and acting upon a Wardley Map to gain strategic advantage. The **Y-axis** represents User Value / Visibility (from user-facing needs to invisible components). The **X-axis** represents Evolution (from Genesis → Custom → Product → Commodity). User value peaks in Action & Strategy, supported by increasingly abstract and commoditised enablers toward the base.",
  "categories": [
    {
      "id": "strategy-action",
      "title": "Action and Strategy (Highest User Value)",
      "items": [
        {
          "id": "strategic-gameplay",
          "name": "Strategic Gameplay Decisions",
          "deps": ["map-analysis", "doctrine"],
          "external": "https://www.wardleymaps.com/glossary/gameplay"
        },
        {
          "id": "investment-prioritisation",
          "name": "Investment Prioritisation",
          "deps": ["map-analysis", "ecosystem-mapping"]
        },
        {
          "id": "shared-consensus",
          "name": "Shared Organisational Consensus",
          "deps": ["map-visualisation", "communication"]
        }
      ]
    },
    {
      "id": "analysis-insight",
      "title": "Map Analysis & Insight",
      "items": [
        {
          "id": "map-analysis",
          "name": "Evolutionary Pattern Analysis",
          "deps": ["component-positioning", "evolution-theory"],
          "external": "https://www.wardleymaps.com/glossary/evolution-stages"
        },
        {
          "id": "ecosystem-mapping",
          "name": "Ecosystem & Competitor Mapping",
          "deps": ["component-positioning", "market-analysis"]
        },
        {
          "id": "map-visualisation",
          "name": "Map Visualisation & Rendering",
          "deps": ["value-chain-definition", "mapping-tools"]
        }
      ]
    },
    {
      "id": "mapping-methodology",
      "title": "Mapping Methodology & Data (Axes Definition)",
      "items": [
        {
          "id": "value-chain-definition",
          "name": "Value Chain Definition (Y-Axis: Visibility)",
          "deps": ["user-need-identification", "capabilities-list"],
          "external": "https://www.wardleymaps.com/glossary/value-chain"
        },
        {
          "id": "component-positioning",
          "name": "Component Positioning (X-Axis: Evolution)",
          "deps": ["value-chain-definition", "evolution-theory"],
          "external": "https://www.wardleymaps.com/glossary/component-positioning"
        },
        {
          "id": "doctrine",
          "name": "Doctrine & Principles",
          "deps": ["communication", "learning-resources"],
          "external": "https://www.wardleymaps.com/doctrine/"
        }
      ]
    },
    {
      "id": "foundational-inputs",
      "title": "Foundational Inputs & Enablers",
      "items": [
        {
          "id": "user-need-identification",
          "name": "User Need Identification",
          "deps": ["market-analysis"]
        },
        {
          "id": "capabilities-list",
          "name": "Required Capabilities List",
          "deps": ["business-context"]
        },
        {
          "id": "evolution-theory",
          "name": "Theory of Evolution (Genesis to Commodity)",
          "deps": ["learning-resources"],
          "external": "https://www.wardleymaps.com/glossary/evolution-stages"
        },
        {
          "id": "mapping-tools",
          "name": "Mapping Tools (e.g., Online Editor, DSL)",
          "deps": ["community-support"]
        },
        {
          "id": "communication",
          "name": "Cross-Team Communication & Workshops",
          "deps": ["business-context"]
        }
      ]
    },
    {
      "id": "abstract-knowledge",
      "title": "Abstract Knowledge Base (Lowest User Visibility)",
      "items": [
        {
          "id": "market-analysis",
          "name": "Market Research Data",
          "deps": []
        },
        {
          "id": "business-context",
          "name": "Current Business Context & Goals",
          "deps": []
        },
        {
          "id": "learning-resources",
          "name": "Wardley Mapping Learning Resources",
          "deps": []
        },
        {
          "id": "community-support",
          "name": "Mapping Community Support",
          "deps": []
        }
      ]
    }
  ]
}
`,Ps="blockscape:apicurioConfig",_a="http://localhost:8080/apis/registry/v3",Mi="bs",Rs="-series",Ia=!1,xa=!1;function jl({models:o,getActiveIndex:c,setActive:g,ensureModelMetadata:C,ensureSeriesId:k,getModelId:N,getSeriesId:j,getModelTitle:m,computeJsonFingerprint:G,uid:q}){let re=null,J=null,de=null,me=null,Re=null,V=null,W=null,Z=null,F=null,X=null;const Se=new Set,P={baseUrl:_a,groupId:Mi,authToken:"",enabled:Ia,useSemver:xa},pe=new Map,ge=new Map;function te(l){return(l||"").toString().trim().replace(/\/+$/,"")}function le(l){return`${(l||"").toString().trim()||Mi}${Rs}`}function we(){return!!(P.baseUrl&&P.groupId)}function fe(){return P.enabled!==!1}function ve(){Se.forEach(l=>{try{l(fe())}catch(u){console.warn("[Blockscape] failed to run Apicurio enabled listener",u)}})}function en(l){return typeof l=="function"&&Se.add(l),()=>Se.delete(l)}function je(){de&&(de.value=P.baseUrl||""),me&&(me.value=P.groupId||""),Re&&(Re.value=P.authToken||""),V&&(V.checked=fe()),W&&(W.checked=!!P.useSemver)}function R(l="",u="muted"){Z&&(Z.textContent=l||"",Z.classList.remove("is-error","is-success"),u==="error"?Z.classList.add("is-error"):u==="success"&&Z.classList.add("is-success"))}function Q(l){if(!X||(X.innerHTML="",!l))return;const u=document.createElement("p");u.className="apicurio-hint",u.textContent=l,X.appendChild(u)}function He(l){pe.clear(),ge.clear(),Q(l)}function Be(){const l=c(),u=fe(),_=we(),E=l>=0?o[l]:null,h=!!(E!=null&&E.apicurioVersions&&E.apicurioVersions.length>1);if(re){const M=re.dataset.loading==="true",$=u&&_&&l>=0&&!!Ke(o[l]);re.disabled=!u||M||!$,u?M||(re.textContent="Push to Apicurio"):re.textContent="Enable Apicurio to push"}if(F){const M=F.dataset.loading==="true",$=u&&_&&h&&!!Ke(E);F.disabled=!$||M,F.hidden=!h,u?M||(F.textContent="Push series"):F.textContent="Enable Apicurio to push series"}if(J){const M=J.dataset.loading==="true",$=u&&_;J.disabled=!$||M,M||(u?_?J.textContent="List artifacts":J.textContent="Enter details to list":J.textContent="Enable Apicurio to list")}}function Ve(){je(),fe()?we()?(R("Apicurio push is ready when a model is selected.","muted"),pe.size||Q("Click “List artifacts” to browse the current group.")):(R("Enter Apicurio connection details to enable push.","muted"),He("Enter registry details to browse artifacts.")):(R("Apicurio integration is off. Enable it to allow pushes.","muted"),He("Apicurio integration is disabled.")),Be()}function qe(){if(window!=null&&window.localStorage)try{localStorage.setItem(Ps,JSON.stringify(P))}catch(l){console.warn("[Blockscape] unable to persist Apicurio settings",l)}}function Ae(){let l={};if(window!=null&&window.localStorage)try{const M=localStorage.getItem(Ps);if(M){const $=JSON.parse(M);$&&typeof $=="object"&&(l=$)}}catch(M){console.warn("[Blockscape] failed to restore Apicurio settings",M)}const u=te(l.baseUrl??_a),_=(l.groupId??Mi).toString().trim();let E=Ia,h=xa;typeof l.enabled=="boolean"?E=l.enabled:typeof l.enabled=="string"&&(E=l.enabled==="true"),typeof l.useSemver=="boolean"?h=l.useSemver:typeof l.useSemver=="string"&&(h=l.useSemver==="true"),P.baseUrl=u||_a,P.groupId=_||Mi,P.authToken=(l.authToken??"").toString().trim(),P.enabled=E,P.useSemver=h,Ve(),ve()}function We(){const l={Accept:"application/json"},u=(P.authToken||"").trim();return u&&(l.Authorization=/\s/.test(u)?u:`Bearer ${u}`),l}function S(l,u,{title:_,description:E,version:h}={}){const M={artifactId:l,artifactType:"JSON",firstVersion:{content:{contentType:"application/json",content:u},metadata:{properties:{}}}};h&&(M.firstVersion.version=h),_&&(M.name=_),E&&(M.description=E);try{const $=JSON.parse(u),B=$==null?void 0:$.seriesId;B&&typeof B=="string"&&(M.firstVersion.metadata.properties.seriesId=B)}catch{}return M}function w(l,{version:u}={}){const _={content:{contentType:"application/json",content:l},metadata:{properties:{}}};try{const E=JSON.parse(l),h=E==null?void 0:E.seriesId;h&&typeof h=="string"&&(_.metadata.properties.seriesId=h)}catch{}return u&&(_.version=u),_}function Ge(l){if(l==null)return null;const u=String(l).trim();if(!u)return null;const _=/^v?(\d+)\.(\d+)\.(\d+)(?:-.+)?$/.exec(u);if(_)return{major:Number(_[1]),minor:Number(_[2]),patch:Number(_[3])};const E=/^v?(\d+)$/.exec(u);return E?{major:Number(E[1]),minor:0,patch:0}:null}function _e(l){return`${l.major}.${l.minor}.${l.patch}`}function H(l,u){return!l&&!u?0:l?u?l.major!==u.major?l.major-u.major:l.minor!==u.minor?l.minor-u.minor:l.patch-u.patch:1:-1}function be(l=[]){let u=null;if(l.forEach(E=>{const h=Ge((E==null?void 0:E.version)??E);h&&(!u||H(h,u)>0)&&(u=h)}),!u)return"1.0.0";const _={...u,patch:u.patch+1};return _e(_)}function Ke(l,{seriesName:u,fallbackTitle:_}={}){var M;if(!l)return null;const E=u||l.title||l.apicurioArtifactName||m(l),h=_||E;if(typeof k=="function"&&(l.isSeries||((M=l.apicurioVersions)==null?void 0:M.length)>1)&&k(l,{seriesName:E,fallbackTitle:h}),typeof j=="function"){const $=j(l,{seriesName:E,fallbackTitle:h});if($)return $}return N(l)}function L(l){return Array.isArray(l)?l:Array.isArray(l==null?void 0:l.artifacts)?l.artifacts:Array.isArray(l==null?void 0:l.items)?l.items:Array.isArray(l==null?void 0:l.results)?l.results:[]}function z(l){return Array.isArray(l)?l:Array.isArray(l==null?void 0:l.versions)?l.versions:Array.isArray(l==null?void 0:l.items)?l.items:[]}function ne(l=[]){if(!Array.isArray(l)||!l.length)return null;const u=[...l].filter(Boolean);return u.sort((_,E)=>{const h=_!=null&&_.createdOn?new Date(_.createdOn).getTime():0,M=E!=null&&E.createdOn?new Date(E.createdOn).getTime():0;if(h!==M)return M-h;const $=Number(_==null?void 0:_.version),B=Number(E==null?void 0:E.version),ae=Number.isFinite($),Y=Number.isFinite(B);if(ae&&Y&&$!==B)return B-$;const ee=String((_==null?void 0:_.version)??"");return String((E==null?void 0:E.version)??"").localeCompare(ee,void 0,{numeric:!0})}),u[0]||null}function he(l){if(!l)return l;let u=l;if(!Array.isArray(l==null?void 0:l.categories)){const E=l==null?void 0:l.content;if(typeof E=="string")try{u=JSON.parse(E)}catch(h){console.warn("[Blockscape] artifact payload contained string content that could not be parsed",h)}else E&&typeof E=="object"&&(u=E)}return u}async function pn(l,u,_){const E=encodeURIComponent(u),h=encodeURIComponent(_),M=`${l}/groups/${E}/artifacts/${h}`,$=We();$.Accept="application/json";const B=await fetch(M,{method:"GET",headers:$});if(!B.ok){let ae=B.statusText||"Unknown error";try{const Y=await B.text();Y&&(ae=Y.slice(0,400))}catch{}throw new Error(`Failed to fetch artifact metadata (${B.status}): ${ae}`)}return B.json()}async function hn(l,u,_){const E=encodeURIComponent(u),h=encodeURIComponent(_),M=`${l}/groups/${E}/artifacts/${h}/versions?limit=50&order=desc`,$=We();$.Accept="application/json";const B=await fetch(M,{method:"GET",headers:$});if(!B.ok){let Y=B.statusText||"Unknown error";try{const ee=await B.text();ee&&(Y=ee.slice(0,400))}catch{}throw new Error(`Failed to fetch artifact versions (${B.status}): ${Y}`)}const ae=await B.json();return z(ae).filter(Y=>Y&&Y.version!=null)}async function un(l,u,_,E="latest"){const h=encodeURIComponent(u),M=encodeURIComponent(_),$=encodeURIComponent(E||"latest"),B=`${l}/groups/${h}/artifacts/${M}/versions/${$}/content`,ae=We();ae.Accept="application/json, application/*+json, */*;q=0.8";const Y=await fetch(B,{method:"GET",headers:ae});if(!Y.ok){let $e=Y.statusText||"Unknown error";try{const se=await Y.text();se&&($e=se.slice(0,400))}catch{}throw new Error(`Failed to load artifact content (${Y.status}): ${$e}`)}const ee=await Y.text();let ke=null;try{ke=JSON.parse(ee)}catch{throw new Error("Artifact content is not valid JSON.")}return he(ke)}async function De(l,u,_,E="latest"){const h=await un(l,u,_,E);return{data:h,fingerprint:G(h)}}async function On(l,u,_){try{const h=await hn(l,u,_);if(h!=null&&h.length){ge.set(_,h);const M=ne(h);if((M==null?void 0:M.version)!=null)return M.version}}catch(h){console.warn("[Blockscape] compare-version: unable to fetch versions list",h)}try{const h=await pn(l,u,_);if((h==null?void 0:h.version)!=null)return h.version}catch(h){console.warn("[Blockscape] compare-version: unable to fetch metadata",h)}const E=ge.get(_);if(E&&E.length){const h=ne(E);if((h==null?void 0:h.version)!=null)return h.version}return"latest"}async function Ye(l,u,_,E){if(!P.useSemver)return null;if(!E)return"1.0.0";try{const h=await hn(l,u,_);return be(h)}catch(h){throw new Error(`Unable to compute next semantic version: ${h.message}`)}}function ie(l=document){re=l.querySelector("#pushApicurio")||document.getElementById("pushApicurio"),F=l.querySelector("#pushApicurioSeries")||document.getElementById("pushApicurioSeries"),J=l.querySelector("#listApicurioArtifacts")||document.getElementById("listApicurioArtifacts"),de=l.querySelector("#apicurioUrl")||document.getElementById("apicurioUrl"),me=l.querySelector("#apicurioGroup")||document.getElementById("apicurioGroup"),Re=l.querySelector("#apicurioToken")||document.getElementById("apicurioToken"),V=l.querySelector("#apicurioToggle")||document.getElementById("apicurioToggle"),W=l.querySelector("#apicurioSemver")||document.getElementById("apicurioSemver"),Z=l.querySelector("#apicurioStatus")||document.getElementById("apicurioStatus"),X=l.querySelector("#apicurioArtifacts")||document.getElementById("apicurioArtifacts")}function Ne(){P.baseUrl=te((de==null?void 0:de.value)??P.baseUrl),P.groupId=((me==null?void 0:me.value)??"").trim(),P.authToken=((Re==null?void 0:Re.value)??"").trim(),qe(),Ve()}function Bt(l){P.enabled=l!==!1,qe(),Ve(),ve()}function pi(){Bt(V?V.checked:Ia)}function Fn(){P.useSemver=W?W.checked:xa,qe(),Ve()}function bn(){[de,me,Re].forEach(l=>{l&&l.addEventListener("input",Ne)}),re&&re.addEventListener("click",()=>{st()}),F&&F.addEventListener("click",()=>{Dt()}),V&&V.addEventListener("change",pi),W&&W.addEventListener("change",Fn),J&&J.addEventListener("click",ot),X&&X.addEventListener("click",l=>{const u=l.target.closest("[data-artifact-version]");if(u){l.stopPropagation();const h=u.dataset.artifactId,M=u.dataset.artifactVersion;h&&M&&zn(h,M);return}const _=l.target.closest("[data-artifact-load-all]");if(_){l.stopPropagation(),_.dataset.artifactId&&Ot();return}const E=l.target.closest("[data-artifact-trigger]");if(E){const h=E.dataset.artifactId;if(!h)return;jn(h)}})}function Un(){const l=document.createElement("div");return l.className="blockscape-registry-panel",l.innerHTML=`
      <div class="blockscape-registry-header">
        <h2>Apicurio registry</h2>
        <p>Configure the registry connection and push the active model.</p>
      </div>
      <div class="apicurio-controls">
        <label class="apicurio-toggle">
          <input id="apicurioToggle" type="checkbox" />
          <span>Enable Apicurio push</span>
        </label>
        <label class="apicurio-toggle">
          <input id="apicurioSemver" type="checkbox" />
          <span>Use semantic versioning</span>
        </label>
        <p class="apicurio-hint">When disabled, Blockscape never contacts your registry.</p>
        <p class="apicurio-hint apicurio-subnote">When on, Blockscape reads the latest version and auto-bumps the next semver on each push.</p>
        <button id="pushApicurio" class="pf-v5-c-button pf-m-secondary" type="button" disabled
          title="Enter Apicurio connection details to enable pushes">Push to Apicurio</button>
        <button id="pushApicurioSeries" class="pf-v5-c-button pf-m-secondary" type="button" disabled hidden
          title="Push all versions in this series as a JSON array">Push series</button>
        <button id="listApicurioArtifacts" class="pf-v5-c-button pf-m-secondary" type="button" disabled
          title="List artifacts in the configured group">List artifacts</button>
        <details id="apicurioSettings" class="apicurio-settings">
          <summary>Connection settings (optional)</summary>
          <div class="apicurio-fields">
            <label>
              Registry base URL
              <input id="apicurioUrl" type="url" placeholder="https://registry.example/apis/registry/v3" autocomplete="url" />
            </label>
            <label>
              Group ID
              <input id="apicurioGroup" type="text" placeholder="default" autocomplete="organization" />
            </label>
            <label>
              Auth token (optional)
              <input id="apicurioToken" type="password" placeholder="Bearer token" autocomplete="off" />
            </label>
          </div>
          <p class="apicurio-hint">Details stay in this browser only.</p>
        </details>
        <div id="apicurioStatus" class="apicurio-status" role="status" aria-live="polite"></div>
        <div id="apicurioArtifacts" class="apicurio-artifacts" aria-live="polite"></div>
      </div>
    `,l}function vn(l){if(!l)return;l.innerHTML="";const u=Un();l.appendChild(u),ie(l),bn(),Ve()}function Cn(l){if(!X)return;if(X.innerHTML="",!l.length){Q("No artifacts found in this group.");return}const u=h=>{const M=document.createElement("section");M.className="apicurio-artifact-section";const $=document.createElement("h3");$.textContent=h,M.appendChild($);const B=document.createElement("ul");return B.className="apicurio-artifact-list",M.appendChild(B),{section:M,list:B}},_=u("Series artifacts"),E=u("Artifacts");l.forEach(h=>{if(!(h!=null&&h.artifactId))return;const $=h._groupId&&h._groupId.endsWith(Rs)?_.list:E.list,B=document.createElement("li"),ae=document.createElement("button");ae.type="button",ae.className="apicurio-artifact",ae.dataset.artifactId=h.artifactId,ae.dataset.artifactTrigger="toggle";const Y=document.createElement("span");Y.className="apicurio-artifact-title",Y.textContent=h.artifactId,ae.appendChild(Y);const ee=[];if(h.name&&ee.push(h.name),h.version!=null&&ee.push(`v${h.version}`),h.type&&ee.push(h.type),h._groupId&&ee.push(h._groupId),ee.length){const se=document.createElement("span");se.className="apicurio-artifact-meta",se.textContent=ee.join(" • "),ae.appendChild(se)}if(h.description){const se=document.createElement("span");se.className="apicurio-artifact-meta",se.textContent=h.description,ae.appendChild(se)}B.appendChild(ae);const ke=document.createElement("div");ke.className="apicurio-version-list",ke.dataset.versionPanel=h.artifactId,ke.hidden=!0;const $e=document.createElement("p");$e.className="apicurio-hint",$e.textContent="Click to load the latest or open versions.",ke.appendChild($e),B.appendChild(ke),$.appendChild(B)}),_.list.children.length&&X.appendChild(_.section),E.list.children.length&&X.appendChild(E.section)}function yn(l){return X?X.querySelector(`[data-version-panel="${l}"]`):null}function En(l,u){if(!l||(l.innerHTML="",!u))return;const _=document.createElement("p");_.className="apicurio-hint",_.textContent=u,l.appendChild(_)}function yt(l,u){const _=yn(l);if(_){if(_.innerHTML="",!u.length){En(_,"No versions found for this artifact.");return}u.forEach(E=>{const h=document.createElement("button");h.type="button",h.className="apicurio-version-button",h.dataset.artifactId=l,h.dataset.artifactVersion=E.version;const M=[`Version ${E.version}`];if(E.createdOn){const $=new Date(E.createdOn);isNaN($)||M.push($.toISOString().slice(0,10))}h.textContent=M.join(" — "),_.appendChild(h)})}}async function jn(l){const u=yn(l);if(!u)return;if(u.dataset.open==="true"){u.hidden=!0,u.dataset.open="false";return}if(u.hidden=!1,u.dataset.open="true",u.dataset.loaded!=="true"){if(!we()){En(u,"Enter registry details first.");return}En(u,"Loading versions…");try{const E=te(P.baseUrl),h=pe.get(l),M=P.groupId.trim(),$=(h==null?void 0:h._groupId)||M,B=await hn(E,$,l);ge.set(l,B),u.dataset.loaded="true",yt(l,B)}catch(E){console.error("[Blockscape] failed to load versions",E),En(u,`Unable to fetch versions: ${E.message}`)}}}function wt(l,u){var E;const _=o.findIndex(h=>h.apicurioArtifactId===l);if(_!==-1){const h=o[_].id;o[_]={...u,id:h||u.id},((E=o[_].apicurioVersions)==null?void 0:E.length)>1&&(o[_].isSeries=!0),g(_)}else o.push(u),g(o.length-1)}async function at(l,u,_,E){const h=encodeURIComponent(u),M=encodeURIComponent(_),$=`${l}/groups/${h}/artifacts/${M}`;try{const B=await fetch($,{method:"GET",headers:E});if(B.status===404)return!1;if(B.ok)return!0;throw B.status===401||B.status===403?new Error("Authentication failed while checking the registry."):new Error(`Registry responded with status ${B.status} while checking the artifact.`)}catch(B){throw B instanceof TypeError?new Error("Network error while contacting Apicurio registry."):B}}async function st(){var $;if(!re||re.dataset.loading==="true")return;if(!fe()){R("Apicurio integration is off. Enable it first.","error");return}if(!we()){R("Enter the registry base URL and group ID before pushing.","error");return}const l=c();if(l<0||!o[l]){R("No active model to push.","error");return}const u=Ke(o[l],{fallbackTitle:m(o[l])});if(!u){R("Active model needs an id before pushing.","error");return}const _=te(P.baseUrl),E=P.groupId.trim(),h=JSON.stringify(o[l].data,null,2),M=We();re.dataset.loading="true",re.textContent="Pushing…",re.disabled=!0,R("Pushing to Apicurio…","muted");try{const B=await at(_,E,u,M),ae=G(o[l].data);if(B)try{const Te=await On(_,E,u),{data:tn,fingerprint:an}=await De(_,E,u,Te);if(console.group("[Blockscape] Apicurio push compare"),console.log("compare version",Te),console.log("local fingerprint",ae),console.log("registry fingerprint",an),console.log("local payload",o[l].data),console.log("registry payload",tn),console.groupEnd(),ae&&an&&ae===an){if(!window.confirm("The current registry version is identical to this model. Push anyway?")){R("Push cancelled (content matches the latest registry version).","muted");return}R("Pushing identical content by user choice.","muted")}else an?console.log("[Blockscape] Apicurio compare mismatch (proceeding with push)"):R("Unable to compare with registry content (skipping confirmation).","muted")}catch(Te){console.warn("[Blockscape] unable to compare registry content before push",Te),R("Skipped comparison with registry (content fetch failed). Proceeding with push.","muted")}const Y=P.useSemver?await Ye(_,E,u,B):null;if(P.useSemver&&!Y)throw new Error("Semantic versioning is enabled but no version could be computed.");const ee=encodeURIComponent(E),ke=encodeURIComponent(u),$e=B?`${_}/groups/${ee}/artifacts/${ke}/versions`:`${_}/groups/${ee}/artifacts`,se={...M,"Content-Type":"application/json"};Y&&(se["X-Registry-Version"]=Y,R(`Pushing to Apicurio as version ${Y}…`,"muted"));const mn=B?w(h,{version:Y}):S(u,h,{title:m(o[l]),description:($=o[l].data)==null?void 0:$.abstract,version:Y}),gn=await fetch($e,{method:"POST",headers:se,body:JSON.stringify(mn)});if(!gn.ok){let Te=gn.statusText||"Unknown error";try{const tn=await gn.text();tn&&(Te=tn.slice(0,400))}catch{}throw new Error(`Registry rejected the push (${gn.status}): ${Te}`)}let nn=null;try{nn=await gn.json()}catch{nn=null}const ue=(nn==null?void 0:nn.version)||(nn==null?void 0:nn.globalId)||"",Fe=B?"Updated":"Created",wn=ue?` (version ${ue})`:"";R(`${Fe} ${u}${wn}`,"success")}catch(B){console.error("[Blockscape] Apicurio push failed",B),R(`Apicurio push failed: ${B.message}`,"error")}finally{re.dataset.loading="false",Be()}}async function Dt(){var Y,ee;if(!F||F.dataset.loading==="true")return;if(!fe()){R("Apicurio integration is off. Enable it first.","error");return}if(!we()){R("Enter the registry base URL and group ID before pushing.","error");return}const l=c(),u=l>=0?o[l]:null;if(!u||!u.apicurioVersions||u.apicurioVersions.length<2){R("Series push requires a model with multiple versions.","error");return}const _=Ke(u,{seriesName:u.title||u.apicurioArtifactName||m(u)});if(!_){R("Active series needs an id before pushing.","error");return}typeof k=="function"&&k(u,{seriesName:u.title||u.apicurioArtifactName||m(u)});const E=te(P.baseUrl),h=P.groupId.trim(),M=u.apicurioVersions.map(ke=>ke.data),$=JSON.stringify(M,null,2),B=We(),ae=le(h);F.dataset.loading="true",F.textContent="Pushing…",F.disabled=!0,R("Pushing series to Apicurio…","muted");try{const ke=await at(E,ae,_,B),$e=G(M);if(ke)try{const ln=await On(E,ae,_),{data:qn,fingerprint:Hn}=await De(E,ae,_,ln);if(console.group("[Blockscape] Apicurio series push compare"),console.log("compare version",ln),console.log("local fingerprint",$e),console.log("registry fingerprint",Hn),console.log("local payload (series)",M),console.log("registry payload",qn),console.groupEnd(),$e&&Hn&&$e===Hn){if(!window.confirm("The current registry version matches this series. Push anyway?")){R("Series push cancelled (content matches latest).","muted");return}R("Pushing identical series by user choice.","muted")}else Hn?console.log("[Blockscape] Apicurio compare mismatch (proceeding with series push)"):R("Unable to compare with registry content (skipping confirmation).","muted")}catch(ln){console.warn("[Blockscape] unable to compare registry content before series push",ln),R("Skipped comparison with registry (content fetch failed). Proceeding with series push.","muted")}const se=P.useSemver?await Ye(E,ae,_,ke):null;if(P.useSemver&&!se)throw new Error("Semantic versioning is enabled but no version could be computed.");const mn=encodeURIComponent(ae),gn=encodeURIComponent(_),nn=ke?`${E}/groups/${mn}/artifacts/${gn}/versions`:`${E}/groups/${mn}/artifacts`,ue={...B,"Content-Type":"application/json"};se&&(ue["X-Registry-Version"]=se,R(`Pushing series to Apicurio as version ${se}…`,"muted"));const Fe=ke?w($,{version:se}):S(_,$,{title:u.apicurioArtifactName||((Y=u.data)==null?void 0:Y.title)||_,description:(ee=u.data)==null?void 0:ee.abstract,version:se}),wn=await fetch(nn,{method:"POST",headers:ue,body:JSON.stringify(Fe)});if(!wn.ok){let ln=wn.statusText||"Unknown error";try{const qn=await wn.text();qn&&(ln=qn.slice(0,400))}catch{}throw new Error(`Registry rejected the series push (${wn.status}): ${ln}`)}let Te=null;try{Te=await wn.json()}catch{Te=null}const tn=(Te==null?void 0:Te.version)||(Te==null?void 0:Te.globalId)||"",an=ke?"Updated":"Created",_n=tn?` (version ${tn})`:"";R(`${an} ${_} series${_n}`,"success")}catch(ke){console.error("[Blockscape] Apicurio series push failed",ke),R(`Apicurio series push failed: ${ke.message}`,"error")}finally{F.dataset.loading="false",Be()}}async function ot(){if(!J||J.dataset.loading==="true")return;if(!fe()){R("Enable Apicurio integration to list artifacts.","error");return}if(!we()){R("Enter registry base URL and group ID before listing.","error");return}const l=te(P.baseUrl),u=P.groupId.trim(),_=le(u),E=[{groupId:u,label:"base"},{groupId:_,label:"series"}];J.dataset.loading="true",J.textContent="Listing…",J.disabled=!0,R("Listing artifacts…","muted"),Q("Contacting registry…");try{const h=We();h.Accept="application/json";const M=[];for(const B of E){const ae=encodeURIComponent(B.groupId),Y=`${l}/groups/${ae}/artifacts?limit=50&offset=0`,ee=await fetch(Y,{method:"GET",headers:h});if(!ee.ok){let se=ee.statusText||"Unknown error";try{const mn=await ee.text();mn&&(se=mn.slice(0,400))}catch{}console.warn(`[Blockscape] failed to list artifacts for group ${B.groupId} (${ee.status}): ${se}`);continue}const ke=await ee.json(),$e=L(ke).filter(se=>se&&se.artifactId);$e.forEach(se=>{se&&(se._groupId=B.groupId)}),M.push(...$e)}pe.clear(),ge.clear(),M.forEach(B=>{B!=null&&B.artifactId&&pe.set(B.artifactId,B)}),Cn(M);const $=M.length;R($?`Found ${$} artifact${$===1?"":"s"} across base and series groups.`:"No artifacts found in base/series groups.",$?"success":"muted")}catch(h){console.error("[Blockscape] failed to list artifacts",h),He("Unable to list artifacts."),R(`Listing failed: ${h.message}`,"error")}finally{J.dataset.loading="false",Be()}}async function zn(l,u=null){var ke,$e,se,mn,gn,nn;if(!l)return;if(!fe()){R("Enable Apicurio integration to load artifacts.","error");return}if(!we()){R("Enter registry connection details before loading artifacts.","error");return}const _=te(P.baseUrl),E=P.groupId.trim(),h=l&&((ke=pe.get(l))==null?void 0:ke._groupId)||E;let M=pe.get(l);const $=async()=>{try{const ue=await pn(_,h,l);return ue!=null&&ue.artifactId&&pe.set(l,ue),ue}catch(ue){throw console.error("[Blockscape] failed to fetch artifact metadata before loading",ue),ue}};if(!M)try{M=await $()}catch(ue){R(`Failed to fetch artifact metadata: ${ue.message}`,"error");return}const B=ge.get(l)||[];let ae="latest",Y="latest";if(u)ae=u,Y=u;else{if(!M||M.version==null)try{M=await $()}catch(ue){R(`Failed to fetch artifact metadata: ${ue.message}`,"error");return}ae=(M==null?void 0:M.version)||"latest",Y=(M==null?void 0:M.version)||"latest"}const ee=B.find(ue=>String(ue.version)===String(ae));(ee==null?void 0:ee.version)!=null&&(Y=ee.version),R(`Loading artifact ${l}…`,"muted");try{const ue=await un(_,h,l,ae),Fe=pe.get(l)||M||{},wn=Array.isArray(ue);let Te=null;if(wn){const tn=ue.map((_n,ln)=>(C(_n,{titleHint:Fe.name||l,idHint:l}),{version:String(ln+1),data:_n,createdOn:(ee==null?void 0:ee.createdOn)||Fe.createdOn}));Te={id:q(),title:((se=($e=tn[0])==null?void 0:$e.data)==null?void 0:se.title)||Fe.name||l,data:(mn=tn[0])==null?void 0:mn.data,apicurioArtifactId:l,apicurioArtifactName:Fe.name||"",apicurioVersions:tn,apicurioActiveVersionIndex:0,isSeries:!0};const an=((gn=Fe==null?void 0:Fe.properties)==null?void 0:gn.seriesId)||l;typeof k=="function"&&k(Te,{seriesName:an,fallbackTitle:an}),R(`Loaded series artifact ${l}.`,"success")}else{C(ue,{titleHint:Fe.name||l,idHint:l});const tn={version:Y,data:ue,createdOn:(ee==null?void 0:ee.createdOn)||Fe.createdOn};Te={id:q(),title:ue.title||Fe.name||l,data:ue,apicurioArtifactId:l,apicurioArtifactName:Fe.name||"",apicurioVersions:[tn],apicurioActiveVersionIndex:0};const an=(nn=Fe==null?void 0:Fe.properties)==null?void 0:nn.seriesId;an&&typeof k=="function"&&k(Te,{seriesName:an,fallbackTitle:an});const _n=Y?` (version ${Y})`:"";R(`Loaded artifact ${l}${_n}.`,"success")}wt(l,Te)}catch(ue){console.error("[Blockscape] failed to load artifact",ue),R(`Failed to load artifact: ${ue.message}`,"error")}}async function Ot(l){}return{hydrateConfig:Ae,mount:vn,updateAvailability:Be,isEnabled:fe,setEnabled:Bt,onEnabledChange:en}}function Lt(o,c){if(typeof o!="function")throw new Error(`[itemEditor] expected ${c} to be a function`)}function ql(o,{excludeId:c}={}){if(!o)return[];const g=o.split(/[\s,]+/).map(k=>k.trim()).filter(Boolean),C=[];return g.forEach(k=>{c&&k===c||C.includes(k)||C.push(k)}),C}function Wl(o,c,g){if(!c||!g||c===g)return;((o==null?void 0:o.categories)||[]).forEach(k=>{(k.items||[]).forEach(N=>{Array.isArray(N.deps)&&(N.deps=N.deps.map(j=>j===c?g:j))})}),Array.isArray(o==null?void 0:o.links)&&o.links.forEach(k=>{k.from===c&&(k.from=g),k.to===c&&(k.to=g)})}function Gl({findItemAndCategoryById:o,collectAllItemIds:c,updateItemReferences:g,loadActiveIntoEditor:C,rebuildFromActive:k,select:N,onSelectionRenamed:j}={}){Lt(o,"findItemAndCategoryById"),Lt(c,"collectAllItemIds"),Lt(g,"updateItemReferences"),Lt(C,"loadActiveIntoEditor"),Lt(k,"rebuildFromActive"),Lt(N,"select");const m={wrapper:null,fields:{},categoryId:null,itemId:null,modelData:null};function G(V){if(m.fields.errorEl){if(!V){m.fields.errorEl.hidden=!0,m.fields.errorEl.textContent="";return}m.fields.errorEl.hidden=!1,m.fields.errorEl.textContent=V}}function q(){m.wrapper&&(m.wrapper.hidden=!0,m.wrapper.setAttribute("aria-hidden","true"),G(""),m.categoryId=null,m.itemId=null,m.modelData=null,document.body.classList.remove("item-editor-open"))}function re(){m.wrapper&&(m.wrapper.hidden=!1,m.wrapper.setAttribute("aria-hidden","false"),document.body.classList.add("item-editor-open"),requestAnimationFrame(()=>{var V,W;(V=m.fields.nameInput)==null||V.focus(),(W=m.fields.nameInput)==null||W.select()}))}function J(V){var te;if(!m.modelData||!m.categoryId||!m.itemId)throw new Error("No item loaded.");const Z=(((te=m.modelData)==null?void 0:te.categories)||[]).find(le=>le.id===m.categoryId);if(!Z)throw new Error("Category not found.");Z.items=Z.items||[];const F=Z.items.find(le=>le.id===m.itemId);if(!F)throw new Error("Item not found.");const X=(V.id||"").trim();if(!X)throw new Error("ID is required.");const Se=c(m.modelData);if(X!==F.id&&Se.has(X))throw new Error("Another item already uses that ID.");F.id=X;const P=(V.name||"").trim();F.name=P||F.id;const pe=(V.logo||"").trim();if(pe?F.logo=pe:delete F.logo,V.externalFlag&&!V.external)F.external=!0;else{const le=(V.external??"").toString().trim();le?F.external=le:delete F.external}const ge=(V.color||"").trim();return ge?F.color=ge:delete F.color,F.deps=Array.isArray(V.deps)?V.deps:[],F.id!==V.originalId&&typeof j=="function"&&j(V.originalId,F.id),g(m.modelData,V.originalId,F.id),C(),k(),N(F.id),F.id}function de(){if(!m.fields||!m.fields.idInput)return!1;const V=(m.fields.idInput.value||"").trim(),W={originalId:m.itemId,id:V,name:m.fields.nameInput.value||"",logo:m.fields.logoInput.value||"",external:m.fields.externalInput.value||"",externalFlag:m.fields.externalFlagInput.checked,color:m.fields.colorInput.value||"",deps:ql(m.fields.depsInput.value,{excludeId:V})};try{return J(W),q(),!0}catch(Z){return console.warn("[itemEditor] item edit failed",Z),G((Z==null?void 0:Z.message)||"Unable to save item."),!1}}function me(){if(m.wrapper)return m.wrapper;const V=document.createElement("div");V.className="item-editor-modal",V.hidden=!0,V.setAttribute("role","dialog"),V.setAttribute("aria-modal","true");const W=document.createElement("div");W.className="item-editor-modal__backdrop",V.appendChild(W);const Z=document.createElement("div");Z.className="item-editor",V.appendChild(Z);const F=document.createElement("div");F.className="item-editor__header";const X=document.createElement("h2");X.className="item-editor__title",X.textContent="Edit item";const Se=document.createElement("button");Se.type="button",Se.className="item-editor__close",Se.setAttribute("aria-label","Close item editor"),Se.textContent="×",F.appendChild(X),F.appendChild(Se),Z.appendChild(F);const P=document.createElement("form");P.className="item-editor__form",Z.appendChild(P);const pe=document.createElement("div");pe.className="item-editor__meta",pe.innerHTML='<div class="item-editor__meta-label">Category</div><div class="item-editor__meta-value"></div>',P.appendChild(pe);const ge=document.createElement("div");ge.className="item-editor__error",ge.hidden=!0,P.appendChild(ge);const te=(S,w,Ge)=>{const _e=document.createElement("label");_e.className="item-editor__field";const H=document.createElement("span");if(H.className="item-editor__label",H.textContent=S,_e.appendChild(H),w.classList.add("item-editor__control"),_e.appendChild(w),Ge){const be=document.createElement("div");be.className="item-editor__hint",be.textContent=Ge,_e.appendChild(be)}return _e},le=document.createElement("input");le.type="text",le.required=!0,P.appendChild(te("ID",le,"Unique identifier used for links and dependencies."));const we=document.createElement("input");we.type="text",P.appendChild(te("Name",we,"Visible label shown on the tile."));const fe=document.createElement("input");fe.type="url",fe.inputMode="url",fe.placeholder="https://…",P.appendChild(te("Logo URL",fe,"Optional image URL."));const ve=document.createElement("input");ve.type="url",ve.inputMode="url",ve.placeholder="https://…",P.appendChild(te("External link",ve,"Shown with ↗ icon and in preview."));const en=document.createElement("div");en.className="item-editor__checkbox";const je=document.createElement("label");je.className="item-editor__checkbox-row";const R=document.createElement("input");R.type="checkbox";const Q=document.createElement("span");Q.textContent="Mark as external without link";const He=document.createElement("div");He.className="item-editor__hint",He.textContent="Keeps dashed border even without a URL.",je.appendChild(R),je.appendChild(Q),en.appendChild(je),en.appendChild(He),P.appendChild(en);const Be=document.createElement("input");Be.type="text",Be.placeholder="#2563eb",P.appendChild(te("Color",Be,"Optional badge color (hex or CSS color)."));const Ve=document.createElement("textarea");Ve.rows=2,Ve.placeholder="Comma or space separated ids",P.appendChild(te("Dependencies",Ve,"Use item IDs, separated by commas or spaces."));const qe=document.createElement("div");qe.className="item-editor__actions";const Ae=document.createElement("button");Ae.type="button",Ae.className="pf-v5-c-button pf-m-tertiary",Ae.textContent="Cancel";const We=document.createElement("button");return We.type="submit",We.className="pf-v5-c-button pf-m-primary",We.textContent="Save",qe.appendChild(Ae),qe.appendChild(We),P.appendChild(qe),m.wrapper=V,m.fields={idInput:le,nameInput:we,logoInput:fe,externalInput:ve,externalFlagInput:R,colorInput:Be,depsInput:Ve,categoryValue:pe.querySelector(".item-editor__meta-value"),errorEl:ge},Ae.addEventListener("click",q),Se.addEventListener("click",q),W.addEventListener("click",q),P.addEventListener("submit",S=>{S.preventDefault(),de()}),document.addEventListener("keydown",S=>{S.key==="Escape"&&!V.hidden&&(S.preventDefault(),S.stopPropagation(),q())}),document.body.appendChild(V),V}function Re(V){const W=o(V);return W?(me(),m.categoryId=W.category.id,m.itemId=W.item.id,m.modelData=W.modelData,m.fields.categoryValue.textContent=W.category.title||W.category.id,m.fields.idInput.value=W.item.id||"",m.fields.nameInput.value=W.item.name||"",m.fields.logoInput.value=W.item.logo||"",m.fields.externalInput.value=typeof W.item.external=="string"?W.item.external:"",m.fields.externalFlagInput.checked=W.item.external===!0,m.fields.colorInput.value=W.item.color||"",m.fields.depsInput.value=Array.isArray(W.item.deps)?W.item.deps.join(", "):"",G(""),N(W.item.id),re(),!0):!1}return{open:Re,hide:q,isOpen:()=>!!m.wrapper&&!m.wrapper.hidden}}function Bs(o,c="series"){return(o||c).trim().toLowerCase().replace(/[^a-z0-9._-]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")||c}function vt(o,c="series"){const g=Bs(o,c).replace(/\./g,"-");return g.replace(/-series$/i,"").replace(/-+$/,"")||g||Bs(c,"series")}function js(o,{seriesName:c,fallbackTitle:g="unknown"}={}){var m,G;const k=[o==null?void 0:o.seriesId,(m=o==null?void 0:o.data)==null?void 0:m.seriesId,o==null?void 0:o.apicurioArtifactId,c,o==null?void 0:o.title,o==null?void 0:o.apicurioArtifactName,(G=o==null?void 0:o.data)==null?void 0:G.title,g].map(q=>(q??"").toString().trim()),N=k.findIndex(Boolean),j=N!==-1?k[N]:"";return j?(console.log("[Series] deriveSeriesId: picked base",{base:j,sourceIndex:N,candidates:k}),vt(j,g)):(console.log("[Series] deriveSeriesId: no base found; fallback",{fallbackTitle:g}),null)}function fn(o,{seriesName:c,fallbackTitle:g="unknown"}={}){if(!o||typeof o!="object")return null;const C=js(o,{seriesName:c,fallbackTitle:g});return C?(o.seriesId=C,o.apicurioArtifactId||(o.apicurioArtifactId=C),C):null}function Nt(o,c={}){var k,N;if(!o)return null;const g=o.isSeries||((k=o.apicurioVersions)==null?void 0:k.length)>1||o.seriesId||((N=o.data)==null?void 0:N.seriesId)||o.apicurioArtifactId;if(!g&&!c.force)return null;const C=js(o,c);return C||(g?vt(c.fallbackTitle||"unknown"):null)}const Pi=typeof import.meta<"u"&&"./"||"",Ri=["comms.bs","planets.bs","styleguide.bs","blockscape-features.bs"],qs=Object.assign({"../public/APIs.bs":bl,"../public/NFR.bs":vl,"../public/blockscape-features.bs":yl,"../public/comms.bs":wl,"../public/deploy.bs":kl,"../public/network/a-network.bs":Sl,"../public/network/anycast-delivery.bs":Cl,"../public/network/caching-series.bs":El,"../public/network/congestion-control-algorithms-series.bs":_l,"../public/network/core-transport-protocols-series.bs":Il,"../public/network/geodns-edns-client-subnet.bs":xl,"../public/network/health-checks.bs":Al,"../public/network/ip-fragmentation-path-mtu-discovery.bs":Tl,"../public/network/l4-load-balancing.bs":Ll,"../public/network/l7-load-balancing.bs":Nl,"../public/network/observability-troubleshooting-concepts.bs":Ml,"../public/network/recursive-vs-authoritative-dns.bs":Pl,"../public/network/reverse-proxying.bs":Rl,"../public/network/tcp-data-delivery.bs":Bl,"../public/network/throughput-latency-congestion-series.bs":Dl,"../public/network/tls-handshake-secure-delivery.bs":Ol,"../public/network/udp-data-delivery.bs":Ul,"../public/planets.bs":Hl,"../public/styleguide.bs":Vl,"../public/user-capabilities-models.bs":$l,"../public/wardley.bs":Fl}),ht="__default__";function Di(o){return(o||"").replace(/^\.?\/+/,"").replace(/^public\//,"").replace(/^\.\.\/public\//,"")}function Jl(o){if(!o)return"";const c=Di(o);return Pi?Pi.endsWith("/")?`${Pi}${c}`:`${Pi}/${c}`:c}function zl(o){const c=Di(o);return qs[`../public/${c}`]??null}function Kl(){const o=new Map;return Object.keys(qs).forEach(c=>{const C=Di(c.replace(/^\.\.\//,"")).split("/");if(C.length<=1)return;const k=C.pop(),N=C.join("/");o.has(N)||o.set(N,[]),o.get(N).push({filename:k,relativePath:`${N}/${k}`})}),o.forEach(c=>c.sort((g,C)=>g.filename.localeCompare(C.filename))),o}function Ql(){console.log("[Blockscape] init");let o="";const c=document.getElementById("jsonBox"),g=document.querySelector(".blockscape-json-panel"),C=document.getElementById("app"),k=document.getElementById("overlay"),N=document.getElementById("tabTooltip"),j=document.getElementById("modelList"),m=document.getElementById("itemPreview"),G=document.getElementById("urlForm"),q=document.getElementById("urlInput"),re=document.getElementById("loadUrl"),J=m.querySelector(".item-preview__title"),de=m.querySelector(".item-preview__body"),me=m.querySelector(".item-preview__actions"),Re=m.querySelector(".item-preview__close"),V=document.getElementById("downloadJson"),W=document.getElementById("shareModel"),Z=document.getElementById("createVersion"),F=document.getElementById("openInEditor"),X=document.getElementById("copyJson"),Se=document.getElementById("copySeries"),P=document.getElementById("pasteJson"),pe=document.getElementById("helpButton"),ge=document.getElementById("newPanelButton"),te=document.getElementById("shortcutHelp"),le=document.getElementById("shortcutHelpList"),we=document.getElementById("shortcutHelpClose"),fe=document.getElementById("shortcutHelpBackdrop"),ve=document.getElementById("newPanel"),en=document.getElementById("newPanelClose"),je=document.getElementById("newPanelBackdrop"),R=document.getElementById("search"),Q=document.getElementById("searchResults"),He=document.getElementById("modelSets"),Be="blockscape:editorPayload",Ve="blockscape:editorTransfer",qe=document.title,Ae=document.getElementById("seed"),We=Kl();o=((Ae==null?void 0:Ae.textContent)||(Ae==null?void 0:Ae.innerHTML)||"").trim(),o&&c&&(c.value=o);let S=[],w=-1,Ge=ht;const _e=jl({models:S,getActiveIndex:()=>w,setActive:Ze,ensureModelMetadata:lt,getModelId:Je,getSeriesId:Nt,ensureSeriesId:fn,getModelTitle:Oe,computeJsonFingerprint:gi,uid:rt});let H=null,be=new Map,Ke=new Map,L=null,z=null,ne=null,he=null,pn=!0,hn=!1,un=0,De={x:0,y:0},On="map",Ye=null,ie=null,Ne=!1,Bt=null;const pi=2e3;let Fn=null,bn=null,Un=null,vn=null,Cn=null,yn=null,En=null,yt=null,jn=null,wt="",at=!1,st=null,Dt=null,ot=null,zn=[],Ot=null;const l=30,u=1e3,_="blockscape:hoverScale",E=1.5,h=1,M=2.5,$="blockscape:titleWrap",B="blockscape:titleHoverWidth",ae="blockscape:titleHoverTextPortion",Y="wrap",ee=1.3,ke=1,$e=1.6,se=.25,mn=0,gn=.6,nn="blockscape:tileCompactness",ue=1,Fe=.75,wn=1.25,Te="blockscape:obsidianLinksEnabled",tn="blockscape:obsidianLinkMode",an="blockscape:obsidianVault",_n="title",ln="id",qn=_n;let Hn=E,kt=ue,Oa=Y,Ut=ee,Ht=se,Vt=!1,ui=qn,$t="";const Ua="blockscape:seriesNavDoubleClickMs",Ft=900,Ha=300,Va=4e3;let Kn=Ft;_e.hydrateConfig(),to(),ao(),po(),oo(),lo(),go(),yo(),bo(),ko(),sn();function rt(){return Math.random().toString(36).slice(2,10)}function Ws(e){const n=new TextEncoder().encode(e);let t="";return n.forEach(i=>{t+=String.fromCharCode(i)}),btoa(t)}function Gs(e){const n=atob(e),t=new Uint8Array(n.length);for(let i=0;i<n.length;i++)t[i]=n.charCodeAt(i);return new TextDecoder().decode(t)}function Js(e){return Ws(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/g,"")}function zs(e){let n=e.replace(/-/g,"+").replace(/_/g,"/");const t=n.length%4;return t&&(n+="=".repeat(4-t)),Gs(n)}function Ks(e,n){const t=new Blob([n],{type:"application/json"}),i=URL.createObjectURL(t),a=document.createElement("a");a.href=i,a.download=e,a.click(),URL.revokeObjectURL(i)}async function $a(e){var n;if(!((n=navigator.clipboard)!=null&&n.writeText))return!1;try{return await navigator.clipboard.writeText(e),!0}catch(t){return console.warn("[Blockscape] clipboard write failed",t),!1}}async function Qs(){var e;if(!((e=navigator.clipboard)!=null&&e.readText))throw new Error("Clipboard read not supported");return navigator.clipboard.readText()}function jt(e){return(e||"blockscape").trim().toLowerCase().replace(/[^a-z0-9._-]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")||"blockscape"}function Xs(e){return Number.isFinite(e)?Math.min(M,Math.max(h,e)):E}function sn(){if(!C)return;const e=!!L||!!z;C.classList.toggle("blockscape-has-selection",e)}function qt(e){return Hn=Xs(e),document.documentElement.style.setProperty("--blockscape-tile-hover-scale",Hn),Hn}function Ys(e){return Number.isFinite(e)?Math.min(wn,Math.max(Fe,e)):ue}function Wt(e){return kt=Ys(e),document.documentElement.style.setProperty("--blockscape-tile-compactness",kt),kt}function Zs(e){return Number.isFinite(e)?Math.min($e,Math.max(ke,e)):ee}function Gt(e){return Ut=Zs(e),document.documentElement.style.setProperty("--blockscape-title-hover-width-multiplier",Ut),Ut}function eo(e){return Number.isFinite(e)?Math.min(gn,Math.max(mn,e)):se}function Jt(e){return Ht=eo(e),document.documentElement.style.setProperty("--blockscape-tile-hover-text-portion",Ht),Ht}function zt(e){const n=e==="nowrap"?"nowrap":"wrap";Oa=n;const t=n==="nowrap"?"nowrap":"normal",i=n==="nowrap"?"nowrap":"normal";return document.documentElement.style.setProperty("--blockscape-title-white-space",t),document.documentElement.style.setProperty("--blockscape-title-text-wrap",i),n}function no(e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(_,String(e))}catch(n){console.warn("[Blockscape] failed to persist hover scale",n)}}function to(){if(typeof window>"u"||!window.localStorage)return qt(E);try{const e=window.localStorage.getItem(_);if(!e)return qt(E);const n=parseFloat(e);return qt(n)}catch(e){return console.warn("[Blockscape] failed to read hover scale",e),qt(E)}}function io(e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(nn,String(e))}catch(n){console.warn("[Blockscape] failed to persist tile compactness",n)}}function ao(){if(typeof window>"u"||!window.localStorage)return Wt(ue);try{const e=window.localStorage.getItem(nn);if(!e)return Wt(ue);const n=parseFloat(e);return Wt(n)}catch(e){return console.warn("[Blockscape] failed to read tile compactness",e),Wt(ue)}}function so(e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(B,String(e))}catch(n){console.warn("[Blockscape] failed to persist title hover width",n)}}function oo(){if(typeof window>"u"||!window.localStorage)return Gt(ee);try{const e=window.localStorage.getItem(B);if(!e)return Gt(ee);const n=parseFloat(e);return Gt(n)}catch(e){return console.warn("[Blockscape] failed to read title hover width",e),Gt(ee)}}function ro(e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(ae,String(e))}catch(n){console.warn("[Blockscape] failed to persist title text zoom",n)}}function lo(){if(typeof window>"u"||!window.localStorage)return Jt(se);try{const e=window.localStorage.getItem(ae);if(!e)return Jt(se);const n=parseFloat(e);return Jt(n)}catch(e){return console.warn("[Blockscape] failed to read title text zoom",e),Jt(se)}}function co(e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem($,e)}catch(n){console.warn("[Blockscape] failed to persist title wrap mode",n)}}function po(){if(typeof window>"u"||!window.localStorage)return zt(Y);try{const e=window.localStorage.getItem($);return zt(e||Y)}catch(e){return console.warn("[Blockscape] failed to read title wrap mode",e),zt(Y)}}function uo(e){return Number.isFinite(e)?Math.min(Va,Math.max(Ha,e)):Ft}function Kt(e){return Kn=uo(e),Kn}function mo(e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(Ua,String(e))}catch(n){console.warn("[Blockscape] failed to persist series double-click wait",n)}}function go(){if(typeof window>"u"||!window.localStorage)return Kt(Ft);try{const e=window.localStorage.getItem(Ua);if(!e)return Kt(Ft);const n=parseInt(e,10);return Kt(n)}catch(e){return console.warn("[Blockscape] failed to read series double-click wait",e),Kt(Ft)}}function fo(e){return e===ln?ln:_n}function Qt(e){return ui=fo(e),ui}function ho(e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(tn,e)}catch(n){console.warn("[Blockscape] failed to persist Obsidian link mode",n)}}function bo(){if(typeof window>"u"||!window.localStorage)return Qt(qn);try{const e=window.localStorage.getItem(tn);return Qt(e||qn)}catch(e){return console.warn("[Blockscape] failed to read Obsidian link mode",e),Qt(qn)}}function Xt(e){return Vt=!!e,Vt}function vo(e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(Te,e?"1":"0")}catch(n){console.warn("[Blockscape] failed to persist Obsidian toggle",n)}}function yo(){if(typeof window>"u"||!window.localStorage)return Xt(!1);try{const e=window.localStorage.getItem(Te);return e==null?Xt(!1):Xt(e==="1")}catch(e){return console.warn("[Blockscape] failed to read Obsidian toggle",e),Xt(!1)}}function Yt(e){return $t=(e??"").toString().trim(),$t}function wo(e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(an,e)}catch(n){console.warn("[Blockscape] failed to persist Obsidian vault",n)}}function ko(){if(typeof window>"u"||!window.localStorage)return Yt("");try{const e=window.localStorage.getItem(an);return Yt(e||"")}catch(e){return console.warn("[Blockscape] failed to read Obsidian vault",e),Yt("")}}function So(e){return typeof window>"u"||typeof window.prompt!="function"?null:(window.prompt("Name this series",e)||"").trim()||null}function Co(e,n="Pasted"){const t=Array.isArray(e)?e:[];if(!t.length)return`${n} series`;const i=t.find(s=>s&&typeof s=="object")||t[0];return((i==null?void 0:i.title)??"").toString().trim()||`${n} series`}function mi(e,n){!n||!e||typeof e!="object"||(e.seriesId=n,e.apicurioArtifactId=n,e.id=n,e.data&&typeof e.data=="object"&&(e.data.seriesId=n),Array.isArray(e.apicurioVersions)&&e.apicurioVersions.forEach(t=>{t!=null&&t.data&&typeof t.data=="object"&&(t.data.seriesId=n)}))}function Eo(e){if(!e||typeof window>"u"||typeof window.prompt!="function")return!1;const n=(e.title??e.apicurioArtifactName??"").toString().trim()||fi(e,"Series"),t=window.prompt("Series name",n);if(t==null)return!1;const i=t.trim();if(!i)return!1;const a=Nt(e,{seriesName:i,fallbackTitle:i})||vt(i,i),s=window.prompt("Series ID (used for linking and downloads)",a);if(s==null)return!1;const r=vt(s.trim()||i,i||"series");return e.title=i,e.apicurioArtifactName=i,mi(e,r),!0}function Oi(e){return e===null||typeof e!="object"?JSON.stringify(e):Array.isArray(e)?`[${e.map(i=>Oi(i)).join(",")}]`:`{${Object.keys(e).sort().map(i=>`${JSON.stringify(i)}:${Oi(e[i])}`).join(",")}}`}function Fa(e){try{return Oi(e)}catch{return""}}function gi(e){try{const n=typeof e=="string"?JSON.parse(e):e,t=Fa(n);if(t)return t}catch(n){console.warn("[Blockscape] fingerprint parse failed (first pass)",n)}try{const n=JSON.parse(JSON.stringify(e)),t=Fa(n);if(t)return t}catch(n){console.warn("[Blockscape] fingerprint failed for value",n)}try{return JSON.stringify(e)||""}catch{return""}}const _o=[{keys:[["Arrow Left"],["Arrow Right"]],description:"Move selection to the previous or next item in the current category."},{keys:[["Arrow Up"],["Arrow Down"]],description:"Move up/down through items, pausing on category headers before entering the next category at the same relative position."},{keys:[["Cmd/Ctrl","Arrow Up"],["Cmd/Ctrl","Arrow Down"]],description:"Reorder the selected category (or the category that holds the selected item)."},{keys:[["Shift","Arrow Left"],["Shift","Arrow Right"]],description:"Reorder the selected item inside its category."},{keys:[["Shift","Arrow Up"],["Shift","Arrow Down"]],description:"Move the selected item to the previous or next category."},{keys:[["Cmd/Ctrl","Arrow Left"],["Cmd/Ctrl","Arrow Right"]],description:"Switch to the previous or next map when viewing a series."},{keys:[["Cmd/Ctrl","Z"]],description:"Undo the last deleted tile or category."},{keys:[["Cmd/Ctrl","S"]],description:"Download the active model JSON (series if multiple versions are open)."},{keys:[["Cmd/Ctrl","V"]],description:"Append JSON models from the clipboard when focus is outside inputs."},{keys:[["Enter"],["Space"]],description:"Activate a focused tile, same as clicking it."},{keys:[["F2"]],description:"Edit the selected item; when a category (not an item) is selected, open the category editor."},{keys:[["Delete"]],description:"Delete the selected item or category (use Cmd/Ctrl+Z to undo)."},{keys:[["Insert"]],description:"Add a new category at the bottom of the map."},{keys:[["Escape"]],description:"Unselect item or close the open preview popover."}];function lt(e,{titleHint:n="Untitled Model",idHint:t}={}){if(!e||typeof e!="object")return e;const i=(e.title??"").toString().trim();e.title=i||n||"Untitled Model";const a=(e.id??"").toString().trim();if(a)e.id=a;else{const s=t||e.title||n||"model",r=jt(s).replace(/\./g,"-");e.id=r||`model-${rt()}`}return typeof e.abstract!="string"&&(e.abstract=e.abstract==null?"":String(e.abstract)),e}function Io(e){return JSON.parse(JSON.stringify(e))}function Oe(e,n="Untitled Model"){var i;return e&&(((i=e.data)==null?void 0:i.title)??e.title??"").toString().trim()||n}function fi(e,n="Untitled Model"){var i;if(((i=e==null?void 0:e.apicurioVersions)==null?void 0:i.length)>1||(e==null?void 0:e.isSeries)){const a=((e==null?void 0:e.title)??"").toString().trim()||((e==null?void 0:e.apicurioArtifactName)??"").toString().trim();if(a)return a;const s=Je(e);return s?`${s} series`:n}return Oe(e,n)}function Je(e){var a;const n=Nt(e);if(n)return n;const t=(a=e==null?void 0:e.data)==null?void 0:a.id;return t&&t.toString().trim()||null}function xo(e,n){var a;return n?(((a=e==null?void 0:e.data)==null?void 0:a.id)||"").toString().trim()===n?!0:((e==null?void 0:e.apicurioVersions)||[]).some(s=>{var r;return(((r=s==null?void 0:s.data)==null?void 0:r.id)||"").toString().trim()===n}):!1}function ja(e,{excludeIndex:n=-1}={}){if(!e)return-1;const t=e.toString().trim();if(!t)return-1;for(let i=0;i<S.length;i+=1){if(i===n)continue;const a=S[i];if(xo(a,t))return i}return-1}function qa(e){var d;if(e<0||e>=S.length||!c)return!0;const n=S[e],t=(c.value||"").trim();if(!t)return!0;let i;try{i=JSON.parse(t)}catch{return alert("Current JSON is invalid. Fix it before switching versions."),!1}lt(i,{titleHint:Oe(n),idHint:Je(n)});const a=gi(n.data),s=gi(i);if(a===s)return!0;n.data=i;const r=pt(n);return r>=0&&((d=n.apicurioVersions)!=null&&d[r])&&(n.apicurioVersions[r].data=i),!0}function Wa(e){const n=new Set;return((e==null?void 0:e.categories)||[]).forEach(t=>(t.items||[]).forEach(i=>{i!=null&&i.id&&n.add(i.id)})),n}function Ga(e){if(w<0||!e)return null;const n=S[w].data,t=(n==null?void 0:n.categories)||[];for(const i of t){const s=(i.items||[]).find(r=>r.id===e);if(s)return{category:i,item:s,modelData:n}}return null}function Ao(e,n){const t=Wa(n);let i=jt(e||"item");if(!t.has(i))return i;const a=()=>rt().slice(0,4);for(;t.has(i);)i=`${jt(e||"item")}-${a()}`;return i}function To(e="category",n){const t=(n==null?void 0:n.categories)||[],i=jt(e||"category"),a=d=>t.some(p=>p.id===d);let s=i||`category-${rt()}`;if(!a(s))return s;let r=t.length+1;for(;a(`${i}-${r}`);)r+=1;return`${i}-${r}`}const ct=Gl({findItemAndCategoryById:Ga,collectAllItemIds:Wa,updateItemReferences:Wl,loadActiveIntoEditor:cn,rebuildFromActive:rn,select:e=>dn(e),onSelectionRenamed:(e,n)=>{var t;L===e&&(L=n,sn()),((t=Ye==null?void 0:Ye.item)==null?void 0:t.id)===e&&(Ye.item.id=n)}});function Lo({getActiveModelData:e,loadActiveIntoEditor:n,rebuildFromActive:t,selectCategory:i,onCategoryRenamed:a}){const s={wrapper:null,fields:{},categoryId:null,modelData:null},r=x=>{if(s.fields.errorEl){if(!x){s.fields.errorEl.hidden=!0,s.fields.errorEl.textContent="";return}s.fields.errorEl.hidden=!1,s.fields.errorEl.textContent=x}},d=()=>{s.wrapper&&(s.wrapper.hidden=!0,s.wrapper.setAttribute("aria-hidden","true"),r(""),s.categoryId=null,s.modelData=null,document.body.classList.remove("category-editor-open"))},p=()=>{s.wrapper&&(s.wrapper.hidden=!1,s.wrapper.setAttribute("aria-hidden","false"),document.body.classList.add("category-editor-open"),requestAnimationFrame(()=>{var x,D;(x=s.fields.titleInput)==null||x.focus(),(D=s.fields.titleInput)==null||D.select()}))},f=()=>{if(!s.modelData||!s.categoryId)throw new Error("No category loaded.");const x=s.modelData.categories||[],D=x.find(Le=>Le.id===s.categoryId);if(!D)throw new Error("Category not found.");const ce=(s.fields.idInput.value||"").trim();if(!ce)throw new Error("ID is required.");const ye=(s.fields.titleInput.value||"").trim();if(x.some(Le=>Le.id===ce&&Le.id!==D.id))throw new Error("Another category already uses that ID.");const xe=D.id;return D.id=ce,D.title=ye||D.id,xe!==ce&&typeof a=="function"&&a(xe,ce),n(),t(),i(ce,{scrollIntoView:!0}),!0},v=()=>{try{return f(),d(),!0}catch(x){return console.warn("[CategoryEditor] save failed",x),r((x==null?void 0:x.message)||"Unable to save category."),!1}},A=()=>{if(s.wrapper)return s.wrapper;const x=document.createElement("div");x.className="item-editor-modal category-editor-modal",x.hidden=!0,x.setAttribute("role","dialog"),x.setAttribute("aria-modal","true");const D=document.createElement("div");D.className="item-editor-modal__backdrop",x.appendChild(D);const ce=document.createElement("div");ce.className="item-editor",x.appendChild(ce);const ye=document.createElement("div");ye.className="item-editor__header";const Ie=document.createElement("h2");Ie.className="item-editor__title",Ie.textContent="Edit category";const xe=document.createElement("button");xe.type="button",xe.className="item-editor__close",xe.setAttribute("aria-label","Close category editor"),xe.textContent="×",ye.appendChild(Ie),ye.appendChild(xe),ce.appendChild(ye);const Le=document.createElement("form");Le.className="item-editor__form",ce.appendChild(Le);const In=document.createElement("div");In.className="item-editor__meta",In.innerHTML='<div class="item-editor__meta-label">Category</div><div class="item-editor__meta-value"></div>',Le.appendChild(In);const Me=document.createElement("div");Me.className="item-editor__error",Me.hidden=!0,Le.appendChild(Me);const Pe=(Sn,ze,xt)=>{const Tn=document.createElement("label");Tn.className="item-editor__field";const mt=document.createElement("span");if(mt.className="item-editor__label",mt.textContent=Sn,Tn.appendChild(mt),ze.classList.add("item-editor__control"),Tn.appendChild(ze),xt){const ai=document.createElement("div");ai.className="item-editor__hint",ai.textContent=xt,Tn.appendChild(ai)}return Tn},xn=document.createElement("input");xn.type="text",Le.appendChild(Pe("Title",xn,"Display label shown in the map."));const ut=document.createElement("input");ut.type="text",ut.required=!0,Le.appendChild(Pe("ID",ut,"Unique identifier for this category (used in URLs and references)."));const et=document.createElement("div");et.className="item-editor__actions";const An=document.createElement("button");An.type="submit",An.className="item-editor__action item-editor__action--primary",An.textContent="Save";const $n=document.createElement("button");return $n.type="button",$n.className="item-editor__action",$n.textContent="Cancel",et.appendChild(An),et.appendChild($n),Le.appendChild(et),Le.addEventListener("submit",Sn=>{Sn.preventDefault(),v()}),$n.addEventListener("click",d),xe.addEventListener("click",d),D.addEventListener("click",d),x.addEventListener("keydown",Sn=>{Sn.key==="Escape"&&(Sn.preventDefault(),d())}),document.body.appendChild(x),s.wrapper=x,s.fields={titleInput:xn,idInput:ut,errorEl:Me,metaLabel:In.querySelector(".item-editor__meta-value")},x};return{open:x=>{if(!x||!A())return!1;const ce=e(),Ie=((ce==null?void 0:ce.categories)||[]).find(xe=>xe.id===x);return Ie?(s.categoryId=Ie.id,s.modelData=ce,s.fields.metaLabel.textContent=Ie.title||Ie.id||"Category",s.fields.titleInput.value=Ie.title||Ie.id||"",s.fields.idInput.value=Ie.id||"",r(""),p(),!0):!1},hide:d,isOpen:()=>!!s.wrapper&&s.wrapper.hidden===!1}}const No=Lo({getActiveModelData:()=>{var e;return(e=S[w])==null?void 0:e.data},loadActiveIntoEditor:cn,rebuildFromActive:rn,selectCategory:(e,n={})=>Vn(e,n),onCategoryRenamed:(e,n)=>{z===e&&(z=n,sn())}});function hi(e,{versionLabel:n="1",createdOn:t}={}){if(!e)return e;if(Array.isArray(e.apicurioVersions)&&e.apicurioVersions.length)return e.apicurioActiveVersionIndex==null&&(e.apicurioActiveVersionIndex=0),!e.data&&e.apicurioVersions[e.apicurioActiveVersionIndex]&&(e.data=e.apicurioVersions[e.apicurioActiveVersionIndex].data),e;const i={version:n,data:e.data,createdOn:t||new Date().toISOString()};e.apicurioVersions=[i],e.apicurioActiveVersionIndex=0;const a=e.title||Oe(e);return fn(e,{seriesName:a,fallbackTitle:a}),e.isSeries=!0,e}function Wn(e,{versionLabel:n,createdOn:t}={}){var p,f,v;if(e!=null&&e.isSeries||((p=e==null?void 0:e.apicurioVersions)==null?void 0:p.length)>1){const A=e.title||Oe(e);fn(e,{seriesName:A,fallbackTitle:A})}const i=Je(e);if(!i)return hi(e,{versionLabel:n||"1",createdOn:t}),S.push(e),S.length-1;const a=S.findIndex(A=>Je(A)===i);if(a===-1)return hi(e,{versionLabel:n||"1",createdOn:t}),S.push(e),S.length-1;const s=S[a];if(!Array.isArray(s.apicurioVersions)||!s.apicurioVersions.length){s.apicurioVersions=[{version:"1",data:s.data,createdOn:(v=(f=s.apicurioVersions)==null?void 0:f[0])==null?void 0:v.createdOn}],s.apicurioActiveVersionIndex=0;const A=s.title||Oe(s);fn(s,{seriesName:A,fallbackTitle:A})}const r=String(s.apicurioVersions.length+1);s.apicurioVersions.push({version:r,data:e.data,createdOn:t||new Date().toISOString()}),s.apicurioActiveVersionIndex=s.apicurioVersions.length-1,s.data=e.data,s.title=Oe(e)||s.title,s.isSeries=!0;const d=s.title||Oe(s);return fn(s,{seriesName:d,fallbackTitle:d}),a}function Ja({versionLabel:e}={}){var r;if(w<0||!S[w])throw new Error("Load or select a model before creating a version.");const n=S[w];hi(n,{versionLabel:"1"});let t;try{t=Io(n.data)}catch(d){throw console.warn("[Blockscape] failed to clone active model for versioning",d),new Error("Could not copy the current model.")}lt(t,{titleHint:Oe(n),idHint:Je(n)||Nt(n)});const a={version:e||String((((r=n.apicurioVersions)==null?void 0:r.length)||0)+1),data:t,createdOn:new Date().toISOString()};n.apicurioVersions.push(a),n.apicurioActiveVersionIndex=n.apicurioVersions.length-1,n.data=t,n.isSeries=!0;const s=n.title||Oe(n);return fn(n,{seriesName:s,fallbackTitle:s}),w}function bi(){const e=w>=0&&S[w]?S[w]:null,n=Je(e);document.title=n?`${n}-blockscape`:qe}function Ui(e){if(!e)return null;const n=e.apicurioVersions;if(!Array.isArray(n)||n.length<=1)return null;const t=e.title||e.apicurioArtifactName||Oe(e);return fn(e,{seriesName:t,fallbackTitle:t}),n.map(i=>i&&typeof i=="object"&&"data"in i?i.data:i)}function Mo(){const e=S[w],n=Ui(e);if(!n)return null;try{return JSON.stringify(n,null,2)}catch(t){return console.warn("[Blockscape] failed to stringify series",t),null}}function za(e="shortcut",n=!1){const t=c.value||"";if(!t.trim())return console.warn("[Blockscape] download ignored: JSON box is empty."),!1;const i=S[w],a=n?Ui(i):null,s=!!a,r=s?JSON.stringify(a,null,2):t,d=Nt(i),p=Je(i),f=d||p||Oe(i,"blockscape"),v=s?"-series":"",A=`${jt(f)}${v}.bs`;return Ks(A,r),console.log(`[Blockscape] saved JSON (${e}):`,A),!0}const Po={A:"#0284c7",B:"#3b82f6",C:"#06b6d4",D:"#a855f7",E:"#f59e0b",F:"#f97316",G:"#22c55e",H:"#84cc16",I:"#10b981",J:"#14b8a6",K:"#0ea5e9",L:"#60a5fa",M:"#8b5cf6",N:"#d946ef",O:"#e879f9",P:"#67e8f9",Q:"#4ade80",R:"#facc15",S:"#eab308",T:"#a3e635",U:"#22d3ee",V:"#38bdf8",W:"#818cf8",X:"#a78bfa",Y:"#f472b6",Z:"#fb7185"};function Ka(e,n){if(n&&/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(n))return n;const t=(e||"?").charAt(0).toUpperCase();return Po[t]||"#9ca3af"}function Ro(e){const n=e.replace("#",""),t=n.length===3?n.split("").map(p=>p+p).join(""):n,i=parseInt(t,16),a=i>>16&255,s=i>>8&255,r=i&255;return .2126*Math.pow(a/255,2.2)+.7152*Math.pow(s/255,2.2)+.0722*Math.pow(r/255,2.2)>.35?"#111111":"#ffffff"}function Bo(){if(!(typeof window>"u"||typeof window.scrollTo!="function"))try{window.scrollTo({top:0,behavior:"smooth"})}catch{window.scrollTo(0,0)}}function Hi(){if(Cn)return;Cn=document.createElement("div"),Cn.className="series-nav-notice";const e=document.createElement("span");e.className="series-nav-notice__dot",yn=document.createElement("span"),yn.className="series-nav-notice__text",Cn.appendChild(e),Cn.appendChild(yn),document.body.appendChild(Cn)}function Vi(){En&&(clearTimeout(En),En=null),Cn&&Cn.classList.remove("is-visible"),yn&&(yn.textContent="")}function Qn(){Fn=null,Un=null,bn&&(clearTimeout(bn),bn=null),vn&&(clearTimeout(vn),vn=null),Vi()}function Do(e,n){var i;if(!((i=e==null?void 0:e.apicurioVersions)!=null&&i[n]))return`version ${n+1}`;const t=e.apicurioVersions[n].version;return t?`version "${t}"`:`version ${n+1}`}function Oo(e,n,t){Hi(),Fn={id:e,targetVersionIndex:n},bn&&clearTimeout(bn),bn=setTimeout(()=>{bn=null,Qn()},Kn);const i=Do(t,n);vi(`Click again to open ${i} in this series.`,Kn)}function Uo(e,n,t){Hi(),Un={id:e,targetModelIndex:n},vn&&clearTimeout(vn),vn=setTimeout(()=>{vn=null,Un=null,Vi()},Kn);const i=fi(t)||e;vi(`Click again to open "${i}" from the portfolio.`,Kn)}function vi(e,n=pi,t=null){if(Hi(),yn.textContent="",yn.appendChild(document.createTextNode(e)),t){const i=document.createTextNode(" "),a=document.createElement("a");a.href=t,a.target="_blank",a.rel="noopener",a.textContent=t,yn.appendChild(i),yn.appendChild(a)}Cn.classList.add("is-visible"),En&&clearTimeout(En),En=setTimeout(()=>Vi(),n)}function Ho(){le&&(le.innerHTML="",_o.forEach(e=>{const n=document.createElement("div");n.className="shortcut-help__row";const t=document.createElement("div");t.className="shortcut-help__keys",e.keys.forEach((a,s)=>{if(s>0){const d=document.createElement("span");d.className="shortcut-help__or",d.textContent="or",t.appendChild(d)}const r=document.createElement("div");r.className="shortcut-help__combo",a.forEach((d,p)=>{if(p>0){const v=document.createElement("span");v.className="shortcut-help__sep",v.textContent="+",r.appendChild(v)}const f=document.createElement("kbd");f.className="shortcut-help__key",f.textContent=d,r.appendChild(f)}),t.appendChild(r)});const i=document.createElement("div");i.className="shortcut-help__desc",i.textContent=e.description,n.appendChild(t),n.appendChild(i),le.appendChild(n)}),Ne=!0)}function Vo(){return!!te&&te.hidden===!1}function $o(){if(!te)return;Ne||Ho(),Bt=document.activeElement,te.hidden=!1,te.setAttribute("aria-hidden","false"),document.body.classList.add("shortcut-help-open");const e=te.querySelector(".shortcut-help__panel");e==null||e.focus({preventScroll:!0})}function $i(){if(!te||te.hidden)return;te.hidden=!0,te.setAttribute("aria-hidden","true"),document.body.classList.remove("shortcut-help-open");const e=Bt;e!=null&&e.focus?e.focus({preventScroll:!0}):pe!=null&&pe.focus&&pe.focus({preventScroll:!0})}function Fo(){if(!ve)return;ve.hidden=!1,ve.setAttribute("aria-hidden","false"),document.body.classList.add("shortcut-help-open");const e=ve.querySelector(".shortcut-help__panel");e==null||e.focus({preventScroll:!0})}function Fi(){!ve||ve.hidden||(ve.hidden=!0,ve.setAttribute("aria-hidden","true"),document.body.classList.remove("shortcut-help-open"),ge!=null&&ge.focus&&ge.focus({preventScroll:!0}))}let ji=!1;function Zt(){ji||(ji=!0,requestAnimationFrame(()=>{ji=!1,Ji(),Et()}))}let Qa=!1;function Xa(e){return(e||"").toString().toLowerCase().split(/\s+/).map(n=>n.trim()).filter(Boolean)}function jo(e){const n=Xa(e);if(!n.length){C.querySelectorAll(".tile").forEach(t=>{t.style.opacity=""});return}C.querySelectorAll(".tile").forEach(t=>{var r;const i=(((r=t.querySelector(".name"))==null?void 0:r.textContent)||"").toLowerCase(),a=(t.dataset.id||"").toLowerCase(),s=n.every(d=>i.includes(d)||a.includes(d));t.style.opacity=s?"1":"0.2"})}function qo(e){const n=Xa(e);if(!n.length)return[];const t=[];return S.forEach((i,a)=>{var f;const s=fi(i),r=Je(i)||"",d=`${s} ${r}`.toLowerCase();n.every(v=>d.includes(v))&&t.push({type:"model",modelIndex:a,modelTitle:s,modelId:r}),(Array.isArray((f=i.data)==null?void 0:f.categories)?i.data.categories:[]).forEach(v=>{const A=(v.title||v.id||"").toString();(v.items||[]).forEach(I=>{const x=(I.name||I.id||"").toString(),D=`${x} ${I.id||""} ${A}`.toLowerCase();n.every(ce=>D.includes(ce))&&t.push({type:"item",modelIndex:a,modelTitle:s,modelId:r,itemId:I.id,itemName:x,categoryTitle:A})})})}),t.slice(0,l)}function Ya(e){if(!Q)return;Q.innerHTML="";const n=(e||"").toString();if(!n.trim()){Q.hidden=!0;return}if(!S.length){const i=document.createElement("div");i.className="search-results__empty",i.textContent="Load models to search",Q.appendChild(i),Q.hidden=!1;return}const t=qo(n);if(!t.length){const i=document.createElement("div");i.className="search-results__empty",i.textContent="No matches yet",Q.appendChild(i),Q.hidden=!1;return}t.forEach(i=>{const a=document.createElement("button");a.type="button",a.className="search-result",a.dataset.modelIndex=String(i.modelIndex),i.itemId&&(a.dataset.itemId=i.itemId),i.type&&(a.dataset.type=i.type),i.modelIndex===w&&(!i.itemId||L===i.itemId)&&a.classList.add("is-active");const s=document.createElement("div");s.className="search-result__primary";const r=document.createElement("span");r.textContent=i.type==="model"?i.modelTitle:i.itemName||i.itemId||"Item",s.appendChild(r);const d=document.createElement("span");d.className="search-result__badge",d.textContent=i.type==="item"?i.categoryTitle||"Item":"Model",s.appendChild(d);const p=document.createElement("div");p.className="search-result__meta";const f=document.createElement("span");if(f.textContent=i.modelId?`${i.modelTitle} · ${i.modelId}`:i.modelTitle,p.appendChild(f),i.type==="item"&&i.itemId){const v=document.createElement("span");v.textContent=`Item ID: ${i.itemId}`,p.appendChild(v)}else if(i.type==="model"){const v=document.createElement("span");v.textContent="Matches model title",p.appendChild(v)}a.appendChild(s),a.appendChild(p),Q.appendChild(a)}),Q.hidden=!1}function qi(e){jo(e||""),Ya(e||"")}function Wo(e){!e||!Number.isInteger(e.modelIndex)||(Ze(e.modelIndex),e.itemId&&requestAnimationFrame(()=>{var t;if(w!==e.modelIndex)return;const n=(t=be.get(e.itemId))==null?void 0:t.el;n&&(dn(e.itemId),n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),n.focus({preventScroll:!0}))}))}function Ze(e){if(kn(),Qn(),Ye=null,ie=null,z=null,he=null,e<0||e>=S.length){console.warn("[Blockscape] setActive called with out-of-range index:",e);return}at=!0,w=e,console.log("[Blockscape] active model:",Oe(S[e]),"(index",e+" )"),bi(),Xn(),cn(),rn(),R&&qi(R.value||""),_e.updateAvailability()}function Xn(){if(j.innerHTML="",!S.length){const e=document.createElement("li");e.className="model-nav-empty",e.textContent="No models loaded yet.",j.appendChild(e);return}S.forEach((e,n)=>{var A;const t=document.createElement("li");t.className="model-nav-item";const i=document.createElement("button");i.type="button",i.className="model-nav-button"+(n===w?" is-active":""),i.dataset.index=String(n),i.setAttribute("aria-current",n===w?"true":"false");const a=document.createElement("span");a.className="model-nav-label";const s=document.createElement("span");s.className="model-nav-title",s.textContent=fi(e),a.appendChild(s);const r=Je(e);if(r){const I=document.createElement("span");I.className="model-nav-id",I.textContent=r,a.appendChild(I)}const d=Array.isArray((A=e.data)==null?void 0:A.categories)?e.data.categories:[],p=d.reduce((I,x)=>I+(x.items||[]).length,0),f=document.createElement("span");f.className="model-nav-meta";const v=e.apicurioVersions&&e.apicurioVersions.length>1?` · ${e.apicurioVersions.length} maps`:"";f.textContent=`${d.length} cat · ${p} items${v}`,i.appendChild(a),i.appendChild(f),t.appendChild(i),j.appendChild(t)}),_e.updateAvailability()}function cn(){if(w<0){c.value="",Se&&(Se.disabled=!0);return}const e=S[w];c.value=JSON.stringify(e.data,null,2),Se&&(Se.disabled=!Ui(e))}function Go(e){try{return JSON.parse(e)}catch{return null}}function Jo(e,n="Pasted",t={}){const i=Array.isArray(e)?e:[];if(!i.length)return[];const a=i.map((v,A)=>!v||typeof v!="object"?null:(lt(v,{titleHint:`${n} #${A+1}`}),{obj:v,idx:A})).filter(Boolean);if(!a.length)return[];const s=a[0].obj,{seriesTitleOverride:r}=t;let d=r||s.title||`${n} series`;r&&!s.title&&(s.title=r);const p={id:rt(),title:d,data:s,apicurioVersions:a.map(({obj:v,idx:A})=>({version:String(A+1),data:v})),apicurioActiveVersionIndex:0,isSeries:!0},f=fn(p,{seriesName:d,fallbackTitle:d});return f&&(p.id=f),[p]}function Za(e,n="Pasted",t={}){return Array.isArray(e)?Jo(e,n,t):!e||typeof e!="object"?[]:(lt(e,{titleHint:`${n} #1`}),[{id:rt(),title:e.title||`${n} #1`,data:e}])}function Yn(e,n="Pasted",t={}){const i=(e||"").trim();if(!i)return[];const a=Go(i);if(a){let r=t;if(Array.isArray(a)&&t.promptForSeriesName){const p=Co(a,n),f=So(p);r={...t,promptForSeriesName:!1,seriesTitleOverride:f||p}}const d=Za(a,n,r);if(d.length)return d}return i.split(/^\s*(?:---|%%%)\s*$/m).map(r=>r.trim()).filter(Boolean).map((r,d)=>{const p=JSON.parse(r);return lt(p,{titleHint:`${n} #${d+1}`}),{id:rt(),title:p.title||`${n} #${d+1}`,data:p}})}function zo(e){if(!e)return!1;if(e.isContentEditable)return!0;const n=(e.tagName||"").toLowerCase();return n==="input"||n==="textarea"||n==="select"}function dt(){const e=document.activeElement;return!e||e===document.body||e===document.documentElement?!0:!zo(e)}function Ko(e){if(!e)return!1;const n=e.trimStart();return/^\s*(\{|\[|---|%%%)/.test(n)}function es(){if(typeof window>"u"||!window.localStorage)return null;let e;try{e=localStorage.getItem(Be)}catch(a){return console.warn("[Blockscape] failed to access editor payload",a),null}if(!e)return null;let n;try{n=JSON.parse(e)}catch(a){console.warn("[Blockscape] invalid payload JSON",a);try{localStorage.removeItem(Be)}catch{}return null}if((n==null?void 0:n.source)!=="editor")return null;try{localStorage.removeItem(Be)}catch(a){console.warn("[Blockscape] failed to clear editor payload",a)}if(!n.text||typeof n.text!="string")return console.warn("[Blockscape] payload missing text"),null;let t=[];try{t=Yn(n.text,n.title||"Editor Export")}catch(a){return console.warn("[Blockscape] could not parse payload text",a),null}if(!t.length)return null;let i=null;return t.forEach(a=>{const s=Wn(a,{versionLabel:"editor"});i==null&&(i=s)}),console.log(`[Blockscape] imported ${t.length} model(s) from editor`),{index:i,count:t.length}}function ns(e="storage"){const n=es();return!n||typeof n.index!="number"?!1:(Ze(n.index),console.log(`[Blockscape] imported ${n.count} model(s) from editor via ${e}.`),!0)}function Qo(){const e=window.location.hash||"";let n=null;const t=e.match(/share=([^&]+)/);if(t&&(n=t[1]),!n){const r=new URLSearchParams(window.location.search);r.has("share")&&(n=r.get("share"))}if(!n)return null;let i;try{const r=zs(n);i=JSON.parse(r)}catch(r){return console.warn("[Blockscape] failed to decode share token",r),null}if(!i||typeof i!="object"||i.data==null)return console.warn("[Blockscape] share payload missing data"),null;const a=Za(i.data,i.title||"Shared Model");if(!a.length)return console.warn("[Blockscape] share payload did not contain usable models"),null;let s=null;return a.forEach(r=>{const d=r.isSeries?i.title||r.title:null,p=Wn({...r,apicurioArtifactName:d||r.apicurioArtifactName},{versionLabel:"shared"});s==null&&(s=p)}),s}async function Xo(){const e=window.location.hash||"";let n=null;const t=e.match(/load=([^&]+)/);if(t)try{n=decodeURIComponent(t[1])}catch{n=t[1]}if(!n){const i=new URLSearchParams(window.location.search);i.has("load")&&(n=i.get("load"))}if(!n)return null;try{const i=await Xi(n);return typeof i=="number"?i:null}catch(i){return console.warn("[Blockscape] load param failed",i),null}}function Yo(e){console.log("[Blockscape] parsing model; categories=",((e==null?void 0:e.categories)||[]).length);const n=new Map,t=new Map,i=new Set;(e.categories||[]).forEach(s=>(s.items||[]).forEach(r=>{i.add(r.id);const d=new Set(r.deps||[]);(e.links||[]).forEach(p=>{p.from===r.id&&d.add(p.to)}),n.set(r.id,d),d.forEach(p=>{t.has(p)||t.set(p,new Set),t.get(p).add(r.id)})}));const a=new Set;return t.forEach((s,r)=>{((s==null?void 0:s.size)||0)>=2&&a.add(r)}),{m:e,fwd:n,rev:t,reusedLocal:a,seen:i}}function Zo(e,n){console.log("[Blockscape] generateLetterImage for:",e);const t=document.createElement("canvas"),i=44;t.width=i,t.height=i;const a=t.getContext("2d"),s=(e||"?").charAt(0).toUpperCase(),r=Ka(e,n),d=Ro(r);return a.fillStyle=r,a.beginPath(),a.arc(i/2,i/2,i/2-2,0,2*Math.PI),a.fill(),a.strokeStyle="rgba(0,0,0,0.15)",a.lineWidth=1,a.stroke(),a.fillStyle=d,a.font=`bold ${i*.5}px system-ui, -apple-system, sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(s,i/2,i/2),t.toDataURL("image/png")}function pt(e){var t;if(!((t=e==null?void 0:e.apicurioVersions)!=null&&t.length))return-1;const n=Number.isInteger(e.apicurioActiveVersionIndex)?e.apicurioActiveVersionIndex:0;return Math.min(Math.max(n,0),e.apicurioVersions.length-1)}function ts(e){const n=pt(e);if(n===-1)return null;const t=e.apicurioVersions[n];return(t==null?void 0:t.version)??null}function er(e){const n=new Map;return((e==null?void 0:e.apicurioVersions)||[]).forEach((t,i)=>{var r,d;const a=(((r=t==null?void 0:t.data)==null?void 0:r.id)??"").toString().trim();a&&n.set(a,i);const s=(((d=t==null?void 0:t.data)==null?void 0:d.seriesId)??"").toString().trim();s&&!n.has(s)&&n.set(s,i)}),n}const is=new WeakMap;function nr(e,n){var Ie;if(!((Ie=e==null?void 0:e.apicurioVersions)!=null&&Ie[n]))return null;const t=e.apicurioVersions[n],i=t.data,a=gi(i),s=is.get(t);if(s&&s.fingerprint===a)return s.dataUrl;const r=160,d=90,p=document.createElement("canvas");p.width=r,p.height=d;const f=p.getContext("2d");f.fillStyle="#f8fafc",f.fillRect(0,0,r,d),f.strokeStyle="#e5e7eb",f.strokeRect(.5,.5,r-1,d-1);const v=Array.isArray(i==null?void 0:i.categories)?i.categories:[],A=Math.max(v.length,1),I=r/A,x=8,D=8,ce=4;v.forEach((xe,Le)=>{const In=Le*I+I/2,Me=Array.isArray(xe.items)?xe.items:[],Pe=Math.max(Me.length,1);Me.forEach((xn,ut)=>{const et=x+(ut+.5)*((d-x-D)/Pe);f.beginPath(),f.arc(In,et,ce,0,Math.PI*2);const An=Ka(xn.name||xn.id||"",xn.color);f.fillStyle=An,f.strokeStyle="rgba(15,23,42,0.25)",f.fill(),f.stroke()})});const ye=p.toDataURL("image/png");return is.set(t,{fingerprint:a,dataUrl:ye}),ye}function Wi(e,n){var d;if(Qn(),e<0||e>=S.length)return!1;const t=S[e];if(!((d=t==null?void 0:t.apicurioVersions)!=null&&d.length)||!qa(e))return!1;const a=t.apicurioVersions.length,s=(n%a+a)%a,r=t.apicurioVersions[s];return r!=null&&r.data?(t.apicurioActiveVersionIndex=s,t.data=r.data,at=!0,L=null,ne=null,sn(),cn(),rn(),!0):!1}function Gi(e){var i;if(!e||w<0)return!1;const n=S[w];if(!((i=n==null?void 0:n.apicurioVersions)!=null&&i.length))return!1;const t=pt(n);return t===-1?!1:Wi(w,t+e)}function tr(e,n){if(Qn(),e<0||e>=S.length)return!1;const t=S[e];if(!Array.isArray(t==null?void 0:t.apicurioVersions)||t.apicurioVersions.length<=1)return alert("A series needs at least one map. Add another before removing this one."),!1;if(!qa(e))return!1;const i=Math.min(Math.max(n,0),t.apicurioVersions.length-1),a=pt(t),[s]=t.apicurioVersions.splice(i,1);if(!s)return!1;let r=a;i===a?r=Math.min(i,t.apicurioVersions.length-1):i<a&&(r=Math.max(0,a-1)),t.apicurioActiveVersionIndex=Math.max(0,r);const d=t.apicurioVersions[t.apicurioActiveVersionIndex];return t.data=(d==null?void 0:d.data)||t.data,t.isSeries=t.apicurioVersions.length>1,Ze(e),!0}function ir(e){if(!(e!=null&&e.apicurioVersions)||!e.apicurioVersions.length)return null;const n=document.createElement("div");n.className="version-nav";const t=document.createElement("div");t.className="version-nav__title",t.textContent=e.apicurioArtifactName||e.apicurioArtifactId||Je(e)||"Artifact",t.title="Double-click to rename this series",t.setAttribute("role","button"),t.tabIndex=0,t.addEventListener("dblclick",()=>{var D;const I=S[w];!((D=I==null?void 0:I.apicurioVersions)!=null&&D.length)||!Eo(I)||(Xn(),cn(),rn())}),n.appendChild(t);const i=document.createElement("div");i.className="version-nav__status";const a=pt(e),s=ts(e)||"latest";i.textContent=`No. in series ${s} (${a+1} of ${e.apicurioVersions.length})`,n.appendChild(i);const r=document.createElement("div");r.className="version-nav__controls";const d=document.createElement("button");d.type="button",d.className="version-nav__button",d.textContent="Previous",d.addEventListener("click",()=>Gi(-1));const p=document.createElement("button");p.type="button",p.className="version-nav__button",p.textContent="Next",p.addEventListener("click",()=>Gi(1)),r.appendChild(d),r.appendChild(p),n.appendChild(r);const f=document.createElement("div");f.className="version-nav__thumbs",e.apicurioVersions.forEach((I,x)=>{var In;const D=document.createElement("button");D.type="button",D.className="version-nav__thumb",x===a&&D.classList.add("is-active");const ce=nr(e,x);if(ce){const Me=document.createElement("img");Me.src=ce,Me.alt=`Version ${x+1}`,D.appendChild(Me)}const ye=document.createElement("div");ye.className="version-nav__thumb-label";const Ie=document.createElement("span");Ie.className="version-nav__thumb-label-text";const xe=(((In=I==null?void 0:I.data)==null?void 0:In.id)??(I==null?void 0:I.id)??"").toString().trim(),Le=xe||(I!=null&&I.version?`v${I.version}`:`${x+1}`);if(Ie.textContent=Le,ye.title=xe||Le,ye.appendChild(Ie),D.appendChild(ye),pr(ye,Ie),e.apicurioVersions.length>1){const Me=document.createElement("span");Me.className="version-nav__thumb-remove",Me.title=`Remove ${Le} from this series`,Me.setAttribute("aria-label",`Remove ${Le} from this series`),Me.setAttribute("role","button"),Me.tabIndex=-1,Me.textContent="×",Me.addEventListener("click",Pe=>{Pe.stopPropagation(),Pe.preventDefault(),window.confirm(`Remove ${Le} from this series?`)&&tr(w,x)}),D.appendChild(Me)}D.addEventListener("click",()=>Wi(w,x)),mr(D,I),f.appendChild(D)});const v=document.createElement("button");v.type="button",v.className="version-nav__thumb version-nav__thumb--add",v.title="Create a new version from this map",v.addEventListener("click",()=>{try{const I=Ja({versionLabel:"manual"});Ze(I)}catch(I){alert((I==null?void 0:I.message)||"Unable to create a new version right now.")}});const A=document.createElement("span");return A.className="version-nav__thumb-add-icon",A.textContent="+",v.appendChild(A),f.appendChild(v),n.appendChild(f),n}function St(){var _s,Is,xs;if(!H)return;Gn(),Array.isArray(H.m.categories)||(H.m.categories=[]),console.log("[Blockscape] rendering categories=",H.m.categories.length),console.log("[Blockscape] model.m has abstract?",!!H.m.abstract,"- value:",H.m.abstract?H.m.abstract.substring(0,50)+"...":"none"),C.innerHTML="",be.clear(),Ke.clear(),zn=[],hi(S[w],{versionLabel:"1"});const e=ir(S[w]);e&&C.appendChild(e),k.setAttribute("width",window.innerWidth),k.setAttribute("height",window.innerHeight);const n=document.createElement("div");n.className="blockscape-model-meta";const t=document.createElement("div");t.className="blockscape-model-title",t.textContent=H.m.title&&H.m.title.trim()||Oe(S[w]),n.appendChild(t),((_s=S[w])!=null&&_s.isSeries||(xs=(Is=S[w])==null?void 0:Is.apicurioVersions)!=null&&xs.length)&&fn(S[w],{seriesName:S[w].title||H.m.title||Oe(S[w])});const i=ts(S[w]),a=Nt(S[w]),s=(H.m.id??"").toString().trim(),r=document.createElement("div");r.className="blockscape-model-meta__details";const d=(b,K)=>{if(!K)return;const O=document.createElement("div");O.className="blockscape-model-id";const Ce=document.createElement("span");Ce.className="blockscape-model-id__label",Ce.textContent=b;const Qe=document.createElement("span");Qe.className="blockscape-model-id__value",Qe.textContent=K,O.append(Ce,Qe),r.appendChild(O)};d("Series ID",a),d("Model ID",s),d("No. in series",i),r.childElementCount&&n.appendChild(r),C.appendChild(n);const p=document.createElement("div");p.className="blockscape-tabs";const f=document.createElement("div");f.className="blockscape-tablist",f.setAttribute("role","tablist"),p.appendChild(f);const v=document.createElement("div");v.className="blockscape-tabpanels",p.appendChild(v);const A=document.createElement("div"),I=document.createElement("div"),x=document.createElement("div"),D=document.createElement("div");let ce="";const ye=er(S[w]),Ie=pt(S[w]);jn=null,wt="";const xe=[{id:"map",label:"Map",panel:A},{id:"abstract",label:"Info",panel:I},{id:"source",label:"Settings",panel:x},{id:"apicurio",label:"Apicurio",panel:D}],Le=typeof _e.isEnabled=="function"?_e.isEnabled():!1,In=b=>{if(!k)return;const K=b==="map";k.hidden=!K,K?(Ji(),Et()):k.innerHTML=""};xe.forEach((b,K)=>{const O=document.createElement("button");O.type="button",O.id=`tab-${b.id}`,O.className="blockscape-tab"+(K===0?" is-active":""),O.setAttribute("role","tab"),O.setAttribute("aria-controls",`panel-${b.id}`),O.setAttribute("aria-selected",K===0?"true":"false"),O.textContent=b.label,b.id==="apicurio"&&!Le&&(O.hidden=!0,O.tabIndex=-1,O.setAttribute("aria-hidden","true"),O.style.display="none"),b.button=O,f.appendChild(O),b.panel.id=`panel-${b.id}`,b.panel.classList.add("blockscape-tabpanel"),b.panel.setAttribute("role","tabpanel"),b.panel.setAttribute("aria-labelledby",O.id),b.panel.hidden=K!==0,K===0&&b.panel.classList.add("is-active"),v.appendChild(b.panel)});const Me=b=>{On=b,xe.forEach(K=>{const O=K.id===b;K.button.classList.toggle("is-active",O),K.button.setAttribute("aria-selected",O?"true":"false"),K.panel.classList.toggle("is-active",O),K.panel.hidden=!O}),In(b)},Pe=xe.find(b=>b.id==="apicurio"),xn=b=>{if(!Pe||!Pe.button||!Pe.panel)return;const K=!!b;if(Pe.button.hidden=!K,Pe.button.tabIndex=K?0:-1,Pe.button.setAttribute("aria-hidden",K?"false":"true"),Pe.button.style.display=K?"":"none",K){const O=On==="apicurio";Pe.button.classList.toggle("is-active",O),Pe.button.setAttribute("aria-selected",O?"true":"false"),Pe.panel.classList.toggle("is-active",O),Pe.panel.hidden=!O}else{const O=Pe.panel.classList.contains("is-active");if(Pe.button.classList.remove("is-active"),Pe.button.setAttribute("aria-selected","false"),Pe.panel.classList.remove("is-active"),Pe.panel.hidden=!0,O){const Ce=xe.find(Qe=>Qe.id!=="apicurio");Ce&&Me(Ce.id)}}Dt&&(Dt.checked=K)};xe.forEach(b=>{b.button.addEventListener("click",()=>{Gn(),Me(b.id)}),b.id==="abstract"&&(jn=b.button,b.button.addEventListener("mouseenter",()=>ti(b.button,ce,{offset:12})),b.button.addEventListener("mouseleave",Gn),b.button.addEventListener("focus",()=>ti(b.button,ce,{offset:12})),b.button.addEventListener("blur",Gn))});const et=(b=>{const K=xe.find(Ce=>Ce.id===On);if(K&&(K.id!=="apicurio"||b))return K.id;const O=xe.find(Ce=>Ce.id!=="apicurio"||b);return(O==null?void 0:O.id)||xe[0].id})(Le);Me(et),xn(Le),typeof _e.onEnabledChange=="function"&&_e.onEnabledChange(xn),C.appendChild(p);const An=document.createElement("div");An.className="blockscape-render",A.appendChild(An);const $n=document.createElement("div");if($n.className="blockscape-abstract-panel",H.m.abstract){console.log("[Blockscape] Rendering abstract content");const b=document.createElement("div");b.className="blockscape-abstract",b.innerHTML=H.m.abstract,Fr(b),$n.appendChild(b),ce=b.outerHTML}else{console.log("[Blockscape] No abstract found in model.m");const b=document.createElement("div");b.className="blockscape-abstract-placeholder",b.textContent="No abstract has been provided for this model.",$n.appendChild(b),ce=b.outerHTML}wt=ce,I.appendChild($n);const Sn=document.createElement("div");Sn.className="blockscape-source-panel";const ze=document.createElement("div");ze.className="blockscape-settings-panel";const xt=document.createElement("p");xt.className="blockscape-settings-panel__title",xt.textContent="Feature toggles",ze.appendChild(xt);const Tn=({id:b,label:K,hint:O,checked:Ce,className:Qe="",onChange:Ee})=>{const Bn=document.createElement("label");Bn.className=["settings-toggle",Qe].filter(Boolean).join(" ");const Dn=document.createElement("input");Dn.type="checkbox",Dn.id=b,Dn.checked=Ce;const gt=document.createElement("span");gt.className="settings-toggle__text";const tt=document.createElement("span");if(tt.className="settings-toggle__label",tt.textContent=K,gt.appendChild(tt),O){const oi=document.createElement("span");oi.className="settings-toggle__hint",oi.textContent=O,gt.appendChild(oi)}return Bn.appendChild(Dn),Bn.appendChild(gt),typeof Ee=="function"&&Dn.addEventListener("change",()=>Ee(Dn.checked)),{row:Bn,input:Dn}},mt=()=>{C.querySelectorAll(".tile").forEach(b=>{const K=b.dataset.id,O=Ga(K);if(!(O!=null&&O.item))return;const Ce=ls(O.item.external),Qe=rs(O.item,{externalMeta:Ce,seriesIdLookup:ye});cs(b,Qe)})},{row:ai}=Tn({id:"toggleSecondaryLinks",label:"Show indirect links",checked:pn,className:"map-controls__toggle",onChange:b=>{pn=b,L?dn(L):(Ki(),Et())}});ze.appendChild(ai);const{row:Gr}=Tn({id:"toggleReusedInMap",label:"Display reused in map view",hint:"Show markers for nodes used multiple times.",checked:hn,className:"map-controls__toggle",onChange:b=>{hn=b,ss()}});ze.appendChild(Gr);const bs=[],{row:Jr}=Tn({id:"toggleObsidianLinks",label:"Obsidian",hint:"Make tiles open Obsidian when no external URL exists.",checked:Vt,className:"map-controls__toggle",onChange:b=>{const K=Xt(b);vo(K),bs.forEach(O=>{O.disabled=!K}),mt()}});ze.appendChild(Jr);const Yi=document.createElement("div");Yi.className="settings-radio";const Zi=document.createElement("div");Zi.className="settings-radio__label",Zi.textContent="Obsidian link format";const ea=document.createElement("div");ea.className="settings-radio__hint",ea.textContent="Use the tile title or id when building Obsidian links.";const na=document.createElement("div");na.className="settings-radio__options";const vs=(b,K)=>{const O=document.createElement("label");O.className="settings-radio__option";const Ce=document.createElement("input");Ce.type="radio",Ce.name="obsidianLinkMode",Ce.value=b,Ce.checked=ui===b,Ce.disabled=!Vt,Ce.addEventListener("change",()=>{if(!Ce.checked)return;const Ee=Qt(b);ho(Ee),mt()});const Qe=document.createElement("span");Qe.textContent=K,O.append(Ce,Qe),bs.push(Ce),na.appendChild(O)};vs(_n,"Use title"),vs(ln,"Use id"),Yi.append(Zi,na,ea),ze.appendChild(Yi);const ki=document.createElement("label");ki.className="settings-text",ki.setAttribute("for","obsidianVaultInput");const ta=document.createElement("div");ta.className="settings-text__text";const ia=document.createElement("span");ia.className="settings-text__label",ia.textContent="Obsidian vault";const aa=document.createElement("span");aa.className="settings-text__hint",aa.textContent="Optional. Set the vault name to avoid duplicates.",ta.append(ia,aa);const nt=document.createElement("input");nt.type="text",nt.id="obsidianVaultInput",nt.className="settings-text__input",nt.placeholder="Vault name",nt.value=$t,nt.addEventListener("input",()=>{const b=Yt(nt.value);wo(b),mt()}),ki.append(ta,nt),ze.appendChild(ki);const sa=document.createElement("p");sa.className="settings-note",sa.innerHTML='Requires the Obsidian <a href="https://vinzent03.github.io/obsidian-advanced-uri/" target="_blank" rel="noreferrer noopener">Advanced URI</a> plugin for create/open behavior.',ze.appendChild(sa);const ys=b=>`${(b/1e3).toFixed(1)}s`,Si=document.createElement("label");Si.className="settings-slider",Si.setAttribute("for","seriesNavDoubleClickWait");const oa=document.createElement("div");oa.className="settings-slider__text";const ra=document.createElement("span");ra.className="settings-slider__label",ra.textContent="Series double-click wait";const la=document.createElement("span");la.className="settings-slider__hint",la.textContent="Time window to double-click into another map version.",oa.append(ra,la);const Ci=document.createElement("span");Ci.className="settings-slider__value",Ci.textContent=ys(Kn);const Ln=document.createElement("input");Ln.type="range",Ln.id="seriesNavDoubleClickWait",Ln.className="settings-slider__input",Ln.min=String(Ha),Ln.max=String(Va),Ln.step="50",Ln.value=String(Kn),Ln.setAttribute("aria-label","Adjust double-click wait for series navigation"),Ln.addEventListener("input",()=>{const b=Kt(parseInt(Ln.value,10));Ci.textContent=ys(b),mo(b)}),Si.append(oa,Ci,Ln),ze.appendChild(Si);const ws=b=>`${Math.round((b-1)*100)}%`,Ei=document.createElement("label");Ei.className="settings-slider",Ei.setAttribute("for","hoverScaleSlider");const ca=document.createElement("div");ca.className="settings-slider__text";const da=document.createElement("span");da.className="settings-slider__label",da.textContent="Hover zoom";const pa=document.createElement("span");pa.className="settings-slider__hint",pa.textContent="Expand tiles on hover to see more detail.",ca.append(da,pa);const _i=document.createElement("span");_i.className="settings-slider__value",_i.textContent=ws(Hn);const Nn=document.createElement("input");Nn.type="range",Nn.id="hoverScaleSlider",Nn.className="settings-slider__input",Nn.min=String(h),Nn.max=String(M),Nn.step="0.1",Nn.value=String(Hn),Nn.setAttribute("aria-label","Adjust hover zoom"),Nn.addEventListener("input",()=>{const b=qt(parseFloat(Nn.value));_i.textContent=ws(b),no(b),L&&Zt()}),Ei.append(ca,_i,Nn),ze.appendChild(Ei);const ks=b=>b===1?"Default":`${Math.round(b*100)}%`,Ii=document.createElement("label");Ii.className="settings-slider",Ii.setAttribute("for","tileCompactnessSlider");const ua=document.createElement("div");ua.className="settings-slider__text";const ma=document.createElement("span");ma.className="settings-slider__label",ma.textContent="Tile compactness";const ga=document.createElement("span");ga.className="settings-slider__hint",ga.textContent="Adjust padding, gap, and logo size for tiles.",ua.append(ma,ga);const xi=document.createElement("span");xi.className="settings-slider__value",xi.textContent=ks(kt);const Mn=document.createElement("input");Mn.type="range",Mn.id="tileCompactnessSlider",Mn.className="settings-slider__input",Mn.min=String(Fe),Mn.max=String(wn),Mn.step="0.05",Mn.value=String(kt),Mn.setAttribute("aria-label","Adjust tile compactness"),Mn.addEventListener("input",()=>{const b=Wt(parseFloat(Mn.value));xi.textContent=ks(b),io(b),L&&Zt()}),Ii.append(ua,xi,Mn),ze.appendChild(Ii);const{row:zr}=Tn({id:"titleWrapToggle",label:"Wrap titles",hint:"Allow long titles to wrap instead of truncating.",checked:Oa!=="nowrap",className:"map-controls__toggle",onChange:b=>{const K=b?"wrap":"nowrap";zt(K),co(K)}});ze.appendChild(zr);const Ss=b=>`${Math.round((b-1)*100)}% extra`,Ai=document.createElement("label");Ai.className="settings-slider",Ai.setAttribute("for","titleHoverWidthSlider");const fa=document.createElement("div");fa.className="settings-slider__text";const ha=document.createElement("span");ha.className="settings-slider__label",ha.textContent="Title width on hover";const ba=document.createElement("span");ba.className="settings-slider__hint",ba.textContent="Give titles more room horizontally when zoomed.",fa.append(ha,ba);const Ti=document.createElement("span");Ti.className="settings-slider__value",Ti.textContent=Ss(Ut);const Pn=document.createElement("input");Pn.type="range",Pn.id="titleHoverWidthSlider",Pn.className="settings-slider__input",Pn.min=String(ke),Pn.max=String($e),Pn.step="0.05",Pn.value=String(Ut),Pn.setAttribute("aria-label","Adjust title width boost on hover"),Pn.addEventListener("input",()=>{const b=Gt(parseFloat(Pn.value));Ti.textContent=Ss(b),so(b)}),Ai.append(fa,Ti,Pn),ze.appendChild(Ai);const Cs=b=>`${Math.round(b*100)}% of hover zoom`,Li=document.createElement("label");Li.className="settings-slider",Li.setAttribute("for","titleZoomPortionSlider");const va=document.createElement("div");va.className="settings-slider__text";const ya=document.createElement("span");ya.className="settings-slider__label",ya.textContent="Title zoom influence";const wa=document.createElement("span");wa.className="settings-slider__hint",wa.textContent="How much the title scales relative to tile hover zoom.",va.append(ya,wa);const Ni=document.createElement("span");Ni.className="settings-slider__value",Ni.textContent=Cs(Ht);const Rn=document.createElement("input");Rn.type="range",Rn.id="titleZoomPortionSlider",Rn.className="settings-slider__input",Rn.min=String(mn),Rn.max=String(gn),Rn.step="0.05",Rn.value=String(Ht),Rn.setAttribute("aria-label","Adjust how much titles scale on hover"),Rn.addEventListener("input",()=>{const b=Jt(parseFloat(Rn.value));Ni.textContent=Cs(b),ro(b)}),Li.append(va,Ni,Rn),ze.appendChild(Li);const Kr=typeof _e.isEnabled=="function"?_e.isEnabled():!1,{row:Qr,input:Xr}=Tn({id:"apicurioFeatureToggle",label:"Apicurio",hint:"Show the Apicurio registry tab when enabled.",checked:Kr,className:"apicurio-toggle",onChange:b=>{typeof _e.setEnabled=="function"&&_e.setEnabled(b)}});if(Dt=Xr,ze.appendChild(Qr),Sn.appendChild(ze),g)g.hidden=!1,g.classList.remove("pf-v5-c-page__main-section"),Sn.appendChild(g);else{const b=document.createElement("p");b.className="muted",b.textContent="Source editor unavailable.",Sn.appendChild(b)}x.appendChild(Sn),_e.mount(D);let Es=0;H.m.categories.forEach(b=>{const K=document.createElement("section");K.className="category",K.dataset.cat=b.id;const O=document.createElement("div");O.className="cat-head",O.dataset.cat=b.id,O.tabIndex=0,O.title="Select category",O.innerHTML=`<div class="cat-title">${_t(b.title||b.id)}</div>
                          <div class="muted cat-count">${(b.items||[]).length} items</div>`,O.addEventListener("click",()=>Vn(b.id)),O.addEventListener("keydown",Ee=>{(Ee.key==="Enter"||Ee.key===" ")&&(Ee.preventDefault(),Vn(b.id))}),O.addEventListener("focus",()=>Vn(b.id,{scrollIntoView:!1})),K.appendChild(O);const Ce=document.createElement("div");Ce.className="grid",K.appendChild(Ce),(b.items||[]).forEach(Ee=>{Es+=1;const Bn=ls(Ee.external),Dn=rs(Ee,{externalMeta:Bn,seriesIdLookup:ye}),gt=ja(Ee.id,{excludeIndex:w}),tt=S[w],oi=tt&&(tt.data&&tt.data.id==="network"||Je(tt)==="network"),Ue=document.createElement("div");if(Ue.className=Bn.isExternal?"tile external":"tile",Ue.tabIndex=0,Ue.dataset.id=Ee.id,Ue.dataset.globalIndex=String(Es),Bn.url&&(Ue.dataset.externalUrl=Bn.url),ye.has(Ee.id)){const ri=ye.get(Ee.id);Ue.dataset.seriesVersionIndex=String(ri),Ue.classList.add("tile--series-link");const Yr=ri===Ie?"Current map in this series":`Open version ${ri+1} in this series`;Ue.title=Yr}oi&&gt!==-1&&(Ue.dataset.modelIndex=String(gt),Ue.classList.add("tile--model-link"),Ue.title||(Ue.title="Open map from portfolio")),Dn&&(Ue.dataset.obsidianUrl=Dn);const ft=document.createElement("img");ft.className="logo",Ee.logo?(ft.src=Ee.logo,ft.alt=Ee.name||Ee.id):(ft.alt="",ft.style.opacity=1,ft.src=Zo(Ee.name||Ee.id,Ee.color));const ka=document.createElement("div");ka.className="name",ka.textContent=Ee.name||Ee.id;const Sa=document.createElement("div");Sa.className="tile-id",Sa.textContent=Ee.id||"";const Ca=document.createElement("div");Ca.className="badge",Ca.textContent="reused";const At=document.createElement("button");At.type="button",At.className="tile-delete",At.setAttribute("aria-label",`Delete ${Ee.name||Ee.id}`),At.textContent="×",At.addEventListener("click",ri=>{ri.stopPropagation(),Dr(Ee.id)}),Bn.url&&Ue.appendChild(dr(Bn.url)),cs(Ue,Dn),Ue.appendChild(At),Ue.appendChild(ft),Ue.appendChild(ka),Ue.appendChild(Sa),Ue.appendChild(Ca),Ce.appendChild(Ue),be.set(Ee.id,{el:Ue,catId:b.id,rect:null})}),An.appendChild(K),Ke.set(b.id,{el:K,headEl:O});const Qe=document.createElement("button");Qe.type="button",Qe.className="tile-add",Qe.innerHTML='<span class="tile-add__icon" aria-hidden="true">+</span><span class="tile-add__label"></span>',Qe.addEventListener("click",()=>Er(b.id)),Ce.appendChild(Qe)});const si=document.createElement("button");si.type="button",si.className="category-add",si.innerHTML='<span class="category-add__icon" aria-hidden="true">+</span><span class="category-add__label">Add category</span><span class="category-add__hint">(Insert)</span>',si.addEventListener("click",()=>ms()),An.appendChild(si),ss(),ar(),Ji(),Et(),Ct(),gr()}function ar(){C.querySelectorAll(".tile").forEach(e=>{e.addEventListener("click",t=>{var x;if(typeof t.button=="number"&&t.button!==0)return;kn();const i=e.dataset.id,a=e.dataset.seriesVersionIndex!=null?parseInt(e.dataset.seriesVersionIndex,10):null,s=e.dataset.modelIndex!=null?parseInt(e.dataset.modelIndex,10):ja(i,{excludeIndex:w}),r=e.dataset.globalIndex!=null?parseInt(e.dataset.globalIndex,10):null,d=S[w],p=d?pt(d):-1,f=((x=d==null?void 0:d.apicurioVersions)==null?void 0:x.length)>1&&Number.isInteger(a)&&a!==p,v=Fn&&Fn.id===i&&Fn.targetVersionIndex===a,A=s!==-1&&d&&(d.data&&d.data.id==="network"||Je(d)==="network"),I=Un&&Un.id===i&&Un.targetModelIndex===s;if(Fn&&!v&&Qn(),Un&&!I&&Qn(),f)if(v){if(Qn(),Wi(w,a))return}else Oo(i,a,d);else if(A){if(I){Qn(),Ze(s);return}Uo(i,s,S[s])}else Number.isInteger(r)&&r>0&&r%5===0&&vi("Use arrow keys to move between blocks. Shift arrow to move block.");if(console.log("[Blockscape] click",i),L===i&&!(f&&v)){ni();return}dn(i)}),e.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),e.click())});const n=()=>{L&&Zt()};e.addEventListener("pointerenter",n),e.addEventListener("pointerleave",n),e.addEventListener("focus",n),e.addEventListener("blur",n),e.draggable=!0,e.addEventListener("dragstart",vr),e.addEventListener("dragend",yr)}),C.querySelectorAll(".grid").forEach(e=>{e.addEventListener("dragover",wr),e.addEventListener("drop",Cr),e.addEventListener("dragenter",kr),e.addEventListener("dragleave",Sr)}),Qa||(Qa=!0,window.addEventListener("resize",Zt),window.addEventListener("scroll",Zt,{passive:!0}),window.addEventListener("resize",ds)),document.getElementById("clear").onclick=()=>ni()}function Ji(){be.forEach(e=>{e.rect=e.el.getBoundingClientRect()})}function as(e,{includeSecondary:n=pn}={}){if(!e||!H)return{deps:new Set,revs:new Set,secondaryDeps:new Set,secondaryRevs:new Set,edges:[]};const t=new Set(H.fwd.get(e)||[]),i=new Set(H.rev.get(e)||[]),a=new Set,s=new Set,r=[],d=new Set,p=(f,v,A,I)=>{if(!f||!v)return;const x=`${f}->${v}:${A}:${I}`;d.has(x)||(d.add(x),r.push({from:f,to:v,type:A,depth:I}))};return t.forEach(f=>p(e,f,"dep",1)),i.forEach(f=>p(e,f,"revdep",1)),n&&new Set([...t,...i]).forEach(v=>{(H.fwd.get(v)||new Set).forEach(x=>{const D=x===e;D||a.add(x),D||p(v,x,"dep",2)}),(H.rev.get(v)||new Set).forEach(x=>{const D=x===e;D||s.add(x),D||p(v,x,"revdep",2)})}),{deps:t,revs:i,secondaryDeps:a,secondaryRevs:s,edges:r}}function yi(e,n){const t=be.get(e);t&&t.el.classList.add(n)}function dn(e){var d,p,f;if(!e)return;z=null,L=e,he=null,ne=as(e),sn(),Ki(),Ct();const{deps:n,revs:t,secondaryDeps:i,secondaryRevs:a}=ne;console.log("[Blockscape] selecting id=",e,"deps=",Array.from(n),"revs=",Array.from(t));const s=be.get(e);s&&s.el.classList.add("selected"),n.forEach(v=>yi(v,"dep")),t.forEach(v=>yi(v,"revdep")),i.forEach(v=>{!n.has(v)&&v!==e&&yi(v,"dep-indirect")}),a.forEach(v=>{!t.has(v)&&!n.has(v)&&v!==e&&yi(v,"revdep-indirect")}),Et();const r=(f=(p=(d=be.get(e))==null?void 0:d.el)==null?void 0:p.dataset)==null?void 0:f.externalUrl;r&&vi("This item has link to",pi,r)}function Vn(e,{scrollIntoView:n=!0,preserveEntryHint:t=!1}={}){var r,d;if(!((r=H==null?void 0:H.m)!=null&&r.categories)||!e)return!1;const a=(H.m.categories||[]).find(p=>p.id===e);if(!a)return!1;kn(),zi(),t||(he=null),z=a.id,sn(),Ct();const s=Ke.get(a.id);return n&&(s!=null&&s.el)&&(s.el.scrollIntoView({behavior:"smooth",block:"center"}),(d=s.headEl)==null||d.focus({preventScroll:!0})),!0}function Ct(){if(Ke.forEach(({el:n,headEl:t})=>{n.classList.remove("category--selected"),t&&t.removeAttribute("aria-current")}),!z)return;const e=Ke.get(z);if(!(e!=null&&e.el)){z=null,he=null,sn();return}e.el.classList.add("category--selected"),e.headEl&&e.headEl.setAttribute("aria-current","true")}function ei(){if(z)return z;const e=L?be.get(L):null;return e!=null&&e.catId?e.catId:null}function sr(e){var s,r,d,p;if(!((r=(s=H==null?void 0:H.m)==null?void 0:s.categories)!=null&&r.length)||!e)return!1;const n=H.m.categories,t=ei();let i=n.findIndex(f=>f.id===t);if(i===-1){const f=((d=n.find(v=>(v.items||[]).length))==null?void 0:d.id)||((p=n[0])==null?void 0:p.id);return f?Vn(f):!1}const a=i+e;return a<0||a>=n.length?!1:Vn(n[a].id)}function zi(){L=null,ne=null,Ki(),Et()}function or(){z=null,he=null,Ct()}function ni(){zi(),or(),he=null,sn()}function Ki(){C.querySelectorAll(".tile").forEach(e=>e.classList.remove("dep","revdep","dep-indirect","revdep-indirect","selected"))}function ss(){H!=null&&H.reusedLocal&&H.reusedLocal.forEach(e=>{const n=be.get(e);if(!n)return;n.el.classList.toggle("reused",hn);const t=n.el.querySelector(".badge");t&&(t.style.display=hn?"inline-block":"none")})}function Et(){for(;k.firstChild;)k.removeChild(k.firstChild);if(!L||k.hidden)return;ne=as(L),ne.edges.forEach(n=>{var A,I;const t=(A=be.get(n.from))==null?void 0:A.rect,i=(I=be.get(n.to))==null?void 0:I.rect;if(!t||!i)return;const a=os(t),s=os(i),r=document.createElementNS("http://www.w3.org/2000/svg","path"),d=(a.x+s.x)/2,p=a.y,f=(a.x+s.x)/2,v=s.y;r.setAttribute("d",`M ${a.x},${a.y} C ${d},${p} ${f},${v} ${s.x},${s.y}`),r.setAttribute("fill","none"),r.setAttribute("stroke",n.type==="dep"?"var(--blockscape-dep)":"var(--blockscape-revdep)"),r.setAttribute("stroke-opacity",n.depth===1?"0.45":"0.22"),r.setAttribute("stroke-width",n.depth===1?"2":"1.5"),n.depth>1&&r.setAttribute("stroke-dasharray","4 3"),r.setAttribute("vector-effect","non-scaling-stroke"),k.appendChild(r)})}function os(e){return{x:e.left+e.width/2,y:e.top+e.height/2}}function _t(e){return e.replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n])}function rr(e){const n=(e??"").toString().trim();if(!n)return"";const t=n.endsWith(".md")?n:`${n}.md`,i=new URLSearchParams;return i.set("filepath",t),i.set("data"," "),i.set("mode","append"),$t&&i.set("vault",$t),`obsidian://advanced-uri?${i.toString()}`}function lr(e){return e?ui===ln?e.id??e.name??"":e.name??e.id??"":""}function rs(e,{externalMeta:n,seriesIdLookup:t}={}){var a;if(!Vt||!e||(a=t==null?void 0:t.has)!=null&&a.call(t,e.id))return"";const i=lr(e);return rr(i)}function ls(e){if(typeof e=="string"){const n=e.trim();if(!n)return{isExternal:!1,url:""};try{const t=new URL(n);return/^https?:/i.test(t.protocol)?{isExternal:!0,url:t.toString()}:{isExternal:!1,url:""}}catch(t){return console.warn("[Blockscape] invalid external url skipped",e,t),{isExternal:!1,url:""}}}return e===!0?{isExternal:!0,url:""}:{isExternal:!1,url:""}}function cr(e){const n=document.createElement("button");return n.type="button",n.className="external-link obsidian-link",n.setAttribute("aria-label","Open in Obsidian"),n.title=e,n.textContent="O",n.addEventListener("click",t=>{t.stopPropagation(),window.open(e,"_blank","noopener")}),n.addEventListener("keydown",t=>t.stopPropagation()),n}function dr(e){const n=document.createElement("button");return n.type="button",n.className="external-link",n.setAttribute("aria-label","Open external reference in a new tab"),n.title=e,n.textContent="↗",n.addEventListener("click",t=>{t.stopPropagation(),window.open(e,"_blank","noopener")}),n.addEventListener("keydown",t=>t.stopPropagation()),n}function cs(e,n){if(!e)return;const t=e.querySelector(".obsidian-link");if(!n){t&&t.remove(),e.removeAttribute("data-obsidian-url");return}if(e.dataset.obsidianUrl=n,t){t.title=n;return}e.appendChild(cr(n))}function ds(){Ot||(Ot=requestAnimationFrame(()=>{Ot=null,zn=zn.filter(({labelEl:e,textEl:n})=>(e==null?void 0:e.isConnected)&&(n==null?void 0:n.isConnected)),zn.forEach(({labelEl:e,textEl:n})=>{const t=Math.max(n.scrollWidth-e.clientWidth,0);if(t>4){const i=Math.max(4,Math.min(14,4+t/30));e.classList.add("version-nav__thumb-label--scroll"),n.style.setProperty("--marquee-distance",`${t}px`),n.style.setProperty("--marquee-duration",`${i}s`)}else e.classList.remove("version-nav__thumb-label--scroll"),n.style.removeProperty("--marquee-distance"),n.style.removeProperty("--marquee-duration")})}))}function pr(e,n){!e||!n||(zn.push({labelEl:e,textEl:n}),ds())}function ur(e,n){var s,r;const t=[`<div class="version-nav__tooltip-title">${_t(n)}</div>`],i=((e==null?void 0:e.version)??((s=e==null?void 0:e.data)==null?void 0:s.version)??"").toString().trim();i&&t.push(`<div class="version-nav__tooltip-meta">Version ${_t(i)}</div>`);const a=(((r=e==null?void 0:e.data)==null?void 0:r.abstract)??"").toString().trim();return a?t.push(`<div class="version-nav__tooltip-body">${a}</div>`):t.push('<div class="version-nav__tooltip-body muted">No info available for this version.</div>'),t.join("")}function ti(e,n,{offset:t=8}={}){!N||!e||!n||(N.innerHTML=n,N.hidden=!1,N.setAttribute("aria-hidden","false"),requestAnimationFrame(()=>{const i=e.getBoundingClientRect(),a=N.getBoundingClientRect(),s=window.scrollX||document.documentElement.scrollLeft,r=window.scrollY||document.documentElement.scrollTop;let d=i.left+i.width/2-a.width/2+s,p=i.top-a.height-t+r;d<s+t&&(d=s+t);const f=s+window.innerWidth-a.width-t;d>f&&(d=f),p<r+t&&(p=i.bottom+t+r),N.style.left=`${d}px`,N.style.top=`${p}px`,N.classList.add("is-visible")}))}function Gn(){yt&&(clearTimeout(yt),yt=null),N&&(N.classList.remove("is-visible"),N.setAttribute("aria-hidden","true"),N.hidden=!0)}function mr(e,n){if(!e)return;const t=Oe((n==null?void 0:n.data)||n,"Series version");e.title=t,e.setAttribute("aria-label",t);const i=ur(n,t);let a=null;const s=()=>{a&&(clearTimeout(a),a=null)},r=()=>{ot=e,ti(e,`<div class="version-nav__tooltip-title">${_t(t)}</div>`,{offset:10})},d=()=>{s(),a=setTimeout(()=>{ot===e&&ti(e,i,{offset:10})},u)},p=()=>{r(),d()},f=()=>{ot!==e&&r(),d()},v=()=>{s(),ot===e&&(ot=null,Gn())};e.addEventListener("mouseenter",p),e.addEventListener("focus",p),e.addEventListener("pointermove",f),e.addEventListener("mouseleave",v),e.addEventListener("blur",v),e.addEventListener("click",v)}function gr(){at&&(at=!1,!(!jn||!wt)&&(Gn(),ti(jn,wt,{offset:12}),yt=setTimeout(()=>{Gn(),fr()},1e3)))}function fr(){jn&&(st&&(clearTimeout(st),st=null),jn.classList.add("blockscape-tab--twinkle"),st=setTimeout(()=>{jn.classList.remove("blockscape-tab--twinkle"),st=null},1400))}window.addEventListener("scroll",Gn,!0),window.addEventListener("resize",Gn);function kn(){m&&(m.classList.remove("is-visible","item-preview--has-frame","item-preview--expanded"),m.setAttribute("aria-hidden","true"),m.hidden=!0,ps([]))}function hr(e,n){m&&(De={x:e,y:n},m.hidden=!1,m.setAttribute("aria-hidden","false"),m.classList.add("is-visible"),It(e,n))}function It(e,n){if(!m)return;const t=12;m.style.left=`${e+t}px`,m.style.top=`${n+t}px`;const i=m.getBoundingClientRect();let a=i.left,s=i.top;i.right>window.innerWidth-t&&(a=Math.max(t,window.innerWidth-i.width-t)),i.bottom>window.innerHeight-t&&(s=Math.max(t,window.innerHeight-i.height-t)),m.style.left=`${a}px`,m.style.top=`${s}px`}function ps(e=[]){me&&(me.innerHTML="",e.forEach(n=>{const t=document.createElement("button");t.type="button",t.className="item-preview__action",t.textContent=n.label||"Action",n.title&&(t.title=n.title),t.addEventListener("click",i=>{i.stopPropagation(),typeof n.onClick=="function"&&n.onClick(i)}),me.appendChild(t)}),me.hidden=e.length===0)}async function br(e,n){var v;if(!m)return;e.stopPropagation(),e.preventDefault();const t=n.dataset.id,i=((v=n.querySelector(".name"))==null?void 0:v.textContent)||t||"Preview",a=t?`${t}.html`:"",s=a?`items/${a}`:"",r=++un,d=n.dataset.externalUrl||"",p=n.dataset.obsidianUrl||"",f=[{label:"Edit",title:"Edit this item",onClick:()=>{kn(),ct.open(t)}}];if(d&&f.push({label:"Open link ↗",title:d,onClick:()=>window.open(d,"_blank","noopener")}),p&&f.push({label:"Open in Obsidian",title:p,onClick:()=>window.open(p,"_blank","noopener")}),ps(f),t&&dn(t),J.textContent=i,de.innerHTML='<div class="item-preview__status">Loading…</div>',m.classList.remove("item-preview--has-frame"),m.classList.add("item-preview--expanded"),hr(e.clientX,e.clientY),!s){de.innerHTML='<div class="item-preview__status">Preview unavailable for this item.</div>',It(De.x,De.y);return}try{const A=await fetch(s,{cache:"no-cache"});if(!A.ok)throw new Error(`HTTP ${A.status}`);const I=await A.text();if(r!==un)return;if(!I.trim()){de.innerHTML=`<div class="item-preview__status">No content in <code>${_t(a)}</code>.</div>`,It(De.x,De.y);return}const D=document.createElement("iframe");D.className="item-preview__frame",D.title=`${i} details`,D.srcdoc=I,de.innerHTML="",de.appendChild(D),m.classList.add("item-preview--has-frame"),It(De.x,De.y)}catch(A){if(r!==un)return;de.innerHTML=`<div class="item-preview__status">No preview available for <strong>${_t(i)}</strong>.</div>`,console.warn(`[Blockscape] preview unavailable for ${s}`,A),It(De.x,De.y)}}Re&&Re.addEventListener("click",kn),pe&&pe.addEventListener("click",()=>{$o()}),ge&&ge.addEventListener("click",()=>{Fo()}),we&&we.addEventListener("click",$i),fe&&fe.addEventListener("click",$i),en&&en.addEventListener("click",Fi),je&&je.addEventListener("click",Fi),C&&C.addEventListener("contextmenu",e=>{const n=e.target.closest(".tile");!n||!C.contains(n)||br(e,n)}),document.addEventListener("click",e=>{typeof e.button=="number"&&e.button!==0||!m||m.hidden||m.contains(e.target)||kn()}),V&&V.addEventListener("click",()=>{za("button")}),Z&&Z.addEventListener("click",()=>{if(w<0){alert("Load or select a model before creating a version.");return}try{const e=Ja({versionLabel:"map edit"});Ze(e),console.log("[Blockscape] created new version from map view")}catch(e){alert((e==null?void 0:e.message)||"Unable to create a new version right now.")}}),W&&W.addEventListener("click",async()=>{var s;if(w<0||!S[w]){alert("Select or load a model before sharing.");return}const e={title:Oe(S[w],"Shared Model"),data:S[w].data};let n;try{n=Js(JSON.stringify(e))}catch(r){console.error("[Blockscape] share encode failed",r),alert("Unable to encode this model for sharing.");return}const t=new URL(window.location.href);t.searchParams.delete("share"),t.hash=`share=${n}`;const i=t.toString();try{window.history.replaceState({},document.title,i)}catch(r){console.warn("[Blockscape] failed to update URL for share",r),window.location.hash=t.hash}let a=!1;if((s=navigator.clipboard)!=null&&s.writeText)try{await navigator.clipboard.writeText(i),a=!0}catch(r){console.warn("[Blockscape] clipboard write failed",r)}a?alert("Share URL copied to clipboard."):window.prompt("Copy this share URL:",i)}),F&&F.addEventListener("click",()=>{const e=(c.value||"").trim();if(!e){alert("Load or paste a model before opening the editor.");return}try{JSON.parse(e)}catch{alert("Current JSON is invalid. Fix it before opening the editor.");return}try{const t={ts:Date.now(),text:e,source:"viewer"};L&&(t.selectedItemId=L),localStorage.setItem(Be,JSON.stringify(t))}catch(t){console.error("[Blockscape] failed to store editor payload",t),alert("Unable to stash JSON for the editor (storage disabled?).");return}let n="editor.html#viewer";L&&(n=`editor.html?selected=${encodeURIComponent(L)}#viewer`),window.open(n,"_blank")}),typeof window<"u"&&(window.addEventListener("storage",e=>{if(!e||e.storageArea&&e.storageArea!==window.localStorage||e.key!==Be||!e.newValue)return;let n;try{n=JSON.parse(e.newValue)}catch(t){console.warn("[Blockscape] storage payload parse failed",t);return}!n||n.source!=="editor"||ns("storage-event")}),window.addEventListener("message",e=>{if(!e||!e.data)return;const n=window.location.origin;if(n&&n!=="null"){if(e.origin!==n)return}else if(e.origin&&e.origin!=="null")return;typeof e.data=="object"&&e.data!==null&&e.data.type===Ve&&ns("message")})),document.addEventListener("keydown",e=>{var t,i,a,s,r,d,p,f,v,A;if(Vo()){e.key==="Escape"&&(e.preventDefault(),$i());return}if(!(ve!=null&&ve.hidden)&&e.key==="Escape"){e.preventDefault(),Fi();return}if(!((t=ct==null?void 0:ct.isOpen)!=null&&t.call(ct))){if((e.ctrlKey||e.metaKey)&&e.code==="KeyS"){e.preventDefault();const I=S[w],x=((i=I==null?void 0:I.apicurioVersions)==null?void 0:i.length)>1;za("shortcut",x);return}if((e.ctrlKey||e.metaKey)&&!e.altKey&&!e.shiftKey&&e.key&&e.key.toLowerCase()==="z"){if(!dt())return;if(Mr()){e.preventDefault();return}}if(e.key==="Escape"){let I=!1;m&&!m.hidden&&(kn(),I=!0),(L||z)&&(ni(),I=!0),I&&e.preventDefault()}if(e.key==="ArrowLeft"||e.key==="ArrowRight"){if(!dt())return;const I=e.key==="ArrowLeft"?-1:1;if(e.altKey)return;if((e.ctrlKey||e.metaKey)&&!e.shiftKey){Gi(I)&&e.preventDefault();return}if(e.ctrlKey||e.metaKey)return;if(z&&!e.shiftKey){e.preventDefault();return}e.shiftKey?Ir(I)&&e.preventDefault():xr(I)&&e.preventDefault()}if(e.key==="ArrowUp"||e.key==="ArrowDown"){if(!dt())return;const I=e.key==="ArrowUp"?-1:1;if((e.ctrlKey||e.metaKey)&&!e.altKey){Nr(I)&&e.preventDefault();return}if(e.altKey)return;if(z&&!L&&!e.shiftKey){if(Tr(I)){e.preventDefault();return}if(sr(I)){e.preventDefault();return}}e.shiftKey?Lr(I)&&e.preventDefault():Ar(I)&&e.preventDefault()}if(e.key==="Delete"){if(!dt()||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;const I=z?Br():!1,x=I?!0:gs();(I||x)&&e.preventDefault()}if(e.key==="F2"){if(!dt())return;const I=z&&!L&&z||!L&&((d=(r=(s=(a=e.target)==null?void 0:a.closest)==null?void 0:s.call(a,".category"))==null?void 0:r.dataset)==null?void 0:d.cat)||null;if(I&&!L&&_r(I)){e.preventDefault();return}const x=L||((A=(v=(f=(p=e.target)==null?void 0:p.closest)==null?void 0:f.call(p,".tile"))==null?void 0:v.dataset)==null?void 0:A.id);x&&ct.open(x)&&e.preventDefault()}if(e.key==="Insert"){if(!dt()||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;ms()&&e.preventDefault()}}}),window.addEventListener("resize",()=>{!m||m.hidden||It(De.x,De.y)}),window.addEventListener("scroll",()=>{!m||m.hidden||kn()},!0);let Zn=null,ii=null;function vr(e){kn(),Zn=e.target.dataset.id,ii=e.target.closest(".category").dataset.cat,e.target.classList.add("dragging"),e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",JSON.stringify({itemId:Zn,categoryId:ii})),e.target.closest(".category").querySelector(".grid").classList.add("drag-active"),console.log("[Blockscape] drag start",Zn,"from",ii)}function yr(e){e.target.classList.remove("dragging"),C.querySelectorAll(".grid").forEach(n=>n.classList.remove("drag-active")),C.querySelectorAll(".tile").forEach(n=>n.classList.remove("drag-over")),Zn=null,ii=null}function wr(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function kr(e){e.preventDefault();const n=e.target.closest(".grid");n&&n.classList.add("drag-active")}function Sr(e){const n=e.target.closest(".grid");n&&!n.contains(e.relatedTarget)&&n.classList.remove("drag-active")}function Cr(e){e.preventDefault();const n=e.target.closest(".grid");if(!n)return;const t=n.closest(".category");if(!t)return;const i=t.dataset.cat;if(!Zn||!i)return;const s=Array.from(n.querySelectorAll(".tile")).filter(r=>r.dataset.id!==Zn).find(r=>{const d=r.getBoundingClientRect();return e.clientY<d.top+d.height/2});us(Zn,s?s.dataset.id:null,i),St(),console.log("[Blockscape] drop completed",Zn,"from",ii,"to",i)}function us(e,n,t){if(w<0)return;const a=S[w].data.categories||[],s=a.find(v=>(v.items||[]).some(A=>A.id===e)),r=a.find(v=>v.id===t);if(!s||!r)return;s.items=s.items||[],r.items=r.items||[];const d=s.items.findIndex(v=>v.id===e);if(d===-1)return;const[p]=s.items.splice(d,1);let f=r.items.length;if(n){const v=r.items.findIndex(A=>A.id===n);v!==-1&&(f=v)}r.items.splice(f,0,p),cn(),rn()}function Er(e){if(w<0||!e)return;const n=S[w].data,i=(n.categories||[]).find(p=>p.id===e);if(!i)return;i.items=i.items||[];const a=`New item ${i.items.length+1}`,r={id:Ao(`${e}-${i.items.length+1}`,n),name:a,deps:[]};i.items.push(r),cn(),rn(),kn(),dn(r.id);const d=be.get(r.id);d!=null&&d.el&&d.el.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),console.log("[Blockscape] added item",r.id,"to",e)}function ms(){if(w<0)return!1;const e=S[w].data;e.categories=e.categories||[];const n=`New category ${e.categories.length+1}`,t=To(n,e),i={id:t,title:n,items:[]};return e.categories.push(i),z=t,L=null,ne=null,he=null,cn(),rn(),Vn(t),console.log("[Blockscape] added category",t),!0}function _r(e=ei()){if(w<0||!e)return!1;const n=No.open(e);return n&&(L=null,ne=null,sn()),n}function Ir(e){if(!L||w<0||!e)return!1;const t=S[w].data.categories||[],i=be.get(L);let a=null;if(i!=null&&i.catId&&(a=t.find(p=>p.id===i.catId)),a||(a=t.find(p=>(p.items||[]).some(f=>f.id===L))),!a)return!1;a.items=a.items||[];const s=a.items.findIndex(p=>p.id===L);if(s===-1)return!1;const r=s+e;if(r<0||r>=a.items.length)return!1;const[d]=a.items.splice(s,1);return a.items.splice(r,0,d),cn(),rn(),St(),dn(L),!0}function xr(e){if(!H||!H.m||!e)return!1;const n=H.m.categories||[];if(!n.length)return!1;const t=()=>{const p=n.find(f=>(f.items||[]).length);return p?{category:p,item:p.items[0]}:null};if(!L){const p=t();return p?(dn(p.item.id),!0):!1}const i=be.get(L);let a=null;if(i!=null&&i.catId&&(a=n.find(p=>p.id===i.catId)),a||(a=n.find(p=>(p.items||[]).some(f=>f.id===L))),!a){const p=t();return p?(dn(p.item.id),!0):!1}const s=a.items||[];if(!s.length)return!1;const r=s.findIndex(p=>p.id===L);if(r===-1)return!1;const d=r+e;return d<0||d>=s.length?!1:(dn(s[d].id),!0)}function Ar(e){if(!H||!H.m||!e)return!1;const n=H.m.categories||[];if(!n.length)return!1;const t=ei();let i=n.findIndex(r=>r.id===t),a=i+e;if(i===-1&&(a=e>0?0:n.length-1),a<0||a>=n.length)return!1;const s=n[a];if(L){const d=(n[i].items||[]).findIndex(p=>p.id===L);he={catId:s.id,position:d===-1?0:d}}else he=null;return Vn(s.id,{preserveEntryHint:!0})}function Tr(e){var s;if(!z||!((s=H==null?void 0:H.m)!=null&&s.categories)||!e)return!1;const t=(H.m.categories||[]).find(r=>r.id===z);if(!t)return!1;const i=t.items||[];if(!i.length)return!1;let a=e>0?0:Math.max(0,i.length-1);return(he==null?void 0:he.catId)===t.id&&(a=Math.min(i.length-1,Math.max(0,he.position||0))),he=null,dn(i[a].id),!0}function Lr(e){if(!L||w<0||!e)return!1;const t=S[w].data.categories||[];if(!t.length)return!1;const i=be.get(L);let a=-1;if(i!=null&&i.catId&&(a=t.findIndex(A=>A.id===i.catId)),a===-1&&(a=t.findIndex(A=>(A.items||[]).some(I=>I.id===L))),a===-1)return!1;const s=a+e;if(s<0||s>=t.length)return!1;const r=t[a],d=t[s];if(!d)return!1;r.items=r.items||[],d.items=d.items||[];const p=r.items.findIndex(A=>A.id===L);if(p===-1)return!1;const f=Math.min(d.items.length,Math.max(0,p)),v=f<d.items.length?d.items[f].id:null;return us(L,v,d.id),St(),dn(L),!0}function Nr(e){if(w<0||!e)return!1;const t=S[w].data.categories||[];if(!t.length)return!1;const i=ei();if(!i)return!1;const a=t.findIndex(d=>d.id===i);if(a===-1)return!1;const s=a+e;if(s<0||s>=t.length)return!1;const[r]=t.splice(a,1);return t.splice(s,0,r),z=r.id,zi(),he=null,sn(),cn(),rn(),Ct(),console.log("[Blockscape] moved category",r.id,"from",a,"to",s),!0}function Mr(){if(w<0)return!1;const e=S[w],n=Je(e)||(e?e.id:null),t=[];if(Ye&&n===Ye.modelId&&t.push({...Ye,type:"item"}),ie&&n===ie.modelId&&t.push({...ie,type:"category"}),!t.length)return!1;const i=t.reduce((a,s)=>a?(s.ts||0)>(a.ts||0)?s:a:s,null);if(!i)return!1;if(i.type==="category"){if(Rr(i))return!0}else if(i.type==="item"&&Pr(i))return!0;return!1}function Pr(e){const n=S[w],t=Je(n)||(n?n.id:null);if(!n||t!==e.modelId)return!1;const s=(n.data.categories||[]).find(d=>d.id===e.categoryId);if(!s)return!1;s.items=s.items||[];const r=Math.min(Math.max(e.index,0),s.items.length);return s.items.splice(r,0,e.item),Ye=null,kn(),L=null,ne=null,sn(),cn(),rn(),St(),dn(e.item.id),console.log("[Blockscape] undo delete restored",e.item.id),!0}function Rr(e){const n=S[w],t=Je(n)||(n?n.id:null);if(!n||t!==e.modelId)return!1;const i=n.data;i.categories=i.categories||[];const a=Math.min(Math.max(e.index,0),i.categories.length);return i.categories.splice(a,0,e.category),ie=null,L=null,ne=null,z=e.category.id,he=null,sn(),cn(),rn(),Ct(),Vn(e.category.id),console.log("[Blockscape] undo delete restored category",e.category.id),!0}function gs(){if(!L||w<0)return!1;const n=S[w].data.categories||[];if(!n.length)return!1;const t=be.get(L);let i=null;if(t!=null&&t.catId&&(i=n.find(f=>f.id===t.catId)),i||(i=n.find(f=>(f.items||[]).some(v=>v.id===L))),!i||!Array.isArray(i.items))return!1;const a=i.items.findIndex(f=>f.id===L);if(a===-1)return!1;const s=i.items.splice(a,1)[0];if(!s)return!1;const r=S[w];Ye={item:s,categoryId:i.id,index:a,modelId:Je(r)||(r?r.id:null),ts:Date.now()};const p=(()=>{var v;if(i.items.length){const A=Math.min(a,i.items.length-1);return((v=i.items[A])==null?void 0:v.id)||null}const f=n.findIndex(A=>A.id===i.id);if(f===-1)return null;for(let A=f+1;A<n.length;A++){const I=n[A].items||[];if(I.length)return I[0].id}for(let A=f-1;A>=0;A--){const I=n[A].items||[];if(I.length)return I[0].id}return null})();return kn(),L=null,ne=null,he=null,sn(),cn(),rn(),St(),p?dn(p):ni(),console.log("[Blockscape] removed item",s.id),!0}function Br(){var d,p;const e=ei();if(!e||w<0)return!1;const t=S[w].data.categories||[];if(!t.length)return!1;const i=t.findIndex(f=>f.id===e);if(i===-1)return!1;const[a]=t.splice(i,1);if(!a)return!1;const s=S[w];ie={category:a,index:i,modelId:Je(s)||(s?s.id:null),ts:Date.now()},z=null,L=null,ne=null,he=null,sn(),cn(),rn();const r=((d=t[i])==null?void 0:d.id)||((p=t[i-1])==null?void 0:p.id)||null;return r?Vn(r):ni(),console.log("[Blockscape] removed category",a.id),!0}function Dr(e){if(!e)return!1;const n=L;L=e;const t=gs();return t||(L=n,sn()),t}He&&(wi(),He.addEventListener("click",async e=>{const n=e.target.closest("button[data-set-id]");if(!n)return;const t=n.dataset.setId||ht;if(t!==Ge){if(S.length){const i=S.length===1?"":"s";if(!window.confirm(`Switching portfolio will discard the ${S.length} current model${i}. Continue?`))return}try{await Vr(t)}catch(i){console.error("[Blockscape] directory load error:",i),alert("Failed to load that set (see console).")}}})),X&&X.addEventListener("click",async()=>{const e=c.value||"";if(!e.trim()){alert("JSON editor is empty.");return}await $a(e)?alert("JSON copied to clipboard."):window.prompt("Copy this JSON manually:",e)}),Se&&Se.addEventListener("click",async()=>{const e=Mo();if(!e){alert("No series available to copy. Create another version first.");return}await $a(e)?alert("Series JSON copied to clipboard."):window.prompt("Copy this series JSON manually:",e)}),P&&P.addEventListener("click",async()=>{try{const e=await Qs();if(!e){alert("Clipboard is empty.");return}c.value=e,c.focus()}catch(e){console.warn("[Blockscape] clipboard read failed",e),alert("Unable to read from the clipboard. Use Cmd/Ctrl+V inside the editor instead.")}}),document.getElementById("appendFromBox").onclick=()=>{try{const e=Yn(c.value,"Pasted",{promptForSeriesName:!0});if(!e.length){alert("No valid JSON found to append.");return}console.log("[Blockscape] appending",e.length,"model(s)");let n=null;e.forEach((t,i)=>{const a=Wn(t,{versionLabel:e.length>1?`paste #${i+1}`:"paste"});n==null&&(n=a)}),w===-1&&n!=null?Ze(n):Xn()}catch(e){console.error("[Blockscape] append error:",e),alert("Append error (see console).")}},document.getElementById("replaceActive").onclick=()=>{var e;if(w<0){alert("No active model selected.");return}try{const n=JSON.parse(c.value);if(lt(n,{titleHint:Oe(S[w]),idHint:Je(S[w])||Oe(S[w])}),S[w].data=n,S[w].title=n.title||S[w].title,S[w].isSeries||((e=S[w].apicurioVersions)==null?void 0:e.length)>1){const t=S[w].title||Oe(S[w]);fn(S[w],{seriesName:t,fallbackTitle:t})}bi(),console.log("[Blockscape] replaced active model:",Oe(S[w])),rn(),_e.updateAvailability()}catch(n){console.error("[Blockscape] replace error:",n),alert("JSON parse error (see console).")}},document.getElementById("file").onchange=async e=>{const n=Array.from(e.target.files||[]);if(n.length)try{console.log("[Blockscape] reading",n.length,"file(s)");let t=null;for(const i of n){const a=await i.text(),s=i.name.replace(/\.[^.]+$/,"")||"File",r=Yn(a,s,{seriesTitleOverride:`${s} series`});if(!r.length){console.warn("[Blockscape] no models in file:",i.name);continue}r.forEach((d,p)=>{var ce;const f=(((ce=d.data)==null?void 0:ce.title)??"").toString().trim(),v=r.length>1?`${i.name} #${p+1}`:i.name,A=`${s} series`,I=d.isSeries?A:null;let x={...d};if(d.isSeries){const ye=I||f||d.title||v||"unknown";x.title=ye;const Ie=vt(ye||"unknown");mi(x,Ie),fn(x,{seriesName:ye,fallbackTitle:"unknown"}),x.apicurioArtifactName=x.apicurioArtifactName||ye}else x.title=f||v;const D=Wn({...x,apicurioArtifactName:x.apicurioArtifactName||I||x.apicurioArtifactName},{versionLabel:i.name});t==null&&(t=D)})}w===-1&&t!=null?Ze(t):Xn()}catch(t){console.error("[Blockscape] file load error:",t),alert("File load error (see console).")}finally{e.target.value=""}},document.addEventListener("paste",Or);function Or(e){var a;if(!dt())return;const n=((a=e.clipboardData)==null?void 0:a.getData("text/plain"))||window.clipboardData&&window.clipboardData.getData("Text")||"";if(!Ko(n))return;let t=[];try{t=Yn(n,"Clipboard",{promptForSeriesName:!0})}catch(s){console.warn("[Blockscape] clipboard paste ignored (invalid JSON)",s);return}if(!t.length)return;e.preventDefault();let i=null;t.forEach((s,r)=>{const d=Wn(s,{versionLabel:t.length>1?`paste #${r+1}`:"paste"});i==null&&(i=d)}),console.log(`[Blockscape] pasted ${t.length} model(s) from clipboard`),i!=null&&Ze(i)}j.addEventListener("click",e=>{const n=e.target.closest("button[data-index]");if(!n)return;const t=parseInt(n.dataset.index,10);Number.isInteger(t)&&(Bo(),Ze(t))}),document.getElementById("removeModel").onclick=()=>{if(w<0)return;const e=Oe(S[w]);if(!window.confirm(`Remove "${e}" from this session?`))return;if(console.log("[Blockscape] removing model:",Oe(S[w])),S.splice(w,1),!S.length){w=-1,H=null,C.innerHTML="",k.innerHTML="",c.value="",Xn(),bi();return}const t=Math.min(w,S.length-1);Ze(t)},R&&(R.addEventListener("input",e=>{qi(e.target.value||"")}),R.addEventListener("focus",()=>{R.value&&R.value.trim()&&Ya(R.value)})),Q&&Q.addEventListener("click",e=>{const n=e.target.closest(".search-result");if(!n)return;const t=parseInt(n.dataset.modelIndex||"-1",10),i=n.dataset.itemId;Wo({modelIndex:t,itemId:i})}),document.addEventListener("click",e=>{if(!Q||Q.hidden)return;const n=e.target;Q.contains(n)||R&&(n===R||R.contains(n))||(Q.hidden=!0)}),G&&q&&re&&G.addEventListener("submit",async e=>{e.preventDefault();const n=q.value.trim();if(!n){alert("Please enter a URL"),q.focus();return}const t=await Xi(n);if(typeof t=="number"){Ze(t),q.value="";const i=document.getElementById("urlHint");i&&(i.textContent="")}}),function(){const n=document.getElementById("urlHint");if(!q||!n)return;let t=null;q.addEventListener("input",()=>{clearTimeout(t),t=setTimeout(()=>{const a=q.value.slice(-12);n.textContent=a?`…${a}`:""},300)})}();function rn(){if(!(w<0))try{H=Yo(S[w].data),St()}catch(e){console.error("[Blockscape] rebuild error (active model likely malformed):",e),alert("Active model parse/render error (see console).")}}function Ur(){S.length=0,w=-1,Ge=ht,H=null,be=new Map,Ke=new Map,L=null,z=null,ne=null,he=null,Ye=null,ie=null,Fn=null,Un=null,bn&&(clearTimeout(bn),bn=null),vn&&(clearTimeout(vn),vn=null),zn=[],C&&(C.innerHTML=""),k&&(k.innerHTML=""),c&&(c.value=""),R&&(R.value="",qi("")),Q&&(Q.innerHTML="",Q.hidden=!0),sn(),bi()}async function Hr(e){const n=zl(e);if(n!=null)return n;const t=await fetch(Jl(e),{cache:"no-store"});if(!t.ok)throw new Error(`[Blockscape] ${e} not fetched (${t.status})`);return t.text()}async function Qi(e=Ri,{replaceExisting:n=!1,includeSeed:t=!1,setActiveAfterLoad:i=!1,collectionLabel:a}={}){const s=Array.isArray(e)?[...e]:[];n&&Ur();let r=null;t&&o&&Yn(o,"Blockscape").forEach(p=>{const f=Wn(p,{versionLabel:"seed"});r==null&&(r=f)});for(const d of s){const p=Di(d);if(p)try{const f=await Hr(p),A=(p.split("/").pop()||p).replace(/\.[^.]+$/,"")||"Model",I=Yn(f,A,{seriesTitleOverride:`${A} series`});if(!I.length){console.warn("[Blockscape] no models found in",p);continue}I.forEach(x=>{let D={...x};if(x.isSeries){const ye=`${A} series`;D={...x,title:ye,apicurioArtifactName:ye};const Ie=vt(ye||"unknown");mi(D,Ie),fn(D,{seriesName:ye,fallbackTitle:"unknown"})}const ce=Wn(D,{versionLabel:a||p});r==null&&(r=ce)}),console.log(`[Blockscape] loaded ${I.length} model(s) from ${a||p}`)}catch(f){console.log("[Blockscape] could not load",p,"- this is normal for file:// protocol",f)}}return i?r!=null?Ze(r):S.length?Ze(0):Xn():Xn(),_e.updateAvailability(),r}function wi(){if(!He)return;He.innerHTML="",[{id:ht,title:"Default maps",count:Ri.length},...Array.from(We.entries()).sort((n,t)=>n[0].localeCompare(t[0])).map(([n,t])=>({id:n,title:n,count:t.length}))].forEach(n=>{const t=document.createElement("li");t.className="model-nav-item";const i=document.createElement("button");i.type="button",i.className="model-nav-button"+(n.id===Ge?" is-active":""),i.dataset.setId=n.id,i.setAttribute("aria-current",n.id===Ge?"true":"false");const a=document.createElement("span");a.className="model-nav-label";const s=document.createElement("span");s.className="model-nav-title",s.textContent=n.title,a.appendChild(s);const r=document.createElement("span");r.className="model-nav-meta",r.textContent=`${n.count} file${n.count===1?"":"s"}`,i.appendChild(a),i.appendChild(r),t.appendChild(i),He.appendChild(t)})}async function Vr(e){if(e===ht){await Qi(Ri,{replaceExisting:!0,includeSeed:!0,setActiveAfterLoad:!0,collectionLabel:"default"}),Ge=ht,wi();return}const n=We.get(e)||[];if(!n.length){alert(`No .bs files found in ${e}.`);return}await Qi(n.map(t=>t.relativePath),{replaceExisting:!0,includeSeed:!1,setActiveAfterLoad:!0,collectionLabel:e}),Ge=e,wi()}async function $r(e){const n=[{cache:"no-store"},{cache:"reload"},{}];let t=null;for(const i of n)try{console.log(`[Blockscape] fetching ${e} with cache="${i.cache??"default"}"`);const a=await fetch(e,i);if(a.status===304){console.warn("[Blockscape] fetch returned 304 (Not Modified), retrying without cache");continue}if(!a.ok)throw new Error(`HTTP ${a.status}: ${a.statusText}`);return await a.text()}catch(a){t=a}throw t||new Error("Unable to fetch URL")}function Fr(e){if(!e)return;const n=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),t=[];for(;n.nextNode();)t.push(n.currentNode);t.forEach(i=>jr(i)),e.querySelectorAll("a[href]").forEach(i=>{const a=i.getAttribute("href");hs(a)&&fs(i,a)})}function jr(e){var d,p;if(!e||!e.nodeValue||!e.nodeValue.includes("http")||(p=(d=e.parentNode)==null?void 0:d.closest)!=null&&p.call(d,"a"))return;const n=e.nodeValue,t=/(https?:\/\/[^\s<]+)/gi,i=[];let a;for(;(a=t.exec(n))!==null;)i.push({url:a[0],index:a.index});if(!i.length)return;const s=document.createDocumentFragment();let r=0;i.forEach(({url:f,index:v})=>{v>r&&s.appendChild(document.createTextNode(n.slice(r,v))),s.appendChild(qr(f)),r=v+f.length}),r<n.length&&s.appendChild(document.createTextNode(n.slice(r))),e.parentNode.replaceChild(s,e)}function qr(e){const n=document.createElement("a");return n.href=e,n.textContent=e,n.target="_blank",n.rel="noopener noreferrer",hs(e)&&fs(n,e),n}function fs(e,n){!e||e.dataset.gistLinkBound==="true"||(e.dataset.gistLinkBound="true",e.classList.add("blockscape-gist-link"),e.title="Load this Gist into Blockscape",e.addEventListener("click",t=>Wr(t,n,e)))}async function Wr(e,n,t){if(e.preventDefault(),e.stopPropagation(),!(!n||t.dataset.loading==="true")){t.dataset.loading="true",t.classList.add("is-loading");try{await Xi(n)}finally{t.dataset.loading="false",t.classList.remove("is-loading")}}}function hs(e){if(typeof e!="string")return!1;try{const t=new URL(e,window.location.href).hostname.toLowerCase();return t==="gist.githubusercontent.com"||t.startsWith("gist.")&&t.endsWith("githubusercontent.com")}catch{return!1}}async function Xi(e){try{console.log("[Blockscape] loading from URL:",e);const n=await $r(e),i=(e.split("/").pop()||"").replace(/\.[^.]+$/,"")||"URL Model";let a;try{a=Yn(n,i)}catch(r){throw new Error(`Invalid JSON payload: ${r.message}`)}if(!a.length)throw new Error("No JSON objects found in response.");let s=null;return a.forEach((r,d)=>{var x;const p=(((x=r.data)==null?void 0:x.title)??"").toString().trim(),f=a.length>1?`${i} #${d+1}`:i,v=r.isSeries?`${i} series`:null;let A={...r};if(r.isSeries){const D=v||p||A.title||f;A={...r,title:D,apicurioArtifactName:D||r.apicurioArtifactName};const ce=vt(D||"unknown");mi(A,ce),fn(A,{seriesName:D||v||"unknown",fallbackTitle:"unknown"}),console.log("[Blockscape] loadFromUrl: series slug applied",{seriesSlug:ce,url:e,baseName:i,seriesTitle:D})}const I=Wn({...A,title:p||A.title||f,apicurioArtifactName:A.apicurioArtifactName||v||r.apicurioArtifactName},{versionLabel:i});s==null&&(s=I)}),console.log(`[Blockscape] loaded ${a.length} model(s) from URL:`,i),w===-1&&s!=null?Ze(s):Xn(),s}catch(n){return console.error("[Blockscape] URL load error:",n),alert(`Failed to load JSON from URL: ${n.message}`),null}}(async function(){if(!o)throw new Error("Seed template is empty.");const n=Yn(o,"Blockscape");if(!n.length)throw new Error("Seed template could not be parsed.");let t=null;n.forEach(p=>{const f=Wn(p,{versionLabel:"seed"});t==null&&(t=f)}),await Qi(Ri),Ge=ht,wi();const i=await Xo(),a=es(),s=a==null?void 0:a.index,r=Qo();Ze(typeof i=="number"?i:typeof r=="number"?r:typeof s=="number"?s:t??0)})()}function Xl(o){let c;return{c(){c=U("div"),c.innerHTML='<div id="shortcutHelpBackdrop" class="shortcut-help__backdrop"></div> <div class="shortcut-help__panel" tabindex="-1"><div class="shortcut-help__header"><div class="shortcut-help__title"><h2 id="shortcutHelpTitle">Help</h2></div> <button id="shortcutHelpClose" class="shortcut-help__close" type="button" aria-label="Close keyboard shortcuts">×</button></div> <section class="shortcut-help__section"><ul class="shortcut-help__tips"><li>Play around with the example maps.</li> <li>Read about <a href="https://www.wardleymaps.com" target="_blank" rel="noreferrer noopener">Wardley Maps</a>.</li> <li>Copy this URL and use &quot;Load URL&quot;: <a href="https://gist.githubusercontent.com/pwright/86dbb074b35d6d17671bf17ecbf1a824/raw/git.bs" target="_blank" rel="noreferrer noopener">https://gist.githubusercontent.com/pwright/86dbb074b35d6d17671bf17ecbf1a824/raw/git.bs</a></li> <li>Edit maps by moving items with Shift + Arrow keys.</li></ul></section> <section class="shortcut-help__section"><h3 class="shortcut-help__section-title">Keyboard shortcuts</h3> <div id="shortcutHelpList" class="shortcut-help__list" aria-live="polite"></div></section></div>',y(c,"id","shortcutHelp"),y(c,"class","shortcut-help"),c.hidden=!0,y(c,"aria-hidden","true"),y(c,"role","dialog"),y(c,"aria-modal","true"),y(c,"aria-labelledby","shortcutHelpTitle")},m(g,C){on(g,c,C)},p:Jn,i:Jn,o:Jn,d(g){g&&Xe(c)}}}class Yl extends Da{constructor(c){super(),Ba(this,c,null,Xl,Pa,{})}}const Zl=`Generate a blockscape [map|series] for the domain of [DOMAIN]

### Requirements

* Output **valid JSON only** with the structure below (no commentary):

  * Model level:
    * \`id\`: required string, short/sluggy (lowercase, hyphen/underscore ok)
    * \`title\`: required string, human‑friendly model title
    * \`abstract\`: required string (plain text or simple HTML) that explains the landscape
    * \`categories\`: array of category objects
    * optional \`links\`: array of \`{ "from": "id", "to": "id" }\` for cross‑category edges

  * Each category has:
    * \`id\` (short, lowercase, unique)
    * \`title\` (human‑friendly)
    * \`items\`: array of component objects

      * each item has:
        * \`id\` (short, lowercase, unique across all categories)
        * \`name\` (human‑friendly)
        * optional \`logo\` (e.g., \`"logos/[slug].svg"\`)
        * optional \`external\` (string URL) pointing to external documentation or reference material for that item
        * optional \`color\` (hex string) for tile tint
        * \`deps\`: array of item \`id\`s this item **depends on** (must reference defined items only)
* Use **3–6/7 categories** and **2–6/7 items per category**. Prefer clarity over exhaustiveness.
* Order categories roughly from **abstract to concrete**.
* Model **visible user value** via **vertical position** (things closer to the user are higher). Ensure \`deps\` reflect a flow from higher‑value items to their underlying enablers.
* (Optional) You may imply **horizontal evolution/maturity** via category naming or item grouping, but do not add extra fields for it.
* Keep all identifiers **ASCII**, hyphen‑separated where needed.

### Domain Guidance

In **[one paragraph]**, summarize the domain’s user‑visible goals and the key enabling components. Use that understanding to choose categories and dependencies.

### Output

If the user asks for a 'series', create an array of json using the following criteria.

Return **only the JSON** matching this schema:

\`\`\`
{
  "id": "[model-id]",
  "title": "[Model Title]",
  "abstract": "[Short description or HTML snippet]",
  "categories": [
    {
      "id": "[category-id]",
      "title": "[Category Title]",
      "items": [
        { "id": "[item-id]", "name": "[Item Name]", "deps": ["[id]"] }
      ]
    }
  ]
}
\`\`\`

### Validation Checklist (the model should self‑check before returning):

* Top-level \`id\`, \`title\`, and \`abstract\` are present and non-empty.
* All \`deps\` reference **existing** item IDs.
* No duplicate \`id\`s across all items.
* 3–6/7 categories; each has 2–6/7 items.
* No extra fields beyond those listed above.
* JSON parses.

---

## One‑shot Example (Machine Learning Model Deployment)

**Prompt to paste**

Generate a **Blockscape value‑chain JSON** for the domain of **machine learning model deployment**.

### Requirements

* Output **valid JSON only** with this structure (no commentary).
* Use **3 - 6/7 categories**, **3–6/7 items each**.
* Order from abstract (user‑facing) to concrete (infrastructure).
* Vertical axis is **visible user value**; \`deps\` should point from user‑visible items down to enablers they rely on.
* Optional \`logo\` paths may use placeholders like \`"logos/[slug].svg"\`.

### Domain Guidance

Users need **reliable predictions** surfaced via **APIs/UI**, backed by **versioned models**, **observability**, and **scalable infra**. Security and governance span across.

### Output (JSON only)

\`\`\`
{
  "categories": [
    {
      "id": "experience",
      "title": "User Experience",
      "items": [
        { "id": "prediction-api", "name": "Prediction API", "deps": ["model-serving", "authz"], "external": "https://example.com/api.html"},
        { "id": "batch-scoring", "name": "Batch Scoring", "deps": ["feature-store", "orchestration"] },
        { "id": "ui-console", "name": "Ops Console", "deps": ["monitoring", "logging"] }
      ]
    },
    {
      "id": "models",
      "title": "Models & Data",
      "items": [
        { "id": "model-serving", "name": "Model Serving", "deps": ["container-runtime", "autoscaling"] },
        { "id": "model-registry", "name": "Model Registry", "deps": ["artifact-store"] },
        { "id": "feature-store", "name": "Feature Store", "deps": ["data-pipelines"] }
      ]
    },
    {
      "id": "platform",
      "title": "Platform Services",
      "items": [
        { "id": "monitoring", "name": "Monitoring", "deps": ["metrics-backend"] },
        { "id": "logging", "name": "Logging", "deps": ["log-backend"] },
        { "id": "authz", "name": "AuthN/Z", "deps": ["secrets"] },
        { "id": "orchestration", "name": "Orchestration", "deps": ["container-runtime"] }
      ]
    },
    {
      "id": "infrastructure",
      "title": "Infrastructure",
      "items": [
        { "id": "autoscaling", "name": "Autoscaling", "deps": ["metrics-backend"] },
        { "id": "container-runtime", "name": "Container Runtime", "deps": [] },
        { "id": "artifact-store", "name": "Artifact Store", "deps": [] },
        { "id": "data-pipelines", "name": "Data Pipelines", "deps": [] },
        { "id": "metrics-backend", "name": "Metrics Backend", "deps": [] },
        { "id": "log-backend", "name": "Log Backend", "deps": [] },
        { "id": "secrets", "name": "Secrets Management", "deps": [] }
      ]
    }
  ]
}
\`\`\`

---

## Tips

* Keep **names** user‑friendly; keep **ids** short and consistent.
* If an item feels too broad, introduce a new category rather than bloating \`deps\`.
* If there's a link (external), use the favicon from the website as logo
* If you’re unsure about \`logo\`, omit it; you can add paths later.

The following map shows color conventions:

\`\`\`
{
  "id": "conventions",
  "title": "Color Conventions",
  "abstract": "Reference for color conventions.",
  "categories": [
    {
      "id": "color-conventions",
      "title": "Color conventions",
      "items": [
        {
          "id": "old",
          "name": "Old",
          "color": "#000000",
          "deps": []
        },
        {
          "id": "new",
          "name": "New",
          "color": "#FFFFFF",
          "deps": []
        },
        {
          "id": "important",
          "name": "Important",
          "deps": [],
          "color": "#FF0000"
        }
      ]
    }
  ]
}
\`\`\``;function Ds(o){let c,g,C,k,N,j,m,G;return{c(){c=U("div"),g=U("div"),C=U("a"),k=Ra("Open Blockscape GPT"),N=oe(),j=U("div"),j.textContent="Paste the copied prompt into that chat.",m=oe(),G=U("div"),G.innerHTML='<span>Gem is not available yet</span> <div class="new-panel__hint">https://gemini.google.com/gems/create</div>',y(C,"href",nc),y(C,"target","_blank"),y(C,"rel","noreferrer"),y(j,"class","new-panel__hint"),y(g,"class","new-panel__link"),y(G,"class","new-panel__link new-panel__link--disabled"),y(c,"class","new-panel__links")},m(q,re){on(q,c,re),T(c,g),T(g,C),T(C,k),T(g,N),T(g,j),T(c,m),T(c,G)},p:Jn,d(q){q&&Xe(c)}}}function Os(o){let c,g,C,k,N,j;return{c(){c=U("div"),g=U("div"),g.textContent="Generated prompt",C=oe(),k=U("textarea"),y(g,"class","new-panel__prompt-label"),y(k,"class","pf-v5-c-form-control new-panel__textarea"),y(k,"rows","4"),k.readOnly=!0,y(c,"class","new-panel__prompt")},m(m,G){on(m,c,G),T(c,g),T(c,C),T(c,k),Pt(k,o[4]),N||(j=bt(k,"input",o[12]),N=!0)},p(m,G){G&16&&Pt(k,m[4])},d(m){m&&Xe(c),N=!1,j()}}}function ec(o){let c,g,C,k,N,j,m,G,q,re,J,de,me,Re,V,W,Z,F,X,Se,P,pe,ge,te,le,we,fe,ve,en,je,R,Q,He,Be,Ve,qe,Ae,We,S,w,Ge,_e,H,be,Ke,L=o[2]==="gpt"&&Ds(),z=o[4]&&o[5]&&Os(o);return H=al(o[10][0]),{c(){c=U("div"),g=U("div"),C=oe(),k=U("div"),N=U("div"),N.innerHTML='<div class="shortcut-help__title"><h2 id="newPanelTitle">New blockscape</h2> <p class="shortcut-help__subtitle">Describe what you need and we will create a prompt for you.</p></div> <button id="newPanelClose" class="shortcut-help__close" type="button" aria-label="Close new panel">×</button>',j=oe(),m=U("form"),G=U("div"),q=U("label"),q.textContent="Domain",re=oe(),J=U("p"),J.textContent="Describe what you want to create a map for.",de=oe(),me=U("textarea"),Re=oe(),V=U("div"),W=U("label"),Z=U("input"),F=oe(),X=U("span"),X.innerHTML=`Series
            <span class="new-panel__hint">Toggle on to create a series instead of a single map.</span>`,Se=oe(),P=U("fieldset"),pe=U("legend"),pe.textContent="Target",ge=oe(),te=U("p"),te.textContent="Choose where you plan to use the prompt.",le=oe(),we=U("label"),fe=U("input"),ve=oe(),en=U("div"),en.innerHTML='<div class="new-panel__option-title">GPT or Gem</div> <div class="new-panel__hint">Copies a simple prompt tailored for GPT or Gem.</div>',je=oe(),R=U("label"),Q=U("input"),He=oe(),Be=U("div"),Be.innerHTML='<div class="new-panel__option-title">Plain LLM</div> <div class="new-panel__hint">Creates a large prompt to generate blockscape from scratch.</div>',Ve=oe(),qe=U("div"),Ae=U("button"),Ae.textContent="Copy prompt",We=oe(),S=U("div"),w=Ra(o[3]),Ge=oe(),L&&L.c(),_e=oe(),z&&z.c(),y(g,"id","newPanelBackdrop"),y(g,"class","shortcut-help__backdrop"),y(N,"class","shortcut-help__header"),y(q,"for","newDomain"),y(J,"class","new-panel__hint"),y(me,"id","newDomain"),y(me,"class","pf-v5-c-form-control new-panel__textarea"),y(me,"rows","4"),me.required=!0,y(me,"placeholder","Ex: Companies building open-source geospatial tools"),y(G,"class","new-panel__field"),y(Z,"id","seriesToggle"),y(Z,"type","checkbox"),y(W,"class","new-panel__toggle"),y(W,"for","seriesToggle"),y(V,"class","new-panel__field"),y(te,"class","new-panel__hint"),y(fe,"type","radio"),y(fe,"name","target"),fe.__value="gpt",Pt(fe,fe.__value),y(we,"class","new-panel__option"),y(Q,"type","radio"),y(Q,"name","target"),Q.__value="plain",Pt(Q,Q.__value),y(R,"class","new-panel__option"),y(P,"class","new-panel__field"),y(Ae,"class","pf-v5-c-button pf-m-primary"),y(Ae,"type","submit"),y(S,"class","new-panel__status"),y(S,"aria-live","polite"),y(qe,"class","new-panel__actions"),y(m,"class","shortcut-help__list new-panel__form"),y(k,"class","shortcut-help__panel"),y(k,"tabindex","-1"),y(c,"id","newPanel"),y(c,"class","shortcut-help"),c.hidden=!0,y(c,"aria-hidden","true"),y(c,"role","dialog"),y(c,"aria-modal","true"),y(c,"aria-labelledby","newPanelTitle"),H.p(fe,Q)},m(ne,he){on(ne,c,he),T(c,g),T(c,C),T(c,k),T(k,N),T(k,j),T(k,m),T(m,G),T(G,q),T(G,re),T(G,J),T(G,de),T(G,me),Pt(me,o[0]),T(m,Re),T(m,V),T(V,W),T(W,Z),Z.checked=o[1],T(W,F),T(W,X),T(m,Se),T(m,P),T(P,pe),T(P,ge),T(P,te),T(P,le),T(P,we),T(we,fe),fe.checked=fe.__value===o[2],T(we,ve),T(we,en),T(P,je),T(P,R),T(R,Q),Q.checked=Q.__value===o[2],T(R,He),T(R,Be),T(m,Ve),T(m,qe),T(qe,Ae),T(qe,We),T(qe,S),T(S,w),T(m,Ge),L&&L.m(m,null),T(m,_e),z&&z.m(m,null),be||(Ke=[bt(me,"input",o[7]),bt(Z,"change",o[8]),bt(fe,"change",o[9]),bt(Q,"change",o[11]),bt(m,"submit",il(o[6]))],be=!0)},p(ne,[he]){he&1&&Pt(me,ne[0]),he&2&&(Z.checked=ne[1]),he&4&&(fe.checked=fe.__value===ne[2]),he&4&&(Q.checked=Q.__value===ne[2]),he&8&&ol(w,ne[3]),ne[2]==="gpt"?L?L.p(ne,he):(L=Ds(),L.c(),L.m(m,_e)):L&&(L.d(1),L=null),ne[4]&&ne[5]?z?z.p(ne,he):(z=Os(ne),z.c(),z.m(m,null)):z&&(z.d(1),z=null)},i:Jn,o:Jn,d(ne){ne&&Xe(c),L&&L.d(),z&&z.d(),H.r(),be=!1,di(Ke)}}}const nc="https://chatgpt.com/g/g-690f6217889c819191786ef16481f534-blockscape";function tc(o,c,g){let C="",k=!1,N="gpt",j="",m="",G=!1;const q=()=>{var F;return typeof navigator<"u"&&!!((F=navigator.clipboard)!=null&&F.writeText)};function re(F){const X=F||"[DOMAIN]",Se=k?"series":"map",pe=Zl.replaceAll("[DOMAIN NAME]",X).replaceAll("[DOMAIN]",X).replaceAll("[map|series]",Se).split(`
`),ge=`Generate a **blockscape ${Se}** for the domain of ${X}.`,te=pe.findIndex(we=>we.toLowerCase().includes("generate a **blockscape value")||we.toLowerCase().includes("generate a blockscape [map|series]")||we.toLowerCase().startsWith("generate a blockscape"));te>=0?pe[te]=ge:pe.unshift(ge);const le=k?`

User requested a series (return an array of models).`:"";return`${pe.join(`
`).trim()}${le}`}async function J(F){F.preventDefault();const X=C.trim();if(g(3,j=""),g(5,G=N!=="gpt"),!X){g(3,j="Add a domain to generate a prompt."),g(4,m="");return}if(N==="gpt"?g(4,m=`${k?"Create a series":"Create a map"} for ${X}`):(g(4,m=re(X)),g(5,G=!0)),!q()){g(3,j="Clipboard access is unavailable. Copy the prompt below."),g(5,G=!0);return}try{await navigator.clipboard.writeText(m),g(3,j=N==="gpt"?"Prompt copied. Open the Blockscape GPT link to paste it.":"Prompt copied to clipboard."),N==="gpt"&&g(5,G=!1)}catch(P){console.warn("[Blockscape] clipboard write failed",P),g(3,j="Copy failed. Use the prompt below."),g(5,G=!0)}}const de=[[]];function me(){C=this.value,g(0,C)}function Re(){k=this.checked,g(1,k)}function V(){N=this.__value,g(2,N)}function W(){N=this.__value,g(2,N)}function Z(){m=this.value,g(4,m)}return[C,k,N,j,m,G,J,me,Re,V,de,W,Z]}class ic extends Da{constructor(c){super(),Ba(this,c,tc,ec,Pa,{})}}const{document:Us}=tl;function ac(o){let c,g,C,k,N,j,m,G,q,re,J,de,me,Re,V,W,Z,F,X,Se,P,pe,ge,te,le,we,fe,ve,en,je,R,Q,He,Be,Ve,qe,Ae,We,S,w,Ge,_e=`<script id="seed" type="application/json">${o[1]}<\/script>`,H,be,Ke,L,z,ne,he,pn,hn,un,De,On,Ye;return pn=new Yl({}),un=new ic({}),{c(){c=U("link"),g=oe(),C=U("div"),k=U("header"),N=U("div"),j=U("div"),m=U("div"),G=U("div"),G.innerHTML='<h1 class="sr-only">Blockscape</h1> <img class="blockscape-brand__logo" src="logos/blockscape-logo.svg" alt="Blockscape — landscape tile explorer" decoding="async"/> <a href="https://github.com/pwright/blockscape" target="_blank" class="pf-v5-c-button pf-m-plain" title="View on GitHub" aria-label="View Blockscape on GitHub"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a>',q=oe(),re=U("div"),J=U("div"),de=U("button"),me=U("span"),me.textContent="Toggle search and edit tools",Re=oe(),V=U("span"),V.textContent="▾",W=oe(),Z=U("button"),Z.textContent="New",F=oe(),X=U("form"),X.innerHTML='<label class="sr-only" for="urlInput">Load JSON from URL</label> <input id="urlInput" name="modelUrl" class="pf-v5-c-form-control is-url" type="url" placeholder="Load JSON from URL…" autocomplete="additional-name"/> <button id="loadUrl" class="pf-v5-c-button pf-m-primary" type="submit">Load URL</button> <div id="urlHint" class="url-hint" aria-live="polite"></div>',Se=oe(),P=U("label"),P.innerHTML='<span>Open</span> <input id="file" type="file" accept=".bs,.json,.txt" multiple=""/>',pe=oe(),ge=U("button"),ge.textContent="Help",te=oe(),le=U("div"),we=U("div"),we.innerHTML='<label class="sr-only" for="search">Search tiles</label> <input id="search" class="pf-v5-c-form-control" type="text" placeholder="Search…"/> <div id="searchResults" class="search-results" role="listbox" aria-label="Search across all models" hidden=""></div>',fe=oe(),ve=U("button"),ve.textContent="Edit",en=oe(),je=U("button"),je.textContent="Share",Be=oe(),Ve=U("div"),Ve.innerHTML='<span class="legend-entry"><span class="legend-dot legend-dot--dep"></span> enables</span> <span class="legend-entry"><span class="legend-dot legend-dot--revdep"></span> dependents</span> <span class="legend-entry"><span class="legend-dot legend-dot--reused"></span> reused</span> <span class="legend-entry"><span class="legend-dot legend-dot--external"></span> external link</span>',qe=oe(),Ae=U("main"),Ae.innerHTML=`<div class="blockscape-content"><aside class="blockscape-sidebar" aria-label="Models"><div class="sidebar-heading">Models</div> <ul id="modelList" class="model-nav-list"></ul> <div class="model-actions"><button id="removeModel" class="pf-v5-c-button pf-m-tertiary" type="button" title="Remove selected model">Remove active</button> <button id="clear" class="pf-v5-c-button pf-m-tertiary" type="button">Clear selection</button></div> <div class="sidebar-heading sidebar-heading--sub">Portfolio</div> <ul id="modelSets" class="model-nav-list model-nav-list--sets"></ul></aside> <div class="blockscape-main"><section class="pf-v5-c-page__main-section blockscape-json-panel" hidden="" aria-label="Model source JSON editor"><p class="blockscape-json-panel__title">Paste / edit JSON for the <b>active</b> model (schema below)</p> <div class="muted">Schema: <code>{ id, title, abstract?, categories:[{id,title,items:[{id,name,logo?,external?:url,color?,deps:[]}}], links?:[{from,to}] }</code><br/>
            You can paste multiple objects separated by <code>---</code> or <code>%%%</code>, or a JSON array of models, to append several models.
            A single object replaces only when you click “Replace active with JSON”. Tip: with no input focused, press
            Cmd/Ctrl+V anywhere on the page to append clipboard JSON instantly.</div> <div class="blockscape-json-controls"><textarea id="jsonBox" class="pf-v5-c-form-control" aria-label="JSON editor for the active model"></textarea> <div class="blockscape-json-actions"><button id="copyJson" class="pf-v5-c-button pf-m-tertiary" type="button" title="Copy the current JSON to your clipboard">Copy</button> <button id="copySeries" class="pf-v5-c-button pf-m-tertiary" type="button" title="Copy every version in this series as an array">Copy series</button> <button id="pasteJson" class="pf-v5-c-button pf-m-tertiary" type="button" title="Paste clipboard JSON to replace the editor contents">Paste</button> <button id="appendFromBox" class="pf-v5-c-button pf-m-primary" type="button">Append model(s)</button> <button id="replaceActive" class="pf-v5-c-button pf-m-secondary" type="button">Replace active with
                JSON</button> <button id="createVersion" class="pf-v5-c-button pf-m-secondary" type="button" title="Create a new version from the current map">New version</button></div></div></section> <section class="pf-v5-c-page__main-section blockscape-main-section"><div id="app" aria-live="polite"></div></section></div></div>`,We=oe(),S=U("footer"),S.innerHTML='<div class="blockscape-footer__inner"><a href="https://pwright.github.io/backscape/" target="_blank" rel="noreferrer noopener">Old versions</a></div>',w=oe(),Ge=new rl(!1),H=oe(),be=$s("svg"),Ke=oe(),L=U("div"),z=oe(),ne=U("div"),ne.innerHTML='<div class="item-preview__header"><span class="item-preview__title">Preview</span> <div class="item-preview__actions" hidden=""></div> <button type="button" class="item-preview__close" aria-label="Close preview">×</button></div> <div class="item-preview__body"><div class="item-preview__status">Right-click a tile to see related notes.</div></div>',he=oe(),Ms(pn.$$.fragment),hn=oe(),Ms(un.$$.fragment),Us.title="Blockscape — simple landscape-style tiles",y(c,"rel","icon"),y(c,"type","image/svg+xml"),y(c,"href","./favicon.svg"),y(G,"class","blockscape-brand"),y(me,"class","sr-only"),y(V,"class","blockscape-toolbar__toggle-icon"),y(V,"aria-hidden","true"),y(de,"class","pf-v5-c-button pf-m-plain blockscape-toolbar__toggle"),y(de,"type","button"),y(de,"aria-expanded",o[0]),y(de,"aria-controls","blockscapeHeaderExtras"),y(Z,"id","newPanelButton"),y(Z,"class","pf-v5-c-button pf-m-primary"),y(Z,"type","button"),y(Z,"title","Create something new"),y(X,"id","urlForm"),y(X,"class","blockscape-url-form"),y(X,"autocomplete","on"),X.noValidate=!0,y(P,"class","pf-v5-c-button pf-m-primary blockscape-file"),y(ge,"id","helpButton"),y(ge,"class","pf-v5-c-button pf-m-primary"),y(ge,"type","button"),y(ge,"title","Show keyboard shortcuts"),y(J,"class","blockscape-toolbar__primary"),y(we,"class","blockscape-search"),y(ve,"id","openInEditor"),y(ve,"class","pf-v5-c-button pf-m-secondary"),y(ve,"type","button"),y(ve,"title","Open current JSON in the editor"),y(je,"id","shareModel"),y(je,"class","pf-v5-c-button pf-m-secondary"),y(je,"type","button"),y(je,"title","Copy a shareable URL for this model"),y(le,"id","blockscapeHeaderExtras"),y(le,"class","blockscape-toolbar__extras"),le.hidden=R=!o[0],y(le,"aria-hidden",Q=!o[0]),y(re,"class","blockscape-toolbar__controls"),y(re,"data-expanded",He=o[0]?"true":"false"),y(Ve,"class","blockscape-legend"),y(Ve,"role","presentation"),y(m,"class","blockscape-toolbar"),y(j,"class","pf-v5-c-masthead__content"),y(N,"class","pf-v5-c-masthead pf-m-display-inline blockscape-masthead"),y(k,"class","pf-v5-c-page__header"),y(Ae,"class","pf-v5-c-page__main"),y(S,"class","pf-v5-c-page__footer blockscape-footer"),y(C,"class","pf-v5-c-page"),Ge.a=H,y(be,"id","overlay"),y(be,"class","svg-layer"),y(L,"id","tabTooltip"),y(L,"class","blockscape-tab-tooltip"),L.hidden=!0,y(L,"aria-hidden","true"),y(ne,"id","itemPreview"),y(ne,"class","item-preview"),ne.hidden=!0,y(ne,"aria-hidden","true")},m(ie,Ne){T(Us.head,c),on(ie,g,Ne),on(ie,C,Ne),T(C,k),T(k,N),T(N,j),T(j,m),T(m,G),T(m,q),T(m,re),T(re,J),T(J,de),T(de,me),T(de,Re),T(de,V),T(J,W),T(J,Z),T(J,F),T(J,X),T(J,Se),T(J,P),T(J,pe),T(J,ge),T(re,te),T(re,le),T(le,we),T(le,fe),T(le,ve),T(le,en),T(le,je),T(m,Be),T(m,Ve),T(C,qe),T(C,Ae),T(C,We),T(C,S),on(ie,w,Ne),Ge.m(_e,ie,Ne),on(ie,H,Ne),on(ie,be,Ne),on(ie,Ke,Ne),on(ie,L,Ne),on(ie,z,Ne),on(ie,ne,Ne),on(ie,he,Ne),Na(pn,ie,Ne),on(ie,hn,Ne),Na(un,ie,Ne),De=!0,On||(Ye=bt(de,"click",o[2]),On=!0)},p(ie,[Ne]){(!De||Ne&1)&&y(de,"aria-expanded",ie[0]),(!De||Ne&1&&R!==(R=!ie[0]))&&(le.hidden=R),(!De||Ne&1&&Q!==(Q=!ie[0]))&&y(le,"aria-hidden",Q),(!De||Ne&1&&He!==(He=ie[0]?"true":"false"))&&y(re,"data-expanded",He)},i(ie){De||(La(pn.$$.fragment,ie),La(un.$$.fragment,ie),De=!0)},o(ie){Ns(pn.$$.fragment,ie),Ns(un.$$.fragment,ie),De=!1},d(ie){ie&&(Xe(g),Xe(C),Xe(w),Ge.d(),Xe(H),Xe(be),Xe(Ke),Xe(L),Xe(z),Xe(ne),Xe(he),Xe(hn)),Xe(c),Ma(pn,ie),Ma(un,ie),On=!1,Ye()}}}function sc(o,c,g){const C=`
  {
  "id": "blockscape",
  "title": "Blockscape (AI maps)",
  "abstract": "Blockscape (pronounced BYK-shed) visualizes value chains and dependencies using a BS file. Inspired by Wardley maps, these maps emphasizes the topology that makes maps useful.",
  "categories": [
    {
      "id": "communication",
      "title": "Communication",
      "items": [
        {
          "id": "gestalt",
          "name": "Visualise to understand",
          "logo": "./logos/block-mind-blown.gif",
          "deps": []
        },
        {
          "id": "value-chain",
          "name": "Visible value chain (y-axis)",
          "deps": []
        },
        {
          "id": "evolution",
          "name": "Evolution and maturity (x-axis)",
          "deps": []
        },
        {
          "id": "relational-awareness",
          "name": "Relations",
          "logo": "./logos/relations.png",
          "deps": []
        },
        {
          "id": "icons",
          "name": "Icons",
          "deps": []
        }
      ]
    },
    {
      "id": "experience",
      "title": "User Experience",
      "items": [
        {
          "id": "paste-bs-file",
          "name": "Paste (cmd-v)",
          "deps": [
            "bs-format-simple"
          ]
        },
        {
          "id": "load-multidoc-file",
          "name": "Series",
          "deps": [
            "bs-format-simple"
          ]
        },
        {
          "id": "create-gist-multidoc",
          "name": "Gist",
          "deps": [
            "gists",
            "bs-format-simple"
          ]
        },
        {
          "id": "abstract-gist-loading",
          "name": "Links",
          "deps": [
            "gists",
            "bs-format-simple"
          ]
        },
        {
          "id": "model-collection",
          "name": "Portfolio",
          "deps": [
            "apicurio",
            "bs-format-simple"
          ]
        }
      ]
    },
    {
      "id": "authoring-ai",
      "title": "Authoring (LLM)",
      "items": [
        {
          "id": "bs-format-simple",
          "name": "BS Schema",
          "deps": []
        },
        {
          "id": "editor-human-terms",
          "name": "Edit",
          "deps": [
            "bs-format-simple",
            "gestalt"
          ]
        },
        {
          "id": "llm-generate-bs",
          "name": "LLM generates BS",
          "external": "https://github.com/pwright/blockscape/blob/main/map-generation-prompt.md",
          "deps": [
            "bs-format-simple"
          ]
        },
        {
          "id": "llm-consume-bs",
          "name": "LLM consumes BS",
          "deps": [
            "bs-format-simple"
          ]
        },
        {
          "id": "move-items",
          "name": "Move (shift - arrow keys)",
          "logo": "./logos/block-swap.gif",
          "deps": []
        }
      ]
    },
    {
      "id": "platforms",
      "title": "Platforms",
      "items": [
        {
          "id": "gists",
          "name": "Gist",
          "logo": "https://favicon.im/github.com",
          "deps": []
        },
        {
          "id": "apicurio",
          "name": "Apicurio",
          "logo": "https://www.google.com/s2/favicons?domain=apicur.io&sz=96",
          "deps": []
        }
      ]
    }
  ]
}`;let k=!1;const N=()=>{if(g(0,k=!k),!k){const j=document.getElementById("search");j&&j.value&&(j.value="",j.dispatchEvent(new Event("input",{bubbles:!0})))}};return cl(()=>{Ql()}),[k,C,N]}class oc extends Da{constructor(c){super(),Ba(this,c,sc,ac,Pa,{})}}const rc=document.getElementById("root");new oc({target:rc});
