/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0|import=no}}'
 * @author 顶呱呱的阿杰 
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

// dist/ConsolePrintWordartLogo/ConsolePrintWordartLogo.js
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
//! src/ConsolePrintWordartLogo/ConsolePrintWordartLogo.ts
_asyncToGenerator(function* () {
  const consoleTUrl = "".concat(mw.config.get("wgServer"), "/api.php?action=query&meta=siteinfo&formatversion=2&format=json");
  const generatordata = yield fetch(consoleTUrl);
  const generatordataJson = yield generatordata.json();
  const mediawikiVersions = generatordataJson.query.general.generator;
  const ascii = "\n██╗     ██╗                 ██████╗ ██╗                                        ██╗██╗      ██╗\n╚██╗   ██╔╝                ██╔═══██╗██║                                        ╚═╝██║      ╚═╝\n ╚██╗ ██╔╝██████╗ ██╗   ██╗██║   ╚═╝███████╗  ██████╗ ██╗   ██╗   ██╗  ██╗  ██╗██╗██║   ██╗██╗\n  ╚████╔╝██╔═══██╗██║   ██║╚██████╗ ██╔═══██╗██╔═══██╗██║   ██║   ██║  ██║  ██║██║██║  ██╔╝██║\n   ╚██╔╝ ██║   ██║██║   ██║ ╚════██║██║   ██║██║   ██║██║   ██║   ██║  ██║  ██║██║██████╔╝ ██║\n    ██║  ██║   ██║██║   ██║██    ██║██║   ██║██║   ██║██║   ██║   ██║  ██║  ██║██║██╔══██╗ ██║\n    ██║  ╚██████╔╝╚██████╔╝╚██████╔╝██║   ██║╚██████╔╝╚██████╔╝██╗╚█████ ████╔╝██║██║  ╚██╗██║\n    ╚═╝   ╚═════╝  ╚═════╝  ╚═════╝ ╚═╝   ╚═╝ ╚═════╝  ╚═════╝ ╚═╝ ╚═════╚═══╝ ╚═╝╚═╝   ╚═╝╚═╝\n    ©2023-".concat((/* @__PURE__ */ new Date()).getFullYear(), " 有兽档案馆                                                ").concat(mediawikiVersions, "\n    ");
  console.log("%c".concat(ascii), "color:#159c5a");
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NvbnNvbGVQcmludFdvcmRhcnRMb2dvL0NvbnNvbGVQcmludFdvcmRhcnRMb2dvLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIoYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRjb25zdCBjb25zb2xlVFVybCA9IGAke213LmNvbmZpZy5nZXQoJ3dnU2VydmVyJyl9L2FwaS5waHA/YWN0aW9uPXF1ZXJ5Jm1ldGE9c2l0ZWluZm8mZm9ybWF0dmVyc2lvbj0yJmZvcm1hdD1qc29uYDtcblx0Y29uc3QgZ2VuZXJhdG9yZGF0YSA9IGF3YWl0IGZldGNoKGNvbnNvbGVUVXJsKTtcblx0Y29uc3QgZ2VuZXJhdG9yZGF0YUpzb24gPSAoYXdhaXQgZ2VuZXJhdG9yZGF0YS5qc29uKCkpIGFzIHVua25vd247XG5cdGNvbnN0IG1lZGlhd2lraVZlcnNpb25zID0gKGdlbmVyYXRvcmRhdGFKc29uIGFzIHtxdWVyeToge2dlbmVyYWw6IHtnZW5lcmF0b3I6IHN0cmluZ319fSkucXVlcnkuZ2VuZXJhbC5nZW5lcmF0b3I7XG5cdGNvbnN0IGFzY2lpID0gYFxu4paI4paI4pWXICAgICDilojilojilZcgICAgICAgICAgICAgICAgIOKWiOKWiOKWiOKWiOKWiOKWiOKVlyDilojilojilZcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg4paI4paI4pWX4paI4paI4pWXICAgICAg4paI4paI4pWXXG7ilZrilojilojilZcgICDilojilojilZTilZ0gICAgICAgICAgICAgICAg4paI4paI4pWU4pWQ4pWQ4pWQ4paI4paI4pWX4paI4paI4pWRICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOKVmuKVkOKVneKWiOKWiOKVkSAgICAgIOKVmuKVkOKVnVxuIOKVmuKWiOKWiOKVlyDilojilojilZTilZ3ilojilojilojilojilojilojilZcg4paI4paI4pWXICAg4paI4paI4pWX4paI4paI4pWRICAg4pWa4pWQ4pWd4paI4paI4paI4paI4paI4paI4paI4pWXICDilojilojilojilojilojilojilZcg4paI4paI4pWXICAg4paI4paI4pWXICAg4paI4paI4pWXICDilojilojilZcgIOKWiOKWiOKVl+KWiOKWiOKVl+KWiOKWiOKVkSAgIOKWiOKWiOKVl+KWiOKWiOKVl1xuICDilZrilojilojilojilojilZTilZ3ilojilojilZTilZDilZDilZDilojilojilZfilojilojilZEgICDilojilojilZHilZrilojilojilojilojilojilojilZcg4paI4paI4pWU4pWQ4pWQ4pWQ4paI4paI4pWX4paI4paI4pWU4pWQ4pWQ4pWQ4paI4paI4pWX4paI4paI4pWRICAg4paI4paI4pWRICAg4paI4paI4pWRICDilojilojilZEgIOKWiOKWiOKVkeKWiOKWiOKVkeKWiOKWiOKVkSAg4paI4paI4pWU4pWd4paI4paI4pWRXG4gICDilZrilojilojilZTilZ0g4paI4paI4pWRICAg4paI4paI4pWR4paI4paI4pWRICAg4paI4paI4pWRIOKVmuKVkOKVkOKVkOKVkOKWiOKWiOKVkeKWiOKWiOKVkSAgIOKWiOKWiOKVkeKWiOKWiOKVkSAgIOKWiOKWiOKVkeKWiOKWiOKVkSAgIOKWiOKWiOKVkSAgIOKWiOKWiOKVkSAg4paI4paI4pWRICDilojilojilZHilojilojilZHilojilojilojilojilojilojilZTilZ0g4paI4paI4pWRXG4gICAg4paI4paI4pWRICDilojilojilZEgICDilojilojilZHilojilojilZEgICDilojilojilZHilojiloggICAg4paI4paI4pWR4paI4paI4pWRICAg4paI4paI4pWR4paI4paI4pWRICAg4paI4paI4pWR4paI4paI4pWRICAg4paI4paI4pWRICAg4paI4paI4pWRICDilojilojilZEgIOKWiOKWiOKVkeKWiOKWiOKVkeKWiOKWiOKVlOKVkOKVkOKWiOKWiOKVlyDilojilojilZFcbiAgICDilojilojilZEgIOKVmuKWiOKWiOKWiOKWiOKWiOKWiOKVlOKVneKVmuKWiOKWiOKWiOKWiOKWiOKWiOKVlOKVneKVmuKWiOKWiOKWiOKWiOKWiOKWiOKVlOKVneKWiOKWiOKVkSAgIOKWiOKWiOKVkeKVmuKWiOKWiOKWiOKWiOKWiOKWiOKVlOKVneKVmuKWiOKWiOKWiOKWiOKWiOKWiOKVlOKVneKWiOKWiOKVl+KVmuKWiOKWiOKWiOKWiOKWiCDilojilojilojilojilZTilZ3ilojilojilZHilojilojilZEgIOKVmuKWiOKWiOKVl+KWiOKWiOKVkVxuICAgIOKVmuKVkOKVnSAgIOKVmuKVkOKVkOKVkOKVkOKVkOKVnSAg4pWa4pWQ4pWQ4pWQ4pWQ4pWQ4pWdICDilZrilZDilZDilZDilZDilZDilZ0g4pWa4pWQ4pWdICAg4pWa4pWQ4pWdIOKVmuKVkOKVkOKVkOKVkOKVkOKVnSAg4pWa4pWQ4pWQ4pWQ4pWQ4pWQ4pWdIOKVmuKVkOKVnSDilZrilZDilZDilZDilZDilZDilZrilZDilZDilZDilZ0g4pWa4pWQ4pWd4pWa4pWQ4pWdICAg4pWa4pWQ4pWd4pWa4pWQ4pWdXG4gICAgwqkyMDIzLSR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSDmnInlhb3moaPmoYjppoYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke21lZGlhd2lraVZlcnNpb25zfVxuICAgIGA7XG5cdGNvbnNvbGUubG9nKGAlYyR7YXNjaWl9YCwgJ2NvbG9yOiMxNTljNWEnKTtcbn0pKCk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFBQyxhQUFrQjtBQUNsQixRQUFNQSxjQUFBLEdBQUFDLE9BQWlCQyxHQUFHQyxPQUFPQyxJQUFJLFVBQVUsR0FBQyxpRUFBQTtBQUNoRCxRQUFNQyxnQkFBQSxNQUFzQkMsTUFBTU4sV0FBVztBQUM3QyxRQUFNTyxvQkFBQSxNQUEyQkYsY0FBY0csS0FBSztBQUNwRCxRQUFNQyxvQkFBcUJGLGtCQUE4REcsTUFBTUMsUUFBUUM7QUFDdkcsUUFBTUMsUUFBQSwrd0JBQUFaLFFBU0ssb0JBQUlhLEtBQUssR0FBRUMsWUFBWSxHQUFDLHdEQUFBLEVBQUFkLE9BQXlEUSxtQkFBaUIsUUFBQTtBQUU3R08sVUFBUUMsSUFBQSxLQUFBaEIsT0FBU1ksS0FBSyxHQUFJLGVBQWU7QUFDMUMsQ0FBQSxFQUFHOyIsCiAgIm5hbWVzIjogWyJjb25zb2xlVFVybCIsICJjb25jYXQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJnZW5lcmF0b3JkYXRhIiwgImZldGNoIiwgImdlbmVyYXRvcmRhdGFKc29uIiwgImpzb24iLCAibWVkaWF3aWtpVmVyc2lvbnMiLCAicXVlcnkiLCAiZ2VuZXJhbCIsICJnZW5lcmF0b3IiLCAiYXNjaWkiLCAiRGF0ZSIsICJnZXRGdWxsWWVhciIsICJjb25zb2xlIiwgImxvZyJdCn0K
