/**
 * SPDX-License-Identifier: GPL-2.0
 * _addText: '{{Gadget Header|license=GPL-2.0}}'
 *
 * @base {@link https://github.com/wikimedia-gadgets/VariantAlly}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/VariantAllyDialog}
 * @license GPL-2.0 {@link https://youshou.wiki/wiki/H:GPLV2}
 */
/**
 * +------------------------------------------------------------+
 * |            === WARNING: GLOBAL GADGET FILE ===             |
 * +------------------------------------------------------------+
 * |       All changes should be made in the repository,        |
 * |                otherwise they will be lost.                |
 * +------------------------------------------------------------+
 * |        Changes to this page may affect many users.         |
 * | Please discuss changes by opening an issue before editing. |
 * +------------------------------------------------------------+
 */
/* <nowiki> */

(() => {

"use strict";

// dist/VariantAllyDialog/VariantAllyDialog.js
var _mw$config$get;
//! src/VariantAllyDialog/VariantAllyDialog.ts
var import_vue22 = require("vue");
var import_vue19 = require("vue");
var import_vue20 = require("vue");
var import_ext_gadget = require("ext.gadget.VariantAlly");
var import_vue11 = require("vue");
var import_vue12 = require("vue");
var import_vue3 = require("vue");
var import_vue = require("vue");
var VAIcon_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "VAIcon",
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true,
      default: 20
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue2 = require("vue");
var _hoisted_1 = ["width", "height"];
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = {
  key: 1
};
var _hoisted_4 = {
  key: 2
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("svg", {
    class: "va-icon-button__icon",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    width: $props.size,
    height: $props.size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true"
  }, [$props.icon === "lang" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("g", _hoisted_2, [(0, import_vue2.createCommentVNode)(" eslint-disable "), _cache[0] || (_cache[0] = (0, import_vue2.createElementVNode)(
    "path",
    {
      d: "M20 18h-1.44a.61.61 0 01-.4-.12.81.81 0 01-.23-.31L17 15h-5l-1 2.54a.77.77 0 01-.22.3.59.59 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.19 17.19 0 01-5 2.1q.56.82.87 1.38a23.28 23.28 0 005.22-2.51 15.64 15.64 0 003.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 01-2.45 4.45 9.11 9.11 0 01-2.46-4.45z"
    },
    null,
    -1
    /* HOISTED */
  )), (0, import_vue2.createCommentVNode)(" eslint-enable ")])) : $props.icon === "close" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("g", _hoisted_3, _cache[1] || (_cache[1] = [(0, import_vue2.createElementVNode)(
    "path",
    {
      d: "m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"
    },
    null,
    -1
    /* HOISTED */
  ), (0, import_vue2.createElementVNode)(
    "path",
    {
      d: "M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"
    },
    null,
    -1
    /* HOISTED */
  )]))) : ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("g", _hoisted_4, _cache[2] || (_cache[2] = [(0, import_vue2.createElementVNode)(
    "path",
    {
      d: "M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"
    },
    null,
    -1
    /* HOISTED */
  )])))], 8, _hoisted_1);
}
//! src/VariantAllyDialog/components/VAIcon.vue
VAIcon_default.render = render;
VAIcon_default.__file = "src\\VariantAllyDialog\\components\\VAIcon.vue";
var VAIcon_default2 = VAIcon_default;
var VAButton_default = /* @__PURE__ */ (0, import_vue3.defineComponent)({
  __name: "VAButton",
  props: {
    icon: {
      type: null,
      required: false
    },
    indicator: {
      type: null,
      required: false
    },
    action: {
      type: String,
      required: false
    },
    weight: {
      type: String,
      required: false
    }
  },
  emits: ["click"],
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const __returned__ = {
      VAIcon: VAIcon_default2
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue4 = require("vue");
var _hoisted_12 = {
  key: 1,
  class: "va-button__text"
};
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
    "button",
    {
      class: (0, import_vue4.normalizeClass)(["va-button", {
        "va-button--action-progressive": $props.action === "progressive",
        "va-button--weight-quiet": $props.weight === "quiet"
      }]),
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
    },
    [$props.icon !== void 0 ? ((0, import_vue4.openBlock)(), (0, import_vue4.createBlock)($setup["VAIcon"], {
      key: 0,
      class: "va-button__icon",
      icon: $props.icon
    }, null, 8, ["icon"])) : (0, import_vue4.createCommentVNode)("v-if", true), _ctx.$slots["default"] ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("span", _hoisted_12, [(0, import_vue4.renderSlot)(_ctx.$slots, "default", {}, void 0, true)])) : (0, import_vue4.createCommentVNode)("v-if", true), $props.indicator !== void 0 ? ((0, import_vue4.openBlock)(), (0, import_vue4.createBlock)($setup["VAIcon"], {
      key: 2,
      class: "va-button__indicator",
      icon: $props.indicator,
      size: 16
    }, null, 8, ["icon"])) : (0, import_vue4.createCommentVNode)("v-if", true)],
    2
    /* CLASS */
  );
}
//! src/VariantAllyDialog/components/VAButton.vue
VAButton_default.render = render2;
VAButton_default.__file = "src\\VariantAllyDialog\\components\\VAButton.vue";
VAButton_default.__scopeId = "data-v-bb7734b1";
var VAButton_default2 = VAButton_default;
var import_vue5 = require("vue");
function render3(_ctx, _cache) {
  return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(import_vue5.Transition, {
    name: "va-fade",
    mode: "out-in"
  }, {
    default: (0, import_vue5.withCtx)(() => [(0, import_vue5.renderSlot)(_ctx.$slots, "default", {}, void 0, true)]),
    _: 3
    /* FORWARDED */
  });
}
//! src/VariantAllyDialog/components/VAFadeTransition.vue
var script = {};
script.render = render3;
script.__file = "src\\VariantAllyDialog\\components\\VAFadeTransition.vue";
script.__scopeId = "data-v-bb9c5751";
var VAFadeTransition_default = script;
//! src/VariantAllyDialog/composables/useI18n.ts
var import_vue7 = require("vue");
//! src/VariantAllyDialog/messages.json
var messages_default = {
  variants: {
    "zh-cn": "中国大陆简体",
    "zh-sg": "新加坡简体",
    "zh-my": "马来西亚简体",
    "zh-hk": "中國香港繁體",
    "zh-mo": "中國澳門繁體",
    "zh-tw": "中國臺灣繁體"
  },
  hans: {
    space: "",
    close: "关闭",
    "vp.header": "我们支持",
    "vp.header.alt": "记住此变体？",
    "vp.main": "选取内容的语言变体",
    "vp.main.alt": "以后都使用此变体呈现内容",
    "vp.main.ext": "保存您偏好的中文语言变体，以避免显示简繁混杂的内容，提供最佳的阅读体验。",
    "vp.button.ok": "确定",
    "vp.button.other": "其他"
  },
  hant: {
    space: "",
    close: "關閉",
    "vp.header": "我們支援",
    "vp.header.alt": "記住此變體？",
    "vp.main": "選取內容的語言變體",
    "vp.main.alt": "以後都使用此變體呈現內容",
    "vp.main.ext": "儲存您偏好的中文語言變體，以避免顯示簡繁混雜的內容，提供最佳的閱讀體驗。",
    "vp.button.ok": "確定",
    "vp.button.other": "其他"
  }
};
//! src/VariantAllyDialog/modules/utils.ts
var import_vue6 = require("vue");
var VALID_VARIANTS = ["zh-cn", "zh-sg", "zh-my", "zh-tw", "zh-hk", "zh-mo"];
var wgUserVariant = (0, import_vue6.ref)((_mw$config$get = mw.config.get("wgUserVariant")) !== null && _mw$config$get !== void 0 ? _mw$config$get : "");
function isMobileDevice() {
  return matchMedia("(hover: none), (pointer: coarse)").matches;
}
function getMountPoint() {
  var _document$querySelect, _document$querySelect2;
  switch (mw.config.get("skin")) {
    case "vector-2022":
      return (_document$querySelect = document.querySelectorAll(".mw-page-container")[0]) !== null && _document$querySelect !== void 0 ? _document$querySelect : document.body;
    case "gongbi":
      return (_document$querySelect2 = document.querySelector("#mw-content-block")) !== null && _document$querySelect2 !== void 0 ? _document$querySelect2 : document.body;
    default:
      return document.body;
  }
}
var inferredVariant = (0, import_vue6.computed)(() => {
  if (VALID_VARIANTS.includes(wgUserVariant.value)) {
    return wgUserVariant.value;
  }
  return null;
});
function shuffleVariant(last) {
  const targetArray = [...VALID_VARIANTS].filter((i) => {
    return i !== last;
  });
  const randomIndex = Math.floor(Math.random() * targetArray.length);
  return targetArray[randomIndex];
}
//! src/VariantAllyDialog/composables/useI18n.ts
var i18nVariant = (0, import_vue7.computed)(() => {
  if (wgUserVariant.value === "zh") {
    return Math.random() > 0.5 ? "hans" : "hant";
  }
  if (["zh-hant", "zh-tw", "zh-hk", "zh-mo"].includes(wgUserVariant.value)) {
    return "hant";
  }
  return "hans";
});
function useI18n(key) {
  var _currentMsgsGroup$key;
  const currentMsgsGroup = messages_default[i18nVariant.value];
  return (_currentMsgsGroup$key = currentMsgsGroup[key]) !== null && _currentMsgsGroup$key !== void 0 ? _currentMsgsGroup$key : key;
}
//! src/VariantAllyDialog/composables/useUniqueId.ts
var counter = 0;
function useUniqueId() {
  return "va-".concat(counter++);
}
var useUniqueId_default = useUniqueId;
//! src/VariantAllyDialog/composables/useShuffledVariant.ts
var import_vue8 = require("vue");
var INTERVAL = 3 * 1e3;
function useShuffledVariant(isFreezed) {
  const result = (0, import_vue8.ref)(shuffleVariant());
  let id;
  (0, import_vue8.watch)(isFreezed, (newValue) => {
    if (newValue) {
      var _inferredVariant$valu;
      clearInterval(id);
      result.value = (_inferredVariant$valu = inferredVariant.value) !== null && _inferredVariant$valu !== void 0 ? _inferredVariant$valu : shuffleVariant();
    } else {
      id = window.setInterval(() => {
        result.value = shuffleVariant(result.value);
      }, INTERVAL);
    }
  }, {
    immediate: true
  });
  return result;
}
var useShuffledVariant_default = useShuffledVariant;
//! src/VariantAllyDialog/composables/useModelWrapper.ts
var import_vue9 = require("vue");
function useModelWrapper(props, emit, name = "modelValue") {
  return (0, import_vue9.computed)({
    get() {
      return props[name];
    },
    set(value) {
      emit("update:".concat(name), value);
    }
  });
}
var useModelWrapper_default = useModelWrapper;
//! src/VariantAllyDialog/composables/useDefault.ts
var import_vue10 = require("vue");
function useDefault(defaultValue) {
  const realRef = (0, import_vue10.shallowRef)(typeof defaultValue === "function" ? defaultValue() : defaultValue.value);
  (0, import_vue10.watch)(defaultValue, (newValue) => {
    realRef.value = newValue;
  }, {
    deep: true
  });
  return (0, import_vue10.computed)({
    get() {
      return realRef.value;
    },
    set(newValue) {
      realRef.value = newValue;
    }
  });
}
var useDefault_default = useDefault;
var VAVariantPrompt_default = /* @__PURE__ */ (0, import_vue11.defineComponent)({
  __name: "VAVariantPrompt",
  props: {
    open: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    autoClose: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:open", "update:disabled", "select", "optout"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const prompt = (0, import_vue12.ref)(null);
    const titleId = useUniqueId_default();
    const descId = useUniqueId_default();
    const isOpen = useModelWrapper_default(props, emit, "open");
    const isDisabled = useModelWrapper_default(props, emit, "disabled");
    const isVariantNarrowed = useDefault_default(() => inferredVariant.value !== null);
    const shuffledVariant = useShuffledVariant_default(isVariantNarrowed);
    function optOutAndClose() {
      emit("optout");
      isOpen.value = false;
    }
    function select(variant) {
      isDisabled.value = true;
      emit("select", variant);
    }
    (0, import_vue12.watch)(prompt, () => {
      const element = prompt.value;
      if (element !== null) {
        element.addEventListener("mouseleave", (ev) => {
          if (ev.buttons === 0 && props.autoClose && !props.disabled) {
            isOpen.value = false;
          }
        });
      }
    });
    const __returned__ = {
      props,
      emit,
      prompt,
      titleId,
      descId,
      isOpen,
      isDisabled,
      isVariantNarrowed,
      shuffledVariant,
      optOutAndClose,
      select,
      VAButton: VAButton_default2,
      VAFadeTransition: VAFadeTransition_default,
      get useI18n() {
        return useI18n;
      },
      get i18nVariant() {
        return i18nVariant;
      },
      get VALID_VARIANTS() {
        return VALID_VARIANTS;
      },
      get inferredVariant() {
        return inferredVariant;
      },
      get messages() {
        return messages_default;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue13 = require("vue");
var _hoisted_13 = ["lang", "aria-labelledby", "aria-describedby"];
var _hoisted_22 = ["id"];
var _hoisted_32 = ["lang"];
var _hoisted_42 = ["id"];
var _hoisted_5 = {
  class: "va-variant-prompt__options"
};
var _hoisted_6 = {
  class: "va-variant-prompt__footer"
};
var _hoisted_7 = {
  class: "va-para va-para--subtle"
};
function render4(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue13.openBlock)(), (0, import_vue13.createBlock)(import_vue13.Transition, {
    name: "va-variant-prompt",
    appear: ""
  }, {
    default: (0, import_vue13.withCtx)(() => [$props.open ? ((0, import_vue13.openBlock)(), (0, import_vue13.createElementBlock)("div", {
      key: 0,
      ref: "prompt",
      lang: "zh-".concat($setup.i18nVariant),
      class: "va-variant-prompt",
      role: "dialog",
      "aria-modal": "false",
      "aria-labelledby": $setup.titleId,
      "aria-describedby": $setup.descId
    }, [(0, import_vue13.createVNode)($setup["VAButton"], {
      class: "va-variant-prompt__close",
      weight: "quiet",
      icon: "close",
      title: $setup.useI18n("close"),
      "aria-label": $setup.useI18n("close"),
      disabled: $props.disabled,
      onClick: $setup.optOutAndClose
    }, null, 8, ["title", "aria-label", "disabled"]), (0, import_vue13.createElementVNode)("h2", {
      id: $setup.titleId,
      class: "va-variant-prompt__title va-title"
    }, [(0, import_vue13.createTextVNode)(
      (0, import_vue13.toDisplayString)($setup.useI18n($setup.isVariantNarrowed ? "vp.header.alt" : "vp.header")),
      1
      /* TEXT */
    ), _cache[1] || (_cache[1] = (0, import_vue13.createElementVNode)(
      "br",
      null,
      null,
      -1
      /* HOISTED */
    )), (0, import_vue13.createVNode)($setup["VAFadeTransition"], null, {
      default: (0, import_vue13.withCtx)(() => [!$setup.isVariantNarrowed ? ((0, import_vue13.openBlock)(), (0, import_vue13.createElementBlock)("span", {
        key: $setup.shuffledVariant,
        lang: "zh-".concat($setup.shuffledVariant),
        class: "va-variant-prompt__title__variant"
      }, (0, import_vue13.toDisplayString)($setup.messages.variants[$setup.shuffledVariant]), 9, _hoisted_32)) : (0, import_vue13.createCommentVNode)("v-if", true)]),
      _: 1
      /* STABLE */
    })], 8, _hoisted_22), (0, import_vue13.createElementVNode)("p", {
      id: $setup.descId,
      class: "va-variant-prompt__desc va-para"
    }, (0, import_vue13.toDisplayString)($setup.useI18n($setup.isVariantNarrowed ? "vp.main.alt" : "vp.main")), 9, _hoisted_42), (0, import_vue13.createElementVNode)("div", _hoisted_5, [(0, import_vue13.createCommentVNode)(" inferredVariant is non-null, guarded by isVariantNarrowed "), ((0, import_vue13.openBlock)(true), (0, import_vue13.createElementBlock)(
      import_vue13.Fragment,
      null,
      (0, import_vue13.renderList)($setup.isVariantNarrowed && $setup.inferredVariant !== null ? [$setup.inferredVariant] : $setup.VALID_VARIANTS, (variant) => {
        return (0, import_vue13.openBlock)(), (0, import_vue13.createBlock)($setup["VAButton"], {
          key: variant,
          class: (0, import_vue13.normalizeClass)(["va-variant-prompt__options__button", {
            "va-variant-prompt__options__button--primary": $setup.isVariantNarrowed
          }]),
          indicator: "arrowNext",
          weight: "quiet",
          action: "progressive",
          lang: variant,
          disabled: $props.disabled,
          onClick: ($event) => $setup.select(variant)
        }, {
          default: (0, import_vue13.withCtx)(() => [(0, import_vue13.createTextVNode)(
            (0, import_vue13.toDisplayString)($setup.messages.variants[variant]),
            1
            /* TEXT */
          )]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["class", "lang", "disabled", "onClick"]);
      }),
      128
      /* KEYED_FRAGMENT */
    )), $setup.isVariantNarrowed ? ((0, import_vue13.openBlock)(), (0, import_vue13.createBlock)($setup["VAButton"], {
      key: 0,
      class: "va-variant-prompt__options__button",
      indicator: "arrowNext",
      weight: "quiet",
      action: "progressive",
      disabled: $props.disabled,
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.isVariantNarrowed = false)
    }, {
      default: (0, import_vue13.withCtx)(() => [(0, import_vue13.createTextVNode)(
        (0, import_vue13.toDisplayString)($setup.useI18n("vp.button.other")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"])) : (0, import_vue13.createCommentVNode)("v-if", true)]), (0, import_vue13.createElementVNode)("footer", _hoisted_6, [(0, import_vue13.createElementVNode)(
      "p",
      _hoisted_7,
      (0, import_vue13.toDisplayString)($setup.useI18n("vp.main.ext")),
      1
      /* TEXT */
    )])], 8, _hoisted_13)) : (0, import_vue13.createCommentVNode)("v-if", true)]),
    _: 1
    /* STABLE */
  });
}
//! src/VariantAllyDialog/components/VAVariantPrompt.vue
VAVariantPrompt_default.render = render4;
VAVariantPrompt_default.__file = "src\\VariantAllyDialog\\components\\VAVariantPrompt.vue";
VAVariantPrompt_default.__scopeId = "data-v-5a44cc75";
var VAVariantPrompt_default2 = VAVariantPrompt_default;
var import_vue16 = require("vue");
var import_vue17 = require("vue");
var import_vue14 = require("vue");
var VASelect_default = /* @__PURE__ */ (0, import_vue14.defineComponent)({
  __name: "VASelect",
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const modelValue = useModelWrapper_default(props, emit);
    const __returned__ = {
      props,
      emit,
      modelValue
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue15 = require("vue");
function render5(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue15.withDirectives)(((0, import_vue15.openBlock)(), (0, import_vue15.createElementBlock)(
    "select",
    {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.modelValue = $event),
      class: "va-select"
    },
    [(0, import_vue15.renderSlot)(_ctx.$slots, "default", {}, void 0, true)],
    512
    /* NEED_PATCH */
  )), [[import_vue15.vModelSelect, $setup.modelValue]]);
}
//! src/VariantAllyDialog/components/VASelect.vue
VASelect_default.render = render5;
VASelect_default.__file = "src\\VariantAllyDialog\\components\\VASelect.vue";
VASelect_default.__scopeId = "data-v-c9b46460";
var VASelect_default2 = VASelect_default;
var VAVariantPromptMobile_default = /* @__PURE__ */ (0, import_vue16.defineComponent)({
  __name: "VAVariantPromptMobile",
  props: {
    open: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:open", "update:disabled", "select", "optout"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const prompt = (0, import_vue17.ref)(null);
    const titleId = useUniqueId_default();
    const selectedVariant = useDefault_default(() => {
      var _inferredVariant$valu2;
      return (_inferredVariant$valu2 = inferredVariant.value) !== null && _inferredVariant$valu2 !== void 0 ? _inferredVariant$valu2 : shuffleVariant();
    });
    const isOpen = useModelWrapper_default(props, emit, "open");
    const isDisabled = useModelWrapper_default(props, emit, "disabled");
    function optOutAndClose() {
      emit("optout");
      isOpen.value = false;
    }
    function select(variant) {
      isDisabled.value = true;
      emit("select", variant);
    }
    const __returned__ = {
      props,
      emit,
      prompt,
      titleId,
      selectedVariant,
      isOpen,
      isDisabled,
      optOutAndClose,
      select,
      VAButton: VAButton_default2,
      VASelect: VASelect_default2,
      get useI18n() {
        return useI18n;
      },
      get i18nVariant() {
        return i18nVariant;
      },
      get VALID_VARIANTS() {
        return VALID_VARIANTS;
      },
      get messages() {
        return messages_default;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue18 = require("vue");
var _hoisted_14 = ["lang", "aria-labelledby"];
var _hoisted_23 = {
  class: "va-variant-prompt-mobile__header"
};
var _hoisted_33 = ["id"];
var _hoisted_43 = {
  class: "va-variant-prompt-mobile__main"
};
var _hoisted_52 = ["value", "lang"];
var _hoisted_62 = {
  class: "va-variant-prompt-mobile__footer"
};
var _hoisted_72 = {
  class: "va-para va-para--subtle"
};
function render6(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue18.openBlock)(), (0, import_vue18.createBlock)(import_vue18.Transition, {
    name: "va-variant-prompt-mobile",
    appear: ""
  }, {
    default: (0, import_vue18.withCtx)(() => [$props.open ? ((0, import_vue18.openBlock)(), (0, import_vue18.createElementBlock)("div", {
      key: 0,
      ref: "prompt",
      lang: "zh-".concat($setup.i18nVariant),
      class: "va-variant-prompt-mobile",
      role: "dialog",
      "aria-modal": "false",
      "aria-labelledby": $setup.titleId
    }, [(0, import_vue18.createElementVNode)("div", _hoisted_23, [(0, import_vue18.createElementVNode)("h2", {
      id: $setup.titleId,
      class: "va-variant-prompt-mobile__header__title va-title"
    }, (0, import_vue18.toDisplayString)($setup.useI18n("vp.main")), 9, _hoisted_33), (0, import_vue18.createVNode)($setup["VAButton"], {
      class: "va-variant-prompt-mobile__header__close",
      weight: "quiet",
      icon: "close",
      title: $setup.useI18n("close"),
      "aria-label": $setup.useI18n("close"),
      disabled: $props.disabled,
      onClick: $setup.optOutAndClose
    }, null, 8, ["title", "aria-label", "disabled"])]), (0, import_vue18.createElementVNode)("div", _hoisted_43, [(0, import_vue18.createVNode)($setup["VASelect"], {
      modelValue: $setup.selectedVariant,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.selectedVariant = $event),
      class: "va-variant-prompt-mobile__main__select",
      lang: $setup.selectedVariant,
      disabled: $props.disabled,
      "aria-labelledby": $setup.titleId
    }, {
      default: (0, import_vue18.withCtx)(() => [((0, import_vue18.openBlock)(true), (0, import_vue18.createElementBlock)(
        import_vue18.Fragment,
        null,
        (0, import_vue18.renderList)($setup.VALID_VARIANTS, (variant) => {
          return (0, import_vue18.openBlock)(), (0, import_vue18.createElementBlock)("option", {
            key: variant,
            value: variant,
            lang: variant
          }, (0, import_vue18.toDisplayString)($setup.messages.variants[variant]), 9, _hoisted_52);
        }),
        128
        /* KEYED_FRAGMENT */
      ))]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "lang", "disabled", "aria-labelledby"]), (0, import_vue18.createVNode)($setup["VAButton"], {
      class: "va-variant-prompt-mobile__main__action",
      action: "progressive",
      icon: "arrowNext",
      disabled: $props.disabled,
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.select($setup.selectedVariant))
    }, {
      default: (0, import_vue18.withCtx)(() => [(0, import_vue18.createTextVNode)(
        (0, import_vue18.toDisplayString)($setup.useI18n("vp.button.ok")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"])]), (0, import_vue18.createElementVNode)("footer", _hoisted_62, [(0, import_vue18.createElementVNode)(
      "p",
      _hoisted_72,
      (0, import_vue18.toDisplayString)($setup.useI18n("vp.main.ext")),
      1
      /* TEXT */
    )])], 8, _hoisted_14)) : (0, import_vue18.createCommentVNode)("v-if", true)]),
    _: 1
    /* STABLE */
  });
}
//! src/VariantAllyDialog/components/VAVariantPromptMobile.vue
VAVariantPromptMobile_default.render = render6;
VAVariantPromptMobile_default.__file = "src\\VariantAllyDialog\\components\\VAVariantPromptMobile.vue";
VAVariantPromptMobile_default.__scopeId = "data-v-5cc7865b";
var VAVariantPromptMobile_default2 = VAVariantPromptMobile_default;
var App_default = /* @__PURE__ */ (0, import_vue19.defineComponent)({
  __name: "App",
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const isOpen = (0, import_vue20.ref)(true);
    const isDisabled = (0, import_vue20.ref)(false);
    const isMobile = isMobileDevice();
    const desktopMountPoint = getMountPoint();
    function setVariant(variant) {
      (0, import_ext_gadget.setLocalVariant)(variant);
      (0, import_ext_gadget.redirect)(variant, {
        forced: true
      });
    }
    addEventListener(isMobile ? "touchmove" : "scroll", () => {
      if (!isDisabled.value) {
        isOpen.value = false;
      }
    });
    function onOptOut() {
      (0, import_ext_gadget.setOptOut)();
    }
    const __returned__ = {
      isOpen,
      isDisabled,
      isMobile,
      desktopMountPoint,
      setVariant,
      onOptOut,
      VAVariantPrompt: VAVariantPrompt_default2,
      VAVariantPromptMobile: VAVariantPromptMobile_default2
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue21 = require("vue");
function render7(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue21.openBlock)(), (0, import_vue21.createElementBlock)(
    import_vue21.Fragment,
    null,
    [((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)(import_vue21.Teleport, {
      to: $setup.desktopMountPoint
    }, [!$setup.isMobile ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["VAVariantPrompt"], {
      key: 0,
      open: $setup.isOpen,
      "onUpdate:open": _cache[0] || (_cache[0] = ($event) => $setup.isOpen = $event),
      disabled: $setup.isDisabled,
      "onUpdate:disabled": _cache[1] || (_cache[1] = ($event) => $setup.isDisabled = $event),
      "auto-close": false,
      onOptout: $setup.onOptOut,
      onSelect: $setup.setVariant
    }, null, 8, ["open", "disabled"])) : (0, import_vue21.createCommentVNode)("v-if", true)], 8, ["to"])), (0, import_vue21.createCommentVNode)(" Teleport to body because they are always floated at bottom "), ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)(import_vue21.Teleport, {
      to: "body"
    }, [$setup.isMobile ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["VAVariantPromptMobile"], {
      key: 0,
      open: $setup.isOpen,
      "onUpdate:open": _cache[2] || (_cache[2] = ($event) => $setup.isOpen = $event),
      disabled: $setup.isDisabled,
      "onUpdate:disabled": _cache[3] || (_cache[3] = ($event) => $setup.isDisabled = $event),
      onOptout: $setup.onOptOut,
      onSelect: $setup.setVariant
    }, null, 8, ["open", "disabled"])) : (0, import_vue21.createCommentVNode)("v-if", true)]))],
    64
    /* STABLE_FRAGMENT */
  );
}
//! src/VariantAllyDialog/App.vue
App_default.render = render7;
App_default.__file = "src\\VariantAllyDialog\\App.vue";
var App_default2 = App_default;
//! src/VariantAllyDialog/VariantAllyDialog.ts
var root = document.createElement("div");
document.body.append(root);
(0, import_vue22.createApp)(App_default2).mount(root);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL1ZhcmlhbnRBbGx5RGlhbG9nLnRzIiwgImRpc3QvVmFyaWFudEFsbHlEaWFsb2cvc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL0FwcC52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHQudnVlIiwgImRpc3QvVmFyaWFudEFsbHlEaWFsb2cvc2ZjLXRlbXBsYXRlOkU6L2doUmVwby9Zc0FyY2hpdmVzLUdhZGdldHMvc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFJY29uLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBSWNvbi52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zZmMtdGVtcGxhdGU6RTovZ2hSZXBvL1lzQXJjaGl2ZXMtR2FkZ2V0cy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQUJ1dHRvbi52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQUJ1dHRvbi52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zZmMtdGVtcGxhdGU6RTovZ2hSZXBvL1lzQXJjaGl2ZXMtR2FkZ2V0cy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQUZhZGVUcmFuc2l0aW9uLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBRmFkZVRyYW5zaXRpb24udnVlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VJMThuLnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9tZXNzYWdlcy5qc29uIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9tb2R1bGVzL3V0aWxzLnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VVbmlxdWVJZC50cyIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9zYWJsZXMvdXNlU2h1ZmZsZWRWYXJpYW50LnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VNb2RlbFdyYXBwZXIudHMiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvc2FibGVzL3VzZURlZmF1bHQudHMiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zZmMtdGVtcGxhdGU6RTovZ2hSZXBvL1lzQXJjaGl2ZXMtR2FkZ2V0cy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHQudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0LnZ1ZSIsICJkaXN0L1ZhcmlhbnRBbGx5RGlhbG9nL3NyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBVmFyaWFudFByb21wdE1vYmlsZS52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVNlbGVjdC52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zZmMtdGVtcGxhdGU6RTovZ2hSZXBvL1lzQXJjaGl2ZXMtR2FkZ2V0cy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVNlbGVjdC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVNlbGVjdC52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zZmMtdGVtcGxhdGU6RTovZ2hSZXBvL1lzQXJjaGl2ZXMtR2FkZ2V0cy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZSIsICJkaXN0L1ZhcmlhbnRBbGx5RGlhbG9nL3NmYy10ZW1wbGF0ZTpFOi9naFJlcG8vWXNBcmNoaXZlcy1HYWRnZXRzL3NyYy9WYXJpYW50QWxseURpYWxvZy9BcHAudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL0FwcC52dWUiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7Y3JlYXRlQXBwfSBmcm9tICd2dWUnO1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcC52dWUnO1xuXG5jb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZChyb290KTtcbmNyZWF0ZUFwcChBcHApLm1vdW50KHJvb3QpO1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge3JlZn0gZnJvbSAndnVlJztcbmltcG9ydCB7c2V0TG9jYWxWYXJpYW50LCByZWRpcmVjdCwgVmFsaWRWYXJpYW50LCBzZXRPcHRPdXR9IGZyb20gJ2V4dC5nYWRnZXQuVmFyaWFudEFsbHknO1xuaW1wb3J0IFZBVmFyaWFudFByb21wdCBmcm9tICcuL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0LnZ1ZSc7XG5pbXBvcnQgVkFWYXJpYW50UHJvbXB0TW9iaWxlIGZyb20gJy4vY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlJztcbmltcG9ydCB7Z2V0TW91bnRQb2ludCwgaXNNb2JpbGVEZXZpY2V9IGZyb20gJy4vbW9kdWxlcy91dGlscyc7XG5cbmNvbnN0IGlzT3BlbiA9IHJlZih0cnVlKTtcbmNvbnN0IGlzRGlzYWJsZWQgPSByZWYoZmFsc2UpO1xuY29uc3QgaXNNb2JpbGUgPSBpc01vYmlsZURldmljZSgpO1xuY29uc3QgZGVza3RvcE1vdW50UG9pbnQgPSBnZXRNb3VudFBvaW50KCk7XG5cbmZ1bmN0aW9uIHNldFZhcmlhbnQodmFyaWFudDogVmFsaWRWYXJpYW50KSB7XG5cdHNldExvY2FsVmFyaWFudCh2YXJpYW50KTtcblx0cmVkaXJlY3QodmFyaWFudCwge2ZvcmNlZDogdHJ1ZX0pO1xufVxuXG4vLyBCcm93c2VyIHN1cHBvcnQ6IGlPUyBTYWZhcmkgPCAxNVxuLy8gV29yayBhcm91bmQgU2FmYXJpIGZpcmluZyBzY3JvbGwgZXZlbnQgYXQgdW5leHBlY3RlZCBjb25kaXRpb25zIChlLmcuIHBvcHBpbmcgdXAgU2VsZWN0KVxuYWRkRXZlbnRMaXN0ZW5lcihpc01vYmlsZSA/ICd0b3VjaG1vdmUnIDogJ3Njcm9sbCcsICgpID0+IHtcblx0aWYgKCFpc0Rpc2FibGVkLnZhbHVlKSB7XG5cdFx0aXNPcGVuLnZhbHVlID0gZmFsc2U7XG5cdH1cbn0pO1xuXG5mdW5jdGlvbiBvbk9wdE91dCgpIHtcblx0c2V0T3B0T3V0KCk7XG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8VGVsZXBvcnQgOnRvPVwiZGVza3RvcE1vdW50UG9pbnRcIj5cblx0XHQ8VkFWYXJpYW50UHJvbXB0XG5cdFx0XHR2LWlmPVwiIWlzTW9iaWxlXCJcblx0XHRcdHYtbW9kZWw6b3Blbj1cImlzT3BlblwiXG5cdFx0XHR2LW1vZGVsOmRpc2FibGVkPVwiaXNEaXNhYmxlZFwiXG5cdFx0XHQ6YXV0by1jbG9zZT1cImZhbHNlXCJcblx0XHRcdEBvcHRvdXQ9XCJvbk9wdE91dFwiXG5cdFx0XHRAc2VsZWN0PVwic2V0VmFyaWFudFwiXG5cdFx0Lz5cblx0PC9UZWxlcG9ydD5cblxuXHQ8IS0tIFRlbGVwb3J0IHRvIGJvZHkgYmVjYXVzZSB0aGV5IGFyZSBhbHdheXMgZmxvYXRlZCBhdCBib3R0b20gLS0+XG5cdDxUZWxlcG9ydCB0bz1cImJvZHlcIj5cblx0XHQ8VkFWYXJpYW50UHJvbXB0TW9iaWxlXG5cdFx0XHR2LWlmPVwiaXNNb2JpbGVcIlxuXHRcdFx0di1tb2RlbDpvcGVuPVwiaXNPcGVuXCJcblx0XHRcdHYtbW9kZWw6ZGlzYWJsZWQ9XCJpc0Rpc2FibGVkXCJcblx0XHRcdEBvcHRvdXQ9XCJvbk9wdE91dFwiXG5cdFx0XHRAc2VsZWN0PVwic2V0VmFyaWFudFwiXG5cdFx0Lz5cblx0PC9UZWxlcG9ydD5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBsYW5nPVwibGVzc1wiPlxuQGltcG9ydCAocmVmZXJlbmNlKSAnLi9zdHlsZXMvdG9rZW5zLmxlc3MnO1xuXG4udmEtdmFyaWFudC1wcm9tcHQge1xuXHQvLyBWZWN0b3IgMjAyMiBzcGVjaWZpYyBhZGp1c3RtZW50c1xuXHQuc2tpbi12ZWN0b3ItMjAyMiAmIHtcblx0XHQvLyBDYWxjdWxhdGVkIGZyb20gVmVjdG9yIDIwMjIgc291cmNlIGNvZGVcblx0XHRAdmVjdG9yLTIwMjItaGVhZGVyLWhlaWdodDogNTBweCArIDIgKiA4cHg7XG5cdFx0bWF4LWhlaWdodDogY2FsYygxMDAlIC0gQHNwYWNpbmctdmVydGljYWwtZGlhbG9nIC0gQHZlY3Rvci0yMDIyLWhlYWRlci1oZWlnaHQpO1xuXG5cdFx0LnZlY3Rvci10b2MtYXZhaWxhYmxlLnZlY3Rvci1mZWF0dXJlLXRvYy1waW5uZWQtY2xpZW50cHJlZi0xICYsXG5cdFx0LnZlY3Rvci1mZWF0dXJlLW1haW4tbWVudS1waW5uZWQtZW5hYmxlZCAmIHtcblx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuXHRcdFx0XHRsZWZ0OiB1bnNldDtcblxuXHRcdFx0XHQvLyBDYWxjdWxhdGVkIGZyb20gVmVjdG9yIDIwMjIgc291cmNlIGNvZGVcblx0XHRcdFx0Ly8gSW4gdGhpcyB3aWR0aCB0aGlzIHByb21wdCB3aWxsIG5vdCBvYnNjdXJlIGFydGljbGUgY29udGVudFxuXHRcdFx0XHRAdmVjdG9yLTIwMjItbGVmdC1wYWRkaW5nOiAyLjc1ZW07XG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiAtKEB2ZWN0b3ItMjAyMi1sZWZ0LXBhZGRpbmcgLyAzICogMik7XG5cdFx0XHRcdG1heC13aWR0aDogY2FsYygxMi4yNWVtICsgMzZweCk7XG5cdFx0XHRcdHBhZGRpbmc6IEBzcGFjaW5nLTEwMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcblx0XHRcdEB2ZWN0b3ItMjAyMi1sZWZ0LXBhZGRpbmc6IDMuMjVlbTtcblx0XHRcdGxlZnQ6IHVuc2V0O1xuXHRcdFx0bWFyZ2luLWxlZnQ6IC0oQHZlY3Rvci0yMDIyLWxlZnQtcGFkZGluZyAvIDMgKiAyKTtcblx0XHRcdG1heC13aWR0aDogY2FsYygxNS43NWVtICsgMzZweCk7XG5cdFx0fVxuXHR9XG59XG48L3N0eWxlPlxuLi9tb2R1bGVzL3V0aWxzXG4iLCAiPHNjcmlwdCBzZXR1cCBsYW5nPVwidHNcIj5cbmltcG9ydCB7cmVmLCB3YXRjaH0gZnJvbSAndnVlJztcbmltcG9ydCB7dHlwZSBWYWxpZFZhcmlhbnR9IGZyb20gJ2V4dC5nYWRnZXQuVmFyaWFudEFsbHknO1xuaW1wb3J0IFZBQnV0dG9uIGZyb20gJy4vVkFCdXR0b24udnVlJztcbmltcG9ydCBWQUZhZGVUcmFuc2l0aW9uIGZyb20gJy4vVkFGYWRlVHJhbnNpdGlvbi52dWUnO1xuaW1wb3J0IHVzZUkxOG4sIHtpMThuVmFyaWFudH0gZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlSTE4bic7XG5pbXBvcnQgdXNlVW5pcXVlSWQgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlVW5pcXVlSWQnO1xuaW1wb3J0IHVzZVNodWZmbGVkVmFyaWFudCBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VTaHVmZmxlZFZhcmlhbnQnO1xuaW1wb3J0IHtWQUxJRF9WQVJJQU5UUywgaW5mZXJyZWRWYXJpYW50fSBmcm9tICcuLi9tb2R1bGVzL3V0aWxzJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi9tZXNzYWdlcy5qc29uJztcbmltcG9ydCB1c2VNb2RlbFdyYXBwZXIgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlTW9kZWxXcmFwcGVyJztcbmltcG9ydCB1c2VEZWZhdWx0IGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZURlZmF1bHQnO1xuXG5jb25zdCBwcm9wcyA9IHdpdGhEZWZhdWx0cyhcblx0ZGVmaW5lUHJvcHM8e1xuXHRcdG9wZW46IGJvb2xlYW47XG5cdFx0ZGlzYWJsZWQ/OiBib29sZWFuO1xuXHRcdGF1dG9DbG9zZT86IGJvb2xlYW47XG5cdH0+KCksXG5cdHtcblx0XHRkaXNhYmxlZDogZmFsc2UsXG5cdFx0YXV0b0Nsb3NlOiBmYWxzZSxcblx0fVxuKTtcbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0czx7XG5cdChlOiAndXBkYXRlOm9wZW4nLCB2YWx1ZTogYm9vbGVhbik6IHZvaWQ7XG5cdChlOiAndXBkYXRlOmRpc2FibGVkJywgdmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xuXHQoZTogJ3NlbGVjdCcsIHZhcmlhbnQ6IFZhbGlkVmFyaWFudCk6IHZvaWQ7XG5cdChlOiAnb3B0b3V0Jyk6IHZvaWQ7XG59PigpO1xuXG5jb25zdCBwcm9tcHQgPSByZWY8SFRNTEVsZW1lbnQgfCBudWxsPihudWxsKTtcbmNvbnN0IHRpdGxlSWQgPSB1c2VVbmlxdWVJZCgpO1xuY29uc3QgZGVzY0lkID0gdXNlVW5pcXVlSWQoKTtcbmNvbnN0IGlzT3BlbiA9IHVzZU1vZGVsV3JhcHBlcihwcm9wcywgZW1pdCwgJ29wZW4nKTtcbmNvbnN0IGlzRGlzYWJsZWQgPSB1c2VNb2RlbFdyYXBwZXIocHJvcHMsIGVtaXQsICdkaXNhYmxlZCcpO1xuY29uc3QgaXNWYXJpYW50TmFycm93ZWQgPSB1c2VEZWZhdWx0KCgpID0+IGluZmVycmVkVmFyaWFudC52YWx1ZSAhPT0gbnVsbCk7XG5jb25zdCBzaHVmZmxlZFZhcmlhbnQgPSB1c2VTaHVmZmxlZFZhcmlhbnQoaXNWYXJpYW50TmFycm93ZWQpO1xuXG5mdW5jdGlvbiBvcHRPdXRBbmRDbG9zZSgpIHtcblx0ZW1pdCgnb3B0b3V0Jyk7XG5cdGlzT3Blbi52YWx1ZSA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZWxlY3QodmFyaWFudDogVmFsaWRWYXJpYW50KSB7XG5cdGlzRGlzYWJsZWQudmFsdWUgPSB0cnVlO1xuXHRlbWl0KCdzZWxlY3QnLCB2YXJpYW50KTtcbn1cblxud2F0Y2gocHJvbXB0LCAoKSA9PiB7XG5cdGNvbnN0IGVsZW1lbnQgPSBwcm9tcHQudmFsdWU7XG5cdGlmIChlbGVtZW50ICE9PSBudWxsKSB7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGV2KSA9PiB7XG5cdFx0XHQvLyBEbyBub3QgZGlzbWlzcyBpZiBhbnkgYnV0dG9uIGlzIHByZXNzZWQgb3IgdGhlIHByb21wdCBpcyBkaXNhYmxlZFxuXHRcdFx0aWYgKGV2LmJ1dHRvbnMgPT09IDAgJiYgcHJvcHMuYXV0b0Nsb3NlICYmICFwcm9wcy5kaXNhYmxlZCkge1xuXHRcdFx0XHRpc09wZW4udmFsdWUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufSk7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8VHJhbnNpdGlvbiBuYW1lPVwidmEtdmFyaWFudC1wcm9tcHRcIiBhcHBlYXI+XG5cdFx0PGRpdlxuXHRcdFx0di1pZj1cIm9wZW5cIlxuXHRcdFx0cmVmPVwicHJvbXB0XCJcblx0XHRcdDpsYW5nPVwiYHpoLSR7aTE4blZhcmlhbnR9YFwiXG5cdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0XCJcblx0XHRcdHJvbGU9XCJkaWFsb2dcIlxuXHRcdFx0YXJpYS1tb2RhbD1cImZhbHNlXCJcblx0XHRcdDphcmlhLWxhYmVsbGVkYnk9XCJ0aXRsZUlkXCJcblx0XHRcdDphcmlhLWRlc2NyaWJlZGJ5PVwiZGVzY0lkXCJcblx0XHQ+XG5cdFx0XHQ8VkFCdXR0b25cblx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fY2xvc2VcIlxuXHRcdFx0XHR3ZWlnaHQ9XCJxdWlldFwiXG5cdFx0XHRcdGljb249XCJjbG9zZVwiXG5cdFx0XHRcdDp0aXRsZT1cInVzZUkxOG4oJ2Nsb3NlJylcIlxuXHRcdFx0XHQ6YXJpYS1sYWJlbD1cInVzZUkxOG4oJ2Nsb3NlJylcIlxuXHRcdFx0XHQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdEBjbGljaz1cIm9wdE91dEFuZENsb3NlXCJcblx0XHRcdC8+XG5cdFx0XHQ8aDIgOmlkPVwidGl0bGVJZFwiIGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX3RpdGxlIHZhLXRpdGxlXCI+XG5cdFx0XHRcdHt7IHVzZUkxOG4oaXNWYXJpYW50TmFycm93ZWQgPyAndnAuaGVhZGVyLmFsdCcgOiAndnAuaGVhZGVyJykgfX08YnIgLz5cblx0XHRcdFx0PFZBRmFkZVRyYW5zaXRpb24+XG5cdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdHYtaWY9XCIhaXNWYXJpYW50TmFycm93ZWRcIlxuXHRcdFx0XHRcdFx0OmtleT1cInNodWZmbGVkVmFyaWFudFwiXG5cdFx0XHRcdFx0XHQ6bGFuZz1cImB6aC0ke3NodWZmbGVkVmFyaWFudH1gXCJcblx0XHRcdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX3RpdGxlX192YXJpYW50XCJcblx0XHRcdFx0XHRcdD57eyBtZXNzYWdlcy52YXJpYW50c1tzaHVmZmxlZFZhcmlhbnRdIH19PC9zcGFuXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHQ8L1ZBRmFkZVRyYW5zaXRpb24+XG5cdFx0XHQ8L2gyPlxuXHRcdFx0PHAgOmlkPVwiZGVzY0lkXCIgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fZGVzYyB2YS1wYXJhXCI+XG5cdFx0XHRcdHt7IHVzZUkxOG4oaXNWYXJpYW50TmFycm93ZWQgPyAndnAubWFpbi5hbHQnIDogJ3ZwLm1haW4nKSB9fVxuXHRcdFx0PC9wPlxuXHRcdFx0PGRpdiBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zXCI+XG5cdFx0XHRcdDwhLS0gaW5mZXJyZWRWYXJpYW50IGlzIG5vbi1udWxsLCBndWFyZGVkIGJ5IGlzVmFyaWFudE5hcnJvd2VkIC0tPlxuXHRcdFx0XHQ8VkFCdXR0b25cblx0XHRcdFx0XHR2LWZvcj1cInZhcmlhbnQgaW4gaXNWYXJpYW50TmFycm93ZWQgJiYgaW5mZXJyZWRWYXJpYW50ICE9PSBudWxsXG5cdFx0XHRcdFx0XHQ/IFtpbmZlcnJlZFZhcmlhbnRdXG5cdFx0XHRcdFx0XHQ6IFZBTElEX1ZBUklBTlRTXCJcblx0XHRcdFx0XHQ6a2V5PVwidmFyaWFudFwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uXCJcblx0XHRcdFx0XHQ6Y2xhc3M9XCJ7J3ZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zX19idXR0b24tLXByaW1hcnknOiBpc1ZhcmlhbnROYXJyb3dlZH1cIlxuXHRcdFx0XHRcdGluZGljYXRvcj1cImFycm93TmV4dFwiXG5cdFx0XHRcdFx0d2VpZ2h0PVwicXVpZXRcIlxuXHRcdFx0XHRcdGFjdGlvbj1cInByb2dyZXNzaXZlXCJcblx0XHRcdFx0XHQ6bGFuZz1cInZhcmlhbnRcIlxuXHRcdFx0XHRcdDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0XHRAY2xpY2s9XCJzZWxlY3QodmFyaWFudClcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3sgbWVzc2FnZXMudmFyaWFudHNbdmFyaWFudF0gfX1cblx0XHRcdFx0PC9WQUJ1dHRvbj5cblx0XHRcdFx0PFZBQnV0dG9uXG5cdFx0XHRcdFx0di1pZj1cImlzVmFyaWFudE5hcnJvd2VkXCJcblx0XHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zX19idXR0b25cIlxuXHRcdFx0XHRcdGluZGljYXRvcj1cImFycm93TmV4dFwiXG5cdFx0XHRcdFx0d2VpZ2h0PVwicXVpZXRcIlxuXHRcdFx0XHRcdGFjdGlvbj1cInByb2dyZXNzaXZlXCJcblx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0QGNsaWNrPVwiaXNWYXJpYW50TmFycm93ZWQgPSBmYWxzZVwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHR7eyB1c2VJMThuKCd2cC5idXR0b24ub3RoZXInKSB9fVxuXHRcdFx0XHQ8L1ZBQnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8Zm9vdGVyIGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX2Zvb3RlclwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cInZhLXBhcmEgdmEtcGFyYS0tc3VidGxlXCI+XG5cdFx0XHRcdFx0e3sgdXNlSTE4bigndnAubWFpbi5leHQnKSB9fVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L2Zvb3Rlcj5cblx0XHQ8L2Rpdj5cblx0PC9UcmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vc3R5bGVzL21peGlucy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uL3N0eWxlcy90b2tlbnMubGVzcyc7XG5cbi52YS10aXRsZSB7XG5cdGJvcmRlcjogMDsgLy8gUmVzZXRcblx0cGFkZGluZzogMDsgLy8gUmVzZXRcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcblxuXHRmb250LXNpemU6IEBmb250LXNpemUteHgtbGFyZ2U7XG5cdGZvbnQtd2VpZ2h0OiBAZm9udC13ZWlnaHQtYm9sZDtcblx0bWFyZ2luOiBAc3BhY2luZy01MCBAc3BhY2luZy0wO1xuXHRjb2xvcjogQGNvbG9yLWJhc2U7XG59XG5cbi52YS1wYXJhIHtcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcblx0bWFyZ2luLXRvcDogQHNwYWNpbmctNTA7XG5cdG1hcmdpbi1ib3R0b206IEBzcGFjaW5nLTUwO1xuXHRjb2xvcjogQGNvbG9yLWJhc2U7XG5cblx0Ji0tc3VidGxlIHtcblx0XHRjb2xvcjogQGNvbG9yLXN1YnRsZTtcblx0XHRmb250LXNpemU6IEBmb250LXNpemUteC1zbWFsbDtcblx0XHRtYXJnaW4tYm90dG9tOiBAc3BhY2luZy0zNTtcblx0fVxufVxuXG4udmEtdmFyaWFudC1wcm9tcHQge1xuXHRib3gtc2l6aW5nOiBAYm94LXNpemluZy1iYXNlO1xuXHR6LWluZGV4OiBAei1pbmRleC1vdmVybGF5O1xuXHRwYWRkaW5nOiBAc3BhY2luZy0xMDAgQHNwYWNpbmctMTUwO1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGxlZnQ6IEBzcGFjaW5nLWhvcml6b250YWwtZGlhbG9nO1xuXHRib3R0b206IEBzcGFjaW5nLXZlcnRpY2FsLWRpYWxvZztcblx0d2lkdGg6IGNhbGMoMTAwJSAtIEBzcGFjaW5nLWhvcml6b250YWwtZGlhbG9nICogMik7XG5cdG1heC13aWR0aDogMThlbTtcblx0bWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDJlbSk7XG5cblx0b3ZlcmZsb3c6IGF1dG87XG5cdG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7XG5cdGJhY2tncm91bmQtY29sb3I6IEBiYWNrZ3JvdW5kLWNvbG9yLWJhc2U7XG5cdGJvcmRlcjogQGJvcmRlci1iYXNlO1xuXHRib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1iYXNlO1xuXHRib3gtc2hhZG93OiBAYm94LXNoYWRvdy1kcm9wLW1lZGl1bTtcblx0Zm9udC1mYW1pbHk6IEBmb250LWZhbWlseS1zeXN0ZW0tc2Fucztcblx0Zm9udC1zaXplOiAxcmVtOyAvLyBSZXNldFxuXHRsaW5lLWhlaWdodDogbm9ybWFsOyAvLyBSZXNldFxuXG5cdCZfX2Nsb3NlIHtcblx0XHRwYWRkaW5nOiBAc3BhY2luZy1zaG9ydGhhbmQtYnV0dG9uLWljb24tb25seTtcblx0XHRmbG9hdDogcmlnaHQ7XG5cdFx0bWFyZ2luLXRvcDogQHNwYWNpbmctNTA7XG5cdFx0bWFyZ2luLXJpZ2h0OiAtKEBzcGFjaW5nLWhvcml6b250YWwtYnV0dG9uLWljb24tb25seSArIDFweCk7XG5cdH1cblxuXHQmX190aXRsZSB7XG5cdFx0Jl9fdmFyaWFudCB7XG5cdFx0XHRjb2xvcjogQGNvbG9yLXByb2dyZXNzaXZlO1xuXHRcdH1cblx0fVxuXG5cdCZfX29wdGlvbnMge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdG1hcmdpbjogQHNwYWNpbmctNzUgQHNwYWNpbmctMDtcblxuXHRcdGJvcmRlcjogMXB4IHNvbGlkIEBib3JkZXItY29sb3ItYmFzZTtcblx0XHRib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cy1iYXNlO1xuXG5cdFx0Jl9fYnV0dG9uIHtcblx0XHRcdGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS1zbWFsbDtcblx0XHRcdGNvbG9yOiBAY29sb3ItYmFzZTtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IEBiYWNrZ3JvdW5kLWNvbG9yLWludGVyYWN0aXZlLXN1YnRsZTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDA7XG5cblx0XHRcdCYtLXByaW1hcnkge1xuXHRcdFx0XHRjb2xvcjogQGNvbG9yLXByb2dyZXNzaXZlO1xuXHRcdFx0fVxuXG5cdFx0XHQmOmhvdmVyLFxuXHRcdFx0JjphY3RpdmUge1xuXHRcdFx0XHRib3JkZXItY29sb3I6IEBib3JkZXItY29sb3ItdHJhbnNwYXJlbnQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi8qIFByb21wdCB0cmFuc2l0aW9uIGVmZmVjdCAqL1xuLnZhLXZhcmlhbnQtcHJvbXB0LWVudGVyLWFjdGl2ZSxcbi52YS12YXJpYW50LXByb21wdC1sZWF2ZS1hY3RpdmUge1xuXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBAdHJhbnNpdGlvbi1wcm9wZXJ0eS1mYWRlO1xuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiBAdHJhbnNpdGlvbi1kdXJhdGlvbi1tZWRpdW07XG5cdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24tc3lzdGVtO1xufVxuXG4udmEtdmFyaWFudC1wcm9tcHQtZW50ZXItZnJvbSxcbi52YS12YXJpYW50LXByb21wdC1sZWF2ZS10byB7XG5cdG9wYWNpdHk6IDA7XG59XG48L3N0eWxlPlxuIiwgImltcG9ydCB7IGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSBbXCJ3aWR0aFwiLCBcImhlaWdodFwiXVxuY29uc3QgX2hvaXN0ZWRfMiA9IHsga2V5OiAwIH1cbmNvbnN0IF9ob2lzdGVkXzMgPSB7IGtleTogMSB9XG5jb25zdCBfaG9pc3RlZF80ID0geyBrZXk6IDIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInN2Z1wiLCB7XG4gICAgY2xhc3M6IFwidmEtaWNvbi1idXR0b25fX2ljb25cIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIFwieG1sbnM6eGxpbmtcIjogXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsXG4gICAgd2lkdGg6ICRwcm9wcy5zaXplLFxuICAgIGhlaWdodDogJHByb3BzLnNpemUsXG4gICAgdmlld0JveDogXCIwIDAgMjAgMjBcIixcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gIH0sIFtcbiAgICAoJHByb3BzLmljb24gPT09ICdsYW5nJylcbiAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImdcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgZXNsaW50LWRpc2FibGUgXCIpLFxuICAgICAgICAgIF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBhdGhcIiwgeyBkOiBcIk0yMCAxOGgtMS40NGEuNjEuNjEgMCAwMS0uNC0uMTIuODEuODEgMCAwMS0uMjMtLjMxTDE3IDE1aC01bC0xIDIuNTRhLjc3Ljc3IDAgMDEtLjIyLjMuNTkuNTkgMCAwMS0uNC4xNEg5bDQuNTUtMTEuNDdoMS44OXptLTMuNTMtNC4zMUwxNC44OSA5LjVhMTEuNjIgMTEuNjIgMCAwMS0uMzktMS4yNHEtLjA5LjM3LS4xOS42OWwtLjE5LjU2LTEuNTggNC4xOXptLTYuMy0xLjU4YTEzLjQzIDEzLjQzIDAgMDEtMi45MS0xLjQxIDExLjQ2IDExLjQ2IDAgMDAyLjgxLTUuMzdIMTJWNEg3LjMxYTQgNCAwIDAwLS4yLS41NkM2Ljg3IDIuNzkgNi42IDIgNi42IDJsLTEuNDcuNXMuNC44OS42IDEuNUgwdjEuMzNoMi4xNUExMS4yMyAxMS4yMyAwIDAwNSAxMC43YTE3LjE5IDE3LjE5IDAgMDEtNSAyLjFxLjU2LjgyLjg3IDEuMzhhMjMuMjggMjMuMjggMCAwMDUuMjItMi41MSAxNS42NCAxNS42NCAwIDAwMy41NiAxLjc3ek0zLjYzIDUuMzNoNC45MWE4LjExIDguMTEgMCAwMS0yLjQ1IDQuNDUgOS4xMSA5LjExIDAgMDEtMi40Ni00LjQ1elwiIH0sIG51bGwsIC0xIC8qIEhPSVNURUQgKi8pKSxcbiAgICAgICAgICBfY3JlYXRlQ29tbWVudFZOb2RlKFwiIGVzbGludC1lbmFibGUgXCIpXG4gICAgICAgIF0pKVxuICAgICAgOiAoJHByb3BzLmljb24gPT09ICdjbG9zZScpXG4gICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImdcIiwgX2hvaXN0ZWRfMywgX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSBbXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicGF0aFwiLCB7IGQ6IFwibTQuMzQgMi45MyAxMi43MyAxMi43My0xLjQxIDEuNDFMMi45MyA0LjM1elwiIH0sIG51bGwsIC0xIC8qIEhPSVNURUQgKi8pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBhdGhcIiwgeyBkOiBcIk0xNy4wNyA0LjM0IDQuMzQgMTcuMDdsLTEuNDEtMS40MUwxNS42NiAyLjkzelwiIH0sIG51bGwsIC0xIC8qIEhPSVNURUQgKi8pXG4gICAgICAgICAgXSkpKVxuICAgICAgICA6IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJnXCIsIF9ob2lzdGVkXzQsIF9jYWNoZVsyXSB8fCAoX2NhY2hlWzJdID0gW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBhdGhcIiwgeyBkOiBcIk04LjU5IDMuNDIgMTQuMTcgOUgydjJoMTIuMTdsLTUuNTggNS41OUwxMCAxOGw4LTgtOC04elwiIH0sIG51bGwsIC0xIC8qIEhPSVNURUQgKi8pXG4gICAgICAgICAgXSkpKVxuICBdLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8xKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUljb24udnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFJY29uLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFJY29uLnZ1ZVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHsgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIHJlbmRlclNsb3QgYXMgX3JlbmRlclNsb3QsIGNyZWF0ZUVsZW1lbnRCbG9jayBhcyBfY3JlYXRlRWxlbWVudEJsb2NrLCBub3JtYWxpemVDbGFzcyBhcyBfbm9ybWFsaXplQ2xhc3MgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IHtcbiAga2V5OiAxLFxuICBjbGFzczogXCJ2YS1idXR0b25fX3RleHRcIlxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImJ1dHRvblwiLCB7XG4gICAgY2xhc3M6IF9ub3JtYWxpemVDbGFzcyhbXCJ2YS1idXR0b25cIiwge1xuXHRcdFx0J3ZhLWJ1dHRvbi0tYWN0aW9uLXByb2dyZXNzaXZlJzogJHByb3BzLmFjdGlvbiA9PT0gJ3Byb2dyZXNzaXZlJyxcblx0XHRcdCd2YS1idXR0b24tLXdlaWdodC1xdWlldCc6ICRwcm9wcy53ZWlnaHQgPT09ICdxdWlldCcsXG5cdFx0fV0pLFxuICAgIG9uQ2xpY2s6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+IChfY3R4LiRlbWl0KCdjbGljaycpKSlcbiAgfSwgW1xuICAgICgkcHJvcHMuaWNvbiAhPT0gdW5kZWZpbmVkKVxuICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiVkFJY29uXCJdLCB7XG4gICAgICAgICAga2V5OiAwLFxuICAgICAgICAgIGNsYXNzOiBcInZhLWJ1dHRvbl9faWNvblwiLFxuICAgICAgICAgIGljb246ICRwcm9wcy5pY29uXG4gICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcImljb25cIl0pKVxuICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKSxcbiAgICAoX2N0eC4kc2xvdHNbJ2RlZmF1bHQnXSlcbiAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcInNwYW5cIiwgX2hvaXN0ZWRfMSwgW1xuICAgICAgICAgIF9yZW5kZXJTbG90KF9jdHguJHNsb3RzLCBcImRlZmF1bHRcIiwge30sIHVuZGVmaW5lZCwgdHJ1ZSlcbiAgICAgICAgXSkpXG4gICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgICgkcHJvcHMuaW5kaWNhdG9yICE9PSB1bmRlZmluZWQpXG4gICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJWQUljb25cIl0sIHtcbiAgICAgICAgICBrZXk6IDIsXG4gICAgICAgICAgY2xhc3M6IFwidmEtYnV0dG9uX19pbmRpY2F0b3JcIixcbiAgICAgICAgICBpY29uOiAkcHJvcHMuaW5kaWNhdG9yLFxuICAgICAgICAgIHNpemU6IDE2XG4gICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcImljb25cIl0pKVxuICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICBdLCAyIC8qIENMQVNTICovKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUJ1dHRvbi52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBQnV0dG9uLnZ1ZT90eXBlPXN0eWxlJmluZGV4PTBcIjtpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUJ1dHRvbi52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBQnV0dG9uLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi1iYjc3MzRiMVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHsgcmVuZGVyU2xvdCBhcyBfcmVuZGVyU2xvdCwgVHJhbnNpdGlvbiBhcyBfVHJhbnNpdGlvbiwgd2l0aEN0eCBhcyBfd2l0aEN0eCwgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSkge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9UcmFuc2l0aW9uLCB7XG4gICAgbmFtZTogXCJ2YS1mYWRlXCIsXG4gICAgbW9kZTogXCJvdXQtaW5cIlxuICB9LCB7XG4gICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgX3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiZGVmYXVsdFwiLCB7fSwgdW5kZWZpbmVkLCB0cnVlKVxuICAgIF0pLFxuICAgIF86IDMgLyogRk9SV0FSREVEICovXG4gIH0pKVxufSIsICJjb25zdCBzY3JpcHQgPSB7fTtpbXBvcnQgXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBRmFkZVRyYW5zaXRpb24udnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBRmFkZVRyYW5zaXRpb24udnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUZhZGVUcmFuc2l0aW9uLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi1iYjljNTc1MVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHtjb21wdXRlZH0gZnJvbSAndnVlJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi9tZXNzYWdlcy5qc29uJztcbmltcG9ydCB7d2dVc2VyVmFyaWFudH0gZnJvbSAnLi4vbW9kdWxlcy91dGlscyc7XG5cbi8vIEludGVyZmFjZSB2YXJpYW50IG9mIHZhcmlhbnQgcHJvbXB0XG5jb25zdCBpMThuVmFyaWFudCA9IGNvbXB1dGVkKCgpID0+IHtcblx0aWYgKHdnVXNlclZhcmlhbnQudmFsdWUgPT09ICd6aCcpIHtcblx0XHQvLyBObyBjb252ZXJzaW9uOiB1c2UgcmFuZG9tbHkgc2VsZWN0ZWQgdmFyaWFudFxuXHRcdHJldHVybiBNYXRoLnJhbmRvbSgpID4gMC41ID8gJ2hhbnMnIDogJ2hhbnQnO1xuXHR9XG5cdGlmIChbJ3poLWhhbnQnLCAnemgtdHcnLCAnemgtaGsnLCAnemgtbW8nXS5pbmNsdWRlcyh3Z1VzZXJWYXJpYW50LnZhbHVlKSkge1xuXHRcdHJldHVybiAnaGFudCc7XG5cdH1cblxuXHRyZXR1cm4gJ2hhbnMnO1xufSk7XG5cbmZ1bmN0aW9uIHVzZUkxOG4oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXHRjb25zdCBjdXJyZW50TXNnc0dyb3VwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0gbWVzc2FnZXNbaTE4blZhcmlhbnQudmFsdWVdO1xuXHRyZXR1cm4gY3VycmVudE1zZ3NHcm91cFtrZXldID8/IGtleTtcbn1cblxuZXhwb3J0IHt1c2VJMThuIGFzIGRlZmF1bHQsIGkxOG5WYXJpYW50fTtcbiIsICJ7XG5cdFwidmFyaWFudHNcIjoge1xuXHRcdFwiemgtY25cIjogXCLkuK3lm73lpKfpmYbnroDkvZNcIixcblx0XHRcInpoLXNnXCI6IFwi5paw5Yqg5Z2h566A5L2TXCIsXG5cdFx0XCJ6aC1teVwiOiBcIumprOadpeilv+S6mueugOS9k1wiLFxuXHRcdFwiemgtaGtcIjogXCLkuK3lnIvpppnmuK/nuYHpq5RcIixcblx0XHRcInpoLW1vXCI6IFwi5Lit5ZyL5r6z6ZaA57mB6auUXCIsXG5cdFx0XCJ6aC10d1wiOiBcIuS4reWci+iHuueBo+e5gemrlFwiXG5cdH0sXG5cdFwiaGFuc1wiOiB7XG5cdFx0XCJzcGFjZVwiOiBcIlwiLFxuXHRcdFwiY2xvc2VcIjogXCLlhbPpl61cIixcblx0XHRcInZwLmhlYWRlclwiOiBcIuaIkeS7rOaUr+aMgVwiLFxuXHRcdFwidnAuaGVhZGVyLmFsdFwiOiBcIuiusOS9j+atpOWPmOS9k++8n1wiLFxuXHRcdFwidnAubWFpblwiOiBcIumAieWPluWGheWuueeahOivreiogOWPmOS9k1wiLFxuXHRcdFwidnAubWFpbi5hbHRcIjogXCLku6XlkI7pg73kvb/nlKjmraTlj5jkvZPlkYjnjrDlhoXlrrlcIixcblx0XHRcInZwLm1haW4uZXh0XCI6IFwi5L+d5a2Y5oKo5YGP5aW955qE5Lit5paH6K+t6KiA5Y+Y5L2T77yM5Lul6YG/5YWN5pi+56S6566A57mB5re35p2C55qE5YaF5a6577yM5o+Q5L6b5pyA5L2z55qE6ZiF6K+75L2T6aqM44CCXCIsXG5cdFx0XCJ2cC5idXR0b24ub2tcIjogXCLnoa7lrppcIixcblx0XHRcInZwLmJ1dHRvbi5vdGhlclwiOiBcIuWFtuS7llwiXG5cdH0sXG5cdFwiaGFudFwiOiB7XG5cdFx0XCJzcGFjZVwiOiBcIlwiLFxuXHRcdFwiY2xvc2VcIjogXCLpl5zplolcIixcblx0XHRcInZwLmhlYWRlclwiOiBcIuaIkeWAkeaUr+aPtFwiLFxuXHRcdFwidnAuaGVhZGVyLmFsdFwiOiBcIuiomOS9j+atpOiuiumrlO+8n1wiLFxuXHRcdFwidnAubWFpblwiOiBcIumBuOWPluWFp+WuueeahOiqnuiogOiuiumrlFwiLFxuXHRcdFwidnAubWFpbi5hbHRcIjogXCLku6Xlvozpg73kvb/nlKjmraTororpq5TlkYjnj77lhaflrrlcIixcblx0XHRcInZwLm1haW4uZXh0XCI6IFwi5YSy5a2Y5oKo5YGP5aW955qE5Lit5paH6Kqe6KiA6K6K6auU77yM5Lul6YG/5YWN6aGv56S657Ch57mB5re36Zuc55qE5YWn5a6577yM5o+Q5L6b5pyA5L2z55qE6Zax6K6A6auU6amX44CCXCIsXG5cdFx0XCJ2cC5idXR0b24ub2tcIjogXCLnorrlrppcIixcblx0XHRcInZwLmJ1dHRvbi5vdGhlclwiOiBcIuWFtuS7llwiXG5cdH1cbn1cbiIsICJpbXBvcnQge3R5cGUgVmFsaWRWYXJpYW50fSBmcm9tICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5JztcbmltcG9ydCB7Y29tcHV0ZWQsIHJlZn0gZnJvbSAndnVlJztcblxuY29uc3QgVkFMSURfVkFSSUFOVFMgPSBbJ3poLWNuJywgJ3poLXNnJywgJ3poLW15JywgJ3poLXR3JywgJ3poLWhrJywgJ3poLW1vJ10gYXMgY29uc3Q7XG5cbi8vIFdyYXAgd2dVc2VyVmFyaWFudCBpbiBhIHJlZiBmb3IgZGVidWdnaW5nIHB1cnBvc2VzLlxuLy8gSXQgaGFzIG5vIHJlYWN0aXZpdHkgaW4gcHJvZHVjdGlvbi4gKGNoYW5nZXMgdG8gd2dVc2VyVmFyaWFudCB3aWxsIG5vdCBiZSByZWZsZWN0ZWQpXG4vLyB3Z1VzZXJWYXJpYW50IGNhbiBiZSBudWxsLCBzbyBmYWxscyBiYWNrIHRvIGFuIGVtcHR5IHN0cmluZy5cbmNvbnN0IHdnVXNlclZhcmlhbnQgPSByZWYobXcuY29uZmlnLmdldCgnd2dVc2VyVmFyaWFudCcpID8/ICcnKTtcblxuZnVuY3Rpb24gaXNNb2JpbGVEZXZpY2UoKTogYm9vbGVhbiB7XG5cdC8vIEJyb3dzZXIgc3VwcG9ydDpcblx0Ly8gQ2hyb21pdW0gb24gc29tZSBBbmRyb2lkIGRldmljZSAoZS5nLiBTYW1zdW5nKSBoYXMgXCIoaG92ZXI6IGhvdmVyKVwiIHNldFxuXHQvLyBTbyBjaGVjayBwb2ludGVyIHRvZ2V0aGVyXG5cdHJldHVybiBtYXRjaE1lZGlhKCcoaG92ZXI6IG5vbmUpLCAocG9pbnRlcjogY29hcnNlKScpLm1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIGdldE1vdW50UG9pbnQoKTogRWxlbWVudCB7XG5cdHN3aXRjaCAobXcuY29uZmlnLmdldCgnc2tpbicpKSB7XG5cdFx0Y2FzZSAndmVjdG9yLTIwMjInOlxuXHRcdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tdy1wYWdlLWNvbnRhaW5lcicpWzBdID8/IGRvY3VtZW50LmJvZHk7XG5cdFx0Y2FzZSAnZ29uZ2JpJzpcblx0XHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctY29udGVudC1ibG9jaycpID8/IGRvY3VtZW50LmJvZHk7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBkb2N1bWVudC5ib2R5O1xuXHR9XG59XG5cbmNvbnN0IGluZmVycmVkVmFyaWFudCA9IGNvbXB1dGVkKCgpID0+IHtcblx0aWYgKChWQUxJRF9WQVJJQU5UUyBhcyBSZWFkb25seUFycmF5PHN0cmluZz4pLmluY2x1ZGVzKHdnVXNlclZhcmlhbnQudmFsdWUpKSB7XG5cdFx0cmV0dXJuIHdnVXNlclZhcmlhbnQudmFsdWUgYXMgVmFsaWRWYXJpYW50O1xuXHR9XG5cdHJldHVybiBudWxsO1xufSk7XG5cbi8qKlxuICogU2h1ZmZsZSBiZXR3ZWVuIGFsbCB2YWxpZCB2YXJpYW50cy5cbiAqXG4gKiBAcGFyYW0gbGFzdCBsYXN0IHNodWZmbGVkIHZhcmlhbnQsIHVzZWQgdG8gcHJldmVudCBkdXBsaWNhdGlvbnNcbiAqIEByZXR1cm5zIHNodWZmbGVkIHZhcmlhbnRcbiAqL1xuZnVuY3Rpb24gc2h1ZmZsZVZhcmlhbnQobGFzdD86IFZhbGlkVmFyaWFudCk6IFZhbGlkVmFyaWFudCB7XG5cdGNvbnN0IHRhcmdldEFycmF5ID0gWy4uLlZBTElEX1ZBUklBTlRTXS5maWx0ZXIoKGkpID0+IHtcblx0XHRyZXR1cm4gaSAhPT0gbGFzdDtcblx0fSk7XG5cdGNvbnN0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGFyZ2V0QXJyYXkubGVuZ3RoKTtcblx0cmV0dXJuIHRhcmdldEFycmF5W3JhbmRvbUluZGV4XSE7XG59XG5cbmV4cG9ydCB7VkFMSURfVkFSSUFOVFMsIHdnVXNlclZhcmlhbnQsIGlzTW9iaWxlRGV2aWNlLCBnZXRNb3VudFBvaW50LCBpbmZlcnJlZFZhcmlhbnQsIHNodWZmbGVWYXJpYW50fTtcbiIsICJsZXQgY291bnRlciA9IDA7XG5cbi8qKlxuICogUmV0dXJuIGEgdW5pcXVlIGVsZW1lbnQgSUQgb24gZWFjaCBjYWxsLlxuICpcbiAqIEByZXR1cm5zIGlkXG4gKi9cbmZ1bmN0aW9uIHVzZVVuaXF1ZUlkKCk6IHN0cmluZyB7XG5cdHJldHVybiBgdmEtJHtjb3VudGVyKyt9YDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlVW5pcXVlSWQ7XG4iLCAiaW1wb3J0IHtSZWYsIHJlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge3R5cGUgVmFsaWRWYXJpYW50fSBmcm9tICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5JztcbmltcG9ydCB7aW5mZXJyZWRWYXJpYW50LCBzaHVmZmxlVmFyaWFudH0gZnJvbSAnLi4vbW9kdWxlcy91dGlscyc7XG5cbmNvbnN0IElOVEVSVkFMID0gMyAqIDEwMDA7XG5cbi8qKlxuICogUmV0dXJuIGEgcmVmIHdoaWNoIHNodWZmbGUgYmV0d2VlbiBhbGwgcG9zc2libGUgdmFyaWFudHMuXG4gKlxuICogQHBhcmFtIGlzRnJlZXplZCBzaG91bGQgc2h1ZmZsaW5nIHBhdXNlIG9yIG5vdFxuICovXG5mdW5jdGlvbiB1c2VTaHVmZmxlZFZhcmlhbnQoaXNGcmVlemVkOiBSZWY8Ym9vbGVhbj4pOiBSZWY8VmFsaWRWYXJpYW50PiB7XG5cdGNvbnN0IHJlc3VsdCA9IHJlZjxWYWxpZFZhcmlhbnQ+KHNodWZmbGVWYXJpYW50KCkpO1xuXHRsZXQgaWQ6IG51bWJlcjtcblxuXHR3YXRjaChcblx0XHRpc0ZyZWV6ZWQsXG5cdFx0KG5ld1ZhbHVlKSA9PiB7XG5cdFx0XHRpZiAobmV3VmFsdWUpIHtcblx0XHRcdFx0Y2xlYXJJbnRlcnZhbChpZCk7XG5cdFx0XHRcdC8vIEF0dGVtcHQgdG8gZnJlZXplIGF0IGluZmVycmVkIHZhcmlhbnQgYXQgYSBiZXN0IGVmZm9ydFxuXHRcdFx0XHQvLyBUaGlzIHNob3VsZCBiZSBtb3N0IGNhc2VzXG5cdFx0XHRcdHJlc3VsdC52YWx1ZSA9IGluZmVycmVkVmFyaWFudC52YWx1ZSA/PyBzaHVmZmxlVmFyaWFudCgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHRcdHJlc3VsdC52YWx1ZSA9IHNodWZmbGVWYXJpYW50KHJlc3VsdC52YWx1ZSk7XG5cdFx0XHRcdH0sIElOVEVSVkFMKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHtpbW1lZGlhdGU6IHRydWV9XG5cdCk7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU2h1ZmZsZWRWYXJpYW50O1xuIiwgImltcG9ydCB7V3JpdGFibGVDb21wdXRlZFJlZiwgY29tcHV0ZWR9IGZyb20gJ3Z1ZSc7XG5cbi8qKlxuICogUmV0dXJuIGEgY29tcHV0ZWQgcHJvcGVydHkgdGhhdCByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHByb3AgdmFsdWUgd2hlbiBpcyBhY2Nlc3NlZFxuICogYW5kIGZpcmVzIGFuIGV2ZW50IHdoZW4gaXMgc2V0LiBVc2VkIHdpdGggdi1tb2RlbC5cbiAqXG4gKiBAcGFyYW0gcHJvcHMgcHJvcHMgZmllbGQgb2YgYSBjb21wb25lbnRcbiAqIEBwYXJhbSBlbWl0IGVtaXQgZnVuY3Rpb24gb2YgYSBjb21wb25lbnRcbiAqIEBwYXJhbSBuYW1lIG5hbWUgb2YgdGhlIHByb3BcbiAqIEByZXR1cm4gd3JhcHBlZCBjb21wdXRlciBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiB1c2VNb2RlbFdyYXBwZXI8VCBleHRlbmRzIHN0cmluZywgUCBleHRlbmRzIFJlY29yZDxULCB1bmtub3duPj4oXG5cdHByb3BzOiBQLFxuXHRlbWl0OiAoZXZlbnQ6IGB1cGRhdGU6JHtUfWAsIHZhbHVlOiBQW1RdKSA9PiB2b2lkLFxuXHRuYW1lOiBUID0gJ21vZGVsVmFsdWUnIGFzIFRcbik6IFdyaXRhYmxlQ29tcHV0ZWRSZWY8UFtUXT4ge1xuXHRyZXR1cm4gY29tcHV0ZWQoe1xuXHRcdGdldCgpIHtcblx0XHRcdHJldHVybiBwcm9wc1tuYW1lXTtcblx0XHR9LFxuXHRcdHNldCh2YWx1ZSkge1xuXHRcdFx0ZW1pdChgdXBkYXRlOiR7bmFtZX1gLCB2YWx1ZSk7XG5cdFx0fSxcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZU1vZGVsV3JhcHBlcjtcbiIsICJpbXBvcnQge1JlZiwgV2F0Y2hTb3VyY2UsIGNvbXB1dGVkLCBzaGFsbG93UmVmLCB3YXRjaH0gZnJvbSAndnVlJztcblxuLyoqXG4gKiBDcmVhdGUgYSByZWYgdGhhdCwgY2FuIGJlIGluZGVwZW5kZW50bHkgdXBkYXRlZCwgYnV0IHdoZW4gaXRzIGRlZmF1bHRcbiAqIHZhbHVlIGNoYW5nZXMsIGl0IGlzIHJlc3RvcmVkIHRvIGl0cyAobmV3KSBkZWZhdWx0IHZhbHVlLlxuICpcbiAqIFVzZWQgZm9yIGRlYnVnZ2luZy5cbiAqL1xuZnVuY3Rpb24gdXNlRGVmYXVsdDxUPihkZWZhdWx0VmFsdWU6IFdhdGNoU291cmNlPFQ+KTogUmVmPFQ+IHtcblx0Y29uc3QgcmVhbFJlZiA9IHNoYWxsb3dSZWY8VD4odHlwZW9mIGRlZmF1bHRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IGRlZmF1bHRWYWx1ZSgpIDogZGVmYXVsdFZhbHVlLnZhbHVlKTtcblxuXHR3YXRjaChcblx0XHRkZWZhdWx0VmFsdWUsXG5cdFx0KG5ld1ZhbHVlKSA9PiB7XG5cdFx0XHRyZWFsUmVmLnZhbHVlID0gbmV3VmFsdWU7XG5cdFx0fSxcblx0XHR7ZGVlcDogdHJ1ZX1cblx0KTtcblxuXHRyZXR1cm4gY29tcHV0ZWQoe1xuXHRcdGdldCgpIHtcblx0XHRcdHJldHVybiByZWFsUmVmLnZhbHVlO1xuXHRcdH0sXG5cdFx0c2V0KG5ld1ZhbHVlKSB7XG5cdFx0XHRyZWFsUmVmLnZhbHVlID0gbmV3VmFsdWU7XG5cdFx0fSxcblx0fSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZURlZmF1bHQ7XG4iLCAiaW1wb3J0IHsgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIHdpdGhDdHggYXMgX3dpdGhDdHgsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG5vcm1hbGl6ZUNsYXNzIGFzIF9ub3JtYWxpemVDbGFzcywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrLCBUcmFuc2l0aW9uIGFzIF9UcmFuc2l0aW9uIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF9ob2lzdGVkXzEgPSBbXCJsYW5nXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCIsIFwiYXJpYS1kZXNjcmliZWRieVwiXVxuY29uc3QgX2hvaXN0ZWRfMiA9IFtcImlkXCJdXG5jb25zdCBfaG9pc3RlZF8zID0gW1wibGFuZ1wiXVxuY29uc3QgX2hvaXN0ZWRfNCA9IFtcImlkXCJdXG5jb25zdCBfaG9pc3RlZF81ID0geyBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc1wiIH1cbmNvbnN0IF9ob2lzdGVkXzYgPSB7IGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0X19mb290ZXJcIiB9XG5jb25zdCBfaG9pc3RlZF83ID0geyBjbGFzczogXCJ2YS1wYXJhIHZhLXBhcmEtLXN1YnRsZVwiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfVHJhbnNpdGlvbiwge1xuICAgIG5hbWU6IFwidmEtdmFyaWFudC1wcm9tcHRcIixcbiAgICBhcHBlYXI6IFwiXCJcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICgkcHJvcHMub3BlbilcbiAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgIHJlZjogXCJwcm9tcHRcIixcbiAgICAgICAgICAgIGxhbmc6IGB6aC0keyRzZXR1cC5pMThuVmFyaWFudH1gLFxuICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRcIixcbiAgICAgICAgICAgIHJvbGU6IFwiZGlhbG9nXCIsXG4gICAgICAgICAgICBcImFyaWEtbW9kYWxcIjogXCJmYWxzZVwiLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogJHNldHVwLnRpdGxlSWQsXG4gICAgICAgICAgICBcImFyaWEtZGVzY3JpYmVkYnlcIjogJHNldHVwLmRlc2NJZFxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJWQUJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fY2xvc2VcIixcbiAgICAgICAgICAgICAgd2VpZ2h0OiBcInF1aWV0XCIsXG4gICAgICAgICAgICAgIGljb246IFwiY2xvc2VcIixcbiAgICAgICAgICAgICAgdGl0bGU6ICRzZXR1cC51c2VJMThuKCdjbG9zZScpLFxuICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogJHNldHVwLnVzZUkxOG4oJ2Nsb3NlJyksXG4gICAgICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICRzZXR1cC5vcHRPdXRBbmRDbG9zZVxuICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1widGl0bGVcIiwgXCJhcmlhLWxhYmVsXCIsIFwiZGlzYWJsZWRcIl0pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImgyXCIsIHtcbiAgICAgICAgICAgICAgaWQ6ICRzZXR1cC50aXRsZUlkLFxuICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fdGl0bGUgdmEtdGl0bGVcIlxuICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkID8gJ3ZwLmhlYWRlci5hbHQnIDogJ3ZwLmhlYWRlcicpKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICAgICAgX2NhY2hlWzFdIHx8IChfY2FjaGVbMV0gPSBfY3JlYXRlRWxlbWVudFZOb2RlKFwiYnJcIiwgbnVsbCwgbnVsbCwgLTEgLyogSE9JU1RFRCAqLykpLFxuICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiVkFGYWRlVHJhbnNpdGlvblwiXSwgbnVsbCwge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgICghJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkKVxuICAgICAgICAgICAgICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJHNldHVwLnNodWZmbGVkVmFyaWFudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmc6IGB6aC0keyRzZXR1cC5zaHVmZmxlZFZhcmlhbnR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0X190aXRsZV9fdmFyaWFudFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAubWVzc2FnZXMudmFyaWFudHNbJHNldHVwLnNodWZmbGVkVmFyaWFudF0pLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF8zKSlcbiAgICAgICAgICAgICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8yKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIHtcbiAgICAgICAgICAgICAgaWQ6ICRzZXR1cC5kZXNjSWQsXG4gICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0X19kZXNjIHZhLXBhcmFcIlxuICAgICAgICAgICAgfSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigkc2V0dXAuaXNWYXJpYW50TmFycm93ZWQgPyAndnAubWFpbi5hbHQnIDogJ3ZwLm1haW4nKSksIDkgLyogVEVYVCwgUFJPUFMgKi8sIF9ob2lzdGVkXzQpLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF81LCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgaW5mZXJyZWRWYXJpYW50IGlzIG5vbi1udWxsLCBndWFyZGVkIGJ5IGlzVmFyaWFudE5hcnJvd2VkIFwiKSxcbiAgICAgICAgICAgICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdCgkc2V0dXAuaXNWYXJpYW50TmFycm93ZWQgJiYgJHNldHVwLmluZmVycmVkVmFyaWFudCAhPT0gbnVsbFxuXHRcdFx0XHRcdFx0PyBbJHNldHVwLmluZmVycmVkVmFyaWFudF1cblx0XHRcdFx0XHRcdDogJHNldHVwLlZBTElEX1ZBUklBTlRTLCAodmFyaWFudCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiVkFCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgICAgIGtleTogdmFyaWFudCxcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfbm9ybWFsaXplQ2xhc3MoW1widmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNfX2J1dHRvblwiLCB7J3ZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zX19idXR0b24tLXByaW1hcnknOiAkc2V0dXAuaXNWYXJpYW50TmFycm93ZWR9XSksXG4gICAgICAgICAgICAgICAgICBpbmRpY2F0b3I6IFwiYXJyb3dOZXh0XCIsXG4gICAgICAgICAgICAgICAgICB3ZWlnaHQ6IFwicXVpZXRcIixcbiAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJwcm9ncmVzc2l2ZVwiLFxuICAgICAgICAgICAgICAgICAgbGFuZzogdmFyaWFudCxcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrOiAkZXZlbnQgPT4gKCRzZXR1cC5zZWxlY3QodmFyaWFudCkpXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLm1lc3NhZ2VzLnZhcmlhbnRzW3ZhcmlhbnRdKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfOiAyIC8qIERZTkFNSUMgKi9cbiAgICAgICAgICAgICAgICB9LCAxMDMyIC8qIFBST1BTLCBEWU5BTUlDX1NMT1RTICovLCBbXCJjbGFzc1wiLCBcImxhbmdcIiwgXCJkaXNhYmxlZFwiLCBcIm9uQ2xpY2tcIl0pKVxuICAgICAgICAgICAgICB9KSwgMTI4IC8qIEtFWUVEX0ZSQUdNRU5UICovKSksXG4gICAgICAgICAgICAgICgkc2V0dXAuaXNWYXJpYW50TmFycm93ZWQpXG4gICAgICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiVkFCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIGluZGljYXRvcjogXCJhcnJvd05leHRcIixcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0OiBcInF1aWV0XCIsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogXCJwcm9ncmVzc2l2ZVwiLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkID0gZmFsc2UpKVxuICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCd2cC5idXR0b24ub3RoZXInKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgICAgICB9LCA4IC8qIFBST1BTICovLCBbXCJkaXNhYmxlZFwiXSkpXG4gICAgICAgICAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZm9vdGVyXCIsIF9ob2lzdGVkXzYsIFtcbiAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgX2hvaXN0ZWRfNywgX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigndnAubWFpbi5leHQnKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMSkpXG4gICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICBdKSxcbiAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICB9KSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHQudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRTpcXFxcZ2hSZXBvXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHQudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdC52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtNWE0NGNjNzVcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge3JlZn0gZnJvbSAndnVlJztcbmltcG9ydCB7dHlwZSBWYWxpZFZhcmlhbnR9IGZyb20gJ2V4dC5nYWRnZXQuVmFyaWFudEFsbHknO1xuaW1wb3J0IFZBQnV0dG9uIGZyb20gJy4vVkFCdXR0b24udnVlJztcbmltcG9ydCBWQVNlbGVjdCBmcm9tICcuL1ZBU2VsZWN0LnZ1ZSc7XG5pbXBvcnQgdXNlSTE4biwge2kxOG5WYXJpYW50fSBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VJMThuJztcbmltcG9ydCB1c2VVbmlxdWVJZCBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VVbmlxdWVJZCc7XG5pbXBvcnQge1ZBTElEX1ZBUklBTlRTLCBpbmZlcnJlZFZhcmlhbnQsIHNodWZmbGVWYXJpYW50fSBmcm9tICcuLi9tb2R1bGVzL3V0aWxzJztcbmltcG9ydCBtZXNzYWdlcyBmcm9tICcuLi9tZXNzYWdlcy5qc29uJztcbmltcG9ydCB1c2VNb2RlbFdyYXBwZXIgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlTW9kZWxXcmFwcGVyJztcbmltcG9ydCB1c2VEZWZhdWx0IGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZURlZmF1bHQnO1xuXG5jb25zdCBwcm9wcyA9IHdpdGhEZWZhdWx0cyhcblx0ZGVmaW5lUHJvcHM8e1xuXHRcdG9wZW46IGJvb2xlYW47XG5cdFx0ZGlzYWJsZWQ/OiBib29sZWFuO1xuXHR9PigpLFxuXHR7XG5cdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHR9XG4pO1xuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcblx0KGU6ICd1cGRhdGU6b3BlbicsIHZhbHVlOiBib29sZWFuKTogdm9pZDtcblx0KGU6ICd1cGRhdGU6ZGlzYWJsZWQnLCB2YWx1ZTogYm9vbGVhbik6IHZvaWQ7XG5cdChlOiAnc2VsZWN0JywgdmFyaWFudDogVmFsaWRWYXJpYW50KTogdm9pZDtcblx0KGU6ICdvcHRvdXQnKTogdm9pZDtcbn0+KCk7XG5cbmNvbnN0IHByb21wdCA9IHJlZjxIVE1MRWxlbWVudCB8IG51bGw+KG51bGwpO1xuY29uc3QgdGl0bGVJZCA9IHVzZVVuaXF1ZUlkKCk7XG5jb25zdCBzZWxlY3RlZFZhcmlhbnQgPSB1c2VEZWZhdWx0KCgpID0+IGluZmVycmVkVmFyaWFudC52YWx1ZSA/PyBzaHVmZmxlVmFyaWFudCgpKTtcbmNvbnN0IGlzT3BlbiA9IHVzZU1vZGVsV3JhcHBlcihwcm9wcywgZW1pdCwgJ29wZW4nKTtcbmNvbnN0IGlzRGlzYWJsZWQgPSB1c2VNb2RlbFdyYXBwZXIocHJvcHMsIGVtaXQsICdkaXNhYmxlZCcpO1xuXG5mdW5jdGlvbiBvcHRPdXRBbmRDbG9zZSgpIHtcblx0ZW1pdCgnb3B0b3V0Jyk7XG5cdGlzT3Blbi52YWx1ZSA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZWxlY3QodmFyaWFudDogVmFsaWRWYXJpYW50KSB7XG5cdGlzRGlzYWJsZWQudmFsdWUgPSB0cnVlO1xuXHRlbWl0KCdzZWxlY3QnLCB2YXJpYW50KTtcbn1cbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG5cdDxUcmFuc2l0aW9uIG5hbWU9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVcIiBhcHBlYXI+XG5cdFx0PGRpdlxuXHRcdFx0di1pZj1cIm9wZW5cIlxuXHRcdFx0cmVmPVwicHJvbXB0XCJcblx0XHRcdDpsYW5nPVwiYHpoLSR7aTE4blZhcmlhbnR9YFwiXG5cdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZVwiXG5cdFx0XHRyb2xlPVwiZGlhbG9nXCJcblx0XHRcdGFyaWEtbW9kYWw9XCJmYWxzZVwiXG5cdFx0XHQ6YXJpYS1sYWJlbGxlZGJ5PVwidGl0bGVJZFwiXG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9faGVhZGVyXCI+XG5cdFx0XHRcdDxoMiA6aWQ9XCJ0aXRsZUlkXCIgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlcl9fdGl0bGUgdmEtdGl0bGVcIj5cblx0XHRcdFx0XHR7eyB1c2VJMThuKCd2cC5tYWluJykgfX1cblx0XHRcdFx0PC9oMj5cblx0XHRcdFx0PFZBQnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlcl9fY2xvc2VcIlxuXHRcdFx0XHRcdHdlaWdodD1cInF1aWV0XCJcblx0XHRcdFx0XHRpY29uPVwiY2xvc2VcIlxuXHRcdFx0XHRcdDp0aXRsZT1cInVzZUkxOG4oJ2Nsb3NlJylcIlxuXHRcdFx0XHRcdDphcmlhLWxhYmVsPVwidXNlSTE4bignY2xvc2UnKVwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdEBjbGljaz1cIm9wdE91dEFuZENsb3NlXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fbWFpblwiPlxuXHRcdFx0XHQ8VkFTZWxlY3Rcblx0XHRcdFx0XHR2LW1vZGVsPVwic2VsZWN0ZWRWYXJpYW50XCJcblx0XHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fbWFpbl9fc2VsZWN0XCJcblx0XHRcdFx0XHQ6bGFuZz1cInNlbGVjdGVkVmFyaWFudFwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdDphcmlhLWxhYmVsbGVkYnk9XCJ0aXRsZUlkXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxvcHRpb24gdi1mb3I9XCJ2YXJpYW50IGluIFZBTElEX1ZBUklBTlRTXCIgOmtleT1cInZhcmlhbnRcIiA6dmFsdWU9XCJ2YXJpYW50XCIgOmxhbmc9XCJ2YXJpYW50XCI+XG5cdFx0XHRcdFx0XHR7eyBtZXNzYWdlcy52YXJpYW50c1t2YXJpYW50XSB9fVxuXHRcdFx0XHRcdDwvb3B0aW9uPlxuXHRcdFx0XHQ8L1ZBU2VsZWN0PlxuXHRcdFx0XHQ8VkFCdXR0b25cblx0XHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fbWFpbl9fYWN0aW9uXCJcblx0XHRcdFx0XHRhY3Rpb249XCJwcm9ncmVzc2l2ZVwiXG5cdFx0XHRcdFx0aWNvbj1cImFycm93TmV4dFwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdEBjbGljaz1cInNlbGVjdChzZWxlY3RlZFZhcmlhbnQpXCJcblx0XHRcdFx0XHQ+e3sgdXNlSTE4bigndnAuYnV0dG9uLm9rJykgfX08L1ZBQnV0dG9uXG5cdFx0XHRcdD5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGZvb3RlciBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fZm9vdGVyXCI+XG5cdFx0XHRcdDxwIGNsYXNzPVwidmEtcGFyYSB2YS1wYXJhLS1zdWJ0bGVcIj5cblx0XHRcdFx0XHR7eyB1c2VJMThuKCd2cC5tYWluLmV4dCcpIH19XG5cdFx0XHRcdDwvcD5cblx0XHRcdDwvZm9vdGVyPlxuXHRcdDwvZGl2PlxuXHQ8L1RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi9zdHlsZXMvbWl4aW5zLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vc3R5bGVzL3Rva2Vucy5sZXNzJztcblxuLnZhLXRpdGxlIHtcblx0Ym9yZGVyOiAwOyAvLyBSZXNldFxuXHRwYWRkaW5nOiAwOyAvLyBSZXNldFxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXG5cdGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS14eC1sYXJnZTtcblx0Zm9udC13ZWlnaHQ6IEBmb250LXdlaWdodC1ib2xkO1xuXHRtYXJnaW46IEBzcGFjaW5nLTUwIEBzcGFjaW5nLTA7XG5cdGNvbG9yOiBAY29sb3ItYmFzZTtcbn1cblxuLnZhLXBhcmEge1xuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXHRtYXJnaW4tdG9wOiBAc3BhY2luZy01MDtcblx0Y29sb3I6IEBjb2xvci1iYXNlO1xuXG5cdCYtLXN1YnRsZSB7XG5cdFx0Y29sb3I6IEBjb2xvci1zdWJ0bGU7XG5cdFx0Zm9udC1zaXplOiBAZm9udC1zaXplLXgtc21hbGw7XG5cdFx0bWFyZ2luLWJvdHRvbTogQHNwYWNpbmctMzU7XG5cdH1cbn1cblxuLnZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZSB7XG5cdGJveC1zaXppbmc6IEBib3gtc2l6aW5nLWJhc2U7XG5cdHotaW5kZXg6IEB6LWluZGV4LW92ZXJsYXk7XG5cdHBhZGRpbmc6IEBzcGFjaW5nLTUwIEBzcGFjaW5nLTEwMDtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRsZWZ0OiBAc3BhY2luZy0wO1xuXHRyaWdodDogQHNwYWNpbmctMDtcblx0Ym90dG9tOiBAc3BhY2luZy0wO1xuXHRtYXJnaW46IEBzcGFjaW5nLTAgYXV0bztcblx0d2lkdGg6IDEwMCU7XG5cdG1heC13aWR0aDogNjAwcHg7XG5cdG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyZW0pO1xuXG5cdG92ZXJmbG93OiBhdXRvO1xuXHRvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZC1jb2xvci1iYXNlO1xuXHRib3JkZXI6IEBib3JkZXItYmFzZTtcblx0Ym9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtYmFzZTtcblx0Ym94LXNoYWRvdzogQGJveC1zaGFkb3ctZHJvcC1tZWRpdW07XG5cdGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktc3lzdGVtLXNhbnM7XG5cdGZvbnQtc2l6ZTogMXJlbTsgLy8gUmVzZXRcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDsgLy8gUmVzZXRcblxuXHQmX19oZWFkZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRcdCZfX3RpdGxlIHtcblx0XHRcdGZsZXg6IDE7XG5cdFx0XHRmb250LXNpemU6IEBmb250LXNpemUtbWVkaXVtO1xuXHRcdH1cblxuXHRcdCZfX2Nsb3NlIHtcblx0XHRcdHBhZGRpbmc6IEBzcGFjaW5nLXNob3J0aGFuZC1idXR0b24taWNvbi1vbmx5O1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiAtKEBzcGFjaW5nLWhvcml6b250YWwtYnV0dG9uLWljb24tb25seSArIDFweCk7XG5cdFx0fVxuXHR9XG5cblx0Jl9fbWFpbiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRtYXJnaW4tdG9wOiBAc3BhY2luZy0yNTtcblxuXHRcdCZfX3NlbGVjdCB7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IEBzcGFjaW5nLTc1O1xuXHRcdFx0ZmxleDogMTtcblx0XHR9XG5cblx0XHQmX19hY3Rpb24ge1xuXHRcdFx0ZmxleC1zaHJpbms6IDA7XG5cdFx0fVxuXHR9XG5cblx0Jl9fY2xvc2Uge1xuXHRcdHBhZGRpbmc6IEBzcGFjaW5nLXNob3J0aGFuZC1idXR0b24taWNvbi1vbmx5O1xuXHRcdGZsb2F0OiByaWdodDtcblx0XHRtYXJnaW4tcmlnaHQ6IC0oQHNwYWNpbmctaG9yaXpvbnRhbC1idXR0b24taWNvbi1vbmx5ICsgMXB4KTtcblx0fVxufVxuXG4vKiBQcm9tcHQgdHJhbnNpdGlvbiBlZmZlY3QgKi9cbi52YS12YXJpYW50LXByb21wdC1tb2JpbGUtZW50ZXItYWN0aXZlLFxuLnZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZS1sZWF2ZS1hY3RpdmUge1xuXHR0cmFuc2l0aW9uLXByb3BlcnR5OiBAdHJhbnNpdGlvbi1wcm9wZXJ0eS1sYXlvdXQ7XG5cdHRyYW5zaXRpb24tZHVyYXRpb246IEB0cmFuc2l0aW9uLWR1cmF0aW9uLW1lZGl1bTtcblx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IEB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbi1zeXN0ZW07XG59XG5cbi52YS12YXJpYW50LXByb21wdC1tb2JpbGUtZW50ZXItZnJvbSxcbi52YS12YXJpYW50LXByb21wdC1tb2JpbGUtbGVhdmUtdG8ge1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG59XG48L3N0eWxlPlxuLi4vbW9kdWxlcy91dGlsc1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQgdXNlTW9kZWxXcmFwcGVyIGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZU1vZGVsV3JhcHBlcic7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHM8e1xuXHRtb2RlbFZhbHVlOiBzdHJpbmc7XG59PigpO1xuY29uc3QgZW1pdCA9IGRlZmluZUVtaXRzPHtcblx0KGU6ICd1cGRhdGU6bW9kZWxWYWx1ZScsIHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xufT4oKTtcblxuY29uc3QgbW9kZWxWYWx1ZSA9IHVzZU1vZGVsV3JhcHBlcihwcm9wcywgZW1pdCk7XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8c2VsZWN0IHYtbW9kZWw9XCJtb2RlbFZhbHVlXCIgY2xhc3M9XCJ2YS1zZWxlY3RcIj5cblx0XHQ8c2xvdCAvPlxuXHQ8L3NlbGVjdD5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uL3N0eWxlcy9taXhpbnMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi9zdHlsZXMvdG9rZW5zLmxlc3MnO1xuXG4udmEtc2VsZWN0IHtcblx0LnNlbGVjdF9faGFuZGxlKCk7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciByaWdodCBAc3BhY2luZy03NTtcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0YmFja2dyb3VuZC1pbWFnZTogQGljb24tZXhwYW5kO1xuXHRiYWNrZ3JvdW5kLXNpemU6IEBzaXplLWljb24teC1zbWFsbDtcblxuXHQmOmRpc2FibGVkIHtcblx0XHQuc2VsZWN0X19oYW5kbGUtLWRpc2FibGVkKCk7XG5cdFx0YmFja2dyb3VuZC1pbWFnZTogQGljb24tZXhwYW5kLWRpc2FibGVkO1xuXHRcdC8vIFN1cHBvcnQ6IENocm9tZSwgd2hpY2ggc2V0cyBhbiBvcGFjaXR5IGxlc3MgdGhhbiAxIGZvciBkaXNhYmxlZCBzZWxlY3QgZWxlbWVudHMuXG5cdFx0b3BhY2l0eTogQG9wYWNpdHktYmFzZTtcblx0XHRjdXJzb3I6IEBjdXJzb3Itbm90LWFsbG93ZWQ7XG5cdH1cblxuXHQmOmVuYWJsZWQge1xuXHRcdC5zZWxlY3RfX2hhbmRsZS0tZW5hYmxlZCgpO1xuXHR9XG59XG48L3N0eWxlPlxuIiwgImltcG9ydCB7IHJlbmRlclNsb3QgYXMgX3JlbmRlclNsb3QsIHZNb2RlbFNlbGVjdCBhcyBfdk1vZGVsU2VsZWN0LCB3aXRoRGlyZWN0aXZlcyBhcyBfd2l0aERpcmVjdGl2ZXMsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gX3dpdGhEaXJlY3RpdmVzKChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJzZWxlY3RcIiwge1xuICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoKCRzZXR1cC5tb2RlbFZhbHVlKSA9ICRldmVudCkpLFxuICAgIGNsYXNzOiBcInZhLXNlbGVjdFwiXG4gIH0sIFtcbiAgICBfcmVuZGVyU2xvdChfY3R4LiRzbG90cywgXCJkZWZhdWx0XCIsIHt9LCB1bmRlZmluZWQsIHRydWUpXG4gIF0sIDUxMiAvKiBORUVEX1BBVENIICovKSksIFtcbiAgICBbX3ZNb2RlbFNlbGVjdCwgJHNldHVwLm1vZGVsVmFsdWVdXG4gIF0pXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFTZWxlY3QudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRTpcXFxcZ2hSZXBvXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVNlbGVjdC52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFTZWxlY3QudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVNlbGVjdC52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtYzliNDY0NjBcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB7IHRvRGlzcGxheVN0cmluZyBhcyBfdG9EaXNwbGF5U3RyaW5nLCBjcmVhdGVFbGVtZW50Vk5vZGUgYXMgX2NyZWF0ZUVsZW1lbnRWTm9kZSwgY3JlYXRlVk5vZGUgYXMgX2NyZWF0ZVZOb2RlLCByZW5kZXJMaXN0IGFzIF9yZW5kZXJMaXN0LCBGcmFnbWVudCBhcyBfRnJhZ21lbnQsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jaywgd2l0aEN0eCBhcyBfd2l0aEN0eCwgY3JlYXRlVGV4dFZOb2RlIGFzIF9jcmVhdGVUZXh0Vk5vZGUsIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCBUcmFuc2l0aW9uIGFzIF9UcmFuc2l0aW9uLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2sgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX2hvaXN0ZWRfMSA9IFtcImxhbmdcIiwgXCJhcmlhLWxhYmVsbGVkYnlcIl1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9faGVhZGVyXCIgfVxuY29uc3QgX2hvaXN0ZWRfMyA9IFtcImlkXCJdXG5jb25zdCBfaG9pc3RlZF80ID0geyBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5cIiB9XG5jb25zdCBfaG9pc3RlZF81ID0gW1widmFsdWVcIiwgXCJsYW5nXCJdXG5jb25zdCBfaG9pc3RlZF82ID0geyBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2Zvb3RlclwiIH1cbmNvbnN0IF9ob2lzdGVkXzcgPSB7IGNsYXNzOiBcInZhLXBhcmEgdmEtcGFyYS0tc3VidGxlXCIgfVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9UcmFuc2l0aW9uLCB7XG4gICAgbmFtZTogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVcIixcbiAgICBhcHBlYXI6IFwiXCJcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICgkcHJvcHMub3BlbilcbiAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgIHJlZjogXCJwcm9tcHRcIixcbiAgICAgICAgICAgIGxhbmc6IGB6aC0keyRzZXR1cC5pMThuVmFyaWFudH1gLFxuICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlXCIsXG4gICAgICAgICAgICByb2xlOiBcImRpYWxvZ1wiLFxuICAgICAgICAgICAgXCJhcmlhLW1vZGFsXCI6IFwiZmFsc2VcIixcbiAgICAgICAgICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6ICRzZXR1cC50aXRsZUlkXG4gICAgICAgICAgfSwgW1xuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF8yLCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJoMlwiLCB7XG4gICAgICAgICAgICAgICAgaWQ6ICRzZXR1cC50aXRsZUlkLFxuICAgICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9faGVhZGVyX190aXRsZSB2YS10aXRsZVwiXG4gICAgICAgICAgICAgIH0sIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJ3ZwLm1haW4nKSksIDkgLyogVEVYVCwgUFJPUFMgKi8sIF9ob2lzdGVkXzMpLFxuICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiVkFCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlcl9fY2xvc2VcIixcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6IFwicXVpZXRcIixcbiAgICAgICAgICAgICAgICBpY29uOiBcImNsb3NlXCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6ICRzZXR1cC51c2VJMThuKCdjbG9zZScpLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiAkc2V0dXAudXNlSTE4bignY2xvc2UnKSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICRzZXR1cC5vcHRPdXRBbmRDbG9zZVxuICAgICAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJ0aXRsZVwiLCBcImFyaWEtbGFiZWxcIiwgXCJkaXNhYmxlZFwiXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImRpdlwiLCBfaG9pc3RlZF80LCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJWQVNlbGVjdFwiXSwge1xuICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6ICRzZXR1cC5zZWxlY3RlZFZhcmlhbnQsXG4gICAgICAgICAgICAgICAgXCJvblVwZGF0ZTptb2RlbFZhbHVlXCI6IF9jYWNoZVswXSB8fCAoX2NhY2hlWzBdID0gJGV2ZW50ID0+ICgoJHNldHVwLnNlbGVjdGVkVmFyaWFudCkgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5fX3NlbGVjdFwiLFxuICAgICAgICAgICAgICAgIGxhbmc6ICRzZXR1cC5zZWxlY3RlZFZhcmlhbnQsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiAkc2V0dXAudGl0bGVJZFxuICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgKF9vcGVuQmxvY2sodHJ1ZSksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBfcmVuZGVyTGlzdCgkc2V0dXAuVkFMSURfVkFSSUFOVFMsICh2YXJpYW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwib3B0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IHZhcmlhbnQsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhcmlhbnQsXG4gICAgICAgICAgICAgICAgICAgICAgbGFuZzogdmFyaWFudFxuICAgICAgICAgICAgICAgICAgICB9LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5tZXNzYWdlcy52YXJpYW50c1t2YXJpYW50XSksIDkgLyogVEVYVCwgUFJPUFMgKi8sIF9ob2lzdGVkXzUpKVxuICAgICAgICAgICAgICAgICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wibW9kZWxWYWx1ZVwiLCBcImxhbmdcIiwgXCJkaXNhYmxlZFwiLCBcImFyaWEtbGFiZWxsZWRieVwiXSksXG4gICAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJWQUJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZV9fbWFpbl9fYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcInByb2dyZXNzaXZlXCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJhcnJvd05leHRcIixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gJGV2ZW50ID0+ICgkc2V0dXAuc2VsZWN0KCRzZXR1cC5zZWxlY3RlZFZhcmlhbnQpKSlcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigndnAuYnV0dG9uLm9rJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wiZGlzYWJsZWRcIl0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJmb290ZXJcIiwgX2hvaXN0ZWRfNiwgW1xuICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCBfaG9pc3RlZF83LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCd2cC5tYWluLmV4dCcpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8xKSlcbiAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgIF0pLFxuICAgIF86IDEgLyogU1RBQkxFICovXG4gIH0pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdE1vYmlsZS52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJFOlxcXFxnaFJlcG9cXFxcWXNBcmNoaXZlcy1HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdE1vYmlsZS52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZVwiO3NjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi01Y2M3ODY1YlwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiLCAiaW1wb3J0IHsgb3BlbkJsb2NrIGFzIF9vcGVuQmxvY2ssIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jaywgY3JlYXRlQ29tbWVudFZOb2RlIGFzIF9jcmVhdGVDb21tZW50Vk5vZGUsIFRlbGVwb3J0IGFzIF9UZWxlcG9ydCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSwgJHByb3BzLCAkc2V0dXAsICRkYXRhLCAkb3B0aW9ucykge1xuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhfRnJhZ21lbnQsIG51bGwsIFtcbiAgICAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX1RlbGVwb3J0LCB7IHRvOiAkc2V0dXAuZGVza3RvcE1vdW50UG9pbnQgfSwgW1xuICAgICAgKCEkc2V0dXAuaXNNb2JpbGUpXG4gICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIlZBVmFyaWFudFByb21wdFwiXSwge1xuICAgICAgICAgICAga2V5OiAwLFxuICAgICAgICAgICAgb3BlbjogJHNldHVwLmlzT3BlbixcbiAgICAgICAgICAgIFwib25VcGRhdGU6b3BlblwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoKCRzZXR1cC5pc09wZW4pID0gJGV2ZW50KSksXG4gICAgICAgICAgICBkaXNhYmxlZDogJHNldHVwLmlzRGlzYWJsZWQsXG4gICAgICAgICAgICBcIm9uVXBkYXRlOmRpc2FibGVkXCI6IF9jYWNoZVsxXSB8fCAoX2NhY2hlWzFdID0gJGV2ZW50ID0+ICgoJHNldHVwLmlzRGlzYWJsZWQpID0gJGV2ZW50KSksXG4gICAgICAgICAgICBcImF1dG8tY2xvc2VcIjogZmFsc2UsXG4gICAgICAgICAgICBvbk9wdG91dDogJHNldHVwLm9uT3B0T3V0LFxuICAgICAgICAgICAgb25TZWxlY3Q6ICRzZXR1cC5zZXRWYXJpYW50XG4gICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wib3BlblwiLCBcImRpc2FibGVkXCJdKSlcbiAgICAgICAgOiBfY3JlYXRlQ29tbWVudFZOb2RlKFwidi1pZlwiLCB0cnVlKVxuICAgIF0sIDggLyogUFJPUFMgKi8sIFtcInRvXCJdKSksXG4gICAgX2NyZWF0ZUNvbW1lbnRWTm9kZShcIiBUZWxlcG9ydCB0byBib2R5IGJlY2F1c2UgdGhleSBhcmUgYWx3YXlzIGZsb2F0ZWQgYXQgYm90dG9tIFwiKSxcbiAgICAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX1RlbGVwb3J0LCB7IHRvOiBcImJvZHlcIiB9LCBbXG4gICAgICAoJHNldHVwLmlzTW9iaWxlKVxuICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJWQVZhcmlhbnRQcm9tcHRNb2JpbGVcIl0sIHtcbiAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgIG9wZW46ICRzZXR1cC5pc09wZW4sXG4gICAgICAgICAgICBcIm9uVXBkYXRlOm9wZW5cIjogX2NhY2hlWzJdIHx8IChfY2FjaGVbMl0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaXNPcGVuKSA9ICRldmVudCkpLFxuICAgICAgICAgICAgZGlzYWJsZWQ6ICRzZXR1cC5pc0Rpc2FibGVkLFxuICAgICAgICAgICAgXCJvblVwZGF0ZTpkaXNhYmxlZFwiOiBfY2FjaGVbM10gfHwgKF9jYWNoZVszXSA9ICRldmVudCA9PiAoKCRzZXR1cC5pc0Rpc2FibGVkKSA9ICRldmVudCkpLFxuICAgICAgICAgICAgb25PcHRvdXQ6ICRzZXR1cC5vbk9wdE91dCxcbiAgICAgICAgICAgIG9uU2VsZWN0OiAkc2V0dXAuc2V0VmFyaWFudFxuICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJkaXNhYmxlZFwiXSkpXG4gICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICBdKSlcbiAgXSwgNjQgLyogU1RBQkxFX0ZSQUdNRU5UICovKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFlzQXJjaGl2ZXMtR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcQXBwLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXEFwcC52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxZc0FyY2hpdmVzLUdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXEFwcC52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxBcHAudnVlXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxlQUF3QkMsUUFBQSxLQUFBOztBQ0N4QixJ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QUFNbEosT0FBTzJIO01BQ2IsaUJBQWlCN0gsT0FBTyxDQUFDLE1BQU1BLE9BQU8sQ0FBQyxJQUFJMkIsWUFBWXpCLE9BQU8ySCxTQUFVbEc7TUFDeEU4RyxVQUFVdkksT0FBTzRIO01BQ2pCLHFCQUFxQjlILE9BQU8sQ0FBQyxNQUFNQSxPQUFPLENBQUMsSUFBSTJCLFlBQVl6QixPQUFPNEgsYUFBY25HO01BQ2hGc0ssVUFBVS9MLE9BQU95TDtNQUNqQk8sVUFBVWhNLE9BQU9xTDtJQUNuQixHQUFHLE1BQU0sR0FBZSxDQUFDLFFBQVEsVUFBVSxDQUFDLE1BQUEsR0FDNUNNLGFBQUEvSyxvQkFBb0IsUUFBUSxJQUFJLENBQUEsQ0FDckMsRUFBQTtJQUNBOztFQUF3QjtBQUM3Qjs7QUNqQ3FTcUwsWUFBT3JNLFNBQVNnTTtBQUFPSyxZQUFPakwsU0FBUztBQUFrQyxJQUFPa0wsZUFBUUQ7O0F6Qkc3WCxJQUFNRSxPQUFPbEksU0FBU21JLGNBQWMsS0FBSztBQUN6Q25JLFNBQVNFLEtBQUtrSSxPQUFPRixJQUFJO0NBQUEsR0FDekJsTixhQUFBcU4sV0FBVUosWUFBRyxFQUFFSyxNQUFNSixJQUFJOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfdnVlMjIiLCAicmVxdWlyZSIsICJpbXBvcnRfdnVlMjAiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiaW1wb3J0X3Z1ZTEyIiwgImltcG9ydF92dWUyIiwgIl9ob2lzdGVkXzEiLCAiX2hvaXN0ZWRfMiIsICJrZXkiLCAiX2hvaXN0ZWRfMyIsICJfaG9pc3RlZF80IiwgInJlbmRlciIsICJfY3R4IiwgIl9jYWNoZSIsICIkcHJvcHMiLCAiJHNldHVwIiwgIiRkYXRhIiwgIiRvcHRpb25zIiwgIm9wZW5CbG9jayIsICJjcmVhdGVFbGVtZW50QmxvY2siLCAiY2xhc3MiLCAieG1sbnMiLCAid2lkdGgiLCAic2l6ZSIsICJoZWlnaHQiLCAidmlld0JveCIsICJpY29uIiwgImNyZWF0ZUNvbW1lbnRWTm9kZSIsICJjcmVhdGVFbGVtZW50Vk5vZGUiLCAiZCIsICJWQUljb25fZGVmYXVsdCIsICJfX2ZpbGUiLCAiVkFJY29uX2RlZmF1bHQyIiwgImltcG9ydF92dWU0IiwgIl9ob2lzdGVkXzEyIiwgInJlbmRlcjIiLCAibm9ybWFsaXplQ2xhc3MiLCAiYWN0aW9uIiwgIndlaWdodCIsICJvbkNsaWNrIiwgIiRldmVudCIsICIkZW1pdCIsICJjcmVhdGVCbG9jayIsICIkc2xvdHMiLCAicmVuZGVyU2xvdCIsICJpbmRpY2F0b3IiLCAiVkFCdXR0b25fZGVmYXVsdCIsICJfX3Njb3BlSWQiLCAiVkFCdXR0b25fZGVmYXVsdDIiLCAiaW1wb3J0X3Z1ZTUiLCAicmVuZGVyMyIsICJUcmFuc2l0aW9uIiwgIm5hbWUiLCAibW9kZSIsICJkZWZhdWx0IiwgIndpdGhDdHgiLCAiXyIsICJzY3JpcHQiLCAiVkFGYWRlVHJhbnNpdGlvbl9kZWZhdWx0IiwgImltcG9ydF92dWU3IiwgIm1lc3NhZ2VzX2RlZmF1bHQiLCAidmFyaWFudHMiLCAiaGFucyIsICJzcGFjZSIsICJjbG9zZSIsICJoYW50IiwgImltcG9ydF92dWU2IiwgIlZBTElEX1ZBUklBTlRTIiwgIndnVXNlclZhcmlhbnQiLCAicmVmIiwgIl9tdyRjb25maWckZ2V0IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiaXNNb2JpbGVEZXZpY2UiLCAibWF0Y2hNZWRpYSIsICJtYXRjaGVzIiwgImdldE1vdW50UG9pbnQiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0IiwgIl9kb2N1bWVudCRxdWVyeVNlbGVjdDIiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJib2R5IiwgInF1ZXJ5U2VsZWN0b3IiLCAiaW5mZXJyZWRWYXJpYW50IiwgImNvbXB1dGVkIiwgImluY2x1ZGVzIiwgInZhbHVlIiwgInNodWZmbGVWYXJpYW50IiwgImxhc3QiLCAidGFyZ2V0QXJyYXkiLCAiZmlsdGVyIiwgImkiLCAicmFuZG9tSW5kZXgiLCAiTWF0aCIsICJmbG9vciIsICJyYW5kb20iLCAibGVuZ3RoIiwgImkxOG5WYXJpYW50IiwgInVzZUkxOG4iLCAiX2N1cnJlbnRNc2dzR3JvdXAka2V5IiwgImN1cnJlbnRNc2dzR3JvdXAiLCAiY291bnRlciIsICJ1c2VVbmlxdWVJZCIsICJjb25jYXQiLCAidXNlVW5pcXVlSWRfZGVmYXVsdCIsICJpbXBvcnRfdnVlOCIsICJJTlRFUlZBTCIsICJ1c2VTaHVmZmxlZFZhcmlhbnQiLCAiaXNGcmVlemVkIiwgInJlc3VsdCIsICJpZCIsICJ3YXRjaCIsICJuZXdWYWx1ZSIsICJfaW5mZXJyZWRWYXJpYW50JHZhbHUiLCAiY2xlYXJJbnRlcnZhbCIsICJ3aW5kb3ciLCAic2V0SW50ZXJ2YWwiLCAiaW1tZWRpYXRlIiwgInVzZVNodWZmbGVkVmFyaWFudF9kZWZhdWx0IiwgImltcG9ydF92dWU5IiwgInVzZU1vZGVsV3JhcHBlciIsICJwcm9wcyIsICJlbWl0IiwgInNldCIsICJ1c2VNb2RlbFdyYXBwZXJfZGVmYXVsdCIsICJpbXBvcnRfdnVlMTAiLCAidXNlRGVmYXVsdCIsICJkZWZhdWx0VmFsdWUiLCAicmVhbFJlZiIsICJzaGFsbG93UmVmIiwgImRlZXAiLCAidXNlRGVmYXVsdF9kZWZhdWx0IiwgIl9fcHJvcHMiLCAiX19lbWl0IiwgInByb21wdCIsICJ0aXRsZUlkIiwgImRlc2NJZCIsICJpc09wZW4iLCAiaXNEaXNhYmxlZCIsICJpc1ZhcmlhbnROYXJyb3dlZCIsICJzaHVmZmxlZFZhcmlhbnQiLCAib3B0T3V0QW5kQ2xvc2UiLCAic2VsZWN0IiwgInZhcmlhbnQiLCAiZWxlbWVudCIsICJhZGRFdmVudExpc3RlbmVyIiwgImV2IiwgImJ1dHRvbnMiLCAiYXV0b0Nsb3NlIiwgImRpc2FibGVkIiwgImltcG9ydF92dWUxMyIsICJfaG9pc3RlZF8xMyIsICJfaG9pc3RlZF8yMiIsICJfaG9pc3RlZF8zMiIsICJfaG9pc3RlZF80MiIsICJfaG9pc3RlZF81IiwgIl9ob2lzdGVkXzYiLCAiX2hvaXN0ZWRfNyIsICJyZW5kZXI0IiwgImFwcGVhciIsICJvcGVuIiwgImxhbmciLCAicm9sZSIsICJjcmVhdGVWTm9kZSIsICJ0aXRsZSIsICJjcmVhdGVUZXh0Vk5vZGUiLCAidG9EaXNwbGF5U3RyaW5nIiwgIm1lc3NhZ2VzIiwgIkZyYWdtZW50IiwgInJlbmRlckxpc3QiLCAiVkFWYXJpYW50UHJvbXB0X2RlZmF1bHQiLCAiVkFWYXJpYW50UHJvbXB0X2RlZmF1bHQyIiwgImltcG9ydF92dWUxNyIsICJtb2RlbFZhbHVlIiwgImltcG9ydF92dWUxNSIsICJyZW5kZXI1IiwgIndpdGhEaXJlY3RpdmVzIiwgInZNb2RlbFNlbGVjdCIsICJWQVNlbGVjdF9kZWZhdWx0IiwgIlZBU2VsZWN0X2RlZmF1bHQyIiwgInNlbGVjdGVkVmFyaWFudCIsICJfaW5mZXJyZWRWYXJpYW50JHZhbHUyIiwgImltcG9ydF92dWUxOCIsICJfaG9pc3RlZF8xNCIsICJfaG9pc3RlZF8yMyIsICJfaG9pc3RlZF8zMyIsICJfaG9pc3RlZF80MyIsICJfaG9pc3RlZF81MiIsICJfaG9pc3RlZF82MiIsICJfaG9pc3RlZF83MiIsICJyZW5kZXI2IiwgIlZBVmFyaWFudFByb21wdE1vYmlsZV9kZWZhdWx0IiwgIlZBVmFyaWFudFByb21wdE1vYmlsZV9kZWZhdWx0MiIsICJpc01vYmlsZSIsICJkZXNrdG9wTW91bnRQb2ludCIsICJzZXRWYXJpYW50IiwgInNldExvY2FsVmFyaWFudCIsICJyZWRpcmVjdCIsICJmb3JjZWQiLCAib25PcHRPdXQiLCAic2V0T3B0T3V0IiwgImltcG9ydF92dWUyMSIsICJyZW5kZXI3IiwgIlRlbGVwb3J0IiwgInRvIiwgIm9uT3B0b3V0IiwgIm9uU2VsZWN0IiwgIkFwcF9kZWZhdWx0IiwgIkFwcF9kZWZhdWx0MiIsICJyb290IiwgImNyZWF0ZUVsZW1lbnQiLCAiYXBwZW5kIiwgImNyZWF0ZUFwcCIsICJtb3VudCJdCn0K
