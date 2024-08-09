/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT}}'
 *
 * @base {@link https://github.com/fregante/filter-altered-clicks}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/FilterAlteredClicks}
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

// dist/FilterAlteredClicks/FilterAlteredClicks.js
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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/FilterAlteredClicks/FilterAlteredClicks.ts
var FilterAlteredClicks_exports = {};
__export(FilterAlteredClicks_exports, {
  filterAlteredClicks: () => filterAlteredClicks
});
module.exports = __toCommonJS(FilterAlteredClicks_exports);
function filterAlteredClicks(callback, onlyPhysical) {
  return function(event) {
    event = event.originalEvent || event;
    if (isAlteredClick(event)) {
      return;
    }
    if (!onlyPhysical && event.defaultPrevented) {
      return;
    }
    return callback.call(this, event);
  };
}
function isAlteredClick(event) {
  event = event.originalEvent || event;
  return event instanceof MouseEvent && event.which > 1 || event.shiftKey || event.altKey || event.metaKey || event.ctrlKey;
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0ZpbHRlckFsdGVyZWRDbGlja3MvRmlsdGVyQWx0ZXJlZENsaWNrcy50cyIsICJub2RlX21vZHVsZXMvLnBucG0vZmlsdGVyLWFsdGVyZWQtY2xpY2tzQDIuMS4xL25vZGVfbW9kdWxlcy9maWx0ZXItYWx0ZXJlZC1jbGlja3MvaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCB7ZGVmYXVsdCBhcyBmaWx0ZXJBbHRlcmVkQ2xpY2tzfSBmcm9tICdmaWx0ZXItYWx0ZXJlZC1jbGlja3MnO1xuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbHRlckFsdGVyZWRDbGlja3MoY2FsbGJhY2ssIG9ubHlQaHlzaWNhbCkge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0ZXZlbnQgPSBldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50OyAvLyBKUXVlcnkgc3VwcG9ydFxuXHRcdGlmIChpc0FsdGVyZWRDbGljayhldmVudCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIW9ubHlQaHlzaWNhbCAmJiBldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNhbGxiYWNrLmNhbGwodGhpcywgZXZlbnQpO1xuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBbHRlcmVkQ2xpY2soZXZlbnQpIHtcblx0ZXZlbnQgPSBldmVudC5vcmlnaW5hbEV2ZW50IHx8IGV2ZW50OyAvLyBKUXVlcnkgc3VwcG9ydFxuXHRyZXR1cm4gKFxuXHRcdChldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQgJiYgZXZlbnQud2hpY2ggPiAxKVxuXHRcdHx8IGV2ZW50LnNoaWZ0S2V5XG5cdFx0fHwgZXZlbnQuYWx0S2V5XG5cdFx0fHwgZXZlbnQubWV0YUtleVxuXHRcdHx8IGV2ZW50LmN0cmxLZXlcblx0KTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsOEJBQUEsQ0FBQTtBQUFBQyxTQUFBRCw2QkFBQTtFQUFBRSxxQkFBQUEsTUFBQUE7QUFBQSxDQUFBO0FBQUFDLE9BQUFDLFVBQUFDLGFBQUFMLDJCQUFBO0FDQWUsU0FBUkUsb0JBQXFDSSxVQUFVQyxjQUFjO0FBQ25FLFNBQU8sU0FBVUMsT0FBTztBQUN2QkEsWUFBUUEsTUFBTUMsaUJBQWlCRDtBQUMvQixRQUFJRSxlQUFlRixLQUFLLEdBQUc7QUFDMUI7SUFDRDtBQUVBLFFBQUksQ0FBQ0QsZ0JBQWdCQyxNQUFNRyxrQkFBa0I7QUFDNUM7SUFDRDtBQUVBLFdBQU9MLFNBQVNNLEtBQUssTUFBTUosS0FBSztFQUNqQztBQUNEO0FBRU8sU0FBU0UsZUFBZUYsT0FBTztBQUNyQ0EsVUFBUUEsTUFBTUMsaUJBQWlCRDtBQUMvQixTQUNFQSxpQkFBaUJLLGNBQWNMLE1BQU1NLFFBQVEsS0FDM0NOLE1BQU1PLFlBQ05QLE1BQU1RLFVBQ05SLE1BQU1TLFdBQ05ULE1BQU1VO0FBRVg7IiwKICAibmFtZXMiOiBbIkZpbHRlckFsdGVyZWRDbGlja3NfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJmaWx0ZXJBbHRlcmVkQ2xpY2tzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJjYWxsYmFjayIsICJvbmx5UGh5c2ljYWwiLCAiZXZlbnQiLCAib3JpZ2luYWxFdmVudCIsICJpc0FsdGVyZWRDbGljayIsICJkZWZhdWx0UHJldmVudGVkIiwgImNhbGwiLCAiTW91c2VFdmVudCIsICJ3aGljaCIsICJzaGlmdEtleSIsICJhbHRLZXkiLCAibWV0YUtleSIsICJjdHJsS2V5Il0KfQo=
