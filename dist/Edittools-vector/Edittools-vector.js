/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Edittools-vector.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Edittools-vector}
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

// dist/Edittools-vector/Edittools-vector.js
//! src/Edittools-vector/images/Toolbaricon_bolditalic_A.png
var Toolbaricon_bolditalic_A_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAN1wAADdcBQiibeAAAAAd0SU1FB9oJCAQlOp4jfv4AAAINSURBVDjL7ZW9a1NhFMZ/703uh/eGSCAk9N4ktIWWECyEdigUiTR/QAfBJUsmcXFzcOgkgqCjq5NL/wUnK0QrXRQMVITi5VpKpZFgAvlouC/3dbFQJdUY0anPdjjv+XHe5xkOXOhPtba29u/guVzufq1WU/V6Xbmu++lXb7VJoZ7nJfL5/N1Op6OklEgptb8Cl0olAEzTfOr7vt5sNmm321iW5QBianAqlWJmZuZKNpu93m63N4HPSilisVjCMIzpwTs7O6TT6S3f96WU8kEYhj0pJYAupUxODc7n83XTNJeOj4/vAIRh+DWKIuLxOFEUXZ0a7HnewyAIPgKPT8EAjuMArJ83F//Ntk90Xc+6rvu2Wq3eA2g2m55hGCQSCUzTrIxGo7GzY81XSpFMJrXl5eXh/v6+YZomURShlCKKIhzHUbOzs2J3d1d1u11t4o2FECwsLGy3Wi3j6OioDLw7067Oz88/tywLy7JEt9u1gcFEHhcKhaW5ublrQRBs/wQFeD8YDFBKYds2wOVKpTJZeJlM5pWmaQghbgOsrq6ebX8RQiCEwLZtUqmU12g0WFxc/IERO1vour65sbHxYjgcXur3+5TL5VsnJyeZvb29Z4BWLBaDlZWVR/1+Xzs4OCAMQ4rF4s1erycPDw9fnhueEGJdKeWe+qyUAngDfPj+uxtjchHAa8C/uAH/V98AGqO9LSroGQYAAAAASUVORK5CYII=";
//! src/Edittools-vector/images/Chinese_conversion.png
var Chinese_conversion_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAEFklEQVRIia2VXYhUZRjHf887p3XWVdcKStu0zTaji2xNWUi9METrQjDIkazds+OZ/UroRgi8ylkiVCzCPlTW3XFmFiXSUCpQFCWJMFj3I5IiCDPxQszvtWHdOfM+XcyZj/Vj26L/1fue53n////7P4fnQIDm5tjiaDQa5n+GADSua11krJ5EuCzK5kzmxmfhqupVBnn9nwickO3o6em5et86gFH9CMEBZqiwvbKq+k0RjqlqZDxyhb3jkRcFwhVmxcio3QhsACoE+kBGQMfnD+mWwsaNxjxU1gIIdlsqlTiaX5ehyfMWijWd4QoTuXbt2u3KKdOPodqg8HNvsrvhXiputOVjYBFQA8wItM+BXBHVTQLged7URCIxfNfh5th3iCwBrOacmb29uy6NqbutczH6C2DuJS5Ks3Hdttm+DV1woy2HXK9tydgOOR6sjDH+K3cxGLtElLdEaUf0cKmgOxRdk3X0pIOxO4FpwCqsXeU2txxARzvS6fQVgxyy6CYANfoakC6576gBf6cKFXnOUtqK6etN7t4PYETtduCHkmueDYfDNwGSyd1DwK8BwUrXbZ1bcplrAAZKpPQJsl+Q/SH0XPGSqVTiaDrZ/aKoNKJcxpiOrq6ubCklTRV6MWzIu3cfxuhmYE7JF7UWXWDRBTnocaMtx/OHAqRSu/fmplU+5eCfLY9Zc9kuIJPf6OK8VMXbwCNAVVnrZIEHBWoF5oDOGiMAEBrOrPatOdUYi9UVnqXT6SsqdAcuP4msXz8FaAfZivJVWfCHQbYC18s5iwJNTU1VIO8Bs02OY0vjcaeY9u0H4ihnRPx0ZSbbBswA3YKwtsgkrAbdAjxULlAkkdCkd4DH8m7k8LfxuF+oZbPhETPJbz//RK0/6/cLN0RkYxDZ80UR5QAip4sXUm5FIpGQAESjHbUW/wxQhXLLiP90Mpm8CNAYi9WZnHzqGBvJ5swaCeKaCAz+TJMX97sovDDhw2QyebGtra26eV1rp8nJkKr2JRKJYYSXJkpeTKYpGosI8kWwv+QYW5e18qogOwPRTEhytapOjYWXxxxGlyksDyLqRuS38rrCH06I3NcWZx/wBkhnIpEY9jzvkJ+TdxHqVOjes2fPn260NRK8xHKCcrWWO6evwInQ0NCQ/+PQwMF59S9cr6wwu/r7++3g4OBoff38syAZ36HzzMDAX/PmL5iMMIrQD1jJT8+C0BGBKUAVqt+rkSMI/YKcGjOux0Oj5z1jVJajshJYQWHUK9+okQ9E9QSlz/4n4HODsy80UYH65xY2ACmEuQH5KLDt/JOPt0+/enOqIrdFqAGqgUeBZaienvANANxoy/soaxD9EhvakU53nb+jRVzXW4qY9QhT08nuu0f8eIjH4/f8sdwH/8r8f8bfh7GPCR5C3YgAAAAASUVORK5CYII=";
//! src/Edittools-vector/Edittools-vector.ts
var import_ext_gadget = require("ext.gadget.Edittools-customizeToolbar");
(0, import_ext_gadget.customizeToolbar)(function() {
  const self = this;
  self.wikiEditor("addToToolbar", {
    section: "main",
    group: "insert",
    tools: {
      category: {
        label: "分类",
        type: "button",
        oouiIcon: "tag",
        action: {
          type: "encapsulate",
          options: {
            pre: "[[Category:",
            post: "]]"
          }
        }
      }
    }
  });
  self.wikiEditor("addToToolbar", {
    section: "advanced",
    group: "format",
    tools: {
      bolditalic: {
        label: "粗斜体",
        type: "button",
        icon: Toolbaricon_bolditalic_A_default,
        action: {
          type: "encapsulate",
          options: {
            pre: "'''''",
            periMsg: "粗斜体文字",
            post: "'''''"
          }
        }
      },
      strikethrough: {
        label: "删除线",
        type: "button",
        oouiIcon: "strikethrough",
        action: {
          type: "encapsulate",
          options: {
            pre: "<s>",
            post: "</s>"
          }
        }
      },
      underline: {
        label: "下划线",
        type: "button",
        oouiIcon: "underline",
        action: {
          type: "encapsulate",
          options: {
            pre: "<u>",
            post: "</u>"
          }
        }
      },
      quote: {
        label: "块引用",
        type: "button",
        oouiIcon: "quotes",
        action: {
          type: "encapsulate",
          options: {
            pre: "<block".concat("quote>"),
            post: "</block".concat("quote>")
          }
        }
      },
      "justify-left": {
        label: "左对齐",
        type: "button",
        oouiIcon: "alignLeft",
        action: {
          type: "encapsulate",
          options: {
            pre: '<div style="text-align:left">',
            post: "</div>"
          }
        }
      },
      "justify-center": {
        label: "居中",
        type: "button",
        oouiIcon: "alignCenter",
        action: {
          type: "encapsulate",
          options: {
            pre: '<div style="text-align: center;">',
            post: "</div>"
          }
        }
      },
      "justify-right": {
        label: "右对齐",
        type: "button",
        oouiIcon: "alignRight",
        action: {
          type: "encapsulate",
          options: {
            pre: '<div style="text-align: right;">',
            post: "</div>"
          }
        }
      },
      source: {
        label: "源代码",
        type: "button",
        oouiIcon: "markup",
        action: {
          type: "encapsulate",
          options: {
            pre: '<syntaxhighlight lang="text">',
            post: "</syntaxhighlight>"
          }
        }
      }
    }
  });
  self.wikiEditor("addToToolbar", {
    section: "advanced",
    group: "insert",
    tools: {
      math: {
        label: "数学公式",
        type: "button",
        oouiIcon: "mathematics",
        action: {
          type: "encapsulate",
          options: {
            pre: "<math>",
            periMsg: "插入数学公式",
            post: "</math>"
          }
        }
      },
      hidden: {
        label: "注释或隐藏文字",
        type: "button",
        oouiIcon: "notice",
        action: {
          type: "encapsulate",
          options: {
            pre: "<!-- ",
            post: " -->"
          }
        }
      },
      hline: {
        label: "水平线",
        type: "button",
        oouiIcon: "subtract",
        action: {
          type: "encapsulate",
          options: {
            pre: "----",
            ownline: true
          }
        }
      },
      "hans-hant": {
        label: "繁简转换",
        type: "button",
        icon: Chinese_conversion_default,
        action: {
          type: "encapsulate",
          options: {
            pre: "-{",
            periMsg: "转换文字",
            post: "}-"
          }
        }
      },
      references: {
        label: "参考文献区",
        type: "button",
        oouiIcon: "references",
        action: {
          type: "encapsulate",
          options: {
            pre: "\n== 参考文献 ==\n{{reflist}}\n"
          }
        }
      }
    }
  });
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXR0b29scy12ZWN0b3IvRWRpdHRvb2xzLXZlY3Rvci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IGJvbGRJdGFsaWNBIGZyb20gJy4vaW1hZ2VzL1Rvb2xiYXJpY29uX2JvbGRpdGFsaWNfQS5wbmcnO1xuaW1wb3J0IGNoaW5lc2VDb252ZXJzaW9uIGZyb20gJy4vaW1hZ2VzL0NoaW5lc2VfY29udmVyc2lvbi5wbmcnO1xuaW1wb3J0IHtjdXN0b21pemVUb29sYmFyfSBmcm9tICdleHQuZ2FkZ2V0LkVkaXR0b29scy1jdXN0b21pemVUb29sYmFyJztcblxuY3VzdG9taXplVG9vbGJhcihmdW5jdGlvbiAodGhpczogSlF1ZXJ5KTogdm9pZCB7XG5cdGNvbnN0IHNlbGYgPSB0aGlzIGFzIEpRdWVyeSAmIHt3aWtpRWRpdG9yOiAobWV0aG9kOiBzdHJpbmcsIG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA9PiB2b2lkfTtcblxuXHRzZWxmLndpa2lFZGl0b3IoJ2FkZFRvVG9vbGJhcicsIHtcblx0XHRzZWN0aW9uOiAnbWFpbicsXG5cdFx0Z3JvdXA6ICdpbnNlcnQnLFxuXHRcdHRvb2xzOiB7XG5cdFx0XHRjYXRlZ29yeToge1xuXHRcdFx0XHRsYWJlbDogJ+WIhuexuycsXG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRvb3VpSWNvbjogJ3RhZycsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnW1tDYXRlZ29yeTonLFxuXHRcdFx0XHRcdFx0cG9zdDogJ11dJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcblx0c2VsZi53aWtpRWRpdG9yKCdhZGRUb1Rvb2xiYXInLCB7XG5cdFx0c2VjdGlvbjogJ2FkdmFuY2VkJyxcblx0XHRncm91cDogJ2Zvcm1hdCcsXG5cdFx0dG9vbHM6IHtcblx0XHRcdGJvbGRpdGFsaWM6IHtcblx0XHRcdFx0bGFiZWw6ICfnspfmlpzkvZMnLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0aWNvbjogYm9sZEl0YWxpY0EgYXMgc3RyaW5nLFxuXHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdHByZTogXCInJycnJ1wiLFxuXHRcdFx0XHRcdFx0cGVyaU1zZzogJ+eyl+aWnOS9k+aWh+WtlycsXG5cdFx0XHRcdFx0XHRwb3N0OiBcIicnJycnXCIsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRzdHJpa2V0aHJvdWdoOiB7XG5cdFx0XHRcdGxhYmVsOiAn5Yig6Zmk57q/Jyxcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdG9vdWlJY29uOiAnc3RyaWtldGhyb3VnaCcsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnPHM+Jyxcblx0XHRcdFx0XHRcdHBvc3Q6ICc8L3M+Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHVuZGVybGluZToge1xuXHRcdFx0XHRsYWJlbDogJ+S4i+WIkue6vycsXG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRvb3VpSWNvbjogJ3VuZGVybGluZScsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnPHU+Jyxcblx0XHRcdFx0XHRcdHBvc3Q6ICc8L3U+Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHF1b3RlOiB7XG5cdFx0XHRcdGxhYmVsOiAn5Z2X5byV55SoJyxcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdG9vdWlJY29uOiAncXVvdGVzJyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6ICc8YmxvY2snLmNvbmNhdCgncXVvdGU+JyksXG5cdFx0XHRcdFx0XHRwb3N0OiAnPC9ibG9jaycuY29uY2F0KCdxdW90ZT4nKSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdCdqdXN0aWZ5LWxlZnQnOiB7XG5cdFx0XHRcdGxhYmVsOiAn5bem5a+56b2QJyxcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdG9vdWlJY29uOiAnYWxpZ25MZWZ0Jyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6ICc8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjpsZWZ0XCI+Jyxcblx0XHRcdFx0XHRcdHBvc3Q6ICc8L2Rpdj4nLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0J2p1c3RpZnktY2VudGVyJzoge1xuXHRcdFx0XHRsYWJlbDogJ+WxheS4rScsXG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRvb3VpSWNvbjogJ2FsaWduQ2VudGVyJyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6ICc8ZGl2IHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyO1wiPicsXG5cdFx0XHRcdFx0XHRwb3N0OiAnPC9kaXY+Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdCdqdXN0aWZ5LXJpZ2h0Jzoge1xuXHRcdFx0XHRsYWJlbDogJ+WPs+Wvuem9kCcsXG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRvb3VpSWNvbjogJ2FsaWduUmlnaHQnLFxuXHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdHByZTogJzxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOiByaWdodDtcIj4nLFxuXHRcdFx0XHRcdFx0cG9zdDogJzwvZGl2PicsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0XHRzb3VyY2U6IHtcblx0XHRcdFx0bGFiZWw6ICfmupDku6PnoIEnLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0b291aUljb246ICdtYXJrdXAnLFxuXHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdHByZTogJzxzeW50YXhoaWdobGlnaHQgbGFuZz1cInRleHRcIj4nLFxuXHRcdFx0XHRcdFx0cG9zdDogJzwvc3ludGF4aGlnaGxpZ2h0PicsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cdHNlbGYud2lraUVkaXRvcignYWRkVG9Ub29sYmFyJywge1xuXHRcdHNlY3Rpb246ICdhZHZhbmNlZCcsXG5cdFx0Z3JvdXA6ICdpbnNlcnQnLFxuXHRcdHRvb2xzOiB7XG5cdFx0XHRtYXRoOiB7XG5cdFx0XHRcdGxhYmVsOiAn5pWw5a2m5YWs5byPJyxcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdG9vdWlJY29uOiAnbWF0aGVtYXRpY3MnLFxuXHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdHByZTogJzxtYXRoPicsXG5cdFx0XHRcdFx0XHRwZXJpTXNnOiAn5o+S5YWl5pWw5a2m5YWs5byPJyxcblx0XHRcdFx0XHRcdHBvc3Q6ICc8L21hdGg+Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdGhpZGRlbjoge1xuXHRcdFx0XHRsYWJlbDogJ+azqOmHiuaIlumakOiXj+aWh+WtlycsXG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRvb3VpSWNvbjogJ25vdGljZScsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnPCEtLSAnLFxuXHRcdFx0XHRcdFx0cG9zdDogJyAtLT4nLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0aGxpbmU6IHtcblx0XHRcdFx0bGFiZWw6ICfmsLTlubPnur8nLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0b291aUljb246ICdzdWJ0cmFjdCcsXG5cdFx0XHRcdGFjdGlvbjoge1xuXHRcdFx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdFx0cHJlOiAnLS0tLScsXG5cdFx0XHRcdFx0XHRvd25saW5lOiB0cnVlLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9LFxuXHRcdFx0J2hhbnMtaGFudCc6IHtcblx0XHRcdFx0bGFiZWw6ICfnuYHnroDovazmjaInLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0aWNvbjogY2hpbmVzZUNvbnZlcnNpb24gYXMgc3RyaW5nLFxuXHRcdFx0XHRhY3Rpb246IHtcblx0XHRcdFx0XHR0eXBlOiAnZW5jYXBzdWxhdGUnLFxuXHRcdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRcdHByZTogJy17Jyxcblx0XHRcdFx0XHRcdHBlcmlNc2c6ICfovazmjaLmloflrZcnLFxuXHRcdFx0XHRcdFx0cG9zdDogJ30tJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHRcdHJlZmVyZW5jZXM6IHtcblx0XHRcdFx0bGFiZWw6ICflj4LogIPmlofnjK7ljLonLFxuXHRcdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdFx0b291aUljb246ICdyZWZlcmVuY2VzJyxcblx0XHRcdFx0YWN0aW9uOiB7XG5cdFx0XHRcdFx0dHlwZTogJ2VuY2Fwc3VsYXRlJyxcblx0XHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0XHRwcmU6ICdcXG49PSDlj4LogIPmlofnjK4gPT1cXG57e3JlZmxpc3R9fVxcbicsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFBQSxvQkFBK0JDLFFBQUEsdUNBQUE7Q0FBQSxHQUUvQkQsa0JBQUFFLGtCQUFpQixXQUE4QjtBQUM5QyxRQUFNQyxPQUFPO0FBRWJBLE9BQUtDLFdBQVcsZ0JBQWdCO0lBQy9CQyxTQUFTO0lBQ1RDLE9BQU87SUFDUEMsT0FBTztNQUNOQyxVQUFVO1FBQ1RDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7VUFDUEYsTUFBTTtVQUNORyxTQUFTO1lBQ1JDLEtBQUs7WUFDTEMsTUFBTTtVQUNQO1FBQ0Q7TUFDRDtJQUNEO0VBQ0QsQ0FBQztBQUNEWixPQUFLQyxXQUFXLGdCQUFnQjtJQUMvQkMsU0FBUztJQUNUQyxPQUFPO0lBQ1BDLE9BQU87TUFDTlMsWUFBWTtRQUNYUCxPQUFPO1FBQ1BDLE1BQU07UUFDTk8sTUFBTUM7UUFDTk4sUUFBUTtVQUNQRixNQUFNO1VBQ05HLFNBQVM7WUFDUkMsS0FBSztZQUNMSyxTQUFTO1lBQ1RKLE1BQU07VUFDUDtRQUNEO01BQ0Q7TUFDQUssZUFBZTtRQUNkWCxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxRQUFRO1VBQ1BGLE1BQU07VUFDTkcsU0FBUztZQUNSQyxLQUFLO1lBQ0xDLE1BQU07VUFDUDtRQUNEO01BQ0Q7TUFDQU0sV0FBVztRQUNWWixPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxRQUFRO1VBQ1BGLE1BQU07VUFDTkcsU0FBUztZQUNSQyxLQUFLO1lBQ0xDLE1BQU07VUFDUDtRQUNEO01BQ0Q7TUFDQU8sT0FBTztRQUNOYixPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxRQUFRO1VBQ1BGLE1BQU07VUFDTkcsU0FBUztZQUNSQyxLQUFLLFNBQVNTLE9BQU8sUUFBUTtZQUM3QlIsTUFBTSxVQUFVUSxPQUFPLFFBQVE7VUFDaEM7UUFDRDtNQUNEO01BQ0EsZ0JBQWdCO1FBQ2ZkLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFFBQVE7VUFDUEYsTUFBTTtVQUNORyxTQUFTO1lBQ1JDLEtBQUs7WUFDTEMsTUFBTTtVQUNQO1FBQ0Q7TUFDRDtNQUNBLGtCQUFrQjtRQUNqQk4sT0FBTztRQUNQQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsUUFBUTtVQUNQRixNQUFNO1VBQ05HLFNBQVM7WUFDUkMsS0FBSztZQUNMQyxNQUFNO1VBQ1A7UUFDRDtNQUNEO01BQ0EsaUJBQWlCO1FBQ2hCTixPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxRQUFRO1VBQ1BGLE1BQU07VUFDTkcsU0FBUztZQUNSQyxLQUFLO1lBQ0xDLE1BQU07VUFDUDtRQUNEO01BQ0Q7TUFDQVMsUUFBUTtRQUNQZixPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxRQUFRO1VBQ1BGLE1BQU07VUFDTkcsU0FBUztZQUNSQyxLQUFLO1lBQ0xDLE1BQU07VUFDUDtRQUNEO01BQ0Q7SUFDRDtFQUNELENBQUM7QUFDRFosT0FBS0MsV0FBVyxnQkFBZ0I7SUFDL0JDLFNBQVM7SUFDVEMsT0FBTztJQUNQQyxPQUFPO01BQ05rQixNQUFNO1FBQ0xoQixPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxRQUFRO1VBQ1BGLE1BQU07VUFDTkcsU0FBUztZQUNSQyxLQUFLO1lBQ0xLLFNBQVM7WUFDVEosTUFBTTtVQUNQO1FBQ0Q7TUFDRDtNQUNBVyxRQUFRO1FBQ1BqQixPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxRQUFRO1VBQ1BGLE1BQU07VUFDTkcsU0FBUztZQUNSQyxLQUFLO1lBQ0xDLE1BQU07VUFDUDtRQUNEO01BQ0Q7TUFDQVksT0FBTztRQUNObEIsT0FBTztRQUNQQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsUUFBUTtVQUNQRixNQUFNO1VBQ05HLFNBQVM7WUFDUkMsS0FBSztZQUNMYyxTQUFTO1VBQ1Y7UUFDRDtNQUNEO01BQ0EsYUFBYTtRQUNabkIsT0FBTztRQUNQQyxNQUFNO1FBQ05PLE1BQU1ZO1FBQ05qQixRQUFRO1VBQ1BGLE1BQU07VUFDTkcsU0FBUztZQUNSQyxLQUFLO1lBQ0xLLFNBQVM7WUFDVEosTUFBTTtVQUNQO1FBQ0Q7TUFDRDtNQUNBZSxZQUFZO1FBQ1hyQixPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxRQUFRO1VBQ1BGLE1BQU07VUFDTkcsU0FBUztZQUNSQyxLQUFLO1VBQ047UUFDRDtNQUNEO0lBQ0Q7RUFDRCxDQUFDO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJjdXN0b21pemVUb29sYmFyIiwgInNlbGYiLCAid2lraUVkaXRvciIsICJzZWN0aW9uIiwgImdyb3VwIiwgInRvb2xzIiwgImNhdGVnb3J5IiwgImxhYmVsIiwgInR5cGUiLCAib291aUljb24iLCAiYWN0aW9uIiwgIm9wdGlvbnMiLCAicHJlIiwgInBvc3QiLCAiYm9sZGl0YWxpYyIsICJpY29uIiwgIlRvb2xiYXJpY29uX2JvbGRpdGFsaWNfQV9kZWZhdWx0IiwgInBlcmlNc2ciLCAic3RyaWtldGhyb3VnaCIsICJ1bmRlcmxpbmUiLCAicXVvdGUiLCAiY29uY2F0IiwgInNvdXJjZSIsICJtYXRoIiwgImhpZGRlbiIsICJobGluZSIsICJvd25saW5lIiwgIkNoaW5lc2VfY29udmVyc2lvbl9kZWZhdWx0IiwgInJlZmVyZW5jZXMiXQp9Cg==
