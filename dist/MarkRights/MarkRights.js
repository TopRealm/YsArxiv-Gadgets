/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-MarkRights.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/MarkRights}
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

// dist/MarkRights/MarkRights.js
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
//! src/MarkRights/MarkRights.ts
var MarkRights_exports = {};
__export(MarkRights_exports, {
  queryGlobalUserGroups: () => queryGlobalUserGroups,
  queryUserGroups: () => queryUserGroups
});
module.exports = __toCommonJS(MarkRights_exports);
//! src/MarkRights/options.json
var version = 2;
//! src/MarkRights/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("MarkRights/".concat(version));
//! src/MarkRights/modules/query.ts
var queryUserGroups = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (ususers) {
    const params = {
      ususers,
      action: "query",
      format: "json",
      formatversion: "2",
      list: "users",
      usprop: "groups",
      smaxage: 600,
      maxage: 600
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryUserGroups2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var queryGlobalUserGroups = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (user) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      meta: "globaluserinfo",
      guiuser: user,
      guiprop: "groups",
      smaxage: 600,
      maxage: 600
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryGlobalUserGroups2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
//! src/MarkRights/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    responsibleoperator: (0, import_ext_gadget2.localize)({
      en: "Responsible Operator",
      "zh-hans": "责任运营",
      "zh-hant": "責任運營"
    }),
    steward: (0, import_ext_gadget2.localize)({
      en: "Steward",
      "zh-hans": "档案理事员",
      "zh-hant": "檔案理事員"
    }),
    checkuser: (0, import_ext_gadget2.localize)({
      en: "CheckUser",
      "zh-hans": "用户查核",
      "zh-hant": "用戶查核"
    }),
    suppress: (0, import_ext_gadget2.localize)({
      en: "Oversighter",
      "zh-hans": "监督员",
      "zh-hant": "監督員"
    }),
    sysop: (0, import_ext_gadget2.localize)({
      en: "SysOp",
      "zh-hans": "管理员",
      "zh-hant": "管理員"
    }),
    "interface-admin": (0, import_ext_gadget2.localize)({
      en: "Interface Administrator",
      "zh-hans": "界面管理员",
      "zh-hant": "介面管理員"
    }),
    templateeditor: (0, import_ext_gadget2.localize)({
      en: "Template Editor",
      "zh-hans": "模板编辑员",
      "zh-hant": "模板編輯員"
    }),
    importer: (0, import_ext_gadget2.localize)({
      en: "Importer",
      "zh-hans": "导入者",
      "zh-hant": "匯入者"
    }),
    patroller: (0, import_ext_gadget2.localize)({
      en: "Patroller",
      "zh-hans": "巡查员",
      "zh-hant": "巡查員"
    }),
    autopatrolled: (0, import_ext_gadget2.localize)({
      en: "Good Editor",
      "zh-hans": "优秀编辑者",
      "zh-hant": "優秀編輯者"
    }),
    eventsponsor: (0, import_ext_gadget2.localize)({
      en: "Event Sponsor",
      "zh-hans": "活动组织者",
      "zh-hant": "活動組織者"
    }),
    "massmessage-sender": (0, import_ext_gadget2.localize)({
      en: "MassMessage sender",
      "zh-hans": "大量消息发送者",
      "zh-hant": "大量訊息傳送者"
    }),
    confirmed: (0, import_ext_gadget2.localize)({
      en: "Confirmed user",
      "zh-hans": "确认用户",
      "zh-hant": "確認用戶"
    }),
    autoconfirmed: (0, import_ext_gadget2.localize)({
      en: "Auto-confirmed user",
      "zh-hans": "自动确认用户",
      "zh-hant": "自動確認用戶"
    }),
    bot: (0, import_ext_gadget2.localize)({
      en: "Bot",
      "zh-hans": "机器人",
      "zh-hant": "機械人"
    }),
    flood: (0, import_ext_gadget2.localize)({
      en: "Flooder",
      "zh-hans": "机器用户",
      "zh-hant": "機械用戶"
    }),
    "rnrsverify-exempt": (0, import_ext_gadget2.localize)({
      en: "Exempted from real-name verification",
      "zh-hans": "实名制验证豁免",
      "zh-hant": "實名制驗證豁免"
    }),
    "ipblock-exempt": (0, import_ext_gadget2.localize)({
      en: "Exempted from IP blocks",
      "zh-hans": "IP封禁豁免",
      "zh-hant": "IP封鎖豁免"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/MarkRights/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var getUsername = (url) => {
  if (!url) {
    return "";
  }
  const username = mw.util.getParamValue("title", url);
  const decode = (string, replace) => {
    return decodeURIComponent((() => {
      try {
        return decodeURIComponent(replace(string));
      } catch {
        return replace(string).replace(/%(?!\d+)/g, "%25");
      }
    })());
  };
  if (username) {
    return decode(username, (string) => {
      return string.replace("User:", "").replace(/_/g, " ");
    });
  }
  const usernameMatch = url.match(/\/wiki\/User:(.+?)$/);
  if (usernameMatch !== null && usernameMatch !== void 0 && usernameMatch[1]) {
    return decode(usernameMatch[1], (string) => {
      return string.replace(/_/g, " ");
    });
  }
  return "";
};
var appendUserRightsMark = ($userLinks, {
  userGroupMap,
  globalUserGroupMap
}) => {
  var _iterator2 = _createForOfIteratorHelper($userLinks), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var _$element$attr, _userGroupMap$get, _globalUserGroupMap$g;
      const element = _step2.value;
      const $element = $(element);
      if ($element.parents("li").find(".gadgets-markrights").length) {
        continue;
      }
      if ($element.siblings().find(".gadgets-markrights").length) {
        continue;
      }
      const username = getUsername((_$element$attr = $element.attr("href")) !== null && _$element$attr !== void 0 ? _$element$attr : "");
      if (!username) {
        continue;
      }
      const groups = (_userGroupMap$get = userGroupMap.get(username)) !== null && _userGroupMap$get !== void 0 ? _userGroupMap$get : [];
      const globalGroups = (_globalUserGroupMap$g = globalUserGroupMap.get(username)) !== null && _globalUserGroupMap$g !== void 0 ? _globalUserGroupMap$g : [];
      if (!groups) {
        continue;
      }
      const $sups = $("<span>").addClass("gadgets-markrights");
      var _iterator3 = _createForOfIteratorHelper((0, import_ext_gadget3.uniqueArray)([...groups, ...globalGroups])), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const group = _step3.value;
          const className = "gadgets-markrights__".concat(group);
          if ($sups.find("sup").hasClass(className)) {
            continue;
          }
          $sups.append(
            // The following classes are used here:
            // * gadget-markrights__responsibleoperator
            // * gadget-markrights__steward
            // * gadget-markrights__checkuser
            // * gadget-markrights__suppress
            // * gadget-markrights__sysop
            // * gadget-markrights__interface-admin
            // * gadget-markrights__templateeditor
            // * gadget-markrights__importer
            // * gadget-markrights__patroller
            // * gadget-markrights__autopatrolled
            // * gadget-markrights__eventsponsor
            // * gadget-markrights__massmessage-sender
            // * gadget-markrights__confirmed
            // * gadget-markrights__autoconfirmed
            // * gadget-markrights__bot
            // * gadget-markrights__flood
            // * gadget-markrights__ipblock-exempt
            // * gadget-markrights__rnrsverify-exempt
            $("<sup>").addClass(className).attr({
              alt: getMessage(group),
              title: getMessage(group)
            })
          );
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      $element.after($sups);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
};
var markUserRights = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* ($content) {
    const $userLinks = $content.find("a.mw-userlink:not(.mw-anonuserlink)");
    let users = [];
    const queue = [];
    const userGroupMap = /* @__PURE__ */ new Map();
    const globalUserGroupMap = /* @__PURE__ */ new Map();
    var _iterator4 = _createForOfIteratorHelper($userLinks), _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
        const element = _step4.value;
        const $element = $(element);
        if ($element.parents("li").find(".gadgets-markrights").length) {
          continue;
        }
        if ($element.siblings().find(".gadgets-markrights").length) {
          continue;
        }
        const {
          textContent
        } = element;
        const userLinkText = textContent === null || textContent === void 0 ? void 0 : textContent.toString();
        if (userLinkText) {
          users[users.length] = userLinkText;
        }
        users = (0, import_ext_gadget3.uniqueArray)(users);
        if (users.length === 25) {
          queue[queue.length] = users;
          users = [];
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    if (users.length > 0) {
      queue[queue.length] = users;
    }
    for (var _i = 0, _queue = queue; _i < _queue.length; _i++) {
      const ususers = _queue[_i];
      try {
        const queryUserResponse = yield queryUserGroups(ususers);
        const {
          users: queryUsers
        } = queryUserResponse["query"];
        var _iterator5 = _createForOfIteratorHelper(queryUsers), _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
            const user = _step5.value;
            if (!user || !user.groups) {
              continue;
            }
            userGroupMap.set(user.name, user.groups.filter((element) => {
              return element !== "*";
            }));
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        var _iterator6 = _createForOfIteratorHelper(ususers), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            const user = _step6.value;
            const queryGlobalUserInfoResponse = yield queryGlobalUserGroups(user);
            if (queryGlobalUserInfoResponse["query"] && queryGlobalUserInfoResponse["query"].globaluserinfo) {
              const {
                groups: globalgroups
              } = queryGlobalUserInfoResponse["query"].globaluserinfo;
              globalUserGroupMap.set(user, globalgroups);
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        appendUserRightsMark($userLinks, {
          userGroupMap,
          globalUserGroupMap
        });
      } catch {
      }
    }
  });
  return function markUserRights2(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
//! src/MarkRights/MarkRights.ts
mw.hook("wikipage.content").add(function markRights($content) {
  if ($content.attr("id") === "mw-content-text" || $content.hasClass("mw-changeslist")) {
    void markUserRights($content);
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMvTWFya1JpZ2h0cy50cyIsICJzcmMvTWFya1JpZ2h0cy9vcHRpb25zLmpzb24iLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy9hcGkudHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy9xdWVyeS50cyIsICJzcmMvTWFya1JpZ2h0cy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy9jb3JlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIEBkZXNjcmlwdGlvbiDlnKjmnIDov5Hkv67mlLnjgIHnm5Hop4bliJfooajjgIHmnaHnm67ljoblj7LorrDlvZXnrYnkvY3nva7ku6XnibnmrormoLzlvI/mmL7npLrmnInnibnmrormnYPpmZDnmoTnlKjmiLdcbiAqL1xuaW1wb3J0IHttYXJrVXNlclJpZ2h0c30gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5tdy5ob29rKCd3aWtpcGFnZS5jb250ZW50JykuYWRkKGZ1bmN0aW9uIG1hcmtSaWdodHMoJGNvbnRlbnQpOiB2b2lkIHtcblx0aWYgKCRjb250ZW50LmF0dHIoJ2lkJykgPT09ICdtdy1jb250ZW50LXRleHQnIHx8ICRjb250ZW50Lmhhc0NsYXNzKCdtdy1jaGFuZ2VzbGlzdCcpKSB7XG5cdFx0dm9pZCBtYXJrVXNlclJpZ2h0cygkY29udGVudCk7XG5cdH1cbn0pO1xuXG5leHBvcnQge3F1ZXJ5R2xvYmFsVXNlckdyb3VwcywgcXVlcnlVc2VyR3JvdXBzfSBmcm9tICcuL21vZHVsZXMvcXVlcnknO1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IDIuMFxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgTWFya1JpZ2h0cy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5cbmNvbnN0IHF1ZXJ5VXNlckdyb3VwcyA9IGFzeW5jICh1c3VzZXJzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5VXNlcnNQYXJhbXMgPSB7XG5cdFx0dXN1c2Vycyxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGxpc3Q6ICd1c2VycycsXG5cdFx0dXNwcm9wOiAnZ3JvdXBzJyxcblx0XHRzbWF4YWdlOiA2MDAsXG5cdFx0bWF4YWdlOiA2MDAsXG5cdH07XG5cdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChwYXJhbXMpO1xuXG5cdHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHF1ZXJ5R2xvYmFsVXNlckdyb3VwcyA9IGFzeW5jICh1c2VyOiBzdHJpbmcpID0+IHtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bWV0YTogJ2dsb2JhbHVzZXJpbmZvJyxcblx0XHRndWl1c2VyOiB1c2VyLFxuXHRcdGd1aXByb3A6ICdncm91cHMnLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IHtxdWVyeVVzZXJHcm91cHMsIHF1ZXJ5R2xvYmFsVXNlckdyb3Vwc307XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHJlc3BvbnNpYmxlb3BlcmF0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnUmVzcG9uc2libGUgT3BlcmF0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn6LSj5Lu76L+Q6JClJyxcblx0XHRcdCd6aC1oYW50JzogJ+iyrOS7u+mBi+eHnycsXG5cdFx0fSksXG5cdFx0c3Rld2FyZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTdGV3YXJkJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aho+ahiOeQhuS6i+WRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmqpTmoYjnkIbkuovlk6EnLFxuXHRcdH0pLFxuXHRcdGNoZWNrdXNlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdDaGVja1VzZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55So5oi35p+l5qC4Jyxcblx0XHRcdCd6aC1oYW50JzogJ+eUqOaItuafpeaguCcsXG5cdFx0fSksXG5cdFx0c3VwcHJlc3M6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnT3ZlcnNpZ2h0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn55uR552j5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+ebo+edo+WToScsXG5cdFx0fSksXG5cdFx0c3lzb3A6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3lzT3AnLFxuXHRcdFx0J3poLWhhbnMnOiAn566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+euoeeQhuWToScsXG5cdFx0fSksXG5cdFx0J2ludGVyZmFjZS1hZG1pbic6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW50ZXJmYWNlIEFkbWluaXN0cmF0b3InLFxuXHRcdFx0J3poLWhhbnMnOiAn55WM6Z2i566h55CG5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+S7i+mdoueuoeeQhuWToScsXG5cdFx0fSksXG5cdFx0dGVtcGxhdGVlZGl0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVGVtcGxhdGUgRWRpdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+aooeadv+e8lui+keWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfmqKHmnb/nt6jovK/lk6EnLFxuXHRcdH0pLFxuXHRcdGltcG9ydGVyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ltcG9ydGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WvvOWFpeiAhScsXG5cdFx0XHQnemgtaGFudCc6ICfljK/lhaXogIUnLFxuXHRcdH0pLFxuXHRcdHBhdHJvbGxlcjogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdQYXRyb2xsZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5beh5p+l5ZGYJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3oeafpeWToScsXG5cdFx0fSksXG5cdFx0YXV0b3BhdHJvbGxlZDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdHb29kIEVkaXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfkvJjnp4DnvJbovpHogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5YSq56eA57eo6Lyv6ICFJyxcblx0XHR9KSxcblx0XHRldmVudHNwb25zb3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXZlbnQgU3BvbnNvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5rS75YuV57WE57mU6ICFJyxcblx0XHR9KSxcblx0XHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdNYXNzTWVzc2FnZSBzZW5kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+Wkp+mHj+ioiuaBr+WCs+mAgeiAhScsXG5cdFx0fSksXG5cdFx0Y29uZmlybWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdGF1dG9jb25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXV0by1jb25maXJtZWQgdXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfoh6rliqjnoa7orqTnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Ieq5YuV56K66KqN55So5oi2Jyxcblx0XHR9KSxcblx0XHRib3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQm90Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+acuuWZqOS6uicsXG5cdFx0XHQnemgtaGFudCc6ICfmqZ/morDkuronLFxuXHRcdH0pLFxuXHRcdGZsb29kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Zsb29kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOeUqOaIticsXG5cdFx0fSksXG5cdFx0J3JucnN2ZXJpZnktZXhlbXB0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIHJlYWwtbmFtZSB2ZXJpZmljYXRpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5a6e5ZCN5Yi26aqM6K+B6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ+WvpuWQjeWItumpl+itieixgeWFjScsXG5cdFx0fSksXG5cdFx0J2lwYmxvY2stZXhlbXB0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIElQIGJsb2NrcycsXG5cdFx0XHQnemgtaGFucyc6ICdJUOWwgeemgeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICdJUOWwgemOluixgeWFjScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB7cXVlcnlHbG9iYWxVc2VyR3JvdXBzLCBxdWVyeVVzZXJHcm91cHN9IGZyb20gJy4vcXVlcnknO1xuaW1wb3J0IHR5cGUge1VzZXJSaWdodHN9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHt1bmlxdWVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuY29uc3QgZ2V0VXNlcm5hbWUgPSAodXJsOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRpZiAoIXVybCkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IHVzZXJuYW1lOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd0aXRsZScsIHVybCk7XG5cblx0Y29uc3QgZGVjb2RlID0gKHN0cmluZzogc3RyaW5nLCByZXBsYWNlOiAoX3N0cmluZzogc3RyaW5nKSA9PiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoXG5cdFx0XHQoKCk6IHN0cmluZyA9PiB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZXBsYWNlKHN0cmluZykpO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVwbGFjZShzdHJpbmcpLnJlcGxhY2UoLyUoPyFcXGQrKS9nLCAnJTI1Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pKClcblx0XHQpO1xuXHR9O1xuXG5cdGlmICh1c2VybmFtZSkge1xuXHRcdHJldHVybiBkZWNvZGUodXNlcm5hbWUsIChzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoJ1VzZXI6JywgJycpLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHR9KTtcblx0fVxuXHRjb25zdCB1c2VybmFtZU1hdGNoOiBSZWdFeHBNYXRjaEFycmF5IHwgbnVsbCA9IHVybC5tYXRjaCgvXFwvd2lraVxcL1VzZXI6KC4rPykkLyk7XG5cdGlmICh1c2VybmFtZU1hdGNoPy5bMV0pIHtcblx0XHRyZXR1cm4gZGVjb2RlKHVzZXJuYW1lTWF0Y2hbMV0sIChzdHJpbmc6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdFx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoL18vZywgJyAnKTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gJyc7XG59O1xuXG5jb25zdCBhcHBlbmRVc2VyUmlnaHRzTWFyayA9IChcblx0JHVzZXJMaW5rczogSlF1ZXJ5PEhUTUxFbGVtZW50Pixcblx0e3VzZXJHcm91cE1hcCwgZ2xvYmFsVXNlckdyb3VwTWFwfToge3VzZXJHcm91cE1hcDogTWFwPHN0cmluZywgc3RyaW5nW10+OyBnbG9iYWxVc2VyR3JvdXBNYXA6IE1hcDxzdHJpbmcsIHN0cmluZ1tdPn1cbik6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJHVzZXJMaW5rcykge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdGlmICgkZWxlbWVudC5wYXJlbnRzKCdsaScpLmZpbmQoJy5nYWRnZXRzLW1hcmtyaWdodHMnKS5sZW5ndGgpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAoJGVsZW1lbnQuc2libGluZ3MoKS5maW5kKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y29uc3QgdXNlcm5hbWU6IHN0cmluZyA9IGdldFVzZXJuYW1lKCRlbGVtZW50LmF0dHIoJ2hyZWYnKSA/PyAnJyk7XG5cdFx0aWYgKCF1c2VybmFtZSkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IGdyb3VwcyA9IHVzZXJHcm91cE1hcC5nZXQodXNlcm5hbWUpID8/IFtdO1xuXHRcdGNvbnN0IGdsb2JhbEdyb3VwcyA9IGdsb2JhbFVzZXJHcm91cE1hcC5nZXQodXNlcm5hbWUpID8/IFtdO1xuXHRcdGlmICghZ3JvdXBzKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y29uc3QgJHN1cHM6IEpRdWVyeSA9ICQoJzxzcGFuPicpLmFkZENsYXNzKCdnYWRnZXRzLW1hcmtyaWdodHMnKTtcblx0XHRmb3IgKGNvbnN0IGdyb3VwIG9mIHVuaXF1ZUFycmF5KFsuLi5ncm91cHMsIC4uLmdsb2JhbEdyb3Vwc10pKSB7XG5cdFx0XHRjb25zdCBjbGFzc05hbWU6IHN0cmluZyA9IGBnYWRnZXRzLW1hcmtyaWdodHNfXyR7Z3JvdXB9YDtcblx0XHRcdGlmICgkc3Vwcy5maW5kKCdzdXAnKS5oYXNDbGFzcyhjbGFzc05hbWUpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0JHN1cHMuYXBwZW5kKFxuXHRcdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fcmVzcG9uc2libGVvcGVyYXRvclxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19zdGV3YXJkXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX2NoZWNrdXNlclxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19zdXBwcmVzc1xuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19zeXNvcFxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19pbnRlcmZhY2UtYWRtaW5cblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fdGVtcGxhdGVlZGl0b3Jcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19faW1wb3J0ZXJcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fcGF0cm9sbGVyXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX2F1dG9wYXRyb2xsZWRcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fZXZlbnRzcG9uc29yXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX21hc3NtZXNzYWdlLXNlbmRlclxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19jb25maXJtZWRcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fYXV0b2NvbmZpcm1lZFxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19ib3Rcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fZmxvb2Rcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19faXBibG9jay1leGVtcHRcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fcm5yc3ZlcmlmeS1leGVtcHRcblx0XHRcdFx0JCgnPHN1cD4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcyhjbGFzc05hbWUpXG5cdFx0XHRcdFx0LmF0dHIoe1xuXHRcdFx0XHRcdFx0YWx0OiBnZXRNZXNzYWdlKGdyb3VwIGFzIFVzZXJSaWdodHMpLFxuXHRcdFx0XHRcdFx0dGl0bGU6IGdldE1lc3NhZ2UoZ3JvdXAgYXMgVXNlclJpZ2h0cyksXG5cdFx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdFx0fVxuXHRcdCRlbGVtZW50LmFmdGVyKCRzdXBzKTtcblx0fVxufTtcblxuY29uc3QgbWFya1VzZXJSaWdodHMgPSBhc3luYyAoJGNvbnRlbnQ6IEpRdWVyeSk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCAkdXNlckxpbmtzOiBKUXVlcnkgPSAkY29udGVudC5maW5kKCdhLm13LXVzZXJsaW5rOm5vdCgubXctYW5vbnVzZXJsaW5rKScpO1xuXHRsZXQgdXNlcnM6IHN0cmluZ1tdID0gW107XG5cdGNvbnN0IHF1ZXVlOiBBcnJheTx0eXBlb2YgdXNlcnM+ID0gW107XG5cdGNvbnN0IHVzZXJHcm91cE1hcDogTWFwPHN0cmluZywgc3RyaW5nW10+ID0gbmV3IE1hcCgpO1xuXHRjb25zdCBnbG9iYWxVc2VyR3JvdXBNYXA6IE1hcDxzdHJpbmcsIHN0cmluZ1tdPiA9IG5ldyBNYXAoKTtcblxuXHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgJHVzZXJMaW5rcykge1xuXHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdGlmICgkZWxlbWVudC5wYXJlbnRzKCdsaScpLmZpbmQoJy5nYWRnZXRzLW1hcmtyaWdodHMnKS5sZW5ndGgpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRpZiAoJGVsZW1lbnQuc2libGluZ3MoKS5maW5kKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykubGVuZ3RoKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y29uc3Qge3RleHRDb250ZW50fSA9IGVsZW1lbnQ7XG5cdFx0Y29uc3QgdXNlckxpbmtUZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB0ZXh0Q29udGVudD8udG9TdHJpbmcoKTtcblx0XHRpZiAodXNlckxpbmtUZXh0KSB7XG5cdFx0XHR1c2Vyc1t1c2Vycy5sZW5ndGhdID0gdXNlckxpbmtUZXh0OyAvLyBSZXBsYWNlIGBbXS5wdXNoKClgIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblx0XHR9XG5cblx0XHQvLyDnlKjmiLflkI3liJfooajljrvph41cblx0XHR1c2VycyA9IHVuaXF1ZUFycmF5KHVzZXJzKTsgLy8gUmVwbGFjZSBgWy4uLm5ldyBTZXQoKV1gIHRvIGF2b2lkIHBvbHlmaWxsaW5nIGNvcmUtanNcblxuXHRcdGlmICh1c2Vycy5sZW5ndGggPT09IDI1KSB7XG5cdFx0XHRxdWV1ZVtxdWV1ZS5sZW5ndGhdID0gdXNlcnM7IC8vIFJlcGxhY2UgYFtdLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdFx0dXNlcnMgPSBbXTtcblx0XHR9XG5cdH1cblxuXHRpZiAodXNlcnMubGVuZ3RoID4gMCkge1xuXHRcdHF1ZXVlW3F1ZXVlLmxlbmd0aF0gPSB1c2VyczsgLy8gUmVwbGFjZSBgW10ucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdH1cblxuXHRmb3IgKGNvbnN0IHVzdXNlcnMgb2YgcXVldWUpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcXVlcnlVc2VyUmVzcG9uc2UgPSBhd2FpdCBxdWVyeVVzZXJHcm91cHModXN1c2Vycyk7XG5cdFx0XHRjb25zdCB7dXNlcnM6IHF1ZXJ5VXNlcnN9ID0gcXVlcnlVc2VyUmVzcG9uc2VbJ3F1ZXJ5J10gYXMge1xuXHRcdFx0XHR1c2Vyczoge2dyb3Vwczogc3RyaW5nW107IG5hbWU6IHN0cmluZ31bXTtcblx0XHRcdH07XG5cblx0XHRcdGZvciAoY29uc3QgdXNlciBvZiBxdWVyeVVzZXJzKSB7XG5cdFx0XHRcdGlmICghdXNlciB8fCAhdXNlci5ncm91cHMpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR1c2VyR3JvdXBNYXAuc2V0KFxuXHRcdFx0XHRcdHVzZXIubmFtZSxcblx0XHRcdFx0XHR1c2VyLmdyb3Vwcy5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtZW50ICE9PSAnKic7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yIChjb25zdCB1c2VyIG9mIHVzdXNlcnMpIHtcblx0XHRcdFx0Y29uc3QgcXVlcnlHbG9iYWxVc2VySW5mb1Jlc3BvbnNlID0gYXdhaXQgcXVlcnlHbG9iYWxVc2VyR3JvdXBzKHVzZXIpO1xuXHRcdFx0XHRpZiAocXVlcnlHbG9iYWxVc2VySW5mb1Jlc3BvbnNlWydxdWVyeSddICYmIHF1ZXJ5R2xvYmFsVXNlckluZm9SZXNwb25zZVsncXVlcnknXS5nbG9iYWx1c2VyaW5mbykge1xuXHRcdFx0XHRcdGNvbnN0IHtncm91cHM6IGdsb2JhbGdyb3Vwc306IHtncm91cHM6IHN0cmluZ1tdfSA9IHF1ZXJ5R2xvYmFsVXNlckluZm9SZXNwb25zZVsncXVlcnknXVxuXHRcdFx0XHRcdFx0Lmdsb2JhbHVzZXJpbmZvIGFzIHtncm91cHM6IHN0cmluZ1tdfTtcblx0XHRcdFx0XHRnbG9iYWxVc2VyR3JvdXBNYXAuc2V0KHVzZXIsIGdsb2JhbGdyb3Vwcyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0YXBwZW5kVXNlclJpZ2h0c01hcmsoJHVzZXJMaW5rcywge3VzZXJHcm91cE1hcCwgZ2xvYmFsVXNlckdyb3VwTWFwfSk7XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG59O1xuXG5leHBvcnQge21hcmtVc2VyUmlnaHRzfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEscUJBQUEsQ0FBQTtBQUFBQyxTQUFBRCxvQkFBQTtFQUFBRSx1QkFBQUEsTUFBQUE7RUFBQUMsaUJBQUFBLE1BQUFBO0FBQUEsQ0FBQTtBQUFBQyxPQUFBQyxVQUFBQyxhQUFBTixrQkFBQTs7QUNDQyxJQUFBTyxVQUFXOztBQ0FaLElBQUFDLG9CQUF3QkMsUUFBQSxpQkFBQTtBQUV4QixJQUFNQyxPQUFBLEdBQWNGLGtCQUFBRyxXQUFBLGNBQUFDLE9BQWdDTCxPQUFPLENBQUU7O0FDRDdELElBQU1KLGtCQUFBLDJCQUFBO0FBQUEsTUFBQVUsT0FBQUMsa0JBQWtCLFdBQU9DLFNBQStCO0FBQzdELFVBQU1DLFNBQThCO01BQ25DRDtNQUNBRSxRQUFRO01BQ1JDLFFBQVE7TUFDUkMsZUFBZTtNQUNmQyxNQUFNO01BQ05DLFFBQVE7TUFDUkMsU0FBUztNQUNUQyxRQUFRO0lBQ1Q7QUFDQSxVQUFNQyxXQUFBLE1BQWlCZCxJQUFJZSxJQUFJVCxNQUFNO0FBRXJDLFdBQU9RO0VBQ1IsQ0FBQTtBQUFBLFNBQUEsU0FkTXJCLGlCQUFBdUIsSUFBQTtBQUFBLFdBQUFiLEtBQUFjLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTtBQWdCTixJQUFNMUIsd0JBQUEsMkJBQUE7QUFBQSxNQUFBMkIsUUFBQWYsa0JBQXdCLFdBQU9nQixN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QTRCLE9BQU8sRUFBRUMsZ0JBQWdCO0FBQ2hHLG9CQUFNO2dCQUFDeEMsUUFBUXlDO2NBQVksSUFBd0JGLDRCQUE0QixPQUFPLEVBQ3BGQztBQUNGM0QsaUNBQW1CcUQsSUFBSS9GLE1BQU1zRyxZQUFZO1lBQzFDO1VBQ0Q7UUFBQSxTQUFBNUIsS0FBQTtBQUFBd0IscUJBQUF2QixFQUFBRCxHQUFBO1FBQUEsVUFBQTtBQUFBd0IscUJBQUF0QixFQUFBO1FBQUE7QUFFQXJDLDZCQUFxQkMsWUFBWTtVQUFDQztVQUFjQztRQUFrQixDQUFDO01BQ3BFLFFBQVE7TUFBQztJQUNWO0VBQ0QsQ0FBQTtBQUFBLFNBQUEsU0FqRU1vQyxnQkFBQXlCLEtBQUE7QUFBQSxXQUFBeEIsTUFBQWxGLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUw1Rk5nQyxHQUFHMEUsS0FBSyxrQkFBa0IsRUFBRUMsSUFBSSxTQUFTQyxXQUFXMUIsVUFBZ0I7QUFDbkUsTUFBSUEsU0FBU3BCLEtBQUssSUFBSSxNQUFNLHFCQUFxQm9CLFNBQVNWLFNBQVMsZ0JBQWdCLEdBQUc7QUFDckYsU0FBS1EsZUFBZUUsUUFBUTtFQUM3QjtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbIk1hcmtSaWdodHNfZXhwb3J0cyIsICJfX2V4cG9ydCIsICJxdWVyeUdsb2JhbFVzZXJHcm91cHMiLCAicXVlcnlVc2VyR3JvdXBzIiwgIm1vZHVsZSIsICJleHBvcnRzIiwgIl9fdG9Db21tb25KUyIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAiX3JlZiIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ1c3VzZXJzIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibGlzdCIsICJ1c3Byb3AiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicmVzcG9uc2UiLCAiZ2V0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJfcmVmMiIsICJ1c2VyIiwgIm1ldGEiLCAiZ3VpdXNlciIsICJndWlwcm9wIiwgIl94MiIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgInJlc3BvbnNpYmxlb3BlcmF0b3IiLCAibG9jYWxpemUiLCAiZW4iLCAic3Rld2FyZCIsICJjaGVja3VzZXIiLCAic3VwcHJlc3MiLCAic3lzb3AiLCAidGVtcGxhdGVlZGl0b3IiLCAiaW1wb3J0ZXIiLCAicGF0cm9sbGVyIiwgImF1dG9wYXRyb2xsZWQiLCAiZXZlbnRzcG9uc29yIiwgImNvbmZpcm1lZCIsICJhdXRvY29uZmlybWVkIiwgImJvdCIsICJmbG9vZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImdldFVzZXJuYW1lIiwgInVybCIsICJ1c2VybmFtZSIsICJtdyIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAiZGVjb2RlIiwgInN0cmluZyIsICJyZXBsYWNlIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJ1c2VybmFtZU1hdGNoIiwgIm1hdGNoIiwgImFwcGVuZFVzZXJSaWdodHNNYXJrIiwgIiR1c2VyTGlua3MiLCAidXNlckdyb3VwTWFwIiwgImdsb2JhbFVzZXJHcm91cE1hcCIsICJfaXRlcmF0b3IyIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwMiIsICJzIiwgIm4iLCAiZG9uZSIsICJfJGVsZW1lbnQkYXR0ciIsICJfdXNlckdyb3VwTWFwJGdldCIsICJfZ2xvYmFsVXNlckdyb3VwTWFwJGciLCAiZWxlbWVudCIsICJ2YWx1ZSIsICIkZWxlbWVudCIsICIkIiwgInBhcmVudHMiLCAiZmluZCIsICJsZW5ndGgiLCAic2libGluZ3MiLCAiYXR0ciIsICJncm91cHMiLCAiZ2xvYmFsR3JvdXBzIiwgIiRzdXBzIiwgImFkZENsYXNzIiwgIl9pdGVyYXRvcjMiLCAidW5pcXVlQXJyYXkiLCAiX3N0ZXAzIiwgImdyb3VwIiwgImNsYXNzTmFtZSIsICJoYXNDbGFzcyIsICJhcHBlbmQiLCAiYWx0IiwgInRpdGxlIiwgImVyciIsICJlIiwgImYiLCAiYWZ0ZXIiLCAibWFya1VzZXJSaWdodHMiLCAiX3JlZjMiLCAiJGNvbnRlbnQiLCAidXNlcnMiLCAicXVldWUiLCAiTWFwIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgInRleHRDb250ZW50IiwgInVzZXJMaW5rVGV4dCIsICJ0b1N0cmluZyIsICJfaSIsICJfcXVldWUiLCAicXVlcnlVc2VyUmVzcG9uc2UiLCAicXVlcnlVc2VycyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJzZXQiLCAibmFtZSIsICJmaWx0ZXIiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAicXVlcnlHbG9iYWxVc2VySW5mb1Jlc3BvbnNlIiwgImdsb2JhbHVzZXJpbmZvIiwgImdsb2JhbGdyb3VwcyIsICJfeDMiLCAiaG9vayIsICJhZGQiLCAibWFya1JpZ2h0cyJdCn0K
