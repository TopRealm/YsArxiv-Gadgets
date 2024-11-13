/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://github.com/wikimedia-gadgets/twinkle-core/tree/master/morebits}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/morebits}
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

// dist/morebits/morebits.js
var _templateObject;
var _templateObject2;
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
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
//! src/morebits/morebits.js
var import_ext_gadget = require("ext.gadget.Util");
/*! Twinkle.js - morebits.js */
(function morebits($) {
  const Morebits = {};
  window.Morebits = Morebits;
  Morebits.l10n = {
    /**
     * Local aliases for "redirect" magic word.
     * Check using api.php?action=query&format=json&meta=siteinfo&formatversion=2&siprop=magicwords
     */
    redirectTagAliases: ["#REDIRECT", "#重定向"],
    /**
     * Takes a string as argument and checks if it is a timestamp or not
     * If not, it returns null. If yes, it returns an array of integers
     * in the format [year, month, date, hour, minute, second]
     * which can be passed to Date.UTC()
     *
     * @param {string} str
     * @returns {number[] | null}
     */
    signatureTimestampFormat: (str) => {
      const rgxUTC = /(\d{4})年(\d{1,2})月(\d{1,2})日 \(.\) (\d{2}):(\d{2}) \(UTC\)/;
      const rgxCST = /(\d{4})年(\d{1,2})月(\d{1,2})日 \(.\) (\d{2}):(\d{2}) \(CST\)/;
      const match = rgxUTC.exec(str) || rgxCST.exec(str);
      const matchCST = rgxCST.exec(str);
      if (!match) {
        return null;
      }
      const month = Morebits.date.localeData.months.indexOf(match[4]);
      if (month === -1) {
        return null;
      }
      return matchCST ? [match[1], match[2] - 1, match[3], match[4] - 8, match[5]] : [match[1], match[2] - 1, match[3], match[4], match[5]];
    }
  };
  Morebits.userIsInGroup = (group) => {
    return mw.config.get("wgUserGroups").includes(group);
  };
  Morebits.userIsSysop = Morebits.userIsInGroup("sysop") || Morebits.userIsInGroup("steward") || Morebits.userIsInGroup("qiuwen");
  Morebits.sanitizeIPv6 = (address) => {
    console.warn("[Morebits] NOTE: Morebits.sanitizeIPv6 was renamed to Morebits.ip.sanitizeIPv6 in February 2021, please use that instead");
    return Morebits.ip.sanitizeIPv6(address);
  };
  Morebits.isPageRedirect = () => {
    return !!(mw.config.get("wgIsRedirect") || document.querySelector("#softredirect") || document.querySelector(".box-RfD") || document.querySelector(".box-Redirect_category_shell"));
  };
  Morebits.pageNameNorm = mw.config.get("wgPageName").replace(/_/g, " ");
  Morebits.pageNameRegex = (pageName) => {
    if (pageName === "") {
      return "";
    }
    const [firstChar] = pageName;
    const remainder = Morebits.string.escapeRegExp(pageName.slice(1));
    if (mw.Title.phpCharToUpper(firstChar) !== firstChar.toLowerCase()) {
      return "[".concat(mw.Title.phpCharToUpper(firstChar)).concat(firstChar.toLowerCase(), "]").concat(remainder);
    }
    return Morebits.string.escapeRegExp(firstChar) + remainder;
  };
  Morebits.createHtml = (input) => {
    const fragment = document.createDocumentFragment();
    if (!input) {
      return fragment;
    }
    input = (0, import_ext_gadget.generateArray)(input);
    var _iterator = _createForOfIteratorHelper(input), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const element = _step.value;
        if (element instanceof Node) {
          fragment.appendChild(element);
        } else {
          var _iterator2 = _createForOfIteratorHelper($.parseHTML(Morebits.createHtml.renderWikilinks(element))), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              const node = _step2.value;
              fragment.appendChild(node);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return fragment;
  };
  Morebits.createHtml.renderWikilinks = (text) => {
    const ub = new Morebits.unbinder(text);
    ub.unbind("<code>", "</code>");
    ub.content = ub.content.replace(/\[\[:?(?:([^|\]]+?)\|)?([^\]|]+?)\]\]/g, (_, target, text_) => {
      target || (target = text_);
      return '<a rel="noopener" target="_blank" href="'.concat(mw.util.getUrl(target), '" title="').concat(target.replace(/"/g, "&#34;"), '">').concat(text_, "</a>");
    });
    return ub.rebind();
  };
  Morebits.namespaceRegex = (namespaces) => {
    namespaces = (0, import_ext_gadget.generateArray)(namespaces);
    const aliases = [];
    let regex;
    for (var _i = 0, _Object$entries = Object.entries(mw.config.get("wgNamespaceIds")); _i < _Object$entries.length; _i++) {
      const [name, number] = _Object$entries[_i];
      if (namespaces.includes(number)) {
        aliases[aliases.length] = [...name].map((char) => {
          return Morebits.pageNameRegex(char);
        }).join("");
      }
    }
    switch (aliases.length) {
      case 0:
        regex = "";
        break;
      case 1:
        [regex] = aliases;
        break;
      default:
        regex = "(?:".concat(aliases.join("|"), ")");
        break;
    }
    return regex;
  };
  Morebits.quickForm = function(event, eventType) {
    this.root = new Morebits.quickForm.element({
      type: "form",
      event,
      eventType
    });
  };
  Morebits.quickForm.prototype.render = function() {
    const ret = this.root.render();
    ret.names = {};
    return ret;
  };
  Morebits.quickForm.prototype.append = function(data) {
    return this.root.append(data);
  };
  Morebits.quickForm.element = function(data) {
    this.data = data;
    this.childs = [];
  };
  Morebits.quickForm.element.id = 0;
  Morebits.quickForm.element.prototype.append = function(data) {
    let child;
    if (data instanceof Morebits.quickForm.element) {
      child = data;
    } else {
      child = new Morebits.quickForm.element(data);
    }
    this.childs[this.childs.length] = child;
    return child;
  };
  Morebits.quickForm.element.prototype.render = function(internalSubgroupId) {
    const currentNode = this.compute(this.data, internalSubgroupId);
    var _iterator3 = _createForOfIteratorHelper(this.childs), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        const child = _step3.value;
        currentNode[1].appendChild(child.render());
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return currentNode[0];
  };
  Morebits.quickForm.element.prototype.compute = function(data, inId) {
    let node;
    let childContainer = null;
    let label;
    const id = "".concat(inId ? "".concat(inId, "_") : "", "node_").concat(Morebits.quickForm.element.id++);
    if (data.adminonly && !Morebits.userIsSysop) {
      data.type = "hidden";
    }
    let i;
    let current;
    let subnode;
    switch (data.type) {
      case "form":
        node = document.createElement("form");
        node.className = "quickform";
        node.setAttribute("action", "javascript:void(0);");
        if (data.event) {
          node.addEventListener(data.eventType || "submit", data.event, false);
        }
        break;
      case "fragment":
        node = document.createDocumentFragment();
        return [node, node];
      case "select": {
        node = document.createElement("div");
        node.setAttribute("id", "div_".concat(id));
        if (data.label) {
          label = node.appendChild(document.createElement("label"));
          label.setAttribute("for", id);
          label.appendChild(Morebits.createHtml(data.label));
        }
        const select = node.appendChild(document.createElement("select"));
        if (data.event) {
          select.addEventListener("change", data.event, false);
        }
        if (data.multiple) {
          select.setAttribute("multiple", "multiple");
        }
        if (data.size) {
          select.setAttribute("size", data.size);
        }
        if (data.disabled) {
          select.disabled = true;
        }
        select.setAttribute("name", data.name);
        if (data.list) {
          for (i = 0; i < data.list.length; ++i) {
            current = data.list[i];
            if (current.list) {
              current.type = "optgroup";
            } else {
              current.type = "option";
            }
            subnode = this.compute(current);
            select.appendChild(subnode[0]);
          }
        }
        childContainer = select;
        break;
      }
      case "option":
        node = document.createElement("option");
        node.values = data.value;
        node.setAttribute("value", data.value);
        if (data.selected) {
          node.setAttribute("selected", "selected");
        }
        if (data.disabled) {
          node.disabled = true;
        }
        if (data.hidden) {
          node.setAttribute("hidden", "");
        }
        node.setAttribute("label", data.label);
        node.appendChild(document.createTextNode(data.label));
        break;
      case "optgroup":
        node = document.createElement("optgroup");
        node.setAttribute("label", data.label);
        if (data.list) {
          for (i = 0; i < data.list.length; ++i) {
            current = data.list[i];
            current.type = "option";
            subnode = this.compute(current);
            node.appendChild(subnode[0]);
          }
        }
        break;
      case "field":
        node = document.createElement("fieldset");
        label = node.appendChild(document.createElement("legend"));
        label.appendChild(Morebits.createHtml(data.label));
        if (data.name) {
          node.setAttribute("name", data.name);
        }
        if (data.disabled) {
          node.disabled = true;
        }
        break;
      case "checkbox":
      case "radio":
        node = document.createElement("div");
        if (data.list) {
          for (i = 0; i < data.list.length; ++i) {
            const curId = "".concat(id, "_").concat(i);
            current = data.list[i];
            let curDiv;
            if (current.type === "header") {
              curDiv = node.appendChild(document.createElement("h6"));
              curDiv.appendChild(document.createTextNode(current.label));
              if (current.tooltip) {
                Morebits.quickForm.element.generateTooltip(curDiv, current);
              }
              continue;
            }
            curDiv = node.appendChild(document.createElement("div"));
            if (current.hidden) {
              curDiv.setAttribute("hidden", "");
            }
            subnode = curDiv.appendChild(document.createElement("input"));
            subnode.values = current.value;
            subnode.setAttribute("value", current.value);
            subnode.setAttribute("type", data.type);
            subnode.setAttribute("id", curId);
            subnode.setAttribute("name", current.name || data.name);
            if (current.name) {
              subnode.setAttribute("data-single", "data-single");
            }
            if (current.checked) {
              subnode.checked = true;
            }
            if (current.disabled) {
              subnode.disabled = true;
            }
            label = curDiv.appendChild(document.createElement("label"));
            label.appendChild(Morebits.createHtml(current.label));
            label.setAttribute("for", curId);
            if (current.tooltip) {
              Morebits.quickForm.element.generateTooltip(label, current);
            }
            if (current.style) {
              label.setAttribute("style", current.style);
            }
            let event;
            if (current.subgroup) {
              let tmpgroup = current.subgroup;
              tmpgroup = (0, import_ext_gadget.generateArray)(tmpgroup);
              const subgroupRaw = new Morebits.quickForm.element({
                type: "div",
                id: "".concat(id, "_").concat(i, "_subgroup")
              });
              var _iterator4 = _createForOfIteratorHelper(tmpgroup), _step4;
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                  const el = _step4.value;
                  const newEl = {
                    ...el
                  };
                  newEl.type || (newEl.type = data.type);
                  newEl.name = "".concat(current.name || data.name, ".").concat(newEl.name);
                  subgroupRaw.append(newEl);
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
              const subgroup = subgroupRaw.render(curId);
              subgroup.className = "quickformSubgroup";
              subnode.subgroup = subgroup;
              subnode.shown = false;
              event = (e) => {
                if (e.target.checked) {
                  e.target.parentNode.appendChild(e.target.subgroup);
                  if (e.target.type === "radio") {
                    const {
                      name
                    } = e.target;
                    if (e.target.form.names[name] !== void 0) {
                      e.target.form.names[name].parentNode.removeChild(e.target.form.names[name].subgroup);
                    }
                    e.target.form.names[name] = e.target;
                  }
                } else {
                  e.target.parentNode.removeChild(e.target.subgroup);
                }
              };
              subnode.addEventListener("change", event, true);
              if (current.checked) {
                subnode.parentNode.appendChild(subgroup);
              }
            } else if (data.type === "radio") {
              event = (e) => {
                if (e.target.checked) {
                  const {
                    name
                  } = e.target;
                  if (e.target.form.names[name] !== void 0) {
                    e.target.form.names[name].parentNode.removeChild(e.target.form.names[name].subgroup);
                  }
                  delete e.target.form.names[name];
                }
              };
              subnode.addEventListener("change", event, true);
            }
            if (data.event) {
              subnode.addEventListener("change", data.event, false);
            } else if (current.event) {
              subnode.addEventListener("change", current.event, true);
            }
          }
        }
        if (data.shiftClickSupport && data.type === "checkbox") {
          Morebits.checkboxShiftClickSupport(Morebits.quickForm.getElements(node, data.name));
        }
        break;
      // input is actually a text-type, so number here inherits the same stuff
      case "number":
      case "input":
        node = document.createElement("div");
        node.setAttribute("id", "div_".concat(id));
        if (data.hidden) {
          node.setAttribute("hidden", "");
        }
        if (data.label) {
          label = node.appendChild(document.createElement("label"));
          label.appendChild(Morebits.createHtml(data.label));
          label.setAttribute("for", data.id || id);
        }
        subnode = node.appendChild(document.createElement("input"));
        if (data.value) {
          subnode.setAttribute("value", data.value);
        }
        if (data.placeholder) {
          subnode.setAttribute("placeholder", data.placeholder);
        }
        subnode.setAttribute("name", data.name);
        if (data.type === "input") {
          subnode.setAttribute("type", "text");
        } else {
          subnode.setAttribute("type", "number");
          for (var _i2 = 0, _arr = ["min", "max", "step", "list"]; _i2 < _arr.length; _i2++) {
            const att = _arr[_i2];
            if (data[att]) {
              subnode.setAttribute(att, data[att]);
            }
          }
        }
        for (var _i3 = 0, _arr2 = ["value", "size", "placeholder", "maxlength"]; _i3 < _arr2.length; _i3++) {
          const att = _arr2[_i3];
          if (data[att]) {
            subnode.setAttribute(att, data[att]);
          }
        }
        for (var _i4 = 0, _arr3 = ["disabled", "required", "readonly"]; _i4 < _arr3.length; _i4++) {
          const att = _arr3[_i4];
          if (data[att]) {
            subnode.setAttribute(att, att);
          }
        }
        if (data.event) {
          subnode.addEventListener("keyup", data.event, false);
        }
        childContainer = subnode;
        break;
      case "dyninput": {
        const min = data.min || 1;
        const max = data.max || Number.POSITIVE_INFINITY;
        node = document.createElement("div");
        label = node.appendChild(document.createElement("h5"));
        label.appendChild(Morebits.createHtml(data.label));
        const listNode = node.appendChild(document.createElement("div"));
        const more = this.compute({
          type: "button",
          label: "更多",
          disabled: min >= max,
          event: (e) => {
            const newNode = new Morebits.quickForm.element(e.target.sublist);
            e.target.area.appendChild(newNode.render());
            if (++e.target.counter >= e.target.max) {
              e.target.disabled = true;
            }
            e.stopPropagation();
          }
        });
        node.appendChild(more[0]);
        const [, moreButton] = more;
        const sublist = {
          type: "_dyninput_element",
          label: data.sublabel || data.label,
          name: data.name,
          value: data.value,
          size: data.size,
          remove: false,
          maxlength: data.maxlength,
          event: data.event
        };
        for (i = 0; i < min; ++i) {
          const elem = new Morebits.quickForm.element(sublist);
          listNode.appendChild(elem.render());
        }
        sublist.remove = true;
        sublist.morebutton = moreButton;
        sublist.listnode = listNode;
        moreButton.sublist = sublist;
        moreButton.area = listNode;
        moreButton.max = max - min;
        moreButton.counter = 0;
        break;
      }
      case "_dyninput_element":
        node = document.createElement("div");
        if (data.label) {
          label = node.appendChild(document.createElement("label"));
          label.appendChild(document.createTextNode(data.label));
          label.setAttribute("for", id);
        }
        subnode = node.appendChild(document.createElement("input"));
        if (data.value) {
          subnode.setAttribute("value", data.value);
        }
        subnode.setAttribute("name", data.name);
        subnode.setAttribute("type", "text");
        if (data.size) {
          subnode.setAttribute("size", data.size);
        }
        if (data.maxlength) {
          subnode.setAttribute("maxlength", data.maxlength);
        }
        if (data.event) {
          subnode.addEventListener("keyup", data.event, false);
        }
        if (data.remove) {
          const remove = this.compute({
            type: "button",
            label: "移除",
            event: (e) => {
              const list = e.target.listnode;
              const node_ = e.target.inputnode;
              const more = e.target.morebutton;
              list.removeChild(node_);
              --more.counter;
              more.removeAttribute("disabled");
              e.stopPropagation();
            }
          });
          node.appendChild(remove[0]);
          const [, removeButton] = remove;
          removeButton.inputnode = node;
          removeButton.listnode = data.listnode;
          removeButton.morebutton = data.morebutton;
        }
        break;
      case "hidden":
        node = document.createElement("input");
        node.setAttribute("type", "hidden");
        node.values = data.value;
        node.setAttribute("value", data.value);
        node.setAttribute("name", data.name);
        break;
      case "header":
        node = document.createElement("h5");
        node.appendChild(Morebits.createHtml(data.label));
        break;
      case "div":
        node = document.createElement("div");
        if (data.name) {
          node.setAttribute("name", data.name);
        }
        if (data.label) {
          const result = document.createElement("span");
          result.className = "quickformDescription";
          result.appendChild(Morebits.createHtml(data.label));
          node.appendChild(result);
        }
        break;
      case "submit":
        node = document.createElement("span");
        childContainer = node.appendChild(document.createElement("input"));
        childContainer.setAttribute("type", "submit");
        if (data.label) {
          childContainer.setAttribute("value", data.label);
        }
        childContainer.setAttribute("name", data.name || "submit");
        if (data.disabled) {
          childContainer.disabled = true;
        }
        break;
      case "button":
        node = document.createElement("span");
        childContainer = node.appendChild(document.createElement("input"));
        childContainer.setAttribute("type", "button");
        if (data.label) {
          childContainer.setAttribute("value", data.label);
        }
        childContainer.setAttribute("name", data.name);
        if (data.disabled) {
          childContainer.disabled = true;
        }
        if (data.event) {
          childContainer.addEventListener("click", data.event, false);
        }
        break;
      case "textarea":
        node = document.createElement("div");
        node.setAttribute("id", "div_".concat(id));
        if (data.hidden) {
          node.setAttribute("hidden", "");
        }
        if (data.label) {
          label = node.appendChild(document.createElement("h5"));
          const labelElement = document.createElement("label");
          labelElement.appendChild(Morebits.createHtml(data.label));
          labelElement.setAttribute("for", data.id || id);
          label.appendChild(labelElement);
        }
        subnode = node.appendChild(document.createElement("textarea"));
        subnode.setAttribute("name", data.name);
        if (data.cols) {
          subnode.setAttribute("cols", data.cols);
        }
        if (data.rows) {
          subnode.setAttribute("rows", data.rows);
        }
        if (data.disabled) {
          subnode.disabled = true;
        }
        if (data.required) {
          subnode.setAttribute("required", "required");
        }
        if (data.readonly) {
          subnode.setAttribute("readonly", "readonly");
        }
        if (data.value) {
          subnode.value = data.value;
        }
        if (data.placeholder) {
          subnode.placeholder = data.placeholder;
        }
        childContainer = subnode;
        break;
      default:
        throw new Error("Morebits.quickForm: unknown element type ".concat(data.type.toString()));
    }
    childContainer || (childContainer = node);
    if (data.tooltip) {
      Morebits.quickForm.element.generateTooltip(label || node, data);
    }
    if (data.extra) {
      childContainer.extra = data.extra;
    }
    if (data.$data) {
      $(childContainer).data(data.$data);
    }
    if (data.style) {
      childContainer.setAttribute("style", data.style);
    }
    if (data.className) {
      childContainer.className = childContainer.className ? "".concat(childContainer.className, " ").concat(data.className) : data.className;
    }
    childContainer.setAttribute("id", data.id || id);
    return [node, childContainer];
  };
  Morebits.quickForm.element.generateTooltip = (node, data) => {
    const tooltipButton = node.appendChild(document.createElement("span"));
    tooltipButton.className = "morebits-tooltipButton";
    tooltipButton.title = data.tooltip;
    tooltipButton.appendChild(document.createTextNode("?"));
    $(tooltipButton).tooltip({
      position: {
        my: "left top",
        at: "center bottom",
        collision: "flipfit"
      },
      // Deprecated in UI 1.12, but MW stuck on 1.9.2 indefinitely; see #398 and T71386
      tooltipClass: "morebits-ui-tooltip"
    });
  };
  Morebits.quickForm.getInputData = (form) => {
    const result = {};
    var _iterator5 = _createForOfIteratorHelper(form.elements), _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
        const field = _step5.value;
        if (field.disabled || !field.name || !field.type || field.type === "submit" || field.type === "button") {
          continue;
        }
        const fieldNameNorm = field.name.slice(field.name.indexOf(".") + 1);
        switch (field.type) {
          case "radio":
            if (field.checked) {
              result[fieldNameNorm] = field.value;
            }
            break;
          case "checkbox":
            if (field.dataset.single) {
              result[fieldNameNorm] = field.checked;
            } else {
              result[fieldNameNorm] || (result[fieldNameNorm] = []);
              if (field.checked) {
                result[fieldNameNorm][result[fieldNameNorm].length] = field.value;
              }
            }
            break;
          case "select-multiple":
            result[fieldNameNorm] = $(field).val();
            break;
          case "text":
          // falls through
          case "textarea":
            result[fieldNameNorm] = field.value.trim();
            break;
          default:
            if (field.value) {
              result[fieldNameNorm] = field.value;
            }
            break;
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
    return result;
  };
  Morebits.quickForm.getElements = (form, fieldName) => {
    const $form = $(form);
    fieldName = $.escapeSelector(fieldName);
    let $elements = $form.find('[name="'.concat(fieldName, '"]'));
    if ($elements.length > 0) {
      return $elements.toArray();
    }
    $elements = $form.find("#".concat(fieldName));
    return $elements.toArray();
  };
  Morebits.quickForm.getCheckboxOrRadio = (elementArray, value) => {
    const found = elementArray.filter((element) => {
      return element.value === value;
    });
    if (found.length > 0) {
      return found[0];
    }
    return null;
  };
  Morebits.quickForm.getElementContainer = (element) => {
    if (element instanceof HTMLFieldSetElement || element instanceof HTMLDivElement || element instanceof HTMLHeadingElement) {
      return element;
    }
    return element.parentNode;
  };
  Morebits.quickForm.getElementLabelObject = (element) => {
    if (element.type === "button" || element.type === "submit" || element instanceof HTMLDivElement || element instanceof HTMLHeadingElement) {
      return element;
    } else if (element instanceof HTMLFieldSetElement) {
      return element.querySelector("legend");
    } else if (element instanceof HTMLTextAreaElement) {
      return element.parentNode.querySelector("h5");
    }
    return element.parentNode.querySelector("label");
  };
  Morebits.quickForm.getElementLabel = (element) => {
    const labelElement = Morebits.quickForm.getElementLabelObject(element);
    if (!labelElement) {
      return null;
    }
    return labelElement.firstChild.textContent;
  };
  Morebits.quickForm.setElementLabel = (element, labelText) => {
    const labelElement = Morebits.quickForm.getElementLabelObject(element);
    if (!labelElement) {
      return false;
    }
    labelElement.firstChild.textContent = labelText;
    return true;
  };
  Morebits.quickForm.overrideElementLabel = (element, temporaryLabelText) => {
    if (!element.hasAttribute("data-oldlabel")) {
      element.setAttribute("data-oldlabel", Morebits.quickForm.getElementLabel(element));
    }
    return Morebits.quickForm.setElementLabel(element, temporaryLabelText);
  };
  Morebits.quickForm.resetElementLabel = (element) => {
    if (element.hasAttribute("data-oldlabel")) {
      return Morebits.quickForm.setElementLabel(element, element.getAttribute("data-oldlabel"));
    }
    return null;
  };
  Morebits.quickForm.setElementVisibility = (element, visibility) => {
    $(element).toggle(visibility);
  };
  Morebits.quickForm.setElementTooltipVisibility = (element, visibility) => {
    $(Morebits.quickForm.getElementContainer(element)).find(".morebits-tooltipButton").toggle(visibility);
  };
  HTMLFormElement.prototype.getChecked = function(name, type) {
    const elements = this.elements[name];
    if (!elements) {
      return [];
    }
    const returnArray = [];
    let i;
    if (elements instanceof HTMLSelectElement) {
      const {
        options
      } = elements;
      for (i = 0; i < options.length; ++i) {
        if (options[i].selected) {
          if (options[i].values) {
            returnArray[returnArray.length] = options[i].values;
          } else {
            returnArray[returnArray.length] = options[i].value;
          }
        }
      }
    } else if (elements instanceof HTMLInputElement) {
      if (type && elements.type !== type) {
        return [];
      } else if (elements.checked) {
        return [elements.value];
      }
    } else {
      for (i = 0; i < elements.length; ++i) {
        if (elements[i].checked) {
          if (type && elements[i].type !== type) {
            continue;
          }
          if (elements[i].values) {
            returnArray[returnArray.length] = elements[i].values;
          } else {
            returnArray[returnArray.length] = elements[i].value;
          }
        }
      }
    }
    return returnArray;
  };
  HTMLFormElement.prototype.getUnchecked = function(name, type) {
    const elements = this.elements[name];
    if (!elements) {
      return [];
    }
    const returnArray = [];
    let i;
    if (elements instanceof HTMLSelectElement) {
      const {
        options
      } = elements;
      for (i = 0; i < options.length; ++i) {
        if (!options[i].selected) {
          if (options[i].values) {
            returnArray[returnArray.length] = options[i].values;
          } else {
            returnArray[returnArray.length] = options[i].value;
          }
        }
      }
    } else if (elements instanceof HTMLInputElement) {
      if (type && elements.type !== type) {
        return [];
      } else if (!elements.checked) {
        return [elements.value];
      }
    } else {
      for (i = 0; i < elements.length; ++i) {
        if (!elements[i].checked) {
          if (type && elements[i].type !== type) {
            continue;
          }
          if (elements[i].values) {
            returnArray[returnArray.length] = elements[i].values;
          } else {
            returnArray[returnArray.length] = elements[i].value;
          }
        }
      }
    }
    return returnArray;
  };
  Morebits.ip = {
    /**
     * Converts an IPv6 address to the canonical form stored and used by MediaWiki.
     * JavaScript translation of the {@link https://gerrit.wikimedia.org/r/plugins/gitiles/mediawiki/core/+/8eb6ac3e84ea3312d391ca96c12c49e3ad0753bb/includes/utils/IP.php#131|`IP::sanitizeIP()`}
     * function from the IPUtils library.  Addresses are verbose, uppercase,
     * normalized, and expanded to 8 words.
     *
     * @param {string} address - The IPv6 address, with or without CIDR.
     * @returns {string}
     */
    sanitizeIPv6: (address) => {
      address = address.trim();
      if (address === "") {
        return null;
      }
      if (!mw.util.isIPv6Address(address, true)) {
        return address;
      }
      address = address.toUpperCase();
      const abbrevPos = address.indexOf("::");
      if (abbrevPos > -1) {
        const CIDRStart = address.indexOf("/");
        const addressEnd = CIDRStart === -1 ? address.length - 1 : CIDRStart - 1;
        let repeat;
        let extra;
        let pad;
        if (abbrevPos === 0) {
          repeat = "0:";
          extra = address === "::" ? "0" : "";
          pad = 9;
        } else if (abbrevPos === addressEnd - 1) {
          repeat = ":0";
          extra = "";
          pad = 9;
        } else {
          repeat = ":0";
          extra = ":";
          pad = 8;
        }
        let replacement = repeat;
        pad -= address.split(":").length - 1;
        for (let i = 1; i < pad; i++) {
          replacement += repeat;
        }
        replacement += extra;
        address = address.replace("::", replacement);
      }
      return address.replace(/(^|:)0+([0-9A-Fa-f]{1,4})/g, "$1$2");
    },
    /**
     * Determine if the given IP address is a range.  Just conjoins
     * `mw.util.isIPAddress` with and without the `allowBlock` option.
     *
     * @param {string} ip
     * @returns {boolean} - True if given a valid IP address range, false otherwise.
     */
    isRange: (ip) => {
      return mw.util.isIPAddress(ip, true) && !mw.util.isIPAddress(ip);
    },
    /**
     * Check that an IP range is within the CIDR limits.  Most likely to be useful
     * in conjunction with `wgRelevantUserName`.  CIDR limits are hardcoded as /16
     * for IPv4 and /32 for IPv6.
     *
     * @param {string} ip
     * @returns {boolean} - True for valid ranges within the CIDR limits,
     * otherwise false (ranges outside the limit, single IPs, non-IPs).
     */
    validCIDR: (ip) => {
      if (Morebits.ip.isRange(ip)) {
        const subnet = Number.parseInt(ip.match(/\/(\d{1,3})$/)[1], 10);
        if (subnet) {
          if (mw.util.isIPv6Address(ip, true)) {
            if (subnet >= 32) {
              return true;
            }
          } else if (subnet >= 16) {
            return true;
          }
        }
      }
      return false;
    },
    /**
     * Get the /64 subnet for an IPv6 address.
     *
     * @param {string} ipv6 - The IPv6 address, with or without a subnet.
     * @returns {boolean|string} - False if not IPv6 or bigger than a 64,
     * otherwise the (sanitized) /64 address.
     */
    get64: (ipv6) => {
      if (!ipv6 || !mw.util.isIPv6Address(ipv6, true)) {
        return false;
      }
      const subnetMatch = ipv6.match(/\/(\d{1,3})$/);
      if (subnetMatch && Number.parseInt(subnetMatch[1], 10) < 64) {
        return false;
      }
      ipv6 = Morebits.ip.sanitizeIPv6(ipv6);
      const ipRegex = /^((?:[0-9A-F]{1,4}:){4})(?:[0-9A-F]{1,4}:){3}[0-9A-F]{1,4}(?:\/\d{1,3})?$/;
      return ipv6.replace(ipRegex, "$1".concat("0:0:0:0/64"));
    }
  };
  Morebits.string = {
    /**
     * @param {string} str
     * @returns {string}
     */
    toUpperCaseFirstChar: (str) => {
      str = str.toString();
      return str.slice(0, 1).toUpperCase() + str.slice(1);
    },
    /**
     * @param {string} str
     * @returns {string}
     */
    toLowerCaseFirstChar: (str) => {
      str = str.toString();
      return str.slice(0, 1).toLowerCase() + str.slice(1);
    },
    /**
     * Gives an array of substrings of `str` - starting with `start` and
     * ending with `end` - which is not in `skiplist`.  Intended for use
     * on wikitext with templates or links.
     *
     * @param {string} str
     * @param {string} start
     * @param {string} end
     * @param {(string[]|string)} [skiplist]
     * @returns {string[]}
     * @throws If the `start` and `end` strings aren't of the same length.
     * @throws If `skiplist` isn't an array or string
     */
    splitWeightedByKeys: (str, start, end, skiplist) => {
      if (start.length !== end.length) {
        throw new Error("start marker and end marker must be of the same length");
      }
      let level = 0;
      let initial = null;
      const result = [];
      if (!Array.isArray(skiplist)) {
        if (skiplist === void 0) {
          skiplist = [];
        } else if (typeof skiplist === "string") {
          skiplist = [skiplist];
        } else {
          throw new TypeError("non-applicable skiplist parameter");
        }
      }
      for (let i = 0; i < str.length; ++i) {
        var _iterator6 = _createForOfIteratorHelper(skiplist), _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
            const element = _step6.value;
            if (str.slice(i, i + element.length) === element) {
              i += element.length - 1;
              continue;
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        if (str.slice(i, i + start.length) === start) {
          if (initial === null) {
            initial = i;
          }
          ++level;
          i += start.length - 1;
        } else if (str.slice(i, i + end.length) === end) {
          --level;
          i += end.length - 1;
        }
        if (!level && initial !== null) {
          result[result.length] = str.slice(initial, i + 1);
          initial = null;
        }
      }
      return result;
    },
    /**
     * Formats freeform "reason" (from a textarea) for deletion/other
     * templates that are going to be substituted, (e.g. PROD, XFD, RPP).
     * Handles `|` outside a nowiki tag.
     * Optionally, also adds a signature if not present already.
     *
     * @param {string} str
     * @param {boolean} [addSig]
     * @returns {string}
     */
    formatReasonText: (str, addSig) => {
      let reason = (str || "").toString().trim();
      const unbinder = new Morebits.unbinder(reason);
      unbinder.unbind("<no".concat("wiki", ">"), "</no".concat("wiki", ">"));
      unbinder.content = unbinder.content.replace(/\|/g, "{{".concat("subst:", "!}}"));
      reason = unbinder.rebind();
      if (addSig) {
        const sig = "~~".concat("~~");
        const sigIndex = reason.lastIndexOf(sig);
        if (sigIndex === -1 || sigIndex !== reason.length - sig.length) {
          reason += " ".concat(sig);
        }
      }
      return reason.trim();
    },
    /**
     * Formats a "reason" (from a textarea) for inclusion in a userspace
     * log.  Replaces newlines with {{Pb}}, and adds an extra `#` before
     * list items for proper formatting.
     *
     * @param {string} str
     * @returns {string}
     */
    formatReasonForLog: (str) => {
      return str.replace(/\n+/g, "{{pb}}").replace(/^(#+)/gm, "#$1").replace(/^(\*+)/gm, "#$1");
    },
    /**
     * Like `String.prototype.replace()`, but escapes any dollar signs in
     * the replacement string.  Useful when the the replacement string is
     * arbitrary, such as a username or freeform user input, and could
     * contain dollar signs.
     *
     * @param {string} string - Text in which to replace.
     * @param {(string|RegExp)} pattern
     * @param {string} replacement
     * @returns {string}
     */
    safeReplace: (string, pattern, replacement) => {
      return string.replace(pattern, replacement.replace(/\$/g, "$$$$"));
    },
    /**
     * Determine if the user-provided expiration will be considered an
     * infinite-length by MW.
     *
     * @see {@link https://phabricator.wikimedia.org/T68646}
     *
     * @param {string} expiry
     * @returns {boolean}
     */
    isInfinity: (expiry) => {
      return ["indefinite", "infinity", "infinite", "never"].includes(expiry);
    },
    /**
     * Escapes a string to be used in a RegExp, replacing spaces and
     * underscores with `[_ ]` as they are often equivalent.
     *
     * @param {string} text - String to be escaped.
     * @returns {string} - The escaped text.
     */
    escapeRegExp: (text) => {
      return mw.util.escapeRegExp(text).replace(/ |_/g, "[_ ]");
    },
    /**
     * formatTime
     *
     * @param {*} time The string to foramt
     * @returns {string}
     */
    formatTime: (time) => {
      let m;
      if ((m = time.match(/^\s*(\d+)\s*sec(ond)?s?\s*$/)) !== null) {
        return "".concat(m[1], "秒");
      }
      if ((m = time.match(/^\s*(\d+)\s*min(ute)?s?\s*$/)) !== null) {
        return "".concat(m[1], "分");
      }
      if ((m = time.match(/^\s*(\d+)\s*hours?\s*$/)) !== null) {
        return m[1] + window.wgULS("小时", "小時");
      }
      if ((m = time.match(/^\s*(\d+)\s*days?\s*$/)) !== null) {
        return "".concat(m[1], "天");
      }
      if ((m = time.match(/^\s*(\d+)\s*weeks?\s*$/)) !== null) {
        return m[1] + window.wgULS("周", "週");
      }
      if ((m = time.match(/^\s*(\d+)\s*months?\s*$/)) !== null) {
        return m[1] + window.wgULS("个月", "個月");
      }
      if ((m = time.match(/^\s*(\d+)\s*years?\s*$/)) !== null) {
        return "".concat(m[1], "年");
      }
      if (Morebits.string.isInfinity(time.trim())) {
        return window.wgULS("无限期", "無限期");
      }
      return time;
    },
    /**
     * Append punctuation to a string when it's missing
     *
     * @param {string} str
     * @param {string} punctuation
     * @returns {string}
     */
    appendPunctuation: (str, punctuation) => {
      if (punctuation === void 0) {
        punctuation = "。";
      }
      if (str.search(/[.?!;。？！；]$/) === -1) {
        str += punctuation;
      }
      return str;
    }
  };
  Morebits.array = {
    /**
     * Remove duplicated items from an array.
     *
     * @param {Array} arr
     * @returns {Array} A copy of the array with duplicates removed.
     * @throws When provided a non-array.
     */
    uniq: (arr) => {
      if (!Array.isArray(arr)) {
        throw new TypeError("A non-array object passed to Morebits.array.uniq");
      }
      return arr.filter((item, idx) => {
        return arr.indexOf(item) === idx;
      });
    },
    /**
     * Remove non-duplicated items from an array.
     *
     * @param {Array} arr
     * @returns {Array} A copy of the array with the first instance of each value
     * removed; subsequent instances of those values (duplicates) remain.
     * @throws When provided a non-array.
     */
    dups: (arr) => {
      if (!Array.isArray(arr)) {
        throw new TypeError("A non-array object passed to Morebits.array.dups");
      }
      return arr.filter((item, idx) => {
        return arr.indexOf(item) !== idx;
      });
    },
    /**
     * Break up an array into smaller arrays.
     *
     * @param {Array} arr
     * @param {number} size - Size of each chunk (except the last, which could be different).
     * @returns {Array[]} An array containing the smaller, chunked arrays.
     * @throws When provided a non-array.
     */
    chunk: (arr, size) => {
      if (!Array.isArray(arr)) {
        throw new TypeError("A non-array object passed to Morebits.array.chunk");
      }
      if (typeof size !== "number" || size <= 0) {
        return [arr];
      }
      const numChunks = Math.ceil(arr.length / size);
      const result = Array.from({
        length: numChunks
      });
      for (let i = 0; i < numChunks; i++) {
        result[i] = arr.slice(i * size, (i + 1) * size);
      }
      return result;
    }
  };
  Morebits.select2 = {
    matchers: {
      /**
       * Custom matcher in which if the optgroup name matches, all options in that
       * group are shown, like in jquery.chosen.
       *
       * @param {*} params
       * @param {*} data
       */
      optgroupFull: (params, data) => {
        const originalMatcher = $.fn.select2.defaults.defaults.matcher;
        const result = originalMatcher(params, data);
        if (result && params.term && data.text.toUpperCase().includes(params.term.toUpperCase())) {
          result.children = data.children;
        }
        return result;
      },
      /**
       * Custom matcher that matches from the beginning of words only.
       *
       * @param {*} params
       * @param {*} data
       */
      wordBeginning: (params, data) => {
        const originalMatcher = $.fn.select2.defaults.defaults.matcher;
        const result = originalMatcher(params, data);
        if (!params.term || result && new RegExp("\\b".concat(mw.util.escapeRegExp(params.term)), "i").test(result.text)) {
          return result;
        }
        return null;
      }
    },
    /**
     * Underline matched part of options.
     *
     * @param {*} data
     */
    highlightSearchMatches: (data) => {
      const searchTerm = Morebits.select2SearchQuery;
      if (!searchTerm || data.loading) {
        return data.text;
      }
      const idx = data.text.toUpperCase().indexOf(searchTerm.toUpperCase());
      if (idx < 0) {
        return data.text;
      }
      return $("<span>").append(data.text.slice(0, idx), $("<span>").css("text-decoration", "underline").text(data.text.slice(idx, idx + searchTerm.length)), data.text.slice(idx + searchTerm.length));
    },
    /**
     * Intercept query as it is happening, for use in highlightSearchMatches.
     *
     * @param {*} params
     */
    queryInterceptor: (params) => {
      Morebits.select2SearchQuery = params && params.term;
    },
    /**
     * Open dropdown and begin search when the `.select2-selection` has
     * focus and a key is pressed.
     *
     * @param {KeyboardEvent} ev
     * @see {@link https://github.com/select2/select2/issues/3279#issuecomment-442524147}
     */
    autoStart: (ev) => {
      if (ev.which < 48) {
        return;
      }
      let target = $(ev.target).closest(".select2-container");
      if (!target.length) {
        return;
      }
      target = target.prev();
      target.select2("open");
      const search = target.data("select2").dropdown.$search || target.data("select2").selection.$search;
      search[0].focus();
    }
  };
  Morebits.unbinder = function(string) {
    if (typeof string !== "string") {
      throw new TypeError("not a string");
    }
    this.content = string;
    this.counter = 0;
    this.history = {};
    this.prefix = "%UNIQ::".concat(Math.random(), "::");
    this.postfix = "::UNIQ%";
  };
  Morebits.unbinder.prototype = {
    /**
     * Hide the region encapsulated by the `prefix` and `postfix` from
     * string processing.  `prefix` and `postfix` will be used in a
     * RegExp, so items that need escaping should be use `\\`.
     *
     * @param {string} prefix
     * @param {string} postfix
     * @throws If either `prefix` or `postfix` is missing.
     */
    unbind(prefix, postfix) {
      if (!prefix || !postfix) {
        throw new Error("Both prefix and postfix must be provided");
      }
      const re = new RegExp("".concat(prefix, "([\\s\\S]*?)").concat(postfix), "g");
      this.content = this.content.replace(re, Morebits.unbinder.getCallback(this));
    },
    /**
     * Restore the hidden portion of the `content` string.
     *
     * @returns {string} The processed output.
     */
    rebind() {
      let {
        content
      } = this;
      for (const current in this.history) {
        if (!Object.hasOwn(this.history, current)) {
          continue;
        }
        content = content.replace(current, this.history[current]);
      }
      return content;
    },
    prefix: null,
    // %UNIQ::0.5955981644938324::
    postfix: null,
    // ::UNIQ%
    content: null,
    // string
    counter: null,
    // 0++
    history: null
    // {}
  };
  Morebits.unbinder.getCallback = (self) => {
    return (match) => {
      const current = self.prefix + self.counter + self.postfix;
      self.history[current] = match;
      ++self.counter;
      return current;
    };
  };
  Morebits.date = function(...args) {
    var _this$_d;
    if (args.length === 1) {
      const [param] = args;
      if (/^\d{14}$/.test(param)) {
        const digitMatch = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/.exec(param);
        if (digitMatch) {
          this._d = new Date(Reflect.apply(Date.UTC, null, [digitMatch[1], digitMatch[2] - 1, digitMatch[3], digitMatch[4], digitMatch[5], digitMatch[6]]));
        }
      } else if (typeof param === "string") {
        const dateParts = Morebits.l10n.signatureTimestampFormat(param);
        if (dateParts) {
          this._d = new Date(Date.UTC.apply(null, dateParts));
        }
      }
    }
    (_this$_d = this._d) !== null && _this$_d !== void 0 ? _this$_d : this._d = new (Function.prototype.bind.apply(Date, [Date, ...(0, import_ext_gadget.generateArray)(args)]))();
    if (!this.isValid()) {
      mw.log.warn("Invalid Morebits.date initialisation:", args);
    }
  };
  Morebits.date.localeData = {
    // message names here correspond to MediaWiki message names
    // No i18n at this time
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    daysShort: ["日", "一", "二", "三", "四", "五", "六"],
    relativeTimes: {
      thisDay: "[今天]A hh:mm",
      prevDay: "[昨天]A hh:mm",
      nextDay: "[明天]A hh:mm",
      thisWeek: "ddddA hh:mm",
      pastWeek: "[上]ddddA hh:mm",
      other: "YYYY-MM-DD"
    }
  };
  Morebits.date.unitMap = {
    seconds: "Seconds",
    minutes: "Minutes",
    hours: "Hours",
    days: "Date",
    weeks: "Week",
    // Not a function but handled in `add` through cunning use of multiplication
    months: "Month",
    years: "FullYear"
  };
  Morebits.date.prototype = {
    /** @returns {boolean} */
    isValid() {
      return !Number.isNaN(this.getTime());
    },
    /**
     * @param {(Date|Morebits.date)} date
     * @returns {boolean}
     */
    isBefore(date) {
      return this.getTime() < date.getTime();
    },
    /**
     * @param {(Date|Morebits.date)} date
     * @returns {boolean}
     */
    isAfter(date) {
      return this.getTime() > date.getTime();
    },
    /** @returns {string} */
    getUTCMonthName() {
      return Morebits.date.localeData.months[this.getUTCMonth()];
    },
    /** @returns {string} */
    getUTCMonthNameAbbrev() {
      return Morebits.date.localeData.monthsShort[this.getUTCMonth()];
    },
    /** @returns {string} */
    getMonthName() {
      return Morebits.date.localeData.months[this.getMonth()];
    },
    /** @returns {string} */
    getMonthNameAbbrev() {
      return Morebits.date.localeData.monthsShort[this.getMonth()];
    },
    /** @returns {string} */
    getUTCDayName() {
      return Morebits.date.localeData.days[this.getUTCDay()];
    },
    /** @returns {string} */
    getUTCDayNameAbbrev() {
      return Morebits.date.localeData.daysShort[this.getUTCDay()];
    },
    /** @returns {string} */
    getDayName() {
      return Morebits.date.localeData.days[this.getDay()];
    },
    /** @returns {string} */
    getDayNameAbbrev() {
      return Morebits.date.localeData.daysShort[this.getDay()];
    },
    /**
     * Add a given number of minutes, hours, days, weeks, months, or years to the date.
     * This is done in-place. The modified date object is also returned, allowing chaining.
     *
     * @param {number} number - Should be an integer.
     * @param {string} unit
     * @throws If invalid or unsupported unit is given.
     * @returns {Morebits.date}
     */
    add(number, unit) {
      let num = Number.parseInt(number, 10);
      if (Number.isNaN(num)) {
        throw new TypeError('Invalid number "'.concat(number, '" provided.'));
      }
      unit = unit.toLowerCase();
      const {
        unitMap
      } = Morebits.date;
      let unitNorm = unitMap[unit] || unitMap["".concat(unit, "s")];
      if (unitNorm) {
        if (unitNorm === "Week") {
          unitNorm = "Date";
          num *= 7;
        }
        this["set".concat(unitNorm)](this["get".concat(unitNorm)]() + num);
        return this;
      }
      throw new Error('Invalid unit "'.concat(unit, '": Only ').concat(Object.keys(unitMap).join(", "), " are allowed."));
    },
    /**
     * Subtracts a given number of minutes, hours, days, weeks, months, or years to the date.
     * This is done in-place. The modified date object is also returned, allowing chaining.
     *
     * @param {number} number - Should be an integer.
     * @param {string} unit
     * @throws If invalid or unsupported unit is given.
     * @returns {Morebits.date}
     */
    subtract(number, unit) {
      return this.add(-number, unit);
    },
    /**
     * Format the date into a string per the given format string.
     * Replacement syntax is a subset of that in moment.js:
     *
     * | Syntax | Output |
     * |--------|--------|
     * | H | Hours (24-hour) |
     * | HH | Hours (24-hour, padded to 2 digits) |
     * | h | Hours (12-hour) |
     * | hh | Hours (12-hour, padded to 2 digits) |
     * | A | AM or PM |
     * | m | Minutes |
     * | mm | Minutes (padded to 2 digits) |
     * | s | Seconds |
     * | ss | Seconds (padded to 2 digits) |
     * | SSS | Milliseconds fragment, 3 digits |
     * | d | Day number of the week (Sun=0) |
     * | ddd | Abbreviated day name |
     * | dddd | Full day name |
     * | D | Date |
     * | DD | Date (padded to 2 digits) |
     * | M | Month number (1-indexed) |
     * | MM | Month number (1-indexed, padded to 2 digits) |
     * | MMM | Abbreviated month name |
     * | MMMM | Full month name |
     * | Y | Year |
     * | YY | Final two digits of year (20 for 2020, 42 for 1942) |
     * | YYYY | Year (same as `Y`) |
     *
     * @param {string} formatstr - Format the date into a string, using
     * the replacement syntax.  Use `[` and `]` to escape items.  If not
     * provided, will return the ISO-8601-formatted string.
     * @param {(string|number)} [zone=system] - `system` (for browser-default time zone),
     * `utc`, or specify a time zone as number of minutes relative to UTC.
     * @returns {string}
     */
    format(formatstr, zone) {
      if (!this.isValid()) {
        return "Invalid date";
      }
      let udate = this;
      if (zone === "utc") {
        udate = new Morebits.date(this.getTime()).add(this.getTimezoneOffset(), "minutes");
      } else if (typeof zone === "number") {
        udate = new Morebits.date(this.getTime()).add(this.getTimezoneOffset() + zone, "minutes");
      }
      if (!formatstr) {
        return udate.toISOString();
      }
      const pad = (num, len) => {
        len || (len = 2);
        return "00".concat(num).toString().slice(0 - len);
      };
      const h24 = udate.getHours();
      const m = udate.getMinutes();
      const s = udate.getSeconds();
      const ms = udate.getMilliseconds();
      const D = udate.getDate();
      const M = udate.getMonth() + 1;
      const Y = udate.getFullYear();
      const h12 = h24 % 12 || 12;
      const amOrPm = h24 >= 12 ? "下午" : "上午";
      const replacementMap = {
        HH: pad(h24),
        H: h24,
        hh: pad(h12),
        h: h12,
        A: amOrPm,
        mm: pad(m),
        m,
        ss: pad(s),
        s,
        SSS: pad(ms, 3),
        dddd: udate.getDayName(),
        ddd: udate.getDayNameAbbrev(),
        d: udate.getDay(),
        DD: pad(D),
        D,
        MMMM: udate.getMonthName(),
        MMM: udate.getMonthNameAbbrev(),
        MM: pad(M),
        M,
        YYYY: Y,
        YY: pad(Y % 100),
        Y
      };
      const unbinder = new Morebits.unbinder(formatstr);
      unbinder.unbind(String.raw(_templateObject || (_templateObject = _taggedTemplateLiteral(["["], ["\\["]))), String.raw(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["]"], ["\\]"]))));
      unbinder.content = unbinder.content.replace(
        /* Regex notes:
         * d(d{2,3})? matches exactly 1, 3 or 4 occurrences of 'd' ('dd' is treated as a double match of 'd')
         * Y{1,2}(Y{2})? matches exactly 1, 2 or 4 occurrences of 'Y'
         */
        /H{1,2}|h{1,2}|m{1,2}|s{1,2}|SSS|d(d{2,3})?|D{1,2}|M{1,4}|Y{1,2}(Y{2})?|A/g,
        (match) => {
          return replacementMap[match];
        }
      );
      return unbinder.rebind().replace(/\[(.*?)\]/g, "$1");
    },
    /**
     * Gives a readable relative time string such as "Yesterday at 6:43 PM" or "Last Thursday at 11:45 AM".
     * Similar to `calendar` in moment.js, but with time zone support.
     *
     * @param {(string|number)} [zone=system] - 'system' (for browser-default time zone),
     * 'utc' (for UTC), or specify a time zone as number of minutes past UTC.
     * @returns {string}
     */
    calendar(zone) {
      const dateDiff = ((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0) - new Date(this).setHours(0, 0, 0, 0)) / 864e5;
      switch (true) {
        case dateDiff === 0:
          return this.format(Morebits.date.localeData.relativeTimes.thisDay, zone);
        case dateDiff === 1:
          return this.format(Morebits.date.localeData.relativeTimes.prevDay, zone);
        case (dateDiff > 0 && dateDiff < 7):
          return this.format(Morebits.date.localeData.relativeTimes.pastWeek, zone);
        case dateDiff === -1:
          return this.format(Morebits.date.localeData.relativeTimes.nextDay, zone);
        case (dateDiff < 0 && dateDiff > -7):
          return this.format(Morebits.date.localeData.relativeTimes.thisWeek, zone);
        default:
          return this.format(Morebits.date.localeData.relativeTimes.other, zone);
      }
    },
    /**
     * Get a regular expression that matches wikitext section titles, such
     * as `==December 2019==` or `=== Jan 2018 ===`.
     *
     * @returns {RegExp}
     */
    monthHeaderRegex() {
      return new RegExp("^(==+)\\s*".concat(this.getUTCFullYear(), "年(?:").concat(this.getUTCMonthName(), "|").concat(this.getUTCMonthNameAbbrev(), ")\\s*\\1"), "mg");
    },
    /**
     * Creates a wikitext section header with the month and year.
     *
     * @param {number} [level=2] - Header level.  Pass 0 for just the text
     * with no wikitext markers (==).
     * @returns {string}
     */
    monthHeader(level) {
      level = Number.parseInt(level, 10);
      level = Number.isNaN(level) ? 2 : level;
      const header = "=".repeat(level);
      const text = "".concat(this.getUTCFullYear(), "年").concat(this.getUTCMonthName());
      if (header.length) {
        return "".concat(header, " ").concat(text, " ").concat(header);
      }
      return text;
    }
  };
  var _iterator7 = _createForOfIteratorHelper(Object.getOwnPropertyNames(Date.prototype)), _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
      const func = _step7.value;
      if (!["add", "getDayName", "getMonthName"].includes(func)) {
        Morebits.date.prototype[func] = function(...args) {
          return this._d[func](...args);
        };
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
  Morebits.wiki = {};
  Morebits.wiki.isPageRedirect = () => {
    console.warn("[Morebits] NOTE: Morebits.wiki.isPageRedirect has been deprecated, use Morebits.isPageRedirect instead.");
    return Morebits.isPageRedirect();
  };
  Morebits.wiki.numberOfActionsLeft = 0;
  Morebits.wiki.nbrOfCheckpointsLeft = 0;
  Morebits.wiki.actionCompleted = (self) => {
    if (--Morebits.wiki.numberOfActionsLeft <= 0 && Morebits.wiki.nbrOfCheckpointsLeft <= 0) {
      Morebits.wiki.actionCompleted.event(self);
    }
  };
  Morebits.wiki.actionCompleted.event = () => {
    if (Morebits.wiki.actionCompleted.notice) {
      Morebits.status.actionCompleted(Morebits.wiki.actionCompleted.notice);
    }
    if (Morebits.wiki.actionCompleted.redirect) {
      if (!/^\w+:\/\//.test(Morebits.wiki.actionCompleted.redirect)) {
        Morebits.wiki.actionCompleted.redirect = mw.util.getUrl(Morebits.wiki.actionCompleted.redirect);
        if (Morebits.wiki.actionCompleted.followRedirect === false) {
          Morebits.wiki.actionCompleted.redirect += "?redirect=no";
        }
      }
      setTimeout(() => {
        location = Morebits.wiki.actionCompleted.redirect;
      }, Morebits.wiki.actionCompleted.timeOut);
    }
  };
  Morebits.wiki.actionCompleted.timeOut = window.wpActionCompletedTimeOut === void 0 ? 5e3 : window.wpActionCompletedTimeOut;
  Morebits.wiki.actionCompleted.redirect = null;
  Morebits.wiki.actionCompleted.notice = null;
  Morebits.wiki.addCheckpoint = () => {
    ++Morebits.wiki.nbrOfCheckpointsLeft;
  };
  Morebits.wiki.removeCheckpoint = () => {
    if (--Morebits.wiki.nbrOfCheckpointsLeft <= 0 && Morebits.wiki.numberOfActionsLeft <= 0) {
      Morebits.wiki.actionCompleted.event();
    }
  };
  Morebits.wiki.api = function(currentAction, query, onSuccess, statusElement, onError) {
    var _this$query;
    this.currentAction = currentAction;
    this.query = query;
    this.query.assert = "user";
    if (!query.errorformat || !["wikitext", "plaintext"].includes(query.errorformat)) {
      this.query.errorformat = "html";
    }
    (_this$query = this.query).uselang || (_this$query.uselang = "content");
    this.query.errorlang = "uselang";
    this.query.errorsuselocal = 1;
    this.onSuccess = onSuccess;
    this.onError = onError;
    if (statusElement) {
      this.setStatusElement(statusElement);
    } else {
      this.statelem = new Morebits.status(currentAction);
    }
    if (!query.format) {
      this.query.format = "xml";
    } else if (query.format === "json" && !query.formatversion) {
      this.query.formatversion = "2";
    } else if (!["xml", "json"].includes(query.format)) {
      this.statelem.error("Invalid API format: only xml and json are supported.");
    }
    if (query.action && ["query", "watch"].includes(query.action)) {
      delete query.tags;
    } else if (!query.tags && morebitsWikiChangeTag) {
      query.tags = morebitsWikiChangeTag;
    }
  };
  Morebits.wiki.api.prototype = {
    currentAction: "",
    onSuccess: null,
    onError: null,
    parent: window,
    // use global context if there is no parent object
    query: null,
    response: null,
    responseXML: null,
    // use `response` instead; retained for backwards compatibility
    statelem: null,
    // this non-standard name kept for backwards compatibility
    statusText: null,
    // result received from the API, normally "success" or "error"
    errorCode: null,
    // short text error code, if any, as documented in the MediaWiki API
    errorText: null,
    // full error description, if any
    badtokenRetry: false,
    // set to true if this on a retry attempted after a badtoken error
    /**
     * Keep track of parent object for callbacks.
     *
     * @param {*} parent
     */
    setParent(parent) {
      this.parent = parent;
    },
    /** @param {Morebits.status} statusElement */
    setStatusElement(statusElement) {
      this.statelem = statusElement;
      this.statelem.status(this.currentAction);
    },
    /**
     * Carry out the request.
     *
     * @param {Object} callerAjaxParameters - Do not specify a parameter unless you really
     * really want to give jQuery some extra parameters.
     * @returns {promise} - A jQuery promise object that is resolved or rejected with the api object.
     */
    post(callerAjaxParameters) {
      ++Morebits.wiki.numberOfActionsLeft;
      const queryStringArr = [];
      for (var _i5 = 0, _Object$entries2 = Object.entries(this.query); _i5 < _Object$entries2.length; _i5++) {
        const [i, val] = _Object$entries2[_i5];
        if (Array.isArray(val)) {
          queryStringArr[queryStringArr.length] = "".concat(encodeURIComponent(i), "=").concat(val.map(encodeURIComponent).join("|"));
        } else if (val !== void 0) {
          queryStringArr[queryStringArr.length] = "".concat(encodeURIComponent(i), "=").concat(encodeURIComponent(val));
        }
      }
      const queryString = queryStringArr.join("&").replace(/^(.*?)(\btoken=[^&]*)&(.*)/, "$1$3&$2");
      const ajaxparams = {
        context: this,
        type: this.query.action === "query" ? "GET" : "POST",
        url: mw.util.wikiScript("api"),
        data: queryString,
        dataType: this.query.format,
        headers: {
          "Api-User-Agent": morebitsWikiApiUserAgent
        },
        ...callerAjaxParameters
      };
      return $.ajax(ajaxparams).then(
        function onAPIsuccess(response, statusText) {
          this.statusText = statusText;
          this.response = response;
          this.responseXML = response;
          if (this.query.format === "json") {
            this.errorCode = response.errors && response.errors[0].code;
            if (this.query.errorformat === "html") {
              this.errorText = response.errors && response.errors[0].html;
            } else if (this.query.errorformat === "wikitext" || this.query.errorformat === "plaintext") {
              this.errorText = response.errors && response.errors[0].text;
            }
          } else {
            this.errorCode = $(response).find("errors error").eq(0).attr("code");
            this.errorText = $(response).find("errors error").eq(0).text();
          }
          if (typeof this.errorCode === "string") {
            return this.returnError(callerAjaxParameters);
          }
          if (this.onSuccess) {
            this.onSuccess.call(this.parent, this);
          } else {
            this.statelem.info("完成");
          }
          Morebits.wiki.actionCompleted();
          return $.Deferred().resolveWith(this.parent, [this]);
        },
        // only network and server errors reach here - complaints from the API itself are caught in success()
        function onAPIfailure(error, statusText, errorThrown) {
          this.statusText = statusText;
          this.errorThrown = errorThrown;
          this.errorText = statusText + window.wgULS("在调用API时发生了错误“", "在呼叫API時發生了錯誤「") + error.statusText + window.wgULS("”。", "」。");
          return this.returnError();
        }
      );
    },
    returnError(callerAjaxParameters) {
      if (this.errorCode === "badtoken" && !this.badtokenRetry) {
        this.statelem.warn(window.wgULS("无效令牌，获取新的令牌并重试……", "無效權杖，取得新的權杖並重試……"));
        this.badtokenRetry = true;
        return Morebits.wiki.api.getToken().then((token) => {
          this.query.token = token;
          return this.post(callerAjaxParameters);
        });
      }
      this.statelem.error("".concat(this.errorText, "（").concat(this.errorCode, "）"));
      if (this.onError) {
        this.onError.call(this.parent, this);
      }
      return $.Deferred().rejectWith(this.parent, [this]);
    },
    getStatusElement() {
      return this.statelem;
    },
    getErrorCode() {
      return this.errorCode;
    },
    getErrorText() {
      return this.errorText;
    },
    getXML() {
      return this.responseXML;
    },
    getResponse() {
      return this.response;
    }
  };
  Morebits.wiki.getCachedJson = (title) => {
    const query = {
      action: "query",
      prop: "revisions",
      titles: title,
      rvslots: "main",
      rvprop: "content",
      format: "json",
      smaxage: "3600",
      maxage: "3600"
    };
    return new Morebits.wiki.api("", query).post().then((apiobj) => {
      apiobj.getStatusElement().unlink();
      const response = apiobj.getResponse();
      const wikitext = response.query.pages[0].revisions[0].slots.main.content;
      return JSON.parse(wikitext);
    });
  };
  let morebitsWikiApiUserAgent = "YsArchives/1.1 (morebits.js)";
  Morebits.wiki.api.setApiUserAgent = (ua) => {
    morebitsWikiApiUserAgent = "YsArchives/1.1 (morebits.js".concat(ua ? "; ".concat(ua) : "", ")");
  };
  const morebitsWikiChangeTag = "";
  Morebits.wiki.api.getToken = () => {
    const tokenApi = new Morebits.wiki.api(window.wgULS("获取令牌", "取得權杖"), {
      action: "query",
      meta: "tokens",
      type: "csrf",
      format: "json"
    });
    return tokenApi.post().then((apiobj) => {
      return apiobj.response.query.tokens.csrftoken;
    });
  };
  Morebits.wiki.page = function(pageName, status) {
    status || (status = window.wgULS("打开页面“", "打開頁面「") + pageName + window.wgULS("”", "」"));
    const ctx = {
      // backing fields for public properties
      pageName,
      pageExists: false,
      editSummary: null,
      changeTags: null,
      testActions: null,
      // array if any valid actions
      callbackParameters: null,
      statusElement: status instanceof Morebits.status ? status : new Morebits.status(status),
      // - edit
      pageText: null,
      editMode: "all",
      // save() replaces entire contents of the page by default
      appendText: null,
      // can't reuse pageText for this because pageText is needed to follow a redirect
      prependText: null,
      // can't reuse pageText for this because pageText is needed to follow a redirect
      newSectionText: null,
      newSectionTitle: null,
      createOption: null,
      minorEdit: false,
      botEdit: false,
      pageSection: null,
      maxConflictRetries: 2,
      maxRetries: 2,
      followRedirect: false,
      followCrossNsRedirect: true,
      watchlistOption: "nochange",
      watchlistExpiry: null,
      creator: null,
      timestamp: null,
      // - revert
      revertOldID: null,
      // - move
      moveDestination: null,
      moveTalkPage: false,
      moveSubpages: false,
      moveSuppressRedirect: false,
      // - protect
      protectEdit: null,
      protectMove: null,
      protectCreate: null,
      protectCascade: null,
      // - creation lookup
      lookupNonRedirectCreator: false,
      // internal status
      pageLoaded: false,
      csrfToken: null,
      loadTime: null,
      lastEditTime: null,
      pageID: null,
      contentModel: null,
      revertCurID: null,
      revertUser: null,
      watched: false,
      fullyProtected: false,
      suppressProtectWarning: false,
      conflictRetries: 0,
      retries: 0,
      // callbacks
      onLoadSuccess: null,
      onLoadFailure: null,
      onSaveSuccess: null,
      onSaveFailure: null,
      onLookupCreationSuccess: null,
      onLookupCreationFailure: null,
      onMoveSuccess: null,
      onMoveFailure: null,
      onDeleteSuccess: null,
      onDeleteFailure: null,
      onUndeleteSuccess: null,
      onUndeleteFailure: null,
      onProtectSuccess: null,
      onProtectFailure: null,
      // internal objects
      loadQuery: null,
      loadApi: null,
      saveApi: null,
      lookupCreationApi: null,
      moveApi: null,
      moveProcessApi: null,
      patrolApi: null,
      patrolProcessApi: null,
      deleteApi: null,
      deleteProcessApi: null,
      undeleteApi: null,
      undeleteProcessApi: null,
      protectApi: null,
      protectProcessApi: null
    };
    const emptyFunction = () => {
    };
    this.load = function(onSuccess, onFailure) {
      ctx.onLoadSuccess = onSuccess;
      ctx.onLoadFailure = onFailure || emptyFunction;
      if (!onSuccess) {
        ctx.statusElement.error("Internal error: no onSuccess callback provided to load()!");
        ctx.onLoadFailure(this);
        return;
      }
      ctx.loadQuery = {
        action: "query",
        prop: "info|revisions",
        inprop: "watched",
        intestactions: "edit",
        // can be expanded
        curtimestamp: "",
        meta: "tokens",
        type: "csrf",
        titles: ctx.pageName,
        format: "json"
        // don't need rvlimit=1 because we don't need rvstartid here and only one actual rev is returned by default
      };
      if (ctx.editMode === "all") {
        ctx.loadQuery.rvprop = "content|timestamp";
      } else if (ctx.editMode === "revert") {
        ctx.loadQuery.rvprop = "timestamp";
        ctx.loadQuery.rvlimit = 1;
        ctx.loadQuery.rvstartid = ctx.revertOldID;
      }
      if (ctx.followRedirect) {
        ctx.loadQuery.redirects = "";
      }
      if (typeof ctx.pageSection === "number") {
        ctx.loadQuery.rvsection = ctx.pageSection;
      }
      if (Morebits.userIsSysop) {
        ctx.loadQuery.inprop += "|protection";
      }
      ctx.loadApi = new Morebits.wiki.api(window.wgULS("抓取页面……", "抓取頁面……"), ctx.loadQuery, fnLoadSuccess, ctx.statusElement, ctx.onLoadFailure);
      ctx.loadApi.setParent(this);
      ctx.loadApi.post();
    };
    this.save = function(onSuccess, onFailure) {
      ctx.onSaveSuccess = onSuccess;
      ctx.onSaveFailure = onFailure || emptyFunction;
      const canUseMwUserToken = fnCanUseMwUserToken("edit");
      if (!ctx.pageLoaded && !canUseMwUserToken) {
        ctx.statusElement.error("Internal error: attempt to save a page that has not been loaded!");
        ctx.onSaveFailure(this);
        return;
      }
      if (!ctx.editSummary) {
        if (ctx.editMode === "new" && ctx.newSectionTitle) {
          ctx.editSummary = "";
        } else {
          ctx.statusElement.error("Internal error: edit summary not set before save!");
          ctx.onSaveFailure(this);
          return;
        }
      }
      if (ctx.fullyProtected && !ctx.suppressProtectWarning && !confirm(ctx.fullyProtected === "infinity" ? window.wgULS("您即将编辑全保护页面“", "您即將編輯全保護頁面「") + ctx.pageName + window.wgULS("”（无限期）。\n\n单击确定以确定，或单击取消以取消操作。", "」（無限期）。\n\n點擊確定以確定，或點擊取消以取消操作。") : "".concat(window.wgULS("您即将编辑全保护页面“", "您即將編輯全保護頁面「") + ctx.pageName + window.wgULS("”（到期：", "」（到期：") + new Morebits.date(ctx.fullyProtected).calendar("utc"), " (UTC)）。\n\n").concat(window.wgULS("单击确定以确定，或单击取消以取消操作。", "點擊確定以確定，或點擊取消以取消操作。")))) {
        ctx.statusElement.error(window.wgULS("已取消对全保护页面的编辑。", "已取消對全保護頁面的編輯。"));
        ctx.onSaveFailure(this);
        return;
      }
      ctx.retries = 0;
      const query = {
        action: "edit",
        title: ctx.pageName,
        summary: ctx.editSummary,
        token: canUseMwUserToken ? mw.user.tokens.get("csrfToken") : ctx.csrfToken,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      if (typeof ctx.pageSection === "number") {
        query.section = ctx.pageSection;
      }
      if (ctx.minorEdit) {
        query.minor = true;
      } else {
        query.notminor = true;
      }
      if (ctx.botEdit) {
        query.bot = true;
      }
      switch (ctx.editMode) {
        case "append":
          if (ctx.appendText === null) {
            ctx.statusElement.error("Internal error: append text not set before save!");
            ctx.onSaveFailure(this);
            return;
          }
          query.appendtext = ctx.appendText;
          break;
        case "prepend":
          if (ctx.prependText === null) {
            ctx.statusElement.error("Internal error: prepend text not set before save!");
            ctx.onSaveFailure(this);
            return;
          }
          query.prependtext = ctx.prependText;
          break;
        case "new":
          if (!ctx.newSectionText) {
            ctx.statusElement.error("Internal error: new section text not set before save!");
            ctx.onSaveFailure(this);
            return;
          }
          query.section = "new";
          query.text = ctx.newSectionText;
          query.sectiontitle = ctx.newSectionTitle || ctx.editSummary;
          break;
        case "revert":
          query.undo = ctx.revertCurID;
          query.undoafter = ctx.revertOldID;
          if (ctx.lastEditTime) {
            query.basetimestamp = ctx.lastEditTime;
          }
          query.starttimestamp = ctx.loadTime;
          break;
        default:
          query.text = ctx.pageText;
          if (ctx.lastEditTime) {
            query.basetimestamp = ctx.lastEditTime;
          }
          query.starttimestamp = ctx.loadTime;
          break;
      }
      if (["recreate", "createonly", "nocreate"].includes(ctx.createOption)) {
        query[ctx.createOption] = "";
      }
      if (canUseMwUserToken && ctx.followRedirect) {
        query.redirect = true;
      }
      ctx.saveApi = new Morebits.wiki.api(window.wgULS("保存页面……", "儲存頁面……"), query, fnSaveSuccess, ctx.statusElement, fnSaveError);
      ctx.saveApi.setParent(this);
      ctx.saveApi.post();
    };
    this.append = function(onSuccess, onFailure) {
      ctx.editMode = "append";
      if (fnCanUseMwUserToken("edit")) {
        this.save(onSuccess, onFailure);
      } else {
        ctx.onSaveSuccess = onSuccess;
        ctx.onSaveFailure = onFailure || emptyFunction;
        this.load(fnAutoSave, ctx.onSaveFailure);
      }
    };
    this.prepend = function(onSuccess, onFailure) {
      ctx.editMode = "prepend";
      if (fnCanUseMwUserToken("edit")) {
        this.save(onSuccess, onFailure);
      } else {
        ctx.onSaveSuccess = onSuccess;
        ctx.onSaveFailure = onFailure || emptyFunction;
        this.load(fnAutoSave, ctx.onSaveFailure);
      }
    };
    this.newSection = function(onSuccess, onFailure) {
      ctx.editMode = "new";
      if (fnCanUseMwUserToken("edit")) {
        this.save(onSuccess, onFailure);
      } else {
        ctx.onSaveSuccess = onSuccess;
        ctx.onSaveFailure = onFailure || emptyFunction;
        this.load(fnAutoSave, ctx.onSaveFailure);
      }
    };
    this.getPageName = () => {
      return ctx.pageName;
    };
    this.getPageText = () => {
      return ctx.pageText;
    };
    this.setPageText = (pageText) => {
      ctx.editMode = "all";
      ctx.pageText = pageText;
    };
    this.setAppendText = (appendText) => {
      ctx.editMode = "append";
      ctx.appendText = appendText;
    };
    this.setPrependText = (prependText) => {
      ctx.editMode = "prepend";
      ctx.prependText = prependText;
    };
    this.setNewSectionText = (newSectionText) => {
      ctx.editMode = "new";
      ctx.newSectionText = newSectionText;
    };
    this.setNewSectionTitle = (newSectionTitle) => {
      ctx.editMode = "new";
      ctx.newSectionTitle = newSectionTitle;
    };
    this.setEditSummary = (summary) => {
      ctx.editSummary = summary;
    };
    this.setChangeTags = (tags) => {
      ctx.changeTags = tags;
    };
    this.setCreateOption = (createOption) => {
      ctx.createOption = createOption;
    };
    this.setMinorEdit = (minorEdit) => {
      ctx.minorEdit = minorEdit;
    };
    this.setBotEdit = (botEdit) => {
      ctx.botEdit = botEdit;
    };
    this.setPageSection = (pageSection) => {
      ctx.pageSection = pageSection;
    };
    this.setMaxConflictRetries = (maxConflictRetries) => {
      ctx.maxConflictRetries = maxConflictRetries;
    };
    this.setMaxRetries = (maxRetries) => {
      ctx.maxRetries = maxRetries;
    };
    this.setWatchlist = (watchlistOption, watchlistExpiry) => {
      if (watchlistOption instanceof Morebits.date || watchlistOption instanceof Date) {
        watchlistOption = watchlistOption.toISOString();
      }
      if (watchlistExpiry === void 0) {
        watchlistExpiry = "infinity";
      } else if (watchlistExpiry instanceof Morebits.date || watchlistExpiry instanceof Date) {
        watchlistExpiry = watchlistExpiry.toISOString();
      }
      switch (watchlistOption) {
        case "nochange":
        case "no":
        case false:
        case void 0:
          ctx.watchlistOption = "nochange";
          ctx.watchlistExpiry = null;
          break;
        case "unwatch":
          ctx.watchlistOption = "unwatch";
          break;
        case "preferences":
        case "default":
          ctx.watchlistOption = "preferences";
          ctx.watchlistExpiry = watchlistExpiry;
          break;
        case "watch":
        case "yes":
        case true:
          ctx.watchlistOption = "watch";
          ctx.watchlistExpiry = watchlistExpiry;
          break;
        default:
          ctx.watchlistOption = "watch";
          ctx.watchlistExpiry = watchlistOption;
          break;
      }
    };
    this.setWatchlistExpiry = (watchlistExpiry) => {
      if (watchlistExpiry === void 0) {
        watchlistExpiry = "infinity";
      } else if (watchlistExpiry instanceof Morebits.date || watchlistExpiry instanceof Date) {
        watchlistExpiry = watchlistExpiry.toISOString();
      }
      ctx.watchlistExpiry = watchlistExpiry;
    };
    this.setWatchlistFromPreferences = (watchlistOption) => {
      console.warn("[Morebits] NOTE: Morebits.wiki.page.setWatchlistFromPreferences was deprecated December 2020, please use setWatchlist");
      if (watchlistOption) {
        ctx.watchlistOption = "preferences";
      } else {
        ctx.watchlistOption = "nochange";
      }
    };
    this.setFollowRedirect = (followRedirect, followCrossNsRedirect) => {
      if (ctx.pageLoaded) {
        ctx.statusElement.error("Internal error: cannot change redirect setting after the page has been loaded!");
        return;
      }
      ctx.followRedirect = followRedirect;
      ctx.followCrossNsRedirect = followCrossNsRedirect === void 0 ? ctx.followCrossNsRedirect : followCrossNsRedirect;
    };
    this.setLookupNonRedirectCreator = (flag) => {
      ctx.lookupNonRedirectCreator = flag;
    };
    this.setMoveDestination = (destination) => {
      ctx.moveDestination = destination;
    };
    this.setMoveTalkPage = (flag) => {
      ctx.moveTalkPage = !!flag;
    };
    this.setMoveSubpages = (flag) => {
      ctx.moveSubpages = !!flag;
    };
    this.setMoveSuppressRedirect = (flag) => {
      ctx.moveSuppressRedirect = !!flag;
    };
    this.setEditProtection = (level, expiry) => {
      ctx.protectEdit = {
        level,
        expiry: expiry || "infinity"
      };
    };
    this.setMoveProtection = (level, expiry) => {
      ctx.protectMove = {
        level,
        expiry: expiry || "infinity"
      };
    };
    this.setCreateProtection = (level, expiry) => {
      ctx.protectCreate = {
        level,
        expiry: expiry || "infinity"
      };
    };
    this.setCascadingProtection = (flag) => {
      ctx.protectCascade = !!flag;
    };
    this.suppressProtectWarning = () => {
      ctx.suppressProtectWarning = true;
    };
    this.setOldID = (oldID) => {
      ctx.revertOldID = oldID;
    };
    this.getCurrentID = () => {
      return ctx.revertCurID;
    };
    this.getRevisionUser = () => {
      return ctx.revertUser;
    };
    this.getLastEditTime = () => {
      return ctx.lastEditTime;
    };
    this.setCallbackParameters = (callbackParameters) => {
      ctx.callbackParameters = callbackParameters;
    };
    this.getCallbackParameters = () => {
      return ctx.callbackParameters;
    };
    this.setStatusElement = (statusElement) => {
      ctx.statusElement = statusElement;
    };
    this.getStatusElement = () => {
      return ctx.statusElement;
    };
    this.exists = () => {
      return ctx.pageExists;
    };
    this.getPageID = () => {
      return ctx.pageID;
    };
    this.getContentModel = () => {
      return ctx.contentModel;
    };
    this.getWatched = () => {
      return ctx.watched;
    };
    this.getLoadTime = () => {
      return ctx.loadTime;
    };
    this.getCreator = () => {
      return ctx.creator;
    };
    this.getCreationTimestamp = () => {
      return ctx.timestamp;
    };
    this.canEdit = () => {
      return !!ctx.testActions && ctx.testActions.includes("edit");
    };
    this.lookupCreation = function(onSuccess, onFailure) {
      ctx.onLookupCreationSuccess = onSuccess;
      ctx.onLookupCreationFailure = onFailure || emptyFunction;
      if (!onSuccess) {
        ctx.statusElement.error("Internal error: no onSuccess callback provided to lookupCreation()!");
        ctx.onLookupCreationFailure(this);
        return;
      }
      const query = {
        action: "query",
        prop: "revisions",
        titles: ctx.pageName,
        rvlimit: 1,
        rvprop: "user|timestamp",
        rvdir: "newer",
        format: "json"
      };
      if (ctx.lookupNonRedirectCreator) {
        query.rvsection = 0;
        query.rvprop += "|content";
      }
      if (ctx.followRedirect) {
        query.redirects = "";
      }
      ctx.lookupCreationApi = new Morebits.wiki.api(window.wgULS("抓取页面创建者信息", "抓取頁面建立者資訊"), query, fnLookupCreationSuccess, ctx.statusElement, ctx.onLookupCreationFailure);
      ctx.lookupCreationApi.setParent(this);
      ctx.lookupCreationApi.post();
    };
    this.revert = function(onSuccess, onFailure) {
      ctx.onSaveSuccess = onSuccess;
      ctx.onSaveFailure = onFailure || emptyFunction;
      if (!ctx.revertOldID) {
        ctx.statusElement.error("Internal error: revision ID to revert to was not set before revert!");
        ctx.onSaveFailure(this);
        return;
      }
      ctx.editMode = "revert";
      this.load(fnAutoSave, ctx.onSaveFailure);
    };
    this.move = function(onSuccess, onFailure) {
      ctx.onMoveSuccess = onSuccess;
      ctx.onMoveFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "move", ctx.onMoveFailure)) {
        return;
      }
      if (!ctx.moveDestination) {
        ctx.statusElement.error("Internal error: destination page name was not set before move!");
        ctx.onMoveFailure(this);
        return;
      }
      if (fnCanUseMwUserToken("move")) {
        fnProcessMove.call(this, this);
      } else {
        const query = fnNeedTokenInfoQuery("move");
        ctx.moveApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessMove, ctx.statusElement, ctx.onMoveFailure);
        ctx.moveApi.setParent(this);
        ctx.moveApi.post();
      }
    };
    this.patrol = function() {
      if (!Morebits.userIsSysop && !Morebits.userIsInGroup("patroller")) {
        return;
      }
      const $body = $("body");
      if ($body.find(".patrollink").length) {
        const patrolhref = $body.find(".patrollink a").attr("href");
        ctx.rcid = mw.util.getParamValue("rcid", patrolhref);
        fnProcessPatrol(this, this);
      } else {
        const patrolQuery = {
          action: "query",
          prop: "info",
          meta: "tokens",
          type: "patrol",
          // as long as we're querying, might as well get a token
          list: "recentchanges",
          // check if the page is unpatrolled
          titles: ctx.pageName,
          rcprop: "patrolled",
          rctitle: ctx.pageName,
          rclimit: 1,
          format: "json"
        };
        ctx.patrolApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), patrolQuery, fnProcessPatrol);
        ctx.patrolApi.setParent(this);
        ctx.patrolApi.post();
      }
    };
    this.deletePage = function(onSuccess, onFailure) {
      ctx.onDeleteSuccess = onSuccess;
      ctx.onDeleteFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "delete", ctx.onDeleteFailure)) {
        return;
      }
      if (fnCanUseMwUserToken("delete")) {
        fnProcessDelete.call(this, this);
      } else {
        const query = fnNeedTokenInfoQuery("delete");
        ctx.deleteApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessDelete, ctx.statusElement, ctx.onDeleteFailure);
        ctx.deleteApi.setParent(this);
        ctx.deleteApi.post();
      }
    };
    this.undeletePage = function(onSuccess, onFailure) {
      ctx.onUndeleteSuccess = onSuccess;
      ctx.onUndeleteFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "undelete", ctx.onUndeleteFailure)) {
        return;
      }
      if (fnCanUseMwUserToken("undelete")) {
        fnProcessUndelete.call(this, this);
      } else {
        const query = fnNeedTokenInfoQuery("undelete");
        ctx.undeleteApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessUndelete, ctx.statusElement, ctx.onUndeleteFailure);
        ctx.undeleteApi.setParent(this);
        ctx.undeleteApi.post();
      }
    };
    this.protect = function(onSuccess, onFailure) {
      ctx.onProtectSuccess = onSuccess;
      ctx.onProtectFailure = onFailure || emptyFunction;
      if (!fnPreflightChecks.call(this, "protect", ctx.onProtectFailure)) {
        return;
      }
      if (!ctx.protectEdit && !ctx.protectMove && !ctx.protectCreate) {
        ctx.statusElement.error("Internal error: you must set edit and/or move and/or create protection before calling protect()!");
        ctx.onProtectFailure(this);
        return;
      }
      const query = fnNeedTokenInfoQuery("protect");
      ctx.protectApi = new Morebits.wiki.api(window.wgULS("获取令牌……", "取得權杖……"), query, fnProcessProtect, ctx.statusElement, ctx.onProtectFailure);
      ctx.protectApi.setParent(this);
      ctx.protectApi.post();
    };
    const fnCanUseMwUserToken = (action) => {
      action || (action = "edit");
      if (ctx.watchlistExpiry && !Morebits.string.isInfinity(ctx.watchlistExpiry)) {
        return false;
      }
      if (ctx.followRedirect) {
        if (!ctx.followCrossNsRedirect) {
          return false;
        }
        if (action !== "edit" || ctx.editMode === "all" || ctx.editMode === "revert") {
          return false;
        }
      }
      if (Morebits.userIsSysop && !ctx.suppressProtectWarning) {
        if (new mw.Title(Morebits.pageNameNorm).getPrefixedText() !== new mw.Title(ctx.pageName).getPrefixedText()) {
          return false;
        }
        const editRestriction = mw.config.get("wgRestrictionEdit");
        if (!editRestriction || editRestriction.includes("sysop")) {
          return false;
        }
      }
      return !!mw.user.tokens.get("csrfToken");
    };
    const fnNeedTokenInfoQuery = (action) => {
      const query = {
        action: "query",
        meta: "tokens",
        type: "csrf",
        titles: ctx.pageName,
        prop: "info",
        inprop: "watched",
        format: "json"
      };
      if (action !== "move" || Morebits.userIsSysop) {
        query.inprop += "|protection";
      }
      if (ctx.followRedirect && action !== "undelete") {
        query.redirects = "";
      }
      return query;
    };
    const fnAutoSave = (pageobj) => {
      pageobj.save(ctx.onSaveSuccess, ctx.onSaveFailure);
    };
    const fnLoadSuccess = function() {
      const response = ctx.loadApi.getResponse().query;
      if (!fnCheckPageName(response, ctx.onLoadFailure)) {
        return;
      }
      const [page] = response.pages;
      let rev;
      ctx.pageExists = !page.missing;
      if (ctx.pageExists) {
        [rev] = page.revisions;
        ctx.lastEditTime = rev.timestamp;
        ctx.pageText = rev.content;
        ctx.pageID = page.pageid;
      } else {
        ctx.pageText = "";
        ctx.pageID = 0;
      }
      ctx.csrfToken = response.tokens.csrftoken;
      if (!ctx.csrfToken) {
        ctx.statusElement.error(window.wgULS("未能获取编辑令牌。", "未能取得編輯權杖。"));
        ctx.onLoadFailure(this);
        return;
      }
      ctx.loadTime = ctx.loadApi.getResponse().curtimestamp;
      if (!ctx.loadTime) {
        ctx.statusElement.error(window.wgULS("未能获取当前时间戳。", "未能取得當前時間戳。"));
        ctx.onLoadFailure(this);
        return;
      }
      ctx.contentModel = page.contentmodel;
      ctx.watched = page.watchlistexpiry || page.watched;
      if (Morebits.userIsSysop) {
        const editProt = page.protection.filter((pr) => {
          return pr.type === "edit" && pr.level === "sysop";
        }).pop();
        if (editProt) {
          ctx.fullyProtected = editProt.expiry;
        } else {
          ctx.fullyProtected = false;
        }
      }
      ctx.revertCurID = page.lastrevid;
      const testactions = page.actions;
      ctx.testActions = [];
      for (var _i6 = 0, _Object$keys = Object.keys(testactions); _i6 < _Object$keys.length; _i6++) {
        const action = _Object$keys[_i6];
        if (testactions[action]) {
          ctx.testActions[ctx.testActions.length] = action;
        }
      }
      if (ctx.editMode === "revert") {
        ctx.revertCurID = rev && rev.revid;
        if (!ctx.revertCurID) {
          ctx.statusElement.error(window.wgULS("未能获取当前修订版本ID。", "未能取得目前修訂版本ID。"));
          ctx.onLoadFailure(this);
          return;
        }
        ctx.revertUser = rev && rev.user;
        if (!ctx.revertUser) {
          if (rev && rev.userhidden) {
            ctx.revertUser = window.wgULS("<用户名已隐藏>", "<使用者名稱已隱藏>");
          } else {
            ctx.statusElement.error(window.wgULS("未能获取此修订版本的编辑者。", "未能取得此修訂版本的編輯者。"));
            ctx.onLoadFailure(this);
            return;
          }
        }
        ctx.editSummary = "[[QW:UNDO|撤销]]由 ".concat(ctx.revertUser, " 所做出的").concat(window.wgULS("修订 ", "修訂 ")).concat(ctx.revertOldID, "：").concat(ctx.editSummary);
      }
      ctx.pageLoaded = true;
      ctx.onLoadSuccess(this);
    };
    const fnCheckPageName = function(response, onFailure) {
      onFailure || (onFailure = emptyFunction);
      const page = response.pages && response.pages[0];
      if (page) {
        if (page.invalid) {
          ctx.statusElement.error(window.wgULS("标题不合法：", "標題不合法：".concat(ctx.pageName)));
          onFailure(this);
          return false;
        }
        const resolvedName = page.title;
        if (response.redirects) {
          const origNs = new mw.Title(ctx.pageName).namespace;
          const newNs = new mw.Title(resolvedName).namespace;
          if (origNs !== newNs && !ctx.followCrossNsRedirect) {
            ctx.statusElement.error(ctx.pageName + window.wgULS("是跨命名空间重定向到", "是跨命名空間重新導向到") + resolvedName + window.wgULS("，略过", "，略過"));
            onFailure(this);
            return false;
          }
          new Morebits.status(window.wgULS("信息", "資訊"), window.wgULS("从 ", "從 ") + ctx.pageName + window.wgULS(" 重定向到 ", " 重新導向到 ") + resolvedName);
        }
        ctx.pageName = resolvedName;
      } else {
        ctx.statusElement.error(window.wgULS("不能解析页面的重定向：", "不能解析頁面的重新導向：") + ctx.pageName);
        onFailure(this);
        ++Morebits.wiki.numberOfActionsLeft;
        return false;
      }
      return true;
    };
    const fnApplyWatchlistExpiry = () => {
      if (ctx.watchlistExpiry) {
        if (!ctx.watched || Morebits.string.isInfinity(ctx.watchlistExpiry)) {
          return true;
        } else if (typeof ctx.watched === "string") {
          let newExpiry;
          const rel = ctx.watchlistExpiry.split(" ");
          try {
            newExpiry = new Morebits.date().add(rel[0], rel[1]);
          } catch {
            newExpiry = new Morebits.date(ctx.watchlistExpiry);
          }
          if (newExpiry.isValid()) {
            if (newExpiry.isAfter(new Morebits.date(ctx.watched))) {
              return true;
            }
          } else {
            return true;
          }
        }
      }
      return false;
    };
    const fnSaveSuccess = function() {
      ctx.editMode = "all";
      const response = ctx.saveApi.getResponse();
      if (response.edit.result === "Success") {
        const link = document.createElement("a");
        link.setAttribute("href", mw.util.getUrl(ctx.pageName));
        link.appendChild(document.createTextNode(ctx.pageName));
        ctx.statusElement.info(["完成（", link, "）"]);
        if (ctx.onSaveSuccess) {
          ctx.onSaveSuccess(this);
        }
        return;
      }
      if (response.edit.captcha) {
        ctx.statusElement.error(window.wgULS("不能保存页面，因服务器要求您输入验证码。", "不能儲存頁面，因伺服器要求您輸入驗證碼。"));
      } else {
        ctx.statusElement.error(window.wgULS("保存页面时由API得到未知错误", "儲存頁面時由API得到未知錯誤"));
      }
      ++Morebits.wiki.numberOfActionsLeft;
      ctx.onSaveFailure(this);
    };
    const fnSaveError = function() {
      const errorCode = ctx.saveApi.getErrorCode();
      if (errorCode === "editconflict" && ctx.conflictRetries++ < ctx.maxConflictRetries) {
        const purgeQuery = {
          action: "purge",
          titles: ctx.pageName
          // redirects are already resolved
        };
        const purgeApi = new Morebits.wiki.api(window.wgULS("检测到编辑冲突，正在更新服务器缓存", "檢測到編輯衝突，正在更新伺服器快取"), purgeQuery, () => {
          --Morebits.wiki.numberOfActionsLeft;
          ctx.statusElement.info(window.wgULS("检测到编辑冲突，重试修改", "檢測到編輯衝突，重試修改"));
          if (fnCanUseMwUserToken("edit")) {
            ctx.saveApi.post();
          } else {
            ctx.loadApi.post();
          }
        }, ctx.statusElement);
        purgeApi.post();
      } else if ((errorCode === null || errorCode === void 0) && ctx.retries++ < ctx.maxRetries) {
        ctx.statusElement.info(window.wgULS("保存失败，在2秒后重试……", "儲存失敗，在2秒後重試……"));
        --Morebits.wiki.numberOfActionsLeft;
        sleep(2e3).then(() => {
          ctx.saveApi.post();
        });
      } else {
        const response = ctx.saveApi.getResponse();
        const errorData = response.error || // bc error format
        response.errors[0].data;
        switch (errorCode) {
          case "protectedpage":
            ctx.statusElement.error(window.wgULS("不能保存修改：页面被保护", "不能儲存修改：頁面被保護"));
            break;
          case "abusefilter-disallowed":
            ctx.statusElement.error(window.wgULS("编辑被防滥用过滤器规则“", "編輯被防濫用過濾器規則「") + errorData.abusefilter.description + window.wgULS("”阻止。若您认为您的该次编辑是有意义的，请至 LIB_talk:管理员告示板 提报。", "」阻止。若您認為您的該次編輯是有意義的，請至 LIB_talk:管理員告示板 提報。"));
            break;
          case "abusefilter-warning":
            ctx.statusElement.error([window.wgULS("编辑被防滥用过滤器规则“", "編輯被防濫用過濾器規則「"), errorData.abusefilter.description, window.wgULS("”警告，若您仍希望做出该编辑，请尝试重新提交，根据过滤器的设置您可能可以作出此编辑。", "」警告，若您仍希望做出該編輯，請嘗試重新提交，根據過濾器的設定您可能可以作出此編輯。")]);
            break;
          case "spamblacklist": {
            const [spam] = errorData.spamblacklist.matches;
            ctx.statusElement.error(window.wgULS("不能保存页面，因URL ", "不能儲存頁面，因URL ") + spam + window.wgULS(" 在垃圾链接黑名单中。", " 在垃圾連結黑名單中。"));
            break;
          }
          default:
            ctx.statusElement.error(window.wgULS("不能保存修改：", "不能儲存修改：") + ctx.saveApi.getErrorText());
        }
        ctx.editMode = "all";
        if (ctx.onSaveFailure) {
          ctx.onSaveFailure(this);
        }
      }
    };
    const isTextRedirect = (text) => {
      if (!text) {
        return false;
      }
      return Morebits.l10n.redirectTagAliases.some((tag) => {
        return new RegExp("^\\s*".concat(tag, "\\W"), "i").test(text);
      });
    };
    const fnLookupCreationSuccess = function() {
      const response = ctx.lookupCreationApi.getResponse().query;
      if (!fnCheckPageName(response, ctx.onLookupCreationFailure)) {
        return;
      }
      const rev = response.pages[0].revisions && response.pages[0].revisions[0];
      if (!rev) {
        ctx.statusElement.error(window.wgULS("无法找到", "無法找到") + ctx.pageName + window.wgULS("的任何修订版本", "的任何修訂版本"));
        ctx.onLookupCreationFailure(this);
        return;
      }
      if (!ctx.lookupNonRedirectCreator || !isTextRedirect(rev.content)) {
        ctx.creator = rev.user;
        if (!ctx.creator) {
          ctx.statusElement.error(window.wgULS("无法获取页面创建者的名字", "無法取得頁面建立者的名字"));
          ctx.onLookupCreationFailure(this);
          return;
        }
        ctx.timestamp = rev.timestamp;
        if (!ctx.timestamp) {
          ctx.statusElement.error(window.wgULS("无法获取页面创建时间", "無法取得頁面建立時間"));
          ctx.onLookupCreationFailure(this);
          return;
        }
        ctx.statusElement.info(window.wgULS("已获取页面创建信息", "已取得頁面建立資訊"));
        ctx.onLookupCreationSuccess(this);
      } else {
        ctx.lookupCreationApi.query.rvlimit = 50;
        ctx.lookupCreationApi.query.titles = ctx.pageName;
        ctx.lookupCreationApi = new Morebits.wiki.api(window.wgULS("获取页面创建信息", "取得頁面建立資訊"), ctx.lookupCreationApi.query, fnLookupNonRedirectCreator, ctx.statusElement, ctx.onLookupCreationFailure);
        ctx.lookupCreationApi.setParent(this);
        ctx.lookupCreationApi.post();
      }
    };
    const fnLookupNonRedirectCreator = function() {
      const response = ctx.lookupCreationApi.getResponse().query;
      const revs = response.pages[0].revisions;
      var _iterator8 = _createForOfIteratorHelper(revs), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          const rev = _step8.value;
          if (!isTextRedirect(rev.content)) {
            ctx.creator = rev.user;
            ctx.timestamp = rev.timestamp;
            break;
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      if (!ctx.creator) {
        ctx.creator = revs[0].user;
        ctx.timestamp = revs[0].timestamp;
        if (!ctx.creator) {
          ctx.statusElement.error(window.wgULS("无法获取页面创建者的名字", "無法取得頁面建立者的名字"));
          ctx.onLookupCreationFailure(this);
          return;
        }
      }
      if (!ctx.timestamp) {
        ctx.statusElement.error(window.wgULS("无法获取页面创建时间", "無法取得頁面建立時間"));
        ctx.onLookupCreationFailure(this);
        return;
      }
      ctx.statusElement.info(window.wgULS("已获取页面创建信息", "已取得頁面建立資訊"));
      ctx.onLookupCreationSuccess(this);
    };
    const fnPreflightChecks = function(action, onFailure) {
      if (!Morebits.userIsSysop && action !== "move") {
        ctx.statusElement.error(window.wgULS("无法对页面进行“", "無法對頁面進行「") + action + window.wgULS("”操作：只有管理员可以进行此操作", "」操作：只有管理員可以進行此操作"));
        onFailure(this);
        return false;
      }
      if (!ctx.editSummary) {
        ctx.statusElement.error("Internal error: ".concat(action, " reason not set (use setEditSummary function)!"));
        onFailure(this);
        return false;
      }
      return true;
    };
    const fnProcessChecks = function(action, onFailure, response) {
      const [{
        missing
      }] = response.pages;
      const actionMissing = missing && ["delete", "move"].includes(action);
      const protectMissing = action === "protect" && missing && (ctx.protectEdit || ctx.protectMove);
      const saltMissing = action === "protect" && !missing && ctx.protectCreate;
      if (actionMissing || protectMissing || saltMissing) {
        ctx.statusElement.error("".concat(window.wgULS("无法对页面进行“", "無法對頁面進行「") + action + window.wgULS("”操作，因为页面", "」操作，因為頁面") + (missing ? "已不" : window.wgULS("已经", "已經")), "存在"));
        onFailure(this);
        return false;
      }
      let editprot;
      if (action === "undelete") {
        editprot = response.pages[0].protection.filter((pr) => {
          return pr.type === "create" && pr.level === "sysop";
        }).pop();
      } else if (action === "delete" || action === "move") {
        editprot = response.pages[0].protection.filter((pr) => {
          return pr.type === "edit" && pr.level === "sysop";
        }).pop();
      }
      if (editprot && !ctx.suppressProtectWarning && !confirm(window.wgULS("您即将对全保护页面“", "您即將對全保護頁面「") + ctx.pageName + (editprot.expiry === "infinity" ? window.wgULS("”（永久）", "」（永久）") : "".concat(window.wgULS("”（到期：", "」（到期：") + new Morebits.date(editprot.expiry).calendar("utc"), " (UTC)）")) + window.wgULS("”进行“", "」進行「") + action + window.wgULS("”操作", "」操作") + window.wgULS("。\n\n单击确定以继续操作，或单击取消以取消操作。", "。\n\n點擊確定以繼續操作，或點擊取消以取消操作。"))) {
        ctx.statusElement.error(window.wgULS("已取消对全保护页面的操作。", "已取消對全保護頁面的操作。"));
        onFailure(this);
        return false;
      }
      if (!response.tokens.csrftoken) {
        ctx.statusElement.error(window.wgULS("无法获取令牌。", "無法取得權杖。"));
        onFailure(this);
        return false;
      }
      return true;
    };
    const fnProcessMove = function() {
      let pageTitle;
      let token;
      if (fnCanUseMwUserToken("move")) {
        token = mw.user.tokens.get("csrfToken");
        pageTitle = ctx.pageName;
      } else {
        const response = ctx.moveApi.getResponse().query;
        if (!fnProcessChecks("move", ctx.onMoveFailure, response)) {
          return;
        }
        token = response.tokens.csrftoken;
        const [page] = response.pages;
        pageTitle = page.title;
        ctx.watched = page.watchlistexpiry || page.watched;
      }
      const query = {
        action: "move",
        from: pageTitle,
        to: ctx.moveDestination,
        token,
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      if (ctx.moveTalkPage) {
        query.movetalk = "true";
      }
      if (ctx.moveSubpages) {
        query.movesubpages = "true";
      }
      if (ctx.moveSuppressRedirect) {
        query.noredirect = "true";
      }
      ctx.moveProcessApi = new Morebits.wiki.api(window.wgULS("移动页面……", "移動頁面……"), query, ctx.onMoveSuccess, ctx.statusElement, ctx.onMoveFailure);
      ctx.moveProcessApi.setParent(this);
      ctx.moveProcessApi.post();
    };
    const fnProcessPatrol = function() {
      const query = {
        action: "patrol",
        format: "json"
      };
      if (ctx.rcid) {
        query.rcid = ctx.rcid;
        query.token = mw.user.tokens.get("patrolToken");
      } else {
        const response = ctx.patrolApi.getResponse().query;
        if (!response.recentchanges[0].unpatrolled) {
          return;
        }
        const [{
          lastrevid
        }] = response.pages;
        if (!lastrevid) {
          return;
        }
        query.revid = lastrevid;
        const token = response.tokens.csrftoken;
        if (!token) {
          return;
        }
        query.token = token;
      }
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      const patrolStat = new Morebits.status(window.wgULS("标记页面为已巡查", "標記頁面為已巡查"));
      ctx.patrolProcessApi = new Morebits.wiki.api(window.wgULS("巡查页面……", "巡查頁面……"), query, null, patrolStat);
      ctx.patrolProcessApi.setParent(this);
      ctx.patrolProcessApi.post();
    };
    const fnProcessDelete = function() {
      let pageTitle;
      let token;
      if (fnCanUseMwUserToken("delete")) {
        token = mw.user.tokens.get("csrfToken");
        pageTitle = ctx.pageName;
      } else {
        const response = ctx.deleteApi.getResponse().query;
        if (!fnProcessChecks("delete", ctx.onDeleteFailure, response)) {
          return;
        }
        token = response.tokens.csrftoken;
        const [page] = response.pages;
        pageTitle = page.title;
        ctx.watched = page.watchlistexpiry || page.watched;
      }
      const query = {
        action: "delete",
        title: pageTitle,
        token,
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      ctx.deleteProcessApi = new Morebits.wiki.api(window.wgULS("删除页面……", "刪除頁面……"), query, ctx.onDeleteSuccess, ctx.statusElement, fnProcessDeleteError);
      ctx.deleteProcessApi.setParent(this);
      ctx.deleteProcessApi.post();
    };
    const fnProcessDeleteError = function() {
      const errorCode = ctx.deleteProcessApi.getErrorCode();
      if (errorCode === "internal_api_error_DBQueryError" && ctx.retries++ < ctx.maxRetries) {
        ctx.statusElement.info(window.wgULS("数据库查询错误，重试", "資料庫查詢錯誤，重試"));
        --Morebits.wiki.numberOfActionsLeft;
        ctx.deleteProcessApi.post();
      } else if (errorCode === "missingtitle") {
        ctx.statusElement.error(window.wgULS("不能删除页面，因其已不存在", "不能刪除頁面，因其已不存在"));
        if (ctx.onDeleteFailure) {
          ctx.onDeleteFailure.call(this, ctx.deleteProcessApi);
        }
      } else {
        ctx.statusElement.error(window.wgULS("无法删除页面：", "無法刪除頁面：") + ctx.deleteProcessApi.getErrorText());
        if (ctx.onDeleteFailure) {
          ctx.onDeleteFailure.call(this, ctx.deleteProcessApi);
        }
      }
    };
    const fnProcessUndelete = function() {
      let pageTitle;
      let token;
      if (fnCanUseMwUserToken("undelete")) {
        token = mw.user.tokens.get("csrfToken");
        pageTitle = ctx.pageName;
      } else {
        const response = ctx.undeleteApi.getResponse().query;
        if (!fnProcessChecks("undelete", ctx.onUndeleteFailure, response)) {
          return;
        }
        token = response.tokens.csrftoken;
        const [page] = response.pages;
        pageTitle = page.title;
        ctx.watched = page.watchlistexpiry || page.watched;
      }
      const query = {
        action: "undelete",
        title: pageTitle,
        token,
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      ctx.undeleteProcessApi = new Morebits.wiki.api(window.wgULS("还原页面……", "還原頁面……"), query, ctx.onUndeleteSuccess, ctx.statusElement, fnProcessUndeleteError);
      ctx.undeleteProcessApi.setParent(this);
      ctx.undeleteProcessApi.post();
    };
    const fnProcessUndeleteError = function() {
      const errorCode = ctx.undeleteProcessApi.getErrorCode();
      if (errorCode === "internal_api_error_DBQueryError") {
        if (ctx.retries++ < ctx.maxRetries) {
          ctx.statusElement.info(window.wgULS("数据库查询错误，重试", "資料庫查詢錯誤，重試"));
          --Morebits.wiki.numberOfActionsLeft;
          ctx.undeleteProcessApi.post();
        } else {
          ctx.statusElement.error(window.wgULS("持续的数据库查询错误，重新加载页面并重试", "持續的資料庫查詢錯誤，重新載入頁面並重試"));
          if (ctx.onUndeleteFailure) {
            ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi);
          }
        }
      } else if (errorCode === "cantundelete") {
        ctx.statusElement.error(window.wgULS("无法还原删除页面，因没有版本供还原或已被还原", "無法還原刪除頁面，因沒有版本供還原或已被還原"));
        if (ctx.onUndeleteFailure) {
          ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi);
        }
      } else {
        ctx.statusElement.error(window.wgULS("无法还原页面：", "無法還原頁面：") + ctx.undeleteProcessApi.getErrorText());
        if (ctx.onUndeleteFailure) {
          ctx.onUndeleteFailure.call(this, ctx.undeleteProcessApi);
        }
      }
    };
    const fnProcessProtect = function() {
      const response = ctx.protectApi.getResponse().query;
      if (!fnProcessChecks("protect", ctx.onProtectFailure, response)) {
        return;
      }
      const token = response.tokens.csrftoken;
      const [page] = response.pages;
      const pageTitle = page.title;
      ctx.watched = page.watchlistexpiry || page.watched;
      const prs = response.pages[0].protection;
      let editprot;
      let moveprot;
      let createprot;
      var _iterator9 = _createForOfIteratorHelper(prs), _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
          const pr = _step9.value;
          if (pr.type === "edit" && !pr.source) {
            editprot = pr;
          } else if (pr.type === "move") {
            moveprot = pr;
          } else if (pr.type === "create") {
            createprot = pr;
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      if (!ctx.protectEdit && editprot) {
        ctx.protectEdit = {
          level: editprot.level,
          expiry: editprot.expiry
        };
      }
      if (!ctx.protectMove && moveprot) {
        ctx.protectMove = {
          level: moveprot.level,
          expiry: moveprot.expiry
        };
      }
      if (!ctx.protectCreate && createprot) {
        ctx.protectCreate = {
          level: createprot.level,
          expiry: createprot.expiry
        };
      }
      if (ctx.protectCascade === null) {
        ctx.protectCascade = !!prs.filter((pr) => {
          return pr.cascade;
        }).length;
      }
      if (ctx.protectCascade) {
        if ((!ctx.protectEdit || ctx.protectEdit.level !== "sysop" || !ctx.protectMove || ctx.protectMove.level !== "sysop") && !confirm(window.wgULS("您已对“", "您已對「") + ctx.pageName + window.wgULS("”启用了连锁保护", "」啟用了連鎖保護") + window.wgULS("，但没有设置仅管理员的保护级别。\n\n", "，但沒有設定僅管理員的保護級別。\n\n") + window.wgULS("单击确认以自动调整并继续连锁全保护，单击取消以跳过此操作", "點擊確認以自動調整並繼續連鎖全保護，點擊取消以跳過此操作"))) {
          ctx.statusElement.error(window.wgULS("连锁保护已取消。", "連鎖保護已取消。"));
          ctx.onProtectFailure(this);
          return;
        }
        ctx.protectEdit.level = "sysop";
        ctx.protectMove.level = "sysop";
      }
      const protections = [];
      const expirys = [];
      if (ctx.protectEdit) {
        protections[protections.length] = "edit=".concat(ctx.protectEdit.level);
        expirys[expirys.length] = ctx.protectEdit.expiry;
      }
      if (ctx.protectMove) {
        protections[protections.length] = "move=".concat(ctx.protectMove.level);
        expirys[expirys.length] = ctx.protectMove.expiry;
      }
      if (ctx.protectCreate) {
        protections[protections.length] = "create=".concat(ctx.protectCreate.level);
        expirys[expirys.length] = ctx.protectCreate.expiry;
      }
      const query = {
        action: "protect",
        title: pageTitle,
        token,
        protections: protections.join("|"),
        expiry: expirys.join("|"),
        reason: ctx.editSummary,
        watchlist: ctx.watchlistOption,
        format: "json"
      };
      if (ctx.changeTags) {
        query.tags = ctx.changeTags;
      }
      if (fnApplyWatchlistExpiry()) {
        query.watchlistexpiry = ctx.watchlistExpiry;
      }
      if (ctx.protectCascade) {
        query.cascade = "true";
      }
      ctx.protectProcessApi = new Morebits.wiki.api(window.wgULS("保护页面……", "保護頁面……"), query, ctx.onProtectSuccess, ctx.statusElement, ctx.onProtectFailure);
      ctx.protectProcessApi.setParent(this);
      ctx.protectProcessApi.post();
    };
    const sleep = (milliseconds) => {
      const deferred = $.Deferred();
      setTimeout(deferred.resolve, milliseconds);
      return deferred;
    };
  };
  Morebits.wiki.preview = function(previewbox) {
    this.previewbox = previewbox;
    $(previewbox).addClass("morebits-previewbox").hide();
    this.beginRender = (wikitext, pageTitle, sectionTitle) => {
      $(previewbox).show();
      const statusspan = document.createElement("span");
      previewbox.appendChild(statusspan);
      Morebits.status.init(statusspan);
      let pageName = mw.config.get("wgPageName");
      if (mw.config.get("wgPageContentModel") !== "wikitext") {
        pageName = "Draft:".concat(pageName);
      }
      const query = {
        action: "parse",
        prop: ["text", "modules"],
        pst: true,
        // PST = pre-save transform; this makes substitution work properly
        preview: true,
        text: wikitext,
        title: pageTitle || pageName,
        disablelimitreport: true,
        disableeditsection: true,
        uselang: mw.config.get("wgUserLanguage"),
        // Use wgUserLanguage for preview
        format: "json"
      };
      if (sectionTitle) {
        query.section = "new";
        query.sectiontitle = sectionTitle;
      }
      const renderApi = new Morebits.wiki.api(window.wgULS("加载中……", "載入中……"), query, fnRenderSuccess, new Morebits.status(window.wgULS("预览", "預覽")));
      renderApi.post();
    };
    const fnRenderSuccess = (apiobj) => {
      const response = apiobj.getResponse();
      const html = response.parse.text;
      if (!html) {
        apiobj.statelem.error(window.wgULS("加载预览失败，或模板为空", "載入預覽失敗，或模板為空"));
        return;
      }
      previewbox.innerHTML = html;
      mw.loader.load(response.parse.modulestyles);
      mw.loader.load(response.parse.modules);
      $(previewbox).find("a").attr("target", "_blank").attr("rel", "noopener noreferrer");
    };
    this.closePreview = () => {
      $(previewbox).empty().hide();
    };
  };
  Morebits.wikitext = {};
  Morebits.wikitext.parseTemplate = (text, start) => {
    start || (start = 0);
    const level = [];
    let count = -1;
    let unnamed = 0;
    let equals = -1;
    let current = "";
    const result = {
      name: "",
      parameters: {}
    };
    let key;
    let value;
    const findParam = (final) => {
      if (count === -1) {
        result.name = current.slice(2).trim();
        ++count;
      } else if (equals === -1) {
        const param = final ? current.slice(equals + 1, -2) : current;
        if (param) {
          result.parameters[++unnamed] = param;
          ++count;
        }
      } else {
        key = current.slice(0, Math.max(0, equals)).trim();
        value = final ? current.slice(equals + 1, -2).trim() : current.slice(Math.max(0, equals + 1)).trim();
        result.parameters[key] = value;
        equals = -1;
      }
    };
    for (let i = start; i < text.length; ++i) {
      const test3 = text.slice(i, i + 3);
      if (test3 === "{{{" || test3 === "}}}" && level.at(-1) === 3) {
        current += test3;
        i += 2;
        if (test3 === "{{{") {
          level[level.length] = 3;
        } else {
          level.pop();
        }
        continue;
      }
      const test2 = text.slice(i, i + 2);
      if (test2 === "{{" || test2 === "[[") {
        current += test2;
        ++i;
        if (test2 === "{{") {
          level[level.length] = 2;
        } else {
          level[level.length] = "wl";
        }
        continue;
      }
      if (test2 === "}}" && level.at(-1) === 2 || test2 === "]]" && level.at(-1) === "wl") {
        current += test2;
        ++i;
        level.pop();
        if (test2 === "}}" && level.length === 0) {
          findParam(true);
          break;
        }
        continue;
      }
      if (text.charAt(i) === "|" && level.length === 1) {
        findParam();
        current = "";
      } else if (equals === -1 && text.charAt(i) === "=" && level.length === 1) {
        equals = current.length;
        current += text.charAt(i);
      } else {
        current += text.charAt(i);
      }
    }
    return result;
  };
  Morebits.wikitext.page = function(text) {
    this.text = text;
  };
  Morebits.wikitext.page.prototype = {
    text: "",
    /**
     * Removes links to `link_target` from the page text.
     *
     * @param {string} linkTarget
     * @returns {Morebits.wikitext.page}
     */
    removeLink(linkTarget) {
      const mwTitle = mw.Title.newFromText(linkTarget);
      const namespaceID = mwTitle.getNamespaceId();
      const title = mwTitle.getMainText();
      let linkRegexString = "";
      if (namespaceID !== 0) {
        linkRegexString = "".concat(Morebits.namespaceRegex(namespaceID), ":");
      }
      linkRegexString += Morebits.pageNameRegex(title);
      const isFileOrCategory = [6, 14].includes(namespaceID);
      const colon = isFileOrCategory ? ":" : ":?";
      const simpleLinkRegex = new RegExp("\\[\\[".concat(colon, "(").concat(linkRegexString, ")\\]\\]"), "g");
      const pipedLinkRegex = new RegExp("\\[\\[".concat(colon).concat(linkRegexString, "\\|(.+?)\\]\\]"), "g");
      this.text = this.text.replace(simpleLinkRegex, "$1").replace(pipedLinkRegex, "$1");
      return this;
    },
    /**
     * Comments out images from page text; if used in a gallery, deletes the whole line.
     * If used as a template argument (not necessarily with `File:` prefix), the template parameter is commented out.
     *
     * @param {string} image - Image name without `File:` prefix.
     * @param {string} [reason] - Reason to be included in comment, alongside the commented-out image.
     * @returns {Morebits.wikitext.page}
     */
    commentOutImage(image, reason) {
      const unbinder = new Morebits.unbinder(this.text);
      unbinder.unbind("<!--", "-->");
      reason = reason ? "".concat(reason, ": ") : "";
      const imageRegexString = Morebits.pageNameRegex(image);
      const linksRegex = new RegExp("\\[\\[".concat(Morebits.namespaceRegex(6), ":\\s*").concat(imageRegexString, "\\s*[\\|(?:\\]\\])]"));
      const allLinks = Morebits.string.splitWeightedByKeys(unbinder.content, "[[", "]]");
      var _iterator10 = _createForOfIteratorHelper(allLinks), _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; ) {
          const allLink = _step10.value;
          if (linksRegex.test(allLink)) {
            const replacement = "<!-- ".concat(reason).concat(allLink, " -->");
            unbinder.content = unbinder.content.replace(allLink, replacement);
            unbinder.unbind("<!--", "-->");
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      const galleryImageRegex = new RegExp("(^\\s*".concat(Morebits.namespaceRegex(6), ":\\s*").concat(imageRegexString, "\\s*(?:\\|.*?$|$))"), "mg");
      unbinder.content = unbinder.content.replace(galleryImageRegex, "<!-- ".concat(reason, "$1 -->"));
      unbinder.unbind("<!--", "-->");
      const freeImageRegex = new RegExp("(\\|\\s*(?:[\\w\\s]+\\=)?\\s*(?:".concat(Morebits.namespaceRegex(6), ":\\s*)?").concat(imageRegexString, ")"), "mg");
      unbinder.content = unbinder.content.replace(freeImageRegex, "<!-- ".concat(reason, "$1 -->"));
      this.text = unbinder.rebind();
      return this;
    },
    /**
     * Converts uses of [[File:`image`]] to [[File:`image`|`data`]].
     *
     * @param {string} image - Image name without File: prefix.
     * @param {string} data - The display options.
     * @returns {Morebits.wikitext.page}
     */
    addToImageComment(image, data) {
      const imageRegexString = Morebits.pageNameRegex(image);
      const linksRegex = new RegExp("\\[\\[".concat(Morebits.namespaceRegex(6), ":\\s*").concat(imageRegexString, "\\s*[\\|(?:\\]\\])]"));
      const allLinks = Morebits.string.splitWeightedByKeys(this.text, "[[", "]]");
      var _iterator11 = _createForOfIteratorHelper(allLinks), _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done; ) {
          let replacement = _step11.value;
          if (linksRegex.test(replacement)) {
            replacement = replacement.replace(/\]\]$/, "|".concat(data, "]]"));
            this.text = this.text.replace(replacement, replacement);
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
      const galleryRegex = new RegExp("^(\\s*".concat(imageRegexString, ".*?)\\|?(.*?)$"), "mg");
      const newtext = "$1|$2 ".concat(data);
      this.text = this.text.replace(galleryRegex, newtext);
      return this;
    },
    /**
     * Remove all transclusions of a template from page text.
     *
     * @param {string} template - Page name whose transclusions are to be removed,
     * include namespace prefix only if not in template namespace.
     * @returns {Morebits.wikitext.page}
     */
    removeTemplate(template) {
      const templateRegexString = Morebits.pageNameRegex(template);
      const linksRegex = new RegExp("\\{\\{(?:".concat(Morebits.namespaceRegex(10), ":)?\\s*").concat(templateRegexString, "\\s*[\\|(?:\\}\\})]"));
      const allTemplates = Morebits.string.splitWeightedByKeys(this.text, "{{", "}}", ["{{{", "}}}"]);
      var _iterator12 = _createForOfIteratorHelper(allTemplates), _step12;
      try {
        for (_iterator12.s(); !(_step12 = _iterator12.n()).done; ) {
          const allTemplate = _step12.value;
          if (linksRegex.test(allTemplate)) {
            this.text = this.text.replace(allTemplate, "");
          }
        }
      } catch (err) {
        _iterator12.e(err);
      } finally {
        _iterator12.f();
      }
      return this;
    },
    /**
     * Smartly insert a tag atop page text but after specified templates,
     * such as hatnotes, short description, or deletion and protection templates.
     * Notably, does *not* insert a newline after the tag.
     *
     * @param {string} tag - The tag to be inserted.
     * @param {string|string[]} regex - Templates after which to insert tag,
     * given as either as a (regex-valid) string or an array to be joined by pipes.
     * @param {string} [flags=i] - Regex flags to apply.  `''` to provide no flags;
     * other falsey values will default to `i`.
     * @param {string|string[]} [preRegex] - Optional regex string or array to match
     * before any template matches (i.e. before `{{`), such as html comments.
     * @returns {Morebits.wikitext.page}
     */
    insertAfterTemplates(tag, regex, flags, preRegex) {
      if (tag === void 0) {
        throw new TypeError("No tag provided");
      }
      if (regex === void 0 || !regex.length) {
        throw new Error("No regex provided");
      } else if (Array.isArray(regex)) {
        regex = regex.join("|");
      }
      if (typeof flags !== "string") {
        flags = "i";
      }
      if (!preRegex || !preRegex.length) {
        preRegex = "";
      } else if (Array.isArray(preRegex)) {
        preRegex = preRegex.join("|");
      }
      this.text = this.text.replace(new RegExp(
        // leading whitespace
        // capture template(s)
        // Pre-template regex, such as leading html comments
        // begin template format
        // Template regex
        // end main template name, optionally with a number
        // Probably remove the (?:) though
        // template parameters
        // end template format
        // end capture
        // trailing whitespace
        "^\\s*(?:((?:\\s*".concat(
          // Pre-template regex, such as leading html comments
          preRegex,
          "|\\{\\{\\s*(?:"
        ).concat(
          // Template regex
          regex,
          ")\\d*\\s*(\\|(?:\\{\\{[^{}]*\\}\\}|[^{}])*)?\\}\\})+(?:\\s*\\n)?)\\s*)?"
        ),
        flags
      ), "$1".concat(tag));
      return this;
    },
    /**
     * Get the manipulated wikitext.
     *
     * @returns {string}
     */
    getText() {
      return this.text;
    }
  };
  Morebits.userspaceLogger = function(logPageName) {
    if (!logPageName) {
      throw new Error("no log page name specified");
    }
    this.initialText = "";
    this.headerLevel = 3;
    this.changeTags = "";
    this.log = function(logText, summaryText) {
      const def = $.Deferred();
      if (!logText) {
        return def.reject();
      }
      const page = new Morebits.wiki.page("User:".concat(mw.config.get("wgUserName"), "/").concat(logPageName), window.wgULS("将项目加入到用户空间日志", "將項目加入到使用者空間日誌"));
      page.load((pageobj) => {
        let text = pageobj.getPageText() || this.initialText;
        const date = new Morebits.date(pageobj.getLoadTime());
        if (!date.monthHeaderRegex().exec(text)) {
          text += "\n\n".concat(date.monthHeader(this.headerLevel));
        }
        pageobj.setPageText("".concat(text, "\n").concat(logText));
        pageobj.setEditSummary(summaryText);
        pageobj.setChangeTags(this.changeTags);
        pageobj.setCreateOption("recreate");
        pageobj.save(def.resolve, def.reject);
      });
      return def;
    };
  };
  Morebits.status = function(text, stat, type) {
    this.textRaw = text;
    this.text = Morebits.createHtml(text);
    this.type = type || "status";
    this.generate();
    if (stat) {
      this.update(stat, type);
    }
  };
  Morebits.status.init = (root) => {
    if (!(root instanceof Element)) {
      throw new TypeError("object not an instance of Element");
    }
    while (root.hasChildNodes()) {
      root.removeChild(root.firstChild);
    }
    Morebits.status.root = root;
    Morebits.status.errorEvent = null;
  };
  Morebits.status.root = null;
  Morebits.status.onError = (handler) => {
    if (typeof handler === "function") {
      Morebits.status.errorEvent = handler;
    } else {
      throw new TypeError("Morebits.status.onError: handler is not a function");
    }
  };
  Morebits.status.prototype = {
    stat: null,
    statRaw: null,
    text: null,
    textRaw: null,
    type: "status",
    target: null,
    node: null,
    linked: false,
    /** Add the status element node to the DOM. */
    link() {
      if (!this.linked && Morebits.status.root) {
        Morebits.status.root.appendChild(this.node);
        this.linked = true;
      }
    },
    /** Remove the status element node from the DOM. */
    unlink() {
      if (this.linked) {
        Morebits.status.root.removeChild(this.node);
        this.linked = false;
      }
    },
    /**
     * Update the status.
     *
     * @param {string} status - Part of status message after colon.
     * @param {string} type - 'status' (blue), 'info' (green), 'warn'
     * (red), or 'error' (bold red).
     */
    update(status, type) {
      this.statRaw = status;
      this.stat = Morebits.createHtml(status);
      if (type) {
        this.type = type;
        if (type === "error") {
          Morebits.wiki.numberOfActionsLeft = 1e3;
          if (Morebits.status.errorEvent) {
            Morebits.status.errorEvent();
          }
          console.error("[Morebits] ".concat(this.textRaw, ": ").concat(this.statRaw));
        }
      }
      this.render();
    },
    /** Produce the html for first part of the status message. */
    generate() {
      this.node = document.createElement("div");
      this.node.appendChild(document.createElement("span")).appendChild(this.text);
      this.node.appendChild(document.createElement("span")).appendChild(document.createTextNode(": "));
      this.target = this.node.appendChild(document.createElement("span"));
      this.target.appendChild(document.createTextNode(""));
    },
    /** Complete the html, for the second part of the status message. */
    render() {
      this.node.className = "morebits_status_".concat(this.type);
      while (this.target.hasChildNodes()) {
        this.target.removeChild(this.target.firstChild);
      }
      this.target.appendChild(this.stat);
      this.link();
    },
    status(status) {
      this.update(status, "status");
    },
    info(status) {
      this.update(status, "info");
    },
    warn(status) {
      this.update(status, "warn");
    },
    error(status) {
      this.update(status, "error");
    }
  };
  Morebits.status.status = (text, status) => {
    return new Morebits.status(text, status);
  };
  Morebits.status.info = (text, status) => {
    return new Morebits.status(text, status, "info");
  };
  Morebits.status.warn = (text, status) => {
    return new Morebits.status(text, status, "warn");
  };
  Morebits.status.error = (text, status) => {
    return new Morebits.status(text, status, "error");
  };
  Morebits.status.actionCompleted = (text) => {
    const node = document.createElement("div");
    node.appendChild(document.createElement("b")).appendChild(document.createTextNode(text));
    node.className = "morebits_status_info morebits_action_complete";
    if (Morebits.status.root) {
      Morebits.status.root.appendChild(node);
    }
  };
  Morebits.status.printUserText = (comments, message) => {
    const p = document.createElement("p");
    p.innerHTML = message;
    const div = document.createElement("div");
    div.className = "morebits-usertext";
    div.style.marginTop = "0";
    div.style.whiteSpace = "pre-wrap";
    div.textContent = comments;
    p.appendChild(div);
    Morebits.status.root.appendChild(p);
  };
  Morebits.htmlNode = (type, content, color) => {
    const node = document.createElement(type);
    if (color) {
      node.style.color = color;
    }
    node.appendChild(document.createTextNode(content));
    return node;
  };
  Morebits.checkboxShiftClickSupport = (jQuerySelector, jQueryContext) => {
    let lastCheckbox = null;
    const clickHandler = function clickHandler2(event) {
      const thisCb = this;
      if (event.shiftKey && lastCheckbox !== null) {
        const cbs = $(jQuerySelector, jQueryContext);
        let index = -1;
        let lastIndex = -1;
        let i;
        for (i = 0; i < cbs.length; i++) {
          if (cbs[i] === thisCb) {
            index = i;
            if (lastIndex > -1) {
              break;
            }
          }
          if (cbs[i] === lastCheckbox) {
            lastIndex = i;
            if (index > -1) {
              break;
            }
          }
        }
        if (index > -1 && lastIndex > -1) {
          const endState = thisCb.checked;
          let start;
          let finish;
          if (index < lastIndex) {
            start = index + 1;
            finish = lastIndex;
          } else {
            start = lastIndex;
            finish = index - 1;
          }
          for (i = start; i <= finish; i++) {
            if (cbs[i].checked !== endState) {
              cbs[i].click();
            }
          }
        }
      }
      lastCheckbox = thisCb;
      return true;
    };
    $(jQuerySelector, jQueryContext).on("click", clickHandler);
  };
  Morebits.batchOperation = function(currentAction) {
    const ctx = {
      // backing fields for public properties
      pageList: null,
      options: {
        chunkSize: 50,
        preserveIndividualStatusLines: false
      },
      // internal counters, etc.
      statusElement: new Morebits.status(currentAction || window.wgULS("执行批量操作", "執行批次操作")),
      worker: null,
      // function that executes for each item in pageList
      postFinish: null,
      // function that executes when the whole batch has been processed
      countStarted: 0,
      countFinished: 0,
      countFinishedSuccess: 0,
      currentChunkIndex: -1,
      pageChunks: [],
      running: false
    };
    this.getStatusElement = () => {
      return ctx.statusElement;
    };
    this.setPageList = (pageList) => {
      ctx.pageList = pageList;
    };
    this.setOption = (optionName, optionValue) => {
      ctx.options[optionName] = optionValue;
    };
    this.run = (worker, postFinish) => {
      if (ctx.running) {
        ctx.statusElement.error(window.wgULS("批量操作已在运行", "批次操作已在執行"));
        return;
      }
      ctx.running = true;
      ctx.worker = worker;
      ctx.postFinish = postFinish;
      ctx.countStarted = 0;
      ctx.countFinished = 0;
      ctx.countFinishedSuccess = 0;
      ctx.currentChunkIndex = -1;
      ctx.pageChunks = [];
      const total = ctx.pageList.length;
      if (!total) {
        ctx.statusElement.info(window.wgULS("没有指定页面", "沒有指定頁面"));
        ctx.running = false;
        if (ctx.postFinish) {
          ctx.postFinish();
        }
        return;
      }
      ctx.pageChunks = Morebits.array.chunk(ctx.pageList, ctx.options.chunkSize);
      Morebits.wiki.addCheckpoint();
      ctx.statusElement.status("0%");
      fnStartNewChunk();
    };
    this.workerSuccess = (arg) => {
      if (arg instanceof Morebits.wiki.api || arg instanceof Morebits.wiki.page) {
        const statelem = arg.getStatusElement();
        if (ctx.options.preserveIndividualStatusLines) {
          if (arg.getPageName || arg.pageName || arg.query && arg.query.title) {
            const pageName = arg.getPageName ? arg.getPageName() : arg.pageName || arg.query.title;
            statelem.info("完成（[[".concat(pageName, "]]）"));
          } else {
            statelem.info("完成");
          }
        } else {
          statelem.unlink();
        }
      } else if (typeof arg === "string" && ctx.options.preserveIndividualStatusLines) {
        new Morebits.status(arg, "完成（[[".concat(arg, "]]）"));
      }
      ctx.countFinishedSuccess++;
      fnDoneOne();
    };
    this.workerFailure = () => {
      fnDoneOne();
    };
    const thisProxy = this;
    const fnStartNewChunk = () => {
      const chunk = ctx.pageChunks[++ctx.currentChunkIndex];
      if (!chunk) {
        return;
      }
      ctx.countStarted += chunk.length;
      var _iterator13 = _createForOfIteratorHelper(chunk), _step13;
      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done; ) {
          const page = _step13.value;
          ctx.worker(page, thisProxy);
        }
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
    };
    const fnDoneOne = () => {
      ctx.countFinished++;
      const total = ctx.pageList.length;
      if (ctx.countFinished < total) {
        const progress = Math.round(100 * ctx.countFinished / total);
        ctx.statusElement.status("".concat(progress, "%"));
        if (ctx.countFinished >= ctx.countStarted - Math.max(ctx.options.chunkSize / 10, 2) && Math.floor(ctx.countFinished / ctx.options.chunkSize) > ctx.currentChunkIndex) {
          fnStartNewChunk();
        }
      } else if (ctx.countFinished === total) {
        const statusString = "完成（".concat(ctx.countFinishedSuccess, "/").concat(ctx.countFinished, "操作成功完成）");
        if (ctx.countFinishedSuccess < ctx.countFinished) {
          ctx.statusElement.warn(statusString);
        } else {
          ctx.statusElement.info(statusString);
        }
        if (ctx.postFinish) {
          ctx.postFinish();
        }
        Morebits.wiki.removeCheckpoint();
        ctx.running = false;
      } else {
        ctx.statusElement.warn("".concat(window.wgULS("完成（多执行了", "完成（多執行了") + (ctx.countFinished - total), "次）"));
        Morebits.wiki.removeCheckpoint();
        ctx.running = false;
      }
    };
  };
  Morebits.simpleWindow = function(width, height) {
    const content = document.createElement("div");
    this.content = content;
    content.className = "morebits-dialog-content";
    content.id = "morebits-dialog-content-".concat(Math.round(Math.random() * 1e15));
    this.height = height;
    $(this.content).dialog({
      autoOpen: false,
      buttons: {
        "Placeholder button": () => {
        }
      },
      dialogClass: "morebits-dialog",
      width: Math.min(Number.parseInt(window.innerWidth, 10), Number.parseInt(width || 800, 10)),
      // give jQuery the given height value (which represents the anticipated height of the dialog) here, so
      // it can position the dialog appropriately
      // the 20 pixels represents adjustment for the extra height of the jQuery dialog "chrome", compared
      // to that of the old SimpleWindow
      height: height + 20,
      close: (event) => {
        $(event.target).dialog("destroy").remove();
      },
      resizeStart() {
        [this.scrollbox] = $(this).find(".morebits-scrollbox");
        if (this.scrollbox) {
          this.scrollbox.style.maxHeight = "none";
        }
      },
      resizeStop() {
        this.scrollbox = null;
      },
      resize() {
        this.style.maxHeight = "";
        if (this.scrollbox) {
          this.scrollbox.style.width = "";
        }
      }
    });
    const $widget = $(this.content).dialog("widget");
    $widget.find("button").each((key, value) => {
      value.parentNode.removeChild(value);
    });
    const buttonspan = document.createElement("span");
    buttonspan.className = "morebits-dialog-buttons";
    const linksspan = document.createElement("span");
    linksspan.className = "morebits-dialog-footerlinks";
    $widget.find(".ui-dialog-buttonpane").append(buttonspan, linksspan);
    $widget.resizable("option", "alsoResize", "#".concat(this.content.id, " .morebits-scrollbox, #").concat(this.content.id));
  };
  Morebits.simpleWindow.prototype = {
    buttons: [],
    height: 600,
    hasFooterLinks: false,
    scriptName: null,
    /**
     * Focuses the dialog. This might work, or on the contrary, it might not.
     *
     * @returns {Morebits.simpleWindow}
     */
    focus() {
      $(this.content).dialog("moveToTop");
      return this;
    },
    /**
     * Closes the dialog. If this is set as an event handler, it will stop the event
     * from doing anything more.
     *
     * @param {event} [event]
     * @returns {Morebits.simpleWindow}
     */
    close(event) {
      if (event) {
        event.preventDefault();
      }
      $(this.content).dialog("close");
      return this;
    },
    /**
     * Shows the dialog. Calling display() on a dialog that has previously been closed
     * might work, but it is not guaranteed.
     *
     * @returns {Morebits.simpleWindow}
     */
    display() {
      if (this.scriptName) {
        const $widget = $(this.content).dialog("widget");
        $widget.find(".morebits-dialog-scriptname").remove();
        const scriptnamespan = document.createElement("span");
        scriptnamespan.className = "morebits-dialog-scriptname";
        scriptnamespan.textContent = "".concat(this.scriptName, " · ");
        $widget.find(".ui-dialog-title").prepend(scriptnamespan);
      }
      const dialog = $(this.content).dialog("open");
      if (window.setupTooltips && window.pg && window.pg.re && window.pg.re.diff) {
        dialog.parent()[0].ranSetupTooltipsAlready = false;
        window.setupTooltips(dialog.parent()[0]);
      }
      this.setHeight(this.height);
      return this;
    },
    /**
     * Sets the dialog title.
     *
     * @param {string} title
     * @returns {Morebits.simpleWindow}
     */
    setTitle(title) {
      $(this.content).dialog("option", "title", title);
      return this;
    },
    /**
     * Sets the script name, appearing as a prefix to the title to help users determine which
     * user script is producing which dialog. For instance, Twinkle modules set this to "Twinkle".
     *
     * @param {string} name
     * @returns {Morebits.simpleWindow}
     */
    setScriptName(name) {
      this.scriptName = name;
      return this;
    },
    /**
     * Sets the dialog width.
     *
     * @param {number} width
     * @returns {Morebits.simpleWindow}
     */
    setWidth(width) {
      $(this.content).dialog("option", "width", width);
      return this;
    },
    /**
     * Sets the dialog's maximum height. The dialog will auto-size to fit its contents,
     * but the content area will grow no larger than the height given here.
     *
     * @param {number} height
     * @returns {Morebits.simpleWindow}
     */
    setHeight(height) {
      this.height = height;
      if (Number.parseInt(getComputedStyle($(this.content).dialog("widget")[0], null).height, 10) > window.innerHeight) {
        $(this.content).dialog("option", "height", window.innerHeight - 2).dialog("option", "position", "top");
      } else {
        $(this.content).dialog("option", "height", "auto");
      }
      $(this.content).dialog("widget").find(".morebits-dialog-content")[0].style.maxHeight = "".concat(Number.parseInt(this.height - 30, 10), "px");
      return this;
    },
    /**
     * Sets the content of the dialog to the given element node, usually from rendering
     * a {@link Morebits.quickForm}.
     * Re-enumerates the footer buttons, but leaves the footer links as they are.
     * Be sure to call this at least once before the dialog is displayed...
     *
     * @param {HTMLElement} content
     * @returns {Morebits.simpleWindow}
     */
    setContent(content) {
      this.purgeContent();
      this.addContent(content);
      return this;
    },
    /**
     * Adds the given element node to the dialog content.
     *
     * @param {HTMLElement} content
     * @returns {Morebits.simpleWindow}
     */
    addContent(content) {
      this.content.appendChild(content);
      const self = this;
      $(this.content).find('input[type="submit"], button[type="submit"]').each((key, value) => {
        value.style.display = "none";
        const button = document.createElement("button");
        if (value.hasAttribute("value")) {
          button.textContent = value.getAttribute("value");
        } else if (value.textContent) {
          button.textContent = value.textContent;
        } else {
          button.textContent = "提交";
        }
        button.className = value.className || "submitButtonProxy";
        button.addEventListener("click", () => {
          value.click();
        }, false);
        self.buttons[self.buttons.length] = button;
      });
      if (this.buttons.length > 0) {
        $(this.content).dialog("widget").find(".morebits-dialog-buttons").empty().append(this.buttons)[0].removeAttribute("data-empty");
      } else {
        $(this.content).dialog("widget").find(".morebits-dialog-buttons")[0].setAttribute("data-empty", "data-empty");
      }
      return this;
    },
    /**
     * Removes all contents from the dialog, barring any footer links.
     *
     * @returns {Morebits.simpleWindow}
     */
    purgeContent() {
      this.buttons = [];
      $(this.content).dialog("widget").find(".morebits-dialog-buttons").empty();
      while (this.content.hasChildNodes()) {
        this.content.removeChild(this.content.firstChild);
      }
      return this;
    },
    /**
     * Adds a link in the bottom-right corner of the dialog.
     * This can be used to provide help or policy links.
     * For example, Twinkle's CSD module adds a link to the CSD policy page,
     * as well as a link to Twinkle's documentation.
     *
     * @param {string} text - Display text.
     * @param {string} wikiPage - Link target.
     * @param {boolean} [prep=false] - Set true to prepend rather than append.
     * @returns {Morebits.simpleWindow}
     */
    addFooterLink(text, wikiPage, prep) {
      const $footerlinks = $(this.content).dialog("widget").find(".morebits-dialog-footerlinks");
      if (this.hasFooterLinks) {
        const bullet = document.createElement("span");
        bullet.textContent = " • ";
        if (prep) {
          $footerlinks.prepend(bullet);
        } else {
          $footerlinks.append(bullet);
        }
      }
      const link = document.createElement("a");
      link.setAttribute("href", mw.util.getUrl(wikiPage));
      link.setAttribute("title", wikiPage);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
      link.textContent = text;
      if (prep) {
        $footerlinks.prepend(link);
      } else {
        $footerlinks.append(link);
      }
      this.hasFooterLinks = true;
      return this;
    },
    /**
     * Sets whether the window should be modal or not. Modal dialogs create
     * an overlay below the dialog but above other page elements. This
     * must be used (if necessary) before calling display().
     *
     * @param {boolean} [modal=false] - If set to true, other items on the
     * page will be disabled, i.e., cannot be interacted with.
     * @returns {Morebits.simpleWindow}
     */
    setModality(modal) {
      $(this.content).dialog("option", "modal", modal);
      return this;
    }
  };
  Morebits.simpleWindow.setButtonsEnabled = (enabled) => {
    const $body = $("body");
    $body.find(".morebits-dialog-buttons button").prop("disabled", !enabled);
  };
})(jQuery);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21vcmViaXRzL21vcmViaXRzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuLyohIFR3aW5rbGUuanMgLSBtb3JlYml0cy5qcyAqL1xuXG4vKipcbiAqIEEgbGlicmFyeSBmdWxsIG9mIGxvdHMgb2YgZ29vZG5lc3MgZm9yIHVzZXIgc2NyaXB0cyBvbiBNZWRpYVdpa2kgd2lraXMuXG4gKlxuICogVGhlIGhpZ2hsaWdodHMgaW5jbHVkZTpcbiAqIC0ge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSAtIG1ha2UgY2FsbHMgdG8gdGhlIE1lZGlhV2lraSBBUElcbiAqIC0ge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX0gLSBtb2RpZnkgcGFnZXMgb24gdGhlIHdpa2kgKGVkaXQsIHJldmVydCwgZGVsZXRlLCBldGMuKVxuICogLSB7QGxpbmsgTW9yZWJpdHMuZGF0ZX0gLSBlbmhhbmNlZCBkYXRlIG9iamVjdCBwcm9jZXNzaW5nLCBzb3J0IG9mIGEgbGlnaHQgbW9tZW50LmpzXG4gKiAtIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19IC0gZ2VuZXJhdGUgcXVpY2sgSFRNTCBmb3JtcyBvbiB0aGUgZmx5XG4gKiAtIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9IC0gYSB3cmFwcGVyIGZvciBqUXVlcnkgVUkgRGlhbG9nIHdpdGggYSBjdXN0b20gbG9vayBhbmQgZXh0cmEgZmVhdHVyZXNcbiAqIC0ge0BsaW5rIE1vcmViaXRzLnN0YXR1c30gLSBhIHJvdWdoLWFuZC1yZWFkeSBzdGF0dXMgbWVzc2FnZSBkaXNwbGF5ZXIsIHVzZWQgYnkgdGhlIE1vcmViaXRzLndpa2kgY2xhc3Nlc1xuICogLSB7QGxpbmsgTW9yZWJpdHMud2lraXRleHR9IC0gdXRpbGl0aWVzIGZvciBkZWFsaW5nIHdpdGggd2lraXRleHRcbiAqIC0ge0BsaW5rIE1vcmViaXRzLnN0cmluZ30gLSB1dGlsaXRpZXMgZm9yIG1hbmlwdWxhdGluZyBzdHJpbmdzXG4gKiAtIHtAbGluayBNb3JlYml0cy5hcnJheX0gLSB1dGlsaXRpZXMgZm9yIG1hbmlwdWxhdGluZyBhcnJheXNcbiAqIC0ge0BsaW5rIE1vcmViaXRzLmlwfSAtIHV0aWxpdGllcyB0byBoZWxwIHByb2Nlc3MgSVAgYWRkcmVzc2VzXG4gKlxuICogRGVwZW5kZW5jaWVzOlxuICogLSBUaGUgd2hvbGUgdGhpbmcgcmVsaWVzIG9uIGpRdWVyeS4gIEJ1dCBtb3N0IHdpa2lzIHNob3VsZCBwcm92aWRlIHRoaXMgYnkgZGVmYXVsdC5cbiAqIC0ge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0sIHtAbGluayBNb3JlYml0cy5zaW1wbGVXaW5kb3d9LCBhbmQge0BsaW5rIE1vcmViaXRzLnN0YXR1c30gcmVseSBvbiB0aGUgXCJtb3JlYml0cy5jc3NcIiBmaWxlIGZvciB0aGVpciBzdHlsaW5nLlxuICogLSB7QGxpbmsgTW9yZWJpdHMuc2ltcGxlV2luZG93fSBhbmQge0BsaW5rIE1vcmViaXRzLnF1aWNrRm9ybX0gdG9vbHRpcHMgcmVseSBvbiBqUXVlcnkgVUkgRGlhbG9nIChmcm9tIFJlc291cmNlTG9hZGVyIG1vZHVsZSBuYW1lICdqcXVlcnkudWknKS5cbiAqIC0gVG8gY3JlYXRlIGEgZ2FkZ2V0IGJhc2VkIG9uIG1vcmViaXRzLmpzLCB1c2UgdGhpcyBzeW50YXggaW4gTWVkaWFXaWtpOkdhZGdldHMtZGVmaW5pdGlvbjpcbiAqICAgICAtIGAqR2FkZ2V0TmFtZVtSZXNvdXJjZUxvYWRlcnxkZXBlbmRlbmNpZXM9bWVkaWF3aWtpLnVzZXIsbWVkaWF3aWtpLnV0aWwsbWVkaWF3aWtpLlRpdGxlLGpxdWVyeS51aV18bW9yZWJpdHMuanN8bW9yZWJpdHMuY3NzfEdhZGdldE5hbWUuanNgXG4gKiAtIEFsdGVybmF0aXZlbHksIHlvdSBjYW4gY29uZmlndXJlIG1vcmViaXRzLmpzIGFzIGEgaGlkZGVuIGdhZGdldCBpbiBNZWRpYVdpa2k6R2FkZ2V0cy1kZWZpbml0aW9uOlxuICogICAgIC0gYCptb3JlYml0c1tSZXNvdXJjZUxvYWRlcnxkZXBlbmRlbmNpZXM9bWVkaWF3aWtpLnVzZXIsbWVkaWF3aWtpLnV0aWwsbWVkaWF3aWtpLlRpdGxlLGpxdWVyeS51aXxoaWRkZW5dfG1vcmViaXRzLmpzfG1vcmViaXRzLmNzc2BcbiAqICAgICBhbmQgdGhlbiBsb2FkIGV4dC5nYWRnZXQubW9yZWJpdHMgYXMgb25lIG9mIHRoZSBkZXBlbmRlbmNpZXMgZm9yIHRoZSBuZXcgZ2FkZ2V0LlxuICpcbiAqIEFsbCB0aGUgc3R1ZmYgaGVyZSB3b3JrcyBvbiBhbGwgYnJvd3NlcnMgZm9yIHdoaWNoIE1lZGlhV2lraSBwcm92aWRlcyBKYXZhU2NyaXB0IHN1cHBvcnQuXG4gKlxuICogVGhpcyBsaWJyYXJ5IGlzIG1haW50YWluZWQgYnkgdGhlIG1haW50YWluZXJzIG9mIFR3aW5rbGUuXG4gKiBGb3IgcXVlcmllcywgc3VnZ2VzdGlvbnMsIGhlbHAsIGV0Yy4sIGhlYWQgdG8gW0hlbHA6VHdpbmtsZV0oaHR0cHM6Ly93d3cucWl1d2VuYmFpa2UuY24vd2lraS9IOlRXKS5cbiAqIFRoZSBsYXRlc3QgZGV2ZWxvcG1lbnQgc291cmNlIGlzIGF2YWlsYWJsZSBhdCB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3dpa2ltZWRpYS1nYWRnZXRzL3R3aW5rbGUvYmxvYi9tYXN0ZXIvbW9yZWJpdHMuanN8R2l0SHVifS5cbiAqXG4gKiBAcGFyYW0ge0pRdWVyeX0gJFxuICogQG5hbWVzcGFjZSBNb3JlYml0c1xuICovXG5pbXBvcnQgJy4vbW9yZWJpdHMubGVzcyc7XG5pbXBvcnQge2dlbmVyYXRlQXJyYXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbihmdW5jdGlvbiBtb3JlYml0cygkKSB7XG5cdC8vIFdyYXAgZW50aXJlIGZpbGUgd2l0aCBhbm9ueW1vdXMgZnVuY3Rpb25cblx0LyoqIEBsZW5kcyBNb3JlYml0cyAqL1xuXHRjb25zdCBNb3JlYml0cyA9IHt9O1xuXHR3aW5kb3cuTW9yZWJpdHMgPSBNb3JlYml0czsgLy8gYWxsb3cgZ2xvYmFsIGFjY2Vzc1xuXHQvLyBObyBNb3JlYml0cy5pMThuIGF0IHRoaXMgdGltZVxuXHQvKipcblx0ICogV2lraS1zcGVjaWZpYyBjb25maWd1cmF0aW9ucyBmb3IgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLmwxMG4gPSB7XG5cdFx0LyoqXG5cdFx0ICogTG9jYWwgYWxpYXNlcyBmb3IgXCJyZWRpcmVjdFwiIG1hZ2ljIHdvcmQuXG5cdFx0ICogQ2hlY2sgdXNpbmcgYXBpLnBocD9hY3Rpb249cXVlcnkmZm9ybWF0PWpzb24mbWV0YT1zaXRlaW5mbyZmb3JtYXR2ZXJzaW9uPTImc2lwcm9wPW1hZ2ljd29yZHNcblx0XHQgKi9cblx0XHRyZWRpcmVjdFRhZ0FsaWFzZXM6IFsnI1JFRElSRUNUJywgJyPph43lrprlkJEnXSxcblx0XHQvKipcblx0XHQgKiBUYWtlcyBhIHN0cmluZyBhcyBhcmd1bWVudCBhbmQgY2hlY2tzIGlmIGl0IGlzIGEgdGltZXN0YW1wIG9yIG5vdFxuXHRcdCAqIElmIG5vdCwgaXQgcmV0dXJucyBudWxsLiBJZiB5ZXMsIGl0IHJldHVybnMgYW4gYXJyYXkgb2YgaW50ZWdlcnNcblx0XHQgKiBpbiB0aGUgZm9ybWF0IFt5ZWFyLCBtb250aCwgZGF0ZSwgaG91ciwgbWludXRlLCBzZWNvbmRdXG5cdFx0ICogd2hpY2ggY2FuIGJlIHBhc3NlZCB0byBEYXRlLlVUQygpXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHJldHVybnMge251bWJlcltdIHwgbnVsbH1cblx0XHQgKi9cblx0XHRzaWduYXR1cmVUaW1lc3RhbXBGb3JtYXQ6IChzdHIpID0+IHtcblx0XHRcdGNvbnN0IHJneFVUQyA9IC8oXFxkezR9KeW5tChcXGR7MSwyfSnmnIgoXFxkezEsMn0p5pelIFxcKC5cXCkgKFxcZHsyfSk6KFxcZHsyfSkgXFwoVVRDXFwpLzsgLy8gWVlZWeW5tE1vbnRo5pyIRETml6UgKHcpIEhIOm1tIChVVEMpXG5cdFx0XHRjb25zdCByZ3hDU1QgPSAvKFxcZHs0fSnlubQoXFxkezEsMn0p5pyIKFxcZHsxLDJ9KeaXpSBcXCguXFwpIChcXGR7Mn0pOihcXGR7Mn0pIFxcKENTVFxcKS87IC8vIFlZWVnlubRNb250aOaciERE5pelICh3KSBISDptbSAoQ1NUKVxuXHRcdFx0Y29uc3QgbWF0Y2ggPSByZ3hVVEMuZXhlYyhzdHIpIHx8IHJneENTVC5leGVjKHN0cik7XG5cdFx0XHRjb25zdCBtYXRjaENTVCA9IHJneENTVC5leGVjKHN0cik7XG5cdFx0XHRpZiAoIW1hdGNoKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgbW9udGggPSBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEubW9udGhzLmluZGV4T2YobWF0Y2hbNF0pO1xuXHRcdFx0aWYgKG1vbnRoID09PSAtMSkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblx0XHRcdC8vIC4uLi4uIHllYXIgLi4uLiBtb250aCAuLi4gZGF0ZSAuLi4uIGhvdXIgLi4uIG1pbnV0ZVxuXHRcdFx0cmV0dXJuIG1hdGNoQ1NUXG5cdFx0XHRcdD8gW21hdGNoWzFdLCBtYXRjaFsyXSAtIDEsIG1hdGNoWzNdLCBtYXRjaFs0XSAtIDgsIG1hdGNoWzVdXVxuXHRcdFx0XHQ6IFttYXRjaFsxXSwgbWF0Y2hbMl0gLSAxLCBtYXRjaFszXSwgbWF0Y2hbNF0sIG1hdGNoWzVdXTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogU2ltcGxlIGhlbHBlciBmdW5jdGlvbiB0byBzZWUgd2hhdCBncm91cHMgYSB1c2VyIG1pZ2h0IGJlbG9uZy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwIC0gZS5nLiBgc3lzb3BgLCBgYXV0b2NvbmZpcm1lZGAsIGV0Yy5cblx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdCAqL1xuXHRNb3JlYml0cy51c2VySXNJbkdyb3VwID0gKGdyb3VwKSA9PiB7XG5cdFx0cmV0dXJuIG13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpLmluY2x1ZGVzKGdyb3VwKTtcblx0fTtcblx0LyoqXG5cdCAqIEhhcmRjb2RlcyB3aGV0aGVyIHRoZSB1c2VyIGlzIGEgc3lzb3AsIHVzZWQgYSBsb3QuXG5cdCAqXG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0TW9yZWJpdHMudXNlcklzU3lzb3AgPVxuXHRcdE1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3N5c29wJykgfHwgTW9yZWJpdHMudXNlcklzSW5Hcm91cCgnc3Rld2FyZCcpIHx8IE1vcmViaXRzLnVzZXJJc0luR3JvdXAoJ3FpdXdlbicpO1xuXHQvKipcblx0ICogRGVwcmVjYXRlZCBhcyBvZiBGZWJydWFyeSAyMDIxLCB1c2Uge0BsaW5rIE1vcmViaXRzLmlwLnNhbml0aXplSVB2Nn0uXG5cdCAqXG5cdCAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2fS5cblx0ICogQ29udmVydHMgYW4gSVB2NiBhZGRyZXNzIHRvIHRoZSBjYW5vbmljYWwgZm9ybSBzdG9yZWQgYW5kIHVzZWQgYnkgTWVkaWFXaWtpLlxuXHQgKiBKYXZhU2NyaXB0IHRyYW5zbGF0aW9uIG9mIHRoZSB7QGxpbmsgaHR0cHM6Ly9nZXJyaXQud2lraW1lZGlhLm9yZy9yL3BsdWdpbnMvZ2l0aWxlcy9tZWRpYXdpa2kvY29yZS8rLzhlYjZhYzNlODRlYTMzMTJkMzkxY2E5NmMxMmM0OWUzYWQwNzUzYmIvaW5jbHVkZXMvdXRpbHMvSVAucGhwIzEzMXxgSVA6OnNhbml0aXplSVAoKWB9XG5cdCAqIGZ1bmN0aW9uIGZyb20gdGhlIElQVXRpbHMgbGlicmFyeS4gIEFkZHJlc3NlcyBhcmUgdmVyYm9zZSwgdXBwZXJjYXNlLFxuXHQgKiBub3JtYWxpemVkLCBhbmQgZXhwYW5kZWQgdG8gOCB3b3Jkcy5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGFkZHJlc3MgLSBUaGUgSVB2NiBhZGRyZXNzLCB3aXRoIG9yIHdpdGhvdXQgQ0lEUi5cblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdE1vcmViaXRzLnNhbml0aXplSVB2NiA9IChhZGRyZXNzKSA9PiB7XG5cdFx0Y29uc29sZS53YXJuKFxuXHRcdFx0J1tNb3JlYml0c10gTk9URTogTW9yZWJpdHMuc2FuaXRpemVJUHY2IHdhcyByZW5hbWVkIHRvIE1vcmViaXRzLmlwLnNhbml0aXplSVB2NiBpbiBGZWJydWFyeSAyMDIxLCBwbGVhc2UgdXNlIHRoYXQgaW5zdGVhZCdcblx0XHQpO1xuXHRcdHJldHVybiBNb3JlYml0cy5pcC5zYW5pdGl6ZUlQdjYoYWRkcmVzcyk7XG5cdH07XG5cdC8qKlxuXHQgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGN1cnJlbnQgcGFnZSBpcyBhIHJlZGlyZWN0IG9yIHNvZnQgcmVkaXJlY3QuIEZhaWxzXG5cdCAqIHRvIGRldGVjdCBzb2Z0IHJlZGlyZWN0cyBvbiBlZGl0LCBoaXN0b3J5LCBldGMuIHBhZ2VzLiAgV2lsbCBhdHRlbXB0IHRvXG5cdCAqIGRldGVjdCBNb2R1bGU6UmZELCB3aXRoIHRoZSBzYW1lIGZhaWx1cmUgcG9pbnRzLlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdE1vcmViaXRzLmlzUGFnZVJlZGlyZWN0ID0gKCkgPT4ge1xuXHRcdHJldHVybiAhIShcblx0XHRcdG13LmNvbmZpZy5nZXQoJ3dnSXNSZWRpcmVjdCcpIHx8XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29mdHJlZGlyZWN0JykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3gtUmZEJykgfHxcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3gtUmVkaXJlY3RfY2F0ZWdvcnlfc2hlbGwnKVxuXHRcdCk7XG5cdH07XG5cdC8qKlxuXHQgKiBTdG9yZXMgYSBub3JtYWxpemVkICh1bmRlcnNjb3JlcyBjb252ZXJ0ZWQgdG8gc3BhY2VzKSB2ZXJzaW9uIG9mIHRoZVxuXHQgKiBgd2dQYWdlTmFtZWAgdmFyaWFibGUuXG5cdCAqXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRNb3JlYml0cy5wYWdlTmFtZU5vcm0gPSBtdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvXy9nLCAnICcpO1xuXHQvKipcblx0ICogQ3JlYXRlIGEgc3RyaW5nIGZvciB1c2UgaW4gcmVnZXggbWF0Y2hpbmcgYSBwYWdlIG5hbWUuICBBY2NvdW50cyBmb3Jcblx0ICogbGVhZGluZyBjaGFyYWN0ZXIncyBjYXBpdGFsaXphdGlvbiwgdW5kZXJzY29yZXMgYXMgc3BhY2VzLCBhbmQgc3BlY2lhbFxuXHQgKiBjaGFyYWN0ZXJzIGJlaW5nIGVzY2FwZWQuICBTZWUgYWxzbyB7QGxpbmsgTW9yZWJpdHMubmFtZXNwYWNlUmVnZXh9LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGFnZU5hbWUgLSBQYWdlIG5hbWUgd2l0aG91dCBuYW1lc3BhY2UuXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9IC0gRm9yIGEgcGFnZSBuYW1lIGBGb28gYmFyYCwgcmV0dXJucyB0aGUgc3RyaW5nIGBbRmZdb29bXyBdYmFyYC5cblx0ICovXG5cdE1vcmViaXRzLnBhZ2VOYW1lUmVnZXggPSAocGFnZU5hbWUpID0+IHtcblx0XHRpZiAocGFnZU5hbWUgPT09ICcnKSB7XG5cdFx0XHRyZXR1cm4gJyc7XG5cdFx0fVxuXHRcdGNvbnN0IFtmaXJzdENoYXJdID0gcGFnZU5hbWU7XG5cdFx0Y29uc3QgcmVtYWluZGVyID0gTW9yZWJpdHMuc3RyaW5nLmVzY2FwZVJlZ0V4cChwYWdlTmFtZS5zbGljZSgxKSk7XG5cdFx0aWYgKG13LlRpdGxlLnBocENoYXJUb1VwcGVyKGZpcnN0Q2hhcikgIT09IGZpcnN0Q2hhci50b0xvd2VyQ2FzZSgpKSB7XG5cdFx0XHRyZXR1cm4gYFske213LlRpdGxlLnBocENoYXJUb1VwcGVyKGZpcnN0Q2hhcil9JHtmaXJzdENoYXIudG9Mb3dlckNhc2UoKX1dJHtyZW1haW5kZXJ9YDtcblx0XHR9XG5cdFx0cmV0dXJuIE1vcmViaXRzLnN0cmluZy5lc2NhcGVSZWdFeHAoZmlyc3RDaGFyKSArIHJlbWFpbmRlcjtcblx0fTtcblx0LyoqXG5cdCAqIENvbnZlcnRzIHN0cmluZyBvciBhcnJheSBvZiBET00gbm9kZXMgaW50byBhbiBIVE1MIGZyYWdtZW50LlxuXHQgKiBXaWtpbGluayBzeW50YXggKGBbWy4uLl1dYCkgaXMgdHJhbnNmb3JtZWQgaW50byBIVE1MIGFuY2hvci5cblx0ICogVXNlZCBpbiBNb3JlYml0cy5xdWlja0Zvcm0gYW5kIE1vcmViaXRzLnN0YXR1c1xuXHQgKlxuXHQgKiBAaW50ZXJuYWxcblx0ICogQHBhcmFtIHtzdHJpbmd8Tm9kZXwoc3RyaW5nfE5vZGUpW119IGlucHV0XG5cdCAqIEByZXR1cm5zIHtEb2N1bWVudEZyYWdtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMuY3JlYXRlSHRtbCA9IChpbnB1dCkgPT4ge1xuXHRcdGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdGlmICghaW5wdXQpIHtcblx0XHRcdHJldHVybiBmcmFnbWVudDtcblx0XHR9XG5cdFx0aW5wdXQgPSBnZW5lcmF0ZUFycmF5KGlucHV0KTtcblx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2YgaW5wdXQpIHtcblx0XHRcdGlmIChlbGVtZW50IGluc3RhbmNlb2YgTm9kZSkge1xuXHRcdFx0XHRmcmFnbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAoY29uc3Qgbm9kZSBvZiAkLnBhcnNlSFRNTChNb3JlYml0cy5jcmVhdGVIdG1sLnJlbmRlcldpa2lsaW5rcyhlbGVtZW50KSkpIHtcblx0XHRcdFx0XHRmcmFnbWVudC5hcHBlbmRDaGlsZChub2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZnJhZ21lbnQ7XG5cdH07XG5cdC8qKlxuXHQgKiBDb252ZXJ0cyB3aWtpbGlua3MgdG8gSFRNTCBhbmNob3IgdGFncy5cblx0ICpcblx0ICogQHBhcmFtIHRleHRcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRNb3JlYml0cy5jcmVhdGVIdG1sLnJlbmRlcldpa2lsaW5rcyA9ICh0ZXh0KSA9PiB7XG5cdFx0Y29uc3QgdWIgPSBuZXcgTW9yZWJpdHMudW5iaW5kZXIodGV4dCk7XG5cdFx0Ly8gRG9uJ3QgY29udmVydCB3aWtpbGlua3Mgd2l0aGluIGNvZGUgdGFncyBhcyB0aGV5J3JlIHVzZWQgZm9yIGRpc3BsYXlpbmcgd2lraS1jb2RlXG5cdFx0dWIudW5iaW5kKCc8Y29kZT4nLCAnPC9jb2RlPicpO1xuXHRcdHViLmNvbnRlbnQgPSB1Yi5jb250ZW50LnJlcGxhY2UoL1xcW1xcWzo/KD86KFtefFxcXV0rPylcXHwpPyhbXlxcXXxdKz8pXFxdXFxdL2csIChfLCB0YXJnZXQsIHRleHRfKSA9PiB7XG5cdFx0XHR0YXJnZXQgfHw9IHRleHRfO1xuXHRcdFx0cmV0dXJuIGA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke213LnV0aWwuZ2V0VXJsKHRhcmdldCl9XCIgdGl0bGU9XCIke3RhcmdldC5yZXBsYWNlKFxuXHRcdFx0XHQvXCIvZyxcblx0XHRcdFx0JyYjMzQ7J1xuXHRcdFx0KX1cIj4ke3RleHRffTwvYT5gO1xuXHRcdH0pO1xuXHRcdHJldHVybiB1Yi5yZWJpbmQoKTtcblx0fTtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIHN0cmluZyBmb3IgdXNlIGluIHJlZ2V4IG1hdGNoaW5nIGFsbCBuYW1lc3BhY2UgYWxpYXNlcywgcmVnYXJkbGVzc1xuXHQgKiBvZiB0aGUgY2FwaXRhbGl6YXRpb24gYW5kIHVuZGVyc2NvcmVzL3NwYWNlcy4gIERvZXNuJ3QgaW5jbHVkZSB0aGUgb3B0aW9uYWxcblx0ICogbGVhZGluZyBgOmAsIGJ1dCBpZiB0aGVyZSdzIG1vcmUgdGhhbiBvbmUgaXRlbSwgd3JhcHMgdGhlIGxpc3QgaW4gYVxuXHQgKiBub24tY2FwdHVyaW5nIGdyb3VwLiAgVGhpcyBtZWFucyB5b3UgY2FuIGRvIGBNb3JlYml0cy5uYW1lc3BhY2VSZWdleChbNF0pICtcblx0ICogJzonICsgTW9yZWJpdHMucGFnZU5hbWVSZWdleCgnVHdpbmtsZScpYCB0byBtYXRjaCBhIGZ1bGwgcGFnZS4gIFVzZXNcblx0ICoge0BsaW5rIE1vcmViaXRzLnBhZ2VOYW1lUmVnZXh9LlxuXHQgKlxuXHQgKiBAcGFyYW0ge251bWJlcltdfSBuYW1lc3BhY2VzIC0gQXJyYXkgb2YgbmFtZXNwYWNlIG51bWJlcnMuICBVbnVzZWQvaW52YWxpZFxuXHQgKiBuYW1lc3BhY2UgbnVtYmVycyBhcmUgc2lsZW50bHkgZGlzY2FyZGVkLlxuXHQgKiBAZXhhbXBsZVxuXHQgKiAvLyByZXR1cm5zICcoPzpbRmZdW0lpXVtMbF1bRWVdfFtJaV1bTW1dW0FhXVtHZ11bRWVdKSdcblx0ICogTW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoWzZdKVxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSAtIFJlZ2V4LXN1aXRhYmxlIHN0cmluZyBvZiBhbGwgbmFtZXNwYWNlIGFsaWFzZXMuXG5cdCAqL1xuXHRNb3JlYml0cy5uYW1lc3BhY2VSZWdleCA9IChuYW1lc3BhY2VzKSA9PiB7XG5cdFx0bmFtZXNwYWNlcyA9IGdlbmVyYXRlQXJyYXkobmFtZXNwYWNlcyk7XG5cdFx0Y29uc3QgYWxpYXNlcyA9IFtdO1xuXHRcdGxldCByZWdleDtcblx0XHRmb3IgKGNvbnN0IFtuYW1lLCBudW1iZXJdIG9mIE9iamVjdC5lbnRyaWVzKG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlSWRzJykpKSB7XG5cdFx0XHRpZiAobmFtZXNwYWNlcy5pbmNsdWRlcyhudW1iZXIpKSB7XG5cdFx0XHRcdC8vIE5hbWVzcGFjZXMgYXJlIGNvbXBsZXRlbHkgYWdub3N0aWMgYXMgdG8gY2FzZSxcblx0XHRcdFx0Ly8gYW5kIGEgcmVnZXggc3RyaW5nIGlzIG1vcmUgdXNlZnVsL2NvbXBhdGlibGUgdGhhbiBhIFJlZ0V4cCBvYmplY3QsXG5cdFx0XHRcdC8vIHNvIHdlIGFjY2VwdCBhbnkgY2FzaW5nIGZvciBhbnkgbGV0dGVyLlxuXHRcdFx0XHRhbGlhc2VzW2FsaWFzZXMubGVuZ3RoXSA9IFsuLi5uYW1lXVxuXHRcdFx0XHRcdC5tYXAoKGNoYXIpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBNb3JlYml0cy5wYWdlTmFtZVJlZ2V4KGNoYXIpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmpvaW4oJycpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRzd2l0Y2ggKGFsaWFzZXMubGVuZ3RoKSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRcdHJlZ2V4ID0gJyc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRbcmVnZXhdID0gYWxpYXNlcztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZWdleCA9IGAoPzoke2FsaWFzZXMuam9pbignfCcpfSlgO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIHJlZ2V4O1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLnF1aWNrRm9ybSAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBDcmVhdGlvbiBvZiBzaW1wbGUgYW5kIHN0YW5kYXJkIGZvcm1zIHdpdGhvdXQgbXVjaCBzcGVjaWZpYyBjb2RpbmcuXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtldmVudH0gZXZlbnQgLSBGdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gZm9ybSBpcyBzdWJtaXR0ZWQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbZXZlbnRUeXBlPXN1Ym1pdF0gLSBUeXBlIG9mIHRoZSBldmVudC5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybSA9IGZ1bmN0aW9uIChldmVudCwgZXZlbnRUeXBlKSB7XG5cdFx0dGhpcy5yb290ID0gbmV3IE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KHtcblx0XHRcdHR5cGU6ICdmb3JtJyxcblx0XHRcdGV2ZW50LFxuXHRcdFx0ZXZlbnRUeXBlLFxuXHRcdH0pO1xuXHR9O1xuXHQvKipcblx0ICogUmVuZGVycyB0aGUgSFRNTCBvdXRwdXQgb2YgdGhlIHF1aWNrRm9ybS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCByZXQgPSB0aGlzLnJvb3QucmVuZGVyKCk7XG5cdFx0cmV0Lm5hbWVzID0ge307XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcblx0LyoqXG5cdCAqIEFwcGVuZCBlbGVtZW50IHRvIHRoZSBmb3JtLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KG9iamVjdHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGRhdGEgLSBBIHF1aWNrZm9ybSBlbGVtZW50LCBvciB0aGUgb2JqZWN0IHdpdGggd2hpY2hcblx0ICogYSBxdWlja2Zvcm0gZWxlbWVudCBpcyBjb25zdHJ1Y3RlZC5cblx0ICogQHJldHVybnMge01vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50fSAtIFNhbWUgYXMgd2hhdCBpcyBwYXNzZWQgdG8gdGhlIGZ1bmN0aW9uLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHJldHVybiB0aGlzLnJvb3QuYXBwZW5kKGRhdGEpO1xuXHR9O1xuXHQvKipcblx0ICogQ3JlYXRlIGEgbmV3IGVsZW1lbnQgZm9yIHRoZSB0aGUgZm9ybS5cblx0ICpcblx0ICogSW5kZXggdG8gTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQgdHlwZXM6XG5cdCAqIC0gR2xvYmFsIGF0dHJpYnV0ZXM6IGlkLCBjbGFzc05hbWUsIHN0eWxlLCB0b29sdGlwLCBleHRyYSwgJGRhdGEsIGFkbWlub25seVxuXHQgKiAtIGBzZWxlY3RgOiBBIGNvbWJvIGJveCAoYWthIGRyb3AtZG93bikuXG5cdCAqICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBtdWx0aXBsZSwgc2l6ZSwgbGlzdCwgZXZlbnQsIGRpc2FibGVkXG5cdCAqICAtIGBvcHRpb25gOiBBbiBlbGVtZW50IGZvciBhIGNvbWJvIGJveC5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IHZhbHVlLCBsYWJlbCwgc2VsZWN0ZWQsIGRpc2FibGVkXG5cdCAqICAtIGBvcHRncm91cGA6IEEgZ3JvdXAgb2YgXCJvcHRpb25cInMuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBsYWJlbCwgbGlzdFxuXHQgKiAgLSBgZmllbGRgOiBBIGZpZWxkc2V0IChha2EgZ3JvdXAgYm94KS5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsLCBkaXNhYmxlZFxuXHQgKiAgLSBgY2hlY2tib3hgOiBBIGNoZWNrYm94LiBNdXN0IHVzZSBcImxpc3RcIiBwYXJhbWV0ZXIuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsaXN0LCBldmVudFxuXHQgKiAgICAgIC0gQXR0cmlidXRlcyAod2l0aGluIGxpc3QpOiBuYW1lLCBsYWJlbCwgdmFsdWUsIGNoZWNrZWQsIGRpc2FibGVkLCBldmVudCwgc3ViZ3JvdXBcblx0ICogIC0gYHJhZGlvYDogQSByYWRpbyBidXR0b24uIE11c3QgdXNlIFwibGlzdFwiIHBhcmFtZXRlci5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxpc3QsIGV2ZW50XG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzICh3aXRoaW4gbGlzdCk6IG5hbWUsIGxhYmVsLCB2YWx1ZSwgY2hlY2tlZCwgZGlzYWJsZWQsIGV2ZW50LCBzdWJncm91cFxuXHQgKiAgLSBgaW5wdXRgOiBBIHRleHQgaW5wdXQgYm94LlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIHZhbHVlLCBzaXplLCBwbGFjZWhvbGRlciwgbWF4bGVuZ3RoLCBkaXNhYmxlZCwgcmVxdWlyZWQsIHJlYWRvbmx5LCBldmVudFxuXHQgKiAgLSBgbnVtYmVyYDogQSBudW1iZXIgaW5wdXQgYm94LlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogRXZlcnl0aGluZyB0aGUgdGV4dCBgaW5wdXRgIGhhcywgYXMgd2VsbCBhczogbWluLCBtYXgsIHN0ZXAsIGxpc3Rcblx0ICogIC0gYGR5bmlucHV0YDogQSBzZXQgb2YgdGV4dCBib3hlcyB3aXRoIFwiUmVtb3ZlXCIgYnV0dG9ucyBhbmQgYW4gXCJBZGRcIiBidXR0b24uXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgbWluLCBtYXgsIHN1YmxhYmVsLCB2YWx1ZSwgc2l6ZSwgbWF4bGVuZ3RoLCBldmVudFxuXHQgKiAgLSBgaGlkZGVuYDogQW4gaW52aXNpYmxlIGZvcm0gZmllbGQuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCB2YWx1ZVxuXHQgKiAgLSBgaGVhZGVyYDogQSBsZXZlbCA1IGhlYWRlci5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IGxhYmVsXG5cdCAqICAtIGBkaXZgOiBBIGdlbmVyaWMgcGxhY2Vob2xkZXIgZWxlbWVudCBvciBsYWJlbC5cblx0ICogICAgICAtIEF0dHJpYnV0ZXM6IG5hbWUsIGxhYmVsXG5cdCAqICAtIGBzdWJtaXRgOiBBIHN1Ym1pdCBidXR0b24uIE1vcmViaXRzLnNpbXBsZVdpbmRvdyBtb3ZlcyB0aGVzZSB0byB0aGUgZm9vdGVyIG9mIHRoZSBkaWFsb2cuXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgZGlzYWJsZWRcblx0ICogIC0gYGJ1dHRvbmA6IEEgZ2VuZXJpYyBidXR0b24uXG5cdCAqICAgICAgLSBBdHRyaWJ1dGVzOiBuYW1lLCBsYWJlbCwgZGlzYWJsZWQsIGV2ZW50XG5cdCAqICAtIGB0ZXh0YXJlYWA6IEEgYmlnLCBtdWx0aS1saW5lIHRleHQgYm94LlxuXHQgKiAgICAgIC0gQXR0cmlidXRlczogbmFtZSwgbGFiZWwsIHZhbHVlLCBjb2xzLCByb3dzLCBkaXNhYmxlZCwgcmVxdWlyZWQsIHJlYWRvbmx5XG5cdCAqICAtIGBmcmFnbWVudGA6IEEgRG9jdW1lbnRGcmFnbWVudCBvYmplY3QuXG5cdCAqICAgICAgLSBObyBhdHRyaWJ1dGVzLCBhbmQgbm8gZ2xvYmFsIGF0dHJpYnV0ZXMgZXhjZXB0IGFkbWlub25seS5cblx0ICogVGhlcmUgaXMgc29tZSBkaWZmZXJlbmNlIG9uIGhvdyB0eXBlcyBoYW5kbGUgdGhlIGBsYWJlbGAgYXR0cmlidXRlOlxuXHQgKiAtIGBkaXZgLCBgc2VsZWN0YCwgYGZpZWxkYCwgYGNoZWNrYm94YC9gcmFkaW9gLCBgaW5wdXRgLCBgdGV4dGFyZWFgLCBgaGVhZGVyYCwgYW5kIGBkeW5pbnB1dGAgY2FuIGFjY2VwdCBhbiBhcnJheSBvZiBpdGVtcyxcblx0ICogYW5kIHRoZSBsYWJlbCBpdGVtKHMpIGNhbiBiZSBgRWxlbWVudGBzLlxuXHQgKiAtIGBvcHRpb25gLCBgb3B0Z3JvdXBgLCBgX2R5bmlucHV0X2VsZW1lbnRgLCBgc3VibWl0YCwgYW5kIGBidXR0b25gIGFjY2VwdCBvbmx5IGEgc2luZ2xlIHN0cmluZy5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBPYmplY3QgcmVwcmVzZW50aW5nIHRoZSBxdWlja2Zvcm0gZWxlbWVudC4gU2hvdWxkXG5cdCAqIHNwZWNpZnkgb25lIG9mIHRoZSBhdmFpbGFibGUgdHlwZXMgZnJvbSB0aGUgaW5kZXggYWJvdmUsIGFzIHdlbGwgYXMgYW55XG5cdCAqIHJlbGV2YW50IGFuZCBhdmFpbGFibGUgYXR0cmlidXRlcy5cblx0ICogQGV4YW1wbGUgbmV3IE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KHtcblx0ICogICAgIG5hbWU6ICd0YXJnZXQnLFxuXHQgKiAgICAgdHlwZTogJ2lucHV0Jyxcblx0ICogICAgIGxhYmVsOiAnWW91ciB0YXJnZXQ6Jyxcblx0ICogICAgIHRvb2x0aXA6ICdFbnRlciB5b3VyIHRhcmdldC4gUmVxdWlyZWQuJyxcblx0ICogICAgIHJlcXVpcmVkOiB0cnVlXG5cdCAqIH0pO1xuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQgPSBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cdFx0dGhpcy5jaGlsZHMgPSBbXTtcblx0fTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudFxuXHQgKiBAdHlwZSB7bnVtYmVyfVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQuaWQgPSAwO1xuXHQvKipcblx0ICogQXBwZW5kcyBhbiBlbGVtZW50IHRvIGN1cnJlbnQgZWxlbWVudC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50XG5cdCAqIEBwYXJhbSB7TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnR9IGRhdGEgLSBBIHF1aWNrRm9ybSBlbGVtZW50IG9yIHRoZSBvYmplY3QgcmVxdWlyZWQgdG9cblx0ICogY3JlYXRlIHRoZSBxdWlja0Zvcm0gZWxlbWVudC5cblx0ICogQHJldHVybnMge01vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50fSBUaGUgc2FtZSBlbGVtZW50IHBhc3NlZCBpbi5cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuXHRcdGxldCBjaGlsZDtcblx0XHRpZiAoZGF0YSBpbnN0YW5jZW9mIE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KSB7XG5cdFx0XHRjaGlsZCA9IGRhdGE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNoaWxkID0gbmV3IE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KGRhdGEpO1xuXHRcdH1cblx0XHR0aGlzLmNoaWxkc1t0aGlzLmNoaWxkcy5sZW5ndGhdID0gY2hpbGQ7XG5cdFx0cmV0dXJuIGNoaWxkO1xuXHR9O1xuXHQvKipcblx0ICogUmVuZGVycyB0aGUgSFRNTCBvdXRwdXQgZm9yIHRoZSBxdWlja0Zvcm0gZWxlbWVudC4gIFRoaXMgc2hvdWxkIGJlIGNhbGxlZFxuXHQgKiB3aXRob3V0IHBhcmFtZXRlcnM6IGBmb3JtLnJlbmRlcigpYC5cblx0ICpcblx0ICogQHBhcmFtIHtudW1iZXJ9IGludGVybmFsU3ViZ3JvdXBJZFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIChpbnRlcm5hbFN1Ymdyb3VwSWQpIHtcblx0XHRjb25zdCBjdXJyZW50Tm9kZSA9IHRoaXMuY29tcHV0ZSh0aGlzLmRhdGEsIGludGVybmFsU3ViZ3JvdXBJZCk7XG5cdFx0Zm9yIChjb25zdCBjaGlsZCBvZiB0aGlzLmNoaWxkcykge1xuXHRcdFx0Ly8gZG8gbm90IHBhc3MgaW50ZXJuYWxfc3ViZ3JvdXBfaWQgdG8gcmVjdXJzaXZlIGNhbGxzXG5cdFx0XHRjdXJyZW50Tm9kZVsxXS5hcHBlbmRDaGlsZChjaGlsZC5yZW5kZXIoKSk7XG5cdFx0fVxuXHRcdHJldHVybiBjdXJyZW50Tm9kZVswXTtcblx0fTtcblx0LyoqXG5cdCAqIEBwYXJhbSB7Kn0gZGF0YVxuXHQgKiBAcGFyYW0ge251bWJlcn0gaW5JZFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LnByb3RvdHlwZS5jb21wdXRlID0gZnVuY3Rpb24gKGRhdGEsIGluSWQpIHtcblx0XHRsZXQgbm9kZTtcblx0XHRsZXQgY2hpbGRDb250YWluZXIgPSBudWxsO1xuXHRcdGxldCBsYWJlbDtcblx0XHRjb25zdCBpZCA9IGAke2luSWQgPyBgJHtpbklkfV9gIDogJyd9bm9kZV8ke01vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LmlkKyt9YDtcblx0XHRpZiAoZGF0YS5hZG1pbm9ubHkgJiYgIU1vcmViaXRzLnVzZXJJc1N5c29wKSB7XG5cdFx0XHQvLyBoZWxsIGhhY2sgYWxwaGFcblx0XHRcdGRhdGEudHlwZSA9ICdoaWRkZW4nO1xuXHRcdH1cblx0XHRsZXQgaTtcblx0XHRsZXQgY3VycmVudDtcblx0XHRsZXQgc3Vibm9kZTtcblx0XHRzd2l0Y2ggKGRhdGEudHlwZSkge1xuXHRcdFx0Y2FzZSAnZm9ybSc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cdFx0XHRcdG5vZGUuY2xhc3NOYW1lID0gJ3F1aWNrZm9ybSc7XG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zY3JpcHQtdXJsXG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnamF2YXNjcmlwdDp2b2lkKDApOycpO1xuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihkYXRhLmV2ZW50VHlwZSB8fCAnc3VibWl0JywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZnJhZ21lbnQnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdFx0XHQvLyBmcmFnbWVudHMgY2FuJ3QgaGF2ZSBhbnkgYXR0cmlidXRlcywgc28ganVzdCByZXR1cm4gaXQgc3RyYWlnaHQgYXdheVxuXHRcdFx0XHRyZXR1cm4gW25vZGUsIG5vZGVdO1xuXHRcdFx0Y2FzZSAnc2VsZWN0Jzoge1xuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdpZCcsIGBkaXZfJHtpZH1gKTtcblx0XHRcdFx0aWYgKGRhdGEubGFiZWwpIHtcblx0XHRcdFx0XHRsYWJlbCA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSk7XG5cdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBpZCk7XG5cdFx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0Ly8gTm8gbWFyZ2luXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBzZWxlY3QgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpKTtcblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLm11bHRpcGxlKSB7XG5cdFx0XHRcdFx0c2VsZWN0LnNldEF0dHJpYnV0ZSgnbXVsdGlwbGUnLCAnbXVsdGlwbGUnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5zaXplKSB7XG5cdFx0XHRcdFx0c2VsZWN0LnNldEF0dHJpYnV0ZSgnc2l6ZScsIGRhdGEuc2l6ZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRzZWxlY3QuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5saXN0KSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRhdGEubGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdFx0Y3VycmVudCA9IGRhdGEubGlzdFtpXTtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50Lmxpc3QpIHtcblx0XHRcdFx0XHRcdFx0Y3VycmVudC50eXBlID0gJ29wdGdyb3VwJztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGN1cnJlbnQudHlwZSA9ICdvcHRpb24nO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c3Vibm9kZSA9IHRoaXMuY29tcHV0ZShjdXJyZW50KTtcblx0XHRcdFx0XHRcdHNlbGVjdC5hcHBlbmRDaGlsZChzdWJub2RlWzBdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRDb250YWluZXIgPSBzZWxlY3Q7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSAnb3B0aW9uJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuXHRcdFx0XHRub2RlLnZhbHVlcyA9IGRhdGEudmFsdWU7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEudmFsdWUpO1xuXHRcdFx0XHRpZiAoZGF0YS5zZWxlY3RlZCkge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICdzZWxlY3RlZCcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0bm9kZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdGlmIChkYXRhLmhpZGRlbikge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdoaWRkZW4nLCAnJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgZGF0YS5sYWJlbCk7XG5cdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ29wdGdyb3VwJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGdyb3VwJyk7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCdsYWJlbCcsIGRhdGEubGFiZWwpO1xuXHRcdFx0XHRpZiAoZGF0YS5saXN0KSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRhdGEubGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdFx0Y3VycmVudCA9IGRhdGEubGlzdFtpXTtcblx0XHRcdFx0XHRcdGN1cnJlbnQudHlwZSA9ICdvcHRpb24nOyAvLyBtdXN0IGJlIG9wdGlvbnMgaGVyZVxuXHRcdFx0XHRcdFx0c3Vibm9kZSA9IHRoaXMuY29tcHV0ZShjdXJyZW50KTtcblx0XHRcdFx0XHRcdG5vZGUuYXBwZW5kQ2hpbGQoc3Vibm9kZVswXSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZmllbGQnOlxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcblx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpKTtcblx0XHRcdFx0bGFiZWwuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdGlmIChkYXRhLm5hbWUpIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRub2RlLmRpc2FibGVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2NoZWNrYm94Jzpcblx0XHRcdGNhc2UgJ3JhZGlvJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRpZiAoZGF0YS5saXN0KSB7XG5cdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGRhdGEubGlzdC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdFx0Y29uc3QgY3VySWQgPSBgJHtpZH1fJHtpfWA7XG5cdFx0XHRcdFx0XHRjdXJyZW50ID0gZGF0YS5saXN0W2ldO1xuXHRcdFx0XHRcdFx0bGV0IGN1ckRpdjtcblx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnR5cGUgPT09ICdoZWFkZXInKSB7XG5cdFx0XHRcdFx0XHRcdC8vIGlubGluZSBoYWNrXG5cdFx0XHRcdFx0XHRcdGN1ckRpdiA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDYnKSk7XG5cdFx0XHRcdFx0XHRcdGN1ckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjdXJyZW50LmxhYmVsKSk7XG5cdFx0XHRcdFx0XHRcdGlmIChjdXJyZW50LnRvb2x0aXApIHtcblx0XHRcdFx0XHRcdFx0XHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5nZW5lcmF0ZVRvb2x0aXAoY3VyRGl2LCBjdXJyZW50KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGN1ckRpdiA9IG5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuXHRcdFx0XHRcdFx0Ly8gQWRkIGhpZGRlbiBhdHRyXG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5oaWRkZW4pIHtcblx0XHRcdFx0XHRcdFx0Y3VyRGl2LnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0c3Vibm9kZSA9IGN1ckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUudmFsdWVzID0gY3VycmVudC52YWx1ZTtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGN1cnJlbnQudmFsdWUpO1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBkYXRhLnR5cGUpO1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgY3VySWQpO1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBjdXJyZW50Lm5hbWUgfHwgZGF0YS5uYW1lKTtcblx0XHRcdFx0XHRcdC8vIElmIG5hbWUgaXMgcHJvdmlkZWQgb24gdGhlIGluZGl2aWR1YWwgY2hlY2tib3gsIGFkZCBhIGRhdGEtc2luZ2xlXG5cdFx0XHRcdFx0XHQvLyBhdHRyaWJ1dGUgd2hpY2ggaW5kaWNhdGVzIGl0IGlzbid0IHBhcnQgb2YgYSBsaXN0IG9mIGNoZWNrYm94ZXMgd2l0aFxuXHRcdFx0XHRcdFx0Ly8gc2FtZSBuYW1lLiBVc2VkIGluIGdldElucHV0RGF0YSgpXG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC5uYW1lKSB7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXNpbmdsZScsICdkYXRhLXNpbmdsZScpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuY2hlY2tlZCkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLmNoZWNrZWQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuZGlzYWJsZWQpIHtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRsYWJlbCA9IGN1ckRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKTtcblx0XHRcdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoY3VycmVudC5sYWJlbCkpO1xuXHRcdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBjdXJJZCk7XG5cdFx0XHRcdFx0XHRpZiAoY3VycmVudC50b29sdGlwKSB7XG5cdFx0XHRcdFx0XHRcdE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50LmdlbmVyYXRlVG9vbHRpcChsYWJlbCwgY3VycmVudCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQvLyBzdHlsZXMgZ28gb24gdGhlIGxhYmVsLCBkb2Vzbid0IG1ha2Ugc2Vuc2UgdG8gc3R5bGUgYSBjaGVja2JveC9yYWRpb1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuc3R5bGUpIHtcblx0XHRcdFx0XHRcdFx0bGFiZWwuc2V0QXR0cmlidXRlKCdzdHlsZScsIGN1cnJlbnQuc3R5bGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bGV0IGV2ZW50O1xuXHRcdFx0XHRcdFx0aWYgKGN1cnJlbnQuc3ViZ3JvdXApIHtcblx0XHRcdFx0XHRcdFx0bGV0IHRtcGdyb3VwID0gY3VycmVudC5zdWJncm91cDtcblx0XHRcdFx0XHRcdFx0dG1wZ3JvdXAgPSBnZW5lcmF0ZUFycmF5KHRtcGdyb3VwKTtcblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ViZ3JvdXBSYXcgPSBuZXcgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQoe1xuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdkaXYnLFxuXHRcdFx0XHRcdFx0XHRcdGlkOiBgJHtpZH1fJHtpfV9zdWJncm91cGAsXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IGVsIG9mIHRtcGdyb3VwKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgbmV3RWwgPSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQuLi5lbCxcblx0XHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRcdG5ld0VsLnR5cGUgfHw9IGRhdGEudHlwZTtcblx0XHRcdFx0XHRcdFx0XHRuZXdFbC5uYW1lID0gYCR7Y3VycmVudC5uYW1lIHx8IGRhdGEubmFtZX0uJHtuZXdFbC5uYW1lfWA7XG5cdFx0XHRcdFx0XHRcdFx0c3ViZ3JvdXBSYXcuYXBwZW5kKG5ld0VsKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjb25zdCBzdWJncm91cCA9IHN1Ymdyb3VwUmF3LnJlbmRlcihjdXJJZCk7XG5cdFx0XHRcdFx0XHRcdHN1Ymdyb3VwLmNsYXNzTmFtZSA9ICdxdWlja2Zvcm1TdWJncm91cCc7XG5cdFx0XHRcdFx0XHRcdHN1Ym5vZGUuc3ViZ3JvdXAgPSBzdWJncm91cDtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5zaG93biA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRldmVudCA9IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoZS50YXJnZXQuc3ViZ3JvdXApO1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGUudGFyZ2V0LnR5cGUgPT09ICdyYWRpbycpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc3Qge25hbWV9ID0gZS50YXJnZXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdLnN1Ymdyb3VwXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdID0gZS50YXJnZXQ7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGUudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZS50YXJnZXQuc3ViZ3JvdXApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdFx0c3Vibm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCwgdHJ1ZSk7XG5cdFx0XHRcdFx0XHRcdGlmIChjdXJyZW50LmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRzdWJub2RlLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoc3ViZ3JvdXApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gJ3JhZGlvJykge1xuXHRcdFx0XHRcdFx0XHRldmVudCA9IChlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnN0IHtuYW1lfSA9IGUudGFyZ2V0O1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRlLnRhcmdldC5mb3JtLm5hbWVzW25hbWVdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZS50YXJnZXQuZm9ybS5uYW1lc1tuYW1lXS5zdWJncm91cFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVsZXRlIGUudGFyZ2V0LmZvcm0ubmFtZXNbbmFtZV07XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50LCB0cnVlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIGFkZCB1c2VycycgZXZlbnQgbGFzdCwgc28gaXQgY2FuIGludGVyYWN0IHdpdGggdGhlIHN1Ymdyb3VwXG5cdFx0XHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGRhdGEuZXZlbnQsIGZhbHNlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoY3VycmVudC5ldmVudCkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGN1cnJlbnQuZXZlbnQsIHRydWUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5zaGlmdENsaWNrU3VwcG9ydCAmJiBkYXRhLnR5cGUgPT09ICdjaGVja2JveCcpIHtcblx0XHRcdFx0XHRNb3JlYml0cy5jaGVja2JveFNoaWZ0Q2xpY2tTdXBwb3J0KE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50cyhub2RlLCBkYXRhLm5hbWUpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdC8vIGlucHV0IGlzIGFjdHVhbGx5IGEgdGV4dC10eXBlLCBzbyBudW1iZXIgaGVyZSBpbmhlcml0cyB0aGUgc2FtZSBzdHVmZlxuXHRcdFx0Y2FzZSAnbnVtYmVyJzpcblx0XHRcdGNhc2UgJ2lucHV0Jzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnaWQnLCBgZGl2XyR7aWR9YCk7XG5cdFx0XHRcdC8vIEFkZCBoaWRkZW4gYXR0clxuXHRcdFx0XHRpZiAoZGF0YS5oaWRkZW4pIHtcblx0XHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmxhYmVsKSB7XG5cdFx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpO1xuXHRcdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRcdGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgZGF0YS5pZCB8fCBpZCk7XG5cdFx0XHRcdFx0Ly8gTm8gbWFyZ2luXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRzdWJub2RlID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKTtcblx0XHRcdFx0Ly8gQWRkIHZhbHVlIGFuZCBwbGFjZWhvbGRlciBhdHRyc1xuXHRcdFx0XHRpZiAoZGF0YS52YWx1ZSkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEudmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgZGF0YS5wbGFjZWhvbGRlcik7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRpZiAoZGF0YS50eXBlID09PSAnaW5wdXQnKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xuXHRcdFx0XHRcdGZvciAoY29uc3QgYXR0IG9mIFsnbWluJywgJ21heCcsICdzdGVwJywgJ2xpc3QnXSkge1xuXHRcdFx0XHRcdFx0aWYgKGRhdGFbYXR0XSkge1xuXHRcdFx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZShhdHQsIGRhdGFbYXR0XSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoY29uc3QgYXR0IG9mIFsndmFsdWUnLCAnc2l6ZScsICdwbGFjZWhvbGRlcicsICdtYXhsZW5ndGgnXSkge1xuXHRcdFx0XHRcdGlmIChkYXRhW2F0dF0pIHtcblx0XHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKGF0dCwgZGF0YVthdHRdKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChjb25zdCBhdHQgb2YgWydkaXNhYmxlZCcsICdyZXF1aXJlZCcsICdyZWFkb25seSddKSB7XG5cdFx0XHRcdFx0aWYgKGRhdGFbYXR0XSkge1xuXHRcdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoYXR0LCBhdHQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5ldmVudCkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRDb250YWluZXIgPSBzdWJub2RlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2R5bmlucHV0Jzoge1xuXHRcdFx0XHRjb25zdCBtaW4gPSBkYXRhLm1pbiB8fCAxO1xuXHRcdFx0XHRjb25zdCBtYXggPSBkYXRhLm1heCB8fCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1JykpO1xuXHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0Y29uc3QgbGlzdE5vZGUgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcblx0XHRcdFx0Y29uc3QgbW9yZSA9IHRoaXMuY29tcHV0ZSh7XG5cdFx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdFx0bGFiZWw6ICfmm7TlpJonLFxuXHRcdFx0XHRcdGRpc2FibGVkOiBtaW4gPj0gbWF4LFxuXHRcdFx0XHRcdGV2ZW50OiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QgbmV3Tm9kZSA9IG5ldyBNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudChlLnRhcmdldC5zdWJsaXN0KTtcblx0XHRcdFx0XHRcdGUudGFyZ2V0LmFyZWEuYXBwZW5kQ2hpbGQobmV3Tm9kZS5yZW5kZXIoKSk7XG5cdFx0XHRcdFx0XHRpZiAoKytlLnRhcmdldC5jb3VudGVyID49IGUudGFyZ2V0Lm1heCkge1xuXHRcdFx0XHRcdFx0XHRlLnRhcmdldC5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKG1vcmVbMF0pO1xuXHRcdFx0XHRjb25zdCBbLCBtb3JlQnV0dG9uXSA9IG1vcmU7XG5cdFx0XHRcdGNvbnN0IHN1Ymxpc3QgPSB7XG5cdFx0XHRcdFx0dHlwZTogJ19keW5pbnB1dF9lbGVtZW50Jyxcblx0XHRcdFx0XHRsYWJlbDogZGF0YS5zdWJsYWJlbCB8fCBkYXRhLmxhYmVsLFxuXHRcdFx0XHRcdG5hbWU6IGRhdGEubmFtZSxcblx0XHRcdFx0XHR2YWx1ZTogZGF0YS52YWx1ZSxcblx0XHRcdFx0XHRzaXplOiBkYXRhLnNpemUsXG5cdFx0XHRcdFx0cmVtb3ZlOiBmYWxzZSxcblx0XHRcdFx0XHRtYXhsZW5ndGg6IGRhdGEubWF4bGVuZ3RoLFxuXHRcdFx0XHRcdGV2ZW50OiBkYXRhLmV2ZW50LFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbWluOyArK2kpIHtcblx0XHRcdFx0XHRjb25zdCBlbGVtID0gbmV3IE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KHN1Ymxpc3QpO1xuXHRcdFx0XHRcdGxpc3ROb2RlLmFwcGVuZENoaWxkKGVsZW0ucmVuZGVyKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1Ymxpc3QucmVtb3ZlID0gdHJ1ZTtcblx0XHRcdFx0c3VibGlzdC5tb3JlYnV0dG9uID0gbW9yZUJ1dHRvbjtcblx0XHRcdFx0c3VibGlzdC5saXN0bm9kZSA9IGxpc3ROb2RlO1xuXHRcdFx0XHRtb3JlQnV0dG9uLnN1Ymxpc3QgPSBzdWJsaXN0O1xuXHRcdFx0XHRtb3JlQnV0dG9uLmFyZWEgPSBsaXN0Tm9kZTtcblx0XHRcdFx0bW9yZUJ1dHRvbi5tYXggPSBtYXggLSBtaW47XG5cdFx0XHRcdG1vcmVCdXR0b24uY291bnRlciA9IDA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0Y2FzZSAnX2R5bmlucHV0X2VsZW1lbnQnOlxuXHRcdFx0XHQvLyBQcml2YXRlLCBzaW1pbGFyIHRvIG5vcm1hbCBpbnB1dFxuXHRcdFx0XHRub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdGlmIChkYXRhLmxhYmVsKSB7XG5cdFx0XHRcdFx0bGFiZWwgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpO1xuXHRcdFx0XHRcdGxhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0XHRsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGlkKTtcblx0XHRcdFx0XHQvLyBObyBtYXJnaW5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHN1Ym5vZGUgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuXHRcdFx0XHRpZiAoZGF0YS52YWx1ZSkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEudmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuXHRcdFx0XHRpZiAoZGF0YS5zaXplKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBkYXRhLnNpemUpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLm1heGxlbmd0aCkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCBkYXRhLm1heGxlbmd0aCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEuZXZlbnQpIHtcblx0XHRcdFx0XHRzdWJub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZGF0YS5ldmVudCwgZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnJlbW92ZSkge1xuXHRcdFx0XHRcdGNvbnN0IHJlbW92ZSA9IHRoaXMuY29tcHV0ZSh7XG5cdFx0XHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0XHRcdGxhYmVsOiAn56e76ZmkJyxcblx0XHRcdFx0XHRcdGV2ZW50OiAoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBsaXN0ID0gZS50YXJnZXQubGlzdG5vZGU7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IG5vZGVfID0gZS50YXJnZXQuaW5wdXRub2RlO1xuXHRcdFx0XHRcdFx0XHRjb25zdCBtb3JlID0gZS50YXJnZXQubW9yZWJ1dHRvbjtcblx0XHRcdFx0XHRcdFx0bGlzdC5yZW1vdmVDaGlsZChub2RlXyk7XG5cdFx0XHRcdFx0XHRcdC0tbW9yZS5jb3VudGVyO1xuXHRcdFx0XHRcdFx0XHRtb3JlLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblx0XHRcdFx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChyZW1vdmVbMF0pO1xuXHRcdFx0XHRcdGNvbnN0IFssIHJlbW92ZUJ1dHRvbl0gPSByZW1vdmU7XG5cdFx0XHRcdFx0cmVtb3ZlQnV0dG9uLmlucHV0bm9kZSA9IG5vZGU7XG5cdFx0XHRcdFx0cmVtb3ZlQnV0dG9uLmxpc3Rub2RlID0gZGF0YS5saXN0bm9kZTtcblx0XHRcdFx0XHRyZW1vdmVCdXR0b24ubW9yZWJ1dHRvbiA9IGRhdGEubW9yZWJ1dHRvbjtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2hpZGRlbic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgndHlwZScsICdoaWRkZW4nKTtcblx0XHRcdFx0bm9kZS52YWx1ZXMgPSBkYXRhLnZhbHVlO1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkYXRhLnZhbHVlKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBkYXRhLm5hbWUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2hlYWRlcic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuXHRcdFx0XHRub2RlLmFwcGVuZENoaWxkKE1vcmViaXRzLmNyZWF0ZUh0bWwoZGF0YS5sYWJlbCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2Rpdic6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0aWYgKGRhdGEubmFtZSkge1xuXHRcdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKCduYW1lJywgZGF0YS5uYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0XHRyZXN1bHQuY2xhc3NOYW1lID0gJ3F1aWNrZm9ybURlc2NyaXB0aW9uJztcblx0XHRcdFx0XHRyZXN1bHQuYXBwZW5kQ2hpbGQoTW9yZWJpdHMuY3JlYXRlSHRtbChkYXRhLmxhYmVsKSk7XG5cdFx0XHRcdFx0bm9kZS5hcHBlbmRDaGlsZChyZXN1bHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnc3VibWl0Jzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0Y2hpbGRDb250YWluZXIgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuXHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG5cdFx0XHRcdGlmIChkYXRhLmxhYmVsKSB7XG5cdFx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEubGFiZWwpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSB8fCAnc3VibWl0Jyk7XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0Y2hpbGRDb250YWluZXIuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnYnV0dG9uJzpcblx0XHRcdFx0bm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdFx0Y2hpbGRDb250YWluZXIgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpO1xuXHRcdFx0XHRjaGlsZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5cdFx0XHRcdGlmIChkYXRhLmxhYmVsKSB7XG5cdFx0XHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGRhdGEubGFiZWwpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdGlmIChkYXRhLmRpc2FibGVkKSB7XG5cdFx0XHRcdFx0Y2hpbGRDb250YWluZXIuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLmV2ZW50KSB7XG5cdFx0XHRcdFx0Y2hpbGRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkYXRhLmV2ZW50LCBmYWxzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd0ZXh0YXJlYSc6XG5cdFx0XHRcdG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2lkJywgYGRpdl8ke2lkfWApO1xuXHRcdFx0XHQvLyBBZGQgaGlkZGVuIGF0dHJcblx0XHRcdFx0aWYgKGRhdGEuaGlkZGVuKSB7XG5cdFx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5sYWJlbCkge1xuXHRcdFx0XHRcdGxhYmVsID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpKTtcblx0XHRcdFx0XHRjb25zdCBsYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuXHRcdFx0XHRcdGxhYmVsRWxlbWVudC5hcHBlbmRDaGlsZChNb3JlYml0cy5jcmVhdGVIdG1sKGRhdGEubGFiZWwpKTtcblx0XHRcdFx0XHRsYWJlbEVsZW1lbnQuc2V0QXR0cmlidXRlKCdmb3InLCBkYXRhLmlkIHx8IGlkKTtcblx0XHRcdFx0XHRsYWJlbC5hcHBlbmRDaGlsZChsYWJlbEVsZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN1Ym5vZGUgPSBub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJykpO1xuXHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnbmFtZScsIGRhdGEubmFtZSk7XG5cdFx0XHRcdGlmIChkYXRhLmNvbHMpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgnY29scycsIGRhdGEuY29scyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEucm93cykge1xuXHRcdFx0XHRcdHN1Ym5vZGUuc2V0QXR0cmlidXRlKCdyb3dzJywgZGF0YS5yb3dzKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdHN1Ym5vZGUuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkYXRhLnJlcXVpcmVkKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKGRhdGEucmVhZG9ubHkpIHtcblx0XHRcdFx0XHRzdWJub2RlLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAncmVhZG9ubHknKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZGF0YS52YWx1ZSkge1xuXHRcdFx0XHRcdHN1Ym5vZGUudmFsdWUgPSBkYXRhLnZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIEFkZCBwbGFjZWhvbGRlciBhdHRyXG5cdFx0XHRcdGlmIChkYXRhLnBsYWNlaG9sZGVyKSB7XG5cdFx0XHRcdFx0c3Vibm9kZS5wbGFjZWhvbGRlciA9IGRhdGEucGxhY2Vob2xkZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2hpbGRDb250YWluZXIgPSBzdWJub2RlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihgTW9yZWJpdHMucXVpY2tGb3JtOiB1bmtub3duIGVsZW1lbnQgdHlwZSAke2RhdGEudHlwZS50b1N0cmluZygpfWApO1xuXHRcdH1cblx0XHRjaGlsZENvbnRhaW5lciB8fD0gbm9kZTtcblx0XHRpZiAoZGF0YS50b29sdGlwKSB7XG5cdFx0XHRNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudC5nZW5lcmF0ZVRvb2x0aXAobGFiZWwgfHwgbm9kZSwgZGF0YSk7XG5cdFx0fVxuXHRcdGlmIChkYXRhLmV4dHJhKSB7XG5cdFx0XHRjaGlsZENvbnRhaW5lci5leHRyYSA9IGRhdGEuZXh0cmE7XG5cdFx0fVxuXHRcdGlmIChkYXRhLiRkYXRhKSB7XG5cdFx0XHQkKGNoaWxkQ29udGFpbmVyKS5kYXRhKGRhdGEuJGRhdGEpO1xuXHRcdH1cblx0XHRpZiAoZGF0YS5zdHlsZSkge1xuXHRcdFx0Y2hpbGRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsIGRhdGEuc3R5bGUpO1xuXHRcdH1cblx0XHRpZiAoZGF0YS5jbGFzc05hbWUpIHtcblx0XHRcdGNoaWxkQ29udGFpbmVyLmNsYXNzTmFtZSA9IGNoaWxkQ29udGFpbmVyLmNsYXNzTmFtZVxuXHRcdFx0XHQ/IGAke2NoaWxkQ29udGFpbmVyLmNsYXNzTmFtZX0gJHtkYXRhLmNsYXNzTmFtZX1gXG5cdFx0XHRcdDogZGF0YS5jbGFzc05hbWU7XG5cdFx0fVxuXHRcdGNoaWxkQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBkYXRhLmlkIHx8IGlkKTtcblx0XHRyZXR1cm4gW25vZGUsIGNoaWxkQ29udGFpbmVyXTtcblx0fTtcblx0LyoqXG5cdCAqIENyZWF0ZSBhIGpRdWVyeSBVSS1iYXNlZCB0b29sdGlwLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnRcblx0ICogQHJlcXVpcmVzIGpxdWVyeS51aVxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlIC0gVGhlIEhUTUwgZWxlbWVudCBiZXNpZGUgd2hpY2ggYSB0b29sdGlwIGlzIHRvIGJlIGdlbmVyYXRlZC5cblx0ICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBUb29sdGlwLXJlbGF0ZWQgY29uZmlndXJhdGlvbiBkYXRhLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQuZ2VuZXJhdGVUb29sdGlwID0gKG5vZGUsIGRhdGEpID0+IHtcblx0XHRjb25zdCB0b29sdGlwQnV0dG9uID0gbm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpO1xuXHRcdHRvb2x0aXBCdXR0b24uY2xhc3NOYW1lID0gJ21vcmViaXRzLXRvb2x0aXBCdXR0b24nO1xuXHRcdHRvb2x0aXBCdXR0b24udGl0bGUgPSBkYXRhLnRvb2x0aXA7IC8vIFByb3ZpZGVzIHRoZSBjb250ZW50IGZvciBqUXVlcnkgVUlcblx0XHR0b29sdGlwQnV0dG9uLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCc/JykpO1xuXHRcdCQodG9vbHRpcEJ1dHRvbikudG9vbHRpcCh7XG5cdFx0XHRwb3NpdGlvbjoge1xuXHRcdFx0XHRteTogJ2xlZnQgdG9wJyxcblx0XHRcdFx0YXQ6ICdjZW50ZXIgYm90dG9tJyxcblx0XHRcdFx0Y29sbGlzaW9uOiAnZmxpcGZpdCcsXG5cdFx0XHR9LFxuXHRcdFx0Ly8gRGVwcmVjYXRlZCBpbiBVSSAxLjEyLCBidXQgTVcgc3R1Y2sgb24gMS45LjIgaW5kZWZpbml0ZWx5OyBzZWUgIzM5OCBhbmQgVDcxMzg2XG5cdFx0XHR0b29sdGlwQ2xhc3M6ICdtb3JlYml0cy11aS10b29sdGlwJyxcblx0XHR9KTtcblx0fTtcblx0Ly8gU29tZSB1dGlsaXR5IG1ldGhvZHMgZm9yIG1hbmlwdWxhdGluZyBxdWlja0Zvcm1zIGFmdGVyIHRoZWlyIGNyZWF0aW9uOlxuXHQvLyAoTm9uZSBvZiB0aGVzZSB3b3JrIGZvciBcImR5bmlucHV0XCIgdHlwZSBmaWVsZHMgYXQgcHJlc2VudClcblx0LyoqXG5cdCAqIFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGZpbGxlZCBmb3JtIGRhdGEgZW50ZXJlZCBieSB0aGUgdXNlciwgd2l0aCB0aGUgb2JqZWN0XG5cdCAqIGtleXMgYmVpbmcgdGhlIGZvcm0gZWxlbWVudCBuYW1lcy4gRGlzYWJsZWQgZmllbGRzIHdpbGwgYmUgaWdub3JlZCwgYnV0IG5vdCBoaWRkZW4gZmllbGRzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7SFRNTEZvcm1FbGVtZW50fSBmb3JtXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IFdpdGggZmllbGQgbmFtZXMgYXMga2V5cywgaW5wdXQgZGF0YSBhcyB2YWx1ZXMuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0SW5wdXREYXRhID0gKGZvcm0pID0+IHtcblx0XHRjb25zdCByZXN1bHQgPSB7fTtcblx0XHRmb3IgKGNvbnN0IGZpZWxkIG9mIGZvcm0uZWxlbWVudHMpIHtcblx0XHRcdGlmIChmaWVsZC5kaXNhYmxlZCB8fCAhZmllbGQubmFtZSB8fCAhZmllbGQudHlwZSB8fCBmaWVsZC50eXBlID09PSAnc3VibWl0JyB8fCBmaWVsZC50eXBlID09PSAnYnV0dG9uJykge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdC8vIEZvciBlbGVtZW50cyBpbiBzdWJncm91cHMsIHF1aWNrZm9ybSBwcmVwZW5kcyBlbGVtZW50IG5hbWVzIHdpdGhcblx0XHRcdC8vIG5hbWUgb2YgdGhlIHBhcmVudCBncm91cCBmb2xsb3dlZCBieSBhIHBlcmlvZCwgZ2V0IHJpZCBvZiB0aGF0LlxuXHRcdFx0Y29uc3QgZmllbGROYW1lTm9ybSA9IGZpZWxkLm5hbWUuc2xpY2UoZmllbGQubmFtZS5pbmRleE9mKCcuJykgKyAxKTtcblx0XHRcdHN3aXRjaCAoZmllbGQudHlwZSkge1xuXHRcdFx0XHRjYXNlICdyYWRpbyc6XG5cdFx0XHRcdFx0aWYgKGZpZWxkLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnY2hlY2tib3gnOlxuXHRcdFx0XHRcdGlmIChmaWVsZC5kYXRhc2V0LnNpbmdsZSkge1xuXHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dID0gZmllbGQuY2hlY2tlZDsgLy8gYm9vbGVhblxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRbZmllbGROYW1lTm9ybV0gfHw9IFtdO1xuXHRcdFx0XHRcdFx0aWYgKGZpZWxkLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0W2ZpZWxkTmFtZU5vcm1dW3Jlc3VsdFtmaWVsZE5hbWVOb3JtXS5sZW5ndGhdID0gZmllbGQudmFsdWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdzZWxlY3QtbXVsdGlwbGUnOlxuXHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9ICQoZmllbGQpLnZhbCgpOyAvLyBmaWVsZC52YWx1ZSBkb2Vzbid0IHdvcmtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAndGV4dCc6IC8vIGZhbGxzIHRocm91Z2hcblx0XHRcdFx0Y2FzZSAndGV4dGFyZWEnOlxuXHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLnZhbHVlLnRyaW0oKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBjb3VsZCBiZSBzZWxlY3Qtb25lLCBkYXRlLCBudW1iZXIsIGVtYWlsLCBldGNcblx0XHRcdFx0XHRpZiAoZmllbGQudmFsdWUpIHtcblx0XHRcdFx0XHRcdHJlc3VsdFtmaWVsZE5hbWVOb3JtXSA9IGZpZWxkLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcblx0LyoqXG5cdCAqIFJldHVybnMgYWxsIGZvcm0gZWxlbWVudHMgd2l0aCBhIGdpdmVuIGZpZWxkIG5hbWUgb3IgSUQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cblx0ICogQHBhcmFtIHtzdHJpbmd9IGZpZWxkTmFtZSAtIFRoZSBuYW1lIG9yIGlkIG9mIHRoZSBmaWVsZHMuXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudFtdfSAtIEFycmF5IG9mIG1hdGNoaW5nIGZvcm0gZWxlbWVudHMuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudHMgPSAoZm9ybSwgZmllbGROYW1lKSA9PiB7XG5cdFx0Y29uc3QgJGZvcm0gPSAkKGZvcm0pO1xuXHRcdGZpZWxkTmFtZSA9ICQuZXNjYXBlU2VsZWN0b3IoZmllbGROYW1lKTsgLy8gc2FuaXRpemUgaW5wdXRcblx0XHRsZXQgJGVsZW1lbnRzID0gJGZvcm0uZmluZChgW25hbWU9XCIke2ZpZWxkTmFtZX1cIl1gKTtcblx0XHRpZiAoJGVsZW1lbnRzLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiAkZWxlbWVudHMudG9BcnJheSgpO1xuXHRcdH1cblx0XHQkZWxlbWVudHMgPSAkZm9ybS5maW5kKGAjJHtmaWVsZE5hbWV9YCk7XG5cdFx0cmV0dXJuICRlbGVtZW50cy50b0FycmF5KCk7XG5cdH07XG5cdC8qKlxuXHQgKiBTZWFyY2hlcyB0aGUgYXJyYXkgb2YgZWxlbWVudHMgZm9yIGEgY2hlY2tib3ggb3IgcmFkaW8gYnV0dG9uIHdpdGggYSBjZXJ0YWluXG5cdCAqIGB2YWx1ZWAgYXR0cmlidXRlLCBhbmQgcmV0dXJucyB0aGUgZmlyc3Qgc3VjaCBlbGVtZW50LiBSZXR1cm5zIG51bGwgaWYgbm90IGZvdW5kLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7SFRNTElucHV0RWxlbWVudFtdfSBlbGVtZW50QXJyYXkgLSBBcnJheSBvZiBjaGVja2JveCBvciByYWRpbyBlbGVtZW50cy5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVmFsdWUgdG8gc2VhcmNoIGZvci5cblx0ICogQHJldHVybnMge0hUTUxJbnB1dEVsZW1lbnR9XG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uZ2V0Q2hlY2tib3hPclJhZGlvID0gKGVsZW1lbnRBcnJheSwgdmFsdWUpID0+IHtcblx0XHRjb25zdCBmb3VuZCA9IGVsZW1lbnRBcnJheS5maWx0ZXIoKGVsZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiBlbGVtZW50LnZhbHVlID09PSB2YWx1ZTtcblx0XHR9KTtcblx0XHRpZiAoZm91bmQubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIGZvdW5kWzBdO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fTtcblx0LyoqXG5cdCAqIFJldHVybnMgdGhlICZsdDtkaXY+IGNvbnRhaW5pbmcgdGhlIGZvcm0gZWxlbWVudCwgb3IgdGhlIGZvcm0gZWxlbWVudCBpdHNlbGZcblx0ICogTWF5IG5vdCB3b3JrIGFzIGV4cGVjdGVkIG9uIGNoZWNrYm94ZXMgb3IgcmFkaW9zLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRDb250YWluZXIgPSAoZWxlbWVudCkgPT4ge1xuXHRcdC8vIGZvciBkaXZzLCBoZWFkaW5ncyBhbmQgZmllbGRzZXRzLCB0aGUgY29udGFpbmVyIGlzIHRoZSBlbGVtZW50IGl0c2VsZlxuXHRcdGlmIChcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRmllbGRTZXRFbGVtZW50IHx8XG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTERpdkVsZW1lbnQgfHxcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSGVhZGluZ0VsZW1lbnRcblx0XHQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdH1cblx0XHQvLyBmb3Igb3RoZXJzLCBqdXN0IHJldHVybiB0aGUgcGFyZW50IG5vZGVcblx0XHRyZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlO1xuXHR9O1xuXHQvKipcblx0ICogR2V0cyB0aGUgSFRNTCBlbGVtZW50IHRoYXQgY29udGFpbnMgdGhlIGxhYmVsIG9mIHRoZSBnaXZlbiBmb3JtIGVsZW1lbnRcblx0ICogKG1haW5seSBmb3IgaW50ZXJuYWwgdXNlKS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLmdldEVsZW1lbnRMYWJlbE9iamVjdCA9IChlbGVtZW50KSA9PiB7XG5cdFx0Ly8gZm9yIGJ1dHRvbnMsIGRpdnMgYW5kIGhlYWRlcnMsIHRoZSBsYWJlbCBpcyBvbiB0aGUgZWxlbWVudCBpdHNlbGZcblx0XHRpZiAoXG5cdFx0XHRlbGVtZW50LnR5cGUgPT09ICdidXR0b24nIHx8XG5cdFx0XHRlbGVtZW50LnR5cGUgPT09ICdzdWJtaXQnIHx8XG5cdFx0XHRlbGVtZW50IGluc3RhbmNlb2YgSFRNTERpdkVsZW1lbnQgfHxcblx0XHRcdGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSGVhZGluZ0VsZW1lbnRcblx0XHQpIHtcblx0XHRcdHJldHVybiBlbGVtZW50O1xuXHRcdFx0Ly8gZm9yIGZpZWxkc2V0cywgdGhlIGxhYmVsIGlzIHRoZSBjaGlsZCA8bGVnZW5kPiBlbGVtZW50XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEZpZWxkU2V0RWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcignbGVnZW5kJyk7XG5cdFx0XHQvLyBmb3IgdGV4dGFyZWFzLCB0aGUgbGFiZWwgaXMgdGhlIHNpYmxpbmcgPGg1PiBlbGVtZW50XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdoNScpO1xuXHRcdH1cblx0XHQvLyBmb3Igb3RoZXJzLCB0aGUgbGFiZWwgaXMgdGhlIHNpYmxpbmcgPGxhYmVsPiBlbGVtZW50XG5cdFx0cmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdsYWJlbCcpO1xuXHR9O1xuXHQvKipcblx0ICogR2V0cyB0aGUgbGFiZWwgdGV4dCBvZiB0aGUgZWxlbWVudC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG5cdE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50TGFiZWwgPSAoZWxlbWVudCkgPT4ge1xuXHRcdGNvbnN0IGxhYmVsRWxlbWVudCA9IE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50TGFiZWxPYmplY3QoZWxlbWVudCk7XG5cdFx0aWYgKCFsYWJlbEVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0XHRyZXR1cm4gbGFiZWxFbGVtZW50LmZpcnN0Q2hpbGQudGV4dENvbnRlbnQ7XG5cdH07XG5cdC8qKlxuXHQgKiBTZXRzIHRoZSBsYWJlbCBvZiB0aGUgZWxlbWVudCB0byB0aGUgZ2l2ZW4gdGV4dC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxNb3JlYml0cy5xdWlja0Zvcm0uZWxlbWVudCl9IGVsZW1lbnRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsVGV4dFxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBzdWNjZWVkZWQsIGZhbHNlIGlmIHRoZSBsYWJlbCBlbGVtZW50IGlzIHVuYXZhaWxhYmxlLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRMYWJlbCA9IChlbGVtZW50LCBsYWJlbFRleHQpID0+IHtcblx0XHRjb25zdCBsYWJlbEVsZW1lbnQgPSBNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsT2JqZWN0KGVsZW1lbnQpO1xuXHRcdGlmICghbGFiZWxFbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGxhYmVsRWxlbWVudC5maXJzdENoaWxkLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuXHRcdHJldHVybiB0cnVlO1xuXHR9O1xuXHQvKipcblx0ICogU3RvcmVzIHRoZSBlbGVtZW50J3MgY3VycmVudCBsYWJlbCwgYW5kIHRlbXBvcmFyaWx5IHNldHMgdGhlIGxhYmVsIHRvIHRoZSBnaXZlbiB0ZXh0LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fE1vcmViaXRzLnF1aWNrRm9ybS5lbGVtZW50KX0gZWxlbWVudFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGVtcG9yYXJ5TGFiZWxUZXh0XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgc3VjY2VlZGVkLCBgZmFsc2VgIGlmIHRoZSBsYWJlbCBlbGVtZW50IGlzIHVuYXZhaWxhYmxlLlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLm92ZXJyaWRlRWxlbWVudExhYmVsID0gKGVsZW1lbnQsIHRlbXBvcmFyeUxhYmVsVGV4dCkgPT4ge1xuXHRcdGlmICghZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtb2xkbGFiZWwnKSkge1xuXHRcdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb2xkbGFiZWwnLCBNb3JlYml0cy5xdWlja0Zvcm0uZ2V0RWxlbWVudExhYmVsKGVsZW1lbnQpKTtcblx0XHR9XG5cdFx0cmV0dXJuIE1vcmViaXRzLnF1aWNrRm9ybS5zZXRFbGVtZW50TGFiZWwoZWxlbWVudCwgdGVtcG9yYXJ5TGFiZWxUZXh0KTtcblx0fTtcblx0LyoqXG5cdCAqIFJlc3RvcmVzIHRoZSBsYWJlbCBzdG9yZWQgYnkgb3ZlcnJpZGVFbGVtZW50TGFiZWwuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5xdWlja0Zvcm1cblx0ICogQHBhcmFtIHsoSFRNTEVsZW1lbnR8TW9yZWJpdHMucXVpY2tGb3JtLmVsZW1lbnQpfSBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHN1Y2NlZWRlZCwgZmFsc2UgaWYgdGhlIGxhYmVsIGVsZW1lbnQgaXMgdW5hdmFpbGFibGUuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0ucmVzZXRFbGVtZW50TGFiZWwgPSAoZWxlbWVudCkgPT4ge1xuXHRcdGlmIChlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1vbGRsYWJlbCcpKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRMYWJlbChlbGVtZW50LCBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vbGRsYWJlbCcpKTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cdC8qKlxuXHQgKiBTaG93cyBvciBoaWRlcyBhIGZvcm0gZWxlbWVudCBwbHVzIGl0cyBsYWJlbCBhbmQgdG9vbHRpcC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnF1aWNrRm9ybVxuXHQgKiBAcGFyYW0geyhIVE1MRWxlbWVudHxqUXVlcnl8c3RyaW5nKX0gZWxlbWVudCAtIEhUTUwvalF1ZXJ5IGVsZW1lbnQsIG9yIGpRdWVyeSBzZWxlY3RvciBzdHJpbmcuXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Zpc2liaWxpdHldIC0gU2tpcCB0aGlzIHRvIHRvZ2dsZSB2aXNpYmlsaXR5LlxuXHQgKi9cblx0TW9yZWJpdHMucXVpY2tGb3JtLnNldEVsZW1lbnRWaXNpYmlsaXR5ID0gKGVsZW1lbnQsIHZpc2liaWxpdHkpID0+IHtcblx0XHQkKGVsZW1lbnQpLnRvZ2dsZSh2aXNpYmlsaXR5KTtcblx0fTtcblx0LyoqXG5cdCAqIFNob3dzIG9yIGhpZGVzIHRoZSBxdWVzdGlvbiBtYXJrIGljb24gKHdoaWNoIGRpc3BsYXlzIHRoZSB0b29sdGlwKSBuZXh0IHRvIGEgZm9ybSBlbGVtZW50LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMucXVpY2tGb3JtXG5cdCAqIEBwYXJhbSB7KEhUTUxFbGVtZW50fGpRdWVyeSl9IGVsZW1lbnRcblx0ICogQHBhcmFtIHtib29sZWFufSBbdmlzaWJpbGl0eV0gLSBTa2lwIHRoaXMgdG8gdG9nZ2xlIHZpc2liaWxpdHkuXG5cdCAqL1xuXHRNb3JlYml0cy5xdWlja0Zvcm0uc2V0RWxlbWVudFRvb2x0aXBWaXNpYmlsaXR5ID0gKGVsZW1lbnQsIHZpc2liaWxpdHkpID0+IHtcblx0XHQkKE1vcmViaXRzLnF1aWNrRm9ybS5nZXRFbGVtZW50Q29udGFpbmVyKGVsZW1lbnQpKS5maW5kKCcubW9yZWJpdHMtdG9vbHRpcEJ1dHRvbicpLnRvZ2dsZSh2aXNpYmlsaXR5KTtcblx0fTtcblx0LyoqXG5cdCAqIEBleHRlcm5hbCBIVE1MRm9ybUVsZW1lbnRcblx0ICovXG5cdC8qKlxuXHQgKiBHZXQgY2hlY2tlZCBpdGVtcyBpbiB0aGUgZm9ybS5cblx0ICpcblx0ICogQGZ1bmN0aW9uIGV4dGVybmFsOkhUTUxGb3JtRWxlbWVudC5nZXRDaGVja2VkXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gRmluZCBjaGVja2VkIHByb3BlcnR5IG9mIGVsZW1lbnRzIChpLmUuIGEgY2hlY2tib3hcblx0ICogb3IgYSByYWRpb2J1dHRvbikgd2l0aCB0aGUgZ2l2ZW4gbmFtZSwgb3Igc2VsZWN0IG9wdGlvbnMgdGhhdCBoYXZlIHNlbGVjdGVkXG5cdCAqIHNldCB0byB0cnVlIChkb24ndCB0cnkgdG8gbWl4IHNlbGVjdHMgd2l0aCByYWRpby9jaGVja2JveGVzKS5cblx0ICogQHBhcmFtIHtzdHJpbmd9IFt0eXBlXSAtIE9wdGlvbmFsbHkgc3BlY2lmeSBlaXRoZXIgcmFkaW8gb3IgY2hlY2tib3ggKGZvclxuXHQgKiB0aGUgZXZlbnQgdGhhdCBib3RoIGNoZWNrYm94ZXMgYW5kIHJhZGlvYnV0dG9ucyBoYXZlIHRoZSBzYW1lIG5hbWUpLlxuXHQgKiBAcmV0dXJucyB7c3RyaW5nW119IC0gQ29udGFpbnMgdGhlIHZhbHVlcyBvZiBlbGVtZW50cyB3aXRoIHRoZSBnaXZlbiBuYW1lXG5cdCAqIGNoZWNrZWQgcHJvcGVydHkgc2V0IHRvIHRydWUuXG5cdCAqL1xuXHRIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLmdldENoZWNrZWQgPSBmdW5jdGlvbiAobmFtZSwgdHlwZSkge1xuXHRcdGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50c1tuYW1lXTtcblx0XHRpZiAoIWVsZW1lbnRzKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHRcdGNvbnN0IHJldHVybkFycmF5ID0gW107XG5cdFx0bGV0IGk7XG5cdFx0aWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcblx0XHRcdGNvbnN0IHtvcHRpb25zfSA9IGVsZW1lbnRzO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKG9wdGlvbnNbaV0uc2VsZWN0ZWQpIHtcblx0XHRcdFx0XHRpZiAob3B0aW9uc1tpXS52YWx1ZXMpIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBvcHRpb25zW2ldLnZhbHVlcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IG9wdGlvbnNbaV0udmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50cyBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcblx0XHRcdGlmICh0eXBlICYmIGVsZW1lbnRzLnR5cGUgIT09IHR5cGUpIHtcblx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0fSBlbHNlIGlmIChlbGVtZW50cy5jaGVja2VkKSB7XG5cdFx0XHRcdHJldHVybiBbZWxlbWVudHMudmFsdWVdO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKGVsZW1lbnRzW2ldLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRpZiAodHlwZSAmJiBlbGVtZW50c1tpXS50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGVsZW1lbnRzW2ldLnZhbHVlcykge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IGVsZW1lbnRzW2ldLnZhbHVlcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IGVsZW1lbnRzW2ldLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XG5cdH07XG5cdC8qKlxuXHQgKiBEb2VzIHRoZSBzYW1lIGFzIHtAbGluayBIVE1MRm9ybUVsZW1lbnQuZ2V0Q2hlY2tlZHxnZXRDaGVja2VkfSwgYnV0IHdpdGggdW5jaGVja2VkIGVsZW1lbnRzLlxuXHQgKlxuXHQgKiBAZnVuY3Rpb24gZXh0ZXJuYWw6SFRNTEZvcm1FbGVtZW50LmdldFVuY2hlY2tlZFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIEZpbmQgY2hlY2tlZCBwcm9wZXJ0eSBvZiBlbGVtZW50cyAoaS5lLiBhIGNoZWNrYm94XG5cdCAqIG9yIGEgcmFkaW9idXR0b24pIHdpdGggdGhlIGdpdmVuIG5hbWUsIG9yIHNlbGVjdCBvcHRpb25zIHRoYXQgaGF2ZSBzZWxlY3RlZFxuXHQgKiBzZXQgdG8gdHJ1ZSAoZG9uJ3QgdHJ5IHRvIG1peCBzZWxlY3RzIHdpdGggcmFkaW8vY2hlY2tib3hlcykuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZV0gLSBPcHRpb25hbGx5IHNwZWNpZnkgZWl0aGVyIHJhZGlvIG9yIGNoZWNrYm94IChmb3Jcblx0ICogdGhlIGV2ZW50IHRoYXQgYm90aCBjaGVja2JveGVzIGFuZCByYWRpb2J1dHRvbnMgaGF2ZSB0aGUgc2FtZSBuYW1lKS5cblx0ICogQHJldHVybnMge3N0cmluZ1tdfSAtIENvbnRhaW5zIHRoZSB2YWx1ZXMgb2YgZWxlbWVudHMgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuXHQgKiBjaGVja2VkIHByb3BlcnR5IHNldCB0byB0cnVlLlxuXHQgKi9cblx0SFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZS5nZXRVbmNoZWNrZWQgPSBmdW5jdGlvbiAobmFtZSwgdHlwZSkge1xuXHRcdGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50c1tuYW1lXTtcblx0XHRpZiAoIWVsZW1lbnRzKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHRcdGNvbnN0IHJldHVybkFycmF5ID0gW107XG5cdFx0bGV0IGk7XG5cdFx0aWYgKGVsZW1lbnRzIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcblx0XHRcdGNvbnN0IHtvcHRpb25zfSA9IGVsZW1lbnRzO1xuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG9wdGlvbnMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYgKCFvcHRpb25zW2ldLnNlbGVjdGVkKSB7XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnNbaV0udmFsdWVzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm5BcnJheVtyZXR1cm5BcnJheS5sZW5ndGhdID0gb3B0aW9uc1tpXS52YWx1ZXM7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybkFycmF5W3JldHVybkFycmF5Lmxlbmd0aF0gPSBvcHRpb25zW2ldLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoZWxlbWVudHMgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG5cdFx0XHRpZiAodHlwZSAmJiBlbGVtZW50cy50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdH0gZWxzZSBpZiAoIWVsZW1lbnRzLmNoZWNrZWQpIHtcblx0XHRcdFx0cmV0dXJuIFtlbGVtZW50cy52YWx1ZV07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZiAoIWVsZW1lbnRzW2ldLmNoZWNrZWQpIHtcblx0XHRcdFx0XHRpZiAodHlwZSAmJiBlbGVtZW50c1tpXS50eXBlICE9PSB0eXBlKSB7XG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGVsZW1lbnRzW2ldLnZhbHVlcykge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IGVsZW1lbnRzW2ldLnZhbHVlcztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuQXJyYXlbcmV0dXJuQXJyYXkubGVuZ3RoXSA9IGVsZW1lbnRzW2ldLnZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmV0dXJuQXJyYXk7XG5cdH07XG5cdC8qKlxuXHQgKiBVdGlsaXRpZXMgdG8gaGVscCBwcm9jZXNzIElQIGFkZHJlc3Nlcy5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5pcFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLmlwID0ge1xuXHRcdC8qKlxuXHRcdCAqIENvbnZlcnRzIGFuIElQdjYgYWRkcmVzcyB0byB0aGUgY2Fub25pY2FsIGZvcm0gc3RvcmVkIGFuZCB1c2VkIGJ5IE1lZGlhV2lraS5cblx0XHQgKiBKYXZhU2NyaXB0IHRyYW5zbGF0aW9uIG9mIHRoZSB7QGxpbmsgaHR0cHM6Ly9nZXJyaXQud2lraW1lZGlhLm9yZy9yL3BsdWdpbnMvZ2l0aWxlcy9tZWRpYXdpa2kvY29yZS8rLzhlYjZhYzNlODRlYTMzMTJkMzkxY2E5NmMxMmM0OWUzYWQwNzUzYmIvaW5jbHVkZXMvdXRpbHMvSVAucGhwIzEzMXxgSVA6OnNhbml0aXplSVAoKWB9XG5cdFx0ICogZnVuY3Rpb24gZnJvbSB0aGUgSVBVdGlscyBsaWJyYXJ5LiAgQWRkcmVzc2VzIGFyZSB2ZXJib3NlLCB1cHBlcmNhc2UsXG5cdFx0ICogbm9ybWFsaXplZCwgYW5kIGV4cGFuZGVkIHRvIDggd29yZHMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYWRkcmVzcyAtIFRoZSBJUHY2IGFkZHJlc3MsIHdpdGggb3Igd2l0aG91dCBDSURSLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0c2FuaXRpemVJUHY2OiAoYWRkcmVzcykgPT4ge1xuXHRcdFx0YWRkcmVzcyA9IGFkZHJlc3MudHJpbSgpO1xuXHRcdFx0aWYgKGFkZHJlc3MgPT09ICcnKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFtdy51dGlsLmlzSVB2NkFkZHJlc3MoYWRkcmVzcywgdHJ1ZSkpIHtcblx0XHRcdFx0cmV0dXJuIGFkZHJlc3M7IC8vIG5vdGhpbmcgZWxzZSB0byBkbyBmb3IgSVB2NCBhZGRyZXNzZXMgb3IgaW52YWxpZCBvbmVzXG5cdFx0XHR9XG5cdFx0XHQvLyBSZW1vdmUgYW55IHdoaXRlc3BhY2VzLCBjb252ZXJ0IHRvIHVwcGVyIGNhc2Vcblx0XHRcdGFkZHJlc3MgPSBhZGRyZXNzLnRvVXBwZXJDYXNlKCk7XG5cdFx0XHQvLyBFeHBhbmQgemVybyBhYmJyZXZpYXRpb25zXG5cdFx0XHRjb25zdCBhYmJyZXZQb3MgPSBhZGRyZXNzLmluZGV4T2YoJzo6Jyk7XG5cdFx0XHRpZiAoYWJicmV2UG9zID4gLTEpIHtcblx0XHRcdFx0Ly8gV2Uga25vdyB0aGlzIGlzIHZhbGlkIElQdjYuIEZpbmQgdGhlIGxhc3QgaW5kZXggb2YgdGhlXG5cdFx0XHRcdC8vIGFkZHJlc3MgYmVmb3JlIGFueSBDSURSIG51bWJlciAoZS5nLiBcImE6YjpjOjovMjRcIikuXG5cdFx0XHRcdGNvbnN0IENJRFJTdGFydCA9IGFkZHJlc3MuaW5kZXhPZignLycpO1xuXHRcdFx0XHRjb25zdCBhZGRyZXNzRW5kID0gQ0lEUlN0YXJ0ID09PSAtMSA/IGFkZHJlc3MubGVuZ3RoIC0gMSA6IENJRFJTdGFydCAtIDE7XG5cdFx0XHRcdC8vIElmIHRoZSAnOjonIGlzIGF0IHRoZSBiZWdpbm5pbmcuLi5cblx0XHRcdFx0bGV0IHJlcGVhdDtcblx0XHRcdFx0bGV0IGV4dHJhO1xuXHRcdFx0XHRsZXQgcGFkO1xuXHRcdFx0XHRpZiAoYWJicmV2UG9zID09PSAwKSB7XG5cdFx0XHRcdFx0cmVwZWF0ID0gJzA6Jztcblx0XHRcdFx0XHRleHRyYSA9IGFkZHJlc3MgPT09ICc6OicgPyAnMCcgOiAnJzsgLy8gZm9yIHRoZSBhZGRyZXNzICc6Oidcblx0XHRcdFx0XHRwYWQgPSA5OyAvLyA3KzIgKGR1ZSB0byAnOjonKVxuXHRcdFx0XHRcdC8vIElmIHRoZSAnOjonIGlzIGF0IHRoZSBlbmQuLi5cblx0XHRcdFx0fSBlbHNlIGlmIChhYmJyZXZQb3MgPT09IGFkZHJlc3NFbmQgLSAxKSB7XG5cdFx0XHRcdFx0cmVwZWF0ID0gJzowJztcblx0XHRcdFx0XHRleHRyYSA9ICcnO1xuXHRcdFx0XHRcdHBhZCA9IDk7IC8vIDcrMiAoZHVlIHRvICc6OicpXG5cdFx0XHRcdFx0Ly8gSWYgdGhlICc6OicgaXMgaW4gdGhlIG1pZGRsZS4uLlxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlcGVhdCA9ICc6MCc7XG5cdFx0XHRcdFx0ZXh0cmEgPSAnOic7XG5cdFx0XHRcdFx0cGFkID0gODsgLy8gNisyIChkdWUgdG8gJzo6Jylcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGxldCByZXBsYWNlbWVudCA9IHJlcGVhdDtcblx0XHRcdFx0cGFkIC09IGFkZHJlc3Muc3BsaXQoJzonKS5sZW5ndGggLSAxO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHBhZDsgaSsrKSB7XG5cdFx0XHRcdFx0cmVwbGFjZW1lbnQgKz0gcmVwZWF0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJlcGxhY2VtZW50ICs9IGV4dHJhO1xuXHRcdFx0XHRhZGRyZXNzID0gYWRkcmVzcy5yZXBsYWNlKCc6OicsIHJlcGxhY2VtZW50KTtcblx0XHRcdH1cblx0XHRcdC8vIFJlbW92ZSBsZWFkaW5nIHplcm9zIGZyb20gZWFjaCBibG9jIGFzIG5lZWRlZFxuXHRcdFx0cmV0dXJuIGFkZHJlc3MucmVwbGFjZSgvKF58OikwKyhbMC05QS1GYS1mXXsxLDR9KS9nLCAnJDEkMicpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRGV0ZXJtaW5lIGlmIHRoZSBnaXZlbiBJUCBhZGRyZXNzIGlzIGEgcmFuZ2UuICBKdXN0IGNvbmpvaW5zXG5cdFx0ICogYG13LnV0aWwuaXNJUEFkZHJlc3NgIHdpdGggYW5kIHdpdGhvdXQgdGhlIGBhbGxvd0Jsb2NrYCBvcHRpb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaXBcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBUcnVlIGlmIGdpdmVuIGEgdmFsaWQgSVAgYWRkcmVzcyByYW5nZSwgZmFsc2Ugb3RoZXJ3aXNlLlxuXHRcdCAqL1xuXHRcdGlzUmFuZ2U6IChpcCkgPT4ge1xuXHRcdFx0cmV0dXJuIG13LnV0aWwuaXNJUEFkZHJlc3MoaXAsIHRydWUpICYmICFtdy51dGlsLmlzSVBBZGRyZXNzKGlwKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENoZWNrIHRoYXQgYW4gSVAgcmFuZ2UgaXMgd2l0aGluIHRoZSBDSURSIGxpbWl0cy4gIE1vc3QgbGlrZWx5IHRvIGJlIHVzZWZ1bFxuXHRcdCAqIGluIGNvbmp1bmN0aW9uIHdpdGggYHdnUmVsZXZhbnRVc2VyTmFtZWAuICBDSURSIGxpbWl0cyBhcmUgaGFyZGNvZGVkIGFzIC8xNlxuXHRcdCAqIGZvciBJUHY0IGFuZCAvMzIgZm9yIElQdjYuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaXBcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBUcnVlIGZvciB2YWxpZCByYW5nZXMgd2l0aGluIHRoZSBDSURSIGxpbWl0cyxcblx0XHQgKiBvdGhlcndpc2UgZmFsc2UgKHJhbmdlcyBvdXRzaWRlIHRoZSBsaW1pdCwgc2luZ2xlIElQcywgbm9uLUlQcykuXG5cdFx0ICovXG5cdFx0dmFsaWRDSURSOiAoaXApID0+IHtcblx0XHRcdGlmIChNb3JlYml0cy5pcC5pc1JhbmdlKGlwKSkge1xuXHRcdFx0XHRjb25zdCBzdWJuZXQgPSBOdW1iZXIucGFyc2VJbnQoaXAubWF0Y2goL1xcLyhcXGR7MSwzfSkkLylbMV0sIDEwKTtcblx0XHRcdFx0aWYgKHN1Ym5ldCkge1xuXHRcdFx0XHRcdC8vIFNob3VsZCBiZSByZWR1bmRhbnRcblx0XHRcdFx0XHRpZiAobXcudXRpbC5pc0lQdjZBZGRyZXNzKGlwLCB0cnVlKSkge1xuXHRcdFx0XHRcdFx0aWYgKHN1Ym5ldCA+PSAzMikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2UgaWYgKHN1Ym5ldCA+PSAxNikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBHZXQgdGhlIC82NCBzdWJuZXQgZm9yIGFuIElQdjYgYWRkcmVzcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBpcHY2IC0gVGhlIElQdjYgYWRkcmVzcywgd2l0aCBvciB3aXRob3V0IGEgc3VibmV0LlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufHN0cmluZ30gLSBGYWxzZSBpZiBub3QgSVB2NiBvciBiaWdnZXIgdGhhbiBhIDY0LFxuXHRcdCAqIG90aGVyd2lzZSB0aGUgKHNhbml0aXplZCkgLzY0IGFkZHJlc3MuXG5cdFx0ICovXG5cdFx0Z2V0NjQ6IChpcHY2KSA9PiB7XG5cdFx0XHRpZiAoIWlwdjYgfHwgIW13LnV0aWwuaXNJUHY2QWRkcmVzcyhpcHY2LCB0cnVlKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBzdWJuZXRNYXRjaCA9IGlwdjYubWF0Y2goL1xcLyhcXGR7MSwzfSkkLyk7XG5cdFx0XHRpZiAoc3VibmV0TWF0Y2ggJiYgTnVtYmVyLnBhcnNlSW50KHN1Ym5ldE1hdGNoWzFdLCAxMCkgPCA2NCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRpcHY2ID0gTW9yZWJpdHMuaXAuc2FuaXRpemVJUHY2KGlwdjYpO1xuXHRcdFx0Y29uc3QgaXBSZWdleCA9IC9eKCg/OlswLTlBLUZdezEsNH06KXs0fSkoPzpbMC05QS1GXXsxLDR9Oil7M31bMC05QS1GXXsxLDR9KD86XFwvXFxkezEsM30pPyQvO1xuXHRcdFx0cmV0dXJuIGlwdjYucmVwbGFjZShpcFJlZ2V4LCAnJDEnLmNvbmNhdCgnMDowOjA6MC82NCcpKTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogSGVscGVyIGZ1bmN0aW9ucyB0byBtYW5pcHVsYXRlIHN0cmluZ3MuXG5cdCAqXG5cdCAqIEBuYW1lc3BhY2UgTW9yZWJpdHMuc3RyaW5nXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKi9cblx0TW9yZWJpdHMuc3RyaW5nID0ge1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRvVXBwZXJDYXNlRmlyc3RDaGFyOiAoc3RyKSA9PiB7XG5cdFx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcblx0XHRcdHJldHVybiBzdHIuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRvTG93ZXJDYXNlRmlyc3RDaGFyOiAoc3RyKSA9PiB7XG5cdFx0XHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcblx0XHRcdHJldHVybiBzdHIuc2xpY2UoMCwgMSkudG9Mb3dlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEdpdmVzIGFuIGFycmF5IG9mIHN1YnN0cmluZ3Mgb2YgYHN0cmAgLSBzdGFydGluZyB3aXRoIGBzdGFydGAgYW5kXG5cdFx0ICogZW5kaW5nIHdpdGggYGVuZGAgLSB3aGljaCBpcyBub3QgaW4gYHNraXBsaXN0YC4gIEludGVuZGVkIGZvciB1c2Vcblx0XHQgKiBvbiB3aWtpdGV4dCB3aXRoIHRlbXBsYXRlcyBvciBsaW5rcy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhcnRcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gZW5kXG5cdFx0ICogQHBhcmFtIHsoc3RyaW5nW118c3RyaW5nKX0gW3NraXBsaXN0XVxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmdbXX1cblx0XHQgKiBAdGhyb3dzIElmIHRoZSBgc3RhcnRgIGFuZCBgZW5kYCBzdHJpbmdzIGFyZW4ndCBvZiB0aGUgc2FtZSBsZW5ndGguXG5cdFx0ICogQHRocm93cyBJZiBgc2tpcGxpc3RgIGlzbid0IGFuIGFycmF5IG9yIHN0cmluZ1xuXHRcdCAqL1xuXHRcdHNwbGl0V2VpZ2h0ZWRCeUtleXM6IChzdHIsIHN0YXJ0LCBlbmQsIHNraXBsaXN0KSA9PiB7XG5cdFx0XHRpZiAoc3RhcnQubGVuZ3RoICE9PSBlbmQubGVuZ3RoKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignc3RhcnQgbWFya2VyIGFuZCBlbmQgbWFya2VyIG11c3QgYmUgb2YgdGhlIHNhbWUgbGVuZ3RoJyk7XG5cdFx0XHR9XG5cdFx0XHRsZXQgbGV2ZWwgPSAwO1xuXHRcdFx0bGV0IGluaXRpYWwgPSBudWxsO1xuXHRcdFx0Y29uc3QgcmVzdWx0ID0gW107XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoc2tpcGxpc3QpKSB7XG5cdFx0XHRcdGlmIChza2lwbGlzdCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0c2tpcGxpc3QgPSBbXTtcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygc2tpcGxpc3QgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0c2tpcGxpc3QgPSBbc2tpcGxpc3RdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ25vbi1hcHBsaWNhYmxlIHNraXBsaXN0IHBhcmFtZXRlcicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVsZW1lbnQgb2Ygc2tpcGxpc3QpIHtcblx0XHRcdFx0XHRpZiAoc3RyLnNsaWNlKGksIGkgKyBlbGVtZW50Lmxlbmd0aCkgPT09IGVsZW1lbnQpIHtcblx0XHRcdFx0XHRcdGkgKz0gZWxlbWVudC5sZW5ndGggLSAxO1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdHIuc2xpY2UoaSwgaSArIHN0YXJ0Lmxlbmd0aCkgPT09IHN0YXJ0KSB7XG5cdFx0XHRcdFx0aWYgKGluaXRpYWwgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGluaXRpYWwgPSBpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQrK2xldmVsO1xuXHRcdFx0XHRcdGkgKz0gc3RhcnQubGVuZ3RoIC0gMTtcblx0XHRcdFx0fSBlbHNlIGlmIChzdHIuc2xpY2UoaSwgaSArIGVuZC5sZW5ndGgpID09PSBlbmQpIHtcblx0XHRcdFx0XHQtLWxldmVsO1xuXHRcdFx0XHRcdGkgKz0gZW5kLmxlbmd0aCAtIDE7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFsZXZlbCAmJiBpbml0aWFsICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gc3RyLnNsaWNlKGluaXRpYWwsIGkgKyAxKTtcblx0XHRcdFx0XHRpbml0aWFsID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEZvcm1hdHMgZnJlZWZvcm0gXCJyZWFzb25cIiAoZnJvbSBhIHRleHRhcmVhKSBmb3IgZGVsZXRpb24vb3RoZXJcblx0XHQgKiB0ZW1wbGF0ZXMgdGhhdCBhcmUgZ29pbmcgdG8gYmUgc3Vic3RpdHV0ZWQsIChlLmcuIFBST0QsIFhGRCwgUlBQKS5cblx0XHQgKiBIYW5kbGVzIGB8YCBvdXRzaWRlIGEgbm93aWtpIHRhZy5cblx0XHQgKiBPcHRpb25hbGx5LCBhbHNvIGFkZHMgYSBzaWduYXR1cmUgaWYgbm90IHByZXNlbnQgYWxyZWFkeS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFthZGRTaWddXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRmb3JtYXRSZWFzb25UZXh0OiAoc3RyLCBhZGRTaWcpID0+IHtcblx0XHRcdGxldCByZWFzb24gPSAoc3RyIHx8ICcnKS50b1N0cmluZygpLnRyaW0oKTtcblx0XHRcdGNvbnN0IHVuYmluZGVyID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKHJlYXNvbik7XG5cdFx0XHR1bmJpbmRlci51bmJpbmQoJzxubycuY29uY2F0KCd3aWtpJywgJz4nKSwgJzwvbm8nLmNvbmNhdCgnd2lraScsICc+JykpO1xuXHRcdFx0dW5iaW5kZXIuY29udGVudCA9IHVuYmluZGVyLmNvbnRlbnQucmVwbGFjZSgvXFx8L2csICd7eycuY29uY2F0KCdzdWJzdDonLCAnIX19JykpO1xuXHRcdFx0cmVhc29uID0gdW5iaW5kZXIucmViaW5kKCk7XG5cdFx0XHRpZiAoYWRkU2lnKSB7XG5cdFx0XHRcdGNvbnN0IHNpZyA9ICd+ficuY29uY2F0KCd+ficpO1xuXHRcdFx0XHRjb25zdCBzaWdJbmRleCA9IHJlYXNvbi5sYXN0SW5kZXhPZihzaWcpO1xuXHRcdFx0XHRpZiAoc2lnSW5kZXggPT09IC0xIHx8IHNpZ0luZGV4ICE9PSByZWFzb24ubGVuZ3RoIC0gc2lnLmxlbmd0aCkge1xuXHRcdFx0XHRcdHJlYXNvbiArPSBgICR7c2lnfWA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiByZWFzb24udHJpbSgpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRm9ybWF0cyBhIFwicmVhc29uXCIgKGZyb20gYSB0ZXh0YXJlYSkgZm9yIGluY2x1c2lvbiBpbiBhIHVzZXJzcGFjZVxuXHRcdCAqIGxvZy4gIFJlcGxhY2VzIG5ld2xpbmVzIHdpdGgge3tQYn19LCBhbmQgYWRkcyBhbiBleHRyYSBgI2AgYmVmb3JlXG5cdFx0ICogbGlzdCBpdGVtcyBmb3IgcHJvcGVyIGZvcm1hdHRpbmcuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyXG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRmb3JtYXRSZWFzb25Gb3JMb2c6IChzdHIpID0+IHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdHN0clxuXHRcdFx0XHRcdC8vIGhhbmRsZSBsaW5lIGJyZWFrcywgd2hpY2ggb3RoZXJ3aXNlIGJyZWFrIG51bWJlcmluZ1xuXHRcdFx0XHRcdC5yZXBsYWNlKC9cXG4rL2csICd7e3BifX0nKVxuXHRcdFx0XHRcdC8vIHB1dCBhbiBleHRyYSAjIGluIGZyb250IGJlZm9yZSBidWxsZXRlZCBvciBudW1iZXJlZCBsaXN0IGl0ZW1zXG5cdFx0XHRcdFx0LnJlcGxhY2UoL14oIyspL2dtLCAnIyQxJylcblx0XHRcdFx0XHQucmVwbGFjZSgvXihcXCorKS9nbSwgJyMkMScpXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogTGlrZSBgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKClgLCBidXQgZXNjYXBlcyBhbnkgZG9sbGFyIHNpZ25zIGluXG5cdFx0ICogdGhlIHJlcGxhY2VtZW50IHN0cmluZy4gIFVzZWZ1bCB3aGVuIHRoZSB0aGUgcmVwbGFjZW1lbnQgc3RyaW5nIGlzXG5cdFx0ICogYXJiaXRyYXJ5LCBzdWNoIGFzIGEgdXNlcm5hbWUgb3IgZnJlZWZvcm0gdXNlciBpbnB1dCwgYW5kIGNvdWxkXG5cdFx0ICogY29udGFpbiBkb2xsYXIgc2lnbnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gVGV4dCBpbiB3aGljaCB0byByZXBsYWNlLlxuXHRcdCAqIEBwYXJhbSB7KHN0cmluZ3xSZWdFeHApfSBwYXR0ZXJuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHJlcGxhY2VtZW50XG5cdFx0ICogQHJldHVybnMge3N0cmluZ31cblx0XHQgKi9cblx0XHRzYWZlUmVwbGFjZTogKHN0cmluZywgcGF0dGVybiwgcmVwbGFjZW1lbnQpID0+IHtcblx0XHRcdHJldHVybiBzdHJpbmcucmVwbGFjZShwYXR0ZXJuLCByZXBsYWNlbWVudC5yZXBsYWNlKC9cXCQvZywgJyQkJCQnKSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBEZXRlcm1pbmUgaWYgdGhlIHVzZXItcHJvdmlkZWQgZXhwaXJhdGlvbiB3aWxsIGJlIGNvbnNpZGVyZWQgYW5cblx0XHQgKiBpbmZpbml0ZS1sZW5ndGggYnkgTVcuXG5cdFx0ICpcblx0XHQgKiBAc2VlIHtAbGluayBodHRwczovL3BoYWJyaWNhdG9yLndpa2ltZWRpYS5vcmcvVDY4NjQ2fVxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGV4cGlyeVxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGlzSW5maW5pdHk6IChleHBpcnkpID0+IHtcblx0XHRcdHJldHVybiBbJ2luZGVmaW5pdGUnLCAnaW5maW5pdHknLCAnaW5maW5pdGUnLCAnbmV2ZXInXS5pbmNsdWRlcyhleHBpcnkpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRXNjYXBlcyBhIHN0cmluZyB0byBiZSB1c2VkIGluIGEgUmVnRXhwLCByZXBsYWNpbmcgc3BhY2VzIGFuZFxuXHRcdCAqIHVuZGVyc2NvcmVzIHdpdGggYFtfIF1gIGFzIHRoZXkgYXJlIG9mdGVuIGVxdWl2YWxlbnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIFN0cmluZyB0byBiZSBlc2NhcGVkLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IC0gVGhlIGVzY2FwZWQgdGV4dC5cblx0XHQgKi9cblx0XHRlc2NhcGVSZWdFeHA6ICh0ZXh0KSA9PiB7XG5cdFx0XHRyZXR1cm4gbXcudXRpbC5lc2NhcGVSZWdFeHAodGV4dCkucmVwbGFjZSgvIHxfL2csICdbXyBdJyk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBmb3JtYXRUaW1lXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyp9IHRpbWUgVGhlIHN0cmluZyB0byBmb3JhbXRcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdGZvcm1hdFRpbWU6ICh0aW1lKSA9PiB7XG5cdFx0XHRsZXQgbTtcblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKnNlYyhvbmQpP3M/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIGAke21bMV1956eSYDtcblx0XHRcdH1cblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKm1pbih1dGUpP3M/XFxzKiQvKSkgIT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIGAke21bMV195YiGYDtcblx0XHRcdH1cblx0XHRcdGlmICgobSA9IHRpbWUubWF0Y2goL15cXHMqKFxcZCspXFxzKmhvdXJzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBtWzFdICsgd2luZG93LndnVUxTKCflsI/ml7YnLCAn5bCP5pmCJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccypkYXlzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBgJHttWzFdfeWkqWA7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccyp3ZWVrcz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gbVsxXSArIHdpbmRvdy53Z1VMUygn5ZGoJywgJ+mAsScpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKChtID0gdGltZS5tYXRjaCgvXlxccyooXFxkKylcXHMqbW9udGhzP1xccyokLykpICE9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBtWzFdICsgd2luZG93LndnVUxTKCfkuKrmnIgnLCAn5YCL5pyIJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKG0gPSB0aW1lLm1hdGNoKC9eXFxzKihcXGQrKVxccyp5ZWFycz9cXHMqJC8pKSAhPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7bVsxXX3lubRgO1xuXHRcdFx0fVxuXHRcdFx0aWYgKE1vcmViaXRzLnN0cmluZy5pc0luZmluaXR5KHRpbWUudHJpbSgpKSkge1xuXHRcdFx0XHRyZXR1cm4gd2luZG93LndnVUxTKCfml6DpmZDmnJ8nLCAn54Sh6ZmQ5pyfJyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGltZTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEFwcGVuZCBwdW5jdHVhdGlvbiB0byBhIHN0cmluZyB3aGVuIGl0J3MgbWlzc2luZ1xuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHN0clxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBwdW5jdHVhdGlvblxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0YXBwZW5kUHVuY3R1YXRpb246IChzdHIsIHB1bmN0dWF0aW9uKSA9PiB7XG5cdFx0XHRpZiAocHVuY3R1YXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRwdW5jdHVhdGlvbiA9ICfjgIInO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHN0ci5zZWFyY2goL1suPyE744CC77yf77yB77ybXSQvKSA9PT0gLTEpIHtcblx0XHRcdFx0c3RyICs9IHB1bmN0dWF0aW9uO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHN0cjtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogSGVscGVyIGZ1bmN0aW9ucyB0byBtYW5pcHVsYXRlIGFycmF5cy5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5hcnJheVxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLmFycmF5ID0ge1xuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBkdXBsaWNhdGVkIGl0ZW1zIGZyb20gYW4gYXJyYXkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBhcnJcblx0XHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgY29weSBvZiB0aGUgYXJyYXkgd2l0aCBkdXBsaWNhdGVzIHJlbW92ZWQuXG5cdFx0ICogQHRocm93cyBXaGVuIHByb3ZpZGVkIGEgbm9uLWFycmF5LlxuXHRcdCAqL1xuXHRcdHVuaXE6IChhcnIpID0+IHtcblx0XHRcdGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Egbm9uLWFycmF5IG9iamVjdCBwYXNzZWQgdG8gTW9yZWJpdHMuYXJyYXkudW5pcScpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGFyci5maWx0ZXIoKGl0ZW0sIGlkeCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gYXJyLmluZGV4T2YoaXRlbSkgPT09IGlkeDtcblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIG5vbi1kdXBsaWNhdGVkIGl0ZW1zIGZyb20gYW4gYXJyYXkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBhcnJcblx0XHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgY29weSBvZiB0aGUgYXJyYXkgd2l0aCB0aGUgZmlyc3QgaW5zdGFuY2Ugb2YgZWFjaCB2YWx1ZVxuXHRcdCAqIHJlbW92ZWQ7IHN1YnNlcXVlbnQgaW5zdGFuY2VzIG9mIHRob3NlIHZhbHVlcyAoZHVwbGljYXRlcykgcmVtYWluLlxuXHRcdCAqIEB0aHJvd3MgV2hlbiBwcm92aWRlZCBhIG5vbi1hcnJheS5cblx0XHQgKi9cblx0XHRkdXBzOiAoYXJyKSA9PiB7XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdBIG5vbi1hcnJheSBvYmplY3QgcGFzc2VkIHRvIE1vcmViaXRzLmFycmF5LmR1cHMnKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBhcnIuZmlsdGVyKChpdGVtLCBpZHgpID0+IHtcblx0XHRcdFx0cmV0dXJuIGFyci5pbmRleE9mKGl0ZW0pICE9PSBpZHg7XG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEJyZWFrIHVwIGFuIGFycmF5IGludG8gc21hbGxlciBhcnJheXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBhcnJcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gc2l6ZSAtIFNpemUgb2YgZWFjaCBjaHVuayAoZXhjZXB0IHRoZSBsYXN0LCB3aGljaCBjb3VsZCBiZSBkaWZmZXJlbnQpLlxuXHRcdCAqIEByZXR1cm5zIHtBcnJheVtdfSBBbiBhcnJheSBjb250YWluaW5nIHRoZSBzbWFsbGVyLCBjaHVua2VkIGFycmF5cy5cblx0XHQgKiBAdGhyb3dzIFdoZW4gcHJvdmlkZWQgYSBub24tYXJyYXkuXG5cdFx0ICovXG5cdFx0Y2h1bms6IChhcnIsIHNpemUpID0+IHtcblx0XHRcdGlmICghQXJyYXkuaXNBcnJheShhcnIpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0Egbm9uLWFycmF5IG9iamVjdCBwYXNzZWQgdG8gTW9yZWJpdHMuYXJyYXkuY2h1bmsnKTtcblx0XHRcdH1cblx0XHRcdGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicgfHwgc2l6ZSA8PSAwKSB7XG5cdFx0XHRcdC8vIHByZXR0eSBpbXBvc3NpYmxlIHRvIGRvIGFueXRoaW5nIDopXG5cdFx0XHRcdHJldHVybiBbYXJyXTsgLy8gd2UgcmV0dXJuIGFuIGFycmF5IGNvbnNpc3Rpbmcgb2YgdGhpcyBhcnJheS5cblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgbnVtQ2h1bmtzID0gTWF0aC5jZWlsKGFyci5sZW5ndGggLyBzaXplKTtcblx0XHRcdGNvbnN0IHJlc3VsdCA9IEFycmF5LmZyb20oe1xuXHRcdFx0XHRsZW5ndGg6IG51bUNodW5rcyxcblx0XHRcdH0pO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBudW1DaHVua3M7IGkrKykge1xuXHRcdFx0XHRyZXN1bHRbaV0gPSBhcnIuc2xpY2UoaSAqIHNpemUsIChpICsgMSkgKiBzaXplKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIFV0aWxpdGllcyB0byBlbmhhbmNlIHNlbGVjdDIgbWVudXMuIFNlZSB0d2lua2xld2FybiwgdHdpbmtsZWJsb2NrXG5cdCAqIGZvciBzYW1wbGUgdXNhZ2VzLlxuXHQgKlxuXHQgKiBAc2VlIHtAbGluayBodHRwczovL3NlbGVjdDIub3JnL31cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy5zZWxlY3QyXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAcmVxdWlyZXMganF1ZXJ5LnNlbGVjdDJcblx0ICovXG5cdE1vcmViaXRzLnNlbGVjdDIgPSB7XG5cdFx0bWF0Y2hlcnM6IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogQ3VzdG9tIG1hdGNoZXIgaW4gd2hpY2ggaWYgdGhlIG9wdGdyb3VwIG5hbWUgbWF0Y2hlcywgYWxsIG9wdGlvbnMgaW4gdGhhdFxuXHRcdFx0ICogZ3JvdXAgYXJlIHNob3duLCBsaWtlIGluIGpxdWVyeS5jaG9zZW4uXG5cdFx0XHQgKlxuXHRcdFx0ICogQHBhcmFtIHsqfSBwYXJhbXNcblx0XHRcdCAqIEBwYXJhbSB7Kn0gZGF0YVxuXHRcdFx0ICovXG5cdFx0XHRvcHRncm91cEZ1bGw6IChwYXJhbXMsIGRhdGEpID0+IHtcblx0XHRcdFx0Y29uc3Qgb3JpZ2luYWxNYXRjaGVyID0gJC5mbi5zZWxlY3QyLmRlZmF1bHRzLmRlZmF1bHRzLm1hdGNoZXI7XG5cdFx0XHRcdGNvbnN0IHJlc3VsdCA9IG9yaWdpbmFsTWF0Y2hlcihwYXJhbXMsIGRhdGEpO1xuXHRcdFx0XHRpZiAocmVzdWx0ICYmIHBhcmFtcy50ZXJtICYmIGRhdGEudGV4dC50b1VwcGVyQ2FzZSgpLmluY2x1ZGVzKHBhcmFtcy50ZXJtLnRvVXBwZXJDYXNlKCkpKSB7XG5cdFx0XHRcdFx0cmVzdWx0LmNoaWxkcmVuID0gZGF0YS5jaGlsZHJlbjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICogQ3VzdG9tIG1hdGNoZXIgdGhhdCBtYXRjaGVzIGZyb20gdGhlIGJlZ2lubmluZyBvZiB3b3JkcyBvbmx5LlxuXHRcdFx0ICpcblx0XHRcdCAqIEBwYXJhbSB7Kn0gcGFyYW1zXG5cdFx0XHQgKiBAcGFyYW0geyp9IGRhdGFcblx0XHRcdCAqL1xuXHRcdFx0d29yZEJlZ2lubmluZzogKHBhcmFtcywgZGF0YSkgPT4ge1xuXHRcdFx0XHRjb25zdCBvcmlnaW5hbE1hdGNoZXIgPSAkLmZuLnNlbGVjdDIuZGVmYXVsdHMuZGVmYXVsdHMubWF0Y2hlcjtcblx0XHRcdFx0Y29uc3QgcmVzdWx0ID0gb3JpZ2luYWxNYXRjaGVyKHBhcmFtcywgZGF0YSk7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHQhcGFyYW1zLnRlcm0gfHxcblx0XHRcdFx0XHQocmVzdWx0ICYmIG5ldyBSZWdFeHAoYFxcXFxiJHttdy51dGlsLmVzY2FwZVJlZ0V4cChwYXJhbXMudGVybSl9YCwgJ2knKS50ZXN0KHJlc3VsdC50ZXh0KSlcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH0sXG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBVbmRlcmxpbmUgbWF0Y2hlZCBwYXJ0IG9mIG9wdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyp9IGRhdGFcblx0XHQgKi9cblx0XHRoaWdobGlnaHRTZWFyY2hNYXRjaGVzOiAoZGF0YSkgPT4ge1xuXHRcdFx0Y29uc3Qgc2VhcmNoVGVybSA9IE1vcmViaXRzLnNlbGVjdDJTZWFyY2hRdWVyeTtcblx0XHRcdGlmICghc2VhcmNoVGVybSB8fCBkYXRhLmxvYWRpbmcpIHtcblx0XHRcdFx0cmV0dXJuIGRhdGEudGV4dDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGlkeCA9IGRhdGEudGV4dC50b1VwcGVyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVGVybS50b1VwcGVyQ2FzZSgpKTtcblx0XHRcdGlmIChpZHggPCAwKSB7XG5cdFx0XHRcdHJldHVybiBkYXRhLnRleHQ7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJCgnPHNwYW4+JykuYXBwZW5kKFxuXHRcdFx0XHRkYXRhLnRleHQuc2xpY2UoMCwgaWR4KSxcblx0XHRcdFx0JCgnPHNwYW4+Jylcblx0XHRcdFx0XHQuY3NzKCd0ZXh0LWRlY29yYXRpb24nLCAndW5kZXJsaW5lJylcblx0XHRcdFx0XHQudGV4dChkYXRhLnRleHQuc2xpY2UoaWR4LCBpZHggKyBzZWFyY2hUZXJtLmxlbmd0aCkpLFxuXHRcdFx0XHRkYXRhLnRleHQuc2xpY2UoaWR4ICsgc2VhcmNoVGVybS5sZW5ndGgpXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogSW50ZXJjZXB0IHF1ZXJ5IGFzIGl0IGlzIGhhcHBlbmluZywgZm9yIHVzZSBpbiBoaWdobGlnaHRTZWFyY2hNYXRjaGVzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsqfSBwYXJhbXNcblx0XHQgKi9cblx0XHRxdWVyeUludGVyY2VwdG9yOiAocGFyYW1zKSA9PiB7XG5cdFx0XHRNb3JlYml0cy5zZWxlY3QyU2VhcmNoUXVlcnkgPSBwYXJhbXMgJiYgcGFyYW1zLnRlcm07XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBPcGVuIGRyb3Bkb3duIGFuZCBiZWdpbiBzZWFyY2ggd2hlbiB0aGUgYC5zZWxlY3QyLXNlbGVjdGlvbmAgaGFzXG5cdFx0ICogZm9jdXMgYW5kIGEga2V5IGlzIHByZXNzZWQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2XG5cdFx0ICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3NlbGVjdDIvc2VsZWN0Mi9pc3N1ZXMvMzI3OSNpc3N1ZWNvbW1lbnQtNDQyNTI0MTQ3fVxuXHRcdCAqL1xuXHRcdGF1dG9TdGFydDogKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYud2hpY2ggPCA0OCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRsZXQgdGFyZ2V0ID0gJChldi50YXJnZXQpLmNsb3Nlc3QoJy5zZWxlY3QyLWNvbnRhaW5lcicpO1xuXHRcdFx0aWYgKCF0YXJnZXQubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHRhcmdldCA9IHRhcmdldC5wcmV2KCk7XG5cdFx0XHR0YXJnZXQuc2VsZWN0Mignb3BlbicpO1xuXHRcdFx0Y29uc3Qgc2VhcmNoID0gdGFyZ2V0LmRhdGEoJ3NlbGVjdDInKS5kcm9wZG93bi4kc2VhcmNoIHx8IHRhcmdldC5kYXRhKCdzZWxlY3QyJykuc2VsZWN0aW9uLiRzZWFyY2g7XG5cdFx0XHQvLyBVc2UgRE9NIC5mb2N1cygpIHRvIHdvcmsgYXJvdW5kIGEgalF1ZXJ5IDMuNi4wIHJlZ3Jlc3Npb24gKGh0dHBzOi8vZ2l0aHViLmNvbS9zZWxlY3QyL3NlbGVjdDIvaXNzdWVzLzU5OTMpXG5cdFx0XHRzZWFyY2hbMF0uZm9jdXMoKTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogVGVtcG9yYXJpbHkgaGlkZSBhIHBhcnQgb2YgYSBzdHJpbmcgd2hpbGUgcHJvY2Vzc2luZyB0aGUgcmVzdCBvZiBpdC5cblx0ICogVXNlZCBieSB7QGxpbmsgTW9yZWJpdHMud2lraXRleHQucGFnZSNjb21tZW50T3V0SW1hZ2V8TW9yZWJpdHMud2lraXRleHQucGFnZS5jb21tZW50T3V0SW1hZ2V9LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBUaGUgaW5pdGlhbCB0ZXh0IHRvIHByb2Nlc3MuXG5cdCAqIEBleGFtcGxlIGNvbnN0IHUgPSBuZXcgTW9yZWJpdHMudW5iaW5kZXIoJ0hlbGxvIHdvcmxkIDwhLS0gd29ybGQgLS0+IHdvcmxkJyk7XG5cdCAqIHUudW5iaW5kKCc8IS0tJywgJy0tPicpOyAvLyB0ZXh0IGluc2lkZSBjb21tZW50IHJlbWFpbnMgaW50YWN0XG5cdCAqIHUuY29udGVudCA9IHUuY29udGVudC5yZXBsYWNlKC93b3JsZC9nLCAnZWFydGgnKTtcblx0ICogdS5yZWJpbmQoKTsgLy8gZ2l2ZXMgJ0hlbGxvIGVhcnRoIDwhLS0gd29ybGQgLS0+IGVhcnRoJ1xuXHQgKi9cblx0TW9yZWJpdHMudW5iaW5kZXIgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdFx0aWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdub3QgYSBzdHJpbmcnKTtcblx0XHR9XG5cdFx0LyoqIFRoZSB0ZXh0IGJlaW5nIHByb2Nlc3NlZC4gKi9cblx0XHR0aGlzLmNvbnRlbnQgPSBzdHJpbmc7XG5cdFx0dGhpcy5jb3VudGVyID0gMDtcblx0XHR0aGlzLmhpc3RvcnkgPSB7fTtcblx0XHR0aGlzLnByZWZpeCA9IGAlVU5JUTo6JHtNYXRoLnJhbmRvbSgpfTo6YDtcblx0XHR0aGlzLnBvc3RmaXggPSAnOjpVTklRJSc7XG5cdH07XG5cdE1vcmViaXRzLnVuYmluZGVyLnByb3RvdHlwZSA9IHtcblx0XHQvKipcblx0XHQgKiBIaWRlIHRoZSByZWdpb24gZW5jYXBzdWxhdGVkIGJ5IHRoZSBgcHJlZml4YCBhbmQgYHBvc3RmaXhgIGZyb21cblx0XHQgKiBzdHJpbmcgcHJvY2Vzc2luZy4gIGBwcmVmaXhgIGFuZCBgcG9zdGZpeGAgd2lsbCBiZSB1c2VkIGluIGFcblx0XHQgKiBSZWdFeHAsIHNvIGl0ZW1zIHRoYXQgbmVlZCBlc2NhcGluZyBzaG91bGQgYmUgdXNlIGBcXFxcYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gcG9zdGZpeFxuXHRcdCAqIEB0aHJvd3MgSWYgZWl0aGVyIGBwcmVmaXhgIG9yIGBwb3N0Zml4YCBpcyBtaXNzaW5nLlxuXHRcdCAqL1xuXHRcdHVuYmluZChwcmVmaXgsIHBvc3RmaXgpIHtcblx0XHRcdGlmICghcHJlZml4IHx8ICFwb3N0Zml4KSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignQm90aCBwcmVmaXggYW5kIHBvc3RmaXggbXVzdCBiZSBwcm92aWRlZCcpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmUgPSBuZXcgUmVnRXhwKGAke3ByZWZpeH0oW1xcXFxzXFxcXFNdKj8pJHtwb3N0Zml4fWAsICdnJyk7XG5cdFx0XHR0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQucmVwbGFjZShyZSwgTW9yZWJpdHMudW5iaW5kZXIuZ2V0Q2FsbGJhY2sodGhpcykpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogUmVzdG9yZSB0aGUgaGlkZGVuIHBvcnRpb24gb2YgdGhlIGBjb250ZW50YCBzdHJpbmcuXG5cdFx0ICpcblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcHJvY2Vzc2VkIG91dHB1dC5cblx0XHQgKi9cblx0XHRyZWJpbmQoKSB7XG5cdFx0XHRsZXQge2NvbnRlbnR9ID0gdGhpcztcblx0XHRcdGZvciAoY29uc3QgY3VycmVudCBpbiB0aGlzLmhpc3RvcnkpIHtcblx0XHRcdFx0aWYgKCFPYmplY3QuaGFzT3duKHRoaXMuaGlzdG9yeSwgY3VycmVudCkpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250ZW50ID0gY29udGVudC5yZXBsYWNlKGN1cnJlbnQsIHRoaXMuaGlzdG9yeVtjdXJyZW50XSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHR9LFxuXHRcdHByZWZpeDogbnVsbCxcblx0XHQvLyAlVU5JUTo6MC41OTU1OTgxNjQ0OTM4MzI0Ojpcblx0XHRwb3N0Zml4OiBudWxsLFxuXHRcdC8vIDo6VU5JUSVcblx0XHRjb250ZW50OiBudWxsLFxuXHRcdC8vIHN0cmluZ1xuXHRcdGNvdW50ZXI6IG51bGwsXG5cdFx0Ly8gMCsrXG5cdFx0aGlzdG9yeTogbnVsbCwgLy8ge31cblx0fTtcblx0LyoqXG5cdCAqIEBwYXJhbSB7dHlwZW9mIE1vcmViaXRzfSBzZWxmXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy51bmJpbmRlclxuXHQgKi9cblx0TW9yZWJpdHMudW5iaW5kZXIuZ2V0Q2FsbGJhY2sgPSAoc2VsZikgPT4ge1xuXHRcdHJldHVybiAobWF0Y2gpID0+IHtcblx0XHRcdGNvbnN0IGN1cnJlbnQgPSBzZWxmLnByZWZpeCArIHNlbGYuY291bnRlciArIHNlbGYucG9zdGZpeDtcblx0XHRcdHNlbGYuaGlzdG9yeVtjdXJyZW50XSA9IG1hdGNoO1xuXHRcdFx0KytzZWxmLmNvdW50ZXI7XG5cdFx0XHRyZXR1cm4gY3VycmVudDtcblx0XHR9O1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLmRhdGUgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQ3JlYXRlIGEgZGF0ZSBvYmplY3Qgd2l0aCBlbmhhbmNlZCBwcm9jZXNzaW5nIGNhcGFiaWxpdGllcywgYSBsYVxuXHQgKiB7QGxpbmsgaHR0cHM6Ly9tb21lbnRqcy5jb20vfG1vbWVudC5qc30uIE1lZGlhV2lraSB0aW1lc3RhbXAgZm9ybWF0IGlzIGFsc29cblx0ICogYWNjZXB0YWJsZSwgaW4gYWRkaXRpb24gdG8gZXZlcnl0aGluZyB0aGF0IEpTIERhdGUoKSBhY2NlcHRzLlxuXHQgKlxuXHQgKiBAcGFyYW0gey4uLmFueX0gYXJnc1xuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqL1xuXHRNb3JlYml0cy5kYXRlID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcblx0XHQvLyBDaGVjayBNZWRpYVdpa2kgZm9ybWF0c1xuXHRcdC8vIE11c3QgYmUgZmlyc3Qgc2luY2UgZmlyZWZveCBlcnJvbmVvdXNseSBhY2NlcHRzIHRoZSB0aW1lc3RhbXBcblx0XHQvLyBmb3JtYXQsIHNhbnMgdGltZXpvbmUgKFNlZSBhbHNvOiAjOTIxLCAjOTM2LCAjMTE3NCwgIzExODcpLCBhbmQgdGhlXG5cdFx0Ly8gMTQtZGlnaXQgc3RyaW5nIHdpbGwgYmUgaW50ZXJwcmV0ZWQgZGlmZmVyZW50bHkuXG5cdFx0aWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRjb25zdCBbcGFyYW1dID0gYXJncztcblx0XHRcdGlmICgvXlxcZHsxNH0kLy50ZXN0KHBhcmFtKSkge1xuXHRcdFx0XHQvLyBZWVlZTU1EREhIbW1zc1xuXHRcdFx0XHRjb25zdCBkaWdpdE1hdGNoID0gLyhcXGR7NH0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KS8uZXhlYyhwYXJhbSk7XG5cdFx0XHRcdGlmIChkaWdpdE1hdGNoKSB7XG5cdFx0XHRcdFx0Ly8gLi4uLi4geWVhciAuLi4gbW9udGggLi4gZGF0ZSAuLi4gaG91ciAuLi4uIG1pbnV0ZSAuLi4uLiBzZWNvbmRcblx0XHRcdFx0XHR0aGlzLl9kID0gbmV3IERhdGUoXG5cdFx0XHRcdFx0XHRSZWZsZWN0LmFwcGx5KERhdGUuVVRDLCBudWxsLCBbXG5cdFx0XHRcdFx0XHRcdGRpZ2l0TWF0Y2hbMV0sXG5cdFx0XHRcdFx0XHRcdGRpZ2l0TWF0Y2hbMl0gLSAxLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzNdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzRdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzVdLFxuXHRcdFx0XHRcdFx0XHRkaWdpdE1hdGNoWzZdLFxuXHRcdFx0XHRcdFx0XSlcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Ly8gV2lraXRleHQgc2lnbmF0dXJlIHRpbWVzdGFtcFxuXHRcdFx0XHRjb25zdCBkYXRlUGFydHMgPSBNb3JlYml0cy5sMTBuLnNpZ25hdHVyZVRpbWVzdGFtcEZvcm1hdChwYXJhbSk7XG5cdFx0XHRcdGlmIChkYXRlUGFydHMpIHtcblx0XHRcdFx0XHR0aGlzLl9kID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkobnVsbCwgZGF0ZVBhcnRzKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gVHJ5IHN0YW5kYXJkIGRhdGVcblx0XHR0aGlzLl9kID8/PSBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KERhdGUsIFtEYXRlLCAuLi5nZW5lcmF0ZUFycmF5KGFyZ3MpXSkpKCk7XG5cdFx0Ly8gU3RpbGwgbm8/XG5cdFx0aWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuXHRcdFx0bXcubG9nLndhcm4oJ0ludmFsaWQgTW9yZWJpdHMuZGF0ZSBpbml0aWFsaXNhdGlvbjonLCBhcmdzKTtcblx0XHR9XG5cdH07XG5cdC8qKlxuXHQgKiBMb2NhbGl6ZWQgc3RyaW5ncyBmb3IgZGF0ZSBwcm9jZXNzaW5nLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuZGF0ZVxuXHQgKiBAdHlwZSB7b2JqZWN0LjxzdHJpbmcsIHN0cmluZz59XG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IG1vbnRoc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBtb250aHNTaG9ydFxuXHQgKiBAcHJvcGVydHkge3N0cmluZ1tdfSBkYXlzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nW119IGRheXNTaG9ydFxuXHQgKiBAcHJvcGVydHkge29iamVjdC48c3RyaW5nLCBzdHJpbmc+fSByZWxhdGl2ZVRpbWVzXG5cdCAqIEBwcml2YXRlXG5cdCAqL1xuXHRNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEgPSB7XG5cdFx0Ly8gbWVzc2FnZSBuYW1lcyBoZXJlIGNvcnJlc3BvbmQgdG8gTWVkaWFXaWtpIG1lc3NhZ2UgbmFtZXNcblx0XHQvLyBObyBpMThuIGF0IHRoaXMgdGltZVxuXHRcdG1vbnRoczogWycx5pyIJywgJzLmnIgnLCAnM+aciCcsICc05pyIJywgJzXmnIgnLCAnNuaciCcsICc35pyIJywgJzjmnIgnLCAnOeaciCcsICcxMOaciCcsICcxMeaciCcsICcxMuaciCddLFxuXHRcdG1vbnRoc1Nob3J0OiBbJzHmnIgnLCAnMuaciCcsICcz5pyIJywgJzTmnIgnLCAnNeaciCcsICc25pyIJywgJzfmnIgnLCAnOOaciCcsICc55pyIJywgJzEw5pyIJywgJzEx5pyIJywgJzEy5pyIJ10sXG5cdFx0ZGF5czogWyfmmJ/mnJ/ml6UnLCAn5pif5pyf5LiAJywgJ+aYn+acn+S6jCcsICfmmJ/mnJ/kuIknLCAn5pif5pyf5ZubJywgJ+aYn+acn+S6lCcsICfmmJ/mnJ/lha0nXSxcblx0XHRkYXlzU2hvcnQ6IFsn5pelJywgJ+S4gCcsICfkuownLCAn5LiJJywgJ+WbmycsICfkupQnLCAn5YWtJ10sXG5cdFx0cmVsYXRpdmVUaW1lczoge1xuXHRcdFx0dGhpc0RheTogJ1vku4rlpKldQSBoaDptbScsXG5cdFx0XHRwcmV2RGF5OiAnW+aYqOWkqV1BIGhoOm1tJyxcblx0XHRcdG5leHREYXk6ICdb5piO5aSpXUEgaGg6bW0nLFxuXHRcdFx0dGhpc1dlZWs6ICdkZGRkQSBoaDptbScsXG5cdFx0XHRwYXN0V2VlazogJ1vkuIpdZGRkZEEgaGg6bW0nLFxuXHRcdFx0b3RoZXI6ICdZWVlZLU1NLUREJyxcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogTWFwIHVuaXRzIHdpdGggZ2V0dGVyL3NldHRlciBmdW5jdGlvbiBuYW1lcywgZm9yIGBhZGRgIGFuZCBgc3VidHJhY3RgXG5cdCAqIG1ldGhvZHMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5kYXRlXG5cdCAqIEB0eXBlIHtvYmplY3QuPHN0cmluZywgc3RyaW5nPn1cblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IHNlY29uZHNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IG1pbnV0ZXNcblx0ICogQHByb3BlcnR5IHtzdHJpbmd9IGhvdXJzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBkYXlzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB3ZWVrc1xuXHQgKiBAcHJvcGVydHkge3N0cmluZ30gbW9udGhzXG5cdCAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB5ZWFyc1xuXHQgKi9cblx0TW9yZWJpdHMuZGF0ZS51bml0TWFwID0ge1xuXHRcdHNlY29uZHM6ICdTZWNvbmRzJyxcblx0XHRtaW51dGVzOiAnTWludXRlcycsXG5cdFx0aG91cnM6ICdIb3VycycsXG5cdFx0ZGF5czogJ0RhdGUnLFxuXHRcdHdlZWtzOiAnV2VlaycsXG5cdFx0Ly8gTm90IGEgZnVuY3Rpb24gYnV0IGhhbmRsZWQgaW4gYGFkZGAgdGhyb3VnaCBjdW5uaW5nIHVzZSBvZiBtdWx0aXBsaWNhdGlvblxuXHRcdG1vbnRoczogJ01vbnRoJyxcblx0XHR5ZWFyczogJ0Z1bGxZZWFyJyxcblx0fTtcblx0TW9yZWJpdHMuZGF0ZS5wcm90b3R5cGUgPSB7XG5cdFx0LyoqIEByZXR1cm5zIHtib29sZWFufSAqL1xuXHRcdGlzVmFsaWQoKSB7XG5cdFx0XHRyZXR1cm4gIU51bWJlci5pc05hTih0aGlzLmdldFRpbWUoKSk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBAcGFyYW0geyhEYXRlfE1vcmViaXRzLmRhdGUpfSBkYXRlXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0aXNCZWZvcmUoZGF0ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0VGltZSgpIDwgZGF0ZS5nZXRUaW1lKCk7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBAcGFyYW0geyhEYXRlfE1vcmViaXRzLmRhdGUpfSBkYXRlXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0aXNBZnRlcihkYXRlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRUaW1lKCkgPiBkYXRlLmdldFRpbWUoKTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldFVUQ01vbnRoTmFtZSgpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEubW9udGhzW3RoaXMuZ2V0VVRDTW9udGgoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRVVENNb250aE5hbWVBYmJyZXYoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRoc1Nob3J0W3RoaXMuZ2V0VVRDTW9udGgoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXRNb250aE5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLm1vbnRoc1t0aGlzLmdldE1vbnRoKCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0TW9udGhOYW1lQWJicmV2KCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5tb250aHNTaG9ydFt0aGlzLmdldE1vbnRoKCldO1xuXHRcdH0sXG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9ICovXG5cdFx0Z2V0VVRDRGF5TmFtZSgpIHtcblx0XHRcdHJldHVybiBNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEuZGF5c1t0aGlzLmdldFVUQ0RheSgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldFVUQ0RheU5hbWVBYmJyZXYoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLmRheXNTaG9ydFt0aGlzLmdldFVUQ0RheSgpXTtcblx0XHR9LFxuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSAqL1xuXHRcdGdldERheU5hbWUoKSB7XG5cdFx0XHRyZXR1cm4gTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLmRheXNbdGhpcy5nZXREYXkoKV07XG5cdFx0fSxcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gKi9cblx0XHRnZXREYXlOYW1lQWJicmV2KCkge1xuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5kYXlzU2hvcnRbdGhpcy5nZXREYXkoKV07XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBZGQgYSBnaXZlbiBudW1iZXIgb2YgbWludXRlcywgaG91cnMsIGRheXMsIHdlZWtzLCBtb250aHMsIG9yIHllYXJzIHRvIHRoZSBkYXRlLlxuXHRcdCAqIFRoaXMgaXMgZG9uZSBpbi1wbGFjZS4gVGhlIG1vZGlmaWVkIGRhdGUgb2JqZWN0IGlzIGFsc28gcmV0dXJuZWQsIGFsbG93aW5nIGNoYWluaW5nLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIFNob3VsZCBiZSBhbiBpbnRlZ2VyLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB1bml0XG5cdFx0ICogQHRocm93cyBJZiBpbnZhbGlkIG9yIHVuc3VwcG9ydGVkIHVuaXQgaXMgZ2l2ZW4uXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLmRhdGV9XG5cdFx0ICovXG5cdFx0YWRkKG51bWJlciwgdW5pdCkge1xuXHRcdFx0bGV0IG51bSA9IE51bWJlci5wYXJzZUludChudW1iZXIsIDEwKTsgLy8gbm9ybWFsaXplXG5cdFx0XHRpZiAoTnVtYmVyLmlzTmFOKG51bSkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBudW1iZXIgXCIke251bWJlcn1cIiBwcm92aWRlZC5gKTtcblx0XHRcdH1cblx0XHRcdHVuaXQgPSB1bml0LnRvTG93ZXJDYXNlKCk7IC8vIG5vcm1hbGl6ZVxuXHRcdFx0Y29uc3Qge3VuaXRNYXB9ID0gTW9yZWJpdHMuZGF0ZTtcblx0XHRcdGxldCB1bml0Tm9ybSA9IHVuaXRNYXBbdW5pdF0gfHwgdW5pdE1hcFtgJHt1bml0fXNgXTsgLy8gc28gdGhhdCBib3RoIHNpbmd1bGFyIGFuZCAgcGx1cmFsIGZvcm1zIHdvcmtcblx0XHRcdGlmICh1bml0Tm9ybSkge1xuXHRcdFx0XHQvLyBObyBidWlsdC1pbiB3ZWVrIGZ1bmN0aW9ucywgc28gcmF0aGVyIHRoYW4gYnVpbGQgb3V0IElTTydzIGdldFdlZWsvc2V0V2VlaywganVzdCBtdWx0aXBseVxuXHRcdFx0XHQvLyBQcm9iYWJseSBjYW4ndCBiZSB1c2VkIGZvciBKdWxpYW4tPkdyZWdvcmlhbiBjaGFuZ2VvdmVycywgZXRjLlxuXHRcdFx0XHRpZiAodW5pdE5vcm0gPT09ICdXZWVrJykge1xuXHRcdFx0XHRcdHVuaXROb3JtID0gJ0RhdGUnO1xuXHRcdFx0XHRcdG51bSAqPSA3O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXNbYHNldCR7dW5pdE5vcm19YF0odGhpc1tgZ2V0JHt1bml0Tm9ybX1gXSgpICsgbnVtKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgdW5pdCBcIiR7dW5pdH1cIjogT25seSAke09iamVjdC5rZXlzKHVuaXRNYXApLmpvaW4oJywgJyl9IGFyZSBhbGxvd2VkLmApO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU3VidHJhY3RzIGEgZ2l2ZW4gbnVtYmVyIG9mIG1pbnV0ZXMsIGhvdXJzLCBkYXlzLCB3ZWVrcywgbW9udGhzLCBvciB5ZWFycyB0byB0aGUgZGF0ZS5cblx0XHQgKiBUaGlzIGlzIGRvbmUgaW4tcGxhY2UuIFRoZSBtb2RpZmllZCBkYXRlIG9iamVjdCBpcyBhbHNvIHJldHVybmVkLCBhbGxvd2luZyBjaGFpbmluZy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgLSBTaG91bGQgYmUgYW4gaW50ZWdlci5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdW5pdFxuXHRcdCAqIEB0aHJvd3MgSWYgaW52YWxpZCBvciB1bnN1cHBvcnRlZCB1bml0IGlzIGdpdmVuLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5kYXRlfVxuXHRcdCAqL1xuXHRcdHN1YnRyYWN0KG51bWJlciwgdW5pdCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuYWRkKC1udW1iZXIsIHVuaXQpO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogRm9ybWF0IHRoZSBkYXRlIGludG8gYSBzdHJpbmcgcGVyIHRoZSBnaXZlbiBmb3JtYXQgc3RyaW5nLlxuXHRcdCAqIFJlcGxhY2VtZW50IHN5bnRheCBpcyBhIHN1YnNldCBvZiB0aGF0IGluIG1vbWVudC5qczpcblx0XHQgKlxuXHRcdCAqIHwgU3ludGF4IHwgT3V0cHV0IHxcblx0XHQgKiB8LS0tLS0tLS18LS0tLS0tLS18XG5cdFx0ICogfCBIIHwgSG91cnMgKDI0LWhvdXIpIHxcblx0XHQgKiB8IEhIIHwgSG91cnMgKDI0LWhvdXIsIHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgaCB8IEhvdXJzICgxMi1ob3VyKSB8XG5cdFx0ICogfCBoaCB8IEhvdXJzICgxMi1ob3VyLCBwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IEEgfCBBTSBvciBQTSB8XG5cdFx0ICogfCBtIHwgTWludXRlcyB8XG5cdFx0ICogfCBtbSB8IE1pbnV0ZXMgKHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgcyB8IFNlY29uZHMgfFxuXHRcdCAqIHwgc3MgfCBTZWNvbmRzIChwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IFNTUyB8IE1pbGxpc2Vjb25kcyBmcmFnbWVudCwgMyBkaWdpdHMgfFxuXHRcdCAqIHwgZCB8IERheSBudW1iZXIgb2YgdGhlIHdlZWsgKFN1bj0wKSB8XG5cdFx0ICogfCBkZGQgfCBBYmJyZXZpYXRlZCBkYXkgbmFtZSB8XG5cdFx0ICogfCBkZGRkIHwgRnVsbCBkYXkgbmFtZSB8XG5cdFx0ICogfCBEIHwgRGF0ZSB8XG5cdFx0ICogfCBERCB8IERhdGUgKHBhZGRlZCB0byAyIGRpZ2l0cykgfFxuXHRcdCAqIHwgTSB8IE1vbnRoIG51bWJlciAoMS1pbmRleGVkKSB8XG5cdFx0ICogfCBNTSB8IE1vbnRoIG51bWJlciAoMS1pbmRleGVkLCBwYWRkZWQgdG8gMiBkaWdpdHMpIHxcblx0XHQgKiB8IE1NTSB8IEFiYnJldmlhdGVkIG1vbnRoIG5hbWUgfFxuXHRcdCAqIHwgTU1NTSB8IEZ1bGwgbW9udGggbmFtZSB8XG5cdFx0ICogfCBZIHwgWWVhciB8XG5cdFx0ICogfCBZWSB8IEZpbmFsIHR3byBkaWdpdHMgb2YgeWVhciAoMjAgZm9yIDIwMjAsIDQyIGZvciAxOTQyKSB8XG5cdFx0ICogfCBZWVlZIHwgWWVhciAoc2FtZSBhcyBgWWApIHxcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtYXRzdHIgLSBGb3JtYXQgdGhlIGRhdGUgaW50byBhIHN0cmluZywgdXNpbmdcblx0XHQgKiB0aGUgcmVwbGFjZW1lbnQgc3ludGF4LiAgVXNlIGBbYCBhbmQgYF1gIHRvIGVzY2FwZSBpdGVtcy4gIElmIG5vdFxuXHRcdCAqIHByb3ZpZGVkLCB3aWxsIHJldHVybiB0aGUgSVNPLTg2MDEtZm9ybWF0dGVkIHN0cmluZy5cblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8bnVtYmVyKX0gW3pvbmU9c3lzdGVtXSAtIGBzeXN0ZW1gIChmb3IgYnJvd3Nlci1kZWZhdWx0IHRpbWUgem9uZSksXG5cdFx0ICogYHV0Y2AsIG9yIHNwZWNpZnkgYSB0aW1lIHpvbmUgYXMgbnVtYmVyIG9mIG1pbnV0ZXMgcmVsYXRpdmUgdG8gVVRDLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Zm9ybWF0KGZvcm1hdHN0ciwgem9uZSkge1xuXHRcdFx0aWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuXHRcdFx0XHRyZXR1cm4gJ0ludmFsaWQgZGF0ZSc7IC8vIFB1dCB0aGUgdHJ1dGggb3V0LCBwcmVmZXJhYmxlIHRvIFwiTmFOTmFOTmFuIE5hTjpOYU5cIiBvciB3aGF0ZXZlclxuXHRcdFx0fVxuXG5cdFx0XHRsZXQgdWRhdGUgPSB0aGlzO1xuXHRcdFx0Ly8gY3JlYXRlIGEgbmV3IGRhdGUgb2JqZWN0IHRoYXQgd2lsbCBjb250YWluIHRoZSBkYXRlIHRvIGRpc3BsYXkgYXMgc3lzdGVtIHRpbWVcblx0XHRcdGlmICh6b25lID09PSAndXRjJykge1xuXHRcdFx0XHR1ZGF0ZSA9IG5ldyBNb3JlYml0cy5kYXRlKHRoaXMuZ2V0VGltZSgpKS5hZGQodGhpcy5nZXRUaW1lem9uZU9mZnNldCgpLCAnbWludXRlcycpO1xuXHRcdFx0fSBlbHNlIGlmICh0eXBlb2Ygem9uZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Ly8gY29udmVydCB0byB1dGMsIHRoZW4gYWRkIHRoZSB1dGMgb2Zmc2V0IGdpdmVuXG5cdFx0XHRcdHVkYXRlID0gbmV3IE1vcmViaXRzLmRhdGUodGhpcy5nZXRUaW1lKCkpLmFkZCh0aGlzLmdldFRpbWV6b25lT2Zmc2V0KCkgKyB6b25lLCAnbWludXRlcycpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gZGVmYXVsdCB0byBJU09TdHJpbmdcblx0XHRcdGlmICghZm9ybWF0c3RyKSB7XG5cdFx0XHRcdHJldHVybiB1ZGF0ZS50b0lTT1N0cmluZygpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFkID0gKG51bSwgbGVuKSA9PiB7XG5cdFx0XHRcdGxlbiB8fD0gMjsgLy8gVXAgdG8gbGVuZ3RoIG9mIDAwICsgMVxuXHRcdFx0XHRyZXR1cm4gYDAwJHtudW19YC50b1N0cmluZygpLnNsaWNlKDAgLSBsZW4pO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IGgyNCA9IHVkYXRlLmdldEhvdXJzKCk7XG5cdFx0XHRjb25zdCBtID0gdWRhdGUuZ2V0TWludXRlcygpO1xuXHRcdFx0Y29uc3QgcyA9IHVkYXRlLmdldFNlY29uZHMoKTtcblx0XHRcdGNvbnN0IG1zID0gdWRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cdFx0XHRjb25zdCBEID0gdWRhdGUuZ2V0RGF0ZSgpO1xuXHRcdFx0Y29uc3QgTSA9IHVkYXRlLmdldE1vbnRoKCkgKyAxO1xuXHRcdFx0Y29uc3QgWSA9IHVkYXRlLmdldEZ1bGxZZWFyKCk7XG5cdFx0XHRjb25zdCBoMTIgPSBoMjQgJSAxMiB8fCAxMjtcblx0XHRcdGNvbnN0IGFtT3JQbSA9IGgyNCA+PSAxMiA/ICfkuIvljYgnIDogJ+S4iuWNiCc7XG5cdFx0XHRjb25zdCByZXBsYWNlbWVudE1hcCA9IHtcblx0XHRcdFx0SEg6IHBhZChoMjQpLFxuXHRcdFx0XHRIOiBoMjQsXG5cdFx0XHRcdGhoOiBwYWQoaDEyKSxcblx0XHRcdFx0aDogaDEyLFxuXHRcdFx0XHRBOiBhbU9yUG0sXG5cdFx0XHRcdG1tOiBwYWQobSksXG5cdFx0XHRcdG0sXG5cdFx0XHRcdHNzOiBwYWQocyksXG5cdFx0XHRcdHMsXG5cdFx0XHRcdFNTUzogcGFkKG1zLCAzKSxcblx0XHRcdFx0ZGRkZDogdWRhdGUuZ2V0RGF5TmFtZSgpLFxuXHRcdFx0XHRkZGQ6IHVkYXRlLmdldERheU5hbWVBYmJyZXYoKSxcblx0XHRcdFx0ZDogdWRhdGUuZ2V0RGF5KCksXG5cdFx0XHRcdEREOiBwYWQoRCksXG5cdFx0XHRcdEQsXG5cdFx0XHRcdE1NTU06IHVkYXRlLmdldE1vbnRoTmFtZSgpLFxuXHRcdFx0XHRNTU06IHVkYXRlLmdldE1vbnRoTmFtZUFiYnJldigpLFxuXHRcdFx0XHRNTTogcGFkKE0pLFxuXHRcdFx0XHRNLFxuXHRcdFx0XHRZWVlZOiBZLFxuXHRcdFx0XHRZWTogcGFkKFkgJSAxMDApLFxuXHRcdFx0XHRZLFxuXHRcdFx0fTtcblx0XHRcdGNvbnN0IHVuYmluZGVyID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKGZvcm1hdHN0cik7IC8vIGVzY2FwZSBzdHVmZiBiZXR3ZWVuIFsuLi5dXG5cdFx0XHR1bmJpbmRlci51bmJpbmQoU3RyaW5nLnJhd2BcXFtgLCBTdHJpbmcucmF3YFxcXWApO1xuXHRcdFx0dW5iaW5kZXIuY29udGVudCA9IHVuYmluZGVyLmNvbnRlbnQucmVwbGFjZShcblx0XHRcdFx0LyogUmVnZXggbm90ZXM6XG5cdFx0XHRcdCAqIGQoZHsyLDN9KT8gbWF0Y2hlcyBleGFjdGx5IDEsIDMgb3IgNCBvY2N1cnJlbmNlcyBvZiAnZCcgKCdkZCcgaXMgdHJlYXRlZCBhcyBhIGRvdWJsZSBtYXRjaCBvZiAnZCcpXG5cdFx0XHRcdCAqIFl7MSwyfShZezJ9KT8gbWF0Y2hlcyBleGFjdGx5IDEsIDIgb3IgNCBvY2N1cnJlbmNlcyBvZiAnWSdcblx0XHRcdFx0ICovXG5cdFx0XHRcdC9IezEsMn18aHsxLDJ9fG17MSwyfXxzezEsMn18U1NTfGQoZHsyLDN9KT98RHsxLDJ9fE17MSw0fXxZezEsMn0oWXsyfSk/fEEvZyxcblx0XHRcdFx0KG1hdGNoKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlcGxhY2VtZW50TWFwW21hdGNoXTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRcdHJldHVybiB1bmJpbmRlci5yZWJpbmQoKS5yZXBsYWNlKC9cXFsoLio/KVxcXS9nLCAnJDEnKTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEdpdmVzIGEgcmVhZGFibGUgcmVsYXRpdmUgdGltZSBzdHJpbmcgc3VjaCBhcyBcIlllc3RlcmRheSBhdCA2OjQzIFBNXCIgb3IgXCJMYXN0IFRodXJzZGF5IGF0IDExOjQ1IEFNXCIuXG5cdFx0ICogU2ltaWxhciB0byBgY2FsZW5kYXJgIGluIG1vbWVudC5qcywgYnV0IHdpdGggdGltZSB6b25lIHN1cHBvcnQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyhzdHJpbmd8bnVtYmVyKX0gW3pvbmU9c3lzdGVtXSAtICdzeXN0ZW0nIChmb3IgYnJvd3Nlci1kZWZhdWx0IHRpbWUgem9uZSksXG5cdFx0ICogJ3V0YycgKGZvciBVVEMpLCBvciBzcGVjaWZ5IGEgdGltZSB6b25lIGFzIG51bWJlciBvZiBtaW51dGVzIHBhc3QgVVRDLlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Y2FsZW5kYXIoem9uZSkge1xuXHRcdFx0Ly8gWmVybyBvdXQgdGhlIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzIGFuZCBtaWxsaXNlY29uZHMgLSBrZWVwaW5nIG9ubHkgdGhlIGRhdGU7XG5cdFx0XHQvLyBmaW5kIHRoZSBkaWZmZXJlbmNlLiBOb3RlIHRoYXQgc2V0SG91cnMoKSByZXR1cm5zIHRoZSBzYW1lIHRoaW5nIGFzIGdldFRpbWUoKS5cblx0XHRcdGNvbnN0IGRhdGVEaWZmID0gKG5ldyBEYXRlKCkuc2V0SG91cnMoMCwgMCwgMCwgMCkgLSBuZXcgRGF0ZSh0aGlzKS5zZXRIb3VycygwLCAwLCAwLCAwKSkgLyA4LjY0ZTc7XG5cdFx0XHRzd2l0Y2ggKHRydWUpIHtcblx0XHRcdFx0Y2FzZSBkYXRlRGlmZiA9PT0gMDpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5mb3JtYXQoTW9yZWJpdHMuZGF0ZS5sb2NhbGVEYXRhLnJlbGF0aXZlVGltZXMudGhpc0RheSwgem9uZSk7XG5cdFx0XHRcdGNhc2UgZGF0ZURpZmYgPT09IDE6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLnByZXZEYXksIHpvbmUpO1xuXHRcdFx0XHRjYXNlIGRhdGVEaWZmID4gMCAmJiBkYXRlRGlmZiA8IDc6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLnBhc3RXZWVrLCB6b25lKTtcblx0XHRcdFx0Y2FzZSBkYXRlRGlmZiA9PT0gLTE6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLm5leHREYXksIHpvbmUpO1xuXHRcdFx0XHRjYXNlIGRhdGVEaWZmIDwgMCAmJiBkYXRlRGlmZiA+IC03OlxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZvcm1hdChNb3JlYml0cy5kYXRlLmxvY2FsZURhdGEucmVsYXRpdmVUaW1lcy50aGlzV2Vlaywgem9uZSk7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZm9ybWF0KE1vcmViaXRzLmRhdGUubG9jYWxlRGF0YS5yZWxhdGl2ZVRpbWVzLm90aGVyLCB6b25lKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIEdldCBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB0aGF0IG1hdGNoZXMgd2lraXRleHQgc2VjdGlvbiB0aXRsZXMsIHN1Y2hcblx0XHQgKiBhcyBgPT1EZWNlbWJlciAyMDE5PT1gIG9yIGA9PT0gSmFuIDIwMTggPT09YC5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtSZWdFeHB9XG5cdFx0ICovXG5cdFx0bW9udGhIZWFkZXJSZWdleCgpIHtcblx0XHRcdHJldHVybiBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgXig9PSspXFxcXHMqJHt0aGlzLmdldFVUQ0Z1bGxZZWFyKCl95bm0KD86JHt0aGlzLmdldFVUQ01vbnRoTmFtZSgpfXwke3RoaXMuZ2V0VVRDTW9udGhOYW1lQWJicmV2KCl9KVxcXFxzKlxcXFwxYCxcblx0XHRcdFx0J21nJ1xuXHRcdFx0KTtcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIENyZWF0ZXMgYSB3aWtpdGV4dCBzZWN0aW9uIGhlYWRlciB3aXRoIHRoZSBtb250aCBhbmQgeWVhci5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBbbGV2ZWw9Ml0gLSBIZWFkZXIgbGV2ZWwuICBQYXNzIDAgZm9yIGp1c3QgdGhlIHRleHRcblx0XHQgKiB3aXRoIG5vIHdpa2l0ZXh0IG1hcmtlcnMgKD09KS5cblx0XHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdG1vbnRoSGVhZGVyKGxldmVsKSB7XG5cdFx0XHQvLyBEZWZhdWx0IHRvIDIsIGJ1dCBhbGxvdyBmb3IgMCBvciBzdHJpbmd5IG51bWJlcnNcblx0XHRcdGxldmVsID0gTnVtYmVyLnBhcnNlSW50KGxldmVsLCAxMCk7XG5cdFx0XHRsZXZlbCA9IE51bWJlci5pc05hTihsZXZlbCkgPyAyIDogbGV2ZWw7XG5cdFx0XHRjb25zdCBoZWFkZXIgPSAnPScucmVwZWF0KGxldmVsKTtcblx0XHRcdGNvbnN0IHRleHQgPSBgJHt0aGlzLmdldFVUQ0Z1bGxZZWFyKCl95bm0JHt0aGlzLmdldFVUQ01vbnRoTmFtZSgpfWA7XG5cdFx0XHRpZiAoaGVhZGVyLmxlbmd0aCkge1xuXHRcdFx0XHQvLyB3aWtpdGV4dC1mb3JtYXR0ZWQgaGVhZGVyXG5cdFx0XHRcdHJldHVybiBgJHtoZWFkZXJ9ICR7dGV4dH0gJHtoZWFkZXJ9YDtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0ZXh0OyAvLyBKdXN0IHRoZSBzdHJpbmdcblx0XHR9LFxuXHR9O1xuXHQvLyBBbGxvdyBuYXRpdmUgRGF0ZS5wcm90b3R5cGUgbWV0aG9kcyB0byBiZSB1c2VkIG9uIE1vcmViaXRzLmRhdGUgb2JqZWN0c1xuXHRmb3IgKGNvbnN0IGZ1bmMgb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoRGF0ZS5wcm90b3R5cGUpKSB7XG5cdFx0Ly8gRXhjbHVkZSBtZXRob2RzIHRoYXQgY29sbGlkZSB3aXRoIFBhZ2VUcmlhZ2UncyBEYXRlLmpzIGV4dGVybmFsLCB3aGljaCBjbG9iYmVycyBuYXRpdmUgRGF0ZVxuXHRcdGlmICghWydhZGQnLCAnZ2V0RGF5TmFtZScsICdnZXRNb250aE5hbWUnXS5pbmNsdWRlcyhmdW5jKSkge1xuXHRcdFx0TW9yZWJpdHMuZGF0ZS5wcm90b3R5cGVbZnVuY10gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5fZFtmdW5jXSguLi5hcmdzKTtcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraSAqKioqKioqKioqKioqKioqICovXG5cdC8qKlxuXHQgKiBWYXJpb3VzIG9iamVjdHMgZm9yIHdpa2kgZWRpdGluZyBhbmQgQVBJIGFjY2VzcywgaW5jbHVkaW5nXG5cdCAqIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gYW5kIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V9LlxuXHQgKlxuXHQgKiBAbmFtZXNwYWNlIE1vcmViaXRzLndpa2lcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpID0ge307XG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZCBpbiBmYXZvciBvZiBNb3JlYml0cy5pc1BhZ2VSZWRpcmVjdCBhcyBvZiBOb3ZlbWJlciAyMDIwXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHQgKi9cblx0TW9yZWJpdHMud2lraS5pc1BhZ2VSZWRpcmVjdCA9ICgpID0+IHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHQnW01vcmViaXRzXSBOT1RFOiBNb3JlYml0cy53aWtpLmlzUGFnZVJlZGlyZWN0IGhhcyBiZWVuIGRlcHJlY2F0ZWQsIHVzZSBNb3JlYml0cy5pc1BhZ2VSZWRpcmVjdCBpbnN0ZWFkLidcblx0XHQpO1xuXHRcdHJldHVybiBNb3JlYml0cy5pc1BhZ2VSZWRpcmVjdCgpO1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqIEB0eXBlIHtudW1iZXJ9XG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgPSAwO1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2lcblx0ICogQHR5cGUge251bWJlcn1cblx0ICovXG5cdE1vcmViaXRzLndpa2kubmJyT2ZDaGVja3BvaW50c0xlZnQgPSAwO1xuXHQvKipcblx0ICogRGlzcGxheSBtZXNzYWdlIGFuZC9vciByZWRpcmVjdCB0byBwYWdlIHVwb24gY29tcGxldGlvbiBvZiB0YXNrcy5cblx0ICpcblx0ICogRXZlcnkgY2FsbCB0byBNb3JlYml0cy53aWtpLmFwaS5wb3N0KCkgcmVzdWx0cyBpbiB0aGUgZGlzcGF0Y2ggb2YgYW5cblx0ICogYXN5bmNocm9ub3VzIGNhbGxiYWNrLiBFYWNoIGNhbGxiYWNrIGNhbiBpbiB0dXJuIG1ha2UgYW4gYWRkaXRpb25hbCBjYWxsIHRvXG5cdCAqIE1vcmViaXRzLndpa2kuYXBpLnBvc3QoKSB0byBjb250aW51ZSBhIHByb2Nlc3Npbmcgc2VxdWVuY2UuIEF0IHRoZVxuXHQgKiBjb25jbHVzaW9uIG9mIHRoZSBmaW5hbCBjYWxsYmFjayBvZiBhIHByb2Nlc3Npbmcgc2VxdWVuY2UsIGl0IGlzIG5vdFxuXHQgKiBwb3NzaWJsZSB0byBzaW1wbHkgcmV0dXJuIHRvIHRoZSBvcmlnaW5hbCBjYWxsZXIgYmVjYXVzZSB0aGVyZSBpcyBubyBjYWxsXG5cdCAqIHN0YWNrIGxlYWRpbmcgYmFjayB0byB0aGUgb3JpZ2luYWwgY29udGV4dC4gSW5zdGVhZCxcblx0ICogTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQoKSBpcyBjYWxsZWQgdG8gZGlzcGxheSB0aGUgcmVzdWx0IHRvXG5cdCAqIHRoZSB1c2VyIGFuZCB0byBwZXJmb3JtIGFuIG9wdGlvbmFsIHBhZ2UgcmVkaXJlY3QuXG5cdCAqXG5cdCAqIFRoZSBkZXRlcm1pbmF0aW9uIG9mIHdoZW4gdG8gY2FsbCBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudCgpIGlzXG5cdCAqIG1hbmFnZWQgdGhyb3VnaCB0aGUgZ2xvYmFscyBNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQgYW5kXG5cdCAqIE1vcmViaXRzLndpa2kubmJyT2ZDaGVja3BvaW50c0xlZnQuIE1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdCBpc1xuXHQgKiBpbmNyZW1lbnRlZCBhdCB0aGUgc3RhcnQgb2YgZXZlcnkgTW9yZWJpdHMud2lraS5hcGkgY2FsbCBhbmQgZGVjcmVtZW50ZWRcblx0ICogYWZ0ZXIgdGhlIGNvbXBsZXRpb24gb2YgYSBjYWxsYmFjayBmdW5jdGlvbi4gSWYgYSBjYWxsYmFjayBmdW5jdGlvbiBkb2VzXG5cdCAqIG5vdCBjcmVhdGUgYSBuZXcgTW9yZWJpdHMud2lraS5hcGkgb2JqZWN0IGJlZm9yZSBleGl0aW5nLCBpdCBpcyB0aGUgZmluYWxcblx0ICogc3RlcCBpbiB0aGUgcHJvY2Vzc2luZyBjaGFpbiBhbmQgTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQoKSB3aWxsXG5cdCAqIHRoZW4gYmUgY2FsbGVkLlxuXHQgKlxuXHQgKiBPcHRpb25hbGx5LCBjYWxsZXJzIG1heSB1c2UgTW9yZWJpdHMud2lraS5hZGRDaGVja3BvaW50KCkgdG8gaW5kaWNhdGUgdGhhdFxuXHQgKiBwcm9jZXNzaW5nIGlzIG5vdCBjb21wbGV0ZSB1cG9uIHRoZSBjb25jbHVzaW9uIG9mIHRoZSBmaW5hbCBjYWxsYmFja1xuXHQgKiBmdW5jdGlvbi4gIFRoaXMgaXMgdXNlZCBmb3IgYmF0Y2ggb3BlcmF0aW9ucy4gVGhlIGVuZCBvZiBhIGJhdGNoIGlzXG5cdCAqIHNpZ25hbGVkIGJ5IGNhbGxpbmcgTW9yZWJpdHMud2lraS5yZW1vdmVDaGVja3BvaW50KCkuXG5cdCAqXG5cdCAqIEBwYXJhbSB7dHlwZW9mIE1vcmViaXRzfSBzZWxmXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZCA9IChzZWxmKSA9PiB7XG5cdFx0aWYgKC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0IDw9IDAgJiYgTW9yZWJpdHMud2lraS5uYnJPZkNoZWNrcG9pbnRzTGVmdCA8PSAwKSB7XG5cdFx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ldmVudChzZWxmKTtcblx0XHR9XG5cdH07XG5cdC8vIENoYW5nZSBwZXIgYWN0aW9uIHdhbnRlZFxuXHQvKiogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kgKi9cblx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZXZlbnQgPSAoKSA9PiB7XG5cdFx0aWYgKE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLm5vdGljZSkge1xuXHRcdFx0TW9yZWJpdHMuc3RhdHVzLmFjdGlvbkNvbXBsZXRlZChNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ub3RpY2UpO1xuXHRcdH1cblx0XHRpZiAoTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3QpIHtcblx0XHRcdC8vIGlmIGl0IGlzbid0IGEgVVJMLCBtYWtlIGl0IG9uZS4gVE9ETzogVGhpcyBicmVha3Mgb24gdGhlIGFydGljbGVzICdodHRwOi8vJywgJ2Z0cDovLycsIGFuZCBzaW1pbGFyIG9uZXMuXG5cdFx0XHRpZiAoIS9eXFx3KzpcXC9cXC8vLnRlc3QoTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3QpKSB7XG5cdFx0XHRcdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0ID0gbXcudXRpbC5nZXRVcmwoTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3QpO1xuXHRcdFx0XHRpZiAoTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQuZm9sbG93UmVkaXJlY3QgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQucmVkaXJlY3QgKz0gJz9yZWRpcmVjdD1ubyc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRsb2NhdGlvbiA9IE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLnJlZGlyZWN0O1xuXHRcdFx0fSwgTW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQudGltZU91dCk7XG5cdFx0fVxuXHR9O1xuXHQvKiogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kgKi9cblx0TW9yZWJpdHMud2lraS5hY3Rpb25Db21wbGV0ZWQudGltZU91dCA9XG5cdFx0d2luZG93LndwQWN0aW9uQ29tcGxldGVkVGltZU91dCA9PT0gdW5kZWZpbmVkID8gNTAwMCA6IHdpbmRvdy53cEFjdGlvbkNvbXBsZXRlZFRpbWVPdXQ7XG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdCA9IG51bGw7XG5cdC8qKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraSAqL1xuXHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5ub3RpY2UgPSBudWxsO1xuXHQvKiogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kgKi9cblx0TW9yZWJpdHMud2lraS5hZGRDaGVja3BvaW50ID0gKCkgPT4ge1xuXHRcdCsrTW9yZWJpdHMud2lraS5uYnJPZkNoZWNrcG9pbnRzTGVmdDtcblx0fTtcblx0LyoqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpICovXG5cdE1vcmViaXRzLndpa2kucmVtb3ZlQ2hlY2twb2ludCA9ICgpID0+IHtcblx0XHRpZiAoLS1Nb3JlYml0cy53aWtpLm5ick9mQ2hlY2twb2ludHNMZWZ0IDw9IDAgJiYgTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0IDw9IDApIHtcblx0XHRcdE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLmV2ZW50KCk7XG5cdFx0fVxuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLndpa2kuYXBpICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIEFuIGVhc3kgd2F5IHRvIHRhbGsgdG8gdGhlIE1lZGlhV2lraSBBUEkuICBBY2NlcHRzIGVpdGhlciBqc29uIG9yIHhtbFxuXHQgKiAoZGVmYXVsdCkgZm9ybWF0czsgaWYganNvbiBpcyBzZWxlY3RlZCwgd2lsbCBkZWZhdWx0IHRvIGBmb3JtYXR2ZXJzaW9uPTJgXG5cdCAqIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLiAgU2ltaWxhcmx5LCBlbmZvcmNlcyBuZXdlciBgZXJyb3Jmb3JtYXRgcyxcblx0ICogZGVmYXVsdGluZyB0byBgaHRtbGAgaWYgdW5zcGVjaWZpZWQuICBgdXNlbGFuZ2AgZW5mb3JjZWQgdG8gdGhlIHdpa2knc1xuXHQgKiBjb250ZW50IGxhbmd1YWdlLlxuXHQgKlxuXHQgKiBJbiBuZXcgY29kZSwgdGhlIHVzZSBvZiB0aGUgbGFzdCAzIHBhcmFtZXRlcnMgc2hvdWxkIGJlIGF2b2lkZWQsIGluc3RlYWRcblx0ICogdXNlIHtAbGluayBNb3JlYml0cy53aWtpLmFwaSNzZXRTdGF0dXNFbGVtZW50fHNldFN0YXR1c0VsZW1lbnQoKX0gdG8gYmluZFxuXHQgKiB0aGUgc3RhdHVzIGVsZW1lbnQgKGlmIG5lZWRlZCkgYW5kIHVzZSBgLnRoZW4oKWAgb3IgYC5jYXRjaCgpYCBvbiB0aGVcblx0ICogcHJvbWlzZSByZXR1cm5lZCBieSBgcG9zdCgpYCwgcmF0aGVyIHRoYW4gc3BlY2lmeSB0aGUgYG9uU3VjY2Vzc2Agb3Jcblx0ICogYG9uRmFpbHVyZWAgY2FsbGJhY2tzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IGN1cnJlbnRBY3Rpb24gLSBUaGUgY3VycmVudCBhY3Rpb24gKHJlcXVpcmVkKS5cblx0ICogQHBhcmFtIHtPYmplY3R9IHF1ZXJ5IC0gVGhlIHF1ZXJ5IChyZXF1aXJlZCkuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiByZXF1ZXN0IGlzIHN1Y2Nlc3NmdWwuXG5cdCAqIEBwYXJhbSB7TW9yZWJpdHMuc3RhdHVzfSBbc3RhdHVzRWxlbWVudF0gLSBBIE1vcmViaXRzLnN0YXR1cyBvYmplY3QgdG8gdXNlIGZvciBzdGF0dXMgbWVzc2FnZXMuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkVycm9yXSAtIFRoZSBmdW5jdGlvbiB0byBjYWxsIGlmIGFuIGVycm9yIG9jY3Vycy5cblx0ICovXG5cdE1vcmViaXRzLndpa2kuYXBpID0gZnVuY3Rpb24gKGN1cnJlbnRBY3Rpb24sIHF1ZXJ5LCBvblN1Y2Nlc3MsIHN0YXR1c0VsZW1lbnQsIG9uRXJyb3IpIHtcblx0XHR0aGlzLmN1cnJlbnRBY3Rpb24gPSBjdXJyZW50QWN0aW9uO1xuXHRcdHRoaXMucXVlcnkgPSBxdWVyeTtcblx0XHR0aGlzLnF1ZXJ5LmFzc2VydCA9ICd1c2VyJztcblx0XHQvLyBFbmZvcmNlIG5ld2VyIGVycm9yIGZvcm1hdHMsIHByZWZlcnJpbmcgaHRtbFxuXHRcdGlmICghcXVlcnkuZXJyb3Jmb3JtYXQgfHwgIVsnd2lraXRleHQnLCAncGxhaW50ZXh0J10uaW5jbHVkZXMocXVlcnkuZXJyb3Jmb3JtYXQpKSB7XG5cdFx0XHR0aGlzLnF1ZXJ5LmVycm9yZm9ybWF0ID0gJ2h0bWwnO1xuXHRcdH1cblx0XHQvLyBFeHBsaWNpdGx5IHVzZSB0aGUgd2lraSdzIGNvbnRlbnQgbGFuZ3VhZ2UgdG8gbWluaW1pemUgY29uZnVzaW9uLFxuXHRcdC8vIHNlZSAjMTE3OSBmb3IgZGlzY3Vzc2lvblxuXHRcdHRoaXMucXVlcnkudXNlbGFuZyB8fD0gJ2NvbnRlbnQnOyAvLyBVc2Ugd2dVc2VyTGFuZ3VhZ2UgZm9yIHByZXZpZXdcblx0XHR0aGlzLnF1ZXJ5LmVycm9ybGFuZyA9ICd1c2VsYW5nJztcblx0XHR0aGlzLnF1ZXJ5LmVycm9yc3VzZWxvY2FsID0gMTtcblx0XHR0aGlzLm9uU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHR0aGlzLm9uRXJyb3IgPSBvbkVycm9yO1xuXHRcdGlmIChzdGF0dXNFbGVtZW50KSB7XG5cdFx0XHR0aGlzLnNldFN0YXR1c0VsZW1lbnQoc3RhdHVzRWxlbWVudCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc3RhdGVsZW0gPSBuZXcgTW9yZWJpdHMuc3RhdHVzKGN1cnJlbnRBY3Rpb24pO1xuXHRcdH1cblx0XHQvLyBKU09OIGlzIHVzZWQgdGhyb3VnaG91dCBNb3JlYml0cy9Ud2lua2xlLCBidXQgeG1sIHJlbWFpbnMgdGhlIGRlZmF1bHQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cdFx0aWYgKCFxdWVyeS5mb3JtYXQpIHtcblx0XHRcdHRoaXMucXVlcnkuZm9ybWF0ID0gJ3htbCc7XG5cdFx0fSBlbHNlIGlmIChxdWVyeS5mb3JtYXQgPT09ICdqc29uJyAmJiAhcXVlcnkuZm9ybWF0dmVyc2lvbikge1xuXHRcdFx0dGhpcy5xdWVyeS5mb3JtYXR2ZXJzaW9uID0gJzInO1xuXHRcdH0gZWxzZSBpZiAoIVsneG1sJywgJ2pzb24nXS5pbmNsdWRlcyhxdWVyeS5mb3JtYXQpKSB7XG5cdFx0XHR0aGlzLnN0YXRlbGVtLmVycm9yKCdJbnZhbGlkIEFQSSBmb3JtYXQ6IG9ubHkgeG1sIGFuZCBqc29uIGFyZSBzdXBwb3J0ZWQuJyk7XG5cdFx0fVxuXHRcdC8vIElnbm9yZSB0YWdzIGZvciBxdWVyaWVzIGFuZCBtb3N0IGNvbW1vbiB1bnN1cHBvcnRlZCBhY3Rpb25zLCBwcm9kdWNlcyB3YXJuaW5nc1xuXHRcdGlmIChxdWVyeS5hY3Rpb24gJiYgWydxdWVyeScsICd3YXRjaCddLmluY2x1ZGVzKHF1ZXJ5LmFjdGlvbikpIHtcblx0XHRcdGRlbGV0ZSBxdWVyeS50YWdzO1xuXHRcdH0gZWxzZSBpZiAoIXF1ZXJ5LnRhZ3MgJiYgbW9yZWJpdHNXaWtpQ2hhbmdlVGFnKSB7XG5cdFx0XHRxdWVyeS50YWdzID0gbW9yZWJpdHNXaWtpQ2hhbmdlVGFnO1xuXHRcdH1cblx0fTtcblx0TW9yZWJpdHMud2lraS5hcGkucHJvdG90eXBlID0ge1xuXHRcdGN1cnJlbnRBY3Rpb246ICcnLFxuXHRcdG9uU3VjY2VzczogbnVsbCxcblx0XHRvbkVycm9yOiBudWxsLFxuXHRcdHBhcmVudDogd2luZG93LFxuXHRcdC8vIHVzZSBnbG9iYWwgY29udGV4dCBpZiB0aGVyZSBpcyBubyBwYXJlbnQgb2JqZWN0XG5cdFx0cXVlcnk6IG51bGwsXG5cdFx0cmVzcG9uc2U6IG51bGwsXG5cdFx0cmVzcG9uc2VYTUw6IG51bGwsXG5cdFx0Ly8gdXNlIGByZXNwb25zZWAgaW5zdGVhZDsgcmV0YWluZWQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG5cdFx0c3RhdGVsZW06IG51bGwsXG5cdFx0Ly8gdGhpcyBub24tc3RhbmRhcmQgbmFtZSBrZXB0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXHRcdHN0YXR1c1RleHQ6IG51bGwsXG5cdFx0Ly8gcmVzdWx0IHJlY2VpdmVkIGZyb20gdGhlIEFQSSwgbm9ybWFsbHkgXCJzdWNjZXNzXCIgb3IgXCJlcnJvclwiXG5cdFx0ZXJyb3JDb2RlOiBudWxsLFxuXHRcdC8vIHNob3J0IHRleHQgZXJyb3IgY29kZSwgaWYgYW55LCBhcyBkb2N1bWVudGVkIGluIHRoZSBNZWRpYVdpa2kgQVBJXG5cdFx0ZXJyb3JUZXh0OiBudWxsLFxuXHRcdC8vIGZ1bGwgZXJyb3IgZGVzY3JpcHRpb24sIGlmIGFueVxuXHRcdGJhZHRva2VuUmV0cnk6IGZhbHNlLFxuXHRcdC8vIHNldCB0byB0cnVlIGlmIHRoaXMgb24gYSByZXRyeSBhdHRlbXB0ZWQgYWZ0ZXIgYSBiYWR0b2tlbiBlcnJvclxuXHRcdC8qKlxuXHRcdCAqIEtlZXAgdHJhY2sgb2YgcGFyZW50IG9iamVjdCBmb3IgY2FsbGJhY2tzLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHsqfSBwYXJlbnRcblx0XHQgKi9cblx0XHRzZXRQYXJlbnQocGFyZW50KSB7XG5cdFx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0XHR9LFxuXHRcdC8qKiBAcGFyYW0ge01vcmViaXRzLnN0YXR1c30gc3RhdHVzRWxlbWVudCAqL1xuXHRcdHNldFN0YXR1c0VsZW1lbnQoc3RhdHVzRWxlbWVudCkge1xuXHRcdFx0dGhpcy5zdGF0ZWxlbSA9IHN0YXR1c0VsZW1lbnQ7XG5cdFx0XHR0aGlzLnN0YXRlbGVtLnN0YXR1cyh0aGlzLmN1cnJlbnRBY3Rpb24pO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ2Fycnkgb3V0IHRoZSByZXF1ZXN0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtPYmplY3R9IGNhbGxlckFqYXhQYXJhbWV0ZXJzIC0gRG8gbm90IHNwZWNpZnkgYSBwYXJhbWV0ZXIgdW5sZXNzIHlvdSByZWFsbHlcblx0XHQgKiByZWFsbHkgd2FudCB0byBnaXZlIGpRdWVyeSBzb21lIGV4dHJhIHBhcmFtZXRlcnMuXG5cdFx0ICogQHJldHVybnMge3Byb21pc2V9IC0gQSBqUXVlcnkgcHJvbWlzZSBvYmplY3QgdGhhdCBpcyByZXNvbHZlZCBvciByZWplY3RlZCB3aXRoIHRoZSBhcGkgb2JqZWN0LlxuXHRcdCAqL1xuXHRcdHBvc3QoY2FsbGVyQWpheFBhcmFtZXRlcnMpIHtcblx0XHRcdCsrTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0O1xuXHRcdFx0Y29uc3QgcXVlcnlTdHJpbmdBcnIgPSBbXTtcblx0XHRcdGZvciAoY29uc3QgW2ksIHZhbF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5xdWVyeSkpIHtcblx0XHRcdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuXHRcdFx0XHRcdHF1ZXJ5U3RyaW5nQXJyW3F1ZXJ5U3RyaW5nQXJyLmxlbmd0aF0gPVxuXHRcdFx0XHRcdFx0YCR7ZW5jb2RlVVJJQ29tcG9uZW50KGkpfT0ke3ZhbC5tYXAoZW5jb2RlVVJJQ29tcG9uZW50KS5qb2luKCd8Jyl9YDtcblx0XHRcdFx0fSBlbHNlIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHF1ZXJ5U3RyaW5nQXJyW3F1ZXJ5U3RyaW5nQXJyLmxlbmd0aF0gPSBgJHtlbmNvZGVVUklDb21wb25lbnQoaSl9PSR7ZW5jb2RlVVJJQ29tcG9uZW50KHZhbCl9YDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZ0Fyci5qb2luKCcmJykucmVwbGFjZSgvXiguKj8pKFxcYnRva2VuPVteJl0qKSYoLiopLywgJyQxJDMmJDInKTtcblx0XHRcdC8vIHRva2VuIHNob3VsZCBhbHdheXMgYmUgdGhlIGxhc3QgaXRlbSBpbiB0aGUgcXVlcnkgc3RyaW5nIChidWcgVFctQi0wMDEzKVxuXHRcdFx0Y29uc3QgYWpheHBhcmFtcyA9IHtcblx0XHRcdFx0Y29udGV4dDogdGhpcyxcblx0XHRcdFx0dHlwZTogdGhpcy5xdWVyeS5hY3Rpb24gPT09ICdxdWVyeScgPyAnR0VUJyA6ICdQT1NUJyxcblx0XHRcdFx0dXJsOiBtdy51dGlsLndpa2lTY3JpcHQoJ2FwaScpLFxuXHRcdFx0XHRkYXRhOiBxdWVyeVN0cmluZyxcblx0XHRcdFx0ZGF0YVR5cGU6IHRoaXMucXVlcnkuZm9ybWF0LFxuXHRcdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdFx0J0FwaS1Vc2VyLUFnZW50JzogbW9yZWJpdHNXaWtpQXBpVXNlckFnZW50LFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQuLi5jYWxsZXJBamF4UGFyYW1ldGVycyxcblx0XHRcdH07XG5cdFx0XHRyZXR1cm4gJC5hamF4KGFqYXhwYXJhbXMpLnRoZW4oXG5cdFx0XHRcdGZ1bmN0aW9uIG9uQVBJc3VjY2VzcyhyZXNwb25zZSwgc3RhdHVzVGV4dCkge1xuXHRcdFx0XHRcdHRoaXMuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQ7XG5cdFx0XHRcdFx0dGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuXHRcdFx0XHRcdHRoaXMucmVzcG9uc2VYTUwgPSByZXNwb25zZTtcblx0XHRcdFx0XHQvLyBMaW1pdCB0byBmaXJzdCBlcnJvclxuXHRcdFx0XHRcdGlmICh0aGlzLnF1ZXJ5LmZvcm1hdCA9PT0gJ2pzb24nKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmVycm9yQ29kZSA9IHJlc3BvbnNlLmVycm9ycyAmJiByZXNwb25zZS5lcnJvcnNbMF0uY29kZTtcblx0XHRcdFx0XHRcdGlmICh0aGlzLnF1ZXJ5LmVycm9yZm9ybWF0ID09PSAnaHRtbCcpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5lcnJvclRleHQgPSByZXNwb25zZS5lcnJvcnMgJiYgcmVzcG9uc2UuZXJyb3JzWzBdLmh0bWw7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMucXVlcnkuZXJyb3Jmb3JtYXQgPT09ICd3aWtpdGV4dCcgfHwgdGhpcy5xdWVyeS5lcnJvcmZvcm1hdCA9PT0gJ3BsYWludGV4dCcpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5lcnJvclRleHQgPSByZXNwb25zZS5lcnJvcnMgJiYgcmVzcG9uc2UuZXJyb3JzWzBdLnRleHQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMuZXJyb3JDb2RlID0gJChyZXNwb25zZSkuZmluZCgnZXJyb3JzIGVycm9yJykuZXEoMCkuYXR0cignY29kZScpO1xuXHRcdFx0XHRcdFx0Ly8gU3VmZmljaWVudCBmb3IgaHRtbCwgd2lraXRleHQsIG9yIHBsYWludGV4dCBlcnJvcmZvcm1hdHNcblx0XHRcdFx0XHRcdHRoaXMuZXJyb3JUZXh0ID0gJChyZXNwb25zZSkuZmluZCgnZXJyb3JzIGVycm9yJykuZXEoMCkudGV4dCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodHlwZW9mIHRoaXMuZXJyb3JDb2RlID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0Ly8gdGhlIEFQSSBkaWRuJ3QgbGlrZSB3aGF0IHdlIHRvbGQgaXQsIGUuZy4sIGJhZCBlZGl0IHRva2VuIG9yIGFuIGVycm9yIGNyZWF0aW5nIGEgcGFnZVxuXHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMucmV0dXJuRXJyb3IoY2FsbGVyQWpheFBhcmFtZXRlcnMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBpbnZva2Ugc3VjY2VzcyBjYWxsYmFjayBpZiBvbmUgd2FzIHN1cHBsaWVkXG5cdFx0XHRcdFx0aWYgKHRoaXMub25TdWNjZXNzKSB7XG5cdFx0XHRcdFx0XHQvLyBzZXQgdGhlIGNhbGxiYWNrIGNvbnRleHQgdG8gdGhpcy5wYXJlbnQgZm9yIG5ldyBjb2RlIGFuZCBzdXBwbHkgdGhlIEFQSSBvYmplY3Rcblx0XHRcdFx0XHRcdC8vIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgY2FsbGJhY2sgKGZvciBsZWdhY3kgY29kZSlcblx0XHRcdFx0XHRcdHRoaXMub25TdWNjZXNzLmNhbGwodGhpcy5wYXJlbnQsIHRoaXMpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlbGVtLmluZm8oJ+WujOaIkCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZCgpO1xuXHRcdFx0XHRcdHJldHVybiAkLkRlZmVycmVkKCkucmVzb2x2ZVdpdGgodGhpcy5wYXJlbnQsIFt0aGlzXSk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdC8vIG9ubHkgbmV0d29yayBhbmQgc2VydmVyIGVycm9ycyByZWFjaCBoZXJlIC0gY29tcGxhaW50cyBmcm9tIHRoZSBBUEkgaXRzZWxmIGFyZSBjYXVnaHQgaW4gc3VjY2VzcygpXG5cdFx0XHRcdGZ1bmN0aW9uIG9uQVBJZmFpbHVyZShlcnJvciwgc3RhdHVzVGV4dCwgZXJyb3JUaHJvd24pIHtcblx0XHRcdFx0XHR0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0O1xuXHRcdFx0XHRcdHRoaXMuZXJyb3JUaHJvd24gPSBlcnJvclRocm93bjsgLy8gZnJlcXVlbnRseSB1bmRlZmluZWRcblx0XHRcdFx0XHR0aGlzLmVycm9yVGV4dCA9XG5cdFx0XHRcdFx0XHRzdGF0dXNUZXh0ICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5Zyo6LCD55SoQVBJ5pe25Y+R55Sf5LqG6ZSZ6K+v4oCcJywgJ+WcqOWRvOWPq0FQSeaZgueZvOeUn+S6humMr+iqpOOAjCcpICtcblx0XHRcdFx0XHRcdGVycm9yLnN0YXR1c1RleHQgK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3jgIInLCAn44CN44CCJyk7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMucmV0dXJuRXJyb3IoKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9LFxuXHRcdHJldHVybkVycm9yKGNhbGxlckFqYXhQYXJhbWV0ZXJzKSB7XG5cdFx0XHRpZiAodGhpcy5lcnJvckNvZGUgPT09ICdiYWR0b2tlbicgJiYgIXRoaXMuYmFkdG9rZW5SZXRyeSkge1xuXHRcdFx0XHR0aGlzLnN0YXRlbGVtLndhcm4od2luZG93LndnVUxTKCfml6DmlYjku6TniYzvvIzojrflj5bmlrDnmoTku6TniYzlubbph43or5XigKbigKYnLCAn54Sh5pWI5qyK5p2W77yM5Y+W5b6X5paw55qE5qyK5p2W5Lim6YeN6Kmm4oCm4oCmJykpO1xuXHRcdFx0XHR0aGlzLmJhZHRva2VuUmV0cnkgPSB0cnVlO1xuXHRcdFx0XHQvLyBHZXQgYSBuZXcgQ1NSRiB0b2tlbiBhbmQgcmV0cnkuIElmIHRoZSBvcmlnaW5hbCBhY3Rpb24gbmVlZHMgYSBkaWZmZXJlbnRcblx0XHRcdFx0Ly8gdHlwZSBvZiBhY3Rpb24gdGhhbiBDU1JGLCB3ZSBkbyBvbmUgcG9pbnRsZXNzIHJldHJ5IGJlZm9yZSBiYWlsaW5nIG91dFxuXHRcdFx0XHRyZXR1cm4gTW9yZWJpdHMud2lraS5hcGkuZ2V0VG9rZW4oKS50aGVuKCh0b2tlbikgPT4ge1xuXHRcdFx0XHRcdHRoaXMucXVlcnkudG9rZW4gPSB0b2tlbjtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wb3N0KGNhbGxlckFqYXhQYXJhbWV0ZXJzKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnN0YXRlbGVtLmVycm9yKGAke3RoaXMuZXJyb3JUZXh0fe+8iCR7dGhpcy5lcnJvckNvZGV977yJYCk7XG5cdFx0XHQvLyBpbnZva2UgZmFpbHVyZSBjYWxsYmFjayBpZiBvbmUgd2FzIHN1cHBsaWVkXG5cdFx0XHRpZiAodGhpcy5vbkVycm9yKSB7XG5cdFx0XHRcdC8vIHNldCB0aGUgY2FsbGJhY2sgY29udGV4dCB0byB0aGlzLnBhcmVudCBmb3IgbmV3IGNvZGUgYW5kIHN1cHBseSB0aGUgQVBJIG9iamVjdFxuXHRcdFx0XHQvLyBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIGNhbGxiYWNrIGZvciBsZWdhY3kgY29kZVxuXHRcdFx0XHR0aGlzLm9uRXJyb3IuY2FsbCh0aGlzLnBhcmVudCwgdGhpcyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBkb24ndCBjb21wbGV0ZSB0aGUgYWN0aW9uIHNvIHRoYXQgdGhlIGVycm9yIHJlbWFpbnMgZGlzcGxheWVkXG5cdFx0XHRyZXR1cm4gJC5EZWZlcnJlZCgpLnJlamVjdFdpdGgodGhpcy5wYXJlbnQsIFt0aGlzXSk7XG5cdFx0fSxcblx0XHRnZXRTdGF0dXNFbGVtZW50KCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc3RhdGVsZW07XG5cdFx0fSxcblx0XHRnZXRFcnJvckNvZGUoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lcnJvckNvZGU7XG5cdFx0fSxcblx0XHRnZXRFcnJvclRleHQoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lcnJvclRleHQ7XG5cdFx0fSxcblx0XHRnZXRYTUwoKSB7XG5cdFx0XHQvLyByZXRhaW5lZCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHVzZSBnZXRSZXNwb25zZSgpIGluc3RlYWRcblx0XHRcdHJldHVybiB0aGlzLnJlc3BvbnNlWE1MO1xuXHRcdH0sXG5cdFx0Z2V0UmVzcG9uc2UoKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZXNwb25zZTtcblx0XHR9LFxuXHR9O1xuXHQvKipcblx0ICogUmV0cmlldmVzIHdpa2l0ZXh0IGZyb20gYSBwYWdlLiBDYWNoaW5nIGVuYWJsZWQsIGR1cmF0aW9uIDEgZGF5LlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVcblx0ICovXG5cdE1vcmViaXRzLndpa2kuZ2V0Q2FjaGVkSnNvbiA9ICh0aXRsZSkgPT4ge1xuXHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHR0aXRsZXM6IHRpdGxlLFxuXHRcdFx0cnZzbG90czogJ21haW4nLFxuXHRcdFx0cnZwcm9wOiAnY29udGVudCcsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdHNtYXhhZ2U6ICczNjAwJyxcblx0XHRcdG1heGFnZTogJzM2MDAnLFxuXHRcdH07XG5cblx0XHRyZXR1cm4gbmV3IE1vcmViaXRzLndpa2kuYXBpKCcnLCBxdWVyeSkucG9zdCgpLnRoZW4oKGFwaW9iaikgPT4ge1xuXHRcdFx0YXBpb2JqLmdldFN0YXR1c0VsZW1lbnQoKS51bmxpbmsoKTtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gYXBpb2JqLmdldFJlc3BvbnNlKCk7XG5cdFx0XHRjb25zdCB3aWtpdGV4dCA9IHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzWzBdLnJldmlzaW9uc1swXS5zbG90cy5tYWluLmNvbnRlbnQ7XG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZSh3aWtpdGV4dCk7XG5cdFx0fSk7XG5cdH07XG5cdGxldCBtb3JlYml0c1dpa2lBcGlVc2VyQWdlbnQgPSAnWXNBcmNoaXZlcy8xLjEgKG1vcmViaXRzLmpzKSc7XG5cdC8qKlxuXHQgKiBTZXQgdGhlIGN1c3RvbSB1c2VyIGFnZW50IGhlYWRlciwgd2hpY2ggaXMgdXNlZCBmb3Igc2VydmVyLXNpZGUgbG9nZ2luZy5cblx0ICogTm90ZSB0aGF0IGRvaW5nIHNvIHdpbGwgc2V0IHRoZSB1c2VyYWdlbnQgZm9yIGV2ZXJ5IGBNb3JlYml0cy53aWtpLmFwaWBcblx0ICogcHJvY2VzcyBwZXJmb3JtZWQgdGhlcmVhZnRlci5cblx0ICpcblx0ICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9saXN0cy53aWtpbWVkaWEub3JnL3BpcGVybWFpbC9tZWRpYXdpa2ktYXBpLWFubm91bmNlLzIwMTQtTm92ZW1iZXIvMDAwMDc1Lmh0bWx9XG5cdCAqIGZvciBvcmlnaW5hbCBhbm5vdW5jZW1lbnQuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpLmFwaVxuXHQgKiBAcGFyYW0ge3N0cmluZ30gW3VhPVlzQXJjaGl2ZXMvMS4xIChtb3JlYml0cy5qcyldIC0gVXNlciBhZ2VudC4gIFRoZSBkZWZhdWx0XG5cdCAqIHZhbHVlIG9mIGBtb3JlYml0cy5qc2Agd2lsbCBiZSBhcHBlbmRlZCB0byBhbnkgcHJvdmlkZWRcblx0ICogdmFsdWUuXG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLmFwaS5zZXRBcGlVc2VyQWdlbnQgPSAodWEpID0+IHtcblx0XHRtb3JlYml0c1dpa2lBcGlVc2VyQWdlbnQgPSBgWXNBcmNoaXZlcy8xLjEgKG1vcmViaXRzLmpzJHt1YSA/IGA7ICR7dWF9YCA6ICcnfSlgO1xuXHR9O1xuXHQvKipcblx0ICogQ2hhbmdlL3JldmlzaW9uIHRhZyBhcHBsaWVkIHRvIE1vcmViaXRzIGFjdGlvbnMgd2hlbiBubyBvdGhlciB0YWdzIGFyZSBzcGVjaWZpZWQuXG5cdCAqIFVudXNlZCBieSBkZWZhdWx0LlxuXHQgKlxuXHQgKiBAY29uc3RhbnRcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2kuYXBpXG5cdCAqIEB0eXBlIHtzdHJpbmd9XG5cdCAqL1xuXHRjb25zdCBtb3JlYml0c1dpa2lDaGFuZ2VUYWcgPSAnJztcblx0LyoqXG5cdCAqIEdldCBhIG5ldyBDU1JGIHRva2VuIG9uIGVuY291bnRlcmluZyB0b2tlbiBlcnJvcnMuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy53aWtpLmFwaVxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfSBNZWRpYVdpa2kgQ1NSRiB0b2tlbi5cblx0ICovXG5cdE1vcmViaXRzLndpa2kuYXBpLmdldFRva2VuID0gKCkgPT4ge1xuXHRcdGNvbnN0IHRva2VuQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKHdpbmRvdy53Z1VMUygn6I635Y+W5Luk54mMJywgJ+WPluW+l+asiuadlicpLCB7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdHR5cGU6ICdjc3JmJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdH0pO1xuXHRcdHJldHVybiB0b2tlbkFwaS5wb3N0KCkudGhlbigoYXBpb2JqKSA9PiB7XG5cdFx0XHRyZXR1cm4gYXBpb2JqLnJlc3BvbnNlLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW47XG5cdFx0fSk7XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMud2lraS5wYWdlICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIFVzZSB0aGUgTWVkaWFXaWtpIEFQSSB0byBsb2FkIGEgcGFnZSBhbmQgb3B0aW9uYWxseSBlZGl0IGl0LCBtb3ZlIGl0LCBldGMuXG5cdCAqXG5cdCAqIENhbGxlcnMgYXJlIG5vdCBwZXJtaXR0ZWQgdG8gZGlyZWN0bHkgYWNjZXNzIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgY2xhc3MhXG5cdCAqIEFsbCBwcm9wZXJ0eSBhY2Nlc3MgaXMgdGhyb3VnaCB0aGUgYXBwcm9wcmlhdGUgZ2V0X19fKCkgb3Igc2V0X19fKCkgbWV0aG9kLlxuXHQgKlxuXHQgKiBDYWxsZXJzIHNob3VsZCBzZXQge0BsaW5rIE1vcmViaXRzLndpa2kuYWN0aW9uQ29tcGxldGVkLm5vdGljZX0gYW5kIHtAbGluayBNb3JlYml0cy53aWtpLmFjdGlvbkNvbXBsZXRlZC5yZWRpcmVjdH1cblx0ICogYmVmb3JlIHRoZSBmaXJzdCBjYWxsIHRvIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2UubG9hZCgpfS5cblx0ICpcblx0ICogRWFjaCBvZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb25zIHRha2VzIG9uZSBwYXJhbWV0ZXIsIHdoaWNoIGlzIGFcblx0ICogcmVmZXJlbmNlIHRvIHRoZSBNb3JlYml0cy53aWtpLnBhZ2Ugb2JqZWN0IHRoYXQgcmVnaXN0ZXJlZCB0aGUgY2FsbGJhY2suXG5cdCAqIENhbGxiYWNrIGZ1bmN0aW9ucyBtYXkgaW52b2tlIGFueSBNb3JlYml0cy53aWtpLnBhZ2UgcHJvdG90eXBlIG1ldGhvZCB1c2luZyB0aGlzIHJlZmVyZW5jZS5cblx0ICpcblx0ICpcblx0ICogQ2FsbCBzZXF1ZW5jZSBmb3IgY29tbW9uIG9wZXJhdGlvbnMgKG9wdGlvbmFsIGZpbmFsIHVzZXIgY2FsbGJhY2tzIG5vdCBzaG93bik6XG5cdCAqXG5cdCAqIC0gRWRpdCBjdXJyZW50IGNvbnRlbnRzIG9mIGEgcGFnZSAobm8gZWRpdCBjb25mbGljdCk6XG5cdCAqIGAubG9hZCh1c2VyVGV4dEVkaXRDYWxsYmFjaykgLT4gY3R4LmxvYWRBcGkucG9zdCgpIC0+XG5cdCAqIGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mbkxvYWRTdWNjZXNzKCkgLT4gdXNlclRleHRFZGl0Q2FsbGJhY2soKSAtPlxuXHQgKiAuc2F2ZSgpIC0+IGN0eC5zYXZlQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPiBjdHguZm5TYXZlU3VjY2VzcygpYFxuXHQgKlxuXHQgKiAtIEVkaXQgY3VycmVudCBjb250ZW50cyBvZiBhIHBhZ2UgKHdpdGggZWRpdCBjb25mbGljdCk6XG5cdCAqIGAubG9hZCh1c2VyVGV4dEVkaXRDYWxsYmFjaykgLT4gY3R4LmxvYWRBcGkucG9zdCgpIC0+XG5cdCAqIGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mbkxvYWRTdWNjZXNzKCkgLT4gdXNlclRleHRFZGl0Q2FsbGJhY2soKSAtPlxuXHQgKiAuc2F2ZSgpIC0+IGN0eC5zYXZlQXBpLnBvc3QoKSAtPiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPlxuXHQgKiBjdHguZm5TYXZlRXJyb3IoKSAtPiBjdHgubG9hZEFwaS5wb3N0KCkgLT4gY3R4LmxvYWRBcGkucG9zdC5zdWNjZXNzKCkgLT5cblx0ICogY3R4LmZuTG9hZFN1Y2Nlc3MoKSAtPiB1c2VyVGV4dEVkaXRDYWxsYmFjaygpIC0+IC5zYXZlKCkgLT5cblx0ICogY3R4LnNhdmVBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+IGN0eC5mblNhdmVTdWNjZXNzKClgXG5cdCAqXG5cdCAqIC0gQXBwZW5kIHRvIGEgcGFnZSAoc2ltaWxhciBmb3IgcHJlcGVuZCBhbmQgbmV3U2VjdGlvbik6XG5cdCAqIGAuYXBwZW5kKCkgLT4gY3R4LmxvYWRBcGkucG9zdCgpIC0+IGN0eC5sb2FkQXBpLnBvc3Quc3VjY2VzcygpIC0+XG5cdCAqIGN0eC5mbkxvYWRTdWNjZXNzKCkgLT4gY3R4LmZuQXV0b1NhdmUoKSAtPiAuc2F2ZSgpIC0+IGN0eC5zYXZlQXBpLnBvc3QoKSAtPlxuXHQgKiBjdHgubG9hZEFwaS5wb3N0LnN1Y2Nlc3MoKSAtPiBjdHguZm5TYXZlU3VjY2VzcygpYFxuXHQgKlxuXHQgKiBOb3Rlczpcblx0ICogMS4gQWxsIGZ1bmN0aW9ucyBmb2xsb3dpbmcgTW9yZWJpdHMud2lraS5hcGkucG9zdCgpIGFyZSBpbnZva2VkIGFzeW5jaHJvbm91c2x5IGZyb20gdGhlIGpRdWVyeSBBSkFYIGxpYnJhcnkuXG5cdCAqIDIuIFRoZSBzZXF1ZW5jZSBmb3IgYXBwZW5kL3ByZXBlbmQvbmV3U2VjdGlvbiBjb3VsZCBiZSBzbGlnaHRseSBzaG9ydGVuZWQsXG5cdCAqIGJ1dCBpdCB3b3VsZCByZXF1aXJlIHNpZ25pZmljYW50IGR1cGxpY2F0aW9uIG9mIGNvZGUgZm9yIGxpdHRsZSBiZW5lZml0LlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IHBhZ2VOYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHBhZ2UsIHByZWZpeGVkIGJ5IHRoZSBuYW1lc3BhY2UgKGlmIGFueSkuXG5cdCAqIEZvciB0aGUgY3VycmVudCBwYWdlLCB1c2UgYG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKWAuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfE1vcmViaXRzLnN0YXR1c30gW3N0YXR1c10gLSBBIHN0cmluZyBkZXNjcmliaW5nIHRoZSBhY3Rpb24gYWJvdXQgdG8gYmUgdW5kZXJ0YWtlbixcblx0ICogb3IgYSBNb3JlYml0cy5zdGF0dXMgb2JqZWN0XG5cdCAqL1xuXHRNb3JlYml0cy53aWtpLnBhZ2UgPSBmdW5jdGlvbiAocGFnZU5hbWUsIHN0YXR1cykge1xuXHRcdHN0YXR1cyB8fD0gd2luZG93LndnVUxTKCfmiZPlvIDpobXpnaLigJwnLCAn5omT6ZaL6aCB6Z2i44CMJykgKyBwYWdlTmFtZSArIHdpbmRvdy53Z1VMUygn4oCdJywgJ+OAjScpO1xuXHRcdC8qKlxuXHRcdCAqIFByaXZhdGUgY29udGV4dCB2YXJpYWJsZXMuXG5cdFx0ICpcblx0XHQgKiBUaGlzIGNvbnRleHQgaXMgbm90IHZpc2libGUgdG8gdGhlIG91dHNpZGUsIHRodXMgYWxsIHRoZSBkYXRhIGhlcmVcblx0XHQgKiBtdXN0IGJlIGFjY2Vzc2VkIHZpYSBnZXR0ZXIgYW5kIHNldHRlciBmdW5jdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBAcHJpdmF0ZVxuXHRcdCAqL1xuXHRcdGNvbnN0IGN0eCA9IHtcblx0XHRcdC8vIGJhY2tpbmcgZmllbGRzIGZvciBwdWJsaWMgcHJvcGVydGllc1xuXHRcdFx0cGFnZU5hbWUsXG5cdFx0XHRwYWdlRXhpc3RzOiBmYWxzZSxcblx0XHRcdGVkaXRTdW1tYXJ5OiBudWxsLFxuXHRcdFx0Y2hhbmdlVGFnczogbnVsbCxcblx0XHRcdHRlc3RBY3Rpb25zOiBudWxsLFxuXHRcdFx0Ly8gYXJyYXkgaWYgYW55IHZhbGlkIGFjdGlvbnNcblx0XHRcdGNhbGxiYWNrUGFyYW1ldGVyczogbnVsbCxcblx0XHRcdHN0YXR1c0VsZW1lbnQ6IHN0YXR1cyBpbnN0YW5jZW9mIE1vcmViaXRzLnN0YXR1cyA/IHN0YXR1cyA6IG5ldyBNb3JlYml0cy5zdGF0dXMoc3RhdHVzKSxcblx0XHRcdC8vIC0gZWRpdFxuXHRcdFx0cGFnZVRleHQ6IG51bGwsXG5cdFx0XHRlZGl0TW9kZTogJ2FsbCcsXG5cdFx0XHQvLyBzYXZlKCkgcmVwbGFjZXMgZW50aXJlIGNvbnRlbnRzIG9mIHRoZSBwYWdlIGJ5IGRlZmF1bHRcblx0XHRcdGFwcGVuZFRleHQ6IG51bGwsXG5cdFx0XHQvLyBjYW4ndCByZXVzZSBwYWdlVGV4dCBmb3IgdGhpcyBiZWNhdXNlIHBhZ2VUZXh0IGlzIG5lZWRlZCB0byBmb2xsb3cgYSByZWRpcmVjdFxuXHRcdFx0cHJlcGVuZFRleHQ6IG51bGwsXG5cdFx0XHQvLyBjYW4ndCByZXVzZSBwYWdlVGV4dCBmb3IgdGhpcyBiZWNhdXNlIHBhZ2VUZXh0IGlzIG5lZWRlZCB0byBmb2xsb3cgYSByZWRpcmVjdFxuXHRcdFx0bmV3U2VjdGlvblRleHQ6IG51bGwsXG5cdFx0XHRuZXdTZWN0aW9uVGl0bGU6IG51bGwsXG5cdFx0XHRjcmVhdGVPcHRpb246IG51bGwsXG5cdFx0XHRtaW5vckVkaXQ6IGZhbHNlLFxuXHRcdFx0Ym90RWRpdDogZmFsc2UsXG5cdFx0XHRwYWdlU2VjdGlvbjogbnVsbCxcblx0XHRcdG1heENvbmZsaWN0UmV0cmllczogMixcblx0XHRcdG1heFJldHJpZXM6IDIsXG5cdFx0XHRmb2xsb3dSZWRpcmVjdDogZmFsc2UsXG5cdFx0XHRmb2xsb3dDcm9zc05zUmVkaXJlY3Q6IHRydWUsXG5cdFx0XHR3YXRjaGxpc3RPcHRpb246ICdub2NoYW5nZScsXG5cdFx0XHR3YXRjaGxpc3RFeHBpcnk6IG51bGwsXG5cdFx0XHRjcmVhdG9yOiBudWxsLFxuXHRcdFx0dGltZXN0YW1wOiBudWxsLFxuXHRcdFx0Ly8gLSByZXZlcnRcblx0XHRcdHJldmVydE9sZElEOiBudWxsLFxuXHRcdFx0Ly8gLSBtb3ZlXG5cdFx0XHRtb3ZlRGVzdGluYXRpb246IG51bGwsXG5cdFx0XHRtb3ZlVGFsa1BhZ2U6IGZhbHNlLFxuXHRcdFx0bW92ZVN1YnBhZ2VzOiBmYWxzZSxcblx0XHRcdG1vdmVTdXBwcmVzc1JlZGlyZWN0OiBmYWxzZSxcblx0XHRcdC8vIC0gcHJvdGVjdFxuXHRcdFx0cHJvdGVjdEVkaXQ6IG51bGwsXG5cdFx0XHRwcm90ZWN0TW92ZTogbnVsbCxcblx0XHRcdHByb3RlY3RDcmVhdGU6IG51bGwsXG5cdFx0XHRwcm90ZWN0Q2FzY2FkZTogbnVsbCxcblx0XHRcdC8vIC0gY3JlYXRpb24gbG9va3VwXG5cdFx0XHRsb29rdXBOb25SZWRpcmVjdENyZWF0b3I6IGZhbHNlLFxuXHRcdFx0Ly8gaW50ZXJuYWwgc3RhdHVzXG5cdFx0XHRwYWdlTG9hZGVkOiBmYWxzZSxcblx0XHRcdGNzcmZUb2tlbjogbnVsbCxcblx0XHRcdGxvYWRUaW1lOiBudWxsLFxuXHRcdFx0bGFzdEVkaXRUaW1lOiBudWxsLFxuXHRcdFx0cGFnZUlEOiBudWxsLFxuXHRcdFx0Y29udGVudE1vZGVsOiBudWxsLFxuXHRcdFx0cmV2ZXJ0Q3VySUQ6IG51bGwsXG5cdFx0XHRyZXZlcnRVc2VyOiBudWxsLFxuXHRcdFx0d2F0Y2hlZDogZmFsc2UsXG5cdFx0XHRmdWxseVByb3RlY3RlZDogZmFsc2UsXG5cdFx0XHRzdXBwcmVzc1Byb3RlY3RXYXJuaW5nOiBmYWxzZSxcblx0XHRcdGNvbmZsaWN0UmV0cmllczogMCxcblx0XHRcdHJldHJpZXM6IDAsXG5cdFx0XHQvLyBjYWxsYmFja3Ncblx0XHRcdG9uTG9hZFN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvbkxvYWRGYWlsdXJlOiBudWxsLFxuXHRcdFx0b25TYXZlU3VjY2VzczogbnVsbCxcblx0XHRcdG9uU2F2ZUZhaWx1cmU6IG51bGwsXG5cdFx0XHRvbkxvb2t1cENyZWF0aW9uU3VjY2VzczogbnVsbCxcblx0XHRcdG9uTG9va3VwQ3JlYXRpb25GYWlsdXJlOiBudWxsLFxuXHRcdFx0b25Nb3ZlU3VjY2VzczogbnVsbCxcblx0XHRcdG9uTW92ZUZhaWx1cmU6IG51bGwsXG5cdFx0XHRvbkRlbGV0ZVN1Y2Nlc3M6IG51bGwsXG5cdFx0XHRvbkRlbGV0ZUZhaWx1cmU6IG51bGwsXG5cdFx0XHRvblVuZGVsZXRlU3VjY2VzczogbnVsbCxcblx0XHRcdG9uVW5kZWxldGVGYWlsdXJlOiBudWxsLFxuXHRcdFx0b25Qcm90ZWN0U3VjY2VzczogbnVsbCxcblx0XHRcdG9uUHJvdGVjdEZhaWx1cmU6IG51bGwsXG5cdFx0XHQvLyBpbnRlcm5hbCBvYmplY3RzXG5cdFx0XHRsb2FkUXVlcnk6IG51bGwsXG5cdFx0XHRsb2FkQXBpOiBudWxsLFxuXHRcdFx0c2F2ZUFwaTogbnVsbCxcblx0XHRcdGxvb2t1cENyZWF0aW9uQXBpOiBudWxsLFxuXHRcdFx0bW92ZUFwaTogbnVsbCxcblx0XHRcdG1vdmVQcm9jZXNzQXBpOiBudWxsLFxuXHRcdFx0cGF0cm9sQXBpOiBudWxsLFxuXHRcdFx0cGF0cm9sUHJvY2Vzc0FwaTogbnVsbCxcblx0XHRcdGRlbGV0ZUFwaTogbnVsbCxcblx0XHRcdGRlbGV0ZVByb2Nlc3NBcGk6IG51bGwsXG5cdFx0XHR1bmRlbGV0ZUFwaTogbnVsbCxcblx0XHRcdHVuZGVsZXRlUHJvY2Vzc0FwaTogbnVsbCxcblx0XHRcdHByb3RlY3RBcGk6IG51bGwsXG5cdFx0XHRwcm90ZWN0UHJvY2Vzc0FwaTogbnVsbCxcblx0XHR9O1xuXHRcdGNvbnN0IGVtcHR5RnVuY3Rpb24gPSAoKSA9PiB7fTtcblx0XHQvKipcblx0XHQgKiBMb2FkcyB0aGUgdGV4dCBmb3IgdGhlIHBhZ2UuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvblN1Y2Nlc3MgLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbG9hZCBoYXMgc3VjY2VlZGVkLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgY2FsbGVkIHdoZW4gdGhlIGxvYWQgZmFpbHMuXG5cdFx0ICovXG5cdFx0dGhpcy5sb2FkID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25Mb2FkU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHQvLyBOZWVkIHRvIGJlIGFibGUgdG8gZG8gc29tZXRoaW5nIGFmdGVyIHRoZSBwYWdlIGxvYWRzXG5cdFx0XHRpZiAoIW9uU3VjY2Vzcykge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IG5vIG9uU3VjY2VzcyBjYWxsYmFjayBwcm92aWRlZCB0byBsb2FkKCkhJyk7XG5cdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHgubG9hZFF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6ICdpbmZvfHJldmlzaW9ucycsXG5cdFx0XHRcdGlucHJvcDogJ3dhdGNoZWQnLFxuXHRcdFx0XHRpbnRlc3RhY3Rpb25zOiAnZWRpdCcsXG5cdFx0XHRcdC8vIGNhbiBiZSBleHBhbmRlZFxuXHRcdFx0XHRjdXJ0aW1lc3RhbXA6ICcnLFxuXHRcdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdFx0dHlwZTogJ2NzcmYnLFxuXHRcdFx0XHR0aXRsZXM6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdC8vIGRvbid0IG5lZWQgcnZsaW1pdD0xIGJlY2F1c2Ugd2UgZG9uJ3QgbmVlZCBydnN0YXJ0aWQgaGVyZSBhbmQgb25seSBvbmUgYWN0dWFsIHJldiBpcyByZXR1cm5lZCBieSBkZWZhdWx0XG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoY3R4LmVkaXRNb2RlID09PSAnYWxsJykge1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LnJ2cHJvcCA9ICdjb250ZW50fHRpbWVzdGFtcCc7IC8vIGdldCB0aGUgcGFnZSBjb250ZW50IGF0IHRoZSBzYW1lIHRpbWUsIGlmIG5lZWRlZFxuXHRcdFx0fSBlbHNlIGlmIChjdHguZWRpdE1vZGUgPT09ICdyZXZlcnQnKSB7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucnZwcm9wID0gJ3RpbWVzdGFtcCc7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucnZsaW1pdCA9IDE7XG5cdFx0XHRcdGN0eC5sb2FkUXVlcnkucnZzdGFydGlkID0gY3R4LnJldmVydE9sZElEO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5mb2xsb3dSZWRpcmVjdCkge1xuXHRcdFx0XHRjdHgubG9hZFF1ZXJ5LnJlZGlyZWN0cyA9ICcnOyAvLyBmb2xsb3cgYWxsIHJlZGlyZWN0c1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIGN0eC5wYWdlU2VjdGlvbiA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5ydnNlY3Rpb24gPSBjdHgucGFnZVNlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRpZiAoTW9yZWJpdHMudXNlcklzU3lzb3ApIHtcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeS5pbnByb3AgKz0gJ3xwcm90ZWN0aW9uJztcblx0XHRcdH1cblx0XHRcdGN0eC5sb2FkQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aKk+WPlumhtemdouKApuKApicsICfmipPlj5bpoIHpnaLigKbigKYnKSxcblx0XHRcdFx0Y3R4LmxvYWRRdWVyeSxcblx0XHRcdFx0Zm5Mb2FkU3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LmxvYWRBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LmxvYWRBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2F2ZXMgdGhlIHRleHQgZm9yIHRoZSBwYWdlIHRvIFdpa2lwZWRpYS5cblx0XHQgKiBNdXN0IGJlIHByZWNlZGVkIGJ5IHN1Y2Nlc3NmdWxseSBjYWxsaW5nIGBsb2FkKClgLlxuXHRcdCAqXG5cdFx0ICogV2FybmluZzogQ2FsbGluZyBgc2F2ZSgpYCBjYW4gcmVzdWx0IGluIGFkZGl0aW9uYWwgY2FsbHMgdG8gdGhlXG5cdFx0ICogcHJldmlvdXMgYGxvYWQoKWAgY2FsbGJhY2tzIHRvIHJlY292ZXIgZnJvbSBlZGl0IGNvbmZsaWN0cyEgSW4gdGhpc1xuXHRcdCAqIGNhc2UsIGNhbGxlcnMgbXVzdCBtYWtlIHRoZSBzYW1lIGVkaXQgdG8gdGhlIG5ldyBwYWdlVGV4dCBhbmRcblx0XHQgKiByZS1pbnZva2UgYHNhdmUoKWAuICBUaGlzIGJlaGF2aW9yIGNhbiBiZSBkaXNhYmxlZCB3aXRoXG5cdFx0ICogYHNldE1heENvbmZsaWN0UmV0cmllcygwKWAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBzYXZlIGhhcyBzdWNjZWVkZWQuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgc2F2ZSBmYWlscy5cblx0XHQgKi9cblx0XHR0aGlzLnNhdmUgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdC8vIGFyZSB3ZSBnZXR0aW5nIG91ciBlZGl0aW5nIHRva2VuIGZyb20gbXcudXNlci50b2tlbnM/XG5cdFx0XHRjb25zdCBjYW5Vc2VNd1VzZXJUb2tlbiA9IGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKTtcblx0XHRcdGlmICghY3R4LnBhZ2VMb2FkZWQgJiYgIWNhblVzZU13VXNlclRva2VuKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogYXR0ZW1wdCB0byBzYXZlIGEgcGFnZSB0aGF0IGhhcyBub3QgYmVlbiBsb2FkZWQhJyk7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC5lZGl0U3VtbWFyeSkge1xuXHRcdFx0XHQvLyBuZXcgc2VjdGlvbiBtb2RlIGFsbG93cyAobmF5LCBlbmNvdXJhZ2VzKSB1c2luZyB0aGVcblx0XHRcdFx0Ly8gdGl0bGUgYXMgdGhlIGVkaXQgc3VtbWFyeSwgYnV0IHRoZSBxdWVyeSBuZWVkc1xuXHRcdFx0XHQvLyBlZGl0U3VtbWFyeSB0byBiZSB1bmRlZmluZWQgb3IgJycsIG5vdCBudWxsXG5cdFx0XHRcdGlmIChjdHguZWRpdE1vZGUgPT09ICduZXcnICYmIGN0eC5uZXdTZWN0aW9uVGl0bGUpIHtcblx0XHRcdFx0XHRjdHguZWRpdFN1bW1hcnkgPSAnJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IGVkaXQgc3VtbWFyeSBub3Qgc2V0IGJlZm9yZSBzYXZlIScpO1xuXHRcdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ly8gc2hvdWxkbid0IGhhcHBlbiBpZiBjYW5Vc2VNd1VzZXJUb2tlbiA9PT0gdHJ1ZVxuXHRcdFx0aWYgKFxuXHRcdFx0XHRjdHguZnVsbHlQcm90ZWN0ZWQgJiZcblx0XHRcdFx0IWN0eC5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nICYmXG5cdFx0XHRcdCFjb25maXJtKFxuXHRcdFx0XHRcdGN0eC5mdWxseVByb3RlY3RlZCA9PT0gJ2luZmluaXR5J1xuXHRcdFx0XHRcdFx0PyB3aW5kb3cud2dVTFMoJ+aCqOWNs+Wwhue8lui+keWFqOS/neaKpOmhtemdouKAnCcsICfmgqjljbPlsIfnt6jovK/lhajkv53orbfpoIHpnaLjgIwnKSArXG5cdFx0XHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0XHQn4oCd77yI5peg6ZmQ5pyf77yJ44CCXFxuXFxu5Y2V5Ye756Gu5a6a5Lul56Gu5a6a77yM5oiW5Y2V5Ye75Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJyxcblx0XHRcdFx0XHRcdFx0XHRcdCfjgI3vvIjnhKHpmZDmnJ/vvInjgIJcXG5cXG7pu57mk4rnorrlrprku6XnorrlrprvvIzmiJbpu57mk4rlj5bmtojku6Xlj5bmtojmk43kvZzjgIInXG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0OiBgJHtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aCqOWNs+Wwhue8lui+keWFqOS/neaKpOmhtemdouKAnCcsICfmgqjljbPlsIfnt6jovK/lhajkv53orbfpoIHpnaLjgIwnKSArXG5cdFx0XHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAne+8iOWIsOacn++8micsICfjgI3vvIjliLDmnJ/vvJonKSArXG5cdFx0XHRcdFx0XHRcdFx0bmV3IE1vcmViaXRzLmRhdGUoY3R4LmZ1bGx5UHJvdGVjdGVkKS5jYWxlbmRhcigndXRjJylcblx0XHRcdFx0XHRcdFx0fSAoVVRDKe+8ieOAglxcblxcbiR7d2luZG93LndnVUxTKFxuXHRcdFx0XHRcdFx0XHRcdCfljZXlh7vnoa7lrprku6Xnoa7lrprvvIzmiJbljZXlh7vlj5bmtojku6Xlj5bmtojmk43kvZzjgIInLFxuXHRcdFx0XHRcdFx0XHRcdCfpu57mk4rnorrlrprku6XnorrlrprvvIzmiJbpu57mk4rlj5bmtojku6Xlj5bmtojmk43kvZzjgIInXG5cdFx0XHRcdFx0XHRcdCl9YFxuXHRcdFx0XHQpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCflt7Llj5bmtojlr7nlhajkv53miqTpobXpnaLnmoTnvJbovpHjgIInLCAn5bey5Y+W5raI5bCN5YWo5L+d6K236aCB6Z2i55qE57eo6Lyv44CCJykpO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnJldHJpZXMgPSAwO1xuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHR0aXRsZTogY3R4LnBhZ2VOYW1lLFxuXHRcdFx0XHRzdW1tYXJ5OiBjdHguZWRpdFN1bW1hcnksXG5cdFx0XHRcdHRva2VuOiBjYW5Vc2VNd1VzZXJUb2tlbiA/IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJykgOiBjdHguY3NyZlRva2VuLFxuXHRcdFx0XHR3YXRjaGxpc3Q6IGN0eC53YXRjaGxpc3RPcHRpb24sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm5BcHBseVdhdGNobGlzdEV4cGlyeSgpKSB7XG5cdFx0XHRcdHF1ZXJ5LndhdGNobGlzdGV4cGlyeSA9IGN0eC53YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIGN0eC5wYWdlU2VjdGlvbiA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0cXVlcnkuc2VjdGlvbiA9IGN0eC5wYWdlU2VjdGlvbjtcblx0XHRcdH1cblx0XHRcdC8vIFNldCBtaW5vciBlZGl0IGF0dHJpYnV0ZS4gSWYgdGhlc2UgcGFyYW1ldGVycyBhcmUgcHJlc2VudCB3aXRoIGFueSB2YWx1ZSwgaXQgaXMgaW50ZXJwcmV0ZWQgYXMgdHJ1ZVxuXHRcdFx0aWYgKGN0eC5taW5vckVkaXQpIHtcblx0XHRcdFx0cXVlcnkubWlub3IgPSB0cnVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cXVlcnkubm90bWlub3IgPSB0cnVlOyAvLyBmb3JjZSBUd2lua2xlIGNvbmZpZyB0byBvdmVycmlkZSB1c2VyIHByZWZlcmVuY2Ugc2V0dGluZyBmb3IgXCJhbGwgZWRpdHMgYXJlIG1pbm9yXCJcblx0XHRcdH1cblx0XHRcdC8vIFNldCBib3QgZWRpdCBhdHRyaWJ1dGUuIElmIHRoaXMgcGFyYW1ldGVyIGlzIHByZXNlbnQgd2l0aCBhbnkgdmFsdWUsIGl0IGlzIGludGVycHJldGVkIGFzIHRydWVcblx0XHRcdGlmIChjdHguYm90RWRpdCkge1xuXHRcdFx0XHRxdWVyeS5ib3QgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0c3dpdGNoIChjdHguZWRpdE1vZGUpIHtcblx0XHRcdFx0Y2FzZSAnYXBwZW5kJzpcblx0XHRcdFx0XHRpZiAoY3R4LmFwcGVuZFRleHQgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogYXBwZW5kIHRleHQgbm90IHNldCBiZWZvcmUgc2F2ZSEnKTtcblx0XHRcdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRxdWVyeS5hcHBlbmR0ZXh0ID0gY3R4LmFwcGVuZFRleHQ7IC8vIHVzZSBtb2RlIHRvIGFwcGVuZCB0byBjdXJyZW50IHBhZ2UgY29udGVudHNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncHJlcGVuZCc6XG5cdFx0XHRcdFx0aWYgKGN0eC5wcmVwZW5kVGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBwcmVwZW5kIHRleHQgbm90IHNldCBiZWZvcmUgc2F2ZSEnKTtcblx0XHRcdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRxdWVyeS5wcmVwZW5kdGV4dCA9IGN0eC5wcmVwZW5kVGV4dDsgLy8gdXNlIG1vZGUgdG8gcHJlcGVuZCB0byBjdXJyZW50IHBhZ2UgY29udGVudHNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnbmV3Jzpcblx0XHRcdFx0XHRpZiAoIWN0eC5uZXdTZWN0aW9uVGV4dCkge1xuXHRcdFx0XHRcdFx0Ly8gQVBJIGRvZXNuJ3QgYWxsb3cgZW1wdHkgbmV3IHNlY3Rpb24gdGV4dFxuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoJ0ludGVybmFsIGVycm9yOiBuZXcgc2VjdGlvbiB0ZXh0IG5vdCBzZXQgYmVmb3JlIHNhdmUhJyk7XG5cdFx0XHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cXVlcnkuc2VjdGlvbiA9ICduZXcnO1xuXHRcdFx0XHRcdHF1ZXJ5LnRleHQgPSBjdHgubmV3U2VjdGlvblRleHQ7IC8vIGFkZCBhIG5ldyBzZWN0aW9uIHRvIGN1cnJlbnQgcGFnZVxuXHRcdFx0XHRcdHF1ZXJ5LnNlY3Rpb250aXRsZSA9IGN0eC5uZXdTZWN0aW9uVGl0bGUgfHwgY3R4LmVkaXRTdW1tYXJ5OyAvLyBkb25lIGJ5IHRoZSBBUEksIGJ1dCBub24tJycgdmFsdWVzIHdvdWxkIGdldCB0cmVhdGVkIGFzIHRleHRcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAncmV2ZXJ0Jzpcblx0XHRcdFx0XHRxdWVyeS51bmRvID0gY3R4LnJldmVydEN1cklEO1xuXHRcdFx0XHRcdHF1ZXJ5LnVuZG9hZnRlciA9IGN0eC5yZXZlcnRPbGRJRDtcblx0XHRcdFx0XHRpZiAoY3R4Lmxhc3RFZGl0VGltZSkge1xuXHRcdFx0XHRcdFx0cXVlcnkuYmFzZXRpbWVzdGFtcCA9IGN0eC5sYXN0RWRpdFRpbWU7IC8vIGNoZWNrIHRoYXQgcGFnZSBoYXNuJ3QgYmVlbiBlZGl0ZWQgc2luY2UgaXQgd2FzIGxvYWRlZFxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHF1ZXJ5LnN0YXJ0dGltZXN0YW1wID0gY3R4LmxvYWRUaW1lOyAvLyBjaGVjayB0aGF0IHBhZ2UgaGFzbid0IGJlZW4gZGVsZXRlZCBzaW5jZSBpdCB3YXMgbG9hZGVkIChkb24ndCByZWNyZWF0ZSBiYWQgc3R1ZmYpXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Ly8gJ2FsbCdcblx0XHRcdFx0XHRxdWVyeS50ZXh0ID0gY3R4LnBhZ2VUZXh0OyAvLyByZXBsYWNlIGVudGlyZSBjb250ZW50cyBvZiB0aGUgcGFnZVxuXHRcdFx0XHRcdGlmIChjdHgubGFzdEVkaXRUaW1lKSB7XG5cdFx0XHRcdFx0XHRxdWVyeS5iYXNldGltZXN0YW1wID0gY3R4Lmxhc3RFZGl0VGltZTsgLy8gY2hlY2sgdGhhdCBwYWdlIGhhc24ndCBiZWVuIGVkaXRlZCBzaW5jZSBpdCB3YXMgbG9hZGVkXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cXVlcnkuc3RhcnR0aW1lc3RhbXAgPSBjdHgubG9hZFRpbWU7IC8vIGNoZWNrIHRoYXQgcGFnZSBoYXNuJ3QgYmVlbiBkZWxldGVkIHNpbmNlIGl0IHdhcyBsb2FkZWQgKGRvbid0IHJlY3JlYXRlIGJhZCBzdHVmZilcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGlmIChbJ3JlY3JlYXRlJywgJ2NyZWF0ZW9ubHknLCAnbm9jcmVhdGUnXS5pbmNsdWRlcyhjdHguY3JlYXRlT3B0aW9uKSkge1xuXHRcdFx0XHRxdWVyeVtjdHguY3JlYXRlT3B0aW9uXSA9ICcnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGNhblVzZU13VXNlclRva2VuICYmIGN0eC5mb2xsb3dSZWRpcmVjdCkge1xuXHRcdFx0XHRxdWVyeS5yZWRpcmVjdCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0XHRjdHguc2F2ZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfkv53lrZjpobXpnaLigKbigKYnLCAn5YSy5a2Y6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRmblNhdmVTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Zm5TYXZlRXJyb3Jcblx0XHRcdCk7XG5cdFx0XHRjdHguc2F2ZUFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHguc2F2ZUFwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBBZGRzIHRoZSB0ZXh0IHByb3ZpZGVkIHZpYSBgc2V0QXBwZW5kVGV4dCgpYCB0byB0aGUgZW5kIG9mIHRoZVxuXHRcdCAqIHBhZ2UuICBEb2VzIG5vdCByZXF1aXJlIGNhbGxpbmcgYGxvYWQoKWAgZmlyc3QsIHVubGVzcyBhIHdhdGNobGlzdFxuXHRcdCAqIGV4cGlyeSBpcyB1c2VkLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGhhcyBzdWNjZWVkZWQuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGZhaWxzLlxuXHRcdCAqL1xuXHRcdHRoaXMuYXBwZW5kID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnYXBwZW5kJztcblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdlZGl0JykpIHtcblx0XHRcdFx0dGhpcy5zYXZlKG9uU3VjY2Vzcywgb25GYWlsdXJlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0XHRjdHgub25TYXZlRmFpbHVyZSA9IG9uRmFpbHVyZSB8fCBlbXB0eUZ1bmN0aW9uO1xuXHRcdFx0XHR0aGlzLmxvYWQoZm5BdXRvU2F2ZSwgY3R4Lm9uU2F2ZUZhaWx1cmUpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQWRkcyB0aGUgdGV4dCBwcm92aWRlZCB2aWEgYHNldFByZXBlbmRUZXh0KClgIHRvIHRoZSBzdGFydCBvZiB0aGVcblx0XHQgKiBwYWdlLiAgRG9lcyBub3QgcmVxdWlyZSBjYWxsaW5nIGBsb2FkKClgIGZpcnN0LCB1bmxlc3MgYSB3YXRjaGxpc3Rcblx0XHQgKiBleHBpcnkgaXMgdXNlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259ICBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgaGFzIHN1Y2NlZWRlZC5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGZhaWxzLlxuXHRcdCAqL1xuXHRcdHRoaXMucHJlcGVuZCA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ3ByZXBlbmQnO1xuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ2VkaXQnKSkge1xuXHRcdFx0XHR0aGlzLnNhdmUob25TdWNjZXNzLCBvbkZhaWx1cmUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4Lm9uU2F2ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlID0gb25GYWlsdXJlIHx8IGVtcHR5RnVuY3Rpb247XG5cdFx0XHRcdHRoaXMubG9hZChmbkF1dG9TYXZlLCBjdHgub25TYXZlRmFpbHVyZSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBDcmVhdGVzIGEgbmV3IHNlY3Rpb24gd2l0aCB0aGUgdGV4dCBwcm92aWRlZCBieSBgc2V0TmV3U2VjdGlvblRleHQoKWBcblx0XHQgKiBhbmQgc2VjdGlvbiB0aXRsZSBmcm9tIGBzZXROZXdTZWN0aW9uVGl0bGUoKWAuXG5cdFx0ICogSWYgYGVkaXRTdW1tYXJ5YCBpcyBwcm92aWRlZCwgdGhhdCB3aWxsIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGVcblx0XHQgKiBhdXRvZ2VuZXJhdGVkIFwiLT5UaXRsZSAobmV3IHNlY3Rpb25cIiBlZGl0IHN1bW1hcnkuXG5cdFx0ICogRG9lcyBub3QgcmVxdWlyZSBjYWxsaW5nIGBsb2FkKClgIGZpcnN0LCB1bmxlc3MgYSB3YXRjaGxpc3QgZXhwaXJ5XG5cdFx0ICogaXMgdXNlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259ICBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCB3aGVuIHRoZSBtZXRob2QgaGFzIHN1Y2NlZWRlZC5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSAgW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGUgbWV0aG9kIGZhaWxzLlxuXHRcdCAqL1xuXHRcdHRoaXMubmV3U2VjdGlvbiA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4LmVkaXRNb2RlID0gJ25ldyc7XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZWRpdCcpKSB7XG5cdFx0XHRcdHRoaXMuc2F2ZShvblN1Y2Nlc3MsIG9uRmFpbHVyZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHgub25TYXZlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdFx0dGhpcy5sb2FkKGZuQXV0b1NhdmUsIGN0eC5vblNhdmVGYWlsdXJlKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgbG9hZGVkIHBhZ2UsIGluY2x1ZGluZyB0aGUgbmFtZXNwYWNlICovXG5cdFx0dGhpcy5nZXRQYWdlTmFtZSA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgucGFnZU5hbWU7XG5cdFx0fTtcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gVGhlIHRleHQgb2YgdGhlIHBhZ2UgYWZ0ZXIgYSBzdWNjZXNzZnVsIGxvYWQoKSAqL1xuXHRcdHRoaXMuZ2V0UGFnZVRleHQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnBhZ2VUZXh0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBwYWdlVGV4dCAtIFVwZGF0ZWQgcGFnZSB0ZXh0IHRoYXQgd2lsbCBiZSBzYXZlZCB3aGVuIGBzYXZlKClgIGlzIGNhbGxlZCAqL1xuXHRcdHRoaXMuc2V0UGFnZVRleHQgPSAocGFnZVRleHQpID0+IHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdhbGwnO1xuXHRcdFx0Y3R4LnBhZ2VUZXh0ID0gcGFnZVRleHQ7XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtzdHJpbmd9IGFwcGVuZFRleHQgLSBUZXh0IHRoYXQgd2lsbCBiZSBhcHBlbmRlZCB0byB0aGUgcGFnZSB3aGVuIGBhcHBlbmQoKWAgaXMgY2FsbGVkICovXG5cdFx0dGhpcy5zZXRBcHBlbmRUZXh0ID0gKGFwcGVuZFRleHQpID0+IHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdhcHBlbmQnO1xuXHRcdFx0Y3R4LmFwcGVuZFRleHQgPSBhcHBlbmRUZXh0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBwcmVwZW5kVGV4dCAtIFRleHQgdGhhdCB3aWxsIGJlIHByZXBlbmRlZCB0byB0aGUgcGFnZSB3aGVuIGBwcmVwZW5kKClgIGlzIGNhbGxlZCAqL1xuXHRcdHRoaXMuc2V0UHJlcGVuZFRleHQgPSAocHJlcGVuZFRleHQpID0+IHtcblx0XHRcdGN0eC5lZGl0TW9kZSA9ICdwcmVwZW5kJztcblx0XHRcdGN0eC5wcmVwZW5kVGV4dCA9IHByZXBlbmRUZXh0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBuZXdTZWN0aW9uVGV4dCAtIFRleHQgdGhhdCB3aWxsIGJlIGFkZGVkIGluIGEgbmV3IHNlY3Rpb24gb24gdGhlIHBhZ2Ugd2hlbiBgbmV3U2VjdGlvbigpYCBpcyBjYWxsZWQgKi9cblx0XHR0aGlzLnNldE5ld1NlY3Rpb25UZXh0ID0gKG5ld1NlY3Rpb25UZXh0KSA9PiB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnbmV3Jztcblx0XHRcdGN0eC5uZXdTZWN0aW9uVGV4dCA9IG5ld1NlY3Rpb25UZXh0O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5ld1NlY3Rpb25UaXRsZSAtIFRpdGxlIGZvciB0aGUgbmV3IHNlY3Rpb24gY3JlYXRlZCB3aGVuIGBuZXdTZWN0aW9uKClgIGlzIGNhbGxlZFxuXHRcdCAqIElmIG1pc3NpbmcsIGBjdHguZWRpdFN1bW1hcnlgIHdpbGwgYmUgdXNlZC4gSXNzdWVzIG1heSBvY2N1ciBpZiBhIHN1YnN0aXR1dGVkIHRlbXBsYXRlIGlzIHVzZWQuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXROZXdTZWN0aW9uVGl0bGUgPSAobmV3U2VjdGlvblRpdGxlKSA9PiB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnbmV3Jztcblx0XHRcdGN0eC5uZXdTZWN0aW9uVGl0bGUgPSBuZXdTZWN0aW9uVGl0bGU7XG5cdFx0fTtcblx0XHQvLyBFZGl0LXJlbGF0ZWQgc2V0dGVyIG1ldGhvZHM6XG5cdFx0LyoqXG5cdFx0ICogU2V0IHRoZSBlZGl0IHN1bW1hcnkgdGhhdCB3aWxsIGJlIHVzZWQgd2hlbiBgc2F2ZSgpYCBpcyBjYWxsZWQuXG5cdFx0ICogVW5uZWNlc3NhcnkgaWYgZWRpdE1vZGUgaXMgJ25ldycgYW5kIG5ld1NlY3Rpb25UaXRsZSBpcyBwcm92aWRlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdW1tYXJ5XG5cdFx0ICovXG5cdFx0dGhpcy5zZXRFZGl0U3VtbWFyeSA9IChzdW1tYXJ5KSA9PiB7XG5cdFx0XHRjdHguZWRpdFN1bW1hcnkgPSBzdW1tYXJ5O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2V0IGFueSBjdXN0b20gdGFnKHMpIHRvIGJlIGFwcGxpZWQgdG8gdGhlIEFQSSBhY3Rpb24uXG5cdFx0ICogQSBudW1iZXIgb2YgYWN0aW9ucyBkb24ndCBzdXBwb3J0IGl0LCBtb3N0IG5vdGFibHkgd2F0Y2guXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gdGFncyAtIFN0cmluZyBvciBhcnJheSBvZiB0YWcocykuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRDaGFuZ2VUYWdzID0gKHRhZ3MpID0+IHtcblx0XHRcdGN0eC5jaGFuZ2VUYWdzID0gdGFncztcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbY3JlYXRlT3B0aW9uPW51bGxdIC0gQ2FuIHRha2UgdGhlIGZvbGxvd2luZyBmb3VyIHZhbHVlczpcblx0XHQgKiAtIHJlY3JlYXRlOiBjcmVhdGUgdGhlIHBhZ2UgaWYgaXQgZG9lcyBub3QgZXhpc3QsIG9yIGVkaXQgaXQgaWYgaXQgZXhpc3RzLlxuXHRcdCAqIC0gY3JlYXRlb25seTogY3JlYXRlIHRoZSBwYWdlIGlmIGl0IGRvZXMgbm90IGV4aXN0LCBidXQgcmV0dXJuIGFuXG5cdFx0ICogZXJyb3IgaWYgaXQgYWxyZWFkeSBleGlzdHMuXG5cdFx0ICogLSBub2NyZWF0ZTogZG9uJ3QgY3JlYXRlIHRoZSBwYWdlLCBvbmx5IGVkaXQgaXQgaWYgaXQgYWxyZWFkeSBleGlzdHMuXG5cdFx0ICogLSBgbnVsbGA6IGNyZWF0ZSB0aGUgcGFnZSBpZiBpdCBkb2VzIG5vdCBleGlzdCwgdW5sZXNzIGl0IHdhcyBkZWxldGVkXG5cdFx0ICogaW4gdGhlIG1vbWVudCBiZXR3ZWVuIGxvYWRpbmcgdGhlIHBhZ2UgYW5kIHNhdmluZyB0aGUgZWRpdCAoZGVmYXVsdCkuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRDcmVhdGVPcHRpb24gPSAoY3JlYXRlT3B0aW9uKSA9PiB7XG5cdFx0XHRjdHguY3JlYXRlT3B0aW9uID0gY3JlYXRlT3B0aW9uO1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gbWlub3JFZGl0IC0gU2V0IHRydWUgdG8gbWFyayB0aGUgZWRpdCBhcyBhIG1pbm9yIGVkaXQuICovXG5cdFx0dGhpcy5zZXRNaW5vckVkaXQgPSAobWlub3JFZGl0KSA9PiB7XG5cdFx0XHRjdHgubWlub3JFZGl0ID0gbWlub3JFZGl0O1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gYm90RWRpdCAtIFNldCB0cnVlIHRvIG1hcmsgdGhlIGVkaXQgYXMgYSBib3QgZWRpdCAqL1xuXHRcdHRoaXMuc2V0Qm90RWRpdCA9IChib3RFZGl0KSA9PiB7XG5cdFx0XHRjdHguYm90RWRpdCA9IGJvdEVkaXQ7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gcGFnZVNlY3Rpb24gLSBJbnRlZ2VyIHNwZWNpZnlpbmcgdGhlIHNlY3Rpb24gbnVtYmVyIHRvIGxvYWQgb3Igc2F2ZS5cblx0XHQgKiBJZiBzcGVjaWZpZWQgYXMgYG51bGxgLCB0aGUgZW50aXJlIHBhZ2Ugd2lsbCBiZSByZXRyaWV2ZWQuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRQYWdlU2VjdGlvbiA9IChwYWdlU2VjdGlvbikgPT4ge1xuXHRcdFx0Y3R4LnBhZ2VTZWN0aW9uID0gcGFnZVNlY3Rpb247XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbWF4Q29uZmxpY3RSZXRyaWVzIC0gTnVtYmVyIG9mIHJldHJpZXMgZm9yIHNhdmUgZXJyb3JzIGludm9sdmluZyBhbiBlZGl0IGNvbmZsaWN0IG9yXG5cdFx0ICogbG9zcyBvZiB0b2tlbi4gRGVmYXVsdDogMi5cblx0XHQgKi9cblx0XHR0aGlzLnNldE1heENvbmZsaWN0UmV0cmllcyA9IChtYXhDb25mbGljdFJldHJpZXMpID0+IHtcblx0XHRcdGN0eC5tYXhDb25mbGljdFJldHJpZXMgPSBtYXhDb25mbGljdFJldHJpZXM7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbWF4UmV0cmllcyAtIE51bWJlciBvZiByZXRyaWVzIGZvciBzYXZlIGVycm9ycyBub3QgaW52b2x2aW5nIGFuIGVkaXQgY29uZmxpY3Qgb3Jcblx0XHQgKiBsb3NzIG9mIHRva2VuLiBEZWZhdWx0OiAyLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0TWF4UmV0cmllcyA9IChtYXhSZXRyaWVzKSA9PiB7XG5cdFx0XHRjdHgubWF4UmV0cmllcyA9IG1heFJldHJpZXM7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTZXQgd2hldGhlciBhbmQgaG93IHRvIHdhdGNoIHRoZSBwYWdlLCBpbmNsdWRpbmcgc2V0dGluZyBhbiBleHBpcnkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW58c3RyaW5nfE1vcmViaXRzLmRhdGV8RGF0ZX0gW3dhdGNobGlzdE9wdGlvbj1mYWxzZV0gLVxuXHRcdCAqIEJhc2ljYWxseSBhIG1peCBvZiBNVyBBUEkgYW5kIFR3aW5rbGV5IG9wdGlvbnMgYXZhaWxhYmxlIHByZS1leHBpcnk6XG5cdFx0ICogLSBgdHJ1ZWB8YCd5ZXMnYHxgJ3dhdGNoJ2A6IHBhZ2Ugd2lsbCBiZSBhZGRlZCB0byB0aGUgdXNlcidzXG5cdFx0ICogd2F0Y2hsaXN0IHdoZW4gdGhlIGFjdGlvbiBpcyBjYWxsZWQuIERlZmF1bHRzIHRvIGFuIGluZGVmaW5pdGVcblx0XHQgKiB3YXRjaCB1bmxlc3MgYHdhdGNobGlzdEV4cGlyeWAgaXMgcHJvdmlkZWQuXG5cdFx0ICogLSBgZmFsc2VgfGAnbm8nYHxgJ25vY2hhbmdlJ2A6IHdhdGNobGlzdCBzdGF0dXMgb2YgdGhlIHBhZ2UgKGluY2x1ZGluZyBleHBpcnkpIHdpbGwgbm90IGJlIGNoYW5nZWQuXG5cdFx0ICogLSBgJ2RlZmF1bHQnYHxgJ3ByZWZlcmVuY2VzJ2A6IHdhdGNobGlzdCBzdGF0dXMgb2YgdGhlIHBhZ2Ugd2lsbCBiZVxuXHRcdCAqIHNldCBiYXNlZCBvbiB0aGUgdXNlcidzIHByZWZlcmVuY2Ugc2V0dGluZ3Mgd2hlbiB0aGUgYWN0aW9uIGlzXG5cdFx0ICogY2FsbGVkLiBEZWZhdWx0cyB0byBhbiBpbmRlZmluaXRlIHdhdGNoIHVubGVzcyBgd2F0Y2hsaXN0RXhwaXJ5YCBpc1xuXHRcdCAqIHByb3ZpZGVkLlxuXHRcdCAqIC0gYCd1bndhdGNoJ2A6IGV4cGxpY2l0bHkgdW53YXRjaCB0aGUgcGFnZS5cblx0XHQgKiAtIEFueSBvdGhlciBgc3RyaW5nYCBvciBgbnVtYmVyYCwgb3IgYSBgTW9yZWJpdHMuZGF0ZWAgb3IgYERhdGVgXG5cdFx0ICogb2JqZWN0OiB3YXRjaCBwYWdlIHVudGlsIHRoZSBzcGVjaWZpZWQgdGltZSwgZGVmZXJyaW5nIHRvXG5cdFx0ICogYHdhdGNobGlzdEV4cGlyeWAgaWYgcHJvdmlkZWQuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfE1vcmViaXRzLmRhdGV8RGF0ZX0gW3dhdGNobGlzdEV4cGlyeT1pbmZpbml0eV0gLVxuXHRcdCAqIEEgZGF0ZS1saWtlIHN0cmluZyBvciBudW1iZXIsIG9yIGEgZGF0ZSBvYmplY3QuICBJZiBhIHN0cmluZyBvciBudW1iZXIsXG5cdFx0ICogY2FuIGJlIHJlbGF0aXZlICgyIHdlZWtzKSBvciBvdGhlciBzaW1pbGFybHkgZGF0ZS1saWtlIChpLmUuIE5PVCBcInBvdGF0b1wiKTpcblx0XHQgKiBJU08gODYwMTogMjAzOC0wMS0wOVQwMzoxNDowN1pcblx0XHQgKiBNZWRpYVdpa2k6IDIwMzgwMTA5MDMxNDA3XG5cdFx0ICogVU5JWDogMjE0NzQ4MzY0N1xuXHRcdCAqIFNRTDogMjAzOC0wMS0wOSAwMzoxNDowN1xuXHRcdCAqIENhbiBhbHNvIGJlIGBpbmZpbml0eWAgb3IgaW5maW5pdHktbGlrZSAoYGluZmluaXRlYCwgYGluZGVmaW5pdGVgLCBhbmQgYG5ldmVyYCkuXG5cdFx0ICogU2VlIHtAbGluayBodHRwczovL3BoYWJyaWNhdG9yLndpa2ltZWRpYS5vcmcvc291cmNlL21lZGlhd2lraS1saWJzLVRpbWVzdGFtcC9icm93c2UvbWFzdGVyL3NyYy9Db252ZXJ0aWJsZVRpbWVzdGFtcC5waHA7NGU1M2I4NTlhOTU4MGM1NTk1ODA3OGY0NmRkNGYzYTQ0ZDBmY2FhMCQ1Ny0xMDk/YXM9c291cmNlJmJsYW1lPW9mZn1cblx0XHQgKi9cblx0XHR0aGlzLnNldFdhdGNobGlzdCA9ICh3YXRjaGxpc3RPcHRpb24sIHdhdGNobGlzdEV4cGlyeSkgPT4ge1xuXHRcdFx0aWYgKHdhdGNobGlzdE9wdGlvbiBpbnN0YW5jZW9mIE1vcmViaXRzLmRhdGUgfHwgd2F0Y2hsaXN0T3B0aW9uIGluc3RhbmNlb2YgRGF0ZSkge1xuXHRcdFx0XHR3YXRjaGxpc3RPcHRpb24gPSB3YXRjaGxpc3RPcHRpb24udG9JU09TdHJpbmcoKTtcblx0XHRcdH1cblx0XHRcdGlmICh3YXRjaGxpc3RFeHBpcnkgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR3YXRjaGxpc3RFeHBpcnkgPSAnaW5maW5pdHknO1xuXHRcdFx0fSBlbHNlIGlmICh3YXRjaGxpc3RFeHBpcnkgaW5zdGFuY2VvZiBNb3JlYml0cy5kYXRlIHx8IHdhdGNobGlzdEV4cGlyeSBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdFx0d2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5LnRvSVNPU3RyaW5nKCk7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHdhdGNobGlzdE9wdGlvbikge1xuXHRcdFx0XHRjYXNlICdub2NoYW5nZSc6XG5cdFx0XHRcdGNhc2UgJ25vJzpcblx0XHRcdFx0Y2FzZSBmYWxzZTpcblx0XHRcdFx0Y2FzZSB1bmRlZmluZWQ6XG5cdFx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICdub2NoYW5nZSc7XG5cdFx0XHRcdFx0Ly8gVGhlIE1XIEFQSSBhbGxvd3MgZm9yIGNoYW5naW5nIGV4cGlyeSB3aXRoIG5vY2hhbmdlIChhcyBcIm5vY2hhbmdlXCIgcmVmZXJzIHRvIHRoZSBiaW5hcnkgc3RhdHVzKSxcblx0XHRcdFx0XHQvLyBidXQgYnkga2VlcGluZyB0aGlzIG51bGwgaXQgd2lsbCBkZWZhdWx0IHRvIGFueSBleGlzdGluZyBleHBpcnksIGVuc3VyZSB0aGVyZSBpcyBhY3R1YWxseSBcIm5vIGNoYW5nZS5cIlxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RFeHBpcnkgPSBudWxsO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd1bndhdGNoJzpcblx0XHRcdFx0XHQvLyBleHBpcnkgdW5pbXBvcnRhbnRcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3Vud2F0Y2gnO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdwcmVmZXJlbmNlcyc6XG5cdFx0XHRcdGNhc2UgJ2RlZmF1bHQnOlxuXHRcdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAncHJlZmVyZW5jZXMnO1xuXHRcdFx0XHRcdC8vIFRoZSBBUEkgYWxsb3dzIGFuIGV4cGlyeSBoZXJlLCBidXQgdGhlcmUgaXMgYXMgb2YgeWV0IChUMjY1NzE2KVxuXHRcdFx0XHRcdC8vIG5vIGV4cGlyeSBwcmVmZXJlbmNlIG9wdGlvbiwgc28gaXQncyBhIGJpdCBkZXZvaWQgb2YgY29udGV4dC5cblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICd3YXRjaCc6XG5cdFx0XHRcdGNhc2UgJ3llcyc6XG5cdFx0XHRcdGNhc2UgdHJ1ZTpcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3dhdGNoJztcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0RXhwaXJ5O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIE5vdCByZWFsbHkgYSBcImRlZmF1bHRcIiBwZXIgc2UgYnV0IGNhdGNoZXMgXCJhbnkgb3RoZXIgc3RyaW5nXCJcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0T3B0aW9uID0gJ3dhdGNoJztcblx0XHRcdFx0XHRjdHgud2F0Y2hsaXN0RXhwaXJ5ID0gd2F0Y2hsaXN0T3B0aW9uO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogU2V0IGEgd2F0Y2hsaXN0IGV4cGlyeS4gc2V0V2F0Y2hsaXN0IGNhbiBtb3N0bHkgaGFuZGxlIHRoaXMgYnlcblx0XHQgKiBpdHNlbGYsIHNvIHRoaXMgaXMgaGVyZSBsYXJnZWx5IGZvciBjb21wbGV0ZW5lc3MgYW5kIGNvbXBhdGliaWxpdHlcblx0XHQgKiB3aXRoIHRoZSBmdWxsIHN1aXRlIG9mIG9wdGlvbnMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ8TW9yZWJpdHMuZGF0ZXxEYXRlfSBbd2F0Y2hsaXN0RXhwaXJ5PWluZmluaXR5XSAtXG5cdFx0ICogQSBkYXRlLWxpa2Ugc3RyaW5nIG9yIG51bWJlciwgb3IgYSBkYXRlIG9iamVjdC4gIElmIGEgc3RyaW5nIG9yIG51bWJlcixcblx0XHQgKiBjYW4gYmUgcmVsYXRpdmUgKDIgd2Vla3MpIG9yIG90aGVyIHNpbWlsYXJseSBkYXRlLWxpa2UgKGkuZS4gTk9UIFwicG90YXRvXCIpOlxuXHRcdCAqIElTTyA4NjAxOiAyMDM4LTAxLTA5VDAzOjE0OjA3WlxuXHRcdCAqIE1lZGlhV2lraTogMjAzODAxMDkwMzE0MDdcblx0XHQgKiBVTklYOiAyMTQ3NDgzNjQ3XG5cdFx0ICogU1FMOiAyMDM4LTAxLTA5IDAzOjE0OjA3XG5cdFx0ICogQ2FuIGFsc28gYmUgYGluZmluaXR5YCBvciBpbmZpbml0eS1saWtlIChgaW5maW5pdGVgLCBgaW5kZWZpbml0ZWAsIGFuZCBgbmV2ZXJgKS5cblx0XHQgKiBTZWUge0BsaW5rIGh0dHBzOi8vcGhhYnJpY2F0b3Iud2lraW1lZGlhLm9yZy9zb3VyY2UvbWVkaWF3aWtpLWxpYnMtVGltZXN0YW1wL2Jyb3dzZS9tYXN0ZXIvc3JjL0NvbnZlcnRpYmxlVGltZXN0YW1wLnBocDs0ZTUzYjg1OWE5NTgwYzU1OTU4MDc4ZjQ2ZGQ0ZjNhNDRkMGZjYWEwJDU3LTEwOT9hcz1zb3VyY2UmYmxhbWU9b2ZmfVxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0V2F0Y2hsaXN0RXhwaXJ5ID0gKHdhdGNobGlzdEV4cGlyeSkgPT4ge1xuXHRcdFx0aWYgKHdhdGNobGlzdEV4cGlyeSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHdhdGNobGlzdEV4cGlyeSA9ICdpbmZpbml0eSc7XG5cdFx0XHR9IGVsc2UgaWYgKHdhdGNobGlzdEV4cGlyeSBpbnN0YW5jZW9mIE1vcmViaXRzLmRhdGUgfHwgd2F0Y2hsaXN0RXhwaXJ5IGluc3RhbmNlb2YgRGF0ZSkge1xuXHRcdFx0XHR3YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RFeHBpcnkudG9JU09TdHJpbmcoKTtcblx0XHRcdH1cblx0XHRcdGN0eC53YXRjaGxpc3RFeHBpcnkgPSB3YXRjaGxpc3RFeHBpcnk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAZGVwcmVjYXRlZCBBcyBvZiBEZWNlbWJlciAyMDIwLCB1c2Ugc2V0V2F0Y2hsaXN0LlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3dhdGNobGlzdE9wdGlvbj1mYWxzZV0gLVxuXHRcdCAqIC0gYFRydWVgOiBwYWdlIHdhdGNobGlzdCBzdGF0dXMgd2lsbCBiZSBzZXQgYmFzZWQgb24gdGhlIHVzZXInc1xuXHRcdCAqIHByZWZlcmVuY2Ugc2V0dGluZ3Mgd2hlbiBgc2F2ZSgpYCBpcyBjYWxsZWQuXG5cdFx0ICogLSBgRmFsc2VgOiB3YXRjaGxpc3Qgc3RhdHVzIG9mIHRoZSBwYWdlIHdpbGwgbm90IGJlIGNoYW5nZWQuXG5cdFx0ICpcblx0XHQgKiBXYXRjaGxpc3Qgbm90ZXM6XG5cdFx0ICogMS4gVGhlIE1lZGlhV2lraSBBUEkgdmFsdWUgb2YgJ3Vud2F0Y2gnLCB3aGljaCBleHBsaWNpdGx5IHJlbW92ZXNcblx0XHQgKiB0aGUgcGFnZSBmcm9tIHRoZSB1c2VyJ3Mgd2F0Y2hsaXN0LCBpcyBub3QgdXNlZC5cblx0XHQgKiAyLiBJZiBib3RoIGBzZXRXYXRjaGxpc3QoKWAgYW5kIGBzZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMoKWAgYXJlXG5cdFx0ICogY2FsbGVkLCB0aGUgbGFzdCBjYWxsIHRha2VzIHByaW9yaXR5LlxuXHRcdCAqIDMuIFR3aW5rbGUgbW9kdWxlcyBzaG91bGQgdXNlIHRoZSBhcHByb3ByaWF0ZSBwcmVmZXJlbmNlIHRvIHNldCB0aGUgd2F0Y2hsaXN0IG9wdGlvbnMuXG5cdFx0ICogNC4gTW9zdCBUd2lua2xlIG1vZHVsZXMgdXNlIGBzZXRXYXRjaGxpc3QoKWAuIGBzZXRXYXRjaGxpc3RGcm9tUHJlZmVyZW5jZXMoKWBcblx0XHQgKiBpcyBvbmx5IG5lZWRlZCBmb3IgdGhlIGZldyBUd2lua2xlIHdhdGNobGlzdCBwcmVmZXJlbmNlcyB0aGF0XG5cdFx0ICogYWNjZXB0IGEgc3RyaW5nIHZhbHVlIG9mIGBkZWZhdWx0YC5cblx0XHQgKi9cblx0XHR0aGlzLnNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcyA9ICh3YXRjaGxpc3RPcHRpb24pID0+IHtcblx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0J1tNb3JlYml0c10gTk9URTogTW9yZWJpdHMud2lraS5wYWdlLnNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcyB3YXMgZGVwcmVjYXRlZCBEZWNlbWJlciAyMDIwLCBwbGVhc2UgdXNlIHNldFdhdGNobGlzdCdcblx0XHRcdCk7XG5cdFx0XHRpZiAod2F0Y2hsaXN0T3B0aW9uKSB7XG5cdFx0XHRcdGN0eC53YXRjaGxpc3RPcHRpb24gPSAncHJlZmVyZW5jZXMnO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4LndhdGNobGlzdE9wdGlvbiA9ICdub2NoYW5nZSc7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtmb2xsb3dSZWRpcmVjdD1mYWxzZV0gLVxuXHRcdCAqIC0gYHRydWVgOiBhIG1heGltdW0gb2Ygb25lIHJlZGlyZWN0IHdpbGwgYmUgZm9sbG93ZWQuIEluIHRoZSBldmVudFxuXHRcdCAqIG9mIGEgcmVkaXJlY3QsIGEgbWVzc2FnZSBpcyBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIgYW5kIHRoZSByZWRpcmVjdFxuXHRcdCAqIHRhcmdldCBjYW4gYmUgcmV0cmlldmVkIHdpdGggZ2V0UGFnZU5hbWUoKS5cblx0XHQgKiAtIGBmYWxzZWA6IChkZWZhdWx0KSB0aGUgcmVxdWVzdGVkIHBhZ2VOYW1lIHdpbGwgYmUgdXNlZCB3aXRob3V0IHJlZ2FyZCB0byBhbnkgcmVkaXJlY3QuXG5cdFx0ICogQHBhcmFtIHtib29sZWFufSBbZm9sbG93Q3Jvc3NOc1JlZGlyZWN0PXRydWVdIC0gTm90IGFwcGxpY2FibGUgaWYgYGZvbGxvd1JlZGlyZWN0YCBpcyBub3Qgc2V0IHRydWUuXG5cdFx0ICogLSBgdHJ1ZWA6IChkZWZhdWx0KSBmb2xsb3cgcmVkaXJlY3QgZXZlbiBpZiBpdCBpcyBhIGNyb3NzLW5hbWVzcGFjZSByZWRpcmVjdFxuXHRcdCAqIC0gYGZhbHNlYDogZG9uJ3QgZm9sbG93IHJlZGlyZWN0IGlmIGl0IGlzIGNyb3NzLW5hbWVzcGFjZSwgZWRpdCB0aGUgcmVkaXJlY3QgaXRzZWxmLlxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0Rm9sbG93UmVkaXJlY3QgPSAoZm9sbG93UmVkaXJlY3QsIGZvbGxvd0Nyb3NzTnNSZWRpcmVjdCkgPT4ge1xuXHRcdFx0aWYgKGN0eC5wYWdlTG9hZGVkKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdCdJbnRlcm5hbCBlcnJvcjogY2Fubm90IGNoYW5nZSByZWRpcmVjdCBzZXR0aW5nIGFmdGVyIHRoZSBwYWdlIGhhcyBiZWVuIGxvYWRlZCEnXG5cdFx0XHRcdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5mb2xsb3dSZWRpcmVjdCA9IGZvbGxvd1JlZGlyZWN0O1xuXHRcdFx0Y3R4LmZvbGxvd0Nyb3NzTnNSZWRpcmVjdCA9XG5cdFx0XHRcdGZvbGxvd0Nyb3NzTnNSZWRpcmVjdCA9PT0gdW5kZWZpbmVkID8gY3R4LmZvbGxvd0Nyb3NzTnNSZWRpcmVjdCA6IGZvbGxvd0Nyb3NzTnNSZWRpcmVjdDtcblx0XHR9O1xuXHRcdC8vIGxvb2t1cC1jcmVhdGlvbiBzZXR0ZXIgZnVuY3Rpb25cblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IGZsYWcgLSBJZiBzZXQgdHJ1ZSwgdGhlIGF1dGhvciBhbmQgdGltZXN0YW1wIG9mXG5cdFx0ICogdGhlIGZpcnN0IG5vbi1yZWRpcmVjdCB2ZXJzaW9uIG9mIHRoZSBwYWdlIGlzIHJldHJpZXZlZC5cblx0XHQgKlxuXHRcdCAqIFdhcm5pbmc6XG5cdFx0ICogMS4gSWYgdGhlcmUgYXJlIG5vIHJldmlzaW9ucyBhbW9uZyB0aGUgZmlyc3QgNTAgdGhhdCBhcmVcblx0XHQgKiBub24tcmVkaXJlY3RzLCBvciBpZiB0aGVyZSBhcmUgbGVzcyA1MCByZXZpc2lvbnMgYW5kIGFsbCBhcmVcblx0XHQgKiByZWRpcmVjdHMsIHRoZSBvcmlnaW5hbCBjcmVhdGlvbiBpcyByZXRyaWV2ZWQuXG5cdFx0ICogMi4gUmV2aXNpb25zIHRoYXQgdGhlIHVzZXIgaXMgbm90IHByaXZpbGVnZWQgdG8gYWNjZXNzXG5cdFx0ICogKHJldmRlbGVkL3N1cHByZXNzZWQpIHdpbGwgYmUgdHJlYXRlZCBhcyBub24tcmVkaXJlY3RzLlxuXHRcdCAqIDMuIE11c3Qgbm90IGJlIHVzZWQgd2hlbiB0aGUgcGFnZSBoYXMgYSBub24td2lraXRleHQgY29udGVudG1vZGVsXG5cdFx0ICogc3VjaCBhcyBNb2R1bGVzcGFjZSBMdWEgb3IgdXNlciBKYXZhU2NyaXB0L0NTUy5cblx0XHQgKi9cblx0XHR0aGlzLnNldExvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciA9IChmbGFnKSA9PiB7XG5cdFx0XHRjdHgubG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yID0gZmxhZztcblx0XHR9O1xuXHRcdC8vIE1vdmUtcmVsYXRlZCBzZXR0ZXIgZnVuY3Rpb25zXG5cdFx0LyoqIEBwYXJhbSB7c3RyaW5nfSBkZXN0aW5hdGlvbiAqL1xuXHRcdHRoaXMuc2V0TW92ZURlc3RpbmF0aW9uID0gKGRlc3RpbmF0aW9uKSA9PiB7XG5cdFx0XHRjdHgubW92ZURlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG5cdFx0fTtcblx0XHQvKiogQHBhcmFtIHtib29sZWFufSBmbGFnICovXG5cdFx0dGhpcy5zZXRNb3ZlVGFsa1BhZ2UgPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4Lm1vdmVUYWxrUGFnZSA9ICEhZmxhZztcblx0XHR9O1xuXHRcdC8qKiBAcGFyYW0ge2Jvb2xlYW59IGZsYWcgKi9cblx0XHR0aGlzLnNldE1vdmVTdWJwYWdlcyA9IChmbGFnKSA9PiB7XG5cdFx0XHRjdHgubW92ZVN1YnBhZ2VzID0gISFmbGFnO1xuXHRcdH07XG5cdFx0LyoqIEBwYXJhbSB7Ym9vbGVhbn0gZmxhZyAqL1xuXHRcdHRoaXMuc2V0TW92ZVN1cHByZXNzUmVkaXJlY3QgPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4Lm1vdmVTdXBwcmVzc1JlZGlyZWN0ID0gISFmbGFnO1xuXHRcdH07XG5cdFx0Ly8gUHJvdGVjdC1yZWxhdGVkIHNldHRlciBmdW5jdGlvbnNcblx0XHQvKipcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbGV2ZWwgLSBUaGUgcmlnaHQgcmVxdWlyZWQgZm9yIHRoZSBzcGVjaWZpYyBhY3Rpb25cblx0XHQgKiBlLmcuIHN5c29wLCB0ZW1wbGF0ZWVkaXRvciwgYXV0b2NvbmZpcm1lZFxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbZXhwaXJ5PWluZmluaXR5XVxuXHRcdCAqL1xuXHRcdHRoaXMuc2V0RWRpdFByb3RlY3Rpb24gPSAobGV2ZWwsIGV4cGlyeSkgPT4ge1xuXHRcdFx0Y3R4LnByb3RlY3RFZGl0ID0ge1xuXHRcdFx0XHRsZXZlbCxcblx0XHRcdFx0ZXhwaXJ5OiBleHBpcnkgfHwgJ2luZmluaXR5Jyxcblx0XHRcdH07XG5cdFx0fTtcblx0XHR0aGlzLnNldE1vdmVQcm90ZWN0aW9uID0gKGxldmVsLCBleHBpcnkpID0+IHtcblx0XHRcdGN0eC5wcm90ZWN0TW92ZSA9IHtcblx0XHRcdFx0bGV2ZWwsXG5cdFx0XHRcdGV4cGlyeTogZXhwaXJ5IHx8ICdpbmZpbml0eScsXG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0dGhpcy5zZXRDcmVhdGVQcm90ZWN0aW9uID0gKGxldmVsLCBleHBpcnkpID0+IHtcblx0XHRcdGN0eC5wcm90ZWN0Q3JlYXRlID0ge1xuXHRcdFx0XHRsZXZlbCxcblx0XHRcdFx0ZXhwaXJ5OiBleHBpcnkgfHwgJ2luZmluaXR5Jyxcblx0XHRcdH07XG5cdFx0fTtcblx0XHR0aGlzLnNldENhc2NhZGluZ1Byb3RlY3Rpb24gPSAoZmxhZykgPT4ge1xuXHRcdFx0Y3R4LnByb3RlY3RDYXNjYWRlID0gISFmbGFnO1xuXHRcdH07XG5cdFx0dGhpcy5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nID0gKCkgPT4ge1xuXHRcdFx0Y3R4LnN1cHByZXNzUHJvdGVjdFdhcm5pbmcgPSB0cnVlO1xuXHRcdH07XG5cdFx0Ly8gUmV2ZXJ0LXJlbGF0ZWQgZ2V0dGVycy9zZXR0ZXJzOlxuXHRcdHRoaXMuc2V0T2xkSUQgPSAob2xkSUQpID0+IHtcblx0XHRcdGN0eC5yZXZlcnRPbGRJRCA9IG9sZElEO1xuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjdXJyZW50IHJldmlzaW9uIElEIG9mIHRoZSBwYWdlICovXG5cdFx0dGhpcy5nZXRDdXJyZW50SUQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnJldmVydEN1cklEO1xuXHRcdH07XG5cdFx0LyoqIEByZXR1cm5zIHtzdHJpbmd9IExhc3QgZWRpdG9yIG9mIHRoZSBwYWdlICovXG5cdFx0dGhpcy5nZXRSZXZpc2lvblVzZXIgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnJldmVydFVzZXI7XG5cdFx0fTtcblx0XHQvKiogQHJldHVybnMge3N0cmluZ30gSVNPIDg2MDEgdGltZXN0YW1wIGF0IHdoaWNoIHRoZSBwYWdlIHdhcyBsYXN0IGVkaXRlZC4gKi9cblx0XHR0aGlzLmdldExhc3RFZGl0VGltZSA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgubGFzdEVkaXRUaW1lO1xuXHRcdH07XG5cdFx0Ly8gTWlzY2VsbGFuZW91cyBnZXR0ZXJzL3NldHRlcnM6XG5cdFx0LyoqXG5cdFx0ICogRGVmaW5lIGFuIG9iamVjdCBmb3IgdXNlIGluIGEgY2FsbGJhY2sgZnVuY3Rpb24uXG5cdFx0ICpcblx0XHQgKiBgY2FsbGJhY2tQYXJhbWV0ZXJzYCBpcyBmb3IgdXNlIGJ5IHRoZSBjYWxsZXIgb25seS4gVGhlIHBhcmFtZXRlcnNcblx0XHQgKiBhbGxvdyBhIGNhbGxlciB0byBwYXNzIHRoZSBwcm9wZXIgY29udGV4dCBpbnRvIGl0cyBjYWxsYmFja1xuXHRcdCAqIGZ1bmN0aW9uLiAgQ2FsbGVycyBtdXN0IGVuc3VyZSB0aGF0IGFueSBjaGFuZ2VzIHRvIHRoZVxuXHRcdCAqIGNhbGxiYWNrUGFyYW1ldGVycyBvYmplY3Qgd2l0aGluIGEgYGxvYWQoKWAgY2FsbGJhY2sgc3RpbGwgcGVybWl0IGFcblx0XHQgKiBwcm9wZXIgcmUtZW50cnkgaW50byB0aGUgYGxvYWQoKWAgY2FsbGJhY2sgaWYgYW4gZWRpdCBjb25mbGljdCBpc1xuXHRcdCAqIGRldGVjdGVkIHVwb24gY2FsbGluZyBgc2F2ZSgpYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7T2JqZWN0fSBjYWxsYmFja1BhcmFtZXRlcnNcblx0XHQgKi9cblx0XHR0aGlzLnNldENhbGxiYWNrUGFyYW1ldGVycyA9IChjYWxsYmFja1BhcmFtZXRlcnMpID0+IHtcblx0XHRcdGN0eC5jYWxsYmFja1BhcmFtZXRlcnMgPSBjYWxsYmFja1BhcmFtZXRlcnM7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBAcmV0dXJucyB7T2JqZWN0fSAtIFRoZSBvYmplY3QgcHJldmlvdXNseSBzZXQgYnkgYHNldENhbGxiYWNrUGFyYW1ldGVycygpYC5cblx0XHQgKi9cblx0XHR0aGlzLmdldENhbGxiYWNrUGFyYW1ldGVycyA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguY2FsbGJhY2tQYXJhbWV0ZXJzO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHBhcmFtIHtNb3JlYml0cy5zdGF0dXN9IHN0YXR1c0VsZW1lbnRcblx0XHQgKi9cblx0XHR0aGlzLnNldFN0YXR1c0VsZW1lbnQgPSAoc3RhdHVzRWxlbWVudCkgPT4ge1xuXHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQgPSBzdGF0dXNFbGVtZW50O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gU3RhdHVzIGVsZW1lbnQgY3JlYXRlZCBieSB0aGUgY29uc3RydWN0b3IuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRTdGF0dXNFbGVtZW50ID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5zdGF0dXNFbGVtZW50O1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBhZ2UgZXhpc3RlZCBvbiB0aGUgd2lraSB3aGVuIGl0IHdhcyBsYXN0IGxvYWRlZC5cblx0XHQgKi9cblx0XHR0aGlzLmV4aXN0cyA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgucGFnZUV4aXN0cztcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IFBhZ2UgSUQgb2YgdGhlIHBhZ2UgbG9hZGVkLiAwIGlmIHRoZSBwYWdlIGRvZXNuJ3Rcblx0XHQgKiBleGlzdC5cblx0XHQgKi9cblx0XHR0aGlzLmdldFBhZ2VJRCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHgucGFnZUlEO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gLSBDb250ZW50IG1vZGVsIG9mIHRoZSBwYWdlLiAgUG9zc2libGUgdmFsdWVzXG5cdFx0ICogaW5jbHVkZSAoYnV0IG1heSBub3QgYmUgbGltaXRlZCB0byk6IGB3aWtpdGV4dGAsIGBqYXZhc2NyaXB0YCxcblx0XHQgKiBgY3NzYCwgYGpzb25gLCBgU2NyaWJ1bnRvYCwgYHNhbml0aXplZC1jc3NgLCBgTWFzc01lc3NhZ2VMaXN0Q29udGVudGAuXG5cdFx0ICogQWxzbyBnZXR0YWJsZSB2aWEgYG13LmNvbmZpZy5nZXQoJ3dnUGFnZUNvbnRlbnRNb2RlbCcpYC5cblx0XHQgKi9cblx0XHR0aGlzLmdldENvbnRlbnRNb2RlbCA9ICgpID0+IHtcblx0XHRcdHJldHVybiBjdHguY29udGVudE1vZGVsO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW58c3RyaW5nfSAtIFdhdGNoZWQgc3RhdHVzIG9mIHRoZSBwYWdlLiBCb29sZWFuXG5cdFx0ICogdW5sZXNzIGl0J3MgYmVpbmcgd2F0Y2hlZCB0ZW1wb3JhcmlseSwgaW4gd2hpY2ggY2FzZSByZXR1cm5zIHRoZVxuXHRcdCAqIGV4cGlyeSBzdHJpbmcuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRXYXRjaGVkID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC53YXRjaGVkO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gSVNPIDg2MDEgdGltZXN0YW1wIGF0IHdoaWNoIHRoZSBwYWdlIHdhcyBsYXN0IGxvYWRlZC5cblx0XHQgKi9cblx0XHR0aGlzLmdldExvYWRUaW1lID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5sb2FkVGltZTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSB1c2VyIHdobyBjcmVhdGVkIHRoZSBwYWdlIGZvbGxvd2luZyBgbG9va3VwQ3JlYXRpb24oKWAuXG5cdFx0ICovXG5cdFx0dGhpcy5nZXRDcmVhdG9yID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIGN0eC5jcmVhdG9yO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQHJldHVybnMge3N0cmluZ30gVGhlIElTT1N0cmluZyB0aW1lc3RhbXAgb2YgcGFnZSBjcmVhdGlvbiBmb2xsb3dpbmcgYGxvb2t1cENyZWF0aW9uKClgLlxuXHRcdCAqL1xuXHRcdHRoaXMuZ2V0Q3JlYXRpb25UaW1lc3RhbXAgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnRpbWVzdGFtcDtcblx0XHR9O1xuXHRcdC8qKiBAcmV0dXJucyB7Ym9vbGVhbn0gd2hldGhlciBvciBub3QgeW91IGNhbiBlZGl0IHRoZSBwYWdlICovXG5cdFx0dGhpcy5jYW5FZGl0ID0gKCkgPT4ge1xuXHRcdFx0cmV0dXJuICEhY3R4LnRlc3RBY3Rpb25zICYmIGN0eC50ZXN0QWN0aW9ucy5pbmNsdWRlcygnZWRpdCcpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogUmV0cmlldmVzIHRoZSB1c2VybmFtZSBvZiB0aGUgdXNlciB3aG8gY3JlYXRlZCB0aGUgcGFnZSBhcyB3ZWxsIGFzXG5cdFx0ICogdGhlIHRpbWVzdGFtcCBvZiBjcmVhdGlvbi4gIFRoZSB1c2VybmFtZSBjYW4gYmUgcmV0cmlldmVkIHVzaW5nIHRoZVxuXHRcdCAqIGBnZXRDcmVhdG9yKClgIGZ1bmN0aW9uOyB0aGUgdGltZXN0YW1wIGNhbiBiZSByZXRyaWV2ZWQgdXNpbmcgdGhlXG5cdFx0ICogYGdldENyZWF0aW9uVGltZXN0YW1wKClgIGZ1bmN0aW9uLlxuXHRcdCAqIFByaW9yIHRvIEp1bmUgMjAxOSBrbm93biBhcyBgbG9va3VwQ3JlYXRvcigpYC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IG9uU3VjY2VzcyAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuXG5cdFx0ICogdGhlIHVzZXJuYW1lIGFuZCB0aW1lc3RhbXAgYXJlIGZvdW5kIHdpdGhpbiB0aGUgY2FsbGJhY2suXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlblxuXHRcdCAqIHRoZSBsb29rdXAgZmFpbHNcblx0XHQgKi9cblx0XHR0aGlzLmxvb2t1cENyZWF0aW9uID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvblN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghb25TdWNjZXNzKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogbm8gb25TdWNjZXNzIGNhbGxiYWNrIHByb3ZpZGVkIHRvIGxvb2t1cENyZWF0aW9uKCkhJyk7XG5cdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdHRpdGxlczogY3R4LnBhZ2VOYW1lLFxuXHRcdFx0XHRydmxpbWl0OiAxLFxuXHRcdFx0XHRydnByb3A6ICd1c2VyfHRpbWVzdGFtcCcsXG5cdFx0XHRcdHJ2ZGlyOiAnbmV3ZXInLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHQvLyBPbmx5IHRoZSB3aWtpdGV4dCBjb250ZW50IG1vZGVsIGNhbiByZWxpYWJseSBoYW5kbGVcblx0XHRcdC8vIHJ2c2VjdGlvbiwgb3RoZXJzIHJldHVybiBhbiBlcnJvciB3aGVuIHBhaXJlZCB3aXRoIHRoZVxuXHRcdFx0Ly8gY29udGVudCBydnByb3AuIFJlbGF0ZWRseSwgbm9uLXdpa2l0ZXh0IG1vZGVscyBkb24ndFxuXHRcdFx0Ly8gdW5kZXJzdGFuZCB0aGUgI1JFRElSRUNUIGNvbmNlcHQsIHNvIHdlIHNob3VsZG4ndCBhdHRlbXB0XG5cdFx0XHQvLyB0aGUgcmVkaXJlY3QgcmVzb2x1dGlvbiBpbiBmbkxvb2t1cENyZWF0aW9uU3VjY2Vzc1xuXHRcdFx0aWYgKGN0eC5sb29rdXBOb25SZWRpcmVjdENyZWF0b3IpIHtcblx0XHRcdFx0cXVlcnkucnZzZWN0aW9uID0gMDtcblx0XHRcdFx0cXVlcnkucnZwcm9wICs9ICd8Y29udGVudCc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LmZvbGxvd1JlZGlyZWN0KSB7XG5cdFx0XHRcdHF1ZXJ5LnJlZGlyZWN0cyA9ICcnOyAvLyBmb2xsb3cgYWxsIHJlZGlyZWN0c1xuXHRcdFx0fVxuXG5cdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5oqT5Y+W6aG16Z2i5Yib5bu66ICF5L+h5oGvJywgJ+aKk+WPlumggemdouW7uueri+iAheizh+ioiicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Zm5Mb29rdXBDcmVhdGlvblN1Y2Nlc3MsXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmVcblx0XHRcdCk7XG5cdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFJldmVydHMgYSBwYWdlIHRvIGByZXZlcnRPbGRJRGAgc2V0IGJ5IGBzZXRPbGRJRGAuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25TdWNjZXNzXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBzdWNjZXNzLlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvbkZhaWx1cmVdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIGZhaWx1cmUuXG5cdFx0ICovXG5cdFx0dGhpcy5yZXZlcnQgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vblNhdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uU2F2ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghY3R4LnJldmVydE9sZElEKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKCdJbnRlcm5hbCBlcnJvcjogcmV2aXNpb24gSUQgdG8gcmV2ZXJ0IHRvIHdhcyBub3Qgc2V0IGJlZm9yZSByZXZlcnQhJyk7XG5cdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAncmV2ZXJ0Jztcblx0XHRcdHRoaXMubG9hZChmbkF1dG9TYXZlLCBjdHgub25TYXZlRmFpbHVyZSk7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBNb3ZlcyBhIHBhZ2UgdG8gYW5vdGhlciB0aXRsZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0XHQgKi9cblx0XHR0aGlzLm1vdmUgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vbk1vdmVTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uTW92ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghZm5QcmVmbGlnaHRDaGVja3MuY2FsbCh0aGlzLCAnbW92ZScsIGN0eC5vbk1vdmVGYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGlmICghY3R4Lm1vdmVEZXN0aW5hdGlvbikge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcignSW50ZXJuYWwgZXJyb3I6IGRlc3RpbmF0aW9uIHBhZ2UgbmFtZSB3YXMgbm90IHNldCBiZWZvcmUgbW92ZSEnKTtcblx0XHRcdFx0Y3R4Lm9uTW92ZUZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdtb3ZlJykpIHtcblx0XHRcdFx0Zm5Qcm9jZXNzTW92ZS5jYWxsKHRoaXMsIHRoaXMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgcXVlcnkgPSBmbk5lZWRUb2tlbkluZm9RdWVyeSgnbW92ZScpO1xuXHRcdFx0XHRjdHgubW92ZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0XHRmblByb2Nlc3NNb3ZlLFxuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LFxuXHRcdFx0XHRcdGN0eC5vbk1vdmVGYWlsdXJlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5tb3ZlQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0Y3R4Lm1vdmVBcGkucG9zdCgpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogTWFya3MgdGhlIHBhZ2UgYXMgcGF0cm9sbGVkLCB1c2luZyBgcmNpZGAgKGlmIGF2YWlsYWJsZSkgb3IgYHJldmlkYC5cblx0XHQgKlxuXHRcdCAqIFBhdHJvbGxpbmcgYXMgc3VjaCBkb2Vzbid0IG5lZWQgdG8gcmVseSBvbiBsb2FkaW5nIHRoZSBwYWdlIGluXG5cdFx0ICogcXVlc3Rpb247IHNpbXBseSBwYXNzaW5nIGEgcmV2aWQgdG8gdGhlIEFQSSBpcyBzdWZmaWNpZW50LCBzbyBpblxuXHRcdCAqIHRob3NlIGNhc2VzIGp1c3QgdXNpbmcge0BsaW5rIE1vcmViaXRzLndpa2kuYXBpfSBpcyBwcm9iYWJseSBwcmVmZXJhYmxlLlxuXHRcdCAqXG5cdFx0ICogTm8gZXJyb3IgaGFuZGxpbmcgc2luY2Ugd2UgZG9uJ3QgYWN0dWFsbHkgY2FyZSBhYm91dCB0aGUgZXJyb3JzLlxuXHRcdCAqL1xuXHRcdHRoaXMucGF0cm9sID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKCFNb3JlYml0cy51c2VySXNTeXNvcCAmJiAhTW9yZWJpdHMudXNlcklzSW5Hcm91cCgncGF0cm9sbGVyJykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdFx0XHQvLyBJZiBhIGxpbmsgaXMgcHJlc2VudCwgZG9uJ3QgbmVlZCB0byBjaGVjayBpZiBpdCdzIHBhdHJvbGxlZFxuXHRcdFx0aWYgKCRib2R5LmZpbmQoJy5wYXRyb2xsaW5rJykubGVuZ3RoKSB7XG5cdFx0XHRcdGNvbnN0IHBhdHJvbGhyZWYgPSAkYm9keS5maW5kKCcucGF0cm9sbGluayBhJykuYXR0cignaHJlZicpO1xuXHRcdFx0XHRjdHgucmNpZCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgncmNpZCcsIHBhdHJvbGhyZWYpO1xuXHRcdFx0XHRmblByb2Nlc3NQYXRyb2wodGhpcywgdGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBwYXRyb2xRdWVyeSA9IHtcblx0XHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0XHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdFx0XHRcdHR5cGU6ICdwYXRyb2wnLFxuXHRcdFx0XHRcdC8vIGFzIGxvbmcgYXMgd2UncmUgcXVlcnlpbmcsIG1pZ2h0IGFzIHdlbGwgZ2V0IGEgdG9rZW5cblx0XHRcdFx0XHRsaXN0OiAncmVjZW50Y2hhbmdlcycsXG5cdFx0XHRcdFx0Ly8gY2hlY2sgaWYgdGhlIHBhZ2UgaXMgdW5wYXRyb2xsZWRcblx0XHRcdFx0XHR0aXRsZXM6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0XHRyY3Byb3A6ICdwYXRyb2xsZWQnLFxuXHRcdFx0XHRcdHJjdGl0bGU6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0XHRyY2xpbWl0OiAxLFxuXHRcdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRjdHgucGF0cm9sQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+W5Luk54mM4oCm4oCmJywgJ+WPluW+l+asiuadluKApuKApicpLFxuXHRcdFx0XHRcdHBhdHJvbFF1ZXJ5LFxuXHRcdFx0XHRcdGZuUHJvY2Vzc1BhdHJvbFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHgucGF0cm9sQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0Y3R4LnBhdHJvbEFwaS5wb3N0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvLyB8ZGVsZXRlfCBpcyBhIHJlc2VydmVkIHdvcmQgaW4gc29tZSBmbGF2b3VycyBvZiBKU1xuXHRcdC8qKlxuXHRcdCAqIERlbGV0ZXMgYSBwYWdlIChmb3IgYWRtaW5zIG9ubHkpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzcy5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBmYWlsdXJlLlxuXHRcdCAqL1xuXHRcdHRoaXMuZGVsZXRlUGFnZSA9IGZ1bmN0aW9uIChvblN1Y2Nlc3MsIG9uRmFpbHVyZSkge1xuXHRcdFx0Y3R4Lm9uRGVsZXRlU3VjY2VzcyA9IG9uU3VjY2Vzcztcblx0XHRcdGN0eC5vbkRlbGV0ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghZm5QcmVmbGlnaHRDaGVja3MuY2FsbCh0aGlzLCAnZGVsZXRlJywgY3R4Lm9uRGVsZXRlRmFpbHVyZSkpIHtcblx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbignZGVsZXRlJykpIHtcblx0XHRcdFx0Zm5Qcm9jZXNzRGVsZXRlLmNhbGwodGhpcywgdGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCBxdWVyeSA9IGZuTmVlZFRva2VuSW5mb1F1ZXJ5KCdkZWxldGUnKTtcblx0XHRcdFx0Y3R4LmRlbGV0ZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0XHRmblByb2Nlc3NEZWxldGUsXG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdFx0Y3R4Lm9uRGVsZXRlRmFpbHVyZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjdHguZGVsZXRlQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0Y3R4LmRlbGV0ZUFwaS5wb3N0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBVbmRlbGV0ZXMgYSBwYWdlIChmb3IgYWRtaW5zIG9ubHkpLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uU3VjY2Vzc10gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gc3VjY2Vzcy5cblx0XHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbb25GYWlsdXJlXSAtIENhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biBvbiBmYWlsdXJlLlxuXHRcdCAqL1xuXHRcdHRoaXMudW5kZWxldGVQYWdlID0gZnVuY3Rpb24gKG9uU3VjY2Vzcywgb25GYWlsdXJlKSB7XG5cdFx0XHRjdHgub25VbmRlbGV0ZVN1Y2Nlc3MgPSBvblN1Y2Nlc3M7XG5cdFx0XHRjdHgub25VbmRlbGV0ZUZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghZm5QcmVmbGlnaHRDaGVja3MuY2FsbCh0aGlzLCAndW5kZWxldGUnLCBjdHgub25VbmRlbGV0ZUZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0aWYgKGZuQ2FuVXNlTXdVc2VyVG9rZW4oJ3VuZGVsZXRlJykpIHtcblx0XHRcdFx0Zm5Qcm9jZXNzVW5kZWxldGUuY2FsbCh0aGlzLCB0aGlzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHF1ZXJ5ID0gZm5OZWVkVG9rZW5JbmZvUXVlcnkoJ3VuZGVsZXRlJyk7XG5cdFx0XHRcdGN0eC51bmRlbGV0ZUFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPluS7pOeJjOKApuKApicsICflj5blvpfmrIrmnZbigKbigKYnKSxcblx0XHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0XHRmblByb2Nlc3NVbmRlbGV0ZSxcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0XHRjdHgub25VbmRlbGV0ZUZhaWx1cmVcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4LnVuZGVsZXRlQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdFx0Y3R4LnVuZGVsZXRlQXBpLnBvc3QoKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFByb3RlY3RzIGEgcGFnZSAoZm9yIGFkbWlucyBvbmx5KS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtvblN1Y2Nlc3NdIC0gQ2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIG9uIHN1Y2Nlc3MuXG5cdFx0ICogQHBhcmFtIHtGdW5jdGlvbn0gW29uRmFpbHVyZV0gLSBDYWxsYmFjayBmdW5jdGlvbiB0byBydW4gb24gZmFpbHVyZS5cblx0XHQgKi9cblx0XHR0aGlzLnByb3RlY3QgPSBmdW5jdGlvbiAob25TdWNjZXNzLCBvbkZhaWx1cmUpIHtcblx0XHRcdGN0eC5vblByb3RlY3RTdWNjZXNzID0gb25TdWNjZXNzO1xuXHRcdFx0Y3R4Lm9uUHJvdGVjdEZhaWx1cmUgPSBvbkZhaWx1cmUgfHwgZW1wdHlGdW5jdGlvbjtcblx0XHRcdGlmICghZm5QcmVmbGlnaHRDaGVja3MuY2FsbCh0aGlzLCAncHJvdGVjdCcsIGN0eC5vblByb3RlY3RGYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGlmICghY3R4LnByb3RlY3RFZGl0ICYmICFjdHgucHJvdGVjdE1vdmUgJiYgIWN0eC5wcm90ZWN0Q3JlYXRlKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdCdJbnRlcm5hbCBlcnJvcjogeW91IG11c3Qgc2V0IGVkaXQgYW5kL29yIG1vdmUgYW5kL29yIGNyZWF0ZSBwcm90ZWN0aW9uIGJlZm9yZSBjYWxsaW5nIHByb3RlY3QoKSEnXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5vblByb3RlY3RGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQvLyBiZWNhdXNlIG9mIHRoZSB3YXkgTVcgQVBJIGludGVycHJldHMgcHJvdGVjdGlvbiBsZXZlbHNcblx0XHRcdC8vIChhYnNvbHV0ZSwgbm90IGRpZmZlcmVudGlhbCksIHdlIGFsd2F5cyBuZWVkIHRvIHJlcXVlc3Rcblx0XHRcdC8vIHByb3RlY3Rpb24gbGV2ZWxzIGZyb20gdGhlIHNlcnZlclxuXHRcdFx0Y29uc3QgcXVlcnkgPSBmbk5lZWRUb2tlbkluZm9RdWVyeSgncHJvdGVjdCcpO1xuXHRcdFx0Y3R4LnByb3RlY3RBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn6I635Y+W5Luk54mM4oCm4oCmJywgJ+WPluW+l+asiuadluKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Zm5Qcm9jZXNzUHJvdGVjdCxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGN0eC5vblByb3RlY3RGYWlsdXJlXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LnByb3RlY3RBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LnByb3RlY3RBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Lypcblx0XHQgKiBQcml2YXRlIG1lbWJlciBmdW5jdGlvbnNcblx0XHQgKiBUaGVzZSBhcmUgbm90IGV4cG9zZWQgb3V0c2lkZVxuXHRcdCAqL1xuXHRcdC8qKlxuXHRcdCAqIERldGVybWluZXMgd2hldGhlciB3ZSBjYW4gc2F2ZSBhbiBBUEkgY2FsbCBieSB1c2luZyB0aGUgY3NyZiB0b2tlblxuXHRcdCAqIHNlbnQgd2l0aCB0aGUgcGFnZSBIVE1MLCBvciB3aGV0aGVyIHdlIG5lZWQgdG8gYXNrIHRoZSBzZXJ2ZXIgZm9yXG5cdFx0ICogbW9yZSBpbmZvIChlLmcuIHByb3RlY3Rpb24gb3Igd2F0Y2hsaXN0IGV4cGlyeSkuXG5cdFx0ICpcblx0XHQgKiBDdXJyZW50bHkgdXNlZCBmb3IgYGFwcGVuZGAsIGBwcmVwZW5kYCwgYG5ld1NlY3Rpb25gLCBgbW92ZWAsXG5cdFx0ICogYGRlbGV0ZVBhZ2VgLCBhbmQgYHVuZGVsZXRlUGFnZWAuIE5vdCB1c2VkIGZvciBgcHJvdGVjdGBcblx0XHQgKiBzaW5jZSBpdCBhbHdheXMgbmVlZHMgdG8gcmVxdWVzdCBwcm90ZWN0aW9uIHN0YXR1cy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbYWN0aW9uPWVkaXRdIC0gVGhlIGFjdGlvbiBiZWluZyB1bmRlcnRha2VuLCBlLmcuXG5cdFx0ICogXCJlZGl0XCIgb3IgXCJkZWxldGVcIi4gSW4gcHJhY3RpY2UsIG9ubHkgXCJlZGl0XCIgb3IgXCJub3RlZGl0XCIgbWF0dGVycy5cblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRjb25zdCBmbkNhblVzZU13VXNlclRva2VuID0gKGFjdGlvbikgPT4ge1xuXHRcdFx0YWN0aW9uIHx8PSAnZWRpdCc7XG5cdFx0XHQvLyBJZiBhIHdhdGNobGlzdCBleHBpcnkgaXMgc2V0LCB3ZSBtdXN0IGFsd2F5cyBsb2FkIHRoZSBwYWdlXG5cdFx0XHQvLyB0byBhdm9pZCBvdmVyd3JpdGluZyBpbmRlZmluaXRlIHByb3RlY3Rpb24uICBPZiBjb3Vyc2UsIG5vdFxuXHRcdFx0Ly8gbmVlZGVkIGlmIHNldHRpbmcgaW5kZWZpbml0ZSB3YXRjaGluZyFcblx0XHRcdGlmIChjdHgud2F0Y2hsaXN0RXhwaXJ5ICYmICFNb3JlYml0cy5zdHJpbmcuaXNJbmZpbml0eShjdHgud2F0Y2hsaXN0RXhwaXJ5KSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHQvLyBBUEktYmFzZWQgcmVkaXJlY3QgcmVzb2x1dGlvbiBvbmx5IHdvcmtzIGZvciBhY3Rpb249cXVlcnkgYW5kXG5cdFx0XHQvLyBhY3Rpb249ZWRpdCBpbiBhcHBlbmQvcHJlcGVuZC9uZXcgbW9kZXNcblx0XHRcdGlmIChjdHguZm9sbG93UmVkaXJlY3QpIHtcblx0XHRcdFx0aWYgKCFjdHguZm9sbG93Q3Jvc3NOc1JlZGlyZWN0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBtdXN0IGxvYWQgdGhlIHBhZ2UgdG8gY2hlY2sgZm9yIGNyb3NzIG5hbWVzcGFjZSByZWRpcmVjdHNcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChhY3Rpb24gIT09ICdlZGl0JyB8fCBjdHguZWRpdE1vZGUgPT09ICdhbGwnIHx8IGN0eC5lZGl0TW9kZSA9PT0gJ3JldmVydCcpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIGRvIHdlIG5lZWQgdG8gZmV0Y2ggdGhlIGVkaXQgcHJvdGVjdGlvbiBleHBpcnk/XG5cdFx0XHRpZiAoTW9yZWJpdHMudXNlcklzU3lzb3AgJiYgIWN0eC5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nKSB7XG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRuZXcgbXcuVGl0bGUoTW9yZWJpdHMucGFnZU5hbWVOb3JtKS5nZXRQcmVmaXhlZFRleHQoKSAhPT1cblx0XHRcdFx0XHRuZXcgbXcuVGl0bGUoY3R4LnBhZ2VOYW1lKS5nZXRQcmVmaXhlZFRleHQoKVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gd2dSZXN0cmljdGlvbkVkaXQgaXMgbnVsbCBvbiBub24tZXhpc3RlbnQgcGFnZXMsXG5cdFx0XHRcdC8vIHNvIHRoaXMgbmVhdGx5IGhhbmRsZXMgbm9uZXhpc3RlbnQgcGFnZXNcblx0XHRcdFx0Y29uc3QgZWRpdFJlc3RyaWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dSZXN0cmljdGlvbkVkaXQnKTtcblx0XHRcdFx0aWYgKCFlZGl0UmVzdHJpY3Rpb24gfHwgZWRpdFJlc3RyaWN0aW9uLmluY2x1ZGVzKCdzeXNvcCcpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gISFtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogV2hlbiBmdW5jdGlvbnMgY2FuJ3QgdXNlXG5cdFx0ICoge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX5mbkNhblVzZU13VXNlclRva2VufGZuQ2FuVXNlTXdVc2VyVG9rZW59XG5cdFx0ICogb3IgcmVxdWlyZSBjaGVja2luZyBwcm90ZWN0aW9uIG9yIHdhdGNoZWQgc3RhdHVzLCBtYWludGFpbiB0aGUgcXVlcnlcblx0XHQgKiBpbiBvbmUgcGxhY2UuIFVzZWQgZm9yIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2UjZGVsZXRlUGFnZXxkZWxldGV9LFxuXHRcdCAqIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2UjdW5kZWxldGVQYWdlfHVuZGVsZXRlfSxcblx0XHQgKiB7QGxpbmsqIE1vcmViaXRzLndpa2kucGFnZSNwcm90ZWN0fHByb3RlY3R9LFxuXHRcdCAqIGFuZCB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlI21vdmV8bW92ZX1cblx0XHQgKiAoYmFzaWNhbGx5LCBqdXN0IG5vdCB7QGxpbmsgTW9yZWJpdHMud2lraS5wYWdlI2xvYWR8bG9hZH0pLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGFjdGlvbiAtIFRoZSBhY3Rpb24gYmVpbmcgdW5kZXJ0YWtlbiwgZS5nLiBcImVkaXRcIiBvclxuXHRcdCAqIFwiZGVsZXRlXCIuXG5cdFx0ICogQHJldHVybnMge09iamVjdH0gQXBwcm9wcmlhdGUgcXVlcnkuXG5cdFx0ICovXG5cdFx0Y29uc3QgZm5OZWVkVG9rZW5JbmZvUXVlcnkgPSAoYWN0aW9uKSA9PiB7XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdFx0dHlwZTogJ2NzcmYnLFxuXHRcdFx0XHR0aXRsZXM6IGN0eC5wYWdlTmFtZSxcblx0XHRcdFx0cHJvcDogJ2luZm8nLFxuXHRcdFx0XHRpbnByb3A6ICd3YXRjaGVkJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0Ly8gUHJvdGVjdGlvbiBub3QgY2hlY2tlZCBmb3Igbm9uLXN5c29wIG1vdmVzXG5cdFx0XHRpZiAoYWN0aW9uICE9PSAnbW92ZScgfHwgTW9yZWJpdHMudXNlcklzU3lzb3ApIHtcblx0XHRcdFx0cXVlcnkuaW5wcm9wICs9ICd8cHJvdGVjdGlvbic7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LmZvbGxvd1JlZGlyZWN0ICYmIGFjdGlvbiAhPT0gJ3VuZGVsZXRlJykge1xuXHRcdFx0XHRxdWVyeS5yZWRpcmVjdHMgPSAnJzsgLy8gZm9sbG93IGFsbCByZWRpcmVjdHNcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHF1ZXJ5O1xuXHRcdH07XG5cdFx0Ly8gY2FsbGJhY2sgZnJvbSBsb2FkU3VjY2VzcygpIGZvciBhcHBlbmQoKSwgcHJlcGVuZCgpLCBhbmQgbmV3U2VjdGlvbigpIHRocmVhZHNcblx0XHRjb25zdCBmbkF1dG9TYXZlID0gKHBhZ2VvYmopID0+IHtcblx0XHRcdHBhZ2VvYmouc2F2ZShjdHgub25TYXZlU3VjY2VzcywgY3R4Lm9uU2F2ZUZhaWx1cmUpO1xuXHRcdH07XG5cdFx0Ly8gY2FsbGJhY2sgZnJvbSBsb2FkQXBpLnBvc3QoKVxuXHRcdGNvbnN0IGZuTG9hZFN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5sb2FkQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRpZiAoIWZuQ2hlY2tQYWdlTmFtZShyZXNwb25zZSwgY3R4Lm9uTG9hZEZhaWx1cmUpKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRsZXQgcmV2O1xuXHRcdFx0Y3R4LnBhZ2VFeGlzdHMgPSAhcGFnZS5taXNzaW5nO1xuXHRcdFx0aWYgKGN0eC5wYWdlRXhpc3RzKSB7XG5cdFx0XHRcdFtyZXZdID0gcGFnZS5yZXZpc2lvbnM7XG5cdFx0XHRcdGN0eC5sYXN0RWRpdFRpbWUgPSByZXYudGltZXN0YW1wO1xuXHRcdFx0XHRjdHgucGFnZVRleHQgPSByZXYuY29udGVudDtcblx0XHRcdFx0Y3R4LnBhZ2VJRCA9IHBhZ2UucGFnZWlkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4LnBhZ2VUZXh0ID0gJyc7IC8vIGFsbG93IGZvciBjb25jYXRlbmF0aW9uLCBldGMuXG5cdFx0XHRcdGN0eC5wYWdlSUQgPSAwOyAvLyBub25leGlzdGVudCBpbiByZXNwb25zZSwgbWF0Y2hlcyB3Z0FydGljbGVJZFxuXHRcdFx0fVxuXG5cdFx0XHRjdHguY3NyZlRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdGlmICghY3R4LmNzcmZUb2tlbikge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+acquiDveiOt+WPlue8lui+keS7pOeJjOOAgicsICfmnKrog73lj5blvpfnt6jovK/mrIrmnZbjgIInKSk7XG5cdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHgubG9hZFRpbWUgPSBjdHgubG9hZEFwaS5nZXRSZXNwb25zZSgpLmN1cnRpbWVzdGFtcDtcblx0XHRcdGlmICghY3R4LmxvYWRUaW1lKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5pyq6IO96I635Y+W5b2T5YmN5pe26Ze05oiz44CCJywgJ+acquiDveWPluW+l+eVtuWJjeaZgumWk+aIs+OAgicpKTtcblx0XHRcdFx0Y3R4Lm9uTG9hZEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGN0eC5jb250ZW50TW9kZWwgPSBwYWdlLmNvbnRlbnRtb2RlbDtcblx0XHRcdGN0eC53YXRjaGVkID0gcGFnZS53YXRjaGxpc3RleHBpcnkgfHwgcGFnZS53YXRjaGVkO1xuXHRcdFx0Ly8gZXh0cmFjdCBwcm90ZWN0aW9uIGluZm8sIHRvIGFsZXJ0IGFkbWlucyB3aGVuIHRoZXkgYXJlIGFib3V0IHRvIGVkaXQgYSBwcm90ZWN0ZWQgcGFnZVxuXHRcdFx0Ly8gSW5jbHVkZXMgY2FzY2FkaW5nIHByb3RlY3Rpb25cblx0XHRcdGlmIChNb3JlYml0cy51c2VySXNTeXNvcCkge1xuXHRcdFx0XHRjb25zdCBlZGl0UHJvdCA9IHBhZ2UucHJvdGVjdGlvblxuXHRcdFx0XHRcdC5maWx0ZXIoKHByKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHIudHlwZSA9PT0gJ2VkaXQnICYmIHByLmxldmVsID09PSAnc3lzb3AnO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnBvcCgpO1xuXHRcdFx0XHRpZiAoZWRpdFByb3QpIHtcblx0XHRcdFx0XHRjdHguZnVsbHlQcm90ZWN0ZWQgPSBlZGl0UHJvdC5leHBpcnk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y3R4LmZ1bGx5UHJvdGVjdGVkID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGN0eC5yZXZlcnRDdXJJRCA9IHBhZ2UubGFzdHJldmlkO1xuXHRcdFx0Y29uc3QgdGVzdGFjdGlvbnMgPSBwYWdlLmFjdGlvbnM7XG5cdFx0XHRjdHgudGVzdEFjdGlvbnMgPSBbXTsgLy8gd2FzIG51bGxcblx0XHRcdGZvciAoY29uc3QgYWN0aW9uIG9mIE9iamVjdC5rZXlzKHRlc3RhY3Rpb25zKSkge1xuXHRcdFx0XHRpZiAodGVzdGFjdGlvbnNbYWN0aW9uXSkge1xuXHRcdFx0XHRcdGN0eC50ZXN0QWN0aW9uc1tjdHgudGVzdEFjdGlvbnMubGVuZ3RoXSA9IGFjdGlvbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5lZGl0TW9kZSA9PT0gJ3JldmVydCcpIHtcblx0XHRcdFx0Y3R4LnJldmVydEN1cklEID0gcmV2ICYmIHJldi5yZXZpZDtcblx0XHRcdFx0aWYgKCFjdHgucmV2ZXJ0Q3VySUQpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+acquiDveiOt+WPluW9k+WJjeS/ruiuoueJiOacrElE44CCJywgJ+acquiDveWPluW+l+ebruWJjeS/ruiogueJiOacrElE44CCJykpO1xuXHRcdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdHgucmV2ZXJ0VXNlciA9IHJldiAmJiByZXYudXNlcjtcblx0XHRcdFx0aWYgKCFjdHgucmV2ZXJ0VXNlcikge1xuXHRcdFx0XHRcdGlmIChyZXYgJiYgcmV2LnVzZXJoaWRkZW4pIHtcblx0XHRcdFx0XHRcdC8vIHVzZXJuYW1lIHdhcyBSZXZEZWwnZCBvciBvdmVyc2lnaHRlZFxuXHRcdFx0XHRcdFx0Y3R4LnJldmVydFVzZXIgPSB3aW5kb3cud2dVTFMoJzznlKjmiLflkI3lt7LpmpDol48+JywgJzzkvb/nlKjogIXlkI3nqLHlt7LpmrHol48+Jyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+acquiDveiOt+WPluatpOS/ruiuoueJiOacrOeahOe8lui+keiAheOAgicsICfmnKrog73lj5blvpfmraTkv67oqILniYjmnKznmoTnt6jovK/ogIXjgIInKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGN0eC5vbkxvYWRGYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBzZXQgcmV2ZXJ0IGVkaXQgc3VtbWFyeVxuXHRcdFx0XHRjdHguZWRpdFN1bW1hcnkgPSBgW1tRVzpVTkRPfOaSpOmUgF1d55SxICR7Y3R4LnJldmVydFVzZXJ9IOaJgOWBmuWHuueahCR7d2luZG93LndnVUxTKCfkv67orqIgJywgJ+S/ruiogiAnKX0ke1xuXHRcdFx0XHRcdGN0eC5yZXZlcnRPbGRJRFxuXHRcdFx0XHR977yaJHtjdHguZWRpdFN1bW1hcnl9YDtcblx0XHRcdH1cblx0XHRcdGN0eC5wYWdlTG9hZGVkID0gdHJ1ZTtcblx0XHRcdC8vIG13Lm5vdGlmeShcIkdlbmVyYXRlIGVkaXQgY29uZmxpY3Qgbm93XCIsIHt0eXBlOiAnd2FybicsIHRhZzogJ21vcmViaXRzJ30pOyAgLy8gZm9yIHRlc3RpbmcgZWRpdCBjb25mbGljdCByZWNvdmVyeSBsb2dpY1xuXHRcdFx0Y3R4Lm9uTG9hZFN1Y2Nlc3ModGhpcyk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdH07XG5cdFx0Ly8gaGVscGVyIGZ1bmN0aW9uIHRvIHBhcnNlIHRoZSBwYWdlIG5hbWUgcmV0dXJuZWQgZnJvbSB0aGUgQVBJXG5cdFx0Y29uc3QgZm5DaGVja1BhZ2VOYW1lID0gZnVuY3Rpb24gKHJlc3BvbnNlLCBvbkZhaWx1cmUpIHtcblx0XHRcdG9uRmFpbHVyZSB8fD0gZW1wdHlGdW5jdGlvbjtcblx0XHRcdGNvbnN0IHBhZ2UgPSByZXNwb25zZS5wYWdlcyAmJiByZXNwb25zZS5wYWdlc1swXTtcblx0XHRcdGlmIChwYWdlKSB7XG5cdFx0XHRcdC8vIGNoZWNrIGZvciBpbnZhbGlkIHRpdGxlc1xuXHRcdFx0XHRpZiAocGFnZS5pbnZhbGlkKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfmoIfpopjkuI3lkIjms5XvvJonLCBg5qiZ6aGM5LiN5ZCI5rOV77yaJHtjdHgucGFnZU5hbWV9YCkpO1xuXHRcdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIGFib3J0XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gcmV0cmlldmUgYWN0dWFsIHRpdGxlIG9mIHRoZSBwYWdlIGFmdGVyIG5vcm1hbGl6YXRpb24gYW5kIHJlZGlyZWN0c1xuXHRcdFx0XHRjb25zdCByZXNvbHZlZE5hbWUgPSBwYWdlLnRpdGxlO1xuXHRcdFx0XHRpZiAocmVzcG9uc2UucmVkaXJlY3RzKSB7XG5cdFx0XHRcdFx0Ly8gY2hlY2sgZm9yIGNyb3NzLW5hbWVzcGFjZSByZWRpcmVjdDpcblx0XHRcdFx0XHRjb25zdCBvcmlnTnMgPSBuZXcgbXcuVGl0bGUoY3R4LnBhZ2VOYW1lKS5uYW1lc3BhY2U7XG5cdFx0XHRcdFx0Y29uc3QgbmV3TnMgPSBuZXcgbXcuVGl0bGUocmVzb2x2ZWROYW1lKS5uYW1lc3BhY2U7XG5cdFx0XHRcdFx0aWYgKG9yaWdOcyAhPT0gbmV3TnMgJiYgIWN0eC5mb2xsb3dDcm9zc05zUmVkaXJlY3QpIHtcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5piv6Leo5ZG95ZCN56m66Ze06YeN5a6a5ZCR5YiwJywgJ+aYr+i3qOWRveWQjeepuumWk+mHjeaWsOWwjuWQkeWIsCcpICtcblx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlZE5hbWUgK1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn77yM55Wl6L+HJywgJ++8jOeVpemBjicpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0b25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBvbmx5IG5vdGlmeSB1c2VyIGZvciByZWRpcmVjdHMsIG5vdCBub3JtYWxpemF0aW9uXG5cdFx0XHRcdFx0bmV3IE1vcmViaXRzLnN0YXR1cyhcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5L+h5oGvJywgJ+izh+ioiicpLFxuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfku44gJywgJ+W+niAnKSArXG5cdFx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygnIOmHjeWumuWQkeWIsCAnLCAnIOmHjeaWsOWwjuWQkeWIsCAnKSArXG5cdFx0XHRcdFx0XHRcdHJlc29sdmVkTmFtZVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnBhZ2VOYW1lID0gcmVzb2x2ZWROYW1lOyAvLyB1cGRhdGUgdG8gcmVkaXJlY3QgdGFyZ2V0IG9yIG5vcm1hbGl6ZWQgbmFtZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gY291bGQgYmUgYSBjaXJjdWxhciByZWRpcmVjdCBvciBvdGhlciBwcm9ibGVtXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5LiN6IO96Kej5p6Q6aG16Z2i55qE6YeN5a6a5ZCR77yaJywgJ+S4jeiDveino+aekOmggemdoueahOmHjeaWsOWwjuWQke+8micpICsgY3R4LnBhZ2VOYW1lXG5cdFx0XHRcdCk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0Ly8gZm9yY2UgZXJyb3IgdG8gc3RheSBvbiB0aGUgc2NyZWVuXG5cdFx0XHRcdCsrTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0O1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0cnVlOyAvLyBhbGwgT0tcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIERldGVybWluZSB3aGV0aGVyIHdlIHNob3VsZCBwcm92aWRlIGEgd2F0Y2hsaXN0IGV4cGlyeS4gIFdpbGwgbm90XG5cdFx0ICogZG8gc28gaWYgdGhlIHBhZ2UgaXMgY3VycmVudGx5IHBlcm1hbmVudGx5IHdhdGNoZWQsIG9yIHRoZSBjdXJyZW50XG5cdFx0ICogZXhwaXJ5IGlzICphZnRlciogdGhlIG5ldywgcHJvdmlkZWQgZXhwaXJ5LiAgT25seSBoYW5kbGVzIHN0cmluZ3Ncblx0XHQgKiByZWNvZ25pemVkIGJ5IHtAbGluayBNb3JlYml0cy5kYXRlfSBvciByZWxhdGl2ZSB0aW1lZnJhbWVzIHdpdGhcblx0XHQgKiB1bml0IGl0IGNhbiBwcm9jZXNzLiAgUmVsaWVzIG9uIHRoZSBmYWN0IHRoYXQgZm5DYW5Vc2VNd1VzZXJUb2tlblxuXHRcdCAqIHJlcXVpcmVzIHBhZ2UgbG9hZGluZyBpZiBhIHdhdGNobGlzdGV4cGlyeSBpcyBwcm92aWRlZCwgc28gd2UgYXJlXG5cdFx0ICogZW5zdXJlZCBvZiBrbm93aW5nIHRoZSB3YXRjaCBzdGF0dXMgYnkgdGhlIHVzZSBvZiB0aGlzLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0ICovXG5cdFx0Y29uc3QgZm5BcHBseVdhdGNobGlzdEV4cGlyeSA9ICgpID0+IHtcblx0XHRcdGlmIChjdHgud2F0Y2hsaXN0RXhwaXJ5KSB7XG5cdFx0XHRcdGlmICghY3R4LndhdGNoZWQgfHwgTW9yZWJpdHMuc3RyaW5nLmlzSW5maW5pdHkoY3R4LndhdGNobGlzdEV4cGlyeSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY3R4LndhdGNoZWQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0bGV0IG5ld0V4cGlyeTtcblx0XHRcdFx0XHQvLyBBdHRlbXB0IHRvIGRldGVybWluZSBpZiB0aGUgbmV3IGV4cGlyeSBpcyBhXG5cdFx0XHRcdFx0Ly8gcmVsYXRpdmUgKGUuZy4gYDEgbW9udGhgKSBvciBhYnNvbHV0ZSBkYXRldGltZVxuXHRcdFx0XHRcdGNvbnN0IHJlbCA9IGN0eC53YXRjaGxpc3RFeHBpcnkuc3BsaXQoJyAnKTtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0bmV3RXhwaXJ5ID0gbmV3IE1vcmViaXRzLmRhdGUoKS5hZGQocmVsWzBdLCByZWxbMV0pO1xuXHRcdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdFx0bmV3RXhwaXJ5ID0gbmV3IE1vcmViaXRzLmRhdGUoY3R4LndhdGNobGlzdEV4cGlyeSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8vIElmIHRoZSBkYXRlIGlzIHZhbGlkLCBvbmx5IHVzZSBpdCBpZiBpdCBleHRlbmRzIHRoZSBjdXJyZW50IGV4cGlyeVxuXHRcdFx0XHRcdGlmIChuZXdFeHBpcnkuaXNWYWxpZCgpKSB7XG5cdFx0XHRcdFx0XHRpZiAobmV3RXhwaXJ5LmlzQWZ0ZXIobmV3IE1vcmViaXRzLmRhdGUoY3R4LndhdGNoZWQpKSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8gSWYgaXQncyBzdGlsbCBub3QgdmFsaWQsIGhvcGUgaXQncyBhIHZhbGlkIE1XIGV4cGlyeSBmb3JtYXQgdGhhdFxuXHRcdFx0XHRcdFx0Ly8gTW9yZWJpdHMuZGF0ZSBkb2Vzbid0IHJlY29nbml6ZSwgc28ganVzdCBkZWZhdWx0IHRvIHVzaW5nIGl0LlxuXHRcdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIGFsc28gaW5jbHVkZSBtaW5vciB0eXBvcy5cblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cdFx0Ly8gY2FsbGJhY2sgZnJvbSBzYXZlQXBpLnBvc3QoKVxuXHRcdGNvbnN0IGZuU2F2ZVN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdHguZWRpdE1vZGUgPSAnYWxsJzsgLy8gY2FuY2VsIGFwcGVuZC9wcmVwZW5kL25ld1NlY3Rpb24vcmV2ZXJ0IG1vZGVzXG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5zYXZlQXBpLmdldFJlc3BvbnNlKCk7XG5cdFx0XHQvLyBzZWUgaWYgdGhlIEFQSSB0aGlua3Mgd2Ugd2VyZSBzdWNjZXNzZnVsXG5cdFx0XHRpZiAocmVzcG9uc2UuZWRpdC5yZXN1bHQgPT09ICdTdWNjZXNzJykge1xuXHRcdFx0XHQvLyByZWFsIHN1Y2Nlc3Ncblx0XHRcdFx0Ly8gZGVmYXVsdCBvbiBzdWNjZXNzIGFjdGlvbiAtIGRpc3BsYXkgbGluayBmb3IgZWRpdGVkIHBhZ2Vcblx0XHRcdFx0Y29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBtdy51dGlsLmdldFVybChjdHgucGFnZU5hbWUpKTtcblx0XHRcdFx0bGluay5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjdHgucGFnZU5hbWUpKTtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyhbJ+WujOaIkO+8iCcsIGxpbmssICfvvIknXSk7XG5cdFx0XHRcdGlmIChjdHgub25TYXZlU3VjY2Vzcykge1xuXHRcdFx0XHRcdGN0eC5vblNhdmVTdWNjZXNzKHRoaXMpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdC8vIGVycm9ycyBoZXJlIGFyZSBvbmx5IGdlbmVyYXRlZCBieSBleHRlbnNpb25zIHdoaWNoIGhvb2sgQVBJRWRpdEJlZm9yZVNhdmUgd2l0aGluIE1lZGlhV2lraSxcblx0XHRcdC8vIHdoaWNoIGFzIG9mIDEuMzQuMC13bWYuMjMgKFNlcHQgMjAxOSkgc2hvdWxkIG9ubHkgZW5jb21wYXNzIGNhcHRjaGEgbWVzc2FnZXNcblx0XHRcdGlmIChyZXNwb25zZS5lZGl0LmNhcHRjaGEpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfkuI3og73kv53lrZjpobXpnaLvvIzlm6DmnI3liqHlmajopoHmsYLmgqjovpPlhaXpqozor4HnoIHjgIInLCAn5LiN6IO95YSy5a2Y6aCB6Z2i77yM5Zug5Ly65pyN5Zmo6KaB5rGC5oKo6Ly45YWl6amX6K2J56K844CCJylcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5L+d5a2Y6aG16Z2i5pe255SxQVBJ5b6X5Yiw5pyq55+l6ZSZ6K+vJywgJ+WEsuWtmOmggemdouaZgueUsUFQSeW+l+WIsOacquefpemMr+iqpCcpKTtcblx0XHRcdH1cblx0XHRcdC8vIGZvcmNlIGVycm9yIHRvIHN0YXkgb24gdGhlIHNjcmVlblxuXHRcdFx0KytNb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7XG5cdFx0XHRjdHgub25TYXZlRmFpbHVyZSh0aGlzKTtcblx0XHR9O1xuXHRcdC8vIGNhbGxiYWNrIGZyb20gc2F2ZUFwaS5wb3N0KClcblx0XHRjb25zdCBmblNhdmVFcnJvciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IGVycm9yQ29kZSA9IGN0eC5zYXZlQXBpLmdldEVycm9yQ29kZSgpO1xuXHRcdFx0Ly8gY2hlY2sgZm9yIGVkaXQgY29uZmxpY3Rcblx0XHRcdGlmIChlcnJvckNvZGUgPT09ICdlZGl0Y29uZmxpY3QnICYmIGN0eC5jb25mbGljdFJldHJpZXMrKyA8IGN0eC5tYXhDb25mbGljdFJldHJpZXMpIHtcblx0XHRcdFx0Ly8gZWRpdCBjb25mbGljdHMgY2FuIG9jY3VyIHdoZW4gdGhlIHBhZ2UgbmVlZHMgdG8gYmUgcHVyZ2VkIGZyb20gdGhlIHNlcnZlciBjYWNoZVxuXHRcdFx0XHRjb25zdCBwdXJnZVF1ZXJ5ID0ge1xuXHRcdFx0XHRcdGFjdGlvbjogJ3B1cmdlJyxcblx0XHRcdFx0XHR0aXRsZXM6IGN0eC5wYWdlTmFtZSwgLy8gcmVkaXJlY3RzIGFyZSBhbHJlYWR5IHJlc29sdmVkXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Y29uc3QgcHVyZ2VBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfmo4DmtYvliLDnvJbovpHlhrLnqoHvvIzmraPlnKjmm7TmlrDmnI3liqHlmajnvJPlrZgnLCAn5qqi5ris5Yiw57eo6Lyv6KGd56qB77yM5q2j5Zyo5pu05paw5Ly65pyN5Zmo5b+r5Y+WJyksXG5cdFx0XHRcdFx0cHVyZ2VRdWVyeSxcblx0XHRcdFx0XHQoKSA9PiB7XG5cdFx0XHRcdFx0XHQtLU1vcmViaXRzLndpa2kubnVtYmVyT2ZBY3Rpb25zTGVmdDsgLy8gYWxsb3cgZm9yIG5vcm1hbCBjb21wbGV0aW9uIGlmIHJldHJ5IHN1Y2NlZWRzXG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5qOA5rWL5Yiw57yW6L6R5Yay56qB77yM6YeN6K+V5L+u5pS5JywgJ+aqoua4rOWIsOe3qOi8r+ihneeqge+8jOmHjeippuS/ruaUuScpKTtcblx0XHRcdFx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdlZGl0JykpIHtcblx0XHRcdFx0XHRcdFx0Y3R4LnNhdmVBcGkucG9zdCgpOyAvLyBuZWNlc3NhcmlseSBhcHBlbmQsIHByZXBlbmQsIG9yIG5ld1NlY3Rpb24sIHNvIHRoaXMgc2hvdWxkIHdvcmsgYXMgZGVzaXJlZFxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y3R4LmxvYWRBcGkucG9zdCgpOyAvLyByZWxvYWQgdGhlIHBhZ2UgYW5kIHJlYXBwbHkgdGhlIGVkaXRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50XG5cdFx0XHRcdCk7XG5cdFx0XHRcdHB1cmdlQXBpLnBvc3QoKTtcblx0XHRcdFx0Ly8gY2hlY2sgZm9yIG5ldHdvcmsgb3Igc2VydmVyIGVycm9yXG5cdFx0XHR9IGVsc2UgaWYgKChlcnJvckNvZGUgPT09IG51bGwgfHwgZXJyb3JDb2RlID09PSB1bmRlZmluZWQpICYmIGN0eC5yZXRyaWVzKysgPCBjdHgubWF4UmV0cmllcykge1xuXHRcdFx0XHQvLyB0aGUgZXJyb3IgbWlnaHQgYmUgdHJhbnNpZW50LCBzbyB0cnkgYWdhaW5cblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+S/neWtmOWksei0pe+8jOWcqDLnp5LlkI7ph43or5XigKbigKYnLCAn5YSy5a2Y5aSx5pWX77yM5ZyoMuenkuW+jOmHjeippuKApuKApicpKTtcblx0XHRcdFx0LS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7IC8vIGFsbG93IGZvciBub3JtYWwgY29tcGxldGlvbiBpZiByZXRyeSBzdWNjZWVkc1xuXHRcdFx0XHQvLyB3YWl0IGZvciBzb21ldGltZSBmb3IgY2xpZW50IHRvIHJlZ2FpbiBjb25uZWN0aXZpdHlcblx0XHRcdFx0c2xlZXAoMjAwMCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0Y3R4LnNhdmVBcGkucG9zdCgpOyAvLyBnaXZlIGl0IGFub3RoZXIgZ28hXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQvLyBoYXJkIGVycm9yLCBnaXZlIHVwXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5zYXZlQXBpLmdldFJlc3BvbnNlKCk7XG5cdFx0XHRcdGNvbnN0IGVycm9yRGF0YSA9XG5cdFx0XHRcdFx0cmVzcG9uc2UuZXJyb3IgfHxcblx0XHRcdFx0XHQvLyBiYyBlcnJvciBmb3JtYXRcblx0XHRcdFx0XHRyZXNwb25zZS5lcnJvcnNbMF0uZGF0YTsgLy8gaHRtbC93aWtpdGV4dC9wbGFpbnRleHQgZXJyb3IgZm9ybWF0XG5cdFx0XHRcdHN3aXRjaCAoZXJyb3JDb2RlKSB7XG5cdFx0XHRcdFx0Y2FzZSAncHJvdGVjdGVkcGFnZSc6XG5cdFx0XHRcdFx0XHQvLyBub24tYWRtaW4gYXR0ZW1wdGluZyB0byBlZGl0IGEgcHJvdGVjdGVkIHBhZ2UgLSB0aGlzIGdpdmVzIGEgZnJpZW5kbGllciBtZXNzYWdlIHRoYW4gdGhlIGRlZmF1bHRcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5LiN6IO95L+d5a2Y5L+u5pS577ya6aG16Z2i6KKr5L+d5oqkJywgJ+S4jeiDveWEsuWtmOS/ruaUue+8mumggemdouiiq+S/neittycpKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2FidXNlZmlsdGVyLWRpc2FsbG93ZWQnOlxuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn57yW6L6R6KKr6Ziy5rul55So6L+H5ruk5Zmo6KeE5YiZ4oCcJywgJ+e3qOi8r+iiq+mYsua/q+eUqOmBjua/vuWZqOimj+WJh+OAjCcpICtcblx0XHRcdFx0XHRcdFx0XHRlcnJvckRhdGEuYWJ1c2VmaWx0ZXIuZGVzY3JpcHRpb24gK1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHRcdCfigJ3pmLvmraLjgILoi6XmgqjorqTkuLrmgqjnmoTor6XmrKHnvJbovpHmmK/mnInmhI/kuYnnmoTvvIzor7foh7MgTElCX3RhbGs6566h55CG5ZGY5ZGK56S65p2/IOaPkOaKpeOAgicsXG5cdFx0XHRcdFx0XHRcdFx0XHQn44CN6Zi75q2i44CC6Iul5oKo6KqN54K65oKo55qE6Kmy5qyh57eo6Lyv5piv5pyJ5oSP576p55qE77yM6KuL6IezIExJQl90YWxrOueuoeeQhuWToeWRiuekuuadvyDmj5DloLHjgIInXG5cdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ2FidXNlZmlsdGVyLXdhcm5pbmcnOlxuXHRcdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoW1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+e8lui+keiiq+mYsua7peeUqOi/h+a7pOWZqOinhOWImeKAnCcsICfnt6jovK/ooqvpmLLmv6vnlKjpgY7mv77lmajopo/liYfjgIwnKSxcblx0XHRcdFx0XHRcdFx0ZXJyb3JEYXRhLmFidXNlZmlsdGVyLmRlc2NyaXB0aW9uLFxuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0J+KAneitpuWRiu+8jOiLpeaCqOS7jeW4jOacm+WBmuWHuuivpee8lui+ke+8jOivt+WwneivlemHjeaWsOaPkOS6pO+8jOagueaNrui/h+a7pOWZqOeahOiuvue9ruaCqOWPr+iDveWPr+S7peS9nOWHuuatpOe8lui+keOAgicsXG5cdFx0XHRcdFx0XHRcdFx0J+OAjeitpuWRiu+8jOiLpeaCqOS7jeW4jOacm+WBmuWHuuipsue3qOi8r++8jOiri+WYl+ippumHjeaWsOaPkOS6pO+8jOagueaTmumBjua/vuWZqOeahOioreWumuaCqOWPr+iDveWPr+S7peS9nOWHuuatpOe3qOi8r+OAgidcblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdF0pO1xuXHRcdFx0XHRcdFx0Ly8gV2Ugc2hvdWxkIHByb3ZpZGUgdGhlIHVzZXIgd2l0aCBhIHdheSB0byBhdXRvbWF0aWNhbGx5IHJldHJ5IHRoZSBhY3Rpb24gaWYgdGhleSBzbyBjaG9vc2UgLVxuXHRcdFx0XHRcdFx0Ly8gSSBjYW4ndCBzZWUgaG93IHRvIGRvIHRoaXMgd2l0aG91dCBjcmVhdGluZyBhIFVJIGRlcGVuZGVuY3kgb24gTW9yZWJpdHMud2lraS5wYWdlIHRob3VnaCAtLSBUVE9cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgJ3NwYW1ibGFja2xpc3QnOiB7XG5cdFx0XHRcdFx0XHQvLyBJZiBtdWx0aXBsZSBpdGVtcyBhcmUgYmxhY2tsaXN0ZWQsIHdlIG9ubHkgcmV0dXJuIHRoZSBmaXJzdFxuXHRcdFx0XHRcdFx0Y29uc3QgW3NwYW1dID0gZXJyb3JEYXRhLnNwYW1ibGFja2xpc3QubWF0Y2hlcztcblx0XHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+S4jeiDveS/neWtmOmhtemdou+8jOWboFVSTCAnLCAn5LiN6IO95YSy5a2Y6aCB6Z2i77yM5ZugVVJMICcpICtcblx0XHRcdFx0XHRcdFx0XHRzcGFtICtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJyDlnKjlnoPlnL7pk77mjqXpu5HlkI3ljZXkuK3jgIInLCAnIOWcqOWeg+WcvumAo+e1kOm7keWQjeWWruS4reOAgicpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfkuI3og73kv53lrZjkv67mlLnvvJonLCAn5LiN6IO95YSy5a2Y5L+u5pS577yaJykgKyBjdHguc2F2ZUFwaS5nZXRFcnJvclRleHQoKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjdHguZWRpdE1vZGUgPSAnYWxsJzsgLy8gY2FuY2VsIGFwcGVuZC9wcmVwZW5kL25ld1NlY3Rpb24vcmV2ZXJ0IG1vZGVzXG5cdFx0XHRcdGlmIChjdHgub25TYXZlRmFpbHVyZSkge1xuXHRcdFx0XHRcdGN0eC5vblNhdmVGYWlsdXJlKHRoaXMpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zdCBpc1RleHRSZWRpcmVjdCA9ICh0ZXh0KSA9PiB7XG5cdFx0XHRpZiAoIXRleHQpIHtcblx0XHRcdFx0Ly8gbm8gdGV4dCAtIGNvbnRlbnQgZW1wdHkgb3IgaW5hY2Nlc3NpYmxlIChyZXZkZWxsZWQgb3Igc3VwcHJlc3NlZClcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIE1vcmViaXRzLmwxMG4ucmVkaXJlY3RUYWdBbGlhc2VzLnNvbWUoKHRhZykgPT4ge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFJlZ0V4cChgXlxcXFxzKiR7dGFnfVxcXFxXYCwgJ2knKS50ZXN0KHRleHQpO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRjb25zdCBmbkxvb2t1cENyZWF0aW9uU3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4Lmxvb2t1cENyZWF0aW9uQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRpZiAoIWZuQ2hlY2tQYWdlTmFtZShyZXNwb25zZSwgY3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHJldiA9IHJlc3BvbnNlLnBhZ2VzWzBdLnJldmlzaW9ucyAmJiByZXNwb25zZS5wYWdlc1swXS5yZXZpc2lvbnNbMF07XG5cdFx0XHRpZiAoIXJldikge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcihcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aXoOazleaJvuWIsCcsICfnhKHms5Xmib7liLAnKSArXG5cdFx0XHRcdFx0XHRjdHgucGFnZU5hbWUgK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfnmoTku7vkvZXkv67orqLniYjmnKwnLCAn55qE5Lu75L2V5L+u6KiC54mI5pysJylcblx0XHRcdFx0KTtcblx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC5sb29rdXBOb25SZWRpcmVjdENyZWF0b3IgfHwgIWlzVGV4dFJlZGlyZWN0KHJldi5jb250ZW50KSkge1xuXHRcdFx0XHRjdHguY3JlYXRvciA9IHJldi51c2VyO1xuXHRcdFx0XHRpZiAoIWN0eC5jcmVhdG9yKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfml6Dms5Xojrflj5bpobXpnaLliJvlu7rogIXnmoTlkI3lrZcnLCAn54Sh5rOV5Y+W5b6X6aCB6Z2i5bu656uL6ICF55qE5ZCN5a2XJykpO1xuXHRcdFx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0Y3R4LnRpbWVzdGFtcCA9IHJldi50aW1lc3RhbXA7XG5cdFx0XHRcdGlmICghY3R4LnRpbWVzdGFtcCkge1xuXHRcdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5peg5rOV6I635Y+W6aG16Z2i5Yib5bu65pe26Ze0JywgJ+eEoeazleWPluW+l+mggemdouW7uueri+aZgumWkycpKTtcblx0XHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmluZm8od2luZG93LndnVUxTKCflt7Lojrflj5bpobXpnaLliJvlu7rkv6Hmga8nLCAn5bey5Y+W5b6X6aCB6Z2i5bu656uL6LOH6KiKJykpO1xuXHRcdFx0XHRjdHgub25Mb29rdXBDcmVhdGlvblN1Y2Nlc3ModGhpcyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkucXVlcnkucnZsaW1pdCA9IDUwOyAvLyBtb2RpZnkgcHJldmlvdXMgcXVlcnkgdG8gZmV0Y2ggbW9yZSByZXZpc2lvbnNcblx0XHRcdFx0Y3R4Lmxvb2t1cENyZWF0aW9uQXBpLnF1ZXJ5LnRpdGxlcyA9IGN0eC5wYWdlTmFtZTsgLy8gdXBkYXRlIHBhZ2VOYW1lIGlmIHJlZGlyZWN0IHJlc29sdXRpb24gdG9vayBwbGFjZSBpbiBlYXJsaWVyIHF1ZXJ5XG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+iOt+WPlumhtemdouWIm+W7uuS/oeaBrycsICflj5blvpfpoIHpnaLlu7rnq4vos4foqIonKSxcblx0XHRcdFx0XHRjdHgubG9va3VwQ3JlYXRpb25BcGkucXVlcnksXG5cdFx0XHRcdFx0Zm5Mb29rdXBOb25SZWRpcmVjdENyZWF0b3IsXG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRcdGN0eC5sb29rdXBDcmVhdGlvbkFwaS5wb3N0KCk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBmbkxvb2t1cE5vblJlZGlyZWN0Q3JlYXRvciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4Lmxvb2t1cENyZWF0aW9uQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRjb25zdCByZXZzID0gcmVzcG9uc2UucGFnZXNbMF0ucmV2aXNpb25zO1xuXHRcdFx0Zm9yIChjb25zdCByZXYgb2YgcmV2cykge1xuXHRcdFx0XHRpZiAoIWlzVGV4dFJlZGlyZWN0KHJldi5jb250ZW50KSkge1xuXHRcdFx0XHRcdGN0eC5jcmVhdG9yID0gcmV2LnVzZXI7XG5cdFx0XHRcdFx0Y3R4LnRpbWVzdGFtcCA9IHJldi50aW1lc3RhbXA7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmICghY3R4LmNyZWF0b3IpIHtcblx0XHRcdFx0Ly8gZmFsbGJhY2sgdG8gZ2l2ZSBmaXJzdCByZXZpc2lvbiBhdXRob3IgaWYgbm8gbm9uLXJlZGlyZWN0IHZlcnNpb24gaW4gdGhlIGZpcnN0IDUwXG5cdFx0XHRcdGN0eC5jcmVhdG9yID0gcmV2c1swXS51c2VyO1xuXHRcdFx0XHRjdHgudGltZXN0YW1wID0gcmV2c1swXS50aW1lc3RhbXA7XG5cdFx0XHRcdGlmICghY3R4LmNyZWF0b3IpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aXoOazleiOt+WPlumhtemdouWIm+W7uuiAheeahOWQjeWtlycsICfnhKHms5Xlj5blvpfpoIHpnaLlu7rnq4vogIXnmoTlkI3lrZcnKSk7XG5cdFx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHgudGltZXN0YW1wKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5peg5rOV6I635Y+W6aG16Z2i5Yib5bu65pe26Ze0JywgJ+eEoeazleWPluW+l+mggemdouW7uueri+aZgumWkycpKTtcblx0XHRcdFx0Y3R4Lm9uTG9va3VwQ3JlYXRpb25GYWlsdXJlKHRoaXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRjdHguc3RhdHVzRWxlbWVudC5pbmZvKHdpbmRvdy53Z1VMUygn5bey6I635Y+W6aG16Z2i5Yib5bu65L+h5oGvJywgJ+W3suWPluW+l+mggemdouW7uueri+izh+ioiicpKTtcblx0XHRcdGN0eC5vbkxvb2t1cENyZWF0aW9uU3VjY2Vzcyh0aGlzKTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIENvbW1vbiBjaGVja3MgZm9yIGFjdGlvbiBtZXRob2RzLiBVc2VkIGZvciBtb3ZlLCB1bmRlbGV0ZSwgZGVsZXRlLFxuXHRcdCAqIHByb3RlY3QuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uIC0gVGhlIGFjdGlvbiBiZWluZyBjaGVja2VkLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBvbkZhaWx1cmUgLSBGYWlsdXJlIGNhbGxiYWNrLlxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdGNvbnN0IGZuUHJlZmxpZ2h0Q2hlY2tzID0gZnVuY3Rpb24gKGFjdGlvbiwgb25GYWlsdXJlKSB7XG5cdFx0XHQvLyBpZiBhIG5vbi1hZG1pbiB0cmllcyB0byBkbyB0aGlzLCBkb24ndCBib3RoZXJcblx0XHRcdGlmICghTW9yZWJpdHMudXNlcklzU3lzb3AgJiYgYWN0aW9uICE9PSAnbW92ZScpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfml6Dms5Xlr7npobXpnaLov5vooYzigJwnLCAn54Sh5rOV5bCN6aCB6Z2i6YCy6KGM44CMJykgK1xuXHRcdFx0XHRcdFx0YWN0aW9uICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd5pON5L2c77ya5Y+q5pyJ566h55CG5ZGY5Y+v5Lul6L+b6KGM5q2k5pON5L2cJywgJ+OAjeaTjeS9nO+8muWPquacieeuoeeQhuWToeWPr+S7pemAsuihjOatpOaTjeS9nCcpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHguZWRpdFN1bW1hcnkpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoYEludGVybmFsIGVycm9yOiAke2FjdGlvbn0gcmVhc29uIG5vdCBzZXQgKHVzZSBzZXRFZGl0U3VtbWFyeSBmdW5jdGlvbikhYCk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7IC8vIGFsbCBPS1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogQ29tbW9uIGNoZWNrcyBmb3IgZm5Qcm9jZXNzIGZ1bmN0aW9ucyAoYGZuUHJvY2Vzc0RlbGV0ZWAsIGBmblByb2Nlc3NNb3ZlYCwgZXRjLlxuXHRcdCAqIFVzZWQgZm9yIG1vdmUsIHVuZGVsZXRlLCBkZWxldGUsIHByb3RlY3QuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gYWN0aW9uIC0gVGhlIGFjdGlvbiBiZWluZyBjaGVja2VkLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBvbkZhaWx1cmUgLSBGYWlsdXJlIGNhbGxiYWNrLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSByZXNwb25zZSAtIFRoZSByZXNwb25zZSBkb2N1bWVudCBmcm9tIHRoZSBBUEkgY2FsbC5cblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHRjb25zdCBmblByb2Nlc3NDaGVja3MgPSBmdW5jdGlvbiAoYWN0aW9uLCBvbkZhaWx1cmUsIHJlc3BvbnNlKSB7XG5cdFx0XHRjb25zdCBbe21pc3Npbmd9XSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0Ly8gTm8gdW5kZWxldGUgYXMgYW4gZXhpc3RpbmcgcGFnZSBjb3VsZCBoYXZlIGRlbGV0ZWQgcmV2aXNpb25zXG5cdFx0XHRjb25zdCBhY3Rpb25NaXNzaW5nID0gbWlzc2luZyAmJiBbJ2RlbGV0ZScsICdtb3ZlJ10uaW5jbHVkZXMoYWN0aW9uKTtcblx0XHRcdGNvbnN0IHByb3RlY3RNaXNzaW5nID0gYWN0aW9uID09PSAncHJvdGVjdCcgJiYgbWlzc2luZyAmJiAoY3R4LnByb3RlY3RFZGl0IHx8IGN0eC5wcm90ZWN0TW92ZSk7XG5cdFx0XHRjb25zdCBzYWx0TWlzc2luZyA9IGFjdGlvbiA9PT0gJ3Byb3RlY3QnICYmICFtaXNzaW5nICYmIGN0eC5wcm90ZWN0Q3JlYXRlO1xuXHRcdFx0aWYgKGFjdGlvbk1pc3NpbmcgfHwgcHJvdGVjdE1pc3NpbmcgfHwgc2FsdE1pc3NpbmcpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0YCR7XG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+aXoOazleWvuemhtemdoui/m+ihjOKAnCcsICfnhKHms5XlsI3poIHpnaLpgLLooYzjgIwnKSArXG5cdFx0XHRcdFx0XHRhY3Rpb24gK1xuXHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3mk43kvZzvvIzlm6DkuLrpobXpnaInLCAn44CN5pON5L2c77yM5Zug54K66aCB6Z2iJykgK1xuXHRcdFx0XHRcdFx0KG1pc3NpbmcgPyAn5bey5LiNJyA6IHdpbmRvdy53Z1VMUygn5bey57uPJywgJ+W3sue2kycpKVxuXHRcdFx0XHRcdH3lrZjlnKhgXG5cdFx0XHRcdCk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRGVsZXRlLCB1bmRlbGV0ZSwgbW92ZVxuXHRcdFx0Ly8gZXh0cmFjdCBwcm90ZWN0aW9uIGluZm9cblx0XHRcdGxldCBlZGl0cHJvdDtcblx0XHRcdGlmIChhY3Rpb24gPT09ICd1bmRlbGV0ZScpIHtcblx0XHRcdFx0ZWRpdHByb3QgPSByZXNwb25zZS5wYWdlc1swXS5wcm90ZWN0aW9uXG5cdFx0XHRcdFx0LmZpbHRlcigocHIpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBwci50eXBlID09PSAnY3JlYXRlJyAmJiBwci5sZXZlbCA9PT0gJ3N5c29wJztcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5wb3AoKTtcblx0XHRcdH0gZWxzZSBpZiAoYWN0aW9uID09PSAnZGVsZXRlJyB8fCBhY3Rpb24gPT09ICdtb3ZlJykge1xuXHRcdFx0XHRlZGl0cHJvdCA9IHJlc3BvbnNlLnBhZ2VzWzBdLnByb3RlY3Rpb25cblx0XHRcdFx0XHQuZmlsdGVyKChwcikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByLnR5cGUgPT09ICdlZGl0JyAmJiBwci5sZXZlbCA9PT0gJ3N5c29wJztcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5wb3AoKTtcblx0XHRcdH1cblx0XHRcdGlmIChcblx0XHRcdFx0ZWRpdHByb3QgJiZcblx0XHRcdFx0IWN0eC5zdXBwcmVzc1Byb3RlY3RXYXJuaW5nICYmXG5cdFx0XHRcdCFjb25maXJtKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5oKo5Y2z5bCG5a+55YWo5L+d5oqk6aG16Z2i4oCcJywgJ+aCqOWNs+Wwh+WwjeWFqOS/neitt+mggemdouOAjCcpICtcblx0XHRcdFx0XHRcdGN0eC5wYWdlTmFtZSArXG5cdFx0XHRcdFx0XHQoZWRpdHByb3QuZXhwaXJ5ID09PSAnaW5maW5pdHknXG5cdFx0XHRcdFx0XHRcdD8gd2luZG93LndnVUxTKCfigJ3vvIjmsLjkuYXvvIknLCAn44CN77yI5rC45LmF77yJJylcblx0XHRcdFx0XHRcdFx0OiBgJHtcblx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd77yI5Yiw5pyf77yaJywgJ+OAje+8iOWIsOacn++8micpICtcblx0XHRcdFx0XHRcdFx0XHRcdG5ldyBNb3JlYml0cy5kYXRlKGVkaXRwcm90LmV4cGlyeSkuY2FsZW5kYXIoJ3V0YycpXG5cdFx0XHRcdFx0XHRcdFx0fSAoVVRDKe+8iWApICtcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn4oCd6L+b6KGM4oCcJywgJ+OAjemAsuihjOOAjCcpICtcblx0XHRcdFx0XHRcdGFjdGlvbiArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoJ+KAneaTjeS9nCcsICfjgI3mk43kvZwnKSArXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdCfjgIJcXG5cXG7ljZXlh7vnoa7lrprku6Xnu6fnu63mk43kvZzvvIzmiJbljZXlh7vlj5bmtojku6Xlj5bmtojmk43kvZzjgIInLFxuXHRcdFx0XHRcdFx0XHQn44CCXFxuXFxu6bue5pOK56K65a6a5Lul57m857qM5pON5L2c77yM5oiW6bue5pOK5Y+W5raI5Lul5Y+W5raI5pON5L2c44CCJ1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHQpXG5cdFx0XHQpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCflt7Llj5bmtojlr7nlhajkv53miqTpobXpnaLnmoTmk43kvZzjgIInLCAn5bey5Y+W5raI5bCN5YWo5L+d6K236aCB6Z2i55qE5pON5L2c44CCJykpO1xuXHRcdFx0XHRvbkZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGlmICghcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbikge1xuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+aXoOazleiOt+WPluS7pOeJjOOAgicsICfnhKHms5Xlj5blvpfmrIrmnZbjgIInKSk7XG5cdFx0XHRcdG9uRmFpbHVyZSh0aGlzKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7IC8vIGFsbCBPS1xuXHRcdH07XG5cblx0XHRjb25zdCBmblByb2Nlc3NNb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IHBhZ2VUaXRsZTtcblx0XHRcdGxldCB0b2tlbjtcblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdtb3ZlJykpIHtcblx0XHRcdFx0dG9rZW4gPSBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpO1xuXHRcdFx0XHRwYWdlVGl0bGUgPSBjdHgucGFnZU5hbWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByZXNwb25zZSA9IGN0eC5tb3ZlQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRcdGlmICghZm5Qcm9jZXNzQ2hlY2tzKCdtb3ZlJywgY3R4Lm9uTW92ZUZhaWx1cmUsIHJlc3BvbnNlKSkge1xuXHRcdFx0XHRcdHJldHVybjsgLy8gYWJvcnRcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdFx0Y29uc3QgW3BhZ2VdID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IHBhZ2UudGl0bGU7XG5cdFx0XHRcdGN0eC53YXRjaGVkID0gcGFnZS53YXRjaGxpc3RleHBpcnkgfHwgcGFnZS53YXRjaGVkO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcXVlcnkgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ21vdmUnLFxuXHRcdFx0XHRmcm9tOiBwYWdlVGl0bGUsXG5cdFx0XHRcdHRvOiBjdHgubW92ZURlc3RpbmF0aW9uLFxuXHRcdFx0XHR0b2tlbixcblx0XHRcdFx0cmVhc29uOiBjdHguZWRpdFN1bW1hcnksXG5cdFx0XHRcdHdhdGNobGlzdDogY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGlmIChmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gY3R4LndhdGNobGlzdEV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGlmIChjdHgubW92ZVRhbGtQYWdlKSB7XG5cdFx0XHRcdHF1ZXJ5Lm1vdmV0YWxrID0gJ3RydWUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5tb3ZlU3VicGFnZXMpIHtcblx0XHRcdFx0cXVlcnkubW92ZXN1YnBhZ2VzID0gJ3RydWUnO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGN0eC5tb3ZlU3VwcHJlc3NSZWRpcmVjdCkge1xuXHRcdFx0XHRxdWVyeS5ub3JlZGlyZWN0ID0gJ3RydWUnO1xuXHRcdFx0fVxuXHRcdFx0Y3R4Lm1vdmVQcm9jZXNzQXBpID0gbmV3IE1vcmViaXRzLndpa2kuYXBpKFxuXHRcdFx0XHR3aW5kb3cud2dVTFMoJ+enu+WKqOmhtemdouKApuKApicsICfnp7vli5XpoIHpnaLigKbigKYnKSxcblx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdGN0eC5vbk1vdmVTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Y3R4Lm9uTW92ZUZhaWx1cmVcblx0XHRcdCk7XG5cdFx0XHRjdHgubW92ZVByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4Lm1vdmVQcm9jZXNzQXBpLnBvc3QoKTtcblx0XHR9O1xuXHRcdGNvbnN0IGZuUHJvY2Vzc1BhdHJvbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXRyb2wnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHQvLyBEaWRuJ3QgbmVlZCB0byBsb2FkIHRoZSBwYWdlXG5cdFx0XHRpZiAoY3R4LnJjaWQpIHtcblx0XHRcdFx0cXVlcnkucmNpZCA9IGN0eC5yY2lkO1xuXHRcdFx0XHRxdWVyeS50b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgncGF0cm9sVG9rZW4nKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LnBhdHJvbEFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0XHQvLyBEb24ndCBwYXRyb2wgaWYgbm90IHVucGF0cm9sbGVkXG5cdFx0XHRcdGlmICghcmVzcG9uc2UucmVjZW50Y2hhbmdlc1swXS51bnBhdHJvbGxlZCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb25zdCBbe2xhc3RyZXZpZH1dID0gcmVzcG9uc2UucGFnZXM7XG5cdFx0XHRcdGlmICghbGFzdHJldmlkKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHF1ZXJ5LnJldmlkID0gbGFzdHJldmlkO1xuXHRcdFx0XHRjb25zdCB0b2tlbiA9IHJlc3BvbnNlLnRva2Vucy5jc3JmdG9rZW47XG5cdFx0XHRcdGlmICghdG9rZW4pIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cXVlcnkudG9rZW4gPSB0b2tlbjtcblx0XHRcdH1cblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBwYXRyb2xTdGF0ID0gbmV3IE1vcmViaXRzLnN0YXR1cyh3aW5kb3cud2dVTFMoJ+agh+iusOmhtemdouS4uuW3suW3oeafpScsICfmqJnoqJjpoIHpnaLngrrlt7Llt6Hmn6UnKSk7XG5cdFx0XHRjdHgucGF0cm9sUHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCflt6Hmn6XpobXpnaLigKbigKYnLCAn5beh5p+l6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHRwYXRyb2xTdGF0XG5cdFx0XHQpO1xuXHRcdFx0Y3R4LnBhdHJvbFByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LnBhdHJvbFByb2Nlc3NBcGkucG9zdCgpO1xuXHRcdH07XG5cdFx0Y29uc3QgZm5Qcm9jZXNzRGVsZXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0bGV0IHBhZ2VUaXRsZTtcblx0XHRcdGxldCB0b2tlbjtcblx0XHRcdGlmIChmbkNhblVzZU13VXNlclRva2VuKCdkZWxldGUnKSkge1xuXHRcdFx0XHR0b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IGN0eC5wYWdlTmFtZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LmRlbGV0ZUFwaS5nZXRSZXNwb25zZSgpLnF1ZXJ5O1xuXHRcdFx0XHRpZiAoIWZuUHJvY2Vzc0NoZWNrcygnZGVsZXRlJywgY3R4Lm9uRGVsZXRlRmFpbHVyZSwgcmVzcG9uc2UpKSB7XG5cdFx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0XHRjb25zdCBbcGFnZV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdFx0cGFnZVRpdGxlID0gcGFnZS50aXRsZTtcblx0XHRcdFx0Y3R4LndhdGNoZWQgPSBwYWdlLndhdGNobGlzdGV4cGlyeSB8fCBwYWdlLndhdGNoZWQ7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAnZGVsZXRlJyxcblx0XHRcdFx0dGl0bGU6IHBhZ2VUaXRsZSxcblx0XHRcdFx0dG9rZW4sXG5cdFx0XHRcdHJlYXNvbjogY3R4LmVkaXRTdW1tYXJ5LFxuXHRcdFx0XHR3YXRjaGxpc3Q6IGN0eC53YXRjaGxpc3RPcHRpb24sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChjdHguY2hhbmdlVGFncykge1xuXHRcdFx0XHRxdWVyeS50YWdzID0gY3R4LmNoYW5nZVRhZ3M7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZm5BcHBseVdhdGNobGlzdEV4cGlyeSgpKSB7XG5cdFx0XHRcdHF1ZXJ5LndhdGNobGlzdGV4cGlyeSA9IGN0eC53YXRjaGxpc3RFeHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRjdHguZGVsZXRlUHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfliKDpmaTpobXpnaLigKbigKYnLCAn5Yiq6Zmk6aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRjdHgub25EZWxldGVTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Zm5Qcm9jZXNzRGVsZXRlRXJyb3Jcblx0XHRcdCk7XG5cdFx0XHRjdHguZGVsZXRlUHJvY2Vzc0FwaS5zZXRQYXJlbnQodGhpcyk7XG5cdFx0XHRjdHguZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIGRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpXG5cdFx0Y29uc3QgZm5Qcm9jZXNzRGVsZXRlRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBlcnJvckNvZGUgPSBjdHguZGVsZXRlUHJvY2Vzc0FwaS5nZXRFcnJvckNvZGUoKTtcblx0XHRcdC8vIGNoZWNrIGZvciBcIkRhdGFiYXNlIHF1ZXJ5IGVycm9yXCJcblx0XHRcdGlmIChlcnJvckNvZGUgPT09ICdpbnRlcm5hbF9hcGlfZXJyb3JfREJRdWVyeUVycm9yJyAmJiBjdHgucmV0cmllcysrIDwgY3R4Lm1heFJldHJpZXMpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+aVsOaNruW6k+afpeivoumUmeivr++8jOmHjeivlScsICfos4fmlpnluqvmn6XoqaLpjK/oqqTvvIzph43oqaYnKSk7XG5cdFx0XHRcdC0tTW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0OyAvLyBhbGxvdyBmb3Igbm9ybWFsIGNvbXBsZXRpb24gaWYgcmV0cnkgc3VjY2VlZHNcblx0XHRcdFx0Y3R4LmRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpOyAvLyBnaXZlIGl0IGFub3RoZXIgZ28hXG5cdFx0XHR9IGVsc2UgaWYgKGVycm9yQ29kZSA9PT0gJ21pc3Npbmd0aXRsZScpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3Iod2luZG93LndnVUxTKCfkuI3og73liKDpmaTpobXpnaLvvIzlm6Dlhbblt7LkuI3lrZjlnKgnLCAn5LiN6IO95Yiq6Zmk6aCB6Z2i77yM5Zug5YW25bey5LiN5a2Y5ZyoJykpO1xuXHRcdFx0XHRpZiAoY3R4Lm9uRGVsZXRlRmFpbHVyZSkge1xuXHRcdFx0XHRcdGN0eC5vbkRlbGV0ZUZhaWx1cmUuY2FsbCh0aGlzLCBjdHguZGVsZXRlUHJvY2Vzc0FwaSk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGhhcmQgZXJyb3IsIGdpdmUgdXBcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5peg5rOV5Yig6Zmk6aG16Z2i77yaJywgJ+eEoeazleWIqumZpOmggemdou+8micpICsgY3R4LmRlbGV0ZVByb2Nlc3NBcGkuZ2V0RXJyb3JUZXh0KClcblx0XHRcdFx0KTtcblx0XHRcdFx0aWYgKGN0eC5vbkRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRjdHgub25EZWxldGVGYWlsdXJlLmNhbGwodGhpcywgY3R4LmRlbGV0ZVByb2Nlc3NBcGkpOyAvLyBpbnZva2UgY2FsbGJhY2tcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zdCBmblByb2Nlc3NVbmRlbGV0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGxldCBwYWdlVGl0bGU7XG5cdFx0XHRsZXQgdG9rZW47XG5cdFx0XHRpZiAoZm5DYW5Vc2VNd1VzZXJUb2tlbigndW5kZWxldGUnKSkge1xuXHRcdFx0XHR0b2tlbiA9IG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJyk7XG5cdFx0XHRcdHBhZ2VUaXRsZSA9IGN0eC5wYWdlTmFtZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LnVuZGVsZXRlQXBpLmdldFJlc3BvbnNlKCkucXVlcnk7XG5cdFx0XHRcdGlmICghZm5Qcm9jZXNzQ2hlY2tzKCd1bmRlbGV0ZScsIGN0eC5vblVuZGVsZXRlRmFpbHVyZSwgcmVzcG9uc2UpKSB7XG5cdFx0XHRcdFx0cmV0dXJuOyAvLyBhYm9ydFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dG9rZW4gPSByZXNwb25zZS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0XHRjb25zdCBbcGFnZV0gPSByZXNwb25zZS5wYWdlcztcblx0XHRcdFx0cGFnZVRpdGxlID0gcGFnZS50aXRsZTtcblx0XHRcdFx0Y3R4LndhdGNoZWQgPSBwYWdlLndhdGNobGlzdGV4cGlyeSB8fCBwYWdlLndhdGNoZWQ7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBxdWVyeSA9IHtcblx0XHRcdFx0YWN0aW9uOiAndW5kZWxldGUnLFxuXHRcdFx0XHR0aXRsZTogcGFnZVRpdGxlLFxuXHRcdFx0XHR0b2tlbixcblx0XHRcdFx0cmVhc29uOiBjdHguZWRpdFN1bW1hcnksXG5cdFx0XHRcdHdhdGNobGlzdDogY3R4LndhdGNobGlzdE9wdGlvbixcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGlmIChmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gY3R4LndhdGNobGlzdEV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn6L+Y5Y6f6aG16Z2i4oCm4oCmJywgJ+mChOWOn+mggemdouKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Y3R4Lm9uVW5kZWxldGVTdWNjZXNzLFxuXHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudCxcblx0XHRcdFx0Zm5Qcm9jZXNzVW5kZWxldGVFcnJvclxuXHRcdFx0KTtcblx0XHRcdGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkuc2V0UGFyZW50KHRoaXMpO1xuXHRcdFx0Y3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHQvLyBjYWxsYmFjayBmcm9tIHVuZGVsZXRlUHJvY2Vzc0FwaS5wb3N0KClcblx0XHRjb25zdCBmblByb2Nlc3NVbmRlbGV0ZUVycm9yID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgZXJyb3JDb2RlID0gY3R4LnVuZGVsZXRlUHJvY2Vzc0FwaS5nZXRFcnJvckNvZGUoKTtcblx0XHRcdC8vIGNoZWNrIGZvciBcIkRhdGFiYXNlIHF1ZXJ5IGVycm9yXCJcblx0XHRcdGlmIChlcnJvckNvZGUgPT09ICdpbnRlcm5hbF9hcGlfZXJyb3JfREJRdWVyeUVycm9yJykge1xuXHRcdFx0XHRpZiAoY3R4LnJldHJpZXMrKyA8IGN0eC5tYXhSZXRyaWVzKSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+aVsOaNruW6k+afpeivoumUmeivr++8jOmHjeivlScsICfos4fmlpnluqvmn6XoqaLpjK/oqqTvvIzph43oqaYnKSk7XG5cdFx0XHRcdFx0LS1Nb3JlYml0cy53aWtpLm51bWJlck9mQWN0aW9uc0xlZnQ7IC8vIGFsbG93IGZvciBub3JtYWwgY29tcGxldGlvbiBpZiByZXRyeSBzdWNjZWVkc1xuXHRcdFx0XHRcdGN0eC51bmRlbGV0ZVByb2Nlc3NBcGkucG9zdCgpOyAvLyBnaXZlIGl0IGFub3RoZXIgZ28hXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdCfmjIHnu63nmoTmlbDmja7lupPmn6Xor6LplJnor6/vvIzph43mlrDliqDovb3pobXpnaLlubbph43or5UnLFxuXHRcdFx0XHRcdFx0XHQn5oyB57qM55qE6LOH5paZ5bqr5p+l6Kmi6Yyv6Kqk77yM6YeN5paw6LyJ5YWl6aCB6Z2i5Lim6YeN6KmmJ1xuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0aWYgKGN0eC5vblVuZGVsZXRlRmFpbHVyZSkge1xuXHRcdFx0XHRcdFx0Y3R4Lm9uVW5kZWxldGVGYWlsdXJlLmNhbGwodGhpcywgY3R4LnVuZGVsZXRlUHJvY2Vzc0FwaSk7IC8vIGludm9rZSBjYWxsYmFja1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChlcnJvckNvZGUgPT09ICdjYW50dW5kZWxldGUnKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKFxuXHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdCfml6Dms5Xov5jljp/liKDpmaTpobXpnaLvvIzlm6DmsqHmnInniYjmnKzkvpvov5jljp/miJblt7Looqvov5jljp8nLFxuXHRcdFx0XHRcdFx0J+eEoeazlemChOWOn+WIqumZpOmggemdou+8jOWboOaykuacieeJiOacrOS+m+mChOWOn+aIluW3suiiq+mChOWOnydcblx0XHRcdFx0XHQpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChjdHgub25VbmRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRjdHgub25VbmRlbGV0ZUZhaWx1cmUuY2FsbCh0aGlzLCBjdHgudW5kZWxldGVQcm9jZXNzQXBpKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gaGFyZCBlcnJvciwgZ2l2ZSB1cFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuZXJyb3IoXG5cdFx0XHRcdFx0d2luZG93LndnVUxTKCfml6Dms5Xov5jljp/pobXpnaLvvJonLCAn54Sh5rOV6YKE5Y6f6aCB6Z2i77yaJykgKyBjdHgudW5kZWxldGVQcm9jZXNzQXBpLmdldEVycm9yVGV4dCgpXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChjdHgub25VbmRlbGV0ZUZhaWx1cmUpIHtcblx0XHRcdFx0XHRjdHgub25VbmRlbGV0ZUZhaWx1cmUuY2FsbCh0aGlzLCBjdHgudW5kZWxldGVQcm9jZXNzQXBpKTsgLy8gaW52b2tlIGNhbGxiYWNrXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3QgZm5Qcm9jZXNzUHJvdGVjdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHJlc3BvbnNlID0gY3R4LnByb3RlY3RBcGkuZ2V0UmVzcG9uc2UoKS5xdWVyeTtcblx0XHRcdGlmICghZm5Qcm9jZXNzQ2hlY2tzKCdwcm90ZWN0JywgY3R4Lm9uUHJvdGVjdEZhaWx1cmUsIHJlc3BvbnNlKSkge1xuXHRcdFx0XHRyZXR1cm47IC8vIGFib3J0XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHRva2VuID0gcmVzcG9uc2UudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdGNvbnN0IFtwYWdlXSA9IHJlc3BvbnNlLnBhZ2VzO1xuXHRcdFx0Y29uc3QgcGFnZVRpdGxlID0gcGFnZS50aXRsZTtcblx0XHRcdGN0eC53YXRjaGVkID0gcGFnZS53YXRjaGxpc3RleHBpcnkgfHwgcGFnZS53YXRjaGVkO1xuXHRcdFx0Ly8gRmV0Y2ggZXhpc3RpbmcgcHJvdGVjdGlvbiBsZXZlbHNcblx0XHRcdGNvbnN0IHBycyA9IHJlc3BvbnNlLnBhZ2VzWzBdLnByb3RlY3Rpb247XG5cdFx0XHRsZXQgZWRpdHByb3Q7XG5cdFx0XHRsZXQgbW92ZXByb3Q7XG5cdFx0XHRsZXQgY3JlYXRlcHJvdDtcblx0XHRcdGZvciAoY29uc3QgcHIgb2YgcHJzKSB7XG5cdFx0XHRcdC8vIEZpbHRlciBvdXQgcHJvdGVjdGlvbiBmcm9tIGNhc2NhZGluZ1xuXHRcdFx0XHRpZiAocHIudHlwZSA9PT0gJ2VkaXQnICYmICFwci5zb3VyY2UpIHtcblx0XHRcdFx0XHRlZGl0cHJvdCA9IHByO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHByLnR5cGUgPT09ICdtb3ZlJykge1xuXHRcdFx0XHRcdG1vdmVwcm90ID0gcHI7XG5cdFx0XHRcdH0gZWxzZSBpZiAocHIudHlwZSA9PT0gJ2NyZWF0ZScpIHtcblx0XHRcdFx0XHRjcmVhdGVwcm90ID0gcHI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIEZhbGwgYmFjayB0byBjdXJyZW50IGxldmVscyBpZiBub3QgZXhwbGljaXRseSBzZXRcblx0XHRcdGlmICghY3R4LnByb3RlY3RFZGl0ICYmIGVkaXRwcm90KSB7XG5cdFx0XHRcdGN0eC5wcm90ZWN0RWRpdCA9IHtcblx0XHRcdFx0XHRsZXZlbDogZWRpdHByb3QubGV2ZWwsXG5cdFx0XHRcdFx0ZXhwaXJ5OiBlZGl0cHJvdC5leHBpcnksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWN0eC5wcm90ZWN0TW92ZSAmJiBtb3ZlcHJvdCkge1xuXHRcdFx0XHRjdHgucHJvdGVjdE1vdmUgPSB7XG5cdFx0XHRcdFx0bGV2ZWw6IG1vdmVwcm90LmxldmVsLFxuXHRcdFx0XHRcdGV4cGlyeTogbW92ZXByb3QuZXhwaXJ5LFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFjdHgucHJvdGVjdENyZWF0ZSAmJiBjcmVhdGVwcm90KSB7XG5cdFx0XHRcdGN0eC5wcm90ZWN0Q3JlYXRlID0ge1xuXHRcdFx0XHRcdGxldmVsOiBjcmVhdGVwcm90LmxldmVsLFxuXHRcdFx0XHRcdGV4cGlyeTogY3JlYXRlcHJvdC5leHBpcnksXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHQvLyBEZWZhdWx0IHRvIHByZS1leGlzdGluZyBjYXNjYWRpbmcgcHJvdGVjdGlvbiBpZiB1bmNoYW5nZWQgKHNpbWlsYXIgdG8gYWJvdmUpXG5cdFx0XHRpZiAoY3R4LnByb3RlY3RDYXNjYWRlID09PSBudWxsKSB7XG5cdFx0XHRcdGN0eC5wcm90ZWN0Q2FzY2FkZSA9ICEhcHJzLmZpbHRlcigocHIpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gcHIuY2FzY2FkZTtcblx0XHRcdFx0fSkubGVuZ3RoO1xuXHRcdFx0fVxuXHRcdFx0Ly8gV2FybiBpZiBjYXNjYWRpbmcgcHJvdGVjdGlvbiBiZWluZyBhcHBsaWVkIHdpdGggYW4gaW52YWxpZCBwcm90ZWN0aW9uIGxldmVsLFxuXHRcdFx0Ly8gd2hpY2ggZm9yIGVkaXQgcHJvdGVjdGlvbiB3aWxsIGNhdXNlIGNhc2NhZGluZyB0byBiZSBzaWxlbnRseSBzdHJpcHBlZFxuXHRcdFx0aWYgKGN0eC5wcm90ZWN0Q2FzY2FkZSkge1xuXHRcdFx0XHQvLyBPbiBtb3ZlIHByb3RlY3Rpb24sIHRoaXMgaXMgdGVjaG5pY2FsbHkgc3RyaWN0ZXIgdGhhbiB0aGUgTVcgQVBJLFxuXHRcdFx0XHQvLyBidXQgc2VlbXMgcmVhc29uYWJsZSB0byBhdm9pZCBkdW1iIHZhbHVlcyBhbmQgbWlzbGVhZGluZyBsb2cgZW50cmllcyAoVDI2NTYyNilcblx0XHRcdFx0aWYgKFxuXHRcdFx0XHRcdCghY3R4LnByb3RlY3RFZGl0IHx8XG5cdFx0XHRcdFx0XHRjdHgucHJvdGVjdEVkaXQubGV2ZWwgIT09ICdzeXNvcCcgfHxcblx0XHRcdFx0XHRcdCFjdHgucHJvdGVjdE1vdmUgfHxcblx0XHRcdFx0XHRcdGN0eC5wcm90ZWN0TW92ZS5sZXZlbCAhPT0gJ3N5c29wJykgJiZcblx0XHRcdFx0XHQhY29uZmlybShcblx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUygn5oKo5bey5a+54oCcJywgJ+aCqOW3suWwjeOAjCcpICtcblx0XHRcdFx0XHRcdFx0Y3R4LnBhZ2VOYW1lICtcblx0XHRcdFx0XHRcdFx0d2luZG93LndnVUxTKCfigJ3lkK/nlKjkuobov57plIHkv53miqQnLCAn44CN5ZWf55So5LqG6YCj6Y6W5L+d6K23JykgK1xuXHRcdFx0XHRcdFx0XHR3aW5kb3cud2dVTFMoXG5cdFx0XHRcdFx0XHRcdFx0J++8jOS9huayoeacieiuvue9ruS7heeuoeeQhuWRmOeahOS/neaKpOe6p+WIq+OAglxcblxcbicsXG5cdFx0XHRcdFx0XHRcdFx0J++8jOS9huaykuacieioreWumuWDheeuoeeQhuWToeeahOS/neitt+e0muWIpeOAglxcblxcbidcblx0XHRcdFx0XHRcdFx0KSArXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy53Z1VMUyhcblx0XHRcdFx0XHRcdFx0XHQn5Y2V5Ye756Gu6K6k5Lul6Ieq5Yqo6LCD5pW05bm257un57ut6L+e6ZSB5YWo5L+d5oqk77yM5Y2V5Ye75Y+W5raI5Lul6Lez6L+H5q2k5pON5L2cJyxcblx0XHRcdFx0XHRcdFx0XHQn6bue5pOK56K66KqN5Lul6Ieq5YuV6Kq/5pW05Lim57m857qM6YCj6Y6W5YWo5L+d6K2377yM6bue5pOK5Y+W5raI5Lul6Lez6YGO5q2k5pON5L2cJ1xuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC5lcnJvcih3aW5kb3cud2dVTFMoJ+i/numUgeS/neaKpOW3suWPlua2iOOAgicsICfpgKPpjpbkv53orbflt7Llj5bmtojjgIInKSk7XG5cdFx0XHRcdFx0Y3R4Lm9uUHJvdGVjdEZhaWx1cmUodGhpcyk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGN0eC5wcm90ZWN0RWRpdC5sZXZlbCA9ICdzeXNvcCc7XG5cdFx0XHRcdGN0eC5wcm90ZWN0TW92ZS5sZXZlbCA9ICdzeXNvcCc7XG5cdFx0XHR9XG5cdFx0XHQvLyBCdWlsZCBwcm90ZWN0aW9uIGxldmVscyBhbmQgZXhwaXJ5cyAoZXhwaXJpZXM/KSBmb3IgcXVlcnlcblx0XHRcdGNvbnN0IHByb3RlY3Rpb25zID0gW107XG5cdFx0XHRjb25zdCBleHBpcnlzID0gW107XG5cdFx0XHRpZiAoY3R4LnByb3RlY3RFZGl0KSB7XG5cdFx0XHRcdHByb3RlY3Rpb25zW3Byb3RlY3Rpb25zLmxlbmd0aF0gPSBgZWRpdD0ke2N0eC5wcm90ZWN0RWRpdC5sZXZlbH1gO1xuXHRcdFx0XHRleHBpcnlzW2V4cGlyeXMubGVuZ3RoXSA9IGN0eC5wcm90ZWN0RWRpdC5leHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LnByb3RlY3RNb3ZlKSB7XG5cdFx0XHRcdHByb3RlY3Rpb25zW3Byb3RlY3Rpb25zLmxlbmd0aF0gPSBgbW92ZT0ke2N0eC5wcm90ZWN0TW92ZS5sZXZlbH1gO1xuXHRcdFx0XHRleHBpcnlzW2V4cGlyeXMubGVuZ3RoXSA9IGN0eC5wcm90ZWN0TW92ZS5leHBpcnk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoY3R4LnByb3RlY3RDcmVhdGUpIHtcblx0XHRcdFx0cHJvdGVjdGlvbnNbcHJvdGVjdGlvbnMubGVuZ3RoXSA9IGBjcmVhdGU9JHtjdHgucHJvdGVjdENyZWF0ZS5sZXZlbH1gO1xuXHRcdFx0XHRleHBpcnlzW2V4cGlyeXMubGVuZ3RoXSA9IGN0eC5wcm90ZWN0Q3JlYXRlLmV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwcm90ZWN0Jyxcblx0XHRcdFx0dGl0bGU6IHBhZ2VUaXRsZSxcblx0XHRcdFx0dG9rZW4sXG5cdFx0XHRcdHByb3RlY3Rpb25zOiBwcm90ZWN0aW9ucy5qb2luKCd8JyksXG5cdFx0XHRcdGV4cGlyeTogZXhwaXJ5cy5qb2luKCd8JyksXG5cdFx0XHRcdHJlYXNvbjogY3R4LmVkaXRTdW1tYXJ5LFxuXHRcdFx0XHR3YXRjaGxpc3Q6IGN0eC53YXRjaGxpc3RPcHRpb24sXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdC8vIE9ubHkgc2hvd3MgdXAgaW4gbG9ncywgbm90IHBhZ2UgaGlzdG9yeVxuXHRcdFx0aWYgKGN0eC5jaGFuZ2VUYWdzKSB7XG5cdFx0XHRcdHF1ZXJ5LnRhZ3MgPSBjdHguY2hhbmdlVGFncztcblx0XHRcdH1cblx0XHRcdGlmIChmbkFwcGx5V2F0Y2hsaXN0RXhwaXJ5KCkpIHtcblx0XHRcdFx0cXVlcnkud2F0Y2hsaXN0ZXhwaXJ5ID0gY3R4LndhdGNobGlzdEV4cGlyeTtcblx0XHRcdH1cblx0XHRcdGlmIChjdHgucHJvdGVjdENhc2NhZGUpIHtcblx0XHRcdFx0cXVlcnkuY2FzY2FkZSA9ICd0cnVlJztcblx0XHRcdH1cblx0XHRcdGN0eC5wcm90ZWN0UHJvY2Vzc0FwaSA9IG5ldyBNb3JlYml0cy53aWtpLmFwaShcblx0XHRcdFx0d2luZG93LndnVUxTKCfkv53miqTpobXpnaLigKbigKYnLCAn5L+d6K236aCB6Z2i4oCm4oCmJyksXG5cdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRjdHgub25Qcm90ZWN0U3VjY2Vzcyxcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQsXG5cdFx0XHRcdGN0eC5vblByb3RlY3RGYWlsdXJlXG5cdFx0XHQpO1xuXHRcdFx0Y3R4LnByb3RlY3RQcm9jZXNzQXBpLnNldFBhcmVudCh0aGlzKTtcblx0XHRcdGN0eC5wcm90ZWN0UHJvY2Vzc0FwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHRjb25zdCBzbGVlcCA9IChtaWxsaXNlY29uZHMpID0+IHtcblx0XHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXHRcdFx0c2V0VGltZW91dChkZWZlcnJlZC5yZXNvbHZlLCBtaWxsaXNlY29uZHMpO1xuXHRcdFx0cmV0dXJuIGRlZmVycmVkO1xuXHRcdH07XG5cdH07IC8vIGVuZCBNb3JlYml0cy53aWtpLnBhZ2Vcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy53aWtpLnByZXZpZXcgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogVXNlIHRoZSBBUEkgdG8gcGFyc2UgYSBmcmFnbWVudCBvZiB3aWtpdGV4dCBhbmQgcmVuZGVyIGl0IGFzIEhUTUwuXG5cdCAqXG5cdCAqIFRoZSBzdWdnZXN0ZWQgaW1wbGVtZW50YXRpb24gcGF0dGVybiAoaW4ge0BsaW5rIE1vcmViaXRzLnNpbXBsZVdpbmRvd30gYW5kXG5cdCAqIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19IHNpdHVhdGlvbnMpIGlzIHRvIGNvbnN0cnVjdCBhXG5cdCAqIGBNb3JlYml0cy53aWtpLnByZXZpZXdgIG9iamVjdCBhZnRlciByZW5kZXJpbmcgYSBgTW9yZWJpdHMucXVpY2tGb3JtYCwgYW5kXG5cdCAqIGJpbmQgdGhlIG9iamVjdCB0byBhbiBhcmJpdHJhcnkgcHJvcGVydHkgb2YgdGhlIGZvcm0gKGUuZy4gfHByZXZpZXdlcnwpLlxuXHQgKiBGb3IgYW4gZXhhbXBsZSwgc2VlIHR3aW5rbGV3YXJuLmpzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraVxuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcHJldmlld2JveCAtIFRoZSBlbGVtZW50IHRoYXQgd2lsbCBjb250YWluIHRoZSByZW5kZXJlZCBIVE1MLFxuXHQgKiB1c3VhbGx5IGEgPGRpdj4gZWxlbWVudC5cblx0ICovXG5cdE1vcmViaXRzLndpa2kucHJldmlldyA9IGZ1bmN0aW9uIChwcmV2aWV3Ym94KSB7XG5cdFx0dGhpcy5wcmV2aWV3Ym94ID0gcHJldmlld2JveDtcblx0XHQkKHByZXZpZXdib3gpLmFkZENsYXNzKCdtb3JlYml0cy1wcmV2aWV3Ym94JykuaGlkZSgpO1xuXHRcdC8qKlxuXHRcdCAqIERpc3BsYXlzIHRoZSBwcmV2aWV3IGJveCwgYW5kIGJlZ2lucyBhbiBhc3luY2hyb25vdXMgYXR0ZW1wdFxuXHRcdCAqIHRvIHJlbmRlciB0aGUgc3BlY2lmaWVkIHdpa2l0ZXh0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHdpa2l0ZXh0IC0gV2lraXRleHQgdG8gcmVuZGVyOyBtb3N0IHRoaW5ncyBzaG91bGQgd29yaywgaW5jbHVkaW5nIGBzdWJzdDpgIGFuZCBgfn5+fmAuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtwYWdlVGl0bGVdIC0gT3B0aW9uYWwgcGFyYW1ldGVyIGZvciB0aGUgcGFnZSB0aGlzIHNob3VsZCBiZSByZW5kZXJlZCBhcyBiZWluZyBvbiwgaWYgb21pdHRlZCBpdCBpcyB0YWtlbiBhcyB0aGUgY3VycmVudCBwYWdlLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbc2VjdGlvblRpdGxlXSAtIElmIHByb3ZpZGVkLCByZW5kZXIgdGhlIHRleHQgYXMgYSBuZXcgc2VjdGlvbiB1c2luZyB0aGlzIGFzIHRoZSB0aXRsZS5cblx0XHQgKiBAcmV0dXJucyB7alF1ZXJ5LnByb21pc2V9XG5cdFx0ICovXG5cdFx0dGhpcy5iZWdpblJlbmRlciA9ICh3aWtpdGV4dCwgcGFnZVRpdGxlLCBzZWN0aW9uVGl0bGUpID0+IHtcblx0XHRcdCQocHJldmlld2JveCkuc2hvdygpO1xuXHRcdFx0Y29uc3Qgc3RhdHVzc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRcdHByZXZpZXdib3guYXBwZW5kQ2hpbGQoc3RhdHVzc3Bhbik7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMuaW5pdChzdGF0dXNzcGFuKTtcblx0XHRcdC8vIOiLpemhtemdouS4jeaYr3dpa2l0ZXh077yI5L6L5aaCSlPjgIFDU1PnrYnvvInvvIzpgqPkuYjmib7kuIDkuKp3aWtpdGV4dOmhtemdouadpemihOiniOOAglxuXHRcdFx0bGV0IHBhZ2VOYW1lID0gbXcuY29uZmlnLmdldCgnd2dQYWdlTmFtZScpO1xuXHRcdFx0aWYgKG13LmNvbmZpZy5nZXQoJ3dnUGFnZUNvbnRlbnRNb2RlbCcpICE9PSAnd2lraXRleHQnKSB7XG5cdFx0XHRcdHBhZ2VOYW1lID0gYERyYWZ0OiR7cGFnZU5hbWV9YDtcblx0XHRcdH1cblx0XHRcdGNvbnN0IHF1ZXJ5ID0ge1xuXHRcdFx0XHRhY3Rpb246ICdwYXJzZScsXG5cdFx0XHRcdHByb3A6IFsndGV4dCcsICdtb2R1bGVzJ10sXG5cdFx0XHRcdHBzdDogdHJ1ZSxcblx0XHRcdFx0Ly8gUFNUID0gcHJlLXNhdmUgdHJhbnNmb3JtOyB0aGlzIG1ha2VzIHN1YnN0aXR1dGlvbiB3b3JrIHByb3Blcmx5XG5cdFx0XHRcdHByZXZpZXc6IHRydWUsXG5cdFx0XHRcdHRleHQ6IHdpa2l0ZXh0LFxuXHRcdFx0XHR0aXRsZTogcGFnZVRpdGxlIHx8IHBhZ2VOYW1lLFxuXHRcdFx0XHRkaXNhYmxlbGltaXRyZXBvcnQ6IHRydWUsXG5cdFx0XHRcdGRpc2FibGVlZGl0c2VjdGlvbjogdHJ1ZSxcblx0XHRcdFx0dXNlbGFuZzogbXcuY29uZmlnLmdldCgnd2dVc2VyTGFuZ3VhZ2UnKSxcblx0XHRcdFx0Ly8gVXNlIHdnVXNlckxhbmd1YWdlIGZvciBwcmV2aWV3XG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0fTtcblx0XHRcdGlmIChzZWN0aW9uVGl0bGUpIHtcblx0XHRcdFx0cXVlcnkuc2VjdGlvbiA9ICduZXcnO1xuXHRcdFx0XHRxdWVyeS5zZWN0aW9udGl0bGUgPSBzZWN0aW9uVGl0bGU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZW5kZXJBcGkgPSBuZXcgTW9yZWJpdHMud2lraS5hcGkoXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5Yqg6L295Lit4oCm4oCmJywgJ+i8ieWFpeS4reKApuKApicpLFxuXHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0Zm5SZW5kZXJTdWNjZXNzLFxuXHRcdFx0XHRuZXcgTW9yZWJpdHMuc3RhdHVzKHdpbmRvdy53Z1VMUygn6aKE6KeIJywgJ+mgkOimvScpKVxuXHRcdFx0KTtcblx0XHRcdHJlbmRlckFwaS5wb3N0KCk7XG5cdFx0fTtcblx0XHRjb25zdCBmblJlbmRlclN1Y2Nlc3MgPSAoYXBpb2JqKSA9PiB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGFwaW9iai5nZXRSZXNwb25zZSgpO1xuXHRcdFx0Y29uc3QgaHRtbCA9IHJlc3BvbnNlLnBhcnNlLnRleHQ7XG5cdFx0XHRpZiAoIWh0bWwpIHtcblx0XHRcdFx0YXBpb2JqLnN0YXRlbGVtLmVycm9yKHdpbmRvdy53Z1VMUygn5Yqg6L296aKE6KeI5aSx6LSl77yM5oiW5qih5p2/5Li656m6JywgJ+i8ieWFpemgkOimveWkseaVl++8jOaIluaooeadv+eCuuepuicpKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0cHJldmlld2JveC5pbm5lckhUTUwgPSBodG1sO1xuXHRcdFx0bXcubG9hZGVyLmxvYWQocmVzcG9uc2UucGFyc2UubW9kdWxlc3R5bGVzKTtcblx0XHRcdG13LmxvYWRlci5sb2FkKHJlc3BvbnNlLnBhcnNlLm1vZHVsZXMpO1xuXHRcdFx0Ly8gdGhpcyBtYWtlcyBsaW5rcyBvcGVuIGluIG5ldyB0YWJcblx0XHRcdCQocHJldmlld2JveCkuZmluZCgnYScpLmF0dHIoJ3RhcmdldCcsICdfYmxhbmsnKS5hdHRyKCdyZWwnLCAnbm9vcGVuZXIgbm9yZWZlcnJlcicpO1xuXHRcdH07XG5cdFx0LyoqIEhpZGVzIHRoZSBwcmV2aWV3IGJveCBhbmQgY2xlYXJzIGl0LiAqL1xuXHRcdHRoaXMuY2xvc2VQcmV2aWV3ID0gKCkgPT4ge1xuXHRcdFx0JChwcmV2aWV3Ym94KS5lbXB0eSgpLmhpZGUoKTtcblx0XHR9O1xuXHR9O1xuXHQvKiAqKioqKioqKioqKioqKioqIE1vcmViaXRzLndpa2l0ZXh0ICoqKioqKioqKioqKioqKiogKi9cblx0LyoqXG5cdCAqIFdpa2l0ZXh0IG1hbmlwdWxhdGlvbi5cblx0ICpcblx0ICogQG5hbWVzcGFjZSBNb3JlYml0cy53aWtpdGV4dFxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICovXG5cdE1vcmViaXRzLndpa2l0ZXh0ID0ge307XG5cdC8qKlxuXHQgKiBHZXQgdGhlIHZhbHVlIG9mIGV2ZXJ5IHBhcmFtZXRlciBmb3VuZCBpbiB0aGUgd2lraXRleHQgb2YgYSBnaXZlbiB0ZW1wbGF0ZS5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLndpa2l0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gV2lraXRleHQgY29udGFpbmluZyBhIHRlbXBsYXRlLlxuXHQgKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIC0gSW5kZXggbm90aW5nIHdoZXJlIGluIHRoZSB0ZXh0IHRoZSB0ZW1wbGF0ZSBiZWdpbnMuXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IGB7bmFtZTogdGVtcGxhdGVOYW1lLCBwYXJhbWV0ZXJzOiB7a2V5OiB2YWx1ZX19YC5cblx0ICovXG5cdE1vcmViaXRzLndpa2l0ZXh0LnBhcnNlVGVtcGxhdGUgPSAodGV4dCwgc3RhcnQpID0+IHtcblx0XHRzdGFydCB8fD0gMDtcblx0XHRjb25zdCBsZXZlbCA9IFtdOyAvLyBUcmFjayBvZiBob3cgZGVlcCB3ZSBhcmUgKHt7LCB7e3ssIG9yIFtbKVxuXHRcdGxldCBjb3VudCA9IC0xOyAvLyBOdW1iZXIgb2YgcGFyYW1ldGVycyBmb3VuZFxuXHRcdGxldCB1bm5hbWVkID0gMDsgLy8gS2VlcCB0cmFjayBvZiB3aGF0IG51bWJlciBhbiB1bm5hbWVkIHBhcmFtZXRlciBzaG91bGQgcmVjZWl2ZVxuXHRcdGxldCBlcXVhbHMgPSAtMTsgLy8gQWZ0ZXIgZmluZGluZyBcIj1cIiBiZWZvcmUgYSBwYXJhbWV0ZXIsIHRoZSBpbmRleDsgb3RoZXJ3aXNlLCAtMVxuXHRcdGxldCBjdXJyZW50ID0gJyc7XG5cdFx0Y29uc3QgcmVzdWx0ID0ge1xuXHRcdFx0bmFtZTogJycsXG5cdFx0XHRwYXJhbWV0ZXJzOiB7fSxcblx0XHR9O1xuXHRcdGxldCBrZXk7XG5cdFx0bGV0IHZhbHVlO1xuXHRcdC8qKlxuXHRcdCAqIEZ1bmN0aW9uIHRvIGhhbmRsZSBmaW5kaW5nIHBhcmFtZXRlciB2YWx1ZXMuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFtmaW5hbD1mYWxzZV0gLSBXaGV0aGVyIHRoaXMgaXMgdGhlIGZpbmFsXG5cdFx0ICogcGFyYW1ldGVyIGFuZCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGUgdHJhaWxpbmcgYH19YC5cblx0XHQgKi9cblx0XHRjb25zdCBmaW5kUGFyYW0gPSAoZmluYWwpID0+IHtcblx0XHRcdC8vIE5vdGhpbmcgZm91bmQgeWV0LCB0aGlzIG11c3QgYmUgdGhlIHRlbXBsYXRlIG5hbWVcblx0XHRcdGlmIChjb3VudCA9PT0gLTEpIHtcblx0XHRcdFx0cmVzdWx0Lm5hbWUgPSBjdXJyZW50LnNsaWNlKDIpLnRyaW0oKTtcblx0XHRcdFx0Kytjb3VudDtcblx0XHRcdH0gZWxzZSBpZiAoZXF1YWxzID09PSAtMSkge1xuXHRcdFx0XHQvLyBJbiBhIHBhcmFtZXRlclxuXHRcdFx0XHQvLyBObyBlcXVhbHMsIHNvIGl0IG11c3QgYmUgdW5uYW1lZDsgbm8gdHJpbSBzaW5jZSB3aGl0ZXNwYWNlIGFsbG93ZWRcblx0XHRcdFx0Y29uc3QgcGFyYW0gPSBmaW5hbCA/IGN1cnJlbnQuc2xpY2UoZXF1YWxzICsgMSwgLTIpIDogY3VycmVudDtcblx0XHRcdFx0aWYgKHBhcmFtKSB7XG5cdFx0XHRcdFx0cmVzdWx0LnBhcmFtZXRlcnNbKyt1bm5hbWVkXSA9IHBhcmFtO1xuXHRcdFx0XHRcdCsrY291bnQ7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFdlIGZvdW5kIGFuIGVxdWFscywgc28gc2F2ZSB0aGUgcGFyYW1ldGVyIGFzIGtleTogdmFsdWVcblx0XHRcdFx0a2V5ID0gY3VycmVudC5zbGljZSgwLCBNYXRoLm1heCgwLCBlcXVhbHMpKS50cmltKCk7XG5cdFx0XHRcdHZhbHVlID0gZmluYWwgPyBjdXJyZW50LnNsaWNlKGVxdWFscyArIDEsIC0yKS50cmltKCkgOiBjdXJyZW50LnNsaWNlKE1hdGgubWF4KDAsIGVxdWFscyArIDEpKS50cmltKCk7XG5cdFx0XHRcdHJlc3VsdC5wYXJhbWV0ZXJzW2tleV0gPSB2YWx1ZTtcblx0XHRcdFx0ZXF1YWxzID0gLTE7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCB0ZXh0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHRjb25zdCB0ZXN0MyA9IHRleHQuc2xpY2UoaSwgaSArIDMpO1xuXHRcdFx0aWYgKHRlc3QzID09PSAne3t7JyB8fCAodGVzdDMgPT09ICd9fX0nICYmIGxldmVsLmF0KC0xKSA9PT0gMykpIHtcblx0XHRcdFx0Y3VycmVudCArPSB0ZXN0Mztcblx0XHRcdFx0aSArPSAyO1xuXHRcdFx0XHRpZiAodGVzdDMgPT09ICd7e3snKSB7XG5cdFx0XHRcdFx0bGV2ZWxbbGV2ZWwubGVuZ3RoXSA9IDM7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGV2ZWwucG9wKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCB0ZXN0MiA9IHRleHQuc2xpY2UoaSwgaSArIDIpO1xuXHRcdFx0Ly8gRW50ZXJpbmcgYSB0ZW1wbGF0ZSAob3IgbGluaylcblx0XHRcdGlmICh0ZXN0MiA9PT0gJ3t7JyB8fCB0ZXN0MiA9PT0gJ1tbJykge1xuXHRcdFx0XHRjdXJyZW50ICs9IHRlc3QyO1xuXHRcdFx0XHQrK2k7XG5cdFx0XHRcdGlmICh0ZXN0MiA9PT0gJ3t7Jykge1xuXHRcdFx0XHRcdGxldmVsW2xldmVsLmxlbmd0aF0gPSAyO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldmVsW2xldmVsLmxlbmd0aF0gPSAnd2wnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRWl0aGVyIGxlYXZpbmcgYSBsaW5rIG9yIHRlbXBsYXRlL3BhcnNlciBmdW5jdGlvblxuXHRcdFx0aWYgKCh0ZXN0MiA9PT0gJ319JyAmJiBsZXZlbC5hdCgtMSkgPT09IDIpIHx8ICh0ZXN0MiA9PT0gJ11dJyAmJiBsZXZlbC5hdCgtMSkgPT09ICd3bCcpKSB7XG5cdFx0XHRcdGN1cnJlbnQgKz0gdGVzdDI7XG5cdFx0XHRcdCsraTtcblx0XHRcdFx0bGV2ZWwucG9wKCk7XG5cdFx0XHRcdC8vIEZpbmQgdGhlIGZpbmFsIHBhcmFtZXRlciBpZiB0aGlzIHJlYWxseSBpcyB0aGUgZW5kXG5cdFx0XHRcdGlmICh0ZXN0MiA9PT0gJ319JyAmJiBsZXZlbC5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0XHRmaW5kUGFyYW0odHJ1ZSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGV4dC5jaGFyQXQoaSkgPT09ICd8JyAmJiBsZXZlbC5sZW5ndGggPT09IDEpIHtcblx0XHRcdFx0Ly8gQW5vdGhlciBwaXBlIGZvdW5kLCB0b3BsZXZlbCwgc28gcGFyYW1ldGVyIGNvbWluZyB1cCFcblx0XHRcdFx0ZmluZFBhcmFtKCk7XG5cdFx0XHRcdGN1cnJlbnQgPSAnJztcblx0XHRcdH0gZWxzZSBpZiAoZXF1YWxzID09PSAtMSAmJiB0ZXh0LmNoYXJBdChpKSA9PT0gJz0nICYmIGxldmVsLmxlbmd0aCA9PT0gMSkge1xuXHRcdFx0XHQvLyBFcXVhbHMgZm91bmQsIHRvcGxldmVsXG5cdFx0XHRcdGVxdWFscyA9IGN1cnJlbnQubGVuZ3RoO1xuXHRcdFx0XHRjdXJyZW50ICs9IHRleHQuY2hhckF0KGkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gSnVzdCBhZHZhbmNlIHRoZSBwb3NpdGlvblxuXHRcdFx0XHRjdXJyZW50ICs9IHRleHQuY2hhckF0KGkpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXHQvKipcblx0ICogQWRqdXN0IGFuZCBtYW5pcHVsYXRlIHRoZSB3aWtpdGV4dCBvZiBhIHBhZ2UuXG5cdCAqXG5cdCAqIEBjbGFzc1xuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMud2lraXRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBXaWtpdGV4dCB0byBiZSBtYW5pcHVsYXRlZC5cblx0ICovXG5cdE1vcmViaXRzLndpa2l0ZXh0LnBhZ2UgPSBmdW5jdGlvbiAodGV4dCkge1xuXHRcdHRoaXMudGV4dCA9IHRleHQ7XG5cdH07XG5cdE1vcmViaXRzLndpa2l0ZXh0LnBhZ2UucHJvdG90eXBlID0ge1xuXHRcdHRleHQ6ICcnLFxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZXMgbGlua3MgdG8gYGxpbmtfdGFyZ2V0YCBmcm9tIHRoZSBwYWdlIHRleHQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gbGlua1RhcmdldFxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHRcdCAqL1xuXHRcdHJlbW92ZUxpbmsobGlua1RhcmdldCkge1xuXHRcdFx0Y29uc3QgbXdUaXRsZSA9IG13LlRpdGxlLm5ld0Zyb21UZXh0KGxpbmtUYXJnZXQpO1xuXHRcdFx0Y29uc3QgbmFtZXNwYWNlSUQgPSBtd1RpdGxlLmdldE5hbWVzcGFjZUlkKCk7XG5cdFx0XHRjb25zdCB0aXRsZSA9IG13VGl0bGUuZ2V0TWFpblRleHQoKTtcblx0XHRcdGxldCBsaW5rUmVnZXhTdHJpbmcgPSAnJztcblx0XHRcdGlmIChuYW1lc3BhY2VJRCAhPT0gMCkge1xuXHRcdFx0XHRsaW5rUmVnZXhTdHJpbmcgPSBgJHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleChuYW1lc3BhY2VJRCl9OmA7XG5cdFx0XHR9XG5cdFx0XHRsaW5rUmVnZXhTdHJpbmcgKz0gTW9yZWJpdHMucGFnZU5hbWVSZWdleCh0aXRsZSk7XG5cdFx0XHQvLyBGb3IgbW9zdCBuYW1lc3BhY2VzLCB1bmxpbmsgYm90aCBbW1VzZXI6VGVzdF1dIGFuZCBbWzpVc2VyOlRlc3RdXVxuXHRcdFx0Ly8gRm9yIGZpbGVzIGFuZCBjYXRlZ29yaWVzLCBvbmx5IHVubGluayBbWzpDYXRlZ29yeTpUZXN0XV0uIERvIG5vdCB1bmxpbmsgW1tDYXRlZ29yeTpUZXN0XV1cblx0XHRcdGNvbnN0IGlzRmlsZU9yQ2F0ZWdvcnkgPSBbNiwgMTRdLmluY2x1ZGVzKG5hbWVzcGFjZUlEKTtcblx0XHRcdGNvbnN0IGNvbG9uID0gaXNGaWxlT3JDYXRlZ29yeSA/ICc6JyA6ICc6Pyc7XG5cdFx0XHRjb25zdCBzaW1wbGVMaW5rUmVnZXggPSBuZXcgUmVnRXhwKGBcXFxcW1xcXFxbJHtjb2xvbn0oJHtsaW5rUmVnZXhTdHJpbmd9KVxcXFxdXFxcXF1gLCAnZycpO1xuXHRcdFx0Y29uc3QgcGlwZWRMaW5rUmVnZXggPSBuZXcgUmVnRXhwKGBcXFxcW1xcXFxbJHtjb2xvbn0ke2xpbmtSZWdleFN0cmluZ31cXFxcfCguKz8pXFxcXF1cXFxcXWAsICdnJyk7XG5cdFx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShzaW1wbGVMaW5rUmVnZXgsICckMScpLnJlcGxhY2UocGlwZWRMaW5rUmVnZXgsICckMScpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDb21tZW50cyBvdXQgaW1hZ2VzIGZyb20gcGFnZSB0ZXh0OyBpZiB1c2VkIGluIGEgZ2FsbGVyeSwgZGVsZXRlcyB0aGUgd2hvbGUgbGluZS5cblx0XHQgKiBJZiB1c2VkIGFzIGEgdGVtcGxhdGUgYXJndW1lbnQgKG5vdCBuZWNlc3NhcmlseSB3aXRoIGBGaWxlOmAgcHJlZml4KSwgdGhlIHRlbXBsYXRlIHBhcmFtZXRlciBpcyBjb21tZW50ZWQgb3V0LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGltYWdlIC0gSW1hZ2UgbmFtZSB3aXRob3V0IGBGaWxlOmAgcHJlZml4LlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBbcmVhc29uXSAtIFJlYXNvbiB0byBiZSBpbmNsdWRlZCBpbiBjb21tZW50LCBhbG9uZ3NpZGUgdGhlIGNvbW1lbnRlZC1vdXQgaW1hZ2UuXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLndpa2l0ZXh0LnBhZ2V9XG5cdFx0ICovXG5cdFx0Y29tbWVudE91dEltYWdlKGltYWdlLCByZWFzb24pIHtcblx0XHRcdGNvbnN0IHVuYmluZGVyID0gbmV3IE1vcmViaXRzLnVuYmluZGVyKHRoaXMudGV4dCk7XG5cdFx0XHR1bmJpbmRlci51bmJpbmQoJzwhLS0nLCAnLS0+Jyk7XG5cdFx0XHRyZWFzb24gPSByZWFzb24gPyBgJHtyZWFzb259OiBgIDogJyc7XG5cdFx0XHRjb25zdCBpbWFnZVJlZ2V4U3RyaW5nID0gTW9yZWJpdHMucGFnZU5hbWVSZWdleChpbWFnZSk7XG5cdFx0XHQvLyBDaGVjayBmb3Igbm9ybWFsIGltYWdlIGxpbmtzLCBpLmUuIFtbRmlsZTpGb29iYXIucG5nfC4uLl1dXG5cdFx0XHQvLyBXaWxsIGVhdCB0aGUgd2hvbGUgbGlua1xuXHRcdFx0Y29uc3QgbGlua3NSZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxcW1xcXFxbJHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleCg2KX06XFxcXHMqJHtpbWFnZVJlZ2V4U3RyaW5nfVxcXFxzKltcXFxcfCg/OlxcXFxdXFxcXF0pXWBcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBhbGxMaW5rcyA9IE1vcmViaXRzLnN0cmluZy5zcGxpdFdlaWdodGVkQnlLZXlzKHVuYmluZGVyLmNvbnRlbnQsICdbWycsICddXScpO1xuXHRcdFx0Zm9yIChjb25zdCBhbGxMaW5rIG9mIGFsbExpbmtzKSB7XG5cdFx0XHRcdGlmIChsaW5rc1JlZ2V4LnRlc3QoYWxsTGluaykpIHtcblx0XHRcdFx0XHRjb25zdCByZXBsYWNlbWVudCA9IGA8IS0tICR7cmVhc29ufSR7YWxsTGlua30gLS0+YDtcblx0XHRcdFx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKGFsbExpbmssIHJlcGxhY2VtZW50KTtcblx0XHRcdFx0XHQvLyB1bmJpbmQgdGhlIG5ld2x5IGNyZWF0ZWQgY29tbWVudHNcblx0XHRcdFx0XHR1bmJpbmRlci51bmJpbmQoJzwhLS0nLCAnLS0+Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIENoZWNrIGZvciBnYWxsZXJ5IGltYWdlcywgaS5lLiBpbnN0YW5jZXMgdGhhdCBtdXN0IHN0YXJ0IG9uIGEgbmV3IGxpbmUsXG5cdFx0XHQvLyBldmVudHVhbGx5IHByZWNlZGVkIHdpdGggc29tZSBzcGFjZSwgYW5kIG11c3QgaW5jbHVkZSBGaWxlOiBwcmVmaXhcblx0XHRcdC8vIFdpbGwgZWF0IHRoZSB3aG9sZSBsaW5lLlxuXHRcdFx0Y29uc3QgZ2FsbGVyeUltYWdlUmVnZXggPSBuZXcgUmVnRXhwKFxuXHRcdFx0XHRgKF5cXFxccyoke01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDYpfTpcXFxccyoke2ltYWdlUmVnZXhTdHJpbmd9XFxcXHMqKD86XFxcXHwuKj8kfCQpKWAsXG5cdFx0XHRcdCdtZydcblx0XHRcdCk7XG5cdFx0XHR1bmJpbmRlci5jb250ZW50ID0gdW5iaW5kZXIuY29udGVudC5yZXBsYWNlKGdhbGxlcnlJbWFnZVJlZ2V4LCBgPCEtLSAke3JlYXNvbn0kMSAtLT5gKTtcblx0XHRcdC8vIHVuYmluZCB0aGUgbmV3bHkgY3JlYXRlZCBjb21tZW50c1xuXHRcdFx0dW5iaW5kZXIudW5iaW5kKCc8IS0tJywgJy0tPicpO1xuXHRcdFx0Ly8gQ2hlY2sgZnJlZSBpbWFnZSB1c2FnZXMsIGZvciBleGFtcGxlIGFzIHRlbXBsYXRlIGFyZ3VtZW50cywgbWlnaHQgaGF2ZSB0aGUgRmlsZTogcHJlZml4IGV4Y2x1ZGVkLCBidXQgbXVzdCBiZSBwcmVjZWRlZCBieSBhbiB8XG5cdFx0XHQvLyBXaWxsIG9ubHkgZWF0IHRoZSBpbWFnZSBuYW1lIGFuZCB0aGUgcHJlY2VkaW5nIGJhciBhbmQgYW4gZXZlbnR1YWwgbmFtZWQgcGFyYW1ldGVyXG5cdFx0XHRjb25zdCBmcmVlSW1hZ2VSZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGAoXFxcXHxcXFxccyooPzpbXFxcXHdcXFxcc10rXFxcXD0pP1xcXFxzKig/OiR7TW9yZWJpdHMubmFtZXNwYWNlUmVnZXgoNil9OlxcXFxzKik/JHtpbWFnZVJlZ2V4U3RyaW5nfSlgLFxuXHRcdFx0XHQnbWcnXG5cdFx0XHQpO1xuXHRcdFx0dW5iaW5kZXIuY29udGVudCA9IHVuYmluZGVyLmNvbnRlbnQucmVwbGFjZShmcmVlSW1hZ2VSZWdleCwgYDwhLS0gJHtyZWFzb259JDEgLS0+YCk7XG5cdFx0XHQvLyBSZWJpbmQgdGhlIGNvbnRlbnQgbm93LCB3ZSBhcmUgZG9uZSFcblx0XHRcdHRoaXMudGV4dCA9IHVuYmluZGVyLnJlYmluZCgpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBDb252ZXJ0cyB1c2VzIG9mIFtbRmlsZTpgaW1hZ2VgXV0gdG8gW1tGaWxlOmBpbWFnZWB8YGRhdGFgXV0uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2UgLSBJbWFnZSBuYW1lIHdpdGhvdXQgRmlsZTogcHJlZml4LlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBkYXRhIC0gVGhlIGRpc3BsYXkgb3B0aW9ucy5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMud2lraXRleHQucGFnZX1cblx0XHQgKi9cblx0XHRhZGRUb0ltYWdlQ29tbWVudChpbWFnZSwgZGF0YSkge1xuXHRcdFx0Y29uc3QgaW1hZ2VSZWdleFN0cmluZyA9IE1vcmViaXRzLnBhZ2VOYW1lUmVnZXgoaW1hZ2UpO1xuXHRcdFx0Y29uc3QgbGlua3NSZWdleCA9IG5ldyBSZWdFeHAoXG5cdFx0XHRcdGBcXFxcW1xcXFxbJHtNb3JlYml0cy5uYW1lc3BhY2VSZWdleCg2KX06XFxcXHMqJHtpbWFnZVJlZ2V4U3RyaW5nfVxcXFxzKltcXFxcfCg/OlxcXFxdXFxcXF0pXWBcblx0XHRcdCk7XG5cdFx0XHRjb25zdCBhbGxMaW5rcyA9IE1vcmViaXRzLnN0cmluZy5zcGxpdFdlaWdodGVkQnlLZXlzKHRoaXMudGV4dCwgJ1tbJywgJ11dJyk7XG5cdFx0XHRmb3IgKGxldCByZXBsYWNlbWVudCBvZiBhbGxMaW5rcykge1xuXHRcdFx0XHRpZiAobGlua3NSZWdleC50ZXN0KHJlcGxhY2VtZW50KSkge1xuXHRcdFx0XHRcdC8vIGp1c3QgcHV0IGl0IGF0IHRoZSBlbmQ/XG5cdFx0XHRcdFx0cmVwbGFjZW1lbnQgPSByZXBsYWNlbWVudC5yZXBsYWNlKC9cXF1cXF0kLywgYHwke2RhdGF9XV1gKTtcblx0XHRcdFx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShyZXBsYWNlbWVudCwgcmVwbGFjZW1lbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRjb25zdCBnYWxsZXJ5UmVnZXggPSBuZXcgUmVnRXhwKGBeKFxcXFxzKiR7aW1hZ2VSZWdleFN0cmluZ30uKj8pXFxcXHw/KC4qPykkYCwgJ21nJyk7XG5cdFx0XHRjb25zdCBuZXd0ZXh0ID0gYCQxfCQyICR7ZGF0YX1gO1xuXHRcdFx0dGhpcy50ZXh0ID0gdGhpcy50ZXh0LnJlcGxhY2UoZ2FsbGVyeVJlZ2V4LCBuZXd0ZXh0KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogUmVtb3ZlIGFsbCB0cmFuc2NsdXNpb25zIG9mIGEgdGVtcGxhdGUgZnJvbSBwYWdlIHRleHQuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgLSBQYWdlIG5hbWUgd2hvc2UgdHJhbnNjbHVzaW9ucyBhcmUgdG8gYmUgcmVtb3ZlZCxcblx0XHQgKiBpbmNsdWRlIG5hbWVzcGFjZSBwcmVmaXggb25seSBpZiBub3QgaW4gdGVtcGxhdGUgbmFtZXNwYWNlLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy53aWtpdGV4dC5wYWdlfVxuXHRcdCAqL1xuXHRcdHJlbW92ZVRlbXBsYXRlKHRlbXBsYXRlKSB7XG5cdFx0XHRjb25zdCB0ZW1wbGF0ZVJlZ2V4U3RyaW5nID0gTW9yZWJpdHMucGFnZU5hbWVSZWdleCh0ZW1wbGF0ZSk7XG5cdFx0XHRjb25zdCBsaW5rc1JlZ2V4ID0gbmV3IFJlZ0V4cChcblx0XHRcdFx0YFxcXFx7XFxcXHsoPzoke01vcmViaXRzLm5hbWVzcGFjZVJlZ2V4KDEwKX06KT9cXFxccyoke3RlbXBsYXRlUmVnZXhTdHJpbmd9XFxcXHMqW1xcXFx8KD86XFxcXH1cXFxcfSldYFxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IGFsbFRlbXBsYXRlcyA9IE1vcmViaXRzLnN0cmluZy5zcGxpdFdlaWdodGVkQnlLZXlzKHRoaXMudGV4dCwgJ3t7JywgJ319JywgWyd7e3snLCAnfX19J10pO1xuXHRcdFx0Zm9yIChjb25zdCBhbGxUZW1wbGF0ZSBvZiBhbGxUZW1wbGF0ZXMpIHtcblx0XHRcdFx0aWYgKGxpbmtzUmVnZXgudGVzdChhbGxUZW1wbGF0ZSkpIHtcblx0XHRcdFx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShhbGxUZW1wbGF0ZSwgJycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIFNtYXJ0bHkgaW5zZXJ0IGEgdGFnIGF0b3AgcGFnZSB0ZXh0IGJ1dCBhZnRlciBzcGVjaWZpZWQgdGVtcGxhdGVzLFxuXHRcdCAqIHN1Y2ggYXMgaGF0bm90ZXMsIHNob3J0IGRlc2NyaXB0aW9uLCBvciBkZWxldGlvbiBhbmQgcHJvdGVjdGlvbiB0ZW1wbGF0ZXMuXG5cdFx0ICogTm90YWJseSwgZG9lcyAqbm90KiBpbnNlcnQgYSBuZXdsaW5lIGFmdGVyIHRoZSB0YWcuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge3N0cmluZ30gdGFnIC0gVGhlIHRhZyB0byBiZSBpbnNlcnRlZC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gcmVnZXggLSBUZW1wbGF0ZXMgYWZ0ZXIgd2hpY2ggdG8gaW5zZXJ0IHRhZyxcblx0XHQgKiBnaXZlbiBhcyBlaXRoZXIgYXMgYSAocmVnZXgtdmFsaWQpIHN0cmluZyBvciBhbiBhcnJheSB0byBiZSBqb2luZWQgYnkgcGlwZXMuXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IFtmbGFncz1pXSAtIFJlZ2V4IGZsYWdzIHRvIGFwcGx5LiAgYCcnYCB0byBwcm92aWRlIG5vIGZsYWdzO1xuXHRcdCAqIG90aGVyIGZhbHNleSB2YWx1ZXMgd2lsbCBkZWZhdWx0IHRvIGBpYC5cblx0XHQgKiBAcGFyYW0ge3N0cmluZ3xzdHJpbmdbXX0gW3ByZVJlZ2V4XSAtIE9wdGlvbmFsIHJlZ2V4IHN0cmluZyBvciBhcnJheSB0byBtYXRjaFxuXHRcdCAqIGJlZm9yZSBhbnkgdGVtcGxhdGUgbWF0Y2hlcyAoaS5lLiBiZWZvcmUgYHt7YCksIHN1Y2ggYXMgaHRtbCBjb21tZW50cy5cblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMud2lraXRleHQucGFnZX1cblx0XHQgKi9cblx0XHRpbnNlcnRBZnRlclRlbXBsYXRlcyh0YWcsIHJlZ2V4LCBmbGFncywgcHJlUmVnZXgpIHtcblx0XHRcdGlmICh0YWcgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdObyB0YWcgcHJvdmlkZWQnKTtcblx0XHRcdH1cblx0XHRcdC8vIC5sZW5ndGggaXMgb25seSBhIHByb3BlcnR5IG9mIHN0cmluZ3MgYW5kIGFycmF5cyBzbyB3ZVxuXHRcdFx0Ly8gc2hvdWxkbid0IG5lZWQgdG8gY2hlY2sgdHlwZVxuXHRcdFx0aWYgKHJlZ2V4ID09PSB1bmRlZmluZWQgfHwgIXJlZ2V4Lmxlbmd0aCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ05vIHJlZ2V4IHByb3ZpZGVkJyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmVnZXgpKSB7XG5cdFx0XHRcdHJlZ2V4ID0gcmVnZXguam9pbignfCcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHR5cGVvZiBmbGFncyAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0ZmxhZ3MgPSAnaSc7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIXByZVJlZ2V4IHx8ICFwcmVSZWdleC5sZW5ndGgpIHtcblx0XHRcdFx0cHJlUmVnZXggPSAnJztcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShwcmVSZWdleCkpIHtcblx0XHRcdFx0cHJlUmVnZXggPSBwcmVSZWdleC5qb2luKCd8Jyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBSZWdleCBpcyBleHRyYSBjb21wbGljYXRlZCB0byBhbGxvdyBmb3IgdGVtcGxhdGVzIHdpdGhcblx0XHRcdC8vIHBhcmFtZXRlcnMgYW5kIHRvIGhhbmRsZSB3aGl0ZXNwYWNlIHByb3Blcmx5XG5cdFx0XHR0aGlzLnRleHQgPSB0aGlzLnRleHQucmVwbGFjZShcblx0XHRcdFx0bmV3IFJlZ0V4cChcblx0XHRcdFx0XHQvLyBsZWFkaW5nIHdoaXRlc3BhY2Vcblx0XHRcdFx0XHQvLyBjYXB0dXJlIHRlbXBsYXRlKHMpXG5cdFx0XHRcdFx0Ly8gUHJlLXRlbXBsYXRlIHJlZ2V4LCBzdWNoIGFzIGxlYWRpbmcgaHRtbCBjb21tZW50c1xuXHRcdFx0XHRcdC8vIGJlZ2luIHRlbXBsYXRlIGZvcm1hdFxuXHRcdFx0XHRcdC8vIFRlbXBsYXRlIHJlZ2V4XG5cdFx0XHRcdFx0Ly8gZW5kIG1haW4gdGVtcGxhdGUgbmFtZSwgb3B0aW9uYWxseSB3aXRoIGEgbnVtYmVyXG5cdFx0XHRcdFx0Ly8gUHJvYmFibHkgcmVtb3ZlIHRoZSAoPzopIHRob3VnaFxuXHRcdFx0XHRcdC8vIHRlbXBsYXRlIHBhcmFtZXRlcnNcblx0XHRcdFx0XHQvLyBlbmQgdGVtcGxhdGUgZm9ybWF0XG5cdFx0XHRcdFx0Ly8gZW5kIGNhcHR1cmVcblx0XHRcdFx0XHQvLyB0cmFpbGluZyB3aGl0ZXNwYWNlXG5cdFx0XHRcdFx0YF5cXFxccyooPzooKD86XFxcXHMqJHtcblx0XHRcdFx0XHRcdC8vIFByZS10ZW1wbGF0ZSByZWdleCwgc3VjaCBhcyBsZWFkaW5nIGh0bWwgY29tbWVudHNcblx0XHRcdFx0XHRcdHByZVJlZ2V4XG5cdFx0XHRcdFx0fXxcXFxce1xcXFx7XFxcXHMqKD86JHtcblx0XHRcdFx0XHRcdC8vIFRlbXBsYXRlIHJlZ2V4XG5cdFx0XHRcdFx0XHRyZWdleFxuXHRcdFx0XHRcdH0pXFxcXGQqXFxcXHMqKFxcXFx8KD86XFxcXHtcXFxce1tee31dKlxcXFx9XFxcXH18W157fV0pKik/XFxcXH1cXFxcfSkrKD86XFxcXHMqXFxcXG4pPylcXFxccyopP2AsXG5cdFx0XHRcdFx0ZmxhZ3Ncblx0XHRcdFx0KSxcblx0XHRcdFx0YCQxJHt0YWd9YFxuXHRcdFx0KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogR2V0IHRoZSBtYW5pcHVsYXRlZCB3aWtpdGV4dC5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdFx0ICovXG5cdFx0Z2V0VGV4dCgpIHtcblx0XHRcdHJldHVybiB0aGlzLnRleHQ7XG5cdFx0fSxcblx0fTtcblx0LyogKioqKioqKioqKiogTW9yZWJpdHMudXNlcnNwYWNlTG9nZ2VyICoqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogSGFuZGxlcyBsb2dnaW5nIGFjdGlvbnMgdG8gYSB1c2Vyc3BhY2UgbG9nLlxuXHQgKiBVc2VkIGluIENTRCwgUFJPRCwgYW5kIFhGRC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzXG5cdCAqIEBjbGFzc1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gbG9nUGFnZU5hbWUgLSBUaXRsZSBvZiB0aGUgc3VicGFnZSBvZiB0aGUgY3VycmVudCB1c2VyJ3MgbG9nLlxuXHQgKi9cblx0TW9yZWJpdHMudXNlcnNwYWNlTG9nZ2VyID0gZnVuY3Rpb24gKGxvZ1BhZ2VOYW1lKSB7XG5cdFx0aWYgKCFsb2dQYWdlTmFtZSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdubyBsb2cgcGFnZSBuYW1lIHNwZWNpZmllZCcpO1xuXHRcdH1cblx0XHQvKipcblx0XHQgKiBUaGUgdGV4dCB0byBwcmVmaXggdGhlIGxvZyB3aXRoIHVwb24gY3JlYXRpb24sIGRlZmF1bHRzIHRvIGVtcHR5LlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLmluaXRpYWxUZXh0ID0gJyc7XG5cdFx0LyoqXG5cdFx0ICogVGhlIGhlYWRlciBsZXZlbCB0byB1c2UgZm9yIG1vbnRocywgZGVmYXVsdHMgdG8gMyAoYD09PWApLlxuXHRcdCAqXG5cdFx0ICogQHR5cGUge251bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLmhlYWRlckxldmVsID0gMztcblx0XHR0aGlzLmNoYW5nZVRhZ3MgPSAnJztcblx0XHQvKipcblx0XHQgKiBMb2cgdGhlIGVudHJ5LlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IGxvZ1RleHQgLSBEb2Vzbid0IGluY2x1ZGUgbGVhZGluZyBgI2Agb3IgYCpgLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdW1tYXJ5VGV4dCAtIEVkaXQgc3VtbWFyeS5cblx0XHQgKiBAcmV0dXJucyB7SlF1ZXJ5LlByb21pc2V9XG5cdFx0ICovXG5cdFx0dGhpcy5sb2cgPSBmdW5jdGlvbiAobG9nVGV4dCwgc3VtbWFyeVRleHQpIHtcblx0XHRcdGNvbnN0IGRlZiA9ICQuRGVmZXJyZWQoKTtcblx0XHRcdGlmICghbG9nVGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gZGVmLnJlamVjdCgpO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcGFnZSA9IG5ldyBNb3JlYml0cy53aWtpLnBhZ2UoXG5cdFx0XHRcdGBVc2VyOiR7bXcuY29uZmlnLmdldCgnd2dVc2VyTmFtZScpfS8ke2xvZ1BhZ2VOYW1lfWAsXG5cdFx0XHRcdHdpbmRvdy53Z1VMUygn5bCG6aG555uu5Yqg5YWl5Yiw55So5oi356m66Ze05pel5b+XJywgJ+Wwh+mgheebruWKoOWFpeWIsOS9v+eUqOiAheepuumWk+aXpeiqjCcpXG5cdFx0XHQpOyAvLyBtYWtlIHRoaXMgJy4uLiB0byAnICsgbG9nUGFnZU5hbWUgP1xuXHRcdFx0cGFnZS5sb2FkKChwYWdlb2JqKSA9PiB7XG5cdFx0XHRcdC8vIGFkZCBibHVyYiBpZiBsb2cgcGFnZSBkb2Vzbid0IGV4aXN0IG9yIGlzIGJsYW5rXG5cdFx0XHRcdGxldCB0ZXh0ID0gcGFnZW9iai5nZXRQYWdlVGV4dCgpIHx8IHRoaXMuaW5pdGlhbFRleHQ7XG5cdFx0XHRcdC8vIGNyZWF0ZSBtb250aGx5IGhlYWRlciBpZiBpdCBkb2Vzbid0IGV4aXN0IGFscmVhZHlcblx0XHRcdFx0Y29uc3QgZGF0ZSA9IG5ldyBNb3JlYml0cy5kYXRlKHBhZ2VvYmouZ2V0TG9hZFRpbWUoKSk7XG5cdFx0XHRcdGlmICghZGF0ZS5tb250aEhlYWRlclJlZ2V4KCkuZXhlYyh0ZXh0KSkge1xuXHRcdFx0XHRcdHRleHQgKz0gYFxcblxcbiR7ZGF0ZS5tb250aEhlYWRlcih0aGlzLmhlYWRlckxldmVsKX1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBhZ2VvYmouc2V0UGFnZVRleHQoYCR7dGV4dH1cXG4ke2xvZ1RleHR9YCk7XG5cdFx0XHRcdHBhZ2VvYmouc2V0RWRpdFN1bW1hcnkoc3VtbWFyeVRleHQpO1xuXHRcdFx0XHRwYWdlb2JqLnNldENoYW5nZVRhZ3ModGhpcy5jaGFuZ2VUYWdzKTtcblx0XHRcdFx0cGFnZW9iai5zZXRDcmVhdGVPcHRpb24oJ3JlY3JlYXRlJyk7XG5cdFx0XHRcdHBhZ2VvYmouc2F2ZShkZWYucmVzb2x2ZSwgZGVmLnJlamVjdCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBkZWY7XG5cdFx0fTtcblx0fTtcblx0LyogKioqKioqKioqKioqKioqKiBNb3JlYml0cy5zdGF0dXMgKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogQ3JlYXRlIGFuZCBzaG93IHN0YXR1cyBtZXNzYWdlcyBvZiB2YXJ5aW5nIHVyZ2VuY3kuXG5cdCAqIHtAbGluayBNb3JlYml0cy5zdGF0dXMuaW5pdHxNb3JlYml0cy5zdGF0dXMuaW5pdCgpfSBtdXN0IGJlIGNhbGxlZCBiZWZvcmVcblx0ICogYW55IHN0YXR1cyBvYmplY3QgaXMgY3JlYXRlZCwgb3RoZXJ3aXNlIHRob3NlIHN0YXR1c2VzIHdvbid0IGJlIHZpc2libGUuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0IGJlZm9yZSB0aGUgdGhlIGNvbG9uIGA6YC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXQgLSBUZXh0IGFmdGVyIHRoZSBjb2xvbiBgOmAuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbdHlwZT1zdGF0dXNdIC0gRGV0ZXJtaW5lIHRoZSBmb250IGNvbG9yIG9mIHRoZSBzdGF0dXNcblx0ICogbGluZSwgYWxsb3dhYmxlIHZhbHVlcyBhcmU6IGBzdGF0dXNgIChibHVlKSwgYGluZm9gIChncmVlbiksIGB3YXJuYCAocmVkKSxcblx0ICogb3IgYGVycm9yYCAoYm9sZCByZWQpLlxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzID0gZnVuY3Rpb24gKHRleHQsIHN0YXQsIHR5cGUpIHtcblx0XHR0aGlzLnRleHRSYXcgPSB0ZXh0O1xuXHRcdHRoaXMudGV4dCA9IE1vcmViaXRzLmNyZWF0ZUh0bWwodGV4dCk7XG5cdFx0dGhpcy50eXBlID0gdHlwZSB8fCAnc3RhdHVzJztcblx0XHR0aGlzLmdlbmVyYXRlKCk7XG5cdFx0aWYgKHN0YXQpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXQsIHR5cGUpO1xuXHRcdH1cblx0fTtcblx0LyoqXG5cdCAqIFNwZWNpZnkgYW4gYXJlYSBmb3Igc3RhdHVzIG1lc3NhZ2UgZWxlbWVudHMgdG8gYmUgYWRkZWQgdG8uXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcm9vdCAtIFVzdWFsbHkgYSBkaXYgZWxlbWVudC5cblx0ICogQHRocm93cyBJZiBgcm9vdGAgaXMgbm90IGFuIGBIVE1MRWxlbWVudGAuXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMuaW5pdCA9IChyb290KSA9PiB7XG5cdFx0aWYgKCEocm9vdCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdvYmplY3Qgbm90IGFuIGluc3RhbmNlIG9mIEVsZW1lbnQnKTtcblx0XHR9XG5cdFx0d2hpbGUgKHJvb3QuaGFzQ2hpbGROb2RlcygpKSB7XG5cdFx0XHRyb290LnJlbW92ZUNoaWxkKHJvb3QuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdE1vcmViaXRzLnN0YXR1cy5yb290ID0gcm9vdDtcblx0XHRNb3JlYml0cy5zdGF0dXMuZXJyb3JFdmVudCA9IG51bGw7XG5cdH07XG5cdE1vcmViaXRzLnN0YXR1cy5yb290ID0gbnVsbDtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciAtIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gZXJyb3IuXG5cdCAqIEB0aHJvd3MgV2hlbiBgaGFuZGxlcmAgaXMgbm90IGEgZnVuY3Rpb24uXG5cdCAqL1xuXHRNb3JlYml0cy5zdGF0dXMub25FcnJvciA9IChoYW5kbGVyKSA9PiB7XG5cdFx0aWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMuZXJyb3JFdmVudCA9IGhhbmRsZXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ01vcmViaXRzLnN0YXR1cy5vbkVycm9yOiBoYW5kbGVyIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHR9O1xuXHRNb3JlYml0cy5zdGF0dXMucHJvdG90eXBlID0ge1xuXHRcdHN0YXQ6IG51bGwsXG5cdFx0c3RhdFJhdzogbnVsbCxcblx0XHR0ZXh0OiBudWxsLFxuXHRcdHRleHRSYXc6IG51bGwsXG5cdFx0dHlwZTogJ3N0YXR1cycsXG5cdFx0dGFyZ2V0OiBudWxsLFxuXHRcdG5vZGU6IG51bGwsXG5cdFx0bGlua2VkOiBmYWxzZSxcblx0XHQvKiogQWRkIHRoZSBzdGF0dXMgZWxlbWVudCBub2RlIHRvIHRoZSBET00uICovXG5cdFx0bGluaygpIHtcblx0XHRcdGlmICghdGhpcy5saW5rZWQgJiYgTW9yZWJpdHMuc3RhdHVzLnJvb3QpIHtcblx0XHRcdFx0TW9yZWJpdHMuc3RhdHVzLnJvb3QuYXBwZW5kQ2hpbGQodGhpcy5ub2RlKTtcblx0XHRcdFx0dGhpcy5saW5rZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyoqIFJlbW92ZSB0aGUgc3RhdHVzIGVsZW1lbnQgbm9kZSBmcm9tIHRoZSBET00uICovXG5cdFx0dW5saW5rKCkge1xuXHRcdFx0aWYgKHRoaXMubGlua2VkKSB7XG5cdFx0XHRcdE1vcmViaXRzLnN0YXR1cy5yb290LnJlbW92ZUNoaWxkKHRoaXMubm9kZSk7XG5cdFx0XHRcdHRoaXMubGlua2VkID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBVcGRhdGUgdGhlIHN0YXR1cy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0dXMgLSBQYXJ0IG9mIHN0YXR1cyBtZXNzYWdlIGFmdGVyIGNvbG9uLlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gJ3N0YXR1cycgKGJsdWUpLCAnaW5mbycgKGdyZWVuKSwgJ3dhcm4nXG5cdFx0ICogKHJlZCksIG9yICdlcnJvcicgKGJvbGQgcmVkKS5cblx0XHQgKi9cblx0XHR1cGRhdGUoc3RhdHVzLCB0eXBlKSB7XG5cdFx0XHR0aGlzLnN0YXRSYXcgPSBzdGF0dXM7XG5cdFx0XHR0aGlzLnN0YXQgPSBNb3JlYml0cy5jcmVhdGVIdG1sKHN0YXR1cyk7XG5cdFx0XHRpZiAodHlwZSkge1xuXHRcdFx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdFx0XHRpZiAodHlwZSA9PT0gJ2Vycm9yJykge1xuXHRcdFx0XHRcdC8vIGhhY2sgdG8gZm9yY2UgdGhlIHBhZ2Ugbm90IHRvIHJlbG9hZCB3aGVuIGFuIGVycm9yIGlzIG91dHB1dCAtIHNlZSBhbHNvIE1vcmViaXRzLnN0YXR1cygpIGFib3ZlXG5cdFx0XHRcdFx0TW9yZWJpdHMud2lraS5udW1iZXJPZkFjdGlvbnNMZWZ0ID0gMTAwMDtcblx0XHRcdFx0XHQvLyBjYWxsIGVycm9yIGNhbGxiYWNrXG5cdFx0XHRcdFx0aWYgKE1vcmViaXRzLnN0YXR1cy5lcnJvckV2ZW50KSB7XG5cdFx0XHRcdFx0XHRNb3JlYml0cy5zdGF0dXMuZXJyb3JFdmVudCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQvLyBhbHNvIGxvZyBlcnJvciBtZXNzYWdlcyBpbiB0aGUgYnJvd3NlciBjb25zb2xlXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihgW01vcmViaXRzXSAke3RoaXMudGV4dFJhd306ICR7dGhpcy5zdGF0UmF3fWApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnJlbmRlcigpO1xuXHRcdH0sXG5cdFx0LyoqIFByb2R1Y2UgdGhlIGh0bWwgZm9yIGZpcnN0IHBhcnQgb2YgdGhlIHN0YXR1cyBtZXNzYWdlLiAqL1xuXHRcdGdlbmVyYXRlKCkge1xuXHRcdFx0dGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHR0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKS5hcHBlbmRDaGlsZCh0aGlzLnRleHQpO1xuXHRcdFx0dGhpcy5ub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJzogJykpO1xuXHRcdFx0dGhpcy50YXJnZXQgPSB0aGlzLm5vZGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKTtcblx0XHRcdHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7IC8vIGR1bW15IG5vZGVcblx0XHR9LFxuXG5cdFx0LyoqIENvbXBsZXRlIHRoZSBodG1sLCBmb3IgdGhlIHNlY29uZCBwYXJ0IG9mIHRoZSBzdGF0dXMgbWVzc2FnZS4gKi9cblx0XHRyZW5kZXIoKSB7XG5cdFx0XHR0aGlzLm5vZGUuY2xhc3NOYW1lID0gYG1vcmViaXRzX3N0YXR1c18ke3RoaXMudHlwZX1gO1xuXHRcdFx0d2hpbGUgKHRoaXMudGFyZ2V0Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdFx0XHR0aGlzLnRhcmdldC5yZW1vdmVDaGlsZCh0aGlzLnRhcmdldC5maXJzdENoaWxkKTtcblx0XHRcdH1cblx0XHRcdHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKHRoaXMuc3RhdCk7XG5cdFx0XHR0aGlzLmxpbmsoKTtcblx0XHR9LFxuXHRcdHN0YXR1cyhzdGF0dXMpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXR1cywgJ3N0YXR1cycpO1xuXHRcdH0sXG5cdFx0aW5mbyhzdGF0dXMpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXR1cywgJ2luZm8nKTtcblx0XHR9LFxuXHRcdHdhcm4oc3RhdHVzKSB7XG5cdFx0XHR0aGlzLnVwZGF0ZShzdGF0dXMsICd3YXJuJyk7XG5cdFx0fSxcblx0XHRlcnJvcihzdGF0dXMpIHtcblx0XHRcdHRoaXMudXBkYXRlKHN0YXR1cywgJ2Vycm9yJyk7XG5cdFx0fSxcblx0fTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBCZWZvcmUgY29sb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIEFmdGVyIGNvbG9uXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IC0gYHN0YXR1c2AtdHlwZSAoYmx1ZSlcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5zdGF0dXMgPSAodGV4dCwgc3RhdHVzKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBNb3JlYml0cy5zdGF0dXModGV4dCwgc3RhdHVzKTtcblx0fTtcblx0LyoqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBCZWZvcmUgY29sb25cblx0ICogQHBhcmFtIHtzdHJpbmd9IHN0YXR1cyAtIEFmdGVyIGNvbG9uXG5cdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zdGF0dXN9IC0gYGluZm9gLXR5cGUgKGdyZWVuKVxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLmluZm8gPSAodGV4dCwgc3RhdHVzKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBNb3JlYml0cy5zdGF0dXModGV4dCwgc3RhdHVzLCAnaW5mbycpO1xuXHR9O1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEJlZm9yZSBjb2xvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gQWZ0ZXIgY29sb25cblx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gLSBgd2FybmAtdHlwZSAocmVkKVxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLndhcm4gPSAodGV4dCwgc3RhdHVzKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBNb3JlYml0cy5zdGF0dXModGV4dCwgc3RhdHVzLCAnd2FybicpO1xuXHR9O1xuXHQvKipcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIEJlZm9yZSBjb2xvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3RhdHVzIC0gQWZ0ZXIgY29sb25cblx0ICogQHJldHVybnMge01vcmViaXRzLnN0YXR1c30gLSBgZXJyb3JgLXR5cGUgKGJvbGQgcmVkKVxuXHQgKi9cblx0TW9yZWJpdHMuc3RhdHVzLmVycm9yID0gKHRleHQsIHN0YXR1cykgPT4ge1xuXHRcdHJldHVybiBuZXcgTW9yZWJpdHMuc3RhdHVzKHRleHQsIHN0YXR1cywgJ2Vycm9yJyk7XG5cdH07XG5cdC8qKlxuXHQgKiBGb3IgdGhlIGFjdGlvbiBjb21wbGV0ZSBtZXNzYWdlIGF0IHRoZSBlbmQsIGNyZWF0ZSBhIHN0YXR1cyBsaW5lIHdpdGhvdXRcblx0ICogYSBjb2xvbiBzZXBhcmF0b3IuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0cy5zdGF0dXNcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHRcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5hY3Rpb25Db21wbGV0ZWQgPSAodGV4dCkgPT4ge1xuXHRcdGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRub2RlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2InKSkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpO1xuXHRcdG5vZGUuY2xhc3NOYW1lID0gJ21vcmViaXRzX3N0YXR1c19pbmZvIG1vcmViaXRzX2FjdGlvbl9jb21wbGV0ZSc7XG5cdFx0aWYgKE1vcmViaXRzLnN0YXR1cy5yb290KSB7XG5cdFx0XHRNb3JlYml0cy5zdGF0dXMucm9vdC5hcHBlbmRDaGlsZChub2RlKTtcblx0XHR9XG5cdH07XG5cdC8qKlxuXHQgKiBEaXNwbGF5IHRoZSB1c2VyJ3MgcmF0aW9uYWxlLCBjb21tZW50cywgZXRjLiBCYWNrIHRvIHRoZW0gYWZ0ZXIgYSBmYWlsdXJlLFxuXHQgKiBzbyB0aGF0IHRoZXkgbWF5IHJlLXVzZSBpdC5cblx0ICpcblx0ICogQG1lbWJlcm9mIE1vcmViaXRzLnN0YXR1c1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29tbWVudHNcblx0ICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2Vcblx0ICovXG5cdE1vcmViaXRzLnN0YXR1cy5wcmludFVzZXJUZXh0ID0gKGNvbW1lbnRzLCBtZXNzYWdlKSA9PiB7XG5cdFx0Y29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0XHRwLmlubmVySFRNTCA9IG1lc3NhZ2U7XG5cdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZGl2LmNsYXNzTmFtZSA9ICdtb3JlYml0cy11c2VydGV4dCc7XG5cdFx0ZGl2LnN0eWxlLm1hcmdpblRvcCA9ICcwJztcblx0XHRkaXYuc3R5bGUud2hpdGVTcGFjZSA9ICdwcmUtd3JhcCc7XG5cdFx0ZGl2LnRleHRDb250ZW50ID0gY29tbWVudHM7XG5cdFx0cC5hcHBlbmRDaGlsZChkaXYpO1xuXHRcdE1vcmViaXRzLnN0YXR1cy5yb290LmFwcGVuZENoaWxkKHApO1xuXHR9O1xuXHQvKipcblx0ICogU2ltcGxlIGhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgYSBzaW1wbGUgbm9kZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBUeXBlIG9mIEhUTUwgZWxlbWVudC5cblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgLSBUZXh0IGNvbnRlbnQuXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbY29sb3JdIC0gRm9udCBjb2xvci5cblx0ICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0TW9yZWJpdHMuaHRtbE5vZGUgPSAodHlwZSwgY29udGVudCwgY29sb3IpID0+IHtcblx0XHRjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblx0XHRpZiAoY29sb3IpIHtcblx0XHRcdG5vZGUuc3R5bGUuY29sb3IgPSBjb2xvcjtcblx0XHR9XG5cdFx0bm9kZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb250ZW50KSk7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH07XG5cdC8qKlxuXHQgKiBBZGQgc2hpZnQtY2xpY2sgc3VwcG9ydCBmb3IgY2hlY2tib3hlcy4gVGhlIHdpa2liaXRzIHZlcnNpb25cblx0ICogKGB3aW5kb3cuYWRkQ2hlY2tib3hDbGlja0hhbmRsZXJzYCkgaGFzIHNvbWUgcmVzdHJpY3Rpb25zLCBhbmQgZG9lc24ndCB3b3JrXG5cdCAqIHdpdGggY2hlY2tib3hlcyBpbnNpZGUgYSBzb3J0YWJsZSB0YWJsZSwgc28gbGV0J3MgYnVpbGQgb3VyIG93bi5cblx0ICpcblx0ICogQHBhcmFtIGpRdWVyeVNlbGVjdG9yXG5cdCAqIEBwYXJhbSBqUXVlcnlDb250ZXh0XG5cdCAqL1xuXHRNb3JlYml0cy5jaGVja2JveFNoaWZ0Q2xpY2tTdXBwb3J0ID0gKGpRdWVyeVNlbGVjdG9yLCBqUXVlcnlDb250ZXh0KSA9PiB7XG5cdFx0bGV0IGxhc3RDaGVja2JveCA9IG51bGw7XG5cdFx0Y29uc3QgY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGV2ZW50KSB7XG5cdFx0XHRjb25zdCB0aGlzQ2IgPSB0aGlzO1xuXHRcdFx0aWYgKGV2ZW50LnNoaWZ0S2V5ICYmIGxhc3RDaGVja2JveCAhPT0gbnVsbCkge1xuXHRcdFx0XHRjb25zdCBjYnMgPSAkKGpRdWVyeVNlbGVjdG9yLCBqUXVlcnlDb250ZXh0KTsgLy8gY2FuJ3QgY2FjaGUgdGhlbSwgb2J2aW91c2x5LCBpZiB3ZSB3YW50IHRvIHN1cHBvcnQgcmVzb3J0aW5nXG5cdFx0XHRcdGxldCBpbmRleCA9IC0xO1xuXHRcdFx0XHRsZXQgbGFzdEluZGV4ID0gLTE7XG5cdFx0XHRcdGxldCBpO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2JzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGNic1tpXSA9PT0gdGhpc0NiKSB7XG5cdFx0XHRcdFx0XHRpbmRleCA9IGk7XG5cdFx0XHRcdFx0XHRpZiAobGFzdEluZGV4ID4gLTEpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChjYnNbaV0gPT09IGxhc3RDaGVja2JveCkge1xuXHRcdFx0XHRcdFx0bGFzdEluZGV4ID0gaTtcblx0XHRcdFx0XHRcdGlmIChpbmRleCA+IC0xKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoaW5kZXggPiAtMSAmJiBsYXN0SW5kZXggPiAtMSkge1xuXHRcdFx0XHRcdC8vIGluc3BpcmVkIGJ5IHdpa2liaXRzXG5cdFx0XHRcdFx0Y29uc3QgZW5kU3RhdGUgPSB0aGlzQ2IuY2hlY2tlZDtcblx0XHRcdFx0XHRsZXQgc3RhcnQ7XG5cdFx0XHRcdFx0bGV0IGZpbmlzaDtcblx0XHRcdFx0XHRpZiAoaW5kZXggPCBsYXN0SW5kZXgpIHtcblx0XHRcdFx0XHRcdHN0YXJ0ID0gaW5kZXggKyAxO1xuXHRcdFx0XHRcdFx0ZmluaXNoID0gbGFzdEluZGV4O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzdGFydCA9IGxhc3RJbmRleDtcblx0XHRcdFx0XHRcdGZpbmlzaCA9IGluZGV4IC0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9yIChpID0gc3RhcnQ7IGkgPD0gZmluaXNoOyBpKyspIHtcblx0XHRcdFx0XHRcdGlmIChjYnNbaV0uY2hlY2tlZCAhPT0gZW5kU3RhdGUpIHtcblx0XHRcdFx0XHRcdFx0Y2JzW2ldLmNsaWNrKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRsYXN0Q2hlY2tib3ggPSB0aGlzQ2I7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9O1xuXHRcdCQoalF1ZXJ5U2VsZWN0b3IsIGpRdWVyeUNvbnRleHQpLm9uKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG5cdH07XG5cdC8qICoqKioqKioqKioqKioqKiogTW9yZWJpdHMuYmF0Y2hPcGVyYXRpb24gKioqKioqKioqKioqKioqKiAqL1xuXHQvKipcblx0ICogSXRlcmF0ZXMgb3ZlciBhIGdyb3VwIG9mIHBhZ2VzIChvciBhcmJpdHJhcnkgb2JqZWN0cykgYW5kIGV4ZWN1dGVzIGEgd29ya2VyIGZ1bmN0aW9uXG5cdCAqIGZvciBlYWNoLlxuXHQgKlxuXHQgKiBgc2V0UGFnZUxpc3QocGFnZUxpc3QpYDogU2V0cyB0aGUgbGlzdCBvZiBwYWdlcyB0byB3b3JrIG9uLiBJdCBzaG91bGQgYmUgYW5cblx0ICogYXJyYXkgb2YgcGFnZSBuYW1lcyBzdHJpbmdzLlxuXHQgKlxuXHQgKiBgc2V0T3B0aW9uKG9wdGlvbk5hbWUsIG9wdGlvblZhbHVlKWA6IFNldHMgYSBrbm93biBvcHRpb246XG5cdCAqIC0gYGNodW5rU2l6ZWAgKGludGVnZXIpOiBUaGUgc2l6ZSBvZiBjaHVua3MgdG8gYnJlYWsgdGhlIGFycmF5IGludG8gKGRlZmF1bHRcblx0ICogNTApLiBTZXR0aW5nIHRoaXMgdG8gYSBzbWFsbCB2YWx1ZSAoPDUpIGNhbiBjYXVzZSBwcm9ibGVtcy5cblx0ICogLSBgcHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXNgIChib29sZWFuKTogS2VlcCBlYWNoIHBhZ2UncyBzdGF0dXMgZWxlbWVudFxuXHQgKiB2aXNpYmxlIHdoZW4gd29ya2VyIGlzIGNvbXBsZXRlPyBTZWUgbm90ZSBiZWxvdy5cblx0ICpcblx0ICogYHJ1bih3b3JrZXIsIHBvc3RGaW5pc2gpYDogUnVucyB0aGUgY2FsbGJhY2sgYHdvcmtlcmAgZm9yIGVhY2ggcGFnZSBpbiB0aGVcblx0ICogbGlzdC4gIFRoZSBjYWxsYmFjayBtdXN0IGNhbGwgYHdvcmtlclN1Y2Nlc3NgIHdoZW4gc3VjY2VlZGluZywgb3Jcblx0ICogYHdvcmtlckZhaWx1cmVgIHdoZW4gZmFpbGluZy4gIElmIHVzaW5nIHtAbGluayBNb3JlYml0cy53aWtpLmFwaX0gb3Jcblx0ICoge0BsaW5rIE1vcmViaXRzLndpa2kucGFnZX0sIHRoaXMgaXMgZWFzaWx5IGRvbmUgYnkgcGFzc2luZyB0aGVzZSB0d29cblx0ICogZnVuY3Rpb25zIGFzIHBhcmFtZXRlcnMgdG8gdGhlIG1ldGhvZHMgb24gdGhvc2Ugb2JqZWN0czogZm9yIGluc3RhbmNlLFxuXHQgKiBgcGFnZS5zYXZlKGJhdGNoT3Aud29ya2VyU3VjY2VzcywgYmF0Y2hPcC53b3JrZXJGYWlsdXJlKWAuICBNYWtlIHN1cmUgdGhlXG5cdCAqIG1ldGhvZHMgYXJlIGNhbGxlZCBkaXJlY3RseSBpZiBzcGVjaWFsIHN1Y2Nlc3MvZmFpbHVyZSBjYXNlcyBhcmlzZS4gIElmIHlvdVxuXHQgKiBvbWl0IHRvIGNhbGwgdGhlc2UgbWV0aG9kcywgdGhlIGJhdGNoIG9wZXJhdGlvbiB3aWxsIHN0YWxsIGFmdGVyIHRoZSBmaXJzdFxuXHQgKiBjaHVuayEgIEFsc28gZW5zdXJlIHRoYXQgZWl0aGVyIHdvcmtlclN1Y2Nlc3Mgb3Igd29ya2VyRmFpbHVyZSBpcyBjYWxsZWQgbm9cblx0ICogbW9yZSB0aGFuIG9uY2UuICBUaGUgc2Vjb25kIGNhbGxiYWNrIGBwb3N0RmluaXNoYCBpcyBleGVjdXRlZCB3aGVuIHRoZVxuXHQgKiBlbnRpcmUgYmF0Y2ggaGFzIGJlZW4gcHJvY2Vzc2VkLlxuXHQgKlxuXHQgKiBJZiB1c2luZyBgcHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXNgLCB5b3Ugc2hvdWxkIHRyeSB0byBlbnN1cmUgdGhhdCB0aGVcblx0ICogYHdvcmtlclN1Y2Nlc3NgIGNhbGxiYWNrIGhhcyBhY2Nlc3MgdG8gdGhlIHBhZ2UgdGl0bGUuICBUaGlzIGlzIG5vIHByb2JsZW0gZm9yXG5cdCAqIHtAbGluayBNb3JlYml0cy53aWtpLnBhZ2V9IG9iamVjdHMuICBCdXQgd2hlbiB1c2luZyB0aGUgQVBJLCBwbGVhc2Ugc2V0IHRoZVxuXHQgKiB8cGFnZU5hbWV8IHByb3BlcnR5IG9uIHRoZSB7QGxpbmsgTW9yZWJpdHMud2lraS5hcGl9IG9iamVjdC5cblx0ICpcblx0ICogVGhlcmUgYXJlIHNhbXBsZSBiYXRjaE9wZXJhdGlvbiBpbXBsZW1lbnRhdGlvbnMgdXNpbmcgTW9yZWJpdHMud2lraS5wYWdlIGluXG5cdCAqIHR3aW5rbGViYXRjaGRlbGV0ZS5qcywgdHdpbmtsZWJhdGNodW5kZWxldGUuanMsIGFuZCB0d2lua2xlYmF0Y2hwcm90ZWN0LmpzLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHNcblx0ICogQGNsYXNzXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBbY3VycmVudEFjdGlvbl1cblx0ICovXG5cdE1vcmViaXRzLmJhdGNoT3BlcmF0aW9uID0gZnVuY3Rpb24gKGN1cnJlbnRBY3Rpb24pIHtcblx0XHRjb25zdCBjdHggPSB7XG5cdFx0XHQvLyBiYWNraW5nIGZpZWxkcyBmb3IgcHVibGljIHByb3BlcnRpZXNcblx0XHRcdHBhZ2VMaXN0OiBudWxsLFxuXHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRjaHVua1NpemU6IDUwLFxuXHRcdFx0XHRwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lczogZmFsc2UsXG5cdFx0XHR9LFxuXHRcdFx0Ly8gaW50ZXJuYWwgY291bnRlcnMsIGV0Yy5cblx0XHRcdHN0YXR1c0VsZW1lbnQ6IG5ldyBNb3JlYml0cy5zdGF0dXMoY3VycmVudEFjdGlvbiB8fCB3aW5kb3cud2dVTFMoJ+aJp+ihjOaJuemHj+aTjeS9nCcsICfln7fooYzmibnmrKHmk43kvZwnKSksXG5cdFx0XHR3b3JrZXI6IG51bGwsXG5cdFx0XHQvLyBmdW5jdGlvbiB0aGF0IGV4ZWN1dGVzIGZvciBlYWNoIGl0ZW0gaW4gcGFnZUxpc3Rcblx0XHRcdHBvc3RGaW5pc2g6IG51bGwsXG5cdFx0XHQvLyBmdW5jdGlvbiB0aGF0IGV4ZWN1dGVzIHdoZW4gdGhlIHdob2xlIGJhdGNoIGhhcyBiZWVuIHByb2Nlc3NlZFxuXHRcdFx0Y291bnRTdGFydGVkOiAwLFxuXHRcdFx0Y291bnRGaW5pc2hlZDogMCxcblx0XHRcdGNvdW50RmluaXNoZWRTdWNjZXNzOiAwLFxuXHRcdFx0Y3VycmVudENodW5rSW5kZXg6IC0xLFxuXHRcdFx0cGFnZUNodW5rczogW10sXG5cdFx0XHRydW5uaW5nOiBmYWxzZSxcblx0XHR9O1xuXHRcdC8vIHNob3VsZG4ndCBiZSBuZWVkZWQgYnkgZXh0ZXJuYWwgdXNlcnMsIGJ1dCBwcm92aWRlZCBhbnl3YXkgZm9yIG1heGltdW0gZmxleGliaWxpdHlcblx0XHR0aGlzLmdldFN0YXR1c0VsZW1lbnQgPSAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gY3R4LnN0YXR1c0VsZW1lbnQ7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBsaXN0IG9mIHBhZ2VzIHRvIHdvcmsgb24uXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBwYWdlTGlzdCAtIEFycmF5IG9mIG9iamVjdHMgb3ZlciB3aGljaCB5b3Ugd2lzaCB0byBleGVjdXRlIHRoZSB3b3JrZXIgZnVuY3Rpb25cblx0XHQgKiBUaGlzIGlzIHVzdWFsbHkgdGhlIGxpc3Qgb2YgcGFnZSBuYW1lcyAoc3RyaW5ncykuXG5cdFx0ICovXG5cdFx0dGhpcy5zZXRQYWdlTGlzdCA9IChwYWdlTGlzdCkgPT4ge1xuXHRcdFx0Y3R4LnBhZ2VMaXN0ID0gcGFnZUxpc3Q7XG5cdFx0fTtcblx0XHQvKipcblx0XHQgKiBTZXRzIGEga25vd24gb3B0aW9uLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbk5hbWUgLSBOYW1lIG9mIHRoZSBvcHRpb246XG5cdFx0ICogLSBjaHVua1NpemUgKGludGVnZXIpOiBUaGUgc2l6ZSBvZiBjaHVua3MgdG8gYnJlYWsgdGhlIGFycmF5IGludG9cblx0XHQgKiAoZGVmYXVsdCA1MCkuIFNldHRpbmcgdGhpcyB0byBhIHNtYWxsIHZhbHVlICg8NSkgY2FuIGNhdXNlIHByb2JsZW1zLlxuXHRcdCAqIC0gcHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXMgKGJvb2xlYW4pOiBLZWVwIGVhY2ggcGFnZSdzIHN0YXR1c1xuXHRcdCAqIGVsZW1lbnQgdmlzaWJsZSB3aGVuIHdvcmtlciBpcyBjb21wbGV0ZT9cblx0XHQgKiBAcGFyYW0ge251bWJlcnxib29sZWFufSBvcHRpb25WYWx1ZSAtIFZhbHVlIHRvIHdoaWNoIHRoZSBvcHRpb24gaXNcblx0XHQgKiB0byBiZSBzZXQuIFNob3VsZCBiZSBhbiBpbnRlZ2VyIGZvciBjaHVua1NpemUgYW5kIGEgYm9vbGVhbiBmb3Jcblx0XHQgKiBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcy5cblx0XHQgKi9cblx0XHR0aGlzLnNldE9wdGlvbiA9IChvcHRpb25OYW1lLCBvcHRpb25WYWx1ZSkgPT4ge1xuXHRcdFx0Y3R4Lm9wdGlvbnNbb3B0aW9uTmFtZV0gPSBvcHRpb25WYWx1ZTtcblx0XHR9O1xuXHRcdC8qKlxuXHRcdCAqIFJ1bnMgdGhlIGZpcnN0IGNhbGxiYWNrIGZvciBlYWNoIHBhZ2UgaW4gdGhlIGxpc3QuXG5cdFx0ICogVGhlIGNhbGxiYWNrIG11c3QgY2FsbCB3b3JrZXJTdWNjZXNzIHdoZW4gc3VjY2VlZGluZywgb3Igd29ya2VyRmFpbHVyZSB3aGVuIGZhaWxpbmcuXG5cdFx0ICogUnVucyB0aGUgb3B0aW9uYWwgc2Vjb25kIGNhbGxiYWNrIHdoZW4gdGhlIHdob2xlIGJhdGNoIGhhcyBiZWVuIHByb2Nlc3NlZC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IHdvcmtlclxuXHRcdCAqIEBwYXJhbSB7RnVuY3Rpb259IFtwb3N0RmluaXNoXVxuXHRcdCAqL1xuXHRcdHRoaXMucnVuID0gKHdvcmtlciwgcG9zdEZpbmlzaCkgPT4ge1xuXHRcdFx0aWYgKGN0eC5ydW5uaW5nKSB7XG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LmVycm9yKHdpbmRvdy53Z1VMUygn5om56YeP5pON5L2c5bey5Zyo6L+Q6KGMJywgJ+aJueasoeaTjeS9nOW3suWcqOWft+ihjCcpKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y3R4LnJ1bm5pbmcgPSB0cnVlO1xuXHRcdFx0Y3R4LndvcmtlciA9IHdvcmtlcjtcblx0XHRcdGN0eC5wb3N0RmluaXNoID0gcG9zdEZpbmlzaDtcblx0XHRcdGN0eC5jb3VudFN0YXJ0ZWQgPSAwO1xuXHRcdFx0Y3R4LmNvdW50RmluaXNoZWQgPSAwO1xuXHRcdFx0Y3R4LmNvdW50RmluaXNoZWRTdWNjZXNzID0gMDtcblx0XHRcdGN0eC5jdXJyZW50Q2h1bmtJbmRleCA9IC0xO1xuXHRcdFx0Y3R4LnBhZ2VDaHVua3MgPSBbXTtcblx0XHRcdGNvbnN0IHRvdGFsID0gY3R4LnBhZ2VMaXN0Lmxlbmd0aDtcblx0XHRcdGlmICghdG90YWwpIHtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyh3aW5kb3cud2dVTFMoJ+ayoeacieaMh+WumumhtemdoicsICfmspLmnInmjIflrprpoIHpnaInKSk7XG5cdFx0XHRcdGN0eC5ydW5uaW5nID0gZmFsc2U7XG5cdFx0XHRcdGlmIChjdHgucG9zdEZpbmlzaCkge1xuXHRcdFx0XHRcdGN0eC5wb3N0RmluaXNoKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Ly8gY2h1bmsgcGFnZSBsaXN0IGludG8gbW9yZSBtYW5hZ2VhYmxlIHVuaXRzXG5cdFx0XHRjdHgucGFnZUNodW5rcyA9IE1vcmViaXRzLmFycmF5LmNodW5rKGN0eC5wYWdlTGlzdCwgY3R4Lm9wdGlvbnMuY2h1bmtTaXplKTtcblx0XHRcdC8vIHN0YXJ0IHRoZSBwcm9jZXNzXG5cdFx0XHRNb3JlYml0cy53aWtpLmFkZENoZWNrcG9pbnQoKTtcblx0XHRcdGN0eC5zdGF0dXNFbGVtZW50LnN0YXR1cygnMCUnKTtcblx0XHRcdGZuU3RhcnROZXdDaHVuaygpO1xuXHRcdH07XG5cdFx0LyoqXG5cdFx0ICogVG8gYmUgY2FsbGVkIGJ5IHdvcmtlciBiZWZvcmUgaXQgdGVybWluYXRlcyBzdWNjZXNzZnVsbHkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0geyhNb3JlYml0cy53aWtpLnBhZ2V8TW9yZWJpdHMud2lraS5hcGl8c3RyaW5nKX0gYXJnIC1cblx0XHQgKiBUaGlzIHNob3VsZCBiZSB0aGUgYE1vcmViaXRzLndpa2kucGFnZWAgb3IgYE1vcmViaXRzLndpa2kuYXBpYCBvYmplY3QgdXNlZCBieSB3b3JrZXJcblx0XHQgKiAoZm9yIHRoZSBhZGp1c3RtZW50IG9mIHN0YXR1cyBsaW5lcyBlbWl0dGVkIGJ5IHRoZW0pLlxuXHRcdCAqIElmIG5vIE1vcmViaXRzLndpa2kuKiBvYmplY3QgaXMgdXNlZCAoZS5nLiB5b3UncmUgdXNpbmcgYG13LkFwaSgpYCBvciBzb21ldGhpbmcgZWxzZSksIGFuZFxuXHRcdCAqIGBwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lc2Agb3B0aW9uIGlzIG9uLCBnaXZlIHRoZSBwYWdlIG5hbWUgKHN0cmluZykgYXMgYXJndW1lbnQuXG5cdFx0ICovXG5cdFx0dGhpcy53b3JrZXJTdWNjZXNzID0gKGFyZykgPT4ge1xuXHRcdFx0aWYgKGFyZyBpbnN0YW5jZW9mIE1vcmViaXRzLndpa2kuYXBpIHx8IGFyZyBpbnN0YW5jZW9mIE1vcmViaXRzLndpa2kucGFnZSkge1xuXHRcdFx0XHQvLyB1cGRhdGUgb3IgcmVtb3ZlIHN0YXR1cyBsaW5lXG5cdFx0XHRcdGNvbnN0IHN0YXRlbGVtID0gYXJnLmdldFN0YXR1c0VsZW1lbnQoKTtcblx0XHRcdFx0aWYgKGN0eC5vcHRpb25zLnByZXNlcnZlSW5kaXZpZHVhbFN0YXR1c0xpbmVzKSB7XG5cdFx0XHRcdFx0aWYgKGFyZy5nZXRQYWdlTmFtZSB8fCBhcmcucGFnZU5hbWUgfHwgKGFyZy5xdWVyeSAmJiBhcmcucXVlcnkudGl0bGUpKSB7XG5cdFx0XHRcdFx0XHQvLyB3ZSBrbm93IHRoZSBwYWdlIHRpdGxlIC0gZGlzcGxheSBhIHJlbGV2YW50IG1lc3NhZ2Vcblx0XHRcdFx0XHRcdGNvbnN0IHBhZ2VOYW1lID0gYXJnLmdldFBhZ2VOYW1lID8gYXJnLmdldFBhZ2VOYW1lKCkgOiBhcmcucGFnZU5hbWUgfHwgYXJnLnF1ZXJ5LnRpdGxlO1xuXHRcdFx0XHRcdFx0c3RhdGVsZW0uaW5mbyhg5a6M5oiQ77yIW1ske3BhZ2VOYW1lfV1d77yJYCk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIHdlIGRvbid0IGtub3cgdGhlIHBhZ2UgdGl0bGUgLSBqdXN0IGRpc3BsYXkgYSBnZW5lcmljIG1lc3NhZ2Vcblx0XHRcdFx0XHRcdHN0YXRlbGVtLmluZm8oJ+WujOaIkCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyByZW1vdmUgdGhlIHN0YXR1cyBsaW5lIGF1dG9tYXRpY2FsbHkgcHJvZHVjZWQgYnkgTW9yZWJpdHMud2lraS4qXG5cdFx0XHRcdFx0c3RhdGVsZW0udW5saW5rKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgJiYgY3R4Lm9wdGlvbnMucHJlc2VydmVJbmRpdmlkdWFsU3RhdHVzTGluZXMpIHtcblx0XHRcdFx0bmV3IE1vcmViaXRzLnN0YXR1cyhhcmcsIGDlrozmiJDvvIhbWyR7YXJnfV1d77yJYCk7XG5cdFx0XHR9XG5cdFx0XHRjdHguY291bnRGaW5pc2hlZFN1Y2Nlc3MrKztcblx0XHRcdGZuRG9uZU9uZSgpO1xuXHRcdH07XG5cdFx0dGhpcy53b3JrZXJGYWlsdXJlID0gKCkgPT4ge1xuXHRcdFx0Zm5Eb25lT25lKCk7XG5cdFx0fTtcblx0XHQvLyBwcml2YXRlIGZ1bmN0aW9uc1xuXHRcdGNvbnN0IHRoaXNQcm94eSA9IHRoaXM7XG5cdFx0Y29uc3QgZm5TdGFydE5ld0NodW5rID0gKCkgPT4ge1xuXHRcdFx0Y29uc3QgY2h1bmsgPSBjdHgucGFnZUNodW5rc1srK2N0eC5jdXJyZW50Q2h1bmtJbmRleF07XG5cdFx0XHRpZiAoIWNodW5rKSB7XG5cdFx0XHRcdHJldHVybjsgLy8gZG9uZSEgeWF5XG5cdFx0XHR9XG5cdFx0XHQvLyBzdGFydCB3b3JrZXJzIGZvciB0aGUgY3VycmVudCBjaHVua1xuXHRcdFx0Y3R4LmNvdW50U3RhcnRlZCArPSBjaHVuay5sZW5ndGg7XG5cdFx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgY2h1bmspIHtcblx0XHRcdFx0Y3R4LndvcmtlcihwYWdlLCB0aGlzUHJveHkpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgZm5Eb25lT25lID0gKCkgPT4ge1xuXHRcdFx0Y3R4LmNvdW50RmluaXNoZWQrKztcblx0XHRcdC8vIHVwZGF0ZSBvdmVyYWxsIHN0YXR1cyBsaW5lXG5cdFx0XHRjb25zdCB0b3RhbCA9IGN0eC5wYWdlTGlzdC5sZW5ndGg7XG5cdFx0XHRpZiAoY3R4LmNvdW50RmluaXNoZWQgPCB0b3RhbCkge1xuXHRcdFx0XHRjb25zdCBwcm9ncmVzcyA9IE1hdGgucm91bmQoKDEwMCAqIGN0eC5jb3VudEZpbmlzaGVkKSAvIHRvdGFsKTtcblx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuc3RhdHVzKGAke3Byb2dyZXNzfSVgKTtcblx0XHRcdFx0Ly8gc3RhcnQgYSBuZXcgY2h1bmsgaWYgd2UncmUgY2xvc2UgZW5vdWdoIHRvIHRoZSBlbmQgb2YgdGhlIHByZXZpb3VzIGNodW5rLCBhbmRcblx0XHRcdFx0Ly8gd2UgaGF2ZW4ndCBhbHJlYWR5IHN0YXJ0ZWQgdGhlIG5leHQgb25lXG5cdFx0XHRcdGlmIChcblx0XHRcdFx0XHRjdHguY291bnRGaW5pc2hlZCA+PSBjdHguY291bnRTdGFydGVkIC0gTWF0aC5tYXgoY3R4Lm9wdGlvbnMuY2h1bmtTaXplIC8gMTAsIDIpICYmXG5cdFx0XHRcdFx0TWF0aC5mbG9vcihjdHguY291bnRGaW5pc2hlZCAvIGN0eC5vcHRpb25zLmNodW5rU2l6ZSkgPiBjdHguY3VycmVudENodW5rSW5kZXhcblx0XHRcdFx0KSB7XG5cdFx0XHRcdFx0Zm5TdGFydE5ld0NodW5rKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoY3R4LmNvdW50RmluaXNoZWQgPT09IHRvdGFsKSB7XG5cdFx0XHRcdGNvbnN0IHN0YXR1c1N0cmluZyA9IGDlrozmiJDvvIgke2N0eC5jb3VudEZpbmlzaGVkU3VjY2Vzc30vJHtjdHguY291bnRGaW5pc2hlZH3mk43kvZzmiJDlip/lrozmiJDvvIlgO1xuXHRcdFx0XHRpZiAoY3R4LmNvdW50RmluaXNoZWRTdWNjZXNzIDwgY3R4LmNvdW50RmluaXNoZWQpIHtcblx0XHRcdFx0XHRjdHguc3RhdHVzRWxlbWVudC53YXJuKHN0YXR1c1N0cmluZyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y3R4LnN0YXR1c0VsZW1lbnQuaW5mbyhzdGF0dXNTdHJpbmcpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChjdHgucG9zdEZpbmlzaCkge1xuXHRcdFx0XHRcdGN0eC5wb3N0RmluaXNoKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0TW9yZWJpdHMud2lraS5yZW1vdmVDaGVja3BvaW50KCk7XG5cdFx0XHRcdGN0eC5ydW5uaW5nID0gZmFsc2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBjdHguY291bnRGaW5pc2hlZCA+IHRvdGFsXG5cdFx0XHRcdC8vIGp1c3QgZm9yIGdpZ2dsZXMhICh3ZWxsLCBzZXJpb3VzIGRlYnVnZ2luZywgYWN0dWFsbHkpXG5cdFx0XHRcdGN0eC5zdGF0dXNFbGVtZW50Lndhcm4oXG5cdFx0XHRcdFx0YCR7d2luZG93LndnVUxTKCflrozmiJDvvIjlpJrmiafooYzkuoYnLCAn5a6M5oiQ77yI5aSa5Z+36KGM5LqGJykgKyAoY3R4LmNvdW50RmluaXNoZWQgLSB0b3RhbCl95qyh77yJYFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRNb3JlYml0cy53aWtpLnJlbW92ZUNoZWNrcG9pbnQoKTtcblx0XHRcdFx0Y3R4LnJ1bm5pbmcgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXHQvKipcblx0ICogQSBzaW1wbGUgZHJhZ2dhYmxlIHdpbmRvdywgbm93IGEgd3JhcHBlciBmb3IgalF1ZXJ5IFVJJ3MgZGlhbG9nIGZlYXR1cmUuXG5cdCAqXG5cdCAqIEBtZW1iZXJvZiBNb3JlYml0c1xuXHQgKiBAY2xhc3Ncblx0ICogQHJlcXVpcmVzIGpxdWVyeS51aS5kaWFsb2dcblx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG5cdCAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgLSBUaGUgbWF4aW11bSBhbGxvd2FibGUgaGVpZ2h0IGZvciB0aGUgY29udGVudCBhcmVhLlxuXHQgKi9cblx0TW9yZWJpdHMuc2ltcGxlV2luZG93ID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcblx0XHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGhpcy5jb250ZW50ID0gY29udGVudDtcblx0XHRjb250ZW50LmNsYXNzTmFtZSA9ICdtb3JlYml0cy1kaWFsb2ctY29udGVudCc7XG5cdFx0Y29udGVudC5pZCA9IGBtb3JlYml0cy1kaWFsb2ctY29udGVudC0ke01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDFlMTUpfWA7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZyh7XG5cdFx0XHRhdXRvT3BlbjogZmFsc2UsXG5cdFx0XHRidXR0b25zOiB7XG5cdFx0XHRcdCdQbGFjZWhvbGRlciBidXR0b24nOiAoKSA9PiB7fSxcblx0XHRcdH0sXG5cdFx0XHRkaWFsb2dDbGFzczogJ21vcmViaXRzLWRpYWxvZycsXG5cdFx0XHR3aWR0aDogTWF0aC5taW4oTnVtYmVyLnBhcnNlSW50KHdpbmRvdy5pbm5lcldpZHRoLCAxMCksIE51bWJlci5wYXJzZUludCh3aWR0aCB8fCA4MDAsIDEwKSksXG5cdFx0XHQvLyBnaXZlIGpRdWVyeSB0aGUgZ2l2ZW4gaGVpZ2h0IHZhbHVlICh3aGljaCByZXByZXNlbnRzIHRoZSBhbnRpY2lwYXRlZCBoZWlnaHQgb2YgdGhlIGRpYWxvZykgaGVyZSwgc29cblx0XHRcdC8vIGl0IGNhbiBwb3NpdGlvbiB0aGUgZGlhbG9nIGFwcHJvcHJpYXRlbHlcblx0XHRcdC8vIHRoZSAyMCBwaXhlbHMgcmVwcmVzZW50cyBhZGp1c3RtZW50IGZvciB0aGUgZXh0cmEgaGVpZ2h0IG9mIHRoZSBqUXVlcnkgZGlhbG9nIFwiY2hyb21lXCIsIGNvbXBhcmVkXG5cdFx0XHQvLyB0byB0aGF0IG9mIHRoZSBvbGQgU2ltcGxlV2luZG93XG5cdFx0XHRoZWlnaHQ6IGhlaWdodCArIDIwLFxuXHRcdFx0Y2xvc2U6IChldmVudCkgPT4ge1xuXHRcdFx0XHQvLyBkaWFsb2dzIGFuZCB0aGVpciBjb250ZW50IGNhbiBiZSBkZXN0cm95ZWQgb25jZSBjbG9zZWRcblx0XHRcdFx0JChldmVudC50YXJnZXQpLmRpYWxvZygnZGVzdHJveScpLnJlbW92ZSgpO1xuXHRcdFx0fSxcblx0XHRcdHJlc2l6ZVN0YXJ0KCkge1xuXHRcdFx0XHRbdGhpcy5zY3JvbGxib3hdID0gJCh0aGlzKS5maW5kKCcubW9yZWJpdHMtc2Nyb2xsYm94Jyk7XG5cdFx0XHRcdGlmICh0aGlzLnNjcm9sbGJveCkge1xuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsYm94LnN0eWxlLm1heEhlaWdodCA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHJlc2l6ZVN0b3AoKSB7XG5cdFx0XHRcdHRoaXMuc2Nyb2xsYm94ID0gbnVsbDtcblx0XHRcdH0sXG5cdFx0XHRyZXNpemUoKSB7XG5cdFx0XHRcdHRoaXMuc3R5bGUubWF4SGVpZ2h0ID0gJyc7XG5cdFx0XHRcdGlmICh0aGlzLnNjcm9sbGJveCkge1xuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsYm94LnN0eWxlLndpZHRoID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0Y29uc3QgJHdpZGdldCA9ICQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpO1xuXHRcdC8vIGRlbGV0ZSB0aGUgcGxhY2Vob2xkZXIgYnV0dG9uIChpdCdzIG9ubHkgdGhlcmUgc28gdGhlIGJ1dHRvbnBhbmUgZ2V0cyBjcmVhdGVkKVxuXHRcdCR3aWRnZXQuZmluZCgnYnV0dG9uJykuZWFjaCgoa2V5LCB2YWx1ZSkgPT4ge1xuXHRcdFx0dmFsdWUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh2YWx1ZSk7XG5cdFx0fSk7XG5cdFx0Ly8gYWRkIGNvbnRhaW5lciBmb3IgdGhlIGJ1dHRvbnMgd2UgYWRkLCBhbmQgdGhlIGZvb3RlciBsaW5rcyAoaWYgYW55KVxuXHRcdGNvbnN0IGJ1dHRvbnNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0YnV0dG9uc3Bhbi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMnO1xuXHRcdGNvbnN0IGxpbmtzc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHRsaW5rc3NwYW4uY2xhc3NOYW1lID0gJ21vcmViaXRzLWRpYWxvZy1mb290ZXJsaW5rcyc7XG5cdFx0JHdpZGdldC5maW5kKCcudWktZGlhbG9nLWJ1dHRvbnBhbmUnKS5hcHBlbmQoYnV0dG9uc3BhbiwgbGlua3NzcGFuKTtcblx0XHQvLyByZXNpemUgdGhlIHNjcm9sbGJveCB3aXRoIHRoZSBkaWFsb2csIGlmIG9uZSBpcyBwcmVzZW50XG5cdFx0JHdpZGdldC5yZXNpemFibGUoJ29wdGlvbicsICdhbHNvUmVzaXplJywgYCMke3RoaXMuY29udGVudC5pZH0gLm1vcmViaXRzLXNjcm9sbGJveCwgIyR7dGhpcy5jb250ZW50LmlkfWApO1xuXHR9O1xuXHRNb3JlYml0cy5zaW1wbGVXaW5kb3cucHJvdG90eXBlID0ge1xuXHRcdGJ1dHRvbnM6IFtdLFxuXHRcdGhlaWdodDogNjAwLFxuXHRcdGhhc0Zvb3RlckxpbmtzOiBmYWxzZSxcblx0XHRzY3JpcHROYW1lOiBudWxsLFxuXHRcdC8qKlxuXHRcdCAqIEZvY3VzZXMgdGhlIGRpYWxvZy4gVGhpcyBtaWdodCB3b3JrLCBvciBvbiB0aGUgY29udHJhcnksIGl0IG1pZ2h0IG5vdC5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0Zm9jdXMoKSB7XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdtb3ZlVG9Ub3AnKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQ2xvc2VzIHRoZSBkaWFsb2cuIElmIHRoaXMgaXMgc2V0IGFzIGFuIGV2ZW50IGhhbmRsZXIsIGl0IHdpbGwgc3RvcCB0aGUgZXZlbnRcblx0XHQgKiBmcm9tIGRvaW5nIGFueXRoaW5nIG1vcmUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2V2ZW50fSBbZXZlbnRdXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRjbG9zZShldmVudCkge1xuXHRcdFx0aWYgKGV2ZW50KSB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHR9XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCdjbG9zZScpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTaG93cyB0aGUgZGlhbG9nLiBDYWxsaW5nIGRpc3BsYXkoKSBvbiBhIGRpYWxvZyB0aGF0IGhhcyBwcmV2aW91c2x5IGJlZW4gY2xvc2VkXG5cdFx0ICogbWlnaHQgd29yaywgYnV0IGl0IGlzIG5vdCBndWFyYW50ZWVkLlxuXHRcdCAqXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRkaXNwbGF5KCkge1xuXHRcdFx0aWYgKHRoaXMuc2NyaXB0TmFtZSkge1xuXHRcdFx0XHRjb25zdCAkd2lkZ2V0ID0gJCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0Jyk7XG5cdFx0XHRcdCR3aWRnZXQuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1zY3JpcHRuYW1lJykucmVtb3ZlKCk7XG5cdFx0XHRcdGNvbnN0IHNjcmlwdG5hbWVzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdFx0XHRzY3JpcHRuYW1lc3Bhbi5jbGFzc05hbWUgPSAnbW9yZWJpdHMtZGlhbG9nLXNjcmlwdG5hbWUnO1xuXHRcdFx0XHRzY3JpcHRuYW1lc3Bhbi50ZXh0Q29udGVudCA9IGAke3RoaXMuc2NyaXB0TmFtZX0gXFx1MDBCNyBgOyAvLyBVKzAwQjcgTUlERExFIERPVCA9ICZtaWRkb3Q7XG5cdFx0XHRcdCR3aWRnZXQuZmluZCgnLnVpLWRpYWxvZy10aXRsZScpLnByZXBlbmQoc2NyaXB0bmFtZXNwYW4pO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgZGlhbG9nID0gJCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3BlbicpO1xuXHRcdFx0aWYgKHdpbmRvdy5zZXR1cFRvb2x0aXBzICYmIHdpbmRvdy5wZyAmJiB3aW5kb3cucGcucmUgJiYgd2luZG93LnBnLnJlLmRpZmYpIHtcblx0XHRcdFx0Ly8gdGllIGluIHdpdGggTkFWUE9QXG5cdFx0XHRcdGRpYWxvZy5wYXJlbnQoKVswXS5yYW5TZXR1cFRvb2x0aXBzQWxyZWFkeSA9IGZhbHNlO1xuXHRcdFx0XHR3aW5kb3cuc2V0dXBUb29sdGlwcyhkaWFsb2cucGFyZW50KClbMF0pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRIZWlnaHQodGhpcy5oZWlnaHQpOyAvLyBpbml0IGhlaWdodCBhbGdvcml0aG1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgZGlhbG9nIHRpdGxlLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRUaXRsZSh0aXRsZSkge1xuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3B0aW9uJywgJ3RpdGxlJywgdGl0bGUpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBzY3JpcHQgbmFtZSwgYXBwZWFyaW5nIGFzIGEgcHJlZml4IHRvIHRoZSB0aXRsZSB0byBoZWxwIHVzZXJzIGRldGVybWluZSB3aGljaFxuXHRcdCAqIHVzZXIgc2NyaXB0IGlzIHByb2R1Y2luZyB3aGljaCBkaWFsb2cuIEZvciBpbnN0YW5jZSwgVHdpbmtsZSBtb2R1bGVzIHNldCB0aGlzIHRvIFwiVHdpbmtsZVwiLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldFNjcmlwdE5hbWUobmFtZSkge1xuXHRcdFx0dGhpcy5zY3JpcHROYW1lID0gbmFtZTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgZGlhbG9nIHdpZHRoLlxuXHRcdCAqXG5cdFx0ICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRXaWR0aCh3aWR0aCkge1xuXHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3B0aW9uJywgJ3dpZHRoJywgd2lkdGgpO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHRoZSBkaWFsb2cncyBtYXhpbXVtIGhlaWdodC4gVGhlIGRpYWxvZyB3aWxsIGF1dG8tc2l6ZSB0byBmaXQgaXRzIGNvbnRlbnRzLFxuXHRcdCAqIGJ1dCB0aGUgY29udGVudCBhcmVhIHdpbGwgZ3JvdyBubyBsYXJnZXIgdGhhbiB0aGUgaGVpZ2h0IGdpdmVuIGhlcmUuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRzZXRIZWlnaHQoaGVpZ2h0KSB7XG5cdFx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHRcdC8vIGZyb20gZGlzcGxheSB0aW1lIG9ud2FyZHMsIGxldCB0aGUgYnJvd3NlciBkZXRlcm1pbmUgdGhlIG9wdGltdW0gaGVpZ2h0LFxuXHRcdFx0Ly8gYW5kIGluc3RlYWQgbGltaXQgdGhlIGhlaWdodCBhdCB0aGUgZ2l2ZW4gdmFsdWVcblx0XHRcdC8vIG5vdGUgdGhhdCB0aGUgZ2l2ZW4gaGVpZ2h0IHdpbGwgZXhjbHVkZSB0aGUgYXBwcm94LiAyMHB4IHRoYXQgdGhlIGpRdWVyeSBVSVxuXHRcdFx0Ly8gY2hyb21lIGhhcyBpbiBoZWlnaHQgaW4gYWRkaXRpb24gdG8gdGhlIGhlaWdodCBvZiBhbiBlcXVpdmFsZW50IFwiY2xhc3NpY1wiXG5cdFx0XHQvLyBNb3JlYml0cy5zaW1wbGVXaW5kb3dcblx0XHRcdGlmIChcblx0XHRcdFx0TnVtYmVyLnBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoJCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnd2lkZ2V0JylbMF0sIG51bGwpLmhlaWdodCwgMTApID5cblx0XHRcdFx0d2luZG93LmlubmVySGVpZ2h0XG5cdFx0XHQpIHtcblx0XHRcdFx0JCh0aGlzLmNvbnRlbnQpXG5cdFx0XHRcdFx0LmRpYWxvZygnb3B0aW9uJywgJ2hlaWdodCcsIHdpbmRvdy5pbm5lckhlaWdodCAtIDIpXG5cdFx0XHRcdFx0LmRpYWxvZygnb3B0aW9uJywgJ3Bvc2l0aW9uJywgJ3RvcCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzLmNvbnRlbnQpLmRpYWxvZygnb3B0aW9uJywgJ2hlaWdodCcsICdhdXRvJyk7XG5cdFx0XHR9XG5cdFx0XHQkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKS5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWNvbnRlbnQnKVswXS5zdHlsZS5tYXhIZWlnaHQgPSBgJHtOdW1iZXIucGFyc2VJbnQoXG5cdFx0XHRcdHRoaXMuaGVpZ2h0IC0gMzAsXG5cdFx0XHRcdDEwXG5cdFx0XHQpfXB4YDtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogU2V0cyB0aGUgY29udGVudCBvZiB0aGUgZGlhbG9nIHRvIHRoZSBnaXZlbiBlbGVtZW50IG5vZGUsIHVzdWFsbHkgZnJvbSByZW5kZXJpbmdcblx0XHQgKiBhIHtAbGluayBNb3JlYml0cy5xdWlja0Zvcm19LlxuXHRcdCAqIFJlLWVudW1lcmF0ZXMgdGhlIGZvb3RlciBidXR0b25zLCBidXQgbGVhdmVzIHRoZSBmb290ZXIgbGlua3MgYXMgdGhleSBhcmUuXG5cdFx0ICogQmUgc3VyZSB0byBjYWxsIHRoaXMgYXQgbGVhc3Qgb25jZSBiZWZvcmUgdGhlIGRpYWxvZyBpcyBkaXNwbGF5ZWQuLi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRlbnRcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdHNldENvbnRlbnQoY29udGVudCkge1xuXHRcdFx0dGhpcy5wdXJnZUNvbnRlbnQoKTtcblx0XHRcdHRoaXMuYWRkQ29udGVudChjb250ZW50KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICogQWRkcyB0aGUgZ2l2ZW4gZWxlbWVudCBub2RlIHRvIHRoZSBkaWFsb2cgY29udGVudC5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRlbnRcblx0XHQgKiBAcmV0dXJucyB7TW9yZWJpdHMuc2ltcGxlV2luZG93fVxuXHRcdCAqL1xuXHRcdGFkZENvbnRlbnQoY29udGVudCkge1xuXHRcdFx0dGhpcy5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXHRcdFx0Ly8gbG9vayBmb3Igc3VibWl0IGJ1dHRvbnMgaW4gdGhlIGNvbnRlbnQsIGhpZGUgdGhlbSwgYW5kIGFkZCBhIHByb3h5IGJ1dHRvbiB0byB0aGUgYnV0dG9uIHBhbmVcblx0XHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdFx0JCh0aGlzLmNvbnRlbnQpXG5cdFx0XHRcdC5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdLCBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpXG5cdFx0XHRcdC5lYWNoKChrZXksIHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0dmFsdWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHRcdFx0XHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHRcdFx0XHRpZiAodmFsdWUuaGFzQXR0cmlidXRlKCd2YWx1ZScpKSB7XG5cdFx0XHRcdFx0XHRidXR0b24udGV4dENvbnRlbnQgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZS50ZXh0Q29udGVudCkge1xuXHRcdFx0XHRcdFx0YnV0dG9uLnRleHRDb250ZW50ID0gdmFsdWUudGV4dENvbnRlbnQ7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJ1dHRvbi50ZXh0Q29udGVudCA9ICfmj5DkuqQnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRidXR0b24uY2xhc3NOYW1lID0gdmFsdWUuY2xhc3NOYW1lIHx8ICdzdWJtaXRCdXR0b25Qcm94eSc7XG5cdFx0XHRcdFx0Ly8gaGVyZSBpcyBhbiBpbnN0YW5jZSBvZiBjaGVhcCBjb2RpbmcsIHByb2JhYmx5IGEgbWVtb3J5LXVzYWdlIGhpdCBpbiB1c2luZyBhIGNsb3N1cmUgaGVyZVxuXHRcdFx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0XHRcdFx0J2NsaWNrJyxcblx0XHRcdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRcdFx0dmFsdWUuY2xpY2soKTtcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRmYWxzZVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0c2VsZi5idXR0b25zW3NlbGYuYnV0dG9ucy5sZW5ndGhdID0gYnV0dG9uO1xuXHRcdFx0XHR9KTtcblx0XHRcdC8vIHJlbW92ZSBhbGwgYnV0dG9ucyBmcm9tIHRoZSBidXR0b24gcGFuZSBhbmQgcmUtYWRkIHRoZW1cblx0XHRcdGlmICh0aGlzLmJ1dHRvbnMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHQkKHRoaXMuY29udGVudClcblx0XHRcdFx0XHQuZGlhbG9nKCd3aWRnZXQnKVxuXHRcdFx0XHRcdC5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMnKVxuXHRcdFx0XHRcdC5lbXB0eSgpXG5cdFx0XHRcdFx0LmFwcGVuZCh0aGlzLmJ1dHRvbnMpWzBdXG5cdFx0XHRcdFx0LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1lbXB0eScpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzLmNvbnRlbnQpXG5cdFx0XHRcdFx0LmRpYWxvZygnd2lkZ2V0Jylcblx0XHRcdFx0XHQuZmluZCgnLm1vcmViaXRzLWRpYWxvZy1idXR0b25zJylbMF1cblx0XHRcdFx0XHQuc2V0QXR0cmlidXRlKCdkYXRhLWVtcHR5JywgJ2RhdGEtZW1wdHknKTsgLy8gdXNlZCBieSBDU1Ncblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBSZW1vdmVzIGFsbCBjb250ZW50cyBmcm9tIHRoZSBkaWFsb2csIGJhcnJpbmcgYW55IGZvb3RlciBsaW5rcy5cblx0XHQgKlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0cHVyZ2VDb250ZW50KCkge1xuXHRcdFx0dGhpcy5idXR0b25zID0gW107XG5cdFx0XHQvLyBkZWxldGUgYWxsIGJ1dHRvbnMgaW4gdGhlIGJ1dHRvbnBhbmVcblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ3dpZGdldCcpLmZpbmQoJy5tb3JlYml0cy1kaWFsb2ctYnV0dG9ucycpLmVtcHR5KCk7XG5cdFx0XHR3aGlsZSAodGhpcy5jb250ZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuXHRcdFx0XHR0aGlzLmNvbnRlbnQucmVtb3ZlQ2hpbGQodGhpcy5jb250ZW50LmZpcnN0Q2hpbGQpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBBZGRzIGEgbGluayBpbiB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lciBvZiB0aGUgZGlhbG9nLlxuXHRcdCAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBoZWxwIG9yIHBvbGljeSBsaW5rcy5cblx0XHQgKiBGb3IgZXhhbXBsZSwgVHdpbmtsZSdzIENTRCBtb2R1bGUgYWRkcyBhIGxpbmsgdG8gdGhlIENTRCBwb2xpY3kgcGFnZSxcblx0XHQgKiBhcyB3ZWxsIGFzIGEgbGluayB0byBUd2lua2xlJ3MgZG9jdW1lbnRhdGlvbi5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gRGlzcGxheSB0ZXh0LlxuXHRcdCAqIEBwYXJhbSB7c3RyaW5nfSB3aWtpUGFnZSAtIExpbmsgdGFyZ2V0LlxuXHRcdCAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZXA9ZmFsc2VdIC0gU2V0IHRydWUgdG8gcHJlcGVuZCByYXRoZXIgdGhhbiBhcHBlbmQuXG5cdFx0ICogQHJldHVybnMge01vcmViaXRzLnNpbXBsZVdpbmRvd31cblx0XHQgKi9cblx0XHRhZGRGb290ZXJMaW5rKHRleHQsIHdpa2lQYWdlLCBwcmVwKSB7XG5cdFx0XHRjb25zdCAkZm9vdGVybGlua3MgPSAkKHRoaXMuY29udGVudCkuZGlhbG9nKCd3aWRnZXQnKS5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWZvb3RlcmxpbmtzJyk7XG5cdFx0XHRpZiAodGhpcy5oYXNGb290ZXJMaW5rcykge1xuXHRcdFx0XHRjb25zdCBidWxsZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHRcdGJ1bGxldC50ZXh0Q29udGVudCA9ICcgXFx1MjAyMiAnOyAvLyBVKzIwMjIgQlVMTEVUXG5cdFx0XHRcdGlmIChwcmVwKSB7XG5cdFx0XHRcdFx0JGZvb3RlcmxpbmtzLnByZXBlbmQoYnVsbGV0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQkZm9vdGVybGlua3MuYXBwZW5kKGJ1bGxldCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsIG13LnV0aWwuZ2V0VXJsKHdpa2lQYWdlKSk7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgndGl0bGUnLCB3aWtpUGFnZSk7XG5cdFx0XHRsaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuXHRcdFx0bGluay5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub29wZW5lciBub3JlZmVycmVyJyk7XG5cdFx0XHRsaW5rLnRleHRDb250ZW50ID0gdGV4dDtcblx0XHRcdGlmIChwcmVwKSB7XG5cdFx0XHRcdCRmb290ZXJsaW5rcy5wcmVwZW5kKGxpbmspO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JGZvb3RlcmxpbmtzLmFwcGVuZChsaW5rKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuaGFzRm9vdGVyTGlua3MgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblx0XHQvKipcblx0XHQgKiBTZXRzIHdoZXRoZXIgdGhlIHdpbmRvdyBzaG91bGQgYmUgbW9kYWwgb3Igbm90LiBNb2RhbCBkaWFsb2dzIGNyZWF0ZVxuXHRcdCAqIGFuIG92ZXJsYXkgYmVsb3cgdGhlIGRpYWxvZyBidXQgYWJvdmUgb3RoZXIgcGFnZSBlbGVtZW50cy4gVGhpc1xuXHRcdCAqIG11c3QgYmUgdXNlZCAoaWYgbmVjZXNzYXJ5KSBiZWZvcmUgY2FsbGluZyBkaXNwbGF5KCkuXG5cdFx0ICpcblx0XHQgKiBAcGFyYW0ge2Jvb2xlYW59IFttb2RhbD1mYWxzZV0gLSBJZiBzZXQgdG8gdHJ1ZSwgb3RoZXIgaXRlbXMgb24gdGhlXG5cdFx0ICogcGFnZSB3aWxsIGJlIGRpc2FibGVkLCBpLmUuLCBjYW5ub3QgYmUgaW50ZXJhY3RlZCB3aXRoLlxuXHRcdCAqIEByZXR1cm5zIHtNb3JlYml0cy5zaW1wbGVXaW5kb3d9XG5cdFx0ICovXG5cdFx0c2V0TW9kYWxpdHkobW9kYWwpIHtcblx0XHRcdCQodGhpcy5jb250ZW50KS5kaWFsb2coJ29wdGlvbicsICdtb2RhbCcsIG1vZGFsKTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cdH07XG5cdC8qKlxuXHQgKiBFbmFibGVzIG9yIGRpc2FibGVzIGFsbCBmb290ZXIgYnV0dG9ucyBvbiBhbGwge0BsaW5rIE1vcmViaXRzLnNpbXBsZVdpbmRvd31zIGluIHRoZSBjdXJyZW50IHBhZ2UuXG5cdCAqIFRoaXMgc2hvdWxkIGJlIGNhbGxlZCB3aXRoIGBmYWxzZWAgd2hlbiB0aGUgYnV0dG9uKHMpIGJlY29tZSBpcnJlbGV2YW50IChlLmcuIGp1c3QgYmVmb3JlXG5cdCAqIHtAbGluayBNb3JlYml0cy5zdGF0dXMuaW5pdH0gaXMgY2FsbGVkKS5cblx0ICogVGhpcyBpcyBub3QgYW4gaW5zdGFuY2UgbWV0aG9kIHNvIHRoYXQgY29uc3VtZXJzIGRvbid0IGhhdmUgdG8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGVcblx0ICogb3JpZ2luYWwgYE1vcmViaXRzLnNpbXBsZVdpbmRvd2Agb2JqZWN0IHNpdHRpbmcgYXJvdW5kIHNvbWV3aGVyZS4gQW55d2F5LCBtb3N0IG9mIHRoZSB0aW1lXG5cdCAqIHRoZXJlIHdpbGwgb25seSBiZSBvbmUgYE1vcmViaXRzLnNpbXBsZVdpbmRvd2Agb3Blbiwgc28gdGhpcyBzaG91bGRuJ3QgbWF0dGVyLlxuXHQgKlxuXHQgKiBAbWVtYmVyb2YgTW9yZWJpdHMuc2ltcGxlV2luZG93XG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZFxuXHQgKi9cblx0TW9yZWJpdHMuc2ltcGxlV2luZG93LnNldEJ1dHRvbnNFbmFibGVkID0gKGVuYWJsZWQpID0+IHtcblx0XHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0XHQkYm9keS5maW5kKCcubW9yZWJpdHMtZGlhbG9nLWJ1dHRvbnMgYnV0dG9uJykucHJvcCgnZGlzYWJsZWQnLCAhZW5hYmxlZCk7XG5cdH07XG59KShqUXVlcnkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUNB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QUNSOzs7Ozs7Ozs7O0lBVUF3QixZQUFZQyxPQUFPO0FBQ2xCejlCLFFBQUUsS0FBS3dFLE9BQU8sRUFBRXUyQixPQUFPLFVBQVUsU0FBUzBDLEtBQUs7QUFDL0MsYUFBTztJQUNSO0VBQ0Q7QUFZQXg5QixXQUFTMjZCLGFBQWE4QyxvQkFBcUJDLGFBQVk7QUFDdEQsVUFBTWxSLFFBQVF6c0IsRUFBRSxNQUFNO0FBQ3RCeXNCLFVBQU1wZixLQUFLLGlDQUFpQyxFQUFFMFQsS0FBSyxZQUFZLENBQUM0YyxPQUFPO0VBQ3hFO0FBQ0QsR0FBR0MsTUFBTTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJtb3JlYml0cyIsICIkIiwgIk1vcmViaXRzIiwgIndpbmRvdyIsICJsMTBuIiwgInJlZGlyZWN0VGFnQWxpYXNlcyIsICJzaWduYXR1cmVUaW1lc3RhbXBGb3JtYXQiLCAic3RyIiwgInJneFVUQyIsICJyZ3hDU1QiLCAibWF0Y2giLCAiZXhlYyIsICJtYXRjaENTVCIsICJtb250aCIsICJkYXRlIiwgImxvY2FsZURhdGEiLCAibW9udGhzIiwgImluZGV4T2YiLCAidXNlcklzSW5Hcm91cCIsICJncm91cCIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImluY2x1ZGVzIiwgInVzZXJJc1N5c29wIiwgInNhbml0aXplSVB2NiIsICJhZGRyZXNzIiwgImNvbnNvbGUiLCAid2FybiIsICJpcCIsICJpc1BhZ2VSZWRpcmVjdCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgInBhZ2VOYW1lTm9ybSIsICJyZXBsYWNlIiwgInBhZ2VOYW1lUmVnZXgiLCAicGFnZU5hbWUiLCAiZmlyc3RDaGFyIiwgInJlbWFpbmRlciIsICJzdHJpbmciLCAiZXNjYXBlUmVnRXhwIiwgInNsaWNlIiwgIlRpdGxlIiwgInBocENoYXJUb1VwcGVyIiwgInRvTG93ZXJDYXNlIiwgImNvbmNhdCIsICJjcmVhdGVIdG1sIiwgImlucHV0IiwgImZyYWdtZW50IiwgImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCAiZ2VuZXJhdGVBcnJheSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiZWxlbWVudCIsICJ2YWx1ZSIsICJOb2RlIiwgImFwcGVuZENoaWxkIiwgIl9pdGVyYXRvcjIiLCAicGFyc2VIVE1MIiwgInJlbmRlcldpa2lsaW5rcyIsICJfc3RlcDIiLCAibm9kZSIsICJlcnIiLCAiZSIsICJmIiwgInRleHQiLCAidWIiLCAidW5iaW5kZXIiLCAidW5iaW5kIiwgImNvbnRlbnQiLCAiXyIsICJ0YXJnZXQiLCAidGV4dF8iLCAidXRpbCIsICJnZXRVcmwiLCAicmViaW5kIiwgIm5hbWVzcGFjZVJlZ2V4IiwgIm5hbWVzcGFjZXMiLCAiYWxpYXNlcyIsICJyZWdleCIsICJfaSIsICJfT2JqZWN0JGVudHJpZXMiLCAiT2JqZWN0IiwgImVudHJpZXMiLCAibGVuZ3RoIiwgIm5hbWUiLCAibnVtYmVyIiwgIm1hcCIsICJjaGFyIiwgImpvaW4iLCAicXVpY2tGb3JtIiwgImV2ZW50IiwgImV2ZW50VHlwZSIsICJyb290IiwgInR5cGUiLCAicHJvdG90eXBlIiwgInJlbmRlciIsICJyZXQiLCAibmFtZXMiLCAiYXBwZW5kIiwgImRhdGEiLCAiY2hpbGRzIiwgImlkIiwgImNoaWxkIiwgImludGVybmFsU3ViZ3JvdXBJZCIsICJjdXJyZW50Tm9kZSIsICJjb21wdXRlIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgImluSWQiLCAiY2hpbGRDb250YWluZXIiLCAibGFiZWwiLCAiYWRtaW5vbmx5IiwgImkiLCAiY3VycmVudCIsICJzdWJub2RlIiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInNldEF0dHJpYnV0ZSIsICJhZGRFdmVudExpc3RlbmVyIiwgInNlbGVjdCIsICJtdWx0aXBsZSIsICJzaXplIiwgImRpc2FibGVkIiwgImxpc3QiLCAidmFsdWVzIiwgInNlbGVjdGVkIiwgImhpZGRlbiIsICJjcmVhdGVUZXh0Tm9kZSIsICJjdXJJZCIsICJjdXJEaXYiLCAidG9vbHRpcCIsICJnZW5lcmF0ZVRvb2x0aXAiLCAiY2hlY2tlZCIsICJzdHlsZSIsICJzdWJncm91cCIsICJ0bXBncm91cCIsICJzdWJncm91cFJhdyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJlbCIsICJuZXdFbCIsICJzaG93biIsICJwYXJlbnROb2RlIiwgImZvcm0iLCAicmVtb3ZlQ2hpbGQiLCAic2hpZnRDbGlja1N1cHBvcnQiLCAiY2hlY2tib3hTaGlmdENsaWNrU3VwcG9ydCIsICJnZXRFbGVtZW50cyIsICJwbGFjZWhvbGRlciIsICJfaTIiLCAiX2FyciIsICJhdHQiLCAiX2kzIiwgIl9hcnIyIiwgIl9pNCIsICJfYXJyMyIsICJtaW4iLCAibWF4IiwgIk51bWJlciIsICJQT1NJVElWRV9JTkZJTklUWSIsICJsaXN0Tm9kZSIsICJtb3JlIiwgIm5ld05vZGUiLCAic3VibGlzdCIsICJhcmVhIiwgImNvdW50ZXIiLCAic3RvcFByb3BhZ2F0aW9uIiwgIm1vcmVCdXR0b24iLCAic3VibGFiZWwiLCAicmVtb3ZlIiwgIm1heGxlbmd0aCIsICJlbGVtIiwgIm1vcmVidXR0b24iLCAibGlzdG5vZGUiLCAibm9kZV8iLCAiaW5wdXRub2RlIiwgInJlbW92ZUF0dHJpYnV0ZSIsICJyZW1vdmVCdXR0b24iLCAicmVzdWx0IiwgImxhYmVsRWxlbWVudCIsICJjb2xzIiwgInJvd3MiLCAicmVxdWlyZWQiLCAicmVhZG9ubHkiLCAiRXJyb3IiLCAidG9TdHJpbmciLCAiZXh0cmEiLCAiJGRhdGEiLCAidG9vbHRpcEJ1dHRvbiIsICJ0aXRsZSIsICJwb3NpdGlvbiIsICJteSIsICJhdCIsICJjb2xsaXNpb24iLCAidG9vbHRpcENsYXNzIiwgImdldElucHV0RGF0YSIsICJfaXRlcmF0b3I1IiwgImVsZW1lbnRzIiwgIl9zdGVwNSIsICJmaWVsZCIsICJmaWVsZE5hbWVOb3JtIiwgImRhdGFzZXQiLCAic2luZ2xlIiwgInZhbCIsICJ0cmltIiwgImZpZWxkTmFtZSIsICIkZm9ybSIsICJlc2NhcGVTZWxlY3RvciIsICIkZWxlbWVudHMiLCAiZmluZCIsICJ0b0FycmF5IiwgImdldENoZWNrYm94T3JSYWRpbyIsICJlbGVtZW50QXJyYXkiLCAiZm91bmQiLCAiZmlsdGVyIiwgImdldEVsZW1lbnRDb250YWluZXIiLCAiSFRNTEZpZWxkU2V0RWxlbWVudCIsICJIVE1MRGl2RWxlbWVudCIsICJIVE1MSGVhZGluZ0VsZW1lbnQiLCAiZ2V0RWxlbWVudExhYmVsT2JqZWN0IiwgIkhUTUxUZXh0QXJlYUVsZW1lbnQiLCAiZ2V0RWxlbWVudExhYmVsIiwgImZpcnN0Q2hpbGQiLCAidGV4dENvbnRlbnQiLCAic2V0RWxlbWVudExhYmVsIiwgImxhYmVsVGV4dCIsICJvdmVycmlkZUVsZW1lbnRMYWJlbCIsICJ0ZW1wb3JhcnlMYWJlbFRleHQiLCAiaGFzQXR0cmlidXRlIiwgInJlc2V0RWxlbWVudExhYmVsIiwgImdldEF0dHJpYnV0ZSIsICJzZXRFbGVtZW50VmlzaWJpbGl0eSIsICJ2aXNpYmlsaXR5IiwgInRvZ2dsZSIsICJzZXRFbGVtZW50VG9vbHRpcFZpc2liaWxpdHkiLCAiSFRNTEZvcm1FbGVtZW50IiwgImdldENoZWNrZWQiLCAicmV0dXJuQXJyYXkiLCAiSFRNTFNlbGVjdEVsZW1lbnQiLCAib3B0aW9ucyIsICJIVE1MSW5wdXRFbGVtZW50IiwgImdldFVuY2hlY2tlZCIsICJpc0lQdjZBZGRyZXNzIiwgInRvVXBwZXJDYXNlIiwgImFiYnJldlBvcyIsICJDSURSU3RhcnQiLCAiYWRkcmVzc0VuZCIsICJyZXBlYXQiLCAicGFkIiwgInJlcGxhY2VtZW50IiwgInNwbGl0IiwgImlzUmFuZ2UiLCAiaXNJUEFkZHJlc3MiLCAidmFsaWRDSURSIiwgInN1Ym5ldCIsICJwYXJzZUludCIsICJnZXQ2NCIsICJpcHY2IiwgInN1Ym5ldE1hdGNoIiwgImlwUmVnZXgiLCAidG9VcHBlckNhc2VGaXJzdENoYXIiLCAidG9Mb3dlckNhc2VGaXJzdENoYXIiLCAic3BsaXRXZWlnaHRlZEJ5S2V5cyIsICJzdGFydCIsICJlbmQiLCAic2tpcGxpc3QiLCAibGV2ZWwiLCAiaW5pdGlhbCIsICJBcnJheSIsICJpc0FycmF5IiwgIlR5cGVFcnJvciIsICJfaXRlcmF0b3I2IiwgIl9zdGVwNiIsICJmb3JtYXRSZWFzb25UZXh0IiwgImFkZFNpZyIsICJyZWFzb24iLCAic2lnIiwgInNpZ0luZGV4IiwgImxhc3RJbmRleE9mIiwgImZvcm1hdFJlYXNvbkZvckxvZyIsICJzYWZlUmVwbGFjZSIsICJwYXR0ZXJuIiwgImlzSW5maW5pdHkiLCAiZXhwaXJ5IiwgImZvcm1hdFRpbWUiLCAidGltZSIsICJtIiwgIndnVUxTIiwgImFwcGVuZFB1bmN0dWF0aW9uIiwgInB1bmN0dWF0aW9uIiwgInNlYXJjaCIsICJhcnJheSIsICJ1bmlxIiwgImFyciIsICJpdGVtIiwgImlkeCIsICJkdXBzIiwgImNodW5rIiwgIm51bUNodW5rcyIsICJNYXRoIiwgImNlaWwiLCAiZnJvbSIsICJzZWxlY3QyIiwgIm1hdGNoZXJzIiwgIm9wdGdyb3VwRnVsbCIsICJwYXJhbXMiLCAib3JpZ2luYWxNYXRjaGVyIiwgImZuIiwgImRlZmF1bHRzIiwgIm1hdGNoZXIiLCAidGVybSIsICJjaGlsZHJlbiIsICJ3b3JkQmVnaW5uaW5nIiwgIlJlZ0V4cCIsICJ0ZXN0IiwgImhpZ2hsaWdodFNlYXJjaE1hdGNoZXMiLCAic2VhcmNoVGVybSIsICJzZWxlY3QyU2VhcmNoUXVlcnkiLCAibG9hZGluZyIsICJjc3MiLCAicXVlcnlJbnRlcmNlcHRvciIsICJhdXRvU3RhcnQiLCAiZXYiLCAid2hpY2giLCAiY2xvc2VzdCIsICJwcmV2IiwgImRyb3Bkb3duIiwgIiRzZWFyY2giLCAic2VsZWN0aW9uIiwgImZvY3VzIiwgImhpc3RvcnkiLCAicHJlZml4IiwgInJhbmRvbSIsICJwb3N0Zml4IiwgInJlIiwgImdldENhbGxiYWNrIiwgImhhc093biIsICJzZWxmIiwgImFyZ3MiLCAiX3RoaXMkX2QiLCAicGFyYW0iLCAiZGlnaXRNYXRjaCIsICJfZCIsICJEYXRlIiwgIlJlZmxlY3QiLCAiYXBwbHkiLCAiVVRDIiwgImRhdGVQYXJ0cyIsICJGdW5jdGlvbiIsICJiaW5kIiwgImlzVmFsaWQiLCAibG9nIiwgIm1vbnRoc1Nob3J0IiwgImRheXMiLCAiZGF5c1Nob3J0IiwgInJlbGF0aXZlVGltZXMiLCAidGhpc0RheSIsICJwcmV2RGF5IiwgIm5leHREYXkiLCAidGhpc1dlZWsiLCAicGFzdFdlZWsiLCAib3RoZXIiLCAidW5pdE1hcCIsICJzZWNvbmRzIiwgIm1pbnV0ZXMiLCAiaG91cnMiLCAid2Vla3MiLCAieWVhcnMiLCAiaXNOYU4iLCAiZ2V0VGltZSIsICJpc0JlZm9yZSIsICJpc0FmdGVyIiwgImdldFVUQ01vbnRoTmFtZSIsICJnZXRVVENNb250aCIsICJnZXRVVENNb250aE5hbWVBYmJyZXYiLCAiZ2V0TW9udGhOYW1lIiwgImdldE1vbnRoIiwgImdldE1vbnRoTmFtZUFiYnJldiIsICJnZXRVVENEYXlOYW1lIiwgImdldFVUQ0RheSIsICJnZXRVVENEYXlOYW1lQWJicmV2IiwgImdldERheU5hbWUiLCAiZ2V0RGF5IiwgImdldERheU5hbWVBYmJyZXYiLCAiYWRkIiwgInVuaXQiLCAibnVtIiwgInVuaXROb3JtIiwgImtleXMiLCAic3VidHJhY3QiLCAiZm9ybWF0IiwgImZvcm1hdHN0ciIsICJ6b25lIiwgInVkYXRlIiwgImdldFRpbWV6b25lT2Zmc2V0IiwgInRvSVNPU3RyaW5nIiwgImxlbiIsICJoMjQiLCAiZ2V0SG91cnMiLCAiZ2V0TWludXRlcyIsICJnZXRTZWNvbmRzIiwgIm1zIiwgImdldE1pbGxpc2Vjb25kcyIsICJEIiwgImdldERhdGUiLCAiTSIsICJZIiwgImdldEZ1bGxZZWFyIiwgImgxMiIsICJhbU9yUG0iLCAicmVwbGFjZW1lbnRNYXAiLCAiSEgiLCAiSCIsICJoaCIsICJoIiwgIkEiLCAibW0iLCAic3MiLCAiU1NTIiwgImRkZGQiLCAiZGRkIiwgImQiLCAiREQiLCAiTU1NTSIsICJNTU0iLCAiTU0iLCAiWVlZWSIsICJZWSIsICJTdHJpbmciLCAicmF3IiwgIl90ZW1wbGF0ZU9iamVjdCIsICJfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsIiwgIl90ZW1wbGF0ZU9iamVjdDIiLCAiY2FsZW5kYXIiLCAiZGF0ZURpZmYiLCAic2V0SG91cnMiLCAibW9udGhIZWFkZXJSZWdleCIsICJnZXRVVENGdWxsWWVhciIsICJtb250aEhlYWRlciIsICJoZWFkZXIiLCAiX2l0ZXJhdG9yNyIsICJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwgIl9zdGVwNyIsICJmdW5jIiwgIndpa2kiLCAibnVtYmVyT2ZBY3Rpb25zTGVmdCIsICJuYnJPZkNoZWNrcG9pbnRzTGVmdCIsICJhY3Rpb25Db21wbGV0ZWQiLCAibm90aWNlIiwgInN0YXR1cyIsICJyZWRpcmVjdCIsICJmb2xsb3dSZWRpcmVjdCIsICJzZXRUaW1lb3V0IiwgImxvY2F0aW9uIiwgInRpbWVPdXQiLCAid3BBY3Rpb25Db21wbGV0ZWRUaW1lT3V0IiwgImFkZENoZWNrcG9pbnQiLCAicmVtb3ZlQ2hlY2twb2ludCIsICJhcGkiLCAiY3VycmVudEFjdGlvbiIsICJxdWVyeSIsICJvblN1Y2Nlc3MiLCAic3RhdHVzRWxlbWVudCIsICJvbkVycm9yIiwgIl90aGlzJHF1ZXJ5IiwgImFzc2VydCIsICJlcnJvcmZvcm1hdCIsICJ1c2VsYW5nIiwgImVycm9ybGFuZyIsICJlcnJvcnN1c2Vsb2NhbCIsICJzZXRTdGF0dXNFbGVtZW50IiwgInN0YXRlbGVtIiwgImZvcm1hdHZlcnNpb24iLCAiZXJyb3IiLCAiYWN0aW9uIiwgInRhZ3MiLCAibW9yZWJpdHNXaWtpQ2hhbmdlVGFnIiwgInBhcmVudCIsICJyZXNwb25zZSIsICJyZXNwb25zZVhNTCIsICJzdGF0dXNUZXh0IiwgImVycm9yQ29kZSIsICJlcnJvclRleHQiLCAiYmFkdG9rZW5SZXRyeSIsICJzZXRQYXJlbnQiLCAicG9zdCIsICJjYWxsZXJBamF4UGFyYW1ldGVycyIsICJxdWVyeVN0cmluZ0FyciIsICJfaTUiLCAiX09iamVjdCRlbnRyaWVzMiIsICJlbmNvZGVVUklDb21wb25lbnQiLCAicXVlcnlTdHJpbmciLCAiYWpheHBhcmFtcyIsICJjb250ZXh0IiwgInVybCIsICJ3aWtpU2NyaXB0IiwgImRhdGFUeXBlIiwgImhlYWRlcnMiLCAibW9yZWJpdHNXaWtpQXBpVXNlckFnZW50IiwgImFqYXgiLCAidGhlbiIsICJvbkFQSXN1Y2Nlc3MiLCAiZXJyb3JzIiwgImNvZGUiLCAiaHRtbCIsICJlcSIsICJhdHRyIiwgInJldHVybkVycm9yIiwgImNhbGwiLCAiaW5mbyIsICJEZWZlcnJlZCIsICJyZXNvbHZlV2l0aCIsICJvbkFQSWZhaWx1cmUiLCAiZXJyb3JUaHJvd24iLCAiZ2V0VG9rZW4iLCAidG9rZW4iLCAicmVqZWN0V2l0aCIsICJnZXRTdGF0dXNFbGVtZW50IiwgImdldEVycm9yQ29kZSIsICJnZXRFcnJvclRleHQiLCAiZ2V0WE1MIiwgImdldFJlc3BvbnNlIiwgImdldENhY2hlZEpzb24iLCAicHJvcCIsICJ0aXRsZXMiLCAicnZzbG90cyIsICJydnByb3AiLCAic21heGFnZSIsICJtYXhhZ2UiLCAiYXBpb2JqIiwgInVubGluayIsICJ3aWtpdGV4dCIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJKU09OIiwgInBhcnNlIiwgInNldEFwaVVzZXJBZ2VudCIsICJ1YSIsICJ0b2tlbkFwaSIsICJtZXRhIiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAicGFnZSIsICJjdHgiLCAicGFnZUV4aXN0cyIsICJlZGl0U3VtbWFyeSIsICJjaGFuZ2VUYWdzIiwgInRlc3RBY3Rpb25zIiwgImNhbGxiYWNrUGFyYW1ldGVycyIsICJwYWdlVGV4dCIsICJlZGl0TW9kZSIsICJhcHBlbmRUZXh0IiwgInByZXBlbmRUZXh0IiwgIm5ld1NlY3Rpb25UZXh0IiwgIm5ld1NlY3Rpb25UaXRsZSIsICJjcmVhdGVPcHRpb24iLCAibWlub3JFZGl0IiwgImJvdEVkaXQiLCAicGFnZVNlY3Rpb24iLCAibWF4Q29uZmxpY3RSZXRyaWVzIiwgIm1heFJldHJpZXMiLCAiZm9sbG93Q3Jvc3NOc1JlZGlyZWN0IiwgIndhdGNobGlzdE9wdGlvbiIsICJ3YXRjaGxpc3RFeHBpcnkiLCAiY3JlYXRvciIsICJ0aW1lc3RhbXAiLCAicmV2ZXJ0T2xkSUQiLCAibW92ZURlc3RpbmF0aW9uIiwgIm1vdmVUYWxrUGFnZSIsICJtb3ZlU3VicGFnZXMiLCAibW92ZVN1cHByZXNzUmVkaXJlY3QiLCAicHJvdGVjdEVkaXQiLCAicHJvdGVjdE1vdmUiLCAicHJvdGVjdENyZWF0ZSIsICJwcm90ZWN0Q2FzY2FkZSIsICJsb29rdXBOb25SZWRpcmVjdENyZWF0b3IiLCAicGFnZUxvYWRlZCIsICJjc3JmVG9rZW4iLCAibG9hZFRpbWUiLCAibGFzdEVkaXRUaW1lIiwgInBhZ2VJRCIsICJjb250ZW50TW9kZWwiLCAicmV2ZXJ0Q3VySUQiLCAicmV2ZXJ0VXNlciIsICJ3YXRjaGVkIiwgImZ1bGx5UHJvdGVjdGVkIiwgInN1cHByZXNzUHJvdGVjdFdhcm5pbmciLCAiY29uZmxpY3RSZXRyaWVzIiwgInJldHJpZXMiLCAib25Mb2FkU3VjY2VzcyIsICJvbkxvYWRGYWlsdXJlIiwgIm9uU2F2ZVN1Y2Nlc3MiLCAib25TYXZlRmFpbHVyZSIsICJvbkxvb2t1cENyZWF0aW9uU3VjY2VzcyIsICJvbkxvb2t1cENyZWF0aW9uRmFpbHVyZSIsICJvbk1vdmVTdWNjZXNzIiwgIm9uTW92ZUZhaWx1cmUiLCAib25EZWxldGVTdWNjZXNzIiwgIm9uRGVsZXRlRmFpbHVyZSIsICJvblVuZGVsZXRlU3VjY2VzcyIsICJvblVuZGVsZXRlRmFpbHVyZSIsICJvblByb3RlY3RTdWNjZXNzIiwgIm9uUHJvdGVjdEZhaWx1cmUiLCAibG9hZFF1ZXJ5IiwgImxvYWRBcGkiLCAic2F2ZUFwaSIsICJsb29rdXBDcmVhdGlvbkFwaSIsICJtb3ZlQXBpIiwgIm1vdmVQcm9jZXNzQXBpIiwgInBhdHJvbEFwaSIsICJwYXRyb2xQcm9jZXNzQXBpIiwgImRlbGV0ZUFwaSIsICJkZWxldGVQcm9jZXNzQXBpIiwgInVuZGVsZXRlQXBpIiwgInVuZGVsZXRlUHJvY2Vzc0FwaSIsICJwcm90ZWN0QXBpIiwgInByb3RlY3RQcm9jZXNzQXBpIiwgImVtcHR5RnVuY3Rpb24iLCAibG9hZCIsICJvbkZhaWx1cmUiLCAiaW5wcm9wIiwgImludGVzdGFjdGlvbnMiLCAiY3VydGltZXN0YW1wIiwgInJ2bGltaXQiLCAicnZzdGFydGlkIiwgInJlZGlyZWN0cyIsICJydnNlY3Rpb24iLCAiZm5Mb2FkU3VjY2VzcyIsICJzYXZlIiwgImNhblVzZU13VXNlclRva2VuIiwgImZuQ2FuVXNlTXdVc2VyVG9rZW4iLCAiY29uZmlybSIsICJzdW1tYXJ5IiwgInVzZXIiLCAid2F0Y2hsaXN0IiwgImZuQXBwbHlXYXRjaGxpc3RFeHBpcnkiLCAid2F0Y2hsaXN0ZXhwaXJ5IiwgInNlY3Rpb24iLCAibWlub3IiLCAibm90bWlub3IiLCAiYm90IiwgImFwcGVuZHRleHQiLCAicHJlcGVuZHRleHQiLCAic2VjdGlvbnRpdGxlIiwgInVuZG8iLCAidW5kb2FmdGVyIiwgImJhc2V0aW1lc3RhbXAiLCAic3RhcnR0aW1lc3RhbXAiLCAiZm5TYXZlU3VjY2VzcyIsICJmblNhdmVFcnJvciIsICJmbkF1dG9TYXZlIiwgInByZXBlbmQiLCAibmV3U2VjdGlvbiIsICJnZXRQYWdlTmFtZSIsICJnZXRQYWdlVGV4dCIsICJzZXRQYWdlVGV4dCIsICJzZXRBcHBlbmRUZXh0IiwgInNldFByZXBlbmRUZXh0IiwgInNldE5ld1NlY3Rpb25UZXh0IiwgInNldE5ld1NlY3Rpb25UaXRsZSIsICJzZXRFZGl0U3VtbWFyeSIsICJzZXRDaGFuZ2VUYWdzIiwgInNldENyZWF0ZU9wdGlvbiIsICJzZXRNaW5vckVkaXQiLCAic2V0Qm90RWRpdCIsICJzZXRQYWdlU2VjdGlvbiIsICJzZXRNYXhDb25mbGljdFJldHJpZXMiLCAic2V0TWF4UmV0cmllcyIsICJzZXRXYXRjaGxpc3QiLCAic2V0V2F0Y2hsaXN0RXhwaXJ5IiwgInNldFdhdGNobGlzdEZyb21QcmVmZXJlbmNlcyIsICJzZXRGb2xsb3dSZWRpcmVjdCIsICJzZXRMb29rdXBOb25SZWRpcmVjdENyZWF0b3IiLCAiZmxhZyIsICJzZXRNb3ZlRGVzdGluYXRpb24iLCAiZGVzdGluYXRpb24iLCAic2V0TW92ZVRhbGtQYWdlIiwgInNldE1vdmVTdWJwYWdlcyIsICJzZXRNb3ZlU3VwcHJlc3NSZWRpcmVjdCIsICJzZXRFZGl0UHJvdGVjdGlvbiIsICJzZXRNb3ZlUHJvdGVjdGlvbiIsICJzZXRDcmVhdGVQcm90ZWN0aW9uIiwgInNldENhc2NhZGluZ1Byb3RlY3Rpb24iLCAic2V0T2xkSUQiLCAib2xkSUQiLCAiZ2V0Q3VycmVudElEIiwgImdldFJldmlzaW9uVXNlciIsICJnZXRMYXN0RWRpdFRpbWUiLCAic2V0Q2FsbGJhY2tQYXJhbWV0ZXJzIiwgImdldENhbGxiYWNrUGFyYW1ldGVycyIsICJleGlzdHMiLCAiZ2V0UGFnZUlEIiwgImdldENvbnRlbnRNb2RlbCIsICJnZXRXYXRjaGVkIiwgImdldExvYWRUaW1lIiwgImdldENyZWF0b3IiLCAiZ2V0Q3JlYXRpb25UaW1lc3RhbXAiLCAiY2FuRWRpdCIsICJsb29rdXBDcmVhdGlvbiIsICJydmRpciIsICJmbkxvb2t1cENyZWF0aW9uU3VjY2VzcyIsICJyZXZlcnQiLCAibW92ZSIsICJmblByZWZsaWdodENoZWNrcyIsICJmblByb2Nlc3NNb3ZlIiwgImZuTmVlZFRva2VuSW5mb1F1ZXJ5IiwgInBhdHJvbCIsICIkYm9keSIsICJwYXRyb2xocmVmIiwgInJjaWQiLCAiZ2V0UGFyYW1WYWx1ZSIsICJmblByb2Nlc3NQYXRyb2wiLCAicGF0cm9sUXVlcnkiLCAicmNwcm9wIiwgInJjdGl0bGUiLCAicmNsaW1pdCIsICJkZWxldGVQYWdlIiwgImZuUHJvY2Vzc0RlbGV0ZSIsICJ1bmRlbGV0ZVBhZ2UiLCAiZm5Qcm9jZXNzVW5kZWxldGUiLCAicHJvdGVjdCIsICJmblByb2Nlc3NQcm90ZWN0IiwgImdldFByZWZpeGVkVGV4dCIsICJlZGl0UmVzdHJpY3Rpb24iLCAicGFnZW9iaiIsICJmbkNoZWNrUGFnZU5hbWUiLCAicmV2IiwgIm1pc3NpbmciLCAicGFnZWlkIiwgImNvbnRlbnRtb2RlbCIsICJlZGl0UHJvdCIsICJwcm90ZWN0aW9uIiwgInByIiwgInBvcCIsICJsYXN0cmV2aWQiLCAidGVzdGFjdGlvbnMiLCAiYWN0aW9ucyIsICJfaTYiLCAiX09iamVjdCRrZXlzIiwgInJldmlkIiwgInVzZXJoaWRkZW4iLCAiaW52YWxpZCIsICJyZXNvbHZlZE5hbWUiLCAib3JpZ05zIiwgIm5hbWVzcGFjZSIsICJuZXdOcyIsICJuZXdFeHBpcnkiLCAicmVsIiwgImVkaXQiLCAibGluayIsICJjYXB0Y2hhIiwgInB1cmdlUXVlcnkiLCAicHVyZ2VBcGkiLCAic2xlZXAiLCAiZXJyb3JEYXRhIiwgImFidXNlZmlsdGVyIiwgImRlc2NyaXB0aW9uIiwgInNwYW0iLCAic3BhbWJsYWNrbGlzdCIsICJtYXRjaGVzIiwgImlzVGV4dFJlZGlyZWN0IiwgInNvbWUiLCAidGFnIiwgImZuTG9va3VwTm9uUmVkaXJlY3RDcmVhdG9yIiwgInJldnMiLCAiX2l0ZXJhdG9yOCIsICJfc3RlcDgiLCAiZm5Qcm9jZXNzQ2hlY2tzIiwgImFjdGlvbk1pc3NpbmciLCAicHJvdGVjdE1pc3NpbmciLCAic2FsdE1pc3NpbmciLCAiZWRpdHByb3QiLCAicGFnZVRpdGxlIiwgInRvIiwgIm1vdmV0YWxrIiwgIm1vdmVzdWJwYWdlcyIsICJub3JlZGlyZWN0IiwgInJlY2VudGNoYW5nZXMiLCAidW5wYXRyb2xsZWQiLCAicGF0cm9sU3RhdCIsICJmblByb2Nlc3NEZWxldGVFcnJvciIsICJmblByb2Nlc3NVbmRlbGV0ZUVycm9yIiwgInBycyIsICJtb3ZlcHJvdCIsICJjcmVhdGVwcm90IiwgIl9pdGVyYXRvcjkiLCAiX3N0ZXA5IiwgInNvdXJjZSIsICJjYXNjYWRlIiwgInByb3RlY3Rpb25zIiwgImV4cGlyeXMiLCAibWlsbGlzZWNvbmRzIiwgImRlZmVycmVkIiwgInJlc29sdmUiLCAicHJldmlldyIsICJwcmV2aWV3Ym94IiwgImFkZENsYXNzIiwgImhpZGUiLCAiYmVnaW5SZW5kZXIiLCAic2VjdGlvblRpdGxlIiwgInNob3ciLCAic3RhdHVzc3BhbiIsICJpbml0IiwgInBzdCIsICJkaXNhYmxlbGltaXRyZXBvcnQiLCAiZGlzYWJsZWVkaXRzZWN0aW9uIiwgInJlbmRlckFwaSIsICJmblJlbmRlclN1Y2Nlc3MiLCAiaW5uZXJIVE1MIiwgImxvYWRlciIsICJtb2R1bGVzdHlsZXMiLCAibW9kdWxlcyIsICJjbG9zZVByZXZpZXciLCAiZW1wdHkiLCAicGFyc2VUZW1wbGF0ZSIsICJjb3VudCIsICJ1bm5hbWVkIiwgImVxdWFscyIsICJwYXJhbWV0ZXJzIiwgImtleSIsICJmaW5kUGFyYW0iLCAiZmluYWwiLCAidGVzdDMiLCAidGVzdDIiLCAiY2hhckF0IiwgInJlbW92ZUxpbmsiLCAibGlua1RhcmdldCIsICJtd1RpdGxlIiwgIm5ld0Zyb21UZXh0IiwgIm5hbWVzcGFjZUlEIiwgImdldE5hbWVzcGFjZUlkIiwgImdldE1haW5UZXh0IiwgImxpbmtSZWdleFN0cmluZyIsICJpc0ZpbGVPckNhdGVnb3J5IiwgImNvbG9uIiwgInNpbXBsZUxpbmtSZWdleCIsICJwaXBlZExpbmtSZWdleCIsICJjb21tZW50T3V0SW1hZ2UiLCAiaW1hZ2UiLCAiaW1hZ2VSZWdleFN0cmluZyIsICJsaW5rc1JlZ2V4IiwgImFsbExpbmtzIiwgIl9pdGVyYXRvcjEwIiwgIl9zdGVwMTAiLCAiYWxsTGluayIsICJnYWxsZXJ5SW1hZ2VSZWdleCIsICJmcmVlSW1hZ2VSZWdleCIsICJhZGRUb0ltYWdlQ29tbWVudCIsICJfaXRlcmF0b3IxMSIsICJfc3RlcDExIiwgImdhbGxlcnlSZWdleCIsICJuZXd0ZXh0IiwgInJlbW92ZVRlbXBsYXRlIiwgInRlbXBsYXRlIiwgInRlbXBsYXRlUmVnZXhTdHJpbmciLCAiYWxsVGVtcGxhdGVzIiwgIl9pdGVyYXRvcjEyIiwgIl9zdGVwMTIiLCAiYWxsVGVtcGxhdGUiLCAiaW5zZXJ0QWZ0ZXJUZW1wbGF0ZXMiLCAiZmxhZ3MiLCAicHJlUmVnZXgiLCAiZ2V0VGV4dCIsICJ1c2Vyc3BhY2VMb2dnZXIiLCAibG9nUGFnZU5hbWUiLCAiaW5pdGlhbFRleHQiLCAiaGVhZGVyTGV2ZWwiLCAibG9nVGV4dCIsICJzdW1tYXJ5VGV4dCIsICJkZWYiLCAicmVqZWN0IiwgInN0YXQiLCAidGV4dFJhdyIsICJnZW5lcmF0ZSIsICJ1cGRhdGUiLCAiRWxlbWVudCIsICJoYXNDaGlsZE5vZGVzIiwgImVycm9yRXZlbnQiLCAiaGFuZGxlciIsICJzdGF0UmF3IiwgImxpbmtlZCIsICJwcmludFVzZXJUZXh0IiwgImNvbW1lbnRzIiwgIm1lc3NhZ2UiLCAicCIsICJkaXYiLCAibWFyZ2luVG9wIiwgIndoaXRlU3BhY2UiLCAiaHRtbE5vZGUiLCAiY29sb3IiLCAialF1ZXJ5U2VsZWN0b3IiLCAialF1ZXJ5Q29udGV4dCIsICJsYXN0Q2hlY2tib3giLCAiY2xpY2tIYW5kbGVyIiwgImNsaWNrSGFuZGxlcjIiLCAidGhpc0NiIiwgInNoaWZ0S2V5IiwgImNicyIsICJpbmRleCIsICJsYXN0SW5kZXgiLCAiZW5kU3RhdGUiLCAiZmluaXNoIiwgImNsaWNrIiwgIm9uIiwgImJhdGNoT3BlcmF0aW9uIiwgInBhZ2VMaXN0IiwgImNodW5rU2l6ZSIsICJwcmVzZXJ2ZUluZGl2aWR1YWxTdGF0dXNMaW5lcyIsICJ3b3JrZXIiLCAicG9zdEZpbmlzaCIsICJjb3VudFN0YXJ0ZWQiLCAiY291bnRGaW5pc2hlZCIsICJjb3VudEZpbmlzaGVkU3VjY2VzcyIsICJjdXJyZW50Q2h1bmtJbmRleCIsICJwYWdlQ2h1bmtzIiwgInJ1bm5pbmciLCAic2V0UGFnZUxpc3QiLCAic2V0T3B0aW9uIiwgIm9wdGlvbk5hbWUiLCAib3B0aW9uVmFsdWUiLCAicnVuIiwgInRvdGFsIiwgImZuU3RhcnROZXdDaHVuayIsICJ3b3JrZXJTdWNjZXNzIiwgImFyZyIsICJmbkRvbmVPbmUiLCAid29ya2VyRmFpbHVyZSIsICJ0aGlzUHJveHkiLCAiX2l0ZXJhdG9yMTMiLCAiX3N0ZXAxMyIsICJwcm9ncmVzcyIsICJyb3VuZCIsICJmbG9vciIsICJzdGF0dXNTdHJpbmciLCAic2ltcGxlV2luZG93IiwgIndpZHRoIiwgImhlaWdodCIsICJkaWFsb2ciLCAiYXV0b09wZW4iLCAiYnV0dG9ucyIsICJQbGFjZWhvbGRlciBidXR0b24iLCAiZGlhbG9nQ2xhc3MiLCAiaW5uZXJXaWR0aCIsICJjbG9zZSIsICJyZXNpemVTdGFydCIsICJzY3JvbGxib3giLCAibWF4SGVpZ2h0IiwgInJlc2l6ZVN0b3AiLCAicmVzaXplIiwgIiR3aWRnZXQiLCAiZWFjaCIsICJidXR0b25zcGFuIiwgImxpbmtzc3BhbiIsICJyZXNpemFibGUiLCAiaGFzRm9vdGVyTGlua3MiLCAic2NyaXB0TmFtZSIsICJwcmV2ZW50RGVmYXVsdCIsICJkaXNwbGF5IiwgInNjcmlwdG5hbWVzcGFuIiwgInNldHVwVG9vbHRpcHMiLCAicGciLCAiZGlmZiIsICJyYW5TZXR1cFRvb2x0aXBzQWxyZWFkeSIsICJzZXRIZWlnaHQiLCAic2V0VGl0bGUiLCAic2V0U2NyaXB0TmFtZSIsICJzZXRXaWR0aCIsICJnZXRDb21wdXRlZFN0eWxlIiwgImlubmVySGVpZ2h0IiwgInNldENvbnRlbnQiLCAicHVyZ2VDb250ZW50IiwgImFkZENvbnRlbnQiLCAiYnV0dG9uIiwgImFkZEZvb3RlckxpbmsiLCAid2lraVBhZ2UiLCAicHJlcCIsICIkZm9vdGVybGlua3MiLCAiYnVsbGV0IiwgInNldE1vZGFsaXR5IiwgIm1vZGFsIiwgInNldEJ1dHRvbnNFbmFibGVkIiwgImVuYWJsZWQiLCAialF1ZXJ5Il0KfQo=
