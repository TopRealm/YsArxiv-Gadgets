/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/FloatTOC}
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
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/.pnpm/@mrhenry+core-web@1.2.3/node_modules/@mrhenry/core-web/modules/IntersectionObserver.js
var require_IntersectionObserver = __commonJS({
  "node_modules/.pnpm/@mrhenry+core-web@1.2.3/node_modules/@mrhenry/core-web/modules/IntersectionObserver.js"() {
    (function(undefined) {
      if (!("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype)) {
        (function(window2, document2) {
          "use strict";
          var supportedNatively = "IntersectionObserver" in window2 && "IntersectionObserverEntry" in window2 && "intersectionRatio" in window2.IntersectionObserverEntry.prototype;
          if (supportedNatively) {
            return;
          }
          var registry = [];
          function IntersectionObserverEntry(entry) {
            this.time = entry.time;
            this.target = entry.target;
            this.rootBounds = entry.rootBounds;
            this.boundingClientRect = entry.boundingClientRect;
            this.intersectionRect = entry.intersectionRect || getEmptyRect();
            try {
              this.isIntersecting = !!entry.intersectionRect;
            } catch (err) {
            }
            var targetRect = this.boundingClientRect;
            var targetArea = targetRect.width * targetRect.height;
            var intersectionRect = this.intersectionRect;
            var intersectionArea = intersectionRect.width * intersectionRect.height;
            if (targetArea) {
              this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
            } else {
              this.intersectionRatio = this.isIntersecting ? 1 : 0;
            }
          }
          IntersectionObserverEntry.prototype.intersectionRatio = 0;
          function IntersectionObserver2(callback, opt_options) {
            var options = opt_options || {};
            if (typeof callback != "function") {
              throw new Error("callback must be a function");
            }
            if (options.root && options.root.nodeType != 1) {
              throw new Error("root must be an Element");
            }
            this._checkForIntersections = throttle(
              this._checkForIntersections.bind(this),
              this.THROTTLE_TIMEOUT
            );
            this._callback = callback;
            this._observationTargets = [];
            this._queuedEntries = [];
            this._rootMarginValues = this._parseRootMargin(options.rootMargin);
            this.thresholds = this._initThresholds(options.threshold);
            this.root = options.root || null;
            this.rootMargin = this._rootMarginValues.map(function(margin) {
              return margin.value + margin.unit;
            }).join(" ");
          }
          IntersectionObserver2.prototype.THROTTLE_TIMEOUT = 100;
          IntersectionObserver2.prototype.POLL_INTERVAL = null;
          IntersectionObserver2.prototype.USE_MUTATION_OBSERVER = true;
          IntersectionObserver2.prototype.observe = function(target) {
            var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
              return item.element == target;
            });
            if (isTargetAlreadyObserved) {
              return;
            }
            if (!(target && target.nodeType == 1)) {
              throw new Error("target must be an Element");
            }
            this._registerInstance();
            this._observationTargets.push({ element: target, entry: null });
            this._monitorIntersections();
            this._checkForIntersections();
          };
          IntersectionObserver2.prototype.unobserve = function(target) {
            this._observationTargets = this._observationTargets.filter(function(item) {
              return item.element != target;
            });
            if (!this._observationTargets.length) {
              this._unmonitorIntersections();
              this._unregisterInstance();
            }
          };
          IntersectionObserver2.prototype.disconnect = function() {
            this._observationTargets = [];
            this._unmonitorIntersections();
            this._unregisterInstance();
          };
          IntersectionObserver2.prototype.takeRecords = function() {
            var records = this._queuedEntries.slice();
            this._queuedEntries = [];
            return records;
          };
          IntersectionObserver2.prototype._initThresholds = function(opt_threshold) {
            var threshold = opt_threshold || [0];
            if (!Array.isArray(threshold)) threshold = [threshold];
            return threshold.sort().filter(function(t, i, a) {
              if (typeof t != "number" || isNaN(t) || t < 0 || t > 1) {
                throw new Error("threshold must be a number between 0 and 1 inclusively");
              }
              return t !== a[i - 1];
            });
          };
          IntersectionObserver2.prototype._parseRootMargin = function(opt_rootMargin) {
            var marginString = opt_rootMargin || "0px";
            var margins = marginString.split(/\s+/).map(function(margin) {
              var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
              if (!parts) {
                throw new Error("rootMargin must be specified in pixels or percent");
              }
              return { value: parseFloat(parts[1]), unit: parts[2] };
            });
            margins[1] = margins[1] || margins[0];
            margins[2] = margins[2] || margins[0];
            margins[3] = margins[3] || margins[1];
            return margins;
          };
          IntersectionObserver2.prototype._monitorIntersections = function() {
            if (!this._monitoringIntersections) {
              this._monitoringIntersections = true;
              if (this.POLL_INTERVAL) {
                this._monitoringInterval = setInterval(
                  this._checkForIntersections,
                  this.POLL_INTERVAL
                );
              } else {
                addEvent(window2, "resize", this._checkForIntersections, true);
                addEvent(document2, "scroll", this._checkForIntersections, true);
                if (this.USE_MUTATION_OBSERVER && "MutationObserver" in window2) {
                  this._domObserver = new MutationObserver(this._checkForIntersections);
                  this._domObserver.observe(document2, {
                    attributes: true,
                    childList: true,
                    characterData: true,
                    subtree: true
                  });
                }
              }
            }
          };
          IntersectionObserver2.prototype._unmonitorIntersections = function() {
            if (this._monitoringIntersections) {
              this._monitoringIntersections = false;
              clearInterval(this._monitoringInterval);
              this._monitoringInterval = null;
              removeEvent(window2, "resize", this._checkForIntersections, true);
              removeEvent(document2, "scroll", this._checkForIntersections, true);
              if (this._domObserver) {
                this._domObserver.disconnect();
                this._domObserver = null;
              }
            }
          };
          IntersectionObserver2.prototype._checkForIntersections = function() {
            var rootIsInDom = this._rootIsInDom();
            var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();
            this._observationTargets.forEach(function(item) {
              var target = item.element;
              var targetRect = getBoundingClientRect(target);
              var rootContainsTarget = this._rootContainsTarget(target);
              var oldEntry = item.entry;
              var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, rootRect);
              var newEntry = item.entry = new IntersectionObserverEntry({
                time: now(),
                target,
                boundingClientRect: targetRect,
                rootBounds: rootRect,
                intersectionRect
              });
              if (!oldEntry) {
                this._queuedEntries.push(newEntry);
              } else if (rootIsInDom && rootContainsTarget) {
                if (this._hasCrossedThreshold(oldEntry, newEntry)) {
                  this._queuedEntries.push(newEntry);
                }
              } else {
                if (oldEntry && oldEntry.isIntersecting) {
                  this._queuedEntries.push(newEntry);
                }
              }
            }, this);
            if (this._queuedEntries.length) {
              this._callback(this.takeRecords(), this);
            }
          };
          IntersectionObserver2.prototype._computeTargetAndRootIntersection = function(target, rootRect) {
            if (window2.getComputedStyle(target).display == "none") return;
            var targetRect = getBoundingClientRect(target);
            var intersectionRect = targetRect;
            var parent = getParentNode(target);
            var atRoot = false;
            while (!atRoot) {
              var parentRect = null;
              var parentComputedStyle = parent.nodeType == 1 ? window2.getComputedStyle(parent) : {};
              if (parentComputedStyle.display == "none") return;
              if (parent == this.root || parent == document2) {
                atRoot = true;
                parentRect = rootRect;
              } else {
                if (parent != document2.body && parent != document2.documentElement && parentComputedStyle.overflow != "visible") {
                  parentRect = getBoundingClientRect(parent);
                }
              }
              if (parentRect) {
                intersectionRect = computeRectIntersection(parentRect, intersectionRect);
                if (!intersectionRect) break;
              }
              parent = getParentNode(parent);
            }
            return intersectionRect;
          };
          IntersectionObserver2.prototype._getRootRect = function() {
            var rootRect;
            if (this.root) {
              rootRect = getBoundingClientRect(this.root);
            } else {
              var html = document2.documentElement;
              var body = document2.body;
              rootRect = {
                x: 0,
                y: 0,
                top: 0,
                left: 0,
                right: html.clientWidth || body.clientWidth,
                width: html.clientWidth || body.clientWidth,
                bottom: html.clientHeight || body.clientHeight,
                height: html.clientHeight || body.clientHeight
              };
            }
            return this._expandRectByRootMargin(rootRect);
          };
          IntersectionObserver2.prototype._expandRectByRootMargin = function(rect) {
            var margins = this._rootMarginValues.map(function(margin, i) {
              return margin.unit == "px" ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;
            });
            var newRect = {
              top: rect.top - margins[0],
              right: rect.right + margins[1],
              bottom: rect.bottom + margins[2],
              left: rect.left - margins[3]
            };
            newRect.width = newRect.right - newRect.left;
            newRect.height = newRect.bottom - newRect.top;
            newRect.x = newRect.left;
            newRect.y = newRect.top;
            return newRect;
          };
          IntersectionObserver2.prototype._hasCrossedThreshold = function(oldEntry, newEntry) {
            var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;
            var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;
            if (oldRatio === newRatio) return;
            for (var i = 0; i < this.thresholds.length; i++) {
              var threshold = this.thresholds[i];
              if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {
                return true;
              }
            }
          };
          IntersectionObserver2.prototype._rootIsInDom = function() {
            return !this.root || containsDeep(document2, this.root);
          };
          IntersectionObserver2.prototype._rootContainsTarget = function(target) {
            return containsDeep(this.root || document2, target);
          };
          IntersectionObserver2.prototype._registerInstance = function() {
            if (registry.indexOf(this) < 0) {
              registry.push(this);
            }
          };
          IntersectionObserver2.prototype._unregisterInstance = function() {
            var index = registry.indexOf(this);
            if (index != -1) registry.splice(index, 1);
          };
          function now() {
            return window2.performance && performance.now && performance.now();
          }
          function throttle(fn, timeout) {
            var timer = null;
            return function() {
              if (!timer) {
                timer = setTimeout(function() {
                  fn();
                  timer = null;
                }, timeout);
              }
            };
          }
          function addEvent(node, event, fn, opt_useCapture) {
            if (typeof node.addEventListener == "function") {
              node.addEventListener(event, fn, opt_useCapture || false);
            } else if (typeof node.attachEvent == "function") {
              node.attachEvent("on" + event, fn);
            }
          }
          function removeEvent(node, event, fn, opt_useCapture) {
            if (typeof node.removeEventListener == "function") {
              node.removeEventListener(event, fn, opt_useCapture || false);
            } else if (typeof node.detatchEvent == "function") {
              node.detatchEvent("on" + event, fn);
            }
          }
          function computeRectIntersection(rect1, rect2) {
            var top = Math.max(rect1.top, rect2.top);
            var bottom = Math.min(rect1.bottom, rect2.bottom);
            var left = Math.max(rect1.left, rect2.left);
            var right = Math.min(rect1.right, rect2.right);
            var width = right - left;
            var height = bottom - top;
            return width >= 0 && height >= 0 && {
              x: left,
              y: top,
              top,
              bottom,
              left,
              right,
              width,
              height
            };
          }
          function getBoundingClientRect(el) {
            var rect;
            try {
              rect = el.getBoundingClientRect();
            } catch (err) {
            }
            if (!rect) return getEmptyRect();
            if (!(rect.width && rect.height && rect.x && rect.y)) {
              rect = {
                x: rect.left,
                y: rect.top,
                top: rect.top,
                right: rect.right,
                bottom: rect.bottom,
                left: rect.left,
                width: rect.right - rect.left,
                height: rect.bottom - rect.top
              };
            }
            return rect;
          }
          function getEmptyRect() {
            return {
              x: 0,
              y: 0,
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              width: 0,
              height: 0
            };
          }
          function containsDeep(parent, child) {
            var node = child;
            while (node) {
              if (node == parent) return true;
              node = getParentNode(node);
            }
            return false;
          }
          function getParentNode(node) {
            var parent = node.parentNode;
            if (parent && parent.nodeType == 11 && parent.host) {
              return parent.host;
            }
            if (parent && parent.assignedSlot) {
              return parent.assignedSlot.parentNode;
            }
            return parent;
          }
          window2.IntersectionObserver = IntersectionObserver2;
          window2.IntersectionObserverEntry = IntersectionObserverEntry;
        })(window, document);
      }
    }).call("object" === typeof window && window || "object" === typeof self && self || "object" === typeof global && global || {});
  }
});

// dist/FloatTOC/FloatTOC.js
require_IntersectionObserver();
//! src/FloatTOC/options.json
var elementId = "floatTOC";
//! src/FloatTOC/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var import_ext_gadget3 = require("ext.gadget.FilterAlteredClicks");
//! src/FloatTOC/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Close: (0, import_ext_gadget.localize)({
      en: "Close",
      ja: "閉じる",
      "zh-hans": "关闭",
      "zh-hant": "關閉"
    }),
    Contents: (0, import_ext_gadget.localize)({
      en: "Contents",
      ja: "目次",
      zh: "目录"
    }),
    Collapse: (0, import_ext_gadget.localize)({
      en: "Collapse",
      ja: "折り畳み",
      "zh-hans": "折叠",
      "zh-hant": "摺叠"
    }),
    Expand: (0, import_ext_gadget.localize)({
      en: "Expand",
      ja: "展開",
      "zh-hans": "展开",
      "zh-hant": "展開"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/FloatTOC/modules/util/generateElements.ts
var generateElements = (originToc) => {
  var _toc$querySelector, _toc$querySelector2;
  const toc = originToc.cloneNode(true);
  (_toc$querySelector = toc.querySelector("input")) === null || _toc$querySelector === void 0 || _toc$querySelector.remove();
  (_toc$querySelector2 = toc.querySelector(".toctogglespan")) === null || _toc$querySelector2 === void 0 || _toc$querySelector2.remove();
  const $toc = $(toc);
  const $floatToc = $toc.clone().removeAttr("id").prepend($("<span>").addClass("oo-ui-indicatorElement-indicator oo-ui-icon-close").attr({
    id: "close",
    title: getMessage("Close"),
    role: "button",
    tabindex: "0"
  }));
  const $floatTocOpener = $("<div>").addClass("noprint").attr({
    id: "floatToc-opener",
    title: getMessage("Contents"),
    role: "button",
    tabindex: "0"
  }).append($("<span>").addClass("oo-ui-indicatorElement-indicator oo-ui-icon-reference"), $("<span>").text(getMessage("Contents")));
  return {
    $floatToc,
    $floatTocOpener
  };
};
//! src/FloatTOC/modules/util/generateTogglerElement.ts
var generateTogglerElement = (isCollapse) => {
  let $toggler = $("<span>").addClass("oo-ui-indicatorElement-indicator oo-ui-icon-downTriangle");
  $toggler = isCollapse ? $toggler.attr("title", getMessage("Expand")) : $toggler.attr("title", getMessage("Collapse")).addClass("collapse");
  return $toggler;
};
//! src/FloatTOC/modules/getConfig.ts
var getConfig = (id) => {
  let config = mw.storage.getObject(id);
  config || (config = {
    floatTOC: window.outerHeight < window.outerWidth ? "open" : "close",
    originTOC: "open"
  });
  return config;
};
//! src/FloatTOC/modules/setMwNotifyStyle.ts
var setMwNotifyStyle = () => {
  const style = mw.loader.addStyleTag(".mw-notification-area{right:unset;width:auto;max-width:20em}.mw-notification{-webkit-transform:translateX(-999px);-moz-transform:translateX(-999px);transform:translateX(-999px)}.mw-notification-visible{-webkit-transform:translateX(0);-moz-transform:translateX(0);transform:translateX(0)}");
  style.disabled = true;
  return style;
};
//! src/FloatTOC/modules/core.ts
var floatTOC = ($originToc) => {
  const {
    skin
  } = mw.config.get();
  const originToc = $originToc.get(0);
  const $body = $originToc.parents("body");
  const {
    $floatToc,
    $floatTocOpener
  } = generateElements(originToc);
  $floatTocOpener.hide().appendTo($body);
  const config = getConfig(elementId);
  const mwNotifyStyle = setMwNotifyStyle();
  let isShow = false;
  const storeState = (target, state) => {
    config[target] = state;
    mw.storage.setObject(elementId, config);
  };
  let disableMwNotifyStyleTimer;
  const disableMwNotifyStyle = () => {
    if (disableMwNotifyStyleTimer) {
      clearTimeout(disableMwNotifyStyleTimer);
    }
    disableMwNotifyStyleTimer = setTimeout(() => {
      if (!isShow) {
        mwNotifyStyle.disabled = true;
      }
    }, 5 * 1e3);
  };
  let notification;
  const closeNotification = (currentNotification) => {
    currentNotification.close();
    $floatTocOpener.fadeIn();
    storeState("floatTOC", "close");
    disableMwNotifyStyle();
  };
  const smoothScroll = (event) => {
    if (skin === "citizen") {
      return;
    }
    const target = event.target;
    const $target = $(target).parent();
    const href = $target.attr("href");
    if (!href) {
      return;
    }
    const anchorOffset = $(href).offset();
    if (!anchorOffset) {
      return;
    }
    event.preventDefault();
    (0, import_ext_gadget2.scrollTop)("".concat(anchorOffset.top, "px"));
  };
  const toggleToc = (currentIsShow = true, preNotification = void 0) => {
    var _preNotification;
    (_preNotification = preNotification) === null || _preNotification === void 0 || _preNotification.close();
    isShow = !!currentIsShow;
    switch (currentIsShow) {
      case true:
        if (config.floatTOC === "close") {
          $floatTocOpener.fadeIn();
          return;
        }
        break;
      case "open":
        $floatTocOpener.fadeOut();
        storeState("floatTOC", "open");
        break;
      default:
        $floatTocOpener.fadeOut();
        disableMwNotifyStyle();
        return;
    }
    mwNotifyStyle.disabled = false;
    if (preNotification) {
      preNotification.start();
    } else {
      preNotification = mw.notification.notify($floatToc, {
        classes: "noprint",
        id: elementId,
        autoHide: false
      });
      const notificationListener = (event) => {
        event.stopPropagation();
        if (!(0, import_ext_gadget2.checkA11yConfirmKey)(event)) {
          return;
        }
        const target = event.target;
        if (target.id === "close") {
          closeNotification(preNotification);
        } else {
          smoothScroll(event);
        }
      };
      preNotification.$notification.on("click", (0, import_ext_gadget3.filterAlteredClicks)((event) => {
        void notificationListener(event);
      }));
      preNotification.$notification.on("keydown", notificationListener);
    }
    return preNotification;
  };
  const observerCallback = (entries) => {
    const [entry] = entries;
    if (!entry) {
      return;
    }
    const {
      intersectionRatio
    } = entry;
    notification = toggleToc(intersectionRatio === 0, notification);
  };
  const intersectionObserver = new IntersectionObserver(observerCallback);
  intersectionObserver.observe(originToc);
  const openerListener = (event) => {
    event.preventDefault();
    if (!(0, import_ext_gadget2.checkA11yConfirmKey)(event)) {
      return;
    }
    notification = toggleToc("open");
  };
  $floatTocOpener.on("click", openerListener);
  $floatTocOpener.on("keydown", openerListener);
  const collapseOriginToc = () => {
    if (skin !== "citizen") {
      return;
    }
    const isCollapse = config.originTOC === "close";
    const $originTocTitle = $body.find("#toc .toctitle");
    const $originTocItem = $body.find("#toc ul");
    const $toggler = generateTogglerElement(isCollapse);
    $originTocTitle.append($toggler);
    const collapseToggle = () => {
      const $element = $originTocTitle.find(".oo-ui-indicatorElement-indicator");
      $element.toggleClass("collapse");
      if (isCollapse) {
        $element.attr("title", getMessage("Expand"));
      } else {
        $element.attr("title", getMessage("Collapse"));
      }
    };
    $originTocTitle.on("click", () => {
      isCollapse ? storeState("originTOC", "open") : storeState("originTOC", "close");
      collapseToggle();
      $originTocItem.fadeToggle();
    });
    if (isCollapse) {
      $originTocItem.fadeOut();
    }
  };
  collapseOriginToc();
};
//! src/FloatTOC/FloatTOC.ts
var import_ext_gadget4 = require("ext.gadget.Util");
void (0, import_ext_gadget4.getBody)().then(($body) => {
  const $originToc = $body.find("#toc");
  if (!$originToc.length) {
    return;
  }
  floatTOC($originToc);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL0BtcmhlbnJ5K2NvcmUtd2ViQDEuMi4zL25vZGVfbW9kdWxlcy9AbXJoZW5yeS9jb3JlLXdlYi9tb2R1bGVzL0ludGVyc2VjdGlvbk9ic2VydmVyLmpzIiwgInNyYy9GbG9hdFRPQy9vcHRpb25zLmpzb24iLCAic3JjL0Zsb2F0VE9DL21vZHVsZXMvY29yZS50cyIsICJzcmMvRmxvYXRUT0MvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9GbG9hdFRPQy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVFbGVtZW50cy50cyIsICJzcmMvRmxvYXRUT0MvbW9kdWxlcy91dGlsL2dlbmVyYXRlVG9nZ2xlckVsZW1lbnQudHMiLCAic3JjL0Zsb2F0VE9DL21vZHVsZXMvZ2V0Q29uZmlnLnRzIiwgInNyYy9GbG9hdFRPQy9tb2R1bGVzL3NldE13Tm90aWZ5U3R5bGUudHMiLCAic3JjL0Zsb2F0VE9DL0Zsb2F0VE9DLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoZnVuY3Rpb24odW5kZWZpbmVkKSB7XG5pZiAoIShcIkludGVyc2VjdGlvbk9ic2VydmVyXCJpbiB3aW5kb3cmJlwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVwiaW4gd2luZG93JiZcImludGVyc2VjdGlvblJhdGlvXCJpbiB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeS5wcm90b3R5cGVcbikpIHtcbi8vIEludGVyc2VjdGlvbk9ic2VydmVyXG4vKipcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIFczQyBTT0ZUV0FSRSBBTkQgRE9DVU1FTlQgTk9USUNFIEFORCBMSUNFTlNFLlxuICpcbiAqICBodHRwczovL3d3dy53My5vcmcvQ29uc29ydGl1bS9MZWdhbC8yMDE1L2NvcHlyaWdodC1zb2Z0d2FyZS1hbmQtZG9jdW1lbnRcbiAqXG4gKi9cblxuKGZ1bmN0aW9uKHdpbmRvdywgZG9jdW1lbnQpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIHN1cHBvcnRlZE5hdGl2ZWx5ID0gJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cgJiZcbidJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5JyBpbiB3aW5kb3cgJiZcbidpbnRlcnNlY3Rpb25SYXRpbycgaW4gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyRW50cnkucHJvdG90eXBlO1xuXG5pZiAoc3VwcG9ydGVkTmF0aXZlbHkpIHtcblx0cmV0dXJuO1xufVxuLyoqXG4gKiBBbiBJbnRlcnNlY3Rpb25PYnNlcnZlciByZWdpc3RyeS4gVGhpcyByZWdpc3RyeSBleGlzdHMgdG8gaG9sZCBhIHN0cm9uZ1xuICogcmVmZXJlbmNlIHRvIEludGVyc2VjdGlvbk9ic2VydmVyIGluc3RhbmNlcyBjdXJyZW50bHkgb2JzZXJ2aW5nIGEgdGFyZ2V0XG4gKiBlbGVtZW50LiBXaXRob3V0IHRoaXMgcmVnaXN0cnksIGluc3RhbmNlcyB3aXRob3V0IGFub3RoZXIgcmVmZXJlbmNlIG1heSBiZVxuICogZ2FyYmFnZSBjb2xsZWN0ZWQuXG4gKi9cbnZhciByZWdpc3RyeSA9IFtdO1xuXG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgZ2xvYmFsIEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkgY29uc3RydWN0b3IuXG4gKiBodHRwczovL3czYy5naXRodWIuaW8vSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvI2ludGVyc2VjdGlvbi1vYnNlcnZlci1lbnRyeVxuICogQHBhcmFtIHtPYmplY3R9IGVudHJ5IEEgZGljdGlvbmFyeSBvZiBpbnN0YW5jZSBwcm9wZXJ0aWVzLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkoZW50cnkpIHtcblx0dGhpcy50aW1lID0gZW50cnkudGltZTtcblx0dGhpcy50YXJnZXQgPSBlbnRyeS50YXJnZXQ7XG5cdHRoaXMucm9vdEJvdW5kcyA9IGVudHJ5LnJvb3RCb3VuZHM7XG5cdHRoaXMuYm91bmRpbmdDbGllbnRSZWN0ID0gZW50cnkuYm91bmRpbmdDbGllbnRSZWN0O1xuXHR0aGlzLmludGVyc2VjdGlvblJlY3QgPSBlbnRyeS5pbnRlcnNlY3Rpb25SZWN0IHx8IGdldEVtcHR5UmVjdCgpO1xuXHR0cnkge1xuXHRcdHRoaXMuaXNJbnRlcnNlY3RpbmcgPSAhIWVudHJ5LmludGVyc2VjdGlvblJlY3Q7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFRoaXMgbWVhbnMgd2UgYXJlIHVzaW5nIHRoZSBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5IHBvbHlmaWxsIHdoaWNoIGhhcyBvbmx5IGRlZmluZWQgYSBnZXR0ZXJcblx0fVxuXG5cdC8vIENhbGN1bGF0ZXMgdGhlIGludGVyc2VjdGlvbiByYXRpby5cblx0dmFyIHRhcmdldFJlY3QgPSB0aGlzLmJvdW5kaW5nQ2xpZW50UmVjdDtcblx0dmFyIHRhcmdldEFyZWEgPSB0YXJnZXRSZWN0LndpZHRoICogdGFyZ2V0UmVjdC5oZWlnaHQ7XG5cdHZhciBpbnRlcnNlY3Rpb25SZWN0ID0gdGhpcy5pbnRlcnNlY3Rpb25SZWN0O1xuXHR2YXIgaW50ZXJzZWN0aW9uQXJlYSA9IGludGVyc2VjdGlvblJlY3Qud2lkdGggKiBpbnRlcnNlY3Rpb25SZWN0LmhlaWdodDtcblxuXHQvLyBTZXRzIGludGVyc2VjdGlvbiByYXRpby5cblx0aWYgKHRhcmdldEFyZWEpIHtcblx0XHQvLyBSb3VuZCB0aGUgaW50ZXJzZWN0aW9uIHJhdGlvIHRvIGF2b2lkIGZsb2F0aW5nIHBvaW50IG1hdGggaXNzdWVzOlxuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93M2MvSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvaXNzdWVzLzMyNFxuXHRcdHRoaXMuaW50ZXJzZWN0aW9uUmF0aW8gPSBOdW1iZXIoKGludGVyc2VjdGlvbkFyZWEgLyB0YXJnZXRBcmVhKS50b0ZpeGVkKDQpKTtcblx0fSBlbHNlIHtcblx0XHQvLyBJZiBhcmVhIGlzIHplcm8gYW5kIGlzIGludGVyc2VjdGluZywgc2V0cyB0byAxLCBvdGhlcndpc2UgdG8gMFxuXHRcdHRoaXMuaW50ZXJzZWN0aW9uUmF0aW8gPSB0aGlzLmlzSW50ZXJzZWN0aW5nID8gMSA6IDA7XG5cdH1cbn1cblxuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeS5wcm90b3R5cGUuaW50ZXJzZWN0aW9uUmF0aW8gPSAwO1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIGdsb2JhbCBJbnRlcnNlY3Rpb25PYnNlcnZlciBjb25zdHJ1Y3Rvci5cbiAqIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9JbnRlcnNlY3Rpb25PYnNlcnZlci8jaW50ZXJzZWN0aW9uLW9ic2VydmVyLWludGVyZmFjZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgaW50ZXJzZWN0aW9uXG4gKiAgICAgY2hhbmdlcyBoYXZlIHF1ZXVlZC4gVGhlIGZ1bmN0aW9uIGlzIG5vdCBpbnZva2VkIGlmIHRoZSBxdWV1ZSBoYXNcbiAqICAgICBiZWVuIGVtcHRpZWQgYnkgY2FsbGluZyB0aGUgYHRha2VSZWNvcmRzYCBtZXRob2QuXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdF9vcHRpb25zIE9wdGlvbmFsIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBJbnRlcnNlY3Rpb25PYnNlcnZlcihjYWxsYmFjaywgb3B0X29wdGlvbnMpIHtcblxuXHR2YXIgb3B0aW9ucyA9IG9wdF9vcHRpb25zIHx8IHt9O1xuXG5cdGlmICh0eXBlb2YgY2FsbGJhY2sgIT0gJ2Z1bmN0aW9uJykge1xuXHRcdHRocm93IG5ldyBFcnJvcignY2FsbGJhY2sgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XG5cdH1cblxuXHRpZiAob3B0aW9ucy5yb290ICYmIG9wdGlvbnMucm9vdC5ub2RlVHlwZSAhPSAxKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdyb290IG11c3QgYmUgYW4gRWxlbWVudCcpO1xuXHR9XG5cblx0Ly8gQmluZHMgYW5kIHRocm90dGxlcyBgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zYC5cblx0dGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zID0gdGhyb3R0bGUoXG5cdFx0XHR0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMuYmluZCh0aGlzKSwgdGhpcy5USFJPVFRMRV9USU1FT1VUKTtcblxuXHQvLyBQcml2YXRlIHByb3BlcnRpZXMuXG5cdHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG5cdHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cyA9IFtdO1xuXHR0aGlzLl9xdWV1ZWRFbnRyaWVzID0gW107XG5cdHRoaXMuX3Jvb3RNYXJnaW5WYWx1ZXMgPSB0aGlzLl9wYXJzZVJvb3RNYXJnaW4ob3B0aW9ucy5yb290TWFyZ2luKTtcblxuXHQvLyBQdWJsaWMgcHJvcGVydGllcy5cblx0dGhpcy50aHJlc2hvbGRzID0gdGhpcy5faW5pdFRocmVzaG9sZHMob3B0aW9ucy50aHJlc2hvbGQpO1xuXHR0aGlzLnJvb3QgPSBvcHRpb25zLnJvb3QgfHwgbnVsbDtcblx0dGhpcy5yb290TWFyZ2luID0gdGhpcy5fcm9vdE1hcmdpblZhbHVlcy5tYXAoZnVuY3Rpb24obWFyZ2luKSB7XG5cdFx0cmV0dXJuIG1hcmdpbi52YWx1ZSArIG1hcmdpbi51bml0O1xuXHR9KS5qb2luKCcgJyk7XG59XG5cblxuLyoqXG4gKiBUaGUgbWluaW11bSBpbnRlcnZhbCB3aXRoaW4gd2hpY2ggdGhlIGRvY3VtZW50IHdpbGwgYmUgY2hlY2tlZCBmb3JcbiAqIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuVEhST1RUTEVfVElNRU9VVCA9IDEwMDtcblxuXG4vKipcbiAqIFRoZSBmcmVxdWVuY3kgaW4gd2hpY2ggdGhlIHBvbHlmaWxsIHBvbGxzIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAqIHRoaXMgY2FuIGJlIHVwZGF0ZWQgb24gYSBwZXIgaW5zdGFuY2UgYmFzaXMgYW5kIG11c3QgYmUgc2V0IHByaW9yIHRvXG4gKiBjYWxsaW5nIGBvYnNlcnZlYCBvbiB0aGUgZmlyc3QgdGFyZ2V0LlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuUE9MTF9JTlRFUlZBTCA9IG51bGw7XG5cbi8qKlxuICogVXNlIGEgbXV0YXRpb24gb2JzZXJ2ZXIgb24gdGhlIHJvb3QgZWxlbWVudFxuICogdG8gZGV0ZWN0IGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuVVNFX01VVEFUSU9OX09CU0VSVkVSID0gdHJ1ZTtcblxuXG4vKipcbiAqIFN0YXJ0cyBvYnNlcnZpbmcgYSB0YXJnZXQgZWxlbWVudCBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMgYmFzZWQgb25cbiAqIHRoZSB0aHJlc2hvbGRzIHZhbHVlcy5cbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IFRoZSBET00gZWxlbWVudCB0byBvYnNlcnZlLlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHR2YXIgaXNUYXJnZXRBbHJlYWR5T2JzZXJ2ZWQgPSB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMuc29tZShmdW5jdGlvbihpdGVtKSB7XG5cdFx0cmV0dXJuIGl0ZW0uZWxlbWVudCA9PSB0YXJnZXQ7XG5cdH0pO1xuXG5cdGlmIChpc1RhcmdldEFscmVhZHlPYnNlcnZlZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICghKHRhcmdldCAmJiB0YXJnZXQubm9kZVR5cGUgPT0gMSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ3RhcmdldCBtdXN0IGJlIGFuIEVsZW1lbnQnKTtcblx0fVxuXG5cdHRoaXMuX3JlZ2lzdGVySW5zdGFuY2UoKTtcblx0dGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLnB1c2goe2VsZW1lbnQ6IHRhcmdldCwgZW50cnk6IG51bGx9KTtcblx0dGhpcy5fbW9uaXRvckludGVyc2VjdGlvbnMoKTtcblx0dGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zKCk7XG59O1xuXG5cbi8qKlxuICogU3RvcHMgb2JzZXJ2aW5nIGEgdGFyZ2V0IGVsZW1lbnQgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgVGhlIERPTSBlbGVtZW50IHRvIG9ic2VydmUuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS51bm9ic2VydmUgPSBmdW5jdGlvbih0YXJnZXQpIHtcblx0dGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzID1cblx0XHRcdHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xuXG5cdFx0cmV0dXJuIGl0ZW0uZWxlbWVudCAhPSB0YXJnZXQ7XG5cdH0pO1xuXHRpZiAoIXRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5sZW5ndGgpIHtcblx0XHR0aGlzLl91bm1vbml0b3JJbnRlcnNlY3Rpb25zKCk7XG5cdFx0dGhpcy5fdW5yZWdpc3Rlckluc3RhbmNlKCk7XG5cdH1cbn07XG5cblxuLyoqXG4gKiBTdG9wcyBvYnNlcnZpbmcgYWxsIHRhcmdldCBlbGVtZW50cyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5kaXNjb25uZWN0ID0gZnVuY3Rpb24oKSB7XG5cdHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cyA9IFtdO1xuXHR0aGlzLl91bm1vbml0b3JJbnRlcnNlY3Rpb25zKCk7XG5cdHRoaXMuX3VucmVnaXN0ZXJJbnN0YW5jZSgpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgYW55IHF1ZXVlIGVudHJpZXMgdGhhdCBoYXZlIG5vdCB5ZXQgYmVlbiByZXBvcnRlZCB0byB0aGVcbiAqIGNhbGxiYWNrIGFuZCBjbGVhcnMgdGhlIHF1ZXVlLiBUaGlzIGNhbiBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggdGhlXG4gKiBjYWxsYmFjayB0byBvYnRhaW4gdGhlIGFic29sdXRlIG1vc3QgdXAtdG8tZGF0ZSBpbnRlcnNlY3Rpb24gaW5mb3JtYXRpb24uXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIGN1cnJlbnRseSBxdWV1ZWQgZW50cmllcy5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLnRha2VSZWNvcmRzID0gZnVuY3Rpb24oKSB7XG5cdHZhciByZWNvcmRzID0gdGhpcy5fcXVldWVkRW50cmllcy5zbGljZSgpO1xuXHR0aGlzLl9xdWV1ZWRFbnRyaWVzID0gW107XG5cdHJldHVybiByZWNvcmRzO1xufTtcblxuXG4vKipcbiAqIEFjY2VwdHMgdGhlIHRocmVzaG9sZCB2YWx1ZSBmcm9tIHRoZSB1c2VyIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGFuZFxuICogcmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiB1bmlxdWUgdGhyZXNob2xkIHZhbHVlcy4gSWYgYSB2YWx1ZSBpcyBub3RcbiAqIGJldHdlZW4gMCBhbmQgMSBhbmQgZXJyb3IgaXMgdGhyb3duLlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8bnVtYmVyPX0gb3B0X3RocmVzaG9sZCBBbiBvcHRpb25hbCB0aHJlc2hvbGQgdmFsdWUgb3JcbiAqICAgICBhIGxpc3Qgb2YgdGhyZXNob2xkIHZhbHVlcywgZGVmYXVsdGluZyB0byBbMF0uXG4gKiBAcmV0dXJuIHtBcnJheX0gQSBzb3J0ZWQgbGlzdCBvZiB1bmlxdWUgYW5kIHZhbGlkIHRocmVzaG9sZCB2YWx1ZXMuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5faW5pdFRocmVzaG9sZHMgPSBmdW5jdGlvbihvcHRfdGhyZXNob2xkKSB7XG5cdHZhciB0aHJlc2hvbGQgPSBvcHRfdGhyZXNob2xkIHx8IFswXTtcblx0aWYgKCFBcnJheS5pc0FycmF5KHRocmVzaG9sZCkpIHRocmVzaG9sZCA9IFt0aHJlc2hvbGRdO1xuXG5cdHJldHVybiB0aHJlc2hvbGQuc29ydCgpLmZpbHRlcihmdW5jdGlvbih0LCBpLCBhKSB7XG5cdFx0aWYgKHR5cGVvZiB0ICE9ICdudW1iZXInIHx8IGlzTmFOKHQpIHx8IHQgPCAwIHx8IHQgPiAxKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ3RocmVzaG9sZCBtdXN0IGJlIGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMSBpbmNsdXNpdmVseScpO1xuXHRcdH1cblx0XHRyZXR1cm4gdCAhPT0gYVtpIC0gMV07XG5cdH0pO1xufTtcblxuXG4vKipcbiAqIEFjY2VwdHMgdGhlIHJvb3RNYXJnaW4gdmFsdWUgZnJvbSB0aGUgdXNlciBjb25maWd1cmF0aW9uIG9iamVjdFxuICogYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgdGhlIGZvdXIgbWFyZ2luIHZhbHVlcyBhcyBhbiBvYmplY3QgY29udGFpbmluZ1xuICogdGhlIHZhbHVlIGFuZCB1bml0IHByb3BlcnRpZXMuIElmIGFueSBvZiB0aGUgdmFsdWVzIGFyZSBub3QgcHJvcGVybHlcbiAqIGZvcm1hdHRlZCBvciB1c2UgYSB1bml0IG90aGVyIHRoYW4gcHggb3IgJSwgYW5kIGVycm9yIGlzIHRocm93bi5cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZz19IG9wdF9yb290TWFyZ2luIEFuIG9wdGlvbmFsIHJvb3RNYXJnaW4gdmFsdWUsXG4gKiAgICAgZGVmYXVsdGluZyB0byAnMHB4Jy5cbiAqIEByZXR1cm4ge0FycmF5PE9iamVjdD59IEFuIGFycmF5IG9mIG1hcmdpbiBvYmplY3RzIHdpdGggdGhlIGtleXNcbiAqICAgICB2YWx1ZSBhbmQgdW5pdC5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9wYXJzZVJvb3RNYXJnaW4gPSBmdW5jdGlvbihvcHRfcm9vdE1hcmdpbikge1xuXHR2YXIgbWFyZ2luU3RyaW5nID0gb3B0X3Jvb3RNYXJnaW4gfHwgJzBweCc7XG5cdHZhciBtYXJnaW5zID0gbWFyZ2luU3RyaW5nLnNwbGl0KC9cXHMrLykubWFwKGZ1bmN0aW9uKG1hcmdpbikge1xuXHRcdHZhciBwYXJ0cyA9IC9eKC0/XFxkKlxcLj9cXGQrKShweHwlKSQvLmV4ZWMobWFyZ2luKTtcblx0XHRpZiAoIXBhcnRzKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ3Jvb3RNYXJnaW4gbXVzdCBiZSBzcGVjaWZpZWQgaW4gcGl4ZWxzIG9yIHBlcmNlbnQnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHt2YWx1ZTogcGFyc2VGbG9hdChwYXJ0c1sxXSksIHVuaXQ6IHBhcnRzWzJdfTtcblx0fSk7XG5cblx0Ly8gSGFuZGxlcyBzaG9ydGhhbmQuXG5cdG1hcmdpbnNbMV0gPSBtYXJnaW5zWzFdIHx8IG1hcmdpbnNbMF07XG5cdG1hcmdpbnNbMl0gPSBtYXJnaW5zWzJdIHx8IG1hcmdpbnNbMF07XG5cdG1hcmdpbnNbM10gPSBtYXJnaW5zWzNdIHx8IG1hcmdpbnNbMV07XG5cblx0cmV0dXJuIG1hcmdpbnM7XG59O1xuXG5cbi8qKlxuICogU3RhcnRzIHBvbGxpbmcgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzIGlmIHRoZSBwb2xsaW5nIGlzIG5vdCBhbHJlYWR5XG4gKiBoYXBwZW5pbmcsIGFuZCBpZiB0aGUgcGFnZSdzIHZpc2liaWxpdHkgc3RhdGUgaXMgdmlzaWJsZS5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fbW9uaXRvckludGVyc2VjdGlvbnMgPSBmdW5jdGlvbigpIHtcblx0aWYgKCF0aGlzLl9tb25pdG9yaW5nSW50ZXJzZWN0aW9ucykge1xuXHRcdHRoaXMuX21vbml0b3JpbmdJbnRlcnNlY3Rpb25zID0gdHJ1ZTtcblxuXHRcdC8vIElmIGEgcG9sbCBpbnRlcnZhbCBpcyBzZXQsIHVzZSBwb2xsaW5nIGluc3RlYWQgb2YgbGlzdGVuaW5nIHRvXG5cdFx0Ly8gcmVzaXplIGFuZCBzY3JvbGwgZXZlbnRzIG9yIERPTSBtdXRhdGlvbnMuXG5cdFx0aWYgKHRoaXMuUE9MTF9JTlRFUlZBTCkge1xuXHRcdFx0dGhpcy5fbW9uaXRvcmluZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoXG5cdFx0XHRcdFx0dGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zLCB0aGlzLlBPTExfSU5URVJWQUwpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGFkZEV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucywgdHJ1ZSk7XG5cdFx0XHRhZGRFdmVudChkb2N1bWVudCwgJ3Njcm9sbCcsIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucywgdHJ1ZSk7XG5cblx0XHRcdGlmICh0aGlzLlVTRV9NVVRBVElPTl9PQlNFUlZFUiAmJiAnTXV0YXRpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XG5cdFx0XHRcdHRoaXMuX2RvbU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zKTtcblx0XHRcdFx0dGhpcy5fZG9tT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudCwge1xuXHRcdFx0XHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdFx0XHRcdGNoYXJhY3RlckRhdGE6IHRydWUsXG5cdFx0XHRcdFx0c3VidHJlZTogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cblxuLyoqXG4gKiBTdG9wcyBwb2xsaW5nIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fdW5tb25pdG9ySW50ZXJzZWN0aW9ucyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5fbW9uaXRvcmluZ0ludGVyc2VjdGlvbnMpIHtcblx0XHR0aGlzLl9tb25pdG9yaW5nSW50ZXJzZWN0aW9ucyA9IGZhbHNlO1xuXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLl9tb25pdG9yaW5nSW50ZXJ2YWwpO1xuXHRcdHRoaXMuX21vbml0b3JpbmdJbnRlcnZhbCA9IG51bGw7XG5cblx0XHRyZW1vdmVFdmVudCh3aW5kb3csICdyZXNpemUnLCB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMsIHRydWUpO1xuXHRcdHJlbW92ZUV2ZW50KGRvY3VtZW50LCAnc2Nyb2xsJywgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zLCB0cnVlKTtcblxuXHRcdGlmICh0aGlzLl9kb21PYnNlcnZlcikge1xuXHRcdFx0dGhpcy5fZG9tT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdFx0dGhpcy5fZG9tT2JzZXJ2ZXIgPSBudWxsO1xuXHRcdH1cblx0fVxufTtcblxuXG4vKipcbiAqIFNjYW5zIGVhY2ggb2JzZXJ2YXRpb24gdGFyZ2V0IGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcyBhbmQgYWRkcyB0aGVtXG4gKiB0byB0aGUgaW50ZXJuYWwgZW50cmllcyBxdWV1ZS4gSWYgbmV3IGVudHJpZXMgYXJlIGZvdW5kLCBpdFxuICogc2NoZWR1bGVzIHRoZSBjYWxsYmFjayB0byBiZSBpbnZva2VkLlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9jaGVja0ZvckludGVyc2VjdGlvbnMgPSBmdW5jdGlvbigpIHtcblx0dmFyIHJvb3RJc0luRG9tID0gdGhpcy5fcm9vdElzSW5Eb20oKTtcblx0dmFyIHJvb3RSZWN0ID0gcm9vdElzSW5Eb20gPyB0aGlzLl9nZXRSb290UmVjdCgpIDogZ2V0RW1wdHlSZWN0KCk7XG5cblx0dGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuXHRcdHZhciB0YXJnZXQgPSBpdGVtLmVsZW1lbnQ7XG5cdFx0dmFyIHRhcmdldFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QodGFyZ2V0KTtcblx0XHR2YXIgcm9vdENvbnRhaW5zVGFyZ2V0ID0gdGhpcy5fcm9vdENvbnRhaW5zVGFyZ2V0KHRhcmdldCk7XG5cdFx0dmFyIG9sZEVudHJ5ID0gaXRlbS5lbnRyeTtcblx0XHR2YXIgaW50ZXJzZWN0aW9uUmVjdCA9IHJvb3RJc0luRG9tICYmIHJvb3RDb250YWluc1RhcmdldCAmJlxuXHRcdFx0XHR0aGlzLl9jb21wdXRlVGFyZ2V0QW5kUm9vdEludGVyc2VjdGlvbih0YXJnZXQsIHJvb3RSZWN0KTtcblxuXHRcdHZhciBuZXdFbnRyeSA9IGl0ZW0uZW50cnkgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSh7XG5cdFx0XHR0aW1lOiBub3coKSxcblx0XHRcdHRhcmdldDogdGFyZ2V0LFxuXHRcdFx0Ym91bmRpbmdDbGllbnRSZWN0OiB0YXJnZXRSZWN0LFxuXHRcdFx0cm9vdEJvdW5kczogcm9vdFJlY3QsXG5cdFx0XHRpbnRlcnNlY3Rpb25SZWN0OiBpbnRlcnNlY3Rpb25SZWN0XG5cdFx0fSk7XG5cblx0XHRpZiAoIW9sZEVudHJ5KSB7XG5cdFx0XHR0aGlzLl9xdWV1ZWRFbnRyaWVzLnB1c2gobmV3RW50cnkpO1xuXHRcdH0gZWxzZSBpZiAocm9vdElzSW5Eb20gJiYgcm9vdENvbnRhaW5zVGFyZ2V0KSB7XG5cdFx0XHQvLyBJZiB0aGUgbmV3IGVudHJ5IGludGVyc2VjdGlvbiByYXRpbyBoYXMgY3Jvc3NlZCBhbnkgb2YgdGhlXG5cdFx0XHQvLyB0aHJlc2hvbGRzLCBhZGQgYSBuZXcgZW50cnkuXG5cdFx0XHRpZiAodGhpcy5faGFzQ3Jvc3NlZFRocmVzaG9sZChvbGRFbnRyeSwgbmV3RW50cnkpKSB7XG5cdFx0XHRcdHRoaXMuX3F1ZXVlZEVudHJpZXMucHVzaChuZXdFbnRyeSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIElmIHRoZSByb290IGlzIG5vdCBpbiB0aGUgRE9NIG9yIHRhcmdldCBpcyBub3QgY29udGFpbmVkIHdpdGhpblxuXHRcdFx0Ly8gcm9vdCBidXQgdGhlIHByZXZpb3VzIGVudHJ5IGZvciB0aGlzIHRhcmdldCBoYWQgYW4gaW50ZXJzZWN0aW9uLFxuXHRcdFx0Ly8gYWRkIGEgbmV3IHJlY29yZCBpbmRpY2F0aW5nIHJlbW92YWwuXG5cdFx0XHRpZiAob2xkRW50cnkgJiYgb2xkRW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcblx0XHRcdFx0dGhpcy5fcXVldWVkRW50cmllcy5wdXNoKG5ld0VudHJ5KTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHRoaXMpO1xuXG5cdGlmICh0aGlzLl9xdWV1ZWRFbnRyaWVzLmxlbmd0aCkge1xuXHRcdHRoaXMuX2NhbGxiYWNrKHRoaXMudGFrZVJlY29yZHMoKSwgdGhpcyk7XG5cdH1cbn07XG5cblxuLyoqXG4gKiBBY2NlcHRzIGEgdGFyZ2V0IGFuZCByb290IHJlY3QgY29tcHV0ZXMgdGhlIGludGVyc2VjdGlvbiBiZXR3ZWVuIHRoZW5cbiAqIGZvbGxvd2luZyB0aGUgYWxnb3JpdGhtIGluIHRoZSBzcGVjLlxuICogVE9ETyhwaGlsaXB3YWx0b24pOiBhdCB0aGlzIHRpbWUgY2xpcC1wYXRoIGlzIG5vdCBjb25zaWRlcmVkLlxuICogaHR0cHM6Ly93M2MuZ2l0aHViLmlvL0ludGVyc2VjdGlvbk9ic2VydmVyLyNjYWxjdWxhdGUtaW50ZXJzZWN0aW9uLXJlY3QtYWxnb1xuICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXQgVGhlIHRhcmdldCBET00gZWxlbWVudFxuICogQHBhcmFtIHtPYmplY3R9IHJvb3RSZWN0IFRoZSBib3VuZGluZyByZWN0IG9mIHRoZSByb290IGFmdGVyIGJlaW5nXG4gKiAgICAgZXhwYW5kZWQgYnkgdGhlIHJvb3RNYXJnaW4gdmFsdWUuXG4gKiBAcmV0dXJuIHs/T2JqZWN0fSBUaGUgZmluYWwgaW50ZXJzZWN0aW9uIHJlY3Qgb2JqZWN0IG9yIHVuZGVmaW5lZCBpZiBub1xuICogICAgIGludGVyc2VjdGlvbiBpcyBmb3VuZC5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fY29tcHV0ZVRhcmdldEFuZFJvb3RJbnRlcnNlY3Rpb24gPVxuXHRcdGZ1bmN0aW9uKHRhcmdldCwgcm9vdFJlY3QpIHtcblxuXHQvLyBJZiB0aGUgZWxlbWVudCBpc24ndCBkaXNwbGF5ZWQsIGFuIGludGVyc2VjdGlvbiBjYW4ndCBoYXBwZW4uXG5cdGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmRpc3BsYXkgPT0gJ25vbmUnKSByZXR1cm47XG5cblx0dmFyIHRhcmdldFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QodGFyZ2V0KTtcblx0dmFyIGludGVyc2VjdGlvblJlY3QgPSB0YXJnZXRSZWN0O1xuXHR2YXIgcGFyZW50ID0gZ2V0UGFyZW50Tm9kZSh0YXJnZXQpO1xuXHR2YXIgYXRSb290ID0gZmFsc2U7XG5cblx0d2hpbGUgKCFhdFJvb3QpIHtcblx0XHR2YXIgcGFyZW50UmVjdCA9IG51bGw7XG5cdFx0dmFyIHBhcmVudENvbXB1dGVkU3R5bGUgPSBwYXJlbnQubm9kZVR5cGUgPT0gMSA/XG5cdFx0XHRcdHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudCkgOiB7fTtcblxuXHRcdC8vIElmIHRoZSBwYXJlbnQgaXNuJ3QgZGlzcGxheWVkLCBhbiBpbnRlcnNlY3Rpb24gY2FuJ3QgaGFwcGVuLlxuXHRcdGlmIChwYXJlbnRDb21wdXRlZFN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKSByZXR1cm47XG5cblx0XHRpZiAocGFyZW50ID09IHRoaXMucm9vdCB8fCBwYXJlbnQgPT0gZG9jdW1lbnQpIHtcblx0XHRcdGF0Um9vdCA9IHRydWU7XG5cdFx0XHRwYXJlbnRSZWN0ID0gcm9vdFJlY3Q7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIElmIHRoZSBlbGVtZW50IGhhcyBhIG5vbi12aXNpYmxlIG92ZXJmbG93LCBhbmQgaXQncyBub3QgdGhlIDxib2R5PlxuXHRcdFx0Ly8gb3IgPGh0bWw+IGVsZW1lbnQsIHVwZGF0ZSB0aGUgaW50ZXJzZWN0aW9uIHJlY3QuXG5cdFx0XHQvLyBOb3RlOiA8Ym9keT4gYW5kIDxodG1sPiBjYW5ub3QgYmUgY2xpcHBlZCB0byBhIHJlY3QgdGhhdCdzIG5vdCBhbHNvXG5cdFx0XHQvLyB0aGUgZG9jdW1lbnQgcmVjdCwgc28gbm8gbmVlZCB0byBjb21wdXRlIGEgbmV3IGludGVyc2VjdGlvbi5cblx0XHRcdGlmIChwYXJlbnQgIT0gZG9jdW1lbnQuYm9keSAmJlxuXHRcdFx0XHRcdHBhcmVudCAhPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiZcblx0XHRcdFx0XHRwYXJlbnRDb21wdXRlZFN0eWxlLm92ZXJmbG93ICE9ICd2aXNpYmxlJykge1xuXHRcdFx0XHRwYXJlbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHBhcmVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSWYgZWl0aGVyIG9mIHRoZSBhYm92ZSBjb25kaXRpb25hbHMgc2V0IGEgbmV3IHBhcmVudFJlY3QsXG5cdFx0Ly8gY2FsY3VsYXRlIG5ldyBpbnRlcnNlY3Rpb24gZGF0YS5cblx0XHRpZiAocGFyZW50UmVjdCkge1xuXHRcdFx0aW50ZXJzZWN0aW9uUmVjdCA9IGNvbXB1dGVSZWN0SW50ZXJzZWN0aW9uKHBhcmVudFJlY3QsIGludGVyc2VjdGlvblJlY3QpO1xuXG5cdFx0XHRpZiAoIWludGVyc2VjdGlvblJlY3QpIGJyZWFrO1xuXHRcdH1cblx0XHRwYXJlbnQgPSBnZXRQYXJlbnROb2RlKHBhcmVudCk7XG5cdH1cblx0cmV0dXJuIGludGVyc2VjdGlvblJlY3Q7XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgcm9vdCByZWN0IGFmdGVyIGJlaW5nIGV4cGFuZGVkIGJ5IHRoZSByb290TWFyZ2luIHZhbHVlLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgZXhwYW5kZWQgcm9vdCByZWN0LlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9nZXRSb290UmVjdCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgcm9vdFJlY3Q7XG5cdGlmICh0aGlzLnJvb3QpIHtcblx0XHRyb290UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdCh0aGlzLnJvb3QpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIFVzZSA8aHRtbD4vPGJvZHk+IGluc3RlYWQgb2Ygd2luZG93IHNpbmNlIHNjcm9sbCBiYXJzIGFmZmVjdCBzaXplLlxuXHRcdHZhciBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXHRcdHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcblx0XHRyb290UmVjdCA9IHtcblx0XHRcdHg6IDAsXG5cdFx0XHR5OiAwLFxuXHRcdFx0dG9wOiAwLFxuXHRcdFx0bGVmdDogMCxcblx0XHRcdHJpZ2h0OiBodG1sLmNsaWVudFdpZHRoIHx8IGJvZHkuY2xpZW50V2lkdGgsXG5cdFx0XHR3aWR0aDogaHRtbC5jbGllbnRXaWR0aCB8fCBib2R5LmNsaWVudFdpZHRoLFxuXHRcdFx0Ym90dG9tOiBodG1sLmNsaWVudEhlaWdodCB8fCBib2R5LmNsaWVudEhlaWdodCxcblx0XHRcdGhlaWdodDogaHRtbC5jbGllbnRIZWlnaHQgfHwgYm9keS5jbGllbnRIZWlnaHRcblx0XHR9O1xuXHR9XG5cdHJldHVybiB0aGlzLl9leHBhbmRSZWN0QnlSb290TWFyZ2luKHJvb3RSZWN0KTtcbn07XG5cblxuLyoqXG4gKiBBY2NlcHRzIGEgcmVjdCBhbmQgZXhwYW5kcyBpdCBieSB0aGUgcm9vdE1hcmdpbiB2YWx1ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSByZWN0IFRoZSByZWN0IG9iamVjdCB0byBleHBhbmQuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBleHBhbmRlZCByZWN0LlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl9leHBhbmRSZWN0QnlSb290TWFyZ2luID0gZnVuY3Rpb24ocmVjdCkge1xuXHR2YXIgbWFyZ2lucyA9IHRoaXMuX3Jvb3RNYXJnaW5WYWx1ZXMubWFwKGZ1bmN0aW9uKG1hcmdpbiwgaSkge1xuXHRcdHJldHVybiBtYXJnaW4udW5pdCA9PSAncHgnID8gbWFyZ2luLnZhbHVlIDpcblx0XHRcdFx0bWFyZ2luLnZhbHVlICogKGkgJSAyID8gcmVjdC53aWR0aCA6IHJlY3QuaGVpZ2h0KSAvIDEwMDtcblx0fSk7XG5cdHZhciBuZXdSZWN0ID0ge1xuXHRcdHRvcDogcmVjdC50b3AgLSBtYXJnaW5zWzBdLFxuXHRcdHJpZ2h0OiByZWN0LnJpZ2h0ICsgbWFyZ2luc1sxXSxcblx0XHRib3R0b206IHJlY3QuYm90dG9tICsgbWFyZ2luc1syXSxcblx0XHRsZWZ0OiByZWN0LmxlZnQgLSBtYXJnaW5zWzNdXG5cdH07XG5cdG5ld1JlY3Qud2lkdGggPSBuZXdSZWN0LnJpZ2h0IC0gbmV3UmVjdC5sZWZ0O1xuXHRuZXdSZWN0LmhlaWdodCA9IG5ld1JlY3QuYm90dG9tIC0gbmV3UmVjdC50b3A7XG5cdG5ld1JlY3QueCA9IG5ld1JlY3QubGVmdDtcblx0bmV3UmVjdC55ID0gbmV3UmVjdC50b3A7XG5cblx0cmV0dXJuIG5ld1JlY3Q7XG59O1xuXG5cbi8qKlxuICogQWNjZXB0cyBhbiBvbGQgYW5kIG5ldyBlbnRyeSBhbmQgcmV0dXJucyB0cnVlIGlmIGF0IGxlYXN0IG9uZSBvZiB0aGVcbiAqIHRocmVzaG9sZCB2YWx1ZXMgaGFzIGJlZW4gY3Jvc3NlZC5cbiAqIEBwYXJhbSB7P0ludGVyc2VjdGlvbk9ic2VydmVyRW50cnl9IG9sZEVudHJ5IFRoZSBwcmV2aW91cyBlbnRyeSBmb3IgYVxuICogICAgcGFydGljdWxhciB0YXJnZXQgZWxlbWVudCBvciBudWxsIGlmIG5vIHByZXZpb3VzIGVudHJ5IGV4aXN0cy5cbiAqIEBwYXJhbSB7SW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeX0gbmV3RW50cnkgVGhlIGN1cnJlbnQgZW50cnkgZm9yIGFcbiAqICAgIHBhcnRpY3VsYXIgdGFyZ2V0IGVsZW1lbnQuXG4gKiBAcmV0dXJuIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgYSBhbnkgdGhyZXNob2xkIGhhcyBiZWVuIGNyb3NzZWQuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2hhc0Nyb3NzZWRUaHJlc2hvbGQgPVxuXHRcdGZ1bmN0aW9uKG9sZEVudHJ5LCBuZXdFbnRyeSkge1xuXG5cdC8vIFRvIG1ha2UgY29tcGFyaW5nIGVhc2llciwgYW4gZW50cnkgdGhhdCBoYXMgYSByYXRpbyBvZiAwXG5cdC8vIGJ1dCBkb2VzIG5vdCBhY3R1YWxseSBpbnRlcnNlY3QgaXMgZ2l2ZW4gYSB2YWx1ZSBvZiAtMVxuXHR2YXIgb2xkUmF0aW8gPSBvbGRFbnRyeSAmJiBvbGRFbnRyeS5pc0ludGVyc2VjdGluZyA/XG5cdFx0XHRvbGRFbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyB8fCAwIDogLTE7XG5cdHZhciBuZXdSYXRpbyA9IG5ld0VudHJ5LmlzSW50ZXJzZWN0aW5nID9cblx0XHRcdG5ld0VudHJ5LmludGVyc2VjdGlvblJhdGlvIHx8IDAgOiAtMTtcblxuXHQvLyBJZ25vcmUgdW5jaGFuZ2VkIHJhdGlvc1xuXHRpZiAob2xkUmF0aW8gPT09IG5ld1JhdGlvKSByZXR1cm47XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRocmVzaG9sZHMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGhyZXNob2xkID0gdGhpcy50aHJlc2hvbGRzW2ldO1xuXG5cdFx0Ly8gUmV0dXJuIHRydWUgaWYgYW4gZW50cnkgbWF0Y2hlcyBhIHRocmVzaG9sZCBvciBpZiB0aGUgbmV3IHJhdGlvXG5cdFx0Ly8gYW5kIHRoZSBvbGQgcmF0aW8gYXJlIG9uIHRoZSBvcHBvc2l0ZSBzaWRlcyBvZiBhIHRocmVzaG9sZC5cblx0XHRpZiAodGhyZXNob2xkID09IG9sZFJhdGlvIHx8IHRocmVzaG9sZCA9PSBuZXdSYXRpbyB8fFxuXHRcdFx0XHR0aHJlc2hvbGQgPCBvbGRSYXRpbyAhPT0gdGhyZXNob2xkIDwgbmV3UmF0aW8pIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxufTtcblxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHJvb3QgZWxlbWVudCBpcyBhbiBlbGVtZW50IGFuZCBpcyBpbiB0aGUgRE9NLlxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgcm9vdCBlbGVtZW50IGlzIGFuIGVsZW1lbnQgYW5kIGlzIGluIHRoZSBET00uXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3Jvb3RJc0luRG9tID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAhdGhpcy5yb290IHx8IGNvbnRhaW5zRGVlcChkb2N1bWVudCwgdGhpcy5yb290KTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB0YXJnZXQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIHJvb3QuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCBUaGUgdGFyZ2V0IGVsZW1lbnQgdG8gY2hlY2suXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSB0YXJnZXQgZWxlbWVudCBpcyBhIGNoaWxkIG9mIHJvb3QuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3Jvb3RDb250YWluc1RhcmdldCA9IGZ1bmN0aW9uKHRhcmdldCkge1xuXHRyZXR1cm4gY29udGFpbnNEZWVwKHRoaXMucm9vdCB8fCBkb2N1bWVudCwgdGFyZ2V0KTtcbn07XG5cblxuLyoqXG4gKiBBZGRzIHRoZSBpbnN0YW5jZSB0byB0aGUgZ2xvYmFsIEludGVyc2VjdGlvbk9ic2VydmVyIHJlZ2lzdHJ5IGlmIGl0IGlzbid0XG4gKiBhbHJlYWR5IHByZXNlbnQuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3JlZ2lzdGVySW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcblx0aWYgKHJlZ2lzdHJ5LmluZGV4T2YodGhpcykgPCAwKSB7XG5cdFx0cmVnaXN0cnkucHVzaCh0aGlzKTtcblx0fVxufTtcblxuXG4vKipcbiAqIFJlbW92ZXMgdGhlIGluc3RhbmNlIGZyb20gdGhlIGdsb2JhbCBJbnRlcnNlY3Rpb25PYnNlcnZlciByZWdpc3RyeS5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fdW5yZWdpc3Rlckluc3RhbmNlID0gZnVuY3Rpb24oKSB7XG5cdHZhciBpbmRleCA9IHJlZ2lzdHJ5LmluZGV4T2YodGhpcyk7XG5cdGlmIChpbmRleCAhPSAtMSkgcmVnaXN0cnkuc3BsaWNlKGluZGV4LCAxKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHBlcmZvcm1hbmNlLm5vdygpIG1ldGhvZCBvciBudWxsIGluIGJyb3dzZXJzXG4gKiB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIEFQSS5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIGVsYXBzZWQgdGltZSBzaW5jZSB0aGUgcGFnZSB3YXMgcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiBub3coKSB7XG5cdHJldHVybiB3aW5kb3cucGVyZm9ybWFuY2UgJiYgcGVyZm9ybWFuY2Uubm93ICYmIHBlcmZvcm1hbmNlLm5vdygpO1xufVxuXG5cbi8qKlxuICogVGhyb3R0bGVzIGEgZnVuY3Rpb24gYW5kIGRlbGF5cyBpdHMgZXhlY3V0aW9uLCBzbyBpdCdzIG9ubHkgY2FsbGVkIGF0IG1vc3RcbiAqIG9uY2Ugd2l0aGluIGEgZ2l2ZW4gdGltZSBwZXJpb2QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZW91dCBUaGUgYW1vdW50IG9mIHRpbWUgdGhhdCBtdXN0IHBhc3MgYmVmb3JlIHRoZVxuICogICAgIGZ1bmN0aW9uIGNhbiBiZSBjYWxsZWQgYWdhaW4uXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIHRocm90dGxlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZm4sIHRpbWVvdXQpIHtcblx0dmFyIHRpbWVyID0gbnVsbDtcblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIXRpbWVyKSB7XG5cdFx0XHR0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGZuKCk7XG5cdFx0XHRcdHRpbWVyID0gbnVsbDtcblx0XHRcdH0sIHRpbWVvdXQpO1xuXHRcdH1cblx0fTtcbn1cblxuXG4vKipcbiAqIEFkZHMgYW4gZXZlbnQgaGFuZGxlciB0byBhIERPTSBub2RlIGVuc3VyaW5nIGNyb3NzLWJyb3dzZXIgY29tcGF0aWJpbGl0eS5cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgRE9NIG5vZGUgdG8gYWRkIHRoZSBldmVudCBoYW5kbGVyIHRvLlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGV2ZW50IGhhbmRsZXIgdG8gYWRkLlxuICogQHBhcmFtIHtib29sZWFufSBvcHRfdXNlQ2FwdHVyZSBPcHRpb25hbGx5IGFkZHMgdGhlIGV2ZW4gdG8gdGhlIGNhcHR1cmVcbiAqICAgICBwaGFzZS4gTm90ZTogdGhpcyBvbmx5IHdvcmtzIGluIG1vZGVybiBicm93c2Vycy5cbiAqL1xuZnVuY3Rpb24gYWRkRXZlbnQobm9kZSwgZXZlbnQsIGZuLCBvcHRfdXNlQ2FwdHVyZSkge1xuXHRpZiAodHlwZW9mIG5vZGUuYWRkRXZlbnRMaXN0ZW5lciA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUgfHwgZmFsc2UpO1xuXHR9XG5cdGVsc2UgaWYgKHR5cGVvZiBub2RlLmF0dGFjaEV2ZW50ID09ICdmdW5jdGlvbicpIHtcblx0XHRub2RlLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgZm4pO1xuXHR9XG59XG5cblxuLyoqXG4gKiBSZW1vdmVzIGEgcHJldmlvdXNseSBhZGRlZCBldmVudCBoYW5kbGVyIGZyb20gYSBET00gbm9kZS5cbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSBUaGUgRE9NIG5vZGUgdG8gcmVtb3ZlIHRoZSBldmVudCBoYW5kbGVyIGZyb20uXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZXZlbnQgaGFuZGxlciB0byByZW1vdmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdF91c2VDYXB0dXJlIElmIHRoZSBldmVudCBoYW5kbGVyIHdhcyBhZGRlZCB3aXRoIHRoaXNcbiAqICAgICBmbGFnIHNldCB0byB0cnVlLCBpdCBzaG91bGQgYmUgc2V0IHRvIHRydWUgaGVyZSBpbiBvcmRlciB0byByZW1vdmUgaXQuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50KG5vZGUsIGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUpIHtcblx0aWYgKHR5cGVvZiBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZm4sIG9wdF91c2VDYXB0dXJlIHx8IGZhbHNlKTtcblx0fVxuXHRlbHNlIGlmICh0eXBlb2Ygbm9kZS5kZXRhdGNoRXZlbnQgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdG5vZGUuZGV0YXRjaEV2ZW50KCdvbicgKyBldmVudCwgZm4pO1xuXHR9XG59XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnRlcnNlY3Rpb24gYmV0d2VlbiB0d28gcmVjdCBvYmplY3RzLlxuICogQHBhcmFtIHtPYmplY3R9IHJlY3QxIFRoZSBmaXJzdCByZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHJlY3QyIFRoZSBzZWNvbmQgcmVjdC5cbiAqIEByZXR1cm4gez9PYmplY3R9IFRoZSBpbnRlcnNlY3Rpb24gcmVjdCBvciB1bmRlZmluZWQgaWYgbm8gaW50ZXJzZWN0aW9uXG4gKiAgICAgaXMgZm91bmQuXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVSZWN0SW50ZXJzZWN0aW9uKHJlY3QxLCByZWN0Mikge1xuXHR2YXIgdG9wID0gTWF0aC5tYXgocmVjdDEudG9wLCByZWN0Mi50b3ApO1xuXHR2YXIgYm90dG9tID0gTWF0aC5taW4ocmVjdDEuYm90dG9tLCByZWN0Mi5ib3R0b20pO1xuXHR2YXIgbGVmdCA9IE1hdGgubWF4KHJlY3QxLmxlZnQsIHJlY3QyLmxlZnQpO1xuXHR2YXIgcmlnaHQgPSBNYXRoLm1pbihyZWN0MS5yaWdodCwgcmVjdDIucmlnaHQpO1xuXHR2YXIgd2lkdGggPSByaWdodCAtIGxlZnQ7XG5cdHZhciBoZWlnaHQgPSBib3R0b20gLSB0b3A7XG5cblx0cmV0dXJuICh3aWR0aCA+PSAwICYmIGhlaWdodCA+PSAwKSAmJiB7XG5cdFx0eDogbGVmdCxcblx0XHR5OiB0b3AsXG5cdFx0dG9wOiB0b3AsXG5cdFx0Ym90dG9tOiBib3R0b20sXG5cdFx0bGVmdDogbGVmdCxcblx0XHRyaWdodDogcmlnaHQsXG5cdFx0d2lkdGg6IHdpZHRoLFxuXHRcdGhlaWdodDogaGVpZ2h0XG5cdH07XG59XG5cblxuLyoqXG4gKiBTaGltcyB0aGUgbmF0aXZlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG9sZGVyIElFLlxuICogQHBhcmFtIHtFbGVtZW50fSBlbCBUaGUgZWxlbWVudCB3aG9zZSBib3VuZGluZyByZWN0IHRvIGdldC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIChwb3NzaWJseSBzaGltbWVkKSByZWN0IG9mIHRoZSBlbGVtZW50LlxuICovXG5mdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWwpIHtcblx0dmFyIHJlY3Q7XG5cblx0dHJ5IHtcblx0XHRyZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIElnbm9yZSBXaW5kb3dzIDcgSUUxMSBcIlVuc3BlY2lmaWVkIGVycm9yXCJcblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vdzNjL0ludGVyc2VjdGlvbk9ic2VydmVyL3B1bGwvMjA1XG5cdH1cblxuXHRpZiAoIXJlY3QpIHJldHVybiBnZXRFbXB0eVJlY3QoKTtcblxuXHQvLyBPbGRlciBJRVxuXHRpZiAoIShyZWN0LndpZHRoICYmIHJlY3QuaGVpZ2h0ICYmIHJlY3QueCAmJiByZWN0LnkpKSB7XG5cdFx0cmVjdCA9IHtcblx0XHRcdHg6IHJlY3QubGVmdCxcblx0XHRcdHk6IHJlY3QudG9wLFxuXHRcdFx0dG9wOiByZWN0LnRvcCxcblx0XHRcdHJpZ2h0OiByZWN0LnJpZ2h0LFxuXHRcdFx0Ym90dG9tOiByZWN0LmJvdHRvbSxcblx0XHRcdGxlZnQ6IHJlY3QubGVmdCxcblx0XHRcdHdpZHRoOiByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0LFxuXHRcdFx0aGVpZ2h0OiByZWN0LmJvdHRvbSAtIHJlY3QudG9wXG5cdFx0fTtcblx0fVxuXHRyZXR1cm4gcmVjdDtcbn1cblxuXG4vKipcbiAqIFJldHVybnMgYW4gZW1wdHkgcmVjdCBvYmplY3QuIEFuIGVtcHR5IHJlY3QgaXMgcmV0dXJuZWQgd2hlbiBhbiBlbGVtZW50XG4gKiBpcyBub3QgaW4gdGhlIERPTS5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGVtcHR5IHJlY3QuXG4gKi9cbmZ1bmN0aW9uIGdldEVtcHR5UmVjdCgpIHtcblx0cmV0dXJuIHtcblx0XHR4OiAwLFxuXHRcdHk6IDAsXG5cdFx0dG9wOiAwLFxuXHRcdGJvdHRvbTogMCxcblx0XHRsZWZ0OiAwLFxuXHRcdHJpZ2h0OiAwLFxuXHRcdHdpZHRoOiAwLFxuXHRcdGhlaWdodDogMFxuXHR9O1xufVxuXG4vKipcbiAqIENoZWNrcyB0byBzZWUgaWYgYSBwYXJlbnQgZWxlbWVudCBjb250YWlucyBhIGNoaWxkIGVsZW1lbnQgKGluY2x1ZGluZyBpbnNpZGVcbiAqIHNoYWRvdyBET00pLlxuICogQHBhcmFtIHtOb2RlfSBwYXJlbnQgVGhlIHBhcmVudCBlbGVtZW50LlxuICogQHBhcmFtIHtOb2RlfSBjaGlsZCBUaGUgY2hpbGQgZWxlbWVudC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBhcmVudCBub2RlIGNvbnRhaW5zIHRoZSBjaGlsZCBub2RlLlxuICovXG5mdW5jdGlvbiBjb250YWluc0RlZXAocGFyZW50LCBjaGlsZCkge1xuXHR2YXIgbm9kZSA9IGNoaWxkO1xuXHR3aGlsZSAobm9kZSkge1xuXHRcdGlmIChub2RlID09IHBhcmVudCkgcmV0dXJuIHRydWU7XG5cblx0XHRub2RlID0gZ2V0UGFyZW50Tm9kZShub2RlKTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cblxuLyoqXG4gKiBHZXRzIHRoZSBwYXJlbnQgbm9kZSBvZiBhbiBlbGVtZW50IG9yIGl0cyBob3N0IGVsZW1lbnQgaWYgdGhlIHBhcmVudCBub2RlXG4gKiBpcyBhIHNoYWRvdyByb290LlxuICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBub2RlIHdob3NlIHBhcmVudCB0byBnZXQuXG4gKiBAcmV0dXJuIHtOb2RlfG51bGx9IFRoZSBwYXJlbnQgbm9kZSBvciBudWxsIGlmIG5vIHBhcmVudCBleGlzdHMuXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmVudE5vZGUobm9kZSkge1xuXHR2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuXG5cdGlmIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVUeXBlID09IDExICYmIHBhcmVudC5ob3N0KSB7XG5cdFx0Ly8gSWYgdGhlIHBhcmVudCBpcyBhIHNoYWRvdyByb290LCByZXR1cm4gdGhlIGhvc3QgZWxlbWVudC5cblx0XHRyZXR1cm4gcGFyZW50Lmhvc3Q7XG5cdH1cblxuXHRpZiAocGFyZW50ICYmIHBhcmVudC5hc3NpZ25lZFNsb3QpIHtcblx0XHQvLyBJZiB0aGUgcGFyZW50IGlzIGRpc3RyaWJ1dGVkIGluIGEgPHNsb3Q+LCByZXR1cm4gdGhlIHBhcmVudCBvZiBhIHNsb3QuXG5cdFx0cmV0dXJuIHBhcmVudC5hc3NpZ25lZFNsb3QucGFyZW50Tm9kZTtcblx0fVxuXG5cdHJldHVybiBwYXJlbnQ7XG59XG5cblxuLy8gRXhwb3NlcyB0aGUgY29uc3RydWN0b3JzIGdsb2JhbGx5Llxud2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyID0gSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG53aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeSA9IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnk7XG5cbn0od2luZG93LCBkb2N1bWVudCkpO1xufX0pLmNhbGwoJ29iamVjdCcgPT09IHR5cGVvZiB3aW5kb3cgJiYgd2luZG93IHx8ICdvYmplY3QnID09PSB0eXBlb2Ygc2VsZiAmJiBzZWxmIHx8ICdvYmplY3QnID09PSB0eXBlb2YgZ2xvYmFsICYmIGdsb2JhbCB8fCB7fSk7XG4iLCAie1xuXHRcImVsZW1lbnRJZFwiOiBcImZsb2F0VE9DXCJcbn1cbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQgdHlwZSB7Q29uZmlnLCBTdGF0ZX0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQge2NoZWNrQTExeUNvbmZpcm1LZXksIHNjcm9sbFRvcH0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7ZmlsdGVyQWx0ZXJlZENsaWNrc30gZnJvbSAnZXh0LmdhZGdldC5GaWx0ZXJBbHRlcmVkQ2xpY2tzJztcbmltcG9ydCB7Z2VuZXJhdGVFbGVtZW50c30gZnJvbSAnLi91dGlsL2dlbmVyYXRlRWxlbWVudHMnO1xuaW1wb3J0IHtnZW5lcmF0ZVRvZ2dsZXJFbGVtZW50fSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVUb2dnbGVyRWxlbWVudCc7XG5pbXBvcnQge2dldENvbmZpZ30gZnJvbSAnLi9nZXRDb25maWcnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtzZXRNd05vdGlmeVN0eWxlfSBmcm9tICcuL3NldE13Tm90aWZ5U3R5bGUnO1xuXG5jb25zdCBmbG9hdFRPQyA9ICgkb3JpZ2luVG9jOiBKUXVlcnkpOiB2b2lkID0+IHtcblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBvcmlnaW5Ub2M6IEhUTUxFbGVtZW50ID0gJG9yaWdpblRvYy5nZXQoMCkgYXMgSFRNTEVsZW1lbnQ7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICRvcmlnaW5Ub2MucGFyZW50cygnYm9keScpO1xuXG5cdGNvbnN0IHskZmxvYXRUb2MsICRmbG9hdFRvY09wZW5lcn0gPSBnZW5lcmF0ZUVsZW1lbnRzKG9yaWdpblRvYyk7XG5cdCRmbG9hdFRvY09wZW5lci5oaWRlKCkuYXBwZW5kVG8oJGJvZHkpO1xuXG5cdGNvbnN0IGNvbmZpZzogQ29uZmlnID0gZ2V0Q29uZmlnKE9QVElPTlMuZWxlbWVudElkKTtcblx0Y29uc3QgbXdOb3RpZnlTdHlsZTogSFRNTFN0eWxlRWxlbWVudCA9IHNldE13Tm90aWZ5U3R5bGUoKTtcblxuXHRsZXQgaXNTaG93OiBib29sZWFuID0gZmFsc2U7XG5cdGNvbnN0IHN0b3JlU3RhdGUgPSAodGFyZ2V0OiBrZXlvZiBDb25maWcsIHN0YXRlOiBTdGF0ZSk6IHZvaWQgPT4ge1xuXHRcdGNvbmZpZ1t0YXJnZXRdID0gc3RhdGU7XG5cdFx0bXcuc3RvcmFnZS5zZXRPYmplY3QoT1BUSU9OUy5lbGVtZW50SWQsIGNvbmZpZyk7XG5cdH07XG5cblx0bGV0IGRpc2FibGVNd05vdGlmeVN0eWxlVGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+O1xuXHRjb25zdCBkaXNhYmxlTXdOb3RpZnlTdHlsZSA9ICgpOiB2b2lkID0+IHtcblx0XHRpZiAoZGlzYWJsZU13Tm90aWZ5U3R5bGVUaW1lcikge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KGRpc2FibGVNd05vdGlmeVN0eWxlVGltZXIpO1xuXHRcdH1cblx0XHRkaXNhYmxlTXdOb3RpZnlTdHlsZVRpbWVyID0gc2V0VGltZW91dCgoKTogdm9pZCA9PiB7XG5cdFx0XHRpZiAoIWlzU2hvdykge1xuXHRcdFx0XHRtd05vdGlmeVN0eWxlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9LCA1ICogMTAwMCk7XG5cdH07XG5cblx0bGV0IG5vdGlmaWNhdGlvbjogUmV0dXJuVHlwZTx0eXBlb2YgbXcubm90aWZpY2F0aW9uLm5vdGlmeT4gfCB1bmRlZmluZWQ7XG5cdGNvbnN0IGNsb3NlTm90aWZpY2F0aW9uID0gKGN1cnJlbnROb3RpZmljYXRpb246IE5vbk51bGxhYmxlPHR5cGVvZiBub3RpZmljYXRpb24+KTogdm9pZCA9PiB7XG5cdFx0Y3VycmVudE5vdGlmaWNhdGlvbi5jbG9zZSgpO1xuXHRcdCRmbG9hdFRvY09wZW5lci5mYWRlSW4oKTtcblx0XHRzdG9yZVN0YXRlKCdmbG9hdFRPQycsICdjbG9zZScpO1xuXHRcdGRpc2FibGVNd05vdGlmeVN0eWxlKCk7XG5cdH07XG5cblx0Y29uc3Qgc21vb3RoU2Nyb2xsID0gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRpZiAoc2tpbiA9PT0gJ2NpdGl6ZW4nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXHRcdGNvbnN0ICR0YXJnZXQ6IEpRdWVyeSA9ICQodGFyZ2V0KS5wYXJlbnQoKTtcblx0XHRjb25zdCBocmVmOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkdGFyZ2V0LmF0dHIoJ2hyZWYnKTtcblx0XHRpZiAoIWhyZWYpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBhbmNob3JPZmZzZXQ6IEpRdWVyeS5Db29yZGluYXRlcyB8IHVuZGVmaW5lZCA9ICQoaHJlZikub2Zmc2V0KCk7XG5cdFx0aWYgKCFhbmNob3JPZmZzZXQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHNjcm9sbFRvcChgJHthbmNob3JPZmZzZXQudG9wfXB4YCk7XG5cdH07XG5cblx0Y29uc3QgdG9nZ2xlVG9jID0gKFxuXHRcdGN1cnJlbnRJc1Nob3c6IGJvb2xlYW4gfCAnb3BlbicgPSB0cnVlLFxuXHRcdHByZU5vdGlmaWNhdGlvbjogdHlwZW9mIG5vdGlmaWNhdGlvbiA9IHVuZGVmaW5lZFxuXHQpOiB0eXBlb2Ygbm90aWZpY2F0aW9uID0+IHtcblx0XHRwcmVOb3RpZmljYXRpb24/LmNsb3NlKCk7XG5cdFx0aXNTaG93ID0gISFjdXJyZW50SXNTaG93O1xuXG5cdFx0c3dpdGNoIChjdXJyZW50SXNTaG93KSB7XG5cdFx0XHRjYXNlIHRydWU6XG5cdFx0XHRcdGlmIChjb25maWcuZmxvYXRUT0MgPT09ICdjbG9zZScpIHtcblx0XHRcdFx0XHQkZmxvYXRUb2NPcGVuZXIuZmFkZUluKCk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnb3Blbic6XG5cdFx0XHRcdCRmbG9hdFRvY09wZW5lci5mYWRlT3V0KCk7XG5cdFx0XHRcdHN0b3JlU3RhdGUoJ2Zsb2F0VE9DJywgJ29wZW4nKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHQkZmxvYXRUb2NPcGVuZXIuZmFkZU91dCgpO1xuXHRcdFx0XHRkaXNhYmxlTXdOb3RpZnlTdHlsZSgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bXdOb3RpZnlTdHlsZS5kaXNhYmxlZCA9IGZhbHNlO1xuXG5cdFx0aWYgKHByZU5vdGlmaWNhdGlvbikge1xuXHRcdFx0cHJlTm90aWZpY2F0aW9uLnN0YXJ0KCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHByZU5vdGlmaWNhdGlvbiA9IG13Lm5vdGlmaWNhdGlvbi5ub3RpZnkoJGZsb2F0VG9jLCB7XG5cdFx0XHRcdGNsYXNzZXM6ICdub3ByaW50Jyxcblx0XHRcdFx0aWQ6IE9QVElPTlMuZWxlbWVudElkLFxuXHRcdFx0XHRhdXRvSGlkZTogZmFsc2UsXG5cdFx0XHR9KTtcblx0XHRcdGNvbnN0IG5vdGlmaWNhdGlvbkxpc3RlbmVyID0gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdGlmICghY2hlY2tBMTF5Q29uZmlybUtleShldmVudCkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXHRcdFx0XHRpZiAodGFyZ2V0LmlkID09PSAnY2xvc2UnKSB7XG5cdFx0XHRcdFx0Y2xvc2VOb3RpZmljYXRpb24ocHJlTm90aWZpY2F0aW9uIGFzIE5vbk51bGxhYmxlPHR5cGVvZiBwcmVOb3RpZmljYXRpb24+KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzbW9vdGhTY3JvbGwoZXZlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0cHJlTm90aWZpY2F0aW9uLiRub3RpZmljYXRpb24ub24oXG5cdFx0XHRcdCdjbGljaycsXG5cdFx0XHRcdGZpbHRlckFsdGVyZWRDbGlja3MoKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgbm90aWZpY2F0aW9uTGlzdGVuZXIoZXZlbnQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHRcdHByZU5vdGlmaWNhdGlvbi4kbm90aWZpY2F0aW9uLm9uKCdrZXlkb3duJywgbm90aWZpY2F0aW9uTGlzdGVuZXIpO1xuXHRcdH1cblxuXHRcdHJldHVybiBwcmVOb3RpZmljYXRpb247XG5cdH07XG5cblx0Y29uc3Qgb2JzZXJ2ZXJDYWxsYmFjayA9IChlbnRyaWVzOiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5W10pOiB2b2lkID0+IHtcblx0XHRjb25zdCBbZW50cnldID0gZW50cmllcztcblx0XHRpZiAoIWVudHJ5KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHtpbnRlcnNlY3Rpb25SYXRpb30gPSBlbnRyeTtcblx0XHRub3RpZmljYXRpb24gPSB0b2dnbGVUb2MoaW50ZXJzZWN0aW9uUmF0aW8gPT09IDAsIG5vdGlmaWNhdGlvbik7XG5cdH07XG5cdGNvbnN0IGludGVyc2VjdGlvbk9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihvYnNlcnZlckNhbGxiYWNrKTtcblx0aW50ZXJzZWN0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShvcmlnaW5Ub2MpO1xuXG5cdGNvbnN0IG9wZW5lckxpc3RlbmVyID0gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmICghY2hlY2tBMTF5Q29uZmlybUtleShldmVudCkpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bm90aWZpY2F0aW9uID0gdG9nZ2xlVG9jKCdvcGVuJyk7XG5cdH07XG5cdCRmbG9hdFRvY09wZW5lci5vbignY2xpY2snLCBvcGVuZXJMaXN0ZW5lcik7XG5cdCRmbG9hdFRvY09wZW5lci5vbigna2V5ZG93bicsIG9wZW5lckxpc3RlbmVyKTtcblxuXHRjb25zdCBjb2xsYXBzZU9yaWdpblRvYyA9ICgpOiB2b2lkID0+IHtcblx0XHRpZiAoc2tpbiAhPT0gJ2NpdGl6ZW4nKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgaXNDb2xsYXBzZTogYm9vbGVhbiA9IGNvbmZpZy5vcmlnaW5UT0MgPT09ICdjbG9zZSc7XG5cblx0XHRjb25zdCAkb3JpZ2luVG9jVGl0bGU6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyN0b2MgLnRvY3RpdGxlJyk7XG5cdFx0Y29uc3QgJG9yaWdpblRvY0l0ZW06IEpRdWVyeSA9ICRib2R5LmZpbmQoJyN0b2MgdWwnKTtcblxuXHRcdGNvbnN0ICR0b2dnbGVyOiBKUXVlcnkgPSBnZW5lcmF0ZVRvZ2dsZXJFbGVtZW50KGlzQ29sbGFwc2UpO1xuXHRcdCRvcmlnaW5Ub2NUaXRsZS5hcHBlbmQoJHRvZ2dsZXIpO1xuXG5cdFx0Y29uc3QgY29sbGFwc2VUb2dnbGUgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJG9yaWdpblRvY1RpdGxlLmZpbmQoJy5vby11aS1pbmRpY2F0b3JFbGVtZW50LWluZGljYXRvcicpO1xuXHRcdFx0JGVsZW1lbnQudG9nZ2xlQ2xhc3MoJ2NvbGxhcHNlJyk7XG5cdFx0XHRpZiAoaXNDb2xsYXBzZSkge1xuXHRcdFx0XHQkZWxlbWVudC5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ0V4cGFuZCcpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCRlbGVtZW50LmF0dHIoJ3RpdGxlJywgZ2V0TWVzc2FnZSgnQ29sbGFwc2UnKSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQkb3JpZ2luVG9jVGl0bGUub24oJ2NsaWNrJywgKCk6IHZvaWQgPT4ge1xuXHRcdFx0aXNDb2xsYXBzZSA/IHN0b3JlU3RhdGUoJ29yaWdpblRPQycsICdvcGVuJykgOiBzdG9yZVN0YXRlKCdvcmlnaW5UT0MnLCAnY2xvc2UnKTtcblx0XHRcdGNvbGxhcHNlVG9nZ2xlKCk7XG5cdFx0XHQkb3JpZ2luVG9jSXRlbS5mYWRlVG9nZ2xlKCk7XG5cdFx0fSk7XG5cblx0XHRpZiAoaXNDb2xsYXBzZSkge1xuXHRcdFx0JG9yaWdpblRvY0l0ZW0uZmFkZU91dCgpO1xuXHRcdH1cblx0fTtcblx0Y29sbGFwc2VPcmlnaW5Ub2MoKTtcbn07XG5cbmV4cG9ydCB7ZmxvYXRUT0N9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRDbG9zZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDbG9zZScsXG5cdFx0XHRqYTogJ+mWieOBmOOCiycsXG5cdFx0XHQnemgtaGFucyc6ICflhbPpl60nLFxuXHRcdFx0J3poLWhhbnQnOiAn6Zec6ZaJJyxcblx0XHR9KSxcblx0XHRDb250ZW50czogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDb250ZW50cycsXG5cdFx0XHRqYTogJ+ebruasoScsXG5cdFx0XHR6aDogJ+ebruW9lScsXG5cdFx0fSksXG5cdFx0Q29sbGFwc2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ29sbGFwc2UnLFxuXHRcdFx0amE6ICfmipjjgornlbPjgb8nLFxuXHRcdFx0J3poLWhhbnMnOiAn5oqY5Y+gJyxcblx0XHRcdCd6aC1oYW50JzogJ+aRuuWPoCcsXG5cdFx0fSksXG5cdFx0RXhwYW5kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0V4cGFuZCcsXG5cdFx0XHRqYTogJ+WxlemWiycsXG5cdFx0XHQnemgtaGFucyc6ICflsZXlvIAnLFxuXHRcdFx0J3poLWhhbnQnOiAn5bGV6ZaLJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2VuZXJhdGVFbGVtZW50cyA9IChvcmlnaW5Ub2M6IEhUTUxFbGVtZW50KSA9PiB7XG5cdGNvbnN0IHRvYzogSFRNTEVsZW1lbnQgPSBvcmlnaW5Ub2MuY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50O1xuXHR0b2MucXVlcnlTZWxlY3RvcignaW5wdXQnKT8ucmVtb3ZlKCk7XG5cdHRvYy5xdWVyeVNlbGVjdG9yKCcudG9jdG9nZ2xlc3BhbicpPy5yZW1vdmUoKTtcblx0Y29uc3QgJHRvYzogSlF1ZXJ5ID0gJCh0b2MpO1xuXG5cdGNvbnN0ICRmbG9hdFRvYzogSlF1ZXJ5ID0gJHRvY1xuXHRcdC5jbG9uZSgpXG5cdFx0LnJlbW92ZUF0dHIoJ2lkJylcblx0XHQucHJlcGVuZChcblx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdC5hZGRDbGFzcygnb28tdWktaW5kaWNhdG9yRWxlbWVudC1pbmRpY2F0b3Igb28tdWktaWNvbi1jbG9zZScpXG5cdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRpZDogJ2Nsb3NlJyxcblx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnQ2xvc2UnKSxcblx0XHRcdFx0XHRyb2xlOiAnYnV0dG9uJyxcblx0XHRcdFx0XHR0YWJpbmRleDogJzAnLFxuXHRcdFx0XHR9KVxuXHRcdCk7XG5cblx0Y29uc3QgJGZsb2F0VG9jT3BlbmVyOiBKUXVlcnkgPSAkKCc8ZGl2PicpXG5cdFx0LmFkZENsYXNzKCdub3ByaW50Jylcblx0XHQuYXR0cih7XG5cdFx0XHRpZDogJ2Zsb2F0VG9jLW9wZW5lcicsXG5cdFx0XHR0aXRsZTogZ2V0TWVzc2FnZSgnQ29udGVudHMnKSxcblx0XHRcdHJvbGU6ICdidXR0b24nLFxuXHRcdFx0dGFiaW5kZXg6ICcwJyxcblx0XHR9KVxuXHRcdC5hcHBlbmQoXG5cdFx0XHQkKCc8c3Bhbj4nKS5hZGRDbGFzcygnb28tdWktaW5kaWNhdG9yRWxlbWVudC1pbmRpY2F0b3Igb28tdWktaWNvbi1yZWZlcmVuY2UnKSxcblx0XHRcdCQoJzxzcGFuPicpLnRleHQoZ2V0TWVzc2FnZSgnQ29udGVudHMnKSlcblx0XHQpO1xuXG5cdHJldHVybiB7XG5cdFx0JGZsb2F0VG9jLFxuXHRcdCRmbG9hdFRvY09wZW5lcixcblx0fTtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVFbGVtZW50c307XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2VuZXJhdGVUb2dnbGVyRWxlbWVudCA9IChpc0NvbGxhcHNlOiBib29sZWFuKTogSlF1ZXJ5ID0+IHtcblx0bGV0ICR0b2dnbGVyOiBKUXVlcnkgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnb28tdWktaW5kaWNhdG9yRWxlbWVudC1pbmRpY2F0b3Igb28tdWktaWNvbi1kb3duVHJpYW5nbGUnKTtcblx0JHRvZ2dsZXIgPSBpc0NvbGxhcHNlXG5cdFx0PyAkdG9nZ2xlci5hdHRyKCd0aXRsZScsIGdldE1lc3NhZ2UoJ0V4cGFuZCcpKVxuXHRcdDogJHRvZ2dsZXIuYXR0cigndGl0bGUnLCBnZXRNZXNzYWdlKCdDb2xsYXBzZScpKS5hZGRDbGFzcygnY29sbGFwc2UnKTtcblxuXHRyZXR1cm4gJHRvZ2dsZXI7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVG9nZ2xlckVsZW1lbnR9O1xuIiwgImltcG9ydCB0eXBlIHtDb25maWd9IGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCBnZXRDb25maWcgPSAoaWQ6IHN0cmluZyk6IENvbmZpZyA9PiB7XG5cdGxldCBjb25maWcgPSBtdy5zdG9yYWdlLmdldE9iamVjdChpZCkgYXMgUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Q29uZmlnPjtcblx0Y29uZmlnIHx8PSB7XG5cdFx0ZmxvYXRUT0M6IHdpbmRvdy5vdXRlckhlaWdodCA8IHdpbmRvdy5vdXRlcldpZHRoID8gJ29wZW4nIDogJ2Nsb3NlJyxcblx0XHRvcmlnaW5UT0M6ICdvcGVuJyxcblx0fTtcblxuXHRyZXR1cm4gY29uZmlnO1xufTtcblxuZXhwb3J0IHtnZXRDb25maWd9O1xuIiwgImNvbnN0IHNldE13Tm90aWZ5U3R5bGUgPSAoKTogSFRNTFN0eWxlRWxlbWVudCA9PiB7XG5cdGNvbnN0IHN0eWxlOiBIVE1MU3R5bGVFbGVtZW50ID0gbXcubG9hZGVyLmFkZFN0eWxlVGFnKFxuXHRcdCcubXctbm90aWZpY2F0aW9uLWFyZWF7cmlnaHQ6dW5zZXQ7d2lkdGg6YXV0bzttYXgtd2lkdGg6MjBlbX0ubXctbm90aWZpY2F0aW9uey13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTk5OXB4KTstbW96LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC05OTlweCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTk5OXB4KX0ubXctbm90aWZpY2F0aW9uLXZpc2libGV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgwKTstbW96LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDApfSdcblx0KTtcblxuXHRzdHlsZS5kaXNhYmxlZCA9IHRydWU7XG5cblx0cmV0dXJuIHN0eWxlO1xufTtcblxuZXhwb3J0IHtzZXRNd05vdGlmeVN0eWxlfTtcbiIsICJpbXBvcnQgJy4vRmxvYXRUT0MubGVzcyc7XG5pbXBvcnQge2Zsb2F0VE9DfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRjb25zdCAkb3JpZ2luVG9jOiBKUXVlcnkgPSAkYm9keS5maW5kKCcjdG9jJyk7XG5cdGlmICghJG9yaWdpblRvYy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmbG9hdFRPQygkb3JpZ2luVG9jKTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLEtBQUMsU0FBUyxXQUFXO0FBQ3JCLFVBQUksRUFBRSwwQkFBeUIsVUFBUSwrQkFBOEIsVUFBUSx1QkFBc0IsT0FBTywwQkFBMEIsWUFDakk7QUFXSCxTQUFDLFNBQVNBLFNBQVFDLFdBQVU7QUFDNUI7QUFFQSxjQUFJLG9CQUFvQiwwQkFBMEJELFdBQ2xELCtCQUErQkEsV0FDL0IsdUJBQXVCQSxRQUFPLDBCQUEwQjtBQUV4RCxjQUFJ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QWV0QixRQUFRO0lBQ3hCO0VBQ0Q7QUFDQW1CLG9CQUFrQjtBQUNuQjs7QU1sTEEsSUFBQVEscUJBQXNCeEgsUUFBQSxpQkFBQTtBQUV0QixNQUFBLEdBQUt3SCxtQkFBQUMsU0FBUSxFQUFFQyxLQUFNL0QsV0FBeUM7QUFDN0QsUUFBTUgsYUFBcUJHLE1BQU11RCxLQUFLLE1BQU07QUFDNUMsTUFBSSxDQUFDMUQsV0FBV21FLFFBQVE7QUFDdkI7RUFDRDtBQUVBN0UsV0FBU1UsVUFBVTtBQUNwQixDQUFDOyIsCiAgIm5hbWVzIjogWyJ3aW5kb3ciLCAiZG9jdW1lbnQiLCAiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCAiZWxlbWVudElkIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAiQ2xvc2UiLCAibG9jYWxpemUiLCAiZW4iLCAiamEiLCAiQ29udGVudHMiLCAiemgiLCAiQ29sbGFwc2UiLCAiRXhwYW5kIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZW5lcmF0ZUVsZW1lbnRzIiwgIm9yaWdpblRvYyIsICJfdG9jJHF1ZXJ5U2VsZWN0b3IiLCAiX3RvYyRxdWVyeVNlbGVjdG9yMiIsICJ0b2MiLCAiY2xvbmVOb2RlIiwgInF1ZXJ5U2VsZWN0b3IiLCAicmVtb3ZlIiwgIiR0b2MiLCAiJCIsICIkZmxvYXRUb2MiLCAiY2xvbmUiLCAicmVtb3ZlQXR0ciIsICJwcmVwZW5kIiwgImFkZENsYXNzIiwgImF0dHIiLCAiaWQiLCAidGl0bGUiLCAicm9sZSIsICJ0YWJpbmRleCIsICIkZmxvYXRUb2NPcGVuZXIiLCAiYXBwZW5kIiwgInRleHQiLCAiZ2VuZXJhdGVUb2dnbGVyRWxlbWVudCIsICJpc0NvbGxhcHNlIiwgIiR0b2dnbGVyIiwgImdldENvbmZpZyIsICJjb25maWciLCAibXciLCAic3RvcmFnZSIsICJnZXRPYmplY3QiLCAiZmxvYXRUT0MiLCAid2luZG93IiwgIm91dGVySGVpZ2h0IiwgIm91dGVyV2lkdGgiLCAib3JpZ2luVE9DIiwgInNldE13Tm90aWZ5U3R5bGUiLCAic3R5bGUiLCAibG9hZGVyIiwgImFkZFN0eWxlVGFnIiwgImRpc2FibGVkIiwgIiRvcmlnaW5Ub2MiLCAic2tpbiIsICJnZXQiLCAiJGJvZHkiLCAicGFyZW50cyIsICJoaWRlIiwgImFwcGVuZFRvIiwgIm13Tm90aWZ5U3R5bGUiLCAiaXNTaG93IiwgInN0b3JlU3RhdGUiLCAidGFyZ2V0IiwgInN0YXRlIiwgInNldE9iamVjdCIsICJkaXNhYmxlTXdOb3RpZnlTdHlsZVRpbWVyIiwgImRpc2FibGVNd05vdGlmeVN0eWxlIiwgImNsZWFyVGltZW91dCIsICJzZXRUaW1lb3V0IiwgIm5vdGlmaWNhdGlvbiIsICJjbG9zZU5vdGlmaWNhdGlvbiIsICJjdXJyZW50Tm90aWZpY2F0aW9uIiwgImNsb3NlIiwgImZhZGVJbiIsICJzbW9vdGhTY3JvbGwiLCAiZXZlbnQiLCAiJHRhcmdldCIsICJwYXJlbnQiLCAiaHJlZiIsICJhbmNob3JPZmZzZXQiLCAib2Zmc2V0IiwgInByZXZlbnREZWZhdWx0IiwgInNjcm9sbFRvcCIsICJjb25jYXQiLCAidG9wIiwgInRvZ2dsZVRvYyIsICJjdXJyZW50SXNTaG93IiwgInByZU5vdGlmaWNhdGlvbiIsICJfcHJlTm90aWZpY2F0aW9uIiwgImZhZGVPdXQiLCAic3RhcnQiLCAibm90aWZ5IiwgImNsYXNzZXMiLCAiYXV0b0hpZGUiLCAibm90aWZpY2F0aW9uTGlzdGVuZXIiLCAic3RvcFByb3BhZ2F0aW9uIiwgImNoZWNrQTExeUNvbmZpcm1LZXkiLCAiJG5vdGlmaWNhdGlvbiIsICJvbiIsICJmaWx0ZXJBbHRlcmVkQ2xpY2tzIiwgIm9ic2VydmVyQ2FsbGJhY2siLCAiZW50cmllcyIsICJlbnRyeSIsICJpbnRlcnNlY3Rpb25SYXRpbyIsICJpbnRlcnNlY3Rpb25PYnNlcnZlciIsICJJbnRlcnNlY3Rpb25PYnNlcnZlciIsICJvYnNlcnZlIiwgIm9wZW5lckxpc3RlbmVyIiwgImNvbGxhcHNlT3JpZ2luVG9jIiwgIiRvcmlnaW5Ub2NUaXRsZSIsICJmaW5kIiwgIiRvcmlnaW5Ub2NJdGVtIiwgImNvbGxhcHNlVG9nZ2xlIiwgIiRlbGVtZW50IiwgInRvZ2dsZUNsYXNzIiwgImZhZGVUb2dnbGUiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImdldEJvZHkiLCAidGhlbiIsICJsZW5ndGgiXQp9Cg==
