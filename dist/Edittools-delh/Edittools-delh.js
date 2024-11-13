/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Edittools-delh.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Edittools-delh}
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

// dist/Edittools-delh/Edittools-delh.js
//! src/Edittools-delh/modules/core.ts
var import_ext_gadget = require("ext.gadget.Edittools-customizeToolbar");
//! src/Edittools-delh/modules/getList.ts
var getVfdText = (code, comment) => {
  return {
    label: comment,
    action: {
      type: "encapsulate",
      options: {
        pre: "{{delh|".concat(code, "}}\n"),
        post: "\n----\n: ".concat(comment, "。--~~").concat("~~\n{", "{delf}}")
      }
    }
  };
};
var getList = (list) => {
  const object = {};
  for (var _i = 0, _Object$entries = Object.entries(list); _i < _Object$entries.length; _i++) {
    const [code, comment] = _Object$entries[_i];
    object[code] = getVfdText(code, comment);
  }
  return object;
};
//! src/Edittools-delh/modules/core.ts
var edittoolsDelh = () => {
  (0, import_ext_gadget.customizeToolbar)(function() {
    const self = this;
    self.wikiEditor("addToToolbar", {
      sections: {
        delh: {
          type: "toolbar",
          label: window.wgULS("结束讨论", "結束討論")
        }
      }
    });
    self.wikiEditor("addToToolbar", {
      section: "delh",
      groups: {
        vfd: {}
      }
    });
    self.wikiEditor("addToToolbar", {
      section: "delh",
      group: "vfd",
      tools: {
        invalid: {
          label: window.wgULS("请求无效", "請求無效"),
          type: "select",
          list: getList({
            ir: window.wgULS("请求无效", "請求無效"),
            rep: window.wgULS("重复提出，无效", "重複提出，無效"),
            ne: window.wgULS("目标页面或文件不存在，无效", "目標頁面或檔案不存在，無效"),
            nq: window.wgULS("提删者未取得提删资格，无效", "提刪者未取得提刪資格，無效")
          })
        },
        keep: {
          label: "保留",
          type: "select",
          list: getList({
            k: "保留",
            sk: "快速保留",
            tk: window.wgULS("暂时保留", "暫時保留"),
            rr: window.wgULS("请求理由消失", "請求理由消失"),
            dan: window.wgULS("删后重建", "刪後重建")
          })
        },
        del: {
          label: window.wgULS("删除", "刪除"),
          type: "select",
          list: getList({
            d: window.wgULS("删除", "刪除"),
            ifd: window.wgULS("图像因侵权被删", "圖像因侵權被刪")
          })
        },
        speedyDel: {
          label: window.wgULS("快速删除", "快速刪除"),
          type: "select",
          list: getList({
            sd: window.wgULS("快速删除", "快速刪除"),
            lssd: window.wgULS("无来源或版权资讯，快速删除", "無來源或版權資訊，快速刪除"),
            svg: window.wgULS("已改用SVG图形，删除", "已改用SVG圖形，刪除"),
            drep: window.wgULS("多次被删除，条目锁定", "多次被刪除，條目鎖定")
          })
        },
        others: {
          label: window.wgULS("其他处理方法", "其他處理方法"),
          type: "select",
          list: getList({
            c: window.wgULS("转交侵权", "轉交侵權"),
            r: window.wgULS("重定向", "重定向"),
            cr: window.wgULS("分类重定向", "分類重定向"),
            m: window.wgULS("移动", "移動"),
            merge: window.wgULS("并入", "併入"),
            nc: window.wgULS("无共识", "無共識")
          })
        }
      }
    });
  });
};
//! src/Edittools-delh/Edittools-delh.ts
var {
  wgPageName
} = mw.config.get();
if (/^有兽档案馆(?:[_ ]talk)?:存废讨论\//i.test(wgPageName)) {
  edittoolsDelh();
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0VkaXR0b29scy1kZWxoL21vZHVsZXMvY29yZS50cyIsICJzcmMvRWRpdHRvb2xzLWRlbGgvbW9kdWxlcy9nZXRMaXN0LnRzIiwgInNyYy9FZGl0dG9vbHMtZGVsaC9FZGl0dG9vbHMtZGVsaC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtjdXN0b21pemVUb29sYmFyfSBmcm9tICdleHQuZ2FkZ2V0LkVkaXR0b29scy1jdXN0b21pemVUb29sYmFyJztcbmltcG9ydCB7Z2V0TGlzdH0gZnJvbSAnLi9nZXRMaXN0JztcblxuY29uc3QgZWRpdHRvb2xzRGVsaCA9ICgpOiB2b2lkID0+IHtcblx0Y3VzdG9taXplVG9vbGJhcihmdW5jdGlvbiAodGhpczogSlF1ZXJ5KTogdm9pZCB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXMgYXMgSlF1ZXJ5ICYge3dpa2lFZGl0b3I6IChtZXRob2Q6IHN0cmluZywgb3B0aW9uczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID0+IHZvaWR9O1xuXG5cdFx0c2VsZi53aWtpRWRpdG9yKCdhZGRUb1Rvb2xiYXInLCB7XG5cdFx0XHRzZWN0aW9uczoge1xuXHRcdFx0XHRkZWxoOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3Rvb2xiYXInLFxuXHRcdFx0XHRcdGxhYmVsOiB3aW5kb3cud2dVTFMoJ+e7k+adn+iuqOiuuicsICfntZDmnZ/oqI7oq5YnKSxcblx0XHRcdFx0fSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0c2VsZi53aWtpRWRpdG9yKCdhZGRUb1Rvb2xiYXInLCB7XG5cdFx0XHRzZWN0aW9uOiAnZGVsaCcsXG5cdFx0XHRncm91cHM6IHtcblx0XHRcdFx0dmZkOiB7fSxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0c2VsZi53aWtpRWRpdG9yKCdhZGRUb1Rvb2xiYXInLCB7XG5cdFx0XHRzZWN0aW9uOiAnZGVsaCcsXG5cdFx0XHRncm91cDogJ3ZmZCcsXG5cdFx0XHR0b29sczoge1xuXHRcdFx0XHRpbnZhbGlkOiB7XG5cdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn6K+35rGC5peg5pWIJywgJ+iri+axgueEoeaViCcpLFxuXHRcdFx0XHRcdHR5cGU6ICdzZWxlY3QnLFxuXHRcdFx0XHRcdGxpc3Q6IGdldExpc3Qoe1xuXHRcdFx0XHRcdFx0aXI6IHdpbmRvdy53Z1VMUygn6K+35rGC5peg5pWIJywgJ+iri+axgueEoeaViCcpLFxuXHRcdFx0XHRcdFx0cmVwOiB3aW5kb3cud2dVTFMoJ+mHjeWkjeaPkOWHuu+8jOaXoOaViCcsICfph43opIfmj5Dlh7rvvIznhKHmlYgnKSxcblx0XHRcdFx0XHRcdG5lOiB3aW5kb3cud2dVTFMoJ+ebruagh+mhtemdouaIluaWh+S7tuS4jeWtmOWcqO+8jOaXoOaViCcsICfnm67mqJnpoIHpnaLmiJbmqpTmoYjkuI3lrZjlnKjvvIznhKHmlYgnKSxcblx0XHRcdFx0XHRcdG5xOiB3aW5kb3cud2dVTFMoJ+aPkOWIoOiAheacquWPluW+l+aPkOWIoOi1hOagvO+8jOaXoOaViCcsICfmj5DliKrogIXmnKrlj5blvpfmj5DliKros4fmoLzvvIznhKHmlYgnKSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0fSxcblx0XHRcdFx0a2VlcDoge1xuXHRcdFx0XHRcdGxhYmVsOiAn5L+d55WZJyxcblx0XHRcdFx0XHR0eXBlOiAnc2VsZWN0Jyxcblx0XHRcdFx0XHRsaXN0OiBnZXRMaXN0KHtcblx0XHRcdFx0XHRcdGs6ICfkv53nlZknLFxuXHRcdFx0XHRcdFx0c2s6ICflv6vpgJ/kv53nlZknLFxuXHRcdFx0XHRcdFx0dGs6IHdpbmRvdy53Z1VMUygn5pqC5pe25L+d55WZJywgJ+aaq+aZguS/neeVmScpLFxuXHRcdFx0XHRcdFx0cnI6IHdpbmRvdy53Z1VMUygn6K+35rGC55CG55Sx5raI5aSxJywgJ+iri+axgueQhueUsea2iOWksScpLFxuXHRcdFx0XHRcdFx0ZGFuOiB3aW5kb3cud2dVTFMoJ+WIoOWQjumHjeW7uicsICfliKrlvozph43lu7onKSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0fSxcblx0XHRcdFx0ZGVsOiB7XG5cdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5Yig6ZmkJywgJ+WIqumZpCcpLFxuXHRcdFx0XHRcdHR5cGU6ICdzZWxlY3QnLFxuXHRcdFx0XHRcdGxpc3Q6IGdldExpc3Qoe1xuXHRcdFx0XHRcdFx0ZDogd2luZG93LndnVUxTKCfliKDpmaQnLCAn5Yiq6ZmkJyksXG5cdFx0XHRcdFx0XHRpZmQ6IHdpbmRvdy53Z1VMUygn5Zu+5YOP5Zug5L615p2D6KKr5YigJywgJ+WcluWDj+WboOS+teasiuiiq+WIqicpLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzcGVlZHlEZWw6IHtcblx0XHRcdFx0XHRsYWJlbDogd2luZG93LndnVUxTKCflv6vpgJ/liKDpmaQnLCAn5b+r6YCf5Yiq6ZmkJyksXG5cdFx0XHRcdFx0dHlwZTogJ3NlbGVjdCcsXG5cdFx0XHRcdFx0bGlzdDogZ2V0TGlzdCh7XG5cdFx0XHRcdFx0XHRzZDogd2luZG93LndnVUxTKCflv6vpgJ/liKDpmaQnLCAn5b+r6YCf5Yiq6ZmkJyksXG5cdFx0XHRcdFx0XHRsc3NkOiB3aW5kb3cud2dVTFMoJ+aXoOadpea6kOaIlueJiOadg+i1hOiur++8jOW/q+mAn+WIoOmZpCcsICfnhKHkvobmupDmiJbniYjmrIros4foqIrvvIzlv6vpgJ/liKrpmaQnKSxcblx0XHRcdFx0XHRcdHN2Zzogd2luZG93LndnVUxTKCflt7LmlLnnlKhTVkflm77lvaLvvIzliKDpmaQnLCAn5bey5pS555SoU1ZH5ZyW5b2i77yM5Yiq6ZmkJyksXG5cdFx0XHRcdFx0XHRkcmVwOiB3aW5kb3cud2dVTFMoJ+Wkmuasoeiiq+WIoOmZpO+8jOadoeebrumUgeWumicsICflpJrmrKHooqvliKrpmaTvvIzmop3nm67pjpblrponKSxcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0fSxcblx0XHRcdFx0b3RoZXJzOiB7XG5cdFx0XHRcdFx0bGFiZWw6IHdpbmRvdy53Z1VMUygn5YW25LuW5aSE55CG5pa55rOVJywgJ+WFtuS7luiZleeQhuaWueazlScpLFxuXHRcdFx0XHRcdHR5cGU6ICdzZWxlY3QnLFxuXHRcdFx0XHRcdGxpc3Q6IGdldExpc3Qoe1xuXHRcdFx0XHRcdFx0Yzogd2luZG93LndnVUxTKCfovazkuqTkvrXmnYMnLCAn6L2J5Lqk5L615qyKJyksXG5cdFx0XHRcdFx0XHRyOiB3aW5kb3cud2dVTFMoJ+mHjeWumuWQkScsICfph43lrprlkJEnKSxcblx0XHRcdFx0XHRcdGNyOiB3aW5kb3cud2dVTFMoJ+WIhuexu+mHjeWumuWQkScsICfliIbpoZ7ph43lrprlkJEnKSxcblx0XHRcdFx0XHRcdG06IHdpbmRvdy53Z1VMUygn56e75YqoJywgJ+enu+WLlScpLFxuXHRcdFx0XHRcdFx0bWVyZ2U6IHdpbmRvdy53Z1VMUygn5bm25YWlJywgJ+S9teWFpScpLFxuXHRcdFx0XHRcdFx0bmM6IHdpbmRvdy53Z1VMUygn5peg5YWx6K+GJywgJ+eEoeWFseitmCcpLFxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9KTtcblx0fSk7XG59O1xuXG5leHBvcnQge2VkaXR0b29sc0RlbGh9O1xuIiwgImNvbnN0IGdldFZmZFRleHQgPSAoY29kZTogc3RyaW5nLCBjb21tZW50OiBzdHJpbmcpID0+IHtcblx0cmV0dXJuIHtcblx0XHRsYWJlbDogY29tbWVudCxcblx0XHRhY3Rpb246IHtcblx0XHRcdHR5cGU6ICdlbmNhcHN1bGF0ZScsXG5cdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdHByZTogYHt7ZGVsaHwke2NvZGV9fX1cXG5gLFxuXHRcdFx0XHRwb3N0OiBgXFxuLS0tLVxcbjogJHtjb21tZW50feOAgi0tfn5gLmNvbmNhdCgnfn5cXG57JywgJ3tkZWxmfX0nKSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fTtcbn07XG5cbmNvbnN0IGdldExpc3QgPSA8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+KGxpc3Q6IFQpOiBSZWNvcmQ8c3RyaW5nLCBQYXJ0aWFsPFJldHVyblR5cGU8dHlwZW9mIGdldFZmZFRleHQ+Pj4gPT4ge1xuXHRjb25zdCBvYmplY3Q6IFJldHVyblR5cGU8dHlwZW9mIGdldExpc3Q+ID0ge307XG5cdGZvciAoY29uc3QgW2NvZGUsIGNvbW1lbnRdIG9mIE9iamVjdC5lbnRyaWVzKGxpc3QpKSB7XG5cdFx0b2JqZWN0W2NvZGVdID0gZ2V0VmZkVGV4dChjb2RlLCBjb21tZW50KTtcblx0fVxuXG5cdHJldHVybiBvYmplY3Q7XG59O1xuXG5leHBvcnQge2dldExpc3R9O1xuIiwgImltcG9ydCB7ZWRpdHRvb2xzRGVsaH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5jb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cbmlmICgvXuacieWFveaho+ahiOmmhig/OltfIF10YWxrKT865a2Y5bqf6K6o6K66XFwvL2kudGVzdCh3Z1BhZ2VOYW1lKSkge1xuXHRlZGl0dG9vbHNEZWxoKCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBK0JDLFFBQUEsdUNBQUE7O0FDQS9CLElBQU1DLGFBQWFBLENBQUNDLE1BQWNDLFlBQW9CO0FBQ3JELFNBQU87SUFDTkMsT0FBT0Q7SUFDUEUsUUFBUTtNQUNQQyxNQUFNO01BQ05DLFNBQVM7UUFDUkMsS0FBQSxVQUFBQyxPQUFlUCxNQUFJLE1BQUE7UUFDbkJRLE1BQU0sYUFBQUQsT0FBYU4sU0FBTyxPQUFBLEVBQVFNLE9BQU8sU0FBUyxTQUFTO01BQzVEO0lBQ0Q7RUFDRDtBQUNEO0FBRUEsSUFBTUUsVUFBNkNDLFVBQW9FO0FBQ3RILFFBQU1DLFNBQXFDLENBQUM7QUFDNUMsV0FBQUMsS0FBQSxHQUFBQyxrQkFBOEJDLE9BQU9DLFFBQVFMLElBQUksR0FBQUUsS0FBQUMsZ0JBQUFHLFFBQUFKLE1BQUc7QUFBcEQsVUFBVyxDQUFDWixNQUFNQyxPQUFPLElBQUFZLGdCQUFBRCxFQUFBO0FBQ3hCRCxXQUFPWCxJQUFJLElBQUlELFdBQVdDLE1BQU1DLE9BQU87RUFDeEM7QUFFQSxTQUFPVTtBQUNSOztBRGpCQSxJQUFNTSxnQkFBZ0JBLE1BQVk7QUFDakMsR0FBQSxHQUFBcEIsa0JBQUFxQixrQkFBaUIsV0FBOEI7QUFDOUMsVUFBTUMsT0FBTztBQUViQSxTQUFLQyxXQUFXLGdCQUFnQjtNQUMvQkMsVUFBVTtRQUNUQyxNQUFNO1VBQ0xsQixNQUFNO1VBQ05GLE9BQU9xQixPQUFPQyxNQUFNLFFBQVEsTUFBTTtRQUNuQztNQUNEO0lBQ0QsQ0FBQztBQUNETCxTQUFLQyxXQUFXLGdCQUFnQjtNQUMvQkssU0FBUztNQUNUQyxRQUFRO1FBQ1BDLEtBQUssQ0FBQztNQUNQO0lBQ0QsQ0FBQztBQUNEUixTQUFLQyxXQUFXLGdCQUFnQjtNQUMvQkssU0FBUztNQUNURyxPQUFPO01BQ1BDLE9BQU87UUFDTkMsU0FBUztVQUNSNUIsT0FBT3FCLE9BQU9DLE1BQU0sUUFBUSxNQUFNO1VBQ2xDcEIsTUFBTTtVQUNOTSxNQUFNRCxRQUFRO1lBQ2JzQixJQUFJUixPQUFPQyxNQUFNLFFBQVEsTUFBTTtZQUMvQlEsS0FBS1QsT0FBT0MsTUFBTSxXQUFXLFNBQVM7WUFDdENTLElBQUlWLE9BQU9DLE1BQU0saUJBQWlCLGVBQWU7WUFDakRVLElBQUlYLE9BQU9DLE1BQU0saUJBQWlCLGVBQWU7VUFDbEQsQ0FBQztRQUNGO1FBQ0FXLE1BQU07VUFDTGpDLE9BQU87VUFDUEUsTUFBTTtVQUNOTSxNQUFNRCxRQUFRO1lBQ2IyQixHQUFHO1lBQ0hDLElBQUk7WUFDSkMsSUFBSWYsT0FBT0MsTUFBTSxRQUFRLE1BQU07WUFDL0JlLElBQUloQixPQUFPQyxNQUFNLFVBQVUsUUFBUTtZQUNuQ2dCLEtBQUtqQixPQUFPQyxNQUFNLFFBQVEsTUFBTTtVQUNqQyxDQUFDO1FBQ0Y7UUFDQWlCLEtBQUs7VUFDSnZDLE9BQU9xQixPQUFPQyxNQUFNLE1BQU0sSUFBSTtVQUM5QnBCLE1BQU07VUFDTk0sTUFBTUQsUUFBUTtZQUNiaUMsR0FBR25CLE9BQU9DLE1BQU0sTUFBTSxJQUFJO1lBQzFCbUIsS0FBS3BCLE9BQU9DLE1BQU0sV0FBVyxTQUFTO1VBQ3ZDLENBQUM7UUFDRjtRQUNBb0IsV0FBVztVQUNWMUMsT0FBT3FCLE9BQU9DLE1BQU0sUUFBUSxNQUFNO1VBQ2xDcEIsTUFBTTtVQUNOTSxNQUFNRCxRQUFRO1lBQ2JvQyxJQUFJdEIsT0FBT0MsTUFBTSxRQUFRLE1BQU07WUFDL0JzQixNQUFNdkIsT0FBT0MsTUFBTSxpQkFBaUIsZUFBZTtZQUNuRHVCLEtBQUt4QixPQUFPQyxNQUFNLGVBQWUsYUFBYTtZQUM5Q3dCLE1BQU16QixPQUFPQyxNQUFNLGNBQWMsWUFBWTtVQUM5QyxDQUFDO1FBQ0Y7UUFDQXlCLFFBQVE7VUFDUC9DLE9BQU9xQixPQUFPQyxNQUFNLFVBQVUsUUFBUTtVQUN0Q3BCLE1BQU07VUFDTk0sTUFBTUQsUUFBUTtZQUNieUMsR0FBRzNCLE9BQU9DLE1BQU0sUUFBUSxNQUFNO1lBQzlCMkIsR0FBRzVCLE9BQU9DLE1BQU0sT0FBTyxLQUFLO1lBQzVCNEIsSUFBSTdCLE9BQU9DLE1BQU0sU0FBUyxPQUFPO1lBQ2pDNkIsR0FBRzlCLE9BQU9DLE1BQU0sTUFBTSxJQUFJO1lBQzFCOEIsT0FBTy9CLE9BQU9DLE1BQU0sTUFBTSxJQUFJO1lBQzlCK0IsSUFBSWhDLE9BQU9DLE1BQU0sT0FBTyxLQUFLO1VBQzlCLENBQUM7UUFDRjtNQUNEO0lBQ0QsQ0FBQztFQUNGLENBQUM7QUFDRjs7QUU3RUEsSUFBTTtFQUFDZ0M7QUFBVSxJQUFJQyxHQUFHQyxPQUFPQyxJQUFJO0FBRW5DLElBQUksOEJBQThCQyxLQUFLSixVQUFVLEdBQUc7QUFDbkR2QyxnQkFBYztBQUNmOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldCIsICJyZXF1aXJlIiwgImdldFZmZFRleHQiLCAiY29kZSIsICJjb21tZW50IiwgImxhYmVsIiwgImFjdGlvbiIsICJ0eXBlIiwgIm9wdGlvbnMiLCAicHJlIiwgImNvbmNhdCIsICJwb3N0IiwgImdldExpc3QiLCAibGlzdCIsICJvYmplY3QiLCAiX2kiLCAiX09iamVjdCRlbnRyaWVzIiwgIk9iamVjdCIsICJlbnRyaWVzIiwgImxlbmd0aCIsICJlZGl0dG9vbHNEZWxoIiwgImN1c3RvbWl6ZVRvb2xiYXIiLCAic2VsZiIsICJ3aWtpRWRpdG9yIiwgInNlY3Rpb25zIiwgImRlbGgiLCAid2luZG93IiwgIndnVUxTIiwgInNlY3Rpb24iLCAiZ3JvdXBzIiwgInZmZCIsICJncm91cCIsICJ0b29scyIsICJpbnZhbGlkIiwgImlyIiwgInJlcCIsICJuZSIsICJucSIsICJrZWVwIiwgImsiLCAic2siLCAidGsiLCAicnIiLCAiZGFuIiwgImRlbCIsICJkIiwgImlmZCIsICJzcGVlZHlEZWwiLCAic2QiLCAibHNzZCIsICJzdmciLCAiZHJlcCIsICJvdGhlcnMiLCAiYyIsICJyIiwgImNyIiwgIm0iLCAibWVyZ2UiLCAibmMiLCAid2dQYWdlTmFtZSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInRlc3QiXQp9Cg==
