/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Common.js}
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-exlinks.js}
 * @base {@link https://meta.wikimedia.org/wiki/MediaWiki:Gadget-ShortLink.js}
 * @base {@link https://www.mediawiki.org/wiki/MediaWiki:Gadget-workinprogress.js}
 * @base {@link https://www.mediawiki.org/wiki/Snippets/Load_JS_and_CSS_by_URL}
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-search-new-tab.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/SiteCommon_JS}
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
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

// dist/SiteCommon_JS/SiteCommon_JS.js
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
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
//! src/SiteCommon_JS/modules/constant.ts
var URL_DIFF = mw.util.getParamValue("diff");
var URL_HIGHLIGHT = mw.util.getParamValue("highlight");
var URL_HILIGHT = mw.util.getParamValue("hilight");
var URL_USE = mw.util.getParamValue("use");
var URL_WITH_CSS = mw.util.getParamValue("withCSS");
var URL_WITH_JS = mw.util.getParamValue("withJS");
var URL_WITH_MODULE = mw.util.getParamValue("withModule");
var WG_ACTION = mw.config.get("wgAction");
var WG_CANONICAL_SPECIAL_PAGE_NAME = mw.config.get("wgCanonicalSpecialPageName");
var WG_NAMESPACE_NUMBER = mw.config.get("wgNamespaceNumber");
var WG_PAGE_NAME = mw.config.get("wgPageName");
var WG_SCRIPT = mw.config.get("wgScript");
var WG_SKIN = mw.config.get("skin");
var WG_USER_NAME = mw.config.get("wgUserName");
//! src/SiteCommon_JS/modules/core.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/SiteCommon_JS/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  const {
    wgULS
  } = window;
  return {
    Note: (0, import_ext_gadget.localize)({
      en: "Note: ",
      "zh-hans": "注释：",
      "zh-hant": "注釋："
    }),
    NoPermError0: wgULS("因技术原因，您没有权限访问相关页面。若有疑问，请与有兽档案馆运营者联系。", "因技術原因，您沒有權限訪問相關頁面。若有疑問，請與有獸檔案館運營者聯系。"),
    NoPermError1: wgULS("您没有权限访问相关页面。若您是资深编者，请与有兽档案馆技术团队联系，以获取权限。", "您沒有權限訪問相關頁面。若您是資深編者，請與有獸檔案館技術團隊聯系，以獲取權限。"),
    NoPermError2: wgULS("您的网络环境存在风险，请登录后继续使用。若您没有有兽档案馆账号，请注册后登录。", "您的網路環境存在風險，請登入後繼續使用。若您沒有有獸檔案館賬號，請注冊後登錄。"),
    NoPermError3: wgULS("相关功能仅向注册用户开放，请登录后继续使用。若您没有有兽档案馆账号，请注册后登录。", "相關功能僅向注冊用戶開放，請登入後繼續使用。若您沒有有獸檔案館賬號，請注冊後登錄。"),
    NoPermError4: wgULS("您没有权限访问相关页面。若有疑问，请与有兽档案馆运营者联系。", "您沒有權限訪問相關頁面。若有疑問，請與有獸檔案館運營者聯系。")
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/SiteCommon_JS/modules/core.tsx
var loadWithURL = () => {
  if (URL_WITH_CSS || URL_WITH_JS || URL_WITH_MODULE) {
    if (URL_WITH_CSS && /^MediaWiki:[^#%&<=>]*\.css$/.test(URL_WITH_CSS)) {
      mw.loader.load(mw.util.getUrl(URL_WITH_CSS, {
        action: "raw",
        ctype: "text/css",
        maxage: "3600",
        smaxage: "3600"
      }), "text/css");
    }
    if (URL_WITH_JS && /^MediaWiki:[^#%&<=>]*\.js$/.test(URL_WITH_JS)) {
      void mw.loader.using("").then((require2) => {
        mw.loader.load(mw.util.getUrl(URL_WITH_JS, {
          action: "raw",
          ctype: "text/javascript",
          maxage: "3600",
          smaxage: "3600"
        }));
      });
    }
    if (URL_WITH_MODULE && /^ext\.[^,|]+$/.test(URL_WITH_MODULE)) {
      void mw.loader.using(URL_WITH_MODULE).then((require2) => {
        mw.loader.load(URL_WITH_MODULE);
      });
    }
  }
  if (URL_USE) {
    const wgUserName = mw.util.escapeRegExp(WG_USER_NAME !== null && WG_USER_NAME !== void 0 ? WG_USER_NAME : "");
    const REGEX_FILE = new RegExp("^(?:MediaWiki:".concat(wgUserName ? "|User:".concat(wgUserName, "/") : "", ")[^&<>=%#]*\\.(js|css)$"));
    const REGEX_EXT = /^ext\.[^,]+$/;
    const path = "".concat(WG_SCRIPT, "?action=raw&ctype=text/");
    var _iterator2 = _createForOfIteratorHelper(URL_USE.split("|")), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var _REGEX_FILE$exec;
        const useFile = _step2.value;
        const name = useFile.toString().trim();
        const what = (_REGEX_FILE$exec = REGEX_FILE.exec(name)) !== null && _REGEX_FILE$exec !== void 0 ? _REGEX_FILE$exec : ["", ""];
        switch (what[1]) {
          case "js":
            void mw.loader.using("").then((require2) => {
              mw.loader.load("".concat(path, "javascript&title=").concat(encodeURIComponent(name)));
            });
            break;
          case "css":
            mw.loader.load("".concat(path, "css&title=").concat(encodeURIComponent(name)));
            break;
          default:
            if (REGEX_EXT.test(name)) {
              void mw.loader.using(name).then((require2) => {
                mw.loader.load(name);
              });
            }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
};
var highLightRev = ($body) => {
  const highlight = URL_HIGHLIGHT !== null && URL_HIGHLIGHT !== void 0 ? URL_HIGHLIGHT : URL_HILIGHT;
  if (!highlight || WG_ACTION !== "history") {
    return;
  }
  var _iterator3 = _createForOfIteratorHelper(highlight.split(",")), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      const version = _step3.value;
      $body.find("input[name=oldid][value=".concat(version, "]")).parent().addClass("not-patrolled");
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
};
var addTargetBlank = ($body) => {
  $body.find('a.external, a[rel="mw:ExtLink"]').filter((_index, element) => {
    const linkHref = $(element).attr("href");
    if (linkHref) {
      const hrefSplit = linkHref.split("/");
      if (hrefSplit.length < 3 || hrefSplit[2] === location.host) {
        return false;
      }
    }
    if (element.href.includes("".concat(location.protocol, "//").concat(location.hostname))) {
      element.target = "_blank";
      if (!element.rel.includes("noopener")) {
        element.rel += " noopener";
      }
      if (!element.rel.includes("noreferrer")) {
        element.rel += " noreferrer";
      }
    }
    return true;
  });
};
var removeTitleFromPermalink = ($body) => {
  const $permaLink = $body.find("#t-permalink");
  if ($permaLink.length) {
    var _$permaLinkFirstChild;
    const $permaLinkFirstChild = $permaLink.find(":first-child");
    const href = (_$permaLinkFirstChild = $permaLinkFirstChild.attr("href")) === null || _$permaLinkFirstChild === void 0 ? void 0 : _$permaLinkFirstChild.replace(/title=[^&]*&/, "");
    if (!href) {
      return;
    }
    $permaLinkFirstChild.attr("href", href);
  }
};
var openSearchInNewTab = ($body) => {
  $body.find("#search,#searchbox,#searchform,.search-types,#search-types").on("keydown keyup mousedown", (event) => {
    const {
      ctrlKey,
      metaKey,
      target
    } = event;
    $(target).attr("target", (ctrlKey !== null && ctrlKey !== void 0 ? ctrlKey : metaKey) ? "_blank" : "");
  });
};
var titleCleanUp = ($body) => {
  if (URL_DIFF || WG_ACTION !== "view" || ![6, 302].includes(WG_NAMESPACE_NUMBER)) {
    return;
  }
  const fullPageName = new mw.Title(WG_PAGE_NAME).getPrefixedText();
  const $firstHeading = $body.find(".firstHeading");
  const documentTitle = document.title;
  const pageTitle = $firstHeading.text();
  const replaceTitle = (title) => title.replace(pageTitle, fullPageName);
  document.title = replaceTitle(documentTitle);
  $firstHeading.text(replaceTitle(pageTitle));
};
var unihanPopup = ($body) => {
  if (WG_NAMESPACE_NUMBER < 0) {
    return;
  }
  $body.find("attr, .inline-unihan").each((_index, element) => {
    const $element = $(element);
    const title = $element.attr("title");
    if (!title) {
      return;
    }
    void mw.loader.using("oojs-ui-core").then(() => {
      const popup = new OO.ui.PopupWidget({
        $content: $(/* @__PURE__ */ import_ext_gadget2.default.createElement("p", null, title)),
        label: getMessage("Note"),
        anchor: true,
        head: true,
        padded: true
      });
      $element.append(popup.$element).on("click", () => {
        popup.toggle();
      });
    });
  });
};
var fixLocationHash = () => {
  if (location.hash) {
    location.href = location.hash;
  }
};
var toggleLink = ($body) => {
  var _$toggler$parent$;
  const $toggler = $body.find(".mw-collapsible-toggle, .gadget-collapsible-toggler");
  if ($toggler.length && (_$toggler$parent$ = $toggler.parent()[0]) !== null && _$toggler$parent$ !== void 0 && _$toggler$parent$.style.color) {
    $toggler.find("a").css("color", "inherit");
  }
};
//! src/SiteCommon_JS/modules/tippy.ts
var import_ext_gadget3 = require("ext.gadget.Tippy");
var getContent = (reference) => {
  var _reference$getAttribu;
  const label = reference.getAttribute("aria-label");
  const title = (_reference$getAttribu = reference.getAttribute("alt")) !== null && _reference$getAttribu !== void 0 ? _reference$getAttribu : reference.getAttribute("title");
  return (label === title ? label : title || label) || reference.textContent;
};
var onCreateCallback = (instance) => {
  const {
    reference
  } = instance;
  reference.setAttribute("aria-label", getContent(reference));
  reference.removeAttribute("title");
};
var onShowCallback = (instance) => {
  onCreateCallback(instance);
  instance.setContent(getContent(instance.reference));
};
var tippyForCitizenHeader = ($body) => {
  if (WG_SKIN !== "citizen") {
    return;
  }
  var _iterator4 = _createForOfIteratorHelper($body.find(".citizen-header label[title],.citizen-header .mw-echo-notifications-badge,.citizen-header__logo a,.page-actions>nav>ul>li a,.page-actions__button")), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      const element = _step4.value;
      const $element = $(element);
      let title = $element.attr("title");
      if (!title) {
        continue;
      }
      title = title.replace(/\s*?\[.+?]$/, "");
      $element.attr({
        "aria-label": title,
        title: ""
      });
      (0, import_ext_gadget3.tippy)($element.get(0), {
        arrow: true,
        content: title,
        placement: "bottom",
        onCreate: onCreateCallback,
        onHidden: onCreateCallback,
        onShow: onShowCallback
      });
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
};
var tippyForExtension = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    yield mw.loader.using("ext.CollapsibleSidebar.js");
    (0, import_ext_gadget3.tippy)("#sidebarButton", {
      arrow: true,
      content: getContent,
      placement: "left",
      onCreate: onCreateCallback,
      onHidden: onCreateCallback,
      onShow: onShowCallback
    });
    if (WG_SKIN === "vector") {
      yield mw.loader.using("ext.CollapsibleSidebar.vector");
      (0, import_ext_gadget3.tippy)("#sidebarCollapse", {
        arrow: true,
        content: getContent,
        placement: "right",
        onCreate: onCreateCallback,
        onHidden: onCreateCallback,
        onShow: onShowCallback
      });
    }
    yield mw.loader.using("ext.DarkMode");
    (0, import_ext_gadget3.tippy)("#darkmode-button", {
      arrow: true,
      content: getContent,
      placement: "left",
      onCreate: onCreateCallback,
      onHidden: onCreateCallback,
      onShow: onShowCallback
    });
  });
  return function tippyForExtension2() {
    return _ref.apply(this, arguments);
  };
}();
//! src/SiteCommon_JS/modules/deprecatedFunctions.ts
var deprecatedFunctions = () => {
  /*!
   * maintenance: Some user scripts may be using the following deprecated functions.
   * These functions are no longer supported and should be updated.
   */
  mw.log.deprecate(window, "importScript", (title) => {
    return mw.loader.addScriptTag(mw.util.getUrl(title, {
      action: "raw",
      ctype: "text/javascript",
      maxage: "3600",
      smaxage: "3600"
    }));
  }, "Use mw.loader.addScriptTag() instead");
  mw.log.deprecate(window, "importStylesheet", (title) => {
    return mw.loader.addLinkTag(mw.util.getUrl(title, {
      action: "raw",
      ctype: "text/css",
      maxage: "3600",
      smaxage: "3600"
    }), "text/css");
  }, "Use mw.loader.addLinkTag() instead");
  mw.log.deprecate(window, "importScriptURI", (modules) => {
    return mw.loader.addScriptTag(mw.util.wikiUrlencode(modules));
  }, "Use mw.loader.addScriptTag() or mw.loader.getScript() instead");
  mw.log.deprecate(window, "importStylesheetURI", (modules) => {
    return mw.loader.addLinkTag(mw.util.wikiUrlencode(modules), "text/css");
  }, "Use mw.loader.addLinkTag() instead");
  mw.log.deprecate(
    window,
    // @ts-expect-error TS2345
    "importScriptCallback",
    (title, ready) => {
      void mw.loader.getScript(mw.util.getUrl(title, {
        action: "raw",
        ctype: "text/javascript",
        maxage: "3600",
        smaxage: "3600"
      })).then(ready);
    },
    "Use mw.loader.getScript() instead"
  );
  mw.log.deprecate(
    window,
    // @ts-expect-error TS2345
    "importScriptURICallback",
    (url, ready) => {
      void mw.loader.getScript(url).then(ready);
    },
    "Use mw.loader.getScript() instead"
  );
};
//! src/SiteCommon_JS/SiteCommon_JS.ts
(function siteCommon() {
  if (mw.config.get("wgSiteCommonInstalled")) {
    return;
  }
  mw.config.set("wgSiteCommonInstalled", true);
  loadWithURL();
  fixLocationHash();
  $(() => {
    const $body = $("body");
    highLightRev($body);
    addTargetBlank($body);
    removeTitleFromPermalink($body);
    openSearchInNewTab($body);
    titleCleanUp($body);
    unihanPopup($body);
    toggleLink($body);
    tippyForCitizenHeader($body);
  });
  deprecatedFunctions();
  void tippyForExtension();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1NpdGVDb21tb25fSlMvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL2NvcmUudHN4IiwgInNyYy9TaXRlQ29tbW9uX0pTL21vZHVsZXMvaTE4bi50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9tb2R1bGVzL3RpcHB5LnRzIiwgInNyYy9TaXRlQ29tbW9uX0pTL21vZHVsZXMvZGVwcmVjYXRlZEZ1bmN0aW9ucy50cyIsICJzcmMvU2l0ZUNvbW1vbl9KUy9TaXRlQ29tbW9uX0pTLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBVUkxfRElGRjogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnZGlmZicpO1xuY29uc3QgVVJMX0hJR0hMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnaGlnaGxpZ2h0Jyk7XG5jb25zdCBVUkxfSElMSUdIVDogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnaGlsaWdodCcpO1xuLy9jb25zdCBVUkxfTk9fUEVSTTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnbm9wZXJtJyk7XG5jb25zdCBVUkxfVVNFOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd1c2UnKTtcbmNvbnN0IFVSTF9XSVRIX0NTUzogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgnd2l0aENTUycpO1xuY29uc3QgVVJMX1dJVEhfSlM6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3dpdGhKUycpO1xuY29uc3QgVVJMX1dJVEhfTU9EVUxFOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd3aXRoTW9kdWxlJyk7XG5cbmNvbnN0IFdHX0FDVElPTjogTWVkaWFXaWtpQ29uZmlnTWFwV2dBY3Rpb24gPSBtdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuY29uc3QgV0dfQ0FOT05JQ0FMX1NQRUNJQUxfUEFHRV9OQU1FOiBzdHJpbmcgfCBmYWxzZSA9IG13LmNvbmZpZy5nZXQoJ3dnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lJyk7XG5jb25zdCBXR19OQU1FU1BBQ0VfTlVNQkVSOiBudW1iZXIgPSBtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpO1xuY29uc3QgV0dfUEFHRV9OQU1FOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJyk7XG5jb25zdCBXR19TQ1JJUFQ6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0Jyk7XG5jb25zdCBXR19TS0lOOiBzdHJpbmcgPSBtdy5jb25maWcuZ2V0KCdza2luJyk7XG5jb25zdCBXR19VU0VSX05BTUU6IHN0cmluZyB8IG51bGwgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJyk7XG5cbmV4cG9ydCB7XG5cdFVSTF9ESUZGLFxuXHRVUkxfSElHSExJR0hULFxuXHRVUkxfSElMSUdIVCxcblx0Ly9VUkxfTk9fUEVSTSxcblx0VVJMX1VTRSxcblx0VVJMX1dJVEhfQ1NTLFxuXHRVUkxfV0lUSF9KUyxcblx0VVJMX1dJVEhfTU9EVUxFLFxuXHRXR19BQ1RJT04sXG5cdFdHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSxcblx0V0dfTkFNRVNQQUNFX05VTUJFUixcblx0V0dfUEFHRV9OQU1FLFxuXHRXR19TQ1JJUFQsXG5cdFdHX1NLSU4sXG5cdFdHX1VTRVJfTkFNRSxcbn07XG4iLCAiaW1wb3J0IHtcblx0VVJMX0RJRkYsXG5cdFVSTF9ISUdITElHSFQsXG5cdFVSTF9ISUxJR0hULFxuXHQvL1VSTF9OT19QRVJNLFxuXHRVUkxfVVNFLFxuXHRVUkxfV0lUSF9DU1MsXG5cdFVSTF9XSVRIX0pTLFxuXHRVUkxfV0lUSF9NT0RVTEUsXG5cdFdHX0FDVElPTixcblx0Ly9XR19DQU5PTklDQUxfU1BFQ0lBTF9QQUdFX05BTUUsXG5cdFdHX05BTUVTUEFDRV9OVU1CRVIsXG5cdFdHX1BBR0VfTkFNRSxcblx0V0dfU0NSSVBULFxuXHRXR19VU0VSX05BTUUsXG59IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBsb2FkV2l0aFVSTCA9ICgpOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqICZ3aXRoQ1NTPSBhbmQgJndpdGhKUz0gVVJMIHBhcmFtZXRlcnNcblx0ICogQWxsb3cgdG8gdHJ5IGN1c3RvbSBzY3JpcHRzIGZyb20gTWVkaWFXaWtpIHNwYWNlXG5cdCAqIHdpdGhvdXQgZWRpdGluZyBwZXJzb25hbCAuY3NzIG9yIC5qcyBmaWxlc1xuXHQgKi9cblx0aWYgKFVSTF9XSVRIX0NTUyB8fCBVUkxfV0lUSF9KUyB8fCBVUkxfV0lUSF9NT0RVTEUpIHtcblx0XHRpZiAoVVJMX1dJVEhfQ1NTICYmIC9eTWVkaWFXaWtpOlteIyUmPD0+XSpcXC5jc3MkLy50ZXN0KFVSTF9XSVRIX0NTUykpIHtcblx0XHRcdG13LmxvYWRlci5sb2FkKFxuXHRcdFx0XHRtdy51dGlsLmdldFVybChVUkxfV0lUSF9DU1MsIHtcblx0XHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHRcdGN0eXBlOiAndGV4dC9jc3MnLFxuXHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdHNtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0fSksXG5cdFx0XHRcdCd0ZXh0L2Nzcydcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGlmIChVUkxfV0lUSF9KUyAmJiAvXk1lZGlhV2lraTpbXiMlJjw9Pl0qXFwuanMkLy50ZXN0KFVSTF9XSVRIX0pTKSkge1xuXHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzYxMzNcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcblx0XHRcdHZvaWQgbXcubG9hZGVyLnVzaW5nKCcnKS50aGVuKChyZXF1aXJlKTogdm9pZCA9PiB7XG5cdFx0XHRcdG13LmxvYWRlci5sb2FkKFxuXHRcdFx0XHRcdG13LnV0aWwuZ2V0VXJsKFVSTF9XSVRIX0pTLCB7XG5cdFx0XHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHRcdFx0Y3R5cGU6ICd0ZXh0L2phdmFzY3JpcHQnLFxuXHRcdFx0XHRcdFx0bWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAoVVJMX1dJVEhfTU9EVUxFICYmIC9eZXh0XFwuW14sfF0rJC8udGVzdChVUkxfV0lUSF9NT0RVTEUpKSB7XG5cdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNjEzM1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuXHRcdFx0dm9pZCBtdy5sb2FkZXIudXNpbmcoVVJMX1dJVEhfTU9EVUxFKS50aGVuKChyZXF1aXJlKTogdm9pZCA9PiB7XG5cdFx0XHRcdG13LmxvYWRlci5sb2FkKFVSTF9XSVRIX01PRFVMRSBhcyBzdHJpbmcpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiBMb2FkIENTUyBhbmQgSlMgZmlsZXMgdGVtcG9yYXJpbHkgdGhyb3VnaCBVUkwuXG5cdCAqICZ1c2U9RmlsZTEuY3NzfEZpbGUyLmNzc3xGaWxlMy5qc1xuXHQgKi9cblx0aWYgKFVSTF9VU0UpIHtcblx0XHRjb25zdCB3Z1VzZXJOYW1lOiBzdHJpbmcgPSBtdy51dGlsLmVzY2FwZVJlZ0V4cChXR19VU0VSX05BTUUgPz8gJycpO1xuXHRcdGNvbnN0IFJFR0VYX0ZJTEU6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRgXig/Ok1lZGlhV2lraToke3dnVXNlck5hbWUgPyBgfFVzZXI6JHt3Z1VzZXJOYW1lfS9gIDogJyd9KVteJjw+PSUjXSpcXFxcLihqc3xjc3MpJGBcblx0XHQpO1xuXHRcdGNvbnN0IFJFR0VYX0VYVDogUmVnRXhwID0gL15leHRcXC5bXixdKyQvO1xuXHRcdGNvbnN0IHBhdGg6IHN0cmluZyA9IGAke1dHX1NDUklQVH0/YWN0aW9uPXJhdyZjdHlwZT10ZXh0L2A7XG5cdFx0Zm9yIChjb25zdCB1c2VGaWxlIG9mIFVSTF9VU0Uuc3BsaXQoJ3wnKSkge1xuXHRcdFx0Y29uc3QgbmFtZTogc3RyaW5nID0gdXNlRmlsZS50b1N0cmluZygpLnRyaW0oKTtcblx0XHRcdGNvbnN0IHdoYXQ6IHN0cmluZ1tdID0gUkVHRVhfRklMRS5leGVjKG5hbWUpID8/IFsnJywgJyddO1xuXHRcdFx0c3dpdGNoICh3aGF0WzFdKSB7XG5cdFx0XHRcdGNhc2UgJ2pzJzpcblx0XHRcdFx0XHQvLyBAdHMtZXhwZWN0LWVycm9yIFRTNjEzM1xuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcblx0XHRcdFx0XHR2b2lkIG13LmxvYWRlci51c2luZygnJykudGhlbigocmVxdWlyZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0bXcubG9hZGVyLmxvYWQoYCR7cGF0aH1qYXZhc2NyaXB0JnRpdGxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfWApO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjc3MnOlxuXHRcdFx0XHRcdG13LmxvYWRlci5sb2FkKGAke3BhdGh9Y3NzJnRpdGxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpfWApO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGlmIChSRUdFWF9FWFQudGVzdChuYW1lKSkge1xuXHRcdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzYxMzNcblx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcblx0XHRcdFx0XHRcdHZvaWQgbXcubG9hZGVyLnVzaW5nKG5hbWUpLnRoZW4oKHJlcXVpcmUpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0bXcubG9hZGVyLmxvYWQobmFtZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vKlxuY29uc3Qgbm9QZXJtV2FybmluZyA9ICgpOiB2b2lkID0+IHtcblx0Ly8gTG9hZCB3YXJuaW5nKHMpIHdoZW4gdXNlciBoYXMgbm8gYWNjZXNzIHRvIHBhZ2Vcblx0aWYgKCFVUkxfTk9fUEVSTSkge1xuXHRcdHJldHVybjtcblx0fVxuXHRzd2l0Y2ggKFVSTF9OT19QRVJNKSB7XG5cdFx0Y2FzZSAnMCc6XG5cdFx0XHR2b2lkIG13Lm5vdGlmeShcblx0XHRcdFx0d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdCflm6DmioDmnK/ljp/lm6DvvIzmgqjmsqHmnInmnYPpmZDorr/pl67nm7jlhbPpobXpnaLjgILoi6XmnInnlpHpl67vvIzor7fkuI7msYLpl7vnmb7np5Hov5DokKXogIXogZTns7vjgIInLFxuXHRcdFx0XHRcdCflm6DmioDooZPljp/lm6DvvIzmgqjmspLmnInmrIrpmZDoqKrllY/nm7jpl5zpoIHpnaLjgILoi6XmnInnlpHllY/vvIzoq4voiIfmsYLogZ7nmb7np5HpgYvnh5/ogIXoga/ns7vjgIInXG5cdFx0XHRcdCksXG5cdFx0XHRcdHt0YWc6ICdub1Blcm0nLCB0eXBlOiAnZXJyb3InfVxuXHRcdFx0KTtcblx0XHRcdGJyZWFrO1xuXHRcdGNhc2UgJzEnOlxuXHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHQn5oKo5rKh5pyJ5p2D6ZmQ6K6/6Zeu55u45YWz6aG16Z2i44CC6Iul5oKo5piv6LWE5rex57yW6ICF77yM6K+35LiO5rGC6Ze755m+56eR5oqA5pyv5Zui6Zif6IGU57O777yM5Lul6I635Y+W5p2D6ZmQ44CCJyxcblx0XHRcdFx0XHQn5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5oKo5piv6LOH5rex57eo6ICF77yM6KuL6IiH5rGC6IGe55m+56eR5oqA6KGT5ZyY6ZqK6IGv57O777yM5Lul542y5Y+W5qyK6ZmQ44CCJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR7dGFnOiAnbm9QZXJtJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICcyJzpcblx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0J+aCqOeahOe9kee7nOeOr+Wig+WtmOWcqOmjjumZqe+8jOivt+eZu+W9leWQjue7p+e7reS9v+eUqOOAguiLpeaCqOayoeacieaxgumXu+eZvuenkei0puWPt++8jOivt+azqOWGjOWQjueZu+W9leOAgicsXG5cdFx0XHRcdFx0J+aCqOeahOe2sui3r+eSsOWig+WtmOWcqOmiqOmaqu+8jOiri+eZu+WFpeW+jOe5vOe6jOS9v+eUqOOAguiLpeaCqOaykuacieaxguiBnueZvuenkeizrOiZn++8jOiri+azqOWGiuW+jOeZu+mMhOOAgidcblx0XHRcdFx0KSxcblx0XHRcdFx0e3RhZzogJ25vUGVybScsIHR5cGU6ICd3YXJuJ31cblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRjYXNlICczJzpcblx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0J+ebuOWFs+WKn+iDveS7heWQkeazqOWGjOeUqOaIt+W8gOaUvu+8jOivt+eZu+W9leWQjue7p+e7reS9v+eUqOOAguiLpeaCqOayoeacieaxgumXu+eZvuenkei0puWPt++8jOivt+azqOWGjOWQjueZu+W9leOAgicsXG5cdFx0XHRcdFx0J+ebuOmXnOWKn+iDveWDheWQkeazqOWGiueUqOaItumWi+aUvu+8jOiri+eZu+WFpeW+jOe5vOe6jOS9v+eUqOOAguiLpeaCqOaykuacieaxguiBnueZvuenkeizrOiZn++8jOiri+azqOWGiuW+jOeZu+mMhOOAgidcblx0XHRcdFx0KSxcblx0XHRcdFx0e3RhZzogJ25vUGVybScsIHR5cGU6ICd3YXJuJ31cblx0XHRcdCk7XG5cdFx0XHRicmVhaztcblx0XHRkZWZhdWx0OlxuXHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHQn5oKo5rKh5pyJ5p2D6ZmQ6K6/6Zeu55u45YWz6aG16Z2i44CC6Iul5pyJ55aR6Zeu77yM6K+35LiO5rGC6Ze755m+56eR6L+Q6JCl6ICF6IGU57O744CCJyxcblx0XHRcdFx0XHQn5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5pyJ55aR5ZWP77yM6KuL6IiH5rGC6IGe55m+56eR6YGL54ef6ICF6IGv57O744CCJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR7dGFnOiAnbm9QZXJtJywgdHlwZTogJ2Vycm9yJ31cblx0XHRcdCk7XG5cdH1cblx0Y29uc3QgbmV3VXJsOiBzdHJpbmcgPSBsb2NhdGlvbi5ocmVmLnJlcGxhY2UoL1s/Jl1ub3Blcm09WzAtOV0rLywgJycpO1xuXHRoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIG5ld1VybCk7XG59O1xuKi9cblxuY29uc3QgaGlnaExpZ2h0UmV2ID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogQWRkIGhpZ2hsaWdodCB0byByZXZpc2lvbnMgd2hlbiB1c2luZyBgJmhpbGlnaHQ9cmV2aWRgIG9yIGAmaGlnaGxpZ2h0PXJldmlkYFxuXHQgKi9cblx0Y29uc3QgaGlnaGxpZ2h0OiBzdHJpbmcgfCBudWxsID0gVVJMX0hJR0hMSUdIVCA/PyBVUkxfSElMSUdIVDtcblx0aWYgKCFoaWdobGlnaHQgfHwgV0dfQUNUSU9OICE9PSAnaGlzdG9yeScpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Zm9yIChjb25zdCB2ZXJzaW9uIG9mIGhpZ2hsaWdodC5zcGxpdCgnLCcpKSB7XG5cdFx0JGJvZHkuZmluZChgaW5wdXRbbmFtZT1vbGRpZF1bdmFsdWU9JHt2ZXJzaW9ufV1gKS5wYXJlbnQoKS5hZGRDbGFzcygnbm90LXBhdHJvbGxlZCcpO1xuXHR9XG59O1xuXG5jb25zdCBhZGRUYXJnZXRCbGFuayA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIEFkZCB0YXJnZXQ9XCJibGFua1wiIHRvIGV4dGVybmFsIGxpbmtzXG5cdCAqL1xuXHQkYm9keS5maW5kPEhUTUxBbmNob3JFbGVtZW50PignYS5leHRlcm5hbCwgYVtyZWw9XCJtdzpFeHRMaW5rXCJdJykuZmlsdGVyKChfaW5kZXgsIGVsZW1lbnQpOiBib29sZWFuID0+IHtcblx0XHRjb25zdCBsaW5rSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkID0gJChlbGVtZW50KS5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKGxpbmtIcmVmKSB7XG5cdFx0XHRjb25zdCBocmVmU3BsaXQ6IHN0cmluZ1tdID0gbGlua0hyZWYuc3BsaXQoJy8nKTtcblx0XHRcdGlmIChocmVmU3BsaXQubGVuZ3RoIDwgMyB8fCBocmVmU3BsaXRbMl0gPT09IGxvY2F0aW9uLmhvc3QpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoZWxlbWVudC5ocmVmLmluY2x1ZGVzKGAke2xvY2F0aW9uLnByb3RvY29sfS8vJHtsb2NhdGlvbi5ob3N0bmFtZX1gKSkge1xuXHRcdFx0ZWxlbWVudC50YXJnZXQgPSAnX2JsYW5rJztcblx0XHRcdGlmICghZWxlbWVudC5yZWwuaW5jbHVkZXMoJ25vb3BlbmVyJykpIHtcblx0XHRcdFx0ZWxlbWVudC5yZWwgKz0gJyBub29wZW5lcic7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWVsZW1lbnQucmVsLmluY2x1ZGVzKCdub3JlZmVycmVyJykpIHtcblx0XHRcdFx0ZWxlbWVudC5yZWwgKz0gJyBub3JlZmVycmVyJztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pO1xufTtcblxuY29uc3QgcmVtb3ZlVGl0bGVGcm9tUGVybWFsaW5rID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogUmVtb3ZlIHRpdGxlPSogZnJvbSBwZXJtYWxpbmtcblx0ICovXG5cdGNvbnN0ICRwZXJtYUxpbms6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyN0LXBlcm1hbGluaycpO1xuXHRpZiAoJHBlcm1hTGluay5sZW5ndGgpIHtcblx0XHRjb25zdCAkcGVybWFMaW5rRmlyc3RDaGlsZDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICRwZXJtYUxpbmsuZmluZDxIVE1MQW5jaG9yRWxlbWVudD4oJzpmaXJzdC1jaGlsZCcpO1xuXHRcdGNvbnN0IGhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRwZXJtYUxpbmtGaXJzdENoaWxkLmF0dHIoJ2hyZWYnKT8ucmVwbGFjZSgvdGl0bGU9W14mXSomLywgJycpO1xuXHRcdGlmICghaHJlZikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQkcGVybWFMaW5rRmlyc3RDaGlsZC5hdHRyKCdocmVmJywgaHJlZik7XG5cdH1cbn07XG5cbmNvbnN0IG9wZW5TZWFyY2hJbk5ld1RhYiA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0LyoqXG5cdCAqIE9wZW4gc2VhcmNoIHJlc3VsdHMgaW4gYSBuZXcgdGFiIG9yIHdpbmRvd1xuXHQgKiB3aGVuIGhvbGRpbmcgZG93biB0aGUgQ3RybCBrZXkgKGJ5IFRpbWVzaGlmdGVyKVxuXHQgKi9cblx0JGJvZHlcblx0XHQuZmluZCgnI3NlYXJjaCwjc2VhcmNoYm94LCNzZWFyY2hmb3JtLC5zZWFyY2gtdHlwZXMsI3NlYXJjaC10eXBlcycpXG5cdFx0Lm9uKCdrZXlkb3duIGtleXVwIG1vdXNlZG93bicsIChldmVudDogSlF1ZXJ5LlRyaWdnZXJlZEV2ZW50PEhUTUxFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRcdFx0Y29uc3Qge2N0cmxLZXksIG1ldGFLZXksIHRhcmdldH0gPSBldmVudDtcblx0XHRcdCQodGFyZ2V0KS5hdHRyKCd0YXJnZXQnLCAoY3RybEtleSA/PyBtZXRhS2V5KSA/ICdfYmxhbmsnIDogJycpO1xuXHRcdH0pO1xufTtcblxuY29uc3QgdGl0bGVDbGVhblVwID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogQ2xlYW51cCB0aXRsZSBmb3IgYWxsIHBhZ2VzXG5cdCAqL1xuXHRpZiAoVVJMX0RJRkYgfHwgV0dfQUNUSU9OICE9PSAndmlldycgfHwgIVs2LCAzMDJdLmluY2x1ZGVzKFdHX05BTUVTUEFDRV9OVU1CRVIpKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IGZ1bGxQYWdlTmFtZTogc3RyaW5nID0gbmV3IG13LlRpdGxlKFdHX1BBR0VfTkFNRSkuZ2V0UHJlZml4ZWRUZXh0KCk7XG5cdGNvbnN0ICRmaXJzdEhlYWRpbmc6IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5maXJzdEhlYWRpbmcnKTtcblx0Y29uc3QgZG9jdW1lbnRUaXRsZTogc3RyaW5nID0gZG9jdW1lbnQudGl0bGU7XG5cdGNvbnN0IHBhZ2VUaXRsZTogc3RyaW5nID0gJGZpcnN0SGVhZGluZy50ZXh0KCk7XG5cdGNvbnN0IHJlcGxhY2VUaXRsZSA9ICh0aXRsZTogc3RyaW5nKTogc3RyaW5nID0+IHRpdGxlLnJlcGxhY2UocGFnZVRpdGxlLCBmdWxsUGFnZU5hbWUpO1xuXHRkb2N1bWVudC50aXRsZSA9IHJlcGxhY2VUaXRsZShkb2N1bWVudFRpdGxlKTtcblx0JGZpcnN0SGVhZGluZy50ZXh0KHJlcGxhY2VUaXRsZShwYWdlVGl0bGUpKTtcbn07XG5cbmNvbnN0IHVuaWhhblBvcHVwID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKipcblx0ICogRGlzcGxheSB0aXRsZT0oLiopIG9mIDxzcGFuIGNsYXNzPVwiaW5saW5lLXVuaWhhblwiPiBhZnRlciB0aGVtLlxuXHQgKiAoYmV0YSB0ZXN0KVxuXHQgKi9cblx0Ly8gRG8gbm90IGRpc3BsYXkgb24gU3BlY2lhbCBQYWdlc1xuXHRpZiAoV0dfTkFNRVNQQUNFX05VTUJFUiA8IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0JGJvZHkuZmluZCgnYXR0ciwgLmlubGluZS11bmloYW4nKS5lYWNoKChfaW5kZXg6IG51bWJlciwgZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRjb25zdCB0aXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cigndGl0bGUnKTtcblx0XHRpZiAoIXRpdGxlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZvaWQgbXcubG9hZGVyLnVzaW5nKCdvb2pzLXVpLWNvcmUnKS50aGVuKCgpOiB2b2lkID0+IHtcblx0XHRcdGNvbnN0IHBvcHVwOiBPTy51aS5Qb3B1cFdpZGdldCA9IG5ldyBPTy51aS5Qb3B1cFdpZGdldCh7XG5cdFx0XHRcdCRjb250ZW50OiAkKDxwPnt0aXRsZX08L3A+KSBhcyBKUXVlcnksXG5cdFx0XHRcdGxhYmVsOiBnZXRNZXNzYWdlKCdOb3RlJyksXG5cdFx0XHRcdGFuY2hvcjogdHJ1ZSxcblx0XHRcdFx0aGVhZDogdHJ1ZSxcblx0XHRcdFx0cGFkZGVkOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0XHQkZWxlbWVudC5hcHBlbmQocG9wdXAuJGVsZW1lbnQpLm9uKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHRcdFx0cG9wdXAudG9nZ2xlKCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSk7XG59O1xuXG5jb25zdCBmaXhMb2NhdGlvbkhhc2ggPSAoKTogdm9pZCA9PiB7XG5cdC8qIOS/ruato+aKmOWPoOWQjuWumuS9jeWPmOWMliAqL1xuXHRpZiAobG9jYXRpb24uaGFzaCkge1xuXHRcdGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5oYXNoO1xuXHR9XG59O1xuXG5jb25zdCB0b2dnbGVMaW5rID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHQvKiDosIPmlbTmipjlj6DmjInpkq7nmoTpopzoibIgKi9cblx0Y29uc3QgJHRvZ2dsZXI6IEpRdWVyeSA9ICRib2R5LmZpbmQoJy5tdy1jb2xsYXBzaWJsZS10b2dnbGUsIC5nYWRnZXQtY29sbGFwc2libGUtdG9nZ2xlcicpO1xuXHRpZiAoJHRvZ2dsZXIubGVuZ3RoICYmICR0b2dnbGVyLnBhcmVudCgpWzBdPy5zdHlsZS5jb2xvcikge1xuXHRcdCR0b2dnbGVyLmZpbmQoJ2EnKS5jc3MoJ2NvbG9yJywgJ2luaGVyaXQnKTtcblx0fVxufTtcblxuZXhwb3J0IHtcblx0bG9hZFdpdGhVUkwsXG5cdGhpZ2hMaWdodFJldixcblx0YWRkVGFyZ2V0QmxhbmssXG5cdHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayxcblx0b3BlblNlYXJjaEluTmV3VGFiLFxuXHR0aXRsZUNsZWFuVXAsXG5cdHVuaWhhblBvcHVwLFxuXHRmaXhMb2NhdGlvbkhhc2gsXG5cdHRvZ2dsZUxpbmssXG59O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0Y29uc3Qge3dnVUxTfSA9IHdpbmRvdztcblx0cmV0dXJuIHtcblx0XHROb3RlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05vdGU6ICcsXG5cdFx0XHQnemgtaGFucyc6ICfms6jph4rvvJonLFxuXHRcdFx0J3poLWhhbnQnOiAn5rOo6YeL77yaJyxcblx0XHR9KSxcblx0XHROb1Blcm1FcnJvcjA6IHdnVUxTKFxuXHRcdFx0J+WboOaKgOacr+WOn+WboO+8jOaCqOayoeacieadg+mZkOiuv+mXruebuOWFs+mhtemdouOAguiLpeacieeWkemXru+8jOivt+S4juacieWFveaho+ahiOmmhui/kOiQpeiAheiBlOezu+OAgicsXG5cdFx0XHQn5Zug5oqA6KGT5Y6f5Zug77yM5oKo5rKS5pyJ5qyK6ZmQ6Kiq5ZWP55u46Zec6aCB6Z2i44CC6Iul5pyJ55aR5ZWP77yM6KuL6IiH5pyJ54245qqU5qGI6aSo6YGL54ef6ICF6IGv57O744CCJ1xuXHRcdCksXG5cdFx0Tm9QZXJtRXJyb3IxOiB3Z1VMUyhcblx0XHRcdCfmgqjmsqHmnInmnYPpmZDorr/pl67nm7jlhbPpobXpnaLjgILoi6XmgqjmmK/otYTmt7HnvJbogIXvvIzor7fkuI7mnInlhb3moaPmoYjppobmioDmnK/lm6LpmJ/ogZTns7vvvIzku6Xojrflj5bmnYPpmZDjgIInLFxuXHRcdFx0J+aCqOaykuacieasiumZkOioquWVj+ebuOmXnOmggemdouOAguiLpeaCqOaYr+izh+a3see3qOiAhe+8jOiri+iIh+acieeNuOaqlOahiOmkqOaKgOihk+WcmOmaiuiBr+ezu++8jOS7peeNsuWPluasiumZkOOAgidcblx0XHQpLFxuXHRcdE5vUGVybUVycm9yMjogd2dVTFMoXG5cdFx0XHQn5oKo55qE572R57uc546v5aKD5a2Y5Zyo6aOO6Zmp77yM6K+355m75b2V5ZCO57un57ut5L2/55So44CC6Iul5oKo5rKh5pyJ5pyJ5YW95qGj5qGI6aaG6LSm5Y+377yM6K+35rOo5YaM5ZCO55m75b2V44CCJyxcblx0XHRcdCfmgqjnmoTntrLot6/nkrDlooPlrZjlnKjpoqjpmqrvvIzoq4vnmbvlhaXlvoznubznuozkvb/nlKjjgILoi6XmgqjmspLmnInmnInnjbjmqpTmoYjppKjos6zomZ/vvIzoq4vms6jlhorlvoznmbvpjITjgIInXG5cdFx0KSxcblx0XHROb1Blcm1FcnJvcjM6IHdnVUxTKFxuXHRcdFx0J+ebuOWFs+WKn+iDveS7heWQkeazqOWGjOeUqOaIt+W8gOaUvu+8jOivt+eZu+W9leWQjue7p+e7reS9v+eUqOOAguiLpeaCqOayoeacieacieWFveaho+ahiOmmhui0puWPt++8jOivt+azqOWGjOWQjueZu+W9leOAgicsXG5cdFx0XHQn55u46Zec5Yqf6IO95YOF5ZCR5rOo5YaK55So5oi26ZaL5pS+77yM6KuL55m75YWl5b6M57m857qM5L2/55So44CC6Iul5oKo5rKS5pyJ5pyJ54245qqU5qGI6aSo6LOs6Jmf77yM6KuL5rOo5YaK5b6M55m76YyE44CCJ1xuXHRcdCksXG5cdFx0Tm9QZXJtRXJyb3I0OiB3Z1VMUyhcblx0XHRcdCfmgqjmsqHmnInmnYPpmZDorr/pl67nm7jlhbPpobXpnaLjgILoi6XmnInnlpHpl67vvIzor7fkuI7mnInlhb3moaPmoYjppobov5DokKXogIXogZTns7vjgIInLFxuXHRcdFx0J+aCqOaykuacieasiumZkOioquWVj+ebuOmXnOmggemdouOAguiLpeacieeWkeWVj++8jOiri+iIh+acieeNuOaqlOahiOmkqOmBi+eHn+iAheiBr+ezu+OAgidcblx0XHQpLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge1dHX1NLSU59IGZyb20gJy4vY29uc3RhbnQnO1xuaW1wb3J0IHt0aXBweX0gZnJvbSAnZXh0LmdhZGdldC5UaXBweSc7XG5cbmNvbnN0IGdldENvbnRlbnQgPSAocmVmZXJlbmNlOiBFbGVtZW50KTogc3RyaW5nID0+IHtcblx0Y29uc3QgbGFiZWw6IHN0cmluZyB8IG51bGwgPSByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG5cdGNvbnN0IHRpdGxlOiBzdHJpbmcgfCBudWxsID0gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgnYWx0JykgPz8gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSgndGl0bGUnKTtcblxuXHRyZXR1cm4gKGxhYmVsID09PSB0aXRsZSA/IGxhYmVsIDogdGl0bGUgfHwgbGFiZWwpIHx8IChyZWZlcmVuY2UudGV4dENvbnRlbnQgYXMgc3RyaW5nKTtcbn07XG5cbmNvbnN0IG9uQ3JlYXRlQ2FsbGJhY2sgPSAoaW5zdGFuY2U6IFJldHVyblR5cGU8dHlwZW9mIHRpcHB5PlswXSk6IHZvaWQgPT4ge1xuXHRjb25zdCB7cmVmZXJlbmNlfSA9IGluc3RhbmNlO1xuXHRyZWZlcmVuY2Uuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgZ2V0Q29udGVudChyZWZlcmVuY2UpKTtcblx0cmVmZXJlbmNlLnJlbW92ZUF0dHJpYnV0ZSgndGl0bGUnKTtcbn07XG5cbmNvbnN0IG9uU2hvd0NhbGxiYWNrID0gKGluc3RhbmNlOiBSZXR1cm5UeXBlPHR5cGVvZiB0aXBweT5bMF0pOiB2b2lkID0+IHtcblx0b25DcmVhdGVDYWxsYmFjayhpbnN0YW5jZSk7XG5cdGluc3RhbmNlLnNldENvbnRlbnQoZ2V0Q29udGVudChpbnN0YW5jZS5yZWZlcmVuY2UpKTtcbn07XG5cbmNvbnN0IHRpcHB5Rm9yQ2l0aXplbkhlYWRlciA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0aWYgKFdHX1NLSU4gIT09ICdjaXRpemVuJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKFxuXHRcdCcuY2l0aXplbi1oZWFkZXIgbGFiZWxbdGl0bGVdLC5jaXRpemVuLWhlYWRlciAubXctZWNoby1ub3RpZmljYXRpb25zLWJhZGdlLC5jaXRpemVuLWhlYWRlcl9fbG9nbyBhLC5wYWdlLWFjdGlvbnM+bmF2PnVsPmxpIGEsLnBhZ2UtYWN0aW9uc19fYnV0dG9uJ1xuXHQpKSB7XG5cdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoZWxlbWVudCk7XG5cdFx0bGV0IHRpdGxlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCd0aXRsZScpO1xuXHRcdGlmICghdGl0bGUpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHRpdGxlID0gdGl0bGUucmVwbGFjZSgvXFxzKj9cXFsuKz9dJC8sICcnKTtcblxuXHRcdCRlbGVtZW50LmF0dHIoe1xuXHRcdFx0J2FyaWEtbGFiZWwnOiB0aXRsZSxcblx0XHRcdHRpdGxlOiAnJyxcblx0XHR9KTtcblx0XHR0aXBweSgkZWxlbWVudC5nZXQoMCkgYXMgSFRNTEVsZW1lbnQsIHtcblx0XHRcdGFycm93OiB0cnVlLFxuXHRcdFx0Y29udGVudDogdGl0bGUsXG5cdFx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdFx0b25DcmVhdGU6IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0XHRvbkhpZGRlbjogb25DcmVhdGVDYWxsYmFjayxcblx0XHRcdG9uU2hvdzogb25TaG93Q2FsbGJhY2ssXG5cdFx0fSk7XG5cdH1cbn07XG5cbmNvbnN0IHRpcHB5Rm9yRXh0ZW5zaW9uID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5Db2xsYXBzaWJsZVNpZGViYXIuanMnKTtcblx0dGlwcHkoJyNzaWRlYmFyQnV0dG9uJywge1xuXHRcdGFycm93OiB0cnVlLFxuXHRcdGNvbnRlbnQ6IGdldENvbnRlbnQsXG5cdFx0cGxhY2VtZW50OiAnbGVmdCcsXG5cdFx0b25DcmVhdGU6IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0b25IaWRkZW46IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0b25TaG93OiBvblNob3dDYWxsYmFjayxcblx0fSk7XG5cblx0aWYgKFdHX1NLSU4gPT09ICd2ZWN0b3InKSB7XG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdleHQuQ29sbGFwc2libGVTaWRlYmFyLnZlY3RvcicpO1xuXHRcdHRpcHB5KCcjc2lkZWJhckNvbGxhcHNlJywge1xuXHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRjb250ZW50OiBnZXRDb250ZW50LFxuXHRcdFx0cGxhY2VtZW50OiAncmlnaHQnLFxuXHRcdFx0b25DcmVhdGU6IG9uQ3JlYXRlQ2FsbGJhY2ssXG5cdFx0XHRvbkhpZGRlbjogb25DcmVhdGVDYWxsYmFjayxcblx0XHRcdG9uU2hvdzogb25TaG93Q2FsbGJhY2ssXG5cdFx0fSk7XG5cdH1cblxuXHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ2V4dC5EYXJrTW9kZScpO1xuXHR0aXBweSgnI2Rhcmttb2RlLWJ1dHRvbicsIHtcblx0XHRhcnJvdzogdHJ1ZSxcblx0XHRjb250ZW50OiBnZXRDb250ZW50LFxuXHRcdHBsYWNlbWVudDogJ2xlZnQnLFxuXHRcdG9uQ3JlYXRlOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdG9uSGlkZGVuOiBvbkNyZWF0ZUNhbGxiYWNrLFxuXHRcdG9uU2hvdzogb25TaG93Q2FsbGJhY2ssXG5cdH0pO1xufTtcblxuZXhwb3J0IHt0aXBweUZvckNpdGl6ZW5IZWFkZXIsIHRpcHB5Rm9yRXh0ZW5zaW9ufTtcbiIsICJjb25zdCBkZXByZWNhdGVkRnVuY3Rpb25zID0gKCk6IHZvaWQgPT4ge1xuXHQvKiFcblx0ICogbWFpbnRlbmFuY2U6IFNvbWUgdXNlciBzY3JpcHRzIG1heSBiZSB1c2luZyB0aGUgZm9sbG93aW5nIGRlcHJlY2F0ZWQgZnVuY3Rpb25zLlxuXHQgKiBUaGVzZSBmdW5jdGlvbnMgYXJlIG5vIGxvbmdlciBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSB1cGRhdGVkLlxuXHQgKi9cblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0J2ltcG9ydFNjcmlwdCcsXG5cdFx0KHRpdGxlOiBzdHJpbmcpOiBIVE1MU2NyaXB0RWxlbWVudCA9PiB7XG5cdFx0XHRyZXR1cm4gbXcubG9hZGVyLmFkZFNjcmlwdFRhZyhcblx0XHRcdFx0bXcudXRpbC5nZXRVcmwodGl0bGUsIHtcblx0XHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHRcdGN0eXBlOiAndGV4dC9qYXZhc2NyaXB0Jyxcblx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRzbWF4YWdlOiAnMzYwMCcsXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0J1VzZSBtdy5sb2FkZXIuYWRkU2NyaXB0VGFnKCkgaW5zdGVhZCdcblx0KTtcblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0J2ltcG9ydFN0eWxlc2hlZXQnLFxuXHRcdCh0aXRsZTogc3RyaW5nKTogSFRNTExpbmtFbGVtZW50ID0+IHtcblx0XHRcdHJldHVybiBtdy5sb2FkZXIuYWRkTGlua1RhZyhcblx0XHRcdFx0bXcudXRpbC5nZXRVcmwodGl0bGUsIHtcblx0XHRcdFx0XHRhY3Rpb246ICdyYXcnLFxuXHRcdFx0XHRcdGN0eXBlOiAndGV4dC9jc3MnLFxuXHRcdFx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdFx0XHRcdHNtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0fSksXG5cdFx0XHRcdCd0ZXh0L2Nzcydcblx0XHRcdCk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5hZGRMaW5rVGFnKCkgaW5zdGVhZCdcblx0KTtcblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0J2ltcG9ydFNjcmlwdFVSSScsXG5cdFx0KG1vZHVsZXM6IHN0cmluZyk6IEhUTUxTY3JpcHRFbGVtZW50ID0+IHtcblx0XHRcdHJldHVybiBtdy5sb2FkZXIuYWRkU2NyaXB0VGFnKG13LnV0aWwud2lraVVybGVuY29kZShtb2R1bGVzKSk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5hZGRTY3JpcHRUYWcoKSBvciBtdy5sb2FkZXIuZ2V0U2NyaXB0KCkgaW5zdGVhZCdcblx0KTtcblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0J2ltcG9ydFN0eWxlc2hlZXRVUkknLFxuXHRcdChtb2R1bGVzOiBzdHJpbmcpOiBIVE1MTGlua0VsZW1lbnQgPT4ge1xuXHRcdFx0cmV0dXJuIG13LmxvYWRlci5hZGRMaW5rVGFnKG13LnV0aWwud2lraVVybGVuY29kZShtb2R1bGVzKSwgJ3RleHQvY3NzJyk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5hZGRMaW5rVGFnKCkgaW5zdGVhZCdcblx0KTtcblx0bXcubG9nLmRlcHJlY2F0ZShcblx0XHR3aW5kb3csXG5cdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzIzNDVcblx0XHQnaW1wb3J0U2NyaXB0Q2FsbGJhY2snLFxuXHRcdCh0aXRsZTogc3RyaW5nLCByZWFkeTogbmV2ZXIpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgbXcubG9hZGVyXG5cdFx0XHRcdC5nZXRTY3JpcHQoXG5cdFx0XHRcdFx0bXcudXRpbC5nZXRVcmwodGl0bGUsIHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ3JhdycsXG5cdFx0XHRcdFx0XHRjdHlwZTogJ3RleHQvamF2YXNjcmlwdCcsXG5cdFx0XHRcdFx0XHRtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHRcdHNtYXhhZ2U6ICczNjAwJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC50aGVuKHJlYWR5KTtcblx0XHR9LFxuXHRcdCdVc2UgbXcubG9hZGVyLmdldFNjcmlwdCgpIGluc3RlYWQnXG5cdCk7XG5cdG13LmxvZy5kZXByZWNhdGUoXG5cdFx0d2luZG93LFxuXHRcdC8vIEB0cy1leHBlY3QtZXJyb3IgVFMyMzQ1XG5cdFx0J2ltcG9ydFNjcmlwdFVSSUNhbGxiYWNrJyxcblx0XHQodXJsOiBzdHJpbmcsIHJlYWR5OiBuZXZlcik6IHZvaWQgPT4ge1xuXHRcdFx0dm9pZCBtdy5sb2FkZXIuZ2V0U2NyaXB0KHVybCkudGhlbihyZWFkeSk7XG5cdFx0fSxcblx0XHQnVXNlIG13LmxvYWRlci5nZXRTY3JpcHQoKSBpbnN0ZWFkJ1xuXHQpO1xuXHQvKipcblx0ICogbWFpbnRlbmFuY2U6IFNvbWUgdXNlciBzY3JpcHRzIG1heSBiZSB1c2luZyB0aGUgZm9sbG93aW5nIGRlcHJlY2F0ZWQgZnVuY3Rpb25zLlxuXHQgKiBUaGVzZSBmdW5jdGlvbnMgYXJlIGtlcHQgZm9yIGNvbXBhYmlsaXR5LlxuXHQgKi9cblx0Ly8gbXcubG9nLmRlcHJlY2F0ZSh3aW5kb3csICdKU0NvbmZpZycsIHt9LCAnVXNlIHt9IGluc3RlYWQnKTtcblx0LyoqXG5cdCAqIHdnVSpTIGZ1bmN0aW9ucyBoYXZlIGJlZW4gc3BsaXQgdG8gYSBzZXBlcmF0ZSBnYWRnZXQgKGV4dC5nYWRnZXQuaTE4bikuXG5cdCAqL1xufTtcblxuZXhwb3J0IHtkZXByZWNhdGVkRnVuY3Rpb25zfTtcbiIsICJpbXBvcnQge1xuXHRhZGRUYXJnZXRCbGFuayxcblx0Zml4TG9jYXRpb25IYXNoLFxuXHQvL2hpZGVOZXdVc2Vyc0xvZyxcblx0aGlnaExpZ2h0UmV2LFxuXHRsb2FkV2l0aFVSTCxcblx0Ly9ub1Blcm1XYXJuaW5nLFxuXHRvcGVuU2VhcmNoSW5OZXdUYWIsXG5cdHJlbW92ZVRpdGxlRnJvbVBlcm1hbGluayxcblx0dGl0bGVDbGVhblVwLFxuXHR0b2dnbGVMaW5rLFxuXHR1bmloYW5Qb3B1cCxcbn0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuaW1wb3J0IHt0aXBweUZvckNpdGl6ZW5IZWFkZXIsIHRpcHB5Rm9yRXh0ZW5zaW9ufSBmcm9tICcuL21vZHVsZXMvdGlwcHknO1xuaW1wb3J0IHtkZXByZWNhdGVkRnVuY3Rpb25zfSBmcm9tICcuL21vZHVsZXMvZGVwcmVjYXRlZEZ1bmN0aW9ucyc7XG5cbihmdW5jdGlvbiBzaXRlQ29tbW9uKCk6IHZvaWQge1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zXG5cdGlmIChtdy5jb25maWcuZ2V0KCd3Z1NpdGVDb21tb25JbnN0YWxsZWQnKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQvLyBTZXQgZ3VhcmRcblx0bXcuY29uZmlnLnNldCgnd2dTaXRlQ29tbW9uSW5zdGFsbGVkJywgdHJ1ZSk7XG5cblx0Ly8gQ29yZSBtb2R1bGVzXG5cdGxvYWRXaXRoVVJMKCk7XG5cdC8vbm9QZXJtV2FybmluZygpO1xuXHRmaXhMb2NhdGlvbkhhc2goKTtcblxuXHQkKCgpOiB2b2lkID0+IHtcblx0XHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkKCdib2R5Jyk7XG5cblx0XHQvLyBDb3JlIG1vZHVsZXMgKG5lZWQgJC5yZWFkeSlcblx0XHRoaWdoTGlnaHRSZXYoJGJvZHkpO1xuXHRcdGFkZFRhcmdldEJsYW5rKCRib2R5KTtcblx0XHRyZW1vdmVUaXRsZUZyb21QZXJtYWxpbmsoJGJvZHkpO1xuXHRcdG9wZW5TZWFyY2hJbk5ld1RhYigkYm9keSk7XG5cdFx0dGl0bGVDbGVhblVwKCRib2R5KTtcblx0XHR1bmloYW5Qb3B1cCgkYm9keSk7XG5cdFx0Ly9oaWRlTmV3VXNlcnNMb2coJGJvZHkpO1xuXHRcdHRvZ2dsZUxpbmsoJGJvZHkpO1xuXG5cdFx0Ly8gVGlwcHktcmVsYXRlZCBjb2RlcyAobmVlZCAkLnJlYWR5KVxuXHRcdHRpcHB5Rm9yQ2l0aXplbkhlYWRlcigkYm9keSk7XG5cdH0pO1xuXG5cdC8vIERlcHJlY2F0ZWQgZnVuY3Rpb25zXG5cdGRlcHJlY2F0ZWRGdW5jdGlvbnMoKTtcblxuXHQvLyBUaXBweS1yZWxhdGVkIGNvZGVzXG5cdHZvaWQgdGlwcHlGb3JFeHRlbnNpb24oKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQTBCQyxHQUFHQyxLQUFLQyxjQUFjLE1BQU07QUFDNUQsSUFBTUMsZ0JBQStCSCxHQUFHQyxLQUFLQyxjQUFjLFdBQVc7QUFDdEUsSUFB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QUFTRDs7Q0N2RUMsU0FBU0csYUFBbUI7QUFFNUIsTUFBSXRMLEdBQUdVLE9BQU9DLElBQUksdUJBQXVCLEdBQUc7QUFDM0M7RUFDRDtBQUVBWCxLQUFHVSxPQUFPNkssSUFBSSx5QkFBeUIsSUFBSTtBQUczQ25KLGNBQVk7QUFFWnFHLGtCQUFnQjtBQUVoQmpELElBQUUsTUFBWTtBQUNiLFVBQU1iLFFBQWlDYSxFQUFFLE1BQU07QUFHL0NkLGlCQUFhQyxLQUFLO0FBQ2xCUSxtQkFBZVIsS0FBSztBQUNwQnlCLDZCQUF5QnpCLEtBQUs7QUFDOUI4Qix1QkFBbUI5QixLQUFLO0FBQ3hCbUMsaUJBQWFuQyxLQUFLO0FBQ2xCOEMsZ0JBQVk5QyxLQUFLO0FBRWpCZ0UsZUFBV2hFLEtBQUs7QUFHaEJrRiwwQkFBc0JsRixLQUFLO0VBQzVCLENBQUM7QUFHRGlHLHNCQUFvQjtBQUdwQixPQUFLTCxrQkFBa0I7QUFDeEIsR0FBRzsiLAogICJuYW1lcyI6IFsiVVJMX0RJRkYiLCAibXciLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgIlVSTF9ISUdITElHSFQiLCAiVVJMX0hJTElHSFQiLCAiVVJMX1VTRSIsICJVUkxfV0lUSF9DU1MiLCAiVVJMX1dJVEhfSlMiLCAiVVJMX1dJVEhfTU9EVUxFIiwgIldHX0FDVElPTiIsICJjb25maWciLCAiZ2V0IiwgIldHX0NBTk9OSUNBTF9TUEVDSUFMX1BBR0VfTkFNRSIsICJXR19OQU1FU1BBQ0VfTlVNQkVSIiwgIldHX1BBR0VfTkFNRSIsICJXR19TQ1JJUFQiLCAiV0dfU0tJTiIsICJXR19VU0VSX05BTUUiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAid2dVTFMiLCAid2luZG93IiwgIk5vdGUiLCAibG9jYWxpemUiLCAiZW4iLCAiTm9QZXJtRXJyb3IwIiwgIk5vUGVybUVycm9yMSIsICJOb1Blcm1FcnJvcjIiLCAiTm9QZXJtRXJyb3IzIiwgIk5vUGVybUVycm9yNCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAibG9hZFdpdGhVUkwiLCAidGVzdCIsICJsb2FkZXIiLCAibG9hZCIsICJnZXRVcmwiLCAiYWN0aW9uIiwgImN0eXBlIiwgIm1heGFnZSIsICJzbWF4YWdlIiwgInVzaW5nIiwgInRoZW4iLCAicmVxdWlyZTIiLCAid2dVc2VyTmFtZSIsICJlc2NhcGVSZWdFeHAiLCAiUkVHRVhfRklMRSIsICJSZWdFeHAiLCAiY29uY2F0IiwgIlJFR0VYX0VYVCIsICJwYXRoIiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAic3BsaXQiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgIl9SRUdFWF9GSUxFJGV4ZWMiLCAidXNlRmlsZSIsICJ2YWx1ZSIsICJuYW1lIiwgInRvU3RyaW5nIiwgInRyaW0iLCAid2hhdCIsICJleGVjIiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJlcnIiLCAiZSIsICJmIiwgImhpZ2hMaWdodFJldiIsICIkYm9keSIsICJoaWdobGlnaHQiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAidmVyc2lvbiIsICJmaW5kIiwgInBhcmVudCIsICJhZGRDbGFzcyIsICJhZGRUYXJnZXRCbGFuayIsICJmaWx0ZXIiLCAiX2luZGV4IiwgImVsZW1lbnQiLCAibGlua0hyZWYiLCAiJCIsICJhdHRyIiwgImhyZWZTcGxpdCIsICJsZW5ndGgiLCAibG9jYXRpb24iLCAiaG9zdCIsICJocmVmIiwgImluY2x1ZGVzIiwgInByb3RvY29sIiwgImhvc3RuYW1lIiwgInRhcmdldCIsICJyZWwiLCAicmVtb3ZlVGl0bGVGcm9tUGVybWFsaW5rIiwgIiRwZXJtYUxpbmsiLCAiXyRwZXJtYUxpbmtGaXJzdENoaWxkIiwgIiRwZXJtYUxpbmtGaXJzdENoaWxkIiwgInJlcGxhY2UiLCAib3BlblNlYXJjaEluTmV3VGFiIiwgIm9uIiwgImV2ZW50IiwgImN0cmxLZXkiLCAibWV0YUtleSIsICJ0aXRsZUNsZWFuVXAiLCAiZnVsbFBhZ2VOYW1lIiwgIlRpdGxlIiwgImdldFByZWZpeGVkVGV4dCIsICIkZmlyc3RIZWFkaW5nIiwgImRvY3VtZW50VGl0bGUiLCAiZG9jdW1lbnQiLCAidGl0bGUiLCAicGFnZVRpdGxlIiwgInRleHQiLCAicmVwbGFjZVRpdGxlIiwgInVuaWhhblBvcHVwIiwgImVhY2giLCAiJGVsZW1lbnQiLCAicG9wdXAiLCAiT08iLCAidWkiLCAiUG9wdXBXaWRnZXQiLCAiJGNvbnRlbnQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImxhYmVsIiwgImFuY2hvciIsICJoZWFkIiwgInBhZGRlZCIsICJhcHBlbmQiLCAidG9nZ2xlIiwgImZpeExvY2F0aW9uSGFzaCIsICJoYXNoIiwgInRvZ2dsZUxpbmsiLCAiXyR0b2dnbGVyJHBhcmVudCQiLCAiJHRvZ2dsZXIiLCAic3R5bGUiLCAiY29sb3IiLCAiY3NzIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZXRDb250ZW50IiwgInJlZmVyZW5jZSIsICJfcmVmZXJlbmNlJGdldEF0dHJpYnUiLCAiZ2V0QXR0cmlidXRlIiwgInRleHRDb250ZW50IiwgIm9uQ3JlYXRlQ2FsbGJhY2siLCAiaW5zdGFuY2UiLCAic2V0QXR0cmlidXRlIiwgInJlbW92ZUF0dHJpYnV0ZSIsICJvblNob3dDYWxsYmFjayIsICJzZXRDb250ZW50IiwgInRpcHB5Rm9yQ2l0aXplbkhlYWRlciIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJ0aXBweSIsICJhcnJvdyIsICJjb250ZW50IiwgInBsYWNlbWVudCIsICJvbkNyZWF0ZSIsICJvbkhpZGRlbiIsICJvblNob3ciLCAidGlwcHlGb3JFeHRlbnNpb24iLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiZGVwcmVjYXRlZEZ1bmN0aW9ucyIsICJsb2ciLCAiZGVwcmVjYXRlIiwgImFkZFNjcmlwdFRhZyIsICJhZGRMaW5rVGFnIiwgIm1vZHVsZXMiLCAid2lraVVybGVuY29kZSIsICJyZWFkeSIsICJnZXRTY3JpcHQiLCAidXJsIiwgInNpdGVDb21tb24iLCAic2V0Il0KfQo=
