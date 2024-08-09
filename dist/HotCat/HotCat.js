/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=HotCat|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-HotCat.js}
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-HotCat.js/zh-hans}
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-HotCat.js/local_defaults}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/HotCat}
 */

/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=CheckCategories HotCat Extension|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://commons.wikimedia.org/wiki/MediaWiki:Gadget-Hotcatcheck.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/HotCat/HotCat-check.js}
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

// dist/HotCat/HotCat.js
var _templateObject;
var _templateObject2;
var _templateObject3;
var _templateObject4;
var _templateObject5;
var _templateObject6;
var _templateObject7;
var _templateObject8;
var _templateObject9;
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
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
//! src/HotCat/modules/check.module.less
var catcheckInlineIcon = "check-module__catcheckInlineIcon_mJ5NDq";
//! src/HotCat/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var mwApi = (userAgent) => {
  return (0, import_ext_gadget.initMwApi)(userAgent);
};
//! src/HotCat/modules/check.ts
(function hotCatCheck() {
  if (mw.config.get("wgNamespaceNumber") !== 6 || window.HotCatAutoRemoveCheckCatOptOut || !document.querySelector(".checkcategories")) {
    return;
  }
  const api = mwApi("hotCatCheck/2.0");
  const checkCategoriesRegExp = /{{[Cc]heck[ _]categories[^{}]*}}/g;
  const selfName = "([[MediaWiki:Gadget-HotCat-check.js|Script]]): ";
  const storageItemName = "checkCat";
  const storageItem = mw.storage.get(storageItemName);
  const createjIcon = (iconClass) => {
    return $("<span>").attr("class", "ui-icon ".concat(iconClass, " ").concat(catcheckInlineIcon)).text(" ");
  };
  const createNotifyArea = (textNode, icon, state) => {
    return $("<div>").addClass("ui-widget").append($("<div>").attr("class", "".concat(state, " ui-corner-all")).css({
      "margin-top": "20px",
      padding: "0.7em"
    }).append($("<p>").append(createjIcon(icon).css("marginRight", "0.3em"), textNode)));
  };
  $("body").one("submit.checkCatListener", "#hotcatCommitForm", function(e) {
    var _self$wpTextbox1$valu;
    if (storageItem === "disabled") {
      return true;
    }
    const self = this;
    const newVal = (_self$wpTextbox1$valu = self.wpTextbox1.value) === null || _self$wpTextbox1$valu === void 0 ? void 0 : _self$wpTextbox1$valu.replace(checkCategoriesRegExp, "");
    const dlgButtons = {};
    let $dialogCheckStorage;
    let $permaSaveHint;
    let $textHintNode;
    let $dialog;
    const doRemove = () => {
      self.wpSummary.value = "Removing [[Template:Check categories|{".concat("{Check categories}}]] ".concat(self.wpSummary.value));
      self.wpTextbox1.value = newVal;
    };
    const writeStorage = (val) => {
      mw.storage.set(storageItemName, val, 604800);
    };
    dlgButtons["Yes, Remove"] = function() {
      var _$dialogCheckStorage$;
      doRemove();
      if ((_$dialogCheckStorage$ = $dialogCheckStorage[0]) !== null && _$dialogCheckStorage$ !== void 0 && _$dialogCheckStorage$.checked) {
        writeStorage("auto");
      }
      $(this).dialog("close");
    };
    dlgButtons["No, keep it"] = function() {
      var _$dialogCheckStorage$2;
      if ((_$dialogCheckStorage$2 = $dialogCheckStorage[0]) !== null && _$dialogCheckStorage$2 !== void 0 && _$dialogCheckStorage$2.checked) {
        writeStorage("disabled");
      }
      $(this).dialog("close");
    };
    const _addToJS = function(_e) {
      _e.preventDefault();
      if ($permaSaveHint.hasClass("ui-state-disabled")) {
        return;
      }
      const $el = $(this);
      $el.off("click").text("Please wait.");
      $permaSaveHint.addClass("ui-state-disabled");
      const params = {
        action: "edit",
        title: "User:".concat(mw.config.get("wgUserName"), "/common.js"),
        summary: "".concat(selfName, "Saving HotCat configuration."),
        appendtext: $el.data("addText")
      };
      const editDone = (editStat) => {
        if (!editStat) {
          return;
        }
        if (editStat.error) {
          void mw.notify("Unable to save to your common.js using the API\n".concat(editStat.error.code, "\n").concat(editStat.error.info), {
            tag: "hotCatCheck",
            type: "error"
          });
          $el.text("Edit-Error!");
        } else {
          $el.text("Done.");
          $permaSaveHint.fadeOut();
        }
      };
      void api.postWithToken("csrf", params).then(editDone);
    };
    const prompt = () => {
      $dialogCheckStorage = $("<input>").attr({
        type: "checkbox",
        id: "hotCatAutoRemoveCheckCatStorage"
      }).on("change", function() {
        if (this.checked) {
          $permaSaveHint.fadeIn();
        } else {
          $permaSaveHint.fadeOut();
        }
      });
      $textHintNode = $("<ul>");
      $("<li>").append($("<a>").attr("href", "#").text("Disable this feature.").data("addText", "\nwindow.HotCatAutoRemoveCheckCatOptOut = true;").on("click", _addToJS)).appendTo($textHintNode);
      $("<li>").append($("<a>").attr("href", "#").text("Remove {{check categories}} when editing using HotCat without prompting.").data("addText", "\nwindow.HotCatAutoRemoveCheckCat = true;").on("click", _addToJS)).appendTo($textHintNode);
      $permaSaveHint = createNotifyArea($("<span>").text("Save these setting in your common.js: ").append($textHintNode), "ui-icon-info", "ui-state-highlight");
      $dialog = $("<div>").append($("<span>").css({
        "font-size": "2em",
        "line-height": "1.8em"
      }).append($("<span>").text(" {{check categories}} ").css({
        "background-color": "#F8CCB0",
        "text-decoration": "line-through !important",
        display: "inline-block"
      }), $("<span>").text(" ?"))).append("<br>", $dialogCheckStorage, $("<label>").attr("for", "hotCatAutoRemoveCheckCatStorage").text("Don't ask again"), "<br>").append(mw.user.isAnon() ? "" : $permaSaveHint.hide());
      $dialog.dialog({
        modal: true,
        closeOnEscape: true,
        title: "{{check categories}} (−)?",
        width: 450,
        buttons: dlgButtons,
        close: () => {
          const $body = $("body");
          $body.find("#hotcatCommitForm").trigger("submit");
        },
        open() {
          const $buttons = $(this).parent().find(".ui-dialog-buttonpane button");
          $buttons.eq(0).button({
            icons: {
              primary: "ui-icon-circle-check"
            }
          });
          $buttons.eq(1).button({
            icons: {
              primary: "ui-icon-cancel"
            }
          });
        }
      });
    };
    if (newVal !== self.wpTextbox1.value) {
      if (window.HotCatAutoRemoveCheckCat || storageItem === "auto") {
        doRemove();
        return true;
      }
      e.preventDefault();
      prompt();
    }
    return true;
  });
  const $okLink = $("<a>").attr({
    href: "#",
    title: "Categories are OK! Immediately remove the template."
  }).append("<s>").text("{{Check categories}}");
  $okLink.on("click", function(e) {
    e.preventDefault();
    const $el = $(this);
    $el.off("click");
    const doEdit = (result) => {
      if (!result) {
        return;
      }
      $el.text("Doing.");
      const text = result.replace(checkCategoriesRegExp, "");
      if (text === result) {
        $el.text("Template not found!");
        return;
      }
      const params = {
        action: "edit",
        title: mw.config.get("wgPageName"),
        summary: "".concat(selfName, "Categories are checked and OK. You can help [[Category:Media needing category review|reviewing]]!"),
        nocreate: true,
        text
      };
      const editDone = (editStat) => {
        if (!editStat) {
          return;
        }
        if (editStat.error) {
          void mw.notify('Unable to remove "Check categories" with the API\n'.concat(editStat.error.code, "\n").concat(editStat.error.info), {
            tag: "hotCatCheck",
            type: "error"
          });
          $el.text("Edit-Error!");
        } else {
          $el.text("Edit Done.");
        }
        const $body = $("body");
        $body.find(".checkcategories").fadeOut();
      };
      $el.text("Doing..");
      void api.postWithToken("csrf", params).then(editDone);
    };
    $el.text("Doing");
    void $.ajax({
      url: mw.config.get("wgScript"),
      data: {
        action: "raw",
        title: mw.config.get("wgPageName").replace(/ /g, "_")
      },
      dataType: "text",
      error: () => {
        $el.text("Error!");
      },
      success: doEdit,
      type: "GET",
      cache: false
    });
  });
  $(function loadHotCatCheck() {
    const $body = $("body");
    $body.find("#catlinks").find("ul:first").append($("<li>").append($okLink));
  });
})();
//! src/HotCat/HotCat.js
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/HotCat/modules/getMessage.ts
var getMessage = (key, ...args) => {
  key = "hotcat-".concat(key);
  return mw.message(key, ...args).plain();
};
//! src/HotCat/modules/messages.ts
var hotCatMessages = () => {
  const {
    wgUserLanguage
  } = mw.config.get();
  if (["zh-hant", "zh-hk", "zh-mo", "zh-tw"].includes(wgUserLanguage)) {
    mw.messages.set({
      "hotcat-messages-cat_removed": "已移除[[Category:$1]]",
      "hotcat-messages-template_removed": "已移除{{[[Category:$1]]}}",
      "hotcat-messages-cat_added": "已添加[[Category:$1]]",
      // $2 is the new key
      "hotcat-messages-cat_keychange": '已設置[[Category:$1]]的新排序字："$2"',
      "hotcat-messages-cat_notFound": "分類“$1”沒有找到",
      "hotcat-messages-cat_exists": "分類“$1”已經存在，沒有添加。",
      "hotcat-messages-cat_resolved": "（重定向[[Category:$1]]已處理）",
      "hotcat-messages-uncat_removed": "已移除{{uncategorized}}",
      // Some text to prefix to the edit summary.
      "hotcat-messages-prefix": "使用[[H:HOTCAT|HotCat]]",
      // Some text to append to the edit summary. Named 'using' for historical reasons. If you prefer
      // to have a marker at the front, use prefix and set this to the empty string.
      "hotcat-messages-using": "",
      "hotcat-messages-multi_change": "$1個分類",
      // Any category in this category is deemed a disambiguation category; i.e., a category that should not contain
      // any items, but that contains links to other categories where stuff should be categorized. If you don't have
      // that concept on your wiki, set it to blank string. Use blanks, not underscores.
      "hotcat-disambig_category": "",
      // Any category in this category is deemed a (soft) redirect to some other category defined by a link
      // to another non-blacklisted category. If your wiki doesn't have soft category redirects, set this to null.
      // If a soft-redirected category contains more than one link to another non-blacklisted category, it's considered
      // a disambiguation category instead.
      "hotcat-redir_category": "已重定向的分类",
      "hotcat-messages-separator": "; ",
      // $1 is replaced by a number. If your language has several plural forms (c.f. [[:enwiki:Dual (grammatical form)]]),
      // you can set this to an array of strings suitable for passing to mw.language.configPlural().
      // If that function doesn't exist, HotCat will simply fall back to using the last
      // entry in the array.
      // Defaults to '[[' + category_canonical + ':$1]]'. Can be overridden if in the short edit summaries
      // not the standard category name should be used but, say, a shorter namespace alias. $1 is replaced
      // by a category name.
      "hotcat-messages-short_catchange": "$1",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-commit": "儲存",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-ok": "確定",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-cancel": "取消",
      // Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-multi_error": "無法從伺服器取得頁面文字。因此，您的分類變更無法儲存。我們為此不便表示抱歉。",
      // Plural of category_canonical.
      "hotcat-categories": "分類",
      // Names for the search engines
      "hotcat-engine_names-searchindex": "搜尋索引",
      "hotcat-engine_names-pagelist": "頁面列表",
      "hotcat-engine_names-combined": "合併搜尋",
      "hotcat-engine_names-subcat": "子分類",
      "hotcat-engine_names-parentcat": "上層分類",
      // The tooltips for the above links
      "hotcat-tooltips-change": "修改",
      "hotcat-tooltips-remove": "移除",
      "hotcat-tooltips-add": "增加一個新分類",
      "hotcat-tooltips-restore": "復原變更",
      "hotcat-tooltips-undo": "復原變更",
      "hotcat-tooltips-down": "打開以修改並顯示子分類",
      "hotcat-tooltips-up": "打開以修改並顯示上層分類",
      // Tooltip for the "enter multi-mode" link
      "hotcat-multi_tooltip": "修改多個分類"
    });
  } else {
    mw.messages.set({
      "hotcat-messages-cat_removed": "已移除[[Category:$1]]",
      "hotcat-messages-template_removed": "已移除{{[[Category:$1]]}}",
      "hotcat-messages-cat_added": "已添加[[Category:$1]]",
      // $2 is the new key
      "hotcat-messages-cat_keychange": '已设置[[Category:$1]]的新排序字："$2"',
      "hotcat-messages-cat_notFound": "分类“$1”没有找到",
      "hotcat-messages-cat_exists": "分类“$1”已经存在，没有添加。",
      "hotcat-messages-cat_resolved": "（重定向[[Category:$1]]已处理）",
      "hotcat-messages-uncat_removed": "已移除{{uncategorized}}",
      // Some text to prefix to the edit summary.
      "hotcat-messages-prefix": "使用[[H:HOTCAT|HotCat]]",
      // Some text to append to the edit summary. Named 'using' for historical reasons. If you prefer
      // to have a marker at the front, use prefix and set this to the empty string.
      "hotcat-messages-using": "",
      "hotcat-messages-multi_change": "$1个分类",
      // Any category in this category is deemed a disambiguation category; i.e., a category that should not contain
      // any items, but that contains links to other categories where stuff should be categorized. If you don't have
      // that concept on your wiki, set it to blank string. Use blanks, not underscores.
      "hotcat-disambig_category": "",
      // Any category in this category is deemed a (soft) redirect to some other category defined by a link
      // to another non-blacklisted category. If your wiki doesn't have soft category redirects, set this to null.
      // If a soft-redirected category contains more than one link to another non-blacklisted category, it's considered
      // a disambiguation category instead.			'hotcat-redir_category': '已重定向的分类',
      "hotcat-messages-separator": "; ",
      // $1 is replaced by a number. If your language has several plural forms (c.f. [[:enwiki:Dual (grammatical form)]]),
      // you can set this to an array of strings suitable for passing to mw.language.configPlural().
      // If that function doesn't exist, HotCat will simply fall back to using the last
      // entry in the array.
      // Defaults to '[[' + category_canonical + ':$1]]'. Can be overridden if in the short edit summaries
      // not the standard category name should be used but, say, a shorter namespace alias. $1 is replaced
      // by a category name.
      "hotcat-messages-short_catchange": "$1",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-commit": "保存",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-ok": "确定",
      // Button text. Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-cancel": "取消",
      // Localize to wgContentLanguage here; localize to wgUserLanguage in a subpage,
      // see localization hook below.
      "hotcat-messages-multi_error": "无法从服务器取得页面文字。因此，您的分类更改无法保存。我们为此不便表示抱歉。",
      // Plural of category_canonical.
      "hotcat-categories": "分类",
      // Names for the search engines
      "hotcat-engine_names-searchindex": "搜索索引",
      "hotcat-engine_names-pagelist": "页面列表",
      "hotcat-engine_names-combined": "合并搜索",
      "hotcat-engine_names-subcat": "子分类",
      "hotcat-engine_names-parentcat": "上层分类",
      // The tooltips for the above links
      "hotcat-tooltips-change": "修改",
      "hotcat-tooltips-remove": "移除",
      "hotcat-tooltips-add": "增加一个新分类",
      "hotcat-tooltips-restore": "撤销更改",
      "hotcat-tooltips-undo": "撤销更改",
      "hotcat-tooltips-down": "打开以修改并显示子分类",
      "hotcat-tooltips-up": "打开以修改并显示上层分类",
      // Tooltip for the "enter multi-mode" link
      "hotcat-multi_tooltip": "修改多个分类"
    });
  }
};
//! src/HotCat/HotCat.js
hotCatMessages();
(function hotCat() {
  const conf = mw.config.values;
  if (window.HotCat && !window.HotCat.nodeName || conf.wgAction === "edit") {
    return;
  }
  const api = mwApi("HotCat/3.0");
  window.HotCat = {
    // The little modification links displayed after category names. U+2212 is a minus sign; U+2193 and U+2191 are
    // downward and upward pointing arrows. Do not use ↓ and ↑ in the code!
    links: {
      change: "(±)",
      remove: "(−)",
      add: "(+)",
      restore: "(×)",
      undo: "(×)",
      down: "(↓)",
      up: "(↑)"
    },
    changeTag: "HotCat",
    // The HTML content of the "enter multi-mode" link at the front.
    addmulti: "<span>+<sup>+</sup></span>",
    // Return true to disable HotCat.
    disable: () => {
      const ns = conf.wgNamespaceNumber;
      const nsIds = conf.wgNamespaceIds;
      return ns < 0 || // Special pages; Special:Upload is handled differently
      ns === 10 || // Templates
      ns === 828 || // Module (Lua)
      ns === 8 || // MediaWiki
      ns === 6 && !conf.wgArticleId || // Non-existing file pages
      ns === 2 && /\.(js|css)$/.test(conf.wgTitle) || // User scripts
      nsIds && (ns === nsIds.creator || ns === nsIds.timedtext || ns === nsIds.institution);
    },
    // A regexp matching a templates used to mark uncategorized pages, if your wiki does have that.
    // If not, set it to null.
    uncat_regexp: /{{\s*[Uu]ncategorized\s*[^}]*}}\s*(<!--.*?-->\s*)?/g,
    // The images used for the little indication icon. Should not need changing.
    existsYes: "https://youshou.wiki/images/thumb/b/be/P_yes.svg/24px-P_yes.svg.png",
    existsNo: "https://youshou.wiki/images/thumb/4/42/P_no.svg/24px-P_no.svg.png",
    // a list of categories which can be removed by removing a template
    // key: the category without namespace
    // value: A regexp matching the template name, again without namespace
    // If you don't have this at your wiki, or don't want this, set it to an empty object {}.
    template_categories: {},
    // Override the decision of whether HotCat should help users by automatically
    // capitalising the title in the user input text if the wiki has case-sensitive page names.
    // Basically, this will make an API query to check the MediaWiki configuration and HotCat then sets
    // this to true for most wikis, and to false on Wiktionary.
    //
    // You can set this directly if there is a problem with it. For example, Georgian Wikipedia (kawiki),
    // is known to have different capitalisation logic between MediaWiki PHP and JavaScript. As such, automatic
    // case changes in JavaScript by HotCat would be wrong.
    capitalizePageNames: null,
    // If upload_disabled is true, HotCat will not be used on the Upload form.
    upload_disabled: false,
    // Single regular expression matching blacklisted categories that cannot be changed or
    // added using HotCat. For instance /\bstubs?$/ (any category ending with the word "stub"
    // or "stubs"), or /(\bstubs?$)|\bmaintenance\b/ (stub categories and any category with the
    // word "maintenance" in its title.
    blacklist: null,
    // Stuff changeable by users:
    // Background for changed categories in multi-edit mode. Default is a very light salmon pink.
    bg_changed: "#FCA",
    // If true, HotCat will never automatically submit changes. HotCat will only open an edit page with
    // the changes; users must always save explicitly.
    no_autocommit: false,
    // If true, the "category deletion" link "(-)" will never save automatically but always show an
    // edit page where the user has to save the edit manually. Is false by default because that's the
    // traditional behavior. This setting overrides no_autocommit for "(-)" links.
    del_needs_diff: false,
    // Time, in milliseconds, that HotCat waits after a keystroke before making a request to the
    // server to get suggestions.
    suggest_delay: 1e3,
    // Default width, in characters, of the text input field.
    editbox_width: 40,
    // One of the engine_names above, to be used as the default suggestion engine.
    suggestions: "combined",
    // If true, always use the default engine, and never display a selector.
    fixed_search: false,
    // If false, do not display the "up" and "down" links
    use_up_down: true,
    // Default list size
    listSize: 10,
    // If true, single category changes are marked as minor edits. If false, they're not.
    single_minor: true,
    // If true, never add a page to the user's watchlist. If false, pages get added to the watchlist if
    // the user has the "Add pages I edit to my watchlist" or the "Add pages I create to my watchlist"
    // options in his or her preferences set.
    dont_add_to_watchlist: false,
    shortcuts: null,
    addShortcuts: (map) => {
      let _a;
      if (!map) {
        return;
      }
      (_a = window.HotCat).shortcuts || (_a.shortcuts = {});
      for (let k in map) {
        if (!Object.hasOwn(map, k) || typeof k !== "string") {
          continue;
        }
        let v = map[k];
        if (typeof v !== "string") {
          continue;
        }
        k = k.trim();
        v = v.trim();
        if (k.length === 0 || v.length === 0) {
          continue;
        }
        window.HotCat.shortcuts[k] = v;
      }
    }
  };
  const HC = window.HotCat;
  const ua = navigator.userAgent.toLowerCase();
  const is_webkit = /applewebkit\/\d+/.test(ua) && !ua.includes("spoofer");
  let cat_prefix = null;
  let noSuggestions = false;
  const wikiTextBlank = String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["[	 _  ᠎ - \u2028\u2029  　]+"], ["[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000]+"])));
  const wikiTextBlankRE = new RegExp(wikiTextBlank, "g");
  const wikiTextBlankOrBidi = String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["[	 _  ᠎ -​‎‏\u2028-  　]*"], ["[\\t _\\xA0\\u1680\\u180E\\u2000-\\u200B\\u200E\\u200F\\u2028-\\u202F\\u205F\\u3000]*"])));
  const formattedNamespaces = conf.wgFormattedNamespaces;
  const namespaceIds = conf.wgNamespaceIds;
  const autoLocalize = (namespaceNumber, fallback) => {
    const createRegexpStr = (name) => {
      if (!name || name.length === 0) {
        return;
      }
      let regex_name = "";
      for (let i = 0; i < name.length; i++) {
        const initial = name.charAt(i);
        const ll = initial.toLowerCase();
        const ul = initial.toUpperCase();
        regex_name += ll === ul ? initial : "[".concat(ll).concat(ul, "]");
      }
      return regex_name.replace(/([$()*+.?\\^])/g, String.raw(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["$1"], ["\\$1"])))).replace(wikiTextBlankRE, wikiTextBlank);
    };
    fallback = fallback.toLowerCase();
    const canonical = formattedNamespaces[String(namespaceNumber)].toLowerCase();
    let regexp = createRegexpStr(canonical);
    if (fallback && canonical !== fallback) {
      regexp += "|".concat(createRegexpStr(fallback));
    }
    if (namespaceIds) {
      for (const cat_name in namespaceIds) {
        if (typeof cat_name === "string" && cat_name.toLowerCase() !== canonical && cat_name.toLowerCase() !== fallback && namespaceIds[cat_name] === namespaceNumber) {
          regexp += "|".concat(createRegexpStr(cat_name));
        }
      }
    }
    return regexp;
  };
  HC.category_canonical = formattedNamespaces["14"];
  HC.category_regexp = autoLocalize(14, "category");
  if (formattedNamespaces["10"]) {
    HC.template_regexp = autoLocalize(10, "template");
  }
  const make = (arg, literal) => {
    if (!arg) {
      return null;
    }
    return literal ? document.createTextNode(arg) : document.createElement(arg);
  };
  const param = (name, uri) => {
    uri || (uri = document.location.href);
    const re = new RegExp("[&?]".concat(name, "=([^&#]*)"));
    const m = re.exec(uri);
    if (m && m.length > 1) {
      return decodeURIComponent(m[1]);
    }
    return null;
  };
  const title = (href) => {
    if (!href) {
      return null;
    }
    const script = "".concat(conf.wgScript, "?");
    if (href.indexOf(script) === 0 || href.indexOf(conf.wgServer + script) === 0 || conf.wgServer.slice(0, 2) === "//" && href.indexOf(document.location.protocol + conf.wgServer + script) === 0) {
      return param("title", href);
    }
    let prefix = conf.wgArticlePath.replace("$1", "");
    if (href.indexOf(prefix)) {
      prefix = conf.wgServer + prefix;
    }
    if (href.indexOf(prefix) && prefix.slice(0, 2) === "//") {
      prefix = document.location.protocol + prefix;
    }
    if (href.indexOf(prefix) === 0) {
      return decodeURIComponent(href.slice(prefix.length));
    }
    return null;
  };
  const hasClass = ({
    className
  }, name) => {
    return " ".concat(className, " ").includes(" ".concat(name, " "));
  };
  const capitalize = (str) => {
    if (!str || str.length === 0) {
      return str;
    }
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  };
  const wikiPagePath = (pageName) => {
    return conf.wgArticlePath.replace("$1", encodeURIComponent(pageName).replace(/%3A/g, ":").replace(/%2F/g, "/"));
  };
  const escapeRE = (str) => {
    return str.replace(/([$()*+.?[\\\]^])/g, String.raw(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["$1"], ["\\$1"]))));
  };
  const substituteFactory = (options) => {
    options || (options = {});
    const lead = options.indicator || "$";
    const indicator = escapeRE(lead);
    const lbrace = escapeRE(options.lbrace || "{");
    const rbrace = escapeRE(options.rbrace || "}");
    const re = new RegExp(
      // $$
      "(?:".concat(indicator, "(").concat(indicator, "))|(?:").concat(indicator, "(\\d+))|(?:").concat(indicator, "(?:").concat(lbrace, "([^").concat(lbrace).concat(rbrace, "]+)").concat(rbrace, "))|(?:").concat(indicator, "(?!(?:[").concat(indicator).concat(lbrace, "]|\\d))(\\S+?)\\b)"),
      "g"
    );
    return (str, map) => {
      if (!map) {
        return str;
      }
      return str.replace(re, (match, prefix, idx, key, alpha) => {
        if (prefix === lead) {
          return lead;
        }
        const k = alpha || key || idx;
        const replacement = typeof map[k] === "function" ? map[k](match, k) : map[k];
        return typeof replacement === "string" ? replacement : replacement || match;
      });
    };
  };
  const replaceShortcuts = (() => {
    const replaceHash = substituteFactory({
      indicator: "#",
      lbrace: "[",
      rbrace: "]"
    });
    return (str, map) => {
      const s = replaceHash(str, map);
      return HC.capitalizePageNames ? capitalize(s) : s;
    };
  })();
  const findCatsRE = new RegExp("\\[\\[".concat(wikiTextBlankOrBidi, "(?:").concat(HC.category_regexp, ")").concat(wikiTextBlankOrBidi, ":[^\\]]+\\]\\]"), "g");
  const replaceByBlanks = (match) => {
    return match.replace(/(\s|\S)/g, " ");
  };
  const find_category = (wikitext, category, once) => {
    let cat_regex = null;
    if (HC.template_categories[category]) {
      cat_regex = new RegExp("\\{\\{".concat(wikiTextBlankOrBidi, "(").concat(HC.template_regexp, "(?=").concat(wikiTextBlankOrBidi, ":))?").concat(wikiTextBlankOrBidi, "(?:").concat(HC.template_categories[category], ")").concat(wikiTextBlankOrBidi, "(\\|.*?)?\\}\\}"), "g");
    } else {
      const cat_name = escapeRE(category);
      const initial = cat_name.slice(0, 1);
      cat_regex = new RegExp("\\[\\[".concat(wikiTextBlankOrBidi, "(").concat(HC.category_regexp, ")").concat(wikiTextBlankOrBidi, ":").concat(wikiTextBlankOrBidi).concat(initial === "\\" || !HC.capitalizePageNames ? initial : "[".concat(initial.toUpperCase()).concat(initial.toLowerCase(), "]")).concat(cat_name.slice(1).replace(wikiTextBlankRE, wikiTextBlank)).concat(wikiTextBlankOrBidi, "(\\|.*?)?\\]\\]"), "g");
    }
    if (once) {
      return cat_regex.exec(wikitext);
    }
    const nowikiRegex = new RegExp("<no".concat("wiki>", String.raw(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["(s|S)*?</no"], ["(\\s|\\S)*?</no"]))), "wiki", ">"), "g");
    const copiedtext = wikitext.replace(/<!--(\s|\S)*?-->/g, replaceByBlanks).replace(nowikiRegex, replaceByBlanks);
    const result = [];
    let curr_match = null;
    while ((curr_match = cat_regex.exec(copiedtext)) !== null) {
      result[result.length] = {
        match: curr_match
      };
    }
    result.re = cat_regex;
    return result;
  };
  let interlanguageRE = null;
  const change_category = (wikitext, toRemove, toAdd, key, is_hidden) => {
    const find_insertionpoint = (_wikitext) => {
      const nowikiRegex = new RegExp("<no".concat("wiki>", String.raw(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["(s|S)*?</no"], ["(\\s|\\S)*?</no"]))), "wiki", ">"), "g");
      const copiedtext = _wikitext.replace(/<!--(\s|\S)*?-->/g, replaceByBlanks).replace(nowikiRegex, replaceByBlanks);
      let index = -1;
      findCatsRE.lastIndex = 0;
      while (findCatsRE.exec(copiedtext) !== null) {
        index = findCatsRE.lastIndex;
      }
      if (index < 0) {
        let match = null;
        interlanguageRE ? match = interlanguageRE.exec(copiedtext) : (
          // Approximation without API: interlanguage links start with 2 to 3 lower case letters, optionally followed by
          // a sequence of groups consisting of a dash followed by one or more lower case letters. Exceptions are "simple"
          // and "tokipona".
          match = /((^|\n\r?)(\[\[\s*(([a-z]{2,3}(-[a-z]+)*)|simple|tokipona)\s*:[^\]]+]]\s*))+$/.exec(copiedtext)
        );
        if (match) {
          ({
            index
          } = match);
        }
        return {
          idx: index,
          onCat: false
        };
      }
      return {
        idx: index,
        onCat: index >= 0
      };
    };
    const summary = [];
    const nameSpace = HC.category_canonical;
    const keyChange = toRemove && toAdd && toRemove === toAdd && toAdd.length > 0;
    let matches;
    let cat_point = -1;
    key && (key = "|".concat(key));
    if (toRemove && toRemove.length > 0) {
      matches = find_category(wikitext, toRemove);
      if (!matches || matches.length === 0) {
        return {
          text: wikitext,
          summary,
          error: getMessage("messages-cat_notFound", toRemove)
        };
      }
      let before = wikitext.slice(0, Math.max(0, matches[0].match.index));
      let after = wikitext.slice(Math.max(0, matches[0].match.index + matches[0].match[0].length));
      if (matches.length > 1) {
        matches.re.lastIndex = 0;
        after = after.replace(matches.re, "");
      }
      if (toAdd && // nameSpace = matches[ 0 ].match[ 1 ] || nameSpace; Canonical namespace should be always preferred
      key === null) {
        [, , key] = matches[0].match;
      }
      let i = before.length - 1;
      while (i >= 0 && before.charAt(i) !== "\n" && before.slice(i, i + 1).search(/\s/) >= 0) {
        i--;
      }
      let j = 0;
      while (j < after.length && after.charAt(j) !== "\n" && after.slice(j, j + 1).search(/\s/) >= 0) {
        j++;
      }
      if (i >= 0 && before.charAt(i) === "\n" && (after.length === 0 || j < after.length && after.charAt(j) === "\n")) {
        i--;
      }
      before = i >= 0 ? before.slice(0, Math.max(0, i + 1)) : "";
      after = j < after.length ? after.slice(Math.max(0, j)) : "";
      if (before.length > 0 && before.slice(Math.max(0, before.length - 1)).search(/\S/) >= 0 && after.length > 0 && after.slice(0, 1).search(/\S/) >= 0) {
        before += " ";
      }
      cat_point = before.length;
      if (cat_point === 0 && after.length > 0 && after.slice(0, 1) === "\n") {
        after = after.slice(1);
      }
      wikitext = before + after;
      if (!keyChange) {
        if (HC.template_categories[toRemove]) {
          summary[summary.length] = getMessage("messages-template_removed", toRemove);
        } else {
          summary[summary.length] = getMessage("messages-cat_removed", toRemove);
        }
      }
    }
    if (toAdd && toAdd.length > 0) {
      matches = find_category(wikitext, toAdd);
      if (matches && matches.length > 0) {
        return {
          text: wikitext,
          summary,
          error: getMessage("messages-cat_exists", toAdd)
        };
      }
      let onCat = false;
      if (cat_point < 0) {
        const point = find_insertionpoint(wikitext);
        cat_point = point.idx;
        ({
          onCat
        } = point);
      } else {
        onCat = true;
      }
      const newcatstring = "[[".concat(nameSpace, ":").concat(toAdd).concat(key || "", "]]");
      if (cat_point >= 0) {
        const suffix = wikitext.slice(Math.max(0, cat_point));
        wikitext = wikitext.slice(0, Math.max(0, cat_point)) + (cat_point > 0 ? "\n" : "") + newcatstring + (onCat ? "" : "\n");
        wikitext += suffix.length > 0 && suffix.slice(0, 1) !== "\n" ? "\n".concat(suffix) : suffix;
      } else {
        if (wikitext.length > 0 && wikitext.slice(-1, wikitext.length - 1 + 1) !== "\n") {
          wikitext += "\n";
        }
        wikitext += (wikitext.length > 0 ? "\n" : "") + newcatstring;
      }
      if (keyChange) {
        let k = key || "";
        if (k.length > 0) {
          k = k.slice(1);
        }
        summary[summary.length] = getMessage("messages-cat_keychange", toAdd, k);
      } else {
        summary[summary.length] = getMessage("messages-cat_added", toAdd);
      }
      if (HC.uncat_regexp && !is_hidden) {
        const txt = wikitext.replace(HC.uncat_regexp, "");
        if (txt.length !== wikitext.length) {
          wikitext = txt;
          summary[summary.length] = getMessage("messages-uncat_removed");
        }
      }
    }
    return {
      text: wikitext,
      summary,
      error: null
    };
  };
  const evtKeys = ({
    ctrlKey,
    metaKey,
    shiftKey
  }) => {
    let code = 0;
    if (ctrlKey) {
      if (ctrlKey || metaKey) {
        code || (code = 1);
      }
      if (shiftKey) {
        code || (code = 2);
      }
    }
    return code;
  };
  const evtKill = (e) => {
    if (e.preventDefault) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.cancelBubble = true;
    }
    return false;
  };
  let catLine = null;
  let onUpload = false;
  let editors = [];
  let commitButton = null;
  let commitForm = null;
  let multiSpan = null;
  let pageText = null;
  let pageTime = null;
  let pageWatched = false;
  let watchCreate = false;
  let watchEdit = false;
  let minorEdits = false;
  let editToken = null;
  let is_rtl = false;
  let serverTime = null;
  let lastRevId = null;
  let pageTextRevId = null;
  let conflictingUser = null;
  let newDOM = false;
  const UNCHANGED = 0;
  const OPEN = 1;
  const CHANGE_PENDING = 2;
  const CHANGED = 3;
  const DELETED = 4;
  const setPage = (data) => {
    let startTime = null;
    if (data && data.query) {
      if (data.query.pages) {
        const [page] = data.query.pages;
        if (page) {
          if (page.revisions && page.revisions.length > 0) {
            pageText = page.revisions[0].slots["main"].content;
            if (page.revisions[0].timestamp) {
              pageTime = page.revisions[0].timestamp.replace(/\D/g, "");
            }
            if (page.revisions[0].revid) {
              pageTextRevId = page.revisions[0].revid;
            }
            if (page.revisions.length > 1) {
              conflictingUser = page.revisions[1].user;
            }
          }
          if (page.lastrevid) {
            lastRevId = page.lastrevid;
          }
          if (page.starttimestamp) {
            startTime = page.starttimestamp.replace(/\D/g, "");
          }
          pageWatched = typeof page.watched === "string";
          if (data.query.tokens) {
            editToken = data.query.tokens.csrftoken;
          }
          if (page.langlinks && (!data["query-continue"] || !data["query-continue"].langlinks)) {
            let re = "";
            for (let i = 0; i < page.langlinks.length; i++) {
              re += (i > 0 ? "|" : "") + page.langlinks[i].lang.replace(/([$()*+.?\\^])/g, String.raw(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["$1"], ["\\$1"]))));
            }
            if (re.length > 0) {
              interlanguageRE = new RegExp("((^|\\n\\r?)(\\[\\[\\s*(".concat(re, ")\\s*:[^\\]]+\\]\\]\\s*))+$"));
            }
          }
        }
      }
      if (data.query.general) {
        if (data.query.general.time && !startTime) {
          startTime = data.query.general.time.replace(/\D/g, "");
        }
        if (HC.capitalizePageNames === null) {
          HC.capitalizePageNames = data.query.general.case === "first-letter";
        }
      }
      serverTime = startTime;
      if (data.query.userinfo && data.query.userinfo.options) {
        watchCreate = !HC.dont_add_to_watchlist && data.query.userinfo.options.watchcreations === "1";
        watchEdit = !HC.dont_add_to_watchlist && data.query.userinfo.options.watchdefault === "1";
        minorEdits = data.query.userinfo.options.minordefault === 1;
        if (minorEdits) {
          HC.single_minor = true;
        }
      }
    }
  };
  let saveInProgress = false;
  const initiateEdit = (doEdit, failure) => {
    if (saveInProgress) {
      return;
    }
    saveInProgress = true;
    let oldButtonState;
    if (commitButton) {
      oldButtonState = commitButton.disabled;
      commitButton.disabled = true;
    }
    const fail = function(...args) {
      saveInProgress = false;
      if (commitButton) {
        commitButton.disabled = oldButtonState;
      }
      failure.apply(this, args);
    };
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      rawcontinue: "",
      titles: conf.wgPageName,
      prop: ["info", "revisions", "langlinks"],
      inprop: "watched",
      rvprop: ["content", "timestamp", "ids", "user"],
      rvslots: "main",
      rvlimit: "2",
      rvdir: "newer",
      rvstartid: conf.wgCurRevisionId,
      lllimit: "500",
      meta: ["siteinfo", "userinfo", "tokens"],
      type: "csrf",
      uiprop: ["options"]
    };
    api.get(params).done((data) => {
      setPage(data);
      doEdit(fail);
    }).fail(({
      status,
      statusText
    }) => {
      fail("".concat(status, " ").concat(statusText));
    });
  };
  const multiChangeMsg = (count) => {
    return getMessage("messages-multi_change", String(count));
  };
  const currentTimestamp = () => {
    const now = /* @__PURE__ */ new Date();
    let ts = String(now.getUTCFullYear());
    const two = (s) => {
      return s.slice(-2);
    };
    ts += two("0".concat(now.getUTCMonth() + 1)) + two("0".concat(now.getUTCDate())) + two("00".concat(now.getUTCHours())) + two("00".concat(now.getUTCMinutes())) + two("00".concat(now.getUTCSeconds()));
    return ts;
  };
  const performChanges = (failure, singleEditor) => {
    if (pageText === null) {
      failure(getMessage("messages-multi_error"));
      return;
    }
    let action;
    const selfEditConflict = (lastRevId !== null && lastRevId !== conf.wgCurRevisionId || pageTextRevId !== null && pageTextRevId !== conf.wgCurRevisionId) && conflictingUser && conflictingUser === conf.wgUserName;
    if (singleEditor && !singleEditor.noCommit && !HC.no_autocommit && editToken && !selfEditConflict) {
      commitForm.wpEditToken.value = editToken;
      action = commitForm.wpDiff;
      if (action) {
        action.value = "wpSave";
        action.name = action.value;
      }
    } else {
      action = commitForm.wpSave;
      if (action) {
        action.value = "wpDiff";
        action.name = action.value;
      }
    }
    let result = {
      text: pageText
    };
    const changed = [];
    const added = [];
    const deleted = [];
    const toEdit = singleEditor ? [singleEditor] : editors;
    let edit;
    let i;
    let error = null;
    let changes = 0;
    for (i = 0; i < toEdit.length; i++) {
      edit = toEdit[i];
      if (edit.state === CHANGED) {
        result = change_category(result.text, edit.originalCategory, edit.currentCategory, edit.currentKey, edit.currentHidden);
        if (!result.error) {
          changes++;
          if (!edit.originalCategory || edit.originalCategory.length === 0) {
            added[added.length] = edit.currentCategory;
          } else {
            changed[changed.length] = {
              from: edit.originalCategory,
              to: edit.currentCategory
            };
          }
        } else if (error === null) {
          ({
            error
          } = result);
        }
      } else if (edit.state === DELETED && edit.originalCategory && edit.originalCategory.length > 0) {
        result = change_category(result.text, edit.originalCategory, null, null, false);
        if (!result.error) {
          changes++;
          deleted[deleted.length] = edit.originalCategory;
        } else if (error === null) {
          ({
            error
          } = result);
        }
      }
    }
    if (error !== null) {
      action = commitForm.wpSave;
      if (action) {
        action.value = "wpDiff";
        action.name = action.value;
      }
    }
    commitForm.wpMinoredit.checked = minorEdits;
    commitForm.wpWatchthis.checked = !conf.wgArticleId && watchCreate || watchEdit || pageWatched;
    if (conf.wgArticleId || !!singleEditor) {
      if (action && action.value === "wpSave") {
        if (HC.changeTag) {
          commitForm.wpChangeTags.value = HC.changeTag;
        }
      } else {
        commitForm.wpAutoSummary.value = HC.changeTag;
      }
      if (changes === 1) {
        if (result.summary && result.summary.length > 0) {
          commitForm.wpSummary.value = (HC.changeTag ? "" : getMessage("messages-prefix")) + result.summary.join(getMessage("messages-separator")) + (HC.changeTag ? "" : getMessage("messages-using"));
        }
        commitForm.wpMinoredit.checked = HC.single_minor || minorEdits;
      } else if (changes) {
        let summary = [];
        const shortSummary = [];
        for (i = 0; i < deleted.length; i++) {
          summary[summary.length] = "−".concat(getMessage("messages-short_catchange", deleted[i]));
        }
        if (deleted.length === 1) {
          shortSummary[shortSummary.length] = "−".concat(getMessage("messages-short_catchange", deleted[0]));
        } else if (deleted.length > 0) {
          shortSummary[shortSummary.length] = "− ".concat(multiChangeMsg(deleted.length));
        }
        for (i = 0; i < added.length; i++) {
          summary[summary.length] = "+".concat(getMessage("messages-short_catchange", added[i]));
        }
        if (added.length === 1) {
          shortSummary[shortSummary.length] = "+".concat(getMessage("messages-short_catchange", added[0]));
        } else if (added.length > 0) {
          shortSummary[shortSummary.length] = "+ ".concat(multiChangeMsg(added.length));
        }
        const arrow = is_rtl ? "←" : "→";
        for (i = 0; i < changed.length; i++) {
          if (changed[i].from === changed[i].to) {
            summary[summary.length] = "±".concat(getMessage("messages-short_catchange", changed[i].from));
          } else {
            summary[summary.length] = "±".concat(getMessage("messages-short_catchange", changed[i].from)).concat(arrow).concat(getMessage("messages-short_catchange", changed[i].to));
          }
        }
        if (changed.length === 1) {
          if (changed[0].from === changed[0].to) {
            shortSummary[shortSummary.length] = "±".concat(getMessage("messages-short_catchange", changed[0].from));
          } else {
            shortSummary[shortSummary.length] = "±".concat(getMessage("messages-short_catchange", changed[0].from)).concat(arrow).concat(getMessage("messages-short_catchange", changed[0].to));
          }
        } else if (changed.length > 0) {
          shortSummary[shortSummary.length] = "± ".concat(multiChangeMsg(changed.length));
        }
        if (summary.length > 0) {
          summary = summary.join(getMessage("messages-separator"));
          if (summary.length > 200 - (HC.changeTag ? "" : getMessage("messages-prefix")).length - (HC.changeTag ? "" : getMessage("messages-using")).length) {
            summary = shortSummary.join(getMessage("messages-separator"));
          }
          commitForm.wpSummary.value = (HC.changeTag ? "" : getMessage("messages-prefix")) + summary + (HC.changeTag ? "" : getMessage("messages-using"));
        }
      }
    }
    commitForm.wpTextbox1.value = result.text;
    commitForm.wpStarttime.value = serverTime || currentTimestamp();
    commitForm.wpEdittime.value = pageTime || commitForm.wpStarttime.value;
    if (selfEditConflict) {
      commitForm.oldid.value = String(pageTextRevId || conf.wgCurRevisionId);
    }
    commitForm.hcCommit.click();
  };
  const resolveOne = (page, toResolve) => {
    const cats = page.categories;
    const {
      links
    } = page;
    let is_dab = false;
    let is_redir = typeof page.redirect === "string";
    let i;
    const is_hidden = page.categoryinfo && typeof page.categoryinfo.hidden === "string";
    const is_missing = typeof page.missing === "string";
    for (i = 0; i < toResolve.length; i++) {
      if (i && toResolve[i].dabInputCleaned !== page.title.slice(Math.max(0, page.title.indexOf(":") + 1))) {
        continue;
      }
      toResolve[i].currentHidden = is_hidden;
      toResolve[i].inputExists = !is_missing;
      toResolve[i].icon.src = is_missing ? HC.existsNo : HC.existsYes;
    }
    if (is_missing) {
      return;
    }
    if (!is_redir && cats && (getMessage("disambig_category") || getMessage("redir_category"))) {
      var _iterator = _createForOfIteratorHelper(cats), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          const cat_ = _step.value;
          let cat = cat_.title;
          if (cat) {
            cat = cat.slice(Math.max(0, cat.indexOf(":") + 1)).replace(/_/g, " ");
            if (cat === getMessage("disambig_category")) {
              is_dab = true;
              break;
            } else if (cat === getMessage("redir_category")) {
              is_redir = true;
              break;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    if (!is_redir && !is_dab) {
      return;
    }
    if (!links || links.length === 0) {
      return;
    }
    const titles = [];
    for (i = 0; i < links.length; i++) {
      if (
        // Category namespace -- always true since we ask only for the category links
        links[i].ns === 14 && // Name not empty
        links[i].title && links[i].title.length > 0
      ) {
        let match = links[i].title;
        match = match.slice(Math.max(0, match.indexOf(":") + 1));
        if (!HC.blacklist || !HC.blacklist.test(match)) {
          titles[titles.length] = match;
        }
      }
    }
    if (titles.length === 0) {
      return;
    }
    for (i = 0; i < toResolve.length; i++) {
      if (i && toResolve[i].dabInputCleaned !== page.title.slice(Math.max(0, page.title.indexOf(":") + 1))) {
        continue;
      }
      toResolve[i].inputExists = true;
      toResolve[i].icon.src = HC.existsYes;
      if (titles.length > 1) {
        toResolve[i].dab = titles;
      } else {
        toResolve[i].text.value = titles[0] + (toResolve[i].currentKey === null ? "" : "|".concat(toResolve[i].currentKey));
      }
    }
  };
  const resolveRedirects = (toResolve, params) => {
    if (!params || !params.query || !params.query.pages) {
      return;
    }
    for (const p in params.query.pages) {
      if (!Object.hasOwn(params.query.pages, p)) {
        continue;
      }
      resolveOne(params.query.pages[p], toResolve);
    }
  };
  const resolveMulti = (toResolve, callback) => {
    let i;
    for (i = 0; i < toResolve.length; i++) {
      toResolve[i].dab = null;
      toResolve[i].dabInput = toResolve[i].lastInput;
    }
    if (noSuggestions) {
      callback(toResolve);
      return;
    }
    const params = {
      action: "query",
      format: "json",
      prop: "info|links|categories|categoryinfo",
      plnamespace: "14",
      pllimit: toResolve.length * 10,
      cllimit: toResolve.length * 10
    };
    const titles = [];
    for (i = 0; i < toResolve.length; i++) {
      let v = toResolve[i].dabInput;
      v = replaceShortcuts(v, HC.shortcuts);
      toResolve[i].dabInputCleaned = v;
      titles[titles.length] = "Category:".concat(v);
    }
    params.titles = titles.join("|");
    api.get(params).done((json) => {
      resolveRedirects(toResolve, json);
      callback(toResolve);
    }).fail((req) => {
      if (!req) {
        noSuggestions = true;
      }
      callback(toResolve);
    });
  };
  const makeActive = (which) => {
    if (which.is_active) {
      return;
    }
    for (var _i = 0, _editors = editors; _i < _editors.length; _i++) {
      const editor = _editors[_i];
      if (editor !== which) {
        editor.inactivate();
      }
    }
    which.is_active = true;
    if (which.dab) {
      showDab(which);
    } else {
      const expectedInput = which.lastRealInput || which.lastInput || "";
      const actualValue = which.text.value || "";
      if (expectedInput.length === 0 && actualValue.length > 0 || expectedInput.length > 0 && actualValue.indexOf(expectedInput)) {
        which.showsList = false;
        const v = actualValue.split("|");
        [which.lastInput] = v;
        which.lastRealInput = which.lastInput;
        if (v.length > 1) {
          [, which.currentKey] = v;
        }
        which.lastSelection && (which.lastSelection = {
          start: v[0].length,
          end: v[0].length
        });
      }
      if (which.showsList) {
        which.displayList();
      }
      if (which.lastSelection) {
        setTimeout(() => {
          which.setSelection(which.lastSelection.start, which.lastSelection.end);
        }, 0);
      }
    }
  };
  const showDab = (which) => {
    if (which.is_active) {
      which.showSuggestions(which.dab, false, null, null);
      which.dab = null;
    } else {
      makeActive(which);
    }
  };
  const multiSubmit = () => {
    const toResolve = [];
    for (var _i2 = 0, _editors2 = editors; _i2 < _editors2.length; _i2++) {
      const editor = _editors2[_i2];
      if (editor.state === CHANGE_PENDING || editor.state === OPEN) {
        toResolve[toResolve.length] = editor;
      }
    }
    if (toResolve.length === 0) {
      initiateEdit((failure) => {
        performChanges(failure);
      }, (msg) => {
        mw.notify(msg, {
          tag: "hotCat"
        });
      });
      return;
    }
    resolveMulti(toResolve, (resolved) => {
      let firstDab = null;
      let dontChange = false;
      var _iterator2 = _createForOfIteratorHelper(resolved), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          const element = _step2.value;
          if (element.lastInput === element.dabInput) {
            if (element.dab) {
              firstDab || (firstDab = element);
            } else if (element.acceptCheck(true)) {
              element.commit();
            }
          } else {
            dontChange = true;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (firstDab) {
        showDab(firstDab);
      } else if (!dontChange) {
        initiateEdit((failure) => {
          performChanges(failure);
        }, (msg) => {
          mw.notify(msg, {
            tag: "hotCat"
          });
        });
      }
    });
  };
  const setMultiInput = () => {
    if (commitButton || onUpload) {
      return;
    }
    commitButton = make("input");
    commitButton.type = "button";
    commitButton.value = getMessage("messages-commit");
    commitButton.addEventListener("click", multiSubmit);
    if (multiSpan) {
      multiSpan.parentNode.replaceChild(commitButton, multiSpan);
    } else {
      catLine.append(commitButton);
    }
  };
  const checkMultiInput = () => {
    if (!commitButton) {
      return;
    }
    let hasChanges = false;
    for (var _i3 = 0, _editors3 = editors; _i3 < _editors3.length; _i3++) {
      const editor = _editors3[_i3];
      if (editor.state !== UNCHANGED) {
        hasChanges = true;
        break;
      }
    }
    commitButton.disabled = !hasChanges;
  };
  const suggestionEngines = {
    opensearch: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=opensearch&namespace=14&limit=30&search=Category:$1"),
      // $1 = search term
      // Function to convert result of uri into an array of category names
      handler: (queryResult, queryKey) => {
        if (queryResult && queryResult.length >= 2) {
          const key = queryResult[0].slice(Math.max(0, queryResult[0].indexOf(":") + 1));
          const [, titles] = queryResult;
          let exists = false;
          cat_prefix || (cat_prefix = new RegExp("^(".concat(HC.category_regexp, "):")));
          for (let i = 0; i < titles.length; i++) {
            cat_prefix.lastIndex = 0;
            const m = cat_prefix.exec(titles[i]);
            if (m && m.length > 1) {
              titles[i] = titles[i].slice(Math.max(0, titles[i].indexOf(":") + 1));
              if (key === titles[i]) {
                exists = true;
              }
            } else {
              titles.splice(i, 1);
              i--;
            }
          }
          titles.exists = exists;
          if (queryKey !== key) {
            titles.normalized = key;
          }
          return titles;
        }
        return null;
      }
    },
    internalsearch: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&list=allpages&apnamespace=14&aplimit=30&apfrom=$1&apprefix=$1"),
      handler: (queryResult) => {
        if (queryResult && queryResult.query && queryResult.query.allpages) {
          const titles = queryResult.query.allpages;
          for (let i = 0; i < titles.length; i++) {
            titles[i] = titles[i].title.slice(Math.max(0, titles[i].title.indexOf(":") + 1));
          }
          return titles;
        }
        return null;
      }
    },
    exists: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&prop=info&titles=Category:$1"),
      handler: (queryResult, queryKey) => {
        if (queryResult && queryResult.query && queryResult.query.pages && !queryResult.query.pages[-1]) {
          for (const p in queryResult.query.pages) {
            if (!Object.hasOwn(queryResult.query.pages, p)) {
              continue;
            }
            let _title = queryResult.query.pages[p].title;
            _title = _title.slice(Math.max(0, _title.indexOf(":") + 1));
            const titles = [_title];
            titles.exists = true;
            if (queryKey !== _title) {
              titles.normalized = _title;
            }
            return titles;
          }
        }
        return null;
      }
    },
    subcategories: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&list=categorymembers&cmtype=subcat&cmlimit=max&cmtitle=Category:$1"),
      handler: (queryResult) => {
        if (queryResult && queryResult.query && queryResult.query.categorymembers) {
          const titles = queryResult.query.categorymembers;
          for (let i = 0; i < titles.length; i++) {
            titles[i] = titles[i].title.slice(Math.max(0, titles[i].title.indexOf(":") + 1));
          }
          return titles;
        }
        return null;
      }
    },
    parentcategories: {
      uri: "".concat(mw.config.get("wgScriptPath"), "/api.php?format=json&action=query&prop=categories&titles=Category:$1&cllimit=max"),
      handler: (queryResult) => {
        if (queryResult && queryResult.query && queryResult.query.pages) {
          for (const p in queryResult.query.pages) {
            if (queryResult.query.pages[p].categories) {
              const titles = queryResult.query.pages[p].categories;
              for (let i = 0; i < titles.length; i++) {
                titles[i] = titles[i].title.slice(Math.max(0, titles[i].title.indexOf(":") + 1));
              }
              return titles;
            }
          }
        }
        return null;
      }
    }
  };
  const suggestionConfigs = {
    searchindex: {
      name: "Search index",
      engines: ["opensearch"],
      cache: {},
      show: true,
      temp: false,
      noCompletion: false
    },
    pagelist: {
      name: "Page list",
      engines: ["internalsearch", "exists"],
      cache: {},
      show: true,
      temp: false,
      noCompletion: false
    },
    combined: {
      name: "Combined search",
      engines: ["opensearch", "internalsearch"],
      cache: {},
      show: true,
      temp: false,
      noCompletion: false
    },
    subcat: {
      name: "Subcategories",
      engines: ["subcategories"],
      cache: {},
      show: true,
      temp: true,
      noCompletion: true
    },
    parentcat: {
      name: "Parent categories",
      engines: ["parentcategories"],
      cache: {},
      show: true,
      temp: true,
      noCompletion: true
    }
  };
  const BS = 8;
  const TAB = 9;
  const RET = 13;
  const ESC = 27;
  const SPACE = 32;
  const PGUP = 33;
  const PGDOWN = 34;
  const UP = 38;
  const DOWN = 40;
  const DEL = 46;
  const IME = 229;
  class CategoryEditor {
    constructor(...args) {
      this.initialize(...args);
    }
    initialize(line, span, after, key, is_hidden) {
      if (span) {
        if (is_rtl) {
          span.dir = "rtl";
        }
        this.isAddCategory = false;
        this.catLink = span.firstChild;
        this.originalCategory = after;
        this.originalKey = key && key.length > 1 ? key.slice(1) : null;
        this.originalExists = !hasClass(this.catLink, "new");
        this.makeLinkSpan();
        if (!this.originalExists && this.upDownLinks) {
          this.upDownLinks.style.display = "none";
        }
        span.append(this.linkSpan);
      } else {
        this.isAddCategory = true;
        this.originalCategory = "";
        this.originalKey = null;
        this.originalExists = false;
        if (!newDOM) {
          span = make("span");
          span.className = "noprint";
          if (key) {
            span.append(make(" | ", true));
            if (after) {
              after.parentNode.insertBefore(span, after.nextSibling);
              after = after.nextSibling;
            } else if (line) {
              line.append(span);
            }
          } else if (line && line.firstChild) {
            span.append(make(" ", true));
            line.append(span);
          }
        }
        this.linkSpan = make("span");
        this.linkSpan.className = "noprint nopopups hotcatlink";
        const link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.open.bind(this));
        link.append(make(HC.links.add, true));
        link.title = getMessage("tooltips-add");
        this.linkSpan.append(link);
        span = make(newDOM ? "li" : "span");
        span.className = "noprint";
        if (is_rtl) {
          span.dir = "rtl";
        }
        span.append(this.linkSpan);
        if (after) {
          after.parentNode.insertBefore(span, after.nextSibling);
        } else if (line) {
          line.append(span);
        }
        this.normalLinks = null;
        this.undelLink = null;
        this.catLink = null;
      }
      this.originalHidden = is_hidden;
      this.line = line;
      this.engine = HC.suggestions;
      this.span = span;
      this.currentCategory = this.originalCategory;
      this.currentExists = this.originalExists;
      this.currentHidden = this.originalHidden;
      this.currentKey = this.originalKey;
      this.state = UNCHANGED;
      this.lastSavedState = UNCHANGED;
      this.lastSavedCategory = this.originalCategory;
      this.lastSavedKey = this.originalKey;
      this.lastSavedExists = this.originalExists;
      this.lastSavedHidden = this.originalHidden;
      if (this.catLink && this.currentKey) {
        this.catLink.title = this.currentKey;
      }
      editors[editors.length] = this;
    }
    makeLinkSpan() {
      this.normalLinks = make("span");
      let link = null;
      if (this.originalCategory && this.originalCategory.length > 0) {
        link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.remove.bind(this));
        link.append(make(HC.links.remove, true));
        link.title = getMessage("tooltips-remove");
        this.normalLinks.append(make(" ", true));
        this.normalLinks.append(link);
      }
      if (!HC.template_categories[this.originalCategory]) {
        link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.open.bind(this));
        link.append(make(HC.links.change, true));
        link.title = getMessage("tooltips-change");
        this.normalLinks.append(make(" ", true));
        this.normalLinks.append(link);
        if (!noSuggestions && HC.use_up_down) {
          this.upDownLinks = make("span");
          link = make("a");
          link.href = "#catlinks";
          link.addEventListener("click", this.down.bind(this));
          link.append(make(HC.links.down, true));
          link.title = getMessage("tooltips-down");
          this.upDownLinks.append(make(" ", true));
          this.upDownLinks.append(link);
          link = make("a");
          link.href = "#catlinks";
          link.addEventListener("click", this.up.bind(this));
          link.append(make(HC.links.up, true));
          link.title = getMessage("tooltips-up");
          this.upDownLinks.append(make(" ", true));
          this.upDownLinks.append(link);
          this.normalLinks.append(this.upDownLinks);
        }
      }
      this.linkSpan = make("span");
      this.linkSpan.className = "noprint nopopups hotcatlink";
      this.linkSpan.append(this.normalLinks);
      this.undelLink = make("span");
      this.undelLink.className = "nopopups hotcatlink";
      this.undelLink.style.display = "none";
      link = make("a");
      link.href = "#catlinks";
      link.addEventListener("click", this.restore.bind(this));
      link.append(make(HC.links.restore, true));
      link.title = getMessage("tooltips-restore");
      this.undelLink.append(make(" ", true));
      this.undelLink.append(link);
      this.linkSpan.append(this.undelLink);
    }
    invokeSuggestions(dont_autocomplete) {
      if (this.engine && suggestionConfigs[this.engine] && suggestionConfigs[this.engine].temp && !dont_autocomplete) {
        this.engine = HC.suggestions;
      }
      this.state = CHANGE_PENDING;
      const self = this;
      setTimeout(() => {
        self.textchange(dont_autocomplete);
      }, HC.suggest_delay);
    }
    makeForm() {
      const form = make("form");
      form.method = "POST";
      form.addEventListener("submit", this.accept.bind(this));
      this.form = form;
      const self = this;
      const text = make("input");
      text.type = "text";
      text.size = HC.editbox_width;
      if (!noSuggestions) {
        text.addEventListener("keyup", (event) => {
          const key = event.key || 0;
          if (self.ime && self.lastKey === IME && !self.usesComposition && (key === TAB || key === RET || key === ESC || key === SPACE)) {
            self.ime = false;
          }
          if (self.ime) {
            return true;
          }
          if (key === UP || key === DOWN || key === PGUP || key === PGDOWN) {
            if (self.keyCount === 0) {
              return self.processKey(event);
            }
          } else {
            if (key === ESC && self.lastKey !== IME && !self.resetKeySelection()) {
              self.cancel();
              return;
            }
            self.invokeSuggestions(key === BS || key === DEL || key === ESC);
          }
          return true;
        });
        text.addEventListener("keydown", (event) => {
          const key = event.key || 0;
          self.lastKey = key;
          self.keyCount = 0;
          if (!self.ime && key === IME && !self.usesComposition) {
            self.ime = true;
          } else if (self.ime && key !== IME && !(key >= 16 && key <= 20 || key >= 91 && key <= 93 || key === 144)) {
            self.ime = false;
          }
          if (self.ime) {
            return true;
          }
          if (key === RET) {
            return self.accept(event);
          }
          return key === ESC ? evtKill(event) : true;
        });
        text.addEventListener("keypress", (event) => {
          self.keyCount++;
          return self.processKey(event);
        });
        $(text).on("focus", () => {
          makeActive(self);
        });
        $(text).on(text.onbeforedeactivate !== void 0 && text.createTextRange ? "beforedeactivate" : "blur", this.saveView.bind(this));
        try {
          $(text).on("compositionstart", () => {
            self.lastKey = IME;
            self.usesComposition = true;
            self.ime = true;
          });
          $(text).on("compositionend", () => {
            self.lastKey = IME;
            self.usesComposition = true;
            self.ime = false;
          });
          $(text).on("textInput", () => {
            self.ime = false;
            self.invokeSuggestions(false);
          });
        } catch {
        }
        $(text).on("blur", () => {
          self.usesComposition = false;
          self.ime = false;
        });
      }
      this.text = text;
      this.icon = make("img");
      let list = null;
      if (!noSuggestions) {
        list = make("select");
        list.addEventListener("click", () => {
          if (self.highlightSuggestion(0)) {
            self.textchange(false, true);
          }
        });
        list.addEventListener("dblclick", (e) => {
          if (self.highlightSuggestion(0)) {
            self.accept(e);
          }
        });
        list.addEventListener("change", () => {
          self.highlightSuggestion(0);
          self.text.focus();
        });
        list.addEventListener("keyup", (event) => {
          if (event.key === ESC) {
            self.resetKeySelection();
            self.text.focus();
            setTimeout(() => {
              self.textchange(true);
            }, HC.suggest_delay);
          } else if (event.key === RET) {
            self.accept(event);
          }
        });
        if (!HC.fixed_search) {
          const engineSelector = make("select");
          for (const key in suggestionConfigs) {
            if (suggestionConfigs[key].show) {
              const opt = make("option");
              opt.value = key;
              if (key === this.engine) {
                opt.selected = true;
              }
              opt.append(make(suggestionConfigs[key].name, true));
              engineSelector.append(opt);
            }
          }
          engineSelector.addEventListener("change", () => {
            self.engine = self.engineSelector.options[self.engineSelector.selectedIndex].value;
            self.text.focus();
            self.textchange(true, true);
          });
          this.engineSelector = engineSelector;
        }
      }
      this.list = list;
      const button_label = (_id, defaultText) => {
        const label = null;
        if (!label || !label.data) {
          return defaultText;
        }
        return label.data;
      };
      const OK = make("input");
      OK.type = "button";
      OK.value = button_label("wpOkUploadLbl", getMessage("messages-ok"));
      OK.addEventListener("click", this.accept.bind(this));
      this.ok = OK;
      const cancel = make("input");
      cancel.type = "button";
      cancel.value = button_label("wpCancelUploadLbl", getMessage("messages-cancel"));
      cancel.addEventListener("click", this.cancel.bind(this));
      this.cancelButton = cancel;
      const span = make("span");
      span.className = "hotcatinput";
      span.style.position = "relative";
      span.append(text);
      span.append(make(" ", true));
      span.style.whiteSpace = "nowrap";
      if (list) {
        span.append(list);
      }
      if (this.engineSelector) {
        span.append(this.engineSelector);
      }
      if (!noSuggestions) {
        span.append(this.icon);
      }
      span.append(OK);
      span.append(cancel);
      form.append(span);
      form.style.display = "none";
      this.span.append(form);
    }
    display(event) {
      if (this.isAddCategory && !onUpload && this.line) {
        new CategoryEditor(this.line, null, this.span, true);
      }
      if (!commitButton && !onUpload) {
        for (var _i4 = 0, _editors4 = editors; _i4 < _editors4.length; _i4++) {
          const editor = _editors4[_i4];
          if (editor.state !== UNCHANGED) {
            setMultiInput();
            break;
          }
        }
      }
      if (!this.form) {
        this.makeForm();
      }
      if (this.list) {
        this.list.style.display = "none";
      }
      if (this.engineSelector) {
        this.engineSelector.style.display = "none";
      }
      this.currentCategory = this.lastSavedCategory;
      this.currentExists = this.lastSavedExists;
      this.currentHidden = this.lastSavedHidden;
      this.currentKey = this.lastSavedKey;
      this.icon.src = this.currentExists ? HC.existsYes : HC.existsNo;
      this.text.value = this.currentCategory + (this.currentKey === null ? "" : "|".concat(this.currentKey));
      this.originalState = this.state;
      this.lastInput = this.currentCategory;
      this.inputExists = this.currentExists;
      this.state = this.state === UNCHANGED ? OPEN : CHANGE_PENDING;
      this.lastSelection = {
        start: this.currentCategory.length,
        end: this.currentCategory.length
      };
      this.showsList = false;
      if (this.catLink) {
        this.catLink.style.display = "none";
      }
      this.linkSpan.style.display = "none";
      this.form.style.display = "inline";
      this.ok.disabled = false;
      const result = evtKill(event);
      this.text.focus();
      this.text.readOnly = false;
      checkMultiInput();
      return result;
    }
    show(event, engine, readOnly) {
      const result = this.display(event);
      const v = this.lastSavedCategory;
      if (v.length === 0) {
        return result;
      }
      this.text.readOnly = !!readOnly;
      this.engine = engine;
      this.textchange(false, true);
      return result;
    }
    open(event) {
      return this.show(event, this.engine && suggestionConfigs[this.engine].temp ? HC.suggestions : this.engine);
    }
    down(event) {
      return this.show(event, "subcat", true);
    }
    up(event) {
      return this.show(event, "parentcat");
    }
    cancel() {
      if (this.isAddCategory && !onUpload) {
        this.removeEditor();
        return;
      }
      this.inactivate();
      this.form.style.display = "none";
      if (this.catLink) {
        this.catLink.style.display = "";
      }
      this.linkSpan.style.display = "";
      this.state = this.originalState;
      this.currentCategory = this.lastSavedCategory;
      this.currentKey = this.lastSavedKey;
      this.currentExists = this.lastSavedExists;
      this.currentHidden = this.lastSavedHidden;
      if (this.catLink) {
        this.catLink.title = this.currentKey && this.currentKey.length > 0 ? this.currentKey : "";
      }
      if (this.state === UNCHANGED) {
        if (this.catLink) {
          this.catLink.style.backgroundColor = "transparent";
        }
      } else if (!onUpload) {
        try {
          this.catLink.style.backgroundColor = HC.bg_changed;
        } catch {
        }
      }
      checkMultiInput();
    }
    removeEditor() {
      if (!newDOM) {
        const next = this.span.nextSibling;
        if (next) {
          next.remove();
        }
      }
      if (this.span && this.span.parentNode) {
        this.span.remove();
      }
      for (let i = 0; i < editors.length; i++) {
        if (editors[i] === this) {
          editors.splice(i, 1);
          break;
        }
      }
      checkMultiInput();
    }
    rollback(event) {
      this.undoLink.remove();
      this.undoLink = null;
      this.currentCategory = this.originalCategory;
      this.currentKey = this.originalKey;
      this.currentExists = this.originalExists;
      this.currentHidden = this.originalHidden;
      this.lastSavedCategory = this.originalCategory;
      this.lastSavedKey = this.originalKey;
      this.lastSavedExists = this.originalExists;
      this.lastSavedHidden = this.originalHidden;
      this.state = UNCHANGED;
      if (!this.currentCategory || this.currentCategory.length === 0) {
        this.removeEditor();
      } else {
        this.catLink.firstChild.remove();
        this.catLink.append(make(this.currentCategory, true));
        this.catLink.href = wikiPagePath("".concat(HC.category_canonical, ":").concat(this.currentCategory));
        this.catLink.title = this.currentKey || "";
        this.catLink.className = this.currentExists ? "" : "new";
        this.catLink.style.backgroundColor = "transparent";
        if (this.upDownLinks) {
          this.upDownLinks.style.display = this.currentExists ? "" : "none";
        }
        checkMultiInput();
      }
      return evtKill(event);
    }
    inactivate() {
      if (this.list) {
        this.list.style.display = "none";
      }
      if (this.engineSelector) {
        this.engineSelector.style.display = "none";
      }
      this.is_active = false;
    }
    acceptCheck(dontCheck) {
      this.sanitizeInput();
      const value = this.text.value.split("|");
      let key = null;
      if (value.length > 1) {
        [, key] = value;
      }
      let v = value[0].replace(/_/g, " ").trim();
      if (HC.capitalizePageNames) {
        v = capitalize(v);
      }
      this.lastInput = v;
      v = replaceShortcuts(v, HC.shortcuts);
      if (v.length === 0) {
        this.cancel();
        return false;
      }
      if (!dontCheck && (conf.wgNamespaceNumber === 14 && v === conf.wgTitle || HC.blacklist && HC.blacklist.test(v))) {
        this.cancel();
        return false;
      }
      this.currentCategory = v;
      this.currentKey = key;
      this.currentExists = this.inputExists;
      return true;
    }
    accept(event) {
      this.noCommit = evtKeys(event) === 1;
      const result = evtKill(event);
      if (this.acceptCheck()) {
        const toResolve = [this];
        const original = this.currentCategory;
        resolveMulti(toResolve, (resolved) => {
          if (resolved[0].dab) {
            showDab(resolved[0]);
          } else if (resolved[0].acceptCheck(true)) {
            resolved[0].commit(resolved[0].currentCategory === original ? null : getMessage("messages-cat_resolved", original));
          }
        });
      }
      return result;
    }
    close() {
      if (!this.catLink) {
        this.catLink = make("a");
        this.catLink.append(make("foo", true));
        this.catLink.style.display = "none";
        this.span.insertBefore(this.catLink, this.span.firstChild.nextSibling);
      }
      this.catLink.firstChild.remove();
      this.catLink.append(make(this.currentCategory, true));
      this.catLink.href = wikiPagePath("".concat(HC.category_canonical, ":").concat(this.currentCategory));
      this.catLink.className = this.currentExists ? "" : "new";
      this.lastSavedCategory = this.currentCategory;
      this.lastSavedKey = this.currentKey;
      this.lastSavedExists = this.currentExists;
      this.lastSavedHidden = this.currentHidden;
      this.inactivate();
      this.form.style.display = "none";
      this.catLink.title = this.currentKey || "";
      this.catLink.style.display = "";
      if (this.isAddCategory) {
        if (onUpload && this.line) {
          new CategoryEditor(this.line, null, this.span, true);
        }
        this.isAddCategory = false;
        this.linkSpan.remove();
        this.makeLinkSpan();
        this.span.append(this.linkSpan);
      }
      if (!this.undoLink) {
        const span = make("span");
        const link = make("a");
        link.href = "#catlinks";
        link.addEventListener("click", this.rollback.bind(this));
        link.append(make(HC.links.undo, true));
        link.title = getMessage("tooltips-undo");
        span.append(make(" ", true));
        span.append(link);
        this.normalLinks.append(span);
        this.undoLink = span;
        if (!onUpload) {
          try {
            this.catLink.style.backgroundColor = HC.bg_changed;
          } catch {
          }
        }
      }
      if (this.upDownLinks) {
        this.upDownLinks.style.display = this.lastSavedExists ? "" : "none";
      }
      this.linkSpan.style.display = "";
      this.state = CHANGED;
      checkMultiInput();
    }
    commit() {
      if (this.currentCategory === this.originalCategory && (this.currentKey === this.originalKey || this.currentKey === null && this.originalKey.length === 0) || conf.wgNamespaceNumber === 14 && this.currentCategory === conf.wgTitle || HC.blacklist && HC.blacklist.test(this.currentCategory)) {
        this.cancel();
        return;
      }
      this.close();
      if (!commitButton && !onUpload) {
        const self = this;
        initiateEdit((failure) => {
          performChanges(failure, self);
        }, (msg) => {
          mw.notify(msg, {
            tag: "hotCat"
          });
        });
      }
    }
    remove(event) {
      this.doRemove(evtKeys(event) === 1);
      return evtKill(event);
    }
    doRemove(noCommit) {
      if (this.isAddCategory) {
        this.cancel();
        return;
      }
      if (!commitButton && !onUpload) {
        for (var _i5 = 0, _editors5 = editors; _i5 < _editors5.length; _i5++) {
          const editor = _editors5[_i5];
          if (editor.state !== UNCHANGED) {
            setMultiInput();
            break;
          }
        }
      }
      if (commitButton) {
        this.catLink.title = "";
        this.catLink.style.cssText += "; text-decoration : line-through !important;";
        try {
          this.catLink.style.backgroundColor = HC.bg_changed;
        } catch {
        }
        this.originalState = this.state;
        this.state = DELETED;
        this.normalLinks.style.display = "none";
        this.undelLink.style.display = "";
        checkMultiInput();
      } else if (onUpload) {
        this.removeEditor();
      } else {
        this.originalState = this.state;
        this.state = DELETED;
        this.noCommit = noCommit || HC.del_needs_diff;
        const self = this;
        initiateEdit((failure) => {
          performChanges(failure, self);
        }, (msg) => {
          self.state = self.originalState;
          mw.notify(msg, {
            tag: "hotCat"
          });
        });
      }
    }
    restore(event) {
      this.catLink.title = this.currentKey || "";
      this.catLink.style.textDecoration = "";
      this.state = this.originalState;
      if (this.state === UNCHANGED) {
        this.catLink.style.backgroundColor = "transparent";
      } else {
        try {
          this.catLink.style.backgroundColor = HC.bg_changed;
        } catch {
        }
      }
      this.normalLinks.style.display = "";
      this.undelLink.style.display = "none";
      checkMultiInput();
      return evtKill(event);
    }
    // Internal operations
    selectEngine(engineName) {
      if (!this.engineSelector) {
        return;
      }
      for (let i = 0; i < this.engineSelector.options.length; i++) {
        this.engineSelector.options[i].selected = this.engineSelector.options[i].value === engineName;
      }
    }
    sanitizeInput() {
      let v = this.text.value || "";
      v = v.replace(/^(\s|_)+/, "");
      const re = new RegExp("^(".concat(HC.category_regexp, "):"));
      if (re.test(v)) {
        v = v.slice(Math.max(0, v.indexOf(":") + 1)).replace(/^(\s|_)+/, "");
      }
      v = v.replace(/\u200E$/, "");
      if (HC.capitalizePageNames) {
        v = capitalize(v);
      }
      if (this.text.value !== null && this.text.value !== v) {
        this.text.value = v;
      }
    }
    makeCall(url, callbackObj, engine, queryKey, cleanKey) {
      let cb = callbackObj;
      const e = engine;
      const v = queryKey;
      const z = cleanKey;
      const self = this;
      const done = () => {
        cb.callsMade++;
        if (cb.callsMade === cb.nofCalls) {
          if (cb.exists) {
            cb.allTitles.exists = true;
          }
          if (cb.normalized) {
            cb.allTitles.normalized = cb.normalized;
          }
          if (!cb.dontCache && !suggestionConfigs[cb.engineName].cache[z]) {
            suggestionConfigs[cb.engineName].cache[z] = cb.allTitles;
          }
          self.text.readOnly = false;
          if (!cb.cancelled) {
            self.showSuggestions(cb.allTitles, cb.noCompletion, v, cb.engineName);
          }
          if (cb === self.callbackObj) {
            self.callbackObj = null;
          }
          cb = void 0;
        }
      };
      $.getJSON(url, (json) => {
        const titles = e.handler(json, z);
        if (titles && titles.length > 0) {
          cb.allTitles = cb.allTitles === null ? titles : [...cb.allTitles, ...(0, import_ext_gadget2.generateArray)(titles)];
          if (titles.exists) {
            cb.exists = true;
          }
          if (titles.normalized) {
            cb.normalized = titles.normalized;
          }
        }
        done();
      }).fail((req) => {
        if (!req) {
          noSuggestions = true;
        }
        cb.dontCache = true;
        done();
      });
    }
    callbackObj = null;
    textchange(dont_autocomplete, force) {
      makeActive(this);
      this.sanitizeInput();
      let v = this.text.value;
      const pipe = v.indexOf("|");
      if (pipe >= 0) {
        this.currentKey = v.slice(Math.max(0, pipe + 1));
        v = v.slice(0, Math.max(0, pipe));
      } else {
        this.currentKey = null;
      }
      if (this.lastInput === v && !force) {
        return;
      }
      if (this.lastInput !== v) {
        checkMultiInput();
      }
      this.lastInput = v;
      this.lastRealInput = v;
      this.ok.disabled = v.length > 0 && HC.blacklist && HC.blacklist.test(v);
      if (noSuggestions) {
        if (this.list) {
          this.list.style.display = "none";
        }
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        if (this.icon) {
          this.icon.style.display = "none";
        }
        return;
      }
      if (v.length === 0) {
        this.showSuggestions([]);
        return;
      }
      let cleanKey = v.replace(/[\u200E\u200F\u202A-\u202E]/g, "").replace(wikiTextBlankRE, " ");
      cleanKey = replaceShortcuts(cleanKey, HC.shortcuts);
      cleanKey = cleanKey.trim();
      if (cleanKey.length === 0) {
        this.showSuggestions([]);
        return;
      }
      if (this.callbackObj) {
        this.callbackObj.cancelled = true;
      }
      const engineName = suggestionConfigs[this.engine] ? this.engine : "combined";
      dont_autocomplete || (dont_autocomplete = suggestionConfigs[engineName].noCompletion);
      if (suggestionConfigs[engineName].cache[cleanKey]) {
        this.showSuggestions(suggestionConfigs[engineName].cache[cleanKey], dont_autocomplete, v, engineName);
        return;
      }
      const {
        engines
      } = suggestionConfigs[engineName];
      this.callbackObj = {
        allTitles: null,
        callsMade: 0,
        nofCalls: engines.length,
        noCompletion: dont_autocomplete,
        engineName
      };
      this.makeCalls(engines, this.callbackObj, v, cleanKey);
    }
    makeCalls(engines, cb, v, cleanKey) {
      var _iterator3 = _createForOfIteratorHelper(engines), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          const engine_ = _step3.value;
          const engine = suggestionEngines[engine_];
          const url = conf.wgScriptPath + engine.uri.replace(/\$1/g, encodeURIComponent(cleanKey));
          this.makeCall(url, cb, engine, v, cleanKey);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    showSuggestions(titles, dontAutocomplete, queryKey, engineName) {
      this.text.readOnly = false;
      this.dab = null;
      this.showsList = false;
      if (!this.list) {
        return;
      }
      if (noSuggestions) {
        if (this.list) {
          this.list.style.display = "none";
        }
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        if (this.icon) {
          this.icon.style.display = "none";
        }
        this.inputExists = true;
        return;
      }
      this.engineName = engineName;
      if (engineName) {
        if (!this.engineSelector) {
          this.engineName = null;
        }
      } else if (this.engineSelector) {
        this.engineSelector.style.display = "none";
      }
      if (queryKey) {
        if (this.lastInput.indexOf(queryKey)) {
          return;
        }
        if (this.lastQuery && this.lastInput.indexOf(this.lastQuery) === 0 && this.lastQuery.length > queryKey.length) {
          return;
        }
      }
      this.lastQuery = queryKey;
      let v = this.text.value.split("|");
      const key = v.length > 1 ? "|".concat(v[1]) : "";
      v = HC.capitalizePageNames ? capitalize(v[0]) : v[0];
      let vNormalized = v;
      const knownToExist = titles && titles.exists;
      let i;
      if (titles) {
        if (titles.normalized && v.indexOf(queryKey) === 0) {
          vNormalized = titles.normalized + v.slice(queryKey.length);
        }
        const vLow = vNormalized.toLowerCase();
        if (HC.blacklist) {
          for (i = 0; i < titles.length; i++) {
            if (HC.blacklist.test(titles[i])) {
              titles.splice(i, 1);
              i--;
            }
          }
        }
        titles.sort((a, b) => {
          if (a === b) {
            return 0;
          }
          if (a.indexOf(b) === 0) {
            return 1;
          }
          if (b.indexOf(a) === 0) {
            return -1;
          }
          let prefixMatchA = a.indexOf(vNormalized) === 0 ? 1 : 0;
          let prefixMatchB = b.indexOf(vNormalized) === 0 ? 1 : 0;
          if (prefixMatchA !== prefixMatchB) {
            return prefixMatchB - prefixMatchA;
          }
          const aLow = a.toLowerCase();
          const bLow = b.toLowerCase();
          prefixMatchA = aLow.indexOf(vLow) === 0 ? 1 : 0;
          prefixMatchB = bLow.indexOf(vLow) === 0 ? 1 : 0;
          if (prefixMatchA !== prefixMatchB) {
            return prefixMatchB - prefixMatchA;
          }
          if (a < b) {
            return -1;
          }
          if (b < a) {
            return 1;
          }
          return 0;
        });
        for (i = 0; i < titles.length; i++) {
          if (i + 1 < titles.length && titles[i] === titles[i + 1] || conf.wgNamespaceNumber === 14 && titles[i] === conf.wgTitle) {
            titles.splice(i, 1);
            i--;
          }
        }
      }
      if (!titles || titles.length === 0) {
        if (this.list) {
          this.list.style.display = "none";
        }
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        if (engineName && suggestionConfigs[engineName] && !suggestionConfigs[engineName].temp) {
          if (this.icon) {
            this.icon.src = HC.existsNo;
          }
          this.inputExists = false;
        }
        return;
      }
      const [firstTitle] = titles;
      const completed = this.autoComplete(firstTitle, v, vNormalized, key, dontAutocomplete);
      const existing = completed || knownToExist || firstTitle === replaceShortcuts(v, HC.shortcuts);
      if (engineName && suggestionConfigs[engineName] && !suggestionConfigs[engineName].temp) {
        this.icon.src = existing ? HC.existsYes : HC.existsNo;
        this.inputExists = existing;
      }
      if (completed) {
        this.lastInput = firstTitle;
        if (titles.length === 1) {
          this.list.style.display = "none";
          if (this.engineSelector) {
            this.engineSelector.style.display = "none";
          }
          return;
        }
      }
      while (this.list.firstChild) {
        this.list.firstChild.remove();
      }
      for (i = 0; i < titles.length; i++) {
        const opt = make("option");
        opt.append(make(titles[i], true));
        opt.selected = completed && i === 0;
        this.list.append(opt);
      }
      this.displayList();
    }
    displayList() {
      this.showsList = true;
      if (!this.is_active) {
        this.list.style.display = "none";
        if (this.engineSelector) {
          this.engineSelector.style.display = "none";
        }
        return;
      }
      let nofItems = this.list.options.length > HC.listSize ? HC.listSize : this.list.options.length;
      if (nofItems <= 1) {
        nofItems = 2;
      }
      this.list.size = nofItems;
      this.list.style.align = is_rtl ? "right" : "left";
      this.list.style.zIndex = 5;
      this.list.style.position = "absolute";
      const anchor = is_rtl ? "right" : "left";
      let listh = 0;
      if (this.list.style.display === "none") {
        this.list.style.top = "".concat(this.text.offsetTop, "px");
        this.list.style[anchor] = "-10000px";
        this.list.style.display = "";
        listh = this.list.offsetHeight;
        this.list.style.display = "none";
      } else {
        listh = this.list.offsetHeight;
      }
      let maxListHeight = listh;
      if (nofItems < HC.listSize) {
        maxListHeight = listh / nofItems * HC.listSize;
      }
      const viewport = (what) => {
        if (is_webkit && !document.evaluate) {
          return window["inner".concat(what)];
        }
        const s = "client".concat(what);
        if (window.opera) {
          return $("body")[0][s];
        }
        return (document.documentElement ? document.documentElement[s] : 0) || $("body")[0][s] || 0;
      };
      const scroll_offset = (what) => {
        const s = "scroll".concat(what);
        let result = (document.documentElement ? document.documentElement[s] : 0) || $("body")[0][s] || 0;
        if (is_rtl && what === "Left") {
          if (result < 0) {
            result = -result;
          }
          if (!is_webkit) {
            result = scroll_offset("Width") - viewport("Width") - result;
          }
        }
        return result;
      };
      const position = (node) => {
        if (node.getBoundingClientRect) {
          const box = node.getBoundingClientRect();
          return {
            x: Math.round(box.left + scroll_offset("Left")),
            y: Math.round(box.top + scroll_offset("Top"))
          };
        }
        let t = 0;
        let l = 0;
        do {
          t += node.offsetTop || 0;
          l += node.offsetLeft || 0;
          node = node.offsetParent;
        } while (node);
        return {
          x: l,
          y: t
        };
      };
      const textPos = position(this.text);
      const nl = 0;
      let nt = 0;
      let offset = 0;
      const textBoxWidth = this.text.offsetWidth || this.text.clientWidth;
      if (this.engineName) {
        this.engineSelector.style.zIndex = 5;
        this.engineSelector.style.position = "absolute";
        this.engineSelector.style.width = "".concat(textBoxWidth, "px");
        if (this.engineSelector.style.display === "none") {
          this.engineSelector.style[anchor] = "-10000px";
          this.engineSelector.style.top = "0";
          this.engineSelector.style.display = "";
          offset = this.engineSelector.offsetHeight;
          this.engineSelector.style.display = "none";
        } else {
          offset = this.engineSelector.offsetHeight;
        }
        this.engineSelector.style[anchor] = "".concat(nl, "px");
      }
      if (textPos.y < maxListHeight + offset + 1) {
        nt = this.text.offsetHeight + offset + 1;
        if (this.engineName) {
          this.engineSelector.style.top = "".concat(this.text.offsetHeight, "px");
        }
      } else {
        nt = -listh - offset - 1;
        if (this.engineName) {
          this.engineSelector.style.top = "".concat(-(offset + 1), "px");
        }
      }
      this.list.style.top = "".concat(nt, "px");
      this.list.style.width = "";
      this.list.style[anchor] = "".concat(nl, "px");
      if (this.engineName) {
        this.selectEngine(this.engineName);
        this.engineSelector.style.display = "";
      }
      this.list.style.display = "block";
      if (this.list.offsetWidth < textBoxWidth) {
        this.list.style.width = "".concat(textBoxWidth, "px");
        return;
      }
      const scroll = scroll_offset("Left");
      const view_w = viewport("Width");
      let w = this.list.offsetWidth;
      const l_pos = position(this.list);
      let left = l_pos.x;
      let right = left + w;
      if (left < scroll || right > scroll + view_w) {
        if (w > view_w) {
          w = view_w;
          this.list.style.width = "".concat(w, "px");
          if (is_rtl) {
            left = right - w;
          } else {
            right = left + w;
          }
        }
        let relative_offset = 0;
        if (left < scroll) {
          relative_offset = scroll - left;
        } else if (right > scroll + view_w) {
          relative_offset = -(right - scroll - view_w);
        }
        if (is_rtl) {
          relative_offset = -relative_offset;
        }
        if (relative_offset) {
          this.list.style[anchor] = "".concat(nl + relative_offset, "px");
        }
      }
    }
    autoComplete(newVal, actVal, normalizedActVal, key, dontModify) {
      if (newVal === actVal) {
        return true;
      }
      if (dontModify || this.ime || !this.canSelect()) {
        return false;
      }
      if (newVal.indexOf(actVal)) {
        if (normalizedActVal && newVal.indexOf(normalizedActVal) === 0) {
          if (this.lastRealInput === actVal) {
            this.lastRealInput = normalizedActVal;
          }
          actVal = normalizedActVal;
        } else {
          return false;
        }
      }
      this.text.focus();
      this.text.value = newVal + key;
      this.setSelection(actVal.length, newVal.length);
      return true;
    }
    canSelect() {
      return this.text.setSelectionRange || this.text.createTextRange || this.text.selectionStart !== void 0 && this.text.selectionEnd !== void 0;
    }
    setSelection(from, to) {
      if (!this.text.value) {
        return;
      }
      if (this.text.setSelectionRange) {
        this.text.setSelectionRange(from, to);
      } else if (this.text.selectionStart !== void 0) {
        if (from > this.text.selectionStart) {
          this.text.selectionEnd = to;
          this.text.selectionStart = from;
        } else {
          this.text.selectionStart = from;
          this.text.selectionEnd = to;
        }
      } else if (this.text.createTextRange) {
        const new_selection = this.text.createTextRange();
        new_selection.move("character", from);
        new_selection.moveEnd("character", to - from);
        new_selection.select();
      }
    }
    getSelection() {
      let from = 0;
      let to = 0;
      if (!this.text.value) {
      } else if (this.text.selectionStart !== void 0) {
        from = this.text.selectionStart;
        to = this.text.selectionEnd;
      } else if (document.selection && document.selection.createRange) {
        const rng = document.selection.createRange().duplicate();
        if (rng.parentNode() === this.text) {
          try {
            const textRng = this.text.createTextRange();
            textRng.move("character", 0);
            textRng.setEndPoint("EndToEnd", rng);
            to = textRng.text.length;
            textRng.setEndPoint("EndToStart", rng);
            from = textRng.text.length;
          } catch {
            from = this.text.value.length;
            to = from;
          }
        }
      }
      return {
        start: from,
        end: to
      };
    }
    saveView() {
      this.lastSelection = this.getSelection();
    }
    processKey(event) {
      let dir = 0;
      switch (this.lastKey) {
        case UP:
          dir = -1;
          break;
        case DOWN:
          dir = 1;
          break;
        case PGUP:
          dir = -HC.listSize;
          break;
        case PGDOWN:
          dir = HC.listSize;
          break;
        case ESC:
          return evtKill(event);
      }
      if (dir) {
        if (this.list.style.display !== "none") {
          this.highlightSuggestion(dir);
          return evtKill(event);
        } else if (this.keyCount <= 1 && (!this.callbackObj || this.callbackObj.callsMade === this.callbackObj.nofCalls)) {
          this.textchange();
        }
      }
      return true;
    }
    highlightSuggestion(dir) {
      if (noSuggestions || !this.list || this.list.style.display === "none") {
        return false;
      }
      const curr = this.list.selectedIndex;
      let tgt = -1;
      if (dir === 0) {
        if (curr < 0 || curr >= this.list.options.length) {
          return false;
        }
        tgt = curr;
      } else {
        tgt = curr < 0 ? 0 : curr + dir;
        tgt = tgt < 0 ? 0 : tgt;
        if (tgt >= this.list.options.length) {
          tgt = this.list.options.length - 1;
        }
      }
      if (tgt !== curr || dir === 0) {
        if (curr >= 0 && curr < this.list.options.length && dir !== 0) {
          this.list.options[curr].selected = false;
        }
        this.list.options[tgt].selected = true;
        const v = this.text.value.split("|");
        const key = v.length > 1 ? "|".concat(v[1]) : "";
        const completed = this.autoComplete(this.list.options[tgt].text, this.lastRealInput, null, key, false);
        if (!completed || this.list.options[tgt].text === this.lastRealInput) {
          this.text.value = this.list.options[tgt].text + key;
          if (this.canSelect()) {
            this.setSelection(this.list.options[tgt].text.length, this.list.options[tgt].text.length);
          }
        }
        this.lastInput = this.list.options[tgt].text;
        this.inputExists = true;
        if (this.icon) {
          this.icon.src = HC.existsYes;
        }
        this.state = CHANGE_PENDING;
      }
      return true;
    }
    resetKeySelection() {
      if (noSuggestions || !this.list || this.list.style.display === "none") {
        return false;
      }
      const curr = this.list.selectedIndex;
      if (curr >= 0 && curr < this.list.options.length) {
        this.list.options[curr].selected = false;
        const v = this.text.value.split("|");
        const key = v.length > 1 ? "|".concat(v[1]) : "";
        let result = v[0] !== this.lastInput;
        if (v[0] !== this.lastRealInput) {
          this.text.value = this.lastRealInput + key;
          result = true;
        }
        this.lastInput = this.lastRealInput;
        return result;
      }
      return false;
    }
  }
  const initialize = () => {
    const config = {};
    HC.dont_add_to_watchlist = window.hotcat_dont_add_to_watchlist === void 0 ? config.HotCatDontAddToWatchlist === void 0 ? HC.dont_add_to_watchlist : config.HotCatDontAddToWatchlist : !!window.hotcat_dont_add_to_watchlist;
    HC.no_autocommit = window.hotcat_no_autocommit === void 0 ? config.HotCatNoAutoCommit === void 0 ? conf.wgNamespaceNumber % 2 ? true : HC.no_autocommit : config.HotCatNoAutoCommit : !!window.hotcat_no_autocommit;
    HC.del_needs_diff = window.hotcat_del_needs_diff === void 0 ? config.HotCatDelNeedsDiff === void 0 ? HC.del_needs_diff : config.HotCatDelNeedsDiff : !!window.hotcat_del_needs_diff;
    HC.suggest_delay = window.hotcat_suggestion_delay || config.HotCatSuggestionDelay || HC.suggest_delay;
    HC.editbox_width = window.hotcat_editbox_width || config.HotCatEditBoxWidth || HC.editbox_width;
    HC.suggestions = window.hotcat_suggestions || config.HotCatSuggestions || HC.suggestions;
    if (typeof HC.suggestions !== "string" || !suggestionConfigs[HC.suggestions]) {
      HC.suggestions = "combined";
    }
    HC.fixed_search = window.hotcat_suggestions_fixed === void 0 ? config.HotCatFixedSuggestions === void 0 ? HC.fixed_search : config.HotCatFixedSuggestions : !!window.hotcat_suggestions_fixed;
    HC.single_minor = window.hotcat_single_changes_are_minor === void 0 ? config.HotCatMinorSingleChanges === void 0 ? HC.single_minor : config.HotCatMinorSingleChanges : !!window.hotcat_single_changes_are_minor;
    HC.bg_changed = window.hotcat_changed_background || config.HotCatChangedBackground || HC.bg_changed;
    HC.use_up_down = window.hotcat_use_category_links === void 0 ? config.HotCatUseCategoryLinks === void 0 ? HC.use_up_down : config.HotCatUseCategoryLinks : !!window.hotcat_use_category_links;
    HC.listSize = window.hotcat_list_size || config.HotCatListSize || HC.listSize;
    HC.changeTag = config.HotCatChangeTag || "";
    if (HC.changeTag) {
      const eForm = document.editform;
      const catRegExp = new RegExp("^\\[\\[(".concat(HC.category_regexp, "):"));
      let oldTxt;
      const isMinorChange = () => {
        let newTxt = eForm.wpTextbox1;
        if (!newTxt) {
          return;
        }
        newTxt = newTxt.value;
        const oldLines = oldTxt.match(/^.*$/gm);
        const newLines = newTxt.match(/^.*$/gm);
        let cArr;
        const except = (aArr, bArr) => {
          const result = [];
          let lArr;
          let sArr;
          if (aArr.length < bArr.length) {
            lArr = bArr;
            sArr = aArr;
          } else {
            lArr = aArr;
            sArr = bArr;
          }
          var _iterator4 = _createForOfIteratorHelper(lArr), _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
              const item = _step4.value;
              const ind = sArr.indexOf(item);
              if (ind === -1) {
                result[result.length] = item;
              } else {
                sArr.splice(ind, 1);
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          return [...result, ...sArr];
        };
        cArr = except(oldLines, newLines);
        if (cArr.length > 0) {
          cArr = cArr.filter((c) => {
            c = c.trim();
            return c && !catRegExp.test(c);
          });
        }
        if (cArr.length === 0) {
          oldTxt = newTxt;
          return true;
        }
      };
      if (conf.wgAction === "submit" && conf.wgArticleId && eForm && eForm.wpSummary && document.querySelector("#wikiDiff")) {
        const sum = eForm.wpSummary;
        const sumA = eForm.wpAutoSummary;
        if (sum.value && sumA.value === HC.changeTag) {
          sumA.value = sumA.value.replace(HC.changeTag, "d41d8cd98f00b204e9800998ecf8427e");
          const $ct = $("<input>").attr({
            type: "hidden",
            name: "wpChangeTags"
          }).val(HC.changeTag);
          $(eForm).append($ct);
          oldTxt = eForm.wpTextbox1.value;
          const $body = $("body");
          $body.find("input[name=wpSave]").one("click", () => {
            if ($ct.val()) {
              sum.value = sum.value.replace(getMessage("messages-using") || getMessage("messages-prefix"), "");
            }
          });
          const removeChangeTag = () => {
            $(eForm.wpTextbox1).add(sum).one("input", () => {
              setTimeout(() => {
                if (isMinorChange()) {
                  removeChangeTag();
                } else {
                  $ct.val("");
                }
              }, 500);
            });
          };
          removeChangeTag();
        }
      }
    }
    HC.listSize = Number.parseInt(HC.listSize, 10);
    if (Number.isNaN(HC.listSize) || HC.listSize < 5) {
      HC.listSize = 5;
    }
    HC.listSize = Math.min(HC.listSize, 30);
    for (var _i6 = 0, _Object$entries = Object.entries(suggestionConfigs); _i6 < _Object$entries.length; _i6++) {
      const [key, suggestionConfig] = _Object$entries[_i6];
      try {
        if (key && getMessage("engine_names-".concat(key))) {
          suggestionConfig.name = getMessage("engine_names-".concat(key));
        }
      } catch {
        continue;
      }
    }
    is_rtl = hasClass(document.querySelector("body"), "rtl");
    if (!is_rtl) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        is_rtl = document.defaultView.getComputedStyle(document.querySelector("body"), null).getPropertyValue("direction");
      } else if ($("body")[0].currentStyle) {
        is_rtl = $("body")[0].currentStyle.direction;
      } else {
        is_rtl = $("body")[0].style.direction;
      }
      is_rtl = is_rtl === "rtl";
    }
  };
  const can_edit = () => {
    return document.querySelector("#ca-edit") !== null;
  };
  const closeForm = function() {
    for (var _i7 = 0, _editors6 = editors; _i7 < _editors6.length; _i7++) {
      const edit = _editors6[_i7];
      if (edit.state === OPEN) {
        edit.cancel();
      } else if (edit.state === CHANGE_PENDING) {
        edit.sanitizeInput();
        const value = edit.text.value.split("|");
        let key = null;
        if (value.length > 1) {
          [, key] = value;
        }
        const v = value[0].replace(/_/g, " ").trim();
        if (v.length === 0) {
          edit.cancel();
        } else {
          edit.currentCategory = v;
          edit.currentKey = key;
          edit.currentExists = this.inputExists;
          edit.close();
        }
      }
    }
  };
  const setup_upload = () => {
    onUpload = true;
    let ip = document.querySelector("#mw-htmlform-description") || document.querySelector("input[name=wpDestFile]");
    if (!ip) {
      ip = document.querySelector("input[name=wpDestFile]");
      while (ip && ip.nodeName.toLowerCase() !== "table") {
        ip = ip.parentNode;
      }
    }
    if (!ip) {
      return;
    }
    const reupload = document.querySelector("input[name=wpForReUpload]");
    const destFile = document.querySelector("input[name=wpDestFile]");
    if (reupload && !!reupload.value || destFile && (destFile.disabled || destFile.readOnly)) {
      return;
    }
    const labelCell = make("td");
    const lineCell = make("td");
    catLine = make("div");
    catLine.className = "catlinks";
    catLine.id = "catlinks";
    catLine.style.textAlign = is_rtl ? "right" : "left";
    catLine.style.margin = "0";
    catLine.style.border = "none";
    lineCell.append(catLine);
    const label = null;
    if (label) {
      labelCell.id = "hotcatLabelTranslated";
      labelCell.append(label);
    } else {
      labelCell.id = "hotcatLabel";
      labelCell.append(make(getMessage("categories"), true));
    }
    labelCell.className = "mw-label";
    labelCell.style.textAlign = "right";
    labelCell.style.verticalAlign = "middle";
    const form = document.querySelector("#upload") || document.querySelector("#mw-upload-form");
    if (form) {
      const newRow = ip.insertRow(-1);
      newRow.append(labelCell);
      newRow.append(lineCell);
      form.addEventListener("submit", (oldSubmit, ...args) => {
        return (() => {
          let do_submit = true;
          if (oldSubmit) {
            if (typeof oldSubmit === "string") {
              do_submit = window.eval(oldSubmit);
            } else if (oldSubmit instanceof Function) {
              do_submit = oldSubmit.apply(form, [oldSubmit, ...args]);
            }
          }
          if (!do_submit) {
            return false;
          }
          closeForm();
          const eb = document.querySelector("textarea[name=wpUploadDescription]") || document.querySelector("#wpDesc");
          let addedOne = false;
          for (var _i8 = 0, _editors7 = editors; _i8 < _editors7.length; _i8++) {
            const editor = _editors7[_i8];
            const t = editor.currentCategory;
            if (!t) {
              continue;
            }
            const key = editor.currentKey;
            const new_cat = "[[".concat(HC.category_canonical, ":").concat(t).concat(key ? "|".concat(key) : "", "]]");
            const nowikiRegex = new RegExp("<no".concat("wiki>", String.raw(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["(s|S)*?</no"], ["(\\s|\\S)*?</no"]))), "wiki", ">"), "g");
            const _cleanedText = eb.value.replace(/<!--(\s|\S)*?-->/g, "").replace(nowikiRegex);
            if (!find_category(_cleanedText, t, true)) {
              eb.value += "\n".concat(new_cat);
              addedOne = true;
            }
          }
          if (addedOne) {
            const regex = new RegExp("{{$".concat("subst:").concat("unc}}"), "g");
            eb.value = eb.value.replace(regex, "");
          }
          return true;
        })(form.onsubmit);
      });
    }
  };
  let cleanedText = null;
  const isOnPage = ({
    firstChild
  }) => {
    if (firstChild.nodeType !== Node.ELEMENT_NODE) {
      return null;
    }
    let catTitle = title(firstChild.getAttribute("href"));
    if (!catTitle) {
      return null;
    }
    catTitle = catTitle.slice(catTitle.indexOf(":") + 1).replace(/_/g, " ");
    if (HC.blacklist && HC.blacklist.test(catTitle)) {
      return null;
    }
    const result = {
      title: catTitle,
      match: ["", "", ""]
    };
    if (pageText === null) {
      return result;
    }
    if (cleanedText === null) {
      const nowikiRegex = new RegExp("<no".concat("wiki>", String.raw(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["(s|S)*?</no"], ["(\\s|\\S)*?</no"]))), "wiki", ">"), "g");
      cleanedText = pageText.replace(/<!--(\s|\S)*?-->/g, "").replace(nowikiRegex, "");
    }
    result.match = find_category(cleanedText, catTitle, true);
    return result;
  };
  let initialized = false;
  let setupTimeout = null;
  const findByClass = (scope, tag, className) => {
    const result = $(scope).find("".concat(tag, ".").concat(className));
    return result && result.length > 0 ? result[0] : null;
  };
  const setup = (additionalWork) => {
    if (initialized) {
      return;
    }
    initialized = true;
    if (setupTimeout) {
      window.clearTimeout(setupTimeout);
      setupTimeout = null;
    }
    catLine || (catLine = document.querySelector("#mw-normal-catlinks"));
    const hiddenCats = document.querySelector("#mw-hidden-catlinks");
    if (!catLine) {
      let footer = null;
      if (!hiddenCats) {
        footer = findByClass(document, "div", "printfooter");
        if (!footer) {
          return;
        }
      }
      catLine = make("div");
      catLine.id = "mw-normal-catlinks";
      catLine.style.textAlign = is_rtl ? "right" : "left";
      const label = make("a");
      label.href = conf.wgArticlePath.replace("$1", "Special:Categories");
      label.title = getMessage("categories");
      label.append(make(getMessage("categories"), true));
      catLine.append(label);
      catLine.append(make(":", true));
      let container = hiddenCats ? hiddenCats.parentNode : document.querySelector("#catlinks");
      if (!container) {
        container = make("div");
        container.id = "catlinks";
        footer.parentNode.insertBefore(container, footer.nextSibling);
      }
      container.className = "catlinks noprint";
      container.style.display = "";
      if (hiddenCats) {
        hiddenCats.before(catLine);
      } else {
        container.append(catLine);
      }
    }
    if (is_rtl) {
      catLine.dir = "rtl";
    }
    const createEditors = (line, is_hidden) => {
      let i;
      let cats = line.querySelectorAll("li");
      if (cats.length > 0) {
        newDOM = true;
        line = cats[0].parentNode;
      } else {
        cats = line.querySelectorAll("span");
      }
      const copyCats = Array.from({
        length: cats.length
      });
      for (i = 0; i < cats.length; i++) {
        copyCats[i] = cats[i];
      }
      for (i = 0; i < copyCats.length; i++) {
        const test = isOnPage(copyCats[i]);
        if (test !== null && test.match !== null && line) {
          new CategoryEditor(line, copyCats[i], test.title, test.match[2], is_hidden);
        }
      }
      return copyCats.length > 0 ? copyCats.at(-1) : null;
    };
    const lastSpan = createEditors(catLine, false);
    new CategoryEditor(newDOM ? catLine.querySelectorAll("ul")[0] : catLine, null, null, lastSpan !== null, false);
    if (!onUpload) {
      if (pageText !== null && hiddenCats) {
        if (is_rtl) {
          hiddenCats.dir = "rtl";
        }
        createEditors(hiddenCats, true);
      }
      const enableMulti = make("span");
      enableMulti.className = "noprint";
      if (is_rtl) {
        enableMulti.dir = "rtl";
      }
      catLine.insertBefore(enableMulti, catLine.firstChild.nextSibling);
      enableMulti.append(make(" ", true));
      multiSpan = make("span");
      enableMulti.append(multiSpan);
      multiSpan.innerHTML = "(<a>".concat(HC.addmulti, "</a>)");
      const [link] = multiSpan.querySelectorAll("a");
      link.addEventListener("click", (event) => {
        setMultiInput();
        checkMultiInput();
        return evtKill(event);
      });
      link.title = getMessage("multi_tooltip");
      link.style.cursor = "pointer";
    }
    cleanedText = null;
    if (additionalWork instanceof Function) {
      additionalWork();
    }
    mw.hook("hotcat.ready").fire();
    $("body").trigger("hotcatSetupCompleted");
  };
  const createCommitForm = () => {
    if (commitForm) {
      return;
    }
    const formContainer = make("div");
    formContainer.style.display = "none";
    document.querySelector("body").append(formContainer);
    formContainer.innerHTML = '<form id="hotcatCommitForm" method="post" enctype="multipart/form-data" action="'.concat(conf.wgScript, "?title=").concat(encodeURIComponent(conf.wgPageName), '&action=submit"><input type="hidden" name="wpTextbox1">', '<input type="hidden" name="model" value="'.concat(conf.wgPageContentModel, '">'), '<input type="hidden" name="format" value="text/x-wiki"><input type="hidden" name="wpSummary" value=""><input type="checkbox" name="wpMinoredit" value="1"><input type="checkbox" name="wpWatchthis" value="1"><input type="hidden" name="wpAutoSummary" value="d41d8cd98f00b204e9800998ecf8427e"><input type="hidden" name="wpEdittime"><input type="hidden" name="wpStarttime"><input type="hidden" name="wpDiff" value="wpDiff"><input type="hidden" name="oldid" value="0"><input type="submit" name="hcCommit" value="hcCommit"><input type="hidden" name="wpEditToken"><input type="hidden" name="wpUltimateParam" value="1"><input type="hidden" name="wpChangeTags"><input type="hidden" value="ℳ𝒲♥𝓊𝓃𝒾𝒸ℴ𝒹ℯ" name="wpUnicodeCheck"></form>');
    commitForm = document.querySelector("#hotcatCommitForm");
  };
  const getPage = () => {
    if (conf.wgArticleId) {
      const params = {
        action: "query",
        format: "json",
        formatversion: "2",
        rawcontinue: "",
        titles: conf.wgPageName,
        prop: ["info", "revisions"],
        rvprop: ["content", "timestamp", "ids"],
        rvlimit: "1",
        rvstartid: conf.wgCurRevisionId,
        rvslots: "main",
        meta: ["siteinfo"]
      };
      HC.start = (data) => {
        setPage(data);
        setup(createCommitForm);
      };
      api.get(params).then((data) => {
        HC.start(data);
      });
      setupTimeout = setTimeout(() => {
        setup(createCommitForm);
      }, 4e3);
    } else {
      if (conf.wgNamespaceNumber === 2) {
        return;
      }
      pageText = "";
      pageTime = null;
      setup(createCommitForm);
    }
  };
  const setState = (state) => {
    const cats = state.split("\n");
    if (cats.length === 0) {
      return null;
    }
    if (initialized && editors.length === 1 && editors[0].isAddCategory) {
      const newSpans = [];
      const before = editors.length === 1 ? editors[0].span : null;
      let i;
      for (i = 0; i < cats.length; i++) {
        if (cats[i].length === 0) {
          continue;
        }
        let cat = cats[i].split("|");
        const key = cat.length > 1 ? cat[1] : null;
        [cat] = cat;
        const link = make("a");
        link.href = wikiPagePath("".concat(HC.category_canonical, ":").concat(cat));
        link.append(make(cat, true));
        link.title = cat;
        const span = make("span");
        span.append(link);
        if (!i) {
          catLine.insertBefore(make(" ", true), before);
        }
        before.before(span);
        if (before && i + 1 < cats.length) {
          parent.insertBefore(make(" | ", true), before);
        }
        newSpans[newSpans.length] = {
          element: span,
          title: cat,
          key
        };
      }
      if (before) {
        before.parentNode.insertBefore(make(" | ", true), before);
      }
      for (i = 0; i < newSpans.length; i++) {
        new CategoryEditor(catLine, newSpans[i].element, newSpans[i].title, newSpans[i].key);
      }
    }
    return null;
  };
  const getState = () => {
    let result = null;
    for (var _i9 = 0, _editors8 = editors; _i9 < _editors8.length; _i9++) {
      const editor = _editors8[_i9];
      let text = editor.currentCategory;
      const key = editor.currentKey;
      if (text && text.length > 0) {
        if (key !== null) {
          text += "|".concat(key);
        }
        if (result === null) {
          result = text;
        } else {
          result += "\n".concat(text);
        }
      }
    }
    return result;
  };
  const really_run = () => {
    initialize();
    if (!HC.upload_disabled && conf.wgNamespaceNumber === -1 && conf.wgCanonicalSpecialPageName === "Upload" && conf.wgUserName) {
      setup_upload();
      setup(() => {
        if (window.UploadForm && UploadForm.previous_hotcat_state) {
          UploadForm.previous_hotcat_state = setState(UploadForm.previous_hotcat_state);
        }
      });
    } else {
      if (!conf.wgIsArticle || conf.wgAction !== "view" || param("diff") !== null || param("oldid") !== null || !can_edit() || HC.disable()) {
        return;
      }
      getPage();
    }
  };
  const run = () => {
    if (HC.started) {
      return;
    }
    HC.started = true;
    really_run();
  };
  window.hotcat_get_state = () => {
    return getState();
  };
  window.hotcat_set_state = (state) => {
    return setState(state);
  };
  window.hotcat_close_form = () => {
    closeForm();
  };
  HC.runWhenReady = (callback) => {
    mw.hook("hotcat.ready").add(callback);
  };
  if (conf.wgCanonicalSpecialPageName !== "Upload") {
    mw.hook("postEdit").add(() => {
      if (document.querySelector("#catlinks .hotcatlink")) {
        return;
      }
      catLine = null;
      editors = [];
      initialized = false;
      HC.started = false;
      run();
    });
  }
  $(run);
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0hvdENhdC9tb2R1bGVzL2NoZWNrLm1vZHVsZS5sZXNzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9hcGkudHMiLCAic3JjL0hvdENhdC9tb2R1bGVzL2NoZWNrLnRzIiwgInNyYy9Ib3RDYXQvSG90Q2F0LmpzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9nZXRNZXNzYWdlLnRzIiwgInNyYy9Ib3RDYXQvbW9kdWxlcy9tZXNzYWdlcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFwiZXNidWlsZC1jc3MtbW9kdWxlcy1wbHVnaW4tbnMtY3NzOnNyYy9Ib3RDYXQvbW9kdWxlcy9jaGVjay5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGNhdGNoZWNrSW5saW5lSWNvbiA9IFwiY2hlY2stbW9kdWxlX19jYXRjaGVja0lubGluZUljb25fbUo1TkRxXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJjYXRjaGVja0lubGluZUljb25cIjogY2F0Y2hlY2tJbmxpbmVJY29uXG59O1xuICAgICAgIiwgImltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG4vLyBJbml0aWFsaXplIE1lZGlhV2lraSBBUElcbmNvbnN0IG13QXBpOiAodXNlckFnZW50Pzogc3RyaW5nKSA9PiBtdy5BcGkgPSAodXNlckFnZW50KSA9PiB7XG5cdHJldHVybiBpbml0TXdBcGkodXNlckFnZW50KTtcbn07XG5cbmV4cG9ydCB7bXdBcGl9O1xuIiwgImltcG9ydCB7Y2F0Y2hlY2tJbmxpbmVJY29ufSBmcm9tICcuL2NoZWNrLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7bXdBcGl9IGZyb20gJy4vYXBpJztcblxuLyoqXG4gKiBDaGVja0NhdGVnb3JpZXMgSG90Q2F0IEV4dGVuc2lvbiDigJNcbiAqIHJlbW92ZXMgdGhlIHRlbXBsYXRlIHdoZW4gY2F0ZWdvcml6aW5nIChwcm9tcHRzIGJlZm9yZSkgd2l0aCBIb3RDYXQgYW5kXG4gKiBhZGRzIGEgbGluayBcIkNhdGVnb3JpZXMgYXJlIE9LXCIgdG8gdGhlIGNhdGVnb3J5LXNlY3Rpb25cbiAqXG4gKiBAcmV2IDIgKDIwMTQtMDMtMjApXG4gKiBAYXV0aG9yIFJpbGxrZSwgMjAxMlxuICovXG4oZnVuY3Rpb24gaG90Q2F0Q2hlY2soKSB7XG5cdGlmIChcblx0XHRtdy5jb25maWcuZ2V0KCd3Z05hbWVzcGFjZU51bWJlcicpICE9PSA2IHx8XG5cdFx0d2luZG93LkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCB8fFxuXHRcdCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tjYXRlZ29yaWVzJylcblx0KSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGNvbnN0IGFwaSA9IG13QXBpKCdob3RDYXRDaGVjay8yLjAnKTtcblx0Y29uc3QgY2hlY2tDYXRlZ29yaWVzUmVnRXhwID0gL3t7W0NjXWhlY2tbIF9dY2F0ZWdvcmllc1tee31dKn19L2c7XG5cdGNvbnN0IHNlbGZOYW1lID0gJyhbW01lZGlhV2lraTpHYWRnZXQtSG90Q2F0LWNoZWNrLmpzfFNjcmlwdF1dKTogJztcblx0Y29uc3Qgc3RvcmFnZUl0ZW1OYW1lID0gJ2NoZWNrQ2F0Jztcblx0Y29uc3Qgc3RvcmFnZUl0ZW0gPSBtdy5zdG9yYWdlLmdldChzdG9yYWdlSXRlbU5hbWUpO1xuXHQvKipcblx0ICogQSBmZXcgc3R5bGluZyBoZWxwZXIgZnVuY3Rpb25zXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpY29uQ2xhc3Ncblx0ICogQHJldHVybiB7SlF1ZXJ5fVxuXHQgKi9cblx0Y29uc3QgY3JlYXRlakljb24gPSAoaWNvbkNsYXNzOiBzdHJpbmcpOiBKUXVlcnkgPT4ge1xuXHRcdHJldHVybiAkKCc8c3Bhbj4nKS5hdHRyKCdjbGFzcycsIGB1aS1pY29uICR7aWNvbkNsYXNzfSAke2NhdGNoZWNrSW5saW5lSWNvbn1gKS50ZXh0KCcgJyk7XG5cdH07XG5cdGNvbnN0IGNyZWF0ZU5vdGlmeUFyZWEgPSAodGV4dE5vZGU6IEpRdWVyeTxKUXVlcnkuTm9kZT4sIGljb246IHN0cmluZywgc3RhdGU6IHN0cmluZyk6IEpRdWVyeTxIVE1MRWxlbWVudD4gPT4ge1xuXHRcdHJldHVybiAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ3VpLXdpZGdldCcpXG5cdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdFx0LmF0dHIoJ2NsYXNzJywgYCR7c3RhdGV9IHVpLWNvcm5lci1hbGxgKVxuXHRcdFx0XHRcdC5jc3Moe1xuXHRcdFx0XHRcdFx0J21hcmdpbi10b3AnOiAnMjBweCcsXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAnMC43ZW0nLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8cD4nKS5hcHBlbmQoY3JlYXRlakljb24oaWNvbikuY3NzKCdtYXJnaW5SaWdodCcsICcwLjNlbScpLCB0ZXh0Tm9kZSkpXG5cdFx0XHQpO1xuXHR9O1xuXHQvLyBSZW1vdmUgXCJjaGVjayBjYXRlZ29yaWVzXCIgd2hlbiB1c2luZyBIb3RDYXRcblx0Ly8gT25seSBleGVjdXRlZCBvbiBmaXJzdCBzdWJtaXRcblx0JCgnYm9keScpLm9uZSgnc3VibWl0LmNoZWNrQ2F0TGlzdGVuZXInLCAnI2hvdGNhdENvbW1pdEZvcm0nLCBmdW5jdGlvbiAoZSkge1xuXHRcdGlmIChzdG9yYWdlSXRlbSA9PT0gJ2Rpc2FibGVkJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFzc2lnbm1lbnRcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblxuXHRcdGNvbnN0IG5ld1ZhbCA9IChzZWxmLndwVGV4dGJveDEgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWU/LnJlcGxhY2UoY2hlY2tDYXRlZ29yaWVzUmVnRXhwLCAnJyk7XG5cdFx0Y29uc3QgZGxnQnV0dG9uczoge1xuXHRcdFx0J1llcywgUmVtb3ZlJz86ICgpID0+IHZvaWQ7XG5cdFx0XHQnTm8sIGtlZXAgaXQnPzogKCkgPT4gdm9pZDtcblx0XHR9ID0ge307XG5cdFx0bGV0ICRkaWFsb2dDaGVja1N0b3JhZ2U6IEpRdWVyeTxIVE1MRWxlbWVudD47XG5cdFx0bGV0ICRwZXJtYVNhdmVIaW50OiBKUXVlcnk8SFRNTEVsZW1lbnQ+O1xuXHRcdGxldCAkdGV4dEhpbnROb2RlO1xuXHRcdGxldCAkZGlhbG9nO1xuXHRcdGNvbnN0IGRvUmVtb3ZlID0gKCkgPT4ge1xuXHRcdFx0KHNlbGYud3BTdW1tYXJ5IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID1cblx0XHRcdFx0YFJlbW92aW5nIFtbVGVtcGxhdGU6Q2hlY2sgY2F0ZWdvcmllc3x7JHtge0NoZWNrIGNhdGVnb3JpZXN9fV1dICR7KHNlbGYud3BTdW1tYXJ5IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlfWB9YDtcblxuXHRcdFx0KHNlbGYud3BUZXh0Ym94MSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50KS52YWx1ZSA9IG5ld1ZhbDtcblx0XHR9O1xuXHRcdGNvbnN0IHdyaXRlU3RvcmFnZSA9ICh2YWw6IHN0cmluZykgPT4ge1xuXHRcdFx0bXcuc3RvcmFnZS5zZXQoc3RvcmFnZUl0ZW1OYW1lLCB2YWwsIDYwNDhlMik7IC8vIDcgZGF5c1xuXHRcdH07XG5cdFx0ZGxnQnV0dG9uc1snWWVzLCBSZW1vdmUnXSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGRvUmVtb3ZlKCk7XG5cdFx0XHRpZiAoKCRkaWFsb2dDaGVja1N0b3JhZ2VbMF0gYXMgSFRNTElucHV0RWxlbWVudCk/LmNoZWNrZWQpIHtcblx0XHRcdFx0d3JpdGVTdG9yYWdlKCdhdXRvJyk7XG5cdFx0XHR9XG5cdFx0XHQkKHRoaXMpLmRpYWxvZygnY2xvc2UnKTtcblx0XHR9O1xuXHRcdGRsZ0J1dHRvbnNbJ05vLCBrZWVwIGl0J10gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoKCRkaWFsb2dDaGVja1N0b3JhZ2VbMF0gYXMgSFRNTElucHV0RWxlbWVudCk/LmNoZWNrZWQpIHtcblx0XHRcdFx0d3JpdGVTdG9yYWdlKCdkaXNhYmxlZCcpO1xuXHRcdFx0fVxuXHRcdFx0JCh0aGlzKS5kaWFsb2coJ2Nsb3NlJyk7XG5cdFx0fTtcblx0XHRjb25zdCBfYWRkVG9KUyA9IGZ1bmN0aW9uICh0aGlzOiBIVE1MRWxlbWVudCwgX2U6IEpRdWVyeS5FdmVudCkge1xuXHRcdFx0X2UucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGlmICgkcGVybWFTYXZlSGludC5oYXNDbGFzcygndWktc3RhdGUtZGlzYWJsZWQnKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjb25zdCAkZWw6IEpRdWVyeTxIVE1MRWxlbWVudD4gPSAkKHRoaXMpO1xuXHRcdFx0JGVsLm9mZignY2xpY2snKS50ZXh0KCdQbGVhc2Ugd2FpdC4nKTtcblx0XHRcdCRwZXJtYVNhdmVIaW50LmFkZENsYXNzKCd1aS1zdGF0ZS1kaXNhYmxlZCcpO1xuXHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0dGl0bGU6IGBVc2VyOiR7bXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpfS9jb21tb24uanNgLFxuXHRcdFx0XHRzdW1tYXJ5OiBgJHtzZWxmTmFtZX1TYXZpbmcgSG90Q2F0IGNvbmZpZ3VyYXRpb24uYCxcblx0XHRcdFx0YXBwZW5kdGV4dDogJGVsLmRhdGEoJ2FkZFRleHQnKSBhcyBzdHJpbmcsXG5cdFx0XHR9IGFzIGNvbnN0O1xuXHRcdFx0Y29uc3QgZWRpdERvbmUgPSAoZWRpdFN0YXQ/OiB7ZXJyb3I/OiB7Y29kZT86IHN0cmluZzsgaW5mbz86IHN0cmluZ319KSA9PiB7XG5cdFx0XHRcdGlmICghZWRpdFN0YXQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGVkaXRTdGF0LmVycm9yKSB7XG5cdFx0XHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdFx0XHRgVW5hYmxlIHRvIHNhdmUgdG8geW91ciBjb21tb24uanMgdXNpbmcgdGhlIEFQSVxcbiR7ZWRpdFN0YXQuZXJyb3IuY29kZX1cXG4ke2VkaXRTdGF0LmVycm9yLmluZm99YCxcblx0XHRcdFx0XHRcdHt0YWc6ICdob3RDYXRDaGVjaycsIHR5cGU6ICdlcnJvcid9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdC1FcnJvciEnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWwudGV4dCgnRG9uZS4nKTtcblx0XHRcdFx0XHQkcGVybWFTYXZlSGludC5mYWRlT3V0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHR2b2lkIGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywgcGFyYW1zKS50aGVuKGVkaXREb25lKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIE9uIFdpa2ltZWRpYSBDb21tb25zIHRoZXJlIHdlcmUgcGVvcGxlIHdobyBzYWlkOlxuXHRcdCAqIFwiQ2F0ZWdvcml6aW5nIHdpdGggSG90Q2F0IGRvZXMgbGVnaXQgYXV0b21hdGVkIHJlbW92YWwgb2YgdGhlIGNoZWNrLWNhdC1tZXNzYWdlXCJcblx0XHQgKiBTbyB3ZSBpbnZlbnRlZCBhIGRpYWxvZyB0aGF0IHNob3VsZCBiZSByZWFkYWJsZSBieSB1c2VycyBldmVuIHdpdGggdmVyeSBmZXcgRW5nbGlzaCBza2lsbHMuXG5cdFx0ICovXG5cdFx0Y29uc3QgcHJvbXB0ID0gKCkgPT4ge1xuXHRcdFx0JGRpYWxvZ0NoZWNrU3RvcmFnZSA9ICQoJzxpbnB1dD4nKVxuXHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0dHlwZTogJ2NoZWNrYm94Jyxcblx0XHRcdFx0XHRpZDogJ2hvdENhdEF1dG9SZW1vdmVDaGVja0NhdFN0b3JhZ2UnLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRpZiAoKHRoaXMgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0JHBlcm1hU2F2ZUhpbnQuZmFkZUluKCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdCRwZXJtYVNhdmVIaW50LmZhZGVPdXQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0JHRleHRIaW50Tm9kZSA9ICQoJzx1bD4nKTtcblx0XHRcdCQoJzxsaT4nKVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICcjJylcblx0XHRcdFx0XHRcdC50ZXh0KCdEaXNhYmxlIHRoaXMgZmVhdHVyZS4nKVxuXHRcdFx0XHRcdFx0LmRhdGEoJ2FkZFRleHQnLCAnXFxud2luZG93LkhvdENhdEF1dG9SZW1vdmVDaGVja0NhdE9wdE91dCA9IHRydWU7Jylcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBfYWRkVG9KUylcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kVG8oJHRleHRIaW50Tm9kZSk7XG5cdFx0XHQkKCc8bGk+Jylcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnIycpXG5cdFx0XHRcdFx0XHQudGV4dCgnUmVtb3ZlIHt7Y2hlY2sgY2F0ZWdvcmllc319IHdoZW4gZWRpdGluZyB1c2luZyBIb3RDYXQgd2l0aG91dCBwcm9tcHRpbmcuJylcblx0XHRcdFx0XHRcdC5kYXRhKCdhZGRUZXh0JywgJ1xcbndpbmRvdy5Ib3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXQgPSB0cnVlOycpXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgX2FkZFRvSlMpXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZFRvKCR0ZXh0SGludE5vZGUpO1xuXHRcdFx0JHBlcm1hU2F2ZUhpbnQgPSBjcmVhdGVOb3RpZnlBcmVhKFxuXHRcdFx0XHQkKCc8c3Bhbj4nKS50ZXh0KCdTYXZlIHRoZXNlIHNldHRpbmcgaW4geW91ciBjb21tb24uanM6ICcpLmFwcGVuZCgkdGV4dEhpbnROb2RlKSxcblx0XHRcdFx0J3VpLWljb24taW5mbycsXG5cdFx0XHRcdCd1aS1zdGF0ZS1oaWdobGlnaHQnXG5cdFx0XHQpO1xuXHRcdFx0JGRpYWxvZyA9ICQoJzxkaXY+Jylcblx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHQkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0LmNzcyh7XG5cdFx0XHRcdFx0XHRcdCdmb250LXNpemUnOiAnMmVtJyxcblx0XHRcdFx0XHRcdFx0J2xpbmUtaGVpZ2h0JzogJzEuOGVtJyxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQkKCc8c3Bhbj4nKS50ZXh0KCcge3tjaGVjayBjYXRlZ29yaWVzfX0gJykuY3NzKHtcblx0XHRcdFx0XHRcdFx0XHQnYmFja2dyb3VuZC1jb2xvcic6ICcjRjhDQ0IwJyxcblx0XHRcdFx0XHRcdFx0XHQndGV4dC1kZWNvcmF0aW9uJzogJ2xpbmUtdGhyb3VnaCAhaW1wb3J0YW50Jyxcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpLnRleHQoJyA/Jylcblx0XHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdCc8YnI+Jyxcblx0XHRcdFx0XHQkZGlhbG9nQ2hlY2tTdG9yYWdlLFxuXHRcdFx0XHRcdCQoJzxsYWJlbD4nKS5hdHRyKCdmb3InLCAnaG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0U3RvcmFnZScpLnRleHQoXCJEb24ndCBhc2sgYWdhaW5cIiksXG5cdFx0XHRcdFx0Jzxicj4nXG5cdFx0XHRcdClcblx0XHRcdFx0LmFwcGVuZChtdy51c2VyLmlzQW5vbigpID8gJycgOiAkcGVybWFTYXZlSGludC5oaWRlKCkpO1xuXHRcdFx0JGRpYWxvZy5kaWFsb2coe1xuXHRcdFx0XHRtb2RhbDogdHJ1ZSxcblx0XHRcdFx0Y2xvc2VPbkVzY2FwZTogdHJ1ZSxcblx0XHRcdFx0dGl0bGU6ICd7e2NoZWNrIGNhdGVnb3JpZXN9fSAo4oiSKT8nLFxuXHRcdFx0XHR3aWR0aDogNDUwLFxuXHRcdFx0XHRidXR0b25zOiBkbGdCdXR0b25zLFxuXHRcdFx0XHRjbG9zZTogKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHRcdCRib2R5LmZpbmQoJyNob3RjYXRDb21taXRGb3JtJykudHJpZ2dlcignc3VibWl0Jyk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdG9wZW4oKSB7XG5cdFx0XHRcdFx0Y29uc3QgJGJ1dHRvbnMgPSAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy51aS1kaWFsb2ctYnV0dG9ucGFuZSBidXR0b24nKTtcblx0XHRcdFx0XHQkYnV0dG9ucy5lcSgwKS5idXR0b24oe1xuXHRcdFx0XHRcdFx0aWNvbnM6IHtcblx0XHRcdFx0XHRcdFx0cHJpbWFyeTogJ3VpLWljb24tY2lyY2xlLWNoZWNrJyxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JGJ1dHRvbnMuZXEoMSkuYnV0dG9uKHtcblx0XHRcdFx0XHRcdGljb25zOiB7XG5cdFx0XHRcdFx0XHRcdHByaW1hcnk6ICd1aS1pY29uLWNhbmNlbCcsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdGlmIChuZXdWYWwgIT09IChzZWxmLndwVGV4dGJveDEgYXMgSFRNTFRleHRBcmVhRWxlbWVudCkudmFsdWUpIHtcblx0XHRcdGlmICh3aW5kb3cuSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0IHx8IHN0b3JhZ2VJdGVtID09PSAnYXV0bycpIHtcblx0XHRcdFx0ZG9SZW1vdmUoKTtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRwcm9tcHQoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0pO1xuXHQvLyBBZGQgT0stTGluayB0byB0aGUgY2F0cyBwYW5lbFxuXHRjb25zdCAkb2tMaW5rID0gJCgnPGE+Jylcblx0XHQuYXR0cih7XG5cdFx0XHRocmVmOiAnIycsXG5cdFx0XHR0aXRsZTogJ0NhdGVnb3JpZXMgYXJlIE9LISBJbW1lZGlhdGVseSByZW1vdmUgdGhlIHRlbXBsYXRlLicsXG5cdFx0fSlcblx0XHQuYXBwZW5kKCc8cz4nKVxuXHRcdC50ZXh0KCd7e0NoZWNrIGNhdGVnb3JpZXN9fScpO1xuXHQkb2tMaW5rLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGNvbnN0ICRlbCA9ICQodGhpcyk7XG5cdFx0JGVsLm9mZignY2xpY2snKTtcblx0XHRjb25zdCBkb0VkaXQgPSAocmVzdWx0OiBzdHJpbmcpID0+IHtcblx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdCRlbC50ZXh0KCdEb2luZy4nKTtcblx0XHRcdGNvbnN0IHRleHQgPSByZXN1bHQucmVwbGFjZShjaGVja0NhdGVnb3JpZXNSZWdFeHAsICcnKTtcblx0XHRcdGlmICh0ZXh0ID09PSByZXN1bHQpIHtcblx0XHRcdFx0JGVsLnRleHQoJ1RlbXBsYXRlIG5vdCBmb3VuZCEnKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0dGl0bGU6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKSxcblx0XHRcdFx0c3VtbWFyeTogYCR7c2VsZk5hbWV9Q2F0ZWdvcmllcyBhcmUgY2hlY2tlZCBhbmQgT0suIFlvdSBjYW4gaGVscCBbW0NhdGVnb3J5Ok1lZGlhIG5lZWRpbmcgY2F0ZWdvcnkgcmV2aWV3fHJldmlld2luZ11dIWAsXG5cdFx0XHRcdG5vY3JlYXRlOiB0cnVlLFxuXHRcdFx0XHR0ZXh0LFxuXHRcdFx0fSBhcyBjb25zdDtcblx0XHRcdGNvbnN0IGVkaXREb25lID0gKGVkaXRTdGF0Pzoge2Vycm9yPzoge2NvZGU/OiBzdHJpbmc7IGluZm8/OiBzdHJpbmd9fSkgPT4ge1xuXHRcdFx0XHRpZiAoIWVkaXRTdGF0KSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlZGl0U3RhdC5lcnJvcikge1xuXHRcdFx0XHRcdHZvaWQgbXcubm90aWZ5KFxuXHRcdFx0XHRcdFx0YFVuYWJsZSB0byByZW1vdmUgXCJDaGVjayBjYXRlZ29yaWVzXCIgd2l0aCB0aGUgQVBJXFxuJHtlZGl0U3RhdC5lcnJvci5jb2RlfVxcbiR7ZWRpdFN0YXQuZXJyb3IuaW5mb31gLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0YWc6ICdob3RDYXRDaGVjaycsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdlcnJvcicsXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdC1FcnJvciEnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZWwudGV4dCgnRWRpdCBEb25lLicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHQkYm9keS5maW5kKCcuY2hlY2tjYXRlZ29yaWVzJykuZmFkZU91dCgpO1xuXHRcdFx0fTtcblx0XHRcdCRlbC50ZXh0KCdEb2luZy4uJyk7XG5cdFx0XHR2b2lkIGFwaS5wb3N0V2l0aFRva2VuKCdjc3JmJywgcGFyYW1zKS50aGVuKGVkaXREb25lKTtcblx0XHR9O1xuXHRcdCRlbC50ZXh0KCdEb2luZycpO1xuXHRcdHZvaWQgJC5hamF4KHtcblx0XHRcdHVybDogbXcuY29uZmlnLmdldCgnd2dTY3JpcHQnKSxcblx0XHRcdGRhdGE6IHtcblx0XHRcdFx0YWN0aW9uOiAncmF3Jyxcblx0XHRcdFx0dGl0bGU6IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC8gL2csICdfJyksXG5cdFx0XHR9LFxuXHRcdFx0ZGF0YVR5cGU6ICd0ZXh0Jyxcblx0XHRcdGVycm9yOiAoKSA9PiB7XG5cdFx0XHRcdCRlbC50ZXh0KCdFcnJvciEnKTtcblx0XHRcdH0sXG5cdFx0XHRzdWNjZXNzOiBkb0VkaXQsXG5cdFx0XHR0eXBlOiAnR0VUJyxcblx0XHRcdGNhY2hlOiBmYWxzZSxcblx0XHR9KTtcblx0fSk7XG5cdCQoZnVuY3Rpb24gbG9hZEhvdENhdENoZWNrKCkge1xuXHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdCRib2R5LmZpbmQoJyNjYXRsaW5rcycpLmZpbmQoJ3VsOmZpcnN0JykuYXBwZW5kKCQoJzxsaT4nKS5hcHBlbmQoJG9rTGluaykpO1xuXHR9KTtcbn0pKCk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCAnLi9tb2R1bGVzL2NoZWNrJztcbmltcG9ydCB7Z2VuZXJhdGVBcnJheX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9tb2R1bGVzL2dldE1lc3NhZ2UnO1xuaW1wb3J0IHtob3RDYXRNZXNzYWdlc30gZnJvbSAnLi9tb2R1bGVzL21lc3NhZ2VzJztcbmltcG9ydCB7bXdBcGl9IGZyb20gJy4vbW9kdWxlcy9hcGknO1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBamF4LWJhc2VkIHNpbXBsZSBDYXRlZ29yeSBtYW5hZ2VyLiBBbGxvd3MgYWRkaW5nL3JlbW92aW5nL2NoYW5naW5nIGNhdGVnb3JpZXMgb24gYSBwYWdlIHZpZXcuXG4gKiBTdXBwb3J0cyBtdWx0aXBsZSBjYXRlZ29yeSBjaGFuZ2VzLCBhcyB3ZWxsIGFzIHJlZGlyZWN0IGFuZCBkaXNhbWJpZ3VhdGlvbiByZXNvbHV0aW9uLiBBbHNvXG4gKiBwbHVncyBpbnRvIHRoZSB1cGxvYWQgZm9ybS4gU2VhcmNoIGVuZ2luZXMgdG8gdXNlIGZvciB0aGUgc3VnZ2VzdGlvbiBsaXN0IGFyZSBjb25maWd1cmFibGUsIGFuZFxuICogY2FuIGJlIHNlbGVjdGVkIGludGVyYWN0aXZlbHkuXG4gKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9IZWxwOkdhZGdldC1Ib3RDYXR9XG4gKiBAYXV0aG9yIGF1dGhvcnMgPGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvSGVscDpHYWRnZXQtSG90Q2F0L1ZlcnNpb25faGlzdG9yeT5cbiAqL1xuLy8gTG9hZCB0cmFuc2xhdGlvbnMgbG9jYWxseVxuaG90Q2F0TWVzc2FnZXMoKTtcblxuLy8gTWFpbiBib2R5XG4oZnVuY3Rpb24gaG90Q2F0KCkge1xuXHQvLyBEb24ndCB1c2UgbXcuY29uZmlnLmdldCgpIGFzIHRoYXQgdGFrZXMgYSBjb3B5IG9mIHRoZSBjb25maWcsIGFuZCBzbyBkb2Vzbid0XG5cdC8vIGFjY291bnQgZm9yIHZhbHVlcyBjaGFuZ2luZywgZS5nLiB3Z0N1clJldmlzaW9uSWQgYWZ0ZXIgYSBWRSBlZGl0XG5cdGNvbnN0IGNvbmYgPSBtdy5jb25maWcudmFsdWVzO1xuXHQvLyBHdWFyZCBhZ2FpbnN0IGRvdWJsZSBpbmNsdXNpb25zIChpbiBvbGQgSUUvT3BlcmEgZWxlbWVudCBpZHMgYmVjb21lIHdpbmRvdyBwcm9wZXJ0aWVzKVxuXHRpZiAoKHdpbmRvdy5Ib3RDYXQgJiYgIXdpbmRvdy5Ib3RDYXQubm9kZU5hbWUpIHx8IGNvbmYud2dBY3Rpb24gPT09ICdlZGl0Jykge1xuXHRcdHJldHVybjsgLy8gTm90IG9uIGVkaXQgbW9kZVxuXHR9XG5cdC8vIEluaXRpYWxpemUgTWVkaWFXaWtpIEFQSVxuXHRjb25zdCBhcGkgPSBtd0FwaSgnSG90Q2F0LzMuMCcpO1xuXHQvLyBDb25maWd1cmF0aW9uIHN0dWZmLlxuXHR3aW5kb3cuSG90Q2F0ID0ge1xuXHRcdC8vIFRoZSBsaXR0bGUgbW9kaWZpY2F0aW9uIGxpbmtzIGRpc3BsYXllZCBhZnRlciBjYXRlZ29yeSBuYW1lcy4gVSsyMjEyIGlzIGEgbWludXMgc2lnbjsgVSsyMTkzIGFuZCBVKzIxOTEgYXJlXG5cdFx0Ly8gZG93bndhcmQgYW5kIHVwd2FyZCBwb2ludGluZyBhcnJvd3MuIERvIG5vdCB1c2Ug4oaTIGFuZCDihpEgaW4gdGhlIGNvZGUhXG5cdFx0bGlua3M6IHtcblx0XHRcdGNoYW5nZTogJyjCsSknLFxuXHRcdFx0cmVtb3ZlOiAnKFxcdTIyMTIpJyxcblx0XHRcdGFkZDogJygrKScsXG5cdFx0XHRyZXN0b3JlOiAnKMOXKScsXG5cdFx0XHR1bmRvOiAnKMOXKScsXG5cdFx0XHRkb3duOiAnKFxcdTIxOTMpJyxcblx0XHRcdHVwOiAnKFxcdTIxOTEpJyxcblx0XHR9LFxuXHRcdGNoYW5nZVRhZzogJ0hvdENhdCcsXG5cdFx0Ly8gVGhlIEhUTUwgY29udGVudCBvZiB0aGUgXCJlbnRlciBtdWx0aS1tb2RlXCIgbGluayBhdCB0aGUgZnJvbnQuXG5cdFx0YWRkbXVsdGk6ICc8c3Bhbj4rPHN1cD4rPC9zdXA+PC9zcGFuPicsXG5cdFx0Ly8gUmV0dXJuIHRydWUgdG8gZGlzYWJsZSBIb3RDYXQuXG5cdFx0ZGlzYWJsZTogKCkgPT4ge1xuXHRcdFx0Y29uc3QgbnMgPSBjb25mLndnTmFtZXNwYWNlTnVtYmVyO1xuXHRcdFx0Y29uc3QgbnNJZHMgPSBjb25mLndnTmFtZXNwYWNlSWRzO1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0bnMgPCAwIHx8XG5cdFx0XHRcdC8vIFNwZWNpYWwgcGFnZXM7IFNwZWNpYWw6VXBsb2FkIGlzIGhhbmRsZWQgZGlmZmVyZW50bHlcblx0XHRcdFx0bnMgPT09IDEwIHx8XG5cdFx0XHRcdC8vIFRlbXBsYXRlc1xuXHRcdFx0XHRucyA9PT0gODI4IHx8XG5cdFx0XHRcdC8vIE1vZHVsZSAoTHVhKVxuXHRcdFx0XHRucyA9PT0gOCB8fFxuXHRcdFx0XHQvLyBNZWRpYVdpa2lcblx0XHRcdFx0KG5zID09PSA2ICYmICFjb25mLndnQXJ0aWNsZUlkKSB8fFxuXHRcdFx0XHQvLyBOb24tZXhpc3RpbmcgZmlsZSBwYWdlc1xuXHRcdFx0XHQobnMgPT09IDIgJiYgL1xcLihqc3xjc3MpJC8udGVzdChjb25mLndnVGl0bGUpKSB8fFxuXHRcdFx0XHQvLyBVc2VyIHNjcmlwdHNcblx0XHRcdFx0KG5zSWRzICYmIChucyA9PT0gbnNJZHMuY3JlYXRvciB8fCBucyA9PT0gbnNJZHMudGltZWR0ZXh0IHx8IG5zID09PSBuc0lkcy5pbnN0aXR1dGlvbikpXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0Ly8gQSByZWdleHAgbWF0Y2hpbmcgYSB0ZW1wbGF0ZXMgdXNlZCB0byBtYXJrIHVuY2F0ZWdvcml6ZWQgcGFnZXMsIGlmIHlvdXIgd2lraSBkb2VzIGhhdmUgdGhhdC5cblx0XHQvLyBJZiBub3QsIHNldCBpdCB0byBudWxsLlxuXHRcdHVuY2F0X3JlZ2V4cDogL3t7XFxzKltVdV1uY2F0ZWdvcml6ZWRcXHMqW159XSp9fVxccyooPCEtLS4qPy0tPlxccyopPy9nLFxuXHRcdC8vIFRoZSBpbWFnZXMgdXNlZCBmb3IgdGhlIGxpdHRsZSBpbmRpY2F0aW9uIGljb24uIFNob3VsZCBub3QgbmVlZCBjaGFuZ2luZy5cblx0XHRleGlzdHNZZXM6ICdodHRwczovL3lvdXNob3Uud2lraS9pbWFnZXMvdGh1bWIvYi9iZS9QX3llcy5zdmcvMjRweC1QX3llcy5zdmcucG5nJyxcblx0XHRleGlzdHNObzogJ2h0dHBzOi8veW91c2hvdS53aWtpL2ltYWdlcy90aHVtYi80LzQyL1Bfbm8uc3ZnLzI0cHgtUF9uby5zdmcucG5nJyxcblx0XHQvLyBhIGxpc3Qgb2YgY2F0ZWdvcmllcyB3aGljaCBjYW4gYmUgcmVtb3ZlZCBieSByZW1vdmluZyBhIHRlbXBsYXRlXG5cdFx0Ly8ga2V5OiB0aGUgY2F0ZWdvcnkgd2l0aG91dCBuYW1lc3BhY2Vcblx0XHQvLyB2YWx1ZTogQSByZWdleHAgbWF0Y2hpbmcgdGhlIHRlbXBsYXRlIG5hbWUsIGFnYWluIHdpdGhvdXQgbmFtZXNwYWNlXG5cdFx0Ly8gSWYgeW91IGRvbid0IGhhdmUgdGhpcyBhdCB5b3VyIHdpa2ksIG9yIGRvbid0IHdhbnQgdGhpcywgc2V0IGl0IHRvIGFuIGVtcHR5IG9iamVjdCB7fS5cblx0XHR0ZW1wbGF0ZV9jYXRlZ29yaWVzOiB7fSxcblx0XHQvLyBPdmVycmlkZSB0aGUgZGVjaXNpb24gb2Ygd2hldGhlciBIb3RDYXQgc2hvdWxkIGhlbHAgdXNlcnMgYnkgYXV0b21hdGljYWxseVxuXHRcdC8vIGNhcGl0YWxpc2luZyB0aGUgdGl0bGUgaW4gdGhlIHVzZXIgaW5wdXQgdGV4dCBpZiB0aGUgd2lraSBoYXMgY2FzZS1zZW5zaXRpdmUgcGFnZSBuYW1lcy5cblx0XHQvLyBCYXNpY2FsbHksIHRoaXMgd2lsbCBtYWtlIGFuIEFQSSBxdWVyeSB0byBjaGVjayB0aGUgTWVkaWFXaWtpIGNvbmZpZ3VyYXRpb24gYW5kIEhvdENhdCB0aGVuIHNldHNcblx0XHQvLyB0aGlzIHRvIHRydWUgZm9yIG1vc3Qgd2lraXMsIGFuZCB0byBmYWxzZSBvbiBXaWt0aW9uYXJ5LlxuXHRcdC8vXG5cdFx0Ly8gWW91IGNhbiBzZXQgdGhpcyBkaXJlY3RseSBpZiB0aGVyZSBpcyBhIHByb2JsZW0gd2l0aCBpdC4gRm9yIGV4YW1wbGUsIEdlb3JnaWFuIFdpa2lwZWRpYSAoa2F3aWtpKSxcblx0XHQvLyBpcyBrbm93biB0byBoYXZlIGRpZmZlcmVudCBjYXBpdGFsaXNhdGlvbiBsb2dpYyBiZXR3ZWVuIE1lZGlhV2lraSBQSFAgYW5kIEphdmFTY3JpcHQuIEFzIHN1Y2gsIGF1dG9tYXRpY1xuXHRcdC8vIGNhc2UgY2hhbmdlcyBpbiBKYXZhU2NyaXB0IGJ5IEhvdENhdCB3b3VsZCBiZSB3cm9uZy5cblx0XHRjYXBpdGFsaXplUGFnZU5hbWVzOiBudWxsLFxuXHRcdC8vIElmIHVwbG9hZF9kaXNhYmxlZCBpcyB0cnVlLCBIb3RDYXQgd2lsbCBub3QgYmUgdXNlZCBvbiB0aGUgVXBsb2FkIGZvcm0uXG5cdFx0dXBsb2FkX2Rpc2FibGVkOiBmYWxzZSxcblx0XHQvLyBTaW5nbGUgcmVndWxhciBleHByZXNzaW9uIG1hdGNoaW5nIGJsYWNrbGlzdGVkIGNhdGVnb3JpZXMgdGhhdCBjYW5ub3QgYmUgY2hhbmdlZCBvclxuXHRcdC8vIGFkZGVkIHVzaW5nIEhvdENhdC4gRm9yIGluc3RhbmNlIC9cXGJzdHVicz8kLyAoYW55IGNhdGVnb3J5IGVuZGluZyB3aXRoIHRoZSB3b3JkIFwic3R1YlwiXG5cdFx0Ly8gb3IgXCJzdHVic1wiKSwgb3IgLyhcXGJzdHVicz8kKXxcXGJtYWludGVuYW5jZVxcYi8gKHN0dWIgY2F0ZWdvcmllcyBhbmQgYW55IGNhdGVnb3J5IHdpdGggdGhlXG5cdFx0Ly8gd29yZCBcIm1haW50ZW5hbmNlXCIgaW4gaXRzIHRpdGxlLlxuXHRcdGJsYWNrbGlzdDogbnVsbCxcblx0XHQvLyBTdHVmZiBjaGFuZ2VhYmxlIGJ5IHVzZXJzOlxuXHRcdC8vIEJhY2tncm91bmQgZm9yIGNoYW5nZWQgY2F0ZWdvcmllcyBpbiBtdWx0aS1lZGl0IG1vZGUuIERlZmF1bHQgaXMgYSB2ZXJ5IGxpZ2h0IHNhbG1vbiBwaW5rLlxuXHRcdGJnX2NoYW5nZWQ6ICcjRkNBJyxcblx0XHQvLyBJZiB0cnVlLCBIb3RDYXQgd2lsbCBuZXZlciBhdXRvbWF0aWNhbGx5IHN1Ym1pdCBjaGFuZ2VzLiBIb3RDYXQgd2lsbCBvbmx5IG9wZW4gYW4gZWRpdCBwYWdlIHdpdGhcblx0XHQvLyB0aGUgY2hhbmdlczsgdXNlcnMgbXVzdCBhbHdheXMgc2F2ZSBleHBsaWNpdGx5LlxuXHRcdG5vX2F1dG9jb21taXQ6IGZhbHNlLFxuXHRcdC8vIElmIHRydWUsIHRoZSBcImNhdGVnb3J5IGRlbGV0aW9uXCIgbGluayBcIigtKVwiIHdpbGwgbmV2ZXIgc2F2ZSBhdXRvbWF0aWNhbGx5IGJ1dCBhbHdheXMgc2hvdyBhblxuXHRcdC8vIGVkaXQgcGFnZSB3aGVyZSB0aGUgdXNlciBoYXMgdG8gc2F2ZSB0aGUgZWRpdCBtYW51YWxseS4gSXMgZmFsc2UgYnkgZGVmYXVsdCBiZWNhdXNlIHRoYXQncyB0aGVcblx0XHQvLyB0cmFkaXRpb25hbCBiZWhhdmlvci4gVGhpcyBzZXR0aW5nIG92ZXJyaWRlcyBub19hdXRvY29tbWl0IGZvciBcIigtKVwiIGxpbmtzLlxuXHRcdGRlbF9uZWVkc19kaWZmOiBmYWxzZSxcblx0XHQvLyBUaW1lLCBpbiBtaWxsaXNlY29uZHMsIHRoYXQgSG90Q2F0IHdhaXRzIGFmdGVyIGEga2V5c3Ryb2tlIGJlZm9yZSBtYWtpbmcgYSByZXF1ZXN0IHRvIHRoZVxuXHRcdC8vIHNlcnZlciB0byBnZXQgc3VnZ2VzdGlvbnMuXG5cdFx0c3VnZ2VzdF9kZWxheTogMTAwMCxcblx0XHQvLyBEZWZhdWx0IHdpZHRoLCBpbiBjaGFyYWN0ZXJzLCBvZiB0aGUgdGV4dCBpbnB1dCBmaWVsZC5cblx0XHRlZGl0Ym94X3dpZHRoOiA0MCxcblx0XHQvLyBPbmUgb2YgdGhlIGVuZ2luZV9uYW1lcyBhYm92ZSwgdG8gYmUgdXNlZCBhcyB0aGUgZGVmYXVsdCBzdWdnZXN0aW9uIGVuZ2luZS5cblx0XHRzdWdnZXN0aW9uczogJ2NvbWJpbmVkJyxcblx0XHQvLyBJZiB0cnVlLCBhbHdheXMgdXNlIHRoZSBkZWZhdWx0IGVuZ2luZSwgYW5kIG5ldmVyIGRpc3BsYXkgYSBzZWxlY3Rvci5cblx0XHRmaXhlZF9zZWFyY2g6IGZhbHNlLFxuXHRcdC8vIElmIGZhbHNlLCBkbyBub3QgZGlzcGxheSB0aGUgXCJ1cFwiIGFuZCBcImRvd25cIiBsaW5rc1xuXHRcdHVzZV91cF9kb3duOiB0cnVlLFxuXHRcdC8vIERlZmF1bHQgbGlzdCBzaXplXG5cdFx0bGlzdFNpemU6IDEwLFxuXHRcdC8vIElmIHRydWUsIHNpbmdsZSBjYXRlZ29yeSBjaGFuZ2VzIGFyZSBtYXJrZWQgYXMgbWlub3IgZWRpdHMuIElmIGZhbHNlLCB0aGV5J3JlIG5vdC5cblx0XHRzaW5nbGVfbWlub3I6IHRydWUsXG5cdFx0Ly8gSWYgdHJ1ZSwgbmV2ZXIgYWRkIGEgcGFnZSB0byB0aGUgdXNlcidzIHdhdGNobGlzdC4gSWYgZmFsc2UsIHBhZ2VzIGdldCBhZGRlZCB0byB0aGUgd2F0Y2hsaXN0IGlmXG5cdFx0Ly8gdGhlIHVzZXIgaGFzIHRoZSBcIkFkZCBwYWdlcyBJIGVkaXQgdG8gbXkgd2F0Y2hsaXN0XCIgb3IgdGhlIFwiQWRkIHBhZ2VzIEkgY3JlYXRlIHRvIG15IHdhdGNobGlzdFwiXG5cdFx0Ly8gb3B0aW9ucyBpbiBoaXMgb3IgaGVyIHByZWZlcmVuY2VzIHNldC5cblx0XHRkb250X2FkZF90b193YXRjaGxpc3Q6IGZhbHNlLFxuXHRcdHNob3J0Y3V0czogbnVsbCxcblx0XHRhZGRTaG9ydGN1dHM6IChtYXApID0+IHtcblx0XHRcdGxldCBfYTtcblx0XHRcdGlmICghbWFwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdChfYSA9IHdpbmRvdy5Ib3RDYXQpLnNob3J0Y3V0cyB8fCAoX2Euc2hvcnRjdXRzID0ge30pO1xuXHRcdFx0Zm9yIChsZXQgayBpbiBtYXApIHtcblx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKG1hcCwgaykgfHwgdHlwZW9mIGsgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHYgPSBtYXBba107XG5cdFx0XHRcdGlmICh0eXBlb2YgdiAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRrID0gay50cmltKCk7XG5cdFx0XHRcdHYgPSB2LnRyaW0oKTtcblx0XHRcdFx0aWYgKGsubGVuZ3RoID09PSAwIHx8IHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0d2luZG93LkhvdENhdC5zaG9ydGN1dHNba10gPSB2O1xuXHRcdFx0fVxuXHRcdH0sXG5cdH07XG5cdGNvbnN0IEhDID0gd2luZG93LkhvdENhdDtcblx0Ly8gTW9yZSBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gV2UgaGF2ZSBhIGZldyBwbGFjZXMgd2hlcmUgd2UgdGVzdCBmb3IgdGhlIGJyb3dzZXI6IG9uY2UgZm9yXG5cdC8vIFNhZmFyaSA8IDMuMCwgYW5kIHR3aWNlIGZvciBXZWJLaXQgKENocm9tZSBvciBTYWZhcmksIGFueSB2ZXJzaW9ucylcblx0Y29uc3QgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG5cdGNvbnN0IGlzX3dlYmtpdCA9IC9hcHBsZXdlYmtpdFxcL1xcZCsvLnRlc3QodWEpICYmICF1YS5pbmNsdWRlcygnc3Bvb2ZlcicpO1xuXHRsZXQgY2F0X3ByZWZpeCA9IG51bGw7XG5cdGxldCBub1N1Z2dlc3Rpb25zID0gZmFsc2U7XG5cdC8vIE5vIGZ1cnRoZXIgY2hhbmdlcyBzaG91bGQgYmUgbmVjZXNzYXJ5IGhlcmUuXG5cdC8vIFRoZSBmb2xsb3dpbmcgcmVndWxhciBleHByZXNzaW9uIHN0cmluZ3MgYXJlIHVzZWQgd2hlbiBzZWFyY2hpbmcgZm9yIGNhdGVnb3JpZXMgaW4gd2lraXRleHQuXG5cdGNvbnN0IHdpa2lUZXh0QmxhbmsgPSBTdHJpbmcucmF3YFtcXHQgX1xceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwLVxcdTIwMEFcXHUyMDI4XFx1MjAyOVxcdTIwMkZcXHUyMDVGXFx1MzAwMF0rYDtcblx0Y29uc3Qgd2lraVRleHRCbGFua1JFID0gbmV3IFJlZ0V4cCh3aWtpVGV4dEJsYW5rLCAnZycpO1xuXHQvLyBSZWdleHAgZm9yIGhhbmRsaW5nIGJsYW5rcyBpbnNpZGUgYSBjYXRlZ29yeSB0aXRsZSBvciBuYW1lc3BhY2UgbmFtZS5cblx0Ly8gU2VlIHtAbGluayBodHRwOi8vc3ZuLndpa2ltZWRpYS5vcmcvdmlld3ZjL21lZGlhd2lraS90cnVuay9waGFzZTMvaW5jbHVkZXMvVGl0bGUucGhwP3JldmlzaW9uPTEwNDA1MSZ2aWV3PW1hcmt1cCNsMjcyMn1cblx0Ly8gU2VlIGFsc28ge0BsaW5rIGh0dHA6Ly93d3cuZmlsZWZvcm1hdC5pbmZvL2luZm8vdW5pY29kZS9jYXRlZ29yeS9acy9saXN0Lmh0bX1cblx0Ly8gICBNZWRpYVdpa2kgY29sbGFwc2VzIHNldmVyYWwgY29udGlndW91cyBibGFua3MgaW5zaWRlIGEgcGFnZSB0aXRsZSB0byBvbmUgc2luZ2xlIGJsYW5rLiBJdCBhbHNvIHJlcGxhY2UgYVxuXHQvLyBudW1iZXIgb2Ygc3BlY2lhbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgYnkgc2ltcGxlIGJsYW5rcy4gQW5kIGZpbmFsbHksIGJsYW5rcyBhcmUgdHJlYXRlZCBhcyB1bmRlcnNjb3Jlcy5cblx0Ly8gVGhlcmVmb3JlLCB3aGVuIGxvb2tpbmcgZm9yIHBhZ2UgdGl0bGVzIGluIHdpa2l0ZXh0LCB3ZSBtdXN0IGhhbmRsZSBhbGwgdGhlc2UgY2FzZXMuXG5cdC8vICAgTm90ZTogd2UgX2RvXyBpbmNsdWRlIHRoZSBob3Jpem9udGFsIHRhYiBpbiB0aGUgYWJvdmUgbGlzdCwgZXZlbiB0aG91Z2ggdGhlIE1lZGlhV2lraSBzb2Z0d2FyZSBmb3Igc29tZSByZWFzb25cblx0Ly8gYXBwZWFycyB0byBub3QgaGFuZGxlIGl0LiBUaGUgemVyby13aWR0aCBzcGFjZSBcXHUyMDBCIGlzIF9ub3RfIGhhbmRsZWQgYXMgYSBzcGFjZSBpbnNpZGUgdGl0bGVzIGJ5IE1XLlxuXHRjb25zdCB3aWtpVGV4dEJsYW5rT3JCaWRpID0gU3RyaW5nLnJhd2BbXFx0IF9cXHhBMFxcdTE2ODBcXHUxODBFXFx1MjAwMC1cXHUyMDBCXFx1MjAwRVxcdTIwMEZcXHUyMDI4LVxcdTIwMkZcXHUyMDVGXFx1MzAwMF0qYDtcblx0Ly8gV2hpdGVzcGFjZSByZWdleHAgZm9yIGhhbmRsaW5nIHdoaXRlc3BhY2UgYmV0d2VlbiBsaW5rIGNvbXBvbmVudHMuIEluY2x1ZGluZyB0aGUgaG9yaXpvbnRhbCB0YWIsIGJ1dCBub3QgXFxuXFxyXFxmXFx2OlxuXHQvLyBhIGxpbmsgbXVzdCBiZSBvbiBvbmUgc2luZ2xlIGxpbmUuXG5cdC8vICAgTWVkaWFXaWtpIGFsc28gcmVtb3ZlcyBVbmljb2RlIGJpZGkgb3ZlcnJpZGUgY2hhcmFjdGVycyBpbiBwYWdlIHRpdGxlcyAoYW5kIG5hbWVzcGFjZSBuYW1lcykgY29tcGxldGVseS5cblx0Ly8gVGhpcyBpcyAqbm90KiBoYW5kbGVkLCBhcyBpdCB3b3VsZCByZXF1aXJlIHVzIHRvIGFsbG93IGFueSBvZiBbXFx1MjAwRVxcdTIwMEZcXHUyMDJBLVxcdTIwMkVdIGJldHdlZW4gYW55IHR3b1xuXHQvLyBjaGFyYWN0ZXJzIGluc2lkZSBhIGNhdGVnb3J5IGxpbmsuIEl0IF9jb3VsZF8gYmUgZG9uZSB0aG91Z2guLi4gV2UgX2RvXyBoYW5kbGUgc3RyYW5nZSBzcGFjZXMsIGluY2x1ZGluZyB0aGVcblx0Ly8gemVyby13aWR0aCBzcGFjZSBcXHUyMDBCLCBhbmQgYmlkaSBvdmVycmlkZXMgYmV0d2VlbiB0aGUgY29tcG9uZW50cyBvZiBhIGNhdGVnb3J5IGxpbmsgKGFkamFjZW50IHRvIHRoZSBjb2xvbixcblx0Ly8gb3IgYWRqYWNlbnQgdG8gYW5kIGluc2lkZSBvZiBcIltbXCIgYW5kIFwiXV1cIikuXG5cdC8vIEZpcnN0IGF1dG8tbG9jYWxpemUgdGhlIHJlZ2V4cHMgZm9yIHRoZSBjYXRlZ29yeSBhbmQgdGhlIHRlbXBsYXRlIG5hbWVzcGFjZXMuXG5cdGNvbnN0IGZvcm1hdHRlZE5hbWVzcGFjZXMgPSBjb25mLndnRm9ybWF0dGVkTmFtZXNwYWNlcztcblx0Y29uc3QgbmFtZXNwYWNlSWRzID0gY29uZi53Z05hbWVzcGFjZUlkcztcblx0Y29uc3QgYXV0b0xvY2FsaXplID0gKG5hbWVzcGFjZU51bWJlciwgZmFsbGJhY2spID0+IHtcblx0XHRjb25zdCBjcmVhdGVSZWdleHBTdHIgPSAobmFtZSkgPT4ge1xuXHRcdFx0aWYgKCFuYW1lIHx8IG5hbWUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGxldCByZWdleF9uYW1lID0gJyc7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgaW5pdGlhbCA9IG5hbWUuY2hhckF0KGkpO1xuXHRcdFx0XHRjb25zdCBsbCA9IGluaXRpYWwudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0Y29uc3QgdWwgPSBpbml0aWFsLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHRcdHJlZ2V4X25hbWUgKz0gbGwgPT09IHVsID8gaW5pdGlhbCA6IGBbJHtsbH0ke3VsfV1gO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlZ2V4X25hbWUucmVwbGFjZSgvKFskKCkqKy4/XFxcXF5dKS9nLCBTdHJpbmcucmF3YFxcJDFgKS5yZXBsYWNlKHdpa2lUZXh0QmxhbmtSRSwgd2lraVRleHRCbGFuayk7XG5cdFx0fTtcblx0XHRmYWxsYmFjayA9IGZhbGxiYWNrLnRvTG93ZXJDYXNlKCk7XG5cdFx0Y29uc3QgY2Fub25pY2FsID0gZm9ybWF0dGVkTmFtZXNwYWNlc1tTdHJpbmcobmFtZXNwYWNlTnVtYmVyKV0udG9Mb3dlckNhc2UoKTtcblx0XHRsZXQgcmVnZXhwID0gY3JlYXRlUmVnZXhwU3RyKGNhbm9uaWNhbCk7XG5cdFx0aWYgKGZhbGxiYWNrICYmIGNhbm9uaWNhbCAhPT0gZmFsbGJhY2spIHtcblx0XHRcdHJlZ2V4cCArPSBgfCR7Y3JlYXRlUmVnZXhwU3RyKGZhbGxiYWNrKX1gO1xuXHRcdH1cblx0XHRpZiAobmFtZXNwYWNlSWRzKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGNhdF9uYW1lIGluIG5hbWVzcGFjZUlkcykge1xuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0dHlwZW9mIGNhdF9uYW1lID09PSAnc3RyaW5nJyAmJlxuXHRcdFx0XHRcdGNhdF9uYW1lLnRvTG93ZXJDYXNlKCkgIT09IGNhbm9uaWNhbCAmJlxuXHRcdFx0XHRcdGNhdF9uYW1lLnRvTG93ZXJDYXNlKCkgIT09IGZhbGxiYWNrICYmXG5cdFx0XHRcdFx0bmFtZXNwYWNlSWRzW2NhdF9uYW1lXSA9PT0gbmFtZXNwYWNlTnVtYmVyXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJlZ2V4cCArPSBgfCR7Y3JlYXRlUmVnZXhwU3RyKGNhdF9uYW1lKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZWdleHA7XG5cdH07XG5cdEhDLmNhdGVnb3J5X2Nhbm9uaWNhbCA9IGZvcm1hdHRlZE5hbWVzcGFjZXNbJzE0J107XG5cdEhDLmNhdGVnb3J5X3JlZ2V4cCA9IGF1dG9Mb2NhbGl6ZSgxNCwgJ2NhdGVnb3J5Jyk7XG5cdGlmIChmb3JtYXR0ZWROYW1lc3BhY2VzWycxMCddKSB7XG5cdFx0SEMudGVtcGxhdGVfcmVnZXhwID0gYXV0b0xvY2FsaXplKDEwLCAndGVtcGxhdGUnKTtcblx0fVxuXHQvLyBVdGlsaXR5IGZ1bmN0aW9ucy4gWWVzLCB0aGlzIGR1cGxpY2F0ZXMgc29tZSBmdW5jdGlvbmFsaXR5IHRoYXQgYWxzbyBleGlzdHMgaW4gb3RoZXIgcGxhY2VzLCBidXRcblx0Ly8gdG8ga2VlcCB0aGlzIHdob2xlIHN0dWZmIGluIGEgc2luZ2xlIGZpbGUgbm90IGRlcGVuZGluZyBvbiBhbnkgb3RoZXIgb24td2lraSBKYXZhU2NyaXB0cywgd2UgcmUtZG9cblx0Ly8gdGhlc2UgZmV3IG9wZXJhdGlvbnMgaGVyZS5cblx0Y29uc3QgbWFrZSA9IChhcmcsIGxpdGVyYWwpID0+IHtcblx0XHRpZiAoIWFyZykge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiBsaXRlcmFsID8gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYXJnKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYXJnKTtcblx0fTtcblx0Y29uc3QgcGFyYW0gPSAobmFtZSwgdXJpKSA9PiB7XG5cdFx0dXJpIHx8PSBkb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuXHRcdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChgWyY/XSR7bmFtZX09KFteJiNdKilgKTtcblx0XHRjb25zdCBtID0gcmUuZXhlYyh1cmkpO1xuXHRcdGlmIChtICYmIG0ubGVuZ3RoID4gMSkge1xuXHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChtWzFdKTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdGNvbnN0IHRpdGxlID0gKGhyZWYpID0+IHtcblx0XHRpZiAoIWhyZWYpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCBzY3JpcHQgPSBgJHtjb25mLndnU2NyaXB0fT9gO1xuXHRcdGlmIChcblx0XHRcdGhyZWYuaW5kZXhPZihzY3JpcHQpID09PSAwIHx8XG5cdFx0XHRocmVmLmluZGV4T2YoY29uZi53Z1NlcnZlciArIHNjcmlwdCkgPT09IDAgfHxcblx0XHRcdChjb25mLndnU2VydmVyLnNsaWNlKDAsIDIpID09PSAnLy8nICYmXG5cdFx0XHRcdGhyZWYuaW5kZXhPZihkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCArIGNvbmYud2dTZXJ2ZXIgKyBzY3JpcHQpID09PSAwKVxuXHRcdCkge1xuXHRcdFx0Ly8gaHJlZj1cIi9pbmRleC5waHA/dGl0bGU9Li4uXCJcblx0XHRcdHJldHVybiBwYXJhbSgndGl0bGUnLCBocmVmKTtcblx0XHR9XG5cdFx0Ly8gaHJlZj1cIi93aWtpLy4uLlwiXG5cdFx0bGV0IHByZWZpeCA9IGNvbmYud2dBcnRpY2xlUGF0aC5yZXBsYWNlKCckMScsICcnKTtcblx0XHRpZiAoaHJlZi5pbmRleE9mKHByZWZpeCkpIHtcblx0XHRcdHByZWZpeCA9IGNvbmYud2dTZXJ2ZXIgKyBwcmVmaXg7XG5cdFx0fSAvLyBGdWxseSBleHBhbmRlZCBVUkw/XG5cdFx0aWYgKGhyZWYuaW5kZXhPZihwcmVmaXgpICYmIHByZWZpeC5zbGljZSgwLCAyKSA9PT0gJy8vJykge1xuXHRcdFx0cHJlZml4ID0gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgKyBwcmVmaXg7XG5cdFx0fSAvLyBQcm90b2NvbC1yZWxhdGl2ZSB3Z1NlcnZlcj9cblx0XHRpZiAoaHJlZi5pbmRleE9mKHByZWZpeCkgPT09IDApIHtcblx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoaHJlZi5zbGljZShwcmVmaXgubGVuZ3RoKSk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9O1xuXHRjb25zdCBoYXNDbGFzcyA9ICh7Y2xhc3NOYW1lfSwgbmFtZSkgPT4ge1xuXHRcdHJldHVybiBgICR7Y2xhc3NOYW1lfSBgLmluY2x1ZGVzKGAgJHtuYW1lfSBgKTtcblx0fTtcblx0Y29uc3QgY2FwaXRhbGl6ZSA9IChzdHIpID0+IHtcblx0XHRpZiAoIXN0ciB8fCBzdHIubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gc3RyO1xuXHRcdH1cblx0XHRyZXR1cm4gc3RyLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG5cdH07XG5cdGNvbnN0IHdpa2lQYWdlUGF0aCA9IChwYWdlTmFtZSkgPT4ge1xuXHRcdHJldHVybiBjb25mLndnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCBlbmNvZGVVUklDb21wb25lbnQocGFnZU5hbWUpLnJlcGxhY2UoLyUzQS9nLCAnOicpLnJlcGxhY2UoLyUyRi9nLCAnLycpKTtcblx0fTtcblx0Y29uc3QgZXNjYXBlUkUgPSAoc3RyKSA9PiB7XG5cdFx0cmV0dXJuIHN0ci5yZXBsYWNlKC8oWyQoKSorLj9bXFxcXFxcXV5dKS9nLCBTdHJpbmcucmF3YFxcJDFgKTtcblx0fTtcblx0Y29uc3Qgc3Vic3RpdHV0ZUZhY3RvcnkgPSAob3B0aW9ucykgPT4ge1xuXHRcdG9wdGlvbnMgfHw9IHt9O1xuXHRcdGNvbnN0IGxlYWQgPSBvcHRpb25zLmluZGljYXRvciB8fCAnJCc7XG5cdFx0Y29uc3QgaW5kaWNhdG9yID0gZXNjYXBlUkUobGVhZCk7XG5cdFx0Y29uc3QgbGJyYWNlID0gZXNjYXBlUkUob3B0aW9ucy5sYnJhY2UgfHwgJ3snKTtcblx0XHRjb25zdCByYnJhY2UgPSBlc2NhcGVSRShvcHRpb25zLnJicmFjZSB8fCAnfScpO1xuXHRcdGNvbnN0IHJlID0gbmV3IFJlZ0V4cChcblx0XHRcdC8vICQkXG5cdFx0XHRgKD86JHtpbmRpY2F0b3J9KCR7aW5kaWNhdG9yfSkpfGAgK1xuXHRcdFx0XHQvLyAkMCwgJDFcblx0XHRcdFx0YCg/OiR7aW5kaWNhdG9yfShcXFxcZCspKXxgICtcblx0XHRcdFx0Ly8gJHtrZXl9XG5cdFx0XHRcdGAoPzoke2luZGljYXRvcn0oPzoke2xicmFjZX0oW14ke2xicmFjZX0ke3JicmFjZX1dKykke3JicmFjZX0pKXxgICtcblx0XHRcdFx0Ly8gJGtleSAob25seSBpZiBmaXJzdCBjaGFyIGFmdGVyICQgaXMgbm90ICQsIGRpZ2l0LCBvciB7IClcblx0XHRcdFx0YCg/OiR7aW5kaWNhdG9yfSg/ISg/Olske2luZGljYXRvcn0ke2xicmFjZX1dfFxcXFxkKSkoXFxcXFMrPylcXFxcYilgLFxuXHRcdFx0J2cnXG5cdFx0KTtcblx0XHQvLyBSZXBsYWNlICQxLCAkMiwgb3IgJHtrZXkxfSwgJHtrZXkyfSwgb3IgJGtleTEsICRrZXkyIGJ5IHZhbHVlcyBmcm9tIG1hcC4gJCQgaXMgcmVwbGFjZWQgYnkgYSBzaW5nbGUgJC5cblx0XHRyZXR1cm4gKHN0ciwgbWFwKSA9PiB7XG5cdFx0XHRpZiAoIW1hcCkge1xuXHRcdFx0XHRyZXR1cm4gc3RyO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0ci5yZXBsYWNlKHJlLCAobWF0Y2gsIHByZWZpeCwgaWR4LCBrZXksIGFscGhhKSA9PiB7XG5cdFx0XHRcdGlmIChwcmVmaXggPT09IGxlYWQpIHtcblx0XHRcdFx0XHRyZXR1cm4gbGVhZDtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBrID0gYWxwaGEgfHwga2V5IHx8IGlkeDtcblx0XHRcdFx0Y29uc3QgcmVwbGFjZW1lbnQgPSB0eXBlb2YgbWFwW2tdID09PSAnZnVuY3Rpb24nID8gbWFwW2tdKG1hdGNoLCBrKSA6IG1hcFtrXTtcblx0XHRcdFx0cmV0dXJuIHR5cGVvZiByZXBsYWNlbWVudCA9PT0gJ3N0cmluZycgPyByZXBsYWNlbWVudCA6IHJlcGxhY2VtZW50IHx8IG1hdGNoO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0fTtcblx0Y29uc3QgcmVwbGFjZVNob3J0Y3V0cyA9ICgoKSA9PiB7XG5cdFx0Y29uc3QgcmVwbGFjZUhhc2ggPSBzdWJzdGl0dXRlRmFjdG9yeSh7XG5cdFx0XHRpbmRpY2F0b3I6ICcjJyxcblx0XHRcdGxicmFjZTogJ1snLFxuXHRcdFx0cmJyYWNlOiAnXScsXG5cdFx0fSk7XG5cdFx0cmV0dXJuIChzdHIsIG1hcCkgPT4ge1xuXHRcdFx0Y29uc3QgcyA9IHJlcGxhY2VIYXNoKHN0ciwgbWFwKTtcblx0XHRcdHJldHVybiBIQy5jYXBpdGFsaXplUGFnZU5hbWVzID8gY2FwaXRhbGl6ZShzKSA6IHM7XG5cdFx0fTtcblx0fSkoKTtcblx0Ly8gVGV4dCBtb2RpZmljYXRpb25cblx0Y29uc3QgZmluZENhdHNSRSA9IG5ldyBSZWdFeHAoXG5cdFx0YFxcXFxbXFxcXFske3dpa2lUZXh0QmxhbmtPckJpZGl9KD86JHtIQy5jYXRlZ29yeV9yZWdleHB9KSR7d2lraVRleHRCbGFua09yQmlkaX06W15cXFxcXV0rXFxcXF1cXFxcXWAsXG5cdFx0J2cnXG5cdCk7XG5cdGNvbnN0IHJlcGxhY2VCeUJsYW5rcyA9IChtYXRjaCkgPT4ge1xuXHRcdHJldHVybiBtYXRjaC5yZXBsYWNlKC8oXFxzfFxcUykvZywgJyAnKTtcblx0fTsgLy8gLy4vIGRvZXNuJ3QgbWF0Y2ggbGluZWJyZWFrcy4gLyhcXHN8XFxTKS8gZG9lcy5cblx0Y29uc3QgZmluZF9jYXRlZ29yeSA9ICh3aWtpdGV4dCwgY2F0ZWdvcnksIG9uY2UpID0+IHtcblx0XHRsZXQgY2F0X3JlZ2V4ID0gbnVsbDtcblx0XHRpZiAoSEMudGVtcGxhdGVfY2F0ZWdvcmllc1tjYXRlZ29yeV0pIHtcblx0XHRcdGNhdF9yZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxce1xcXFx7JHt3aWtpVGV4dEJsYW5rT3JCaWRpfSgke0hDLnRlbXBsYXRlX3JlZ2V4cH0oPz0ke3dpa2lUZXh0QmxhbmtPckJpZGl9OikpPyR7d2lraVRleHRCbGFua09yQmlkaX0oPzoke0hDLnRlbXBsYXRlX2NhdGVnb3JpZXNbY2F0ZWdvcnldfSkke3dpa2lUZXh0QmxhbmtPckJpZGl9KFxcXFx8Lio/KT9cXFxcfVxcXFx9YCxcblx0XHRcdFx0J2cnXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBjYXRfbmFtZSA9IGVzY2FwZVJFKGNhdGVnb3J5KTtcblx0XHRcdGNvbnN0IGluaXRpYWwgPSBjYXRfbmFtZS5zbGljZSgwLCAxKTtcblx0XHRcdGNhdF9yZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxcW1xcXFxbJHt3aWtpVGV4dEJsYW5rT3JCaWRpfSgke0hDLmNhdGVnb3J5X3JlZ2V4cH0pJHt3aWtpVGV4dEJsYW5rT3JCaWRpfToke3dpa2lUZXh0QmxhbmtPckJpZGl9JHtcblx0XHRcdFx0XHRpbml0aWFsID09PSAnXFxcXCcgfHwgIUhDLmNhcGl0YWxpemVQYWdlTmFtZXNcblx0XHRcdFx0XHRcdD8gaW5pdGlhbFxuXHRcdFx0XHRcdFx0OiBgWyR7aW5pdGlhbC50b1VwcGVyQ2FzZSgpfSR7aW5pdGlhbC50b0xvd2VyQ2FzZSgpfV1gXG5cdFx0XHRcdH0ke2NhdF9uYW1lLnNsaWNlKDEpLnJlcGxhY2Uod2lraVRleHRCbGFua1JFLCB3aWtpVGV4dEJsYW5rKX0ke3dpa2lUZXh0QmxhbmtPckJpZGl9KFxcXFx8Lio/KT9cXFxcXVxcXFxdYCxcblx0XHRcdFx0J2cnXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRpZiAob25jZSkge1xuXHRcdFx0cmV0dXJuIGNhdF9yZWdleC5leGVjKHdpa2l0ZXh0KTtcblx0XHR9XG5cdFx0Y29uc3Qgbm93aWtpUmVnZXggPSBuZXcgUmVnRXhwKCc8bm8nLmNvbmNhdCgnd2lraT4nLCBTdHJpbmcucmF3YChcXHN8XFxTKSo/PC9ub2AsICd3aWtpJywgJz4nKSwgJ2cnKTtcblx0XHRjb25zdCBjb3BpZWR0ZXh0ID0gd2lraXRleHQucmVwbGFjZSgvPCEtLShcXHN8XFxTKSo/LS0+L2csIHJlcGxhY2VCeUJsYW5rcykucmVwbGFjZShub3dpa2lSZWdleCwgcmVwbGFjZUJ5QmxhbmtzKTtcblx0XHRjb25zdCByZXN1bHQgPSBbXTtcblx0XHRsZXQgY3Vycl9tYXRjaCA9IG51bGw7XG5cdFx0d2hpbGUgKChjdXJyX21hdGNoID0gY2F0X3JlZ2V4LmV4ZWMoY29waWVkdGV4dCkpICE9PSBudWxsKSB7XG5cdFx0XHRyZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB7XG5cdFx0XHRcdG1hdGNoOiBjdXJyX21hdGNoLFxuXHRcdFx0fTtcblx0XHR9XG5cdFx0cmVzdWx0LnJlID0gY2F0X3JlZ2V4O1xuXHRcdHJldHVybiByZXN1bHQ7IC8vIEFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG1hdGNoZXMsIHdpdGggcG9zaXRpb25zLCBpbiByZXN1bHRbIGkgXS5tYXRjaFxuXHR9O1xuXHRsZXQgaW50ZXJsYW5ndWFnZVJFID0gbnVsbDtcblx0Y29uc3QgY2hhbmdlX2NhdGVnb3J5ID0gKHdpa2l0ZXh0LCB0b1JlbW92ZSwgdG9BZGQsIGtleSwgaXNfaGlkZGVuKSA9PiB7XG5cdFx0Y29uc3QgZmluZF9pbnNlcnRpb25wb2ludCA9IChfd2lraXRleHQpID0+IHtcblx0XHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgU3RyaW5nLnJhd2AoXFxzfFxcUykqPzwvbm9gLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0XHRjb25zdCBjb3BpZWR0ZXh0ID0gX3dpa2l0ZXh0XG5cdFx0XHRcdC5yZXBsYWNlKC88IS0tKFxcc3xcXFMpKj8tLT4vZywgcmVwbGFjZUJ5QmxhbmtzKVxuXHRcdFx0XHQucmVwbGFjZShub3dpa2lSZWdleCwgcmVwbGFjZUJ5QmxhbmtzKTtcblx0XHRcdC8vIFNlYXJjaCBpbiBjb3BpZWR0ZXh0IHRvIGF2b2lkIHRoYXQgd2UgaW5zZXJ0IGluc2lkZSBhbiBIVE1MIGNvbW1lbnQgb3IgYSBub3dpa2kgXCJlbGVtZW50XCIuXG5cdFx0XHRsZXQgaW5kZXggPSAtMTtcblx0XHRcdGZpbmRDYXRzUkUubGFzdEluZGV4ID0gMDtcblx0XHRcdHdoaWxlIChmaW5kQ2F0c1JFLmV4ZWMoY29waWVkdGV4dCkgIT09IG51bGwpIHtcblx0XHRcdFx0aW5kZXggPSBmaW5kQ2F0c1JFLmxhc3RJbmRleDtcblx0XHRcdH1cblx0XHRcdGlmIChpbmRleCA8IDApIHtcblx0XHRcdFx0Ly8gRmluZCB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGludGVybGFuZ3VhZ2UgbGluay4uLlxuXHRcdFx0XHRsZXQgbWF0Y2ggPSBudWxsO1xuXHRcdFx0XHRpbnRlcmxhbmd1YWdlUkVcblx0XHRcdFx0XHQ/IChtYXRjaCA9IGludGVybGFuZ3VhZ2VSRS5leGVjKGNvcGllZHRleHQpKVxuXHRcdFx0XHRcdDogLy8gQXBwcm94aW1hdGlvbiB3aXRob3V0IEFQSTogaW50ZXJsYW5ndWFnZSBsaW5rcyBzdGFydCB3aXRoIDIgdG8gMyBsb3dlciBjYXNlIGxldHRlcnMsIG9wdGlvbmFsbHkgZm9sbG93ZWQgYnlcblx0XHRcdFx0XHRcdC8vIGEgc2VxdWVuY2Ugb2YgZ3JvdXBzIGNvbnNpc3Rpbmcgb2YgYSBkYXNoIGZvbGxvd2VkIGJ5IG9uZSBvciBtb3JlIGxvd2VyIGNhc2UgbGV0dGVycy4gRXhjZXB0aW9ucyBhcmUgXCJzaW1wbGVcIlxuXHRcdFx0XHRcdFx0Ly8gYW5kIFwidG9raXBvbmFcIi5cblx0XHRcdFx0XHRcdChtYXRjaCA9IC8oKF58XFxuXFxyPykoXFxbXFxbXFxzKigoW2Etel17MiwzfSgtW2Etel0rKSopfHNpbXBsZXx0b2tpcG9uYSlcXHMqOlteXFxdXStdXVxccyopKSskLy5leGVjKFxuXHRcdFx0XHRcdFx0XHRjb3BpZWR0ZXh0XG5cdFx0XHRcdFx0XHQpKTtcblx0XHRcdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRcdFx0KHtpbmRleH0gPSBtYXRjaCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRpZHg6IGluZGV4LFxuXHRcdFx0XHRcdG9uQ2F0OiBmYWxzZSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGlkeDogaW5kZXgsXG5cdFx0XHRcdG9uQ2F0OiBpbmRleCA+PSAwLFxuXHRcdFx0fTtcblx0XHR9O1xuXHRcdGNvbnN0IHN1bW1hcnkgPSBbXTtcblx0XHRjb25zdCBuYW1lU3BhY2UgPSBIQy5jYXRlZ29yeV9jYW5vbmljYWw7XG5cdFx0Y29uc3QgLy8gUG9zaXRpb24gb2YgcmVtb3ZlZCBjYXRlZ29yeTtcblx0XHRcdGtleUNoYW5nZSA9IHRvUmVtb3ZlICYmIHRvQWRkICYmIHRvUmVtb3ZlID09PSB0b0FkZCAmJiB0b0FkZC5sZW5ndGggPiAwO1xuXHRcdGxldCBtYXRjaGVzO1xuXHRcdGxldCBjYXRfcG9pbnQgPSAtMTtcblx0XHRrZXkgJiY9IGB8JHtrZXl9YDtcblx0XHQvLyBSZW1vdmVcblx0XHRpZiAodG9SZW1vdmUgJiYgdG9SZW1vdmUubGVuZ3RoID4gMCkge1xuXHRcdFx0bWF0Y2hlcyA9IGZpbmRfY2F0ZWdvcnkod2lraXRleHQsIHRvUmVtb3ZlKTtcblx0XHRcdGlmICghbWF0Y2hlcyB8fCBtYXRjaGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0ZXJyb3I6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9ub3RGb3VuZCcsIHRvUmVtb3ZlKSxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGxldCBiZWZvcmUgPSB3aWtpdGV4dC5zbGljZSgwLCBNYXRoLm1heCgwLCBtYXRjaGVzWzBdLm1hdGNoLmluZGV4KSk7XG5cdFx0XHRsZXQgYWZ0ZXIgPSB3aWtpdGV4dC5zbGljZShNYXRoLm1heCgwLCBtYXRjaGVzWzBdLm1hdGNoLmluZGV4ICsgbWF0Y2hlc1swXS5tYXRjaFswXS5sZW5ndGgpKTtcblx0XHRcdGlmIChtYXRjaGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0Ly8gUmVtb3ZlIGFsbCBvY2N1cnJlbmNlcyBpbiBhZnRlclxuXHRcdFx0XHRtYXRjaGVzLnJlLmxhc3RJbmRleCA9IDA7XG5cdFx0XHRcdGFmdGVyID0gYWZ0ZXIucmVwbGFjZShtYXRjaGVzLnJlLCAnJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRvQWRkICYmIC8vIG5hbWVTcGFjZSA9IG1hdGNoZXNbIDAgXS5tYXRjaFsgMSBdIHx8IG5hbWVTcGFjZTsgQ2Fub25pY2FsIG5hbWVzcGFjZSBzaG91bGQgYmUgYWx3YXlzIHByZWZlcnJlZFxuXHRcdFx0XHRrZXkgPT09IG51bGxcblx0XHRcdCkge1xuXHRcdFx0XHRbLCAsIGtleV0gPSBtYXRjaGVzWzBdLm1hdGNoO1xuXHRcdFx0fVxuXHRcdFx0Ly8gUmVtZW1iZXIgdGhlIGNhdGVnb3J5IGtleSwgaWYgYW55LlxuXHRcdFx0Ly8gUmVtb3ZlIHdoaXRlc3BhY2UgKHByb3Blcmx5KTogc3RyaXAgd2hpdGVzcGFjZSwgYnV0IG9ubHkgdXAgdG8gdGhlIG5leHQgbGluZSBmZWVkLlxuXHRcdFx0Ly8gSWYgd2UgdGhlbiBoYXZlIHR3byBsaW5lZmVlZHMgaW4gYSByb3csIHJlbW92ZSBvbmUuIE90aGVyd2lzZSwgaWYgd2UgaGF2ZSB0d28gbm9uLVxuXHRcdFx0Ly8gd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLCBpbnNlcnQgYSBibGFuay5cblx0XHRcdGxldCBpID0gYmVmb3JlLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+PSAwICYmIGJlZm9yZS5jaGFyQXQoaSkgIT09ICdcXG4nICYmIGJlZm9yZS5zbGljZShpLCBpICsgMSkuc2VhcmNoKC9cXHMvKSA+PSAwKSB7XG5cdFx0XHRcdGktLTtcblx0XHRcdH1cblx0XHRcdGxldCBqID0gMDtcblx0XHRcdHdoaWxlIChqIDwgYWZ0ZXIubGVuZ3RoICYmIGFmdGVyLmNoYXJBdChqKSAhPT0gJ1xcbicgJiYgYWZ0ZXIuc2xpY2UoaiwgaiArIDEpLnNlYXJjaCgvXFxzLykgPj0gMCkge1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGkgPj0gMCAmJlxuXHRcdFx0XHRiZWZvcmUuY2hhckF0KGkpID09PSAnXFxuJyAmJlxuXHRcdFx0XHQoYWZ0ZXIubGVuZ3RoID09PSAwIHx8IChqIDwgYWZ0ZXIubGVuZ3RoICYmIGFmdGVyLmNoYXJBdChqKSA9PT0gJ1xcbicpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGktLTtcblx0XHRcdH1cblx0XHRcdGJlZm9yZSA9IGkgPj0gMCA/IGJlZm9yZS5zbGljZSgwLCBNYXRoLm1heCgwLCBpICsgMSkpIDogJyc7XG5cdFx0XHRhZnRlciA9IGogPCBhZnRlci5sZW5ndGggPyBhZnRlci5zbGljZShNYXRoLm1heCgwLCBqKSkgOiAnJztcblx0XHRcdGlmIChcblx0XHRcdFx0YmVmb3JlLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0YmVmb3JlLnNsaWNlKE1hdGgubWF4KDAsIGJlZm9yZS5sZW5ndGggLSAxKSkuc2VhcmNoKC9cXFMvKSA+PSAwICYmXG5cdFx0XHRcdGFmdGVyLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0YWZ0ZXIuc2xpY2UoMCwgMSkuc2VhcmNoKC9cXFMvKSA+PSAwXG5cdFx0XHQpIHtcblx0XHRcdFx0YmVmb3JlICs9ICcgJztcblx0XHRcdH1cblx0XHRcdGNhdF9wb2ludCA9IGJlZm9yZS5sZW5ndGg7XG5cdFx0XHRpZiAoY2F0X3BvaW50ID09PSAwICYmIGFmdGVyLmxlbmd0aCA+IDAgJiYgYWZ0ZXIuc2xpY2UoMCwgMSkgPT09ICdcXG4nKSB7XG5cdFx0XHRcdGFmdGVyID0gYWZ0ZXIuc2xpY2UoMSk7XG5cdFx0XHR9XG5cdFx0XHR3aWtpdGV4dCA9IGJlZm9yZSArIGFmdGVyO1xuXHRcdFx0aWYgKCFrZXlDaGFuZ2UpIHtcblx0XHRcdFx0aWYgKEhDLnRlbXBsYXRlX2NhdGVnb3JpZXNbdG9SZW1vdmVdKSB7XG5cdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy10ZW1wbGF0ZV9yZW1vdmVkJywgdG9SZW1vdmUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gZ2V0TWVzc2FnZSgnbWVzc2FnZXMtY2F0X3JlbW92ZWQnLCB0b1JlbW92ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gQWRkXG5cdFx0aWYgKHRvQWRkICYmIHRvQWRkLmxlbmd0aCA+IDApIHtcblx0XHRcdG1hdGNoZXMgPSBmaW5kX2NhdGVnb3J5KHdpa2l0ZXh0LCB0b0FkZCk7XG5cdFx0XHRpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0Ly8gQWxyZWFkeSBleGlzdHNcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdGVycm9yOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYXRfZXhpc3RzJywgdG9BZGQpLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0bGV0IG9uQ2F0ID0gZmFsc2U7XG5cdFx0XHRpZiAoY2F0X3BvaW50IDwgMCkge1xuXHRcdFx0XHRjb25zdCBwb2ludCA9IGZpbmRfaW5zZXJ0aW9ucG9pbnQod2lraXRleHQpO1xuXHRcdFx0XHRjYXRfcG9pbnQgPSBwb2ludC5pZHg7XG5cdFx0XHRcdCh7b25DYXR9ID0gcG9pbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b25DYXQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbmV3Y2F0c3RyaW5nID0gYFtbJHtuYW1lU3BhY2V9OiR7dG9BZGR9JHtrZXkgfHwgJyd9XV1gO1xuXHRcdFx0aWYgKGNhdF9wb2ludCA+PSAwKSB7XG5cdFx0XHRcdGNvbnN0IHN1ZmZpeCA9IHdpa2l0ZXh0LnNsaWNlKE1hdGgubWF4KDAsIGNhdF9wb2ludCkpO1xuXHRcdFx0XHR3aWtpdGV4dCA9XG5cdFx0XHRcdFx0d2lraXRleHQuc2xpY2UoMCwgTWF0aC5tYXgoMCwgY2F0X3BvaW50KSkgK1xuXHRcdFx0XHRcdChjYXRfcG9pbnQgPiAwID8gJ1xcbicgOiAnJykgK1xuXHRcdFx0XHRcdG5ld2NhdHN0cmluZyArXG5cdFx0XHRcdFx0KG9uQ2F0ID8gJycgOiAnXFxuJyk7XG5cdFx0XHRcdHdpa2l0ZXh0ICs9IHN1ZmZpeC5sZW5ndGggPiAwICYmIHN1ZmZpeC5zbGljZSgwLCAxKSAhPT0gJ1xcbicgPyBgXFxuJHtzdWZmaXh9YCA6IHN1ZmZpeDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICh3aWtpdGV4dC5sZW5ndGggPiAwICYmIHdpa2l0ZXh0LnNsaWNlKC0xLCB3aWtpdGV4dC5sZW5ndGggLSAxICsgMSkgIT09ICdcXG4nKSB7XG5cdFx0XHRcdFx0d2lraXRleHQgKz0gJ1xcbic7XG5cdFx0XHRcdH1cblx0XHRcdFx0d2lraXRleHQgKz0gKHdpa2l0ZXh0Lmxlbmd0aCA+IDAgPyAnXFxuJyA6ICcnKSArIG5ld2NhdHN0cmluZztcblx0XHRcdH1cblx0XHRcdGlmIChrZXlDaGFuZ2UpIHtcblx0XHRcdFx0bGV0IGsgPSBrZXkgfHwgJyc7XG5cdFx0XHRcdGlmIChrLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRrID0gay5zbGljZSgxKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9rZXljaGFuZ2UnLCB0b0FkZCwgayk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9hZGRlZCcsIHRvQWRkKTtcblx0XHRcdH1cblx0XHRcdGlmIChIQy51bmNhdF9yZWdleHAgJiYgIWlzX2hpZGRlbikge1xuXHRcdFx0XHRjb25zdCB0eHQgPSB3aWtpdGV4dC5yZXBsYWNlKEhDLnVuY2F0X3JlZ2V4cCwgJycpOyAvLyBSZW1vdmUgXCJ1bmNhdFwiIHRlbXBsYXRlc1xuXHRcdFx0XHRpZiAodHh0Lmxlbmd0aCAhPT0gd2lraXRleHQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0d2lraXRleHQgPSB0eHQ7XG5cdFx0XHRcdFx0c3VtbWFyeVtzdW1tYXJ5Lmxlbmd0aF0gPSBnZXRNZXNzYWdlKCdtZXNzYWdlcy11bmNhdF9yZW1vdmVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0c3VtbWFyeSxcblx0XHRcdGVycm9yOiBudWxsLFxuXHRcdH07XG5cdH07XG5cdC8vIFRoZSByZWFsIEhvdENhdCBVSVxuXHRjb25zdCBldnRLZXlzID0gKHtjdHJsS2V5LCBtZXRhS2V5LCBzaGlmdEtleX0pID0+IHtcblx0XHRsZXQgY29kZSA9IDA7XG5cdFx0aWYgKGN0cmxLZXkpIHtcblx0XHRcdC8vIEFsbCBtb2Rlcm4gYnJvd3NlcnNcblx0XHRcdC8vIEN0cmwtY2xpY2sgc2VlbXMgdG8gYmUgb3ZlcmxvYWRlZCBpbiBGRi9NYWMgKGl0IG9wZW5zIGEgcG9wLXVwIG1lbnUpLCBzbyB0cmVhdCBjbWQtY2xpY2tcblx0XHRcdC8vIGFzIGEgY3RybC1jbGljaywgdG9vLlxuXHRcdFx0aWYgKGN0cmxLZXkgfHwgbWV0YUtleSkge1xuXHRcdFx0XHRjb2RlIHx8PSAxO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNoaWZ0S2V5KSB7XG5cdFx0XHRcdGNvZGUgfHw9IDI7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjb2RlO1xuXHR9O1xuXHRjb25zdCBldnRLaWxsID0gKGUpID0+IHtcblx0XHRpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cdGxldCBjYXRMaW5lID0gbnVsbDsgLy8gdHJ1ZSBpZiBNZWRpYVdpa2kgc2VydmVzIHRoZSBuZXcgVUwtTEkgRE9NIGZvciBjYXRlZ29yaWVzXG5cdGxldCBvblVwbG9hZCA9IGZhbHNlO1xuXHRsZXQgZWRpdG9ycyA9IFtdO1xuXHRsZXQgY29tbWl0QnV0dG9uID0gbnVsbDtcblx0bGV0IGNvbW1pdEZvcm0gPSBudWxsO1xuXHRsZXQgbXVsdGlTcGFuID0gbnVsbDtcblx0bGV0IHBhZ2VUZXh0ID0gbnVsbDtcblx0bGV0IHBhZ2VUaW1lID0gbnVsbDtcblx0bGV0IHBhZ2VXYXRjaGVkID0gZmFsc2U7XG5cdGxldCB3YXRjaENyZWF0ZSA9IGZhbHNlO1xuXHRsZXQgd2F0Y2hFZGl0ID0gZmFsc2U7XG5cdGxldCBtaW5vckVkaXRzID0gZmFsc2U7XG5cdGxldCBlZGl0VG9rZW4gPSBudWxsO1xuXHRsZXQgaXNfcnRsID0gZmFsc2U7XG5cdGxldCBzZXJ2ZXJUaW1lID0gbnVsbDtcblx0bGV0IGxhc3RSZXZJZCA9IG51bGw7XG5cdGxldCBwYWdlVGV4dFJldklkID0gbnVsbDtcblx0bGV0IGNvbmZsaWN0aW5nVXNlciA9IG51bGw7XG5cdGxldCBuZXdET00gPSBmYWxzZTtcblx0Y29uc3QgVU5DSEFOR0VEID0gMDtcblx0Y29uc3QgT1BFTiA9IDE7IC8vIE9wZW4sIGJ1dCBubyBpbnB1dCB5ZXRcblx0Y29uc3QgQ0hBTkdFX1BFTkRJTkcgPSAyOyAvLyBPcGVuLCBzb21lIGlucHV0IG1hZGVcblx0Y29uc3QgQ0hBTkdFRCA9IDM7XG5cdGNvbnN0IERFTEVURUQgPSA0O1xuXHRjb25zdCBzZXRQYWdlID0gKGRhdGEpID0+IHtcblx0XHRsZXQgc3RhcnRUaW1lID0gbnVsbDtcblx0XHRpZiAoZGF0YSAmJiBkYXRhLnF1ZXJ5KSB7XG5cdFx0XHRpZiAoZGF0YS5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRjb25zdCBbcGFnZV0gPSBkYXRhLnF1ZXJ5LnBhZ2VzO1xuXHRcdFx0XHRpZiAocGFnZSkge1xuXHRcdFx0XHRcdGlmIChwYWdlLnJldmlzaW9ucyAmJiBwYWdlLnJldmlzaW9ucy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHQvLyBSZXZpc2lvbnMgYXJlIHNvcnRlZCBieSByZXZpc2lvbiBJRCwgaGVuY2UgWzBdIGlzIHRoZSBvbmUgd2UgYXNrZWQgZm9yLCBhbmQgcG9zc2libHkgdGhlcmUncyBhIFsxXSBpZiB3ZSdyZVxuXHRcdFx0XHRcdFx0Ly8gbm90IG9uIHRoZSBsYXRlc3QgcmV2aXNpb24gKGVkaXQgY29uZmxpY3RzIGFuZCBzdWNoKS5cblx0XHRcdFx0XHRcdHBhZ2VUZXh0ID0gcGFnZS5yZXZpc2lvbnNbMF0uc2xvdHNbJ21haW4nXS5jb250ZW50O1xuXHRcdFx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zWzBdLnRpbWVzdGFtcCkge1xuXHRcdFx0XHRcdFx0XHRwYWdlVGltZSA9IHBhZ2UucmV2aXNpb25zWzBdLnRpbWVzdGFtcC5yZXBsYWNlKC9cXEQvZywgJycpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHBhZ2UucmV2aXNpb25zWzBdLnJldmlkKSB7XG5cdFx0XHRcdFx0XHRcdHBhZ2VUZXh0UmV2SWQgPSBwYWdlLnJldmlzaW9uc1swXS5yZXZpZDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmIChwYWdlLnJldmlzaW9ucy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdGNvbmZsaWN0aW5nVXNlciA9IHBhZ2UucmV2aXNpb25zWzFdLnVzZXI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwYWdlLmxhc3RyZXZpZCkge1xuXHRcdFx0XHRcdFx0bGFzdFJldklkID0gcGFnZS5sYXN0cmV2aWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwYWdlLnN0YXJ0dGltZXN0YW1wKSB7XG5cdFx0XHRcdFx0XHRzdGFydFRpbWUgPSBwYWdlLnN0YXJ0dGltZXN0YW1wLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHBhZ2VXYXRjaGVkID0gdHlwZW9mIHBhZ2Uud2F0Y2hlZCA9PT0gJ3N0cmluZyc7XG5cdFx0XHRcdFx0aWYgKGRhdGEucXVlcnkudG9rZW5zKSB7XG5cdFx0XHRcdFx0XHRlZGl0VG9rZW4gPSBkYXRhLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChwYWdlLmxhbmdsaW5rcyAmJiAoIWRhdGFbJ3F1ZXJ5LWNvbnRpbnVlJ10gfHwgIWRhdGFbJ3F1ZXJ5LWNvbnRpbnVlJ10ubGFuZ2xpbmtzKSkge1xuXHRcdFx0XHRcdFx0Ly8gV2UgaGF2ZSBpbnRlcmxhbmd1YWdlIGxpbmtzLCBhbmQgd2UgZ290IHRoZW0gYWxsLlxuXHRcdFx0XHRcdFx0bGV0IHJlID0gJyc7XG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2UubGFuZ2xpbmtzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRcdHJlICs9XG5cdFx0XHRcdFx0XHRcdFx0KGkgPiAwID8gJ3wnIDogJycpICsgcGFnZS5sYW5nbGlua3NbaV0ubGFuZy5yZXBsYWNlKC8oWyQoKSorLj9cXFxcXl0pL2csIFN0cmluZy5yYXdgXFwkMWApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHJlLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0aW50ZXJsYW5ndWFnZVJFID0gbmV3IFJlZ0V4cChgKChefFxcXFxuXFxcXHI/KShcXFxcW1xcXFxbXFxcXHMqKCR7cmV9KVxcXFxzKjpbXlxcXFxdXStcXFxcXVxcXFxdXFxcXHMqKSkrJGApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gU2l0ZWluZm9cblx0XHRcdGlmIChkYXRhLnF1ZXJ5LmdlbmVyYWwpIHtcblx0XHRcdFx0aWYgKGRhdGEucXVlcnkuZ2VuZXJhbC50aW1lICYmICFzdGFydFRpbWUpIHtcblx0XHRcdFx0XHRzdGFydFRpbWUgPSBkYXRhLnF1ZXJ5LmdlbmVyYWwudGltZS5yZXBsYWNlKC9cXEQvZywgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChIQy5jYXBpdGFsaXplUGFnZU5hbWVzID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gUmVzb3VyY2VMb2FkZXIncyBKU1BhcnNlciBkb2Vzbid0IGxpa2UgLmNhc2UsIHNvIG92ZXJyaWRlIGVzbGludC5cblx0XHRcdFx0XHRIQy5jYXBpdGFsaXplUGFnZU5hbWVzID0gZGF0YS5xdWVyeS5nZW5lcmFsLmNhc2UgPT09ICdmaXJzdC1sZXR0ZXInO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRzZXJ2ZXJUaW1lID0gc3RhcnRUaW1lO1xuXHRcdFx0Ly8gVXNlcmluZm9cblx0XHRcdGlmIChkYXRhLnF1ZXJ5LnVzZXJpbmZvICYmIGRhdGEucXVlcnkudXNlcmluZm8ub3B0aW9ucykge1xuXHRcdFx0XHR3YXRjaENyZWF0ZSA9ICFIQy5kb250X2FkZF90b193YXRjaGxpc3QgJiYgZGF0YS5xdWVyeS51c2VyaW5mby5vcHRpb25zLndhdGNoY3JlYXRpb25zID09PSAnMSc7XG5cdFx0XHRcdHdhdGNoRWRpdCA9ICFIQy5kb250X2FkZF90b193YXRjaGxpc3QgJiYgZGF0YS5xdWVyeS51c2VyaW5mby5vcHRpb25zLndhdGNoZGVmYXVsdCA9PT0gJzEnO1xuXHRcdFx0XHRtaW5vckVkaXRzID0gZGF0YS5xdWVyeS51c2VyaW5mby5vcHRpb25zLm1pbm9yZGVmYXVsdCA9PT0gMTtcblx0XHRcdFx0Ly8gSWYgdGhlIHVzZXIgaGFzIHRoZSBcIkFsbCBlZGl0cyBhcmUgbWlub3JcIiBwcmVmZXJlbmNlIGVuYWJsZWQsIHdlIHNob3VsZCBob25vciB0aGF0XG5cdFx0XHRcdC8vIGZvciBzaW5nbGUgY2F0ZWdvcnkgY2hhbmdlcywgbm8gbWF0dGVyIHdoYXQgdGhlIHNpdGUgY29uZmlndXJhdGlvbiBpcy5cblx0XHRcdFx0aWYgKG1pbm9yRWRpdHMpIHtcblx0XHRcdFx0XHRIQy5zaW5nbGVfbWlub3IgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRsZXQgc2F2ZUluUHJvZ3Jlc3MgPSBmYWxzZTtcblx0Y29uc3QgaW5pdGlhdGVFZGl0ID0gKGRvRWRpdCwgZmFpbHVyZSkgPT4ge1xuXHRcdGlmIChzYXZlSW5Qcm9ncmVzcykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRzYXZlSW5Qcm9ncmVzcyA9IHRydWU7XG5cdFx0bGV0IG9sZEJ1dHRvblN0YXRlO1xuXHRcdGlmIChjb21taXRCdXR0b24pIHtcblx0XHRcdG9sZEJ1dHRvblN0YXRlID0gY29tbWl0QnV0dG9uLmRpc2FibGVkO1xuXHRcdFx0Y29tbWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblx0XHR9XG5cdFx0Y29uc3QgZmFpbCA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG5cdFx0XHRzYXZlSW5Qcm9ncmVzcyA9IGZhbHNlO1xuXHRcdFx0aWYgKGNvbW1pdEJ1dHRvbikge1xuXHRcdFx0XHRjb21taXRCdXR0b24uZGlzYWJsZWQgPSBvbGRCdXR0b25TdGF0ZTtcblx0XHRcdH1cblx0XHRcdGZhaWx1cmUuYXBwbHkodGhpcywgYXJncyk7XG5cdFx0fTtcblx0XHQvLyBNdXN0IHVzZSBBamF4IGhlcmUgdG8gZ2V0IHRoZSB1c2VyIG9wdGlvbnMgYW5kIHRoZSBlZGl0IHRva2VuLlxuXHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0cmF3Y29udGludWU6ICcnLFxuXHRcdFx0dGl0bGVzOiBjb25mLndnUGFnZU5hbWUsXG5cdFx0XHRwcm9wOiBbJ2luZm8nLCAncmV2aXNpb25zJywgJ2xhbmdsaW5rcyddLFxuXHRcdFx0aW5wcm9wOiAnd2F0Y2hlZCcsXG5cdFx0XHRydnByb3A6IFsnY29udGVudCcsICd0aW1lc3RhbXAnLCAnaWRzJywgJ3VzZXInXSxcblx0XHRcdHJ2c2xvdHM6ICdtYWluJyxcblx0XHRcdHJ2bGltaXQ6ICcyJyxcblx0XHRcdHJ2ZGlyOiAnbmV3ZXInLFxuXHRcdFx0cnZzdGFydGlkOiBjb25mLndnQ3VyUmV2aXNpb25JZCxcblx0XHRcdGxsbGltaXQ6ICc1MDAnLFxuXHRcdFx0bWV0YTogWydzaXRlaW5mbycsICd1c2VyaW5mbycsICd0b2tlbnMnXSxcblx0XHRcdHR5cGU6ICdjc3JmJyxcblx0XHRcdHVpcHJvcDogWydvcHRpb25zJ10sXG5cdFx0fTtcblx0XHRhcGkuZ2V0KHBhcmFtcylcblx0XHRcdC5kb25lKChkYXRhKSA9PiB7XG5cdFx0XHRcdHNldFBhZ2UoZGF0YSk7XG5cdFx0XHRcdGRvRWRpdChmYWlsKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbCgoe3N0YXR1cywgc3RhdHVzVGV4dH0pID0+IHtcblx0XHRcdFx0ZmFpbChgJHtzdGF0dXN9ICR7c3RhdHVzVGV4dH1gKTtcblx0XHRcdH0pO1xuXHR9O1xuXHRjb25zdCBtdWx0aUNoYW5nZU1zZyA9IChjb3VudCkgPT4ge1xuXHRcdHJldHVybiBnZXRNZXNzYWdlKCdtZXNzYWdlcy1tdWx0aV9jaGFuZ2UnLCBTdHJpbmcoY291bnQpKTtcblx0fTtcblx0Y29uc3QgY3VycmVudFRpbWVzdGFtcCA9ICgpID0+IHtcblx0XHRjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXHRcdGxldCB0cyA9IFN0cmluZyhub3cuZ2V0VVRDRnVsbFllYXIoKSk7XG5cdFx0Y29uc3QgdHdvID0gKHMpID0+IHtcblx0XHRcdHJldHVybiBzLnNsaWNlKC0yKTtcblx0XHR9O1xuXHRcdHRzICs9XG5cdFx0XHR0d28oYDAke25vdy5nZXRVVENNb250aCgpICsgMX1gKSArXG5cdFx0XHR0d28oYDAke25vdy5nZXRVVENEYXRlKCl9YCkgK1xuXHRcdFx0dHdvKGAwMCR7bm93LmdldFVUQ0hvdXJzKCl9YCkgK1xuXHRcdFx0dHdvKGAwMCR7bm93LmdldFVUQ01pbnV0ZXMoKX1gKSArXG5cdFx0XHR0d28oYDAwJHtub3cuZ2V0VVRDU2Vjb25kcygpfWApO1xuXHRcdHJldHVybiB0cztcblx0fTtcblx0Y29uc3QgcGVyZm9ybUNoYW5nZXMgPSAoZmFpbHVyZSwgc2luZ2xlRWRpdG9yKSA9PiB7XG5cdFx0aWYgKHBhZ2VUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRmYWlsdXJlKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLW11bHRpX2Vycm9yJykpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyBDcmVhdGUgYSBmb3JtIGFuZCBzdWJtaXQgaXQuIFdlIGRvbid0IHVzZSB0aGUgZWRpdCBBUEkgKGFwaS5waHA/YWN0aW9uPWVkaXQpIGJlY2F1c2Vcblx0XHQvLyAoYSkgc2Vuc2libHkgcmVwb3J0aW5nIGJhY2sgZXJyb3JzIGxpa2UgZWRpdCBjb25mbGljdHMgaXMgYWx3YXlzIGEgaGFzc2xlLCBhbmRcblx0XHQvLyAoYikgd2Ugd2FudCB0byBzaG93IGEgZGlmZiBmb3IgbXVsdGktZWRpdHMgYW55d2F5LCBhbmRcblx0XHQvLyAoYykgd2Ugd2FudCB0byB0cmlnZ2VyIG9uc3VibWl0IGV2ZW50cywgYWxsb3dpbmcgdXNlciBjb2RlIHRvIGludGVyY2VwdCB0aGUgZWRpdC5cblx0XHQvLyBVc2luZyB0aGUgZm9ybSwgd2UgY2FuIGRvIChiKSBhbmQgKGMpLCBhbmQgd2UgZ2V0IChhKSBmb3IgZnJlZS4gQW5kLCBvZiBjb3Vyc2UsIHVzaW5nIHRoZSBmb3JtXG5cdFx0Ly8gYXV0b21hdGljYWxseSByZWxvYWRzIHRoZSBwYWdlIHdpdGggdGhlIHVwZGF0ZWQgY2F0ZWdvcmllcyBvbiBhIHN1Y2Nlc3NmdWwgc3VibWl0LCB3aGljaFxuXHRcdC8vIHdlIHdvdWxkIGhhdmUgdG8gZG8gZXhwbGljaXRseSBpZiB3ZSB1c2VkIHRoZSBlZGl0IEFQSS5cblx0XHRsZXQgYWN0aW9uO1xuXHRcdC8vIE5vcm1hbGx5LCB3ZSBkb24ndCBoYXZlIHRvIGNhcmUgYWJvdXQgZWRpdCBjb25mbGljdHMuIElmIHNvbWUgb3RoZXIgdXNlciBlZGl0ZWQgdGhlIHBhZ2UgaW4gdGhlIG1lYW50aW1lLCB0aGVcblx0XHQvLyBzZXJ2ZXIgd2lsbCB0YWtlIGNhcmUgb2YgaXQgYW5kIG1lcmdlIHRoZSBlZGl0IGF1dG9tYXRpY2FsbHkgb3IgcHJlc2VudCBhbiBlZGl0IGNvbmZsaWN0IHNjcmVlbi4gSG93ZXZlciwgdGhlXG5cdFx0Ly8gc2VydmVyIHN1cHByZXNzZXMgZWRpdCBjb25mbGljdHMgd2l0aCBvbmVzZWxmLiBIZW5jZSwgaWYgd2UgaGF2ZSBhIGNvbmZsaWN0LCBhbmQgdGhlIGNvbmZsaWN0aW5nIHVzZXIgaXMgdGhlXG5cdFx0Ly8gY3VycmVudCB1c2VyLCB0aGVuIHdlIHNldCB0aGUgXCJvbGRpZFwiIHZhbHVlIGFuZCBzd2l0Y2ggdG8gZGlmZiwgd2hpY2ggZ2l2ZXMgdGhlIFwieW91IGFyZSBlZGl0aW5nIGFuIG9sZCB2ZXJzaW9uO1xuXHRcdC8vIGlmIHlvdSBzYXZlLCBhbnkgbW9yZSByZWNlbnQgY2hhbmdlcyB3aWxsIGJlIGxvc3RcIiBzY3JlZW4uXG5cdFx0Y29uc3Qgc2VsZkVkaXRDb25mbGljdCA9XG5cdFx0XHQoKGxhc3RSZXZJZCAhPT0gbnVsbCAmJiBsYXN0UmV2SWQgIT09IGNvbmYud2dDdXJSZXZpc2lvbklkKSB8fFxuXHRcdFx0XHQocGFnZVRleHRSZXZJZCAhPT0gbnVsbCAmJiBwYWdlVGV4dFJldklkICE9PSBjb25mLndnQ3VyUmV2aXNpb25JZCkpICYmXG5cdFx0XHRjb25mbGljdGluZ1VzZXIgJiZcblx0XHRcdGNvbmZsaWN0aW5nVXNlciA9PT0gY29uZi53Z1VzZXJOYW1lO1xuXHRcdGlmIChzaW5nbGVFZGl0b3IgJiYgIXNpbmdsZUVkaXRvci5ub0NvbW1pdCAmJiAhSEMubm9fYXV0b2NvbW1pdCAmJiBlZGl0VG9rZW4gJiYgIXNlbGZFZGl0Q29uZmxpY3QpIHtcblx0XHRcdC8vIElmIHdlIGRvIGhhdmUgYW4gZWRpdCBjb25mbGljdCwgYnV0IG5vdCB3aXRoIG91cnNlbGYsIHRoYXQncyBubyByZWFzb24gbm90IHRvIGF0dGVtcHQgdG8gc2F2ZTogdGhlIHNlcnZlciBzaWRlIG1heSBhY3R1YWxseSBiZSBhYmxlIHRvXG5cdFx0XHQvLyBtZXJnZSB0aGUgY2hhbmdlcy4gV2UganVzdCBuZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IHdlIGRvIHByZXNlbnQgYSBkaWZmIHZpZXcgaWYgaXQncyBhIHNlbGYgZWRpdCBjb25mbGljdC5cblx0XHRcdGNvbW1pdEZvcm0ud3BFZGl0VG9rZW4udmFsdWUgPSBlZGl0VG9rZW47XG5cdFx0XHRhY3Rpb24gPSBjb21taXRGb3JtLndwRGlmZjtcblx0XHRcdGlmIChhY3Rpb24pIHtcblx0XHRcdFx0YWN0aW9uLnZhbHVlID0gJ3dwU2F2ZSc7XG5cdFx0XHRcdGFjdGlvbi5uYW1lID0gYWN0aW9uLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRhY3Rpb24gPSBjb21taXRGb3JtLndwU2F2ZTtcblx0XHRcdGlmIChhY3Rpb24pIHtcblx0XHRcdFx0YWN0aW9uLnZhbHVlID0gJ3dwRGlmZic7XG5cdFx0XHRcdGFjdGlvbi5uYW1lID0gYWN0aW9uLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRsZXQgcmVzdWx0ID0ge1xuXHRcdFx0dGV4dDogcGFnZVRleHQsXG5cdFx0fTtcblx0XHRjb25zdCBjaGFuZ2VkID0gW107XG5cdFx0Y29uc3QgYWRkZWQgPSBbXTtcblx0XHRjb25zdCBkZWxldGVkID0gW107XG5cdFx0Y29uc3QgdG9FZGl0ID0gc2luZ2xlRWRpdG9yID8gW3NpbmdsZUVkaXRvcl0gOiBlZGl0b3JzO1xuXHRcdGxldCBlZGl0O1xuXHRcdGxldCBpO1xuXHRcdGxldCBlcnJvciA9IG51bGw7XG5cdFx0bGV0IGNoYW5nZXMgPSAwO1xuXHRcdGZvciAoaSA9IDA7IGkgPCB0b0VkaXQubGVuZ3RoOyBpKyspIHtcblx0XHRcdGVkaXQgPSB0b0VkaXRbaV07XG5cdFx0XHRpZiAoZWRpdC5zdGF0ZSA9PT0gQ0hBTkdFRCkge1xuXHRcdFx0XHRyZXN1bHQgPSBjaGFuZ2VfY2F0ZWdvcnkoXG5cdFx0XHRcdFx0cmVzdWx0LnRleHQsXG5cdFx0XHRcdFx0ZWRpdC5vcmlnaW5hbENhdGVnb3J5LFxuXHRcdFx0XHRcdGVkaXQuY3VycmVudENhdGVnb3J5LFxuXHRcdFx0XHRcdGVkaXQuY3VycmVudEtleSxcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRIaWRkZW5cblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKCFyZXN1bHQuZXJyb3IpIHtcblx0XHRcdFx0XHRjaGFuZ2VzKys7XG5cdFx0XHRcdFx0aWYgKCFlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnkgfHwgZWRpdC5vcmlnaW5hbENhdGVnb3J5Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdFx0YWRkZWRbYWRkZWQubGVuZ3RoXSA9IGVkaXQuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjaGFuZ2VkW2NoYW5nZWQubGVuZ3RoXSA9IHtcblx0XHRcdFx0XHRcdFx0ZnJvbTogZWRpdC5vcmlnaW5hbENhdGVnb3J5LFxuXHRcdFx0XHRcdFx0XHR0bzogZWRpdC5jdXJyZW50Q2F0ZWdvcnksXG5cdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChlcnJvciA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdCh7ZXJyb3J9ID0gcmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChlZGl0LnN0YXRlID09PSBERUxFVEVEICYmIGVkaXQub3JpZ2luYWxDYXRlZ29yeSAmJiBlZGl0Lm9yaWdpbmFsQ2F0ZWdvcnkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRyZXN1bHQgPSBjaGFuZ2VfY2F0ZWdvcnkocmVzdWx0LnRleHQsIGVkaXQub3JpZ2luYWxDYXRlZ29yeSwgbnVsbCwgbnVsbCwgZmFsc2UpO1xuXHRcdFx0XHRpZiAoIXJlc3VsdC5lcnJvcikge1xuXHRcdFx0XHRcdGNoYW5nZXMrKztcblx0XHRcdFx0XHRkZWxldGVkW2RlbGV0ZWQubGVuZ3RoXSA9IGVkaXQub3JpZ2luYWxDYXRlZ29yeTtcblx0XHRcdFx0fSBlbHNlIGlmIChlcnJvciA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdCh7ZXJyb3J9ID0gcmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoZXJyb3IgIT09IG51bGwpIHtcblx0XHRcdC8vIERvIG5vdCBjb21taXQgaWYgdGhlcmUgd2VyZSBlcnJvcnNcblx0XHRcdGFjdGlvbiA9IGNvbW1pdEZvcm0ud3BTYXZlO1xuXHRcdFx0aWYgKGFjdGlvbikge1xuXHRcdFx0XHRhY3Rpb24udmFsdWUgPSAnd3BEaWZmJztcblx0XHRcdFx0YWN0aW9uLm5hbWUgPSBhY3Rpb24udmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIEZpbGwgaW4gdGhlIGZvcm0gYW5kIHN1Ym1pdCBpdFxuXHRcdGNvbW1pdEZvcm0ud3BNaW5vcmVkaXQuY2hlY2tlZCA9IG1pbm9yRWRpdHM7XG5cdFx0Y29tbWl0Rm9ybS53cFdhdGNodGhpcy5jaGVja2VkID0gKCFjb25mLndnQXJ0aWNsZUlkICYmIHdhdGNoQ3JlYXRlKSB8fCB3YXRjaEVkaXQgfHwgcGFnZVdhdGNoZWQ7XG5cdFx0aWYgKGNvbmYud2dBcnRpY2xlSWQgfHwgISFzaW5nbGVFZGl0b3IpIHtcblx0XHRcdC8vIFByZXBhcmUgY2hhbmdlLXRhZyBzYXZlXG5cdFx0XHRpZiAoYWN0aW9uICYmIGFjdGlvbi52YWx1ZSA9PT0gJ3dwU2F2ZScpIHtcblx0XHRcdFx0aWYgKEhDLmNoYW5nZVRhZykge1xuXHRcdFx0XHRcdGNvbW1pdEZvcm0ud3BDaGFuZ2VUYWdzLnZhbHVlID0gSEMuY2hhbmdlVGFnO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb21taXRGb3JtLndwQXV0b1N1bW1hcnkudmFsdWUgPSBIQy5jaGFuZ2VUYWc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY2hhbmdlcyA9PT0gMSkge1xuXHRcdFx0XHRpZiAocmVzdWx0LnN1bW1hcnkgJiYgcmVzdWx0LnN1bW1hcnkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdGNvbW1pdEZvcm0ud3BTdW1tYXJ5LnZhbHVlID1cblx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXByZWZpeCcpKSArXG5cdFx0XHRcdFx0XHRyZXN1bHQuc3VtbWFyeS5qb2luKGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXNlcGFyYXRvcicpKSArXG5cdFx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy11c2luZycpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb21taXRGb3JtLndwTWlub3JlZGl0LmNoZWNrZWQgPSBIQy5zaW5nbGVfbWlub3IgfHwgbWlub3JFZGl0cztcblx0XHRcdH0gZWxzZSBpZiAoY2hhbmdlcykge1xuXHRcdFx0XHRsZXQgc3VtbWFyeSA9IFtdO1xuXHRcdFx0XHRjb25zdCBzaG9ydFN1bW1hcnkgPSBbXTtcblx0XHRcdFx0Ly8gRGVsZXRlZFxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgZGVsZXRlZC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdHN1bW1hcnlbc3VtbWFyeS5sZW5ndGhdID0gYOKIkiR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgZGVsZXRlZFtpXSl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGVsZXRlZC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPSBg4oiSJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBkZWxldGVkWzBdKX1gO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGRlbGV0ZWQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9IGDiiJIgJHttdWx0aUNoYW5nZU1zZyhkZWxldGVkLmxlbmd0aCl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBBZGRlZFxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYWRkZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGArJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBhZGRlZFtpXSl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoYWRkZWQubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0c2hvcnRTdW1tYXJ5W3Nob3J0U3VtbWFyeS5sZW5ndGhdID0gYCske2dldE1lc3NhZ2UoJ21lc3NhZ2VzLXNob3J0X2NhdGNoYW5nZScsIGFkZGVkWzBdKX1gO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGFkZGVkLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRzaG9ydFN1bW1hcnlbc2hvcnRTdW1tYXJ5Lmxlbmd0aF0gPSBgKyAke211bHRpQ2hhbmdlTXNnKGFkZGVkLmxlbmd0aCl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBDaGFuZ2VkXG5cdFx0XHRcdGNvbnN0IGFycm93ID0gaXNfcnRsID8gJ1xcdTIxOTAnIDogJ1xcdTIxOTInOyAvLyBsZWZ0IGFuZCByaWdodCBhcnJvd3MuIERvbid0IHVzZSDihpAgYW5kIOKGkiBpbiB0aGUgY29kZS5cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNoYW5nZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoY2hhbmdlZFtpXS5mcm9tID09PSBjaGFuZ2VkW2ldLnRvKSB7XG5cdFx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9IGDCsSR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgY2hhbmdlZFtpXS5mcm9tKX1gO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzdW1tYXJ5W3N1bW1hcnkubGVuZ3RoXSA9XG5cdFx0XHRcdFx0XHRcdGDCsSR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgY2hhbmdlZFtpXS5mcm9tKX0ke2Fycm93fSR7Z2V0TWVzc2FnZShcblx0XHRcdFx0XHRcdFx0XHQnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJyxcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VkW2ldLnRvXG5cdFx0XHRcdFx0XHRcdCl9YDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGNoYW5nZWQubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRcdFx0aWYgKGNoYW5nZWRbMF0uZnJvbSA9PT0gY2hhbmdlZFswXS50bykge1xuXHRcdFx0XHRcdFx0c2hvcnRTdW1tYXJ5W3Nob3J0U3VtbWFyeS5sZW5ndGhdID1cblx0XHRcdFx0XHRcdFx0YMKxJHtnZXRNZXNzYWdlKCdtZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnLCBjaGFuZ2VkWzBdLmZyb20pfWA7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNob3J0U3VtbWFyeVtzaG9ydFN1bW1hcnkubGVuZ3RoXSA9XG5cdFx0XHRcdFx0XHRcdGDCsSR7Z2V0TWVzc2FnZSgnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJywgY2hhbmdlZFswXS5mcm9tKX0ke2Fycm93fSR7Z2V0TWVzc2FnZShcblx0XHRcdFx0XHRcdFx0XHQnbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJyxcblx0XHRcdFx0XHRcdFx0XHRjaGFuZ2VkWzBdLnRvXG5cdFx0XHRcdFx0XHRcdCl9YDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoY2hhbmdlZC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0c2hvcnRTdW1tYXJ5W3Nob3J0U3VtbWFyeS5sZW5ndGhdID0gYMKxICR7bXVsdGlDaGFuZ2VNc2coY2hhbmdlZC5sZW5ndGgpfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN1bW1hcnkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdHN1bW1hcnkgPSBzdW1tYXJ5LmpvaW4oZ2V0TWVzc2FnZSgnbWVzc2FnZXMtc2VwYXJhdG9yJykpO1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdHN1bW1hcnkubGVuZ3RoID5cblx0XHRcdFx0XHRcdDIwMCAtXG5cdFx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXByZWZpeCcpKS5sZW5ndGggLVxuXHRcdFx0XHRcdFx0XHQoSEMuY2hhbmdlVGFnID8gJycgOiBnZXRNZXNzYWdlKCdtZXNzYWdlcy11c2luZycpKS5sZW5ndGhcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdHN1bW1hcnkgPSBzaG9ydFN1bW1hcnkuam9pbihnZXRNZXNzYWdlKCdtZXNzYWdlcy1zZXBhcmF0b3InKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNvbW1pdEZvcm0ud3BTdW1tYXJ5LnZhbHVlID1cblx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXByZWZpeCcpKSArXG5cdFx0XHRcdFx0XHRzdW1tYXJ5ICtcblx0XHRcdFx0XHRcdChIQy5jaGFuZ2VUYWcgPyAnJyA6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbW1pdEZvcm0ud3BUZXh0Ym94MS52YWx1ZSA9IHJlc3VsdC50ZXh0O1xuXHRcdGNvbW1pdEZvcm0ud3BTdGFydHRpbWUudmFsdWUgPSBzZXJ2ZXJUaW1lIHx8IGN1cnJlbnRUaW1lc3RhbXAoKTtcblx0XHRjb21taXRGb3JtLndwRWRpdHRpbWUudmFsdWUgPSBwYWdlVGltZSB8fCBjb21taXRGb3JtLndwU3RhcnR0aW1lLnZhbHVlO1xuXHRcdGlmIChzZWxmRWRpdENvbmZsaWN0KSB7XG5cdFx0XHRjb21taXRGb3JtLm9sZGlkLnZhbHVlID0gU3RyaW5nKHBhZ2VUZXh0UmV2SWQgfHwgY29uZi53Z0N1clJldmlzaW9uSWQpO1xuXHRcdH1cblx0XHQvLyBTdWJtaXQgdGhlIGZvcm0gaW4gYSB3YXkgdGhhdCB0cmlnZ2VycyBvbnN1Ym1pdCBldmVudHM6IGNvbW1pdEZvcm0uc3VibWl0KCkgZG9lc24ndC5cblx0XHRjb21taXRGb3JtLmhjQ29tbWl0LmNsaWNrKCk7XG5cdH07XG5cdGNvbnN0IHJlc29sdmVPbmUgPSAocGFnZSwgdG9SZXNvbHZlKSA9PiB7XG5cdFx0Y29uc3QgY2F0cyA9IHBhZ2UuY2F0ZWdvcmllcztcblx0XHRjb25zdCB7bGlua3N9ID0gcGFnZTtcblx0XHRsZXQgaXNfZGFiID0gZmFsc2U7IC8vIEhhcmQgcmVkaXJlY3Q/XG5cdFx0bGV0IGlzX3JlZGlyID0gdHlwZW9mIHBhZ2UucmVkaXJlY3QgPT09ICdzdHJpbmcnO1xuXHRcdGxldCBpO1xuXHRcdGNvbnN0IGlzX2hpZGRlbiA9IHBhZ2UuY2F0ZWdvcnlpbmZvICYmIHR5cGVvZiBwYWdlLmNhdGVnb3J5aW5mby5oaWRkZW4gPT09ICdzdHJpbmcnO1xuXHRcdGNvbnN0IGlzX21pc3NpbmcgPSB0eXBlb2YgcGFnZS5taXNzaW5nID09PSAnc3RyaW5nJztcblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9SZXNvbHZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoaSAmJiB0b1Jlc29sdmVbaV0uZGFiSW5wdXRDbGVhbmVkICE9PSBwYWdlLnRpdGxlLnNsaWNlKE1hdGgubWF4KDAsIHBhZ2UudGl0bGUuaW5kZXhPZignOicpICsgMSkpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gTm90ZTogdGhlIHNlcnZlciByZXR1cm5zIGluIHBhZ2UgYW4gTkZDIG5vcm1hbGl6ZWQgVW5pY29kZSB0aXRsZS4gSWYgb3VyIGlucHV0IHdhcyBub3QgTkZDIG5vcm1hbGl6ZWQsIHdlIG1heSBub3QgZmluZFxuXHRcdFx0Ly8gYW55IGVudHJ5IGhlcmUuIElmIHdlIGhhdmUgb25seSBvbmUgZWRpdG9yIHRvIHJlc29sdmUgKHRoZSBtb3N0IGNvbW1vbiBjYXNlLCBJIHByZXN1bWUpLCB3ZSBtYXkgc2ltcGx5IHNraXAgdGhlIGNoZWNrLlxuXHRcdFx0dG9SZXNvbHZlW2ldLmN1cnJlbnRIaWRkZW4gPSBpc19oaWRkZW47XG5cdFx0XHR0b1Jlc29sdmVbaV0uaW5wdXRFeGlzdHMgPSAhaXNfbWlzc2luZztcblx0XHRcdHRvUmVzb2x2ZVtpXS5pY29uLnNyYyA9IGlzX21pc3NpbmcgPyBIQy5leGlzdHNObyA6IEhDLmV4aXN0c1llcztcblx0XHR9XG5cdFx0aWYgKGlzX21pc3NpbmcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCFpc19yZWRpciAmJiBjYXRzICYmIChnZXRNZXNzYWdlKCdkaXNhbWJpZ19jYXRlZ29yeScpIHx8IGdldE1lc3NhZ2UoJ3JlZGlyX2NhdGVnb3J5JykpKSB7XG5cdFx0XHRmb3IgKGNvbnN0IGNhdF8gb2YgY2F0cykge1xuXHRcdFx0XHRsZXQgY2F0ID0gY2F0Xy50aXRsZTtcblx0XHRcdFx0Ly8gU3RyaXAgbmFtZXNwYWNlIHByZWZpeFxuXHRcdFx0XHRpZiAoY2F0KSB7XG5cdFx0XHRcdFx0Y2F0ID0gY2F0LnNsaWNlKE1hdGgubWF4KDAsIGNhdC5pbmRleE9mKCc6JykgKyAxKSkucmVwbGFjZSgvXy9nLCAnICcpO1xuXHRcdFx0XHRcdGlmIChjYXQgPT09IGdldE1lc3NhZ2UoJ2Rpc2FtYmlnX2NhdGVnb3J5JykpIHtcblx0XHRcdFx0XHRcdGlzX2RhYiA9IHRydWU7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9IGVsc2UgaWYgKGNhdCA9PT0gZ2V0TWVzc2FnZSgncmVkaXJfY2F0ZWdvcnknKSkge1xuXHRcdFx0XHRcdFx0aXNfcmVkaXIgPSB0cnVlO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghaXNfcmVkaXIgJiYgIWlzX2RhYikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIWxpbmtzIHx8IGxpbmtzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCB0aXRsZXMgPSBbXTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChcblx0XHRcdFx0Ly8gQ2F0ZWdvcnkgbmFtZXNwYWNlIC0tIGFsd2F5cyB0cnVlIHNpbmNlIHdlIGFzayBvbmx5IGZvciB0aGUgY2F0ZWdvcnkgbGlua3Ncblx0XHRcdFx0bGlua3NbaV0ubnMgPT09IDE0ICYmXG5cdFx0XHRcdC8vIE5hbWUgbm90IGVtcHR5XG5cdFx0XHRcdGxpbmtzW2ldLnRpdGxlICYmXG5cdFx0XHRcdGxpbmtzW2ldLnRpdGxlLmxlbmd0aCA+IDBcblx0XHRcdCkge1xuXHRcdFx0XHQvLyBJbnRlcm5hbCBsaW5rIHRvIGV4aXN0aW5nIHRoaW5neS4gRXh0cmFjdCB0aGUgcGFnZSBuYW1lIGFuZCByZW1vdmUgdGhlIG5hbWVzcGFjZS5cblx0XHRcdFx0bGV0IG1hdGNoID0gbGlua3NbaV0udGl0bGU7XG5cdFx0XHRcdG1hdGNoID0gbWF0Y2guc2xpY2UoTWF0aC5tYXgoMCwgbWF0Y2guaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHQvLyBFeGNsdWRlIGJsYWNrbGlzdGVkIGNhdGVnb3JpZXMuXG5cdFx0XHRcdGlmICghSEMuYmxhY2tsaXN0IHx8ICFIQy5ibGFja2xpc3QudGVzdChtYXRjaCkpIHtcblx0XHRcdFx0XHR0aXRsZXNbdGl0bGVzLmxlbmd0aF0gPSBtYXRjaDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodGl0bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRmb3IgKGkgPSAwOyBpIDwgdG9SZXNvbHZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoaSAmJiB0b1Jlc29sdmVbaV0uZGFiSW5wdXRDbGVhbmVkICE9PSBwYWdlLnRpdGxlLnNsaWNlKE1hdGgubWF4KDAsIHBhZ2UudGl0bGUuaW5kZXhPZignOicpICsgMSkpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dG9SZXNvbHZlW2ldLmlucHV0RXhpc3RzID0gdHJ1ZTsgLy8gTWlnaHQgYWN0dWFsbHkgYmUgd3JvbmcgaWYgaXQncyBhIHJlZGlyZWN0IHBvaW50aW5nIHRvIGEgbm9uLWV4aXN0aW5nIGNhdGVnb3J5XG5cdFx0XHR0b1Jlc29sdmVbaV0uaWNvbi5zcmMgPSBIQy5leGlzdHNZZXM7XG5cdFx0XHRpZiAodGl0bGVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0dG9SZXNvbHZlW2ldLmRhYiA9IHRpdGxlcztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRvUmVzb2x2ZVtpXS50ZXh0LnZhbHVlID1cblx0XHRcdFx0XHR0aXRsZXNbMF0gKyAodG9SZXNvbHZlW2ldLmN1cnJlbnRLZXkgPT09IG51bGwgPyAnJyA6IGB8JHt0b1Jlc29sdmVbaV0uY3VycmVudEtleX1gKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGNvbnN0IHJlc29sdmVSZWRpcmVjdHMgPSAodG9SZXNvbHZlLCBwYXJhbXMpID0+IHtcblx0XHRpZiAoIXBhcmFtcyB8fCAhcGFyYW1zLnF1ZXJ5IHx8ICFwYXJhbXMucXVlcnkucGFnZXMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBwIGluIHBhcmFtcy5xdWVyeS5wYWdlcykge1xuXHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHBhcmFtcy5xdWVyeS5wYWdlcywgcCkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRyZXNvbHZlT25lKHBhcmFtcy5xdWVyeS5wYWdlc1twXSwgdG9SZXNvbHZlKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHJlc29sdmVNdWx0aSA9ICh0b1Jlc29sdmUsIGNhbGxiYWNrKSA9PiB7XG5cdFx0bGV0IGk7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHRvUmVzb2x2ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dG9SZXNvbHZlW2ldLmRhYiA9IG51bGw7XG5cdFx0XHR0b1Jlc29sdmVbaV0uZGFiSW5wdXQgPSB0b1Jlc29sdmVbaV0ubGFzdElucHV0O1xuXHRcdH1cblx0XHRpZiAobm9TdWdnZXN0aW9ucykge1xuXHRcdFx0Y2FsbGJhY2sodG9SZXNvbHZlKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRwcm9wOiAnaW5mb3xsaW5rc3xjYXRlZ29yaWVzfGNhdGVnb3J5aW5mbycsXG5cdFx0XHRwbG5hbWVzcGFjZTogJzE0Jyxcblx0XHRcdHBsbGltaXQ6IHRvUmVzb2x2ZS5sZW5ndGggKiAxMCxcblx0XHRcdGNsbGltaXQ6IHRvUmVzb2x2ZS5sZW5ndGggKiAxMCxcblx0XHR9O1xuXHRcdGNvbnN0IHRpdGxlcyA9IFtdO1xuXHRcdGZvciAoaSA9IDA7IGkgPCB0b1Jlc29sdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCB2ID0gdG9SZXNvbHZlW2ldLmRhYklucHV0O1xuXHRcdFx0diA9IHJlcGxhY2VTaG9ydGN1dHModiwgSEMuc2hvcnRjdXRzKTtcblx0XHRcdHRvUmVzb2x2ZVtpXS5kYWJJbnB1dENsZWFuZWQgPSB2O1xuXHRcdFx0dGl0bGVzW3RpdGxlcy5sZW5ndGhdID0gYENhdGVnb3J5OiR7dn1gO1xuXHRcdH1cblx0XHRwYXJhbXMudGl0bGVzID0gdGl0bGVzLmpvaW4oJ3wnKTtcblx0XHRhcGkuZ2V0KHBhcmFtcylcblx0XHRcdC5kb25lKChqc29uKSA9PiB7XG5cdFx0XHRcdHJlc29sdmVSZWRpcmVjdHModG9SZXNvbHZlLCBqc29uKTtcblx0XHRcdFx0Y2FsbGJhY2sodG9SZXNvbHZlKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbCgocmVxKSA9PiB7XG5cdFx0XHRcdGlmICghcmVxKSB7XG5cdFx0XHRcdFx0bm9TdWdnZXN0aW9ucyA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2FsbGJhY2sodG9SZXNvbHZlKTtcblx0XHRcdH0pO1xuXHR9O1xuXHRjb25zdCBtYWtlQWN0aXZlID0gKHdoaWNoKSA9PiB7XG5cdFx0aWYgKHdoaWNoLmlzX2FjdGl2ZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRpZiAoZWRpdG9yICE9PSB3aGljaCkge1xuXHRcdFx0XHRlZGl0b3IuaW5hY3RpdmF0ZSgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR3aGljaC5pc19hY3RpdmUgPSB0cnVlO1xuXHRcdGlmICh3aGljaC5kYWIpIHtcblx0XHRcdHNob3dEYWIod2hpY2gpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBDaGVjayBmb3IgcHJvZ3JhbW1hdGljIHZhbHVlIGNoYW5nZXMuXG5cdFx0XHRjb25zdCBleHBlY3RlZElucHV0ID0gd2hpY2gubGFzdFJlYWxJbnB1dCB8fCB3aGljaC5sYXN0SW5wdXQgfHwgJyc7XG5cdFx0XHRjb25zdCBhY3R1YWxWYWx1ZSA9IHdoaWNoLnRleHQudmFsdWUgfHwgJyc7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdChleHBlY3RlZElucHV0Lmxlbmd0aCA9PT0gMCAmJiBhY3R1YWxWYWx1ZS5sZW5ndGggPiAwKSB8fFxuXHRcdFx0XHQoZXhwZWN0ZWRJbnB1dC5sZW5ndGggPiAwICYmIGFjdHVhbFZhbHVlLmluZGV4T2YoZXhwZWN0ZWRJbnB1dCkpXG5cdFx0XHQpIHtcblx0XHRcdFx0Ly8gU29tZWhvdyB0aGUgZmllbGQncyB2YWx1ZSBhcHBlYXJzIHRvIGhhdmUgY2hhbmdlZCwgYW5kIHdoaWNoLmxhc3RTZWxlY3Rpb24gdGhlcmVmb3JlIGlzIG5vIGxvbmdlciB2YWxpZC4gVHJ5IHRvIHNldCB0aGVcblx0XHRcdFx0Ly8gY3Vyc29yIGF0IHRoZSBlbmQgb2YgdGhlIGNhdGVnb3J5LCBhbmQgZG8gbm90IGRpc3BsYXkgdGhlIG9sZCBzdWdnZXN0aW9uIGxpc3QuXG5cdFx0XHRcdHdoaWNoLnNob3dzTGlzdCA9IGZhbHNlO1xuXHRcdFx0XHRjb25zdCB2ID0gYWN0dWFsVmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdFx0W3doaWNoLmxhc3RJbnB1dF0gPSB2O1xuXHRcdFx0XHR3aGljaC5sYXN0UmVhbElucHV0ID0gd2hpY2gubGFzdElucHV0O1xuXHRcdFx0XHRpZiAodi5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0Wywgd2hpY2guY3VycmVudEtleV0gPSB2O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHdoaWNoLmxhc3RTZWxlY3Rpb24gJiY9IHtcblx0XHRcdFx0XHRzdGFydDogdlswXS5sZW5ndGgsXG5cdFx0XHRcdFx0ZW5kOiB2WzBdLmxlbmd0aCxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmICh3aGljaC5zaG93c0xpc3QpIHtcblx0XHRcdFx0d2hpY2guZGlzcGxheUxpc3QoKTtcblx0XHRcdH1cblx0XHRcdGlmICh3aGljaC5sYXN0U2VsZWN0aW9uKSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdHdoaWNoLnNldFNlbGVjdGlvbih3aGljaC5sYXN0U2VsZWN0aW9uLnN0YXJ0LCB3aGljaC5sYXN0U2VsZWN0aW9uLmVuZCk7XG5cdFx0XHRcdH0sIDApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0Y29uc3Qgc2hvd0RhYiA9ICh3aGljaCkgPT4ge1xuXHRcdGlmICh3aGljaC5pc19hY3RpdmUpIHtcblx0XHRcdHdoaWNoLnNob3dTdWdnZXN0aW9ucyh3aGljaC5kYWIsIGZhbHNlLCBudWxsLCBudWxsKTsgLy8gZG8gYXV0b2NvbXBsZXRpb24sIG5vIGtleSwgbm8gZW5naW5lIHNlbGVjdG9yXG5cdFx0XHR3aGljaC5kYWIgPSBudWxsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtYWtlQWN0aXZlKHdoaWNoKTtcblx0XHR9XG5cdH07XG5cdGNvbnN0IG11bHRpU3VibWl0ID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRvUmVzb2x2ZSA9IFtdO1xuXHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdGlmIChlZGl0b3Iuc3RhdGUgPT09IENIQU5HRV9QRU5ESU5HIHx8IGVkaXRvci5zdGF0ZSA9PT0gT1BFTikge1xuXHRcdFx0XHR0b1Jlc29sdmVbdG9SZXNvbHZlLmxlbmd0aF0gPSBlZGl0b3I7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0b1Jlc29sdmUubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRpbml0aWF0ZUVkaXQoXG5cdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0cGVyZm9ybUNoYW5nZXMoZmFpbHVyZSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHRtdy5ub3RpZnkobXNnLCB7dGFnOiAnaG90Q2F0J30pO1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRyZXNvbHZlTXVsdGkodG9SZXNvbHZlLCAocmVzb2x2ZWQpID0+IHtcblx0XHRcdGxldCBmaXJzdERhYiA9IG51bGw7XG5cdFx0XHRsZXQgZG9udENoYW5nZSA9IGZhbHNlO1xuXHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mIHJlc29sdmVkKSB7XG5cdFx0XHRcdGlmIChlbGVtZW50Lmxhc3RJbnB1dCA9PT0gZWxlbWVudC5kYWJJbnB1dCkge1xuXHRcdFx0XHRcdGlmIChlbGVtZW50LmRhYikge1xuXHRcdFx0XHRcdFx0Zmlyc3REYWIgfHw9IGVsZW1lbnQ7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChlbGVtZW50LmFjY2VwdENoZWNrKHRydWUpKSB7XG5cdFx0XHRcdFx0XHRlbGVtZW50LmNvbW1pdCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBXZSBkaWRuJ3QgZGlzYWJsZSBhbGwgdGhlIG9wZW4gZWRpdG9ycywgYnV0IHdlIGRpZCBhc3luY2hyb25vdXMgY2FsbHMuIEl0IGlzXG5cdFx0XHRcdFx0Ly8gdGhlb3JldGljYWxseSBwb3NzaWJsZSB0aGF0IHRoZSB1c2VyIGNoYW5nZWQgc29tZXRoaW5nLi4uXG5cdFx0XHRcdFx0ZG9udENoYW5nZSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChmaXJzdERhYikge1xuXHRcdFx0XHRzaG93RGFiKGZpcnN0RGFiKTtcblx0XHRcdH0gZWxzZSBpZiAoIWRvbnRDaGFuZ2UpIHtcblx0XHRcdFx0aW5pdGlhdGVFZGl0KFxuXHRcdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHRcdG13Lm5vdGlmeShtc2csIHt0YWc6ICdob3RDYXQnfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBzZXRNdWx0aUlucHV0ID0gKCkgPT4ge1xuXHRcdGlmIChjb21taXRCdXR0b24gfHwgb25VcGxvYWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29tbWl0QnV0dG9uID0gbWFrZSgnaW5wdXQnKTtcblx0XHRjb21taXRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuXHRcdGNvbW1pdEJ1dHRvbi52YWx1ZSA9IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNvbW1pdCcpO1xuXHRcdGNvbW1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG11bHRpU3VibWl0KTtcblx0XHRpZiAobXVsdGlTcGFuKSB7XG5cdFx0XHRtdWx0aVNwYW4ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY29tbWl0QnV0dG9uLCBtdWx0aVNwYW4pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjYXRMaW5lLmFwcGVuZChjb21taXRCdXR0b24pO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgY2hlY2tNdWx0aUlucHV0ID0gKCkgPT4ge1xuXHRcdGlmICghY29tbWl0QnV0dG9uKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGxldCBoYXNDaGFuZ2VzID0gZmFsc2U7XG5cdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0aWYgKGVkaXRvci5zdGF0ZSAhPT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdGhhc0NoYW5nZXMgPSB0cnVlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29tbWl0QnV0dG9uLmRpc2FibGVkID0gIWhhc0NoYW5nZXM7XG5cdH07XG5cdGNvbnN0IHN1Z2dlc3Rpb25FbmdpbmVzID0ge1xuXHRcdG9wZW5zZWFyY2g6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldChcblx0XHRcdFx0J3dnU2NyaXB0UGF0aCdcblx0XHRcdCl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPW9wZW5zZWFyY2gmbmFtZXNwYWNlPTE0JmxpbWl0PTMwJnNlYXJjaD1DYXRlZ29yeTokMWAsXG5cdFx0XHQvLyAkMSA9IHNlYXJjaCB0ZXJtXG5cdFx0XHQvLyBGdW5jdGlvbiB0byBjb252ZXJ0IHJlc3VsdCBvZiB1cmkgaW50byBhbiBhcnJheSBvZiBjYXRlZ29yeSBuYW1lc1xuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0LCBxdWVyeUtleSkgPT4ge1xuXHRcdFx0XHRpZiAocXVlcnlSZXN1bHQgJiYgcXVlcnlSZXN1bHQubGVuZ3RoID49IDIpIHtcblx0XHRcdFx0XHRjb25zdCBrZXkgPSBxdWVyeVJlc3VsdFswXS5zbGljZShNYXRoLm1heCgwLCBxdWVyeVJlc3VsdFswXS5pbmRleE9mKCc6JykgKyAxKSk7XG5cdFx0XHRcdFx0Y29uc3QgWywgdGl0bGVzXSA9IHF1ZXJ5UmVzdWx0O1xuXHRcdFx0XHRcdGxldCBleGlzdHMgPSBmYWxzZTtcblx0XHRcdFx0XHRjYXRfcHJlZml4IHx8PSBuZXcgUmVnRXhwKGBeKCR7SEMuY2F0ZWdvcnlfcmVnZXhwfSk6YCk7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aXRsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdGNhdF9wcmVmaXgubGFzdEluZGV4ID0gMDtcblx0XHRcdFx0XHRcdGNvbnN0IG0gPSBjYXRfcHJlZml4LmV4ZWModGl0bGVzW2ldKTtcblx0XHRcdFx0XHRcdGlmIChtICYmIG0ubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXNbaV0gPSB0aXRsZXNbaV0uc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGVzW2ldLmluZGV4T2YoJzonKSArIDEpKTsgLy8gcm0gbmFtZXNwYWNlXG5cdFx0XHRcdFx0XHRcdGlmIChrZXkgPT09IHRpdGxlc1tpXSkge1xuXHRcdFx0XHRcdFx0XHRcdGV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRpdGxlcy5zcGxpY2UoaSwgMSk7IC8vIE5vcGUsIGl0J3Mgbm90IGEgY2F0ZWdvcnkgYWZ0ZXIgYWxsLlxuXHRcdFx0XHRcdFx0XHRpLS07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRpdGxlcy5leGlzdHMgPSBleGlzdHM7XG5cdFx0XHRcdFx0aWYgKHF1ZXJ5S2V5ICE9PSBrZXkpIHtcblx0XHRcdFx0XHRcdHRpdGxlcy5ub3JtYWxpemVkID0ga2V5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBSZW1lbWJlciB0aGUgTkZDIG5vcm1hbGl6ZWQga2V5IHdlIGdvdCBiYWNrIGZyb20gdGhlIHNlcnZlclxuXHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0aW50ZXJuYWxzZWFyY2g6IHtcblx0XHRcdHVyaTogYCR7bXcuY29uZmlnLmdldChcblx0XHRcdFx0J3dnU2NyaXB0UGF0aCdcblx0XHRcdCl9L2FwaS5waHA/Zm9ybWF0PWpzb24mYWN0aW9uPXF1ZXJ5Jmxpc3Q9YWxscGFnZXMmYXBuYW1lc3BhY2U9MTQmYXBsaW1pdD0zMCZhcGZyb209JDEmYXBwcmVmaXg9JDFgLFxuXHRcdFx0aGFuZGxlcjogKHF1ZXJ5UmVzdWx0KSA9PiB7XG5cdFx0XHRcdGlmIChxdWVyeVJlc3VsdCAmJiBxdWVyeVJlc3VsdC5xdWVyeSAmJiBxdWVyeVJlc3VsdC5xdWVyeS5hbGxwYWdlcykge1xuXHRcdFx0XHRcdGNvbnN0IHRpdGxlcyA9IHF1ZXJ5UmVzdWx0LnF1ZXJ5LmFsbHBhZ2VzO1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR0aXRsZXNbaV0gPSB0aXRsZXNbaV0udGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGVzW2ldLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0XHR9IC8vIHJtIG5hbWVzcGFjZVxuXHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0ZXhpc3RzOiB7XG5cdFx0XHR1cmk6IGAke213LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpfS9hcGkucGhwP2Zvcm1hdD1qc29uJmFjdGlvbj1xdWVyeSZwcm9wPWluZm8mdGl0bGVzPUNhdGVnb3J5OiQxYCxcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdCwgcXVlcnlLZXkpID0+IHtcblx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzICYmICFxdWVyeVJlc3VsdC5xdWVyeS5wYWdlc1stMV0pIHtcblx0XHRcdFx0XHQvLyBTaG91bGQgaGF2ZSBleGFjdGx5IDFcblx0XHRcdFx0XHRmb3IgKGNvbnN0IHAgaW4gcXVlcnlSZXN1bHQucXVlcnkucGFnZXMpIHtcblx0XHRcdFx0XHRcdGlmICghT2JqZWN0Lmhhc093bihxdWVyeVJlc3VsdC5xdWVyeS5wYWdlcywgcCkpIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsZXQgX3RpdGxlID0gcXVlcnlSZXN1bHQucXVlcnkucGFnZXNbcF0udGl0bGU7XG5cdFx0XHRcdFx0XHRfdGl0bGUgPSBfdGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgX3RpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0XHRcdGNvbnN0IHRpdGxlcyA9IFtfdGl0bGVdO1xuXHRcdFx0XHRcdFx0dGl0bGVzLmV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0XHRpZiAocXVlcnlLZXkgIT09IF90aXRsZSkge1xuXHRcdFx0XHRcdFx0XHR0aXRsZXMubm9ybWFsaXplZCA9IF90aXRsZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIE5GQ1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRpdGxlcztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0c3ViY2F0ZWdvcmllczoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KFxuXHRcdFx0XHQnd2dTY3JpcHRQYXRoJ1xuXHRcdFx0KX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249cXVlcnkmbGlzdD1jYXRlZ29yeW1lbWJlcnMmY210eXBlPXN1YmNhdCZjbWxpbWl0PW1heCZjbXRpdGxlPUNhdGVnb3J5OiQxYCxcblx0XHRcdGhhbmRsZXI6IChxdWVyeVJlc3VsdCkgPT4ge1xuXHRcdFx0XHRpZiAocXVlcnlSZXN1bHQgJiYgcXVlcnlSZXN1bHQucXVlcnkgJiYgcXVlcnlSZXN1bHQucXVlcnkuY2F0ZWdvcnltZW1iZXJzKSB7XG5cdFx0XHRcdFx0Y29uc3QgdGl0bGVzID0gcXVlcnlSZXN1bHQucXVlcnkuY2F0ZWdvcnltZW1iZXJzO1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHR0aXRsZXNbaV0gPSB0aXRsZXNbaV0udGl0bGUuc2xpY2UoTWF0aC5tYXgoMCwgdGl0bGVzW2ldLnRpdGxlLmluZGV4T2YoJzonKSArIDEpKTtcblx0XHRcdFx0XHR9IC8vIHJtIG5hbWVzcGFjZVxuXHRcdFx0XHRcdHJldHVybiB0aXRsZXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0cGFyZW50Y2F0ZWdvcmllczoge1xuXHRcdFx0dXJpOiBgJHttdy5jb25maWcuZ2V0KFxuXHRcdFx0XHQnd2dTY3JpcHRQYXRoJ1xuXHRcdFx0KX0vYXBpLnBocD9mb3JtYXQ9anNvbiZhY3Rpb249cXVlcnkmcHJvcD1jYXRlZ29yaWVzJnRpdGxlcz1DYXRlZ29yeTokMSZjbGxpbWl0PW1heGAsXG5cdFx0XHRoYW5kbGVyOiAocXVlcnlSZXN1bHQpID0+IHtcblx0XHRcdFx0aWYgKHF1ZXJ5UmVzdWx0ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5ICYmIHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBwIGluIHF1ZXJ5UmVzdWx0LnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdFx0XHRpZiAocXVlcnlSZXN1bHQucXVlcnkucGFnZXNbcF0uY2F0ZWdvcmllcykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB0aXRsZXMgPSBxdWVyeVJlc3VsdC5xdWVyeS5wYWdlc1twXS5jYXRlZ29yaWVzO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlc1tpXSA9IHRpdGxlc1tpXS50aXRsZS5zbGljZShNYXRoLm1heCgwLCB0aXRsZXNbaV0udGl0bGUuaW5kZXhPZignOicpICsgMSkpO1xuXHRcdFx0XHRcdFx0XHR9IC8vIHJtIG5hbWVzcGFjZVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdGl0bGVzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcblx0Y29uc3Qgc3VnZ2VzdGlvbkNvbmZpZ3MgPSB7XG5cdFx0c2VhcmNoaW5kZXg6IHtcblx0XHRcdG5hbWU6ICdTZWFyY2ggaW5kZXgnLFxuXHRcdFx0ZW5naW5lczogWydvcGVuc2VhcmNoJ10sXG5cdFx0XHRjYWNoZToge30sXG5cdFx0XHRzaG93OiB0cnVlLFxuXHRcdFx0dGVtcDogZmFsc2UsXG5cdFx0XHRub0NvbXBsZXRpb246IGZhbHNlLFxuXHRcdH0sXG5cdFx0cGFnZWxpc3Q6IHtcblx0XHRcdG5hbWU6ICdQYWdlIGxpc3QnLFxuXHRcdFx0ZW5naW5lczogWydpbnRlcm5hbHNlYXJjaCcsICdleGlzdHMnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiBmYWxzZSxcblx0XHRcdG5vQ29tcGxldGlvbjogZmFsc2UsXG5cdFx0fSxcblx0XHRjb21iaW5lZDoge1xuXHRcdFx0bmFtZTogJ0NvbWJpbmVkIHNlYXJjaCcsXG5cdFx0XHRlbmdpbmVzOiBbJ29wZW5zZWFyY2gnLCAnaW50ZXJuYWxzZWFyY2gnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiBmYWxzZSxcblx0XHRcdG5vQ29tcGxldGlvbjogZmFsc2UsXG5cdFx0fSxcblx0XHRzdWJjYXQ6IHtcblx0XHRcdG5hbWU6ICdTdWJjYXRlZ29yaWVzJyxcblx0XHRcdGVuZ2luZXM6IFsnc3ViY2F0ZWdvcmllcyddLFxuXHRcdFx0Y2FjaGU6IHt9LFxuXHRcdFx0c2hvdzogdHJ1ZSxcblx0XHRcdHRlbXA6IHRydWUsXG5cdFx0XHRub0NvbXBsZXRpb246IHRydWUsXG5cdFx0fSxcblx0XHRwYXJlbnRjYXQ6IHtcblx0XHRcdG5hbWU6ICdQYXJlbnQgY2F0ZWdvcmllcycsXG5cdFx0XHRlbmdpbmVzOiBbJ3BhcmVudGNhdGVnb3JpZXMnXSxcblx0XHRcdGNhY2hlOiB7fSxcblx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHR0ZW1wOiB0cnVlLFxuXHRcdFx0bm9Db21wbGV0aW9uOiB0cnVlLFxuXHRcdH0sXG5cdH07XG5cdC8vIEV2ZW50IGtleUNvZGVzIHRoYXQgd2UgaGFuZGxlIGluIHRoZSB0ZXh0IGlucHV0IGZpZWxkL3N1Z2dlc3Rpb24gbGlzdC5cblx0Y29uc3QgQlMgPSA4O1xuXHRjb25zdCBUQUIgPSA5O1xuXHRjb25zdCBSRVQgPSAxMztcblx0Y29uc3QgRVNDID0gMjc7XG5cdGNvbnN0IFNQQUNFID0gMzI7XG5cdGNvbnN0IFBHVVAgPSAzMztcblx0Y29uc3QgUEdET1dOID0gMzQ7XG5cdGNvbnN0IFVQID0gMzg7XG5cdGNvbnN0IERPV04gPSA0MDtcblx0Y29uc3QgREVMID0gNDY7XG5cdGNvbnN0IElNRSA9IDIyOTtcblx0Y2xhc3MgQ2F0ZWdvcnlFZGl0b3Ige1xuXHRcdGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcblx0XHRcdHRoaXMuaW5pdGlhbGl6ZSguLi5hcmdzKTtcblx0XHR9XG5cdFx0aW5pdGlhbGl6ZShsaW5lLCBzcGFuLCBhZnRlciwga2V5LCBpc19oaWRkZW4pIHtcblx0XHRcdC8vIElmIGEgc3BhbiBpcyBnaXZlbiwgJ2FmdGVyJyBpcyB0aGUgY2F0ZWdvcnkgdGl0bGUsIG90aGVyd2lzZSBpdCBtYXkgYmUgYW4gZWxlbWVudCBhZnRlciB3aGljaCB0b1xuXHRcdFx0Ly8gaW5zZXJ0IHRoZSBuZXcgc3Bhbi4gJ2tleScgaXMgbGlrZXdpc2Ugb3ZlcmxvYWRlZDsgaWYgYSBzcGFuIGlzIGdpdmVuLCBpdCBpcyB0aGUgY2F0ZWdvcnkga2V5IChpZlxuXHRcdFx0Ly8ga25vd24pLCBvdGhlcndpc2UgaXQgaXMgYSBib29sZWFuIGluZGljYXRpbmcgd2hldGhlciBhIGJhciBzaGFsbCBiZSBwcmVwZW5kZWQuXG5cdFx0XHRpZiAoc3Bhbikge1xuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0c3Bhbi5kaXIgPSAncnRsJztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmlzQWRkQ2F0ZWdvcnkgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rID0gc3Bhbi5maXJzdENoaWxkO1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgPSBhZnRlcjtcblx0XHRcdFx0dGhpcy5vcmlnaW5hbEtleSA9IGtleSAmJiBrZXkubGVuZ3RoID4gMSA/IGtleS5zbGljZSgxKSA6IG51bGw7IC8vID4gMSBiZWNhdXNlIGl0IGluY2x1ZGVzIHRoZSBsZWFkaW5nIGJhclxuXHRcdFx0XHR0aGlzLm9yaWdpbmFsRXhpc3RzID0gIWhhc0NsYXNzKHRoaXMuY2F0TGluaywgJ25ldycpO1xuXHRcdFx0XHQvLyBDcmVhdGUgY2hhbmdlIGFuZCBkZWwgbGlua3Ncblx0XHRcdFx0dGhpcy5tYWtlTGlua1NwYW4oKTtcblx0XHRcdFx0aWYgKCF0aGlzLm9yaWdpbmFsRXhpc3RzICYmIHRoaXMudXBEb3duTGlua3MpIHtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5saW5rU3Bhbik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmlzQWRkQ2F0ZWdvcnkgPSB0cnVlO1xuXHRcdFx0XHQvLyBDcmVhdGUgYWRkIHNwYW4gYW5kIGFwcGVuZCB0byBjYXRMaW5rc1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkgPSAnJztcblx0XHRcdFx0dGhpcy5vcmlnaW5hbEtleSA9IG51bGw7XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxFeGlzdHMgPSBmYWxzZTtcblx0XHRcdFx0aWYgKCFuZXdET00pIHtcblx0XHRcdFx0XHRzcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHRcdHNwYW4uY2xhc3NOYW1lID0gJ25vcHJpbnQnO1xuXHRcdFx0XHRcdGlmIChrZXkpIHtcblx0XHRcdFx0XHRcdHNwYW4uYXBwZW5kKG1ha2UoJyB8ICcsIHRydWUpKTtcblx0XHRcdFx0XHRcdGlmIChhZnRlcikge1xuXHRcdFx0XHRcdFx0XHRhZnRlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcGFuLCBhZnRlci5uZXh0U2libGluZyk7XG5cdFx0XHRcdFx0XHRcdGFmdGVyID0gYWZ0ZXIubmV4dFNpYmxpbmc7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGxpbmUpIHtcblx0XHRcdFx0XHRcdFx0bGluZS5hcHBlbmQoc3Bhbik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChsaW5lICYmIGxpbmUuZmlyc3RDaGlsZCkge1xuXHRcdFx0XHRcdFx0c3Bhbi5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0XHRcdGxpbmUuYXBwZW5kKHNwYW4pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxpbmtTcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHR0aGlzLmxpbmtTcGFuLmNsYXNzTmFtZSA9ICdub3ByaW50IG5vcG9wdXBzIGhvdGNhdGxpbmsnO1xuXHRcdFx0XHRjb25zdCBsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub3Blbi5iaW5kKHRoaXMpKTtcblx0XHRcdFx0bGluay5hcHBlbmQobWFrZShIQy5saW5rcy5hZGQsIHRydWUpKTtcblx0XHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLWFkZCcpO1xuXHRcdFx0XHR0aGlzLmxpbmtTcGFuLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0c3BhbiA9IG1ha2UobmV3RE9NID8gJ2xpJyA6ICdzcGFuJyk7XG5cdFx0XHRcdHNwYW4uY2xhc3NOYW1lID0gJ25vcHJpbnQnO1xuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0c3Bhbi5kaXIgPSAncnRsJztcblx0XHRcdFx0fVxuXHRcdFx0XHRzcGFuLmFwcGVuZCh0aGlzLmxpbmtTcGFuKTtcblx0XHRcdFx0aWYgKGFmdGVyKSB7XG5cdFx0XHRcdFx0YWZ0ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3BhbiwgYWZ0ZXIubmV4dFNpYmxpbmcpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGxpbmUpIHtcblx0XHRcdFx0XHRsaW5lLmFwcGVuZChzcGFuKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzID0gbnVsbDtcblx0XHRcdFx0dGhpcy51bmRlbExpbmsgPSBudWxsO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsgPSBudWxsO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5vcmlnaW5hbEhpZGRlbiA9IGlzX2hpZGRlbjtcblx0XHRcdHRoaXMubGluZSA9IGxpbmU7XG5cdFx0XHR0aGlzLmVuZ2luZSA9IEhDLnN1Z2dlc3Rpb25zO1xuXHRcdFx0dGhpcy5zcGFuID0gc3Bhbjtcblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5vcmlnaW5hbEV4aXN0cztcblx0XHRcdHRoaXMuY3VycmVudEhpZGRlbiA9IHRoaXMub3JpZ2luYWxIaWRkZW47XG5cdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5zdGF0ZSA9IFVOQ0hBTkdFRDtcblx0XHRcdHRoaXMubGFzdFNhdmVkU3RhdGUgPSBVTkNIQU5HRUQ7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZENhdGVnb3J5ID0gdGhpcy5vcmlnaW5hbENhdGVnb3J5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRLZXkgPSB0aGlzLm9yaWdpbmFsS2V5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRIaWRkZW4gPSB0aGlzLm9yaWdpbmFsSGlkZGVuO1xuXHRcdFx0aWYgKHRoaXMuY2F0TGluayAmJiB0aGlzLmN1cnJlbnRLZXkpIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5O1xuXHRcdFx0fVxuXHRcdFx0ZWRpdG9yc1tlZGl0b3JzLmxlbmd0aF0gPSB0aGlzO1xuXHRcdH1cblx0XHRtYWtlTGlua1NwYW4oKSB7XG5cdFx0XHR0aGlzLm5vcm1hbExpbmtzID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0bGV0IGxpbmsgPSBudWxsO1xuXHRcdFx0aWYgKHRoaXMub3JpZ2luYWxDYXRlZ29yeSAmJiB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnkubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVtb3ZlLmJpbmQodGhpcykpO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKEhDLmxpbmtzLnJlbW92ZSwgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtcmVtb3ZlJyk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKG1ha2UoJyAnLCB0cnVlKSk7XG5cdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFIQy50ZW1wbGF0ZV9jYXRlZ29yaWVzW3RoaXMub3JpZ2luYWxDYXRlZ29yeV0pIHtcblx0XHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0bGluay5ocmVmID0gJyNjYXRsaW5rcyc7XG5cdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9wZW4uYmluZCh0aGlzKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MuY2hhbmdlLCB0cnVlKSk7XG5cdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1jaGFuZ2UnKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQobGluayk7XG5cdFx0XHRcdGlmICghbm9TdWdnZXN0aW9ucyAmJiBIQy51c2VfdXBfZG93bikge1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MgPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0XHRsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kb3duLmJpbmQodGhpcykpO1xuXHRcdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MuZG93biwgdHJ1ZSkpO1xuXHRcdFx0XHRcdGxpbmsudGl0bGUgPSBnZXRNZXNzYWdlKCd0b29sdGlwcy1kb3duJyk7XG5cdFx0XHRcdFx0dGhpcy51cERvd25MaW5rcy5hcHBlbmQobWFrZSgnICcsIHRydWUpKTtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0XHRsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnVwLmJpbmQodGhpcykpO1xuXHRcdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MudXAsIHRydWUpKTtcblx0XHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtdXAnKTtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHRcdHRoaXMudXBEb3duTGlua3MuYXBwZW5kKGxpbmspO1xuXHRcdFx0XHRcdHRoaXMubm9ybWFsTGlua3MuYXBwZW5kKHRoaXMudXBEb3duTGlua3MpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpbmtTcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0dGhpcy5saW5rU3Bhbi5jbGFzc05hbWUgPSAnbm9wcmludCBub3BvcHVwcyBob3RjYXRsaW5rJztcblx0XHRcdHRoaXMubGlua1NwYW4uYXBwZW5kKHRoaXMubm9ybWFsTGlua3MpO1xuXHRcdFx0dGhpcy51bmRlbExpbmsgPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHR0aGlzLnVuZGVsTGluay5jbGFzc05hbWUgPSAnbm9wb3B1cHMgaG90Y2F0bGluayc7XG5cdFx0XHR0aGlzLnVuZGVsTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0bGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdGxpbmsuaHJlZiA9ICcjY2F0bGlua3MnO1xuXHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmVzdG9yZS5iaW5kKHRoaXMpKTtcblx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MucmVzdG9yZSwgdHJ1ZSkpO1xuXHRcdFx0bGluay50aXRsZSA9IGdldE1lc3NhZ2UoJ3Rvb2x0aXBzLXJlc3RvcmUnKTtcblx0XHRcdHRoaXMudW5kZWxMaW5rLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0dGhpcy51bmRlbExpbmsuYXBwZW5kKGxpbmspO1xuXHRcdFx0dGhpcy5saW5rU3Bhbi5hcHBlbmQodGhpcy51bmRlbExpbmspO1xuXHRcdH1cblx0XHRpbnZva2VTdWdnZXN0aW9ucyhkb250X2F1dG9jb21wbGV0ZSkge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHR0aGlzLmVuZ2luZSAmJlxuXHRcdFx0XHRzdWdnZXN0aW9uQ29uZmlnc1t0aGlzLmVuZ2luZV0gJiZcblx0XHRcdFx0c3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdLnRlbXAgJiZcblx0XHRcdFx0IWRvbnRfYXV0b2NvbXBsZXRlXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmUgPSBIQy5zdWdnZXN0aW9ucztcblx0XHRcdH0gLy8gUmVzZXQgdG8gYSBzZWFyY2ggdXBvbiBpbnB1dFxuXHRcdFx0dGhpcy5zdGF0ZSA9IENIQU5HRV9QRU5ESU5HO1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2VsZi50ZXh0Y2hhbmdlKGRvbnRfYXV0b2NvbXBsZXRlKTtcblx0XHRcdH0sIEhDLnN1Z2dlc3RfZGVsYXkpO1xuXHRcdH1cblx0XHRtYWtlRm9ybSgpIHtcblx0XHRcdGNvbnN0IGZvcm0gPSBtYWtlKCdmb3JtJyk7XG5cdFx0XHRmb3JtLm1ldGhvZCA9ICdQT1NUJztcblx0XHRcdGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5hY2NlcHQuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLmZvcm0gPSBmb3JtO1xuXHRcdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0XHRjb25zdCB0ZXh0ID0gbWFrZSgnaW5wdXQnKTtcblx0XHRcdHRleHQudHlwZSA9ICd0ZXh0Jztcblx0XHRcdHRleHQuc2l6ZSA9IEhDLmVkaXRib3hfd2lkdGg7XG5cdFx0XHRpZiAoIW5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0Ly8gQmUgY2FyZWZ1bCBoZXJlIHRvIGhhbmRsZSBJTUUgaW5wdXQuIFRoaXMgaXMgYnJvd3Nlci9PUy9JTUUgZGVwZW5kZW50LCBidXQgYmFzaWNhbGx5IHRoZXJlIGFyZSB0d28gbWVjaGFuaXNtczpcblx0XHRcdFx0Ly8gLSBNb2Rlcm4gKERPTSBMZXZlbCAzKSBicm93c2VycyB1c2UgY29tcG9zaXRpb25zdGFydC9jb21wb3NpdGlvbmVuZCBldmVudHMgdG8gc2lnbmFsIGNvbXBvc2l0aW9uOyBpZiB0aGVcblx0XHRcdFx0Ly8gICBjb21wb3NpdGlvbiBpcyBub3QgY2FuY2VsZWQsIHRoZXJlJ2xsIGJlIGEgdGV4dElucHV0IGV2ZW50IGZvbGxvd2luZy4gRHVyaW5nIGEgY29tcG9zaXRpb24ga2V5IGV2ZW50cyBhcmVcblx0XHRcdFx0Ly8gICBlaXRoZXIgYWxsIHN1cHByZXNzZWQgKEZGL0dlY2tvKSwgb3Igb3RoZXJ3aXNlIGhhdmUga2V5RG93biA9PT0gSU1FIGZvciBhbGwga2V5cyAoV2Via2l0KS5cblx0XHRcdFx0Ly8gICAtIFdlYmtpdCBzZW5kcyBhIHRleHRJbnB1dCBmb2xsb3dlZCBieSBrZXlEb3duID09PSBJTUUgYW5kIGEga2V5VXAgd2l0aCB0aGUga2V5IHRoYXQgZW5kZWQgY29tcG9zaXRpb24uXG5cdFx0XHRcdC8vICAgLSBHZWNrbyBkb2Vzbid0IHNlbmQgdGV4dElucHV0IGJ1dCBqdXN0IGEga2V5VXAgd2l0aCB0aGUga2V5IHRoYXQgZW5kZWQgY29tcG9zaXRpb24sIHdpdGhvdXQgc2VuZGluZyBrZXlEb3duXG5cdFx0XHRcdC8vXHQgZmlyc3QuIEdlY2tvIGRvZXNuJ3Qgc2VuZCBhbnkga2V5ZG93biB3aGlsZSBJTUUgaXMgYWN0aXZlLlxuXHRcdFx0XHQvLyAtIE9sZGVyIGJyb3dzZXJzIHNpZ25hbCBjb21wb3NpdGlvbiBieSBrZXlEb3duID09PSBJTUUgZm9yIHRoZSBmaXJzdCBhbmQgc3Vic2VxdWVudCBrZXlzIGZvciBhIGNvbXBvc2l0aW9uLiBUaGVcblx0XHRcdFx0Ly8gICBmaXJzdCBrZXlEb3duICE9PSBJTUUgaXMgY2VydGFpbmx5IGFmdGVyIHRoZSBlbmQgb2YgdGhlIGNvbXBvc2l0aW9uLiBUeXBpY2FsbHksIGNvbXBvc2l0aW9uIGVuZCBjYW4gYWxzbyBiZVxuXHRcdFx0XHQvLyAgIGRldGVjdGVkIGJ5IGEga2V5RG93biBJTUUgd2l0aCBhIGtleVVwIG9mIHNwYWNlLCB0YWIsIGVzY2FwZSwgb3IgcmV0dXJuLlxuXHRcdFx0XHR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5ID0gZXZlbnQua2V5IHx8IDA7XG5cdFx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdFx0c2VsZi5pbWUgJiZcblx0XHRcdFx0XHRcdHNlbGYubGFzdEtleSA9PT0gSU1FICYmXG5cdFx0XHRcdFx0XHQhc2VsZi51c2VzQ29tcG9zaXRpb24gJiZcblx0XHRcdFx0XHRcdChrZXkgPT09IFRBQiB8fCBrZXkgPT09IFJFVCB8fCBrZXkgPT09IEVTQyB8fCBrZXkgPT09IFNQQUNFKVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHNlbGYuaW1lKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGtleSA9PT0gVVAgfHwga2V5ID09PSBET1dOIHx8IGtleSA9PT0gUEdVUCB8fCBrZXkgPT09IFBHRE9XTikge1xuXHRcdFx0XHRcdFx0Ly8gSW4gY2FzZSBhIGJyb3dzZXIgZG9lc24ndCBnZW5lcmF0ZSBrZXlwcmVzcyBldmVudHMgZm9yIGFycm93IGtleXMuLi5cblx0XHRcdFx0XHRcdGlmIChzZWxmLmtleUNvdW50ID09PSAwKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZWxmLnByb2Nlc3NLZXkoZXZlbnQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRpZiAoa2V5ID09PSBFU0MgJiYgc2VsZi5sYXN0S2V5ICE9PSBJTUUgJiYgIXNlbGYucmVzZXRLZXlTZWxlY3Rpb24oKSkge1xuXHRcdFx0XHRcdFx0XHQvLyBObyB1bmRvIG9mIGtleSBzZWxlY3Rpb246IHRyZWF0IEVTQyBhcyBcImNhbmNlbFwiLlxuXHRcdFx0XHRcdFx0XHRzZWxmLmNhbmNlbCgpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBBbHNvIGRvIHRoaXMgZm9yIEVTQyBhcyBhIHdvcmthcm91bmQgZm9yIEZpcmVmb3ggYnVnIDUyNDM2MFxuXHRcdFx0XHRcdFx0Ly8ge0BsaW5rIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTUyNDM2MH1cblx0XHRcdFx0XHRcdHNlbGYuaW52b2tlU3VnZ2VzdGlvbnMoa2V5ID09PSBCUyB8fCBrZXkgPT09IERFTCB8fCBrZXkgPT09IEVTQyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0dGV4dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0Y29uc3Qga2V5ID0gZXZlbnQua2V5IHx8IDA7XG5cdFx0XHRcdFx0c2VsZi5sYXN0S2V5ID0ga2V5O1xuXHRcdFx0XHRcdHNlbGYua2V5Q291bnQgPSAwO1xuXHRcdFx0XHRcdC8vIERPTSBMZXZlbCA8IDMgSU1FIGlucHV0XG5cdFx0XHRcdFx0aWYgKCFzZWxmLmltZSAmJiBrZXkgPT09IElNRSAmJiAhc2VsZi51c2VzQ29tcG9zaXRpb24pIHtcblx0XHRcdFx0XHRcdC8vIHNlbGYudXNlc0NvbXBvc2l0aW9uIGNhdGNoZXMgYnJvd3NlcnMgdGhhdCBtYXkgZW1pdCBzcHVyaW91cyBrZXlkb3duIElNRSBhZnRlciBhIGNvbXBvc2l0aW9uIGhhcyBlbmRlZFxuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSB0cnVlO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoXG5cdFx0XHRcdFx0XHRzZWxmLmltZSAmJlxuXHRcdFx0XHRcdFx0a2V5ICE9PSBJTUUgJiZcblx0XHRcdFx0XHRcdCEoKGtleSA+PSAxNiAmJiBrZXkgPD0gMjApIHx8IChrZXkgPj0gOTEgJiYga2V5IDw9IDkzKSB8fCBrZXkgPT09IDE0NClcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdC8vIElnbm9yZSBjb250cm9sIGtleXM6IGN0cmwsIHNoaWZ0LCBhbHQsIGFsdCBnciwgY2FwcyBsb2NrLCB3aW5kb3dzL2FwcGxlIGNtZCBrZXlzLCBudW0gbG9jay4gT25seSB0aGUgd2luZG93cyBrZXlzXG5cdFx0XHRcdFx0XHQvLyB0ZXJtaW5hdGUgSU1FIChhcHBsZSBjbWQgZG9lc24ndCksIGJ1dCB0aGV5IGFsc28gY2F1c2UgYSBibHVyLCBzbyBpdCdzIE9LIHRvIGlnbm9yZSB0aGVtIGhlcmUuXG5cdFx0XHRcdFx0XHQvLyBOb3RlOiBTYWZhcmkgNCAoNTMwLjE3KSBwcm9wYWdhdGVzIEVTQyBvdXQgb2YgYW4gSU1FIGNvbXBvc2l0aW9uIChvYnNlcnZlZCBhdCBsZWFzdCBvbiBXaW4gWFApLlxuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHNlbGYuaW1lKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gSGFuZGxlIHJldHVybiBleHBsaWNpdGx5LCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb24gdG8gYmUgYWJsZSB0byBjaGVjayBmb3IgY3RybFxuXHRcdFx0XHRcdGlmIChrZXkgPT09IFJFVCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHNlbGYuYWNjZXB0KGV2ZW50KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gSW5oaWJpdCBkZWZhdWx0IGJlaGF2aW9yIG9mIEVTQyAocmV2ZXJ0IHRvIGxhc3QgcmVhbCBpbnB1dCBpbiBGRjogd2UgZG8gdGhhdCBvdXJzZWx2ZXMpXG5cdFx0XHRcdFx0cmV0dXJuIGtleSA9PT0gRVNDID8gZXZ0S2lsbChldmVudCkgOiB0cnVlO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly8gQW5kIGhhbmRsZSBjb250aW51ZWQgcHJlc3Npbmcgb2YgYXJyb3cga2V5c1xuXHRcdFx0XHR0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5rZXlDb3VudCsrO1xuXHRcdFx0XHRcdHJldHVybiBzZWxmLnByb2Nlc3NLZXkoZXZlbnQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0JCh0ZXh0KS5vbignZm9jdXMnLCAoKSA9PiB7XG5cdFx0XHRcdFx0bWFrZUFjdGl2ZShzZWxmKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIE9uIElFLCBibHVyIGV2ZW50cyBhcmUgYXN5bmNocm9ub3VzLCBhbmQgbWF5IHRodXMgYXJyaXZlIGFmdGVyIHRoZSBlbGVtZW50IGhhcyBsb3N0IHRoZSBmb2N1cy4gU2luY2UgSUVcblx0XHRcdFx0Ly8gY2FuIGdldCB0aGUgc2VsZWN0aW9uIG9ubHkgd2hpbGUgdGhlIGVsZW1lbnQgaXMgYWN0aXZlIChoYXMgdGhlIGZvY3VzKSwgd2UgbWF5IG5vdCBhbHdheXMgZ2V0IHRoZSBzZWxlY3Rpb24uXG5cdFx0XHRcdC8vIFRoZXJlZm9yZSwgdXNlIGFuIElFLXNwZWNpZmljIHN5bmNocm9ub3VzIGV2ZW50IG9uIElFLi4uXG5cdFx0XHRcdC8vIERvbid0IHRlc3QgZm9yIHRleHQuc2VsZWN0aW9uU3RhcnQgYmVpbmcgZGVmaW5lZDtcblx0XHRcdFx0JCh0ZXh0KS5vbihcblx0XHRcdFx0XHR0ZXh0Lm9uYmVmb3JlZGVhY3RpdmF0ZSAhPT0gdW5kZWZpbmVkICYmIHRleHQuY3JlYXRlVGV4dFJhbmdlID8gJ2JlZm9yZWRlYWN0aXZhdGUnIDogJ2JsdXInLFxuXHRcdFx0XHRcdHRoaXMuc2F2ZVZpZXcuYmluZCh0aGlzKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHQvLyBET00gTGV2ZWwgMyBJTUUgaGFuZGxpbmdcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBTZXR0aW5nIGxhc3RLZXkgPSBJTUUgcHJvdmlkZXMgYSBmYWtlIGtleURvd24gZm9yIEdlY2tvJ3Mgc2luZ2xlIGtleVVwIGFmdGVyIGEgY21wb3NpdGlvbi4gSWYgd2UgZGlkbid0IGRvIHRoaXMsXG5cdFx0XHRcdFx0Ly8gY2FuY2VsbGluZyBhIGNvbXBvc2l0aW9uIHZpYSBFU0Mgd291bGQgYWxzbyBjYW5jZWwgYW5kIGNsb3NlIHRoZSB3aG9sZSBjYXRlZ29yeSBpbnB1dCBlZGl0b3IuXG5cdFx0XHRcdFx0JCh0ZXh0KS5vbignY29tcG9zaXRpb25zdGFydCcsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYubGFzdEtleSA9IElNRTtcblx0XHRcdFx0XHRcdHNlbGYudXNlc0NvbXBvc2l0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gdHJ1ZTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQkKHRleHQpLm9uKCdjb21wb3NpdGlvbmVuZCcsICgpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYubGFzdEtleSA9IElNRTtcblx0XHRcdFx0XHRcdHNlbGYudXNlc0NvbXBvc2l0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRcdHNlbGYuaW1lID0gZmFsc2U7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0JCh0ZXh0KS5vbigndGV4dElucHV0JywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0XHRcdHNlbGYuaW52b2tlU3VnZ2VzdGlvbnMoZmFsc2UpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvLyBKdXN0IGluIGNhc2Ugc29tZSBicm93c2VycyBtaWdodCBwcm9kdWNlIGV4Y2VwdGlvbnMgd2l0aCB0aGVzZSBET00gTGV2ZWwgMyBldmVudHNcblx0XHRcdFx0fVxuXHRcdFx0XHQkKHRleHQpLm9uKCdibHVyJywgKCkgPT4ge1xuXHRcdFx0XHRcdHNlbGYudXNlc0NvbXBvc2l0aW9uID0gZmFsc2U7XG5cdFx0XHRcdFx0c2VsZi5pbWUgPSBmYWxzZTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnRleHQgPSB0ZXh0O1xuXHRcdFx0dGhpcy5pY29uID0gbWFrZSgnaW1nJyk7XG5cdFx0XHRsZXQgbGlzdCA9IG51bGw7XG5cdFx0XHRpZiAoIW5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0bGlzdCA9IG1ha2UoJ3NlbGVjdCcpO1xuXHRcdFx0XHRsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChzZWxmLmhpZ2hsaWdodFN1Z2dlc3Rpb24oMCkpIHtcblx0XHRcdFx0XHRcdHNlbGYudGV4dGNoYW5nZShmYWxzZSwgdHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdkYmxjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKHNlbGYuaGlnaGxpZ2h0U3VnZ2VzdGlvbigwKSkge1xuXHRcdFx0XHRcdFx0c2VsZi5hY2NlcHQoZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG5cdFx0XHRcdFx0c2VsZi5oaWdobGlnaHRTdWdnZXN0aW9uKDApO1xuXHRcdFx0XHRcdHNlbGYudGV4dC5mb2N1cygpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0bGlzdC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGlmIChldmVudC5rZXkgPT09IEVTQykge1xuXHRcdFx0XHRcdFx0c2VsZi5yZXNldEtleVNlbGVjdGlvbigpO1xuXHRcdFx0XHRcdFx0c2VsZi50ZXh0LmZvY3VzKCk7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0c2VsZi50ZXh0Y2hhbmdlKHRydWUpO1xuXHRcdFx0XHRcdFx0fSwgSEMuc3VnZ2VzdF9kZWxheSk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChldmVudC5rZXkgPT09IFJFVCkge1xuXHRcdFx0XHRcdFx0c2VsZi5hY2NlcHQoZXZlbnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmICghSEMuZml4ZWRfc2VhcmNoKSB7XG5cdFx0XHRcdFx0Y29uc3QgZW5naW5lU2VsZWN0b3IgPSBtYWtlKCdzZWxlY3QnKTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGtleSBpbiBzdWdnZXN0aW9uQ29uZmlncykge1xuXHRcdFx0XHRcdFx0aWYgKHN1Z2dlc3Rpb25Db25maWdzW2tleV0uc2hvdykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBvcHQgPSBtYWtlKCdvcHRpb24nKTtcblx0XHRcdFx0XHRcdFx0b3B0LnZhbHVlID0ga2V5O1xuXHRcdFx0XHRcdFx0XHRpZiAoa2V5ID09PSB0aGlzLmVuZ2luZSkge1xuXHRcdFx0XHRcdFx0XHRcdG9wdC5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0b3B0LmFwcGVuZChtYWtlKHN1Z2dlc3Rpb25Db25maWdzW2tleV0ubmFtZSwgdHJ1ZSkpO1xuXHRcdFx0XHRcdFx0XHRlbmdpbmVTZWxlY3Rvci5hcHBlbmQob3B0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZW5naW5lU2VsZWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0c2VsZi5lbmdpbmUgPSBzZWxmLmVuZ2luZVNlbGVjdG9yLm9wdGlvbnNbc2VsZi5lbmdpbmVTZWxlY3Rvci5zZWxlY3RlZEluZGV4XS52YWx1ZTtcblx0XHRcdFx0XHRcdHNlbGYudGV4dC5mb2N1cygpO1xuXHRcdFx0XHRcdFx0c2VsZi50ZXh0Y2hhbmdlKHRydWUsIHRydWUpOyAvLyBEb24ndCBhdXRvY29tcGxldGUsIGZvcmNlIHJlLWRpc3BsYXkgb2YgbGlzdFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3IgPSBlbmdpbmVTZWxlY3Rvcjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5saXN0ID0gbGlzdDtcblx0XHRcdGNvbnN0IGJ1dHRvbl9sYWJlbCA9IChfaWQsIGRlZmF1bHRUZXh0KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGxhYmVsID0gbnVsbDtcblx0XHRcdFx0aWYgKCFsYWJlbCB8fCAhbGFiZWwuZGF0YSkge1xuXHRcdFx0XHRcdHJldHVybiBkZWZhdWx0VGV4dDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbGFiZWwuZGF0YTtcblx0XHRcdH07XG5cdFx0XHQvLyBEbyBub3QgdXNlIHR5cGUgJ3N1Ym1pdCc7IHdlIGNhbm5vdCBkZXRlY3QgbW9kaWZpZXIga2V5cyBpZiB3ZSBkb1xuXHRcdFx0Y29uc3QgT0sgPSBtYWtlKCdpbnB1dCcpO1xuXHRcdFx0T0sudHlwZSA9ICdidXR0b24nO1xuXHRcdFx0T0sudmFsdWUgPSBidXR0b25fbGFiZWwoJ3dwT2tVcGxvYWRMYmwnLCBnZXRNZXNzYWdlKCdtZXNzYWdlcy1vaycpKTtcblx0XHRcdE9LLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hY2NlcHQuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLm9rID0gT0s7XG5cdFx0XHRjb25zdCBjYW5jZWwgPSBtYWtlKCdpbnB1dCcpO1xuXHRcdFx0Y2FuY2VsLnR5cGUgPSAnYnV0dG9uJztcblx0XHRcdGNhbmNlbC52YWx1ZSA9IGJ1dHRvbl9sYWJlbCgnd3BDYW5jZWxVcGxvYWRMYmwnLCBnZXRNZXNzYWdlKCdtZXNzYWdlcy1jYW5jZWwnKSk7XG5cdFx0XHRjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpKTtcblx0XHRcdHRoaXMuY2FuY2VsQnV0dG9uID0gY2FuY2VsO1xuXHRcdFx0Y29uc3Qgc3BhbiA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdHNwYW4uY2xhc3NOYW1lID0gJ2hvdGNhdGlucHV0Jztcblx0XHRcdHNwYW4uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuXHRcdFx0c3Bhbi5hcHBlbmQodGV4dCk7XG5cdFx0XHQvLyBQdXQgc29tZSB0ZXh0IGludG8gdGhpcyBzcGFuIChhMCBpcyBuYnNwKSBhbmQgbWFrZSBzdXJlIGl0IGFsd2F5cyBzdGF5cyBvbiB0aGUgc2FtZVxuXHRcdFx0Ly8gbGluZSBhcyB0aGUgaW5wdXQgZmllbGQsIG90aGVyd2lzZSwgSUU4LzkgbWlzY2FsY3VsYXRlcyB0aGUgaGVpZ2h0IG9mIHRoZSBzcGFuIGFuZFxuXHRcdFx0Ly8gdGhlbiB0aGUgZW5naW5lIHNlbGVjdG9yIG1heSBvdmVybGFwIHRoZSBpbnB1dCBmaWVsZC5cblx0XHRcdHNwYW4uYXBwZW5kKG1ha2UoJ1xcdTAwQTAnLCB0cnVlKSk7XG5cdFx0XHRzcGFuLnN0eWxlLndoaXRlU3BhY2UgPSAnbm93cmFwJztcblx0XHRcdGlmIChsaXN0KSB7XG5cdFx0XHRcdHNwYW4uYXBwZW5kKGxpc3QpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5lbmdpbmVTZWxlY3Rvcik7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIW5vU3VnZ2VzdGlvbnMpIHtcblx0XHRcdFx0c3Bhbi5hcHBlbmQodGhpcy5pY29uKTtcblx0XHRcdH1cblx0XHRcdHNwYW4uYXBwZW5kKE9LKTtcblx0XHRcdHNwYW4uYXBwZW5kKGNhbmNlbCk7XG5cdFx0XHRmb3JtLmFwcGVuZChzcGFuKTtcblx0XHRcdGZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdHRoaXMuc3Bhbi5hcHBlbmQoZm9ybSk7XG5cdFx0fVxuXHRcdGRpc3BsYXkoZXZlbnQpIHtcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkgJiYgIW9uVXBsb2FkICYmIHRoaXMubGluZSkge1xuXHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IodGhpcy5saW5lLCBudWxsLCB0aGlzLnNwYW4sIHRydWUpOyAvLyBDcmVhdGUgYSBuZXcgb25lXG5cdFx0XHR9XG5cdFx0XHRpZiAoIWNvbW1pdEJ1dHRvbiAmJiAhb25VcGxvYWQpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0XHRcdGlmIChlZGl0b3Iuc3RhdGUgIT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHRcdFx0c2V0TXVsdGlJbnB1dCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXRoaXMuZm9ybSkge1xuXHRcdFx0XHR0aGlzLm1ha2VGb3JtKCk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB0aGlzLmxhc3RTYXZlZENhdGVnb3J5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5sYXN0U2F2ZWRFeGlzdHM7XG5cdFx0XHR0aGlzLmN1cnJlbnRIaWRkZW4gPSB0aGlzLmxhc3RTYXZlZEhpZGRlbjtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IHRoaXMubGFzdFNhdmVkS2V5O1xuXHRcdFx0dGhpcy5pY29uLnNyYyA9IHRoaXMuY3VycmVudEV4aXN0cyA/IEhDLmV4aXN0c1llcyA6IEhDLmV4aXN0c05vO1xuXHRcdFx0dGhpcy50ZXh0LnZhbHVlID0gdGhpcy5jdXJyZW50Q2F0ZWdvcnkgKyAodGhpcy5jdXJyZW50S2V5ID09PSBudWxsID8gJycgOiBgfCR7dGhpcy5jdXJyZW50S2V5fWApO1xuXHRcdFx0dGhpcy5vcmlnaW5hbFN0YXRlID0gdGhpcy5zdGF0ZTtcblx0XHRcdHRoaXMubGFzdElucHV0ID0gdGhpcy5jdXJyZW50Q2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmlucHV0RXhpc3RzID0gdGhpcy5jdXJyZW50RXhpc3RzO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IHRoaXMuc3RhdGUgPT09IFVOQ0hBTkdFRCA/IE9QRU4gOiBDSEFOR0VfUEVORElORztcblx0XHRcdHRoaXMubGFzdFNlbGVjdGlvbiA9IHtcblx0XHRcdFx0c3RhcnQ6IHRoaXMuY3VycmVudENhdGVnb3J5Lmxlbmd0aCxcblx0XHRcdFx0ZW5kOiB0aGlzLmN1cnJlbnRDYXRlZ29yeS5sZW5ndGgsXG5cdFx0XHR9O1xuXHRcdFx0dGhpcy5zaG93c0xpc3QgPSBmYWxzZTtcblx0XHRcdC8vIERpc3BsYXkgdGhlIGZvcm1cblx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpbmtTcGFuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR0aGlzLmZvcm0uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xuXHRcdFx0dGhpcy5vay5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdFx0Ly8gS2lsbCB0aGUgZXZlbnQgYmVmb3JlIGZvY3Vzc2luZywgb3RoZXJ3aXNlIElFIHdpbGwga2lsbCB0aGUgb25mb2N1cyBldmVudCFcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0dGhpcy50ZXh0LmZvY3VzKCk7XG5cdFx0XHR0aGlzLnRleHQucmVhZE9ubHkgPSBmYWxzZTtcblx0XHRcdGNoZWNrTXVsdGlJbnB1dCgpO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0c2hvdyhldmVudCwgZW5naW5lLCByZWFkT25seSkge1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5kaXNwbGF5KGV2ZW50KTtcblx0XHRcdGNvbnN0IHYgPSB0aGlzLmxhc3RTYXZlZENhdGVnb3J5O1xuXHRcdFx0aWYgKHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnRleHQucmVhZE9ubHkgPSAhIXJlYWRPbmx5O1xuXHRcdFx0dGhpcy5lbmdpbmUgPSBlbmdpbmU7XG5cdFx0XHR0aGlzLnRleHRjaGFuZ2UoZmFsc2UsIHRydWUpOyAvLyBkbyBhdXRvY29tcGxldGlvbiwgZm9yY2UgZGlzcGxheSBvZiBzdWdnZXN0aW9uc1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0b3BlbihldmVudCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdyhldmVudCwgdGhpcy5lbmdpbmUgJiYgc3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdLnRlbXAgPyBIQy5zdWdnZXN0aW9ucyA6IHRoaXMuZW5naW5lKTtcblx0XHR9XG5cdFx0ZG93bihldmVudCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdyhldmVudCwgJ3N1YmNhdCcsIHRydWUpO1xuXHRcdH1cblx0XHR1cChldmVudCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2hvdyhldmVudCwgJ3BhcmVudGNhdCcpO1xuXHRcdH1cblx0XHRjYW5jZWwoKSB7XG5cdFx0XHRpZiAodGhpcy5pc0FkZENhdGVnb3J5ICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHR0aGlzLnJlbW92ZUVkaXRvcigpOyAvLyBXZSBhZGRlZCBhIG5ldyBhZGRlciB3aGVuIG9wZW5pbmdcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQ2xvc2UsIHJlLWRpc3BsYXkgbGlua1xuXHRcdFx0dGhpcy5pbmFjdGl2YXRlKCk7XG5cdFx0XHR0aGlzLmZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdH1cblx0XHRcdHRoaXMubGlua1NwYW4uc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0dGhpcy5zdGF0ZSA9IHRoaXMub3JpZ2luYWxTdGF0ZTtcblx0XHRcdHRoaXMuY3VycmVudENhdGVnb3J5ID0gdGhpcy5sYXN0U2F2ZWRDYXRlZ29yeTtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IHRoaXMubGFzdFNhdmVkS2V5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5sYXN0U2F2ZWRFeGlzdHM7XG5cdFx0XHR0aGlzLmN1cnJlbnRIaWRkZW4gPSB0aGlzLmxhc3RTYXZlZEhpZGRlbjtcblx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5ICYmIHRoaXMuY3VycmVudEtleS5sZW5ndGggPiAwID8gdGhpcy5jdXJyZW50S2V5IDogJyc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5zdGF0ZSA9PT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdGlmICh0aGlzLmNhdExpbmspIHtcblx0XHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICghb25VcGxvYWQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gSEMuYmdfY2hhbmdlZDtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0fVxuXHRcdHJlbW92ZUVkaXRvcigpIHtcblx0XHRcdGlmICghbmV3RE9NKSB7XG5cdFx0XHRcdGNvbnN0IG5leHQgPSB0aGlzLnNwYW4ubmV4dFNpYmxpbmc7XG5cdFx0XHRcdGlmIChuZXh0KSB7XG5cdFx0XHRcdFx0bmV4dC5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMuc3BhbiAmJiB0aGlzLnNwYW4ucGFyZW50Tm9kZSkge1xuXHRcdFx0XHR0aGlzLnNwYW4ucmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGVkaXRvcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKGVkaXRvcnNbaV0gPT09IHRoaXMpIHtcblx0XHRcdFx0XHRlZGl0b3JzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0fVxuXHRcdHJvbGxiYWNrKGV2ZW50KSB7XG5cdFx0XHR0aGlzLnVuZG9MaW5rLnJlbW92ZSgpO1xuXHRcdFx0dGhpcy51bmRvTGluayA9IG51bGw7XG5cdFx0XHR0aGlzLmN1cnJlbnRDYXRlZ29yeSA9IHRoaXMub3JpZ2luYWxDYXRlZ29yeTtcblx0XHRcdHRoaXMuY3VycmVudEtleSA9IHRoaXMub3JpZ2luYWxLZXk7XG5cdFx0XHR0aGlzLmN1cnJlbnRFeGlzdHMgPSB0aGlzLm9yaWdpbmFsRXhpc3RzO1xuXHRcdFx0dGhpcy5jdXJyZW50SGlkZGVuID0gdGhpcy5vcmlnaW5hbEhpZGRlbjtcblx0XHRcdHRoaXMubGFzdFNhdmVkQ2F0ZWdvcnkgPSB0aGlzLm9yaWdpbmFsQ2F0ZWdvcnk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEtleSA9IHRoaXMub3JpZ2luYWxLZXk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEV4aXN0cyA9IHRoaXMub3JpZ2luYWxFeGlzdHM7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEhpZGRlbiA9IHRoaXMub3JpZ2luYWxIaWRkZW47XG5cdFx0XHR0aGlzLnN0YXRlID0gVU5DSEFOR0VEO1xuXHRcdFx0aWYgKCF0aGlzLmN1cnJlbnRDYXRlZ29yeSB8fCB0aGlzLmN1cnJlbnRDYXRlZ29yeS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0Ly8gSXQgd2FzIGEgbmV3bHkgYWRkZWQgY2F0ZWdvcnkuIFJlbW92ZSB0aGUgd2hvbGUgZWRpdG9yLlxuXHRcdFx0XHR0aGlzLnJlbW92ZUVkaXRvcigpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gUmVkaXNwbGF5IHRoZSBsaW5rLi4uXG5cdFx0XHRcdHRoaXMuY2F0TGluay5maXJzdENoaWxkLnJlbW92ZSgpO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuYXBwZW5kKG1ha2UodGhpcy5jdXJyZW50Q2F0ZWdvcnksIHRydWUpKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLmhyZWYgPSB3aWtpUGFnZVBhdGgoYCR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke3RoaXMuY3VycmVudENhdGVnb3J5fWApO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsudGl0bGUgPSB0aGlzLmN1cnJlbnRLZXkgfHwgJyc7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5jbGFzc05hbWUgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyAnJyA6ICduZXcnO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50Jztcblx0XHRcdFx0aWYgKHRoaXMudXBEb3duTGlua3MpIHtcblx0XHRcdFx0XHR0aGlzLnVwRG93bkxpbmtzLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyAnJyA6ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHR9XG5cdFx0aW5hY3RpdmF0ZSgpIHtcblx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmlzX2FjdGl2ZSA9IGZhbHNlO1xuXHRcdH1cblx0XHRhY2NlcHRDaGVjayhkb250Q2hlY2spIHtcblx0XHRcdHRoaXMuc2FuaXRpemVJbnB1dCgpO1xuXHRcdFx0Y29uc3QgdmFsdWUgPSB0aGlzLnRleHQudmFsdWUuc3BsaXQoJ3wnKTtcblx0XHRcdGxldCBrZXkgPSBudWxsO1xuXHRcdFx0aWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcblx0XHRcdFx0Wywga2V5XSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHYgPSB2YWx1ZVswXS5yZXBsYWNlKC9fL2csICcgJykudHJpbSgpO1xuXHRcdFx0aWYgKEhDLmNhcGl0YWxpemVQYWdlTmFtZXMpIHtcblx0XHRcdFx0diA9IGNhcGl0YWxpemUodik7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHY7XG5cdFx0XHR2ID0gcmVwbGFjZVNob3J0Y3V0cyh2LCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0aWYgKHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0IWRvbnRDaGVjayAmJlxuXHRcdFx0XHQoKGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0ICYmIHYgPT09IGNvbmYud2dUaXRsZSkgfHwgKEhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdCh2KSkpXG5cdFx0XHQpIHtcblx0XHRcdFx0dGhpcy5jYW5jZWwoKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jdXJyZW50Q2F0ZWdvcnkgPSB2O1xuXHRcdFx0dGhpcy5jdXJyZW50S2V5ID0ga2V5O1xuXHRcdFx0dGhpcy5jdXJyZW50RXhpc3RzID0gdGhpcy5pbnB1dEV4aXN0cztcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRhY2NlcHQoZXZlbnQpIHtcblx0XHRcdC8vIChldnRLZXlzKGV2ZW50KSAmIDEpICE9PSAwXG5cdFx0XHQvLyDlvZPkuJTku4XlvZNldnRLZXlzKGV2ZW50KeS4ujHml7bvvIzmlbTkuKrliKTliKvlvI/miY3kuLp0cnVlXG5cdFx0XHR0aGlzLm5vQ29tbWl0ID0gZXZ0S2V5cyhldmVudCkgPT09IDE7XG5cdFx0XHRjb25zdCByZXN1bHQgPSBldnRLaWxsKGV2ZW50KTtcblx0XHRcdGlmICh0aGlzLmFjY2VwdENoZWNrKCkpIHtcblx0XHRcdFx0Y29uc3QgdG9SZXNvbHZlID0gW3RoaXNdO1xuXHRcdFx0XHRjb25zdCBvcmlnaW5hbCA9IHRoaXMuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0XHRyZXNvbHZlTXVsdGkodG9SZXNvbHZlLCAocmVzb2x2ZWQpID0+IHtcblx0XHRcdFx0XHRpZiAocmVzb2x2ZWRbMF0uZGFiKSB7XG5cdFx0XHRcdFx0XHRzaG93RGFiKHJlc29sdmVkWzBdKTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHJlc29sdmVkWzBdLmFjY2VwdENoZWNrKHRydWUpKSB7XG5cdFx0XHRcdFx0XHRyZXNvbHZlZFswXS5jb21taXQoXG5cdFx0XHRcdFx0XHRcdHJlc29sdmVkWzBdLmN1cnJlbnRDYXRlZ29yeSA9PT0gb3JpZ2luYWxcblx0XHRcdFx0XHRcdFx0XHQ/IG51bGxcblx0XHRcdFx0XHRcdFx0XHQ6IGdldE1lc3NhZ2UoJ21lc3NhZ2VzLWNhdF9yZXNvbHZlZCcsIG9yaWdpbmFsKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdFx0Y2xvc2UoKSB7XG5cdFx0XHRpZiAoIXRoaXMuY2F0TGluaykge1xuXHRcdFx0XHQvLyBDcmVhdGUgYSBjYXRMaW5rXG5cdFx0XHRcdHRoaXMuY2F0TGluayA9IG1ha2UoJ2EnKTtcblx0XHRcdFx0dGhpcy5jYXRMaW5rLmFwcGVuZChtYWtlKCdmb28nLCB0cnVlKSk7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR0aGlzLnNwYW4uaW5zZXJ0QmVmb3JlKHRoaXMuY2F0TGluaywgdGhpcy5zcGFuLmZpcnN0Q2hpbGQubmV4dFNpYmxpbmcpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5jYXRMaW5rLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG5cdFx0XHR0aGlzLmNhdExpbmsuYXBwZW5kKG1ha2UodGhpcy5jdXJyZW50Q2F0ZWdvcnksIHRydWUpKTtcblx0XHRcdHRoaXMuY2F0TGluay5ocmVmID0gd2lraVBhZ2VQYXRoKGAke0hDLmNhdGVnb3J5X2Nhbm9uaWNhbH06JHt0aGlzLmN1cnJlbnRDYXRlZ29yeX1gKTtcblx0XHRcdHRoaXMuY2F0TGluay5jbGFzc05hbWUgPSB0aGlzLmN1cnJlbnRFeGlzdHMgPyAnJyA6ICduZXcnO1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRDYXRlZ29yeSA9IHRoaXMuY3VycmVudENhdGVnb3J5O1xuXHRcdFx0dGhpcy5sYXN0U2F2ZWRLZXkgPSB0aGlzLmN1cnJlbnRLZXk7XG5cdFx0XHR0aGlzLmxhc3RTYXZlZEV4aXN0cyA9IHRoaXMuY3VycmVudEV4aXN0cztcblx0XHRcdHRoaXMubGFzdFNhdmVkSGlkZGVuID0gdGhpcy5jdXJyZW50SGlkZGVuO1xuXHRcdFx0Ly8gQ2xvc2UgZm9ybSBhbmQgcmVkaXNwbGF5IGNhdGVnb3J5XG5cdFx0XHR0aGlzLmluYWN0aXZhdGUoKTtcblx0XHRcdHRoaXMuZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0dGhpcy5jYXRMaW5rLnRpdGxlID0gdGhpcy5jdXJyZW50S2V5IHx8ICcnO1xuXHRcdFx0dGhpcy5jYXRMaW5rLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdGlmICh0aGlzLmlzQWRkQ2F0ZWdvcnkpIHtcblx0XHRcdFx0aWYgKG9uVXBsb2FkICYmIHRoaXMubGluZSkge1xuXHRcdFx0XHRcdG5ldyBDYXRlZ29yeUVkaXRvcih0aGlzLmxpbmUsIG51bGwsIHRoaXMuc3BhbiwgdHJ1ZSk7IC8vIENyZWF0ZSBhIG5ldyBvbmVcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmlzQWRkQ2F0ZWdvcnkgPSBmYWxzZTtcblx0XHRcdFx0dGhpcy5saW5rU3Bhbi5yZW1vdmUoKTtcblx0XHRcdFx0dGhpcy5tYWtlTGlua1NwYW4oKTtcblx0XHRcdFx0dGhpcy5zcGFuLmFwcGVuZCh0aGlzLmxpbmtTcGFuKTtcblx0XHRcdH1cblx0XHRcdGlmICghdGhpcy51bmRvTGluaykge1xuXHRcdFx0XHQvLyBBcHBlbmQgYW4gdW5kbyBsaW5rLlxuXHRcdFx0XHRjb25zdCBzcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHRjb25zdCBsaW5rID0gbWFrZSgnYScpO1xuXHRcdFx0XHRsaW5rLmhyZWYgPSAnI2NhdGxpbmtzJztcblx0XHRcdFx0bGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucm9sbGJhY2suYmluZCh0aGlzKSk7XG5cdFx0XHRcdGxpbmsuYXBwZW5kKG1ha2UoSEMubGlua3MudW5kbywgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgndG9vbHRpcHMtdW5kbycpO1xuXHRcdFx0XHRzcGFuLmFwcGVuZChtYWtlKCcgJywgdHJ1ZSkpO1xuXHRcdFx0XHRzcGFuLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5hcHBlbmQoc3Bhbik7XG5cdFx0XHRcdHRoaXMudW5kb0xpbmsgPSBzcGFuO1xuXHRcdFx0XHRpZiAoIW9uVXBsb2FkKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBIQy5iZ19jaGFuZ2VkO1xuXHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnVwRG93bkxpbmtzKSB7XG5cdFx0XHRcdHRoaXMudXBEb3duTGlua3Muc3R5bGUuZGlzcGxheSA9IHRoaXMubGFzdFNhdmVkRXhpc3RzID8gJycgOiAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpbmtTcGFuLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdHRoaXMuc3RhdGUgPSBDSEFOR0VEO1xuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0fVxuXHRcdGNvbW1pdCgpIHtcblx0XHRcdC8vIENoZWNrIGFnYWluIHRvIGNhdGNoIHByb2JsZW0gY2FzZXMgYWZ0ZXIgcmVkaXJlY3QgcmVzb2x1dGlvblxuXHRcdFx0aWYgKFxuXHRcdFx0XHQodGhpcy5jdXJyZW50Q2F0ZWdvcnkgPT09IHRoaXMub3JpZ2luYWxDYXRlZ29yeSAmJlxuXHRcdFx0XHRcdCh0aGlzLmN1cnJlbnRLZXkgPT09IHRoaXMub3JpZ2luYWxLZXkgfHxcblx0XHRcdFx0XHRcdCh0aGlzLmN1cnJlbnRLZXkgPT09IG51bGwgJiYgdGhpcy5vcmlnaW5hbEtleS5sZW5ndGggPT09IDApKSkgfHxcblx0XHRcdFx0KGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0ICYmIHRoaXMuY3VycmVudENhdGVnb3J5ID09PSBjb25mLndnVGl0bGUpIHx8XG5cdFx0XHRcdChIQy5ibGFja2xpc3QgJiYgSEMuYmxhY2tsaXN0LnRlc3QodGhpcy5jdXJyZW50Q2F0ZWdvcnkpKVxuXHRcdFx0KSB7XG5cdFx0XHRcdHRoaXMuY2FuY2VsKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRoaXMuY2xvc2UoKTtcblx0XHRcdGlmICghY29tbWl0QnV0dG9uICYmICFvblVwbG9hZCkge1xuXHRcdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdFx0aW5pdGlhdGVFZGl0KFxuXHRcdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlLCBzZWxmKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHRcdG13Lm5vdGlmeShtc2csIHt0YWc6ICdob3RDYXQnfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZW1vdmUoZXZlbnQpIHtcblx0XHRcdC8vIChldnRLZXlzKGV2ZW50KSAmIDEpXG5cdFx0XHQvLyDlvZPkuJTku4XlvZNldnRLZXlzKGV2ZW50KeS4ujHml7bvvIzmlbTkuKrliKTliKvlvI/miY3kuLox77yM5ZCm5YiZ6YO95pivMFxuXHRcdFx0dGhpcy5kb1JlbW92ZShldnRLZXlzKGV2ZW50KSA9PT0gMSk7XG5cdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0fVxuXHRcdGRvUmVtb3ZlKG5vQ29tbWl0KSB7XG5cdFx0XHRpZiAodGhpcy5pc0FkZENhdGVnb3J5KSB7XG5cdFx0XHRcdC8vIEVtcHR5IGlucHV0IG9uIGFkZGluZyBhIG5ldyBjYXRlZ29yeVxuXHRcdFx0XHR0aGlzLmNhbmNlbCgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWNvbW1pdEJ1dHRvbiAmJiAhb25VcGxvYWQpIHtcblx0XHRcdFx0Zm9yIChjb25zdCBlZGl0b3Igb2YgZWRpdG9ycykge1xuXHRcdFx0XHRcdGlmIChlZGl0b3Iuc3RhdGUgIT09IFVOQ0hBTkdFRCkge1xuXHRcdFx0XHRcdFx0c2V0TXVsdGlJbnB1dCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoY29tbWl0QnV0dG9uKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay50aXRsZSA9ICcnO1xuXHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuY3NzVGV4dCArPSAnOyB0ZXh0LWRlY29yYXRpb24gOiBsaW5lLXRocm91Z2ggIWltcG9ydGFudDsnO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBIQy5iZ19jaGFuZ2VkO1xuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHQvKiBlbXB0eSAqL1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMub3JpZ2luYWxTdGF0ZSA9IHRoaXMuc3RhdGU7XG5cdFx0XHRcdHRoaXMuc3RhdGUgPSBERUxFVEVEO1xuXHRcdFx0XHR0aGlzLm5vcm1hbExpbmtzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdHRoaXMudW5kZWxMaW5rLnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHR9IGVsc2UgaWYgKG9uVXBsb2FkKSB7XG5cdFx0XHRcdC8vIFJlbW92ZSB0aGlzIGVkaXRvciBjb21wbGV0ZWx5XG5cdFx0XHRcdHRoaXMucmVtb3ZlRWRpdG9yKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLm9yaWdpbmFsU3RhdGUgPSB0aGlzLnN0YXRlO1xuXHRcdFx0XHR0aGlzLnN0YXRlID0gREVMRVRFRDtcblx0XHRcdFx0dGhpcy5ub0NvbW1pdCA9IG5vQ29tbWl0IHx8IEhDLmRlbF9uZWVkc19kaWZmO1xuXHRcdFx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRcdFx0aW5pdGlhdGVFZGl0KFxuXHRcdFx0XHRcdChmYWlsdXJlKSA9PiB7XG5cdFx0XHRcdFx0XHRwZXJmb3JtQ2hhbmdlcyhmYWlsdXJlLCBzZWxmKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdChtc2cpID0+IHtcblx0XHRcdFx0XHRcdHNlbGYuc3RhdGUgPSBzZWxmLm9yaWdpbmFsU3RhdGU7XG5cdFx0XHRcdFx0XHRtdy5ub3RpZnkobXNnLCB7dGFnOiAnaG90Q2F0J30pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmVzdG9yZShldmVudCkge1xuXHRcdFx0Ly8gQ2FuIG9jY3VyIG9ubHkgaWYgd2UgZG8gaGF2ZSBhIGNvbW1pdCBidXR0b24gYW5kIGFyZSBub3Qgb24gdGhlIHVwbG9hZCBmb3JtXG5cdFx0XHR0aGlzLmNhdExpbmsudGl0bGUgPSB0aGlzLmN1cnJlbnRLZXkgfHwgJyc7XG5cdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUudGV4dERlY29yYXRpb24gPSAnJztcblx0XHRcdHRoaXMuc3RhdGUgPSB0aGlzLm9yaWdpbmFsU3RhdGU7XG5cdFx0XHRpZiAodGhpcy5zdGF0ZSA9PT0gVU5DSEFOR0VEKSB7XG5cdFx0XHRcdHRoaXMuY2F0TGluay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLmNhdExpbmsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gSEMuYmdfY2hhbmdlZDtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0LyogZW1wdHkgKi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5ub3JtYWxMaW5rcy5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR0aGlzLnVuZGVsTGluay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHRyZXR1cm4gZXZ0S2lsbChldmVudCk7XG5cdFx0fVxuXHRcdC8vIEludGVybmFsIG9wZXJhdGlvbnNcblx0XHRzZWxlY3RFbmdpbmUoZW5naW5lTmFtZSkge1xuXHRcdFx0aWYgKCF0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbmdpbmVTZWxlY3Rvci5vcHRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iub3B0aW9uc1tpXS5zZWxlY3RlZCA9IHRoaXMuZW5naW5lU2VsZWN0b3Iub3B0aW9uc1tpXS52YWx1ZSA9PT0gZW5naW5lTmFtZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0c2FuaXRpemVJbnB1dCgpIHtcblx0XHRcdGxldCB2ID0gdGhpcy50ZXh0LnZhbHVlIHx8ICcnO1xuXHRcdFx0diA9IHYucmVwbGFjZSgvXihcXHN8XykrLywgJycpOyAvLyBUcmltIGxlYWRpbmcgYmxhbmtzIGFuZCB1bmRlcnNjb3Jlc1xuXHRcdFx0Y29uc3QgcmUgPSBuZXcgUmVnRXhwKGBeKCR7SEMuY2F0ZWdvcnlfcmVnZXhwfSk6YCk7XG5cdFx0XHRpZiAocmUudGVzdCh2KSkge1xuXHRcdFx0XHR2ID0gdi5zbGljZShNYXRoLm1heCgwLCB2LmluZGV4T2YoJzonKSArIDEpKS5yZXBsYWNlKC9eKFxcc3xfKSsvLCAnJyk7XG5cdFx0XHR9XG5cdFx0XHR2ID0gdi5yZXBsYWNlKC9cXHUyMDBFJC8sICcnKTsgLy8gVHJpbSBlbmRpbmcgbGVmdC10by1yaWdodCBtYXJrXG5cdFx0XHRpZiAoSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcykge1xuXHRcdFx0XHR2ID0gY2FwaXRhbGl6ZSh2KTtcblx0XHRcdH1cblx0XHRcdC8vIE9ubHkgdXBkYXRlIHRoZSBpbnB1dCBmaWVsZCBpZiB0aGVyZSBpcyBhIGRpZmZlcmVuY2UuIFZhcmlvdXMgYnJvd3NlcnMgb3RoZXJ3aXNlXG5cdFx0XHQvLyByZXNldCB0aGUgc2VsZWN0aW9uIGFuZCBjdXJzb3IgcG9zaXRpb24gYWZ0ZXIgZWFjaCB2YWx1ZSByZS1hc3NpZ25tZW50LlxuXHRcdFx0aWYgKHRoaXMudGV4dC52YWx1ZSAhPT0gbnVsbCAmJiB0aGlzLnRleHQudmFsdWUgIT09IHYpIHtcblx0XHRcdFx0dGhpcy50ZXh0LnZhbHVlID0gdjtcblx0XHRcdH1cblx0XHR9XG5cdFx0bWFrZUNhbGwodXJsLCBjYWxsYmFja09iaiwgZW5naW5lLCBxdWVyeUtleSwgY2xlYW5LZXkpIHtcblx0XHRcdGxldCBjYiA9IGNhbGxiYWNrT2JqO1xuXHRcdFx0Y29uc3QgZSA9IGVuZ2luZTtcblx0XHRcdGNvbnN0IHYgPSBxdWVyeUtleTtcblx0XHRcdGNvbnN0IHogPSBjbGVhbktleTtcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0Y29uc3QgZG9uZSA9ICgpID0+IHtcblx0XHRcdFx0Y2IuY2FsbHNNYWRlKys7XG5cdFx0XHRcdGlmIChjYi5jYWxsc01hZGUgPT09IGNiLm5vZkNhbGxzKSB7XG5cdFx0XHRcdFx0aWYgKGNiLmV4aXN0cykge1xuXHRcdFx0XHRcdFx0Y2IuYWxsVGl0bGVzLmV4aXN0cyA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChjYi5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdFx0XHRjYi5hbGxUaXRsZXMubm9ybWFsaXplZCA9IGNiLm5vcm1hbGl6ZWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghY2IuZG9udENhY2hlICYmICFzdWdnZXN0aW9uQ29uZmlnc1tjYi5lbmdpbmVOYW1lXS5jYWNoZVt6XSkge1xuXHRcdFx0XHRcdFx0c3VnZ2VzdGlvbkNvbmZpZ3NbY2IuZW5naW5lTmFtZV0uY2FjaGVbel0gPSBjYi5hbGxUaXRsZXM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHNlbGYudGV4dC5yZWFkT25seSA9IGZhbHNlO1xuXHRcdFx0XHRcdGlmICghY2IuY2FuY2VsbGVkKSB7XG5cdFx0XHRcdFx0XHRzZWxmLnNob3dTdWdnZXN0aW9ucyhjYi5hbGxUaXRsZXMsIGNiLm5vQ29tcGxldGlvbiwgdiwgY2IuZW5naW5lTmFtZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChjYiA9PT0gc2VsZi5jYWxsYmFja09iaikge1xuXHRcdFx0XHRcdFx0c2VsZi5jYWxsYmFja09iaiA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNiID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0JC5nZXRKU09OKHVybCwgKGpzb24pID0+IHtcblx0XHRcdFx0Y29uc3QgdGl0bGVzID0gZS5oYW5kbGVyKGpzb24sIHopO1xuXHRcdFx0XHRpZiAodGl0bGVzICYmIHRpdGxlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0Y2IuYWxsVGl0bGVzID0gY2IuYWxsVGl0bGVzID09PSBudWxsID8gdGl0bGVzIDogWy4uLmNiLmFsbFRpdGxlcywgLi4uZ2VuZXJhdGVBcnJheSh0aXRsZXMpXTtcblx0XHRcdFx0XHRpZiAodGl0bGVzLmV4aXN0cykge1xuXHRcdFx0XHRcdFx0Y2IuZXhpc3RzID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRpdGxlcy5ub3JtYWxpemVkKSB7XG5cdFx0XHRcdFx0XHRjYi5ub3JtYWxpemVkID0gdGl0bGVzLm5vcm1hbGl6ZWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGRvbmUoKTtcblx0XHRcdH0pLmZhaWwoKHJlcSkgPT4ge1xuXHRcdFx0XHRpZiAoIXJlcSkge1xuXHRcdFx0XHRcdG5vU3VnZ2VzdGlvbnMgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNiLmRvbnRDYWNoZSA9IHRydWU7XG5cdFx0XHRcdGRvbmUoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRjYWxsYmFja09iaiA9IG51bGw7XG5cdFx0dGV4dGNoYW5nZShkb250X2F1dG9jb21wbGV0ZSwgZm9yY2UpIHtcblx0XHRcdC8vIEhpZGUgYWxsIG90aGVyIGxpc3RzXG5cdFx0XHRtYWtlQWN0aXZlKHRoaXMpO1xuXHRcdFx0Ly8gR2V0IGlucHV0IHZhbHVlLCBvbWl0IHNvcnQga2V5LCBpZiBhbnlcblx0XHRcdHRoaXMuc2FuaXRpemVJbnB1dCgpO1xuXHRcdFx0bGV0IHYgPSB0aGlzLnRleHQudmFsdWU7XG5cdFx0XHQvLyBEaXNyZWdhcmQgYW55dGhpbmcgYWZ0ZXIgYSBwaXBlLlxuXHRcdFx0Y29uc3QgcGlwZSA9IHYuaW5kZXhPZignfCcpO1xuXHRcdFx0aWYgKHBpcGUgPj0gMCkge1xuXHRcdFx0XHR0aGlzLmN1cnJlbnRLZXkgPSB2LnNsaWNlKE1hdGgubWF4KDAsIHBpcGUgKyAxKSk7XG5cdFx0XHRcdHYgPSB2LnNsaWNlKDAsIE1hdGgubWF4KDAsIHBpcGUpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuY3VycmVudEtleSA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5sYXN0SW5wdXQgPT09IHYgJiYgIWZvcmNlKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gLy8gTm8gY2hhbmdlXG5cdFx0XHRpZiAodGhpcy5sYXN0SW5wdXQgIT09IHYpIHtcblx0XHRcdFx0Y2hlY2tNdWx0aUlucHV0KCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHY7XG5cdFx0XHR0aGlzLmxhc3RSZWFsSW5wdXQgPSB2O1xuXHRcdFx0Ly8gTWFyayBibGFja2xpc3RlZCBpbnB1dHMuXG5cdFx0XHR0aGlzLm9rLmRpc2FibGVkID0gdi5sZW5ndGggPiAwICYmIEhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdCh2KTtcblx0XHRcdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdC8vIE5vIEFqYXg6IGp1c3QgbWFrZSBzdXJlIHRoZSBsaXN0IGlzIGhpZGRlblxuXHRcdFx0XHRpZiAodGhpcy5saXN0KSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHRcdHRoaXMuaWNvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmICh2Lmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHR0aGlzLnNob3dTdWdnZXN0aW9ucyhbXSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGxldCBjbGVhbktleSA9IHYucmVwbGFjZSgvW1xcdTIwMEVcXHUyMDBGXFx1MjAyQS1cXHUyMDJFXS9nLCAnJykucmVwbGFjZSh3aWtpVGV4dEJsYW5rUkUsICcgJyk7XG5cdFx0XHRjbGVhbktleSA9IHJlcGxhY2VTaG9ydGN1dHMoY2xlYW5LZXksIEhDLnNob3J0Y3V0cyk7XG5cdFx0XHRjbGVhbktleSA9IGNsZWFuS2V5LnRyaW0oKTtcblx0XHRcdGlmIChjbGVhbktleS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5zaG93U3VnZ2VzdGlvbnMoW10pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5jYWxsYmFja09iaikge1xuXHRcdFx0XHR0aGlzLmNhbGxiYWNrT2JqLmNhbmNlbGxlZCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBlbmdpbmVOYW1lID0gc3VnZ2VzdGlvbkNvbmZpZ3NbdGhpcy5lbmdpbmVdID8gdGhpcy5lbmdpbmUgOiAnY29tYmluZWQnO1xuXHRcdFx0ZG9udF9hdXRvY29tcGxldGUgfHw9IHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdLm5vQ29tcGxldGlvbjtcblx0XHRcdGlmIChzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXS5jYWNoZVtjbGVhbktleV0pIHtcblx0XHRcdFx0dGhpcy5zaG93U3VnZ2VzdGlvbnMoc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0uY2FjaGVbY2xlYW5LZXldLCBkb250X2F1dG9jb21wbGV0ZSwgdiwgZW5naW5lTmFtZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHtlbmdpbmVzfSA9IHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdO1xuXHRcdFx0dGhpcy5jYWxsYmFja09iaiA9IHtcblx0XHRcdFx0YWxsVGl0bGVzOiBudWxsLFxuXHRcdFx0XHRjYWxsc01hZGU6IDAsXG5cdFx0XHRcdG5vZkNhbGxzOiBlbmdpbmVzLmxlbmd0aCxcblx0XHRcdFx0bm9Db21wbGV0aW9uOiBkb250X2F1dG9jb21wbGV0ZSxcblx0XHRcdFx0ZW5naW5lTmFtZSxcblx0XHRcdH07XG5cdFx0XHR0aGlzLm1ha2VDYWxscyhlbmdpbmVzLCB0aGlzLmNhbGxiYWNrT2JqLCB2LCBjbGVhbktleSk7XG5cdFx0fVxuXHRcdG1ha2VDYWxscyhlbmdpbmVzLCBjYiwgdiwgY2xlYW5LZXkpIHtcblx0XHRcdGZvciAoY29uc3QgZW5naW5lXyBvZiBlbmdpbmVzKSB7XG5cdFx0XHRcdGNvbnN0IGVuZ2luZSA9IHN1Z2dlc3Rpb25FbmdpbmVzW2VuZ2luZV9dO1xuXHRcdFx0XHRjb25zdCB1cmwgPSBjb25mLndnU2NyaXB0UGF0aCArIGVuZ2luZS51cmkucmVwbGFjZSgvXFwkMS9nLCBlbmNvZGVVUklDb21wb25lbnQoY2xlYW5LZXkpKTtcblx0XHRcdFx0dGhpcy5tYWtlQ2FsbCh1cmwsIGNiLCBlbmdpbmUsIHYsIGNsZWFuS2V5KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0c2hvd1N1Z2dlc3Rpb25zKHRpdGxlcywgZG9udEF1dG9jb21wbGV0ZSwgcXVlcnlLZXksIGVuZ2luZU5hbWUpIHtcblx0XHRcdHRoaXMudGV4dC5yZWFkT25seSA9IGZhbHNlO1xuXHRcdFx0dGhpcy5kYWIgPSBudWxsO1xuXHRcdFx0dGhpcy5zaG93c0xpc3QgPSBmYWxzZTtcblx0XHRcdGlmICghdGhpcy5saXN0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChub1N1Z2dlc3Rpb25zKSB7XG5cdFx0XHRcdGlmICh0aGlzLmxpc3QpIHtcblx0XHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAodGhpcy5pY29uKSB7XG5cdFx0XHRcdFx0dGhpcy5pY29uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IHRydWU7IC8vIERlZmF1bHQuLi5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5lbmdpbmVOYW1lID0gZW5naW5lTmFtZTtcblx0XHRcdGlmIChlbmdpbmVOYW1lKSB7XG5cdFx0XHRcdGlmICghdGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lTmFtZSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy5lbmdpbmVTZWxlY3Rvcikge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAocXVlcnlLZXkpIHtcblx0XHRcdFx0aWYgKHRoaXMubGFzdElucHV0LmluZGV4T2YocXVlcnlLZXkpKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHR0aGlzLmxhc3RRdWVyeSAmJlxuXHRcdFx0XHRcdHRoaXMubGFzdElucHV0LmluZGV4T2YodGhpcy5sYXN0UXVlcnkpID09PSAwICYmXG5cdFx0XHRcdFx0dGhpcy5sYXN0UXVlcnkubGVuZ3RoID4gcXVlcnlLZXkubGVuZ3RoXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGhpcy5sYXN0UXVlcnkgPSBxdWVyeUtleTtcblx0XHRcdC8vIEdldCBjdXJyZW50IGlucHV0IHRleHRcblx0XHRcdGxldCB2ID0gdGhpcy50ZXh0LnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRjb25zdCBrZXkgPSB2Lmxlbmd0aCA+IDEgPyBgfCR7dlsxXX1gIDogJyc7XG5cdFx0XHR2ID0gSEMuY2FwaXRhbGl6ZVBhZ2VOYW1lcyA/IGNhcGl0YWxpemUodlswXSkgOiB2WzBdO1xuXHRcdFx0bGV0IHZOb3JtYWxpemVkID0gdjtcblx0XHRcdGNvbnN0IGtub3duVG9FeGlzdCA9IHRpdGxlcyAmJiB0aXRsZXMuZXhpc3RzO1xuXHRcdFx0bGV0IGk7XG5cdFx0XHRpZiAodGl0bGVzKSB7XG5cdFx0XHRcdGlmICh0aXRsZXMubm9ybWFsaXplZCAmJiB2LmluZGV4T2YocXVlcnlLZXkpID09PSAwKSB7XG5cdFx0XHRcdFx0Ly8gV2UgZ290IGJhY2sgYSBkaWZmZXJlbnQgbm9ybWFsaXphdGlvbiB0aGFuIHdoYXQgaXMgaW4gdGhlIGlucHV0IGZpZWxkXG5cdFx0XHRcdFx0dk5vcm1hbGl6ZWQgPSB0aXRsZXMubm9ybWFsaXplZCArIHYuc2xpY2UocXVlcnlLZXkubGVuZ3RoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB2TG93ID0gdk5vcm1hbGl6ZWQudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0Ly8gU3RyaXAgYmxhY2tsaXN0ZWQgY2F0ZWdvcmllc1xuXHRcdFx0XHRpZiAoSEMuYmxhY2tsaXN0KSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdFx0aWYgKEhDLmJsYWNrbGlzdC50ZXN0KHRpdGxlc1tpXSkpIHtcblx0XHRcdFx0XHRcdFx0dGl0bGVzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdFx0aS0tO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aXRsZXMuc29ydCgoYSwgYikgPT4ge1xuXHRcdFx0XHRcdGlmIChhID09PSBiKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGEuaW5kZXhPZihiKSA9PT0gMCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGEgYmVnaW5zIHdpdGggYjogYSA+IGJcblx0XHRcdFx0XHRpZiAoYi5pbmRleE9mKGEpID09PSAwKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIGIgYmVnaW5zIHdpdGggYTogYSA8IGJcblx0XHRcdFx0XHQvLyBPcGVuc2VhcmNoIG1heSByZXR1cm4gc3R1ZmYgbm90IGJlZ2lubmluZyB3aXRoIHRoZSBzZWFyY2ggcHJlZml4IVxuXHRcdFx0XHRcdGxldCBwcmVmaXhNYXRjaEEgPSBhLmluZGV4T2Yodk5vcm1hbGl6ZWQpID09PSAwID8gMSA6IDA7XG5cdFx0XHRcdFx0bGV0IHByZWZpeE1hdGNoQiA9IGIuaW5kZXhPZih2Tm9ybWFsaXplZCkgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRpZiAocHJlZml4TWF0Y2hBICE9PSBwcmVmaXhNYXRjaEIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBwcmVmaXhNYXRjaEIgLSBwcmVmaXhNYXRjaEE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIENhc2UtaW5zZW5zaXRpdmUgcHJlZml4IG1hdGNoIVxuXHRcdFx0XHRcdGNvbnN0IGFMb3cgPSBhLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0Y29uc3QgYkxvdyA9IGIudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRwcmVmaXhNYXRjaEEgPSBhTG93LmluZGV4T2YodkxvdykgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRwcmVmaXhNYXRjaEIgPSBiTG93LmluZGV4T2YodkxvdykgPT09IDAgPyAxIDogMDtcblx0XHRcdFx0XHRpZiAocHJlZml4TWF0Y2hBICE9PSBwcmVmaXhNYXRjaEIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBwcmVmaXhNYXRjaEIgLSBwcmVmaXhNYXRjaEE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChhIDwgYikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYiA8IGEpIHtcblx0XHRcdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIFJlbW92ZSBkdXBsaWNhdGVzIGFuZCBzZWxmLXJlZmVyZW5jZXNcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IHRpdGxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdChpICsgMSA8IHRpdGxlcy5sZW5ndGggJiYgdGl0bGVzW2ldID09PSB0aXRsZXNbaSArIDFdKSB8fFxuXHRcdFx0XHRcdFx0KGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDE0ICYmIHRpdGxlc1tpXSA9PT0gY29uZi53Z1RpdGxlKVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0dGl0bGVzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRcdGktLTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghdGl0bGVzIHx8IHRpdGxlcy5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0aWYgKHRoaXMubGlzdCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChlbmdpbmVOYW1lICYmIHN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdICYmICFzdWdnZXN0aW9uQ29uZmlnc1tlbmdpbmVOYW1lXS50ZW1wKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuaWNvbikge1xuXHRcdFx0XHRcdFx0dGhpcy5pY29uLnNyYyA9IEhDLmV4aXN0c05vO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLmlucHV0RXhpc3RzID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgW2ZpcnN0VGl0bGVdID0gdGl0bGVzO1xuXHRcdFx0Y29uc3QgY29tcGxldGVkID0gdGhpcy5hdXRvQ29tcGxldGUoZmlyc3RUaXRsZSwgdiwgdk5vcm1hbGl6ZWQsIGtleSwgZG9udEF1dG9jb21wbGV0ZSk7XG5cdFx0XHRjb25zdCBleGlzdGluZyA9IGNvbXBsZXRlZCB8fCBrbm93blRvRXhpc3QgfHwgZmlyc3RUaXRsZSA9PT0gcmVwbGFjZVNob3J0Y3V0cyh2LCBIQy5zaG9ydGN1dHMpO1xuXHRcdFx0aWYgKGVuZ2luZU5hbWUgJiYgc3VnZ2VzdGlvbkNvbmZpZ3NbZW5naW5lTmFtZV0gJiYgIXN1Z2dlc3Rpb25Db25maWdzW2VuZ2luZU5hbWVdLnRlbXApIHtcblx0XHRcdFx0dGhpcy5pY29uLnNyYyA9IGV4aXN0aW5nID8gSEMuZXhpc3RzWWVzIDogSEMuZXhpc3RzTm87XG5cdFx0XHRcdHRoaXMuaW5wdXRFeGlzdHMgPSBleGlzdGluZztcblx0XHRcdH1cblx0XHRcdGlmIChjb21wbGV0ZWQpIHtcblx0XHRcdFx0dGhpcy5sYXN0SW5wdXQgPSBmaXJzdFRpdGxlO1xuXHRcdFx0XHRpZiAodGl0bGVzLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHRcdGlmICh0aGlzLmVuZ2luZVNlbGVjdG9yKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gKFJlLSlmaWxsIHRoZSBsaXN0XG5cdFx0XHR3aGlsZSAodGhpcy5saXN0LmZpcnN0Q2hpbGQpIHtcblx0XHRcdFx0dGhpcy5saXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgdGl0bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IG9wdCA9IG1ha2UoJ29wdGlvbicpO1xuXHRcdFx0XHRvcHQuYXBwZW5kKG1ha2UodGl0bGVzW2ldLCB0cnVlKSk7XG5cdFx0XHRcdG9wdC5zZWxlY3RlZCA9IGNvbXBsZXRlZCAmJiBpID09PSAwO1xuXHRcdFx0XHR0aGlzLmxpc3QuYXBwZW5kKG9wdCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRpc3BsYXlMaXN0KCk7XG5cdFx0fVxuXHRcdGRpc3BsYXlMaXN0KCkge1xuXHRcdFx0dGhpcy5zaG93c0xpc3QgPSB0cnVlO1xuXHRcdFx0aWYgKCF0aGlzLmlzX2FjdGl2ZSkge1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0aWYgKHRoaXMuZW5naW5lU2VsZWN0b3IpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IG5vZkl0ZW1zID0gdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoID4gSEMubGlzdFNpemUgPyBIQy5saXN0U2l6ZSA6IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aDtcblx0XHRcdGlmIChub2ZJdGVtcyA8PSAxKSB7XG5cdFx0XHRcdG5vZkl0ZW1zID0gMjtcblx0XHRcdH1cblx0XHRcdHRoaXMubGlzdC5zaXplID0gbm9mSXRlbXM7XG5cdFx0XHR0aGlzLmxpc3Quc3R5bGUuYWxpZ24gPSBpc19ydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuXHRcdFx0dGhpcy5saXN0LnN0eWxlLnpJbmRleCA9IDU7XG5cdFx0XHR0aGlzLmxpc3Quc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdFx0Ly8gQ29tcHV0ZSBpbml0aWFsIGxpc3QgcG9zaXRpb24uIEZpcnN0IHRoZSBoZWlnaHQuXG5cdFx0XHRjb25zdCBhbmNob3IgPSBpc19ydGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuXHRcdFx0bGV0IGxpc3RoID0gMDtcblx0XHRcdGlmICh0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG5cdFx0XHRcdC8vIE9mZi1zY3JlZW4gZGlzcGxheSB0byBnZXQgdGhlIGhlaWdodFxuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUudG9wID0gYCR7dGhpcy50ZXh0Lm9mZnNldFRvcH1weGA7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZVthbmNob3JdID0gJy0xMDAwMHB4Jztcblx0XHRcdFx0dGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPSAnJztcblx0XHRcdFx0bGlzdGggPSB0aGlzLmxpc3Qub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxpc3RoID0gdGhpcy5saXN0Lm9mZnNldEhlaWdodDtcblx0XHRcdH1cblx0XHRcdC8vIEFwcHJveGltYXRlIGNhbGN1bGF0aW9uIG9mIG1heGltdW0gbGlzdCBzaXplXG5cdFx0XHRsZXQgbWF4TGlzdEhlaWdodCA9IGxpc3RoO1xuXHRcdFx0aWYgKG5vZkl0ZW1zIDwgSEMubGlzdFNpemUpIHtcblx0XHRcdFx0bWF4TGlzdEhlaWdodCA9IChsaXN0aCAvIG5vZkl0ZW1zKSAqIEhDLmxpc3RTaXplO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgdmlld3BvcnQgPSAod2hhdCkgPT4ge1xuXHRcdFx0XHRpZiAoaXNfd2Via2l0ICYmICFkb2N1bWVudC5ldmFsdWF0ZSkge1xuXHRcdFx0XHRcdC8vIFNhZmFyaSA8IDMuMFxuXHRcdFx0XHRcdHJldHVybiB3aW5kb3dbYGlubmVyJHt3aGF0fWBdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHMgPSBgY2xpZW50JHt3aGF0fWA7XG5cdFx0XHRcdGlmICh3aW5kb3cub3BlcmEpIHtcblx0XHRcdFx0XHRyZXR1cm4gJCgnYm9keScpWzBdW3NdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W3NdIDogMCkgfHwgJCgnYm9keScpWzBdW3NdIHx8IDA7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3Qgc2Nyb2xsX29mZnNldCA9ICh3aGF0KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHMgPSBgc2Nyb2xsJHt3aGF0fWA7XG5cdFx0XHRcdGxldCByZXN1bHQgPSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID8gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W3NdIDogMCkgfHwgJCgnYm9keScpWzBdW3NdIHx8IDA7XG5cdFx0XHRcdGlmIChpc19ydGwgJiYgd2hhdCA9PT0gJ0xlZnQnKSB7XG5cdFx0XHRcdFx0Ly8gUlRMIGluY29uc2lzdGVuY2llcy5cblx0XHRcdFx0XHQvLyBGRjogMCBhdCB0aGUgZmFyIHJpZ2h0LCB0aGVuIGluY3JlYXNpbmdseSBuZWdhdGl2ZSB2YWx1ZXMuXG5cdFx0XHRcdFx0Ly8gSUUgPj0gODogMCBhdCB0aGUgZmFyIHJpZ2h0LCB0aGVuIGluY3JlYXNpbmdseSBwb3NpdGl2ZSB2YWx1ZXMuXG5cdFx0XHRcdFx0Ly8gV2Via2l0OiBzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoIGF0IHRoZSBmYXIgcmlnaHQsIHRoZW4gZG93biB0byB6ZXJvLlxuXHRcdFx0XHRcdC8vIE9wZXJhOiBkb24ndCBrbm93Li4uXG5cdFx0XHRcdFx0aWYgKHJlc3VsdCA8IDApIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IC1yZXN1bHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghaXNfd2Via2l0KSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSBzY3JvbGxfb2Zmc2V0KCdXaWR0aCcpIC0gdmlld3BvcnQoJ1dpZHRoJykgLSByZXN1bHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIE5vdyBhbGwgaGF2ZSB3ZWJraXQgYmVoYXZpb3IsIGkuZS4gemVybyBpZiBhdCB0aGUgbGVmdG1vc3QgZWRnZS5cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHBvc2l0aW9uID0gKG5vZGUpID0+IHtcblx0XHRcdFx0Ly8gU3RyaXBwZWQtZG93biBzaW1wbGlmaWVkIHBvc2l0aW9uIGZ1bmN0aW9uLiBJdCdzIGdvb2QgZW5vdWdoIGZvciBvdXIgcHVycG9zZXMuXG5cdFx0XHRcdGlmIChub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuXHRcdFx0XHRcdGNvbnN0IGJveCA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHg6IE1hdGgucm91bmQoYm94LmxlZnQgKyBzY3JvbGxfb2Zmc2V0KCdMZWZ0JykpLFxuXHRcdFx0XHRcdFx0eTogTWF0aC5yb3VuZChib3gudG9wICsgc2Nyb2xsX29mZnNldCgnVG9wJykpLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IHQgPSAwO1xuXHRcdFx0XHRsZXQgbCA9IDA7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHR0ICs9IG5vZGUub2Zmc2V0VG9wIHx8IDA7XG5cdFx0XHRcdFx0bCArPSBub2RlLm9mZnNldExlZnQgfHwgMDtcblx0XHRcdFx0XHRub2RlID0gbm9kZS5vZmZzZXRQYXJlbnQ7XG5cdFx0XHRcdH0gd2hpbGUgKG5vZGUpO1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHg6IGwsXG5cdFx0XHRcdFx0eTogdCxcblx0XHRcdFx0fTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCB0ZXh0UG9zID0gcG9zaXRpb24odGhpcy50ZXh0KTtcblx0XHRcdGNvbnN0IG5sID0gMDtcblx0XHRcdGxldCBudCA9IDA7XG5cdFx0XHQvLyBPcGVyYSA5LjUgc29tZWhvdyBoYXMgb2Zmc2V0V2lkdGggPSAwIGhlcmU/PyBVc2UgdGhlIG5leHQgYmVzdCB2YWx1ZS4uLlxuXHRcdFx0bGV0IG9mZnNldCA9IDA7XG5cdFx0XHRjb25zdCB0ZXh0Qm94V2lkdGggPSB0aGlzLnRleHQub2Zmc2V0V2lkdGggfHwgdGhpcy50ZXh0LmNsaWVudFdpZHRoO1xuXHRcdFx0aWYgKHRoaXMuZW5naW5lTmFtZSkge1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLnpJbmRleCA9IDU7XG5cdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLndpZHRoID0gYCR7dGV4dEJveFdpZHRofXB4YDtcblx0XHRcdFx0Ly8gRmlndXJlIG91dCB0aGUgaGVpZ2h0IG9mIHRoaXMgc2VsZWN0b3I6IGRpc3BsYXkgaXQgb2ZmLXNjcmVlbiwgdGhlbiBoaWRlIGl0IGFnYWluLlxuXHRcdFx0XHRpZiAodGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlW2FuY2hvcl0gPSAnLTEwMDAwcHgnO1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUudG9wID0gJzAnO1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0XHRcdG9mZnNldCA9IHRoaXMuZW5naW5lU2VsZWN0b3Iub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHRcdHRoaXMuZW5naW5lU2VsZWN0b3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRvZmZzZXQgPSB0aGlzLmVuZ2luZVNlbGVjdG9yLm9mZnNldEhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlW2FuY2hvcl0gPSBgJHtubH1weGA7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGV4dFBvcy55IDwgbWF4TGlzdEhlaWdodCArIG9mZnNldCArIDEpIHtcblx0XHRcdFx0Ly8gVGhlIGxpc3QgbWlnaHQgZXh0ZW5kIGJleW9uZCB0aGUgdXBwZXIgYm9yZGVyIG9mIHRoZSBwYWdlLiBMZXQncyBhdm9pZCB0aGF0IGJ5IHBsYWNpbmcgaXRcblx0XHRcdFx0Ly8gYmVsb3cgdGhlIGlucHV0IHRleHQgZmllbGQuXG5cdFx0XHRcdG50ID0gdGhpcy50ZXh0Lm9mZnNldEhlaWdodCArIG9mZnNldCArIDE7XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZU5hbWUpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLnRvcCA9IGAke3RoaXMudGV4dC5vZmZzZXRIZWlnaHR9cHhgO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRudCA9IC1saXN0aCAtIG9mZnNldCAtIDE7XG5cdFx0XHRcdGlmICh0aGlzLmVuZ2luZU5hbWUpIHtcblx0XHRcdFx0XHR0aGlzLmVuZ2luZVNlbGVjdG9yLnN0eWxlLnRvcCA9IGAkey0ob2Zmc2V0ICsgMSl9cHhgO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpc3Quc3R5bGUudG9wID0gYCR7bnR9cHhgO1xuXHRcdFx0dGhpcy5saXN0LnN0eWxlLndpZHRoID0gJyc7IC8vIE5vIGZpeGVkIHdpZHRoICh5ZXQpXG5cdFx0XHR0aGlzLmxpc3Quc3R5bGVbYW5jaG9yXSA9IGAke25sfXB4YDtcblx0XHRcdGlmICh0aGlzLmVuZ2luZU5hbWUpIHtcblx0XHRcdFx0dGhpcy5zZWxlY3RFbmdpbmUodGhpcy5lbmdpbmVOYW1lKTtcblx0XHRcdFx0dGhpcy5lbmdpbmVTZWxlY3Rvci5zdHlsZS5kaXNwbGF5ID0gJyc7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmxpc3Quc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0XHQvLyBTZXQgdGhlIHdpZHRoIG9mIHRoZSBsaXN0XG5cdFx0XHRpZiAodGhpcy5saXN0Lm9mZnNldFdpZHRoIDwgdGV4dEJveFdpZHRoKSB7XG5cdFx0XHRcdHRoaXMubGlzdC5zdHlsZS53aWR0aCA9IGAke3RleHRCb3hXaWR0aH1weGA7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIElmIHRoZSBsaXN0IGlzIHdpZGVyIHRoYW4gdGhlIHRleHRib3g6IG1ha2Ugc3VyZSBpdCBmaXRzIGhvcml6b250YWxseSBpbnRvIHRoZSBicm93c2VyIHdpbmRvd1xuXHRcdFx0Y29uc3Qgc2Nyb2xsID0gc2Nyb2xsX29mZnNldCgnTGVmdCcpO1xuXHRcdFx0Y29uc3Qgdmlld193ID0gdmlld3BvcnQoJ1dpZHRoJyk7XG5cdFx0XHRsZXQgdyA9IHRoaXMubGlzdC5vZmZzZXRXaWR0aDtcblx0XHRcdGNvbnN0IGxfcG9zID0gcG9zaXRpb24odGhpcy5saXN0KTtcblx0XHRcdGxldCBsZWZ0ID0gbF9wb3MueDtcblx0XHRcdGxldCByaWdodCA9IGxlZnQgKyB3O1xuXHRcdFx0aWYgKGxlZnQgPCBzY3JvbGwgfHwgcmlnaHQgPiBzY3JvbGwgKyB2aWV3X3cpIHtcblx0XHRcdFx0aWYgKHcgPiB2aWV3X3cpIHtcblx0XHRcdFx0XHR3ID0gdmlld193O1xuXHRcdFx0XHRcdHRoaXMubGlzdC5zdHlsZS53aWR0aCA9IGAke3d9cHhgO1xuXHRcdFx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0XHRcdGxlZnQgPSByaWdodCAtIHc7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJpZ2h0ID0gbGVmdCArIHc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCByZWxhdGl2ZV9vZmZzZXQgPSAwO1xuXHRcdFx0XHRpZiAobGVmdCA8IHNjcm9sbCkge1xuXHRcdFx0XHRcdHJlbGF0aXZlX29mZnNldCA9IHNjcm9sbCAtIGxlZnQ7XG5cdFx0XHRcdH0gZWxzZSBpZiAocmlnaHQgPiBzY3JvbGwgKyB2aWV3X3cpIHtcblx0XHRcdFx0XHRyZWxhdGl2ZV9vZmZzZXQgPSAtKHJpZ2h0IC0gc2Nyb2xsIC0gdmlld193KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0cmVsYXRpdmVfb2Zmc2V0ID0gLXJlbGF0aXZlX29mZnNldDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocmVsYXRpdmVfb2Zmc2V0KSB7XG5cdFx0XHRcdFx0dGhpcy5saXN0LnN0eWxlW2FuY2hvcl0gPSBgJHtubCArIHJlbGF0aXZlX29mZnNldH1weGA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0YXV0b0NvbXBsZXRlKG5ld1ZhbCwgYWN0VmFsLCBub3JtYWxpemVkQWN0VmFsLCBrZXksIGRvbnRNb2RpZnkpIHtcblx0XHRcdGlmIChuZXdWYWwgPT09IGFjdFZhbCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHRcdGlmIChkb250TW9kaWZ5IHx8IHRoaXMuaW1lIHx8ICF0aGlzLmNhblNlbGVjdCgpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdC8vIElmIHdlIGNhbid0IHNlbGVjdCBwcm9wZXJseSBvciBhbiBJTUUgY29tcG9zaXRpb24gaXMgb25nb2luZywgYXV0b2NvbXBsZXRpb24gd291bGQgYmUgYSBtYWpvciBhbm5veWFuY2UgdG8gdGhlIHVzZXIuXG5cdFx0XHRpZiAobmV3VmFsLmluZGV4T2YoYWN0VmFsKSkge1xuXHRcdFx0XHQvLyBNYXliZSBpdCdsbCB3b3JrIHdpdGggdGhlIG5vcm1hbGl6ZWQgdmFsdWUgKE5GQyk/XG5cdFx0XHRcdGlmIChub3JtYWxpemVkQWN0VmFsICYmIG5ld1ZhbC5pbmRleE9mKG5vcm1hbGl6ZWRBY3RWYWwpID09PSAwKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMubGFzdFJlYWxJbnB1dCA9PT0gYWN0VmFsKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxhc3RSZWFsSW5wdXQgPSBub3JtYWxpemVkQWN0VmFsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhY3RWYWwgPSBub3JtYWxpemVkQWN0VmFsO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gQWN0dWFsIGlucHV0IGlzIGEgcHJlZml4IG9mIHRoZSBuZXcgdGV4dC4gRmlsbCBpbiBuZXcgdGV4dCwgc2VsZWN0aW5nIHRoZSBuZXdseSBhZGRlZCBzdWZmaXhcblx0XHRcdC8vIHN1Y2ggdGhhdCBpdCBjYW4gYmUgZWFzaWx5IHJlbW92ZWQgYnkgdHlwaW5nIGJhY2tzcGFjZSBpZiB0aGUgc3VnZ2VzdGlvbiBpcyB1bndhbnRlZC5cblx0XHRcdHRoaXMudGV4dC5mb2N1cygpO1xuXHRcdFx0dGhpcy50ZXh0LnZhbHVlID0gbmV3VmFsICsga2V5O1xuXHRcdFx0dGhpcy5zZXRTZWxlY3Rpb24oYWN0VmFsLmxlbmd0aCwgbmV3VmFsLmxlbmd0aCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0Y2FuU2VsZWN0KCkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0dGhpcy50ZXh0LnNldFNlbGVjdGlvblJhbmdlIHx8XG5cdFx0XHRcdHRoaXMudGV4dC5jcmVhdGVUZXh0UmFuZ2UgfHxcblx0XHRcdFx0KHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydCAhPT0gdW5kZWZpbmVkICYmIHRoaXMudGV4dC5zZWxlY3Rpb25FbmQgIT09IHVuZGVmaW5lZClcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHNldFNlbGVjdGlvbihmcm9tLCB0bykge1xuXHRcdFx0Ly8gdGhpcy50ZXh0IG11c3QgYmUgZm9jdXNlZCAoYXQgbGVhc3Qgb24gSUUpXG5cdFx0XHRpZiAoIXRoaXMudGV4dC52YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy50ZXh0LnNldFNlbGVjdGlvblJhbmdlKSB7XG5cdFx0XHRcdC8vIGUuZy4ga2h0bWxcblx0XHRcdFx0dGhpcy50ZXh0LnNldFNlbGVjdGlvblJhbmdlKGZyb20sIHRvKTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0aWYgKGZyb20gPiB0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQpIHtcblx0XHRcdFx0XHR0aGlzLnRleHQuc2VsZWN0aW9uRW5kID0gdG87XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0ID0gZnJvbTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnRleHQuc2VsZWN0aW9uU3RhcnQgPSBmcm9tO1xuXHRcdFx0XHRcdHRoaXMudGV4dC5zZWxlY3Rpb25FbmQgPSB0bztcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnRleHQuY3JlYXRlVGV4dFJhbmdlKSB7XG5cdFx0XHRcdC8vIElFXG5cdFx0XHRcdGNvbnN0IG5ld19zZWxlY3Rpb24gPSB0aGlzLnRleHQuY3JlYXRlVGV4dFJhbmdlKCk7XG5cdFx0XHRcdG5ld19zZWxlY3Rpb24ubW92ZSgnY2hhcmFjdGVyJywgZnJvbSk7XG5cdFx0XHRcdG5ld19zZWxlY3Rpb24ubW92ZUVuZCgnY2hhcmFjdGVyJywgdG8gLSBmcm9tKTtcblx0XHRcdFx0bmV3X3NlbGVjdGlvbi5zZWxlY3QoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Z2V0U2VsZWN0aW9uKCkge1xuXHRcdFx0bGV0IGZyb20gPSAwO1xuXHRcdFx0Ly8gdGhpcy50ZXh0IG11c3QgYmUgZm9jdXNlZCAoYXQgbGVhc3Qgb24gSUUpXG5cdFx0XHRsZXQgdG8gPSAwO1xuXHRcdFx0aWYgKCF0aGlzLnRleHQudmFsdWUpIHtcblx0XHRcdFx0Ly8gTm8gdGV4dC5cblx0XHRcdH0gZWxzZSBpZiAodGhpcy50ZXh0LnNlbGVjdGlvblN0YXJ0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0ZnJvbSA9IHRoaXMudGV4dC5zZWxlY3Rpb25TdGFydDtcblx0XHRcdFx0dG8gPSB0aGlzLnRleHQuc2VsZWN0aW9uRW5kO1xuXHRcdFx0fSBlbHNlIGlmIChkb2N1bWVudC5zZWxlY3Rpb24gJiYgZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlKSB7XG5cdFx0XHRcdC8vIElFXG5cdFx0XHRcdGNvbnN0IHJuZyA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpLmR1cGxpY2F0ZSgpO1xuXHRcdFx0XHRpZiAocm5nLnBhcmVudE5vZGUoKSA9PT0gdGhpcy50ZXh0KSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdGNvbnN0IHRleHRSbmcgPSB0aGlzLnRleHQuY3JlYXRlVGV4dFJhbmdlKCk7XG5cdFx0XHRcdFx0XHR0ZXh0Um5nLm1vdmUoJ2NoYXJhY3RlcicsIDApO1xuXHRcdFx0XHRcdFx0dGV4dFJuZy5zZXRFbmRQb2ludCgnRW5kVG9FbmQnLCBybmcpO1xuXHRcdFx0XHRcdFx0Ly8gV2UncmUgaW4gYSBzaW5nbGUtbGluZSBpbnB1dCBib3g6IG5vIG5lZWQgdG8gY2FyZSBhYm91dCBJRSdzIHN0cmFuZ2Vcblx0XHRcdFx0XHRcdC8vIGhhbmRsaW5nIG9mIGxpbmUgZW5kc1xuXHRcdFx0XHRcdFx0dG8gPSB0ZXh0Um5nLnRleHQubGVuZ3RoO1xuXHRcdFx0XHRcdFx0dGV4dFJuZy5zZXRFbmRQb2ludCgnRW5kVG9TdGFydCcsIHJuZyk7XG5cdFx0XHRcdFx0XHRmcm9tID0gdGV4dFJuZy50ZXh0Lmxlbmd0aDtcblx0XHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRcdGZyb20gPSB0aGlzLnRleHQudmFsdWUubGVuZ3RoO1xuXHRcdFx0XHRcdFx0dG8gPSBmcm9tOyAvLyBBdCBlbmQgb2YgdGV4dFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c3RhcnQ6IGZyb20sXG5cdFx0XHRcdGVuZDogdG8sXG5cdFx0XHR9O1xuXHRcdH1cblx0XHRzYXZlVmlldygpIHtcblx0XHRcdHRoaXMubGFzdFNlbGVjdGlvbiA9IHRoaXMuZ2V0U2VsZWN0aW9uKCk7XG5cdFx0fVxuXHRcdHByb2Nlc3NLZXkoZXZlbnQpIHtcblx0XHRcdGxldCBkaXIgPSAwO1xuXHRcdFx0c3dpdGNoICh0aGlzLmxhc3RLZXkpIHtcblx0XHRcdFx0Y2FzZSBVUDpcblx0XHRcdFx0XHRkaXIgPSAtMTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBET1dOOlxuXHRcdFx0XHRcdGRpciA9IDE7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgUEdVUDpcblx0XHRcdFx0XHRkaXIgPSAtSEMubGlzdFNpemU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgUEdET1dOOlxuXHRcdFx0XHRcdGRpciA9IEhDLmxpc3RTaXplO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIEVTQzpcblx0XHRcdFx0XHQvLyBJbmhpYml0IGRlZmF1bHQgYmVoYXZpb3IgKHJldmVydCB0byBsYXN0IHJlYWwgaW5wdXQgaW4gRkY6IHdlIGRvIHRoYXQgb3Vyc2VsdmVzKVxuXHRcdFx0XHRcdHJldHVybiBldnRLaWxsKGV2ZW50KTtcblx0XHRcdH1cblx0XHRcdGlmIChkaXIpIHtcblx0XHRcdFx0aWYgKHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcblx0XHRcdFx0XHQvLyBMaXN0IGlzIHZpc2libGUsIHNvIHRoZXJlIGFyZSBzdWdnZXN0aW9uc1xuXHRcdFx0XHRcdHRoaXMuaGlnaGxpZ2h0U3VnZ2VzdGlvbihkaXIpO1xuXHRcdFx0XHRcdC8vIEtpbGwgdGhlIGV2ZW50LCBvdGhlcndpc2Ugc29tZSBicm93c2VycyAoZS5nLiwgRmlyZWZveCkgbWF5IGFkZGl0aW9uYWxseSB0cmVhdCBhbiB1cC1hcnJvd1xuXHRcdFx0XHRcdC8vIGFzIFwicGxhY2UgdGhlIHRleHQgY3Vyc29yIGF0IHRoZSBmcm9udFwiLCB3aGljaCB3ZSBkb24ndCB3YW50IGhlcmUuXG5cdFx0XHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0XHRcdHRoaXMua2V5Q291bnQgPD0gMSAmJlxuXHRcdFx0XHRcdCghdGhpcy5jYWxsYmFja09iaiB8fCB0aGlzLmNhbGxiYWNrT2JqLmNhbGxzTWFkZSA9PT0gdGhpcy5jYWxsYmFja09iai5ub2ZDYWxscylcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Ly8gSWYgbm8gc3VnZ2VzdGlvbnMgZGlzcGxheWVkLCBnZXQgdGhlbSwgdW5sZXNzIHdlJ3JlIGFscmVhZHkgZ2V0dGluZyB0aGVtLlxuXHRcdFx0XHRcdHRoaXMudGV4dGNoYW5nZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0aGlnaGxpZ2h0U3VnZ2VzdGlvbihkaXIpIHtcblx0XHRcdGlmIChub1N1Z2dlc3Rpb25zIHx8ICF0aGlzLmxpc3QgfHwgdGhpcy5saXN0LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBjdXJyID0gdGhpcy5saXN0LnNlbGVjdGVkSW5kZXg7XG5cdFx0XHRsZXQgdGd0ID0gLTE7XG5cdFx0XHRpZiAoZGlyID09PSAwKSB7XG5cdFx0XHRcdGlmIChjdXJyIDwgMCB8fCBjdXJyID49IHRoaXMubGlzdC5vcHRpb25zLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0Z3QgPSBjdXJyO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGd0ID0gY3VyciA8IDAgPyAwIDogY3VyciArIGRpcjtcblx0XHRcdFx0dGd0ID0gdGd0IDwgMCA/IDAgOiB0Z3Q7XG5cdFx0XHRcdGlmICh0Z3QgPj0gdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRcdFx0dGd0ID0gdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoIC0gMTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKHRndCAhPT0gY3VyciB8fCBkaXIgPT09IDApIHtcblx0XHRcdFx0aWYgKGN1cnIgPj0gMCAmJiBjdXJyIDwgdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoICYmIGRpciAhPT0gMCkge1xuXHRcdFx0XHRcdHRoaXMubGlzdC5vcHRpb25zW2N1cnJdLnNlbGVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5saXN0Lm9wdGlvbnNbdGd0XS5zZWxlY3RlZCA9IHRydWU7XG5cdFx0XHRcdC8vIEdldCBjdXJyZW50IGlucHV0IHRleHRcblx0XHRcdFx0Y29uc3QgdiA9IHRoaXMudGV4dC52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRjb25zdCBrZXkgPSB2Lmxlbmd0aCA+IDEgPyBgfCR7dlsxXX1gIDogJyc7XG5cdFx0XHRcdGNvbnN0IGNvbXBsZXRlZCA9IHRoaXMuYXV0b0NvbXBsZXRlKHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dCwgdGhpcy5sYXN0UmVhbElucHV0LCBudWxsLCBrZXksIGZhbHNlKTtcblx0XHRcdFx0aWYgKCFjb21wbGV0ZWQgfHwgdGhpcy5saXN0Lm9wdGlvbnNbdGd0XS50ZXh0ID09PSB0aGlzLmxhc3RSZWFsSW5wdXQpIHtcblx0XHRcdFx0XHR0aGlzLnRleHQudmFsdWUgPSB0aGlzLmxpc3Qub3B0aW9uc1t0Z3RdLnRleHQgKyBrZXk7XG5cdFx0XHRcdFx0aWYgKHRoaXMuY2FuU2VsZWN0KCkpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2V0U2VsZWN0aW9uKHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dC5sZW5ndGgsIHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dC5sZW5ndGgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmxhc3RJbnB1dCA9IHRoaXMubGlzdC5vcHRpb25zW3RndF0udGV4dDtcblx0XHRcdFx0dGhpcy5pbnB1dEV4aXN0cyA9IHRydWU7IC8vIE1pZ2h0IGJlIHdyb25nIGlmIGZyb20gYSBkYWIgbGlzdC4uLlxuXHRcdFx0XHRpZiAodGhpcy5pY29uKSB7XG5cdFx0XHRcdFx0dGhpcy5pY29uLnNyYyA9IEhDLmV4aXN0c1llcztcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXRlID0gQ0hBTkdFX1BFTkRJTkc7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmVzZXRLZXlTZWxlY3Rpb24oKSB7XG5cdFx0XHRpZiAobm9TdWdnZXN0aW9ucyB8fCAhdGhpcy5saXN0IHx8IHRoaXMubGlzdC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgY3VyciA9IHRoaXMubGlzdC5zZWxlY3RlZEluZGV4O1xuXHRcdFx0aWYgKGN1cnIgPj0gMCAmJiBjdXJyIDwgdGhpcy5saXN0Lm9wdGlvbnMubGVuZ3RoKSB7XG5cdFx0XHRcdHRoaXMubGlzdC5vcHRpb25zW2N1cnJdLnNlbGVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdC8vIEdldCBjdXJyZW50IGlucHV0IHRleHRcblx0XHRcdFx0Y29uc3QgdiA9IHRoaXMudGV4dC52YWx1ZS5zcGxpdCgnfCcpO1xuXHRcdFx0XHRjb25zdCBrZXkgPSB2Lmxlbmd0aCA+IDEgPyBgfCR7dlsxXX1gIDogJyc7XG5cdFx0XHRcdC8vIEVTQyBpcyBoYW5kbGVkIHN0cmFuZ2VseSBieSBzb21lIGJyb3dzZXJzIChlLmcuLCBGRik7IHNvbWVob3cgaXQgcmVzZXRzIHRoZSBpbnB1dCB2YWx1ZSBiZWZvcmVcblx0XHRcdFx0Ly8gb3VyIGV2ZW50IGhhbmRsZXJzIGV2ZXIgZ2V0IGEgY2hhbmNlIHRvIHJ1bi5cblx0XHRcdFx0bGV0IHJlc3VsdCA9IHZbMF0gIT09IHRoaXMubGFzdElucHV0O1xuXHRcdFx0XHRpZiAodlswXSAhPT0gdGhpcy5sYXN0UmVhbElucHV0KSB7XG5cdFx0XHRcdFx0dGhpcy50ZXh0LnZhbHVlID0gdGhpcy5sYXN0UmVhbElucHV0ICsga2V5O1xuXHRcdFx0XHRcdHJlc3VsdCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dGhpcy5sYXN0SW5wdXQgPSB0aGlzLmxhc3RSZWFsSW5wdXQ7XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdGNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG5cdFx0Ly8gVXNlciBjb25maWd1cmF0aW9uczogRG8gdGhpcyBoZXJlLCBjYWxsZWQgZnJvbSB0aGUgb25sb2FkIGhhbmRsZXIsIHNvIHRoYXQgdXNlcnMgY2FuXG5cdFx0Ly8gb3ZlcnJpZGUgaXQgZWFzaWx5IGluIHRoZWlyIG93biB1c2VyIHNjcmlwdCBmaWxlcyBieSBqdXN0IGRlY2xhcmluZyB2YXJpYWJsZXMuXG5cdFx0Y29uc3QgY29uZmlnID0ge307XG5cdFx0SEMuZG9udF9hZGRfdG9fd2F0Y2hsaXN0ID1cblx0XHRcdHdpbmRvdy5ob3RjYXRfZG9udF9hZGRfdG9fd2F0Y2hsaXN0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0RG9udEFkZFRvV2F0Y2hsaXN0ID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLmRvbnRfYWRkX3RvX3dhdGNobGlzdFxuXHRcdFx0XHRcdDogY29uZmlnLkhvdENhdERvbnRBZGRUb1dhdGNobGlzdFxuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9kb250X2FkZF90b193YXRjaGxpc3Q7XG5cdFx0SEMubm9fYXV0b2NvbW1pdCA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X25vX2F1dG9jb21taXQgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXROb0F1dG9Db21taXQgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gY29uZi53Z05hbWVzcGFjZU51bWJlciAlIDJcblx0XHRcdFx0XHRcdD8gdHJ1ZVxuXHRcdFx0XHRcdFx0OiBIQy5ub19hdXRvY29tbWl0IC8vIE9uIHRhbGsgbmFtZXNwYWNlIGRlZmF1bHQgYXV0b2NvbW1pdCBvZmZcblx0XHRcdFx0XHQ6IGNvbmZpZy5Ib3RDYXROb0F1dG9Db21taXRcblx0XHRcdFx0OiAhIXdpbmRvdy5ob3RjYXRfbm9fYXV0b2NvbW1pdDtcblx0XHRIQy5kZWxfbmVlZHNfZGlmZiA9XG5cdFx0XHR3aW5kb3cuaG90Y2F0X2RlbF9uZWVkc19kaWZmID09PSB1bmRlZmluZWRcblx0XHRcdFx0PyBjb25maWcuSG90Q2F0RGVsTmVlZHNEaWZmID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLmRlbF9uZWVkc19kaWZmXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0RGVsTmVlZHNEaWZmXG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X2RlbF9uZWVkc19kaWZmO1xuXHRcdEhDLnN1Z2dlc3RfZGVsYXkgPSB3aW5kb3cuaG90Y2F0X3N1Z2dlc3Rpb25fZGVsYXkgfHwgY29uZmlnLkhvdENhdFN1Z2dlc3Rpb25EZWxheSB8fCBIQy5zdWdnZXN0X2RlbGF5O1xuXHRcdEhDLmVkaXRib3hfd2lkdGggPSB3aW5kb3cuaG90Y2F0X2VkaXRib3hfd2lkdGggfHwgY29uZmlnLkhvdENhdEVkaXRCb3hXaWR0aCB8fCBIQy5lZGl0Ym94X3dpZHRoO1xuXHRcdEhDLnN1Z2dlc3Rpb25zID0gd2luZG93LmhvdGNhdF9zdWdnZXN0aW9ucyB8fCBjb25maWcuSG90Q2F0U3VnZ2VzdGlvbnMgfHwgSEMuc3VnZ2VzdGlvbnM7XG5cdFx0aWYgKHR5cGVvZiBIQy5zdWdnZXN0aW9ucyAhPT0gJ3N0cmluZycgfHwgIXN1Z2dlc3Rpb25Db25maWdzW0hDLnN1Z2dlc3Rpb25zXSkge1xuXHRcdFx0SEMuc3VnZ2VzdGlvbnMgPSAnY29tYmluZWQnO1xuXHRcdH1cblx0XHRIQy5maXhlZF9zZWFyY2ggPVxuXHRcdFx0d2luZG93LmhvdGNhdF9zdWdnZXN0aW9uc19maXhlZCA9PT0gdW5kZWZpbmVkXG5cdFx0XHRcdD8gY29uZmlnLkhvdENhdEZpeGVkU3VnZ2VzdGlvbnMgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gSEMuZml4ZWRfc2VhcmNoXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0Rml4ZWRTdWdnZXN0aW9uc1xuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF9zdWdnZXN0aW9uc19maXhlZDtcblx0XHRIQy5zaW5nbGVfbWlub3IgPVxuXHRcdFx0d2luZG93LmhvdGNhdF9zaW5nbGVfY2hhbmdlc19hcmVfbWlub3IgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXRNaW5vclNpbmdsZUNoYW5nZXMgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHRcdD8gSEMuc2luZ2xlX21pbm9yXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0TWlub3JTaW5nbGVDaGFuZ2VzXG5cdFx0XHRcdDogISF3aW5kb3cuaG90Y2F0X3NpbmdsZV9jaGFuZ2VzX2FyZV9taW5vcjtcblx0XHRIQy5iZ19jaGFuZ2VkID0gd2luZG93LmhvdGNhdF9jaGFuZ2VkX2JhY2tncm91bmQgfHwgY29uZmlnLkhvdENhdENoYW5nZWRCYWNrZ3JvdW5kIHx8IEhDLmJnX2NoYW5nZWQ7XG5cdFx0SEMudXNlX3VwX2Rvd24gPVxuXHRcdFx0d2luZG93LmhvdGNhdF91c2VfY2F0ZWdvcnlfbGlua3MgPT09IHVuZGVmaW5lZFxuXHRcdFx0XHQ/IGNvbmZpZy5Ib3RDYXRVc2VDYXRlZ29yeUxpbmtzID09PSB1bmRlZmluZWRcblx0XHRcdFx0XHQ/IEhDLnVzZV91cF9kb3duXG5cdFx0XHRcdFx0OiBjb25maWcuSG90Q2F0VXNlQ2F0ZWdvcnlMaW5rc1xuXHRcdFx0XHQ6ICEhd2luZG93LmhvdGNhdF91c2VfY2F0ZWdvcnlfbGlua3M7XG5cdFx0SEMubGlzdFNpemUgPSB3aW5kb3cuaG90Y2F0X2xpc3Rfc2l6ZSB8fCBjb25maWcuSG90Q2F0TGlzdFNpemUgfHwgSEMubGlzdFNpemU7XG5cdFx0SEMuY2hhbmdlVGFnID0gY29uZmlnLkhvdENhdENoYW5nZVRhZyB8fCAnJztcblx0XHQvLyBUaGUgbmV4dCB3aG9sZSBzaGViYW5nIGlzIG5lZWRlZCwgYmVjYXVzZSBtYW51YWwgdGFncyBnZXQgbm90IHN1Ym1pdHRlZCBleGNlcHQgb2Ygc2F2ZVxuXHRcdGlmIChIQy5jaGFuZ2VUYWcpIHtcblx0XHRcdGNvbnN0IGVGb3JtID0gZG9jdW1lbnQuZWRpdGZvcm07XG5cdFx0XHRjb25zdCBjYXRSZWdFeHAgPSBuZXcgUmVnRXhwKGBeXFxcXFtcXFxcWygke0hDLmNhdGVnb3J5X3JlZ2V4cH0pOmApO1xuXHRcdFx0bGV0IG9sZFR4dDtcblx0XHRcdC8vIFJldHVybnMgdHJ1ZSBpZiBtaW5vciBjaGFuZ2Vcblx0XHRcdGNvbnN0IGlzTWlub3JDaGFuZ2UgPSAoKSA9PiB7XG5cdFx0XHRcdGxldCBuZXdUeHQgPSBlRm9ybS53cFRleHRib3gxO1xuXHRcdFx0XHRpZiAoIW5ld1R4dCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRuZXdUeHQgPSBuZXdUeHQudmFsdWU7XG5cdFx0XHRcdGNvbnN0IG9sZExpbmVzID0gb2xkVHh0Lm1hdGNoKC9eLiokL2dtKTtcblx0XHRcdFx0Y29uc3QgbmV3TGluZXMgPSBuZXdUeHQubWF0Y2goL14uKiQvZ20pO1xuXHRcdFx0XHRsZXQgY0FycjsgLy8gY2hhbmdlc1xuXHRcdFx0XHRjb25zdCBleGNlcHQgPSAoYUFyciwgYkFycikgPT4ge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IFtdO1xuXHRcdFx0XHRcdGxldCBsQXJyOyAvLyBzbWFsbGVyXG5cdFx0XHRcdFx0bGV0IC8vIGxhcmdlclxuXHRcdFx0XHRcdFx0c0Fycjtcblx0XHRcdFx0XHRpZiAoYUFyci5sZW5ndGggPCBiQXJyLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0bEFyciA9IGJBcnI7XG5cdFx0XHRcdFx0XHRzQXJyID0gYUFycjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bEFyciA9IGFBcnI7XG5cdFx0XHRcdFx0XHRzQXJyID0gYkFycjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBpdGVtIG9mIGxBcnIpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGluZCA9IHNBcnIuaW5kZXhPZihpdGVtKTtcblx0XHRcdFx0XHRcdGlmIChpbmQgPT09IC0xKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGl0ZW07XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRzQXJyLnNwbGljZShpbmQsIDEpOyAvLyBkb24ndCBjaGVjayB0aGlzIGl0ZW0gYWdhaW5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIFsuLi5yZXN1bHQsIC4uLnNBcnJdO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHRjQXJyID0gZXhjZXB0KG9sZExpbmVzLCBuZXdMaW5lcyk7XG5cdFx0XHRcdGlmIChjQXJyLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRjQXJyID0gY0Fyci5maWx0ZXIoKGMpID0+IHtcblx0XHRcdFx0XHRcdGMgPSBjLnRyaW0oKTtcblx0XHRcdFx0XHRcdHJldHVybiBjICYmICFjYXRSZWdFeHAudGVzdChjKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY0Fyci5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRvbGRUeHQgPSBuZXdUeHQ7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRpZiAoXG5cdFx0XHRcdGNvbmYud2dBY3Rpb24gPT09ICdzdWJtaXQnICYmXG5cdFx0XHRcdGNvbmYud2dBcnRpY2xlSWQgJiZcblx0XHRcdFx0ZUZvcm0gJiZcblx0XHRcdFx0ZUZvcm0ud3BTdW1tYXJ5ICYmXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aWtpRGlmZicpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y29uc3Qgc3VtID0gZUZvcm0ud3BTdW1tYXJ5O1xuXHRcdFx0XHRjb25zdCBzdW1BID0gZUZvcm0ud3BBdXRvU3VtbWFyeTtcblx0XHRcdFx0aWYgKHN1bS52YWx1ZSAmJiBzdW1BLnZhbHVlID09PSBIQy5jaGFuZ2VUYWcpIHtcblx0XHRcdFx0XHQvLyBIb3RDYXQgZGlmZlxuXHRcdFx0XHRcdC8vIE1ENSBoYXNoIG9mIHRoZSBlbXB0eSBzdHJpbmcsIGFzIEhvdENhdCBlZGl0IGlzIGJhc2VkIG9uIGVtcHR5IHN1bVxuXHRcdFx0XHRcdHN1bUEudmFsdWUgPSBzdW1BLnZhbHVlLnJlcGxhY2UoSEMuY2hhbmdlVGFnLCAnZDQxZDhjZDk4ZjAwYjIwNGU5ODAwOTk4ZWNmODQyN2UnKTtcblx0XHRcdFx0XHQvLyBBdHRyIGNyZWF0aW9uIGFuZCBldmVudCBoYW5kbGluZyBpcyBub3Qgc2FtZSBpbiBhbGwgKG9sZCkgYnJvd3NlcnMgc28gdXNlICRcblx0XHRcdFx0XHRjb25zdCAkY3QgPSAkKCc8aW5wdXQ+Jylcblx0XHRcdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRcdFx0dHlwZTogJ2hpZGRlbicsXG5cdFx0XHRcdFx0XHRcdG5hbWU6ICd3cENoYW5nZVRhZ3MnLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC52YWwoSEMuY2hhbmdlVGFnKTtcblx0XHRcdFx0XHQkKGVGb3JtKS5hcHBlbmQoJGN0KTtcblx0XHRcdFx0XHRvbGRUeHQgPSBlRm9ybS53cFRleHRib3gxLnZhbHVlO1xuXHRcdFx0XHRcdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRcdFx0XHRcdCRib2R5LmZpbmQoJ2lucHV0W25hbWU9d3BTYXZlXScpLm9uZSgnY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoJGN0LnZhbCgpKSB7XG5cdFx0XHRcdFx0XHRcdHN1bS52YWx1ZSA9IHN1bS52YWx1ZS5yZXBsYWNlKFxuXHRcdFx0XHRcdFx0XHRcdGdldE1lc3NhZ2UoJ21lc3NhZ2VzLXVzaW5nJykgfHwgZ2V0TWVzc2FnZSgnbWVzc2FnZXMtcHJlZml4JyksXG5cdFx0XHRcdFx0XHRcdFx0Jydcblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjb25zdCByZW1vdmVDaGFuZ2VUYWcgPSAoKSA9PiB7XG5cdFx0XHRcdFx0XHQkKGVGb3JtLndwVGV4dGJveDEpXG5cdFx0XHRcdFx0XHRcdC5hZGQoc3VtKVxuXHRcdFx0XHRcdFx0XHQub25lKCdpbnB1dCcsICgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChpc01pbm9yQ2hhbmdlKCkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVtb3ZlQ2hhbmdlVGFnKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkY3QudmFsKCcnKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9LCA1MDApO1xuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdHJlbW92ZUNoYW5nZVRhZygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIE51bWVyaWMgaW5wdXQsIG1ha2Ugc3VyZSB3ZSBoYXZlIGEgbnVtZXJpYyB2YWx1ZVxuXHRcdEhDLmxpc3RTaXplID0gTnVtYmVyLnBhcnNlSW50KEhDLmxpc3RTaXplLCAxMCk7XG5cdFx0aWYgKE51bWJlci5pc05hTihIQy5saXN0U2l6ZSkgfHwgSEMubGlzdFNpemUgPCA1KSB7XG5cdFx0XHRIQy5saXN0U2l6ZSA9IDU7XG5cdFx0fVxuXHRcdEhDLmxpc3RTaXplID0gTWF0aC5taW4oSEMubGlzdFNpemUsIDMwKTsgLy8gTWF4IHNpemVcblx0XHQvLyBMb2NhbGl6ZSBzZWFyY2ggZW5naW5lIG5hbWVzXG5cdFx0Zm9yIChjb25zdCBba2V5LCBzdWdnZXN0aW9uQ29uZmlnXSBvZiBPYmplY3QuZW50cmllcyhzdWdnZXN0aW9uQ29uZmlncykpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGlmIChrZXkgJiYgZ2V0TWVzc2FnZShgZW5naW5lX25hbWVzLSR7a2V5fWApKSB7XG5cdFx0XHRcdFx0c3VnZ2VzdGlvbkNvbmZpZy5uYW1lID0gZ2V0TWVzc2FnZShgZW5naW5lX25hbWVzLSR7a2V5fWApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIENhdGNoIGJvdGggbmF0aXZlIFJUTCBhbmQgXCJmYWtlZFwiIFJUTCB0aHJvdWdoIFtbTWVkaWFXaWtpOlJ0bC5qc11dXG5cdFx0aXNfcnRsID0gaGFzQ2xhc3MoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLCAncnRsJyk7XG5cdFx0aWYgKCFpc19ydGwpIHtcblx0XHRcdGlmIChkb2N1bWVudC5kZWZhdWx0VmlldyAmJiBkb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKSB7XG5cdFx0XHRcdC8vIEdlY2tvIGV0Yy5cblx0XHRcdFx0aXNfcnRsID0gZG9jdW1lbnQuZGVmYXVsdFZpZXdcblx0XHRcdFx0XHQuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksIG51bGwpXG5cdFx0XHRcdFx0LmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpO1xuXHRcdFx0fSBlbHNlIGlmICgkKCdib2R5JylbMF0uY3VycmVudFN0eWxlKSB7XG5cdFx0XHRcdC8vIElFLCBoYXMgc3VidGxlIGRpZmZlcmVuY2VzIHRvIGdldENvbXB1dGVkU3R5bGVcblx0XHRcdFx0aXNfcnRsID0gJCgnYm9keScpWzBdLmN1cnJlbnRTdHlsZS5kaXJlY3Rpb247XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBOb3QgZXhhY3RseSByaWdodCwgYnV0IGJlc3QgZWZmb3J0XG5cdFx0XHRcdGlzX3J0bCA9ICQoJ2JvZHknKVswXS5zdHlsZS5kaXJlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRpc19ydGwgPSBpc19ydGwgPT09ICdydGwnO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgY2FuX2VkaXQgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYS1lZGl0JykgIT09IG51bGw7XG5cdH07XG5cdC8vIExlZ2FjeSBzdHVmZlxuXHRjb25zdCBjbG9zZUZvcm0gPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gQ2xvc2UgYWxsIG9wZW4gZWRpdG9ycyB3aXRob3V0IHJlZGlyZWN0IHJlc29sdXRpb24gYW5kIG90aGVyIGFzeW5jaHJvbm91cyBzdHVmZi5cblx0XHRmb3IgKGNvbnN0IGVkaXQgb2YgZWRpdG9ycykge1xuXHRcdFx0aWYgKGVkaXQuc3RhdGUgPT09IE9QRU4pIHtcblx0XHRcdFx0ZWRpdC5jYW5jZWwoKTtcblx0XHRcdH0gZWxzZSBpZiAoZWRpdC5zdGF0ZSA9PT0gQ0hBTkdFX1BFTkRJTkcpIHtcblx0XHRcdFx0ZWRpdC5zYW5pdGl6ZUlucHV0KCk7XG5cdFx0XHRcdGNvbnN0IHZhbHVlID0gZWRpdC50ZXh0LnZhbHVlLnNwbGl0KCd8Jyk7XG5cdFx0XHRcdGxldCBrZXkgPSBudWxsO1xuXHRcdFx0XHRpZiAodmFsdWUubGVuZ3RoID4gMSkge1xuXHRcdFx0XHRcdFssIGtleV0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCB2ID0gdmFsdWVbMF0ucmVwbGFjZSgvXy9nLCAnICcpLnRyaW0oKTtcblx0XHRcdFx0aWYgKHYubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRcdFx0ZWRpdC5jYW5jZWwoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlZGl0LmN1cnJlbnRDYXRlZ29yeSA9IHY7XG5cdFx0XHRcdFx0ZWRpdC5jdXJyZW50S2V5ID0ga2V5O1xuXHRcdFx0XHRcdGVkaXQuY3VycmVudEV4aXN0cyA9IHRoaXMuaW5wdXRFeGlzdHM7XG5cdFx0XHRcdFx0ZWRpdC5jbG9zZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRjb25zdCBzZXR1cF91cGxvYWQgPSAoKSA9PiB7XG5cdFx0b25VcGxvYWQgPSB0cnVlO1xuXHRcdC8vIEFkZCBhbiBlbXB0eSBjYXRlZ29yeSBiYXIgYXQgdGhlIGVuZCBvZiB0aGUgdGFibGUgY29udGFpbmluZyB0aGUgZGVzY3JpcHRpb24sIGFuZCBjaGFuZ2UgdGhlIG9uc3VibWl0IGhhbmRsZXIuXG5cdFx0bGV0IGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LWh0bWxmb3JtLWRlc2NyaXB0aW9uJykgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT13cERlc3RGaWxlXScpO1xuXHRcdGlmICghaXApIHtcblx0XHRcdGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT13cERlc3RGaWxlXScpO1xuXHRcdFx0d2hpbGUgKGlwICYmIGlwLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09ICd0YWJsZScpIHtcblx0XHRcdFx0aXAgPSBpcC5wYXJlbnROb2RlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIWlwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHJldXBsb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT13cEZvclJlVXBsb2FkXScpO1xuXHRcdGNvbnN0IGRlc3RGaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT13cERlc3RGaWxlXScpO1xuXHRcdGlmICgocmV1cGxvYWQgJiYgISFyZXVwbG9hZC52YWx1ZSkgfHwgKGRlc3RGaWxlICYmIChkZXN0RmlsZS5kaXNhYmxlZCB8fCBkZXN0RmlsZS5yZWFkT25seSkpKSB7XG5cdFx0XHRyZXR1cm47IC8vIHJlLXVwbG9hZCBmb3JtLi4uXG5cdFx0fVxuXHRcdC8vIEluc2VydCBhIHRhYmxlIHJvdyB3aXRoIHR3byBmaWVsZHMgKGxhYmVsIGFuZCBlbXB0eSBjYXRlZ29yeSBiYXIpXG5cdFx0Y29uc3QgbGFiZWxDZWxsID0gbWFrZSgndGQnKTtcblx0XHRjb25zdCBsaW5lQ2VsbCA9IG1ha2UoJ3RkJyk7XG5cdFx0Ly8gQ3JlYXRlIHRoZSBjYXRlZ29yeSBsaW5lXG5cdFx0Y2F0TGluZSA9IG1ha2UoJ2RpdicpO1xuXHRcdGNhdExpbmUuY2xhc3NOYW1lID0gJ2NhdGxpbmtzJztcblx0XHRjYXRMaW5lLmlkID0gJ2NhdGxpbmtzJztcblx0XHRjYXRMaW5lLnN0eWxlLnRleHRBbGlnbiA9IGlzX3J0bCA/ICdyaWdodCcgOiAnbGVmdCc7XG5cdFx0Ly8gV2UnbGwgYmUgaW5zaWRlIGEgdGFibGUgcm93LiBNYWtlIHN1cmUgdGhhdCB3ZSBkb24ndCBoYXZlIG1hcmdpbnMgb3Igc3RyYW5nZSBib3JkZXJzLlxuXHRcdGNhdExpbmUuc3R5bGUubWFyZ2luID0gJzAnO1xuXHRcdGNhdExpbmUuc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xuXHRcdGxpbmVDZWxsLmFwcGVuZChjYXRMaW5lKTtcblx0XHQvLyBDcmVhdGUgdGhlIGxhYmVsXG5cdFx0Y29uc3QgbGFiZWwgPSBudWxsO1xuXHRcdGlmIChsYWJlbCkge1xuXHRcdFx0bGFiZWxDZWxsLmlkID0gJ2hvdGNhdExhYmVsVHJhbnNsYXRlZCc7XG5cdFx0XHRsYWJlbENlbGwuYXBwZW5kKGxhYmVsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGFiZWxDZWxsLmlkID0gJ2hvdGNhdExhYmVsJztcblx0XHRcdGxhYmVsQ2VsbC5hcHBlbmQobWFrZShnZXRNZXNzYWdlKCdjYXRlZ29yaWVzJyksIHRydWUpKTtcblx0XHR9XG5cdFx0bGFiZWxDZWxsLmNsYXNzTmFtZSA9ICdtdy1sYWJlbCc7XG5cdFx0bGFiZWxDZWxsLnN0eWxlLnRleHRBbGlnbiA9ICdyaWdodCc7XG5cdFx0bGFiZWxDZWxsLnN0eWxlLnZlcnRpY2FsQWxpZ24gPSAnbWlkZGxlJztcblx0XHQvLyBDaGFuZ2UgdGhlIG9uc3VibWl0IGhhbmRsZXJcblx0XHRjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VwbG9hZCcpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy11cGxvYWQtZm9ybScpO1xuXHRcdGlmIChmb3JtKSB7XG5cdFx0XHRjb25zdCBuZXdSb3cgPSBpcC5pbnNlcnRSb3coLTEpO1xuXHRcdFx0bmV3Um93LmFwcGVuZChsYWJlbENlbGwpO1xuXHRcdFx0bmV3Um93LmFwcGVuZChsaW5lQ2VsbCk7XG5cdFx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChvbGRTdWJtaXQsIC4uLmFyZ3MpID0+IHtcblx0XHRcdFx0cmV0dXJuICgoKSA9PiB7XG5cdFx0XHRcdFx0bGV0IGRvX3N1Ym1pdCA9IHRydWU7XG5cdFx0XHRcdFx0aWYgKG9sZFN1Ym1pdCkge1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBvbGRTdWJtaXQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1ldmFsXG5cdFx0XHRcdFx0XHRcdGRvX3N1Ym1pdCA9IHdpbmRvdy5ldmFsKG9sZFN1Ym1pdCk7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG9sZFN1Ym1pdCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdGRvX3N1Ym1pdCA9IG9sZFN1Ym1pdC5hcHBseShmb3JtLCBbb2xkU3VibWl0LCAuLi5hcmdzXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICghZG9fc3VibWl0KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNsb3NlRm9ybSgpO1xuXHRcdFx0XHRcdC8vIENvcHkgdGhlIGNhdGVnb3JpZXNcblx0XHRcdFx0XHRjb25zdCBlYiA9XG5cdFx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYVtuYW1lPXdwVXBsb2FkRGVzY3JpcHRpb25dJykgfHxcblx0XHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3cERlc2MnKTtcblx0XHRcdFx0XHRsZXQgYWRkZWRPbmUgPSBmYWxzZTtcblx0XHRcdFx0XHRmb3IgKGNvbnN0IGVkaXRvciBvZiBlZGl0b3JzKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB0ID0gZWRpdG9yLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdFx0XHRcdGlmICghdCkge1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNvbnN0IGtleSA9IGVkaXRvci5jdXJyZW50S2V5O1xuXHRcdFx0XHRcdFx0Y29uc3QgbmV3X2NhdCA9IGBbWyR7SEMuY2F0ZWdvcnlfY2Fub25pY2FsfToke3R9JHtrZXkgPyBgfCR7a2V5fWAgOiAnJ31dXWA7XG5cdFx0XHRcdFx0XHQvLyBPbmx5IGFkZCBpZiBub3QgYWxyZWFkeSBwcmVzZW50XG5cdFx0XHRcdFx0XHRjb25zdCBub3dpa2lSZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdFx0XHRcdCc8bm8nLmNvbmNhdCgnd2lraT4nLCBTdHJpbmcucmF3YChcXHN8XFxTKSo/PC9ub2AsICd3aWtpJywgJz4nKSxcblx0XHRcdFx0XHRcdFx0J2cnXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0Y29uc3QgX2NsZWFuZWRUZXh0ID0gZWIudmFsdWUucmVwbGFjZSgvPCEtLShcXHN8XFxTKSo/LS0+L2csICcnKS5yZXBsYWNlKG5vd2lraVJlZ2V4KTtcblx0XHRcdFx0XHRcdGlmICghZmluZF9jYXRlZ29yeShfY2xlYW5lZFRleHQsIHQsIHRydWUpKSB7XG5cdFx0XHRcdFx0XHRcdGViLnZhbHVlICs9IGBcXG4ke25ld19jYXR9YDtcblx0XHRcdFx0XHRcdFx0YWRkZWRPbmUgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoYWRkZWRPbmUpIHtcblx0XHRcdFx0XHRcdC8vIFJlbW92ZSBcInN1YnN0OnVuY1wiIGFkZGVkIGJ5IEZsaW5mbyBpZiBpdCBkaWRuJ3QgZmluZCBjYXRlZ29yaWVzXG5cdFx0XHRcdFx0XHRjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoJ3t7JCcuY29uY2F0KCdzdWJzdDonKS5jb25jYXQoJ3VuY319JyksICdnJyk7XG5cdFx0XHRcdFx0XHRlYi52YWx1ZSA9IGViLnZhbHVlLnJlcGxhY2UocmVnZXgsICcnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH0pKGZvcm0ub25zdWJtaXQpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXHRsZXQgY2xlYW5lZFRleHQgPSBudWxsO1xuXHRjb25zdCBpc09uUGFnZSA9ICh7Zmlyc3RDaGlsZH0pID0+IHtcblx0XHRpZiAoZmlyc3RDaGlsZC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRsZXQgY2F0VGl0bGUgPSB0aXRsZShmaXJzdENoaWxkLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcblx0XHRpZiAoIWNhdFRpdGxlKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdFx0Y2F0VGl0bGUgPSBjYXRUaXRsZS5zbGljZShjYXRUaXRsZS5pbmRleE9mKCc6JykgKyAxKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0aWYgKEhDLmJsYWNrbGlzdCAmJiBIQy5ibGFja2xpc3QudGVzdChjYXRUaXRsZSkpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRjb25zdCByZXN1bHQgPSB7XG5cdFx0XHR0aXRsZTogY2F0VGl0bGUsXG5cdFx0XHRtYXRjaDogWycnLCAnJywgJyddLFxuXHRcdH07XG5cdFx0aWYgKHBhZ2VUZXh0ID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRpZiAoY2xlYW5lZFRleHQgPT09IG51bGwpIHtcblx0XHRcdGNvbnN0IG5vd2lraVJlZ2V4ID0gbmV3IFJlZ0V4cCgnPG5vJy5jb25jYXQoJ3dpa2k+JywgU3RyaW5nLnJhd2AoXFxzfFxcUykqPzwvbm9gLCAnd2lraScsICc+JyksICdnJyk7XG5cdFx0XHRjbGVhbmVkVGV4dCA9IHBhZ2VUZXh0LnJlcGxhY2UoLzwhLS0oXFxzfFxcUykqPy0tPi9nLCAnJykucmVwbGFjZShub3dpa2lSZWdleCwgJycpO1xuXHRcdH1cblx0XHRyZXN1bHQubWF0Y2ggPSBmaW5kX2NhdGVnb3J5KGNsZWFuZWRUZXh0LCBjYXRUaXRsZSwgdHJ1ZSk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblx0bGV0IGluaXRpYWxpemVkID0gZmFsc2U7XG5cdGxldCBzZXR1cFRpbWVvdXQgPSBudWxsO1xuXHRjb25zdCBmaW5kQnlDbGFzcyA9IChzY29wZSwgdGFnLCBjbGFzc05hbWUpID0+IHtcblx0XHRjb25zdCByZXN1bHQgPSAkKHNjb3BlKS5maW5kKGAke3RhZ30uJHtjbGFzc05hbWV9YCk7XG5cdFx0cmV0dXJuIHJlc3VsdCAmJiByZXN1bHQubGVuZ3RoID4gMCA/IHJlc3VsdFswXSA6IG51bGw7XG5cdH07XG5cdGNvbnN0IHNldHVwID0gKGFkZGl0aW9uYWxXb3JrKSA9PiB7XG5cdFx0aWYgKGluaXRpYWxpemVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluaXRpYWxpemVkID0gdHJ1ZTtcblx0XHRpZiAoc2V0dXBUaW1lb3V0KSB7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KHNldHVwVGltZW91dCk7XG5cdFx0XHRzZXR1cFRpbWVvdXQgPSBudWxsO1xuXHRcdH1cblx0XHQvLyBGaW5kIHRoZSBjYXRlZ29yeSBiYXIsIG9yIGNyZWF0ZSBhbiBlbXB0eSBvbmUgaWYgdGhlcmUgaXNuJ3Qgb25lLiBUaGVuIGFkZCAtLystIGxpbmtzIGFmdGVyXG5cdFx0Ly8gZWFjaCBjYXRlZ29yeSwgYW5kIGFkZCB0aGUgKyBsaW5rLlxuXHRcdGNhdExpbmUgfHw9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtdy1ub3JtYWwtY2F0bGlua3MnKTsgLy8gU3BlY2lhbDpVcGxvYWRcblx0XHRjb25zdCBoaWRkZW5DYXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LWhpZGRlbi1jYXRsaW5rcycpO1xuXHRcdGlmICghY2F0TGluZSkge1xuXHRcdFx0bGV0IGZvb3RlciA9IG51bGw7XG5cdFx0XHRpZiAoIWhpZGRlbkNhdHMpIHtcblx0XHRcdFx0Zm9vdGVyID0gZmluZEJ5Q2xhc3MoZG9jdW1lbnQsICdkaXYnLCAncHJpbnRmb290ZXInKTtcblx0XHRcdFx0aWYgKCFmb290ZXIpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gLy8gRG9uJ3Qga25vdyB3aGVyZSB0byBpbnNlcnQgdGhlIGNhdGVnb3J5IGxpbmVcblx0XHRcdH1cblx0XHRcdGNhdExpbmUgPSBtYWtlKCdkaXYnKTtcblx0XHRcdGNhdExpbmUuaWQgPSAnbXctbm9ybWFsLWNhdGxpbmtzJztcblx0XHRcdGNhdExpbmUuc3R5bGUudGV4dEFsaWduID0gaXNfcnRsID8gJ3JpZ2h0JyA6ICdsZWZ0Jztcblx0XHRcdC8vIEFkZCBhIGxhYmVsXG5cdFx0XHRjb25zdCBsYWJlbCA9IG1ha2UoJ2EnKTtcblx0XHRcdGxhYmVsLmhyZWYgPSBjb25mLndnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnU3BlY2lhbDpDYXRlZ29yaWVzJyk7XG5cdFx0XHRsYWJlbC50aXRsZSA9IGdldE1lc3NhZ2UoJ2NhdGVnb3JpZXMnKTtcblx0XHRcdGxhYmVsLmFwcGVuZChtYWtlKGdldE1lc3NhZ2UoJ2NhdGVnb3JpZXMnKSwgdHJ1ZSkpO1xuXHRcdFx0Y2F0TGluZS5hcHBlbmQobGFiZWwpO1xuXHRcdFx0Y2F0TGluZS5hcHBlbmQobWFrZSgnOicsIHRydWUpKTtcblx0XHRcdC8vIEluc2VydCB0aGUgbmV3IGNhdGVnb3J5IGxpbmVcblx0XHRcdGxldCBjb250YWluZXIgPSBoaWRkZW5DYXRzID8gaGlkZGVuQ2F0cy5wYXJlbnROb2RlIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGxpbmtzJyk7XG5cdFx0XHRpZiAoIWNvbnRhaW5lcikge1xuXHRcdFx0XHRjb250YWluZXIgPSBtYWtlKCdkaXYnKTtcblx0XHRcdFx0Y29udGFpbmVyLmlkID0gJ2NhdGxpbmtzJztcblx0XHRcdFx0Zm9vdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lciwgZm9vdGVyLm5leHRTaWJsaW5nKTtcblx0XHRcdH1cblx0XHRcdGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY2F0bGlua3Mgbm9wcmludCc7XG5cdFx0XHRjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICcnO1xuXHRcdFx0aWYgKGhpZGRlbkNhdHMpIHtcblx0XHRcdFx0aGlkZGVuQ2F0cy5iZWZvcmUoY2F0TGluZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb250YWluZXIuYXBwZW5kKGNhdExpbmUpO1xuXHRcdFx0fVxuXHRcdH0gLy8gZW5kIGlmIGNhdExpbmUgZXhpc3RzXG5cdFx0aWYgKGlzX3J0bCkge1xuXHRcdFx0Y2F0TGluZS5kaXIgPSAncnRsJztcblx0XHR9XG5cdFx0Ly8gQ3JlYXRlIGVkaXRvcnMgZm9yIGFsbCBleGlzdGluZyBjYXRlZ29yaWVzXG5cdFx0Y29uc3QgY3JlYXRlRWRpdG9ycyA9IChsaW5lLCBpc19oaWRkZW4pID0+IHtcblx0XHRcdGxldCBpO1xuXHRcdFx0bGV0IGNhdHMgPSBsaW5lLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG5cdFx0XHRpZiAoY2F0cy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdG5ld0RPTSA9IHRydWU7XG5cdFx0XHRcdGxpbmUgPSBjYXRzWzBdLnBhcmVudE5vZGU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjYXRzID0gbGluZS5xdWVyeVNlbGVjdG9yQWxsKCdzcGFuJyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBDb3B5IGNhdHMsIG90aGVyd2lzZSBpdCdsbCBhbHNvIG1hZ2ljYWxseSBjb250YWluIG91ciBhZGRlZCBzcGFucyBhcyBpdCBpcyBhIGxpdmUgY29sbGVjdGlvbiFcblx0XHRcdGNvbnN0IGNvcHlDYXRzID0gQXJyYXkuZnJvbSh7XG5cdFx0XHRcdGxlbmd0aDogY2F0cy5sZW5ndGgsXG5cdFx0XHR9KTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvcHlDYXRzW2ldID0gY2F0c1tpXTtcblx0XHRcdH1cblx0XHRcdGZvciAoaSA9IDA7IGkgPCBjb3B5Q2F0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRjb25zdCB0ZXN0ID0gaXNPblBhZ2UoY29weUNhdHNbaV0pO1xuXHRcdFx0XHRpZiAodGVzdCAhPT0gbnVsbCAmJiB0ZXN0Lm1hdGNoICE9PSBudWxsICYmIGxpbmUpIHtcblx0XHRcdFx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IobGluZSwgY29weUNhdHNbaV0sIHRlc3QudGl0bGUsIHRlc3QubWF0Y2hbMl0sIGlzX2hpZGRlbik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBjb3B5Q2F0cy5sZW5ndGggPiAwID8gY29weUNhdHMuYXQoLTEpIDogbnVsbDtcblx0XHR9O1xuXHRcdGNvbnN0IGxhc3RTcGFuID0gY3JlYXRlRWRpdG9ycyhjYXRMaW5lLCBmYWxzZSk7XG5cdFx0Ly8gQ3JlYXRlIG9uZSB0byBhZGQgYSBuZXcgY2F0ZWdvcnlcblx0XHRuZXcgQ2F0ZWdvcnlFZGl0b3IobmV3RE9NID8gY2F0TGluZS5xdWVyeVNlbGVjdG9yQWxsKCd1bCcpWzBdIDogY2F0TGluZSwgbnVsbCwgbnVsbCwgbGFzdFNwYW4gIT09IG51bGwsIGZhbHNlKTtcblx0XHRpZiAoIW9uVXBsb2FkKSB7XG5cdFx0XHRpZiAocGFnZVRleHQgIT09IG51bGwgJiYgaGlkZGVuQ2F0cykge1xuXHRcdFx0XHRpZiAoaXNfcnRsKSB7XG5cdFx0XHRcdFx0aGlkZGVuQ2F0cy5kaXIgPSAncnRsJztcblx0XHRcdFx0fVxuXHRcdFx0XHRjcmVhdGVFZGl0b3JzKGhpZGRlbkNhdHMsIHRydWUpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQW5kIGZpbmFsbHkgYWRkIHRoZSBcIm11bHRpLW1vZGVcIiBzcGFuLiAoRG8gdGhpcyBhdCB0aGUgZW5kLCBvdGhlcndpc2UgaXQgZW5kcyB1cCBpbiB0aGUgbGlzdCBhYm92ZS4pXG5cdFx0XHRjb25zdCBlbmFibGVNdWx0aSA9IG1ha2UoJ3NwYW4nKTtcblx0XHRcdGVuYWJsZU11bHRpLmNsYXNzTmFtZSA9ICdub3ByaW50Jztcblx0XHRcdGlmIChpc19ydGwpIHtcblx0XHRcdFx0ZW5hYmxlTXVsdGkuZGlyID0gJ3J0bCc7XG5cdFx0XHR9XG5cdFx0XHRjYXRMaW5lLmluc2VydEJlZm9yZShlbmFibGVNdWx0aSwgY2F0TGluZS5maXJzdENoaWxkLm5leHRTaWJsaW5nKTtcblx0XHRcdGVuYWJsZU11bHRpLmFwcGVuZChtYWtlKCdcXHUwMEEwJywgdHJ1ZSkpOyAvLyBuYnNwXG5cdFx0XHRtdWx0aVNwYW4gPSBtYWtlKCdzcGFuJyk7XG5cdFx0XHRlbmFibGVNdWx0aS5hcHBlbmQobXVsdGlTcGFuKTtcblx0XHRcdG11bHRpU3Bhbi5pbm5lckhUTUwgPSBgKDxhPiR7SEMuYWRkbXVsdGl9PC9hPilgO1xuXHRcdFx0Y29uc3QgW2xpbmtdID0gbXVsdGlTcGFuLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKTtcblx0XHRcdGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0c2V0TXVsdGlJbnB1dCgpO1xuXHRcdFx0XHRjaGVja011bHRpSW5wdXQoKTtcblx0XHRcdFx0cmV0dXJuIGV2dEtpbGwoZXZlbnQpO1xuXHRcdFx0fSk7XG5cdFx0XHRsaW5rLnRpdGxlID0gZ2V0TWVzc2FnZSgnbXVsdGlfdG9vbHRpcCcpO1xuXHRcdFx0bGluay5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG5cdFx0fVxuXHRcdGNsZWFuZWRUZXh0ID0gbnVsbDtcblx0XHRpZiAoYWRkaXRpb25hbFdvcmsgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuXHRcdFx0YWRkaXRpb25hbFdvcmsoKTtcblx0XHR9XG5cdFx0bXcuaG9vaygnaG90Y2F0LnJlYWR5JykuZmlyZSgpOyAvLyBFeGVjdXRlIHJlZ2lzdGVyZWQgY2FsbGJhY2sgZnVuY3Rpb25zXG5cdFx0JCgnYm9keScpLnRyaWdnZXIoJ2hvdGNhdFNldHVwQ29tcGxldGVkJyk7XG5cdH07XG5cdGNvbnN0IGNyZWF0ZUNvbW1pdEZvcm0gPSAoKSA9PiB7XG5cdFx0aWYgKGNvbW1pdEZvcm0pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgZm9ybUNvbnRhaW5lciA9IG1ha2UoJ2RpdicpO1xuXHRcdGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kKGZvcm1Db250YWluZXIpO1xuXHRcdGZvcm1Db250YWluZXIuaW5uZXJIVE1MID0gYDxmb3JtIGlkPVwiaG90Y2F0Q29tbWl0Rm9ybVwiIG1ldGhvZD1cInBvc3RcIiBlbmN0eXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIGFjdGlvbj1cIiR7XG5cdFx0XHRjb25mLndnU2NyaXB0XG5cdFx0fT90aXRsZT0ke2VuY29kZVVSSUNvbXBvbmVudChcblx0XHRcdGNvbmYud2dQYWdlTmFtZVxuXHRcdCl9JmFjdGlvbj1zdWJtaXRcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3cFRleHRib3gxXCI+JHtgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwibW9kZWxcIiB2YWx1ZT1cIiR7Y29uZi53Z1BhZ2VDb250ZW50TW9kZWx9XCI+YH08aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJmb3JtYXRcIiB2YWx1ZT1cInRleHQveC13aWtpXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BTdW1tYXJ5XCIgdmFsdWU9XCJcIj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIndwTWlub3JlZGl0XCIgdmFsdWU9XCIxXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ3cFdhdGNodGhpc1wiIHZhbHVlPVwiMVwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwQXV0b1N1bW1hcnlcIiB2YWx1ZT1cImQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0MjdlXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BFZGl0dGltZVwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwU3RhcnR0aW1lXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BEaWZmXCIgdmFsdWU9XCJ3cERpZmZcIj48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJvbGRpZFwiIHZhbHVlPVwiMFwiPjxpbnB1dCB0eXBlPVwic3VibWl0XCIgbmFtZT1cImhjQ29tbWl0XCIgdmFsdWU9XCJoY0NvbW1pdFwiPjxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIndwRWRpdFRva2VuXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BVbHRpbWF0ZVBhcmFtXCIgdmFsdWU9XCIxXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid3BDaGFuZ2VUYWdzXCI+PGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIuKEs/CdkrLimaXwnZOK8J2Tg/Cdkr7wnZK44oS08J2SueKEr1wiIG5hbWU9XCJ3cFVuaWNvZGVDaGVja1wiPjwvZm9ybT5gO1xuXHRcdGNvbW1pdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG90Y2F0Q29tbWl0Rm9ybScpO1xuXHR9O1xuXHRjb25zdCBnZXRQYWdlID0gKCkgPT4ge1xuXHRcdC8vIFdlIGtub3cgd2UgaGF2ZSBhbiBhcnRpY2xlIGhlcmUuXG5cdFx0aWYgKGNvbmYud2dBcnRpY2xlSWQpIHtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdFx0XHRyYXdjb250aW51ZTogJycsXG5cdFx0XHRcdHRpdGxlczogY29uZi53Z1BhZ2VOYW1lLFxuXHRcdFx0XHRwcm9wOiBbJ2luZm8nLCAncmV2aXNpb25zJ10sXG5cdFx0XHRcdHJ2cHJvcDogWydjb250ZW50JywgJ3RpbWVzdGFtcCcsICdpZHMnXSxcblx0XHRcdFx0cnZsaW1pdDogJzEnLFxuXHRcdFx0XHRydnN0YXJ0aWQ6IGNvbmYud2dDdXJSZXZpc2lvbklkLFxuXHRcdFx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0XHRcdG1ldGE6IFsnc2l0ZWluZm8nXSxcblx0XHRcdH07XG5cdFx0XHRIQy5zdGFydCA9IChkYXRhKSA9PiB7XG5cdFx0XHRcdHNldFBhZ2UoZGF0YSk7XG5cdFx0XHRcdHNldHVwKGNyZWF0ZUNvbW1pdEZvcm0pO1xuXHRcdFx0fTtcblx0XHRcdGFwaS5nZXQocGFyYW1zKS50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRcdEhDLnN0YXJ0KGRhdGEpO1xuXHRcdFx0fSk7XG5cdFx0XHRzZXR1cFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2V0dXAoY3JlYXRlQ29tbWl0Rm9ybSk7XG5cdFx0XHR9LCA0MDAwKTsgLy8gNCBzZWMsIGp1c3QgaW4gY2FzZSBnZXR0aW5nIHRoZSB3aWtpdGV4dCB0YWtlcyBsb25nZXIuXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIERvZXNuJ3QgZXhpc3QgeWV0LiBEaXNhYmxlIG9uIG5vbi1leGlzdGluZyBVc2VyIHBhZ2VzLlxuXHRcdFx0aWYgKGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IDIpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cGFnZVRleHQgPSAnJztcblx0XHRcdHBhZ2VUaW1lID0gbnVsbDtcblx0XHRcdHNldHVwKGNyZWF0ZUNvbW1pdEZvcm0pO1xuXHRcdH1cblx0fTtcblx0Y29uc3Qgc2V0U3RhdGUgPSAoc3RhdGUpID0+IHtcblx0XHRjb25zdCBjYXRzID0gc3RhdGUuc3BsaXQoJ1xcbicpO1xuXHRcdGlmIChjYXRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHRcdGlmIChpbml0aWFsaXplZCAmJiBlZGl0b3JzLmxlbmd0aCA9PT0gMSAmJiBlZGl0b3JzWzBdLmlzQWRkQ2F0ZWdvcnkpIHtcblx0XHRcdC8vIEluc2VydCBuZXcgc3BhbnMgYW5kIGNyZWF0ZSBuZXcgZWRpdG9ycyBmb3IgdGhlbS5cblx0XHRcdGNvbnN0IG5ld1NwYW5zID0gW107XG5cdFx0XHRjb25zdCBiZWZvcmUgPSBlZGl0b3JzLmxlbmd0aCA9PT0gMSA/IGVkaXRvcnNbMF0uc3BhbiA6IG51bGw7XG5cdFx0XHRsZXQgaTtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBjYXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChjYXRzW2ldLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBjYXQgPSBjYXRzW2ldLnNwbGl0KCd8Jyk7XG5cdFx0XHRcdGNvbnN0IGtleSA9IGNhdC5sZW5ndGggPiAxID8gY2F0WzFdIDogbnVsbDtcblx0XHRcdFx0W2NhdF0gPSBjYXQ7XG5cdFx0XHRcdGNvbnN0IGxpbmsgPSBtYWtlKCdhJyk7XG5cdFx0XHRcdGxpbmsuaHJlZiA9IHdpa2lQYWdlUGF0aChgJHtIQy5jYXRlZ29yeV9jYW5vbmljYWx9OiR7Y2F0fWApO1xuXHRcdFx0XHRsaW5rLmFwcGVuZChtYWtlKGNhdCwgdHJ1ZSkpO1xuXHRcdFx0XHRsaW5rLnRpdGxlID0gY2F0O1xuXHRcdFx0XHRjb25zdCBzcGFuID0gbWFrZSgnc3BhbicpO1xuXHRcdFx0XHRzcGFuLmFwcGVuZChsaW5rKTtcblx0XHRcdFx0aWYgKCFpKSB7XG5cdFx0XHRcdFx0Y2F0TGluZS5pbnNlcnRCZWZvcmUobWFrZSgnICcsIHRydWUpLCBiZWZvcmUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJlZm9yZS5iZWZvcmUoc3Bhbik7XG5cdFx0XHRcdGlmIChiZWZvcmUgJiYgaSArIDEgPCBjYXRzLmxlbmd0aCkge1xuXHRcdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUobWFrZSgnIHwgJywgdHJ1ZSksIGJlZm9yZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bmV3U3BhbnNbbmV3U3BhbnMubGVuZ3RoXSA9IHtcblx0XHRcdFx0XHRlbGVtZW50OiBzcGFuLFxuXHRcdFx0XHRcdHRpdGxlOiBjYXQsXG5cdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Ly8gQW5kIGNoYW5nZSB0aGUgbGFzdCBvbmUuLi5cblx0XHRcdGlmIChiZWZvcmUpIHtcblx0XHRcdFx0YmVmb3JlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG1ha2UoJyB8ICcsIHRydWUpLCBiZWZvcmUpO1xuXHRcdFx0fVxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG5ld1NwYW5zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdG5ldyBDYXRlZ29yeUVkaXRvcihjYXRMaW5lLCBuZXdTcGFuc1tpXS5lbGVtZW50LCBuZXdTcGFuc1tpXS50aXRsZSwgbmV3U3BhbnNbaV0ua2V5KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdGNvbnN0IGdldFN0YXRlID0gKCkgPT4ge1xuXHRcdGxldCByZXN1bHQgPSBudWxsO1xuXHRcdGZvciAoY29uc3QgZWRpdG9yIG9mIGVkaXRvcnMpIHtcblx0XHRcdGxldCB0ZXh0ID0gZWRpdG9yLmN1cnJlbnRDYXRlZ29yeTtcblx0XHRcdGNvbnN0IGtleSA9IGVkaXRvci5jdXJyZW50S2V5O1xuXHRcdFx0aWYgKHRleHQgJiYgdGV4dC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdGlmIChrZXkgIT09IG51bGwpIHtcblx0XHRcdFx0XHR0ZXh0ICs9IGB8JHtrZXl9YDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAocmVzdWx0ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gdGV4dDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXN1bHQgKz0gYFxcbiR7dGV4dH1gO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cdGNvbnN0IHJlYWxseV9ydW4gPSAoKSA9PiB7XG5cdFx0aW5pdGlhbGl6ZSgpO1xuXHRcdGlmIChcblx0XHRcdCFIQy51cGxvYWRfZGlzYWJsZWQgJiZcblx0XHRcdGNvbmYud2dOYW1lc3BhY2VOdW1iZXIgPT09IC0xICYmXG5cdFx0XHRjb25mLndnQ2Fub25pY2FsU3BlY2lhbFBhZ2VOYW1lID09PSAnVXBsb2FkJyAmJlxuXHRcdFx0Y29uZi53Z1VzZXJOYW1lXG5cdFx0KSB7XG5cdFx0XHRzZXR1cF91cGxvYWQoKTtcblx0XHRcdHNldHVwKCgpID0+IHtcblx0XHRcdFx0Ly8gQ2hlY2sgZm9yIHN0YXRlIHJlc3RvcmF0aW9uIG9uY2UgdGhlIHNldHVwIGlzIGRvbmUgb3RoZXJ3aXNlLCBidXQgYmVmb3JlIHNpZ25hbGxpbmcgc2V0dXAgY29tcGxldGlvblxuXHRcdFx0XHRpZiAod2luZG93LlVwbG9hZEZvcm0gJiYgVXBsb2FkRm9ybS5wcmV2aW91c19ob3RjYXRfc3RhdGUpIHtcblx0XHRcdFx0XHRVcGxvYWRGb3JtLnByZXZpb3VzX2hvdGNhdF9zdGF0ZSA9IHNldFN0YXRlKFVwbG9hZEZvcm0ucHJldmlvdXNfaG90Y2F0X3N0YXRlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChcblx0XHRcdFx0IWNvbmYud2dJc0FydGljbGUgfHxcblx0XHRcdFx0Y29uZi53Z0FjdGlvbiAhPT0gJ3ZpZXcnIHx8XG5cdFx0XHRcdHBhcmFtKCdkaWZmJykgIT09IG51bGwgfHxcblx0XHRcdFx0cGFyYW0oJ29sZGlkJykgIT09IG51bGwgfHxcblx0XHRcdFx0IWNhbl9lZGl0KCkgfHxcblx0XHRcdFx0SEMuZGlzYWJsZSgpXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Z2V0UGFnZSgpO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgcnVuID0gKCkgPT4ge1xuXHRcdGlmIChIQy5zdGFydGVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdEhDLnN0YXJ0ZWQgPSB0cnVlO1xuXHRcdHJlYWxseV9ydW4oKTtcblx0fTtcblx0Ly8gRXhwb3J0IGxlZ2FjeSBmdW5jdGlvbnNcblx0d2luZG93LmhvdGNhdF9nZXRfc3RhdGUgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIGdldFN0YXRlKCk7XG5cdH07XG5cdHdpbmRvdy5ob3RjYXRfc2V0X3N0YXRlID0gKHN0YXRlKSA9PiB7XG5cdFx0cmV0dXJuIHNldFN0YXRlKHN0YXRlKTtcblx0fTtcblx0d2luZG93LmhvdGNhdF9jbG9zZV9mb3JtID0gKCkgPT4ge1xuXHRcdGNsb3NlRm9ybSgpO1xuXHR9O1xuXHRIQy5ydW5XaGVuUmVhZHkgPSAoY2FsbGJhY2spID0+IHtcblx0XHQvLyBydW4gdXNlci1yZWdpc3RlcmVkIGNvZGUgb25jZSBIb3RDYXQgaXMgZnVsbHkgc2V0IHVwIGFuZCByZWFkeS5cblx0XHRtdy5ob29rKCdob3RjYXQucmVhZHknKS5hZGQoY2FsbGJhY2spO1xuXHR9O1xuXHQvLyBSdW4gYXMgc29vbiBhcyBwb3NzaWJsZS4gVGhpcyB2YXJpZXMgZGVwZW5kaW5nIG9uIE1lZGlhV2lraSB2ZXJzaW9uO1xuXHQvLyB3aW5kb3cncyAnbG9hZCcgZXZlbnQgaXMgYWx3YXlzIHNhZmUsIGJ1dCB1c3VhbGx5IHdlIGNhbiBkbyBiZXR0ZXIgdGhhbiB0aGF0LlxuXHRpZiAoY29uZi53Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSAhPT0gJ1VwbG9hZCcpIHtcblx0XHQvLyBSZWxvYWQgSG90Q2F0IGFmdGVyIChWRSkgZWRpdHMgKGJ1ZyBUMTAzMjg1KVxuXHRcdG13Lmhvb2soJ3Bvc3RFZGl0JykuYWRkKCgpID0+IHtcblx0XHRcdC8vIFJlc2V0IEhvdENhdCBpbiBjYXNlIHRoaXMgaXMgYSBzb2Z0IHJlbG9hZCAoZS5nLiBWaXN1YWxFZGl0b3IgZWRpdCksIHVubGVzcyB0aGUgY2F0ZWdvcmllc1xuXHRcdFx0Ly8gd2VyZSBub3QgcmUtcmVuZGVyZWQgYW5kIG91ciBpbnRlcmZhY2UgaXMgc3RpbGwgdGhlcmUgKGUuZy4gRGlzY3Vzc2lvblRvb2xzIGVkaXQpXG5cdFx0XHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGxpbmtzIC5ob3RjYXRsaW5rJykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y2F0TGluZSA9IG51bGw7XG5cdFx0XHRlZGl0b3JzID0gW107XG5cdFx0XHRpbml0aWFsaXplZCA9IGZhbHNlO1xuXHRcdFx0SEMuc3RhcnRlZCA9IGZhbHNlO1xuXHRcdFx0cnVuKCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2UgY2FuIHNhZmVseSB0cmlnZ2VyIGp1c3QgYWZ0ZXIgdXNlciBjb25maWd1cmF0aW9uIGlzIGxvYWRlZC5cblx0Ly8gVXNlIGFsd2F5cygpIGluc3RlYWQgb2YgdGhlbigpIHRvIGFsc28gc3RhcnQgSG90Q2F0IGlmIHRoZSB1c2VyIG1vZHVsZSBoYXMgcHJvYmxlbXMuXG5cdCQocnVuKTtcbn0pKCk7XG4iLCAiY29uc3QgZ2V0TWVzc2FnZSA9IChrZXk6IHN0cmluZywgLi4uYXJnczogc3RyaW5nW10pOiBzdHJpbmcgPT4ge1xuXHRrZXkgPSBgaG90Y2F0LSR7a2V5fWA7XG5cdC8vIE1lc3NhZ2VzIHRoYXQgY2FuIGJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgbWVzc2FnZXMudHNcblx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRyZXR1cm4gbXcubWVzc2FnZShrZXksIC4uLmFyZ3MpLnBsYWluKCk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImNvbnN0IGhvdENhdE1lc3NhZ2VzID0gKCk6IHZvaWQgPT4ge1xuXHRjb25zdCB7d2dVc2VyTGFuZ3VhZ2V9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChbJ3poLWhhbnQnLCAnemgtaGsnLCAnemgtbW8nLCAnemgtdHcnXS5pbmNsdWRlcyh3Z1VzZXJMYW5ndWFnZSkpIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaRbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy10ZW1wbGF0ZV9yZW1vdmVkJzogJ+W3suenu+mZpHt7W1tDYXRlZ29yeTokMV1dfX0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfYWRkZWQnOiAn5bey5re75YqgW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdC8vICQyIGlzIHRoZSBuZXcga2V5XG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9rZXljaGFuZ2UnOiAn5bey6Kit572uW1tDYXRlZ29yeTokMV1d55qE5paw5o6S5bqP5a2X77yaXCIkMlwiJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X25vdEZvdW5kJzogJ+WIhumhnuKAnCQx4oCd5rKS5pyJ5om+5YiwJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2V4aXN0cyc6ICfliIbpoZ7igJwkMeKAneW3sue2k+WtmOWcqO+8jOaykuaciea3u+WKoOOAgicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9yZXNvbHZlZCc6ICfvvIjph43lrprlkJFbW0NhdGVnb3J5OiQxXV3lt7LomZXnkIbvvIknLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11bmNhdF9yZW1vdmVkJzogJ+W3suenu+mZpHt7dW5jYXRlZ29yaXplZH19Jyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBwcmVmaXggdG8gdGhlIGVkaXQgc3VtbWFyeS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtcHJlZml4JzogJ+S9v+eUqFtbSDpIT1RDQVR8SG90Q2F0XV0nLFxuXHRcdFx0Ly8gU29tZSB0ZXh0IHRvIGFwcGVuZCB0byB0aGUgZWRpdCBzdW1tYXJ5LiBOYW1lZCAndXNpbmcnIGZvciBoaXN0b3JpY2FsIHJlYXNvbnMuIElmIHlvdSBwcmVmZXJcblx0XHRcdC8vIHRvIGhhdmUgYSBtYXJrZXIgYXQgdGhlIGZyb250LCB1c2UgcHJlZml4IGFuZCBzZXQgdGhpcyB0byB0aGUgZW1wdHkgc3RyaW5nLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11c2luZyc6ICcnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9jaGFuZ2UnOiAnJDHlgIvliIbpoZ4nLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnk7IGkuZS4sIGEgY2F0ZWdvcnkgdGhhdCBzaG91bGQgbm90IGNvbnRhaW5cblx0XHRcdC8vIGFueSBpdGVtcywgYnV0IHRoYXQgY29udGFpbnMgbGlua3MgdG8gb3RoZXIgY2F0ZWdvcmllcyB3aGVyZSBzdHVmZiBzaG91bGQgYmUgY2F0ZWdvcml6ZWQuIElmIHlvdSBkb24ndCBoYXZlXG5cdFx0XHQvLyB0aGF0IGNvbmNlcHQgb24geW91ciB3aWtpLCBzZXQgaXQgdG8gYmxhbmsgc3RyaW5nLiBVc2UgYmxhbmtzLCBub3QgdW5kZXJzY29yZXMuXG5cdFx0XHQnaG90Y2F0LWRpc2FtYmlnX2NhdGVnb3J5JzogJycsXG5cdFx0XHQvLyBBbnkgY2F0ZWdvcnkgaW4gdGhpcyBjYXRlZ29yeSBpcyBkZWVtZWQgYSAoc29mdCkgcmVkaXJlY3QgdG8gc29tZSBvdGhlciBjYXRlZ29yeSBkZWZpbmVkIGJ5IGEgbGlua1xuXHRcdFx0Ly8gdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnkuIElmIHlvdXIgd2lraSBkb2Vzbid0IGhhdmUgc29mdCBjYXRlZ29yeSByZWRpcmVjdHMsIHNldCB0aGlzIHRvIG51bGwuXG5cdFx0XHQvLyBJZiBhIHNvZnQtcmVkaXJlY3RlZCBjYXRlZ29yeSBjb250YWlucyBtb3JlIHRoYW4gb25lIGxpbmsgdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnksIGl0J3MgY29uc2lkZXJlZFxuXHRcdFx0Ly8gYSBkaXNhbWJpZ3VhdGlvbiBjYXRlZ29yeSBpbnN0ZWFkLlxuXHRcdFx0J2hvdGNhdC1yZWRpcl9jYXRlZ29yeSc6ICflt7Lph43lrprlkJHnmoTliIbnsbsnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1zZXBhcmF0b3InOiAnOyAnLFxuXHRcdFx0Ly8gJDEgaXMgcmVwbGFjZWQgYnkgYSBudW1iZXIuIElmIHlvdXIgbGFuZ3VhZ2UgaGFzIHNldmVyYWwgcGx1cmFsIGZvcm1zIChjLmYuIFtbOmVud2lraTpEdWFsIChncmFtbWF0aWNhbCBmb3JtKV1dKSxcblx0XHRcdC8vIHlvdSBjYW4gc2V0IHRoaXMgdG8gYW4gYXJyYXkgb2Ygc3RyaW5ncyBzdWl0YWJsZSBmb3IgcGFzc2luZyB0byBtdy5sYW5ndWFnZS5jb25maWdQbHVyYWwoKS5cblx0XHRcdC8vIElmIHRoYXQgZnVuY3Rpb24gZG9lc24ndCBleGlzdCwgSG90Q2F0IHdpbGwgc2ltcGx5IGZhbGwgYmFjayB0byB1c2luZyB0aGUgbGFzdFxuXHRcdFx0Ly8gZW50cnkgaW4gdGhlIGFycmF5LlxuXHRcdFx0Ly8gRGVmYXVsdHMgdG8gJ1tbJyArIGNhdGVnb3J5X2Nhbm9uaWNhbCArICc6JDFdXScuIENhbiBiZSBvdmVycmlkZGVuIGlmIGluIHRoZSBzaG9ydCBlZGl0IHN1bW1hcmllc1xuXHRcdFx0Ly8gbm90IHRoZSBzdGFuZGFyZCBjYXRlZ29yeSBuYW1lIHNob3VsZCBiZSB1c2VkIGJ1dCwgc2F5LCBhIHNob3J0ZXIgbmFtZXNwYWNlIGFsaWFzLiAkMSBpcyByZXBsYWNlZFxuXHRcdFx0Ly8gYnkgYSBjYXRlZ29yeSBuYW1lLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1zaG9ydF9jYXRjaGFuZ2UnOiAnJDEnLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY29tbWl0JzogJ+WEsuWtmCcsXG5cdFx0XHQvLyBCdXR0b24gdGV4dC4gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1vayc6ICfnorrlrponLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2FuY2VsJzogJ+WPlua2iCcsXG5cdFx0XHQvLyBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLW11bHRpX2Vycm9yJzpcblx0XHRcdFx0J+eEoeazleW+nuS8uuacjeWZqOWPluW+l+mggemdouaWh+Wtl+OAguWboOatpO+8jOaCqOeahOWIhumhnuiuiuabtOeEoeazleWEsuWtmOOAguaIkeWAkeeCuuatpOS4jeS+v+ihqOekuuaKseatieOAgicsXG5cdFx0XHQvLyBQbHVyYWwgb2YgY2F0ZWdvcnlfY2Fub25pY2FsLlxuXHRcdFx0J2hvdGNhdC1jYXRlZ29yaWVzJzogJ+WIhumhnicsXG5cdFx0XHQvLyBOYW1lcyBmb3IgdGhlIHNlYXJjaCBlbmdpbmVzXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1zZWFyY2hpbmRleCc6ICfmkJzlsIvntKLlvJUnLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtcGFnZWxpc3QnOiAn6aCB6Z2i5YiX6KGoJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLWNvbWJpbmVkJzogJ+WQiOS9teaQnOWwiycsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1zdWJjYXQnOiAn5a2Q5YiG6aGeJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXBhcmVudGNhdCc6ICfkuIrlsaTliIbpoZ4nLFxuXHRcdFx0Ly8gVGhlIHRvb2x0aXBzIGZvciB0aGUgYWJvdmUgbGlua3Ncblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtY2hhbmdlJzogJ+S/ruaUuScsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXJlbW92ZSc6ICfnp7vpmaQnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1hZGQnOiAn5aKe5Yqg5LiA5YCL5paw5YiG6aGeJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtcmVzdG9yZSc6ICflvqnljp/orormm7QnLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy11bmRvJzogJ+W+qeWOn+iuiuabtCcsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWRvd24nOiAn5omT6ZaL5Lul5L+u5pS55Lim6aGv56S65a2Q5YiG6aGeJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtdXAnOiAn5omT6ZaL5Lul5L+u5pS55Lim6aGv56S65LiK5bGk5YiG6aGeJyxcblx0XHRcdC8vIFRvb2x0aXAgZm9yIHRoZSBcImVudGVyIG11bHRpLW1vZGVcIiBsaW5rXG5cdFx0XHQnaG90Y2F0LW11bHRpX3Rvb2x0aXAnOiAn5L+u5pS55aSa5YCL5YiG6aGeJyxcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRtdy5tZXNzYWdlcy5zZXQoe1xuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfcmVtb3ZlZCc6ICflt7Lnp7vpmaRbW0NhdGVnb3J5OiQxXV0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy10ZW1wbGF0ZV9yZW1vdmVkJzogJ+W3suenu+mZpHt7W1tDYXRlZ29yeTokMV1dfX0nLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1jYXRfYWRkZWQnOiAn5bey5re75YqgW1tDYXRlZ29yeTokMV1dJyxcblx0XHRcdC8vICQyIGlzIHRoZSBuZXcga2V5XG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9rZXljaGFuZ2UnOiAn5bey6K6+572uW1tDYXRlZ29yeTokMV1d55qE5paw5o6S5bqP5a2X77yaXCIkMlwiJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X25vdEZvdW5kJzogJ+WIhuexu+KAnCQx4oCd5rKh5pyJ5om+5YiwJyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtY2F0X2V4aXN0cyc6ICfliIbnsbvigJwkMeKAneW3sue7j+WtmOWcqO+8jOayoeaciea3u+WKoOOAgicsXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhdF9yZXNvbHZlZCc6ICfvvIjph43lrprlkJFbW0NhdGVnb3J5OiQxXV3lt7LlpITnkIbvvIknLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11bmNhdF9yZW1vdmVkJzogJ+W3suenu+mZpHt7dW5jYXRlZ29yaXplZH19Jyxcblx0XHRcdC8vIFNvbWUgdGV4dCB0byBwcmVmaXggdG8gdGhlIGVkaXQgc3VtbWFyeS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtcHJlZml4JzogJ+S9v+eUqFtbSDpIT1RDQVR8SG90Q2F0XV0nLFxuXHRcdFx0Ly8gU29tZSB0ZXh0IHRvIGFwcGVuZCB0byB0aGUgZWRpdCBzdW1tYXJ5LiBOYW1lZCAndXNpbmcnIGZvciBoaXN0b3JpY2FsIHJlYXNvbnMuIElmIHlvdSBwcmVmZXJcblx0XHRcdC8vIHRvIGhhdmUgYSBtYXJrZXIgYXQgdGhlIGZyb250LCB1c2UgcHJlZml4IGFuZCBzZXQgdGhpcyB0byB0aGUgZW1wdHkgc3RyaW5nLlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy11c2luZyc6ICcnLFxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9jaGFuZ2UnOiAnJDHkuKrliIbnsbsnLFxuXHRcdFx0Ly8gQW55IGNhdGVnb3J5IGluIHRoaXMgY2F0ZWdvcnkgaXMgZGVlbWVkIGEgZGlzYW1iaWd1YXRpb24gY2F0ZWdvcnk7IGkuZS4sIGEgY2F0ZWdvcnkgdGhhdCBzaG91bGQgbm90IGNvbnRhaW5cblx0XHRcdC8vIGFueSBpdGVtcywgYnV0IHRoYXQgY29udGFpbnMgbGlua3MgdG8gb3RoZXIgY2F0ZWdvcmllcyB3aGVyZSBzdHVmZiBzaG91bGQgYmUgY2F0ZWdvcml6ZWQuIElmIHlvdSBkb24ndCBoYXZlXG5cdFx0XHQvLyB0aGF0IGNvbmNlcHQgb24geW91ciB3aWtpLCBzZXQgaXQgdG8gYmxhbmsgc3RyaW5nLiBVc2UgYmxhbmtzLCBub3QgdW5kZXJzY29yZXMuXG5cdFx0XHQnaG90Y2F0LWRpc2FtYmlnX2NhdGVnb3J5JzogJycsXG5cdFx0XHQvLyBBbnkgY2F0ZWdvcnkgaW4gdGhpcyBjYXRlZ29yeSBpcyBkZWVtZWQgYSAoc29mdCkgcmVkaXJlY3QgdG8gc29tZSBvdGhlciBjYXRlZ29yeSBkZWZpbmVkIGJ5IGEgbGlua1xuXHRcdFx0Ly8gdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnkuIElmIHlvdXIgd2lraSBkb2Vzbid0IGhhdmUgc29mdCBjYXRlZ29yeSByZWRpcmVjdHMsIHNldCB0aGlzIHRvIG51bGwuXG5cdFx0XHQvLyBJZiBhIHNvZnQtcmVkaXJlY3RlZCBjYXRlZ29yeSBjb250YWlucyBtb3JlIHRoYW4gb25lIGxpbmsgdG8gYW5vdGhlciBub24tYmxhY2tsaXN0ZWQgY2F0ZWdvcnksIGl0J3MgY29uc2lkZXJlZFxuXHRcdFx0Ly8gYSBkaXNhbWJpZ3VhdGlvbiBjYXRlZ29yeSBpbnN0ZWFkLlx0XHRcdCdob3RjYXQtcmVkaXJfY2F0ZWdvcnknOiAn5bey6YeN5a6a5ZCR55qE5YiG57G7Jyxcblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2VwYXJhdG9yJzogJzsgJyxcblx0XHRcdC8vICQxIGlzIHJlcGxhY2VkIGJ5IGEgbnVtYmVyLiBJZiB5b3VyIGxhbmd1YWdlIGhhcyBzZXZlcmFsIHBsdXJhbCBmb3JtcyAoYy5mLiBbWzplbndpa2k6RHVhbCAoZ3JhbW1hdGljYWwgZm9ybSldXSksXG5cdFx0XHQvLyB5b3UgY2FuIHNldCB0aGlzIHRvIGFuIGFycmF5IG9mIHN0cmluZ3Mgc3VpdGFibGUgZm9yIHBhc3NpbmcgdG8gbXcubGFuZ3VhZ2UuY29uZmlnUGx1cmFsKCkuXG5cdFx0XHQvLyBJZiB0aGF0IGZ1bmN0aW9uIGRvZXNuJ3QgZXhpc3QsIEhvdENhdCB3aWxsIHNpbXBseSBmYWxsIGJhY2sgdG8gdXNpbmcgdGhlIGxhc3Rcblx0XHRcdC8vIGVudHJ5IGluIHRoZSBhcnJheS5cblx0XHRcdC8vIERlZmF1bHRzIHRvICdbWycgKyBjYXRlZ29yeV9jYW5vbmljYWwgKyAnOiQxXV0nLiBDYW4gYmUgb3ZlcnJpZGRlbiBpZiBpbiB0aGUgc2hvcnQgZWRpdCBzdW1tYXJpZXNcblx0XHRcdC8vIG5vdCB0aGUgc3RhbmRhcmQgY2F0ZWdvcnkgbmFtZSBzaG91bGQgYmUgdXNlZCBidXQsIHNheSwgYSBzaG9ydGVyIG5hbWVzcGFjZSBhbGlhcy4gJDEgaXMgcmVwbGFjZWRcblx0XHRcdC8vIGJ5IGEgY2F0ZWdvcnkgbmFtZS5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtc2hvcnRfY2F0Y2hhbmdlJzogJyQxJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNvbW1pdCc6ICfkv53lrZgnLFxuXHRcdFx0Ly8gQnV0dG9uIHRleHQuIExvY2FsaXplIHRvIHdnQ29udGVudExhbmd1YWdlIGhlcmU7IGxvY2FsaXplIHRvIHdnVXNlckxhbmd1YWdlIGluIGEgc3VicGFnZSxcblx0XHRcdC8vIHNlZSBsb2NhbGl6YXRpb24gaG9vayBiZWxvdy5cblx0XHRcdCdob3RjYXQtbWVzc2FnZXMtb2snOiAn56Gu5a6aJyxcblx0XHRcdC8vIEJ1dHRvbiB0ZXh0LiBMb2NhbGl6ZSB0byB3Z0NvbnRlbnRMYW5ndWFnZSBoZXJlOyBsb2NhbGl6ZSB0byB3Z1VzZXJMYW5ndWFnZSBpbiBhIHN1YnBhZ2UsXG5cdFx0XHQvLyBzZWUgbG9jYWxpemF0aW9uIGhvb2sgYmVsb3cuXG5cdFx0XHQnaG90Y2F0LW1lc3NhZ2VzLWNhbmNlbCc6ICflj5bmtognLFxuXHRcdFx0Ly8gTG9jYWxpemUgdG8gd2dDb250ZW50TGFuZ3VhZ2UgaGVyZTsgbG9jYWxpemUgdG8gd2dVc2VyTGFuZ3VhZ2UgaW4gYSBzdWJwYWdlLFxuXHRcdFx0Ly8gc2VlIGxvY2FsaXphdGlvbiBob29rIGJlbG93LlxuXHRcdFx0J2hvdGNhdC1tZXNzYWdlcy1tdWx0aV9lcnJvcic6XG5cdFx0XHRcdCfml6Dms5Xku47mnI3liqHlmajlj5blvpfpobXpnaLmloflrZfjgILlm6DmraTvvIzmgqjnmoTliIbnsbvmm7TmlLnml6Dms5Xkv53lrZjjgILmiJHku6zkuLrmraTkuI3kvr/ooajnpLrmirHmrYnjgIInLFxuXHRcdFx0Ly8gUGx1cmFsIG9mIGNhdGVnb3J5X2Nhbm9uaWNhbC5cblx0XHRcdCdob3RjYXQtY2F0ZWdvcmllcyc6ICfliIbnsbsnLFxuXHRcdFx0Ly8gTmFtZXMgZm9yIHRoZSBzZWFyY2ggZW5naW5lc1xuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc2VhcmNoaW5kZXgnOiAn5pCc57Si57Si5byVJyxcblx0XHRcdCdob3RjYXQtZW5naW5lX25hbWVzLXBhZ2VsaXN0JzogJ+mhtemdouWIl+ihqCcsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1jb21iaW5lZCc6ICflkIjlubbmkJzntKInLFxuXHRcdFx0J2hvdGNhdC1lbmdpbmVfbmFtZXMtc3ViY2F0JzogJ+WtkOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LWVuZ2luZV9uYW1lcy1wYXJlbnRjYXQnOiAn5LiK5bGC5YiG57G7Jyxcblx0XHRcdC8vIFRoZSB0b29sdGlwcyBmb3IgdGhlIGFib3ZlIGxpbmtzXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLWNoYW5nZSc6ICfkv67mlLknLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1yZW1vdmUnOiAn56e76ZmkJyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtYWRkJzogJ+WinuWKoOS4gOS4quaWsOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXJlc3RvcmUnOiAn5pKk6ZSA5pu05pS5Jyxcblx0XHRcdCdob3RjYXQtdG9vbHRpcHMtdW5kbyc6ICfmkqTplIDmm7TmlLknLFxuXHRcdFx0J2hvdGNhdC10b29sdGlwcy1kb3duJzogJ+aJk+W8gOS7peS/ruaUueW5tuaYvuekuuWtkOWIhuexuycsXG5cdFx0XHQnaG90Y2F0LXRvb2x0aXBzLXVwJzogJ+aJk+W8gOS7peS/ruaUueW5tuaYvuekuuS4iuWxguWIhuexuycsXG5cdFx0XHQvLyBUb29sdGlwIGZvciB0aGUgXCJlbnRlciBtdWx0aS1tb2RlXCIgbGlua1xuXHRcdFx0J2hvdGNhdC1tdWx0aV90b29sdGlwJzogJ+S/ruaUueWkmuS4quWIhuexuycsXG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7aG90Q2F0TWVzc2FnZXN9O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNPLElBQU1BLHFCQUFxQjs7QUNEbEMsSUFBQUMsb0JBQXdCQyxRQUFBLGlCQUFBO0FBR3hCLElBQU1DLFFBQXlDQyxlQUFjO0FBQzVELFVBQUEsR0FBT0gsa0JBQUFJLFdBQVVELFNBQVM7QUFDM0I7O0NDTUMsU0FBU0UsY0FBYztBQUN2QixNQUNDQyxHQUFHQyxPQUFPQyxJQUFJLG1CQUFtQixNQUFNLEtBQ3ZDQyxPQUFPQyxrQ0FDUCxDQUFDQyxTQUFTQyxjQUFjLGtCQUFrQixHQUN6QztBQUNEO0VBQ0Q7QUFDQSxRQUFNQyxNQUFNWCxNQUFNLGlCQUFpQjtBQUNuQyxRQUFNWSx3QkFBd0I7QUFDOUIsUUFBTUMsV0FBVztBQUNqQixRQUFNQyxrQkFBa0I7QUFDeEIsUUFBTUMsY0FBY1gsR0FBR1ksUUFBUVYsSUFBSVEsZUFBZTtBQU9sRCxRQUFNRyxjQUFlQyxlQUE4QjtBQUNsRCxXQUFPQyxFQUFFLFFBQVEsRUFBRUMsS0FBSyxTQUFBLFdBQUFDLE9BQW9CSCxXQUFTLEdBQUEsRUFBQUcsT0FBSXhCLGtCQUFrQixDQUFFLEVBQUV5QixLQUFLLEdBQUc7RUFDeEY7QUFDQSxRQUFNQyxtQkFBbUJBLENBQUNDLFVBQStCQyxNQUFjQyxVQUF1QztBQUM3RyxXQUFPUCxFQUFFLE9BQU8sRUFDZFEsU0FBUyxXQUFXLEVBQ3BCQyxPQUNBVCxFQUFFLE9BQU8sRUFDUEMsS0FBSyxTQUFBLEdBQUFDLE9BQVlLLE9BQUssZ0JBQUEsQ0FBZ0IsRUFDdENHLElBQUk7TUFDSixjQUFjO01BQ2RDLFNBQVM7SUFDVixDQUFDLEVBQ0FGLE9BQU9ULEVBQUUsS0FBSyxFQUFFUyxPQUFPWCxZQUFZUSxJQUFJLEVBQUVJLElBQUksZUFBZSxPQUFPLEdBQUdMLFFBQVEsQ0FBQyxDQUNsRjtFQUNGO0FBR0FMLElBQUUsTUFBTSxFQUFFWSxJQUFJLDJCQUEyQixxQkFBcUIsU0FBVUMsR0FBRztBQUFBLFFBQUFDO0FBQzFFLFFBQUlsQixnQkFBZ0IsWUFBWTtBQUMvQixhQUFPO0lBQ1I7QUFFQSxVQUFNbUIsT0FBTztBQUViLFVBQU1DLFVBQUFGLHdCQUFVQyxLQUFLRSxXQUFtQ0MsV0FBQSxRQUFBSiwwQkFBQSxTQUFBLFNBQXhDQSxzQkFBK0NLLFFBQVExQix1QkFBdUIsRUFBRTtBQUNoRyxVQUFNMkIsYUFHRixDQUFDO0FBQ0wsUUFBSUM7QUFDSixRQUFJQztBQUNKLFFBQUlDO0FBQ0osUUFBSUM7QUFDSixVQUFNQyxXQUFXQSxNQUFNO0FBQ3JCVixXQUFLVyxVQUErQlIsUUFBQSx5Q0FBQWhCLE9BQUEseUJBQUFBLE9BQytCYSxLQUFLVyxVQUErQlIsS0FBSyxDQUFBO0FBRTVHSCxXQUFLRSxXQUFtQ0MsUUFBUUY7SUFDbEQ7QUFDQSxVQUFNVyxlQUFnQkMsU0FBZ0I7QUFDckMzQyxTQUFHWSxRQUFRZ0MsSUFBSWxDLGlCQUFpQmlDLEtBQUssTUFBTTtJQUM1QztBQUNBUixlQUFXLGFBQWEsSUFBSSxXQUFZO0FBQUEsVUFBQVU7QUFDdkNMLGVBQVM7QUFDVCxXQUFBSyx3QkFBS1Qsb0JBQW9CLENBQUMsT0FBQSxRQUFBUywwQkFBQSxVQUFyQkEsc0JBQTZDQyxTQUFTO0FBQzFESixxQkFBYSxNQUFNO01BQ3BCO0FBQ0EzQixRQUFFLElBQUksRUFBRWdDLE9BQU8sT0FBTztJQUN2QjtBQUNBWixlQUFXLGFBQWEsSUFBSSxXQUFZO0FBQUEsVUFBQWE7QUFDdkMsV0FBQUEseUJBQUtaLG9CQUFvQixDQUFDLE9BQUEsUUFBQVksMkJBQUEsVUFBckJBLHVCQUE2Q0YsU0FBUztBQUMxREoscUJBQWEsVUFBVTtNQUN4QjtBQUNBM0IsUUFBRSxJQUFJLEVBQUVnQyxPQUFPLE9BQU87SUFDdkI7QUFDQSxVQUFNRSxXQUFXLFNBQTZCQyxJQUFrQjtBQUMvREEsU0FBR0MsZUFBZTtBQUNsQixVQUFJZCxlQUFlZSxTQUFTLG1CQUFtQixHQUFHO0FBQ2pEO01BQ0Q7QUFDQSxZQUFNQyxNQUEyQnRDLEVBQUUsSUFBSTtBQUN2Q3NDLFVBQUlDLElBQUksT0FBTyxFQUFFcEMsS0FBSyxjQUFjO0FBQ3BDbUIscUJBQWVkLFNBQVMsbUJBQW1CO0FBQzNDLFlBQU1nQyxTQUFTO1FBQ2RDLFFBQVE7UUFDUkMsT0FBQSxRQUFBeEMsT0FBZWpCLEdBQUdDLE9BQU9DLElBQUksWUFBWSxHQUFDLFlBQUE7UUFDMUN3RCxTQUFBLEdBQUF6QyxPQUFZUixVQUFRLDhCQUFBO1FBQ3BCa0QsWUFBWU4sSUFBSU8sS0FBSyxTQUFTO01BQy9CO0FBQ0EsWUFBTUMsV0FBWUMsY0FBd0Q7QUFDekUsWUFBSSxDQUFDQSxVQUFVO0FBQ2Q7UUFDRDtBQUNBLFlBQUlBLFNBQVNDLE9BQU87QUFDbkIsZUFBSy9ELEdBQUdnRSxPQUFBLG1EQUFBL0MsT0FDNEM2QyxTQUFTQyxNQUFNRSxNQUFJLElBQUEsRUFBQWhELE9BQUs2QyxTQUFTQyxNQUFNRyxJQUFJLEdBQzlGO1lBQUNDLEtBQUs7WUFBZUMsTUFBTTtVQUFPLENBQ25DO0FBQ0FmLGNBQUluQyxLQUFLLGFBQWE7UUFDdkIsT0FBTztBQUNObUMsY0FBSW5DLEtBQUssT0FBTztBQUNoQm1CLHlCQUFlZ0MsUUFBUTtRQUN4QjtNQUNEO0FBQ0EsV0FBSzlELElBQUkrRCxjQUFjLFFBQVFmLE1BQU0sRUFBRWdCLEtBQUtWLFFBQVE7SUFDckQ7QUFNQSxVQUFNVyxTQUFTQSxNQUFNO0FBQ3BCcEMsNEJBQXNCckIsRUFBRSxTQUFTLEVBQy9CQyxLQUFLO1FBQ0xvRCxNQUFNO1FBQ05LLElBQUk7TUFDTCxDQUFDLEVBQ0FDLEdBQUcsVUFBVSxXQUFZO0FBQ3pCLFlBQUssS0FBMEI1QixTQUFTO0FBQ3ZDVCx5QkFBZXNDLE9BQU87UUFDdkIsT0FBTztBQUNOdEMseUJBQWVnQyxRQUFRO1FBQ3hCO01BQ0QsQ0FBQztBQUNGL0Isc0JBQWdCdkIsRUFBRSxNQUFNO0FBQ3hCQSxRQUFFLE1BQU0sRUFDTlMsT0FDQVQsRUFBRSxLQUFLLEVBQ0xDLEtBQUssUUFBUSxHQUFHLEVBQ2hCRSxLQUFLLHVCQUF1QixFQUM1QjBDLEtBQUssV0FBVyxpREFBaUQsRUFDakVjLEdBQUcsU0FBU3pCLFFBQVEsQ0FDdkIsRUFDQzJCLFNBQVN0QyxhQUFhO0FBQ3hCdkIsUUFBRSxNQUFNLEVBQ05TLE9BQ0FULEVBQUUsS0FBSyxFQUNMQyxLQUFLLFFBQVEsR0FBRyxFQUNoQkUsS0FBSywwRUFBMEUsRUFDL0UwQyxLQUFLLFdBQVcsMkNBQTJDLEVBQzNEYyxHQUFHLFNBQVN6QixRQUFRLENBQ3ZCLEVBQ0MyQixTQUFTdEMsYUFBYTtBQUN4QkQsdUJBQWlCbEIsaUJBQ2hCSixFQUFFLFFBQVEsRUFBRUcsS0FBSyx3Q0FBd0MsRUFBRU0sT0FBT2MsYUFBYSxHQUMvRSxnQkFDQSxvQkFDRDtBQUNBQyxnQkFBVXhCLEVBQUUsT0FBTyxFQUNqQlMsT0FDQVQsRUFBRSxRQUFRLEVBQ1JVLElBQUk7UUFDSixhQUFhO1FBQ2IsZUFBZTtNQUNoQixDQUFDLEVBQ0FELE9BQ0FULEVBQUUsUUFBUSxFQUFFRyxLQUFLLHdCQUF3QixFQUFFTyxJQUFJO1FBQzlDLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkJvRCxTQUFTO01BQ1YsQ0FBQyxHQUNEOUQsRUFBRSxRQUFRLEVBQUVHLEtBQUssSUFBSSxDQUN0QixDQUNGLEVBQ0NNLE9BQ0EsUUFDQVkscUJBQ0FyQixFQUFFLFNBQVMsRUFBRUMsS0FBSyxPQUFPLGlDQUFpQyxFQUFFRSxLQUFLLGlCQUFpQixHQUNsRixNQUNELEVBQ0NNLE9BQU94QixHQUFHOEUsS0FBS0MsT0FBTyxJQUFJLEtBQUsxQyxlQUFlMkMsS0FBSyxDQUFDO0FBQ3REekMsY0FBUVEsT0FBTztRQUNka0MsT0FBTztRQUNQQyxlQUFlO1FBQ2Z6QixPQUFPO1FBQ1AwQixPQUFPO1FBQ1BDLFNBQVNqRDtRQUNUa0QsT0FBT0EsTUFBTTtBQUNaLGdCQUFNQyxRQUFRdkUsRUFBRSxNQUFNO0FBQ3RCdUUsZ0JBQU1DLEtBQUssbUJBQW1CLEVBQUVDLFFBQVEsUUFBUTtRQUNqRDtRQUNBQyxPQUFPO0FBQ04sZ0JBQU1DLFdBQVczRSxFQUFFLElBQUksRUFBRTRFLE9BQU8sRUFBRUosS0FBSyw4QkFBOEI7QUFDckVHLG1CQUFTRSxHQUFHLENBQUMsRUFBRUMsT0FBTztZQUNyQkMsT0FBTztjQUNOQyxTQUFTO1lBQ1Y7VUFDRCxDQUFDO0FBQ0RMLG1CQUFTRSxHQUFHLENBQUMsRUFBRUMsT0FBTztZQUNyQkMsT0FBTztjQUNOQyxTQUFTO1lBQ1Y7VUFDRCxDQUFDO1FBQ0Y7TUFDRCxDQUFDO0lBQ0Y7QUFFQSxRQUFJaEUsV0FBWUQsS0FBS0UsV0FBbUNDLE9BQU87QUFDOUQsVUFBSTlCLE9BQU82Riw0QkFBNEJyRixnQkFBZ0IsUUFBUTtBQUM5RDZCLGlCQUFTO0FBQ1QsZUFBTztNQUNSO0FBQ0FaLFFBQUV1QixlQUFlO0FBQ2pCcUIsYUFBTztJQUNSO0FBQ0EsV0FBTztFQUNSLENBQUM7QUFFRCxRQUFNeUIsVUFBVWxGLEVBQUUsS0FBSyxFQUNyQkMsS0FBSztJQUNMa0YsTUFBTTtJQUNOekMsT0FBTztFQUNSLENBQUMsRUFDQWpDLE9BQU8sS0FBSyxFQUNaTixLQUFLLHNCQUFzQjtBQUM3QitFLFVBQVF2QixHQUFHLFNBQVMsU0FBVTlDLEdBQUc7QUFDaENBLE1BQUV1QixlQUFlO0FBQ2pCLFVBQU1FLE1BQU10QyxFQUFFLElBQUk7QUFDbEJzQyxRQUFJQyxJQUFJLE9BQU87QUFDZixVQUFNNkMsU0FBVUMsWUFBbUI7QUFDbEMsVUFBSSxDQUFDQSxRQUFRO0FBQ1o7TUFDRDtBQUNBL0MsVUFBSW5DLEtBQUssUUFBUTtBQUNqQixZQUFNQSxPQUFPa0YsT0FBT2xFLFFBQVExQix1QkFBdUIsRUFBRTtBQUNyRCxVQUFJVSxTQUFTa0YsUUFBUTtBQUNwQi9DLFlBQUluQyxLQUFLLHFCQUFxQjtBQUM5QjtNQUNEO0FBQ0EsWUFBTXFDLFNBQVM7UUFDZEMsUUFBUTtRQUNSQyxPQUFPekQsR0FBR0MsT0FBT0MsSUFBSSxZQUFZO1FBQ2pDd0QsU0FBQSxHQUFBekMsT0FBWVIsVUFBUSxtR0FBQTtRQUNwQjRGLFVBQVU7UUFDVm5GO01BQ0Q7QUFDQSxZQUFNMkMsV0FBWUMsY0FBd0Q7QUFDekUsWUFBSSxDQUFDQSxVQUFVO0FBQ2Q7UUFDRDtBQUNBLFlBQUlBLFNBQVNDLE9BQU87QUFDbkIsZUFBSy9ELEdBQUdnRSxPQUFBLHFEQUFBL0MsT0FDOEM2QyxTQUFTQyxNQUFNRSxNQUFJLElBQUEsRUFBQWhELE9BQUs2QyxTQUFTQyxNQUFNRyxJQUFJLEdBQ2hHO1lBQ0NDLEtBQUs7WUFDTEMsTUFBTTtVQUNQLENBQ0Q7QUFDQWYsY0FBSW5DLEtBQUssYUFBYTtRQUN2QixPQUFPO0FBQ05tQyxjQUFJbkMsS0FBSyxZQUFZO1FBQ3RCO0FBQ0EsY0FBTW9FLFFBQVF2RSxFQUFFLE1BQU07QUFDdEJ1RSxjQUFNQyxLQUFLLGtCQUFrQixFQUFFbEIsUUFBUTtNQUN4QztBQUNBaEIsVUFBSW5DLEtBQUssU0FBUztBQUNsQixXQUFLWCxJQUFJK0QsY0FBYyxRQUFRZixNQUFNLEVBQUVnQixLQUFLVixRQUFRO0lBQ3JEO0FBQ0FSLFFBQUluQyxLQUFLLE9BQU87QUFDaEIsU0FBS0gsRUFBRXVGLEtBQUs7TUFDWEMsS0FBS3ZHLEdBQUdDLE9BQU9DLElBQUksVUFBVTtNQUM3QjBELE1BQU07UUFDTEosUUFBUTtRQUNSQyxPQUFPekQsR0FBR0MsT0FBT0MsSUFBSSxZQUFZLEVBQUVnQyxRQUFRLE1BQU0sR0FBRztNQUNyRDtNQUNBc0UsVUFBVTtNQUNWekMsT0FBT0EsTUFBTTtBQUNaVixZQUFJbkMsS0FBSyxRQUFRO01BQ2xCO01BQ0F1RixTQUFTTjtNQUNUL0IsTUFBTTtNQUNOc0MsT0FBTztJQUNSLENBQUM7RUFDRixDQUFDO0FBQ0QzRixJQUFFLFNBQVM0RixrQkFBa0I7QUFDNUIsVUFBTXJCLFFBQVF2RSxFQUFFLE1BQU07QUFDdEJ1RSxVQUFNQyxLQUFLLFdBQVcsRUFBRUEsS0FBSyxVQUFVLEVBQUUvRCxPQUFPVCxFQUFFLE1BQU0sRUFBRVMsT0FBT3lFLE9BQU8sQ0FBQztFQUMxRSxDQUFDO0FBQ0YsR0FBRzs7QUM5UkgsSUFBQVcscUJBQTRCakgsUUFBQSxpQkFBQTs7QUNINUIsSUFBTWtILGFBQWFBLENBQUNDLFFBQWdCQyxTQUEyQjtBQUM5REQsUUFBQSxVQUFBN0YsT0FBZ0I2RixHQUFHO0FBSW5CLFNBQU85RyxHQUFHZ0gsUUFBUUYsS0FBSyxHQUFHQyxJQUFJLEVBQUVFLE1BQU07QUFDdkM7O0FDTkEsSUFBTUMsaUJBQWlCQSxNQUFZO0FBQ2xDLFFBQU07SUFBQ0M7RUFBYyxJQUFJbkgsR0FBR0MsT0FBT0MsSUFBSTtBQUV2QyxNQUFJLENBQUMsV0FBVyxTQUFTLFNBQVMsT0FBTyxFQUFFa0gsU0FBU0QsY0FBYyxHQUFHO0FBQ3BFbkgsT0FBR3FILFNBQVN6RSxJQUFJO01BQ2YsK0JBQStCO01BQy9CLG9DQUFvQztNQUNwQyw2QkFBNkI7O01BRTdCLGlDQUFpQztNQUNqQyxnQ0FBZ0M7TUFDaEMsOEJBQThCO01BQzlCLGdDQUFnQztNQUNoQyxpQ0FBaUM7O01BRWpDLDBCQUEwQjs7O01BRzFCLHlCQUF5QjtNQUN6QixnQ0FBZ0M7Ozs7TUFJaEMsNEJBQTRCOzs7OztNQUs1Qix5QkFBeUI7TUFDekIsNkJBQTZCOzs7Ozs7OztNQVE3QixtQ0FBbUM7OztNQUduQywwQkFBMEI7OztNQUcxQixzQkFBc0I7OztNQUd0QiwwQkFBMEI7OztNQUcxQiwrQkFDQzs7TUFFRCxxQkFBcUI7O01BRXJCLG1DQUFtQztNQUNuQyxnQ0FBZ0M7TUFDaEMsZ0NBQWdDO01BQ2hDLDhCQUE4QjtNQUM5QixpQ0FBaUM7O01BRWpDLDBCQUEwQjtNQUMxQiwwQkFBMEI7TUFDMUIsdUJBQXVCO01BQ3ZCLDJCQUEyQjtNQUMzQix3QkFBd0I7TUFDeEIsd0JBQXdCO01BQ3hCLHNCQUFzQjs7TUFFdEIsd0JBQXdCO0lBQ3pCLENBQUM7RUFDRixPQUFPO0FBQ041QyxPQUFHcUgsU0FBU3pFLElBQUk7TUFDZiwrQkFBK0I7TUFDL0Isb0NBQW9DO01BQ3BDLDZCQUE2Qjs7TUFFN0IsaUNBQWlDO01BQ2pDLGdDQUFnQztNQUNoQyw4QkFBOEI7TUFDOUIsZ0NBQWdDO01BQ2hDLGlDQUFpQzs7TUFFakMsMEJBQTBCOzs7TUFHMUIseUJBQXlCO01BQ3pCLGdDQUFnQzs7OztNQUloQyw0QkFBNEI7Ozs7O01BSzVCLDZCQUE2Qjs7Ozs7Ozs7TUFRN0IsbUNBQW1DOzs7TUFHbkMsMEJBQTBCOzs7TUFHMUIsc0JBQXNCOzs7TUFHdEIsMEJBQTBCOzs7TUFHMUIsK0JBQ0M7O01BRUQscUJBQXFCOztNQUVyQixtQ0FBbUM7TUFDbkMsZ0NBQWdDO01BQ2hDLGdDQUFnQztNQUNoQyw4QkFBOEI7TUFDOUIsaUNBQWlDOztNQUVqQywwQkFBMEI7TUFDMUIsMEJBQTBCO01BQzFCLHVCQUF1QjtNQUN2QiwyQkFBMkI7TUFDM0Isd0JBQXdCO01BQ3hCLHdCQUF3QjtNQUN4QixzQkFBc0I7O01BRXRCLHdCQUF3QjtJQUN6QixDQUFDO0VBQ0Y7QUFDRDs7QUZ2SEFzRSxlQUFlO0NBR2QsU0FBU0ksU0FBUztBQUdsQixRQUFNQyxPQUFPdkgsR0FBR0MsT0FBT3VIO0FBRXZCLE1BQUtySCxPQUFPc0gsVUFBVSxDQUFDdEgsT0FBT3NILE9BQU9DLFlBQWFILEtBQUtJLGFBQWEsUUFBUTtBQUMzRTtFQUNEO0FBRUEsUUFBTXBILE1BQU1YLE1BQU0sWUFBWTtBQUU5Qk8sU0FBT3NILFNBQVM7OztJQUdmRyxPQUFPO01BQ05DLFFBQVE7TUFDUkMsUUFBUTtNQUNSQyxLQUFLO01BQ0xDLFNBQVM7TUFDVEMsTUFBTTtNQUNOQyxNQUFNO01BQ05DLElBQUk7SUFDTDtJQUNBQyxXQUFXOztJQUVYQyxVQUFVOztJQUVWQyxTQUFTQSxNQUFNO0FBQ2QsWUFBTUMsS0FBS2hCLEtBQUtpQjtBQUNoQixZQUFNQyxRQUFRbEIsS0FBS21CO0FBQ25CLGFBQ0NILEtBQUs7TUFFTEEsT0FBTztNQUVQQSxPQUFPO01BRVBBLE9BQU87TUFFTkEsT0FBTyxLQUFLLENBQUNoQixLQUFLb0I7TUFFbEJKLE9BQU8sS0FBSyxjQUFjSyxLQUFLckIsS0FBS3NCLE9BQU87TUFFM0NKLFVBQVVGLE9BQU9FLE1BQU1LLFdBQVdQLE9BQU9FLE1BQU1NLGFBQWFSLE9BQU9FLE1BQU1PO0lBRTVFOzs7SUFHQUMsY0FBYzs7SUFFZEMsV0FBVztJQUNYQyxVQUFVOzs7OztJQUtWQyxxQkFBcUIsQ0FBQzs7Ozs7Ozs7O0lBU3RCQyxxQkFBcUI7O0lBRXJCQyxpQkFBaUI7Ozs7O0lBS2pCQyxXQUFXOzs7SUFHWEMsWUFBWTs7O0lBR1pDLGVBQWU7Ozs7SUFJZkMsZ0JBQWdCOzs7SUFHaEJDLGVBQWU7O0lBRWZDLGVBQWU7O0lBRWZDLGFBQWE7O0lBRWJDLGNBQWM7O0lBRWRDLGFBQWE7O0lBRWJDLFVBQVU7O0lBRVZDLGNBQWM7Ozs7SUFJZEMsdUJBQXVCO0lBQ3ZCQyxXQUFXO0lBQ1hDLGNBQWVDLFNBQVE7QUFDdEIsVUFBSUM7QUFDSixVQUFJLENBQUNELEtBQUs7QUFDVDtNQUNEO0FBQ0EsT0FBQ0MsS0FBS25LLE9BQU9zSCxRQUFRMEMsY0FBY0csR0FBR0gsWUFBWSxDQUFDO0FBQ25ELGVBQVNJLEtBQUtGLEtBQUs7QUFDbEIsWUFBSSxDQUFDRyxPQUFPQyxPQUFPSixLQUFLRSxDQUFDLEtBQUssT0FBT0EsTUFBTSxVQUFVO0FBQ3BEO1FBQ0Q7QUFDQSxZQUFJRyxJQUFJTCxJQUFJRSxDQUFDO0FBQ2IsWUFBSSxPQUFPRyxNQUFNLFVBQVU7QUFDMUI7UUFDRDtBQUNBSCxZQUFJQSxFQUFFSSxLQUFLO0FBQ1hELFlBQUlBLEVBQUVDLEtBQUs7QUFDWCxZQUFJSixFQUFFSyxXQUFXLEtBQUtGLEVBQUVFLFdBQVcsR0FBRztBQUNyQztRQUNEO0FBQ0F6SyxlQUFPc0gsT0FBTzBDLFVBQVVJLENBQUMsSUFBSUc7TUFDOUI7SUFDRDtFQUNEO0FBQ0EsUUFBTUcsS0FBSzFLLE9BQU9zSDtBQUdsQixRQUFNcUQsS0FBS0MsVUFBVWxMLFVBQVVtTCxZQUFZO0FBQzNDLFFBQU1DLFlBQVksbUJBQW1CckMsS0FBS2tDLEVBQUUsS0FBSyxDQUFDQSxHQUFHMUQsU0FBUyxTQUFTO0FBQ3ZFLE1BQUk4RCxhQUFhO0FBQ2pCLE1BQUlDLGdCQUFnQjtBQUdwQixRQUFNQyxnQkFBZ0JDLE9BQU9DLElBQUFDLG9CQUFBQSxrQkFBQUMsdUJBQUEsQ0FBQSw2QkFBQSxHQUFBLENBQUEsK0VBQUEsQ0FBQSxFQUFBO0FBQzdCLFFBQU1DLGtCQUFrQixJQUFJQyxPQUFPTixlQUFlLEdBQUc7QUFTckQsUUFBTU8sc0JBQXNCTixPQUFPQyxJQUFBTSxxQkFBQUEsbUJBQUFKLHVCQUFBLENBQUEsMEJBQUEsR0FBQSxDQUFBLHVGQUFBLENBQUEsRUFBQTtBQVNuQyxRQUFNSyxzQkFBc0J0RSxLQUFLdUU7QUFDakMsUUFBTUMsZUFBZXhFLEtBQUttQjtBQUMxQixRQUFNc0QsZUFBZUEsQ0FBQ0MsaUJBQWlCQyxhQUFhO0FBQ25ELFVBQU1DLGtCQUFtQkMsVUFBUztBQUNqQyxVQUFJLENBQUNBLFFBQVFBLEtBQUt4QixXQUFXLEdBQUc7QUFDL0I7TUFDRDtBQUNBLFVBQUl5QixhQUFhO0FBQ2pCLGVBQVNDLElBQUksR0FBR0EsSUFBSUYsS0FBS3hCLFFBQVEwQixLQUFLO0FBQ3JDLGNBQU1DLFVBQVVILEtBQUtJLE9BQU9GLENBQUM7QUFDN0IsY0FBTUcsS0FBS0YsUUFBUXZCLFlBQVk7QUFDL0IsY0FBTTBCLEtBQUtILFFBQVFJLFlBQVk7QUFDL0JOLHNCQUFjSSxPQUFPQyxLQUFLSCxVQUFBLElBQUF0TCxPQUFjd0wsRUFBRSxFQUFBeEwsT0FBR3lMLElBQUUsR0FBQTtNQUNoRDtBQUNBLGFBQU9MLFdBQVduSyxRQUFRLG1CQUFtQm1KLE9BQU9DLElBQUFzQixxQkFBQUEsbUJBQUFwQix1QkFBQSxDQUFBLElBQUEsR0FBQSxDQUFBLE1BQUEsQ0FBQSxFQUFBLENBQVEsRUFBRXRKLFFBQVF1SixpQkFBaUJMLGFBQWE7SUFDckc7QUFDQWMsZUFBV0EsU0FBU2xCLFlBQVk7QUFDaEMsVUFBTTZCLFlBQVloQixvQkFBb0JSLE9BQU9ZLGVBQWUsQ0FBQyxFQUFFakIsWUFBWTtBQUMzRSxRQUFJOEIsU0FBU1gsZ0JBQWdCVSxTQUFTO0FBQ3RDLFFBQUlYLFlBQVlXLGNBQWNYLFVBQVU7QUFDdkNZLGdCQUFBLElBQUE3TCxPQUFja0wsZ0JBQWdCRCxRQUFRLENBQUM7SUFDeEM7QUFDQSxRQUFJSCxjQUFjO0FBQ2pCLGlCQUFXZ0IsWUFBWWhCLGNBQWM7QUFDcEMsWUFDQyxPQUFPZ0IsYUFBYSxZQUNwQkEsU0FBUy9CLFlBQVksTUFBTTZCLGFBQzNCRSxTQUFTL0IsWUFBWSxNQUFNa0IsWUFDM0JILGFBQWFnQixRQUFRLE1BQU1kLGlCQUMxQjtBQUNEYSxvQkFBQSxJQUFBN0wsT0FBY2tMLGdCQUFnQlksUUFBUSxDQUFDO1FBQ3hDO01BQ0Q7SUFDRDtBQUNBLFdBQU9EO0VBQ1I7QUFDQWpDLEtBQUdtQyxxQkFBcUJuQixvQkFBb0IsSUFBSTtBQUNoRGhCLEtBQUdvQyxrQkFBa0JqQixhQUFhLElBQUksVUFBVTtBQUNoRCxNQUFJSCxvQkFBb0IsSUFBSSxHQUFHO0FBQzlCaEIsT0FBR3FDLGtCQUFrQmxCLGFBQWEsSUFBSSxVQUFVO0VBQ2pEO0FBSUEsUUFBTW1CLE9BQU9BLENBQUNDLEtBQUtDLFlBQVk7QUFDOUIsUUFBSSxDQUFDRCxLQUFLO0FBQ1QsYUFBTztJQUNSO0FBQ0EsV0FBT0MsVUFBVWhOLFNBQVNpTixlQUFlRixHQUFHLElBQUkvTSxTQUFTa04sY0FBY0gsR0FBRztFQUMzRTtBQUNBLFFBQU1JLFFBQVFBLENBQUNwQixNQUFNcUIsUUFBUTtBQUM1QkEsWUFBQUEsTUFBUXBOLFNBQVNxTixTQUFTeEg7QUFDMUIsVUFBTXlILEtBQUssSUFBSWpDLE9BQUEsT0FBQXpLLE9BQWNtTCxNQUFJLFdBQUEsQ0FBVztBQUM1QyxVQUFNd0IsSUFBSUQsR0FBR0UsS0FBS0osR0FBRztBQUNyQixRQUFJRyxLQUFLQSxFQUFFaEQsU0FBUyxHQUFHO0FBQ3RCLGFBQU9rRCxtQkFBbUJGLEVBQUUsQ0FBQyxDQUFDO0lBQy9CO0FBQ0EsV0FBTztFQUNSO0FBQ0EsUUFBTW5LLFFBQVN5QyxVQUFTO0FBQ3ZCLFFBQUksQ0FBQ0EsTUFBTTtBQUNWLGFBQU87SUFDUjtBQUNBLFVBQU02SCxTQUFBLEdBQUE5TSxPQUFZc0csS0FBS3lHLFVBQVEsR0FBQTtBQUMvQixRQUNDOUgsS0FBSytILFFBQVFGLE1BQU0sTUFBTSxLQUN6QjdILEtBQUsrSCxRQUFRMUcsS0FBSzJHLFdBQVdILE1BQU0sTUFBTSxLQUN4Q3hHLEtBQUsyRyxTQUFTQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLFFBQzlCakksS0FBSytILFFBQVE1TixTQUFTcU4sU0FBU1UsV0FBVzdHLEtBQUsyRyxXQUFXSCxNQUFNLE1BQU0sR0FDdEU7QUFFRCxhQUFPUCxNQUFNLFNBQVN0SCxJQUFJO0lBQzNCO0FBRUEsUUFBSW1JLFNBQVM5RyxLQUFLK0csY0FBY3BNLFFBQVEsTUFBTSxFQUFFO0FBQ2hELFFBQUlnRSxLQUFLK0gsUUFBUUksTUFBTSxHQUFHO0FBQ3pCQSxlQUFTOUcsS0FBSzJHLFdBQVdHO0lBQzFCO0FBQ0EsUUFBSW5JLEtBQUsrSCxRQUFRSSxNQUFNLEtBQUtBLE9BQU9GLE1BQU0sR0FBRyxDQUFDLE1BQU0sTUFBTTtBQUN4REUsZUFBU2hPLFNBQVNxTixTQUFTVSxXQUFXQztJQUN2QztBQUNBLFFBQUluSSxLQUFLK0gsUUFBUUksTUFBTSxNQUFNLEdBQUc7QUFDL0IsYUFBT1AsbUJBQW1CNUgsS0FBS2lJLE1BQU1FLE9BQU96RCxNQUFNLENBQUM7SUFDcEQ7QUFDQSxXQUFPO0VBQ1I7QUFDQSxRQUFNeEgsV0FBV0EsQ0FBQztJQUFDbUw7RUFBUyxHQUFHbkMsU0FBUztBQUN2QyxXQUFPLElBQUFuTCxPQUFJc04sV0FBUyxHQUFBLEVBQUluSCxTQUFBLElBQUFuRyxPQUFhbUwsTUFBSSxHQUFBLENBQUc7RUFDN0M7QUFDQSxRQUFNb0MsYUFBY0MsU0FBUTtBQUMzQixRQUFJLENBQUNBLE9BQU9BLElBQUk3RCxXQUFXLEdBQUc7QUFDN0IsYUFBTzZEO0lBQ1I7QUFDQSxXQUFPQSxJQUFJTixNQUFNLEdBQUcsQ0FBQyxFQUFFeEIsWUFBWSxJQUFJOEIsSUFBSU4sTUFBTSxDQUFDO0VBQ25EO0FBQ0EsUUFBTU8sZUFBZ0JDLGNBQWE7QUFDbEMsV0FBT3BILEtBQUsrRyxjQUFjcE0sUUFBUSxNQUFNME0sbUJBQW1CRCxRQUFRLEVBQUV6TSxRQUFRLFFBQVEsR0FBRyxFQUFFQSxRQUFRLFFBQVEsR0FBRyxDQUFDO0VBQy9HO0FBQ0EsUUFBTTJNLFdBQVlKLFNBQVE7QUFDekIsV0FBT0EsSUFBSXZNLFFBQVEsc0JBQXNCbUosT0FBT0MsSUFBQXdELHFCQUFBQSxtQkFBQXRELHVCQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsTUFBQSxDQUFBLEVBQUEsQ0FBUTtFQUN6RDtBQUNBLFFBQU11RCxvQkFBcUJDLGFBQVk7QUFDdENBLGdCQUFBQSxVQUFZLENBQUM7QUFDYixVQUFNQyxPQUFPRCxRQUFRRSxhQUFhO0FBQ2xDLFVBQU1BLFlBQVlMLFNBQVNJLElBQUk7QUFDL0IsVUFBTUUsU0FBU04sU0FBU0csUUFBUUcsVUFBVSxHQUFHO0FBQzdDLFVBQU1DLFNBQVNQLFNBQVNHLFFBQVFJLFVBQVUsR0FBRztBQUM3QyxVQUFNekIsS0FBSyxJQUFJakM7O01BQUEsTUFBQXpLLE9BRVJpTyxXQUFTLEdBQUEsRUFBQWpPLE9BQUlpTyxXQUFTLFFBQUEsRUFBQWpPLE9BRXJCaU8sV0FBUyxhQUFBLEVBQUFqTyxPQUVUaU8sV0FBUyxLQUFBLEVBQUFqTyxPQUFNa08sUUFBTSxLQUFBLEVBQUFsTyxPQUFNa08sTUFBTSxFQUFBbE8sT0FBR21PLFFBQU0sS0FBQSxFQUFBbk8sT0FBTW1PLFFBQU0sUUFBQSxFQUFBbk8sT0FFdERpTyxXQUFTLFNBQUEsRUFBQWpPLE9BQVVpTyxTQUFTLEVBQUFqTyxPQUFHa08sUUFBTSxvQkFBQTtNQUM1QztJQUNEO0FBRUEsV0FBTyxDQUFDVixLQUFLcEUsUUFBUTtBQUNwQixVQUFJLENBQUNBLEtBQUs7QUFDVCxlQUFPb0U7TUFDUjtBQUNBLGFBQU9BLElBQUl2TSxRQUFReUwsSUFBSSxDQUFDMEIsT0FBT2hCLFFBQVFpQixLQUFLeEksS0FBS3lJLFVBQVU7QUFDMUQsWUFBSWxCLFdBQVdZLE1BQU07QUFDcEIsaUJBQU9BO1FBQ1I7QUFDQSxjQUFNMUUsSUFBSWdGLFNBQVN6SSxPQUFPd0k7QUFDMUIsY0FBTUUsY0FBYyxPQUFPbkYsSUFBSUUsQ0FBQyxNQUFNLGFBQWFGLElBQUlFLENBQUMsRUFBRThFLE9BQU85RSxDQUFDLElBQUlGLElBQUlFLENBQUM7QUFDM0UsZUFBTyxPQUFPaUYsZ0JBQWdCLFdBQVdBLGNBQWNBLGVBQWVIO01BQ3ZFLENBQUM7SUFDRjtFQUNEO0FBQ0EsUUFBTUksb0JBQW9CLE1BQU07QUFDL0IsVUFBTUMsY0FBY1gsa0JBQWtCO01BQ3JDRyxXQUFXO01BQ1hDLFFBQVE7TUFDUkMsUUFBUTtJQUNULENBQUM7QUFDRCxXQUFPLENBQUNYLEtBQUtwRSxRQUFRO0FBQ3BCLFlBQU1zRixJQUFJRCxZQUFZakIsS0FBS3BFLEdBQUc7QUFDOUIsYUFBT1EsR0FBR3hCLHNCQUFzQm1GLFdBQVdtQixDQUFDLElBQUlBO0lBQ2pEO0VBQ0QsR0FBRztBQUVILFFBQU1DLGFBQWEsSUFBSWxFLE9BQUEsU0FBQXpLLE9BQ2IwSyxxQkFBbUIsS0FBQSxFQUFBMUssT0FBTTRKLEdBQUdvQyxpQkFBZSxHQUFBLEVBQUFoTSxPQUFJMEsscUJBQW1CLGdCQUFBLEdBQzNFLEdBQ0Q7QUFDQSxRQUFNa0Usa0JBQW1CUixXQUFVO0FBQ2xDLFdBQU9BLE1BQU1uTixRQUFRLFlBQVksR0FBRztFQUNyQztBQUNBLFFBQU00TixnQkFBZ0JBLENBQUNDLFVBQVVDLFVBQVVDLFNBQVM7QUFDbkQsUUFBSUMsWUFBWTtBQUNoQixRQUFJckYsR0FBR3pCLG9CQUFvQjRHLFFBQVEsR0FBRztBQUNyQ0Usa0JBQVksSUFBSXhFLE9BQUEsU0FBQXpLLE9BQ04wSyxxQkFBbUIsR0FBQSxFQUFBMUssT0FBSTRKLEdBQUdxQyxpQkFBZSxLQUFBLEVBQUFqTSxPQUFNMEsscUJBQW1CLE1BQUEsRUFBQTFLLE9BQU8wSyxxQkFBbUIsS0FBQSxFQUFBMUssT0FBTTRKLEdBQUd6QixvQkFBb0I0RyxRQUFRLEdBQUMsR0FBQSxFQUFBL08sT0FBSTBLLHFCQUFtQixpQkFBQSxHQUNsSyxHQUNEO0lBQ0QsT0FBTztBQUNOLFlBQU1vQixXQUFXOEIsU0FBU21CLFFBQVE7QUFDbEMsWUFBTXpELFVBQVVRLFNBQVNvQixNQUFNLEdBQUcsQ0FBQztBQUNuQytCLGtCQUFZLElBQUl4RSxPQUFBLFNBQUF6SyxPQUNOMEsscUJBQW1CLEdBQUEsRUFBQTFLLE9BQUk0SixHQUFHb0MsaUJBQWUsR0FBQSxFQUFBaE0sT0FBSTBLLHFCQUFtQixHQUFBLEVBQUExSyxPQUFJMEssbUJBQW1CLEVBQUExSyxPQUMvRnNMLFlBQVksUUFBUSxDQUFDMUIsR0FBR3hCLHNCQUNyQmtELFVBQUEsSUFBQXRMLE9BQ0lzTCxRQUFRSSxZQUFZLENBQUMsRUFBQTFMLE9BQUdzTCxRQUFRdkIsWUFBWSxHQUFDLEdBQUEsQ0FDckQsRUFBQS9KLE9BQUc4TCxTQUFTb0IsTUFBTSxDQUFDLEVBQUVqTSxRQUFRdUosaUJBQWlCTCxhQUFhLENBQUMsRUFBQW5LLE9BQUcwSyxxQkFBbUIsaUJBQUEsR0FDbEYsR0FDRDtJQUNEO0FBQ0EsUUFBSXNFLE1BQU07QUFDVCxhQUFPQyxVQUFVckMsS0FBS2tDLFFBQVE7SUFDL0I7QUFDQSxVQUFNSSxjQUFjLElBQUl6RSxPQUFPLE1BQU16SyxPQUFPLFNBQVNvSyxPQUFPQyxJQUFBOEUscUJBQUFBLG1CQUFBNUUsdUJBQUEsQ0FBQSxhQUFBLEdBQUEsQ0FBQSxpQkFBQSxDQUFBLEVBQUEsR0FBb0IsUUFBUSxHQUFHLEdBQUcsR0FBRztBQUNqRyxVQUFNNkUsYUFBYU4sU0FBUzdOLFFBQVEscUJBQXFCMk4sZUFBZSxFQUFFM04sUUFBUWlPLGFBQWFOLGVBQWU7QUFDOUcsVUFBTXpKLFNBQVMsQ0FBQTtBQUNmLFFBQUlrSyxhQUFhO0FBQ2pCLFlBQVFBLGFBQWFKLFVBQVVyQyxLQUFLd0MsVUFBVSxPQUFPLE1BQU07QUFDMURqSyxhQUFPQSxPQUFPd0UsTUFBTSxJQUFJO1FBQ3ZCeUUsT0FBT2lCO01BQ1I7SUFDRDtBQUNBbEssV0FBT3VILEtBQUt1QztBQUNaLFdBQU85SjtFQUNSO0FBQ0EsTUFBSW1LLGtCQUFrQjtBQUN0QixRQUFNQyxrQkFBa0JBLENBQUNULFVBQVVVLFVBQVVDLE9BQU81SixLQUFLNkosY0FBYztBQUN0RSxVQUFNQyxzQkFBdUJDLGVBQWM7QUFDMUMsWUFBTVYsY0FBYyxJQUFJekUsT0FBTyxNQUFNekssT0FBTyxTQUFTb0ssT0FBT0MsSUFBQXdGLHFCQUFBQSxtQkFBQXRGLHVCQUFBLENBQUEsYUFBQSxHQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLEdBQW9CLFFBQVEsR0FBRyxHQUFHLEdBQUc7QUFDakcsWUFBTTZFLGFBQWFRLFVBQ2pCM08sUUFBUSxxQkFBcUIyTixlQUFlLEVBQzVDM04sUUFBUWlPLGFBQWFOLGVBQWU7QUFFdEMsVUFBSWtCLFFBQVE7QUFDWm5CLGlCQUFXb0IsWUFBWTtBQUN2QixhQUFPcEIsV0FBVy9CLEtBQUt3QyxVQUFVLE1BQU0sTUFBTTtBQUM1Q1UsZ0JBQVFuQixXQUFXb0I7TUFDcEI7QUFDQSxVQUFJRCxRQUFRLEdBQUc7QUFFZCxZQUFJMUIsUUFBUTtBQUNaa0IsMEJBQ0lsQixRQUFRa0IsZ0JBQWdCMUMsS0FBS3dDLFVBQVU7Ozs7VUFJeENoQixRQUFRLGdGQUFnRnhCLEtBQ3hGd0MsVUFDRDs7QUFDRixZQUFJaEIsT0FBTztBQUNWLFdBQUM7WUFBQzBCO1VBQUssSUFBSTFCO1FBQ1o7QUFDQSxlQUFPO1VBQ05DLEtBQUt5QjtVQUNMRSxPQUFPO1FBQ1I7TUFDRDtBQUNBLGFBQU87UUFDTjNCLEtBQUt5QjtRQUNMRSxPQUFPRixTQUFTO01BQ2pCO0lBQ0Q7QUFDQSxVQUFNck4sVUFBVSxDQUFBO0FBQ2hCLFVBQU13TixZQUFZckcsR0FBR21DO0FBQ3JCLFVBQ0NtRSxZQUFZVixZQUFZQyxTQUFTRCxhQUFhQyxTQUFTQSxNQUFNOUYsU0FBUztBQUN2RSxRQUFJd0c7QUFDSixRQUFJQyxZQUFZO0FBQ2hCdkssWUFBQUEsTUFBQSxJQUFBN0YsT0FBWTZGLEdBQUc7QUFFZixRQUFJMkosWUFBWUEsU0FBUzdGLFNBQVMsR0FBRztBQUNwQ3dHLGdCQUFVdEIsY0FBY0MsVUFBVVUsUUFBUTtBQUMxQyxVQUFJLENBQUNXLFdBQVdBLFFBQVF4RyxXQUFXLEdBQUc7QUFDckMsZUFBTztVQUNOMUosTUFBTTZPO1VBQ05yTTtVQUNBSyxPQUFPOEMsV0FBVyx5QkFBeUI0SixRQUFRO1FBQ3BEO01BQ0Q7QUFDQSxVQUFJYSxTQUFTdkIsU0FBUzVCLE1BQU0sR0FBR29ELEtBQUtDLElBQUksR0FBR0osUUFBUSxDQUFDLEVBQUUvQixNQUFNMEIsS0FBSyxDQUFDO0FBQ2xFLFVBQUlVLFFBQVExQixTQUFTNUIsTUFBTW9ELEtBQUtDLElBQUksR0FBR0osUUFBUSxDQUFDLEVBQUUvQixNQUFNMEIsUUFBUUssUUFBUSxDQUFDLEVBQUUvQixNQUFNLENBQUMsRUFBRXpFLE1BQU0sQ0FBQztBQUMzRixVQUFJd0csUUFBUXhHLFNBQVMsR0FBRztBQUV2QndHLGdCQUFRekQsR0FBR3FELFlBQVk7QUFDdkJTLGdCQUFRQSxNQUFNdlAsUUFBUWtQLFFBQVF6RCxJQUFJLEVBQUU7TUFDckM7QUFDQSxVQUNDK0M7TUFDQTVKLFFBQVEsTUFDUDtBQUNELFNBQUEsRUFBQSxFQUFLQSxHQUFHLElBQUlzSyxRQUFRLENBQUMsRUFBRS9CO01BQ3hCO0FBS0EsVUFBSS9DLElBQUlnRixPQUFPMUcsU0FBUztBQUN4QixhQUFPMEIsS0FBSyxLQUFLZ0YsT0FBTzlFLE9BQU9GLENBQUMsTUFBTSxRQUFRZ0YsT0FBT25ELE1BQU03QixHQUFHQSxJQUFJLENBQUMsRUFBRW9GLE9BQU8sSUFBSSxLQUFLLEdBQUc7QUFDdkZwRjtNQUNEO0FBQ0EsVUFBSXFGLElBQUk7QUFDUixhQUFPQSxJQUFJRixNQUFNN0csVUFBVTZHLE1BQU1qRixPQUFPbUYsQ0FBQyxNQUFNLFFBQVFGLE1BQU10RCxNQUFNd0QsR0FBR0EsSUFBSSxDQUFDLEVBQUVELE9BQU8sSUFBSSxLQUFLLEdBQUc7QUFDL0ZDO01BQ0Q7QUFDQSxVQUNDckYsS0FBSyxLQUNMZ0YsT0FBTzlFLE9BQU9GLENBQUMsTUFBTSxTQUNwQm1GLE1BQU03RyxXQUFXLEtBQU0rRyxJQUFJRixNQUFNN0csVUFBVTZHLE1BQU1qRixPQUFPbUYsQ0FBQyxNQUFNLE9BQy9EO0FBQ0RyRjtNQUNEO0FBQ0FnRixlQUFTaEYsS0FBSyxJQUFJZ0YsT0FBT25ELE1BQU0sR0FBR29ELEtBQUtDLElBQUksR0FBR2xGLElBQUksQ0FBQyxDQUFDLElBQUk7QUFDeERtRixjQUFRRSxJQUFJRixNQUFNN0csU0FBUzZHLE1BQU10RCxNQUFNb0QsS0FBS0MsSUFBSSxHQUFHRyxDQUFDLENBQUMsSUFBSTtBQUN6RCxVQUNDTCxPQUFPMUcsU0FBUyxLQUNoQjBHLE9BQU9uRCxNQUFNb0QsS0FBS0MsSUFBSSxHQUFHRixPQUFPMUcsU0FBUyxDQUFDLENBQUMsRUFBRThHLE9BQU8sSUFBSSxLQUFLLEtBQzdERCxNQUFNN0csU0FBUyxLQUNmNkcsTUFBTXRELE1BQU0sR0FBRyxDQUFDLEVBQUV1RCxPQUFPLElBQUksS0FBSyxHQUNqQztBQUNESixrQkFBVTtNQUNYO0FBQ0FELGtCQUFZQyxPQUFPMUc7QUFDbkIsVUFBSXlHLGNBQWMsS0FBS0ksTUFBTTdHLFNBQVMsS0FBSzZHLE1BQU10RCxNQUFNLEdBQUcsQ0FBQyxNQUFNLE1BQU07QUFDdEVzRCxnQkFBUUEsTUFBTXRELE1BQU0sQ0FBQztNQUN0QjtBQUNBNEIsaUJBQVd1QixTQUFTRztBQUNwQixVQUFJLENBQUNOLFdBQVc7QUFDZixZQUFJdEcsR0FBR3pCLG9CQUFvQnFILFFBQVEsR0FBRztBQUNyQy9NLGtCQUFRQSxRQUFRa0gsTUFBTSxJQUFJL0QsV0FBVyw2QkFBNkI0SixRQUFRO1FBQzNFLE9BQU87QUFDTi9NLGtCQUFRQSxRQUFRa0gsTUFBTSxJQUFJL0QsV0FBVyx3QkFBd0I0SixRQUFRO1FBQ3RFO01BQ0Q7SUFDRDtBQUVBLFFBQUlDLFNBQVNBLE1BQU05RixTQUFTLEdBQUc7QUFDOUJ3RyxnQkFBVXRCLGNBQWNDLFVBQVVXLEtBQUs7QUFDdkMsVUFBSVUsV0FBV0EsUUFBUXhHLFNBQVMsR0FBRztBQUVsQyxlQUFPO1VBQ04xSixNQUFNNk87VUFDTnJNO1VBQ0FLLE9BQU84QyxXQUFXLHVCQUF1QjZKLEtBQUs7UUFDL0M7TUFDRDtBQUNBLFVBQUlPLFFBQVE7QUFDWixVQUFJSSxZQUFZLEdBQUc7QUFDbEIsY0FBTU8sUUFBUWhCLG9CQUFvQmIsUUFBUTtBQUMxQ3NCLG9CQUFZTyxNQUFNdEM7QUFDbEIsU0FBQztVQUFDMkI7UUFBSyxJQUFJVztNQUNaLE9BQU87QUFDTlgsZ0JBQVE7TUFDVDtBQUNBLFlBQU1ZLGVBQUEsS0FBQTVRLE9BQW9CaVEsV0FBUyxHQUFBLEVBQUFqUSxPQUFJeVAsS0FBSyxFQUFBelAsT0FBRzZGLE9BQU8sSUFBRSxJQUFBO0FBQ3hELFVBQUl1SyxhQUFhLEdBQUc7QUFDbkIsY0FBTVMsU0FBUy9CLFNBQVM1QixNQUFNb0QsS0FBS0MsSUFBSSxHQUFHSCxTQUFTLENBQUM7QUFDcER0QixtQkFDQ0EsU0FBUzVCLE1BQU0sR0FBR29ELEtBQUtDLElBQUksR0FBR0gsU0FBUyxDQUFDLEtBQ3ZDQSxZQUFZLElBQUksT0FBTyxNQUN4QlEsZ0JBQ0NaLFFBQVEsS0FBSztBQUNmbEIsb0JBQVkrQixPQUFPbEgsU0FBUyxLQUFLa0gsT0FBTzNELE1BQU0sR0FBRyxDQUFDLE1BQU0sT0FBQSxLQUFBbE4sT0FBWTZRLE1BQU0sSUFBS0E7TUFDaEYsT0FBTztBQUNOLFlBQUkvQixTQUFTbkYsU0FBUyxLQUFLbUYsU0FBUzVCLE1BQU0sSUFBSTRCLFNBQVNuRixTQUFTLElBQUksQ0FBQyxNQUFNLE1BQU07QUFDaEZtRixzQkFBWTtRQUNiO0FBQ0FBLHFCQUFhQSxTQUFTbkYsU0FBUyxJQUFJLE9BQU8sTUFBTWlIO01BQ2pEO0FBQ0EsVUFBSVYsV0FBVztBQUNkLFlBQUk1RyxJQUFJekQsT0FBTztBQUNmLFlBQUl5RCxFQUFFSyxTQUFTLEdBQUc7QUFDakJMLGNBQUlBLEVBQUU0RCxNQUFNLENBQUM7UUFDZDtBQUNBekssZ0JBQVFBLFFBQVFrSCxNQUFNLElBQUkvRCxXQUFXLDBCQUEwQjZKLE9BQU9uRyxDQUFDO01BQ3hFLE9BQU87QUFDTjdHLGdCQUFRQSxRQUFRa0gsTUFBTSxJQUFJL0QsV0FBVyxzQkFBc0I2SixLQUFLO01BQ2pFO0FBQ0EsVUFBSTdGLEdBQUc1QixnQkFBZ0IsQ0FBQzBILFdBQVc7QUFDbEMsY0FBTW9CLE1BQU1oQyxTQUFTN04sUUFBUTJJLEdBQUc1QixjQUFjLEVBQUU7QUFDaEQsWUFBSThJLElBQUluSCxXQUFXbUYsU0FBU25GLFFBQVE7QUFDbkNtRixxQkFBV2dDO0FBQ1hyTyxrQkFBUUEsUUFBUWtILE1BQU0sSUFBSS9ELFdBQVcsd0JBQXdCO1FBQzlEO01BQ0Q7SUFDRDtBQUNBLFdBQU87TUFDTjNGLE1BQU02TztNQUNOck07TUFDQUssT0FBTztJQUNSO0VBQ0Q7QUFFQSxRQUFNaU8sVUFBVUEsQ0FBQztJQUFDQztJQUFTQztJQUFTQztFQUFRLE1BQU07QUFDakQsUUFBSWxPLE9BQU87QUFDWCxRQUFJZ08sU0FBUztBQUlaLFVBQUlBLFdBQVdDLFNBQVM7QUFDdkJqTyxpQkFBQUEsT0FBUztNQUNWO0FBQ0EsVUFBSWtPLFVBQVU7QUFDYmxPLGlCQUFBQSxPQUFTO01BQ1Y7SUFDRDtBQUNBLFdBQU9BO0VBQ1I7QUFDQSxRQUFNbU8sVUFBV3hRLE9BQU07QUFDdEIsUUFBSUEsRUFBRXVCLGdCQUFnQjtBQUNyQnZCLFFBQUV1QixlQUFlO0FBQ2pCdkIsUUFBRXlRLGdCQUFnQjtJQUNuQixPQUFPO0FBQ056USxRQUFFMFEsZUFBZTtJQUNsQjtBQUNBLFdBQU87RUFDUjtBQUNBLE1BQUlDLFVBQVU7QUFDZCxNQUFJQyxXQUFXO0FBQ2YsTUFBSUMsVUFBVSxDQUFBO0FBQ2QsTUFBSUMsZUFBZTtBQUNuQixNQUFJQyxhQUFhO0FBQ2pCLE1BQUlDLFlBQVk7QUFDaEIsTUFBSUMsV0FBVztBQUNmLE1BQUlDLFdBQVc7QUFDZixNQUFJQyxjQUFjO0FBQ2xCLE1BQUlDLGNBQWM7QUFDbEIsTUFBSUMsWUFBWTtBQUNoQixNQUFJQyxhQUFhO0FBQ2pCLE1BQUlDLFlBQVk7QUFDaEIsTUFBSUMsU0FBUztBQUNiLE1BQUlDLGFBQWE7QUFDakIsTUFBSUMsWUFBWTtBQUNoQixNQUFJQyxnQkFBZ0I7QUFDcEIsTUFBSUMsa0JBQWtCO0FBQ3RCLE1BQUlDLFNBQVM7QUFDYixRQUFNQyxZQUFZO0FBQ2xCLFFBQU1DLE9BQU87QUFDYixRQUFNQyxpQkFBaUI7QUFDdkIsUUFBTUMsVUFBVTtBQUNoQixRQUFNQyxVQUFVO0FBQ2hCLFFBQU1DLFVBQVduUSxVQUFTO0FBQ3pCLFFBQUlvUSxZQUFZO0FBQ2hCLFFBQUlwUSxRQUFRQSxLQUFLcVEsT0FBTztBQUN2QixVQUFJclEsS0FBS3FRLE1BQU1DLE9BQU87QUFDckIsY0FBTSxDQUFDQyxJQUFJLElBQUl2USxLQUFLcVEsTUFBTUM7QUFDMUIsWUFBSUMsTUFBTTtBQUNULGNBQUlBLEtBQUtDLGFBQWFELEtBQUtDLFVBQVV4SixTQUFTLEdBQUc7QUFHaERpSSx1QkFBV3NCLEtBQUtDLFVBQVUsQ0FBQyxFQUFFQyxNQUFNLE1BQU0sRUFBRUM7QUFDM0MsZ0JBQUlILEtBQUtDLFVBQVUsQ0FBQyxFQUFFRyxXQUFXO0FBQ2hDekIseUJBQVdxQixLQUFLQyxVQUFVLENBQUMsRUFBRUcsVUFBVXJTLFFBQVEsT0FBTyxFQUFFO1lBQ3pEO0FBQ0EsZ0JBQUlpUyxLQUFLQyxVQUFVLENBQUMsRUFBRUksT0FBTztBQUM1QmpCLDhCQUFnQlksS0FBS0MsVUFBVSxDQUFDLEVBQUVJO1lBQ25DO0FBQ0EsZ0JBQUlMLEtBQUtDLFVBQVV4SixTQUFTLEdBQUc7QUFDOUI0SSxnQ0FBa0JXLEtBQUtDLFVBQVUsQ0FBQyxFQUFFdFA7WUFDckM7VUFDRDtBQUNBLGNBQUlxUCxLQUFLTSxXQUFXO0FBQ25CbkIsd0JBQVlhLEtBQUtNO1VBQ2xCO0FBQ0EsY0FBSU4sS0FBS08sZ0JBQWdCO0FBQ3hCVix3QkFBWUcsS0FBS08sZUFBZXhTLFFBQVEsT0FBTyxFQUFFO1VBQ2xEO0FBQ0E2USx3QkFBYyxPQUFPb0IsS0FBS1EsWUFBWTtBQUN0QyxjQUFJL1EsS0FBS3FRLE1BQU1XLFFBQVE7QUFDdEJ6Qix3QkFBWXZQLEtBQUtxUSxNQUFNVyxPQUFPQztVQUMvQjtBQUNBLGNBQUlWLEtBQUtXLGNBQWMsQ0FBQ2xSLEtBQUssZ0JBQWdCLEtBQUssQ0FBQ0EsS0FBSyxnQkFBZ0IsRUFBRWtSLFlBQVk7QUFFckYsZ0JBQUluSCxLQUFLO0FBQ1QscUJBQVNyQixJQUFJLEdBQUdBLElBQUk2SCxLQUFLVyxVQUFVbEssUUFBUTBCLEtBQUs7QUFDL0NxQixxQkFDRXJCLElBQUksSUFBSSxNQUFNLE1BQU02SCxLQUFLVyxVQUFVeEksQ0FBQyxFQUFFeUksS0FBSzdTLFFBQVEsbUJBQW1CbUosT0FBT0MsSUFBQTBKLHFCQUFBQSxtQkFBQXhKLHVCQUFBLENBQUEsSUFBQSxHQUFBLENBQUEsTUFBQSxDQUFBLEVBQUEsQ0FBUTtZQUN4RjtBQUNBLGdCQUFJbUMsR0FBRy9DLFNBQVMsR0FBRztBQUNsQjJGLGdDQUFrQixJQUFJN0UsT0FBQSwyQkFBQXpLLE9BQWtDME0sSUFBRSw2QkFBQSxDQUE2QjtZQUN4RjtVQUNEO1FBQ0Q7TUFDRDtBQUVBLFVBQUkvSixLQUFLcVEsTUFBTWdCLFNBQVM7QUFDdkIsWUFBSXJSLEtBQUtxUSxNQUFNZ0IsUUFBUUMsUUFBUSxDQUFDbEIsV0FBVztBQUMxQ0Esc0JBQVlwUSxLQUFLcVEsTUFBTWdCLFFBQVFDLEtBQUtoVCxRQUFRLE9BQU8sRUFBRTtRQUN0RDtBQUNBLFlBQUkySSxHQUFHeEIsd0JBQXdCLE1BQU07QUFFcEN3QixhQUFHeEIsc0JBQXNCekYsS0FBS3FRLE1BQU1nQixRQUFRRSxTQUFTO1FBQ3REO01BQ0Q7QUFDQTlCLG1CQUFhVztBQUViLFVBQUlwUSxLQUFLcVEsTUFBTW1CLFlBQVl4UixLQUFLcVEsTUFBTW1CLFNBQVNwRyxTQUFTO0FBQ3ZEZ0Usc0JBQWMsQ0FBQ25JLEdBQUdYLHlCQUF5QnRHLEtBQUtxUSxNQUFNbUIsU0FBU3BHLFFBQVFxRyxtQkFBbUI7QUFDMUZwQyxvQkFBWSxDQUFDcEksR0FBR1gseUJBQXlCdEcsS0FBS3FRLE1BQU1tQixTQUFTcEcsUUFBUXNHLGlCQUFpQjtBQUN0RnBDLHFCQUFhdFAsS0FBS3FRLE1BQU1tQixTQUFTcEcsUUFBUXVHLGlCQUFpQjtBQUcxRCxZQUFJckMsWUFBWTtBQUNmckksYUFBR1osZUFBZTtRQUNuQjtNQUNEO0lBQ0Q7RUFDRDtBQUNBLE1BQUl1TCxpQkFBaUI7QUFDckIsUUFBTUMsZUFBZUEsQ0FBQ3RQLFFBQVF1UCxZQUFZO0FBQ3pDLFFBQUlGLGdCQUFnQjtBQUNuQjtJQUNEO0FBQ0FBLHFCQUFpQjtBQUNqQixRQUFJRztBQUNKLFFBQUlqRCxjQUFjO0FBQ2pCaUQsdUJBQWlCakQsYUFBYWtEO0FBQzlCbEQsbUJBQWFrRCxXQUFXO0lBQ3pCO0FBQ0EsVUFBTUMsT0FBTyxZQUFhOU8sTUFBTTtBQUMvQnlPLHVCQUFpQjtBQUNqQixVQUFJOUMsY0FBYztBQUNqQkEscUJBQWFrRCxXQUFXRDtNQUN6QjtBQUNBRCxjQUFRSSxNQUFNLE1BQU0vTyxJQUFJO0lBQ3pCO0FBRUEsVUFBTXhELFNBQVM7TUFDZEMsUUFBUTtNQUNSdVMsUUFBUTtNQUNSQyxlQUFlO01BQ2ZDLGFBQWE7TUFDYkMsUUFBUTNPLEtBQUs0TztNQUNiQyxNQUFNLENBQUMsUUFBUSxhQUFhLFdBQVc7TUFDdkNDLFFBQVE7TUFDUkMsUUFBUSxDQUFDLFdBQVcsYUFBYSxPQUFPLE1BQU07TUFDOUNDLFNBQVM7TUFDVEMsU0FBUztNQUNUQyxPQUFPO01BQ1BDLFdBQVduUCxLQUFLb1A7TUFDaEJDLFNBQVM7TUFDVEMsTUFBTSxDQUFDLFlBQVksWUFBWSxRQUFRO01BQ3ZDelMsTUFBTTtNQUNOMFMsUUFBUSxDQUFDLFNBQVM7SUFDbkI7QUFDQXZXLFFBQUlMLElBQUlxRCxNQUFNLEVBQ1p3VCxLQUFNblQsVUFBUztBQUNmbVEsY0FBUW5RLElBQUk7QUFDWnVDLGFBQU8wUCxJQUFJO0lBQ1osQ0FBQyxFQUNBQSxLQUFLLENBQUM7TUFBQ21CO01BQVFDO0lBQVUsTUFBTTtBQUMvQnBCLFdBQUEsR0FBQTVVLE9BQVErVixRQUFNLEdBQUEsRUFBQS9WLE9BQUlnVyxVQUFVLENBQUU7SUFDL0IsQ0FBQztFQUNIO0FBQ0EsUUFBTUMsaUJBQWtCQyxXQUFVO0FBQ2pDLFdBQU90USxXQUFXLHlCQUF5QndFLE9BQU84TCxLQUFLLENBQUM7RUFDekQ7QUFDQSxRQUFNQyxtQkFBbUJBLE1BQU07QUFDOUIsVUFBTUMsTUFBTSxvQkFBSUMsS0FBSztBQUNyQixRQUFJQyxLQUFLbE0sT0FBT2dNLElBQUlHLGVBQWUsQ0FBQztBQUNwQyxVQUFNQyxNQUFPOUgsT0FBTTtBQUNsQixhQUFPQSxFQUFFeEIsTUFBTSxFQUFFO0lBQ2xCO0FBQ0FvSixVQUNDRSxJQUFBLElBQUF4VyxPQUFRb1csSUFBSUssWUFBWSxJQUFJLENBQUMsQ0FBRSxJQUMvQkQsSUFBQSxJQUFBeFcsT0FBUW9XLElBQUlNLFdBQVcsQ0FBQyxDQUFFLElBQzFCRixJQUFBLEtBQUF4VyxPQUFTb1csSUFBSU8sWUFBWSxDQUFDLENBQUUsSUFDNUJILElBQUEsS0FBQXhXLE9BQVNvVyxJQUFJUSxjQUFjLENBQUMsQ0FBRSxJQUM5QkosSUFBQSxLQUFBeFcsT0FBU29XLElBQUlTLGNBQWMsQ0FBQyxDQUFFO0FBQy9CLFdBQU9QO0VBQ1I7QUFDQSxRQUFNUSxpQkFBaUJBLENBQUNyQyxTQUFTc0MsaUJBQWlCO0FBQ2pELFFBQUluRixhQUFhLE1BQU07QUFDdEI2QyxjQUFRN08sV0FBVyxzQkFBc0IsQ0FBQztBQUMxQztJQUNEO0FBUUEsUUFBSXJEO0FBTUosVUFBTXlVLG9CQUNIM0UsY0FBYyxRQUFRQSxjQUFjL0wsS0FBS29QLG1CQUN6Q3BELGtCQUFrQixRQUFRQSxrQkFBa0JoTSxLQUFLb1Asb0JBQ25EbkQsbUJBQ0FBLG9CQUFvQmpNLEtBQUsyUTtBQUMxQixRQUFJRixnQkFBZ0IsQ0FBQ0EsYUFBYUcsWUFBWSxDQUFDdE4sR0FBR3BCLGlCQUFpQjBKLGFBQWEsQ0FBQzhFLGtCQUFrQjtBQUdsR3RGLGlCQUFXeUYsWUFBWW5XLFFBQVFrUjtBQUMvQjNQLGVBQVNtUCxXQUFXMEY7QUFDcEIsVUFBSTdVLFFBQVE7QUFDWEEsZUFBT3ZCLFFBQVE7QUFDZnVCLGVBQU80SSxPQUFPNUksT0FBT3ZCO01BQ3RCO0lBQ0QsT0FBTztBQUNOdUIsZUFBU21QLFdBQVcyRjtBQUNwQixVQUFJOVUsUUFBUTtBQUNYQSxlQUFPdkIsUUFBUTtBQUNmdUIsZUFBTzRJLE9BQU81SSxPQUFPdkI7TUFDdEI7SUFDRDtBQUNBLFFBQUltRSxTQUFTO01BQ1psRixNQUFNMlI7SUFDUDtBQUNBLFVBQU0wRixVQUFVLENBQUE7QUFDaEIsVUFBTUMsUUFBUSxDQUFBO0FBQ2QsVUFBTUMsVUFBVSxDQUFBO0FBQ2hCLFVBQU1DLFNBQVNWLGVBQWUsQ0FBQ0EsWUFBWSxJQUFJdkY7QUFDL0MsUUFBSWtHO0FBQ0osUUFBSXJNO0FBQ0osUUFBSXZJLFFBQVE7QUFDWixRQUFJNlUsVUFBVTtBQUNkLFNBQUt0TSxJQUFJLEdBQUdBLElBQUlvTSxPQUFPOU4sUUFBUTBCLEtBQUs7QUFDbkNxTSxhQUFPRCxPQUFPcE0sQ0FBQztBQUNmLFVBQUlxTSxLQUFLclgsVUFBVXVTLFNBQVM7QUFDM0J6TixpQkFBU29LLGdCQUNScEssT0FBT2xGLE1BQ1B5WCxLQUFLRSxrQkFDTEYsS0FBS0csaUJBQ0xILEtBQUtJLFlBQ0xKLEtBQUtLLGFBQ047QUFDQSxZQUFJLENBQUM1UyxPQUFPckMsT0FBTztBQUNsQjZVO0FBQ0EsY0FBSSxDQUFDRCxLQUFLRSxvQkFBb0JGLEtBQUtFLGlCQUFpQmpPLFdBQVcsR0FBRztBQUNqRTROLGtCQUFNQSxNQUFNNU4sTUFBTSxJQUFJK04sS0FBS0c7VUFDNUIsT0FBTztBQUNOUCxvQkFBUUEsUUFBUTNOLE1BQU0sSUFBSTtjQUN6QnFPLE1BQU1OLEtBQUtFO2NBQ1hLLElBQUlQLEtBQUtHO1lBQ1Y7VUFDRDtRQUNELFdBQVcvVSxVQUFVLE1BQU07QUFDMUIsV0FBQztZQUFDQTtVQUFLLElBQUlxQztRQUNaO01BQ0QsV0FBV3VTLEtBQUtyWCxVQUFVd1MsV0FBVzZFLEtBQUtFLG9CQUFvQkYsS0FBS0UsaUJBQWlCak8sU0FBUyxHQUFHO0FBQy9GeEUsaUJBQVNvSyxnQkFBZ0JwSyxPQUFPbEYsTUFBTXlYLEtBQUtFLGtCQUFrQixNQUFNLE1BQU0sS0FBSztBQUM5RSxZQUFJLENBQUN6UyxPQUFPckMsT0FBTztBQUNsQjZVO0FBQ0FILGtCQUFRQSxRQUFRN04sTUFBTSxJQUFJK04sS0FBS0U7UUFDaEMsV0FBVzlVLFVBQVUsTUFBTTtBQUMxQixXQUFDO1lBQUNBO1VBQUssSUFBSXFDO1FBQ1o7TUFDRDtJQUNEO0FBQ0EsUUFBSXJDLFVBQVUsTUFBTTtBQUVuQlAsZUFBU21QLFdBQVcyRjtBQUNwQixVQUFJOVUsUUFBUTtBQUNYQSxlQUFPdkIsUUFBUTtBQUNmdUIsZUFBTzRJLE9BQU81SSxPQUFPdkI7TUFDdEI7SUFDRDtBQUVBMFEsZUFBV3dHLFlBQVlyVyxVQUFVb1E7QUFDakNQLGVBQVd5RyxZQUFZdFcsVUFBVyxDQUFDeUUsS0FBS29CLGVBQWVxSyxlQUFnQkMsYUFBYUY7QUFDcEYsUUFBSXhMLEtBQUtvQixlQUFlLENBQUMsQ0FBQ3FQLGNBQWM7QUFFdkMsVUFBSXhVLFVBQVVBLE9BQU92QixVQUFVLFVBQVU7QUFDeEMsWUFBSTRJLEdBQUd6QyxXQUFXO0FBQ2pCdUsscUJBQVcwRyxhQUFhcFgsUUFBUTRJLEdBQUd6QztRQUNwQztNQUNELE9BQU87QUFDTnVLLG1CQUFXMkcsY0FBY3JYLFFBQVE0SSxHQUFHekM7TUFDckM7QUFDQSxVQUFJd1EsWUFBWSxHQUFHO0FBQ2xCLFlBQUl4UyxPQUFPMUMsV0FBVzBDLE9BQU8xQyxRQUFRa0gsU0FBUyxHQUFHO0FBQ2hEK0gscUJBQVdsUSxVQUFVUixTQUNuQjRJLEdBQUd6QyxZQUFZLEtBQUt2QixXQUFXLGlCQUFpQixLQUNqRFQsT0FBTzFDLFFBQVE2VixLQUFLMVMsV0FBVyxvQkFBb0IsQ0FBQyxLQUNuRGdFLEdBQUd6QyxZQUFZLEtBQUt2QixXQUFXLGdCQUFnQjtRQUNsRDtBQUNBOEwsbUJBQVd3RyxZQUFZclcsVUFBVStILEdBQUdaLGdCQUFnQmlKO01BQ3JELFdBQVcwRixTQUFTO0FBQ25CLFlBQUlsVixVQUFVLENBQUE7QUFDZCxjQUFNOFYsZUFBZSxDQUFBO0FBRXJCLGFBQUtsTixJQUFJLEdBQUdBLElBQUltTSxRQUFRN04sUUFBUTBCLEtBQUs7QUFDcEM1SSxrQkFBUUEsUUFBUWtILE1BQU0sSUFBQSxJQUFBM0osT0FBUTRGLFdBQVcsNEJBQTRCNFIsUUFBUW5NLENBQUMsQ0FBQyxDQUFDO1FBQ2pGO0FBQ0EsWUFBSW1NLFFBQVE3TixXQUFXLEdBQUc7QUFDekI0Tyx1QkFBYUEsYUFBYTVPLE1BQU0sSUFBQSxJQUFBM0osT0FBUTRGLFdBQVcsNEJBQTRCNFIsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMzRixXQUFXQSxRQUFRN04sU0FBUyxHQUFHO0FBQzlCNE8sdUJBQWFBLGFBQWE1TyxNQUFNLElBQUEsS0FBQTNKLE9BQVNpVyxlQUFldUIsUUFBUTdOLE1BQU0sQ0FBQztRQUN4RTtBQUVBLGFBQUswQixJQUFJLEdBQUdBLElBQUlrTSxNQUFNNU4sUUFBUTBCLEtBQUs7QUFDbEM1SSxrQkFBUUEsUUFBUWtILE1BQU0sSUFBQSxJQUFBM0osT0FBUTRGLFdBQVcsNEJBQTRCMlIsTUFBTWxNLENBQUMsQ0FBQyxDQUFDO1FBQy9FO0FBQ0EsWUFBSWtNLE1BQU01TixXQUFXLEdBQUc7QUFDdkI0Tyx1QkFBYUEsYUFBYTVPLE1BQU0sSUFBQSxJQUFBM0osT0FBUTRGLFdBQVcsNEJBQTRCMlIsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN6RixXQUFXQSxNQUFNNU4sU0FBUyxHQUFHO0FBQzVCNE8sdUJBQWFBLGFBQWE1TyxNQUFNLElBQUEsS0FBQTNKLE9BQVNpVyxlQUFlc0IsTUFBTTVOLE1BQU0sQ0FBQztRQUN0RTtBQUVBLGNBQU02TyxRQUFRckcsU0FBUyxNQUFXO0FBQ2xDLGFBQUs5RyxJQUFJLEdBQUdBLElBQUlpTSxRQUFRM04sUUFBUTBCLEtBQUs7QUFDcEMsY0FBSWlNLFFBQVFqTSxDQUFDLEVBQUUyTSxTQUFTVixRQUFRak0sQ0FBQyxFQUFFNE0sSUFBSTtBQUN0Q3hWLG9CQUFRQSxRQUFRa0gsTUFBTSxJQUFBLElBQUEzSixPQUFRNEYsV0FBVyw0QkFBNEIwUixRQUFRak0sQ0FBQyxFQUFFMk0sSUFBSSxDQUFDO1VBQ3RGLE9BQU87QUFDTnZWLG9CQUFRQSxRQUFRa0gsTUFBTSxJQUFBLElBQUEzSixPQUNqQjRGLFdBQVcsNEJBQTRCMFIsUUFBUWpNLENBQUMsRUFBRTJNLElBQUksQ0FBQyxFQUFBaFksT0FBR3dZLEtBQUssRUFBQXhZLE9BQUc0RixXQUNyRSw0QkFDQTBSLFFBQVFqTSxDQUFDLEVBQUU0TSxFQUNaLENBQUM7VUFDSDtRQUNEO0FBQ0EsWUFBSVgsUUFBUTNOLFdBQVcsR0FBRztBQUN6QixjQUFJMk4sUUFBUSxDQUFDLEVBQUVVLFNBQVNWLFFBQVEsQ0FBQyxFQUFFVyxJQUFJO0FBQ3RDTSx5QkFBYUEsYUFBYTVPLE1BQU0sSUFBQSxJQUFBM0osT0FDM0I0RixXQUFXLDRCQUE0QjBSLFFBQVEsQ0FBQyxFQUFFVSxJQUFJLENBQUM7VUFDN0QsT0FBTztBQUNOTyx5QkFBYUEsYUFBYTVPLE1BQU0sSUFBQSxJQUFBM0osT0FDM0I0RixXQUFXLDRCQUE0QjBSLFFBQVEsQ0FBQyxFQUFFVSxJQUFJLENBQUMsRUFBQWhZLE9BQUd3WSxLQUFLLEVBQUF4WSxPQUFHNEYsV0FDckUsNEJBQ0EwUixRQUFRLENBQUMsRUFBRVcsRUFDWixDQUFDO1VBQ0g7UUFDRCxXQUFXWCxRQUFRM04sU0FBUyxHQUFHO0FBQzlCNE8sdUJBQWFBLGFBQWE1TyxNQUFNLElBQUEsS0FBQTNKLE9BQVNpVyxlQUFlcUIsUUFBUTNOLE1BQU0sQ0FBQztRQUN4RTtBQUNBLFlBQUlsSCxRQUFRa0gsU0FBUyxHQUFHO0FBQ3ZCbEgsb0JBQVVBLFFBQVE2VixLQUFLMVMsV0FBVyxvQkFBb0IsQ0FBQztBQUN2RCxjQUNDbkQsUUFBUWtILFNBQ1IsT0FDRUMsR0FBR3pDLFlBQVksS0FBS3ZCLFdBQVcsaUJBQWlCLEdBQUcrRCxVQUNuREMsR0FBR3pDLFlBQVksS0FBS3ZCLFdBQVcsZ0JBQWdCLEdBQUcrRCxRQUNuRDtBQUNEbEgsc0JBQVU4VixhQUFhRCxLQUFLMVMsV0FBVyxvQkFBb0IsQ0FBQztVQUM3RDtBQUNBOEwscUJBQVdsUSxVQUFVUixTQUNuQjRJLEdBQUd6QyxZQUFZLEtBQUt2QixXQUFXLGlCQUFpQixLQUNqRG5ELFdBQ0NtSCxHQUFHekMsWUFBWSxLQUFLdkIsV0FBVyxnQkFBZ0I7UUFDbEQ7TUFDRDtJQUNEO0FBQ0E4TCxlQUFXM1EsV0FBV0MsUUFBUW1FLE9BQU9sRjtBQUNyQ3lSLGVBQVcrRyxZQUFZelgsUUFBUW9SLGNBQWMrRCxpQkFBaUI7QUFDOUR6RSxlQUFXZ0gsV0FBVzFYLFFBQVE2USxZQUFZSCxXQUFXK0csWUFBWXpYO0FBQ2pFLFFBQUlnVyxrQkFBa0I7QUFDckJ0RixpQkFBV2lILE1BQU0zWCxRQUFRb0osT0FBT2tJLGlCQUFpQmhNLEtBQUtvUCxlQUFlO0lBQ3RFO0FBRUFoRSxlQUFXa0gsU0FBU0MsTUFBTTtFQUMzQjtBQUNBLFFBQU1DLGFBQWFBLENBQUM1RixNQUFNNkYsY0FBYztBQUN2QyxVQUFNQyxPQUFPOUYsS0FBSytGO0FBQ2xCLFVBQU07TUFBQ3RTO0lBQUssSUFBSXVNO0FBQ2hCLFFBQUlnRyxTQUFTO0FBQ2IsUUFBSUMsV0FBVyxPQUFPakcsS0FBS2tHLGFBQWE7QUFDeEMsUUFBSS9OO0FBQ0osVUFBTXFFLFlBQVl3RCxLQUFLbUcsZ0JBQWdCLE9BQU9uRyxLQUFLbUcsYUFBYUMsV0FBVztBQUMzRSxVQUFNQyxhQUFhLE9BQU9yRyxLQUFLc0csWUFBWTtBQUMzQyxTQUFLbk8sSUFBSSxHQUFHQSxJQUFJME4sVUFBVXBQLFFBQVEwQixLQUFLO0FBQ3RDLFVBQUlBLEtBQUswTixVQUFVMU4sQ0FBQyxFQUFFb08sb0JBQW9CdkcsS0FBSzFRLE1BQU0wSyxNQUFNb0QsS0FBS0MsSUFBSSxHQUFHMkMsS0FBSzFRLE1BQU13SyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRztBQUNyRztNQUNEO0FBR0ErTCxnQkFBVTFOLENBQUMsRUFBRTBNLGdCQUFnQnJJO0FBQzdCcUosZ0JBQVUxTixDQUFDLEVBQUVxTyxjQUFjLENBQUNIO0FBQzVCUixnQkFBVTFOLENBQUMsRUFBRWpMLEtBQUt1WixNQUFNSixhQUFhM1AsR0FBRzFCLFdBQVcwQixHQUFHM0I7SUFDdkQ7QUFDQSxRQUFJc1IsWUFBWTtBQUNmO0lBQ0Q7QUFDQSxRQUFJLENBQUNKLFlBQVlILFNBQVNwVCxXQUFXLG1CQUFtQixLQUFLQSxXQUFXLGdCQUFnQixJQUFJO0FBQUEsVUFBQWdVLFlBQUFDLDJCQUN4RWIsSUFBQSxHQUFBYztBQUFBLFVBQUE7QUFBbkIsYUFBQUYsVUFBQWxMLEVBQUEsR0FBQSxFQUFBb0wsUUFBQUYsVUFBQUcsRUFBQSxHQUFBakUsUUFBeUI7QUFBQSxnQkFBZGtFLE9BQUFGLE1BQUE5WTtBQUNWLGNBQUlpWixNQUFNRCxLQUFLeFg7QUFFZixjQUFJeVgsS0FBSztBQUNSQSxrQkFBTUEsSUFBSS9NLE1BQU1vRCxLQUFLQyxJQUFJLEdBQUcwSixJQUFJak4sUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUvTCxRQUFRLE1BQU0sR0FBRztBQUNwRSxnQkFBSWdaLFFBQVFyVSxXQUFXLG1CQUFtQixHQUFHO0FBQzVDc1QsdUJBQVM7QUFDVDtZQUNELFdBQVdlLFFBQVFyVSxXQUFXLGdCQUFnQixHQUFHO0FBQ2hEdVQseUJBQVc7QUFDWDtZQUNEO1VBQ0Q7UUFDRDtNQUFBLFNBQUFlLEtBQUE7QUFBQU4sa0JBQUFqWixFQUFBdVosR0FBQTtNQUFBLFVBQUE7QUFBQU4sa0JBQUFPLEVBQUE7TUFBQTtJQUNEO0FBQ0EsUUFBSSxDQUFDaEIsWUFBWSxDQUFDRCxRQUFRO0FBQ3pCO0lBQ0Q7QUFDQSxRQUFJLENBQUN2UyxTQUFTQSxNQUFNZ0QsV0FBVyxHQUFHO0FBQ2pDO0lBQ0Q7QUFDQSxVQUFNc0wsU0FBUyxDQUFBO0FBQ2YsU0FBSzVKLElBQUksR0FBR0EsSUFBSTFFLE1BQU1nRCxRQUFRMEIsS0FBSztBQUNsQzs7UUFFQzFFLE1BQU0wRSxDQUFDLEVBQUUvRCxPQUFPO1FBRWhCWCxNQUFNMEUsQ0FBQyxFQUFFN0ksU0FDVG1FLE1BQU0wRSxDQUFDLEVBQUU3SSxNQUFNbUgsU0FBUztRQUN2QjtBQUVELFlBQUl5RSxRQUFRekgsTUFBTTBFLENBQUMsRUFBRTdJO0FBQ3JCNEwsZ0JBQVFBLE1BQU1sQixNQUFNb0QsS0FBS0MsSUFBSSxHQUFHbkMsTUFBTXBCLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUV2RCxZQUFJLENBQUNwRCxHQUFHdEIsYUFBYSxDQUFDc0IsR0FBR3RCLFVBQVVYLEtBQUt5RyxLQUFLLEdBQUc7QUFDL0M2RyxpQkFBT0EsT0FBT3RMLE1BQU0sSUFBSXlFO1FBQ3pCO01BQ0Q7SUFDRDtBQUNBLFFBQUk2RyxPQUFPdEwsV0FBVyxHQUFHO0FBQ3hCO0lBQ0Q7QUFDQSxTQUFLMEIsSUFBSSxHQUFHQSxJQUFJME4sVUFBVXBQLFFBQVEwQixLQUFLO0FBQ3RDLFVBQUlBLEtBQUswTixVQUFVMU4sQ0FBQyxFQUFFb08sb0JBQW9CdkcsS0FBSzFRLE1BQU0wSyxNQUFNb0QsS0FBS0MsSUFBSSxHQUFHMkMsS0FBSzFRLE1BQU13SyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRztBQUNyRztNQUNEO0FBQ0ErTCxnQkFBVTFOLENBQUMsRUFBRXFPLGNBQWM7QUFDM0JYLGdCQUFVMU4sQ0FBQyxFQUFFakwsS0FBS3VaLE1BQU0vUCxHQUFHM0I7QUFDM0IsVUFBSWdOLE9BQU90TCxTQUFTLEdBQUc7QUFDdEJvUCxrQkFBVTFOLENBQUMsRUFBRStPLE1BQU1uRjtNQUNwQixPQUFPO0FBQ044RCxrQkFBVTFOLENBQUMsRUFBRXBMLEtBQUtlLFFBQ2pCaVUsT0FBTyxDQUFDLEtBQUs4RCxVQUFVMU4sQ0FBQyxFQUFFeU0sZUFBZSxPQUFPLEtBQUEsSUFBQTlYLE9BQVMrWSxVQUFVMU4sQ0FBQyxFQUFFeU0sVUFBVTtNQUNsRjtJQUNEO0VBQ0Q7QUFDQSxRQUFNdUMsbUJBQW1CQSxDQUFDdEIsV0FBV3pXLFdBQVc7QUFDL0MsUUFBSSxDQUFDQSxVQUFVLENBQUNBLE9BQU8wUSxTQUFTLENBQUMxUSxPQUFPMFEsTUFBTUMsT0FBTztBQUNwRDtJQUNEO0FBQ0EsZUFBV3FILEtBQUtoWSxPQUFPMFEsTUFBTUMsT0FBTztBQUNuQyxVQUFJLENBQUMxSixPQUFPQyxPQUFPbEgsT0FBTzBRLE1BQU1DLE9BQU9xSCxDQUFDLEdBQUc7QUFDMUM7TUFDRDtBQUNBeEIsaUJBQVd4VyxPQUFPMFEsTUFBTUMsTUFBTXFILENBQUMsR0FBR3ZCLFNBQVM7SUFDNUM7RUFDRDtBQUNBLFFBQU13QixlQUFlQSxDQUFDeEIsV0FBV3lCLGFBQWE7QUFDN0MsUUFBSW5QO0FBQ0osU0FBS0EsSUFBSSxHQUFHQSxJQUFJME4sVUFBVXBQLFFBQVEwQixLQUFLO0FBQ3RDME4sZ0JBQVUxTixDQUFDLEVBQUUrTyxNQUFNO0FBQ25CckIsZ0JBQVUxTixDQUFDLEVBQUVvUCxXQUFXMUIsVUFBVTFOLENBQUMsRUFBRXFQO0lBQ3RDO0FBQ0EsUUFBSXhRLGVBQWU7QUFDbEJzUSxlQUFTekIsU0FBUztBQUNsQjtJQUNEO0FBQ0EsVUFBTXpXLFNBQVM7TUFDZEMsUUFBUTtNQUNSdVMsUUFBUTtNQUNSSyxNQUFNO01BQ053RixhQUFhO01BQ2JDLFNBQVM3QixVQUFVcFAsU0FBUztNQUM1QmtSLFNBQVM5QixVQUFVcFAsU0FBUztJQUM3QjtBQUNBLFVBQU1zTCxTQUFTLENBQUE7QUFDZixTQUFLNUosSUFBSSxHQUFHQSxJQUFJME4sVUFBVXBQLFFBQVEwQixLQUFLO0FBQ3RDLFVBQUk1QixJQUFJc1AsVUFBVTFOLENBQUMsRUFBRW9QO0FBQ3JCaFIsVUFBSStFLGlCQUFpQi9FLEdBQUdHLEdBQUdWLFNBQVM7QUFDcEM2UCxnQkFBVTFOLENBQUMsRUFBRW9PLGtCQUFrQmhRO0FBQy9Cd0wsYUFBT0EsT0FBT3RMLE1BQU0sSUFBQSxZQUFBM0osT0FBZ0J5SixDQUFDO0lBQ3RDO0FBQ0FuSCxXQUFPMlMsU0FBU0EsT0FBT3FELEtBQUssR0FBRztBQUMvQmhaLFFBQUlMLElBQUlxRCxNQUFNLEVBQ1p3VCxLQUFNZ0YsVUFBUztBQUNmVCx1QkFBaUJ0QixXQUFXK0IsSUFBSTtBQUNoQ04sZUFBU3pCLFNBQVM7SUFDbkIsQ0FBQyxFQUNBbkUsS0FBTW1HLFNBQVE7QUFDZCxVQUFJLENBQUNBLEtBQUs7QUFDVDdRLHdCQUFnQjtNQUNqQjtBQUNBc1EsZUFBU3pCLFNBQVM7SUFDbkIsQ0FBQztFQUNIO0FBQ0EsUUFBTWlDLGFBQWNDLFdBQVU7QUFDN0IsUUFBSUEsTUFBTUMsV0FBVztBQUNwQjtJQUNEO0FBQ0EsYUFBQUMsS0FBQSxHQUFBQyxXQUFxQjVKLFNBQUEySixLQUFBQyxTQUFBelIsUUFBQXdSLE1BQVM7QUFBOUIsWUFBV0UsU0FBQUQsU0FBQUQsRUFBQTtBQUNWLFVBQUlFLFdBQVdKLE9BQU87QUFDckJJLGVBQU9DLFdBQVc7TUFDbkI7SUFDRDtBQUNBTCxVQUFNQyxZQUFZO0FBQ2xCLFFBQUlELE1BQU1iLEtBQUs7QUFDZG1CLGNBQVFOLEtBQUs7SUFDZCxPQUFPO0FBRU4sWUFBTU8sZ0JBQWdCUCxNQUFNUSxpQkFBaUJSLE1BQU1QLGFBQWE7QUFDaEUsWUFBTWdCLGNBQWNULE1BQU1oYixLQUFLZSxTQUFTO0FBQ3hDLFVBQ0V3YSxjQUFjN1IsV0FBVyxLQUFLK1IsWUFBWS9SLFNBQVMsS0FDbkQ2UixjQUFjN1IsU0FBUyxLQUFLK1IsWUFBWTFPLFFBQVF3TyxhQUFhLEdBQzdEO0FBR0RQLGNBQU1VLFlBQVk7QUFDbEIsY0FBTWxTLElBQUlpUyxZQUFZRSxNQUFNLEdBQUc7QUFDL0IsU0FBQ1gsTUFBTVAsU0FBUyxJQUFJalI7QUFDcEJ3UixjQUFNUSxnQkFBZ0JSLE1BQU1QO0FBQzVCLFlBQUlqUixFQUFFRSxTQUFTLEdBQUc7QUFDakIsV0FBQSxFQUFHc1IsTUFBTW5ELFVBQVUsSUFBSXJPO1FBQ3hCO0FBQ0F3UixjQUFNWSxrQkFBTlosTUFBTVksZ0JBQWtCO1VBQ3ZCQyxPQUFPclMsRUFBRSxDQUFDLEVBQUVFO1VBQ1pvUyxLQUFLdFMsRUFBRSxDQUFDLEVBQUVFO1FBQ1g7TUFDRDtBQUNBLFVBQUlzUixNQUFNVSxXQUFXO0FBQ3BCVixjQUFNZSxZQUFZO01BQ25CO0FBQ0EsVUFBSWYsTUFBTVksZUFBZTtBQUN4QkksbUJBQVcsTUFBTTtBQUNoQmhCLGdCQUFNaUIsYUFBYWpCLE1BQU1ZLGNBQWNDLE9BQU9iLE1BQU1ZLGNBQWNFLEdBQUc7UUFDdEUsR0FBRyxDQUFDO01BQ0w7SUFDRDtFQUNEO0FBQ0EsUUFBTVIsVUFBV04sV0FBVTtBQUMxQixRQUFJQSxNQUFNQyxXQUFXO0FBQ3BCRCxZQUFNa0IsZ0JBQWdCbEIsTUFBTWIsS0FBSyxPQUFPLE1BQU0sSUFBSTtBQUNsRGEsWUFBTWIsTUFBTTtJQUNiLE9BQU87QUFDTlksaUJBQVdDLEtBQUs7SUFDakI7RUFDRDtBQUNBLFFBQU1tQixjQUFjQSxNQUFNO0FBQ3pCLFVBQU1yRCxZQUFZLENBQUE7QUFDbEIsYUFBQXNELE1BQUEsR0FBQUMsWUFBcUI5SyxTQUFBNkssTUFBQUMsVUFBQTNTLFFBQUEwUyxPQUFTO0FBQTlCLFlBQVdoQixTQUFBaUIsVUFBQUQsR0FBQTtBQUNWLFVBQUloQixPQUFPaGIsVUFBVXNTLGtCQUFrQjBJLE9BQU9oYixVQUFVcVMsTUFBTTtBQUM3RHFHLGtCQUFVQSxVQUFVcFAsTUFBTSxJQUFJMFI7TUFDL0I7SUFDRDtBQUNBLFFBQUl0QyxVQUFVcFAsV0FBVyxHQUFHO0FBQzNCNkssbUJBQ0VDLGFBQVk7QUFDWnFDLHVCQUFlckMsT0FBTztNQUN2QixHQUNDOEgsU0FBUTtBQUNSeGQsV0FBR2dFLE9BQU93WixLQUFLO1VBQUNyWixLQUFLO1FBQVEsQ0FBQztNQUMvQixDQUNEO0FBQ0E7SUFDRDtBQUNBcVgsaUJBQWF4QixXQUFZeUQsY0FBYTtBQUNyQyxVQUFJQyxXQUFXO0FBQ2YsVUFBSUMsYUFBYTtBQUFBLFVBQUFDLGFBQUE5QywyQkFDSzJDLFFBQUEsR0FBQUk7QUFBQSxVQUFBO0FBQXRCLGFBQUFELFdBQUFqTyxFQUFBLEdBQUEsRUFBQWtPLFNBQUFELFdBQUE1QyxFQUFBLEdBQUFqRSxRQUFnQztBQUFBLGdCQUFyQitHLFVBQUFELE9BQUE1YjtBQUNWLGNBQUk2YixRQUFRbkMsY0FBY21DLFFBQVFwQyxVQUFVO0FBQzNDLGdCQUFJb0MsUUFBUXpDLEtBQUs7QUFDaEJxQywyQkFBQUEsV0FBYUk7WUFDZCxXQUFXQSxRQUFRQyxZQUFZLElBQUksR0FBRztBQUNyQ0Qsc0JBQVFFLE9BQU87WUFDaEI7VUFDRCxPQUFPO0FBR05MLHlCQUFhO1VBQ2Q7UUFDRDtNQUFBLFNBQUF4QyxLQUFBO0FBQUF5QyxtQkFBQWhjLEVBQUF1WixHQUFBO01BQUEsVUFBQTtBQUFBeUMsbUJBQUF4QyxFQUFBO01BQUE7QUFDQSxVQUFJc0MsVUFBVTtBQUNibEIsZ0JBQVFrQixRQUFRO01BQ2pCLFdBQVcsQ0FBQ0MsWUFBWTtBQUN2QmxJLHFCQUNFQyxhQUFZO0FBQ1pxQyx5QkFBZXJDLE9BQU87UUFDdkIsR0FDQzhILFNBQVE7QUFDUnhkLGFBQUdnRSxPQUFPd1osS0FBSztZQUFDclosS0FBSztVQUFRLENBQUM7UUFDL0IsQ0FDRDtNQUNEO0lBQ0QsQ0FBQztFQUNGO0FBQ0EsUUFBTThaLGdCQUFnQkEsTUFBTTtBQUMzQixRQUFJdkwsZ0JBQWdCRixVQUFVO0FBQzdCO0lBQ0Q7QUFDQUUsbUJBQWV2RixLQUFLLE9BQU87QUFDM0J1RixpQkFBYXRPLE9BQU87QUFDcEJzTyxpQkFBYXpRLFFBQVE0RSxXQUFXLGlCQUFpQjtBQUNqRDZMLGlCQUFhd0wsaUJBQWlCLFNBQVNiLFdBQVc7QUFDbEQsUUFBSXpLLFdBQVc7QUFDZEEsZ0JBQVV1TCxXQUFXQyxhQUFhMUwsY0FBY0UsU0FBUztJQUMxRCxPQUFPO0FBQ05MLGNBQVEvUSxPQUFPa1IsWUFBWTtJQUM1QjtFQUNEO0FBQ0EsUUFBTTJMLGtCQUFrQkEsTUFBTTtBQUM3QixRQUFJLENBQUMzTCxjQUFjO0FBQ2xCO0lBQ0Q7QUFDQSxRQUFJNEwsYUFBYTtBQUNqQixhQUFBQyxNQUFBLEdBQUFDLFlBQXFCL0wsU0FBQThMLE1BQUFDLFVBQUE1VCxRQUFBMlQsT0FBUztBQUE5QixZQUFXakMsU0FBQWtDLFVBQUFELEdBQUE7QUFDVixVQUFJakMsT0FBT2hiLFVBQVVvUyxXQUFXO0FBQy9CNEsscUJBQWE7QUFDYjtNQUNEO0lBQ0Q7QUFDQTVMLGlCQUFha0QsV0FBVyxDQUFDMEk7RUFDMUI7QUFDQSxRQUFNRyxvQkFBb0I7SUFDekJDLFlBQVk7TUFDWGpSLEtBQUEsR0FBQXhNLE9BQVFqQixHQUFHQyxPQUFPQyxJQUNqQixjQUNELEdBQUMsaUZBQUE7OztNQUdEeWUsU0FBU0EsQ0FBQ0MsYUFBYUMsYUFBYTtBQUNuQyxZQUFJRCxlQUFlQSxZQUFZaFUsVUFBVSxHQUFHO0FBQzNDLGdCQUFNOUQsTUFBTThYLFlBQVksQ0FBQyxFQUFFelEsTUFBTW9ELEtBQUtDLElBQUksR0FBR29OLFlBQVksQ0FBQyxFQUFFM1EsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQzdFLGdCQUFNLENBQUEsRUFBR2lJLE1BQU0sSUFBSTBJO0FBQ25CLGNBQUlFLFNBQVM7QUFDYjVULHlCQUFBQSxhQUFlLElBQUlRLE9BQUEsS0FBQXpLLE9BQVk0SixHQUFHb0MsaUJBQWUsSUFBQSxDQUFJO0FBQ3JELG1CQUFTWCxJQUFJLEdBQUdBLElBQUk0SixPQUFPdEwsUUFBUTBCLEtBQUs7QUFDdkNwQix1QkFBVzhGLFlBQVk7QUFDdkIsa0JBQU1wRCxJQUFJMUMsV0FBVzJDLEtBQUtxSSxPQUFPNUosQ0FBQyxDQUFDO0FBQ25DLGdCQUFJc0IsS0FBS0EsRUFBRWhELFNBQVMsR0FBRztBQUN0QnNMLHFCQUFPNUosQ0FBQyxJQUFJNEosT0FBTzVKLENBQUMsRUFBRTZCLE1BQU1vRCxLQUFLQyxJQUFJLEdBQUcwRSxPQUFPNUosQ0FBQyxFQUFFMkIsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ25FLGtCQUFJbkgsUUFBUW9QLE9BQU81SixDQUFDLEdBQUc7QUFDdEJ3Uyx5QkFBUztjQUNWO1lBQ0QsT0FBTztBQUNONUkscUJBQU82SSxPQUFPelMsR0FBRyxDQUFDO0FBQ2xCQTtZQUNEO1VBQ0Q7QUFDQTRKLGlCQUFPNEksU0FBU0E7QUFDaEIsY0FBSUQsYUFBYS9YLEtBQUs7QUFDckJvUCxtQkFBTzhJLGFBQWFsWTtVQUNyQjtBQUVBLGlCQUFPb1A7UUFDUjtBQUNBLGVBQU87TUFDUjtJQUNEO0lBQ0ErSSxnQkFBZ0I7TUFDZnhSLEtBQUEsR0FBQXhNLE9BQVFqQixHQUFHQyxPQUFPQyxJQUNqQixjQUNELEdBQUMsaUdBQUE7TUFDRHllLFNBQVVDLGlCQUFnQjtBQUN6QixZQUFJQSxlQUFlQSxZQUFZM0ssU0FBUzJLLFlBQVkzSyxNQUFNaUwsVUFBVTtBQUNuRSxnQkFBTWhKLFNBQVMwSSxZQUFZM0ssTUFBTWlMO0FBQ2pDLG1CQUFTNVMsSUFBSSxHQUFHQSxJQUFJNEosT0FBT3RMLFFBQVEwQixLQUFLO0FBQ3ZDNEosbUJBQU81SixDQUFDLElBQUk0SixPQUFPNUosQ0FBQyxFQUFFN0ksTUFBTTBLLE1BQU1vRCxLQUFLQyxJQUFJLEdBQUcwRSxPQUFPNUosQ0FBQyxFQUFFN0ksTUFBTXdLLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztVQUNoRjtBQUNBLGlCQUFPaUk7UUFDUjtBQUNBLGVBQU87TUFDUjtJQUNEO0lBQ0E0SSxRQUFRO01BQ1ByUixLQUFBLEdBQUF4TSxPQUFRakIsR0FBR0MsT0FBT0MsSUFBSSxjQUFjLEdBQUMsZ0VBQUE7TUFDckN5ZSxTQUFTQSxDQUFDQyxhQUFhQyxhQUFhO0FBQ25DLFlBQUlELGVBQWVBLFlBQVkzSyxTQUFTMkssWUFBWTNLLE1BQU1DLFNBQVMsQ0FBQzBLLFlBQVkzSyxNQUFNQyxNQUFNLEVBQUUsR0FBRztBQUVoRyxxQkFBV3FILEtBQUtxRCxZQUFZM0ssTUFBTUMsT0FBTztBQUN4QyxnQkFBSSxDQUFDMUosT0FBT0MsT0FBT21VLFlBQVkzSyxNQUFNQyxPQUFPcUgsQ0FBQyxHQUFHO0FBQy9DO1lBQ0Q7QUFDQSxnQkFBSTRELFNBQVNQLFlBQVkzSyxNQUFNQyxNQUFNcUgsQ0FBQyxFQUFFOVg7QUFDeEMwYixxQkFBU0EsT0FBT2hSLE1BQU1vRCxLQUFLQyxJQUFJLEdBQUcyTixPQUFPbFIsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQzFELGtCQUFNaUksU0FBUyxDQUFDaUosTUFBTTtBQUN0QmpKLG1CQUFPNEksU0FBUztBQUNoQixnQkFBSUQsYUFBYU0sUUFBUTtBQUN4QmpKLHFCQUFPOEksYUFBYUc7WUFDckI7QUFFQSxtQkFBT2pKO1VBQ1I7UUFDRDtBQUNBLGVBQU87TUFDUjtJQUNEO0lBQ0FrSixlQUFlO01BQ2QzUixLQUFBLEdBQUF4TSxPQUFRakIsR0FBR0MsT0FBT0MsSUFDakIsY0FDRCxHQUFDLHNHQUFBO01BQ0R5ZSxTQUFVQyxpQkFBZ0I7QUFDekIsWUFBSUEsZUFBZUEsWUFBWTNLLFNBQVMySyxZQUFZM0ssTUFBTW9MLGlCQUFpQjtBQUMxRSxnQkFBTW5KLFNBQVMwSSxZQUFZM0ssTUFBTW9MO0FBQ2pDLG1CQUFTL1MsSUFBSSxHQUFHQSxJQUFJNEosT0FBT3RMLFFBQVEwQixLQUFLO0FBQ3ZDNEosbUJBQU81SixDQUFDLElBQUk0SixPQUFPNUosQ0FBQyxFQUFFN0ksTUFBTTBLLE1BQU1vRCxLQUFLQyxJQUFJLEdBQUcwRSxPQUFPNUosQ0FBQyxFQUFFN0ksTUFBTXdLLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztVQUNoRjtBQUNBLGlCQUFPaUk7UUFDUjtBQUNBLGVBQU87TUFDUjtJQUNEO0lBQ0FvSixrQkFBa0I7TUFDakI3UixLQUFBLEdBQUF4TSxPQUFRakIsR0FBR0MsT0FBT0MsSUFDakIsY0FDRCxHQUFDLGtGQUFBO01BQ0R5ZSxTQUFVQyxpQkFBZ0I7QUFDekIsWUFBSUEsZUFBZUEsWUFBWTNLLFNBQVMySyxZQUFZM0ssTUFBTUMsT0FBTztBQUNoRSxxQkFBV3FILEtBQUtxRCxZQUFZM0ssTUFBTUMsT0FBTztBQUN4QyxnQkFBSTBLLFlBQVkzSyxNQUFNQyxNQUFNcUgsQ0FBQyxFQUFFckIsWUFBWTtBQUMxQyxvQkFBTWhFLFNBQVMwSSxZQUFZM0ssTUFBTUMsTUFBTXFILENBQUMsRUFBRXJCO0FBQzFDLHVCQUFTNU4sSUFBSSxHQUFHQSxJQUFJNEosT0FBT3RMLFFBQVEwQixLQUFLO0FBQ3ZDNEosdUJBQU81SixDQUFDLElBQUk0SixPQUFPNUosQ0FBQyxFQUFFN0ksTUFBTTBLLE1BQU1vRCxLQUFLQyxJQUFJLEdBQUcwRSxPQUFPNUosQ0FBQyxFQUFFN0ksTUFBTXdLLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztjQUNoRjtBQUNBLHFCQUFPaUk7WUFDUjtVQUNEO1FBQ0Q7QUFDQSxlQUFPO01BQ1I7SUFDRDtFQUNEO0FBQ0EsUUFBTXFKLG9CQUFvQjtJQUN6QkMsYUFBYTtNQUNacFQsTUFBTTtNQUNOcVQsU0FBUyxDQUFDLFlBQVk7TUFDdEIvWSxPQUFPLENBQUM7TUFDUmdaLE1BQU07TUFDTkMsTUFBTTtNQUNOQyxjQUFjO0lBQ2Y7SUFDQUMsVUFBVTtNQUNUelQsTUFBTTtNQUNOcVQsU0FBUyxDQUFDLGtCQUFrQixRQUFRO01BQ3BDL1ksT0FBTyxDQUFDO01BQ1JnWixNQUFNO01BQ05DLE1BQU07TUFDTkMsY0FBYztJQUNmO0lBQ0FFLFVBQVU7TUFDVDFULE1BQU07TUFDTnFULFNBQVMsQ0FBQyxjQUFjLGdCQUFnQjtNQUN4Qy9ZLE9BQU8sQ0FBQztNQUNSZ1osTUFBTTtNQUNOQyxNQUFNO01BQ05DLGNBQWM7SUFDZjtJQUNBRyxRQUFRO01BQ1AzVCxNQUFNO01BQ05xVCxTQUFTLENBQUMsZUFBZTtNQUN6Qi9ZLE9BQU8sQ0FBQztNQUNSZ1osTUFBTTtNQUNOQyxNQUFNO01BQ05DLGNBQWM7SUFDZjtJQUNBSSxXQUFXO01BQ1Y1VCxNQUFNO01BQ05xVCxTQUFTLENBQUMsa0JBQWtCO01BQzVCL1ksT0FBTyxDQUFDO01BQ1JnWixNQUFNO01BQ05DLE1BQU07TUFDTkMsY0FBYztJQUNmO0VBQ0Q7QUFFQSxRQUFNSyxLQUFLO0FBQ1gsUUFBTUMsTUFBTTtBQUNaLFFBQU1DLE1BQU07QUFDWixRQUFNQyxNQUFNO0FBQ1osUUFBTUMsUUFBUTtBQUNkLFFBQU1DLE9BQU87QUFDYixRQUFNQyxTQUFTO0FBQ2YsUUFBTUMsS0FBSztBQUNYLFFBQU1DLE9BQU87QUFDYixRQUFNQyxNQUFNO0FBQ1osUUFBTUMsTUFBTTtFQUNaLE1BQU1DLGVBQWU7SUFDcEJDLGVBQWU5WixNQUFNO0FBQ3BCLFdBQUsrWixXQUFXLEdBQUcvWixJQUFJO0lBQ3hCO0lBQ0ErWixXQUFXQyxNQUFNQyxNQUFNdlAsT0FBTzNLLEtBQUs2SixXQUFXO0FBSTdDLFVBQUlxUSxNQUFNO0FBQ1QsWUFBSTVOLFFBQVE7QUFDWDROLGVBQUtDLE1BQU07UUFDWjtBQUNBLGFBQUtDLGdCQUFnQjtBQUNyQixhQUFLQyxVQUFVSCxLQUFLSTtBQUNwQixhQUFLdkksbUJBQW1CcEg7QUFDeEIsYUFBSzRQLGNBQWN2YSxPQUFPQSxJQUFJOEQsU0FBUyxJQUFJOUQsSUFBSXFILE1BQU0sQ0FBQyxJQUFJO0FBQzFELGFBQUttVCxpQkFBaUIsQ0FBQ2xlLFNBQVMsS0FBSytkLFNBQVMsS0FBSztBQUVuRCxhQUFLSSxhQUFhO0FBQ2xCLFlBQUksQ0FBQyxLQUFLRCxrQkFBa0IsS0FBS0UsYUFBYTtBQUM3QyxlQUFLQSxZQUFZQyxNQUFNNWMsVUFBVTtRQUNsQztBQUNBbWMsYUFBS3hmLE9BQU8sS0FBS2tnQixRQUFRO01BQzFCLE9BQU87QUFDTixhQUFLUixnQkFBZ0I7QUFFckIsYUFBS3JJLG1CQUFtQjtBQUN4QixhQUFLd0ksY0FBYztBQUNuQixhQUFLQyxpQkFBaUI7QUFDdEIsWUFBSSxDQUFDN04sUUFBUTtBQUNadU4saUJBQU83VCxLQUFLLE1BQU07QUFDbEI2VCxlQUFLelMsWUFBWTtBQUNqQixjQUFJekgsS0FBSztBQUNSa2EsaUJBQUt4ZixPQUFPMkwsS0FBSyxPQUFPLElBQUksQ0FBQztBQUM3QixnQkFBSXNFLE9BQU87QUFDVkEsb0JBQU0wTSxXQUFXd0QsYUFBYVgsTUFBTXZQLE1BQU1tUSxXQUFXO0FBQ3JEblEsc0JBQVFBLE1BQU1tUTtZQUNmLFdBQVdiLE1BQU07QUFDaEJBLG1CQUFLdmYsT0FBT3dmLElBQUk7WUFDakI7VUFDRCxXQUFXRCxRQUFRQSxLQUFLSyxZQUFZO0FBQ25DSixpQkFBS3hmLE9BQU8yTCxLQUFLLEtBQUssSUFBSSxDQUFDO0FBQzNCNFQsaUJBQUt2ZixPQUFPd2YsSUFBSTtVQUNqQjtRQUNEO0FBQ0EsYUFBS1UsV0FBV3ZVLEtBQUssTUFBTTtBQUMzQixhQUFLdVUsU0FBU25ULFlBQVk7QUFDMUIsY0FBTXNULE9BQU8xVSxLQUFLLEdBQUc7QUFDckIwVSxhQUFLM2IsT0FBTztBQUNaMmIsYUFBSzNELGlCQUFpQixTQUFTLEtBQUt6WSxLQUFLcWMsS0FBSyxJQUFJLENBQUM7QUFDbkRELGFBQUtyZ0IsT0FBTzJMLEtBQUt0QyxHQUFHakQsTUFBTUcsS0FBSyxJQUFJLENBQUM7QUFDcEM4WixhQUFLcGUsUUFBUW9ELFdBQVcsY0FBYztBQUN0QyxhQUFLNmEsU0FBU2xnQixPQUFPcWdCLElBQUk7QUFDekJiLGVBQU83VCxLQUFLc0csU0FBUyxPQUFPLE1BQU07QUFDbEN1TixhQUFLelMsWUFBWTtBQUNqQixZQUFJNkUsUUFBUTtBQUNYNE4sZUFBS0MsTUFBTTtRQUNaO0FBQ0FELGFBQUt4ZixPQUFPLEtBQUtrZ0IsUUFBUTtBQUN6QixZQUFJalEsT0FBTztBQUNWQSxnQkFBTTBNLFdBQVd3RCxhQUFhWCxNQUFNdlAsTUFBTW1RLFdBQVc7UUFDdEQsV0FBV2IsTUFBTTtBQUNoQkEsZUFBS3ZmLE9BQU93ZixJQUFJO1FBQ2pCO0FBQ0EsYUFBS2UsY0FBYztBQUNuQixhQUFLQyxZQUFZO0FBQ2pCLGFBQUtiLFVBQVU7TUFDaEI7QUFDQSxXQUFLYyxpQkFBaUJ0UjtBQUN0QixXQUFLb1EsT0FBT0E7QUFDWixXQUFLbUIsU0FBU3JYLEdBQUdoQjtBQUNqQixXQUFLbVgsT0FBT0E7QUFDWixXQUFLbEksa0JBQWtCLEtBQUtEO0FBQzVCLFdBQUtzSixnQkFBZ0IsS0FBS2I7QUFDMUIsV0FBS3RJLGdCQUFnQixLQUFLaUo7QUFDMUIsV0FBS2xKLGFBQWEsS0FBS3NJO0FBQ3ZCLFdBQUsvZixRQUFRb1M7QUFDYixXQUFLME8saUJBQWlCMU87QUFDdEIsV0FBSzJPLG9CQUFvQixLQUFLeEo7QUFDOUIsV0FBS3lKLGVBQWUsS0FBS2pCO0FBQ3pCLFdBQUtrQixrQkFBa0IsS0FBS2pCO0FBQzVCLFdBQUtrQixrQkFBa0IsS0FBS1A7QUFDNUIsVUFBSSxLQUFLZCxXQUFXLEtBQUtwSSxZQUFZO0FBQ3BDLGFBQUtvSSxRQUFRMWQsUUFBUSxLQUFLc1Y7TUFDM0I7QUFDQXRHLGNBQVFBLFFBQVE3SCxNQUFNLElBQUk7SUFDM0I7SUFDQTJXLGVBQWU7QUFDZCxXQUFLUSxjQUFjNVUsS0FBSyxNQUFNO0FBQzlCLFVBQUkwVSxPQUFPO0FBQ1gsVUFBSSxLQUFLaEosb0JBQW9CLEtBQUtBLGlCQUFpQmpPLFNBQVMsR0FBRztBQUM5RGlYLGVBQU8xVSxLQUFLLEdBQUc7QUFDZjBVLGFBQUszYixPQUFPO0FBQ1oyYixhQUFLM0QsaUJBQWlCLFNBQVMsS0FBS3BXLE9BQU9nYSxLQUFLLElBQUksQ0FBQztBQUNyREQsYUFBS3JnQixPQUFPMkwsS0FBS3RDLEdBQUdqRCxNQUFNRSxRQUFRLElBQUksQ0FBQztBQUN2QytaLGFBQUtwZSxRQUFRb0QsV0FBVyxpQkFBaUI7QUFDekMsYUFBS2tiLFlBQVl2Z0IsT0FBTzJMLEtBQUssS0FBSyxJQUFJLENBQUM7QUFDdkMsYUFBSzRVLFlBQVl2Z0IsT0FBT3FnQixJQUFJO01BQzdCO0FBQ0EsVUFBSSxDQUFDaFgsR0FBR3pCLG9CQUFvQixLQUFLeVAsZ0JBQWdCLEdBQUc7QUFDbkRnSixlQUFPMVUsS0FBSyxHQUFHO0FBQ2YwVSxhQUFLM2IsT0FBTztBQUNaMmIsYUFBSzNELGlCQUFpQixTQUFTLEtBQUt6WSxLQUFLcWMsS0FBSyxJQUFJLENBQUM7QUFDbkRELGFBQUtyZ0IsT0FBTzJMLEtBQUt0QyxHQUFHakQsTUFBTUMsUUFBUSxJQUFJLENBQUM7QUFDdkNnYSxhQUFLcGUsUUFBUW9ELFdBQVcsaUJBQWlCO0FBQ3pDLGFBQUtrYixZQUFZdmdCLE9BQU8yTCxLQUFLLEtBQUssSUFBSSxDQUFDO0FBQ3ZDLGFBQUs0VSxZQUFZdmdCLE9BQU9xZ0IsSUFBSTtBQUM1QixZQUFJLENBQUMxVyxpQkFBaUJOLEdBQUdkLGFBQWE7QUFDckMsZUFBS3lYLGNBQWNyVSxLQUFLLE1BQU07QUFDOUIwVSxpQkFBTzFVLEtBQUssR0FBRztBQUNmMFUsZUFBSzNiLE9BQU87QUFDWjJiLGVBQUszRCxpQkFBaUIsU0FBUyxLQUFLaFcsS0FBSzRaLEtBQUssSUFBSSxDQUFDO0FBQ25ERCxlQUFLcmdCLE9BQU8yTCxLQUFLdEMsR0FBR2pELE1BQU1NLE1BQU0sSUFBSSxDQUFDO0FBQ3JDMlosZUFBS3BlLFFBQVFvRCxXQUFXLGVBQWU7QUFDdkMsZUFBSzJhLFlBQVloZ0IsT0FBTzJMLEtBQUssS0FBSyxJQUFJLENBQUM7QUFDdkMsZUFBS3FVLFlBQVloZ0IsT0FBT3FnQixJQUFJO0FBQzVCQSxpQkFBTzFVLEtBQUssR0FBRztBQUNmMFUsZUFBSzNiLE9BQU87QUFDWjJiLGVBQUszRCxpQkFBaUIsU0FBUyxLQUFLL1YsR0FBRzJaLEtBQUssSUFBSSxDQUFDO0FBQ2pERCxlQUFLcmdCLE9BQU8yTCxLQUFLdEMsR0FBR2pELE1BQU1PLElBQUksSUFBSSxDQUFDO0FBQ25DMFosZUFBS3BlLFFBQVFvRCxXQUFXLGFBQWE7QUFDckMsZUFBSzJhLFlBQVloZ0IsT0FBTzJMLEtBQUssS0FBSyxJQUFJLENBQUM7QUFDdkMsZUFBS3FVLFlBQVloZ0IsT0FBT3FnQixJQUFJO0FBQzVCLGVBQUtFLFlBQVl2Z0IsT0FBTyxLQUFLZ2dCLFdBQVc7UUFDekM7TUFDRDtBQUNBLFdBQUtFLFdBQVd2VSxLQUFLLE1BQU07QUFDM0IsV0FBS3VVLFNBQVNuVCxZQUFZO0FBQzFCLFdBQUttVCxTQUFTbGdCLE9BQU8sS0FBS3VnQixXQUFXO0FBQ3JDLFdBQUtDLFlBQVk3VSxLQUFLLE1BQU07QUFDNUIsV0FBSzZVLFVBQVV6VCxZQUFZO0FBQzNCLFdBQUt5VCxVQUFVUCxNQUFNNWMsVUFBVTtBQUMvQmdkLGFBQU8xVSxLQUFLLEdBQUc7QUFDZjBVLFdBQUszYixPQUFPO0FBQ1oyYixXQUFLM0QsaUJBQWlCLFNBQVMsS0FBS2xXLFFBQVE4WixLQUFLLElBQUksQ0FBQztBQUN0REQsV0FBS3JnQixPQUFPMkwsS0FBS3RDLEdBQUdqRCxNQUFNSSxTQUFTLElBQUksQ0FBQztBQUN4QzZaLFdBQUtwZSxRQUFRb0QsV0FBVyxrQkFBa0I7QUFDMUMsV0FBS21iLFVBQVV4Z0IsT0FBTzJMLEtBQUssS0FBSyxJQUFJLENBQUM7QUFDckMsV0FBSzZVLFVBQVV4Z0IsT0FBT3FnQixJQUFJO0FBQzFCLFdBQUtILFNBQVNsZ0IsT0FBTyxLQUFLd2dCLFNBQVM7SUFDcEM7SUFDQVMsa0JBQWtCQyxtQkFBbUI7QUFDcEMsVUFDQyxLQUFLUixVQUNMM0Msa0JBQWtCLEtBQUsyQyxNQUFNLEtBQzdCM0Msa0JBQWtCLEtBQUsyQyxNQUFNLEVBQUV2QyxRQUMvQixDQUFDK0MsbUJBQ0E7QUFDRCxhQUFLUixTQUFTclgsR0FBR2hCO01BQ2xCO0FBQ0EsV0FBS3ZJLFFBQVFzUztBQUNiLFlBQU05UixPQUFPO0FBQ2JvYixpQkFBVyxNQUFNO0FBQ2hCcGIsYUFBSzZnQixXQUFXRCxpQkFBaUI7TUFDbEMsR0FBRzdYLEdBQUdsQixhQUFhO0lBQ3BCO0lBQ0FpWixXQUFXO0FBQ1YsWUFBTUMsT0FBTzFWLEtBQUssTUFBTTtBQUN4QjBWLFdBQUtDLFNBQVM7QUFDZEQsV0FBSzNFLGlCQUFpQixVQUFVLEtBQUs2RSxPQUFPakIsS0FBSyxJQUFJLENBQUM7QUFDdEQsV0FBS2UsT0FBT0E7QUFDWixZQUFNL2dCLE9BQU87QUFDYixZQUFNWixPQUFPaU0sS0FBSyxPQUFPO0FBQ3pCak0sV0FBS2tELE9BQU87QUFDWmxELFdBQUs4aEIsT0FBT25ZLEdBQUdqQjtBQUNmLFVBQUksQ0FBQ3VCLGVBQWU7QUFXbkJqSyxhQUFLZ2QsaUJBQWlCLFNBQVUrRSxXQUFVO0FBQ3pDLGdCQUFNbmMsTUFBTW1jLE1BQU1uYyxPQUFPO0FBQ3pCLGNBQ0NoRixLQUFLb2hCLE9BQ0xwaEIsS0FBS3FoQixZQUFZeEMsT0FDakIsQ0FBQzdlLEtBQUtzaEIsb0JBQ0x0YyxRQUFRb1osT0FBT3BaLFFBQVFxWixPQUFPclosUUFBUXNaLE9BQU90WixRQUFRdVosUUFDckQ7QUFDRHZlLGlCQUFLb2hCLE1BQU07VUFDWjtBQUNBLGNBQUlwaEIsS0FBS29oQixLQUFLO0FBQ2IsbUJBQU87VUFDUjtBQUNBLGNBQUlwYyxRQUFRMFosTUFBTTFaLFFBQVEyWixRQUFRM1osUUFBUXdaLFFBQVF4WixRQUFReVosUUFBUTtBQUVqRSxnQkFBSXplLEtBQUt1aEIsYUFBYSxHQUFHO0FBQ3hCLHFCQUFPdmhCLEtBQUt3aEIsV0FBV0wsS0FBSztZQUM3QjtVQUNELE9BQU87QUFDTixnQkFBSW5jLFFBQVFzWixPQUFPdGUsS0FBS3FoQixZQUFZeEMsT0FBTyxDQUFDN2UsS0FBS3loQixrQkFBa0IsR0FBRztBQUVyRXpoQixtQkFBSzBoQixPQUFPO0FBQ1o7WUFDRDtBQUdBMWhCLGlCQUFLMmdCLGtCQUFrQjNiLFFBQVFtWixNQUFNblosUUFBUTRaLE9BQU81WixRQUFRc1osR0FBRztVQUNoRTtBQUNBLGlCQUFPO1FBQ1IsQ0FBQztBQUNEbGYsYUFBS2dkLGlCQUFpQixXQUFZK0UsV0FBVTtBQUMzQyxnQkFBTW5jLE1BQU1tYyxNQUFNbmMsT0FBTztBQUN6QmhGLGVBQUtxaEIsVUFBVXJjO0FBQ2ZoRixlQUFLdWhCLFdBQVc7QUFFaEIsY0FBSSxDQUFDdmhCLEtBQUtvaEIsT0FBT3BjLFFBQVE2WixPQUFPLENBQUM3ZSxLQUFLc2hCLGlCQUFpQjtBQUV0RHRoQixpQkFBS29oQixNQUFNO1VBQ1osV0FDQ3BoQixLQUFLb2hCLE9BQ0xwYyxRQUFRNlosT0FDUixFQUFHN1osT0FBTyxNQUFNQSxPQUFPLE1BQVFBLE9BQU8sTUFBTUEsT0FBTyxNQUFPQSxRQUFRLE1BQ2pFO0FBSURoRixpQkFBS29oQixNQUFNO1VBQ1o7QUFDQSxjQUFJcGhCLEtBQUtvaEIsS0FBSztBQUNiLG1CQUFPO1VBQ1I7QUFFQSxjQUFJcGMsUUFBUXFaLEtBQUs7QUFDaEIsbUJBQU9yZSxLQUFLaWhCLE9BQU9FLEtBQUs7VUFDekI7QUFFQSxpQkFBT25jLFFBQVFzWixNQUFNaE8sUUFBUTZRLEtBQUssSUFBSTtRQUN2QyxDQUFDO0FBRUQvaEIsYUFBS2dkLGlCQUFpQixZQUFhK0UsV0FBVTtBQUM1Q25oQixlQUFLdWhCO0FBQ0wsaUJBQU92aEIsS0FBS3doQixXQUFXTCxLQUFLO1FBQzdCLENBQUM7QUFDRGxpQixVQUFFRyxJQUFJLEVBQUV3RCxHQUFHLFNBQVMsTUFBTTtBQUN6QnVYLHFCQUFXbmEsSUFBSTtRQUNoQixDQUFDO0FBS0RmLFVBQUVHLElBQUksRUFBRXdELEdBQ1B4RCxLQUFLdWlCLHVCQUF1QixVQUFhdmlCLEtBQUt3aUIsa0JBQWtCLHFCQUFxQixRQUNyRixLQUFLQyxTQUFTN0IsS0FBSyxJQUFJLENBQ3hCO0FBRUEsWUFBSTtBQUdIL2dCLFlBQUVHLElBQUksRUFBRXdELEdBQUcsb0JBQW9CLE1BQU07QUFDcEM1QyxpQkFBS3FoQixVQUFVeEM7QUFDZjdlLGlCQUFLc2hCLGtCQUFrQjtBQUN2QnRoQixpQkFBS29oQixNQUFNO1VBQ1osQ0FBQztBQUNEbmlCLFlBQUVHLElBQUksRUFBRXdELEdBQUcsa0JBQWtCLE1BQU07QUFDbEM1QyxpQkFBS3FoQixVQUFVeEM7QUFDZjdlLGlCQUFLc2hCLGtCQUFrQjtBQUN2QnRoQixpQkFBS29oQixNQUFNO1VBQ1osQ0FBQztBQUNEbmlCLFlBQUVHLElBQUksRUFBRXdELEdBQUcsYUFBYSxNQUFNO0FBQzdCNUMsaUJBQUtvaEIsTUFBTTtBQUNYcGhCLGlCQUFLMmdCLGtCQUFrQixLQUFLO1VBQzdCLENBQUM7UUFDRixRQUFRO1FBRVI7QUFDQTFoQixVQUFFRyxJQUFJLEVBQUV3RCxHQUFHLFFBQVEsTUFBTTtBQUN4QjVDLGVBQUtzaEIsa0JBQWtCO0FBQ3ZCdGhCLGVBQUtvaEIsTUFBTTtRQUNaLENBQUM7TUFDRjtBQUNBLFdBQUtoaUIsT0FBT0E7QUFDWixXQUFLRyxPQUFPOEwsS0FBSyxLQUFLO0FBQ3RCLFVBQUl5VyxPQUFPO0FBQ1gsVUFBSSxDQUFDelksZUFBZTtBQUNuQnlZLGVBQU96VyxLQUFLLFFBQVE7QUFDcEJ5VyxhQUFLMUYsaUJBQWlCLFNBQVMsTUFBTTtBQUNwQyxjQUFJcGMsS0FBSytoQixvQkFBb0IsQ0FBQyxHQUFHO0FBQ2hDL2hCLGlCQUFLNmdCLFdBQVcsT0FBTyxJQUFJO1VBQzVCO1FBQ0QsQ0FBQztBQUNEaUIsYUFBSzFGLGlCQUFpQixZQUFhdGMsT0FBTTtBQUN4QyxjQUFJRSxLQUFLK2hCLG9CQUFvQixDQUFDLEdBQUc7QUFDaEMvaEIsaUJBQUtpaEIsT0FBT25oQixDQUFDO1VBQ2Q7UUFDRCxDQUFDO0FBQ0RnaUIsYUFBSzFGLGlCQUFpQixVQUFVLE1BQU07QUFDckNwYyxlQUFLK2hCLG9CQUFvQixDQUFDO0FBQzFCL2hCLGVBQUtaLEtBQUs0aUIsTUFBTTtRQUNqQixDQUFDO0FBQ0RGLGFBQUsxRixpQkFBaUIsU0FBVStFLFdBQVU7QUFDekMsY0FBSUEsTUFBTW5jLFFBQVFzWixLQUFLO0FBQ3RCdGUsaUJBQUt5aEIsa0JBQWtCO0FBQ3ZCemhCLGlCQUFLWixLQUFLNGlCLE1BQU07QUFDaEI1Ryx1QkFBVyxNQUFNO0FBQ2hCcGIsbUJBQUs2Z0IsV0FBVyxJQUFJO1lBQ3JCLEdBQUc5WCxHQUFHbEIsYUFBYTtVQUNwQixXQUFXc1osTUFBTW5jLFFBQVFxWixLQUFLO0FBQzdCcmUsaUJBQUtpaEIsT0FBT0UsS0FBSztVQUNsQjtRQUNELENBQUM7QUFDRCxZQUFJLENBQUNwWSxHQUFHZixjQUFjO0FBQ3JCLGdCQUFNaWEsaUJBQWlCNVcsS0FBSyxRQUFRO0FBQ3BDLHFCQUFXckcsT0FBT3lZLG1CQUFtQjtBQUNwQyxnQkFBSUEsa0JBQWtCelksR0FBRyxFQUFFNFksTUFBTTtBQUNoQyxvQkFBTXNFLE1BQU03VyxLQUFLLFFBQVE7QUFDekI2VyxrQkFBSS9oQixRQUFRNkU7QUFDWixrQkFBSUEsUUFBUSxLQUFLb2IsUUFBUTtBQUN4QjhCLG9CQUFJQyxXQUFXO2NBQ2hCO0FBQ0FELGtCQUFJeGlCLE9BQU8yTCxLQUFLb1Msa0JBQWtCelksR0FBRyxFQUFFc0YsTUFBTSxJQUFJLENBQUM7QUFDbEQyWCw2QkFBZXZpQixPQUFPd2lCLEdBQUc7WUFDMUI7VUFDRDtBQUNBRCx5QkFBZTdGLGlCQUFpQixVQUFVLE1BQU07QUFDL0NwYyxpQkFBS29nQixTQUFTcGdCLEtBQUtpaUIsZUFBZS9VLFFBQVFsTixLQUFLaWlCLGVBQWVHLGFBQWEsRUFBRWppQjtBQUM3RUgsaUJBQUtaLEtBQUs0aUIsTUFBTTtBQUNoQmhpQixpQkFBSzZnQixXQUFXLE1BQU0sSUFBSTtVQUMzQixDQUFDO0FBQ0QsZUFBS29CLGlCQUFpQkE7UUFDdkI7TUFDRDtBQUNBLFdBQUtILE9BQU9BO0FBQ1osWUFBTU8sZUFBZUEsQ0FBQ0MsS0FBS0MsZ0JBQWdCO0FBQzFDLGNBQU1DLFFBQVE7QUFDZCxZQUFJLENBQUNBLFNBQVMsQ0FBQ0EsTUFBTTFnQixNQUFNO0FBQzFCLGlCQUFPeWdCO1FBQ1I7QUFDQSxlQUFPQyxNQUFNMWdCO01BQ2Q7QUFFQSxZQUFNMmdCLEtBQUtwWCxLQUFLLE9BQU87QUFDdkJvWCxTQUFHbmdCLE9BQU87QUFDVm1nQixTQUFHdGlCLFFBQVFraUIsYUFBYSxpQkFBaUJ0ZCxXQUFXLGFBQWEsQ0FBQztBQUNsRTBkLFNBQUdyRyxpQkFBaUIsU0FBUyxLQUFLNkUsT0FBT2pCLEtBQUssSUFBSSxDQUFDO0FBQ25ELFdBQUswQyxLQUFLRDtBQUNWLFlBQU1mLFNBQVNyVyxLQUFLLE9BQU87QUFDM0JxVyxhQUFPcGYsT0FBTztBQUNkb2YsYUFBT3ZoQixRQUFRa2lCLGFBQWEscUJBQXFCdGQsV0FBVyxpQkFBaUIsQ0FBQztBQUM5RTJjLGFBQU90RixpQkFBaUIsU0FBUyxLQUFLc0YsT0FBTzFCLEtBQUssSUFBSSxDQUFDO0FBQ3ZELFdBQUsyQyxlQUFlakI7QUFDcEIsWUFBTXhDLE9BQU83VCxLQUFLLE1BQU07QUFDeEI2VCxXQUFLelMsWUFBWTtBQUNqQnlTLFdBQUtTLE1BQU1pRCxXQUFXO0FBQ3RCMUQsV0FBS3hmLE9BQU9OLElBQUk7QUFJaEI4ZixXQUFLeGYsT0FBTzJMLEtBQUssS0FBVSxJQUFJLENBQUM7QUFDaEM2VCxXQUFLUyxNQUFNa0QsYUFBYTtBQUN4QixVQUFJZixNQUFNO0FBQ1Q1QyxhQUFLeGYsT0FBT29pQixJQUFJO01BQ2pCO0FBQ0EsVUFBSSxLQUFLRyxnQkFBZ0I7QUFDeEIvQyxhQUFLeGYsT0FBTyxLQUFLdWlCLGNBQWM7TUFDaEM7QUFDQSxVQUFJLENBQUM1WSxlQUFlO0FBQ25CNlYsYUFBS3hmLE9BQU8sS0FBS0gsSUFBSTtNQUN0QjtBQUNBMmYsV0FBS3hmLE9BQU8raUIsRUFBRTtBQUNkdkQsV0FBS3hmLE9BQU9naUIsTUFBTTtBQUNsQlgsV0FBS3JoQixPQUFPd2YsSUFBSTtBQUNoQjZCLFdBQUtwQixNQUFNNWMsVUFBVTtBQUNyQixXQUFLbWMsS0FBS3hmLE9BQU9xaEIsSUFBSTtJQUN0QjtJQUNBaGUsUUFBUW9lLE9BQU87QUFDZCxVQUFJLEtBQUsvQixpQkFBaUIsQ0FBQzFPLFlBQVksS0FBS3VPLE1BQU07QUFDakQsWUFBSUgsZUFBZSxLQUFLRyxNQUFNLE1BQU0sS0FBS0MsTUFBTSxJQUFJO01BQ3BEO0FBQ0EsVUFBSSxDQUFDdE8sZ0JBQWdCLENBQUNGLFVBQVU7QUFDL0IsaUJBQUFvUyxNQUFBLEdBQUFDLFlBQXFCcFMsU0FBQW1TLE1BQUFDLFVBQUFqYSxRQUFBZ2EsT0FBUztBQUE5QixnQkFBV3RJLFNBQUF1SSxVQUFBRCxHQUFBO0FBQ1YsY0FBSXRJLE9BQU9oYixVQUFVb1MsV0FBVztBQUMvQnVLLDBCQUFjO0FBQ2Q7VUFDRDtRQUNEO01BQ0Q7QUFDQSxVQUFJLENBQUMsS0FBSzRFLE1BQU07QUFDZixhQUFLRCxTQUFTO01BQ2Y7QUFDQSxVQUFJLEtBQUtnQixNQUFNO0FBQ2QsYUFBS0EsS0FBS25DLE1BQU01YyxVQUFVO01BQzNCO0FBQ0EsVUFBSSxLQUFLa2YsZ0JBQWdCO0FBQ3hCLGFBQUtBLGVBQWV0QyxNQUFNNWMsVUFBVTtNQUNyQztBQUNBLFdBQUtpVSxrQkFBa0IsS0FBS3VKO0FBQzVCLFdBQUtGLGdCQUFnQixLQUFLSTtBQUMxQixXQUFLdkosZ0JBQWdCLEtBQUt3SjtBQUMxQixXQUFLekosYUFBYSxLQUFLdUo7QUFDdkIsV0FBS2poQixLQUFLdVosTUFBTSxLQUFLdUgsZ0JBQWdCdFgsR0FBRzNCLFlBQVkyQixHQUFHMUI7QUFDdkQsV0FBS2pJLEtBQUtlLFFBQVEsS0FBSzZXLG1CQUFtQixLQUFLQyxlQUFlLE9BQU8sS0FBQSxJQUFBOVgsT0FBUyxLQUFLOFgsVUFBVTtBQUM3RixXQUFLK0wsZ0JBQWdCLEtBQUt4akI7QUFDMUIsV0FBS3FhLFlBQVksS0FBSzdDO0FBQ3RCLFdBQUs2QixjQUFjLEtBQUt3SDtBQUN4QixXQUFLN2dCLFFBQVEsS0FBS0EsVUFBVW9TLFlBQVlDLE9BQU9DO0FBQy9DLFdBQUtrSixnQkFBZ0I7UUFDcEJDLE9BQU8sS0FBS2pFLGdCQUFnQmxPO1FBQzVCb1MsS0FBSyxLQUFLbEUsZ0JBQWdCbE87TUFDM0I7QUFDQSxXQUFLZ1MsWUFBWTtBQUVqQixVQUFJLEtBQUt1RSxTQUFTO0FBQ2pCLGFBQUtBLFFBQVFNLE1BQU01YyxVQUFVO01BQzlCO0FBQ0EsV0FBSzZjLFNBQVNELE1BQU01YyxVQUFVO0FBQzlCLFdBQUtnZSxLQUFLcEIsTUFBTTVjLFVBQVU7QUFDMUIsV0FBSzJmLEdBQUc1TyxXQUFXO0FBRW5CLFlBQU14UCxTQUFTZ00sUUFBUTZRLEtBQUs7QUFDNUIsV0FBSy9oQixLQUFLNGlCLE1BQU07QUFDaEIsV0FBSzVpQixLQUFLNmpCLFdBQVc7QUFDckIxRyxzQkFBZ0I7QUFDaEIsYUFBT2pZO0lBQ1I7SUFDQXNaLEtBQUt1RCxPQUFPZixRQUFRNkMsVUFBVTtBQUM3QixZQUFNM2UsU0FBUyxLQUFLdkIsUUFBUW9lLEtBQUs7QUFDakMsWUFBTXZZLElBQUksS0FBSzJYO0FBQ2YsVUFBSTNYLEVBQUVFLFdBQVcsR0FBRztBQUNuQixlQUFPeEU7TUFDUjtBQUNBLFdBQUtsRixLQUFLNmpCLFdBQVcsQ0FBQyxDQUFDQTtBQUN2QixXQUFLN0MsU0FBU0E7QUFDZCxXQUFLUyxXQUFXLE9BQU8sSUFBSTtBQUMzQixhQUFPdmM7SUFDUjtJQUNBWCxLQUFLd2QsT0FBTztBQUNYLGFBQU8sS0FBS3ZELEtBQUt1RCxPQUFPLEtBQUtmLFVBQVUzQyxrQkFBa0IsS0FBSzJDLE1BQU0sRUFBRXZDLE9BQU85VSxHQUFHaEIsY0FBYyxLQUFLcVksTUFBTTtJQUMxRztJQUNBaGEsS0FBSythLE9BQU87QUFDWCxhQUFPLEtBQUt2RCxLQUFLdUQsT0FBTyxVQUFVLElBQUk7SUFDdkM7SUFDQTlhLEdBQUc4YSxPQUFPO0FBQ1QsYUFBTyxLQUFLdkQsS0FBS3VELE9BQU8sV0FBVztJQUNwQztJQUNBTyxTQUFTO0FBQ1IsVUFBSSxLQUFLdEMsaUJBQWlCLENBQUMxTyxVQUFVO0FBQ3BDLGFBQUt3UyxhQUFhO0FBQ2xCO01BQ0Q7QUFFQSxXQUFLekksV0FBVztBQUNoQixXQUFLc0csS0FBS3BCLE1BQU01YyxVQUFVO0FBQzFCLFVBQUksS0FBS3NjLFNBQVM7QUFDakIsYUFBS0EsUUFBUU0sTUFBTTVjLFVBQVU7TUFDOUI7QUFDQSxXQUFLNmMsU0FBU0QsTUFBTTVjLFVBQVU7QUFDOUIsV0FBS3ZELFFBQVEsS0FBS3dqQjtBQUNsQixXQUFLaE0sa0JBQWtCLEtBQUt1SjtBQUM1QixXQUFLdEosYUFBYSxLQUFLdUo7QUFDdkIsV0FBS0gsZ0JBQWdCLEtBQUtJO0FBQzFCLFdBQUt2SixnQkFBZ0IsS0FBS3dKO0FBQzFCLFVBQUksS0FBS3JCLFNBQVM7QUFDakIsYUFBS0EsUUFBUTFkLFFBQVEsS0FBS3NWLGNBQWMsS0FBS0EsV0FBV25PLFNBQVMsSUFBSSxLQUFLbU8sYUFBYTtNQUN4RjtBQUNBLFVBQUksS0FBS3pYLFVBQVVvUyxXQUFXO0FBQzdCLFlBQUksS0FBS3lOLFNBQVM7QUFDakIsZUFBS0EsUUFBUU0sTUFBTXdELGtCQUFrQjtRQUN0QztNQUNELFdBQVcsQ0FBQ3pTLFVBQVU7QUFDckIsWUFBSTtBQUNILGVBQUsyTyxRQUFRTSxNQUFNd0Qsa0JBQWtCcGEsR0FBR3JCO1FBQ3pDLFFBQVE7UUFFUjtNQUNEO0FBQ0E2VSxzQkFBZ0I7SUFDakI7SUFDQTJHLGVBQWU7QUFDZCxVQUFJLENBQUN2UixRQUFRO0FBQ1osY0FBTXlSLE9BQU8sS0FBS2xFLEtBQUtZO0FBQ3ZCLFlBQUlzRCxNQUFNO0FBQ1RBLGVBQUtwZCxPQUFPO1FBQ2I7TUFDRDtBQUNBLFVBQUksS0FBS2taLFFBQVEsS0FBS0EsS0FBSzdDLFlBQVk7QUFDdEMsYUFBSzZDLEtBQUtsWixPQUFPO01BQ2xCO0FBQ0EsZUFBU3dFLElBQUksR0FBR0EsSUFBSW1HLFFBQVE3SCxRQUFRMEIsS0FBSztBQUN4QyxZQUFJbUcsUUFBUW5HLENBQUMsTUFBTSxNQUFNO0FBQ3hCbUcsa0JBQVFzTSxPQUFPelMsR0FBRyxDQUFDO0FBQ25CO1FBQ0Q7TUFDRDtBQUNBK1Isc0JBQWdCO0lBQ2pCO0lBQ0E4RyxTQUFTbEMsT0FBTztBQUNmLFdBQUttQyxTQUFTdGQsT0FBTztBQUNyQixXQUFLc2QsV0FBVztBQUNoQixXQUFLdE0sa0JBQWtCLEtBQUtEO0FBQzVCLFdBQUtFLGFBQWEsS0FBS3NJO0FBQ3ZCLFdBQUtjLGdCQUFnQixLQUFLYjtBQUMxQixXQUFLdEksZ0JBQWdCLEtBQUtpSjtBQUMxQixXQUFLSSxvQkFBb0IsS0FBS3hKO0FBQzlCLFdBQUt5SixlQUFlLEtBQUtqQjtBQUN6QixXQUFLa0Isa0JBQWtCLEtBQUtqQjtBQUM1QixXQUFLa0Isa0JBQWtCLEtBQUtQO0FBQzVCLFdBQUszZ0IsUUFBUW9TO0FBQ2IsVUFBSSxDQUFDLEtBQUtvRixtQkFBbUIsS0FBS0EsZ0JBQWdCbE8sV0FBVyxHQUFHO0FBRS9ELGFBQUtvYSxhQUFhO01BQ25CLE9BQU87QUFFTixhQUFLN0QsUUFBUUMsV0FBV3RaLE9BQU87QUFDL0IsYUFBS3FaLFFBQVEzZixPQUFPMkwsS0FBSyxLQUFLMkwsaUJBQWlCLElBQUksQ0FBQztBQUNwRCxhQUFLcUksUUFBUWpiLE9BQU93SSxhQUFBLEdBQUF6TixPQUFnQjRKLEdBQUdtQyxvQkFBa0IsR0FBQSxFQUFBL0wsT0FBSSxLQUFLNlgsZUFBZSxDQUFFO0FBQ25GLGFBQUtxSSxRQUFRMWQsUUFBUSxLQUFLc1YsY0FBYztBQUN4QyxhQUFLb0ksUUFBUTVTLFlBQVksS0FBSzRULGdCQUFnQixLQUFLO0FBQ25ELGFBQUtoQixRQUFRTSxNQUFNd0Qsa0JBQWtCO0FBQ3JDLFlBQUksS0FBS3pELGFBQWE7QUFDckIsZUFBS0EsWUFBWUMsTUFBTTVjLFVBQVUsS0FBS3NkLGdCQUFnQixLQUFLO1FBQzVEO0FBQ0E5RCx3QkFBZ0I7TUFDakI7QUFDQSxhQUFPak0sUUFBUTZRLEtBQUs7SUFDckI7SUFDQTFHLGFBQWE7QUFDWixVQUFJLEtBQUtxSCxNQUFNO0FBQ2QsYUFBS0EsS0FBS25DLE1BQU01YyxVQUFVO01BQzNCO0FBQ0EsVUFBSSxLQUFLa2YsZ0JBQWdCO0FBQ3hCLGFBQUtBLGVBQWV0QyxNQUFNNWMsVUFBVTtNQUNyQztBQUNBLFdBQUtzWCxZQUFZO0lBQ2xCO0lBQ0E0QixZQUFZc0gsV0FBVztBQUN0QixXQUFLQyxjQUFjO0FBQ25CLFlBQU1yakIsUUFBUSxLQUFLZixLQUFLZSxNQUFNNGEsTUFBTSxHQUFHO0FBQ3ZDLFVBQUkvVixNQUFNO0FBQ1YsVUFBSTdFLE1BQU0ySSxTQUFTLEdBQUc7QUFDckIsU0FBQSxFQUFHOUQsR0FBRyxJQUFJN0U7TUFDWDtBQUNBLFVBQUl5SSxJQUFJekksTUFBTSxDQUFDLEVBQUVDLFFBQVEsTUFBTSxHQUFHLEVBQUV5SSxLQUFLO0FBQ3pDLFVBQUlFLEdBQUd4QixxQkFBcUI7QUFDM0JxQixZQUFJOEQsV0FBVzlELENBQUM7TUFDakI7QUFDQSxXQUFLaVIsWUFBWWpSO0FBQ2pCQSxVQUFJK0UsaUJBQWlCL0UsR0FBR0csR0FBR1YsU0FBUztBQUNwQyxVQUFJTyxFQUFFRSxXQUFXLEdBQUc7QUFDbkIsYUFBSzRZLE9BQU87QUFDWixlQUFPO01BQ1I7QUFDQSxVQUNDLENBQUM2QixjQUNDOWQsS0FBS2lCLHNCQUFzQixNQUFNa0MsTUFBTW5ELEtBQUtzQixXQUFhZ0MsR0FBR3RCLGFBQWFzQixHQUFHdEIsVUFBVVgsS0FBSzhCLENBQUMsSUFDN0Y7QUFDRCxhQUFLOFksT0FBTztBQUNaLGVBQU87TUFDUjtBQUNBLFdBQUsxSyxrQkFBa0JwTztBQUN2QixXQUFLcU8sYUFBYWpTO0FBQ2xCLFdBQUtxYixnQkFBZ0IsS0FBS3hIO0FBQzFCLGFBQU87SUFDUjtJQUNBb0ksT0FBT0UsT0FBTztBQUdiLFdBQUs5SyxXQUFXbkcsUUFBUWlSLEtBQUssTUFBTTtBQUNuQyxZQUFNN2MsU0FBU2dNLFFBQVE2USxLQUFLO0FBQzVCLFVBQUksS0FBS2xGLFlBQVksR0FBRztBQUN2QixjQUFNL0QsWUFBWSxDQUFDLElBQUk7QUFDdkIsY0FBTXVMLFdBQVcsS0FBS3pNO0FBQ3RCMEMscUJBQWF4QixXQUFZeUQsY0FBYTtBQUNyQyxjQUFJQSxTQUFTLENBQUMsRUFBRXBDLEtBQUs7QUFDcEJtQixvQkFBUWlCLFNBQVMsQ0FBQyxDQUFDO1VBQ3BCLFdBQVdBLFNBQVMsQ0FBQyxFQUFFTSxZQUFZLElBQUksR0FBRztBQUN6Q04scUJBQVMsQ0FBQyxFQUFFTyxPQUNYUCxTQUFTLENBQUMsRUFBRTNFLG9CQUFvQnlNLFdBQzdCLE9BQ0ExZSxXQUFXLHlCQUF5QjBlLFFBQVEsQ0FDaEQ7VUFDRDtRQUNELENBQUM7TUFDRjtBQUNBLGFBQU9uZjtJQUNSO0lBQ0FmLFFBQVE7QUFDUCxVQUFJLENBQUMsS0FBSzhiLFNBQVM7QUFFbEIsYUFBS0EsVUFBVWhVLEtBQUssR0FBRztBQUN2QixhQUFLZ1UsUUFBUTNmLE9BQU8yTCxLQUFLLE9BQU8sSUFBSSxDQUFDO0FBQ3JDLGFBQUtnVSxRQUFRTSxNQUFNNWMsVUFBVTtBQUM3QixhQUFLbWMsS0FBS1csYUFBYSxLQUFLUixTQUFTLEtBQUtILEtBQUtJLFdBQVdRLFdBQVc7TUFDdEU7QUFDQSxXQUFLVCxRQUFRQyxXQUFXdFosT0FBTztBQUMvQixXQUFLcVosUUFBUTNmLE9BQU8yTCxLQUFLLEtBQUsyTCxpQkFBaUIsSUFBSSxDQUFDO0FBQ3BELFdBQUtxSSxRQUFRamIsT0FBT3dJLGFBQUEsR0FBQXpOLE9BQWdCNEosR0FBR21DLG9CQUFrQixHQUFBLEVBQUEvTCxPQUFJLEtBQUs2WCxlQUFlLENBQUU7QUFDbkYsV0FBS3FJLFFBQVE1UyxZQUFZLEtBQUs0VCxnQkFBZ0IsS0FBSztBQUNuRCxXQUFLRSxvQkFBb0IsS0FBS3ZKO0FBQzlCLFdBQUt3SixlQUFlLEtBQUt2SjtBQUN6QixXQUFLd0osa0JBQWtCLEtBQUtKO0FBQzVCLFdBQUtLLGtCQUFrQixLQUFLeEo7QUFFNUIsV0FBS3VELFdBQVc7QUFDaEIsV0FBS3NHLEtBQUtwQixNQUFNNWMsVUFBVTtBQUMxQixXQUFLc2MsUUFBUTFkLFFBQVEsS0FBS3NWLGNBQWM7QUFDeEMsV0FBS29JLFFBQVFNLE1BQU01YyxVQUFVO0FBQzdCLFVBQUksS0FBS3FjLGVBQWU7QUFDdkIsWUFBSTFPLFlBQVksS0FBS3VPLE1BQU07QUFDMUIsY0FBSUgsZUFBZSxLQUFLRyxNQUFNLE1BQU0sS0FBS0MsTUFBTSxJQUFJO1FBQ3BEO0FBQ0EsYUFBS0UsZ0JBQWdCO0FBQ3JCLGFBQUtRLFNBQVM1WixPQUFPO0FBQ3JCLGFBQUt5WixhQUFhO0FBQ2xCLGFBQUtQLEtBQUt4ZixPQUFPLEtBQUtrZ0IsUUFBUTtNQUMvQjtBQUNBLFVBQUksQ0FBQyxLQUFLMEQsVUFBVTtBQUVuQixjQUFNcEUsT0FBTzdULEtBQUssTUFBTTtBQUN4QixjQUFNMFUsT0FBTzFVLEtBQUssR0FBRztBQUNyQjBVLGFBQUszYixPQUFPO0FBQ1oyYixhQUFLM0QsaUJBQWlCLFNBQVMsS0FBS2lILFNBQVNyRCxLQUFLLElBQUksQ0FBQztBQUN2REQsYUFBS3JnQixPQUFPMkwsS0FBS3RDLEdBQUdqRCxNQUFNSyxNQUFNLElBQUksQ0FBQztBQUNyQzRaLGFBQUtwZSxRQUFRb0QsV0FBVyxlQUFlO0FBQ3ZDbWEsYUFBS3hmLE9BQU8yTCxLQUFLLEtBQUssSUFBSSxDQUFDO0FBQzNCNlQsYUFBS3hmLE9BQU9xZ0IsSUFBSTtBQUNoQixhQUFLRSxZQUFZdmdCLE9BQU93ZixJQUFJO0FBQzVCLGFBQUtvRSxXQUFXcEU7QUFDaEIsWUFBSSxDQUFDeE8sVUFBVTtBQUNkLGNBQUk7QUFDSCxpQkFBSzJPLFFBQVFNLE1BQU13RCxrQkFBa0JwYSxHQUFHckI7VUFDekMsUUFBUTtVQUVSO1FBQ0Q7TUFDRDtBQUNBLFVBQUksS0FBS2dZLGFBQWE7QUFDckIsYUFBS0EsWUFBWUMsTUFBTTVjLFVBQVUsS0FBSzBkLGtCQUFrQixLQUFLO01BQzlEO0FBQ0EsV0FBS2IsU0FBU0QsTUFBTTVjLFVBQVU7QUFDOUIsV0FBS3ZELFFBQVF1UztBQUNid0ssc0JBQWdCO0lBQ2pCO0lBQ0FMLFNBQVM7QUFFUixVQUNFLEtBQUtsRixvQkFBb0IsS0FBS0QscUJBQzdCLEtBQUtFLGVBQWUsS0FBS3NJLGVBQ3hCLEtBQUt0SSxlQUFlLFFBQVEsS0FBS3NJLFlBQVl6VyxXQUFXLE1BQzFEckQsS0FBS2lCLHNCQUFzQixNQUFNLEtBQUtzUSxvQkFBb0J2UixLQUFLc0IsV0FDL0RnQyxHQUFHdEIsYUFBYXNCLEdBQUd0QixVQUFVWCxLQUFLLEtBQUtrUSxlQUFlLEdBQ3REO0FBQ0QsYUFBSzBLLE9BQU87QUFDWjtNQUNEO0FBQ0EsV0FBS25lLE1BQU07QUFDWCxVQUFJLENBQUNxTixnQkFBZ0IsQ0FBQ0YsVUFBVTtBQUMvQixjQUFNMVEsT0FBTztBQUNiMlQscUJBQ0VDLGFBQVk7QUFDWnFDLHlCQUFlckMsU0FBUzVULElBQUk7UUFDN0IsR0FDQzBiLFNBQVE7QUFDUnhkLGFBQUdnRSxPQUFPd1osS0FBSztZQUFDclosS0FBSztVQUFRLENBQUM7UUFDL0IsQ0FDRDtNQUNEO0lBQ0Q7SUFDQTJELE9BQU9tYixPQUFPO0FBR2IsV0FBS3pnQixTQUFTd1AsUUFBUWlSLEtBQUssTUFBTSxDQUFDO0FBQ2xDLGFBQU83USxRQUFRNlEsS0FBSztJQUNyQjtJQUNBemdCLFNBQVMyVixVQUFVO0FBQ2xCLFVBQUksS0FBSytJLGVBQWU7QUFFdkIsYUFBS3NDLE9BQU87QUFDWjtNQUNEO0FBQ0EsVUFBSSxDQUFDOVEsZ0JBQWdCLENBQUNGLFVBQVU7QUFDL0IsaUJBQUFnVCxNQUFBLEdBQUFDLFlBQXFCaFQsU0FBQStTLE1BQUFDLFVBQUE3YSxRQUFBNGEsT0FBUztBQUE5QixnQkFBV2xKLFNBQUFtSixVQUFBRCxHQUFBO0FBQ1YsY0FBSWxKLE9BQU9oYixVQUFVb1MsV0FBVztBQUMvQnVLLDBCQUFjO0FBQ2Q7VUFDRDtRQUNEO01BQ0Q7QUFDQSxVQUFJdkwsY0FBYztBQUNqQixhQUFLeU8sUUFBUTFkLFFBQVE7QUFDckIsYUFBSzBkLFFBQVFNLE1BQU1pRSxXQUFXO0FBQzlCLFlBQUk7QUFDSCxlQUFLdkUsUUFBUU0sTUFBTXdELGtCQUFrQnBhLEdBQUdyQjtRQUN6QyxRQUFRO1FBRVI7QUFDQSxhQUFLc2IsZ0JBQWdCLEtBQUt4akI7QUFDMUIsYUFBS0EsUUFBUXdTO0FBQ2IsYUFBS2lPLFlBQVlOLE1BQU01YyxVQUFVO0FBQ2pDLGFBQUttZCxVQUFVUCxNQUFNNWMsVUFBVTtBQUMvQndaLHdCQUFnQjtNQUNqQixXQUFXN0wsVUFBVTtBQUVwQixhQUFLd1MsYUFBYTtNQUNuQixPQUFPO0FBQ04sYUFBS0YsZ0JBQWdCLEtBQUt4akI7QUFDMUIsYUFBS0EsUUFBUXdTO0FBQ2IsYUFBS3FFLFdBQVdBLFlBQVl0TixHQUFHbkI7QUFDL0IsY0FBTTVILE9BQU87QUFDYjJULHFCQUNFQyxhQUFZO0FBQ1pxQyx5QkFBZXJDLFNBQVM1VCxJQUFJO1FBQzdCLEdBQ0MwYixTQUFRO0FBQ1IxYixlQUFLUixRQUFRUSxLQUFLZ2pCO0FBQ2xCOWtCLGFBQUdnRSxPQUFPd1osS0FBSztZQUFDclosS0FBSztVQUFRLENBQUM7UUFDL0IsQ0FDRDtNQUNEO0lBQ0Q7SUFDQTZELFFBQVFpYixPQUFPO0FBRWQsV0FBSzlCLFFBQVExZCxRQUFRLEtBQUtzVixjQUFjO0FBQ3hDLFdBQUtvSSxRQUFRTSxNQUFNa0UsaUJBQWlCO0FBQ3BDLFdBQUtya0IsUUFBUSxLQUFLd2pCO0FBQ2xCLFVBQUksS0FBS3hqQixVQUFVb1MsV0FBVztBQUM3QixhQUFLeU4sUUFBUU0sTUFBTXdELGtCQUFrQjtNQUN0QyxPQUFPO0FBQ04sWUFBSTtBQUNILGVBQUs5RCxRQUFRTSxNQUFNd0Qsa0JBQWtCcGEsR0FBR3JCO1FBQ3pDLFFBQVE7UUFFUjtNQUNEO0FBQ0EsV0FBS3VZLFlBQVlOLE1BQU01YyxVQUFVO0FBQ2pDLFdBQUttZCxVQUFVUCxNQUFNNWMsVUFBVTtBQUMvQndaLHNCQUFnQjtBQUNoQixhQUFPak0sUUFBUTZRLEtBQUs7SUFDckI7O0lBRUEyQyxhQUFhQyxZQUFZO0FBQ3hCLFVBQUksQ0FBQyxLQUFLOUIsZ0JBQWdCO0FBQ3pCO01BQ0Q7QUFDQSxlQUFTelgsSUFBSSxHQUFHQSxJQUFJLEtBQUt5WCxlQUFlL1UsUUFBUXBFLFFBQVEwQixLQUFLO0FBQzVELGFBQUt5WCxlQUFlL1UsUUFBUTFDLENBQUMsRUFBRTJYLFdBQVcsS0FBS0YsZUFBZS9VLFFBQVExQyxDQUFDLEVBQUVySyxVQUFVNGpCO01BQ3BGO0lBQ0Q7SUFDQVAsZ0JBQWdCO0FBQ2YsVUFBSTVhLElBQUksS0FBS3hKLEtBQUtlLFNBQVM7QUFDM0J5SSxVQUFJQSxFQUFFeEksUUFBUSxZQUFZLEVBQUU7QUFDNUIsWUFBTXlMLEtBQUssSUFBSWpDLE9BQUEsS0FBQXpLLE9BQVk0SixHQUFHb0MsaUJBQWUsSUFBQSxDQUFJO0FBQ2pELFVBQUlVLEdBQUcvRSxLQUFLOEIsQ0FBQyxHQUFHO0FBQ2ZBLFlBQUlBLEVBQUV5RCxNQUFNb0QsS0FBS0MsSUFBSSxHQUFHOUcsRUFBRXVELFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFL0wsUUFBUSxZQUFZLEVBQUU7TUFDcEU7QUFDQXdJLFVBQUlBLEVBQUV4SSxRQUFRLFdBQVcsRUFBRTtBQUMzQixVQUFJMkksR0FBR3hCLHFCQUFxQjtBQUMzQnFCLFlBQUk4RCxXQUFXOUQsQ0FBQztNQUNqQjtBQUdBLFVBQUksS0FBS3hKLEtBQUtlLFVBQVUsUUFBUSxLQUFLZixLQUFLZSxVQUFVeUksR0FBRztBQUN0RCxhQUFLeEosS0FBS2UsUUFBUXlJO01BQ25CO0lBQ0Q7SUFDQW9iLFNBQVN2ZixLQUFLd2YsYUFBYTdELFFBQVFyRCxVQUFVbUgsVUFBVTtBQUN0RCxVQUFJQyxLQUFLRjtBQUNULFlBQU1ua0IsSUFBSXNnQjtBQUNWLFlBQU14WCxJQUFJbVU7QUFDVixZQUFNcUgsSUFBSUY7QUFDVixZQUFNbGtCLE9BQU87QUFDYixZQUFNaVYsT0FBT0EsTUFBTTtBQUNsQmtQLFdBQUdFO0FBQ0gsWUFBSUYsR0FBR0UsY0FBY0YsR0FBR0csVUFBVTtBQUNqQyxjQUFJSCxHQUFHbkgsUUFBUTtBQUNkbUgsZUFBR0ksVUFBVXZILFNBQVM7VUFDdkI7QUFDQSxjQUFJbUgsR0FBR2pILFlBQVk7QUFDbEJpSCxlQUFHSSxVQUFVckgsYUFBYWlILEdBQUdqSDtVQUM5QjtBQUNBLGNBQUksQ0FBQ2lILEdBQUdLLGFBQWEsQ0FBQy9HLGtCQUFrQjBHLEdBQUdKLFVBQVUsRUFBRW5mLE1BQU13ZixDQUFDLEdBQUc7QUFDaEUzRyw4QkFBa0IwRyxHQUFHSixVQUFVLEVBQUVuZixNQUFNd2YsQ0FBQyxJQUFJRCxHQUFHSTtVQUNoRDtBQUNBdmtCLGVBQUtaLEtBQUs2akIsV0FBVztBQUNyQixjQUFJLENBQUNrQixHQUFHTSxXQUFXO0FBQ2xCemtCLGlCQUFLc2IsZ0JBQWdCNkksR0FBR0ksV0FBV0osR0FBR3JHLGNBQWNsVixHQUFHdWIsR0FBR0osVUFBVTtVQUNyRTtBQUNBLGNBQUlJLE9BQU9ua0IsS0FBS2lrQixhQUFhO0FBQzVCamtCLGlCQUFLaWtCLGNBQWM7VUFDcEI7QUFDQUUsZUFBSztRQUNOO01BQ0Q7QUFDQWxsQixRQUFFeWxCLFFBQVFqZ0IsS0FBTXdWLFVBQVM7QUFDeEIsY0FBTTdGLFNBQVN0VSxFQUFFK2MsUUFBUTVDLE1BQU1tSyxDQUFDO0FBQ2hDLFlBQUloUSxVQUFVQSxPQUFPdEwsU0FBUyxHQUFHO0FBQ2hDcWIsYUFBR0ksWUFBWUosR0FBR0ksY0FBYyxPQUFPblEsU0FBUyxDQUFDLEdBQUcrUCxHQUFHSSxXQUFXLElBQUEsR0FBR3pmLG1CQUFBNmYsZUFBY3ZRLE1BQU0sQ0FBQztBQUMxRixjQUFJQSxPQUFPNEksUUFBUTtBQUNsQm1ILGVBQUduSCxTQUFTO1VBQ2I7QUFDQSxjQUFJNUksT0FBTzhJLFlBQVk7QUFDdEJpSCxlQUFHakgsYUFBYTlJLE9BQU84STtVQUN4QjtRQUNEO0FBQ0FqSSxhQUFLO01BQ04sQ0FBQyxFQUFFbEIsS0FBTW1HLFNBQVE7QUFDaEIsWUFBSSxDQUFDQSxLQUFLO0FBQ1Q3USwwQkFBZ0I7UUFDakI7QUFDQThhLFdBQUdLLFlBQVk7QUFDZnZQLGFBQUs7TUFDTixDQUFDO0lBQ0Y7SUFDQWdQLGNBQWM7SUFDZHBELFdBQVdELG1CQUFtQmdFLE9BQU87QUFFcEN6SyxpQkFBVyxJQUFJO0FBRWYsV0FBS3FKLGNBQWM7QUFDbkIsVUFBSTVhLElBQUksS0FBS3hKLEtBQUtlO0FBRWxCLFlBQU0wa0IsT0FBT2pjLEVBQUV1RCxRQUFRLEdBQUc7QUFDMUIsVUFBSTBZLFFBQVEsR0FBRztBQUNkLGFBQUs1TixhQUFhck8sRUFBRXlELE1BQU1vRCxLQUFLQyxJQUFJLEdBQUdtVixPQUFPLENBQUMsQ0FBQztBQUMvQ2pjLFlBQUlBLEVBQUV5RCxNQUFNLEdBQUdvRCxLQUFLQyxJQUFJLEdBQUdtVixJQUFJLENBQUM7TUFDakMsT0FBTztBQUNOLGFBQUs1TixhQUFhO01BQ25CO0FBQ0EsVUFBSSxLQUFLNEMsY0FBY2pSLEtBQUssQ0FBQ2djLE9BQU87QUFDbkM7TUFDRDtBQUNBLFVBQUksS0FBSy9LLGNBQWNqUixHQUFHO0FBQ3pCMlQsd0JBQWdCO01BQ2pCO0FBQ0EsV0FBSzFDLFlBQVlqUjtBQUNqQixXQUFLZ1MsZ0JBQWdCaFM7QUFFckIsV0FBSzhaLEdBQUc1TyxXQUFXbEwsRUFBRUUsU0FBUyxLQUFLQyxHQUFHdEIsYUFBYXNCLEdBQUd0QixVQUFVWCxLQUFLOEIsQ0FBQztBQUN0RSxVQUFJUyxlQUFlO0FBRWxCLFlBQUksS0FBS3lZLE1BQU07QUFDZCxlQUFLQSxLQUFLbkMsTUFBTTVjLFVBQVU7UUFDM0I7QUFDQSxZQUFJLEtBQUtrZixnQkFBZ0I7QUFDeEIsZUFBS0EsZUFBZXRDLE1BQU01YyxVQUFVO1FBQ3JDO0FBQ0EsWUFBSSxLQUFLeEQsTUFBTTtBQUNkLGVBQUtBLEtBQUtvZ0IsTUFBTTVjLFVBQVU7UUFDM0I7QUFDQTtNQUNEO0FBQ0EsVUFBSTZGLEVBQUVFLFdBQVcsR0FBRztBQUNuQixhQUFLd1MsZ0JBQWdCLENBQUEsQ0FBRTtBQUN2QjtNQUNEO0FBQ0EsVUFBSTRJLFdBQVd0YixFQUFFeEksUUFBUSxnQ0FBZ0MsRUFBRSxFQUFFQSxRQUFRdUosaUJBQWlCLEdBQUc7QUFDekZ1YSxpQkFBV3ZXLGlCQUFpQnVXLFVBQVVuYixHQUFHVixTQUFTO0FBQ2xENmIsaUJBQVdBLFNBQVNyYixLQUFLO0FBQ3pCLFVBQUlxYixTQUFTcGIsV0FBVyxHQUFHO0FBQzFCLGFBQUt3UyxnQkFBZ0IsQ0FBQSxDQUFFO0FBQ3ZCO01BQ0Q7QUFDQSxVQUFJLEtBQUsySSxhQUFhO0FBQ3JCLGFBQUtBLFlBQVlRLFlBQVk7TUFDOUI7QUFDQSxZQUFNVixhQUFhdEcsa0JBQWtCLEtBQUsyQyxNQUFNLElBQUksS0FBS0EsU0FBUztBQUNsRVEsNEJBQUFBLG9CQUFzQm5ELGtCQUFrQnNHLFVBQVUsRUFBRWpHO0FBQ3BELFVBQUlMLGtCQUFrQnNHLFVBQVUsRUFBRW5mLE1BQU1zZixRQUFRLEdBQUc7QUFDbEQsYUFBSzVJLGdCQUFnQm1DLGtCQUFrQnNHLFVBQVUsRUFBRW5mLE1BQU1zZixRQUFRLEdBQUd0RCxtQkFBbUJoWSxHQUFHbWIsVUFBVTtBQUNwRztNQUNEO0FBQ0EsWUFBTTtRQUFDcEc7TUFBTyxJQUFJRixrQkFBa0JzRyxVQUFVO0FBQzlDLFdBQUtFLGNBQWM7UUFDbEJNLFdBQVc7UUFDWEYsV0FBVztRQUNYQyxVQUFVM0csUUFBUTdVO1FBQ2xCZ1YsY0FBYzhDO1FBQ2RtRDtNQUNEO0FBQ0EsV0FBS2UsVUFBVW5ILFNBQVMsS0FBS3NHLGFBQWFyYixHQUFHc2IsUUFBUTtJQUN0RDtJQUNBWSxVQUFVbkgsU0FBU3dHLElBQUl2YixHQUFHc2IsVUFBVTtBQUFBLFVBQUFhLGFBQUEvTCwyQkFDYjJFLE9BQUEsR0FBQXFIO0FBQUEsVUFBQTtBQUF0QixhQUFBRCxXQUFBbFgsRUFBQSxHQUFBLEVBQUFtWCxTQUFBRCxXQUFBN0wsRUFBQSxHQUFBakUsUUFBK0I7QUFBQSxnQkFBcEJnUSxVQUFBRCxPQUFBN2tCO0FBQ1YsZ0JBQU1pZ0IsU0FBU3pELGtCQUFrQnNJLE9BQU87QUFDeEMsZ0JBQU14Z0IsTUFBTWdCLEtBQUt5ZixlQUFlOUUsT0FBT3pVLElBQUl2TCxRQUFRLFFBQVEwTSxtQkFBbUJvWCxRQUFRLENBQUM7QUFDdkYsZUFBS0YsU0FBU3ZmLEtBQUswZixJQUFJL0QsUUFBUXhYLEdBQUdzYixRQUFRO1FBQzNDO01BQUEsU0FBQTdLLEtBQUE7QUFBQTBMLG1CQUFBamxCLEVBQUF1WixHQUFBO01BQUEsVUFBQTtBQUFBMEwsbUJBQUF6TCxFQUFBO01BQUE7SUFDRDtJQUNBZ0MsZ0JBQWdCbEgsUUFBUStRLGtCQUFrQnBJLFVBQVVnSCxZQUFZO0FBQy9ELFdBQUsza0IsS0FBSzZqQixXQUFXO0FBQ3JCLFdBQUsxSixNQUFNO0FBQ1gsV0FBS3VCLFlBQVk7QUFDakIsVUFBSSxDQUFDLEtBQUtnSCxNQUFNO0FBQ2Y7TUFDRDtBQUNBLFVBQUl6WSxlQUFlO0FBQ2xCLFlBQUksS0FBS3lZLE1BQU07QUFDZCxlQUFLQSxLQUFLbkMsTUFBTTVjLFVBQVU7UUFDM0I7QUFDQSxZQUFJLEtBQUtrZixnQkFBZ0I7QUFDeEIsZUFBS0EsZUFBZXRDLE1BQU01YyxVQUFVO1FBQ3JDO0FBQ0EsWUFBSSxLQUFLeEQsTUFBTTtBQUNkLGVBQUtBLEtBQUtvZ0IsTUFBTTVjLFVBQVU7UUFDM0I7QUFDQSxhQUFLOFYsY0FBYztBQUNuQjtNQUNEO0FBQ0EsV0FBS2tMLGFBQWFBO0FBQ2xCLFVBQUlBLFlBQVk7QUFDZixZQUFJLENBQUMsS0FBSzlCLGdCQUFnQjtBQUN6QixlQUFLOEIsYUFBYTtRQUNuQjtNQUNELFdBQVcsS0FBSzlCLGdCQUFnQjtBQUMvQixhQUFLQSxlQUFldEMsTUFBTTVjLFVBQVU7TUFDckM7QUFDQSxVQUFJZ2EsVUFBVTtBQUNiLFlBQUksS0FBS2xELFVBQVUxTixRQUFRNFEsUUFBUSxHQUFHO0FBQ3JDO1FBQ0Q7QUFDQSxZQUNDLEtBQUtxSSxhQUNMLEtBQUt2TCxVQUFVMU4sUUFBUSxLQUFLaVosU0FBUyxNQUFNLEtBQzNDLEtBQUtBLFVBQVV0YyxTQUFTaVUsU0FBU2pVLFFBQ2hDO0FBQ0Q7UUFDRDtNQUNEO0FBQ0EsV0FBS3NjLFlBQVlySTtBQUVqQixVQUFJblUsSUFBSSxLQUFLeEosS0FBS2UsTUFBTTRhLE1BQU0sR0FBRztBQUNqQyxZQUFNL1YsTUFBTTRELEVBQUVFLFNBQVMsSUFBQSxJQUFBM0osT0FBUXlKLEVBQUUsQ0FBQyxDQUFDLElBQUs7QUFDeENBLFVBQUlHLEdBQUd4QixzQkFBc0JtRixXQUFXOUQsRUFBRSxDQUFDLENBQUMsSUFBSUEsRUFBRSxDQUFDO0FBQ25ELFVBQUl5YyxjQUFjemM7QUFDbEIsWUFBTTBjLGVBQWVsUixVQUFVQSxPQUFPNEk7QUFDdEMsVUFBSXhTO0FBQ0osVUFBSTRKLFFBQVE7QUFDWCxZQUFJQSxPQUFPOEksY0FBY3RVLEVBQUV1RCxRQUFRNFEsUUFBUSxNQUFNLEdBQUc7QUFFbkRzSSx3QkFBY2pSLE9BQU84SSxhQUFhdFUsRUFBRXlELE1BQU0wUSxTQUFTalUsTUFBTTtRQUMxRDtBQUNBLGNBQU15YyxPQUFPRixZQUFZbmMsWUFBWTtBQUVyQyxZQUFJSCxHQUFHdEIsV0FBVztBQUNqQixlQUFLK0MsSUFBSSxHQUFHQSxJQUFJNEosT0FBT3RMLFFBQVEwQixLQUFLO0FBQ25DLGdCQUFJekIsR0FBR3RCLFVBQVVYLEtBQUtzTixPQUFPNUosQ0FBQyxDQUFDLEdBQUc7QUFDakM0SixxQkFBTzZJLE9BQU96UyxHQUFHLENBQUM7QUFDbEJBO1lBQ0Q7VUFDRDtRQUNEO0FBQ0E0SixlQUFPb1IsS0FBSyxDQUFDQyxHQUFHQyxNQUFNO0FBQ3JCLGNBQUlELE1BQU1DLEdBQUc7QUFDWixtQkFBTztVQUNSO0FBQ0EsY0FBSUQsRUFBRXRaLFFBQVF1WixDQUFDLE1BQU0sR0FBRztBQUN2QixtQkFBTztVQUNSO0FBRUEsY0FBSUEsRUFBRXZaLFFBQVFzWixDQUFDLE1BQU0sR0FBRztBQUN2QixtQkFBTztVQUNSO0FBR0EsY0FBSUUsZUFBZUYsRUFBRXRaLFFBQVFrWixXQUFXLE1BQU0sSUFBSSxJQUFJO0FBQ3RELGNBQUlPLGVBQWVGLEVBQUV2WixRQUFRa1osV0FBVyxNQUFNLElBQUksSUFBSTtBQUN0RCxjQUFJTSxpQkFBaUJDLGNBQWM7QUFDbEMsbUJBQU9BLGVBQWVEO1VBQ3ZCO0FBRUEsZ0JBQU1FLE9BQU9KLEVBQUV2YyxZQUFZO0FBQzNCLGdCQUFNNGMsT0FBT0osRUFBRXhjLFlBQVk7QUFDM0J5Yyx5QkFBZUUsS0FBSzFaLFFBQVFvWixJQUFJLE1BQU0sSUFBSSxJQUFJO0FBQzlDSyx5QkFBZUUsS0FBSzNaLFFBQVFvWixJQUFJLE1BQU0sSUFBSSxJQUFJO0FBQzlDLGNBQUlJLGlCQUFpQkMsY0FBYztBQUNsQyxtQkFBT0EsZUFBZUQ7VUFDdkI7QUFDQSxjQUFJRixJQUFJQyxHQUFHO0FBQ1YsbUJBQU87VUFDUjtBQUNBLGNBQUlBLElBQUlELEdBQUc7QUFDVixtQkFBTztVQUNSO0FBQ0EsaUJBQU87UUFDUixDQUFDO0FBRUQsYUFBS2piLElBQUksR0FBR0EsSUFBSTRKLE9BQU90TCxRQUFRMEIsS0FBSztBQUNuQyxjQUNFQSxJQUFJLElBQUk0SixPQUFPdEwsVUFBVXNMLE9BQU81SixDQUFDLE1BQU00SixPQUFPNUosSUFBSSxDQUFDLEtBQ25EL0UsS0FBS2lCLHNCQUFzQixNQUFNME4sT0FBTzVKLENBQUMsTUFBTS9FLEtBQUtzQixTQUNwRDtBQUNEcU4sbUJBQU82SSxPQUFPelMsR0FBRyxDQUFDO0FBQ2xCQTtVQUNEO1FBQ0Q7TUFDRDtBQUNBLFVBQUksQ0FBQzRKLFVBQVVBLE9BQU90TCxXQUFXLEdBQUc7QUFDbkMsWUFBSSxLQUFLZ1osTUFBTTtBQUNkLGVBQUtBLEtBQUtuQyxNQUFNNWMsVUFBVTtRQUMzQjtBQUNBLFlBQUksS0FBS2tmLGdCQUFnQjtBQUN4QixlQUFLQSxlQUFldEMsTUFBTTVjLFVBQVU7UUFDckM7QUFDQSxZQUFJZ2hCLGNBQWN0RyxrQkFBa0JzRyxVQUFVLEtBQUssQ0FBQ3RHLGtCQUFrQnNHLFVBQVUsRUFBRWxHLE1BQU07QUFDdkYsY0FBSSxLQUFLdGUsTUFBTTtBQUNkLGlCQUFLQSxLQUFLdVosTUFBTS9QLEdBQUcxQjtVQUNwQjtBQUNBLGVBQUt3UixjQUFjO1FBQ3BCO0FBQ0E7TUFDRDtBQUNBLFlBQU0sQ0FBQ2tOLFVBQVUsSUFBSTNSO0FBQ3JCLFlBQU00UixZQUFZLEtBQUtDLGFBQWFGLFlBQVluZCxHQUFHeWMsYUFBYXJnQixLQUFLbWdCLGdCQUFnQjtBQUNyRixZQUFNZSxXQUFXRixhQUFhVixnQkFBZ0JTLGVBQWVwWSxpQkFBaUIvRSxHQUFHRyxHQUFHVixTQUFTO0FBQzdGLFVBQUkwYixjQUFjdEcsa0JBQWtCc0csVUFBVSxLQUFLLENBQUN0RyxrQkFBa0JzRyxVQUFVLEVBQUVsRyxNQUFNO0FBQ3ZGLGFBQUt0ZSxLQUFLdVosTUFBTW9OLFdBQVduZCxHQUFHM0IsWUFBWTJCLEdBQUcxQjtBQUM3QyxhQUFLd1IsY0FBY3FOO01BQ3BCO0FBQ0EsVUFBSUYsV0FBVztBQUNkLGFBQUtuTSxZQUFZa007QUFDakIsWUFBSTNSLE9BQU90TCxXQUFXLEdBQUc7QUFDeEIsZUFBS2daLEtBQUtuQyxNQUFNNWMsVUFBVTtBQUMxQixjQUFJLEtBQUtrZixnQkFBZ0I7QUFDeEIsaUJBQUtBLGVBQWV0QyxNQUFNNWMsVUFBVTtVQUNyQztBQUNBO1FBQ0Q7TUFDRDtBQUVBLGFBQU8sS0FBSytlLEtBQUt4QyxZQUFZO0FBQzVCLGFBQUt3QyxLQUFLeEMsV0FBV3RaLE9BQU87TUFDN0I7QUFDQSxXQUFLd0UsSUFBSSxHQUFHQSxJQUFJNEosT0FBT3RMLFFBQVEwQixLQUFLO0FBQ25DLGNBQU0wWCxNQUFNN1csS0FBSyxRQUFRO0FBQ3pCNlcsWUFBSXhpQixPQUFPMkwsS0FBSytJLE9BQU81SixDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2hDMFgsWUFBSUMsV0FBVzZELGFBQWF4YixNQUFNO0FBQ2xDLGFBQUtzWCxLQUFLcGlCLE9BQU93aUIsR0FBRztNQUNyQjtBQUNBLFdBQUsvRyxZQUFZO0lBQ2xCO0lBQ0FBLGNBQWM7QUFDYixXQUFLTCxZQUFZO0FBQ2pCLFVBQUksQ0FBQyxLQUFLVCxXQUFXO0FBQ3BCLGFBQUt5SCxLQUFLbkMsTUFBTTVjLFVBQVU7QUFDMUIsWUFBSSxLQUFLa2YsZ0JBQWdCO0FBQ3hCLGVBQUtBLGVBQWV0QyxNQUFNNWMsVUFBVTtRQUNyQztBQUNBO01BQ0Q7QUFDQSxVQUFJb2pCLFdBQVcsS0FBS3JFLEtBQUs1VSxRQUFRcEUsU0FBU0MsR0FBR2IsV0FBV2EsR0FBR2IsV0FBVyxLQUFLNFosS0FBSzVVLFFBQVFwRTtBQUN4RixVQUFJcWQsWUFBWSxHQUFHO0FBQ2xCQSxtQkFBVztNQUNaO0FBQ0EsV0FBS3JFLEtBQUtaLE9BQU9pRjtBQUNqQixXQUFLckUsS0FBS25DLE1BQU15RyxRQUFROVUsU0FBUyxVQUFVO0FBQzNDLFdBQUt3USxLQUFLbkMsTUFBTTBHLFNBQVM7QUFDekIsV0FBS3ZFLEtBQUtuQyxNQUFNaUQsV0FBVztBQUUzQixZQUFNMEQsU0FBU2hWLFNBQVMsVUFBVTtBQUNsQyxVQUFJaVYsUUFBUTtBQUNaLFVBQUksS0FBS3pFLEtBQUtuQyxNQUFNNWMsWUFBWSxRQUFRO0FBRXZDLGFBQUsrZSxLQUFLbkMsTUFBTTZHLE1BQUEsR0FBQXJuQixPQUFTLEtBQUtDLEtBQUtxbkIsV0FBUyxJQUFBO0FBQzVDLGFBQUszRSxLQUFLbkMsTUFBTTJHLE1BQU0sSUFBSTtBQUMxQixhQUFLeEUsS0FBS25DLE1BQU01YyxVQUFVO0FBQzFCd2pCLGdCQUFRLEtBQUt6RSxLQUFLNEU7QUFDbEIsYUFBSzVFLEtBQUtuQyxNQUFNNWMsVUFBVTtNQUMzQixPQUFPO0FBQ053akIsZ0JBQVEsS0FBS3pFLEtBQUs0RTtNQUNuQjtBQUVBLFVBQUlDLGdCQUFnQko7QUFDcEIsVUFBSUosV0FBV3BkLEdBQUdiLFVBQVU7QUFDM0J5ZSx3QkFBaUJKLFFBQVFKLFdBQVlwZCxHQUFHYjtNQUN6QztBQUNBLFlBQU0wZSxXQUFZQyxVQUFTO0FBQzFCLFlBQUkxZCxhQUFhLENBQUM1SyxTQUFTdW9CLFVBQVU7QUFFcEMsaUJBQU96b0IsT0FBQSxRQUFBYyxPQUFlMG5CLElBQUksQ0FBQTtRQUMzQjtBQUNBLGNBQU1oWixJQUFBLFNBQUExTyxPQUFhMG5CLElBQUk7QUFDdkIsWUFBSXhvQixPQUFPMG9CLE9BQU87QUFDakIsaUJBQU85bkIsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFNE8sQ0FBQztRQUN0QjtBQUNBLGdCQUFRdFAsU0FBU3lvQixrQkFBa0J6b0IsU0FBU3lvQixnQkFBZ0JuWixDQUFDLElBQUksTUFBTTVPLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRTRPLENBQUMsS0FBSztNQUMzRjtBQUNBLFlBQU1vWixnQkFBaUJKLFVBQVM7QUFDL0IsY0FBTWhaLElBQUEsU0FBQTFPLE9BQWEwbkIsSUFBSTtBQUN2QixZQUFJdmlCLFVBQVUvRixTQUFTeW9CLGtCQUFrQnpvQixTQUFTeW9CLGdCQUFnQm5aLENBQUMsSUFBSSxNQUFNNU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFNE8sQ0FBQyxLQUFLO0FBQ2hHLFlBQUl5RCxVQUFVdVYsU0FBUyxRQUFRO0FBTTlCLGNBQUl2aUIsU0FBUyxHQUFHO0FBQ2ZBLHFCQUFTLENBQUNBO1VBQ1g7QUFDQSxjQUFJLENBQUM2RSxXQUFXO0FBQ2Y3RSxxQkFBUzJpQixjQUFjLE9BQU8sSUFBSUwsU0FBUyxPQUFPLElBQUl0aUI7VUFDdkQ7UUFFRDtBQUNBLGVBQU9BO01BQ1I7QUFDQSxZQUFNc2UsV0FBWXNFLFVBQVM7QUFFMUIsWUFBSUEsS0FBS0MsdUJBQXVCO0FBQy9CLGdCQUFNQyxNQUFNRixLQUFLQyxzQkFBc0I7QUFDdkMsaUJBQU87WUFDTkUsR0FBRzVYLEtBQUs2WCxNQUFNRixJQUFJRyxPQUFPTixjQUFjLE1BQU0sQ0FBQztZQUM5Q08sR0FBRy9YLEtBQUs2WCxNQUFNRixJQUFJWixNQUFNUyxjQUFjLEtBQUssQ0FBQztVQUM3QztRQUNEO0FBQ0EsWUFBSVEsSUFBSTtBQUNSLFlBQUlDLElBQUk7QUFDUixXQUFHO0FBQ0ZELGVBQUtQLEtBQUtULGFBQWE7QUFDdkJpQixlQUFLUixLQUFLUyxjQUFjO0FBQ3hCVCxpQkFBT0EsS0FBS1U7UUFDYixTQUFTVjtBQUNULGVBQU87VUFDTkcsR0FBR0s7VUFDSEYsR0FBR0M7UUFDSjtNQUNEO0FBQ0EsWUFBTUksVUFBVWpGLFNBQVMsS0FBS3hqQixJQUFJO0FBQ2xDLFlBQU0wb0IsS0FBSztBQUNYLFVBQUlDLEtBQUs7QUFFVCxVQUFJQyxTQUFTO0FBQ2IsWUFBTUMsZUFBZSxLQUFLN29CLEtBQUs4b0IsZUFBZSxLQUFLOW9CLEtBQUsrb0I7QUFDeEQsVUFBSSxLQUFLcEUsWUFBWTtBQUNwQixhQUFLOUIsZUFBZXRDLE1BQU0wRyxTQUFTO0FBQ25DLGFBQUtwRSxlQUFldEMsTUFBTWlELFdBQVc7QUFDckMsYUFBS1gsZUFBZXRDLE1BQU10YyxRQUFBLEdBQUFsRSxPQUFXOG9CLGNBQVksSUFBQTtBQUVqRCxZQUFJLEtBQUtoRyxlQUFldEMsTUFBTTVjLFlBQVksUUFBUTtBQUNqRCxlQUFLa2YsZUFBZXRDLE1BQU0yRyxNQUFNLElBQUk7QUFDcEMsZUFBS3JFLGVBQWV0QyxNQUFNNkcsTUFBTTtBQUNoQyxlQUFLdkUsZUFBZXRDLE1BQU01YyxVQUFVO0FBQ3BDaWxCLG1CQUFTLEtBQUsvRixlQUFleUU7QUFDN0IsZUFBS3pFLGVBQWV0QyxNQUFNNWMsVUFBVTtRQUNyQyxPQUFPO0FBQ05pbEIsbUJBQVMsS0FBSy9GLGVBQWV5RTtRQUM5QjtBQUNBLGFBQUt6RSxlQUFldEMsTUFBTTJHLE1BQU0sSUFBQSxHQUFBbm5CLE9BQU8yb0IsSUFBRSxJQUFBO01BQzFDO0FBQ0EsVUFBSUQsUUFBUUwsSUFBSWIsZ0JBQWdCcUIsU0FBUyxHQUFHO0FBRzNDRCxhQUFLLEtBQUszb0IsS0FBS3NuQixlQUFlc0IsU0FBUztBQUN2QyxZQUFJLEtBQUtqRSxZQUFZO0FBQ3BCLGVBQUs5QixlQUFldEMsTUFBTTZHLE1BQUEsR0FBQXJuQixPQUFTLEtBQUtDLEtBQUtzbkIsY0FBWSxJQUFBO1FBQzFEO01BQ0QsT0FBTztBQUNOcUIsYUFBSyxDQUFDeEIsUUFBUXlCLFNBQVM7QUFDdkIsWUFBSSxLQUFLakUsWUFBWTtBQUNwQixlQUFLOUIsZUFBZXRDLE1BQU02RyxNQUFBLEdBQUFybkIsT0FBUyxFQUFFNm9CLFNBQVMsSUFBRSxJQUFBO1FBQ2pEO01BQ0Q7QUFDQSxXQUFLbEcsS0FBS25DLE1BQU02RyxNQUFBLEdBQUFybkIsT0FBUzRvQixJQUFFLElBQUE7QUFDM0IsV0FBS2pHLEtBQUtuQyxNQUFNdGMsUUFBUTtBQUN4QixXQUFLeWUsS0FBS25DLE1BQU0yRyxNQUFNLElBQUEsR0FBQW5uQixPQUFPMm9CLElBQUUsSUFBQTtBQUMvQixVQUFJLEtBQUsvRCxZQUFZO0FBQ3BCLGFBQUtELGFBQWEsS0FBS0MsVUFBVTtBQUNqQyxhQUFLOUIsZUFBZXRDLE1BQU01YyxVQUFVO01BQ3JDO0FBQ0EsV0FBSytlLEtBQUtuQyxNQUFNNWMsVUFBVTtBQUUxQixVQUFJLEtBQUsrZSxLQUFLb0csY0FBY0QsY0FBYztBQUN6QyxhQUFLbkcsS0FBS25DLE1BQU10YyxRQUFBLEdBQUFsRSxPQUFXOG9CLGNBQVksSUFBQTtBQUN2QztNQUNEO0FBRUEsWUFBTUcsU0FBU25CLGNBQWMsTUFBTTtBQUNuQyxZQUFNb0IsU0FBU3pCLFNBQVMsT0FBTztBQUMvQixVQUFJMEIsSUFBSSxLQUFLeEcsS0FBS29HO0FBQ2xCLFlBQU1LLFFBQVEzRixTQUFTLEtBQUtkLElBQUk7QUFDaEMsVUFBSXlGLE9BQU9nQixNQUFNbEI7QUFDakIsVUFBSW1CLFFBQVFqQixPQUFPZTtBQUNuQixVQUFJZixPQUFPYSxVQUFVSSxRQUFRSixTQUFTQyxRQUFRO0FBQzdDLFlBQUlDLElBQUlELFFBQVE7QUFDZkMsY0FBSUQ7QUFDSixlQUFLdkcsS0FBS25DLE1BQU10YyxRQUFBLEdBQUFsRSxPQUFXbXBCLEdBQUMsSUFBQTtBQUM1QixjQUFJaFgsUUFBUTtBQUNYaVcsbUJBQU9pQixRQUFRRjtVQUNoQixPQUFPO0FBQ05FLG9CQUFRakIsT0FBT2U7VUFDaEI7UUFDRDtBQUNBLFlBQUlHLGtCQUFrQjtBQUN0QixZQUFJbEIsT0FBT2EsUUFBUTtBQUNsQkssNEJBQWtCTCxTQUFTYjtRQUM1QixXQUFXaUIsUUFBUUosU0FBU0MsUUFBUTtBQUNuQ0ksNEJBQWtCLEVBQUVELFFBQVFKLFNBQVNDO1FBQ3RDO0FBQ0EsWUFBSS9XLFFBQVE7QUFDWG1YLDRCQUFrQixDQUFDQTtRQUNwQjtBQUNBLFlBQUlBLGlCQUFpQjtBQUNwQixlQUFLM0csS0FBS25DLE1BQU0yRyxNQUFNLElBQUEsR0FBQW5uQixPQUFPMm9CLEtBQUtXLGlCQUFlLElBQUE7UUFDbEQ7TUFDRDtJQUNEO0lBQ0F4QyxhQUFhaG1CLFFBQVF5b0IsUUFBUUMsa0JBQWtCM2pCLEtBQUs0akIsWUFBWTtBQUMvRCxVQUFJM29CLFdBQVd5b0IsUUFBUTtBQUN0QixlQUFPO01BQ1I7QUFDQSxVQUFJRSxjQUFjLEtBQUt4SCxPQUFPLENBQUMsS0FBS3lILFVBQVUsR0FBRztBQUNoRCxlQUFPO01BQ1I7QUFFQSxVQUFJNW9CLE9BQU9rTSxRQUFRdWMsTUFBTSxHQUFHO0FBRTNCLFlBQUlDLG9CQUFvQjFvQixPQUFPa00sUUFBUXdjLGdCQUFnQixNQUFNLEdBQUc7QUFDL0QsY0FBSSxLQUFLL04sa0JBQWtCOE4sUUFBUTtBQUNsQyxpQkFBSzlOLGdCQUFnQitOO1VBQ3RCO0FBQ0FELG1CQUFTQztRQUNWLE9BQU87QUFDTixpQkFBTztRQUNSO01BQ0Q7QUFHQSxXQUFLdnBCLEtBQUs0aUIsTUFBTTtBQUNoQixXQUFLNWlCLEtBQUtlLFFBQVFGLFNBQVMrRTtBQUMzQixXQUFLcVcsYUFBYXFOLE9BQU81ZixRQUFRN0ksT0FBTzZJLE1BQU07QUFDOUMsYUFBTztJQUNSO0lBQ0ErZixZQUFZO0FBQ1gsYUFDQyxLQUFLenBCLEtBQUswcEIscUJBQ1YsS0FBSzFwQixLQUFLd2lCLG1CQUNULEtBQUt4aUIsS0FBSzJwQixtQkFBbUIsVUFBYSxLQUFLM3BCLEtBQUs0cEIsaUJBQWlCO0lBRXhFO0lBQ0EzTixhQUFhbEUsTUFBTUMsSUFBSTtBQUV0QixVQUFJLENBQUMsS0FBS2hZLEtBQUtlLE9BQU87QUFDckI7TUFDRDtBQUNBLFVBQUksS0FBS2YsS0FBSzBwQixtQkFBbUI7QUFFaEMsYUFBSzFwQixLQUFLMHBCLGtCQUFrQjNSLE1BQU1DLEVBQUU7TUFDckMsV0FBVyxLQUFLaFksS0FBSzJwQixtQkFBbUIsUUFBVztBQUNsRCxZQUFJNVIsT0FBTyxLQUFLL1gsS0FBSzJwQixnQkFBZ0I7QUFDcEMsZUFBSzNwQixLQUFLNHBCLGVBQWU1UjtBQUN6QixlQUFLaFksS0FBSzJwQixpQkFBaUI1UjtRQUM1QixPQUFPO0FBQ04sZUFBSy9YLEtBQUsycEIsaUJBQWlCNVI7QUFDM0IsZUFBSy9YLEtBQUs0cEIsZUFBZTVSO1FBQzFCO01BQ0QsV0FBVyxLQUFLaFksS0FBS3dpQixpQkFBaUI7QUFFckMsY0FBTXFILGdCQUFnQixLQUFLN3BCLEtBQUt3aUIsZ0JBQWdCO0FBQ2hEcUgsc0JBQWNDLEtBQUssYUFBYS9SLElBQUk7QUFDcEM4UixzQkFBY0UsUUFBUSxhQUFhL1IsS0FBS0QsSUFBSTtBQUM1QzhSLHNCQUFjRyxPQUFPO01BQ3RCO0lBQ0Q7SUFDQUMsZUFBZTtBQUNkLFVBQUlsUyxPQUFPO0FBRVgsVUFBSUMsS0FBSztBQUNULFVBQUksQ0FBQyxLQUFLaFksS0FBS2UsT0FBTztNQUV0QixXQUFXLEtBQUtmLEtBQUsycEIsbUJBQW1CLFFBQVc7QUFDbEQ1UixlQUFPLEtBQUsvWCxLQUFLMnBCO0FBQ2pCM1IsYUFBSyxLQUFLaFksS0FBSzRwQjtNQUNoQixXQUFXenFCLFNBQVMrcUIsYUFBYS9xQixTQUFTK3FCLFVBQVVDLGFBQWE7QUFFaEUsY0FBTUMsTUFBTWpyQixTQUFTK3FCLFVBQVVDLFlBQVksRUFBRUUsVUFBVTtBQUN2RCxZQUFJRCxJQUFJbk4sV0FBVyxNQUFNLEtBQUtqZCxNQUFNO0FBQ25DLGNBQUk7QUFDSCxrQkFBTXNxQixVQUFVLEtBQUt0cUIsS0FBS3dpQixnQkFBZ0I7QUFDMUM4SCxvQkFBUVIsS0FBSyxhQUFhLENBQUM7QUFDM0JRLG9CQUFRQyxZQUFZLFlBQVlILEdBQUc7QUFHbkNwUyxpQkFBS3NTLFFBQVF0cUIsS0FBSzBKO0FBQ2xCNGdCLG9CQUFRQyxZQUFZLGNBQWNILEdBQUc7QUFDckNyUyxtQkFBT3VTLFFBQVF0cUIsS0FBSzBKO1VBQ3JCLFFBQVE7QUFDUHFPLG1CQUFPLEtBQUsvWCxLQUFLZSxNQUFNMkk7QUFDdkJzTyxpQkFBS0Q7VUFDTjtRQUNEO01BQ0Q7QUFDQSxhQUFPO1FBQ044RCxPQUFPOUQ7UUFDUCtELEtBQUs5RDtNQUNOO0lBQ0Q7SUFDQXlLLFdBQVc7QUFDVixXQUFLN0csZ0JBQWdCLEtBQUtxTyxhQUFhO0lBQ3hDO0lBQ0E3SCxXQUFXTCxPQUFPO0FBQ2pCLFVBQUloQyxNQUFNO0FBQ1YsY0FBUSxLQUFLa0MsU0FBQTtRQUNaLEtBQUszQztBQUNKUyxnQkFBTTtBQUNOO1FBQ0QsS0FBS1I7QUFDSlEsZ0JBQU07QUFDTjtRQUNELEtBQUtYO0FBQ0pXLGdCQUFNLENBQUNwVyxHQUFHYjtBQUNWO1FBQ0QsS0FBS3VXO0FBQ0pVLGdCQUFNcFcsR0FBR2I7QUFDVDtRQUNELEtBQUtvVztBQUVKLGlCQUFPaE8sUUFBUTZRLEtBQUs7TUFDdEI7QUFDQSxVQUFJaEMsS0FBSztBQUNSLFlBQUksS0FBSzJDLEtBQUtuQyxNQUFNNWMsWUFBWSxRQUFRO0FBRXZDLGVBQUtnZixvQkFBb0I1QyxHQUFHO0FBRzVCLGlCQUFPN08sUUFBUTZRLEtBQUs7UUFDckIsV0FDQyxLQUFLSSxZQUFZLE1BQ2hCLENBQUMsS0FBSzBDLGVBQWUsS0FBS0EsWUFBWUksY0FBYyxLQUFLSixZQUFZSyxXQUNyRTtBQUVELGVBQUt6RCxXQUFXO1FBQ2pCO01BQ0Q7QUFDQSxhQUFPO0lBQ1I7SUFDQWtCLG9CQUFvQjVDLEtBQUs7QUFDeEIsVUFBSTlWLGlCQUFpQixDQUFDLEtBQUt5WSxRQUFRLEtBQUtBLEtBQUtuQyxNQUFNNWMsWUFBWSxRQUFRO0FBQ3RFLGVBQU87TUFDUjtBQUNBLFlBQU02bUIsT0FBTyxLQUFLOUgsS0FBS007QUFDdkIsVUFBSXlILE1BQU07QUFDVixVQUFJMUssUUFBUSxHQUFHO0FBQ2QsWUFBSXlLLE9BQU8sS0FBS0EsUUFBUSxLQUFLOUgsS0FBSzVVLFFBQVFwRSxRQUFRO0FBQ2pELGlCQUFPO1FBQ1I7QUFDQStnQixjQUFNRDtNQUNQLE9BQU87QUFDTkMsY0FBTUQsT0FBTyxJQUFJLElBQUlBLE9BQU96SztBQUM1QjBLLGNBQU1BLE1BQU0sSUFBSSxJQUFJQTtBQUNwQixZQUFJQSxPQUFPLEtBQUsvSCxLQUFLNVUsUUFBUXBFLFFBQVE7QUFDcEMrZ0IsZ0JBQU0sS0FBSy9ILEtBQUs1VSxRQUFRcEUsU0FBUztRQUNsQztNQUNEO0FBQ0EsVUFBSStnQixRQUFRRCxRQUFRekssUUFBUSxHQUFHO0FBQzlCLFlBQUl5SyxRQUFRLEtBQUtBLE9BQU8sS0FBSzlILEtBQUs1VSxRQUFRcEUsVUFBVXFXLFFBQVEsR0FBRztBQUM5RCxlQUFLMkMsS0FBSzVVLFFBQVEwYyxJQUFJLEVBQUV6SCxXQUFXO1FBQ3BDO0FBQ0EsYUFBS0wsS0FBSzVVLFFBQVEyYyxHQUFHLEVBQUUxSCxXQUFXO0FBRWxDLGNBQU12WixJQUFJLEtBQUt4SixLQUFLZSxNQUFNNGEsTUFBTSxHQUFHO0FBQ25DLGNBQU0vVixNQUFNNEQsRUFBRUUsU0FBUyxJQUFBLElBQUEzSixPQUFReUosRUFBRSxDQUFDLENBQUMsSUFBSztBQUN4QyxjQUFNb2QsWUFBWSxLQUFLQyxhQUFhLEtBQUtuRSxLQUFLNVUsUUFBUTJjLEdBQUcsRUFBRXpxQixNQUFNLEtBQUt3YixlQUFlLE1BQU01VixLQUFLLEtBQUs7QUFDckcsWUFBSSxDQUFDZ2hCLGFBQWEsS0FBS2xFLEtBQUs1VSxRQUFRMmMsR0FBRyxFQUFFenFCLFNBQVMsS0FBS3diLGVBQWU7QUFDckUsZUFBS3hiLEtBQUtlLFFBQVEsS0FBSzJoQixLQUFLNVUsUUFBUTJjLEdBQUcsRUFBRXpxQixPQUFPNEY7QUFDaEQsY0FBSSxLQUFLNmpCLFVBQVUsR0FBRztBQUNyQixpQkFBS3hOLGFBQWEsS0FBS3lHLEtBQUs1VSxRQUFRMmMsR0FBRyxFQUFFenFCLEtBQUswSixRQUFRLEtBQUtnWixLQUFLNVUsUUFBUTJjLEdBQUcsRUFBRXpxQixLQUFLMEosTUFBTTtVQUN6RjtRQUNEO0FBQ0EsYUFBSytRLFlBQVksS0FBS2lJLEtBQUs1VSxRQUFRMmMsR0FBRyxFQUFFenFCO0FBQ3hDLGFBQUt5WixjQUFjO0FBQ25CLFlBQUksS0FBS3RaLE1BQU07QUFDZCxlQUFLQSxLQUFLdVosTUFBTS9QLEdBQUczQjtRQUNwQjtBQUNBLGFBQUs1SCxRQUFRc1M7TUFDZDtBQUNBLGFBQU87SUFDUjtJQUNBMlAsb0JBQW9CO0FBQ25CLFVBQUlwWSxpQkFBaUIsQ0FBQyxLQUFLeVksUUFBUSxLQUFLQSxLQUFLbkMsTUFBTTVjLFlBQVksUUFBUTtBQUN0RSxlQUFPO01BQ1I7QUFDQSxZQUFNNm1CLE9BQU8sS0FBSzlILEtBQUtNO0FBQ3ZCLFVBQUl3SCxRQUFRLEtBQUtBLE9BQU8sS0FBSzlILEtBQUs1VSxRQUFRcEUsUUFBUTtBQUNqRCxhQUFLZ1osS0FBSzVVLFFBQVEwYyxJQUFJLEVBQUV6SCxXQUFXO0FBRW5DLGNBQU12WixJQUFJLEtBQUt4SixLQUFLZSxNQUFNNGEsTUFBTSxHQUFHO0FBQ25DLGNBQU0vVixNQUFNNEQsRUFBRUUsU0FBUyxJQUFBLElBQUEzSixPQUFReUosRUFBRSxDQUFDLENBQUMsSUFBSztBQUd4QyxZQUFJdEUsU0FBU3NFLEVBQUUsQ0FBQyxNQUFNLEtBQUtpUjtBQUMzQixZQUFJalIsRUFBRSxDQUFDLE1BQU0sS0FBS2dTLGVBQWU7QUFDaEMsZUFBS3hiLEtBQUtlLFFBQVEsS0FBS3lhLGdCQUFnQjVWO0FBQ3ZDVixtQkFBUztRQUNWO0FBQ0EsYUFBS3VWLFlBQVksS0FBS2U7QUFDdEIsZUFBT3RXO01BQ1I7QUFDQSxhQUFPO0lBQ1I7RUFDRDtBQUNBLFFBQU0wYSxhQUFhQSxNQUFNO0FBR3hCLFVBQU03Z0IsU0FBUyxDQUFDO0FBQ2hCNEssT0FBR1gsd0JBQ0YvSixPQUFPeXJCLGlDQUFpQyxTQUNyQzNyQixPQUFPNHJCLDZCQUE2QixTQUNuQ2hoQixHQUFHWCx3QkFDSGpLLE9BQU80ckIsMkJBQ1IsQ0FBQyxDQUFDMXJCLE9BQU95ckI7QUFDYi9nQixPQUFHcEIsZ0JBQ0Z0SixPQUFPMnJCLHlCQUF5QixTQUM3QjdyQixPQUFPOHJCLHVCQUF1QixTQUM3QnhrQixLQUFLaUIsb0JBQW9CLElBQ3hCLE9BQ0FxQyxHQUFHcEIsZ0JBQ0p4SixPQUFPOHJCLHFCQUNSLENBQUMsQ0FBQzVyQixPQUFPMnJCO0FBQ2JqaEIsT0FBR25CLGlCQUNGdkosT0FBTzZyQiwwQkFBMEIsU0FDOUIvckIsT0FBT2dzQix1QkFBdUIsU0FDN0JwaEIsR0FBR25CLGlCQUNIekosT0FBT2dzQixxQkFDUixDQUFDLENBQUM5ckIsT0FBTzZyQjtBQUNibmhCLE9BQUdsQixnQkFBZ0J4SixPQUFPK3JCLDJCQUEyQmpzQixPQUFPa3NCLHlCQUF5QnRoQixHQUFHbEI7QUFDeEZrQixPQUFHakIsZ0JBQWdCekosT0FBT2lzQix3QkFBd0Juc0IsT0FBT29zQixzQkFBc0J4aEIsR0FBR2pCO0FBQ2xGaUIsT0FBR2hCLGNBQWMxSixPQUFPbXNCLHNCQUFzQnJzQixPQUFPc3NCLHFCQUFxQjFoQixHQUFHaEI7QUFDN0UsUUFBSSxPQUFPZ0IsR0FBR2hCLGdCQUFnQixZQUFZLENBQUMwVixrQkFBa0IxVSxHQUFHaEIsV0FBVyxHQUFHO0FBQzdFZ0IsU0FBR2hCLGNBQWM7SUFDbEI7QUFDQWdCLE9BQUdmLGVBQ0YzSixPQUFPcXNCLDZCQUE2QixTQUNqQ3ZzQixPQUFPd3NCLDJCQUEyQixTQUNqQzVoQixHQUFHZixlQUNIN0osT0FBT3dzQix5QkFDUixDQUFDLENBQUN0c0IsT0FBT3FzQjtBQUNiM2hCLE9BQUdaLGVBQ0Y5SixPQUFPdXNCLG9DQUFvQyxTQUN4Q3pzQixPQUFPMHNCLDZCQUE2QixTQUNuQzloQixHQUFHWixlQUNIaEssT0FBTzBzQiwyQkFDUixDQUFDLENBQUN4c0IsT0FBT3VzQjtBQUNiN2hCLE9BQUdyQixhQUFhckosT0FBT3lzQiw2QkFBNkIzc0IsT0FBTzRzQiwyQkFBMkJoaUIsR0FBR3JCO0FBQ3pGcUIsT0FBR2QsY0FDRjVKLE9BQU8yc0IsOEJBQThCLFNBQ2xDN3NCLE9BQU84c0IsMkJBQTJCLFNBQ2pDbGlCLEdBQUdkLGNBQ0g5SixPQUFPOHNCLHlCQUNSLENBQUMsQ0FBQzVzQixPQUFPMnNCO0FBQ2JqaUIsT0FBR2IsV0FBVzdKLE9BQU82c0Isb0JBQW9CL3NCLE9BQU9ndEIsa0JBQWtCcGlCLEdBQUdiO0FBQ3JFYSxPQUFHekMsWUFBWW5JLE9BQU9pdEIsbUJBQW1CO0FBRXpDLFFBQUlyaUIsR0FBR3pDLFdBQVc7QUFDakIsWUFBTStrQixRQUFROXNCLFNBQVMrc0I7QUFDdkIsWUFBTUMsWUFBWSxJQUFJM2hCLE9BQUEsV0FBQXpLLE9BQWtCNEosR0FBR29DLGlCQUFlLElBQUEsQ0FBSTtBQUM5RCxVQUFJcWdCO0FBRUosWUFBTUMsZ0JBQWdCQSxNQUFNO0FBQzNCLFlBQUlDLFNBQVNMLE1BQU1uckI7QUFDbkIsWUFBSSxDQUFDd3JCLFFBQVE7QUFDWjtRQUNEO0FBQ0FBLGlCQUFTQSxPQUFPdnJCO0FBQ2hCLGNBQU13ckIsV0FBV0gsT0FBT2plLE1BQU0sUUFBUTtBQUN0QyxjQUFNcWUsV0FBV0YsT0FBT25lLE1BQU0sUUFBUTtBQUN0QyxZQUFJc2U7QUFDSixjQUFNQyxTQUFTQSxDQUFDQyxNQUFNQyxTQUFTO0FBQzlCLGdCQUFNMW5CLFNBQVMsQ0FBQTtBQUNmLGNBQUkybkI7QUFDSixjQUNDQztBQUNELGNBQUlILEtBQUtqakIsU0FBU2tqQixLQUFLbGpCLFFBQVE7QUFDOUJtakIsbUJBQU9EO0FBQ1BFLG1CQUFPSDtVQUNSLE9BQU87QUFDTkUsbUJBQU9GO0FBQ1BHLG1CQUFPRjtVQUNSO0FBQUEsY0FBQUcsYUFBQW5ULDJCQUNtQmlULElBQUEsR0FBQUc7QUFBQSxjQUFBO0FBQW5CLGlCQUFBRCxXQUFBdGUsRUFBQSxHQUFBLEVBQUF1ZSxTQUFBRCxXQUFBalQsRUFBQSxHQUFBakUsUUFBeUI7QUFBQSxvQkFBZG9YLE9BQUFELE9BQUFqc0I7QUFDVixvQkFBTW1zQixNQUFNSixLQUFLL2YsUUFBUWtnQixJQUFJO0FBQzdCLGtCQUFJQyxRQUFRLElBQUk7QUFDZmhvQix1QkFBT0EsT0FBT3dFLE1BQU0sSUFBSXVqQjtjQUN6QixPQUFPO0FBQ05ILHFCQUFLalAsT0FBT3FQLEtBQUssQ0FBQztjQUNuQjtZQUNEO1VBQUEsU0FBQWpULEtBQUE7QUFBQThTLHVCQUFBcnNCLEVBQUF1WixHQUFBO1VBQUEsVUFBQTtBQUFBOFMsdUJBQUE3UyxFQUFBO1VBQUE7QUFDQSxpQkFBTyxDQUFDLEdBQUdoVixRQUFRLEdBQUc0bkIsSUFBSTtRQUMzQjtBQUNBTCxlQUFPQyxPQUFPSCxVQUFVQyxRQUFRO0FBQ2hDLFlBQUlDLEtBQUsvaUIsU0FBUyxHQUFHO0FBQ3BCK2lCLGlCQUFPQSxLQUFLVSxPQUFRQyxPQUFNO0FBQ3pCQSxnQkFBSUEsRUFBRTNqQixLQUFLO0FBQ1gsbUJBQU8yakIsS0FBSyxDQUFDakIsVUFBVXprQixLQUFLMGxCLENBQUM7VUFDOUIsQ0FBQztRQUNGO0FBQ0EsWUFBSVgsS0FBSy9pQixXQUFXLEdBQUc7QUFDdEIwaUIsbUJBQVNFO0FBQ1QsaUJBQU87UUFDUjtNQUNEO0FBQ0EsVUFDQ2ptQixLQUFLSSxhQUFhLFlBQ2xCSixLQUFLb0IsZUFDTHdrQixTQUNBQSxNQUFNMXFCLGFBQ05wQyxTQUFTQyxjQUFjLFdBQVcsR0FDakM7QUFDRCxjQUFNaXVCLE1BQU1wQixNQUFNMXFCO0FBQ2xCLGNBQU0rckIsT0FBT3JCLE1BQU03VDtBQUNuQixZQUFJaVYsSUFBSXRzQixTQUFTdXNCLEtBQUt2c0IsVUFBVTRJLEdBQUd6QyxXQUFXO0FBRzdDb21CLGVBQUt2c0IsUUFBUXVzQixLQUFLdnNCLE1BQU1DLFFBQVEySSxHQUFHekMsV0FBVyxrQ0FBa0M7QUFFaEYsZ0JBQU1xbUIsTUFBTTF0QixFQUFFLFNBQVMsRUFDckJDLEtBQUs7WUFDTG9ELE1BQU07WUFDTmdJLE1BQU07VUFDUCxDQUFDLEVBQ0F6SixJQUFJa0ksR0FBR3pDLFNBQVM7QUFDbEJySCxZQUFFb3NCLEtBQUssRUFBRTNyQixPQUFPaXRCLEdBQUc7QUFDbkJuQixtQkFBU0gsTUFBTW5yQixXQUFXQztBQUMxQixnQkFBTXFELFFBQVF2RSxFQUFFLE1BQU07QUFDdEJ1RSxnQkFBTUMsS0FBSyxvQkFBb0IsRUFBRTVELElBQUksU0FBUyxNQUFNO0FBQ25ELGdCQUFJOHNCLElBQUk5ckIsSUFBSSxHQUFHO0FBQ2Q0ckIsa0JBQUl0c0IsUUFBUXNzQixJQUFJdHNCLE1BQU1DLFFBQ3JCMkUsV0FBVyxnQkFBZ0IsS0FBS0EsV0FBVyxpQkFBaUIsR0FDNUQsRUFDRDtZQUNEO1VBQ0QsQ0FBQztBQUNELGdCQUFNNm5CLGtCQUFrQkEsTUFBTTtBQUM3QjN0QixjQUFFb3NCLE1BQU1uckIsVUFBVSxFQUNoQitGLElBQUl3bUIsR0FBRyxFQUNQNXNCLElBQUksU0FBUyxNQUFNO0FBQ25CdWIseUJBQVcsTUFBTTtBQUNoQixvQkFBSXFRLGNBQWMsR0FBRztBQUNwQm1CLGtDQUFnQjtnQkFDakIsT0FBTztBQUNORCxzQkFBSTlyQixJQUFJLEVBQUU7Z0JBQ1g7Y0FDRCxHQUFHLEdBQUc7WUFDUCxDQUFDO1VBQ0g7QUFDQStyQiwwQkFBZ0I7UUFDakI7TUFDRDtJQUNEO0FBRUE3akIsT0FBR2IsV0FBVzJrQixPQUFPQyxTQUFTL2pCLEdBQUdiLFVBQVUsRUFBRTtBQUM3QyxRQUFJMmtCLE9BQU9FLE1BQU1oa0IsR0FBR2IsUUFBUSxLQUFLYSxHQUFHYixXQUFXLEdBQUc7QUFDakRhLFNBQUdiLFdBQVc7SUFDZjtBQUNBYSxPQUFHYixXQUFXdUgsS0FBS3VkLElBQUlqa0IsR0FBR2IsVUFBVSxFQUFFO0FBRXRDLGFBQUEra0IsTUFBQSxHQUFBQyxrQkFBc0N4a0IsT0FBT3lrQixRQUFRMVAsaUJBQWlCLEdBQUF3UCxNQUFBQyxnQkFBQXBrQixRQUFBbWtCLE9BQUc7QUFBekUsWUFBVyxDQUFDam9CLEtBQUtvb0IsZ0JBQWdCLElBQUFGLGdCQUFBRCxHQUFBO0FBQ2hDLFVBQUk7QUFDSCxZQUFJam9CLE9BQU9ELFdBQUEsZ0JBQUE1RixPQUEyQjZGLEdBQUcsQ0FBRSxHQUFHO0FBQzdDb29CLDJCQUFpQjlpQixPQUFPdkYsV0FBQSxnQkFBQTVGLE9BQTJCNkYsR0FBRyxDQUFFO1FBQ3pEO01BQ0QsUUFBUTtBQUNQO01BQ0Q7SUFDRDtBQUVBc00sYUFBU2hRLFNBQVMvQyxTQUFTQyxjQUFjLE1BQU0sR0FBRyxLQUFLO0FBQ3ZELFFBQUksQ0FBQzhTLFFBQVE7QUFDWixVQUFJL1MsU0FBUzh1QixlQUFlOXVCLFNBQVM4dUIsWUFBWUMsa0JBQWtCO0FBRWxFaGMsaUJBQVMvUyxTQUFTOHVCLFlBQ2hCQyxpQkFBaUIvdUIsU0FBU0MsY0FBYyxNQUFNLEdBQUcsSUFBSSxFQUNyRCt1QixpQkFBaUIsV0FBVztNQUMvQixXQUFXdHVCLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRXV1QixjQUFjO0FBRXJDbGMsaUJBQVNyUyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUV1dUIsYUFBYUM7TUFDcEMsT0FBTztBQUVObmMsaUJBQVNyUyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUwZ0IsTUFBTThOO01BQzdCO0FBQ0FuYyxlQUFTQSxXQUFXO0lBQ3JCO0VBQ0Q7QUFDQSxRQUFNb2MsV0FBV0EsTUFBTTtBQUN0QixXQUFPbnZCLFNBQVNDLGNBQWMsVUFBVSxNQUFNO0VBQy9DO0FBRUEsUUFBTW12QixZQUFZLFdBQVk7QUFFN0IsYUFBQUMsTUFBQSxHQUFBQyxZQUFtQmxkLFNBQUFpZCxNQUFBQyxVQUFBL2tCLFFBQUE4a0IsT0FBUztBQUE1QixZQUFXL1csT0FBQWdYLFVBQUFELEdBQUE7QUFDVixVQUFJL1csS0FBS3JYLFVBQVVxUyxNQUFNO0FBQ3hCZ0YsYUFBSzZLLE9BQU87TUFDYixXQUFXN0ssS0FBS3JYLFVBQVVzUyxnQkFBZ0I7QUFDekMrRSxhQUFLMk0sY0FBYztBQUNuQixjQUFNcmpCLFFBQVEwVyxLQUFLelgsS0FBS2UsTUFBTTRhLE1BQU0sR0FBRztBQUN2QyxZQUFJL1YsTUFBTTtBQUNWLFlBQUk3RSxNQUFNMkksU0FBUyxHQUFHO0FBQ3JCLFdBQUEsRUFBRzlELEdBQUcsSUFBSTdFO1FBQ1g7QUFDQSxjQUFNeUksSUFBSXpJLE1BQU0sQ0FBQyxFQUFFQyxRQUFRLE1BQU0sR0FBRyxFQUFFeUksS0FBSztBQUMzQyxZQUFJRCxFQUFFRSxXQUFXLEdBQUc7QUFDbkIrTixlQUFLNkssT0FBTztRQUNiLE9BQU87QUFDTjdLLGVBQUtHLGtCQUFrQnBPO0FBQ3ZCaU8sZUFBS0ksYUFBYWpTO0FBQ2xCNlIsZUFBS3dKLGdCQUFnQixLQUFLeEg7QUFDMUJoQyxlQUFLdFQsTUFBTTtRQUNaO01BQ0Q7SUFDRDtFQUNEO0FBQ0EsUUFBTXVxQixlQUFlQSxNQUFNO0FBQzFCcGQsZUFBVztBQUVYLFFBQUlxZCxLQUFLeHZCLFNBQVNDLGNBQWMsMEJBQTBCLEtBQUtELFNBQVNDLGNBQWMsd0JBQXdCO0FBQzlHLFFBQUksQ0FBQ3V2QixJQUFJO0FBQ1JBLFdBQUt4dkIsU0FBU0MsY0FBYyx3QkFBd0I7QUFDcEQsYUFBT3V2QixNQUFNQSxHQUFHbm9CLFNBQVNzRCxZQUFZLE1BQU0sU0FBUztBQUNuRDZrQixhQUFLQSxHQUFHMVI7TUFDVDtJQUNEO0FBQ0EsUUFBSSxDQUFDMFIsSUFBSTtBQUNSO0lBQ0Q7QUFDQSxVQUFNQyxXQUFXenZCLFNBQVNDLGNBQWMsMkJBQTJCO0FBQ25FLFVBQU15dkIsV0FBVzF2QixTQUFTQyxjQUFjLHdCQUF3QjtBQUNoRSxRQUFLd3ZCLFlBQVksQ0FBQyxDQUFDQSxTQUFTN3RCLFNBQVc4dEIsYUFBYUEsU0FBU25hLFlBQVltYSxTQUFTaEwsV0FBWTtBQUM3RjtJQUNEO0FBRUEsVUFBTWlMLFlBQVk3aUIsS0FBSyxJQUFJO0FBQzNCLFVBQU04aUIsV0FBVzlpQixLQUFLLElBQUk7QUFFMUJvRixjQUFVcEYsS0FBSyxLQUFLO0FBQ3BCb0YsWUFBUWhFLFlBQVk7QUFDcEJnRSxZQUFROU4sS0FBSztBQUNiOE4sWUFBUWtQLE1BQU15TyxZQUFZOWMsU0FBUyxVQUFVO0FBRTdDYixZQUFRa1AsTUFBTTBPLFNBQVM7QUFDdkI1ZCxZQUFRa1AsTUFBTTJPLFNBQVM7QUFDdkJILGFBQVN6dUIsT0FBTytRLE9BQU87QUFFdkIsVUFBTStSLFFBQVE7QUFDZCxRQUFJQSxPQUFPO0FBQ1YwTCxnQkFBVXZyQixLQUFLO0FBQ2Z1ckIsZ0JBQVV4dUIsT0FBTzhpQixLQUFLO0lBQ3ZCLE9BQU87QUFDTjBMLGdCQUFVdnJCLEtBQUs7QUFDZnVyQixnQkFBVXh1QixPQUFPMkwsS0FBS3RHLFdBQVcsWUFBWSxHQUFHLElBQUksQ0FBQztJQUN0RDtBQUNBbXBCLGNBQVV6aEIsWUFBWTtBQUN0QnloQixjQUFVdk8sTUFBTXlPLFlBQVk7QUFDNUJGLGNBQVV2TyxNQUFNNE8sZ0JBQWdCO0FBRWhDLFVBQU14TixPQUFPeGlCLFNBQVNDLGNBQWMsU0FBUyxLQUFLRCxTQUFTQyxjQUFjLGlCQUFpQjtBQUMxRixRQUFJdWlCLE1BQU07QUFDVCxZQUFNeU4sU0FBU1QsR0FBR1UsVUFBVSxFQUFFO0FBQzlCRCxhQUFPOXVCLE9BQU93dUIsU0FBUztBQUN2Qk0sYUFBTzl1QixPQUFPeXVCLFFBQVE7QUFDdEJwTixXQUFLM0UsaUJBQWlCLFVBQVUsQ0FBQ3NTLGNBQWN6cEIsU0FBUztBQUN2RCxnQkFBUSxNQUFNO0FBQ2IsY0FBSTBwQixZQUFZO0FBQ2hCLGNBQUlELFdBQVc7QUFDZCxnQkFBSSxPQUFPQSxjQUFjLFVBQVU7QUFFbENDLDBCQUFZdHdCLE9BQU91d0IsS0FBS0YsU0FBUztZQUNsQyxXQUFXQSxxQkFBcUJHLFVBQVU7QUFDekNGLDBCQUFZRCxVQUFVMWEsTUFBTStNLE1BQU0sQ0FBQzJOLFdBQVcsR0FBR3pwQixJQUFJLENBQUM7WUFDdkQ7VUFDRDtBQUNBLGNBQUksQ0FBQzBwQixXQUFXO0FBQ2YsbUJBQU87VUFDUjtBQUNBaEIsb0JBQVU7QUFFVixnQkFBTW1CLEtBQ0x2d0IsU0FBU0MsY0FBYyxvQ0FBb0MsS0FDM0RELFNBQVNDLGNBQWMsU0FBUztBQUNqQyxjQUFJdXdCLFdBQVc7QUFDZixtQkFBQUMsTUFBQSxHQUFBQyxZQUFxQnRlLFNBQUFxZSxNQUFBQyxVQUFBbm1CLFFBQUFrbUIsT0FBUztBQUE5QixrQkFBV3hVLFNBQUF5VSxVQUFBRCxHQUFBO0FBQ1Ysa0JBQU12SCxJQUFJak4sT0FBT3hEO0FBQ2pCLGdCQUFJLENBQUN5USxHQUFHO0FBQ1A7WUFDRDtBQUNBLGtCQUFNemlCLE1BQU13VixPQUFPdkQ7QUFDbkIsa0JBQU1pWSxVQUFBLEtBQUEvdkIsT0FBZTRKLEdBQUdtQyxvQkFBa0IsR0FBQSxFQUFBL0wsT0FBSXNvQixDQUFDLEVBQUF0b0IsT0FBRzZGLE1BQUEsSUFBQTdGLE9BQVU2RixHQUFHLElBQUssSUFBRSxJQUFBO0FBRXRFLGtCQUFNcUosY0FBYyxJQUFJekUsT0FDdkIsTUFBTXpLLE9BQU8sU0FBU29LLE9BQU9DLElBQUEybEIscUJBQUFBLG1CQUFBemxCLHVCQUFBLENBQUEsYUFBQSxHQUFBLENBQUEsaUJBQUEsQ0FBQSxFQUFBLEdBQW9CLFFBQVEsR0FBRyxHQUM1RCxHQUNEO0FBQ0Esa0JBQU0wbEIsZUFBZU4sR0FBRzN1QixNQUFNQyxRQUFRLHFCQUFxQixFQUFFLEVBQUVBLFFBQVFpTyxXQUFXO0FBQ2xGLGdCQUFJLENBQUNMLGNBQWNvaEIsY0FBYzNILEdBQUcsSUFBSSxHQUFHO0FBQzFDcUgsaUJBQUczdUIsU0FBQSxLQUFBaEIsT0FBYyt2QixPQUFPO0FBQ3hCSCx5QkFBVztZQUNaO1VBQ0Q7QUFDQSxjQUFJQSxVQUFVO0FBRWIsa0JBQU1NLFFBQVEsSUFBSXpsQixPQUFPLE1BQU16SyxPQUFPLFFBQVEsRUFBRUEsT0FBTyxPQUFPLEdBQUcsR0FBRztBQUNwRTJ2QixlQUFHM3VCLFFBQVEydUIsR0FBRzN1QixNQUFNQyxRQUFRaXZCLE9BQU8sRUFBRTtVQUN0QztBQUNBLGlCQUFPO1FBQ1IsR0FBR3RPLEtBQUt1TyxRQUFRO01BQ2pCLENBQUM7SUFDRjtFQUNEO0FBQ0EsTUFBSUMsY0FBYztBQUNsQixRQUFNQyxXQUFXQSxDQUFDO0lBQUNsUTtFQUFVLE1BQU07QUFDbEMsUUFBSUEsV0FBV21RLGFBQWFDLEtBQUtDLGNBQWM7QUFDOUMsYUFBTztJQUNSO0FBQ0EsUUFBSUMsV0FBV2p1QixNQUFNMmQsV0FBV3VRLGFBQWEsTUFBTSxDQUFDO0FBQ3BELFFBQUksQ0FBQ0QsVUFBVTtBQUNkLGFBQU87SUFDUjtBQUNBQSxlQUFXQSxTQUFTdmpCLE1BQU11akIsU0FBU3pqQixRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUvTCxRQUFRLE1BQU0sR0FBRztBQUN0RSxRQUFJMkksR0FBR3RCLGFBQWFzQixHQUFHdEIsVUFBVVgsS0FBSzhvQixRQUFRLEdBQUc7QUFDaEQsYUFBTztJQUNSO0FBQ0EsVUFBTXRyQixTQUFTO01BQ2QzQyxPQUFPaXVCO01BQ1ByaUIsT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFO0lBQ25CO0FBQ0EsUUFBSXdELGFBQWEsTUFBTTtBQUN0QixhQUFPek07SUFDUjtBQUNBLFFBQUlpckIsZ0JBQWdCLE1BQU07QUFDekIsWUFBTWxoQixjQUFjLElBQUl6RSxPQUFPLE1BQU16SyxPQUFPLFNBQVNvSyxPQUFPQyxJQUFBc21CLHFCQUFBQSxtQkFBQXBtQix1QkFBQSxDQUFBLGFBQUEsR0FBQSxDQUFBLGlCQUFBLENBQUEsRUFBQSxHQUFvQixRQUFRLEdBQUcsR0FBRyxHQUFHO0FBQ2pHNmxCLG9CQUFjeGUsU0FBUzNRLFFBQVEscUJBQXFCLEVBQUUsRUFBRUEsUUFBUWlPLGFBQWEsRUFBRTtJQUNoRjtBQUNBL0osV0FBT2lKLFFBQVFTLGNBQWN1aEIsYUFBYUssVUFBVSxJQUFJO0FBQ3hELFdBQU90ckI7RUFDUjtBQUNBLE1BQUl5ckIsY0FBYztBQUNsQixNQUFJQyxlQUFlO0FBQ25CLFFBQU1DLGNBQWNBLENBQUNDLE9BQU83dEIsS0FBS29LLGNBQWM7QUFDOUMsVUFBTW5JLFNBQVNyRixFQUFFaXhCLEtBQUssRUFBRXpzQixLQUFBLEdBQUF0RSxPQUFRa0QsS0FBRyxHQUFBLEVBQUFsRCxPQUFJc04sU0FBUyxDQUFFO0FBQ2xELFdBQU9uSSxVQUFVQSxPQUFPd0UsU0FBUyxJQUFJeEUsT0FBTyxDQUFDLElBQUk7RUFDbEQ7QUFDQSxRQUFNNnJCLFFBQVNDLG9CQUFtQjtBQUNqQyxRQUFJTCxhQUFhO0FBQ2hCO0lBQ0Q7QUFDQUEsa0JBQWM7QUFDZCxRQUFJQyxjQUFjO0FBQ2pCM3hCLGFBQU9neUIsYUFBYUwsWUFBWTtBQUNoQ0EscUJBQWU7SUFDaEI7QUFHQXZmLGdCQUFBQSxVQUFZbFMsU0FBU0MsY0FBYyxxQkFBcUI7QUFDeEQsVUFBTTh4QixhQUFhL3hCLFNBQVNDLGNBQWMscUJBQXFCO0FBQy9ELFFBQUksQ0FBQ2lTLFNBQVM7QUFDYixVQUFJOGYsU0FBUztBQUNiLFVBQUksQ0FBQ0QsWUFBWTtBQUNoQkMsaUJBQVNOLFlBQVkxeEIsVUFBVSxPQUFPLGFBQWE7QUFDbkQsWUFBSSxDQUFDZ3lCLFFBQVE7QUFDWjtRQUNEO01BQ0Q7QUFDQTlmLGdCQUFVcEYsS0FBSyxLQUFLO0FBQ3BCb0YsY0FBUTlOLEtBQUs7QUFDYjhOLGNBQVFrUCxNQUFNeU8sWUFBWTljLFNBQVMsVUFBVTtBQUU3QyxZQUFNa1IsUUFBUW5YLEtBQUssR0FBRztBQUN0Qm1YLFlBQU1wZSxPQUFPcUIsS0FBSytHLGNBQWNwTSxRQUFRLE1BQU0sb0JBQW9CO0FBQ2xFb2lCLFlBQU03Z0IsUUFBUW9ELFdBQVcsWUFBWTtBQUNyQ3lkLFlBQU05aUIsT0FBTzJMLEtBQUt0RyxXQUFXLFlBQVksR0FBRyxJQUFJLENBQUM7QUFDakQwTCxjQUFRL1EsT0FBTzhpQixLQUFLO0FBQ3BCL1IsY0FBUS9RLE9BQU8yTCxLQUFLLEtBQUssSUFBSSxDQUFDO0FBRTlCLFVBQUltbEIsWUFBWUYsYUFBYUEsV0FBV2pVLGFBQWE5ZCxTQUFTQyxjQUFjLFdBQVc7QUFDdkYsVUFBSSxDQUFDZ3lCLFdBQVc7QUFDZkEsb0JBQVlubEIsS0FBSyxLQUFLO0FBQ3RCbWxCLGtCQUFVN3RCLEtBQUs7QUFDZjR0QixlQUFPbFUsV0FBV3dELGFBQWEyUSxXQUFXRCxPQUFPelEsV0FBVztNQUM3RDtBQUNBMFEsZ0JBQVUvakIsWUFBWTtBQUN0QitqQixnQkFBVTdRLE1BQU01YyxVQUFVO0FBQzFCLFVBQUl1dEIsWUFBWTtBQUNmQSxtQkFBVzlnQixPQUFPaUIsT0FBTztNQUMxQixPQUFPO0FBQ04rZixrQkFBVTl3QixPQUFPK1EsT0FBTztNQUN6QjtJQUNEO0FBQ0EsUUFBSWEsUUFBUTtBQUNYYixjQUFRME8sTUFBTTtJQUNmO0FBRUEsVUFBTXNSLGdCQUFnQkEsQ0FBQ3hSLE1BQU1wUSxjQUFjO0FBQzFDLFVBQUlyRTtBQUNKLFVBQUkyTixPQUFPOEcsS0FBS3lSLGlCQUFpQixJQUFJO0FBQ3JDLFVBQUl2WSxLQUFLclAsU0FBUyxHQUFHO0FBQ3BCNkksaUJBQVM7QUFDVHNOLGVBQU85RyxLQUFLLENBQUMsRUFBRWtFO01BQ2hCLE9BQU87QUFDTmxFLGVBQU84RyxLQUFLeVIsaUJBQWlCLE1BQU07TUFDcEM7QUFFQSxZQUFNQyxXQUFXQyxNQUFNelosS0FBSztRQUMzQnJPLFFBQVFxUCxLQUFLclA7TUFDZCxDQUFDO0FBQ0QsV0FBSzBCLElBQUksR0FBR0EsSUFBSTJOLEtBQUtyUCxRQUFRMEIsS0FBSztBQUNqQ21tQixpQkFBU25tQixDQUFDLElBQUkyTixLQUFLM04sQ0FBQztNQUNyQjtBQUNBLFdBQUtBLElBQUksR0FBR0EsSUFBSW1tQixTQUFTN25CLFFBQVEwQixLQUFLO0FBQ3JDLGNBQU0xRCxPQUFPMG9CLFNBQVNtQixTQUFTbm1CLENBQUMsQ0FBQztBQUNqQyxZQUFJMUQsU0FBUyxRQUFRQSxLQUFLeUcsVUFBVSxRQUFRMFIsTUFBTTtBQUNqRCxjQUFJSCxlQUFlRyxNQUFNMFIsU0FBU25tQixDQUFDLEdBQUcxRCxLQUFLbkYsT0FBT21GLEtBQUt5RyxNQUFNLENBQUMsR0FBR3NCLFNBQVM7UUFDM0U7TUFDRDtBQUNBLGFBQU84aEIsU0FBUzduQixTQUFTLElBQUk2bkIsU0FBU0UsR0FBRyxFQUFFLElBQUk7SUFDaEQ7QUFDQSxVQUFNQyxXQUFXTCxjQUFjaGdCLFNBQVMsS0FBSztBQUU3QyxRQUFJcU8sZUFBZW5OLFNBQVNsQixRQUFRaWdCLGlCQUFpQixJQUFJLEVBQUUsQ0FBQyxJQUFJamdCLFNBQVMsTUFBTSxNQUFNcWdCLGFBQWEsTUFBTSxLQUFLO0FBQzdHLFFBQUksQ0FBQ3BnQixVQUFVO0FBQ2QsVUFBSUssYUFBYSxRQUFRdWYsWUFBWTtBQUNwQyxZQUFJaGYsUUFBUTtBQUNYZ2YscUJBQVduUixNQUFNO1FBQ2xCO0FBQ0FzUixzQkFBY0gsWUFBWSxJQUFJO01BQy9CO0FBRUEsWUFBTVMsY0FBYzFsQixLQUFLLE1BQU07QUFDL0IwbEIsa0JBQVl0a0IsWUFBWTtBQUN4QixVQUFJNkUsUUFBUTtBQUNYeWYsb0JBQVk1UixNQUFNO01BQ25CO0FBQ0ExTyxjQUFRb1AsYUFBYWtSLGFBQWF0Z0IsUUFBUTZPLFdBQVdRLFdBQVc7QUFDaEVpUixrQkFBWXJ4QixPQUFPMkwsS0FBSyxLQUFVLElBQUksQ0FBQztBQUN2Q3lGLGtCQUFZekYsS0FBSyxNQUFNO0FBQ3ZCMGxCLGtCQUFZcnhCLE9BQU9vUixTQUFTO0FBQzVCQSxnQkFBVWtnQixZQUFBLE9BQUE3eEIsT0FBbUI0SixHQUFHeEMsVUFBUSxPQUFBO0FBQ3hDLFlBQU0sQ0FBQ3daLElBQUksSUFBSWpQLFVBQVU0ZixpQkFBaUIsR0FBRztBQUM3QzNRLFdBQUszRCxpQkFBaUIsU0FBVStFLFdBQVU7QUFDekNoRixzQkFBYztBQUNkSSx3QkFBZ0I7QUFDaEIsZUFBT2pNLFFBQVE2USxLQUFLO01BQ3JCLENBQUM7QUFDRHBCLFdBQUtwZSxRQUFRb0QsV0FBVyxlQUFlO0FBQ3ZDZ2IsV0FBS0osTUFBTXNSLFNBQVM7SUFDckI7QUFDQTFCLGtCQUFjO0FBQ2QsUUFBSWEsMEJBQTBCdkIsVUFBVTtBQUN2Q3VCLHFCQUFlO0lBQ2hCO0FBQ0FseUIsT0FBR2d6QixLQUFLLGNBQWMsRUFBRUMsS0FBSztBQUM3Qmx5QixNQUFFLE1BQU0sRUFBRXlFLFFBQVEsc0JBQXNCO0VBQ3pDO0FBQ0EsUUFBTTB0QixtQkFBbUJBLE1BQU07QUFDOUIsUUFBSXZnQixZQUFZO0FBQ2Y7SUFDRDtBQUNBLFVBQU13Z0IsZ0JBQWdCaG1CLEtBQUssS0FBSztBQUNoQ2dtQixrQkFBYzFSLE1BQU01YyxVQUFVO0FBQzlCeEUsYUFBU0MsY0FBYyxNQUFNLEVBQUVrQixPQUFPMnhCLGFBQWE7QUFDbkRBLGtCQUFjTCxZQUFBLG1GQUFBN3hCLE9BQ2JzRyxLQUFLeUcsVUFDTixTQUFBLEVBQUEvTSxPQUFVMk4sbUJBQ1RySCxLQUFLNE8sVUFDTixHQUFDLDJEQUFBLDRDQUFBbFYsT0FBc0dzRyxLQUFLNnJCLG9CQUFrQixJQUFBLEdBQUEsd3RCQUFBO0FBQzlIemdCLGlCQUFhdFMsU0FBU0MsY0FBYyxtQkFBbUI7RUFDeEQ7QUFDQSxRQUFNK3lCLFVBQVVBLE1BQU07QUFFckIsUUFBSTlyQixLQUFLb0IsYUFBYTtBQUNyQixZQUFNcEYsU0FBUztRQUNkQyxRQUFRO1FBQ1J1UyxRQUFRO1FBQ1JDLGVBQWU7UUFDZkMsYUFBYTtRQUNiQyxRQUFRM08sS0FBSzRPO1FBQ2JDLE1BQU0sQ0FBQyxRQUFRLFdBQVc7UUFDMUJFLFFBQVEsQ0FBQyxXQUFXLGFBQWEsS0FBSztRQUN0Q0UsU0FBUztRQUNURSxXQUFXblAsS0FBS29QO1FBQ2hCSixTQUFTO1FBQ1RNLE1BQU0sQ0FBQyxVQUFVO01BQ2xCO0FBQ0FoTSxTQUFHa1MsUUFBU25aLFVBQVM7QUFDcEJtUSxnQkFBUW5RLElBQUk7QUFDWnF1QixjQUFNaUIsZ0JBQWdCO01BQ3ZCO0FBQ0EzeUIsVUFBSUwsSUFBSXFELE1BQU0sRUFBRWdCLEtBQU1YLFVBQVM7QUFDOUJpSCxXQUFHa1MsTUFBTW5aLElBQUk7TUFDZCxDQUFDO0FBQ0RrdUIscUJBQWU1VSxXQUFXLE1BQU07QUFDL0IrVSxjQUFNaUIsZ0JBQWdCO01BQ3ZCLEdBQUcsR0FBSTtJQUNSLE9BQU87QUFFTixVQUFJM3JCLEtBQUtpQixzQkFBc0IsR0FBRztBQUNqQztNQUNEO0FBQ0FxSyxpQkFBVztBQUNYQyxpQkFBVztBQUNYbWYsWUFBTWlCLGdCQUFnQjtJQUN2QjtFQUNEO0FBQ0EsUUFBTUksV0FBWWh5QixXQUFVO0FBQzNCLFVBQU0yWSxPQUFPM1ksTUFBTXViLE1BQU0sSUFBSTtBQUM3QixRQUFJNUMsS0FBS3JQLFdBQVcsR0FBRztBQUN0QixhQUFPO0lBQ1I7QUFDQSxRQUFJaW5CLGVBQWVwZixRQUFRN0gsV0FBVyxLQUFLNkgsUUFBUSxDQUFDLEVBQUV5TyxlQUFlO0FBRXBFLFlBQU1xUyxXQUFXLENBQUE7QUFDakIsWUFBTWppQixTQUFTbUIsUUFBUTdILFdBQVcsSUFBSTZILFFBQVEsQ0FBQyxFQUFFdU8sT0FBTztBQUN4RCxVQUFJMVU7QUFDSixXQUFLQSxJQUFJLEdBQUdBLElBQUkyTixLQUFLclAsUUFBUTBCLEtBQUs7QUFDakMsWUFBSTJOLEtBQUszTixDQUFDLEVBQUUxQixXQUFXLEdBQUc7QUFDekI7UUFDRDtBQUNBLFlBQUlzUSxNQUFNakIsS0FBSzNOLENBQUMsRUFBRXVRLE1BQU0sR0FBRztBQUMzQixjQUFNL1YsTUFBTW9VLElBQUl0USxTQUFTLElBQUlzUSxJQUFJLENBQUMsSUFBSTtBQUN0QyxTQUFDQSxHQUFHLElBQUlBO0FBQ1IsY0FBTTJHLE9BQU8xVSxLQUFLLEdBQUc7QUFDckIwVSxhQUFLM2IsT0FBT3dJLGFBQUEsR0FBQXpOLE9BQWdCNEosR0FBR21DLG9CQUFrQixHQUFBLEVBQUEvTCxPQUFJaWEsR0FBRyxDQUFFO0FBQzFEMkcsYUFBS3JnQixPQUFPMkwsS0FBSytOLEtBQUssSUFBSSxDQUFDO0FBQzNCMkcsYUFBS3BlLFFBQVF5WDtBQUNiLGNBQU04RixPQUFPN1QsS0FBSyxNQUFNO0FBQ3hCNlQsYUFBS3hmLE9BQU9xZ0IsSUFBSTtBQUNoQixZQUFJLENBQUN2VixHQUFHO0FBQ1BpRyxrQkFBUW9QLGFBQWF4VSxLQUFLLEtBQUssSUFBSSxHQUFHbUUsTUFBTTtRQUM3QztBQUNBQSxlQUFPQSxPQUFPMFAsSUFBSTtBQUNsQixZQUFJMVAsVUFBVWhGLElBQUksSUFBSTJOLEtBQUtyUCxRQUFRO0FBQ2xDakYsaUJBQU9nYyxhQUFheFUsS0FBSyxPQUFPLElBQUksR0FBR21FLE1BQU07UUFDOUM7QUFDQWlpQixpQkFBU0EsU0FBUzNvQixNQUFNLElBQUk7VUFDM0JrVCxTQUFTa0Q7VUFDVHZkLE9BQU95WDtVQUNQcFU7UUFDRDtNQUNEO0FBRUEsVUFBSXdLLFFBQVE7QUFDWEEsZUFBTzZNLFdBQVd3RCxhQUFheFUsS0FBSyxPQUFPLElBQUksR0FBR21FLE1BQU07TUFDekQ7QUFDQSxXQUFLaEYsSUFBSSxHQUFHQSxJQUFJaW5CLFNBQVMzb0IsUUFBUTBCLEtBQUs7QUFDckMsWUFBSXNVLGVBQWVyTyxTQUFTZ2hCLFNBQVNqbkIsQ0FBQyxFQUFFd1IsU0FBU3lWLFNBQVNqbkIsQ0FBQyxFQUFFN0ksT0FBTzh2QixTQUFTam5CLENBQUMsRUFBRXhGLEdBQUc7TUFDcEY7SUFDRDtBQUNBLFdBQU87RUFDUjtBQUNBLFFBQU0wc0IsV0FBV0EsTUFBTTtBQUN0QixRQUFJcHRCLFNBQVM7QUFDYixhQUFBcXRCLE1BQUEsR0FBQUMsWUFBcUJqaEIsU0FBQWdoQixNQUFBQyxVQUFBOW9CLFFBQUE2b0IsT0FBUztBQUE5QixZQUFXblgsU0FBQW9YLFVBQUFELEdBQUE7QUFDVixVQUFJdnlCLE9BQU9vYixPQUFPeEQ7QUFDbEIsWUFBTWhTLE1BQU13VixPQUFPdkQ7QUFDbkIsVUFBSTdYLFFBQVFBLEtBQUswSixTQUFTLEdBQUc7QUFDNUIsWUFBSTlELFFBQVEsTUFBTTtBQUNqQjVGLGtCQUFBLElBQUFELE9BQVk2RixHQUFHO1FBQ2hCO0FBQ0EsWUFBSVYsV0FBVyxNQUFNO0FBQ3BCQSxtQkFBU2xGO1FBQ1YsT0FBTztBQUNOa0Ysb0JBQUEsS0FBQW5GLE9BQWVDLElBQUk7UUFDcEI7TUFDRDtJQUNEO0FBQ0EsV0FBT2tGO0VBQ1I7QUFDQSxRQUFNdXRCLGFBQWFBLE1BQU07QUFDeEI3UyxlQUFXO0FBQ1gsUUFDQyxDQUFDalcsR0FBR3ZCLG1CQUNKL0IsS0FBS2lCLHNCQUFzQixNQUMzQmpCLEtBQUtxc0IsK0JBQStCLFlBQ3BDcnNCLEtBQUsyUSxZQUNKO0FBQ0QwWCxtQkFBYTtBQUNicUMsWUFBTSxNQUFNO0FBRVgsWUFBSTl4QixPQUFPMHpCLGNBQWNBLFdBQVdDLHVCQUF1QjtBQUMxREQscUJBQVdDLHdCQUF3QlIsU0FBU08sV0FBV0MscUJBQXFCO1FBQzdFO01BQ0QsQ0FBQztJQUNGLE9BQU87QUFDTixVQUNDLENBQUN2c0IsS0FBS3dzQixlQUNOeHNCLEtBQUtJLGFBQWEsVUFDbEI2RixNQUFNLE1BQU0sTUFBTSxRQUNsQkEsTUFBTSxPQUFPLE1BQU0sUUFDbkIsQ0FBQ2dpQixTQUFTLEtBQ1Yza0IsR0FBR3ZDLFFBQVEsR0FDVjtBQUNEO01BQ0Q7QUFDQStxQixjQUFRO0lBQ1Q7RUFDRDtBQUNBLFFBQU1XLE1BQU1BLE1BQU07QUFDakIsUUFBSW5wQixHQUFHb3BCLFNBQVM7QUFDZjtJQUNEO0FBQ0FwcEIsT0FBR29wQixVQUFVO0FBQ2JOLGVBQVc7RUFDWjtBQUVBeHpCLFNBQU8rekIsbUJBQW1CLE1BQU07QUFDL0IsV0FBT1YsU0FBUztFQUNqQjtBQUNBcnpCLFNBQU9nMEIsbUJBQW9CN3lCLFdBQVU7QUFDcEMsV0FBT2d5QixTQUFTaHlCLEtBQUs7RUFDdEI7QUFDQW5CLFNBQU9pMEIsb0JBQW9CLE1BQU07QUFDaEMzRSxjQUFVO0VBQ1g7QUFDQTVrQixLQUFHd3BCLGVBQWdCNVksY0FBYTtBQUUvQnpiLE9BQUdnekIsS0FBSyxjQUFjLEVBQUVqckIsSUFBSTBULFFBQVE7RUFDckM7QUFHQSxNQUFJbFUsS0FBS3FzQiwrQkFBK0IsVUFBVTtBQUVqRDV6QixPQUFHZ3pCLEtBQUssVUFBVSxFQUFFanJCLElBQUksTUFBTTtBQUc3QixVQUFJMUgsU0FBU0MsY0FBYyx1QkFBdUIsR0FBRztBQUNwRDtNQUNEO0FBQ0FpUyxnQkFBVTtBQUNWRSxnQkFBVSxDQUFBO0FBQ1ZvZixvQkFBYztBQUNkaG5CLFNBQUdvcEIsVUFBVTtBQUNiRCxVQUFJO0lBQ0wsQ0FBQztFQUNGO0FBR0FqekIsSUFBRWl6QixHQUFHO0FBQ04sR0FBRzsiLAogICJuYW1lcyI6IFsiY2F0Y2hlY2tJbmxpbmVJY29uIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAibXdBcGkiLCAidXNlckFnZW50IiwgImluaXRNd0FwaSIsICJob3RDYXRDaGVjayIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIndpbmRvdyIsICJIb3RDYXRBdXRvUmVtb3ZlQ2hlY2tDYXRPcHRPdXQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJhcGkiLCAiY2hlY2tDYXRlZ29yaWVzUmVnRXhwIiwgInNlbGZOYW1lIiwgInN0b3JhZ2VJdGVtTmFtZSIsICJzdG9yYWdlSXRlbSIsICJzdG9yYWdlIiwgImNyZWF0ZWpJY29uIiwgImljb25DbGFzcyIsICIkIiwgImF0dHIiLCAiY29uY2F0IiwgInRleHQiLCAiY3JlYXRlTm90aWZ5QXJlYSIsICJ0ZXh0Tm9kZSIsICJpY29uIiwgInN0YXRlIiwgImFkZENsYXNzIiwgImFwcGVuZCIsICJjc3MiLCAicGFkZGluZyIsICJvbmUiLCAiZSIsICJfc2VsZiR3cFRleHRib3gxJHZhbHUiLCAic2VsZiIsICJuZXdWYWwiLCAid3BUZXh0Ym94MSIsICJ2YWx1ZSIsICJyZXBsYWNlIiwgImRsZ0J1dHRvbnMiLCAiJGRpYWxvZ0NoZWNrU3RvcmFnZSIsICIkcGVybWFTYXZlSGludCIsICIkdGV4dEhpbnROb2RlIiwgIiRkaWFsb2ciLCAiZG9SZW1vdmUiLCAid3BTdW1tYXJ5IiwgIndyaXRlU3RvcmFnZSIsICJ2YWwiLCAic2V0IiwgIl8kZGlhbG9nQ2hlY2tTdG9yYWdlJCIsICJjaGVja2VkIiwgImRpYWxvZyIsICJfJGRpYWxvZ0NoZWNrU3RvcmFnZSQyIiwgIl9hZGRUb0pTIiwgIl9lIiwgInByZXZlbnREZWZhdWx0IiwgImhhc0NsYXNzIiwgIiRlbCIsICJvZmYiLCAicGFyYW1zIiwgImFjdGlvbiIsICJ0aXRsZSIsICJzdW1tYXJ5IiwgImFwcGVuZHRleHQiLCAiZGF0YSIsICJlZGl0RG9uZSIsICJlZGl0U3RhdCIsICJlcnJvciIsICJub3RpZnkiLCAiY29kZSIsICJpbmZvIiwgInRhZyIsICJ0eXBlIiwgImZhZGVPdXQiLCAicG9zdFdpdGhUb2tlbiIsICJ0aGVuIiwgInByb21wdCIsICJpZCIsICJvbiIsICJmYWRlSW4iLCAiYXBwZW5kVG8iLCAiZGlzcGxheSIsICJ1c2VyIiwgImlzQW5vbiIsICJoaWRlIiwgIm1vZGFsIiwgImNsb3NlT25Fc2NhcGUiLCAid2lkdGgiLCAiYnV0dG9ucyIsICJjbG9zZSIsICIkYm9keSIsICJmaW5kIiwgInRyaWdnZXIiLCAib3BlbiIsICIkYnV0dG9ucyIsICJwYXJlbnQiLCAiZXEiLCAiYnV0dG9uIiwgImljb25zIiwgInByaW1hcnkiLCAiSG90Q2F0QXV0b1JlbW92ZUNoZWNrQ2F0IiwgIiRva0xpbmsiLCAiaHJlZiIsICJkb0VkaXQiLCAicmVzdWx0IiwgIm5vY3JlYXRlIiwgImFqYXgiLCAidXJsIiwgImRhdGFUeXBlIiwgInN1Y2Nlc3MiLCAiY2FjaGUiLCAibG9hZEhvdENhdENoZWNrIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJnZXRNZXNzYWdlIiwgImtleSIsICJhcmdzIiwgIm1lc3NhZ2UiLCAicGxhaW4iLCAiaG90Q2F0TWVzc2FnZXMiLCAid2dVc2VyTGFuZ3VhZ2UiLCAiaW5jbHVkZXMiLCAibWVzc2FnZXMiLCAiaG90Q2F0IiwgImNvbmYiLCAidmFsdWVzIiwgIkhvdENhdCIsICJub2RlTmFtZSIsICJ3Z0FjdGlvbiIsICJsaW5rcyIsICJjaGFuZ2UiLCAicmVtb3ZlIiwgImFkZCIsICJyZXN0b3JlIiwgInVuZG8iLCAiZG93biIsICJ1cCIsICJjaGFuZ2VUYWciLCAiYWRkbXVsdGkiLCAiZGlzYWJsZSIsICJucyIsICJ3Z05hbWVzcGFjZU51bWJlciIsICJuc0lkcyIsICJ3Z05hbWVzcGFjZUlkcyIsICJ3Z0FydGljbGVJZCIsICJ0ZXN0IiwgIndnVGl0bGUiLCAiY3JlYXRvciIsICJ0aW1lZHRleHQiLCAiaW5zdGl0dXRpb24iLCAidW5jYXRfcmVnZXhwIiwgImV4aXN0c1llcyIsICJleGlzdHNObyIsICJ0ZW1wbGF0ZV9jYXRlZ29yaWVzIiwgImNhcGl0YWxpemVQYWdlTmFtZXMiLCAidXBsb2FkX2Rpc2FibGVkIiwgImJsYWNrbGlzdCIsICJiZ19jaGFuZ2VkIiwgIm5vX2F1dG9jb21taXQiLCAiZGVsX25lZWRzX2RpZmYiLCAic3VnZ2VzdF9kZWxheSIsICJlZGl0Ym94X3dpZHRoIiwgInN1Z2dlc3Rpb25zIiwgImZpeGVkX3NlYXJjaCIsICJ1c2VfdXBfZG93biIsICJsaXN0U2l6ZSIsICJzaW5nbGVfbWlub3IiLCAiZG9udF9hZGRfdG9fd2F0Y2hsaXN0IiwgInNob3J0Y3V0cyIsICJhZGRTaG9ydGN1dHMiLCAibWFwIiwgIl9hIiwgImsiLCAiT2JqZWN0IiwgImhhc093biIsICJ2IiwgInRyaW0iLCAibGVuZ3RoIiwgIkhDIiwgInVhIiwgIm5hdmlnYXRvciIsICJ0b0xvd2VyQ2FzZSIsICJpc193ZWJraXQiLCAiY2F0X3ByZWZpeCIsICJub1N1Z2dlc3Rpb25zIiwgIndpa2lUZXh0QmxhbmsiLCAiU3RyaW5nIiwgInJhdyIsICJfdGVtcGxhdGVPYmplY3QiLCAiX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCIsICJ3aWtpVGV4dEJsYW5rUkUiLCAiUmVnRXhwIiwgIndpa2lUZXh0QmxhbmtPckJpZGkiLCAiX3RlbXBsYXRlT2JqZWN0MiIsICJmb3JtYXR0ZWROYW1lc3BhY2VzIiwgIndnRm9ybWF0dGVkTmFtZXNwYWNlcyIsICJuYW1lc3BhY2VJZHMiLCAiYXV0b0xvY2FsaXplIiwgIm5hbWVzcGFjZU51bWJlciIsICJmYWxsYmFjayIsICJjcmVhdGVSZWdleHBTdHIiLCAibmFtZSIsICJyZWdleF9uYW1lIiwgImkiLCAiaW5pdGlhbCIsICJjaGFyQXQiLCAibGwiLCAidWwiLCAidG9VcHBlckNhc2UiLCAiX3RlbXBsYXRlT2JqZWN0MyIsICJjYW5vbmljYWwiLCAicmVnZXhwIiwgImNhdF9uYW1lIiwgImNhdGVnb3J5X2Nhbm9uaWNhbCIsICJjYXRlZ29yeV9yZWdleHAiLCAidGVtcGxhdGVfcmVnZXhwIiwgIm1ha2UiLCAiYXJnIiwgImxpdGVyYWwiLCAiY3JlYXRlVGV4dE5vZGUiLCAiY3JlYXRlRWxlbWVudCIsICJwYXJhbSIsICJ1cmkiLCAibG9jYXRpb24iLCAicmUiLCAibSIsICJleGVjIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJzY3JpcHQiLCAid2dTY3JpcHQiLCAiaW5kZXhPZiIsICJ3Z1NlcnZlciIsICJzbGljZSIsICJwcm90b2NvbCIsICJwcmVmaXgiLCAid2dBcnRpY2xlUGF0aCIsICJjbGFzc05hbWUiLCAiY2FwaXRhbGl6ZSIsICJzdHIiLCAid2lraVBhZ2VQYXRoIiwgInBhZ2VOYW1lIiwgImVuY29kZVVSSUNvbXBvbmVudCIsICJlc2NhcGVSRSIsICJfdGVtcGxhdGVPYmplY3Q0IiwgInN1YnN0aXR1dGVGYWN0b3J5IiwgIm9wdGlvbnMiLCAibGVhZCIsICJpbmRpY2F0b3IiLCAibGJyYWNlIiwgInJicmFjZSIsICJtYXRjaCIsICJpZHgiLCAiYWxwaGEiLCAicmVwbGFjZW1lbnQiLCAicmVwbGFjZVNob3J0Y3V0cyIsICJyZXBsYWNlSGFzaCIsICJzIiwgImZpbmRDYXRzUkUiLCAicmVwbGFjZUJ5QmxhbmtzIiwgImZpbmRfY2F0ZWdvcnkiLCAid2lraXRleHQiLCAiY2F0ZWdvcnkiLCAib25jZSIsICJjYXRfcmVnZXgiLCAibm93aWtpUmVnZXgiLCAiX3RlbXBsYXRlT2JqZWN0NSIsICJjb3BpZWR0ZXh0IiwgImN1cnJfbWF0Y2giLCAiaW50ZXJsYW5ndWFnZVJFIiwgImNoYW5nZV9jYXRlZ29yeSIsICJ0b1JlbW92ZSIsICJ0b0FkZCIsICJpc19oaWRkZW4iLCAiZmluZF9pbnNlcnRpb25wb2ludCIsICJfd2lraXRleHQiLCAiX3RlbXBsYXRlT2JqZWN0NiIsICJpbmRleCIsICJsYXN0SW5kZXgiLCAib25DYXQiLCAibmFtZVNwYWNlIiwgImtleUNoYW5nZSIsICJtYXRjaGVzIiwgImNhdF9wb2ludCIsICJiZWZvcmUiLCAiTWF0aCIsICJtYXgiLCAiYWZ0ZXIiLCAic2VhcmNoIiwgImoiLCAicG9pbnQiLCAibmV3Y2F0c3RyaW5nIiwgInN1ZmZpeCIsICJ0eHQiLCAiZXZ0S2V5cyIsICJjdHJsS2V5IiwgIm1ldGFLZXkiLCAic2hpZnRLZXkiLCAiZXZ0S2lsbCIsICJzdG9wUHJvcGFnYXRpb24iLCAiY2FuY2VsQnViYmxlIiwgImNhdExpbmUiLCAib25VcGxvYWQiLCAiZWRpdG9ycyIsICJjb21taXRCdXR0b24iLCAiY29tbWl0Rm9ybSIsICJtdWx0aVNwYW4iLCAicGFnZVRleHQiLCAicGFnZVRpbWUiLCAicGFnZVdhdGNoZWQiLCAid2F0Y2hDcmVhdGUiLCAid2F0Y2hFZGl0IiwgIm1pbm9yRWRpdHMiLCAiZWRpdFRva2VuIiwgImlzX3J0bCIsICJzZXJ2ZXJUaW1lIiwgImxhc3RSZXZJZCIsICJwYWdlVGV4dFJldklkIiwgImNvbmZsaWN0aW5nVXNlciIsICJuZXdET00iLCAiVU5DSEFOR0VEIiwgIk9QRU4iLCAiQ0hBTkdFX1BFTkRJTkciLCAiQ0hBTkdFRCIsICJERUxFVEVEIiwgInNldFBhZ2UiLCAic3RhcnRUaW1lIiwgInF1ZXJ5IiwgInBhZ2VzIiwgInBhZ2UiLCAicmV2aXNpb25zIiwgInNsb3RzIiwgImNvbnRlbnQiLCAidGltZXN0YW1wIiwgInJldmlkIiwgImxhc3RyZXZpZCIsICJzdGFydHRpbWVzdGFtcCIsICJ3YXRjaGVkIiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAibGFuZ2xpbmtzIiwgImxhbmciLCAiX3RlbXBsYXRlT2JqZWN0NyIsICJnZW5lcmFsIiwgInRpbWUiLCAiY2FzZSIsICJ1c2VyaW5mbyIsICJ3YXRjaGNyZWF0aW9ucyIsICJ3YXRjaGRlZmF1bHQiLCAibWlub3JkZWZhdWx0IiwgInNhdmVJblByb2dyZXNzIiwgImluaXRpYXRlRWRpdCIsICJmYWlsdXJlIiwgIm9sZEJ1dHRvblN0YXRlIiwgImRpc2FibGVkIiwgImZhaWwiLCAiYXBwbHkiLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicmF3Y29udGludWUiLCAidGl0bGVzIiwgIndnUGFnZU5hbWUiLCAicHJvcCIsICJpbnByb3AiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAicnZsaW1pdCIsICJydmRpciIsICJydnN0YXJ0aWQiLCAid2dDdXJSZXZpc2lvbklkIiwgImxsbGltaXQiLCAibWV0YSIsICJ1aXByb3AiLCAiZG9uZSIsICJzdGF0dXMiLCAic3RhdHVzVGV4dCIsICJtdWx0aUNoYW5nZU1zZyIsICJjb3VudCIsICJjdXJyZW50VGltZXN0YW1wIiwgIm5vdyIsICJEYXRlIiwgInRzIiwgImdldFVUQ0Z1bGxZZWFyIiwgInR3byIsICJnZXRVVENNb250aCIsICJnZXRVVENEYXRlIiwgImdldFVUQ0hvdXJzIiwgImdldFVUQ01pbnV0ZXMiLCAiZ2V0VVRDU2Vjb25kcyIsICJwZXJmb3JtQ2hhbmdlcyIsICJzaW5nbGVFZGl0b3IiLCAic2VsZkVkaXRDb25mbGljdCIsICJ3Z1VzZXJOYW1lIiwgIm5vQ29tbWl0IiwgIndwRWRpdFRva2VuIiwgIndwRGlmZiIsICJ3cFNhdmUiLCAiY2hhbmdlZCIsICJhZGRlZCIsICJkZWxldGVkIiwgInRvRWRpdCIsICJlZGl0IiwgImNoYW5nZXMiLCAib3JpZ2luYWxDYXRlZ29yeSIsICJjdXJyZW50Q2F0ZWdvcnkiLCAiY3VycmVudEtleSIsICJjdXJyZW50SGlkZGVuIiwgImZyb20iLCAidG8iLCAid3BNaW5vcmVkaXQiLCAid3BXYXRjaHRoaXMiLCAid3BDaGFuZ2VUYWdzIiwgIndwQXV0b1N1bW1hcnkiLCAiam9pbiIsICJzaG9ydFN1bW1hcnkiLCAiYXJyb3ciLCAid3BTdGFydHRpbWUiLCAid3BFZGl0dGltZSIsICJvbGRpZCIsICJoY0NvbW1pdCIsICJjbGljayIsICJyZXNvbHZlT25lIiwgInRvUmVzb2x2ZSIsICJjYXRzIiwgImNhdGVnb3JpZXMiLCAiaXNfZGFiIiwgImlzX3JlZGlyIiwgInJlZGlyZWN0IiwgImNhdGVnb3J5aW5mbyIsICJoaWRkZW4iLCAiaXNfbWlzc2luZyIsICJtaXNzaW5nIiwgImRhYklucHV0Q2xlYW5lZCIsICJpbnB1dEV4aXN0cyIsICJzcmMiLCAiX2l0ZXJhdG9yIiwgIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwgIl9zdGVwIiwgIm4iLCAiY2F0XyIsICJjYXQiLCAiZXJyIiwgImYiLCAiZGFiIiwgInJlc29sdmVSZWRpcmVjdHMiLCAicCIsICJyZXNvbHZlTXVsdGkiLCAiY2FsbGJhY2siLCAiZGFiSW5wdXQiLCAibGFzdElucHV0IiwgInBsbmFtZXNwYWNlIiwgInBsbGltaXQiLCAiY2xsaW1pdCIsICJqc29uIiwgInJlcSIsICJtYWtlQWN0aXZlIiwgIndoaWNoIiwgImlzX2FjdGl2ZSIsICJfaSIsICJfZWRpdG9ycyIsICJlZGl0b3IiLCAiaW5hY3RpdmF0ZSIsICJzaG93RGFiIiwgImV4cGVjdGVkSW5wdXQiLCAibGFzdFJlYWxJbnB1dCIsICJhY3R1YWxWYWx1ZSIsICJzaG93c0xpc3QiLCAic3BsaXQiLCAibGFzdFNlbGVjdGlvbiIsICJzdGFydCIsICJlbmQiLCAiZGlzcGxheUxpc3QiLCAic2V0VGltZW91dCIsICJzZXRTZWxlY3Rpb24iLCAic2hvd1N1Z2dlc3Rpb25zIiwgIm11bHRpU3VibWl0IiwgIl9pMiIsICJfZWRpdG9yczIiLCAibXNnIiwgInJlc29sdmVkIiwgImZpcnN0RGFiIiwgImRvbnRDaGFuZ2UiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiZWxlbWVudCIsICJhY2NlcHRDaGVjayIsICJjb21taXQiLCAic2V0TXVsdGlJbnB1dCIsICJhZGRFdmVudExpc3RlbmVyIiwgInBhcmVudE5vZGUiLCAicmVwbGFjZUNoaWxkIiwgImNoZWNrTXVsdGlJbnB1dCIsICJoYXNDaGFuZ2VzIiwgIl9pMyIsICJfZWRpdG9yczMiLCAic3VnZ2VzdGlvbkVuZ2luZXMiLCAib3BlbnNlYXJjaCIsICJoYW5kbGVyIiwgInF1ZXJ5UmVzdWx0IiwgInF1ZXJ5S2V5IiwgImV4aXN0cyIsICJzcGxpY2UiLCAibm9ybWFsaXplZCIsICJpbnRlcm5hbHNlYXJjaCIsICJhbGxwYWdlcyIsICJfdGl0bGUiLCAic3ViY2F0ZWdvcmllcyIsICJjYXRlZ29yeW1lbWJlcnMiLCAicGFyZW50Y2F0ZWdvcmllcyIsICJzdWdnZXN0aW9uQ29uZmlncyIsICJzZWFyY2hpbmRleCIsICJlbmdpbmVzIiwgInNob3ciLCAidGVtcCIsICJub0NvbXBsZXRpb24iLCAicGFnZWxpc3QiLCAiY29tYmluZWQiLCAic3ViY2F0IiwgInBhcmVudGNhdCIsICJCUyIsICJUQUIiLCAiUkVUIiwgIkVTQyIsICJTUEFDRSIsICJQR1VQIiwgIlBHRE9XTiIsICJVUCIsICJET1dOIiwgIkRFTCIsICJJTUUiLCAiQ2F0ZWdvcnlFZGl0b3IiLCAiY29uc3RydWN0b3IiLCAiaW5pdGlhbGl6ZSIsICJsaW5lIiwgInNwYW4iLCAiZGlyIiwgImlzQWRkQ2F0ZWdvcnkiLCAiY2F0TGluayIsICJmaXJzdENoaWxkIiwgIm9yaWdpbmFsS2V5IiwgIm9yaWdpbmFsRXhpc3RzIiwgIm1ha2VMaW5rU3BhbiIsICJ1cERvd25MaW5rcyIsICJzdHlsZSIsICJsaW5rU3BhbiIsICJpbnNlcnRCZWZvcmUiLCAibmV4dFNpYmxpbmciLCAibGluayIsICJiaW5kIiwgIm5vcm1hbExpbmtzIiwgInVuZGVsTGluayIsICJvcmlnaW5hbEhpZGRlbiIsICJlbmdpbmUiLCAiY3VycmVudEV4aXN0cyIsICJsYXN0U2F2ZWRTdGF0ZSIsICJsYXN0U2F2ZWRDYXRlZ29yeSIsICJsYXN0U2F2ZWRLZXkiLCAibGFzdFNhdmVkRXhpc3RzIiwgImxhc3RTYXZlZEhpZGRlbiIsICJpbnZva2VTdWdnZXN0aW9ucyIsICJkb250X2F1dG9jb21wbGV0ZSIsICJ0ZXh0Y2hhbmdlIiwgIm1ha2VGb3JtIiwgImZvcm0iLCAibWV0aG9kIiwgImFjY2VwdCIsICJzaXplIiwgImV2ZW50IiwgImltZSIsICJsYXN0S2V5IiwgInVzZXNDb21wb3NpdGlvbiIsICJrZXlDb3VudCIsICJwcm9jZXNzS2V5IiwgInJlc2V0S2V5U2VsZWN0aW9uIiwgImNhbmNlbCIsICJvbmJlZm9yZWRlYWN0aXZhdGUiLCAiY3JlYXRlVGV4dFJhbmdlIiwgInNhdmVWaWV3IiwgImxpc3QiLCAiaGlnaGxpZ2h0U3VnZ2VzdGlvbiIsICJmb2N1cyIsICJlbmdpbmVTZWxlY3RvciIsICJvcHQiLCAic2VsZWN0ZWQiLCAic2VsZWN0ZWRJbmRleCIsICJidXR0b25fbGFiZWwiLCAiX2lkIiwgImRlZmF1bHRUZXh0IiwgImxhYmVsIiwgIk9LIiwgIm9rIiwgImNhbmNlbEJ1dHRvbiIsICJwb3NpdGlvbiIsICJ3aGl0ZVNwYWNlIiwgIl9pNCIsICJfZWRpdG9yczQiLCAib3JpZ2luYWxTdGF0ZSIsICJyZWFkT25seSIsICJyZW1vdmVFZGl0b3IiLCAiYmFja2dyb3VuZENvbG9yIiwgIm5leHQiLCAicm9sbGJhY2siLCAidW5kb0xpbmsiLCAiZG9udENoZWNrIiwgInNhbml0aXplSW5wdXQiLCAib3JpZ2luYWwiLCAiX2k1IiwgIl9lZGl0b3JzNSIsICJjc3NUZXh0IiwgInRleHREZWNvcmF0aW9uIiwgInNlbGVjdEVuZ2luZSIsICJlbmdpbmVOYW1lIiwgIm1ha2VDYWxsIiwgImNhbGxiYWNrT2JqIiwgImNsZWFuS2V5IiwgImNiIiwgInoiLCAiY2FsbHNNYWRlIiwgIm5vZkNhbGxzIiwgImFsbFRpdGxlcyIsICJkb250Q2FjaGUiLCAiY2FuY2VsbGVkIiwgImdldEpTT04iLCAiZ2VuZXJhdGVBcnJheSIsICJmb3JjZSIsICJwaXBlIiwgIm1ha2VDYWxscyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJlbmdpbmVfIiwgIndnU2NyaXB0UGF0aCIsICJkb250QXV0b2NvbXBsZXRlIiwgImxhc3RRdWVyeSIsICJ2Tm9ybWFsaXplZCIsICJrbm93blRvRXhpc3QiLCAidkxvdyIsICJzb3J0IiwgImEiLCAiYiIsICJwcmVmaXhNYXRjaEEiLCAicHJlZml4TWF0Y2hCIiwgImFMb3ciLCAiYkxvdyIsICJmaXJzdFRpdGxlIiwgImNvbXBsZXRlZCIsICJhdXRvQ29tcGxldGUiLCAiZXhpc3RpbmciLCAibm9mSXRlbXMiLCAiYWxpZ24iLCAiekluZGV4IiwgImFuY2hvciIsICJsaXN0aCIsICJ0b3AiLCAib2Zmc2V0VG9wIiwgIm9mZnNldEhlaWdodCIsICJtYXhMaXN0SGVpZ2h0IiwgInZpZXdwb3J0IiwgIndoYXQiLCAiZXZhbHVhdGUiLCAib3BlcmEiLCAiZG9jdW1lbnRFbGVtZW50IiwgInNjcm9sbF9vZmZzZXQiLCAibm9kZSIsICJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCAiYm94IiwgIngiLCAicm91bmQiLCAibGVmdCIsICJ5IiwgInQiLCAibCIsICJvZmZzZXRMZWZ0IiwgIm9mZnNldFBhcmVudCIsICJ0ZXh0UG9zIiwgIm5sIiwgIm50IiwgIm9mZnNldCIsICJ0ZXh0Qm94V2lkdGgiLCAib2Zmc2V0V2lkdGgiLCAiY2xpZW50V2lkdGgiLCAic2Nyb2xsIiwgInZpZXdfdyIsICJ3IiwgImxfcG9zIiwgInJpZ2h0IiwgInJlbGF0aXZlX29mZnNldCIsICJhY3RWYWwiLCAibm9ybWFsaXplZEFjdFZhbCIsICJkb250TW9kaWZ5IiwgImNhblNlbGVjdCIsICJzZXRTZWxlY3Rpb25SYW5nZSIsICJzZWxlY3Rpb25TdGFydCIsICJzZWxlY3Rpb25FbmQiLCAibmV3X3NlbGVjdGlvbiIsICJtb3ZlIiwgIm1vdmVFbmQiLCAic2VsZWN0IiwgImdldFNlbGVjdGlvbiIsICJzZWxlY3Rpb24iLCAiY3JlYXRlUmFuZ2UiLCAicm5nIiwgImR1cGxpY2F0ZSIsICJ0ZXh0Um5nIiwgInNldEVuZFBvaW50IiwgImN1cnIiLCAidGd0IiwgImhvdGNhdF9kb250X2FkZF90b193YXRjaGxpc3QiLCAiSG90Q2F0RG9udEFkZFRvV2F0Y2hsaXN0IiwgImhvdGNhdF9ub19hdXRvY29tbWl0IiwgIkhvdENhdE5vQXV0b0NvbW1pdCIsICJob3RjYXRfZGVsX25lZWRzX2RpZmYiLCAiSG90Q2F0RGVsTmVlZHNEaWZmIiwgImhvdGNhdF9zdWdnZXN0aW9uX2RlbGF5IiwgIkhvdENhdFN1Z2dlc3Rpb25EZWxheSIsICJob3RjYXRfZWRpdGJveF93aWR0aCIsICJIb3RDYXRFZGl0Qm94V2lkdGgiLCAiaG90Y2F0X3N1Z2dlc3Rpb25zIiwgIkhvdENhdFN1Z2dlc3Rpb25zIiwgImhvdGNhdF9zdWdnZXN0aW9uc19maXhlZCIsICJIb3RDYXRGaXhlZFN1Z2dlc3Rpb25zIiwgImhvdGNhdF9zaW5nbGVfY2hhbmdlc19hcmVfbWlub3IiLCAiSG90Q2F0TWlub3JTaW5nbGVDaGFuZ2VzIiwgImhvdGNhdF9jaGFuZ2VkX2JhY2tncm91bmQiLCAiSG90Q2F0Q2hhbmdlZEJhY2tncm91bmQiLCAiaG90Y2F0X3VzZV9jYXRlZ29yeV9saW5rcyIsICJIb3RDYXRVc2VDYXRlZ29yeUxpbmtzIiwgImhvdGNhdF9saXN0X3NpemUiLCAiSG90Q2F0TGlzdFNpemUiLCAiSG90Q2F0Q2hhbmdlVGFnIiwgImVGb3JtIiwgImVkaXRmb3JtIiwgImNhdFJlZ0V4cCIsICJvbGRUeHQiLCAiaXNNaW5vckNoYW5nZSIsICJuZXdUeHQiLCAib2xkTGluZXMiLCAibmV3TGluZXMiLCAiY0FyciIsICJleGNlcHQiLCAiYUFyciIsICJiQXJyIiwgImxBcnIiLCAic0FyciIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJpdGVtIiwgImluZCIsICJmaWx0ZXIiLCAiYyIsICJzdW0iLCAic3VtQSIsICIkY3QiLCAicmVtb3ZlQ2hhbmdlVGFnIiwgIk51bWJlciIsICJwYXJzZUludCIsICJpc05hTiIsICJtaW4iLCAiX2k2IiwgIl9PYmplY3QkZW50cmllcyIsICJlbnRyaWVzIiwgInN1Z2dlc3Rpb25Db25maWciLCAiZGVmYXVsdFZpZXciLCAiZ2V0Q29tcHV0ZWRTdHlsZSIsICJnZXRQcm9wZXJ0eVZhbHVlIiwgImN1cnJlbnRTdHlsZSIsICJkaXJlY3Rpb24iLCAiY2FuX2VkaXQiLCAiY2xvc2VGb3JtIiwgIl9pNyIsICJfZWRpdG9yczYiLCAic2V0dXBfdXBsb2FkIiwgImlwIiwgInJldXBsb2FkIiwgImRlc3RGaWxlIiwgImxhYmVsQ2VsbCIsICJsaW5lQ2VsbCIsICJ0ZXh0QWxpZ24iLCAibWFyZ2luIiwgImJvcmRlciIsICJ2ZXJ0aWNhbEFsaWduIiwgIm5ld1JvdyIsICJpbnNlcnRSb3ciLCAib2xkU3VibWl0IiwgImRvX3N1Ym1pdCIsICJldmFsIiwgIkZ1bmN0aW9uIiwgImViIiwgImFkZGVkT25lIiwgIl9pOCIsICJfZWRpdG9yczciLCAibmV3X2NhdCIsICJfdGVtcGxhdGVPYmplY3Q4IiwgIl9jbGVhbmVkVGV4dCIsICJyZWdleCIsICJvbnN1Ym1pdCIsICJjbGVhbmVkVGV4dCIsICJpc09uUGFnZSIsICJub2RlVHlwZSIsICJOb2RlIiwgIkVMRU1FTlRfTk9ERSIsICJjYXRUaXRsZSIsICJnZXRBdHRyaWJ1dGUiLCAiX3RlbXBsYXRlT2JqZWN0OSIsICJpbml0aWFsaXplZCIsICJzZXR1cFRpbWVvdXQiLCAiZmluZEJ5Q2xhc3MiLCAic2NvcGUiLCAic2V0dXAiLCAiYWRkaXRpb25hbFdvcmsiLCAiY2xlYXJUaW1lb3V0IiwgImhpZGRlbkNhdHMiLCAiZm9vdGVyIiwgImNvbnRhaW5lciIsICJjcmVhdGVFZGl0b3JzIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiY29weUNhdHMiLCAiQXJyYXkiLCAiYXQiLCAibGFzdFNwYW4iLCAiZW5hYmxlTXVsdGkiLCAiaW5uZXJIVE1MIiwgImN1cnNvciIsICJob29rIiwgImZpcmUiLCAiY3JlYXRlQ29tbWl0Rm9ybSIsICJmb3JtQ29udGFpbmVyIiwgIndnUGFnZUNvbnRlbnRNb2RlbCIsICJnZXRQYWdlIiwgInNldFN0YXRlIiwgIm5ld1NwYW5zIiwgImdldFN0YXRlIiwgIl9pOSIsICJfZWRpdG9yczgiLCAicmVhbGx5X3J1biIsICJ3Z0Nhbm9uaWNhbFNwZWNpYWxQYWdlTmFtZSIsICJVcGxvYWRGb3JtIiwgInByZXZpb3VzX2hvdGNhdF9zdGF0ZSIsICJ3Z0lzQXJ0aWNsZSIsICJydW4iLCAic3RhcnRlZCIsICJob3RjYXRfZ2V0X3N0YXRlIiwgImhvdGNhdF9zZXRfc3RhdGUiLCAiaG90Y2F0X2Nsb3NlX2Zvcm0iLCAicnVuV2hlblJlYWR5Il0KfQo=
