/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Util}
 * @author 安忆 <i@anyi.in>
 * @license GPL-3.0-or-later {@link https://youshou.wiki/wiki/H:GPLV3}
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

// dist/Util/Util.js
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
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/Util/Util.ts
var Util_exports = {};
__export(Util_exports, {
  addEventListenerWithRemover: () => addEventListenerWithRemover,
  changeOpacityWhenMouseEnterOrLeave: () => changeOpacityWhenMouseEnterOrLeave,
  checkA11yConfirmKey: () => checkA11yConfirmKey,
  delay: () => delay,
  generateArray: () => generateArray,
  generateSvgDataUrl: () => generateSvgDataUrl,
  getBody: () => getBody,
  getWpSummaryContent: () => getWpSummaryContent,
  getWpTextbox1Content: () => getWpTextbox1Content,
  initMwApi: () => initMwApi,
  isValidKey: () => isValidKey,
  oouiConfirmWithStyle: () => oouiConfirmWithStyle,
  scrollTop: () => scrollTop,
  setWpSummaryContent: () => setWpSummaryContent,
  setWpTextbox1Content: () => setWpTextbox1Content,
  uniqueArray: () => uniqueArray,
  userIsInGroup: () => userIsInGroup
});
module.exports = __toCommonJS(Util_exports);
//! src/Util/modules/addEventListenerWithRemover.ts
var addEventListenerWithRemover = ({
  target,
  type,
  listener,
  options = {}
}) => {
  target.addEventListener(type, listener, options);
  return {
    remove: () => {
      target.removeEventListener(type, listener, options);
    }
  };
};
//! src/Util/modules/changeOpacityWhenMouseEnterOrLeave.ts
var changeOpacityWhenMouseEnterOrLeave = (event, opacity = 0.7) => {
  event.currentTarget.style.opacity = event.type === "mouseenter" ? "1" : opacity.toString();
};
//! src/Util/modules/checkA11yConfirmKey.ts
var checkA11yConfirmKey = (event) => {
  if (["click", "keydown"].includes(event.type)) {
    if (event.type === "keydown") {
      return ["Enter", " "].includes(event.key);
    }
    return true;
  }
  return false;
};
//! src/Util/modules/delay.ts
var delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
//! src/Util/modules/generateArray.ts
function generateArray(...args) {
  return args.flatMap((arg) => {
    if (Array.isArray(arg)) {
      return arg;
    }
    if (arg instanceof NodeList) {
      return [...arg];
    }
    return [arg];
  });
}
//! src/Util/modules/generateSvgDataUrl.ts
var generateSvgDataUrl = (svg) => {
  /*!
   * SPDX-License-Identifier: MIT
   *
   * @file svg-to-data-uri.js {@link https://github.com/heyallan/svg-to-data-uri/}
   *
   * @author Allan Moreno
   * @license MIT {@link https://github.com/heyallan/svg-to-data-uri/blob/master/LICENSE}
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  svg = svg.trim();
  svg = svg.slice(svg.indexOf("<svg"));
  if (!svg.startsWith("<svg") || !svg.endsWith("svg>")) {
    return "";
  }
  if (!svg.includes("http://www.w3.org/2000/svg")) {
    svg = svg.replace(/<svg/g, "<svg xmlns='http://www.w3.org/2000/svg'");
  }
  svg = svg.replace(/<!--.{1,}-->/g, "");
  svg = svg.replace(/version=["'](.{0,}?)["'](?=[\s>])/g, "");
  svg = svg.replace(/"'(.{1,})'"/g, "'$1'");
  svg = svg.replace(/"/g, "'");
  svg = svg.replace(/>\s{1,}</g, "><");
  svg = svg.replace(/\s{2,}/g, " ");
  svg = svg.trim();
  if (!svg.startsWith("<svg") || !svg.endsWith("svg>")) {
    return "";
  }
  svg = svg.replace(/&/g, "&amp;");
  svg = svg.replace(/[%#<>?[\\\]^`{|}]/g, encodeURIComponent);
  svg = "data:image/svg+xml,".concat(svg);
  return svg;
};
//! src/Util/modules/getBody.ts
var getBody = () => {
  return $.ready.then(() => {
    const $body = $("body");
    return $body;
  });
};
//! src/Util/modules/initMwApi.ts
function initMwApi(userAgent, apiUri) {
  const apiOptions = {
    ajax: {
      headers: {
        "Api-User-Agent": userAgent ? "YsArchives/1.1 (".concat(userAgent, ")") : "YsArchives/1.1"
      }
    }
  };
  if (apiUri) {
    return new mw.ForeignApi(apiUri, apiOptions);
  }
  return new mw.Api(apiOptions);
}
//! src/Util/modules/isValidKey.ts
var isValidKey = (object, key) => {
  return key in object;
};
//! src/Util/modules/oouiConfirmWithStyle.tsx
var import_ext_gadget = __toESM(require("ext.gadget.React"), 1);
var oouiConfirmWithStyle = (message) => OO.ui.confirm($(/* @__PURE__ */ import_ext_gadget.default.createElement("div", {
  className: "oo-ui-window-foot",
  style: {
    border: ".1rem solid #0645ad",
    display: "flex",
    justifyContent: "space-evenly"
  }
}, /* @__PURE__ */ import_ext_gadget.default.createElement("span", {
  style: {
    fontSize: "1.2rem",
    fontWeight: "500",
    lineHeight: "1.8",
    padding: ".4em 0"
  }
}, message)))).then((isConfirm) => isConfirm);
//! src/Util/modules/scrollTop.ts
var scrollTop = (targetHeight, effectsOptionsOrDuration = {}) => {
  const options = typeof effectsOptionsOrDuration === "number" || typeof effectsOptionsOrDuration === "string" ? {
    duration: effectsOptionsOrDuration,
    easing: "linear"
  } : {
    duration: "slow",
    easing: "linear",
    ...effectsOptionsOrDuration
  };
  $(document).find("html, body").animate({
    scrollTop: targetHeight
  }, options);
};
//! src/Util/modules/userIsInGroup.ts
var userIsInGroup = (groups) => {
  const {
    wgUserGroups,
    wgGlobalGroups
  } = mw.config.get();
  return [...wgUserGroups || [], ...wgGlobalGroups || []].some((element) => {
    return generateArray(groups).includes(element);
  });
};
//! src/Util/modules/uniqueArray.ts
var uniqueArray = function uniqueArray2(args) {
  /**
   * @see {@link https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array/922982}
   * @license CC-BY-SA-4.0
   */
  const result = [];
  var _iterator2 = _createForOfIteratorHelper(args), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const item = _step2.value;
      if (!result.includes(item)) {
        result[result.length] = item;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return result;
};
//! src/Util/modules/wpSummaryContent.ts
var getWpSummaryContent = ({
  $editForm
}) => {
  var _$editForm$find$val, _$editForm$find;
  return (_$editForm$find$val = (_$editForm$find = $editForm.find("#wpSummary")) === null || _$editForm$find === void 0 ? void 0 : _$editForm$find.val()) !== null && _$editForm$find$val !== void 0 ? _$editForm$find$val : "";
};
var setWpSummaryContent = ({
  $editForm,
  content
}) => {
  $editForm.find("#wpSummary").val(content);
};
//! src/Util/modules/wpTextbox1Content.ts
var getWpTextbox1Content = ({
  $editForm
}) => {
  var _$editForm$find$textS;
  return (_$editForm$find$textS = $editForm.find("#wpTextbox1").textSelection("getContents")) !== null && _$editForm$find$textS !== void 0 ? _$editForm$find$textS : "";
};
var setWpTextbox1Content = ({
  $editForm,
  content
}) => {
  $editForm.find("#wpTextbox1").textSelection("setContents", content);
};

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1V0aWwvVXRpbC50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2FkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3Zlci50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9jaGVja0ExMXlDb25maXJtS2V5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvZGVsYXkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9nZW5lcmF0ZUFycmF5LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvZ2VuZXJhdGVTdmdEYXRhVXJsLnRzIiwgInNyYy9VdGlsL21vZHVsZXMvZ2V0Qm9keS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2luaXRNd0FwaS50cyIsICJzcmMvVXRpbC9tb2R1bGVzL2lzVmFsaWRLZXkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy9vb3VpQ29uZmlybVdpdGhTdHlsZS50c3giLCAic3JjL1V0aWwvbW9kdWxlcy9zY3JvbGxUb3AudHMiLCAic3JjL1V0aWwvbW9kdWxlcy91c2VySXNJbkdyb3VwLnRzIiwgInNyYy9VdGlsL21vZHVsZXMvdW5pcXVlQXJyYXkudHMiLCAic3JjL1V0aWwvbW9kdWxlcy93cFN1bW1hcnlDb250ZW50LnRzIiwgInNyYy9VdGlsL21vZHVsZXMvd3BUZXh0Ym94MUNvbnRlbnQudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCB7YWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyfSBmcm9tICcuL21vZHVsZXMvYWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyJztcbmV4cG9ydCB7Y2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZX0gZnJvbSAnLi9tb2R1bGVzL2NoYW5nZU9wYWNpdHlXaGVuTW91c2VFbnRlck9yTGVhdmUnO1xuZXhwb3J0IHtjaGVja0ExMXlDb25maXJtS2V5fSBmcm9tICcuL21vZHVsZXMvY2hlY2tBMTF5Q29uZmlybUtleSc7XG5leHBvcnQge2RlbGF5fSBmcm9tICcuL21vZHVsZXMvZGVsYXknO1xuZXhwb3J0IHtnZW5lcmF0ZUFycmF5fSBmcm9tICcuL21vZHVsZXMvZ2VuZXJhdGVBcnJheSc7XG5leHBvcnQge2dlbmVyYXRlU3ZnRGF0YVVybH0gZnJvbSAnLi9tb2R1bGVzL2dlbmVyYXRlU3ZnRGF0YVVybCc7XG5leHBvcnQge2dldEJvZHl9IGZyb20gJy4vbW9kdWxlcy9nZXRCb2R5JztcbmV4cG9ydCB7aW5pdE13QXBpfSBmcm9tICcuL21vZHVsZXMvaW5pdE13QXBpJztcbmV4cG9ydCB7aXNWYWxpZEtleX0gZnJvbSAnLi9tb2R1bGVzL2lzVmFsaWRLZXknO1xuZXhwb3J0IHtvb3VpQ29uZmlybVdpdGhTdHlsZX0gZnJvbSAnLi9tb2R1bGVzL29vdWlDb25maXJtV2l0aFN0eWxlJztcbmV4cG9ydCB7c2Nyb2xsVG9wfSBmcm9tICcuL21vZHVsZXMvc2Nyb2xsVG9wJztcbmV4cG9ydCB7dXNlcklzSW5Hcm91cH0gZnJvbSAnLi9tb2R1bGVzL3VzZXJJc0luR3JvdXAnO1xuZXhwb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnLi9tb2R1bGVzL3VuaXF1ZUFycmF5JztcbmV4cG9ydCB7Z2V0V3BTdW1tYXJ5Q29udGVudCwgc2V0V3BTdW1tYXJ5Q29udGVudH0gZnJvbSAnLi9tb2R1bGVzL3dwU3VtbWFyeUNvbnRlbnQnO1xuZXhwb3J0IHtnZXRXcFRleHRib3gxQ29udGVudCwgc2V0V3BUZXh0Ym94MUNvbnRlbnR9IGZyb20gJy4vbW9kdWxlcy93cFRleHRib3gxQ29udGVudCc7XG4iLCAidHlwZSBBZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIgPSA8XG5cdFRhcmdldCBleHRlbmRzIERvY3VtZW50IHwgSFRNTEVsZW1lbnQgfCBFbGVtZW50IHwgTWVkaWFRdWVyeUxpc3QgfCBXaW5kb3csXG5cdFR5cGUgZXh0ZW5kcyBUYXJnZXQgZXh0ZW5kcyBEb2N1bWVudFxuXHRcdD8ga2V5b2YgRG9jdW1lbnRFdmVudE1hcFxuXHRcdDogVGFyZ2V0IGV4dGVuZHMgSFRNTEVsZW1lbnRcblx0XHRcdD8ga2V5b2YgSFRNTEVsZW1lbnRFdmVudE1hcFxuXHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBNZWRpYVF1ZXJ5TGlzdFxuXHRcdFx0XHQ/IGtleW9mIE1lZGlhUXVlcnlMaXN0RXZlbnRNYXBcblx0XHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBXaW5kb3dcblx0XHRcdFx0XHQ/IGtleW9mIFdpbmRvd0V2ZW50TWFwXG5cdFx0XHRcdFx0OiBrZXlvZiBHbG9iYWxFdmVudEhhbmRsZXJzRXZlbnRNYXAsXG5cdExpc3RlbmVyIGV4dGVuZHMgVGFyZ2V0IGV4dGVuZHMgRG9jdW1lbnRcblx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBEb2N1bWVudEV2ZW50TWFwXG5cdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBEb2N1bWVudEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdDogVGFyZ2V0IGV4dGVuZHMgSFRNTEVsZW1lbnRcblx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50RXZlbnRNYXBcblx0XHRcdFx0PyAodGhpczogVGFyZ2V0LCBldmVudDogSFRNTEVsZW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0OiBUYXJnZXQgZXh0ZW5kcyBFbGVtZW50XG5cdFx0XHRcdD8gVHlwZSBleHRlbmRzIGtleW9mIEVsZW1lbnRFdmVudE1hcFxuXHRcdFx0XHRcdD8gKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEVsZW1lbnRFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdDogKHRoaXM6IFRhcmdldCwgZXZlbnQ6IEV2ZW50KSA9PiB1bmtub3duXG5cdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgTWVkaWFRdWVyeUxpc3Rcblx0XHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwXG5cdFx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBNZWRpYVF1ZXJ5TGlzdEV2ZW50TWFwW1R5cGVdKSA9PiB1bmtub3duXG5cdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHRcdDogVGFyZ2V0IGV4dGVuZHMgV2luZG93XG5cdFx0XHRcdFx0XHQ/IFR5cGUgZXh0ZW5kcyBrZXlvZiBXaW5kb3dFdmVudE1hcFxuXHRcdFx0XHRcdFx0XHQ/ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBXaW5kb3dFdmVudE1hcFtUeXBlXSkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0XHQ6ICh0aGlzOiBUYXJnZXQsIGV2ZW50OiBFdmVudCkgPT4gdW5rbm93blxuXHRcdFx0XHRcdFx0OiAodGhpczogVGFyZ2V0LCBldmVudDogRXZlbnQpID0+IHVua25vd24sXG4+KHtcblx0dGFyZ2V0LFxuXHR0eXBlLFxuXHRsaXN0ZW5lcixcblx0b3B0aW9ucyxcbn06IHtcblx0dGFyZ2V0OiBUYXJnZXQ7XG5cdHR5cGU6IFR5cGU7XG5cdGxpc3RlbmVyOiBMaXN0ZW5lcjtcblx0b3B0aW9ucz86IEFkZEV2ZW50TGlzdGVuZXJPcHRpb25zO1xufSkgPT4ge1xuXHRyZW1vdmU6ICgpID0+IHZvaWQ7XG59O1xuXG5jb25zdCBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXI6IEFkZEV2ZW50TGlzdGVuZXJXaXRoUmVtb3ZlciA9ICh7dGFyZ2V0LCB0eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyA9IHt9fSkgPT4ge1xuXHR0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lciBhcyBFdmVudExpc3RlbmVyT3JFdmVudExpc3RlbmVyT2JqZWN0LCBvcHRpb25zKTtcblx0cmV0dXJuIHtcblx0XHRyZW1vdmU6ICgpOiB2b2lkID0+IHtcblx0XHRcdHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyIGFzIEV2ZW50TGlzdGVuZXJPckV2ZW50TGlzdGVuZXJPYmplY3QsIG9wdGlvbnMpO1xuXHRcdH0sXG5cdH07XG59O1xuXG5leHBvcnQge3R5cGUgQWRkRXZlbnRMaXN0ZW5lcldpdGhSZW1vdmVyLCBhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXJ9O1xuIiwgInR5cGUgQ2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSA9IChldmVudDogTW91c2VFdmVudCB8IEpRdWVyeS5UcmlnZ2VyZWRFdmVudCwgb3BhY2l0eT86IG51bWJlcikgPT4gdm9pZDtcblxuY29uc3QgY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZTogQ2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSA9IChldmVudCwgb3BhY2l0eSA9IDAuNykgPT4ge1xuXHQoZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MRWxlbWVudCkuc3R5bGUub3BhY2l0eSA9IGV2ZW50LnR5cGUgPT09ICdtb3VzZWVudGVyJyA/ICcxJyA6IG9wYWNpdHkudG9TdHJpbmcoKTtcbn07XG5cbmV4cG9ydCB7dHlwZSBDaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlLCBjaGFuZ2VPcGFjaXR5V2hlbk1vdXNlRW50ZXJPckxlYXZlfTtcbiIsICJ0eXBlIENoZWNrQTExeUNvbmZpcm1LZXkgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQgfCBNb3VzZUV2ZW50IHwgSlF1ZXJ5LkNsaWNrRXZlbnQgfCBKUXVlcnkuS2V5RG93bkV2ZW50KSA9PiBib29sZWFuO1xuXG5jb25zdCBjaGVja0ExMXlDb25maXJtS2V5OiBDaGVja0ExMXlDb25maXJtS2V5ID0gKGV2ZW50KTogYm9vbGVhbiA9PiB7XG5cdGlmIChbJ2NsaWNrJywgJ2tleWRvd24nXS5pbmNsdWRlcyhldmVudC50eXBlKSkge1xuXHRcdGlmIChldmVudC50eXBlID09PSAna2V5ZG93bicpIHtcblx0XHRcdHJldHVybiBbJ0VudGVyJywgJyAnXS5pbmNsdWRlcygoZXZlbnQgYXMgS2V5Ym9hcmRFdmVudCkua2V5KTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IHt0eXBlIENoZWNrQTExeUNvbmZpcm1LZXksIGNoZWNrQTExeUNvbmZpcm1LZXl9O1xuIiwgInR5cGUgRGVsYXkgPSAobXM6IG51bWJlcikgPT4gUHJvbWlzZTx2b2lkPjtcblxuY29uc3QgZGVsYXk6IERlbGF5ID0gKG1zKSA9PiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZTogKCkgPT4gdm9pZCk6IHZvaWQgPT4ge1xuXHRcdHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7dHlwZSBEZWxheSwgZGVsYXl9O1xuIiwgInR5cGUgR2VuZXJhdGVBcnJheSA9IHR5cGVvZiBnZW5lcmF0ZUFycmF5O1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQgZXh0ZW5kcyBbXT4oLi4uYXJnczogKFQgfCBUW10pW10pOiBUW107XG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQgZXh0ZW5kcyBOb2RlTGlzdD4oLi4uYXJnczogKFQgfCBUW10pW10pOiBOb2RlW107XG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQgPSB1bmtub3duPiguLi5hcmdzOiAoVCB8IFRbXSlbXSk6IFRbXTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLXN0eWxlXG5mdW5jdGlvbiBnZW5lcmF0ZUFycmF5PFQ+KC4uLmFyZ3M6IChUIHwgVFtdKVtdKTogVFtdIHtcblx0cmV0dXJuIGFyZ3MuZmxhdE1hcCgoYXJnKSA9PiB7XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0cmV0dXJuIGFyZztcblx0XHR9XG5cblx0XHRpZiAoYXJnIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcblx0XHRcdHJldHVybiBbLi4uYXJnXSBhcyBUO1xuXHRcdH1cblxuXHRcdHJldHVybiBbYXJnXTtcblx0fSk7XG59XG5cbmV4cG9ydCB7dHlwZSBHZW5lcmF0ZUFycmF5LCBnZW5lcmF0ZUFycmF5fTtcbiIsICJ0eXBlIEdlbmVyYXRlU3ZnRGF0YVVybCA9IChzdmc6IHN0cmluZykgPT4gc3RyaW5nO1xuXG5jb25zdCBnZW5lcmF0ZVN2Z0RhdGFVcmw6IEdlbmVyYXRlU3ZnRGF0YVVybCA9IChzdmcpID0+IHtcblx0LyohXG5cdCAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBNSVRcblx0ICpcblx0ICogQGZpbGUgc3ZnLXRvLWRhdGEtdXJpLmpzIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vaGV5YWxsYW4vc3ZnLXRvLWRhdGEtdXJpL31cblx0ICpcblx0ICogQGF1dGhvciBBbGxhbiBNb3Jlbm9cblx0ICogQGxpY2Vuc2UgTUlUIHtAbGluayBodHRwczovL2dpdGh1Yi5jb20vaGV5YWxsYW4vc3ZnLXRvLWRhdGEtdXJpL2Jsb2IvbWFzdGVyL0xJQ0VOU0V9XG5cdCAqXG5cdCAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcblx0ICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHQgKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdCAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcblx0ICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdCAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cdCAqXG5cdCAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHQgKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXHQgKlxuXHQgKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdCAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHQgKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcblx0ICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHQgKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHQgKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuXHQgKiBTT0ZUV0FSRS5cblx0ICovXG5cdHN2ZyA9IHN2Zy50cmltKCk7XG5cdC8vIHJlbW92ZSB4bWwsIGRvY3R5cGUsIGdlbmVyYXRvci4uLlxuXHRzdmcgPSBzdmcuc2xpY2Uoc3ZnLmluZGV4T2YoJzxzdmcnKSk7XG5cdC8vIHNvZnQgdmFsaWRhdGVcblx0aWYgKCFzdmcuc3RhcnRzV2l0aCgnPHN2ZycpIHx8ICFzdmcuZW5kc1dpdGgoJ3N2Zz4nKSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHQvLyBhZGQgbmFtZXNwYWNlIGlmIG5lY2Vzc2FyeVxuXHRpZiAoIXN2Zy5pbmNsdWRlcygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKSkge1xuXHRcdHN2ZyA9IHN2Zy5yZXBsYWNlKC88c3ZnL2csIFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXCIpO1xuXHR9XG5cdC8vIHJlbW92ZSBjb21tZW50c1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvPCEtLS57MSx9LS0+L2csICcnKTtcblx0Ly8gcmVtb3ZlIHVubmVjZXNzYXJ5IGF0dHJpYnV0ZXNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL3ZlcnNpb249W1wiJ10oLnswLH0/KVtcIiddKD89W1xccz5dKS9nLCAnJyk7XG5cdC8vIHJlcGxhY2UgbmVzdGVkIHF1b3Rlc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvXCInKC57MSx9KSdcIi9nLCBcIickMSdcIik7XG5cdC8vIHJlcGxhY2UgZG91YmxlIHF1b3Rlc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvXCIvZywgXCInXCIpO1xuXHQvLyByZW1vdmUgZW1wdHkgc3BhY2VzIGJldHdlZW4gdGFnc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvPlxcc3sxLH08L2csICc+PCcpO1xuXHQvLyByZW1vdmUgZHVwbGljYXRlIHNwYWNlc1xuXHRzdmcgPSBzdmcucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpO1xuXHQvLyB0cmltIGFnYWluXG5cdHN2ZyA9IHN2Zy50cmltKCk7XG5cdC8vIHNvZnQgdmFsaWRhdGUgYWdhaW5cblx0aWYgKCFzdmcuc3RhcnRzV2l0aCgnPHN2ZycpIHx8ICFzdmcuZW5kc1dpdGgoJ3N2Zz4nKSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHQvLyByZXBsYWNlIGFtcGVyc2FuZFxuXHRzdmcgPSBzdmcucmVwbGFjZSgvJi9nLCAnJmFtcDsnKTtcblx0Ly8gZW5jb2RlIG9ubHkgdW5zYWZlIHN5bWJvbHNcblx0c3ZnID0gc3ZnLnJlcGxhY2UoL1slIzw+P1tcXFxcXFxdXmB7fH1dL2csIGVuY29kZVVSSUNvbXBvbmVudCk7XG5cdC8vIGJ1aWxkIGRhdGEgdXJpXG5cdHN2ZyA9IGBkYXRhOmltYWdlL3N2Zyt4bWwsJHtzdmd9YDtcblx0Ly8gb2ssIHNoaXAgaXQhXG5cdHJldHVybiBzdmc7XG59O1xuXG5leHBvcnQge3R5cGUgR2VuZXJhdGVTdmdEYXRhVXJsLCBnZW5lcmF0ZVN2Z0RhdGFVcmx9O1xuIiwgInR5cGUgR2V0Qm9keSA9ICgpID0+IEpRdWVyeS5UaGVuYWJsZTxKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pj47XG5cbmNvbnN0IGdldEJvZHkgPSAoKSA9PiB7XG5cdHJldHVybiAkLnJlYWR5LnRoZW4oKCk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0+IHtcblx0XHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSAkKCdib2R5Jyk7XG5cblx0XHRyZXR1cm4gJGJvZHk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHt0eXBlIEdldEJvZHksIGdldEJvZHl9O1xuIiwgInR5cGUgSW5pdE13QXBpID0gdHlwZW9mIGluaXRNd0FwaTtcblxuLyoqXG4gKiBAcmVxdWlyZXMgbWVkaWF3aWtpLmFwaVxuICogQHBhcmFtIHtzdHJpbmd9IFt1c2VyQWdlbnRdXG4gKiBAcGFyYW0ge3N0cmluZ30gW2FwaVVyaV1cbiAqIEByZXR1cm4ge213LkFwaXxtdy5Gb3JlaWduQXBpfVxuICovXG5mdW5jdGlvbiBpbml0TXdBcGkodXNlckFnZW50Pzogc3RyaW5nKTogbXcuQXBpO1xuZnVuY3Rpb24gaW5pdE13QXBpKHVzZXJBZ2VudDogc3RyaW5nLCBhcGlVcmk6IHN0cmluZyk6IG13LkZvcmVpZ25BcGk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1zdHlsZVxuZnVuY3Rpb24gaW5pdE13QXBpKHVzZXJBZ2VudD86IHN0cmluZywgYXBpVXJpPzogc3RyaW5nKTogbXcuQXBpIHwgbXcuRm9yZWlnbkFwaSB7XG5cdGNvbnN0IGFwaU9wdGlvbnMgPSB7XG5cdFx0YWpheDoge1xuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQXBpLVVzZXItQWdlbnQnOiB1c2VyQWdlbnQgPyBgWXNBcmNoaXZlcy8xLjEgKCR7dXNlckFnZW50fSlgIDogJ1lzQXJjaGl2ZXMvMS4xJyxcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblxuXHRpZiAoYXBpVXJpKSB7XG5cdFx0cmV0dXJuIG5ldyBtdy5Gb3JlaWduQXBpKGFwaVVyaSwgYXBpT3B0aW9ucyk7XG5cdH1cblxuXHRyZXR1cm4gbmV3IG13LkFwaShhcGlPcHRpb25zKTtcbn1cblxuZXhwb3J0IHt0eXBlIEluaXRNd0FwaSwgaW5pdE13QXBpfTtcbiIsICJ0eXBlIElzVmFsaWRLZXkgPSB0eXBlb2YgaXNWYWxpZEtleTtcblxuY29uc3QgaXNWYWxpZEtleSA9IChvYmplY3Q6IG9iamVjdCwga2V5OiBzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wpOiBrZXkgaXMga2V5b2YgdHlwZW9mIG9iamVjdCA9PiB7XG5cdHJldHVybiBrZXkgaW4gb2JqZWN0O1xufTtcblxuZXhwb3J0IHt0eXBlIElzVmFsaWRLZXksIGlzVmFsaWRLZXl9O1xuIiwgImltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcblxudHlwZSBPb3VpQ29uZmlybVdpdGhTdHlsZSA9IChtZXNzYWdlOiBzdHJpbmcpID0+IEpRdWVyeS5Qcm9taXNlPGJvb2xlYW4+O1xuXG4vKipcbiAqIEByZXF1aXJlcyBvb2pzLXVpLXdpbmRvd3NcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbWVzc2FnZV1cbiAqIEByZXR1cm4ge0pRdWVyeS5Qcm9taXNlPGJvb2xlYW4+fVxuICovXG5jb25zdCBvb3VpQ29uZmlybVdpdGhTdHlsZTogT291aUNvbmZpcm1XaXRoU3R5bGUgPSAobWVzc2FnZSkgPT5cblx0T08udWlcblx0XHQuY29uZmlybShcblx0XHRcdCQoXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJvby11aS13aW5kb3ctZm9vdFwiXG5cdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdGJvcmRlcjogJy4xcmVtIHNvbGlkICMwNjQ1YWQnLFxuXHRcdFx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxuXHRcdFx0XHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1ldmVubHknLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0Zm9udFNpemU6ICcxLjJyZW0nLFxuXHRcdFx0XHRcdFx0XHRmb250V2VpZ2h0OiAnNTAwJyxcblx0XHRcdFx0XHRcdFx0bGluZUhlaWdodDogJzEuOCcsXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6ICcuNGVtIDAnLFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7bWVzc2FnZX1cblx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSBhcyBKUXVlcnlcblx0XHQpXG5cdFx0LnRoZW4oKGlzQ29uZmlybTogYm9vbGVhbik6IGJvb2xlYW4gPT4gaXNDb25maXJtKTtcblxuZXhwb3J0IHt0eXBlIE9vdWlDb25maXJtV2l0aFN0eWxlLCBvb3VpQ29uZmlybVdpdGhTdHlsZX07XG4iLCAidHlwZSBTY3JvbGxUb3AgPSAoXG5cdHRhcmdldEhlaWdodDogbnVtYmVyIHwgc3RyaW5nLFxuXHRlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24/OiBKUXVlcnkuRWZmZWN0c09wdGlvbnM8SFRNTEVsZW1lbnQ+IHwgbnVtYmVyIHwgJ2Zhc3QnIHwgJ3Nsb3cnXG4pID0+IHZvaWQ7XG5cbmNvbnN0IHNjcm9sbFRvcDogU2Nyb2xsVG9wID0gKHRhcmdldEhlaWdodCwgZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uID0ge30pID0+IHtcblx0Y29uc3Qgb3B0aW9uczogSlF1ZXJ5LkVmZmVjdHNPcHRpb25zPEhUTUxFbGVtZW50PiA9XG5cdFx0dHlwZW9mIGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbiA9PT0gJ251bWJlcicgfHwgdHlwZW9mIGVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbiA9PT0gJ3N0cmluZydcblx0XHRcdD8ge1xuXHRcdFx0XHRcdGR1cmF0aW9uOiBlZmZlY3RzT3B0aW9uc09yRHVyYXRpb24sXG5cdFx0XHRcdFx0ZWFzaW5nOiAnbGluZWFyJyxcblx0XHRcdFx0fVxuXHRcdFx0OiB7XG5cdFx0XHRcdFx0ZHVyYXRpb246ICdzbG93Jyxcblx0XHRcdFx0XHRlYXNpbmc6ICdsaW5lYXInLFxuXHRcdFx0XHRcdC4uLmVmZmVjdHNPcHRpb25zT3JEdXJhdGlvbixcblx0XHRcdFx0fTtcblx0JChkb2N1bWVudCkuZmluZCgnaHRtbCwgYm9keScpLmFuaW1hdGUoXG5cdFx0e1xuXHRcdFx0c2Nyb2xsVG9wOiB0YXJnZXRIZWlnaHQsXG5cdFx0fSxcblx0XHRvcHRpb25zXG5cdCk7XG59O1xuXG5leHBvcnQge3R5cGUgU2Nyb2xsVG9wLCBzY3JvbGxUb3B9O1xuIiwgImltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnLi9nZW5lcmF0ZUFycmF5JztcblxudHlwZSBVc2VySXNJbkdyb3VwID0gdHlwZW9mIHVzZXJJc0luR3JvdXA7XG5cbmNvbnN0IHVzZXJJc0luR3JvdXAgPSAoZ3JvdXBzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCB7d2dVc2VyR3JvdXBzLCB3Z0dsb2JhbEdyb3Vwc30gPSBtdy5jb25maWcuZ2V0KCk7XG5cdHJldHVybiBbLi4uKHdnVXNlckdyb3VwcyB8fCBbXSksIC4uLigod2dHbG9iYWxHcm91cHMgYXMgc3RyaW5nW10pIHx8IFtdKV0uc29tZSgoZWxlbWVudDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdFx0cmV0dXJuIGdlbmVyYXRlQXJyYXkoZ3JvdXBzKS5pbmNsdWRlcyhlbGVtZW50KTtcblx0fSk7XG59O1xuXG5leHBvcnQge3R5cGUgVXNlcklzSW5Hcm91cCwgdXNlcklzSW5Hcm91cH07XG4iLCAidHlwZSBVbmlxdWVBcnJheSA9IHR5cGVvZiB1bmlxdWVBcnJheTtcblxuY29uc3QgdW5pcXVlQXJyYXkgPSBmdW5jdGlvbiB1bmlxdWVBcnJheTxUPihhcmdzOiBUW10pOiBUW10ge1xuXHQvKipcblx0ICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvOTIyOTY0NS9yZW1vdmUtZHVwbGljYXRlLXZhbHVlcy1mcm9tLWpzLWFycmF5LzkyMjk4Mn1cblx0ICogQGxpY2Vuc2UgQ0MtQlktU0EtNC4wXG5cdCAqL1xuXHRjb25zdCByZXN1bHQ6IHR5cGVvZiBhcmdzID0gW107XG5cdGZvciAoY29uc3QgaXRlbSBvZiBhcmdzKSB7XG5cdFx0aWYgKCFyZXN1bHQuaW5jbHVkZXMoaXRlbSkpIHtcblx0XHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGl0ZW07IC8vIFJlcGxhY2UgYFtdLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IHt0eXBlIFVuaXF1ZUFycmF5LCB1bmlxdWVBcnJheX07XG4iLCAidHlwZSBHZXRXcFN1bW1hcnlDb250ZW50ID0gdHlwZW9mIGdldFdwU3VtbWFyeUNvbnRlbnQ7XG50eXBlIFNldFdwU3VtbWFyeUNvbnRlbnQgPSB0eXBlb2Ygc2V0V3BTdW1tYXJ5Q29udGVudDtcblxuY29uc3QgZ2V0V3BTdW1tYXJ5Q29udGVudCA9ICh7JGVkaXRGb3JtfTogeyRlZGl0Rm9ybTogSlF1ZXJ5PEhUTUxFbGVtZW50Pn0pOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gJGVkaXRGb3JtLmZpbmQ8SFRNTElucHV0RWxlbWVudD4oJyN3cFN1bW1hcnknKT8udmFsKCkgPz8gJyc7XG59O1xuXG5jb25zdCBzZXRXcFN1bW1hcnlDb250ZW50ID0gKHskZWRpdEZvcm0sIGNvbnRlbnR9OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+OyBjb250ZW50OiBzdHJpbmd9KTogdm9pZCA9PiB7XG5cdCRlZGl0Rm9ybS5maW5kPEhUTUxJbnB1dEVsZW1lbnQ+KCcjd3BTdW1tYXJ5JykudmFsKGNvbnRlbnQpO1xufTtcblxuZXhwb3J0IHtnZXRXcFN1bW1hcnlDb250ZW50LCB0eXBlIEdldFdwU3VtbWFyeUNvbnRlbnQsIHNldFdwU3VtbWFyeUNvbnRlbnQsIHR5cGUgU2V0V3BTdW1tYXJ5Q29udGVudH07XG4iLCAidHlwZSBHZXRXcFRleHRib3gxQ29udGVudCA9IHR5cGVvZiBnZXRXcFRleHRib3gxQ29udGVudDtcbnR5cGUgU2V0V3BUZXh0Ym94MUNvbnRlbnQgPSB0eXBlb2Ygc2V0V3BUZXh0Ym94MUNvbnRlbnQ7XG5cbmNvbnN0IGdldFdwVGV4dGJveDFDb250ZW50ID0gKHskZWRpdEZvcm19OiB7JGVkaXRGb3JtOiBKUXVlcnk8SFRNTEVsZW1lbnQ+fSk6IHN0cmluZyA9PiB7XG5cdHJldHVybiAkZWRpdEZvcm0uZmluZDxIVE1MVGV4dEFyZWFFbGVtZW50PignI3dwVGV4dGJveDEnKS50ZXh0U2VsZWN0aW9uKCdnZXRDb250ZW50cycpID8/ICcnO1xufTtcblxuY29uc3Qgc2V0V3BUZXh0Ym94MUNvbnRlbnQgPSAoeyRlZGl0Rm9ybSwgY29udGVudH06IHskZWRpdEZvcm06IEpRdWVyeTxIVE1MRWxlbWVudD47IGNvbnRlbnQ6IHN0cmluZ30pOiB2b2lkID0+IHtcblx0JGVkaXRGb3JtLmZpbmQ8SFRNTFRleHRBcmVhRWxlbWVudD4oJyN3cFRleHRib3gxJykudGV4dFNlbGVjdGlvbignc2V0Q29udGVudHMnLCBjb250ZW50KTtcbn07XG5cbmV4cG9ydCB7Z2V0V3BUZXh0Ym94MUNvbnRlbnQsIHR5cGUgR2V0V3BUZXh0Ym94MUNvbnRlbnQsIHNldFdwVGV4dGJveDFDb250ZW50LCB0eXBlIFNldFdwVGV4dGJveDFDb250ZW50fTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNYQSxJQUFNNUYsc0JBQXNCQSxDQUFDO0VBQUN5RztBQUFTLE1BQWdEO0FBQUEsTUFBQUMscUJBQUFDO0FBQ3RGLFVBQUFELHVCQUFBQyxrQkFBT0YsVUFBVXZCLEtBQXVCLFlBQVksT0FBQSxRQUFBeUIsb0JBQUEsU0FBQSxTQUE3Q0EsZ0JBQWdEQyxJQUFJLE9BQUEsUUFBQUYsd0JBQUEsU0FBQUEsc0JBQUs7QUFDakU7QUFFQSxJQUFNcEcsc0JBQXNCQSxDQUFDO0VBQUNtRztFQUFXSTtBQUFPLE1BQStEO0FBQzlHSixZQUFVdkIsS0FBdUIsWUFBWSxFQUFFMEIsSUFBSUMsT0FBTztBQUMzRDs7QUNOQSxJQUFNNUcsdUJBQXVCQSxDQUFDO0VBQUN3RztBQUFTLE1BQWdEO0FBQUEsTUFBQUs7QUFDdkYsVUFBQUEsd0JBQU9MLFVBQVV2QixLQUEwQixhQUFhLEVBQUU2QixjQUFjLGFBQWEsT0FBQSxRQUFBRCwwQkFBQSxTQUFBQSx3QkFBSztBQUMzRjtBQUVBLElBQU12Ryx1QkFBdUJBLENBQUM7RUFBQ2tHO0VBQVdJO0FBQU8sTUFBK0Q7QUFDL0dKLFlBQVV2QixLQUEwQixhQUFhLEVBQUU2QixjQUFjLGVBQWVGLE9BQU87QUFDeEY7IiwKICAibmFtZXMiOiBbIlV0aWxfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJhZGRFdmVudExpc3RlbmVyV2l0aFJlbW92ZXIiLCAiY2hhbmdlT3BhY2l0eVdoZW5Nb3VzZUVudGVyT3JMZWF2ZSIsICJjaGVja0ExMXlDb25maXJtS2V5IiwgImRlbGF5IiwgImdlbmVyYXRlQXJyYXkiLCAiZ2VuZXJhdGVTdmdEYXRhVXJsIiwgImdldEJvZHkiLCAiZ2V0V3BTdW1tYXJ5Q29udGVudCIsICJnZXRXcFRleHRib3gxQ29udGVudCIsICJpbml0TXdBcGkiLCAiaXNWYWxpZEtleSIsICJvb3VpQ29uZmlybVdpdGhTdHlsZSIsICJzY3JvbGxUb3AiLCAic2V0V3BTdW1tYXJ5Q29udGVudCIsICJzZXRXcFRleHRib3gxQ29udGVudCIsICJ1bmlxdWVBcnJheSIsICJ1c2VySXNJbkdyb3VwIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJ0YXJnZXQiLCAidHlwZSIsICJsaXN0ZW5lciIsICJvcHRpb25zIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAicmVtb3ZlIiwgInJlbW92ZUV2ZW50TGlzdGVuZXIiLCAiZXZlbnQiLCAib3BhY2l0eSIsICJjdXJyZW50VGFyZ2V0IiwgInN0eWxlIiwgInRvU3RyaW5nIiwgImluY2x1ZGVzIiwgImtleSIsICJtcyIsICJQcm9taXNlIiwgInJlc29sdmUiLCAic2V0VGltZW91dCIsICJhcmdzIiwgImZsYXRNYXAiLCAiYXJnIiwgIkFycmF5IiwgImlzQXJyYXkiLCAiTm9kZUxpc3QiLCAic3ZnIiwgInRyaW0iLCAic2xpY2UiLCAiaW5kZXhPZiIsICJzdGFydHNXaXRoIiwgImVuZHNXaXRoIiwgInJlcGxhY2UiLCAiZW5jb2RlVVJJQ29tcG9uZW50IiwgImNvbmNhdCIsICIkIiwgInJlYWR5IiwgInRoZW4iLCAiJGJvZHkiLCAidXNlckFnZW50IiwgImFwaVVyaSIsICJhcGlPcHRpb25zIiwgImFqYXgiLCAiaGVhZGVycyIsICJtdyIsICJGb3JlaWduQXBpIiwgIkFwaSIsICJvYmplY3QiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgIm1lc3NhZ2UiLCAiT08iLCAidWkiLCAiY29uZmlybSIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgImJvcmRlciIsICJkaXNwbGF5IiwgImp1c3RpZnlDb250ZW50IiwgImZvbnRTaXplIiwgImZvbnRXZWlnaHQiLCAibGluZUhlaWdodCIsICJwYWRkaW5nIiwgImlzQ29uZmlybSIsICJ0YXJnZXRIZWlnaHQiLCAiZWZmZWN0c09wdGlvbnNPckR1cmF0aW9uIiwgImR1cmF0aW9uIiwgImVhc2luZyIsICJkb2N1bWVudCIsICJmaW5kIiwgImFuaW1hdGUiLCAiZ3JvdXBzIiwgIndnVXNlckdyb3VwcyIsICJ3Z0dsb2JhbEdyb3VwcyIsICJjb25maWciLCAiZ2V0IiwgInNvbWUiLCAiZWxlbWVudCIsICJ1bmlxdWVBcnJheTIiLCAicmVzdWx0IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgIml0ZW0iLCAidmFsdWUiLCAibGVuZ3RoIiwgImVyciIsICJlIiwgImYiLCAiJGVkaXRGb3JtIiwgIl8kZWRpdEZvcm0kZmluZCR2YWwiLCAiXyRlZGl0Rm9ybSRmaW5kIiwgInZhbCIsICJjb250ZW50IiwgIl8kZWRpdEZvcm0kZmluZCR0ZXh0UyIsICJ0ZXh0U2VsZWN0aW9uIl0KfQo=
