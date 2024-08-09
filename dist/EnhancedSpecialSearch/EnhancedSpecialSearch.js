/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/EnhancedSpecialSearch}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://youshou.wiki/wiki/H:GPL-3.0}
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

// dist/EnhancedSpecialSearch/EnhancedSpecialSearch.js
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/EnhancedSpecialSearch/EnhancedSpecialSearch.ts
var import_ext_gadget4 = require("ext.gadget.Util");
//! src/EnhancedSpecialSearch/options.json
var siteDomain = "youshou.wiki";
var flexStyle = "display: flex; flex-wrap: wrap; align-items: center";
//! src/EnhancedSpecialSearch/components/SelectElement.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/EnhancedSpecialSearch/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Search engine": (0, import_ext_gadget.localize)({
      en: "Search engine",
      ja: "検索エンジン",
      zh: "搜索引擎"
    }),
    Baidu: (0, import_ext_gadget.localize)({
      en: "Baidu",
      ja: "Baidu",
      zh: "百度"
    }),
    Bing: (0, import_ext_gadget.localize)({
      en: "Bing",
      "zh-hans": "必应",
      "zh-hant": "必應"
    }),
    Google: (0, import_ext_gadget.localize)({
      en: "Google",
      ja: "Google",
      zh: "谷歌"
    }),
    YsArchives: (0, import_ext_gadget.localize)({
      en: "Youshou Archives",
      ja: "有兽档案馆",
      "zh-hans": "有兽档案馆",
      "zh-hant": "有獸檔案館"
    }),
    Sogou: (0, import_ext_gadget.localize)({
      en: "Sogou",
      ja: "Sogou",
      zh: "搜狗"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/EnhancedSpecialSearch/modules/getOptionData.ts
var getOptionData = () => {
  return [{
    site: getMessage("YsArchives"),
    origin: true
  }, {
    site: getMessage("Baidu"),
    url: "https://www.baidu.com/s?wd=site%3A".concat(siteDomain, "+$1")
  }, {
    site: getMessage("Bing"),
    url: "https://www.bing.com/search?q=site%3A".concat(siteDomain, "+$1")
  }, {
    site: getMessage("Google"),
    url: "https://www.google.com/search?q=site%3A".concat(siteDomain, "+$1")
  }, {
    site: getMessage("Sogou"),
    url: "https://www.sogou.com/web?query=site%3A".concat(siteDomain, "+$1")
  }, {
    site: "360",
    url: "https://www.so.com/s?q=site%3A".concat(siteDomain, "+$1")
  }];
};
//! src/EnhancedSpecialSearch/components/SelectElement.tsx
var LabelElement = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("label", {
  className: "oo-ui-labelElement-label",
  htmlFor: "enhancedSpecialSearch",
  innerText: getMessage("Search engine")
});
var SelectElement = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("select", {
  className: "oo-ui-dropdownWidget-handle",
  id: "enhancedSpecialSearch",
  name: "enhancedSpecialSearch",
  style: {
    width: "auto"
  },
  title: getMessage("Search engine")
}, getOptionData().map(({
  site,
  url,
  origin
}) => {
  const optionElement = new Option(site, url, origin);
  if (origin) {
    optionElement.dataset["origin"] = "1";
  }
  return optionElement;
}));
var WrapperElement = () => /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  style: flexStyle
});
//! src/EnhancedSpecialSearch/modules/util/openPage.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
var openPage = (url) => {
  const element = /* @__PURE__ */ import_ext_gadget3.default.createElement("a", {
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  });
  element.click();
};
//! src/EnhancedSpecialSearch/modules/addListener.ts
var addListener = (targetElement, selectElement) => {
  targetElement.addEventListener("submit", (event) => {
    const inputElement = targetElement.querySelector('[type="search"]');
    if (!inputElement) {
      return;
    }
    const optionElement = selectElement.querySelector("option:checked");
    if (optionElement.dataset["origin"]) {
      return;
    }
    event.preventDefault();
    openPage(optionElement.value.replace("$1", encodeURIComponent(inputElement.value)));
  });
};
//! src/EnhancedSpecialSearch/modules/processElement.ts
var processElement = (searchElement, targetElement) => {
  targetElement.setAttribute("style", flexStyle);
  const wrapperElement = WrapperElement();
  const labelElement = LabelElement();
  const selectElement = SelectElement();
  wrapperElement.append(labelElement, selectElement);
  targetElement.append(wrapperElement);
  addListener(searchElement, selectElement);
};
//! src/EnhancedSpecialSearch/EnhancedSpecialSearch.ts
void (0, import_ext_gadget4.getBody)().then(function enhancedSpecialSearch($body) {
  var _$body$find$get;
  const {
    wgCanonicalSpecialPageName
  } = mw.config.get();
  if (wgCanonicalSpecialPageName !== "Search") {
    return;
  }
  const searchElement = (_$body$find$get = $body.find("#search").get(0)) !== null && _$body$find$get !== void 0 ? _$body$find$get : $body.find("#powersearch").get(0);
  const targetElement = $body.find("#mw-search-top-table").get(0);
  if (!searchElement || !targetElement) {
    return;
  }
  processElement(searchElement, targetElement);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9FbmhhbmNlZFNwZWNpYWxTZWFyY2gudHMiLCAic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9vcHRpb25zLmpzb24iLCAic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9jb21wb25lbnRzL1NlbGVjdEVsZW1lbnQudHN4IiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy9nZXRPcHRpb25EYXRhLnRzIiwgInNyYy9FbmhhbmNlZFNwZWNpYWxTZWFyY2gvbW9kdWxlcy91dGlsL29wZW5QYWdlLnRzeCIsICJzcmMvRW5oYW5jZWRTcGVjaWFsU2VhcmNoL21vZHVsZXMvYWRkTGlzdGVuZXIudHMiLCAic3JjL0VuaGFuY2VkU3BlY2lhbFNlYXJjaC9tb2R1bGVzL3Byb2Nlc3NFbGVtZW50LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3Byb2Nlc3NFbGVtZW50fSBmcm9tICcuL21vZHVsZXMvcHJvY2Vzc0VsZW1lbnQnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKGZ1bmN0aW9uIGVuaGFuY2VkU3BlY2lhbFNlYXJjaCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lICE9PSAnU2VhcmNoJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHNlYXJjaEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkID0gJGJvZHkuZmluZCgnI3NlYXJjaCcpLmdldCgwKSA/PyAkYm9keS5maW5kKCcjcG93ZXJzZWFyY2gnKS5nZXQoMCk7XG5cdGNvbnN0IHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkID0gJGJvZHkuZmluZCgnI213LXNlYXJjaC10b3AtdGFibGUnKS5nZXQoMCk7XG5cdGlmICghc2VhcmNoRWxlbWVudCB8fCAhdGFyZ2V0RWxlbWVudCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHByb2Nlc3NFbGVtZW50KHNlYXJjaEVsZW1lbnQsIHRhcmdldEVsZW1lbnQpO1xufSk7XG4iLCAie1xuXHRcInNpdGVEb21haW5cIjogXCJ5b3VzaG91Lndpa2lcIixcblx0XCJmbGV4U3R5bGVcIjogXCJkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IGFsaWduLWl0ZW1zOiBjZW50ZXJcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi4vbW9kdWxlcy9pMThuJztcbmltcG9ydCB7Z2V0T3B0aW9uRGF0YX0gZnJvbSAnLi4vbW9kdWxlcy9nZXRPcHRpb25EYXRhJztcblxuY29uc3QgTGFiZWxFbGVtZW50ID0gKCkgPT4gKFxuXHQ8bGFiZWxcblx0XHRjbGFzc05hbWU9XCJvby11aS1sYWJlbEVsZW1lbnQtbGFiZWxcIlxuXHRcdGh0bWxGb3I9XCJlbmhhbmNlZFNwZWNpYWxTZWFyY2hcIlxuXHRcdGlubmVyVGV4dD17Z2V0TWVzc2FnZSgnU2VhcmNoIGVuZ2luZScpfVxuXHQvPlxuKTtcblxuY29uc3QgU2VsZWN0RWxlbWVudCA9ICgpID0+IChcblx0PHNlbGVjdFxuXHRcdGNsYXNzTmFtZT1cIm9vLXVpLWRyb3Bkb3duV2lkZ2V0LWhhbmRsZVwiXG5cdFx0aWQ9XCJlbmhhbmNlZFNwZWNpYWxTZWFyY2hcIlxuXHRcdG5hbWU9XCJlbmhhbmNlZFNwZWNpYWxTZWFyY2hcIlxuXHRcdHN0eWxlPXt7XG5cdFx0XHR3aWR0aDogJ2F1dG8nLFxuXHRcdH19XG5cdFx0dGl0bGU9e2dldE1lc3NhZ2UoJ1NlYXJjaCBlbmdpbmUnKX1cblx0PlxuXHRcdHtnZXRPcHRpb25EYXRhKCkubWFwPEhUTUxPcHRpb25FbGVtZW50Pigoe3NpdGUsIHVybCwgb3JpZ2lufSkgPT4ge1xuXHRcdFx0Y29uc3Qgb3B0aW9uRWxlbWVudDogSFRNTE9wdGlvbkVsZW1lbnQgPSBuZXcgT3B0aW9uKHNpdGUsIHVybCwgb3JpZ2luKTtcblxuXHRcdFx0aWYgKG9yaWdpbikge1xuXHRcdFx0XHRvcHRpb25FbGVtZW50LmRhdGFzZXRbJ29yaWdpbiddID0gJzEnO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb3B0aW9uRWxlbWVudDtcblx0XHR9KX1cblx0PC9zZWxlY3Q+XG4pO1xuXG5jb25zdCBXcmFwcGVyRWxlbWVudCA9ICgpID0+IDxkaXYgc3R5bGU9e09QVElPTlMuZmxleFN0eWxlfSAvPjtcblxuZXhwb3J0IHtMYWJlbEVsZW1lbnQsIFNlbGVjdEVsZW1lbnQsIFdyYXBwZXJFbGVtZW50fTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J1NlYXJjaCBlbmdpbmUnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1NlYXJjaCBlbmdpbmUnLFxuXHRcdFx0amE6ICfmpJzntKLjgqjjg7Pjgrjjg7MnLFxuXHRcdFx0emg6ICfmkJzntKLlvJXmk44nLFxuXHRcdH0pLFxuXHRcdEJhaWR1OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0JhaWR1Jyxcblx0XHRcdGphOiAnQmFpZHUnLFxuXHRcdFx0emg6ICfnmb7luqYnLFxuXHRcdH0pLFxuXHRcdEJpbmc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQmluZycsXG5cdFx0XHQnemgtaGFucyc6ICflv4XlupQnLFxuXHRcdFx0J3poLWhhbnQnOiAn5b+F5oeJJyxcblx0XHR9KSxcblx0XHRHb29nbGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnR29vZ2xlJyxcblx0XHRcdGphOiAnR29vZ2xlJyxcblx0XHRcdHpoOiAn6LC35q2MJyxcblx0XHR9KSxcblx0XHRZc0FyY2hpdmVzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1lvdXNob3UgQXJjaGl2ZXMnLFxuXHRcdFx0amE6ICfmnInlhb3moaPmoYjppoYnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pyJ5YW95qGj5qGI6aaGJyxcblx0XHRcdCd6aC1oYW50JzogJ+acieeNuOaqlOahiOmkqCcsXG5cdFx0fSksXG5cdFx0U29nb3U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU29nb3UnLFxuXHRcdFx0amE6ICdTb2dvdScsXG5cdFx0XHR6aDogJ+aQnOeLlycsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcblxudHlwZSBPcHRpb25EYXRhID0ge1xuXHRzaXRlOiBzdHJpbmc7XG5cdHVybD86IHN0cmluZztcblx0b3JpZ2luPzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IGdldE9wdGlvbkRhdGEgPSAoKTogT3B0aW9uRGF0YVtdID0+IHtcblx0cmV0dXJuIFtcblx0XHR7XG5cdFx0XHRzaXRlOiBnZXRNZXNzYWdlKCdZc0FyY2hpdmVzJyksXG5cdFx0XHRvcmlnaW46IHRydWUsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaXRlOiBnZXRNZXNzYWdlKCdCYWlkdScpLFxuXHRcdFx0dXJsOiBgaHR0cHM6Ly93d3cuYmFpZHUuY29tL3M/d2Q9c2l0ZSUzQSR7T1BUSU9OUy5zaXRlRG9tYWlufSskMWAsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRzaXRlOiBnZXRNZXNzYWdlKCdCaW5nJyksXG5cdFx0XHR1cmw6IGBodHRwczovL3d3dy5iaW5nLmNvbS9zZWFyY2g/cT1zaXRlJTNBJHtPUFRJT05TLnNpdGVEb21haW59KyQxYCxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNpdGU6IGdldE1lc3NhZ2UoJ0dvb2dsZScpLFxuXHRcdFx0dXJsOiBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9zZWFyY2g/cT1zaXRlJTNBJHtPUFRJT05TLnNpdGVEb21haW59KyQxYCxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHNpdGU6IGdldE1lc3NhZ2UoJ1NvZ291JyksXG5cdFx0XHR1cmw6IGBodHRwczovL3d3dy5zb2dvdS5jb20vd2ViP3F1ZXJ5PXNpdGUlM0Eke09QVElPTlMuc2l0ZURvbWFpbn0rJDFgLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0c2l0ZTogJzM2MCcsXG5cdFx0XHR1cmw6IGBodHRwczovL3d3dy5zby5jb20vcz9xPXNpdGUlM0Eke09QVElPTlMuc2l0ZURvbWFpbn0rJDFgLFxuXHRcdH0sXG5cdF07XG59O1xuXG5leHBvcnQge3R5cGUgT3B0aW9uRGF0YSwgZ2V0T3B0aW9uRGF0YX07XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuXG5jb25zdCBvcGVuUGFnZSA9ICh1cmw6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRjb25zdCBlbGVtZW50ID0gKDxhIGhyZWY9e3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIC8+KSBhcyBIVE1MQW5jaG9yRWxlbWVudDtcblxuXHRlbGVtZW50LmNsaWNrKCk7XG59O1xuXG5leHBvcnQge29wZW5QYWdlfTtcbiIsICJpbXBvcnQge29wZW5QYWdlfSBmcm9tICcuL3V0aWwvb3BlblBhZ2UnO1xuXG5jb25zdCBhZGRMaXN0ZW5lciA9ICh0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCwgc2VsZWN0RWxlbWVudDogSFRNTFNlbGVjdEVsZW1lbnQpOiB2b2lkID0+IHtcblx0dGFyZ2V0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQ6IFN1Ym1pdEV2ZW50KTogdm9pZCA9PiB7XG5cdFx0Y29uc3QgaW5wdXRFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IHRhcmdldEVsZW1lbnQucXVlcnlTZWxlY3RvcignW3R5cGU9XCJzZWFyY2hcIl0nKTtcblx0XHRpZiAoIWlucHV0RWxlbWVudCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9wdGlvbkVsZW1lbnQ6IEhUTUxPcHRpb25FbGVtZW50ID0gc2VsZWN0RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdvcHRpb246Y2hlY2tlZCcpIGFzIEhUTUxPcHRpb25FbGVtZW50O1xuXHRcdGlmIChvcHRpb25FbGVtZW50LmRhdGFzZXRbJ29yaWdpbiddKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRvcGVuUGFnZShvcHRpb25FbGVtZW50LnZhbHVlLnJlcGxhY2UoJyQxJywgZW5jb2RlVVJJQ29tcG9uZW50KGlucHV0RWxlbWVudC52YWx1ZSkpKTtcblx0fSk7XG59O1xuXG5leHBvcnQge2FkZExpc3RlbmVyfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0xhYmVsRWxlbWVudCwgU2VsZWN0RWxlbWVudCwgV3JhcHBlckVsZW1lbnR9IGZyb20gJy4uL2NvbXBvbmVudHMvU2VsZWN0RWxlbWVudCc7XG5pbXBvcnQge2FkZExpc3RlbmVyfSBmcm9tICcuL2FkZExpc3RlbmVyJztcblxuY29uc3QgcHJvY2Vzc0VsZW1lbnQgPSAoc2VhcmNoRWxlbWVudDogSFRNTEVsZW1lbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XG5cdHRhcmdldEVsZW1lbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsIE9QVElPTlMuZmxleFN0eWxlKTtcblxuXHRjb25zdCB3cmFwcGVyRWxlbWVudCA9IFdyYXBwZXJFbGVtZW50KCkgYXMgSFRNTERpdkVsZW1lbnQ7XG5cdGNvbnN0IGxhYmVsRWxlbWVudCA9IExhYmVsRWxlbWVudCgpO1xuXHRjb25zdCBzZWxlY3RFbGVtZW50ID0gU2VsZWN0RWxlbWVudCgpIGFzIEhUTUxTZWxlY3RFbGVtZW50O1xuXG5cdHdyYXBwZXJFbGVtZW50LmFwcGVuZChsYWJlbEVsZW1lbnQsIHNlbGVjdEVsZW1lbnQpO1xuXHR0YXJnZXRFbGVtZW50LmFwcGVuZCh3cmFwcGVyRWxlbWVudCk7XG5cblx0YWRkTGlzdGVuZXIoc2VhcmNoRWxlbWVudCwgc2VsZWN0RWxlbWVudCk7XG59O1xuXG5leHBvcnQge3Byb2Nlc3NFbGVtZW50fTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDQ3JCLElBQUFDLGFBQWM7QUFDZCxJQUFBQyxZQUFhOztBQ0RkLElBQUFDLHFCQUFrQkMsUUFBQUosUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDRGxCLElBQUFLLG9CQUF1QkwsUUFBQSxpQkFBQTtBQUV2QixJQUFNTSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLGtCQUFBLEdBQWlCRCxrQkFBQUUsVUFBUztNQUN6QkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7SUFDTCxDQUFDO0lBQ0RDLFFBQUEsR0FBT04sa0JBQUFFLFVBQVM7TUFDZkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pDLElBQUk7SUFDTCxDQUFDO0lBQ0RFLE9BQUEs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RyxLQUFLLENBQUMsQ0FBQztFQUNuRixDQUFDO0FBQ0Y7O0FDYkEsSUFBTUcsaUJBQWlCQSxDQUFDQyxlQUE0Qlgsa0JBQXFDO0FBQ3hGQSxnQkFBY1ksYUFBYSxTQUFpQjNELFNBQVM7QUFFckQsUUFBTTRELGlCQUFpQnRCLGVBQWU7QUFDdEMsUUFBTXVCLGVBQWV2QyxhQUFhO0FBQ2xDLFFBQU0wQixnQkFBZ0JwQixjQUFjO0FBRXBDZ0MsaUJBQWVFLE9BQU9ELGNBQWNiLGFBQWE7QUFDakRELGdCQUFjZSxPQUFPRixjQUFjO0FBRW5DZCxjQUFZWSxlQUFlVixhQUFhO0FBQ3pDOztBUFpBLE1BQUEsR0FBS25ELG1CQUFBa0UsU0FBUSxFQUFFQyxLQUFLLFNBQVNDLHNCQUFzQkMsT0FBc0M7QUFBQSxNQUFBQztBQUN4RixRQUFNO0lBQUNDO0VBQTBCLElBQUlDLEdBQUdDLE9BQU9DLElBQUk7QUFDbkQsTUFBSUgsK0JBQStCLFVBQVU7QUFDNUM7RUFDRDtBQUVBLFFBQU1WLGlCQUFBUyxrQkFBeUNELE1BQU1NLEtBQUssU0FBUyxFQUFFRCxJQUFJLENBQUMsT0FBQSxRQUFBSixvQkFBQSxTQUFBQSxrQkFBS0QsTUFBTU0sS0FBSyxjQUFjLEVBQUVELElBQUksQ0FBQztBQUMvRyxRQUFNeEIsZ0JBQXlDbUIsTUFBTU0sS0FBSyxzQkFBc0IsRUFBRUQsSUFBSSxDQUFDO0FBQ3ZGLE1BQUksQ0FBQ2IsaUJBQWlCLENBQUNYLGVBQWU7QUFDckM7RUFDRDtBQUVBVSxpQkFBZUMsZUFBZVgsYUFBYTtBQUM1QyxDQUFDOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDQiLCAicmVxdWlyZSIsICJzaXRlRG9tYWluIiwgImZsZXhTdHlsZSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiemgiLCAiQmFpZHUiLCAiQmluZyIsICJHb29nbGUiLCAiWXNBcmNoaXZlcyIsICJTb2dvdSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiZ2V0T3B0aW9uRGF0YSIsICJzaXRlIiwgIm9yaWdpbiIsICJ1cmwiLCAiY29uY2F0IiwgIkxhYmVsRWxlbWVudCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImh0bWxGb3IiLCAiaW5uZXJUZXh0IiwgIlNlbGVjdEVsZW1lbnQiLCAiaWQiLCAibmFtZSIsICJzdHlsZSIsICJ3aWR0aCIsICJ0aXRsZSIsICJtYXAiLCAib3B0aW9uRWxlbWVudCIsICJPcHRpb24iLCAiZGF0YXNldCIsICJXcmFwcGVyRWxlbWVudCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAib3BlblBhZ2UiLCAiZWxlbWVudCIsICJocmVmIiwgInRhcmdldCIsICJyZWwiLCAiY2xpY2siLCAiYWRkTGlzdGVuZXIiLCAidGFyZ2V0RWxlbWVudCIsICJzZWxlY3RFbGVtZW50IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAiaW5wdXRFbGVtZW50IiwgInF1ZXJ5U2VsZWN0b3IiLCAicHJldmVudERlZmF1bHQiLCAidmFsdWUiLCAicmVwbGFjZSIsICJlbmNvZGVVUklDb21wb25lbnQiLCAicHJvY2Vzc0VsZW1lbnQiLCAic2VhcmNoRWxlbWVudCIsICJzZXRBdHRyaWJ1dGUiLCAid3JhcHBlckVsZW1lbnQiLCAibGFiZWxFbGVtZW50IiwgImFwcGVuZCIsICJnZXRCb2R5IiwgInRoZW4iLCAiZW5oYW5jZWRTcGVjaWFsU2VhcmNoIiwgIiRib2R5IiwgIl8kYm9keSRmaW5kJGdldCIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImZpbmQiXQp9Cg==
