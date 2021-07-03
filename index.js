let code = `import { o as openBlock, c as createBlock, a as createVNode, w as withCtx, b as createTextVNode, r as resolveComponent, d as createRouter, e as createWebHashHistory, f as createApp } from "./vendor.30acece7.js";
let scriptRel;
const seen = {};
const __vitePreload = function preload(baseModule, deps) {
  if (!deps) {
    return baseModule();
  }
  if (scriptRel === void 0) {
    const relList = document.createElement("link").relList;
    scriptRel = relList && relList.supports && relList.supports("modulepreload") ? "modulepreload" : "preload";
  }
  return Promise.all(deps.map((dep) => {
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(\`link[href="\${dep}"]\${cssSelector}\`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", rej);
      });
    }
  })).then(() => baseModule());
};
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" This is ");
const _hoisted_2 = /* @__PURE__ */ createVNode("b", null, "home", -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" page. ");
const _hoisted_4 = /* @__PURE__ */ createVNode("br", null, null, -1);
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" Go to ");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("About");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" page ");
const _sfc_main$1 = {
  expose: [],
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        _hoisted_3,
        _hoisted_4,
        _hoisted_5,
        createVNode(_component_router_link, { to: "/about" }, {
          default: withCtx(() => [
            _hoisted_6
          ]),
          _: 1
        }),
        _hoisted_7
      ]);
    };
  }
};
const routes = [
  { path: "/", name: "Home", component: _sfc_main$1 },
  { path: "/about", name: "About", component: () => __vitePreload(() => import("./About.7865495d.js"), true ? "__VITE_PRELOAD__" : void 0) }
];
var router = createRouter({
  routes,
  history: createWebHashHistory()
});
const _sfc_main = {
  expose: [],
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createBlock(_component_router_view);
    };
  }
};
createApp(_sfc_main).use(router).mount("#app");
`;

let options = {
  safari10: true,
  format: {
    beautify: false,
  },
  compress: {
    passes: 3,
  },
  sourceMap: false,
  module: true,
  toplevel: false,
};

let minifyCode = require("terser").minify(code, options);

console.log(minifyCode);