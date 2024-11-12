import { u as useConfigStore, _ as _sfc_main$2 } from './config-C9Ck6i4A.mjs';
import { useSSRContext, defineComponent, withAsyncContext, mergeProps, unref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs } from 'vue/server-renderer';
import './server.mjs';
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
import './useHttp-D-HYwUcO.mjs';
import 'lodash-unified';
import 'node:crypto';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChangeLog",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const configStore = useConfigStore();
    [__temp, __restore] = withAsyncContext(() => configStore.getConfigByCode({
      code: "change_log"
    })), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShadowDom = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-20" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ShadowDom, {
        "source-doc": unref(configStore).configInfo.value
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/ChangeLog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "changelog",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeChangeLog = _sfc_main$1;
      _push(ssrRenderComponent(_component_HomeChangeLog, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/changelog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=changelog-C191RMNI.mjs.map
