/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/CookieWarning}
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
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/.pnpm/broadcastchannel-polyfill@1.0.1/node_modules/broadcastchannel-polyfill/index.js
var require_broadcastchannel_polyfill = __commonJS({
  "node_modules/.pnpm/broadcastchannel-polyfill@1.0.1/node_modules/broadcastchannel-polyfill/index.js"() {
    (function(global) {
      var channels = [];
      function BroadcastChannel2(channel) {
        var $this = this;
        channel = String(channel);
        var id = "$BroadcastChannel$" + channel + "$";
        channels[id] = channels[id] || [];
        channels[id].push(this);
        this._name = channel;
        this._id = id;
        this._closed = false;
        this._mc = new MessageChannel();
        this._mc.port1.start();
        this._mc.port2.start();
        global.addEventListener("storage", function(e) {
          if (e.storageArea !== global.localStorage) return;
          if (e.newValue == null || e.newValue === "") return;
          if (e.key.substring(0, id.length) !== id) return;
          var data = JSON.parse(e.newValue);
          $this._mc.port2.postMessage(data);
        });
      }
      BroadcastChannel2.prototype = {
        // BroadcastChannel API
        get name() {
          return this._name;
        },
        postMessage: function(message) {
          var $this = this;
          if (this._closed) {
            var e = new Error();
            e.name = "InvalidStateError";
            throw e;
          }
          var value = JSON.stringify(message);
          var key = this._id + String(Date.now()) + "$" + String(Math.random());
          global.localStorage.setItem(key, value);
          setTimeout(function() {
            global.localStorage.removeItem(key);
          }, 500);
          channels[this._id].forEach(function(bc) {
            if (bc === $this) return;
            bc._mc.port2.postMessage(JSON.parse(value));
          });
        },
        close: function() {
          if (this._closed) return;
          this._closed = true;
          this._mc.port1.close();
          this._mc.port2.close();
          var index = channels[this._id].indexOf(this);
          channels[this._id].splice(index, 1);
        },
        // EventTarget API
        get onmessage() {
          return this._mc.port1.onmessage;
        },
        set onmessage(value) {
          this._mc.port1.onmessage = value;
        },
        addEventListener: function() {
          return this._mc.port1.addEventListener.apply(this._mc.port1, arguments);
        },
        removeEventListener: function() {
          return this._mc.port1.removeEventListener.apply(this._mc.port1, arguments);
        },
        dispatchEvent: function() {
          return this._mc.port1.dispatchEvent.apply(this._mc.port1, arguments);
        }
      };
      global.BroadcastChannel = global.BroadcastChannel || BroadcastChannel2;
    })(self);
  }
});

// dist/CookieWarning/CookieWarning.js
require_broadcastchannel_polyfill();
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
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames2(from)), _step;
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
//! src/CookieWarning/options.json
var storageKey = "ext.gadget.CookieWarning_cookieConsent";
var readingPIPPKey = "consentRead";
//! src/CookieWarning/components/AgreeButton.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/CookieWarning/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Agree: (0, import_ext_gadget.localize)({
      en: "I agree",
      ja: "すべて許可する",
      zh: "同意"
    }),
    CookieNotice: (0, import_ext_gadget.localize)({
      en: 'To provide better experience, we utilize cookies and other technologies to provide services. You can refer to our <a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="Personal Information Protection Policy"><em>Personal Information Protection Policy</em></a> to learn how we handle your personal information.',
      ja: 'より良いサービスを提供するために、クッキーやその他の技術を利用しています。個人情報の取り扱い方法については、<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="個人情報保護條例">個人情報保護條例</a>をご参照ください。',
      "zh-hans": '为了提供最佳体验，我们利用Cookie及其他技术提供服务；您可以查阅我们的<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="个人信息保护条例">个人信息保护条例</a>，了解我们如何处理您的个人信息。',
      "zh-hant": '為了提供最佳體驗，我们利用Cookie及其他技術提供服務；您可以查閱我們的<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="個人信息保護條例">個人信息保護條例</a>，了解我們如何處理您的個人信息'
    }),
    TOSNotice: (0, import_ext_gadget.localize)({
      en: 'By using this site, you agree to our <a rel="noopener" target="_blank" href="/wiki/LIB:TOS?consentRead=1" title="Terms of Use"><em>Terms of Use</em></a>, <a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="Personal Information Protection Policy"><em>Personal Information Protection Policy</em></a>, and other <a rel="noopener" target="_blank" href="/wiki/LIB:LAW?consentRead=1" title="Legal policies">legal policies</a>.',
      ja: 'このサイトを利用することで、<a rel="noopener" target="_blank" href="/wiki/LIB:TOS?consentRead=1" title="利用規約">利用規約</a>、<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="個人情報保護條例">個人情報保護條例</a>、その他の<a rel="noopener" target="_blank" href="/wiki/LIB:LAW?consentRead=1" title="法的ポリシー">法的ポリシー</a>について十分に理解し、遵守することに同意したものとみなされます。',
      "zh-hans": '访问本网站，或以任何方式使用本网站，均代表您已仔细阅读、充分了解并同意遵守本网站的<a rel="noopener" target="_blank" href="/wiki/LIB:TOS?consentRead=1" title="用户协议">用户协议</a>、<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="个人信息保护条例">个人信息保护条例</a>及其他各项<a rel="noopener" target="_blank" href="/wiki/LIB:LAW?consentRead=1" title="法律条例">法律条例</a>的规定。',
      "zh-hant": '存取本網站，或以任何方式使用本網站，均代表您已仔細閱讀、充分了解並同意遵守本網站的<a rel="noopener" target="_blank" href="/wiki/LIB:TOS?consentRead=1" title="用戶協議">用戶協議</a>、<a rel="noopener" target="_blank" href="/wiki/LIB:PIPP?consentRead=1" title="個人信息保護條例">個人信息保護條例</a>及其他各項<a rel="noopener" target="_blank" href="/wiki/LIB:LAW?consentRead=1" title="法律條例">法律條例</a>的規定。'
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/CookieWarning/components/AgreeButton.tsx
var AgreeButton = ({
  onClick
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement("button", {
  className: ["cdx-button", "cdx-button--action-progressive", "cdx-button--weight-primary"],
  onClick
}, getMessage("Agree"));
var AgreeButton_default = AgreeButton;
//! src/CookieWarning/components/ConsentNotice.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
var ConsentNotice = () => /* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("p", {
  innerHTML: getMessage("TOSNotice")
}), /* @__PURE__ */ import_ext_gadget3.default.createElement("p", {
  innerHTML: getMessage("CookieNotice")
}));
var ConsentNotice_default = ConsentNotice;
//! src/CookieWarning/components/RootElement.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.React"), 1);
//! src/CookieWarning/components/CookieWarning.module.less
var warning = "CookieWarning-module__warning_ukvfyG";
//! src/CookieWarning/components/RootElement.tsx
var RootElement = ({
  agreeButtonOnClick
}) => /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
  className: [warning, "noprint"]
}, /* @__PURE__ */ import_ext_gadget4.default.createElement(ConsentNotice_default, null), /* @__PURE__ */ import_ext_gadget4.default.createElement(AgreeButton_default, {
  onClick: agreeButtonOnClick
}));
//! src/CookieWarning/CookieWarning.ts
(function cookieWarning() {
  const {
    wgUserName
  } = mw.config.get();
  const lastStorageValue = mw.storage.get(storageKey);
  const urlConsentRead = mw.util.getParamValue(readingPIPPKey);
  if (wgUserName || lastStorageValue === "1" || urlConsentRead) {
    return;
  }
  const closeWarning = () => {
    broadcastChannel.postMessage("close");
    broadcastChannel.close();
    rootElement.remove();
    mw.storage.set(storageKey, "1", 60 * 60 * 1e3 * 24 * 30);
  };
  const broadcastChannel = new BroadcastChannel(storageKey);
  broadcastChannel.addEventListener("message", closeWarning);
  const rootElement = RootElement({
    agreeButtonOnClick: closeWarning
  });
  document.body.append(rootElement);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0Nvb2tpZVdhcm5pbmcvb3B0aW9ucy5qc29uIiwgInNyYy9Db29raWVXYXJuaW5nL2NvbXBvbmVudHMvQWdyZWVCdXR0b24udHN4IiwgInNyYy9Db29raWVXYXJuaW5nL21vZHVsZXMvaTE4bi50cyIsICJzcmMvQ29va2llV2FybmluZy9jb21wb25lbnRzL0NvbnNlbnROb3RpY2UudHN4IiwgInNyYy9Db29raWVXYXJuaW5nL2NvbXBvbmVudHMvUm9vdEVsZW1lbnQudHN4IiwgInNyYy9Db29raWVXYXJuaW5nL2NvbXBvbmVudHMvQ29va2llV2FybmluZy5tb2R1bGUubGVzcyIsICJzcmMvQ29va2llV2FybmluZy9Db29raWVXYXJuaW5nLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gICAgdmFyIGNoYW5uZWxzID0gW107XG5cbiAgICBmdW5jdGlvbiBCcm9hZGNhc3RDaGFubmVsKGNoYW5uZWwpIHtcbiAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgY2hhbm5lbCA9IFN0cmluZyhjaGFubmVsKTtcblxuICAgICAgICB2YXIgaWQgPSAnJEJyb2FkY2FzdENoYW5uZWwkJyArIGNoYW5uZWwgKyAnJCc7XG5cbiAgICAgICAgY2hhbm5lbHNbaWRdID0gY2hhbm5lbHNbaWRdIHx8IFtdO1xuICAgICAgICBjaGFubmVsc1tpZF0ucHVzaCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9uYW1lID0gY2hhbm5lbDtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgdGhpcy5fY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX21jID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIHRoaXMuX21jLnBvcnQxLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuX21jLnBvcnQyLnN0YXJ0KCk7XG5cbiAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ3N0b3JhZ2UnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS5zdG9yYWdlQXJlYSAhPT0gZ2xvYmFsLmxvY2FsU3RvcmFnZSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUubmV3VmFsdWUgPT0gbnVsbCB8fCBlLm5ld1ZhbHVlID09PSAnJykgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGUua2V5LnN1YnN0cmluZygwLCBpZC5sZW5ndGgpICE9PSBpZCkgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGUubmV3VmFsdWUpO1xuICAgICAgICAgICAgJHRoaXMuX21jLnBvcnQyLnBvc3RNZXNzYWdlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBCcm9hZGNhc3RDaGFubmVsLnByb3RvdHlwZSA9IHtcbiAgICAgICAgLy8gQnJvYWRjYXN0Q2hhbm5lbCBBUElcbiAgICAgICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgcG9zdE1lc3NhZ2U6IGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBlLm5hbWUgPSAnSW52YWxpZFN0YXRlRXJyb3InO1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIG90aGVyIGNvbnRleHRzIHZpYSBzdG9yYWdlIGV2ZW50cy4uLlxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuX2lkICsgU3RyaW5nKERhdGUubm93KCkpICsgJyQnICsgU3RyaW5nKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICAgICAgZ2xvYmFsLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgIC8vIEJyb2FkY2FzdCB0byBjdXJyZW50IGNvbnRleHQgdmlhIHBvcnRzXG4gICAgICAgICAgICBjaGFubmVsc1t0aGlzLl9pZF0uZm9yRWFjaChmdW5jdGlvbihiYykge1xuICAgICAgICAgICAgICAgIGlmIChiYyA9PT0gJHRoaXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICBiYy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoSlNPTi5wYXJzZSh2YWx1ZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0MS5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDIuY2xvc2UoKTtcblxuICAgICAgICAgICAgdmFyIGluZGV4ID0gY2hhbm5lbHNbdGhpcy5faWRdLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICBjaGFubmVsc1t0aGlzLl9pZF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBFdmVudFRhcmdldCBBUElcbiAgICAgICAgZ2V0IG9ubWVzc2FnZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5vbm1lc3NhZ2U7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBvbm1lc3NhZ2UodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZSA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuYWRkRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oLyp0eXBlLCBsaXN0ZW5lciAsIHVzZUNhcHR1cmUqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIGRpc3BhdGNoRXZlbnQ6IGZ1bmN0aW9uKC8qZXZlbnQqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLmRpc3BhdGNoRXZlbnQuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGdsb2JhbC5Ccm9hZGNhc3RDaGFubmVsID0gZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgfHwgQnJvYWRjYXN0Q2hhbm5lbDtcbn0pKHNlbGYpO1xuIiwgIntcblx0XCJzdG9yYWdlS2V5XCI6IFwiZXh0LmdhZGdldC5Db29raWVXYXJuaW5nX2Nvb2tpZUNvbnNlbnRcIixcblx0XCJyZWFkaW5nUElQUEtleVwiOiBcImNvbnNlbnRSZWFkXCJcbn1cbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL21vZHVsZXMvaTE4bic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEFncmVlQnV0dG9uID0gKHtvbkNsaWNrfTogUHJvcHMpID0+IChcblx0PGJ1dHRvblxuXHRcdGNsYXNzTmFtZT17WydjZHgtYnV0dG9uJywgJ2NkeC1idXR0b24tLWFjdGlvbi1wcm9ncmVzc2l2ZScsICdjZHgtYnV0dG9uLS13ZWlnaHQtcHJpbWFyeSddfVxuXHRcdG9uQ2xpY2s9e29uQ2xpY2t9XG5cdD5cblx0XHR7Z2V0TWVzc2FnZSgnQWdyZWUnKX1cblx0PC9idXR0b24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBZ3JlZUJ1dHRvbjtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QWdyZWU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSSBhZ3JlZScsXG5cdFx0XHRqYTogJ+OBmeOBueOBpuioseWPr+OBmeOCiycsXG5cdFx0XHR6aDogJ+WQjOaEjycsXG5cdFx0fSksXG5cdFx0Q29va2llTm90aWNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RvIHByb3ZpZGUgYmV0dGVyIGV4cGVyaWVuY2UsIHdlIHV0aWxpemUgY29va2llcyBhbmQgb3RoZXIgdGVjaG5vbG9naWVzIHRvIHByb3ZpZGUgc2VydmljZXMuIFlvdSBjYW4gcmVmZXIgdG8gb3VyIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpQSVBQP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5XCI+PGVtPlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5PC9lbT48L2E+IHRvIGxlYXJuIGhvdyB3ZSBoYW5kbGUgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbi4nLFxuXHRcdFx0amE6ICfjgojjgoroia/jgYTjgrXjg7zjg5PjgrnjgpLmj5DkvpvjgZnjgovjgZ/jgoHjgavjgIHjgq/jg4Pjgq3jg7zjgoTjgZ3jga7ku5bjga7mioDooZPjgpLliKnnlKjjgZfjgabjgYTjgb7jgZnjgILlgIvkurrmg4XloLHjga7lj5bjgormibHjgYTmlrnms5XjgavjgaTjgYTjgabjga/jgIE8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6UElQUD9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLlgIvkurrmg4XloLHkv53orbfmop3kvotcIj7lgIvkurrmg4XloLHkv53orbfmop3kvos8L2E+44KS44GU5Y+C54Wn44GP44Gg44GV44GE44CCJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+S4uuS6huaPkOS+m+acgOS9s+S9k+mqjO+8jOaIkeS7rOWIqeeUqENvb2tpZeWPiuWFtuS7luaKgOacr+aPkOS+m+acjeWKoe+8m+aCqOWPr+S7peafpemYheaIkeS7rOeahDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpQSVBQP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIuS4quS6uuS/oeaBr+S/neaKpOadoeS+i1wiPuS4quS6uuS/oeaBr+S/neaKpOadoeS+izwvYT7vvIzkuobop6PmiJHku6zlpoLkvZXlpITnkIbmgqjnmoTkuKrkurrkv6Hmga/jgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn54K65LqG5o+Q5L6b5pyA5L2z6auU6amX77yM5oiR5Lus5Yip55SoQ29va2ll5Y+K5YW25LuW5oqA6KGT5o+Q5L6b5pyN5YuZ77yb5oKo5Y+v5Lul5p+l6Zax5oiR5YCR55qEPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlBJUFA/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi5YCL5Lq65L+h5oGv5L+d6K235qKd5L6LXCI+5YCL5Lq65L+h5oGv5L+d6K235qKd5L6LPC9hPu+8jOS6huino+aIkeWAkeWmguS9leiZleeQhuaCqOeahOWAi+S6uuS/oeaBrycsXG5cdFx0fSksXG5cdFx0VE9TTm90aWNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0J5IHVzaW5nIHRoaXMgc2l0ZSwgeW91IGFncmVlIHRvIG91ciA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6VE9TP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIlRlcm1zIG9mIFVzZVwiPjxlbT5UZXJtcyBvZiBVc2U8L2VtPjwvYT4sIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpQSVBQP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5XCI+PGVtPlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5PC9lbT48L2E+LCBhbmQgb3RoZXIgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOkxBVz9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCJMZWdhbCBwb2xpY2llc1wiPmxlZ2FsIHBvbGljaWVzPC9hPi4nLFxuXHRcdFx0amE6ICfjgZPjga7jgrXjgqTjg4jjgpLliKnnlKjjgZnjgovjgZPjgajjgafjgIE8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6VE9TP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIuWIqeeUqOimj+e0hFwiPuWIqeeUqOimj+e0hDwvYT7jgIE8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6UElQUD9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLlgIvkurrmg4XloLHkv53orbfmop3kvotcIj7lgIvkurrmg4XloLHkv53orbfmop3kvos8L2E+44CB44Gd44Gu5LuW44GuPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOkxBVz9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLms5XnmoTjg53jg6rjgrfjg7xcIj7ms5XnmoTjg53jg6rjgrfjg7w8L2E+44Gr44Gk44GE44Gm5Y2B5YiG44Gr55CG6Kej44GX44CB6YG15a6I44GZ44KL44GT44Go44Gr5ZCM5oSP44GX44Gf44KC44Gu44Go44G/44Gq44GV44KM44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+iuv+mXruacrOe9keerme+8jOaIluS7peS7u+S9leaWueW8j+S9v+eUqOacrOe9keerme+8jOWdh+S7o+ihqOaCqOW3suS7lOe7humYheivu+OAgeWFheWIhuS6huino+W5tuWQjOaEj+mBteWuiOacrOe9keermeeahDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpUT1M/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi55So5oi35Y2P6K6uXCI+55So5oi35Y2P6K6uPC9hPuOAgTxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpQSVBQP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIuS4quS6uuS/oeaBr+S/neaKpOadoeS+i1wiPuS4quS6uuS/oeaBr+S/neaKpOadoeS+izwvYT7lj4rlhbbku5blkITpobk8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9MSUI6TEFXP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIuazleW+i+adoeS+i1wiPuazleW+i+adoeS+izwvYT7nmoTop4TlrprjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5a2Y5Y+W5pys57ay56uZ77yM5oiW5Lul5Lu75L2V5pa55byP5L2/55So5pys57ay56uZ77yM5Z2H5Luj6KGo5oKo5bey5LuU57Sw6Zax6K6A44CB5YWF5YiG5LqG6Kej5Lim5ZCM5oSP6YG15a6I5pys57ay56uZ55qEPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlRPUz9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLnlKjmiLbljZTorbBcIj7nlKjmiLbljZTorbA8L2E+44CBPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvTElCOlBJUFA/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi5YCL5Lq65L+h5oGv5L+d6K235qKd5L6LXCI+5YCL5Lq65L+h5oGv5L+d6K235qKd5L6LPC9hPuWPiuWFtuS7luWQhOmghTxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL0xJQjpMQVc/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi5rOV5b6L5qKd5L6LXCI+5rOV5b6L5qKd5L6LPC9hPueahOimj+WumuOAgicsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL21vZHVsZXMvaTE4bic7XG5cbmNvbnN0IENvbnNlbnROb3RpY2UgPSAoKSA9PiAoXG5cdDw+XG5cdFx0PHAgaW5uZXJIVE1MPXtnZXRNZXNzYWdlKCdUT1NOb3RpY2UnKX0gLz5cblx0XHQ8cCBpbm5lckhUTUw9e2dldE1lc3NhZ2UoJ0Nvb2tpZU5vdGljZScpfSAvPlxuXHQ8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnNlbnROb3RpY2U7XG4iLCAiaW1wb3J0IEFncmVlQnV0dG9uIGZyb20gJy4vQWdyZWVCdXR0b24nO1xuaW1wb3J0IENvbnNlbnROb3RpY2UgZnJvbSAnLi9Db25zZW50Tm90aWNlJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7d2FybmluZ30gZnJvbSAnLi9Db29raWVXYXJuaW5nLm1vZHVsZS5sZXNzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcblx0YWdyZWVCdXR0b25PbkNsaWNrOiAoKSA9PiB2b2lkO1xufVxuXG5jb25zdCBSb290RWxlbWVudCA9ICh7YWdyZWVCdXR0b25PbkNsaWNrfTogUHJvcHMpID0+IChcblx0PGRpdiBjbGFzc05hbWU9e1t3YXJuaW5nLCAnbm9wcmludCddfT5cblx0XHQ8Q29uc2VudE5vdGljZSAvPlxuXHRcdDxBZ3JlZUJ1dHRvbiBvbkNsaWNrPXthZ3JlZUJ1dHRvbk9uQ2xpY2t9IC8+XG5cdDwvZGl2PlxuKTtcblxuZXhwb3J0IHtSb290RWxlbWVudH07XG4iLCAiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9Db29raWVXYXJuaW5nL2NvbXBvbmVudHMvQ29va2llV2FybmluZy5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IHdhcm5pbmcgPSBcIkNvb2tpZVdhcm5pbmctbW9kdWxlX193YXJuaW5nX3VrdmZ5R1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwid2FybmluZ1wiOiB3YXJuaW5nXG59O1xuICAgICAgIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtSb290RWxlbWVudH0gZnJvbSAnLi9jb21wb25lbnRzL1Jvb3RFbGVtZW50JztcblxuKGZ1bmN0aW9uIGNvb2tpZVdhcm5pbmcoKTogdm9pZCB7XG5cdGNvbnN0IHt3Z1VzZXJOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgbGFzdFN0b3JhZ2VWYWx1ZTogc3RyaW5nIHwgbnVsbCA9IG13LnN0b3JhZ2UuZ2V0KE9QVElPTlMuc3RvcmFnZUtleSkgYXMgc3RyaW5nIHwgbnVsbDtcblx0Y29uc3QgdXJsQ29uc2VudFJlYWQ6IHN0cmluZyB8IG51bGwgPSBtdy51dGlsLmdldFBhcmFtVmFsdWUoT1BUSU9OUy5yZWFkaW5nUElQUEtleSk7XG5cblx0aWYgKHdnVXNlck5hbWUgfHwgbGFzdFN0b3JhZ2VWYWx1ZSA9PT0gJzEnIHx8IHVybENvbnNlbnRSZWFkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgY2xvc2VXYXJuaW5nID0gKCk6IHZvaWQgPT4ge1xuXHRcdGJyb2FkY2FzdENoYW5uZWwucG9zdE1lc3NhZ2UoJ2Nsb3NlJyk7XG5cdFx0YnJvYWRjYXN0Q2hhbm5lbC5jbG9zZSgpO1xuXHRcdHJvb3RFbGVtZW50LnJlbW92ZSgpO1xuXHRcdG13LnN0b3JhZ2Uuc2V0KE9QVElPTlMuc3RvcmFnZUtleSwgJzEnLCA2MCAqIDYwICogMTAwMCAqIDI0ICogMzApO1xuXHR9O1xuXG5cdGNvbnN0IGJyb2FkY2FzdENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbChPUFRJT05TLnN0b3JhZ2VLZXkpO1xuXHRicm9hZGNhc3RDaGFubmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBjbG9zZVdhcm5pbmcpO1xuXG5cdGNvbnN0IHJvb3RFbGVtZW50ID0gUm9vdEVsZW1lbnQoe2FncmVlQnV0dG9uT25DbGljazogY2xvc2VXYXJuaW5nfSk7XG5cblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQocm9vdEVsZW1lbnQpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLEtBQUMsU0FBUyxRQUFRO0FBQ2QsVUFBSSxXQUFXLENBQUM7QUFFaEIsZUFBU0Esa0JBQWlCLFNBQVM7QUFDL0IsWUFBSSxRQUFRO0FBQ1osa0JBQVUsT0FBTyxPQUFPO0FBRXhCLFlBQUksS0FB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QUE7O0FDRFgsSUFBTXlCLFVBQVU7O0FEUXZCLElBQU1DLGNBQWNBLENBQUM7RUFBQ0M7QUFBa0IsTUFDdkNILG1DQUFBVCxRQUFBQyxjQUFDLE9BQUE7RUFBSUMsV0FBVyxDQUFDUSxTQUFTLFNBQVM7QUFBQSxHQUNsQ0QsbUNBQUFULFFBQUFDLGNBQUNPLHVCQUFBLElBQWMsR0FDZkMsbUNBQUFULFFBQUFDLGNBQUNFLHFCQUFBO0VBQVlKLFNBQVNhO0FBQUEsQ0FBb0IsQ0FDM0M7O0NFVkEsU0FBU0MsZ0JBQXNCO0FBQy9CLFFBQU07SUFBQ0M7RUFBVSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBQ25DLFFBQU1DLG1CQUFrQ0gsR0FBR0ksUUFBUUYsSUFBWXBDLFVBQVU7QUFDekUsUUFBTXVDLGlCQUFnQ0wsR0FBR00sS0FBS0MsY0FBc0J4QyxjQUFjO0FBRWxGLE1BQUlnQyxjQUFjSSxxQkFBcUIsT0FBT0UsZ0JBQWdCO0FBQzdEO0VBQ0Q7QUFFQSxRQUFNRyxlQUFlQSxNQUFZO0FBQ2hDQyxxQkFBaUJDLFlBQVksT0FBTztBQUNwQ0QscUJBQWlCRSxNQUFNO0FBQ3ZCQyxnQkFBWUMsT0FBTztBQUNuQmIsT0FBR0ksUUFBUVUsSUFBWWhELFlBQVksS0FBSyxLQUFLLEtBQUssTUFBTyxLQUFLLEVBQUU7RUFDakU7QUFFQSxRQUFNMkMsbUJBQXFDLElBQUlNLGlCQUF5QmpELFVBQVU7QUFDbEYyQyxtQkFBaUJPLGlCQUFpQixXQUFXUixZQUFZO0FBRXpELFFBQU1JLGNBQWNoQixZQUFZO0lBQUNDLG9CQUFvQlc7RUFBWSxDQUFDO0FBRWxFUyxXQUFTQyxLQUFLQyxPQUFPUCxXQUFXO0FBQ2pDLEdBQUc7IiwKICAibmFtZXMiOiBbIkJyb2FkY2FzdENoYW5uZWwiLCAic3RvcmFnZUtleSIsICJyZWFkaW5nUElQUEtleSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJBZ3JlZSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJ6aCIsICJDb29raWVOb3RpY2UiLCAiVE9TTm90aWNlIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJBZ3JlZUJ1dHRvbiIsICJvbkNsaWNrIiwgImRlZmF1bHQiLCAiY3JlYXRlRWxlbWVudCIsICJjbGFzc05hbWUiLCAiQWdyZWVCdXR0b25fZGVmYXVsdCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAiQ29uc2VudE5vdGljZSIsICJGcmFnbWVudCIsICJpbm5lckhUTUwiLCAiQ29uc2VudE5vdGljZV9kZWZhdWx0IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJ3YXJuaW5nIiwgIlJvb3RFbGVtZW50IiwgImFncmVlQnV0dG9uT25DbGljayIsICJjb29raWVXYXJuaW5nIiwgIndnVXNlck5hbWUiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJsYXN0U3RvcmFnZVZhbHVlIiwgInN0b3JhZ2UiLCAidXJsQ29uc2VudFJlYWQiLCAidXRpbCIsICJnZXRQYXJhbVZhbHVlIiwgImNsb3NlV2FybmluZyIsICJicm9hZGNhc3RDaGFubmVsIiwgInBvc3RNZXNzYWdlIiwgImNsb3NlIiwgInJvb3RFbGVtZW50IiwgInJlbW92ZSIsICJzZXQiLCAiQnJvYWRjYXN0Q2hhbm5lbCIsICJhZGRFdmVudExpc3RlbmVyIiwgImRvY3VtZW50IiwgImJvZHkiLCAiYXBwZW5kIl0KfQo=
