/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/QuickImport}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/QuickImportAllMedia}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
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

// dist/QuickImportAllMedia/QuickImportAllMedia.js
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
//! src/QuickImportAllMedia/QuickImportAllMedia.ts
var import_ext_gadget4 = require("ext.gadget.QuickImport");
//! src/QuickImportAllMedia/modules/core.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/QuickImportAllMedia/modules/api.ts
var import_ext_gadget = require("ext.gadget.QuickImport");
//! src/QuickImportAllMedia/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.Toastify");
var toastifyInstance = {
  hideToast: () => {
  }
};
var parse = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (page) {
    const params = {
      page,
      action: "parse",
      format: "json",
      formatversion: "2",
      prop: "text",
      redirects: true,
      disabletoc: true
    };
    const response = yield import_ext_gadget.api.post(params);
    return response;
  });
  return function parse2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getElements = (element) => {
  return [...element.querySelectorAll("a[href^='/wiki/File:']"), ...element.querySelectorAll("a[href*='title=File:']")];
};
var getElementsFromParse = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (titles) {
    const fileLinkElements = [];
    titles = (0, import_ext_gadget2.uniqueArray)(titles);
    var _iterator = _createForOfIteratorHelper(titles), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const title = _step.value;
        try {
          const response = yield parse(title);
          if (!response["parse"] || !response["parse"].text) {
            continue;
          }
          const pageContent = document.createElement("span");
          pageContent.innerHTML = response["parse"].text;
          var _iterator2 = _createForOfIteratorHelper(getElements(pageContent)), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              const element = _step2.value;
              fileLinkElements[fileLinkElements.length] = element;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        } catch {
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return fileLinkElements;
  });
  return function getElementsFromParse2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var queryImages = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* (titles) {
    const params = {
      titles,
      action: "query",
      format: "json",
      formatversion: "2",
      prop: "images",
      imlimit: 5e3
    };
    const response = yield import_ext_gadget.api.post(params);
    return response;
  });
  return function queryImages2(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var getImagesFromElements = (fileLinkElements) => {
  const fileNames = [];
  fileLinkElements = (0, import_ext_gadget2.uniqueArray)(fileLinkElements);
  const {
    wgArticlePath,
    wgScript
  } = mw.config.get();
  const articleRegex = new RegExp("".concat(wgArticlePath.replace("$1", ""), "(File:[^#]+)"));
  const scriptRegex = new RegExp("".concat(wgScript, "\\?title=(File:[^#&]+)"));
  var _iterator3 = _createForOfIteratorHelper(fileLinkElements), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      const element = _step3.value;
      const {
        href,
        classList
      } = element;
      if (!href || href.includes("redlink=1")) {
        continue;
      }
      if (classList.contains("new")) {
        continue;
      }
      let fileName;
      if (articleRegex.test(href)) {
        const match = articleRegex.exec(href);
        fileName = match[1];
        fileName = fileName.replace(/File:(File:|Image:)?/i, "File:");
        fileName = decodeURIComponent(fileName);
        fileNames[fileNames.length] = fileName;
      }
      if (scriptRegex.test(href)) {
        const match = scriptRegex.exec(href);
        fileName = match[1];
        fileName = fileName.replace(/File:(File:|Image:)?/i, "File:");
        fileName = decodeURIComponent(fileName);
        fileNames[fileNames.length] = fileName;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return (0, import_ext_gadget2.uniqueArray)(fileNames);
};
var getImages = /* @__PURE__ */ function() {
  var _ref4 = _asyncToGenerator(function* (titles) {
    const fileNames = [];
    titles = (0, import_ext_gadget2.uniqueArray)((0, import_ext_gadget2.generateArray)(titles));
    for (let i = 0; i < titles.length; i++) {
      const querytitles = titles.splice(0, 50);
      if (!querytitles.length) {
        continue;
      }
      try {
        const response = yield queryImages(querytitles);
        if (!response["query"] || !response["query"].pages) {
          continue;
        }
        var _iterator4 = _createForOfIteratorHelper(response["query"].pages), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            const page = _step4.value;
            if (!page.images) {
              continue;
            }
            var _iterator5 = _createForOfIteratorHelper(page.images), _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                const {
                  title
                } = _step5.value;
                if (!title) {
                  continue;
                }
                fileNames[fileNames.length] = title;
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      } catch {
      }
    }
    return (0, import_ext_gadget2.uniqueArray)(fileNames);
  });
  return function getImages2(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var getAllImages = /* @__PURE__ */ function() {
  var _ref5 = _asyncToGenerator(function* (titles) {
    toastifyInstance.hideToast();
    (0, import_ext_gadget3.toastify)({
      text: "正在获取导入目标",
      duration: -1
    }, "info");
    let fileNames = [];
    const {
      wgNamespaceNumber,
      wgPageName
    } = mw.config.get();
    if (!titles || !titles.length) {
      titles = wgNamespaceNumber < 0 ? [] : [wgPageName];
    }
    const elementsFromPage = getElements(document);
    const fileNamesFromPage = getImagesFromElements(elementsFromPage);
    const elementsFromParse = yield getElementsFromParse(fileNamesFromPage);
    const fileNamesFromParse = getImagesFromElements(elementsFromParse);
    fileNames = (0, import_ext_gadget2.uniqueArray)([...fileNamesFromPage, ...fileNamesFromParse, ...yield getImages([...titles, ...fileNamesFromPage])]);
    toastifyInstance.hideToast();
    toastifyInstance = (0, import_ext_gadget3.toastify)({
      text: "获取导入目标完成",
      duration: -1
    }, "success");
    return (0, import_ext_gadget2.uniqueArray)(fileNames);
  });
  return function getAllImages2(_x5) {
    return _ref5.apply(this, arguments);
  };
}();
//! src/QuickImportAllMedia/QuickImportAllMedia.ts
window.detectIfFileRedirect = import_ext_gadget4.detectIfFileRedirect;
window.getAllImages = getAllImages;
(function quickImportAllMedia() {
  const {
    wgCanonicalSpecialPageName,
    wgCurRevisionId
  } = mw.config.get();
  if (!(wgCurRevisionId || ["Prefixindex", "BrokenRedirects", "Wantedfiles"].includes(wgCanonicalSpecialPageName || ""))) {
    return;
  }
  const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
  const element = mw.util.addPortletLink(portletId, "#", "导入此页面所有文件", "t-import");
  if (!element) {
    return;
  }
  element.addEventListener("click", () => {
    void _asyncToGenerator(function* () {
      const fileNames = yield getAllImages();
      if (!fileNames.length) {
        return;
      }
      yield (0, import_ext_gadget4.detectIfFileRedirect)(fileNames, true);
    })().then(() => {
      (0, import_ext_gadget4.refreshPage)();
    });
  });
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvUXVpY2tJbXBvcnRBbGxNZWRpYS50cyIsICJzcmMvUXVpY2tJbXBvcnRBbGxNZWRpYS9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1F1aWNrSW1wb3J0QWxsTWVkaWEvbW9kdWxlcy9hcGkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGV0ZWN0SWZGaWxlUmVkaXJlY3QsIHJlZnJlc2hQYWdlfSBmcm9tICdleHQuZ2FkZ2V0LlF1aWNrSW1wb3J0JztcbmltcG9ydCB7Z2V0QWxsSW1hZ2VzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblx0aW50ZXJmYWNlIFdpbmRvdyB7XG5cdFx0ZGV0ZWN0SWZGaWxlUmVkaXJlY3Q6IERldGVjdElmRmlsZVJlZGlyZWN0O1xuXHRcdGdldEFsbEltYWdlczogdHlwZW9mIGdldEFsbEltYWdlcztcblx0fVxufVxuXG53aW5kb3cuZGV0ZWN0SWZGaWxlUmVkaXJlY3QgPSBkZXRlY3RJZkZpbGVSZWRpcmVjdDtcbndpbmRvdy5nZXRBbGxJbWFnZXMgPSBnZXRBbGxJbWFnZXM7XG5cbihmdW5jdGlvbiBxdWlja0ltcG9ydEFsbE1lZGlhKCk6IHZvaWQge1xuXHRjb25zdCB7d2dDYW5vbmljYWxTcGVjaWFsUGFnZU5hbWUsIHdnQ3VyUmV2aXNpb25JZH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmIChcblx0XHQhKFxuXHRcdFx0d2dDdXJSZXZpc2lvbklkIHx8XG5cdFx0XHRbJ1ByZWZpeGluZGV4JywgJ0Jyb2tlblJlZGlyZWN0cycsICdXYW50ZWRmaWxlcyddLmluY2x1ZGVzKHdnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIHx8ICcnKVxuXHRcdClcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcG9ydGxldElkOiAncC1jYWN0aW9ucycgfCAncC10YicgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRjb25zdCBlbGVtZW50OiBIVE1MTElFbGVtZW50IHwgbnVsbCA9IG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsICflr7zlhaXmraTpobXpnaLmiYDmnInmlofku7YnLCAndC1pbXBvcnQnKTtcblx0aWYgKCFlbGVtZW50KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0XHR2b2lkIChhc3luYyAoKSA9PiB7XG5cdFx0XHRjb25zdCBmaWxlTmFtZXMgPSBhd2FpdCBnZXRBbGxJbWFnZXMoKTtcblx0XHRcdGlmICghZmlsZU5hbWVzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRhd2FpdCBkZXRlY3RJZkZpbGVSZWRpcmVjdChmaWxlTmFtZXMsIHRydWUpO1xuXHRcdH0pKCkudGhlbigoKSA9PiB7XG5cdFx0XHRyZWZyZXNoUGFnZSgpO1xuXHRcdH0pO1xuXHR9KTtcbn0pKCk7XG4iLCAiaW1wb3J0IHtnZW5lcmF0ZUFycmF5LCB1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge3RvYXN0aWZ5fSBmcm9tICdleHQuZ2FkZ2V0LlRvYXN0aWZ5JztcblxubGV0IHRvYXN0aWZ5SW5zdGFuY2U6IFRvYXN0aWZ5SW5zdGFuY2UgPSB7XG5cdGhpZGVUb2FzdDogKCkgPT4ge30sXG59O1xuXG5jb25zdCBwYXJzZSA9IGFzeW5jIChwYWdlOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0XHRwYWdlLFxuXHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0cHJvcDogJ3RleHQnLFxuXHRcdHJlZGlyZWN0czogdHJ1ZSxcblx0XHRkaXNhYmxldG9jOiB0cnVlLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZ2V0RWxlbWVudHMgPSAoZWxlbWVudDogRG9jdW1lbnQgfCBIVE1MRWxlbWVudCkgPT4ge1xuXHRyZXR1cm4gW1xuXHRcdC4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oXCJhW2hyZWZePScvd2lraS9GaWxlOiddXCIpLFxuXHRcdC4uLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MQW5jaG9yRWxlbWVudD4oXCJhW2hyZWYqPSd0aXRsZT1GaWxlOiddXCIpLFxuXHRdO1xufTtcblxuY29uc3QgZ2V0RWxlbWVudHNGcm9tUGFyc2UgPSBhc3luYyAodGl0bGVzOiBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBmaWxlTGlua0VsZW1lbnRzOiBIVE1MQW5jaG9yRWxlbWVudFtdID0gW107XG5cdHRpdGxlcyA9IHVuaXF1ZUFycmF5KHRpdGxlcyk7XG5cblx0Zm9yIChjb25zdCB0aXRsZSBvZiB0aXRsZXMpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwYXJzZSh0aXRsZSk7XG5cdFx0XHRpZiAoIXJlc3BvbnNlWydwYXJzZSddIHx8ICFyZXNwb25zZVsncGFyc2UnXS50ZXh0KSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBwYWdlQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdHBhZ2VDb250ZW50LmlubmVySFRNTCA9IHJlc3BvbnNlWydwYXJzZSddLnRleHQgYXMgc3RyaW5nO1xuXG5cdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZ2V0RWxlbWVudHMocGFnZUNvbnRlbnQpKSB7XG5cdFx0XHRcdGZpbGVMaW5rRWxlbWVudHNbZmlsZUxpbmtFbGVtZW50cy5sZW5ndGhdID0gZWxlbWVudDtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHt9XG5cdH1cblxuXHRyZXR1cm4gZmlsZUxpbmtFbGVtZW50cztcbn07XG5cbmNvbnN0IHF1ZXJ5SW1hZ2VzID0gYXN5bmMgKHRpdGxlczogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcblx0Y29uc3QgcGFyYW1zOiBBcGlRdWVyeUltYWdlc1BhcmFtcyA9IHtcblx0XHR0aXRsZXMsXG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRwcm9wOiAnaW1hZ2VzJyxcblx0XHRpbWxpbWl0OiA1MDAwLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZ2V0SW1hZ2VzRnJvbUVsZW1lbnRzID0gKGZpbGVMaW5rRWxlbWVudHM6IEhUTUxBbmNob3JFbGVtZW50W10pID0+IHtcblx0Y29uc3QgZmlsZU5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXHRmaWxlTGlua0VsZW1lbnRzID0gdW5pcXVlQXJyYXkoZmlsZUxpbmtFbGVtZW50cyk7XG5cdGNvbnN0IHt3Z0FydGljbGVQYXRoLCB3Z1NjcmlwdH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGNvbnN0IGFydGljbGVSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgJHt3Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJycpfShGaWxlOlteI10rKWApO1xuXHRjb25zdCBzY3JpcHRSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgJHt3Z1NjcmlwdH1cXFxcP3RpdGxlPShGaWxlOlteIyZdKylgKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZmlsZUxpbmtFbGVtZW50cykge1xuXHRcdC8vIFJlcGxhY2UgYG5ldyBTZXQoKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdGNvbnN0IHtocmVmLCBjbGFzc0xpc3R9ID0gZWxlbWVudDtcblxuXHRcdGlmICghaHJlZiB8fCBocmVmLmluY2x1ZGVzKCdyZWRsaW5rPTEnKSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKGNsYXNzTGlzdC5jb250YWlucygnbmV3JykpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCBmaWxlTmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmIChhcnRpY2xlUmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IGFydGljbGVSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdGZpbGVOYW1lID0gbWF0Y2hbMV0gYXMgc3RyaW5nO1xuXHRcdFx0ZmlsZU5hbWUgPSBmaWxlTmFtZS5yZXBsYWNlKC9GaWxlOihGaWxlOnxJbWFnZTopPy9pLCAnRmlsZTonKTtcblx0XHRcdGZpbGVOYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGZpbGVOYW1lKTtcblx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IGZpbGVOYW1lO1xuXHRcdH1cblxuXHRcdGlmIChzY3JpcHRSZWdleC50ZXN0KGhyZWYpKSB7XG5cdFx0XHRjb25zdCBtYXRjaDogUmVnRXhwRXhlY0FycmF5ID0gc2NyaXB0UmVnZXguZXhlYyhocmVmKSBhcyBSZWdFeHBFeGVjQXJyYXk7XG5cdFx0XHRmaWxlTmFtZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHRcdGZpbGVOYW1lID0gZmlsZU5hbWUucmVwbGFjZSgvRmlsZTooRmlsZTp8SW1hZ2U6KT8vaSwgJ0ZpbGU6Jyk7XG5cdFx0XHRmaWxlTmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChmaWxlTmFtZSk7XG5cdFx0XHRmaWxlTmFtZXNbZmlsZU5hbWVzLmxlbmd0aF0gPSBmaWxlTmFtZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdW5pcXVlQXJyYXkoZmlsZU5hbWVzKTtcbn07XG5cbmNvbnN0IGdldEltYWdlcyA9IGFzeW5jICh0aXRsZXM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IGZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcblx0dGl0bGVzID0gdW5pcXVlQXJyYXkoZ2VuZXJhdGVBcnJheSh0aXRsZXMpKTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IHF1ZXJ5dGl0bGVzID0gdGl0bGVzLnNwbGljZSgwLCA1MCk7XG5cdFx0aWYgKCFxdWVyeXRpdGxlcy5sZW5ndGgpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHF1ZXJ5SW1hZ2VzKHF1ZXJ5dGl0bGVzKTtcblx0XHRcdGlmICghcmVzcG9uc2VbJ3F1ZXJ5J10gfHwgIXJlc3BvbnNlWydxdWVyeSddLnBhZ2VzKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgcmVzcG9uc2VbJ3F1ZXJ5J10ucGFnZXMpIHtcblx0XHRcdFx0aWYgKCFwYWdlLmltYWdlcykge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Zm9yIChjb25zdCB7dGl0bGV9IG9mIHBhZ2UuaW1hZ2VzIGFzIHtcblx0XHRcdFx0XHRuczogbnVtYmVyO1xuXHRcdFx0XHRcdHRpdGxlOiBzdHJpbmc7XG5cdFx0XHRcdH1bXSkge1xuXHRcdFx0XHRcdGlmICghdGl0bGUpIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGZpbGVOYW1lc1tmaWxlTmFtZXMubGVuZ3RoXSA9IHRpdGxlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KGZpbGVOYW1lcyk7XG59O1xuXG5jb25zdCBnZXRBbGxJbWFnZXMgPSBhc3luYyAodGl0bGVzPzogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPHN0cmluZ1tdPiA9PiB7XG5cdHRvYXN0aWZ5SW5zdGFuY2UuaGlkZVRvYXN0KCk7XG5cdHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfmraPlnKjojrflj5blr7zlhaXnm67moIcnLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J2luZm8nXG5cdCk7XG5cblx0bGV0IGZpbGVOYW1lczogc3RyaW5nW10gPSBbXTtcblx0Y29uc3Qge3dnTmFtZXNwYWNlTnVtYmVyLCB3Z1BhZ2VOYW1lfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRpZiAoIXRpdGxlcyB8fCAhdGl0bGVzLmxlbmd0aCkge1xuXHRcdHRpdGxlcyA9IHdnTmFtZXNwYWNlTnVtYmVyIDwgMCA/IFtdIDogW3dnUGFnZU5hbWVdO1xuXHR9XG5cblx0Y29uc3QgZWxlbWVudHNGcm9tUGFnZSA9IGdldEVsZW1lbnRzKGRvY3VtZW50KTtcblx0Y29uc3QgZmlsZU5hbWVzRnJvbVBhZ2UgPSBnZXRJbWFnZXNGcm9tRWxlbWVudHMoZWxlbWVudHNGcm9tUGFnZSk7XG5cdGNvbnN0IGVsZW1lbnRzRnJvbVBhcnNlID0gYXdhaXQgZ2V0RWxlbWVudHNGcm9tUGFyc2UoZmlsZU5hbWVzRnJvbVBhZ2UpO1xuXHRjb25zdCBmaWxlTmFtZXNGcm9tUGFyc2UgPSBnZXRJbWFnZXNGcm9tRWxlbWVudHMoZWxlbWVudHNGcm9tUGFyc2UpO1xuXG5cdGZpbGVOYW1lcyA9IHVuaXF1ZUFycmF5KFtcblx0XHQuLi5maWxlTmFtZXNGcm9tUGFnZSxcblx0XHQuLi5maWxlTmFtZXNGcm9tUGFyc2UsXG5cdFx0Li4uKGF3YWl0IGdldEltYWdlcyhbLi4udGl0bGVzLCAuLi5maWxlTmFtZXNGcm9tUGFnZV0pKSxcblx0XSk7XG5cblx0dG9hc3RpZnlJbnN0YW5jZS5oaWRlVG9hc3QoKTtcblx0dG9hc3RpZnlJbnN0YW5jZSA9IHRvYXN0aWZ5KFxuXHRcdHtcblx0XHRcdHRleHQ6ICfojrflj5blr7zlhaXnm67moIflrozmiJAnLFxuXHRcdFx0ZHVyYXRpb246IC0xLFxuXHRcdH0sXG5cdFx0J3N1Y2Nlc3MnXG5cdCk7XG5cblx0cmV0dXJuIHVuaXF1ZUFycmF5KGZpbGVOYW1lcyk7IC8vIFJlcGxhY2UgYFsuLi5uZXcgU2V0KCldYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG59O1xuXG5leHBvcnQge2dldEFsbEltYWdlc307XG4iLCAiZXhwb3J0IHthcGl9IGZyb20gJ2V4dC5nYWRnZXQuUXVpY2tJbXBvcnQnO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQWdEQyxRQUFBLHdCQUFBOztBQ0FoRCxJQUFBQyxxQkFBeUNELFFBQUEsaUJBQUE7O0FDQXpDLElBQUFFLG9CQUFrQkYsUUFBQSx3QkFBQTs7QURFbEIsSUFBQUcscUJBQXVCSCxRQUFBLHFCQUFBO0FBRXZCLElBQUlJLG1CQUFxQztFQUN4Q0MsV0FBV0EsTUFBTTtFQUFDO0FBQ25CO0FBRUEsSUFBTUMsUUFBQSwyQkFBQTtBQUFBLE1BQUFDLE9BQUFDLGtCQUFRLFdBQU9DLE1BQWlCO0FBQ3JDLFVBQU1DLFNBQXlCO01BQzlCRDtNQUNBRSxRQUFRO01BQ1JDLFFBQVE7TUFDUkMsZUFBZTtNQUNmQyxNQUFNO01BQ05DLFdBQVc7TUFDWEMsWUFBWTtJQUNiO0FBQ0EsVUFBTUMsV0FBQSxNQUFpQmYsa0JBQUFnQixJQUFJQyxLQUFLVCxNQUFNO0FBRXRDLFdBQU9PO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0FiTVgsT0FBQWMsSUFBQTtBQUFBLFdBQUFiLEtBQUFjLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQWVOLElBQU1DLGNBQWVDLGFBQW9DO0FBQ3hELFNBQU8sQ0FDTixHQUFHQSxRQUFRQyxpQkFBb0Msd0JBQXdCLEdBQ3ZFLEdBQUdELFFBQVFDLGlCQUFvQyx3QkFBd0IsQ0FBQTtBQUV6RTtBQUVBLElBQU1DLHVCQUFBLDJCQUFBO0FBQUEsTUFBQUMsUUFBQW5CLGtCQUF1QixXQUFPb0IsUUFBcUI7QUFDeEQsVUFBTUMsbUJBQXdDLENBQUE7QUFDOUNELGNBQUEsR0FBUzNCLG1CQUFBNkIsYUFBWUYsTUFBTTtBQUFBLFFBQUFHLFlBQUFDLDJCQUVQSixNQUFBLEdBQUFLO0FBQUEsUUFBQTtBQUFwQixXQUFBRixVQUFBRyxFQUFBLEdBQUEsRUFBQUQsUUFBQUYsVUFBQUksRUFBQSxHQUFBQyxRQUE0QjtBQUFBLGNBQWpCQyxRQUFBSixNQUFBSztBQUNWLFlBQUk7QUFDSCxnQkFBTXJCLFdBQUEsTUFBaUJYLE1BQU0rQixLQUFLO0FBQ2xDLGNBQUksQ0FBQ3BCLFNBQVMsT0FBTyxLQUFLLENBQUNBLFNBQVMsT0FBTyxFQUFFc0IsTUFBTTtBQUNsRDtVQUNEO0FBRUEsZ0JBQU1DLGNBQWNDLFNBQVNDLGNBQWMsTUFBTTtBQUNqREYsc0JBQVlHLFlBQVkxQixTQUFTLE9BQU8sRUFBRXNCO0FBQUEsY0FBQUssYUFBQVosMkJBRXBCVCxZQUFZaUIsV0FBVyxDQUFBLEdBQUFLO0FBQUEsY0FBQTtBQUE3QyxpQkFBQUQsV0FBQVYsRUFBQSxHQUFBLEVBQUFXLFNBQUFELFdBQUFULEVBQUEsR0FBQUMsUUFBZ0Q7QUFBQSxvQkFBckNaLFVBQUFxQixPQUFBUDtBQUNWVCwrQkFBaUJBLGlCQUFpQmlCLE1BQU0sSUFBSXRCO1lBQzdDO1VBQUEsU0FBQXVCLEtBQUE7QUFBQUgsdUJBQUFJLEVBQUFELEdBQUE7VUFBQSxVQUFBO0FBQUFILHVCQUFBSyxFQUFBO1VBQUE7UUFDRCxRQUFRO1FBQUM7TUFDVjtJQUFBLFNBQUFGLEtBQUE7QUFBQWhCLGdCQUFBaUIsRUFBQUQsR0FBQTtJQUFBLFVBQUE7QUFBQWhCLGdCQUFBa0IsRUFBQTtJQUFBO0FBRUEsV0FBT3BCO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0FyQk1ILHNCQUFBd0IsS0FBQTtBQUFBLFdBQUF2QixNQUFBTixNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7QUF1Qk4sSUFBTTZCLGNBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBNUMsa0JBQWMsV0FBT29CLFFBQThCO0FBQ3hELFVBQU1sQixTQUErQjtNQUNwQ2tCO01BQ0FqQixRQUFRO01BQ1JDLFFBQVE7TUFDUkMsZUFBZTtNQUNmQyxNQUFNO01BQ051QyxTQUFTO0lBQ1Y7QUFDQSxVQUFNcEMsV0FBQSxNQUFpQmYsa0JBQUFnQixJQUFJQyxLQUFLVCxNQUFNO0FBRXRDLFdBQU9PO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0FaTWtDLGFBQUFHLEtBQUE7QUFBQSxXQUFBRixNQUFBL0IsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBO0FBY04sSUFBTWlDLHdCQUF5QjFCLHNCQUEwQztBQUN4RSxRQUFNMkIsWUFBc0IsQ0FBQTtBQUM1QjNCLHNCQUFBLEdBQW1CNUIsbUJBQUE2QixhQUFZRCxnQkFBZ0I7QUFDL0MsUUFBTTtJQUFDNEI7SUFBZUM7RUFBUSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBQ2hELFFBQU1DLGVBQXVCLElBQUlDLE9BQUEsR0FBQUMsT0FBVVAsY0FBY1EsUUFBUSxNQUFNLEVBQUUsR0FBQyxjQUFBLENBQWM7QUFDeEYsUUFBTUMsY0FBc0IsSUFBSUgsT0FBQSxHQUFBQyxPQUFVTixVQUFRLHdCQUFBLENBQXdCO0FBQUEsTUFBQVMsYUFBQW5DLDJCQUVwREgsZ0JBQUEsR0FBQXVDO0FBQUEsTUFBQTtBQUF0QixTQUFBRCxXQUFBakMsRUFBQSxHQUFBLEVBQUFrQyxTQUFBRCxXQUFBaEMsRUFBQSxHQUFBQyxRQUF3QztBQUFBLFlBQTdCWixVQUFBNEMsT0FBQTlCO0FBRVYsWUFBTTtRQUFDK0I7UUFBTUM7TUFBUyxJQUFJOUM7QUFFMUIsVUFBSSxDQUFDNkMsUUFBUUEsS0FBS0UsU0FBUyxXQUFXLEdBQUc7QUFDeEM7TUFDRDtBQUVBLFVBQUlELFVBQVVFLFNBQVMsS0FBSyxHQUFHO0FBQzlCO01BQ0Q7QUFFQSxVQUFJQztBQUNKLFVBQUlYLGFBQWFZLEtBQUtMLElBQUksR0FBRztBQUM1QixjQUFNTSxRQUF5QmIsYUFBYWMsS0FBS1AsSUFBSTtBQUNyREksbUJBQVdFLE1BQU0sQ0FBQztBQUNsQkYsbUJBQVdBLFNBQVNSLFFBQVEseUJBQXlCLE9BQU87QUFDNURRLG1CQUFXSSxtQkFBbUJKLFFBQVE7QUFDdENqQixrQkFBVUEsVUFBVVYsTUFBTSxJQUFJMkI7TUFDL0I7QUFFQSxVQUFJUCxZQUFZUSxLQUFLTCxJQUFJLEdBQUc7QUFDM0IsY0FBTU0sUUFBeUJULFlBQVlVLEtBQUtQLElBQUk7QUFDcERJLG1CQUFXRSxNQUFNLENBQUM7QUFDbEJGLG1CQUFXQSxTQUFTUixRQUFRLHlCQUF5QixPQUFPO0FBQzVEUSxtQkFBV0ksbUJBQW1CSixRQUFRO0FBQ3RDakIsa0JBQVVBLFVBQVVWLE1BQU0sSUFBSTJCO01BQy9CO0lBQ0Q7RUFBQSxTQUFBMUIsS0FBQTtBQUFBb0IsZUFBQW5CLEVBQUFELEdBQUE7RUFBQSxVQUFBO0FBQUFvQixlQUFBbEIsRUFBQTtFQUFBO0FBRUEsVUFBQSxHQUFPaEQsbUJBQUE2QixhQUFZMEIsU0FBUztBQUM3QjtBQUVBLElBQU1zQixZQUFBLDJCQUFBO0FBQUEsTUFBQUMsUUFBQXZFLGtCQUFZLFdBQU9vQixRQUE4QjtBQUN0RCxVQUFNNEIsWUFBc0IsQ0FBQTtBQUM1QjVCLGNBQUEsR0FBUzNCLG1CQUFBNkIsY0FBQSxHQUFZN0IsbUJBQUErRSxlQUFjcEQsTUFBTSxDQUFDO0FBRTFDLGFBQVNxRCxJQUFJLEdBQUdBLElBQUlyRCxPQUFPa0IsUUFBUW1DLEtBQUs7QUFDdkMsWUFBTUMsY0FBY3RELE9BQU91RCxPQUFPLEdBQUcsRUFBRTtBQUN2QyxVQUFJLENBQUNELFlBQVlwQyxRQUFRO0FBQ3hCO01BQ0Q7QUFFQSxVQUFJO0FBQ0gsY0FBTTdCLFdBQUEsTUFBaUJrQyxZQUFZK0IsV0FBVztBQUM5QyxZQUFJLENBQUNqRSxTQUFTLE9BQU8sS0FBSyxDQUFDQSxTQUFTLE9BQU8sRUFBRW1FLE9BQU87QUFDbkQ7UUFDRDtBQUFBLFlBQUFDLGFBQUFyRCwyQkFFbUJmLFNBQVMsT0FBTyxFQUFFbUUsS0FBQSxHQUFBRTtBQUFBLFlBQUE7QUFBckMsZUFBQUQsV0FBQW5ELEVBQUEsR0FBQSxFQUFBb0QsU0FBQUQsV0FBQWxELEVBQUEsR0FBQUMsUUFBNEM7QUFBQSxrQkFBakMzQixPQUFBNkUsT0FBQWhEO0FBQ1YsZ0JBQUksQ0FBQzdCLEtBQUs4RSxRQUFRO0FBQ2pCO1lBQ0Q7QUFBQSxnQkFBQUMsYUFBQXhELDJCQUVzQnZCLEtBQUs4RSxNQUFBLEdBQUFFO0FBQUEsZ0JBQUE7QUFBM0IsbUJBQUFELFdBQUF0RCxFQUFBLEdBQUEsRUFBQXVELFNBQUFELFdBQUFyRCxFQUFBLEdBQUFDLFFBR0s7QUFBQSxzQkFITTtrQkFBQ0M7Z0JBQUssSUFBQW9ELE9BQUFuRDtBQUloQixvQkFBSSxDQUFDRCxPQUFPO0FBQ1g7Z0JBQ0Q7QUFFQW1CLDBCQUFVQSxVQUFVVixNQUFNLElBQUlUO2NBQy9CO1lBQUEsU0FBQVUsS0FBQTtBQUFBeUMseUJBQUF4QyxFQUFBRCxHQUFBO1lBQUEsVUFBQTtBQUFBeUMseUJBQUF2QyxFQUFBO1lBQUE7VUFDRDtRQUFBLFNBQUFGLEtBQUE7QUFBQXNDLHFCQUFBckMsRUFBQUQsR0FBQTtRQUFBLFVBQUE7QUFBQXNDLHFCQUFBcEMsRUFBQTtRQUFBO01BQ0QsUUFBUTtNQUFDO0lBQ1Y7QUFFQSxZQUFBLEdBQU9oRCxtQkFBQTZCLGFBQVkwQixTQUFTO0VBQzdCLENBQUE7QUFBQSxTQUFBLFNBcENNc0IsV0FBQVksS0FBQTtBQUFBLFdBQUFYLE1BQUExRCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7QUFzQ04sSUFBTXFFLGVBQUEsMkJBQUE7QUFBQSxNQUFBQyxRQUFBcEYsa0JBQWUsV0FBT29CLFFBQWtEO0FBQzdFeEIscUJBQWlCQyxVQUFVO0FBQzNCLEtBQUEsR0FBQUYsbUJBQUEwRixVQUNDO01BQ0N0RCxNQUFNO01BQ051RCxVQUFVO0lBQ1gsR0FDQSxNQUNEO0FBRUEsUUFBSXRDLFlBQXNCLENBQUE7QUFDMUIsVUFBTTtNQUFDdUM7TUFBbUJDO0lBQVUsSUFBSXJDLEdBQUdDLE9BQU9DLElBQUk7QUFFdEQsUUFBSSxDQUFDakMsVUFBVSxDQUFDQSxPQUFPa0IsUUFBUTtBQUM5QmxCLGVBQVNtRSxvQkFBb0IsSUFBSSxDQUFBLElBQUssQ0FBQ0MsVUFBVTtJQUNsRDtBQUVBLFVBQU1DLG1CQUFtQjFFLFlBQVlrQixRQUFRO0FBQzdDLFVBQU15RCxvQkFBb0IzQyxzQkFBc0IwQyxnQkFBZ0I7QUFDaEUsVUFBTUUsb0JBQUEsTUFBMEJ6RSxxQkFBcUJ3RSxpQkFBaUI7QUFDdEUsVUFBTUUscUJBQXFCN0Msc0JBQXNCNEMsaUJBQWlCO0FBRWxFM0MsaUJBQUEsR0FBWXZELG1CQUFBNkIsYUFBWSxDQUN2QixHQUFHb0UsbUJBQ0gsR0FBR0Usb0JBQ0gsR0FBQSxNQUFVdEIsVUFBVSxDQUFDLEdBQUdsRCxRQUFRLEdBQUdzRSxpQkFBaUIsQ0FBQyxDQUFBLENBQ3JEO0FBRUQ5RixxQkFBaUJDLFVBQVU7QUFDM0JELHdCQUFBLEdBQW1CRCxtQkFBQTBGLFVBQ2xCO01BQ0N0RCxNQUFNO01BQ051RCxVQUFVO0lBQ1gsR0FDQSxTQUNEO0FBRUEsWUFBQSxHQUFPN0YsbUJBQUE2QixhQUFZMEIsU0FBUztFQUM3QixDQUFBO0FBQUEsU0FBQSxTQXRDTW1DLGNBQUFVLEtBQUE7QUFBQSxXQUFBVCxNQUFBdkUsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztBRHZJTmdGLE9BQU9DLHVCQUF1QnhHLG1CQUFBd0c7QUFDOUJELE9BQU9YLGVBQWVBO0NBRXJCLFNBQVNhLHNCQUE0QjtBQUNyQyxRQUFNO0lBQUNDO0lBQTRCQztFQUFlLElBQUkvQyxHQUFHQyxPQUFPQyxJQUFJO0FBQ3BFLE1BQ0MsRUFDQzZDLG1CQUNBLENBQUMsZUFBZSxtQkFBbUIsYUFBYSxFQUFFbkMsU0FBU2tDLDhCQUE4QixFQUFFLElBRTNGO0FBQ0Q7RUFDRDtBQUVBLFFBQU1FLFlBQW1DbEUsU0FBU21FLGNBQWMsYUFBYSxJQUFJLGVBQWU7QUFDaEcsUUFBTXBGLFVBQWdDbUMsR0FBR2tELEtBQUtDLGVBQWVILFdBQVcsS0FBSyxhQUFhLFVBQVU7QUFDcEcsTUFBSSxDQUFDbkYsU0FBUztBQUNiO0VBQ0Q7QUFFQUEsVUFBUXVGLGlCQUFpQixTQUFTLE1BQVk7QUFDN0MsU0FBQXZHLGtCQUFNLGFBQVk7QUFDakIsWUFBTWdELFlBQUEsTUFBa0JtQyxhQUFhO0FBQ3JDLFVBQUksQ0FBQ25DLFVBQVVWLFFBQVE7QUFDdEI7TUFDRDtBQUNBLGFBQUEsR0FBTS9DLG1CQUFBd0csc0JBQXFCL0MsV0FBVyxJQUFJO0lBQzNDLENBQUEsRUFBRyxFQUFFd0QsS0FBSyxNQUFNO0FBQ2YsT0FBQSxHQUFBakgsbUJBQUFrSCxhQUFZO0lBQ2IsQ0FBQztFQUNGLENBQUM7QUFDRixHQUFHOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDQiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInRvYXN0aWZ5SW5zdGFuY2UiLCAiaGlkZVRvYXN0IiwgInBhcnNlIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAicGFnZSIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicmVkaXJlY3RzIiwgImRpc2FibGV0b2MiLCAicmVzcG9uc2UiLCAiYXBpIiwgInBvc3QiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgImdldEVsZW1lbnRzIiwgImVsZW1lbnQiLCAicXVlcnlTZWxlY3RvckFsbCIsICJnZXRFbGVtZW50c0Zyb21QYXJzZSIsICJfcmVmMiIsICJ0aXRsZXMiLCAiZmlsZUxpbmtFbGVtZW50cyIsICJ1bmlxdWVBcnJheSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAidGl0bGUiLCAidmFsdWUiLCAidGV4dCIsICJwYWdlQ29udGVudCIsICJkb2N1bWVudCIsICJjcmVhdGVFbGVtZW50IiwgImlubmVySFRNTCIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJsZW5ndGgiLCAiZXJyIiwgImUiLCAiZiIsICJfeDIiLCAicXVlcnlJbWFnZXMiLCAiX3JlZjMiLCAiaW1saW1pdCIsICJfeDMiLCAiZ2V0SW1hZ2VzRnJvbUVsZW1lbnRzIiwgImZpbGVOYW1lcyIsICJ3Z0FydGljbGVQYXRoIiwgIndnU2NyaXB0IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiYXJ0aWNsZVJlZ2V4IiwgIlJlZ0V4cCIsICJjb25jYXQiLCAicmVwbGFjZSIsICJzY3JpcHRSZWdleCIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJocmVmIiwgImNsYXNzTGlzdCIsICJpbmNsdWRlcyIsICJjb250YWlucyIsICJmaWxlTmFtZSIsICJ0ZXN0IiwgIm1hdGNoIiwgImV4ZWMiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgImdldEltYWdlcyIsICJfcmVmNCIsICJnZW5lcmF0ZUFycmF5IiwgImkiLCAicXVlcnl0aXRsZXMiLCAic3BsaWNlIiwgInBhZ2VzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImltYWdlcyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJfeDQiLCAiZ2V0QWxsSW1hZ2VzIiwgIl9yZWY1IiwgInRvYXN0aWZ5IiwgImR1cmF0aW9uIiwgIndnTmFtZXNwYWNlTnVtYmVyIiwgIndnUGFnZU5hbWUiLCAiZWxlbWVudHNGcm9tUGFnZSIsICJmaWxlTmFtZXNGcm9tUGFnZSIsICJlbGVtZW50c0Zyb21QYXJzZSIsICJmaWxlTmFtZXNGcm9tUGFyc2UiLCAiX3g1IiwgIndpbmRvdyIsICJkZXRlY3RJZkZpbGVSZWRpcmVjdCIsICJxdWlja0ltcG9ydEFsbE1lZGlhIiwgIndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lIiwgIndnQ3VyUmV2aXNpb25JZCIsICJwb3J0bGV0SWQiLCAicXVlcnlTZWxlY3RvciIsICJ1dGlsIiwgImFkZFBvcnRsZXRMaW5rIiwgImFkZEV2ZW50TGlzdGVuZXIiLCAidGhlbiIsICJyZWZyZXNoUGFnZSJdCn0K
