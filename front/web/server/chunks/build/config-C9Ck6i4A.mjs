import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { m as defineStore } from './server.mjs';
import { e as useHttp } from './useHttp-D-HYwUcO.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ShadowDom",
  __ssrInlineRender: true,
  props: {
    sourceDoc: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const element = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "element",
        ref: element
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ShadowDom/ShadowDom.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const getConfigByCodeApi = (data) => useHttp.get("/v1/avenue/config/getConfigByCode", data);
const useConfigStore = defineStore("config", {
  //用来存放变量
  state: () => ({
    configInfo: {}
  }),
  //方法
  actions: {
    async getConfigByCode(params) {
      try {
        const result = await getConfigByCodeApi(params);
        if (result.code == 200) {
          this.configInfo = result.data;
          return result.data;
        } else {
          return Promise.reject(new Error(result.message));
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
});

export { _sfc_main as _, useConfigStore as u };
//# sourceMappingURL=config-C9Ck6i4A.mjs.map
