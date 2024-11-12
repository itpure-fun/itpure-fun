import { E as ElIcon, u as useFormSize, a as useEventListener, _ as _export_sfc, b as useProductStore, c as useThrottleFn, d as ElImage, e as ElText, f as ElButton } from './button-Dt8JWPpf.mjs';
import { c as caret_top_default, w as withInstall, b as buildProps, a as componentSizes, d as close_default, s as search_default, E as ElMessage, e as useHttp } from './useHttp-D-HYwUcO.mjs';
import { defineComponent, computed, openBlock, createBlock, Transition, unref, withCtx, createElementBlock, normalizeStyle, normalizeClass, withModifiers, renderSlot, createVNode, createCommentVNode, createElementVNode, useSSRContext, shallowRef, ref, mergeProps, withAsyncContext, createTextVNode, toDisplayString, isRef } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrGetDirectiveProps } from 'vue/server-renderer';
import { g as useNamespace, c as useRuntimeConfig, m as defineStore, _ as _export_sfc$1, i as isObject_1, k as hyphenate_1, l as isString_1 } from './server.mjs';
import { u as useHead } from './vue.8fc199ce-CGkOnIBl.mjs';
import 'lodash-unified';
import 'node:crypto';
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

function unpackToArray(input, options) {
  const unpacked = [];
  const kFn = options.resolveKeyData || ((ctx) => ctx.key);
  const vFn = options.resolveValueData || ((ctx) => ctx.value);
  for (const [k2, v] of Object.entries(input)) {
    unpacked.push(...(Array.isArray(v) ? v : [v]).map((i) => {
      const ctx = { key: k2, value: i };
      const val = vFn(ctx);
      if (typeof val === "object")
        return unpackToArray(val, options);
      if (Array.isArray(val))
        return val;
      return {
        [typeof options.key === "function" ? options.key(ctx) : options.key]: kFn(ctx),
        [typeof options.value === "function" ? options.value(ctx) : options.value]: val
      };
    }).flat());
  }
  return unpacked;
}
function unpackToString(value, options) {
  return Object.entries(value).map(([key, value2]) => {
    if (typeof value2 === "object")
      value2 = unpackToString(value2, options);
    if (options.resolve) {
      const resolved = options.resolve({ key, value: value2 });
      if (typeof resolved !== "undefined")
        return resolved;
    }
    if (typeof value2 === "number")
      value2 = value2.toString();
    if (typeof value2 === "string" && options.wrapValue) {
      value2 = value2.replace(new RegExp(options.wrapValue, "g"), `\\${options.wrapValue}`);
      value2 = `${options.wrapValue}${value2}${options.wrapValue}`;
    }
    return `${key}${options.keyValueSeparator || ""}${value2}`;
  }).join(options.entrySeparator || "");
}
const p = (p2) => ({ keyValue: p2, metaKey: "property" });
const k = (p2) => ({ keyValue: p2 });
const MetaPackingSchema = {
  appleItunesApp: {
    unpack: {
      entrySeparator: ", ",
      resolve({ key, value }) {
        return `${fixKeyCase(key)}=${value}`;
      }
    }
  },
  articleExpirationTime: p("article:expiration_time"),
  articleModifiedTime: p("article:modified_time"),
  articlePublishedTime: p("article:published_time"),
  bookReleaseDate: p("book:release_date"),
  charset: {
    metaKey: "charset"
  },
  contentSecurityPolicy: {
    unpack: {
      entrySeparator: "; ",
      resolve({ key, value }) {
        return `${fixKeyCase(key)} ${value}`;
      }
    },
    metaKey: "http-equiv"
  },
  contentType: {
    metaKey: "http-equiv"
  },
  defaultStyle: {
    metaKey: "http-equiv"
  },
  fbAppId: p("fb:app_id"),
  msapplicationConfig: k("msapplication-Config"),
  msapplicationTileColor: k("msapplication-TileColor"),
  msapplicationTileImage: k("msapplication-TileImage"),
  ogAudioSecureUrl: p("og:audio:secure_url"),
  ogAudioUrl: p("og:audio"),
  ogImageSecureUrl: p("og:image:secure_url"),
  ogImageUrl: p("og:image"),
  ogSiteName: p("og:site_name"),
  ogVideoSecureUrl: p("og:video:secure_url"),
  ogVideoUrl: p("og:video"),
  profileFirstName: p("profile:first_name"),
  profileLastName: p("profile:last_name"),
  profileUsername: p("profile:username"),
  refresh: {
    metaKey: "http-equiv",
    unpack: {
      entrySeparator: ";",
      resolve({ key, value }) {
        if (key === "seconds")
          return `${value}`;
      }
    }
  },
  robots: {
    unpack: {
      entrySeparator: ", ",
      resolve({ key, value }) {
        if (typeof value === "boolean")
          return `${fixKeyCase(key)}`;
        else
          return `${fixKeyCase(key)}:${value}`;
      }
    }
  },
  xUaCompatible: {
    metaKey: "http-equiv"
  }
};
const openGraphNamespaces = /* @__PURE__ */ new Set([
  "og",
  "book",
  "article",
  "profile"
]);
function resolveMetaKeyType(key) {
  var _a;
  const fKey = fixKeyCase(key);
  const prefixIndex = fKey.indexOf(":");
  if (openGraphNamespaces.has(fKey.substring(0, prefixIndex)))
    return "property";
  return ((_a = MetaPackingSchema[key]) == null ? void 0 : _a.metaKey) || "name";
}
function resolveMetaKeyValue(key) {
  var _a;
  return ((_a = MetaPackingSchema[key]) == null ? void 0 : _a.keyValue) || fixKeyCase(key);
}
function fixKeyCase(key) {
  const updated = key.replace(/([A-Z])/g, "-$1").toLowerCase();
  const prefixIndex = updated.indexOf("-");
  const fKey = updated.substring(0, prefixIndex);
  if (fKey === "twitter" || openGraphNamespaces.has(fKey))
    return key.replace(/([A-Z])/g, ":$1").toLowerCase();
  return updated;
}
function changeKeyCasingDeep(input) {
  if (Array.isArray(input)) {
    return input.map((entry) => changeKeyCasingDeep(entry));
  }
  if (typeof input !== "object" || Array.isArray(input))
    return input;
  const output = {};
  for (const key in input) {
    if (!Object.prototype.hasOwnProperty.call(input, key)) {
      continue;
    }
    output[fixKeyCase(key)] = changeKeyCasingDeep(input[key]);
  }
  return output;
}
function resolvePackedMetaObjectValue(value, key) {
  const definition = MetaPackingSchema[key];
  if (key === "refresh")
    return `${value.seconds};url=${value.url}`;
  return unpackToString(
    changeKeyCasingDeep(value),
    {
      keyValueSeparator: "=",
      entrySeparator: ", ",
      resolve({ value: value2, key: key2 }) {
        if (value2 === null)
          return "";
        if (typeof value2 === "boolean")
          return `${key2}`;
      },
      ...definition == null ? void 0 : definition.unpack
    }
  );
}
const ObjectArrayEntries = /* @__PURE__ */ new Set(["og:image", "og:video", "og:audio", "twitter:image"]);
function sanitize(input) {
  const out = {};
  for (const k2 in input) {
    if (!Object.prototype.hasOwnProperty.call(input, k2)) {
      continue;
    }
    const v = input[k2];
    if (String(v) !== "false" && k2)
      out[k2] = v;
  }
  return out;
}
function handleObjectEntry(key, v) {
  const value = sanitize(v);
  const fKey = fixKeyCase(key);
  const attr = resolveMetaKeyType(fKey);
  if (ObjectArrayEntries.has(fKey)) {
    const input = {};
    for (const k2 in value) {
      if (!Object.prototype.hasOwnProperty.call(value, k2)) {
        continue;
      }
      input[`${key}${k2 === "url" ? "" : `${k2[0].toUpperCase()}${k2.slice(1)}`}`] = value[k2];
    }
    return unpackMeta(input).sort((a, b) => {
      var _a, _b;
      return (((_a = a[attr]) == null ? void 0 : _a.length) || 0) - (((_b = b[attr]) == null ? void 0 : _b.length) || 0);
    });
  }
  return [{ [attr]: fKey, ...value }];
}
function unpackMeta(input) {
  const extras = [];
  const primitives = {};
  for (const key in input) {
    if (!Object.prototype.hasOwnProperty.call(input, key)) {
      continue;
    }
    const value = input[key];
    if (!Array.isArray(value)) {
      if (typeof value === "object" && value) {
        if (ObjectArrayEntries.has(fixKeyCase(key))) {
          extras.push(...handleObjectEntry(key, value));
          continue;
        }
        primitives[key] = sanitize(value);
      } else {
        primitives[key] = value;
      }
      continue;
    }
    for (const v of value) {
      extras.push(...typeof v === "string" ? unpackMeta({ [key]: v }) : handleObjectEntry(key, v));
    }
  }
  const meta = unpackToArray(primitives, {
    key({ key }) {
      return resolveMetaKeyType(key);
    },
    value({ key }) {
      return key === "charset" ? "charset" : "content";
    },
    resolveKeyData({ key }) {
      return resolveMetaKeyValue(key);
    },
    resolveValueData({ value, key }) {
      if (value === null)
        return "_null";
      if (typeof value === "object")
        return resolvePackedMetaObjectValue(value, key);
      return typeof value === "number" ? value.toString() : value;
    }
  });
  return [...extras, ...meta].map((m) => {
    if (m.content === "_null")
      m.content = null;
    return m;
  });
}
function useSeoMeta(input, options) {
  const { title, titleTemplate, ...meta } = input;
  return useHead({
    title,
    titleTemplate,
    // @ts-expect-error runtime type
    _flatMeta: meta
  }, {
    ...options,
    transform(t) {
      const meta2 = unpackMeta({ ...t._flatMeta });
      delete t._flatMeta;
      return {
        // @ts-expect-error runtime type
        ...t,
        meta: meta2
      };
    }
  });
}
const backtopProps = {
  visibilityHeight: {
    type: Number,
    default: 200
  },
  target: {
    type: String,
    default: ""
  },
  right: {
    type: Number,
    default: 40
  },
  bottom: {
    type: Number,
    default: 40
  }
};
const backtopEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const useBackTop = (props, emit, componentName) => {
  const el = shallowRef();
  const container = shallowRef();
  const visible = ref(false);
  const handleScroll = () => {
    if (el.value)
      visible.value = el.value.scrollTop >= props.visibilityHeight;
  };
  const handleClick = (event) => {
    var _a;
    (_a = el.value) == null ? void 0 : _a.scrollTo({ top: 0, behavior: "smooth" });
    emit("click", event);
  };
  const handleScrollThrottled = useThrottleFn(handleScroll, 300, true);
  useEventListener(container, "scroll", handleScrollThrottled);
  return {
    visible,
    handleClick
  };
};
const COMPONENT_NAME = "ElBacktop";
const __default__$1 = defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: backtopProps,
  emits: backtopEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("backtop");
    const { handleClick, visible } = useBackTop(props, emit);
    const backTopStyle = computed(() => ({
      right: `${props.right}px`,
      bottom: `${props.bottom}px`
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: `${unref(ns).namespace.value}-fade-in`
      }, {
        default: withCtx(() => [
          unref(visible) ? (openBlock(), createElementBlock("div", {
            key: 0,
            style: normalizeStyle(unref(backTopStyle)),
            class: normalizeClass(unref(ns).b()),
            onClick: withModifiers(unref(handleClick), ["stop"])
          }, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              createVNode(unref(ElIcon), {
                class: normalizeClass(unref(ns).e("icon"))
              }, {
                default: withCtx(() => [
                  createVNode(unref(caret_top_default))
                ]),
                _: 1
              }, 8, ["class"])
            ])
          ], 14, ["onClick"])) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["name"]);
    };
  }
});
var Backtop = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "backtop.vue"]]);
const ElBacktop = withInstall(Backtop);
const tagProps = buildProps({
  type: {
    type: String,
    values: ["primary", "success", "info", "warning", "danger"],
    default: "primary"
  },
  closable: Boolean,
  disableTransitions: Boolean,
  hit: Boolean,
  color: String,
  size: {
    type: String,
    values: componentSizes
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
});
const tagEmits = {
  close: (evt) => evt instanceof MouseEvent,
  click: (evt) => evt instanceof MouseEvent
};
const __default__ = defineComponent({
  name: "ElTag"
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: tagProps,
  emits: tagEmits,
  setup(__props, { emit }) {
    const props = __props;
    const tagSize = useFormSize();
    const ns = useNamespace("tag");
    const containerKls = computed(() => {
      const { type, hit, effect, closable, round } = props;
      return [
        ns.b(),
        ns.is("closable", closable),
        ns.m(type || "primary"),
        ns.m(tagSize.value),
        ns.m(effect),
        ns.is("hit", hit),
        ns.is("round", round)
      ];
    });
    const handleClose = (event) => {
      emit("close", event);
    };
    const handleClick = (event) => {
      emit("click", event);
    };
    const handleVNodeMounted = (vnode) => {
      vnode.component.subTree.component.bum = null;
    };
    return (_ctx, _cache) => {
      return _ctx.disableTransitions ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(unref(containerKls)),
        style: normalizeStyle({ backgroundColor: _ctx.color }),
        onClick: handleClick
      }, [
        createElementVNode("span", {
          class: normalizeClass(unref(ns).e("content"))
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2),
        _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
          key: 0,
          class: normalizeClass(unref(ns).e("close")),
          onClick: withModifiers(handleClose, ["stop"])
        }, {
          default: withCtx(() => [
            createVNode(unref(close_default))
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
      ], 6)) : (openBlock(), createBlock(Transition, {
        key: 1,
        name: `${unref(ns).namespace.value}-zoom-in-center`,
        appear: "",
        onVnodeMounted: handleVNodeMounted
      }, {
        default: withCtx(() => [
          createElementVNode("span", {
            class: normalizeClass(unref(containerKls)),
            style: normalizeStyle({ backgroundColor: _ctx.color }),
            onClick: handleClick
          }, [
            createElementVNode("span", {
              class: normalizeClass(unref(ns).e("content"))
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 2),
            _ctx.closable ? (openBlock(), createBlock(unref(ElIcon), {
              key: 0,
              class: normalizeClass(unref(ns).e("close")),
              onClick: withModifiers(handleClose, ["stop"])
            }, {
              default: withCtx(() => [
                createVNode(unref(close_default))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
          ], 6)
        ]),
        _: 3
      }, 8, ["name"]));
    };
  }
});
var Tag = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "tag.vue"]]);
const ElTag = withInstall(Tag);
const Loading = function(options = {}) {
  return void 0;
};
const INSTANCE_KEY = Symbol("ElLoading");
const createInstance = (el, binding) => {
  var _a, _b, _c, _d;
  const vm = binding.instance;
  const getBindingProp = (key) => isObject_1(binding.value) ? binding.value[key] : void 0;
  const resolveExpression = (key) => {
    const data = isString_1(key) && (vm == null ? void 0 : vm[key]) || key;
    if (data)
      return ref(data);
    else
      return data;
  };
  const getProp = (name) => resolveExpression(getBindingProp(name) || el.getAttribute(`element-loading-${hyphenate_1(name)}`));
  const fullscreen = (_a = getBindingProp("fullscreen")) != null ? _a : binding.modifiers.fullscreen;
  const options = {
    text: getProp("text"),
    svg: getProp("svg"),
    svgViewBox: getProp("svgViewBox"),
    spinner: getProp("spinner"),
    background: getProp("background"),
    customClass: getProp("customClass"),
    fullscreen,
    target: (_b = getBindingProp("target")) != null ? _b : fullscreen ? void 0 : el,
    body: (_c = getBindingProp("body")) != null ? _c : binding.modifiers.body,
    lock: (_d = getBindingProp("lock")) != null ? _d : binding.modifiers.lock
  };
  el[INSTANCE_KEY] = {
    options,
    instance: Loading(options)
  };
};
const updateOptions = (newOptions, originalOptions) => {
  for (const key of Object.keys(originalOptions)) {
    if (isRef(originalOptions[key]))
      originalOptions[key].value = newOptions[key];
  }
};
const vLoading = {
  mounted(el, binding) {
    if (binding.value) {
      createInstance(el, binding);
    }
  },
  updated(el, binding) {
    const instance = el[INSTANCE_KEY];
    if (binding.oldValue !== binding.value) {
      if (binding.value && !binding.oldValue) {
        createInstance(el, binding);
      } else if (binding.value && binding.oldValue) {
        if (isObject_1(binding.value))
          updateOptions(binding.value, instance.options);
      } else {
        instance == null ? void 0 : instance.instance.close();
      }
    }
  },
  unmounted(el) {
    var _a;
    (_a = el[INSTANCE_KEY]) == null ? void 0 : _a.instance.close();
    el[INSTANCE_KEY] = null;
  }
};
const useCommonStore = defineStore("common", {
  //用来存放变量
  state: () => ({
    isNavBoxItemLoading: false
  }),
  //方法
  actions: {}
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Search",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const productStore = useProductStore();
    const keyword = ref("");
    const commonStore = useCommonStore();
    const search = async () => {
      commonStore.isNavBoxItemLoading = true;
      await productStore.getProductList({
        title: keyword.value
      });
      commonStore.isNavBoxItemLoading = false;
    };
    __expose({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_image = ElImage;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center flex-col h-[280px] items-center" }, _attrs))} data-v-c0009f92><div class="flex justify-center flex-col items-center" data-v-c0009f92><div class="font-bold text-5xl c-lg:text-5xl c-md:text-4xl c-sm:text-3xl c-xs:text-3xl" data-v-c0009f92> \u5B9E\u7528\u7684\u5F00\u53D1\u8005\u5BFC\u822A </div><div class="mt-3 mb-3" data-v-c0009f92> \u4E13\u6CE8\u6536\u96C6\u548C\u5206\u4EABIT\u7A0B\u5E8F\u5458\u4E92\u8054\u7F51\u5DE5\u5177<span class="c-xs:hidden" data-v-c0009f92>\u3001\u8D44\u6E90\u3001\u4EA7\u54C1</span></div></div><div class="flex flex-col items-center w-full" data-v-c0009f92><div class="search-input pl-3 border-solid border-[3px] border-black" data-v-c0009f92>`);
      _push(ssrRenderComponent(_component_el_image, {
        src: "/logo.png",
        style: { "width": "25px", "height": "25px" }
      }, null, _parent));
      _push(`<input type="text" class="outline-none h-12 bg-[rgba(255,255,255,0)] w-[85%] ml-3 mr-3"${ssrRenderAttr("value", keyword.value)} placeholder="\u540D\u79F0/\u63CF\u8FF0" data-v-c0009f92>`);
      _push(ssrRenderComponent(unref(search_default), {
        class: "w-6 h-6 cursor-pointer c-sm:mr-2 c-xs:mr-2",
        onClick: search
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Search/Search.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__scopeId", "data-v-c0009f92"]]);
const tagListAPi = (data) => useHttp.get("/v1/avenue/tag/index", data);
const useTagStore = defineStore("tag", {
  //用来存放变量
  state: () => ({
    tagList: [],
    test2: "String"
  }),
  //方法
  actions: {
    async getTagList(params) {
      try {
        if (false)
          ;
        const result = await tagListAPi(params);
        if (result.code == 200) {
          this.tagList = result.data;
          return this.tagList;
        } else {
          throw new Error(result.message);
        }
      } catch (error) {
        ElMessage.error(error.message);
      }
    }
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NavBox",
  __ssrInlineRender: true,
  async setup(__props, { expose: __expose }) {
    let __temp, __restore;
    const productStore = useProductStore();
    const tagStore = useTagStore();
    const commonStore = useCommonStore();
    const tagId = ref(0);
    const selectSort = ref(1);
    const isLoadmore = ref(false);
    const loadmore = async () => {
      isLoadmore.value = true;
      let nextPage = 0;
      if (productStore.productListPageInfo.currentPage >= productStore.productListPageInfo.totalPage) {
        nextPage = productStore.productListPageInfo.totalPage;
      } else if (productStore.productListPageInfo.currentPage < 1) {
        nextPage = 1;
      } else {
        nextPage = productStore.productListPageInfo.currentPage + 1;
      }
      await productStore.getProductList({
        loadmore: true,
        page: nextPage,
        tag_id: tagId.value,
        sort: selectSort.value
      });
      isLoadmore.value = false;
    };
    [__temp, __restore] = withAsyncContext(() => tagStore.getTagList({
      onlyMenu: 1,
      type: 0
    })), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => productStore.getProductList(productStore.productListParams)), await __temp, __restore();
    __expose({});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_image = ElImage;
      const _component_el_text = ElText;
      const _component_el_tag = ElTag;
      const _component_el_icon = ElIcon;
      const _component_el_button = ElButton;
      const _directive_loading = vLoading;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-5 mt-5 flex flex-col items-center" }, _attrs))} data-v-f27aa94b><div class="flex items-center c-2xl:w-4/5" data-v-f27aa94b><div class="flex flex-wrap" data-v-f27aa94b><div class="${ssrRenderClass([unref(tagId) == 0 ? "text-white bg-black" : "bg-gray-200", "mt-2 pl-2 pr-2 pt-1 pb-1 rounded-md font-bold mr-2 hover:text-white hover:bg-black cursor-pointer whitespace-nowrap duration-150 ease-linear"])}" data-v-f27aa94b> \u5168\u90E8 </div><!--[-->`);
      ssrRenderList(unref(tagStore).tagList, (item, index) => {
        _push(`<div class="${ssrRenderClass([unref(tagId) == item.id ? "text-white bg-black" : "", "mt-2 pl-2 pr-2 pt-1 pb-1 rounded-md font-bold mr-2 cursor-pointer whitespace-nowrap custom-tags duration-150 ease-linear"])}" style="${ssrRenderStyle(unref(tagId) == item.id ? "" : "background-color: " + item.color + "; color: " + item.textcolor + ";")}" data-v-f27aa94b>${ssrInterpolate(item.title)}</div>`);
      });
      _push(`<!--]--></div></div><div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center mt-10 c-2xl:w-4/5 justify-center" }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(commonStore).isNavBoxItemLoading)))} data-v-f27aa94b><div class="grid grid-auto-rows grid-cols-4 w-full gap-5 c-lg:grid-cols-4 c-md:grid-cols-3 c-sm:grid-cols-2 c-xs:grid-cols-1" data-v-f27aa94b>`);
      if (unref(productStore).productLoadFinish) {
        _push(`<!--[-->`);
        ssrRenderList(unref(productStore).productList, (item, index) => {
          _push(`<div class="relative flex flex-col cursor-pointer border-solid rounded-md w-full h-[170px] border-[1px] bg-white border-gray-200 p-3 custom-item-hover" data-v-f27aa94b><div class="flex items-center" data-v-f27aa94b>`);
          _push(ssrRenderComponent(_component_el_image, {
            src: item.logo,
            class: "w-10 h-10 min-h-[3rem] min-w-[3rem] rounded-full",
            lazy: ""
          }, null, _parent));
          _push(`<div class="flex justify-between ml-2 w-full" data-v-f27aa94b><div class="flex" data-v-f27aa94b><div class="font-semibold text-lg line-clamp-1" data-v-f27aa94b>${ssrInterpolate(item.title)}</div></div></div><div class="relative top-[-15px] flex items-center" data-v-f27aa94b><div data-v-f27aa94b>`);
          if (item.new == 1) {
            _push(`<svg t="1723710814505" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="35256" width="25" height="25" data-v-f27aa94b><path d="M914.944 529.92c-13.312-15.872-10.752-22.528 1.024-36.352 58.88-71.68 27.136-171.008-62.976-194.56-22.528-6.144-32.256-12.8-24.576-31.744 2.56-91.136-85.504-152.576-171.008-120.32-19.968 7.68-27.136 6.144-39.424-11.776-51.712-75.776-159.744-75.776-211.456 0-12.288 17.92-19.968 18.944-39.424 11.776-87.552-31.744-176.64 30.72-170.496 120.832 1.536 22.528-5.632 26.112-25.088 31.232-90.112 24.064-122.88 124.928-62.976 195.072 13.312 15.36 11.776 22.016-0.512 36.864-59.392 73.216-25.6 172.032 67.584 196.096 16.896 4.608 22.528 7.68 21.504 27.136-5.632 95.232 81.408 156.16 174.08 122.88 17.408-6.144 23.552-4.608 33.792 10.24 53.76 79.872 161.792 79.36 215.04-1.024 10.752-15.872 16.896-15.872 33.792-9.216 91.648 34.304 181.76-30.72 173.568-124.928-1.536-17.408 3.072-20.48 19.456-24.064 94.72-25.088 130.048-125.44 68.096-198.144m-655.36 157.184l-49.664-143.36c-4.096-12.288 0-20.992 13.312-26.112 7.68-1.024 14.336 0 19.968 3.072L366.592 599.04l1.024-0.512-33.28-95.232c-4.096-12.288 0-20.992 13.312-26.112 12.8-3.584 22.016 1.024 27.136 13.312l49.664 143.36c3.584 11.776-1.536 19.968-14.336 24.064-7.168 2.56-13.824 2.048-19.456-1.536l-122.88-77.312-1.024 0.512 32.768 94.208c3.584 11.776-1.536 19.968-14.336 24.064-12.288 4.608-21.504 1.024-25.6-10.752M448 624.64l-48.128-138.24c-4.608-13.824-0.512-23.04 12.8-28.16l68.096-22.016c11.776-3.072 19.968 0.512 25.088 10.24 2.56 12.288-1.536 19.968-12.8 24.064l-48.128 15.36 12.8 36.352 44.544-14.336c12.8-2.56 21.504 1.024 26.624 11.264 2.56 11.776-2.048 19.456-14.336 24.064l-44.544 14.336 13.312 38.4 50.176-16.384c12.288-3.072 20.48 0.512 25.088 10.24 2.56 12.288-1.536 19.968-12.8 24.064l-70.144 22.528c-13.824 4.096-22.528 0-27.648-11.776m152.064-47.616L517.12 451.072c-2.56-2.048-3.584-5.12-4.096-8.704-2.56-10.24 1.536-17.408 13.312-23.04 11.264-3.584 20.992 0 28.672 11.264l59.392 98.816 1.024-0.512-3.072-121.344c0.512-10.24 5.632-17.408 16.384-21.504 10.24-2.56 18.944 0 26.624 7.68l73.216 98.304 1.024-0.512-13.824-112.64c-2.56-12.288 2.048-20.992 14.848-25.6 11.776-2.56 19.968 1.024 25.088 10.24 1.024 3.072 2.048 6.144 2.048 9.216l13.824 148.48c-1.024 13.312-7.68 22.016-20.48 26.112-14.336 4.608-25.6 2.048-33.28-7.68l-65.536-87.04 2.048 107.52c-1.024 12.8-8.192 20.992-20.992 25.088-15.36 5.632-26.624 2.56-33.28-8.192m0 0" fill="#1afa29" p-id="35257" data-spm-anchor-id="a313x.search_index.0.i13.1b3f3a81b9kyMw" class="" data-v-f27aa94b></path></svg>`);
          } else {
            _push(`<svg t="1723710877213" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="40079" width="25" height="25" data-v-f27aa94b><path d="M757.92384 382.68928c-1.58208 110.4384-46.4384 157.41952-46.4384 157.41952-4.21888-245.96992-247.03488-509.6448-247.03488-509.6448 80.2304 163.31776-274.48832 368.64512-274.48832 663.12704 0 184.71936 227.85024 320.4096 342.04672 297.12384 493.53728-100.59776 225.91488-608.0256 225.91488-608.0256zM510.16192 916.67968s-255.80544-125.86496-7.18336-404.79232c0 0 123.52 125.12256 99.7632 241.71008 0 0 34.83136 3.69152 79.1808-59.77088-0.01024 0.00512 10.34752 177.10592-171.76064 222.85312z" fill="#cdcdcd" p-id="40080" data-spm-anchor-id="a313x.search_index.0.i19.1b3f3a81b9kyMw" class="" data-v-f27aa94b></path></svg>`);
          }
          _push(`</div><div data-v-f27aa94b>`);
          if (item.new != 1 && item.click > 0) {
            _push(ssrRenderComponent(_component_el_text, null, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(item.click)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.click), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div><div class="whitespace-2 overflow-hidden text-ellipsis line-clamp-2 mt-2 h-12" data-v-f27aa94b>`);
          _push(ssrRenderComponent(_component_el_text, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.desc)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.desc), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div><div class="flex justify-between mt-3" data-v-f27aa94b><div class="" data-v-f27aa94b><!--[-->`);
          ssrRenderList(item.product_tag, (_item, _index) => {
            _push(ssrRenderComponent(_component_el_tag, {
              effect: "dark",
              class: "mr-2",
              key: index,
              style: "background-color: " + _item.color + "; border: 0px; color:" + _item.textcolor + ";"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(_item.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(_item.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div><div class="flex items-center" data-v-f27aa94b>`);
          _push(ssrRenderComponent(_component_el_icon, { class: "cursor-pointer" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<svg t="1723709446546" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18691" width="200" height="200" data-v-f27aa94b${_scopeId}><path d="M892 928.1H134c-19.9 0-36-16.1-36-36v-758c0-19.9 16.1-36 36-36h314.1c19.9 0 36 16.1 36 36s-16.1 36-36 36H170v686h686V579.6c0-19.9 16.1-36 36-36s36 16.1 36 36v312.5c0 19.9-16.1 36-36 36z" fill="#333333" p-id="18692" data-v-f27aa94b${_scopeId}></path><path d="M927.9 131.6v-0.5c-0.1-1.7-0.4-3.3-0.7-4.9 0-0.1 0-0.2-0.1-0.3-0.4-1.7-0.9-3.3-1.5-4.9v-0.1c-0.6-1.6-1.4-3.1-2.2-4.6 0-0.1-0.1-0.1-0.1-0.2-0.8-1.4-1.7-2.8-2.7-4.1-0.1-0.1-0.2-0.3-0.3-0.4-0.5-0.6-0.9-1.1-1.4-1.7 0-0.1-0.1-0.1-0.1-0.2-0.5-0.6-1-1.1-1.6-1.6l-0.4-0.4c-0.5-0.5-1.1-1-1.6-1.5l-0.1-0.1c-0.6-0.5-1.2-1-1.9-1.4-0.1-0.1-0.3-0.2-0.4-0.3-1.4-1-2.8-1.8-4.3-2.6l-0.1-0.1c-1.6-0.8-3.2-1.5-4.9-2-1.6-0.5-3.3-1-5-1.2-0.1 0-0.2 0-0.3-0.1l-2.4-0.3h-0.3c-0.7-0.1-1.3-0.1-2-0.1H640.1c-19.9 0-36 16.1-36 36s16.1 36 36 36h165L487.6 487.6c-14.1 14.1-14.1 36.9 0 50.9 7 7 16.2 10.5 25.5 10.5 9.2 0 18.4-3.5 25.5-10.5L856 221v162.8c0 19.9 16.1 36 36 36s36-16.1 36-36V134.1c0-0.8 0-1.7-0.1-2.5z" fill="#333333" p-id="18693" data-v-f27aa94b${_scopeId}></path></svg>`);
              } else {
                return [
                  (openBlock(), createBlock("svg", {
                    t: "1723709446546",
                    class: "icon",
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "p-id": "18691",
                    width: "200",
                    height: "200"
                  }, [
                    createVNode("path", {
                      d: "M892 928.1H134c-19.9 0-36-16.1-36-36v-758c0-19.9 16.1-36 36-36h314.1c19.9 0 36 16.1 36 36s-16.1 36-36 36H170v686h686V579.6c0-19.9 16.1-36 36-36s36 16.1 36 36v312.5c0 19.9-16.1 36-36 36z",
                      fill: "#333333",
                      "p-id": "18692"
                    }),
                    createVNode("path", {
                      d: "M927.9 131.6v-0.5c-0.1-1.7-0.4-3.3-0.7-4.9 0-0.1 0-0.2-0.1-0.3-0.4-1.7-0.9-3.3-1.5-4.9v-0.1c-0.6-1.6-1.4-3.1-2.2-4.6 0-0.1-0.1-0.1-0.1-0.2-0.8-1.4-1.7-2.8-2.7-4.1-0.1-0.1-0.2-0.3-0.3-0.4-0.5-0.6-0.9-1.1-1.4-1.7 0-0.1-0.1-0.1-0.1-0.2-0.5-0.6-1-1.1-1.6-1.6l-0.4-0.4c-0.5-0.5-1.1-1-1.6-1.5l-0.1-0.1c-0.6-0.5-1.2-1-1.9-1.4-0.1-0.1-0.3-0.2-0.4-0.3-1.4-1-2.8-1.8-4.3-2.6l-0.1-0.1c-1.6-0.8-3.2-1.5-4.9-2-1.6-0.5-3.3-1-5-1.2-0.1 0-0.2 0-0.3-0.1l-2.4-0.3h-0.3c-0.7-0.1-1.3-0.1-2-0.1H640.1c-19.9 0-36 16.1-36 36s16.1 36 36 36h165L487.6 487.6c-14.1 14.1-14.1 36.9 0 50.9 7 7 16.2 10.5 25.5 10.5 9.2 0 18.4-3.5 25.5-10.5L856 221v162.8c0 19.9 16.1 36 36 36s36-16.1 36-36V134.1c0-0.8 0-1.7-0.1-2.5z",
                      fill: "#333333",
                      "p-id": "18693"
                    })
                  ]))
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (unref(productStore).productListPageInfo.totalPage - unref(productStore).productListPageInfo.currentPage > 0) {
        _push(`<div class="flex justify-center mt-5" data-v-f27aa94b>`);
        if (unref(isLoadmore) == false) {
          _push(ssrRenderComponent(_component_el_button, {
            text: "",
            bg: "",
            onClick: loadmore
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u70B9\u51FB\u52A0\u8F7D\u66F4\u591A`);
              } else {
                return [
                  createTextVNode("\u70B9\u51FB\u52A0\u8F7D\u66F4\u591A")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(ssrRenderComponent(_component_el_button, {
            text: "",
            bg: "",
            loading: ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u70B9\u51FB\u52A0\u8F7D\u66F4\u591A`);
              } else {
                return [
                  createTextVNode("\u70B9\u51FB\u52A0\u8F7D\u66F4\u591A")
                ];
              }
            }),
            _: 1
          }, _parent));
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBox/NavBox.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__scopeId", "data-v-f27aa94b"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Search = __nuxt_component_0$1;
      const _component_NavBox = __nuxt_component_1;
      const _component_el_backtop = ElBacktop;
      const _component_el_icon = ElIcon;
      const _component_ElIconCaretTop = caret_top_default;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))} data-v-d212fed5><div class="mt-16" data-v-d212fed5><div class="" data-v-d212fed5>`);
      _push(ssrRenderComponent(_component_Search, null, null, _parent));
      _push(`</div><div class="box" data-v-d212fed5>`);
      _push(ssrRenderComponent(_component_NavBox, null, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_el_backtop, {
        bottom: 100,
        right: 20
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center" data-v-d212fed5${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_icon, { color: "#000" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_ElIconCaretTop, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_ElIconCaretTop)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode(_component_el_icon, { color: "#000" }, {
                  default: withCtx(() => [
                    createVNode(_component_ElIconCaretTop)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Home.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-d212fed5"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    useSeoMeta({
      title: config.public.title + " - \u4E13\u6CE8\u6536\u96C6\u548C\u5206\u4EABIT\u7A0B\u5E8F\u5458\u4E92\u8054\u7F51\u5DE5\u5177",
      description: "\u6536\u5F55\u5F00\u53D1\u8005\u5DE5\u5177\u3001\u8D44\u6E90\u3001\u4EA7\u54C1\u6536\u5F55\u5BFC\u822A\uFF0C\u4E00\u952E\u63D0\u4EA4\u7F51\u5740\u5206\u4EAB\u4F60\u559C\u7231\u7684\u4EA7\u54C1\u5427",
      keywords: "\u5F00\u53D1\u8005\u5BFC\u822A\uFF0C\u7F51\u5740\u5BFC\u822A\uFF0CIT\u5BFC\u822A\uFF0C\u72EC\u7ACB\u5F00\u53D1\u8005\u5BFC\u822A\uFF0C\u7A0B\u5E8F\u5458\u5BFC\u822A\uFF0CITPURE\uFF0C\u5DE5\u5177\u7BB1"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Home = __nuxt_component_0;
      _push(ssrRenderComponent(_component_Home, _attrs, null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-4MU66TxS.mjs.map
