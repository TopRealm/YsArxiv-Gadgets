/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|license=GPL-3.0-or-later}}'
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/StickyTableHeaders}
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

// dist/StickyTableHeaders/StickyTableHeaders.js
//! src/StickyTableHeaders/modules/core.ts
var stickyTableHeaders = () => {
  const $body = $("body");
  $body.find(".wikitable:not(.sortable)").each((_index, table) => {
    const $table = $(table);
    const $thead = $table.find("thead");
    const $trTh = $table.find("tbody>tr>th").parent().eq(0);
    const $trTd = $table.find("tbody>tr>td").parent();
    const $target = $thead.length ? $thead : $trTh.length ? $trTh : null;
    if ($target && $trTd.length >= 5) {
      $table.addClass("mw-sticky-header");
      $target.addClass("thead");
    }
  });
};
//! src/StickyTableHeaders/StickyTableHeaders.ts
$(stickyTableHeaders);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1N0aWNreVRhYmxlSGVhZGVycy9tb2R1bGVzL2NvcmUudHMiLCAic3JjL1N0aWNreVRhYmxlSGVhZGVycy9TdGlja3lUYWJsZUhlYWRlcnMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBzdGlja3lUYWJsZUhlYWRlcnMgPSAoKTogdm9pZCA9PiB7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICQoJ2JvZHknKTtcblx0JGJvZHkuZmluZCgnLndpa2l0YWJsZTpub3QoLnNvcnRhYmxlKScpLmVhY2goKF9pbmRleDogbnVtYmVyLCB0YWJsZTogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcblx0XHRjb25zdCAkdGFibGU6IEpRdWVyeTxIVE1MVGFibGVFbGVtZW50PiA9ICQodGFibGUpIGFzIEpRdWVyeTxIVE1MVGFibGVFbGVtZW50Pjtcblx0XHRjb25zdCAkdGhlYWQ6IEpRdWVyeTxIVE1MVGFibGVTZWN0aW9uRWxlbWVudD4gPSAkdGFibGUuZmluZCgndGhlYWQnKTtcblx0XHRjb25zdCAkdHJUaDogSlF1ZXJ5PEhUTUxUYWJsZVJvd0VsZW1lbnQ+ID0gJHRhYmxlXG5cdFx0XHQuZmluZCgndGJvZHk+dHI+dGgnKVxuXHRcdFx0LnBhcmVudCgpXG5cdFx0XHQuZXEoMCkgYXMgSlF1ZXJ5PEhUTUxUYWJsZVJvd0VsZW1lbnQ+O1xuXHRcdGNvbnN0ICR0clRkOiBKUXVlcnk8SFRNTFRhYmxlUm93RWxlbWVudD4gPSAkdGFibGUuZmluZCgndGJvZHk+dHI+dGQnKS5wYXJlbnQoKTtcblx0XHRjb25zdCAkdGFyZ2V0OiBKUXVlcnk8SFRNTFRhYmxlU2VjdGlvbkVsZW1lbnQ+IHwgSlF1ZXJ5PEhUTUxUYWJsZVJvd0VsZW1lbnQ+IHwgbnVsbCA9ICR0aGVhZC5sZW5ndGhcblx0XHRcdD8gJHRoZWFkXG5cdFx0XHQ6ICR0clRoLmxlbmd0aFxuXHRcdFx0XHQ/ICR0clRoXG5cdFx0XHRcdDogbnVsbDtcblx0XHRpZiAoJHRhcmdldCAmJiAkdHJUZC5sZW5ndGggPj0gNSkge1xuXHRcdFx0JHRhYmxlLmFkZENsYXNzKCdtdy1zdGlja3ktaGVhZGVyJyk7XG5cdFx0XHQkdGFyZ2V0LmFkZENsYXNzKCd0aGVhZCcpO1xuXHRcdH1cblx0fSk7XG59O1xuIiwgImltcG9ydCB7c3RpY2t5VGFibGVIZWFkZXJzfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbiQoc3RpY2t5VGFibGVIZWFkZXJzKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLHFCQUFxQkEsTUFBWTtBQUM3QyxRQUFNQyxRQUFpQ0MsRUFBRSxNQUFNO0FBQy9DRCxRQUFNRSxLQUFLLDJCQUEyQixFQUFFQyxLQUFLLENBQUNDLFFBQWdCQyxVQUE2QjtBQUMxRixVQUFNQyxTQUFtQ0wsRUFBRUksS0FBSztBQUNoRCxVQUFNRSxTQUEwQ0QsT0FBT0osS0FBSyxPQUFPO0FBQ25FLFVBQU1NLFFBQXFDRixPQUN6Q0osS0FBSyxhQUFhLEVBQ2xCTyxPQUFPLEVBQ1BDLEdBQUcsQ0FBQztBQUNOLFVBQU1DLFFBQXFDTCxPQUFPSixLQUFLLGFBQWEsRUFBRU8sT0FBTztBQUM3RSxVQUFNRyxVQUFnRkwsT0FBT00sU0FDMUZOLFNBQ0FDLE1BQU1LLFNBQ0xMLFFBQ0E7QUFDSixRQUFJSSxXQUFXRCxNQUFNRSxVQUFVLEdBQUc7QUFDakNQLGFBQU9RLFNBQVMsa0JBQWtCO0FBQ2xDRixjQUFRRSxTQUFTLE9BQU87SUFDekI7RUFDRCxDQUFDO0FBQ0Y7O0FDbEJBYixFQUFFRixrQkFBa0I7IiwKICAibmFtZXMiOiBbInN0aWNreVRhYmxlSGVhZGVycyIsICIkYm9keSIsICIkIiwgImZpbmQiLCAiZWFjaCIsICJfaW5kZXgiLCAidGFibGUiLCAiJHRhYmxlIiwgIiR0aGVhZCIsICIkdHJUaCIsICJwYXJlbnQiLCAiZXEiLCAiJHRyVGQiLCAiJHRhcmdldCIsICJsZW5ndGgiLCAiYWRkQ2xhc3MiXQp9Cg==
