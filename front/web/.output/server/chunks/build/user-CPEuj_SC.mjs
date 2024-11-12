import { defineComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "user",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h1${ssrRenderAttrs(_attrs)}>\u6B22\u8FCE\u6765\u5230\u60A8\u7684\u4E2A\u4EBA\u4E2D\u5FC3</h1>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=user-CPEuj_SC.mjs.map
