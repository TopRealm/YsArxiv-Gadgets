/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/User:Peacearth/DisamAssist.js}
 * @base {@link https://es.wikipedia.org/wiki/Usuario:Qwertyytrewqqwerty/DisamAssist.js}
 * @source {@link https://github.com/TopRealm/YsArchives-Gadgets/tree/master/src/DisamAssist}
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
      } catch (error2) {
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
    var navigator = globalThis2.navigator;
    var userAgent = navigator && navigator.userAgent;
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
      } catch (error2) {
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
      } catch (error2) {
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
      } catch (error2) {
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
      } catch (error2) {
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
      } catch (error2) {
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
        } catch (error2) {
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
      } catch (error2) {
        return error2 instanceof TypeError;
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/delete-property-or-throw.js
var require_delete_property_or_throw = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/internals/delete-property-or-throw.js"(exports, module2) {
    "use strict";
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module2.exports = function(O, P) {
      if (!delete O[P]) throw new $TypeError("Cannot delete property " + tryToString(P) + " of " + tryToString(O));
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

// node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/modules/es.array.unshift.js
var require_es_array_unshift = __commonJS({
  "node_modules/.pnpm/core-js@3.38.1/node_modules/core-js/modules/es.array.unshift.js"() {
    "use strict";
    var $2 = require_export();
    var toObject = require_to_object();
    var lengthOfArrayLike = require_length_of_array_like();
    var setArrayLength = require_array_set_length();
    var deletePropertyOrThrow = require_delete_property_or_throw();
    var doesNotExceedSafeInteger = require_does_not_exceed_safe_integer();
    var INCORRECT_RESULT = [].unshift(0) !== 1;
    var properErrorOnNonWritableLength = function() {
      try {
        Object.defineProperty([], "length", { writable: false }).unshift();
      } catch (error2) {
        return error2 instanceof TypeError;
      }
    };
    var FORCED = INCORRECT_RESULT || !properErrorOnNonWritableLength();
    $2({ target: "Array", proto: true, arity: 1, forced: FORCED }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      unshift: function unshift(item) {
        var O = toObject(this);
        var len = lengthOfArrayLike(O);
        var argCount = arguments.length;
        if (argCount) {
          doesNotExceedSafeInteger(len + argCount);
          var k = len;
          while (k--) {
            var to = k + argCount;
            if (k in O) O[to] = O[k];
            else deletePropertyOrThrow(O, to);
          }
          for (var j = 0; j < argCount; j++) {
            O[j] = arguments[j];
          }
        }
        return setArrayLength(O, len + argCount);
      }
    });
  }
});

// dist/DisamAssist/DisamAssist.js
require_es_array_unshift();
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
//! src/DisamAssist/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("DisamAssist/1.1");
//! src/DisamAssist/modules/config.ts
var cfg = {
  /* Categories where disambiguation pages are added (usually by a template like {{Disambiguation}} */
  disamCategories: ["全部消歧义页面"],
  /* "Canonical names" of the templates that may appear after ambiguous links and which should be removed when fixing those links */
  disamLinkTemplates: ["Disambiguation needed", "Ambiguous link", "Amblink", "Dab needed", "Disamb-link", "Disambig needed", "Disambiguate", "Dn", "Needdab"],
  /* "Canonical names" of the templates that designate intentional links to disambiguation pages */
  disamLinkIgnoreTemplates: ["R from ambiguous page", "R to disambiguation page", "R from incomplete disambiguation"],
  /* Format string for "Foo (disambiguation)"-style pages */
  disamFormat: "$1（消歧义）",
  /* Regular expression matching the titles of disambiguation pages (when they are different from the titles of the primary topics) */
  disamRegExp: "^(.*)（(消歧义|消歧義)）$",
  /* Text that will be inserted after the link if the user requests help. If the value is null, the option to request help won't be offered */
  disamNeededText: "{{dn|date={{".concat("subst:", "CURRENTMONTHNAME", "}} {{", "subst:", "CURRENTYEAR}}}}"),
  /* Content of the "Foo (disambiguation)" pages that will be created automatically when using DisamAssist from a "Foo" page */
  redirectToDisam: "#重定向 [[$1]]".concat("{{R to disambiguation page}}"),
  /* Whether intentional links to disambiguation pages can be explicitly marked by adding " (disambiguation)" */
  intentionalLinkOption: false,
  /* Namespaces that will be searched for incoming links to the disambiguation page (pages in other namespaces will be ignored) */
  targetNamespaces: [6, 10, 14, 302, 0],
  /* Number of backlinks that will be downloaded at once When using blredirect, the maximum limit is supposedly halved (see http://www.mediawiki.org/wiki/API:Backlinks) */
  backlinkLimit: 250,
  /* Number of titles we can query for at once */
  queryTitleLimit: 50,
  /* Number of characters before and after the incoming link that will be displayed */
  radius: 300,
  /* Height of the context box, in lines */
  numContextLines: 4,
  /* Number of pages that will be stored before saving, so that changes to them can be undone if need be */
  historySize: 2,
  /* Minimum time in seconds since the last change was saved before a new edit can be made. A negative value or 0 disables the cooldown. Users with the "bot" right won't be affected by the cooldown */
  editCooldown: 0,
  /* Specify how the watchlist is affected by DisamAssist edits. Possible values: "watch", "unwatch", "preferences", "nochange" */
  watch: "nochange"
};
//! src/DisamAssist/modules/messages.js
var messages = {
  start: "为链接消歧义",
  startMain: "为链至主条目的链接消歧义",
  startSame: "为链至消歧义页的链接消歧义",
  close: "关闭",
  undo: "复原",
  omit: "跳过",
  refresh: "重新整理",
  titleAsText: "其它目标",
  disamNeeded: "标示{{dn}}",
  intentionalLink: "有意链到消歧义页的链接",
  titleAsTextPrompt: "请输入新的链接目标：",
  removeLink: "去除链接",
  optionMarker: " [链接到这里]",
  targetOptionMarker: " [当前目标]",
  redirectOptionMarker: " [当前目标（重定向）]",
  pageTitleLine: '<a href="$1">$2</a>：',
  noMoreLinks: "没有需要消歧义的链接了。",
  pendingEditCounter: "已保存$1个，已编辑$2个",
  pendingEditBox: "DisamAssist正在储存您的编辑（$1）。",
  pendingEditBoxTimeEstimation: "$1；剩余时间：$2",
  pendingEditBoxLimited: "在所有更改保存前，请不要关闭页面；你可以在另一个页面编辑求闻百科，但是请勿同时使用多个DisamAssist。",
  error: "错误：$1",
  fetchRedirectsError: '获取重定向失败："$1".',
  getBacklinksError: '下载反向链接失败："$1".',
  fetchRightsError: '获取用户权限失败："$1",',
  loadPageError: '加载$1失败："$2".',
  savePageError: '保存至$1失败："$2".',
  dismissError: "Dismiss",
  pending: "DisamAssist尚有未储存的编辑。如欲储存之，请按“关闭”。",
  editInProgress: "DisamAssist正在进行编辑。若您将本分页关闭，可能会丧失您的编辑。",
  ellipsis: "……",
  notifyCharacter: "✔",
  summary: "使用[[MediaWiki:Gadget-DisamAssist.js|DisamAssist]]清理[[QW:DAB|消歧义]]链接：[[$1]]（$2）。",
  summaryChanged: "改链接至[[$1]]",
  summaryOmitted: "链接已跳过",
  summaryRemoved: "链接已移除",
  summaryIntentional: "刻意链接至消歧义页面",
  summaryHelpNeeded: "需要帮助",
  summarySeparator: "; ",
  redirectSummary: "使用[[MediaWiki:Gadget-DisamAssist.js|DisamAssist]]创建目标为[[$1]]的重定向。"
};
//! src/DisamAssist/modules/core.js
var startLink;
var ui;
var links;
var pageChanges;
var currentPageTitle;
var currentPageParameters;
var currentLink;
var possibleBacklinkDestinations;
var forceSamePage = false;
var running = false;
var choosing = false;
var canMarkIntentionalLinks = false;
var displayedPages = {};
var editCount = 0;
var editLimit;
var pendingSaves = [];
var pendingEditBox;
var pendingEditBoxText;
var lastEditMillis = 0;
var runningSaves = false;
var install = () => {
  const {
    wgAction
  } = mw.config.get();
  if (wgAction !== "view" || !isDisam()) {
    return;
  }
  $(() => {
    const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
    if (new RegExp(cfg.disamRegExp).test(getTitle())) {
      const startMainLink = $(mw.util.addPortletLink(portletId, "#", messages.startMain, "ca-disamassist-main")).on("click", startMain);
      const startSameLink = $(mw.util.addPortletLink(portletId, "#", messages.startSame, "ca-disamassist-same")).on("click", startSame);
      startLink = startMainLink.add(startSameLink);
    } else {
      startLink = $(mw.util.addPortletLink(portletId, "#", messages.start, "ca-disamassist-page")).on("click", start);
    }
  });
};
var start = () => {
  if (running) {
    return;
  }
  running = true;
  links = [];
  pageChanges = [];
  displayedPages = {};
  ensureDABExists().then((canMark) => {
    canMarkIntentionalLinks = canMark;
    createUI();
    addUnloadConfirm();
    markDisamOptions();
    checkEditLimit().then(() => {
      togglePendingEditBox(false);
      doPage();
    });
  });
};
var startSame = () => {
  forceSamePage = true;
  start();
};
var startMain = () => {
  forceSamePage = false;
  start();
};
var createUI = () => {
  const $body = $("body");
  ui = {
    display: $("<div>").addClass("disamassist-box disamassist-mainbox"),
    finishedMessage: $("<div>").text(messages.noMoreLinks).hide(),
    pageTitleLine: $("<span>").addClass("disamassist-pagetitleline"),
    pendingEditCounter: $("<div>").addClass("disamassist-editcounter"),
    context: $("<span>").addClass("disamassist-context"),
    undoButton: createButton(messages.undo, undo),
    omitButton: createButton(messages.omit, omit),
    endButton: createButton(messages.close, saveAndEnd),
    refreshButton: createButton(messages.refresh, refresh),
    titleAsTextButton: createButton(messages.titleAsText, chooseTitleFromPrompt),
    intentionalLinkButton: canMarkIntentionalLinks ? createButton(messages.intentionalLink, chooseIntentionalLink) : $("<span>"),
    disamNeededButton: cfg.disamNeededText ? createButton(messages.disamNeeded, chooseDisamNeeded) : $("<span>"),
    removeLinkButton: createButton(messages.removeLink, chooseLinkRemoval)
  };
  const top = $("<div>").addClass("disamassist-top").append([ui.pendingEditCounter, ui.finishedMessage, ui.pageTitleLine]);
  const leftButtons = $("<div>").addClass("disamassist-leftbuttons").append([ui.titleAsTextButton, ui.removeLinkButton, ui.intentionalLinkButton, ui.disamNeededButton, ui.omitButton]);
  const rightButtons = $("<div>").addClass("disamassist-rightbuttons").append([ui.undoButton, ui.refreshButton, ui.endButton]);
  const allButtons = $("<div>").addClass("disamassist-allbuttons").append([leftButtons, rightButtons]);
  ui.display.append([top, ui.context, allButtons]);
  updateEditCounter();
  toggleActionButtons(false);
  $body.find("#mw-content-text").before(ui.display);
  ui.display.hide().fadeIn();
};
var addUnloadConfirm = () => {
  $(window).on("beforeunload", () => {
    if (running && checkActualChanges()) {
      return messages.pending;
    } else if (editCount !== 0) {
      return messages.editInProgress;
    }
  });
};
var markDisamOptions = () => {
  const optionPageTitles = [];
  const optionMarkers = [];
  getDisamOptions().each((_index, element) => {
    const link = $(element);
    const title = extractPageName(link);
    const optionMarker = $("<a>").attr("href", "#").addClass("disamassist-optionmarker").text(messages.optionMarker).on("click", (ev) => {
      ev.preventDefault();
      chooseReplacement(title);
    });
    link.after(optionMarker);
    optionMarkers[optionMarkers.length] = optionMarker;
    optionPageTitles[optionPageTitles.length] = title;
  });
  const targetPage = getTargetPage();
  fetchRedirects([...optionPageTitles, ...targetPage]).done((redirects) => {
    const endTargetPage = resolveRedirect(targetPage, redirects);
    var _iterator = _createForOfIteratorHelper(optionPageTitles.entries()), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        const [ii, optionPageTitle] = _step.value;
        const endOptionTitle = resolveRedirect(optionPageTitle, redirects);
        if (isSamePage(optionPageTitle, targetPage)) {
          optionMarkers[ii].text(messages.targetOptionMarker).addClass("disamassist-curroptionmarker");
        } else if (isSamePage(endOptionTitle, endTargetPage)) {
          optionMarkers[ii].text(messages.redirectOptionMarker).addClass("disamassist-curroptionmarker");
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }).fail(error);
};
var ensureDABExists = () => {
  const deferred = new $.Deferred();
  const title = getTitle();
  if (!cfg.intentionalLinkOption) {
    deferred.resolve(false);
  } else if (new RegExp(cfg.disamRegExp).exec(title)) {
    deferred.resolve(true);
  } else {
    const disamTitle = cfg.disamFormat.replace("$1", title);
    loadPage(disamTitle).done((page) => {
      if (page.missing) {
        page.content = cfg.redirectToDisam.replace("$1", title);
        const summary = messages.redirectSummary.replace("$1", title);
        savePage(disamTitle, page, summary, false, true).done(() => {
          deferred.resolve(true);
        }).fail((description) => {
          error(description);
          deferred.resolve(false);
        });
      } else {
        deferred.resolve(true);
      }
    }).fail((description) => {
      error(description);
      deferred.resolve(false);
    });
  }
  return deferred.promise();
};
var checkEditLimit = () => {
  const deferred = new $.Deferred();
  if (cfg.editCooldown <= 0) {
    editLimit = false;
    deferred.resolve();
  } else {
    fetchRights().done((rights) => {
      editLimit = !rights.includes("bot");
    }).fail((description) => {
      error(description);
      editLimit = true;
    }).always(() => {
      deferred.resolve();
    });
  }
  return deferred.promise();
};
var doPage = () => {
  if (pageChanges.length > cfg.historySize) {
    applyChange(pageChanges.shift());
  }
  if (links.length) {
    currentPageTitle = links.shift();
    displayedPages[currentPageTitle] = true;
    toggleActionButtons(false);
    loadPage(currentPageTitle).done((data) => {
      currentPageParameters = data;
      currentLink = void 0;
      doLink();
    }).fail(error);
  } else {
    const targetPage = getTargetPage();
    getBacklinks(targetPage).done((backlinks, pageTitles) => {
      const pending = {};
      for (var _i = 0, _pendingSaves = pendingSaves; _i < _pendingSaves.length; _i++) {
        const el = _pendingSaves[_i];
        pending[el[0]] = true;
      }
      possibleBacklinkDestinations = pageTitles.filter((t) => {
        if (t === targetPage) {
          return true;
        }
        return removeDisam(t) !== targetPage;
      });
      links = backlinks.filter((el) => {
        return !displayedPages[el] && !pending[el];
      });
      if (links.length) {
        doPage();
      } else {
        updateContext();
      }
    }).fail(error);
  }
};
var doLink = () => {
  currentLink = extractLinkToPage(currentPageParameters.content, possibleBacklinkDestinations, currentLink ? currentLink.end : 0);
  if (currentLink) {
    updateContext();
  } else {
    doPage();
  }
};
var chooseReplacement = (pageTitle, extra, summary) => {
  if (choosing) {
    choosing = false;
    summary || (summary = pageTitle ? messages.summaryChanged.replace("$1", pageTitle) : messages.summaryOmitted);
    addChange(currentPageTitle, currentPageParameters, currentPageParameters.content, currentLink, summary);
    if (pageTitle && (pageTitle !== getTargetPage() || extra)) {
      currentPageParameters.content = replaceLink(currentPageParameters.content, pageTitle, currentLink, extra || "");
    }
    doLink();
  }
};
var chooseIntentionalLink = () => {
  const disamTitle = cfg.disamFormat.replace("$1", getTargetPage());
  chooseReplacement(disamTitle, "", messages.summaryIntentional);
};
var chooseTitleFromPrompt = () => {
  const title = prompt(messages.titleAsTextPrompt);
  if (title !== null) {
    chooseReplacement(title);
  }
};
var chooseLinkRemoval = () => {
  if (choosing) {
    const summary = messages.summaryRemoved;
    addChange(currentPageTitle, currentPageParameters, currentPageParameters.content, currentLink, summary);
    currentPageParameters.content = removeLink(currentPageParameters.content, currentLink);
    doLink();
  }
};
var chooseDisamNeeded = () => {
  chooseReplacement(currentLink.title, cfg.disamNeededText, messages.summaryHelpNeeded);
};
var undo = () => {
  if (pageChanges.length) {
    const lastPage = pageChanges.at(-1);
    if (currentPageTitle !== lastPage.title) {
      links.unshift(currentPageTitle);
      currentPageTitle = lastPage.title;
    }
    currentPageParameters = lastPage.page;
    currentPageParameters.content = lastPage.contentBefore.pop();
    currentLink = lastPage.links.pop();
    lastPage.summary.pop();
    if (!lastPage.contentBefore.length) {
      pageChanges.pop();
    }
    updateContext();
  }
};
var omit = () => {
  chooseReplacement();
};
var refresh = () => {
  saveAndEnd();
  start();
};
var toggleActionButtons = (enabled) => {
  const affectedButtons = [ui.omitButton, ui.titleAsTextButton, ui.removeLinkButton, ui.intentionalLinkButton, ui.disamNeededButton, ui.undoButton];
  for (var _i2 = 0, _affectedButtons = affectedButtons; _i2 < _affectedButtons.length; _i2++) {
    const button = _affectedButtons[_i2];
    button.prop("disabled", !enabled);
  }
};
var toggleFinishedMessage = (show) => {
  toggleActionButtons(!show);
  ui.undoButton.prop("disabled", !pageChanges.length);
  ui.finishedMessage.toggle(show);
  ui.pageTitleLine.toggle(!show);
  ui.context.toggle(!show);
};
var togglePendingEditBox = (show) => {
  const $body = $("body");
  if (!pendingEditBox) {
    pendingEditBox = $("<div>").addClass("disamassist-box disamassist-pendingeditbox");
    pendingEditBoxText = $("<div>");
    pendingEditBox.append(pendingEditBoxText).hide();
    if (editLimit) {
      pendingEditBox.append($("<div>").text(messages.pendingEditBoxLimited).addClass("disamassist-subtitle"));
    }
    $body.find("#mw-content-text").before(pendingEditBox);
    updateEditCounter();
  }
  if (show) {
    pendingEditBox.fadeIn();
  } else {
    pendingEditBox.fadeOut();
  }
};
var notifyCompletion = () => {
  const $body = $("body");
  const oldTitle = document.title;
  document.title = messages.notifyCharacter + document.title;
  $body.one("mousemove", () => {
    document.title = oldTitle;
  });
};
var updateContext = () => {
  updateEditCounter();
  if (currentLink) {
    ui.pageTitleLine.html(messages.pageTitleLine.replace("$1", mw.util.getUrl(currentPageTitle, {
      redirect: "no"
    })).replace("$2", mw.html.escape(currentPageTitle)));
    const context = extractContext(currentPageParameters.content, currentLink);
    ui.context.empty().append($("<span>").text(context[0])).append($("<span>").text(context[1]).addClass("disamassist-inclink")).append($("<span>").text(context[2]));
    const numLines = Math.ceil(ui.context.height() / Number.parseFloat(ui.context.css("line-height")));
    if (numLines < cfg.numContextLines) {
      ui.context.append(Array.from({
        length: cfg.numContextLines - numLines + 2
      }).join("<br>"));
    }
    toggleFinishedMessage(false);
    ui.undoButton.prop("disabled", !pageChanges.length);
    ui.removeLinkButton.prop("disabled", currentPageParameters.redirect);
    ui.intentionalLinkButton.prop("disabled", currentPageParameters.redirect);
    ui.disamNeededButton.prop("disabled", currentPageParameters.redirect || currentLink.hasDisamTemplate);
    choosing = true;
  } else {
    toggleFinishedMessage(true);
  }
};
var updateEditCounter = () => {
  if (ui.pendingEditCounter) {
    ui.pendingEditCounter.text(messages.pendingEditCounter.replace("$1", editCount).replace("$2", countActuallyChangedFullyCheckedPages()));
  }
  if (pendingEditBox) {
    if (editCount === 0 && !running) {
      togglePendingEditBox(false);
      notifyCompletion();
    }
    let textContent = editCount;
    if (editLimit) {
      textContent = messages.pendingEditBoxTimeEstimation.replace("$1", editCount).replace("$2", secondsToHHMMSS(cfg.editCooldown * editCount));
    }
    pendingEditBoxText.text(messages.pendingEditBox.replace("$1", textContent));
  }
};
var applyChange = (pageChange) => {
  if (pageChange.page.content !== pageChange.contentBefore[0]) {
    editCount++;
    const changeSummaries = pageChange.summary.join(messages.summarySeparator);
    const summary = messages.summary.replace("$1", getTargetPage()).replace("$2", changeSummaries);
    const save = editLimit ? saveWithCooldown : savePage;
    save(pageChange.title, pageChange.page, summary, true, true).always(() => {
      if (editCount > 0) {
        editCount--;
      }
      updateEditCounter();
    }).fail(error);
    updateEditCounter();
  }
};
var applyAllChanges = () => {
  var _iterator2 = _createForOfIteratorHelper(pageChanges), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      const pageChange = _step2.value;
      applyChange(pageChange);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  pageChanges = [];
};
var addChange = (pageTitle, page, oldContent, link, summary) => {
  if (!pageChanges.length || pageChanges.at(-1).title !== pageTitle) {
    pageChanges[pageChanges.length] = {
      title: pageTitle,
      page,
      contentBefore: [],
      links: [],
      summary: []
    };
  }
  const lastPageChange = pageChanges.at(-1);
  lastPageChange.contentBefore[lastPageChange.contentBefore.length] = oldContent;
  lastPageChange.links[lastPageChange.links.length] = link;
  lastPageChange.summary[lastPageChange.summary.length] = summary;
};
var checkActualChanges = () => {
  return countActualChanges() !== 0;
};
var countActualChanges = () => {
  let changeCount = 0;
  var _iterator3 = _createForOfIteratorHelper(pageChanges), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      const pageChange = _step3.value;
      if (pageChange.page.content !== pageChange.contentBefore[0]) {
        changeCount++;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  return changeCount;
};
var countActuallyChangedFullyCheckedPages = () => {
  let changeCount = countActualChanges();
  if (pageChanges.length) {
    const lastChange = pageChanges.at(-1);
    if (lastChange.title === currentPageTitle && currentLink && lastChange.page.content !== lastChange.contentBefore[0]) {
      changeCount--;
    }
  }
  return changeCount;
};
var getDisamOptions = () => {
  const $body = $("body");
  return $body.find("#mw-content-text a").filter((_index, element) => {
    return !!extractPageName($(element));
  });
};
var saveAndEnd = () => {
  applyAllChanges();
  end();
};
var end = () => {
  const $body = $("body");
  const currentToolUI = ui.display;
  choosing = false;
  running = false;
  startLink.removeClass("selected");
  $body.find(".disamassist-optionmarker").remove();
  currentToolUI.fadeOut({
    complete() {
      currentToolUI.remove();
      if (editCount) {
        togglePendingEditBox(true);
      }
    }
  });
};
var error = (errorDescription) => {
  const $body = $("body");
  const errorBox = $("<div>").addClass("disamassist-box disamassist-errorbox");
  errorBox.text(messages.error.replace("$1", errorDescription));
  errorBox.append(createButton(messages.dismissError, () => {
    errorBox.fadeOut();
  }).addClass("disamassist-errorbutton"));
  const uiIsInPlace = ui && $.contains(document.documentElement, ui.display[0]);
  const nextElement = uiIsInPlace ? ui.display : $body.find("#mw-content-text");
  nextElement.before(errorBox);
  errorBox.hide().fadeIn();
};
var replaceLink = (text, title, link, extra) => {
  let newContent;
  if (isSamePage(title, link.description)) {
    newContent = link.description;
  } else {
    newContent = "".concat(title, "|").concat(link.description);
  }
  const linkStart = text.slice(0, Math.max(0, link.start));
  const linkEnd = text.slice(Math.max(0, link.end));
  return "".concat(linkStart, "[[").concat(newContent, "]]").concat(link.afterDescription).concat(extra || "").concat(linkEnd);
};
var removeLink = (text, link) => {
  const linkStart = text.slice(0, Math.max(0, link.start));
  const linkEnd = text.slice(Math.max(0, link.end));
  return linkStart + link.description + link.afterDescription + linkEnd;
};
var extractLink = (text, lastIndex) => {
  const titleRegex = /\[\[(.*?)(?:\|(.*?))?]]/g;
  const templateRegex = /^(\w*[\s!),.:;?}]*){{\s*([^{|}]+?)\s*(?:\|[^{]*?)?}}/;
  titleRegex.lastIndex = lastIndex;
  const match = titleRegex.exec(text);
  if (match && match.index !== -1) {
    var _match$;
    let possiblyAmbiguous = true;
    let hasDisamTemplate = false;
    let _end = match.index + 4 + match[1].length + (match[2] ? 1 + match[2].length : 0);
    let afterDescription = "";
    const rest = text.slice(Math.max(0, _end));
    const templateMatch = templateRegex.exec(rest);
    if (templateMatch) {
      const templateTitle = getCanonicalTitle(templateMatch[2]);
      const {
        disamLinkTemplates
      } = cfg;
      const {
        disamLinkIgnoreTemplates
      } = cfg;
      if (disamLinkTemplates.includes(templateTitle)) {
        _end += templateMatch[0].length;
        afterDescription = templateMatch[1].replace(/\s$/, "");
        hasDisamTemplate = true;
      } else if (disamLinkIgnoreTemplates.includes(templateTitle)) {
        possiblyAmbiguous = false;
      }
    }
    return {
      start: match.index,
      end: _end,
      possiblyAmbiguous,
      hasDisamTemplate,
      title: match[1],
      description: (_match$ = match[2]) !== null && _match$ !== void 0 ? _match$ : match[1],
      afterDescription
    };
  }
};
var extractLinkToPage = (text, destinations, lastIndex) => {
  let link;
  let title;
  do {
    link = extractLink(text, lastIndex);
    if (link) {
      lastIndex = link.end;
      title = getCanonicalTitle(link.title);
    }
  } while (link && (!link.possiblyAmbiguous || !(destinations !== null && destinations !== void 0 && destinations.includes(title))));
  return link;
};
var getTargetPage = () => {
  const title = getTitle();
  return forceSamePage ? title : removeDisam(title);
};
var getTitle = () => {
  const {
    wgPageName
  } = mw.config.get();
  return wgPageName.replace(/_/g, " ");
};
var removeDisam = (title) => {
  var _match$2;
  const match = new RegExp(cfg.disamRegExp).exec(title);
  return (_match$2 = match === null || match === void 0 ? void 0 : match[1]) !== null && _match$2 !== void 0 ? _match$2 : title;
};
var isSamePage = (title1, title2) => {
  return getCanonicalTitle(title1) === getCanonicalTitle(title2);
};
var getCanonicalTitle = (title) => {
  try {
    title = new mw.Title(title).getPrefixedText();
  } catch {
  }
  return title;
};
var extractContext = (text, link) => {
  const contextStart = link.start - cfg.radius;
  const contextEnd = link.end + cfg.radius;
  let contextPrev = text.slice(contextStart, link.start);
  if (contextStart > 0) {
    contextPrev = messages.ellipsis + contextPrev;
  }
  let contextNext = text.slice(link.end, contextEnd);
  if (contextEnd < text.length) {
    contextNext += messages.ellipsis;
  }
  return [contextPrev, text.slice(link.start, link.end), contextNext];
};
var extractPageName = (link) => {
  let pageName = extractPageNameRaw(link);
  if (pageName) {
    const sectionPos = pageName.indexOf("#");
    let section = "";
    if (sectionPos !== -1) {
      section = pageName.slice(Math.max(0, sectionPos));
      pageName = pageName.slice(0, Math.max(0, sectionPos));
    }
    return getCanonicalTitle(pageName) + section;
  }
};
var extractPageNameRaw = (link) => {
  const {
    wgScript,
    wgArticlePath
  } = mw.config.get();
  if (!link.hasClass("image")) {
    const href = link.attr("href");
    if (link.hasClass("new")) {
      if (href.includes(wgScript)) {
        return mw.util.getParamValue("title", href);
      }
    } else {
      const regex = wgArticlePath.replace("$1", "(.*)");
      const regexResult = new RegExp("^".concat(regex, "$")).exec(href);
      if (Array.isArray(regexResult) && regexResult.length) {
        return decodeURIComponent(regexResult[1]);
      }
    }
  }
};
var isDisam = () => {
  const {
    wgCategories
  } = mw.config.get();
  const categories = wgCategories !== null && wgCategories !== void 0 ? wgCategories : [];
  var _iterator4 = _createForOfIteratorHelper(categories), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      const category = _step4.value;
      const {
        disamCategories
      } = cfg;
      if (disamCategories.includes(category)) {
        return true;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return false;
};
var secondsToHHMMSS = (totalSeconds) => {
  let hhmmss = "";
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor(totalSeconds % 3600 / 60);
  const seconds = Math.floor(totalSeconds % 3600 % 60);
  if (hours >= 1) {
    hhmmss = "".concat(pad(hours, "0", 2), ":");
  }
  hhmmss += "".concat(pad(minutes, "0", 2), ":").concat(pad(seconds, "0", 2));
  return hhmmss;
};
var pad = (str, z, width) => {
  str = str.toString();
  if (str.length >= width) {
    return str;
  }
  return Array.from({
    length: width - str.length + 1
  }).join(z) + str;
};
var createButton = (text, onClick) => {
  const button = $("<input>").attr({
    type: "button",
    value: text
  });
  button.addClass("disamassist-button").on("click", onClick);
  return button;
};
var resolveRedirect = (pageTitle, possibleRedirects) => {
  let appliedRedirect = true;
  const visitedPages = {};
  let currentPage = getCanonicalTitle(pageTitle);
  while (appliedRedirect) {
    appliedRedirect = false;
    var _iterator5 = _createForOfIteratorHelper(possibleRedirects), _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
        const possibleRedirect = _step5.value;
        if (possibleRedirect.from === currentPage) {
          if (visitedPages[possibleRedirect.to]) {
            return pageTitle;
          }
          visitedPages[currentPage] = true;
          appliedRedirect = true;
          currentPage = possibleRedirect.to;
        }
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }
  return currentPage;
};
var getBacklinks = (page) => {
  const deferred = new $.Deferred();
  const params = {
    action: "query",
    list: "backlinks",
    bltitle: page,
    blredirect: true,
    bllimit: cfg.backlinkLimit,
    blnamespace: cfg.targetNamespaces.join("|")
  };
  api.get(params).done(({
    query
  }) => {
    const backlinks = [];
    const linkTitles = [getCanonicalTitle(page)];
    const backlinksQuery = query.backlinks;
    var _iterator6 = _createForOfIteratorHelper(backlinksQuery), _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
        const element = _step6.value;
        backlinks[backlinks.length] = element.title;
        if (!element.redirlinks) {
          continue;
        }
        linkTitles[linkTitles.length] = element.title;
        const {
          redirlinks
        } = element;
        var _iterator7 = _createForOfIteratorHelper(redirlinks), _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
            const {
              title
            } = _step7.value;
            backlinks[backlinks.length] = title;
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    deferred.resolve(backlinks, linkTitles);
  }).fail((code) => {
    deferred.reject(messages.getBacklinksError.replace("$1", code));
  });
  return deferred.promise();
};
var fetchRedirects = (pageTitles) => {
  const deferred = new $.Deferred();
  const currentTitles = pageTitles.slice(0, cfg.queryTitleLimit);
  const restTitles = pageTitles.slice(cfg.queryTitleLimit);
  const params = {
    action: "query",
    titles: currentTitles.join("|"),
    redirects: true
  };
  api.get(params).done(({
    query
  }) => {
    var _query$redirects;
    const theseRedirects = (_query$redirects = query.redirects) !== null && _query$redirects !== void 0 ? _query$redirects : [];
    if (restTitles.length) {
      fetchRedirects(restTitles).done((redirects) => {
        deferred.resolve([...theseRedirects, ...redirects]);
      }).fail((description) => {
        deferred.reject(description);
      });
    } else {
      deferred.resolve(theseRedirects);
    }
  }).fail((code) => {
    deferred.reject(messages.fetchRedirectsError.replace("$1", code));
  });
  return deferred.promise();
};
var fetchRights = () => {
  const deferred = $.Deferred();
  const params = {
    action: "query",
    meta: "userinfo",
    uiprop: "rights"
  };
  api.get(params).done(({
    query
  }) => {
    deferred.resolve(query.userinfo.rights);
  }).fail((code) => {
    deferred.reject(messages.fetchRightsError.replace("$1", code));
  });
  return deferred.promise();
};
var loadPage = (pageTitle) => {
  const deferred = new $.Deferred();
  const params = {
    action: "query",
    format: "json",
    formatversion: "2",
    titles: pageTitle,
    prop: "revisions",
    rvprop: "timestamp|content",
    meta: "tokens",
    type: "csrf"
  };
  api.get(params).done(({
    query
  }) => {
    const [rawPage] = query.pages;
    const page = {};
    page.redirect = rawPage.redirect !== void 0;
    page.missing = rawPage.missing !== void 0;
    if (rawPage.revisions) {
      page.content = rawPage.revisions[0].content;
      page.baseTimeStamp = rawPage.revisions[0].timestamp;
    } else {
      page.content = "";
      page.baseTimeStamp = void 0;
    }
    page.startTimeStamp = rawPage.starttimestamp;
    page.editToken = query.tokens.csrftoken;
    deferred.resolve(page);
  }).fail((code) => {
    deferred.reject(messages.loadPageError.replace("$1", pageTitle).replace("$2", code));
  });
  return deferred.promise();
};
var saveWithCooldown = (...args) => {
  const deferred = new $.Deferred();
  pendingSaves[pendingSaves.length] = {
    args,
    dfd: deferred
  };
  if (!runningSaves) {
    checkAndSave();
  }
  return deferred.promise();
};
var checkAndSave = function() {
  if (!pendingSaves.length) {
    runningSaves = false;
    return;
  }
  runningSaves = true;
  const millisSinceLast = Date.now() - lastEditMillis;
  if (millisSinceLast < cfg.editCooldown * 1e3) {
    setTimeout(checkAndSave, cfg.editCooldown * 1e3 - millisSinceLast);
  } else {
    const save = pendingSaves.shift();
    savePage.apply(this, save.args).done(() => {
      checkAndSave();
      save.dfd.resolve();
    }).fail((description) => {
      checkAndSave();
      save.dfd.reject(description);
    });
    lastEditMillis = Date.now();
  }
};
var savePage = (pageTitle, {
  editToken,
  content,
  baseTimeStamp,
  startTimeStamp
}, summary, minorEdit, botEdit) => {
  const deferred = new $.Deferred();
  const params = {
    action: "edit",
    title: pageTitle,
    token: editToken,
    text: content,
    basetimestamp: baseTimeStamp,
    starttimestamp: startTimeStamp,
    summary,
    watchlist: cfg.watch,
    minor: minorEdit,
    bot: botEdit
  };
  api.post(params).done(() => {
    deferred.resolve();
  }).fail((code) => {
    deferred.reject(messages.savePageError.replace("$1", pageTitle).replace("$2", code));
  });
  return deferred.promise();
};
//! src/DisamAssist/DisamAssist.ts
$(install);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwtdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY2xhc3NvZi1yYXcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbmRleGVkLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1jYWxsYWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1pcy1wcm90b3R5cGUtb2YuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbnZpcm9ubWVudC11c2VyLWFnZW50LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zOC4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVsZXRlLXByb3BlcnR5LW9yLXRocm93LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzguMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM4LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS51bnNoaWZ0LmpzIiwgInNyYy9EaXNhbUFzc2lzdC9tb2R1bGVzL2FwaS50cyIsICJzcmMvRGlzYW1Bc3Npc3QvbW9kdWxlcy9jb25maWcudHMiLCAic3JjL0Rpc2FtQXNzaXN0L21vZHVsZXMvbWVzc2FnZXMuanMiLCAic3JjL0Rpc2FtQXNzaXN0L21vZHVsZXMvY29yZS5qcyIsICJzcmMvRGlzYW1Bc3Npc3QvRGlzYW1Bc3Npc3QudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIid1c2Ugc3RyaWN0JztcbnZhciBjaGVjayA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgJiYgaXQuTWF0aCA9PT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIGNoZWNrKHR5cGVvZiB0aGlzID09ICdvYmplY3QnICYmIHRoaXMpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIERldGVjdCBJRTgncyBpbmNvbXBsZXRlIGRlZmluZVByb3BlcnR5IGltcGxlbWVudGF0aW9uXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgMSwgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSlbMV0gIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZnVuY3Rpb24tcHJvdG90eXBlLWJpbmQgLS0gc2FmZVxuICB2YXIgdGVzdCA9IChmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0pLmJpbmQoKTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiB0eXBlb2YgdGVzdCAhPSAnZnVuY3Rpb24nIHx8IHRlc3QuaGFzT3duUHJvcGVydHkoJ3Byb3RvdHlwZScpO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBjYWxsID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGw7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX0JJTkQgPyBjYWxsLmJpbmQoY2FsbCkgOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBjYWxsLmFwcGx5KGNhbGwsIGFyZ3VtZW50cyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9CSU5EID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWJpbmQtbmF0aXZlJyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBjYWxsID0gRnVuY3Rpb25Qcm90b3R5cGUuY2FsbDtcbnZhciB1bmN1cnJ5VGhpc1dpdGhCaW5kID0gTkFUSVZFX0JJTkQgJiYgRnVuY3Rpb25Qcm90b3R5cGUuYmluZC5iaW5kKGNhbGwsIGNhbGwpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gdW5jdXJyeVRoaXNXaXRoQmluZCA6IGZ1bmN0aW9uIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYWxsLmFwcGx5KGZuLCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciB0b1N0cmluZyA9IHVuY3VycnlUaGlzKHt9LnRvU3RyaW5nKTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHN0cmluZ1NsaWNlKHRvU3RyaW5nKGl0KSwgOCwgLTEpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xudmFyIHNwbGl0ID0gdW5jdXJyeVRoaXMoJycuc3BsaXQpO1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiAhJE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoaXQpID09PSAnU3RyaW5nJyA/IHNwbGl0KGl0LCAnJykgOiAkT2JqZWN0KGl0KTtcbn0gOiAkT2JqZWN0O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHdlIGNhbid0IHVzZSBqdXN0IGBpdCA9PSBudWxsYCBzaW5jZSBvZiBgZG9jdW1lbnQuYWxsYCBzcGVjaWFsIGNhc2Vcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtSXNIVE1MRERBLWludGVybmFsLXNsb3QtYWVjXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPT09IG51bGwgfHwgaXQgPT09IHVuZGVmaW5lZDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgUmVxdWlyZU9iamVjdENvZXJjaWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlcXVpcmVvYmplY3Rjb2VyY2libGVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpc051bGxPclVuZGVmaW5lZChpdCkpIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90XG52YXIgZG9jdW1lbnRBbGwgPSB0eXBlb2YgZG9jdW1lbnQgPT0gJ29iamVjdCcgJiYgZG9jdW1lbnQuYWxsO1xuXG4vLyBgSXNDYWxsYWJsZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL25vLXR5cGVvZi11bmRlZmluZWQgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIGRvY3VtZW50QWxsID09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50QWxsICE9PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nIHx8IGFyZ3VtZW50ID09PSBkb2N1bWVudEFsbDtcbn0gOiBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PSAnZnVuY3Rpb24nO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiBpc0NhbGxhYmxlKGl0KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoYXJndW1lbnQpID8gYXJndW1lbnQgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24oZ2xvYmFsVGhpc1tuYW1lc3BhY2VdKSA6IGdsb2JhbFRoaXNbbmFtZXNwYWNlXSAmJiBnbG9iYWxUaGlzW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVuY3VycnlUaGlzKHt9LmlzUHJvdG90eXBlT2YpO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG5cbnZhciBuYXZpZ2F0b3IgPSBnbG9iYWxUaGlzLm5hdmlnYXRvcjtcbnZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudDtcblxubW9kdWxlLmV4cG9ydHMgPSB1c2VyQWdlbnQgPyBTdHJpbmcodXNlckFnZW50KSA6ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWxUaGlzLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbFRoaXMuRGVubztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucyB8fCBEZW5vICYmIERlbm8udmVyc2lvbjtcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICAvLyBpbiBvbGQgQ2hyb21lLCB2ZXJzaW9ucyBvZiBWOCBpc24ndCBWOCA9IENocm9tZSAvIDEwXG4gIC8vIGJ1dCB0aGVpciBjb3JyZWN0IHZlcnNpb25zIGFyZSBub3QgaW50ZXJlc3RpbmcgZm9yIHVzXG4gIHZlcnNpb24gPSBtYXRjaFswXSA+IDAgJiYgbWF0Y2hbMF0gPCA0ID8gMSA6ICsobWF0Y2hbMF0gKyBtYXRjaFsxXSk7XG59XG5cbi8vIEJyb3dzZXJGUyBOb2RlSlMgYHByb2Nlc3NgIHBvbHlmaWxsIGluY29ycmVjdGx5IHNldCBgLnY4YCB0byBgMC4wYFxuLy8gc28gY2hlY2sgYHVzZXJBZ2VudGAgZXZlbiBpZiBgLnY4YCBleGlzdHMsIGJ1dCAwXG5pZiAoIXZlcnNpb24gJiYgdXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gK21hdGNoWzFdO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmVyc2lvbjtcbiIsICIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Vudmlyb25tZW50LXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWxUaGlzLlN0cmluZztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHZhciBzeW1ib2wgPSBTeW1ib2woJ3N5bWJvbCBkZXRlY3Rpb24nKTtcbiAgLy8gQ2hyb21lIDM4IFN5bWJvbCBoYXMgaW5jb3JyZWN0IHRvU3RyaW5nIGNvbnZlcnNpb25cbiAgLy8gYGdldC1vd24tcHJvcGVydHktc3ltYm9sc2AgcG9seWZpbGwgc3ltYm9scyBjb252ZXJ0ZWQgdG8gb2JqZWN0IGFyZSBub3QgU3ltYm9sIGluc3RhbmNlc1xuICAvLyBuYjogRG8gbm90IGNhbGwgYFN0cmluZ2AgZGlyZWN0bHkgdG8gYXZvaWQgdGhpcyBiZWluZyBvcHRpbWl6ZWQgb3V0IHRvIGBzeW1ib2wrJydgIHdoaWNoIHdpbGwsXG4gIC8vIG9mIGNvdXJzZSwgZmFpbC5cbiAgcmV0dXJuICEkU3RyaW5nKHN5bWJvbCkgfHwgIShPYmplY3Qoc3ltYm9sKSBpbnN0YW5jZW9mIFN5bWJvbCkgfHxcbiAgICAvLyBDaHJvbWUgMzgtNDAgc3ltYm9scyBhcmUgbm90IGluaGVyaXRlZCBmcm9tIERPTSBjb2xsZWN0aW9ucyBwcm90b3R5cGVzIHRvIGluc3RhbmNlc1xuICAgICFTeW1ib2wuc2hhbSAmJiBWOF9WRVJTSU9OICYmIFY4X1ZFUlNJT04gPCA0MTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3ltYm9sLWNvbnN0cnVjdG9yLWRldGVjdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0xcbiAgJiYgIVN5bWJvbC5zaGFtXG4gICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzUHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLXByb3RvdHlwZS1vZicpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVTRV9TWU1CT0xfQVNfVUlEID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59IDogZnVuY3Rpb24gKGl0KSB7XG4gIHZhciAkU3ltYm9sID0gZ2V0QnVpbHRJbignU3ltYm9sJyk7XG4gIHJldHVybiBpc0NhbGxhYmxlKCRTeW1ib2wpICYmIGlzUHJvdG90eXBlT2YoJFN5bWJvbC5wcm90b3R5cGUsICRPYmplY3QoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICRTdHJpbmcoYXJndW1lbnQpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiAnT2JqZWN0JztcbiAgfVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IElzQ2FsbGFibGUoYXJndW1lbnQpIGlzIHRydWVgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNDYWxsYWJsZShhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IodHJ5VG9TdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgYUNhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtY2FsbGFibGUnKTtcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG4vLyBgR2V0TWV0aG9kYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChWLCBQKSB7XG4gIHZhciBmdW5jID0gVltQXTtcbiAgcmV0dXJuIGlzTnVsbE9yVW5kZWZpbmVkKGZ1bmMpID8gdW5kZWZpbmVkIDogYUNhbGxhYmxlKGZ1bmMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYE9yZGluYXJ5VG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgcHJlZikge1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKHByZWYgPT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChpc0NhbGxhYmxlKGZuID0gaW5wdXQudmFsdWVPZikgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmIChwcmVmICE9PSAnc3RyaW5nJyAmJiBpc0NhbGxhYmxlKGZuID0gaW5wdXQudG9TdHJpbmcpICYmICFpc09iamVjdCh2YWwgPSBjYWxsKGZuLCBpbnB1dCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGRlZmluZVByb3BlcnR5KGdsb2JhbFRoaXMsIGtleSwgeyB2YWx1ZTogdmFsdWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsVGhpc1trZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzW1NIQVJFRF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoU0hBUkVELCB7fSk7XG5cbihzdG9yZS52ZXJzaW9ucyB8fCAoc3RvcmUudmVyc2lvbnMgPSBbXSkpLnB1c2goe1xuICB2ZXJzaW9uOiAnMy4zOC4xJyxcbiAgbW9kZTogSVNfUFVSRSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE0LTIwMjQgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknLFxuICBsaWNlbnNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvYmxvYi92My4zOC4xL0xJQ0VOU0UnLFxuICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcydcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlIHx8IHt9KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbnZhciAkT2JqZWN0ID0gT2JqZWN0O1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuICRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IHVuY3VycnlUaGlzKHt9Lmhhc093blByb3BlcnR5KTtcblxuLy8gYEhhc093blByb3BlcnR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaGFzb3ducHJvcGVydHlcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaGFzb3duIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0Lmhhc093biB8fCBmdW5jdGlvbiBoYXNPd24oaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkodG9PYmplY3QoaXQpLCBrZXkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG5cbnZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcygxLjAudG9TdHJpbmcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyB0b1N0cmluZygrK2lkICsgcG9zdGZpeCwgMzYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24nKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgU3ltYm9sID0gZ2xvYmFsVGhpcy5TeW1ib2w7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbFsnZm9yJ10gfHwgU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBoYXNPd24oU3ltYm9sLCBuYW1lKVxuICAgICAgPyBTeW1ib2xbbmFtZV1cbiAgICAgIDogY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbFRoaXMuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQnKTtcblxuLy8gVGhhbmtzIHRvIElFOCBmb3IgaXRzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3JlYXRlRWxlbWVudCgnZGl2JyksICdhJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfVxuICB9KS5hICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKGhhc093bihPLCBQKSkgcmV0dXJuIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcighY2FsbChwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLCBPLCBQKSwgT1tQXSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIFY4IH4gQ2hyb21lIDM2LVxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzMzNFxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdwcm90b3R5cGUnLCB7XG4gICAgdmFsdWU6IDQyLFxuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KS5wcm90b3R5cGUgIT09IDQyO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgJFN0cmluZyA9IFN0cmluZztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgQXNzZXJ0OiBUeXBlKGFyZ3VtZW50KSBpcyBPYmplY3RgXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICBpZiAoaXNPYmplY3QoYXJndW1lbnQpKSByZXR1cm4gYXJndW1lbnQ7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKCRTdHJpbmcoYXJndW1lbnQpICsgJyBpcyBub3QgYW4gb2JqZWN0Jyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG52YXIgVjhfUFJPVE9UWVBFX0RFRklORV9CVUcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdjgtcHJvdG90eXBlLWRlZmluZS1idWcnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByb3BlcnR5LWtleScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBFTlVNRVJBQkxFID0gJ2VudW1lcmFibGUnO1xudmFyIENPTkZJR1VSQUJMRSA9ICdjb25maWd1cmFibGUnO1xudmFyIFdSSVRBQkxFID0gJ3dyaXRhYmxlJztcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5kZWZpbmVwcm9wZXJ0eVxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA/IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKHR5cGVvZiBPID09PSAnZnVuY3Rpb24nICYmIFAgPT09ICdwcm90b3R5cGUnICYmICd2YWx1ZScgaW4gQXR0cmlidXRlcyAmJiBXUklUQUJMRSBpbiBBdHRyaWJ1dGVzICYmICFBdHRyaWJ1dGVzW1dSSVRBQkxFXSkge1xuICAgIHZhciBjdXJyZW50ID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgICBpZiAoY3VycmVudCAmJiBjdXJyZW50W1dSSVRBQkxFXSkge1xuICAgICAgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgICBBdHRyaWJ1dGVzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IENPTkZJR1VSQUJMRSBpbiBBdHRyaWJ1dGVzID8gQXR0cmlidXRlc1tDT05GSUdVUkFCTEVdIDogY3VycmVudFtDT05GSUdVUkFCTEVdLFxuICAgICAgICBlbnVtZXJhYmxlOiBFTlVNRVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0VOVU1FUkFCTEVdIDogY3VycmVudFtFTlVNRVJBQkxFXSxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICB9O1xuICAgIH1cbiAgfSByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xufSA6ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1Byb3BlcnR5S2V5KFApO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHlNb2R1bGUuZihvYmplY3QsIGtleSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0RGVzY3JpcHRvciA9IERFU0NSSVBUT1JTICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBFWElTVFMgPSBoYXNPd24oRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJyk7XG4vLyBhZGRpdGlvbmFsIHByb3RlY3Rpb24gZnJvbSBtaW5pZmllZCAvIG1hbmdsZWQgLyBkcm9wcGVkIGZ1bmN0aW9uIG5hbWVzXG52YXIgUFJPUEVSID0gRVhJU1RTICYmIChmdW5jdGlvbiBzb21ldGhpbmcoKSB7IC8qIGVtcHR5ICovIH0pLm5hbWUgPT09ICdzb21ldGhpbmcnO1xudmFyIENPTkZJR1VSQUJMRSA9IEVYSVNUUyAmJiAoIURFU0NSSVBUT1JTIHx8IChERVNDUklQVE9SUyAmJiBnZXREZXNjcmlwdG9yKEZ1bmN0aW9uUHJvdG90eXBlLCAnbmFtZScpLmNvbmZpZ3VyYWJsZSkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgRVhJU1RTOiBFWElTVFMsXG4gIFBST1BFUjogUFJPUEVSLFxuICBDT05GSUdVUkFCTEU6IENPTkZJR1VSQUJMRVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG52YXIgZnVuY3Rpb25Ub1N0cmluZyA9IHVuY3VycnlUaGlzKEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGBjb3JlLWpzQDMuNC4xLTMuNC40YCwgc28gd2UgY2FuJ3QgdXNlIGBzaGFyZWRgIGhlbHBlclxuaWYgKCFpc0NhbGxhYmxlKHN0b3JlLmluc3BlY3RTb3VyY2UpKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZyhpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWxUaGlzLldlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNDYWxsYWJsZShXZWFrTWFwKSAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoU3RyaW5nKFdlYWtNYXApKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgTkFUSVZFX1dFQUtfTUFQID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlYWstbWFwLWJhc2ljLWRldGVjdGlvbicpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCA9ICdPYmplY3QgYWxyZWFkeSBpbml0aWFsaXplZCc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsVGhpcy5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbFRoaXMuV2Vha01hcDtcbnZhciBzZXQsIGdldCwgaGFzO1xuXG52YXIgZW5mb3JjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaGFzKGl0KSA/IGdldChpdCkgOiBzZXQoaXQsIHt9KTtcbn07XG5cbnZhciBnZXR0ZXJGb3IgPSBmdW5jdGlvbiAoVFlQRSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIHN0YXRlO1xuICAgIGlmICghaXNPYmplY3QoaXQpIHx8IChzdGF0ZSA9IGdldChpdCkpLnR5cGUgIT09IFRZUEUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQIHx8IHNoYXJlZC5zdGF0ZSkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHN0b3JlLmdldCA9IHN0b3JlLmdldDtcbiAgc3RvcmUuaGFzID0gc3RvcmUuaGFzO1xuICBzdG9yZS5zZXQgPSBzdG9yZS5zZXQ7XG4gIC8qIGVzbGludC1lbmFibGUgbm8tc2VsZi1hc3NpZ24gLS0gcHJvdG90eXBlIG1ldGhvZHMgcHJvdGVjdGlvbiAqL1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgaWYgKHN0b3JlLmhhcyhpdCkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIHN0b3JlLnNldChpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmdldChpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBzdG9yZS5oYXMoaXQpO1xuICB9O1xufSBlbHNlIHtcbiAgdmFyIFNUQVRFID0gc2hhcmVkS2V5KCdzdGF0ZScpO1xuICBoaWRkZW5LZXlzW1NUQVRFXSA9IHRydWU7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoaGFzT3duKGl0LCBTVEFURSkpIHRocm93IG5ldyBUeXBlRXJyb3IoT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQpO1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaGFzT3duKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIENPTkZJR1VSQUJMRV9GVU5DVElPTl9OQU1FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLW5hbWUnKS5DT05GSUdVUkFCTEU7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGVuZm9yY2VJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5lbmZvcmNlO1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciAkU3RyaW5nID0gU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG52YXIgcmVwbGFjZSA9IHVuY3VycnlUaGlzKCcnLnJlcGxhY2UpO1xudmFyIGpvaW4gPSB1bmN1cnJ5VGhpcyhbXS5qb2luKTtcblxudmFyIENPTkZJR1VSQUJMRV9MRU5HVEggPSBERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9LCAnbGVuZ3RoJywgeyB2YWx1ZTogOCB9KS5sZW5ndGggIT09IDg7XG59KTtcblxudmFyIFRFTVBMQVRFID0gU3RyaW5nKFN0cmluZykuc3BsaXQoJ1N0cmluZycpO1xuXG52YXIgbWFrZUJ1aWx0SW4gPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSwgbmFtZSwgb3B0aW9ucykge1xuICBpZiAoc3RyaW5nU2xpY2UoJFN0cmluZyhuYW1lKSwgMCwgNykgPT09ICdTeW1ib2woJykge1xuICAgIG5hbWUgPSAnWycgKyByZXBsYWNlKCRTdHJpbmcobmFtZSksIC9eU3ltYm9sXFwoKFteKV0qKVxcKS4qJC8sICckMScpICsgJ10nO1xuICB9XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2V0dGVyKSBuYW1lID0gJ2dldCAnICsgbmFtZTtcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5zZXR0ZXIpIG5hbWUgPSAnc2V0ICcgKyBuYW1lO1xuICBpZiAoIWhhc093bih2YWx1ZSwgJ25hbWUnKSB8fCAoQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgJiYgdmFsdWUubmFtZSAhPT0gbmFtZSkpIHtcbiAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHZhbHVlLm5hbWUgPSBuYW1lO1xuICB9XG4gIGlmIChDT05GSUdVUkFCTEVfTEVOR1RIICYmIG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdhcml0eScpICYmIHZhbHVlLmxlbmd0aCAhPT0gb3B0aW9ucy5hcml0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KHZhbHVlLCAnbGVuZ3RoJywgeyB2YWx1ZTogb3B0aW9ucy5hcml0eSB9KTtcbiAgfVxuICB0cnkge1xuICAgIGlmIChvcHRpb25zICYmIGhhc093bihvcHRpb25zLCAnY29uc3RydWN0b3InKSAmJiBvcHRpb25zLmNvbnN0cnVjdG9yKSB7XG4gICAgICBpZiAoREVTQ1JJUFRPUlMpIGRlZmluZVByb3BlcnR5KHZhbHVlLCAncHJvdG90eXBlJywgeyB3cml0YWJsZTogZmFsc2UgfSk7XG4gICAgLy8gaW4gVjggfiBDaHJvbWUgNTMsIHByb3RvdHlwZXMgb2Ygc29tZSBtZXRob2RzLCBsaWtlIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCwgYXJlIG5vbi13cml0YWJsZVxuICAgIH0gZWxzZSBpZiAodmFsdWUucHJvdG90eXBlKSB2YWx1ZS5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgdmFyIHN0YXRlID0gZW5mb3JjZUludGVybmFsU3RhdGUodmFsdWUpO1xuICBpZiAoIWhhc093bihzdGF0ZSwgJ3NvdXJjZScpKSB7XG4gICAgc3RhdGUuc291cmNlID0gam9pbihURU1QTEFURSwgdHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgPyBuYW1lIDogJycpO1xuICB9IHJldHVybiB2YWx1ZTtcbn07XG5cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dGVuZC1uYXRpdmUgLS0gcmVxdWlyZWRcbkZ1bmN0aW9uLnByb3RvdHlwZS50b1N0cmluZyA9IG1ha2VCdWlsdEluKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gaXNDYWxsYWJsZSh0aGlzKSAmJiBnZXRJbnRlcm5hbFN0YXRlKHRoaXMpLnNvdXJjZSB8fCBpbnNwZWN0U291cmNlKHRoaXMpO1xufSwgJ3RvU3RyaW5nJyk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgbWFrZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWFrZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWx1ZSwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgdmFyIHNpbXBsZSA9IG9wdGlvbnMuZW51bWVyYWJsZTtcbiAgdmFyIG5hbWUgPSBvcHRpb25zLm5hbWUgIT09IHVuZGVmaW5lZCA/IG9wdGlvbnMubmFtZSA6IGtleTtcbiAgaWYgKGlzQ2FsbGFibGUodmFsdWUpKSBtYWtlQnVpbHRJbih2YWx1ZSwgbmFtZSwgb3B0aW9ucyk7XG4gIGlmIChvcHRpb25zLmdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lR2xvYmFsUHJvcGVydHkoa2V5LCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghb3B0aW9ucy51bnNhZmUpIGRlbGV0ZSBPW2tleV07XG4gICAgICBlbHNlIGlmIChPW2tleV0pIHNpbXBsZSA9IHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2UgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiAhb3B0aW9ucy5ub25Db25maWd1cmFibGUsXG4gICAgICB3cml0YWJsZTogIW9wdGlvbnMubm9uV3JpdGFibGVcbiAgICB9KTtcbiAgfSByZXR1cm4gTztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4vLyBgTWF0aC50cnVuY2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hdGgudHJ1bmNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1tYXRoLXRydW5jIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gTWF0aC50cnVuYyB8fCBmdW5jdGlvbiB0cnVuYyh4KSB7XG4gIHZhciBuID0gK3g7XG4gIHJldHVybiAobiA+IDAgPyBmbG9vciA6IGNlaWwpKG4pO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ1bmMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbWF0aC10cnVuYycpO1xuXG4vLyBgVG9JbnRlZ2VyT3JJbmZpbml0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlcm9yaW5maW5pdHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHZhciBudW1iZXIgPSArYXJndW1lbnQ7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gIHJldHVybiBudW1iZXIgIT09IG51bWJlciB8fCBudW1iZXIgPT09IDAgPyAwIDogdHJ1bmMobnVtYmVyKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIEhlbHBlciBmb3IgYSBwb3B1bGFyIHJlcGVhdGluZyBjYXNlIG9mIHRoZSBzcGVjOlxuLy8gTGV0IGludGVnZXIgYmUgPyBUb0ludGVnZXIoaW5kZXgpLlxuLy8gSWYgaW50ZWdlciA8IDAsIGxldCByZXN1bHQgYmUgbWF4KChsZW5ndGggKyBpbnRlZ2VyKSwgMCk7IGVsc2UgbGV0IHJlc3VsdCBiZSBtaW4oaW50ZWdlciwgbGVuZ3RoKS5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgdmFyIGludGVnZXIgPSB0b0ludGVnZXJPckluZmluaXR5KGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXJPckluZmluaXR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXItb3ItaW5maW5pdHknKTtcblxudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgVG9MZW5ndGhgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2xlbmd0aFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGxlbiA9IHRvSW50ZWdlck9ySW5maW5pdHkoYXJndW1lbnQpO1xuICByZXR1cm4gbGVuID4gMCA/IG1pbihsZW4sIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG5cbi8vIGBMZW5ndGhPZkFycmF5TGlrZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWxlbmd0aG9mYXJyYXlsaWtlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHRvTGVuZ3RoKG9iai5sZW5ndGgpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG52YXIgbGVuZ3RoT2ZBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS57IGluZGV4T2YsIGluY2x1ZGVzIH1gIG1ldGhvZHMgaW1wbGVtZW50YXRpb25cbnZhciBjcmVhdGVNZXRob2QgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT09IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT09IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICBpZiAoKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pICYmIE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5jbHVkZXNgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogY3JlYXRlTWV0aG9kKHRydWUpLFxuICAvLyBgQXJyYXkucHJvdG90eXBlLmluZGV4T2ZgIG1ldGhvZFxuICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5pbmRleG9mXG4gIGluZGV4T2Y6IGNyZWF0ZU1ldGhvZChmYWxzZSlcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pbmNsdWRlcycpLmluZGV4T2Y7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSAhaGFzT3duKGhpZGRlbktleXMsIGtleSkgJiYgaGFzT3duKE8sIGtleSkgJiYgcHVzaChyZXN1bHQsIGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXNPd24oTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcHVzaChyZXN1bHQsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxudmFyIGNvbmNhdCA9IHVuY3VycnlUaGlzKFtdLmNvbmNhdCk7XG5cbi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignUmVmbGVjdCcsICdvd25LZXlzJykgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCkge1xuICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZihhbk9iamVjdChpdCkpO1xuICB2YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlLmY7XG4gIHJldHVybiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPyBjb25jYXQoa2V5cywgZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlLCBleGNlcHRpb25zKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzT3duKHRhcmdldCwga2V5KSAmJiAhKGV4Y2VwdGlvbnMgJiYgaGFzT3duKGV4Y2VwdGlvbnMsIGtleSkpKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgfVxuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxudmFyIHJlcGxhY2VtZW50ID0gLyN8XFwucHJvdG90eXBlXFwuLztcblxudmFyIGlzRm9yY2VkID0gZnVuY3Rpb24gKGZlYXR1cmUsIGRldGVjdGlvbikge1xuICB2YXIgdmFsdWUgPSBkYXRhW25vcm1hbGl6ZShmZWF0dXJlKV07XG4gIHJldHVybiB2YWx1ZSA9PT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IGlzQ2FsbGFibGUoZGV0ZWN0aW9uKSA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBkZWZpbmVCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1idWlsdC1pbicpO1xudmFyIGRlZmluZUdsb2JhbFByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1nbG9iYWwtcHJvcGVydHknKTtcbnZhciBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NvcHktY29uc3RydWN0b3ItcHJvcGVydGllcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xuXG4vKlxuICBvcHRpb25zLnRhcmdldCAgICAgICAgIC0gbmFtZSBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBvcHRpb25zLmdsb2JhbCAgICAgICAgIC0gdGFyZ2V0IGlzIHRoZSBnbG9iYWwgb2JqZWN0XG4gIG9wdGlvbnMuc3RhdCAgICAgICAgICAgLSBleHBvcnQgYXMgc3RhdGljIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucHJvdG8gICAgICAgICAgLSBleHBvcnQgYXMgcHJvdG90eXBlIG1ldGhvZHMgb2YgdGFyZ2V0XG4gIG9wdGlvbnMucmVhbCAgICAgICAgICAgLSByZWFsIHByb3RvdHlwZSBtZXRob2QgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLmZvcmNlZCAgICAgICAgIC0gZXhwb3J0IGV2ZW4gaWYgdGhlIG5hdGl2ZSBmZWF0dXJlIGlzIGF2YWlsYWJsZVxuICBvcHRpb25zLmJpbmQgICAgICAgICAgIC0gYmluZCBtZXRob2RzIHRvIHRoZSB0YXJnZXQsIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy53cmFwICAgICAgICAgICAtIHdyYXAgY29uc3RydWN0b3JzIHRvIHByZXZlbnRpbmcgZ2xvYmFsIHBvbGx1dGlvbiwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLnVuc2FmZSAgICAgICAgIC0gdXNlIHRoZSBzaW1wbGUgYXNzaWdubWVudCBvZiBwcm9wZXJ0eSBpbnN0ZWFkIG9mIGRlbGV0ZSArIGRlZmluZVByb3BlcnR5XG4gIG9wdGlvbnMuc2hhbSAgICAgICAgICAgLSBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gIG9wdGlvbnMuZW51bWVyYWJsZSAgICAgLSBleHBvcnQgYXMgZW51bWVyYWJsZSBwcm9wZXJ0eVxuICBvcHRpb25zLmRvbnRDYWxsR2V0U2V0IC0gcHJldmVudCBjYWxsaW5nIGEgZ2V0dGVyIG9uIHRhcmdldFxuICBvcHRpb25zLm5hbWUgICAgICAgICAgIC0gdGhlIC5uYW1lIG9mIHRoZSBmdW5jdGlvbiBpZiBpdCBkb2VzIG5vdCBtYXRjaCB0aGUga2V5XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpcztcbiAgfSBlbHNlIGlmIChTVEFUSUMpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWxUaGlzW1RBUkdFVF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsVGhpc1tUQVJHRVRdICYmIGdsb2JhbFRoaXNbVEFSR0VUXS5wcm90b3R5cGU7XG4gIH1cbiAgaWYgKHRhcmdldCkgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgc291cmNlUHJvcGVydHkgPSBzb3VyY2Vba2V5XTtcbiAgICBpZiAob3B0aW9ucy5kb250Q2FsbEdldFNldCkge1xuICAgICAgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSk7XG4gICAgICB0YXJnZXRQcm9wZXJ0eSA9IGRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci52YWx1ZTtcbiAgICB9IGVsc2UgdGFyZ2V0UHJvcGVydHkgPSB0YXJnZXRba2V5XTtcbiAgICBGT1JDRUQgPSBpc0ZvcmNlZChHTE9CQUwgPyBrZXkgOiBUQVJHRVQgKyAoU1RBVElDID8gJy4nIDogJyMnKSArIGtleSwgb3B0aW9ucy5mb3JjZWQpO1xuICAgIC8vIGNvbnRhaW5lZCBpbiB0YXJnZXRcbiAgICBpZiAoIUZPUkNFRCAmJiB0YXJnZXRQcm9wZXJ0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodHlwZW9mIHNvdXJjZVByb3BlcnR5ID09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICBkZWZpbmVCdWlsdEluKHRhcmdldCwga2V5LCBzb3VyY2VQcm9wZXJ0eSwgb3B0aW9ucyk7XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcblxuLy8gYElzQXJyYXlgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2FycmF5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktaXNhcnJheSAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmd1bWVudCkge1xuICByZXR1cm4gY2xhc3NvZihhcmd1bWVudCkgPT09ICdBcnJheSc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gU2FmYXJpIDwgMTMgZG9lcyBub3QgdGhyb3cgYW4gZXJyb3IgaW4gdGhpcyBjYXNlXG52YXIgU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID0gREVTQ1JJUFRPUlMgJiYgIWZ1bmN0aW9uICgpIHtcbiAgLy8gbWFrZXMgbm8gc2Vuc2Ugd2l0aG91dCBwcm9wZXIgc3RyaWN0IG1vZGUgc3VwcG9ydFxuICBpZiAodGhpcyAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdHJ1ZTtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS5sZW5ndGggPSAxO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBlcnJvciBpbnN0YW5jZW9mIFR5cGVFcnJvcjtcbiAgfVxufSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA/IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgaWYgKGlzQXJyYXkoTykgJiYgIWdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCAnbGVuZ3RoJykud3JpdGFibGUpIHtcbiAgICB0aHJvdyBuZXcgJFR5cGVFcnJvcignQ2Fubm90IHNldCByZWFkIG9ubHkgLmxlbmd0aCcpO1xuICB9IHJldHVybiBPLmxlbmd0aCA9IGxlbmd0aDtcbn0gOiBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIHJldHVybiBPLmxlbmd0aCA9IGxlbmd0aDtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRyeVRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RyeS10by1zdHJpbmcnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIFApIHtcbiAgaWYgKCFkZWxldGUgT1tQXSkgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBkZWxldGUgcHJvcGVydHkgJyArIHRyeVRvU3RyaW5nKFApICsgJyBvZiAnICsgdHJ5VG9TdHJpbmcoTykpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyAkVHlwZUVycm9yKCdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIHNldEFycmF5TGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNldC1sZW5ndGgnKTtcbnZhciBkZWxldGVQcm9wZXJ0eU9yVGhyb3cgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVsZXRlLXByb3BlcnR5LW9yLXRocm93Jyk7XG52YXIgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXInKTtcblxuLy8gSUU4LVxudmFyIElOQ09SUkVDVF9SRVNVTFQgPSBbXS51bnNoaWZ0KDApICE9PSAxO1xuXG4vLyBWOCB+IENocm9tZSA8IDcxIGFuZCBTYWZhcmkgPD0gMTUuNCwgRkYgPCAyMyB0aHJvd3MgSW50ZXJuYWxFcnJvclxudmFyIHByb3BlckVycm9yT25Ob25Xcml0YWJsZUxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoW10sICdsZW5ndGgnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KS51bnNoaWZ0KCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yO1xuICB9XG59O1xuXG52YXIgRk9SQ0VEID0gSU5DT1JSRUNUX1JFU1VMVCB8fCAhcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoKCk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUudW5zaGlmdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS51bnNoaWZ0XG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgYXJpdHk6IDEsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzIC0tIHJlcXVpcmVkIGZvciBgLmxlbmd0aGBcbiAgdW5zaGlmdDogZnVuY3Rpb24gdW5zaGlmdChpdGVtKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGFyZ0NvdW50ID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAoYXJnQ291bnQpIHtcbiAgICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihsZW4gKyBhcmdDb3VudCk7XG4gICAgICB2YXIgayA9IGxlbjtcbiAgICAgIHdoaWxlIChrLS0pIHtcbiAgICAgICAgdmFyIHRvID0gayArIGFyZ0NvdW50O1xuICAgICAgICBpZiAoayBpbiBPKSBPW3RvXSA9IE9ba107XG4gICAgICAgIGVsc2UgZGVsZXRlUHJvcGVydHlPclRocm93KE8sIHRvKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYXJnQ291bnQ7IGorKykge1xuICAgICAgICBPW2pdID0gYXJndW1lbnRzW2pdO1xuICAgICAgfVxuICAgIH0gcmV0dXJuIHNldEFycmF5TGVuZ3RoKE8sIGxlbiArIGFyZ0NvdW50KTtcbiAgfVxufSk7XG4iLCAiaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKCdEaXNhbUFzc2lzdC8xLjEnKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImNvbnN0IGNmZyA9IHtcblx0LyogQ2F0ZWdvcmllcyB3aGVyZSBkaXNhbWJpZ3VhdGlvbiBwYWdlcyBhcmUgYWRkZWQgKHVzdWFsbHkgYnkgYSB0ZW1wbGF0ZSBsaWtlIHt7RGlzYW1iaWd1YXRpb259fSAqL1xuXHRkaXNhbUNhdGVnb3JpZXM6IFsn5YWo6YOo5raI5q2n5LmJ6aG16Z2iJ10sXG5cdC8qIFwiQ2Fub25pY2FsIG5hbWVzXCIgb2YgdGhlIHRlbXBsYXRlcyB0aGF0IG1heSBhcHBlYXIgYWZ0ZXIgYW1iaWd1b3VzIGxpbmtzIGFuZCB3aGljaCBzaG91bGQgYmUgcmVtb3ZlZCB3aGVuIGZpeGluZyB0aG9zZSBsaW5rcyAqL1xuXHRkaXNhbUxpbmtUZW1wbGF0ZXM6IFtcblx0XHQnRGlzYW1iaWd1YXRpb24gbmVlZGVkJyxcblx0XHQnQW1iaWd1b3VzIGxpbmsnLFxuXHRcdCdBbWJsaW5rJyxcblx0XHQnRGFiIG5lZWRlZCcsXG5cdFx0J0Rpc2FtYi1saW5rJyxcblx0XHQnRGlzYW1iaWcgbmVlZGVkJyxcblx0XHQnRGlzYW1iaWd1YXRlJyxcblx0XHQnRG4nLFxuXHRcdCdOZWVkZGFiJyxcblx0XSxcblx0LyogXCJDYW5vbmljYWwgbmFtZXNcIiBvZiB0aGUgdGVtcGxhdGVzIHRoYXQgZGVzaWduYXRlIGludGVudGlvbmFsIGxpbmtzIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2VzICovXG5cdGRpc2FtTGlua0lnbm9yZVRlbXBsYXRlczogWydSIGZyb20gYW1iaWd1b3VzIHBhZ2UnLCAnUiB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlJywgJ1IgZnJvbSBpbmNvbXBsZXRlIGRpc2FtYmlndWF0aW9uJ10sXG5cdC8qIEZvcm1hdCBzdHJpbmcgZm9yIFwiRm9vIChkaXNhbWJpZ3VhdGlvbilcIi1zdHlsZSBwYWdlcyAqL1xuXHRkaXNhbUZvcm1hdDogJyQx77yI5raI5q2n5LmJ77yJJyxcblx0LyogUmVndWxhciBleHByZXNzaW9uIG1hdGNoaW5nIHRoZSB0aXRsZXMgb2YgZGlzYW1iaWd1YXRpb24gcGFnZXMgKHdoZW4gdGhleSBhcmUgZGlmZmVyZW50IGZyb20gdGhlIHRpdGxlcyBvZiB0aGUgcHJpbWFyeSB0b3BpY3MpICovXG5cdGRpc2FtUmVnRXhwOiAnXiguKinvvIgo5raI5q2n5LmJfOa2iOatp+e+qSnvvIkkJyxcblx0LyogVGV4dCB0aGF0IHdpbGwgYmUgaW5zZXJ0ZWQgYWZ0ZXIgdGhlIGxpbmsgaWYgdGhlIHVzZXIgcmVxdWVzdHMgaGVscC4gSWYgdGhlIHZhbHVlIGlzIG51bGwsIHRoZSBvcHRpb24gdG8gcmVxdWVzdCBoZWxwIHdvbid0IGJlIG9mZmVyZWQgKi9cblx0ZGlzYW1OZWVkZWRUZXh0OiAne3tkbnxkYXRlPXt7Jy5jb25jYXQoJ3N1YnN0OicsICdDVVJSRU5UTU9OVEhOQU1FJywgJ319IHt7JywgJ3N1YnN0OicsICdDVVJSRU5UWUVBUn19fX0nKSxcblx0LyogQ29udGVudCBvZiB0aGUgXCJGb28gKGRpc2FtYmlndWF0aW9uKVwiIHBhZ2VzIHRoYXQgd2lsbCBiZSBjcmVhdGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB1c2luZyBEaXNhbUFzc2lzdCBmcm9tIGEgXCJGb29cIiBwYWdlICovXG5cdHJlZGlyZWN0VG9EaXNhbTogJyPph43lrprlkJEgW1skMV1dJy5jb25jYXQoJ3t7UiB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlfX0nKSxcblx0LyogV2hldGhlciBpbnRlbnRpb25hbCBsaW5rcyB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlcyBjYW4gYmUgZXhwbGljaXRseSBtYXJrZWQgYnkgYWRkaW5nIFwiIChkaXNhbWJpZ3VhdGlvbilcIiAqL1xuXHRpbnRlbnRpb25hbExpbmtPcHRpb246IGZhbHNlLFxuXHQvKiBOYW1lc3BhY2VzIHRoYXQgd2lsbCBiZSBzZWFyY2hlZCBmb3IgaW5jb21pbmcgbGlua3MgdG8gdGhlIGRpc2FtYmlndWF0aW9uIHBhZ2UgKHBhZ2VzIGluIG90aGVyIG5hbWVzcGFjZXMgd2lsbCBiZSBpZ25vcmVkKSAqL1xuXHR0YXJnZXROYW1lc3BhY2VzOiBbNiwgMTAsIDE0LCAzMDIsIDBdLFxuXHQvKiBOdW1iZXIgb2YgYmFja2xpbmtzIHRoYXQgd2lsbCBiZSBkb3dubG9hZGVkIGF0IG9uY2UgV2hlbiB1c2luZyBibHJlZGlyZWN0LCB0aGUgbWF4aW11bSBsaW1pdCBpcyBzdXBwb3NlZGx5IGhhbHZlZCAoc2VlIGh0dHA6Ly93d3cubWVkaWF3aWtpLm9yZy93aWtpL0FQSTpCYWNrbGlua3MpICovXG5cdGJhY2tsaW5rTGltaXQ6IDI1MCxcblx0LyogTnVtYmVyIG9mIHRpdGxlcyB3ZSBjYW4gcXVlcnkgZm9yIGF0IG9uY2UgKi9cblx0cXVlcnlUaXRsZUxpbWl0OiA1MCxcblx0LyogTnVtYmVyIG9mIGNoYXJhY3RlcnMgYmVmb3JlIGFuZCBhZnRlciB0aGUgaW5jb21pbmcgbGluayB0aGF0IHdpbGwgYmUgZGlzcGxheWVkICovXG5cdHJhZGl1czogMzAwLFxuXHQvKiBIZWlnaHQgb2YgdGhlIGNvbnRleHQgYm94LCBpbiBsaW5lcyAqL1xuXHRudW1Db250ZXh0TGluZXM6IDQsXG5cdC8qIE51bWJlciBvZiBwYWdlcyB0aGF0IHdpbGwgYmUgc3RvcmVkIGJlZm9yZSBzYXZpbmcsIHNvIHRoYXQgY2hhbmdlcyB0byB0aGVtIGNhbiBiZSB1bmRvbmUgaWYgbmVlZCBiZSAqL1xuXHRoaXN0b3J5U2l6ZTogMixcblx0LyogTWluaW11bSB0aW1lIGluIHNlY29uZHMgc2luY2UgdGhlIGxhc3QgY2hhbmdlIHdhcyBzYXZlZCBiZWZvcmUgYSBuZXcgZWRpdCBjYW4gYmUgbWFkZS4gQSBuZWdhdGl2ZSB2YWx1ZSBvciAwIGRpc2FibGVzIHRoZSBjb29sZG93bi4gVXNlcnMgd2l0aCB0aGUgXCJib3RcIiByaWdodCB3b24ndCBiZSBhZmZlY3RlZCBieSB0aGUgY29vbGRvd24gKi9cblx0ZWRpdENvb2xkb3duOiAwLFxuXHQvKiBTcGVjaWZ5IGhvdyB0aGUgd2F0Y2hsaXN0IGlzIGFmZmVjdGVkIGJ5IERpc2FtQXNzaXN0IGVkaXRzLiBQb3NzaWJsZSB2YWx1ZXM6IFwid2F0Y2hcIiwgXCJ1bndhdGNoXCIsIFwicHJlZmVyZW5jZXNcIiwgXCJub2NoYW5nZVwiICovXG5cdHdhdGNoOiAnbm9jaGFuZ2UnLFxufTtcblxuZXhwb3J0IHtjZmd9O1xuIiwgImNvbnN0IG1lc3NhZ2VzID0ge1xuXHRzdGFydDogJ+S4uumTvuaOpea2iOatp+S5iScsXG5cdHN0YXJ0TWFpbjogJ+S4uumTvuiHs+S4u+adoeebrueahOmTvuaOpea2iOatp+S5iScsXG5cdHN0YXJ0U2FtZTogJ+S4uumTvuiHs+a2iOatp+S5iemhteeahOmTvuaOpea2iOatp+S5iScsXG5cdGNsb3NlOiAn5YWz6ZetJyxcblx0dW5kbzogJ+WkjeWOnycsXG5cdG9taXQ6ICfot7Pov4cnLFxuXHRyZWZyZXNoOiAn6YeN5paw5pW055CGJyxcblx0dGl0bGVBc1RleHQ6ICflhbblroPnm67moIcnLFxuXHRkaXNhbU5lZWRlZDogJ+agh+ekunt7ZG59fScsXG5cdGludGVudGlvbmFsTGluazogJ+acieaEj+mTvuWIsOa2iOatp+S5iemhteeahOmTvuaOpScsXG5cdHRpdGxlQXNUZXh0UHJvbXB0OiAn6K+36L6T5YWl5paw55qE6ZO+5o6l55uu5qCH77yaJyxcblx0cmVtb3ZlTGluazogJ+WOu+mZpOmTvuaOpScsXG5cdG9wdGlvbk1hcmtlcjogJyBb6ZO+5o6l5Yiw6L+Z6YeMXScsXG5cdHRhcmdldE9wdGlvbk1hcmtlcjogJyBb5b2T5YmN55uu5qCHXScsXG5cdHJlZGlyZWN0T3B0aW9uTWFya2VyOiAnIFvlvZPliY3nm67moIfvvIjph43lrprlkJHvvIldJyxcblx0cGFnZVRpdGxlTGluZTogJzxhIGhyZWY9XCIkMVwiPiQyPC9hPu+8micsXG5cdG5vTW9yZUxpbmtzOiAn5rKh5pyJ6ZyA6KaB5raI5q2n5LmJ55qE6ZO+5o6l5LqG44CCJyxcblx0cGVuZGluZ0VkaXRDb3VudGVyOiAn5bey5L+d5a2YJDHkuKrvvIzlt7LnvJbovpEkMuS4qicsXG5cdHBlbmRpbmdFZGl0Qm94OiAnRGlzYW1Bc3Npc3TmraPlnKjlgqjlrZjmgqjnmoTnvJbovpHvvIgkMe+8ieOAgicsXG5cdHBlbmRpbmdFZGl0Qm94VGltZUVzdGltYXRpb246ICckMe+8m+WJqeS9meaXtumXtO+8miQyJyxcblx0cGVuZGluZ0VkaXRCb3hMaW1pdGVkOlxuXHRcdCflnKjmiYDmnInmm7TmlLnkv53lrZjliY3vvIzor7fkuI3opoHlhbPpl63pobXpnaLvvJvkvaDlj6/ku6XlnKjlj6bkuIDkuKrpobXpnaLnvJbovpHmsYLpl7vnmb7np5HvvIzkvYbmmK/or7fli7/lkIzml7bkvb/nlKjlpJrkuKpEaXNhbUFzc2lzdOOAgicsXG5cdGVycm9yOiAn6ZSZ6K+v77yaJDEnLFxuXHRmZXRjaFJlZGlyZWN0c0Vycm9yOiAn6I635Y+W6YeN5a6a5ZCR5aSx6LSl77yaXCIkMVwiLicsXG5cdGdldEJhY2tsaW5rc0Vycm9yOiAn5LiL6L295Y+N5ZCR6ZO+5o6l5aSx6LSl77yaXCIkMVwiLicsXG5cdGZldGNoUmlnaHRzRXJyb3I6ICfojrflj5bnlKjmiLfmnYPpmZDlpLHotKXvvJpcIiQxXCIsJyxcblx0bG9hZFBhZ2VFcnJvcjogJ+WKoOi9vSQx5aSx6LSl77yaXCIkMlwiLicsXG5cdHNhdmVQYWdlRXJyb3I6ICfkv53lrZjoh7MkMeWksei0pe+8mlwiJDJcIi4nLFxuXHRkaXNtaXNzRXJyb3I6ICdEaXNtaXNzJyxcblx0cGVuZGluZzogJ0Rpc2FtQXNzaXN05bCa5pyJ5pyq5YKo5a2Y55qE57yW6L6R44CC5aaC5qyy5YKo5a2Y5LmL77yM6K+35oyJ4oCc5YWz6Zet4oCd44CCJyxcblx0ZWRpdEluUHJvZ3Jlc3M6ICdEaXNhbUFzc2lzdOato+WcqOi/m+ihjOe8lui+keOAguiLpeaCqOWwhuacrOWIhumhteWFs+mXre+8jOWPr+iDveS8muS4p+WkseaCqOeahOe8lui+keOAgicsXG5cdGVsbGlwc2lzOiAn4oCm4oCmJyxcblx0bm90aWZ5Q2hhcmFjdGVyOiAn4pyUJyxcblx0c3VtbWFyeTogJ+S9v+eUqFtbTWVkaWFXaWtpOkdhZGdldC1EaXNhbUFzc2lzdC5qc3xEaXNhbUFzc2lzdF1d5riF55CGW1tRVzpEQUJ85raI5q2n5LmJXV3pk77mjqXvvJpbWyQxXV3vvIgkMu+8ieOAgicsXG5cdHN1bW1hcnlDaGFuZ2VkOiAn5pS56ZO+5o6l6IezW1skMV1dJyxcblx0c3VtbWFyeU9taXR0ZWQ6ICfpk77mjqXlt7Lot7Pov4cnLFxuXHRzdW1tYXJ5UmVtb3ZlZDogJ+mTvuaOpeW3suenu+mZpCcsXG5cdHN1bW1hcnlJbnRlbnRpb25hbDogJ+WIu+aEj+mTvuaOpeiHs+a2iOatp+S5iemhtemdoicsXG5cdHN1bW1hcnlIZWxwTmVlZGVkOiAn6ZyA6KaB5biu5YqpJyxcblx0c3VtbWFyeVNlcGFyYXRvcjogJzsgJyxcblx0cmVkaXJlY3RTdW1tYXJ5OiAn5L2/55SoW1tNZWRpYVdpa2k6R2FkZ2V0LURpc2FtQXNzaXN0LmpzfERpc2FtQXNzaXN0XV3liJvlu7rnm67moIfkuLpbWyQxXV3nmoTph43lrprlkJHjgIInLFxufTtcblxuZXhwb3J0IHttZXNzYWdlc307XG4iLCAiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuLy8gQHRzLW5vY2hlY2tcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2NmZ30gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHttZXNzYWdlc30gZnJvbSAnLi9tZXNzYWdlcyc7XG5cbmxldCBzdGFydExpbms7XG5sZXQgdWk7XG5sZXQgbGlua3M7XG5sZXQgcGFnZUNoYW5nZXM7XG5sZXQgY3VycmVudFBhZ2VUaXRsZTtcbmxldCBjdXJyZW50UGFnZVBhcmFtZXRlcnM7XG5sZXQgY3VycmVudExpbms7XG5sZXQgcG9zc2libGVCYWNrbGlua0Rlc3RpbmF0aW9ucztcbmxldCBmb3JjZVNhbWVQYWdlID0gZmFsc2U7XG5sZXQgcnVubmluZyA9IGZhbHNlO1xubGV0IGNob29zaW5nID0gZmFsc2U7XG5sZXQgY2FuTWFya0ludGVudGlvbmFsTGlua3MgPSBmYWxzZTtcbmxldCBkaXNwbGF5ZWRQYWdlcyA9IHt9O1xubGV0IGVkaXRDb3VudCA9IDA7XG5sZXQgZWRpdExpbWl0O1xuY29uc3QgcGVuZGluZ1NhdmVzID0gW107XG5sZXQgcGVuZGluZ0VkaXRCb3g7XG5sZXQgcGVuZGluZ0VkaXRCb3hUZXh0O1xubGV0IGxhc3RFZGl0TWlsbGlzID0gMDtcbmxldCBydW5uaW5nU2F2ZXMgPSBmYWxzZTtcblxuLyogRW50cnkgcG9pbnQuIENoZWNrIHdoZXRoZXIgd2UgYXJlIGluIGEgZGlzYW1iaWd1YXRpb24gcGFnZS4gSWYgc28sIGFkZCBhIGxpbmsgdG8gc3RhcnQgdGhlIHRvb2wgKi9cbmNvbnN0IGluc3RhbGwgPSAoKSA9PiB7XG5cdGNvbnN0IHt3Z0FjdGlvbn0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdGlmICh3Z0FjdGlvbiAhPT0gJ3ZpZXcnIHx8ICFpc0Rpc2FtKCkpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0JCgoKSA9PiB7XG5cdFx0Y29uc3QgcG9ydGxldElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0XHQvLyBUaGlzIGlzIGEgXCIgKGRpc2FtYmlndWF0aW9uKVwiIHBhZ2Vcblx0XHRpZiAobmV3IFJlZ0V4cChjZmcuZGlzYW1SZWdFeHApLnRlc3QoZ2V0VGl0bGUoKSkpIHtcblx0XHRcdGNvbnN0IHN0YXJ0TWFpbkxpbmsgPSAkKFxuXHRcdFx0XHRtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCBtZXNzYWdlcy5zdGFydE1haW4sICdjYS1kaXNhbWFzc2lzdC1tYWluJylcblx0XHRcdCkub24oJ2NsaWNrJywgc3RhcnRNYWluKTtcblx0XHRcdGNvbnN0IHN0YXJ0U2FtZUxpbmsgPSAkKFxuXHRcdFx0XHRtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCBtZXNzYWdlcy5zdGFydFNhbWUsICdjYS1kaXNhbWFzc2lzdC1zYW1lJylcblx0XHRcdCkub24oJ2NsaWNrJywgc3RhcnRTYW1lKTtcblx0XHRcdHN0YXJ0TGluayA9IHN0YXJ0TWFpbkxpbmsuYWRkKHN0YXJ0U2FtZUxpbmspO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdGFydExpbmsgPSAkKG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIG1lc3NhZ2VzLnN0YXJ0LCAnY2EtZGlzYW1hc3Npc3QtcGFnZScpKS5vbihcblx0XHRcdFx0J2NsaWNrJyxcblx0XHRcdFx0c3RhcnRcblx0XHRcdCk7XG5cdFx0fVxuXHR9KTtcbn07XG5cbi8qIFN0YXJ0IHRoZSB0b29sLiBEaXNwbGF5IHRoZSBVSSBhbmQgYmVnaW4gbG9va2luZyBmb3IgbGlua3MgdG8gZml4ICovXG5jb25zdCBzdGFydCA9ICgpID0+IHtcblx0aWYgKHJ1bm5pbmcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRydW5uaW5nID0gdHJ1ZTtcblx0bGlua3MgPSBbXTtcblx0cGFnZUNoYW5nZXMgPSBbXTtcblx0ZGlzcGxheWVkUGFnZXMgPSB7fTtcblx0ZW5zdXJlREFCRXhpc3RzKCkudGhlbigoY2FuTWFyaykgPT4ge1xuXHRcdGNhbk1hcmtJbnRlbnRpb25hbExpbmtzID0gY2FuTWFyaztcblx0XHRjcmVhdGVVSSgpO1xuXHRcdGFkZFVubG9hZENvbmZpcm0oKTtcblx0XHRtYXJrRGlzYW1PcHRpb25zKCk7XG5cdFx0Y2hlY2tFZGl0TGltaXQoKS50aGVuKCgpID0+IHtcblx0XHRcdHRvZ2dsZVBlbmRpbmdFZGl0Qm94KGZhbHNlKTtcblx0XHRcdGRvUGFnZSgpO1xuXHRcdH0pO1xuXHR9KTtcbn07XG5cbi8qIFN0YXJ0IERpc2FtQXNzaXN0LiBEaXNhbWJpZ3VhdGUgaW5jb21pbmcgbGlua3MgdG8gdGhlIGN1cnJlbnQgcGFnZSwgcmVnYXJkbGVzcyBvZiB0aGUgdGl0bGUuICovXG5jb25zdCBzdGFydFNhbWUgPSAoKSA9PiB7XG5cdGZvcmNlU2FtZVBhZ2UgPSB0cnVlO1xuXHRzdGFydCgpO1xufTtcblxuLyogU3RhcnQgRGlzYW1Bc3Npc3QuIElmIHRoZSBwYWdlIHRpdGxlIGVuZHMgd2l0aCBcIiAoZGlzYW1iaWd1YXRpb24pXCIsIGRpc2FtYmlndWF0ZSBsaW5rcyB0byB0aGUgcHJpbWFyeSB0b3BpYyBhcnRpY2xlLiBPdGhlcndpc2UsIGRpc2FtYmlndWF0ZSBsaW5rcyB0byB0aGUgY3VycmVudCBwYWdlLiAqL1xuY29uc3Qgc3RhcnRNYWluID0gKCkgPT4ge1xuXHRmb3JjZVNhbWVQYWdlID0gZmFsc2U7XG5cdHN0YXJ0KCk7XG59O1xuXG4vKiBDcmVhdGUgYW5kIHNob3cgdGhlIHVzZXIgaW50ZXJmYWNlLiAqL1xuY29uc3QgY3JlYXRlVUkgPSAoKSA9PiB7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHR1aSA9IHtcblx0XHRkaXNwbGF5OiAkKCc8ZGl2PicpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1ib3ggZGlzYW1hc3Npc3QtbWFpbmJveCcpLFxuXHRcdGZpbmlzaGVkTWVzc2FnZTogJCgnPGRpdj4nKS50ZXh0KG1lc3NhZ2VzLm5vTW9yZUxpbmtzKS5oaWRlKCksXG5cdFx0cGFnZVRpdGxlTGluZTogJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LXBhZ2V0aXRsZWxpbmUnKSxcblx0XHRwZW5kaW5nRWRpdENvdW50ZXI6ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWVkaXRjb3VudGVyJyksXG5cdFx0Y29udGV4dDogJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWNvbnRleHQnKSxcblx0XHR1bmRvQnV0dG9uOiBjcmVhdGVCdXR0b24obWVzc2FnZXMudW5kbywgdW5kbyksXG5cdFx0b21pdEJ1dHRvbjogY3JlYXRlQnV0dG9uKG1lc3NhZ2VzLm9taXQsIG9taXQpLFxuXHRcdGVuZEJ1dHRvbjogY3JlYXRlQnV0dG9uKG1lc3NhZ2VzLmNsb3NlLCBzYXZlQW5kRW5kKSxcblx0XHRyZWZyZXNoQnV0dG9uOiBjcmVhdGVCdXR0b24obWVzc2FnZXMucmVmcmVzaCwgcmVmcmVzaCksXG5cdFx0dGl0bGVBc1RleHRCdXR0b246IGNyZWF0ZUJ1dHRvbihtZXNzYWdlcy50aXRsZUFzVGV4dCwgY2hvb3NlVGl0bGVGcm9tUHJvbXB0KSxcblx0XHRpbnRlbnRpb25hbExpbmtCdXR0b246IGNhbk1hcmtJbnRlbnRpb25hbExpbmtzXG5cdFx0XHQ/IGNyZWF0ZUJ1dHRvbihtZXNzYWdlcy5pbnRlbnRpb25hbExpbmssIGNob29zZUludGVudGlvbmFsTGluaylcblx0XHRcdDogJCgnPHNwYW4+JyksXG5cdFx0ZGlzYW1OZWVkZWRCdXR0b246IGNmZy5kaXNhbU5lZWRlZFRleHQgPyBjcmVhdGVCdXR0b24obWVzc2FnZXMuZGlzYW1OZWVkZWQsIGNob29zZURpc2FtTmVlZGVkKSA6ICQoJzxzcGFuPicpLFxuXHRcdHJlbW92ZUxpbmtCdXR0b246IGNyZWF0ZUJ1dHRvbihtZXNzYWdlcy5yZW1vdmVMaW5rLCBjaG9vc2VMaW5rUmVtb3ZhbCksXG5cdH07XG5cdGNvbnN0IHRvcCA9ICQoJzxkaXY+Jylcblx0XHQuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LXRvcCcpXG5cdFx0LmFwcGVuZChbdWkucGVuZGluZ0VkaXRDb3VudGVyLCB1aS5maW5pc2hlZE1lc3NhZ2UsIHVpLnBhZ2VUaXRsZUxpbmVdKTtcblx0Y29uc3QgbGVmdEJ1dHRvbnMgPSAkKCc8ZGl2PicpXG5cdFx0LmFkZENsYXNzKCdkaXNhbWFzc2lzdC1sZWZ0YnV0dG9ucycpXG5cdFx0LmFwcGVuZChbXG5cdFx0XHR1aS50aXRsZUFzVGV4dEJ1dHRvbixcblx0XHRcdHVpLnJlbW92ZUxpbmtCdXR0b24sXG5cdFx0XHR1aS5pbnRlbnRpb25hbExpbmtCdXR0b24sXG5cdFx0XHR1aS5kaXNhbU5lZWRlZEJ1dHRvbixcblx0XHRcdHVpLm9taXRCdXR0b24sXG5cdFx0XSk7XG5cdGNvbnN0IHJpZ2h0QnV0dG9ucyA9ICQoJzxkaXY+Jylcblx0XHQuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LXJpZ2h0YnV0dG9ucycpXG5cdFx0LmFwcGVuZChbdWkudW5kb0J1dHRvbiwgdWkucmVmcmVzaEJ1dHRvbiwgdWkuZW5kQnV0dG9uXSk7XG5cdGNvbnN0IGFsbEJ1dHRvbnMgPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1hbGxidXR0b25zJykuYXBwZW5kKFtsZWZ0QnV0dG9ucywgcmlnaHRCdXR0b25zXSk7XG5cdHVpLmRpc3BsYXkuYXBwZW5kKFt0b3AsIHVpLmNvbnRleHQsIGFsbEJ1dHRvbnNdKTtcblx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0dG9nZ2xlQWN0aW9uQnV0dG9ucyhmYWxzZSk7XG5cdC8vIEluc2VydCB0aGUgVUkgaW4gdGhlIHBhZ2Vcblx0JGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCcpLmJlZm9yZSh1aS5kaXNwbGF5KTtcblx0dWkuZGlzcGxheS5oaWRlKCkuZmFkZUluKCk7XG59O1xuXG4vKiBJZiB0aGVyZSBhcmUgcGVuZGluZyBjaGFuZ2VzLCBzaG93IGEgY29uZmlybSBkaWFsb2cgYmVmb3JlIGNsb3NpbmcgKi9cbmNvbnN0IGFkZFVubG9hZENvbmZpcm0gPSAoKSA9PiB7XG5cdCQod2luZG93KS5vbignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuXHRcdGlmIChydW5uaW5nICYmIGNoZWNrQWN0dWFsQ2hhbmdlcygpKSB7XG5cdFx0XHRyZXR1cm4gbWVzc2FnZXMucGVuZGluZztcblx0XHR9IGVsc2UgaWYgKGVkaXRDb3VudCAhPT0gMCkge1xuXHRcdFx0cmV0dXJuIG1lc3NhZ2VzLmVkaXRJblByb2dyZXNzO1xuXHRcdH1cblx0fSk7XG59O1xuXG4vKiBNYXJrIHRoZSBkaXNhbWJpZ3VhdGlvbiBvcHRpb25zIGFzIHN1Y2ggKi9cbmNvbnN0IG1hcmtEaXNhbU9wdGlvbnMgPSAoKSA9PiB7XG5cdGNvbnN0IG9wdGlvblBhZ2VUaXRsZXMgPSBbXTtcblx0Y29uc3Qgb3B0aW9uTWFya2VycyA9IFtdO1xuXHRnZXREaXNhbU9wdGlvbnMoKS5lYWNoKChfaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRjb25zdCBsaW5rID0gJChlbGVtZW50KTtcblx0XHRjb25zdCB0aXRsZSA9IGV4dHJhY3RQYWdlTmFtZShsaW5rKTtcblx0XHRjb25zdCBvcHRpb25NYXJrZXIgPSAkKCc8YT4nKVxuXHRcdFx0LmF0dHIoJ2hyZWYnLCAnIycpXG5cdFx0XHQuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LW9wdGlvbm1hcmtlcicpXG5cdFx0XHQudGV4dChtZXNzYWdlcy5vcHRpb25NYXJrZXIpXG5cdFx0XHQub24oJ2NsaWNrJywgKGV2KSA9PiB7XG5cdFx0XHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGNob29zZVJlcGxhY2VtZW50KHRpdGxlKTtcblx0XHRcdH0pO1xuXHRcdGxpbmsuYWZ0ZXIob3B0aW9uTWFya2VyKTtcblx0XHRvcHRpb25NYXJrZXJzW29wdGlvbk1hcmtlcnMubGVuZ3RoXSA9IG9wdGlvbk1hcmtlcjtcblx0XHRvcHRpb25QYWdlVGl0bGVzW29wdGlvblBhZ2VUaXRsZXMubGVuZ3RoXSA9IHRpdGxlO1xuXHR9KTtcblx0Ly8gTm93IGNoZWNrIHRoZSBkaXNhbWJpZ3VhdGlvbiBvcHRpb25zIGFuZCBkaXNwbGF5IGEgZGlmZmVyZW50IG1lc3NhZ2UgZm9yIHRob3NlIHRoYXQgYXJlXG5cdC8vIGFjdHVhbGx5IHRoZSBzYW1lIGFzIHRoZSB0YXJnZXQgcGFnZSB3aGVyZSB0aGUgbGlua3MgZ28sIGFzIGNob29zaW5nIHRob3NlIG9wdGlvbnMgZG9lc24ndCByZWFsbHlcblx0Ly8gYWNjb21wbGlzaCBhbnl0aGluZyAoZXhjZXB0IGJ5cGFzc2luZyByZWRpcmVjdHMsIHdoaWNoIG1pZ2h0IGJlIHVzZWZ1bCBpbiBzb21lIGNhc2VzKVxuXHRjb25zdCB0YXJnZXRQYWdlID0gZ2V0VGFyZ2V0UGFnZSgpO1xuXHRmZXRjaFJlZGlyZWN0cyhbLi4ub3B0aW9uUGFnZVRpdGxlcywgLi4udGFyZ2V0UGFnZV0pXG5cdFx0LmRvbmUoKHJlZGlyZWN0cykgPT4ge1xuXHRcdFx0Y29uc3QgZW5kVGFyZ2V0UGFnZSA9IHJlc29sdmVSZWRpcmVjdCh0YXJnZXRQYWdlLCByZWRpcmVjdHMpO1xuXHRcdFx0Zm9yIChjb25zdCBbaWksIG9wdGlvblBhZ2VUaXRsZV0gb2Ygb3B0aW9uUGFnZVRpdGxlcy5lbnRyaWVzKCkpIHtcblx0XHRcdFx0Y29uc3QgZW5kT3B0aW9uVGl0bGUgPSByZXNvbHZlUmVkaXJlY3Qob3B0aW9uUGFnZVRpdGxlLCByZWRpcmVjdHMpO1xuXHRcdFx0XHRpZiAoaXNTYW1lUGFnZShvcHRpb25QYWdlVGl0bGUsIHRhcmdldFBhZ2UpKSB7XG5cdFx0XHRcdFx0b3B0aW9uTWFya2Vyc1tpaV0udGV4dChtZXNzYWdlcy50YXJnZXRPcHRpb25NYXJrZXIpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1jdXJyb3B0aW9ubWFya2VyJyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXNTYW1lUGFnZShlbmRPcHRpb25UaXRsZSwgZW5kVGFyZ2V0UGFnZSkpIHtcblx0XHRcdFx0XHRvcHRpb25NYXJrZXJzW2lpXS50ZXh0KG1lc3NhZ2VzLnJlZGlyZWN0T3B0aW9uTWFya2VyKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtY3Vycm9wdGlvbm1hcmtlcicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblx0XHQuZmFpbChlcnJvcik7XG59O1xuXG4vKiBDaGVjayB3aGV0aGVyIGludGVudGlvbmFsIGxpbmtzIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2VzIGNhbiBiZSBleHBsaWNpdGx5IG1hcmtlZC8qICogYXMgc3VjaCBpbiB0aGlzIHdpa2kuIElmIHNvLCBlbnN1cmUgdGhhdCBhIFwiRm9vIChkaXNhbWJpZ3VhdGlvbilcIiBwYWdlIGV4aXN0cy4vKiAqIFJldHVybnMgYSBqUXVlcnkgcHJvbWlzZSAqL1xuY29uc3QgZW5zdXJlREFCRXhpc3RzID0gKCkgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG5cdGNvbnN0IHRpdGxlID0gZ2V0VGl0bGUoKTtcblx0Ly8gVGhhdCBjb25jZXB0IGRvZXNuJ3QgZXhpc3QgaW4gdGhpcyB3aWtpLlxuXHRpZiAoIWNmZy5pbnRlbnRpb25hbExpbmtPcHRpb24pIHtcblx0XHRkZWZlcnJlZC5yZXNvbHZlKGZhbHNlKTtcblx0XHQvLyBcIkZvbyAoZGlzYW1iaWd1YXRpb24pXCIgZXhpc3RzOiBpdCdzIHRoZSBjdXJyZW50IHBhZ2UuXG5cdH0gZWxzZSBpZiAobmV3IFJlZ0V4cChjZmcuZGlzYW1SZWdFeHApLmV4ZWModGl0bGUpKSB7XG5cdFx0ZGVmZXJyZWQucmVzb2x2ZSh0cnVlKTtcblx0fSBlbHNlIHtcblx0XHRjb25zdCBkaXNhbVRpdGxlID0gY2ZnLmRpc2FtRm9ybWF0LnJlcGxhY2UoJyQxJywgdGl0bGUpO1xuXHRcdGxvYWRQYWdlKGRpc2FtVGl0bGUpXG5cdFx0XHQuZG9uZSgocGFnZSkgPT4ge1xuXHRcdFx0XHQvLyBcIkZvbyAoZGlzYW1iaWd1YXRpb24pXCIgZG9lc24ndCBleGlzdC5cblx0XHRcdFx0aWYgKHBhZ2UubWlzc2luZykge1xuXHRcdFx0XHRcdC8vIFdlIHRyeSB0byBjcmVhdGUgaXRcblx0XHRcdFx0XHRwYWdlLmNvbnRlbnQgPSBjZmcucmVkaXJlY3RUb0Rpc2FtLnJlcGxhY2UoJyQxJywgdGl0bGUpO1xuXHRcdFx0XHRcdGNvbnN0IHN1bW1hcnkgPSBtZXNzYWdlcy5yZWRpcmVjdFN1bW1hcnkucmVwbGFjZSgnJDEnLCB0aXRsZSk7XG5cdFx0XHRcdFx0c2F2ZVBhZ2UoZGlzYW1UaXRsZSwgcGFnZSwgc3VtbWFyeSwgZmFsc2UsIHRydWUpXG5cdFx0XHRcdFx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0LmZhaWwoKGRlc2NyaXB0aW9uKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGVycm9yKGRlc2NyaXB0aW9uKTtcblx0XHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShmYWxzZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQvLyBJdCBkb2VzIGV4aXN0XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSh0cnVlKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5mYWlsKChkZXNjcmlwdGlvbikgPT4ge1xuXHRcdFx0XHRlcnJvcihkZXNjcmlwdGlvbik7XG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmUoZmFsc2UpO1xuXHRcdFx0fSk7XG5cdH1cblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIENoZWNrIHdoZXRoZXIgdGhlIGVkaXQgY29vbGRvd24gYXBwbGllcyBhbmQgc2V0cyBlZGl0TGltaXQgYWNjb3JkaW5nbHkuLyogKiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UgKi9cbmNvbnN0IGNoZWNrRWRpdExpbWl0ID0gKCkgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG5cdGlmIChjZmcuZWRpdENvb2xkb3duIDw9IDApIHtcblx0XHRlZGl0TGltaXQgPSBmYWxzZTtcblx0XHRkZWZlcnJlZC5yZXNvbHZlKCk7XG5cdH0gZWxzZSB7XG5cdFx0ZmV0Y2hSaWdodHMoKVxuXHRcdFx0LmRvbmUoKHJpZ2h0cykgPT4ge1xuXHRcdFx0XHRlZGl0TGltaXQgPSAhcmlnaHRzLmluY2x1ZGVzKCdib3QnKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbCgoZGVzY3JpcHRpb24pID0+IHtcblx0XHRcdFx0ZXJyb3IoZGVzY3JpcHRpb24pO1xuXHRcdFx0XHRlZGl0TGltaXQgPSB0cnVlO1xuXHRcdFx0fSlcblx0XHRcdC5hbHdheXMoKCkgPT4ge1xuXHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKCk7XG5cdFx0XHR9KTtcblx0fVxuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcblxuLyogRmluZCBhbmQgYXNrIHRoZSB1c2VyIHRvIGZpeCBhbGwgdGhlIGluY29taW5nIGxpbmtzIHRvIHRoZSBkaXNhbWJpZ3VhdGlvbiAoXCJ0YXJnZXRcIikvKiAqIHBhZ2UgZnJvbSBhIHNpbmdsZSBcIm9yaWdpblwiIHBhZ2UgKi9cbmNvbnN0IGRvUGFnZSA9ICgpID0+IHtcblx0aWYgKHBhZ2VDaGFuZ2VzLmxlbmd0aCA+IGNmZy5oaXN0b3J5U2l6ZSkge1xuXHRcdGFwcGx5Q2hhbmdlKHBhZ2VDaGFuZ2VzLnNoaWZ0KCkpO1xuXHR9XG5cdGlmIChsaW5rcy5sZW5ndGgpIHtcblx0XHRjdXJyZW50UGFnZVRpdGxlID0gbGlua3Muc2hpZnQoKTtcblx0XHRkaXNwbGF5ZWRQYWdlc1tjdXJyZW50UGFnZVRpdGxlXSA9IHRydWU7XG5cdFx0dG9nZ2xlQWN0aW9uQnV0dG9ucyhmYWxzZSk7XG5cdFx0bG9hZFBhZ2UoY3VycmVudFBhZ2VUaXRsZSlcblx0XHRcdC5kb25lKChkYXRhKSA9PiB7XG5cdFx0XHRcdGN1cnJlbnRQYWdlUGFyYW1ldGVycyA9IGRhdGE7XG5cdFx0XHRcdGN1cnJlbnRMaW5rID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRkb0xpbmsoKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbChlcnJvcik7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgdGFyZ2V0UGFnZSA9IGdldFRhcmdldFBhZ2UoKTtcblx0XHRnZXRCYWNrbGlua3ModGFyZ2V0UGFnZSlcblx0XHRcdC5kb25lKChiYWNrbGlua3MsIHBhZ2VUaXRsZXMpID0+IHtcblx0XHRcdFx0Y29uc3QgcGVuZGluZyA9IHt9O1xuXHRcdFx0XHRmb3IgKGNvbnN0IGVsIG9mIHBlbmRpbmdTYXZlcykge1xuXHRcdFx0XHRcdHBlbmRpbmdbZWxbMF1dID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRwb3NzaWJsZUJhY2tsaW5rRGVzdGluYXRpb25zID0gcGFnZVRpdGxlcy5maWx0ZXIoKHQpID0+IHtcblx0XHRcdFx0XHRpZiAodCA9PT0gdGFyZ2V0UGFnZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiByZW1vdmVEaXNhbSh0KSAhPT0gdGFyZ2V0UGFnZTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdC8vIE9ubHkgaW5jb21pbmcgbGlua3MgZnJvbSBwYWdlcyB3ZSBoYXZlbid0IHNlZW4geWV0IGFuZCB3ZSBhcmVuJ3QgY3VycmVudGx5XG5cdFx0XHRcdC8vIHNhdmluZyAoZGlzcGxheWVkUGFnZXMgaXMgcmVzZXQgd2hlbiB0aGUgdG9vbCBpcyBjbG9zZWQgYW5kIG9wZW5lZCBhZ2Fpbixcblx0XHRcdFx0Ly8gd2hpbGUgdGhlIGxpc3Qgb2YgcGVuZGluZyBjaGFuZ2VzIGlzbid0OyBpZiB0aGUgZWRpdCBjb29sZG93biBpcyBkaXNhYmxlZCxcblx0XHRcdFx0Ly8gaXQgd2lsbCBiZSBlbXB0eSlcblx0XHRcdFx0bGlua3MgPSBiYWNrbGlua3MuZmlsdGVyKChlbCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAhZGlzcGxheWVkUGFnZXNbZWxdICYmICFwZW5kaW5nW2VsXTtcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGlmIChsaW5rcy5sZW5ndGgpIHtcblx0XHRcdFx0XHRkb1BhZ2UoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR1cGRhdGVDb250ZXh0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuZmFpbChlcnJvcik7XG5cdH1cbn07XG5cbi8qIEZpbmQgYW5kIGFzayB0aGUgdXNlciB0byBmaXggYSBzaW5nbGUgaW5jb21pbmcgbGluayB0byB0aGUgZGlzYW1iaWd1YXRpb24gKFwidGFyZ2V0XCIpLyogKiBwYWdlICovXG5jb25zdCBkb0xpbmsgPSAoKSA9PiB7XG5cdGN1cnJlbnRMaW5rID0gZXh0cmFjdExpbmtUb1BhZ2UoXG5cdFx0Y3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQsXG5cdFx0cG9zc2libGVCYWNrbGlua0Rlc3RpbmF0aW9ucyxcblx0XHRjdXJyZW50TGluayA/IGN1cnJlbnRMaW5rLmVuZCA6IDBcblx0KTtcblx0aWYgKGN1cnJlbnRMaW5rKSB7XG5cdFx0dXBkYXRlQ29udGV4dCgpO1xuXHR9IGVsc2Uge1xuXHRcdGRvUGFnZSgpO1xuXHR9XG59O1xuXG4vKiBSZXBsYWNlIHRoZSB0YXJnZXQgb2YgYSBsaW5rIHdpdGggYSBkaWZmZXJlbnQgb25lLyogKiBwYWdlVGl0bGU6IE5ldyBsaW5rIHRhcmdldC8qICogZXh0cmE6IEFkZGl0aW9uYWwgdGV4dCBhZnRlciB0aGUgbGluayAob3B0aW9uYWwpLyogKiBzdW1tYXJ5OiBDaGFuZ2Ugc3VtbWFyeSAob3B0aW9uYWwpICovXG5jb25zdCBjaG9vc2VSZXBsYWNlbWVudCA9IChwYWdlVGl0bGUsIGV4dHJhLCBzdW1tYXJ5KSA9PiB7XG5cdGlmIChjaG9vc2luZykge1xuXHRcdGNob29zaW5nID0gZmFsc2U7XG5cdFx0c3VtbWFyeSB8fD0gcGFnZVRpdGxlID8gbWVzc2FnZXMuc3VtbWFyeUNoYW5nZWQucmVwbGFjZSgnJDEnLCBwYWdlVGl0bGUpIDogbWVzc2FnZXMuc3VtbWFyeU9taXR0ZWQ7XG5cdFx0YWRkQ2hhbmdlKGN1cnJlbnRQYWdlVGl0bGUsIGN1cnJlbnRQYWdlUGFyYW1ldGVycywgY3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQsIGN1cnJlbnRMaW5rLCBzdW1tYXJ5KTtcblx0XHRpZiAocGFnZVRpdGxlICYmIChwYWdlVGl0bGUgIT09IGdldFRhcmdldFBhZ2UoKSB8fCBleHRyYSkpIHtcblx0XHRcdGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50ID0gcmVwbGFjZUxpbmsoXG5cdFx0XHRcdGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LFxuXHRcdFx0XHRwYWdlVGl0bGUsXG5cdFx0XHRcdGN1cnJlbnRMaW5rLFxuXHRcdFx0XHRleHRyYSB8fCAnJ1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0ZG9MaW5rKCk7XG5cdH1cbn07XG5cbi8qIFJlcGxhY2UgdGhlIGxpbmsgd2l0aCBhbiBleHBsaWNpdCBsaW5rIHRvIHRoZSBkaXNhbWJpZ3VhdGlvbiBwYWdlICovXG5jb25zdCBjaG9vc2VJbnRlbnRpb25hbExpbmsgPSAoKSA9PiB7XG5cdGNvbnN0IGRpc2FtVGl0bGUgPSBjZmcuZGlzYW1Gb3JtYXQucmVwbGFjZSgnJDEnLCBnZXRUYXJnZXRQYWdlKCkpO1xuXHRjaG9vc2VSZXBsYWNlbWVudChkaXNhbVRpdGxlLCAnJywgbWVzc2FnZXMuc3VtbWFyeUludGVudGlvbmFsKTtcbn07XG5cbi8qIFByb21wdCBmb3IgYW4gYWx0ZXJuYXRpdmUgbGluayB0YXJnZXQgYW5kIHVzZSBpdCBhcyBhIHJlcGxhY2VtZW50ICovXG5jb25zdCBjaG9vc2VUaXRsZUZyb21Qcm9tcHQgPSAoKSA9PiB7XG5cdGNvbnN0IHRpdGxlID0gcHJvbXB0KG1lc3NhZ2VzLnRpdGxlQXNUZXh0UHJvbXB0KTtcblx0aWYgKHRpdGxlICE9PSBudWxsKSB7XG5cdFx0Y2hvb3NlUmVwbGFjZW1lbnQodGl0bGUpO1xuXHR9XG59O1xuXG4vKiBSZW1vdmUgdGhlIGN1cnJlbnQgbGluaywgbGVhdmluZyB0aGUgdGV4dCB1bmNoYW5nZWQgKi9cbmNvbnN0IGNob29zZUxpbmtSZW1vdmFsID0gKCkgPT4ge1xuXHRpZiAoY2hvb3NpbmcpIHtcblx0XHRjb25zdCBzdW1tYXJ5ID0gbWVzc2FnZXMuc3VtbWFyeVJlbW92ZWQ7XG5cdFx0YWRkQ2hhbmdlKGN1cnJlbnRQYWdlVGl0bGUsIGN1cnJlbnRQYWdlUGFyYW1ldGVycywgY3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQsIGN1cnJlbnRMaW5rLCBzdW1tYXJ5KTtcblx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCA9IHJlbW92ZUxpbmsoY3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQsIGN1cnJlbnRMaW5rKTtcblx0XHRkb0xpbmsoKTtcblx0fVxufTtcblxuLyogQWRkIGEgXCJkaXNhbWJpZ3VhdGlvbiBuZWVkZWRcIiB0ZW1wbGF0ZSBhZnRlciB0aGUgbGluayAqL1xuY29uc3QgY2hvb3NlRGlzYW1OZWVkZWQgPSAoKSA9PiB7XG5cdGNob29zZVJlcGxhY2VtZW50KGN1cnJlbnRMaW5rLnRpdGxlLCBjZmcuZGlzYW1OZWVkZWRUZXh0LCBtZXNzYWdlcy5zdW1tYXJ5SGVscE5lZWRlZCk7XG59O1xuXG4vKiBVbmRvIHRoZSBsYXN0IGNoYW5nZSAqL1xuY29uc3QgdW5kbyA9ICgpID0+IHtcblx0aWYgKHBhZ2VDaGFuZ2VzLmxlbmd0aCkge1xuXHRcdGNvbnN0IGxhc3RQYWdlID0gcGFnZUNoYW5nZXMuYXQoLTEpO1xuXHRcdGlmIChjdXJyZW50UGFnZVRpdGxlICE9PSBsYXN0UGFnZS50aXRsZSkge1xuXHRcdFx0bGlua3MudW5zaGlmdChjdXJyZW50UGFnZVRpdGxlKTtcblx0XHRcdGN1cnJlbnRQYWdlVGl0bGUgPSBsYXN0UGFnZS50aXRsZTtcblx0XHR9XG5cdFx0Y3VycmVudFBhZ2VQYXJhbWV0ZXJzID0gbGFzdFBhZ2UucGFnZTtcblx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCA9IGxhc3RQYWdlLmNvbnRlbnRCZWZvcmUucG9wKCk7XG5cdFx0Y3VycmVudExpbmsgPSBsYXN0UGFnZS5saW5rcy5wb3AoKTtcblx0XHRsYXN0UGFnZS5zdW1tYXJ5LnBvcCgpO1xuXHRcdGlmICghbGFzdFBhZ2UuY29udGVudEJlZm9yZS5sZW5ndGgpIHtcblx0XHRcdHBhZ2VDaGFuZ2VzLnBvcCgpO1xuXHRcdH1cblx0XHR1cGRhdGVDb250ZXh0KCk7XG5cdH1cbn07XG5cbi8qIE9taXQgdGhlIGN1cnJlbnQgbGluayB3aXRob3V0IG1ha2luZyBhIGNoYW5nZSAqL1xuY29uc3Qgb21pdCA9ICgpID0+IHtcblx0Y2hvb3NlUmVwbGFjZW1lbnQoKTtcbn07XG5cbi8qIFNhdmUgYWxsIHRoZSBwZW5kaW5nIGNoYW5nZXMgYW5kIHJlc3RhcnQgdGhlIHRvb2wuICovXG5jb25zdCByZWZyZXNoID0gKCkgPT4ge1xuXHRzYXZlQW5kRW5kKCk7XG5cdHN0YXJ0KCk7XG59O1xuXG4vKiBFbmFibGUgb3IgZGlzYWJsZSB0aGUgYnV0dG9ucyB0aGF0IGNhbiBwZXJmb3JtIGFjdGlvbnMgb24gYSBwYWdlIG9yIGNoYW5nZSB0aGUgY3VycmVudCBsaW5rLi8qICogZW5hYmxlZDogV2hldGhlciB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYnV0dG9ucyAqL1xuY29uc3QgdG9nZ2xlQWN0aW9uQnV0dG9ucyA9IChlbmFibGVkKSA9PiB7XG5cdGNvbnN0IGFmZmVjdGVkQnV0dG9ucyA9IFtcblx0XHR1aS5vbWl0QnV0dG9uLFxuXHRcdHVpLnRpdGxlQXNUZXh0QnV0dG9uLFxuXHRcdHVpLnJlbW92ZUxpbmtCdXR0b24sXG5cdFx0dWkuaW50ZW50aW9uYWxMaW5rQnV0dG9uLFxuXHRcdHVpLmRpc2FtTmVlZGVkQnV0dG9uLFxuXHRcdHVpLnVuZG9CdXR0b24sXG5cdF07XG5cdGZvciAoY29uc3QgYnV0dG9uIG9mIGFmZmVjdGVkQnV0dG9ucykge1xuXHRcdGJ1dHRvbi5wcm9wKCdkaXNhYmxlZCcsICFlbmFibGVkKTtcblx0fVxufTtcblxuLyogU2hvdyBvciBoaWRlIHRoZSAnbm8gbW9yZSBsaW5rcycgbWVzc2FnZS8qICogc2hvdzogV2hldGhlciB0byBzaG93IG9yIGhpZGUgdGhlIG1lc3NhZ2UgKi9cbmNvbnN0IHRvZ2dsZUZpbmlzaGVkTWVzc2FnZSA9IChzaG93KSA9PiB7XG5cdHRvZ2dsZUFjdGlvbkJ1dHRvbnMoIXNob3cpO1xuXHR1aS51bmRvQnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgIXBhZ2VDaGFuZ2VzLmxlbmd0aCk7XG5cdHVpLmZpbmlzaGVkTWVzc2FnZS50b2dnbGUoc2hvdyk7XG5cdHVpLnBhZ2VUaXRsZUxpbmUudG9nZ2xlKCFzaG93KTtcblx0dWkuY29udGV4dC50b2dnbGUoIXNob3cpO1xufTtcblxuY29uc3QgdG9nZ2xlUGVuZGluZ0VkaXRCb3ggPSAoc2hvdykgPT4ge1xuXHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0aWYgKCFwZW5kaW5nRWRpdEJveCkge1xuXHRcdHBlbmRpbmdFZGl0Qm94ID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtYm94IGRpc2FtYXNzaXN0LXBlbmRpbmdlZGl0Ym94Jyk7XG5cdFx0cGVuZGluZ0VkaXRCb3hUZXh0ID0gJCgnPGRpdj4nKTtcblx0XHRwZW5kaW5nRWRpdEJveC5hcHBlbmQocGVuZGluZ0VkaXRCb3hUZXh0KS5oaWRlKCk7XG5cdFx0aWYgKGVkaXRMaW1pdCkge1xuXHRcdFx0cGVuZGluZ0VkaXRCb3guYXBwZW5kKCQoJzxkaXY+JykudGV4dChtZXNzYWdlcy5wZW5kaW5nRWRpdEJveExpbWl0ZWQpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1zdWJ0aXRsZScpKTtcblx0XHR9XG5cdFx0JGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCcpLmJlZm9yZShwZW5kaW5nRWRpdEJveCk7XG5cdFx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0fVxuXHRpZiAoc2hvdykge1xuXHRcdHBlbmRpbmdFZGl0Qm94LmZhZGVJbigpO1xuXHR9IGVsc2Uge1xuXHRcdHBlbmRpbmdFZGl0Qm94LmZhZGVPdXQoKTtcblx0fVxufTtcblxuY29uc3Qgbm90aWZ5Q29tcGxldGlvbiA9ICgpID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdGNvbnN0IG9sZFRpdGxlID0gZG9jdW1lbnQudGl0bGU7XG5cdGRvY3VtZW50LnRpdGxlID0gbWVzc2FnZXMubm90aWZ5Q2hhcmFjdGVyICsgZG9jdW1lbnQudGl0bGU7XG5cdCRib2R5Lm9uZSgnbW91c2Vtb3ZlJywgKCkgPT4ge1xuXHRcdGRvY3VtZW50LnRpdGxlID0gb2xkVGl0bGU7XG5cdH0pO1xufTtcblxuLyogVXBkYXRlIHRoZSBkaXNwbGF5ZWQgaW5mb3JtYXRpb24gdG8gbWF0Y2ggdGhlIGN1cnJlbnQgbGluay8qICogb3IgbGFjayB0aGVyZW9mICovXG5jb25zdCB1cGRhdGVDb250ZXh0ID0gKCkgPT4ge1xuXHR1cGRhdGVFZGl0Q291bnRlcigpO1xuXHRpZiAoY3VycmVudExpbmspIHtcblx0XHR1aS5wYWdlVGl0bGVMaW5lLmh0bWwoXG5cdFx0XHRtZXNzYWdlcy5wYWdlVGl0bGVMaW5lXG5cdFx0XHRcdC5yZXBsYWNlKFxuXHRcdFx0XHRcdCckMScsXG5cdFx0XHRcdFx0bXcudXRpbC5nZXRVcmwoY3VycmVudFBhZ2VUaXRsZSwge1xuXHRcdFx0XHRcdFx0cmVkaXJlY3Q6ICdubycsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0XHQucmVwbGFjZSgnJDInLCBtdy5odG1sLmVzY2FwZShjdXJyZW50UGFnZVRpdGxlKSlcblx0XHQpO1xuXHRcdGNvbnN0IGNvbnRleHQgPSBleHRyYWN0Q29udGV4dChjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCwgY3VycmVudExpbmspO1xuXHRcdHVpLmNvbnRleHRcblx0XHRcdC5lbXB0eSgpXG5cdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLnRleHQoY29udGV4dFswXSkpXG5cdFx0XHQuYXBwZW5kKCQoJzxzcGFuPicpLnRleHQoY29udGV4dFsxXSkuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWluY2xpbmsnKSlcblx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykudGV4dChjb250ZXh0WzJdKSk7XG5cdFx0Y29uc3QgbnVtTGluZXMgPSBNYXRoLmNlaWwodWkuY29udGV4dC5oZWlnaHQoKSAvIE51bWJlci5wYXJzZUZsb2F0KHVpLmNvbnRleHQuY3NzKCdsaW5lLWhlaWdodCcpKSk7XG5cdFx0aWYgKG51bUxpbmVzIDwgY2ZnLm51bUNvbnRleHRMaW5lcykge1xuXHRcdFx0Ly8gQWRkIGNmZy5udW1Db250ZXh0TGluZXMgLSBudW1MaW5lcyArIDEgbGluZSBicmVha3MsIHNvIHRoYXQgdGhlIHRvdGFsIG51bWJlclxuXHRcdFx0Ly8gb2YgbGluZXMgaXMgY2ZnLm51bUNvbnRleHRMaW5lc1xuXHRcdFx0dWkuY29udGV4dC5hcHBlbmQoXG5cdFx0XHRcdEFycmF5LmZyb20oe1xuXHRcdFx0XHRcdGxlbmd0aDogY2ZnLm51bUNvbnRleHRMaW5lcyAtIG51bUxpbmVzICsgMixcblx0XHRcdFx0fSkuam9pbignPGJyPicpXG5cdFx0XHQpO1xuXHRcdH1cblx0XHR0b2dnbGVGaW5pc2hlZE1lc3NhZ2UoZmFsc2UpO1xuXHRcdHVpLnVuZG9CdXR0b24ucHJvcCgnZGlzYWJsZWQnLCAhcGFnZUNoYW5nZXMubGVuZ3RoKTtcblx0XHR1aS5yZW1vdmVMaW5rQnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgY3VycmVudFBhZ2VQYXJhbWV0ZXJzLnJlZGlyZWN0KTtcblx0XHR1aS5pbnRlbnRpb25hbExpbmtCdXR0b24ucHJvcCgnZGlzYWJsZWQnLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMucmVkaXJlY3QpO1xuXHRcdHVpLmRpc2FtTmVlZGVkQnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgY3VycmVudFBhZ2VQYXJhbWV0ZXJzLnJlZGlyZWN0IHx8IGN1cnJlbnRMaW5rLmhhc0Rpc2FtVGVtcGxhdGUpO1xuXHRcdGNob29zaW5nID0gdHJ1ZTtcblx0fSBlbHNlIHtcblx0XHR0b2dnbGVGaW5pc2hlZE1lc3NhZ2UodHJ1ZSk7XG5cdH1cbn07XG5cbi8qIFVwZGF0ZSB0aGUgY291bnQgb2YgcGVuZGluZyBjaGFuZ2VzICovXG5jb25zdCB1cGRhdGVFZGl0Q291bnRlciA9ICgpID0+IHtcblx0aWYgKHVpLnBlbmRpbmdFZGl0Q291bnRlcikge1xuXHRcdHVpLnBlbmRpbmdFZGl0Q291bnRlci50ZXh0KFxuXHRcdFx0bWVzc2FnZXMucGVuZGluZ0VkaXRDb3VudGVyLnJlcGxhY2UoJyQxJywgZWRpdENvdW50KS5yZXBsYWNlKCckMicsIGNvdW50QWN0dWFsbHlDaGFuZ2VkRnVsbHlDaGVja2VkUGFnZXMoKSlcblx0XHQpO1xuXHR9XG5cdGlmIChwZW5kaW5nRWRpdEJveCkge1xuXHRcdGlmIChlZGl0Q291bnQgPT09IDAgJiYgIXJ1bm5pbmcpIHtcblx0XHRcdHRvZ2dsZVBlbmRpbmdFZGl0Qm94KGZhbHNlKTtcblx0XHRcdG5vdGlmeUNvbXBsZXRpb24oKTtcblx0XHR9XG5cdFx0bGV0IHRleHRDb250ZW50ID0gZWRpdENvdW50O1xuXHRcdGlmIChlZGl0TGltaXQpIHtcblx0XHRcdHRleHRDb250ZW50ID0gbWVzc2FnZXMucGVuZGluZ0VkaXRCb3hUaW1lRXN0aW1hdGlvblxuXHRcdFx0XHQucmVwbGFjZSgnJDEnLCBlZGl0Q291bnQpXG5cdFx0XHRcdC5yZXBsYWNlKCckMicsIHNlY29uZHNUb0hITU1TUyhjZmcuZWRpdENvb2xkb3duICogZWRpdENvdW50KSk7XG5cdFx0fVxuXHRcdHBlbmRpbmdFZGl0Qm94VGV4dC50ZXh0KG1lc3NhZ2VzLnBlbmRpbmdFZGl0Qm94LnJlcGxhY2UoJyQxJywgdGV4dENvbnRlbnQpKTtcblx0fVxufTtcblxuLyogQXBwbHkgdGhlIGNoYW5nZXMgbWFkZSB0byBhbiBcIm9yaWdpblwiIHBhZ2UvKiAqIHBhZ2VDaGFuZ2U6IENoYW5nZSB0aGF0IHdpbGwgYmUgc2F2ZWQgKi9cbmNvbnN0IGFwcGx5Q2hhbmdlID0gKHBhZ2VDaGFuZ2UpID0+IHtcblx0aWYgKHBhZ2VDaGFuZ2UucGFnZS5jb250ZW50ICE9PSBwYWdlQ2hhbmdlLmNvbnRlbnRCZWZvcmVbMF0pIHtcblx0XHRlZGl0Q291bnQrKztcblx0XHRjb25zdCBjaGFuZ2VTdW1tYXJpZXMgPSBwYWdlQ2hhbmdlLnN1bW1hcnkuam9pbihtZXNzYWdlcy5zdW1tYXJ5U2VwYXJhdG9yKTtcblx0XHRjb25zdCBzdW1tYXJ5ID0gbWVzc2FnZXMuc3VtbWFyeS5yZXBsYWNlKCckMScsIGdldFRhcmdldFBhZ2UoKSkucmVwbGFjZSgnJDInLCBjaGFuZ2VTdW1tYXJpZXMpO1xuXHRcdGNvbnN0IHNhdmUgPSBlZGl0TGltaXQgPyBzYXZlV2l0aENvb2xkb3duIDogc2F2ZVBhZ2U7XG5cdFx0c2F2ZShwYWdlQ2hhbmdlLnRpdGxlLCBwYWdlQ2hhbmdlLnBhZ2UsIHN1bW1hcnksIHRydWUsIHRydWUpXG5cdFx0XHQuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0aWYgKGVkaXRDb3VudCA+IDApIHtcblx0XHRcdFx0XHRlZGl0Q291bnQtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHR1cGRhdGVFZGl0Q291bnRlcigpO1xuXHRcdFx0fSlcblx0XHRcdC5mYWlsKGVycm9yKTtcblx0XHR1cGRhdGVFZGl0Q291bnRlcigpO1xuXHR9XG59O1xuXG4vKiBTYXZlIGFsbCB0aGUgcGVuZGluZyBjaGFuZ2VzICovXG5jb25zdCBhcHBseUFsbENoYW5nZXMgPSAoKSA9PiB7XG5cdGZvciAoY29uc3QgcGFnZUNoYW5nZSBvZiBwYWdlQ2hhbmdlcykge1xuXHRcdGFwcGx5Q2hhbmdlKHBhZ2VDaGFuZ2UpO1xuXHR9XG5cdHBhZ2VDaGFuZ2VzID0gW107XG59O1xuXG4vKiBSZWNvcmQgYSBuZXcgcGVuZGluZyBjaGFuZ2UvKiAqIHBhZ2VUaXRsZTogVGl0bGUgb2YgdGhlIHBhZ2UvKiAqIHBhZ2U6IENvbnRlbnQgb2YgdGhlIHBhZ2UvKiAqIG9sZENvbnRlbnQ6IENvbnRlbnQgb2YgdGhlIHBhZ2UgYmVmb3JlIHRoZSBjaGFuZ2UvKiAqIGxpbms6IExpbmsgdGhhdCBoYXMgYmVlbiBjaGFuZ2VkLyogKiBzdW1tYXJ5OiBDaGFuZ2Ugc3VtbWFyeSAqL1xuY29uc3QgYWRkQ2hhbmdlID0gKHBhZ2VUaXRsZSwgcGFnZSwgb2xkQ29udGVudCwgbGluaywgc3VtbWFyeSkgPT4ge1xuXHRpZiAoIXBhZ2VDaGFuZ2VzLmxlbmd0aCB8fCBwYWdlQ2hhbmdlcy5hdCgtMSkudGl0bGUgIT09IHBhZ2VUaXRsZSkge1xuXHRcdHBhZ2VDaGFuZ2VzW3BhZ2VDaGFuZ2VzLmxlbmd0aF0gPSB7XG5cdFx0XHR0aXRsZTogcGFnZVRpdGxlLFxuXHRcdFx0cGFnZSxcblx0XHRcdGNvbnRlbnRCZWZvcmU6IFtdLFxuXHRcdFx0bGlua3M6IFtdLFxuXHRcdFx0c3VtbWFyeTogW10sXG5cdFx0fTtcblx0fVxuXHRjb25zdCBsYXN0UGFnZUNoYW5nZSA9IHBhZ2VDaGFuZ2VzLmF0KC0xKTtcblx0bGFzdFBhZ2VDaGFuZ2UuY29udGVudEJlZm9yZVtsYXN0UGFnZUNoYW5nZS5jb250ZW50QmVmb3JlLmxlbmd0aF0gPSBvbGRDb250ZW50O1xuXHRsYXN0UGFnZUNoYW5nZS5saW5rc1tsYXN0UGFnZUNoYW5nZS5saW5rcy5sZW5ndGhdID0gbGluaztcblx0bGFzdFBhZ2VDaGFuZ2Uuc3VtbWFyeVtsYXN0UGFnZUNoYW5nZS5zdW1tYXJ5Lmxlbmd0aF0gPSBzdW1tYXJ5O1xufTtcblxuLyogQ2hlY2sgd2hldGhlciBhY3R1YWwgY2hhbmdlcyBhcmUgc3RvcmVkIGluIHRoZSBoaXN0b3J5IGFycmF5ICovXG5jb25zdCBjaGVja0FjdHVhbENoYW5nZXMgPSAoKSA9PiB7XG5cdHJldHVybiBjb3VudEFjdHVhbENoYW5nZXMoKSAhPT0gMDtcbn07XG5cbi8qIFJldHVybiB0aGUgbnVtYmVyIG9mIGVudHJpZXMgaW4gdGhlIGhpc3RvcnkgYXJyYXkgdGhhdCByZXByZXNlbnQgYWN0dWFsIGNoYW5nZXMgKi9cbmNvbnN0IGNvdW50QWN0dWFsQ2hhbmdlcyA9ICgpID0+IHtcblx0bGV0IGNoYW5nZUNvdW50ID0gMDtcblx0Zm9yIChjb25zdCBwYWdlQ2hhbmdlIG9mIHBhZ2VDaGFuZ2VzKSB7XG5cdFx0aWYgKHBhZ2VDaGFuZ2UucGFnZS5jb250ZW50ICE9PSBwYWdlQ2hhbmdlLmNvbnRlbnRCZWZvcmVbMF0pIHtcblx0XHRcdGNoYW5nZUNvdW50Kys7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBjaGFuZ2VDb3VudDtcbn07XG5cbi8qIFJldHVybiB0aGUgbnVtYmVyIG9mIGNoYW5nZWQgcGFnZXMgaW4gdGhlIGhpc3RvcnkgYXJyYXksIGlnbm9yaW5nIHRoZSBsYXN0IGVudHJ5LyogKiBpZiB3ZSBhcmVuJ3QgZG9uZSB3aXRoIHRoYXQgcGFnZSB5ZXQgKi9cbmNvbnN0IGNvdW50QWN0dWFsbHlDaGFuZ2VkRnVsbHlDaGVja2VkUGFnZXMgPSAoKSA9PiB7XG5cdGxldCBjaGFuZ2VDb3VudCA9IGNvdW50QWN0dWFsQ2hhbmdlcygpO1xuXHRpZiAocGFnZUNoYW5nZXMubGVuZ3RoKSB7XG5cdFx0Y29uc3QgbGFzdENoYW5nZSA9IHBhZ2VDaGFuZ2VzLmF0KC0xKTtcblx0XHRpZiAoXG5cdFx0XHRsYXN0Q2hhbmdlLnRpdGxlID09PSBjdXJyZW50UGFnZVRpdGxlICYmXG5cdFx0XHRjdXJyZW50TGluayAmJlxuXHRcdFx0bGFzdENoYW5nZS5wYWdlLmNvbnRlbnQgIT09IGxhc3RDaGFuZ2UuY29udGVudEJlZm9yZVswXVxuXHRcdCkge1xuXHRcdFx0Y2hhbmdlQ291bnQtLTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGNoYW5nZUNvdW50O1xufTtcblxuLyogRmluZCB0aGUgbGlua3MgdG8gZGlzYW1iaWd1YXRpb24gb3B0aW9ucyBpbiBhIGRpc2FtYmlndWF0aW9uIHBhZ2UgKi9cbmNvbnN0IGdldERpc2FtT3B0aW9ucyA9ICgpID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdHJldHVybiAkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0IGEnKS5maWx0ZXIoKF9pbmRleCwgZWxlbWVudCkgPT4ge1xuXHRcdHJldHVybiAhIWV4dHJhY3RQYWdlTmFtZSgkKGVsZW1lbnQpKTtcblx0fSk7XG59O1xuXG4vKiBTYXZlIGFsbCB0aGUgcGVuZGluZyBjaGFuZ2VzIGFuZCBjbG9zZSB0aGUgdG9vbCAqL1xuY29uc3Qgc2F2ZUFuZEVuZCA9ICgpID0+IHtcblx0YXBwbHlBbGxDaGFuZ2VzKCk7XG5cdGVuZCgpO1xufTtcblxuLyogQ2xvc2UgdGhlIHRvb2wgKi9cbmNvbnN0IGVuZCA9ICgpID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdGNvbnN0IGN1cnJlbnRUb29sVUkgPSB1aS5kaXNwbGF5O1xuXHRjaG9vc2luZyA9IGZhbHNlO1xuXHRydW5uaW5nID0gZmFsc2U7XG5cdHN0YXJ0TGluay5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcblx0JGJvZHkuZmluZCgnLmRpc2FtYXNzaXN0LW9wdGlvbm1hcmtlcicpLnJlbW92ZSgpO1xuXHRjdXJyZW50VG9vbFVJLmZhZGVPdXQoe1xuXHRcdGNvbXBsZXRlKCkge1xuXHRcdFx0Y3VycmVudFRvb2xVSS5yZW1vdmUoKTtcblx0XHRcdGlmIChlZGl0Q291bnQpIHtcblx0XHRcdFx0dG9nZ2xlUGVuZGluZ0VkaXRCb3godHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0fSk7XG59O1xuXG4vKiBEaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2UgKi9cbmNvbnN0IGVycm9yID0gKGVycm9yRGVzY3JpcHRpb24pID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdGNvbnN0IGVycm9yQm94ID0gJCgnPGRpdj4nKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtYm94IGRpc2FtYXNzaXN0LWVycm9yYm94Jyk7XG5cdGVycm9yQm94LnRleHQobWVzc2FnZXMuZXJyb3IucmVwbGFjZSgnJDEnLCBlcnJvckRlc2NyaXB0aW9uKSk7XG5cdGVycm9yQm94LmFwcGVuZChcblx0XHRjcmVhdGVCdXR0b24obWVzc2FnZXMuZGlzbWlzc0Vycm9yLCAoKSA9PiB7XG5cdFx0XHRlcnJvckJveC5mYWRlT3V0KCk7XG5cdFx0fSkuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWVycm9yYnV0dG9uJylcblx0KTtcblx0Y29uc3QgdWlJc0luUGxhY2UgPSB1aSAmJiAkLmNvbnRhaW5zKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgdWkuZGlzcGxheVswXSk7XG5cdGNvbnN0IG5leHRFbGVtZW50ID0gdWlJc0luUGxhY2UgPyB1aS5kaXNwbGF5IDogJGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCcpO1xuXHRuZXh0RWxlbWVudC5iZWZvcmUoZXJyb3JCb3gpO1xuXHRlcnJvckJveC5oaWRlKCkuZmFkZUluKCk7XG59O1xuXG4vKiBDaGFuZ2UgYSBsaW5rIHNvIHRoYXQgaXQgcG9pbnRzIHRvIHRoZSB0aXRsZS8qICogdGV4dDogVGhlIHdpa2l0ZXh0IG9mIHRoZSB3aG9sZSBwYWdlLyogKiB0aXRsZTogVGhlIG5ldyBkZXN0aW5hdGlvbiBvZiB0aGUgbGluay8qICogbGluazogVGhlIGxpbmsgdGhhdCB3aWxsIGJlIG1vZGlmaWVkLyogKiBleHRyYTogVGV4dCB0aGF0IHdpbGwgYmUgYWRkZWQgYWZ0ZXIgdGhlIGxpbmsgKG9wdGlvbmFsKSAqL1xuY29uc3QgcmVwbGFjZUxpbmsgPSAodGV4dCwgdGl0bGUsIGxpbmssIGV4dHJhKSA9PiB7XG5cdGxldCBuZXdDb250ZW50O1xuXHRpZiAoaXNTYW1lUGFnZSh0aXRsZSwgbGluay5kZXNjcmlwdGlvbikpIHtcblx0XHRuZXdDb250ZW50ID0gbGluay5kZXNjcmlwdGlvbjtcblx0fSBlbHNlIHtcblx0XHRuZXdDb250ZW50ID0gYCR7dGl0bGV9fCR7bGluay5kZXNjcmlwdGlvbn1gO1xuXHR9XG5cdGNvbnN0IGxpbmtTdGFydCA9IHRleHQuc2xpY2UoMCwgTWF0aC5tYXgoMCwgbGluay5zdGFydCkpO1xuXHRjb25zdCBsaW5rRW5kID0gdGV4dC5zbGljZShNYXRoLm1heCgwLCBsaW5rLmVuZCkpO1xuXHRyZXR1cm4gYCR7bGlua1N0YXJ0fVtbJHtuZXdDb250ZW50fV1dJHtsaW5rLmFmdGVyRGVzY3JpcHRpb259JHtleHRyYSB8fCAnJ30ke2xpbmtFbmR9YDtcbn07XG5cbi8qIFJlbW92ZSBhIGxpbmsgZnJvbSB0aGUgdGV4dC8qICogdGV4dDogVGhlIHdpa2l0ZXh0IG9mIHRoZSB3aG9sZSBwYWdlLyogKiBsaW5rOiBUaGUgbGluayB0aGF0IHdpbGwgYmUgcmVtb3ZlZCAqL1xuY29uc3QgcmVtb3ZlTGluayA9ICh0ZXh0LCBsaW5rKSA9PiB7XG5cdGNvbnN0IGxpbmtTdGFydCA9IHRleHQuc2xpY2UoMCwgTWF0aC5tYXgoMCwgbGluay5zdGFydCkpO1xuXHRjb25zdCBsaW5rRW5kID0gdGV4dC5zbGljZShNYXRoLm1heCgwLCBsaW5rLmVuZCkpO1xuXHRyZXR1cm4gbGlua1N0YXJ0ICsgbGluay5kZXNjcmlwdGlvbiArIGxpbmsuYWZ0ZXJEZXNjcmlwdGlvbiArIGxpbmtFbmQ7XG59O1xuXG4vKiBFeHRyYWN0IGEgbGluayBmcm9tIGEgc3RyaW5nIGluIHdpa2kgZm9ybWF0LC8qICogc3RhcnRpbmcgZnJvbSBhIGdpdmVuIGluZGV4LiBSZXR1cm4gYSBsaW5rIGlmIG9uZSBjYW4gYmUgZm91bmQsLyogKiBvdGhlcndpc2UgcmV0dXJuIG51bGwuIFRoZSBcImxpbmtcIiBpbmNsdWRlcyBcImRpc2FtYmlndWF0aW9uIG5lZWRlZFwiLyogKiB0ZW1wbGF0ZXMgaW5tZWRpYXRlbHkgZm9sbG93aW5nIHRoZSBsaW5rIHByb3Blci8qICogdGV4dDogVGV4dCBmcm9tIHdoaWNoIHRoZSBsaW5rIHdpbGwgYmUgZXh0cmFjdGVkLyogKiBsYXN0SW5kZXg6IEluZGV4IGZyb20gd2hpY2ggdGhlIHNlYXJjaCB3aWxsIHN0YXJ0ICovXG5jb25zdCBleHRyYWN0TGluayA9ICh0ZXh0LCBsYXN0SW5kZXgpID0+IHtcblx0Ly8gRklYTUU6IE5vdCBhbiBhY3R1YWwgdGl0bGUgcmVnZXggKGxvdHMgb2YgZmFsc2UgcG9zaXRpdmVzXG5cdC8vIGFuZCBzb21lIGZhbHNlIG5lZ2F0aXZlcyksIGJ1dCBob3BlZnVsbHkgZ29vZCBlbm91Z2guXG5cdGNvbnN0IHRpdGxlUmVnZXggPSAvXFxbXFxbKC4qPykoPzpcXHwoLio/KSk/XV0vZztcblx0Ly8gRGl0dG8gZm9yIHRoZSB0ZW1wbGF0ZSByZWdleC4gRGlzYW1iaWd1YXRpb24gbGluayB0ZW1wbGF0ZXNcblx0Ly8gc2hvdWxkIGJlIHNpbXBsZSBlbm91Z2ggZm9yIHRoaXMgbm90IHRvIG1hdHRlciwgdGhvdWdoLlxuXHRjb25zdCB0ZW1wbGF0ZVJlZ2V4ID0gL14oXFx3KltcXHMhKSwuOjs/fV0qKXt7XFxzKihbXnt8fV0rPylcXHMqKD86XFx8W157XSo/KT99fS87XG5cdHRpdGxlUmVnZXgubGFzdEluZGV4ID0gbGFzdEluZGV4O1xuXHRjb25zdCBtYXRjaCA9IHRpdGxlUmVnZXguZXhlYyh0ZXh0KTtcblx0aWYgKG1hdGNoICYmIG1hdGNoLmluZGV4ICE9PSAtMSkge1xuXHRcdGxldCBwb3NzaWJseUFtYmlndW91cyA9IHRydWU7XG5cdFx0bGV0IGhhc0Rpc2FtVGVtcGxhdGUgPSBmYWxzZTtcblx0XHRsZXQgX2VuZCA9IG1hdGNoLmluZGV4ICsgNCArIG1hdGNoWzFdLmxlbmd0aCArIChtYXRjaFsyXSA/IDEgKyBtYXRjaFsyXS5sZW5ndGggOiAwKTtcblx0XHRsZXQgYWZ0ZXJEZXNjcmlwdGlvbiA9ICcnO1xuXHRcdGNvbnN0IHJlc3QgPSB0ZXh0LnNsaWNlKE1hdGgubWF4KDAsIF9lbmQpKTtcblx0XHRjb25zdCB0ZW1wbGF0ZU1hdGNoID0gdGVtcGxhdGVSZWdleC5leGVjKHJlc3QpO1xuXHRcdGlmICh0ZW1wbGF0ZU1hdGNoKSB7XG5cdFx0XHRjb25zdCB0ZW1wbGF0ZVRpdGxlID0gZ2V0Q2Fub25pY2FsVGl0bGUodGVtcGxhdGVNYXRjaFsyXSk7XG5cdFx0XHRjb25zdCB7ZGlzYW1MaW5rVGVtcGxhdGVzfSA9IGNmZztcblx0XHRcdGNvbnN0IHtkaXNhbUxpbmtJZ25vcmVUZW1wbGF0ZXN9ID0gY2ZnO1xuXHRcdFx0aWYgKGRpc2FtTGlua1RlbXBsYXRlcy5pbmNsdWRlcyh0ZW1wbGF0ZVRpdGxlKSkge1xuXHRcdFx0XHRfZW5kICs9IHRlbXBsYXRlTWF0Y2hbMF0ubGVuZ3RoO1xuXHRcdFx0XHRhZnRlckRlc2NyaXB0aW9uID0gdGVtcGxhdGVNYXRjaFsxXS5yZXBsYWNlKC9cXHMkLywgJycpO1xuXHRcdFx0XHRoYXNEaXNhbVRlbXBsYXRlID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSBpZiAoZGlzYW1MaW5rSWdub3JlVGVtcGxhdGVzLmluY2x1ZGVzKHRlbXBsYXRlVGl0bGUpKSB7XG5cdFx0XHRcdHBvc3NpYmx5QW1iaWd1b3VzID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRzdGFydDogbWF0Y2guaW5kZXgsXG5cdFx0XHRlbmQ6IF9lbmQsXG5cdFx0XHRwb3NzaWJseUFtYmlndW91cyxcblx0XHRcdGhhc0Rpc2FtVGVtcGxhdGUsXG5cdFx0XHR0aXRsZTogbWF0Y2hbMV0sXG5cdFx0XHRkZXNjcmlwdGlvbjogbWF0Y2hbMl0gPz8gbWF0Y2hbMV0sXG5cdFx0XHRhZnRlckRlc2NyaXB0aW9uLFxuXHRcdH07XG5cdH1cbn07XG5cbi8qIEV4dHJhY3QgYSBsaW5rIHRvIG9uZSBvZiBhIG51bWJlciBvZiBkZXN0aW5hdGlvbiBwYWdlcyBmcm9tIGEgc3RyaW5nLyogKiAoXCJ0ZXh0XCIpIGluIHdpa2kgZm9ybWF0LCBzdGFydGluZyBmcm9tIGEgZ2l2ZW4gaW5kZXggKFwibGFzdEluZGV4XCIpLi8qICogXCJEaXNhbWJpZ3VhdGlvbiBuZWVkZWRcIiB0ZW1wbGF0ZXMgYXJlIGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlIGxpbmtzLi8qICogdGV4dDogUGFnZSBpbiB3aWtpIGZvcm1hdC8qICogZGVzdGluYXRpb25zOiBBcnJheSBvZiBwYWdlIHRpdGxlcyB0byBsb29rIGZvci8qICogbGFzdEluZGV4OiBJbmRleCBmcm9tIHdoaWNoIHRoZSBzZWFyY2ggd2lsbCBzdGFydCAqL1xuY29uc3QgZXh0cmFjdExpbmtUb1BhZ2UgPSAodGV4dCwgZGVzdGluYXRpb25zLCBsYXN0SW5kZXgpID0+IHtcblx0bGV0IGxpbms7XG5cdGxldCB0aXRsZTtcblx0ZG8ge1xuXHRcdGxpbmsgPSBleHRyYWN0TGluayh0ZXh0LCBsYXN0SW5kZXgpO1xuXHRcdGlmIChsaW5rKSB7XG5cdFx0XHRsYXN0SW5kZXggPSBsaW5rLmVuZDtcblx0XHRcdHRpdGxlID0gZ2V0Q2Fub25pY2FsVGl0bGUobGluay50aXRsZSk7XG5cdFx0fVxuXHR9IHdoaWxlIChsaW5rICYmICghbGluay5wb3NzaWJseUFtYmlndW91cyB8fCAhZGVzdGluYXRpb25zPy5pbmNsdWRlcyh0aXRsZSkpKTtcblx0cmV0dXJuIGxpbms7XG59O1xuXG4vKiBGaW5kIHRoZSBcInRhcmdldFwiIHBhZ2U6IGVpdGhlciB0aGUgb25lIHdlIGFyZSBpbiBvciB0aGUgXCJtYWluXCIgb25lIGZvdW5kIGJ5IGV4dHJhY3RpbmcvKiAqIHRoZSB0aXRsZSBmcm9tIFwiLiogKGRpc2FtYmlndWF0aW9uKVwiIG9yIHdoYXRldmVyIHRoZSBhcHByb3BpYXRlIGxvY2FsIGZvcm1hdCBpcyAqL1xuY29uc3QgZ2V0VGFyZ2V0UGFnZSA9ICgpID0+IHtcblx0Y29uc3QgdGl0bGUgPSBnZXRUaXRsZSgpO1xuXHRyZXR1cm4gZm9yY2VTYW1lUGFnZSA/IHRpdGxlIDogcmVtb3ZlRGlzYW0odGl0bGUpO1xufTtcblxuLyogR2V0IHRoZSBwYWdlIHRpdGxlLCB3aXRoIHRoZSBuYW1lc3BhY2UgcHJlZml4IGlmIGFueS4gKi9cbmNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuXHRjb25zdCB7d2dQYWdlTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cdHJldHVybiB3Z1BhZ2VOYW1lLnJlcGxhY2UoL18vZywgJyAnKTtcbn07XG5cbi8qIEV4dHJhY3QgYSBcIm1haW5cIiB0aXRsZSBmcm9tIFwiLiogKGRpc2FtYmlndWF0aW9uKVwiIG9yIHdoYXRldmVyIHRoZSBhcHByb3BpYXRlIGxvY2FsIGZvcm1hdCBpcyAqL1xuY29uc3QgcmVtb3ZlRGlzYW0gPSAodGl0bGUpID0+IHtcblx0Y29uc3QgbWF0Y2ggPSBuZXcgUmVnRXhwKGNmZy5kaXNhbVJlZ0V4cCkuZXhlYyh0aXRsZSk7XG5cdHJldHVybiBtYXRjaD8uWzFdID8/IHRpdGxlO1xufTtcblxuLyogQ2hlY2sgd2hldGhlciB0d28gcGFnZSB0aXRsZXMgYXJlIHRoZSBzYW1lICovXG5jb25zdCBpc1NhbWVQYWdlID0gKHRpdGxlMSwgdGl0bGUyKSA9PiB7XG5cdHJldHVybiBnZXRDYW5vbmljYWxUaXRsZSh0aXRsZTEpID09PSBnZXRDYW5vbmljYWxUaXRsZSh0aXRsZTIpO1xufTtcblxuLyogUmV0dXJuIHRoZSAnY2Fub25pY2FsIHRpdGxlJyBvZiBhIHBhZ2UgKi9cbmNvbnN0IGdldENhbm9uaWNhbFRpdGxlID0gKHRpdGxlKSA9PiB7XG5cdHRyeSB7XG5cdFx0Ly8gbXcuVGl0bGUgc2VlbXMgdG8gYmUgYnVnZ3ksIGFuZCBzb21lIHZhbGlkIHRpdGxlcyBhcmUgcmVqZWN0ZWRcblx0XHQvLyBGSVhNRTogVGhpcyBtYXkgY2F1c2UgZmFsc2UgbmVnYXRpdmVzXG5cdFx0dGl0bGUgPSBuZXcgbXcuVGl0bGUodGl0bGUpLmdldFByZWZpeGVkVGV4dCgpO1xuXHR9IGNhdGNoIHtcblx0XHQvKiBlbXB0eSAqL1xuXHR9XG5cdHJldHVybiB0aXRsZTtcbn07XG5cbi8qIEV4dHJhY3QgdGhlIGNvbnRleHQgYXJvdW5kIGEgZ2l2ZW4gbGluayBpbiBhIHRleHQgc3RyaW5nICovXG5jb25zdCBleHRyYWN0Q29udGV4dCA9ICh0ZXh0LCBsaW5rKSA9PiB7XG5cdGNvbnN0IGNvbnRleHRTdGFydCA9IGxpbmsuc3RhcnQgLSBjZmcucmFkaXVzO1xuXHRjb25zdCBjb250ZXh0RW5kID0gbGluay5lbmQgKyBjZmcucmFkaXVzO1xuXHRsZXQgY29udGV4dFByZXYgPSB0ZXh0LnNsaWNlKGNvbnRleHRTdGFydCwgbGluay5zdGFydCk7XG5cdGlmIChjb250ZXh0U3RhcnQgPiAwKSB7XG5cdFx0Y29udGV4dFByZXYgPSBtZXNzYWdlcy5lbGxpcHNpcyArIGNvbnRleHRQcmV2O1xuXHR9XG5cdGxldCBjb250ZXh0TmV4dCA9IHRleHQuc2xpY2UobGluay5lbmQsIGNvbnRleHRFbmQpO1xuXHRpZiAoY29udGV4dEVuZCA8IHRleHQubGVuZ3RoKSB7XG5cdFx0Y29udGV4dE5leHQgKz0gbWVzc2FnZXMuZWxsaXBzaXM7XG5cdH1cblx0cmV0dXJuIFtjb250ZXh0UHJldiwgdGV4dC5zbGljZShsaW5rLnN0YXJ0LCBsaW5rLmVuZCksIGNvbnRleHROZXh0XTtcbn07XG5cbi8qIEV4dHJhY3QgdGhlIHByZWZpeGVkIHBhZ2UgbmFtZSBmcm9tIGEgbGluayAqL1xuY29uc3QgZXh0cmFjdFBhZ2VOYW1lID0gKGxpbmspID0+IHtcblx0bGV0IHBhZ2VOYW1lID0gZXh0cmFjdFBhZ2VOYW1lUmF3KGxpbmspO1xuXHRpZiAocGFnZU5hbWUpIHtcblx0XHRjb25zdCBzZWN0aW9uUG9zID0gcGFnZU5hbWUuaW5kZXhPZignIycpO1xuXHRcdGxldCBzZWN0aW9uID0gJyc7XG5cdFx0aWYgKHNlY3Rpb25Qb3MgIT09IC0xKSB7XG5cdFx0XHRzZWN0aW9uID0gcGFnZU5hbWUuc2xpY2UoTWF0aC5tYXgoMCwgc2VjdGlvblBvcykpO1xuXHRcdFx0cGFnZU5hbWUgPSBwYWdlTmFtZS5zbGljZSgwLCBNYXRoLm1heCgwLCBzZWN0aW9uUG9zKSk7XG5cdFx0fVxuXHRcdHJldHVybiBnZXRDYW5vbmljYWxUaXRsZShwYWdlTmFtZSkgKyBzZWN0aW9uO1xuXHR9XG59O1xuXG4vKiBFeHRyYWN0IHRoZSBwYWdlIG5hbWUgZnJvbSBhIGxpbmssIGFzIGlzICovXG5jb25zdCBleHRyYWN0UGFnZU5hbWVSYXcgPSAobGluaykgPT4ge1xuXHRjb25zdCB7d2dTY3JpcHQsIHdnQXJ0aWNsZVBhdGh9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRpZiAoIWxpbmsuaGFzQ2xhc3MoJ2ltYWdlJykpIHtcblx0XHRjb25zdCBocmVmID0gbGluay5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKGxpbmsuaGFzQ2xhc3MoJ25ldycpKSB7XG5cdFx0XHQvLyBcIlJlZFwiIGxpbmtcblx0XHRcdGlmIChocmVmLmluY2x1ZGVzKHdnU2NyaXB0KSkge1xuXHRcdFx0XHRyZXR1cm4gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCd0aXRsZScsIGhyZWYpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCByZWdleCA9IHdnQXJ0aWNsZVBhdGgucmVwbGFjZSgnJDEnLCAnKC4qKScpO1xuXHRcdFx0Y29uc3QgcmVnZXhSZXN1bHQgPSBuZXcgUmVnRXhwKGBeJHtyZWdleH0kYCkuZXhlYyhocmVmKTtcblx0XHRcdGlmIChBcnJheS5pc0FycmF5KHJlZ2V4UmVzdWx0KSAmJiByZWdleFJlc3VsdC5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChyZWdleFJlc3VsdFsxXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vKiBDaGVjayB3aGV0aGVyIHRoaXMgaXMgYSBkaXNhbWJpZ3VhdGlvbiBwYWdlICovXG5jb25zdCBpc0Rpc2FtID0gKCkgPT4ge1xuXHRjb25zdCB7d2dDYXRlZ29yaWVzfSA9IG13LmNvbmZpZy5nZXQoKTtcblx0Y29uc3QgY2F0ZWdvcmllcyA9IHdnQ2F0ZWdvcmllcyA/PyBbXTtcblx0Zm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG5cdFx0Y29uc3Qge2Rpc2FtQ2F0ZWdvcmllc30gPSBjZmc7XG5cdFx0aWYgKGRpc2FtQ2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBzZWNvbmRzVG9ISE1NU1MgPSAodG90YWxTZWNvbmRzKSA9PiB7XG5cdGxldCBoaG1tc3MgPSAnJztcblx0Y29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kcyAvIDM2MDApO1xuXHRjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodG90YWxTZWNvbmRzICUgMzYwMCkgLyA2MCk7XG5cdGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKCh0b3RhbFNlY29uZHMgJSAzNjAwKSAlIDYwKTtcblx0aWYgKGhvdXJzID49IDEpIHtcblx0XHRoaG1tc3MgPSBgJHtwYWQoaG91cnMsICcwJywgMil9OmA7XG5cdH1cblx0aGhtbXNzICs9IGAke3BhZChtaW51dGVzLCAnMCcsIDIpfToke3BhZChzZWNvbmRzLCAnMCcsIDIpfWA7XG5cdHJldHVybiBoaG1tc3M7XG59O1xuXG5jb25zdCBwYWQgPSAoc3RyLCB6LCB3aWR0aCkgPT4ge1xuXHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcblx0aWYgKHN0ci5sZW5ndGggPj0gd2lkdGgpIHtcblx0XHRyZXR1cm4gc3RyO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0QXJyYXkuZnJvbSh7XG5cdFx0XHRsZW5ndGg6IHdpZHRoIC0gc3RyLmxlbmd0aCArIDEsXG5cdFx0fSkuam9pbih6KSArIHN0clxuXHQpO1xufTtcblxuLyogQ3JlYXRlIGEgbmV3IGJ1dHRvblxuICogdGV4dDogVGV4dCB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIG9uIHRoZSBidXR0b25cbiAqIG9uQ2xpY2s6IEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGVcbiAqIGJ1dHRvbiBpcyBjbGlja2VkXG4gKi9cbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9ICh0ZXh0LCBvbkNsaWNrKSA9PiB7XG5cdGNvbnN0IGJ1dHRvbiA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHR2YWx1ZTogdGV4dCxcblx0fSk7XG5cdGJ1dHRvbi5hZGRDbGFzcygnZGlzYW1hc3Npc3QtYnV0dG9uJykub24oJ2NsaWNrJywgb25DbGljayk7XG5cdHJldHVybiBidXR0b247XG59O1xuXG4vKiBHaXZlbiBhIHBhZ2UgdGl0bGUgYW5kIGFuIGFycmF5IG9mIHBvc3NpYmxlIHJlZGlyZWN0cyB7ZnJvbSwgdG99IChcImNhbm9uaWNhbCB0aXRsZXNcIiksIGZpbmQgdGhlIHBhZ2UvKiAqIGF0IHRoZSBlbmQgb2YgdGhlIHJlZGlyZWN0IGNoYWluLCBpZiB0aGVyZSBpcyBvbmUuIE90aGVyd2lzZSwgcmV0dXJuIHRoZSBwYWdlIHRpdGxlIHRoYXQgd2FzIHBhc3NlZCAqL1xuY29uc3QgcmVzb2x2ZVJlZGlyZWN0ID0gKHBhZ2VUaXRsZSwgcG9zc2libGVSZWRpcmVjdHMpID0+IHtcblx0bGV0IGFwcGxpZWRSZWRpcmVjdCA9IHRydWU7XG5cdGNvbnN0IHZpc2l0ZWRQYWdlcyA9IHt9O1xuXHRsZXQgY3VycmVudFBhZ2UgPSBnZXRDYW5vbmljYWxUaXRsZShwYWdlVGl0bGUpO1xuXHR3aGlsZSAoYXBwbGllZFJlZGlyZWN0KSB7XG5cdFx0YXBwbGllZFJlZGlyZWN0ID0gZmFsc2U7XG5cdFx0Zm9yIChjb25zdCBwb3NzaWJsZVJlZGlyZWN0IG9mIHBvc3NpYmxlUmVkaXJlY3RzKSB7XG5cdFx0XHRpZiAocG9zc2libGVSZWRpcmVjdC5mcm9tID09PSBjdXJyZW50UGFnZSkge1xuXHRcdFx0XHRpZiAodmlzaXRlZFBhZ2VzW3Bvc3NpYmxlUmVkaXJlY3QudG9dKSB7XG5cdFx0XHRcdFx0Ly8gUmVkaXJlY3QgY2hhaW4gZGV0ZWN0ZWRcblx0XHRcdFx0XHRyZXR1cm4gcGFnZVRpdGxlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZpc2l0ZWRQYWdlc1tjdXJyZW50UGFnZV0gPSB0cnVlO1xuXHRcdFx0XHRhcHBsaWVkUmVkaXJlY3QgPSB0cnVlO1xuXHRcdFx0XHRjdXJyZW50UGFnZSA9IHBvc3NpYmxlUmVkaXJlY3QudG87XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vIE5vIHJlZGlyZWN0IHJ1bGVzIGFwcGxpZWQgZm9yIGFuIGl0ZXJhdGlvbiBvZiB0aGUgb3V0ZXIgbG9vcDpcblx0Ly8gbm8gbW9yZSByZWRpcmVjdHMuIFdlIGFyZSBkb25lXG5cdHJldHVybiBjdXJyZW50UGFnZTtcbn07XG5cbi8qIEZldGNoIHRoZSBpbmNvbWluZyBsaW5rcyB0byBhIHBhZ2UuIFJldHVybnMgYSBqUXVlcnkgcHJvbWlzZS8qICogKHN1Y2Nlc3MgLSBhcnJheSBvZiB0aXRsZXMgb2YgcGFnZXMgdGhhdCBjb250YWluIGxpbmtzIHRvIHRoZSB0YXJnZXQgcGFnZSBhbmQvKiAqIGFycmF5IG9mIFwiY2Fub25pY2FsIHRpdGxlc1wiIG9mIHBvc3NpYmxlIGRlc3RpbmF0aW9ucyBvZiB0aGUgYmFja2xpbmtzIChlaXRoZXIvKiAqIHRoZSB0YXJnZXQgcGFnZSBvciByZWRpcmVjdHMgdG8gdGhlIHRhcmdldCBwYWdlKSwgZmFpbHVyZSAtIGVycm9yIGRlc2NyaXB0aW9uKS8qICogcGFnZTogVGFyZ2V0IHBhZ2UgKi9cbmNvbnN0IGdldEJhY2tsaW5rcyA9IChwYWdlKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRsaXN0OiAnYmFja2xpbmtzJyxcblx0XHRibHRpdGxlOiBwYWdlLFxuXHRcdGJscmVkaXJlY3Q6IHRydWUsXG5cdFx0YmxsaW1pdDogY2ZnLmJhY2tsaW5rTGltaXQsXG5cdFx0YmxuYW1lc3BhY2U6IGNmZy50YXJnZXROYW1lc3BhY2VzLmpvaW4oJ3wnKSxcblx0fTtcblx0YXBpLmdldChwYXJhbXMpXG5cdFx0LmRvbmUoKHtxdWVyeX0pID0+IHtcblx0XHRcdC8vIFRoZXJlIG1pZ2h0IGJlIGR1cGxpY2F0ZSBlbnRyaWVzIGluIHNvbWUgY29ybmVyIGNhc2VzLiBXZSBkb24ndCBjYXJlLFxuXHRcdFx0Ly8gc2luY2Ugd2UgYXJlIGdvaW5nIHRvIGNoZWNrIGxhdGVyLCBhbnl3YXlcblx0XHRcdGNvbnN0IGJhY2tsaW5rcyA9IFtdO1xuXHRcdFx0Y29uc3QgbGlua1RpdGxlcyA9IFtnZXRDYW5vbmljYWxUaXRsZShwYWdlKV07XG5cdFx0XHRjb25zdCBiYWNrbGlua3NRdWVyeSA9IHF1ZXJ5LmJhY2tsaW5rcztcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBiYWNrbGlua3NRdWVyeSkge1xuXHRcdFx0XHRiYWNrbGlua3NbYmFja2xpbmtzLmxlbmd0aF0gPSBlbGVtZW50LnRpdGxlO1xuXHRcdFx0XHRpZiAoIWVsZW1lbnQucmVkaXJsaW5rcykge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpbmtUaXRsZXNbbGlua1RpdGxlcy5sZW5ndGhdID0gZWxlbWVudC50aXRsZTtcblx0XHRcdFx0Y29uc3Qge3JlZGlybGlua3N9ID0gZWxlbWVudDtcblx0XHRcdFx0Zm9yIChjb25zdCB7dGl0bGV9IG9mIHJlZGlybGlua3MpIHtcblx0XHRcdFx0XHRiYWNrbGlua3NbYmFja2xpbmtzLmxlbmd0aF0gPSB0aXRsZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShiYWNrbGlua3MsIGxpbmtUaXRsZXMpO1xuXHRcdH0pXG5cdFx0LmZhaWwoKGNvZGUpID0+IHtcblx0XHRcdGRlZmVycmVkLnJlamVjdChtZXNzYWdlcy5nZXRCYWNrbGlua3NFcnJvci5yZXBsYWNlKCckMScsIGNvZGUpKTtcblx0XHR9KTtcblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIERvd25sb2FkIGEgbGlzdCBvZiByZWRpcmVjdHMgZm9yIHNvbWUgcGFnZXMuIFJldHVybnMgYSBqUXVlcnkgY2FsbGJhY2sgKHN1Y2Nlc3MgLS8qICogYXJyYXkgb2YgcmVkaXJlY3RzICh7ZnJvbSwgdG99KSwgZmFpbHVyZSAtIGVycm9yIGRlc2NyaXB0aW9uICkvKiAqIHBhZ2VUaXRsZXM6IEFycmF5IG9mIHBhZ2UgdGl0bGVzICovXG5jb25zdCBmZXRjaFJlZGlyZWN0cyA9IChwYWdlVGl0bGVzKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcblx0Y29uc3QgY3VycmVudFRpdGxlcyA9IHBhZ2VUaXRsZXMuc2xpY2UoMCwgY2ZnLnF1ZXJ5VGl0bGVMaW1pdCk7XG5cdGNvbnN0IHJlc3RUaXRsZXMgPSBwYWdlVGl0bGVzLnNsaWNlKGNmZy5xdWVyeVRpdGxlTGltaXQpO1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHRpdGxlczogY3VycmVudFRpdGxlcy5qb2luKCd8JyksXG5cdFx0cmVkaXJlY3RzOiB0cnVlLFxuXHR9O1xuXHRhcGkuZ2V0KHBhcmFtcylcblx0XHQuZG9uZSgoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0Y29uc3QgdGhlc2VSZWRpcmVjdHMgPSBxdWVyeS5yZWRpcmVjdHMgPz8gW107XG5cdFx0XHRpZiAocmVzdFRpdGxlcy5sZW5ndGgpIHtcblx0XHRcdFx0ZmV0Y2hSZWRpcmVjdHMocmVzdFRpdGxlcylcblx0XHRcdFx0XHQuZG9uZSgocmVkaXJlY3RzKSA9PiB7XG5cdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKFsuLi50aGVzZVJlZGlyZWN0cywgLi4ucmVkaXJlY3RzXSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuZmFpbCgoZGVzY3JpcHRpb24pID0+IHtcblx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChkZXNjcmlwdGlvbik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHRoZXNlUmVkaXJlY3RzKTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdC5mYWlsKChjb2RlKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZWplY3QobWVzc2FnZXMuZmV0Y2hSZWRpcmVjdHNFcnJvci5yZXBsYWNlKCckMScsIGNvZGUpKTtcblx0XHR9KTtcblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIERvd25sb2FkIHRoZSBsaXN0IG9mIHVzZXIgcmlnaHRzIGZvciB0aGUgY3VycmVudCB1c2VyLiBSZXR1cm5zIGEvKiAqIGpRdWVyeSBwcm9taXNlIChzdWNjZXNzIC0gYXJyYXkgb2YgcmlnaHQgbmFtZXMsIGVycm9yIC0gZXJyb3IgZGVzY3JpcHRpb24pICovXG5jb25zdCBmZXRjaFJpZ2h0cyA9ICgpID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkKCk7XG5cdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0bWV0YTogJ3VzZXJpbmZvJyxcblx0XHR1aXByb3A6ICdyaWdodHMnLFxuXHR9O1xuXHRhcGkuZ2V0KHBhcmFtcylcblx0XHQuZG9uZSgoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShxdWVyeS51c2VyaW5mby5yaWdodHMpO1xuXHRcdH0pXG5cdFx0LmZhaWwoKGNvZGUpID0+IHtcblx0XHRcdGRlZmVycmVkLnJlamVjdChtZXNzYWdlcy5mZXRjaFJpZ2h0c0Vycm9yLnJlcGxhY2UoJyQxJywgY29kZSkpO1xuXHRcdH0pO1xuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcblxuLyogTG9hZCB0aGUgcmF3IHBhZ2UgdGV4dCBmb3IgYSBnaXZlbiB0aXRsZS4gUmV0dXJucyBhIGpRdWVyeSBwcm9taXNlIChzdWNjZXNzIC0gcGFnZS8qICogY29udGVudCwgZmFpbHVyZSAtIGVycm9yIGRlc2NyaXB0aW9uKS8qICogcGFnZVRpdGxlOiBUaXRsZSBvZiB0aGUgcGFnZSAqL1xuY29uc3QgbG9hZFBhZ2UgPSAocGFnZVRpdGxlKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0dGl0bGVzOiBwYWdlVGl0bGUsXG5cdFx0cHJvcDogJ3JldmlzaW9ucycsXG5cdFx0cnZwcm9wOiAndGltZXN0YW1wfGNvbnRlbnQnLFxuXHRcdG1ldGE6ICd0b2tlbnMnLFxuXHRcdHR5cGU6ICdjc3JmJyxcblx0fTtcblx0YXBpLmdldChwYXJhbXMpXG5cdFx0LmRvbmUoKHtxdWVyeX0pID0+IHtcblx0XHRcdGNvbnN0IFtyYXdQYWdlXSA9IHF1ZXJ5LnBhZ2VzO1xuXHRcdFx0Y29uc3QgcGFnZSA9IHt9O1xuXHRcdFx0cGFnZS5yZWRpcmVjdCA9IHJhd1BhZ2UucmVkaXJlY3QgIT09IHVuZGVmaW5lZDtcblx0XHRcdHBhZ2UubWlzc2luZyA9IHJhd1BhZ2UubWlzc2luZyAhPT0gdW5kZWZpbmVkO1xuXHRcdFx0aWYgKHJhd1BhZ2UucmV2aXNpb25zKSB7XG5cdFx0XHRcdHBhZ2UuY29udGVudCA9IHJhd1BhZ2UucmV2aXNpb25zWzBdLmNvbnRlbnQ7XG5cdFx0XHRcdHBhZ2UuYmFzZVRpbWVTdGFtcCA9IHJhd1BhZ2UucmV2aXNpb25zWzBdLnRpbWVzdGFtcDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhZ2UuY29udGVudCA9ICcnO1xuXHRcdFx0XHRwYWdlLmJhc2VUaW1lU3RhbXAgPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0XHRwYWdlLnN0YXJ0VGltZVN0YW1wID0gcmF3UGFnZS5zdGFydHRpbWVzdGFtcDtcblx0XHRcdHBhZ2UuZWRpdFRva2VuID0gcXVlcnkudG9rZW5zLmNzcmZ0b2tlbjtcblx0XHRcdGRlZmVycmVkLnJlc29sdmUocGFnZSk7XG5cdFx0fSlcblx0XHQuZmFpbCgoY29kZSkgPT4ge1xuXHRcdFx0ZGVmZXJyZWQucmVqZWN0KG1lc3NhZ2VzLmxvYWRQYWdlRXJyb3IucmVwbGFjZSgnJDEnLCBwYWdlVGl0bGUpLnJlcGxhY2UoJyQyJywgY29kZSkpO1xuXHRcdH0pO1xuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcblxuLyogUmVnaXN0ZXIgY2hhbmdlcyB0byBhIHBhZ2UsIHRvIGJlIHNhdmVkIGxhdGVyLiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UvKiAqIChzdWNjZXNzIC0gbm8gcGFyYW1zLCBmYWlsdXJlIC0gZXJyb3IgZGVzY3JpcHRpb24pLiBUYWtlcyB0aGUgc2FtZSBwYXJhbWV0ZXJzLyogKiBhcyBzYXZlUGFnZSAqL1xuY29uc3Qgc2F2ZVdpdGhDb29sZG93biA9ICguLi5hcmdzKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcblx0cGVuZGluZ1NhdmVzW3BlbmRpbmdTYXZlcy5sZW5ndGhdID0ge1xuXHRcdGFyZ3MsXG5cdFx0ZGZkOiBkZWZlcnJlZCxcblx0fTtcblx0aWYgKCFydW5uaW5nU2F2ZXMpIHtcblx0XHRjaGVja0FuZFNhdmUoKTtcblx0fVxuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcblxuLyogU2F2ZSB0aGUgZmlyc3Qgc2V0IG9mIGNoYW5nZXMgaW4gdGhlIGxpc3Qgb2YgcGVuZGluZyBjaGFuZ2VzLCBwcm92aWRpbmcgdGhhdC8qICogZW5vdWdoIHRpbWUgaGFzIHBhc3NlZCBzaW5jZSB0aGUgbGFzdCBlZGl0ICovXG5jb25zdCBjaGVja0FuZFNhdmUgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICghcGVuZGluZ1NhdmVzLmxlbmd0aCkge1xuXHRcdHJ1bm5pbmdTYXZlcyA9IGZhbHNlO1xuXHRcdHJldHVybjtcblx0fVxuXHRydW5uaW5nU2F2ZXMgPSB0cnVlO1xuXHRjb25zdCBtaWxsaXNTaW5jZUxhc3QgPSBEYXRlLm5vdygpIC0gbGFzdEVkaXRNaWxsaXM7XG5cdGlmIChtaWxsaXNTaW5jZUxhc3QgPCBjZmcuZWRpdENvb2xkb3duICogMTAwMCkge1xuXHRcdHNldFRpbWVvdXQoY2hlY2tBbmRTYXZlLCBjZmcuZWRpdENvb2xkb3duICogMTAwMCAtIG1pbGxpc1NpbmNlTGFzdCk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gVGhlIGxhc3QgZWRpdCBzdGFydGVkIGF0IGxlYXN0IGNmZy5lZGl0Q29vbGRvd24gc2Vjb25kcyBhZ29cblx0XHRjb25zdCBzYXZlID0gcGVuZGluZ1NhdmVzLnNoaWZ0KCk7XG5cdFx0c2F2ZVBhZ2Vcblx0XHRcdC5hcHBseSh0aGlzLCBzYXZlLmFyZ3MpXG5cdFx0XHQuZG9uZSgoKSA9PiB7XG5cdFx0XHRcdGNoZWNrQW5kU2F2ZSgpO1xuXHRcdFx0XHRzYXZlLmRmZC5yZXNvbHZlKCk7XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoKGRlc2NyaXB0aW9uKSA9PiB7XG5cdFx0XHRcdGNoZWNrQW5kU2F2ZSgpO1xuXHRcdFx0XHRzYXZlLmRmZC5yZWplY3QoZGVzY3JpcHRpb24pO1xuXHRcdFx0fSk7XG5cdFx0Ly8gV2UnbGwgdXNlIHRoZSB0aW1lIHNpbmNlIHRoZSBsYXN0IGVkaXQgc3RhcnRlZFxuXHRcdGxhc3RFZGl0TWlsbGlzID0gRGF0ZS5ub3coKTtcblx0fVxufTtcblxuLyogU2F2ZSB0aGUgY2hhbmdlcyBtYWRlIHRvIGEgcGFnZS4gUmV0dXJucyBhIGpRdWVyeSBwcm9taXNlIChzdWNjZXNzIC0gbm8gcGFyYW1zLC8qICogZmFpbHVyZSAtIGVycm9yIGRlc2NyaXB0aW9uKS8qICogcGFnZVRpdGxlOiBUaXRsZSBvZiB0aGUgcGFnZS8qICogcGFnZTogUGFnZSBkYXRhLyogKiBzdW1tYXJ5OiBTdW1tYXJ5IG9mIHRoZSBjaGFuZ2VzIG1hZGUgdG8gdGhlIHBhZ2UvKiAqIG1pbm9yRWRpdDogV2hldGhlciB0byBtYXJrIHRoZSBlZGl0IGFzICdtaW5vcicvKiAqIGJvdEVkaXQ6IFdoZXRoZXIgdG8gbWFyayB0aGUgZWRpdCBhcyAnYm90JyAqL1xuY29uc3Qgc2F2ZVBhZ2UgPSAocGFnZVRpdGxlLCB7ZWRpdFRva2VuLCBjb250ZW50LCBiYXNlVGltZVN0YW1wLCBzdGFydFRpbWVTdGFtcH0sIHN1bW1hcnksIG1pbm9yRWRpdCwgYm90RWRpdCkgPT4ge1xuXHRjb25zdCBkZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XG5cdGNvbnN0IHBhcmFtcyA9IHtcblx0XHRhY3Rpb246ICdlZGl0Jyxcblx0XHR0aXRsZTogcGFnZVRpdGxlLFxuXHRcdHRva2VuOiBlZGl0VG9rZW4sXG5cdFx0dGV4dDogY29udGVudCxcblx0XHRiYXNldGltZXN0YW1wOiBiYXNlVGltZVN0YW1wLFxuXHRcdHN0YXJ0dGltZXN0YW1wOiBzdGFydFRpbWVTdGFtcCxcblx0XHRzdW1tYXJ5LFxuXHRcdHdhdGNobGlzdDogY2ZnLndhdGNoLFxuXHRcdG1pbm9yOiBtaW5vckVkaXQsXG5cdFx0Ym90OiBib3RFZGl0LFxuXHR9O1xuXHRhcGkucG9zdChwYXJhbXMpXG5cdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSgpO1xuXHRcdH0pXG5cdFx0LmZhaWwoKGNvZGUpID0+IHtcblx0XHRcdGRlZmVycmVkLnJlamVjdChtZXNzYWdlcy5zYXZlUGFnZUVycm9yLnJlcGxhY2UoJyQxJywgcGFnZVRpdGxlKS5yZXBsYWNlKCckMicsIGNvZGUpKTtcblx0XHR9KTtcblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbmV4cG9ydCB7aW5zdGFsbH07XG4iLCAiLyoqXG4gKiBEaXNhbUFzc2lzdDogYSB0b29sIGZvciByZXBhaXJpbmcgbGlua3MgZnJvbSBhcnRpY2xlcyB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlcy5cbiAqIOeUsVF3ZXJ0eXl0cmV3cXF3ZXJ0eeacgOWIneiuvuiuoe+8mkNDIEJZLVNBIDMuMFxuICog55SxR1pXRGVy5pys5Zyw5YyW77yaMjAyMC0wOC0xOSBDQyBCWS1TQSAzLjBcbiAqIOeUseWSjOW5s+Wli+aWl+aVkeWcsOeQg+eojeS9nOe/u+ivkSAyMDIxLTA1LTE1IENDIEJZLVNBIDMuMFxuICog5rGC6Ze755m+56eRTmp6anrnroDkvZPljJYgMjAyMi0yLTE0IENDIEJZLVNBIDQuMFxuICovXG5pbXBvcnQgJy4vRGlzYW1Bc3Npc3QubGVzcyc7XG5cbmltcG9ydCB7aW5zdGFsbH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG4kKGluc3RhbGwpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUEsNkZBQUFBLFNBQUE7QUFBQTtBQUNBLFFBQUksUUFBUSxTQUFVLElBQUk7QUFDeEIsYUFBTyxNQUFNLEdBQUcsU0FBUyxRQUFRO0FBQUEsSUFDbkM7QUFHQSxJQUFBQSxRQUFPO0FBQUEsSUFFTCxNQUFNLE9BQU8sY0FBYyxZQUFZLFVBQVUsS0FDakQsTUFBTSxPQUFPLFVBQVUsWUFBWSxNQUFNO0FBQUEsSUFFekMsTUFBTSxPQUFPLFFBQVEsWUFBWSxJQUFJLEtBQ3JDLE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTSxLQUN6QyxNQUFNLE9BQU8sV0FBUSxZQUFZLE9BQUk7QUFBQSxJQUVwQywyQkFBWTtBQUFFLGFBQU87QUFBQSxJQUFNLEVBQUcsS0FBSyxTQUFTLGFBQWEsRUFBRTtBQUFBO0FBQUE7OztBQ2Y5RDtBQUFBLHVGQUFBQyxTQUFBO0FBQUE7QUFDQSxJQUFBQSxR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TixlQUFlbEI7SUFDZkcsZ0JBQWdCRDtJQUNoQnhVO0lBQ0F5VixXQUFXNVksSUFBSWlCO0lBQ2Y0WCxPQUFPTDtJQUNQTSxLQUFLTDtFQUNOO0FBQ0EzWSxNQUFJaVosS0FBS3JELE1BQU0sRUFDYjdMLEtBQUssTUFBTTtBQUNYbUIsYUFBU0UsUUFBUTtFQUNsQixDQUFDLEVBQ0FILEtBQU0wTCxVQUFTO0FBQ2Z6TCxhQUFTMEwsT0FBT3hWLFNBQVMyQixjQUFjd0ksUUFBUSxNQUFNNEIsU0FBUyxFQUFFNUIsUUFBUSxNQUFNb0wsSUFBSSxDQUFDO0VBQ3BGLENBQUM7QUFDRixTQUFPekwsU0FBU1ksUUFBUTtBQUN6Qjs7QUNwZ0NBeEcsRUFBRU4sT0FBTzsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgIm1vZHVsZSIsICJlcnJvciIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZXJyb3IiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgImVycm9yIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJTeW1ib2wiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJkb2N1bWVudCIsICJtb2R1bGUiLCAiZXJyb3IiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJlcnJvciIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsVGhpcyIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIlR5cGVFcnJvciIsICJtb2R1bGUiLCAiZXJyb3IiLCAibW9kdWxlIiwgImVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbFRoaXMiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJlcnJvciIsICJtb2R1bGUiLCAibW9kdWxlIiwgIiQiLCAiZXJyb3IiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNmZyIsICJkaXNhbUNhdGVnb3JpZXMiLCAiZGlzYW1MaW5rVGVtcGxhdGVzIiwgImRpc2FtTGlua0lnbm9yZVRlbXBsYXRlcyIsICJkaXNhbUZvcm1hdCIsICJkaXNhbVJlZ0V4cCIsICJkaXNhbU5lZWRlZFRleHQiLCAiY29uY2F0IiwgInJlZGlyZWN0VG9EaXNhbSIsICJpbnRlbnRpb25hbExpbmtPcHRpb24iLCAidGFyZ2V0TmFtZXNwYWNlcyIsICJiYWNrbGlua0xpbWl0IiwgInF1ZXJ5VGl0bGVMaW1pdCIsICJyYWRpdXMiLCAibnVtQ29udGV4dExpbmVzIiwgImhpc3RvcnlTaXplIiwgImVkaXRDb29sZG93biIsICJ3YXRjaCIsICJtZXNzYWdlcyIsICJzdGFydCIsICJzdGFydE1haW4iLCAic3RhcnRTYW1lIiwgImNsb3NlIiwgInVuZG8iLCAib21pdCIsICJyZWZyZXNoIiwgInRpdGxlQXNUZXh0IiwgImRpc2FtTmVlZGVkIiwgImludGVudGlvbmFsTGluayIsICJ0aXRsZUFzVGV4dFByb21wdCIsICJyZW1vdmVMaW5rIiwgIm9wdGlvbk1hcmtlciIsICJ0YXJnZXRPcHRpb25NYXJrZXIiLCAicmVkaXJlY3RPcHRpb25NYXJrZXIiLCAicGFnZVRpdGxlTGluZSIsICJub01vcmVMaW5rcyIsICJwZW5kaW5nRWRpdENvdW50ZXIiLCAicGVuZGluZ0VkaXRCb3giLCAicGVuZGluZ0VkaXRCb3hUaW1lRXN0aW1hdGlvbiIsICJwZW5kaW5nRWRpdEJveExpbWl0ZWQiLCAiZXJyb3IiLCAiZmV0Y2hSZWRpcmVjdHNFcnJvciIsICJnZXRCYWNrbGlua3NFcnJvciIsICJmZXRjaFJpZ2h0c0Vycm9yIiwgImxvYWRQYWdlRXJyb3IiLCAic2F2ZVBhZ2VFcnJvciIsICJkaXNtaXNzRXJyb3IiLCAicGVuZGluZyIsICJlZGl0SW5Qcm9ncmVzcyIsICJlbGxpcHNpcyIsICJub3RpZnlDaGFyYWN0ZXIiLCAic3VtbWFyeSIsICJzdW1tYXJ5Q2hhbmdlZCIsICJzdW1tYXJ5T21pdHRlZCIsICJzdW1tYXJ5UmVtb3ZlZCIsICJzdW1tYXJ5SW50ZW50aW9uYWwiLCAic3VtbWFyeUhlbHBOZWVkZWQiLCAic3VtbWFyeVNlcGFyYXRvciIsICJyZWRpcmVjdFN1bW1hcnkiLCAic3RhcnRMaW5rIiwgInVpIiwgImxpbmtzIiwgInBhZ2VDaGFuZ2VzIiwgImN1cnJlbnRQYWdlVGl0bGUiLCAiY3VycmVudFBhZ2VQYXJhbWV0ZXJzIiwgImN1cnJlbnRMaW5rIiwgInBvc3NpYmxlQmFja2xpbmtEZXN0aW5hdGlvbnMiLCAiZm9yY2VTYW1lUGFnZSIsICJydW5uaW5nIiwgImNob29zaW5nIiwgImNhbk1hcmtJbnRlbnRpb25hbExpbmtzIiwgImRpc3BsYXllZFBhZ2VzIiwgImVkaXRDb3VudCIsICJlZGl0TGltaXQiLCAicGVuZGluZ1NhdmVzIiwgInBlbmRpbmdFZGl0Qm94VGV4dCIsICJsYXN0RWRpdE1pbGxpcyIsICJydW5uaW5nU2F2ZXMiLCAiaW5zdGFsbCIsICJ3Z0FjdGlvbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgImlzRGlzYW0iLCAiJCIsICJwb3J0bGV0SWQiLCAiZG9jdW1lbnQiLCAicXVlcnlTZWxlY3RvciIsICJSZWdFeHAiLCAidGVzdCIsICJnZXRUaXRsZSIsICJzdGFydE1haW5MaW5rIiwgInV0aWwiLCAiYWRkUG9ydGxldExpbmsiLCAib24iLCAic3RhcnRTYW1lTGluayIsICJhZGQiLCAiZW5zdXJlREFCRXhpc3RzIiwgInRoZW4iLCAiY2FuTWFyayIsICJjcmVhdGVVSSIsICJhZGRVbmxvYWRDb25maXJtIiwgIm1hcmtEaXNhbU9wdGlvbnMiLCAiY2hlY2tFZGl0TGltaXQiLCAidG9nZ2xlUGVuZGluZ0VkaXRCb3giLCAiZG9QYWdlIiwgIiRib2R5IiwgImRpc3BsYXkiLCAiYWRkQ2xhc3MiLCAiZmluaXNoZWRNZXNzYWdlIiwgInRleHQiLCAiaGlkZSIsICJjb250ZXh0IiwgInVuZG9CdXR0b24iLCAiY3JlYXRlQnV0dG9uIiwgIm9taXRCdXR0b24iLCAiZW5kQnV0dG9uIiwgInNhdmVBbmRFbmQiLCAicmVmcmVzaEJ1dHRvbiIsICJ0aXRsZUFzVGV4dEJ1dHRvbiIsICJjaG9vc2VUaXRsZUZyb21Qcm9tcHQiLCAiaW50ZW50aW9uYWxMaW5rQnV0dG9uIiwgImNob29zZUludGVudGlvbmFsTGluayIsICJkaXNhbU5lZWRlZEJ1dHRvbiIsICJjaG9vc2VEaXNhbU5lZWRlZCIsICJyZW1vdmVMaW5rQnV0dG9uIiwgImNob29zZUxpbmtSZW1vdmFsIiwgInRvcCIsICJhcHBlbmQiLCAibGVmdEJ1dHRvbnMiLCAicmlnaHRCdXR0b25zIiwgImFsbEJ1dHRvbnMiLCAidXBkYXRlRWRpdENvdW50ZXIiLCAidG9nZ2xlQWN0aW9uQnV0dG9ucyIsICJmaW5kIiwgImJlZm9yZSIsICJmYWRlSW4iLCAid2luZG93IiwgImNoZWNrQWN0dWFsQ2hhbmdlcyIsICJvcHRpb25QYWdlVGl0bGVzIiwgIm9wdGlvbk1hcmtlcnMiLCAiZ2V0RGlzYW1PcHRpb25zIiwgImVhY2giLCAiX2luZGV4IiwgImVsZW1lbnQiLCAibGluayIsICJ0aXRsZSIsICJleHRyYWN0UGFnZU5hbWUiLCAiYXR0ciIsICJldiIsICJwcmV2ZW50RGVmYXVsdCIsICJjaG9vc2VSZXBsYWNlbWVudCIsICJhZnRlciIsICJsZW5ndGgiLCAidGFyZ2V0UGFnZSIsICJnZXRUYXJnZXRQYWdlIiwgImZldGNoUmVkaXJlY3RzIiwgImRvbmUiLCAicmVkaXJlY3RzIiwgImVuZFRhcmdldFBhZ2UiLCAicmVzb2x2ZVJlZGlyZWN0IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJlbnRyaWVzIiwgIl9zdGVwIiwgInMiLCAibiIsICJpaSIsICJvcHRpb25QYWdlVGl0bGUiLCAidmFsdWUiLCAiZW5kT3B0aW9uVGl0bGUiLCAiaXNTYW1lUGFnZSIsICJlcnIiLCAiZSIsICJmIiwgImZhaWwiLCAiZGVmZXJyZWQiLCAiRGVmZXJyZWQiLCAicmVzb2x2ZSIsICJleGVjIiwgImRpc2FtVGl0bGUiLCAicmVwbGFjZSIsICJsb2FkUGFnZSIsICJwYWdlIiwgIm1pc3NpbmciLCAiY29udGVudCIsICJzYXZlUGFnZSIsICJkZXNjcmlwdGlvbiIsICJwcm9taXNlIiwgImZldGNoUmlnaHRzIiwgInJpZ2h0cyIsICJpbmNsdWRlcyIsICJhbHdheXMiLCAiYXBwbHlDaGFuZ2UiLCAic2hpZnQiLCAiZGF0YSIsICJkb0xpbmsiLCAiZ2V0QmFja2xpbmtzIiwgImJhY2tsaW5rcyIsICJwYWdlVGl0bGVzIiwgIl9pIiwgIl9wZW5kaW5nU2F2ZXMiLCAiZWwiLCAiZmlsdGVyIiwgInQiLCAicmVtb3ZlRGlzYW0iLCAidXBkYXRlQ29udGV4dCIsICJleHRyYWN0TGlua1RvUGFnZSIsICJlbmQiLCAicGFnZVRpdGxlIiwgImV4dHJhIiwgImFkZENoYW5nZSIsICJyZXBsYWNlTGluayIsICJwcm9tcHQiLCAibGFzdFBhZ2UiLCAiYXQiLCAidW5zaGlmdCIsICJjb250ZW50QmVmb3JlIiwgInBvcCIsICJlbmFibGVkIiwgImFmZmVjdGVkQnV0dG9ucyIsICJfaTIiLCAiX2FmZmVjdGVkQnV0dG9ucyIsICJidXR0b24iLCAicHJvcCIsICJ0b2dnbGVGaW5pc2hlZE1lc3NhZ2UiLCAic2hvdyIsICJ0b2dnbGUiLCAiZmFkZU91dCIsICJub3RpZnlDb21wbGV0aW9uIiwgIm9sZFRpdGxlIiwgIm9uZSIsICJodG1sIiwgImdldFVybCIsICJyZWRpcmVjdCIsICJlc2NhcGUiLCAiZXh0cmFjdENvbnRleHQiLCAiZW1wdHkiLCAibnVtTGluZXMiLCAiTWF0aCIsICJjZWlsIiwgImhlaWdodCIsICJOdW1iZXIiLCAicGFyc2VGbG9hdCIsICJjc3MiLCAiQXJyYXkiLCAiZnJvbSIsICJqb2luIiwgImhhc0Rpc2FtVGVtcGxhdGUiLCAiY291bnRBY3R1YWxseUNoYW5nZWRGdWxseUNoZWNrZWRQYWdlcyIsICJ0ZXh0Q29udGVudCIsICJzZWNvbmRzVG9ISE1NU1MiLCAicGFnZUNoYW5nZSIsICJjaGFuZ2VTdW1tYXJpZXMiLCAic2F2ZSIsICJzYXZlV2l0aENvb2xkb3duIiwgImFwcGx5QWxsQ2hhbmdlcyIsICJfaXRlcmF0b3IyIiwgIl9zdGVwMiIsICJvbGRDb250ZW50IiwgImxhc3RQYWdlQ2hhbmdlIiwgImNvdW50QWN0dWFsQ2hhbmdlcyIsICJjaGFuZ2VDb3VudCIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICJsYXN0Q2hhbmdlIiwgImN1cnJlbnRUb29sVUkiLCAicmVtb3ZlQ2xhc3MiLCAicmVtb3ZlIiwgImNvbXBsZXRlIiwgImVycm9yRGVzY3JpcHRpb24iLCAiZXJyb3JCb3giLCAidWlJc0luUGxhY2UiLCAiY29udGFpbnMiLCAiZG9jdW1lbnRFbGVtZW50IiwgIm5leHRFbGVtZW50IiwgIm5ld0NvbnRlbnQiLCAibGlua1N0YXJ0IiwgInNsaWNlIiwgIm1heCIsICJsaW5rRW5kIiwgImFmdGVyRGVzY3JpcHRpb24iLCAiZXh0cmFjdExpbmsiLCAibGFzdEluZGV4IiwgInRpdGxlUmVnZXgiLCAidGVtcGxhdGVSZWdleCIsICJtYXRjaCIsICJpbmRleCIsICJfbWF0Y2gkIiwgInBvc3NpYmx5QW1iaWd1b3VzIiwgIl9lbmQiLCAicmVzdCIsICJ0ZW1wbGF0ZU1hdGNoIiwgInRlbXBsYXRlVGl0bGUiLCAiZ2V0Q2Fub25pY2FsVGl0bGUiLCAiZGVzdGluYXRpb25zIiwgIndnUGFnZU5hbWUiLCAiX21hdGNoJDIiLCAidGl0bGUxIiwgInRpdGxlMiIsICJUaXRsZSIsICJnZXRQcmVmaXhlZFRleHQiLCAiY29udGV4dFN0YXJ0IiwgImNvbnRleHRFbmQiLCAiY29udGV4dFByZXYiLCAiY29udGV4dE5leHQiLCAicGFnZU5hbWUiLCAiZXh0cmFjdFBhZ2VOYW1lUmF3IiwgInNlY3Rpb25Qb3MiLCAiaW5kZXhPZiIsICJzZWN0aW9uIiwgIndnU2NyaXB0IiwgIndnQXJ0aWNsZVBhdGgiLCAiaGFzQ2xhc3MiLCAiaHJlZiIsICJnZXRQYXJhbVZhbHVlIiwgInJlZ2V4IiwgInJlZ2V4UmVzdWx0IiwgImlzQXJyYXkiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgIndnQ2F0ZWdvcmllcyIsICJjYXRlZ29yaWVzIiwgIl9pdGVyYXRvcjQiLCAiX3N0ZXA0IiwgImNhdGVnb3J5IiwgInRvdGFsU2Vjb25kcyIsICJoaG1tc3MiLCAiaG91cnMiLCAiZmxvb3IiLCAibWludXRlcyIsICJzZWNvbmRzIiwgInBhZCIsICJzdHIiLCAieiIsICJ3aWR0aCIsICJ0b1N0cmluZyIsICJvbkNsaWNrIiwgInR5cGUiLCAicG9zc2libGVSZWRpcmVjdHMiLCAiYXBwbGllZFJlZGlyZWN0IiwgInZpc2l0ZWRQYWdlcyIsICJjdXJyZW50UGFnZSIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJwb3NzaWJsZVJlZGlyZWN0IiwgInRvIiwgInBhcmFtcyIsICJhY3Rpb24iLCAibGlzdCIsICJibHRpdGxlIiwgImJscmVkaXJlY3QiLCAiYmxsaW1pdCIsICJibG5hbWVzcGFjZSIsICJxdWVyeSIsICJsaW5rVGl0bGVzIiwgImJhY2tsaW5rc1F1ZXJ5IiwgIl9pdGVyYXRvcjYiLCAiX3N0ZXA2IiwgInJlZGlybGlua3MiLCAiX2l0ZXJhdG9yNyIsICJfc3RlcDciLCAiY29kZSIsICJyZWplY3QiLCAiY3VycmVudFRpdGxlcyIsICJyZXN0VGl0bGVzIiwgInRpdGxlcyIsICJfcXVlcnkkcmVkaXJlY3RzIiwgInRoZXNlUmVkaXJlY3RzIiwgIm1ldGEiLCAidWlwcm9wIiwgInVzZXJpbmZvIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInJ2cHJvcCIsICJyYXdQYWdlIiwgInBhZ2VzIiwgInJldmlzaW9ucyIsICJiYXNlVGltZVN0YW1wIiwgInRpbWVzdGFtcCIsICJzdGFydFRpbWVTdGFtcCIsICJzdGFydHRpbWVzdGFtcCIsICJlZGl0VG9rZW4iLCAidG9rZW5zIiwgImNzcmZ0b2tlbiIsICJhcmdzIiwgImRmZCIsICJjaGVja0FuZFNhdmUiLCAibWlsbGlzU2luY2VMYXN0IiwgIkRhdGUiLCAibm93IiwgInNldFRpbWVvdXQiLCAiYXBwbHkiLCAibWlub3JFZGl0IiwgImJvdEVkaXQiLCAidG9rZW4iLCAiYmFzZXRpbWVzdGFtcCIsICJ3YXRjaGxpc3QiLCAibWlub3IiLCAiYm90IiwgInBvc3QiXQp9Cg==
