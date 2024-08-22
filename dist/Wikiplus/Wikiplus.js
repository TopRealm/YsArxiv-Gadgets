/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|title=Wikiplus|license=CC-BY-SA-4.0}}'
 *
 * Wikiplus
 *
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Wikiplus/module/core.js}
 * @author Eridanus Sora (妹空酱)
 * @license CC-BY-SA-4.0 {@link https://youshou.wiki/wiki/H:CC-BY-SA-4.0}
 */

/**
 * SPDX-License-Identifier: GPL-3.0-or-later
 * _addText: '{{Gadget Header|title=Wikiplus-highlight|license=GPL-3.0-or-later}}'
 *
 * Wikiplus-highlight
 *
 * @base {@link https://github.com/bhsd-harry/Wikiplus-highlight/blob/main/main.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/Wikiplus/module/highlight.js}
 * @author Bhsd <https://github.com/bhsd-harry>, 机智的小鱼君 <https://github.com/Dragon-Fish>
 * @license GPL-3.0-or-later {@link https://youshou.wiki/wiki/H:GPL-3.0}
 */

/**
 * SPDX-License-Identifier: MIT
 *
 * settings Icon (ltr) from OOjs UI
 *
 * @base {@link https://github.com/wikimedia/oojs-ui/blob/e17952e413cfc00c15cfd861d47463c29062afe7/src/themes/wikimediaui/images/icons/settings.svg}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/GeoLocationReader/images}
 * @license MIT {@link https://github.com/wikimedia/oojs-ui/blob/master/LICENSE-MIT}
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

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/global-this.js
var require_global_this = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/global-this.js"(exports, module2) {
    "use strict";
    var check = function(it) {
      return it && it.Math === Math && it;
    };
    module2.exports = // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || // eslint-disable-next-line no-new-func -- fallback
    /* @__PURE__ */ function() {
      return this;
    }() || Function("return this")();
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/fails.js"(exports, module2) {
    "use strict";
    module2.exports = function(exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/descriptors.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/function-bind-native.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/function-call.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
    "use strict";
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/create-property-descriptor.js"(exports, module2) {
    "use strict";
    module2.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/function-uncurry-this.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var call = FunctionPrototype.call;
    var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
    module2.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
      return function() {
        return call.apply(fn, arguments);
      };
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/classof-raw.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/indexed-object.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var classof = require_classof_raw();
    var $Object = Object;
    var split = uncurryThis("".split);
    module2.exports = fails(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof(it) === "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-null-or-undefined.js"(exports, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/require-object-coercible.js"(exports, module2) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-indexed-object.js"(exports, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-callable.js"(exports, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-object.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/get-built-in.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var aFunction = function(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module2.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(globalThis2[namespace]) : globalThis2[namespace] && globalThis2[namespace][method];
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/object-is-prototype-of.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/environment-user-agent.js
var require_environment_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/environment-user-agent.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var navigator2 = globalThis2.navigator;
    var userAgent = navigator2 && navigator2.userAgent;
    module2.exports = userAgent ? String(userAgent) : "";
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/environment-v8-version.js
var require_environment_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/environment-v8-version.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var userAgent = require_environment_user_agent();
    var process = globalThis2.process;
    var Deno = globalThis2.Deno;
    var versions = process && process.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match;
    var version;
    if (v8) {
      match = v8.split(".");
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
      }
    }
    module2.exports = version;
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module2) {
    "use strict";
    var V8_VERSION = require_environment_v8_version();
    var fails = require_fails();
    var globalThis2 = require_global_this();
    var $String = globalThis2.String;
    module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = Symbol("symbol detection");
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-symbol.js"(exports, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var isCallable = require_is_callable();
    var isPrototypeOf = require_object_is_prototype_of();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var $Object = Object;
    module2.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/try-to-string.js"(exports, module2) {
    "use strict";
    var $String = String;
    module2.exports = function(argument) {
      try {
        return $String(argument);
      } catch (error) {
        return "Object";
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/a-callable.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isCallable(argument)) return argument;
      throw new $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/get-method.js"(exports, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var $TypeError = TypeError;
    module2.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
      if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-pure.js"(exports, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/define-global-property.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var defineProperty = Object.defineProperty;
    module2.exports = function(key, value) {
      try {
        defineProperty(globalThis2, key, { value, configurable: true, writable: true });
      } catch (error) {
        globalThis2[key] = value;
      }
      return value;
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/shared-store.js"(exports, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global_this();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.38.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.38.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/shared.js"(exports, module2) {
    "use strict";
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-object.js"(exports, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/has-own-property.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/uid.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var id = 0;
    var postfix = Math.random();
    var toString = uncurryThis(1 .toString);
    module2.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/well-known-symbol.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var shared = require_shared();
    var hasOwn = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var Symbol2 = globalThis2.Symbol;
    var WellKnownSymbolsStore = shared("wks");
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2["for"] || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module2.exports = function(name) {
      if (!hasOwn(WellKnownSymbolsStore, name)) {
        WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name);
      }
      return WellKnownSymbolsStore[name];
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-primitive.js"(exports, module2) {
    "use strict";
    var call = require_function_call();
    var isObject = require_is_object();
    var isSymbol = require_is_symbol();
    var getMethod = require_get_method();
    var ordinaryToPrimitive = require_ordinary_to_primitive();
    var wellKnownSymbol = require_well_known_symbol();
    var $TypeError = TypeError;
    var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    module2.exports = function(input, pref) {
      if (!isObject(input) || isSymbol(input)) return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0) pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-property-key.js"(exports, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/document-create-element.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isObject = require_is_object();
    var document2 = globalThis2.document;
    var EXISTS = isObject(document2) && isObject(document2.createElement);
    module2.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/ie8-dom-define.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    var createElement = require_document_create_element();
    module2.exports = !DESCRIPTORS && !fails(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var call = require_function_call();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var createPropertyDescriptor = require_create_property_descriptor();
    var toIndexedObject = require_to_indexed_object();
    var toPropertyKey = require_to_property_key();
    var hasOwn = require_has_own_property();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey(P);
      if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
      } catch (error) {
      }
      if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    module2.exports = DESCRIPTORS && fails(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: false
      }).prototype !== 42;
    });
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/an-object.js"(exports, module2) {
    "use strict";
    var isObject = require_is_object();
    var $String = String;
    var $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isObject(argument)) return argument;
      throw new $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/object-define-property.js"(exports) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var anObject = require_an_object();
    var toPropertyKey = require_to_property_key();
    var $TypeError = TypeError;
    var $defineProperty = Object.defineProperty;
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = "enumerable";
    var CONFIGURABLE = "configurable";
    var WRITABLE = "writable";
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
      } catch (error) {
      }
      if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
      if ("value" in Attributes) O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = DESCRIPTORS ? function(object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/function-name.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var hasOwn = require_has_own_property();
    var FunctionPrototype = Function.prototype;
    var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn(FunctionPrototype, "name");
    var PROPER = EXISTS && function something() {
    }.name === "something";
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
    module2.exports = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/inspect-source.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var isCallable = require_is_callable();
    var store = require_shared_store();
    var functionToString = uncurryThis(Function.toString);
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function(it) {
        return functionToString(it);
      };
    }
    module2.exports = store.inspectSource;
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var WeakMap = globalThis2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/shared-key.js"(exports, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/hidden-keys.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/internal-state.js"(exports, module2) {
    "use strict";
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
    var globalThis2 = require_global_this();
    var isObject = require_is_object();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn = require_has_own_property();
    var shared = require_shared_store();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError2 = globalThis2.TypeError;
    var WeakMap = globalThis2.WeakMap;
    var set;
    var get;
    var has;
    var enforce = function(it) {
      return has(it) ? get(it) : set(it, {});
    };
    var getterFor = function(TYPE) {
      return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw new TypeError2("Incompatible receiver, " + TYPE + " required");
        }
        return state;
      };
    };
    if (NATIVE_WEAK_MAP || shared.state) {
      store = shared.state || (shared.state = new WeakMap());
      store.get = store.get;
      store.has = store.has;
      store.set = store.set;
      set = function(it, metadata) {
        if (store.has(it)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
      };
      get = function(it) {
        return store.get(it) || {};
      };
      has = function(it) {
        return store.has(it);
      };
    } else {
      STATE = sharedKey("state");
      hiddenKeys[STATE] = true;
      set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };
      get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
      };
      has = function(it) {
        return hasOwn(it, STATE);
      };
    }
    var store;
    var STATE;
    module2.exports = {
      set,
      get,
      has,
      enforce,
      getterFor
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/make-built-in.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var isCallable = require_is_callable();
    var hasOwn = require_has_own_property();
    var DESCRIPTORS = require_descriptors();
    var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
    var inspectSource = require_inspect_source();
    var InternalStateModule = require_internal_state();
    var enforceInternalState = InternalStateModule.enforce;
    var getInternalState = InternalStateModule.get;
    var $String = String;
    var defineProperty = Object.defineProperty;
    var stringSlice = uncurryThis("".slice);
    var replace = uncurryThis("".replace);
    var join = uncurryThis([].join);
    var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
      return defineProperty(function() {
      }, "length", { value: 8 }).length !== 8;
    });
    var TEMPLATE = String(String).split("String");
    var makeBuiltIn = module2.exports = function(value, name, options) {
      if (stringSlice($String(name), 0, 7) === "Symbol(") {
        name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
      }
      if (options && options.getter) name = "get " + name;
      if (options && options.setter) name = "set " + name;
      if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", { value: name, configurable: true });
        else value.name = name;
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
        defineProperty(value, "length", { value: options.arity });
      }
      try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
          if (DESCRIPTORS) defineProperty(value, "prototype", { writable: false });
        } else if (value.prototype) value.prototype = void 0;
      } catch (error) {
      }
      var state = enforceInternalState(value);
      if (!hasOwn(state, "source")) {
        state.source = join(TEMPLATE, typeof name == "string" ? name : "");
      }
      return value;
    };
    Function.prototype.toString = makeBuiltIn(function toString() {
      return isCallable(this) && getInternalState(this).source || inspectSource(this);
    }, "toString");
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/define-built-in.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    var definePropertyModule = require_object_define_property();
    var makeBuiltIn = require_make_built_in();
    var defineGlobalProperty = require_define_global_property();
    module2.exports = function(O, key, value, options) {
      if (!options) options = {};
      var simple = options.enumerable;
      var name = options.name !== void 0 ? options.name : key;
      if (isCallable(value)) makeBuiltIn(value, name, options);
      if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
      } else {
        try {
          if (!options.unsafe) delete O[key];
          else if (O[key]) simple = true;
        } catch (error) {
        }
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
          value,
          enumerable: false,
          configurable: !options.nonConfigurable,
          writable: !options.nonWritable
        });
      }
      return O;
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/math-trunc.js"(exports, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module2) {
    "use strict";
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-absolute-index.js"(exports, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var max = Math.max;
    var min = Math.min;
    module2.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-length.js"(exports, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/length-of-array-like.js"(exports, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/array-includes.js"(exports, module2) {
    "use strict";
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el !== el) while (length > index) {
          value = O[index++];
          if (value !== value) return true;
        }
        else for (; length > index; index++) {
          if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
      };
    };
    module2.exports = {
      // `Array.prototype.includes` method
      // https://tc39.es/ecma262/#sec-array.prototype.includes
      includes: createMethod(true),
      // `Array.prototype.indexOf` method
      // https://tc39.es/ecma262/#sec-array.prototype.indexof
      indexOf: createMethod(false)
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/object-keys-internal.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var hasOwn = require_has_own_property();
    var toIndexedObject = require_to_indexed_object();
    var indexOf = require_array_includes().indexOf;
    var hiddenKeys = require_hidden_keys();
    var push = uncurryThis([].push);
    module2.exports = function(object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      while (names.length > i) if (hasOwn(O, key = names[i++])) {
        ~indexOf(result, key) || push(result, key);
      }
      return result;
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/enum-bug-keys.js"(exports, module2) {
    "use strict";
    module2.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf"
    ];
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    "use strict";
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/own-keys.js"(exports, module2) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var uncurryThis = require_function_uncurry_this();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var anObject = require_an_object();
    var concat = uncurryThis([].concat);
    module2.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/copy-constructor-properties.js"(exports, module2) {
    "use strict";
    var hasOwn = require_has_own_property();
    var ownKeys = require_own_keys();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var definePropertyModule = require_object_define_property();
    module2.exports = function(target, source, exceptions) {
      var keys = ownKeys(source);
      var defineProperty = definePropertyModule.f;
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
          defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-forced.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    var isCallable = require_is_callable();
    var replacement = /#|\.prototype\./;
    var isForced = function(feature, detection) {
      var value = data[normalize(feature)];
      return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
    };
    var normalize = isForced.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    };
    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = "N";
    var POLYFILL = isForced.POLYFILL = "P";
    module2.exports = isForced;
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/export.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var defineBuiltIn = require_define_built_in();
    var defineGlobalProperty = require_define_global_property();
    var copyConstructorProperties = require_copy_constructor_properties();
    var isForced = require_is_forced();
    module2.exports = function(options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL) {
        target = globalThis2;
      } else if (STATIC) {
        target = globalThis2[TARGET] || defineGlobalProperty(TARGET, {});
      } else {
        target = globalThis2[TARGET] && globalThis2[TARGET].prototype;
      }
      if (target) for (key in source) {
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
          descriptor = getOwnPropertyDescriptor(target, key);
          targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        if (!FORCED && targetProperty !== void 0) {
          if (typeof sourceProperty == typeof targetProperty) continue;
          copyConstructorProperties(sourceProperty, targetProperty);
        }
        if (options.sham || targetProperty && targetProperty.sham) {
          createNonEnumerableProperty(sourceProperty, "sham", true);
        }
        defineBuiltIn(target, key, sourceProperty, options);
      }
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/is-array.js"(exports, module2) {
    "use strict";
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof(argument) === "Array";
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/array-set-length.js
var require_array_set_length = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/array-set-length.js"(exports, module2) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var isArray = require_is_array();
    var $TypeError = TypeError;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function() {
      if (this !== void 0) return true;
      try {
        Object.defineProperty([], "length", { writable: false }).length = 1;
      } catch (error) {
        return error instanceof TypeError;
      }
    }();
    module2.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function(O, length) {
      if (isArray(O) && !getOwnPropertyDescriptor(O, "length").writable) {
        throw new $TypeError("Cannot set read only .length");
      }
      return O.length = length;
    } : function(O, length) {
      return O.length = length;
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports, module2) {
    "use strict";
    var $TypeError = TypeError;
    var MAX_SAFE_INTEGER = 9007199254740991;
    module2.exports = function(it) {
      if (it > MAX_SAFE_INTEGER) throw $TypeError("Maximum allowed index exceeded");
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/modules/es.array.push.js
var require_es_array_push = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/modules/es.array.push.js"() {
    "use strict";
    var $2 = require_export();
    var toObject = require_to_object();
    var lengthOfArrayLike = require_length_of_array_like();
    var setArrayLength = require_array_set_length();
    var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
    var fails = require_fails();
    var INCORRECT_TO_LENGTH = fails(function() {
      return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
    });
    var properErrorOnNonWritableLength = function() {
      try {
        Object.defineProperty([], "length", { writable: false }).push();
      } catch (error) {
        return error instanceof TypeError;
      }
    };
    var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();
    $2({ target: "Array", proto: true, arity: 1, forced: FORCED }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      push: function push(item) {
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var argCount = arguments.length;
        doesNotExceedSafeInteger(len + argCount);
        for (var i = 0; i < argCount; i++) {
          O[len] = arguments[i];
          len++;
        }
        setArrayLength(O, len);
        return len;
      }
    });
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-string-tag-support.js"(exports, module2) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module2.exports = String(test) === "[object z]";
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/classof.js"(exports, module2) {
    "use strict";
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var isCallable = require_is_callable();
    var classofRaw = require_classof_raw();
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var $Object = Object;
    var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ function() {
      return arguments;
    }()) === "Arguments";
    var tryGet = function(it, key) {
      try {
        return it[key];
      } catch (error) {
      }
    };
    module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-string.js
var require_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/to-string.js"(exports, module2) {
    "use strict";
    var classof = require_classof();
    var $String = String;
    module2.exports = function(argument) {
      if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
      return $String(argument);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/validate-arguments-length.js
var require_validate_arguments_length = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/validate-arguments-length.js"(exports, module2) {
    "use strict";
    var $TypeError = TypeError;
    module2.exports = function(passed, required) {
      if (passed < required) throw new $TypeError("Not enough arguments");
      return passed;
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/modules/web.url-search-params.delete.js
var require_web_url_search_params_delete = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/modules/web.url-search-params.delete.js"() {
    "use strict";
    var defineBuiltIn = require_define_built_in();
    var uncurryThis = require_function_uncurry_this();
    var toString = require_to_string();
    var validateArgumentsLength = require_validate_arguments_length();
    var $URLSearchParams = URLSearchParams;
    var URLSearchParamsPrototype = $URLSearchParams.prototype;
    var append = uncurryThis(URLSearchParamsPrototype.append);
    var $delete = uncurryThis(URLSearchParamsPrototype["delete"]);
    var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
    var push = uncurryThis([].push);
    var params = new $URLSearchParams("a=1&a=2&b=3");
    params["delete"]("a", 1);
    params["delete"]("b", void 0);
    if (params + "" !== "a=2") {
      defineBuiltIn(URLSearchParamsPrototype, "delete", function(name) {
        var length = arguments.length;
        var $value = length < 2 ? void 0 : arguments[1];
        if (length && $value === void 0) return $delete(this, name);
        var entries = [];
        forEach(this, function(v, k) {
          push(entries, { key: k, value: v });
        });
        validateArgumentsLength(length, 1);
        var key = toString(name);
        var value = toString($value);
        var index = 0;
        var dindex = 0;
        var found = false;
        var entriesLength = entries.length;
        var entry;
        while (index < entriesLength) {
          entry = entries[index++];
          if (found || entry.key === key) {
            found = true;
            $delete(this, entry.key);
          } else dindex++;
        }
        while (dindex < entriesLength) {
          entry = entries[dindex++];
          if (!(entry.key === key && entry.value === value)) append(this, entry.key, entry.value);
        }
      }, { enumerable: true, unsafe: true });
    }
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/modules/web.url-search-params.has.js
var require_web_url_search_params_has = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/modules/web.url-search-params.has.js"() {
    "use strict";
    var defineBuiltIn = require_define_built_in();
    var uncurryThis = require_function_uncurry_this();
    var toString = require_to_string();
    var validateArgumentsLength = require_validate_arguments_length();
    var $URLSearchParams = URLSearchParams;
    var URLSearchParamsPrototype = $URLSearchParams.prototype;
    var getAll = uncurryThis(URLSearchParamsPrototype.getAll);
    var $has = uncurryThis(URLSearchParamsPrototype.has);
    var params = new $URLSearchParams("a=1");
    if (params.has("a", 2) || !params.has("a", void 0)) {
      defineBuiltIn(URLSearchParamsPrototype, "has", function has(name) {
        var length = arguments.length;
        var $value = length < 2 ? void 0 : arguments[1];
        if (length && $value === void 0) return $has(this, name);
        var values = getAll(this, name);
        validateArgumentsLength(length, 1);
        var value = toString($value);
        var index = 0;
        while (index < values.length) {
          if (values[index++] === value) return true;
        }
        return false;
      }, { enumerable: true, unsafe: true });
    }
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/define-built-in-accessor.js
var require_define_built_in_accessor = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/internals/define-built-in-accessor.js"(exports, module2) {
    "use strict";
    var makeBuiltIn = require_make_built_in();
    var defineProperty = require_object_define_property();
    module2.exports = function(target, name, descriptor) {
      if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
      if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
      return defineProperty.f(target, name, descriptor);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/modules/web.url-search-params.size.js
var require_web_url_search_params_size = __commonJS({
  "node_modules/.pnpm/core-js@3.38.0/node_modules/core-js/modules/web.url-search-params.size.js"() {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var uncurryThis = require_function_uncurry_this();
    var defineBuiltInAccessor = require_define_built_in_accessor();
    var URLSearchParamsPrototype = URLSearchParams.prototype;
    var forEach = uncurryThis(URLSearchParamsPrototype.forEach);
    if (DESCRIPTORS && !("size" in URLSearchParamsPrototype)) {
      defineBuiltInAccessor(URLSearchParamsPrototype, "size", {
        get: function size() {
          var count = 0;
          forEach(this, function() {
            count++;
          });
          return count;
        },
        configurable: true,
        enumerable: true
      });
    }
  }
});

// dist/Wikiplus/Wikiplus.js
require_es_array_push();
require_web_url_search_params_delete();
require_web_url_search_params_has();
require_web_url_search_params_size();
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
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames2(fn)[0]])(fn = 0)), res;
};
//! src/Wikiplus/modules/utils/constants.js
var Constants;
var constants_default;
var init_constants = __esm({
  "src/Wikiplus/modules/utils/constants.js"() {
    "use strict";
    Constants = class {
      version = "4.0.12";
      get isArticle() {
        return window.mw.config.get("wgIsArticle");
      }
      get currentPageName() {
        return window.mw.config.get("wgPageName").replace(/ /g, "_");
      }
      get articleId() {
        return window.mw.config.get("wgArticleId");
      }
      get revisionId() {
        return window.mw.config.get("wgRevisionId");
      }
      get latestRevisionId() {
        return window.mw.config.get("wgCurRevisionId");
      }
      get articlePath() {
        return window.mw.config.get("wgArticlePath");
      }
      get scriptPath() {
        return window.mw.config.get("wgScriptPath");
      }
      get action() {
        return window.mw.config.get("wgAction");
      }
      get skin() {
        return window.mw.config.get("skin");
      }
      get userGroups() {
        return window.mw.config.get("wgUserGroups");
      }
      get wikiId() {
        return window.mw.config.get("wgWikiID");
      }
    };
    constants_default = new Constants();
  }
});
//! src/Wikiplus/modules/utils/requests.js
var Requests;
var requests_default;
var init_requests = __esm({
  "src/Wikiplus/modules/utils/requests.js"() {
    "use strict";
    init_constants();
    Requests = {
      base: "".concat(location.protocol, "//").concat(location.host).concat(constants_default.scriptPath, "/api.php"),
      get(query) {
        return _asyncToGenerator(function* () {
          const url = new URL(Requests.base);
          for (var _i = 0, _Object$keys = Object.keys(query); _i < _Object$keys.length; _i++) {
            const key = _Object$keys[_i];
            url.searchParams.append(key, query[key]);
          }
          const response = yield fetch(url, {
            credentials: "same-origin",
            headers: {
              "Api-User-Agent": "Wikiplus/".concat(constants_default.version, " (").concat(constants_default.wikiId, ")")
            }
          });
          return yield response.json();
        })();
      },
      post(payload) {
        return _asyncToGenerator(function* () {
          const url = new URL(Requests.base);
          const form = new FormData();
          for (var _i2 = 0, _Object$entries = Object.entries(payload); _i2 < _Object$entries.length; _i2++) {
            const [key, value] = _Object$entries[_i2];
            form.append(key, value);
          }
          const response = yield fetch(url, {
            method: "POST",
            body: form,
            credentials: "same-origin",
            headers: {
              "Api-User-Agent": "Wikiplus/".concat(constants_default.version, " (").concat(constants_default.wikiId, ")")
            }
          });
          return yield response.json();
        })();
      }
    };
    requests_default = Requests;
  }
});
//! src/Wikiplus/modules/utils/i18n.js
var I18n;
var i18n_default;
var init_i18n = __esm({
  "src/Wikiplus/modules/utils/i18n.js"() {
    "use strict";
    I18n = class {
      language;
      i18nData = {};
      sessionUpdateLog = [];
      constructor() {
        let language;
        try {
          language = JSON.parse(localStorage["Wikiplus_Settings"])["language"] || navigator.language.toLowerCase();
        } catch {
          language = (navigator.language || navigator.browserLanguage).replace(/han[st]-?/i, "").toLowerCase();
        }
        this.language = language;
        try {
          const i18nCache = JSON.parse(localStorage.getItem("Wikiplus_i18nCache"));
          for (var _i3 = 0, _Object$keys2 = Object.keys(i18nCache); _i3 < _Object$keys2.length; _i3++) {
            const key = _Object$keys2[_i3];
            this.i18nData[key] = i18nCache[key];
          }
        } catch {
          localStorage.setItem("Wikiplus_i18nCache", "{}");
        }
      }
      translate(key, placeholders = []) {
        let result = "";
        if (this.language in this.i18nData) {
          if (key in this.i18nData[this.language]) {
            result = this.i18nData[this.language][key];
          } else {
            this.loadLanguage(this.language);
            if (key in this.i18nData["en-us"]) {
              result = this.i18nData["en-us"][key];
            } else {
              result = key;
            }
          }
        } else {
          this.loadLanguage(this.language);
        }
        if (placeholders.length > 0) {
          var _iterator = _createForOfIteratorHelper(placeholders.entries()), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              const [index, placeholder] = _step.value;
              result = result.replace("$".concat(index + 1), placeholder);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
        return result;
      }
      loadLanguage(language) {
        var _this = this;
        return _asyncToGenerator(function* () {
          if (_this.sessionUpdateLog.includes(language)) {
            return;
          }
          try {
            const response = yield (yield fetch("https://gitcdn.qiuwen.net.cn/InterfaceAdmin/Wikiplus/raw/branch/dev/languages/".concat(language, ".json"))).json();
            const nowVersion = localStorage.getItem("Wikiplus_LanguageVersion") || "000";
            _this.sessionUpdateLog.push(language);
            if (response.__version !== nowVersion || !(language in _this.i18nData)) {
              console.info("Update ".concat(language, " support to version ").concat(response.__version));
              _this.i18nData[language] = response;
              localStorage.setItem("Wikiplus_i18nCache", JSON.stringify(_this.i18nData));
            }
          } catch {
          }
        })();
      }
    };
    i18n_default = new I18n();
  }
});
//! src/Wikiplus/modules/utils/log.js
var WikiplusError;
var Log;
var log_default;
var init_log = __esm({
  "src/Wikiplus/modules/utils/log.js"() {
    "use strict";
    init_i18n();
    WikiplusError = class extends Error {
      constructor(message, code) {
        super(message);
        this.code = code;
      }
    };
    Log = {
      debug(message = "") {
        console.debug("[Wikiplus-DEBUG] ".concat(message));
      },
      info(message = "") {
        console.info("[Wikiplus-INFO] ".concat(message));
      },
      error(errorCode, payloads = []) {
        let template = i18n_default.translate(errorCode);
        if (payloads.length > 0) {
          var _iterator2 = _createForOfIteratorHelper(payloads.entries()), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              const [i, v] = _step2.value;
              template = template.replace(new RegExp("\\".concat(i + 1), "ig"), v);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        console.error("[Wikiplus-ERROR] ".concat(template));
        throw new WikiplusError("".concat(template), errorCode);
      }
    };
    log_default = Log;
  }
});
//! src/Wikiplus/modules/services/wiki.js
var Wiki;
var wiki_default;
var init_wiki = __esm({
  "src/Wikiplus/modules/services/wiki.js"() {
    "use strict";
    init_requests();
    init_log();
    init_i18n();
    init_constants();
    Wiki = class {
      pageInfoCache = {};
      /**
       * 获得 Edit Token
       * Get Edit Token
       *
       * @returns {Promise<string>}
       */
      getEditToken() {
        return _asyncToGenerator(function* () {
          const response = yield requests_default.get({
            action: "query",
            meta: "tokens",
            format: "json"
          });
          if (response.query && response.query.tokens && response.query.tokens.csrftoken && response.query.tokens.csrftoken !== "+\\") {
            return response.query.tokens.csrftoken;
          }
          return log_default.error("fail_to_get_edittoken");
        })();
      }
      /**
       * 获得页面上一版本时间戳
       * Get the timestamp of the last revision of page specified.
       *
       * @param {params.string} title 页面名 / Pagename
       * @param {params.revisionId} revisionId 修订版本号 / Revision ID
       * @returns {Promise<string>}
       */
      getPageInfo({
        title,
        revisionId
      }) {
        var _this2 = this;
        return _asyncToGenerator(function* () {
          try {
            const params = {
              action: "query",
              prop: "revisions|info",
              rvprop: "timestamp|ids",
              format: "json"
            };
            if (revisionId) {
              params.revids = revisionId;
            } else if (title) {
              if (_this2.pageInfoCache[title]) {
                return {
                  timestamp: _this2.pageInfoCache[title].timestamp,
                  revisionId: _this2.pageInfoCache[title].revid
                };
              }
              params.titles = title;
            }
            const response = yield requests_default.get(params);
            if (response.query && response.query.pages) {
              if (Object.keys(response.query.pages)[0] === "-1") {
                return {};
              }
              const pageInfo = response.query.pages[Object.keys(response.query.pages)[0]].revisions[0];
              if (title) {
                _this2.pageInfoCache[title] = pageInfo;
              }
              return {
                timestamp: pageInfo.timestamp,
                revisionId: pageInfo.revid
              };
            }
          } catch {
            log_default.error("fail_to_get_edittoken");
          }
        })();
      }
      /**
       * 获得页面的 Wikitext
       * Get wikitext of the page.
       *
       * @param {string} title title
       * @param {Object} config
       * @param {string} config.revisionId 版本号
       * @param {string} config.section 段落号
       * @return {Promise<string>} wikitext内容
       */
      getWikiText({
        section,
        revisionId
      }) {
        return _asyncToGenerator(function* () {
          try {
            const response = yield (yield fetch("".concat(location.protocol, "//").concat(location.host).concat(constants_default.scriptPath, "/index.php?oldid=").concat(revisionId, "&section=").concat(section, "&action=raw"))).text();
            return response;
          } catch {
            log_default.error("fail_to_get_wikitext");
          }
        })();
      }
      /**
       * 解析 Wikitext
       *
       * @param {string} wikitext wikitext
       * @param {string} title 页面标题
       * @param {Object} config 设置
       * @return {Promise<string>} 解析结果 HTML
       */
      parseWikiText(wikitext, title = "", config = {}) {
        return _asyncToGenerator(function* () {
          try {
            const response = yield requests_default.post({
              format: "json",
              action: "parse",
              text: wikitext,
              title,
              pst: "true"
            });
            if (response.parse && response.parse.text) {
              return response.parse.text["*"];
            }
          } catch {
            log_default.error("cant_parse_wikitext");
          }
        })();
      }
      /**
       * 编辑页面
       *
       * @param root0
       * @param root0.title
       * @param root0.content
       * @param root0.editToken
       * @param root0.timestamp
       * @param root0.config
       * @param root0.additionalConfig
       */
      edit({
        title,
        content,
        editToken,
        timestamp,
        config = {},
        additionalConfig = {}
      } = {}) {
        return _asyncToGenerator(function* () {
          let response;
          try {
            response = yield requests_default.post({
              action: "edit",
              format: "json",
              text: content,
              title,
              token: editToken,
              ...timestamp ? {
                basetimestamp: timestamp
              } : {},
              ...config,
              ...additionalConfig
            });
          } catch {
            log_default.error("network_edit_error");
          }
          if (response.edit) {
            if (response.edit.result === "Success") {
              return true;
            }
            if (response.edit.code) {
              throw new Error("\n                        ".concat(i18n_default.translate("hit_abusefilter"), ":").concat(response.edit.info.replace("/Hit AbuseFilter: /ig", ""), '\n                        <br>\n                        <div style="font-size: smaller;">').concat(response.edit.warning, "</div>\n                    "));
            } else {
              log_default.error("unknown_edit_error");
            }
          } else if (response.error && response.error.code) {
            log_default.error(response.error.code);
          } else if (response.code) {
            log_default.error(response.code);
          } else {
            log_default.error("unknown_edit_error");
          }
        })();
      }
      /**
       * 获得指定页面最新修订编号
       * Get latest revisionId of a page.
       *
       * @param {*} title
       */
      getLatestRevisionIdForPage(title) {
        var _this3 = this;
        return _asyncToGenerator(function* () {
          const {
            revisionId
          } = yield _this3.getPageInfo({
            title
          });
          return revisionId;
        })();
      }
    };
    wiki_default = new Wiki();
  }
});
//! src/Wikiplus/modules/core/page.js
var Page;
var page_default;
var init_page = __esm({
  "src/Wikiplus/modules/core/page.js"() {
    "use strict";
    init_wiki();
    init_log();
    Page = class {
      timestamp;
      editToken;
      title;
      revisionId;
      inited = false;
      isNewPage = false;
      sectionCache = {};
      /**
       * @param {params.title} 页面标题 Page Name (optional)
       * @param {params.revisionId} 页面修订编号 Revision Id
       */
      constructor({
        title,
        revisionId
      }) {
        this.title = title;
        this.revisionId = revisionId;
        this.isNewPage = !revisionId;
      }
      /**
       * 初始化 获得页面EditToken和初始TimeStamp
       * Initialization.
       *
       * @param {string} editToken (optional) 如果提供了editToken，将不会再获取
       */
      init({
        editToken = ""
      } = {}) {
        var _this4 = this;
        return _asyncToGenerator(function* () {
          const promiseArr = [_this4.getTimestamp()];
          if (!editToken) {
            promiseArr.push(_this4.getEditToken());
          }
          yield Promise.all(promiseArr);
          _this4.inited = true;
          log_default.info("Page initialization for ".concat(_this4.title, "#").concat(_this4.revisionId, " finished."));
        })();
      }
      /**
       * 获得 EditToken
       * Get EditToken
       */
      getEditToken() {
        var _this5 = this;
        return _asyncToGenerator(function* () {
          yield mw.loader.using("mediawiki.user");
          if (mw.user.tokens.get("csrfToken") && mw.user.tokens.get("csrfToken") !== "+\\") {
            _this5.editToken = mw.user.tokens.get("csrfToken");
            return;
          }
          _this5.editToken = yield wiki_default.getEditToken();
        })();
      }
      /**
       * 获得编辑基准时间戳
       * Get Base Timestamp
       */
      getTimestamp() {
        var _this6 = this;
        return _asyncToGenerator(function* () {
          const {
            timestamp,
            revisionId
          } = yield wiki_default.getPageInfo({
            revisionId: _this6.revisionId,
            title: _this6.title
          });
          _this6.timestamp = timestamp;
          if (revisionId) {
            _this6.revisionId = revisionId;
            _this6.isNewPage = false;
          }
        })();
      }
      /**
       * 获得 WikiText
       *
       * @param {Object} config
       * @param {string} config.section
       * @param {string} config.revisionId
       */
      getWikiText({
        section = ""
      } = {}) {
        var _this7 = this;
        return _asyncToGenerator(function* () {
          const sec = section === -1 ? "" : section;
          if (_this7.sectionCache[sec]) {
            return _this7.sectionCache[sec];
          }
          const wikiText = yield wiki_default.getWikiText({
            section: sec,
            revisionId: _this7.revisionId
          });
          log_default.info("Wikitext of ".concat(_this7.title, "#").concat(section, " fetched."));
          _this7.sectionCache[sec] = wikiText;
          return wikiText;
        })();
      }
      /**
       * 解析 WikiText
       *
       * @param {string} wikitext
       */
      parseWikiText(wikitext) {
        var _this8 = this;
        return _asyncToGenerator(function* () {
          return wiki_default.parseWikiText(wikitext, _this8.title);
        })();
      }
      /**
       * 编辑页面
       *
       * @param {*} config
       * @param payload
       */
      edit(payload) {
        var _this9 = this;
        return _asyncToGenerator(function* () {
          if (!_this9.editToken) {
            log_default.error("fail_to_get_edittoken");
            return;
          }
          if (!_this9.timestamp && !_this9.isNewPage) {
            log_default.error("fail_to_get_timestamp");
            return;
          }
          return wiki_default.edit({
            title: _this9.title,
            editToken: _this9.editToken,
            ..._this9.timestamp ? {
              timestamp: _this9.timestamp
            } : {},
            ...payload,
            additionalConfig: {
              ..._this9.isNewPage ? {
                createonly: _this9.isNewPage
              } : {}
            }
          });
        })();
      }
    };
    page_default = Page;
  }
});
//! src/Wikiplus/modules/core/notification.js
var Notification;
var notification_default;
var init_notification = __esm({
  "src/Wikiplus/modules/core/notification.js"() {
    "use strict";
    Notification = class {
      constructor() {
        this.init();
      }
      init() {
        $("body").append('<div id="MoeNotification"></div>');
      }
      display(text = "喵~", type = "success", callback = () => {
      }) {
        $("#MoeNotification").append($("<div>").addClass("MoeNotification-notice").addClass("MoeNotification-notice-".concat(type)).append("<span>".concat(text, "</span>")));
        $("#MoeNotification").find(".MoeNotification-notice").last().fadeIn(300);
        this.bind();
        this.clear();
        callback($("#MoeNotification").find(".MoeNotification-notice").last());
      }
      bind() {
        const self2 = this;
        $(".MoeNotification-notice").on("mouseover", function() {
          self2.slideLeft($(this));
        });
      }
      success(text, callback) {
        this.display(text, "success", callback);
      }
      warning(text, callback) {
        this.display(text, "warning", callback);
      }
      error(text, callback) {
        this.display(text, "error", callback);
      }
      clear() {
        if ($(".MoeNotification-notice").length >= 10) {
          $("#MoeNotification").children().first().fadeOut(150, function() {
            $(this).remove();
          });
          setTimeout(this.clear, 300);
        }
      }
      empty(f) {
        $(".MoeNotification-notice").each(function(i) {
          if (typeof f === "function") {
            const ele = $(this);
            setTimeout(() => {
              f(ele);
            }, 200 * i);
          } else {
            $(this).delay(i * 200).fadeOut("fast", function() {
              $(this).remove();
            });
          }
        });
      }
      slideLeft(ele, speed) {
        ele.css("position", "relative");
        ele.animate({
          left: "-200%"
        }, speed || 150, function() {
          $(this).fadeOut("fast", function() {
            $(this).remove();
          });
        });
      }
    };
    notification_default = new Notification();
  }
});
//! src/Wikiplus/modules/utils/sleep.js
var sleep;
var sleep_default;
var init_sleep = __esm({
  "src/Wikiplus/modules/utils/sleep.js"() {
    "use strict";
    sleep = (time) => {
      return new Promise((resolve) => {
        return setTimeout(resolve, time);
      });
    };
    sleep_default = sleep;
  }
});
//! src/Wikiplus/modules/utils/helpers.js
function parseQuery(url) {
  const reg = /(([^?&=]+)(?:=([^?&=]*))*)/g;
  const params = {};
  let match;
  while (match = reg.exec(url)) {
    try {
      params[match[2]] = decodeURIComponent(match[3]);
    } catch {
      params[match[2]] = match[3];
    }
  }
  return params;
}
var init_helpers = __esm({
  "src/Wikiplus/modules/utils/helpers.js"() {
    "use strict";
  }
});
//! src/Wikiplus/modules/core/ui.js
var UI;
var ui_default;
var init_ui = __esm({
  "src/Wikiplus/modules/core/ui.js"() {
    "use strict";
    init_constants();
    init_notification();
    init_i18n();
    init_log();
    init_sleep();
    init_helpers();
    UI = class {
      quickEditPanelVisible = false;
      scrollTop = 0;
      /**
       * 创建居中对话框
       *
       * @param {string} title 窗口标题
       * @param {string | JQuery<HTMLElement>} content 内容
       * @param {*} width 宽度
       * @param {*} callback 回调函数
       */
      createDialogBox(title = "Wikiplus", content = "", width = 600, callback = () => {
      }) {
        if ($(".Wikiplus-InterBox").length > 0) {
          $(".Wikiplus-InterBox").each(function() {
            $(this).remove();
          });
        }
        const clientWidth = window.innerWidth;
        const clientHeight = window.innerHeight;
        const dialogWidth = Math.min(clientWidth, width);
        const dialogBox = $("<div>").addClass("Wikiplus-InterBox").css({
          "margin-left": clientWidth / 2 - dialogWidth / 2,
          top: $(document).scrollTop() + clientHeight * 0.2,
          display: "none"
        }).append($("<div>").addClass("Wikiplus-InterBox-Header").html(title)).append($("<div>").addClass("Wikiplus-InterBox-Content").append(content)).append($("<span>").text("×").addClass("Wikiplus-InterBox-Close"));
        $("body").append(dialogBox);
        $(".Wikiplus-InterBox").width(dialogWidth);
        $(".Wikiplus-InterBox-Close").on("click", function() {
          $(this).parent().fadeOut("fast", function() {
            window.addEventListener("close", window.onbeforeunload = void 0);
            $(this).remove();
          });
        });
        const bindDragging = function(element) {
          element.mousedown((e) => {
            const baseX = e.clientX;
            const baseY = e.clientY;
            const baseOffsetX = element.parent().offset().left;
            const baseOffsetY = element.parent().offset().top;
            $(document).on("mousemove", (e2) => {
              element.parent().css({
                "margin-left": baseOffsetX + e2.clientX - baseX,
                top: baseOffsetY + e2.clientY - baseY
              });
            });
            $(document).on("mouseup", () => {
              element.unbind("mousedown");
              $(document).off("mousemove");
              $(document).off("mouseup");
              bindDragging(element);
            });
          });
        };
        bindDragging($(".Wikiplus-InterBox-Header"));
        $(".Wikiplus-InterBox").fadeIn(500);
        callback();
        return dialogBox;
      }
      /**
       * 在搜索框左侧「更多」菜单内添加按钮
       * Add a button in "More" menu (left of the search bar)
       *
       * @param {string} text 按钮名 Button text
       * @param {string} id 按钮id Button id
       * @return {JQuery<HTMLElement>} button
       */
      addFunctionButton(text, id) {
        let button;
        switch (constants_default.skin) {
          case "minerva":
            button = $("<li>").attr("id", id).addClass("toggle-list-item").append($("<a>").addClass("mw-ui-icon mw-ui-icon-before toggle-list-item__anchor").append($("<span>").attr("href", "javascript:void(0);").addClass("toggle-list-item__label").text(text)));
            break;
          case "moeskin":
            button = $("<li>").addClass("Wikiplus-More-Function-Button").attr("id", id).append($("<a>").attr("href", "javascript:void(0);").text(text));
            break;
          default:
            button = $("<li>").addClass("mw-list-item").addClass("vector-tab-noicon").attr("id", id).append($("<a>").attr("href", "javascript:void(0);").text(text));
        }
        if (constants_default.skin === "minerva" && $("#p-tb").length > 0) {
          $("#p-tb").append(button);
          return $("#".concat(id));
        } else if (constants_default.skin === "moeskin") {
          $(".more-actions-list").first().append(button);
          return $("#".concat(id));
        } else if ($("#p-cactions").length > 0) {
          $("#p-cactions ul").append(button);
          return $("#".concat(id));
        }
        log_default.info(i18n_default.translate("cant_add_funcbtn"));
      }
      /**
       * 插入快速重定向按钮
       *
       * @param {*} onClick
       */
      insertSimpleRedirectButton(onClick = () => {
      }) {
        const button = this.addFunctionButton(i18n_default.translate("redirect_from"), "Wikiplus-SR-Intro");
        if (button) {
          button.on("click", onClick);
        }
      }
      /**
       * 插入设置面板按钮
       *
       * @param {*} onClick
       */
      insertSettingsPanelButton(onClick = () => {
      }) {
        const button = this.addFunctionButton(i18n_default.translate("wikiplus_settings"), "Wikiplus-Settings-Intro");
        if (button) {
          button.on("click", onClick);
        }
      }
      /**
       * 插入顶部快速编辑按钮
       * Insert QuickEdit button besides page edit button.
       *
       * @param onClick
       */
      insertTopQuickEditEntry(onClick) {
        const topBtn = $("<li>").attr("id", "Wikiplus-Edit-TopBtn").attr("class", "mw-list-item");
        const topBtnLink = $("<a>").attr("href", "javascript:void(0)").text("".concat(i18n_default.translate("quickedit_topbtn")));
        topBtn.append(topBtnLink);
        switch (constants_default.skin) {
          case "minerva":
            topBtn.css({
              "align-items": "center",
              display: "flex"
            });
            topBtn.find("span").addClass("page-actions-menu__list-item");
            topBtn.find("a").addClass("mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 mw-ui-icon-with-label-desktop").css("vertical-align", "middle");
            break;
          case "vector-2022":
            topBtn.addClass("vector-tab-noicon");
            break;
          case "vector":
            topBtn.append($("<span>").append(topBtnLink));
            break;
          default:
        }
        $(topBtn).on("click", () => {
          onClick({
            sectionNumber: -1,
            targetPageName: constants_default.currentPageName
          });
        });
        if ($("#ca-edit").length > 0 && $("#Wikiplus-Edit-TopBtn").length === 0) {
          constants_default.skin === "minerva" ? $("#ca-edit").parent().after(topBtn) : $("#ca-edit").after(topBtn);
        }
      }
      /**
       * 插入段落快速编辑按钮
       * Insert QuickEdit buttons for each section.
       *
       * @param onClick
       */
      insertSectionQuickEditEntries(onClick = () => {
      }) {
        const sectionBtn = constants_default.skin === "minerva" ? $("<span>").append($("<a>").addClass("Wikiplus-Edit-SectionBtn mw-ui-icon mw-ui-icon-element mw-ui-icon-wikimedia-edit-base20 edit-page mw-ui-icon-flush-right").css("margin-left", "0.75em").attr("href", "javascript:void(0)").attr("title", i18n_default.translate("quickedit_sectionbtn"))) : $("<span>").append($("<span>").addClass("mw-editsection-divider").text(" | ")).append($("<a>").addClass("Wikiplus-Edit-SectionBtn").attr("href", "javascript:void(0)").text(i18n_default.translate("quickedit_sectionbtn")));
        $(".mw-editsection").each(function(i) {
          try {
            const editURL = $(this).find("a[href*='action=edit']").first().attr("href");
            const sectionNumber = editURL.match(/&[ve]*section\=([^&]+)/)[1].replace(/T-/gi, "");
            const sectionTargetName = decodeURIComponent(editURL.match(/title=(.+?)&/)[1]);
            const cloneNode = $(this).prev().clone();
            cloneNode.find(".mw-headline-number").remove();
            const sectionName = cloneNode.text().trim();
            const _sectionBtn = sectionBtn.clone();
            _sectionBtn.find(".Wikiplus-Edit-SectionBtn").on("click", () => {
              onClick({
                sectionNumber,
                sectionName,
                targetPageName: sectionTargetName
              });
            });
            constants_default.skin === "minerva" ? $(this).append(_sectionBtn) : $(this).find(".mw-editsection-bracket").last().before(_sectionBtn);
          } catch {
            log_default.error("fail_to_init_quickedit");
          }
        });
      }
      /**
       * 插入任意链接编辑入口
       *
       * @param {*} onClick
       */
      insertLinkEditEntries(onClick = () => {
      }) {
        $("#mw-content-text a.external").each(function(i) {
          const url = $(this).attr("href");
          const params = parseQuery(url);
          if (params.action === "edit" && params.title !== void 0 && params.section !== "new") {
            $(this).after($("<a>").attr({
              href: "javascript:void(0)",
              class: "Wikiplus-Edit-EveryWhereBtn"
            }).text("(".concat(i18n_default.translate("quickedit_sectionbtn"), ")")).on("click", () => {
              var _params$section;
              onClick({
                targetPageName: params.title,
                sectionNumber: (_params$section = params.section) !== null && _params$section !== void 0 ? _params$section : -1
              });
            }));
          }
        });
      }
      showQuickEditPanel({
        title = "",
        content = "",
        summary = "",
        onBack = () => {
        },
        onParse = () => {
        },
        onEdit = () => {
        },
        escExit = false
      }) {
        const self2 = this;
        this.scrollTop = $(document).scrollTop();
        if (this.quickEditPanelVisible) {
          this.hideQuickEditPanel();
        }
        this.quickEditPanelVisible = true;
        window.addEventListener("close", window.onbeforeunload = function() {
          return "".concat(i18n_default.translate("onclose_confirm"));
        });
        const isNewPage = $(".noarticletext").length > 0;
        const backBtn = $("<span>").attr("id", "Wikiplus-Quickedit-Back").addClass("Wikiplus-Btn").text("".concat(i18n_default.translate("back")));
        const jumpBtn = $("<span>").attr("id", "Wikiplus-Quickedit-Jump").addClass("Wikiplus-Btn").append($("<a>").attr("href", "#Wikiplus-Quickedit").text("".concat(i18n_default.translate("goto_editbox"))));
        const inputBox = $("<textarea>").attr("id", "Wikiplus-Quickedit");
        const previewBox = $("<div>").attr("id", "Wikiplus-Quickedit-Preview-Output");
        const summaryBox = $("<input>").attr("id", "Wikiplus-Quickedit-Summary-Input").attr("placeholder", "".concat(i18n_default.translate("summary_placehold")));
        const editSubmitBtn = $("<button>").attr("id", "Wikiplus-Quickedit-Submit").text("".concat(i18n_default.translate(isNewPage ? "publish_page" : "publish_change"), "(Ctrl+S)"));
        const previewSubmitBtn = $("<button>").attr("id", "Wikiplus-Quickedit-Preview-Submit").text("".concat(i18n_default.translate("preview")));
        const isMinorEdit = $("<div>").append($("<input>").attr({
          type: "checkbox",
          id: "Wikiplus-Quickedit-MinorEdit"
        })).append($("<label>").attr("for", "Wikiplus-Quickedit-MinorEdit").text("".concat(i18n_default.translate("mark_minoredit"), "(Ctrl+Shift+S)"))).css({
          margin: "5px 5px 5px -3px",
          display: "inline"
        });
        const editBody = $("<div>").append(backBtn, jumpBtn, previewBox, inputBox, summaryBox, $("<br>"), isMinorEdit, editSubmitBtn, previewSubmitBtn);
        this.createDialogBox(title, editBody, 1e3, () => {
          $("#Wikiplus-Quickedit").val(content);
          $("#Wikiplus-Quickedit-Summary-Input").val(summary);
        });
        $("#Wikiplus-Quickedit-Back").on("click", onBack);
        $("#Wikiplus-Quickedit-Preview-Submit").on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const preloadBanner = $("<div>").addClass("Wikiplus-Banner").text("".concat(i18n_default.translate("loading_preview")));
          const wikiText = $("#Wikiplus-Quickedit").val();
          $(this).attr("disabled", "disabled");
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut(100, () => {
            $("#Wikiplus-Quickedit-Preview-Output").html("").append(preloadBanner);
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn(100);
          });
          $("html, body").animate({
            scrollTop: self2.scrollTop
          }, 200);
          const result = yield onParse(wikiText);
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut("100", () => {
            $("#Wikiplus-Quickedit-Preview-Output").html('<hr><div class="mw-body-content">'.concat(result, "</div><hr>"));
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn("100");
            $("#Wikiplus-Quickedit-Preview-Submit").prop("disabled", false);
          });
        }));
        $("#Wikiplus-Quickedit-Submit").on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const timer = Date.now();
          const editBanner = $("<div>").addClass("Wikiplus-Banner").text("".concat(i18n_default.translate("submitting_edit")));
          const payload = {
            summary: $("#Wikiplus-Quickedit-Summary-Input").val(),
            content: $("#Wikiplus-Quickedit").val(),
            isMinorEdit: $("#Wikiplus-Quickedit-MinorEdit").is(":checked")
          };
          $("#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit").attr("disabled", "disabled");
          $("html, body").animate({
            scrollTop: self2.scrollTop
          }, 200);
          $("#Wikiplus-Quickedit-Preview-Output").fadeOut(100, () => {
            $("#Wikiplus-Quickedit-Preview-Output").html("").append(editBanner);
            $("#Wikiplus-Quickedit-Preview-Output").fadeIn(100);
          });
          try {
            yield onEdit(payload);
            const useTime = Date.now() - timer;
            $("#Wikiplus-Quickedit-Preview-Output").find(".Wikiplus-Banner").css("background", "rgba(6, 239, 92, 0.44)");
            $("#Wikiplus-Quickedit-Preview-Output").find(".Wikiplus-Banner").text("".concat(i18n_default.translate("edit_success", [useTime.toString()])));
            window.addEventListener("close", window.onbeforeunload = void 0);
            setTimeout(() => {
              location.reload();
            }, 500);
          } catch (error) {
            console.log(error);
            $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
            $(".Wikiplus-Banner").html(error.message);
          } finally {
            $("#Wikiplus-Quickedit-Submit,#Wikiplus-Quickedit,#Wikiplus-Quickedit-Preview-Submit").prop("disabled", false);
          }
        }));
        $("#Wikiplus-Quickedit,#Wikiplus-Quickedit-Summary-Input,#Wikiplus-Quickedit-MinorEdit").on("keydown", (e) => {
          if (e.ctrlKey && e.which === 83) {
            if (e.shiftKey) {
              $("#Wikiplus-Quickedit-MinorEdit").trigger("click");
            }
            $("#Wikiplus-Quickedit-Submit").trigger("click");
            e.preventDefault();
            e.stopPropagation();
          }
        });
        if (escExit) {
          $(document).on("keydown", (e) => {
            if (e.which === 27) {
              $("#Wikiplus-Quickedit-Back").trigger("click");
            }
          });
        }
      }
      hideQuickEditPanel() {
        this.quickEditPanelVisible = false;
        $(".Wikiplus-InterBox").fadeOut("fast", function() {
          window.addEventListener("close", window.onbeforeunload = void 0);
          $(this).remove();
        });
      }
      /**
       * 显示快速重定向弹窗
       *
       * @param root0
       * @param root0.onEdit
       * @param root0.onSuccess
       */
      showSimpleRedirectPanel({
        onEdit = () => {
        },
        onSuccess = () => {
        }
      } = {}) {
        var _this10 = this;
        const input = $("<input>").addClass("Wikiplus-InterBox-Input");
        const applyBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Apply").text(i18n_default.translate("submit"));
        const cancelBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Cancel").text(i18n_default.translate("cancel"));
        const continueBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-SR-Continue").text(i18n_default.translate("continue"));
        const content = $("<div>").append(input).append($("<hr>")).append(applyBtn).append(cancelBtn);
        const dialog = this.createDialogBox(i18n_default.translate("redirect_desc"), content, 600);
        applyBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const title = $(".Wikiplus-InterBox-Input").val();
          $(".Wikiplus-InterBox-Content").html('<div class="Wikiplus-Banner">'.concat(i18n_default.translate("submitting_edit"), "</div>"));
          try {
            yield onEdit({
              title,
              forceOverwrite: false
            });
            $(".Wikiplus-Banner").text(i18n_default.translate("redirect_saved"));
            _this10.hideSimpleRedirectPanel(dialog);
            onSuccess({
              title
            });
          } catch (error) {
            $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
            $(".Wikiplus-Banner").text(error.message);
            if (error.code === "articleexists") {
              $(".Wikiplus-InterBox-Content").append($("<hr>")).append(continueBtn).append(cancelBtn);
              cancelBtn.on("click", () => {
                _this10.hideSimpleRedirectPanel(dialog);
              });
              continueBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
                $(".Wikiplus-InterBox-Content").html('<div class="Wikiplus-Banner">'.concat(i18n_default.translate("submitting_edit"), "</div>"));
                try {
                  yield onEdit({
                    title,
                    forceOverwrite: true
                  });
                  $(".Wikiplus-Banner").text(i18n_default.translate("redirect_saved"));
                  _this10.hideSimpleRedirectPanel(dialog);
                  onSuccess({
                    title
                  });
                } catch (error2) {
                  $(".Wikiplus-Banner").css("background", "rgba(218, 142, 167, 0.65)");
                  $(".Wikiplus-Banner").text(error2.message);
                }
              }));
            }
          }
        }));
        cancelBtn.on("click", () => {
          this.hideSimpleRedirectPanel(dialog);
        });
      }
      /**
       * 隐藏快速重定向弹窗
       *
       * @param {*} dialog
       */
      hideSimpleRedirectPanel(dialog = $("body")) {
        dialog.find(".Wikiplus-InterBox-Close").trigger("click");
      }
      showSettingsPanel({
        onSubmit = () => {
        }
      } = {}) {
        var _this11 = this;
        const input = $("<textarea>").attr("id", "Wikiplus-Setting-Input").attr("rows", "10");
        const applyBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-Setting-Apply").text(i18n_default.translate("submit"));
        const cancelBtn = $("<div>").addClass("Wikiplus-InterBox-Btn").attr("id", "Wikiplus-Setting-Cancel").text(i18n_default.translate("cancel"));
        const content = $("<div>").append(input).append($("<hr>")).append(applyBtn).append(cancelBtn);
        const dialog = this.createDialogBox(i18n_default.translate("wikiplus_settings_desc"), content, 600, () => {
          if (localStorage.Wikiplus_Settings) {
            $("#Wikiplus-Setting-Input").val(localStorage.Wikiplus_Settings);
            try {
              const settings = JSON.parse(localStorage.Wikiplus_Settings);
              $("#Wikiplus-Setting-Input").val(JSON.stringify(settings, null, 2));
            } catch {
            }
          } else {
            $("#Wikiplus-Setting-Input").attr("placeholder", i18n_default.translate("wikiplus_settings_placeholder"));
          }
        });
        applyBtn.on("click", /* @__PURE__ */ _asyncToGenerator(function* () {
          const savedBanner = $("<div>").addClass("Wikiplus-Banner").text(i18n_default.translate("wikiplus_settings_saved"));
          const settings = $("#Wikiplus-Setting-Input").val();
          try {
            onSubmit({
              settings
            });
            $(".Wikiplus-InterBox-Content").html("").append(savedBanner);
            yield sleep_default(1500);
            _this11.hideSettingsPanel(dialog);
          } catch {
            notification_default.error(i18n_default.translate("wikiplus_settings_grammar_error"));
          }
        }));
        cancelBtn.on("click", () => {
          this.hideSettingsPanel(dialog);
        });
      }
      hideSettingsPanel(dialog = $("body")) {
        dialog.find(".Wikiplus-InterBox-Close").trigger("click");
      }
      bindPreloadEvents(onPreload) {
        $("#toc").children("ul").find("a").each(function(i) {
          $(this).on("mouseover", function() {
            $(this).off("mouseover");
            onPreload({
              sectionNumber: i + 1
            });
          });
        });
      }
    };
    ui_default = new UI();
  }
});
//! src/Wikiplus/modules/utils/settings.js
var Settings;
var settings_default;
var init_settings = __esm({
  "src/Wikiplus/modules/utils/settings.js"() {
    "use strict";
    Settings = class {
      getSetting(key, object = {}) {
        const w = object;
        let settings;
        try {
          settings = JSON.parse(localStorage["Wikiplus_Settings"]);
        } catch {
          return;
        }
        try {
          const customSettingFunction = new Function("return ".concat(settings[key]));
          if (typeof customSettingFunction === "function") {
            try {
              if (customSettingFunction()(w) === true) {
              } else {
                return customSettingFunction()(w) || settings[key];
              }
            } catch {
              return settings[key];
            }
          } else {
            return settings[key];
          }
        } catch {
          try {
            let result = settings[key];
            for (var _i4 = 0, _Object$keys3 = Object.keys(object); _i4 < _Object$keys3.length; _i4++) {
              const key2 = _Object$keys3[_i4];
              result = result.replace("${".concat(key2, "}"), object[key2]);
            }
            return result;
          } catch {
          }
        }
      }
    };
    settings_default = new Settings();
  }
});
//! src/Wikiplus/modules/index.js
var modules_exports = {};
var init_modules = __esm({
  "src/Wikiplus/modules/index.js"() {
    "use strict";
    init_page();
    init_ui();
    init_notification();
    init_wiki();
    init_settings();
    init_log();
    init_constants();
    init_i18n();
    $(/* @__PURE__ */ _asyncToGenerator(function* () {
      const Pages = {};
      const isCurrentPageEmpty = $(".noarticletext").length > 0 && constants_default.articleId === 0;
      const getPage = /* @__PURE__ */ function() {
        var _ref7 = _asyncToGenerator(function* ({
          revisionId: revisionId2,
          title
        }) {
          if (Pages[revisionId2]) {
            return Pages[revisionId2];
          }
          const newPage = new page_default({
            revisionId: revisionId2,
            title
          });
          yield newPage.init();
          Pages[revisionId2] = newPage;
          return Pages[revisionId2];
        });
        return function getPage2(_x) {
          return _ref7.apply(this, arguments);
        };
      }();
      log_default.info("Wikiplus now loading. Version: ".concat(constants_default.version));
      if (!window.mw) {
        console.log("Mediawiki JavaScript not loaded or not a Mediawiki website.");
        return;
      }
      if (!constants_default.userGroups.includes("autoconfirmed") && !constants_default.userGroups.includes("confirmed")) {
        notification_default.error(i18n_default.translate("not_autoconfirmed_user"));
        log_default.info(i18n_default.translate("not_autoconfirmed_user"));
        return;
      }
      if (!constants_default.isArticle || constants_default.action !== "view") {
        log_default.info("Not an editable page. Stop initialization.");
        return;
      }
      window._WikiplusPages = Pages;
      const currentPageName = constants_default.currentPageName;
      const revisionId = constants_default.revisionId;
      const currentPage = yield getPage({
        revisionId,
        title: currentPageName
      });
      const handleQuickEditButtonClicked = /* @__PURE__ */ function() {
        var _ref8 = _asyncToGenerator(function* ({
          sectionNumber,
          sectionName,
          targetPageName
        } = {}) {
          const isOtherPage = targetPageName !== currentPageName;
          if (isOtherPage && constants_default.latestRevisionId !== constants_default.revisionId) {
            log_default.error("cross_page_history_revision_edit_warning");
            return;
          }
          const revisionId2 = isOtherPage ? yield wiki_default.getLatestRevisionIdForPage(targetPageName) : constants_default.revisionId;
          const page = yield getPage({
            revisionId: revisionId2,
            title: targetPageName
          });
          const customSummary = settings_default.getSetting("defaultSummary", {
            sectionName,
            sectionNumber,
            sectionTargetName: targetPageName
          });
          const summary = customSummary || (sectionName ? "/* ".concat(sectionName, " */ ").concat(i18n_default.translate("default_summary_suffix")) : i18n_default.translate("default_summary_suffix"));
          const timer = setTimeout(() => {
            notification_default.success(i18n_default.translate("loading"));
          }, 200);
          const sectionContent = yield page.getWikiText({
            section: sectionNumber
          });
          const isEditHistoryRevision = !isOtherPage && constants_default.latestRevisionId !== constants_default.revisionId;
          const escToExit = settings_default.getSetting("esc_to_exit_quickedit") === true || // 兼容老设置key
          settings_default.getSetting("esc_to_exit_quickedit") === "true" || settings_default.getSetting("escToExitQuickEdit") === true || settings_default.getSetting("escToExitQuickEdit") === "true";
          const customEditTags = settings_default.getSetting("custom_edit_tags");
          const defaultEditTags = [];
          const editTags = customEditTags !== null && customEditTags !== void 0 && customEditTags.length ? customEditTags : defaultEditTags;
          clearTimeout(timer);
          notification_default.empty();
          if (isEditHistoryRevision) {
            notification_default.warning(i18n_default.translate("history_edit_warning"));
          }
          const shouldShowCreatePageTip = isOtherPage ? !revisionId2 : isCurrentPageEmpty;
          ui_default.showQuickEditPanel({
            title: "".concat(i18n_default.translate("quickedit_topbtn")).concat(isEditHistoryRevision ? i18n_default.translate("history_edit_warning") : ""),
            content: shouldShowCreatePageTip ? i18n_default.translate("create_page_tip") : sectionContent,
            summary,
            onBack: ui_default.hideQuickEditPanel,
            onParse: (wikiText) => {
              return page.parseWikiText(wikiText);
            },
            onEdit: function() {
              var _ref9 = _asyncToGenerator(function* ({
                content,
                summary: summary2,
                isMinorEdit
              }) {
                const editPayload = {
                  content,
                  config: {
                    summary: summary2,
                    ...sectionNumber === -1 ? {} : {
                      section: sectionNumber
                    },
                    ...editTags.length ? {
                      tags: editTags.join("|")
                    } : {}
                  }
                };
                if (isMinorEdit) {
                  editPayload.config.minor = "true";
                } else {
                  editPayload.config.notminor = "true";
                }
                yield page.edit(editPayload);
              });
              return function onEdit(_x2) {
                return _ref9.apply(this, arguments);
              };
            }(),
            escExit: escToExit
          });
        });
        return function handleQuickEditButtonClicked2() {
          return _ref8.apply(this, arguments);
        };
      }();
      const handleSimpleRedirectButtonClicked = /* @__PURE__ */ function() {
        var _ref10 = _asyncToGenerator(function* () {
          ui_default.showSimpleRedirectPanel({
            onEdit: function() {
              var _ref11 = _asyncToGenerator(function* ({
                title,
                forceOverwrite = false
              }) {
                const page = yield getPage({
                  title
                });
                const currentPageName2 = constants_default.currentPageName;
                const payload = {
                  content: "#REDIRECT [[".concat(currentPageName2, "]]"),
                  config: {
                    summary: i18n_default.translate("redirect_from_summary", [title, currentPageName2])
                  }
                };
                if (!forceOverwrite) {
                  payload.config.createonly = "true";
                }
                yield page.edit(payload);
              });
              return function onEdit(_x3) {
                return _ref11.apply(this, arguments);
              };
            }(),
            onSuccess: ({
              title
            }) => {
              location.href = constants_default.articlePath.replace(/\$1/gi, title);
            }
          });
        });
        return function handleSimpleRedirectButtonClicked2() {
          return _ref10.apply(this, arguments);
        };
      }();
      const handleSettingsButtonClicked = /* @__PURE__ */ function() {
        var _ref12 = _asyncToGenerator(function* () {
          ui_default.showSettingsPanel({
            onSubmit: ({
              settings
            }) => {
              JSON.parse(settings);
              localStorage.setItem("Wikiplus_Settings", settings);
            }
          });
        });
        return function handleSettingsButtonClicked2() {
          return _ref12.apply(this, arguments);
        };
      }();
      const handlePreload = /* @__PURE__ */ function() {
        var _ref13 = _asyncToGenerator(function* ({
          sectionNumber
        }) {
          yield currentPage.getWikiText({
            section: sectionNumber
          });
        });
        return function handlePreload2(_x4) {
          return _ref13.apply(this, arguments);
        };
      }();
      ui_default.insertTopQuickEditEntry(handleQuickEditButtonClicked);
      ui_default.insertSectionQuickEditEntries(handleQuickEditButtonClicked);
      ui_default.insertLinkEditEntries(handleQuickEditButtonClicked);
      ui_default.insertSimpleRedirectButton(handleSimpleRedirectButtonClicked);
      ui_default.insertSettingsPanelButton(handleSettingsButtonClicked);
      ui_default.bindPreloadEvents(handlePreload);
    }));
  }
});
//! src/Wikiplus/Wikiplus.ts
_asyncToGenerator(function* () {
  const {
    wgAction,
    wgIsArticle
  } = mw.config.get();
  if (wgAction !== "view" || !wgIsArticle) {
    return;
  }
  const {
    "visualeditor-enable": isVeEnable
  } = mw.user.options.get();
  const loader = /* @__PURE__ */ function() {
    var _ref15 = _asyncToGenerator(function* () {
      yield Promise.resolve().then(() => (init_modules(), modules_exports));
    });
    return function loader2() {
      return _ref15.apply(this, arguments);
    };
  }();
  if (isVeEnable) {
    yield mw.loader.using("ext.visualEditor.core");
  }
  void loader();
})();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGguanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4wL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnVybC1zZWFyY2gtcGFyYW1zLmRlbGV0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjAvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudXJsLXNlYXJjaC1wYXJhbXMuaGFzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMC9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi51cmwtc2VhcmNoLXBhcmFtcy5zaXplLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL2NvbnN0YW50cy5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9yZXF1ZXN0cy5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9pMThuLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL2xvZy5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy9zZXJ2aWNlcy93aWtpLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL2NvcmUvcGFnZS5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy9jb3JlL25vdGlmaWNhdGlvbi5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9zbGVlcC5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9oZWxwZXJzLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL2NvcmUvdWkuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvc2V0dGluZ3MuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvaW5kZXguanMiLCAic3JjL1dpa2lwbHVzL1dpa2lwbHVzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFRoaXNbbmFtZXNwYWNlXSkgOiBnbG9iYWxUaGlzW25hbWVzcGFjZV0gJiYgZ2xvYmFsVGhpc1tuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG52YXIgbmF2aWdhdG9yID0gZ2xvYmFsVGhpcy5uYXZpZ2F0b3I7XG52YXIgdXNlckFnZW50ID0gbmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gdXNlckFnZW50ID8gU3RyaW5nKHVzZXJBZ2VudCkgOiAnJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsVGhpcy5wcm9jZXNzO1xudmFyIERlbm8gPSBnbG9iYWxUaGlzLkRlbm87XG52YXIgdmVyc2lvbnMgPSBwcm9jZXNzICYmIHByb2Nlc3MudmVyc2lvbnMgfHwgRGVubyAmJiBEZW5vLnZlcnNpb247XG52YXIgdjggPSB2ZXJzaW9ucyAmJiB2ZXJzaW9ucy52ODtcbnZhciBtYXRjaCwgdmVyc2lvbjtcblxuaWYgKHY4KSB7XG4gIG1hdGNoID0gdjguc3BsaXQoJy4nKTtcbiAgLy8gaW4gb2xkIENocm9tZSwgdmVyc2lvbnMgb2YgVjggaXNuJ3QgVjggPSBDaHJvbWUgLyAxMFxuICAvLyBidXQgdGhlaXIgY29ycmVjdCB2ZXJzaW9ucyBhcmUgbm90IGludGVyZXN0aW5nIGZvciB1c1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gPiAwICYmIG1hdGNoWzBdIDwgNCA/IDEgOiArKG1hdGNoWzBdICsgbWF0Y2hbMV0pO1xufVxuXG4vLyBCcm93c2VyRlMgTm9kZUpTIGBwcm9jZXNzYCBwb2x5ZmlsbCBpbmNvcnJlY3RseSBzZXQgYC52OGAgdG8gYDAuMGBcbi8vIHNvIGNoZWNrIGB1c2VyQWdlbnRgIGV2ZW4gaWYgYC52OGAgZXhpc3RzLCBidXQgMFxuaWYgKCF2ZXJzaW9uICYmIHVzZXJBZ2VudCkge1xuICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLyhcXGQrKS8pO1xuICBpZiAoIW1hdGNoIHx8IG1hdGNoWzFdID49IDc0KSB7XG4gICAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0Nocm9tZVxcLyhcXGQrKS8pO1xuICAgIGlmIChtYXRjaCkgdmVyc2lvbiA9ICttYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb247XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciAkU3RyaW5nID0gZ2xvYmFsVGhpcy5TdHJpbmc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgc3ltYm9sID0gU3ltYm9sKCdzeW1ib2wgZGV0ZWN0aW9uJyk7XG4gIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gIC8vIGBnZXQtb3duLXByb3BlcnR5LXN5bWJvbHNgIHBvbHlmaWxsIHN5bWJvbHMgY29udmVydGVkIHRvIG9iamVjdCBhcmUgbm90IFN5bWJvbCBpbnN0YW5jZXNcbiAgLy8gbmI6IERvIG5vdCBjYWxsIGBTdHJpbmdgIGRpcmVjdGx5IHRvIGF2b2lkIHRoaXMgYmVpbmcgb3B0aW1pemVkIG91dCB0byBgc3ltYm9sKycnYCB3aGljaCB3aWxsLFxuICAvLyBvZiBjb3Vyc2UsIGZhaWwuXG4gIHJldHVybiAhJFN0cmluZyhzeW1ib2wpIHx8ICEoT2JqZWN0KHN5bWJvbCkgaW5zdGFuY2VvZiBTeW1ib2wpIHx8XG4gICAgLy8gQ2hyb21lIDM4LTQwIHN5bWJvbHMgYXJlIG5vdCBpbmhlcml0ZWQgZnJvbSBET00gY29sbGVjdGlvbnMgcHJvdG90eXBlcyB0byBpbnN0YW5jZXNcbiAgICAhU3ltYm9sLnNoYW0gJiYgVjhfVkVSU0lPTiAmJiBWOF9WRVJTSU9OIDwgNDE7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MXG4gICYmICFTeW1ib2wuc2hhbVxuICAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc1Byb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufSA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgJFN5bWJvbCA9IGdldEJ1aWx0SW4oJ1N5bWJvbCcpO1xuICByZXR1cm4gaXNDYWxsYWJsZSgkU3ltYm9sKSAmJiBpc1Byb3RvdHlwZU9mKCRTeW1ib2wucHJvdG90eXBlLCAkT2JqZWN0KGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB0cnkge1xuICAgIHJldHVybiAkU3RyaW5nKGFyZ3VtZW50KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gJ09iamVjdCc7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciB0cnlUb1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90cnktdG8tc3RyaW5nJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBJc0NhbGxhYmxlKGFyZ3VtZW50KSBpcyB0cnVlYFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzQ2FsbGFibGUoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKHRyeVRvU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGFDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLWNhbGxhYmxlJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxuLy8gYEdldE1ldGhvZGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoViwgUCkge1xuICB2YXIgZnVuYyA9IFZbUF07XG4gIHJldHVybiBpc051bGxPclVuZGVmaW5lZChmdW5jKSA/IHVuZGVmaW5lZCA6IGFDYWxsYWJsZShmdW5jKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBPcmRpbmFyeVRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb3JkaW5hcnl0b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChwcmVmID09PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoaXNDYWxsYWJsZShmbiA9IGlucHV0LnZhbHVlT2YpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAocHJlZiAhPT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgdHJ5IHtcbiAgICBkZWZpbmVQcm9wZXJ0eShnbG9iYWxUaGlzLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFRoaXNba2V5XSA9IHZhbHVlO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpc1tTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG4oc3RvcmUudmVyc2lvbnMgfHwgKHN0b3JlLnZlcnNpb25zID0gW10pKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMzguMCcsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI0IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuMzguMC9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSB8fCB7fSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4wLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbFRoaXMuU3ltYm9sO1xudmFyIFdlbGxLbm93blN5bWJvbHNTdG9yZSA9IHNoYXJlZCgnd2tzJyk7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2xbJ2ZvciddIHx8IFN5bWJvbCA6IFN5bWJvbCAmJiBTeW1ib2wud2l0aG91dFNldHRlciB8fCB1aWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgaWYgKCFoYXNPd24oV2VsbEtub3duU3ltYm9sc1N0b3JlLCBuYW1lKSkge1xuICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IE5BVElWRV9TWU1CT0wgJiYgaGFzT3duKFN5bWJvbCwgbmFtZSlcbiAgICAgID8gU3ltYm9sW25hbWVdXG4gICAgICA6IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciBvcmRpbmFyeVRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBUT19QUklNSVRJVkUgPSB3ZWxsS25vd25TeW1ib2woJ3RvUHJpbWl0aXZlJyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSB8fCBpc1N5bWJvbChpbnB1dCkpIHJldHVybiBpbnB1dDtcbiAgdmFyIGV4b3RpY1RvUHJpbSA9IGdldE1ldGhvZChpbnB1dCwgVE9fUFJJTUlUSVZFKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKGV4b3RpY1RvUHJpbSkge1xuICAgIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnZGVmYXVsdCc7XG4gICAgcmVzdWx0ID0gY2FsbChleG90aWNUb1ByaW0sIGlucHV0LCBwcmVmKTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlc3VsdCkgfHwgaXNTeW1ib2wocmVzdWx0KSkgcmV0dXJuIHJlc3VsdDtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbiAgfVxuICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ251bWJlcic7XG4gIHJldHVybiBvcmRpbmFyeVRvUHJpbWl0aXZlKGlucHV0LCBwcmVmKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xuXG4vLyBgVG9Qcm9wZXJ0eUtleWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgJ3N0cmluZycpO1xuICByZXR1cm4gaXNTeW1ib2woa2V5KSA/IGtleSA6IGtleSArICcnO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWxUaGlzLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rcyB0byBJRTggZm9yIGl0cyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXNPd24oTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIWNhbGwocHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUuZiwgTywgUCksIE9bUF0pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBWOCB+IENocm9tZSAzNi1cbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMzMzRcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgJiYgZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAncHJvdG90eXBlJywge1xuICAgIHZhbHVlOiA0MixcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSkucHJvdG90eXBlICE9PSA0Mjtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyICRTdHJpbmcgPSBTdHJpbmc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogVHlwZShhcmd1bWVudCkgaXMgT2JqZWN0YFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGlzT2JqZWN0KGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcigkU3RyaW5nKGFyZ3VtZW50KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3Y4LXByb3RvdHlwZS1kZWZpbmUtYnVnJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcm9wZXJ0eS1rZXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgRU5VTUVSQUJMRSA9ICdlbnVtZXJhYmxlJztcbnZhciBDT05GSUdVUkFCTEUgPSAnY29uZmlndXJhYmxlJztcbnZhciBXUklUQUJMRSA9ICd3cml0YWJsZSc7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmICh0eXBlb2YgTyA9PT0gJ2Z1bmN0aW9uJyAmJiBQID09PSAncHJvdG90eXBlJyAmJiAndmFsdWUnIGluIEF0dHJpYnV0ZXMgJiYgV1JJVEFCTEUgaW4gQXR0cmlidXRlcyAmJiAhQXR0cmlidXRlc1tXUklUQUJMRV0pIHtcbiAgICB2YXIgY3VycmVudCA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gICAgaWYgKGN1cnJlbnQgJiYgY3VycmVudFtXUklUQUJMRV0pIHtcbiAgICAgIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgICAgQXR0cmlidXRlcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiBDT05GSUdVUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbQ09ORklHVVJBQkxFXSA6IGN1cnJlbnRbQ09ORklHVVJBQkxFXSxcbiAgICAgICAgZW51bWVyYWJsZTogRU5VTUVSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tFTlVNRVJBQkxFXSA6IGN1cnJlbnRbRU5VTUVSQUJMRV0sXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG4gIH0gcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbn0gOiAkZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9Qcm9wZXJ0eUtleShQKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IG5ldyAkVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldERlc2NyaXB0b3IgPSBERVNDUklQVE9SUyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG52YXIgRVhJU1RTID0gaGFzT3duKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpO1xuLy8gYWRkaXRpb25hbCBwcm90ZWN0aW9uIGZyb20gbWluaWZpZWQgLyBtYW5nbGVkIC8gZHJvcHBlZCBmdW5jdGlvbiBuYW1lc1xudmFyIFBST1BFUiA9IEVYSVNUUyAmJiAoZnVuY3Rpb24gc29tZXRoaW5nKCkgeyAvKiBlbXB0eSAqLyB9KS5uYW1lID09PSAnc29tZXRoaW5nJztcbnZhciBDT05GSUdVUkFCTEUgPSBFWElTVFMgJiYgKCFERVNDUklQVE9SUyB8fCAoREVTQ1JJUFRPUlMgJiYgZ2V0RGVzY3JpcHRvcihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKS5jb25maWd1cmFibGUpKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEVYSVNUUzogRVhJU1RTLFxuICBQUk9QRVI6IFBST1BFUixcbiAgQ09ORklHVVJBQkxFOiBDT05GSUdVUkFCTEVcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhGdW5jdGlvbi50b1N0cmluZyk7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgY29yZS1qc0AzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICghaXNDYWxsYWJsZShzdG9yZS5pbnNwZWN0U291cmNlKSkge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcoaXQpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlLmluc3BlY3RTb3VyY2U7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsVGhpcy5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQ2FsbGFibGUoV2Vha01hcCkgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFN0cmluZyhXZWFrTWFwKSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24nKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbFRoaXMuVHlwZUVycm9yO1xudmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCB8fCBzaGFyZWQuc3RhdGUpIHtcbiAgdmFyIHN0b3JlID0gc2hhcmVkLnN0YXRlIHx8IChzaGFyZWQuc3RhdGUgPSBuZXcgV2Vha01hcCgpKTtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzdG9yZS5nZXQgPSBzdG9yZS5nZXQ7XG4gIHN0b3JlLmhhcyA9IHN0b3JlLmhhcztcbiAgc3RvcmUuc2V0ID0gc3RvcmUuc2V0O1xuICAvKiBlc2xpbnQtZW5hYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChzdG9yZS5oYXMoaXQpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBzdG9yZS5zZXQoaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5nZXQoaXQpIHx8IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuaGFzKGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKGhhc093bihpdCwgU1RBVEUpKSB0aHJvdyBuZXcgVHlwZUVycm9yKE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEKTtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoaXQsIFNUQVRFLCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSkgPyBpdFtTVEFURV0gOiB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXQsXG4gIGdldDogZ2V0LFxuICBoYXM6IGhhcyxcbiAgZW5mb3JjZTogZW5mb3JjZSxcbiAgZ2V0dGVyRm9yOiBnZXR0ZXJGb3Jcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1uYW1lJykuQ09ORklHVVJBQkxFO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgJFN0cmluZyA9IFN0cmluZztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xudmFyIHJlcGxhY2UgPSB1bmN1cnJ5VGhpcygnJy5yZXBsYWNlKTtcbnZhciBqb2luID0gdW5jdXJyeVRoaXMoW10uam9pbik7XG5cbnZhciBDT05GSUdVUkFCTEVfTEVOR1RIID0gREVTQ1JJUFRPUlMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ2xlbmd0aCcsIHsgdmFsdWU6IDggfSkubGVuZ3RoICE9PSA4O1xufSk7XG5cbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxudmFyIG1ha2VCdWlsdEluID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsdWUsIG5hbWUsIG9wdGlvbnMpIHtcbiAgaWYgKHN0cmluZ1NsaWNlKCRTdHJpbmcobmFtZSksIDAsIDcpID09PSAnU3ltYm9sKCcpIHtcbiAgICBuYW1lID0gJ1snICsgcmVwbGFjZSgkU3RyaW5nKG5hbWUpLCAvXlN5bWJvbFxcKChbXildKilcXCkuKiQvLCAnJDEnKSArICddJztcbiAgfVxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdldHRlcikgbmFtZSA9ICdnZXQgJyArIG5hbWU7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuc2V0dGVyKSBuYW1lID0gJ3NldCAnICsgbmFtZTtcbiAgaWYgKCFoYXNPd24odmFsdWUsICduYW1lJykgfHwgKENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FICYmIHZhbHVlLm5hbWUgIT09IG5hbWUpKSB7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCB7IHZhbHVlOiBuYW1lLCBjb25maWd1cmFibGU6IHRydWUgfSk7XG4gICAgZWxzZSB2YWx1ZS5uYW1lID0gbmFtZTtcbiAgfVxuICBpZiAoQ09ORklHVVJBQkxFX0xFTkdUSCAmJiBvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnYXJpdHknKSAmJiB2YWx1ZS5sZW5ndGggIT09IG9wdGlvbnMuYXJpdHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ2xlbmd0aCcsIHsgdmFsdWU6IG9wdGlvbnMuYXJpdHkgfSk7XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAob3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2NvbnN0cnVjdG9yJykgJiYgb3B0aW9ucy5jb25zdHJ1Y3Rvcikge1xuICAgICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgJ3Byb3RvdHlwZScsIHsgd3JpdGFibGU6IGZhbHNlIH0pO1xuICAgIC8vIGluIFY4IH4gQ2hyb21lIDUzLCBwcm90b3R5cGVzIG9mIHNvbWUgbWV0aG9kcywgbGlrZSBgQXJyYXkucHJvdG90eXBlLnZhbHVlc2AsIGFyZSBub24td3JpdGFibGVcbiAgICB9IGVsc2UgaWYgKHZhbHVlLnByb3RvdHlwZSkgdmFsdWUucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHZhciBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgaWYgKCFoYXNPd24oc3RhdGUsICdzb3VyY2UnKSkge1xuICAgIHN0YXRlLnNvdXJjZSA9IGpvaW4oVEVNUExBVEUsIHR5cGVvZiBuYW1lID09ICdzdHJpbmcnID8gbmFtZSA6ICcnKTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuXG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRlbmQtbmF0aXZlIC0tIHJlcXVpcmVkXG5GdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcgPSBtYWtlQnVpbHRJbihmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUodGhpcykgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0sICd0b1N0cmluZycpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zLmVudW1lcmFibGU7XG4gIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5hbWUgOiBrZXk7XG4gIGlmIChpc0NhbGxhYmxlKHZhbHVlKSkgbWFrZUJ1aWx0SW4odmFsdWUsIG5hbWUsIG9wdGlvbnMpO1xuICBpZiAob3B0aW9ucy5nbG9iYWwpIHtcbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZUdsb2JhbFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIW9wdGlvbnMudW5zYWZlKSBkZWxldGUgT1trZXldO1xuICAgICAgZWxzZSBpZiAoT1trZXldKSBzaW1wbGUgPSB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgICBlbHNlIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogIW9wdGlvbnMubm9uQ29uZmlndXJhYmxlLFxuICAgICAgd3JpdGFibGU6ICFvcHRpb25zLm5vbldyaXRhYmxlXG4gICAgfSk7XG4gIH0gcmV0dXJuIE87XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYE1hdGgudHJ1bmNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXRoLnRydW5jXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tbWF0aC10cnVuYyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGgudHJ1bmMgfHwgZnVuY3Rpb24gdHJ1bmMoeCkge1xuICB2YXIgbiA9ICt4O1xuICByZXR1cm4gKG4gPiAwID8gZmxvb3IgOiBjZWlsKShuKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRydW5jID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21hdGgtdHJ1bmMnKTtcblxuLy8gYFRvSW50ZWdlck9ySW5maW5pdHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2ludGVnZXJvcmluZmluaXR5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbnVtYmVyID0gK2FyZ3VtZW50O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4gbnVtYmVyICE9PSBudW1iZXIgfHwgbnVtYmVyID09PSAwID8gMCA6IHRydW5jKG51bWJlcik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyT3JJbmZpbml0eShpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBsZW4gPSB0b0ludGVnZXJPckluZmluaXR5KGFyZ3VtZW50KTtcbiAgcmV0dXJuIGxlbiA+IDAgPyBtaW4obGVuLCAweDFGRkZGRkZGRkZGRkZGKSA6IDA7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xuXG4vLyBgTGVuZ3RoT2ZBcnJheUxpa2VgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1sZW5ndGhvZmFycmF5bGlrZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0b0xlbmd0aChvYmoubGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IGxlbmd0aE9mQXJyYXlMaWtlKE8pO1xuICAgIGlmIChsZW5ndGggPT09IDApIHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9PSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgICAgaWYgKHZhbHVlICE9PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhc093bihoaWRkZW5LZXlzLCBrZXkpICYmIGhhc093bihPLCBrZXkpICYmIHB1c2gocmVzdWx0LCBrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzT3duKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHB1c2gocmVzdWx0LCBrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIElFOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICdjb25zdHJ1Y3RvcicsXG4gICdoYXNPd25Qcm9wZXJ0eScsXG4gICdpc1Byb3RvdHlwZU9mJyxcbiAgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJyxcbiAgJ3RvTG9jYWxlU3RyaW5nJyxcbiAgJ3RvU3RyaW5nJyxcbiAgJ3ZhbHVlT2YnXG5dO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG5cbnZhciBjb25jYXQgPSB1bmN1cnJ5VGhpcyhbXS5jb25jYXQpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8gY29uY2F0KGtleXMsIGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSwgZXhjZXB0aW9ucykge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhc093bih0YXJnZXQsIGtleSkgJiYgIShleGNlcHRpb25zICYmIGhhc093bihleGNlcHRpb25zLCBrZXkpKSkge1xuICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgIH1cbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT09IE5BVElWRSA/IGZhbHNlXG4gICAgOiBpc0NhbGxhYmxlKGRldGVjdGlvbikgPyBmYWlscyhkZXRlY3Rpb24pXG4gICAgOiAhIWRldGVjdGlvbjtcbn07XG5cbnZhciBub3JtYWxpemUgPSBpc0ZvcmNlZC5ub3JtYWxpemUgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyaW5nKS5yZXBsYWNlKHJlcGxhY2VtZW50LCAnLicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgZGF0YSA9IGlzRm9yY2VkLmRhdGEgPSB7fTtcbnZhciBOQVRJVkUgPSBpc0ZvcmNlZC5OQVRJVkUgPSAnTic7XG52YXIgUE9MWUZJTEwgPSBpc0ZvcmNlZC5QT0xZRklMTCA9ICdQJztcblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZvcmNlZDtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgICAgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5kb250Q2FsbEdldFNldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiAgb3B0aW9ucy5uYW1lICAgICAgICAgICAtIHRoZSAubmFtZSBvZiB0aGUgZnVuY3Rpb24gaWYgaXQgZG9lcyBub3QgbWF0Y2ggdGhlIGtleVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHNvdXJjZSkge1xuICB2YXIgVEFSR0VUID0gb3B0aW9ucy50YXJnZXQ7XG4gIHZhciBHTE9CQUwgPSBvcHRpb25zLmdsb2JhbDtcbiAgdmFyIFNUQVRJQyA9IG9wdGlvbnMuc3RhdDtcbiAgdmFyIEZPUkNFRCwgdGFyZ2V0LCBrZXksIHRhcmdldFByb3BlcnR5LCBzb3VyY2VQcm9wZXJ0eSwgZGVzY3JpcHRvcjtcbiAgaWYgKEdMT0JBTCkge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXM7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXNbVEFSR0VUXSAmJiBnbG9iYWxUaGlzW1RBUkdFVF0ucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09PSAnQXJyYXknO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIFNhZmFyaSA8IDEzIGRvZXMgbm90IHRocm93IGFuIGVycm9yIGluIHRoaXMgY2FzZVxudmFyIFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA9IERFU0NSSVBUT1JTICYmICFmdW5jdGlvbiAoKSB7XG4gIC8vIG1ha2VzIG5vIHNlbnNlIHdpdGhvdXQgcHJvcGVyIHN0cmljdCBtb2RlIHN1cHBvcnRcbiAgaWYgKHRoaXMgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkubGVuZ3RoID0gMTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPyBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIGlmIChpc0FycmF5KE8pICYmICFnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgJ2xlbmd0aCcpLndyaXRhYmxlKSB7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBzZXQgcmVhZCBvbmx5IC5sZW5ndGgnKTtcbiAgfSByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59IDogZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93ICRUeXBlRXJyb3IoJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCcpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgc2V0QXJyYXlMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2V0LWxlbmd0aCcpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIElOQ09SUkVDVF9UT19MRU5HVEggPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbXS5wdXNoLmNhbGwoeyBsZW5ndGg6IDB4MTAwMDAwMDAwIH0sIDEpICE9PSA0Mjk0OTY3Mjk3O1xufSk7XG5cbi8vIFY4IDw9IDEyMSBhbmQgU2FmYXJpIDw9IDE1LjQ7IEZGIDwgMjMgdGhyb3dzIEludGVybmFsRXJyb3Jcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTEyNjgxXG52YXIgcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLnB1c2goKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn07XG5cbnZhciBGT1JDRUQgPSBJTkNPUlJFQ1RfVE9fTEVOR1RIIHx8ICFwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGgoKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5wdXNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnB1c2hcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBwdXNoOiBmdW5jdGlvbiBwdXNoKGl0ZW0pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgYXJnQ291bnQgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihsZW4gKyBhcmdDb3VudCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdDb3VudDsgaSsrKSB7XG4gICAgICBPW2xlbl0gPSBhcmd1bWVudHNbaV07XG4gICAgICBsZW4rKztcbiAgICB9XG4gICAgc2V0QXJyYXlMZW5ndGgoTywgbGVuKTtcbiAgICByZXR1cm4gbGVuO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIHRlc3QgPSB7fTtcblxudGVzdFtUT19TVFJJTkdfVEFHXSA9ICd6JztcblxubW9kdWxlLmV4cG9ydHMgPSBTdHJpbmcodGVzdCkgPT09ICdbb2JqZWN0IHpdJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgVE9fU1RSSU5HX1RBR19TVVBQT1JUID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZy10YWctc3VwcG9ydCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBjbGFzc29mUmF3ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQ09SUkVDVF9BUkdVTUVOVFMgPSBjbGFzc29mUmF3KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxufTtcblxuLy8gZ2V0dGluZyB0YWcgZnJvbSBFUzYrIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYFxubW9kdWxlLmV4cG9ydHMgPSBUT19TVFJJTkdfVEFHX1NVUFBPUlQgPyBjbGFzc29mUmF3IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCB0YWcsIHJlc3VsdDtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKHRhZyA9IHRyeUdldChPID0gJE9iamVjdChpdCksIFRPX1NUUklOR19UQUcpKSA9PSAnc3RyaW5nJyA/IHRhZ1xuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQ09SUkVDVF9BUkdVTUVOVFMgPyBjbGFzc29mUmF3KE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKHJlc3VsdCA9IGNsYXNzb2ZSYXcoTykpID09PSAnT2JqZWN0JyAmJiBpc0NhbGxhYmxlKE8uY2FsbGVlKSA/ICdBcmd1bWVudHMnIDogcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mJyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoY2xhc3NvZihhcmd1bWVudCkgPT09ICdTeW1ib2wnKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCBhIFN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZycpO1xuICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChwYXNzZWQsIHJlcXVpcmVkKSB7XG4gIGlmIChwYXNzZWQgPCByZXF1aXJlZCkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ05vdCBlbm91Z2ggYXJndW1lbnRzJyk7XG4gIHJldHVybiBwYXNzZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGgnKTtcblxudmFyICRVUkxTZWFyY2hQYXJhbXMgPSBVUkxTZWFyY2hQYXJhbXM7XG52YXIgVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlID0gJFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGU7XG52YXIgYXBwZW5kID0gdW5jdXJyeVRoaXMoVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlLmFwcGVuZCk7XG52YXIgJGRlbGV0ZSA9IHVuY3VycnlUaGlzKFVSTFNlYXJjaFBhcmFtc1Byb3RvdHlwZVsnZGVsZXRlJ10pO1xudmFyIGZvckVhY2ggPSB1bmN1cnJ5VGhpcyhVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUuZm9yRWFjaCk7XG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xudmFyIHBhcmFtcyA9IG5ldyAkVVJMU2VhcmNoUGFyYW1zKCdhPTEmYT0yJmI9MycpO1xuXG5wYXJhbXNbJ2RlbGV0ZSddKCdhJywgMSk7XG4vLyBgdW5kZWZpbmVkYCBjYXNlIGlzIGEgQ2hyb21pdW0gMTE3IGJ1Z1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MTQyMjJcbnBhcmFtc1snZGVsZXRlJ10oJ2InLCB1bmRlZmluZWQpO1xuXG5pZiAocGFyYW1zICsgJycgIT09ICdhPTInKSB7XG4gIGRlZmluZUJ1aWx0SW4oVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlLCAnZGVsZXRlJywgZnVuY3Rpb24gKG5hbWUgLyogLCB2YWx1ZSAqLykge1xuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciAkdmFsdWUgPSBsZW5ndGggPCAyID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzFdO1xuICAgIGlmIChsZW5ndGggJiYgJHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiAkZGVsZXRlKHRoaXMsIG5hbWUpO1xuICAgIHZhciBlbnRyaWVzID0gW107XG4gICAgZm9yRWFjaCh0aGlzLCBmdW5jdGlvbiAodiwgaykgeyAvLyBhbHNvIHZhbGlkYXRlcyBgdGhpc2BcbiAgICAgIHB1c2goZW50cmllcywgeyBrZXk6IGssIHZhbHVlOiB2IH0pO1xuICAgIH0pO1xuICAgIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoKGxlbmd0aCwgMSk7XG4gICAgdmFyIGtleSA9IHRvU3RyaW5nKG5hbWUpO1xuICAgIHZhciB2YWx1ZSA9IHRvU3RyaW5nKCR2YWx1ZSk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgZGluZGV4ID0gMDtcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICB2YXIgZW50cmllc0xlbmd0aCA9IGVudHJpZXMubGVuZ3RoO1xuICAgIHZhciBlbnRyeTtcbiAgICB3aGlsZSAoaW5kZXggPCBlbnRyaWVzTGVuZ3RoKSB7XG4gICAgICBlbnRyeSA9IGVudHJpZXNbaW5kZXgrK107XG4gICAgICBpZiAoZm91bmQgfHwgZW50cnkua2V5ID09PSBrZXkpIHtcbiAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAkZGVsZXRlKHRoaXMsIGVudHJ5LmtleSk7XG4gICAgICB9IGVsc2UgZGluZGV4Kys7XG4gICAgfVxuICAgIHdoaWxlIChkaW5kZXggPCBlbnRyaWVzTGVuZ3RoKSB7XG4gICAgICBlbnRyeSA9IGVudHJpZXNbZGluZGV4KytdO1xuICAgICAgaWYgKCEoZW50cnkua2V5ID09PSBrZXkgJiYgZW50cnkudmFsdWUgPT09IHZhbHVlKSkgYXBwZW5kKHRoaXMsIGVudHJ5LmtleSwgZW50cnkudmFsdWUpO1xuICAgIH1cbiAgfSwgeyBlbnVtZXJhYmxlOiB0cnVlLCB1bnNhZmU6IHRydWUgfSk7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgdmFsaWRhdGVBcmd1bWVudHNMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdmFsaWRhdGUtYXJndW1lbnRzLWxlbmd0aCcpO1xuXG52YXIgJFVSTFNlYXJjaFBhcmFtcyA9IFVSTFNlYXJjaFBhcmFtcztcbnZhciBVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUgPSAkVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZTtcbnZhciBnZXRBbGwgPSB1bmN1cnJ5VGhpcyhVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUuZ2V0QWxsKTtcbnZhciAkaGFzID0gdW5jdXJyeVRoaXMoVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlLmhhcyk7XG52YXIgcGFyYW1zID0gbmV3ICRVUkxTZWFyY2hQYXJhbXMoJ2E9MScpO1xuXG4vLyBgdW5kZWZpbmVkYCBjYXNlIGlzIGEgQ2hyb21pdW0gMTE3IGJ1Z1xuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MTQyMjJcbmlmIChwYXJhbXMuaGFzKCdhJywgMikgfHwgIXBhcmFtcy5oYXMoJ2EnLCB1bmRlZmluZWQpKSB7XG4gIGRlZmluZUJ1aWx0SW4oVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlLCAnaGFzJywgZnVuY3Rpb24gaGFzKG5hbWUgLyogLCB2YWx1ZSAqLykge1xuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciAkdmFsdWUgPSBsZW5ndGggPCAyID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzFdO1xuICAgIGlmIChsZW5ndGggJiYgJHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiAkaGFzKHRoaXMsIG5hbWUpO1xuICAgIHZhciB2YWx1ZXMgPSBnZXRBbGwodGhpcywgbmFtZSk7IC8vIGFsc28gdmFsaWRhdGVzIGB0aGlzYFxuICAgIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoKGxlbmd0aCwgMSk7XG4gICAgdmFyIHZhbHVlID0gdG9TdHJpbmcoJHZhbHVlKTtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHdoaWxlIChpbmRleCA8IHZhbHVlcy5sZW5ndGgpIHtcbiAgICAgIGlmICh2YWx1ZXNbaW5kZXgrK10gPT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICB9IHJldHVybiBmYWxzZTtcbiAgfSwgeyBlbnVtZXJhYmxlOiB0cnVlLCB1bnNhZmU6IHRydWUgfSk7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIG1ha2VCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4nKTtcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcikge1xuICBpZiAoZGVzY3JpcHRvci5nZXQpIG1ha2VCdWlsdEluKGRlc2NyaXB0b3IuZ2V0LCBuYW1lLCB7IGdldHRlcjogdHJ1ZSB9KTtcbiAgaWYgKGRlc2NyaXB0b3Iuc2V0KSBtYWtlQnVpbHRJbihkZXNjcmlwdG9yLnNldCwgbmFtZSwgeyBzZXR0ZXI6IHRydWUgfSk7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eS5mKHRhcmdldCwgbmFtZSwgZGVzY3JpcHRvcik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGRlZmluZUJ1aWx0SW5BY2Nlc3NvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4tYWNjZXNzb3InKTtcblxudmFyIFVSTFNlYXJjaFBhcmFtc1Byb3RvdHlwZSA9IFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGU7XG52YXIgZm9yRWFjaCA9IHVuY3VycnlUaGlzKFVSTFNlYXJjaFBhcmFtc1Byb3RvdHlwZS5mb3JFYWNoKTtcblxuLy8gYFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuc2l6ZWAgZ2V0dGVyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL3VybC9wdWxsLzczNFxuaWYgKERFU0NSSVBUT1JTICYmICEoJ3NpemUnIGluIFVSTFNlYXJjaFBhcmFtc1Byb3RvdHlwZSkpIHtcbiAgZGVmaW5lQnVpbHRJbkFjY2Vzc29yKFVSTFNlYXJjaFBhcmFtc1Byb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBzaXplKCkge1xuICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgIGZvckVhY2godGhpcywgZnVuY3Rpb24gKCkgeyBjb3VudCsrOyB9KTtcbiAgICAgIHJldHVybiBjb3VudDtcbiAgICB9LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuIiwgImNsYXNzIENvbnN0YW50cyB7XG5cdHZlcnNpb24gPSAnNC4wLjEyJztcblx0Z2V0IGlzQXJ0aWNsZSgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnSXNBcnRpY2xlJyk7XG5cdH1cblx0Z2V0IGN1cnJlbnRQYWdlTmFtZSgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC8gL2csICdfJyk7XG5cdH1cblx0Z2V0IGFydGljbGVJZCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZUlkJyk7XG5cdH1cblx0Z2V0IHJldmlzaW9uSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1JldmlzaW9uSWQnKTtcblx0fVxuXHRnZXQgbGF0ZXN0UmV2aXNpb25JZCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnQ3VyUmV2aXNpb25JZCcpO1xuXHR9XG5cdGdldCBhcnRpY2xlUGF0aCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZVBhdGgnKTtcblx0fVxuXHRnZXQgc2NyaXB0UGF0aCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0UGF0aCcpO1xuXHR9XG5cdGdldCBhY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0FjdGlvbicpO1xuXHR9XG5cdGdldCBza2luKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnc2tpbicpO1xuXHR9XG5cdGdldCB1c2VyR3JvdXBzKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dVc2VyR3JvdXBzJyk7XG5cdH1cblx0Z2V0IHdpa2lJZCgpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnV2lraUlEJyk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbnN0YW50cygpO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmNvbnN0IFJlcXVlc3RzID0ge1xuXHRiYXNlOiBgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdH0ke0NvbnN0YW50cy5zY3JpcHRQYXRofS9hcGkucGhwYCxcblx0YXN5bmMgZ2V0KHF1ZXJ5KSB7XG5cdFx0Y29uc3QgdXJsID0gbmV3IFVSTChSZXF1ZXN0cy5iYXNlKTtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhxdWVyeSkpIHtcblx0XHRcdHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgcXVlcnlba2V5XSk7XG5cdFx0fVxuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG5cdFx0XHRjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0J0FwaS1Vc2VyLUFnZW50JzogYFdpa2lwbHVzLyR7Q29uc3RhbnRzLnZlcnNpb259ICgke0NvbnN0YW50cy53aWtpSWR9KWAsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdH0sXG5cdGFzeW5jIHBvc3QocGF5bG9hZCkge1xuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwoUmVxdWVzdHMuYmFzZSk7XG5cdFx0Y29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHBheWxvYWQpKSB7XG5cdFx0XHRmb3JtLmFwcGVuZChrZXksIHZhbHVlKTtcblx0XHR9XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0Ym9keTogZm9ybSxcblx0XHRcdGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQXBpLVVzZXItQWdlbnQnOiBgV2lraXBsdXMvJHtDb25zdGFudHMudmVyc2lvbn0gKCR7Q29uc3RhbnRzLndpa2lJZH0pYCxcblx0XHRcdH0sXG5cdFx0fSk7XG5cdFx0cmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RzO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5jbGFzcyBJMThuIHtcblx0bGFuZ3VhZ2U7XG5cdGkxOG5EYXRhID0ge307XG5cdHNlc3Npb25VcGRhdGVMb2cgPSBbXTtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0bGV0IGxhbmd1YWdlO1xuXHRcdHRyeSB7XG5cdFx0XHRsYW5ndWFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlWydXaWtpcGx1c19TZXR0aW5ncyddKVsnbGFuZ3VhZ2UnXSB8fCBuYXZpZ2F0b3IubGFuZ3VhZ2UudG9Mb3dlckNhc2UoKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdGxhbmd1YWdlID0gKG5hdmlnYXRvci5sYW5ndWFnZSB8fCBuYXZpZ2F0b3IuYnJvd3Nlckxhbmd1YWdlKVxuXHRcdFx0XHQucmVwbGFjZSgvaGFuW3N0XS0/L2ksICcnKSAvLyBmb3IgbGFuZ3VhZ2VzIGxpa2UgemgtSGFucy1DTlxuXHRcdFx0XHQudG9Mb3dlckNhc2UoKTtcblx0XHR9XG5cdFx0dGhpcy5sYW5ndWFnZSA9IGxhbmd1YWdlO1xuXHRcdC8vIE1lcmdlIHdpdGggbG9jYWxTdG9yYWdlIGkxOG4gY2FjaGVcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgaTE4bkNhY2hlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnV2lraXBsdXNfaTE4bkNhY2hlJykpO1xuXHRcdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoaTE4bkNhY2hlKSkge1xuXHRcdFx0XHR0aGlzLmkxOG5EYXRhW2tleV0gPSBpMThuQ2FjaGVba2V5XTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdC8vIEZhaWwgdG8gcGFyc2UgaTE4biBjYWNoZSwgcmVzZXRcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdXaWtpcGx1c19pMThuQ2FjaGUnLCAne30nKTtcblx0XHR9XG5cdH1cblx0dHJhbnNsYXRlKGtleSwgcGxhY2Vob2xkZXJzID0gW10pIHtcblx0XHRsZXQgcmVzdWx0ID0gJyc7XG5cdFx0aWYgKHRoaXMubGFuZ3VhZ2UgaW4gdGhpcy5pMThuRGF0YSkge1xuXHRcdFx0aWYgKGtleSBpbiB0aGlzLmkxOG5EYXRhW3RoaXMubGFuZ3VhZ2VdKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHRoaXMuaTE4bkRhdGFbdGhpcy5sYW5ndWFnZV1ba2V5XTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHRyeSB1cGRhdGUgbGFuZ3VhZ2UgdmVyaXNvblxuXHRcdFx0XHR0aGlzLmxvYWRMYW5ndWFnZSh0aGlzLmxhbmd1YWdlKTtcblx0XHRcdFx0aWYgKGtleSBpbiB0aGlzLmkxOG5EYXRhWydlbi11cyddKSB7XG5cdFx0XHRcdFx0Ly8gRmFsbGJhY2sgdG8gRW5nbGlzaFxuXHRcdFx0XHRcdHJlc3VsdCA9IHRoaXMuaTE4bkRhdGFbJ2VuLXVzJ11ba2V5XTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXN1bHQgPSBrZXk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5sb2FkTGFuZ3VhZ2UodGhpcy5sYW5ndWFnZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHBsYWNlaG9sZGVycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRmb3IgKGNvbnN0IFtpbmRleCwgcGxhY2Vob2xkZXJdIG9mIHBsYWNlaG9sZGVycy5lbnRyaWVzKCkpIHtcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoYCQke2luZGV4ICsgMX1gLCBwbGFjZWhvbGRlcik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblx0YXN5bmMgbG9hZExhbmd1YWdlKGxhbmd1YWdlKSB7XG5cdFx0aWYgKHRoaXMuc2Vzc2lvblVwZGF0ZUxvZy5pbmNsdWRlcyhsYW5ndWFnZSkpIHtcblx0XHRcdC8vIEhhcyBiZWVuIHVwZGF0ZWQgdGhpcyBzZXNzaW9uLlxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCAoXG5cdFx0XHRcdGF3YWl0IGZldGNoKFxuXHRcdFx0XHRcdGBodHRwczovL2dpdGNkbi5xaXV3ZW4ubmV0LmNuL0ludGVyZmFjZUFkbWluL1dpa2lwbHVzL3Jhdy9icmFuY2gvZGV2L2xhbmd1YWdlcy8ke2xhbmd1YWdlfS5qc29uYFxuXHRcdFx0XHQpXG5cdFx0XHQpLmpzb24oKTtcblx0XHRcdGNvbnN0IG5vd1ZlcnNpb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnV2lraXBsdXNfTGFuZ3VhZ2VWZXJzaW9uJykgfHwgJzAwMCc7XG5cdFx0XHR0aGlzLnNlc3Npb25VcGRhdGVMb2cucHVzaChsYW5ndWFnZSk7XG5cdFx0XHRpZiAocmVzcG9uc2UuX192ZXJzaW9uICE9PSBub3dWZXJzaW9uIHx8ICEobGFuZ3VhZ2UgaW4gdGhpcy5pMThuRGF0YSkpIHtcblx0XHRcdFx0Ly8gTGFuZ3VhZ2UgZ2V0IHVwZGF0ZWRcblx0XHRcdFx0Y29uc29sZS5pbmZvKGBVcGRhdGUgJHtsYW5ndWFnZX0gc3VwcG9ydCB0byB2ZXJzaW9uICR7cmVzcG9uc2UuX192ZXJzaW9ufWApO1xuXHRcdFx0XHR0aGlzLmkxOG5EYXRhW2xhbmd1YWdlXSA9IHJlc3BvbnNlO1xuXHRcdFx0XHQvLyBVcGRhdGUgbG9jYWxTdG9yYWdlIGNhY2hlXG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdXaWtpcGx1c19pMThuQ2FjaGUnLCBKU09OLnN0cmluZ2lmeSh0aGlzLmkxOG5EYXRhKSk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHQvLyBVbnN1cHBvcnRlZCBsYW5ndWFnZVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgSTE4bigpO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgaTE4biBmcm9tICcuL2kxOG4nO1xuXG5jbGFzcyBXaWtpcGx1c0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlLCBjb2RlKSB7XG5cdFx0c3VwZXIobWVzc2FnZSk7XG5cdFx0dGhpcy5jb2RlID0gY29kZTtcblx0fVxufVxuXG5jb25zdCBMb2cgPSB7XG5cdGRlYnVnKG1lc3NhZ2UgPSAnJykge1xuXHRcdGNvbnNvbGUuZGVidWcoYFtXaWtpcGx1cy1ERUJVR10gJHttZXNzYWdlfWApO1xuXHR9LFxuXHRpbmZvKG1lc3NhZ2UgPSAnJykge1xuXHRcdGNvbnNvbGUuaW5mbyhgW1dpa2lwbHVzLUlORk9dICR7bWVzc2FnZX1gKTtcblx0fSxcblx0ZXJyb3IoZXJyb3JDb2RlLCBwYXlsb2FkcyA9IFtdKSB7XG5cdFx0bGV0IHRlbXBsYXRlID0gaTE4bi50cmFuc2xhdGUoZXJyb3JDb2RlKTtcblx0XHRpZiAocGF5bG9hZHMubGVuZ3RoID4gMCkge1xuXHRcdFx0Ly8gRmlsbFxuXHRcdFx0Zm9yIChjb25zdCBbaSwgdl0gb2YgcGF5bG9hZHMuZW50cmllcygpKSB7XG5cdFx0XHRcdHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShuZXcgUmVnRXhwKGBcXFxcJHtpICsgMX1gLCAnaWcnKSwgdik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNvbnNvbGUuZXJyb3IoYFtXaWtpcGx1cy1FUlJPUl0gJHt0ZW1wbGF0ZX1gKTtcblx0XHR0aHJvdyBuZXcgV2lraXBsdXNFcnJvcihgJHt0ZW1wbGF0ZX1gLCBlcnJvckNvZGUpO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9nO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgcmVxdWVzdHMgZnJvbSAnLi4vdXRpbHMvcmVxdWVzdHMnO1xuaW1wb3J0IExvZyBmcm9tICcuLi91dGlscy9sb2cnO1xuaW1wb3J0IGkxOG4gZnJvbSAnLi4vdXRpbHMvaTE4bic7XG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5cbmNsYXNzIFdpa2kge1xuXHRwYWdlSW5mb0NhY2hlID0ge307XG5cdC8qKlxuXHQgKiDojrflvpcgRWRpdCBUb2tlblxuXHQgKiBHZXQgRWRpdCBUb2tlblxuXHQgKlxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxuXHQgKi9cblx0YXN5bmMgZ2V0RWRpdFRva2VuKCkge1xuXHRcdC8vIOWwneivleS7jiBBUEkg6I635b6XIEVkaXRUb2tlblxuXHRcdC8vIFRyeSB0byBnZXQgRWRpdFRva2VuIGZyb20gQVBJXG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5nZXQoe1xuXHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHR9KTtcblx0XHRpZiAoXG5cdFx0XHRyZXNwb25zZS5xdWVyeSAmJlxuXHRcdFx0cmVzcG9uc2UucXVlcnkudG9rZW5zICYmXG5cdFx0XHRyZXNwb25zZS5xdWVyeS50b2tlbnMuY3NyZnRva2VuICYmXG5cdFx0XHRyZXNwb25zZS5xdWVyeS50b2tlbnMuY3NyZnRva2VuICE9PSAnK1xcXFwnXG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2UucXVlcnkudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHR9XG5cdFx0cmV0dXJuIExvZy5lcnJvcignZmFpbF90b19nZXRfZWRpdHRva2VuJyk7XG5cdH1cblx0LyoqXG5cdCAqIOiOt+W+l+mhtemdouS4iuS4gOeJiOacrOaXtumXtOaIs1xuXHQgKiBHZXQgdGhlIHRpbWVzdGFtcCBvZiB0aGUgbGFzdCByZXZpc2lvbiBvZiBwYWdlIHNwZWNpZmllZC5cblx0ICpcblx0ICogQHBhcmFtIHtwYXJhbXMuc3RyaW5nfSB0aXRsZSDpobXpnaLlkI0gLyBQYWdlbmFtZVxuXHQgKiBAcGFyYW0ge3BhcmFtcy5yZXZpc2lvbklkfSByZXZpc2lvbklkIOS/ruiuoueJiOacrOWPtyAvIFJldmlzaW9uIElEXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG5cdCAqL1xuXHRhc3luYyBnZXRQYWdlSW5mbyh7dGl0bGUsIHJldmlzaW9uSWR9KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRcdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdFx0XHRwcm9wOiAncmV2aXNpb25zfGluZm8nLFxuXHRcdFx0XHRydnByb3A6ICd0aW1lc3RhbXB8aWRzJyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHR9O1xuXHRcdFx0aWYgKHJldmlzaW9uSWQpIHtcblx0XHRcdFx0cGFyYW1zLnJldmlkcyA9IHJldmlzaW9uSWQ7XG5cdFx0XHR9IGVsc2UgaWYgKHRpdGxlKSB7XG5cdFx0XHRcdGlmICh0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdKSB7XG5cdFx0XHRcdFx0Ly8gSGl0IGNhY2hlXG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdHRpbWVzdGFtcDogdGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXS50aW1lc3RhbXAsXG5cdFx0XHRcdFx0XHRyZXZpc2lvbklkOiB0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdLnJldmlkLFxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblx0XHRcdFx0cGFyYW1zLnRpdGxlcyA9IHRpdGxlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5nZXQocGFyYW1zKTtcblx0XHRcdGlmIChyZXNwb25zZS5xdWVyeSAmJiByZXNwb25zZS5xdWVyeS5wYWdlcykge1xuXHRcdFx0XHRpZiAoT2JqZWN0LmtleXMocmVzcG9uc2UucXVlcnkucGFnZXMpWzBdID09PSAnLTEnKSB7XG5cdFx0XHRcdFx0Ly8g5LiN5a2Y5Zyo6L+Z5LiA6aG16Z2iXG5cdFx0XHRcdFx0Ly8gUGFnZSBub3QgZm91bmQuXG5cdFx0XHRcdFx0cmV0dXJuIHt9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHBhZ2VJbmZvID0gcmVzcG9uc2UucXVlcnkucGFnZXNbT2JqZWN0LmtleXMocmVzcG9uc2UucXVlcnkucGFnZXMpWzBdXS5yZXZpc2lvbnNbMF07XG5cdFx0XHRcdGlmICh0aXRsZSkge1xuXHRcdFx0XHRcdHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0gPSBwYWdlSW5mbztcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHRpbWVzdGFtcDogcGFnZUluZm8udGltZXN0YW1wLFxuXHRcdFx0XHRcdHJldmlzaW9uSWQ6IHBhZ2VJbmZvLnJldmlkLFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2dldF9lZGl0dG9rZW4nKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIOiOt+W+l+mhtemdoueahCBXaWtpdGV4dFxuXHQgKiBHZXQgd2lraXRleHQgb2YgdGhlIHBhZ2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSB0aXRsZVxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcucmV2aXNpb25JZCDniYjmnKzlj7dcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zZWN0aW9uIOauteiQveWPt1xuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IHdpa2l0ZXh05YaF5a65XG5cdCAqL1xuXHRhc3luYyBnZXRXaWtpVGV4dCh7c2VjdGlvbiwgcmV2aXNpb25JZH0pIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCAoXG5cdFx0XHRcdGF3YWl0IGZldGNoKFxuXHRcdFx0XHRcdGAke2xvY2F0aW9uLnByb3RvY29sfS8vJHtsb2NhdGlvbi5ob3N0fSR7Q29uc3RhbnRzLnNjcmlwdFBhdGh9L2luZGV4LnBocD9vbGRpZD0ke3JldmlzaW9uSWR9JnNlY3Rpb249JHtzZWN0aW9ufSZhY3Rpb249cmF3YFxuXHRcdFx0XHQpXG5cdFx0XHQpLnRleHQoKTtcblx0XHRcdHJldHVybiByZXNwb25zZTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdExvZy5lcnJvcignZmFpbF90b19nZXRfd2lraXRleHQnKTtcblx0XHR9XG5cdH1cblx0LyoqXG5cdCAqIOino+aekCBXaWtpdGV4dFxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gd2lraXRleHQgd2lraXRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIOmhtemdouagh+mimFxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIOiuvue9rlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IOino+aekOe7k+aenCBIVE1MXG5cdCAqL1xuXHRhc3luYyBwYXJzZVdpa2lUZXh0KHdpa2l0ZXh0LCB0aXRsZSA9ICcnLCBjb25maWcgPSB7fSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLnBvc3Qoe1xuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0YWN0aW9uOiAncGFyc2UnLFxuXHRcdFx0XHR0ZXh0OiB3aWtpdGV4dCxcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdHBzdDogJ3RydWUnLFxuXHRcdFx0fSk7XG5cdFx0XHRpZiAocmVzcG9uc2UucGFyc2UgJiYgcmVzcG9uc2UucGFyc2UudGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UucGFyc2UudGV4dFsnKiddO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0TG9nLmVycm9yKCdjYW50X3BhcnNlX3dpa2l0ZXh0Jyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOe8lui+kemhtemdolxuXHQgKlxuXHQgKiBAcGFyYW0gcm9vdDBcblx0ICogQHBhcmFtIHJvb3QwLnRpdGxlXG5cdCAqIEBwYXJhbSByb290MC5jb250ZW50XG5cdCAqIEBwYXJhbSByb290MC5lZGl0VG9rZW5cblx0ICogQHBhcmFtIHJvb3QwLnRpbWVzdGFtcFxuXHQgKiBAcGFyYW0gcm9vdDAuY29uZmlnXG5cdCAqIEBwYXJhbSByb290MC5hZGRpdGlvbmFsQ29uZmlnXG5cdCAqL1xuXHRhc3luYyBlZGl0KHt0aXRsZSwgY29udGVudCwgZWRpdFRva2VuLCB0aW1lc3RhbXAsIGNvbmZpZyA9IHt9LCBhZGRpdGlvbmFsQ29uZmlnID0ge319ID0ge30pIHtcblx0XHRsZXQgcmVzcG9uc2U7XG5cdFx0dHJ5IHtcblx0XHRcdHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdHMucG9zdCh7XG5cdFx0XHRcdGFjdGlvbjogJ2VkaXQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0dGV4dDogY29udGVudCxcblx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdHRva2VuOiBlZGl0VG9rZW4sXG5cdFx0XHRcdC4uLih0aW1lc3RhbXAgPyB7YmFzZXRpbWVzdGFtcDogdGltZXN0YW1wfSA6IHt9KSxcblx0XHRcdFx0Li4uY29uZmlnLFxuXHRcdFx0XHQuLi5hZGRpdGlvbmFsQ29uZmlnLFxuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRMb2cuZXJyb3IoJ25ldHdvcmtfZWRpdF9lcnJvcicpO1xuXHRcdH1cblx0XHRpZiAocmVzcG9uc2UuZWRpdCkge1xuXHRcdFx0aWYgKHJlc3BvbnNlLmVkaXQucmVzdWx0ID09PSAnU3VjY2VzcycpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAocmVzcG9uc2UuZWRpdC5jb2RlKSB7XG5cdFx0XHRcdC8vIEFidXNlIEZpbHRlclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYFxuICAgICAgICAgICAgICAgICAgICAgICAgJHtpMThuLnRyYW5zbGF0ZSgnaGl0X2FidXNlZmlsdGVyJyl9OiR7cmVzcG9uc2UuZWRpdC5pbmZvLnJlcGxhY2UoJy9IaXQgQWJ1c2VGaWx0ZXI6IC9pZycsICcnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IHNtYWxsZXI7XCI+JHtyZXNwb25zZS5lZGl0Lndhcm5pbmd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0TG9nLmVycm9yKCd1bmtub3duX2VkaXRfZXJyb3InKTtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHJlc3BvbnNlLmVycm9yICYmIHJlc3BvbnNlLmVycm9yLmNvZGUpIHtcblx0XHRcdExvZy5lcnJvcihyZXNwb25zZS5lcnJvci5jb2RlKTtcblx0XHR9IGVsc2UgaWYgKHJlc3BvbnNlLmNvZGUpIHtcblx0XHRcdExvZy5lcnJvcihyZXNwb25zZS5jb2RlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0TG9nLmVycm9yKCd1bmtub3duX2VkaXRfZXJyb3InKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog6I635b6X5oyH5a6a6aG16Z2i5pyA5paw5L+u6K6i57yW5Y+3XG5cdCAqIEdldCBsYXRlc3QgcmV2aXNpb25JZCBvZiBhIHBhZ2UuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gdGl0bGVcblx0ICovXG5cdGFzeW5jIGdldExhdGVzdFJldmlzaW9uSWRGb3JQYWdlKHRpdGxlKSB7XG5cdFx0Y29uc3Qge3JldmlzaW9uSWR9ID0gYXdhaXQgdGhpcy5nZXRQYWdlSW5mbyh7dGl0bGV9KTtcblx0XHRyZXR1cm4gcmV2aXNpb25JZDtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgV2lraSgpO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgV2lraSBmcm9tICcuLi9zZXJ2aWNlcy93aWtpJztcbmltcG9ydCBMb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztcblxuY2xhc3MgUGFnZSB7XG5cdHRpbWVzdGFtcDtcblx0ZWRpdFRva2VuO1xuXHR0aXRsZTtcblx0cmV2aXNpb25JZDtcblxuXHRpbml0ZWQgPSBmYWxzZTtcblx0aXNOZXdQYWdlID0gZmFsc2U7XG5cblx0c2VjdGlvbkNhY2hlID0ge307XG5cblx0LyoqXG5cdCAqIEBwYXJhbSB7cGFyYW1zLnRpdGxlfSDpobXpnaLmoIfpopggUGFnZSBOYW1lIChvcHRpb25hbClcblx0ICogQHBhcmFtIHtwYXJhbXMucmV2aXNpb25JZH0g6aG16Z2i5L+u6K6i57yW5Y+3IFJldmlzaW9uIElkXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcih7dGl0bGUsIHJldmlzaW9uSWR9KSB7XG5cdFx0dGhpcy50aXRsZSA9IHRpdGxlO1xuXHRcdHRoaXMucmV2aXNpb25JZCA9IHJldmlzaW9uSWQ7XG5cdFx0dGhpcy5pc05ld1BhZ2UgPSAhcmV2aXNpb25JZDtcblx0fVxuXG5cdC8qKlxuXHQgKiDliJ3lp4vljJYg6I635b6X6aG16Z2iRWRpdFRva2Vu5ZKM5Yid5aeLVGltZVN0YW1wXG5cdCAqIEluaXRpYWxpemF0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gZWRpdFRva2VuIChvcHRpb25hbCkg5aaC5p6c5o+Q5L6b5LqGZWRpdFRva2Vu77yM5bCG5LiN5Lya5YaN6I635Y+WXG5cdCAqL1xuXHRhc3luYyBpbml0KHtlZGl0VG9rZW4gPSAnJ30gPSB7fSkge1xuXHRcdGNvbnN0IHByb21pc2VBcnIgPSBbdGhpcy5nZXRUaW1lc3RhbXAoKV07XG5cdFx0aWYgKCFlZGl0VG9rZW4pIHtcblx0XHRcdHByb21pc2VBcnIucHVzaCh0aGlzLmdldEVkaXRUb2tlbigpKTtcblx0XHR9XG5cdFx0YXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZUFycik7XG5cdFx0dGhpcy5pbml0ZWQgPSB0cnVlO1xuXHRcdExvZy5pbmZvKGBQYWdlIGluaXRpYWxpemF0aW9uIGZvciAke3RoaXMudGl0bGV9IyR7dGhpcy5yZXZpc2lvbklkfSBmaW5pc2hlZC5gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpcgRWRpdFRva2VuXG5cdCAqIEdldCBFZGl0VG9rZW5cblx0ICovXG5cdGFzeW5jIGdldEVkaXRUb2tlbigpIHtcblx0XHRhd2FpdCBtdy5sb2FkZXIudXNpbmcoJ21lZGlhd2lraS51c2VyJyk7XG5cdFx0aWYgKG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJykgJiYgbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKSAhPT0gJytcXFxcJykge1xuXHRcdFx0Ly8g5aaC5p6cIE1lZGlhV2lraSBKYXZhU2NyaXB0IEFQSSDlj6/ku6Xnm7TmjqXojrflvpcgRWRpdFRva2VuIOWImeebtOaOpei/lOWbnlxuXHRcdFx0Ly8gUmV0dXJuIEVkaXRUb2tlbiByZXRyaWV2ZWQgZnJvbSBNZWRpYVdpa2kgSmF2YVNjcmlwdCBBUEkgaWYgYWNjZXNzaWJsZVxuXHRcdFx0dGhpcy5lZGl0VG9rZW4gPSBtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyDku45BUEnojrflvpdFZGl0VG9rZW5cblx0XHQvLyBHZXQgRWRpdFRva2VuIGZyb20gTWVkaWFXaWtpIEFQSVxuXHRcdHRoaXMuZWRpdFRva2VuID0gYXdhaXQgV2lraS5nZXRFZGl0VG9rZW4oKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDojrflvpfnvJbovpHln7rlh4bml7bpl7TmiLNcblx0ICogR2V0IEJhc2UgVGltZXN0YW1wXG5cdCAqL1xuXHRhc3luYyBnZXRUaW1lc3RhbXAoKSB7XG5cdFx0Y29uc3Qge3RpbWVzdGFtcCwgcmV2aXNpb25JZH0gPSBhd2FpdCBXaWtpLmdldFBhZ2VJbmZvKHtcblx0XHRcdHJldmlzaW9uSWQ6IHRoaXMucmV2aXNpb25JZCxcblx0XHRcdHRpdGxlOiB0aGlzLnRpdGxlLFxuXHRcdH0pO1xuXHRcdHRoaXMudGltZXN0YW1wID0gdGltZXN0YW1wO1xuXHRcdGlmIChyZXZpc2lvbklkKSB7XG5cdFx0XHR0aGlzLnJldmlzaW9uSWQgPSByZXZpc2lvbklkO1xuXHRcdFx0dGhpcy5pc05ld1BhZ2UgPSBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog6I635b6XIFdpa2lUZXh0XG5cdCAqXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5zZWN0aW9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcucmV2aXNpb25JZFxuXHQgKi9cblx0YXN5bmMgZ2V0V2lraVRleHQoe3NlY3Rpb24gPSAnJ30gPSB7fSkge1xuXHRcdGNvbnN0IHNlYyA9IHNlY3Rpb24gPT09IC0xID8gJycgOiBzZWN0aW9uO1xuXHRcdGlmICh0aGlzLnNlY3Rpb25DYWNoZVtzZWNdKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zZWN0aW9uQ2FjaGVbc2VjXTtcblx0XHR9XG5cdFx0Y29uc3Qgd2lraVRleHQgPSBhd2FpdCBXaWtpLmdldFdpa2lUZXh0KHtcblx0XHRcdHNlY3Rpb246IHNlYyxcblx0XHRcdHJldmlzaW9uSWQ6IHRoaXMucmV2aXNpb25JZCxcblx0XHR9KTtcblx0XHRMb2cuaW5mbyhgV2lraXRleHQgb2YgJHt0aGlzLnRpdGxlfSMke3NlY3Rpb259IGZldGNoZWQuYCk7XG5cdFx0dGhpcy5zZWN0aW9uQ2FjaGVbc2VjXSA9IHdpa2lUZXh0O1xuXHRcdHJldHVybiB3aWtpVGV4dDtcblx0fVxuXG5cdC8qKlxuXHQgKiDop6PmnpAgV2lraVRleHRcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHdpa2l0ZXh0XG5cdCAqL1xuXHRhc3luYyBwYXJzZVdpa2lUZXh0KHdpa2l0ZXh0KSB7XG5cdFx0cmV0dXJuIFdpa2kucGFyc2VXaWtpVGV4dCh3aWtpdGV4dCwgdGhpcy50aXRsZSk7XG5cdH1cblxuXHQvKipcblx0ICog57yW6L6R6aG16Z2iXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gY29uZmlnXG5cdCAqIEBwYXJhbSBwYXlsb2FkXG5cdCAqL1xuXHRhc3luYyBlZGl0KHBheWxvYWQpIHtcblx0XHRpZiAoIXRoaXMuZWRpdFRva2VuKSB7XG5cdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X2VkaXR0b2tlbicpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMudGltZXN0YW1wICYmICF0aGlzLmlzTmV3UGFnZSkge1xuXHRcdFx0Ly8g5aaC5p6c5LiN5piv5Yib5bu65paw6aG16Z2iIOWPiOayoeacieWfuuWHhuaXtumXtOaIsyDliJnmnInlj6/og73pgKDmiJDnvJbovpHopobnm5Yg5L+d6Zmp6LW36KeB55u05o6l5ouS57udXG5cdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X3RpbWVzdGFtcCcpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRyZXR1cm4gV2lraS5lZGl0KHtcblx0XHRcdHRpdGxlOiB0aGlzLnRpdGxlLFxuXHRcdFx0ZWRpdFRva2VuOiB0aGlzLmVkaXRUb2tlbixcblx0XHRcdC4uLih0aGlzLnRpbWVzdGFtcCA/IHt0aW1lc3RhbXA6IHRoaXMudGltZXN0YW1wfSA6IHt9KSxcblx0XHRcdC4uLnBheWxvYWQsXG5cdFx0XHRhZGRpdGlvbmFsQ29uZmlnOiB7XG5cdFx0XHRcdC4uLih0aGlzLmlzTmV3UGFnZSA/IHtjcmVhdGVvbmx5OiB0aGlzLmlzTmV3UGFnZX0gOiB7fSksXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmNsYXNzIE5vdGlmaWNhdGlvbiB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuaW5pdCgpO1xuXHR9XG5cdGluaXQoKSB7XG5cdFx0JCgnYm9keScpLmFwcGVuZCgnPGRpdiBpZD1cIk1vZU5vdGlmaWNhdGlvblwiPjwvZGl2PicpO1xuXHR9XG5cdGRpc3BsYXkodGV4dCA9ICfllrV+JywgdHlwZSA9ICdzdWNjZXNzJywgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuXHRcdCQoJyNNb2VOb3RpZmljYXRpb24nKS5hcHBlbmQoXG5cdFx0XHQkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnTW9lTm90aWZpY2F0aW9uLW5vdGljZScpXG5cdFx0XHRcdC5hZGRDbGFzcyhgTW9lTm90aWZpY2F0aW9uLW5vdGljZS0ke3R5cGV9YClcblx0XHRcdFx0LmFwcGVuZChgPHNwYW4+JHt0ZXh0fTwvc3Bhbj5gKVxuXHRcdCk7XG5cdFx0JCgnI01vZU5vdGlmaWNhdGlvbicpLmZpbmQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykubGFzdCgpLmZhZGVJbigzMDApO1xuXHRcdHRoaXMuYmluZCgpO1xuXHRcdHRoaXMuY2xlYXIoKTtcblx0XHRjYWxsYmFjaygkKCcjTW9lTm90aWZpY2F0aW9uJykuZmluZCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5sYXN0KCkpO1xuXHR9XG5cdGJpbmQoKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0JCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0c2VsZi5zbGlkZUxlZnQoJCh0aGlzKSk7XG5cdFx0fSk7XG5cdH1cblx0c3VjY2Vzcyh0ZXh0LCBjYWxsYmFjaykge1xuXHRcdHRoaXMuZGlzcGxheSh0ZXh0LCAnc3VjY2VzcycsIGNhbGxiYWNrKTtcblx0fVxuXHR3YXJuaW5nKHRleHQsIGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5kaXNwbGF5KHRleHQsICd3YXJuaW5nJywgY2FsbGJhY2spO1xuXHR9XG5cdGVycm9yKHRleHQsIGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5kaXNwbGF5KHRleHQsICdlcnJvcicsIGNhbGxiYWNrKTtcblx0fVxuXHRjbGVhcigpIHtcblx0XHRpZiAoJCgnLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKS5sZW5ndGggPj0gMTApIHtcblx0XHRcdCQoJyNNb2VOb3RpZmljYXRpb24nKVxuXHRcdFx0XHQuY2hpbGRyZW4oKVxuXHRcdFx0XHQuZmlyc3QoKVxuXHRcdFx0XHQuZmFkZU91dCgxNTAsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdHNldFRpbWVvdXQodGhpcy5jbGVhciwgMzAwKTtcblx0XHR9XG5cdH1cblx0ZW1wdHkoZikge1xuXHRcdCQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykuZWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0aWYgKHR5cGVvZiBmID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNvbnN0IGVsZSA9ICQodGhpcyk7XG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGYoZWxlKTtcblx0XHRcdFx0fSwgMjAwICogaSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKHRoaXMpXG5cdFx0XHRcdFx0LmRlbGF5KGkgKiAyMDApXG5cdFx0XHRcdFx0LmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cdHNsaWRlTGVmdChlbGUsIHNwZWVkKSB7XG5cdFx0ZWxlLmNzcygncG9zaXRpb24nLCAncmVsYXRpdmUnKTtcblx0XHRlbGUuYW5pbWF0ZShcblx0XHRcdHtcblx0XHRcdFx0bGVmdDogJy0yMDAlJyxcblx0XHRcdH0sXG5cdFx0XHRzcGVlZCB8fCAxNTAsXG5cdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQodGhpcykuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBOb3RpZmljYXRpb24oKTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuY29uc3Qgc2xlZXAgPSAodGltZSkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRyZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKTtcblx0fSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgc2xlZXA7XG4iLCAiLyoqXG4gKiDop6PmnpBVUkzlj4LmlbDliJfooahcbiAqIFBhcnNlIFVSTCBxdWVyeS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ319IHVybFxuICogQHBhcmFtIHVybFxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUXVlcnkodXJsKSB7XG5cdGNvbnN0IHJlZyA9IC8oKFtePyY9XSspKD86PShbXj8mPV0qKSkqKS9nO1xuXHRjb25zdCBwYXJhbXMgPSB7fTtcblx0bGV0IG1hdGNoO1xuXHR3aGlsZSAoKG1hdGNoID0gcmVnLmV4ZWModXJsKSkpIHtcblx0XHR0cnkge1xuXHRcdFx0cGFyYW1zW21hdGNoWzJdXSA9IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRwYXJhbXNbbWF0Y2hbMl1dID0gbWF0Y2hbM107XG5cdFx0fVxuXHR9XG5cdHJldHVybiBwYXJhbXM7XG59XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCBOb3RpZmljYXRpb24gZnJvbSAnLi9ub3RpZmljYXRpb24nO1xuaW1wb3J0IGkxOG4gZnJvbSAnLi4vdXRpbHMvaTE4bic7XG5pbXBvcnQgTG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XG5pbXBvcnQgc2xlZXAgZnJvbSAnLi4vdXRpbHMvc2xlZXAnO1xuaW1wb3J0IHtwYXJzZVF1ZXJ5fSBmcm9tICcuLi91dGlscy9oZWxwZXJzJztcblxuY2xhc3MgVUkge1xuXHRxdWlja0VkaXRQYW5lbFZpc2libGUgPSBmYWxzZTtcblx0c2Nyb2xsVG9wID0gMDtcblxuXHQvKipcblx0ICog5Yib5bu65bGF5Lit5a+56K+d5qGGXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSDnqpflj6PmoIfpophcblx0ICogQHBhcmFtIHtzdHJpbmcgfCBKUXVlcnk8SFRNTEVsZW1lbnQ+fSBjb250ZW50IOWGheWuuVxuXHQgKiBAcGFyYW0geyp9IHdpZHRoIOWuveW6plxuXHQgKiBAcGFyYW0geyp9IGNhbGxiYWNrIOWbnuiwg+WHveaVsFxuXHQgKi9cblx0Y3JlYXRlRGlhbG9nQm94KHRpdGxlID0gJ1dpa2lwbHVzJywgY29udGVudCA9ICcnLCB3aWR0aCA9IDYwMCwgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xuXHRcdGlmICgkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS5lYWNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRjb25zdCBjbGllbnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdGNvbnN0IGNsaWVudEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHRjb25zdCBkaWFsb2dXaWR0aCA9IE1hdGgubWluKGNsaWVudFdpZHRoLCB3aWR0aCk7XG5cdFx0Y29uc3QgZGlhbG9nQm94ID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveCcpXG5cdFx0XHQuY3NzKHtcblx0XHRcdFx0J21hcmdpbi1sZWZ0JzogY2xpZW50V2lkdGggLyAyIC0gZGlhbG9nV2lkdGggLyAyLFxuXHRcdFx0XHR0b3A6ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpICsgY2xpZW50SGVpZ2h0ICogMC4yLFxuXHRcdFx0XHRkaXNwbGF5OiAnbm9uZScsXG5cdFx0XHR9KVxuXHRcdFx0LmFwcGVuZCgkKCc8ZGl2PicpLmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1IZWFkZXInKS5odG1sKHRpdGxlKSlcblx0XHRcdC5hcHBlbmQoJCgnPGRpdj4nKS5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmFwcGVuZChjb250ZW50KSlcblx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykudGV4dCgnw5cnKS5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQ2xvc2UnKSk7XG5cdFx0JCgnYm9keScpLmFwcGVuZChkaWFsb2dCb3gpO1xuXHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLndpZHRoKGRpYWxvZ1dpZHRoKTtcblx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHQkKHRoaXMpXG5cdFx0XHRcdC5wYXJlbnQoKVxuXHRcdFx0XHQuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAod2luZG93Lm9uYmVmb3JldW5sb2FkID0gdW5kZWZpbmVkKSk7IC8vIOWPlua2iOmhtemdouWFs+mXreehruiupFxuXHRcdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdC8v5ouW5puzXG5cdFx0Y29uc3QgYmluZERyYWdnaW5nID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRcdGVsZW1lbnQubW91c2Vkb3duKChlKSA9PiB7XG5cdFx0XHRcdGNvbnN0IGJhc2VYID0gZS5jbGllbnRYO1xuXHRcdFx0XHRjb25zdCBiYXNlWSA9IGUuY2xpZW50WTtcblx0XHRcdFx0Y29uc3QgYmFzZU9mZnNldFggPSBlbGVtZW50LnBhcmVudCgpLm9mZnNldCgpLmxlZnQ7XG5cdFx0XHRcdGNvbnN0IGJhc2VPZmZzZXRZID0gZWxlbWVudC5wYXJlbnQoKS5vZmZzZXQoKS50b3A7XG5cdFx0XHRcdCQoZG9jdW1lbnQpLm9uKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuXHRcdFx0XHRcdGVsZW1lbnQucGFyZW50KCkuY3NzKHtcblx0XHRcdFx0XHRcdCdtYXJnaW4tbGVmdCc6IGJhc2VPZmZzZXRYICsgZS5jbGllbnRYIC0gYmFzZVgsXG5cdFx0XHRcdFx0XHR0b3A6IGJhc2VPZmZzZXRZICsgZS5jbGllbnRZIC0gYmFzZVksXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkKGRvY3VtZW50KS5vbignbW91c2V1cCcsICgpID0+IHtcblx0XHRcdFx0XHRlbGVtZW50LnVuYmluZCgnbW91c2Vkb3duJyk7XG5cdFx0XHRcdFx0JChkb2N1bWVudCkub2ZmKCdtb3VzZW1vdmUnKTtcblx0XHRcdFx0XHQkKGRvY3VtZW50KS5vZmYoJ21vdXNldXAnKTtcblx0XHRcdFx0XHRiaW5kRHJhZ2dpbmcoZWxlbWVudCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fTtcblx0XHRiaW5kRHJhZ2dpbmcoJCgnLldpa2lwbHVzLUludGVyQm94LUhlYWRlcicpKTtcblx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS5mYWRlSW4oNTAwKTtcblx0XHRjYWxsYmFjaygpO1xuXHRcdHJldHVybiBkaWFsb2dCb3g7XG5cdH1cblxuXHQvKipcblx0ICog5Zyo5pCc57Si5qGG5bem5L6n44CM5pu05aSa44CN6I+c5Y2V5YaF5re75Yqg5oyJ6ZKuXG5cdCAqIEFkZCBhIGJ1dHRvbiBpbiBcIk1vcmVcIiBtZW51IChsZWZ0IG9mIHRoZSBzZWFyY2ggYmFyKVxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCDmjInpkq7lkI0gQnV0dG9uIHRleHRcblx0ICogQHBhcmFtIHtzdHJpbmd9IGlkIOaMiemSrmlkIEJ1dHRvbiBpZFxuXHQgKiBAcmV0dXJuIHtKUXVlcnk8SFRNTEVsZW1lbnQ+fSBidXR0b25cblx0ICovXG5cdGFkZEZ1bmN0aW9uQnV0dG9uKHRleHQsIGlkKSB7XG5cdFx0bGV0IGJ1dHRvbjtcblx0XHRzd2l0Y2ggKENvbnN0YW50cy5za2luKSB7XG5cdFx0XHRjYXNlICdtaW5lcnZhJzpcblx0XHRcdFx0YnV0dG9uID0gJCgnPGxpPicpXG5cdFx0XHRcdFx0LmF0dHIoJ2lkJywgaWQpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd0b2dnbGUtbGlzdC1pdGVtJylcblx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdtdy11aS1pY29uIG13LXVpLWljb24tYmVmb3JlIHRvZ2dsZS1saXN0LWl0ZW1fX2FuY2hvcicpXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0XHRcdFx0JCgnPHNwYW4+Jylcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKTsnKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCd0b2dnbGUtbGlzdC1pdGVtX19sYWJlbCcpXG5cdFx0XHRcdFx0XHRcdFx0XHQudGV4dCh0ZXh0KVxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ21vZXNraW4nOlxuXHRcdFx0XHRidXR0b24gPSAkKCc8bGk+Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLU1vcmUtRnVuY3Rpb24tQnV0dG9uJylcblx0XHRcdFx0XHQuYXR0cignaWQnLCBpZClcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxhPicpLmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApOycpLnRleHQodGV4dCkpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnV0dG9uID0gJCgnPGxpPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdtdy1saXN0LWl0ZW0nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygndmVjdG9yLXRhYi1ub2ljb24nKVxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIGlkKVxuXHRcdFx0XHRcdC5hcHBlbmQoJCgnPGE+JykuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCk7JykudGV4dCh0ZXh0KSk7XG5cdFx0fVxuXHRcdGlmIChDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEnICYmICQoJyNwLXRiJykubGVuZ3RoID4gMCkge1xuXHRcdFx0JCgnI3AtdGInKS5hcHBlbmQoYnV0dG9uKTtcblx0XHRcdHJldHVybiAkKGAjJHtpZH1gKTtcblx0XHR9IGVsc2UgaWYgKENvbnN0YW50cy5za2luID09PSAnbW9lc2tpbicpIHtcblx0XHRcdCQoJy5tb3JlLWFjdGlvbnMtbGlzdCcpLmZpcnN0KCkuYXBwZW5kKGJ1dHRvbik7XG5cdFx0XHRyZXR1cm4gJChgIyR7aWR9YCk7XG5cdFx0fSBlbHNlIGlmICgkKCcjcC1jYWN0aW9ucycpLmxlbmd0aCA+IDApIHtcblx0XHRcdCQoJyNwLWNhY3Rpb25zIHVsJykuYXBwZW5kKGJ1dHRvbik7XG5cdFx0XHRyZXR1cm4gJChgIyR7aWR9YCk7XG5cdFx0fVxuXHRcdExvZy5pbmZvKGkxOG4udHJhbnNsYXRlKCdjYW50X2FkZF9mdW5jYnRuJykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpeW/q+mAn+mHjeWumuWQkeaMiemSrlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IG9uQ2xpY2tcblx0ICovXG5cdGluc2VydFNpbXBsZVJlZGlyZWN0QnV0dG9uKG9uQ2xpY2sgPSAoKSA9PiB7fSkge1xuXHRcdGNvbnN0IGJ1dHRvbiA9IHRoaXMuYWRkRnVuY3Rpb25CdXR0b24oaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X2Zyb20nKSwgJ1dpa2lwbHVzLVNSLUludHJvJyk7XG5cdFx0aWYgKGJ1dHRvbikge1xuXHRcdFx0YnV0dG9uLm9uKCdjbGljaycsIG9uQ2xpY2spO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXorr7nva7pnaLmnb/mjInpkq5cblx0ICpcblx0ICogQHBhcmFtIHsqfSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRTZXR0aW5nc1BhbmVsQnV0dG9uKG9uQ2xpY2sgPSAoKSA9PiB7fSkge1xuXHRcdGNvbnN0IGJ1dHRvbiA9IHRoaXMuYWRkRnVuY3Rpb25CdXR0b24oaTE4bi50cmFuc2xhdGUoJ3dpa2lwbHVzX3NldHRpbmdzJyksICdXaWtpcGx1cy1TZXR0aW5ncy1JbnRybycpO1xuXHRcdGlmIChidXR0b24pIHtcblx0XHRcdGJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl6aG26YOo5b+r6YCf57yW6L6R5oyJ6ZKuXG5cdCAqIEluc2VydCBRdWlja0VkaXQgYnV0dG9uIGJlc2lkZXMgcGFnZSBlZGl0IGJ1dHRvbi5cblx0ICpcblx0ICogQHBhcmFtIG9uQ2xpY2tcblx0ICovXG5cdGluc2VydFRvcFF1aWNrRWRpdEVudHJ5KG9uQ2xpY2spIHtcblx0XHRjb25zdCB0b3BCdG4gPSAkKCc8bGk+JykuYXR0cignaWQnLCAnV2lraXBsdXMtRWRpdC1Ub3BCdG4nKS5hdHRyKCdjbGFzcycsICdtdy1saXN0LWl0ZW0nKTtcblx0XHRjb25zdCB0b3BCdG5MaW5rID0gJCgnPGE+Jylcblx0XHRcdC5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKScpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3RvcGJ0bicpfWApO1xuXHRcdHRvcEJ0bi5hcHBlbmQodG9wQnRuTGluayk7XG5cdFx0c3dpdGNoIChDb25zdGFudHMuc2tpbikge1xuXHRcdFx0Y2FzZSAnbWluZXJ2YSc6XG5cdFx0XHRcdHRvcEJ0bi5jc3MoeydhbGlnbi1pdGVtcyc6ICdjZW50ZXInLCBkaXNwbGF5OiAnZmxleCd9KTtcblx0XHRcdFx0dG9wQnRuLmZpbmQoJ3NwYW4nKS5hZGRDbGFzcygncGFnZS1hY3Rpb25zLW1lbnVfX2xpc3QtaXRlbScpO1xuXHRcdFx0XHR0b3BCdG5cblx0XHRcdFx0XHQuZmluZCgnYScpXG5cdFx0XHRcdFx0LmFkZENsYXNzKFxuXHRcdFx0XHRcdFx0J213LXVpLWljb24gbXctdWktaWNvbi1lbGVtZW50IG13LXVpLWljb24td2lraW1lZGlhLWVkaXQtYmFzZTIwIG13LXVpLWljb24td2l0aC1sYWJlbC1kZXNrdG9wJ1xuXHRcdFx0XHRcdClcblx0XHRcdFx0XHQuY3NzKCd2ZXJ0aWNhbC1hbGlnbicsICdtaWRkbGUnKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3ZlY3Rvci0yMDIyJzpcblx0XHRcdFx0dG9wQnRuLmFkZENsYXNzKCd2ZWN0b3ItdGFiLW5vaWNvbicpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAndmVjdG9yJzpcblx0XHRcdFx0dG9wQnRuLmFwcGVuZCgkKCc8c3Bhbj4nKS5hcHBlbmQodG9wQnRuTGluaykpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHR9XG5cdFx0JCh0b3BCdG4pLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdG9uQ2xpY2soe1xuXHRcdFx0XHRzZWN0aW9uTnVtYmVyOiAtMSxcblx0XHRcdFx0dGFyZ2V0UGFnZU5hbWU6IENvbnN0YW50cy5jdXJyZW50UGFnZU5hbWUsXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRpZiAoJCgnI2NhLWVkaXQnKS5sZW5ndGggPiAwICYmICQoJyNXaWtpcGx1cy1FZGl0LVRvcEJ0bicpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0Q29uc3RhbnRzLnNraW4gPT09ICdtaW5lcnZhJyA/ICQoJyNjYS1lZGl0JykucGFyZW50KCkuYWZ0ZXIodG9wQnRuKSA6ICQoJyNjYS1lZGl0JykuYWZ0ZXIodG9wQnRuKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl5q616JC95b+r6YCf57yW6L6R5oyJ6ZKuXG5cdCAqIEluc2VydCBRdWlja0VkaXQgYnV0dG9ucyBmb3IgZWFjaCBzZWN0aW9uLlxuXHQgKlxuXHQgKiBAcGFyYW0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0U2VjdGlvblF1aWNrRWRpdEVudHJpZXMob25DbGljayA9ICgpID0+IHt9KSB7XG5cdFx0Y29uc3Qgc2VjdGlvbkJ0biA9XG5cdFx0XHRDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEnXG5cdFx0XHRcdD8gJCgnPHNwYW4+JykuYXBwZW5kKFxuXHRcdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKFxuXHRcdFx0XHRcdFx0XHRcdCdXaWtpcGx1cy1FZGl0LVNlY3Rpb25CdG4gbXctdWktaWNvbiBtdy11aS1pY29uLWVsZW1lbnQgbXctdWktaWNvbi13aWtpbWVkaWEtZWRpdC1iYXNlMjAgZWRpdC1wYWdlIG13LXVpLWljb24tZmx1c2gtcmlnaHQnXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0LmNzcygnbWFyZ2luLWxlZnQnLCAnMC43NWVtJylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApJylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ3RpdGxlJywgaTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF9zZWN0aW9uYnRuJykpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQ6ICQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLmFkZENsYXNzKCdtdy1lZGl0c2VjdGlvbi1kaXZpZGVyJykudGV4dCgnIHwgJykpXG5cdFx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtRWRpdC1TZWN0aW9uQnRuJylcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCknKVxuXHRcdFx0XHRcdFx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfc2VjdGlvbmJ0bicpKVxuXHRcdFx0XHRcdFx0KTtcblx0XHQkKCcubXctZWRpdHNlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCBlZGl0VVJMID0gJCh0aGlzKS5maW5kKFwiYVtocmVmKj0nYWN0aW9uPWVkaXQnXVwiKS5maXJzdCgpLmF0dHIoJ2hyZWYnKTtcblx0XHRcdFx0Y29uc3Qgc2VjdGlvbk51bWJlciA9IGVkaXRVUkxcblx0XHRcdFx0XHQubWF0Y2goLyZbdmVdKnNlY3Rpb25cXD0oW14mXSspLylbMV0gLy8gYHZlYCBmb3IgdmlzdWFsIGVkaXRvclxuXHRcdFx0XHRcdC5yZXBsYWNlKC9ULS9naSwgJycpOyAvLyBlbWJlZGRlZCBwYWdlcyB1c2UgVC1zZXJpZXMgc2VjdGlvbiBudW1iZXJcblx0XHRcdFx0Y29uc3Qgc2VjdGlvblRhcmdldE5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoZWRpdFVSTC5tYXRjaCgvdGl0bGU9KC4rPykmLylbMV0pO1xuXHRcdFx0XHRjb25zdCBjbG9uZU5vZGUgPSAkKHRoaXMpLnByZXYoKS5jbG9uZSgpO1xuXHRcdFx0XHRjbG9uZU5vZGUuZmluZCgnLm13LWhlYWRsaW5lLW51bWJlcicpLnJlbW92ZSgpO1xuXHRcdFx0XHRjb25zdCBzZWN0aW9uTmFtZSA9IGNsb25lTm9kZS50ZXh0KCkudHJpbSgpO1xuXHRcdFx0XHRjb25zdCBfc2VjdGlvbkJ0biA9IHNlY3Rpb25CdG4uY2xvbmUoKTtcblx0XHRcdFx0X3NlY3Rpb25CdG4uZmluZCgnLldpa2lwbHVzLUVkaXQtU2VjdGlvbkJ0bicpLm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRvbkNsaWNrKHtcblx0XHRcdFx0XHRcdHNlY3Rpb25OdW1iZXIsXG5cdFx0XHRcdFx0XHRzZWN0aW9uTmFtZSxcblx0XHRcdFx0XHRcdHRhcmdldFBhZ2VOYW1lOiBzZWN0aW9uVGFyZ2V0TmFtZSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdENvbnN0YW50cy5za2luID09PSAnbWluZXJ2YSdcblx0XHRcdFx0XHQ/ICQodGhpcykuYXBwZW5kKF9zZWN0aW9uQnRuKVxuXHRcdFx0XHRcdDogJCh0aGlzKS5maW5kKCcubXctZWRpdHNlY3Rpb24tYnJhY2tldCcpLmxhc3QoKS5iZWZvcmUoX3NlY3Rpb25CdG4pO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdExvZy5lcnJvcignZmFpbF90b19pbml0X3F1aWNrZWRpdCcpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpeS7u+aEj+mTvuaOpee8lui+keWFpeWPo1xuXHQgKlxuXHQgKiBAcGFyYW0geyp9IG9uQ2xpY2tcblx0ICovXG5cdGluc2VydExpbmtFZGl0RW50cmllcyhvbkNsaWNrID0gKCkgPT4ge30pIHtcblx0XHQkKCcjbXctY29udGVudC10ZXh0IGEuZXh0ZXJuYWwnKS5lYWNoKGZ1bmN0aW9uIChpKSB7XG5cdFx0XHRjb25zdCB1cmwgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcblx0XHRcdGNvbnN0IHBhcmFtcyA9IHBhcnNlUXVlcnkodXJsKTtcblx0XHRcdGlmIChwYXJhbXMuYWN0aW9uID09PSAnZWRpdCcgJiYgcGFyYW1zLnRpdGxlICE9PSB1bmRlZmluZWQgJiYgcGFyYW1zLnNlY3Rpb24gIT09ICduZXcnKSB7XG5cdFx0XHRcdCQodGhpcykuYWZ0ZXIoXG5cdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJ2phdmFzY3JpcHQ6dm9pZCgwKScsXG5cdFx0XHRcdFx0XHRcdGNsYXNzOiAnV2lraXBsdXMtRWRpdC1FdmVyeVdoZXJlQnRuJyxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQudGV4dChgKCR7aTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF9zZWN0aW9uYnRuJyl9KWApXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRvbkNsaWNrKHtcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXRQYWdlTmFtZTogcGFyYW1zLnRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdHNlY3Rpb25OdW1iZXI6IHBhcmFtcy5zZWN0aW9uID8/IC0xLFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRzaG93UXVpY2tFZGl0UGFuZWwoe1xuXHRcdHRpdGxlID0gJycsXG5cdFx0Y29udGVudCA9ICcnLFxuXHRcdHN1bW1hcnkgPSAnJyxcblx0XHRvbkJhY2sgPSAoKSA9PiB7fSxcblx0XHRvblBhcnNlID0gKCkgPT4ge30sXG5cdFx0b25FZGl0ID0gKCkgPT4ge30sXG5cdFx0ZXNjRXhpdCA9IGZhbHNlLFxuXHR9KSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy5zY3JvbGxUb3AgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKTtcblx0XHRpZiAodGhpcy5xdWlja0VkaXRQYW5lbFZpc2libGUpIHtcblx0XHRcdHRoaXMuaGlkZVF1aWNrRWRpdFBhbmVsKCk7XG5cdFx0fVxuXHRcdHRoaXMucXVpY2tFZGl0UGFuZWxWaXNpYmxlID0gdHJ1ZTtcblx0XHQvLyDpmLLmraLmiYvmu5HlhbPpl63pobXpnaJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdCdjbG9zZScsXG5cdFx0XHQod2luZG93Lm9uYmVmb3JldW5sb2FkID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7aTE4bi50cmFuc2xhdGUoJ29uY2xvc2VfY29uZmlybScpfWA7XG5cdFx0XHR9KVxuXHRcdCk7XG5cdFx0Y29uc3QgaXNOZXdQYWdlID0gJCgnLm5vYXJ0aWNsZXRleHQnKS5sZW5ndGggPiAwO1xuXHRcdC8vIERPTSDlrprkuYnlvIDlp4tcblx0XHRjb25zdCBiYWNrQnRuID0gJCgnPHNwYW4+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtQmFjaycpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJ0bicpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnYmFjaycpfWApOyAvLyDov5Tlm57mjInpkq5cblx0XHRjb25zdCBqdW1wQnRuID0gJCgnPHNwYW4+Jylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtSnVtcCcpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUJ0bicpXG5cdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHQkKCc8YT4nKVxuXHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJyNXaWtpcGx1cy1RdWlja2VkaXQnKVxuXHRcdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdnb3RvX2VkaXRib3gnKX1gKVxuXHRcdFx0KTsgLy8g5Yiw57yW6L6R5qGGXG5cdFx0Y29uc3QgaW5wdXRCb3ggPSAkKCc8dGV4dGFyZWE+JykuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0Jyk7IC8vIOS4u+e8lui+keahhlxuXHRcdGNvbnN0IHByZXZpZXdCb3ggPSAkKCc8ZGl2PicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpOyAvLyDpooTop4jovpPlh7pcblx0XHRjb25zdCBzdW1tYXJ5Qm94ID0gJCgnPGlucHV0PicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQnKVxuXHRcdFx0LmF0dHIoJ3BsYWNlaG9sZGVyJywgYCR7aTE4bi50cmFuc2xhdGUoJ3N1bW1hcnlfcGxhY2Vob2xkJyl9YCk7IC8vIOe8lui+keaRmOimgei+k+WFpVxuXHRcdGNvbnN0IGVkaXRTdWJtaXRCdG4gPSAkKCc8YnV0dG9uPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZShpc05ld1BhZ2UgPyAncHVibGlzaF9wYWdlJyA6ICdwdWJsaXNoX2NoYW5nZScpfShDdHJsK1MpYCk7IC8vIOaPkOS6pOaMiemSrlxuXHRcdGNvbnN0IHByZXZpZXdTdWJtaXRCdG4gPSAkKCc8YnV0dG9uPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0Jylcblx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdwcmV2aWV3Jyl9YCk7IC8vIOmihOiniOaMiemSrlxuXHRcdGNvbnN0IGlzTWlub3JFZGl0ID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFwcGVuZCgkKCc8aW5wdXQ+JykuYXR0cih7dHlwZTogJ2NoZWNrYm94JywgaWQ6ICdXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0J30pKVxuXHRcdFx0LmFwcGVuZChcblx0XHRcdFx0JCgnPGxhYmVsPicpXG5cdFx0XHRcdFx0LmF0dHIoJ2ZvcicsICdXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0Jylcblx0XHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnbWFya19taW5vcmVkaXQnKX0oQ3RybCtTaGlmdCtTKWApXG5cdFx0XHQpXG5cdFx0XHQuY3NzKHttYXJnaW46ICc1cHggNXB4IDVweCAtM3B4JywgZGlzcGxheTogJ2lubGluZSd9KTtcblx0XHQvLyBET03lrprkuYnnu5PmnZ9cblx0XHRjb25zdCBlZGl0Qm9keSA9ICQoJzxkaXY+JykuYXBwZW5kKFxuXHRcdFx0YmFja0J0bixcblx0XHRcdGp1bXBCdG4sXG5cdFx0XHRwcmV2aWV3Qm94LFxuXHRcdFx0aW5wdXRCb3gsXG5cdFx0XHRzdW1tYXJ5Qm94LFxuXHRcdFx0JCgnPGJyPicpLFxuXHRcdFx0aXNNaW5vckVkaXQsXG5cdFx0XHRlZGl0U3VibWl0QnRuLFxuXHRcdFx0cHJldmlld1N1Ym1pdEJ0blxuXHRcdCk7XG5cdFx0dGhpcy5jcmVhdGVEaWFsb2dCb3godGl0bGUsIGVkaXRCb2R5LCAxMDAwLCAoKSA9PiB7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0JykudmFsKGNvbnRlbnQpO1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0JykudmFsKHN1bW1hcnkpO1xuXHRcdH0pO1xuXHRcdC8vIEJhY2tcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LUJhY2snKS5vbignY2xpY2snLCBvbkJhY2spO1xuXHRcdC8vIFByZXZpZXdcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0Jykub24oJ2NsaWNrJywgYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3QgcHJlbG9hZEJhbm5lciA9ICQoJzxkaXY+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1CYW5uZXInKVxuXHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnbG9hZGluZ19wcmV2aWV3Jyl9YCk7XG5cdFx0XHRjb25zdCB3aWtpVGV4dCA9ICQoJyNXaWtpcGx1cy1RdWlja2VkaXQnKS52YWwoKTtcblx0XHRcdCQodGhpcykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlT3V0KDEwMCwgKCkgPT4ge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuaHRtbCgnJykuYXBwZW5kKHByZWxvYWRCYW5uZXIpO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZUluKDEwMCk7XG5cdFx0XHR9KTtcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IHNlbGYuc2Nyb2xsVG9wfSwgMjAwKTsgLy/ov5Tlm57pobbpg6hcblx0XHRcdGNvbnN0IHJlc3VsdCA9IGF3YWl0IG9uUGFyc2Uod2lraVRleHQpO1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVPdXQoJzEwMCcsICgpID0+IHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmh0bWwoYDxocj48ZGl2IGNsYXNzPVwibXctYm9keS1jb250ZW50XCI+JHtyZXN1bHR9PC9kaXY+PGhyPmApO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZUluKCcxMDAnKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0Ly8gRWRpdFxuXHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0Jykub24oJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgdGltZXIgPSBEYXRlLm5vdygpO1xuXHRcdFx0Y29uc3QgZWRpdEJhbm5lciA9ICQoJzxkaXY+Jylcblx0XHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1CYW5uZXInKVxuXHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnc3VibWl0dGluZ19lZGl0Jyl9YCk7XG5cdFx0XHRjb25zdCBwYXlsb2FkID0ge1xuXHRcdFx0XHRzdW1tYXJ5OiAkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQnKS52YWwoKSxcblx0XHRcdFx0Y29udGVudDogJCgnI1dpa2lwbHVzLVF1aWNrZWRpdCcpLnZhbCgpLFxuXHRcdFx0XHRpc01pbm9yRWRpdDogJCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnKS5pcygnOmNoZWNrZWQnKSxcblx0XHRcdH07XG5cdFx0XHQvLyDlh4blpIfnvJbovpEg56aB55So5oyJ6ZKuIOaJp+ihjOWKqOeUu1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQsI1dpa2lwbHVzLVF1aWNrZWRpdCwjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0JykuYXR0cihcblx0XHRcdFx0J2Rpc2FibGVkJyxcblx0XHRcdFx0J2Rpc2FibGVkJ1xuXHRcdFx0KTtcblx0XHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IHNlbGYuc2Nyb2xsVG9wfSwgMjAwKTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlT3V0KDEwMCwgKCkgPT4ge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuaHRtbCgnJykuYXBwZW5kKGVkaXRCYW5uZXIpO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZUluKDEwMCk7XG5cdFx0XHR9KTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IG9uRWRpdChwYXlsb2FkKTtcblx0XHRcdFx0Y29uc3QgdXNlVGltZSA9IERhdGUubm93KCkgLSB0aW1lcjtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpXG5cdFx0XHRcdFx0LmZpbmQoJy5XaWtpcGx1cy1CYW5uZXInKVxuXHRcdFx0XHRcdC5jc3MoJ2JhY2tncm91bmQnLCAncmdiYSg2LCAyMzksIDkyLCAwLjQ0KScpO1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0Jylcblx0XHRcdFx0XHQuZmluZCgnLldpa2lwbHVzLUJhbm5lcicpXG5cdFx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ2VkaXRfc3VjY2VzcycsIFt1c2VUaW1lLnRvU3RyaW5nKCldKX1gKTtcblx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IHVuZGVmaW5lZCkpOyAvL+WPlua2iOmhtemdouWFs+mXreehruiupFxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLmNzcygnYmFja2dyb3VuZCcsICdyZ2JhKDIxOCwgMTQyLCAxNjcsIDAuNjUpJyk7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS5odG1sKGVycm9yLm1lc3NhZ2UpO1xuXHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQsI1dpa2lwbHVzLVF1aWNrZWRpdCwjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctU3VibWl0JykucHJvcChcblx0XHRcdFx0XHQnZGlzYWJsZWQnLFxuXHRcdFx0XHRcdGZhbHNlXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Ly9DdHJsK1Pmj5DkuqQgQ3RybCtTaGlmdCtT5bCP57yW6L6RXG5cdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdCwjV2lraXBsdXMtUXVpY2tlZGl0LVN1bW1hcnktSW5wdXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnKS5vbigna2V5ZG93bicsIChlKSA9PiB7XG5cdFx0XHRpZiAoZS5jdHJsS2V5ICYmIGUud2hpY2ggPT09IDgzKSB7XG5cdFx0XHRcdGlmIChlLnNoaWZ0S2V5KSB7XG5cdFx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1NaW5vckVkaXQnKS50cmlnZ2VyKCdjbGljaycpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0JykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdC8vRXNj6YCA5Ye6XG5cdFx0aWYgKGVzY0V4aXQpIHtcblx0XHRcdCQoZG9jdW1lbnQpLm9uKCdrZXlkb3duJywgKGUpID0+IHtcblx0XHRcdFx0aWYgKGUud2hpY2ggPT09IDI3KSB7XG5cdFx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1CYWNrJykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0aGlkZVF1aWNrRWRpdFBhbmVsKCkge1xuXHRcdHRoaXMucXVpY2tFZGl0UGFuZWxWaXNpYmxlID0gZmFsc2U7XG5cdFx0JCgnLldpa2lwbHVzLUludGVyQm94JykuZmFkZU91dCgnZmFzdCcsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICh3aW5kb3cub25iZWZvcmV1bmxvYWQgPSB1bmRlZmluZWQpKTsgLy/lj5bmtojpobXpnaLlhbPpl63noa7orqRcblx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICog5pi+56S65b+r6YCf6YeN5a6a5ZCR5by556qXXG5cdCAqXG5cdCAqIEBwYXJhbSByb290MFxuXHQgKiBAcGFyYW0gcm9vdDAub25FZGl0XG5cdCAqIEBwYXJhbSByb290MC5vblN1Y2Nlc3Ncblx0ICovXG5cdHNob3dTaW1wbGVSZWRpcmVjdFBhbmVsKHtvbkVkaXQgPSAoKSA9PiB7fSwgb25TdWNjZXNzID0gKCkgPT4ge319ID0ge30pIHtcblx0XHRjb25zdCBpbnB1dCA9ICQoJzxpbnB1dD4nKS5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtSW5wdXQnKTtcblx0XHRjb25zdCBhcHBseUJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1BcHBseScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnc3VibWl0JykpO1xuXHRcdGNvbnN0IGNhbmNlbEJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1DYW5jZWwnKVxuXHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ2NhbmNlbCcpKTtcblx0XHRjb25zdCBjb250aW51ZUJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TUi1Db250aW51ZScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnY29udGludWUnKSk7XG5cdFx0Y29uc3QgY29udGVudCA9ICQoJzxkaXY+JykuYXBwZW5kKGlucHV0KS5hcHBlbmQoJCgnPGhyPicpKS5hcHBlbmQoYXBwbHlCdG4pLmFwcGVuZChjYW5jZWxCdG4pOyAvL+aLvOaOpVxuXHRcdGNvbnN0IGRpYWxvZyA9IHRoaXMuY3JlYXRlRGlhbG9nQm94KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9kZXNjJyksIGNvbnRlbnQsIDYwMCk7XG5cdFx0YXBwbHlCdG4ub24oJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3QgdGl0bGUgPSAkKCcuV2lraXBsdXMtSW50ZXJCb3gtSW5wdXQnKS52YWwoKTtcblx0XHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuaHRtbChcblx0XHRcdFx0YDxkaXYgY2xhc3M9XCJXaWtpcGx1cy1CYW5uZXJcIj4ke2kxOG4udHJhbnNsYXRlKCdzdWJtaXR0aW5nX2VkaXQnKX08L2Rpdj5gXG5cdFx0XHQpO1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgb25FZGl0KHtcblx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRmb3JjZU92ZXJ3cml0ZTogZmFsc2UsXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykudGV4dChpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3Rfc2F2ZWQnKSk7XG5cdFx0XHRcdHRoaXMuaGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nKTtcblx0XHRcdFx0b25TdWNjZXNzKHt0aXRsZX0pO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLmNzcygnYmFja2dyb3VuZCcsICdyZ2JhKDIxOCwgMTQyLCAxNjcsIDAuNjUpJyk7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KGVycm9yLm1lc3NhZ2UpO1xuXHRcdFx0XHRpZiAoZXJyb3IuY29kZSA9PT0gJ2FydGljbGVleGlzdHMnKSB7XG5cdFx0XHRcdFx0JCgnLldpa2lwbHVzLUludGVyQm94LUNvbnRlbnQnKS5hcHBlbmQoJCgnPGhyPicpKS5hcHBlbmQoY29udGludWVCdG4pLmFwcGVuZChjYW5jZWxCdG4pO1xuXHRcdFx0XHRcdGNhbmNlbEJ0bi5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsKGRpYWxvZyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y29udGludWVCdG4ub24oJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRcdFx0JCgnLldpa2lwbHVzLUludGVyQm94LUNvbnRlbnQnKS5odG1sKFxuXHRcdFx0XHRcdFx0XHRgPGRpdiBjbGFzcz1cIldpa2lwbHVzLUJhbm5lclwiPiR7aTE4bi50cmFuc2xhdGUoJ3N1Ym1pdHRpbmdfZWRpdCcpfTwvZGl2PmBcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRhd2FpdCBvbkVkaXQoe1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdGZvcmNlT3ZlcndyaXRlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLnRleHQoaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X3NhdmVkJykpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLmhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsKGRpYWxvZyk7XG5cdFx0XHRcdFx0XHRcdG9uU3VjY2Vzcyh7dGl0bGV9KTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS5jc3MoJ2JhY2tncm91bmQnLCAncmdiYSgyMTgsIDE0MiwgMTY3LCAwLjY1KScpO1xuXHRcdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykudGV4dChlcnJvci5tZXNzYWdlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNhbmNlbEJ0bi5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsKGRpYWxvZyk7XG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICog6ZqQ6JeP5b+r6YCf6YeN5a6a5ZCR5by556qXXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gZGlhbG9nXG5cdCAqL1xuXHRoaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cgPSAkKCdib2R5JykpIHtcblx0XHRkaWFsb2cuZmluZCgnLldpa2lwbHVzLUludGVyQm94LUNsb3NlJykudHJpZ2dlcignY2xpY2snKTtcblx0fVxuXG5cdHNob3dTZXR0aW5nc1BhbmVsKHtvblN1Ym1pdCA9ICgpID0+IHt9fSA9IHt9KSB7XG5cdFx0Y29uc3QgaW5wdXQgPSAkKCc8dGV4dGFyZWE+JykuYXR0cignaWQnLCAnV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLmF0dHIoJ3Jvd3MnLCAnMTAnKTtcblx0XHRjb25zdCBhcHBseUJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TZXR0aW5nLUFwcGx5Jylcblx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdzdWJtaXQnKSk7XG5cdFx0Y29uc3QgY2FuY2VsQnRuID0gJCgnPGRpdj4nKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1JbnRlckJveC1CdG4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNldHRpbmctQ2FuY2VsJylcblx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdjYW5jZWwnKSk7XG5cdFx0Y29uc3QgY29udGVudCA9ICQoJzxkaXY+JykuYXBwZW5kKGlucHV0KS5hcHBlbmQoJCgnPGhyPicpKS5hcHBlbmQoYXBwbHlCdG4pLmFwcGVuZChjYW5jZWxCdG4pOyAvL+aLvOaOpVxuXG5cdFx0Y29uc3QgZGlhbG9nID0gdGhpcy5jcmVhdGVEaWFsb2dCb3goaTE4bi50cmFuc2xhdGUoJ3dpa2lwbHVzX3NldHRpbmdzX2Rlc2MnKSwgY29udGVudCwgNjAwLCAoKSA9PiB7XG5cdFx0XHRpZiAobG9jYWxTdG9yYWdlLldpa2lwbHVzX1NldHRpbmdzKSB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1TZXR0aW5nLUlucHV0JykudmFsKGxvY2FsU3RvcmFnZS5XaWtpcGx1c19TZXR0aW5ncyk7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Y29uc3Qgc2V0dGluZ3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5XaWtpcGx1c19TZXR0aW5ncyk7XG5cdFx0XHRcdFx0JCgnI1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS52YWwoSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MsIG51bGwsIDIpKTtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0Ly8gaWdub3JlXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1TZXR0aW5nLUlucHV0JykuYXR0cigncGxhY2Vob2xkZXInLCBpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3NfcGxhY2Vob2xkZXInKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0YXBwbHlCdG4ub24oJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuXHRcdFx0Y29uc3Qgc2F2ZWRCYW5uZXIgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdXaWtpcGx1cy1CYW5uZXInKS50ZXh0KGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5nc19zYXZlZCcpKTtcblx0XHRcdGNvbnN0IHNldHRpbmdzID0gJCgnI1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS52YWwoKTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdG9uU3VibWl0KHtzZXR0aW5nc30pO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmh0bWwoJycpLmFwcGVuZChzYXZlZEJhbm5lcik7XG5cdFx0XHRcdGF3YWl0IHNsZWVwKDE1MDApO1xuXHRcdFx0XHR0aGlzLmhpZGVTZXR0aW5nc1BhbmVsKGRpYWxvZyk7XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Tm90aWZpY2F0aW9uLmVycm9yKGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5nc19ncmFtbWFyX2Vycm9yJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGNhbmNlbEJ0bi5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmhpZGVTZXR0aW5nc1BhbmVsKGRpYWxvZyk7XG5cdFx0fSk7XG5cdH1cblxuXHRoaWRlU2V0dGluZ3NQYW5lbChkaWFsb2cgPSAkKCdib2R5JykpIHtcblx0XHRkaWFsb2cuZmluZCgnLldpa2lwbHVzLUludGVyQm94LUNsb3NlJykudHJpZ2dlcignY2xpY2snKTtcblx0fVxuXG5cdGJpbmRQcmVsb2FkRXZlbnRzKG9uUHJlbG9hZCkge1xuXHRcdCQoJyN0b2MnKVxuXHRcdFx0LmNoaWxkcmVuKCd1bCcpXG5cdFx0XHQuZmluZCgnYScpXG5cdFx0XHQuZWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0XHQkKHRoaXMpLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5vZmYoJ21vdXNlb3ZlcicpO1xuXHRcdFx0XHRcdG9uUHJlbG9hZCh7XG5cdFx0XHRcdFx0XHRzZWN0aW9uTnVtYmVyOiBpICsgMSxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgVUkoKTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuY2xhc3MgU2V0dGluZ3Mge1xuXHRnZXRTZXR0aW5nKGtleSwgb2JqZWN0ID0ge30pIHtcblx0XHRjb25zdCB3ID0gb2JqZWN0O1xuXHRcdGxldCBzZXR0aW5ncztcblx0XHR0cnkge1xuXHRcdFx0c2V0dGluZ3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVsnV2lraXBsdXNfU2V0dGluZ3MnXSk7XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBjdXN0b21TZXR0aW5nRnVuY3Rpb24gPSBuZXcgRnVuY3Rpb24oYHJldHVybiAke3NldHRpbmdzW2tleV19YCk7XG5cdFx0XHRpZiAodHlwZW9mIGN1c3RvbVNldHRpbmdGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmIChjdXN0b21TZXR0aW5nRnVuY3Rpb24oKSh3KSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gY3VzdG9tU2V0dGluZ0Z1bmN0aW9uKCkodykgfHwgc2V0dGluZ3Nba2V5XTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdHJldHVybiBzZXR0aW5nc1trZXldO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gc2V0dGluZ3Nba2V5XTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGxldCByZXN1bHQgPSBzZXR0aW5nc1trZXldO1xuXHRcdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhvYmplY3QpKSB7XG5cdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoYFxcJHske2tleX19YCwgb2JqZWN0W2tleV0pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHR9IGNhdGNoIHt9XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBTZXR0aW5ncygpO1xuIiwgIi8qKlxuICogV2lraXBsdXNcbiAqIEVyaWRhbnVzIFNvcmEgPHNvcmFAc291bmQubW9lPlxuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9jb3JlL3BhZ2UnO1xuaW1wb3J0IFVJIGZyb20gJy4vY29yZS91aSc7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vY29yZS9ub3RpZmljYXRpb24nO1xuaW1wb3J0IFdpa2kgZnJvbSAnLi9zZXJ2aWNlcy93aWtpJztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL3V0aWxzL3NldHRpbmdzJztcbmltcG9ydCBMb2cgZnJvbSAnLi91dGlscy9sb2cnO1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgaTE4biBmcm9tICcuL3V0aWxzL2kxOG4nO1xuXG4kKGFzeW5jICgpID0+IHtcblx0Y29uc3QgUGFnZXMgPSB7fTtcblx0Y29uc3QgaXNDdXJyZW50UGFnZUVtcHR5ID0gJCgnLm5vYXJ0aWNsZXRleHQnKS5sZW5ndGggPiAwICYmIENvbnN0YW50cy5hcnRpY2xlSWQgPT09IDA7XG5cblx0LyoqXG5cdCAqIEdldCBwYWdlIGluc3RhbmNlLlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHBhcmFtc1xuXHQgKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLnJldmlzaW9uSWQg6aG16Z2i5L+u6K6i54mI5pys5Y+3XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMudGl0bGUg6aG16Z2i5qCH6aKYXG5cdCAqL1xuXHRjb25zdCBnZXRQYWdlID0gYXN5bmMgKHtyZXZpc2lvbklkLCB0aXRsZX0pID0+IHtcblx0XHRpZiAoUGFnZXNbcmV2aXNpb25JZF0pIHtcblx0XHRcdHJldHVybiBQYWdlc1tyZXZpc2lvbklkXTtcblx0XHR9XG5cdFx0Y29uc3QgbmV3UGFnZSA9IG5ldyBQYWdlKHtcblx0XHRcdHJldmlzaW9uSWQsXG5cdFx0XHR0aXRsZSxcblx0XHR9KTtcblx0XHRhd2FpdCBuZXdQYWdlLmluaXQoKTtcblx0XHRQYWdlc1tyZXZpc2lvbklkXSA9IG5ld1BhZ2U7XG5cdFx0cmV0dXJuIFBhZ2VzW3JldmlzaW9uSWRdO1xuXHR9O1xuXG5cdExvZy5pbmZvKGBXaWtpcGx1cyBub3cgbG9hZGluZy4gVmVyc2lvbjogJHtDb25zdGFudHMudmVyc2lvbn1gKTtcblxuXHRpZiAoIXdpbmRvdy5tdykge1xuXHRcdGNvbnNvbGUubG9nKCdNZWRpYXdpa2kgSmF2YVNjcmlwdCBub3QgbG9hZGVkIG9yIG5vdCBhIE1lZGlhd2lraSB3ZWJzaXRlLicpO1xuXHRcdHJldHVybjtcblx0fVxuXHRpZiAoIUNvbnN0YW50cy51c2VyR3JvdXBzLmluY2x1ZGVzKCdhdXRvY29uZmlybWVkJykgJiYgIUNvbnN0YW50cy51c2VyR3JvdXBzLmluY2x1ZGVzKCdjb25maXJtZWQnKSkge1xuXHRcdE5vdGlmaWNhdGlvbi5lcnJvcihpMThuLnRyYW5zbGF0ZSgnbm90X2F1dG9jb25maXJtZWRfdXNlcicpKTtcblx0XHRMb2cuaW5mbyhpMThuLnRyYW5zbGF0ZSgnbm90X2F1dG9jb25maXJtZWRfdXNlcicpKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoIUNvbnN0YW50cy5pc0FydGljbGUgfHwgQ29uc3RhbnRzLmFjdGlvbiAhPT0gJ3ZpZXcnKSB7XG5cdFx0TG9nLmluZm8oJ05vdCBhbiBlZGl0YWJsZSBwYWdlLiBTdG9wIGluaXRpYWxpemF0aW9uLicpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIEluaXRpYWxpemUgY3VycmVudCBwYWdlIOm7mOiupOWIneWni+WMluW9k+WJjemhtemdolxuXHR3aW5kb3cuX1dpa2lwbHVzUGFnZXMgPSBQYWdlcztcblx0Y29uc3QgY3VycmVudFBhZ2VOYW1lID0gQ29uc3RhbnRzLmN1cnJlbnRQYWdlTmFtZTtcblx0Y29uc3QgcmV2aXNpb25JZCA9IENvbnN0YW50cy5yZXZpc2lvbklkO1xuXHRjb25zdCBjdXJyZW50UGFnZSA9IGF3YWl0IGdldFBhZ2Uoe1xuXHRcdHJldmlzaW9uSWQsXG5cdFx0dGl0bGU6IGN1cnJlbnRQYWdlTmFtZSxcblx0fSk7XG5cblx0Y29uc3QgaGFuZGxlUXVpY2tFZGl0QnV0dG9uQ2xpY2tlZCA9IGFzeW5jICh7c2VjdGlvbk51bWJlciwgc2VjdGlvbk5hbWUsIHRhcmdldFBhZ2VOYW1lfSA9IHt9KSA9PiB7XG5cdFx0Y29uc3QgaXNPdGhlclBhZ2UgPSB0YXJnZXRQYWdlTmFtZSAhPT0gY3VycmVudFBhZ2VOYW1lO1xuXHRcdGlmIChpc090aGVyUGFnZSAmJiBDb25zdGFudHMubGF0ZXN0UmV2aXNpb25JZCAhPT0gQ29uc3RhbnRzLnJldmlzaW9uSWQpIHtcblx0XHRcdC8vIOWcqOWOhuWPsueJiOacrOe8lui+keWFtuS7lumhtemdouaciemXrumimCDmmoLml7bkuI3mlK/mjIFcblx0XHRcdExvZy5lcnJvcignY3Jvc3NfcGFnZV9oaXN0b3J5X3JldmlzaW9uX2VkaXRfd2FybmluZycpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCByZXZpc2lvbklkID0gaXNPdGhlclBhZ2UgPyBhd2FpdCBXaWtpLmdldExhdGVzdFJldmlzaW9uSWRGb3JQYWdlKHRhcmdldFBhZ2VOYW1lKSA6IENvbnN0YW50cy5yZXZpc2lvbklkO1xuXG5cdFx0Y29uc3QgcGFnZSA9IGF3YWl0IGdldFBhZ2Uoe3JldmlzaW9uSWQsIHRpdGxlOiB0YXJnZXRQYWdlTmFtZX0pO1xuXHRcdGNvbnN0IGN1c3RvbVN1bW1hcnkgPSBTZXR0aW5ncy5nZXRTZXR0aW5nKCdkZWZhdWx0U3VtbWFyeScsIHtcblx0XHRcdHNlY3Rpb25OYW1lLFxuXHRcdFx0c2VjdGlvbk51bWJlcixcblx0XHRcdHNlY3Rpb25UYXJnZXROYW1lOiB0YXJnZXRQYWdlTmFtZSxcblx0XHR9KTtcblx0XHRjb25zdCBzdW1tYXJ5ID1cblx0XHRcdGN1c3RvbVN1bW1hcnkgfHxcblx0XHRcdChzZWN0aW9uTmFtZVxuXHRcdFx0XHQ/IGAvKiAke3NlY3Rpb25OYW1lfSAqLyAke2kxOG4udHJhbnNsYXRlKCdkZWZhdWx0X3N1bW1hcnlfc3VmZml4Jyl9YFxuXHRcdFx0XHQ6IGkxOG4udHJhbnNsYXRlKCdkZWZhdWx0X3N1bW1hcnlfc3VmZml4JykpO1xuXHRcdGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHROb3RpZmljYXRpb24uc3VjY2VzcyhpMThuLnRyYW5zbGF0ZSgnbG9hZGluZycpKTtcblx0XHR9LCAyMDApO1xuXHRcdGNvbnN0IHNlY3Rpb25Db250ZW50ID0gYXdhaXQgcGFnZS5nZXRXaWtpVGV4dCh7XG5cdFx0XHRzZWN0aW9uOiBzZWN0aW9uTnVtYmVyLFxuXHRcdH0pO1xuXHRcdGNvbnN0IGlzRWRpdEhpc3RvcnlSZXZpc2lvbiA9ICFpc090aGVyUGFnZSAmJiBDb25zdGFudHMubGF0ZXN0UmV2aXNpb25JZCAhPT0gQ29uc3RhbnRzLnJldmlzaW9uSWQ7XG5cdFx0Y29uc3QgZXNjVG9FeGl0ID1cblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY190b19leGl0X3F1aWNrZWRpdCcpID09PSB0cnVlIHx8IC8vIOWFvOWuueiAgeiuvue9rmtleVxuXHRcdFx0U2V0dGluZ3MuZ2V0U2V0dGluZygnZXNjX3RvX2V4aXRfcXVpY2tlZGl0JykgPT09ICd0cnVlJyB8fFxuXHRcdFx0U2V0dGluZ3MuZ2V0U2V0dGluZygnZXNjVG9FeGl0UXVpY2tFZGl0JykgPT09IHRydWUgfHxcblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY1RvRXhpdFF1aWNrRWRpdCcpID09PSAndHJ1ZSc7XG5cdFx0Y29uc3QgY3VzdG9tRWRpdFRhZ3MgPSBTZXR0aW5ncy5nZXRTZXR0aW5nKCdjdXN0b21fZWRpdF90YWdzJyk7XG5cdFx0Y29uc3QgZGVmYXVsdEVkaXRUYWdzID0gW107XG5cdFx0Y29uc3QgZWRpdFRhZ3MgPSBjdXN0b21FZGl0VGFncz8ubGVuZ3RoID8gY3VzdG9tRWRpdFRhZ3MgOiBkZWZhdWx0RWRpdFRhZ3M7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0XHROb3RpZmljYXRpb24uZW1wdHkoKTtcblxuXHRcdGlmIChpc0VkaXRIaXN0b3J5UmV2aXNpb24pIHtcblx0XHRcdE5vdGlmaWNhdGlvbi53YXJuaW5nKGkxOG4udHJhbnNsYXRlKCdoaXN0b3J5X2VkaXRfd2FybmluZycpKTtcblx0XHR9XG5cblx0XHRjb25zdCBzaG91bGRTaG93Q3JlYXRlUGFnZVRpcCA9IGlzT3RoZXJQYWdlID8gIXJldmlzaW9uSWQgOiBpc0N1cnJlbnRQYWdlRW1wdHk7XG5cblx0XHRVSS5zaG93UXVpY2tFZGl0UGFuZWwoe1xuXHRcdFx0dGl0bGU6IGAke2kxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfdG9wYnRuJyl9JHtcblx0XHRcdFx0aXNFZGl0SGlzdG9yeVJldmlzaW9uID8gaTE4bi50cmFuc2xhdGUoJ2hpc3RvcnlfZWRpdF93YXJuaW5nJykgOiAnJ1xuXHRcdFx0fWAsXG5cdFx0XHRjb250ZW50OiBzaG91bGRTaG93Q3JlYXRlUGFnZVRpcCA/IGkxOG4udHJhbnNsYXRlKCdjcmVhdGVfcGFnZV90aXAnKSA6IHNlY3Rpb25Db250ZW50LFxuXHRcdFx0c3VtbWFyeSxcblx0XHRcdG9uQmFjazogVUkuaGlkZVF1aWNrRWRpdFBhbmVsLFxuXHRcdFx0b25QYXJzZTogKHdpa2lUZXh0KSA9PiB7XG5cdFx0XHRcdHJldHVybiBwYWdlLnBhcnNlV2lraVRleHQod2lraVRleHQpO1xuXHRcdFx0fSxcblx0XHRcdG9uRWRpdDogYXN5bmMgKHtjb250ZW50LCBzdW1tYXJ5LCBpc01pbm9yRWRpdH0pID0+IHtcblx0XHRcdFx0Y29uc3QgZWRpdFBheWxvYWQgPSB7XG5cdFx0XHRcdFx0Y29udGVudCxcblx0XHRcdFx0XHRjb25maWc6IHtcblx0XHRcdFx0XHRcdHN1bW1hcnksXG5cdFx0XHRcdFx0XHQuLi4oc2VjdGlvbk51bWJlciA9PT0gLTEgPyB7fSA6IHtzZWN0aW9uOiBzZWN0aW9uTnVtYmVyfSksXG5cdFx0XHRcdFx0XHQuLi4oZWRpdFRhZ3MubGVuZ3RoID8ge3RhZ3M6IGVkaXRUYWdzLmpvaW4oJ3wnKX0gOiB7fSksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKGlzTWlub3JFZGl0KSB7XG5cdFx0XHRcdFx0ZWRpdFBheWxvYWQuY29uZmlnLm1pbm9yID0gJ3RydWUnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVkaXRQYXlsb2FkLmNvbmZpZy5ub3RtaW5vciA9ICd0cnVlJztcblx0XHRcdFx0fVxuXHRcdFx0XHRhd2FpdCBwYWdlLmVkaXQoZWRpdFBheWxvYWQpO1xuXHRcdFx0fSxcblx0XHRcdGVzY0V4aXQ6IGVzY1RvRXhpdCxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVTaW1wbGVSZWRpcmVjdEJ1dHRvbkNsaWNrZWQgPSBhc3luYyAoKSA9PiB7XG5cdFx0VUkuc2hvd1NpbXBsZVJlZGlyZWN0UGFuZWwoe1xuXHRcdFx0b25FZGl0OiBhc3luYyAoe3RpdGxlLCBmb3JjZU92ZXJ3cml0ZSA9IGZhbHNlfSkgPT4ge1xuXHRcdFx0XHRjb25zdCBwYWdlID0gYXdhaXQgZ2V0UGFnZSh7dGl0bGV9KTtcblx0XHRcdFx0Y29uc3QgY3VycmVudFBhZ2VOYW1lID0gQ29uc3RhbnRzLmN1cnJlbnRQYWdlTmFtZTtcblx0XHRcdFx0Y29uc3QgcGF5bG9hZCA9IHtcblx0XHRcdFx0XHRjb250ZW50OiBgI1JFRElSRUNUIFtbJHtjdXJyZW50UGFnZU5hbWV9XV1gLFxuXHRcdFx0XHRcdGNvbmZpZzoge1xuXHRcdFx0XHRcdFx0c3VtbWFyeTogaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X2Zyb21fc3VtbWFyeScsIFt0aXRsZSwgY3VycmVudFBhZ2VOYW1lXSksXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fTtcblx0XHRcdFx0aWYgKCFmb3JjZU92ZXJ3cml0ZSkge1xuXHRcdFx0XHRcdHBheWxvYWQuY29uZmlnLmNyZWF0ZW9ubHkgPSAndHJ1ZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0YXdhaXQgcGFnZS5lZGl0KHBheWxvYWQpO1xuXHRcdFx0fSxcblx0XHRcdG9uU3VjY2VzczogKHt0aXRsZX0pID0+IHtcblx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IENvbnN0YW50cy5hcnRpY2xlUGF0aC5yZXBsYWNlKC9cXCQxL2dpLCB0aXRsZSk7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVNldHRpbmdzQnV0dG9uQ2xpY2tlZCA9IGFzeW5jICgpID0+IHtcblx0XHRVSS5zaG93U2V0dGluZ3NQYW5lbCh7XG5cdFx0XHRvblN1Ym1pdDogKHtzZXR0aW5nc30pID0+IHtcblx0XHRcdFx0SlNPTi5wYXJzZShzZXR0aW5ncyk7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdXaWtpcGx1c19TZXR0aW5ncycsIHNldHRpbmdzKTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlUHJlbG9hZCA9IGFzeW5jICh7c2VjdGlvbk51bWJlcn0pID0+IHtcblx0XHRhd2FpdCBjdXJyZW50UGFnZS5nZXRXaWtpVGV4dCh7XG5cdFx0XHRzZWN0aW9uOiBzZWN0aW9uTnVtYmVyLFxuXHRcdH0pO1xuXHR9O1xuXG5cdFVJLmluc2VydFRvcFF1aWNrRWRpdEVudHJ5KGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTZWN0aW9uUXVpY2tFZGl0RW50cmllcyhoYW5kbGVRdWlja0VkaXRCdXR0b25DbGlja2VkKTtcblx0VUkuaW5zZXJ0TGlua0VkaXRFbnRyaWVzKGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTaW1wbGVSZWRpcmVjdEJ1dHRvbihoYW5kbGVTaW1wbGVSZWRpcmVjdEJ1dHRvbkNsaWNrZWQpO1xuXHRVSS5pbnNlcnRTZXR0aW5nc1BhbmVsQnV0dG9uKGhhbmRsZVNldHRpbmdzQnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmJpbmRQcmVsb2FkRXZlbnRzKGhhbmRsZVByZWxvYWQpO1xufSk7XG4iLCAiaW1wb3J0ICcuL1dpa2lwbHVzLmxlc3MnO1xuXG4oYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRjb25zdCB7d2dBY3Rpb24sIHdnSXNBcnRpY2xlfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0aWYgKHdnQWN0aW9uICE9PSAndmlldycgfHwgIXdnSXNBcnRpY2xlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgeyd2aXN1YWxlZGl0b3ItZW5hYmxlJzogaXNWZUVuYWJsZX0gPSBtdy51c2VyLm9wdGlvbnMuZ2V0KCkgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG5cblx0Y29uc3QgbG9hZGVyID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdGF3YWl0IGltcG9ydCgnLi9tb2R1bGVzL2luZGV4Jyk7XG5cdH07XG5cblx0Lyogc2VlIDxodHRwczovL2dpdGh1Yi5jb20vV2lraXBsdXMvV2lraXBsdXMvaXNzdWVzLzY1PiAqL1xuXHRpZiAoaXNWZUVuYWJsZSkge1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LnZpc3VhbEVkaXRvci5jb3JlJyk7XG5cdH1cblxuXHR2b2lkIGxvYWRlcigpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUEsNkZBQUFBLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUSxTQUFVLElBQUk7QUFDeEIsYUFBTyxNQUFNLEdBQUcsU0FBUyxRQUFRO0FBQUEsSUFDbkM7QUFHQSxJQUFBQSxRQUFPO0FBQUEsSUFFTCxNQUFNLE9BQU8sY0FBYyxZQUFZLFVBQVUsS0FDakQsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNO0FBQUEsSUFFekMsTUFBTSxPQUFPLFFBQVEsWUFBWSxJQUFJLEtBQ3JDLE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTSxLQUN6QyxNQUFNLE9BQU8sV0FBUSxZQUFZLE9BQUk7QUFBQSxJQUVwQywyQkFBWTtBQUFFLGFBQU87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QSxHQUFBRCxnQkFBQTtJQUNQLENBQUE7QUFBQSxXQUFBLFNBRk1sTCxVQUFBO0FBQUEsYUFBQWtPLE9BQUF2QyxNQUFBLE1BQUFDLFNBQUE7SUFBQTtFQUFBLEVBQUE7QUFLTixNQUFJb0MsWUFBWTtBQUNmLFVBQU03WCxHQUFHNkosT0FBT0MsTUFBTSx1QkFBdUI7RUFDOUM7QUFFQSxPQUFLRCxPQUFPO0FBQ2IsQ0FBQSxFQUFHOyIsCiAgIm5hbWVzIjogWyJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJuYXZpZ2F0b3IiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJTeW1ib2wiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJkb2N1bWVudCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIlR5cGVFcnJvciIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiJCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIkNvbnN0YW50cyIsICJjb25zdGFudHNfZGVmYXVsdCIsICJpbml0X2NvbnN0YW50cyIsICJfX2VzbSIsICJ2ZXJzaW9uIiwgImlzQXJ0aWNsZSIsICJ3aW5kb3ciLCAibXciLCAiY29uZmlnIiwgImdldCIsICJjdXJyZW50UGFnZU5hbWUiLCAicmVwbGFjZSIsICJhcnRpY2xlSWQiLCAicmV2aXNpb25JZCIsICJsYXRlc3RSZXZpc2lvbklkIiwgImFydGljbGVQYXRoIiwgInNjcmlwdFBhdGgiLCAiYWN0aW9uIiwgInNraW4iLCAidXNlckdyb3VwcyIsICJ3aWtpSWQiLCAiUmVxdWVzdHMiLCAicmVxdWVzdHNfZGVmYXVsdCIsICJpbml0X3JlcXVlc3RzIiwgImJhc2UiLCAiY29uY2F0IiwgImxvY2F0aW9uIiwgInByb3RvY29sIiwgImhvc3QiLCAicXVlcnkiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidXJsIiwgIlVSTCIsICJfaSIsICJfT2JqZWN0JGtleXMiLCAiT2JqZWN0IiwgImtleXMiLCAibGVuZ3RoIiwgImtleSIsICJzZWFyY2hQYXJhbXMiLCAiYXBwZW5kIiwgInJlc3BvbnNlIiwgImZldGNoIiwgImNyZWRlbnRpYWxzIiwgImhlYWRlcnMiLCAianNvbiIsICJwb3N0IiwgInBheWxvYWQiLCAiZm9ybSIsICJGb3JtRGF0YSIsICJfaTIiLCAiX09iamVjdCRlbnRyaWVzIiwgImVudHJpZXMiLCAidmFsdWUiLCAibWV0aG9kIiwgImJvZHkiLCAiSTE4biIsICJpMThuX2RlZmF1bHQiLCAiaW5pdF9pMThuIiwgImxhbmd1YWdlIiwgImkxOG5EYXRhIiwgInNlc3Npb25VcGRhdGVMb2ciLCAiY29uc3RydWN0b3IiLCAiSlNPTiIsICJwYXJzZSIsICJsb2NhbFN0b3JhZ2UiLCAibmF2aWdhdG9yIiwgInRvTG93ZXJDYXNlIiwgImJyb3dzZXJMYW5ndWFnZSIsICJpMThuQ2FjaGUiLCAiZ2V0SXRlbSIsICJfaTMiLCAiX09iamVjdCRrZXlzMiIsICJzZXRJdGVtIiwgInRyYW5zbGF0ZSIsICJwbGFjZWhvbGRlcnMiLCAicmVzdWx0IiwgImxvYWRMYW5ndWFnZSIsICJfaXRlcmF0b3IiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiX3N0ZXAiLCAicyIsICJuIiwgImRvbmUiLCAiaW5kZXgiLCAicGxhY2Vob2xkZXIiLCAiZXJyIiwgImUiLCAiZiIsICJfdGhpcyIsICJpbmNsdWRlcyIsICJub3dWZXJzaW9uIiwgInB1c2giLCAiX192ZXJzaW9uIiwgImNvbnNvbGUiLCAiaW5mbyIsICJzdHJpbmdpZnkiLCAiV2lraXBsdXNFcnJvciIsICJMb2ciLCAibG9nX2RlZmF1bHQiLCAiaW5pdF9sb2ciLCAiRXJyb3IiLCAibWVzc2FnZSIsICJjb2RlIiwgImRlYnVnIiwgImVycm9yIiwgImVycm9yQ29kZSIsICJwYXlsb2FkcyIsICJ0ZW1wbGF0ZSIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJpIiwgInYiLCAiUmVnRXhwIiwgIldpa2kiLCAid2lraV9kZWZhdWx0IiwgImluaXRfd2lraSIsICJwYWdlSW5mb0NhY2hlIiwgImdldEVkaXRUb2tlbiIsICJtZXRhIiwgImZvcm1hdCIsICJ0b2tlbnMiLCAiY3NyZnRva2VuIiwgImdldFBhZ2VJbmZvIiwgInRpdGxlIiwgIl90aGlzMiIsICJwYXJhbXMiLCAicHJvcCIsICJydnByb3AiLCAicmV2aWRzIiwgInRpbWVzdGFtcCIsICJyZXZpZCIsICJ0aXRsZXMiLCAicGFnZXMiLCAicGFnZUluZm8iLCAicmV2aXNpb25zIiwgImdldFdpa2lUZXh0IiwgInNlY3Rpb24iLCAidGV4dCIsICJwYXJzZVdpa2lUZXh0IiwgIndpa2l0ZXh0IiwgInBzdCIsICJlZGl0IiwgImNvbnRlbnQiLCAiZWRpdFRva2VuIiwgImFkZGl0aW9uYWxDb25maWciLCAidG9rZW4iLCAiYmFzZXRpbWVzdGFtcCIsICJ3YXJuaW5nIiwgImdldExhdGVzdFJldmlzaW9uSWRGb3JQYWdlIiwgIl90aGlzMyIsICJQYWdlIiwgInBhZ2VfZGVmYXVsdCIsICJpbml0X3BhZ2UiLCAiaW5pdGVkIiwgImlzTmV3UGFnZSIsICJzZWN0aW9uQ2FjaGUiLCAiaW5pdCIsICJfdGhpczQiLCAicHJvbWlzZUFyciIsICJnZXRUaW1lc3RhbXAiLCAiUHJvbWlzZSIsICJhbGwiLCAiX3RoaXM1IiwgImxvYWRlciIsICJ1c2luZyIsICJ1c2VyIiwgIl90aGlzNiIsICJfdGhpczciLCAic2VjIiwgIndpa2lUZXh0IiwgIl90aGlzOCIsICJfdGhpczkiLCAiY3JlYXRlb25seSIsICJOb3RpZmljYXRpb24iLCAibm90aWZpY2F0aW9uX2RlZmF1bHQiLCAiaW5pdF9ub3RpZmljYXRpb24iLCAiJCIsICJkaXNwbGF5IiwgInR5cGUiLCAiY2FsbGJhY2siLCAiYWRkQ2xhc3MiLCAiZmluZCIsICJsYXN0IiwgImZhZGVJbiIsICJiaW5kIiwgImNsZWFyIiwgInNlbGYiLCAib24iLCAic2xpZGVMZWZ0IiwgInN1Y2Nlc3MiLCAiY2hpbGRyZW4iLCAiZmlyc3QiLCAiZmFkZU91dCIsICJyZW1vdmUiLCAic2V0VGltZW91dCIsICJlbXB0eSIsICJlYWNoIiwgImVsZSIsICJkZWxheSIsICJzcGVlZCIsICJjc3MiLCAiYW5pbWF0ZSIsICJsZWZ0IiwgInNsZWVwIiwgInNsZWVwX2RlZmF1bHQiLCAiaW5pdF9zbGVlcCIsICJ0aW1lIiwgInJlc29sdmUiLCAicGFyc2VRdWVyeSIsICJyZWciLCAibWF0Y2giLCAiZXhlYyIsICJkZWNvZGVVUklDb21wb25lbnQiLCAiaW5pdF9oZWxwZXJzIiwgIlVJIiwgInVpX2RlZmF1bHQiLCAiaW5pdF91aSIsICJxdWlja0VkaXRQYW5lbFZpc2libGUiLCAic2Nyb2xsVG9wIiwgImNyZWF0ZURpYWxvZ0JveCIsICJ3aWR0aCIsICJjbGllbnRXaWR0aCIsICJpbm5lcldpZHRoIiwgImNsaWVudEhlaWdodCIsICJpbm5lckhlaWdodCIsICJkaWFsb2dXaWR0aCIsICJNYXRoIiwgIm1pbiIsICJkaWFsb2dCb3giLCAidG9wIiwgImRvY3VtZW50IiwgImh0bWwiLCAicGFyZW50IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAib25iZWZvcmV1bmxvYWQiLCAiYmluZERyYWdnaW5nIiwgImVsZW1lbnQiLCAibW91c2Vkb3duIiwgImJhc2VYIiwgImNsaWVudFgiLCAiYmFzZVkiLCAiY2xpZW50WSIsICJiYXNlT2Zmc2V0WCIsICJvZmZzZXQiLCAiYmFzZU9mZnNldFkiLCAiZTIiLCAidW5iaW5kIiwgIm9mZiIsICJhZGRGdW5jdGlvbkJ1dHRvbiIsICJpZCIsICJidXR0b24iLCAiYXR0ciIsICJpbnNlcnRTaW1wbGVSZWRpcmVjdEJ1dHRvbiIsICJvbkNsaWNrIiwgImluc2VydFNldHRpbmdzUGFuZWxCdXR0b24iLCAiaW5zZXJ0VG9wUXVpY2tFZGl0RW50cnkiLCAidG9wQnRuIiwgInRvcEJ0bkxpbmsiLCAic2VjdGlvbk51bWJlciIsICJ0YXJnZXRQYWdlTmFtZSIsICJhZnRlciIsICJpbnNlcnRTZWN0aW9uUXVpY2tFZGl0RW50cmllcyIsICJzZWN0aW9uQnRuIiwgImVkaXRVUkwiLCAic2VjdGlvblRhcmdldE5hbWUiLCAiY2xvbmVOb2RlIiwgInByZXYiLCAiY2xvbmUiLCAic2VjdGlvbk5hbWUiLCAidHJpbSIsICJfc2VjdGlvbkJ0biIsICJiZWZvcmUiLCAiaW5zZXJ0TGlua0VkaXRFbnRyaWVzIiwgImhyZWYiLCAiY2xhc3MiLCAiX3BhcmFtcyRzZWN0aW9uIiwgInNob3dRdWlja0VkaXRQYW5lbCIsICJzdW1tYXJ5IiwgIm9uQmFjayIsICJvblBhcnNlIiwgIm9uRWRpdCIsICJlc2NFeGl0IiwgImhpZGVRdWlja0VkaXRQYW5lbCIsICJiYWNrQnRuIiwgImp1bXBCdG4iLCAiaW5wdXRCb3giLCAicHJldmlld0JveCIsICJzdW1tYXJ5Qm94IiwgImVkaXRTdWJtaXRCdG4iLCAicHJldmlld1N1Ym1pdEJ0biIsICJpc01pbm9yRWRpdCIsICJtYXJnaW4iLCAiZWRpdEJvZHkiLCAidmFsIiwgInByZWxvYWRCYW5uZXIiLCAidGltZXIiLCAiRGF0ZSIsICJub3ciLCAiZWRpdEJhbm5lciIsICJpcyIsICJ1c2VUaW1lIiwgInRvU3RyaW5nIiwgInJlbG9hZCIsICJsb2ciLCAiY3RybEtleSIsICJ3aGljaCIsICJzaGlmdEtleSIsICJ0cmlnZ2VyIiwgInByZXZlbnREZWZhdWx0IiwgInN0b3BQcm9wYWdhdGlvbiIsICJzaG93U2ltcGxlUmVkaXJlY3RQYW5lbCIsICJvblN1Y2Nlc3MiLCAiX3RoaXMxMCIsICJpbnB1dCIsICJhcHBseUJ0biIsICJjYW5jZWxCdG4iLCAiY29udGludWVCdG4iLCAiZGlhbG9nIiwgImZvcmNlT3ZlcndyaXRlIiwgImhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsIiwgImVycm9yMiIsICJzaG93U2V0dGluZ3NQYW5lbCIsICJvblN1Ym1pdCIsICJfdGhpczExIiwgIldpa2lwbHVzX1NldHRpbmdzIiwgInNldHRpbmdzIiwgInNhdmVkQmFubmVyIiwgImhpZGVTZXR0aW5nc1BhbmVsIiwgImJpbmRQcmVsb2FkRXZlbnRzIiwgIm9uUHJlbG9hZCIsICJTZXR0aW5ncyIsICJzZXR0aW5nc19kZWZhdWx0IiwgImluaXRfc2V0dGluZ3MiLCAiZ2V0U2V0dGluZyIsICJvYmplY3QiLCAidyIsICJjdXN0b21TZXR0aW5nRnVuY3Rpb24iLCAiRnVuY3Rpb24iLCAiX2k0IiwgIl9PYmplY3Qka2V5czMiLCAia2V5MiIsICJtb2R1bGVzX2V4cG9ydHMiLCAiaW5pdF9tb2R1bGVzIiwgIlBhZ2VzIiwgImlzQ3VycmVudFBhZ2VFbXB0eSIsICJnZXRQYWdlIiwgIl9yZWY3IiwgInJldmlzaW9uSWQyIiwgIm5ld1BhZ2UiLCAiX3giLCAiYXBwbHkiLCAiYXJndW1lbnRzIiwgIl9XaWtpcGx1c1BhZ2VzIiwgImN1cnJlbnRQYWdlIiwgImhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQiLCAiX3JlZjgiLCAiaXNPdGhlclBhZ2UiLCAicGFnZSIsICJjdXN0b21TdW1tYXJ5IiwgInNlY3Rpb25Db250ZW50IiwgImlzRWRpdEhpc3RvcnlSZXZpc2lvbiIsICJlc2NUb0V4aXQiLCAiY3VzdG9tRWRpdFRhZ3MiLCAiZGVmYXVsdEVkaXRUYWdzIiwgImVkaXRUYWdzIiwgImNsZWFyVGltZW91dCIsICJzaG91bGRTaG93Q3JlYXRlUGFnZVRpcCIsICJfcmVmOSIsICJzdW1tYXJ5MiIsICJlZGl0UGF5bG9hZCIsICJ0YWdzIiwgImpvaW4iLCAibWlub3IiLCAibm90bWlub3IiLCAiX3gyIiwgImhhbmRsZVNpbXBsZVJlZGlyZWN0QnV0dG9uQ2xpY2tlZCIsICJfcmVmMTAiLCAiX3JlZjExIiwgImN1cnJlbnRQYWdlTmFtZTIiLCAiX3gzIiwgImhhbmRsZVNldHRpbmdzQnV0dG9uQ2xpY2tlZCIsICJfcmVmMTIiLCAiaGFuZGxlUHJlbG9hZCIsICJfcmVmMTMiLCAiX3g0IiwgIndnQWN0aW9uIiwgIndnSXNBcnRpY2xlIiwgImlzVmVFbmFibGUiLCAib3B0aW9ucyIsICJfcmVmMTUiLCAidGhlbiJdCn0K
