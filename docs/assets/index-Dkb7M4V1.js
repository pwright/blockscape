var Wr=Object.defineProperty;var Gr=(o,c,f)=>c in o?Wr(o,c,{enumerable:!0,configurable:!0,writable:!0,value:f}):o[c]=f;var Yn=(o,c,f)=>Gr(o,typeof c!="symbol"?c+"":c,f);(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const w of document.querySelectorAll('link[rel="modulepreload"]'))S(w);new MutationObserver(w=>{for(const N of w)if(N.type==="childList")for(const j of N.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&S(j)}).observe(document,{childList:!0,subtree:!0});function f(w){const N={};return w.integrity&&(N.integrity=w.integrity),w.referrerPolicy&&(N.referrerPolicy=w.referrerPolicy),w.crossOrigin==="use-credentials"?N.credentials="include":w.crossOrigin==="anonymous"?N.credentials="omit":N.credentials="same-origin",N}function S(w){if(w.ep)return;w.ep=!0;const N=f(w);fetch(w.href,N)}})();function qn(){}function Ps(o){return o()}function Ss(){return Object.create(null)}function si(o){o.forEach(Ps)}function Rs(o){return typeof o=="function"}function xa(o,c){return o!=o?c==c:o!==c||o&&typeof o=="object"||typeof o=="function"}function Jr(o){return Object.keys(o).length===0}const zr=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function T(o,c){o.appendChild(c)}function rn(o,c,f){o.insertBefore(c,f||null)}function Xe(o){o.parentNode&&o.parentNode.removeChild(o)}function O(o){return document.createElement(o)}function Bs(o){return document.createElementNS("http://www.w3.org/2000/svg",o)}function Aa(o){return document.createTextNode(o)}function oe(){return Aa(" ")}function mt(o,c,f,S){return o.addEventListener(c,f,S),()=>o.removeEventListener(c,f,S)}function Kr(o){return function(c){return c.preventDefault(),o.call(this,c)}}function y(o,c,f){f==null?o.removeAttribute(c):o.getAttribute(c)!==f&&o.setAttribute(c,f)}function Qr(o){let c;return{p(...f){c=f,c.forEach(S=>o.push(S))},r(){c.forEach(f=>o.splice(o.indexOf(f),1))}}}function Xr(o){return Array.from(o.childNodes)}function Yr(o,c){c=""+c,o.data!==c&&(o.data=c)}function Nt(o,c){o.value=c??""}class Zr{constructor(c=!1){Yn(this,"is_svg",!1);Yn(this,"e");Yn(this,"n");Yn(this,"t");Yn(this,"a");this.is_svg=c,this.e=this.n=null}c(c){this.h(c)}m(c,f,S=null){this.e||(this.is_svg?this.e=Bs(f.nodeName):this.e=O(f.nodeType===11?"TEMPLATE":f.nodeName),this.t=f.tagName!=="TEMPLATE"?f:f.content,this.c(c)),this.i(S)}h(c){this.e.innerHTML=c,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(c){for(let f=0;f<this.n.length;f+=1)rn(this.t,this.n[f],c)}p(c){this.d(),this.h(c),this.i(this.a)}d(){this.n.forEach(Xe)}}let ai;function ii(o){ai=o}function el(){if(!ai)throw new Error("Function called outside component initialization");return ai}function nl(o){el().$$.on_mount.push(o)}const Lt=[],Cs=[];let Mt=[];const Es=[],tl=Promise.resolve();let Sa=!1;function il(){Sa||(Sa=!0,tl.then(Ds))}function Ca(o){Mt.push(o)}const va=new Set;let xt=0;function Ds(){if(xt!==0)return;const o=ai;do{try{for(;xt<Lt.length;){const c=Lt[xt];xt++,ii(c),al(c.$$)}}catch(c){throw Lt.length=0,xt=0,c}for(ii(null),Lt.length=0,xt=0;Cs.length;)Cs.pop()();for(let c=0;c<Mt.length;c+=1){const f=Mt[c];va.has(f)||(va.add(f),f())}Mt.length=0}while(Lt.length);for(;Es.length;)Es.pop()();Sa=!1,va.clear(),ii(o)}function al(o){if(o.fragment!==null){o.update(),si(o.before_update);const c=o.dirty;o.dirty=[-1],o.fragment&&o.fragment.p(o.ctx,c),o.after_update.forEach(Ca)}}function sl(o){const c=[],f=[];Mt.forEach(S=>o.indexOf(S)===-1?c.push(S):f.push(S)),f.forEach(S=>S()),Mt=c}const Ai=new Set;let ol;function Ea(o,c){o&&o.i&&(Ai.delete(o),o.i(c))}function _s(o,c,f,S){if(o&&o.o){if(Ai.has(o))return;Ai.add(o),ol.c.push(()=>{Ai.delete(o)}),o.o(c)}}function Is(o){o&&o.c()}function _a(o,c,f){const{fragment:S,after_update:w}=o.$$;S&&S.m(c,f),Ca(()=>{const N=o.$$.on_mount.map(Ps).filter(Rs);o.$$.on_destroy?o.$$.on_destroy.push(...N):si(N),o.$$.on_mount=[]}),w.forEach(Ca)}function Ia(o,c){const f=o.$$;f.fragment!==null&&(sl(f.after_update),si(f.on_destroy),f.fragment&&f.fragment.d(c),f.on_destroy=f.fragment=null,f.ctx=[])}function rl(o,c){o.$$.dirty[0]===-1&&(Lt.push(o),il(),o.$$.dirty.fill(0)),o.$$.dirty[c/31|0]|=1<<c%31}function Ta(o,c,f,S,w,N,j=null,u=[-1]){const G=ai;ii(o);const q=o.$$={fragment:null,ctx:[],props:N,update:qn,not_equal:w,bound:Ss(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(G?G.$$.context:[])),callbacks:Ss(),dirty:u,skip_bound:!1,root:c.target||G.$$.root};j&&j(q.root);let re=!1;if(q.ctx=f?f(o,c.props||{},(J,ce,...pe)=>{const Re=pe.length?pe[0]:ce;return q.ctx&&w(q.ctx[J],q.ctx[J]=Re)&&(!q.skip_bound&&q.bound[J]&&q.bound[J](Re),re&&rl(o,J)),ce}):[],q.update(),re=!0,si(q.before_update),q.fragment=S?S(q.ctx):!1,c.target){if(c.hydrate){const J=Xr(c.target);q.fragment&&q.fragment.l(J),J.forEach(Xe)}else q.fragment&&q.fragment.c();c.intro&&Ea(o.$$.fragment),_a(o,c.target,c.anchor),Ds()}ii(G)}class La{constructor(){Yn(this,"$$");Yn(this,"$$set")}$destroy(){Ia(this,1),this.$destroy=qn}$on(c,f){if(!Rs(f))return qn;const S=this.$$.callbacks[c]||(this.$$.callbacks[c]=[]);return S.push(f),()=>{const w=S.indexOf(f);w!==-1&&S.splice(w,1)}}$set(c){this.$$set&&!Jr(c)&&(this.$$.skip_bound=!0,this.$$set(c),this.$$.skip_bound=!1)}}const ll="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ll);const cl=`{
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
`,dl=`{
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
`,pl=`[
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
`,ml=`[
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
]`,ul=`{
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
}`,fl=`{
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
}`,gl=`[
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
]`,hl=`[
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
]`,bl=`[
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
]`,vl=`{
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
}`,yl=`{
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
}`,wl=`{
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
}`,kl=`{
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
}`,Sl=`{
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
}`,Cl=`{
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
}`,El=`{
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
}`,_l=`{
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
}`,Il=`{
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
}`,xl=`[
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
]`,Al=`{
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
}`,Tl=`{
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
}`,Ll=`[
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
`,Nl=`[
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
`,Ml=`{
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
`,Pl=`{
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
`,xs="blockscape:apicurioConfig",ya="http://localhost:8080/apis/registry/v3",_i="bs",As="-series",wa=!1,ka=!1;function Rl({models:o,getActiveIndex:c,setActive:f,ensureModelMetadata:S,ensureSeriesId:w,getModelId:N,getSeriesId:j,getModelTitle:u,computeJsonFingerprint:G,uid:q}){let re=null,J=null,ce=null,pe=null,Re=null,V=null,W=null,Y=null,F=null,X=null;const ke=new Set,P={baseUrl:ya,groupId:_i,authToken:"",enabled:wa,useSemver:ka},de=new Map,me=new Map;function ie(l){return(l||"").toString().trim().replace(/\/+$/,"")}function le(l){return`${(l||"").toString().trim()||_i}${As}`}function we(){return!!(P.baseUrl&&P.groupId)}function ue(){return P.enabled!==!1}function ye(){ke.forEach(l=>{try{l(ue())}catch(m){console.warn("[Blockscape] failed to run Apicurio enabled listener",m)}})}function nn(l){return typeof l=="function"&&ke.add(l),()=>ke.delete(l)}function je(){ce&&(ce.value=P.baseUrl||""),pe&&(pe.value=P.groupId||""),Re&&(Re.value=P.authToken||""),V&&(V.checked=ue()),W&&(W.checked=!!P.useSemver)}function R(l="",m="muted"){Y&&(Y.textContent=l||"",Y.classList.remove("is-error","is-success"),m==="error"?Y.classList.add("is-error"):m==="success"&&Y.classList.add("is-success"))}function Q(l){if(!X||(X.innerHTML="",!l))return;const m=document.createElement("p");m.className="apicurio-hint",m.textContent=l,X.appendChild(m)}function Ve(l){de.clear(),me.clear(),Q(l)}function Be(){const l=c(),m=ue(),_=we(),E=l>=0?o[l]:null,h=!!(E!=null&&E.apicurioVersions&&E.apicurioVersions.length>1);if(re){const M=re.dataset.loading==="true",H=m&&_&&l>=0&&!!ze(o[l]);re.disabled=!m||M||!H,m?M||(re.textContent="Push to Apicurio"):re.textContent="Enable Apicurio to push"}if(F){const M=F.dataset.loading==="true",H=m&&_&&h&&!!ze(E);F.disabled=!H||M,F.hidden=!h,m?M||(F.textContent="Push series"):F.textContent="Enable Apicurio to push series"}if(J){const M=J.dataset.loading==="true",H=m&&_;J.disabled=!H||M,M||(m?_?J.textContent="List artifacts":J.textContent="Enter details to list":J.textContent="Enable Apicurio to list")}}function $e(){je(),ue()?we()?(R("Apicurio push is ready when a model is selected.","muted"),de.size||Q("Click “List artifacts” to browse the current group.")):(R("Enter Apicurio connection details to enable push.","muted"),Ve("Enter registry details to browse artifacts.")):(R("Apicurio integration is off. Enable it to allow pushes.","muted"),Ve("Apicurio integration is disabled.")),Be()}function qe(){if(window!=null&&window.localStorage)try{localStorage.setItem(xs,JSON.stringify(P))}catch(l){console.warn("[Blockscape] unable to persist Apicurio settings",l)}}function xe(){let l={};if(window!=null&&window.localStorage)try{const M=localStorage.getItem(xs);if(M){const H=JSON.parse(M);H&&typeof H=="object"&&(l=H)}}catch(M){console.warn("[Blockscape] failed to restore Apicurio settings",M)}const m=ie(l.baseUrl??ya),_=(l.groupId??_i).toString().trim();let E=wa,h=ka;typeof l.enabled=="boolean"?E=l.enabled:typeof l.enabled=="string"&&(E=l.enabled==="true"),typeof l.useSemver=="boolean"?h=l.useSemver:typeof l.useSemver=="string"&&(h=l.useSemver==="true"),P.baseUrl=m||ya,P.groupId=_||_i,P.authToken=(l.authToken??"").toString().trim(),P.enabled=E,P.useSemver=h,$e(),ye()}function We(){const l={Accept:"application/json"},m=(P.authToken||"").trim();return m&&(l.Authorization=/\s/.test(m)?m:`Bearer ${m}`),l}function C(l,m,{title:_,description:E,version:h}={}){const M={artifactId:l,artifactType:"JSON",firstVersion:{content:{contentType:"application/json",content:m},metadata:{properties:{}}}};h&&(M.firstVersion.version=h),_&&(M.name=_),E&&(M.description=E);try{const H=JSON.parse(m),B=H==null?void 0:H.seriesId;B&&typeof B=="string"&&(M.firstVersion.metadata.properties.seriesId=B)}catch{}return M}function k(l,{version:m}={}){const _={content:{contentType:"application/json",content:l},metadata:{properties:{}}};try{const E=JSON.parse(l),h=E==null?void 0:E.seriesId;h&&typeof h=="string"&&(_.metadata.properties.seriesId=h)}catch{}return m&&(_.version=m),_}function Ge(l){if(l==null)return null;const m=String(l).trim();if(!m)return null;const _=/^v?(\d+)\.(\d+)\.(\d+)(?:-.+)?$/.exec(m);if(_)return{major:Number(_[1]),minor:Number(_[2]),patch:Number(_[3])};const E=/^v?(\d+)$/.exec(m);return E?{major:Number(E[1]),minor:0,patch:0}:null}function Ce(l){return`${l.major}.${l.minor}.${l.patch}`}function U(l,m){return!l&&!m?0:l?m?l.major!==m.major?l.major-m.major:l.minor!==m.minor?l.minor-m.minor:l.patch-m.patch:1:-1}function he(l=[]){let m=null;if(l.forEach(E=>{const h=Ge((E==null?void 0:E.version)??E);h&&(!m||U(h,m)>0)&&(m=h)}),!m)return"1.0.0";const _={...m,patch:m.patch+1};return Ce(_)}function ze(l,{seriesName:m,fallbackTitle:_}={}){var M;if(!l)return null;const E=m||l.title||l.apicurioArtifactName||u(l),h=_||E;if(typeof w=="function"&&(l.isSeries||((M=l.apicurioVersions)==null?void 0:M.length)>1)&&w(l,{seriesName:E,fallbackTitle:h}),typeof j=="function"){const H=j(l,{seriesName:E,fallbackTitle:h});if(H)return H}return N(l)}function L(l){return Array.isArray(l)?l:Array.isArray(l==null?void 0:l.artifacts)?l.artifacts:Array.isArray(l==null?void 0:l.items)?l.items:Array.isArray(l==null?void 0:l.results)?l.results:[]}function z(l){return Array.isArray(l)?l:Array.isArray(l==null?void 0:l.versions)?l.versions:Array.isArray(l==null?void 0:l.items)?l.items:[]}function ee(l=[]){if(!Array.isArray(l)||!l.length)return null;const m=[...l].filter(Boolean);return m.sort((_,E)=>{const h=_!=null&&_.createdOn?new Date(_.createdOn).getTime():0,M=E!=null&&E.createdOn?new Date(E.createdOn).getTime():0;if(h!==M)return M-h;const H=Number(_==null?void 0:_.version),B=Number(E==null?void 0:E.version),ne=Number.isFinite(H),Z=Number.isFinite(B);if(ne&&Z&&H!==B)return B-H;const se=String((_==null?void 0:_.version)??"");return String((E==null?void 0:E.version)??"").localeCompare(se,void 0,{numeric:!0})}),m[0]||null}function fe(l){if(!l)return l;let m=l;if(!Array.isArray(l==null?void 0:l.categories)){const E=l==null?void 0:l.content;if(typeof E=="string")try{m=JSON.parse(E)}catch(h){console.warn("[Blockscape] artifact payload contained string content that could not be parsed",h)}else E&&typeof E=="object"&&(m=E)}return m}async function mn(l,m,_){const E=encodeURIComponent(m),h=encodeURIComponent(_),M=`${l}/groups/${E}/artifacts/${h}`,H=We();H.Accept="application/json";const B=await fetch(M,{method:"GET",headers:H});if(!B.ok){let ne=B.statusText||"Unknown error";try{const Z=await B.text();Z&&(ne=Z.slice(0,400))}catch{}throw new Error(`Failed to fetch artifact metadata (${B.status}): ${ne}`)}return B.json()}async function hn(l,m,_){const E=encodeURIComponent(m),h=encodeURIComponent(_),M=`${l}/groups/${E}/artifacts/${h}/versions?limit=50&order=desc`,H=We();H.Accept="application/json";const B=await fetch(M,{method:"GET",headers:H});if(!B.ok){let Z=B.statusText||"Unknown error";try{const se=await B.text();se&&(Z=se.slice(0,400))}catch{}throw new Error(`Failed to fetch artifact versions (${B.status}): ${Z}`)}const ne=await B.json();return z(ne).filter(Z=>Z&&Z.version!=null)}async function un(l,m,_,E="latest"){const h=encodeURIComponent(m),M=encodeURIComponent(_),H=encodeURIComponent(E||"latest"),B=`${l}/groups/${h}/artifacts/${M}/versions/${H}/content`,ne=We();ne.Accept="application/json, application/*+json, */*;q=0.8";const Z=await fetch(B,{method:"GET",headers:ne});if(!Z.ok){let He=Z.statusText||"Unknown error";try{const ge=await Z.text();ge&&(He=ge.slice(0,400))}catch{}throw new Error(`Failed to load artifact content (${Z.status}): ${He}`)}const se=await Z.text();let be=null;try{be=JSON.parse(se)}catch{throw new Error("Artifact content is not valid JSON.")}return fe(be)}async function De(l,m,_,E="latest"){const h=await un(l,m,_,E);return{data:h,fingerprint:G(h)}}async function On(l,m,_){try{const h=await hn(l,m,_);if(h!=null&&h.length){me.set(_,h);const M=ee(h);if((M==null?void 0:M.version)!=null)return M.version}}catch(h){console.warn("[Blockscape] compare-version: unable to fetch versions list",h)}try{const h=await mn(l,m,_);if((h==null?void 0:h.version)!=null)return h.version}catch(h){console.warn("[Blockscape] compare-version: unable to fetch metadata",h)}const E=me.get(_);if(E&&E.length){const h=ee(E);if((h==null?void 0:h.version)!=null)return h.version}return"latest"}async function Ye(l,m,_,E){if(!P.useSemver)return null;if(!E)return"1.0.0";try{const h=await hn(l,m,_);return he(h)}catch(h){throw new Error(`Unable to compute next semantic version: ${h.message}`)}}function ae(l=document){re=l.querySelector("#pushApicurio")||document.getElementById("pushApicurio"),F=l.querySelector("#pushApicurioSeries")||document.getElementById("pushApicurioSeries"),J=l.querySelector("#listApicurioArtifacts")||document.getElementById("listApicurioArtifacts"),ce=l.querySelector("#apicurioUrl")||document.getElementById("apicurioUrl"),pe=l.querySelector("#apicurioGroup")||document.getElementById("apicurioGroup"),Re=l.querySelector("#apicurioToken")||document.getElementById("apicurioToken"),V=l.querySelector("#apicurioToggle")||document.getElementById("apicurioToggle"),W=l.querySelector("#apicurioSemver")||document.getElementById("apicurioSemver"),Y=l.querySelector("#apicurioStatus")||document.getElementById("apicurioStatus"),X=l.querySelector("#apicurioArtifacts")||document.getElementById("apicurioArtifacts")}function Le(){P.baseUrl=ie((ce==null?void 0:ce.value)??P.baseUrl),P.groupId=((pe==null?void 0:pe.value)??"").trim(),P.authToken=((Re==null?void 0:Re.value)??"").trim(),qe(),$e()}function Pt(l){P.enabled=l!==!1,qe(),$e(),ye()}function oi(){Pt(V?V.checked:wa)}function Hn(){P.useSemver=W?W.checked:ka,qe(),$e()}function bn(){[ce,pe,Re].forEach(l=>{l&&l.addEventListener("input",Le)}),re&&re.addEventListener("click",()=>{nt()}),F&&F.addEventListener("click",()=>{Gn()}),V&&V.addEventListener("change",oi),W&&W.addEventListener("change",Hn),J&&J.addEventListener("click",Rt),X&&X.addEventListener("click",l=>{const m=l.target.closest("[data-artifact-version]");if(m){l.stopPropagation();const h=m.dataset.artifactId,M=m.dataset.artifactVersion;h&&M&&Li(h,M);return}const _=l.target.closest("[data-artifact-load-all]");if(_){l.stopPropagation(),_.dataset.artifactId&&Ni();return}const E=l.target.closest("[data-artifact-trigger]");if(E){const h=E.dataset.artifactId;if(!h)return;gt(h)}})}function Cn(){const l=document.createElement("div");return l.className="blockscape-registry-panel",l.innerHTML=`
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
    `,l}function En(l){if(!l)return;l.innerHTML="";const m=Cn();l.appendChild(m),ae(l),bn(),$e()}function Wn(l){if(!X)return;if(X.innerHTML="",!l.length){Q("No artifacts found in this group.");return}const m=h=>{const M=document.createElement("section");M.className="apicurio-artifact-section";const H=document.createElement("h3");H.textContent=h,M.appendChild(H);const B=document.createElement("ul");return B.className="apicurio-artifact-list",M.appendChild(B),{section:M,list:B}},_=m("Series artifacts"),E=m("Artifacts");l.forEach(h=>{if(!(h!=null&&h.artifactId))return;const H=h._groupId&&h._groupId.endsWith(As)?_.list:E.list,B=document.createElement("li"),ne=document.createElement("button");ne.type="button",ne.className="apicurio-artifact",ne.dataset.artifactId=h.artifactId,ne.dataset.artifactTrigger="toggle";const Z=document.createElement("span");Z.className="apicurio-artifact-title",Z.textContent=h.artifactId,ne.appendChild(Z);const se=[];if(h.name&&se.push(h.name),h.version!=null&&se.push(`v${h.version}`),h.type&&se.push(h.type),h._groupId&&se.push(h._groupId),se.length){const ge=document.createElement("span");ge.className="apicurio-artifact-meta",ge.textContent=se.join(" • "),ne.appendChild(ge)}if(h.description){const ge=document.createElement("span");ge.className="apicurio-artifact-meta",ge.textContent=h.description,ne.appendChild(ge)}B.appendChild(ne);const be=document.createElement("div");be.className="apicurio-version-list",be.dataset.versionPanel=h.artifactId,be.hidden=!0;const He=document.createElement("p");He.className="apicurio-hint",He.textContent="Click to load the latest or open versions.",be.appendChild(He),B.appendChild(be),H.appendChild(B)}),_.list.children.length&&X.appendChild(_.section),E.list.children.length&&X.appendChild(E.section)}function Zn(l){return X?X.querySelector(`[data-version-panel="${l}"]`):null}function vn(l,m){if(!l||(l.innerHTML="",!m))return;const _=document.createElement("p");_.className="apicurio-hint",_.textContent=m,l.appendChild(_)}function ft(l,m){const _=Zn(l);if(_){if(_.innerHTML="",!m.length){vn(_,"No versions found for this artifact.");return}m.forEach(E=>{const h=document.createElement("button");h.type="button",h.className="apicurio-version-button",h.dataset.artifactId=l,h.dataset.artifactVersion=E.version;const M=[`Version ${E.version}`];if(E.createdOn){const H=new Date(E.createdOn);isNaN(H)||M.push(H.toISOString().slice(0,10))}h.textContent=M.join(" — "),_.appendChild(h)})}}async function gt(l){const m=Zn(l);if(!m)return;if(m.dataset.open==="true"){m.hidden=!0,m.dataset.open="false";return}if(m.hidden=!1,m.dataset.open="true",m.dataset.loaded!=="true"){if(!we()){vn(m,"Enter registry details first.");return}vn(m,"Loading versions…");try{const E=ie(P.baseUrl),h=de.get(l),M=P.groupId.trim(),H=(h==null?void 0:h._groupId)||M,B=await hn(E,H,l);me.set(l,B),m.dataset.loaded="true",ft(l,B)}catch(E){console.error("[Blockscape] failed to load versions",E),vn(m,`Unable to fetch versions: ${E.message}`)}}}function et(l,m){var E;const _=o.findIndex(h=>h.apicurioArtifactId===l);if(_!==-1){const h=o[_].id;o[_]={...m,id:h||m.id},((E=o[_].apicurioVersions)==null?void 0:E.length)>1&&(o[_].isSeries=!0),f(_)}else o.push(m),f(o.length-1)}async function ht(l,m,_,E){const h=encodeURIComponent(m),M=encodeURIComponent(_),H=`${l}/groups/${h}/artifacts/${M}`;try{const B=await fetch(H,{method:"GET",headers:E});if(B.status===404)return!1;if(B.ok)return!0;throw B.status===401||B.status===403?new Error("Authentication failed while checking the registry."):new Error(`Registry responded with status ${B.status} while checking the artifact.`)}catch(B){throw B instanceof TypeError?new Error("Network error while contacting Apicurio registry."):B}}async function nt(){var H;if(!re||re.dataset.loading==="true")return;if(!ue()){R("Apicurio integration is off. Enable it first.","error");return}if(!we()){R("Enter the registry base URL and group ID before pushing.","error");return}const l=c();if(l<0||!o[l]){R("No active model to push.","error");return}const m=ze(o[l],{fallbackTitle:u(o[l])});if(!m){R("Active model needs an id before pushing.","error");return}const _=ie(P.baseUrl),E=P.groupId.trim(),h=JSON.stringify(o[l].data,null,2),M=We();re.dataset.loading="true",re.textContent="Pushing…",re.disabled=!0,R("Pushing to Apicurio…","muted");try{const B=await ht(_,E,m,M),ne=G(o[l].data);if(B)try{const Ae=await On(_,E,m),{data:Ze,fingerprint:Ke}=await De(_,E,m,Ae);if(console.group("[Blockscape] Apicurio push compare"),console.log("compare version",Ae),console.log("local fingerprint",ne),console.log("registry fingerprint",Ke),console.log("local payload",o[l].data),console.log("registry payload",Ze),console.groupEnd(),ne&&Ke&&ne===Ke){if(!window.confirm("The current registry version is identical to this model. Push anyway?")){R("Push cancelled (content matches the latest registry version).","muted");return}R("Pushing identical content by user choice.","muted")}else Ke?console.log("[Blockscape] Apicurio compare mismatch (proceeding with push)"):R("Unable to compare with registry content (skipping confirmation).","muted")}catch(Ae){console.warn("[Blockscape] unable to compare registry content before push",Ae),R("Skipped comparison with registry (content fetch failed). Proceeding with push.","muted")}const Z=P.useSemver?await Ye(_,E,m,B):null;if(P.useSemver&&!Z)throw new Error("Semantic versioning is enabled but no version could be computed.");const se=encodeURIComponent(E),be=encodeURIComponent(m),He=B?`${_}/groups/${se}/artifacts/${be}/versions`:`${_}/groups/${se}/artifacts`,ge={...M,"Content-Type":"application/json"};Z&&(ge["X-Registry-Version"]=Z,R(`Pushing to Apicurio as version ${Z}…`,"muted"));const fn=B?k(h,{version:Z}):C(m,h,{title:u(o[l]),description:(H=o[l].data)==null?void 0:H.abstract,version:Z}),tn=await fetch(He,{method:"POST",headers:ge,body:JSON.stringify(fn)});if(!tn.ok){let Ae=tn.statusText||"Unknown error";try{const Ze=await tn.text();Ze&&(Ae=Ze.slice(0,400))}catch{}throw new Error(`Registry rejected the push (${tn.status}): ${Ae}`)}let an=null;try{an=await tn.json()}catch{an=null}const ve=(an==null?void 0:an.version)||(an==null?void 0:an.globalId)||"",Fe=B?"Updated":"Created",yn=ve?` (version ${ve})`:"";R(`${Fe} ${m}${yn}`,"success")}catch(B){console.error("[Blockscape] Apicurio push failed",B),R(`Apicurio push failed: ${B.message}`,"error")}finally{re.dataset.loading="false",Be()}}async function Gn(){var Z,se;if(!F||F.dataset.loading==="true")return;if(!ue()){R("Apicurio integration is off. Enable it first.","error");return}if(!we()){R("Enter the registry base URL and group ID before pushing.","error");return}const l=c(),m=l>=0?o[l]:null;if(!m||!m.apicurioVersions||m.apicurioVersions.length<2){R("Series push requires a model with multiple versions.","error");return}const _=ze(m,{seriesName:m.title||m.apicurioArtifactName||u(m)});if(!_){R("Active series needs an id before pushing.","error");return}typeof w=="function"&&w(m,{seriesName:m.title||m.apicurioArtifactName||u(m)});const E=ie(P.baseUrl),h=P.groupId.trim(),M=m.apicurioVersions.map(be=>be.data),H=JSON.stringify(M,null,2),B=We(),ne=le(h);F.dataset.loading="true",F.textContent="Pushing…",F.disabled=!0,R("Pushing series to Apicurio…","muted");try{const be=await ht(E,ne,_,B),He=G(M);if(be)try{const ln=await On(E,ne,_),{data:Un,fingerprint:tt}=await De(E,ne,_,ln);if(console.group("[Blockscape] Apicurio series push compare"),console.log("compare version",ln),console.log("local fingerprint",He),console.log("registry fingerprint",tt),console.log("local payload (series)",M),console.log("registry payload",Un),console.groupEnd(),He&&tt&&He===tt){if(!window.confirm("The current registry version matches this series. Push anyway?")){R("Series push cancelled (content matches latest).","muted");return}R("Pushing identical series by user choice.","muted")}else tt?console.log("[Blockscape] Apicurio compare mismatch (proceeding with series push)"):R("Unable to compare with registry content (skipping confirmation).","muted")}catch(ln){console.warn("[Blockscape] unable to compare registry content before series push",ln),R("Skipped comparison with registry (content fetch failed). Proceeding with series push.","muted")}const ge=P.useSemver?await Ye(E,ne,_,be):null;if(P.useSemver&&!ge)throw new Error("Semantic versioning is enabled but no version could be computed.");const fn=encodeURIComponent(ne),tn=encodeURIComponent(_),an=be?`${E}/groups/${fn}/artifacts/${tn}/versions`:`${E}/groups/${fn}/artifacts`,ve={...B,"Content-Type":"application/json"};ge&&(ve["X-Registry-Version"]=ge,R(`Pushing series to Apicurio as version ${ge}…`,"muted"));const Fe=be?k(H,{version:ge}):C(_,H,{title:m.apicurioArtifactName||((Z=m.data)==null?void 0:Z.title)||_,description:(se=m.data)==null?void 0:se.abstract,version:ge}),yn=await fetch(an,{method:"POST",headers:ve,body:JSON.stringify(Fe)});if(!yn.ok){let ln=yn.statusText||"Unknown error";try{const Un=await yn.text();Un&&(ln=Un.slice(0,400))}catch{}throw new Error(`Registry rejected the series push (${yn.status}): ${ln}`)}let Ae=null;try{Ae=await yn.json()}catch{Ae=null}const Ze=(Ae==null?void 0:Ae.version)||(Ae==null?void 0:Ae.globalId)||"",Ke=be?"Updated":"Created",wn=Ze?` (version ${Ze})`:"";R(`${Ke} ${_} series${wn}`,"success")}catch(be){console.error("[Blockscape] Apicurio series push failed",be),R(`Apicurio series push failed: ${be.message}`,"error")}finally{F.dataset.loading="false",Be()}}async function Rt(){if(!J||J.dataset.loading==="true")return;if(!ue()){R("Enable Apicurio integration to list artifacts.","error");return}if(!we()){R("Enter registry base URL and group ID before listing.","error");return}const l=ie(P.baseUrl),m=P.groupId.trim(),_=le(m),E=[{groupId:m,label:"base"},{groupId:_,label:"series"}];J.dataset.loading="true",J.textContent="Listing…",J.disabled=!0,R("Listing artifacts…","muted"),Q("Contacting registry…");try{const h=We();h.Accept="application/json";const M=[];for(const B of E){const ne=encodeURIComponent(B.groupId),Z=`${l}/groups/${ne}/artifacts?limit=50&offset=0`,se=await fetch(Z,{method:"GET",headers:h});if(!se.ok){let ge=se.statusText||"Unknown error";try{const fn=await se.text();fn&&(ge=fn.slice(0,400))}catch{}console.warn(`[Blockscape] failed to list artifacts for group ${B.groupId} (${se.status}): ${ge}`);continue}const be=await se.json(),He=L(be).filter(ge=>ge&&ge.artifactId);He.forEach(ge=>{ge&&(ge._groupId=B.groupId)}),M.push(...He)}de.clear(),me.clear(),M.forEach(B=>{B!=null&&B.artifactId&&de.set(B.artifactId,B)}),Wn(M);const H=M.length;R(H?`Found ${H} artifact${H===1?"":"s"} across base and series groups.`:"No artifacts found in base/series groups.",H?"success":"muted")}catch(h){console.error("[Blockscape] failed to list artifacts",h),Ve("Unable to list artifacts."),R(`Listing failed: ${h.message}`,"error")}finally{J.dataset.loading="false",Be()}}async function Li(l,m=null){var be,He,ge,fn,tn,an;if(!l)return;if(!ue()){R("Enable Apicurio integration to load artifacts.","error");return}if(!we()){R("Enter registry connection details before loading artifacts.","error");return}const _=ie(P.baseUrl),E=P.groupId.trim(),h=l&&((be=de.get(l))==null?void 0:be._groupId)||E;let M=de.get(l);const H=async()=>{try{const ve=await mn(_,h,l);return ve!=null&&ve.artifactId&&de.set(l,ve),ve}catch(ve){throw console.error("[Blockscape] failed to fetch artifact metadata before loading",ve),ve}};if(!M)try{M=await H()}catch(ve){R(`Failed to fetch artifact metadata: ${ve.message}`,"error");return}const B=me.get(l)||[];let ne="latest",Z="latest";if(m)ne=m,Z=m;else{if(!M||M.version==null)try{M=await H()}catch(ve){R(`Failed to fetch artifact metadata: ${ve.message}`,"error");return}ne=(M==null?void 0:M.version)||"latest",Z=(M==null?void 0:M.version)||"latest"}const se=B.find(ve=>String(ve.version)===String(ne));(se==null?void 0:se.version)!=null&&(Z=se.version),R(`Loading artifact ${l}…`,"muted");try{const ve=await un(_,h,l,ne),Fe=de.get(l)||M||{},yn=Array.isArray(ve);let Ae=null;if(yn){const Ze=ve.map((wn,ln)=>(S(wn,{titleHint:Fe.name||l,idHint:l}),{version:String(ln+1),data:wn,createdOn:(se==null?void 0:se.createdOn)||Fe.createdOn}));Ae={id:q(),title:((ge=(He=Ze[0])==null?void 0:He.data)==null?void 0:ge.title)||Fe.name||l,data:(fn=Ze[0])==null?void 0:fn.data,apicurioArtifactId:l,apicurioArtifactName:Fe.name||"",apicurioVersions:Ze,apicurioActiveVersionIndex:0,isSeries:!0};const Ke=((tn=Fe==null?void 0:Fe.properties)==null?void 0:tn.seriesId)||l;typeof w=="function"&&w(Ae,{seriesName:Ke,fallbackTitle:Ke}),R(`Loaded series artifact ${l}.`,"success")}else{S(ve,{titleHint:Fe.name||l,idHint:l});const Ze={version:Z,data:ve,createdOn:(se==null?void 0:se.createdOn)||Fe.createdOn};Ae={id:q(),title:ve.title||Fe.name||l,data:ve,apicurioArtifactId:l,apicurioArtifactName:Fe.name||"",apicurioVersions:[Ze],apicurioActiveVersionIndex:0};const Ke=(an=Fe==null?void 0:Fe.properties)==null?void 0:an.seriesId;Ke&&typeof w=="function"&&w(Ae,{seriesName:Ke,fallbackTitle:Ke});const wn=Z?` (version ${Z})`:"";R(`Loaded artifact ${l}${wn}.`,"success")}et(l,Ae)}catch(ve){console.error("[Blockscape] failed to load artifact",ve),R(`Failed to load artifact: ${ve.message}`,"error")}}async function Ni(l){}return{hydrateConfig:xe,mount:En,updateAvailability:Be,isEnabled:ue,setEnabled:Pt,onEnabledChange:nn}}function At(o,c){if(typeof o!="function")throw new Error(`[itemEditor] expected ${c} to be a function`)}function Bl(o,{excludeId:c}={}){if(!o)return[];const f=o.split(/[\s,]+/).map(w=>w.trim()).filter(Boolean),S=[];return f.forEach(w=>{c&&w===c||S.includes(w)||S.push(w)}),S}function Dl(o,c,f){if(!c||!f||c===f)return;((o==null?void 0:o.categories)||[]).forEach(w=>{(w.items||[]).forEach(N=>{Array.isArray(N.deps)&&(N.deps=N.deps.map(j=>j===c?f:j))})}),Array.isArray(o==null?void 0:o.links)&&o.links.forEach(w=>{w.from===c&&(w.from=f),w.to===c&&(w.to=f)})}function Ol({findItemAndCategoryById:o,collectAllItemIds:c,updateItemReferences:f,loadActiveIntoEditor:S,rebuildFromActive:w,select:N,onSelectionRenamed:j}={}){At(o,"findItemAndCategoryById"),At(c,"collectAllItemIds"),At(f,"updateItemReferences"),At(S,"loadActiveIntoEditor"),At(w,"rebuildFromActive"),At(N,"select");const u={wrapper:null,fields:{},categoryId:null,itemId:null,modelData:null};function G(V){if(u.fields.errorEl){if(!V){u.fields.errorEl.hidden=!0,u.fields.errorEl.textContent="";return}u.fields.errorEl.hidden=!1,u.fields.errorEl.textContent=V}}function q(){u.wrapper&&(u.wrapper.hidden=!0,u.wrapper.setAttribute("aria-hidden","true"),G(""),u.categoryId=null,u.itemId=null,u.modelData=null,document.body.classList.remove("item-editor-open"))}function re(){u.wrapper&&(u.wrapper.hidden=!1,u.wrapper.setAttribute("aria-hidden","false"),document.body.classList.add("item-editor-open"),requestAnimationFrame(()=>{var V,W;(V=u.fields.nameInput)==null||V.focus(),(W=u.fields.nameInput)==null||W.select()}))}function J(V){var ie;if(!u.modelData||!u.categoryId||!u.itemId)throw new Error("No item loaded.");const Y=(((ie=u.modelData)==null?void 0:ie.categories)||[]).find(le=>le.id===u.categoryId);if(!Y)throw new Error("Category not found.");Y.items=Y.items||[];const F=Y.items.find(le=>le.id===u.itemId);if(!F)throw new Error("Item not found.");const X=(V.id||"").trim();if(!X)throw new Error("ID is required.");const ke=c(u.modelData);if(X!==F.id&&ke.has(X))throw new Error("Another item already uses that ID.");F.id=X;const P=(V.name||"").trim();F.name=P||F.id;const de=(V.logo||"").trim();if(de?F.logo=de:delete F.logo,V.externalFlag&&!V.external)F.external=!0;else{const le=(V.external??"").toString().trim();le?F.external=le:delete F.external}const me=(V.color||"").trim();return me?F.color=me:delete F.color,F.deps=Array.isArray(V.deps)?V.deps:[],F.id!==V.originalId&&typeof j=="function"&&j(V.originalId,F.id),f(u.modelData,V.originalId,F.id),S(),w(),N(F.id),F.id}function ce(){if(!u.fields||!u.fields.idInput)return!1;const V=(u.fields.idInput.value||"").trim(),W={originalId:u.itemId,id:V,name:u.fields.nameInput.value||"",logo:u.fields.logoInput.value||"",external:u.fields.externalInput.value||"",externalFlag:u.fields.externalFlagInput.checked,color:u.fields.colorInput.value||"",deps:Bl(u.fields.depsInput.value,{excludeId:V})};try{return J(W),q(),!0}catch(Y){return console.warn("[itemEditor] item edit failed",Y),G((Y==null?void 0:Y.message)||"Unable to save item."),!1}}function pe(){if(u.wrapper)return u.wrapper;const V=document.createElement("div");V.className="item-editor-modal",V.hidden=!0,V.setAttribute("role","dialog"),V.setAttribute("aria-modal","true");const W=document.createElement("div");W.className="item-editor-modal__backdrop",V.appendChild(W);const Y=document.createElement("div");Y.className="item-editor",V.appendChild(Y);const F=document.createElement("div");F.className="item-editor__header";const X=document.createElement("h2");X.className="item-editor__title",X.textContent="Edit item";const ke=document.createElement("button");ke.type="button",ke.className="item-editor__close",ke.setAttribute("aria-label","Close item editor"),ke.textContent="×",F.appendChild(X),F.appendChild(ke),Y.appendChild(F);const P=document.createElement("form");P.className="item-editor__form",Y.appendChild(P);const de=document.createElement("div");de.className="item-editor__meta",de.innerHTML='<div class="item-editor__meta-label">Category</div><div class="item-editor__meta-value"></div>',P.appendChild(de);const me=document.createElement("div");me.className="item-editor__error",me.hidden=!0,P.appendChild(me);const ie=(C,k,Ge)=>{const Ce=document.createElement("label");Ce.className="item-editor__field";const U=document.createElement("span");if(U.className="item-editor__label",U.textContent=C,Ce.appendChild(U),k.classList.add("item-editor__control"),Ce.appendChild(k),Ge){const he=document.createElement("div");he.className="item-editor__hint",he.textContent=Ge,Ce.appendChild(he)}return Ce},le=document.createElement("input");le.type="text",le.required=!0,P.appendChild(ie("ID",le,"Unique identifier used for links and dependencies."));const we=document.createElement("input");we.type="text",P.appendChild(ie("Name",we,"Visible label shown on the tile."));const ue=document.createElement("input");ue.type="url",ue.inputMode="url",ue.placeholder="https://…",P.appendChild(ie("Logo URL",ue,"Optional image URL."));const ye=document.createElement("input");ye.type="url",ye.inputMode="url",ye.placeholder="https://…",P.appendChild(ie("External link",ye,"Shown with ↗ icon and in preview."));const nn=document.createElement("div");nn.className="item-editor__checkbox";const je=document.createElement("label");je.className="item-editor__checkbox-row";const R=document.createElement("input");R.type="checkbox";const Q=document.createElement("span");Q.textContent="Mark as external without link";const Ve=document.createElement("div");Ve.className="item-editor__hint",Ve.textContent="Keeps dashed border even without a URL.",je.appendChild(R),je.appendChild(Q),nn.appendChild(je),nn.appendChild(Ve),P.appendChild(nn);const Be=document.createElement("input");Be.type="text",Be.placeholder="#2563eb",P.appendChild(ie("Color",Be,"Optional badge color (hex or CSS color)."));const $e=document.createElement("textarea");$e.rows=2,$e.placeholder="Comma or space separated ids",P.appendChild(ie("Dependencies",$e,"Use item IDs, separated by commas or spaces."));const qe=document.createElement("div");qe.className="item-editor__actions";const xe=document.createElement("button");xe.type="button",xe.className="pf-v5-c-button pf-m-tertiary",xe.textContent="Cancel";const We=document.createElement("button");return We.type="submit",We.className="pf-v5-c-button pf-m-primary",We.textContent="Save",qe.appendChild(xe),qe.appendChild(We),P.appendChild(qe),u.wrapper=V,u.fields={idInput:le,nameInput:we,logoInput:ue,externalInput:ye,externalFlagInput:R,colorInput:Be,depsInput:$e,categoryValue:de.querySelector(".item-editor__meta-value"),errorEl:me},xe.addEventListener("click",q),ke.addEventListener("click",q),W.addEventListener("click",q),P.addEventListener("submit",C=>{C.preventDefault(),ce()}),document.addEventListener("keydown",C=>{C.key==="Escape"&&!V.hidden&&(C.preventDefault(),C.stopPropagation(),q())}),document.body.appendChild(V),V}function Re(V){const W=o(V);return W?(pe(),u.categoryId=W.category.id,u.itemId=W.item.id,u.modelData=W.modelData,u.fields.categoryValue.textContent=W.category.title||W.category.id,u.fields.idInput.value=W.item.id||"",u.fields.nameInput.value=W.item.name||"",u.fields.logoInput.value=W.item.logo||"",u.fields.externalInput.value=typeof W.item.external=="string"?W.item.external:"",u.fields.externalFlagInput.checked=W.item.external===!0,u.fields.colorInput.value=W.item.color||"",u.fields.depsInput.value=Array.isArray(W.item.deps)?W.item.deps.join(", "):"",G(""),N(W.item.id),re(),!0):!1}return{open:Re,hide:q,isOpen:()=>!!u.wrapper&&!u.wrapper.hidden}}function Ts(o,c="series"){return(o||c).trim().toLowerCase().replace(/[^a-z0-9._-]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")||c}function ut(o,c="series"){const f=Ts(o,c).replace(/\./g,"-");return f.replace(/-series$/i,"").replace(/-+$/,"")||f||Ts(c,"series")}function Os(o,{seriesName:c,fallbackTitle:f="unknown"}={}){var u,G;const w=[o==null?void 0:o.seriesId,(u=o==null?void 0:o.data)==null?void 0:u.seriesId,o==null?void 0:o.apicurioArtifactId,c,o==null?void 0:o.title,o==null?void 0:o.apicurioArtifactName,(G=o==null?void 0:o.data)==null?void 0:G.title,f].map(q=>(q??"").toString().trim()),N=w.findIndex(Boolean),j=N!==-1?w[N]:"";return j?(console.log("[Series] deriveSeriesId: picked base",{base:j,sourceIndex:N,candidates:w}),ut(j,f)):(console.log("[Series] deriveSeriesId: no base found; fallback",{fallbackTitle:f}),null)}function gn(o,{seriesName:c,fallbackTitle:f="unknown"}={}){if(!o||typeof o!="object")return null;const S=Os(o,{seriesName:c,fallbackTitle:f});return S?(o.seriesId=S,o.apicurioArtifactId||(o.apicurioArtifactId=S),S):null}function Tt(o,c={}){var w,N;if(!o)return null;const f=o.isSeries||((w=o.apicurioVersions)==null?void 0:w.length)>1||o.seriesId||((N=o.data)==null?void 0:N.seriesId)||o.apicurioArtifactId;if(!f&&!c.force)return null;const S=Os(o,c);return S||(f?ut(c.fallbackTitle||"unknown"):null)}const Ii=typeof import.meta<"u"&&"./"||"",xi=["comms.bs","planets.bs","styleguide.bs","blockscape-features.bs"],Us=Object.assign({"../public/APIs.bs":cl,"../public/NFR.bs":dl,"../public/blockscape-features.bs":pl,"../public/comms.bs":ml,"../public/deploy.bs":ul,"../public/network/anycast-delivery.bs":fl,"../public/network/caching-series.bs":gl,"../public/network/congestion-control-algorithms-series.bs":hl,"../public/network/core-transport-protocols-series.bs":bl,"../public/network/geodns-edns-client-subnet.bs":vl,"../public/network/health-checks.bs":yl,"../public/network/ip-fragmentation-path-mtu-discovery.bs":wl,"../public/network/l4-load-balancing.bs":kl,"../public/network/l7-load-balancing.bs":Sl,"../public/network/observability-troubleshooting-concepts.bs":Cl,"../public/network/recursive-vs-authoritative-dns.bs":El,"../public/network/reverse-proxying.bs":_l,"../public/network/tcp-data-delivery.bs":Il,"../public/network/throughput-latency-congestion-series.bs":xl,"../public/network/tls-handshake-secure-delivery.bs":Al,"../public/network/udp-data-delivery.bs":Tl,"../public/planets.bs":Ll,"../public/styleguide.bs":Nl,"../public/user-capabilities-models.bs":Ml,"../public/wardley.bs":Pl}),pt="__default__";function Ti(o){return(o||"").replace(/^\.?\/+/,"").replace(/^public\//,"").replace(/^\.\.\/public\//,"")}function Ul(o){if(!o)return"";const c=Ti(o);return Ii?Ii.endsWith("/")?`${Ii}${c}`:`${Ii}/${c}`:c}function Vl(o){const c=Ti(o);return Us[`../public/${c}`]??null}function $l(){const o=new Map;return Object.keys(Us).forEach(c=>{const S=Ti(c.replace(/^\.\.\//,"")).split("/");if(S.length<=1)return;const w=S.pop(),N=S.join("/");o.has(N)||o.set(N,[]),o.get(N).push({filename:w,relativePath:`${N}/${w}`})}),o.forEach(c=>c.sort((f,S)=>f.filename.localeCompare(S.filename))),o}function Hl(){console.log("[Blockscape] init");let o="";const c=document.getElementById("jsonBox"),f=document.querySelector(".blockscape-json-panel"),S=document.getElementById("app"),w=document.getElementById("overlay"),N=document.getElementById("tabTooltip"),j=document.getElementById("modelList"),u=document.getElementById("itemPreview"),G=document.getElementById("urlForm"),q=document.getElementById("urlInput"),re=document.getElementById("loadUrl"),J=u.querySelector(".item-preview__title"),ce=u.querySelector(".item-preview__body"),pe=u.querySelector(".item-preview__actions"),Re=u.querySelector(".item-preview__close"),V=document.getElementById("downloadJson"),W=document.getElementById("shareModel"),Y=document.getElementById("createVersion"),F=document.getElementById("openInEditor"),X=document.getElementById("copyJson"),ke=document.getElementById("copySeries"),P=document.getElementById("pasteJson"),de=document.getElementById("helpButton"),me=document.getElementById("newPanelButton"),ie=document.getElementById("shortcutHelp"),le=document.getElementById("shortcutHelpList"),we=document.getElementById("shortcutHelpClose"),ue=document.getElementById("shortcutHelpBackdrop"),ye=document.getElementById("newPanel"),nn=document.getElementById("newPanelClose"),je=document.getElementById("newPanelBackdrop"),R=document.getElementById("search"),Q=document.getElementById("searchResults"),Ve=document.getElementById("modelSets"),Be="blockscape:editorPayload",$e="blockscape:editorTransfer",qe=document.title,xe=document.getElementById("seed"),We=$l();o=((xe==null?void 0:xe.textContent)||(xe==null?void 0:xe.innerHTML)||"").trim(),o&&c&&(c.value=o);let C=[],k=-1,Ge=pt;const Ce=Rl({models:C,getActiveIndex:()=>k,setActive:on,ensureModelMetadata:at,getModelId:en,getSeriesId:Tt,ensureSeriesId:gn,getModelTitle:Oe,computeJsonFingerprint:ci,uid:it});let U=null,he=new Map,ze=new Map,L=null,z=null,ee=null,fe=null,mn=!0,hn=!1,un=0,De={x:0,y:0},On="map",Ye=null,ae=null,Le=!1,Pt=null;const oi=2e3;let Hn=null,bn=null,Cn=null,En=null,Wn=null,Zn=null,vn=null,ft="",gt=!1,et=null,ht=null,nt=null,Gn=[],Rt=null;const Li=30,Ni=1e3,l="blockscape:hoverScale",m=1.5,_=1,E=2.5,h="blockscape:titleWrap",M="blockscape:titleHoverWidth",H="blockscape:titleHoverTextPortion",B="wrap",ne=1.3,Z=1,se=1.6,be=.25,He=0,ge=.6,fn="blockscape:tileCompactness",tn=1,an=.75,ve=1.25,Fe="blockscape:obsidianLinksEnabled",yn="blockscape:obsidianLinkMode",Ae="blockscape:obsidianVault",Ze="title",Ke="id",wn=Ze;let ln=m,Un=tn,tt=B,bt=ne,Bt=be,Dt=!1,ri=wn,Ot="";const Na="blockscape:seriesNavDoubleClickMs",Ut=900,Ma=300,Pa=4e3;let vt=Ut;Ce.hydrateConfig(),Qs(),Ys(),ao(),eo(),to(),ro(),uo(),po(),go(),sn();function it(){return Math.random().toString(36).slice(2,10)}function Vs(e){const n=new TextEncoder().encode(e);let t="";return n.forEach(i=>{t+=String.fromCharCode(i)}),btoa(t)}function $s(e){const n=atob(e),t=new Uint8Array(n.length);for(let i=0;i<n.length;i++)t[i]=n.charCodeAt(i);return new TextDecoder().decode(t)}function Hs(e){return Vs(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/g,"")}function Fs(e){let n=e.replace(/-/g,"+").replace(/_/g,"/");const t=n.length%4;return t&&(n+="=".repeat(4-t)),$s(n)}function js(e,n){const t=new Blob([n],{type:"application/json"}),i=URL.createObjectURL(t),a=document.createElement("a");a.href=i,a.download=e,a.click(),URL.revokeObjectURL(i)}async function Ra(e){var n;if(!((n=navigator.clipboard)!=null&&n.writeText))return!1;try{return await navigator.clipboard.writeText(e),!0}catch(t){return console.warn("[Blockscape] clipboard write failed",t),!1}}async function qs(){var e;if(!((e=navigator.clipboard)!=null&&e.readText))throw new Error("Clipboard read not supported");return navigator.clipboard.readText()}function Vt(e){return(e||"blockscape").trim().toLowerCase().replace(/[^a-z0-9._-]+/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,"")||"blockscape"}function Ws(e){return Number.isFinite(e)?Math.min(E,Math.max(_,e)):m}function sn(){if(!S)return;const e=!!L||!!z;S.classList.toggle("blockscape-has-selection",e)}function $t(e){return ln=Ws(e),document.documentElement.style.setProperty("--blockscape-tile-hover-scale",ln),ln}function Gs(e){return Number.isFinite(e)?Math.min(ve,Math.max(an,e)):tn}function Ht(e){return Un=Gs(e),document.documentElement.style.setProperty("--blockscape-tile-compactness",Un),Un}function Js(e){return Number.isFinite(e)?Math.min(se,Math.max(Z,e)):ne}function Ft(e){return bt=Js(e),document.documentElement.style.setProperty("--blockscape-title-hover-width-multiplier",bt),bt}function zs(e){return Number.isFinite(e)?Math.min(ge,Math.max(He,e)):be}function jt(e){return Bt=zs(e),document.documentElement.style.setProperty("--blockscape-tile-hover-text-portion",Bt),Bt}function qt(e){const n=e==="nowrap"?"nowrap":"wrap";tt=n;const t=n==="nowrap"?"nowrap":"normal",i=n==="nowrap"?"nowrap":"normal";return document.documentElement.style.setProperty("--blockscape-title-white-space",t),document.documentElement.style.setProperty("--blockscape-title-text-wrap",i),n}function Ks(e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(l,String(e))}catch(n){console.warn("[Blockscape] failed to persist hover scale",n)}}function Qs(){if(typeof window>"u"||!window.localStorage)return $t(m);try{const e=window.localStorage.getItem(l);if(!e)return $t(m);const n=parseFloat(e);return $t(n)}catch(e){return console.warn("[Blockscape] failed to read hover scale",e),$t(m)}}function Xs(e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(fn,String(e))}catch(n){console.warn("[Blockscape] failed to persist tile compactness",n)}}function Ys(){if(typeof window>"u"||!window.localStorage)return Ht(tn);try{const e=window.localStorage.getItem(fn);if(!e)return Ht(tn);const n=parseFloat(e);return Ht(n)}catch(e){return console.warn("[Blockscape] failed to read tile compactness",e),Ht(tn)}}function Zs(e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(M,String(e))}catch(n){console.warn("[Blockscape] failed to persist title hover width",n)}}function eo(){if(typeof window>"u"||!window.localStorage)return Ft(ne);try{const e=window.localStorage.getItem(M);if(!e)return Ft(ne);const n=parseFloat(e);return Ft(n)}catch(e){return console.warn("[Blockscape] failed to read title hover width",e),Ft(ne)}}function no(e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(H,String(e))}catch(n){console.warn("[Blockscape] failed to persist title text zoom",n)}}function to(){if(typeof window>"u"||!window.localStorage)return jt(be);try{const e=window.localStorage.getItem(H);if(!e)return jt(be);const n=parseFloat(e);return jt(n)}catch(e){return console.warn("[Blockscape] failed to read title text zoom",e),jt(be)}}function io(e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(h,e)}catch(n){console.warn("[Blockscape] failed to persist title wrap mode",n)}}function ao(){if(typeof window>"u"||!window.localStorage)return qt(B);try{const e=window.localStorage.getItem(h);return qt(e||B)}catch(e){return console.warn("[Blockscape] failed to read title wrap mode",e),qt(B)}}function so(e){return Number.isFinite(e)?Math.min(Pa,Math.max(Ma,e)):Ut}function Wt(e){return vt=so(e),vt}function oo(e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(Na,String(e))}catch(n){console.warn("[Blockscape] failed to persist series double-click wait",n)}}function ro(){if(typeof window>"u"||!window.localStorage)return Wt(Ut);try{const e=window.localStorage.getItem(Na);if(!e)return Wt(Ut);const n=parseInt(e,10);return Wt(n)}catch(e){return console.warn("[Blockscape] failed to read series double-click wait",e),Wt(Ut)}}function lo(e){return e===Ke?Ke:Ze}function Gt(e){return ri=lo(e),ri}function co(e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(yn,e)}catch(n){console.warn("[Blockscape] failed to persist Obsidian link mode",n)}}function po(){if(typeof window>"u"||!window.localStorage)return Gt(wn);try{const e=window.localStorage.getItem(yn);return Gt(e||wn)}catch(e){return console.warn("[Blockscape] failed to read Obsidian link mode",e),Gt(wn)}}function Jt(e){return Dt=!!e,Dt}function mo(e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(Fe,e?"1":"0")}catch(n){console.warn("[Blockscape] failed to persist Obsidian toggle",n)}}function uo(){if(typeof window>"u"||!window.localStorage)return Jt(!1);try{const e=window.localStorage.getItem(Fe);return e==null?Jt(!1):Jt(e==="1")}catch(e){return console.warn("[Blockscape] failed to read Obsidian toggle",e),Jt(!1)}}function zt(e){return Ot=(e??"").toString().trim(),Ot}function fo(e){if(!(typeof window>"u"||!window.localStorage))try{window.localStorage.setItem(Ae,e)}catch(n){console.warn("[Blockscape] failed to persist Obsidian vault",n)}}function go(){if(typeof window>"u"||!window.localStorage)return zt("");try{const e=window.localStorage.getItem(Ae);return zt(e||"")}catch(e){return console.warn("[Blockscape] failed to read Obsidian vault",e),zt("")}}function ho(e){return typeof window>"u"||typeof window.prompt!="function"?null:(window.prompt("Name this series",e)||"").trim()||null}function bo(e,n="Pasted"){const t=Array.isArray(e)?e:[];if(!t.length)return`${n} series`;const i=t.find(s=>s&&typeof s=="object")||t[0];return((i==null?void 0:i.title)??"").toString().trim()||`${n} series`}function li(e,n){!n||!e||typeof e!="object"||(e.seriesId=n,e.apicurioArtifactId=n,e.id=n,e.data&&typeof e.data=="object"&&(e.data.seriesId=n),Array.isArray(e.apicurioVersions)&&e.apicurioVersions.forEach(t=>{t!=null&&t.data&&typeof t.data=="object"&&(t.data.seriesId=n)}))}function vo(e){if(!e||typeof window>"u"||typeof window.prompt!="function")return!1;const n=(e.title??e.apicurioArtifactName??"").toString().trim()||Pi(e,"Series"),t=window.prompt("Series name",n);if(t==null)return!1;const i=t.trim();if(!i)return!1;const a=Tt(e,{seriesName:i,fallbackTitle:i})||ut(i,i),s=window.prompt("Series ID (used for linking and downloads)",a);if(s==null)return!1;const r=ut(s.trim()||i,i||"series");return e.title=i,e.apicurioArtifactName=i,li(e,r),!0}function Mi(e){return e===null||typeof e!="object"?JSON.stringify(e):Array.isArray(e)?`[${e.map(i=>Mi(i)).join(",")}]`:`{${Object.keys(e).sort().map(i=>`${JSON.stringify(i)}:${Mi(e[i])}`).join(",")}}`}function Ba(e){try{return Mi(e)}catch{return""}}function ci(e){try{const n=typeof e=="string"?JSON.parse(e):e,t=Ba(n);if(t)return t}catch(n){console.warn("[Blockscape] fingerprint parse failed (first pass)",n)}try{const n=JSON.parse(JSON.stringify(e)),t=Ba(n);if(t)return t}catch(n){console.warn("[Blockscape] fingerprint failed for value",n)}try{return JSON.stringify(e)||""}catch{return""}}const yo=[{keys:[["Arrow Left"],["Arrow Right"]],description:"Move selection to the previous or next item in the current category."},{keys:[["Arrow Up"],["Arrow Down"]],description:"Move up/down through items, pausing on category headers before entering the next category at the same relative position."},{keys:[["Cmd/Ctrl","Arrow Up"],["Cmd/Ctrl","Arrow Down"]],description:"Reorder the selected category (or the category that holds the selected item)."},{keys:[["Shift","Arrow Left"],["Shift","Arrow Right"]],description:"Reorder the selected item inside its category."},{keys:[["Shift","Arrow Up"],["Shift","Arrow Down"]],description:"Move the selected item to the previous or next category."},{keys:[["Cmd/Ctrl","Arrow Left"],["Cmd/Ctrl","Arrow Right"]],description:"Switch to the previous or next map when viewing a series."},{keys:[["Cmd/Ctrl","Z"]],description:"Undo the last deleted tile or category."},{keys:[["Cmd/Ctrl","S"]],description:"Download the active model JSON (series if multiple versions are open)."},{keys:[["Cmd/Ctrl","V"]],description:"Append JSON models from the clipboard when focus is outside inputs."},{keys:[["Enter"],["Space"]],description:"Activate a focused tile, same as clicking it."},{keys:[["F2"]],description:"Edit the selected item; when a category (not an item) is selected, open the category editor."},{keys:[["Delete"]],description:"Delete the selected item or category (use Cmd/Ctrl+Z to undo)."},{keys:[["Insert"]],description:"Add a new category at the bottom of the map."},{keys:[["Escape"]],description:"Unselect item or close the open preview popover."}];function at(e,{titleHint:n="Untitled Model",idHint:t}={}){if(!e||typeof e!="object")return e;const i=(e.title??"").toString().trim();e.title=i||n||"Untitled Model";const a=(e.id??"").toString().trim();if(a)e.id=a;else{const s=t||e.title||n||"model",r=Vt(s).replace(/\./g,"-");e.id=r||`model-${it()}`}return typeof e.abstract!="string"&&(e.abstract=e.abstract==null?"":String(e.abstract)),e}function wo(e){return JSON.parse(JSON.stringify(e))}function Oe(e,n="Untitled Model"){var i;return e&&(((i=e.data)==null?void 0:i.title)??e.title??"").toString().trim()||n}function Pi(e,n="Untitled Model"){var i;if(((i=e==null?void 0:e.apicurioVersions)==null?void 0:i.length)>1||(e==null?void 0:e.isSeries)){const a=((e==null?void 0:e.title)??"").toString().trim()||((e==null?void 0:e.apicurioArtifactName)??"").toString().trim();if(a)return a;const s=en(e);return s?`${s} series`:n}return Oe(e,n)}function en(e){var a;const n=Tt(e);if(n)return n;const t=(a=e==null?void 0:e.data)==null?void 0:a.id;return t&&t.toString().trim()||null}function Da(e){var d;if(e<0||e>=C.length||!c)return!0;const n=C[e],t=(c.value||"").trim();if(!t)return!0;let i;try{i=JSON.parse(t)}catch{return alert("Current JSON is invalid. Fix it before switching versions."),!1}at(i,{titleHint:Oe(n),idHint:en(n)});const a=ci(n.data),s=ci(i);if(a===s)return!0;n.data=i;const r=rt(n);return r>=0&&((d=n.apicurioVersions)!=null&&d[r])&&(n.apicurioVersions[r].data=i),!0}function Oa(e){const n=new Set;return((e==null?void 0:e.categories)||[]).forEach(t=>(t.items||[]).forEach(i=>{i!=null&&i.id&&n.add(i.id)})),n}function Ua(e){if(k<0||!e)return null;const n=C[k].data,t=(n==null?void 0:n.categories)||[];for(const i of t){const s=(i.items||[]).find(r=>r.id===e);if(s)return{category:i,item:s,modelData:n}}return null}function ko(e,n){const t=Oa(n);let i=Vt(e||"item");if(!t.has(i))return i;const a=()=>it().slice(0,4);for(;t.has(i);)i=`${Vt(e||"item")}-${a()}`;return i}function So(e="category",n){const t=(n==null?void 0:n.categories)||[],i=Vt(e||"category"),a=d=>t.some(p=>p.id===d);let s=i||`category-${it()}`;if(!a(s))return s;let r=t.length+1;for(;a(`${i}-${r}`);)r+=1;return`${i}-${r}`}const st=Ol({findItemAndCategoryById:Ua,collectAllItemIds:Oa,updateItemReferences:Dl,loadActiveIntoEditor:dn,rebuildFromActive:cn,select:e=>pn(e),onSelectionRenamed:(e,n)=>{var t;L===e&&(L=n,sn()),((t=Ye==null?void 0:Ye.item)==null?void 0:t.id)===e&&(Ye.item.id=n)}});function Co({getActiveModelData:e,loadActiveIntoEditor:n,rebuildFromActive:t,selectCategory:i,onCategoryRenamed:a}){const s={wrapper:null,fields:{},categoryId:null,modelData:null},r=x=>{if(s.fields.errorEl){if(!x){s.fields.errorEl.hidden=!0,s.fields.errorEl.textContent="";return}s.fields.errorEl.hidden=!1,s.fields.errorEl.textContent=x}},d=()=>{s.wrapper&&(s.wrapper.hidden=!0,s.wrapper.setAttribute("aria-hidden","true"),r(""),s.categoryId=null,s.modelData=null,document.body.classList.remove("category-editor-open"))},p=()=>{s.wrapper&&(s.wrapper.hidden=!1,s.wrapper.setAttribute("aria-hidden","false"),document.body.classList.add("category-editor-open"),requestAnimationFrame(()=>{var x,$;(x=s.fields.titleInput)==null||x.focus(),($=s.fields.titleInput)==null||$.select()}))},g=()=>{if(!s.modelData||!s.categoryId)throw new Error("No category loaded.");const x=s.modelData.categories||[],$=x.find(Te=>Te.id===s.categoryId);if(!$)throw new Error("Category not found.");const te=(s.fields.idInput.value||"").trim();if(!te)throw new Error("ID is required.");const Ee=(s.fields.titleInput.value||"").trim();if(x.some(Te=>Te.id===te&&Te.id!==$.id))throw new Error("Another category already uses that ID.");const Ie=$.id;return $.id=te,$.title=Ee||$.id,Ie!==te&&typeof a=="function"&&a(Ie,te),n(),t(),i(te,{scrollIntoView:!0}),!0},b=()=>{try{return g(),d(),!0}catch(x){return console.warn("[CategoryEditor] save failed",x),r((x==null?void 0:x.message)||"Unable to save category."),!1}},A=()=>{if(s.wrapper)return s.wrapper;const x=document.createElement("div");x.className="item-editor-modal category-editor-modal",x.hidden=!0,x.setAttribute("role","dialog"),x.setAttribute("aria-modal","true");const $=document.createElement("div");$.className="item-editor-modal__backdrop",x.appendChild($);const te=document.createElement("div");te.className="item-editor",x.appendChild(te);const Ee=document.createElement("div");Ee.className="item-editor__header";const Ne=document.createElement("h2");Ne.className="item-editor__title",Ne.textContent="Edit category";const Ie=document.createElement("button");Ie.type="button",Ie.className="item-editor__close",Ie.setAttribute("aria-label","Close category editor"),Ie.textContent="×",Ee.appendChild(Ne),Ee.appendChild(Ie),te.appendChild(Ee);const Te=document.createElement("form");Te.className="item-editor__form",te.appendChild(Te);const _n=document.createElement("div");_n.className="item-editor__meta",_n.innerHTML='<div class="item-editor__meta-label">Category</div><div class="item-editor__meta-value"></div>',Te.appendChild(_n);const Me=document.createElement("div");Me.className="item-editor__error",Me.hidden=!0,Te.appendChild(Me);const Pe=(Sn,Je,_t)=>{const An=document.createElement("label");An.className="item-editor__field";const ct=document.createElement("span");if(ct.className="item-editor__label",ct.textContent=Sn,An.appendChild(ct),Je.classList.add("item-editor__control"),An.appendChild(Je),_t){const ei=document.createElement("div");ei.className="item-editor__hint",ei.textContent=_t,An.appendChild(ei)}return An},In=document.createElement("input");In.type="text",Te.appendChild(Pe("Title",In,"Display label shown in the map."));const lt=document.createElement("input");lt.type="text",lt.required=!0,Te.appendChild(Pe("ID",lt,"Unique identifier for this category (used in URLs and references)."));const Qn=document.createElement("div");Qn.className="item-editor__actions";const xn=document.createElement("button");xn.type="submit",xn.className="item-editor__action item-editor__action--primary",xn.textContent="Save";const $n=document.createElement("button");return $n.type="button",$n.className="item-editor__action",$n.textContent="Cancel",Qn.appendChild(xn),Qn.appendChild($n),Te.appendChild(Qn),Te.addEventListener("submit",Sn=>{Sn.preventDefault(),b()}),$n.addEventListener("click",d),Ie.addEventListener("click",d),$.addEventListener("click",d),x.addEventListener("keydown",Sn=>{Sn.key==="Escape"&&(Sn.preventDefault(),d())}),document.body.appendChild(x),s.wrapper=x,s.fields={titleInput:In,idInput:lt,errorEl:Me,metaLabel:_n.querySelector(".item-editor__meta-value")},x};return{open:x=>{if(!x||!A())return!1;const te=e(),Ne=((te==null?void 0:te.categories)||[]).find(Ie=>Ie.id===x);return Ne?(s.categoryId=Ne.id,s.modelData=te,s.fields.metaLabel.textContent=Ne.title||Ne.id||"Category",s.fields.titleInput.value=Ne.title||Ne.id||"",s.fields.idInput.value=Ne.id||"",r(""),p(),!0):!1},hide:d,isOpen:()=>!!s.wrapper&&s.wrapper.hidden===!1}}const Eo=Co({getActiveModelData:()=>{var e;return(e=C[k])==null?void 0:e.data},loadActiveIntoEditor:dn,rebuildFromActive:cn,selectCategory:(e,n={})=>Vn(e,n),onCategoryRenamed:(e,n)=>{z===e&&(z=n,sn())}});function di(e,{versionLabel:n="1",createdOn:t}={}){if(!e)return e;if(Array.isArray(e.apicurioVersions)&&e.apicurioVersions.length)return e.apicurioActiveVersionIndex==null&&(e.apicurioActiveVersionIndex=0),!e.data&&e.apicurioVersions[e.apicurioActiveVersionIndex]&&(e.data=e.apicurioVersions[e.apicurioActiveVersionIndex].data),e;const i={version:n,data:e.data,createdOn:t||new Date().toISOString()};e.apicurioVersions=[i],e.apicurioActiveVersionIndex=0;const a=e.title||Oe(e);return gn(e,{seriesName:a,fallbackTitle:a}),e.isSeries=!0,e}function Fn(e,{versionLabel:n,createdOn:t}={}){var p,g,b;if(e!=null&&e.isSeries||((p=e==null?void 0:e.apicurioVersions)==null?void 0:p.length)>1){const A=e.title||Oe(e);gn(e,{seriesName:A,fallbackTitle:A})}const i=en(e);if(!i)return di(e,{versionLabel:n||"1",createdOn:t}),C.push(e),C.length-1;const a=C.findIndex(A=>en(A)===i);if(a===-1)return di(e,{versionLabel:n||"1",createdOn:t}),C.push(e),C.length-1;const s=C[a];if(!Array.isArray(s.apicurioVersions)||!s.apicurioVersions.length){s.apicurioVersions=[{version:"1",data:s.data,createdOn:(b=(g=s.apicurioVersions)==null?void 0:g[0])==null?void 0:b.createdOn}],s.apicurioActiveVersionIndex=0;const A=s.title||Oe(s);gn(s,{seriesName:A,fallbackTitle:A})}const r=String(s.apicurioVersions.length+1);s.apicurioVersions.push({version:r,data:e.data,createdOn:t||new Date().toISOString()}),s.apicurioActiveVersionIndex=s.apicurioVersions.length-1,s.data=e.data,s.title=Oe(e)||s.title,s.isSeries=!0;const d=s.title||Oe(s);return gn(s,{seriesName:d,fallbackTitle:d}),a}function Va({versionLabel:e}={}){var r;if(k<0||!C[k])throw new Error("Load or select a model before creating a version.");const n=C[k];di(n,{versionLabel:"1"});let t;try{t=wo(n.data)}catch(d){throw console.warn("[Blockscape] failed to clone active model for versioning",d),new Error("Could not copy the current model.")}at(t,{titleHint:Oe(n),idHint:en(n)||Tt(n)});const a={version:e||String((((r=n.apicurioVersions)==null?void 0:r.length)||0)+1),data:t,createdOn:new Date().toISOString()};n.apicurioVersions.push(a),n.apicurioActiveVersionIndex=n.apicurioVersions.length-1,n.data=t,n.isSeries=!0;const s=n.title||Oe(n);return gn(n,{seriesName:s,fallbackTitle:s}),k}function pi(){const e=k>=0&&C[k]?C[k]:null,n=en(e);document.title=n?`${n}-blockscape`:qe}function Ri(e){if(!e)return null;const n=e.apicurioVersions;if(!Array.isArray(n)||n.length<=1)return null;const t=e.title||e.apicurioArtifactName||Oe(e);return gn(e,{seriesName:t,fallbackTitle:t}),n.map(i=>i&&typeof i=="object"&&"data"in i?i.data:i)}function _o(){const e=C[k],n=Ri(e);if(!n)return null;try{return JSON.stringify(n,null,2)}catch(t){return console.warn("[Blockscape] failed to stringify series",t),null}}function $a(e="shortcut",n=!1){const t=c.value||"";if(!t.trim())return console.warn("[Blockscape] download ignored: JSON box is empty."),!1;const i=C[k],a=n?Ri(i):null,s=!!a,r=s?JSON.stringify(a,null,2):t,d=Tt(i),p=en(i),g=d||p||Oe(i,"blockscape"),b=s?"-series":"",A=`${Vt(g)}${b}.bs`;return js(A,r),console.log(`[Blockscape] saved JSON (${e}):`,A),!0}const Io={A:"#0284c7",B:"#3b82f6",C:"#06b6d4",D:"#a855f7",E:"#f59e0b",F:"#f97316",G:"#22c55e",H:"#84cc16",I:"#10b981",J:"#14b8a6",K:"#0ea5e9",L:"#60a5fa",M:"#8b5cf6",N:"#d946ef",O:"#e879f9",P:"#67e8f9",Q:"#4ade80",R:"#facc15",S:"#eab308",T:"#a3e635",U:"#22d3ee",V:"#38bdf8",W:"#818cf8",X:"#a78bfa",Y:"#f472b6",Z:"#fb7185"};function Ha(e,n){if(n&&/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(n))return n;const t=(e||"?").charAt(0).toUpperCase();return Io[t]||"#9ca3af"}function xo(e){const n=e.replace("#",""),t=n.length===3?n.split("").map(p=>p+p).join(""):n,i=parseInt(t,16),a=i>>16&255,s=i>>8&255,r=i&255;return .2126*Math.pow(a/255,2.2)+.7152*Math.pow(s/255,2.2)+.0722*Math.pow(r/255,2.2)>.35?"#111111":"#ffffff"}function Ao(){if(!(typeof window>"u"||typeof window.scrollTo!="function"))try{window.scrollTo({top:0,behavior:"smooth"})}catch{window.scrollTo(0,0)}}function Fa(){if(Cn)return;Cn=document.createElement("div"),Cn.className="series-nav-notice";const e=document.createElement("span");e.className="series-nav-notice__dot",En=document.createElement("span"),En.className="series-nav-notice__text",Cn.appendChild(e),Cn.appendChild(En),document.body.appendChild(Cn)}function ja(){Wn&&(clearTimeout(Wn),Wn=null),Cn&&Cn.classList.remove("is-visible"),En&&(En.textContent="")}function yt(){Hn=null,bn&&(clearTimeout(bn),bn=null),ja()}function To(e,n){var i;if(!((i=e==null?void 0:e.apicurioVersions)!=null&&i[n]))return`version ${n+1}`;const t=e.apicurioVersions[n].version;return t?`version "${t}"`:`version ${n+1}`}function Lo(e,n,t){Fa(),Hn={id:e,targetVersionIndex:n},bn&&clearTimeout(bn),bn=setTimeout(()=>{bn=null,yt()},vt);const i=To(t,n);Bi(`Click again to open ${i} in this series.`,vt)}function Bi(e,n=oi,t=null){if(Fa(),En.textContent="",En.appendChild(document.createTextNode(e)),t){const i=document.createTextNode(" "),a=document.createElement("a");a.href=t,a.target="_blank",a.rel="noopener",a.textContent=t,En.appendChild(i),En.appendChild(a)}Cn.classList.add("is-visible"),Wn&&clearTimeout(Wn),Wn=setTimeout(()=>ja(),n)}function No(){le&&(le.innerHTML="",yo.forEach(e=>{const n=document.createElement("div");n.className="shortcut-help__row";const t=document.createElement("div");t.className="shortcut-help__keys",e.keys.forEach((a,s)=>{if(s>0){const d=document.createElement("span");d.className="shortcut-help__or",d.textContent="or",t.appendChild(d)}const r=document.createElement("div");r.className="shortcut-help__combo",a.forEach((d,p)=>{if(p>0){const b=document.createElement("span");b.className="shortcut-help__sep",b.textContent="+",r.appendChild(b)}const g=document.createElement("kbd");g.className="shortcut-help__key",g.textContent=d,r.appendChild(g)}),t.appendChild(r)});const i=document.createElement("div");i.className="shortcut-help__desc",i.textContent=e.description,n.appendChild(t),n.appendChild(i),le.appendChild(n)}),Le=!0)}function Mo(){return!!ie&&ie.hidden===!1}function Po(){if(!ie)return;Le||No(),Pt=document.activeElement,ie.hidden=!1,ie.setAttribute("aria-hidden","false"),document.body.classList.add("shortcut-help-open");const e=ie.querySelector(".shortcut-help__panel");e==null||e.focus({preventScroll:!0})}function Di(){if(!ie||ie.hidden)return;ie.hidden=!0,ie.setAttribute("aria-hidden","true"),document.body.classList.remove("shortcut-help-open");const e=Pt;e!=null&&e.focus?e.focus({preventScroll:!0}):de!=null&&de.focus&&de.focus({preventScroll:!0})}function Ro(){if(!ye)return;ye.hidden=!1,ye.setAttribute("aria-hidden","false"),document.body.classList.add("shortcut-help-open");const e=ye.querySelector(".shortcut-help__panel");e==null||e.focus({preventScroll:!0})}function Oi(){!ye||ye.hidden||(ye.hidden=!0,ye.setAttribute("aria-hidden","true"),document.body.classList.remove("shortcut-help-open"),me!=null&&me.focus&&me.focus({preventScroll:!0}))}let Ui=!1;function Kt(){Ui||(Ui=!0,requestAnimationFrame(()=>{Ui=!1,Fi(),St()}))}let qa=!1;function Wa(e){return(e||"").toString().toLowerCase().split(/\s+/).map(n=>n.trim()).filter(Boolean)}function Bo(e){const n=Wa(e);if(!n.length){S.querySelectorAll(".tile").forEach(t=>{t.style.opacity=""});return}S.querySelectorAll(".tile").forEach(t=>{var r;const i=(((r=t.querySelector(".name"))==null?void 0:r.textContent)||"").toLowerCase(),a=(t.dataset.id||"").toLowerCase(),s=n.every(d=>i.includes(d)||a.includes(d));t.style.opacity=s?"1":"0.2"})}function Do(e){const n=Wa(e);if(!n.length)return[];const t=[];return C.forEach((i,a)=>{var g;const s=Pi(i),r=en(i)||"",d=`${s} ${r}`.toLowerCase();n.every(b=>d.includes(b))&&t.push({type:"model",modelIndex:a,modelTitle:s,modelId:r}),(Array.isArray((g=i.data)==null?void 0:g.categories)?i.data.categories:[]).forEach(b=>{const A=(b.title||b.id||"").toString();(b.items||[]).forEach(I=>{const x=(I.name||I.id||"").toString(),$=`${x} ${I.id||""} ${A}`.toLowerCase();n.every(te=>$.includes(te))&&t.push({type:"item",modelIndex:a,modelTitle:s,modelId:r,itemId:I.id,itemName:x,categoryTitle:A})})})}),t.slice(0,Li)}function Ga(e){if(!Q)return;Q.innerHTML="";const n=(e||"").toString();if(!n.trim()){Q.hidden=!0;return}if(!C.length){const i=document.createElement("div");i.className="search-results__empty",i.textContent="Load models to search",Q.appendChild(i),Q.hidden=!1;return}const t=Do(n);if(!t.length){const i=document.createElement("div");i.className="search-results__empty",i.textContent="No matches yet",Q.appendChild(i),Q.hidden=!1;return}t.forEach(i=>{const a=document.createElement("button");a.type="button",a.className="search-result",a.dataset.modelIndex=String(i.modelIndex),i.itemId&&(a.dataset.itemId=i.itemId),i.type&&(a.dataset.type=i.type),i.modelIndex===k&&(!i.itemId||L===i.itemId)&&a.classList.add("is-active");const s=document.createElement("div");s.className="search-result__primary";const r=document.createElement("span");r.textContent=i.type==="model"?i.modelTitle:i.itemName||i.itemId||"Item",s.appendChild(r);const d=document.createElement("span");d.className="search-result__badge",d.textContent=i.type==="item"?i.categoryTitle||"Item":"Model",s.appendChild(d);const p=document.createElement("div");p.className="search-result__meta";const g=document.createElement("span");if(g.textContent=i.modelId?`${i.modelTitle} · ${i.modelId}`:i.modelTitle,p.appendChild(g),i.type==="item"&&i.itemId){const b=document.createElement("span");b.textContent=`Item ID: ${i.itemId}`,p.appendChild(b)}else if(i.type==="model"){const b=document.createElement("span");b.textContent="Matches model title",p.appendChild(b)}a.appendChild(s),a.appendChild(p),Q.appendChild(a)}),Q.hidden=!1}function Vi(e){Bo(e||""),Ga(e||"")}function Oo(e){!e||!Number.isInteger(e.modelIndex)||(on(e.modelIndex),e.itemId&&requestAnimationFrame(()=>{var t;if(k!==e.modelIndex)return;const n=(t=he.get(e.itemId))==null?void 0:t.el;n&&(pn(e.itemId),n.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),n.focus({preventScroll:!0}))}))}function on(e){if(kn(),yt(),Ye=null,ae=null,z=null,fe=null,e<0||e>=C.length){console.warn("[Blockscape] setActive called with out-of-range index:",e);return}gt=!0,k=e,console.log("[Blockscape] active model:",Oe(C[e]),"(index",e+" )"),pi(),Jn(),dn(),cn(),R&&Vi(R.value||""),Ce.updateAvailability()}function Jn(){if(j.innerHTML="",!C.length){const e=document.createElement("li");e.className="model-nav-empty",e.textContent="No models loaded yet.",j.appendChild(e);return}C.forEach((e,n)=>{var A;const t=document.createElement("li");t.className="model-nav-item";const i=document.createElement("button");i.type="button",i.className="model-nav-button"+(n===k?" is-active":""),i.dataset.index=String(n),i.setAttribute("aria-current",n===k?"true":"false");const a=document.createElement("span");a.className="model-nav-label";const s=document.createElement("span");s.className="model-nav-title",s.textContent=Pi(e),a.appendChild(s);const r=en(e);if(r){const I=document.createElement("span");I.className="model-nav-id",I.textContent=r,a.appendChild(I)}const d=Array.isArray((A=e.data)==null?void 0:A.categories)?e.data.categories:[],p=d.reduce((I,x)=>I+(x.items||[]).length,0),g=document.createElement("span");g.className="model-nav-meta";const b=e.apicurioVersions&&e.apicurioVersions.length>1?` · ${e.apicurioVersions.length} maps`:"";g.textContent=`${d.length} cat · ${p} items${b}`,i.appendChild(a),i.appendChild(g),t.appendChild(i),j.appendChild(t)}),Ce.updateAvailability()}function dn(){if(k<0){c.value="",ke&&(ke.disabled=!0);return}const e=C[k];c.value=JSON.stringify(e.data,null,2),ke&&(ke.disabled=!Ri(e))}function Uo(e){try{return JSON.parse(e)}catch{return null}}function Vo(e,n="Pasted",t={}){const i=Array.isArray(e)?e:[];if(!i.length)return[];const a=i.map((b,A)=>!b||typeof b!="object"?null:(at(b,{titleHint:`${n} #${A+1}`}),{obj:b,idx:A})).filter(Boolean);if(!a.length)return[];const s=a[0].obj,{seriesTitleOverride:r}=t;let d=r||s.title||`${n} series`;r&&!s.title&&(s.title=r);const p={id:it(),title:d,data:s,apicurioVersions:a.map(({obj:b,idx:A})=>({version:String(A+1),data:b})),apicurioActiveVersionIndex:0,isSeries:!0},g=gn(p,{seriesName:d,fallbackTitle:d});return g&&(p.id=g),[p]}function Ja(e,n="Pasted",t={}){return Array.isArray(e)?Vo(e,n,t):!e||typeof e!="object"?[]:(at(e,{titleHint:`${n} #1`}),[{id:it(),title:e.title||`${n} #1`,data:e}])}function zn(e,n="Pasted",t={}){const i=(e||"").trim();if(!i)return[];const a=Uo(i);if(a){let r=t;if(Array.isArray(a)&&t.promptForSeriesName){const p=bo(a,n),g=ho(p);r={...t,promptForSeriesName:!1,seriesTitleOverride:g||p}}const d=Ja(a,n,r);if(d.length)return d}return i.split(/^\s*(?:---|%%%)\s*$/m).map(r=>r.trim()).filter(Boolean).map((r,d)=>{const p=JSON.parse(r);return at(p,{titleHint:`${n} #${d+1}`}),{id:it(),title:p.title||`${n} #${d+1}`,data:p}})}function $o(e){if(!e)return!1;if(e.isContentEditable)return!0;const n=(e.tagName||"").toLowerCase();return n==="input"||n==="textarea"||n==="select"}function ot(){const e=document.activeElement;return!e||e===document.body||e===document.documentElement?!0:!$o(e)}function Ho(e){if(!e)return!1;const n=e.trimStart();return/^\s*(\{|\[|---|%%%)/.test(n)}function za(){if(typeof window>"u"||!window.localStorage)return null;let e;try{e=localStorage.getItem(Be)}catch(a){return console.warn("[Blockscape] failed to access editor payload",a),null}if(!e)return null;let n;try{n=JSON.parse(e)}catch(a){console.warn("[Blockscape] invalid payload JSON",a);try{localStorage.removeItem(Be)}catch{}return null}if((n==null?void 0:n.source)!=="editor")return null;try{localStorage.removeItem(Be)}catch(a){console.warn("[Blockscape] failed to clear editor payload",a)}if(!n.text||typeof n.text!="string")return console.warn("[Blockscape] payload missing text"),null;let t=[];try{t=zn(n.text,n.title||"Editor Export")}catch(a){return console.warn("[Blockscape] could not parse payload text",a),null}if(!t.length)return null;let i=null;return t.forEach(a=>{const s=Fn(a,{versionLabel:"editor"});i==null&&(i=s)}),console.log(`[Blockscape] imported ${t.length} model(s) from editor`),{index:i,count:t.length}}function Ka(e="storage"){const n=za();return!n||typeof n.index!="number"?!1:(on(n.index),console.log(`[Blockscape] imported ${n.count} model(s) from editor via ${e}.`),!0)}function Fo(){const e=window.location.hash||"";let n=null;const t=e.match(/share=([^&]+)/);if(t&&(n=t[1]),!n){const r=new URLSearchParams(window.location.search);r.has("share")&&(n=r.get("share"))}if(!n)return null;let i;try{const r=Fs(n);i=JSON.parse(r)}catch(r){return console.warn("[Blockscape] failed to decode share token",r),null}if(!i||typeof i!="object"||i.data==null)return console.warn("[Blockscape] share payload missing data"),null;const a=Ja(i.data,i.title||"Shared Model");if(!a.length)return console.warn("[Blockscape] share payload did not contain usable models"),null;let s=null;return a.forEach(r=>{const d=r.isSeries?i.title||r.title:null,p=Fn({...r,apicurioArtifactName:d||r.apicurioArtifactName},{versionLabel:"shared"});s==null&&(s=p)}),s}async function jo(){const e=window.location.hash||"";let n=null;const t=e.match(/load=([^&]+)/);if(t)try{n=decodeURIComponent(t[1])}catch{n=t[1]}if(!n){const i=new URLSearchParams(window.location.search);i.has("load")&&(n=i.get("load"))}if(!n)return null;try{const i=await Gi(n);return typeof i=="number"?i:null}catch(i){return console.warn("[Blockscape] load param failed",i),null}}function qo(e){console.log("[Blockscape] parsing model; categories=",((e==null?void 0:e.categories)||[]).length);const n=new Map,t=new Map,i=new Set;(e.categories||[]).forEach(s=>(s.items||[]).forEach(r=>{i.add(r.id);const d=new Set(r.deps||[]);(e.links||[]).forEach(p=>{p.from===r.id&&d.add(p.to)}),n.set(r.id,d),d.forEach(p=>{t.has(p)||t.set(p,new Set),t.get(p).add(r.id)})}));const a=new Set;return t.forEach((s,r)=>{((s==null?void 0:s.size)||0)>=2&&a.add(r)}),{m:e,fwd:n,rev:t,reusedLocal:a,seen:i}}function Wo(e,n){console.log("[Blockscape] generateLetterImage for:",e);const t=document.createElement("canvas"),i=44;t.width=i,t.height=i;const a=t.getContext("2d"),s=(e||"?").charAt(0).toUpperCase(),r=Ha(e,n),d=xo(r);return a.fillStyle=r,a.beginPath(),a.arc(i/2,i/2,i/2-2,0,2*Math.PI),a.fill(),a.strokeStyle="rgba(0,0,0,0.15)",a.lineWidth=1,a.stroke(),a.fillStyle=d,a.font=`bold ${i*.5}px system-ui, -apple-system, sans-serif`,a.textAlign="center",a.textBaseline="middle",a.fillText(s,i/2,i/2),t.toDataURL("image/png")}function rt(e){var t;if(!((t=e==null?void 0:e.apicurioVersions)!=null&&t.length))return-1;const n=Number.isInteger(e.apicurioActiveVersionIndex)?e.apicurioActiveVersionIndex:0;return Math.min(Math.max(n,0),e.apicurioVersions.length-1)}function Qa(e){const n=rt(e);if(n===-1)return null;const t=e.apicurioVersions[n];return(t==null?void 0:t.version)??null}function Go(e){const n=new Map;return((e==null?void 0:e.apicurioVersions)||[]).forEach((t,i)=>{var r,d;const a=(((r=t==null?void 0:t.data)==null?void 0:r.id)??"").toString().trim();a&&n.set(a,i);const s=(((d=t==null?void 0:t.data)==null?void 0:d.seriesId)??"").toString().trim();s&&!n.has(s)&&n.set(s,i)}),n}const Xa=new WeakMap;function Jo(e,n){var Ne;if(!((Ne=e==null?void 0:e.apicurioVersions)!=null&&Ne[n]))return null;const t=e.apicurioVersions[n],i=t.data,a=ci(i),s=Xa.get(t);if(s&&s.fingerprint===a)return s.dataUrl;const r=160,d=90,p=document.createElement("canvas");p.width=r,p.height=d;const g=p.getContext("2d");g.fillStyle="#f8fafc",g.fillRect(0,0,r,d),g.strokeStyle="#e5e7eb",g.strokeRect(.5,.5,r-1,d-1);const b=Array.isArray(i==null?void 0:i.categories)?i.categories:[],A=Math.max(b.length,1),I=r/A,x=8,$=8,te=4;b.forEach((Ie,Te)=>{const _n=Te*I+I/2,Me=Array.isArray(Ie.items)?Ie.items:[],Pe=Math.max(Me.length,1);Me.forEach((In,lt)=>{const Qn=x+(lt+.5)*((d-x-$)/Pe);g.beginPath(),g.arc(_n,Qn,te,0,Math.PI*2);const xn=Ha(In.name||In.id||"",In.color);g.fillStyle=xn,g.strokeStyle="rgba(15,23,42,0.25)",g.fill(),g.stroke()})});const Ee=p.toDataURL("image/png");return Xa.set(t,{fingerprint:a,dataUrl:Ee}),Ee}function $i(e,n){var d;if(yt(),e<0||e>=C.length)return!1;const t=C[e];if(!((d=t==null?void 0:t.apicurioVersions)!=null&&d.length)||!Da(e))return!1;const a=t.apicurioVersions.length,s=(n%a+a)%a,r=t.apicurioVersions[s];return r!=null&&r.data?(t.apicurioActiveVersionIndex=s,t.data=r.data,gt=!0,L=null,ee=null,sn(),dn(),cn(),!0):!1}function Hi(e){var i;if(!e||k<0)return!1;const n=C[k];if(!((i=n==null?void 0:n.apicurioVersions)!=null&&i.length))return!1;const t=rt(n);return t===-1?!1:$i(k,t+e)}function zo(e,n){if(yt(),e<0||e>=C.length)return!1;const t=C[e];if(!Array.isArray(t==null?void 0:t.apicurioVersions)||t.apicurioVersions.length<=1)return alert("A series needs at least one map. Add another before removing this one."),!1;if(!Da(e))return!1;const i=Math.min(Math.max(n,0),t.apicurioVersions.length-1),a=rt(t),[s]=t.apicurioVersions.splice(i,1);if(!s)return!1;let r=a;i===a?r=Math.min(i,t.apicurioVersions.length-1):i<a&&(r=Math.max(0,a-1)),t.apicurioActiveVersionIndex=Math.max(0,r);const d=t.apicurioVersions[t.apicurioActiveVersionIndex];return t.data=(d==null?void 0:d.data)||t.data,t.isSeries=t.apicurioVersions.length>1,on(e),!0}function Ko(e){if(!(e!=null&&e.apicurioVersions)||!e.apicurioVersions.length)return null;const n=document.createElement("div");n.className="version-nav";const t=document.createElement("div");t.className="version-nav__title",t.textContent=e.apicurioArtifactName||e.apicurioArtifactId||en(e)||"Artifact",t.title="Double-click to rename this series",t.setAttribute("role","button"),t.tabIndex=0,t.addEventListener("dblclick",()=>{var $;const I=C[k];!(($=I==null?void 0:I.apicurioVersions)!=null&&$.length)||!vo(I)||(Jn(),dn(),cn())}),n.appendChild(t);const i=document.createElement("div");i.className="version-nav__status";const a=rt(e),s=Qa(e)||"latest";i.textContent=`No. in series ${s} (${a+1} of ${e.apicurioVersions.length})`,n.appendChild(i);const r=document.createElement("div");r.className="version-nav__controls";const d=document.createElement("button");d.type="button",d.className="version-nav__button",d.textContent="Previous",d.addEventListener("click",()=>Hi(-1));const p=document.createElement("button");p.type="button",p.className="version-nav__button",p.textContent="Next",p.addEventListener("click",()=>Hi(1)),r.appendChild(d),r.appendChild(p),n.appendChild(r);const g=document.createElement("div");g.className="version-nav__thumbs",e.apicurioVersions.forEach((I,x)=>{var _n;const $=document.createElement("button");$.type="button",$.className="version-nav__thumb",x===a&&$.classList.add("is-active");const te=Jo(e,x);if(te){const Me=document.createElement("img");Me.src=te,Me.alt=`Version ${x+1}`,$.appendChild(Me)}const Ee=document.createElement("div");Ee.className="version-nav__thumb-label";const Ne=document.createElement("span");Ne.className="version-nav__thumb-label-text";const Ie=(((_n=I==null?void 0:I.data)==null?void 0:_n.id)??(I==null?void 0:I.id)??"").toString().trim(),Te=Ie||(I!=null&&I.version?`v${I.version}`:`${x+1}`);if(Ne.textContent=Te,Ee.title=Ie||Te,Ee.appendChild(Ne),$.appendChild(Ee),ir(Ee,Ne),e.apicurioVersions.length>1){const Me=document.createElement("span");Me.className="version-nav__thumb-remove",Me.title=`Remove ${Te} from this series`,Me.setAttribute("aria-label",`Remove ${Te} from this series`),Me.setAttribute("role","button"),Me.tabIndex=-1,Me.textContent="×",Me.addEventListener("click",Pe=>{Pe.stopPropagation(),Pe.preventDefault(),window.confirm(`Remove ${Te} from this series?`)&&zo(k,x)}),$.appendChild(Me)}$.addEventListener("click",()=>$i(k,x)),sr($,I),g.appendChild($)});const b=document.createElement("button");b.type="button",b.className="version-nav__thumb version-nav__thumb--add",b.title="Create a new version from this map",b.addEventListener("click",()=>{try{const I=Va({versionLabel:"manual"});on(I)}catch(I){alert((I==null?void 0:I.message)||"Unable to create a new version right now.")}});const A=document.createElement("span");return A.className="version-nav__thumb-add-icon",A.textContent="+",b.appendChild(A),g.appendChild(b),n.appendChild(g),n}function wt(){var ys,ws,ks;if(!U)return;jn(),Array.isArray(U.m.categories)||(U.m.categories=[]),console.log("[Blockscape] rendering categories=",U.m.categories.length),console.log("[Blockscape] model.m has abstract?",!!U.m.abstract,"- value:",U.m.abstract?U.m.abstract.substring(0,50)+"...":"none"),S.innerHTML="",he.clear(),ze.clear(),Gn=[],di(C[k],{versionLabel:"1"});const e=Ko(C[k]);e&&S.appendChild(e),w.setAttribute("width",window.innerWidth),w.setAttribute("height",window.innerHeight);const n=document.createElement("div");n.className="blockscape-model-meta";const t=document.createElement("div");t.className="blockscape-model-title",t.textContent=U.m.title&&U.m.title.trim()||Oe(C[k]),n.appendChild(t),((ys=C[k])!=null&&ys.isSeries||(ks=(ws=C[k])==null?void 0:ws.apicurioVersions)!=null&&ks.length)&&gn(C[k],{seriesName:C[k].title||U.m.title||Oe(C[k])});const i=Qa(C[k]),a=Tt(C[k]),s=(U.m.id??"").toString().trim(),r=document.createElement("div");r.className="blockscape-model-meta__details";const d=(v,K)=>{if(!K)return;const D=document.createElement("div");D.className="blockscape-model-id";const Se=document.createElement("span");Se.className="blockscape-model-id__label",Se.textContent=v;const Qe=document.createElement("span");Qe.className="blockscape-model-id__value",Qe.textContent=K,D.append(Se,Qe),r.appendChild(D)};d("Series ID",a),d("Model ID",s),d("No. in series",i),r.childElementCount&&n.appendChild(r),S.appendChild(n);const p=document.createElement("div");p.className="blockscape-tabs";const g=document.createElement("div");g.className="blockscape-tablist",g.setAttribute("role","tablist"),p.appendChild(g);const b=document.createElement("div");b.className="blockscape-tabpanels",p.appendChild(b);const A=document.createElement("div"),I=document.createElement("div"),x=document.createElement("div"),$=document.createElement("div");let te="";const Ee=Go(C[k]),Ne=rt(C[k]);vn=null,ft="";const Ie=[{id:"map",label:"Map",panel:A},{id:"abstract",label:"Info",panel:I},{id:"source",label:"Settings",panel:x},{id:"apicurio",label:"Apicurio",panel:$}],Te=typeof Ce.isEnabled=="function"?Ce.isEnabled():!1,_n=v=>{if(!w)return;const K=v==="map";w.hidden=!K,K?(Fi(),St()):w.innerHTML=""};Ie.forEach((v,K)=>{const D=document.createElement("button");D.type="button",D.id=`tab-${v.id}`,D.className="blockscape-tab"+(K===0?" is-active":""),D.setAttribute("role","tab"),D.setAttribute("aria-controls",`panel-${v.id}`),D.setAttribute("aria-selected",K===0?"true":"false"),D.textContent=v.label,v.id==="apicurio"&&!Te&&(D.hidden=!0,D.tabIndex=-1,D.setAttribute("aria-hidden","true"),D.style.display="none"),v.button=D,g.appendChild(D),v.panel.id=`panel-${v.id}`,v.panel.classList.add("blockscape-tabpanel"),v.panel.setAttribute("role","tabpanel"),v.panel.setAttribute("aria-labelledby",D.id),v.panel.hidden=K!==0,K===0&&v.panel.classList.add("is-active"),b.appendChild(v.panel)});const Me=v=>{On=v,Ie.forEach(K=>{const D=K.id===v;K.button.classList.toggle("is-active",D),K.button.setAttribute("aria-selected",D?"true":"false"),K.panel.classList.toggle("is-active",D),K.panel.hidden=!D}),_n(v)},Pe=Ie.find(v=>v.id==="apicurio"),In=v=>{if(!Pe||!Pe.button||!Pe.panel)return;const K=!!v;if(Pe.button.hidden=!K,Pe.button.tabIndex=K?0:-1,Pe.button.setAttribute("aria-hidden",K?"false":"true"),Pe.button.style.display=K?"":"none",K){const D=On==="apicurio";Pe.button.classList.toggle("is-active",D),Pe.button.setAttribute("aria-selected",D?"true":"false"),Pe.panel.classList.toggle("is-active",D),Pe.panel.hidden=!D}else{const D=Pe.panel.classList.contains("is-active");if(Pe.button.classList.remove("is-active"),Pe.button.setAttribute("aria-selected","false"),Pe.panel.classList.remove("is-active"),Pe.panel.hidden=!0,D){const Se=Ie.find(Qe=>Qe.id!=="apicurio");Se&&Me(Se.id)}}ht&&(ht.checked=K)};Ie.forEach(v=>{v.button.addEventListener("click",()=>{jn(),Me(v.id)}),v.id==="abstract"&&(vn=v.button,v.button.addEventListener("mouseenter",()=>Yt(v.button,te,{offset:12})),v.button.addEventListener("mouseleave",jn),v.button.addEventListener("focus",()=>Yt(v.button,te,{offset:12})),v.button.addEventListener("blur",jn))});const Qn=(v=>{const K=Ie.find(Se=>Se.id===On);if(K&&(K.id!=="apicurio"||v))return K.id;const D=Ie.find(Se=>Se.id!=="apicurio"||v);return(D==null?void 0:D.id)||Ie[0].id})(Te);Me(Qn),In(Te),typeof Ce.onEnabledChange=="function"&&Ce.onEnabledChange(In),S.appendChild(p);const xn=document.createElement("div");xn.className="blockscape-render",A.appendChild(xn);const $n=document.createElement("div");if($n.className="blockscape-abstract-panel",U.m.abstract){console.log("[Blockscape] Rendering abstract content");const v=document.createElement("div");v.className="blockscape-abstract",v.innerHTML=U.m.abstract,Rr(v),$n.appendChild(v),te=v.outerHTML}else{console.log("[Blockscape] No abstract found in model.m");const v=document.createElement("div");v.className="blockscape-abstract-placeholder",v.textContent="No abstract has been provided for this model.",$n.appendChild(v),te=v.outerHTML}ft=te,I.appendChild($n);const Sn=document.createElement("div");Sn.className="blockscape-source-panel";const Je=document.createElement("div");Je.className="blockscape-settings-panel";const _t=document.createElement("p");_t.className="blockscape-settings-panel__title",_t.textContent="Feature toggles",Je.appendChild(_t);const An=({id:v,label:K,hint:D,checked:Se,className:Qe="",onChange:_e})=>{const Rn=document.createElement("label");Rn.className=["settings-toggle",Qe].filter(Boolean).join(" ");const Bn=document.createElement("input");Bn.type="checkbox",Bn.id=v,Bn.checked=Se;const Ue=document.createElement("span");Ue.className="settings-toggle__text";const Dn=document.createElement("span");if(Dn.className="settings-toggle__label",Dn.textContent=K,Ue.appendChild(Dn),D){const dt=document.createElement("span");dt.className="settings-toggle__hint",dt.textContent=D,Ue.appendChild(dt)}return Rn.appendChild(Bn),Rn.appendChild(Ue),typeof _e=="function"&&Bn.addEventListener("change",()=>_e(Bn.checked)),{row:Rn,input:Bn}},ct=()=>{S.querySelectorAll(".tile").forEach(v=>{const K=v.dataset.id,D=Ua(K);if(!(D!=null&&D.item))return;const Se=ts(D.item.external),Qe=ns(D.item,{externalMeta:Se,seriesIdLookup:Ee});is(v,Qe)})},{row:ei}=An({id:"toggleSecondaryLinks",label:"Show indirect links",checked:mn,className:"map-controls__toggle",onChange:v=>{mn=v,L?pn(L):(qi(),St())}});Je.appendChild(ei);const{row:Ur}=An({id:"toggleReusedInMap",label:"Display reused in map view",hint:"Show markers for nodes used multiple times.",checked:hn,className:"map-controls__toggle",onChange:v=>{hn=v,Za()}});Je.appendChild(Ur);const ps=[],{row:Vr}=An({id:"toggleObsidianLinks",label:"Obsidian",hint:"Make tiles open Obsidian when no external URL exists.",checked:Dt,className:"map-controls__toggle",onChange:v=>{const K=Jt(v);mo(K),ps.forEach(D=>{D.disabled=!K}),ct()}});Je.appendChild(Vr);const Ji=document.createElement("div");Ji.className="settings-radio";const zi=document.createElement("div");zi.className="settings-radio__label",zi.textContent="Obsidian link format";const Ki=document.createElement("div");Ki.className="settings-radio__hint",Ki.textContent="Use the tile title or id when building Obsidian links.";const Qi=document.createElement("div");Qi.className="settings-radio__options";const ms=(v,K)=>{const D=document.createElement("label");D.className="settings-radio__option";const Se=document.createElement("input");Se.type="radio",Se.name="obsidianLinkMode",Se.value=v,Se.checked=ri===v,Se.disabled=!Dt,Se.addEventListener("change",()=>{if(!Se.checked)return;const _e=Gt(v);co(_e),ct()});const Qe=document.createElement("span");Qe.textContent=K,D.append(Se,Qe),ps.push(Se),Qi.appendChild(D)};ms(Ze,"Use title"),ms(Ke,"Use id"),Ji.append(zi,Qi,Ki),Je.appendChild(Ji);const fi=document.createElement("label");fi.className="settings-text",fi.setAttribute("for","obsidianVaultInput");const Xi=document.createElement("div");Xi.className="settings-text__text";const Yi=document.createElement("span");Yi.className="settings-text__label",Yi.textContent="Obsidian vault";const Zi=document.createElement("span");Zi.className="settings-text__hint",Zi.textContent="Optional. Set the vault name to avoid duplicates.",Xi.append(Yi,Zi);const Xn=document.createElement("input");Xn.type="text",Xn.id="obsidianVaultInput",Xn.className="settings-text__input",Xn.placeholder="Vault name",Xn.value=Ot,Xn.addEventListener("input",()=>{const v=zt(Xn.value);fo(v),ct()}),fi.append(Xi,Xn),Je.appendChild(fi);const ea=document.createElement("p");ea.className="settings-note",ea.innerHTML='Requires the Obsidian <a href="https://vinzent03.github.io/obsidian-advanced-uri/" target="_blank" rel="noreferrer noopener">Advanced URI</a> plugin for create/open behavior.',Je.appendChild(ea);const us=v=>`${(v/1e3).toFixed(1)}s`,gi=document.createElement("label");gi.className="settings-slider",gi.setAttribute("for","seriesNavDoubleClickWait");const na=document.createElement("div");na.className="settings-slider__text";const ta=document.createElement("span");ta.className="settings-slider__label",ta.textContent="Series double-click wait";const ia=document.createElement("span");ia.className="settings-slider__hint",ia.textContent="Time window to double-click into another map version.",na.append(ta,ia);const hi=document.createElement("span");hi.className="settings-slider__value",hi.textContent=us(vt);const Tn=document.createElement("input");Tn.type="range",Tn.id="seriesNavDoubleClickWait",Tn.className="settings-slider__input",Tn.min=String(Ma),Tn.max=String(Pa),Tn.step="50",Tn.value=String(vt),Tn.setAttribute("aria-label","Adjust double-click wait for series navigation"),Tn.addEventListener("input",()=>{const v=Wt(parseInt(Tn.value,10));hi.textContent=us(v),oo(v)}),gi.append(na,hi,Tn),Je.appendChild(gi);const fs=v=>`${Math.round((v-1)*100)}%`,bi=document.createElement("label");bi.className="settings-slider",bi.setAttribute("for","hoverScaleSlider");const aa=document.createElement("div");aa.className="settings-slider__text";const sa=document.createElement("span");sa.className="settings-slider__label",sa.textContent="Hover zoom";const oa=document.createElement("span");oa.className="settings-slider__hint",oa.textContent="Expand tiles on hover to see more detail.",aa.append(sa,oa);const vi=document.createElement("span");vi.className="settings-slider__value",vi.textContent=fs(ln);const Ln=document.createElement("input");Ln.type="range",Ln.id="hoverScaleSlider",Ln.className="settings-slider__input",Ln.min=String(_),Ln.max=String(E),Ln.step="0.1",Ln.value=String(ln),Ln.setAttribute("aria-label","Adjust hover zoom"),Ln.addEventListener("input",()=>{const v=$t(parseFloat(Ln.value));vi.textContent=fs(v),Ks(v),L&&Kt()}),bi.append(aa,vi,Ln),Je.appendChild(bi);const gs=v=>v===1?"Default":`${Math.round(v*100)}%`,yi=document.createElement("label");yi.className="settings-slider",yi.setAttribute("for","tileCompactnessSlider");const ra=document.createElement("div");ra.className="settings-slider__text";const la=document.createElement("span");la.className="settings-slider__label",la.textContent="Tile compactness";const ca=document.createElement("span");ca.className="settings-slider__hint",ca.textContent="Adjust padding, gap, and logo size for tiles.",ra.append(la,ca);const wi=document.createElement("span");wi.className="settings-slider__value",wi.textContent=gs(Un);const Nn=document.createElement("input");Nn.type="range",Nn.id="tileCompactnessSlider",Nn.className="settings-slider__input",Nn.min=String(an),Nn.max=String(ve),Nn.step="0.05",Nn.value=String(Un),Nn.setAttribute("aria-label","Adjust tile compactness"),Nn.addEventListener("input",()=>{const v=Ht(parseFloat(Nn.value));wi.textContent=gs(v),Xs(v),L&&Kt()}),yi.append(ra,wi,Nn),Je.appendChild(yi);const{row:$r}=An({id:"titleWrapToggle",label:"Wrap titles",hint:"Allow long titles to wrap instead of truncating.",checked:tt!=="nowrap",className:"map-controls__toggle",onChange:v=>{const K=v?"wrap":"nowrap";qt(K),io(K)}});Je.appendChild($r);const hs=v=>`${Math.round((v-1)*100)}% extra`,ki=document.createElement("label");ki.className="settings-slider",ki.setAttribute("for","titleHoverWidthSlider");const da=document.createElement("div");da.className="settings-slider__text";const pa=document.createElement("span");pa.className="settings-slider__label",pa.textContent="Title width on hover";const ma=document.createElement("span");ma.className="settings-slider__hint",ma.textContent="Give titles more room horizontally when zoomed.",da.append(pa,ma);const Si=document.createElement("span");Si.className="settings-slider__value",Si.textContent=hs(bt);const Mn=document.createElement("input");Mn.type="range",Mn.id="titleHoverWidthSlider",Mn.className="settings-slider__input",Mn.min=String(Z),Mn.max=String(se),Mn.step="0.05",Mn.value=String(bt),Mn.setAttribute("aria-label","Adjust title width boost on hover"),Mn.addEventListener("input",()=>{const v=Ft(parseFloat(Mn.value));Si.textContent=hs(v),Zs(v)}),ki.append(da,Si,Mn),Je.appendChild(ki);const bs=v=>`${Math.round(v*100)}% of hover zoom`,Ci=document.createElement("label");Ci.className="settings-slider",Ci.setAttribute("for","titleZoomPortionSlider");const ua=document.createElement("div");ua.className="settings-slider__text";const fa=document.createElement("span");fa.className="settings-slider__label",fa.textContent="Title zoom influence";const ga=document.createElement("span");ga.className="settings-slider__hint",ga.textContent="How much the title scales relative to tile hover zoom.",ua.append(fa,ga);const Ei=document.createElement("span");Ei.className="settings-slider__value",Ei.textContent=bs(Bt);const Pn=document.createElement("input");Pn.type="range",Pn.id="titleZoomPortionSlider",Pn.className="settings-slider__input",Pn.min=String(He),Pn.max=String(ge),Pn.step="0.05",Pn.value=String(Bt),Pn.setAttribute("aria-label","Adjust how much titles scale on hover"),Pn.addEventListener("input",()=>{const v=jt(parseFloat(Pn.value));Ei.textContent=bs(v),no(v)}),Ci.append(ua,Ei,Pn),Je.appendChild(Ci);const Hr=typeof Ce.isEnabled=="function"?Ce.isEnabled():!1,{row:Fr,input:jr}=An({id:"apicurioFeatureToggle",label:"Apicurio",hint:"Show the Apicurio registry tab when enabled.",checked:Hr,className:"apicurio-toggle",onChange:v=>{typeof Ce.setEnabled=="function"&&Ce.setEnabled(v)}});if(ht=jr,Je.appendChild(Fr),Sn.appendChild(Je),f)f.hidden=!1,f.classList.remove("pf-v5-c-page__main-section"),Sn.appendChild(f);else{const v=document.createElement("p");v.className="muted",v.textContent="Source editor unavailable.",Sn.appendChild(v)}x.appendChild(Sn),Ce.mount($);let vs=0;U.m.categories.forEach(v=>{const K=document.createElement("section");K.className="category",K.dataset.cat=v.id;const D=document.createElement("div");D.className="cat-head",D.dataset.cat=v.id,D.tabIndex=0,D.title="Select category",D.innerHTML=`<div class="cat-title">${Ct(v.title||v.id)}</div>
                          <div class="muted cat-count">${(v.items||[]).length} items</div>`,D.addEventListener("click",()=>Vn(v.id)),D.addEventListener("keydown",_e=>{(_e.key==="Enter"||_e.key===" ")&&(_e.preventDefault(),Vn(v.id))}),D.addEventListener("focus",()=>Vn(v.id,{scrollIntoView:!1})),K.appendChild(D);const Se=document.createElement("div");Se.className="grid",K.appendChild(Se),(v.items||[]).forEach(_e=>{vs+=1;const Rn=ts(_e.external),Bn=ns(_e,{externalMeta:Rn,seriesIdLookup:Ee}),Ue=document.createElement("div");if(Ue.className=Rn.isExternal?"tile external":"tile",Ue.tabIndex=0,Ue.dataset.id=_e.id,Ue.dataset.globalIndex=String(vs),Rn.url&&(Ue.dataset.externalUrl=Rn.url),Ee.has(_e.id)){const ti=Ee.get(_e.id);Ue.dataset.seriesVersionIndex=String(ti),Ue.classList.add("tile--series-link");const qr=ti===Ne?"Current map in this series":`Open version ${ti+1} in this series`;Ue.title=qr}Bn&&(Ue.dataset.obsidianUrl=Bn);const Dn=document.createElement("img");Dn.className="logo",_e.logo?(Dn.src=_e.logo,Dn.alt=_e.name||_e.id):(Dn.alt="",Dn.style.opacity=1,Dn.src=Wo(_e.name||_e.id,_e.color));const dt=document.createElement("div");dt.className="name",dt.textContent=_e.name||_e.id;const ha=document.createElement("div");ha.className="tile-id",ha.textContent=_e.id||"";const ba=document.createElement("div");ba.className="badge",ba.textContent="reused";const It=document.createElement("button");It.type="button",It.className="tile-delete",It.setAttribute("aria-label",`Delete ${_e.name||_e.id}`),It.textContent="×",It.addEventListener("click",ti=>{ti.stopPropagation(),Ar(_e.id)}),Rn.url&&Ue.appendChild(tr(Rn.url)),is(Ue,Bn),Ue.appendChild(It),Ue.appendChild(Dn),Ue.appendChild(dt),Ue.appendChild(ha),Ue.appendChild(ba),Se.appendChild(Ue),he.set(_e.id,{el:Ue,catId:v.id,rect:null})}),xn.appendChild(K),ze.set(v.id,{el:K,headEl:D});const Qe=document.createElement("button");Qe.type="button",Qe.className="tile-add",Qe.innerHTML='<span class="tile-add__icon" aria-hidden="true">+</span><span class="tile-add__label"></span>',Qe.addEventListener("click",()=>hr(v.id)),Se.appendChild(Qe)});const ni=document.createElement("button");ni.type="button",ni.className="category-add",ni.innerHTML='<span class="category-add__icon" aria-hidden="true">+</span><span class="category-add__label">Add category</span><span class="category-add__hint">(Insert)</span>',ni.addEventListener("click",()=>rs()),xn.appendChild(ni),Za(),Qo(),Fi(),St(),kt(),or()}function Qo(){S.querySelectorAll(".tile").forEach(e=>{e.addEventListener("click",t=>{var b;if(typeof t.button=="number"&&t.button!==0)return;kn();const i=e.dataset.id,a=e.dataset.seriesVersionIndex!=null?parseInt(e.dataset.seriesVersionIndex,10):null,s=e.dataset.globalIndex!=null?parseInt(e.dataset.globalIndex,10):null,r=C[k],d=r?rt(r):-1,p=((b=r==null?void 0:r.apicurioVersions)==null?void 0:b.length)>1&&Number.isInteger(a)&&a!==d,g=Hn&&Hn.id===i&&Hn.targetVersionIndex===a;if(Hn&&!g&&yt(),p)if(g){if(yt(),$i(k,a))return}else Lo(i,a,r);else Number.isInteger(s)&&s>0&&s%5===0&&Bi("Use arrow keys to move between blocks. Shift arrow to move block.");if(console.log("[Blockscape] click",i),L===i&&!(p&&g)){Xt();return}pn(i)}),e.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),e.click())});const n=()=>{L&&Kt()};e.addEventListener("pointerenter",n),e.addEventListener("pointerleave",n),e.addEventListener("focus",n),e.addEventListener("blur",n),e.draggable=!0,e.addEventListener("dragstart",dr),e.addEventListener("dragend",pr)}),S.querySelectorAll(".grid").forEach(e=>{e.addEventListener("dragover",mr),e.addEventListener("drop",gr),e.addEventListener("dragenter",ur),e.addEventListener("dragleave",fr)}),qa||(qa=!0,window.addEventListener("resize",Kt),window.addEventListener("scroll",Kt,{passive:!0}),window.addEventListener("resize",as)),document.getElementById("clear").onclick=()=>Xt()}function Fi(){he.forEach(e=>{e.rect=e.el.getBoundingClientRect()})}function Ya(e,{includeSecondary:n=mn}={}){if(!e||!U)return{deps:new Set,revs:new Set,secondaryDeps:new Set,secondaryRevs:new Set,edges:[]};const t=new Set(U.fwd.get(e)||[]),i=new Set(U.rev.get(e)||[]),a=new Set,s=new Set,r=[],d=new Set,p=(g,b,A,I)=>{if(!g||!b)return;const x=`${g}->${b}:${A}:${I}`;d.has(x)||(d.add(x),r.push({from:g,to:b,type:A,depth:I}))};return t.forEach(g=>p(e,g,"dep",1)),i.forEach(g=>p(e,g,"revdep",1)),n&&new Set([...t,...i]).forEach(b=>{(U.fwd.get(b)||new Set).forEach(x=>{const $=x===e;$||a.add(x),$||p(b,x,"dep",2)}),(U.rev.get(b)||new Set).forEach(x=>{const $=x===e;$||s.add(x),$||p(b,x,"revdep",2)})}),{deps:t,revs:i,secondaryDeps:a,secondaryRevs:s,edges:r}}function mi(e,n){const t=he.get(e);t&&t.el.classList.add(n)}function pn(e){var d,p,g;if(!e)return;z=null,L=e,fe=null,ee=Ya(e),sn(),qi(),kt();const{deps:n,revs:t,secondaryDeps:i,secondaryRevs:a}=ee;console.log("[Blockscape] selecting id=",e,"deps=",Array.from(n),"revs=",Array.from(t));const s=he.get(e);s&&s.el.classList.add("selected"),n.forEach(b=>mi(b,"dep")),t.forEach(b=>mi(b,"revdep")),i.forEach(b=>{!n.has(b)&&b!==e&&mi(b,"dep-indirect")}),a.forEach(b=>{!t.has(b)&&!n.has(b)&&b!==e&&mi(b,"revdep-indirect")}),St();const r=(g=(p=(d=he.get(e))==null?void 0:d.el)==null?void 0:p.dataset)==null?void 0:g.externalUrl;r&&Bi("This item has link to",oi,r)}function Vn(e,{scrollIntoView:n=!0,preserveEntryHint:t=!1}={}){var r,d;if(!((r=U==null?void 0:U.m)!=null&&r.categories)||!e)return!1;const a=(U.m.categories||[]).find(p=>p.id===e);if(!a)return!1;kn(),ji(),t||(fe=null),z=a.id,sn(),kt();const s=ze.get(a.id);return n&&(s!=null&&s.el)&&(s.el.scrollIntoView({behavior:"smooth",block:"center"}),(d=s.headEl)==null||d.focus({preventScroll:!0})),!0}function kt(){if(ze.forEach(({el:n,headEl:t})=>{n.classList.remove("category--selected"),t&&t.removeAttribute("aria-current")}),!z)return;const e=ze.get(z);if(!(e!=null&&e.el)){z=null,fe=null,sn();return}e.el.classList.add("category--selected"),e.headEl&&e.headEl.setAttribute("aria-current","true")}function Qt(){if(z)return z;const e=L?he.get(L):null;return e!=null&&e.catId?e.catId:null}function Xo(e){var s,r,d,p;if(!((r=(s=U==null?void 0:U.m)==null?void 0:s.categories)!=null&&r.length)||!e)return!1;const n=U.m.categories,t=Qt();let i=n.findIndex(g=>g.id===t);if(i===-1){const g=((d=n.find(b=>(b.items||[]).length))==null?void 0:d.id)||((p=n[0])==null?void 0:p.id);return g?Vn(g):!1}const a=i+e;return a<0||a>=n.length?!1:Vn(n[a].id)}function ji(){L=null,ee=null,qi(),St()}function Yo(){z=null,fe=null,kt()}function Xt(){ji(),Yo(),fe=null,sn()}function qi(){S.querySelectorAll(".tile").forEach(e=>e.classList.remove("dep","revdep","dep-indirect","revdep-indirect","selected"))}function Za(){U!=null&&U.reusedLocal&&U.reusedLocal.forEach(e=>{const n=he.get(e);if(!n)return;n.el.classList.toggle("reused",hn);const t=n.el.querySelector(".badge");t&&(t.style.display=hn?"inline-block":"none")})}function St(){for(;w.firstChild;)w.removeChild(w.firstChild);if(!L||w.hidden)return;ee=Ya(L),ee.edges.forEach(n=>{var A,I;const t=(A=he.get(n.from))==null?void 0:A.rect,i=(I=he.get(n.to))==null?void 0:I.rect;if(!t||!i)return;const a=es(t),s=es(i),r=document.createElementNS("http://www.w3.org/2000/svg","path"),d=(a.x+s.x)/2,p=a.y,g=(a.x+s.x)/2,b=s.y;r.setAttribute("d",`M ${a.x},${a.y} C ${d},${p} ${g},${b} ${s.x},${s.y}`),r.setAttribute("fill","none"),r.setAttribute("stroke",n.type==="dep"?"var(--blockscape-dep)":"var(--blockscape-revdep)"),r.setAttribute("stroke-opacity",n.depth===1?"0.45":"0.22"),r.setAttribute("stroke-width",n.depth===1?"2":"1.5"),n.depth>1&&r.setAttribute("stroke-dasharray","4 3"),r.setAttribute("vector-effect","non-scaling-stroke"),w.appendChild(r)})}function es(e){return{x:e.left+e.width/2,y:e.top+e.height/2}}function Ct(e){return e.replace(/[&<>"']/g,n=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[n])}function Zo(e){const n=(e??"").toString().trim();if(!n)return"";const t=n.endsWith(".md")?n:`${n}.md`,i=new URLSearchParams;return i.set("filepath",t),i.set("data"," "),i.set("mode","append"),Ot&&i.set("vault",Ot),`obsidian://advanced-uri?${i.toString()}`}function er(e){return e?ri===Ke?e.id??e.name??"":e.name??e.id??"":""}function ns(e,{externalMeta:n,seriesIdLookup:t}={}){var a;if(!Dt||!e||(a=t==null?void 0:t.has)!=null&&a.call(t,e.id))return"";const i=er(e);return Zo(i)}function ts(e){if(typeof e=="string"){const n=e.trim();if(!n)return{isExternal:!1,url:""};try{const t=new URL(n);return/^https?:/i.test(t.protocol)?{isExternal:!0,url:t.toString()}:{isExternal:!1,url:""}}catch(t){return console.warn("[Blockscape] invalid external url skipped",e,t),{isExternal:!1,url:""}}}return e===!0?{isExternal:!0,url:""}:{isExternal:!1,url:""}}function nr(e){const n=document.createElement("button");return n.type="button",n.className="external-link obsidian-link",n.setAttribute("aria-label","Open in Obsidian"),n.title=e,n.textContent="O",n.addEventListener("click",t=>{t.stopPropagation(),window.open(e,"_blank","noopener")}),n.addEventListener("keydown",t=>t.stopPropagation()),n}function tr(e){const n=document.createElement("button");return n.type="button",n.className="external-link",n.setAttribute("aria-label","Open external reference in a new tab"),n.title=e,n.textContent="↗",n.addEventListener("click",t=>{t.stopPropagation(),window.open(e,"_blank","noopener")}),n.addEventListener("keydown",t=>t.stopPropagation()),n}function is(e,n){if(!e)return;const t=e.querySelector(".obsidian-link");if(!n){t&&t.remove(),e.removeAttribute("data-obsidian-url");return}if(e.dataset.obsidianUrl=n,t){t.title=n;return}e.appendChild(nr(n))}function as(){Rt||(Rt=requestAnimationFrame(()=>{Rt=null,Gn=Gn.filter(({labelEl:e,textEl:n})=>(e==null?void 0:e.isConnected)&&(n==null?void 0:n.isConnected)),Gn.forEach(({labelEl:e,textEl:n})=>{const t=Math.max(n.scrollWidth-e.clientWidth,0);if(t>4){const i=Math.max(4,Math.min(14,4+t/30));e.classList.add("version-nav__thumb-label--scroll"),n.style.setProperty("--marquee-distance",`${t}px`),n.style.setProperty("--marquee-duration",`${i}s`)}else e.classList.remove("version-nav__thumb-label--scroll"),n.style.removeProperty("--marquee-distance"),n.style.removeProperty("--marquee-duration")})}))}function ir(e,n){!e||!n||(Gn.push({labelEl:e,textEl:n}),as())}function ar(e,n){var s,r;const t=[`<div class="version-nav__tooltip-title">${Ct(n)}</div>`],i=((e==null?void 0:e.version)??((s=e==null?void 0:e.data)==null?void 0:s.version)??"").toString().trim();i&&t.push(`<div class="version-nav__tooltip-meta">Version ${Ct(i)}</div>`);const a=(((r=e==null?void 0:e.data)==null?void 0:r.abstract)??"").toString().trim();return a?t.push(`<div class="version-nav__tooltip-body">${a}</div>`):t.push('<div class="version-nav__tooltip-body muted">No info available for this version.</div>'),t.join("")}function Yt(e,n,{offset:t=8}={}){!N||!e||!n||(N.innerHTML=n,N.hidden=!1,N.setAttribute("aria-hidden","false"),requestAnimationFrame(()=>{const i=e.getBoundingClientRect(),a=N.getBoundingClientRect(),s=window.scrollX||document.documentElement.scrollLeft,r=window.scrollY||document.documentElement.scrollTop;let d=i.left+i.width/2-a.width/2+s,p=i.top-a.height-t+r;d<s+t&&(d=s+t);const g=s+window.innerWidth-a.width-t;d>g&&(d=g),p<r+t&&(p=i.bottom+t+r),N.style.left=`${d}px`,N.style.top=`${p}px`,N.classList.add("is-visible")}))}function jn(){Zn&&(clearTimeout(Zn),Zn=null),N&&(N.classList.remove("is-visible"),N.setAttribute("aria-hidden","true"),N.hidden=!0)}function sr(e,n){if(!e)return;const t=Oe((n==null?void 0:n.data)||n,"Series version");e.title=t,e.setAttribute("aria-label",t);const i=ar(n,t);let a=null;const s=()=>{a&&(clearTimeout(a),a=null)},r=()=>{nt=e,Yt(e,`<div class="version-nav__tooltip-title">${Ct(t)}</div>`,{offset:10})},d=()=>{s(),a=setTimeout(()=>{nt===e&&Yt(e,i,{offset:10})},Ni)},p=()=>{r(),d()},g=()=>{nt!==e&&r(),d()},b=()=>{s(),nt===e&&(nt=null,jn())};e.addEventListener("mouseenter",p),e.addEventListener("focus",p),e.addEventListener("pointermove",g),e.addEventListener("mouseleave",b),e.addEventListener("blur",b),e.addEventListener("click",b)}function or(){gt&&(gt=!1,!(!vn||!ft)&&(jn(),Yt(vn,ft,{offset:12}),Zn=setTimeout(()=>{jn(),rr()},1e3)))}function rr(){vn&&(et&&(clearTimeout(et),et=null),vn.classList.add("blockscape-tab--twinkle"),et=setTimeout(()=>{vn.classList.remove("blockscape-tab--twinkle"),et=null},1400))}window.addEventListener("scroll",jn,!0),window.addEventListener("resize",jn);function kn(){u&&(u.classList.remove("is-visible","item-preview--has-frame","item-preview--expanded"),u.setAttribute("aria-hidden","true"),u.hidden=!0,ss([]))}function lr(e,n){u&&(De={x:e,y:n},u.hidden=!1,u.setAttribute("aria-hidden","false"),u.classList.add("is-visible"),Et(e,n))}function Et(e,n){if(!u)return;const t=12;u.style.left=`${e+t}px`,u.style.top=`${n+t}px`;const i=u.getBoundingClientRect();let a=i.left,s=i.top;i.right>window.innerWidth-t&&(a=Math.max(t,window.innerWidth-i.width-t)),i.bottom>window.innerHeight-t&&(s=Math.max(t,window.innerHeight-i.height-t)),u.style.left=`${a}px`,u.style.top=`${s}px`}function ss(e=[]){pe&&(pe.innerHTML="",e.forEach(n=>{const t=document.createElement("button");t.type="button",t.className="item-preview__action",t.textContent=n.label||"Action",n.title&&(t.title=n.title),t.addEventListener("click",i=>{i.stopPropagation(),typeof n.onClick=="function"&&n.onClick(i)}),pe.appendChild(t)}),pe.hidden=e.length===0)}async function cr(e,n){var b;if(!u)return;e.stopPropagation(),e.preventDefault();const t=n.dataset.id,i=((b=n.querySelector(".name"))==null?void 0:b.textContent)||t||"Preview",a=t?`${t}.html`:"",s=a?`items/${a}`:"",r=++un,d=n.dataset.externalUrl||"",p=n.dataset.obsidianUrl||"",g=[{label:"Edit",title:"Edit this item",onClick:()=>{kn(),st.open(t)}}];if(d&&g.push({label:"Open link ↗",title:d,onClick:()=>window.open(d,"_blank","noopener")}),p&&g.push({label:"Open in Obsidian",title:p,onClick:()=>window.open(p,"_blank","noopener")}),ss(g),t&&pn(t),J.textContent=i,ce.innerHTML='<div class="item-preview__status">Loading…</div>',u.classList.remove("item-preview--has-frame"),u.classList.add("item-preview--expanded"),lr(e.clientX,e.clientY),!s){ce.innerHTML='<div class="item-preview__status">Preview unavailable for this item.</div>',Et(De.x,De.y);return}try{const A=await fetch(s,{cache:"no-cache"});if(!A.ok)throw new Error(`HTTP ${A.status}`);const I=await A.text();if(r!==un)return;if(!I.trim()){ce.innerHTML=`<div class="item-preview__status">No content in <code>${Ct(a)}</code>.</div>`,Et(De.x,De.y);return}const $=document.createElement("iframe");$.className="item-preview__frame",$.title=`${i} details`,$.srcdoc=I,ce.innerHTML="",ce.appendChild($),u.classList.add("item-preview--has-frame"),Et(De.x,De.y)}catch(A){if(r!==un)return;ce.innerHTML=`<div class="item-preview__status">No preview available for <strong>${Ct(i)}</strong>.</div>`,console.warn(`[Blockscape] preview unavailable for ${s}`,A),Et(De.x,De.y)}}Re&&Re.addEventListener("click",kn),de&&de.addEventListener("click",()=>{Po()}),me&&me.addEventListener("click",()=>{Ro()}),we&&we.addEventListener("click",Di),ue&&ue.addEventListener("click",Di),nn&&nn.addEventListener("click",Oi),je&&je.addEventListener("click",Oi),S&&S.addEventListener("contextmenu",e=>{const n=e.target.closest(".tile");!n||!S.contains(n)||cr(e,n)}),document.addEventListener("click",e=>{typeof e.button=="number"&&e.button!==0||!u||u.hidden||u.contains(e.target)||kn()}),V&&V.addEventListener("click",()=>{$a("button")}),Y&&Y.addEventListener("click",()=>{if(k<0){alert("Load or select a model before creating a version.");return}try{const e=Va({versionLabel:"map edit"});on(e),console.log("[Blockscape] created new version from map view")}catch(e){alert((e==null?void 0:e.message)||"Unable to create a new version right now.")}}),W&&W.addEventListener("click",async()=>{var s;if(k<0||!C[k]){alert("Select or load a model before sharing.");return}const e={title:Oe(C[k],"Shared Model"),data:C[k].data};let n;try{n=Hs(JSON.stringify(e))}catch(r){console.error("[Blockscape] share encode failed",r),alert("Unable to encode this model for sharing.");return}const t=new URL(window.location.href);t.searchParams.delete("share"),t.hash=`share=${n}`;const i=t.toString();try{window.history.replaceState({},document.title,i)}catch(r){console.warn("[Blockscape] failed to update URL for share",r),window.location.hash=t.hash}let a=!1;if((s=navigator.clipboard)!=null&&s.writeText)try{await navigator.clipboard.writeText(i),a=!0}catch(r){console.warn("[Blockscape] clipboard write failed",r)}a?alert("Share URL copied to clipboard."):window.prompt("Copy this share URL:",i)}),F&&F.addEventListener("click",()=>{const e=(c.value||"").trim();if(!e){alert("Load or paste a model before opening the editor.");return}try{JSON.parse(e)}catch{alert("Current JSON is invalid. Fix it before opening the editor.");return}try{const t={ts:Date.now(),text:e,source:"viewer"};L&&(t.selectedItemId=L),localStorage.setItem(Be,JSON.stringify(t))}catch(t){console.error("[Blockscape] failed to store editor payload",t),alert("Unable to stash JSON for the editor (storage disabled?).");return}let n="editor.html#viewer";L&&(n=`editor.html?selected=${encodeURIComponent(L)}#viewer`),window.open(n,"_blank")}),typeof window<"u"&&(window.addEventListener("storage",e=>{if(!e||e.storageArea&&e.storageArea!==window.localStorage||e.key!==Be||!e.newValue)return;let n;try{n=JSON.parse(e.newValue)}catch(t){console.warn("[Blockscape] storage payload parse failed",t);return}!n||n.source!=="editor"||Ka("storage-event")}),window.addEventListener("message",e=>{if(!e||!e.data)return;const n=window.location.origin;if(n&&n!=="null"){if(e.origin!==n)return}else if(e.origin&&e.origin!=="null")return;typeof e.data=="object"&&e.data!==null&&e.data.type===$e&&Ka("message")})),document.addEventListener("keydown",e=>{var t,i,a,s,r,d,p,g,b,A;if(Mo()){e.key==="Escape"&&(e.preventDefault(),Di());return}if(!(ye!=null&&ye.hidden)&&e.key==="Escape"){e.preventDefault(),Oi();return}if(!((t=st==null?void 0:st.isOpen)!=null&&t.call(st))){if((e.ctrlKey||e.metaKey)&&e.code==="KeyS"){e.preventDefault();const I=C[k],x=((i=I==null?void 0:I.apicurioVersions)==null?void 0:i.length)>1;$a("shortcut",x);return}if((e.ctrlKey||e.metaKey)&&!e.altKey&&!e.shiftKey&&e.key&&e.key.toLowerCase()==="z"){if(!ot())return;if(Er()){e.preventDefault();return}}if(e.key==="Escape"){let I=!1;u&&!u.hidden&&(kn(),I=!0),(L||z)&&(Xt(),I=!0),I&&e.preventDefault()}if(e.key==="ArrowLeft"||e.key==="ArrowRight"){if(!ot())return;const I=e.key==="ArrowLeft"?-1:1;if(e.altKey)return;if((e.ctrlKey||e.metaKey)&&!e.shiftKey){Hi(I)&&e.preventDefault();return}if(e.ctrlKey||e.metaKey)return;if(z&&!e.shiftKey){e.preventDefault();return}e.shiftKey?vr(I)&&e.preventDefault():yr(I)&&e.preventDefault()}if(e.key==="ArrowUp"||e.key==="ArrowDown"){if(!ot())return;const I=e.key==="ArrowUp"?-1:1;if((e.ctrlKey||e.metaKey)&&!e.altKey){Cr(I)&&e.preventDefault();return}if(e.altKey)return;if(z&&!L&&!e.shiftKey){if(kr(I)){e.preventDefault();return}if(Xo(I)){e.preventDefault();return}}e.shiftKey?Sr(I)&&e.preventDefault():wr(I)&&e.preventDefault()}if(e.key==="Delete"){if(!ot()||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;const I=z?xr():!1,x=I?!0:ls();(I||x)&&e.preventDefault()}if(e.key==="F2"){if(!ot())return;const I=z&&!L&&z||!L&&((d=(r=(s=(a=e.target)==null?void 0:a.closest)==null?void 0:s.call(a,".category"))==null?void 0:r.dataset)==null?void 0:d.cat)||null;if(I&&!L&&br(I)){e.preventDefault();return}const x=L||((A=(b=(g=(p=e.target)==null?void 0:p.closest)==null?void 0:g.call(p,".tile"))==null?void 0:b.dataset)==null?void 0:A.id);x&&st.open(x)&&e.preventDefault()}if(e.key==="Insert"){if(!ot()||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;rs()&&e.preventDefault()}}}),window.addEventListener("resize",()=>{!u||u.hidden||Et(De.x,De.y)}),window.addEventListener("scroll",()=>{!u||u.hidden||kn()},!0);let Kn=null,Zt=null;function dr(e){kn(),Kn=e.target.dataset.id,Zt=e.target.closest(".category").dataset.cat,e.target.classList.add("dragging"),e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",JSON.stringify({itemId:Kn,categoryId:Zt})),e.target.closest(".category").querySelector(".grid").classList.add("drag-active"),console.log("[Blockscape] drag start",Kn,"from",Zt)}function pr(e){e.target.classList.remove("dragging"),S.querySelectorAll(".grid").forEach(n=>n.classList.remove("drag-active")),S.querySelectorAll(".tile").forEach(n=>n.classList.remove("drag-over")),Kn=null,Zt=null}function mr(e){e.preventDefault(),e.dataTransfer.dropEffect="move"}function ur(e){e.preventDefault();const n=e.target.closest(".grid");n&&n.classList.add("drag-active")}function fr(e){const n=e.target.closest(".grid");n&&!n.contains(e.relatedTarget)&&n.classList.remove("drag-active")}function gr(e){e.preventDefault();const n=e.target.closest(".grid");if(!n)return;const t=n.closest(".category");if(!t)return;const i=t.dataset.cat;if(!Kn||!i)return;const s=Array.from(n.querySelectorAll(".tile")).filter(r=>r.dataset.id!==Kn).find(r=>{const d=r.getBoundingClientRect();return e.clientY<d.top+d.height/2});os(Kn,s?s.dataset.id:null,i),wt(),console.log("[Blockscape] drop completed",Kn,"from",Zt,"to",i)}function os(e,n,t){if(k<0)return;const a=C[k].data.categories||[],s=a.find(b=>(b.items||[]).some(A=>A.id===e)),r=a.find(b=>b.id===t);if(!s||!r)return;s.items=s.items||[],r.items=r.items||[];const d=s.items.findIndex(b=>b.id===e);if(d===-1)return;const[p]=s.items.splice(d,1);let g=r.items.length;if(n){const b=r.items.findIndex(A=>A.id===n);b!==-1&&(g=b)}r.items.splice(g,0,p),dn(),cn()}function hr(e){if(k<0||!e)return;const n=C[k].data,i=(n.categories||[]).find(p=>p.id===e);if(!i)return;i.items=i.items||[];const a=`New item ${i.items.length+1}`,r={id:ko(`${e}-${i.items.length+1}`,n),name:a,deps:[]};i.items.push(r),dn(),cn(),kn(),pn(r.id);const d=he.get(r.id);d!=null&&d.el&&d.el.scrollIntoView({behavior:"smooth",block:"center",inline:"center"}),console.log("[Blockscape] added item",r.id,"to",e)}function rs(){if(k<0)return!1;const e=C[k].data;e.categories=e.categories||[];const n=`New category ${e.categories.length+1}`,t=So(n,e),i={id:t,title:n,items:[]};return e.categories.push(i),z=t,L=null,ee=null,fe=null,dn(),cn(),Vn(t),console.log("[Blockscape] added category",t),!0}function br(e=Qt()){if(k<0||!e)return!1;const n=Eo.open(e);return n&&(L=null,ee=null,sn()),n}function vr(e){if(!L||k<0||!e)return!1;const t=C[k].data.categories||[],i=he.get(L);let a=null;if(i!=null&&i.catId&&(a=t.find(p=>p.id===i.catId)),a||(a=t.find(p=>(p.items||[]).some(g=>g.id===L))),!a)return!1;a.items=a.items||[];const s=a.items.findIndex(p=>p.id===L);if(s===-1)return!1;const r=s+e;if(r<0||r>=a.items.length)return!1;const[d]=a.items.splice(s,1);return a.items.splice(r,0,d),dn(),cn(),wt(),pn(L),!0}function yr(e){if(!U||!U.m||!e)return!1;const n=U.m.categories||[];if(!n.length)return!1;const t=()=>{const p=n.find(g=>(g.items||[]).length);return p?{category:p,item:p.items[0]}:null};if(!L){const p=t();return p?(pn(p.item.id),!0):!1}const i=he.get(L);let a=null;if(i!=null&&i.catId&&(a=n.find(p=>p.id===i.catId)),a||(a=n.find(p=>(p.items||[]).some(g=>g.id===L))),!a){const p=t();return p?(pn(p.item.id),!0):!1}const s=a.items||[];if(!s.length)return!1;const r=s.findIndex(p=>p.id===L);if(r===-1)return!1;const d=r+e;return d<0||d>=s.length?!1:(pn(s[d].id),!0)}function wr(e){if(!U||!U.m||!e)return!1;const n=U.m.categories||[];if(!n.length)return!1;const t=Qt();let i=n.findIndex(r=>r.id===t),a=i+e;if(i===-1&&(a=e>0?0:n.length-1),a<0||a>=n.length)return!1;const s=n[a];if(L){const d=(n[i].items||[]).findIndex(p=>p.id===L);fe={catId:s.id,position:d===-1?0:d}}else fe=null;return Vn(s.id,{preserveEntryHint:!0})}function kr(e){var s;if(!z||!((s=U==null?void 0:U.m)!=null&&s.categories)||!e)return!1;const t=(U.m.categories||[]).find(r=>r.id===z);if(!t)return!1;const i=t.items||[];if(!i.length)return!1;let a=e>0?0:Math.max(0,i.length-1);return(fe==null?void 0:fe.catId)===t.id&&(a=Math.min(i.length-1,Math.max(0,fe.position||0))),fe=null,pn(i[a].id),!0}function Sr(e){if(!L||k<0||!e)return!1;const t=C[k].data.categories||[];if(!t.length)return!1;const i=he.get(L);let a=-1;if(i!=null&&i.catId&&(a=t.findIndex(A=>A.id===i.catId)),a===-1&&(a=t.findIndex(A=>(A.items||[]).some(I=>I.id===L))),a===-1)return!1;const s=a+e;if(s<0||s>=t.length)return!1;const r=t[a],d=t[s];if(!d)return!1;r.items=r.items||[],d.items=d.items||[];const p=r.items.findIndex(A=>A.id===L);if(p===-1)return!1;const g=Math.min(d.items.length,Math.max(0,p)),b=g<d.items.length?d.items[g].id:null;return os(L,b,d.id),wt(),pn(L),!0}function Cr(e){if(k<0||!e)return!1;const t=C[k].data.categories||[];if(!t.length)return!1;const i=Qt();if(!i)return!1;const a=t.findIndex(d=>d.id===i);if(a===-1)return!1;const s=a+e;if(s<0||s>=t.length)return!1;const[r]=t.splice(a,1);return t.splice(s,0,r),z=r.id,ji(),fe=null,sn(),dn(),cn(),kt(),console.log("[Blockscape] moved category",r.id,"from",a,"to",s),!0}function Er(){if(k<0)return!1;const e=C[k],n=en(e)||(e?e.id:null),t=[];if(Ye&&n===Ye.modelId&&t.push({...Ye,type:"item"}),ae&&n===ae.modelId&&t.push({...ae,type:"category"}),!t.length)return!1;const i=t.reduce((a,s)=>a?(s.ts||0)>(a.ts||0)?s:a:s,null);if(!i)return!1;if(i.type==="category"){if(Ir(i))return!0}else if(i.type==="item"&&_r(i))return!0;return!1}function _r(e){const n=C[k],t=en(n)||(n?n.id:null);if(!n||t!==e.modelId)return!1;const s=(n.data.categories||[]).find(d=>d.id===e.categoryId);if(!s)return!1;s.items=s.items||[];const r=Math.min(Math.max(e.index,0),s.items.length);return s.items.splice(r,0,e.item),Ye=null,kn(),L=null,ee=null,sn(),dn(),cn(),wt(),pn(e.item.id),console.log("[Blockscape] undo delete restored",e.item.id),!0}function Ir(e){const n=C[k],t=en(n)||(n?n.id:null);if(!n||t!==e.modelId)return!1;const i=n.data;i.categories=i.categories||[];const a=Math.min(Math.max(e.index,0),i.categories.length);return i.categories.splice(a,0,e.category),ae=null,L=null,ee=null,z=e.category.id,fe=null,sn(),dn(),cn(),kt(),Vn(e.category.id),console.log("[Blockscape] undo delete restored category",e.category.id),!0}function ls(){if(!L||k<0)return!1;const n=C[k].data.categories||[];if(!n.length)return!1;const t=he.get(L);let i=null;if(t!=null&&t.catId&&(i=n.find(g=>g.id===t.catId)),i||(i=n.find(g=>(g.items||[]).some(b=>b.id===L))),!i||!Array.isArray(i.items))return!1;const a=i.items.findIndex(g=>g.id===L);if(a===-1)return!1;const s=i.items.splice(a,1)[0];if(!s)return!1;const r=C[k];Ye={item:s,categoryId:i.id,index:a,modelId:en(r)||(r?r.id:null),ts:Date.now()};const p=(()=>{var b;if(i.items.length){const A=Math.min(a,i.items.length-1);return((b=i.items[A])==null?void 0:b.id)||null}const g=n.findIndex(A=>A.id===i.id);if(g===-1)return null;for(let A=g+1;A<n.length;A++){const I=n[A].items||[];if(I.length)return I[0].id}for(let A=g-1;A>=0;A--){const I=n[A].items||[];if(I.length)return I[0].id}return null})();return kn(),L=null,ee=null,fe=null,sn(),dn(),cn(),wt(),p?pn(p):Xt(),console.log("[Blockscape] removed item",s.id),!0}function xr(){var d,p;const e=Qt();if(!e||k<0)return!1;const t=C[k].data.categories||[];if(!t.length)return!1;const i=t.findIndex(g=>g.id===e);if(i===-1)return!1;const[a]=t.splice(i,1);if(!a)return!1;const s=C[k];ae={category:a,index:i,modelId:en(s)||(s?s.id:null),ts:Date.now()},z=null,L=null,ee=null,fe=null,sn(),dn(),cn();const r=((d=t[i])==null?void 0:d.id)||((p=t[i-1])==null?void 0:p.id)||null;return r?Vn(r):Xt(),console.log("[Blockscape] removed category",a.id),!0}function Ar(e){if(!e)return!1;const n=L;L=e;const t=ls();return t||(L=n,sn()),t}Ve&&(ui(),Ve.addEventListener("click",async e=>{const n=e.target.closest("button[data-set-id]");if(!n)return;const t=n.dataset.setId||pt;if(t!==Ge){if(C.length){const i=C.length===1?"":"s";if(!window.confirm(`Switching portfolio will discard the ${C.length} current model${i}. Continue?`))return}try{await Mr(t)}catch(i){console.error("[Blockscape] directory load error:",i),alert("Failed to load that set (see console).")}}})),X&&X.addEventListener("click",async()=>{const e=c.value||"";if(!e.trim()){alert("JSON editor is empty.");return}await Ra(e)?alert("JSON copied to clipboard."):window.prompt("Copy this JSON manually:",e)}),ke&&ke.addEventListener("click",async()=>{const e=_o();if(!e){alert("No series available to copy. Create another version first.");return}await Ra(e)?alert("Series JSON copied to clipboard."):window.prompt("Copy this series JSON manually:",e)}),P&&P.addEventListener("click",async()=>{try{const e=await qs();if(!e){alert("Clipboard is empty.");return}c.value=e,c.focus()}catch(e){console.warn("[Blockscape] clipboard read failed",e),alert("Unable to read from the clipboard. Use Cmd/Ctrl+V inside the editor instead.")}}),document.getElementById("appendFromBox").onclick=()=>{try{const e=zn(c.value,"Pasted",{promptForSeriesName:!0});if(!e.length){alert("No valid JSON found to append.");return}console.log("[Blockscape] appending",e.length,"model(s)");let n=null;e.forEach((t,i)=>{const a=Fn(t,{versionLabel:e.length>1?`paste #${i+1}`:"paste"});n==null&&(n=a)}),k===-1&&n!=null?on(n):Jn()}catch(e){console.error("[Blockscape] append error:",e),alert("Append error (see console).")}},document.getElementById("replaceActive").onclick=()=>{var e;if(k<0){alert("No active model selected.");return}try{const n=JSON.parse(c.value);if(at(n,{titleHint:Oe(C[k]),idHint:en(C[k])||Oe(C[k])}),C[k].data=n,C[k].title=n.title||C[k].title,C[k].isSeries||((e=C[k].apicurioVersions)==null?void 0:e.length)>1){const t=C[k].title||Oe(C[k]);gn(C[k],{seriesName:t,fallbackTitle:t})}pi(),console.log("[Blockscape] replaced active model:",Oe(C[k])),cn(),Ce.updateAvailability()}catch(n){console.error("[Blockscape] replace error:",n),alert("JSON parse error (see console).")}},document.getElementById("file").onchange=async e=>{const n=Array.from(e.target.files||[]);if(n.length)try{console.log("[Blockscape] reading",n.length,"file(s)");let t=null;for(const i of n){const a=await i.text(),s=i.name.replace(/\.[^.]+$/,"")||"File",r=zn(a,s,{seriesTitleOverride:`${s} series`});if(!r.length){console.warn("[Blockscape] no models in file:",i.name);continue}r.forEach((d,p)=>{var te;const g=(((te=d.data)==null?void 0:te.title)??"").toString().trim(),b=r.length>1?`${i.name} #${p+1}`:i.name,A=`${s} series`,I=d.isSeries?A:null;let x={...d};if(d.isSeries){const Ee=I||g||d.title||b||"unknown";x.title=Ee;const Ne=ut(Ee||"unknown");li(x,Ne),gn(x,{seriesName:Ee,fallbackTitle:"unknown"}),x.apicurioArtifactName=x.apicurioArtifactName||Ee}else x.title=g||b;const $=Fn({...x,apicurioArtifactName:x.apicurioArtifactName||I||x.apicurioArtifactName},{versionLabel:i.name});t==null&&(t=$)})}k===-1&&t!=null?on(t):Jn()}catch(t){console.error("[Blockscape] file load error:",t),alert("File load error (see console).")}finally{e.target.value=""}},document.addEventListener("paste",Tr);function Tr(e){var a;if(!ot())return;const n=((a=e.clipboardData)==null?void 0:a.getData("text/plain"))||window.clipboardData&&window.clipboardData.getData("Text")||"";if(!Ho(n))return;let t=[];try{t=zn(n,"Clipboard",{promptForSeriesName:!0})}catch(s){console.warn("[Blockscape] clipboard paste ignored (invalid JSON)",s);return}if(!t.length)return;e.preventDefault();let i=null;t.forEach((s,r)=>{const d=Fn(s,{versionLabel:t.length>1?`paste #${r+1}`:"paste"});i==null&&(i=d)}),console.log(`[Blockscape] pasted ${t.length} model(s) from clipboard`),i!=null&&on(i)}j.addEventListener("click",e=>{const n=e.target.closest("button[data-index]");if(!n)return;const t=parseInt(n.dataset.index,10);Number.isInteger(t)&&(Ao(),on(t))}),document.getElementById("removeModel").onclick=()=>{if(k<0)return;const e=Oe(C[k]);if(!window.confirm(`Remove "${e}" from this session?`))return;if(console.log("[Blockscape] removing model:",Oe(C[k])),C.splice(k,1),!C.length){k=-1,U=null,S.innerHTML="",w.innerHTML="",c.value="",Jn(),pi();return}const t=Math.min(k,C.length-1);on(t)},R&&(R.addEventListener("input",e=>{Vi(e.target.value||"")}),R.addEventListener("focus",()=>{R.value&&R.value.trim()&&Ga(R.value)})),Q&&Q.addEventListener("click",e=>{const n=e.target.closest(".search-result");if(!n)return;const t=parseInt(n.dataset.modelIndex||"-1",10),i=n.dataset.itemId;Oo({modelIndex:t,itemId:i})}),document.addEventListener("click",e=>{if(!Q||Q.hidden)return;const n=e.target;Q.contains(n)||R&&(n===R||R.contains(n))||(Q.hidden=!0)}),G&&q&&re&&G.addEventListener("submit",async e=>{e.preventDefault();const n=q.value.trim();if(!n){alert("Please enter a URL"),q.focus();return}const t=await Gi(n);if(typeof t=="number"){on(t),q.value="";const i=document.getElementById("urlHint");i&&(i.textContent="")}}),function(){const n=document.getElementById("urlHint");if(!q||!n)return;let t=null;q.addEventListener("input",()=>{clearTimeout(t),t=setTimeout(()=>{const a=q.value.slice(-12);n.textContent=a?`…${a}`:""},300)})}();function cn(){if(!(k<0))try{U=qo(C[k].data),wt()}catch(e){console.error("[Blockscape] rebuild error (active model likely malformed):",e),alert("Active model parse/render error (see console).")}}function Lr(){C.length=0,k=-1,Ge=pt,U=null,he=new Map,ze=new Map,L=null,z=null,ee=null,fe=null,Ye=null,ae=null,Hn=null,bn&&(clearTimeout(bn),bn=null),Gn=[],S&&(S.innerHTML=""),w&&(w.innerHTML=""),c&&(c.value=""),R&&(R.value="",Vi("")),Q&&(Q.innerHTML="",Q.hidden=!0),sn(),pi()}async function Nr(e){const n=Vl(e);if(n!=null)return n;const t=await fetch(Ul(e),{cache:"no-store"});if(!t.ok)throw new Error(`[Blockscape] ${e} not fetched (${t.status})`);return t.text()}async function Wi(e=xi,{replaceExisting:n=!1,includeSeed:t=!1,setActiveAfterLoad:i=!1,collectionLabel:a}={}){const s=Array.isArray(e)?[...e]:[];n&&Lr();let r=null;t&&o&&zn(o,"Blockscape").forEach(p=>{const g=Fn(p,{versionLabel:"seed"});r==null&&(r=g)});for(const d of s){const p=Ti(d);if(p)try{const g=await Nr(p),b=p.replace(/\.[^.]+$/,"")||"Model",A=zn(g,b,{seriesTitleOverride:`${b} series`});if(!A.length){console.warn("[Blockscape] no models found in",p);continue}A.forEach(I=>{let x={...I};if(I.isSeries){const te=`${b} series`;x={...I,title:te,apicurioArtifactName:te};const Ee=ut(te||"unknown");li(x,Ee),gn(x,{seriesName:te,fallbackTitle:"unknown"})}const $=Fn(x,{versionLabel:a||p});r==null&&(r=$)}),console.log(`[Blockscape] loaded ${A.length} model(s) from ${a||p}`)}catch(g){console.log("[Blockscape] could not load",p,"- this is normal for file:// protocol",g)}}return i?r!=null?on(r):C.length?on(0):Jn():Jn(),Ce.updateAvailability(),r}function ui(){if(!Ve)return;Ve.innerHTML="",[{id:pt,title:"Default maps",count:xi.length},...Array.from(We.entries()).sort((n,t)=>n[0].localeCompare(t[0])).map(([n,t])=>({id:n,title:n,count:t.length}))].forEach(n=>{const t=document.createElement("li");t.className="model-nav-item";const i=document.createElement("button");i.type="button",i.className="model-nav-button"+(n.id===Ge?" is-active":""),i.dataset.setId=n.id,i.setAttribute("aria-current",n.id===Ge?"true":"false");const a=document.createElement("span");a.className="model-nav-label";const s=document.createElement("span");s.className="model-nav-title",s.textContent=n.title,a.appendChild(s);const r=document.createElement("span");r.className="model-nav-meta",r.textContent=`${n.count} file${n.count===1?"":"s"}`,i.appendChild(a),i.appendChild(r),t.appendChild(i),Ve.appendChild(t)})}async function Mr(e){if(e===pt){await Wi(xi,{replaceExisting:!0,includeSeed:!0,setActiveAfterLoad:!0,collectionLabel:"default"}),Ge=pt,ui();return}const n=We.get(e)||[];if(!n.length){alert(`No .bs files found in ${e}.`);return}await Wi(n.map(t=>t.relativePath),{replaceExisting:!0,includeSeed:!1,setActiveAfterLoad:!0,collectionLabel:e}),Ge=e,ui()}async function Pr(e){const n=[{cache:"no-store"},{cache:"reload"},{}];let t=null;for(const i of n)try{console.log(`[Blockscape] fetching ${e} with cache="${i.cache??"default"}"`);const a=await fetch(e,i);if(a.status===304){console.warn("[Blockscape] fetch returned 304 (Not Modified), retrying without cache");continue}if(!a.ok)throw new Error(`HTTP ${a.status}: ${a.statusText}`);return await a.text()}catch(a){t=a}throw t||new Error("Unable to fetch URL")}function Rr(e){if(!e)return;const n=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),t=[];for(;n.nextNode();)t.push(n.currentNode);t.forEach(i=>Br(i)),e.querySelectorAll("a[href]").forEach(i=>{const a=i.getAttribute("href");ds(a)&&cs(i,a)})}function Br(e){var d,p;if(!e||!e.nodeValue||!e.nodeValue.includes("http")||(p=(d=e.parentNode)==null?void 0:d.closest)!=null&&p.call(d,"a"))return;const n=e.nodeValue,t=/(https?:\/\/[^\s<]+)/gi,i=[];let a;for(;(a=t.exec(n))!==null;)i.push({url:a[0],index:a.index});if(!i.length)return;const s=document.createDocumentFragment();let r=0;i.forEach(({url:g,index:b})=>{b>r&&s.appendChild(document.createTextNode(n.slice(r,b))),s.appendChild(Dr(g)),r=b+g.length}),r<n.length&&s.appendChild(document.createTextNode(n.slice(r))),e.parentNode.replaceChild(s,e)}function Dr(e){const n=document.createElement("a");return n.href=e,n.textContent=e,n.target="_blank",n.rel="noopener noreferrer",ds(e)&&cs(n,e),n}function cs(e,n){!e||e.dataset.gistLinkBound==="true"||(e.dataset.gistLinkBound="true",e.classList.add("blockscape-gist-link"),e.title="Load this Gist into Blockscape",e.addEventListener("click",t=>Or(t,n,e)))}async function Or(e,n,t){if(e.preventDefault(),e.stopPropagation(),!(!n||t.dataset.loading==="true")){t.dataset.loading="true",t.classList.add("is-loading");try{await Gi(n)}finally{t.dataset.loading="false",t.classList.remove("is-loading")}}}function ds(e){if(typeof e!="string")return!1;try{const t=new URL(e,window.location.href).hostname.toLowerCase();return t==="gist.githubusercontent.com"||t.startsWith("gist.")&&t.endsWith("githubusercontent.com")}catch{return!1}}async function Gi(e){try{console.log("[Blockscape] loading from URL:",e);const n=await Pr(e),i=(e.split("/").pop()||"").replace(/\.[^.]+$/,"")||"URL Model";let a;try{a=zn(n,i)}catch(r){throw new Error(`Invalid JSON payload: ${r.message}`)}if(!a.length)throw new Error("No JSON objects found in response.");let s=null;return a.forEach((r,d)=>{var x;const p=(((x=r.data)==null?void 0:x.title)??"").toString().trim(),g=a.length>1?`${i} #${d+1}`:i,b=r.isSeries?`${i} series`:null;let A={...r};if(r.isSeries){const $=b||p||A.title||g;A={...r,title:$,apicurioArtifactName:$||r.apicurioArtifactName};const te=ut($||"unknown");li(A,te),gn(A,{seriesName:$||b||"unknown",fallbackTitle:"unknown"}),console.log("[Blockscape] loadFromUrl: series slug applied",{seriesSlug:te,url:e,baseName:i,seriesTitle:$})}const I=Fn({...A,title:p||A.title||g,apicurioArtifactName:A.apicurioArtifactName||b||r.apicurioArtifactName},{versionLabel:i});s==null&&(s=I)}),console.log(`[Blockscape] loaded ${a.length} model(s) from URL:`,i),k===-1&&s!=null?on(s):Jn(),s}catch(n){return console.error("[Blockscape] URL load error:",n),alert(`Failed to load JSON from URL: ${n.message}`),null}}(async function(){if(!o)throw new Error("Seed template is empty.");const n=zn(o,"Blockscape");if(!n.length)throw new Error("Seed template could not be parsed.");let t=null;n.forEach(p=>{const g=Fn(p,{versionLabel:"seed"});t==null&&(t=g)}),await Wi(xi),Ge=pt,ui();const i=await jo(),a=za(),s=a==null?void 0:a.index,r=Fo();on(typeof i=="number"?i:typeof r=="number"?r:typeof s=="number"?s:t??0)})()}function Fl(o){let c;return{c(){c=O("div"),c.innerHTML='<div id="shortcutHelpBackdrop" class="shortcut-help__backdrop"></div> <div class="shortcut-help__panel" tabindex="-1"><div class="shortcut-help__header"><div class="shortcut-help__title"><h2 id="shortcutHelpTitle">Help</h2></div> <button id="shortcutHelpClose" class="shortcut-help__close" type="button" aria-label="Close keyboard shortcuts">×</button></div> <section class="shortcut-help__section"><ul class="shortcut-help__tips"><li>Play around with the example maps.</li> <li>Read about <a href="https://www.wardleymaps.com" target="_blank" rel="noreferrer noopener">Wardley Maps</a>.</li> <li>Copy this URL and use &quot;Load URL&quot;: <a href="https://gist.githubusercontent.com/pwright/86dbb074b35d6d17671bf17ecbf1a824/raw/git.bs" target="_blank" rel="noreferrer noopener">https://gist.githubusercontent.com/pwright/86dbb074b35d6d17671bf17ecbf1a824/raw/git.bs</a></li> <li>Edit maps by moving items with Shift + Arrow keys.</li></ul></section> <section class="shortcut-help__section"><h3 class="shortcut-help__section-title">Keyboard shortcuts</h3> <div id="shortcutHelpList" class="shortcut-help__list" aria-live="polite"></div></section></div>',y(c,"id","shortcutHelp"),y(c,"class","shortcut-help"),c.hidden=!0,y(c,"aria-hidden","true"),y(c,"role","dialog"),y(c,"aria-modal","true"),y(c,"aria-labelledby","shortcutHelpTitle")},m(f,S){rn(f,c,S)},p:qn,i:qn,o:qn,d(f){f&&Xe(c)}}}class jl extends La{constructor(c){super(),Ta(this,c,null,Fl,xa,{})}}const ql=`Generate a blockscape [map|series] for the domain of [DOMAIN]

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
\`\`\``;function Ls(o){let c,f,S,w,N,j,u,G;return{c(){c=O("div"),f=O("div"),S=O("a"),w=Aa("Open Blockscape GPT"),N=oe(),j=O("div"),j.textContent="Paste the copied prompt into that chat.",u=oe(),G=O("div"),G.innerHTML='<span>Gem is not available yet</span> <div class="new-panel__hint">https://gemini.google.com/gems/create</div>',y(S,"href",Gl),y(S,"target","_blank"),y(S,"rel","noreferrer"),y(j,"class","new-panel__hint"),y(f,"class","new-panel__link"),y(G,"class","new-panel__link new-panel__link--disabled"),y(c,"class","new-panel__links")},m(q,re){rn(q,c,re),T(c,f),T(f,S),T(S,w),T(f,N),T(f,j),T(c,u),T(c,G)},p:qn,d(q){q&&Xe(c)}}}function Ns(o){let c,f,S,w,N,j;return{c(){c=O("div"),f=O("div"),f.textContent="Generated prompt",S=oe(),w=O("textarea"),y(f,"class","new-panel__prompt-label"),y(w,"class","pf-v5-c-form-control new-panel__textarea"),y(w,"rows","4"),w.readOnly=!0,y(c,"class","new-panel__prompt")},m(u,G){rn(u,c,G),T(c,f),T(c,S),T(c,w),Nt(w,o[4]),N||(j=mt(w,"input",o[12]),N=!0)},p(u,G){G&16&&Nt(w,u[4])},d(u){u&&Xe(c),N=!1,j()}}}function Wl(o){let c,f,S,w,N,j,u,G,q,re,J,ce,pe,Re,V,W,Y,F,X,ke,P,de,me,ie,le,we,ue,ye,nn,je,R,Q,Ve,Be,$e,qe,xe,We,C,k,Ge,Ce,U,he,ze,L=o[2]==="gpt"&&Ls(),z=o[4]&&o[5]&&Ns(o);return U=Qr(o[10][0]),{c(){c=O("div"),f=O("div"),S=oe(),w=O("div"),N=O("div"),N.innerHTML='<div class="shortcut-help__title"><h2 id="newPanelTitle">New blockscape</h2> <p class="shortcut-help__subtitle">Describe what you need and we will create a prompt for you.</p></div> <button id="newPanelClose" class="shortcut-help__close" type="button" aria-label="Close new panel">×</button>',j=oe(),u=O("form"),G=O("div"),q=O("label"),q.textContent="Domain",re=oe(),J=O("p"),J.textContent="Describe what you want to create a map for.",ce=oe(),pe=O("textarea"),Re=oe(),V=O("div"),W=O("label"),Y=O("input"),F=oe(),X=O("span"),X.innerHTML=`Series
            <span class="new-panel__hint">Toggle on to create a series instead of a single map.</span>`,ke=oe(),P=O("fieldset"),de=O("legend"),de.textContent="Target",me=oe(),ie=O("p"),ie.textContent="Choose where you plan to use the prompt.",le=oe(),we=O("label"),ue=O("input"),ye=oe(),nn=O("div"),nn.innerHTML='<div class="new-panel__option-title">GPT or Gem</div> <div class="new-panel__hint">Copies a simple prompt tailored for GPT or Gem.</div>',je=oe(),R=O("label"),Q=O("input"),Ve=oe(),Be=O("div"),Be.innerHTML='<div class="new-panel__option-title">Plain LLM</div> <div class="new-panel__hint">Creates a large prompt to generate blockscape from scratch.</div>',$e=oe(),qe=O("div"),xe=O("button"),xe.textContent="Copy prompt",We=oe(),C=O("div"),k=Aa(o[3]),Ge=oe(),L&&L.c(),Ce=oe(),z&&z.c(),y(f,"id","newPanelBackdrop"),y(f,"class","shortcut-help__backdrop"),y(N,"class","shortcut-help__header"),y(q,"for","newDomain"),y(J,"class","new-panel__hint"),y(pe,"id","newDomain"),y(pe,"class","pf-v5-c-form-control new-panel__textarea"),y(pe,"rows","4"),pe.required=!0,y(pe,"placeholder","Ex: Companies building open-source geospatial tools"),y(G,"class","new-panel__field"),y(Y,"id","seriesToggle"),y(Y,"type","checkbox"),y(W,"class","new-panel__toggle"),y(W,"for","seriesToggle"),y(V,"class","new-panel__field"),y(ie,"class","new-panel__hint"),y(ue,"type","radio"),y(ue,"name","target"),ue.__value="gpt",Nt(ue,ue.__value),y(we,"class","new-panel__option"),y(Q,"type","radio"),y(Q,"name","target"),Q.__value="plain",Nt(Q,Q.__value),y(R,"class","new-panel__option"),y(P,"class","new-panel__field"),y(xe,"class","pf-v5-c-button pf-m-primary"),y(xe,"type","submit"),y(C,"class","new-panel__status"),y(C,"aria-live","polite"),y(qe,"class","new-panel__actions"),y(u,"class","shortcut-help__list new-panel__form"),y(w,"class","shortcut-help__panel"),y(w,"tabindex","-1"),y(c,"id","newPanel"),y(c,"class","shortcut-help"),c.hidden=!0,y(c,"aria-hidden","true"),y(c,"role","dialog"),y(c,"aria-modal","true"),y(c,"aria-labelledby","newPanelTitle"),U.p(ue,Q)},m(ee,fe){rn(ee,c,fe),T(c,f),T(c,S),T(c,w),T(w,N),T(w,j),T(w,u),T(u,G),T(G,q),T(G,re),T(G,J),T(G,ce),T(G,pe),Nt(pe,o[0]),T(u,Re),T(u,V),T(V,W),T(W,Y),Y.checked=o[1],T(W,F),T(W,X),T(u,ke),T(u,P),T(P,de),T(P,me),T(P,ie),T(P,le),T(P,we),T(we,ue),ue.checked=ue.__value===o[2],T(we,ye),T(we,nn),T(P,je),T(P,R),T(R,Q),Q.checked=Q.__value===o[2],T(R,Ve),T(R,Be),T(u,$e),T(u,qe),T(qe,xe),T(qe,We),T(qe,C),T(C,k),T(u,Ge),L&&L.m(u,null),T(u,Ce),z&&z.m(u,null),he||(ze=[mt(pe,"input",o[7]),mt(Y,"change",o[8]),mt(ue,"change",o[9]),mt(Q,"change",o[11]),mt(u,"submit",Kr(o[6]))],he=!0)},p(ee,[fe]){fe&1&&Nt(pe,ee[0]),fe&2&&(Y.checked=ee[1]),fe&4&&(ue.checked=ue.__value===ee[2]),fe&4&&(Q.checked=Q.__value===ee[2]),fe&8&&Yr(k,ee[3]),ee[2]==="gpt"?L?L.p(ee,fe):(L=Ls(),L.c(),L.m(u,Ce)):L&&(L.d(1),L=null),ee[4]&&ee[5]?z?z.p(ee,fe):(z=Ns(ee),z.c(),z.m(u,null)):z&&(z.d(1),z=null)},i:qn,o:qn,d(ee){ee&&Xe(c),L&&L.d(),z&&z.d(),U.r(),he=!1,si(ze)}}}const Gl="https://chatgpt.com/g/g-690f6217889c819191786ef16481f534-blockscape";function Jl(o,c,f){let S="",w=!1,N="gpt",j="",u="",G=!1;const q=()=>{var F;return typeof navigator<"u"&&!!((F=navigator.clipboard)!=null&&F.writeText)};function re(F){const X=F||"[DOMAIN]",ke=w?"series":"map",de=ql.replaceAll("[DOMAIN NAME]",X).replaceAll("[DOMAIN]",X).replaceAll("[map|series]",ke).split(`
`),me=`Generate a **blockscape ${ke}** for the domain of ${X}.`,ie=de.findIndex(we=>we.toLowerCase().includes("generate a **blockscape value")||we.toLowerCase().includes("generate a blockscape [map|series]")||we.toLowerCase().startsWith("generate a blockscape"));ie>=0?de[ie]=me:de.unshift(me);const le=w?`

User requested a series (return an array of models).`:"";return`${de.join(`
`).trim()}${le}`}async function J(F){F.preventDefault();const X=S.trim();if(f(3,j=""),f(5,G=N!=="gpt"),!X){f(3,j="Add a domain to generate a prompt."),f(4,u="");return}if(N==="gpt"?f(4,u=`${w?"Create a series":"Create a map"} for ${X}`):(f(4,u=re(X)),f(5,G=!0)),!q()){f(3,j="Clipboard access is unavailable. Copy the prompt below."),f(5,G=!0);return}try{await navigator.clipboard.writeText(u),f(3,j=N==="gpt"?"Prompt copied. Open the Blockscape GPT link to paste it.":"Prompt copied to clipboard."),N==="gpt"&&f(5,G=!1)}catch(P){console.warn("[Blockscape] clipboard write failed",P),f(3,j="Copy failed. Use the prompt below."),f(5,G=!0)}}const ce=[[]];function pe(){S=this.value,f(0,S)}function Re(){w=this.checked,f(1,w)}function V(){N=this.__value,f(2,N)}function W(){N=this.__value,f(2,N)}function Y(){u=this.value,f(4,u)}return[S,w,N,j,u,G,J,pe,Re,V,ce,W,Y]}class zl extends La{constructor(c){super(),Ta(this,c,Jl,Wl,xa,{})}}const{document:Ms}=zr;function Kl(o){let c,f,S,w,N,j,u,G,q,re,J,ce,pe,Re,V,W,Y,F,X,ke,P,de,me,ie,le,we,ue,ye,nn,je,R,Q,Ve,Be,$e,qe,xe,We,C,k,Ge,Ce=`<script id="seed" type="application/json">${o[1]}<\/script>`,U,he,ze,L,z,ee,fe,mn,hn,un,De,On,Ye;return mn=new jl({}),un=new zl({}),{c(){c=O("link"),f=oe(),S=O("div"),w=O("header"),N=O("div"),j=O("div"),u=O("div"),G=O("div"),G.innerHTML='<h1 class="sr-only">Blockscape</h1> <img class="blockscape-brand__logo" src="logos/blockscape-logo.svg" alt="Blockscape — landscape tile explorer" decoding="async"/> <a href="https://github.com/pwright/blockscape" target="_blank" class="pf-v5-c-button pf-m-plain" title="View on GitHub" aria-label="View Blockscape on GitHub"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a>',q=oe(),re=O("div"),J=O("div"),ce=O("button"),pe=O("span"),pe.textContent="Toggle search and edit tools",Re=oe(),V=O("span"),V.textContent="▾",W=oe(),Y=O("button"),Y.textContent="New",F=oe(),X=O("form"),X.innerHTML='<label class="sr-only" for="urlInput">Load JSON from URL</label> <input id="urlInput" name="modelUrl" class="pf-v5-c-form-control is-url" type="url" placeholder="Load JSON from URL…" autocomplete="additional-name"/> <button id="loadUrl" class="pf-v5-c-button pf-m-primary" type="submit">Load URL</button> <div id="urlHint" class="url-hint" aria-live="polite"></div>',ke=oe(),P=O("label"),P.innerHTML='<span>Open</span> <input id="file" type="file" accept=".bs,.json,.txt" multiple=""/>',de=oe(),me=O("button"),me.textContent="Help",ie=oe(),le=O("div"),we=O("div"),we.innerHTML='<label class="sr-only" for="search">Search tiles</label> <input id="search" class="pf-v5-c-form-control" type="text" placeholder="Search…"/> <div id="searchResults" class="search-results" role="listbox" aria-label="Search across all models" hidden=""></div>',ue=oe(),ye=O("button"),ye.textContent="Edit",nn=oe(),je=O("button"),je.textContent="Share",Be=oe(),$e=O("div"),$e.innerHTML='<span class="legend-entry"><span class="legend-dot legend-dot--dep"></span> enables</span> <span class="legend-entry"><span class="legend-dot legend-dot--revdep"></span> dependents</span> <span class="legend-entry"><span class="legend-dot legend-dot--reused"></span> reused</span> <span class="legend-entry"><span class="legend-dot legend-dot--external"></span> external link</span>',qe=oe(),xe=O("main"),xe.innerHTML=`<div class="blockscape-content"><aside class="blockscape-sidebar" aria-label="Models"><div class="sidebar-heading">Models</div> <ul id="modelList" class="model-nav-list"></ul> <div class="model-actions"><button id="removeModel" class="pf-v5-c-button pf-m-tertiary" type="button" title="Remove selected model">Remove active</button> <button id="clear" class="pf-v5-c-button pf-m-tertiary" type="button">Clear selection</button></div> <div class="sidebar-heading sidebar-heading--sub">Portfolio</div> <ul id="modelSets" class="model-nav-list model-nav-list--sets"></ul></aside> <div class="blockscape-main"><section class="pf-v5-c-page__main-section blockscape-json-panel" hidden="" aria-label="Model source JSON editor"><p class="blockscape-json-panel__title">Paste / edit JSON for the <b>active</b> model (schema below)</p> <div class="muted">Schema: <code>{ id, title, abstract?, categories:[{id,title,items:[{id,name,logo?,external?:url,color?,deps:[]}}], links?:[{from,to}] }</code><br/>
            You can paste multiple objects separated by <code>---</code> or <code>%%%</code>, or a JSON array of models, to append several models.
            A single object replaces only when you click “Replace active with JSON”. Tip: with no input focused, press
            Cmd/Ctrl+V anywhere on the page to append clipboard JSON instantly.</div> <div class="blockscape-json-controls"><textarea id="jsonBox" class="pf-v5-c-form-control" aria-label="JSON editor for the active model"></textarea> <div class="blockscape-json-actions"><button id="copyJson" class="pf-v5-c-button pf-m-tertiary" type="button" title="Copy the current JSON to your clipboard">Copy</button> <button id="copySeries" class="pf-v5-c-button pf-m-tertiary" type="button" title="Copy every version in this series as an array">Copy series</button> <button id="pasteJson" class="pf-v5-c-button pf-m-tertiary" type="button" title="Paste clipboard JSON to replace the editor contents">Paste</button> <button id="appendFromBox" class="pf-v5-c-button pf-m-primary" type="button">Append model(s)</button> <button id="replaceActive" class="pf-v5-c-button pf-m-secondary" type="button">Replace active with
                JSON</button> <button id="createVersion" class="pf-v5-c-button pf-m-secondary" type="button" title="Create a new version from the current map">New version</button></div></div></section> <section class="pf-v5-c-page__main-section blockscape-main-section"><div id="app" aria-live="polite"></div></section></div></div>`,We=oe(),C=O("footer"),C.innerHTML='<div class="blockscape-footer__inner"><a href="https://pwright.github.io/backscape/" target="_blank" rel="noreferrer noopener">Old versions</a></div>',k=oe(),Ge=new Zr(!1),U=oe(),he=Bs("svg"),ze=oe(),L=O("div"),z=oe(),ee=O("div"),ee.innerHTML='<div class="item-preview__header"><span class="item-preview__title">Preview</span> <div class="item-preview__actions" hidden=""></div> <button type="button" class="item-preview__close" aria-label="Close preview">×</button></div> <div class="item-preview__body"><div class="item-preview__status">Right-click a tile to see related notes.</div></div>',fe=oe(),Is(mn.$$.fragment),hn=oe(),Is(un.$$.fragment),Ms.title="Blockscape — simple landscape-style tiles",y(c,"rel","icon"),y(c,"type","image/svg+xml"),y(c,"href","./favicon.svg"),y(G,"class","blockscape-brand"),y(pe,"class","sr-only"),y(V,"class","blockscape-toolbar__toggle-icon"),y(V,"aria-hidden","true"),y(ce,"class","pf-v5-c-button pf-m-plain blockscape-toolbar__toggle"),y(ce,"type","button"),y(ce,"aria-expanded",o[0]),y(ce,"aria-controls","blockscapeHeaderExtras"),y(Y,"id","newPanelButton"),y(Y,"class","pf-v5-c-button pf-m-primary"),y(Y,"type","button"),y(Y,"title","Create something new"),y(X,"id","urlForm"),y(X,"class","blockscape-url-form"),y(X,"autocomplete","on"),X.noValidate=!0,y(P,"class","pf-v5-c-button pf-m-primary blockscape-file"),y(me,"id","helpButton"),y(me,"class","pf-v5-c-button pf-m-primary"),y(me,"type","button"),y(me,"title","Show keyboard shortcuts"),y(J,"class","blockscape-toolbar__primary"),y(we,"class","blockscape-search"),y(ye,"id","openInEditor"),y(ye,"class","pf-v5-c-button pf-m-secondary"),y(ye,"type","button"),y(ye,"title","Open current JSON in the editor"),y(je,"id","shareModel"),y(je,"class","pf-v5-c-button pf-m-secondary"),y(je,"type","button"),y(je,"title","Copy a shareable URL for this model"),y(le,"id","blockscapeHeaderExtras"),y(le,"class","blockscape-toolbar__extras"),le.hidden=R=!o[0],y(le,"aria-hidden",Q=!o[0]),y(re,"class","blockscape-toolbar__controls"),y(re,"data-expanded",Ve=o[0]?"true":"false"),y($e,"class","blockscape-legend"),y($e,"role","presentation"),y(u,"class","blockscape-toolbar"),y(j,"class","pf-v5-c-masthead__content"),y(N,"class","pf-v5-c-masthead pf-m-display-inline blockscape-masthead"),y(w,"class","pf-v5-c-page__header"),y(xe,"class","pf-v5-c-page__main"),y(C,"class","pf-v5-c-page__footer blockscape-footer"),y(S,"class","pf-v5-c-page"),Ge.a=U,y(he,"id","overlay"),y(he,"class","svg-layer"),y(L,"id","tabTooltip"),y(L,"class","blockscape-tab-tooltip"),L.hidden=!0,y(L,"aria-hidden","true"),y(ee,"id","itemPreview"),y(ee,"class","item-preview"),ee.hidden=!0,y(ee,"aria-hidden","true")},m(ae,Le){T(Ms.head,c),rn(ae,f,Le),rn(ae,S,Le),T(S,w),T(w,N),T(N,j),T(j,u),T(u,G),T(u,q),T(u,re),T(re,J),T(J,ce),T(ce,pe),T(ce,Re),T(ce,V),T(J,W),T(J,Y),T(J,F),T(J,X),T(J,ke),T(J,P),T(J,de),T(J,me),T(re,ie),T(re,le),T(le,we),T(le,ue),T(le,ye),T(le,nn),T(le,je),T(u,Be),T(u,$e),T(S,qe),T(S,xe),T(S,We),T(S,C),rn(ae,k,Le),Ge.m(Ce,ae,Le),rn(ae,U,Le),rn(ae,he,Le),rn(ae,ze,Le),rn(ae,L,Le),rn(ae,z,Le),rn(ae,ee,Le),rn(ae,fe,Le),_a(mn,ae,Le),rn(ae,hn,Le),_a(un,ae,Le),De=!0,On||(Ye=mt(ce,"click",o[2]),On=!0)},p(ae,[Le]){(!De||Le&1)&&y(ce,"aria-expanded",ae[0]),(!De||Le&1&&R!==(R=!ae[0]))&&(le.hidden=R),(!De||Le&1&&Q!==(Q=!ae[0]))&&y(le,"aria-hidden",Q),(!De||Le&1&&Ve!==(Ve=ae[0]?"true":"false"))&&y(re,"data-expanded",Ve)},i(ae){De||(Ea(mn.$$.fragment,ae),Ea(un.$$.fragment,ae),De=!0)},o(ae){_s(mn.$$.fragment,ae),_s(un.$$.fragment,ae),De=!1},d(ae){ae&&(Xe(f),Xe(S),Xe(k),Ge.d(),Xe(U),Xe(he),Xe(ze),Xe(L),Xe(z),Xe(ee),Xe(fe),Xe(hn)),Xe(c),Ia(mn,ae),Ia(un,ae),On=!1,Ye()}}}function Ql(o,c,f){const S=`
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
}`;let w=!1;const N=()=>{if(f(0,w=!w),!w){const j=document.getElementById("search");j&&j.value&&(j.value="",j.dispatchEvent(new Event("input",{bubbles:!0})))}};return nl(()=>{Hl()}),[w,S,N]}class Xl extends La{constructor(c){super(),Ta(this,c,Ql,Kl,xa,{})}}const Yl=document.getElementById("root");new Xl({target:Yl});
