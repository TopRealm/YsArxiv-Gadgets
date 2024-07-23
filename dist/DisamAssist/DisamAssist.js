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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/global.js
var require_global = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/global.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/fails.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/descriptors.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] !== 7;
    });
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-bind-native.js"(exports, module2) {
    "use strict";
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-call.js"(exports, module2) {
    "use strict";
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/create-property-descriptor.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-uncurry-this.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/classof-raw.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/indexed-object.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-null-or-undefined.js"(exports, module2) {
    "use strict";
    module2.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/require-object-coercible.js"(exports, module2) {
    "use strict";
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-indexed-object.js"(exports, module2) {
    "use strict";
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-callable.js"(exports, module2) {
    "use strict";
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-object.js"(exports, module2) {
    "use strict";
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/get-built-in.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var isCallable = require_is_callable();
    var aFunction = function(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module2.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(global2[namespace]) : global2[namespace] && global2[namespace][method];
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-is-prototype-of.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/engine-user-agent.js"(exports, module2) {
    "use strict";
    module2.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/engine-v8-version.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var userAgent = require_engine_user_agent();
    var process = global2.process;
    var Deno = global2.Deno;
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module2) {
    "use strict";
    var V8_VERSION = require_engine_v8_version();
    var fails = require_fails();
    var global2 = require_global();
    var $String = global2.String;
    module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = Symbol("symbol detection");
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module2) {
    "use strict";
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-symbol.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/try-to-string.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/a-callable.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/get-method.js"(exports, module2) {
    "use strict";
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-pure.js"(exports, module2) {
    "use strict";
    module2.exports = false;
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/define-global-property.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var defineProperty = Object.defineProperty;
    module2.exports = function(key, value) {
      try {
        defineProperty(global2, key, { value, configurable: true, writable: true });
      } catch (error2) {
        global2[key] = value;
      }
      return value;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/shared-store.js"(exports, module2) {
    "use strict";
    var IS_PURE = require_is_pure();
    var globalThis2 = require_global();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.37.1",
      mode: IS_PURE ? "pure" : "global",
      copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/shared.js"(exports, module2) {
    "use strict";
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-object.js"(exports, module2) {
    "use strict";
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/has-own-property.js"(exports, module2) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/uid.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/well-known-symbol.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var shared = require_shared();
    var hasOwn = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var Symbol2 = global2.Symbol;
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-primitive.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-property-key.js"(exports, module2) {
    "use strict";
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/document-create-element.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var isObject = require_is_object();
    var document2 = global2.document;
    var EXISTS = isObject(document2) && isObject(document2.createElement);
    module2.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/ie8-dom-define.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/an-object.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-define-property.js"(exports) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/function-name.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/inspect-source.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
    var isCallable = require_is_callable();
    var WeakMap = global2.WeakMap;
    module2.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/shared-key.js"(exports, module2) {
    "use strict";
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/hidden-keys.js"(exports, module2) {
    "use strict";
    module2.exports = {};
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/internal-state.js"(exports, module2) {
    "use strict";
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
    var global2 = require_global();
    var isObject = require_is_object();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn = require_has_own_property();
    var shared = require_shared_store();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError2 = global2.TypeError;
    var WeakMap = global2.WeakMap;
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/make-built-in.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/define-built-in.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/math-trunc.js"(exports, module2) {
    "use strict";
    var ceil = Math.ceil;
    var floor = Math.floor;
    module2.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module2) {
    "use strict";
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-absolute-index.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/to-length.js"(exports, module2) {
    "use strict";
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/length-of-array-like.js"(exports, module2) {
    "use strict";
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/array-includes.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-keys-internal.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/enum-bug-keys.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    "use strict";
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    "use strict";
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/own-keys.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/copy-constructor-properties.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-forced.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/export.js"(exports, module2) {
    "use strict";
    var global2 = require_global();
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
        target = global2;
      } else if (STATIC) {
        target = global2[TARGET] || defineGlobalProperty(TARGET, {});
      } else {
        target = global2[TARGET] && global2[TARGET].prototype;
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/is-array.js"(exports, module2) {
    "use strict";
    var classof = require_classof_raw();
    module2.exports = Array.isArray || function isArray(argument) {
      return classof(argument) === "Array";
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/array-set-length.js
var require_array_set_length = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/array-set-length.js"(exports, module2) {
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/does-not-exceed-safe-integer.js
var require_does_not_exceed_safe_integer = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/does-not-exceed-safe-integer.js"(exports, module2) {
    "use strict";
    var $TypeError = TypeError;
    var MAX_SAFE_INTEGER = 9007199254740991;
    module2.exports = function(it) {
      if (it > MAX_SAFE_INTEGER) throw $TypeError("Maximum allowed index exceeded");
      return it;
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.array.push.js
var require_es_array_push = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.array.push.js"() {
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
      } catch (error2) {
        return error2 instanceof TypeError;
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

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/delete-property-or-throw.js
var require_delete_property_or_throw = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/internals/delete-property-or-throw.js"(exports, module2) {
    "use strict";
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module2.exports = function(O, P) {
      if (!delete O[P]) throw new $TypeError("Cannot delete property " + tryToString(P) + " of " + tryToString(O));
    };
  }
});

// node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.array.unshift.js
var require_es_array_unshift = __commonJS({
  "node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.array.unshift.js"() {
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
require_es_array_push();
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
//! src/DisamAssist/modules/constant.ts
var WG_ACTION = mw.config.get("wgAction");
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
//! src/DisamAssist/modules/core.js
var import_ext_gadget = require("ext.gadget.Util");
//! src/DisamAssist/modules/messages.js
var txt = {
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
  pendingEditBoxLimited: "在所有更改保存前，请不要关闭页面；你可以在另一个页面编辑有兽档案馆，但是请勿同时使用多个DisamAssist。",
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
  summary: "使用[[MediaWiki:Gadget-DisamAssist.js|DisamAssist]]清理[[LIB:DAB|消歧义]]链接：[[$1]]（$2）。",
  summaryChanged: "改链接至[[$1]]",
  summaryOmitted: "链接已跳过",
  summaryRemoved: "链接已移除",
  summaryIntentional: "刻意链接至消歧义页面",
  summaryHelpNeeded: "需要帮助",
  summarySeparator: "; ",
  redirectSummary: "使用[[MediaWiki:Gadget-DisamAssist.js|DisamAssist]]创建目标为[[$1]]的重定向。"
};
//! src/DisamAssist/modules/core.js
var api = (0, import_ext_gadget.initMwApi)("DisamAssist/1.1");
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
  if (WG_ACTION !== "view" || !isDisam()) {
    return;
  }
  $(() => {
    const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
    if (new RegExp(cfg.disamRegExp).test(getTitle())) {
      const startMainLink = $(mw.util.addPortletLink(portletId, "#", txt.startMain, "ca-disamassist-main")).on("click", startMain);
      const startSameLink = $(mw.util.addPortletLink(portletId, "#", txt.startSame, "ca-disamassist-same")).on("click", startSame);
      startLink = startMainLink.add(startSameLink);
    } else {
      startLink = $(mw.util.addPortletLink(portletId, "#", txt.start, "ca-disamassist-page")).on("click", start);
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
    finishedMessage: $("<div>").text(txt.noMoreLinks).hide(),
    pageTitleLine: $("<span>").addClass("disamassist-pagetitleline"),
    pendingEditCounter: $("<div>").addClass("disamassist-editcounter"),
    context: $("<span>").addClass("disamassist-context"),
    undoButton: createButton(txt.undo, undo),
    omitButton: createButton(txt.omit, omit),
    endButton: createButton(txt.close, saveAndEnd),
    refreshButton: createButton(txt.refresh, refresh),
    titleAsTextButton: createButton(txt.titleAsText, chooseTitleFromPrompt),
    intentionalLinkButton: canMarkIntentionalLinks ? createButton(txt.intentionalLink, chooseIntentionalLink) : $("<span>"),
    disamNeededButton: cfg.disamNeededText ? createButton(txt.disamNeeded, chooseDisamNeeded) : $("<span>"),
    removeLinkButton: createButton(txt.removeLink, chooseLinkRemoval)
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
      return txt.pending;
    } else if (editCount !== 0) {
      return txt.editInProgress;
    }
  });
};
var markDisamOptions = () => {
  const optionPageTitles = [];
  const optionMarkers = [];
  getDisamOptions().each((_index, element) => {
    const link = $(element);
    const title = extractPageName(link);
    const optionMarker = $("<a>").attr("href", "#").addClass("disamassist-optionmarker").text(txt.optionMarker).on("click", (ev) => {
      ev.preventDefault();
      chooseReplacement(title);
    });
    link.after(optionMarker);
    optionMarkers.push(optionMarker);
    optionPageTitles.push(title);
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
          optionMarkers[ii].text(txt.targetOptionMarker).addClass("disamassist-curroptionmarker");
        } else if (isSamePage(endOptionTitle, endTargetPage)) {
          optionMarkers[ii].text(txt.redirectOptionMarker).addClass("disamassist-curroptionmarker");
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
        const summary = txt.redirectSummary.replace("$1", title);
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
    summary || (summary = pageTitle ? txt.summaryChanged.replace("$1", pageTitle) : txt.summaryOmitted);
    addChange(currentPageTitle, currentPageParameters, currentPageParameters.content, currentLink, summary);
    if (pageTitle && (pageTitle !== getTargetPage() || extra)) {
      currentPageParameters.content = replaceLink(currentPageParameters.content, pageTitle, currentLink, extra || "");
    }
    doLink();
  }
};
var chooseIntentionalLink = () => {
  const disamTitle = cfg.disamFormat.replace("$1", getTargetPage());
  chooseReplacement(disamTitle, "", txt.summaryIntentional);
};
var chooseTitleFromPrompt = () => {
  const title = prompt(txt.titleAsTextPrompt);
  if (title !== null) {
    chooseReplacement(title);
  }
};
var chooseLinkRemoval = () => {
  if (choosing) {
    const summary = txt.summaryRemoved;
    addChange(currentPageTitle, currentPageParameters, currentPageParameters.content, currentLink, summary);
    currentPageParameters.content = removeLink(currentPageParameters.content, currentLink);
    doLink();
  }
};
var chooseDisamNeeded = () => {
  chooseReplacement(currentLink.title, cfg.disamNeededText, txt.summaryHelpNeeded);
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
      pendingEditBox.append($("<div>").text(txt.pendingEditBoxLimited).addClass("disamassist-subtitle"));
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
  document.title = txt.notifyCharacter + document.title;
  $body.one("mousemove", () => {
    document.title = oldTitle;
  });
};
var updateContext = () => {
  updateEditCounter();
  if (currentLink) {
    ui.pageTitleLine.html(txt.pageTitleLine.replace("$1", mw.util.getUrl(currentPageTitle, {
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
    ui.pendingEditCounter.text(txt.pendingEditCounter.replace("$1", editCount).replace("$2", countActuallyChangedFullyCheckedPages()));
  }
  if (pendingEditBox) {
    if (editCount === 0 && !running) {
      togglePendingEditBox(false);
      notifyCompletion();
    }
    let textContent = editCount;
    if (editLimit) {
      textContent = txt.pendingEditBoxTimeEstimation.replace("$1", editCount).replace("$2", secondsToHHMMSS(cfg.editCooldown * editCount));
    }
    pendingEditBoxText.text(txt.pendingEditBox.replace("$1", textContent));
  }
};
var applyChange = (pageChange) => {
  if (pageChange.page.content !== pageChange.contentBefore[0]) {
    editCount++;
    const changeSummaries = pageChange.summary.join(txt.summarySeparator);
    const summary = txt.summary.replace("$1", getTargetPage()).replace("$2", changeSummaries);
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
    pageChanges.push({
      title: pageTitle,
      page,
      contentBefore: [],
      links: [],
      summary: []
    });
  }
  const lastPageChange = pageChanges.at(-1);
  lastPageChange.contentBefore.push(oldContent);
  lastPageChange.links.push(link);
  lastPageChange.summary.push(summary);
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
  errorBox.text(txt.error.replace("$1", errorDescription));
  errorBox.append(createButton(txt.dismissError, () => {
    errorBox.fadeOut();
  }).addClass("disamassist-errorbutton"));
  const uiIsInPlace = ui && $.contains(document.documentElement, ui.display[0]);
  const nextElement = uiIsInPlace ? ui.display : $body.find("#mw-content-text");
  nextElement.before(errorBox);
  errorBox.hide().fadeIn();
};
var replaceLink = (text, title, link, extra) => {
  let newContent;
  isSamePage(title, link.description) ? (
    // [[B|A]] should be replaced with [[A]] rather than [[A|A]]
    newContent = link.description
  ) : newContent = "".concat(title, "|").concat(link.description);
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
  return mw.config.get("wgPageName").replace(/_/g, " ");
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
    contextPrev = txt.ellipsis + contextPrev;
  }
  let contextNext = text.slice(link.end, contextEnd);
  if (contextEnd < text.length) {
    contextNext += txt.ellipsis;
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
  if (!link.hasClass("image")) {
    const href = link.attr("href");
    if (link.hasClass("new")) {
      if (href.includes(mw.config.get("wgScript"))) {
        return mw.util.getParamValue("title", href);
      }
    } else {
      const regex = mw.config.get("wgArticlePath").replace("$1", "(.*)");
      const regexResult = new RegExp("^".concat(regex, "$")).exec(href);
      if (Array.isArray(regexResult) && regexResult.length) {
        return decodeURIComponent(regexResult[1]);
      }
    }
  }
};
var isDisam = () => {
  const categories = mw.config.get("wgCategories", []);
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
        backlinks.push(element.title);
        if (!element.redirlinks) {
          continue;
        }
        linkTitles.push(element.title);
        const {
          redirlinks
        } = element;
        var _iterator7 = _createForOfIteratorHelper(redirlinks), _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
            const {
              title
            } = _step7.value;
            backlinks.push(title);
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
    deferred.reject(txt.getBacklinksError.replace("$1", code));
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
    deferred.reject(txt.fetchRedirectsError.replace("$1", code));
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
    deferred.reject(txt.fetchRightsError.replace("$1", code));
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
    deferred.reject(txt.loadPageError.replace("$1", pageTitle).replace("$2", code));
  });
  return deferred.promise();
};
var saveWithCooldown = (...args) => {
  const deferred = new $.Deferred();
  pendingSaves.push({
    args,
    dfd: deferred
  });
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
    deferred.reject(txt.savePageError.replace("$1", pageTitle).replace("$2", code));
  });
  return deferred.promise();
};
//! src/DisamAssist/DisamAssist.js
$(install);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1uYXRpdmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1jYWxsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NsYXNzb2YtcmF3LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtY2FsbGFibGUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nZXQtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbi5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3N5bWJvbC1jb25zdHJ1Y3Rvci1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXN5bWJvbC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RyeS10by1zdHJpbmcuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLWNhbGxhYmxlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2V0LW1ldGhvZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29yZGluYXJ5LXRvLXByaW1pdGl2ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tb2JqZWN0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VpZC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1Zy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mdW5jdGlvbi1uYW1lLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zaGFyZWQta2V5LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaGlkZGVuLWtleXMuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL21ha2UtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4uanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9tYXRoLXRydW5jLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eS5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvbGVuZ3RoLW9mLWFycmF5LWxpa2UuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1pbmNsdWRlcy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW51bS1idWcta2V5cy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL293bi1rZXlzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZXhwb3J0LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzLy5wbnBtL2NvcmUtanNAMy4zNy4xL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1zZXQtbGVuZ3RoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsICJub2RlX21vZHVsZXMvLnBucG0vY29yZS1qc0AzLjM3LjEvbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5wdXNoLmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVsZXRlLXByb3BlcnR5LW9yLXRocm93LmpzIiwgIm5vZGVfbW9kdWxlcy8ucG5wbS9jb3JlLWpzQDMuMzcuMS9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LnVuc2hpZnQuanMiLCAic3JjL0Rpc2FtQXNzaXN0L21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0Rpc2FtQXNzaXN0L21vZHVsZXMvY29uZmlnLnRzIiwgInNyYy9EaXNhbUFzc2lzdC9tb2R1bGVzL2NvcmUuanMiLCAic3JjL0Rpc2FtQXNzaXN0L21vZHVsZXMvbWVzc2FnZXMuanMiLCAic3JjL0Rpc2FtQXNzaXN0L0Rpc2FtQXNzaXN0LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIndXNlIHN0cmljdCc7XG52YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICBjaGVjayh0eXBlb2YgdGhpcyA9PSAnb2JqZWN0JyAmJiB0aGlzKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9PSA3O1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWZ1bmN0aW9uLXByb3RvdHlwZS1iaW5kIC0tIHNhZmVcbiAgdmFyIHRlc3QgPSAoZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9KS5iaW5kKCk7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gdHlwZW9mIHRlc3QgIT0gJ2Z1bmN0aW9uJyB8fCB0ZXN0Lmhhc093blByb3BlcnR5KCdwcm90b3R5cGUnKTtcbn0pO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgY2FsbCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9CSU5EID8gY2FsbC5iaW5kKGNhbGwpIDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gY2FsbC5hcHBseShjYWxsLCBhcmd1bWVudHMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gTmFzaG9ybiB+IEpESzggYnVnXG52YXIgTkFTSE9STl9CVUcgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgISRwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHsgMTogMiB9LCAxKTtcblxuLy8gYE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGVgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QucHJvdG90eXBlLnByb3BlcnR5aXNlbnVtZXJhYmxlXG5leHBvcnRzLmYgPSBOQVNIT1JOX0JVRyA/IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKFYpIHtcbiAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGhpcywgVik7XG4gIHJldHVybiAhIWRlc2NyaXB0b3IgJiYgZGVzY3JpcHRvci5lbnVtZXJhYmxlO1xufSA6ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBOQVRJVkVfQklORCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1iaW5kLW5hdGl2ZScpO1xuXG52YXIgRnVuY3Rpb25Qcm90b3R5cGUgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG52YXIgY2FsbCA9IEZ1bmN0aW9uUHJvdG90eXBlLmNhbGw7XG52YXIgdW5jdXJyeVRoaXNXaXRoQmluZCA9IE5BVElWRV9CSU5EICYmIEZ1bmN0aW9uUHJvdG90eXBlLmJpbmQuYmluZChjYWxsLCBjYWxsKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfQklORCA/IHVuY3VycnlUaGlzV2l0aEJpbmQgOiBmdW5jdGlvbiAoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbC5hcHBseShmbiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgdG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyh7fS50b1N0cmluZyk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBzdHJpbmdTbGljZSh0b1N0cmluZyhpdCksIDgsIC0xKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcbnZhciBzcGxpdCA9IHVuY3VycnlUaGlzKCcnLnNwbGl0KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gISRPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKTtcbn0pID8gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjbGFzc29mKGl0KSA9PT0gJ1N0cmluZycgPyBzcGxpdChpdCwgJycpIDogJE9iamVjdChpdCk7XG59IDogJE9iamVjdDtcbiIsICIndXNlIHN0cmljdCc7XG4vLyB3ZSBjYW4ndCB1c2UganVzdCBgaXQgPT0gbnVsbGAgc2luY2Ugb2YgYGRvY3VtZW50LmFsbGAgc3BlY2lhbCBjYXNlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLUlzSFRNTEREQS1pbnRlcm5hbC1zbG90LWFlY1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID09PSBudWxsIHx8IGl0ID09PSB1bmRlZmluZWQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc051bGxPclVuZGVmaW5lZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1udWxsLW9yLXVuZGVmaW5lZCcpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXNOdWxsT3JVbmRlZmluZWQoaXQpKSB0aHJvdyBuZXcgJFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1Jc0hUTUxEREEtaW50ZXJuYWwtc2xvdFxudmFyIGRvY3VtZW50QWxsID0gdHlwZW9mIGRvY3VtZW50ID09ICdvYmplY3QnICYmIGRvY3VtZW50LmFsbDtcblxuLy8gYElzQ2FsbGFibGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby10eXBlb2YtdW5kZWZpbmVkIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBkb2N1bWVudEFsbCA9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudEFsbCAhPT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJyB8fCBhcmd1bWVudCA9PT0gZG9jdW1lbnRBbGw7XG59IDogZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT0gJ2Z1bmN0aW9uJztcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogaXNDYWxsYWJsZShpdCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKGFyZ3VtZW50KSA/IGFyZ3VtZW50IDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKSA6IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB1bmN1cnJ5VGhpcyh7fS5pc1Byb3RvdHlwZU9mKTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT0gJ3VuZGVmaW5lZCcgJiYgU3RyaW5nKG5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICcnO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgdXNlckFnZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50Jyk7XG5cbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgRGVubyA9IGdsb2JhbC5EZW5vO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zIHx8IERlbm8gJiYgRGVuby52ZXJzaW9uO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIC8vIGluIG9sZCBDaHJvbWUsIHZlcnNpb25zIG9mIFY4IGlzbid0IFY4ID0gQ2hyb21lIC8gMTBcbiAgLy8gYnV0IHRoZWlyIGNvcnJlY3QgdmVyc2lvbnMgYXJlIG5vdCBpbnRlcmVzdGluZyBmb3IgdXNcbiAgdmVyc2lvbiA9IG1hdGNoWzBdID4gMCAmJiBtYXRjaFswXSA8IDQgPyAxIDogKyhtYXRjaFswXSArIG1hdGNoWzFdKTtcbn1cblxuLy8gQnJvd3NlckZTIE5vZGVKUyBgcHJvY2Vzc2AgcG9seWZpbGwgaW5jb3JyZWN0bHkgc2V0IGAudjhgIHRvIGAwLjBgXG4vLyBzbyBjaGVjayBgdXNlckFnZW50YCBldmVuIGlmIGAudjhgIGV4aXN0cywgYnV0IDBcbmlmICghdmVyc2lvbiAmJiB1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSArbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uO1xuIiwgIid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24nKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxudmFyICRTdHJpbmcgPSBnbG9iYWwuU3RyaW5nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xubW9kdWxlLmV4cG9ydHMgPSAhIU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN5bWJvbCA9IFN5bWJvbCgnc3ltYm9sIGRldGVjdGlvbicpO1xuICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAvLyBgZ2V0LW93bi1wcm9wZXJ0eS1zeW1ib2xzYCBwb2x5ZmlsbCBzeW1ib2xzIGNvbnZlcnRlZCB0byBvYmplY3QgYXJlIG5vdCBTeW1ib2wgaW5zdGFuY2VzXG4gIC8vIG5iOiBEbyBub3QgY2FsbCBgU3RyaW5nYCBkaXJlY3RseSB0byBhdm9pZCB0aGlzIGJlaW5nIG9wdGltaXplZCBvdXQgdG8gYHN5bWJvbCsnJ2Agd2hpY2ggd2lsbCxcbiAgLy8gb2YgY291cnNlLCBmYWlsLlxuICByZXR1cm4gISRTdHJpbmcoc3ltYm9sKSB8fCAhKE9iamVjdChzeW1ib2wpIGluc3RhbmNlb2YgU3ltYm9sKSB8fFxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgIVN5bWJvbC5zaGFtICYmIFY4X1ZFUlNJT04gJiYgVjhfVkVSU0lPTiA8IDQxO1xufSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nICovXG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTkFUSVZFX1NZTUJPTFxuICAmJiAhU3ltYm9sLnNoYW1cbiAgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PSAnc3ltYm9sJztcbiIsICIndXNlIHN0cmljdCc7XG52YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtaXMtcHJvdG90eXBlLW9mJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyICRPYmplY3QgPSBPYmplY3Q7XG5cbm1vZHVsZS5leHBvcnRzID0gVVNFX1NZTUJPTF9BU19VSUQgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyICRTeW1ib2wgPSBnZXRCdWlsdEluKCdTeW1ib2wnKTtcbiAgcmV0dXJuIGlzQ2FsbGFibGUoJFN5bWJvbCkgJiYgaXNQcm90b3R5cGVPZigkU3ltYm9sLnByb3RvdHlwZSwgJE9iamVjdChpdCkpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgJFN0cmluZyA9IFN0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gJFN0cmluZyhhcmd1bWVudCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxuLy8gYEFzc2VydDogSXNDYWxsYWJsZShhcmd1bWVudCkgaXMgdHJ1ZWBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc0NhbGxhYmxlKGFyZ3VtZW50KSkgcmV0dXJuIGFyZ3VtZW50O1xuICB0aHJvdyBuZXcgJFR5cGVFcnJvcih0cnlUb1N0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBhQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYS1jYWxsYWJsZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG5cbi8vIGBHZXRNZXRob2RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXRtZXRob2Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFYsIFApIHtcbiAgdmFyIGZ1bmMgPSBWW1BdO1xuICByZXR1cm4gaXNOdWxsT3JVbmRlZmluZWQoZnVuYykgPyB1bmRlZmluZWQgOiBhQ2FsbGFibGUoZnVuYyk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgT3JkaW5hcnlUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9yZGluYXJ5dG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAocHJlZiA9PT0gJ3N0cmluZycgJiYgaXNDYWxsYWJsZShmbiA9IGlucHV0LnRvU3RyaW5nKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKGlzQ2FsbGFibGUoZm4gPSBpbnB1dC52YWx1ZU9mKSAmJiAhaXNPYmplY3QodmFsID0gY2FsbChmbiwgaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHByZWYgIT09ICdzdHJpbmcnICYmIGlzQ2FsbGFibGUoZm4gPSBpbnB1dC50b1N0cmluZykgJiYgIWlzT2JqZWN0KHZhbCA9IGNhbGwoZm4sIGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgZGVmaW5lUHJvcGVydHkoZ2xvYmFsLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBkZWZpbmVHbG9iYWxQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtZ2xvYmFsLXByb3BlcnR5Jyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpc1tTSEFSRURdIHx8IGRlZmluZUdsb2JhbFByb3BlcnR5KFNIQVJFRCwge30pO1xuXG4oc3RvcmUudmVyc2lvbnMgfHwgKHN0b3JlLnZlcnNpb25zID0gW10pKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMzcuMScsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAxNC0yMDI0IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJyxcbiAgbGljZW5zZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2Jsb2IvdjMuMzcuMS9MSUNFTlNFJyxcbiAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMnXG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSB8fCB7fSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG52YXIgJE9iamVjdCA9IE9iamVjdDtcblxuLy8gYFRvT2JqZWN0YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9vYmplY3Rcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiAkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB1bmN1cnJ5VGhpcyh7fS5oYXNPd25Qcm9wZXJ0eSk7XG5cbi8vIGBIYXNPd25Qcm9wZXJ0eWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWhhc293bnByb3BlcnR5XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWhhc293biAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5oYXNPd24gfHwgZnVuY3Rpb24gaGFzT3duKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5KHRvT2JqZWN0KGl0KSwga2V5KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xuXG52YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xudmFyIHRvU3RyaW5nID0gdW5jdXJyeVRoaXMoMS4wLnRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcgKyAoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSkgKyAnKV8nICsgdG9TdHJpbmcoKytpZCArIHBvc3RmaXgsIDM2KTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgTkFUSVZFX1NZTUJPTCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtY29uc3RydWN0b3ItZGV0ZWN0aW9uJyk7XG52YXIgVVNFX1NZTUJPTF9BU19VSUQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdXNlLXN5bWJvbC1hcy11aWQnKTtcblxudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBjcmVhdGVXZWxsS25vd25TeW1ib2wgPSBVU0VfU1lNQk9MX0FTX1VJRCA/IFN5bWJvbFsnZm9yJ10gfHwgU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhc093bihXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpKSB7XG4gICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gTkFUSVZFX1NZTUJPTCAmJiBoYXNPd24oU3ltYm9sLCBuYW1lKVxuICAgICAgPyBTeW1ib2xbbmFtZV1cbiAgICAgIDogY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICB9IHJldHVybiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV07XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1zeW1ib2wnKTtcbnZhciBnZXRNZXRob2QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LW1ldGhvZCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFRvUHJpbWl0aXZlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBwcmVmKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpIHx8IGlzU3ltYm9sKGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZXhvdGljVG9QcmltID0gZ2V0TWV0aG9kKGlucHV0LCBUT19QUklNSVRJVkUpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAoZXhvdGljVG9QcmltKSB7XG4gICAgaWYgKHByZWYgPT09IHVuZGVmaW5lZCkgcHJlZiA9ICdkZWZhdWx0JztcbiAgICByZXN1bHQgPSBjYWxsKGV4b3RpY1RvUHJpbSwgaW5wdXQsIHByZWYpO1xuICAgIGlmICghaXNPYmplY3QocmVzdWx0KSB8fCBpc1N5bWJvbChyZXN1bHQpKSByZXR1cm4gcmVzdWx0O1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9XG4gIGlmIChwcmVmID09PSB1bmRlZmluZWQpIHByZWYgPSAnbnVtYmVyJztcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIHByZWYpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtc3ltYm9sJyk7XG5cbi8vIGBUb1Byb3BlcnR5S2V5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9wcm9wZXJ0eWtleVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCAnc3RyaW5nJyk7XG4gIHJldHVybiBpc1N5bWJvbChrZXkpID8ga2V5IDoga2V5ICsgJyc7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFua3MgdG8gSUU4IGZvciBpdHMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT09IDc7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtcHJvcGVydHktaXMtZW51bWVyYWJsZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvclxuZXhwb3J0cy5mID0gREVTQ1JJUFRPUlMgPyAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIDogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApIHtcbiAgTyA9IHRvSW5kZXhlZE9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzT3duKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFjYWxsKHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYsIE8sIFApLCBPW1BdKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gVjggfiBDaHJvbWUgMzYtXG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMzM0XG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTICYmIGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfSwgJ3Byb3RvdHlwZScsIHtcbiAgICB2YWx1ZTogNDIsXG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pLnByb3RvdHlwZSAhPT0gNDI7XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciAkU3RyaW5nID0gU3RyaW5nO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBBc3NlcnQ6IFR5cGUoYXJndW1lbnQpIGlzIE9iamVjdGBcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIGlmIChpc09iamVjdChhcmd1bWVudCkpIHJldHVybiBhcmd1bWVudDtcbiAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJFN0cmluZyhhcmd1bWVudCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBWOF9QUk9UT1RZUEVfREVGSU5FX0JVRyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy92OC1wcm90b3R5cGUtZGVmaW5lLWJ1ZycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJvcGVydHlLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJvcGVydHkta2V5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIEVOVU1FUkFCTEUgPSAnZW51bWVyYWJsZSc7XG52YXIgQ09ORklHVVJBQkxFID0gJ2NvbmZpZ3VyYWJsZSc7XG52YXIgV1JJVEFCTEUgPSAnd3JpdGFibGUnO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/IFY4X1BST1RPVFlQRV9ERUZJTkVfQlVHID8gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAodHlwZW9mIE8gPT09ICdmdW5jdGlvbicgJiYgUCA9PT0gJ3Byb3RvdHlwZScgJiYgJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzICYmIFdSSVRBQkxFIGluIEF0dHJpYnV0ZXMgJiYgIUF0dHJpYnV0ZXNbV1JJVEFCTEVdKSB7XG4gICAgdmFyIGN1cnJlbnQgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICAgIGlmIChjdXJyZW50ICYmIGN1cnJlbnRbV1JJVEFCTEVdKSB7XG4gICAgICBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgICAgIEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogQ09ORklHVVJBQkxFIGluIEF0dHJpYnV0ZXMgPyBBdHRyaWJ1dGVzW0NPTkZJR1VSQUJMRV0gOiBjdXJyZW50W0NPTkZJR1VSQUJMRV0sXG4gICAgICAgIGVudW1lcmFibGU6IEVOVU1FUkFCTEUgaW4gQXR0cmlidXRlcyA/IEF0dHJpYnV0ZXNbRU5VTUVSQUJMRV0gOiBjdXJyZW50W0VOVU1FUkFCTEVdLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICB9IHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG59IDogJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJvcGVydHlLZXkoUCk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuICRkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXREZXNjcmlwdG9yID0gREVTQ1JJUFRPUlMgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxudmFyIEVYSVNUUyA9IGhhc093bihGdW5jdGlvblByb3RvdHlwZSwgJ25hbWUnKTtcbi8vIGFkZGl0aW9uYWwgcHJvdGVjdGlvbiBmcm9tIG1pbmlmaWVkIC8gbWFuZ2xlZCAvIGRyb3BwZWQgZnVuY3Rpb24gbmFtZXNcbnZhciBQUk9QRVIgPSBFWElTVFMgJiYgKGZ1bmN0aW9uIHNvbWV0aGluZygpIHsgLyogZW1wdHkgKi8gfSkubmFtZSA9PT0gJ3NvbWV0aGluZyc7XG52YXIgQ09ORklHVVJBQkxFID0gRVhJU1RTICYmICghREVTQ1JJUFRPUlMgfHwgKERFU0NSSVBUT1JTICYmIGdldERlc2NyaXB0b3IoRnVuY3Rpb25Qcm90b3R5cGUsICduYW1lJykuY29uZmlndXJhYmxlKSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFWElTVFM6IEVYSVNUUyxcbiAgUFJPUEVSOiBQUk9QRVIsXG4gIENPTkZJR1VSQUJMRTogQ09ORklHVVJBQkxFXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gdW5jdXJyeVRoaXMoRnVuY3Rpb24udG9TdHJpbmcpO1xuXG4vLyB0aGlzIGhlbHBlciBicm9rZW4gaW4gYGNvcmUtanNAMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAoIWlzQ2FsbGFibGUoc3RvcmUuaW5zcGVjdFNvdXJjZSkpIHtcbiAgc3RvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBmdW5jdGlvblRvU3RyaW5nKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQ2FsbGFibGUoV2Vha01hcCkgJiYgL25hdGl2ZSBjb2RlLy50ZXN0KFN0cmluZyhXZWFrTWFwKSk7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG5cbnZhciBrZXlzID0gc2hhcmVkKCdrZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4ga2V5c1trZXldIHx8IChrZXlzW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge307XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWFrLW1hcC1iYXNpYy1kZXRlY3Rpb24nKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgT0JKRUNUX0FMUkVBRFlfSU5JVElBTElaRUQgPSAnT2JqZWN0IGFscmVhZHkgaW5pdGlhbGl6ZWQnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQnKTtcbiAgICB9IHJldHVybiBzdGF0ZTtcbiAgfTtcbn07XG5cbmlmIChOQVRJVkVfV0VBS19NQVAgfHwgc2hhcmVkLnN0YXRlKSB7XG4gIHZhciBzdG9yZSA9IHNoYXJlZC5zdGF0ZSB8fCAoc2hhcmVkLnN0YXRlID0gbmV3IFdlYWtNYXAoKSk7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtYXNzaWduIC0tIHByb3RvdHlwZSBtZXRob2RzIHByb3RlY3Rpb24gKi9cbiAgc3RvcmUuZ2V0ID0gc3RvcmUuZ2V0O1xuICBzdG9yZS5oYXMgPSBzdG9yZS5oYXM7XG4gIHN0b3JlLnNldCA9IHN0b3JlLnNldDtcbiAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWFzc2lnbiAtLSBwcm90b3R5cGUgbWV0aG9kcyBwcm90ZWN0aW9uICovXG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBpZiAoc3RvcmUuaGFzKGl0KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgc3RvcmUuc2V0KGl0LCBtZXRhZGF0YSk7XG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9O1xuICBnZXQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gc3RvcmUuZ2V0KGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHN0b3JlLmhhcyhpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIGlmIChoYXNPd24oaXQsIFNUQVRFKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihPQkpFQ1RfQUxSRUFEWV9JTklUSUFMSVpFRCk7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGhhc093bihpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBoYXNPd24oaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgQ09ORklHVVJBQkxFX0ZVTkNUSU9OX05BTUUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tbmFtZScpLkNPTkZJR1VSQUJMRTtcbnZhciBpbnNwZWN0U291cmNlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgZ2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZ2V0O1xudmFyICRTdHJpbmcgPSBTdHJpbmc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBzdHJpbmdTbGljZSA9IHVuY3VycnlUaGlzKCcnLnNsaWNlKTtcbnZhciByZXBsYWNlID0gdW5jdXJyeVRoaXMoJycucmVwbGFjZSk7XG52YXIgam9pbiA9IHVuY3VycnlUaGlzKFtdLmpvaW4pO1xuXG52YXIgQ09ORklHVVJBQkxFX0xFTkdUSCA9IERFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eShmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH0sICdsZW5ndGgnLCB7IHZhbHVlOiA4IH0pLmxlbmd0aCAhPT0gODtcbn0pO1xuXG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbnZhciBtYWtlQnVpbHRJbiA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlLCBuYW1lLCBvcHRpb25zKSB7XG4gIGlmIChzdHJpbmdTbGljZSgkU3RyaW5nKG5hbWUpLCAwLCA3KSA9PT0gJ1N5bWJvbCgnKSB7XG4gICAgbmFtZSA9ICdbJyArIHJlcGxhY2UoJFN0cmluZyhuYW1lKSwgL15TeW1ib2xcXCgoW14pXSopXFwpLiokLywgJyQxJykgKyAnXSc7XG4gIH1cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5nZXR0ZXIpIG5hbWUgPSAnZ2V0ICcgKyBuYW1lO1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnNldHRlcikgbmFtZSA9ICdzZXQgJyArIG5hbWU7XG4gIGlmICghaGFzT3duKHZhbHVlLCAnbmFtZScpIHx8IChDT05GSUdVUkFCTEVfRlVOQ1RJT05fTkFNRSAmJiB2YWx1ZS5uYW1lICE9PSBuYW1lKSkge1xuICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICduYW1lJywgeyB2YWx1ZTogbmFtZSwgY29uZmlndXJhYmxlOiB0cnVlIH0pO1xuICAgIGVsc2UgdmFsdWUubmFtZSA9IG5hbWU7XG4gIH1cbiAgaWYgKENPTkZJR1VSQUJMRV9MRU5HVEggJiYgb3B0aW9ucyAmJiBoYXNPd24ob3B0aW9ucywgJ2FyaXR5JykgJiYgdmFsdWUubGVuZ3RoICE9PSBvcHRpb25zLmFyaXR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkodmFsdWUsICdsZW5ndGgnLCB7IHZhbHVlOiBvcHRpb25zLmFyaXR5IH0pO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKG9wdGlvbnMgJiYgaGFzT3duKG9wdGlvbnMsICdjb25zdHJ1Y3RvcicpICYmIG9wdGlvbnMuY29uc3RydWN0b3IpIHtcbiAgICAgIGlmIChERVNDUklQVE9SUykgZGVmaW5lUHJvcGVydHkodmFsdWUsICdwcm90b3R5cGUnLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTtcbiAgICAvLyBpbiBWOCB+IENocm9tZSA1MywgcHJvdG90eXBlcyBvZiBzb21lIG1ldGhvZHMsIGxpa2UgYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgLCBhcmUgbm9uLXdyaXRhYmxlXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5wcm90b3R5cGUpIHZhbHVlLnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICB2YXIgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG4gIGlmICghaGFzT3duKHN0YXRlLCAnc291cmNlJykpIHtcbiAgICBzdGF0ZS5zb3VyY2UgPSBqb2luKFRFTVBMQVRFLCB0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyA/IG5hbWUgOiAnJyk7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcblxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0ZW5kLW5hdGl2ZSAtLSByZXF1aXJlZFxuRnVuY3Rpb24ucHJvdG90eXBlLnRvU3RyaW5nID0gbWFrZUJ1aWx0SW4oZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiBpc0NhbGxhYmxlKHRoaXMpICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59LCAndG9TdHJpbmcnKTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBtYWtlQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYWtlLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucy5lbnVtZXJhYmxlO1xuICB2YXIgbmFtZSA9IG9wdGlvbnMubmFtZSAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5uYW1lIDoga2V5O1xuICBpZiAoaXNDYWxsYWJsZSh2YWx1ZSkpIG1ha2VCdWlsdEluKHZhbHVlLCBuYW1lLCBvcHRpb25zKTtcbiAgaWYgKG9wdGlvbnMuZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVHbG9iYWxQcm9wZXJ0eShrZXksIHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFvcHRpb25zLnVuc2FmZSkgZGVsZXRlIE9ba2V5XTtcbiAgICAgIGVsc2UgaWYgKE9ba2V5XSkgc2ltcGxlID0gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKE8sIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6ICFvcHRpb25zLm5vbkNvbmZpZ3VyYWJsZSxcbiAgICAgIHdyaXRhYmxlOiAhb3B0aW9ucy5ub25Xcml0YWJsZVxuICAgIH0pO1xuICB9IHJldHVybiBPO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBNYXRoLnRydW5jYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWF0aC50cnVuY1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW1hdGgtdHJ1bmMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnRydW5jIHx8IGZ1bmN0aW9uIHRydW5jKHgpIHtcbiAgdmFyIG4gPSAreDtcbiAgcmV0dXJuIChuID4gMCA/IGZsb29yIDogY2VpbCkobik7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0cnVuYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9tYXRoLXRydW5jJyk7XG5cbi8vIGBUb0ludGVnZXJPckluZmluaXR5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9pbnRlZ2Vyb3JpbmZpbml0eVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgdmFyIG51bWJlciA9ICthcmd1bWVudDtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIG51bWJlciAhPT0gbnVtYmVyIHx8IG51bWJlciA9PT0gMCA/IDAgOiB0cnVuYyhudW1iZXIpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyT3JJbmZpbml0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyLW9yLWluZmluaXR5Jyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlck9ySW5maW5pdHkoaW5kZXgpO1xuICByZXR1cm4gaW50ZWdlciA8IDAgPyBtYXgoaW50ZWdlciArIGxlbmd0aCwgMCkgOiBtaW4oaW50ZWdlciwgbGVuZ3RoKTtcbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICB2YXIgbGVuID0gdG9JbnRlZ2VyT3JJbmZpbml0eShhcmd1bWVudCk7XG4gIHJldHVybiBsZW4gPiAwID8gbWluKGxlbiwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1sZW5ndGgnKTtcblxuLy8gYExlbmd0aE9mQXJyYXlMaWtlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbGVuZ3Rob2ZhcnJheWxpa2Vcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdG9MZW5ndGgob2JqLmxlbmd0aCk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICAgIGlmICh2YWx1ZSAhPT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgaGFzT3duID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcy1vd24tcHJvcGVydHknKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXNPd24oaGlkZGVuS2V5cywga2V5KSAmJiBoYXNPd24oTywga2V5KSAmJiBwdXNoKHJlc3VsdCwga2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhc093bihPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5pbmRleE9mKHJlc3VsdCwga2V5KSB8fCBwdXNoKHJlc3VsdCwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG52YXIgaGlkZGVuS2V5cyA9IGVudW1CdWdLZXlzLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHluYW1lc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eW5hbWVzIC0tIHNhZmVcbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gaW50ZXJuYWxPYmplY3RLZXlzKE8sIGhpZGRlbktleXMpO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG52YXIgY29uY2F0ID0gdW5jdXJyeVRoaXMoW10uY29uY2F0KTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGNvbmNhdChrZXlzLCBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIG93bktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3duLWtleXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UsIGV4Y2VwdGlvbnMpIHtcbiAgdmFyIGtleXMgPSBvd25LZXlzKHNvdXJjZSk7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IGRlZmluZVByb3BlcnR5TW9kdWxlLmY7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JNb2R1bGUuZjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpICYmICEoZXhjZXB0aW9ucyAmJiBoYXNPd24oZXhjZXB0aW9ucywga2V5KSkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICB9XG4gIH1cbn07XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNDYWxsYWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1jYWxsYWJsZScpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09PSBQT0xZRklMTCA/IHRydWVcbiAgICA6IHZhbHVlID09PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogaXNDYWxsYWJsZShkZXRlY3Rpb24pID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCAiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpLmY7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgZGVmaW5lR2xvYmFsUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWdsb2JhbC1wcm9wZXJ0eScpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAgICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMuZG9udENhbGxHZXRTZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4gIG9wdGlvbnMubmFtZSAgICAgICAgICAgLSB0aGUgLm5hbWUgb2YgdGhlIGZ1bmN0aW9uIGlmIGl0IGRvZXMgbm90IG1hdGNoIHRoZSBrZXlcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWw7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gfHwgZGVmaW5lR2xvYmFsUHJvcGVydHkoVEFSR0VULCB7fSk7XG4gIH0gZWxzZSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gJiYgZ2xvYmFsW1RBUkdFVF0ucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMuZG9udENhbGxHZXRTZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PSB0eXBlb2YgdGFyZ2V0UHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyhzb3VyY2VQcm9wZXJ0eSwgdGFyZ2V0UHJvcGVydHkpO1xuICAgIH1cbiAgICAvLyBhZGQgYSBmbGFnIHRvIG5vdCBjb21wbGV0ZWx5IGZ1bGwgcG9seWZpbGxzXG4gICAgaWYgKG9wdGlvbnMuc2hhbSB8fCAodGFyZ2V0UHJvcGVydHkgJiYgdGFyZ2V0UHJvcGVydHkuc2hhbSkpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShzb3VyY2VQcm9wZXJ0eSwgJ3NoYW0nLCB0cnVlKTtcbiAgICB9XG4gICAgZGVmaW5lQnVpbHRJbih0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGBJc0FycmF5YCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtaXNhcnJheVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LWlzYXJyYXkgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoYXJndW1lbnQpID09PSAnQXJyYXknO1xufTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWFycmF5Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIFNhZmFyaSA8IDEzIGRvZXMgbm90IHRocm93IGFuIGVycm9yIGluIHRoaXMgY2FzZVxudmFyIFNJTEVOVF9PTl9OT05fV1JJVEFCTEVfTEVOR1RIX1NFVCA9IERFU0NSSVBUT1JTICYmICFmdW5jdGlvbiAoKSB7XG4gIC8vIG1ha2VzIG5vIHNlbnNlIHdpdGhvdXQgcHJvcGVyIHN0cmljdCBtb2RlIHN1cHBvcnRcbiAgaWYgKHRoaXMgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFtdLCAnbGVuZ3RoJywgeyB3cml0YWJsZTogZmFsc2UgfSkubGVuZ3RoID0gMTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn0oKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPyBmdW5jdGlvbiAoTywgbGVuZ3RoKSB7XG4gIGlmIChpc0FycmF5KE8pICYmICFnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgJ2xlbmd0aCcpLndyaXRhYmxlKSB7XG4gICAgdGhyb3cgbmV3ICRUeXBlRXJyb3IoJ0Nhbm5vdCBzZXQgcmVhZCBvbmx5IC5sZW5ndGgnKTtcbiAgfSByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59IDogZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICByZXR1cm4gTy5sZW5ndGggPSBsZW5ndGg7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93ICRUeXBlRXJyb3IoJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCcpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgc2V0QXJyYXlMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2V0LWxlbmd0aCcpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIElOQ09SUkVDVF9UT19MRU5HVEggPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBbXS5wdXNoLmNhbGwoeyBsZW5ndGg6IDB4MTAwMDAwMDAwIH0sIDEpICE9PSA0Mjk0OTY3Mjk3O1xufSk7XG5cbi8vIFY4IDw9IDEyMSBhbmQgU2FmYXJpIDw9IDE1LjQ7IEZGIDwgMjMgdGhyb3dzIEludGVybmFsRXJyb3Jcbi8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTEyNjgxXG52YXIgcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLnB1c2goKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn07XG5cbnZhciBGT1JDRUQgPSBJTkNPUlJFQ1RfVE9fTEVOR1RIIHx8ICFwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGgoKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5wdXNoYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnB1c2hcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBwdXNoOiBmdW5jdGlvbiBwdXNoKGl0ZW0pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgYXJnQ291bnQgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihsZW4gKyBhcmdDb3VudCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdDb3VudDsgaSsrKSB7XG4gICAgICBPW2xlbl0gPSBhcmd1bWVudHNbaV07XG4gICAgICBsZW4rKztcbiAgICB9XG4gICAgc2V0QXJyYXlMZW5ndGgoTywgbGVuKTtcbiAgICByZXR1cm4gbGVuO1xuICB9XG59KTtcbiIsICIndXNlIHN0cmljdCc7XG52YXIgdHJ5VG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdHJ5LXRvLXN0cmluZycpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgUCkge1xuICBpZiAoIWRlbGV0ZSBPW1BdKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignQ2Fubm90IGRlbGV0ZSBwcm9wZXJ0eSAnICsgdHJ5VG9TdHJpbmcoUCkgKyAnIG9mICcgKyB0cnlUb1N0cmluZyhPKSk7XG59O1xuIiwgIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgc2V0QXJyYXlMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2V0LWxlbmd0aCcpO1xudmFyIGRlbGV0ZVByb3BlcnR5T3JUaHJvdyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWxldGUtcHJvcGVydHktb3ItdGhyb3cnKTtcbnZhciBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlcicpO1xuXG4vLyBJRTgtXG52YXIgSU5DT1JSRUNUX1JFU1VMVCA9IFtdLnVuc2hpZnQoMCkgIT09IDE7XG5cbi8vIFY4IH4gQ2hyb21lIDwgNzEgYW5kIFNhZmFyaSA8PSAxNS40LCBGRiA8IDIzIHRocm93cyBJbnRlcm5hbEVycm9yXG52YXIgcHJvcGVyRXJyb3JPbk5vbldyaXRhYmxlTGVuZ3RoID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLnVuc2hpZnQoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3I7XG4gIH1cbn07XG5cbnZhciBGT1JDRUQgPSBJTkNPUlJFQ1RfUkVTVUxUIHx8ICFwcm9wZXJFcnJvck9uTm9uV3JpdGFibGVMZW5ndGgoKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS51bnNoaWZ0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnVuc2hpZnRcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICB1bnNoaWZ0OiBmdW5jdGlvbiB1bnNoaWZ0KGl0ZW0pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgICB2YXIgYXJnQ291bnQgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGlmIChhcmdDb3VudCkge1xuICAgICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKGxlbiArIGFyZ0NvdW50KTtcbiAgICAgIHZhciBrID0gbGVuO1xuICAgICAgd2hpbGUgKGstLSkge1xuICAgICAgICB2YXIgdG8gPSBrICsgYXJnQ291bnQ7XG4gICAgICAgIGlmIChrIGluIE8pIE9bdG9dID0gT1trXTtcbiAgICAgICAgZWxzZSBkZWxldGVQcm9wZXJ0eU9yVGhyb3coTywgdG8pO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBhcmdDb3VudDsgaisrKSB7XG4gICAgICAgIE9bal0gPSBhcmd1bWVudHNbal07XG4gICAgICB9XG4gICAgfSByZXR1cm4gc2V0QXJyYXlMZW5ndGgoTywgbGVuICsgYXJnQ291bnQpO1xuICB9XG59KTtcbiIsICJjb25zdCBXR19BQ1RJT046IE1lZGlhV2lraUNvbmZpZ01hcFdnQWN0aW9uID0gbXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKTtcblxuZXhwb3J0IHtXR19BQ1RJT059O1xuIiwgImNvbnN0IGNmZyA9IHtcblx0LyogQ2F0ZWdvcmllcyB3aGVyZSBkaXNhbWJpZ3VhdGlvbiBwYWdlcyBhcmUgYWRkZWQgKHVzdWFsbHkgYnkgYSB0ZW1wbGF0ZSBsaWtlIHt7RGlzYW1iaWd1YXRpb259fSAqL1xuXHRkaXNhbUNhdGVnb3JpZXM6IFsn5YWo6YOo5raI5q2n5LmJ6aG16Z2iJ10sXG5cdC8qIFwiQ2Fub25pY2FsIG5hbWVzXCIgb2YgdGhlIHRlbXBsYXRlcyB0aGF0IG1heSBhcHBlYXIgYWZ0ZXIgYW1iaWd1b3VzIGxpbmtzIGFuZCB3aGljaCBzaG91bGQgYmUgcmVtb3ZlZCB3aGVuIGZpeGluZyB0aG9zZSBsaW5rcyAqL1xuXHRkaXNhbUxpbmtUZW1wbGF0ZXM6IFtcblx0XHQnRGlzYW1iaWd1YXRpb24gbmVlZGVkJyxcblx0XHQnQW1iaWd1b3VzIGxpbmsnLFxuXHRcdCdBbWJsaW5rJyxcblx0XHQnRGFiIG5lZWRlZCcsXG5cdFx0J0Rpc2FtYi1saW5rJyxcblx0XHQnRGlzYW1iaWcgbmVlZGVkJyxcblx0XHQnRGlzYW1iaWd1YXRlJyxcblx0XHQnRG4nLFxuXHRcdCdOZWVkZGFiJyxcblx0XSxcblx0LyogXCJDYW5vbmljYWwgbmFtZXNcIiBvZiB0aGUgdGVtcGxhdGVzIHRoYXQgZGVzaWduYXRlIGludGVudGlvbmFsIGxpbmtzIHRvIGRpc2FtYmlndWF0aW9uIHBhZ2VzICovXG5cdGRpc2FtTGlua0lnbm9yZVRlbXBsYXRlczogWydSIGZyb20gYW1iaWd1b3VzIHBhZ2UnLCAnUiB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlJywgJ1IgZnJvbSBpbmNvbXBsZXRlIGRpc2FtYmlndWF0aW9uJ10sXG5cdC8qIEZvcm1hdCBzdHJpbmcgZm9yIFwiRm9vIChkaXNhbWJpZ3VhdGlvbilcIi1zdHlsZSBwYWdlcyAqL1xuXHRkaXNhbUZvcm1hdDogJyQx77yI5raI5q2n5LmJ77yJJyxcblx0LyogUmVndWxhciBleHByZXNzaW9uIG1hdGNoaW5nIHRoZSB0aXRsZXMgb2YgZGlzYW1iaWd1YXRpb24gcGFnZXMgKHdoZW4gdGhleSBhcmUgZGlmZmVyZW50IGZyb20gdGhlIHRpdGxlcyBvZiB0aGUgcHJpbWFyeSB0b3BpY3MpICovXG5cdGRpc2FtUmVnRXhwOiAnXiguKinvvIgo5raI5q2n5LmJfOa2iOatp+e+qSnvvIkkJyxcblx0LyogVGV4dCB0aGF0IHdpbGwgYmUgaW5zZXJ0ZWQgYWZ0ZXIgdGhlIGxpbmsgaWYgdGhlIHVzZXIgcmVxdWVzdHMgaGVscC4gSWYgdGhlIHZhbHVlIGlzIG51bGwsIHRoZSBvcHRpb24gdG8gcmVxdWVzdCBoZWxwIHdvbid0IGJlIG9mZmVyZWQgKi9cblx0ZGlzYW1OZWVkZWRUZXh0OiAne3tkbnxkYXRlPXt7Jy5jb25jYXQoJ3N1YnN0OicsICdDVVJSRU5UTU9OVEhOQU1FJywgJ319IHt7JywgJ3N1YnN0OicsICdDVVJSRU5UWUVBUn19fX0nKSxcblx0LyogQ29udGVudCBvZiB0aGUgXCJGb28gKGRpc2FtYmlndWF0aW9uKVwiIHBhZ2VzIHRoYXQgd2lsbCBiZSBjcmVhdGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB1c2luZyBEaXNhbUFzc2lzdCBmcm9tIGEgXCJGb29cIiBwYWdlICovXG5cdHJlZGlyZWN0VG9EaXNhbTogJyPph43lrprlkJEgW1skMV1dJy5jb25jYXQoJ3t7UiB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlfX0nKSxcblx0LyogV2hldGhlciBpbnRlbnRpb25hbCBsaW5rcyB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlcyBjYW4gYmUgZXhwbGljaXRseSBtYXJrZWQgYnkgYWRkaW5nIFwiIChkaXNhbWJpZ3VhdGlvbilcIiAqL1xuXHRpbnRlbnRpb25hbExpbmtPcHRpb246IGZhbHNlLFxuXHQvKiBOYW1lc3BhY2VzIHRoYXQgd2lsbCBiZSBzZWFyY2hlZCBmb3IgaW5jb21pbmcgbGlua3MgdG8gdGhlIGRpc2FtYmlndWF0aW9uIHBhZ2UgKHBhZ2VzIGluIG90aGVyIG5hbWVzcGFjZXMgd2lsbCBiZSBpZ25vcmVkKSAqL1xuXHR0YXJnZXROYW1lc3BhY2VzOiBbNiwgMTAsIDE0LCAzMDIsIDBdLFxuXHQvKiBOdW1iZXIgb2YgYmFja2xpbmtzIHRoYXQgd2lsbCBiZSBkb3dubG9hZGVkIGF0IG9uY2UgV2hlbiB1c2luZyBibHJlZGlyZWN0LCB0aGUgbWF4aW11bSBsaW1pdCBpcyBzdXBwb3NlZGx5IGhhbHZlZCAoc2VlIGh0dHA6Ly93d3cubWVkaWF3aWtpLm9yZy93aWtpL0FQSTpCYWNrbGlua3MpICovXG5cdGJhY2tsaW5rTGltaXQ6IDI1MCxcblx0LyogTnVtYmVyIG9mIHRpdGxlcyB3ZSBjYW4gcXVlcnkgZm9yIGF0IG9uY2UgKi9cblx0cXVlcnlUaXRsZUxpbWl0OiA1MCxcblx0LyogTnVtYmVyIG9mIGNoYXJhY3RlcnMgYmVmb3JlIGFuZCBhZnRlciB0aGUgaW5jb21pbmcgbGluayB0aGF0IHdpbGwgYmUgZGlzcGxheWVkICovXG5cdHJhZGl1czogMzAwLFxuXHQvKiBIZWlnaHQgb2YgdGhlIGNvbnRleHQgYm94LCBpbiBsaW5lcyAqL1xuXHRudW1Db250ZXh0TGluZXM6IDQsXG5cdC8qIE51bWJlciBvZiBwYWdlcyB0aGF0IHdpbGwgYmUgc3RvcmVkIGJlZm9yZSBzYXZpbmcsIHNvIHRoYXQgY2hhbmdlcyB0byB0aGVtIGNhbiBiZSB1bmRvbmUgaWYgbmVlZCBiZSAqL1xuXHRoaXN0b3J5U2l6ZTogMixcblx0LyogTWluaW11bSB0aW1lIGluIHNlY29uZHMgc2luY2UgdGhlIGxhc3QgY2hhbmdlIHdhcyBzYXZlZCBiZWZvcmUgYSBuZXcgZWRpdCBjYW4gYmUgbWFkZS4gQSBuZWdhdGl2ZSB2YWx1ZSBvciAwIGRpc2FibGVzIHRoZSBjb29sZG93bi4gVXNlcnMgd2l0aCB0aGUgXCJib3RcIiByaWdodCB3b24ndCBiZSBhZmZlY3RlZCBieSB0aGUgY29vbGRvd24gKi9cblx0ZWRpdENvb2xkb3duOiAwLFxuXHQvKiBTcGVjaWZ5IGhvdyB0aGUgd2F0Y2hsaXN0IGlzIGFmZmVjdGVkIGJ5IERpc2FtQXNzaXN0IGVkaXRzLiBQb3NzaWJsZSB2YWx1ZXM6IFwid2F0Y2hcIiwgXCJ1bndhdGNoXCIsIFwicHJlZmVyZW5jZXNcIiwgXCJub2NoYW5nZVwiICovXG5cdHdhdGNoOiAnbm9jaGFuZ2UnLFxufTtcblxuZXhwb3J0IHtjZmd9O1xuIiwgIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbi8vIEB0cy1ub2NoZWNrXG5pbXBvcnQge1dHX0FDVElPTn0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQge2NmZ30gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3R4dH0gZnJvbSAnLi9tZXNzYWdlcyc7XG5cbmNvbnN0IGFwaSA9IGluaXRNd0FwaSgnRGlzYW1Bc3Npc3QvMS4xJyk7XG5cbmxldCBzdGFydExpbms7XG5sZXQgdWk7XG5sZXQgbGlua3M7XG5sZXQgcGFnZUNoYW5nZXM7XG5sZXQgY3VycmVudFBhZ2VUaXRsZTtcbmxldCBjdXJyZW50UGFnZVBhcmFtZXRlcnM7XG5sZXQgY3VycmVudExpbms7XG5sZXQgcG9zc2libGVCYWNrbGlua0Rlc3RpbmF0aW9ucztcbmxldCBmb3JjZVNhbWVQYWdlID0gZmFsc2U7XG5sZXQgcnVubmluZyA9IGZhbHNlO1xubGV0IGNob29zaW5nID0gZmFsc2U7XG5sZXQgY2FuTWFya0ludGVudGlvbmFsTGlua3MgPSBmYWxzZTtcbmxldCBkaXNwbGF5ZWRQYWdlcyA9IHt9O1xubGV0IGVkaXRDb3VudCA9IDA7XG5sZXQgZWRpdExpbWl0O1xuY29uc3QgcGVuZGluZ1NhdmVzID0gW107XG5sZXQgcGVuZGluZ0VkaXRCb3g7XG5sZXQgcGVuZGluZ0VkaXRCb3hUZXh0O1xubGV0IGxhc3RFZGl0TWlsbGlzID0gMDtcbmxldCBydW5uaW5nU2F2ZXMgPSBmYWxzZTtcblxuLyogRW50cnkgcG9pbnQuIENoZWNrIHdoZXRoZXIgd2UgYXJlIGluIGEgZGlzYW1iaWd1YXRpb24gcGFnZS4gSWYgc28sIGFkZCBhIGxpbmsgdG8gc3RhcnQgdGhlIHRvb2wgKi9cbmV4cG9ydCBjb25zdCBpbnN0YWxsID0gKCkgPT4ge1xuXHRpZiAoV0dfQUNUSU9OICE9PSAndmlldycgfHwgIWlzRGlzYW0oKSkge1xuXHRcdHJldHVybjtcblx0fVxuXHQkKCgpID0+IHtcblx0XHRjb25zdCBwb3J0bGV0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcC1jYWN0aW9ucycpID8gJ3AtY2FjdGlvbnMnIDogJ3AtdGInO1xuXHRcdC8vIFRoaXMgaXMgYSBcIiAoZGlzYW1iaWd1YXRpb24pXCIgcGFnZVxuXHRcdGlmIChuZXcgUmVnRXhwKGNmZy5kaXNhbVJlZ0V4cCkudGVzdChnZXRUaXRsZSgpKSkge1xuXHRcdFx0Y29uc3Qgc3RhcnRNYWluTGluayA9ICQobXcudXRpbC5hZGRQb3J0bGV0TGluayhwb3J0bGV0SWQsICcjJywgdHh0LnN0YXJ0TWFpbiwgJ2NhLWRpc2FtYXNzaXN0LW1haW4nKSkub24oXG5cdFx0XHRcdCdjbGljaycsXG5cdFx0XHRcdHN0YXJ0TWFpblxuXHRcdFx0KTtcblx0XHRcdGNvbnN0IHN0YXJ0U2FtZUxpbmsgPSAkKG13LnV0aWwuYWRkUG9ydGxldExpbmsocG9ydGxldElkLCAnIycsIHR4dC5zdGFydFNhbWUsICdjYS1kaXNhbWFzc2lzdC1zYW1lJykpLm9uKFxuXHRcdFx0XHQnY2xpY2snLFxuXHRcdFx0XHRzdGFydFNhbWVcblx0XHRcdCk7XG5cdFx0XHRzdGFydExpbmsgPSBzdGFydE1haW5MaW5rLmFkZChzdGFydFNhbWVMaW5rKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RhcnRMaW5rID0gJChtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCB0eHQuc3RhcnQsICdjYS1kaXNhbWFzc2lzdC1wYWdlJykpLm9uKCdjbGljaycsIHN0YXJ0KTtcblx0XHR9XG5cdH0pO1xufTtcblxuLyogU3RhcnQgdGhlIHRvb2wuIERpc3BsYXkgdGhlIFVJIGFuZCBiZWdpbiBsb29raW5nIGZvciBsaW5rcyB0byBmaXggKi9cbmNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuXHRpZiAocnVubmluZykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHJ1bm5pbmcgPSB0cnVlO1xuXHRsaW5rcyA9IFtdO1xuXHRwYWdlQ2hhbmdlcyA9IFtdO1xuXHRkaXNwbGF5ZWRQYWdlcyA9IHt9O1xuXHRlbnN1cmVEQUJFeGlzdHMoKS50aGVuKChjYW5NYXJrKSA9PiB7XG5cdFx0Y2FuTWFya0ludGVudGlvbmFsTGlua3MgPSBjYW5NYXJrO1xuXHRcdGNyZWF0ZVVJKCk7XG5cdFx0YWRkVW5sb2FkQ29uZmlybSgpO1xuXHRcdG1hcmtEaXNhbU9wdGlvbnMoKTtcblx0XHRjaGVja0VkaXRMaW1pdCgpLnRoZW4oKCkgPT4ge1xuXHRcdFx0dG9nZ2xlUGVuZGluZ0VkaXRCb3goZmFsc2UpO1xuXHRcdFx0ZG9QYWdlKCk7XG5cdFx0fSk7XG5cdH0pO1xufTtcblxuLyogU3RhcnQgRGlzYW1Bc3Npc3QuIERpc2FtYmlndWF0ZSBpbmNvbWluZyBsaW5rcyB0byB0aGUgY3VycmVudCBwYWdlLCByZWdhcmRsZXNzIG9mIHRoZSB0aXRsZS4gKi9cbmNvbnN0IHN0YXJ0U2FtZSA9ICgpID0+IHtcblx0Zm9yY2VTYW1lUGFnZSA9IHRydWU7XG5cdHN0YXJ0KCk7XG59O1xuXG4vKiBTdGFydCBEaXNhbUFzc2lzdC4gSWYgdGhlIHBhZ2UgdGl0bGUgZW5kcyB3aXRoIFwiIChkaXNhbWJpZ3VhdGlvbilcIiwgZGlzYW1iaWd1YXRlIGxpbmtzIHRvIHRoZSBwcmltYXJ5IHRvcGljIGFydGljbGUuIE90aGVyd2lzZSwgZGlzYW1iaWd1YXRlIGxpbmtzIHRvIHRoZSBjdXJyZW50IHBhZ2UuICovXG5jb25zdCBzdGFydE1haW4gPSAoKSA9PiB7XG5cdGZvcmNlU2FtZVBhZ2UgPSBmYWxzZTtcblx0c3RhcnQoKTtcbn07XG5cbi8qIENyZWF0ZSBhbmQgc2hvdyB0aGUgdXNlciBpbnRlcmZhY2UuICovXG5jb25zdCBjcmVhdGVVSSA9ICgpID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdHVpID0ge1xuXHRcdGRpc3BsYXk6ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWJveCBkaXNhbWFzc2lzdC1tYWluYm94JyksXG5cdFx0ZmluaXNoZWRNZXNzYWdlOiAkKCc8ZGl2PicpLnRleHQodHh0Lm5vTW9yZUxpbmtzKS5oaWRlKCksXG5cdFx0cGFnZVRpdGxlTGluZTogJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LXBhZ2V0aXRsZWxpbmUnKSxcblx0XHRwZW5kaW5nRWRpdENvdW50ZXI6ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWVkaXRjb3VudGVyJyksXG5cdFx0Y29udGV4dDogJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWNvbnRleHQnKSxcblx0XHR1bmRvQnV0dG9uOiBjcmVhdGVCdXR0b24odHh0LnVuZG8sIHVuZG8pLFxuXHRcdG9taXRCdXR0b246IGNyZWF0ZUJ1dHRvbih0eHQub21pdCwgb21pdCksXG5cdFx0ZW5kQnV0dG9uOiBjcmVhdGVCdXR0b24odHh0LmNsb3NlLCBzYXZlQW5kRW5kKSxcblx0XHRyZWZyZXNoQnV0dG9uOiBjcmVhdGVCdXR0b24odHh0LnJlZnJlc2gsIHJlZnJlc2gpLFxuXHRcdHRpdGxlQXNUZXh0QnV0dG9uOiBjcmVhdGVCdXR0b24odHh0LnRpdGxlQXNUZXh0LCBjaG9vc2VUaXRsZUZyb21Qcm9tcHQpLFxuXHRcdGludGVudGlvbmFsTGlua0J1dHRvbjogY2FuTWFya0ludGVudGlvbmFsTGlua3Ncblx0XHRcdD8gY3JlYXRlQnV0dG9uKHR4dC5pbnRlbnRpb25hbExpbmssIGNob29zZUludGVudGlvbmFsTGluaylcblx0XHRcdDogJCgnPHNwYW4+JyksXG5cdFx0ZGlzYW1OZWVkZWRCdXR0b246IGNmZy5kaXNhbU5lZWRlZFRleHQgPyBjcmVhdGVCdXR0b24odHh0LmRpc2FtTmVlZGVkLCBjaG9vc2VEaXNhbU5lZWRlZCkgOiAkKCc8c3Bhbj4nKSxcblx0XHRyZW1vdmVMaW5rQnV0dG9uOiBjcmVhdGVCdXR0b24odHh0LnJlbW92ZUxpbmssIGNob29zZUxpbmtSZW1vdmFsKSxcblx0fTtcblx0Y29uc3QgdG9wID0gJCgnPGRpdj4nKVxuXHRcdC5hZGRDbGFzcygnZGlzYW1hc3Npc3QtdG9wJylcblx0XHQuYXBwZW5kKFt1aS5wZW5kaW5nRWRpdENvdW50ZXIsIHVpLmZpbmlzaGVkTWVzc2FnZSwgdWkucGFnZVRpdGxlTGluZV0pO1xuXHRjb25zdCBsZWZ0QnV0dG9ucyA9ICQoJzxkaXY+Jylcblx0XHQuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWxlZnRidXR0b25zJylcblx0XHQuYXBwZW5kKFtcblx0XHRcdHVpLnRpdGxlQXNUZXh0QnV0dG9uLFxuXHRcdFx0dWkucmVtb3ZlTGlua0J1dHRvbixcblx0XHRcdHVpLmludGVudGlvbmFsTGlua0J1dHRvbixcblx0XHRcdHVpLmRpc2FtTmVlZGVkQnV0dG9uLFxuXHRcdFx0dWkub21pdEJ1dHRvbixcblx0XHRdKTtcblx0Y29uc3QgcmlnaHRCdXR0b25zID0gJCgnPGRpdj4nKVxuXHRcdC5hZGRDbGFzcygnZGlzYW1hc3Npc3QtcmlnaHRidXR0b25zJylcblx0XHQuYXBwZW5kKFt1aS51bmRvQnV0dG9uLCB1aS5yZWZyZXNoQnV0dG9uLCB1aS5lbmRCdXR0b25dKTtcblx0Y29uc3QgYWxsQnV0dG9ucyA9ICQoJzxkaXY+JykuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWFsbGJ1dHRvbnMnKS5hcHBlbmQoW2xlZnRCdXR0b25zLCByaWdodEJ1dHRvbnNdKTtcblx0dWkuZGlzcGxheS5hcHBlbmQoW3RvcCwgdWkuY29udGV4dCwgYWxsQnV0dG9uc10pO1xuXHR1cGRhdGVFZGl0Q291bnRlcigpO1xuXHR0b2dnbGVBY3Rpb25CdXR0b25zKGZhbHNlKTtcblx0Ly8gSW5zZXJ0IHRoZSBVSSBpbiB0aGUgcGFnZVxuXHQkYm9keS5maW5kKCcjbXctY29udGVudC10ZXh0JykuYmVmb3JlKHVpLmRpc3BsYXkpO1xuXHR1aS5kaXNwbGF5LmhpZGUoKS5mYWRlSW4oKTtcbn07XG5cbi8qIElmIHRoZXJlIGFyZSBwZW5kaW5nIGNoYW5nZXMsIHNob3cgYSBjb25maXJtIGRpYWxvZyBiZWZvcmUgY2xvc2luZyAqL1xuY29uc3QgYWRkVW5sb2FkQ29uZmlybSA9ICgpID0+IHtcblx0JCh3aW5kb3cpLm9uKCdiZWZvcmV1bmxvYWQnLCAoKSA9PiB7XG5cdFx0aWYgKHJ1bm5pbmcgJiYgY2hlY2tBY3R1YWxDaGFuZ2VzKCkpIHtcblx0XHRcdHJldHVybiB0eHQucGVuZGluZztcblx0XHR9IGVsc2UgaWYgKGVkaXRDb3VudCAhPT0gMCkge1xuXHRcdFx0cmV0dXJuIHR4dC5lZGl0SW5Qcm9ncmVzcztcblx0XHR9XG5cdH0pO1xufTtcblxuLyogTWFyayB0aGUgZGlzYW1iaWd1YXRpb24gb3B0aW9ucyBhcyBzdWNoICovXG5jb25zdCBtYXJrRGlzYW1PcHRpb25zID0gKCkgPT4ge1xuXHRjb25zdCBvcHRpb25QYWdlVGl0bGVzID0gW107XG5cdGNvbnN0IG9wdGlvbk1hcmtlcnMgPSBbXTtcblx0Z2V0RGlzYW1PcHRpb25zKCkuZWFjaCgoX2luZGV4LCBlbGVtZW50KSA9PiB7XG5cdFx0Y29uc3QgbGluayA9ICQoZWxlbWVudCk7XG5cdFx0Y29uc3QgdGl0bGUgPSBleHRyYWN0UGFnZU5hbWUobGluayk7XG5cdFx0Y29uc3Qgb3B0aW9uTWFya2VyID0gJCgnPGE+Jylcblx0XHRcdC5hdHRyKCdocmVmJywgJyMnKVxuXHRcdFx0LmFkZENsYXNzKCdkaXNhbWFzc2lzdC1vcHRpb25tYXJrZXInKVxuXHRcdFx0LnRleHQodHh0Lm9wdGlvbk1hcmtlcilcblx0XHRcdC5vbignY2xpY2snLCAoZXYpID0+IHtcblx0XHRcdFx0ZXYucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Y2hvb3NlUmVwbGFjZW1lbnQodGl0bGUpO1xuXHRcdFx0fSk7XG5cdFx0bGluay5hZnRlcihvcHRpb25NYXJrZXIpO1xuXHRcdG9wdGlvbk1hcmtlcnMucHVzaChvcHRpb25NYXJrZXIpO1xuXHRcdG9wdGlvblBhZ2VUaXRsZXMucHVzaCh0aXRsZSk7XG5cdH0pO1xuXHQvLyBOb3cgY2hlY2sgdGhlIGRpc2FtYmlndWF0aW9uIG9wdGlvbnMgYW5kIGRpc3BsYXkgYSBkaWZmZXJlbnQgbWVzc2FnZSBmb3IgdGhvc2UgdGhhdCBhcmVcblx0Ly8gYWN0dWFsbHkgdGhlIHNhbWUgYXMgdGhlIHRhcmdldCBwYWdlIHdoZXJlIHRoZSBsaW5rcyBnbywgYXMgY2hvb3NpbmcgdGhvc2Ugb3B0aW9ucyBkb2Vzbid0IHJlYWxseVxuXHQvLyBhY2NvbXBsaXNoIGFueXRoaW5nIChleGNlcHQgYnlwYXNzaW5nIHJlZGlyZWN0cywgd2hpY2ggbWlnaHQgYmUgdXNlZnVsIGluIHNvbWUgY2FzZXMpXG5cdGNvbnN0IHRhcmdldFBhZ2UgPSBnZXRUYXJnZXRQYWdlKCk7XG5cdGZldGNoUmVkaXJlY3RzKFsuLi5vcHRpb25QYWdlVGl0bGVzLCAuLi50YXJnZXRQYWdlXSlcblx0XHQuZG9uZSgocmVkaXJlY3RzKSA9PiB7XG5cdFx0XHRjb25zdCBlbmRUYXJnZXRQYWdlID0gcmVzb2x2ZVJlZGlyZWN0KHRhcmdldFBhZ2UsIHJlZGlyZWN0cyk7XG5cdFx0XHRmb3IgKGNvbnN0IFtpaSwgb3B0aW9uUGFnZVRpdGxlXSBvZiBvcHRpb25QYWdlVGl0bGVzLmVudHJpZXMoKSkge1xuXHRcdFx0XHRjb25zdCBlbmRPcHRpb25UaXRsZSA9IHJlc29sdmVSZWRpcmVjdChvcHRpb25QYWdlVGl0bGUsIHJlZGlyZWN0cyk7XG5cdFx0XHRcdGlmIChpc1NhbWVQYWdlKG9wdGlvblBhZ2VUaXRsZSwgdGFyZ2V0UGFnZSkpIHtcblx0XHRcdFx0XHRvcHRpb25NYXJrZXJzW2lpXS50ZXh0KHR4dC50YXJnZXRPcHRpb25NYXJrZXIpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1jdXJyb3B0aW9ubWFya2VyJyk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoaXNTYW1lUGFnZShlbmRPcHRpb25UaXRsZSwgZW5kVGFyZ2V0UGFnZSkpIHtcblx0XHRcdFx0XHRvcHRpb25NYXJrZXJzW2lpXS50ZXh0KHR4dC5yZWRpcmVjdE9wdGlvbk1hcmtlcikuYWRkQ2xhc3MoJ2Rpc2FtYXNzaXN0LWN1cnJvcHRpb25tYXJrZXInKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0LmZhaWwoZXJyb3IpO1xufTtcblxuLyogQ2hlY2sgd2hldGhlciBpbnRlbnRpb25hbCBsaW5rcyB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlcyBjYW4gYmUgZXhwbGljaXRseSBtYXJrZWQvKiAqIGFzIHN1Y2ggaW4gdGhpcyB3aWtpLiBJZiBzbywgZW5zdXJlIHRoYXQgYSBcIkZvbyAoZGlzYW1iaWd1YXRpb24pXCIgcGFnZSBleGlzdHMuLyogKiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UgKi9cbmNvbnN0IGVuc3VyZURBQkV4aXN0cyA9ICgpID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXHRjb25zdCB0aXRsZSA9IGdldFRpdGxlKCk7XG5cdC8vIFRoYXQgY29uY2VwdCBkb2Vzbid0IGV4aXN0IGluIHRoaXMgd2lraS5cblx0aWYgKCFjZmcuaW50ZW50aW9uYWxMaW5rT3B0aW9uKSB7XG5cdFx0ZGVmZXJyZWQucmVzb2x2ZShmYWxzZSk7XG5cdFx0Ly8gXCJGb28gKGRpc2FtYmlndWF0aW9uKVwiIGV4aXN0czogaXQncyB0aGUgY3VycmVudCBwYWdlLlxuXHR9IGVsc2UgaWYgKG5ldyBSZWdFeHAoY2ZnLmRpc2FtUmVnRXhwKS5leGVjKHRpdGxlKSkge1xuXHRcdGRlZmVycmVkLnJlc29sdmUodHJ1ZSk7XG5cdH0gZWxzZSB7XG5cdFx0Y29uc3QgZGlzYW1UaXRsZSA9IGNmZy5kaXNhbUZvcm1hdC5yZXBsYWNlKCckMScsIHRpdGxlKTtcblx0XHRsb2FkUGFnZShkaXNhbVRpdGxlKVxuXHRcdFx0LmRvbmUoKHBhZ2UpID0+IHtcblx0XHRcdFx0Ly8gXCJGb28gKGRpc2FtYmlndWF0aW9uKVwiIGRvZXNuJ3QgZXhpc3QuXG5cdFx0XHRcdGlmIChwYWdlLm1pc3NpbmcpIHtcblx0XHRcdFx0XHQvLyBXZSB0cnkgdG8gY3JlYXRlIGl0XG5cdFx0XHRcdFx0cGFnZS5jb250ZW50ID0gY2ZnLnJlZGlyZWN0VG9EaXNhbS5yZXBsYWNlKCckMScsIHRpdGxlKTtcblx0XHRcdFx0XHRjb25zdCBzdW1tYXJ5ID0gdHh0LnJlZGlyZWN0U3VtbWFyeS5yZXBsYWNlKCckMScsIHRpdGxlKTtcblx0XHRcdFx0XHRzYXZlUGFnZShkaXNhbVRpdGxlLCBwYWdlLCBzdW1tYXJ5LCBmYWxzZSwgdHJ1ZSlcblx0XHRcdFx0XHRcdC5kb25lKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSh0cnVlKTtcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQuZmFpbCgoZGVzY3JpcHRpb24pID0+IHtcblx0XHRcdFx0XHRcdFx0ZXJyb3IoZGVzY3JpcHRpb24pO1xuXHRcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKGZhbHNlKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdC8vIEl0IGRvZXMgZXhpc3Rcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHRydWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmZhaWwoKGRlc2NyaXB0aW9uKSA9PiB7XG5cdFx0XHRcdGVycm9yKGRlc2NyaXB0aW9uKTtcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShmYWxzZSk7XG5cdFx0XHR9KTtcblx0fVxuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcblxuLyogQ2hlY2sgd2hldGhlciB0aGUgZWRpdCBjb29sZG93biBhcHBsaWVzIGFuZCBzZXRzIGVkaXRMaW1pdCBhY2NvcmRpbmdseS4vKiAqIFJldHVybnMgYSBqUXVlcnkgcHJvbWlzZSAqL1xuY29uc3QgY2hlY2tFZGl0TGltaXQgPSAoKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcblx0aWYgKGNmZy5lZGl0Q29vbGRvd24gPD0gMCkge1xuXHRcdGVkaXRMaW1pdCA9IGZhbHNlO1xuXHRcdGRlZmVycmVkLnJlc29sdmUoKTtcblx0fSBlbHNlIHtcblx0XHRmZXRjaFJpZ2h0cygpXG5cdFx0XHQuZG9uZSgocmlnaHRzKSA9PiB7XG5cdFx0XHRcdGVkaXRMaW1pdCA9ICFyaWdodHMuaW5jbHVkZXMoJ2JvdCcpO1xuXHRcdFx0fSlcblx0XHRcdC5mYWlsKChkZXNjcmlwdGlvbikgPT4ge1xuXHRcdFx0XHRlcnJvcihkZXNjcmlwdGlvbik7XG5cdFx0XHRcdGVkaXRMaW1pdCA9IHRydWU7XG5cdFx0XHR9KVxuXHRcdFx0LmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmUoKTtcblx0XHRcdH0pO1xuXHR9XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBGaW5kIGFuZCBhc2sgdGhlIHVzZXIgdG8gZml4IGFsbCB0aGUgaW5jb21pbmcgbGlua3MgdG8gdGhlIGRpc2FtYmlndWF0aW9uIChcInRhcmdldFwiKS8qICogcGFnZSBmcm9tIGEgc2luZ2xlIFwib3JpZ2luXCIgcGFnZSAqL1xuY29uc3QgZG9QYWdlID0gKCkgPT4ge1xuXHRpZiAocGFnZUNoYW5nZXMubGVuZ3RoID4gY2ZnLmhpc3RvcnlTaXplKSB7XG5cdFx0YXBwbHlDaGFuZ2UocGFnZUNoYW5nZXMuc2hpZnQoKSk7XG5cdH1cblx0aWYgKGxpbmtzLmxlbmd0aCkge1xuXHRcdGN1cnJlbnRQYWdlVGl0bGUgPSBsaW5rcy5zaGlmdCgpO1xuXHRcdGRpc3BsYXllZFBhZ2VzW2N1cnJlbnRQYWdlVGl0bGVdID0gdHJ1ZTtcblx0XHR0b2dnbGVBY3Rpb25CdXR0b25zKGZhbHNlKTtcblx0XHRsb2FkUGFnZShjdXJyZW50UGFnZVRpdGxlKVxuXHRcdFx0LmRvbmUoKGRhdGEpID0+IHtcblx0XHRcdFx0Y3VycmVudFBhZ2VQYXJhbWV0ZXJzID0gZGF0YTtcblx0XHRcdFx0Y3VycmVudExpbmsgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdGRvTGluaygpO1xuXHRcdFx0fSlcblx0XHRcdC5mYWlsKGVycm9yKTtcblx0fSBlbHNlIHtcblx0XHRjb25zdCB0YXJnZXRQYWdlID0gZ2V0VGFyZ2V0UGFnZSgpO1xuXHRcdGdldEJhY2tsaW5rcyh0YXJnZXRQYWdlKVxuXHRcdFx0LmRvbmUoKGJhY2tsaW5rcywgcGFnZVRpdGxlcykgPT4ge1xuXHRcdFx0XHRjb25zdCBwZW5kaW5nID0ge307XG5cdFx0XHRcdGZvciAoY29uc3QgZWwgb2YgcGVuZGluZ1NhdmVzKSB7XG5cdFx0XHRcdFx0cGVuZGluZ1tlbFswXV0gPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHBvc3NpYmxlQmFja2xpbmtEZXN0aW5hdGlvbnMgPSBwYWdlVGl0bGVzLmZpbHRlcigodCkgPT4ge1xuXHRcdFx0XHRcdGlmICh0ID09PSB0YXJnZXRQYWdlKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHJlbW92ZURpc2FtKHQpICE9PSB0YXJnZXRQYWdlO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly8gT25seSBpbmNvbWluZyBsaW5rcyBmcm9tIHBhZ2VzIHdlIGhhdmVuJ3Qgc2VlbiB5ZXQgYW5kIHdlIGFyZW4ndCBjdXJyZW50bHlcblx0XHRcdFx0Ly8gc2F2aW5nIChkaXNwbGF5ZWRQYWdlcyBpcyByZXNldCB3aGVuIHRoZSB0b29sIGlzIGNsb3NlZCBhbmQgb3BlbmVkIGFnYWluLFxuXHRcdFx0XHQvLyB3aGlsZSB0aGUgbGlzdCBvZiBwZW5kaW5nIGNoYW5nZXMgaXNuJ3Q7IGlmIHRoZSBlZGl0IGNvb2xkb3duIGlzIGRpc2FibGVkLFxuXHRcdFx0XHQvLyBpdCB3aWxsIGJlIGVtcHR5KVxuXHRcdFx0XHRsaW5rcyA9IGJhY2tsaW5rcy5maWx0ZXIoKGVsKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuICFkaXNwbGF5ZWRQYWdlc1tlbF0gJiYgIXBlbmRpbmdbZWxdO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0aWYgKGxpbmtzLmxlbmd0aCkge1xuXHRcdFx0XHRcdGRvUGFnZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHVwZGF0ZUNvbnRleHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5mYWlsKGVycm9yKTtcblx0fVxufTtcblxuLyogRmluZCBhbmQgYXNrIHRoZSB1c2VyIHRvIGZpeCBhIHNpbmdsZSBpbmNvbWluZyBsaW5rIHRvIHRoZSBkaXNhbWJpZ3VhdGlvbiAoXCJ0YXJnZXRcIikvKiAqIHBhZ2UgKi9cbmNvbnN0IGRvTGluayA9ICgpID0+IHtcblx0Y3VycmVudExpbmsgPSBleHRyYWN0TGlua1RvUGFnZShcblx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCxcblx0XHRwb3NzaWJsZUJhY2tsaW5rRGVzdGluYXRpb25zLFxuXHRcdGN1cnJlbnRMaW5rID8gY3VycmVudExpbmsuZW5kIDogMFxuXHQpO1xuXHRpZiAoY3VycmVudExpbmspIHtcblx0XHR1cGRhdGVDb250ZXh0KCk7XG5cdH0gZWxzZSB7XG5cdFx0ZG9QYWdlKCk7XG5cdH1cbn07XG5cbi8qIFJlcGxhY2UgdGhlIHRhcmdldCBvZiBhIGxpbmsgd2l0aCBhIGRpZmZlcmVudCBvbmUvKiAqIHBhZ2VUaXRsZTogTmV3IGxpbmsgdGFyZ2V0LyogKiBleHRyYTogQWRkaXRpb25hbCB0ZXh0IGFmdGVyIHRoZSBsaW5rIChvcHRpb25hbCkvKiAqIHN1bW1hcnk6IENoYW5nZSBzdW1tYXJ5IChvcHRpb25hbCkgKi9cbmNvbnN0IGNob29zZVJlcGxhY2VtZW50ID0gKHBhZ2VUaXRsZSwgZXh0cmEsIHN1bW1hcnkpID0+IHtcblx0aWYgKGNob29zaW5nKSB7XG5cdFx0Y2hvb3NpbmcgPSBmYWxzZTtcblx0XHRzdW1tYXJ5IHx8PSBwYWdlVGl0bGUgPyB0eHQuc3VtbWFyeUNoYW5nZWQucmVwbGFjZSgnJDEnLCBwYWdlVGl0bGUpIDogdHh0LnN1bW1hcnlPbWl0dGVkO1xuXHRcdGFkZENoYW5nZShjdXJyZW50UGFnZVRpdGxlLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMsIGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LCBjdXJyZW50TGluaywgc3VtbWFyeSk7XG5cdFx0aWYgKHBhZ2VUaXRsZSAmJiAocGFnZVRpdGxlICE9PSBnZXRUYXJnZXRQYWdlKCkgfHwgZXh0cmEpKSB7XG5cdFx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCA9IHJlcGxhY2VMaW5rKFxuXHRcdFx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMuY29udGVudCxcblx0XHRcdFx0cGFnZVRpdGxlLFxuXHRcdFx0XHRjdXJyZW50TGluayxcblx0XHRcdFx0ZXh0cmEgfHwgJydcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGRvTGluaygpO1xuXHR9XG59O1xuXG4vKiBSZXBsYWNlIHRoZSBsaW5rIHdpdGggYW4gZXhwbGljaXQgbGluayB0byB0aGUgZGlzYW1iaWd1YXRpb24gcGFnZSAqL1xuY29uc3QgY2hvb3NlSW50ZW50aW9uYWxMaW5rID0gKCkgPT4ge1xuXHRjb25zdCBkaXNhbVRpdGxlID0gY2ZnLmRpc2FtRm9ybWF0LnJlcGxhY2UoJyQxJywgZ2V0VGFyZ2V0UGFnZSgpKTtcblx0Y2hvb3NlUmVwbGFjZW1lbnQoZGlzYW1UaXRsZSwgJycsIHR4dC5zdW1tYXJ5SW50ZW50aW9uYWwpO1xufTtcblxuLyogUHJvbXB0IGZvciBhbiBhbHRlcm5hdGl2ZSBsaW5rIHRhcmdldCBhbmQgdXNlIGl0IGFzIGEgcmVwbGFjZW1lbnQgKi9cbmNvbnN0IGNob29zZVRpdGxlRnJvbVByb21wdCA9ICgpID0+IHtcblx0Y29uc3QgdGl0bGUgPSBwcm9tcHQodHh0LnRpdGxlQXNUZXh0UHJvbXB0KTtcblx0aWYgKHRpdGxlICE9PSBudWxsKSB7XG5cdFx0Y2hvb3NlUmVwbGFjZW1lbnQodGl0bGUpO1xuXHR9XG59O1xuXG4vKiBSZW1vdmUgdGhlIGN1cnJlbnQgbGluaywgbGVhdmluZyB0aGUgdGV4dCB1bmNoYW5nZWQgKi9cbmNvbnN0IGNob29zZUxpbmtSZW1vdmFsID0gKCkgPT4ge1xuXHRpZiAoY2hvb3NpbmcpIHtcblx0XHRjb25zdCBzdW1tYXJ5ID0gdHh0LnN1bW1hcnlSZW1vdmVkO1xuXHRcdGFkZENoYW5nZShjdXJyZW50UGFnZVRpdGxlLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMsIGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LCBjdXJyZW50TGluaywgc3VtbWFyeSk7XG5cdFx0Y3VycmVudFBhZ2VQYXJhbWV0ZXJzLmNvbnRlbnQgPSByZW1vdmVMaW5rKGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LCBjdXJyZW50TGluayk7XG5cdFx0ZG9MaW5rKCk7XG5cdH1cbn07XG5cbi8qIEFkZCBhIFwiZGlzYW1iaWd1YXRpb24gbmVlZGVkXCIgdGVtcGxhdGUgYWZ0ZXIgdGhlIGxpbmsgKi9cbmNvbnN0IGNob29zZURpc2FtTmVlZGVkID0gKCkgPT4ge1xuXHRjaG9vc2VSZXBsYWNlbWVudChjdXJyZW50TGluay50aXRsZSwgY2ZnLmRpc2FtTmVlZGVkVGV4dCwgdHh0LnN1bW1hcnlIZWxwTmVlZGVkKTtcbn07XG5cbi8qIFVuZG8gdGhlIGxhc3QgY2hhbmdlICovXG5jb25zdCB1bmRvID0gKCkgPT4ge1xuXHRpZiAocGFnZUNoYW5nZXMubGVuZ3RoKSB7XG5cdFx0Y29uc3QgbGFzdFBhZ2UgPSBwYWdlQ2hhbmdlcy5hdCgtMSk7XG5cdFx0aWYgKGN1cnJlbnRQYWdlVGl0bGUgIT09IGxhc3RQYWdlLnRpdGxlKSB7XG5cdFx0XHRsaW5rcy51bnNoaWZ0KGN1cnJlbnRQYWdlVGl0bGUpO1xuXHRcdFx0Y3VycmVudFBhZ2VUaXRsZSA9IGxhc3RQYWdlLnRpdGxlO1xuXHRcdH1cblx0XHRjdXJyZW50UGFnZVBhcmFtZXRlcnMgPSBsYXN0UGFnZS5wYWdlO1xuXHRcdGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50ID0gbGFzdFBhZ2UuY29udGVudEJlZm9yZS5wb3AoKTtcblx0XHRjdXJyZW50TGluayA9IGxhc3RQYWdlLmxpbmtzLnBvcCgpO1xuXHRcdGxhc3RQYWdlLnN1bW1hcnkucG9wKCk7XG5cdFx0aWYgKCFsYXN0UGFnZS5jb250ZW50QmVmb3JlLmxlbmd0aCkge1xuXHRcdFx0cGFnZUNoYW5nZXMucG9wKCk7XG5cdFx0fVxuXHRcdHVwZGF0ZUNvbnRleHQoKTtcblx0fVxufTtcblxuLyogT21pdCB0aGUgY3VycmVudCBsaW5rIHdpdGhvdXQgbWFraW5nIGEgY2hhbmdlICovXG5jb25zdCBvbWl0ID0gKCkgPT4ge1xuXHRjaG9vc2VSZXBsYWNlbWVudCgpO1xufTtcblxuLyogU2F2ZSBhbGwgdGhlIHBlbmRpbmcgY2hhbmdlcyBhbmQgcmVzdGFydCB0aGUgdG9vbC4gKi9cbmNvbnN0IHJlZnJlc2ggPSAoKSA9PiB7XG5cdHNhdmVBbmRFbmQoKTtcblx0c3RhcnQoKTtcbn07XG5cbi8qIEVuYWJsZSBvciBkaXNhYmxlIHRoZSBidXR0b25zIHRoYXQgY2FuIHBlcmZvcm0gYWN0aW9ucyBvbiBhIHBhZ2Ugb3IgY2hhbmdlIHRoZSBjdXJyZW50IGxpbmsuLyogKiBlbmFibGVkOiBXaGV0aGVyIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBidXR0b25zICovXG5jb25zdCB0b2dnbGVBY3Rpb25CdXR0b25zID0gKGVuYWJsZWQpID0+IHtcblx0Y29uc3QgYWZmZWN0ZWRCdXR0b25zID0gW1xuXHRcdHVpLm9taXRCdXR0b24sXG5cdFx0dWkudGl0bGVBc1RleHRCdXR0b24sXG5cdFx0dWkucmVtb3ZlTGlua0J1dHRvbixcblx0XHR1aS5pbnRlbnRpb25hbExpbmtCdXR0b24sXG5cdFx0dWkuZGlzYW1OZWVkZWRCdXR0b24sXG5cdFx0dWkudW5kb0J1dHRvbixcblx0XTtcblx0Zm9yIChjb25zdCBidXR0b24gb2YgYWZmZWN0ZWRCdXR0b25zKSB7XG5cdFx0YnV0dG9uLnByb3AoJ2Rpc2FibGVkJywgIWVuYWJsZWQpO1xuXHR9XG59O1xuXG4vKiBTaG93IG9yIGhpZGUgdGhlICdubyBtb3JlIGxpbmtzJyBtZXNzYWdlLyogKiBzaG93OiBXaGV0aGVyIHRvIHNob3cgb3IgaGlkZSB0aGUgbWVzc2FnZSAqL1xuY29uc3QgdG9nZ2xlRmluaXNoZWRNZXNzYWdlID0gKHNob3cpID0+IHtcblx0dG9nZ2xlQWN0aW9uQnV0dG9ucyghc2hvdyk7XG5cdHVpLnVuZG9CdXR0b24ucHJvcCgnZGlzYWJsZWQnLCAhcGFnZUNoYW5nZXMubGVuZ3RoKTtcblx0dWkuZmluaXNoZWRNZXNzYWdlLnRvZ2dsZShzaG93KTtcblx0dWkucGFnZVRpdGxlTGluZS50b2dnbGUoIXNob3cpO1xuXHR1aS5jb250ZXh0LnRvZ2dsZSghc2hvdyk7XG59O1xuXG5jb25zdCB0b2dnbGVQZW5kaW5nRWRpdEJveCA9IChzaG93KSA9PiB7XG5cdGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuXHRpZiAoIXBlbmRpbmdFZGl0Qm94KSB7XG5cdFx0cGVuZGluZ0VkaXRCb3ggPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1ib3ggZGlzYW1hc3Npc3QtcGVuZGluZ2VkaXRib3gnKTtcblx0XHRwZW5kaW5nRWRpdEJveFRleHQgPSAkKCc8ZGl2PicpO1xuXHRcdHBlbmRpbmdFZGl0Qm94LmFwcGVuZChwZW5kaW5nRWRpdEJveFRleHQpLmhpZGUoKTtcblx0XHRpZiAoZWRpdExpbWl0KSB7XG5cdFx0XHRwZW5kaW5nRWRpdEJveC5hcHBlbmQoJCgnPGRpdj4nKS50ZXh0KHR4dC5wZW5kaW5nRWRpdEJveExpbWl0ZWQpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1zdWJ0aXRsZScpKTtcblx0XHR9XG5cdFx0JGJvZHkuZmluZCgnI213LWNvbnRlbnQtdGV4dCcpLmJlZm9yZShwZW5kaW5nRWRpdEJveCk7XG5cdFx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0fVxuXHRpZiAoc2hvdykge1xuXHRcdHBlbmRpbmdFZGl0Qm94LmZhZGVJbigpO1xuXHR9IGVsc2Uge1xuXHRcdHBlbmRpbmdFZGl0Qm94LmZhZGVPdXQoKTtcblx0fVxufTtcblxuY29uc3Qgbm90aWZ5Q29tcGxldGlvbiA9ICgpID0+IHtcblx0Y29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG5cdGNvbnN0IG9sZFRpdGxlID0gZG9jdW1lbnQudGl0bGU7XG5cdGRvY3VtZW50LnRpdGxlID0gdHh0Lm5vdGlmeUNoYXJhY3RlciArIGRvY3VtZW50LnRpdGxlO1xuXHQkYm9keS5vbmUoJ21vdXNlbW92ZScsICgpID0+IHtcblx0XHRkb2N1bWVudC50aXRsZSA9IG9sZFRpdGxlO1xuXHR9KTtcbn07XG5cbi8qIFVwZGF0ZSB0aGUgZGlzcGxheWVkIGluZm9ybWF0aW9uIHRvIG1hdGNoIHRoZSBjdXJyZW50IGxpbmsvKiAqIG9yIGxhY2sgdGhlcmVvZiAqL1xuY29uc3QgdXBkYXRlQ29udGV4dCA9ICgpID0+IHtcblx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0aWYgKGN1cnJlbnRMaW5rKSB7XG5cdFx0dWkucGFnZVRpdGxlTGluZS5odG1sKFxuXHRcdFx0dHh0LnBhZ2VUaXRsZUxpbmVcblx0XHRcdFx0LnJlcGxhY2UoXG5cdFx0XHRcdFx0JyQxJyxcblx0XHRcdFx0XHRtdy51dGlsLmdldFVybChjdXJyZW50UGFnZVRpdGxlLCB7XG5cdFx0XHRcdFx0XHRyZWRpcmVjdDogJ25vJyxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5yZXBsYWNlKCckMicsIG13Lmh0bWwuZXNjYXBlKGN1cnJlbnRQYWdlVGl0bGUpKVxuXHRcdCk7XG5cdFx0Y29uc3QgY29udGV4dCA9IGV4dHJhY3RDb250ZXh0KGN1cnJlbnRQYWdlUGFyYW1ldGVycy5jb250ZW50LCBjdXJyZW50TGluayk7XG5cdFx0dWkuY29udGV4dFxuXHRcdFx0LmVtcHR5KClcblx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykudGV4dChjb250ZXh0WzBdKSlcblx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykudGV4dChjb250ZXh0WzFdKS5hZGRDbGFzcygnZGlzYW1hc3Npc3QtaW5jbGluaycpKVxuXHRcdFx0LmFwcGVuZCgkKCc8c3Bhbj4nKS50ZXh0KGNvbnRleHRbMl0pKTtcblx0XHRjb25zdCBudW1MaW5lcyA9IE1hdGguY2VpbCh1aS5jb250ZXh0LmhlaWdodCgpIC8gTnVtYmVyLnBhcnNlRmxvYXQodWkuY29udGV4dC5jc3MoJ2xpbmUtaGVpZ2h0JykpKTtcblx0XHRpZiAobnVtTGluZXMgPCBjZmcubnVtQ29udGV4dExpbmVzKSB7XG5cdFx0XHQvLyBBZGQgY2ZnLm51bUNvbnRleHRMaW5lcyAtIG51bUxpbmVzICsgMSBsaW5lIGJyZWFrcywgc28gdGhhdCB0aGUgdG90YWwgbnVtYmVyXG5cdFx0XHQvLyBvZiBsaW5lcyBpcyBjZmcubnVtQ29udGV4dExpbmVzXG5cdFx0XHR1aS5jb250ZXh0LmFwcGVuZChcblx0XHRcdFx0QXJyYXkuZnJvbSh7XG5cdFx0XHRcdFx0bGVuZ3RoOiBjZmcubnVtQ29udGV4dExpbmVzIC0gbnVtTGluZXMgKyAyLFxuXHRcdFx0XHR9KS5qb2luKCc8YnI+Jylcblx0XHRcdCk7XG5cdFx0fVxuXHRcdHRvZ2dsZUZpbmlzaGVkTWVzc2FnZShmYWxzZSk7XG5cdFx0dWkudW5kb0J1dHRvbi5wcm9wKCdkaXNhYmxlZCcsICFwYWdlQ2hhbmdlcy5sZW5ndGgpO1xuXHRcdHVpLnJlbW92ZUxpbmtCdXR0b24ucHJvcCgnZGlzYWJsZWQnLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMucmVkaXJlY3QpO1xuXHRcdHVpLmludGVudGlvbmFsTGlua0J1dHRvbi5wcm9wKCdkaXNhYmxlZCcsIGN1cnJlbnRQYWdlUGFyYW1ldGVycy5yZWRpcmVjdCk7XG5cdFx0dWkuZGlzYW1OZWVkZWRCdXR0b24ucHJvcCgnZGlzYWJsZWQnLCBjdXJyZW50UGFnZVBhcmFtZXRlcnMucmVkaXJlY3QgfHwgY3VycmVudExpbmsuaGFzRGlzYW1UZW1wbGF0ZSk7XG5cdFx0Y2hvb3NpbmcgPSB0cnVlO1xuXHR9IGVsc2Uge1xuXHRcdHRvZ2dsZUZpbmlzaGVkTWVzc2FnZSh0cnVlKTtcblx0fVxufTtcblxuLyogVXBkYXRlIHRoZSBjb3VudCBvZiBwZW5kaW5nIGNoYW5nZXMgKi9cbmNvbnN0IHVwZGF0ZUVkaXRDb3VudGVyID0gKCkgPT4ge1xuXHRpZiAodWkucGVuZGluZ0VkaXRDb3VudGVyKSB7XG5cdFx0dWkucGVuZGluZ0VkaXRDb3VudGVyLnRleHQoXG5cdFx0XHR0eHQucGVuZGluZ0VkaXRDb3VudGVyLnJlcGxhY2UoJyQxJywgZWRpdENvdW50KS5yZXBsYWNlKCckMicsIGNvdW50QWN0dWFsbHlDaGFuZ2VkRnVsbHlDaGVja2VkUGFnZXMoKSlcblx0XHQpO1xuXHR9XG5cdGlmIChwZW5kaW5nRWRpdEJveCkge1xuXHRcdGlmIChlZGl0Q291bnQgPT09IDAgJiYgIXJ1bm5pbmcpIHtcblx0XHRcdHRvZ2dsZVBlbmRpbmdFZGl0Qm94KGZhbHNlKTtcblx0XHRcdG5vdGlmeUNvbXBsZXRpb24oKTtcblx0XHR9XG5cdFx0bGV0IHRleHRDb250ZW50ID0gZWRpdENvdW50O1xuXHRcdGlmIChlZGl0TGltaXQpIHtcblx0XHRcdHRleHRDb250ZW50ID0gdHh0LnBlbmRpbmdFZGl0Qm94VGltZUVzdGltYXRpb25cblx0XHRcdFx0LnJlcGxhY2UoJyQxJywgZWRpdENvdW50KVxuXHRcdFx0XHQucmVwbGFjZSgnJDInLCBzZWNvbmRzVG9ISE1NU1MoY2ZnLmVkaXRDb29sZG93biAqIGVkaXRDb3VudCkpO1xuXHRcdH1cblx0XHRwZW5kaW5nRWRpdEJveFRleHQudGV4dCh0eHQucGVuZGluZ0VkaXRCb3gucmVwbGFjZSgnJDEnLCB0ZXh0Q29udGVudCkpO1xuXHR9XG59O1xuXG4vKiBBcHBseSB0aGUgY2hhbmdlcyBtYWRlIHRvIGFuIFwib3JpZ2luXCIgcGFnZS8qICogcGFnZUNoYW5nZTogQ2hhbmdlIHRoYXQgd2lsbCBiZSBzYXZlZCAqL1xuY29uc3QgYXBwbHlDaGFuZ2UgPSAocGFnZUNoYW5nZSkgPT4ge1xuXHRpZiAocGFnZUNoYW5nZS5wYWdlLmNvbnRlbnQgIT09IHBhZ2VDaGFuZ2UuY29udGVudEJlZm9yZVswXSkge1xuXHRcdGVkaXRDb3VudCsrO1xuXHRcdGNvbnN0IGNoYW5nZVN1bW1hcmllcyA9IHBhZ2VDaGFuZ2Uuc3VtbWFyeS5qb2luKHR4dC5zdW1tYXJ5U2VwYXJhdG9yKTtcblx0XHRjb25zdCBzdW1tYXJ5ID0gdHh0LnN1bW1hcnkucmVwbGFjZSgnJDEnLCBnZXRUYXJnZXRQYWdlKCkpLnJlcGxhY2UoJyQyJywgY2hhbmdlU3VtbWFyaWVzKTtcblx0XHRjb25zdCBzYXZlID0gZWRpdExpbWl0ID8gc2F2ZVdpdGhDb29sZG93biA6IHNhdmVQYWdlO1xuXHRcdHNhdmUocGFnZUNoYW5nZS50aXRsZSwgcGFnZUNoYW5nZS5wYWdlLCBzdW1tYXJ5LCB0cnVlLCB0cnVlKVxuXHRcdFx0LmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdGlmIChlZGl0Q291bnQgPiAwKSB7XG5cdFx0XHRcdFx0ZWRpdENvdW50LS07XG5cdFx0XHRcdH1cblx0XHRcdFx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0XHRcdH0pXG5cdFx0XHQuZmFpbChlcnJvcik7XG5cdFx0dXBkYXRlRWRpdENvdW50ZXIoKTtcblx0fVxufTtcblxuLyogU2F2ZSBhbGwgdGhlIHBlbmRpbmcgY2hhbmdlcyAqL1xuY29uc3QgYXBwbHlBbGxDaGFuZ2VzID0gKCkgPT4ge1xuXHRmb3IgKGNvbnN0IHBhZ2VDaGFuZ2Ugb2YgcGFnZUNoYW5nZXMpIHtcblx0XHRhcHBseUNoYW5nZShwYWdlQ2hhbmdlKTtcblx0fVxuXHRwYWdlQ2hhbmdlcyA9IFtdO1xufTtcblxuLyogUmVjb3JkIGEgbmV3IHBlbmRpbmcgY2hhbmdlLyogKiBwYWdlVGl0bGU6IFRpdGxlIG9mIHRoZSBwYWdlLyogKiBwYWdlOiBDb250ZW50IG9mIHRoZSBwYWdlLyogKiBvbGRDb250ZW50OiBDb250ZW50IG9mIHRoZSBwYWdlIGJlZm9yZSB0aGUgY2hhbmdlLyogKiBsaW5rOiBMaW5rIHRoYXQgaGFzIGJlZW4gY2hhbmdlZC8qICogc3VtbWFyeTogQ2hhbmdlIHN1bW1hcnkgKi9cbmNvbnN0IGFkZENoYW5nZSA9IChwYWdlVGl0bGUsIHBhZ2UsIG9sZENvbnRlbnQsIGxpbmssIHN1bW1hcnkpID0+IHtcblx0aWYgKCFwYWdlQ2hhbmdlcy5sZW5ndGggfHwgcGFnZUNoYW5nZXMuYXQoLTEpLnRpdGxlICE9PSBwYWdlVGl0bGUpIHtcblx0XHRwYWdlQ2hhbmdlcy5wdXNoKHtcblx0XHRcdHRpdGxlOiBwYWdlVGl0bGUsXG5cdFx0XHRwYWdlLFxuXHRcdFx0Y29udGVudEJlZm9yZTogW10sXG5cdFx0XHRsaW5rczogW10sXG5cdFx0XHRzdW1tYXJ5OiBbXSxcblx0XHR9KTtcblx0fVxuXHRjb25zdCBsYXN0UGFnZUNoYW5nZSA9IHBhZ2VDaGFuZ2VzLmF0KC0xKTtcblx0bGFzdFBhZ2VDaGFuZ2UuY29udGVudEJlZm9yZS5wdXNoKG9sZENvbnRlbnQpO1xuXHRsYXN0UGFnZUNoYW5nZS5saW5rcy5wdXNoKGxpbmspO1xuXHRsYXN0UGFnZUNoYW5nZS5zdW1tYXJ5LnB1c2goc3VtbWFyeSk7XG59O1xuXG4vKiBDaGVjayB3aGV0aGVyIGFjdHVhbCBjaGFuZ2VzIGFyZSBzdG9yZWQgaW4gdGhlIGhpc3RvcnkgYXJyYXkgKi9cbmNvbnN0IGNoZWNrQWN0dWFsQ2hhbmdlcyA9ICgpID0+IHtcblx0cmV0dXJuIGNvdW50QWN0dWFsQ2hhbmdlcygpICE9PSAwO1xufTtcblxuLyogUmV0dXJuIHRoZSBudW1iZXIgb2YgZW50cmllcyBpbiB0aGUgaGlzdG9yeSBhcnJheSB0aGF0IHJlcHJlc2VudCBhY3R1YWwgY2hhbmdlcyAqL1xuY29uc3QgY291bnRBY3R1YWxDaGFuZ2VzID0gKCkgPT4ge1xuXHRsZXQgY2hhbmdlQ291bnQgPSAwO1xuXHRmb3IgKGNvbnN0IHBhZ2VDaGFuZ2Ugb2YgcGFnZUNoYW5nZXMpIHtcblx0XHRpZiAocGFnZUNoYW5nZS5wYWdlLmNvbnRlbnQgIT09IHBhZ2VDaGFuZ2UuY29udGVudEJlZm9yZVswXSkge1xuXHRcdFx0Y2hhbmdlQ291bnQrKztcblx0XHR9XG5cdH1cblx0cmV0dXJuIGNoYW5nZUNvdW50O1xufTtcblxuLyogUmV0dXJuIHRoZSBudW1iZXIgb2YgY2hhbmdlZCBwYWdlcyBpbiB0aGUgaGlzdG9yeSBhcnJheSwgaWdub3JpbmcgdGhlIGxhc3QgZW50cnkvKiAqIGlmIHdlIGFyZW4ndCBkb25lIHdpdGggdGhhdCBwYWdlIHlldCAqL1xuY29uc3QgY291bnRBY3R1YWxseUNoYW5nZWRGdWxseUNoZWNrZWRQYWdlcyA9ICgpID0+IHtcblx0bGV0IGNoYW5nZUNvdW50ID0gY291bnRBY3R1YWxDaGFuZ2VzKCk7XG5cdGlmIChwYWdlQ2hhbmdlcy5sZW5ndGgpIHtcblx0XHRjb25zdCBsYXN0Q2hhbmdlID0gcGFnZUNoYW5nZXMuYXQoLTEpO1xuXHRcdGlmIChcblx0XHRcdGxhc3RDaGFuZ2UudGl0bGUgPT09IGN1cnJlbnRQYWdlVGl0bGUgJiZcblx0XHRcdGN1cnJlbnRMaW5rICYmXG5cdFx0XHRsYXN0Q2hhbmdlLnBhZ2UuY29udGVudCAhPT0gbGFzdENoYW5nZS5jb250ZW50QmVmb3JlWzBdXG5cdFx0KSB7XG5cdFx0XHRjaGFuZ2VDb3VudC0tO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gY2hhbmdlQ291bnQ7XG59O1xuXG4vKiBGaW5kIHRoZSBsaW5rcyB0byBkaXNhbWJpZ3VhdGlvbiBvcHRpb25zIGluIGEgZGlzYW1iaWd1YXRpb24gcGFnZSAqL1xuY29uc3QgZ2V0RGlzYW1PcHRpb25zID0gKCkgPT4ge1xuXHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0cmV0dXJuICRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQgYScpLmZpbHRlcigoX2luZGV4LCBlbGVtZW50KSA9PiB7XG5cdFx0cmV0dXJuICEhZXh0cmFjdFBhZ2VOYW1lKCQoZWxlbWVudCkpO1xuXHR9KTtcbn07XG5cbi8qIFNhdmUgYWxsIHRoZSBwZW5kaW5nIGNoYW5nZXMgYW5kIGNsb3NlIHRoZSB0b29sICovXG5jb25zdCBzYXZlQW5kRW5kID0gKCkgPT4ge1xuXHRhcHBseUFsbENoYW5nZXMoKTtcblx0ZW5kKCk7XG59O1xuXG4vKiBDbG9zZSB0aGUgdG9vbCAqL1xuY29uc3QgZW5kID0gKCkgPT4ge1xuXHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0Y29uc3QgY3VycmVudFRvb2xVSSA9IHVpLmRpc3BsYXk7XG5cdGNob29zaW5nID0gZmFsc2U7XG5cdHJ1bm5pbmcgPSBmYWxzZTtcblx0c3RhcnRMaW5rLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuXHQkYm9keS5maW5kKCcuZGlzYW1hc3Npc3Qtb3B0aW9ubWFya2VyJykucmVtb3ZlKCk7XG5cdGN1cnJlbnRUb29sVUkuZmFkZU91dCh7XG5cdFx0Y29tcGxldGUoKSB7XG5cdFx0XHRjdXJyZW50VG9vbFVJLnJlbW92ZSgpO1xuXHRcdFx0aWYgKGVkaXRDb3VudCkge1xuXHRcdFx0XHR0b2dnbGVQZW5kaW5nRWRpdEJveCh0cnVlKTtcblx0XHRcdH1cblx0XHR9LFxuXHR9KTtcbn07XG5cbi8qIERpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSAqL1xuY29uc3QgZXJyb3IgPSAoZXJyb3JEZXNjcmlwdGlvbikgPT4ge1xuXHRjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblx0Y29uc3QgZXJyb3JCb3ggPSAkKCc8ZGl2PicpLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1ib3ggZGlzYW1hc3Npc3QtZXJyb3Jib3gnKTtcblx0ZXJyb3JCb3gudGV4dCh0eHQuZXJyb3IucmVwbGFjZSgnJDEnLCBlcnJvckRlc2NyaXB0aW9uKSk7XG5cdGVycm9yQm94LmFwcGVuZChcblx0XHRjcmVhdGVCdXR0b24odHh0LmRpc21pc3NFcnJvciwgKCkgPT4ge1xuXHRcdFx0ZXJyb3JCb3guZmFkZU91dCgpO1xuXHRcdH0pLmFkZENsYXNzKCdkaXNhbWFzc2lzdC1lcnJvcmJ1dHRvbicpXG5cdCk7XG5cdGNvbnN0IHVpSXNJblBsYWNlID0gdWkgJiYgJC5jb250YWlucyhkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHVpLmRpc3BsYXlbMF0pO1xuXHRjb25zdCBuZXh0RWxlbWVudCA9IHVpSXNJblBsYWNlID8gdWkuZGlzcGxheSA6ICRib2R5LmZpbmQoJyNtdy1jb250ZW50LXRleHQnKTtcblx0bmV4dEVsZW1lbnQuYmVmb3JlKGVycm9yQm94KTtcblx0ZXJyb3JCb3guaGlkZSgpLmZhZGVJbigpO1xufTtcblxuLyogQ2hhbmdlIGEgbGluayBzbyB0aGF0IGl0IHBvaW50cyB0byB0aGUgdGl0bGUvKiAqIHRleHQ6IFRoZSB3aWtpdGV4dCBvZiB0aGUgd2hvbGUgcGFnZS8qICogdGl0bGU6IFRoZSBuZXcgZGVzdGluYXRpb24gb2YgdGhlIGxpbmsvKiAqIGxpbms6IFRoZSBsaW5rIHRoYXQgd2lsbCBiZSBtb2RpZmllZC8qICogZXh0cmE6IFRleHQgdGhhdCB3aWxsIGJlIGFkZGVkIGFmdGVyIHRoZSBsaW5rIChvcHRpb25hbCkgKi9cbmNvbnN0IHJlcGxhY2VMaW5rID0gKHRleHQsIHRpdGxlLCBsaW5rLCBleHRyYSkgPT4ge1xuXHRsZXQgbmV3Q29udGVudDtcblx0aXNTYW1lUGFnZSh0aXRsZSwgbGluay5kZXNjcmlwdGlvbilcblx0XHQ/IC8vIFtbQnxBXV0gc2hvdWxkIGJlIHJlcGxhY2VkIHdpdGggW1tBXV0gcmF0aGVyIHRoYW4gW1tBfEFdXVxuXHRcdFx0KG5ld0NvbnRlbnQgPSBsaW5rLmRlc2NyaXB0aW9uKVxuXHRcdDogKG5ld0NvbnRlbnQgPSBgJHt0aXRsZX18JHtsaW5rLmRlc2NyaXB0aW9ufWApO1xuXHRjb25zdCBsaW5rU3RhcnQgPSB0ZXh0LnNsaWNlKDAsIE1hdGgubWF4KDAsIGxpbmsuc3RhcnQpKTtcblx0Y29uc3QgbGlua0VuZCA9IHRleHQuc2xpY2UoTWF0aC5tYXgoMCwgbGluay5lbmQpKTtcblx0cmV0dXJuIGAke2xpbmtTdGFydH1bWyR7bmV3Q29udGVudH1dXSR7bGluay5hZnRlckRlc2NyaXB0aW9ufSR7ZXh0cmEgfHwgJyd9JHtsaW5rRW5kfWA7XG59O1xuXG4vKiBSZW1vdmUgYSBsaW5rIGZyb20gdGhlIHRleHQvKiAqIHRleHQ6IFRoZSB3aWtpdGV4dCBvZiB0aGUgd2hvbGUgcGFnZS8qICogbGluazogVGhlIGxpbmsgdGhhdCB3aWxsIGJlIHJlbW92ZWQgKi9cbmNvbnN0IHJlbW92ZUxpbmsgPSAodGV4dCwgbGluaykgPT4ge1xuXHRjb25zdCBsaW5rU3RhcnQgPSB0ZXh0LnNsaWNlKDAsIE1hdGgubWF4KDAsIGxpbmsuc3RhcnQpKTtcblx0Y29uc3QgbGlua0VuZCA9IHRleHQuc2xpY2UoTWF0aC5tYXgoMCwgbGluay5lbmQpKTtcblx0cmV0dXJuIGxpbmtTdGFydCArIGxpbmsuZGVzY3JpcHRpb24gKyBsaW5rLmFmdGVyRGVzY3JpcHRpb24gKyBsaW5rRW5kO1xufTtcblxuLyogRXh0cmFjdCBhIGxpbmsgZnJvbSBhIHN0cmluZyBpbiB3aWtpIGZvcm1hdCwvKiAqIHN0YXJ0aW5nIGZyb20gYSBnaXZlbiBpbmRleC4gUmV0dXJuIGEgbGluayBpZiBvbmUgY2FuIGJlIGZvdW5kLC8qICogb3RoZXJ3aXNlIHJldHVybiBudWxsLiBUaGUgXCJsaW5rXCIgaW5jbHVkZXMgXCJkaXNhbWJpZ3VhdGlvbiBuZWVkZWRcIi8qICogdGVtcGxhdGVzIGlubWVkaWF0ZWx5IGZvbGxvd2luZyB0aGUgbGluayBwcm9wZXIvKiAqIHRleHQ6IFRleHQgZnJvbSB3aGljaCB0aGUgbGluayB3aWxsIGJlIGV4dHJhY3RlZC8qICogbGFzdEluZGV4OiBJbmRleCBmcm9tIHdoaWNoIHRoZSBzZWFyY2ggd2lsbCBzdGFydCAqL1xuY29uc3QgZXh0cmFjdExpbmsgPSAodGV4dCwgbGFzdEluZGV4KSA9PiB7XG5cdC8vIEZJWE1FOiBOb3QgYW4gYWN0dWFsIHRpdGxlIHJlZ2V4IChsb3RzIG9mIGZhbHNlIHBvc2l0aXZlc1xuXHQvLyBhbmQgc29tZSBmYWxzZSBuZWdhdGl2ZXMpLCBidXQgaG9wZWZ1bGx5IGdvb2QgZW5vdWdoLlxuXHRjb25zdCB0aXRsZVJlZ2V4ID0gL1xcW1xcWyguKj8pKD86XFx8KC4qPykpP11dL2c7XG5cdC8vIERpdHRvIGZvciB0aGUgdGVtcGxhdGUgcmVnZXguIERpc2FtYmlndWF0aW9uIGxpbmsgdGVtcGxhdGVzXG5cdC8vIHNob3VsZCBiZSBzaW1wbGUgZW5vdWdoIGZvciB0aGlzIG5vdCB0byBtYXR0ZXIsIHRob3VnaC5cblx0Y29uc3QgdGVtcGxhdGVSZWdleCA9IC9eKFxcdypbXFxzISksLjo7P31dKil7e1xccyooW157fH1dKz8pXFxzKig/OlxcfFtee10qPyk/fX0vO1xuXHR0aXRsZVJlZ2V4Lmxhc3RJbmRleCA9IGxhc3RJbmRleDtcblx0Y29uc3QgbWF0Y2ggPSB0aXRsZVJlZ2V4LmV4ZWModGV4dCk7XG5cdGlmIChtYXRjaCAmJiBtYXRjaC5pbmRleCAhPT0gLTEpIHtcblx0XHRsZXQgcG9zc2libHlBbWJpZ3VvdXMgPSB0cnVlO1xuXHRcdGxldCBoYXNEaXNhbVRlbXBsYXRlID0gZmFsc2U7XG5cdFx0bGV0IF9lbmQgPSBtYXRjaC5pbmRleCArIDQgKyBtYXRjaFsxXS5sZW5ndGggKyAobWF0Y2hbMl0gPyAxICsgbWF0Y2hbMl0ubGVuZ3RoIDogMCk7XG5cdFx0bGV0IGFmdGVyRGVzY3JpcHRpb24gPSAnJztcblx0XHRjb25zdCByZXN0ID0gdGV4dC5zbGljZShNYXRoLm1heCgwLCBfZW5kKSk7XG5cdFx0Y29uc3QgdGVtcGxhdGVNYXRjaCA9IHRlbXBsYXRlUmVnZXguZXhlYyhyZXN0KTtcblx0XHRpZiAodGVtcGxhdGVNYXRjaCkge1xuXHRcdFx0Y29uc3QgdGVtcGxhdGVUaXRsZSA9IGdldENhbm9uaWNhbFRpdGxlKHRlbXBsYXRlTWF0Y2hbMl0pO1xuXHRcdFx0Y29uc3Qge2Rpc2FtTGlua1RlbXBsYXRlc30gPSBjZmc7XG5cdFx0XHRjb25zdCB7ZGlzYW1MaW5rSWdub3JlVGVtcGxhdGVzfSA9IGNmZztcblx0XHRcdGlmIChkaXNhbUxpbmtUZW1wbGF0ZXMuaW5jbHVkZXModGVtcGxhdGVUaXRsZSkpIHtcblx0XHRcdFx0X2VuZCArPSB0ZW1wbGF0ZU1hdGNoWzBdLmxlbmd0aDtcblx0XHRcdFx0YWZ0ZXJEZXNjcmlwdGlvbiA9IHRlbXBsYXRlTWF0Y2hbMV0ucmVwbGFjZSgvXFxzJC8sICcnKTtcblx0XHRcdFx0aGFzRGlzYW1UZW1wbGF0ZSA9IHRydWU7XG5cdFx0XHR9IGVsc2UgaWYgKGRpc2FtTGlua0lnbm9yZVRlbXBsYXRlcy5pbmNsdWRlcyh0ZW1wbGF0ZVRpdGxlKSkge1xuXHRcdFx0XHRwb3NzaWJseUFtYmlndW91cyA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0c3RhcnQ6IG1hdGNoLmluZGV4LFxuXHRcdFx0ZW5kOiBfZW5kLFxuXHRcdFx0cG9zc2libHlBbWJpZ3VvdXMsXG5cdFx0XHRoYXNEaXNhbVRlbXBsYXRlLFxuXHRcdFx0dGl0bGU6IG1hdGNoWzFdLFxuXHRcdFx0ZGVzY3JpcHRpb246IG1hdGNoWzJdID8/IG1hdGNoWzFdLFxuXHRcdFx0YWZ0ZXJEZXNjcmlwdGlvbixcblx0XHR9O1xuXHR9XG59O1xuXG4vKiBFeHRyYWN0IGEgbGluayB0byBvbmUgb2YgYSBudW1iZXIgb2YgZGVzdGluYXRpb24gcGFnZXMgZnJvbSBhIHN0cmluZy8qICogKFwidGV4dFwiKSBpbiB3aWtpIGZvcm1hdCwgc3RhcnRpbmcgZnJvbSBhIGdpdmVuIGluZGV4IChcImxhc3RJbmRleFwiKS4vKiAqIFwiRGlzYW1iaWd1YXRpb24gbmVlZGVkXCIgdGVtcGxhdGVzIGFyZSBpbmNsdWRlZCBhcyBwYXJ0IG9mIHRoZSBsaW5rcy4vKiAqIHRleHQ6IFBhZ2UgaW4gd2lraSBmb3JtYXQvKiAqIGRlc3RpbmF0aW9uczogQXJyYXkgb2YgcGFnZSB0aXRsZXMgdG8gbG9vayBmb3IvKiAqIGxhc3RJbmRleDogSW5kZXggZnJvbSB3aGljaCB0aGUgc2VhcmNoIHdpbGwgc3RhcnQgKi9cbmNvbnN0IGV4dHJhY3RMaW5rVG9QYWdlID0gKHRleHQsIGRlc3RpbmF0aW9ucywgbGFzdEluZGV4KSA9PiB7XG5cdGxldCBsaW5rO1xuXHRsZXQgdGl0bGU7XG5cdGRvIHtcblx0XHRsaW5rID0gZXh0cmFjdExpbmsodGV4dCwgbGFzdEluZGV4KTtcblx0XHRpZiAobGluaykge1xuXHRcdFx0bGFzdEluZGV4ID0gbGluay5lbmQ7XG5cdFx0XHR0aXRsZSA9IGdldENhbm9uaWNhbFRpdGxlKGxpbmsudGl0bGUpO1xuXHRcdH1cblx0fSB3aGlsZSAobGluayAmJiAoIWxpbmsucG9zc2libHlBbWJpZ3VvdXMgfHwgIWRlc3RpbmF0aW9ucz8uaW5jbHVkZXModGl0bGUpKSk7XG5cdHJldHVybiBsaW5rO1xufTtcblxuLyogRmluZCB0aGUgXCJ0YXJnZXRcIiBwYWdlOiBlaXRoZXIgdGhlIG9uZSB3ZSBhcmUgaW4gb3IgdGhlIFwibWFpblwiIG9uZSBmb3VuZCBieSBleHRyYWN0aW5nLyogKiB0aGUgdGl0bGUgZnJvbSBcIi4qIChkaXNhbWJpZ3VhdGlvbilcIiBvciB3aGF0ZXZlciB0aGUgYXBwcm9waWF0ZSBsb2NhbCBmb3JtYXQgaXMgKi9cbmNvbnN0IGdldFRhcmdldFBhZ2UgPSAoKSA9PiB7XG5cdGNvbnN0IHRpdGxlID0gZ2V0VGl0bGUoKTtcblx0cmV0dXJuIGZvcmNlU2FtZVBhZ2UgPyB0aXRsZSA6IHJlbW92ZURpc2FtKHRpdGxlKTtcbn07XG5cbi8qIEdldCB0aGUgcGFnZSB0aXRsZSwgd2l0aCB0aGUgbmFtZXNwYWNlIHByZWZpeCBpZiBhbnkuICovXG5jb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcblx0cmV0dXJuIG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKS5yZXBsYWNlKC9fL2csICcgJyk7XG59O1xuXG4vKiBFeHRyYWN0IGEgXCJtYWluXCIgdGl0bGUgZnJvbSBcIi4qIChkaXNhbWJpZ3VhdGlvbilcIiBvciB3aGF0ZXZlciB0aGUgYXBwcm9waWF0ZSBsb2NhbCBmb3JtYXQgaXMgKi9cbmNvbnN0IHJlbW92ZURpc2FtID0gKHRpdGxlKSA9PiB7XG5cdGNvbnN0IG1hdGNoID0gbmV3IFJlZ0V4cChjZmcuZGlzYW1SZWdFeHApLmV4ZWModGl0bGUpO1xuXHRyZXR1cm4gbWF0Y2g/LlsxXSA/PyB0aXRsZTtcbn07XG5cbi8qIENoZWNrIHdoZXRoZXIgdHdvIHBhZ2UgdGl0bGVzIGFyZSB0aGUgc2FtZSAqL1xuY29uc3QgaXNTYW1lUGFnZSA9ICh0aXRsZTEsIHRpdGxlMikgPT4ge1xuXHRyZXR1cm4gZ2V0Q2Fub25pY2FsVGl0bGUodGl0bGUxKSA9PT0gZ2V0Q2Fub25pY2FsVGl0bGUodGl0bGUyKTtcbn07XG5cbi8qIFJldHVybiB0aGUgJ2Nhbm9uaWNhbCB0aXRsZScgb2YgYSBwYWdlICovXG5jb25zdCBnZXRDYW5vbmljYWxUaXRsZSA9ICh0aXRsZSkgPT4ge1xuXHR0cnkge1xuXHRcdC8vIG13LlRpdGxlIHNlZW1zIHRvIGJlIGJ1Z2d5LCBhbmQgc29tZSB2YWxpZCB0aXRsZXMgYXJlIHJlamVjdGVkXG5cdFx0Ly8gRklYTUU6IFRoaXMgbWF5IGNhdXNlIGZhbHNlIG5lZ2F0aXZlc1xuXHRcdHRpdGxlID0gbmV3IG13LlRpdGxlKHRpdGxlKS5nZXRQcmVmaXhlZFRleHQoKTtcblx0fSBjYXRjaCB7XG5cdFx0LyogZW1wdHkgKi9cblx0fVxuXHRyZXR1cm4gdGl0bGU7XG59O1xuXG4vKiBFeHRyYWN0IHRoZSBjb250ZXh0IGFyb3VuZCBhIGdpdmVuIGxpbmsgaW4gYSB0ZXh0IHN0cmluZyAqL1xuY29uc3QgZXh0cmFjdENvbnRleHQgPSAodGV4dCwgbGluaykgPT4ge1xuXHRjb25zdCBjb250ZXh0U3RhcnQgPSBsaW5rLnN0YXJ0IC0gY2ZnLnJhZGl1cztcblx0Y29uc3QgY29udGV4dEVuZCA9IGxpbmsuZW5kICsgY2ZnLnJhZGl1cztcblx0bGV0IGNvbnRleHRQcmV2ID0gdGV4dC5zbGljZShjb250ZXh0U3RhcnQsIGxpbmsuc3RhcnQpO1xuXHRpZiAoY29udGV4dFN0YXJ0ID4gMCkge1xuXHRcdGNvbnRleHRQcmV2ID0gdHh0LmVsbGlwc2lzICsgY29udGV4dFByZXY7XG5cdH1cblx0bGV0IGNvbnRleHROZXh0ID0gdGV4dC5zbGljZShsaW5rLmVuZCwgY29udGV4dEVuZCk7XG5cdGlmIChjb250ZXh0RW5kIDwgdGV4dC5sZW5ndGgpIHtcblx0XHRjb250ZXh0TmV4dCArPSB0eHQuZWxsaXBzaXM7XG5cdH1cblx0cmV0dXJuIFtjb250ZXh0UHJldiwgdGV4dC5zbGljZShsaW5rLnN0YXJ0LCBsaW5rLmVuZCksIGNvbnRleHROZXh0XTtcbn07XG5cbi8qIEV4dHJhY3QgdGhlIHByZWZpeGVkIHBhZ2UgbmFtZSBmcm9tIGEgbGluayAqL1xuY29uc3QgZXh0cmFjdFBhZ2VOYW1lID0gKGxpbmspID0+IHtcblx0bGV0IHBhZ2VOYW1lID0gZXh0cmFjdFBhZ2VOYW1lUmF3KGxpbmspO1xuXHRpZiAocGFnZU5hbWUpIHtcblx0XHRjb25zdCBzZWN0aW9uUG9zID0gcGFnZU5hbWUuaW5kZXhPZignIycpO1xuXHRcdGxldCBzZWN0aW9uID0gJyc7XG5cdFx0aWYgKHNlY3Rpb25Qb3MgIT09IC0xKSB7XG5cdFx0XHRzZWN0aW9uID0gcGFnZU5hbWUuc2xpY2UoTWF0aC5tYXgoMCwgc2VjdGlvblBvcykpO1xuXHRcdFx0cGFnZU5hbWUgPSBwYWdlTmFtZS5zbGljZSgwLCBNYXRoLm1heCgwLCBzZWN0aW9uUG9zKSk7XG5cdFx0fVxuXHRcdHJldHVybiBnZXRDYW5vbmljYWxUaXRsZShwYWdlTmFtZSkgKyBzZWN0aW9uO1xuXHR9XG59O1xuXG4vKiBFeHRyYWN0IHRoZSBwYWdlIG5hbWUgZnJvbSBhIGxpbmssIGFzIGlzICovXG5jb25zdCBleHRyYWN0UGFnZU5hbWVSYXcgPSAobGluaykgPT4ge1xuXHRpZiAoIWxpbmsuaGFzQ2xhc3MoJ2ltYWdlJykpIHtcblx0XHRjb25zdCBocmVmID0gbGluay5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKGxpbmsuaGFzQ2xhc3MoJ25ldycpKSB7XG5cdFx0XHQvLyBcIlJlZFwiIGxpbmtcblx0XHRcdGlmIChocmVmLmluY2x1ZGVzKG13LmNvbmZpZy5nZXQoJ3dnU2NyaXB0JykpKSB7XG5cdFx0XHRcdHJldHVybiBtdy51dGlsLmdldFBhcmFtVmFsdWUoJ3RpdGxlJywgaHJlZik7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnN0IHJlZ2V4ID0gbXcuY29uZmlnLmdldCgnd2dBcnRpY2xlUGF0aCcpLnJlcGxhY2UoJyQxJywgJyguKiknKTtcblx0XHRcdGNvbnN0IHJlZ2V4UmVzdWx0ID0gbmV3IFJlZ0V4cChgXiR7cmVnZXh9JGApLmV4ZWMoaHJlZik7XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheShyZWdleFJlc3VsdCkgJiYgcmVnZXhSZXN1bHQubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVnZXhSZXN1bHRbMV0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuLyogQ2hlY2sgd2hldGhlciB0aGlzIGlzIGEgZGlzYW1iaWd1YXRpb24gcGFnZSAqL1xuY29uc3QgaXNEaXNhbSA9ICgpID0+IHtcblx0Y29uc3QgY2F0ZWdvcmllcyA9IG13LmNvbmZpZy5nZXQoJ3dnQ2F0ZWdvcmllcycsIFtdKTtcblx0Zm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG5cdFx0Y29uc3Qge2Rpc2FtQ2F0ZWdvcmllc30gPSBjZmc7XG5cdFx0aWYgKGRpc2FtQ2F0ZWdvcmllcy5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBzZWNvbmRzVG9ISE1NU1MgPSAodG90YWxTZWNvbmRzKSA9PiB7XG5cdGxldCBoaG1tc3MgPSAnJztcblx0Y29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kcyAvIDM2MDApO1xuXHRjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodG90YWxTZWNvbmRzICUgMzYwMCkgLyA2MCk7XG5cdGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKCh0b3RhbFNlY29uZHMgJSAzNjAwKSAlIDYwKTtcblx0aWYgKGhvdXJzID49IDEpIHtcblx0XHRoaG1tc3MgPSBgJHtwYWQoaG91cnMsICcwJywgMil9OmA7XG5cdH1cblx0aGhtbXNzICs9IGAke3BhZChtaW51dGVzLCAnMCcsIDIpfToke3BhZChzZWNvbmRzLCAnMCcsIDIpfWA7XG5cdHJldHVybiBoaG1tc3M7XG59O1xuXG5jb25zdCBwYWQgPSAoc3RyLCB6LCB3aWR0aCkgPT4ge1xuXHRzdHIgPSBzdHIudG9TdHJpbmcoKTtcblx0aWYgKHN0ci5sZW5ndGggPj0gd2lkdGgpIHtcblx0XHRyZXR1cm4gc3RyO1xuXHR9XG5cdHJldHVybiAoXG5cdFx0QXJyYXkuZnJvbSh7XG5cdFx0XHRsZW5ndGg6IHdpZHRoIC0gc3RyLmxlbmd0aCArIDEsXG5cdFx0fSkuam9pbih6KSArIHN0clxuXHQpO1xufTtcblxuLyogQ3JlYXRlIGEgbmV3IGJ1dHRvblxuICogdGV4dDogVGV4dCB0aGF0IHdpbGwgYmUgZGlzcGxheWVkIG9uIHRoZSBidXR0b25cbiAqIG9uQ2xpY2s6IEZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGVcbiAqIGJ1dHRvbiBpcyBjbGlja2VkXG4gKi9cbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9ICh0ZXh0LCBvbkNsaWNrKSA9PiB7XG5cdGNvbnN0IGJ1dHRvbiA9ICQoJzxpbnB1dD4nKS5hdHRyKHtcblx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHR2YWx1ZTogdGV4dCxcblx0fSk7XG5cdGJ1dHRvbi5hZGRDbGFzcygnZGlzYW1hc3Npc3QtYnV0dG9uJykub24oJ2NsaWNrJywgb25DbGljayk7XG5cdHJldHVybiBidXR0b247XG59O1xuXG4vKiBHaXZlbiBhIHBhZ2UgdGl0bGUgYW5kIGFuIGFycmF5IG9mIHBvc3NpYmxlIHJlZGlyZWN0cyB7ZnJvbSwgdG99IChcImNhbm9uaWNhbCB0aXRsZXNcIiksIGZpbmQgdGhlIHBhZ2UvKiAqIGF0IHRoZSBlbmQgb2YgdGhlIHJlZGlyZWN0IGNoYWluLCBpZiB0aGVyZSBpcyBvbmUuIE90aGVyd2lzZSwgcmV0dXJuIHRoZSBwYWdlIHRpdGxlIHRoYXQgd2FzIHBhc3NlZCAqL1xuY29uc3QgcmVzb2x2ZVJlZGlyZWN0ID0gKHBhZ2VUaXRsZSwgcG9zc2libGVSZWRpcmVjdHMpID0+IHtcblx0bGV0IGFwcGxpZWRSZWRpcmVjdCA9IHRydWU7XG5cdGNvbnN0IHZpc2l0ZWRQYWdlcyA9IHt9O1xuXHRsZXQgY3VycmVudFBhZ2UgPSBnZXRDYW5vbmljYWxUaXRsZShwYWdlVGl0bGUpO1xuXHR3aGlsZSAoYXBwbGllZFJlZGlyZWN0KSB7XG5cdFx0YXBwbGllZFJlZGlyZWN0ID0gZmFsc2U7XG5cdFx0Zm9yIChjb25zdCBwb3NzaWJsZVJlZGlyZWN0IG9mIHBvc3NpYmxlUmVkaXJlY3RzKSB7XG5cdFx0XHRpZiAocG9zc2libGVSZWRpcmVjdC5mcm9tID09PSBjdXJyZW50UGFnZSkge1xuXHRcdFx0XHRpZiAodmlzaXRlZFBhZ2VzW3Bvc3NpYmxlUmVkaXJlY3QudG9dKSB7XG5cdFx0XHRcdFx0Ly8gUmVkaXJlY3QgY2hhaW4gZGV0ZWN0ZWRcblx0XHRcdFx0XHRyZXR1cm4gcGFnZVRpdGxlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZpc2l0ZWRQYWdlc1tjdXJyZW50UGFnZV0gPSB0cnVlO1xuXHRcdFx0XHRhcHBsaWVkUmVkaXJlY3QgPSB0cnVlO1xuXHRcdFx0XHRjdXJyZW50UGFnZSA9IHBvc3NpYmxlUmVkaXJlY3QudG87XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC8vIE5vIHJlZGlyZWN0IHJ1bGVzIGFwcGxpZWQgZm9yIGFuIGl0ZXJhdGlvbiBvZiB0aGUgb3V0ZXIgbG9vcDpcblx0Ly8gbm8gbW9yZSByZWRpcmVjdHMuIFdlIGFyZSBkb25lXG5cdHJldHVybiBjdXJyZW50UGFnZTtcbn07XG5cbi8qIEZldGNoIHRoZSBpbmNvbWluZyBsaW5rcyB0byBhIHBhZ2UuIFJldHVybnMgYSBqUXVlcnkgcHJvbWlzZS8qICogKHN1Y2Nlc3MgLSBhcnJheSBvZiB0aXRsZXMgb2YgcGFnZXMgdGhhdCBjb250YWluIGxpbmtzIHRvIHRoZSB0YXJnZXQgcGFnZSBhbmQvKiAqIGFycmF5IG9mIFwiY2Fub25pY2FsIHRpdGxlc1wiIG9mIHBvc3NpYmxlIGRlc3RpbmF0aW9ucyBvZiB0aGUgYmFja2xpbmtzIChlaXRoZXIvKiAqIHRoZSB0YXJnZXQgcGFnZSBvciByZWRpcmVjdHMgdG8gdGhlIHRhcmdldCBwYWdlKSwgZmFpbHVyZSAtIGVycm9yIGRlc2NyaXB0aW9uKS8qICogcGFnZTogVGFyZ2V0IHBhZ2UgKi9cbmNvbnN0IGdldEJhY2tsaW5rcyA9IChwYWdlKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcblx0Y29uc3QgcGFyYW1zID0ge1xuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRsaXN0OiAnYmFja2xpbmtzJyxcblx0XHRibHRpdGxlOiBwYWdlLFxuXHRcdGJscmVkaXJlY3Q6IHRydWUsXG5cdFx0YmxsaW1pdDogY2ZnLmJhY2tsaW5rTGltaXQsXG5cdFx0YmxuYW1lc3BhY2U6IGNmZy50YXJnZXROYW1lc3BhY2VzLmpvaW4oJ3wnKSxcblx0fTtcblx0YXBpLmdldChwYXJhbXMpXG5cdFx0LmRvbmUoKHtxdWVyeX0pID0+IHtcblx0XHRcdC8vIFRoZXJlIG1pZ2h0IGJlIGR1cGxpY2F0ZSBlbnRyaWVzIGluIHNvbWUgY29ybmVyIGNhc2VzLiBXZSBkb24ndCBjYXJlLFxuXHRcdFx0Ly8gc2luY2Ugd2UgYXJlIGdvaW5nIHRvIGNoZWNrIGxhdGVyLCBhbnl3YXlcblx0XHRcdGNvbnN0IGJhY2tsaW5rcyA9IFtdO1xuXHRcdFx0Y29uc3QgbGlua1RpdGxlcyA9IFtnZXRDYW5vbmljYWxUaXRsZShwYWdlKV07XG5cdFx0XHRjb25zdCBiYWNrbGlua3NRdWVyeSA9IHF1ZXJ5LmJhY2tsaW5rcztcblx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiBiYWNrbGlua3NRdWVyeSkge1xuXHRcdFx0XHRiYWNrbGlua3MucHVzaChlbGVtZW50LnRpdGxlKTtcblx0XHRcdFx0aWYgKCFlbGVtZW50LnJlZGlybGlua3MpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaW5rVGl0bGVzLnB1c2goZWxlbWVudC50aXRsZSk7XG5cdFx0XHRcdGNvbnN0IHtyZWRpcmxpbmtzfSA9IGVsZW1lbnQ7XG5cdFx0XHRcdGZvciAoY29uc3Qge3RpdGxlfSBvZiByZWRpcmxpbmtzKSB7XG5cdFx0XHRcdFx0YmFja2xpbmtzLnB1c2godGl0bGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRkZWZlcnJlZC5yZXNvbHZlKGJhY2tsaW5rcywgbGlua1RpdGxlcyk7XG5cdFx0fSlcblx0XHQuZmFpbCgoY29kZSkgPT4ge1xuXHRcdFx0ZGVmZXJyZWQucmVqZWN0KHR4dC5nZXRCYWNrbGlua3NFcnJvci5yZXBsYWNlKCckMScsIGNvZGUpKTtcblx0XHR9KTtcblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIERvd25sb2FkIGEgbGlzdCBvZiByZWRpcmVjdHMgZm9yIHNvbWUgcGFnZXMuIFJldHVybnMgYSBqUXVlcnkgY2FsbGJhY2sgKHN1Y2Nlc3MgLS8qICogYXJyYXkgb2YgcmVkaXJlY3RzICh7ZnJvbSwgdG99KSwgZmFpbHVyZSAtIGVycm9yIGRlc2NyaXB0aW9uICkvKiAqIHBhZ2VUaXRsZXM6IEFycmF5IG9mIHBhZ2UgdGl0bGVzICovXG5jb25zdCBmZXRjaFJlZGlyZWN0cyA9IChwYWdlVGl0bGVzKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcblx0Y29uc3QgY3VycmVudFRpdGxlcyA9IHBhZ2VUaXRsZXMuc2xpY2UoMCwgY2ZnLnF1ZXJ5VGl0bGVMaW1pdCk7XG5cdGNvbnN0IHJlc3RUaXRsZXMgPSBwYWdlVGl0bGVzLnNsaWNlKGNmZy5xdWVyeVRpdGxlTGltaXQpO1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdHRpdGxlczogY3VycmVudFRpdGxlcy5qb2luKCd8JyksXG5cdFx0cmVkaXJlY3RzOiB0cnVlLFxuXHR9O1xuXHRhcGkuZ2V0KHBhcmFtcylcblx0XHQuZG9uZSgoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0Y29uc3QgdGhlc2VSZWRpcmVjdHMgPSBxdWVyeS5yZWRpcmVjdHMgPz8gW107XG5cdFx0XHRpZiAocmVzdFRpdGxlcy5sZW5ndGgpIHtcblx0XHRcdFx0ZmV0Y2hSZWRpcmVjdHMocmVzdFRpdGxlcylcblx0XHRcdFx0XHQuZG9uZSgocmVkaXJlY3RzKSA9PiB7XG5cdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKFsuLi50aGVzZVJlZGlyZWN0cywgLi4ucmVkaXJlY3RzXSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuZmFpbCgoZGVzY3JpcHRpb24pID0+IHtcblx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdChkZXNjcmlwdGlvbik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHRoZXNlUmVkaXJlY3RzKTtcblx0XHRcdH1cblx0XHR9KVxuXHRcdC5mYWlsKChjb2RlKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZWplY3QodHh0LmZldGNoUmVkaXJlY3RzRXJyb3IucmVwbGFjZSgnJDEnLCBjb2RlKSk7XG5cdFx0fSk7XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBEb3dubG9hZCB0aGUgbGlzdCBvZiB1c2VyIHJpZ2h0cyBmb3IgdGhlIGN1cnJlbnQgdXNlci4gUmV0dXJucyBhLyogKiBqUXVlcnkgcHJvbWlzZSAoc3VjY2VzcyAtIGFycmF5IG9mIHJpZ2h0IG5hbWVzLCBlcnJvciAtIGVycm9yIGRlc2NyaXB0aW9uKSAqL1xuY29uc3QgZmV0Y2hSaWdodHMgPSAoKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdG1ldGE6ICd1c2VyaW5mbycsXG5cdFx0dWlwcm9wOiAncmlnaHRzJyxcblx0fTtcblx0YXBpLmdldChwYXJhbXMpXG5cdFx0LmRvbmUoKHtxdWVyeX0pID0+IHtcblx0XHRcdGRlZmVycmVkLnJlc29sdmUocXVlcnkudXNlcmluZm8ucmlnaHRzKTtcblx0XHR9KVxuXHRcdC5mYWlsKChjb2RlKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZWplY3QodHh0LmZldGNoUmlnaHRzRXJyb3IucmVwbGFjZSgnJDEnLCBjb2RlKSk7XG5cdFx0fSk7XG5cdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG59O1xuXG4vKiBMb2FkIHRoZSByYXcgcGFnZSB0ZXh0IGZvciBhIGdpdmVuIHRpdGxlLiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UgKHN1Y2Nlc3MgLSBwYWdlLyogKiBjb250ZW50LCBmYWlsdXJlIC0gZXJyb3IgZGVzY3JpcHRpb24pLyogKiBwYWdlVGl0bGU6IFRpdGxlIG9mIHRoZSBwYWdlICovXG5jb25zdCBsb2FkUGFnZSA9IChwYWdlVGl0bGUpID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHR0aXRsZXM6IHBhZ2VUaXRsZSxcblx0XHRwcm9wOiAncmV2aXNpb25zJyxcblx0XHRydnByb3A6ICd0aW1lc3RhbXB8Y29udGVudCcsXG5cdFx0bWV0YTogJ3Rva2VucycsXG5cdFx0dHlwZTogJ2NzcmYnLFxuXHR9O1xuXHRhcGkuZ2V0KHBhcmFtcylcblx0XHQuZG9uZSgoe3F1ZXJ5fSkgPT4ge1xuXHRcdFx0Y29uc3QgW3Jhd1BhZ2VdID0gcXVlcnkucGFnZXM7XG5cdFx0XHRjb25zdCBwYWdlID0ge307XG5cdFx0XHRwYWdlLnJlZGlyZWN0ID0gcmF3UGFnZS5yZWRpcmVjdCAhPT0gdW5kZWZpbmVkO1xuXHRcdFx0cGFnZS5taXNzaW5nID0gcmF3UGFnZS5taXNzaW5nICE9PSB1bmRlZmluZWQ7XG5cdFx0XHRpZiAocmF3UGFnZS5yZXZpc2lvbnMpIHtcblx0XHRcdFx0cGFnZS5jb250ZW50ID0gcmF3UGFnZS5yZXZpc2lvbnNbMF0uY29udGVudDtcblx0XHRcdFx0cGFnZS5iYXNlVGltZVN0YW1wID0gcmF3UGFnZS5yZXZpc2lvbnNbMF0udGltZXN0YW1wO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFnZS5jb250ZW50ID0gJyc7XG5cdFx0XHRcdHBhZ2UuYmFzZVRpbWVTdGFtcCA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHRcdHBhZ2Uuc3RhcnRUaW1lU3RhbXAgPSByYXdQYWdlLnN0YXJ0dGltZXN0YW1wO1xuXHRcdFx0cGFnZS5lZGl0VG9rZW4gPSBxdWVyeS50b2tlbnMuY3NyZnRva2VuO1xuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShwYWdlKTtcblx0XHR9KVxuXHRcdC5mYWlsKChjb2RlKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZWplY3QodHh0LmxvYWRQYWdlRXJyb3IucmVwbGFjZSgnJDEnLCBwYWdlVGl0bGUpLnJlcGxhY2UoJyQyJywgY29kZSkpO1xuXHRcdH0pO1xuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcblxuLyogUmVnaXN0ZXIgY2hhbmdlcyB0byBhIHBhZ2UsIHRvIGJlIHNhdmVkIGxhdGVyLiBSZXR1cm5zIGEgalF1ZXJ5IHByb21pc2UvKiAqIChzdWNjZXNzIC0gbm8gcGFyYW1zLCBmYWlsdXJlIC0gZXJyb3IgZGVzY3JpcHRpb24pLiBUYWtlcyB0aGUgc2FtZSBwYXJhbWV0ZXJzLyogKiBhcyBzYXZlUGFnZSAqL1xuY29uc3Qgc2F2ZVdpdGhDb29sZG93biA9ICguLi5hcmdzKSA9PiB7XG5cdGNvbnN0IGRlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcblx0cGVuZGluZ1NhdmVzLnB1c2goe1xuXHRcdGFyZ3MsXG5cdFx0ZGZkOiBkZWZlcnJlZCxcblx0fSk7XG5cdGlmICghcnVubmluZ1NhdmVzKSB7XG5cdFx0Y2hlY2tBbmRTYXZlKCk7XG5cdH1cblx0cmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbn07XG5cbi8qIFNhdmUgdGhlIGZpcnN0IHNldCBvZiBjaGFuZ2VzIGluIHRoZSBsaXN0IG9mIHBlbmRpbmcgY2hhbmdlcywgcHJvdmlkaW5nIHRoYXQvKiAqIGVub3VnaCB0aW1lIGhhcyBwYXNzZWQgc2luY2UgdGhlIGxhc3QgZWRpdCAqL1xuY29uc3QgY2hlY2tBbmRTYXZlID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoIXBlbmRpbmdTYXZlcy5sZW5ndGgpIHtcblx0XHRydW5uaW5nU2F2ZXMgPSBmYWxzZTtcblx0XHRyZXR1cm47XG5cdH1cblx0cnVubmluZ1NhdmVzID0gdHJ1ZTtcblx0Y29uc3QgbWlsbGlzU2luY2VMYXN0ID0gRGF0ZS5ub3coKSAtIGxhc3RFZGl0TWlsbGlzO1xuXHRpZiAobWlsbGlzU2luY2VMYXN0IDwgY2ZnLmVkaXRDb29sZG93biAqIDEwMDApIHtcblx0XHRzZXRUaW1lb3V0KGNoZWNrQW5kU2F2ZSwgY2ZnLmVkaXRDb29sZG93biAqIDEwMDAgLSBtaWxsaXNTaW5jZUxhc3QpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIFRoZSBsYXN0IGVkaXQgc3RhcnRlZCBhdCBsZWFzdCBjZmcuZWRpdENvb2xkb3duIHNlY29uZHMgYWdvXG5cdFx0Y29uc3Qgc2F2ZSA9IHBlbmRpbmdTYXZlcy5zaGlmdCgpO1xuXHRcdHNhdmVQYWdlXG5cdFx0XHQuYXBwbHkodGhpcywgc2F2ZS5hcmdzKVxuXHRcdFx0LmRvbmUoKCkgPT4ge1xuXHRcdFx0XHRjaGVja0FuZFNhdmUoKTtcblx0XHRcdFx0c2F2ZS5kZmQucmVzb2x2ZSgpO1xuXHRcdFx0fSlcblx0XHRcdC5mYWlsKChkZXNjcmlwdGlvbikgPT4ge1xuXHRcdFx0XHRjaGVja0FuZFNhdmUoKTtcblx0XHRcdFx0c2F2ZS5kZmQucmVqZWN0KGRlc2NyaXB0aW9uKTtcblx0XHRcdH0pO1xuXHRcdC8vIFdlJ2xsIHVzZSB0aGUgdGltZSBzaW5jZSB0aGUgbGFzdCBlZGl0IHN0YXJ0ZWRcblx0XHRsYXN0RWRpdE1pbGxpcyA9IERhdGUubm93KCk7XG5cdH1cbn07XG5cbi8qIFNhdmUgdGhlIGNoYW5nZXMgbWFkZSB0byBhIHBhZ2UuIFJldHVybnMgYSBqUXVlcnkgcHJvbWlzZSAoc3VjY2VzcyAtIG5vIHBhcmFtcywvKiAqIGZhaWx1cmUgLSBlcnJvciBkZXNjcmlwdGlvbikvKiAqIHBhZ2VUaXRsZTogVGl0bGUgb2YgdGhlIHBhZ2UvKiAqIHBhZ2U6IFBhZ2UgZGF0YS8qICogc3VtbWFyeTogU3VtbWFyeSBvZiB0aGUgY2hhbmdlcyBtYWRlIHRvIHRoZSBwYWdlLyogKiBtaW5vckVkaXQ6IFdoZXRoZXIgdG8gbWFyayB0aGUgZWRpdCBhcyAnbWlub3InLyogKiBib3RFZGl0OiBXaGV0aGVyIHRvIG1hcmsgdGhlIGVkaXQgYXMgJ2JvdCcgKi9cbmNvbnN0IHNhdmVQYWdlID0gKHBhZ2VUaXRsZSwge2VkaXRUb2tlbiwgY29udGVudCwgYmFzZVRpbWVTdGFtcCwgc3RhcnRUaW1lU3RhbXB9LCBzdW1tYXJ5LCBtaW5vckVkaXQsIGJvdEVkaXQpID0+IHtcblx0Y29uc3QgZGVmZXJyZWQgPSBuZXcgJC5EZWZlcnJlZCgpO1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0dGl0bGU6IHBhZ2VUaXRsZSxcblx0XHR0b2tlbjogZWRpdFRva2VuLFxuXHRcdHRleHQ6IGNvbnRlbnQsXG5cdFx0YmFzZXRpbWVzdGFtcDogYmFzZVRpbWVTdGFtcCxcblx0XHRzdGFydHRpbWVzdGFtcDogc3RhcnRUaW1lU3RhbXAsXG5cdFx0c3VtbWFyeSxcblx0XHR3YXRjaGxpc3Q6IGNmZy53YXRjaCxcblx0XHRtaW5vcjogbWlub3JFZGl0LFxuXHRcdGJvdDogYm90RWRpdCxcblx0fTtcblx0YXBpLnBvc3QocGFyYW1zKVxuXHRcdC5kb25lKCgpID0+IHtcblx0XHRcdGRlZmVycmVkLnJlc29sdmUoKTtcblx0XHR9KVxuXHRcdC5mYWlsKChjb2RlKSA9PiB7XG5cdFx0XHRkZWZlcnJlZC5yZWplY3QodHh0LnNhdmVQYWdlRXJyb3IucmVwbGFjZSgnJDEnLCBwYWdlVGl0bGUpLnJlcGxhY2UoJyQyJywgY29kZSkpO1xuXHRcdH0pO1xuXHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xufTtcbiIsICJleHBvcnQgY29uc3QgdHh0ID0ge1xuXHRzdGFydDogJ+S4uumTvuaOpea2iOatp+S5iScsXG5cdHN0YXJ0TWFpbjogJ+S4uumTvuiHs+S4u+adoeebrueahOmTvuaOpea2iOatp+S5iScsXG5cdHN0YXJ0U2FtZTogJ+S4uumTvuiHs+a2iOatp+S5iemhteeahOmTvuaOpea2iOatp+S5iScsXG5cdGNsb3NlOiAn5YWz6ZetJyxcblx0dW5kbzogJ+WkjeWOnycsXG5cdG9taXQ6ICfot7Pov4cnLFxuXHRyZWZyZXNoOiAn6YeN5paw5pW055CGJyxcblx0dGl0bGVBc1RleHQ6ICflhbblroPnm67moIcnLFxuXHRkaXNhbU5lZWRlZDogJ+agh+ekunt7ZG59fScsXG5cdGludGVudGlvbmFsTGluazogJ+acieaEj+mTvuWIsOa2iOatp+S5iemhteeahOmTvuaOpScsXG5cdHRpdGxlQXNUZXh0UHJvbXB0OiAn6K+36L6T5YWl5paw55qE6ZO+5o6l55uu5qCH77yaJyxcblx0cmVtb3ZlTGluazogJ+WOu+mZpOmTvuaOpScsXG5cdG9wdGlvbk1hcmtlcjogJyBb6ZO+5o6l5Yiw6L+Z6YeMXScsXG5cdHRhcmdldE9wdGlvbk1hcmtlcjogJyBb5b2T5YmN55uu5qCHXScsXG5cdHJlZGlyZWN0T3B0aW9uTWFya2VyOiAnIFvlvZPliY3nm67moIfvvIjph43lrprlkJHvvIldJyxcblx0cGFnZVRpdGxlTGluZTogJzxhIGhyZWY9XCIkMVwiPiQyPC9hPu+8micsXG5cdG5vTW9yZUxpbmtzOiAn5rKh5pyJ6ZyA6KaB5raI5q2n5LmJ55qE6ZO+5o6l5LqG44CCJyxcblx0cGVuZGluZ0VkaXRDb3VudGVyOiAn5bey5L+d5a2YJDHkuKrvvIzlt7LnvJbovpEkMuS4qicsXG5cdHBlbmRpbmdFZGl0Qm94OiAnRGlzYW1Bc3Npc3TmraPlnKjlgqjlrZjmgqjnmoTnvJbovpHvvIgkMe+8ieOAgicsXG5cdHBlbmRpbmdFZGl0Qm94VGltZUVzdGltYXRpb246ICckMe+8m+WJqeS9meaXtumXtO+8miQyJyxcblx0cGVuZGluZ0VkaXRCb3hMaW1pdGVkOlxuXHRcdCflnKjmiYDmnInmm7TmlLnkv53lrZjliY3vvIzor7fkuI3opoHlhbPpl63pobXpnaLvvJvkvaDlj6/ku6XlnKjlj6bkuIDkuKrpobXpnaLnvJbovpHmnInlhb3moaPmoYjppobvvIzkvYbmmK/or7fli7/lkIzml7bkvb/nlKjlpJrkuKpEaXNhbUFzc2lzdOOAgicsXG5cdGVycm9yOiAn6ZSZ6K+v77yaJDEnLFxuXHRmZXRjaFJlZGlyZWN0c0Vycm9yOiAn6I635Y+W6YeN5a6a5ZCR5aSx6LSl77yaXCIkMVwiLicsXG5cdGdldEJhY2tsaW5rc0Vycm9yOiAn5LiL6L295Y+N5ZCR6ZO+5o6l5aSx6LSl77yaXCIkMVwiLicsXG5cdGZldGNoUmlnaHRzRXJyb3I6ICfojrflj5bnlKjmiLfmnYPpmZDlpLHotKXvvJpcIiQxXCIsJyxcblx0bG9hZFBhZ2VFcnJvcjogJ+WKoOi9vSQx5aSx6LSl77yaXCIkMlwiLicsXG5cdHNhdmVQYWdlRXJyb3I6ICfkv53lrZjoh7MkMeWksei0pe+8mlwiJDJcIi4nLFxuXHRkaXNtaXNzRXJyb3I6ICdEaXNtaXNzJyxcblx0cGVuZGluZzogJ0Rpc2FtQXNzaXN05bCa5pyJ5pyq5YKo5a2Y55qE57yW6L6R44CC5aaC5qyy5YKo5a2Y5LmL77yM6K+35oyJ4oCc5YWz6Zet4oCd44CCJyxcblx0ZWRpdEluUHJvZ3Jlc3M6ICdEaXNhbUFzc2lzdOato+WcqOi/m+ihjOe8lui+keOAguiLpeaCqOWwhuacrOWIhumhteWFs+mXre+8jOWPr+iDveS8muS4p+WkseaCqOeahOe8lui+keOAgicsXG5cdGVsbGlwc2lzOiAn4oCm4oCmJyxcblx0bm90aWZ5Q2hhcmFjdGVyOiAn4pyUJyxcblx0c3VtbWFyeTogJ+S9v+eUqFtbTWVkaWFXaWtpOkdhZGdldC1EaXNhbUFzc2lzdC5qc3xEaXNhbUFzc2lzdF1d5riF55CGW1tMSUI6REFCfOa2iOatp+S5iV1d6ZO+5o6l77yaW1skMV1d77yIJDLvvInjgIInLFxuXHRzdW1tYXJ5Q2hhbmdlZDogJ+aUuemTvuaOpeiHs1tbJDFdXScsXG5cdHN1bW1hcnlPbWl0dGVkOiAn6ZO+5o6l5bey6Lez6L+HJyxcblx0c3VtbWFyeVJlbW92ZWQ6ICfpk77mjqXlt7Lnp7vpmaQnLFxuXHRzdW1tYXJ5SW50ZW50aW9uYWw6ICfliLvmhI/pk77mjqXoh7PmtojmrafkuYnpobXpnaInLFxuXHRzdW1tYXJ5SGVscE5lZWRlZDogJ+mcgOimgeW4ruWKqScsXG5cdHN1bW1hcnlTZXBhcmF0b3I6ICc7ICcsXG5cdHJlZGlyZWN0U3VtbWFyeTogJ+S9v+eUqFtbTWVkaWFXaWtpOkdhZGdldC1EaXNhbUFzc2lzdC5qc3xEaXNhbUFzc2lzdF1d5Yib5bu655uu5qCH5Li6W1skMV1d55qE6YeN5a6a5ZCR44CCJyxcbn07XG4iLCAiLyoqXG4gKiBEaXNhbUFzc2lzdDogYSB0b29sIGZvciByZXBhaXJpbmcgbGlua3MgZnJvbSBhcnRpY2xlcyB0byBkaXNhbWJpZ3VhdGlvbiBwYWdlcy5cbiAqIOeUsVF3ZXJ0eXl0cmV3cXF3ZXJ0eeacgOWIneiuvuiuoe+8mkNDIEJZLVNBIDMuMFxuICog55SxR1pXRGVy5pys5Zyw5YyW77yaMjAyMC0wOC0xOSBDQyBCWS1TQSAzLjBcbiAqIOeUseWSjOW5s+Wli+aWl+aVkeWcsOeQg+eojeS9nOe/u+ivkSAyMDIxLTA1LTE1IENDIEJZLVNBIDMuMFxuICog5rGC6Ze755m+56eRTmp6anrnroDkvZPljJYgMjAyMi0yLTE0IENDIEJZLVNBIDQuMFxuICovXG5pbXBvcnQge2luc3RhbGx9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuJChpbnN0YWxsKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBLHdGQUFBQSxTQUFBO0FBQUE7QUFDQSxRQUFJLFFBQVEsU0FBVSxJQUFJO0FBQ3hCLGFBQU8sTUFBTSxHQUFHLFNBQVMsUUFBUTtBQUFBLElBQ25DO0FBR0EsSUFBQUEsUUFBTztBQUFBLElBRUwsTUFBTSxPQUFPLGNBQWMsWUFBWSxVQUFVLEtBQ2pELE1BQU0sT0FBTyxVQUFVLFlBQVksTUFBTTtBQUFBLElBRXpDLE1BQU0sT0FBTyxRQUFRLFlBQVksSUFBSSxLQUNyQyxNQUFNLE9BQU8sVUFBVSxZQUFZLE1BQU0sS0FDekMsTUFBTSxPQUFPLFdBQVEsWUFBWSxPQUFJO0FBQUEsSUFFcEMsMkJBQVk7QUFBRSxhQUFPO0FBQUEsSUFBTSxFQUFHLEtBQUssU0FBUyxhQUFhLEVBQUU7QUFBQTtBQUFBOzs7QUNmOUQ7QUFBQSx1RkFBQUMsU0FBQTtBQUFBO0FBQ0EsSUFBQUEsUUFBTyxVQUFVLFNBQVUsTUFBTTtBQUMvQixVQUFJO0FBQ0YsZUFBTyxD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TUFBT2dYLGVBQWU7RUFDbkUsT0FBTztBQUVOLFVBQU1qSSxPQUFPakwsYUFBYXFILE1BQU07QUFDaENULGFBQ0UwTSxNQUFNLE1BQU1ySSxLQUFLOEgsSUFBSSxFQUNyQmhPLEtBQUssTUFBTTtBQUNYa08sbUJBQWE7QUFDYmhJLFdBQUsrSCxJQUFJNU0sUUFBUTtJQUNsQixDQUFDLEVBQ0FILEtBQU1ZLGlCQUFnQjtBQUN0Qm9NLG1CQUFhO0FBQ2JoSSxXQUFLK0gsSUFBSXZCLE9BQU81SyxXQUFXO0lBQzVCLENBQUM7QUFFRjNHLHFCQUFpQmlULEtBQUtDLElBQUk7RUFDM0I7QUFDRDtBQUdBLElBQU14TSxXQUFXQSxDQUFDd0IsV0FBVztFQUFDd0s7RUFBV2pNO0VBQVM2TDtFQUFlRTtBQUFjLEdBQUduVSxTQUFTZ1YsV0FBV0MsWUFBWTtBQUNqSCxRQUFNdE4sV0FBVyxJQUFJNUYsRUFBRTZGLFNBQVM7QUFDaEMsUUFBTXNLLFNBQVM7SUFDZEMsUUFBUTtJQUNSdE0sT0FBT2dFO0lBQ1BxTCxPQUFPYjtJQUNQNVEsTUFBTTJFO0lBQ04rTSxlQUFlbEI7SUFDZkcsZ0JBQWdCRDtJQUNoQm5VO0lBQ0FvVixXQUFXelksSUFBSWlCO0lBQ2Z5WCxPQUFPTDtJQUNQTSxLQUFLTDtFQUNOO0FBQ0F6VSxNQUFJK1UsS0FBS3JELE1BQU0sRUFDYjFMLEtBQUssTUFBTTtBQUNYbUIsYUFBU0UsUUFBUTtFQUNsQixDQUFDLEVBQ0FILEtBQU11TCxVQUFTO0FBQ2Z0TCxhQUFTdUwsT0FBT25WLElBQUkyQixjQUFjc0ksUUFBUSxNQUFNNkIsU0FBUyxFQUFFN0IsUUFBUSxNQUFNaUwsSUFBSSxDQUFDO0VBQy9FLENBQUM7QUFDRixTQUFPdEwsU0FBU1ksUUFBUTtBQUN6Qjs7QUVuZ0NBeEcsRUFBRUYsT0FBTzsiLAogICJuYW1lcyI6IFsibW9kdWxlIiwgIm1vZHVsZSIsICJlcnJvciIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgImVycm9yIiwgIm1vZHVsZSIsICJnbG9iYWxUaGlzIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIlN5bWJvbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiZG9jdW1lbnQiLCAibW9kdWxlIiwgImVycm9yIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZXJyb3IiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgImdsb2JhbCIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJnbG9iYWwiLCAiVHlwZUVycm9yIiwgIm1vZHVsZSIsICJlcnJvciIsICJtb2R1bGUiLCAiZXJyb3IiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAibW9kdWxlIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZ2xvYmFsIiwgIm1vZHVsZSIsICJtb2R1bGUiLCAiZXJyb3IiLCAibW9kdWxlIiwgIiQiLCAiZXJyb3IiLCAibW9kdWxlIiwgIiQiLCAiZXJyb3IiLCAiV0dfQUNUSU9OIiwgIm13IiwgImNvbmZpZyIsICJnZXQiLCAiY2ZnIiwgImRpc2FtQ2F0ZWdvcmllcyIsICJkaXNhbUxpbmtUZW1wbGF0ZXMiLCAiZGlzYW1MaW5rSWdub3JlVGVtcGxhdGVzIiwgImRpc2FtRm9ybWF0IiwgImRpc2FtUmVnRXhwIiwgImRpc2FtTmVlZGVkVGV4dCIsICJjb25jYXQiLCAicmVkaXJlY3RUb0Rpc2FtIiwgImludGVudGlvbmFsTGlua09wdGlvbiIsICJ0YXJnZXROYW1lc3BhY2VzIiwgImJhY2tsaW5rTGltaXQiLCAicXVlcnlUaXRsZUxpbWl0IiwgInJhZGl1cyIsICJudW1Db250ZXh0TGluZXMiLCAiaGlzdG9yeVNpemUiLCAiZWRpdENvb2xkb3duIiwgIndhdGNoIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgInJlcXVpcmUiLCAidHh0IiwgInN0YXJ0IiwgInN0YXJ0TWFpbiIsICJzdGFydFNhbWUiLCAiY2xvc2UiLCAidW5kbyIsICJvbWl0IiwgInJlZnJlc2giLCAidGl0bGVBc1RleHQiLCAiZGlzYW1OZWVkZWQiLCAiaW50ZW50aW9uYWxMaW5rIiwgInRpdGxlQXNUZXh0UHJvbXB0IiwgInJlbW92ZUxpbmsiLCAib3B0aW9uTWFya2VyIiwgInRhcmdldE9wdGlvbk1hcmtlciIsICJyZWRpcmVjdE9wdGlvbk1hcmtlciIsICJwYWdlVGl0bGVMaW5lIiwgIm5vTW9yZUxpbmtzIiwgInBlbmRpbmdFZGl0Q291bnRlciIsICJwZW5kaW5nRWRpdEJveCIsICJwZW5kaW5nRWRpdEJveFRpbWVFc3RpbWF0aW9uIiwgInBlbmRpbmdFZGl0Qm94TGltaXRlZCIsICJlcnJvciIsICJmZXRjaFJlZGlyZWN0c0Vycm9yIiwgImdldEJhY2tsaW5rc0Vycm9yIiwgImZldGNoUmlnaHRzRXJyb3IiLCAibG9hZFBhZ2VFcnJvciIsICJzYXZlUGFnZUVycm9yIiwgImRpc21pc3NFcnJvciIsICJwZW5kaW5nIiwgImVkaXRJblByb2dyZXNzIiwgImVsbGlwc2lzIiwgIm5vdGlmeUNoYXJhY3RlciIsICJzdW1tYXJ5IiwgInN1bW1hcnlDaGFuZ2VkIiwgInN1bW1hcnlPbWl0dGVkIiwgInN1bW1hcnlSZW1vdmVkIiwgInN1bW1hcnlJbnRlbnRpb25hbCIsICJzdW1tYXJ5SGVscE5lZWRlZCIsICJzdW1tYXJ5U2VwYXJhdG9yIiwgInJlZGlyZWN0U3VtbWFyeSIsICJhcGkiLCAiaW5pdE13QXBpIiwgInN0YXJ0TGluayIsICJ1aSIsICJsaW5rcyIsICJwYWdlQ2hhbmdlcyIsICJjdXJyZW50UGFnZVRpdGxlIiwgImN1cnJlbnRQYWdlUGFyYW1ldGVycyIsICJjdXJyZW50TGluayIsICJwb3NzaWJsZUJhY2tsaW5rRGVzdGluYXRpb25zIiwgImZvcmNlU2FtZVBhZ2UiLCAicnVubmluZyIsICJjaG9vc2luZyIsICJjYW5NYXJrSW50ZW50aW9uYWxMaW5rcyIsICJkaXNwbGF5ZWRQYWdlcyIsICJlZGl0Q291bnQiLCAiZWRpdExpbWl0IiwgInBlbmRpbmdTYXZlcyIsICJwZW5kaW5nRWRpdEJveFRleHQiLCAibGFzdEVkaXRNaWxsaXMiLCAicnVubmluZ1NhdmVzIiwgImluc3RhbGwiLCAiaXNEaXNhbSIsICIkIiwgInBvcnRsZXRJZCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgIlJlZ0V4cCIsICJ0ZXN0IiwgImdldFRpdGxlIiwgInN0YXJ0TWFpbkxpbmsiLCAidXRpbCIsICJhZGRQb3J0bGV0TGluayIsICJvbiIsICJzdGFydFNhbWVMaW5rIiwgImFkZCIsICJlbnN1cmVEQUJFeGlzdHMiLCAidGhlbiIsICJjYW5NYXJrIiwgImNyZWF0ZVVJIiwgImFkZFVubG9hZENvbmZpcm0iLCAibWFya0Rpc2FtT3B0aW9ucyIsICJjaGVja0VkaXRMaW1pdCIsICJ0b2dnbGVQZW5kaW5nRWRpdEJveCIsICJkb1BhZ2UiLCAiJGJvZHkiLCAiZGlzcGxheSIsICJhZGRDbGFzcyIsICJmaW5pc2hlZE1lc3NhZ2UiLCAidGV4dCIsICJoaWRlIiwgImNvbnRleHQiLCAidW5kb0J1dHRvbiIsICJjcmVhdGVCdXR0b24iLCAib21pdEJ1dHRvbiIsICJlbmRCdXR0b24iLCAic2F2ZUFuZEVuZCIsICJyZWZyZXNoQnV0dG9uIiwgInRpdGxlQXNUZXh0QnV0dG9uIiwgImNob29zZVRpdGxlRnJvbVByb21wdCIsICJpbnRlbnRpb25hbExpbmtCdXR0b24iLCAiY2hvb3NlSW50ZW50aW9uYWxMaW5rIiwgImRpc2FtTmVlZGVkQnV0dG9uIiwgImNob29zZURpc2FtTmVlZGVkIiwgInJlbW92ZUxpbmtCdXR0b24iLCAiY2hvb3NlTGlua1JlbW92YWwiLCAidG9wIiwgImFwcGVuZCIsICJsZWZ0QnV0dG9ucyIsICJyaWdodEJ1dHRvbnMiLCAiYWxsQnV0dG9ucyIsICJ1cGRhdGVFZGl0Q291bnRlciIsICJ0b2dnbGVBY3Rpb25CdXR0b25zIiwgImZpbmQiLCAiYmVmb3JlIiwgImZhZGVJbiIsICJ3aW5kb3ciLCAiY2hlY2tBY3R1YWxDaGFuZ2VzIiwgIm9wdGlvblBhZ2VUaXRsZXMiLCAib3B0aW9uTWFya2VycyIsICJnZXREaXNhbU9wdGlvbnMiLCAiZWFjaCIsICJfaW5kZXgiLCAiZWxlbWVudCIsICJsaW5rIiwgInRpdGxlIiwgImV4dHJhY3RQYWdlTmFtZSIsICJhdHRyIiwgImV2IiwgInByZXZlbnREZWZhdWx0IiwgImNob29zZVJlcGxhY2VtZW50IiwgImFmdGVyIiwgInB1c2giLCAidGFyZ2V0UGFnZSIsICJnZXRUYXJnZXRQYWdlIiwgImZldGNoUmVkaXJlY3RzIiwgImRvbmUiLCAicmVkaXJlY3RzIiwgImVuZFRhcmdldFBhZ2UiLCAicmVzb2x2ZVJlZGlyZWN0IiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJlbnRyaWVzIiwgIl9zdGVwIiwgInMiLCAibiIsICJpaSIsICJvcHRpb25QYWdlVGl0bGUiLCAidmFsdWUiLCAiZW5kT3B0aW9uVGl0bGUiLCAiaXNTYW1lUGFnZSIsICJlcnIiLCAiZSIsICJmIiwgImZhaWwiLCAiZGVmZXJyZWQiLCAiRGVmZXJyZWQiLCAicmVzb2x2ZSIsICJleGVjIiwgImRpc2FtVGl0bGUiLCAicmVwbGFjZSIsICJsb2FkUGFnZSIsICJwYWdlIiwgIm1pc3NpbmciLCAiY29udGVudCIsICJzYXZlUGFnZSIsICJkZXNjcmlwdGlvbiIsICJwcm9taXNlIiwgImZldGNoUmlnaHRzIiwgInJpZ2h0cyIsICJpbmNsdWRlcyIsICJhbHdheXMiLCAibGVuZ3RoIiwgImFwcGx5Q2hhbmdlIiwgInNoaWZ0IiwgImRhdGEiLCAiZG9MaW5rIiwgImdldEJhY2tsaW5rcyIsICJiYWNrbGlua3MiLCAicGFnZVRpdGxlcyIsICJfaSIsICJfcGVuZGluZ1NhdmVzIiwgImVsIiwgImZpbHRlciIsICJ0IiwgInJlbW92ZURpc2FtIiwgInVwZGF0ZUNvbnRleHQiLCAiZXh0cmFjdExpbmtUb1BhZ2UiLCAiZW5kIiwgInBhZ2VUaXRsZSIsICJleHRyYSIsICJhZGRDaGFuZ2UiLCAicmVwbGFjZUxpbmsiLCAicHJvbXB0IiwgImxhc3RQYWdlIiwgImF0IiwgInVuc2hpZnQiLCAiY29udGVudEJlZm9yZSIsICJwb3AiLCAiZW5hYmxlZCIsICJhZmZlY3RlZEJ1dHRvbnMiLCAiX2kyIiwgIl9hZmZlY3RlZEJ1dHRvbnMiLCAiYnV0dG9uIiwgInByb3AiLCAidG9nZ2xlRmluaXNoZWRNZXNzYWdlIiwgInNob3ciLCAidG9nZ2xlIiwgImZhZGVPdXQiLCAibm90aWZ5Q29tcGxldGlvbiIsICJvbGRUaXRsZSIsICJvbmUiLCAiaHRtbCIsICJnZXRVcmwiLCAicmVkaXJlY3QiLCAiZXNjYXBlIiwgImV4dHJhY3RDb250ZXh0IiwgImVtcHR5IiwgIm51bUxpbmVzIiwgIk1hdGgiLCAiY2VpbCIsICJoZWlnaHQiLCAiTnVtYmVyIiwgInBhcnNlRmxvYXQiLCAiY3NzIiwgIkFycmF5IiwgImZyb20iLCAiam9pbiIsICJoYXNEaXNhbVRlbXBsYXRlIiwgImNvdW50QWN0dWFsbHlDaGFuZ2VkRnVsbHlDaGVja2VkUGFnZXMiLCAidGV4dENvbnRlbnQiLCAic2Vjb25kc1RvSEhNTVNTIiwgInBhZ2VDaGFuZ2UiLCAiY2hhbmdlU3VtbWFyaWVzIiwgInNhdmUiLCAic2F2ZVdpdGhDb29sZG93biIsICJhcHBseUFsbENoYW5nZXMiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAib2xkQ29udGVudCIsICJsYXN0UGFnZUNoYW5nZSIsICJjb3VudEFjdHVhbENoYW5nZXMiLCAiY2hhbmdlQ291bnQiLCAiX2l0ZXJhdG9yMyIsICJfc3RlcDMiLCAibGFzdENoYW5nZSIsICJjdXJyZW50VG9vbFVJIiwgInJlbW92ZUNsYXNzIiwgInJlbW92ZSIsICJjb21wbGV0ZSIsICJlcnJvckRlc2NyaXB0aW9uIiwgImVycm9yQm94IiwgInVpSXNJblBsYWNlIiwgImNvbnRhaW5zIiwgImRvY3VtZW50RWxlbWVudCIsICJuZXh0RWxlbWVudCIsICJuZXdDb250ZW50IiwgImxpbmtTdGFydCIsICJzbGljZSIsICJtYXgiLCAibGlua0VuZCIsICJhZnRlckRlc2NyaXB0aW9uIiwgImV4dHJhY3RMaW5rIiwgImxhc3RJbmRleCIsICJ0aXRsZVJlZ2V4IiwgInRlbXBsYXRlUmVnZXgiLCAibWF0Y2giLCAiaW5kZXgiLCAiX21hdGNoJCIsICJwb3NzaWJseUFtYmlndW91cyIsICJfZW5kIiwgInJlc3QiLCAidGVtcGxhdGVNYXRjaCIsICJ0ZW1wbGF0ZVRpdGxlIiwgImdldENhbm9uaWNhbFRpdGxlIiwgImRlc3RpbmF0aW9ucyIsICJfbWF0Y2gkMiIsICJ0aXRsZTEiLCAidGl0bGUyIiwgIlRpdGxlIiwgImdldFByZWZpeGVkVGV4dCIsICJjb250ZXh0U3RhcnQiLCAiY29udGV4dEVuZCIsICJjb250ZXh0UHJldiIsICJjb250ZXh0TmV4dCIsICJwYWdlTmFtZSIsICJleHRyYWN0UGFnZU5hbWVSYXciLCAic2VjdGlvblBvcyIsICJpbmRleE9mIiwgInNlY3Rpb24iLCAiaGFzQ2xhc3MiLCAiaHJlZiIsICJnZXRQYXJhbVZhbHVlIiwgInJlZ2V4IiwgInJlZ2V4UmVzdWx0IiwgImlzQXJyYXkiLCAiZGVjb2RlVVJJQ29tcG9uZW50IiwgImNhdGVnb3JpZXMiLCAiX2l0ZXJhdG9yNCIsICJfc3RlcDQiLCAiY2F0ZWdvcnkiLCAidG90YWxTZWNvbmRzIiwgImhobW1zcyIsICJob3VycyIsICJmbG9vciIsICJtaW51dGVzIiwgInNlY29uZHMiLCAicGFkIiwgInN0ciIsICJ6IiwgIndpZHRoIiwgInRvU3RyaW5nIiwgIm9uQ2xpY2siLCAidHlwZSIsICJwb3NzaWJsZVJlZGlyZWN0cyIsICJhcHBsaWVkUmVkaXJlY3QiLCAidmlzaXRlZFBhZ2VzIiwgImN1cnJlbnRQYWdlIiwgIl9pdGVyYXRvcjUiLCAiX3N0ZXA1IiwgInBvc3NpYmxlUmVkaXJlY3QiLCAidG8iLCAicGFyYW1zIiwgImFjdGlvbiIsICJsaXN0IiwgImJsdGl0bGUiLCAiYmxyZWRpcmVjdCIsICJibGxpbWl0IiwgImJsbmFtZXNwYWNlIiwgInF1ZXJ5IiwgImxpbmtUaXRsZXMiLCAiYmFja2xpbmtzUXVlcnkiLCAiX2l0ZXJhdG9yNiIsICJfc3RlcDYiLCAicmVkaXJsaW5rcyIsICJfaXRlcmF0b3I3IiwgIl9zdGVwNyIsICJjb2RlIiwgInJlamVjdCIsICJjdXJyZW50VGl0bGVzIiwgInJlc3RUaXRsZXMiLCAidGl0bGVzIiwgIl9xdWVyeSRyZWRpcmVjdHMiLCAidGhlc2VSZWRpcmVjdHMiLCAibWV0YSIsICJ1aXByb3AiLCAidXNlcmluZm8iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAicnZwcm9wIiwgInJhd1BhZ2UiLCAicGFnZXMiLCAicmV2aXNpb25zIiwgImJhc2VUaW1lU3RhbXAiLCAidGltZXN0YW1wIiwgInN0YXJ0VGltZVN0YW1wIiwgInN0YXJ0dGltZXN0YW1wIiwgImVkaXRUb2tlbiIsICJ0b2tlbnMiLCAiY3NyZnRva2VuIiwgImFyZ3MiLCAiZGZkIiwgImNoZWNrQW5kU2F2ZSIsICJtaWxsaXNTaW5jZUxhc3QiLCAiRGF0ZSIsICJub3ciLCAic2V0VGltZW91dCIsICJhcHBseSIsICJtaW5vckVkaXQiLCAiYm90RWRpdCIsICJ0b2tlbiIsICJiYXNldGltZXN0YW1wIiwgIndhdGNobGlzdCIsICJtaW5vciIsICJib3QiLCAicG9zdCJdCn0K
