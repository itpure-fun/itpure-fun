import { e as useRoute, f as __nuxt_component_7 } from './server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { u as useUserStore } from './useHttp-D-HYwUcO.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'lodash-unified';
import 'node:crypto';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Callback",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    route.query.code;
    route.query.state;
    const message = ref("\u767B\u5F55\u4E2D...");
    useUserStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IconSvg = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[100vh] flex justify-center items-center flex-col" }, _attrs))}><div class="animate-bounce w-20 h-20">`);
      _push(ssrRenderComponent(_component_IconSvg, { name: "favicon" }, null, _parent));
      _push(`</div><div class="mt-3">${ssrInterpolate(unref(message))}</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Auth/Callback.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "callback",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AuthCallback = _sfc_main$1;
      _push(ssrRenderComponent(_component_AuthCallback, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/callback.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=callback-D0SlXXjO.mjs.map
