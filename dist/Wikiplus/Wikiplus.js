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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/global-this.js
var require_global_this = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/global-this.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/fails.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/descriptors.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/function-bind-native.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/function-call.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/create-property-descriptor.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/function-uncurry-this.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/classof-raw.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/indexed-object.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/is-null-or-undefined.js"(exports, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/require-object-coercible.js"(exports, module2) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/to-indexed-object.js"(exports, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/is-callable.js"(exports, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/is-object.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/get-built-in.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/object-is-prototype-of.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/environment-user-agent.js
var require_environment_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/environment-user-agent.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var navigator2 = globalThis2.navigator;
    var userAgent = navigator2 && navigator2.userAgent;
    module2.exports = userAgent ? String(userAgent) : "";
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/environment-v8-version.js
var require_environment_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/environment-v8-version.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/is-symbol.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/try-to-string.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/a-callable.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/get-method.js"(exports, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/is-pure.js"(exports, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/define-global-property.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/shared-store.js"(exports, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global_this();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.38.1",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/shared.js"(exports, module2) {
    "use strict";
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/to-object.js"(exports, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/has-own-property.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/uid.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/well-known-symbol.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/to-primitive.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/to-property-key.js"(exports, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/document-create-element.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/ie8-dom-define.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/an-object.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/object-define-property.js"(exports) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/function-name.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/inspect-source.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module2) {
    "use strict";
    var globalThis2 = require_global_this();
    var isCallable = require_is_callable();
    var WeakMap = globalThis2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/shared-key.js"(exports, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/hidden-keys.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/internal-state.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/make-built-in.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/define-built-in.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/math-trunc.js"(exports, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module2) {
    "use strict";
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/to-absolute-index.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/to-length.js"(exports, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/length-of-array-like.js"(exports, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/array-includes.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/object-keys-internal.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/enum-bug-keys.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    "use strict";
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/own-keys.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/copy-constructor-properties.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/is-forced.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/export.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/is-array.js"(exports, module2) {
    "use strict";
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof(argument) === "Array";
    };
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/array-set-length.js
var require_array_set_length = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/array-set-length.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports, module2) {
    "use strict";
    var $TypeError = TypeError;
    var MAX_SAFE_INTEGER = 9007199254740991;
    module2.exports = function(it) {
      if (it > MAX_SAFE_INTEGER) throw $TypeError("Maximum allowed index exceeded");
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/modules/es.array.push.js
var require_es_array_push = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/modules/es.array.push.js"() {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/to-string-tag-support.js"(exports, module2) {
    "use strict";
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module2.exports = String(test) === "[object z]";
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/classof.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/to-string.js
var require_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/to-string.js"(exports, module2) {
    "use strict";
    var classof = require_classof();
    var $String = String;
    module2.exports = function(argument) {
      if (classof(argument) === "Symbol") throw new TypeError("Cannot convert a Symbol value to a string");
      return $String(argument);
    };
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/validate-arguments-length.js
var require_validate_arguments_length = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/validate-arguments-length.js"(exports, module2) {
    "use strict";
    var $TypeError = TypeError;
    module2.exports = function(passed, required) {
      if (passed < required) throw new $TypeError("Not enough arguments");
      return passed;
    };
  }
});

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/modules/web.url-search-params.delete.js
var require_web_url_search_params_delete = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/modules/web.url-search-params.delete.js"() {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/modules/web.url-search-params.has.js
var require_web_url_search_params_has = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/modules/web.url-search-params.has.js"() {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/define-built-in-accessor.js
var require_define_built_in_accessor = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/define-built-in-accessor.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/modules/web.url-search-params.size.js
var require_web_url_search_params_size = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/modules/web.url-search-params.size.js"() {
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
      userAgent = "YsArchives/1.1 Wikiplus/".concat(this.version, " (").concat(this.wikiId, ")");
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
              "Api-User-Agent": constants_default.userAgent
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
              "Api-User-Agent": constants_default.userAgent
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
            const params = {
              action: "query",
              prop: "revisions",
              rvprop: "content",
              format: "json",
              revids: revisionId
            };
            if (revisionId) {
              params.revids = revisionId;
            }
            if (section) {
              params.rvsection = section;
            }
            const response = yield requests_default.get(params);
            if (response.query && response.query.pages) {
              if (Object.keys(response.query.pages)[0] === "-1") {
                return "";
              }
              const pageInfo = response.query.pages[Object.keys(response.query.pages)[0]].revisions[0];
              return pageInfo["*"];
            }
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
//! src/Wikiplus/modules/wikiplus.less
var init_wikiplus = __esm({
  "src/Wikiplus/modules/wikiplus.less"() {
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
    init_wikiplus();
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
//! src/Wikiplus/resize.ts
var resize_exports = {};
var import_ext_gadget;
var init_resize = __esm({
  "src/Wikiplus/resize.ts"() {
    "use strict";
    import_ext_gadget = require("ext.gadget.Util");
    void (0, import_ext_gadget.getBody)().then(($body) => {
      $(window).on("resize", () => {
        const windowWidth = $(window).width();
        const $wikiplusInterbox = $body.find(".Wikiplus-InterBox");
        if ($wikiplusInterbox) {
          $wikiplusInterbox.css("max-width", "calc(".concat(windowWidth, "px - 2em)"));
        }
      });
    });
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
      yield Promise.resolve().then(() => (init_resize(), resize_exports));
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

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tc3RyaW5nLXRhZy1zdXBwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXN0cmluZy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGguanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnVybC1zZWFyY2gtcGFyYW1zLmRlbGV0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIudXJsLXNlYXJjaC1wYXJhbXMuaGFzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi51cmwtc2VhcmNoLXBhcmFtcy5zaXplLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL2NvbnN0YW50cy5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9yZXF1ZXN0cy5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9pMThuLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL3V0aWxzL2xvZy5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy9zZXJ2aWNlcy93aWtpLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL2NvcmUvcGFnZS5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy9jb3JlL25vdGlmaWNhdGlvbi5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9zbGVlcC5qcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy91dGlscy9oZWxwZXJzLmpzIiwgInNyYy9XaWtpcGx1cy9tb2R1bGVzL2NvcmUvdWkuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvdXRpbHMvc2V0dGluZ3MuanMiLCAic3JjL1dpa2lwbHVzL21vZHVsZXMvd2lraXBsdXMubGVzcyIsICJzcmMvV2lraXBsdXMvbW9kdWxlcy9pbmRleC5qcyIsICJzcmMvV2lraXBsdXMvcmVzaXplLnRzIiwgInNyYy9XaWtpcGx1cy9XaWtpcGx1cy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiJ3VzZSBzdHJpY3QnO1xudmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09PSBNYXRoICYmIGl0O1xufTtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbm1vZHVsZS5leHBvcnRzID1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWdsb2JhbC10aGlzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIGdsb2JhbFRoaXMgPT0gJ29iamVjdCcgJiYgZ2xvYmFsVGhpcykgfHxcbiAgY2hlY2sodHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiB3aW5kb3cpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmKSB8fFxuICBjaGVjayh0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCkgfHxcbiAgY2hlY2sodHlwZW9mIHRoaXMgPT0gJ29iamVjdCcgJiYgdGhpcykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jIC0tIGZhbGxiYWNrXG4gIChmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KSgpIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPT0gNztcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1mdW5jdGlvbi1wcm90b3R5cGUtYmluZCAtLSBzYWZlXG4gIHZhciB0ZXN0ID0gKGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSkuYmluZCgpO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuIHR5cGVvZiB0ZXN0ICE9ICdmdW5jdGlvbicgfHwgdGVzdC5oYXNPd25Qcm9wZXJ0eSgncHJvdG90eXBlJyk7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIGNhbGwgPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbDtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IGNhbGwuYmluZChjYWxsKSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGNhbGwuYXBwbHkoY2FsbCwgYXJndW1lbnRzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX0JJTkQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUnKTtcblxudmFyIEZ1bmN0aW9uUHJvdG90eXBlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xudmFyIGNhbGwgPSBGdW5jdGlvblByb3RvdHlwZS5jYWxsO1xudmFyIHVuY3VycnlUaGlzV2l0aEJpbmQgPSBOQVRJVkVfQklORCAmJiBGdW5jdGlvblByb3RvdHlwZS5iaW5kLmJpbmQoY2FsbCwgY2FsbCk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyB1bmN1cnJ5VGhpc1dpdGhCaW5kIDogZnVuY3Rpb24gKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNhbGwuYXBwbHkoZm4sIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoe30udG9TdHJpbmcpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gc3RyaW5nU2xpY2UodG9TdHJpbmcoaXQpLCA4LCAtMSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG52YXIgc3BsaXQgPSB1bmN1cnJ5VGhpcygnJy5zcGxpdCk7XG5cbi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5tb2R1bGUuZXhwb3J0cyA9IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gdGhyb3dzIGFuIGVycm9yIGluIHJoaW5vLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcmhpbm8vaXNzdWVzLzM0NlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zIC0tIHNhZmVcbiAgcmV0dXJuICEkT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT09ICdTdHJpbmcnID8gc3BsaXQoaXQsICcnKSA6ICRPYmplY3QoaXQpO1xufSA6ICRPYmplY3Q7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gd2UgY2FuJ3QgdXNlIGp1c3QgYGl0ID09IG51bGxgIHNpbmNlIG9mIGBkb2N1bWVudC5hbGxgIHNwZWNpYWwgY2FzZVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdC1hZWNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA9PT0gbnVsbCB8fCBpdCA9PT0gdW5kZWZpbmVkO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGl0KSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIEluZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSW5kZXhlZE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGl0KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3RcbnZhciBkb2N1bWVudEFsbCA9IHR5cGVvZiBkb2N1bWVudCA9PSAnb2JqZWN0JyAmJiBkb2N1bWVudC5hbGw7XG5cbi8vIGBJc0NhbGxhYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNjYWxsYWJsZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tdHlwZW9mLXVuZGVmaW5lZCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgZG9jdW1lbnRBbGwgPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnRBbGwgIT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbicgfHwgYXJndW1lbnQgPT09IGRvY3VtZW50QWxsO1xufSA6IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09ICdmdW5jdGlvbic7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IGlzQ2FsbGFibGUoaXQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIGFGdW5jdGlvbiA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gaXNDYWxsYWJsZShhcmd1bWVudCkgPyBhcmd1bWVudCA6IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWV0aG9kKSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMiA/IGFGdW5jdGlvbihnbG9iYWxUaGlzW25hbWVzcGFjZV0pIDogZ2xvYmFsVGhpc1tuYW1lc3BhY2VdICYmIGdsb2JhbFRoaXNbbmFtZXNwYWNlXVttZXRob2RdO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdW5jdXJyeVRoaXMoe30uaXNQcm90b3R5cGVPZik7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxudmFyIG5hdmlnYXRvciA9IGdsb2JhbFRoaXMubmF2aWdhdG9yO1xudmFyIHVzZXJBZ2VudCA9IG5hdmlnYXRvciAmJiBuYXZpZ2F0b3IudXNlckFnZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVzZXJBZ2VudCA/IFN0cmluZyh1c2VyQWdlbnQpIDogJyc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbFRoaXMucHJvY2VzcztcbnZhciBEZW5vID0gZ2xvYmFsVGhpcy5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG52YXIgJFN0cmluZyA9IGdsb2JhbFRoaXMuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsVGhpcywga2V5LCB7IHZhbHVlOiB2YWx1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBnbG9iYWxUaGlzW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFRoaXNbU0hBUkVEXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShTSEFSRUQsIHt9KTtcblxuKHN0b3JlLnZlcnNpb25zIHx8IChzdG9yZS52ZXJzaW9ucyA9IFtdKSkucHVzaCh7XG4gIHZlcnNpb246ICczLjM4LjEnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMTQtMjAyNCBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KScsXG4gIGxpY2Vuc2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9ibG9iL3YzLjM4LjEvTElDRU5TRScsXG4gIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzJ1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgfHwge30pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gJE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcblxudmFyIGhhc093blByb3BlcnR5ID0gdW5jdXJyeVRoaXMoe30uaGFzT3duUHJvcGVydHkpO1xuXG4vLyBgSGFzT3duUHJvcGVydHlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1oYXNvd25wcm9wZXJ0eVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1oYXNvd24gLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaGFzT3duIHx8IGZ1bmN0aW9uIGhhc093bihpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eSh0b09iamVjdChpdCksIGtleSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxudmFyIGlkID0gMDtcbnZhciBwb3N0Zml4ID0gTWF0aC5yYW5kb20oKTtcbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKDEuMC50b1N0cmluZyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArIHRvU3RyaW5nKCsraWQgKyBwb3N0Zml4LCAzNik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBTeW1ib2wgPSBnbG9iYWxUaGlzLlN5bWJvbDtcbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sWydmb3InXSB8fCBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzT3duKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkpIHtcbiAgICBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBOQVRJVkVfU1lNQk9MICYmIGhhc093bihTeW1ib2wsIG5hbWUpXG4gICAgICA/IFN5bWJvbFtuYW1lXVxuICAgICAgOiBjcmVhdGVXZWxsS25vd25TeW1ib2woJ1N5bWJvbC4nICsgbmFtZSk7XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGlzU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXN5bWJvbCcpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgb3JkaW5hcnlUb1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vcmRpbmFyeS10by1wcmltaXRpdmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgVE9fUFJJTUlUSVZFID0gd2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5wdXQsIHByZWYpIHtcbiAgaWYgKCFpc09iamVjdChpbnB1dCkgfHwgaXNTeW1ib2woaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBleG90aWNUb1ByaW0gPSBnZXRNZXRob2QoaW5wdXQsIFRPX1BSSU1JVElWRSk7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChleG90aWNUb1ByaW0pIHtcbiAgICBpZiAocHJlZiA9PT0gdW5kZWZpbmVkKSBwcmVmID0gJ2RlZmF1bHQnO1xuICAgIHJlc3VsdCA9IGNhbGwoZXhvdGljVG9QcmltLCBpbnB1dCwgcHJlZik7XG4gICAgaWYgKCFpc09iamVjdChyZXN1bHQpIHx8IGlzU3ltYm9sKHJlc3VsdCkpIHJldHVybiByZXN1bHQ7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG4gIH1cbiAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdudW1iZXInO1xuICByZXR1cm4gb3JkaW5hcnlUb1ByaW1pdGl2ZShpbnB1dCwgcHJlZik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcblxuLy8gYFRvUHJvcGVydHlLZXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3Byb3BlcnR5a2V5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsICdzdHJpbmcnKTtcbiAgcmV0dXJuIGlzU3ltYm9sKGtleSkgPyBrZXkgOiBrZXkgKyAnJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsVGhpcy5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFua3MgdG8gSUU4IGZvciBpdHMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzT3duKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFjYWxsKHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYsIE8sIFApLCBPW1BdKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVjggfiBDaHJvbWUgMzYtXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMzM0XG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ3Byb3RvdHlwZScsIHtcbiAgICB2YWx1ZTogNDIsXG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pLnByb3RvdHlwZSAhPT0gNDI7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IFR5cGUoYXJndW1lbnQpIGlzIE9iamVjdGBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc09iamVjdChhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJFN0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIEVOVU1FUkFCTEUgPSAnZW51bWVyYWJsZSc7XG52YXIgQ09ORklHVVJBQkxFID0gJ2NvbmZpZ3VyYWJsZSc7XG52YXIgV1JJVEFCTEUgPSAnd3JpdGFibGUnO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAodHlwZW9mIE8gPT09ICdmdW5jdGlvbicgJiYgUCA9PT0gJ3Byb3RvdHlwZScgJiYgJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzICYmIFdSSVRBQkxFIGluIEF0dHJpYnV0ZXMgJiYgIUF0dHJpYnV0ZXNbV1JJVEFCTEVdKSB7XG4gICAgdmFyIGN1cnJlbnQgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnRbV1JJVEFCTEVdKSB7XG4gICAgICBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogQ09ORklHVVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0NPTkZJR1VSQUJMRV0gOiBjdXJyZW50W0NPTkZJR1VSQUJMRV0sXG4gICAgICAgIGVudW1lcmFibGU6IEVOVU1FUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbRU5VTUVSQUJMRV0gOiBjdXJyZW50W0VOVU1FUkFCTEVdLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9IHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG59IDogJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXREZXNjcmlwdG9yID0gREVTQ1JJUFRPUlMgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIEVYSVNUUyA9IGhhc093bihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKTtcbi8vIGFkZGl0aW9uYWwgcHJvdGVjdGlvbiBmcm9tIG1pbmlmaWVkIC8gbWFuZ2xlZCAvIGRyb3BwZWQgZnVuY3Rpb24gbmFtZXNcbnZhciBQUk9QRVIgPSBFWElTVFMgJiYgKGZ1bmN0aW9uIHNvbWV0aGluZygpIHsgLyogZW1wdHkgKi8gfSkubmFtZSA9PT0gJ3NvbWV0aGluZyc7XG52YXIgQ09ORklHVVJBQkxFID0gRVhJU1RTICYmICghREVTQ1JJUFRPUlMgfHwgKERFU0NSSVBUT1JTICYmIGdldERlc2NyaXB0b3IoRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJykuY29uZmlndXJhYmxlKSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFWElTVFM6IEVYSVNUUyxcbiAgUFJPUEVSOiBQUk9QRVIsXG4gIENPTkZJR1VSQUJMRTogQ09ORklHVVJBQkxFXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb24udG9TdHJpbmcpO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYGNvcmUtanNAMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAoIWlzQ2FsbGFibGUoc3RvcmUuaW5zcGVjdFNvdXJjZSkpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0NhbGxhYmxlKFdlYWtNYXApICYmIC9uYXRpdmUgY29kZS8udGVzdChTdHJpbmcoV2Vha01hcCkpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2Vhay1tYXAtYmFzaWMtZGV0ZWN0aW9uJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxudmFyIE9CSkVDVF9BTFJFQURZX0lOSVRJQUxJWkVEID0gJ09iamVjdCBhbHJlYWR5IGluaXRpYWxpemVkJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWxUaGlzLlR5cGVFcnJvcjtcbnZhciBXZWFrTWFwID0gZ2xvYmFsVGhpcy5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVAgfHwgc2hhcmVkLnN0YXRlKSB7XG4gIHZhciBzdG9yZSA9IHNoYXJlZC5zdGF0ZSB8fCAoc2hhcmVkLnN0YXRlID0gbmV3IFdlYWtNYXAoKSk7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc3RvcmUuZ2V0ID0gc3RvcmUuZ2V0O1xuICBzdG9yZS5oYXMgPSBzdG9yZS5oYXM7XG4gIHN0b3JlLnNldCA9IHN0b3JlLnNldDtcbiAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoc3RvcmUuaGFzKGl0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgc3RvcmUuc2V0KGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0KGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmhhcyhpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChoYXNPd24oaXQsIFNUQVRFKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLkNPTkZJR1VSQUJMRTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgam9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xuXG52YXIgQ09ORklHVVJBQkxFX0xFTkdUSCA9IERFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdsZW5ndGgnLCB7IHZhbHVlOiA4IH0pLmxlbmd0aCAhPT0gODtcbn0pO1xuXG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbnZhciBtYWtlQnVpbHRJbiA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBuYW1lLCBvcHRpb25zKSB7XG4gIGlmIChzdHJpbmdTbGljZSgkU3RyaW5nKG5hbWUpLCAwLCA3KSA9PT0gJ1N5bWJvbCgnKSB7XG4gICAgbmFtZSA9ICdbJyArIHJlcGxhY2UoJFN0cmluZyhuYW1lKSwgL15TeW1ib2xcXCgoW14pXSopXFwpLiokLywgJyQxJykgKyAnXSc7XG4gIH1cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZXR0ZXIpIG5hbWUgPSAnZ2V0ICcgKyBuYW1lO1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNldHRlcikgbmFtZSA9ICdzZXQgJyArIG5hbWU7XG4gIGlmICghaGFzT3duKHZhbHVlLCAnbmFtZScpIHx8IChDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSAmJiB2YWx1ZS5uYW1lICE9PSBuYW1lKSkge1xuICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICduYW1lJywgeyB2YWx1ZTogbmFtZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICAgIGVsc2UgdmFsdWUubmFtZSA9IG5hbWU7XG4gIH1cbiAgaWYgKENPTkZJR1VSQUJMRV9MRU5HVEggJiYgb3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2FyaXR5JykgJiYgdmFsdWUubGVuZ3RoICE9PSBvcHRpb25zLmFyaXR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkodmFsdWUsICdsZW5ndGgnLCB7IHZhbHVlOiBvcHRpb25zLmFyaXR5IH0pO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdjb25zdHJ1Y3RvcicpICYmIG9wdGlvbnMuY29uc3RydWN0b3IpIHtcbiAgICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICdwcm90b3R5cGUnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTtcbiAgICAvLyBpbiBWOCB+IENocm9tZSA1MywgcHJvdG90eXBlcyBvZiBzb21lIG1ldGhvZHMsIGxpa2UgYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgLCBhcmUgbm9uLXdyaXRhYmxlXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5wcm90b3R5cGUpIHZhbHVlLnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICB2YXIgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG4gIGlmICghaGFzT3duKHN0YXRlLCAnc291cmNlJykpIHtcbiAgICBzdGF0ZS5zb3VyY2UgPSBqb2luKFRFTVBMQVRFLCB0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyA/IG5hbWUgOiAnJyk7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcblxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0ZW5kLW5hdGl2ZSAtLSByZXF1aXJlZFxuRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gbWFrZUJ1aWx0SW4oZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKHRoaXMpICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59LCAndG9TdHJpbmcnKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucy5lbnVtZXJhYmxlO1xuICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uYW1lIDoga2V5O1xuICBpZiAoaXNDYWxsYWJsZSh2YWx1ZSkpIG1ha2VCdWlsdEluKHZhbHVlLCBuYW1lLCBvcHRpb25zKTtcbiAgaWYgKG9wdGlvbnMuZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVHbG9iYWxQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFvcHRpb25zLnVuc2FmZSkgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGVsc2UgaWYgKE9ba2V5XSkgc2ltcGxlID0gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6ICFvcHRpb25zLm5vbkNvbmZpZ3VyYWJsZSxcbiAgICAgIHdyaXRhYmxlOiAhb3B0aW9ucy5ub25Xcml0YWJsZVxuICAgIH0pO1xuICB9IHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBNYXRoLnRydW5jYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWF0aC50cnVuY1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hdGgtdHJ1bmMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnRydW5jIHx8IGZ1bmN0aW9uIHRydW5jKHgpIHtcbiAgdmFyIG4gPSAreDtcbiAgcmV0dXJuIChuID4gMCA/IGZsb29yIDogY2VpbCkobik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0cnVuYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYXRoLXRydW5jJyk7XG5cbi8vIGBUb0ludGVnZXJPckluZmluaXR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbnRlZ2Vyb3JpbmZpbml0eVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIG51bWJlciA9ICthcmd1bWVudDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIG51bWJlciAhPT0gbnVtYmVyIHx8IG51bWJlciA9PT0gMCA/IDAgOiB0cnVuYyhudW1iZXIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlck9ySW5maW5pdHkoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbGVuID0gdG9JbnRlZ2VyT3JJbmZpbml0eShhcmd1bWVudCk7XG4gIHJldHVybiBsZW4gPiAwID8gbWluKGxlbiwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYExlbmd0aE9mQXJyYXlMaWtlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGVuZ3Rob2ZhcnJheWxpa2Vcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdG9MZW5ndGgob2JqLmxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICAgIGlmICh2YWx1ZSAhPT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXNPd24oaGlkZGVuS2V5cywga2V5KSAmJiBoYXNPd24oTywga2V5KSAmJiBwdXNoKHJlc3VsdCwga2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhc093bihPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCBwdXNoKHJlc3VsdCwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGNvbmNhdChrZXlzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UsIGV4Y2VwdGlvbnMpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpICYmICEoZXhjZXB0aW9ucyAmJiBoYXNPd24oZXhjZXB0aW9ucywga2V5KSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogaXNDYWxsYWJsZShkZXRlY3Rpb24pID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAgICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMuZG9udENhbGxHZXRTZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4gIG9wdGlvbnMubmFtZSAgICAgICAgICAgLSB0aGUgLm5hbWUgb2YgdGhlIGZ1bmN0aW9uIGlmIGl0IGRvZXMgbm90IG1hdGNoIHRoZSBrZXlcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFRoaXNbVEFSR0VUXSB8fCBkZWZpbmVHbG9iYWxQcm9wZXJ0eShUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzW1RBUkdFVF0gJiYgZ2xvYmFsVGhpc1tUQVJHRVRdLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLmRvbnRDYWxsR2V0U2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIGRlZmluZUJ1aWx0SW4odGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgSXNBcnJheWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzYXJyYXlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1pc2FycmF5IC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZ3VtZW50KSB7XG4gIHJldHVybiBjbGFzc29mKGFyZ3VtZW50KSA9PT0gJ0FycmF5Jztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBTYWZhcmkgPCAxMyBkb2VzIG5vdCB0aHJvdyBhbiBlcnJvciBpbiB0aGlzIGNhc2VcbnZhciBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPSBERVNDUklQVE9SUyAmJiAhZnVuY3Rpb24gKCkge1xuICAvLyBtYWtlcyBubyBzZW5zZSB3aXRob3V0IHByb3BlciBzdHJpY3QgbW9kZSBzdXBwb3J0XG4gIGlmICh0aGlzICE9PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLmxlbmd0aCA9IDE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yO1xuICB9XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID8gZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICBpZiAoaXNBcnJheShPKSAmJiAhZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sICdsZW5ndGgnKS53cml0YWJsZSkge1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKCdDYW5ub3Qgc2V0IHJlYWQgb25seSAubGVuZ3RoJyk7XG4gIH0gcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufSA6IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyAkVHlwZUVycm9yKCdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIHNldEFycmF5TGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNldC1sZW5ndGgnKTtcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBJTkNPUlJFQ1RfVE9fTEVOR1RIID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gW10ucHVzaC5jYWxsKHsgbGVuZ3RoOiAweDEwMDAwMDAwMCB9LCAxKSAhPT0gNDI5NDk2NzI5Nztcbn0pO1xuXG4vLyBWOCA8PSAxMjEgYW5kIFNhZmFyaSA8PSAxNS40OyBGRiA8IDIzIHRocm93cyBJbnRlcm5hbEVycm9yXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0xMjY4MVxudmFyIHByb3BlckVycm9yT25Ob25Xcml0YWJsZUxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS5wdXNoKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yO1xuICB9XG59O1xuXG52YXIgRk9SQ0VEID0gSU5DT1JSRUNUX1RPX0xFTkdUSCB8fCAhcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoKCk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUucHVzaGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5wdXNoXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgYXJpdHk6IDEsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgcHVzaDogZnVuY3Rpb24gcHVzaChpdGVtKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGFyZ0NvdW50ID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobGVuICsgYXJnQ291bnQpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJnQ291bnQ7IGkrKykge1xuICAgICAgT1tsZW5dID0gYXJndW1lbnRzW2ldO1xuICAgICAgbGVuKys7XG4gICAgfVxuICAgIHNldEFycmF5TGVuZ3RoKE8sIGxlbik7XG4gICAgcmV0dXJuIGxlbjtcbiAgfVxufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciB0ZXN0ID0ge307XG5cbnRlc3RbVE9fU1RSSU5HX1RBR10gPSAneic7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RyaW5nKHRlc3QpID09PSAnW29iamVjdCB6XSc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIFRPX1NUUklOR19UQUdfU1VQUE9SVCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmctdGFnLXN1cHBvcnQnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgY2xhc3NvZlJhdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIENPUlJFQ1RfQVJHVU1FTlRTID0gY2xhc3NvZlJhdyhmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbi8vIGdldHRpbmcgdGFnIGZyb20gRVM2KyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2Bcbm1vZHVsZS5leHBvcnRzID0gVE9fU1RSSU5HX1RBR19TVVBQT1JUID8gY2xhc3NvZlJhdyA6IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgdGFnLCByZXN1bHQ7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mICh0YWcgPSB0cnlHZXQoTyA9ICRPYmplY3QoaXQpLCBUT19TVFJJTkdfVEFHKSkgPT0gJ3N0cmluZycgPyB0YWdcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IENPUlJFQ1RfQVJHVU1FTlRTID8gY2xhc3NvZlJhdyhPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChyZXN1bHQgPSBjbGFzc29mUmF3KE8pKSA9PT0gJ09iamVjdCcgJiYgaXNDYWxsYWJsZShPLmNhbGxlZSkgPyAnQXJndW1lbnRzJyA6IHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZicpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgaWYgKGNsYXNzb2YoYXJndW1lbnQpID09PSAnU3ltYm9sJykgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgYSBTeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcnKTtcbiAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocGFzc2VkLCByZXF1aXJlZCkge1xuICBpZiAocGFzc2VkIDwgcmVxdWlyZWQpIHRocm93IG5ldyAkVHlwZUVycm9yKCdOb3QgZW5vdWdoIGFyZ3VtZW50cycpO1xuICByZXR1cm4gcGFzc2VkO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcbnZhciB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92YWxpZGF0ZS1hcmd1bWVudHMtbGVuZ3RoJyk7XG5cbnZhciAkVVJMU2VhcmNoUGFyYW1zID0gVVJMU2VhcmNoUGFyYW1zO1xudmFyIFVSTFNlYXJjaFBhcmFtc1Byb3RvdHlwZSA9ICRVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlO1xudmFyIGFwcGVuZCA9IHVuY3VycnlUaGlzKFVSTFNlYXJjaFBhcmFtc1Byb3RvdHlwZS5hcHBlbmQpO1xudmFyICRkZWxldGUgPSB1bmN1cnJ5VGhpcyhVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGVbJ2RlbGV0ZSddKTtcbnZhciBmb3JFYWNoID0gdW5jdXJyeVRoaXMoVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlLmZvckVhY2gpO1xudmFyIHB1c2ggPSB1bmN1cnJ5VGhpcyhbXS5wdXNoKTtcbnZhciBwYXJhbXMgPSBuZXcgJFVSTFNlYXJjaFBhcmFtcygnYT0xJmE9MiZiPTMnKTtcblxucGFyYW1zWydkZWxldGUnXSgnYScsIDEpO1xuLy8gYHVuZGVmaW5lZGAgY2FzZSBpcyBhIENocm9taXVtIDExNyBidWdcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTE0MjIyXG5wYXJhbXNbJ2RlbGV0ZSddKCdiJywgdW5kZWZpbmVkKTtcblxuaWYgKHBhcmFtcyArICcnICE9PSAnYT0yJykge1xuICBkZWZpbmVCdWlsdEluKFVSTFNlYXJjaFBhcmFtc1Byb3RvdHlwZSwgJ2RlbGV0ZScsIGZ1bmN0aW9uIChuYW1lIC8qICwgdmFsdWUgKi8pIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgJHZhbHVlID0gbGVuZ3RoIDwgMiA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxXTtcbiAgICBpZiAobGVuZ3RoICYmICR2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJGRlbGV0ZSh0aGlzLCBuYW1lKTtcbiAgICB2YXIgZW50cmllcyA9IFtdO1xuICAgIGZvckVhY2godGhpcywgZnVuY3Rpb24gKHYsIGspIHsgLy8gYWxzbyB2YWxpZGF0ZXMgYHRoaXNgXG4gICAgICBwdXNoKGVudHJpZXMsIHsga2V5OiBrLCB2YWx1ZTogdiB9KTtcbiAgICB9KTtcbiAgICB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aChsZW5ndGgsIDEpO1xuICAgIHZhciBrZXkgPSB0b1N0cmluZyhuYW1lKTtcbiAgICB2YXIgdmFsdWUgPSB0b1N0cmluZygkdmFsdWUpO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGRpbmRleCA9IDA7XG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgdmFyIGVudHJpZXNMZW5ndGggPSBlbnRyaWVzLmxlbmd0aDtcbiAgICB2YXIgZW50cnk7XG4gICAgd2hpbGUgKGluZGV4IDwgZW50cmllc0xlbmd0aCkge1xuICAgICAgZW50cnkgPSBlbnRyaWVzW2luZGV4KytdO1xuICAgICAgaWYgKGZvdW5kIHx8IGVudHJ5LmtleSA9PT0ga2V5KSB7XG4gICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgJGRlbGV0ZSh0aGlzLCBlbnRyeS5rZXkpO1xuICAgICAgfSBlbHNlIGRpbmRleCsrO1xuICAgIH1cbiAgICB3aGlsZSAoZGluZGV4IDwgZW50cmllc0xlbmd0aCkge1xuICAgICAgZW50cnkgPSBlbnRyaWVzW2RpbmRleCsrXTtcbiAgICAgIGlmICghKGVudHJ5LmtleSA9PT0ga2V5ICYmIGVudHJ5LnZhbHVlID09PSB2YWx1ZSkpIGFwcGVuZCh0aGlzLCBlbnRyeS5rZXksIGVudHJ5LnZhbHVlKTtcbiAgICB9XG4gIH0sIHsgZW51bWVyYWJsZTogdHJ1ZSwgdW5zYWZlOiB0cnVlIH0pO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIHZhbGlkYXRlQXJndW1lbnRzTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3ZhbGlkYXRlLWFyZ3VtZW50cy1sZW5ndGgnKTtcblxudmFyICRVUkxTZWFyY2hQYXJhbXMgPSBVUkxTZWFyY2hQYXJhbXM7XG52YXIgVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlID0gJFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGU7XG52YXIgZ2V0QWxsID0gdW5jdXJyeVRoaXMoVVJMU2VhcmNoUGFyYW1zUHJvdG90eXBlLmdldEFsbCk7XG52YXIgJGhhcyA9IHVuY3VycnlUaGlzKFVSTFNlYXJjaFBhcmFtc1Byb3RvdHlwZS5oYXMpO1xudmFyIHBhcmFtcyA9IG5ldyAkVVJMU2VhcmNoUGFyYW1zKCdhPTEnKTtcblxuLy8gYHVuZGVmaW5lZGAgY2FzZSBpcyBhIENocm9taXVtIDExNyBidWdcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTE0MjIyXG5pZiAocGFyYW1zLmhhcygnYScsIDIpIHx8ICFwYXJhbXMuaGFzKCdhJywgdW5kZWZpbmVkKSkge1xuICBkZWZpbmVCdWlsdEluKFVSTFNlYXJjaFBhcmFtc1Byb3RvdHlwZSwgJ2hhcycsIGZ1bmN0aW9uIGhhcyhuYW1lIC8qICwgdmFsdWUgKi8pIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgJHZhbHVlID0gbGVuZ3RoIDwgMiA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxXTtcbiAgICBpZiAobGVuZ3RoICYmICR2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJGhhcyh0aGlzLCBuYW1lKTtcbiAgICB2YXIgdmFsdWVzID0gZ2V0QWxsKHRoaXMsIG5hbWUpOyAvLyBhbHNvIHZhbGlkYXRlcyBgdGhpc2BcbiAgICB2YWxpZGF0ZUFyZ3VtZW50c0xlbmd0aChsZW5ndGgsIDEpO1xuICAgIHZhciB2YWx1ZSA9IHRvU3RyaW5nKCR2YWx1ZSk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB3aGlsZSAoaW5kZXggPCB2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICBpZiAodmFsdWVzW2luZGV4KytdID09PSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgfSByZXR1cm4gZmFsc2U7XG4gIH0sIHsgZW51bWVyYWJsZTogdHJ1ZSwgdW5zYWZlOiB0cnVlIH0pO1xufVxuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpIHtcbiAgaWYgKGRlc2NyaXB0b3IuZ2V0KSBtYWtlQnVpbHRJbihkZXNjcmlwdG9yLmdldCwgbmFtZSwgeyBnZXR0ZXI6IHRydWUgfSk7XG4gIGlmIChkZXNjcmlwdG9yLnNldCkgbWFrZUJ1aWx0SW4oZGVzY3JpcHRvci5zZXQsIG5hbWUsIHsgc2V0dGVyOiB0cnVlIH0pO1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkuZih0YXJnZXQsIG5hbWUsIGRlc2NyaXB0b3IpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yJyk7XG5cbnZhciBVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUgPSBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlO1xudmFyIGZvckVhY2ggPSB1bmN1cnJ5VGhpcyhVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUuZm9yRWFjaCk7XG5cbi8vIGBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLnNpemVgIGdldHRlclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3doYXR3Zy91cmwvcHVsbC83MzRcbmlmIChERVNDUklQVE9SUyAmJiAhKCdzaXplJyBpbiBVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUpKSB7XG4gIGRlZmluZUJ1aWx0SW5BY2Nlc3NvcihVUkxTZWFyY2hQYXJhbXNQcm90b3R5cGUsICdzaXplJywge1xuICAgIGdldDogZnVuY3Rpb24gc2l6ZSgpIHtcbiAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICBmb3JFYWNoKHRoaXMsIGZ1bmN0aW9uICgpIHsgY291bnQrKzsgfSk7XG4gICAgICByZXR1cm4gY291bnQ7XG4gICAgfSxcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9KTtcbn1cbiIsICJjbGFzcyBDb25zdGFudHMge1xuXHR2ZXJzaW9uID0gJzQuMC4xMic7XG5cdGdldCBpc0FydGljbGUoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0lzQXJ0aWNsZScpO1xuXHR9XG5cdGdldCBjdXJyZW50UGFnZU5hbWUoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1BhZ2VOYW1lJykucmVwbGFjZSgvIC9nLCAnXycpO1xuXHR9XG5cdGdldCBhcnRpY2xlSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0FydGljbGVJZCcpO1xuXHR9XG5cdGdldCByZXZpc2lvbklkKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dSZXZpc2lvbklkJyk7XG5cdH1cblx0Z2V0IGxhdGVzdFJldmlzaW9uSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0N1clJldmlzaW9uSWQnKTtcblx0fVxuXHRnZXQgYXJ0aWNsZVBhdGgoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z0FydGljbGVQYXRoJyk7XG5cdH1cblx0Z2V0IHNjcmlwdFBhdGgoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1NjcmlwdFBhdGgnKTtcblx0fVxuXHRnZXQgYWN0aW9uKCkge1xuXHRcdHJldHVybiB3aW5kb3cubXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcblx0fVxuXHRnZXQgc2tpbigpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3NraW4nKTtcblx0fVxuXHRnZXQgdXNlckdyb3VwcygpIHtcblx0XHRyZXR1cm4gd2luZG93Lm13LmNvbmZpZy5nZXQoJ3dnVXNlckdyb3VwcycpO1xuXHR9XG5cdGdldCB3aWtpSWQoKSB7XG5cdFx0cmV0dXJuIHdpbmRvdy5tdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpO1xuXHR9XG5cdHVzZXJBZ2VudCA9IGBZc0FyY2hpdmVzLzEuMSBXaWtpcGx1cy8ke3RoaXMudmVyc2lvbn0gKCR7dGhpcy53aWtpSWR9KWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDb25zdGFudHMoKTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IENvbnN0YW50cyBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuXG5jb25zdCBSZXF1ZXN0cyA9IHtcblx0YmFzZTogYCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke2xvY2F0aW9uLmhvc3R9JHtDb25zdGFudHMuc2NyaXB0UGF0aH0vYXBpLnBocGAsXG5cdGFzeW5jIGdldChxdWVyeSkge1xuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwoUmVxdWVzdHMuYmFzZSk7XG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocXVlcnkpKSB7XG5cdFx0XHR1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHF1ZXJ5W2tleV0pO1xuXHRcdH1cblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdFx0Y3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdBcGktVXNlci1BZ2VudCc6IENvbnN0YW50cy51c2VyQWdlbnQsXG5cdFx0XHR9LFxuXHRcdH0pO1xuXHRcdHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cdH0sXG5cdGFzeW5jIHBvc3QocGF5bG9hZCkge1xuXHRcdGNvbnN0IHVybCA9IG5ldyBVUkwoUmVxdWVzdHMuYmFzZSk7XG5cdFx0Y29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xuXHRcdGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHBheWxvYWQpKSB7XG5cdFx0XHRmb3JtLmFwcGVuZChrZXksIHZhbHVlKTtcblx0XHR9XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcblx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0Ym9keTogZm9ybSxcblx0XHRcdGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQnQXBpLVVzZXItQWdlbnQnOiBDb25zdGFudHMudXNlckFnZW50LFxuXHRcdFx0fSxcblx0XHR9KTtcblx0XHRyZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdHM7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmNsYXNzIEkxOG4ge1xuXHRsYW5ndWFnZTtcblx0aTE4bkRhdGEgPSB7fTtcblx0c2Vzc2lvblVwZGF0ZUxvZyA9IFtdO1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgbGFuZ3VhZ2U7XG5cdFx0dHJ5IHtcblx0XHRcdGxhbmd1YWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbJ1dpa2lwbHVzX1NldHRpbmdzJ10pWydsYW5ndWFnZSddIHx8IG5hdmlnYXRvci5sYW5ndWFnZS50b0xvd2VyQ2FzZSgpO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0bGFuZ3VhZ2UgPSAobmF2aWdhdG9yLmxhbmd1YWdlIHx8IG5hdmlnYXRvci5icm93c2VyTGFuZ3VhZ2UpXG5cdFx0XHRcdC5yZXBsYWNlKC9oYW5bc3RdLT8vaSwgJycpIC8vIGZvciBsYW5ndWFnZXMgbGlrZSB6aC1IYW5zLUNOXG5cdFx0XHRcdC50b0xvd2VyQ2FzZSgpO1xuXHRcdH1cblx0XHR0aGlzLmxhbmd1YWdlID0gbGFuZ3VhZ2U7XG5cdFx0Ly8gTWVyZ2Ugd2l0aCBsb2NhbFN0b3JhZ2UgaTE4biBjYWNoZVxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBpMThuQ2FjaGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdXaWtpcGx1c19pMThuQ2FjaGUnKSk7XG5cdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhpMThuQ2FjaGUpKSB7XG5cdFx0XHRcdHRoaXMuaTE4bkRhdGFba2V5XSA9IGkxOG5DYWNoZVtrZXldO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2gge1xuXHRcdFx0Ly8gRmFpbCB0byBwYXJzZSBpMThuIGNhY2hlLCByZXNldFxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1dpa2lwbHVzX2kxOG5DYWNoZScsICd7fScpO1xuXHRcdH1cblx0fVxuXHR0cmFuc2xhdGUoa2V5LCBwbGFjZWhvbGRlcnMgPSBbXSkge1xuXHRcdGxldCByZXN1bHQgPSAnJztcblx0XHRpZiAodGhpcy5sYW5ndWFnZSBpbiB0aGlzLmkxOG5EYXRhKSB7XG5cdFx0XHRpZiAoa2V5IGluIHRoaXMuaTE4bkRhdGFbdGhpcy5sYW5ndWFnZV0pIHtcblx0XHRcdFx0cmVzdWx0ID0gdGhpcy5pMThuRGF0YVt0aGlzLmxhbmd1YWdlXVtrZXldO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gdHJ5IHVwZGF0ZSBsYW5ndWFnZSB2ZXJpc29uXG5cdFx0XHRcdHRoaXMubG9hZExhbmd1YWdlKHRoaXMubGFuZ3VhZ2UpO1xuXHRcdFx0XHRpZiAoa2V5IGluIHRoaXMuaTE4bkRhdGFbJ2VuLXVzJ10pIHtcblx0XHRcdFx0XHQvLyBGYWxsYmFjayB0byBFbmdsaXNoXG5cdFx0XHRcdFx0cmVzdWx0ID0gdGhpcy5pMThuRGF0YVsnZW4tdXMnXVtrZXldO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJlc3VsdCA9IGtleTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmxvYWRMYW5ndWFnZSh0aGlzLmxhbmd1YWdlKTtcblx0XHR9XG5cblx0XHRpZiAocGxhY2Vob2xkZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdGZvciAoY29uc3QgW2luZGV4LCBwbGFjZWhvbGRlcl0gb2YgcGxhY2Vob2xkZXJzLmVudHJpZXMoKSkge1xuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQucmVwbGFjZShgJCR7aW5kZXggKyAxfWAsIHBsYWNlaG9sZGVyKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRhc3luYyBsb2FkTGFuZ3VhZ2UobGFuZ3VhZ2UpIHtcblx0XHRpZiAodGhpcy5zZXNzaW9uVXBkYXRlTG9nLmluY2x1ZGVzKGxhbmd1YWdlKSkge1xuXHRcdFx0Ly8gSGFzIGJlZW4gdXBkYXRlZCB0aGlzIHNlc3Npb24uXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IChcblx0XHRcdFx0YXdhaXQgZmV0Y2goXG5cdFx0XHRcdFx0YGh0dHBzOi8vZ2l0Y2RuLnFpdXdlbi5uZXQuY24vSW50ZXJmYWNlQWRtaW4vV2lraXBsdXMvcmF3L2JyYW5jaC9kZXYvbGFuZ3VhZ2VzLyR7bGFuZ3VhZ2V9Lmpzb25gXG5cdFx0XHRcdClcblx0XHRcdCkuanNvbigpO1xuXHRcdFx0Y29uc3Qgbm93VmVyc2lvbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdXaWtpcGx1c19MYW5ndWFnZVZlcnNpb24nKSB8fCAnMDAwJztcblx0XHRcdHRoaXMuc2Vzc2lvblVwZGF0ZUxvZy5wdXNoKGxhbmd1YWdlKTtcblx0XHRcdGlmIChyZXNwb25zZS5fX3ZlcnNpb24gIT09IG5vd1ZlcnNpb24gfHwgIShsYW5ndWFnZSBpbiB0aGlzLmkxOG5EYXRhKSkge1xuXHRcdFx0XHQvLyBMYW5ndWFnZSBnZXQgdXBkYXRlZFxuXHRcdFx0XHRjb25zb2xlLmluZm8oYFVwZGF0ZSAke2xhbmd1YWdlfSBzdXBwb3J0IHRvIHZlcnNpb24gJHtyZXNwb25zZS5fX3ZlcnNpb259YCk7XG5cdFx0XHRcdHRoaXMuaTE4bkRhdGFbbGFuZ3VhZ2VdID0gcmVzcG9uc2U7XG5cdFx0XHRcdC8vIFVwZGF0ZSBsb2NhbFN0b3JhZ2UgY2FjaGVcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1dpa2lwbHVzX2kxOG5DYWNoZScsIEpTT04uc3RyaW5naWZ5KHRoaXMuaTE4bkRhdGEpKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdC8vIFVuc3VwcG9ydGVkIGxhbmd1YWdlXG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBJMThuKCk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBpMThuIGZyb20gJy4vaTE4bic7XG5cbmNsYXNzIFdpa2lwbHVzRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGNvZGUpIHtcblx0XHRzdXBlcihtZXNzYWdlKTtcblx0XHR0aGlzLmNvZGUgPSBjb2RlO1xuXHR9XG59XG5cbmNvbnN0IExvZyA9IHtcblx0ZGVidWcobWVzc2FnZSA9ICcnKSB7XG5cdFx0Y29uc29sZS5kZWJ1ZyhgW1dpa2lwbHVzLURFQlVHXSAke21lc3NhZ2V9YCk7XG5cdH0sXG5cdGluZm8obWVzc2FnZSA9ICcnKSB7XG5cdFx0Y29uc29sZS5pbmZvKGBbV2lraXBsdXMtSU5GT10gJHttZXNzYWdlfWApO1xuXHR9LFxuXHRlcnJvcihlcnJvckNvZGUsIHBheWxvYWRzID0gW10pIHtcblx0XHRsZXQgdGVtcGxhdGUgPSBpMThuLnRyYW5zbGF0ZShlcnJvckNvZGUpO1xuXHRcdGlmIChwYXlsb2Fkcy5sZW5ndGggPiAwKSB7XG5cdFx0XHQvLyBGaWxsXG5cdFx0XHRmb3IgKGNvbnN0IFtpLCB2XSBvZiBwYXlsb2Fkcy5lbnRyaWVzKCkpIHtcblx0XHRcdFx0dGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKG5ldyBSZWdFeHAoYFxcXFwke2kgKyAxfWAsICdpZycpLCB2KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc29sZS5lcnJvcihgW1dpa2lwbHVzLUVSUk9SXSAke3RlbXBsYXRlfWApO1xuXHRcdHRocm93IG5ldyBXaWtpcGx1c0Vycm9yKGAke3RlbXBsYXRlfWAsIGVycm9yQ29kZSk7XG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2c7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCByZXF1ZXN0cyBmcm9tICcuLi91dGlscy9yZXF1ZXN0cyc7XG5pbXBvcnQgTG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XG5pbXBvcnQgaTE4biBmcm9tICcuLi91dGlscy9pMThuJztcblxuY2xhc3MgV2lraSB7XG5cdHBhZ2VJbmZvQ2FjaGUgPSB7fTtcblx0LyoqXG5cdCAqIOiOt+W+lyBFZGl0IFRva2VuXG5cdCAqIEdldCBFZGl0IFRva2VuXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG5cdCAqL1xuXHRhc3luYyBnZXRFZGl0VG9rZW4oKSB7XG5cdFx0Ly8g5bCd6K+V5LuOIEFQSSDojrflvpcgRWRpdFRva2VuXG5cdFx0Ly8gVHJ5IHRvIGdldCBFZGl0VG9rZW4gZnJvbSBBUElcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLmdldCh7XG5cdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRtZXRhOiAndG9rZW5zJyxcblx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdH0pO1xuXHRcdGlmIChcblx0XHRcdHJlc3BvbnNlLnF1ZXJ5ICYmXG5cdFx0XHRyZXNwb25zZS5xdWVyeS50b2tlbnMgJiZcblx0XHRcdHJlc3BvbnNlLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW4gJiZcblx0XHRcdHJlc3BvbnNlLnF1ZXJ5LnRva2Vucy5jc3JmdG9rZW4gIT09ICcrXFxcXCdcblx0XHQpIHtcblx0XHRcdHJldHVybiByZXNwb25zZS5xdWVyeS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdH1cblx0XHRyZXR1cm4gTG9nLmVycm9yKCdmYWlsX3RvX2dldF9lZGl0dG9rZW4nKTtcblx0fVxuXHQvKipcblx0ICog6I635b6X6aG16Z2i5LiK5LiA54mI5pys5pe26Ze05oizXG5cdCAqIEdldCB0aGUgdGltZXN0YW1wIG9mIHRoZSBsYXN0IHJldmlzaW9uIG9mIHBhZ2Ugc3BlY2lmaWVkLlxuXHQgKlxuXHQgKiBAcGFyYW0ge3BhcmFtcy5zdHJpbmd9IHRpdGxlIOmhtemdouWQjSAvIFBhZ2VuYW1lXG5cdCAqIEBwYXJhbSB7cGFyYW1zLnJldmlzaW9uSWR9IHJldmlzaW9uSWQg5L+u6K6i54mI5pys5Y+3IC8gUmV2aXNpb24gSURcblx0ICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cblx0ICovXG5cdGFzeW5jIGdldFBhZ2VJbmZvKHt0aXRsZSwgcmV2aXNpb25JZH0pIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdHByb3A6ICdyZXZpc2lvbnN8aW5mbycsXG5cdFx0XHRcdHJ2cHJvcDogJ3RpbWVzdGFtcHxpZHMnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdH07XG5cdFx0XHRpZiAocmV2aXNpb25JZCkge1xuXHRcdFx0XHRwYXJhbXMucmV2aWRzID0gcmV2aXNpb25JZDtcblx0XHRcdH0gZWxzZSBpZiAodGl0bGUpIHtcblx0XHRcdFx0aWYgKHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0pIHtcblx0XHRcdFx0XHQvLyBIaXQgY2FjaGVcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0dGltZXN0YW1wOiB0aGlzLnBhZ2VJbmZvQ2FjaGVbdGl0bGVdLnRpbWVzdGFtcCxcblx0XHRcdFx0XHRcdHJldmlzaW9uSWQ6IHRoaXMucGFnZUluZm9DYWNoZVt0aXRsZV0ucmV2aWQsXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwYXJhbXMudGl0bGVzID0gdGl0bGU7XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLmdldChwYXJhbXMpO1xuXHRcdFx0aWYgKHJlc3BvbnNlLnF1ZXJ5ICYmIHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdGlmIChPYmplY3Qua2V5cyhyZXNwb25zZS5xdWVyeS5wYWdlcylbMF0gPT09ICctMScpIHtcblx0XHRcdFx0XHQvLyDkuI3lrZjlnKjov5nkuIDpobXpnaJcblx0XHRcdFx0XHQvLyBQYWdlIG5vdCBmb3VuZC5cblx0XHRcdFx0XHRyZXR1cm4ge307XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcGFnZUluZm8gPSByZXNwb25zZS5xdWVyeS5wYWdlc1tPYmplY3Qua2V5cyhyZXNwb25zZS5xdWVyeS5wYWdlcylbMF1dLnJldmlzaW9uc1swXTtcblx0XHRcdFx0aWYgKHRpdGxlKSB7XG5cdFx0XHRcdFx0dGhpcy5wYWdlSW5mb0NhY2hlW3RpdGxlXSA9IHBhZ2VJbmZvO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dGltZXN0YW1wOiBwYWdlSW5mby50aW1lc3RhbXAsXG5cdFx0XHRcdFx0cmV2aXNpb25JZDogcGFnZUluZm8ucmV2aWQsXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X2VkaXR0b2tlbicpO1xuXHRcdH1cblx0fVxuXHQvKipcblx0ICog6I635b6X6aG16Z2i55qEIFdpa2l0ZXh0XG5cdCAqIEdldCB3aWtpdGV4dCBvZiB0aGUgcGFnZS5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIHRpdGxlXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcblx0ICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5yZXZpc2lvbklkIOeJiOacrOWPt1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnNlY3Rpb24g5q616JC95Y+3XG5cdCAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn0gd2lraXRleHTlhoXlrrlcblx0ICovXG5cdGFzeW5jIGdldFdpa2lUZXh0KHtzZWN0aW9uLCByZXZpc2lvbklkfSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0XHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRcdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0XHRcdHJ2cHJvcDogJ2NvbnRlbnQnLFxuXHRcdFx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRcdFx0cmV2aWRzOiByZXZpc2lvbklkLFxuXHRcdFx0fTtcblx0XHRcdGlmIChyZXZpc2lvbklkKSB7XG5cdFx0XHRcdHBhcmFtcy5yZXZpZHMgPSByZXZpc2lvbklkO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNlY3Rpb24pIHtcblx0XHRcdFx0cGFyYW1zLnJ2c2VjdGlvbiA9IHNlY3Rpb247XG5cdFx0XHR9XG5cdFx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLmdldChwYXJhbXMpO1xuXHRcdFx0aWYgKHJlc3BvbnNlLnF1ZXJ5ICYmIHJlc3BvbnNlLnF1ZXJ5LnBhZ2VzKSB7XG5cdFx0XHRcdGlmIChPYmplY3Qua2V5cyhyZXNwb25zZS5xdWVyeS5wYWdlcylbMF0gPT09ICctMScpIHtcblx0XHRcdFx0XHQvLyDkuI3lrZjlnKjov5nkuIDpobXpnaJcblx0XHRcdFx0XHQvLyBQYWdlIG5vdCBmb3VuZC5cblx0XHRcdFx0XHRyZXR1cm4gJyc7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgcGFnZUluZm8gPSByZXNwb25zZS5xdWVyeS5wYWdlc1tPYmplY3Qua2V5cyhyZXNwb25zZS5xdWVyeS5wYWdlcylbMF1dLnJldmlzaW9uc1swXTtcblx0XHRcdFx0cmV0dXJuIHBhZ2VJbmZvWycqJ107XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9fZ2V0X3dpa2l0ZXh0Jyk7XG5cdFx0fVxuXHR9XG5cdC8qKlxuXHQgKiDop6PmnpAgV2lraXRleHRcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHdpa2l0ZXh0IHdpa2l0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSDpobXpnaLmoIfpophcblx0ICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyDorr7nva5cblx0ICogQHJldHVybiB7UHJvbWlzZTxzdHJpbmc+fSDop6PmnpDnu5PmnpwgSFRNTFxuXHQgKi9cblx0YXN5bmMgcGFyc2VXaWtpVGV4dCh3aWtpdGV4dCwgdGl0bGUgPSAnJywgY29uZmlnID0ge30pIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0cy5wb3N0KHtcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdGFjdGlvbjogJ3BhcnNlJyxcblx0XHRcdFx0dGV4dDogd2lraXRleHQsXG5cdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRwc3Q6ICd0cnVlJyxcblx0XHRcdH0pO1xuXHRcdFx0aWYgKHJlc3BvbnNlLnBhcnNlICYmIHJlc3BvbnNlLnBhcnNlLnRleHQpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLnBhcnNlLnRleHRbJyonXTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIHtcblx0XHRcdExvZy5lcnJvcignY2FudF9wYXJzZV93aWtpdGV4dCcpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiDnvJbovpHpobXpnaJcblx0ICpcblx0ICogQHBhcmFtIHJvb3QwXG5cdCAqIEBwYXJhbSByb290MC50aXRsZVxuXHQgKiBAcGFyYW0gcm9vdDAuY29udGVudFxuXHQgKiBAcGFyYW0gcm9vdDAuZWRpdFRva2VuXG5cdCAqIEBwYXJhbSByb290MC50aW1lc3RhbXBcblx0ICogQHBhcmFtIHJvb3QwLmNvbmZpZ1xuXHQgKiBAcGFyYW0gcm9vdDAuYWRkaXRpb25hbENvbmZpZ1xuXHQgKi9cblx0YXN5bmMgZWRpdCh7dGl0bGUsIGNvbnRlbnQsIGVkaXRUb2tlbiwgdGltZXN0YW1wLCBjb25maWcgPSB7fSwgYWRkaXRpb25hbENvbmZpZyA9IHt9fSA9IHt9KSB7XG5cdFx0bGV0IHJlc3BvbnNlO1xuXHRcdHRyeSB7XG5cdFx0XHRyZXNwb25zZSA9IGF3YWl0IHJlcXVlc3RzLnBvc3Qoe1xuXHRcdFx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdHRleHQ6IGNvbnRlbnQsXG5cdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHR0b2tlbjogZWRpdFRva2VuLFxuXHRcdFx0XHQuLi4odGltZXN0YW1wID8ge2Jhc2V0aW1lc3RhbXA6IHRpbWVzdGFtcH0gOiB7fSksXG5cdFx0XHRcdC4uLmNvbmZpZyxcblx0XHRcdFx0Li4uYWRkaXRpb25hbENvbmZpZyxcblx0XHRcdH0pO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0TG9nLmVycm9yKCduZXR3b3JrX2VkaXRfZXJyb3InKTtcblx0XHR9XG5cdFx0aWYgKHJlc3BvbnNlLmVkaXQpIHtcblx0XHRcdGlmIChyZXNwb25zZS5lZGl0LnJlc3VsdCA9PT0gJ1N1Y2Nlc3MnKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHJlc3BvbnNlLmVkaXQuY29kZSkge1xuXHRcdFx0XHQvLyBBYnVzZSBGaWx0ZXJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBcbiAgICAgICAgICAgICAgICAgICAgICAgICR7aTE4bi50cmFuc2xhdGUoJ2hpdF9hYnVzZWZpbHRlcicpfToke3Jlc3BvbnNlLmVkaXQuaW5mby5yZXBsYWNlKCcvSGl0IEFidXNlRmlsdGVyOiAvaWcnLCAnJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiBzbWFsbGVyO1wiPiR7cmVzcG9uc2UuZWRpdC53YXJuaW5nfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdExvZy5lcnJvcigndW5rbm93bl9lZGl0X2Vycm9yJyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChyZXNwb25zZS5lcnJvciAmJiByZXNwb25zZS5lcnJvci5jb2RlKSB7XG5cdFx0XHRMb2cuZXJyb3IocmVzcG9uc2UuZXJyb3IuY29kZSk7XG5cdFx0fSBlbHNlIGlmIChyZXNwb25zZS5jb2RlKSB7XG5cdFx0XHRMb2cuZXJyb3IocmVzcG9uc2UuY29kZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdExvZy5lcnJvcigndW5rbm93bl9lZGl0X2Vycm9yJyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+l+aMh+WumumhtemdouacgOaWsOS/ruiuoue8luWPt1xuXHQgKiBHZXQgbGF0ZXN0IHJldmlzaW9uSWQgb2YgYSBwYWdlLlxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHRpdGxlXG5cdCAqL1xuXHRhc3luYyBnZXRMYXRlc3RSZXZpc2lvbklkRm9yUGFnZSh0aXRsZSkge1xuXHRcdGNvbnN0IHtyZXZpc2lvbklkfSA9IGF3YWl0IHRoaXMuZ2V0UGFnZUluZm8oe3RpdGxlfSk7XG5cdFx0cmV0dXJuIHJldmlzaW9uSWQ7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFdpa2koKTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4vLyBAdHMtbm9jaGVja1xuaW1wb3J0IFdpa2kgZnJvbSAnLi4vc2VydmljZXMvd2lraSc7XG5pbXBvcnQgTG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XG5cbmNsYXNzIFBhZ2Uge1xuXHR0aW1lc3RhbXA7XG5cdGVkaXRUb2tlbjtcblx0dGl0bGU7XG5cdHJldmlzaW9uSWQ7XG5cblx0aW5pdGVkID0gZmFsc2U7XG5cdGlzTmV3UGFnZSA9IGZhbHNlO1xuXG5cdHNlY3Rpb25DYWNoZSA9IHt9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0ge3BhcmFtcy50aXRsZX0g6aG16Z2i5qCH6aKYIFBhZ2UgTmFtZSAob3B0aW9uYWwpXG5cdCAqIEBwYXJhbSB7cGFyYW1zLnJldmlzaW9uSWR9IOmhtemdouS/ruiuoue8luWPtyBSZXZpc2lvbiBJZFxuXHQgKi9cblx0Y29uc3RydWN0b3Ioe3RpdGxlLCByZXZpc2lvbklkfSkge1xuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0XHR0aGlzLnJldmlzaW9uSWQgPSByZXZpc2lvbklkO1xuXHRcdHRoaXMuaXNOZXdQYWdlID0gIXJldmlzaW9uSWQ7XG5cdH1cblxuXHQvKipcblx0ICog5Yid5aeL5YyWIOiOt+W+l+mhtemdokVkaXRUb2tlbuWSjOWIneWni1RpbWVTdGFtcFxuXHQgKiBJbml0aWFsaXphdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IGVkaXRUb2tlbiAob3B0aW9uYWwpIOWmguaenOaPkOS+m+S6hmVkaXRUb2tlbu+8jOWwhuS4jeS8muWGjeiOt+WPllxuXHQgKi9cblx0YXN5bmMgaW5pdCh7ZWRpdFRva2VuID0gJyd9ID0ge30pIHtcblx0XHRjb25zdCBwcm9taXNlQXJyID0gW3RoaXMuZ2V0VGltZXN0YW1wKCldO1xuXHRcdGlmICghZWRpdFRva2VuKSB7XG5cdFx0XHRwcm9taXNlQXJyLnB1c2godGhpcy5nZXRFZGl0VG9rZW4oKSk7XG5cdFx0fVxuXHRcdGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VBcnIpO1xuXHRcdHRoaXMuaW5pdGVkID0gdHJ1ZTtcblx0XHRMb2cuaW5mbyhgUGFnZSBpbml0aWFsaXphdGlvbiBmb3IgJHt0aGlzLnRpdGxlfSMke3RoaXMucmV2aXNpb25JZH0gZmluaXNoZWQuYCk7XG5cdH1cblxuXHQvKipcblx0ICog6I635b6XIEVkaXRUb2tlblxuXHQgKiBHZXQgRWRpdFRva2VuXG5cdCAqL1xuXHRhc3luYyBnZXRFZGl0VG9rZW4oKSB7XG5cdFx0YXdhaXQgbXcubG9hZGVyLnVzaW5nKCdtZWRpYXdpa2kudXNlcicpO1xuXHRcdGlmIChtdy51c2VyLnRva2Vucy5nZXQoJ2NzcmZUb2tlbicpICYmIG13LnVzZXIudG9rZW5zLmdldCgnY3NyZlRva2VuJykgIT09ICcrXFxcXCcpIHtcblx0XHRcdC8vIOWmguaenCBNZWRpYVdpa2kgSmF2YVNjcmlwdCBBUEkg5Y+v5Lul55u05o6l6I635b6XIEVkaXRUb2tlbiDliJnnm7TmjqXov5Tlm55cblx0XHRcdC8vIFJldHVybiBFZGl0VG9rZW4gcmV0cmlldmVkIGZyb20gTWVkaWFXaWtpIEphdmFTY3JpcHQgQVBJIGlmIGFjY2Vzc2libGVcblx0XHRcdHRoaXMuZWRpdFRva2VuID0gbXcudXNlci50b2tlbnMuZ2V0KCdjc3JmVG9rZW4nKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Ly8g5LuOQVBJ6I635b6XRWRpdFRva2VuXG5cdFx0Ly8gR2V0IEVkaXRUb2tlbiBmcm9tIE1lZGlhV2lraSBBUElcblx0XHR0aGlzLmVkaXRUb2tlbiA9IGF3YWl0IFdpa2kuZ2V0RWRpdFRva2VuKCk7XG5cdH1cblxuXHQvKipcblx0ICog6I635b6X57yW6L6R5Z+65YeG5pe26Ze05oizXG5cdCAqIEdldCBCYXNlIFRpbWVzdGFtcFxuXHQgKi9cblx0YXN5bmMgZ2V0VGltZXN0YW1wKCkge1xuXHRcdGNvbnN0IHt0aW1lc3RhbXAsIHJldmlzaW9uSWR9ID0gYXdhaXQgV2lraS5nZXRQYWdlSW5mbyh7XG5cdFx0XHRyZXZpc2lvbklkOiB0aGlzLnJldmlzaW9uSWQsXG5cdFx0XHR0aXRsZTogdGhpcy50aXRsZSxcblx0XHR9KTtcblx0XHR0aGlzLnRpbWVzdGFtcCA9IHRpbWVzdGFtcDtcblx0XHRpZiAocmV2aXNpb25JZCkge1xuXHRcdFx0dGhpcy5yZXZpc2lvbklkID0gcmV2aXNpb25JZDtcblx0XHRcdHRoaXMuaXNOZXdQYWdlID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOiOt+W+lyBXaWtpVGV4dFxuXHQgKlxuXHQgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuc2VjdGlvblxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLnJldmlzaW9uSWRcblx0ICovXG5cdGFzeW5jIGdldFdpa2lUZXh0KHtzZWN0aW9uID0gJyd9ID0ge30pIHtcblx0XHRjb25zdCBzZWMgPSBzZWN0aW9uID09PSAtMSA/ICcnIDogc2VjdGlvbjtcblx0XHRpZiAodGhpcy5zZWN0aW9uQ2FjaGVbc2VjXSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2VjdGlvbkNhY2hlW3NlY107XG5cdFx0fVxuXHRcdGNvbnN0IHdpa2lUZXh0ID0gYXdhaXQgV2lraS5nZXRXaWtpVGV4dCh7XG5cdFx0XHRzZWN0aW9uOiBzZWMsXG5cdFx0XHRyZXZpc2lvbklkOiB0aGlzLnJldmlzaW9uSWQsXG5cdFx0fSk7XG5cdFx0TG9nLmluZm8oYFdpa2l0ZXh0IG9mICR7dGhpcy50aXRsZX0jJHtzZWN0aW9ufSBmZXRjaGVkLmApO1xuXHRcdHRoaXMuc2VjdGlvbkNhY2hlW3NlY10gPSB3aWtpVGV4dDtcblx0XHRyZXR1cm4gd2lraVRleHQ7XG5cdH1cblxuXHQvKipcblx0ICog6Kej5p6QIFdpa2lUZXh0XG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB3aWtpdGV4dFxuXHQgKi9cblx0YXN5bmMgcGFyc2VXaWtpVGV4dCh3aWtpdGV4dCkge1xuXHRcdHJldHVybiBXaWtpLnBhcnNlV2lraVRleHQod2lraXRleHQsIHRoaXMudGl0bGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIOe8lui+kemhtemdolxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IGNvbmZpZ1xuXHQgKiBAcGFyYW0gcGF5bG9hZFxuXHQgKi9cblx0YXN5bmMgZWRpdChwYXlsb2FkKSB7XG5cdFx0aWYgKCF0aGlzLmVkaXRUb2tlbikge1xuXHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2dldF9lZGl0dG9rZW4nKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLnRpbWVzdGFtcCAmJiAhdGhpcy5pc05ld1BhZ2UpIHtcblx0XHRcdC8vIOWmguaenOS4jeaYr+WIm+W7uuaWsOmhtemdoiDlj4jmsqHmnInln7rlh4bml7bpl7TmiLMg5YiZ5pyJ5Y+v6IO96YCg5oiQ57yW6L6R6KaG55uWIOS/nemZqei1t+ingeebtOaOpeaLkue7nVxuXHRcdFx0TG9nLmVycm9yKCdmYWlsX3RvX2dldF90aW1lc3RhbXAnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cmV0dXJuIFdpa2kuZWRpdCh7XG5cdFx0XHR0aXRsZTogdGhpcy50aXRsZSxcblx0XHRcdGVkaXRUb2tlbjogdGhpcy5lZGl0VG9rZW4sXG5cdFx0XHQuLi4odGhpcy50aW1lc3RhbXAgPyB7dGltZXN0YW1wOiB0aGlzLnRpbWVzdGFtcH0gOiB7fSksXG5cdFx0XHQuLi5wYXlsb2FkLFxuXHRcdFx0YWRkaXRpb25hbENvbmZpZzoge1xuXHRcdFx0XHQuLi4odGhpcy5pc05ld1BhZ2UgPyB7Y3JlYXRlb25seTogdGhpcy5pc05ld1BhZ2V9IDoge30pLFxuXHRcdFx0fSxcblx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5jbGFzcyBOb3RpZmljYXRpb24ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmluaXQoKTtcblx0fVxuXHRpbml0KCkge1xuXHRcdCQoJ2JvZHknKS5hcHBlbmQoJzxkaXYgaWQ9XCJNb2VOb3RpZmljYXRpb25cIj48L2Rpdj4nKTtcblx0fVxuXHRkaXNwbGF5KHRleHQgPSAn5Za1ficsIHR5cGUgPSAnc3VjY2VzcycsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcblx0XHQkKCcjTW9lTm90aWZpY2F0aW9uJykuYXBwZW5kKFxuXHRcdFx0JCgnPGRpdj4nKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ01vZU5vdGlmaWNhdGlvbi1ub3RpY2UnKVxuXHRcdFx0XHQuYWRkQ2xhc3MoYE1vZU5vdGlmaWNhdGlvbi1ub3RpY2UtJHt0eXBlfWApXG5cdFx0XHRcdC5hcHBlbmQoYDxzcGFuPiR7dGV4dH08L3NwYW4+YClcblx0XHQpO1xuXHRcdCQoJyNNb2VOb3RpZmljYXRpb24nKS5maW5kKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLmxhc3QoKS5mYWRlSW4oMzAwKTtcblx0XHR0aGlzLmJpbmQoKTtcblx0XHR0aGlzLmNsZWFyKCk7XG5cdFx0Y2FsbGJhY2soJCgnI01vZU5vdGlmaWNhdGlvbicpLmZpbmQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykubGFzdCgpKTtcblx0fVxuXHRiaW5kKCkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdCQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcblx0XHRcdHNlbGYuc2xpZGVMZWZ0KCQodGhpcykpO1xuXHRcdH0pO1xuXHR9XG5cdHN1Y2Nlc3ModGV4dCwgY2FsbGJhY2spIHtcblx0XHR0aGlzLmRpc3BsYXkodGV4dCwgJ3N1Y2Nlc3MnLCBjYWxsYmFjayk7XG5cdH1cblx0d2FybmluZyh0ZXh0LCBjYWxsYmFjaykge1xuXHRcdHRoaXMuZGlzcGxheSh0ZXh0LCAnd2FybmluZycsIGNhbGxiYWNrKTtcblx0fVxuXHRlcnJvcih0ZXh0LCBjYWxsYmFjaykge1xuXHRcdHRoaXMuZGlzcGxheSh0ZXh0LCAnZXJyb3InLCBjYWxsYmFjayk7XG5cdH1cblx0Y2xlYXIoKSB7XG5cdFx0aWYgKCQoJy5Nb2VOb3RpZmljYXRpb24tbm90aWNlJykubGVuZ3RoID49IDEwKSB7XG5cdFx0XHQkKCcjTW9lTm90aWZpY2F0aW9uJylcblx0XHRcdFx0LmNoaWxkcmVuKClcblx0XHRcdFx0LmZpcnN0KClcblx0XHRcdFx0LmZhZGVPdXQoMTUwLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRzZXRUaW1lb3V0KHRoaXMuY2xlYXIsIDMwMCk7XG5cdFx0fVxuXHR9XG5cdGVtcHR5KGYpIHtcblx0XHQkKCcuTW9lTm90aWZpY2F0aW9uLW5vdGljZScpLmVhY2goZnVuY3Rpb24gKGkpIHtcblx0XHRcdGlmICh0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRjb25zdCBlbGUgPSAkKHRoaXMpO1xuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRmKGVsZSk7XG5cdFx0XHRcdH0sIDIwMCAqIGkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JCh0aGlzKVxuXHRcdFx0XHRcdC5kZWxheShpICogMjAwKVxuXHRcdFx0XHRcdC5mYWRlT3V0KCdmYXN0JywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXHRzbGlkZUxlZnQoZWxlLCBzcGVlZCkge1xuXHRcdGVsZS5jc3MoJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG5cdFx0ZWxlLmFuaW1hdGUoXG5cdFx0XHR7XG5cdFx0XHRcdGxlZnQ6ICctMjAwJScsXG5cdFx0XHR9LFxuXHRcdFx0c3BlZWQgfHwgMTUwLFxuXHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQkKHRoaXMpLmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5yZW1vdmUoKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgTm90aWZpY2F0aW9uKCk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmNvbnN0IHNsZWVwID0gKHRpbWUpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0cmV0dXJuIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSk7XG5cdH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IHNsZWVwO1xuIiwgIi8qKlxuICog6Kej5p6QVVJM5Y+C5pWw5YiX6KGoXG4gKiBQYXJzZSBVUkwgcXVlcnkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9fSB1cmxcbiAqIEBwYXJhbSB1cmxcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVF1ZXJ5KHVybCkge1xuXHRjb25zdCByZWcgPSAvKChbXj8mPV0rKSg/Oj0oW14/Jj1dKikpKikvZztcblx0Y29uc3QgcGFyYW1zID0ge307XG5cdGxldCBtYXRjaDtcblx0d2hpbGUgKChtYXRjaCA9IHJlZy5leGVjKHVybCkpKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHBhcmFtc1ttYXRjaFsyXV0gPSBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cGFyYW1zW21hdGNoWzJdXSA9IG1hdGNoWzNdO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcGFyYW1zO1xufVxuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQgQ29uc3RhbnRzIGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgTm90aWZpY2F0aW9uIGZyb20gJy4vbm90aWZpY2F0aW9uJztcbmltcG9ydCBpMThuIGZyb20gJy4uL3V0aWxzL2kxOG4nO1xuaW1wb3J0IExvZyBmcm9tICcuLi91dGlscy9sb2cnO1xuaW1wb3J0IHNsZWVwIGZyb20gJy4uL3V0aWxzL3NsZWVwJztcbmltcG9ydCB7cGFyc2VRdWVyeX0gZnJvbSAnLi4vdXRpbHMvaGVscGVycyc7XG5cbmNsYXNzIFVJIHtcblx0cXVpY2tFZGl0UGFuZWxWaXNpYmxlID0gZmFsc2U7XG5cdHNjcm9sbFRvcCA9IDA7XG5cblx0LyoqXG5cdCAqIOWIm+W7uuWxheS4reWvueivneahhlxuXHQgKlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUg56qX5Y+j5qCH6aKYXG5cdCAqIEBwYXJhbSB7c3RyaW5nIHwgSlF1ZXJ5PEhUTUxFbGVtZW50Pn0gY29udGVudCDlhoXlrrlcblx0ICogQHBhcmFtIHsqfSB3aWR0aCDlrr3luqZcblx0ICogQHBhcmFtIHsqfSBjYWxsYmFjayDlm57osIPlh73mlbBcblx0ICovXG5cdGNyZWF0ZURpYWxvZ0JveCh0aXRsZSA9ICdXaWtpcGx1cycsIGNvbnRlbnQgPSAnJywgd2lkdGggPSA2MDAsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcblx0XHRpZiAoJCgnLldpa2lwbHVzLUludGVyQm94JykubGVuZ3RoID4gMCkge1xuXHRcdFx0JCgnLldpa2lwbHVzLUludGVyQm94JykuZWFjaChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdCQodGhpcykucmVtb3ZlKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0Y29uc3QgY2xpZW50V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0XHRjb25zdCBjbGllbnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0Y29uc3QgZGlhbG9nV2lkdGggPSBNYXRoLm1pbihjbGllbnRXaWR0aCwgd2lkdGgpO1xuXHRcdGNvbnN0IGRpYWxvZ0JveCA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gnKVxuXHRcdFx0LmNzcyh7XG5cdFx0XHRcdCdtYXJnaW4tbGVmdCc6IGNsaWVudFdpZHRoIC8gMiAtIGRpYWxvZ1dpZHRoIC8gMixcblx0XHRcdFx0dG9wOiAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSArIGNsaWVudEhlaWdodCAqIDAuMixcblx0XHRcdFx0ZGlzcGxheTogJ25vbmUnLFxuXHRcdFx0fSlcblx0XHRcdC5hcHBlbmQoJCgnPGRpdj4nKS5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtSGVhZGVyJykuaHRtbCh0aXRsZSkpXG5cdFx0XHQuYXBwZW5kKCQoJzxkaXY+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUNvbnRlbnQnKS5hcHBlbmQoY29udGVudCkpXG5cdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLnRleHQoJ8OXJykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUNsb3NlJykpO1xuXHRcdCQoJ2JvZHknKS5hcHBlbmQoZGlhbG9nQm94KTtcblx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gnKS53aWR0aChkaWFsb2dXaWR0aCk7XG5cdFx0JCgnLldpa2lwbHVzLUludGVyQm94LUNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0JCh0aGlzKVxuXHRcdFx0XHQucGFyZW50KClcblx0XHRcdFx0LmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IHVuZGVmaW5lZCkpOyAvLyDlj5bmtojpobXpnaLlhbPpl63noa7orqRcblx0XHRcdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0XHQvL+aLluabs1xuXHRcdGNvbnN0IGJpbmREcmFnZ2luZyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0XHRlbGVtZW50Lm1vdXNlZG93bigoZSkgPT4ge1xuXHRcdFx0XHRjb25zdCBiYXNlWCA9IGUuY2xpZW50WDtcblx0XHRcdFx0Y29uc3QgYmFzZVkgPSBlLmNsaWVudFk7XG5cdFx0XHRcdGNvbnN0IGJhc2VPZmZzZXRYID0gZWxlbWVudC5wYXJlbnQoKS5vZmZzZXQoKS5sZWZ0O1xuXHRcdFx0XHRjb25zdCBiYXNlT2Zmc2V0WSA9IGVsZW1lbnQucGFyZW50KCkub2Zmc2V0KCkudG9wO1xuXHRcdFx0XHQkKGRvY3VtZW50KS5vbignbW91c2Vtb3ZlJywgKGUpID0+IHtcblx0XHRcdFx0XHRlbGVtZW50LnBhcmVudCgpLmNzcyh7XG5cdFx0XHRcdFx0XHQnbWFyZ2luLWxlZnQnOiBiYXNlT2Zmc2V0WCArIGUuY2xpZW50WCAtIGJhc2VYLFxuXHRcdFx0XHRcdFx0dG9wOiBiYXNlT2Zmc2V0WSArIGUuY2xpZW50WSAtIGJhc2VZLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0JChkb2N1bWVudCkub24oJ21vdXNldXAnLCAoKSA9PiB7XG5cdFx0XHRcdFx0ZWxlbWVudC51bmJpbmQoJ21vdXNlZG93bicpO1xuXHRcdFx0XHRcdCQoZG9jdW1lbnQpLm9mZignbW91c2Vtb3ZlJyk7XG5cdFx0XHRcdFx0JChkb2N1bWVudCkub2ZmKCdtb3VzZXVwJyk7XG5cdFx0XHRcdFx0YmluZERyYWdnaW5nKGVsZW1lbnQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH07XG5cdFx0YmluZERyYWdnaW5nKCQoJy5XaWtpcGx1cy1JbnRlckJveC1IZWFkZXInKSk7XG5cdFx0JCgnLldpa2lwbHVzLUludGVyQm94JykuZmFkZUluKDUwMCk7XG5cdFx0Y2FsbGJhY2soKTtcblx0XHRyZXR1cm4gZGlhbG9nQm94O1xuXHR9XG5cblx0LyoqXG5cdCAqIOWcqOaQnOe0ouahhuW3puS+p+OAjOabtOWkmuOAjeiPnOWNleWGhea3u+WKoOaMiemSrlxuXHQgKiBBZGQgYSBidXR0b24gaW4gXCJNb3JlXCIgbWVudSAobGVmdCBvZiB0aGUgc2VhcmNoIGJhcilcblx0ICpcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRleHQg5oyJ6ZKu5ZCNIEJ1dHRvbiB0ZXh0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpZCDmjInpkq5pZCBCdXR0b24gaWRcblx0ICogQHJldHVybiB7SlF1ZXJ5PEhUTUxFbGVtZW50Pn0gYnV0dG9uXG5cdCAqL1xuXHRhZGRGdW5jdGlvbkJ1dHRvbih0ZXh0LCBpZCkge1xuXHRcdGxldCBidXR0b247XG5cdFx0c3dpdGNoIChDb25zdGFudHMuc2tpbikge1xuXHRcdFx0Y2FzZSAnbWluZXJ2YSc6XG5cdFx0XHRcdGJ1dHRvbiA9ICQoJzxsaT4nKVxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIGlkKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygndG9nZ2xlLWxpc3QtaXRlbScpXG5cdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnbXctdWktaWNvbiBtdy11aS1pY29uLWJlZm9yZSB0b2dnbGUtbGlzdC1pdGVtX19hbmNob3InKVxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCk7Jylcblx0XHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygndG9nZ2xlLWxpc3QtaXRlbV9fbGFiZWwnKVxuXHRcdFx0XHRcdFx0XHRcdFx0LnRleHQodGV4dClcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdtb2Vza2luJzpcblx0XHRcdFx0YnV0dG9uID0gJCgnPGxpPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1Nb3JlLUZ1bmN0aW9uLUJ1dHRvbicpXG5cdFx0XHRcdFx0LmF0dHIoJ2lkJywgaWQpXG5cdFx0XHRcdFx0LmFwcGVuZCgkKCc8YT4nKS5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKTsnKS50ZXh0KHRleHQpKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGJ1dHRvbiA9ICQoJzxsaT4nKVxuXHRcdFx0XHRcdC5hZGRDbGFzcygnbXctbGlzdC1pdGVtJylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3ZlY3Rvci10YWItbm9pY29uJylcblx0XHRcdFx0XHQuYXR0cignaWQnLCBpZClcblx0XHRcdFx0XHQuYXBwZW5kKCQoJzxhPicpLmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApOycpLnRleHQodGV4dCkpO1xuXHRcdH1cblx0XHRpZiAoQ29uc3RhbnRzLnNraW4gPT09ICdtaW5lcnZhJyAmJiAkKCcjcC10YicpLmxlbmd0aCA+IDApIHtcblx0XHRcdCQoJyNwLXRiJykuYXBwZW5kKGJ1dHRvbik7XG5cdFx0XHRyZXR1cm4gJChgIyR7aWR9YCk7XG5cdFx0fSBlbHNlIGlmIChDb25zdGFudHMuc2tpbiA9PT0gJ21vZXNraW4nKSB7XG5cdFx0XHQkKCcubW9yZS1hY3Rpb25zLWxpc3QnKS5maXJzdCgpLmFwcGVuZChidXR0b24pO1xuXHRcdFx0cmV0dXJuICQoYCMke2lkfWApO1xuXHRcdH0gZWxzZSBpZiAoJCgnI3AtY2FjdGlvbnMnKS5sZW5ndGggPiAwKSB7XG5cdFx0XHQkKCcjcC1jYWN0aW9ucyB1bCcpLmFwcGVuZChidXR0b24pO1xuXHRcdFx0cmV0dXJuICQoYCMke2lkfWApO1xuXHRcdH1cblx0XHRMb2cuaW5mbyhpMThuLnRyYW5zbGF0ZSgnY2FudF9hZGRfZnVuY2J0bicpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXlv6vpgJ/ph43lrprlkJHmjInpkq5cblx0ICpcblx0ICogQHBhcmFtIHsqfSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRTaW1wbGVSZWRpcmVjdEJ1dHRvbihvbkNsaWNrID0gKCkgPT4ge30pIHtcblx0XHRjb25zdCBidXR0b24gPSB0aGlzLmFkZEZ1bmN0aW9uQnV0dG9uKGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9mcm9tJyksICdXaWtpcGx1cy1TUi1JbnRybycpO1xuXHRcdGlmIChidXR0b24pIHtcblx0XHRcdGJ1dHRvbi5vbignY2xpY2snLCBvbkNsaWNrKTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICog5o+S5YWl6K6+572u6Z2i5p2/5oyJ6ZKuXG5cdCAqXG5cdCAqIEBwYXJhbSB7Kn0gb25DbGlja1xuXHQgKi9cblx0aW5zZXJ0U2V0dGluZ3NQYW5lbEJ1dHRvbihvbkNsaWNrID0gKCkgPT4ge30pIHtcblx0XHRjb25zdCBidXR0b24gPSB0aGlzLmFkZEZ1bmN0aW9uQnV0dG9uKGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5ncycpLCAnV2lraXBsdXMtU2V0dGluZ3MtSW50cm8nKTtcblx0XHRpZiAoYnV0dG9uKSB7XG5cdFx0XHRidXR0b24ub24oJ2NsaWNrJywgb25DbGljayk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpemhtumDqOW/q+mAn+e8lui+keaMiemSrlxuXHQgKiBJbnNlcnQgUXVpY2tFZGl0IGJ1dHRvbiBiZXNpZGVzIHBhZ2UgZWRpdCBidXR0b24uXG5cdCAqXG5cdCAqIEBwYXJhbSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRUb3BRdWlja0VkaXRFbnRyeShvbkNsaWNrKSB7XG5cdFx0Y29uc3QgdG9wQnRuID0gJCgnPGxpPicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLUVkaXQtVG9wQnRuJykuYXR0cignY2xhc3MnLCAnbXctbGlzdC1pdGVtJyk7XG5cdFx0Y29uc3QgdG9wQnRuTGluayA9ICQoJzxhPicpXG5cdFx0XHQuYXR0cignaHJlZicsICdqYXZhc2NyaXB0OnZvaWQoMCknKVxuXHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ3F1aWNrZWRpdF90b3BidG4nKX1gKTtcblx0XHR0b3BCdG4uYXBwZW5kKHRvcEJ0bkxpbmspO1xuXHRcdHN3aXRjaCAoQ29uc3RhbnRzLnNraW4pIHtcblx0XHRcdGNhc2UgJ21pbmVydmEnOlxuXHRcdFx0XHR0b3BCdG4uY3NzKHsnYWxpZ24taXRlbXMnOiAnY2VudGVyJywgZGlzcGxheTogJ2ZsZXgnfSk7XG5cdFx0XHRcdHRvcEJ0bi5maW5kKCdzcGFuJykuYWRkQ2xhc3MoJ3BhZ2UtYWN0aW9ucy1tZW51X19saXN0LWl0ZW0nKTtcblx0XHRcdFx0dG9wQnRuXG5cdFx0XHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0XHRcdC5hZGRDbGFzcyhcblx0XHRcdFx0XHRcdCdtdy11aS1pY29uIG13LXVpLWljb24tZWxlbWVudCBtdy11aS1pY29uLXdpa2ltZWRpYS1lZGl0LWJhc2UyMCBtdy11aS1pY29uLXdpdGgtbGFiZWwtZGVza3RvcCdcblx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0LmNzcygndmVydGljYWwtYWxpZ24nLCAnbWlkZGxlJyk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICd2ZWN0b3ItMjAyMic6XG5cdFx0XHRcdHRvcEJ0bi5hZGRDbGFzcygndmVjdG9yLXRhYi1ub2ljb24nKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3ZlY3Rvcic6XG5cdFx0XHRcdHRvcEJ0bi5hcHBlbmQoJCgnPHNwYW4+JykuYXBwZW5kKHRvcEJ0bkxpbmspKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0fVxuXHRcdCQodG9wQnRuKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRvbkNsaWNrKHtcblx0XHRcdFx0c2VjdGlvbk51bWJlcjogLTEsXG5cdFx0XHRcdHRhcmdldFBhZ2VOYW1lOiBDb25zdGFudHMuY3VycmVudFBhZ2VOYW1lLFxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0aWYgKCQoJyNjYS1lZGl0JykubGVuZ3RoID4gMCAmJiAkKCcjV2lraXBsdXMtRWRpdC1Ub3BCdG4nKS5sZW5ndGggPT09IDApIHtcblx0XHRcdENvbnN0YW50cy5za2luID09PSAnbWluZXJ2YScgPyAkKCcjY2EtZWRpdCcpLnBhcmVudCgpLmFmdGVyKHRvcEJ0bikgOiAkKCcjY2EtZWRpdCcpLmFmdGVyKHRvcEJ0bik7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIOaPkuWFpeauteiQveW/q+mAn+e8lui+keaMiemSrlxuXHQgKiBJbnNlcnQgUXVpY2tFZGl0IGJ1dHRvbnMgZm9yIGVhY2ggc2VjdGlvbi5cblx0ICpcblx0ICogQHBhcmFtIG9uQ2xpY2tcblx0ICovXG5cdGluc2VydFNlY3Rpb25RdWlja0VkaXRFbnRyaWVzKG9uQ2xpY2sgPSAoKSA9PiB7fSkge1xuXHRcdGNvbnN0IHNlY3Rpb25CdG4gPVxuXHRcdFx0Q29uc3RhbnRzLnNraW4gPT09ICdtaW5lcnZhJ1xuXHRcdFx0XHQ/ICQoJzxzcGFuPicpLmFwcGVuZChcblx0XHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcyhcblx0XHRcdFx0XHRcdFx0XHQnV2lraXBsdXMtRWRpdC1TZWN0aW9uQnRuIG13LXVpLWljb24gbXctdWktaWNvbi1lbGVtZW50IG13LXVpLWljb24td2lraW1lZGlhLWVkaXQtYmFzZTIwIGVkaXQtcGFnZSBtdy11aS1pY29uLWZsdXNoLXJpZ2h0J1xuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdC5jc3MoJ21hcmdpbi1sZWZ0JywgJzAuNzVlbScpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKScpXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCd0aXRsZScsIGkxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfc2VjdGlvbmJ0bicpKVxuXHRcdFx0XHRcdClcblx0XHRcdFx0OiAkKCc8c3Bhbj4nKVxuXHRcdFx0XHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS5hZGRDbGFzcygnbXctZWRpdHNlY3Rpb24tZGl2aWRlcicpLnRleHQoJyB8ICcpKVxuXHRcdFx0XHRcdFx0LmFwcGVuZChcblx0XHRcdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUVkaXQtU2VjdGlvbkJ0bicpXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnamF2YXNjcmlwdDp2b2lkKDApJylcblx0XHRcdFx0XHRcdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3NlY3Rpb25idG4nKSlcblx0XHRcdFx0XHRcdCk7XG5cdFx0JCgnLm13LWVkaXRzZWN0aW9uJykuZWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgZWRpdFVSTCA9ICQodGhpcykuZmluZChcImFbaHJlZio9J2FjdGlvbj1lZGl0J11cIikuZmlyc3QoKS5hdHRyKCdocmVmJyk7XG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25OdW1iZXIgPSBlZGl0VVJMXG5cdFx0XHRcdFx0Lm1hdGNoKC8mW3ZlXSpzZWN0aW9uXFw9KFteJl0rKS8pWzFdIC8vIGB2ZWAgZm9yIHZpc3VhbCBlZGl0b3Jcblx0XHRcdFx0XHQucmVwbGFjZSgvVC0vZ2ksICcnKTsgLy8gZW1iZWRkZWQgcGFnZXMgdXNlIFQtc2VyaWVzIHNlY3Rpb24gbnVtYmVyXG5cdFx0XHRcdGNvbnN0IHNlY3Rpb25UYXJnZXROYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGVkaXRVUkwubWF0Y2goL3RpdGxlPSguKz8pJi8pWzFdKTtcblx0XHRcdFx0Y29uc3QgY2xvbmVOb2RlID0gJCh0aGlzKS5wcmV2KCkuY2xvbmUoKTtcblx0XHRcdFx0Y2xvbmVOb2RlLmZpbmQoJy5tdy1oZWFkbGluZS1udW1iZXInKS5yZW1vdmUoKTtcblx0XHRcdFx0Y29uc3Qgc2VjdGlvbk5hbWUgPSBjbG9uZU5vZGUudGV4dCgpLnRyaW0oKTtcblx0XHRcdFx0Y29uc3QgX3NlY3Rpb25CdG4gPSBzZWN0aW9uQnRuLmNsb25lKCk7XG5cdFx0XHRcdF9zZWN0aW9uQnRuLmZpbmQoJy5XaWtpcGx1cy1FZGl0LVNlY3Rpb25CdG4nKS5vbignY2xpY2snLCAoKSA9PiB7XG5cdFx0XHRcdFx0b25DbGljayh7XG5cdFx0XHRcdFx0XHRzZWN0aW9uTnVtYmVyLFxuXHRcdFx0XHRcdFx0c2VjdGlvbk5hbWUsXG5cdFx0XHRcdFx0XHR0YXJnZXRQYWdlTmFtZTogc2VjdGlvblRhcmdldE5hbWUsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRDb25zdGFudHMuc2tpbiA9PT0gJ21pbmVydmEnXG5cdFx0XHRcdFx0PyAkKHRoaXMpLmFwcGVuZChfc2VjdGlvbkJ0bilcblx0XHRcdFx0XHQ6ICQodGhpcykuZmluZCgnLm13LWVkaXRzZWN0aW9uLWJyYWNrZXQnKS5sYXN0KCkuYmVmb3JlKF9zZWN0aW9uQnRuKTtcblx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRMb2cuZXJyb3IoJ2ZhaWxfdG9faW5pdF9xdWlja2VkaXQnKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiDmj5LlhaXku7vmhI/pk77mjqXnvJbovpHlhaXlj6Ncblx0ICpcblx0ICogQHBhcmFtIHsqfSBvbkNsaWNrXG5cdCAqL1xuXHRpbnNlcnRMaW5rRWRpdEVudHJpZXMob25DbGljayA9ICgpID0+IHt9KSB7XG5cdFx0JCgnI213LWNvbnRlbnQtdGV4dCBhLmV4dGVybmFsJykuZWFjaChmdW5jdGlvbiAoaSkge1xuXHRcdFx0Y29uc3QgdXJsID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG5cdFx0XHRjb25zdCBwYXJhbXMgPSBwYXJzZVF1ZXJ5KHVybCk7XG5cdFx0XHRpZiAocGFyYW1zLmFjdGlvbiA9PT0gJ2VkaXQnICYmIHBhcmFtcy50aXRsZSAhPT0gdW5kZWZpbmVkICYmIHBhcmFtcy5zZWN0aW9uICE9PSAnbmV3Jykge1xuXHRcdFx0XHQkKHRoaXMpLmFmdGVyKFxuXHRcdFx0XHRcdCQoJzxhPicpXG5cdFx0XHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0XHRcdGhyZWY6ICdqYXZhc2NyaXB0OnZvaWQoMCknLFxuXHRcdFx0XHRcdFx0XHRjbGFzczogJ1dpa2lwbHVzLUVkaXQtRXZlcnlXaGVyZUJ0bicsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LnRleHQoYCgke2kxOG4udHJhbnNsYXRlKCdxdWlja2VkaXRfc2VjdGlvbmJ0bicpfSlgKVxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsICgpID0+IHtcblx0XHRcdFx0XHRcdFx0b25DbGljayh7XG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0UGFnZU5hbWU6IHBhcmFtcy50aXRsZSxcblx0XHRcdFx0XHRcdFx0XHRzZWN0aW9uTnVtYmVyOiBwYXJhbXMuc2VjdGlvbiA/PyAtMSxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0c2hvd1F1aWNrRWRpdFBhbmVsKHtcblx0XHR0aXRsZSA9ICcnLFxuXHRcdGNvbnRlbnQgPSAnJyxcblx0XHRzdW1tYXJ5ID0gJycsXG5cdFx0b25CYWNrID0gKCkgPT4ge30sXG5cdFx0b25QYXJzZSA9ICgpID0+IHt9LFxuXHRcdG9uRWRpdCA9ICgpID0+IHt9LFxuXHRcdGVzY0V4aXQgPSBmYWxzZSxcblx0fSkge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMuc2Nyb2xsVG9wID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XG5cdFx0aWYgKHRoaXMucXVpY2tFZGl0UGFuZWxWaXNpYmxlKSB7XG5cdFx0XHR0aGlzLmhpZGVRdWlja0VkaXRQYW5lbCgpO1xuXHRcdH1cblx0XHR0aGlzLnF1aWNrRWRpdFBhbmVsVmlzaWJsZSA9IHRydWU7XG5cdFx0Ly8g6Ziy5q2i5omL5ruR5YWz6Zet6aG16Z2iXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHQnY2xvc2UnLFxuXHRcdFx0KHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIGAke2kxOG4udHJhbnNsYXRlKCdvbmNsb3NlX2NvbmZpcm0nKX1gO1xuXHRcdFx0fSlcblx0XHQpO1xuXHRcdGNvbnN0IGlzTmV3UGFnZSA9ICQoJy5ub2FydGljbGV0ZXh0JykubGVuZ3RoID4gMDtcblx0XHQvLyBET00g5a6a5LmJ5byA5aeLXG5cdFx0Y29uc3QgYmFja0J0biA9ICQoJzxzcGFuPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LUJhY2snKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1CdG4nKVxuXHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ2JhY2snKX1gKTsgLy8g6L+U5Zue5oyJ6ZKuXG5cdFx0Y29uc3QganVtcEJ0biA9ICQoJzxzcGFuPicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtUXVpY2tlZGl0LUp1bXAnKVxuXHRcdFx0LmFkZENsYXNzKCdXaWtpcGx1cy1CdG4nKVxuXHRcdFx0LmFwcGVuZChcblx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHQuYXR0cignaHJlZicsICcjV2lraXBsdXMtUXVpY2tlZGl0Jylcblx0XHRcdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgnZ290b19lZGl0Ym94Jyl9YClcblx0XHRcdCk7IC8vIOWIsOe8lui+keahhlxuXHRcdGNvbnN0IGlucHV0Qm94ID0gJCgnPHRleHRhcmVhPicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdCcpOyAvLyDkuLvnvJbovpHmoYZcblx0XHRjb25zdCBwcmV2aWV3Qm94ID0gJCgnPGRpdj4nKS5hdHRyKCdpZCcsICdXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKTsgLy8g6aKE6KeI6L6T5Ye6XG5cdFx0Y29uc3Qgc3VtbWFyeUJveCA9ICQoJzxpbnB1dD4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0Jylcblx0XHRcdC5hdHRyKCdwbGFjZWhvbGRlcicsIGAke2kxOG4udHJhbnNsYXRlKCdzdW1tYXJ5X3BsYWNlaG9sZCcpfWApOyAvLyDnvJbovpHmkZjopoHovpPlhaVcblx0XHRjb25zdCBlZGl0U3VibWl0QnRuID0gJCgnPGJ1dHRvbj4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1TdWJtaXQnKVxuXHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoaXNOZXdQYWdlID8gJ3B1Ymxpc2hfcGFnZScgOiAncHVibGlzaF9jaGFuZ2UnKX0oQ3RybCtTKWApOyAvLyDmj5DkuqTmjInpkq5cblx0XHRjb25zdCBwcmV2aWV3U3VibWl0QnRuID0gJCgnPGJ1dHRvbj4nKVxuXHRcdFx0LmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpXG5cdFx0XHQudGV4dChgJHtpMThuLnRyYW5zbGF0ZSgncHJldmlldycpfWApOyAvLyDpooTop4jmjInpkq5cblx0XHRjb25zdCBpc01pbm9yRWRpdCA9ICQoJzxkaXY+Jylcblx0XHRcdC5hcHBlbmQoJCgnPGlucHV0PicpLmF0dHIoe3R5cGU6ICdjaGVja2JveCcsIGlkOiAnV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCd9KSlcblx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdCQoJzxsYWJlbD4nKVxuXHRcdFx0XHRcdC5hdHRyKCdmb3InLCAnV2lraXBsdXMtUXVpY2tlZGl0LU1pbm9yRWRpdCcpXG5cdFx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ21hcmtfbWlub3JlZGl0Jyl9KEN0cmwrU2hpZnQrUylgKVxuXHRcdFx0KVxuXHRcdFx0LmNzcyh7bWFyZ2luOiAnNXB4IDVweCA1cHggLTNweCcsIGRpc3BsYXk6ICdpbmxpbmUnfSk7XG5cdFx0Ly8gRE9N5a6a5LmJ57uT5p2fXG5cdFx0Y29uc3QgZWRpdEJvZHkgPSAkKCc8ZGl2PicpLmFwcGVuZChcblx0XHRcdGJhY2tCdG4sXG5cdFx0XHRqdW1wQnRuLFxuXHRcdFx0cHJldmlld0JveCxcblx0XHRcdGlucHV0Qm94LFxuXHRcdFx0c3VtbWFyeUJveCxcblx0XHRcdCQoJzxicj4nKSxcblx0XHRcdGlzTWlub3JFZGl0LFxuXHRcdFx0ZWRpdFN1Ym1pdEJ0bixcblx0XHRcdHByZXZpZXdTdWJtaXRCdG5cblx0XHQpO1xuXHRcdHRoaXMuY3JlYXRlRGlhbG9nQm94KHRpdGxlLCBlZGl0Qm9keSwgMTAwMCwgKCkgPT4ge1xuXHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdCcpLnZhbChjb250ZW50KTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCcpLnZhbChzdW1tYXJ5KTtcblx0XHR9KTtcblx0XHQvLyBCYWNrXG5cdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1CYWNrJykub24oJ2NsaWNrJywgb25CYWNrKTtcblx0XHQvLyBQcmV2aWV3XG5cdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLm9uKCdjbGljaycsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnN0IHByZWxvYWRCYW5uZXIgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ2xvYWRpbmdfcHJldmlldycpfWApO1xuXHRcdFx0Y29uc3Qgd2lraVRleHQgPSAkKCcjV2lraXBsdXMtUXVpY2tlZGl0JykudmFsKCk7XG5cdFx0XHQkKHRoaXMpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZU91dCgxMDAsICgpID0+IHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmh0bWwoJycpLmFwcGVuZChwcmVsb2FkQmFubmVyKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVJbigxMDApO1xuXHRcdFx0fSk7XG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBzZWxmLnNjcm9sbFRvcH0sIDIwMCk7IC8v6L+U5Zue6aG26YOoXG5cdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBvblBhcnNlKHdpa2lUZXh0KTtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5mYWRlT3V0KCcxMDAnLCAoKSA9PiB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKS5odG1sKGA8aHI+PGRpdiBjbGFzcz1cIm13LWJvZHktY29udGVudFwiPiR7cmVzdWx0fTwvZGl2Pjxocj5gKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVJbignMTAwJyk7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1TdWJtaXQnKS5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdC8vIEVkaXRcblx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHRpbWVyID0gRGF0ZS5ub3coKTtcblx0XHRcdGNvbnN0IGVkaXRCYW5uZXIgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0LnRleHQoYCR7aTE4bi50cmFuc2xhdGUoJ3N1Ym1pdHRpbmdfZWRpdCcpfWApO1xuXHRcdFx0Y29uc3QgcGF5bG9hZCA9IHtcblx0XHRcdFx0c3VtbWFyeTogJCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0JykudmFsKCksXG5cdFx0XHRcdGNvbnRlbnQ6ICQoJyNXaWtpcGx1cy1RdWlja2VkaXQnKS52YWwoKSxcblx0XHRcdFx0aXNNaW5vckVkaXQ6ICQoJyNXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0JykuaXMoJzpjaGVja2VkJyksXG5cdFx0XHR9O1xuXHRcdFx0Ly8g5YeG5aSH57yW6L6RIOemgeeUqOaMiemSriDmiafooYzliqjnlLtcblx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0LCNXaWtpcGx1cy1RdWlja2VkaXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLmF0dHIoXG5cdFx0XHRcdCdkaXNhYmxlZCcsXG5cdFx0XHRcdCdkaXNhYmxlZCdcblx0XHRcdCk7XG5cdFx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBzZWxmLnNjcm9sbFRvcH0sIDIwMCk7XG5cdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0JykuZmFkZU91dCgxMDAsICgpID0+IHtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmh0bWwoJycpLmFwcGVuZChlZGl0QmFubmVyKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpLmZhZGVJbigxMDApO1xuXHRcdFx0fSk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRhd2FpdCBvbkVkaXQocGF5bG9hZCk7XG5cdFx0XHRcdGNvbnN0IHVzZVRpbWUgPSBEYXRlLm5vdygpIC0gdGltZXI7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtUHJldmlldy1PdXRwdXQnKVxuXHRcdFx0XHRcdC5maW5kKCcuV2lraXBsdXMtQmFubmVyJylcblx0XHRcdFx0XHQuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoNiwgMjM5LCA5MiwgMC40NCknKTtcblx0XHRcdFx0JCgnI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LU91dHB1dCcpXG5cdFx0XHRcdFx0LmZpbmQoJy5XaWtpcGx1cy1CYW5uZXInKVxuXHRcdFx0XHRcdC50ZXh0KGAke2kxOG4udHJhbnNsYXRlKCdlZGl0X3N1Y2Nlc3MnLCBbdXNlVGltZS50b1N0cmluZygpXSl9YCk7XG5cdFx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsICh3aW5kb3cub25iZWZvcmV1bmxvYWQgPSB1bmRlZmluZWQpKTsgLy/lj5bmtojpobXpnaLlhbPpl63noa7orqRcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdH0sIDUwMCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS5jc3MoJ2JhY2tncm91bmQnLCAncmdiYSgyMTgsIDE0MiwgMTY3LCAwLjY1KScpO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuaHRtbChlcnJvci5tZXNzYWdlKTtcblx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0LCNXaWtpcGx1cy1RdWlja2VkaXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCcpLnByb3AoXG5cdFx0XHRcdFx0J2Rpc2FibGVkJyxcblx0XHRcdFx0XHRmYWxzZVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdC8vQ3RybCtT5o+Q5LqkIEN0cmwrU2hpZnQrU+Wwj+e8lui+kVxuXHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQsI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0LCNXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0Jykub24oJ2tleWRvd24nLCAoZSkgPT4ge1xuXHRcdFx0aWYgKGUuY3RybEtleSAmJiBlLndoaWNoID09PSA4Mykge1xuXHRcdFx0XHRpZiAoZS5zaGlmdEtleSkge1xuXHRcdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtTWlub3JFZGl0JykudHJpZ2dlcignY2xpY2snKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQkKCcjV2lraXBsdXMtUXVpY2tlZGl0LVN1Ym1pdCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHQvL0VzY+mAgOWHulxuXHRcdGlmIChlc2NFeGl0KSB7XG5cdFx0XHQkKGRvY3VtZW50KS5vbigna2V5ZG93bicsIChlKSA9PiB7XG5cdFx0XHRcdGlmIChlLndoaWNoID09PSAyNykge1xuXHRcdFx0XHRcdCQoJyNXaWtpcGx1cy1RdWlja2VkaXQtQmFjaycpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGhpZGVRdWlja0VkaXRQYW5lbCgpIHtcblx0XHR0aGlzLnF1aWNrRWRpdFBhbmVsVmlzaWJsZSA9IGZhbHNlO1xuXHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveCcpLmZhZGVPdXQoJ2Zhc3QnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAod2luZG93Lm9uYmVmb3JldW5sb2FkID0gdW5kZWZpbmVkKSk7IC8v5Y+W5raI6aG16Z2i5YWz6Zet56Gu6K6kXG5cdFx0XHQkKHRoaXMpLnJlbW92ZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaYvuekuuW/q+mAn+mHjeWumuWQkeW8ueeql1xuXHQgKlxuXHQgKiBAcGFyYW0gcm9vdDBcblx0ICogQHBhcmFtIHJvb3QwLm9uRWRpdFxuXHQgKiBAcGFyYW0gcm9vdDAub25TdWNjZXNzXG5cdCAqL1xuXHRzaG93U2ltcGxlUmVkaXJlY3RQYW5lbCh7b25FZGl0ID0gKCkgPT4ge30sIG9uU3VjY2VzcyA9ICgpID0+IHt9fSA9IHt9KSB7XG5cdFx0Y29uc3QgaW5wdXQgPSAkKCc8aW5wdXQ+JykuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUlucHV0Jyk7XG5cdFx0Y29uc3QgYXBwbHlCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU1ItQXBwbHknKVxuXHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ3N1Ym1pdCcpKTtcblx0XHRjb25zdCBjYW5jZWxCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU1ItQ2FuY2VsJylcblx0XHRcdC50ZXh0KGkxOG4udHJhbnNsYXRlKCdjYW5jZWwnKSk7XG5cdFx0Y29uc3QgY29udGludWVCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU1ItQ29udGludWUnKVxuXHRcdFx0LnRleHQoaTE4bi50cmFuc2xhdGUoJ2NvbnRpbnVlJykpO1xuXHRcdGNvbnN0IGNvbnRlbnQgPSAkKCc8ZGl2PicpLmFwcGVuZChpbnB1dCkuYXBwZW5kKCQoJzxocj4nKSkuYXBwZW5kKGFwcGx5QnRuKS5hcHBlbmQoY2FuY2VsQnRuKTsgLy/mi7zmjqVcblx0XHRjb25zdCBkaWFsb2cgPSB0aGlzLmNyZWF0ZURpYWxvZ0JveChpMThuLnRyYW5zbGF0ZSgncmVkaXJlY3RfZGVzYycpLCBjb250ZW50LCA2MDApO1xuXHRcdGFwcGx5QnRuLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHRpdGxlID0gJCgnLldpa2lwbHVzLUludGVyQm94LUlucHV0JykudmFsKCk7XG5cdFx0XHQkKCcuV2lraXBsdXMtSW50ZXJCb3gtQ29udGVudCcpLmh0bWwoXG5cdFx0XHRcdGA8ZGl2IGNsYXNzPVwiV2lraXBsdXMtQmFubmVyXCI+JHtpMThuLnRyYW5zbGF0ZSgnc3VibWl0dGluZ19lZGl0Jyl9PC9kaXY+YFxuXHRcdFx0KTtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGF3YWl0IG9uRWRpdCh7XG5cdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0Zm9yY2VPdmVyd3JpdGU6IGZhbHNlLFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLnRleHQoaTE4bi50cmFuc2xhdGUoJ3JlZGlyZWN0X3NhdmVkJykpO1xuXHRcdFx0XHR0aGlzLmhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsKGRpYWxvZyk7XG5cdFx0XHRcdG9uU3VjY2Vzcyh7dGl0bGV9KTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS5jc3MoJ2JhY2tncm91bmQnLCAncmdiYSgyMTgsIDE0MiwgMTY3LCAwLjY1KScpO1xuXHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykudGV4dChlcnJvci5tZXNzYWdlKTtcblx0XHRcdFx0aWYgKGVycm9yLmNvZGUgPT09ICdhcnRpY2xlZXhpc3RzJykge1xuXHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuYXBwZW5kKCQoJzxocj4nKSkuYXBwZW5kKGNvbnRpbnVlQnRuKS5hcHBlbmQoY2FuY2VsQnRuKTtcblx0XHRcdFx0XHRjYW5jZWxCdG4ub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGNvbnRpbnVlQnRuLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1JbnRlckJveC1Db250ZW50JykuaHRtbChcblx0XHRcdFx0XHRcdFx0YDxkaXYgY2xhc3M9XCJXaWtpcGx1cy1CYW5uZXJcIj4ke2kxOG4udHJhbnNsYXRlKCdzdWJtaXR0aW5nX2VkaXQnKX08L2Rpdj5gXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0YXdhaXQgb25FZGl0KHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRcdFx0XHRmb3JjZU92ZXJ3cml0ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdCQoJy5XaWtpcGx1cy1CYW5uZXInKS50ZXh0KGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9zYXZlZCcpKTtcblx0XHRcdFx0XHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdFx0XHRcdFx0XHRvblN1Y2Nlc3Moe3RpdGxlfSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHQkKCcuV2lraXBsdXMtQmFubmVyJykuY3NzKCdiYWNrZ3JvdW5kJywgJ3JnYmEoMjE4LCAxNDIsIDE2NywgMC42NSknKTtcblx0XHRcdFx0XHRcdFx0JCgnLldpa2lwbHVzLUJhbm5lcicpLnRleHQoZXJyb3IubWVzc2FnZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYW5jZWxCdG4ub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5oaWRlU2ltcGxlUmVkaXJlY3RQYW5lbChkaWFsb2cpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIOmakOiXj+W/q+mAn+mHjeWumuWQkeW8ueeql1xuXHQgKlxuXHQgKiBAcGFyYW0geyp9IGRpYWxvZ1xuXHQgKi9cblx0aGlkZVNpbXBsZVJlZGlyZWN0UGFuZWwoZGlhbG9nID0gJCgnYm9keScpKSB7XG5cdFx0ZGlhbG9nLmZpbmQoJy5XaWtpcGx1cy1JbnRlckJveC1DbG9zZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdH1cblxuXHRzaG93U2V0dGluZ3NQYW5lbCh7b25TdWJtaXQgPSAoKSA9PiB7fX0gPSB7fSkge1xuXHRcdGNvbnN0IGlucHV0ID0gJCgnPHRleHRhcmVhPicpLmF0dHIoJ2lkJywgJ1dpa2lwbHVzLVNldHRpbmctSW5wdXQnKS5hdHRyKCdyb3dzJywgJzEwJyk7XG5cdFx0Y29uc3QgYXBwbHlCdG4gPSAkKCc8ZGl2PicpXG5cdFx0XHQuYWRkQ2xhc3MoJ1dpa2lwbHVzLUludGVyQm94LUJ0bicpXG5cdFx0XHQuYXR0cignaWQnLCAnV2lraXBsdXMtU2V0dGluZy1BcHBseScpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnc3VibWl0JykpO1xuXHRcdGNvbnN0IGNhbmNlbEJ0biA9ICQoJzxkaXY+Jylcblx0XHRcdC5hZGRDbGFzcygnV2lraXBsdXMtSW50ZXJCb3gtQnRuJylcblx0XHRcdC5hdHRyKCdpZCcsICdXaWtpcGx1cy1TZXR0aW5nLUNhbmNlbCcpXG5cdFx0XHQudGV4dChpMThuLnRyYW5zbGF0ZSgnY2FuY2VsJykpO1xuXHRcdGNvbnN0IGNvbnRlbnQgPSAkKCc8ZGl2PicpLmFwcGVuZChpbnB1dCkuYXBwZW5kKCQoJzxocj4nKSkuYXBwZW5kKGFwcGx5QnRuKS5hcHBlbmQoY2FuY2VsQnRuKTsgLy/mi7zmjqVcblxuXHRcdGNvbnN0IGRpYWxvZyA9IHRoaXMuY3JlYXRlRGlhbG9nQm94KGkxOG4udHJhbnNsYXRlKCd3aWtpcGx1c19zZXR0aW5nc19kZXNjJyksIGNvbnRlbnQsIDYwMCwgKCkgPT4ge1xuXHRcdFx0aWYgKGxvY2FsU3RvcmFnZS5XaWtpcGx1c19TZXR0aW5ncykge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLnZhbChsb2NhbFN0b3JhZ2UuV2lraXBsdXNfU2V0dGluZ3MpO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGNvbnN0IHNldHRpbmdzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuV2lraXBsdXNfU2V0dGluZ3MpO1xuXHRcdFx0XHRcdCQoJyNXaWtpcGx1cy1TZXR0aW5nLUlucHV0JykudmFsKEpTT04uc3RyaW5naWZ5KHNldHRpbmdzLCBudWxsLCAyKSk7XG5cdFx0XHRcdH0gY2F0Y2gge1xuXHRcdFx0XHRcdC8vIGlnbm9yZVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQkKCcjV2lraXBsdXMtU2V0dGluZy1JbnB1dCcpLmF0dHIoJ3BsYWNlaG9sZGVyJywgaTE4bi50cmFuc2xhdGUoJ3dpa2lwbHVzX3NldHRpbmdzX3BsYWNlaG9sZGVyJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGFwcGx5QnRuLm9uKCdjbGljaycsIGFzeW5jICgpID0+IHtcblx0XHRcdGNvbnN0IHNhdmVkQmFubmVyID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnV2lraXBsdXMtQmFubmVyJykudGV4dChpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3Nfc2F2ZWQnKSk7XG5cdFx0XHRjb25zdCBzZXR0aW5ncyA9ICQoJyNXaWtpcGx1cy1TZXR0aW5nLUlucHV0JykudmFsKCk7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRvblN1Ym1pdCh7c2V0dGluZ3N9KTtcblx0XHRcdFx0JCgnLldpa2lwbHVzLUludGVyQm94LUNvbnRlbnQnKS5odG1sKCcnKS5hcHBlbmQoc2F2ZWRCYW5uZXIpO1xuXHRcdFx0XHRhd2FpdCBzbGVlcCgxNTAwKTtcblx0XHRcdFx0dGhpcy5oaWRlU2V0dGluZ3NQYW5lbChkaWFsb2cpO1xuXHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdE5vdGlmaWNhdGlvbi5lcnJvcihpMThuLnRyYW5zbGF0ZSgnd2lraXBsdXNfc2V0dGluZ3NfZ3JhbW1hcl9lcnJvcicpKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRjYW5jZWxCdG4ub24oJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5oaWRlU2V0dGluZ3NQYW5lbChkaWFsb2cpO1xuXHRcdH0pO1xuXHR9XG5cblx0aGlkZVNldHRpbmdzUGFuZWwoZGlhbG9nID0gJCgnYm9keScpKSB7XG5cdFx0ZGlhbG9nLmZpbmQoJy5XaWtpcGx1cy1JbnRlckJveC1DbG9zZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG5cdH1cblxuXHRiaW5kUHJlbG9hZEV2ZW50cyhvblByZWxvYWQpIHtcblx0XHQkKCcjdG9jJylcblx0XHRcdC5jaGlsZHJlbigndWwnKVxuXHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0LmVhY2goZnVuY3Rpb24gKGkpIHtcblx0XHRcdFx0JCh0aGlzKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdCQodGhpcykub2ZmKCdtb3VzZW92ZXInKTtcblx0XHRcdFx0XHRvblByZWxvYWQoe1xuXHRcdFx0XHRcdFx0c2VjdGlvbk51bWJlcjogaSArIDEsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFVJKCk7XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmNsYXNzIFNldHRpbmdzIHtcblx0Z2V0U2V0dGluZyhrZXksIG9iamVjdCA9IHt9KSB7XG5cdFx0Y29uc3QgdyA9IG9iamVjdDtcblx0XHRsZXQgc2V0dGluZ3M7XG5cdFx0dHJ5IHtcblx0XHRcdHNldHRpbmdzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbJ1dpa2lwbHVzX1NldHRpbmdzJ10pO1xuXHRcdH0gY2F0Y2gge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgY3VzdG9tU2V0dGluZ0Z1bmN0aW9uID0gbmV3IEZ1bmN0aW9uKGByZXR1cm4gJHtzZXR0aW5nc1trZXldfWApO1xuXHRcdFx0aWYgKHR5cGVvZiBjdXN0b21TZXR0aW5nRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAoY3VzdG9tU2V0dGluZ0Z1bmN0aW9uKCkodykgPT09IHRydWUpIHtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGN1c3RvbVNldHRpbmdGdW5jdGlvbigpKHcpIHx8IHNldHRpbmdzW2tleV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0XHRyZXR1cm4gc2V0dGluZ3Nba2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHNldHRpbmdzW2tleV07XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRsZXQgcmVzdWx0ID0gc2V0dGluZ3Nba2V5XTtcblx0XHRcdFx0Zm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob2JqZWN0KSkge1xuXHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKGBcXCR7JHtrZXl9fWAsIG9iamVjdFtrZXldKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgU2V0dGluZ3MoKTtcbiIsICIvKiEgV2lraXBsdXMgLSA0LjAuMTEgfCBFcmlkYW51cyBTb3JhICjlprnnqbrphbEpIHwgQ0MtQlktU0EtNC4wIDxodHRwczovL3F3YmsuY2MvSDpDQy1CWS1TQS00LjA+ICovXG4ubXctZWRpdHNlY3Rpb24tZGl2aWRlciB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbiNXaWtpcGx1cy1RdWlja2VkaXQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cbiNXaWtpcGx1cy1RdWlja2VkaXQtU3VtbWFyeS1JbnB1dCB7XG4gIHdpZHRoOiA1MCU7XG59XG4uc2tpbi12ZWN0b3IgI1dpa2lwbHVzLVF1aWNrZWRpdC1TdW1tYXJ5LUlucHV0IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuI1dpa2lwbHVzLVF1aWNrZWRpdC1QcmV2aWV3LVN1Ym1pdCxcbiNXaWtpcGx1cy1RdWlja2VkaXQtU3VibWl0IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBwYWRkaW5nOiByZXZlcnQ7XG59XG4jV2lraXBsdXMtUXVpY2tlZGl0LVByZXZpZXctT3V0cHV0IHtcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogNXB4IDA7XG59XG4uV2lraXBsdXMtQnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAzcHggNXB4O1xuICBwYWRkaW5nOiAzcHggMWVtO1xuICB3aWR0aDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4ICNhYWE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLldpa2lwbHVzLUJ0biBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzAwMDtcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMCU7XG4gIHotaW5kZXg6IDIwMDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xuICB3aWR0aDogNjAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2MSwgMTU0LCAyMjAsIDAuNDEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmOWY3O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuLldpa2lwbHVzLUludGVyQm94LUhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICB0b3A6IC04cHg7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNmNmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGN1cnNvcjogbW92ZTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1JbnB1dCB7XG4gIG1hcmdpbjogMjBweDtcbiAgd2lkdGg6IDYwJTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveC1CdG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiBhdXRvIDNweDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLldpa2lwbHVzLUludGVyQm94LUJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG59XG4uV2lraXBsdXMtSW50ZXJCb3gtQ2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogM3B4IDdweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5XaWtpcGx1cy1JbnRlckJveCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbn1cbi5XaWtpcGx1cy1JbnRlckJveCB0YWJsZS5kaWZmIHtcbiAgdGFibGUtbGF5b3V0OiBhdXRvO1xufVxuLldpa2lwbHVzLUludGVyQm94IHRhYmxlLmRpZmYgLmRpZmYtYWRkZWRsaW5lLFxuLldpa2lwbHVzLUludGVyQm94IHRhYmxlLmRpZmYgLmRpZmYtZGVsZXRlZGxpbmUsXG4uV2lraXBsdXMtSW50ZXJCb3ggdGFibGUuZGlmZiAuZGlmZi1saW5lbm8ge1xuICB3aWR0aDogNTAlO1xufVxuLldpa2lwbHVzLUludGVyQm94IHRhYmxlLmRpZmYgLmRpZmYtbWFya2VyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5XaWtpcGx1cy1CYW5uZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE5MywgMjIyLCAyMTQsIDAuNTEpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250cy1zYW5zLCBzYW5zLXNlcmlmKTtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDNweCA1cHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICB3aWR0aDogYXV0bztcbiAgYm94LXNoYWRvdzogMCAzcHggM3B4ICNhYWE7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlIHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogM3B4IGF1dG8gM3B4IDNweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250cy1zYW5zLCBzYW5zLXNlcmlmKTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlLXN1Y2Nlc3Mge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICM4ZGRhOTM7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4YTAwO1xufVxuLk1vZU5vdGlmaWNhdGlvbi1ub3RpY2Utd2FybmluZyB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2ZmZGYwMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGJkMDA7XG59XG4uTW9lTm90aWZpY2F0aW9uLW5vdGljZS13YXJuaW5nIHNwYW4ge1xuICBjb2xvcjogIzAwMDtcbn1cbi5Nb2VOb3RpZmljYXRpb24tbm90aWNlLWVycm9yIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjZTcxNzE3O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwMGUwNjtcbn1cbiNNb2VOb3RpZmljYXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMzBweDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogNzEzO1xuICBtaW4td2lkdGg6IDIwJTtcbn1cbiIsICIvKipcbiAqIFdpa2lwbHVzXG4gKiBFcmlkYW51cyBTb3JhIDxzb3JhQHNvdW5kLm1vZT5cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCBQYWdlIGZyb20gJy4vY29yZS9wYWdlJztcbmltcG9ydCBVSSBmcm9tICcuL2NvcmUvdWknO1xuaW1wb3J0IE5vdGlmaWNhdGlvbiBmcm9tICcuL2NvcmUvbm90aWZpY2F0aW9uJztcbmltcG9ydCBXaWtpIGZyb20gJy4vc2VydmljZXMvd2lraSc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi91dGlscy9zZXR0aW5ncyc7XG5pbXBvcnQgTG9nIGZyb20gJy4vdXRpbHMvbG9nJztcbmltcG9ydCBDb25zdGFudHMgZnJvbSAnLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IGkxOG4gZnJvbSAnLi91dGlscy9pMThuJztcbmltcG9ydCAnLi93aWtpcGx1cy5sZXNzJztcblxuJChhc3luYyAoKSA9PiB7XG5cdGNvbnN0IFBhZ2VzID0ge307XG5cdGNvbnN0IGlzQ3VycmVudFBhZ2VFbXB0eSA9ICQoJy5ub2FydGljbGV0ZXh0JykubGVuZ3RoID4gMCAmJiBDb25zdGFudHMuYXJ0aWNsZUlkID09PSAwO1xuXG5cdC8qKlxuXHQgKiBHZXQgcGFnZSBpbnN0YW5jZS5cblx0ICpcblx0ICogQHBhcmFtIHsqfSBwYXJhbXNcblx0ICogQHBhcmFtIHtudW1iZXJ9IHBhcmFtcy5yZXZpc2lvbklkIOmhtemdouS/ruiuoueJiOacrOWPt1xuXHQgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnRpdGxlIOmhtemdouagh+mimFxuXHQgKi9cblx0Y29uc3QgZ2V0UGFnZSA9IGFzeW5jICh7cmV2aXNpb25JZCwgdGl0bGV9KSA9PiB7XG5cdFx0aWYgKFBhZ2VzW3JldmlzaW9uSWRdKSB7XG5cdFx0XHRyZXR1cm4gUGFnZXNbcmV2aXNpb25JZF07XG5cdFx0fVxuXHRcdGNvbnN0IG5ld1BhZ2UgPSBuZXcgUGFnZSh7XG5cdFx0XHRyZXZpc2lvbklkLFxuXHRcdFx0dGl0bGUsXG5cdFx0fSk7XG5cdFx0YXdhaXQgbmV3UGFnZS5pbml0KCk7XG5cdFx0UGFnZXNbcmV2aXNpb25JZF0gPSBuZXdQYWdlO1xuXHRcdHJldHVybiBQYWdlc1tyZXZpc2lvbklkXTtcblx0fTtcblxuXHRMb2cuaW5mbyhgV2lraXBsdXMgbm93IGxvYWRpbmcuIFZlcnNpb246ICR7Q29uc3RhbnRzLnZlcnNpb259YCk7XG5cblx0aWYgKCF3aW5kb3cubXcpIHtcblx0XHRjb25zb2xlLmxvZygnTWVkaWF3aWtpIEphdmFTY3JpcHQgbm90IGxvYWRlZCBvciBub3QgYSBNZWRpYXdpa2kgd2Vic2l0ZS4nKTtcblx0XHRyZXR1cm47XG5cdH1cblx0aWYgKCFDb25zdGFudHMudXNlckdyb3Vwcy5pbmNsdWRlcygnYXV0b2NvbmZpcm1lZCcpICYmICFDb25zdGFudHMudXNlckdyb3Vwcy5pbmNsdWRlcygnY29uZmlybWVkJykpIHtcblx0XHROb3RpZmljYXRpb24uZXJyb3IoaTE4bi50cmFuc2xhdGUoJ25vdF9hdXRvY29uZmlybWVkX3VzZXInKSk7XG5cdFx0TG9nLmluZm8oaTE4bi50cmFuc2xhdGUoJ25vdF9hdXRvY29uZmlybWVkX3VzZXInKSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCFDb25zdGFudHMuaXNBcnRpY2xlIHx8IENvbnN0YW50cy5hY3Rpb24gIT09ICd2aWV3Jykge1xuXHRcdExvZy5pbmZvKCdOb3QgYW4gZWRpdGFibGUgcGFnZS4gU3RvcCBpbml0aWFsaXphdGlvbi4nKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBJbml0aWFsaXplIGN1cnJlbnQgcGFnZSDpu5jorqTliJ3lp4vljJblvZPliY3pobXpnaJcblx0d2luZG93Ll9XaWtpcGx1c1BhZ2VzID0gUGFnZXM7XG5cdGNvbnN0IGN1cnJlbnRQYWdlTmFtZSA9IENvbnN0YW50cy5jdXJyZW50UGFnZU5hbWU7XG5cdGNvbnN0IHJldmlzaW9uSWQgPSBDb25zdGFudHMucmV2aXNpb25JZDtcblx0Y29uc3QgY3VycmVudFBhZ2UgPSBhd2FpdCBnZXRQYWdlKHtcblx0XHRyZXZpc2lvbklkLFxuXHRcdHRpdGxlOiBjdXJyZW50UGFnZU5hbWUsXG5cdH0pO1xuXG5cdGNvbnN0IGhhbmRsZVF1aWNrRWRpdEJ1dHRvbkNsaWNrZWQgPSBhc3luYyAoe3NlY3Rpb25OdW1iZXIsIHNlY3Rpb25OYW1lLCB0YXJnZXRQYWdlTmFtZX0gPSB7fSkgPT4ge1xuXHRcdGNvbnN0IGlzT3RoZXJQYWdlID0gdGFyZ2V0UGFnZU5hbWUgIT09IGN1cnJlbnRQYWdlTmFtZTtcblx0XHRpZiAoaXNPdGhlclBhZ2UgJiYgQ29uc3RhbnRzLmxhdGVzdFJldmlzaW9uSWQgIT09IENvbnN0YW50cy5yZXZpc2lvbklkKSB7XG5cdFx0XHQvLyDlnKjljoblj7LniYjmnKznvJbovpHlhbbku5bpobXpnaLmnInpl67popgg5pqC5pe25LiN5pSv5oyBXG5cdFx0XHRMb2cuZXJyb3IoJ2Nyb3NzX3BhZ2VfaGlzdG9yeV9yZXZpc2lvbl9lZGl0X3dhcm5pbmcnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgcmV2aXNpb25JZCA9IGlzT3RoZXJQYWdlID8gYXdhaXQgV2lraS5nZXRMYXRlc3RSZXZpc2lvbklkRm9yUGFnZSh0YXJnZXRQYWdlTmFtZSkgOiBDb25zdGFudHMucmV2aXNpb25JZDtcblxuXHRcdGNvbnN0IHBhZ2UgPSBhd2FpdCBnZXRQYWdlKHtyZXZpc2lvbklkLCB0aXRsZTogdGFyZ2V0UGFnZU5hbWV9KTtcblx0XHRjb25zdCBjdXN0b21TdW1tYXJ5ID0gU2V0dGluZ3MuZ2V0U2V0dGluZygnZGVmYXVsdFN1bW1hcnknLCB7XG5cdFx0XHRzZWN0aW9uTmFtZSxcblx0XHRcdHNlY3Rpb25OdW1iZXIsXG5cdFx0XHRzZWN0aW9uVGFyZ2V0TmFtZTogdGFyZ2V0UGFnZU5hbWUsXG5cdFx0fSk7XG5cdFx0Y29uc3Qgc3VtbWFyeSA9XG5cdFx0XHRjdXN0b21TdW1tYXJ5IHx8XG5cdFx0XHQoc2VjdGlvbk5hbWVcblx0XHRcdFx0PyBgLyogJHtzZWN0aW9uTmFtZX0gKi8gJHtpMThuLnRyYW5zbGF0ZSgnZGVmYXVsdF9zdW1tYXJ5X3N1ZmZpeCcpfWBcblx0XHRcdFx0OiBpMThuLnRyYW5zbGF0ZSgnZGVmYXVsdF9zdW1tYXJ5X3N1ZmZpeCcpKTtcblx0XHRjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0Tm90aWZpY2F0aW9uLnN1Y2Nlc3MoaTE4bi50cmFuc2xhdGUoJ2xvYWRpbmcnKSk7XG5cdFx0fSwgMjAwKTtcblx0XHRjb25zdCBzZWN0aW9uQ29udGVudCA9IGF3YWl0IHBhZ2UuZ2V0V2lraVRleHQoe1xuXHRcdFx0c2VjdGlvbjogc2VjdGlvbk51bWJlcixcblx0XHR9KTtcblx0XHRjb25zdCBpc0VkaXRIaXN0b3J5UmV2aXNpb24gPSAhaXNPdGhlclBhZ2UgJiYgQ29uc3RhbnRzLmxhdGVzdFJldmlzaW9uSWQgIT09IENvbnN0YW50cy5yZXZpc2lvbklkO1xuXHRcdGNvbnN0IGVzY1RvRXhpdCA9XG5cdFx0XHRTZXR0aW5ncy5nZXRTZXR0aW5nKCdlc2NfdG9fZXhpdF9xdWlja2VkaXQnKSA9PT0gdHJ1ZSB8fCAvLyDlhbzlrrnogIHorr7nva5rZXlcblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY190b19leGl0X3F1aWNrZWRpdCcpID09PSAndHJ1ZScgfHxcblx0XHRcdFNldHRpbmdzLmdldFNldHRpbmcoJ2VzY1RvRXhpdFF1aWNrRWRpdCcpID09PSB0cnVlIHx8XG5cdFx0XHRTZXR0aW5ncy5nZXRTZXR0aW5nKCdlc2NUb0V4aXRRdWlja0VkaXQnKSA9PT0gJ3RydWUnO1xuXHRcdGNvbnN0IGN1c3RvbUVkaXRUYWdzID0gU2V0dGluZ3MuZ2V0U2V0dGluZygnY3VzdG9tX2VkaXRfdGFncycpO1xuXHRcdGNvbnN0IGRlZmF1bHRFZGl0VGFncyA9IFtdO1xuXHRcdGNvbnN0IGVkaXRUYWdzID0gY3VzdG9tRWRpdFRhZ3M/Lmxlbmd0aCA/IGN1c3RvbUVkaXRUYWdzIDogZGVmYXVsdEVkaXRUYWdzO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lcik7XG5cdFx0Tm90aWZpY2F0aW9uLmVtcHR5KCk7XG5cblx0XHRpZiAoaXNFZGl0SGlzdG9yeVJldmlzaW9uKSB7XG5cdFx0XHROb3RpZmljYXRpb24ud2FybmluZyhpMThuLnRyYW5zbGF0ZSgnaGlzdG9yeV9lZGl0X3dhcm5pbmcnKSk7XG5cdFx0fVxuXG5cdFx0Y29uc3Qgc2hvdWxkU2hvd0NyZWF0ZVBhZ2VUaXAgPSBpc090aGVyUGFnZSA/ICFyZXZpc2lvbklkIDogaXNDdXJyZW50UGFnZUVtcHR5O1xuXG5cdFx0VUkuc2hvd1F1aWNrRWRpdFBhbmVsKHtcblx0XHRcdHRpdGxlOiBgJHtpMThuLnRyYW5zbGF0ZSgncXVpY2tlZGl0X3RvcGJ0bicpfSR7XG5cdFx0XHRcdGlzRWRpdEhpc3RvcnlSZXZpc2lvbiA/IGkxOG4udHJhbnNsYXRlKCdoaXN0b3J5X2VkaXRfd2FybmluZycpIDogJydcblx0XHRcdH1gLFxuXHRcdFx0Y29udGVudDogc2hvdWxkU2hvd0NyZWF0ZVBhZ2VUaXAgPyBpMThuLnRyYW5zbGF0ZSgnY3JlYXRlX3BhZ2VfdGlwJykgOiBzZWN0aW9uQ29udGVudCxcblx0XHRcdHN1bW1hcnksXG5cdFx0XHRvbkJhY2s6IFVJLmhpZGVRdWlja0VkaXRQYW5lbCxcblx0XHRcdG9uUGFyc2U6ICh3aWtpVGV4dCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcGFnZS5wYXJzZVdpa2lUZXh0KHdpa2lUZXh0KTtcblx0XHRcdH0sXG5cdFx0XHRvbkVkaXQ6IGFzeW5jICh7Y29udGVudCwgc3VtbWFyeSwgaXNNaW5vckVkaXR9KSA9PiB7XG5cdFx0XHRcdGNvbnN0IGVkaXRQYXlsb2FkID0ge1xuXHRcdFx0XHRcdGNvbnRlbnQsXG5cdFx0XHRcdFx0Y29uZmlnOiB7XG5cdFx0XHRcdFx0XHRzdW1tYXJ5LFxuXHRcdFx0XHRcdFx0Li4uKHNlY3Rpb25OdW1iZXIgPT09IC0xID8ge30gOiB7c2VjdGlvbjogc2VjdGlvbk51bWJlcn0pLFxuXHRcdFx0XHRcdFx0Li4uKGVkaXRUYWdzLmxlbmd0aCA/IHt0YWdzOiBlZGl0VGFncy5qb2luKCd8Jyl9IDoge30pLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmIChpc01pbm9yRWRpdCkge1xuXHRcdFx0XHRcdGVkaXRQYXlsb2FkLmNvbmZpZy5taW5vciA9ICd0cnVlJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlZGl0UGF5bG9hZC5jb25maWcubm90bWlub3IgPSAndHJ1ZSc7XG5cdFx0XHRcdH1cblx0XHRcdFx0YXdhaXQgcGFnZS5lZGl0KGVkaXRQYXlsb2FkKTtcblx0XHRcdH0sXG5cdFx0XHRlc2NFeGl0OiBlc2NUb0V4aXQsXG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlU2ltcGxlUmVkaXJlY3RCdXR0b25DbGlja2VkID0gYXN5bmMgKCkgPT4ge1xuXHRcdFVJLnNob3dTaW1wbGVSZWRpcmVjdFBhbmVsKHtcblx0XHRcdG9uRWRpdDogYXN5bmMgKHt0aXRsZSwgZm9yY2VPdmVyd3JpdGUgPSBmYWxzZX0pID0+IHtcblx0XHRcdFx0Y29uc3QgcGFnZSA9IGF3YWl0IGdldFBhZ2Uoe3RpdGxlfSk7XG5cdFx0XHRcdGNvbnN0IGN1cnJlbnRQYWdlTmFtZSA9IENvbnN0YW50cy5jdXJyZW50UGFnZU5hbWU7XG5cdFx0XHRcdGNvbnN0IHBheWxvYWQgPSB7XG5cdFx0XHRcdFx0Y29udGVudDogYCNSRURJUkVDVCBbWyR7Y3VycmVudFBhZ2VOYW1lfV1dYCxcblx0XHRcdFx0XHRjb25maWc6IHtcblx0XHRcdFx0XHRcdHN1bW1hcnk6IGkxOG4udHJhbnNsYXRlKCdyZWRpcmVjdF9mcm9tX3N1bW1hcnknLCBbdGl0bGUsIGN1cnJlbnRQYWdlTmFtZV0pLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH07XG5cdFx0XHRcdGlmICghZm9yY2VPdmVyd3JpdGUpIHtcblx0XHRcdFx0XHRwYXlsb2FkLmNvbmZpZy5jcmVhdGVvbmx5ID0gJ3RydWUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGF3YWl0IHBhZ2UuZWRpdChwYXlsb2FkKTtcblx0XHRcdH0sXG5cdFx0XHRvblN1Y2Nlc3M6ICh7dGl0bGV9KSA9PiB7XG5cdFx0XHRcdGxvY2F0aW9uLmhyZWYgPSBDb25zdGFudHMuYXJ0aWNsZVBhdGgucmVwbGFjZSgvXFwkMS9naSwgdGl0bGUpO1xuXHRcdFx0fSxcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCBoYW5kbGVTZXR0aW5nc0J1dHRvbkNsaWNrZWQgPSBhc3luYyAoKSA9PiB7XG5cdFx0VUkuc2hvd1NldHRpbmdzUGFuZWwoe1xuXHRcdFx0b25TdWJtaXQ6ICh7c2V0dGluZ3N9KSA9PiB7XG5cdFx0XHRcdEpTT04ucGFyc2Uoc2V0dGluZ3MpO1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnV2lraXBsdXNfU2V0dGluZ3MnLCBzZXR0aW5ncyk7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZVByZWxvYWQgPSBhc3luYyAoe3NlY3Rpb25OdW1iZXJ9KSA9PiB7XG5cdFx0YXdhaXQgY3VycmVudFBhZ2UuZ2V0V2lraVRleHQoe1xuXHRcdFx0c2VjdGlvbjogc2VjdGlvbk51bWJlcixcblx0XHR9KTtcblx0fTtcblxuXHRVSS5pbnNlcnRUb3BRdWlja0VkaXRFbnRyeShoYW5kbGVRdWlja0VkaXRCdXR0b25DbGlja2VkKTtcblx0VUkuaW5zZXJ0U2VjdGlvblF1aWNrRWRpdEVudHJpZXMoaGFuZGxlUXVpY2tFZGl0QnV0dG9uQ2xpY2tlZCk7XG5cdFVJLmluc2VydExpbmtFZGl0RW50cmllcyhoYW5kbGVRdWlja0VkaXRCdXR0b25DbGlja2VkKTtcblx0VUkuaW5zZXJ0U2ltcGxlUmVkaXJlY3RCdXR0b24oaGFuZGxlU2ltcGxlUmVkaXJlY3RCdXR0b25DbGlja2VkKTtcblx0VUkuaW5zZXJ0U2V0dGluZ3NQYW5lbEJ1dHRvbihoYW5kbGVTZXR0aW5nc0J1dHRvbkNsaWNrZWQpO1xuXHRVSS5iaW5kUHJlbG9hZEV2ZW50cyhoYW5kbGVQcmVsb2FkKTtcbn0pO1xuXG5leHBvcnQge307XG4iLCAiaW1wb3J0IHtnZXRCb2R5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG52b2lkIGdldEJvZHkoKS50aGVuKCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkID0+IHtcblx0JCh3aW5kb3cpLm9uKCdyZXNpemUnLCAoKTogdm9pZCA9PiB7XG5cdFx0Y29uc3Qgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcblx0XHRjb25zdCAkd2lraXBsdXNJbnRlcmJveCA9ICRib2R5LmZpbmQoJy5XaWtpcGx1cy1JbnRlckJveCcpO1xuXHRcdGlmICgkd2lraXBsdXNJbnRlcmJveCkge1xuXHRcdFx0JHdpa2lwbHVzSW50ZXJib3guY3NzKCdtYXgtd2lkdGgnLCBgY2FsYygke3dpbmRvd1dpZHRofXB4IC0gMmVtKWApO1xuXHRcdH1cblx0fSk7XG59KTtcbiIsICJpbXBvcnQgJy4vV2lraXBsdXMubGVzcyc7XG5cbihhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdGNvbnN0IHt3Z0FjdGlvbiwgd2dJc0FydGljbGV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAod2dBY3Rpb24gIT09ICd2aWV3JyB8fCAhd2dJc0FydGljbGUpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB7J3Zpc3VhbGVkaXRvci1lbmFibGUnOiBpc1ZlRW5hYmxlfSA9IG13LnVzZXIub3B0aW9ucy5nZXQoKSBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcblxuXHRjb25zdCBsb2FkZXIgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0YXdhaXQgaW1wb3J0KCcuL21vZHVsZXMvaW5kZXgnKTtcblx0XHRhd2FpdCBpbXBvcnQoJy4vcmVzaXplJyk7XG5cdH07XG5cblx0Lyogc2VlIDxodHRwczovL2dpdGh1Yi5jb20vV2lraXBsdXMvV2lraXBsdXMvaXNzdWVzLzY1PiAqL1xuXHRpZiAoaXNWZUVuYWJsZSkge1xuXHRcdGF3YWl0IG13LmxvYWRlci51c2luZygnZXh0LnZpc3VhbEVkaXRvci5jb3JlJyk7XG5cdH1cblxuXHR2b2lkIGxvYWRlcigpO1xufSkoKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUEsNkZBQUFBLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUSxTQUFVLElBQUk7QUFDeEIsYUFBTyxNQUFNLEdBQUcsU0FBUyxRQUFRO0FBQUEsSUFDbkM7QUFHQSxJQUFBQSxRQUFPO0FBQUEsSUFFTCxNQUFNLE9BQU8sY0FBYyxZQUFZLFVBQVUsS0FDakQsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFN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QSxTQUhNL04sVUFBQTtBQUFBLGFBQUE0TyxPQUFBaEQsTUFBQSxNQUFBQyxTQUFBO0lBQUE7RUFBQSxFQUFBO0FBTU4sTUFBSTZDLFlBQVk7QUFDZixVQUFNelksR0FBRytKLE9BQU9DLE1BQU0sdUJBQXVCO0VBQzlDO0FBRUEsT0FBS0QsT0FBTztBQUNiLENBQUEsRUFBRzsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibmF2aWdhdG9yIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiU3ltYm9sIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAiZG9jdW1lbnQiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJUeXBlRXJyb3IiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIiQiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJDb25zdGFudHMiLCAiY29uc3RhbnRzX2RlZmF1bHQiLCAiaW5pdF9jb25zdGFudHMiLCAiX19lc20iLCAidmVyc2lvbiIsICJpc0FydGljbGUiLCAid2luZG93IiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY3VycmVudFBhZ2VOYW1lIiwgInJlcGxhY2UiLCAiYXJ0aWNsZUlkIiwgInJldmlzaW9uSWQiLCAibGF0ZXN0UmV2aXNpb25JZCIsICJhcnRpY2xlUGF0aCIsICJzY3JpcHRQYXRoIiwgImFjdGlvbiIsICJza2luIiwgInVzZXJHcm91cHMiLCAid2lraUlkIiwgInVzZXJBZ2VudCIsICJjb25jYXQiLCAiUmVxdWVzdHMiLCAicmVxdWVzdHNfZGVmYXVsdCIsICJpbml0X3JlcXVlc3RzIiwgImJhc2UiLCAibG9jYXRpb24iLCAicHJvdG9jb2wiLCAiaG9zdCIsICJxdWVyeSIsICJfYXN5bmNUb0dlbmVyYXRvciIsICJ1cmwiLCAiVVJMIiwgIl9pIiwgIl9PYmplY3Qka2V5cyIsICJPYmplY3QiLCAia2V5cyIsICJsZW5ndGgiLCAia2V5IiwgInNlYXJjaFBhcmFtcyIsICJhcHBlbmQiLCAicmVzcG9uc2UiLCAiZmV0Y2giLCAiY3JlZGVudGlhbHMiLCAiaGVhZGVycyIsICJqc29uIiwgInBvc3QiLCAicGF5bG9hZCIsICJmb3JtIiwgIkZvcm1EYXRhIiwgIl9pMiIsICJfT2JqZWN0JGVudHJpZXMiLCAiZW50cmllcyIsICJ2YWx1ZSIsICJtZXRob2QiLCAiYm9keSIsICJJMThuIiwgImkxOG5fZGVmYXVsdCIsICJpbml0X2kxOG4iLCAibGFuZ3VhZ2UiLCAiaTE4bkRhdGEiLCAic2Vzc2lvblVwZGF0ZUxvZyIsICJjb25zdHJ1Y3RvciIsICJKU09OIiwgInBhcnNlIiwgImxvY2FsU3RvcmFnZSIsICJuYXZpZ2F0b3IiLCAidG9Mb3dlckNhc2UiLCAiYnJvd3Nlckxhbmd1YWdlIiwgImkxOG5DYWNoZSIsICJnZXRJdGVtIiwgIl9pMyIsICJfT2JqZWN0JGtleXMyIiwgInNldEl0ZW0iLCAidHJhbnNsYXRlIiwgInBsYWNlaG9sZGVycyIsICJyZXN1bHQiLCAibG9hZExhbmd1YWdlIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJfc3RlcCIsICJzIiwgIm4iLCAiZG9uZSIsICJpbmRleCIsICJwbGFjZWhvbGRlciIsICJlcnIiLCAiZSIsICJmIiwgIl90aGlzIiwgImluY2x1ZGVzIiwgIm5vd1ZlcnNpb24iLCAicHVzaCIsICJfX3ZlcnNpb24iLCAiY29uc29sZSIsICJpbmZvIiwgInN0cmluZ2lmeSIsICJXaWtpcGx1c0Vycm9yIiwgIkxvZyIsICJsb2dfZGVmYXVsdCIsICJpbml0X2xvZyIsICJFcnJvciIsICJtZXNzYWdlIiwgImNvZGUiLCAiZGVidWciLCAiZXJyb3IiLCAiZXJyb3JDb2RlIiwgInBheWxvYWRzIiwgInRlbXBsYXRlIiwgIl9pdGVyYXRvcjIiLCAiX3N0ZXAyIiwgImkiLCAidiIsICJSZWdFeHAiLCAiV2lraSIsICJ3aWtpX2RlZmF1bHQiLCAiaW5pdF93aWtpIiwgInBhZ2VJbmZvQ2FjaGUiLCAiZ2V0RWRpdFRva2VuIiwgIm1ldGEiLCAiZm9ybWF0IiwgInRva2VucyIsICJjc3JmdG9rZW4iLCAiZ2V0UGFnZUluZm8iLCAidGl0bGUiLCAiX3RoaXMyIiwgInBhcmFtcyIsICJwcm9wIiwgInJ2cHJvcCIsICJyZXZpZHMiLCAidGltZXN0YW1wIiwgInJldmlkIiwgInRpdGxlcyIsICJwYWdlcyIsICJwYWdlSW5mbyIsICJyZXZpc2lvbnMiLCAiZ2V0V2lraVRleHQiLCAic2VjdGlvbiIsICJydnNlY3Rpb24iLCAicGFyc2VXaWtpVGV4dCIsICJ3aWtpdGV4dCIsICJ0ZXh0IiwgInBzdCIsICJlZGl0IiwgImNvbnRlbnQiLCAiZWRpdFRva2VuIiwgImFkZGl0aW9uYWxDb25maWciLCAidG9rZW4iLCAiYmFzZXRpbWVzdGFtcCIsICJ3YXJuaW5nIiwgImdldExhdGVzdFJldmlzaW9uSWRGb3JQYWdlIiwgIl90aGlzMyIsICJQYWdlIiwgInBhZ2VfZGVmYXVsdCIsICJpbml0X3BhZ2UiLCAiaW5pdGVkIiwgImlzTmV3UGFnZSIsICJzZWN0aW9uQ2FjaGUiLCAiaW5pdCIsICJfdGhpczQiLCAicHJvbWlzZUFyciIsICJnZXRUaW1lc3RhbXAiLCAiUHJvbWlzZSIsICJhbGwiLCAiX3RoaXM1IiwgImxvYWRlciIsICJ1c2luZyIsICJ1c2VyIiwgIl90aGlzNiIsICJfdGhpczciLCAic2VjIiwgIndpa2lUZXh0IiwgIl90aGlzOCIsICJfdGhpczkiLCAiY3JlYXRlb25seSIsICJOb3RpZmljYXRpb24iLCAibm90aWZpY2F0aW9uX2RlZmF1bHQiLCAiaW5pdF9ub3RpZmljYXRpb24iLCAiJCIsICJkaXNwbGF5IiwgInR5cGUiLCAiY2FsbGJhY2siLCAiYWRkQ2xhc3MiLCAiZmluZCIsICJsYXN0IiwgImZhZGVJbiIsICJiaW5kIiwgImNsZWFyIiwgInNlbGYiLCAib24iLCAic2xpZGVMZWZ0IiwgInN1Y2Nlc3MiLCAiY2hpbGRyZW4iLCAiZmlyc3QiLCAiZmFkZU91dCIsICJyZW1vdmUiLCAic2V0VGltZW91dCIsICJlbXB0eSIsICJlYWNoIiwgImVsZSIsICJkZWxheSIsICJzcGVlZCIsICJjc3MiLCAiYW5pbWF0ZSIsICJsZWZ0IiwgInNsZWVwIiwgInNsZWVwX2RlZmF1bHQiLCAiaW5pdF9zbGVlcCIsICJ0aW1lIiwgInJlc29sdmUiLCAicGFyc2VRdWVyeSIsICJyZWciLCAibWF0Y2giLCAiZXhlYyIsICJkZWNvZGVVUklDb21wb25lbnQiLCAiaW5pdF9oZWxwZXJzIiwgIlVJIiwgInVpX2RlZmF1bHQiLCAiaW5pdF91aSIsICJxdWlja0VkaXRQYW5lbFZpc2libGUiLCAic2Nyb2xsVG9wIiwgImNyZWF0ZURpYWxvZ0JveCIsICJ3aWR0aCIsICJjbGllbnRXaWR0aCIsICJpbm5lcldpZHRoIiwgImNsaWVudEhlaWdodCIsICJpbm5lckhlaWdodCIsICJkaWFsb2dXaWR0aCIsICJNYXRoIiwgIm1pbiIsICJkaWFsb2dCb3giLCAidG9wIiwgImRvY3VtZW50IiwgImh0bWwiLCAicGFyZW50IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAib25iZWZvcmV1bmxvYWQiLCAiYmluZERyYWdnaW5nIiwgImVsZW1lbnQiLCAibW91c2Vkb3duIiwgImJhc2VYIiwgImNsaWVudFgiLCAiYmFzZVkiLCAiY2xpZW50WSIsICJiYXNlT2Zmc2V0WCIsICJvZmZzZXQiLCAiYmFzZU9mZnNldFkiLCAiZTIiLCAidW5iaW5kIiwgIm9mZiIsICJhZGRGdW5jdGlvbkJ1dHRvbiIsICJpZCIsICJidXR0b24iLCAiYXR0ciIsICJpbnNlcnRTaW1wbGVSZWRpcmVjdEJ1dHRvbiIsICJvbkNsaWNrIiwgImluc2VydFNldHRpbmdzUGFuZWxCdXR0b24iLCAiaW5zZXJ0VG9wUXVpY2tFZGl0RW50cnkiLCAidG9wQnRuIiwgInRvcEJ0bkxpbmsiLCAic2VjdGlvbk51bWJlciIsICJ0YXJnZXRQYWdlTmFtZSIsICJhZnRlciIsICJpbnNlcnRTZWN0aW9uUXVpY2tFZGl0RW50cmllcyIsICJzZWN0aW9uQnRuIiwgImVkaXRVUkwiLCAic2VjdGlvblRhcmdldE5hbWUiLCAiY2xvbmVOb2RlIiwgInByZXYiLCAiY2xvbmUiLCAic2VjdGlvbk5hbWUiLCAidHJpbSIsICJfc2VjdGlvbkJ0biIsICJiZWZvcmUiLCAiaW5zZXJ0TGlua0VkaXRFbnRyaWVzIiwgImhyZWYiLCAiY2xhc3MiLCAiX3BhcmFtcyRzZWN0aW9uIiwgInNob3dRdWlja0VkaXRQYW5lbCIsICJzdW1tYXJ5IiwgIm9uQmFjayIsICJvblBhcnNlIiwgIm9uRWRpdCIsICJlc2NFeGl0IiwgImhpZGVRdWlja0VkaXRQYW5lbCIsICJiYWNrQnRuIiwgImp1bXBCdG4iLCAiaW5wdXRCb3giLCAicHJldmlld0JveCIsICJzdW1tYXJ5Qm94IiwgImVkaXRTdWJtaXRCdG4iLCAicHJldmlld1N1Ym1pdEJ0biIsICJpc01pbm9yRWRpdCIsICJtYXJnaW4iLCAiZWRpdEJvZHkiLCAidmFsIiwgInByZWxvYWRCYW5uZXIiLCAidGltZXIiLCAiRGF0ZSIsICJub3ciLCAiZWRpdEJhbm5lciIsICJpcyIsICJ1c2VUaW1lIiwgInRvU3RyaW5nIiwgInJlbG9hZCIsICJsb2ciLCAiY3RybEtleSIsICJ3aGljaCIsICJzaGlmdEtleSIsICJ0cmlnZ2VyIiwgInByZXZlbnREZWZhdWx0IiwgInN0b3BQcm9wYWdhdGlvbiIsICJzaG93U2ltcGxlUmVkaXJlY3RQYW5lbCIsICJvblN1Y2Nlc3MiLCAiX3RoaXMxMCIsICJpbnB1dCIsICJhcHBseUJ0biIsICJjYW5jZWxCdG4iLCAiY29udGludWVCdG4iLCAiZGlhbG9nIiwgImZvcmNlT3ZlcndyaXRlIiwgImhpZGVTaW1wbGVSZWRpcmVjdFBhbmVsIiwgImVycm9yMiIsICJzaG93U2V0dGluZ3NQYW5lbCIsICJvblN1Ym1pdCIsICJfdGhpczExIiwgIldpa2lwbHVzX1NldHRpbmdzIiwgInNldHRpbmdzIiwgInNhdmVkQmFubmVyIiwgImhpZGVTZXR0aW5nc1BhbmVsIiwgImJpbmRQcmVsb2FkRXZlbnRzIiwgIm9uUHJlbG9hZCIsICJTZXR0aW5ncyIsICJzZXR0aW5nc19kZWZhdWx0IiwgImluaXRfc2V0dGluZ3MiLCAiZ2V0U2V0dGluZyIsICJvYmplY3QiLCAidyIsICJjdXN0b21TZXR0aW5nRnVuY3Rpb24iLCAiRnVuY3Rpb24iLCAiX2k0IiwgIl9PYmplY3Qka2V5czMiLCAia2V5MiIsICJpbml0X3dpa2lwbHVzIiwgIm1vZHVsZXNfZXhwb3J0cyIsICJpbml0X21vZHVsZXMiLCAiUGFnZXMiLCAiaXNDdXJyZW50UGFnZUVtcHR5IiwgImdldFBhZ2UiLCAiX3JlZjciLCAicmV2aXNpb25JZDIiLCAibmV3UGFnZSIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiX1dpa2lwbHVzUGFnZXMiLCAiY3VycmVudFBhZ2UiLCAiaGFuZGxlUXVpY2tFZGl0QnV0dG9uQ2xpY2tlZCIsICJfcmVmOCIsICJpc090aGVyUGFnZSIsICJwYWdlIiwgImN1c3RvbVN1bW1hcnkiLCAic2VjdGlvbkNvbnRlbnQiLCAiaXNFZGl0SGlzdG9yeVJldmlzaW9uIiwgImVzY1RvRXhpdCIsICJjdXN0b21FZGl0VGFncyIsICJkZWZhdWx0RWRpdFRhZ3MiLCAiZWRpdFRhZ3MiLCAiY2xlYXJUaW1lb3V0IiwgInNob3VsZFNob3dDcmVhdGVQYWdlVGlwIiwgIl9yZWY5IiwgInN1bW1hcnkyIiwgImVkaXRQYXlsb2FkIiwgInRhZ3MiLCAiam9pbiIsICJtaW5vciIsICJub3RtaW5vciIsICJfeDIiLCAiaGFuZGxlU2ltcGxlUmVkaXJlY3RCdXR0b25DbGlja2VkIiwgIl9yZWYxMCIsICJfcmVmMTEiLCAiY3VycmVudFBhZ2VOYW1lMiIsICJfeDMiLCAiaGFuZGxlU2V0dGluZ3NCdXR0b25DbGlja2VkIiwgIl9yZWYxMiIsICJoYW5kbGVQcmVsb2FkIiwgIl9yZWYxMyIsICJfeDQiLCAicmVzaXplX2V4cG9ydHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiaW5pdF9yZXNpemUiLCAicmVxdWlyZSIsICJnZXRCb2R5IiwgInRoZW4iLCAiJGJvZHkiLCAid2luZG93V2lkdGgiLCAiJHdpa2lwbHVzSW50ZXJib3giLCAid2dBY3Rpb24iLCAid2dJc0FydGljbGUiLCAiaXNWZUVuYWJsZSIsICJvcHRpb25zIiwgIl9yZWYxNSJdCn0K
