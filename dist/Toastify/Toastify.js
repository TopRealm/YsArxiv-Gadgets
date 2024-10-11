/**
 * SPDX-License-Identifier: MIT
 * _addText: '{{Gadget Header|license=MIT|attribution=2018 apvarun}}'
 *
 * @base {@link https://github.com/apvarun/toastify-js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Toastify}
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

// dist/Toastify/Toastify.js
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
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
    exports: {}
  }).exports, mod), mod.exports;
};
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
var require_toastify = __commonJS({
  "node_modules/.pnpm/toastify-js@1.12.0/node_modules/toastify-js/src/toastify.js"(exports2, module2) {
    /*!
     * Toastify js 1.12.0
     * https://github.com/apvarun/toastify-js
     * @license MIT licensed
     *
     * Copyright (C) 2018 Varun A P
     */
    (function(root, factory) {
      if (typeof module2 === "object" && module2.exports) {
        module2.exports = factory();
      } else {
        root.Toastify = factory();
      }
    })(exports2, function(global) {
      var Toastify2 = function(options) {
        return new Toastify2.lib.init(options);
      }, version = "1.12.0";
      Toastify2.defaults = {
        oldestFirst: true,
        text: "Toastify is awesome!",
        node: void 0,
        duration: 3e3,
        selector: void 0,
        callback: function() {
        },
        destination: void 0,
        newWindow: false,
        close: false,
        gravity: "toastify-top",
        positionLeft: false,
        position: "",
        backgroundColor: "",
        avatar: "",
        className: "",
        stopOnFocus: true,
        onClick: function() {
        },
        offset: {
          x: 0,
          y: 0
        },
        escapeMarkup: true,
        ariaLive: "polite",
        style: {
          background: ""
        }
      };
      Toastify2.lib = Toastify2.prototype = {
        toastify: version,
        constructor: Toastify2,
        // Initializing the object with required parameters
        init: function(options) {
          if (!options) {
            options = {};
          }
          this.options = {};
          this.toastElement = null;
          this.options.text = options.text || Toastify2.defaults.text;
          this.options.node = options.node || Toastify2.defaults.node;
          this.options.duration = options.duration === 0 ? 0 : options.duration || Toastify2.defaults.duration;
          this.options.selector = options.selector || Toastify2.defaults.selector;
          this.options.callback = options.callback || Toastify2.defaults.callback;
          this.options.destination = options.destination || Toastify2.defaults.destination;
          this.options.newWindow = options.newWindow || Toastify2.defaults.newWindow;
          this.options.close = options.close || Toastify2.defaults.close;
          this.options.gravity = options.gravity === "bottom" ? "toastify-bottom" : Toastify2.defaults.gravity;
          this.options.positionLeft = options.positionLeft || Toastify2.defaults.positionLeft;
          this.options.position = options.position || Toastify2.defaults.position;
          this.options.backgroundColor = options.backgroundColor || Toastify2.defaults.backgroundColor;
          this.options.avatar = options.avatar || Toastify2.defaults.avatar;
          this.options.className = options.className || Toastify2.defaults.className;
          this.options.stopOnFocus = options.stopOnFocus === void 0 ? Toastify2.defaults.stopOnFocus : options.stopOnFocus;
          this.options.onClick = options.onClick || Toastify2.defaults.onClick;
          this.options.offset = options.offset || Toastify2.defaults.offset;
          this.options.escapeMarkup = options.escapeMarkup !== void 0 ? options.escapeMarkup : Toastify2.defaults.escapeMarkup;
          this.options.ariaLive = options.ariaLive || Toastify2.defaults.ariaLive;
          this.options.style = options.style || Toastify2.defaults.style;
          if (options.backgroundColor) {
            this.options.style.background = options.backgroundColor;
          }
          return this;
        },
        // Building the DOM element
        buildToast: function() {
          if (!this.options) {
            throw "Toastify is not initialized";
          }
          var divElement = document.createElement("div");
          divElement.className = "toastify on " + this.options.className;
          if (!!this.options.position) {
            divElement.className += " toastify-" + this.options.position;
          } else {
            if (this.options.positionLeft === true) {
              divElement.className += " toastify-left";
              console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.");
            } else {
              divElement.className += " toastify-right";
            }
          }
          divElement.className += " " + this.options.gravity;
          if (this.options.backgroundColor) {
            console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');
          }
          for (var property in this.options.style) {
            divElement.style[property] = this.options.style[property];
          }
          if (this.options.ariaLive) {
            divElement.setAttribute("aria-live", this.options.ariaLive);
          }
          if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) {
            divElement.appendChild(this.options.node);
          } else {
            if (this.options.escapeMarkup) {
              divElement.innerText = this.options.text;
            } else {
              divElement.innerHTML = this.options.text;
            }
            if (this.options.avatar !== "") {
              var avatarElement = document.createElement("img");
              avatarElement.src = this.options.avatar;
              avatarElement.className = "toastify-avatar";
              if (this.options.position == "left" || this.options.positionLeft === true) {
                divElement.appendChild(avatarElement);
              } else {
                divElement.insertAdjacentElement("afterbegin", avatarElement);
              }
            }
          }
          if (this.options.close === true) {
            var closeElement = document.createElement("button");
            closeElement.type = "button";
            closeElement.setAttribute("aria-label", "Close");
            closeElement.className = "toast-close";
            closeElement.innerHTML = "&#10006;";
            closeElement.addEventListener("click", function(event) {
              event.stopPropagation();
              this.removeElement(this.toastElement);
              window.clearTimeout(this.toastElement.timeOutValue);
            }.bind(this));
            var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
            if ((this.options.position == "left" || this.options.positionLeft === true) && width > 360) {
              divElement.insertAdjacentElement("afterbegin", closeElement);
            } else {
              divElement.appendChild(closeElement);
            }
          }
          if (this.options.stopOnFocus && this.options.duration > 0) {
            var self = this;
            divElement.addEventListener("mouseover", function(event) {
              window.clearTimeout(divElement.timeOutValue);
            });
            divElement.addEventListener("mouseleave", function() {
              divElement.timeOutValue = window.setTimeout(function() {
                self.removeElement(divElement);
              }, self.options.duration);
            });
          }
          if (typeof this.options.destination !== "undefined") {
            divElement.addEventListener("click", function(event) {
              event.stopPropagation();
              if (this.options.newWindow === true) {
                window.open(this.options.destination, "_blank");
              } else {
                window.location = this.options.destination;
              }
            }.bind(this));
          }
          if (typeof this.options.onClick === "function" && typeof this.options.destination === "undefined") {
            divElement.addEventListener("click", function(event) {
              event.stopPropagation();
              this.options.onClick();
            }.bind(this));
          }
          if (typeof this.options.offset === "object") {
            var x = getAxisOffsetAValue("x", this.options);
            var y = getAxisOffsetAValue("y", this.options);
            var xOffset = this.options.position == "left" ? x : "-" + x;
            var yOffset = this.options.gravity == "toastify-top" ? y : "-" + y;
            divElement.style.transform = "translate(" + xOffset + "," + yOffset + ")";
          }
          return divElement;
        },
        // Displaying the toast
        showToast: function() {
          this.toastElement = this.buildToast();
          var rootElement;
          if (typeof this.options.selector === "string") {
            rootElement = document.getElementById(this.options.selector);
          } else if (this.options.selector instanceof HTMLElement || typeof ShadowRoot !== "undefined" && this.options.selector instanceof ShadowRoot) {
            rootElement = this.options.selector;
          } else {
            rootElement = document.body;
          }
          if (!rootElement) {
            throw "Root element is not defined";
          }
          var elementToInsert = Toastify2.defaults.oldestFirst ? rootElement.firstChild : rootElement.lastChild;
          rootElement.insertBefore(this.toastElement, elementToInsert);
          Toastify2.reposition();
          if (this.options.duration > 0) {
            this.toastElement.timeOutValue = window.setTimeout(function() {
              this.removeElement(this.toastElement);
            }.bind(this), this.options.duration);
          }
          return this;
        },
        hideToast: function() {
          if (this.toastElement.timeOutValue) {
            clearTimeout(this.toastElement.timeOutValue);
          }
          this.removeElement(this.toastElement);
        },
        // Removing the element from the DOM
        removeElement: function(toastElement) {
          toastElement.className = toastElement.className.replace(" on", "");
          window.setTimeout(function() {
            if (this.options.node && this.options.node.parentNode) {
              this.options.node.parentNode.removeChild(this.options.node);
            }
            if (toastElement.parentNode) {
              toastElement.parentNode.removeChild(toastElement);
            }
            this.options.callback.call(toastElement);
            Toastify2.reposition();
          }.bind(this), 400);
        }
      };
      Toastify2.reposition = function() {
        var topLeftOffsetSize = {
          top: 15,
          bottom: 15
        };
        var topRightOffsetSize = {
          top: 15,
          bottom: 15
        };
        var offsetSize = {
          top: 15,
          bottom: 15
        };
        var allToasts = document.getElementsByClassName("toastify");
        var classUsed;
        for (var i = 0; i < allToasts.length; i++) {
          if (containsClass(allToasts[i], "toastify-top") === true) {
            classUsed = "toastify-top";
          } else {
            classUsed = "toastify-bottom";
          }
          var height = allToasts[i].offsetHeight;
          classUsed = classUsed.substr(9, classUsed.length - 1);
          var offset = 15;
          var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
          if (width <= 360) {
            allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";
            offsetSize[classUsed] += height + offset;
          } else {
            if (containsClass(allToasts[i], "toastify-left") === true) {
              allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";
              topLeftOffsetSize[classUsed] += height + offset;
            } else {
              allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";
              topRightOffsetSize[classUsed] += height + offset;
            }
          }
        }
        return this;
      };
      function getAxisOffsetAValue(axis, options) {
        if (options.offset[axis]) {
          if (isNaN(options.offset[axis])) {
            return options.offset[axis];
          } else {
            return options.offset[axis] + "px";
          }
        }
        return "0px";
      }
      function containsClass(elem, yourClass) {
        if (!elem || typeof yourClass !== "string") {
          return false;
        } else if (elem.className && elem.className.trim().split(/\s+/gi).indexOf(yourClass) > -1) {
          return true;
        } else {
          return false;
        }
      }
      Toastify2.lib.init.prototype = Toastify2.lib;
      return Toastify2;
    });
  }
});
//! src/Toastify/Toastify.ts
var Toastify_exports = {};
__export(Toastify_exports, {
  toastify: () => toastify
});
module.exports = __toCommonJS(Toastify_exports);
var import_toastify_js = __toESM(require_toastify());
var toastify = (options, type) => {
  var _options, _options2, _options3;
  (_options = options) !== null && _options !== void 0 ? _options : options = {};
  let className = "gadget-toastify";
  if (type) {
    switch (type) {
      case "error":
        className += " ".concat(className, "--error");
        break;
      case "success":
        className += " ".concat(className, "--success");
        break;
      case "warning":
        className += " ".concat(className, "--warning");
        break;
      default:
        className += " ".concat(className, "--info");
    }
  }
  options.className = className;
  (_options2 = options).gravity || (_options2.gravity = "bottom");
  (_options3 = options).position || (_options3.position = "center");
  const instance = (0, import_toastify_js.default)(options);
  instance.showToast();
  return {
    hideToast: instance.hideToast.bind(instance)
  };
};

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL3RvYXN0aWZ5LWpzQDEuMTIuMC9ub2RlX21vZHVsZXMvdG9hc3RpZnktanMvc3JjL3RvYXN0aWZ5LmpzIiwgInNyYy9Ub2FzdGlmeS9Ub2FzdGlmeS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyohXG4gKiBUb2FzdGlmeSBqcyAxLjEyLjBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hcHZhcnVuL3RvYXN0aWZ5LWpzXG4gKiBAbGljZW5zZSBNSVQgbGljZW5zZWRcbiAqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTggVmFydW4gQSBQXG4gKi9cbihmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5Ub2FzdGlmeSA9IGZhY3RvcnkoKTtcbiAgfVxufSkodGhpcywgZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIC8vIE9iamVjdCBpbml0aWFsaXphdGlvblxuICB2YXIgVG9hc3RpZnkgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAvLyBSZXR1cm5pbmcgYSBuZXcgaW5pdCBvYmplY3RcbiAgICAgIHJldHVybiBuZXcgVG9hc3RpZnkubGliLmluaXQob3B0aW9ucyk7XG4gICAgfSxcbiAgICAvLyBMaWJyYXJ5IHZlcnNpb25cbiAgICB2ZXJzaW9uID0gXCIxLjEyLjBcIjtcblxuICAvLyBTZXQgdGhlIGRlZmF1bHQgZ2xvYmFsIG9wdGlvbnNcbiAgVG9hc3RpZnkuZGVmYXVsdHMgPSB7XG4gICAgb2xkZXN0Rmlyc3Q6IHRydWUsXG4gICAgdGV4dDogXCJUb2FzdGlmeSBpcyBhd2Vzb21lIVwiLFxuICAgIG5vZGU6IHVuZGVmaW5lZCxcbiAgICBkdXJhdGlvbjogMzAwMCxcbiAgICBzZWxlY3RvcjogdW5kZWZpbmVkLFxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgfSxcbiAgICBkZXN0aW5hdGlvbjogdW5kZWZpbmVkLFxuICAgIG5ld1dpbmRvdzogZmFsc2UsXG4gICAgY2xvc2U6IGZhbHNlLFxuICAgIGdyYXZpdHk6IFwidG9hc3RpZnktdG9wXCIsXG4gICAgcG9zaXRpb25MZWZ0OiBmYWxzZSxcbiAgICBwb3NpdGlvbjogJycsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnJyxcbiAgICBhdmF0YXI6IFwiXCIsXG4gICAgY2xhc3NOYW1lOiBcIlwiLFxuICAgIHN0b3BPbkZvY3VzOiB0cnVlLFxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICB9LFxuICAgIG9mZnNldDoge3g6IDAsIHk6IDB9LFxuICAgIGVzY2FwZU1hcmt1cDogdHJ1ZSxcbiAgICBhcmlhTGl2ZTogJ3BvbGl0ZScsXG4gICAgc3R5bGU6IHtiYWNrZ3JvdW5kOiAnJ31cbiAgfTtcblxuICAvLyBEZWZpbmluZyB0aGUgcHJvdG90eXBlIG9mIHRoZSBvYmplY3RcbiAgVG9hc3RpZnkubGliID0gVG9hc3RpZnkucHJvdG90eXBlID0ge1xuICAgIHRvYXN0aWZ5OiB2ZXJzaW9uLFxuXG4gICAgY29uc3RydWN0b3I6IFRvYXN0aWZ5LFxuXG4gICAgLy8gSW5pdGlhbGl6aW5nIHRoZSBvYmplY3Qgd2l0aCByZXF1aXJlZCBwYXJhbWV0ZXJzXG4gICAgaW5pdDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgLy8gVmVyaWZ5aW5nIGFuZCB2YWxpZGF0aW5nIHRoZSBpbnB1dCBvYmplY3RcbiAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0aW5nIHRoZSBvcHRpb25zIG9iamVjdFxuICAgICAgdGhpcy5vcHRpb25zID0ge307XG5cbiAgICAgIHRoaXMudG9hc3RFbGVtZW50ID0gbnVsbDtcblxuICAgICAgLy8gVmFsaWRhdGluZyB0aGUgb3B0aW9uc1xuICAgICAgdGhpcy5vcHRpb25zLnRleHQgPSBvcHRpb25zLnRleHQgfHwgVG9hc3RpZnkuZGVmYXVsdHMudGV4dDsgLy8gRGlzcGxheSBtZXNzYWdlXG4gICAgICB0aGlzLm9wdGlvbnMubm9kZSA9IG9wdGlvbnMubm9kZSB8fCBUb2FzdGlmeS5kZWZhdWx0cy5ub2RlOyAgLy8gRGlzcGxheSBjb250ZW50IGFzIG5vZGVcbiAgICAgIHRoaXMub3B0aW9ucy5kdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24gPT09IDAgPyAwIDogb3B0aW9ucy5kdXJhdGlvbiB8fCBUb2FzdGlmeS5kZWZhdWx0cy5kdXJhdGlvbjsgLy8gRGlzcGxheSBkdXJhdGlvblxuICAgICAgdGhpcy5vcHRpb25zLnNlbGVjdG9yID0gb3B0aW9ucy5zZWxlY3RvciB8fCBUb2FzdGlmeS5kZWZhdWx0cy5zZWxlY3RvcjsgLy8gUGFyZW50IHNlbGVjdG9yXG4gICAgICB0aGlzLm9wdGlvbnMuY2FsbGJhY2sgPSBvcHRpb25zLmNhbGxiYWNrIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLmNhbGxiYWNrOyAvLyBDYWxsYmFjayBhZnRlciBkaXNwbGF5XG4gICAgICB0aGlzLm9wdGlvbnMuZGVzdGluYXRpb24gPSBvcHRpb25zLmRlc3RpbmF0aW9uIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLmRlc3RpbmF0aW9uOyAvLyBPbi1jbGljayBkZXN0aW5hdGlvblxuICAgICAgdGhpcy5vcHRpb25zLm5ld1dpbmRvdyA9IG9wdGlvbnMubmV3V2luZG93IHx8IFRvYXN0aWZ5LmRlZmF1bHRzLm5ld1dpbmRvdzsgLy8gT3BlbiBkZXN0aW5hdGlvbiBpbiBuZXcgd2luZG93XG4gICAgICB0aGlzLm9wdGlvbnMuY2xvc2UgPSBvcHRpb25zLmNsb3NlIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLmNsb3NlOyAvLyBTaG93IHRvYXN0IGNsb3NlIGljb25cbiAgICAgIHRoaXMub3B0aW9ucy5ncmF2aXR5ID0gb3B0aW9ucy5ncmF2aXR5ID09PSBcImJvdHRvbVwiID8gXCJ0b2FzdGlmeS1ib3R0b21cIiA6IFRvYXN0aWZ5LmRlZmF1bHRzLmdyYXZpdHk7IC8vIHRvYXN0IHBvc2l0aW9uIC0gdG9wIG9yIGJvdHRvbVxuICAgICAgdGhpcy5vcHRpb25zLnBvc2l0aW9uTGVmdCA9IG9wdGlvbnMucG9zaXRpb25MZWZ0IHx8IFRvYXN0aWZ5LmRlZmF1bHRzLnBvc2l0aW9uTGVmdDsgLy8gdG9hc3QgcG9zaXRpb24gLSBsZWZ0IG9yIHJpZ2h0XG4gICAgICB0aGlzLm9wdGlvbnMucG9zaXRpb24gPSBvcHRpb25zLnBvc2l0aW9uIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLnBvc2l0aW9uOyAvLyB0b2FzdCBwb3NpdGlvbiAtIGxlZnQgb3IgcmlnaHRcbiAgICAgIHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPSBvcHRpb25zLmJhY2tncm91bmRDb2xvciB8fCBUb2FzdGlmeS5kZWZhdWx0cy5iYWNrZ3JvdW5kQ29sb3I7IC8vIHRvYXN0IGJhY2tncm91bmQgY29sb3JcbiAgICAgIHRoaXMub3B0aW9ucy5hdmF0YXIgPSBvcHRpb25zLmF2YXRhciB8fCBUb2FzdGlmeS5kZWZhdWx0cy5hdmF0YXI7IC8vIGltZyBlbGVtZW50IHNyYyAtIHVybCBvciBhIHBhdGhcbiAgICAgIHRoaXMub3B0aW9ucy5jbGFzc05hbWUgPSBvcHRpb25zLmNsYXNzTmFtZSB8fCBUb2FzdGlmeS5kZWZhdWx0cy5jbGFzc05hbWU7IC8vIGFkZGl0aW9uYWwgY2xhc3MgbmFtZXMgZm9yIHRoZSB0b2FzdFxuICAgICAgdGhpcy5vcHRpb25zLnN0b3BPbkZvY3VzID0gb3B0aW9ucy5zdG9wT25Gb2N1cyA9PT0gdW5kZWZpbmVkID8gVG9hc3RpZnkuZGVmYXVsdHMuc3RvcE9uRm9jdXMgOiBvcHRpb25zLnN0b3BPbkZvY3VzOyAvLyBzdG9wIHRpbWVvdXQgb24gZm9jdXNcbiAgICAgIHRoaXMub3B0aW9ucy5vbkNsaWNrID0gb3B0aW9ucy5vbkNsaWNrIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLm9uQ2xpY2s7IC8vIENhbGxiYWNrIGFmdGVyIGNsaWNrXG4gICAgICB0aGlzLm9wdGlvbnMub2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQgfHwgVG9hc3RpZnkuZGVmYXVsdHMub2Zmc2V0OyAvLyB0b2FzdCBvZmZzZXRcbiAgICAgIHRoaXMub3B0aW9ucy5lc2NhcGVNYXJrdXAgPSBvcHRpb25zLmVzY2FwZU1hcmt1cCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5lc2NhcGVNYXJrdXAgOiBUb2FzdGlmeS5kZWZhdWx0cy5lc2NhcGVNYXJrdXA7XG4gICAgICB0aGlzLm9wdGlvbnMuYXJpYUxpdmUgPSBvcHRpb25zLmFyaWFMaXZlIHx8IFRvYXN0aWZ5LmRlZmF1bHRzLmFyaWFMaXZlO1xuICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0gb3B0aW9ucy5zdHlsZSB8fCBUb2FzdGlmeS5kZWZhdWx0cy5zdHlsZTtcbiAgICAgIGlmKG9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZS5iYWNrZ3JvdW5kID0gb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICB9XG5cbiAgICAgIC8vIFJldHVybmluZyB0aGUgY3VycmVudCBvYmplY3QgZm9yIGNoYWluaW5nIGZ1bmN0aW9uc1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIEJ1aWxkaW5nIHRoZSBET00gZWxlbWVudFxuICAgIGJ1aWxkVG9hc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gVmFsaWRhdGluZyBpZiB0aGUgb3B0aW9ucyBhcmUgZGVmaW5lZFxuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgdGhyb3cgXCJUb2FzdGlmeSBpcyBub3QgaW5pdGlhbGl6ZWRcIjtcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRpbmcgdGhlIERPTSBvYmplY3RcbiAgICAgIHZhciBkaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRpdkVsZW1lbnQuY2xhc3NOYW1lID0gXCJ0b2FzdGlmeSBvbiBcIiArIHRoaXMub3B0aW9ucy5jbGFzc05hbWU7XG5cbiAgICAgIC8vIFBvc2l0aW9uaW5nIHRvYXN0IHRvIGxlZnQgb3IgcmlnaHQgb3IgY2VudGVyXG4gICAgICBpZiAoISF0aGlzLm9wdGlvbnMucG9zaXRpb24pIHtcbiAgICAgICAgZGl2RWxlbWVudC5jbGFzc05hbWUgKz0gXCIgdG9hc3RpZnktXCIgKyB0aGlzLm9wdGlvbnMucG9zaXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUbyBiZSBkZXByZWNpYXRlZCBpbiBmdXJ0aGVyIHZlcnNpb25zXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMucG9zaXRpb25MZWZ0ID09PSB0cnVlKSB7XG4gICAgICAgICAgZGl2RWxlbWVudC5jbGFzc05hbWUgKz0gXCIgdG9hc3RpZnktbGVmdFwiO1xuICAgICAgICAgIGNvbnNvbGUud2FybignUHJvcGVydHkgYHBvc2l0aW9uTGVmdGAgd2lsbCBiZSBkZXByZWNpYXRlZCBpbiBmdXJ0aGVyIHZlcnNpb25zLiBQbGVhc2UgdXNlIGBwb3NpdGlvbmAgaW5zdGVhZC4nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIERlZmF1bHQgcG9zaXRpb25cbiAgICAgICAgICBkaXZFbGVtZW50LmNsYXNzTmFtZSArPSBcIiB0b2FzdGlmeS1yaWdodFwiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEFzc2lnbmluZyBncmF2aXR5IG9mIGVsZW1lbnRcbiAgICAgIGRpdkVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIFwiICsgdGhpcy5vcHRpb25zLmdyYXZpdHk7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmFja2dyb3VuZENvbG9yKSB7XG4gICAgICAgIC8vIFRoaXMgaXMgYmVpbmcgZGVwcmVjYXRlZCBpbiBmYXZvciBvZiB1c2luZyB0aGUgc3R5bGUgSFRNTCBET00gcHJvcGVydHlcbiAgICAgICAgY29uc29sZS53YXJuKCdERVBSRUNBVElPTiBOT1RJQ0U6IFwiYmFja2dyb3VuZENvbG9yXCIgaXMgYmVpbmcgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSB0aGUgXCJzdHlsZS5iYWNrZ3JvdW5kXCIgcHJvcGVydHkuJyk7XG4gICAgICB9XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCBvdXIgc3R5bGUgb2JqZWN0IGFuZCBhcHBseSBzdHlsZXMgdG8gZGl2RWxlbWVudFxuICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gdGhpcy5vcHRpb25zLnN0eWxlKSB7XG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gdGhpcy5vcHRpb25zLnN0eWxlW3Byb3BlcnR5XTtcbiAgICAgIH1cblxuICAgICAgLy8gQW5ub3VuY2UgdGhlIHRvYXN0IHRvIHNjcmVlbiByZWFkZXJzXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmFyaWFMaXZlKSB7XG4gICAgICAgIGRpdkVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCB0aGlzLm9wdGlvbnMuYXJpYUxpdmUpXG4gICAgICB9XG5cbiAgICAgIC8vIEFkZGluZyB0aGUgdG9hc3QgbWVzc2FnZS9ub2RlXG4gICAgICBpZiAodGhpcy5vcHRpb25zLm5vZGUgJiYgdGhpcy5vcHRpb25zLm5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSB2YWxpZCBub2RlLCB3ZSBpbnNlcnQgaXRcbiAgICAgICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLm9wdGlvbnMubm9kZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZXNjYXBlTWFya3VwKSB7XG4gICAgICAgICAgZGl2RWxlbWVudC5pbm5lclRleHQgPSB0aGlzLm9wdGlvbnMudGV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXZFbGVtZW50LmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy50ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdmF0YXIgIT09IFwiXCIpIHtcbiAgICAgICAgICB2YXIgYXZhdGFyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgYXZhdGFyRWxlbWVudC5zcmMgPSB0aGlzLm9wdGlvbnMuYXZhdGFyO1xuXG4gICAgICAgICAgYXZhdGFyRWxlbWVudC5jbGFzc05hbWUgPSBcInRvYXN0aWZ5LWF2YXRhclwiO1xuXG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9PSBcImxlZnRcIiB8fCB0aGlzLm9wdGlvbnMucG9zaXRpb25MZWZ0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyBBZGRpbmcgY2xvc2UgaWNvbiBvbiB0aGUgbGVmdCBvZiBjb250ZW50XG4gICAgICAgICAgICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGF2YXRhckVsZW1lbnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBZGRpbmcgY2xvc2UgaWNvbiBvbiB0aGUgcmlnaHQgb2YgY29udGVudFxuICAgICAgICAgICAgZGl2RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmJlZ2luXCIsIGF2YXRhckVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBZGRpbmcgYSBjbG9zZSBpY29uIHRvIHRoZSB0b2FzdFxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5jbG9zZSA9PT0gdHJ1ZSkge1xuICAgICAgICAvLyBDcmVhdGUgYSBzcGFuIGZvciBjbG9zZSBlbGVtZW50XG4gICAgICAgIHZhciBjbG9zZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjbG9zZUVsZW1lbnQudHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgICAgIGNsb3NlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiQ2xvc2VcIik7XG4gICAgICAgIGNsb3NlRWxlbWVudC5jbGFzc05hbWUgPSBcInRvYXN0LWNsb3NlXCI7XG4gICAgICAgIGNsb3NlRWxlbWVudC5pbm5lckhUTUwgPSBcIiYjMTAwMDY7XCI7XG5cbiAgICAgICAgLy8gVHJpZ2dlcmluZyB0aGUgcmVtb3ZhbCBvZiB0b2FzdCBmcm9tIERPTSBvbiBjbG9zZSBjbGlja1xuICAgICAgICBjbG9zZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFbGVtZW50KHRoaXMudG9hc3RFbGVtZW50KTtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50b2FzdEVsZW1lbnQudGltZU91dFZhbHVlKTtcbiAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgKTtcblxuICAgICAgICAvL0NhbGN1bGF0aW5nIHNjcmVlbiB3aWR0aFxuICAgICAgICB2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCA+IDAgPyB3aW5kb3cuaW5uZXJXaWR0aCA6IHNjcmVlbi53aWR0aDtcblxuICAgICAgICAvLyBBZGRpbmcgdGhlIGNsb3NlIGljb24gdG8gdGhlIHRvYXN0IGVsZW1lbnRcbiAgICAgICAgLy8gRGlzcGxheSBvbiB0aGUgcmlnaHQgaWYgc2NyZWVuIHdpZHRoIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byAzNjBweFxuICAgICAgICBpZiAoKHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9PSBcImxlZnRcIiB8fCB0aGlzLm9wdGlvbnMucG9zaXRpb25MZWZ0ID09PSB0cnVlKSAmJiB3aWR0aCA+IDM2MCkge1xuICAgICAgICAgIC8vIEFkZGluZyBjbG9zZSBpY29uIG9uIHRoZSBsZWZ0IG9mIGNvbnRlbnRcbiAgICAgICAgICBkaXZFbGVtZW50Lmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgY2xvc2VFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBBZGRpbmcgY2xvc2UgaWNvbiBvbiB0aGUgcmlnaHQgb2YgY29udGVudFxuICAgICAgICAgIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvc2VFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDbGVhciB0aW1lb3V0IHdoaWxlIHRvYXN0IGlzIGZvY3VzZWRcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RvcE9uRm9jdXMgJiYgdGhpcy5vcHRpb25zLmR1cmF0aW9uID4gMCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vIHN0b3AgY291bnRkb3duXG4gICAgICAgIGRpdkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcIm1vdXNlb3ZlclwiLFxuICAgICAgICAgIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGRpdkVsZW1lbnQudGltZU91dFZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLy8gYWRkIGJhY2sgdGhlIHRpbWVvdXRcbiAgICAgICAgZGl2RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwibW91c2VsZWF2ZVwiLFxuICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZGl2RWxlbWVudC50aW1lT3V0VmFsdWUgPSB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSB0b2FzdCBmcm9tIERPTVxuICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlRWxlbWVudChkaXZFbGVtZW50KTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2VsZi5vcHRpb25zLmR1cmF0aW9uXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIC8vIEFkZGluZyBhbiBvbi1jbGljayBkZXN0aW5hdGlvbiBwYXRoXG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBkaXZFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAgIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubmV3V2luZG93ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHRoaXMub3B0aW9ucy5kZXN0aW5hdGlvbiwgXCJfYmxhbmtcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLm9wdGlvbnMuZGVzdGluYXRpb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfS5iaW5kKHRoaXMpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9uQ2xpY2sgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLmRlc3RpbmF0aW9uID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGRpdkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm9uQ2xpY2soKTtcbiAgICAgICAgICB9LmJpbmQodGhpcylcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkaW5nIG9mZnNldFxuICAgICAgaWYodHlwZW9mIHRoaXMub3B0aW9ucy5vZmZzZXQgPT09IFwib2JqZWN0XCIpIHtcblxuICAgICAgICB2YXIgeCA9IGdldEF4aXNPZmZzZXRBVmFsdWUoXCJ4XCIsIHRoaXMub3B0aW9ucyk7XG4gICAgICAgIHZhciB5ID0gZ2V0QXhpc09mZnNldEFWYWx1ZShcInlcIiwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgICB2YXIgeE9mZnNldCA9IHRoaXMub3B0aW9ucy5wb3NpdGlvbiA9PSBcImxlZnRcIiA/IHggOiBcIi1cIiArIHg7XG4gICAgICAgIHZhciB5T2Zmc2V0ID0gdGhpcy5vcHRpb25zLmdyYXZpdHkgPT0gXCJ0b2FzdGlmeS10b3BcIiA/IHkgOiBcIi1cIiArIHk7XG5cbiAgICAgICAgZGl2RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZShcIiArIHhPZmZzZXQgKyBcIixcIiArIHlPZmZzZXQgKyBcIilcIjtcblxuICAgICAgfVxuXG4gICAgICAvLyBSZXR1cm5pbmcgdGhlIGdlbmVyYXRlZCBlbGVtZW50XG4gICAgICByZXR1cm4gZGl2RWxlbWVudDtcbiAgICB9LFxuXG4gICAgLy8gRGlzcGxheWluZyB0aGUgdG9hc3RcbiAgICBzaG93VG9hc3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gQ3JlYXRpbmcgdGhlIERPTSBvYmplY3QgZm9yIHRoZSB0b2FzdFxuICAgICAgdGhpcy50b2FzdEVsZW1lbnQgPSB0aGlzLmJ1aWxkVG9hc3QoKTtcblxuICAgICAgLy8gR2V0dGluZyB0aGUgcm9vdCBlbGVtZW50IHRvIHdpdGggdGhlIHRvYXN0IG5lZWRzIHRvIGJlIGFkZGVkXG4gICAgICB2YXIgcm9vdEVsZW1lbnQ7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5zZWxlY3RvciA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByb290RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3B0aW9ucy5zZWxlY3Rvcik7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zZWxlY3RvciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8ICh0eXBlb2YgU2hhZG93Um9vdCAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5vcHRpb25zLnNlbGVjdG9yIGluc3RhbmNlb2YgU2hhZG93Um9vdCkpIHtcbiAgICAgICAgcm9vdEVsZW1lbnQgPSB0aGlzLm9wdGlvbnMuc2VsZWN0b3I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb290RWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG4gICAgICB9XG5cbiAgICAgIC8vIFZhbGlkYXRpbmcgaWYgcm9vdCBlbGVtZW50IGlzIHByZXNlbnQgaW4gRE9NXG4gICAgICBpZiAoIXJvb3RFbGVtZW50KSB7XG4gICAgICAgIHRocm93IFwiUm9vdCBlbGVtZW50IGlzIG5vdCBkZWZpbmVkXCI7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZGluZyB0aGUgRE9NIGVsZW1lbnRcbiAgICAgIHZhciBlbGVtZW50VG9JbnNlcnQgPSBUb2FzdGlmeS5kZWZhdWx0cy5vbGRlc3RGaXJzdCA/IHJvb3RFbGVtZW50LmZpcnN0Q2hpbGQgOiByb290RWxlbWVudC5sYXN0Q2hpbGQ7XG4gICAgICByb290RWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy50b2FzdEVsZW1lbnQsIGVsZW1lbnRUb0luc2VydCk7XG5cbiAgICAgIC8vIFJlcG9zaXRpb25pbmcgdGhlIHRvYXN0cyBpbiBjYXNlIG11bHRpcGxlIHRvYXN0cyBhcmUgcHJlc2VudFxuICAgICAgVG9hc3RpZnkucmVwb3NpdGlvbigpO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmR1cmF0aW9uID4gMCkge1xuICAgICAgICB0aGlzLnRvYXN0RWxlbWVudC50aW1lT3V0VmFsdWUgPSB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgdG9hc3QgZnJvbSBET01cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRWxlbWVudCh0aGlzLnRvYXN0RWxlbWVudCk7XG4gICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgIHRoaXMub3B0aW9ucy5kdXJhdGlvblxuICAgICAgICApOyAvLyBCaW5kaW5nIGB0aGlzYCBmb3IgZnVuY3Rpb24gaW52b2NhdGlvblxuICAgICAgfVxuXG4gICAgICAvLyBTdXBwb3J0aW5nIGZ1bmN0aW9uIGNoYWluaW5nXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgaGlkZVRvYXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0aGlzLnRvYXN0RWxlbWVudC50aW1lT3V0VmFsdWUpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG9hc3RFbGVtZW50LnRpbWVPdXRWYWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlbW92ZUVsZW1lbnQodGhpcy50b2FzdEVsZW1lbnQpO1xuICAgIH0sXG5cbiAgICAvLyBSZW1vdmluZyB0aGUgZWxlbWVudCBmcm9tIHRoZSBET01cbiAgICByZW1vdmVFbGVtZW50OiBmdW5jdGlvbih0b2FzdEVsZW1lbnQpIHtcbiAgICAgIC8vIEhpZGluZyB0aGUgZWxlbWVudFxuICAgICAgLy8gdG9hc3RFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJvblwiKTtcbiAgICAgIHRvYXN0RWxlbWVudC5jbGFzc05hbWUgPSB0b2FzdEVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UoXCIgb25cIiwgXCJcIik7XG5cbiAgICAgIC8vIFJlbW92aW5nIHRoZSBlbGVtZW50IGZyb20gRE9NIGFmdGVyIHRyYW5zaXRpb24gZW5kXG4gICAgICB3aW5kb3cuc2V0VGltZW91dChcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gcmVtb3ZlIG9wdGlvbnMgbm9kZSBpZiBhbnlcbiAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLm5vZGUgJiYgdGhpcy5vcHRpb25zLm5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLm5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm9wdGlvbnMubm9kZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gUmVtb3ZlIHRoZSBlbGVtZW50IGZyb20gdGhlIERPTSwgb25seSB3aGVuIHRoZSBwYXJlbnQgbm9kZSB3YXMgbm90IHJlbW92ZWQgYmVmb3JlLlxuICAgICAgICAgIGlmICh0b2FzdEVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgdG9hc3RFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodG9hc3RFbGVtZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBDYWxsaW5nIHRoZSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAgICAgIHRoaXMub3B0aW9ucy5jYWxsYmFjay5jYWxsKHRvYXN0RWxlbWVudCk7XG5cbiAgICAgICAgICAvLyBSZXBvc2l0aW9uaW5nIHRoZSB0b2FzdHMgYWdhaW5cbiAgICAgICAgICBUb2FzdGlmeS5yZXBvc2l0aW9uKCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSxcbiAgICAgICAgNDAwXG4gICAgICApOyAvLyBCaW5kaW5nIGB0aGlzYCBmb3IgZnVuY3Rpb24gaW52b2NhdGlvblxuICAgIH0sXG4gIH07XG5cbiAgLy8gUG9zaXRpb25pbmcgdGhlIHRvYXN0cyBvbiB0aGUgRE9NXG4gIFRvYXN0aWZ5LnJlcG9zaXRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgIC8vIFRvcCBtYXJnaW5zIHdpdGggZ3Jhdml0eVxuICAgIHZhciB0b3BMZWZ0T2Zmc2V0U2l6ZSA9IHtcbiAgICAgIHRvcDogMTUsXG4gICAgICBib3R0b206IDE1LFxuICAgIH07XG4gICAgdmFyIHRvcFJpZ2h0T2Zmc2V0U2l6ZSA9IHtcbiAgICAgIHRvcDogMTUsXG4gICAgICBib3R0b206IDE1LFxuICAgIH07XG4gICAgdmFyIG9mZnNldFNpemUgPSB7XG4gICAgICB0b3A6IDE1LFxuICAgICAgYm90dG9tOiAxNSxcbiAgICB9O1xuXG4gICAgLy8gR2V0IGFsbCB0b2FzdCBtZXNzYWdlcyBvbiB0aGUgRE9NXG4gICAgdmFyIGFsbFRvYXN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2FzdGlmeVwiKTtcblxuICAgIHZhciBjbGFzc1VzZWQ7XG5cbiAgICAvLyBNb2RpZnlpbmcgdGhlIHBvc2l0aW9uIG9mIGVhY2ggdG9hc3QgZWxlbWVudFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsVG9hc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBHZXR0aW5nIHRoZSBhcHBsaWVkIGdyYXZpdHlcbiAgICAgIGlmIChjb250YWluc0NsYXNzKGFsbFRvYXN0c1tpXSwgXCJ0b2FzdGlmeS10b3BcIikgPT09IHRydWUpIHtcbiAgICAgICAgY2xhc3NVc2VkID0gXCJ0b2FzdGlmeS10b3BcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsYXNzVXNlZCA9IFwidG9hc3RpZnktYm90dG9tXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBoZWlnaHQgPSBhbGxUb2FzdHNbaV0ub2Zmc2V0SGVpZ2h0O1xuICAgICAgY2xhc3NVc2VkID0gY2xhc3NVc2VkLnN1YnN0cig5LCBjbGFzc1VzZWQubGVuZ3RoLTEpXG4gICAgICAvLyBTcGFjaW5nIGJldHdlZW4gdG9hc3RzXG4gICAgICB2YXIgb2Zmc2V0ID0gMTU7XG5cbiAgICAgIHZhciB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoID4gMCA/IHdpbmRvdy5pbm5lcldpZHRoIDogc2NyZWVuLndpZHRoO1xuXG4gICAgICAvLyBTaG93IHRvYXN0IGluIGNlbnRlciBpZiBzY3JlZW4gd2l0aCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gMzYwcHhcbiAgICAgIGlmICh3aWR0aCA8PSAzNjApIHtcbiAgICAgICAgLy8gU2V0dGluZyB0aGUgcG9zaXRpb25cbiAgICAgICAgYWxsVG9hc3RzW2ldLnN0eWxlW2NsYXNzVXNlZF0gPSBvZmZzZXRTaXplW2NsYXNzVXNlZF0gKyBcInB4XCI7XG5cbiAgICAgICAgb2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICs9IGhlaWdodCArIG9mZnNldDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjb250YWluc0NsYXNzKGFsbFRvYXN0c1tpXSwgXCJ0b2FzdGlmeS1sZWZ0XCIpID09PSB0cnVlKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyB0aGUgcG9zaXRpb25cbiAgICAgICAgICBhbGxUb2FzdHNbaV0uc3R5bGVbY2xhc3NVc2VkXSA9IHRvcExlZnRPZmZzZXRTaXplW2NsYXNzVXNlZF0gKyBcInB4XCI7XG5cbiAgICAgICAgICB0b3BMZWZ0T2Zmc2V0U2l6ZVtjbGFzc1VzZWRdICs9IGhlaWdodCArIG9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBTZXR0aW5nIHRoZSBwb3NpdGlvblxuICAgICAgICAgIGFsbFRvYXN0c1tpXS5zdHlsZVtjbGFzc1VzZWRdID0gdG9wUmlnaHRPZmZzZXRTaXplW2NsYXNzVXNlZF0gKyBcInB4XCI7XG5cbiAgICAgICAgICB0b3BSaWdodE9mZnNldFNpemVbY2xhc3NVc2VkXSArPSBoZWlnaHQgKyBvZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdXBwb3J0aW5nIGZ1bmN0aW9uIGNoYWluaW5nXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCBvZmZzZXQuXG4gIGZ1bmN0aW9uIGdldEF4aXNPZmZzZXRBVmFsdWUoYXhpcywgb3B0aW9ucykge1xuXG4gICAgaWYob3B0aW9ucy5vZmZzZXRbYXhpc10pIHtcbiAgICAgIGlmKGlzTmFOKG9wdGlvbnMub2Zmc2V0W2F4aXNdKSkge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5vZmZzZXRbYXhpc107XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMub2Zmc2V0W2F4aXNdICsgJ3B4JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJzBweCc7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnRhaW5zQ2xhc3MoZWxlbSwgeW91ckNsYXNzKSB7XG4gICAgaWYgKCFlbGVtIHx8IHR5cGVvZiB5b3VyQ2xhc3MgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZWxlbS5jbGFzc05hbWUgJiZcbiAgICAgIGVsZW0uY2xhc3NOYW1lXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnNwbGl0KC9cXHMrL2dpKVxuICAgICAgICAuaW5kZXhPZih5b3VyQ2xhc3MpID4gLTFcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0dGluZyB1cCB0aGUgcHJvdG90eXBlIGZvciB0aGUgaW5pdCBvYmplY3RcbiAgVG9hc3RpZnkubGliLmluaXQucHJvdG90eXBlID0gVG9hc3RpZnkubGliO1xuXG4gIC8vIFJldHVybmluZyB0aGUgVG9hc3RpZnkgZnVuY3Rpb24gdG8gYmUgYXNzaWduZWQgdG8gdGhlIHdpbmRvdyBvYmplY3QvbW9kdWxlXG4gIHJldHVybiBUb2FzdGlmeTtcbn0pO1xuIiwgImltcG9ydCAndG9hc3RpZnktanMvc3JjL3RvYXN0aWZ5LmNzcyc7XG5pbXBvcnQgJy4vY3VzdG9tLmxlc3MnO1xuaW1wb3J0IFRvYXN0aWZ5IGZyb20gJ3RvYXN0aWZ5LWpzJztcbmltcG9ydCB0eXBlIHtUb2FzdGlmeVdpdGhIaWRlVG9hc3R9IGZyb20gJy4vbW9kdWxlcy90eXBlcyc7XG5cbmNvbnN0IHRvYXN0aWZ5OiBUb2FzdGlmeVdpdGhIaWRlVG9hc3QgPSAob3B0aW9ucywgdHlwZSkgPT4ge1xuXHRvcHRpb25zID8/PSB7fTtcblxuXHRsZXQgY2xhc3NOYW1lOiBzdHJpbmcgPSAnZ2FkZ2V0LXRvYXN0aWZ5Jztcblx0aWYgKHR5cGUpIHtcblx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdGNhc2UgJ2Vycm9yJzpcblx0XHRcdFx0Y2xhc3NOYW1lICs9IGAgJHtjbGFzc05hbWV9LS1lcnJvcmA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnc3VjY2Vzcyc6XG5cdFx0XHRcdGNsYXNzTmFtZSArPSBgICR7Y2xhc3NOYW1lfS0tc3VjY2Vzc2A7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnd2FybmluZyc6XG5cdFx0XHRcdGNsYXNzTmFtZSArPSBgICR7Y2xhc3NOYW1lfS0td2FybmluZ2A7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0Y2xhc3NOYW1lICs9IGAgJHtjbGFzc05hbWV9LS1pbmZvYDtcblx0XHR9XG5cdH1cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1lZGlhd2lraS9jbGFzcy1kb2Ncblx0b3B0aW9ucy5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG5cblx0b3B0aW9ucy5ncmF2aXR5IHx8PSAnYm90dG9tJztcblx0b3B0aW9ucy5wb3NpdGlvbiB8fD0gJ2NlbnRlcic7XG5cblx0Y29uc3QgaW5zdGFuY2UgPSBUb2FzdGlmeShvcHRpb25zKTtcblx0aW5zdGFuY2Uuc2hvd1RvYXN0KCk7XG5cblx0cmV0dXJuIHtcblx0XHRoaWRlVG9hc3Q6IGluc3RhbmNlLmhpZGVUb2FzdC5iaW5kKGluc3RhbmNlKSxcblx0fTtcbn07XG5cbmV4cG9ydCB7dG9hc3RpZnl9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLG1CQUFBQyxXQUFBO0VBQUEsaUZBQUFDLFVBQUFDLFNBQUE7SUFBQTs7Ozs7OztBQU9BLEtBQUMsU0FBU0MsTUFBTUMsU0FBUztBQUN2QixVQUFJLE9BQU9GLFlBQVcsWUFBWUEs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UUFBQTFILGlCQUFBLENBQUE7QUFHckIsSUFBTXVDLFdBQWtDQSxDQUFDOUIsU0FBU21ELFNBQVM7QUFBQSxNQUFBK0QsVUFBQUMsV0FBQUM7QUFDMUQsR0FBQUYsV0FBQWxILGFBQUEsUUFBQWtILGFBQUEsU0FBQUEsV0FBQWxILFVBQVksQ0FBQztBQUViLE1BQUltQixZQUFvQjtBQUN4QixNQUFJZ0MsTUFBTTtBQUNULFlBQVFBLE1BQUE7TUFDUCxLQUFLO0FBQ0poQyxxQkFBQSxJQUFBa0csT0FBaUJsRyxXQUFTLFNBQUE7QUFDMUI7TUFDRCxLQUFLO0FBQ0pBLHFCQUFBLElBQUFrRyxPQUFpQmxHLFdBQVMsV0FBQTtBQUMxQjtNQUNELEtBQUs7QUFDSkEscUJBQUEsSUFBQWtHLE9BQWlCbEcsV0FBUyxXQUFBO0FBQzFCO01BQ0Q7QUFDQ0EscUJBQUEsSUFBQWtHLE9BQWlCbEcsV0FBUyxRQUFBO0lBQzVCO0VBQ0Q7QUFFQW5CLFVBQVFtQixZQUFZQTtBQUVwQixHQUFBZ0csWUFBQW5ILFNBQVFjLFlBQVJxRyxVQUFRckcsVUFBWTtBQUNwQixHQUFBc0csWUFBQXBILFNBQVFnQixhQUFSb0csVUFBUXBHLFdBQWE7QUFFckIsUUFBTXNHLFlBQUEsR0FBV04sbUJBQUFPLFNBQVN2SCxPQUFPO0FBQ2pDc0gsV0FBUy9DLFVBQVU7QUFFbkIsU0FBTztJQUNOVyxXQUFXb0MsU0FBU3BDLFVBQVV2QixLQUFLMkQsUUFBUTtFQUM1QztBQUNEOyIsCiAgIm5hbWVzIjogWyJyZXF1aXJlX3RvYXN0aWZ5IiwgIl9fY29tbW9uSlMiLCAiZXhwb3J0cyIsICJtb2R1bGUyIiwgInJvb3QiLCAiZmFjdG9yeSIsICJUb2FzdGlmeSIsICJnbG9iYWwiLCAiVG9hc3RpZnkyIiwgIm9wdGlvbnMiLCAibGliIiwgImluaXQiLCAidmVyc2lvbiIsICJkZWZhdWx0cyIsICJvbGRlc3RGaXJzdCIsICJ0ZXh0IiwgIm5vZGUiLCAiZHVyYXRpb24iLCAic2VsZWN0b3IiLCAiY2FsbGJhY2siLCAiZGVzdGluYXRpb24iLCAibmV3V2luZG93IiwgImNsb3NlIiwgImdyYXZpdHkiLCAicG9zaXRpb25MZWZ0IiwgInBvc2l0aW9uIiwgImJhY2tncm91bmRDb2xvciIsICJhdmF0YXIiLCAiY2xhc3NOYW1lIiwgInN0b3BPbkZvY3VzIiwgIm9uQ2xpY2siLCAib2Zmc2V0IiwgIngiLCAieSIsICJlc2NhcGVNYXJrdXAiLCAiYXJpYUxpdmUiLCAic3R5bGUiLCAiYmFja2dyb3VuZCIsICJwcm90b3R5cGUiLCAidG9hc3RpZnkiLCAiY29uc3RydWN0b3IiLCAidG9hc3RFbGVtZW50IiwgImJ1aWxkVG9hc3QiLCAiZGl2RWxlbWVudCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImNvbnNvbGUiLCAid2FybiIsICJwcm9wZXJ0eSIsICJzZXRBdHRyaWJ1dGUiLCAibm9kZVR5cGUiLCAiTm9kZSIsICJFTEVNRU5UX05PREUiLCAiYXBwZW5kQ2hpbGQiLCAiaW5uZXJUZXh0IiwgImlubmVySFRNTCIsICJhdmF0YXJFbGVtZW50IiwgInNyYyIsICJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCAiY2xvc2VFbGVtZW50IiwgInR5cGUiLCAiYWRkRXZlbnRMaXN0ZW5lciIsICJldmVudCIsICJzdG9wUHJvcGFnYXRpb24iLCAicmVtb3ZlRWxlbWVudCIsICJ3aW5kb3ciLCAiY2xlYXJUaW1lb3V0IiwgInRpbWVPdXRWYWx1ZSIsICJiaW5kIiwgIndpZHRoIiwgImlubmVyV2lkdGgiLCAic2NyZWVuIiwgInNlbGYiLCAic2V0VGltZW91dCIsICJvcGVuIiwgImxvY2F0aW9uIiwgImdldEF4aXNPZmZzZXRBVmFsdWUiLCAieE9mZnNldCIsICJ5T2Zmc2V0IiwgInRyYW5zZm9ybSIsICJzaG93VG9hc3QiLCAicm9vdEVsZW1lbnQiLCAiZ2V0RWxlbWVudEJ5SWQiLCAiSFRNTEVsZW1lbnQiLCAiU2hhZG93Um9vdCIsICJib2R5IiwgImVsZW1lbnRUb0luc2VydCIsICJmaXJzdENoaWxkIiwgImxhc3RDaGlsZCIsICJpbnNlcnRCZWZvcmUiLCAicmVwb3NpdGlvbiIsICJoaWRlVG9hc3QiLCAicmVwbGFjZSIsICJwYXJlbnROb2RlIiwgInJlbW92ZUNoaWxkIiwgImNhbGwiLCAidG9wTGVmdE9mZnNldFNpemUiLCAidG9wIiwgImJvdHRvbSIsICJ0b3BSaWdodE9mZnNldFNpemUiLCAib2Zmc2V0U2l6ZSIsICJhbGxUb2FzdHMiLCAiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsICJjbGFzc1VzZWQiLCAiaSIsICJsZW5ndGgiLCAiY29udGFpbnNDbGFzcyIsICJoZWlnaHQiLCAib2Zmc2V0SGVpZ2h0IiwgInN1YnN0ciIsICJheGlzIiwgImlzTmFOIiwgImVsZW0iLCAieW91ckNsYXNzIiwgInRyaW0iLCAic3BsaXQiLCAiaW5kZXhPZiIsICJUb2FzdGlmeV9leHBvcnRzIiwgIl9fZXhwb3J0IiwgIm1vZHVsZSIsICJfX3RvQ29tbW9uSlMiLCAiaW1wb3J0X3RvYXN0aWZ5X2pzIiwgIl9fdG9FU00iLCAiX29wdGlvbnMiLCAiX29wdGlvbnMyIiwgIl9vcHRpb25zMyIsICJjb25jYXQiLCAiaW5zdGFuY2UiLCAiZGVmYXVsdCJdCn0K
