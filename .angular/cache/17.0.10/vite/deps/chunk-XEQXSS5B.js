import {
  AnimationBuilder,
  animate,
  style
} from "./chunk-X7NPMIYH.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  isPlatformBrowser
} from "./chunk-IAEJW7L7.js";
import {
  ApplicationRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
  TemplateRef,
  ViewContainerRef,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1
} from "./chunk-R5UVOSWV.js";
import {
  Subject,
  animationFrameScheduler,
  filter,
  fromEvent,
  merge,
  of
} from "./chunk-AFRS2OIU.js";
import {
  __commonJS,
  __require,
  __spreadProps,
  __spreadValues
} from "./chunk-J5XZNU7V.js";

// node_modules/google-libphonenumber/dist/libphonenumber.js
var require_libphonenumber = __commonJS({
  "node_modules/google-libphonenumber/dist/libphonenumber.js"(exports, module) {
    (function(f2) {
      if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f2();
      } else if (typeof define === "function" && define.amd) {
        define([], f2);
      } else {
        var g2;
        if (typeof window !== "undefined") {
          g2 = window;
        } else if (typeof global !== "undefined") {
          g2 = global;
        } else if (typeof self !== "undefined") {
          g2 = self;
        } else {
          g2 = this;
        }
        g2.libphonenumber = f2();
      }
    })(function() {
      var define, module, exports;
      return function() {
        function r(e2, n, t) {
          function o(i2, f2) {
            if (!n[i2]) {
              if (!e2[i2]) {
                var c2 = "function" == typeof __require && __require;
                if (!f2 && c2)
                  return c2(i2, true);
                if (u)
                  return u(i2, true);
                var a2 = new Error("Cannot find module '" + i2 + "'");
                throw a2.code = "MODULE_NOT_FOUND", a2;
              }
              var p = n[i2] = { exports: {} };
              e2[i2][0].call(p.exports, function(r2) {
                var n2 = e2[i2][1][r2];
                return o(n2 || r2);
              }, p, p.exports, r, e2, n, t);
            }
            return n[i2].exports;
          }
          for (var u = "function" == typeof __require && __require, i = 0; i < t.length; i++)
            o(t[i]);
          return o;
        }
        return r;
      }()({ 1: [function(require, module, exports) {
        (function(global) {
          (function() {
            var $jscomp = $jscomp || {};
            $jscomp.scope = {};
            $jscomp.createTemplateTagFirstArg = function(a2) {
              return a2.raw = a2;
            };
            $jscomp.createTemplateTagFirstArgWithRaw = function(a2, b2) {
              a2.raw = b2;
              return a2;
            };
            $jscomp.arrayIteratorImpl = function(a2) {
              var b2 = 0;
              return function() {
                return b2 < a2.length ? { done: false, value: a2[b2++] } : { done: true };
              };
            };
            $jscomp.arrayIterator = function(a2) {
              return { next: $jscomp.arrayIteratorImpl(a2) };
            };
            $jscomp.makeIterator = function(a2) {
              var b2 = "undefined" != typeof Symbol && Symbol.iterator && a2[Symbol.iterator];
              return b2 ? b2.call(a2) : $jscomp.arrayIterator(a2);
            };
            $jscomp.arrayFromIterator = function(a2) {
              for (var b2, c2 = []; !(b2 = a2.next()).done; )
                c2.push(b2.value);
              return c2;
            };
            $jscomp.arrayFromIterable = function(a2) {
              return a2 instanceof Array ? a2 : $jscomp.arrayFromIterator($jscomp.makeIterator(a2));
            };
            $jscomp.checkStringArgs = function(a2, b2, c2) {
              if (null == a2)
                throw new TypeError("The 'this' value for String.prototype." + c2 + " must not be null or undefined");
              if (b2 instanceof RegExp)
                throw new TypeError("First argument to String.prototype." + c2 + " must not be a regular expression");
              return a2 + "";
            };
            $jscomp.ASSUME_ES5 = false;
            $jscomp.ASSUME_NO_NATIVE_MAP = false;
            $jscomp.ASSUME_NO_NATIVE_SET = false;
            $jscomp.SIMPLE_FROUND_POLYFILL = false;
            $jscomp.ISOLATE_POLYFILLS = false;
            $jscomp.FORCE_POLYFILL_PROMISE = false;
            $jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = false;
            $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a2, b2, c2) {
              if (a2 == Array.prototype || a2 == Object.prototype)
                return a2;
              a2[b2] = c2.value;
              return a2;
            };
            $jscomp.getGlobal = function(a2) {
              a2 = ["object" == typeof globalThis && globalThis, a2, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
              for (var b2 = 0; b2 < a2.length; ++b2) {
                var c2 = a2[b2];
                if (c2 && c2.Math == Math)
                  return c2;
              }
              throw Error("Cannot find global object");
            };
            $jscomp.global = $jscomp.getGlobal(this);
            $jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
            $jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
            $jscomp.polyfills = {};
            $jscomp.propertyToPolyfillSymbol = {};
            $jscomp.POLYFILL_PREFIX = "$jscp$";
            var $jscomp$lookupPolyfilledValue = function(a2, b2) {
              var c2 = $jscomp.propertyToPolyfillSymbol[b2];
              if (null == c2)
                return a2[b2];
              c2 = a2[c2];
              return void 0 !== c2 ? c2 : a2[b2];
            };
            $jscomp.polyfill = function(a2, b2, c2, d2) {
              b2 && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a2, b2, c2, d2) : $jscomp.polyfillUnisolated(a2, b2, c2, d2));
            };
            $jscomp.polyfillUnisolated = function(a2, b2, c2, d2) {
              c2 = $jscomp.global;
              a2 = a2.split(".");
              for (d2 = 0; d2 < a2.length - 1; d2++) {
                var e2 = a2[d2];
                if (!(e2 in c2))
                  return;
                c2 = c2[e2];
              }
              a2 = a2[a2.length - 1];
              d2 = c2[a2];
              b2 = b2(d2);
              b2 != d2 && null != b2 && $jscomp.defineProperty(c2, a2, { configurable: true, writable: true, value: b2 });
            };
            $jscomp.polyfillIsolated = function(a2, b2, c2, d2) {
              var e2 = a2.split(".");
              a2 = 1 === e2.length;
              d2 = e2[0];
              d2 = !a2 && d2 in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
              for (var f2 = 0; f2 < e2.length - 1; f2++) {
                var g2 = e2[f2];
                if (!(g2 in d2))
                  return;
                d2 = d2[g2];
              }
              e2 = e2[e2.length - 1];
              c2 = $jscomp.IS_SYMBOL_NATIVE && "es6" === c2 ? d2[e2] : null;
              b2 = b2(c2);
              null != b2 && (a2 ? $jscomp.defineProperty($jscomp.polyfills, e2, { configurable: true, writable: true, value: b2 }) : b2 !== c2 && ($jscomp.propertyToPolyfillSymbol[e2] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(e2) : $jscomp.POLYFILL_PREFIX + e2, e2 = $jscomp.propertyToPolyfillSymbol[e2], $jscomp.defineProperty(d2, e2, { configurable: true, writable: true, value: b2 })));
            };
            $jscomp.polyfill("String.prototype.endsWith", function(a2) {
              return a2 ? a2 : function(b2, c2) {
                var d2 = $jscomp.checkStringArgs(this, b2, "endsWith");
                b2 += "";
                void 0 === c2 && (c2 = d2.length);
                c2 = Math.max(0, Math.min(c2 | 0, d2.length));
                for (var e2 = b2.length; 0 < e2 && 0 < c2; )
                  if (d2[--c2] != b2[--e2])
                    return false;
                return 0 >= e2;
              };
            }, "es6", "es3");
            $jscomp.findInternal = function(a2, b2, c2) {
              a2 instanceof String && (a2 = String(a2));
              for (var d2 = a2.length, e2 = 0; e2 < d2; e2++) {
                var f2 = a2[e2];
                if (b2.call(c2, f2, e2, a2))
                  return { i: e2, v: f2 };
              }
              return { i: -1, v: void 0 };
            };
            $jscomp.polyfill("Array.prototype.find", function(a2) {
              return a2 ? a2 : function(b2, c2) {
                return $jscomp.findInternal(this, b2, c2).v;
              };
            }, "es6", "es3");
            $jscomp.polyfill("String.prototype.startsWith", function(a2) {
              return a2 ? a2 : function(b2, c2) {
                var d2 = $jscomp.checkStringArgs(this, b2, "startsWith");
                b2 += "";
                var e2 = d2.length, f2 = b2.length;
                c2 = Math.max(0, Math.min(c2 | 0, d2.length));
                for (var g2 = 0; g2 < f2 && c2 < e2; )
                  if (d2[c2++] != b2[g2++])
                    return false;
                return g2 >= f2;
              };
            }, "es6", "es3");
            $jscomp.polyfill("String.prototype.repeat", function(a2) {
              return a2 ? a2 : function(b2) {
                var c2 = $jscomp.checkStringArgs(this, null, "repeat");
                if (0 > b2 || 1342177279 < b2)
                  throw new RangeError("Invalid count value");
                b2 |= 0;
                for (var d2 = ""; b2; )
                  if (b2 & 1 && (d2 += c2), b2 >>>= 1)
                    c2 += c2;
                return d2;
              };
            }, "es6", "es3");
            $jscomp.initSymbol = function() {
            };
            $jscomp.polyfill("Symbol", function(a2) {
              if (a2)
                return a2;
              var b2 = function(e2, f2) {
                this.$jscomp$symbol$id_ = e2;
                $jscomp.defineProperty(this, "description", { configurable: true, writable: true, value: f2 });
              };
              b2.prototype.toString = function() {
                return this.$jscomp$symbol$id_;
              };
              var c2 = 0, d2 = function(e2) {
                if (this instanceof d2)
                  throw new TypeError("Symbol is not a constructor");
                return new b2("jscomp_symbol_" + (e2 || "") + "_" + c2++, e2);
              };
              return d2;
            }, "es6", "es3");
            $jscomp.polyfill(
              "Symbol.iterator",
              function(a2) {
                if (a2)
                  return a2;
                a2 = Symbol("Symbol.iterator");
                for (var b2 = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c2 = 0; c2 < b2.length; c2++) {
                  var d2 = $jscomp.global[b2[c2]];
                  "function" === typeof d2 && "function" != typeof d2.prototype[a2] && $jscomp.defineProperty(d2.prototype, a2, { configurable: true, writable: true, value: function() {
                    return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this));
                  } });
                }
                return a2;
              },
              "es6",
              "es3"
            );
            $jscomp.iteratorPrototype = function(a2) {
              a2 = { next: a2 };
              a2[Symbol.iterator] = function() {
                return this;
              };
              return a2;
            };
            $jscomp.iteratorFromArray = function(a2, b2) {
              a2 instanceof String && (a2 += "");
              var c2 = 0, d2 = false, e2 = { next: function() {
                if (!d2 && c2 < a2.length) {
                  var f2 = c2++;
                  return { value: b2(f2, a2[f2]), done: false };
                }
                d2 = true;
                return { done: true, value: void 0 };
              } };
              e2[Symbol.iterator] = function() {
                return e2;
              };
              return e2;
            };
            $jscomp.polyfill("Array.prototype.keys", function(a2) {
              return a2 ? a2 : function() {
                return $jscomp.iteratorFromArray(this, function(b2) {
                  return b2;
                });
              };
            }, "es6", "es3");
            $jscomp.polyfill("Object.is", function(a2) {
              return a2 ? a2 : function(b2, c2) {
                return b2 === c2 ? 0 !== b2 || 1 / b2 === 1 / c2 : b2 !== b2 && c2 !== c2;
              };
            }, "es6", "es3");
            $jscomp.polyfill("Array.prototype.includes", function(a2) {
              return a2 ? a2 : function(b2, c2) {
                var d2 = this;
                d2 instanceof String && (d2 = String(d2));
                var e2 = d2.length;
                c2 = c2 || 0;
                for (0 > c2 && (c2 = Math.max(c2 + e2, 0)); c2 < e2; c2++) {
                  var f2 = d2[c2];
                  if (f2 === b2 || Object.is(f2, b2))
                    return true;
                }
                return false;
              };
            }, "es7", "es3");
            $jscomp.polyfill("String.prototype.includes", function(a2) {
              return a2 ? a2 : function(b2, c2) {
                return -1 !== $jscomp.checkStringArgs(this, b2, "includes").indexOf(b2, c2 || 0);
              };
            }, "es6", "es3");
            var COMPILED = true, goog = goog || {};
            goog.global = this || self;
            goog.exportPath_ = function(a2, b2, c2, d2) {
              a2 = a2.split(".");
              d2 = d2 || goog.global;
              a2[0] in d2 || "undefined" == typeof d2.execScript || d2.execScript("var " + a2[0]);
              for (var e2; a2.length && (e2 = a2.shift()); )
                if (a2.length || void 0 === b2)
                  d2 = d2[e2] && d2[e2] !== Object.prototype[e2] ? d2[e2] : d2[e2] = {};
                else if (!c2 && goog.isObject(b2) && goog.isObject(d2[e2]))
                  for (var f2 in b2)
                    b2.hasOwnProperty(f2) && (d2[e2][f2] = b2[f2]);
                else
                  d2[e2] = b2;
            };
            goog.define = function(a2, b2) {
              if (!COMPILED) {
                var c2 = goog.global.CLOSURE_UNCOMPILED_DEFINES, d2 = goog.global.CLOSURE_DEFINES;
                c2 && void 0 === c2.nodeType && Object.prototype.hasOwnProperty.call(c2, a2) ? b2 = c2[a2] : d2 && void 0 === d2.nodeType && Object.prototype.hasOwnProperty.call(d2, a2) && (b2 = d2[a2]);
              }
              return b2;
            };
            goog.FEATURESET_YEAR = 2012;
            goog.DEBUG = true;
            goog.LOCALE = "en";
            goog.TRUSTED_SITE = true;
            goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
            goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = false;
            goog.provide = function(a2) {
              if (goog.isInModuleLoader_())
                throw Error("goog.provide cannot be used within a module.");
              if (!COMPILED && goog.isProvided_(a2))
                throw Error('Namespace "' + a2 + '" already declared.');
              goog.constructNamespace_(a2);
            };
            goog.constructNamespace_ = function(a2, b2, c2) {
              if (!COMPILED) {
                delete goog.implicitNamespaces_[a2];
                for (var d2 = a2; (d2 = d2.substring(0, d2.lastIndexOf("."))) && !goog.getObjectByName(d2); )
                  goog.implicitNamespaces_[d2] = true;
              }
              goog.exportPath_(a2, b2, c2);
            };
            goog.getScriptNonce = function(a2) {
              if (a2 && a2 != goog.global)
                return goog.getScriptNonce_(a2.document);
              null === goog.cspNonce_ && (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document));
              return goog.cspNonce_;
            };
            goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
            goog.cspNonce_ = null;
            goog.getScriptNonce_ = function(a2) {
              return (a2 = a2.querySelector && a2.querySelector("script[nonce]")) && (a2 = a2.nonce || a2.getAttribute("nonce")) && goog.NONCE_PATTERN_.test(a2) ? a2 : "";
            };
            goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
            goog.module = function(a2) {
              if ("string" !== typeof a2 || !a2 || -1 == a2.search(goog.VALID_MODULE_RE_))
                throw Error("Invalid module identifier");
              if (!goog.isInGoogModuleLoader_())
                throw Error("Module " + a2 + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
              if (goog.moduleLoaderState_.moduleName)
                throw Error("goog.module may only be called once per module.");
              goog.moduleLoaderState_.moduleName = a2;
              if (!COMPILED) {
                if (goog.isProvided_(a2))
                  throw Error('Namespace "' + a2 + '" already declared.');
                delete goog.implicitNamespaces_[a2];
              }
            };
            goog.module.get = function(a2) {
              return goog.module.getInternal_(a2);
            };
            goog.module.getInternal_ = function(a2) {
              if (!COMPILED) {
                if (a2 in goog.loadedModules_)
                  return goog.loadedModules_[a2].exports;
                if (!goog.implicitNamespaces_[a2])
                  return a2 = goog.getObjectByName(a2), null != a2 ? a2 : null;
              }
              return null;
            };
            goog.ModuleType = { ES6: "es6", GOOG: "goog" };
            goog.moduleLoaderState_ = null;
            goog.isInModuleLoader_ = function() {
              return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
            };
            goog.isInGoogModuleLoader_ = function() {
              return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG;
            };
            goog.isInEs6ModuleLoader_ = function() {
              if (goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6)
                return true;
              var a2 = goog.global.$jscomp;
              return a2 ? "function" != typeof a2.getCurrentModulePath ? false : !!a2.getCurrentModulePath() : false;
            };
            goog.module.declareLegacyNamespace = function() {
              if (!COMPILED && !goog.isInGoogModuleLoader_())
                throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
              if (!COMPILED && !goog.moduleLoaderState_.moduleName)
                throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
              goog.moduleLoaderState_.declareLegacyNamespace = true;
            };
            goog.declareModuleId = function(a2) {
              if (!COMPILED) {
                if (!goog.isInEs6ModuleLoader_())
                  throw Error("goog.declareModuleId may only be called from within an ES6 module");
                if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName)
                  throw Error("goog.declareModuleId may only be called once per module.");
                if (a2 in goog.loadedModules_)
                  throw Error('Module with namespace "' + a2 + '" already exists.');
              }
              if (goog.moduleLoaderState_)
                goog.moduleLoaderState_.moduleName = a2;
              else {
                var b2 = goog.global.$jscomp;
                if (!b2 || "function" != typeof b2.getCurrentModulePath)
                  throw Error('Module with namespace "' + a2 + '" has been loaded incorrectly.');
                b2 = b2.require(b2.getCurrentModulePath());
                goog.loadedModules_[a2] = { exports: b2, type: goog.ModuleType.ES6, moduleId: a2 };
              }
            };
            goog.setTestOnly = function(a2) {
              if (goog.DISALLOW_TEST_ONLY_CODE)
                throw a2 = a2 || "", Error("Importing test-only code into non-debug environment" + (a2 ? ": " + a2 : "."));
            };
            goog.forwardDeclare = function(a2) {
            };
            COMPILED || (goog.isProvided_ = function(a2) {
              return a2 in goog.loadedModules_ || !goog.implicitNamespaces_[a2] && null != goog.getObjectByName(a2);
            }, goog.implicitNamespaces_ = { "goog.module": true });
            goog.getObjectByName = function(a2, b2) {
              a2 = a2.split(".");
              b2 = b2 || goog.global;
              for (var c2 = 0; c2 < a2.length; c2++)
                if (b2 = b2[a2[c2]], null == b2)
                  return null;
              return b2;
            };
            goog.addDependency = function(a2, b2, c2, d2) {
              !COMPILED && goog.DEPENDENCIES_ENABLED && goog.debugLoader_.addDependency(a2, b2, c2, d2);
            };
            goog.ENABLE_DEBUG_LOADER = true;
            goog.logToConsole_ = function(a2) {
              goog.global.console && goog.global.console.error(a2);
            };
            goog.require = function(a2) {
              if (!COMPILED) {
                goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(a2);
                if (goog.isProvided_(a2)) {
                  if (goog.isInModuleLoader_())
                    return goog.module.getInternal_(a2);
                } else if (goog.ENABLE_DEBUG_LOADER) {
                  var b2 = goog.moduleLoaderState_;
                  goog.moduleLoaderState_ = null;
                  try {
                    goog.debugLoader_.load_(a2);
                  } finally {
                    goog.moduleLoaderState_ = b2;
                  }
                }
                return null;
              }
            };
            goog.requireType = function(a2) {
              return {};
            };
            goog.basePath = "";
            goog.nullFunction = function() {
            };
            goog.abstractMethod = function() {
              throw Error("unimplemented abstract method");
            };
            goog.addSingletonGetter = function(a2) {
              a2.instance_ = void 0;
              a2.getInstance = function() {
                if (a2.instance_)
                  return a2.instance_;
                goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a2);
                return a2.instance_ = new a2();
              };
            };
            goog.instantiatedSingletons_ = [];
            goog.LOAD_MODULE_USING_EVAL = true;
            goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
            goog.loadedModules_ = {};
            goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
            goog.TRANSPILE = "detect";
            goog.ASSUME_ES_MODULES_TRANSPILED = false;
            goog.TRANSPILE_TO_LANGUAGE = "";
            goog.TRANSPILER = "transpile.js";
            goog.hasBadLetScoping = null;
            goog.useSafari10Workaround = function() {
              if (null == goog.hasBadLetScoping) {
                try {
                  var a = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";');
                } catch (b2) {
                  a = false;
                }
                goog.hasBadLetScoping = a;
              }
              return goog.hasBadLetScoping;
            };
            goog.workaroundSafari10EvalBug = function(a2) {
              return "(function(){" + a2 + "\n;})();\n";
            };
            goog.loadModule = function(a2) {
              var b2 = goog.moduleLoaderState_;
              try {
                goog.moduleLoaderState_ = { moduleName: "", declareLegacyNamespace: false, type: goog.ModuleType.GOOG };
                var c2 = {}, d2 = c2;
                if ("function" === typeof a2)
                  d2 = a2.call(void 0, d2);
                else if ("string" === typeof a2)
                  goog.useSafari10Workaround() && (a2 = goog.workaroundSafari10EvalBug(a2)), d2 = goog.loadModuleFromSource_.call(void 0, d2, a2);
                else
                  throw Error("Invalid module definition");
                var e2 = goog.moduleLoaderState_.moduleName;
                if ("string" === typeof e2 && e2)
                  goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(e2, d2, c2 !== d2) : goog.SEAL_MODULE_EXPORTS && Object.seal && "object" == typeof d2 && null != d2 && Object.seal(d2), goog.loadedModules_[e2] = { exports: d2, type: goog.ModuleType.GOOG, moduleId: goog.moduleLoaderState_.moduleName };
                else
                  throw Error('Invalid module name "' + e2 + '"');
              } finally {
                goog.moduleLoaderState_ = b2;
              }
            };
            goog.loadModuleFromSource_ = function(a, b) {
              eval(b);
              return a;
            };
            goog.normalizePath_ = function(a2) {
              a2 = a2.split("/");
              for (var b2 = 0; b2 < a2.length; )
                "." == a2[b2] ? a2.splice(b2, 1) : b2 && ".." == a2[b2] && a2[b2 - 1] && ".." != a2[b2 - 1] ? a2.splice(--b2, 2) : b2++;
              return a2.join("/");
            };
            goog.loadFileSync_ = function(a2) {
              if (goog.global.CLOSURE_LOAD_FILE_SYNC)
                return goog.global.CLOSURE_LOAD_FILE_SYNC(a2);
              try {
                var b2 = new goog.global.XMLHttpRequest();
                b2.open("get", a2, false);
                b2.send();
                return 0 == b2.status || 200 == b2.status ? b2.responseText : null;
              } catch (c2) {
                return null;
              }
            };
            goog.transpile_ = function(a2, b2, c2) {
              var d2 = goog.global.$jscomp;
              d2 || (goog.global.$jscomp = d2 = {});
              var e2 = d2.transpile;
              if (!e2) {
                var f2 = goog.basePath + goog.TRANSPILER, g2 = goog.loadFileSync_(f2);
                if (g2) {
                  (function() {
                    (0, eval)(g2 + "\n//# sourceURL=" + f2);
                  }).call(goog.global);
                  if (goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile)
                    throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
                  goog.global.$jscomp.transpile = goog.global.$gwtExport.$jscomp.transpile;
                  d2 = goog.global.$jscomp;
                  e2 = d2.transpile;
                }
              }
              e2 || (e2 = d2.transpile = function(h, k) {
                goog.logToConsole_(k + " requires transpilation but no transpiler was found.");
                return h;
              });
              return e2(a2, b2, c2);
            };
            goog.typeOf = function(a2) {
              var b2 = typeof a2;
              return "object" != b2 ? b2 : a2 ? Array.isArray(a2) ? "array" : b2 : "null";
            };
            goog.isArrayLike = function(a2) {
              var b2 = goog.typeOf(a2);
              return "array" == b2 || "object" == b2 && "number" == typeof a2.length;
            };
            goog.isDateLike = function(a2) {
              return goog.isObject(a2) && "function" == typeof a2.getFullYear;
            };
            goog.isObject = function(a2) {
              var b2 = typeof a2;
              return "object" == b2 && null != a2 || "function" == b2;
            };
            goog.getUid = function(a2) {
              return Object.prototype.hasOwnProperty.call(a2, goog.UID_PROPERTY_) && a2[goog.UID_PROPERTY_] || (a2[goog.UID_PROPERTY_] = ++goog.uidCounter_);
            };
            goog.hasUid = function(a2) {
              return !!a2[goog.UID_PROPERTY_];
            };
            goog.removeUid = function(a2) {
              null !== a2 && "removeAttribute" in a2 && a2.removeAttribute(goog.UID_PROPERTY_);
              try {
                delete a2[goog.UID_PROPERTY_];
              } catch (b2) {
              }
            };
            goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0);
            goog.uidCounter_ = 0;
            goog.cloneObject = function(a2) {
              var b2 = goog.typeOf(a2);
              if ("object" == b2 || "array" == b2) {
                if ("function" === typeof a2.clone)
                  return a2.clone();
                b2 = "array" == b2 ? [] : {};
                for (var c2 in a2)
                  b2[c2] = goog.cloneObject(a2[c2]);
                return b2;
              }
              return a2;
            };
            goog.bindNative_ = function(a2, b2, c2) {
              return a2.call.apply(a2.bind, arguments);
            };
            goog.bindJs_ = function(a2, b2, c2) {
              if (!a2)
                throw Error();
              if (2 < arguments.length) {
                var d2 = Array.prototype.slice.call(arguments, 2);
                return function() {
                  var e2 = Array.prototype.slice.call(arguments);
                  Array.prototype.unshift.apply(e2, d2);
                  return a2.apply(b2, e2);
                };
              }
              return function() {
                return a2.apply(b2, arguments);
              };
            };
            goog.bind = function(a2, b2, c2) {
              Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;
              return goog.bind.apply(null, arguments);
            };
            goog.partial = function(a2, b2) {
              var c2 = Array.prototype.slice.call(arguments, 1);
              return function() {
                var d2 = c2.slice();
                d2.push.apply(d2, arguments);
                return a2.apply(this, d2);
              };
            };
            goog.mixin = function(a2, b2) {
              for (var c2 in b2)
                a2[c2] = b2[c2];
            };
            goog.now = function() {
              return Date.now();
            };
            goog.globalEval = function(a2) {
              (0, eval)(a2);
            };
            goog.getCssName = function(a2, b2) {
              if ("." == String(a2).charAt(0))
                throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + a2);
              var c2 = function(e2) {
                return goog.cssNameMapping_[e2] || e2;
              }, d2 = function(e2) {
                e2 = e2.split("-");
                for (var f2 = [], g2 = 0; g2 < e2.length; g2++)
                  f2.push(c2(e2[g2]));
                return f2.join("-");
              };
              d2 = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? c2 : d2 : function(e2) {
                return e2;
              };
              a2 = b2 ? a2 + "-" + d2(b2) : d2(a2);
              return goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(a2) : a2;
            };
            goog.setCssNameMapping = function(a2, b2) {
              goog.cssNameMapping_ = a2;
              goog.cssNameMappingStyle_ = b2;
            };
            !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
            goog.getMsg = function(a2, b2, c2) {
              c2 && c2.html && (a2 = a2.replace(/</g, "&lt;"));
              c2 && c2.unescapeHtmlEntities && (a2 = a2.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&"));
              b2 && (a2 = a2.replace(/\{\$([^}]+)}/g, function(d2, e2) {
                return null != b2 && e2 in b2 ? b2[e2] : d2;
              }));
              return a2;
            };
            goog.getMsgWithFallback = function(a2, b2) {
              return a2;
            };
            goog.exportSymbol = function(a2, b2, c2) {
              goog.exportPath_(a2, b2, true, c2);
            };
            goog.exportProperty = function(a2, b2, c2) {
              a2[b2] = c2;
            };
            goog.inherits = function(a2, b2) {
              function c2() {
              }
              c2.prototype = b2.prototype;
              a2.superClass_ = b2.prototype;
              a2.prototype = new c2();
              a2.prototype.constructor = a2;
              a2.base = function(d2, e2, f2) {
                for (var g2 = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                  g2[h - 2] = arguments[h];
                return b2.prototype[e2].apply(d2, g2);
              };
            };
            goog.scope = function(a2) {
              if (goog.isInModuleLoader_())
                throw Error("goog.scope is not supported within a module.");
              a2.call(goog.global);
            };
            COMPILED || (goog.global.COMPILED = COMPILED);
            goog.defineClass = function(a2, b2) {
              var c2 = b2.constructor, d2 = b2.statics;
              c2 && c2 != Object.prototype.constructor || (c2 = function() {
                throw Error("cannot instantiate an interface (no constructor defined).");
              });
              c2 = goog.defineClass.createSealingConstructor_(c2, a2);
              a2 && goog.inherits(c2, a2);
              delete b2.constructor;
              delete b2.statics;
              goog.defineClass.applyProperties_(c2.prototype, b2);
              null != d2 && (d2 instanceof Function ? d2(c2) : goog.defineClass.applyProperties_(c2, d2));
              return c2;
            };
            goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
            goog.defineClass.createSealingConstructor_ = function(a2, b2) {
              return goog.defineClass.SEAL_CLASS_INSTANCES ? function() {
                var c2 = a2.apply(this, arguments) || this;
                c2[goog.UID_PROPERTY_] = c2[goog.UID_PROPERTY_];
                return c2;
              } : a2;
            };
            goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
            goog.defineClass.applyProperties_ = function(a2, b2) {
              for (var c2 in b2)
                Object.prototype.hasOwnProperty.call(b2, c2) && (a2[c2] = b2[c2]);
              for (var d2 = 0; d2 < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; d2++)
                c2 = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d2], Object.prototype.hasOwnProperty.call(b2, c2) && (a2[c2] = b2[c2]);
            };
            !COMPILED && goog.DEPENDENCIES_ENABLED && (goog.inHtmlDocument_ = function() {
              var a2 = goog.global.document;
              return null != a2 && "write" in a2;
            }, goog.isDocumentLoading_ = function() {
              var a2 = goog.global.document;
              return a2.attachEvent ? "complete" != a2.readyState : "loading" == a2.readyState;
            }, goog.findBasePath_ = function() {
              if (void 0 != goog.global.CLOSURE_BASE_PATH && "string" === typeof goog.global.CLOSURE_BASE_PATH)
                goog.basePath = goog.global.CLOSURE_BASE_PATH;
              else if (goog.inHtmlDocument_()) {
                var a2 = goog.global.document, b2 = a2.currentScript;
                a2 = b2 ? [b2] : a2.getElementsByTagName("SCRIPT");
                for (b2 = a2.length - 1; 0 <= b2; --b2) {
                  var c2 = a2[b2].src, d2 = c2.lastIndexOf("?");
                  d2 = -1 == d2 ? c2.length : d2;
                  if ("base.js" == c2.substr(d2 - 7, 7)) {
                    goog.basePath = c2.substr(0, d2 - 7);
                    break;
                  }
                }
              }
            }, goog.findBasePath_(), goog.Transpiler = function() {
              this.requiresTranspilation_ = null;
              this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE;
            }, goog.Transpiler.prototype.createRequiresTranspilation_ = function() {
              function a(g2, h) {
                e ? d[g2] = true : h() ? (c = g2, d[g2] = false) : e = d[g2] = true;
              }
              function b(g) {
                try {
                  return !!eval(g);
                } catch (h) {
                  return false;
                }
              }
              var c = "es3", d = { es3: false }, e = false, f = goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
              a("es5", function() {
                return b("[1,].length==1");
              });
              a("es6", function() {
                return f.match(/Edge\/(\d+)(\.\d)*/i) ? false : b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()');
              });
              a("es7", function() {
                return b("2 ** 2 == 4");
              });
              a("es8", function() {
                return b("async () => 1, true");
              });
              a("es9", function() {
                return b("({...rest} = {}), true");
              });
              a("es_next", function() {
                return false;
              });
              return { target: c, map: d };
            }, goog.Transpiler.prototype.needsTranspile = function(a2, b2) {
              if ("always" == goog.TRANSPILE)
                return true;
              if ("never" == goog.TRANSPILE)
                return false;
              if (!this.requiresTranspilation_) {
                var c2 = this.createRequiresTranspilation_();
                this.requiresTranspilation_ = c2.map;
                this.transpilationTarget_ = this.transpilationTarget_ || c2.target;
              }
              if (a2 in this.requiresTranspilation_)
                return this.requiresTranspilation_[a2] ? true : !goog.inHtmlDocument_() || "es6" != b2 || "noModule" in goog.global.document.createElement("script") ? false : true;
              throw Error("Unknown language mode: " + a2);
            }, goog.Transpiler.prototype.transpile = function(a2, b2) {
              return goog.transpile_(a2, b2, this.transpilationTarget_);
            }, goog.transpiler_ = new goog.Transpiler(), goog.protectScriptTag_ = function(a2) {
              return a2.replace(/<\/(SCRIPT)/ig, "\\x3c/$1");
            }, goog.DebugLoader_ = function() {
              this.dependencies_ = {};
              this.idToPath_ = {};
              this.written_ = {};
              this.loadingDeps_ = [];
              this.depsToLoad_ = [];
              this.paused_ = false;
              this.factory_ = new goog.DependencyFactory(goog.transpiler_);
              this.deferredCallbacks_ = {};
              this.deferredQueue_ = [];
            }, goog.DebugLoader_.prototype.bootstrap = function(a2, b2) {
              function c2() {
                d2 && (goog.global.setTimeout(d2, 0), d2 = null);
              }
              var d2 = b2;
              if (a2.length) {
                b2 = [];
                for (var e2 = 0; e2 < a2.length; e2++) {
                  var f2 = this.getPathFromDeps_(a2[e2]);
                  if (!f2)
                    throw Error("Unregonized namespace: " + a2[e2]);
                  b2.push(this.dependencies_[f2]);
                }
                f2 = goog.require;
                var g2 = 0;
                for (e2 = 0; e2 < a2.length; e2++)
                  f2(a2[e2]), b2[e2].onLoad(function() {
                    ++g2 == a2.length && c2();
                  });
              } else
                c2();
            }, goog.DebugLoader_.prototype.loadClosureDeps = function() {
              this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + "deps.js"), "deps.js", [], [], {}, false));
              this.loadDeps_();
            }, goog.DebugLoader_.prototype.requested = function(a2, b2) {
              (a2 = this.getPathFromDeps_(a2)) && (b2 || this.areDepsLoaded_(this.dependencies_[a2].requires)) && (b2 = this.deferredCallbacks_[a2]) && (delete this.deferredCallbacks_[a2], b2());
            }, goog.DebugLoader_.prototype.setDependencyFactory = function(a2) {
              this.factory_ = a2;
            }, goog.DebugLoader_.prototype.load_ = function(a2) {
              if (this.getPathFromDeps_(a2)) {
                var b2 = this, c2 = [], d2 = function(e2) {
                  var f2 = b2.getPathFromDeps_(e2);
                  if (!f2)
                    throw Error("Bad dependency path or symbol: " + e2);
                  if (!b2.written_[f2]) {
                    b2.written_[f2] = true;
                    e2 = b2.dependencies_[f2];
                    for (f2 = 0; f2 < e2.requires.length; f2++)
                      goog.isProvided_(e2.requires[f2]) || d2(e2.requires[f2]);
                    c2.push(e2);
                  }
                };
                d2(a2);
                a2 = !!this.depsToLoad_.length;
                this.depsToLoad_ = this.depsToLoad_.concat(c2);
                this.paused_ || a2 || this.loadDeps_();
              } else
                throw a2 = "goog.require could not find: " + a2, goog.logToConsole_(a2), Error(a2);
            }, goog.DebugLoader_.prototype.loadDeps_ = function() {
              for (var a2 = this, b2 = this.paused_; this.depsToLoad_.length && !b2; )
                (function() {
                  var c2 = false, d2 = a2.depsToLoad_.shift(), e2 = false;
                  a2.loading_(d2);
                  var f2 = { pause: function() {
                    if (c2)
                      throw Error("Cannot call pause after the call to load.");
                    b2 = true;
                  }, resume: function() {
                    c2 ? a2.resume_() : b2 = false;
                  }, loaded: function() {
                    if (e2)
                      throw Error("Double call to loaded.");
                    e2 = true;
                    a2.loaded_(d2);
                  }, pending: function() {
                    for (var g2 = [], h = 0; h < a2.loadingDeps_.length; h++)
                      g2.push(a2.loadingDeps_[h]);
                    return g2;
                  }, setModuleState: function(g2) {
                    goog.moduleLoaderState_ = { type: g2, moduleName: "", declareLegacyNamespace: false };
                  }, registerEs6ModuleExports: function(g2, h, k) {
                    k && (goog.loadedModules_[k] = { exports: h, type: goog.ModuleType.ES6, moduleId: k || "" });
                  }, registerGoogModuleExports: function(g2, h) {
                    goog.loadedModules_[g2] = { exports: h, type: goog.ModuleType.GOOG, moduleId: g2 };
                  }, clearModuleState: function() {
                    goog.moduleLoaderState_ = null;
                  }, defer: function(g2) {
                    if (c2)
                      throw Error("Cannot register with defer after the call to load.");
                    a2.defer_(
                      d2,
                      g2
                    );
                  }, areDepsLoaded: function() {
                    return a2.areDepsLoaded_(d2.requires);
                  } };
                  try {
                    d2.load(f2);
                  } finally {
                    c2 = true;
                  }
                })();
              b2 && this.pause_();
            }, goog.DebugLoader_.prototype.pause_ = function() {
              this.paused_ = true;
            }, goog.DebugLoader_.prototype.resume_ = function() {
              this.paused_ && (this.paused_ = false, this.loadDeps_());
            }, goog.DebugLoader_.prototype.loading_ = function(a2) {
              this.loadingDeps_.push(a2);
            }, goog.DebugLoader_.prototype.loaded_ = function(a2) {
              for (var b2 = 0; b2 < this.loadingDeps_.length; b2++)
                if (this.loadingDeps_[b2] == a2) {
                  this.loadingDeps_.splice(b2, 1);
                  break;
                }
              for (b2 = 0; b2 < this.deferredQueue_.length; b2++)
                if (this.deferredQueue_[b2] == a2.path) {
                  this.deferredQueue_.splice(b2, 1);
                  break;
                }
              if (this.loadingDeps_.length == this.deferredQueue_.length && !this.depsToLoad_.length)
                for (; this.deferredQueue_.length; )
                  this.requested(this.deferredQueue_.shift(), true);
              a2.loaded();
            }, goog.DebugLoader_.prototype.areDepsLoaded_ = function(a2) {
              for (var b2 = 0; b2 < a2.length; b2++) {
                var c2 = this.getPathFromDeps_(a2[b2]);
                if (!c2 || !(c2 in this.deferredCallbacks_ || goog.isProvided_(a2[b2])))
                  return false;
              }
              return true;
            }, goog.DebugLoader_.prototype.getPathFromDeps_ = function(a2) {
              return a2 in this.idToPath_ ? this.idToPath_[a2] : a2 in this.dependencies_ ? a2 : null;
            }, goog.DebugLoader_.prototype.defer_ = function(a2, b2) {
              this.deferredCallbacks_[a2.path] = b2;
              this.deferredQueue_.push(a2.path);
            }, goog.LoadController = function() {
            }, goog.LoadController.prototype.pause = function() {
            }, goog.LoadController.prototype.resume = function() {
            }, goog.LoadController.prototype.loaded = function() {
            }, goog.LoadController.prototype.pending = function() {
            }, goog.LoadController.prototype.registerEs6ModuleExports = function(a2, b2, c2) {
            }, goog.LoadController.prototype.setModuleState = function(a2) {
            }, goog.LoadController.prototype.clearModuleState = function() {
            }, goog.LoadController.prototype.defer = function(a2) {
            }, goog.LoadController.prototype.areDepsLoaded = function() {
            }, goog.Dependency = function(a2, b2, c2, d2, e2) {
              this.path = a2;
              this.relativePath = b2;
              this.provides = c2;
              this.requires = d2;
              this.loadFlags = e2;
              this.loaded_ = false;
              this.loadCallbacks_ = [];
            }, goog.Dependency.prototype.getPathName = function() {
              var a2 = this.path, b2 = a2.indexOf("://");
              0 <= b2 && (a2 = a2.substring(b2 + 3), b2 = a2.indexOf("/"), 0 <= b2 && (a2 = a2.substring(b2 + 1)));
              return a2;
            }, goog.Dependency.prototype.onLoad = function(a2) {
              this.loaded_ ? a2() : this.loadCallbacks_.push(a2);
            }, goog.Dependency.prototype.loaded = function() {
              this.loaded_ = true;
              var a2 = this.loadCallbacks_;
              this.loadCallbacks_ = [];
              for (var b2 = 0; b2 < a2.length; b2++)
                a2[b2]();
            }, goog.Dependency.defer_ = false, goog.Dependency.callbackMap_ = {}, goog.Dependency.registerCallback_ = function(a2) {
              var b2 = Math.random().toString(32);
              goog.Dependency.callbackMap_[b2] = a2;
              return b2;
            }, goog.Dependency.unregisterCallback_ = function(a2) {
              delete goog.Dependency.callbackMap_[a2];
            }, goog.Dependency.callback_ = function(a2, b2) {
              if (a2 in goog.Dependency.callbackMap_) {
                for (var c2 = goog.Dependency.callbackMap_[a2], d2 = [], e2 = 1; e2 < arguments.length; e2++)
                  d2.push(arguments[e2]);
                c2.apply(void 0, d2);
              } else
                throw Error("Callback key " + a2 + " does not exist (was base.js loaded more than once?).");
            }, goog.Dependency.prototype.load = function(a2) {
              if (goog.global.CLOSURE_IMPORT_SCRIPT)
                goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a2.loaded() : a2.pause();
              else if (goog.inHtmlDocument_()) {
                var b2 = goog.global.document;
                if ("complete" == b2.readyState && !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
                  if (/\bdeps.js$/.test(this.path)) {
                    a2.loaded();
                    return;
                  }
                  throw Error('Cannot write "' + this.path + '" after document load');
                }
                var c2 = goog.getScriptNonce();
                if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
                  var d2 = function(h) {
                    h.readyState && "complete" != h.readyState ? h.onload = d2 : (goog.Dependency.unregisterCallback_(e2), a2.loaded());
                  };
                  var e2 = goog.Dependency.registerCallback_(d2);
                  c2 = c2 ? ' nonce="' + c2 + '"' : "";
                  var f2 = '<script src="' + this.path + '"' + c2 + (goog.Dependency.defer_ ? " defer" : "") + ' id="script-' + e2 + '"><\/script>';
                  f2 += "<script" + c2 + ">";
                  f2 = goog.Dependency.defer_ ? f2 + ("document.getElementById('script-" + e2 + "').onload = function() {\n  goog.Dependency.callback_('" + e2 + "', this);\n};\n") : f2 + ("goog.Dependency.callback_('" + e2 + "', document.getElementById('script-" + e2 + "'));");
                  f2 += "<\/script>";
                  b2.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(f2) : f2);
                } else {
                  var g2 = b2.createElement("script");
                  g2.defer = goog.Dependency.defer_;
                  g2.async = false;
                  c2 && (g2.nonce = c2);
                  goog.DebugLoader_.IS_OLD_IE_ ? (a2.pause(), g2.onreadystatechange = function() {
                    if ("loaded" == g2.readyState || "complete" == g2.readyState)
                      a2.loaded(), a2.resume();
                  }) : g2.onload = function() {
                    g2.onload = null;
                    a2.loaded();
                  };
                  g2.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path;
                  b2.head.appendChild(g2);
                }
              } else
                goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), "deps.js" == this.relativePath ? (goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."), a2.loaded()) : a2.pause();
            }, goog.Es6ModuleDependency = function(a2, b2, c2, d2, e2) {
              goog.Dependency.call(this, a2, b2, c2, d2, e2);
            }, goog.inherits(goog.Es6ModuleDependency, goog.Dependency), goog.Es6ModuleDependency.prototype.load = function(a2) {
              function b2(l, p) {
                var m = "", n = goog.getScriptNonce();
                n && (m = ' nonce="' + n + '"');
                l = p ? '<script type="module" crossorigin' + m + ">" + p + "<\/script>" : '<script type="module" crossorigin src="' + l + '"' + m + "><\/script>";
                d2.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(l) : l);
              }
              function c2(l, p) {
                var m = d2.createElement("script");
                m.defer = true;
                m.async = false;
                m.type = "module";
                m.setAttribute("crossorigin", true);
                var n = goog.getScriptNonce();
                n && (m.nonce = n);
                p ? m.text = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(p) : p : m.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(l) : l;
                d2.head.appendChild(m);
              }
              if (goog.global.CLOSURE_IMPORT_SCRIPT)
                goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a2.loaded() : a2.pause();
              else if (goog.inHtmlDocument_()) {
                var d2 = goog.global.document, e2 = this;
                if (goog.isDocumentLoading_()) {
                  var f2 = b2;
                  goog.Dependency.defer_ = true;
                } else
                  f2 = c2;
                var g2 = goog.Dependency.registerCallback_(function() {
                  goog.Dependency.unregisterCallback_(g2);
                  a2.setModuleState(goog.ModuleType.ES6);
                });
                f2(void 0, 'goog.Dependency.callback_("' + g2 + '")');
                f2(this.path, void 0);
                var h = goog.Dependency.registerCallback_(function(l) {
                  goog.Dependency.unregisterCallback_(h);
                  a2.registerEs6ModuleExports(e2.path, l, goog.moduleLoaderState_.moduleName);
                });
                f2(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + h + '", m)');
                var k = goog.Dependency.registerCallback_(function() {
                  goog.Dependency.unregisterCallback_(k);
                  a2.clearModuleState();
                  a2.loaded();
                });
                f2(void 0, 'goog.Dependency.callback_("' + k + '")');
              } else
                goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), a2.pause();
            }, goog.TransformedDependency = function(a2, b2, c2, d2, e2) {
              goog.Dependency.call(this, a2, b2, c2, d2, e2);
              this.contents_ = null;
              this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"));
            }, goog.inherits(
              goog.TransformedDependency,
              goog.Dependency
            ), goog.TransformedDependency.prototype.load = function(a2) {
              function b2() {
                e2.contents_ = goog.loadFileSync_(e2.path);
                e2.contents_ && (e2.contents_ = e2.transform(e2.contents_), e2.contents_ && (e2.contents_ += "\n//# sourceURL=" + e2.path));
              }
              function c2() {
                e2.lazyFetch_ && b2();
                if (e2.contents_) {
                  f2 && a2.setModuleState(goog.ModuleType.ES6);
                  try {
                    var p = e2.contents_;
                    e2.contents_ = null;
                    goog.globalEval(p);
                    if (f2)
                      var m = goog.moduleLoaderState_.moduleName;
                  } finally {
                    f2 && a2.clearModuleState();
                  }
                  f2 && goog.global.$jscomp.require.ensure(
                    [e2.getPathName()],
                    function() {
                      a2.registerEs6ModuleExports(e2.path, goog.global.$jscomp.require(e2.getPathName()), m);
                    }
                  );
                  a2.loaded();
                }
              }
              function d2() {
                var p = goog.global.document, m = goog.Dependency.registerCallback_(function() {
                  goog.Dependency.unregisterCallback_(m);
                  c2();
                }), n = goog.getScriptNonce();
                n = "<script" + (n ? ' nonce="' + n + '"' : "") + ">" + goog.protectScriptTag_('goog.Dependency.callback_("' + m + '");') + "<\/script>";
                p.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(n) : n);
              }
              var e2 = this;
              if (goog.global.CLOSURE_IMPORT_SCRIPT)
                b2(), this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_) ? (this.contents_ = null, a2.loaded()) : a2.pause();
              else {
                var f2 = this.loadFlags.module == goog.ModuleType.ES6;
                this.lazyFetch_ || b2();
                var g2 = 1 < a2.pending().length, h = g2 && goog.DebugLoader_.IS_OLD_IE_;
                g2 = goog.Dependency.defer_ && (g2 || goog.isDocumentLoading_());
                if (h || g2)
                  a2.defer(function() {
                    c2();
                  });
                else {
                  var k = goog.global.document;
                  h = goog.inHtmlDocument_() && "ActiveXObject" in goog.global;
                  if (f2 && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !h) {
                    goog.Dependency.defer_ = true;
                    a2.pause();
                    var l = k.onreadystatechange;
                    k.onreadystatechange = function() {
                      "interactive" == k.readyState && (k.onreadystatechange = l, c2(), a2.resume());
                      "function" === typeof l && l.apply(void 0, arguments);
                    };
                  } else
                    !goog.DebugLoader_.IS_OLD_IE_ && goog.inHtmlDocument_() && goog.isDocumentLoading_() ? d2() : c2();
                }
              }
            }, goog.TransformedDependency.prototype.transform = function(a2) {
            }, goog.TranspiledDependency = function(a2, b2, c2, d2, e2, f2) {
              goog.TransformedDependency.call(this, a2, b2, c2, d2, e2);
              this.transpiler = f2;
            }, goog.inherits(
              goog.TranspiledDependency,
              goog.TransformedDependency
            ), goog.TranspiledDependency.prototype.transform = function(a2) {
              return this.transpiler.transpile(a2, this.getPathName());
            }, goog.PreTranspiledEs6ModuleDependency = function(a2, b2, c2, d2, e2) {
              goog.TransformedDependency.call(this, a2, b2, c2, d2, e2);
            }, goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency), goog.PreTranspiledEs6ModuleDependency.prototype.transform = function(a2) {
              return a2;
            }, goog.GoogModuleDependency = function(a2, b2, c2, d2, e2, f2, g2) {
              goog.TransformedDependency.call(
                this,
                a2,
                b2,
                c2,
                d2,
                e2
              );
              this.needsTranspile_ = f2;
              this.transpiler_ = g2;
            }, goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency), goog.GoogModuleDependency.prototype.transform = function(a2) {
              this.needsTranspile_ && (a2 = this.transpiler_.transpile(a2, this.getPathName()));
              return goog.LOAD_MODULE_USING_EVAL && void 0 !== goog.global.JSON ? "goog.loadModule(" + goog.global.JSON.stringify(a2 + "\n//# sourceURL=" + this.path + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + a2 + "\n;return exports});\n//# sourceURL=" + this.path + "\n";
            }, goog.DebugLoader_.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.DebugLoader_.prototype.addDependency = function(a2, b2, c2, d2) {
              b2 = b2 || [];
              a2 = a2.replace(/\\/g, "/");
              var e2 = goog.normalizePath_(goog.basePath + a2);
              d2 && "boolean" !== typeof d2 || (d2 = d2 ? { module: goog.ModuleType.GOOG } : {});
              c2 = this.factory_.createDependency(e2, a2, b2, c2, d2, goog.transpiler_.needsTranspile(d2.lang || "es3", d2.module));
              this.dependencies_[e2] = c2;
              for (c2 = 0; c2 < b2.length; c2++)
                this.idToPath_[b2[c2]] = e2;
              this.idToPath_[a2] = e2;
            }, goog.DependencyFactory = function(a2) {
              this.transpiler = a2;
            }, goog.DependencyFactory.prototype.createDependency = function(a2, b2, c2, d2, e2, f2) {
              return e2.module == goog.ModuleType.GOOG ? new goog.GoogModuleDependency(a2, b2, c2, d2, e2, f2, this.transpiler) : f2 ? new goog.TranspiledDependency(a2, b2, c2, d2, e2, this.transpiler) : e2.module == goog.ModuleType.ES6 ? "never" == goog.TRANSPILE && goog.ASSUME_ES_MODULES_TRANSPILED ? new goog.PreTranspiledEs6ModuleDependency(a2, b2, c2, d2, e2) : new goog.Es6ModuleDependency(a2, b2, c2, d2, e2) : new goog.Dependency(a2, b2, c2, d2, e2);
            }, goog.debugLoader_ = new goog.DebugLoader_(), goog.loadClosureDeps = function() {
              goog.debugLoader_.loadClosureDeps();
            }, goog.setDependencyFactory = function(a2) {
              goog.debugLoader_.setDependencyFactory(a2);
            }, goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base") : null, goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(), goog.bootstrap = function(a2, b2) {
              goog.debugLoader_.bootstrap(a2, b2);
            });
            goog.TRUSTED_TYPES_POLICY_NAME = "goog";
            goog.identity_ = function(a2) {
              return a2;
            };
            goog.createTrustedTypesPolicy = function(a2) {
              var b2 = null, c2 = goog.global.trustedTypes;
              if (!c2 || !c2.createPolicy)
                return b2;
              try {
                b2 = c2.createPolicy(a2, { createHTML: goog.identity_, createScript: goog.identity_, createScriptURL: goog.identity_ });
              } catch (d2) {
                goog.logToConsole_(d2.message);
              }
              return b2;
            };
            goog.debug = {};
            function module$contents$goog$debug$Error_DebugError(a2) {
              if (Error.captureStackTrace)
                Error.captureStackTrace(this, module$contents$goog$debug$Error_DebugError);
              else {
                var b2 = Error().stack;
                b2 && (this.stack = b2);
              }
              a2 && (this.message = String(a2));
              this.reportErrorToServer = true;
            }
            goog.inherits(module$contents$goog$debug$Error_DebugError, Error);
            module$contents$goog$debug$Error_DebugError.prototype.name = "CustomError";
            goog.debug.Error = module$contents$goog$debug$Error_DebugError;
            goog.dom = {};
            goog.dom.NodeType = { ELEMENT: 1, ATTRIBUTE: 2, TEXT: 3, CDATA_SECTION: 4, ENTITY_REFERENCE: 5, ENTITY: 6, PROCESSING_INSTRUCTION: 7, COMMENT: 8, DOCUMENT: 9, DOCUMENT_TYPE: 10, DOCUMENT_FRAGMENT: 11, NOTATION: 12 };
            goog.asserts = {};
            goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
            goog.asserts.AssertionError = function(a2, b2) {
              module$contents$goog$debug$Error_DebugError.call(this, goog.asserts.subs_(a2, b2));
              this.messagePattern = a2;
            };
            goog.inherits(goog.asserts.AssertionError, module$contents$goog$debug$Error_DebugError);
            goog.asserts.AssertionError.prototype.name = "AssertionError";
            goog.asserts.DEFAULT_ERROR_HANDLER = function(a2) {
              throw a2;
            };
            goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
            goog.asserts.subs_ = function(a2, b2) {
              a2 = a2.split("%s");
              for (var c2 = "", d2 = a2.length - 1, e2 = 0; e2 < d2; e2++)
                c2 += a2[e2] + (e2 < b2.length ? b2[e2] : "%s");
              return c2 + a2[d2];
            };
            goog.asserts.doAssertFailure_ = function(a2, b2, c2, d2) {
              var e2 = "Assertion failed";
              if (c2) {
                e2 += ": " + c2;
                var f2 = d2;
              } else
                a2 && (e2 += ": " + a2, f2 = b2);
              a2 = new goog.asserts.AssertionError("" + e2, f2 || []);
              goog.asserts.errorHandler_(a2);
            };
            goog.asserts.setErrorHandler = function(a2) {
              goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = a2);
            };
            goog.asserts.assert = function(a2, b2, c2) {
              goog.asserts.ENABLE_ASSERTS && !a2 && goog.asserts.doAssertFailure_("", null, b2, Array.prototype.slice.call(arguments, 2));
              return a2;
            };
            goog.asserts.assertExists = function(a2, b2, c2) {
              goog.asserts.ENABLE_ASSERTS && null == a2 && goog.asserts.doAssertFailure_("Expected to exist: %s.", [a2], b2, Array.prototype.slice.call(arguments, 2));
              return a2;
            };
            goog.asserts.fail = function(a2, b2) {
              goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (a2 ? ": " + a2 : ""), Array.prototype.slice.call(arguments, 1)));
            };
            goog.asserts.assertNumber = function(a2, b2, c2) {
              goog.asserts.ENABLE_ASSERTS && "number" !== typeof a2 && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
              return a2;
            };
            goog.asserts.assertString = function(a2, b2, c2) {
              goog.asserts.ENABLE_ASSERTS && "string" !== typeof a2 && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
              return a2;
            };
            goog.asserts.assertFunction = function(a2, b2, c2) {
              goog.asserts.ENABLE_ASSERTS && "function" !== typeof a2 && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
              return a2;
            };
            goog.asserts.assertObject = function(a2, b2, c2) {
              goog.asserts.ENABLE_ASSERTS && !goog.isObject(a2) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
              return a2;
            };
            goog.asserts.assertArray = function(a2, b2, c2) {
              goog.asserts.ENABLE_ASSERTS && !Array.isArray(a2) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
              return a2;
            };
            goog.asserts.assertBoolean = function(a2, b2, c2) {
              goog.asserts.ENABLE_ASSERTS && "boolean" !== typeof a2 && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
              return a2;
            };
            goog.asserts.assertElement = function(a2, b2, c2) {
              !goog.asserts.ENABLE_ASSERTS || goog.isObject(a2) && a2.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(a2), a2], b2, Array.prototype.slice.call(arguments, 2));
              return a2;
            };
            goog.asserts.assertInstanceof = function(a2, b2, c2, d2) {
              !goog.asserts.ENABLE_ASSERTS || a2 instanceof b2 || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(b2), goog.asserts.getType_(a2)], c2, Array.prototype.slice.call(arguments, 3));
              return a2;
            };
            goog.asserts.assertFinite = function(a2, b2, c2) {
              !goog.asserts.ENABLE_ASSERTS || "number" == typeof a2 && isFinite(a2) || goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.", [a2], b2, Array.prototype.slice.call(arguments, 2));
              return a2;
            };
            goog.asserts.assertObjectPrototypeIsIntact = function() {
              for (var a2 in Object.prototype)
                goog.asserts.fail(a2 + " should not be enumerable in Object.prototype.");
            };
            goog.asserts.getType_ = function(a2) {
              return a2 instanceof Function ? a2.displayName || a2.name || "unknown type name" : a2 instanceof Object ? a2.constructor.displayName || a2.constructor.name || Object.prototype.toString.call(a2) : null === a2 ? "null" : typeof a2;
            };
            goog.array = {};
            goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE;
            var module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR;
            goog.array.ASSUME_NATIVE_FUNCTIONS = module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS;
            function module$contents$goog$array_peek(a2) {
              return a2[a2.length - 1];
            }
            goog.array.peek = module$contents$goog$array_peek;
            goog.array.last = module$contents$goog$array_peek;
            var module$contents$goog$array_indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function(a2, b2, c2) {
              goog.asserts.assert(null != a2.length);
              return Array.prototype.indexOf.call(a2, b2, c2);
            } : function(a2, b2, c2) {
              c2 = null == c2 ? 0 : 0 > c2 ? Math.max(0, a2.length + c2) : c2;
              if ("string" === typeof a2)
                return "string" !== typeof b2 || 1 != b2.length ? -1 : a2.indexOf(b2, c2);
              for (; c2 < a2.length; c2++)
                if (c2 in a2 && a2[c2] === b2)
                  return c2;
              return -1;
            };
            goog.array.indexOf = module$contents$goog$array_indexOf;
            var module$contents$goog$array_lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function(a2, b2, c2) {
              goog.asserts.assert(null != a2.length);
              return Array.prototype.lastIndexOf.call(a2, b2, null == c2 ? a2.length - 1 : c2);
            } : function(a2, b2, c2) {
              c2 = null == c2 ? a2.length - 1 : c2;
              0 > c2 && (c2 = Math.max(0, a2.length + c2));
              if ("string" === typeof a2)
                return "string" !== typeof b2 || 1 != b2.length ? -1 : a2.lastIndexOf(b2, c2);
              for (; 0 <= c2; c2--)
                if (c2 in a2 && a2[c2] === b2)
                  return c2;
              return -1;
            };
            goog.array.lastIndexOf = module$contents$goog$array_lastIndexOf;
            var module$contents$goog$array_forEach = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function(a2, b2, c2) {
              goog.asserts.assert(null != a2.length);
              Array.prototype.forEach.call(a2, b2, c2);
            } : function(a2, b2, c2) {
              for (var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
                f2 in e2 && b2.call(c2, e2[f2], f2, a2);
            };
            goog.array.forEach = module$contents$goog$array_forEach;
            function module$contents$goog$array_forEachRight(a2, b2, c2) {
              var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2;
              for (--d2; 0 <= d2; --d2)
                d2 in e2 && b2.call(c2, e2[d2], d2, a2);
            }
            goog.array.forEachRight = module$contents$goog$array_forEachRight;
            var module$contents$goog$array_filter = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function(a2, b2, c2) {
              goog.asserts.assert(null != a2.length);
              return Array.prototype.filter.call(a2, b2, c2);
            } : function(a2, b2, c2) {
              for (var d2 = a2.length, e2 = [], f2 = 0, g2 = "string" === typeof a2 ? a2.split("") : a2, h = 0; h < d2; h++)
                if (h in g2) {
                  var k = g2[h];
                  b2.call(c2, k, h, a2) && (e2[f2++] = k);
                }
              return e2;
            };
            goog.array.filter = module$contents$goog$array_filter;
            var module$contents$goog$array_map = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function(a2, b2, c2) {
              goog.asserts.assert(null != a2.length);
              return Array.prototype.map.call(a2, b2, c2);
            } : function(a2, b2, c2) {
              for (var d2 = a2.length, e2 = Array(d2), f2 = "string" === typeof a2 ? a2.split("") : a2, g2 = 0; g2 < d2; g2++)
                g2 in f2 && (e2[g2] = b2.call(c2, f2[g2], g2, a2));
              return e2;
            };
            goog.array.map = module$contents$goog$array_map;
            var module$contents$goog$array_reduce = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function(a2, b2, c2, d2) {
              goog.asserts.assert(null != a2.length);
              d2 && (b2 = goog.bind(b2, d2));
              return Array.prototype.reduce.call(a2, b2, c2);
            } : function(a2, b2, c2, d2) {
              var e2 = c2;
              module$contents$goog$array_forEach(a2, function(f2, g2) {
                e2 = b2.call(d2, e2, f2, g2, a2);
              });
              return e2;
            };
            goog.array.reduce = module$contents$goog$array_reduce;
            var module$contents$goog$array_reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function(a2, b2, c2, d2) {
              goog.asserts.assert(null != a2.length);
              goog.asserts.assert(null != b2);
              d2 && (b2 = goog.bind(b2, d2));
              return Array.prototype.reduceRight.call(a2, b2, c2);
            } : function(a2, b2, c2, d2) {
              var e2 = c2;
              module$contents$goog$array_forEachRight(a2, function(f2, g2) {
                e2 = b2.call(d2, e2, f2, g2, a2);
              });
              return e2;
            };
            goog.array.reduceRight = module$contents$goog$array_reduceRight;
            var module$contents$goog$array_some = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function(a2, b2, c2) {
              goog.asserts.assert(null != a2.length);
              return Array.prototype.some.call(a2, b2, c2);
            } : function(a2, b2, c2) {
              for (var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
                if (f2 in e2 && b2.call(c2, e2[f2], f2, a2))
                  return true;
              return false;
            };
            goog.array.some = module$contents$goog$array_some;
            var module$contents$goog$array_every = goog.NATIVE_ARRAY_PROTOTYPES && (module$contents$goog$array_ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function(a2, b2, c2) {
              goog.asserts.assert(null != a2.length);
              return Array.prototype.every.call(a2, b2, c2);
            } : function(a2, b2, c2) {
              for (var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
                if (f2 in e2 && !b2.call(c2, e2[f2], f2, a2))
                  return false;
              return true;
            };
            goog.array.every = module$contents$goog$array_every;
            function module$contents$goog$array_count(a2, b2, c2) {
              var d2 = 0;
              module$contents$goog$array_forEach(a2, function(e2, f2, g2) {
                b2.call(c2, e2, f2, g2) && ++d2;
              }, c2);
              return d2;
            }
            goog.array.count = module$contents$goog$array_count;
            function module$contents$goog$array_find(a2, b2, c2) {
              b2 = module$contents$goog$array_findIndex(a2, b2, c2);
              return 0 > b2 ? null : "string" === typeof a2 ? a2.charAt(b2) : a2[b2];
            }
            goog.array.find = module$contents$goog$array_find;
            function module$contents$goog$array_findIndex(a2, b2, c2) {
              for (var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2, f2 = 0; f2 < d2; f2++)
                if (f2 in e2 && b2.call(c2, e2[f2], f2, a2))
                  return f2;
              return -1;
            }
            goog.array.findIndex = module$contents$goog$array_findIndex;
            function module$contents$goog$array_findRight(a2, b2, c2) {
              b2 = module$contents$goog$array_findIndexRight(a2, b2, c2);
              return 0 > b2 ? null : "string" === typeof a2 ? a2.charAt(b2) : a2[b2];
            }
            goog.array.findRight = module$contents$goog$array_findRight;
            function module$contents$goog$array_findIndexRight(a2, b2, c2) {
              var d2 = a2.length, e2 = "string" === typeof a2 ? a2.split("") : a2;
              for (--d2; 0 <= d2; d2--)
                if (d2 in e2 && b2.call(c2, e2[d2], d2, a2))
                  return d2;
              return -1;
            }
            goog.array.findIndexRight = module$contents$goog$array_findIndexRight;
            function module$contents$goog$array_contains(a2, b2) {
              return 0 <= module$contents$goog$array_indexOf(a2, b2);
            }
            goog.array.contains = module$contents$goog$array_contains;
            function module$contents$goog$array_isEmpty(a2) {
              return 0 == a2.length;
            }
            goog.array.isEmpty = module$contents$goog$array_isEmpty;
            function module$contents$goog$array_clear(a2) {
              if (!Array.isArray(a2))
                for (var b2 = a2.length - 1; 0 <= b2; b2--)
                  delete a2[b2];
              a2.length = 0;
            }
            goog.array.clear = module$contents$goog$array_clear;
            function module$contents$goog$array_insert(a2, b2) {
              module$contents$goog$array_contains(a2, b2) || a2.push(b2);
            }
            goog.array.insert = module$contents$goog$array_insert;
            function module$contents$goog$array_insertAt(a2, b2, c2) {
              module$contents$goog$array_splice(a2, c2, 0, b2);
            }
            goog.array.insertAt = module$contents$goog$array_insertAt;
            function module$contents$goog$array_insertArrayAt(a2, b2, c2) {
              goog.partial(module$contents$goog$array_splice, a2, c2, 0).apply(null, b2);
            }
            goog.array.insertArrayAt = module$contents$goog$array_insertArrayAt;
            function module$contents$goog$array_insertBefore(a2, b2, c2) {
              var d2;
              2 == arguments.length || 0 > (d2 = module$contents$goog$array_indexOf(a2, c2)) ? a2.push(b2) : module$contents$goog$array_insertAt(a2, b2, d2);
            }
            goog.array.insertBefore = module$contents$goog$array_insertBefore;
            function module$contents$goog$array_remove(a2, b2) {
              b2 = module$contents$goog$array_indexOf(a2, b2);
              var c2;
              (c2 = 0 <= b2) && module$contents$goog$array_removeAt(a2, b2);
              return c2;
            }
            goog.array.remove = module$contents$goog$array_remove;
            function module$contents$goog$array_removeLast(a2, b2) {
              b2 = module$contents$goog$array_lastIndexOf(a2, b2);
              return 0 <= b2 ? (module$contents$goog$array_removeAt(a2, b2), true) : false;
            }
            goog.array.removeLast = module$contents$goog$array_removeLast;
            function module$contents$goog$array_removeAt(a2, b2) {
              goog.asserts.assert(null != a2.length);
              return 1 == Array.prototype.splice.call(a2, b2, 1).length;
            }
            goog.array.removeAt = module$contents$goog$array_removeAt;
            function module$contents$goog$array_removeIf(a2, b2, c2) {
              b2 = module$contents$goog$array_findIndex(a2, b2, c2);
              return 0 <= b2 ? (module$contents$goog$array_removeAt(a2, b2), true) : false;
            }
            goog.array.removeIf = module$contents$goog$array_removeIf;
            function module$contents$goog$array_removeAllIf(a2, b2, c2) {
              var d2 = 0;
              module$contents$goog$array_forEachRight(a2, function(e2, f2) {
                b2.call(c2, e2, f2, a2) && module$contents$goog$array_removeAt(a2, f2) && d2++;
              });
              return d2;
            }
            goog.array.removeAllIf = module$contents$goog$array_removeAllIf;
            function module$contents$goog$array_concat(a2) {
              return Array.prototype.concat.apply([], arguments);
            }
            goog.array.concat = module$contents$goog$array_concat;
            function module$contents$goog$array_join(a2) {
              return Array.prototype.concat.apply([], arguments);
            }
            goog.array.join = module$contents$goog$array_join;
            function module$contents$goog$array_toArray(a2) {
              var b2 = a2.length;
              if (0 < b2) {
                for (var c2 = Array(b2), d2 = 0; d2 < b2; d2++)
                  c2[d2] = a2[d2];
                return c2;
              }
              return [];
            }
            var module$contents$goog$array_clone = goog.array.toArray = module$contents$goog$array_toArray;
            goog.array.clone = module$contents$goog$array_clone;
            function module$contents$goog$array_extend(a2, b2) {
              for (var c2 = 1; c2 < arguments.length; c2++) {
                var d2 = arguments[c2];
                if (goog.isArrayLike(d2)) {
                  var e2 = a2.length || 0, f2 = d2.length || 0;
                  a2.length = e2 + f2;
                  for (var g2 = 0; g2 < f2; g2++)
                    a2[e2 + g2] = d2[g2];
                } else
                  a2.push(d2);
              }
            }
            goog.array.extend = module$contents$goog$array_extend;
            function module$contents$goog$array_splice(a2, b2, c2, d2) {
              goog.asserts.assert(null != a2.length);
              return Array.prototype.splice.apply(a2, module$contents$goog$array_slice(arguments, 1));
            }
            goog.array.splice = module$contents$goog$array_splice;
            function module$contents$goog$array_slice(a2, b2, c2) {
              goog.asserts.assert(null != a2.length);
              return 2 >= arguments.length ? Array.prototype.slice.call(a2, b2) : Array.prototype.slice.call(a2, b2, c2);
            }
            goog.array.slice = module$contents$goog$array_slice;
            function module$contents$goog$array_removeDuplicates(a2, b2, c2) {
              b2 = b2 || a2;
              var d2 = function(k) {
                return goog.isObject(k) ? "o" + goog.getUid(k) : (typeof k).charAt(0) + k;
              };
              c2 = c2 || d2;
              d2 = {};
              for (var e2 = 0, f2 = 0; f2 < a2.length; ) {
                var g2 = a2[f2++], h = c2(g2);
                Object.prototype.hasOwnProperty.call(d2, h) || (d2[h] = true, b2[e2++] = g2);
              }
              b2.length = e2;
            }
            goog.array.removeDuplicates = module$contents$goog$array_removeDuplicates;
            function module$contents$goog$array_binarySearch(a2, b2, c2) {
              return module$contents$goog$array_binarySearch_(a2, c2 || module$contents$goog$array_defaultCompare, false, b2);
            }
            goog.array.binarySearch = module$contents$goog$array_binarySearch;
            function module$contents$goog$array_binarySelect(a2, b2, c2) {
              return module$contents$goog$array_binarySearch_(a2, b2, true, void 0, c2);
            }
            goog.array.binarySelect = module$contents$goog$array_binarySelect;
            function module$contents$goog$array_binarySearch_(a2, b2, c2, d2, e2) {
              for (var f2 = 0, g2 = a2.length, h; f2 < g2; ) {
                var k = f2 + (g2 - f2 >>> 1);
                var l = c2 ? b2.call(e2, a2[k], k, a2) : b2(d2, a2[k]);
                0 < l ? f2 = k + 1 : (g2 = k, h = !l);
              }
              return h ? f2 : -f2 - 1;
            }
            function module$contents$goog$array_sort(a2, b2) {
              a2.sort(b2 || module$contents$goog$array_defaultCompare);
            }
            goog.array.sort = module$contents$goog$array_sort;
            function module$contents$goog$array_stableSort(a2, b2) {
              for (var c2 = Array(a2.length), d2 = 0; d2 < a2.length; d2++)
                c2[d2] = { index: d2, value: a2[d2] };
              var e2 = b2 || module$contents$goog$array_defaultCompare;
              module$contents$goog$array_sort(c2, function(f2, g2) {
                return e2(f2.value, g2.value) || f2.index - g2.index;
              });
              for (d2 = 0; d2 < a2.length; d2++)
                a2[d2] = c2[d2].value;
            }
            goog.array.stableSort = module$contents$goog$array_stableSort;
            function module$contents$goog$array_sortByKey(a2, b2, c2) {
              var d2 = c2 || module$contents$goog$array_defaultCompare;
              module$contents$goog$array_sort(a2, function(e2, f2) {
                return d2(b2(e2), b2(f2));
              });
            }
            goog.array.sortByKey = module$contents$goog$array_sortByKey;
            function module$contents$goog$array_sortObjectsByKey(a2, b2, c2) {
              module$contents$goog$array_sortByKey(a2, function(d2) {
                return d2[b2];
              }, c2);
            }
            goog.array.sortObjectsByKey = module$contents$goog$array_sortObjectsByKey;
            function module$contents$goog$array_isSorted(a2, b2, c2) {
              b2 = b2 || module$contents$goog$array_defaultCompare;
              for (var d2 = 1; d2 < a2.length; d2++) {
                var e2 = b2(a2[d2 - 1], a2[d2]);
                if (0 < e2 || 0 == e2 && c2)
                  return false;
              }
              return true;
            }
            goog.array.isSorted = module$contents$goog$array_isSorted;
            function module$contents$goog$array_equals(a2, b2, c2) {
              if (!goog.isArrayLike(a2) || !goog.isArrayLike(b2) || a2.length != b2.length)
                return false;
              var d2 = a2.length;
              c2 = c2 || module$contents$goog$array_defaultCompareEquality;
              for (var e2 = 0; e2 < d2; e2++)
                if (!c2(a2[e2], b2[e2]))
                  return false;
              return true;
            }
            goog.array.equals = module$contents$goog$array_equals;
            function module$contents$goog$array_compare3(a2, b2, c2) {
              c2 = c2 || module$contents$goog$array_defaultCompare;
              for (var d2 = Math.min(a2.length, b2.length), e2 = 0; e2 < d2; e2++) {
                var f2 = c2(a2[e2], b2[e2]);
                if (0 != f2)
                  return f2;
              }
              return module$contents$goog$array_defaultCompare(a2.length, b2.length);
            }
            goog.array.compare3 = module$contents$goog$array_compare3;
            function module$contents$goog$array_defaultCompare(a2, b2) {
              return a2 > b2 ? 1 : a2 < b2 ? -1 : 0;
            }
            goog.array.defaultCompare = module$contents$goog$array_defaultCompare;
            function module$contents$goog$array_inverseDefaultCompare(a2, b2) {
              return -module$contents$goog$array_defaultCompare(a2, b2);
            }
            goog.array.inverseDefaultCompare = module$contents$goog$array_inverseDefaultCompare;
            function module$contents$goog$array_defaultCompareEquality(a2, b2) {
              return a2 === b2;
            }
            goog.array.defaultCompareEquality = module$contents$goog$array_defaultCompareEquality;
            function module$contents$goog$array_binaryInsert(a2, b2, c2) {
              c2 = module$contents$goog$array_binarySearch(a2, b2, c2);
              return 0 > c2 ? (module$contents$goog$array_insertAt(a2, b2, -(c2 + 1)), true) : false;
            }
            goog.array.binaryInsert = module$contents$goog$array_binaryInsert;
            function module$contents$goog$array_binaryRemove(a2, b2, c2) {
              b2 = module$contents$goog$array_binarySearch(a2, b2, c2);
              return 0 <= b2 ? module$contents$goog$array_removeAt(a2, b2) : false;
            }
            goog.array.binaryRemove = module$contents$goog$array_binaryRemove;
            function module$contents$goog$array_bucket(a2, b2, c2) {
              for (var d2 = {}, e2 = 0; e2 < a2.length; e2++) {
                var f2 = a2[e2], g2 = b2.call(c2, f2, e2, a2);
                void 0 !== g2 && (d2[g2] || (d2[g2] = [])).push(f2);
              }
              return d2;
            }
            goog.array.bucket = module$contents$goog$array_bucket;
            function module$contents$goog$array_toObject(a2, b2, c2) {
              var d2 = {};
              module$contents$goog$array_forEach(a2, function(e2, f2) {
                d2[b2.call(c2, e2, f2, a2)] = e2;
              });
              return d2;
            }
            goog.array.toObject = module$contents$goog$array_toObject;
            function module$contents$goog$array_range(a2, b2, c2) {
              var d2 = [], e2 = 0, f2 = a2;
              c2 = c2 || 1;
              void 0 !== b2 && (e2 = a2, f2 = b2);
              if (0 > c2 * (f2 - e2))
                return [];
              if (0 < c2)
                for (a2 = e2; a2 < f2; a2 += c2)
                  d2.push(a2);
              else
                for (a2 = e2; a2 > f2; a2 += c2)
                  d2.push(a2);
              return d2;
            }
            goog.array.range = module$contents$goog$array_range;
            function module$contents$goog$array_repeat(a2, b2) {
              for (var c2 = [], d2 = 0; d2 < b2; d2++)
                c2[d2] = a2;
              return c2;
            }
            goog.array.repeat = module$contents$goog$array_repeat;
            function module$contents$goog$array_flatten(a2) {
              for (var b2 = [], c2 = 0; c2 < arguments.length; c2++) {
                var d2 = arguments[c2];
                if (Array.isArray(d2))
                  for (var e2 = 0; e2 < d2.length; e2 += 8192) {
                    var f2 = module$contents$goog$array_slice(d2, e2, e2 + 8192);
                    f2 = module$contents$goog$array_flatten.apply(null, f2);
                    for (var g2 = 0; g2 < f2.length; g2++)
                      b2.push(f2[g2]);
                  }
                else
                  b2.push(d2);
              }
              return b2;
            }
            goog.array.flatten = module$contents$goog$array_flatten;
            function module$contents$goog$array_rotate(a2, b2) {
              goog.asserts.assert(null != a2.length);
              a2.length && (b2 %= a2.length, 0 < b2 ? Array.prototype.unshift.apply(a2, a2.splice(-b2, b2)) : 0 > b2 && Array.prototype.push.apply(a2, a2.splice(0, -b2)));
              return a2;
            }
            goog.array.rotate = module$contents$goog$array_rotate;
            function module$contents$goog$array_moveItem(a2, b2, c2) {
              goog.asserts.assert(0 <= b2 && b2 < a2.length);
              goog.asserts.assert(0 <= c2 && c2 < a2.length);
              b2 = Array.prototype.splice.call(a2, b2, 1);
              Array.prototype.splice.call(a2, c2, 0, b2[0]);
            }
            goog.array.moveItem = module$contents$goog$array_moveItem;
            function module$contents$goog$array_zip(a2) {
              if (!arguments.length)
                return [];
              for (var b2 = [], c2 = arguments[0].length, d2 = 1; d2 < arguments.length; d2++)
                arguments[d2].length < c2 && (c2 = arguments[d2].length);
              for (d2 = 0; d2 < c2; d2++) {
                for (var e2 = [], f2 = 0; f2 < arguments.length; f2++)
                  e2.push(arguments[f2][d2]);
                b2.push(e2);
              }
              return b2;
            }
            goog.array.zip = module$contents$goog$array_zip;
            function module$contents$goog$array_shuffle(a2, b2) {
              b2 = b2 || Math.random;
              for (var c2 = a2.length - 1; 0 < c2; c2--) {
                var d2 = Math.floor(b2() * (c2 + 1)), e2 = a2[c2];
                a2[c2] = a2[d2];
                a2[d2] = e2;
              }
            }
            goog.array.shuffle = module$contents$goog$array_shuffle;
            function module$contents$goog$array_copyByIndex(a2, b2) {
              var c2 = [];
              module$contents$goog$array_forEach(b2, function(d2) {
                c2.push(a2[d2]);
              });
              return c2;
            }
            goog.array.copyByIndex = module$contents$goog$array_copyByIndex;
            function module$contents$goog$array_concatMap(a2, b2, c2) {
              return module$contents$goog$array_concat.apply([], module$contents$goog$array_map(a2, b2, c2));
            }
            goog.array.concatMap = module$contents$goog$array_concatMap;
            goog.dom.asserts = {};
            goog.dom.asserts.assertIsLocation = function(a2) {
              if (goog.asserts.ENABLE_ASSERTS) {
                var b2 = goog.dom.asserts.getWindow_(a2);
                b2 && (!a2 || !(a2 instanceof b2.Location) && a2 instanceof b2.Element) && goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_(a2));
              }
              return a2;
            };
            goog.dom.asserts.assertIsElementType_ = function(a2, b2) {
              if (goog.asserts.ENABLE_ASSERTS) {
                var c2 = goog.dom.asserts.getWindow_(a2);
                c2 && "undefined" != typeof c2[b2] && (a2 && (a2 instanceof c2[b2] || !(a2 instanceof c2.Location || a2 instanceof c2.Element)) || goog.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b2, goog.dom.asserts.debugStringForType_(a2)));
              }
              return a2;
            };
            goog.dom.asserts.assertIsHTMLAnchorElement = function(a2) {
              return goog.dom.asserts.assertIsElementType_(a2, "HTMLAnchorElement");
            };
            goog.dom.asserts.assertIsHTMLButtonElement = function(a2) {
              return goog.dom.asserts.assertIsElementType_(a2, "HTMLButtonElement");
            };
            goog.dom.asserts.assertIsHTMLLinkElement = function(a2) {
              return goog.dom.asserts.assertIsElementType_(a2, "HTMLLinkElement");
            };
            goog.dom.asserts.assertIsHTMLImageElement = function(a2) {
              return goog.dom.asserts.assertIsElementType_(a2, "HTMLImageElement");
            };
            goog.dom.asserts.assertIsHTMLAudioElement = function(a2) {
              return goog.dom.asserts.assertIsElementType_(a2, "HTMLAudioElement");
            };
            goog.dom.asserts.assertIsHTMLVideoElement = function(a2) {
              return goog.dom.asserts.assertIsElementType_(a2, "HTMLVideoElement");
            };
            goog.dom.asserts.assertIsHTMLInputElement = function(a2) {
              return goog.dom.asserts.assertIsElementType_(a2, "HTMLInputElement");
            };
            goog.dom.asserts.assertIsHTMLTextAreaElement = function(a2) {
              return goog.dom.asserts.assertIsElementType_(a2, "HTMLTextAreaElement");
            };
            goog.dom.asserts.assertIsHTMLCanvasElement = function(a2) {
              return goog.dom.asserts.assertIsElementType_(a2, "HTMLCanvasElement");
            };
            goog.dom.asserts.assertIsHTMLEmbedElement = function(a2) {
              return goog.dom.asserts.assertIsElementType_(a2, "HTMLEmbedElement");
            };
            goog.dom.asserts.assertIsHTMLFormElement = function(a2) {
              return goog.dom.asserts.assertIsElementType_(a2, "HTMLFormElement");
            };
            goog.dom.asserts.assertIsHTMLFrameElement = function(a2) {
              return goog.dom.asserts.assertIsElementType_(a2, "HTMLFrameElement");
            };
            goog.dom.asserts.assertIsHTMLIFrameElement = function(a2) {
              return goog.dom.asserts.assertIsElementType_(a2, "HTMLIFrameElement");
            };
            goog.dom.asserts.assertIsHTMLObjectElement = function(a2) {
              return goog.dom.asserts.assertIsElementType_(a2, "HTMLObjectElement");
            };
            goog.dom.asserts.assertIsHTMLScriptElement = function(a2) {
              return goog.dom.asserts.assertIsElementType_(a2, "HTMLScriptElement");
            };
            goog.dom.asserts.debugStringForType_ = function(a2) {
              if (goog.isObject(a2))
                try {
                  return a2.constructor.displayName || a2.constructor.name || Object.prototype.toString.call(a2);
                } catch (b2) {
                  return "<object could not be stringified>";
                }
              else
                return void 0 === a2 ? "undefined" : null === a2 ? "null" : typeof a2;
            };
            goog.dom.asserts.getWindow_ = function(a2) {
              try {
                var b2 = a2 && a2.ownerDocument, c2 = b2 && (b2.defaultView || b2.parentWindow);
                c2 = c2 || goog.global;
                if (c2.Element && c2.Location)
                  return c2;
              } catch (d2) {
              }
              return null;
            };
            goog.dom.HtmlElement = function() {
            };
            goog.functions = {};
            goog.functions.constant = function(a2) {
              return function() {
                return a2;
              };
            };
            goog.functions.FALSE = function() {
              return false;
            };
            goog.functions.TRUE = function() {
              return true;
            };
            goog.functions.NULL = function() {
              return null;
            };
            goog.functions.identity = function(a2, b2) {
              return a2;
            };
            goog.functions.error = function(a2) {
              return function() {
                throw Error(a2);
              };
            };
            goog.functions.fail = function(a2) {
              return function() {
                throw a2;
              };
            };
            goog.functions.lock = function(a2, b2) {
              b2 = b2 || 0;
              return function() {
                return a2.apply(this, Array.prototype.slice.call(arguments, 0, b2));
              };
            };
            goog.functions.nth = function(a2) {
              return function() {
                return arguments[a2];
              };
            };
            goog.functions.partialRight = function(a2, b2) {
              var c2 = Array.prototype.slice.call(arguments, 1);
              return function() {
                var d2 = this;
                d2 === goog.global && (d2 = void 0);
                var e2 = Array.prototype.slice.call(arguments);
                e2.push.apply(e2, c2);
                return a2.apply(d2, e2);
              };
            };
            goog.functions.withReturnValue = function(a2, b2) {
              return goog.functions.sequence(a2, goog.functions.constant(b2));
            };
            goog.functions.equalTo = function(a2, b2) {
              return function(c2) {
                return b2 ? a2 == c2 : a2 === c2;
              };
            };
            goog.functions.compose = function(a2, b2) {
              var c2 = arguments, d2 = c2.length;
              return function() {
                var e2;
                d2 && (e2 = c2[d2 - 1].apply(this, arguments));
                for (var f2 = d2 - 2; 0 <= f2; f2--)
                  e2 = c2[f2].call(this, e2);
                return e2;
              };
            };
            goog.functions.sequence = function(a2) {
              var b2 = arguments, c2 = b2.length;
              return function() {
                for (var d2, e2 = 0; e2 < c2; e2++)
                  d2 = b2[e2].apply(this, arguments);
                return d2;
              };
            };
            goog.functions.and = function(a2) {
              var b2 = arguments, c2 = b2.length;
              return function() {
                for (var d2 = 0; d2 < c2; d2++)
                  if (!b2[d2].apply(this, arguments))
                    return false;
                return true;
              };
            };
            goog.functions.or = function(a2) {
              var b2 = arguments, c2 = b2.length;
              return function() {
                for (var d2 = 0; d2 < c2; d2++)
                  if (b2[d2].apply(this, arguments))
                    return true;
                return false;
              };
            };
            goog.functions.not = function(a2) {
              return function() {
                return !a2.apply(this, arguments);
              };
            };
            goog.functions.create = function(a2, b2) {
              var c2 = function() {
              };
              c2.prototype = a2.prototype;
              c2 = new c2();
              a2.apply(c2, Array.prototype.slice.call(arguments, 1));
              return c2;
            };
            goog.functions.CACHE_RETURN_VALUE = true;
            goog.functions.cacheReturnValue = function(a2) {
              var b2 = false, c2;
              return function() {
                if (!goog.functions.CACHE_RETURN_VALUE)
                  return a2();
                b2 || (c2 = a2(), b2 = true);
                return c2;
              };
            };
            goog.functions.once = function(a2) {
              var b2 = a2;
              return function() {
                if (b2) {
                  var c2 = b2;
                  b2 = null;
                  c2();
                }
              };
            };
            goog.functions.debounce = function(a2, b2, c2) {
              var d2 = 0;
              return function(e2) {
                goog.global.clearTimeout(d2);
                var f2 = arguments;
                d2 = goog.global.setTimeout(function() {
                  a2.apply(c2, f2);
                }, b2);
              };
            };
            goog.functions.throttle = function(a2, b2, c2) {
              var d2 = 0, e2 = false, f2 = [], g2 = function() {
                d2 = 0;
                e2 && (e2 = false, h());
              }, h = function() {
                d2 = goog.global.setTimeout(g2, b2);
                a2.apply(c2, f2);
              };
              return function(k) {
                f2 = arguments;
                d2 ? e2 = true : h();
              };
            };
            goog.functions.rateLimit = function(a2, b2, c2) {
              var d2 = 0, e2 = function() {
                d2 = 0;
              };
              return function(f2) {
                d2 || (d2 = goog.global.setTimeout(e2, b2), a2.apply(c2, arguments));
              };
            };
            goog.functions.isFunction = function(a2) {
              return "function" === typeof a2;
            };
            goog.dom.TagName = function() {
            };
            goog.dom.TagName.cast = function(a2, b2) {
              return a2;
            };
            goog.dom.TagName.prototype.toString = function() {
            };
            goog.dom.TagName.A = "A";
            goog.dom.TagName.ABBR = "ABBR";
            goog.dom.TagName.ACRONYM = "ACRONYM";
            goog.dom.TagName.ADDRESS = "ADDRESS";
            goog.dom.TagName.APPLET = "APPLET";
            goog.dom.TagName.AREA = "AREA";
            goog.dom.TagName.ARTICLE = "ARTICLE";
            goog.dom.TagName.ASIDE = "ASIDE";
            goog.dom.TagName.AUDIO = "AUDIO";
            goog.dom.TagName.B = "B";
            goog.dom.TagName.BASE = "BASE";
            goog.dom.TagName.BASEFONT = "BASEFONT";
            goog.dom.TagName.BDI = "BDI";
            goog.dom.TagName.BDO = "BDO";
            goog.dom.TagName.BIG = "BIG";
            goog.dom.TagName.BLOCKQUOTE = "BLOCKQUOTE";
            goog.dom.TagName.BODY = "BODY";
            goog.dom.TagName.BR = "BR";
            goog.dom.TagName.BUTTON = "BUTTON";
            goog.dom.TagName.CANVAS = "CANVAS";
            goog.dom.TagName.CAPTION = "CAPTION";
            goog.dom.TagName.CENTER = "CENTER";
            goog.dom.TagName.CITE = "CITE";
            goog.dom.TagName.CODE = "CODE";
            goog.dom.TagName.COL = "COL";
            goog.dom.TagName.COLGROUP = "COLGROUP";
            goog.dom.TagName.COMMAND = "COMMAND";
            goog.dom.TagName.DATA = "DATA";
            goog.dom.TagName.DATALIST = "DATALIST";
            goog.dom.TagName.DD = "DD";
            goog.dom.TagName.DEL = "DEL";
            goog.dom.TagName.DETAILS = "DETAILS";
            goog.dom.TagName.DFN = "DFN";
            goog.dom.TagName.DIALOG = "DIALOG";
            goog.dom.TagName.DIR = "DIR";
            goog.dom.TagName.DIV = "DIV";
            goog.dom.TagName.DL = "DL";
            goog.dom.TagName.DT = "DT";
            goog.dom.TagName.EM = "EM";
            goog.dom.TagName.EMBED = "EMBED";
            goog.dom.TagName.FIELDSET = "FIELDSET";
            goog.dom.TagName.FIGCAPTION = "FIGCAPTION";
            goog.dom.TagName.FIGURE = "FIGURE";
            goog.dom.TagName.FONT = "FONT";
            goog.dom.TagName.FOOTER = "FOOTER";
            goog.dom.TagName.FORM = "FORM";
            goog.dom.TagName.FRAME = "FRAME";
            goog.dom.TagName.FRAMESET = "FRAMESET";
            goog.dom.TagName.H1 = "H1";
            goog.dom.TagName.H2 = "H2";
            goog.dom.TagName.H3 = "H3";
            goog.dom.TagName.H4 = "H4";
            goog.dom.TagName.H5 = "H5";
            goog.dom.TagName.H6 = "H6";
            goog.dom.TagName.HEAD = "HEAD";
            goog.dom.TagName.HEADER = "HEADER";
            goog.dom.TagName.HGROUP = "HGROUP";
            goog.dom.TagName.HR = "HR";
            goog.dom.TagName.HTML = "HTML";
            goog.dom.TagName.I = "I";
            goog.dom.TagName.IFRAME = "IFRAME";
            goog.dom.TagName.IMG = "IMG";
            goog.dom.TagName.INPUT = "INPUT";
            goog.dom.TagName.INS = "INS";
            goog.dom.TagName.ISINDEX = "ISINDEX";
            goog.dom.TagName.KBD = "KBD";
            goog.dom.TagName.KEYGEN = "KEYGEN";
            goog.dom.TagName.LABEL = "LABEL";
            goog.dom.TagName.LEGEND = "LEGEND";
            goog.dom.TagName.LI = "LI";
            goog.dom.TagName.LINK = "LINK";
            goog.dom.TagName.MAIN = "MAIN";
            goog.dom.TagName.MAP = "MAP";
            goog.dom.TagName.MARK = "MARK";
            goog.dom.TagName.MATH = "MATH";
            goog.dom.TagName.MENU = "MENU";
            goog.dom.TagName.MENUITEM = "MENUITEM";
            goog.dom.TagName.META = "META";
            goog.dom.TagName.METER = "METER";
            goog.dom.TagName.NAV = "NAV";
            goog.dom.TagName.NOFRAMES = "NOFRAMES";
            goog.dom.TagName.NOSCRIPT = "NOSCRIPT";
            goog.dom.TagName.OBJECT = "OBJECT";
            goog.dom.TagName.OL = "OL";
            goog.dom.TagName.OPTGROUP = "OPTGROUP";
            goog.dom.TagName.OPTION = "OPTION";
            goog.dom.TagName.OUTPUT = "OUTPUT";
            goog.dom.TagName.P = "P";
            goog.dom.TagName.PARAM = "PARAM";
            goog.dom.TagName.PICTURE = "PICTURE";
            goog.dom.TagName.PRE = "PRE";
            goog.dom.TagName.PROGRESS = "PROGRESS";
            goog.dom.TagName.Q = "Q";
            goog.dom.TagName.RP = "RP";
            goog.dom.TagName.RT = "RT";
            goog.dom.TagName.RTC = "RTC";
            goog.dom.TagName.RUBY = "RUBY";
            goog.dom.TagName.S = "S";
            goog.dom.TagName.SAMP = "SAMP";
            goog.dom.TagName.SCRIPT = "SCRIPT";
            goog.dom.TagName.SECTION = "SECTION";
            goog.dom.TagName.SELECT = "SELECT";
            goog.dom.TagName.SMALL = "SMALL";
            goog.dom.TagName.SOURCE = "SOURCE";
            goog.dom.TagName.SPAN = "SPAN";
            goog.dom.TagName.STRIKE = "STRIKE";
            goog.dom.TagName.STRONG = "STRONG";
            goog.dom.TagName.STYLE = "STYLE";
            goog.dom.TagName.SUB = "SUB";
            goog.dom.TagName.SUMMARY = "SUMMARY";
            goog.dom.TagName.SUP = "SUP";
            goog.dom.TagName.SVG = "SVG";
            goog.dom.TagName.TABLE = "TABLE";
            goog.dom.TagName.TBODY = "TBODY";
            goog.dom.TagName.TD = "TD";
            goog.dom.TagName.TEMPLATE = "TEMPLATE";
            goog.dom.TagName.TEXTAREA = "TEXTAREA";
            goog.dom.TagName.TFOOT = "TFOOT";
            goog.dom.TagName.TH = "TH";
            goog.dom.TagName.THEAD = "THEAD";
            goog.dom.TagName.TIME = "TIME";
            goog.dom.TagName.TITLE = "TITLE";
            goog.dom.TagName.TR = "TR";
            goog.dom.TagName.TRACK = "TRACK";
            goog.dom.TagName.TT = "TT";
            goog.dom.TagName.U = "U";
            goog.dom.TagName.UL = "UL";
            goog.dom.TagName.VAR = "VAR";
            goog.dom.TagName.VIDEO = "VIDEO";
            goog.dom.TagName.WBR = "WBR";
            goog.object = {};
            goog.object.forEach = function(a2, b2, c2) {
              for (var d2 in a2)
                b2.call(c2, a2[d2], d2, a2);
            };
            goog.object.filter = function(a2, b2, c2) {
              var d2 = {}, e2;
              for (e2 in a2)
                b2.call(c2, a2[e2], e2, a2) && (d2[e2] = a2[e2]);
              return d2;
            };
            goog.object.map = function(a2, b2, c2) {
              var d2 = {}, e2;
              for (e2 in a2)
                d2[e2] = b2.call(c2, a2[e2], e2, a2);
              return d2;
            };
            goog.object.some = function(a2, b2, c2) {
              for (var d2 in a2)
                if (b2.call(c2, a2[d2], d2, a2))
                  return true;
              return false;
            };
            goog.object.every = function(a2, b2, c2) {
              for (var d2 in a2)
                if (!b2.call(c2, a2[d2], d2, a2))
                  return false;
              return true;
            };
            goog.object.getCount = function(a2) {
              var b2 = 0, c2;
              for (c2 in a2)
                b2++;
              return b2;
            };
            goog.object.getAnyKey = function(a2) {
              for (var b2 in a2)
                return b2;
            };
            goog.object.getAnyValue = function(a2) {
              for (var b2 in a2)
                return a2[b2];
            };
            goog.object.contains = function(a2, b2) {
              return goog.object.containsValue(a2, b2);
            };
            goog.object.getValues = function(a2) {
              var b2 = [], c2 = 0, d2;
              for (d2 in a2)
                b2[c2++] = a2[d2];
              return b2;
            };
            goog.object.getKeys = function(a2) {
              var b2 = [], c2 = 0, d2;
              for (d2 in a2)
                b2[c2++] = d2;
              return b2;
            };
            goog.object.getValueByKeys = function(a2, b2) {
              var c2 = goog.isArrayLike(b2), d2 = c2 ? b2 : arguments;
              for (c2 = c2 ? 0 : 1; c2 < d2.length; c2++) {
                if (null == a2)
                  return;
                a2 = a2[d2[c2]];
              }
              return a2;
            };
            goog.object.containsKey = function(a2, b2) {
              return null !== a2 && b2 in a2;
            };
            goog.object.containsValue = function(a2, b2) {
              for (var c2 in a2)
                if (a2[c2] == b2)
                  return true;
              return false;
            };
            goog.object.findKey = function(a2, b2, c2) {
              for (var d2 in a2)
                if (b2.call(c2, a2[d2], d2, a2))
                  return d2;
            };
            goog.object.findValue = function(a2, b2, c2) {
              return (b2 = goog.object.findKey(a2, b2, c2)) && a2[b2];
            };
            goog.object.isEmpty = function(a2) {
              for (var b2 in a2)
                return false;
              return true;
            };
            goog.object.clear = function(a2) {
              for (var b2 in a2)
                delete a2[b2];
            };
            goog.object.remove = function(a2, b2) {
              var c2;
              (c2 = b2 in a2) && delete a2[b2];
              return c2;
            };
            goog.object.add = function(a2, b2, c2) {
              if (null !== a2 && b2 in a2)
                throw Error('The object already contains the key "' + b2 + '"');
              goog.object.set(a2, b2, c2);
            };
            goog.object.get = function(a2, b2, c2) {
              return null !== a2 && b2 in a2 ? a2[b2] : c2;
            };
            goog.object.set = function(a2, b2, c2) {
              a2[b2] = c2;
            };
            goog.object.setIfUndefined = function(a2, b2, c2) {
              return b2 in a2 ? a2[b2] : a2[b2] = c2;
            };
            goog.object.setWithReturnValueIfNotSet = function(a2, b2, c2) {
              if (b2 in a2)
                return a2[b2];
              c2 = c2();
              return a2[b2] = c2;
            };
            goog.object.equals = function(a2, b2) {
              for (var c2 in a2)
                if (!(c2 in b2) || a2[c2] !== b2[c2])
                  return false;
              for (var d2 in b2)
                if (!(d2 in a2))
                  return false;
              return true;
            };
            goog.object.clone = function(a2) {
              var b2 = {}, c2;
              for (c2 in a2)
                b2[c2] = a2[c2];
              return b2;
            };
            goog.object.unsafeClone = function(a2) {
              if (!a2 || "object" !== typeof a2)
                return a2;
              if ("function" === typeof a2.clone)
                return a2.clone();
              var b2 = Array.isArray(a2) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a2) || a2 instanceof DataView ? {} : new a2.constructor(a2.length), c2;
              for (c2 in a2)
                b2[c2] = goog.object.unsafeClone(a2[c2]);
              return b2;
            };
            goog.object.transpose = function(a2) {
              var b2 = {}, c2;
              for (c2 in a2)
                b2[a2[c2]] = c2;
              return b2;
            };
            goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
            goog.object.extend = function(a2, b2) {
              for (var c2, d2, e2 = 1; e2 < arguments.length; e2++) {
                d2 = arguments[e2];
                for (c2 in d2)
                  a2[c2] = d2[c2];
                for (var f2 = 0; f2 < goog.object.PROTOTYPE_FIELDS_.length; f2++)
                  c2 = goog.object.PROTOTYPE_FIELDS_[f2], Object.prototype.hasOwnProperty.call(d2, c2) && (a2[c2] = d2[c2]);
              }
            };
            goog.object.create = function(a2) {
              var b2 = arguments.length;
              if (1 == b2 && Array.isArray(arguments[0]))
                return goog.object.create.apply(null, arguments[0]);
              if (b2 % 2)
                throw Error("Uneven number of arguments");
              for (var c2 = {}, d2 = 0; d2 < b2; d2 += 2)
                c2[arguments[d2]] = arguments[d2 + 1];
              return c2;
            };
            goog.object.createSet = function(a2) {
              var b2 = arguments.length;
              if (1 == b2 && Array.isArray(arguments[0]))
                return goog.object.createSet.apply(null, arguments[0]);
              for (var c2 = {}, d2 = 0; d2 < b2; d2++)
                c2[arguments[d2]] = true;
              return c2;
            };
            goog.object.createImmutableView = function(a2) {
              var b2 = a2;
              Object.isFrozen && !Object.isFrozen(a2) && (b2 = Object.create(a2), Object.freeze(b2));
              return b2;
            };
            goog.object.isImmutableView = function(a2) {
              return !!Object.isFrozen && Object.isFrozen(a2);
            };
            goog.object.getAllPropertyNames = function(a2, b2, c2) {
              if (!a2)
                return [];
              if (!Object.getOwnPropertyNames || !Object.getPrototypeOf)
                return goog.object.getKeys(a2);
              for (var d2 = {}; a2 && (a2 !== Object.prototype || b2) && (a2 !== Function.prototype || c2); ) {
                for (var e2 = Object.getOwnPropertyNames(a2), f2 = 0; f2 < e2.length; f2++)
                  d2[e2[f2]] = true;
                a2 = Object.getPrototypeOf(a2);
              }
              return goog.object.getKeys(d2);
            };
            goog.object.getSuperClass = function(a2) {
              return (a2 = Object.getPrototypeOf(a2.prototype)) && a2.constructor;
            };
            goog.dom.tags = {};
            goog.dom.tags.VOID_TAGS_ = { area: true, base: true, br: true, col: true, command: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true };
            goog.dom.tags.isVoidTag = function(a2) {
              return true === goog.dom.tags.VOID_TAGS_[a2];
            };
            goog.string = {};
            goog.string.TypedString = function() {
            };
            goog.string.Const = function(a2, b2) {
              this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = a2 === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && b2 || "";
              this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_;
            };
            goog.string.Const.prototype.implementsGoogStringTypedString = true;
            goog.string.Const.prototype.getTypedStringValue = function() {
              return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
            };
            goog.DEBUG && (goog.string.Const.prototype.toString = function() {
              return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}";
            });
            goog.string.Const.unwrap = function(a2) {
              if (a2 instanceof goog.string.Const && a2.constructor === goog.string.Const && a2.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_)
                return a2.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
              goog.asserts.fail("expected object of type Const, got '" + a2 + "'");
              return "type_error:Const";
            };
            goog.string.Const.from = function(a2) {
              return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, a2);
            };
            goog.string.Const.TYPE_MARKER_ = {};
            goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {};
            goog.string.Const.EMPTY = goog.string.Const.from("");
            goog.html = {};
            goog.html.trustedtypes = {};
            goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse = function() {
              if (!goog.TRUSTED_TYPES_POLICY_NAME)
                return null;
              void 0 === goog.html.trustedtypes.cachedPolicy_ && (goog.html.trustedtypes.cachedPolicy_ = goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#html"));
              return goog.html.trustedtypes.cachedPolicy_;
            };
            var module$contents$goog$html$SafeScript_CONSTRUCTOR_TOKEN_PRIVATE = {}, module$contents$goog$html$SafeScript_SafeScript = function(a2, b2) {
              this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = b2 === module$contents$goog$html$SafeScript_CONSTRUCTOR_TOKEN_PRIVATE ? a2 : "";
              this.implementsGoogStringTypedString = true;
            };
            module$contents$goog$html$SafeScript_SafeScript.fromConstant = function(a2) {
              a2 = goog.string.Const.unwrap(a2);
              return 0 === a2.length ? module$contents$goog$html$SafeScript_SafeScript.EMPTY : module$contents$goog$html$SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(a2);
            };
            module$contents$goog$html$SafeScript_SafeScript.fromConstantAndArgs = function(a2, b2) {
              for (var c2 = [], d2 = 1; d2 < arguments.length; d2++)
                c2.push(module$contents$goog$html$SafeScript_SafeScript.stringify_(arguments[d2]));
              return module$contents$goog$html$SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("(" + goog.string.Const.unwrap(a2) + ")(" + c2.join(", ") + ");");
            };
            module$contents$goog$html$SafeScript_SafeScript.fromJson = function(a2) {
              return module$contents$goog$html$SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(module$contents$goog$html$SafeScript_SafeScript.stringify_(a2));
            };
            module$contents$goog$html$SafeScript_SafeScript.prototype.getTypedStringValue = function() {
              return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
            };
            module$contents$goog$html$SafeScript_SafeScript.unwrap = function(a2) {
              return module$contents$goog$html$SafeScript_SafeScript.unwrapTrustedScript(a2).toString();
            };
            module$contents$goog$html$SafeScript_SafeScript.unwrapTrustedScript = function(a2) {
              if (a2 instanceof module$contents$goog$html$SafeScript_SafeScript && a2.constructor === module$contents$goog$html$SafeScript_SafeScript)
                return a2.privateDoNotAccessOrElseSafeScriptWrappedValue_;
              (0, goog.asserts.fail)("expected object of type SafeScript, got '" + a2 + "' of type " + goog.typeOf(a2));
              return "type_error:SafeScript";
            };
            module$contents$goog$html$SafeScript_SafeScript.stringify_ = function(a2) {
              return JSON.stringify(a2).replace(/</g, "\\x3c");
            };
            module$contents$goog$html$SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function(a2) {
              var b2 = goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse();
              a2 = b2 ? b2.createScript(a2) : a2;
              return new module$contents$goog$html$SafeScript_SafeScript(a2, module$contents$goog$html$SafeScript_CONSTRUCTOR_TOKEN_PRIVATE);
            };
            goog.DEBUG && (module$contents$goog$html$SafeScript_SafeScript.prototype.toString = function() {
              return "SafeScript{" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + "}";
            });
            module$contents$goog$html$SafeScript_SafeScript.EMPTY = function() {
              return module$contents$goog$html$SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");
            }();
            goog.html.SafeScript = module$contents$goog$html$SafeScript_SafeScript;
            goog.fs = {};
            goog.fs.url = {};
            goog.fs.url.createObjectUrl = function(a2) {
              return goog.fs.url.getUrlObject_().createObjectURL(a2);
            };
            goog.fs.url.revokeObjectUrl = function(a2) {
              goog.fs.url.getUrlObject_().revokeObjectURL(a2);
            };
            goog.fs.url.UrlObject_ = function() {
            };
            goog.fs.url.UrlObject_.prototype.createObjectURL = function(a2) {
            };
            goog.fs.url.UrlObject_.prototype.revokeObjectURL = function(a2) {
            };
            goog.fs.url.getUrlObject_ = function() {
              var a2 = goog.fs.url.findUrlObject_();
              if (null != a2)
                return a2;
              throw Error("This browser doesn't seem to support blob URLs");
            };
            goog.fs.url.findUrlObject_ = function() {
              return void 0 !== goog.global.URL && void 0 !== goog.global.URL.createObjectURL ? goog.global.URL : void 0 !== goog.global.webkitURL && void 0 !== goog.global.webkitURL.createObjectURL ? goog.global.webkitURL : void 0 !== goog.global.createObjectURL ? goog.global : null;
            };
            goog.fs.url.browserSupportsObjectUrls = function() {
              return null != goog.fs.url.findUrlObject_();
            };
            goog.fs.blob = {};
            goog.fs.blob.getBlob = function(a2) {
              var b2 = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
              if (void 0 !== b2) {
                b2 = new b2();
                for (var c2 = 0; c2 < arguments.length; c2++)
                  b2.append(arguments[c2]);
                return b2.getBlob();
              }
              return goog.fs.blob.getBlobWithProperties(module$contents$goog$array_toArray(arguments));
            };
            goog.fs.blob.getBlobWithProperties = function(a2, b2, c2) {
              var d2 = goog.global.BlobBuilder || goog.global.WebKitBlobBuilder;
              if (void 0 !== d2) {
                d2 = new d2();
                for (var e2 = 0; e2 < a2.length; e2++)
                  d2.append(a2[e2], c2);
                return d2.getBlob(b2);
              }
              if (void 0 !== goog.global.Blob)
                return d2 = {}, b2 && (d2.type = b2), c2 && (d2.endings = c2), new Blob(a2, d2);
              throw Error("This browser doesn't seem to support creating Blobs");
            };
            goog.i18n = {};
            goog.i18n.bidi = {};
            goog.i18n.bidi.FORCE_RTL = false;
            goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || ("ar" == goog.LOCALE.substring(0, 2).toLowerCase() || "fa" == goog.LOCALE.substring(0, 2).toLowerCase() || "he" == goog.LOCALE.substring(0, 2).toLowerCase() || "iw" == goog.LOCALE.substring(0, 2).toLowerCase() || "ps" == goog.LOCALE.substring(0, 2).toLowerCase() || "sd" == goog.LOCALE.substring(0, 2).toLowerCase() || "ug" == goog.LOCALE.substring(0, 2).toLowerCase() || "ur" == goog.LOCALE.substring(0, 2).toLowerCase() || "yi" == goog.LOCALE.substring(0, 2).toLowerCase()) && (2 == goog.LOCALE.length || "-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) || 3 <= goog.LOCALE.length && "ckb" == goog.LOCALE.substring(0, 3).toLowerCase() && (3 == goog.LOCALE.length || "-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) || 7 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) && ("adlm" == goog.LOCALE.substring(3, 7).toLowerCase() || "arab" == goog.LOCALE.substring(3, 7).toLowerCase() || "hebr" == goog.LOCALE.substring(3, 7).toLowerCase() || "nkoo" == goog.LOCALE.substring(
              3,
              7
            ).toLowerCase() || "rohg" == goog.LOCALE.substring(3, 7).toLowerCase() || "thaa" == goog.LOCALE.substring(3, 7).toLowerCase()) || 8 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) && ("adlm" == goog.LOCALE.substring(4, 8).toLowerCase() || "arab" == goog.LOCALE.substring(4, 8).toLowerCase() || "hebr" == goog.LOCALE.substring(4, 8).toLowerCase() || "nkoo" == goog.LOCALE.substring(4, 8).toLowerCase() || "rohg" == goog.LOCALE.substring(4, 8).toLowerCase() || "thaa" == goog.LOCALE.substring(4, 8).toLowerCase());
            goog.i18n.bidi.Format = { LRE: "‪", RLE: "‫", PDF: "‬", LRM: "‎", RLM: "‏" };
            goog.i18n.bidi.Dir = { LTR: 1, RTL: -1, NEUTRAL: 0 };
            goog.i18n.bidi.RIGHT = "right";
            goog.i18n.bidi.LEFT = "left";
            goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT;
            goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT;
            goog.i18n.bidi.toDir = function(a2, b2) {
              return "number" == typeof a2 ? 0 < a2 ? goog.i18n.bidi.Dir.LTR : 0 > a2 ? goog.i18n.bidi.Dir.RTL : b2 ? null : goog.i18n.bidi.Dir.NEUTRAL : null == a2 ? null : a2 ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
            };
            goog.i18n.bidi.ltrChars_ = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ऀ-῿‎Ⰰ-\uD801\uD804-\uD839\uD83C-\uDBFF豈-﬜︀-﹯﻽-￿";
            goog.i18n.bidi.rtlChars_ = "֑-ۯۺ-ࣿ‏\uD802-\uD803\uD83A-\uD83Bיִ-﷿ﹰ-ﻼ";
            goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g;
            goog.i18n.bidi.stripHtmlIfNeeded_ = function(a2, b2) {
              return b2 ? a2.replace(goog.i18n.bidi.htmlSkipReg_, "") : a2;
            };
            goog.i18n.bidi.rtlCharReg_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]");
            goog.i18n.bidi.ltrCharReg_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]");
            goog.i18n.bidi.hasAnyRtl = function(a2, b2) {
              return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
            };
            goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl;
            goog.i18n.bidi.hasAnyLtr = function(a2, b2) {
              return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
            };
            goog.i18n.bidi.ltrRe_ = new RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]");
            goog.i18n.bidi.rtlRe_ = new RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]");
            goog.i18n.bidi.isRtlChar = function(a2) {
              return goog.i18n.bidi.rtlRe_.test(a2);
            };
            goog.i18n.bidi.isLtrChar = function(a2) {
              return goog.i18n.bidi.ltrRe_.test(a2);
            };
            goog.i18n.bidi.isNeutralChar = function(a2) {
              return !goog.i18n.bidi.isLtrChar(a2) && !goog.i18n.bidi.isRtlChar(a2);
            };
            goog.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]");
            goog.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]");
            goog.i18n.bidi.startsWithRtl = function(a2, b2) {
              return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
            };
            goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl;
            goog.i18n.bidi.startsWithLtr = function(a2, b2) {
              return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
            };
            goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr;
            goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/;
            goog.i18n.bidi.isNeutralText = function(a2, b2) {
              a2 = goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2);
              return goog.i18n.bidi.isRequiredLtrRe_.test(a2) || !goog.i18n.bidi.hasAnyLtr(a2) && !goog.i18n.bidi.hasAnyRtl(a2);
            };
            goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "][^" + goog.i18n.bidi.rtlChars_ + "]*$");
            goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "][^" + goog.i18n.bidi.ltrChars_ + "]*$");
            goog.i18n.bidi.endsWithLtr = function(a2, b2) {
              return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
            };
            goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr;
            goog.i18n.bidi.endsWithRtl = function(a2, b2) {
              return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2));
            };
            goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl;
            goog.i18n.bidi.rtlLocalesRe_ = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
            goog.i18n.bidi.isRtlLanguage = function(a2) {
              return goog.i18n.bidi.rtlLocalesRe_.test(a2);
            };
            goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
            goog.i18n.bidi.guardBracketInText = function(a2, b2) {
              b2 = (void 0 === b2 ? goog.i18n.bidi.hasAnyRtl(a2) : b2) ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM;
              return a2.replace(goog.i18n.bidi.bracketGuardTextRe_, b2 + "$&" + b2);
            };
            goog.i18n.bidi.enforceRtlInHtml = function(a2) {
              return "<" == a2.charAt(0) ? a2.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + a2 + "</span>";
            };
            goog.i18n.bidi.enforceRtlInText = function(a2) {
              return goog.i18n.bidi.Format.RLE + a2 + goog.i18n.bidi.Format.PDF;
            };
            goog.i18n.bidi.enforceLtrInHtml = function(a2) {
              return "<" == a2.charAt(0) ? a2.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + a2 + "</span>";
            };
            goog.i18n.bidi.enforceLtrInText = function(a2) {
              return goog.i18n.bidi.Format.LRE + a2 + goog.i18n.bidi.Format.PDF;
            };
            goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
            goog.i18n.bidi.leftRe_ = /left/gi;
            goog.i18n.bidi.rightRe_ = /right/gi;
            goog.i18n.bidi.tempRe_ = /%%%%/g;
            goog.i18n.bidi.mirrorCSS = function(a2) {
              return a2.replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_, "%%%%").replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT);
            };
            goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g;
            goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g;
            goog.i18n.bidi.normalizeHebrewQuote = function(a2) {
              return a2.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1״").replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1׳");
            };
            goog.i18n.bidi.wordSeparatorRe_ = /\s+/;
            goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/;
            goog.i18n.bidi.rtlDetectionThreshold_ = 0.4;
            goog.i18n.bidi.estimateDirection = function(a2, b2) {
              var c2 = 0, d2 = 0, e2 = false;
              a2 = goog.i18n.bidi.stripHtmlIfNeeded_(a2, b2).split(goog.i18n.bidi.wordSeparatorRe_);
              for (b2 = 0; b2 < a2.length; b2++) {
                var f2 = a2[b2];
                goog.i18n.bidi.startsWithRtl(f2) ? (c2++, d2++) : goog.i18n.bidi.isRequiredLtrRe_.test(f2) ? e2 = true : goog.i18n.bidi.hasAnyLtr(f2) ? d2++ : goog.i18n.bidi.hasNumeralsRe_.test(f2) && (e2 = true);
              }
              return 0 == d2 ? e2 ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : c2 / d2 > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
            };
            goog.i18n.bidi.detectRtlDirectionality = function(a2, b2) {
              return goog.i18n.bidi.estimateDirection(a2, b2) == goog.i18n.bidi.Dir.RTL;
            };
            goog.i18n.bidi.setElementDirAndAlign = function(a2, b2) {
              a2 && (b2 = goog.i18n.bidi.toDir(b2)) && (a2.style.textAlign = b2 == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT, a2.dir = b2 == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr");
            };
            goog.i18n.bidi.setElementDirByTextDirectionality = function(a2, b2) {
              switch (goog.i18n.bidi.estimateDirection(b2)) {
                case goog.i18n.bidi.Dir.LTR:
                  "ltr" !== a2.dir && (a2.dir = "ltr");
                  break;
                case goog.i18n.bidi.Dir.RTL:
                  "rtl" !== a2.dir && (a2.dir = "rtl");
                  break;
                default:
                  a2.removeAttribute("dir");
              }
            };
            goog.i18n.bidi.DirectionalString = function() {
            };
            goog.html.TrustedResourceUrl = function(a2, b2) {
              this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = b2 === goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ ? a2 : "";
            };
            goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = true;
            goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function() {
              return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString();
            };
            goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = true;
            goog.html.TrustedResourceUrl.prototype.getDirection = function() {
              return goog.i18n.bidi.Dir.LTR;
            };
            goog.html.TrustedResourceUrl.prototype.cloneWithParams = function(a2, b2) {
              var c2 = goog.html.TrustedResourceUrl.unwrap(this);
              c2 = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(c2);
              var d2 = c2[3] || "";
              return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(c2[1] + goog.html.TrustedResourceUrl.stringifyParams_("?", c2[2] || "", a2) + goog.html.TrustedResourceUrl.stringifyParams_("#", d2, b2));
            };
            goog.DEBUG && (goog.html.TrustedResourceUrl.prototype.toString = function() {
              return "TrustedResourceUrl{" + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "}";
            });
            goog.html.TrustedResourceUrl.unwrap = function(a2) {
              return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(a2).toString();
            };
            goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function(a2) {
              if (a2 instanceof goog.html.TrustedResourceUrl && a2.constructor === goog.html.TrustedResourceUrl)
                return a2.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;
              goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + a2 + "' of type " + goog.typeOf(a2));
              return "type_error:TrustedResourceUrl";
            };
            goog.html.TrustedResourceUrl.format = function(a2, b2) {
              var c2 = goog.string.Const.unwrap(a2);
              if (!goog.html.TrustedResourceUrl.BASE_URL_.test(c2))
                throw Error("Invalid TrustedResourceUrl format: " + c2);
              a2 = c2.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_, function(d2, e2) {
                if (!Object.prototype.hasOwnProperty.call(b2, e2))
                  throw Error('Found marker, "' + e2 + '", in format string, "' + c2 + '", but no valid label mapping found in args: ' + JSON.stringify(b2));
                d2 = b2[e2];
                return d2 instanceof goog.string.Const ? goog.string.Const.unwrap(d2) : encodeURIComponent(String(d2));
              });
              return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a2);
            };
            goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g;
            goog.html.TrustedResourceUrl.BASE_URL_ = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i;
            goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
            goog.html.TrustedResourceUrl.formatWithParams = function(a2, b2, c2, d2) {
              return goog.html.TrustedResourceUrl.format(a2, b2).cloneWithParams(c2, d2);
            };
            goog.html.TrustedResourceUrl.fromConstant = function(a2) {
              return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a2));
            };
            goog.html.TrustedResourceUrl.fromConstants = function(a2) {
              for (var b2 = "", c2 = 0; c2 < a2.length; c2++)
                b2 += goog.string.Const.unwrap(a2[c2]);
              return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b2);
            };
            goog.html.TrustedResourceUrl.fromSafeScript = function(a2) {
              a2 = goog.fs.blob.getBlobWithProperties([module$contents$goog$html$SafeScript_SafeScript.unwrap(a2)], "text/javascript");
              a2 = goog.fs.url.createObjectUrl(a2);
              return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a2);
            };
            goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
            goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function(a2) {
              var b2 = goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse();
              a2 = b2 ? b2.createScriptURL(a2) : a2;
              return new goog.html.TrustedResourceUrl(a2, goog.html.TrustedResourceUrl.CONSTRUCTOR_TOKEN_PRIVATE_);
            };
            goog.html.TrustedResourceUrl.stringifyParams_ = function(a2, b2, c2) {
              if (null == c2)
                return b2;
              if ("string" === typeof c2)
                return c2 ? a2 + encodeURIComponent(c2) : "";
              for (var d2 in c2)
                if (Object.prototype.hasOwnProperty.call(c2, d2)) {
                  var e2 = c2[d2];
                  e2 = Array.isArray(e2) ? e2 : [e2];
                  for (var f2 = 0; f2 < e2.length; f2++) {
                    var g2 = e2[f2];
                    null != g2 && (b2 || (b2 = a2), b2 += (b2.length > a2.length ? "&" : "") + encodeURIComponent(d2) + "=" + encodeURIComponent(String(g2)));
                  }
                }
              return b2;
            };
            goog.string.internal = {};
            goog.string.internal.startsWith = function(a2, b2) {
              return 0 == a2.lastIndexOf(b2, 0);
            };
            goog.string.internal.endsWith = function(a2, b2) {
              var c2 = a2.length - b2.length;
              return 0 <= c2 && a2.indexOf(b2, c2) == c2;
            };
            goog.string.internal.caseInsensitiveStartsWith = function(a2, b2) {
              return 0 == goog.string.internal.caseInsensitiveCompare(b2, a2.substr(0, b2.length));
            };
            goog.string.internal.caseInsensitiveEndsWith = function(a2, b2) {
              return 0 == goog.string.internal.caseInsensitiveCompare(b2, a2.substr(a2.length - b2.length, b2.length));
            };
            goog.string.internal.caseInsensitiveEquals = function(a2, b2) {
              return a2.toLowerCase() == b2.toLowerCase();
            };
            goog.string.internal.isEmptyOrWhitespace = function(a2) {
              return /^[\s\xa0]*$/.test(a2);
            };
            goog.string.internal.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(a2) {
              return a2.trim();
            } : function(a2) {
              return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a2)[1];
            };
            goog.string.internal.caseInsensitiveCompare = function(a2, b2) {
              a2 = String(a2).toLowerCase();
              b2 = String(b2).toLowerCase();
              return a2 < b2 ? -1 : a2 == b2 ? 0 : 1;
            };
            goog.string.internal.newLineToBr = function(a2, b2) {
              return a2.replace(/(\r\n|\r|\n)/g, b2 ? "<br />" : "<br>");
            };
            goog.string.internal.htmlEscape = function(a2, b2) {
              if (b2)
                a2 = a2.replace(goog.string.internal.AMP_RE_, "&amp;").replace(goog.string.internal.LT_RE_, "&lt;").replace(goog.string.internal.GT_RE_, "&gt;").replace(goog.string.internal.QUOT_RE_, "&quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.internal.NULL_RE_, "&#0;");
              else {
                if (!goog.string.internal.ALL_RE_.test(a2))
                  return a2;
                -1 != a2.indexOf("&") && (a2 = a2.replace(goog.string.internal.AMP_RE_, "&amp;"));
                -1 != a2.indexOf("<") && (a2 = a2.replace(
                  goog.string.internal.LT_RE_,
                  "&lt;"
                ));
                -1 != a2.indexOf(">") && (a2 = a2.replace(goog.string.internal.GT_RE_, "&gt;"));
                -1 != a2.indexOf('"') && (a2 = a2.replace(goog.string.internal.QUOT_RE_, "&quot;"));
                -1 != a2.indexOf("'") && (a2 = a2.replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;"));
                -1 != a2.indexOf("\0") && (a2 = a2.replace(goog.string.internal.NULL_RE_, "&#0;"));
              }
              return a2;
            };
            goog.string.internal.AMP_RE_ = /&/g;
            goog.string.internal.LT_RE_ = /</g;
            goog.string.internal.GT_RE_ = />/g;
            goog.string.internal.QUOT_RE_ = /"/g;
            goog.string.internal.SINGLE_QUOTE_RE_ = /'/g;
            goog.string.internal.NULL_RE_ = /\x00/g;
            goog.string.internal.ALL_RE_ = /[\x00&<>"']/;
            goog.string.internal.whitespaceEscape = function(a2, b2) {
              return goog.string.internal.newLineToBr(a2.replace(/  /g, " &#160;"), b2);
            };
            goog.string.internal.contains = function(a2, b2) {
              return -1 != a2.indexOf(b2);
            };
            goog.string.internal.caseInsensitiveContains = function(a2, b2) {
              return goog.string.internal.contains(a2.toLowerCase(), b2.toLowerCase());
            };
            goog.string.internal.compareVersions = function(a2, b2) {
              var c2 = 0;
              a2 = goog.string.internal.trim(String(a2)).split(".");
              b2 = goog.string.internal.trim(String(b2)).split(".");
              for (var d2 = Math.max(a2.length, b2.length), e2 = 0; 0 == c2 && e2 < d2; e2++) {
                var f2 = a2[e2] || "", g2 = b2[e2] || "";
                do {
                  f2 = /(\d*)(\D*)(.*)/.exec(f2) || ["", "", "", ""];
                  g2 = /(\d*)(\D*)(.*)/.exec(g2) || ["", "", "", ""];
                  if (0 == f2[0].length && 0 == g2[0].length)
                    break;
                  c2 = 0 == f2[1].length ? 0 : parseInt(f2[1], 10);
                  var h = 0 == g2[1].length ? 0 : parseInt(g2[1], 10);
                  c2 = goog.string.internal.compareElements_(c2, h) || goog.string.internal.compareElements_(0 == f2[2].length, 0 == g2[2].length) || goog.string.internal.compareElements_(f2[2], g2[2]);
                  f2 = f2[3];
                  g2 = g2[3];
                } while (0 == c2);
              }
              return c2;
            };
            goog.string.internal.compareElements_ = function(a2, b2) {
              return a2 < b2 ? -1 : a2 > b2 ? 1 : 0;
            };
            goog.html.SafeUrl = function(a2, b2) {
              this.privateDoNotAccessOrElseSafeUrlWrappedValue_ = b2 === goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ ? a2 : "";
            };
            goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez";
            goog.html.SafeUrl.prototype.implementsGoogStringTypedString = true;
            goog.html.SafeUrl.prototype.getTypedStringValue = function() {
              return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
            };
            goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = true;
            goog.html.SafeUrl.prototype.getDirection = function() {
              return goog.i18n.bidi.Dir.LTR;
            };
            goog.DEBUG && (goog.html.SafeUrl.prototype.toString = function() {
              return "SafeUrl{" + this.privateDoNotAccessOrElseSafeUrlWrappedValue_ + "}";
            });
            goog.html.SafeUrl.unwrap = function(a2) {
              if (a2 instanceof goog.html.SafeUrl && a2.constructor === goog.html.SafeUrl)
                return a2.privateDoNotAccessOrElseSafeUrlWrappedValue_;
              goog.asserts.fail("expected object of type SafeUrl, got '" + a2 + "' of type " + goog.typeOf(a2));
              return "type_error:SafeUrl";
            };
            goog.html.SafeUrl.fromConstant = function(a2) {
              return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a2));
            };
            goog.html.SAFE_MIME_TYPE_PATTERN_ = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i;
            goog.html.SafeUrl.isSafeMimeType = function(a2) {
              return goog.html.SAFE_MIME_TYPE_PATTERN_.test(a2);
            };
            goog.html.SafeUrl.fromBlob = function(a2) {
              a2 = goog.html.SafeUrl.isSafeMimeType(a2.type) ? goog.fs.url.createObjectUrl(a2) : goog.html.SafeUrl.INNOCUOUS_STRING;
              return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
            };
            goog.html.SafeUrl.revokeObjectUrl = function(a2) {
              a2 = a2.getTypedStringValue();
              a2 !== goog.html.SafeUrl.INNOCUOUS_STRING && goog.fs.url.revokeObjectUrl(a2);
            };
            goog.html.SafeUrl.fromMediaSource = function(a2) {
              goog.asserts.assert("MediaSource" in goog.global, "No support for MediaSource");
              a2 = a2 instanceof MediaSource ? goog.fs.url.createObjectUrl(a2) : goog.html.SafeUrl.INNOCUOUS_STRING;
              return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
            };
            goog.html.DATA_URL_PATTERN_ = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
            goog.html.SafeUrl.tryFromDataUrl = function(a2) {
              a2 = String(a2);
              a2 = a2.replace(/(%0A|%0D)/g, "");
              var b2 = a2.match(goog.html.DATA_URL_PATTERN_);
              return b2 && goog.html.SafeUrl.isSafeMimeType(b2[1]) ? goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2) : null;
            };
            goog.html.SafeUrl.fromDataUrl = function(a2) {
              return goog.html.SafeUrl.tryFromDataUrl(a2) || goog.html.SafeUrl.INNOCUOUS_URL;
            };
            goog.html.SafeUrl.fromTelUrl = function(a2) {
              goog.string.internal.caseInsensitiveStartsWith(a2, "tel:") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
              return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
            };
            goog.html.SIP_URL_PATTERN_ = /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i;
            goog.html.SafeUrl.fromSipUrl = function(a2) {
              goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(a2)) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
              return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
            };
            goog.html.SafeUrl.fromFacebookMessengerUrl = function(a2) {
              goog.string.internal.caseInsensitiveStartsWith(a2, "fb-messenger://share") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
              return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
            };
            goog.html.SafeUrl.fromWhatsAppUrl = function(a2) {
              goog.string.internal.caseInsensitiveStartsWith(a2, "whatsapp://send") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
              return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
            };
            goog.html.SafeUrl.fromSmsUrl = function(a2) {
              goog.string.internal.caseInsensitiveStartsWith(a2, "sms:") && goog.html.SafeUrl.isSmsUrlBodyValid_(a2) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
              return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
            };
            goog.html.SafeUrl.isSmsUrlBodyValid_ = function(a2) {
              var b2 = a2.indexOf("#");
              0 < b2 && (a2 = a2.substring(0, b2));
              b2 = a2.match(/[?&]body=/gi);
              if (!b2)
                return true;
              if (1 < b2.length)
                return false;
              a2 = a2.match(/[?&]body=([^&]*)/)[1];
              if (!a2)
                return true;
              try {
                decodeURIComponent(a2);
              } catch (c2) {
                return false;
              }
              return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(a2);
            };
            goog.html.SafeUrl.fromSshUrl = function(a2) {
              goog.string.internal.caseInsensitiveStartsWith(a2, "ssh://") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
              return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
            };
            goog.html.SafeUrl.sanitizeChromeExtensionUrl = function(a2, b2) {
              return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//, a2, b2);
            };
            goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function(a2, b2) {
              return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//, a2, b2);
            };
            goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function(a2, b2) {
              return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//, a2, b2);
            };
            goog.html.SafeUrl.sanitizeExtensionUrl_ = function(a2, b2, c2) {
              (a2 = a2.exec(b2)) ? (a2 = a2[1], -1 == (c2 instanceof goog.string.Const ? [goog.string.Const.unwrap(c2)] : c2.map(function(d2) {
                return goog.string.Const.unwrap(d2);
              })).indexOf(a2) && (b2 = goog.html.SafeUrl.INNOCUOUS_STRING)) : b2 = goog.html.SafeUrl.INNOCUOUS_STRING;
              return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b2);
            };
            goog.html.SafeUrl.fromTrustedResourceUrl = function(a2) {
              return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(a2));
            };
            goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
            goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_;
            goog.html.SafeUrl.trySanitize = function(a2) {
              if (a2 instanceof goog.html.SafeUrl)
                return a2;
              a2 = "object" == typeof a2 && a2.implementsGoogStringTypedString ? a2.getTypedStringValue() : String(a2);
              return goog.html.SAFE_URL_PATTERN_.test(a2) ? goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2) : goog.html.SafeUrl.tryFromDataUrl(a2);
            };
            goog.html.SafeUrl.sanitize = function(a2) {
              return goog.html.SafeUrl.trySanitize(a2) || goog.html.SafeUrl.INNOCUOUS_URL;
            };
            goog.html.SafeUrl.sanitizeAssertUnchanged = function(a2, b2) {
              if (a2 instanceof goog.html.SafeUrl)
                return a2;
              a2 = "object" == typeof a2 && a2.implementsGoogStringTypedString ? a2.getTypedStringValue() : String(a2);
              if (b2 && /^data:/i.test(a2) && (b2 = goog.html.SafeUrl.fromDataUrl(a2), b2.getTypedStringValue() == a2))
                return b2;
              goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(a2), "%s does not match the safe URL pattern", a2) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
              return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
            };
            goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
            goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function(a2) {
              return new goog.html.SafeUrl(a2, goog.html.SafeUrl.CONSTRUCTOR_TOKEN_PRIVATE_);
            };
            goog.html.SafeUrl.INNOCUOUS_URL = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.SafeUrl.INNOCUOUS_STRING);
            goog.html.SafeUrl.ABOUT_BLANK = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank");
            goog.html.SafeStyle = function(a2, b2) {
              this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = b2 === goog.html.SafeStyle.CONSTRUCTOR_TOKEN_PRIVATE_ ? a2 : "";
            };
            goog.html.SafeStyle.prototype.implementsGoogStringTypedString = true;
            goog.html.SafeStyle.fromConstant = function(a2) {
              a2 = goog.string.Const.unwrap(a2);
              if (0 === a2.length)
                return goog.html.SafeStyle.EMPTY;
              goog.asserts.assert(goog.string.internal.endsWith(a2, ";"), "Last character of style string is not ';': " + a2);
              goog.asserts.assert(goog.string.internal.contains(a2, ":"), `Style string must contain at least one ':', to specify a "name: value" pair: ` + a2);
              return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(a2);
            };
            goog.html.SafeStyle.prototype.getTypedStringValue = function() {
              return this.privateDoNotAccessOrElseSafeStyleWrappedValue_;
            };
            goog.DEBUG && (goog.html.SafeStyle.prototype.toString = function() {
              return "SafeStyle{" + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + "}";
            });
            goog.html.SafeStyle.unwrap = function(a2) {
              if (a2 instanceof goog.html.SafeStyle && a2.constructor === goog.html.SafeStyle)
                return a2.privateDoNotAccessOrElseSafeStyleWrappedValue_;
              goog.asserts.fail("expected object of type SafeStyle, got '" + a2 + "' of type " + goog.typeOf(a2));
              return "type_error:SafeStyle";
            };
            goog.html.SafeStyle.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
            goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function(a2) {
              return new goog.html.SafeStyle(a2, goog.html.SafeStyle.CONSTRUCTOR_TOKEN_PRIVATE_);
            };
            goog.html.SafeStyle.EMPTY = goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");
            goog.html.SafeStyle.INNOCUOUS_STRING = "zClosurez";
            goog.html.SafeStyle.create = function(a2) {
              var b2 = "", c2;
              for (c2 in a2)
                if (Object.prototype.hasOwnProperty.call(a2, c2)) {
                  if (!/^[-_a-zA-Z0-9]+$/.test(c2))
                    throw Error("Name allows only [-_a-zA-Z0-9], got: " + c2);
                  var d2 = a2[c2];
                  null != d2 && (d2 = Array.isArray(d2) ? module$contents$goog$array_map(d2, goog.html.SafeStyle.sanitizePropertyValue_).join(" ") : goog.html.SafeStyle.sanitizePropertyValue_(d2), b2 += c2 + ":" + d2 + ";");
                }
              return b2 ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b2) : goog.html.SafeStyle.EMPTY;
            };
            goog.html.SafeStyle.sanitizePropertyValue_ = function(a2) {
              if (a2 instanceof goog.html.SafeUrl)
                return 'url("' + goog.html.SafeUrl.unwrap(a2).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
              a2 = a2 instanceof goog.string.Const ? goog.string.Const.unwrap(a2) : goog.html.SafeStyle.sanitizePropertyValueString_(String(a2));
              if (/[{;}]/.test(a2))
                throw new goog.asserts.AssertionError("Value does not allow [{;}], got: %s.", [a2]);
              return a2;
            };
            goog.html.SafeStyle.sanitizePropertyValueString_ = function(a2) {
              var b2 = a2.replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.URL_RE_, "url");
              if (goog.html.SafeStyle.VALUE_RE_.test(b2)) {
                if (goog.html.SafeStyle.COMMENT_RE_.test(a2))
                  return goog.asserts.fail("String value disallows comments, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
                if (!goog.html.SafeStyle.hasBalancedQuotes_(a2))
                  return goog.asserts.fail("String value requires balanced quotes, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
                if (!goog.html.SafeStyle.hasBalancedSquareBrackets_(a2))
                  return goog.asserts.fail("String value requires balanced square brackets and one identifier per pair of brackets, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
              } else
                return goog.asserts.fail("String value allows only " + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + " and simple functions, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
              return goog.html.SafeStyle.sanitizeUrl_(a2);
            };
            goog.html.SafeStyle.hasBalancedQuotes_ = function(a2) {
              for (var b2 = true, c2 = true, d2 = 0; d2 < a2.length; d2++) {
                var e2 = a2.charAt(d2);
                "'" == e2 && c2 ? b2 = !b2 : '"' == e2 && b2 && (c2 = !c2);
              }
              return b2 && c2;
            };
            goog.html.SafeStyle.hasBalancedSquareBrackets_ = function(a2) {
              for (var b2 = true, c2 = /^[-_a-zA-Z0-9]$/, d2 = 0; d2 < a2.length; d2++) {
                var e2 = a2.charAt(d2);
                if ("]" == e2) {
                  if (b2)
                    return false;
                  b2 = true;
                } else if ("[" == e2) {
                  if (!b2)
                    return false;
                  b2 = false;
                } else if (!b2 && !c2.test(e2))
                  return false;
              }
              return b2;
            };
            goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ = `[-,."'%_!# a-zA-Z0-9\\[\\]]`;
            goog.html.SafeStyle.VALUE_RE_ = new RegExp("^" + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + "+$");
            goog.html.SafeStyle.URL_RE_ = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;
            goog.html.SafeStyle.ALLOWED_FUNCTIONS_ = "calc cubic-bezier fit-content hsl hsla linear-gradient matrix minmax repeat rgb rgba (rotate|scale|translate)(X|Y|Z|3d)?".split(" ");
            goog.html.SafeStyle.FUNCTIONS_RE_ = new RegExp("\\b(" + goog.html.SafeStyle.ALLOWED_FUNCTIONS_.join("|") + ")\\([-+*/0-9a-z.%\\[\\], ]+\\)", "g");
            goog.html.SafeStyle.COMMENT_RE_ = /\/\*/;
            goog.html.SafeStyle.sanitizeUrl_ = function(a2) {
              return a2.replace(goog.html.SafeStyle.URL_RE_, function(b2, c2, d2, e2) {
                var f2 = "";
                d2 = d2.replace(/^(['"])(.*)\1$/, function(g2, h, k) {
                  f2 = h;
                  return k;
                });
                b2 = goog.html.SafeUrl.sanitize(d2).getTypedStringValue();
                return c2 + f2 + b2 + f2 + e2;
              });
            };
            goog.html.SafeStyle.concat = function(a2) {
              var b2 = "", c2 = function(d2) {
                Array.isArray(d2) ? module$contents$goog$array_forEach(d2, c2) : b2 += goog.html.SafeStyle.unwrap(d2);
              };
              module$contents$goog$array_forEach(arguments, c2);
              return b2 ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b2) : goog.html.SafeStyle.EMPTY;
            };
            var module$contents$goog$html$SafeStyleSheet_CONSTRUCTOR_TOKEN_PRIVATE = {}, module$contents$goog$html$SafeStyleSheet_SafeStyleSheet = function(a2, b2) {
              this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = b2 === module$contents$goog$html$SafeStyleSheet_CONSTRUCTOR_TOKEN_PRIVATE ? a2 : "";
              this.implementsGoogStringTypedString = true;
            };
            module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createRule = function(a2, b2) {
              if ((0, goog.string.internal.contains)(a2, "<"))
                throw Error("Selector does not allow '<', got: " + a2);
              var c2 = a2.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
              if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c2))
                throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a2);
              if (!module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.hasBalancedBrackets_(c2))
                throw Error("() and [] in selector must be balanced, got: " + a2);
              b2 instanceof goog.html.SafeStyle || (b2 = goog.html.SafeStyle.create(b2));
              a2 = a2 + "{" + goog.html.SafeStyle.unwrap(b2).replace(/</g, "\\3C ") + "}";
              return module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a2);
            };
            module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.hasBalancedBrackets_ = function(a2) {
              for (var b2 = { "(": ")", "[": "]" }, c2 = [], d2 = 0; d2 < a2.length; d2++) {
                var e2 = a2[d2];
                if (b2[e2])
                  c2.push(b2[e2]);
                else if (goog.object.contains(b2, e2) && c2.pop() != e2)
                  return false;
              }
              return 0 == c2.length;
            };
            module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.concat = function(a2) {
              var b2 = "", c2 = function(d2) {
                Array.isArray(d2) ? module$contents$goog$array_forEach(d2, c2) : b2 += module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.unwrap(d2);
              };
              module$contents$goog$array_forEach(arguments, c2);
              return module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b2);
            };
            module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.fromConstant = function(a2) {
              a2 = goog.string.Const.unwrap(a2);
              if (0 === a2.length)
                return module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.EMPTY;
              (0, goog.asserts.assert)(!(0, goog.string.internal.contains)(a2, "<"), "Forbidden '<' character in style sheet string: " + a2);
              return module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a2);
            };
            module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.prototype.getTypedStringValue = function() {
              return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
            };
            module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.unwrap = function(a2) {
              if (a2 instanceof module$contents$goog$html$SafeStyleSheet_SafeStyleSheet && a2.constructor === module$contents$goog$html$SafeStyleSheet_SafeStyleSheet)
                return a2.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
              (0, goog.asserts.fail)("expected object of type SafeStyleSheet, got '" + a2 + "' of type " + goog.typeOf(a2));
              return "type_error:SafeStyleSheet";
            };
            module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function(a2) {
              return new module$contents$goog$html$SafeStyleSheet_SafeStyleSheet(a2, module$contents$goog$html$SafeStyleSheet_CONSTRUCTOR_TOKEN_PRIVATE);
            };
            goog.DEBUG && (module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.prototype.toString = function() {
              return "SafeStyleSheet{" + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + "}";
            });
            module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.EMPTY = module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");
            goog.html.SafeStyleSheet = module$contents$goog$html$SafeStyleSheet_SafeStyleSheet;
            goog.labs = {};
            goog.labs.userAgent = {};
            goog.labs.userAgent.util = {};
            goog.labs.userAgent.util.getNativeUserAgentString_ = function() {
              var a2 = goog.labs.userAgent.util.getNavigator_();
              return a2 && (a2 = a2.userAgent) ? a2 : "";
            };
            goog.labs.userAgent.util.getNavigator_ = function() {
              return goog.global.navigator;
            };
            goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_();
            goog.labs.userAgent.util.setUserAgent = function(a2) {
              goog.labs.userAgent.util.userAgent_ = a2 || goog.labs.userAgent.util.getNativeUserAgentString_();
            };
            goog.labs.userAgent.util.getUserAgent = function() {
              return goog.labs.userAgent.util.userAgent_;
            };
            goog.labs.userAgent.util.matchUserAgent = function(a2) {
              var b2 = goog.labs.userAgent.util.getUserAgent();
              return goog.string.internal.contains(b2, a2);
            };
            goog.labs.userAgent.util.matchUserAgentIgnoreCase = function(a2) {
              var b2 = goog.labs.userAgent.util.getUserAgent();
              return goog.string.internal.caseInsensitiveContains(b2, a2);
            };
            goog.labs.userAgent.util.extractVersionTuples = function(a2) {
              for (var b2 = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c2 = [], d2; d2 = b2.exec(a2); )
                c2.push([d2[1], d2[2], d2[3] || void 0]);
              return c2;
            };
            goog.labs.userAgent.browser = {};
            goog.labs.userAgent.browser.matchOpera_ = function() {
              return goog.labs.userAgent.util.matchUserAgent("Opera");
            };
            goog.labs.userAgent.browser.matchIE_ = function() {
              return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
            };
            goog.labs.userAgent.browser.matchEdgeHtml_ = function() {
              return goog.labs.userAgent.util.matchUserAgent("Edge");
            };
            goog.labs.userAgent.browser.matchEdgeChromium_ = function() {
              return goog.labs.userAgent.util.matchUserAgent("Edg/");
            };
            goog.labs.userAgent.browser.matchOperaChromium_ = function() {
              return goog.labs.userAgent.util.matchUserAgent("OPR");
            };
            goog.labs.userAgent.browser.matchFirefox_ = function() {
              return goog.labs.userAgent.util.matchUserAgent("Firefox") || goog.labs.userAgent.util.matchUserAgent("FxiOS");
            };
            goog.labs.userAgent.browser.matchSafari_ = function() {
              return goog.labs.userAgent.util.matchUserAgent("Safari") && !(goog.labs.userAgent.browser.matchChrome_() || goog.labs.userAgent.browser.matchCoast_() || goog.labs.userAgent.browser.matchOpera_() || goog.labs.userAgent.browser.matchEdgeHtml_() || goog.labs.userAgent.browser.matchEdgeChromium_() || goog.labs.userAgent.browser.matchOperaChromium_() || goog.labs.userAgent.browser.matchFirefox_() || goog.labs.userAgent.browser.isSilk() || goog.labs.userAgent.util.matchUserAgent("Android"));
            };
            goog.labs.userAgent.browser.matchCoast_ = function() {
              return goog.labs.userAgent.util.matchUserAgent("Coast");
            };
            goog.labs.userAgent.browser.matchIosWebview_ = function() {
              return (goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("iPhone")) && !goog.labs.userAgent.browser.matchSafari_() && !goog.labs.userAgent.browser.matchChrome_() && !goog.labs.userAgent.browser.matchCoast_() && !goog.labs.userAgent.browser.matchFirefox_() && goog.labs.userAgent.util.matchUserAgent("AppleWebKit");
            };
            goog.labs.userAgent.browser.matchChrome_ = function() {
              return (goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS")) && !goog.labs.userAgent.browser.matchEdgeHtml_();
            };
            goog.labs.userAgent.browser.matchAndroidBrowser_ = function() {
              return goog.labs.userAgent.util.matchUserAgent("Android") && !(goog.labs.userAgent.browser.isChrome() || goog.labs.userAgent.browser.isFirefox() || goog.labs.userAgent.browser.isOpera() || goog.labs.userAgent.browser.isSilk());
            };
            goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_;
            goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_;
            goog.labs.userAgent.browser.isEdge = goog.labs.userAgent.browser.matchEdgeHtml_;
            goog.labs.userAgent.browser.isEdgeChromium = goog.labs.userAgent.browser.matchEdgeChromium_;
            goog.labs.userAgent.browser.isOperaChromium = goog.labs.userAgent.browser.matchOperaChromium_;
            goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_;
            goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_;
            goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_;
            goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_;
            goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_;
            goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_;
            goog.labs.userAgent.browser.isSilk = function() {
              return goog.labs.userAgent.util.matchUserAgent("Silk");
            };
            goog.labs.userAgent.browser.getVersion = function() {
              function a2(e2) {
                e2 = module$contents$goog$array_find(e2, d2);
                return c2[e2] || "";
              }
              var b2 = goog.labs.userAgent.util.getUserAgent();
              if (goog.labs.userAgent.browser.isIE())
                return goog.labs.userAgent.browser.getIEVersion_(b2);
              b2 = goog.labs.userAgent.util.extractVersionTuples(b2);
              var c2 = {};
              module$contents$goog$array_forEach(b2, function(e2) {
                c2[e2[0]] = e2[1];
              });
              var d2 = goog.partial(goog.object.containsKey, c2);
              return goog.labs.userAgent.browser.isOpera() ? a2(["Version", "Opera"]) : goog.labs.userAgent.browser.isEdge() ? a2(["Edge"]) : goog.labs.userAgent.browser.isEdgeChromium() ? a2(["Edg"]) : goog.labs.userAgent.browser.isChrome() ? a2(["Chrome", "CriOS", "HeadlessChrome"]) : (b2 = b2[2]) && b2[1] || "";
            };
            goog.labs.userAgent.browser.isVersionOrHigher = function(a2) {
              return 0 <= goog.string.internal.compareVersions(goog.labs.userAgent.browser.getVersion(), a2);
            };
            goog.labs.userAgent.browser.getIEVersion_ = function(a2) {
              var b2 = /rv: *([\d\.]*)/.exec(a2);
              if (b2 && b2[1])
                return b2[1];
              b2 = "";
              var c2 = /MSIE +([\d\.]+)/.exec(a2);
              if (c2 && c2[1])
                if (a2 = /Trident\/(\d.\d)/.exec(a2), "7.0" == c2[1])
                  if (a2 && a2[1])
                    switch (a2[1]) {
                      case "4.0":
                        b2 = "8.0";
                        break;
                      case "5.0":
                        b2 = "9.0";
                        break;
                      case "6.0":
                        b2 = "10.0";
                        break;
                      case "7.0":
                        b2 = "11.0";
                    }
                  else
                    b2 = "7.0";
                else
                  b2 = c2[1];
              return b2;
            };
            goog.html.SafeHtml = function(a2, b2, c2) {
              this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = c2 === goog.html.SafeHtml.CONSTRUCTOR_TOKEN_PRIVATE_ ? a2 : "";
              this.dir_ = b2;
            };
            goog.html.SafeHtml.ENABLE_ERROR_MESSAGES = goog.DEBUG;
            goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE = true;
            goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString = true;
            goog.html.SafeHtml.prototype.getDirection = function() {
              return this.dir_;
            };
            goog.html.SafeHtml.prototype.implementsGoogStringTypedString = true;
            goog.html.SafeHtml.prototype.getTypedStringValue = function() {
              return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
            };
            goog.DEBUG && (goog.html.SafeHtml.prototype.toString = function() {
              return "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}";
            });
            goog.html.SafeHtml.unwrap = function(a2) {
              return goog.html.SafeHtml.unwrapTrustedHTML(a2).toString();
            };
            goog.html.SafeHtml.unwrapTrustedHTML = function(a2) {
              if (a2 instanceof goog.html.SafeHtml && a2.constructor === goog.html.SafeHtml)
                return a2.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
              goog.asserts.fail("expected object of type SafeHtml, got '" + a2 + "' of type " + goog.typeOf(a2));
              return "type_error:SafeHtml";
            };
            goog.html.SafeHtml.htmlEscape = function(a2) {
              if (a2 instanceof goog.html.SafeHtml)
                return a2;
              var b2 = "object" == typeof a2, c2 = null;
              b2 && a2.implementsGoogI18nBidiDirectionalString && (c2 = a2.getDirection());
              a2 = b2 && a2.implementsGoogStringTypedString ? a2.getTypedStringValue() : String(a2);
              return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.htmlEscape(a2), c2);
            };
            goog.html.SafeHtml.htmlEscapePreservingNewlines = function(a2) {
              if (a2 instanceof goog.html.SafeHtml)
                return a2;
              a2 = goog.html.SafeHtml.htmlEscape(a2);
              return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(a2)), a2.getDirection());
            };
            goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function(a2) {
              if (a2 instanceof goog.html.SafeHtml)
                return a2;
              a2 = goog.html.SafeHtml.htmlEscape(a2);
              return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.whitespaceEscape(goog.html.SafeHtml.unwrap(a2)), a2.getDirection());
            };
            goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape;
            goog.html.SafeHtml.comment = function(a2) {
              return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!--" + goog.string.internal.htmlEscape(a2) + "-->", null);
            };
            goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/;
            goog.html.SafeHtml.URL_ATTRIBUTES_ = { action: true, cite: true, data: true, formaction: true, href: true, manifest: true, poster: true, src: true };
            goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = goog.object.createSet(goog.dom.TagName.APPLET, goog.dom.TagName.BASE, goog.dom.TagName.EMBED, goog.dom.TagName.IFRAME, goog.dom.TagName.LINK, goog.dom.TagName.MATH, goog.dom.TagName.META, goog.dom.TagName.OBJECT, goog.dom.TagName.SCRIPT, goog.dom.TagName.STYLE, goog.dom.TagName.SVG, goog.dom.TagName.TEMPLATE);
            goog.html.SafeHtml.create = function(a2, b2, c2) {
              goog.html.SafeHtml.verifyTagName(String(a2));
              return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(a2), b2, c2);
            };
            goog.html.SafeHtml.verifyTagName = function(a2) {
              if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(a2))
                throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "Invalid tag name <" + a2 + ">." : "");
              if (a2.toUpperCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_)
                throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "Tag name <" + a2 + "> is not allowed for SafeHtml." : "");
            };
            goog.html.SafeHtml.createIframe = function(a2, b2, c2, d2) {
              a2 && goog.html.TrustedResourceUrl.unwrap(a2);
              var e2 = {};
              e2.src = a2 || null;
              e2.srcdoc = b2 && goog.html.SafeHtml.unwrap(b2);
              a2 = goog.html.SafeHtml.combineAttributes(e2, { sandbox: "" }, c2);
              return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a2, d2);
            };
            goog.html.SafeHtml.createSandboxIframe = function(a2, b2, c2, d2) {
              if (!goog.html.SafeHtml.canUseSandboxIframe())
                throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? "The browser does not support sandboxed iframes." : "");
              var e2 = {};
              e2.src = a2 ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a2)) : null;
              e2.srcdoc = b2 || null;
              e2.sandbox = "";
              a2 = goog.html.SafeHtml.combineAttributes(e2, {}, c2);
              return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a2, d2);
            };
            goog.html.SafeHtml.canUseSandboxIframe = function() {
              return goog.global.HTMLIFrameElement && "sandbox" in goog.global.HTMLIFrameElement.prototype;
            };
            goog.html.SafeHtml.createScriptSrc = function(a2, b2) {
              goog.html.TrustedResourceUrl.unwrap(a2);
              a2 = goog.html.SafeHtml.combineAttributes({ src: a2 }, {}, b2);
              return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", a2);
            };
            goog.html.SafeHtml.createScript = function(a2, b2) {
              for (var c2 in b2)
                if (Object.prototype.hasOwnProperty.call(b2, c2)) {
                  var d2 = c2.toLowerCase();
                  if ("language" == d2 || "src" == d2 || "text" == d2 || "type" == d2)
                    throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot set "' + d2 + '" attribute' : "");
                }
              c2 = "";
              a2 = module$contents$goog$array_concat(a2);
              for (d2 = 0; d2 < a2.length; d2++)
                c2 += module$contents$goog$html$SafeScript_SafeScript.unwrap(a2[d2]);
              a2 = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c2, goog.i18n.bidi.Dir.NEUTRAL);
              return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(
                "script",
                b2,
                a2
              );
            };
            goog.html.SafeHtml.createStyle = function(a2, b2) {
              b2 = goog.html.SafeHtml.combineAttributes({ type: "text/css" }, {}, b2);
              var c2 = "";
              a2 = module$contents$goog$array_concat(a2);
              for (var d2 = 0; d2 < a2.length; d2++)
                c2 += module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.unwrap(a2[d2]);
              a2 = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c2, goog.i18n.bidi.Dir.NEUTRAL);
              return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", b2, a2);
            };
            goog.html.SafeHtml.createMetaRefresh = function(a2, b2) {
              a2 = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a2));
              (goog.labs.userAgent.browser.isIE() || goog.labs.userAgent.browser.isEdge()) && goog.string.internal.contains(a2, ";") && (a2 = "'" + a2.replace(/'/g, "%27") + "'");
              return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", { "http-equiv": "refresh", content: (b2 || 0) + "; url=" + a2 });
            };
            goog.html.SafeHtml.getAttrNameAndValue_ = function(a2, b2, c2) {
              if (c2 instanceof goog.string.Const)
                c2 = goog.string.Const.unwrap(c2);
              else if ("style" == b2.toLowerCase())
                if (goog.html.SafeHtml.SUPPORT_STYLE_ATTRIBUTE)
                  c2 = goog.html.SafeHtml.getStyleValue_(c2);
                else
                  throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "style" not supported.' : "");
              else {
                if (/^on/i.test(b2))
                  throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + b2 + '" requires goog.string.Const value, "' + c2 + '" given.' : "");
                if (b2.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_)
                  if (c2 instanceof goog.html.TrustedResourceUrl)
                    c2 = goog.html.TrustedResourceUrl.unwrap(c2);
                  else if (c2 instanceof goog.html.SafeUrl)
                    c2 = goog.html.SafeUrl.unwrap(c2);
                  else if ("string" === typeof c2)
                    c2 = goog.html.SafeUrl.sanitize(c2).getTypedStringValue();
                  else
                    throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Attribute "' + b2 + '" on tag "' + a2 + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + c2 + '" given.' : "");
              }
              c2.implementsGoogStringTypedString && (c2 = c2.getTypedStringValue());
              goog.asserts.assert("string" === typeof c2 || "number" === typeof c2, "String or number value expected, got " + typeof c2 + " with value: " + c2);
              return b2 + '="' + goog.string.internal.htmlEscape(String(c2)) + '"';
            };
            goog.html.SafeHtml.getStyleValue_ = function(a2) {
              if (!goog.isObject(a2))
                throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof a2 + " given: " + a2 : "");
              a2 instanceof goog.html.SafeStyle || (a2 = goog.html.SafeStyle.create(a2));
              return goog.html.SafeStyle.unwrap(a2);
            };
            goog.html.SafeHtml.createWithDir = function(a2, b2, c2, d2) {
              b2 = goog.html.SafeHtml.create(b2, c2, d2);
              b2.dir_ = a2;
              return b2;
            };
            goog.html.SafeHtml.join = function(a2, b2) {
              a2 = goog.html.SafeHtml.htmlEscape(a2);
              var c2 = a2.getDirection(), d2 = [], e2 = function(f2) {
                Array.isArray(f2) ? module$contents$goog$array_forEach(f2, e2) : (f2 = goog.html.SafeHtml.htmlEscape(f2), d2.push(goog.html.SafeHtml.unwrap(f2)), f2 = f2.getDirection(), c2 == goog.i18n.bidi.Dir.NEUTRAL ? c2 = f2 : f2 != goog.i18n.bidi.Dir.NEUTRAL && c2 != f2 && (c2 = null));
              };
              module$contents$goog$array_forEach(b2, e2);
              return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(d2.join(goog.html.SafeHtml.unwrap(a2)), c2);
            };
            goog.html.SafeHtml.concat = function(a2) {
              return goog.html.SafeHtml.join(goog.html.SafeHtml.EMPTY, Array.prototype.slice.call(arguments));
            };
            goog.html.SafeHtml.concatWithDir = function(a2, b2) {
              var c2 = goog.html.SafeHtml.concat(module$contents$goog$array_slice(arguments, 1));
              c2.dir_ = a2;
              return c2;
            };
            goog.html.SafeHtml.CONSTRUCTOR_TOKEN_PRIVATE_ = {};
            goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function(a2, b2) {
              var c2 = goog.html.trustedtypes.getPolicyPrivateDoNotAccessOrElse();
              a2 = c2 ? c2.createHTML(a2) : a2;
              return new goog.html.SafeHtml(a2, b2, goog.html.SafeHtml.CONSTRUCTOR_TOKEN_PRIVATE_);
            };
            goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function(a2, b2, c2) {
              var d2 = null;
              var e2 = "<" + a2 + goog.html.SafeHtml.stringifyAttributes(a2, b2);
              null == c2 ? c2 = [] : Array.isArray(c2) || (c2 = [c2]);
              goog.dom.tags.isVoidTag(a2.toLowerCase()) ? (goog.asserts.assert(!c2.length, "Void tag <" + a2 + "> does not allow content."), e2 += ">") : (d2 = goog.html.SafeHtml.concat(c2), e2 += ">" + goog.html.SafeHtml.unwrap(d2) + "</" + a2 + ">", d2 = d2.getDirection());
              (a2 = b2 && b2.dir) && (d2 = /^(ltr|rtl|auto)$/i.test(a2) ? goog.i18n.bidi.Dir.NEUTRAL : null);
              return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(
                e2,
                d2
              );
            };
            goog.html.SafeHtml.stringifyAttributes = function(a2, b2) {
              var c2 = "";
              if (b2) {
                for (var d2 in b2)
                  if (Object.prototype.hasOwnProperty.call(b2, d2)) {
                    if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(d2))
                      throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Invalid attribute name "' + d2 + '".' : "");
                    var e2 = b2[d2];
                    null != e2 && (c2 += " " + goog.html.SafeHtml.getAttrNameAndValue_(a2, d2, e2));
                  }
              }
              return c2;
            };
            goog.html.SafeHtml.combineAttributes = function(a2, b2, c2) {
              var d2 = {}, e2;
              for (e2 in a2)
                Object.prototype.hasOwnProperty.call(a2, e2) && (goog.asserts.assert(e2.toLowerCase() == e2, "Must be lower case"), d2[e2] = a2[e2]);
              for (e2 in b2)
                Object.prototype.hasOwnProperty.call(b2, e2) && (goog.asserts.assert(e2.toLowerCase() == e2, "Must be lower case"), d2[e2] = b2[e2]);
              if (c2) {
                for (e2 in c2)
                  if (Object.prototype.hasOwnProperty.call(c2, e2)) {
                    var f2 = e2.toLowerCase();
                    if (f2 in a2)
                      throw Error(goog.html.SafeHtml.ENABLE_ERROR_MESSAGES ? 'Cannot override "' + f2 + '" attribute, got "' + e2 + '" with value "' + c2[e2] + '"' : "");
                    f2 in b2 && delete d2[f2];
                    d2[e2] = c2[e2];
                  }
              }
              return d2;
            };
            goog.html.SafeHtml.DOCTYPE_HTML = function() {
              return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>", goog.i18n.bidi.Dir.NEUTRAL);
            }();
            goog.html.SafeHtml.EMPTY = new goog.html.SafeHtml(goog.global.trustedTypes && goog.global.trustedTypes.emptyHTML || "", goog.i18n.bidi.Dir.NEUTRAL, goog.html.SafeHtml.CONSTRUCTOR_TOKEN_PRIVATE_);
            goog.html.SafeHtml.BR = function() {
              return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>", goog.i18n.bidi.Dir.NEUTRAL);
            }();
            goog.html.uncheckedconversions = {};
            goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function(a2, b2, c2) {
              goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
              goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
              return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(b2, c2 || null);
            };
            goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function(a2, b2) {
              goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
              goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
              return module$contents$goog$html$SafeScript_SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(b2);
            };
            goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function(a2, b2) {
              goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
              goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
              return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b2);
            };
            goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function(a2, b2) {
              goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
              goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
              return module$contents$goog$html$SafeStyleSheet_SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b2);
            };
            goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function(a2, b2) {
              goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
              goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
              return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b2);
            };
            goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function(a2, b2) {
              goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
              goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
              return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b2);
            };
            goog.dom.safe = {};
            goog.dom.safe.InsertAdjacentHtmlPosition = { AFTERBEGIN: "afterbegin", AFTEREND: "afterend", BEFOREBEGIN: "beforebegin", BEFOREEND: "beforeend" };
            goog.dom.safe.insertAdjacentHtml = function(a2, b2, c2) {
              a2.insertAdjacentHTML(b2, goog.html.SafeHtml.unwrapTrustedHTML(c2));
            };
            goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = { MATH: true, SCRIPT: true, STYLE: true, SVG: true, TEMPLATE: true };
            goog.dom.safe.isInnerHtmlCleanupRecursive_ = goog.functions.cacheReturnValue(function() {
              if (goog.DEBUG && "undefined" === typeof document)
                return false;
              var a2 = document.createElement("div"), b2 = document.createElement("div");
              b2.appendChild(document.createElement("div"));
              a2.appendChild(b2);
              if (goog.DEBUG && !a2.firstChild)
                return false;
              b2 = a2.firstChild.firstChild;
              a2.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(goog.html.SafeHtml.EMPTY);
              return !b2.parentElement;
            });
            goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function(a2, b2) {
              if (goog.dom.safe.isInnerHtmlCleanupRecursive_())
                for (; a2.lastChild; )
                  a2.removeChild(a2.lastChild);
              a2.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(b2);
            };
            goog.dom.safe.setInnerHtml = function(a2, b2) {
              if (goog.asserts.ENABLE_ASSERTS && a2.tagName) {
                var c2 = a2.tagName.toUpperCase();
                if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[c2])
                  throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a2.tagName + ".");
              }
              goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(a2, b2);
            };
            goog.dom.safe.setInnerHtmlFromConstant = function(a2, b2) {
              goog.dom.safe.setInnerHtml(a2, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Constant HTML to be immediatelly used."), goog.string.Const.unwrap(b2)));
            };
            goog.dom.safe.setOuterHtml = function(a2, b2) {
              a2.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(b2);
            };
            goog.dom.safe.setFormElementAction = function(a2, b2) {
              b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
              goog.dom.asserts.assertIsHTMLFormElement(a2).action = goog.html.SafeUrl.unwrap(b2);
            };
            goog.dom.safe.setButtonFormAction = function(a2, b2) {
              b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
              goog.dom.asserts.assertIsHTMLButtonElement(a2).formAction = goog.html.SafeUrl.unwrap(b2);
            };
            goog.dom.safe.setInputFormAction = function(a2, b2) {
              b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
              goog.dom.asserts.assertIsHTMLInputElement(a2).formAction = goog.html.SafeUrl.unwrap(b2);
            };
            goog.dom.safe.setStyle = function(a2, b2) {
              a2.style.cssText = goog.html.SafeStyle.unwrap(b2);
            };
            goog.dom.safe.documentWrite = function(a2, b2) {
              a2.write(goog.html.SafeHtml.unwrapTrustedHTML(b2));
            };
            goog.dom.safe.setAnchorHref = function(a2, b2) {
              goog.dom.asserts.assertIsHTMLAnchorElement(a2);
              b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
              a2.href = goog.html.SafeUrl.unwrap(b2);
            };
            goog.dom.safe.setImageSrc = function(a2, b2) {
              goog.dom.asserts.assertIsHTMLImageElement(a2);
              if (!(b2 instanceof goog.html.SafeUrl)) {
                var c2 = /^data:image\//i.test(b2);
                b2 = goog.html.SafeUrl.sanitizeAssertUnchanged(b2, c2);
              }
              a2.src = goog.html.SafeUrl.unwrap(b2);
            };
            goog.dom.safe.setAudioSrc = function(a2, b2) {
              goog.dom.asserts.assertIsHTMLAudioElement(a2);
              if (!(b2 instanceof goog.html.SafeUrl)) {
                var c2 = /^data:audio\//i.test(b2);
                b2 = goog.html.SafeUrl.sanitizeAssertUnchanged(b2, c2);
              }
              a2.src = goog.html.SafeUrl.unwrap(b2);
            };
            goog.dom.safe.setVideoSrc = function(a2, b2) {
              goog.dom.asserts.assertIsHTMLVideoElement(a2);
              if (!(b2 instanceof goog.html.SafeUrl)) {
                var c2 = /^data:video\//i.test(b2);
                b2 = goog.html.SafeUrl.sanitizeAssertUnchanged(b2, c2);
              }
              a2.src = goog.html.SafeUrl.unwrap(b2);
            };
            goog.dom.safe.setEmbedSrc = function(a2, b2) {
              goog.dom.asserts.assertIsHTMLEmbedElement(a2);
              a2.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b2);
            };
            goog.dom.safe.setFrameSrc = function(a2, b2) {
              goog.dom.asserts.assertIsHTMLFrameElement(a2);
              a2.src = goog.html.TrustedResourceUrl.unwrap(b2);
            };
            goog.dom.safe.setIframeSrc = function(a2, b2) {
              goog.dom.asserts.assertIsHTMLIFrameElement(a2);
              a2.src = goog.html.TrustedResourceUrl.unwrap(b2);
            };
            goog.dom.safe.setIframeSrcdoc = function(a2, b2) {
              goog.dom.asserts.assertIsHTMLIFrameElement(a2);
              a2.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(b2);
            };
            goog.dom.safe.setLinkHrefAndRel = function(a2, b2, c2) {
              goog.dom.asserts.assertIsHTMLLinkElement(a2);
              a2.rel = c2;
              goog.string.internal.caseInsensitiveContains(c2, "stylesheet") ? (goog.asserts.assert(b2 instanceof goog.html.TrustedResourceUrl, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'), a2.href = goog.html.TrustedResourceUrl.unwrap(b2)) : a2.href = b2 instanceof goog.html.TrustedResourceUrl ? goog.html.TrustedResourceUrl.unwrap(b2) : b2 instanceof goog.html.SafeUrl ? goog.html.SafeUrl.unwrap(b2) : goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitizeAssertUnchanged(b2));
            };
            goog.dom.safe.setObjectData = function(a2, b2) {
              goog.dom.asserts.assertIsHTMLObjectElement(a2);
              a2.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b2);
            };
            goog.dom.safe.setScriptSrc = function(a2, b2) {
              goog.dom.asserts.assertIsHTMLScriptElement(a2);
              a2.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b2);
              goog.dom.safe.setNonceForScriptElement_(a2);
            };
            goog.dom.safe.setScriptContent = function(a2, b2) {
              goog.dom.asserts.assertIsHTMLScriptElement(a2);
              a2.textContent = module$contents$goog$html$SafeScript_SafeScript.unwrapTrustedScript(b2);
              goog.dom.safe.setNonceForScriptElement_(a2);
            };
            goog.dom.safe.setNonceForScriptElement_ = function(a2) {
              var b2 = goog.getScriptNonce(a2.ownerDocument && a2.ownerDocument.defaultView);
              b2 && a2.setAttribute("nonce", b2);
            };
            goog.dom.safe.setLocationHref = function(a2, b2) {
              goog.dom.asserts.assertIsLocation(a2);
              b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
              a2.href = goog.html.SafeUrl.unwrap(b2);
            };
            goog.dom.safe.assignLocation = function(a2, b2) {
              goog.dom.asserts.assertIsLocation(a2);
              b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
              a2.assign(goog.html.SafeUrl.unwrap(b2));
            };
            goog.dom.safe.replaceLocation = function(a2, b2) {
              b2 = b2 instanceof goog.html.SafeUrl ? b2 : goog.html.SafeUrl.sanitizeAssertUnchanged(b2);
              a2.replace(goog.html.SafeUrl.unwrap(b2));
            };
            goog.dom.safe.openInWindow = function(a2, b2, c2, d2, e2) {
              a2 = a2 instanceof goog.html.SafeUrl ? a2 : goog.html.SafeUrl.sanitizeAssertUnchanged(a2);
              b2 = b2 || goog.global;
              c2 = c2 instanceof goog.string.Const ? goog.string.Const.unwrap(c2) : c2 || "";
              return b2.open(goog.html.SafeUrl.unwrap(a2), c2, d2, e2);
            };
            goog.dom.safe.parseFromStringHtml = function(a2, b2) {
              return goog.dom.safe.parseFromString(a2, b2, "text/html");
            };
            goog.dom.safe.parseFromString = function(a2, b2, c2) {
              return a2.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(b2), c2);
            };
            goog.dom.safe.createImageFromBlob = function(a2) {
              if (!/^image\/.*/g.test(a2.type))
                throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");
              var b2 = goog.global.URL.createObjectURL(a2);
              a2 = new goog.global.Image();
              a2.onload = function() {
                goog.global.URL.revokeObjectURL(b2);
              };
              goog.dom.safe.setImageSrc(a2, goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Image blob URL."), b2));
              return a2;
            };
            goog.string.DETECT_DOUBLE_ESCAPING = false;
            goog.string.FORCE_NON_DOM_HTML_UNESCAPING = false;
            goog.string.Unicode = { NBSP: " " };
            goog.string.startsWith = goog.string.internal.startsWith;
            goog.string.endsWith = goog.string.internal.endsWith;
            goog.string.caseInsensitiveStartsWith = goog.string.internal.caseInsensitiveStartsWith;
            goog.string.caseInsensitiveEndsWith = goog.string.internal.caseInsensitiveEndsWith;
            goog.string.caseInsensitiveEquals = goog.string.internal.caseInsensitiveEquals;
            goog.string.subs = function(a2, b2) {
              for (var c2 = a2.split("%s"), d2 = "", e2 = Array.prototype.slice.call(arguments, 1); e2.length && 1 < c2.length; )
                d2 += c2.shift() + e2.shift();
              return d2 + c2.join("%s");
            };
            goog.string.collapseWhitespace = function(a2) {
              return a2.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
            };
            goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace;
            goog.string.isEmptyString = function(a2) {
              return 0 == a2.length;
            };
            goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
            goog.string.isEmptyOrWhitespaceSafe = function(a2) {
              return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(a2));
            };
            goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
            goog.string.isBreakingWhitespace = function(a2) {
              return !/[^\t\n\r ]/.test(a2);
            };
            goog.string.isAlpha = function(a2) {
              return !/[^a-zA-Z]/.test(a2);
            };
            goog.string.isNumeric = function(a2) {
              return !/[^0-9]/.test(a2);
            };
            goog.string.isAlphaNumeric = function(a2) {
              return !/[^a-zA-Z0-9]/.test(a2);
            };
            goog.string.isSpace = function(a2) {
              return " " == a2;
            };
            goog.string.isUnicodeChar = function(a2) {
              return 1 == a2.length && " " <= a2 && "~" >= a2 || "" <= a2 && "�" >= a2;
            };
            goog.string.stripNewlines = function(a2) {
              return a2.replace(/(\r\n|\r|\n)+/g, " ");
            };
            goog.string.canonicalizeNewlines = function(a2) {
              return a2.replace(/(\r\n|\r|\n)/g, "\n");
            };
            goog.string.normalizeWhitespace = function(a2) {
              return a2.replace(/\xa0|\s/g, " ");
            };
            goog.string.normalizeSpaces = function(a2) {
              return a2.replace(/\xa0|[ \t]+/g, " ");
            };
            goog.string.collapseBreakingSpaces = function(a2) {
              return a2.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
            };
            goog.string.trim = goog.string.internal.trim;
            goog.string.trimLeft = function(a2) {
              return a2.replace(/^[\s\xa0]+/, "");
            };
            goog.string.trimRight = function(a2) {
              return a2.replace(/[\s\xa0]+$/, "");
            };
            goog.string.caseInsensitiveCompare = goog.string.internal.caseInsensitiveCompare;
            goog.string.numberAwareCompare_ = function(a2, b2, c2) {
              if (a2 == b2)
                return 0;
              if (!a2)
                return -1;
              if (!b2)
                return 1;
              for (var d2 = a2.toLowerCase().match(c2), e2 = b2.toLowerCase().match(c2), f2 = Math.min(d2.length, e2.length), g2 = 0; g2 < f2; g2++) {
                c2 = d2[g2];
                var h = e2[g2];
                if (c2 != h)
                  return a2 = parseInt(c2, 10), !isNaN(a2) && (b2 = parseInt(h, 10), !isNaN(b2) && a2 - b2) ? a2 - b2 : c2 < h ? -1 : 1;
              }
              return d2.length != e2.length ? d2.length - e2.length : a2 < b2 ? -1 : 1;
            };
            goog.string.intAwareCompare = function(a2, b2) {
              return goog.string.numberAwareCompare_(a2, b2, /\d+|\D+/g);
            };
            goog.string.floatAwareCompare = function(a2, b2) {
              return goog.string.numberAwareCompare_(a2, b2, /\d+|\.\d+|\D+/g);
            };
            goog.string.numerateCompare = goog.string.floatAwareCompare;
            goog.string.urlEncode = function(a2) {
              return encodeURIComponent(String(a2));
            };
            goog.string.urlDecode = function(a2) {
              return decodeURIComponent(a2.replace(/\+/g, " "));
            };
            goog.string.newLineToBr = goog.string.internal.newLineToBr;
            goog.string.htmlEscape = function(a2, b2) {
              a2 = goog.string.internal.htmlEscape(a2, b2);
              goog.string.DETECT_DOUBLE_ESCAPING && (a2 = a2.replace(goog.string.E_RE_, "&#101;"));
              return a2;
            };
            goog.string.E_RE_ = /e/g;
            goog.string.unescapeEntities = function(a2) {
              return goog.string.contains(a2, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(a2) : goog.string.unescapePureXmlEntities_(a2) : a2;
            };
            goog.string.unescapeEntitiesWithDocument = function(a2, b2) {
              return goog.string.contains(a2, "&") ? goog.string.unescapeEntitiesUsingDom_(a2, b2) : a2;
            };
            goog.string.unescapeEntitiesUsingDom_ = function(a2, b2) {
              var c2 = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
              var d2 = b2 ? b2.createElement("div") : goog.global.document.createElement("div");
              return a2.replace(goog.string.HTML_ENTITY_PATTERN_, function(e2, f2) {
                var g2 = c2[e2];
                if (g2)
                  return g2;
                "#" == f2.charAt(0) && (f2 = Number("0" + f2.substr(1)), isNaN(f2) || (g2 = String.fromCharCode(f2)));
                g2 || (goog.dom.safe.setInnerHtml(d2, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(
                  goog.string.Const.from("Single HTML entity."),
                  e2 + " "
                )), g2 = d2.firstChild.nodeValue.slice(0, -1));
                return c2[e2] = g2;
              });
            };
            goog.string.unescapePureXmlEntities_ = function(a2) {
              return a2.replace(/&([^;]+);/g, function(b2, c2) {
                switch (c2) {
                  case "amp":
                    return "&";
                  case "lt":
                    return "<";
                  case "gt":
                    return ">";
                  case "quot":
                    return '"';
                  default:
                    return "#" != c2.charAt(0) || (c2 = Number("0" + c2.substr(1)), isNaN(c2)) ? b2 : String.fromCharCode(c2);
                }
              });
            };
            goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
            goog.string.whitespaceEscape = function(a2, b2) {
              return goog.string.newLineToBr(a2.replace(/  /g, " &#160;"), b2);
            };
            goog.string.preserveSpaces = function(a2) {
              return a2.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
            };
            goog.string.stripQuotes = function(a2, b2) {
              for (var c2 = b2.length, d2 = 0; d2 < c2; d2++) {
                var e2 = 1 == c2 ? b2 : b2.charAt(d2);
                if (a2.charAt(0) == e2 && a2.charAt(a2.length - 1) == e2)
                  return a2.substring(1, a2.length - 1);
              }
              return a2;
            };
            goog.string.truncate = function(a2, b2, c2) {
              c2 && (a2 = goog.string.unescapeEntities(a2));
              a2.length > b2 && (a2 = a2.substring(0, b2 - 3) + "...");
              c2 && (a2 = goog.string.htmlEscape(a2));
              return a2;
            };
            goog.string.truncateMiddle = function(a2, b2, c2, d2) {
              c2 && (a2 = goog.string.unescapeEntities(a2));
              if (d2 && a2.length > b2) {
                d2 > b2 && (d2 = b2);
                var e2 = a2.length - d2;
                a2 = a2.substring(0, b2 - d2) + "..." + a2.substring(e2);
              } else
                a2.length > b2 && (d2 = Math.floor(b2 / 2), e2 = a2.length - d2, a2 = a2.substring(0, d2 + b2 % 2) + "..." + a2.substring(e2));
              c2 && (a2 = goog.string.htmlEscape(a2));
              return a2;
            };
            goog.string.specialEscapeChars_ = { "\0": "\\0", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "	": "\\t", "\v": "\\x0B", '"': '\\"', "\\": "\\\\", "<": "\\u003C" };
            goog.string.jsEscapeCache_ = { "'": "\\'" };
            goog.string.quote = function(a2) {
              a2 = String(a2);
              for (var b2 = ['"'], c2 = 0; c2 < a2.length; c2++) {
                var d2 = a2.charAt(c2), e2 = d2.charCodeAt(0);
                b2[c2 + 1] = goog.string.specialEscapeChars_[d2] || (31 < e2 && 127 > e2 ? d2 : goog.string.escapeChar(d2));
              }
              b2.push('"');
              return b2.join("");
            };
            goog.string.escapeString = function(a2) {
              for (var b2 = [], c2 = 0; c2 < a2.length; c2++)
                b2[c2] = goog.string.escapeChar(a2.charAt(c2));
              return b2.join("");
            };
            goog.string.escapeChar = function(a2) {
              if (a2 in goog.string.jsEscapeCache_)
                return goog.string.jsEscapeCache_[a2];
              if (a2 in goog.string.specialEscapeChars_)
                return goog.string.jsEscapeCache_[a2] = goog.string.specialEscapeChars_[a2];
              var b2 = a2.charCodeAt(0);
              if (31 < b2 && 127 > b2)
                var c2 = a2;
              else {
                if (256 > b2) {
                  if (c2 = "\\x", 16 > b2 || 256 < b2)
                    c2 += "0";
                } else
                  c2 = "\\u", 4096 > b2 && (c2 += "0");
                c2 += b2.toString(16).toUpperCase();
              }
              return goog.string.jsEscapeCache_[a2] = c2;
            };
            goog.string.contains = goog.string.internal.contains;
            goog.string.caseInsensitiveContains = goog.string.internal.caseInsensitiveContains;
            goog.string.countOf = function(a2, b2) {
              return a2 && b2 ? a2.split(b2).length - 1 : 0;
            };
            goog.string.removeAt = function(a2, b2, c2) {
              var d2 = a2;
              0 <= b2 && b2 < a2.length && 0 < c2 && (d2 = a2.substr(0, b2) + a2.substr(b2 + c2, a2.length - b2 - c2));
              return d2;
            };
            goog.string.remove = function(a2, b2) {
              return a2.replace(b2, "");
            };
            goog.string.removeAll = function(a2, b2) {
              b2 = new RegExp(goog.string.regExpEscape(b2), "g");
              return a2.replace(b2, "");
            };
            goog.string.replaceAll = function(a2, b2, c2) {
              b2 = new RegExp(goog.string.regExpEscape(b2), "g");
              return a2.replace(b2, c2.replace(/\$/g, "$$$$"));
            };
            goog.string.regExpEscape = function(a2) {
              return String(a2).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
            };
            goog.string.repeat = String.prototype.repeat ? function(a2, b2) {
              return a2.repeat(b2);
            } : function(a2, b2) {
              return Array(b2 + 1).join(a2);
            };
            goog.string.padNumber = function(a2, b2, c2) {
              a2 = void 0 !== c2 ? a2.toFixed(c2) : String(a2);
              c2 = a2.indexOf(".");
              -1 == c2 && (c2 = a2.length);
              return goog.string.repeat("0", Math.max(0, b2 - c2)) + a2;
            };
            goog.string.makeSafe = function(a2) {
              return null == a2 ? "" : String(a2);
            };
            goog.string.buildString = function(a2) {
              return Array.prototype.join.call(arguments, "");
            };
            goog.string.getRandomString = function() {
              return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36);
            };
            goog.string.compareVersions = goog.string.internal.compareVersions;
            goog.string.hashCode = function(a2) {
              for (var b2 = 0, c2 = 0; c2 < a2.length; ++c2)
                b2 = 31 * b2 + a2.charCodeAt(c2) >>> 0;
              return b2;
            };
            goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
            goog.string.createUniqueString = function() {
              return "goog_" + goog.string.uniqueStringCounter_++;
            };
            goog.string.toNumber = function(a2) {
              var b2 = Number(a2);
              return 0 == b2 && goog.string.isEmptyOrWhitespace(a2) ? NaN : b2;
            };
            goog.string.isLowerCamelCase = function(a2) {
              return /^[a-z]+([A-Z][a-z]*)*$/.test(a2);
            };
            goog.string.isUpperCamelCase = function(a2) {
              return /^([A-Z][a-z]*)+$/.test(a2);
            };
            goog.string.toCamelCase = function(a2) {
              return String(a2).replace(/\-([a-z])/g, function(b2, c2) {
                return c2.toUpperCase();
              });
            };
            goog.string.toSelectorCase = function(a2) {
              return String(a2).replace(/([A-Z])/g, "-$1").toLowerCase();
            };
            goog.string.toTitleCase = function(a2, b2) {
              b2 = "string" === typeof b2 ? goog.string.regExpEscape(b2) : "\\s";
              return a2.replace(new RegExp("(^" + (b2 ? "|[" + b2 + "]+" : "") + ")([a-z])", "g"), function(c2, d2, e2) {
                return d2 + e2.toUpperCase();
              });
            };
            goog.string.capitalize = function(a2) {
              return String(a2.charAt(0)).toUpperCase() + String(a2.substr(1)).toLowerCase();
            };
            goog.string.parseInt = function(a2) {
              isFinite(a2) && (a2 = String(a2));
              return "string" === typeof a2 ? /^\s*-?0x/i.test(a2) ? parseInt(a2, 16) : parseInt(a2, 10) : NaN;
            };
            goog.string.splitLimit = function(a2, b2, c2) {
              a2 = a2.split(b2);
              for (var d2 = []; 0 < c2 && a2.length; )
                d2.push(a2.shift()), c2--;
              a2.length && d2.push(a2.join(b2));
              return d2;
            };
            goog.string.lastComponent = function(a2, b2) {
              if (b2)
                "string" == typeof b2 && (b2 = [b2]);
              else
                return a2;
              for (var c2 = -1, d2 = 0; d2 < b2.length; d2++)
                if ("" != b2[d2]) {
                  var e2 = a2.lastIndexOf(b2[d2]);
                  e2 > c2 && (c2 = e2);
                }
              return -1 == c2 ? a2 : a2.slice(c2 + 1);
            };
            goog.string.editDistance = function(a2, b2) {
              var c2 = [], d2 = [];
              if (a2 == b2)
                return 0;
              if (!a2.length || !b2.length)
                return Math.max(a2.length, b2.length);
              for (var e2 = 0; e2 < b2.length + 1; e2++)
                c2[e2] = e2;
              for (e2 = 0; e2 < a2.length; e2++) {
                d2[0] = e2 + 1;
                for (var f2 = 0; f2 < b2.length; f2++)
                  d2[f2 + 1] = Math.min(d2[f2] + 1, c2[f2 + 1] + 1, c2[f2] + Number(a2[e2] != b2[f2]));
                for (f2 = 0; f2 < c2.length; f2++)
                  c2[f2] = d2[f2];
              }
              return d2[b2.length];
            };
            goog.proto2 = {};
            goog.proto2.Descriptor = function(a2, b2, c2) {
              this.messageType_ = a2;
              this.name_ = b2.name || null;
              this.fullName_ = b2.fullName || null;
              this.containingType_ = b2.containingType;
              this.fields_ = {};
              for (a2 = 0; a2 < c2.length; a2++)
                b2 = c2[a2], this.fields_[b2.getTag()] = b2;
            };
            goog.proto2.Descriptor.prototype.getName = function() {
              return this.name_;
            };
            goog.proto2.Descriptor.prototype.getFullName = function() {
              return this.fullName_;
            };
            goog.proto2.Descriptor.prototype.getContainingType = function() {
              return this.containingType_ ? this.containingType_.getDescriptor() : null;
            };
            goog.proto2.Descriptor.prototype.getFields = function() {
              var a2 = goog.object.getValues(this.fields_);
              module$contents$goog$array_sort(a2, function(b2, c2) {
                return b2.getTag() - c2.getTag();
              });
              return a2;
            };
            goog.proto2.Descriptor.prototype.getFieldsMap = function() {
              return this.fields_;
            };
            goog.proto2.Descriptor.prototype.findFieldByName = function(a2) {
              return goog.object.findValue(this.fields_, function(b2, c2, d2) {
                return b2.getName() == a2;
              }) || null;
            };
            goog.proto2.Descriptor.prototype.findFieldByTag = function(a2) {
              goog.asserts.assert(goog.string.isNumeric(a2));
              return this.fields_[parseInt(a2, 10)] || null;
            };
            goog.proto2.Descriptor.prototype.createMessageInstance = function() {
              return new this.messageType_();
            };
            goog.proto2.FieldDescriptor = function(a2, b2, c2) {
              this.parent_ = a2;
              goog.asserts.assert(goog.string.isNumeric(b2));
              this.tag_ = b2;
              this.name_ = c2.name;
              this.isPacked_ = !!c2.packed;
              this.isRepeated_ = !!c2.repeated;
              this.isRequired_ = !!c2.required;
              this.fieldType_ = c2.fieldType;
              this.nativeType_ = c2.type;
              this.deserializationConversionPermitted_ = false;
              switch (this.fieldType_) {
                case goog.proto2.FieldDescriptor.FieldType.INT64:
                case goog.proto2.FieldDescriptor.FieldType.UINT64:
                case goog.proto2.FieldDescriptor.FieldType.FIXED64:
                case goog.proto2.FieldDescriptor.FieldType.SFIXED64:
                case goog.proto2.FieldDescriptor.FieldType.SINT64:
                case goog.proto2.FieldDescriptor.FieldType.FLOAT:
                case goog.proto2.FieldDescriptor.FieldType.DOUBLE:
                  this.deserializationConversionPermitted_ = true;
              }
              this.defaultValue_ = c2.defaultValue;
            };
            goog.proto2.FieldDescriptor.FieldType = { DOUBLE: 1, FLOAT: 2, INT64: 3, UINT64: 4, INT32: 5, FIXED64: 6, FIXED32: 7, BOOL: 8, STRING: 9, GROUP: 10, MESSAGE: 11, BYTES: 12, UINT32: 13, ENUM: 14, SFIXED32: 15, SFIXED64: 16, SINT32: 17, SINT64: 18 };
            goog.proto2.FieldDescriptor.prototype.getTag = function() {
              return this.tag_;
            };
            goog.proto2.FieldDescriptor.prototype.getContainingType = function() {
              return this.parent_.prototype.getDescriptor();
            };
            goog.proto2.FieldDescriptor.prototype.getName = function() {
              return this.name_;
            };
            goog.proto2.FieldDescriptor.prototype.getDefaultValue = function() {
              if (void 0 === this.defaultValue_) {
                var a2 = this.nativeType_;
                if (a2 === Boolean)
                  this.defaultValue_ = false;
                else if (a2 === Number)
                  this.defaultValue_ = 0;
                else if (a2 === String)
                  this.defaultValue_ = this.deserializationConversionPermitted_ ? "0" : "";
                else
                  return new a2();
              }
              return this.defaultValue_;
            };
            goog.proto2.FieldDescriptor.prototype.getFieldType = function() {
              return this.fieldType_;
            };
            goog.proto2.FieldDescriptor.prototype.getNativeType = function() {
              return this.nativeType_;
            };
            goog.proto2.FieldDescriptor.prototype.deserializationConversionPermitted = function() {
              return this.deserializationConversionPermitted_;
            };
            goog.proto2.FieldDescriptor.prototype.getFieldMessageType = function() {
              return this.nativeType_.prototype.getDescriptor();
            };
            goog.proto2.FieldDescriptor.prototype.isCompositeType = function() {
              return this.fieldType_ == goog.proto2.FieldDescriptor.FieldType.MESSAGE || this.fieldType_ == goog.proto2.FieldDescriptor.FieldType.GROUP;
            };
            goog.proto2.FieldDescriptor.prototype.isPacked = function() {
              return this.isPacked_;
            };
            goog.proto2.FieldDescriptor.prototype.isRepeated = function() {
              return this.isRepeated_;
            };
            goog.proto2.FieldDescriptor.prototype.isRequired = function() {
              return this.isRequired_;
            };
            goog.proto2.FieldDescriptor.prototype.isOptional = function() {
              return !this.isRepeated_ && !this.isRequired_;
            };
            goog.proto2.Message = function() {
              this.values_ = {};
              this.fields_ = this.getDescriptor().getFieldsMap();
              this.deserializedFields_ = this.lazyDeserializer_ = null;
            };
            goog.proto2.Message.FieldType = { DOUBLE: 1, FLOAT: 2, INT64: 3, UINT64: 4, INT32: 5, FIXED64: 6, FIXED32: 7, BOOL: 8, STRING: 9, GROUP: 10, MESSAGE: 11, BYTES: 12, UINT32: 13, ENUM: 14, SFIXED32: 15, SFIXED64: 16, SINT32: 17, SINT64: 18 };
            goog.proto2.Message.prototype.initializeForLazyDeserializer = function(a2, b2) {
              this.lazyDeserializer_ = a2;
              this.values_ = b2;
              this.deserializedFields_ = {};
            };
            goog.proto2.Message.prototype.setUnknown = function(a2, b2) {
              goog.asserts.assert(!this.fields_[a2], "Field is not unknown in this message");
              goog.asserts.assert(1 <= a2, "Tag " + a2 + ' has value "' + b2 + '" in descriptor ' + this.getDescriptor().getName());
              goog.asserts.assert(null !== b2, "Value cannot be null");
              this.values_[a2] = b2;
              this.deserializedFields_ && delete this.deserializedFields_[a2];
            };
            goog.proto2.Message.prototype.forEachUnknown = function(a2, b2) {
              b2 = b2 || this;
              for (var c2 in this.values_) {
                var d2 = Number(c2);
                this.fields_[d2] || a2.call(b2, d2, this.values_[c2]);
              }
            };
            goog.proto2.Message.prototype.getDescriptor = goog.abstractMethod;
            goog.proto2.Message.prototype.has = function(a2) {
              goog.asserts.assert(a2.getContainingType() == this.getDescriptor(), "The current message does not contain the given field");
              return this.has$Value(a2.getTag());
            };
            goog.proto2.Message.prototype.arrayOf = function(a2) {
              goog.asserts.assert(a2.getContainingType() == this.getDescriptor(), "The current message does not contain the given field");
              return this.array$Values(a2.getTag());
            };
            goog.proto2.Message.prototype.countOf = function(a2) {
              goog.asserts.assert(a2.getContainingType() == this.getDescriptor(), "The current message does not contain the given field");
              return this.count$Values(a2.getTag());
            };
            goog.proto2.Message.prototype.get = function(a2, b2) {
              goog.asserts.assert(a2.getContainingType() == this.getDescriptor(), "The current message does not contain the given field");
              return this.get$Value(a2.getTag(), b2);
            };
            goog.proto2.Message.prototype.getOrDefault = function(a2, b2) {
              goog.asserts.assert(a2.getContainingType() == this.getDescriptor(), "The current message does not contain the given field");
              return this.get$ValueOrDefault(a2.getTag(), b2);
            };
            goog.proto2.Message.prototype.set = function(a2, b2) {
              goog.asserts.assert(a2.getContainingType() == this.getDescriptor(), "The current message does not contain the given field");
              this.set$Value(a2.getTag(), b2);
            };
            goog.proto2.Message.prototype.add = function(a2, b2) {
              goog.asserts.assert(a2.getContainingType() == this.getDescriptor(), "The current message does not contain the given field");
              this.add$Value(a2.getTag(), b2);
            };
            goog.proto2.Message.prototype.clear = function(a2) {
              goog.asserts.assert(a2.getContainingType() == this.getDescriptor(), "The current message does not contain the given field");
              this.clear$Field(a2.getTag());
            };
            goog.proto2.Message.prototype.equals = function(a2) {
              if (!a2 || this.constructor != a2.constructor)
                return false;
              for (var b2 = this.getDescriptor().getFields(), c2 = 0; c2 < b2.length; c2++) {
                var d2 = b2[c2], e2 = d2.getTag();
                if (this.has$Value(e2) != a2.has$Value(e2))
                  return false;
                if (this.has$Value(e2)) {
                  var f2 = d2.isCompositeType(), g2 = this.getValueForTag_(e2);
                  e2 = a2.getValueForTag_(e2);
                  if (d2.isRepeated()) {
                    if (g2.length != e2.length)
                      return false;
                    for (d2 = 0; d2 < g2.length; d2++) {
                      var h = g2[d2], k = e2[d2];
                      if (f2 ? !h.equals(k) : h != k)
                        return false;
                    }
                  } else if (f2 ? !g2.equals(e2) : g2 != e2)
                    return false;
                }
              }
              return true;
            };
            goog.proto2.Message.prototype.copyFrom = function(a2) {
              goog.asserts.assert(this.constructor == a2.constructor, "The source message must have the same type.");
              this != a2 && (this.values_ = {}, this.deserializedFields_ && (this.deserializedFields_ = {}), this.mergeFrom(a2));
            };
            goog.proto2.Message.prototype.mergeFrom = function(a2) {
              goog.asserts.assert(this.constructor == a2.constructor, "The source message must have the same type.");
              for (var b2 = this.getDescriptor().getFields(), c2 = 0; c2 < b2.length; c2++) {
                var d2 = b2[c2], e2 = d2.getTag();
                if (a2.has$Value(e2)) {
                  this.deserializedFields_ && delete this.deserializedFields_[d2.getTag()];
                  var f2 = d2.isCompositeType();
                  if (d2.isRepeated()) {
                    d2 = a2.array$Values(e2);
                    for (var g2 = 0; g2 < d2.length; g2++)
                      this.add$Value(e2, f2 ? d2[g2].clone() : d2[g2]);
                  } else
                    d2 = a2.getValueForTag_(e2), f2 ? (f2 = this.getValueForTag_(e2)) ? f2.mergeFrom(d2) : this.set$Value(e2, d2.clone()) : this.set$Value(e2, d2);
                }
              }
            };
            goog.proto2.Message.prototype.clone = function() {
              var a2 = new this.constructor();
              a2.copyFrom(this);
              return a2;
            };
            goog.proto2.Message.prototype.initDefaults = function(a2) {
              for (var b2 = this.getDescriptor().getFields(), c2 = 0; c2 < b2.length; c2++) {
                var d2 = b2[c2], e2 = d2.getTag(), f2 = d2.isCompositeType();
                this.has$Value(e2) || d2.isRepeated() || (f2 ? this.values_[e2] = new (d2.getNativeType())() : a2 && (this.values_[e2] = d2.getDefaultValue()));
                if (f2)
                  if (d2.isRepeated())
                    for (d2 = this.array$Values(e2), e2 = 0; e2 < d2.length; e2++)
                      d2[e2].initDefaults(a2);
                  else
                    this.get$Value(e2).initDefaults(a2);
              }
            };
            goog.proto2.Message.prototype.has$Value = function(a2) {
              return null != this.values_[a2];
            };
            goog.proto2.Message.prototype.getValueForTag_ = function(a2) {
              var b2 = this.values_[a2];
              return null == b2 ? null : this.lazyDeserializer_ ? a2 in this.deserializedFields_ ? this.deserializedFields_[a2] : (b2 = this.lazyDeserializer_.deserializeField(this, this.fields_[a2], b2), this.deserializedFields_[a2] = b2) : b2;
            };
            goog.proto2.Message.prototype.get$Value = function(a2, b2) {
              var c2 = this.getValueForTag_(a2);
              return this.fields_[a2].isRepeated() ? (a2 = b2 || 0, goog.asserts.assert(0 <= a2 && a2 < c2.length, "Given index %s is out of bounds.  Repeated field length: %s", a2, c2.length), c2[a2]) : c2;
            };
            goog.proto2.Message.prototype.get$ValueOrDefault = function(a2, b2) {
              return this.has$Value(a2) ? this.get$Value(a2, b2) : this.fields_[a2].getDefaultValue();
            };
            goog.proto2.Message.prototype.array$Values = function(a2) {
              return this.getValueForTag_(a2) || [];
            };
            goog.proto2.Message.prototype.count$Values = function(a2) {
              return this.fields_[a2].isRepeated() ? this.has$Value(a2) ? this.values_[a2].length : 0 : this.has$Value(a2) ? 1 : 0;
            };
            goog.proto2.Message.prototype.set$Value = function(a2, b2) {
              goog.asserts.ENABLE_ASSERTS && this.checkFieldType_(this.fields_[a2], b2);
              this.values_[a2] = b2;
              this.deserializedFields_ && (this.deserializedFields_[a2] = b2);
            };
            goog.proto2.Message.prototype.add$Value = function(a2, b2) {
              goog.asserts.ENABLE_ASSERTS && this.checkFieldType_(this.fields_[a2], b2);
              this.values_[a2] || (this.values_[a2] = []);
              this.values_[a2].push(b2);
              this.deserializedFields_ && delete this.deserializedFields_[a2];
            };
            goog.proto2.Message.prototype.checkFieldType_ = function(a2, b2) {
              a2.getFieldType() == goog.proto2.FieldDescriptor.FieldType.ENUM ? goog.asserts.assertNumber(b2) : goog.asserts.assert(Object(b2).constructor == a2.getNativeType());
            };
            goog.proto2.Message.prototype.clear$Field = function(a2) {
              delete this.values_[a2];
              this.deserializedFields_ && delete this.deserializedFields_[a2];
            };
            goog.proto2.Message.createDescriptor = function(a2, b2) {
              var c2 = [], d2 = b2[0], e2;
              for (e2 in b2)
                0 != e2 && c2.push(new goog.proto2.FieldDescriptor(a2, e2, b2[e2]));
              return new goog.proto2.Descriptor(a2, d2, c2);
            };
            goog.proto2.Serializer = function() {
            };
            goog.proto2.Serializer.DECODE_SYMBOLIC_ENUMS = false;
            goog.proto2.Serializer.prototype.serialize = goog.abstractMethod;
            goog.proto2.Serializer.prototype.getSerializedValue = function(a2, b2) {
              return a2.isCompositeType() ? this.serialize(b2) : "number" !== typeof b2 || isFinite(b2) ? b2 : b2.toString();
            };
            goog.proto2.Serializer.prototype.deserialize = function(a2, b2) {
              a2 = a2.createMessageInstance();
              this.deserializeTo(a2, b2);
              goog.asserts.assert(a2 instanceof goog.proto2.Message);
              return a2;
            };
            goog.proto2.Serializer.prototype.deserializeTo = goog.abstractMethod;
            goog.proto2.Serializer.prototype.getDeserializedValue = function(a2, b2) {
              if (a2.isCompositeType())
                return b2 instanceof goog.proto2.Message ? b2 : this.deserialize(a2.getFieldMessageType(), b2);
              if (a2.getFieldType() == goog.proto2.FieldDescriptor.FieldType.ENUM)
                return goog.proto2.Serializer.DECODE_SYMBOLIC_ENUMS && "string" === typeof b2 && (a2 = a2.getNativeType(), a2.hasOwnProperty(b2)) ? a2[b2] : "string" === typeof b2 && goog.proto2.Serializer.INTEGER_REGEX.test(b2) && (a2 = Number(b2), 0 < a2) ? a2 : b2;
              if (!a2.deserializationConversionPermitted())
                return b2;
              a2 = a2.getNativeType();
              if (a2 === String) {
                if ("number" === typeof b2)
                  return String(b2);
              } else if (a2 === Number && "string" === typeof b2 && ("Infinity" === b2 || "-Infinity" === b2 || "NaN" === b2 || goog.proto2.Serializer.INTEGER_REGEX.test(b2)))
                return Number(b2);
              return b2;
            };
            goog.proto2.Serializer.INTEGER_REGEX = /^-?[0-9]+$/;
            goog.proto2.LazyDeserializer = function() {
            };
            goog.inherits(goog.proto2.LazyDeserializer, goog.proto2.Serializer);
            goog.proto2.LazyDeserializer.prototype.deserialize = function(a2, b2) {
              a2 = a2.createMessageInstance();
              a2.initializeForLazyDeserializer(this, b2);
              goog.asserts.assert(a2 instanceof goog.proto2.Message);
              return a2;
            };
            goog.proto2.LazyDeserializer.prototype.deserializeTo = function(a2, b2) {
              throw Error("Unimplemented");
            };
            goog.proto2.LazyDeserializer.prototype.deserializeField = goog.abstractMethod;
            goog.proto2.PbLiteSerializer = function() {
            };
            goog.inherits(goog.proto2.PbLiteSerializer, goog.proto2.LazyDeserializer);
            goog.proto2.PbLiteSerializer.prototype.zeroIndexing_ = false;
            goog.proto2.PbLiteSerializer.prototype.setZeroIndexed = function(a2) {
              this.zeroIndexing_ = a2;
            };
            goog.proto2.PbLiteSerializer.prototype.serialize = function(a2) {
              for (var b2 = a2.getDescriptor().getFields(), c2 = [], d2 = this.zeroIndexing_, e2 = 0; e2 < b2.length; e2++) {
                var f2 = b2[e2];
                if (a2.has(f2)) {
                  var g2 = f2.getTag();
                  g2 = d2 ? g2 - 1 : g2;
                  if (f2.isRepeated()) {
                    c2[g2] = [];
                    for (var h = 0; h < a2.countOf(f2); h++)
                      c2[g2][h] = this.getSerializedValue(f2, a2.get(f2, h));
                  } else
                    c2[g2] = this.getSerializedValue(f2, a2.get(f2));
                }
              }
              a2.forEachUnknown(function(k, l) {
                c2[d2 ? k - 1 : k] = l;
              });
              return c2;
            };
            goog.proto2.PbLiteSerializer.prototype.deserializeField = function(a2, b2, c2) {
              if (null == c2)
                return c2;
              if (b2.isRepeated()) {
                a2 = [];
                goog.asserts.assert(Array.isArray(c2), "Value must be array: %s", c2);
                for (var d2 = 0; d2 < c2.length; d2++)
                  a2[d2] = this.getDeserializedValue(b2, c2[d2]);
                return a2;
              }
              return this.getDeserializedValue(b2, c2);
            };
            goog.proto2.PbLiteSerializer.prototype.getSerializedValue = function(a2, b2) {
              return a2.getFieldType() == goog.proto2.FieldDescriptor.FieldType.BOOL ? b2 ? 1 : 0 : goog.proto2.Serializer.prototype.getSerializedValue.apply(this, arguments);
            };
            goog.proto2.PbLiteSerializer.prototype.getDeserializedValue = function(a2, b2) {
              return a2.getFieldType() == goog.proto2.FieldDescriptor.FieldType.BOOL ? (goog.asserts.assert("number" === typeof b2 || "boolean" === typeof b2, "Value is expected to be a number or boolean"), !!b2) : goog.proto2.Serializer.prototype.getDeserializedValue.apply(this, arguments);
            };
            goog.proto2.PbLiteSerializer.prototype.deserialize = function(a2, b2) {
              var c2 = b2;
              if (this.zeroIndexing_) {
                c2 = [];
                for (var d2 in b2)
                  c2[parseInt(d2, 10) + 1] = b2[d2];
              }
              return goog.proto2.PbLiteSerializer.superClass_.deserialize.call(this, a2, c2);
            };
            goog.string.StringBuffer = function(a2, b2) {
              null != a2 && this.append.apply(this, arguments);
            };
            goog.string.StringBuffer.prototype.buffer_ = "";
            goog.string.StringBuffer.prototype.set = function(a2) {
              this.buffer_ = "" + a2;
            };
            goog.string.StringBuffer.prototype.append = function(a2, b2, c2) {
              this.buffer_ += String(a2);
              if (null != b2)
                for (var d2 = 1; d2 < arguments.length; d2++)
                  this.buffer_ += arguments[d2];
              return this;
            };
            goog.string.StringBuffer.prototype.clear = function() {
              this.buffer_ = "";
            };
            goog.string.StringBuffer.prototype.getLength = function() {
              return this.buffer_.length;
            };
            goog.string.StringBuffer.prototype.toString = function() {
              return this.buffer_;
            };
            var i18n = { phonenumbers: {} };
            i18n.phonenumbers.NumberFormat = function() {
              goog.proto2.Message.call(this);
            };
            goog.inherits(i18n.phonenumbers.NumberFormat, goog.proto2.Message);
            i18n.phonenumbers.NumberFormat.descriptor_ = null;
            i18n.phonenumbers.NumberFormat.prototype.getPattern = function() {
              return this.get$Value(1);
            };
            i18n.phonenumbers.NumberFormat.prototype.getPatternOrDefault = function() {
              return this.get$ValueOrDefault(1);
            };
            i18n.phonenumbers.NumberFormat.prototype.setPattern = function(a2) {
              this.set$Value(1, a2);
            };
            i18n.phonenumbers.NumberFormat.prototype.hasPattern = function() {
              return this.has$Value(1);
            };
            i18n.phonenumbers.NumberFormat.prototype.patternCount = function() {
              return this.count$Values(1);
            };
            i18n.phonenumbers.NumberFormat.prototype.clearPattern = function() {
              this.clear$Field(1);
            };
            i18n.phonenumbers.NumberFormat.prototype.getFormat = function() {
              return this.get$Value(2);
            };
            i18n.phonenumbers.NumberFormat.prototype.getFormatOrDefault = function() {
              return this.get$ValueOrDefault(2);
            };
            i18n.phonenumbers.NumberFormat.prototype.setFormat = function(a2) {
              this.set$Value(2, a2);
            };
            i18n.phonenumbers.NumberFormat.prototype.hasFormat = function() {
              return this.has$Value(2);
            };
            i18n.phonenumbers.NumberFormat.prototype.formatCount = function() {
              return this.count$Values(2);
            };
            i18n.phonenumbers.NumberFormat.prototype.clearFormat = function() {
              this.clear$Field(2);
            };
            i18n.phonenumbers.NumberFormat.prototype.getLeadingDigitsPattern = function(a2) {
              return this.get$Value(3, a2);
            };
            i18n.phonenumbers.NumberFormat.prototype.getLeadingDigitsPatternOrDefault = function(a2) {
              return this.get$ValueOrDefault(3, a2);
            };
            i18n.phonenumbers.NumberFormat.prototype.addLeadingDigitsPattern = function(a2) {
              this.add$Value(3, a2);
            };
            i18n.phonenumbers.NumberFormat.prototype.leadingDigitsPatternArray = function() {
              return this.array$Values(3);
            };
            i18n.phonenumbers.NumberFormat.prototype.hasLeadingDigitsPattern = function() {
              return this.has$Value(3);
            };
            i18n.phonenumbers.NumberFormat.prototype.leadingDigitsPatternCount = function() {
              return this.count$Values(3);
            };
            i18n.phonenumbers.NumberFormat.prototype.clearLeadingDigitsPattern = function() {
              this.clear$Field(3);
            };
            i18n.phonenumbers.NumberFormat.prototype.getNationalPrefixFormattingRule = function() {
              return this.get$Value(4);
            };
            i18n.phonenumbers.NumberFormat.prototype.getNationalPrefixFormattingRuleOrDefault = function() {
              return this.get$ValueOrDefault(4);
            };
            i18n.phonenumbers.NumberFormat.prototype.setNationalPrefixFormattingRule = function(a2) {
              this.set$Value(4, a2);
            };
            i18n.phonenumbers.NumberFormat.prototype.hasNationalPrefixFormattingRule = function() {
              return this.has$Value(4);
            };
            i18n.phonenumbers.NumberFormat.prototype.nationalPrefixFormattingRuleCount = function() {
              return this.count$Values(4);
            };
            i18n.phonenumbers.NumberFormat.prototype.clearNationalPrefixFormattingRule = function() {
              this.clear$Field(4);
            };
            i18n.phonenumbers.NumberFormat.prototype.getNationalPrefixOptionalWhenFormatting = function() {
              return this.get$Value(6);
            };
            i18n.phonenumbers.NumberFormat.prototype.getNationalPrefixOptionalWhenFormattingOrDefault = function() {
              return this.get$ValueOrDefault(6);
            };
            i18n.phonenumbers.NumberFormat.prototype.setNationalPrefixOptionalWhenFormatting = function(a2) {
              this.set$Value(6, a2);
            };
            i18n.phonenumbers.NumberFormat.prototype.hasNationalPrefixOptionalWhenFormatting = function() {
              return this.has$Value(6);
            };
            i18n.phonenumbers.NumberFormat.prototype.nationalPrefixOptionalWhenFormattingCount = function() {
              return this.count$Values(6);
            };
            i18n.phonenumbers.NumberFormat.prototype.clearNationalPrefixOptionalWhenFormatting = function() {
              this.clear$Field(6);
            };
            i18n.phonenumbers.NumberFormat.prototype.getDomesticCarrierCodeFormattingRule = function() {
              return this.get$Value(5);
            };
            i18n.phonenumbers.NumberFormat.prototype.getDomesticCarrierCodeFormattingRuleOrDefault = function() {
              return this.get$ValueOrDefault(5);
            };
            i18n.phonenumbers.NumberFormat.prototype.setDomesticCarrierCodeFormattingRule = function(a2) {
              this.set$Value(5, a2);
            };
            i18n.phonenumbers.NumberFormat.prototype.hasDomesticCarrierCodeFormattingRule = function() {
              return this.has$Value(5);
            };
            i18n.phonenumbers.NumberFormat.prototype.domesticCarrierCodeFormattingRuleCount = function() {
              return this.count$Values(5);
            };
            i18n.phonenumbers.NumberFormat.prototype.clearDomesticCarrierCodeFormattingRule = function() {
              this.clear$Field(5);
            };
            i18n.phonenumbers.PhoneNumberDesc = function() {
              goog.proto2.Message.call(this);
            };
            goog.inherits(i18n.phonenumbers.PhoneNumberDesc, goog.proto2.Message);
            i18n.phonenumbers.PhoneNumberDesc.descriptor_ = null;
            i18n.phonenumbers.PhoneNumberDesc.prototype.getNationalNumberPattern = function() {
              return this.get$Value(2);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.getNationalNumberPatternOrDefault = function() {
              return this.get$ValueOrDefault(2);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.setNationalNumberPattern = function(a2) {
              this.set$Value(2, a2);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.hasNationalNumberPattern = function() {
              return this.has$Value(2);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.nationalNumberPatternCount = function() {
              return this.count$Values(2);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.clearNationalNumberPattern = function() {
              this.clear$Field(2);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.getPossibleLength = function(a2) {
              return this.get$Value(9, a2);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.getPossibleLengthOrDefault = function(a2) {
              return this.get$ValueOrDefault(9, a2);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.addPossibleLength = function(a2) {
              this.add$Value(9, a2);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.possibleLengthArray = function() {
              return this.array$Values(9);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.hasPossibleLength = function() {
              return this.has$Value(9);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.possibleLengthCount = function() {
              return this.count$Values(9);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.clearPossibleLength = function() {
              this.clear$Field(9);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.getPossibleLengthLocalOnly = function(a2) {
              return this.get$Value(10, a2);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.getPossibleLengthLocalOnlyOrDefault = function(a2) {
              return this.get$ValueOrDefault(10, a2);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.addPossibleLengthLocalOnly = function(a2) {
              this.add$Value(10, a2);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.possibleLengthLocalOnlyArray = function() {
              return this.array$Values(10);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.hasPossibleLengthLocalOnly = function() {
              return this.has$Value(10);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.possibleLengthLocalOnlyCount = function() {
              return this.count$Values(10);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.clearPossibleLengthLocalOnly = function() {
              this.clear$Field(10);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.getExampleNumber = function() {
              return this.get$Value(6);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.getExampleNumberOrDefault = function() {
              return this.get$ValueOrDefault(6);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.setExampleNumber = function(a2) {
              this.set$Value(6, a2);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.hasExampleNumber = function() {
              return this.has$Value(6);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.exampleNumberCount = function() {
              return this.count$Values(6);
            };
            i18n.phonenumbers.PhoneNumberDesc.prototype.clearExampleNumber = function() {
              this.clear$Field(6);
            };
            i18n.phonenumbers.PhoneMetadata = function() {
              goog.proto2.Message.call(this);
            };
            goog.inherits(i18n.phonenumbers.PhoneMetadata, goog.proto2.Message);
            i18n.phonenumbers.PhoneMetadata.descriptor_ = null;
            i18n.phonenumbers.PhoneMetadata.prototype.getGeneralDesc = function() {
              return this.get$Value(1);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getGeneralDescOrDefault = function() {
              return this.get$ValueOrDefault(1);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setGeneralDesc = function(a2) {
              this.set$Value(1, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasGeneralDesc = function() {
              return this.has$Value(1);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.generalDescCount = function() {
              return this.count$Values(1);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearGeneralDesc = function() {
              this.clear$Field(1);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getFixedLine = function() {
              return this.get$Value(2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getFixedLineOrDefault = function() {
              return this.get$ValueOrDefault(2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setFixedLine = function(a2) {
              this.set$Value(2, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasFixedLine = function() {
              return this.has$Value(2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.fixedLineCount = function() {
              return this.count$Values(2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearFixedLine = function() {
              this.clear$Field(2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getMobile = function() {
              return this.get$Value(3);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getMobileOrDefault = function() {
              return this.get$ValueOrDefault(3);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setMobile = function(a2) {
              this.set$Value(3, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasMobile = function() {
              return this.has$Value(3);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.mobileCount = function() {
              return this.count$Values(3);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearMobile = function() {
              this.clear$Field(3);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getTollFree = function() {
              return this.get$Value(4);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getTollFreeOrDefault = function() {
              return this.get$ValueOrDefault(4);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setTollFree = function(a2) {
              this.set$Value(4, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasTollFree = function() {
              return this.has$Value(4);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.tollFreeCount = function() {
              return this.count$Values(4);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearTollFree = function() {
              this.clear$Field(4);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getPremiumRate = function() {
              return this.get$Value(5);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getPremiumRateOrDefault = function() {
              return this.get$ValueOrDefault(5);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setPremiumRate = function(a2) {
              this.set$Value(5, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasPremiumRate = function() {
              return this.has$Value(5);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.premiumRateCount = function() {
              return this.count$Values(5);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearPremiumRate = function() {
              this.clear$Field(5);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getSharedCost = function() {
              return this.get$Value(6);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getSharedCostOrDefault = function() {
              return this.get$ValueOrDefault(6);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setSharedCost = function(a2) {
              this.set$Value(6, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasSharedCost = function() {
              return this.has$Value(6);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.sharedCostCount = function() {
              return this.count$Values(6);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearSharedCost = function() {
              this.clear$Field(6);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getPersonalNumber = function() {
              return this.get$Value(7);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getPersonalNumberOrDefault = function() {
              return this.get$ValueOrDefault(7);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setPersonalNumber = function(a2) {
              this.set$Value(7, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasPersonalNumber = function() {
              return this.has$Value(7);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.personalNumberCount = function() {
              return this.count$Values(7);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearPersonalNumber = function() {
              this.clear$Field(7);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getVoip = function() {
              return this.get$Value(8);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getVoipOrDefault = function() {
              return this.get$ValueOrDefault(8);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setVoip = function(a2) {
              this.set$Value(8, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasVoip = function() {
              return this.has$Value(8);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.voipCount = function() {
              return this.count$Values(8);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearVoip = function() {
              this.clear$Field(8);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getPager = function() {
              return this.get$Value(21);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getPagerOrDefault = function() {
              return this.get$ValueOrDefault(21);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setPager = function(a2) {
              this.set$Value(21, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasPager = function() {
              return this.has$Value(21);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.pagerCount = function() {
              return this.count$Values(21);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearPager = function() {
              this.clear$Field(21);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getUan = function() {
              return this.get$Value(25);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getUanOrDefault = function() {
              return this.get$ValueOrDefault(25);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setUan = function(a2) {
              this.set$Value(25, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasUan = function() {
              return this.has$Value(25);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.uanCount = function() {
              return this.count$Values(25);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearUan = function() {
              this.clear$Field(25);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getEmergency = function() {
              return this.get$Value(27);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getEmergencyOrDefault = function() {
              return this.get$ValueOrDefault(27);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setEmergency = function(a2) {
              this.set$Value(27, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasEmergency = function() {
              return this.has$Value(27);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.emergencyCount = function() {
              return this.count$Values(27);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearEmergency = function() {
              this.clear$Field(27);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getVoicemail = function() {
              return this.get$Value(28);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getVoicemailOrDefault = function() {
              return this.get$ValueOrDefault(28);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setVoicemail = function(a2) {
              this.set$Value(28, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasVoicemail = function() {
              return this.has$Value(28);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.voicemailCount = function() {
              return this.count$Values(28);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearVoicemail = function() {
              this.clear$Field(28);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getShortCode = function() {
              return this.get$Value(29);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getShortCodeOrDefault = function() {
              return this.get$ValueOrDefault(29);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setShortCode = function(a2) {
              this.set$Value(29, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasShortCode = function() {
              return this.has$Value(29);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.shortCodeCount = function() {
              return this.count$Values(29);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearShortCode = function() {
              this.clear$Field(29);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getStandardRate = function() {
              return this.get$Value(30);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getStandardRateOrDefault = function() {
              return this.get$ValueOrDefault(30);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setStandardRate = function(a2) {
              this.set$Value(30, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasStandardRate = function() {
              return this.has$Value(30);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.standardRateCount = function() {
              return this.count$Values(30);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearStandardRate = function() {
              this.clear$Field(30);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getCarrierSpecific = function() {
              return this.get$Value(31);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getCarrierSpecificOrDefault = function() {
              return this.get$ValueOrDefault(31);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setCarrierSpecific = function(a2) {
              this.set$Value(31, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasCarrierSpecific = function() {
              return this.has$Value(31);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.carrierSpecificCount = function() {
              return this.count$Values(31);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearCarrierSpecific = function() {
              this.clear$Field(31);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getSmsServices = function() {
              return this.get$Value(33);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getSmsServicesOrDefault = function() {
              return this.get$ValueOrDefault(33);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setSmsServices = function(a2) {
              this.set$Value(33, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasSmsServices = function() {
              return this.has$Value(33);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.smsServicesCount = function() {
              return this.count$Values(33);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearSmsServices = function() {
              this.clear$Field(33);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getNoInternationalDialling = function() {
              return this.get$Value(24);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getNoInternationalDiallingOrDefault = function() {
              return this.get$ValueOrDefault(24);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setNoInternationalDialling = function(a2) {
              this.set$Value(24, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasNoInternationalDialling = function() {
              return this.has$Value(24);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.noInternationalDiallingCount = function() {
              return this.count$Values(24);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearNoInternationalDialling = function() {
              this.clear$Field(24);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getId = function() {
              return this.get$Value(9);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getIdOrDefault = function() {
              return this.get$ValueOrDefault(9);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setId = function(a2) {
              this.set$Value(9, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasId = function() {
              return this.has$Value(9);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.idCount = function() {
              return this.count$Values(9);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearId = function() {
              this.clear$Field(9);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getCountryCode = function() {
              return this.get$Value(10);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getCountryCodeOrDefault = function() {
              return this.get$ValueOrDefault(10);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setCountryCode = function(a2) {
              this.set$Value(10, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasCountryCode = function() {
              return this.has$Value(10);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.countryCodeCount = function() {
              return this.count$Values(10);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearCountryCode = function() {
              this.clear$Field(10);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getInternationalPrefix = function() {
              return this.get$Value(11);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getInternationalPrefixOrDefault = function() {
              return this.get$ValueOrDefault(11);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setInternationalPrefix = function(a2) {
              this.set$Value(11, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasInternationalPrefix = function() {
              return this.has$Value(11);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.internationalPrefixCount = function() {
              return this.count$Values(11);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearInternationalPrefix = function() {
              this.clear$Field(11);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getPreferredInternationalPrefix = function() {
              return this.get$Value(17);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getPreferredInternationalPrefixOrDefault = function() {
              return this.get$ValueOrDefault(17);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setPreferredInternationalPrefix = function(a2) {
              this.set$Value(17, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasPreferredInternationalPrefix = function() {
              return this.has$Value(17);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.preferredInternationalPrefixCount = function() {
              return this.count$Values(17);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearPreferredInternationalPrefix = function() {
              this.clear$Field(17);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getNationalPrefix = function() {
              return this.get$Value(12);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getNationalPrefixOrDefault = function() {
              return this.get$ValueOrDefault(12);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setNationalPrefix = function(a2) {
              this.set$Value(12, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasNationalPrefix = function() {
              return this.has$Value(12);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.nationalPrefixCount = function() {
              return this.count$Values(12);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearNationalPrefix = function() {
              this.clear$Field(12);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getPreferredExtnPrefix = function() {
              return this.get$Value(13);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getPreferredExtnPrefixOrDefault = function() {
              return this.get$ValueOrDefault(13);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setPreferredExtnPrefix = function(a2) {
              this.set$Value(13, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasPreferredExtnPrefix = function() {
              return this.has$Value(13);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.preferredExtnPrefixCount = function() {
              return this.count$Values(13);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearPreferredExtnPrefix = function() {
              this.clear$Field(13);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getNationalPrefixForParsing = function() {
              return this.get$Value(15);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getNationalPrefixForParsingOrDefault = function() {
              return this.get$ValueOrDefault(15);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setNationalPrefixForParsing = function(a2) {
              this.set$Value(15, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasNationalPrefixForParsing = function() {
              return this.has$Value(15);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.nationalPrefixForParsingCount = function() {
              return this.count$Values(15);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearNationalPrefixForParsing = function() {
              this.clear$Field(15);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getNationalPrefixTransformRule = function() {
              return this.get$Value(16);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getNationalPrefixTransformRuleOrDefault = function() {
              return this.get$ValueOrDefault(16);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setNationalPrefixTransformRule = function(a2) {
              this.set$Value(16, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasNationalPrefixTransformRule = function() {
              return this.has$Value(16);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.nationalPrefixTransformRuleCount = function() {
              return this.count$Values(16);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearNationalPrefixTransformRule = function() {
              this.clear$Field(16);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getSameMobileAndFixedLinePattern = function() {
              return this.get$Value(18);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getSameMobileAndFixedLinePatternOrDefault = function() {
              return this.get$ValueOrDefault(18);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setSameMobileAndFixedLinePattern = function(a2) {
              this.set$Value(18, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasSameMobileAndFixedLinePattern = function() {
              return this.has$Value(18);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.sameMobileAndFixedLinePatternCount = function() {
              return this.count$Values(18);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearSameMobileAndFixedLinePattern = function() {
              this.clear$Field(18);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getNumberFormat = function(a2) {
              return this.get$Value(19, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getNumberFormatOrDefault = function(a2) {
              return this.get$ValueOrDefault(19, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.addNumberFormat = function(a2) {
              this.add$Value(19, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.numberFormatArray = function() {
              return this.array$Values(19);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasNumberFormat = function() {
              return this.has$Value(19);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.numberFormatCount = function() {
              return this.count$Values(19);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearNumberFormat = function() {
              this.clear$Field(19);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getIntlNumberFormat = function(a2) {
              return this.get$Value(20, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getIntlNumberFormatOrDefault = function(a2) {
              return this.get$ValueOrDefault(20, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.addIntlNumberFormat = function(a2) {
              this.add$Value(20, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.intlNumberFormatArray = function() {
              return this.array$Values(20);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasIntlNumberFormat = function() {
              return this.has$Value(20);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.intlNumberFormatCount = function() {
              return this.count$Values(20);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearIntlNumberFormat = function() {
              this.clear$Field(20);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getMainCountryForCode = function() {
              return this.get$Value(22);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getMainCountryForCodeOrDefault = function() {
              return this.get$ValueOrDefault(22);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setMainCountryForCode = function(a2) {
              this.set$Value(22, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasMainCountryForCode = function() {
              return this.has$Value(22);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.mainCountryForCodeCount = function() {
              return this.count$Values(22);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearMainCountryForCode = function() {
              this.clear$Field(22);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getLeadingDigits = function() {
              return this.get$Value(23);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.getLeadingDigitsOrDefault = function() {
              return this.get$ValueOrDefault(23);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.setLeadingDigits = function(a2) {
              this.set$Value(23, a2);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.hasLeadingDigits = function() {
              return this.has$Value(23);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.leadingDigitsCount = function() {
              return this.count$Values(23);
            };
            i18n.phonenumbers.PhoneMetadata.prototype.clearLeadingDigits = function() {
              this.clear$Field(23);
            };
            i18n.phonenumbers.PhoneMetadataCollection = function() {
              goog.proto2.Message.call(this);
            };
            goog.inherits(i18n.phonenumbers.PhoneMetadataCollection, goog.proto2.Message);
            i18n.phonenumbers.PhoneMetadataCollection.descriptor_ = null;
            i18n.phonenumbers.PhoneMetadataCollection.prototype.getMetadata = function(a2) {
              return this.get$Value(1, a2);
            };
            i18n.phonenumbers.PhoneMetadataCollection.prototype.getMetadataOrDefault = function(a2) {
              return this.get$ValueOrDefault(1, a2);
            };
            i18n.phonenumbers.PhoneMetadataCollection.prototype.addMetadata = function(a2) {
              this.add$Value(1, a2);
            };
            i18n.phonenumbers.PhoneMetadataCollection.prototype.metadataArray = function() {
              return this.array$Values(1);
            };
            i18n.phonenumbers.PhoneMetadataCollection.prototype.hasMetadata = function() {
              return this.has$Value(1);
            };
            i18n.phonenumbers.PhoneMetadataCollection.prototype.metadataCount = function() {
              return this.count$Values(1);
            };
            i18n.phonenumbers.PhoneMetadataCollection.prototype.clearMetadata = function() {
              this.clear$Field(1);
            };
            i18n.phonenumbers.NumberFormat.prototype.getDescriptor = function() {
              var a2 = i18n.phonenumbers.NumberFormat.descriptor_;
              a2 || (i18n.phonenumbers.NumberFormat.descriptor_ = a2 = goog.proto2.Message.createDescriptor(i18n.phonenumbers.NumberFormat, { 0: { name: "NumberFormat", fullName: "i18n.phonenumbers.NumberFormat" }, 1: { name: "pattern", required: true, fieldType: goog.proto2.Message.FieldType.STRING, type: String }, 2: { name: "format", required: true, fieldType: goog.proto2.Message.FieldType.STRING, type: String }, 3: {
                name: "leading_digits_pattern",
                repeated: true,
                fieldType: goog.proto2.Message.FieldType.STRING,
                type: String
              }, 4: { name: "national_prefix_formatting_rule", fieldType: goog.proto2.Message.FieldType.STRING, type: String }, 6: { name: "national_prefix_optional_when_formatting", fieldType: goog.proto2.Message.FieldType.BOOL, defaultValue: false, type: Boolean }, 5: { name: "domestic_carrier_code_formatting_rule", fieldType: goog.proto2.Message.FieldType.STRING, type: String } }));
              return a2;
            };
            i18n.phonenumbers.NumberFormat.getDescriptor = i18n.phonenumbers.NumberFormat.prototype.getDescriptor;
            i18n.phonenumbers.PhoneNumberDesc.prototype.getDescriptor = function() {
              var a2 = i18n.phonenumbers.PhoneNumberDesc.descriptor_;
              a2 || (i18n.phonenumbers.PhoneNumberDesc.descriptor_ = a2 = goog.proto2.Message.createDescriptor(i18n.phonenumbers.PhoneNumberDesc, {
                0: { name: "PhoneNumberDesc", fullName: "i18n.phonenumbers.PhoneNumberDesc" },
                2: { name: "national_number_pattern", fieldType: goog.proto2.Message.FieldType.STRING, type: String },
                9: { name: "possible_length", repeated: true, fieldType: goog.proto2.Message.FieldType.INT32, type: Number },
                10: { name: "possible_length_local_only", repeated: true, fieldType: goog.proto2.Message.FieldType.INT32, type: Number },
                6: { name: "example_number", fieldType: goog.proto2.Message.FieldType.STRING, type: String }
              }));
              return a2;
            };
            i18n.phonenumbers.PhoneNumberDesc.getDescriptor = i18n.phonenumbers.PhoneNumberDesc.prototype.getDescriptor;
            i18n.phonenumbers.PhoneMetadata.prototype.getDescriptor = function() {
              var a2 = i18n.phonenumbers.PhoneMetadata.descriptor_;
              a2 || (i18n.phonenumbers.PhoneMetadata.descriptor_ = a2 = goog.proto2.Message.createDescriptor(i18n.phonenumbers.PhoneMetadata, {
                0: { name: "PhoneMetadata", fullName: "i18n.phonenumbers.PhoneMetadata" },
                1: { name: "general_desc", fieldType: goog.proto2.Message.FieldType.MESSAGE, type: i18n.phonenumbers.PhoneNumberDesc },
                2: { name: "fixed_line", fieldType: goog.proto2.Message.FieldType.MESSAGE, type: i18n.phonenumbers.PhoneNumberDesc },
                3: { name: "mobile", fieldType: goog.proto2.Message.FieldType.MESSAGE, type: i18n.phonenumbers.PhoneNumberDesc },
                4: { name: "toll_free", fieldType: goog.proto2.Message.FieldType.MESSAGE, type: i18n.phonenumbers.PhoneNumberDesc },
                5: { name: "premium_rate", fieldType: goog.proto2.Message.FieldType.MESSAGE, type: i18n.phonenumbers.PhoneNumberDesc },
                6: { name: "shared_cost", fieldType: goog.proto2.Message.FieldType.MESSAGE, type: i18n.phonenumbers.PhoneNumberDesc },
                7: {
                  name: "personal_number",
                  fieldType: goog.proto2.Message.FieldType.MESSAGE,
                  type: i18n.phonenumbers.PhoneNumberDesc
                },
                8: { name: "voip", fieldType: goog.proto2.Message.FieldType.MESSAGE, type: i18n.phonenumbers.PhoneNumberDesc },
                21: { name: "pager", fieldType: goog.proto2.Message.FieldType.MESSAGE, type: i18n.phonenumbers.PhoneNumberDesc },
                25: { name: "uan", fieldType: goog.proto2.Message.FieldType.MESSAGE, type: i18n.phonenumbers.PhoneNumberDesc },
                27: { name: "emergency", fieldType: goog.proto2.Message.FieldType.MESSAGE, type: i18n.phonenumbers.PhoneNumberDesc },
                28: {
                  name: "voicemail",
                  fieldType: goog.proto2.Message.FieldType.MESSAGE,
                  type: i18n.phonenumbers.PhoneNumberDesc
                },
                29: { name: "short_code", fieldType: goog.proto2.Message.FieldType.MESSAGE, type: i18n.phonenumbers.PhoneNumberDesc },
                30: { name: "standard_rate", fieldType: goog.proto2.Message.FieldType.MESSAGE, type: i18n.phonenumbers.PhoneNumberDesc },
                31: { name: "carrier_specific", fieldType: goog.proto2.Message.FieldType.MESSAGE, type: i18n.phonenumbers.PhoneNumberDesc },
                33: { name: "sms_services", fieldType: goog.proto2.Message.FieldType.MESSAGE, type: i18n.phonenumbers.PhoneNumberDesc },
                24: {
                  name: "no_international_dialling",
                  fieldType: goog.proto2.Message.FieldType.MESSAGE,
                  type: i18n.phonenumbers.PhoneNumberDesc
                },
                9: { name: "id", required: true, fieldType: goog.proto2.Message.FieldType.STRING, type: String },
                10: { name: "country_code", fieldType: goog.proto2.Message.FieldType.INT32, type: Number },
                11: { name: "international_prefix", fieldType: goog.proto2.Message.FieldType.STRING, type: String },
                17: { name: "preferred_international_prefix", fieldType: goog.proto2.Message.FieldType.STRING, type: String },
                12: {
                  name: "national_prefix",
                  fieldType: goog.proto2.Message.FieldType.STRING,
                  type: String
                },
                13: { name: "preferred_extn_prefix", fieldType: goog.proto2.Message.FieldType.STRING, type: String },
                15: { name: "national_prefix_for_parsing", fieldType: goog.proto2.Message.FieldType.STRING, type: String },
                16: { name: "national_prefix_transform_rule", fieldType: goog.proto2.Message.FieldType.STRING, type: String },
                18: { name: "same_mobile_and_fixed_line_pattern", fieldType: goog.proto2.Message.FieldType.BOOL, defaultValue: false, type: Boolean },
                19: {
                  name: "number_format",
                  repeated: true,
                  fieldType: goog.proto2.Message.FieldType.MESSAGE,
                  type: i18n.phonenumbers.NumberFormat
                },
                20: { name: "intl_number_format", repeated: true, fieldType: goog.proto2.Message.FieldType.MESSAGE, type: i18n.phonenumbers.NumberFormat },
                22: { name: "main_country_for_code", fieldType: goog.proto2.Message.FieldType.BOOL, defaultValue: false, type: Boolean },
                23: { name: "leading_digits", fieldType: goog.proto2.Message.FieldType.STRING, type: String }
              }));
              return a2;
            };
            i18n.phonenumbers.PhoneMetadata.getDescriptor = i18n.phonenumbers.PhoneMetadata.prototype.getDescriptor;
            i18n.phonenumbers.PhoneMetadataCollection.prototype.getDescriptor = function() {
              var a2 = i18n.phonenumbers.PhoneMetadataCollection.descriptor_;
              a2 || (i18n.phonenumbers.PhoneMetadataCollection.descriptor_ = a2 = goog.proto2.Message.createDescriptor(i18n.phonenumbers.PhoneMetadataCollection, { 0: { name: "PhoneMetadataCollection", fullName: "i18n.phonenumbers.PhoneMetadataCollection" }, 1: { name: "metadata", repeated: true, fieldType: goog.proto2.Message.FieldType.MESSAGE, type: i18n.phonenumbers.PhoneMetadata } }));
              return a2;
            };
            i18n.phonenumbers.PhoneMetadataCollection.getDescriptor = i18n.phonenumbers.PhoneMetadataCollection.prototype.getDescriptor;
            i18n.phonenumbers.PhoneNumber = function() {
              goog.proto2.Message.call(this);
            };
            goog.inherits(i18n.phonenumbers.PhoneNumber, goog.proto2.Message);
            i18n.phonenumbers.PhoneNumber.descriptor_ = null;
            i18n.phonenumbers.PhoneNumber.prototype.getCountryCode = function() {
              return this.get$Value(1);
            };
            i18n.phonenumbers.PhoneNumber.prototype.getCountryCodeOrDefault = function() {
              return this.get$ValueOrDefault(1);
            };
            i18n.phonenumbers.PhoneNumber.prototype.setCountryCode = function(a2) {
              this.set$Value(1, a2);
            };
            i18n.phonenumbers.PhoneNumber.prototype.hasCountryCode = function() {
              return this.has$Value(1);
            };
            i18n.phonenumbers.PhoneNumber.prototype.countryCodeCount = function() {
              return this.count$Values(1);
            };
            i18n.phonenumbers.PhoneNumber.prototype.clearCountryCode = function() {
              this.clear$Field(1);
            };
            i18n.phonenumbers.PhoneNumber.prototype.getNationalNumber = function() {
              return this.get$Value(2);
            };
            i18n.phonenumbers.PhoneNumber.prototype.getNationalNumberOrDefault = function() {
              return this.get$ValueOrDefault(2);
            };
            i18n.phonenumbers.PhoneNumber.prototype.setNationalNumber = function(a2) {
              this.set$Value(2, a2);
            };
            i18n.phonenumbers.PhoneNumber.prototype.hasNationalNumber = function() {
              return this.has$Value(2);
            };
            i18n.phonenumbers.PhoneNumber.prototype.nationalNumberCount = function() {
              return this.count$Values(2);
            };
            i18n.phonenumbers.PhoneNumber.prototype.clearNationalNumber = function() {
              this.clear$Field(2);
            };
            i18n.phonenumbers.PhoneNumber.prototype.getExtension = function() {
              return this.get$Value(3);
            };
            i18n.phonenumbers.PhoneNumber.prototype.getExtensionOrDefault = function() {
              return this.get$ValueOrDefault(3);
            };
            i18n.phonenumbers.PhoneNumber.prototype.setExtension = function(a2) {
              this.set$Value(3, a2);
            };
            i18n.phonenumbers.PhoneNumber.prototype.hasExtension = function() {
              return this.has$Value(3);
            };
            i18n.phonenumbers.PhoneNumber.prototype.extensionCount = function() {
              return this.count$Values(3);
            };
            i18n.phonenumbers.PhoneNumber.prototype.clearExtension = function() {
              this.clear$Field(3);
            };
            i18n.phonenumbers.PhoneNumber.prototype.getItalianLeadingZero = function() {
              return this.get$Value(4);
            };
            i18n.phonenumbers.PhoneNumber.prototype.getItalianLeadingZeroOrDefault = function() {
              return this.get$ValueOrDefault(4);
            };
            i18n.phonenumbers.PhoneNumber.prototype.setItalianLeadingZero = function(a2) {
              this.set$Value(4, a2);
            };
            i18n.phonenumbers.PhoneNumber.prototype.hasItalianLeadingZero = function() {
              return this.has$Value(4);
            };
            i18n.phonenumbers.PhoneNumber.prototype.italianLeadingZeroCount = function() {
              return this.count$Values(4);
            };
            i18n.phonenumbers.PhoneNumber.prototype.clearItalianLeadingZero = function() {
              this.clear$Field(4);
            };
            i18n.phonenumbers.PhoneNumber.prototype.getNumberOfLeadingZeros = function() {
              return this.get$Value(8);
            };
            i18n.phonenumbers.PhoneNumber.prototype.getNumberOfLeadingZerosOrDefault = function() {
              return this.get$ValueOrDefault(8);
            };
            i18n.phonenumbers.PhoneNumber.prototype.setNumberOfLeadingZeros = function(a2) {
              this.set$Value(8, a2);
            };
            i18n.phonenumbers.PhoneNumber.prototype.hasNumberOfLeadingZeros = function() {
              return this.has$Value(8);
            };
            i18n.phonenumbers.PhoneNumber.prototype.numberOfLeadingZerosCount = function() {
              return this.count$Values(8);
            };
            i18n.phonenumbers.PhoneNumber.prototype.clearNumberOfLeadingZeros = function() {
              this.clear$Field(8);
            };
            i18n.phonenumbers.PhoneNumber.prototype.getRawInput = function() {
              return this.get$Value(5);
            };
            i18n.phonenumbers.PhoneNumber.prototype.getRawInputOrDefault = function() {
              return this.get$ValueOrDefault(5);
            };
            i18n.phonenumbers.PhoneNumber.prototype.setRawInput = function(a2) {
              this.set$Value(5, a2);
            };
            i18n.phonenumbers.PhoneNumber.prototype.hasRawInput = function() {
              return this.has$Value(5);
            };
            i18n.phonenumbers.PhoneNumber.prototype.rawInputCount = function() {
              return this.count$Values(5);
            };
            i18n.phonenumbers.PhoneNumber.prototype.clearRawInput = function() {
              this.clear$Field(5);
            };
            i18n.phonenumbers.PhoneNumber.prototype.getCountryCodeSource = function() {
              return this.get$Value(6);
            };
            i18n.phonenumbers.PhoneNumber.prototype.getCountryCodeSourceOrDefault = function() {
              return this.get$ValueOrDefault(6);
            };
            i18n.phonenumbers.PhoneNumber.prototype.setCountryCodeSource = function(a2) {
              this.set$Value(6, a2);
            };
            i18n.phonenumbers.PhoneNumber.prototype.hasCountryCodeSource = function() {
              return this.has$Value(6);
            };
            i18n.phonenumbers.PhoneNumber.prototype.countryCodeSourceCount = function() {
              return this.count$Values(6);
            };
            i18n.phonenumbers.PhoneNumber.prototype.clearCountryCodeSource = function() {
              this.clear$Field(6);
            };
            i18n.phonenumbers.PhoneNumber.prototype.getPreferredDomesticCarrierCode = function() {
              return this.get$Value(7);
            };
            i18n.phonenumbers.PhoneNumber.prototype.getPreferredDomesticCarrierCodeOrDefault = function() {
              return this.get$ValueOrDefault(7);
            };
            i18n.phonenumbers.PhoneNumber.prototype.setPreferredDomesticCarrierCode = function(a2) {
              this.set$Value(7, a2);
            };
            i18n.phonenumbers.PhoneNumber.prototype.hasPreferredDomesticCarrierCode = function() {
              return this.has$Value(7);
            };
            i18n.phonenumbers.PhoneNumber.prototype.preferredDomesticCarrierCodeCount = function() {
              return this.count$Values(7);
            };
            i18n.phonenumbers.PhoneNumber.prototype.clearPreferredDomesticCarrierCode = function() {
              this.clear$Field(7);
            };
            i18n.phonenumbers.PhoneNumber.CountryCodeSource = { UNSPECIFIED: 0, FROM_NUMBER_WITH_PLUS_SIGN: 1, FROM_NUMBER_WITH_IDD: 5, FROM_NUMBER_WITHOUT_PLUS_SIGN: 10, FROM_DEFAULT_COUNTRY: 20 };
            i18n.phonenumbers.PhoneNumber.prototype.getDescriptor = function() {
              var a2 = i18n.phonenumbers.PhoneNumber.descriptor_;
              a2 || (i18n.phonenumbers.PhoneNumber.descriptor_ = a2 = goog.proto2.Message.createDescriptor(i18n.phonenumbers.PhoneNumber, {
                0: { name: "PhoneNumber", fullName: "i18n.phonenumbers.PhoneNumber" },
                1: { name: "country_code", required: true, fieldType: goog.proto2.Message.FieldType.INT32, type: Number },
                2: { name: "national_number", required: true, fieldType: goog.proto2.Message.FieldType.UINT64, type: Number },
                3: {
                  name: "extension",
                  fieldType: goog.proto2.Message.FieldType.STRING,
                  type: String
                },
                4: { name: "italian_leading_zero", fieldType: goog.proto2.Message.FieldType.BOOL, type: Boolean },
                8: { name: "number_of_leading_zeros", fieldType: goog.proto2.Message.FieldType.INT32, defaultValue: 1, type: Number },
                5: { name: "raw_input", fieldType: goog.proto2.Message.FieldType.STRING, type: String },
                6: { name: "country_code_source", fieldType: goog.proto2.Message.FieldType.ENUM, defaultValue: i18n.phonenumbers.PhoneNumber.CountryCodeSource.UNSPECIFIED, type: i18n.phonenumbers.PhoneNumber.CountryCodeSource },
                7: { name: "preferred_domestic_carrier_code", fieldType: goog.proto2.Message.FieldType.STRING, type: String }
              }));
              return a2;
            };
            i18n.phonenumbers.PhoneNumber.ctor = i18n.phonenumbers.PhoneNumber;
            i18n.phonenumbers.PhoneNumber.ctor.getDescriptor = i18n.phonenumbers.PhoneNumber.prototype.getDescriptor;
            i18n.phonenumbers.metadata = {};
            i18n.phonenumbers.metadata.countryCodeToRegionCodeMap = {
              1: "US AG AI AS BB BM BS CA DM DO GD GU JM KN KY LC MP MS PR SX TC TT VC VG VI".split(" "),
              7: ["RU", "KZ"],
              20: ["EG"],
              27: ["ZA"],
              30: ["GR"],
              31: ["NL"],
              32: ["BE"],
              33: ["FR"],
              34: ["ES"],
              36: ["HU"],
              39: ["IT", "VA"],
              40: ["RO"],
              41: ["CH"],
              43: ["AT"],
              44: ["GB", "GG", "IM", "JE"],
              45: ["DK"],
              46: ["SE"],
              47: ["NO", "SJ"],
              48: ["PL"],
              49: ["DE"],
              51: ["PE"],
              52: ["MX"],
              53: ["CU"],
              54: ["AR"],
              55: ["BR"],
              56: ["CL"],
              57: ["CO"],
              58: ["VE"],
              60: ["MY"],
              61: ["AU", "CC", "CX"],
              62: ["ID"],
              63: ["PH"],
              64: ["NZ"],
              65: ["SG"],
              66: ["TH"],
              81: ["JP"],
              82: ["KR"],
              84: ["VN"],
              86: ["CN"],
              90: ["TR"],
              91: ["IN"],
              92: ["PK"],
              93: ["AF"],
              94: ["LK"],
              95: ["MM"],
              98: ["IR"],
              211: ["SS"],
              212: ["MA", "EH"],
              213: ["DZ"],
              216: ["TN"],
              218: ["LY"],
              220: ["GM"],
              221: ["SN"],
              222: ["MR"],
              223: ["ML"],
              224: ["GN"],
              225: ["CI"],
              226: ["BF"],
              227: ["NE"],
              228: ["TG"],
              229: ["BJ"],
              230: ["MU"],
              231: ["LR"],
              232: ["SL"],
              233: ["GH"],
              234: ["NG"],
              235: ["TD"],
              236: ["CF"],
              237: ["CM"],
              238: ["CV"],
              239: ["ST"],
              240: ["GQ"],
              241: ["GA"],
              242: ["CG"],
              243: ["CD"],
              244: ["AO"],
              245: ["GW"],
              246: ["IO"],
              247: ["AC"],
              248: ["SC"],
              249: ["SD"],
              250: ["RW"],
              251: ["ET"],
              252: ["SO"],
              253: ["DJ"],
              254: ["KE"],
              255: ["TZ"],
              256: ["UG"],
              257: ["BI"],
              258: ["MZ"],
              260: ["ZM"],
              261: ["MG"],
              262: ["RE", "YT"],
              263: ["ZW"],
              264: ["NA"],
              265: ["MW"],
              266: ["LS"],
              267: ["BW"],
              268: ["SZ"],
              269: ["KM"],
              290: ["SH", "TA"],
              291: ["ER"],
              297: ["AW"],
              298: ["FO"],
              299: ["GL"],
              350: ["GI"],
              351: ["PT"],
              352: ["LU"],
              353: ["IE"],
              354: ["IS"],
              355: ["AL"],
              356: ["MT"],
              357: ["CY"],
              358: ["FI", "AX"],
              359: ["BG"],
              370: ["LT"],
              371: ["LV"],
              372: ["EE"],
              373: ["MD"],
              374: ["AM"],
              375: ["BY"],
              376: ["AD"],
              377: ["MC"],
              378: ["SM"],
              380: ["UA"],
              381: ["RS"],
              382: ["ME"],
              383: ["XK"],
              385: ["HR"],
              386: ["SI"],
              387: ["BA"],
              389: ["MK"],
              420: ["CZ"],
              421: ["SK"],
              423: ["LI"],
              500: ["FK"],
              501: ["BZ"],
              502: ["GT"],
              503: ["SV"],
              504: ["HN"],
              505: ["NI"],
              506: ["CR"],
              507: ["PA"],
              508: ["PM"],
              509: ["HT"],
              590: ["GP", "BL", "MF"],
              591: ["BO"],
              592: ["GY"],
              593: ["EC"],
              594: ["GF"],
              595: ["PY"],
              596: ["MQ"],
              597: ["SR"],
              598: ["UY"],
              599: ["CW", "BQ"],
              670: ["TL"],
              672: ["NF"],
              673: ["BN"],
              674: ["NR"],
              675: ["PG"],
              676: ["TO"],
              677: ["SB"],
              678: ["VU"],
              679: ["FJ"],
              680: ["PW"],
              681: ["WF"],
              682: ["CK"],
              683: ["NU"],
              685: ["WS"],
              686: ["KI"],
              687: ["NC"],
              688: ["TV"],
              689: ["PF"],
              690: ["TK"],
              691: ["FM"],
              692: ["MH"],
              800: ["001"],
              808: ["001"],
              850: ["KP"],
              852: ["HK"],
              853: ["MO"],
              855: ["KH"],
              856: ["LA"],
              870: ["001"],
              878: ["001"],
              880: ["BD"],
              881: ["001"],
              882: ["001"],
              883: ["001"],
              886: ["TW"],
              888: ["001"],
              960: ["MV"],
              961: ["LB"],
              962: ["JO"],
              963: ["SY"],
              964: ["IQ"],
              965: ["KW"],
              966: ["SA"],
              967: ["YE"],
              968: ["OM"],
              970: ["PS"],
              971: ["AE"],
              972: ["IL"],
              973: ["BH"],
              974: ["QA"],
              975: ["BT"],
              976: ["MN"],
              977: ["NP"],
              979: ["001"],
              992: ["TJ"],
              993: ["TM"],
              994: ["AZ"],
              995: ["GE"],
              996: ["KG"],
              998: ["UZ"]
            };
            i18n.phonenumbers.metadata.countryToMetadata = {
              AC: [, [, , "(?:[01589]\\d|[46])\\d{4}", , , , , , , [5, 6]], [, , "6[2-467]\\d{3}", , , , "62889", , , [5]], [, , "4\\d{4}", , , , "40123", , , [5]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "AC", 247, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "(?:0[1-9]|[1589]\\d)\\d{4}", , , , "542011", , , [6]], , , [, , , , , , , , , [-1]]],
              AD: [, [, , "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", , , , , , , [6, 8, 9]], [, , "[78]\\d{5}", , , , "712345", , , [6]], [
                ,
                ,
                "690\\d{6}|[356]\\d{5}",
                ,
                ,
                ,
                "312345",
                ,
                ,
                [6, 9]
              ], [, , "180[02]\\d{4}", , , , "18001234", , , [8]], [, , "[19]\\d{5}", , , , "912345", , , [6]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "AD", 376, "00", , , , , , , , [[, "(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["1"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], , [, , , , , , , , , [-1]], , , [, , "1800\\d{4}", , , , , , , [8]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              AE: [
                ,
                [, , "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", , , , , , , [5, 6, 7, 8, 9, 10, 11, 12]],
                [, , "[2-4679][2-8]\\d{6}", , , , "22345678", , , [8], [7]],
                [, , "5[024-68]\\d{7}", , , , "501234567", , , [9]],
                [, , "400\\d{6}|800\\d{2,9}", , , , "800123456"],
                [, , "900[02]\\d{5}", , , , "900234567", , , [9]],
                [, , "700[05]\\d{5}", , , , "700012345", , , [9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                "AE",
                971,
                "00",
                "0",
                ,
                ,
                "0",
                ,
                ,
                ,
                [[, "(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], [, "(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [
                  ,
                  ,
                  "600[25]\\d{5}",
                  ,
                  ,
                  ,
                  "600212345",
                  ,
                  ,
                  [9]
                ],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              AF: [, [, , "[2-7]\\d{8}", , , , , , , [9], [7]], [, , "(?:[25][0-8]|[34][0-4]|6[0-5])[2-9]\\d{6}", , , , "234567890", , , , [7]], [, , "7\\d{8}", , , , "701234567", , , , [7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "AF", 93, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[1-9]"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              AG: [, [, , "(?:268|[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]], [, , "268(?:4(?:6[0-38]|84)|56[0-2])\\d{4}", , , , "2684601234", , , , [7]], [, , "268(?:464|7(?:1[3-9]|[28]\\d|3[0246]|64|7[0-689]))\\d{4}", , , , "2684641234", , , , [7]], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"], [, , "900[2-9]\\d{6}", , , , "9002123456"], [, , , , , , , , , [-1]], [
                ,
                ,
                "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
                ,
                ,
                ,
                "5002345678"
              ], [, , "26848[01]\\d{4}", , , , "2684801234", , , , [7]], "AG", 1, "011", "1", , , "([457]\\d{6})$|1", "268$1", , , , , [, , "26840[69]\\d{4}", , , , "2684061234", , , , [7]], , "268", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              AI: [, [, , "(?:264|[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]], [, , "264(?:292|4(?:6[12]|9[78]))\\d{4}", , , , "2644612345", , , , [7]], [, , "264(?:235|4(?:69|76)|5(?:3[6-9]|8[1-4])|7(?:29|72))\\d{4}", , , , "2642351234", , , , [7]], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"], [
                ,
                ,
                "900[2-9]\\d{6}",
                ,
                ,
                ,
                "9002123456"
              ], [, , , , , , , , , [-1]], [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"], [, , , , , , , , , [-1]], "AI", 1, "011", "1", , , "([2457]\\d{6})$|1", "264$1", , , , , [, , "264724\\d{4}", , , , "2647241234", , , , [7]], , "264", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              AL: [, [
                ,
                ,
                "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",
                ,
                ,
                ,
                ,
                ,
                ,
                [6, 7, 8, 9],
                [5]
              ], [, , "4505[0-2]\\d{3}|(?:[2358][16-9]\\d[2-9]|4410)\\d{4}|(?:[2358][2-5][2-9]|4(?:[2-57-9][2-9]|6\\d))\\d{5}", , , , "22345678", , , [8], [5, 6, 7]], [, , "6(?:[78][2-9]|9\\d)\\d{6}", , , , "672123456", , , [9]], [, , "800\\d{4}", , , , "8001234", , , [7]], [, , "900[1-9]\\d\\d", , , , "900123", , , [6]], [, , "808[1-9]\\d\\d", , , , "808123", , , [6]], [, , "700[2-9]\\d{4}", , , , "70021234", , , [8]], [, , , , , , , , , [-1]], "AL", 355, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], [
                ,
                "(\\d)(\\d{3})(\\d{4})",
                "$1 $2 $3",
                ["4[2-6]"],
                "0$1"
              ], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], [, "(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              AM: [
                ,
                [, , "(?:[1-489]\\d|55|60|77)\\d{6}", , , , , , , [8], [5, 6]],
                [, , "(?:(?:1[0-25]|47)\\d|2(?:2[2-46]|3[1-8]|4[2-69]|5[2-7]|6[1-9]|8[1-7])|3[12]2)\\d{5}", , , , "10123456", , , , [5, 6]],
                [, , "(?:33|4[1349]|55|77|88|9[13-9])\\d{6}", , , , "77123456"],
                [, , "800\\d{5}", , , , "80012345"],
                [, , "90[016]\\d{5}", , , , "90012345"],
                [, , "80[1-4]\\d{5}", , , , "80112345"],
                [, , , , , , , , , [-1]],
                [, , "60(?:2[78]|3[5-9]|4[02-9]|5[0-46-9]|[6-8]\\d|9[0-2])\\d{4}", , , , "60271234"],
                "AM",
                374,
                "00",
                "0",
                ,
                ,
                "0",
                ,
                ,
                ,
                [[, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], [, "(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], [, "(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], [, "(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              AO: [, [, , "[29]\\d{8}", , , , , , , [9]], [
                ,
                ,
                "2\\d(?:[0134][25-9]|[25-9]\\d)\\d{5}",
                ,
                ,
                ,
                "222123456"
              ], [, , "9[1-59]\\d{7}", , , , "923123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "AO", 244, "00", , , , , , , , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              AR: [
                ,
                [, , "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", , , , , , , [10, 11], [6, 7, 8]],
                [
                  ,
                  ,
                  "3888[013-9]\\d{5}|3(?:7(?:1[15]|81)|8(?:21|4[16]|69|9[12]))[46]\\d{5}|(?:2(?:657|9(?:54|66))|3(?:7(?:55|77)|865))[2-8]\\d{5}|(?:2(?:2(?:2[59]|44|52)|3(?:26|44)|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|(?:2(?:284|3(?:02|23)|920)|3(?:4(?:46|8[27]|92)|541|878))[2-7]\\d{5}|(?:2(?:(?:26|62)2|320|477|9(?:42|83))|3(?:329|4(?:62|76|89)|564))[2-6]\\d{5}|(?:(?:11[1-8]|670)\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-8]|[36][45]|4[3-6])|80[45]|9(?:[17][4-6]|[48][45]|9[3-6]))|3(?:364|4(?:1[2-8]|[235][4-6]|84)|5(?:1[2-9]|[38][4-6])|6(?:2[45]|44)|7[069][45]|8(?:0[45]|[17][2-6]|3[4-6]|[58][3-6])))\\d{6}|2(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])))[3-6]\\d{5}|(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|25|[45][25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}",
                  ,
                  ,
                  ,
                  "1123456789",
                  ,
                  ,
                  [10],
                  [6, 7, 8]
                ],
                [
                  ,
                  ,
                  "93(?:7(?:1[15]|81)[46]|8(?:(?:21|4[16]|69|9[12])[46]|88[013-9]))\\d{5}|9(?:2(?:657|9(?:54|66))|3(?:7(?:55|77)|865))[2-8]\\d{5}|9(?:2(?:2(?:2[59]|44|52)|3(?:26|44)|473|9(?:[07]2|2[26]|34|46))|3327)[45]\\d{5}|9(?:2(?:284|3(?:02|23)|920)|3(?:4(?:46|8[27]|92)|541|878))[2-7]\\d{5}|9(?:2(?:(?:26|62)2|320|477|9(?:42|83))|3(?:329|4(?:62|76|89)|564))[2-6]\\d{5}|(?:675\\d|9(?:11[1-8]\\d|2(?:2(?:0[45]|1[2-6]|3[3-6])|3(?:[06]4|7[45])|494|6(?:04|1[2-8]|[36][45]|4[3-6])|80[45]|9(?:[17][4-6]|[48][45]|9[3-6]))|3(?:364|4(?:1[2-8]|[235][4-6]|84)|5(?:1[2-9]|[38][4-6])|6(?:2[45]|44)|7[069][45]|8(?:0[45]|[17][2-6]|3[4-6]|[58][3-6]))))\\d{6}|92(?:2(?:21|4[23]|6[145]|7[1-4]|8[356]|9[267])|3(?:16|3[13-8]|43|5[346-8]|9[3-5])|475|6(?:2[46]|4[78]|5[1568])|9(?:03|2[1457-9]|3[1356]|4[08]|[56][23]|82))4\\d{5}|9(?:2(?:2(?:57|81)|3(?:24|46|92)|9(?:01|23|64))|3(?:4(?:42|71)|5(?:25|37|4[347]|71)|7(?:18|5[17])))[3-6]\\d{5}|9(?:2(?:2(?:02|2[3467]|4[156]|5[45]|6[6-8]|91)|3(?:1[47]|25|[45][25]|96)|47[48]|625|932)|3(?:38[2578]|4(?:0[0-24-9]|3[78]|4[457]|58|6[03-9]|72|83|9[136-8])|5(?:2[124]|[368][23]|4[2689]|7[2-6])|7(?:16|2[15]|3[145]|4[13]|5[468]|7[2-5]|8[26])|8(?:2[5-7]|3[278]|4[3-5]|5[78]|6[1-378]|[78]7|94)))[4-6]\\d{5}",
                  ,
                  ,
                  ,
                  "91123456789",
                  ,
                  ,
                  ,
                  [6, 7, 8]
                ],
                [, , "800\\d{7,8}", , , , "8001234567"],
                [, , "60[04579]\\d{7}", , , , "6001234567", , , [10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                "AR",
                54,
                "00",
                "0",
                ,
                ,
                "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?",
                "9$1",
                ,
                ,
                [[, "(\\d{3})", "$1", ["0|1(?:0[0-35-7]|1[02-5]|2[015]|3[47]|4[478])|911"]], [, "(\\d{2})(\\d{4})", "$1-$2", ["[1-9]"]], [, "(\\d{3})(\\d{4})", "$1-$2", ["[2-9]"]], [, "(\\d{4})(\\d{4})", "$1-$2", ["[1-8]"]], [
                  ,
                  "(\\d{4})(\\d{2})(\\d{4})",
                  "$1 $2-$3",
                  [
                    "2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])",
                    "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)",
                    "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
                    "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"
                  ],
                  "0$1",
                  ,
                  1
                ], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", , 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", , 1], [
                  ,
                  "(\\d)(\\d{4})(\\d{2})(\\d{4})",
                  "$2 15-$3-$4",
                  [
                    "9(?:2[2-469]|3[3-578])",
                    "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))",
                    "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)",
                    "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
                    "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"
                  ],
                  "0$1"
                ], [, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], [, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1"]],
                [
                  [
                    ,
                    "(\\d{4})(\\d{2})(\\d{4})",
                    "$1 $2-$3",
                    [
                      "2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])",
                      "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)",
                      "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
                      "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"
                    ],
                    "0$1",
                    ,
                    1
                  ],
                  [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", , 1],
                  [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"],
                  [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", , 1],
                  [, "(\\d)(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3-$4", [
                    "9(?:2[2-469]|3[3-578])",
                    "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))",
                    "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)",
                    "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]",
                    "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"
                  ]],
                  [, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3-$4", ["91"]],
                  [, "(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"],
                  [, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3-$4", ["9"]]
                ],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , "810\\d{7}", , , , , , , [10]],
                [, , "810\\d{7}", , , , "8101234567", , , [10]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              AS: [, [, , "(?:[58]\\d\\d|684|900)\\d{7}", , , , , , , [10], [7]], [, , "6846(?:22|33|44|55|77|88|9[19])\\d{4}", , , , "6846221234", , , , [7]], [, , "684(?:2(?:48|5[2468]|7[26])|7(?:3[13]|70|82))\\d{4}", , , , "6847331234", , , , [7]], [
                ,
                ,
                "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
                ,
                ,
                ,
                "8002123456"
              ], [, , "900[2-9]\\d{6}", , , , "9002123456"], [, , , , , , , , , [-1]], [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"], [, , , , , , , , , [-1]], "AS", 1, "011", "1", , , "([267]\\d{6})$|1", "684$1", , , , , [, , , , , , , , , [-1]], , "684", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              AT: [, [
                ,
                ,
                "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",
                ,
                ,
                ,
                ,
                ,
                ,
                [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                [3]
              ], [, , "1(?:11\\d|[2-9]\\d{3,11})|(?:316|463|(?:51|66|73)2)\\d{3,10}|(?:2(?:1[467]|2[13-8]|5[2357]|6[1-46-8]|7[1-8]|8[124-7]|9[1458])|3(?:1[1-578]|3[23568]|4[5-7]|5[1378]|6[1-38]|8[3-68])|4(?:2[1-8]|35|7[1368]|8[2457])|5(?:2[1-8]|3[357]|4[147]|5[12578]|6[37])|6(?:13|2[1-47]|4[135-8]|5[468])|7(?:2[1-8]|35|4[13478]|5[68]|6[16-8]|7[1-6]|9[45]))\\d{4,10}", , , , "1234567890", , , , [3]], [, , "6(?:5[0-3579]|6[013-9]|[7-9]\\d)\\d{4,10}", , , , "664123456", , , [7, 8, 9, 10, 11, 12, 13]], [
                ,
                ,
                "800\\d{6,10}",
                ,
                ,
                ,
                "800123456",
                ,
                ,
                [9, 10, 11, 12, 13]
              ], [, , "(?:8[69][2-68]|9(?:0[01]|3[019]))\\d{6,10}", , , , "900123456", , , [9, 10, 11, 12, 13]], [, , "8(?:10|2[018])\\d{6,10}|828\\d{5}", , , , "810123456", , , [8, 9, 10, 11, 12, 13]], [, , , , , , , , , [-1]], [, , "5(?:0[1-9]|17|[79]\\d)\\d{2,10}|7[28]0\\d{6,10}", , , , "780123456", , , [5, 6, 7, 8, 9, 10, 11, 12, 13]], "AT", 43, "00", "0", , , "0", , , , [
                [, "(\\d{4})", "$1", ["14"]],
                [, "(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"],
                [, "(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"],
                [, "(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"],
                [, "(\\d{6})", "$1", ["[18]"]],
                [, "(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"],
                [, "(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"],
                [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"],
                [, "(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]
              ], [[, "(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], [, "(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], [, "(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], [
                ,
                "(\\d{3})(\\d{3,10})",
                "$1 $2",
                ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],
                "0$1"
              ], [, "(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              AU: [
                ,
                [, , "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", , , , , , , [5, 6, 7, 8, 9, 10, 12]],
                [
                  ,
                  ,
                  "(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8]))\\d{3}|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4]))|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}",
                  ,
                  ,
                  ,
                  "212345678",
                  ,
                  ,
                  [9],
                  [8]
                ],
                [, , "4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", , , , "412345678", , , [9]],
                [, , "180(?:0\\d{3}|2)\\d{3}", , , , "1800123456", , , [7, 10]],
                [, , "190[0-26]\\d{6}", , , , "1900123456", , , [10]],
                [, , "13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", , , , "1300123456", , , [6, 8, 10, 12]],
                [, , , , , , , , , [-1]],
                [, , "14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", , , , "147101234", , , [9]],
                "AU",
                61,
                "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
                "0",
                ,
                ,
                "(183[12])|0",
                ,
                "0011",
                ,
                [[, "(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["13"]], [, "(\\d{3})(\\d{3})", "$1 $2", ["19"]], [, "(\\d{3})(\\d{4})", "$1 $2", ["180", "1802"]], [, "(\\d{4})(\\d{3,4})", "$1 $2", ["19"]], [, "(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)", "$CC ($1)"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]], [
                  ,
                  "(\\d{4})(\\d{4})(\\d{4})",
                  "$1 $2 $3",
                  ["130"]
                ]],
                [[, "(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)", "$CC ($1)"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]],
                [, , "163\\d{2,6}", , , , "1631234", , , [5, 6, 7, 8, 9]],
                1,
                ,
                [, , "1(?:3(?:00\\d{5}|45[0-4])|802)\\d{3}|1[38]00\\d{6}|13\\d{4}", , , , , , , [6, 7, 8, 10, 12]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              AW: [, [
                ,
                ,
                "(?:[25-79]\\d\\d|800)\\d{4}",
                ,
                ,
                ,
                ,
                ,
                ,
                [7]
              ], [, , "5(?:2\\d|8[1-9])\\d{4}", , , , "5212345"], [, , "(?:290|5[69]\\d|6(?:[03]0|22|4[0-2]|[69]\\d)|7(?:[34]\\d|7[07])|9(?:6[45]|9[4-8]))\\d{4}", , , , "5601234"], [, , "800\\d{4}", , , , "8001234"], [, , "900\\d{4}", , , , "9001234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "(?:28\\d|501)\\d{4}", , , , "5011234"], "AW", 297, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              AX: [, [
                ,
                ,
                "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",
                ,
                ,
                ,
                ,
                ,
                ,
                [5, 6, 7, 8, 9, 10, 11, 12]
              ], [, , "18[1-8]\\d{3,6}", , , , "181234567", , , [6, 7, 8, 9]], [, , "4946\\d{2,6}|(?:4[0-8]|50)\\d{4,8}", , , , "412345678", , , [6, 7, 8, 9, 10]], [, , "800\\d{4,6}", , , , "800123456", , , [7, 8, 9]], [, , "[67]00\\d{5,6}", , , , "600123456", , , [8, 9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "AX", 358, "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "0", , , "0", , "00", , , , [, , , , , , , , , [-1]], , "18", [, , , , , , , , , [-1]], [
                ,
                ,
                "20\\d{4,8}|60[12]\\d{5,6}|7(?:099\\d{4,5}|5[03-9]\\d{3,7})|20[2-59]\\d\\d|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:10|29|3[09]|70[1-5]\\d)\\d{4,8}",
                ,
                ,
                ,
                "10112345"
              ], , , [, , , , , , , , , [-1]]],
              AZ: [, [, , "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", , , , , , , [9], [7]], [, , "(?:2[12]428|3655[02])\\d{4}|(?:2(?:22[0-79]|63[0-28])|3654)\\d{5}|(?:(?:1[28]|46)\\d|2(?:[014-6]2|[23]3))\\d{6}", , , , "123123456", , , , [7]], [, , "36554\\d{4}|(?:[16]0|4[04]|5[015]|7[07]|99)\\d{7}", , , , "401234567"], [, , "88\\d{7}", , , , "881234567"], [, , "900200\\d{3}", , , , "900200123"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "AZ", 994, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[1-9]"]], [
                ,
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["90"],
                "0$1"
              ], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], [
                ,
                "(\\d{2})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[13-9]"],
                "0$1"
              ]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              BA: [
                ,
                [, , "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", , , , , , , [8, 9], [6]],
                [, , "(?:3(?:[05-79][2-9]|1[4579]|[23][24-9]|4[2-4689]|8[2457-9])|49[2-579]|5(?:0[2-49]|[13][2-9]|[268][2-4679]|4[4689]|5[2-79]|7[2-69]|9[2-4689]))\\d{5}", , , , "30212345", , , [8], [6]],
                [, , "6040\\d{5}|6(?:03|[1-356]|44|7\\d)\\d{6}", , , , "61123456"],
                [, , "8[08]\\d{6}", , , , "80123456", , , [8]],
                [, , "9[0246]\\d{6}", , , , "90123456", , , [8]],
                [, , "8[12]\\d{6}", , , , "82123456", , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                "BA",
                387,
                "00",
                "0",
                ,
                ,
                "0",
                ,
                ,
                ,
                [[, "(\\d{3})(\\d{3})", "$1-$2", ["[2-9]"]], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]],
                [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , "703[235]0\\d{3}|70(?:2[0-5]|3[0146]|[56]0)\\d{4}", , , , "70341234", , , [8]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              BB: [, [, , "(?:246|[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]], [, , "246521[0369]\\d{3}|246(?:2(?:2[78]|7[0-4])|4(?:1[024-6]|2\\d|3[2-9])|5(?:20|[34]\\d|54|7[1-3])|6(?:2\\d|38)|7[35]7|9(?:1[89]|63))\\d{4}", , , , "2464123456", , , , [7]], [, , "246(?:(?:2(?:[3568]\\d|4[0-57-9])|3(?:5[2-9]|6[0-6])|4(?:46|5\\d)|69[5-7]|8(?:[2-5]\\d|83))\\d|52(?:1[147]|20))\\d{3}", , , , "2462501234", , , , [7]], [
                ,
                ,
                "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
                ,
                ,
                ,
                "8002123456"
              ], [, , "(?:246976|900[2-9]\\d\\d)\\d{4}", , , , "9002123456", , , , [7]], [, , , , , , , , , [-1]], [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"], [, , "24631\\d{5}", , , , "2463101234", , , , [7]], "BB", 1, "011", "1", , , "([2-9]\\d{6})$|1", "246$1", , , , , [, , , , , , , , , [-1]], , "246", [, , , , , , , , , [-1]], [
                ,
                ,
                "246(?:292|367|4(?:1[7-9]|3[01]|4[47-9]|67)|7(?:1[2-9]|2\\d|3[016]|53))\\d{4}",
                ,
                ,
                ,
                "2464301234",
                ,
                ,
                ,
                [7]
              ], , , [, , , , , , , , , [-1]]],
              BD: [, [, , "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", , , , , , , [6, 7, 8, 9, 10]], [
                ,
                ,
                "(?:4(?:31\\d\\d|423)|5222)\\d{3}(?:\\d{2})?|8332[6-9]\\d\\d|(?:3(?:03[56]|224)|4(?:22[25]|653))\\d{3,4}|(?:3(?:42[47]|529|823)|4(?:027|525|65(?:28|8))|562|6257|7(?:1(?:5[3-5]|6[12]|7[156]|89)|22[589]56|32|42675|52(?:[25689](?:56|8)|[347]8)|71(?:6[1267]|75|89)|92374)|82(?:2[59]|32)56|9(?:03[23]56|23(?:256|373)|31|5(?:1|2[4589]56)))\\d{3}|(?:3(?:02[348]|22[35]|324|422)|4(?:22[67]|32[236-9]|6(?:2[46]|5[57])|953)|5526|6(?:024|6655)|81)\\d{4,5}|(?:2(?:7(?:1[0-267]|2[0-289]|3[0-29]|4[01]|5[1-3]|6[013]|7[0178]|91)|8(?:0[125]|1[1-6]|2[0157-9]|3[1-69]|41|6[1-35]|7[1-5]|8[1-8]|9[0-6])|9(?:0[0-2]|1[0-4]|2[568]|3[3-6]|5[5-7]|6[0136-9]|7[0-7]|8[014-9]))|3(?:0(?:2[025-79]|3[2-4])|181|22[12]|32[2356]|824)|4(?:02[09]|22[348]|32[045]|523|6(?:27|54))|666(?:22|53)|7(?:22[57-9]|42[56]|82[35])8|8(?:0[124-9]|2(?:181|2[02-4679]8)|4[12]|[5-7]2)|9(?:[04]2|2(?:2|328)|81))\\d{4}|(?:2(?:222|[45]\\d)\\d|3(?:1(?:2[5-7]|[5-7])|425|822)|4(?:033|1\\d|[257]1|332|4(?:2[246]|5[25])|6(?:2[35]|56|62)|8(?:23|54)|92[2-5])|5(?:02[03489]|22[457]|32[35-79]|42[46]|6(?:[18]|53)|724|826)|6(?:023|2(?:2[2-5]|5[3-5]|8)|32[3478]|42[34]|52[47]|6(?:[18]|6(?:2[34]|5[24]))|[78]2[2-5]|92[2-6])|7(?:02|21\\d|[3-589]1|6[12]|72[24])|8(?:217|3[12]|[5-7]1)|9[24]1)\\d{5}|(?:(?:3[2-8]|5[2-57-9]|6[03-589])1|4[4689][18])\\d{5}|[59]1\\d{5}",
                ,
                ,
                ,
                "27111234"
              ], [, , "(?:1[13-9]\\d|644)\\d{7}|(?:3[78]|44|66)[02-9]\\d{7}", , , , "1812345678", , , [10]], [, , "80[03]\\d{7}", , , , "8001234567", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "96(?:0[469]|1[0-47]|3[389]|43|6[69]|7[78])\\d{6}", , , , "9604123456", , , [10]], "BD", 880, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], [
                ,
                "(\\d{3})(\\d{3,7})",
                "$1-$2",
                ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"],
                "0$1"
              ], [, "(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"], [, "(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              BE: [, [, , "4\\d{8}|[1-9]\\d{7}", , , , , , , [8, 9]], [, , "80[2-8]\\d{5}|(?:1[0-69]|[23][2-8]|4[23]|5\\d|6[013-57-9]|71|8[1-79]|9[2-4])\\d{6}", , , , "12345678", , , [8]], [, , "4[5-9]\\d{7}", , , , "470123456", , , [9]], [, , "800[1-9]\\d{4}", , , , "80012345", , , [8]], [, , "(?:70(?:2[0-57]|3[04-7]|44|6[4-69]|7[0579])|90\\d\\d)\\d{4}", , , , "90012345", , , [8]], [
                ,
                ,
                "7879\\d{4}",
                ,
                ,
                ,
                "78791234",
                ,
                ,
                [8]
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "BE", 32, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], [, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "78(?:0[57]|1[014-8]|2[25]|3[15-8]|48|[56]0|7[06-8]|9\\d)\\d{4}", , , , "78102345", , , [8]], , , [, , , , , , , , , [-1]]],
              BF: [, [
                ,
                ,
                "[025-7]\\d{7}",
                ,
                ,
                ,
                ,
                ,
                ,
                [8]
              ], [, , "2(?:0(?:49|5[23]|6[5-7]|9[016-9])|4(?:4[569]|5[4-6]|6[5-7]|7[0179])|5(?:[34]\\d|50|6[5-7]))\\d{4}", , , , "20491234"], [, , "(?:0[1-35-7]|5[0-8]|[67]\\d)\\d{6}", , , , "70123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "BF", 226, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              BG: [
                ,
                [, , "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", , , , , , , [6, 7, 8, 9, 12], [4, 5]],
                [, , "2\\d{5,7}|(?:43[1-6]|70[1-9])\\d{4,5}|(?:[36]\\d|4[124-7]|[57][1-9]|8[1-6]|9[1-7])\\d{5,6}", , , , "2123456", , , [6, 7, 8], [4, 5]],
                [, , "(?:43[07-9]|99[69]\\d)\\d{5}|(?:8[7-9]|98)\\d{7}", , , , "43012345", , , [8, 9]],
                [, , "(?:00800\\d\\d|800)\\d{5}", , , , "80012345", , , [8, 12]],
                [, , "90\\d{6}", , , , "90123456", , , [8]],
                [, , "700\\d{5}", , , , "70012345", , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                "BG",
                359,
                "00",
                "0",
                ,
                ,
                "0",
                ,
                ,
                ,
                [[, "(\\d{6})", "$1", ["1"]], [, "(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], [
                  ,
                  "(\\d{3})(\\d{4})",
                  "$1 $2",
                  ["43[1-6]|70[1-9]"],
                  "0$1"
                ], [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]],
                [[, "(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], [
                  ,
                  "(\\d{3})(\\d{4})",
                  "$1 $2",
                  ["43[1-6]|70[1-9]"],
                  "0$1"
                ], [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              BH: [, [, , "[136-9]\\d{7}", , , , , , , [8]], [
                ,
                ,
                "(?:1(?:3[1356]|6[0156]|7\\d)\\d|6(?:1[16]\\d|500|6(?:0\\d|3[12]|44|55|7[7-9]|88)|9[69][69])|7(?:[07]\\d\\d|1(?:11|78)))\\d{4}",
                ,
                ,
                ,
                "17001234"
              ], [, , "(?:3(?:[0-79]\\d|8[0-57-9])\\d|6(?:3(?:00|33|6[16])|441|6(?:3[03-9]|[69]\\d|7[0-689])))\\d{4}", , , , "36001234"], [, , "8[02369]\\d{6}", , , , "80123456"], [, , "(?:87|9[0-8])\\d{6}", , , , "90123456"], [, , "84\\d{6}", , , , "84123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "BH", 973, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              BI: [, [, , "(?:[267]\\d|31)\\d{6}", , , , , , , [8]], [, , "(?:22|31)\\d{6}", , , , "22201234"], [
                ,
                ,
                "(?:29|[67][125-9])\\d{6}",
                ,
                ,
                ,
                "79561234"
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "BI", 257, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              BJ: [
                ,
                [, , "[24-689]\\d{7}", , , , , , , [8]],
                [, , "2(?:02|1[037]|2[45]|3[68]|4\\d)\\d{5}", , , , "20211234"],
                [, , "(?:4[0-6]|[56]\\d|9[013-9])\\d{6}", , , , "90011234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "857[58]\\d{4}", , , , "85751234"],
                "BJ",
                229,
                "00",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , "81\\d{6}", , , , "81123456"],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              BL: [
                ,
                [, , "590\\d{6}|(?:69|80|9\\d)\\d{7}", , , , , , , [9]],
                [, , "590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}", , , , "590271234"],
                [, , "69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}", , , , "690001234"],
                [, , "80[0-5]\\d{6}", , , , "800012345"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "9(?:(?:395|76[018])\\d|475[0-5])\\d{4}", , , , "976012345"],
                "BL",
                590,
                "00",
                "0",
                ,
                ,
                "0",
                ,
                ,
                ,
                ,
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              BM: [, [, , "(?:441|[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]], [, , "441(?:[46]\\d\\d|5(?:4\\d|60|89))\\d{4}", , , , "4414123456", , , , [7]], [, , "441(?:[2378]\\d|5[0-39]|92)\\d{5}", , , , "4413701234", , , , [7]], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"], [, , "900[2-9]\\d{6}", , , , "9002123456"], [, , , , , , , , , [-1]], [
                ,
                ,
                "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
                ,
                ,
                ,
                "5002345678"
              ], [, , , , , , , , , [-1]], "BM", 1, "011", "1", , , "([2-9]\\d{6})$|1", "441$1", , , , , [, , , , , , , , , [-1]], , "441", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              BN: [
                ,
                [, , "[2-578]\\d{6}", , , , , , , [7]],
                [, , "22[0-7]\\d{4}|(?:2[013-9]|[34]\\d|5[0-25-9])\\d{5}", , , , "2345678"],
                [, , "(?:22[89]|[78]\\d\\d)\\d{4}", , , , "7123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "5[34]\\d{5}", , , , "5345678"],
                "BN",
                673,
                "00",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              BO: [
                ,
                [, , "(?:[2-467]\\d\\d|8001)\\d{5}", , , , , , , [8, 9], [7]],
                [, , "(?:2(?:2\\d\\d|5(?:11|[258]\\d|9[67])|6(?:12|2\\d|9[34])|8(?:2[34]|39|62))|3(?:3\\d\\d|4(?:6\\d|8[24])|8(?:25|42|5[257]|86|9[25])|9(?:[27]\\d|3[2-4]|4[248]|5[24]|6[2-6]))|4(?:4\\d\\d|6(?:11|[24689]\\d|72)))\\d{4}", , , , "22123456", , , [8], [7]],
                [, , "[67]\\d{7}", , , , "71234567", , , [8]],
                [, , "8001[07]\\d{4}", , , , "800171234", , , [9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                "BO",
                591,
                "00(?:1\\d)?",
                "0",
                ,
                ,
                "0(1\\d)?",
                ,
                ,
                ,
                [[, "(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"], , "0$CC $1"], [, "(\\d{8})", "$1", ["[67]"], , "0$CC $1"], [, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"], , "0$CC $1"]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , "8001[07]\\d{4}", , , , , , , [9]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              BQ: [, [, , "(?:[34]1|7\\d)\\d{5}", , , , , , , [7]], [, , "(?:318[023]|41(?:6[023]|70)|7(?:1[578]|2[05]|50)\\d)\\d{3}", , , , "7151234"], [, , "(?:31(?:8[14-8]|9[14578])|416[14-9]|7(?:0[01]|7[07]|8\\d|9[056])\\d)\\d{3}", , , , "3181234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "BQ", 599, "00", , , , , , , , , , [, , , , , , , , , [-1]], , "[347]", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              BR: [, [, , "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", , , , , , , [8, 9, 10, 11]], [, , "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-5]\\d{7}", , , , "1123456789", , , [10], [8]], [, , "(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])(?:7|9\\d)\\d{7}", , , , "11961234567", , , [10, 11], [8, 9]], [
                ,
                ,
                "800\\d{6,7}",
                ,
                ,
                ,
                "800123456",
                ,
                ,
                [9, 10]
              ], [, , "300\\d{6}|[59]00\\d{6,7}", , , , "300123456", , , [9, 10]], [, , "(?:30[03]\\d{3}|4(?:0(?:0\\d|20)|370))\\d{4}|300\\d{5}", , , , "40041234", , , [8, 10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "BR", 55, "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "0", , , "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2", , , [[, "(\\d{3,6})", "$1", ["1(?:1[25-8]|2[357-9]|3[02-68]|4[12568]|5|6[0-8]|8[015]|9[0-47-9])|321|610"]], [, "(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], [
                ,
                "(\\d{4})(\\d{4})",
                "$1-$2",
                ["[2-57]", "[2357]|4(?:[0-24-9]|3(?:[0-689]|7[1-9]))"]
              ], [, "(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], [, "(\\d{5})(\\d{4})", "$1-$2", ["9"]], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)", "0 $CC ($1)"], [, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)", "0 $CC ($1)"]], [[, "(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], [
                ,
                "(\\d{3})(\\d{2,3})(\\d{4})",
                "$1 $2 $3",
                ["(?:[358]|90)0"],
                "0$1"
              ], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)", "0 $CC ($1)"], [, "(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)", "0 $CC ($1)"]], [, , , , , , , , , [-1]], , , [, , "30(?:0\\d{5,7}|3\\d{7})|40(?:0\\d|20)\\d{4}|800\\d{6,7}", , , , , , , [8, 9, 10]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              BS: [, [, , "(?:242|[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]], [
                ,
                ,
                "242(?:3(?:02|[236][1-9]|4[0-24-9]|5[0-68]|7[347]|8[0-4]|9[2-467])|461|502|6(?:0[1-5]|12|2[013]|[45]0|7[67]|8[78]|9[89])|7(?:02|88))\\d{4}",
                ,
                ,
                ,
                "2423456789",
                ,
                ,
                ,
                [7]
              ], [, , "242(?:3(?:5[79]|7[56]|95)|4(?:[23][1-9]|4[1-35-9]|5[1-8]|6[2-8]|7\\d|81)|5(?:2[45]|3[35]|44|5[1-46-9]|65|77)|6[34]6|7(?:27|38)|8(?:0[1-9]|1[02-9]|2\\d|[89]9))\\d{4}", , , , "2423591234", , , , [7]], [, , "242300\\d{4}|8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456", , , , [7]], [, , "900[2-9]\\d{6}", , , , "9002123456"], [, , , , , , , , , [-1]], [
                ,
                ,
                "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
                ,
                ,
                ,
                "5002345678"
              ], [, , , , , , , , , [-1]], "BS", 1, "011", "1", , , "([3-8]\\d{6})$|1", "242$1", , , , , [, , , , , , , , , [-1]], , "242", [, , , , , , , , , [-1]], [, , "242225\\d{4}", , , , "2422250123"], , , [, , , , , , , , , [-1]]],
              BT: [, [, , "[17]\\d{7}|[2-8]\\d{6}", , , , , , , [7, 8], [6]], [, , "(?:2[3-6]|[34][5-7]|5[236]|6[2-46]|7[246]|8[2-4])\\d{5}", , , , "2345678", , , [7], [6]], [, , "(?:1[67]|77)\\d{6}", , , , "17123456", , , [8]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "BT", 975, "00", , , , , , , , [[, "(\\d{3})(\\d{3})", "$1 $2", ["[2-7]"]], [
                ,
                "(\\d)(\\d{3})(\\d{3})",
                "$1 $2 $3",
                ["[2-68]|7[246]"]
              ], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]], [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              BW: [
                ,
                [, , "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", , , , , , , [7, 8, 10]],
                [
                  ,
                  ,
                  "(?:2(?:4[0-48]|6[0-24]|9[0578])|3(?:1[0-35-9]|55|[69]\\d|7[013]|81)|4(?:6[03]|7[1267]|9[0-5])|5(?:3[03489]|4[0489]|7[1-47]|88|9[0-49])|6(?:2[1-35]|5[149]|8[067]))\\d{4}",
                  ,
                  ,
                  ,
                  "2401234",
                  ,
                  ,
                  [7]
                ],
                [, , "(?:321|7[1-8]\\d)\\d{5}", , , , "71123456", , , [8]],
                [, , "(?:0800|800\\d)\\d{6}", , , , "0800012345", , , [10]],
                [, , "90\\d{5}", , , , "9012345", , , [7]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "79(?:1(?:[01]\\d|2[0-8])|2[0-7]\\d)\\d{3}", , , , "79101234", , , [8]],
                "BW",
                267,
                "00",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [[, "(\\d{2})(\\d{5})", "$1 $2", ["90"]], [, "(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], [, "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              BY: [, [, , "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", , , , , , , [6, 7, 8, 9, 10, 11], [5]], [, , "(?:1(?:5(?:1[1-5]|[24]\\d|6[2-4]|9[1-7])|6(?:[235]\\d|4[1-7])|7\\d\\d)|2(?:1(?:[246]\\d|3[0-35-9]|5[1-9])|2(?:[235]\\d|4[0-8])|3(?:[26]\\d|3[02-79]|4[024-7]|5[03-7])))\\d{5}", , , , "152450911", , , [9], [5, 6, 7]], [
                ,
                ,
                "(?:2(?:5[5-79]|9[1-9])|(?:33|44)\\d)\\d{6}",
                ,
                ,
                ,
                "294911911",
                ,
                ,
                [9]
              ], [, , "800\\d{3,7}|8(?:0[13]|20\\d)\\d{7}", , , , "8011234567"], [, , "(?:810|902)\\d{7}", , , , "9021234567", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "249\\d{6}", , , , "249123456", , , [9]], "BY", 375, "810", "8", , , "0|80?", , "8~10", , [[, "(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], [, "(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], [
                ,
                "(\\d{4})(\\d{2})(\\d{3})",
                "$1 $2-$3",
                ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],
                "8 0$1"
              ], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], [, "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], , [, , , , , , , , , [-1]], , , [, , "800\\d{3,7}|(?:8(?:0[13]|10|20\\d)|902)\\d{7}"], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              BZ: [, [, , "(?:0800\\d|[2-8])\\d{6}", , , , , , , [7, 11]], [, , "(?:2(?:[02]\\d|36|[68]0)|[3-58](?:[02]\\d|[68]0)|7(?:[02]\\d|32|[68]0))\\d{4}", , , , "2221234", , , [7]], [
                ,
                ,
                "6[0-35-7]\\d{5}",
                ,
                ,
                ,
                "6221234",
                ,
                ,
                [7]
              ], [, , "0800\\d{7}", , , , "08001234123", , , [11]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "BZ", 501, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], [, "(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              CA: [, [, , "(?:[2-8]\\d|90)\\d{8}|3\\d{6}", , , , , , , [7, 10]], [
                ,
                ,
                "(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}",
                ,
                ,
                ,
                "5062345678",
                ,
                ,
                [10],
                [7]
              ], [, , "(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", , , , "5062345678", , , [10], [7]], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456", , , [10]], [, , "900[2-9]\\d{6}", , , , "9002123456", , , [10]], [, , , , , , , , , [-1]], [
                ,
                ,
                "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}",
                ,
                ,
                ,
                "5002345678",
                ,
                ,
                [10]
              ], [, , "600[2-9]\\d{6}", , , , "6002012345", , , [10]], "CA", 1, "011", "1", , , "1", , , 1, , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "310\\d{4}", , , , "3101234", , , [7]], , , [, , , , , , , , , [-1]]],
              CC: [, [, , "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", , , , , , , [6, 7, 8, 9, 10, 12]], [, , "8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", , , , "891621234", , , [9], [8]], [
                ,
                ,
                "4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}",
                ,
                ,
                ,
                "412345678",
                ,
                ,
                [9]
              ], [, , "180(?:0\\d{3}|2)\\d{3}", , , , "1800123456", , , [7, 10]], [, , "190[0-26]\\d{6}", , , , "1900123456", , , [10]], [, , "13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", , , , "1300123456", , , [6, 8, 10, 12]], [, , , , , , , , , [-1]], [, , "14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", , , , "147101234", , , [9]], "CC", 61, "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "0", , , "([59]\\d{7})$|0", "8$1", "0011", , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              CD: [, [
                ,
                ,
                "[189]\\d{8}|[1-68]\\d{6}",
                ,
                ,
                ,
                ,
                ,
                ,
                [7, 9]
              ], [, , "12\\d{7}|[1-6]\\d{6}", , , , "1234567"], [, , "88\\d{5}|(?:8[0-59]|9[017-9])\\d{7}", , , , "991234567"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "CD", 243, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], [, "(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              CF: [, [
                ,
                ,
                "(?:[27]\\d{3}|8776)\\d{4}",
                ,
                ,
                ,
                ,
                ,
                ,
                [8]
              ], [, , "2[12]\\d{6}", , , , "21612345"], [, , "7[024-7]\\d{6}", , , , "70012345"], [, , , , , , , , , [-1]], [, , "8776\\d{4}", , , , "87761234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "CF", 236, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              CG: [, [, , "222\\d{6}|(?:0\\d|80)\\d{7}", , , , , , , [9]], [, , "222[1-589]\\d{5}", , , , "222123456"], [
                ,
                ,
                "026(?:1[0-5]|6[6-9])\\d{4}|0(?:[14-6]\\d\\d|2(?:40|5[5-8]|6[07-9]))\\d{5}",
                ,
                ,
                ,
                "061234567"
              ], [, , , , , , , , , [-1]], [, , "80[0-2]\\d{6}", , , , "800123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "CG", 242, "00", , , , , , , , [[, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              CH: [
                ,
                [, , "8\\d{11}|[2-9]\\d{8}", , , , , , , [9, 12]],
                [, , "(?:2[12467]|3[1-4]|4[134]|5[256]|6[12]|[7-9]1)\\d{7}", , , , "212345678", , , [9]],
                [, , "7[35-9]\\d{7}", , , , "781234567", , , [9]],
                [, , "800\\d{6}", , , , "800123456", , , [9]],
                [, , "90[016]\\d{6}", , , , "900123456", , , [9]],
                [, , "84[0248]\\d{6}", , , , "840123456", , , [9]],
                [, , "878\\d{6}", , , , "878123456", , , [9]],
                [, , , , , , , , , [-1]],
                "CH",
                41,
                "00",
                "0",
                ,
                ,
                "0",
                ,
                ,
                ,
                [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]],
                ,
                [, , "74[0248]\\d{6}", , , , "740123456", , , [9]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , "5[18]\\d{7}", , , , "581234567", , , [9]],
                ,
                ,
                [
                  ,
                  ,
                  "860\\d{9}",
                  ,
                  ,
                  ,
                  "860123456789",
                  ,
                  ,
                  [12]
                ]
              ],
              CI: [, [, , "[02]\\d{9}", , , , , , , [10]], [, , "2(?:[15]\\d{3}|7(?:2(?:0[23]|1[2357]|2[245]|3[45]|4[3-5])|3(?:06|1[69]|[2-6]7)))\\d{5}", , , , "2123456789"], [, , "0[157]\\d{8}", , , , "0123456789"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "CI", 225, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              CK: [, [
                ,
                ,
                "[2-578]\\d{4}",
                ,
                ,
                ,
                ,
                ,
                ,
                [5]
              ], [, , "(?:2\\d|3[13-7]|4[1-5])\\d{3}", , , , "21234"], [, , "[578]\\d{4}", , , , "71234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "CK", 682, "00", , , , , , , , [[, "(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              CL: [, [, , "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", , , , , , , [9, 10, 11]], [
                ,
                ,
                "2(?:1982[0-6]|3314[05-9])\\d{3}|(?:2(?:1(?:160|962)|3(?:2\\d\\d|3(?:[03467]\\d|1[0-35-9]|2[1-9]|5[0-24-9]|8[0-3])|600)|646[59])|80[1-9]\\d\\d|9(?:3(?:[0-57-9]\\d\\d|6(?:0[02-9]|[1-9]\\d))|6(?:[0-8]\\d\\d|9(?:[02-79]\\d|1[05-9]))|7[1-9]\\d\\d|9(?:[03-9]\\d\\d|1(?:[0235-9]\\d|4[0-24-9])|2(?:[0-79]\\d|8[0-46-9]))))\\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2458])\\d{7}",
                ,
                ,
                ,
                "221234567",
                ,
                ,
                [9]
              ], [, , "2(?:1982[0-6]|3314[05-9])\\d{3}|(?:2(?:1(?:160|962)|3(?:2\\d\\d|3(?:[03467]\\d|1[0-35-9]|2[1-9]|5[0-24-9]|8[0-3])|600)|646[59])|80[1-9]\\d\\d|9(?:3(?:[0-57-9]\\d\\d|6(?:0[02-9]|[1-9]\\d))|6(?:[0-8]\\d\\d|9(?:[02-79]\\d|1[05-9]))|7[1-9]\\d\\d|9(?:[03-9]\\d\\d|1(?:[0235-9]\\d|4[0-24-9])|2(?:[0-79]\\d|8[0-46-9]))))\\d{4}|(?:22|3[2-5]|[47][1-35]|5[1-3578]|6[13-57]|8[1-9]|9[2458])\\d{7}", , , , "221234567", , , [9]], [, , "(?:123|8)00\\d{6}", , , , "800123456", , , [9, 11]], [, , , , , , , , , [-1]], [
                ,
                ,
                "600\\d{7,8}",
                ,
                ,
                ,
                "6001234567",
                ,
                ,
                [10, 11]
              ], [, , , , , , , , , [-1]], [, , "44\\d{7}", , , , "441234567", , , [9]], "CL", 56, "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", , , , , , , 1, [[, "(\\d{4})", "$1", ["1(?:[03-589]|21)|[29]0|78"]], [, "(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], [
                ,
                "(\\d{2})(\\d{3})(\\d{4})",
                "$1 $2 $3",
                ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"],
                "($1)"
              ], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]], [[, "(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], [
                ,
                "(\\d{3})(\\d{3})(\\d{3,4})",
                "$1 $2 $3",
                ["60|8"]
              ], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]], [, , , , , , , , , [-1]], , , [, , "600\\d{7,8}", , , , , , , [10, 11]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              CM: [, [, , "[26]\\d{8}|88\\d{6,7}", , , , , , , [8, 9]], [, , "2(?:22|33)\\d{6}", , , , "222123456", , , [9]], [, , "(?:24[23]|6[25-9]\\d)\\d{6}", , , , "671234567", , , [9]], [, , "88\\d{6,7}", , , , "88012345"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "CM", 237, "00", , , , , , , , [[
                ,
                "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["88"]
              ], [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              CN: [, [, , "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", , , , , , , [7, 8, 9, 10, 11, 12], [5, 6]], [
                ,
                ,
                "(?:10(?:[02-79]\\d\\d|[18](?:0[1-9]|[1-9]\\d))|21(?:[18](?:0[1-9]|[1-9]\\d)|[2-79]\\d\\d))\\d{5}|(?:43[35]|754)\\d{7,8}|8(?:078\\d{7}|51\\d{7,8})|(?:10|(?:2|85)1|43[35]|754)(?:100\\d\\d|95\\d{3,4})|(?:2[02-57-9]|3(?:11|7[179])|4(?:[15]1|3[12])|5(?:1\\d|2[37]|3[12]|51|7[13-79]|9[15])|7(?:[39]1|5[57]|6[09])|8(?:71|98))(?:[02-8]\\d{7}|1(?:0(?:0\\d\\d(?:\\d{3})?|[1-9]\\d{5})|[1-9]\\d{6})|9(?:[0-46-9]\\d{6}|5\\d{3}(?:\\d(?:\\d{2})?)?))|(?:3(?:1[02-9]|35|49|5\\d|7[02-68]|9[1-68])|4(?:1[02-9]|2[179]|3[46-9]|5[2-9]|6[47-9]|7\\d|8[23])|5(?:3[03-9]|4[36]|5[02-9]|6[1-46]|7[028]|80|9[2-46-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[17]\\d|2[248]|3[04-9]|4[3-6]|5[0-3689]|6[2368]|9[02-9])|8(?:1[236-8]|2[5-7]|3\\d|5[2-9]|7[02-9]|8[36-8]|9[1-7])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[02-8]\\d{6}|1(?:0(?:0\\d\\d(?:\\d{2})?|[1-9]\\d{4})|[1-9]\\d{5})|9(?:[0-46-9]\\d{5}|5\\d{3,5}))",
                ,
                ,
                ,
                "1012345678",
                ,
                ,
                [7, 8, 9, 10, 11],
                [5, 6]
              ], [, , "1740[0-5]\\d{6}|1(?:[38]\\d|4[57]|[59][0-35-9]|6[25-7]|7[0-35-8])\\d{8}", , , , "13123456789", , , [11]], [, , "(?:(?:10|21)8|8)00\\d{7}", , , , "8001234567", , , [10, 12]], [, , "16[08]\\d{5}", , , , "16812345", , , [8]], [
                ,
                ,
                "10(?:10\\d{4}|96\\d{3,4})|400\\d{7}|950\\d{7,8}|(?:2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))96\\d{3,4}",
                ,
                ,
                ,
                "4001234567",
                ,
                ,
                [7, 8, 9, 10, 11],
                [5, 6]
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "CN", 86, "00|1(?:[12]\\d|79)\\d\\d00", "0", , , "(1(?:[12]\\d|79)\\d\\d)|0", , "00", , [
                [, "(\\d{5,6})", "$1", ["10|96"]],
                [, "(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "10(?:10|9[56])|2[0-57-9](?:100|9[56])"], "0$1", "$CC $1"],
                [, "(\\d{3})(\\d{4})", "$1 $2", ["[1-9]", "1[1-9]|26|[3-9]|(?:10|2[0-57-9])(?:[0-8]|9[0-47-9])", "1(?:0(?:[0-8]|9[0-47-9])|[1-9])|2(?:[0-57-9](?:[02-8]|1(?:0[1-9]|[1-9])|9[0-47-9])|6)|[3-9]"]],
                [, "(\\d{4})(\\d{4})", "$1 $2", ["16[08]"]],
                [
                  ,
                  "(\\d{3})(\\d{5,6})",
                  "$1 $2",
                  [
                    "3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]",
                    "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]",
                    "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])",
                    "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"
                  ],
                  "0$1",
                  "$CC $1"
                ],
                [, "(\\d{4})(\\d{4})", "$1 $2", [
                  "[1-9]",
                  "1(?:0(?:[02-8]|1[1-9]|9[0-47-9])|[1-9])|2(?:[0-57-9](?:[0-8]|9[0-47-9])|6)|[3-9]",
                  "1(?:0(?:[02-8]|1[1-9]|9[0-47-9])|[1-9])|26|3(?:[0268]|4[0-8]|9[079])|4(?:[049]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|8[1-9]|90)|6(?:[0-24578]|3[06-9]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|5(?:0|[23][0-8])|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9]|5[06-9])|(?:33|85[23]9)[0-46-9]|(?:2[0-57-9]|3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[0-8]|9[0-47-9])",
                  "1(?:0[02-8]|[1-9])|2(?:[0-57-9][0-8]|6)|3(?:[0268]|3[0-46-9]|4[0-8]|9[079])|4(?:[049]|2[02-68]|[35]0|6[0-356]|8[014-9])|5(?:0|2[0-24-689]|4[0-2457-9]|6[057-9]|90)|6(?:[0-24578]|3[06-9]|6[14-79]|9[03-9])|7(?:0[02-9]|2[0135-79]|3[23]|4[0-27-9]|6[1457]|8)|8(?:[046]|1[01459]|2[0-489]|5(?:0|[23](?:[02-8]|1[1-9]|9[0-46-9]))|8[0-2459]|9[09])|9(?:0[0457]|1[08]|[268]|4[024-9]|5[06-9])|(?:10|2[0-57-9])9[0-47-9]|(?:101|58|85[23]10)[1-9]|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:[02-8]|1(?:0[1-9]|[1-9])|9[0-47-9])"
                ]],
                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
                [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", "$CC $1", 1],
                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", "$CC $1", 1],
                [
                  ,
                  "(\\d{3})(\\d{7,8})",
                  "$1 $2",
                  ["9"]
                ],
                [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", "$CC $1", 1],
                [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", "$CC $1", 1],
                [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"], , "$CC $1"],
                [, "(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", , 1]
              ], [
                [, "(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "10(?:10|9[56])|2[0-57-9](?:100|9[56])"], "0$1", "$CC $1"],
                [, "(\\d{3})(\\d{5,6})", "$1 $2", [
                  "3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]",
                  "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]",
                  "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])",
                  "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"
                ], "0$1", "$CC $1"],
                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]],
                [
                  ,
                  "(\\d{2})(\\d{4})(\\d{4})",
                  "$1 $2 $3",
                  ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"],
                  "0$1",
                  "$CC $1",
                  1
                ],
                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", "$CC $1", 1],
                [, "(\\d{3})(\\d{7,8})", "$1 $2", ["9"]],
                [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", "$CC $1", 1],
                [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", "$CC $1", 1],
                [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"], , "$CC $1"],
                [, "(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", , 1]
              ], [, , , , , , , , , [-1]], , , [, , "(?:(?:10|21)8|[48])00\\d{7}|950\\d{7,8}", , , , , , , [10, 11, 12]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              CO: [, [, , "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}", , , , , , , [10, 11], [7]], [, , "601055(?:[0-4]\\d|50)\\d\\d|6010(?:[0-4]\\d|5[0-4])\\d{4}|60(?:[124-7][2-9]|8[1-9])\\d{6}", , , , "6012345678", , , [10], [7]], [
                ,
                ,
                "333301[0-5]\\d{3}|3333(?:00|2[5-9]|[3-9]\\d)\\d{4}|(?:3(?:24[1-9]|3(?:00|3[0-24-9]))|9101)\\d{6}|3(?:0[0-5]|1\\d|2[0-3]|5[01]|70)\\d{7}",
                ,
                ,
                ,
                "3211234567",
                ,
                ,
                [10]
              ], [, , "1800\\d{7}", , , , "18001234567", , , [11]], [, , "19(?:0[01]|4[78])\\d{7}", , , , "19001234567", , , [11]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "CO", 57, "00(?:4(?:[14]4|56)|[579])", "0", , , "0([3579]|4(?:[14]4|56))?", , , , [[, "(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)", "0$CC $1"], [, "(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"], , "0$CC $1"], [, "(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1"]], [[, "(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)", "0$CC $1"], [
                ,
                "(\\d{3})(\\d{7})",
                "$1 $2",
                ["3[0-357]|91"],
                ,
                "0$CC $1"
              ], [, "(\\d)(\\d{3})(\\d{7})", "$1 $2 $3", ["1"]]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              CR: [, [, , "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", , , , , , , [8, 10]], [, , "210[7-9]\\d{4}|2(?:[024-7]\\d|1[1-9])\\d{5}", , , , "22123456", , , [8]], [, , "(?:3005\\d|6500[01])\\d{3}|(?:5[07]|6[0-4]|7[0-3]|8[3-9])\\d{6}", , , , "83123456", , , [8]], [, , "800\\d{7}", , , , "8001234567", , , [10]], [, , "90[059]\\d{7}", , , , "9001234567", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [
                ,
                ,
                "(?:210[0-6]|4\\d{3}|5100)\\d{4}",
                ,
                ,
                ,
                "40001234",
                ,
                ,
                [8]
              ], "CR", 506, "00", , , , "(19(?:0[0-2468]|1[09]|20|66|77|99))", , , , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"], , "$CC $1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"], , "$CC $1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              CU: [, [, , "[27]\\d{6,7}|[34]\\d{5,7}|63\\d{6}|(?:5|8\\d\\d)\\d{7}", , , , , , , [6, 7, 8, 10], [4, 5]], [, , "(?:3[23]|4[89])\\d{4,6}|(?:31|4[36]|8(?:0[25]|78)\\d)\\d{6}|(?:2[1-4]|4[1257]|7\\d)\\d{5,6}", , , , "71234567", , , , [4, 5]], [
                ,
                ,
                "(?:5\\d|63)\\d{6}",
                ,
                ,
                ,
                "51234567",
                ,
                ,
                [8]
              ], [, , "800\\d{7}", , , , "8001234567", , , [10]], [, , , , , , , , , [-1]], [, , "807\\d{7}", , , , "8071234567", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "CU", 53, "119", "0", , , "0", , , , [[, "(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], [, "(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], [, "(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], [, "(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              CV: [, [, , "(?:[2-59]\\d\\d|800)\\d{4}", , , , , , , [7]], [
                ,
                ,
                "2(?:2[1-7]|3[0-8]|4[12]|5[1256]|6\\d|7[1-3]|8[1-5])\\d{4}",
                ,
                ,
                ,
                "2211234"
              ], [, , "(?:36|5[1-389]|9\\d)\\d{5}", , , , "9911234"], [, , "800\\d{4}", , , , "8001234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "(?:3[3-5]|4[356])\\d{5}", , , , "3401234"], "CV", 238, "0", , , , , , , , [[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              CW: [, [, , "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", , , , , , , [7, 8]], [
                ,
                ,
                "9(?:4(?:3[0-5]|4[14]|6\\d)|50\\d|7(?:2[014]|3[02-9]|4[4-9]|6[357]|77|8[7-9])|8(?:3[39]|[46]\\d|7[01]|8[57-9]))\\d{4}",
                ,
                ,
                ,
                "94351234"
              ], [, , "953[01]\\d{4}|9(?:5[12467]|6[5-9])\\d{5}", , , , "95181234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "60[0-2]\\d{4}", , , , "6001234", , , [7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "CW", 599, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], , [, , "955\\d{5}", , , , "95581234", , , [8]], 1, "[69]", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              CX: [
                ,
                [, , "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", , , , , , , [6, 7, 8, 9, 10, 12]],
                [
                  ,
                  ,
                  "8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",
                  ,
                  ,
                  ,
                  "891641234",
                  ,
                  ,
                  [9],
                  [8]
                ],
                [, , "4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-26-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", , , , "412345678", , , [9]],
                [, , "180(?:0\\d{3}|2)\\d{3}", , , , "1800123456", , , [7, 10]],
                [, , "190[0-26]\\d{6}", , , , "1900123456", , , [10]],
                [, , "13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", , , , "1300123456", , , [6, 8, 10, 12]],
                [, , , , , , , , , [-1]],
                [, , "14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", , , , "147101234", , , [9]],
                "CX",
                61,
                "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011",
                "0",
                ,
                ,
                "([59]\\d{7})$|0",
                "8$1",
                "0011",
                ,
                ,
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              CY: [
                ,
                [, , "(?:[279]\\d|[58]0)\\d{6}", , , , , , , [8]],
                [, , "2[2-6]\\d{6}", , , , "22345678"],
                [, , "9(?:10|[4-79]\\d)\\d{5}", , , , "96123456"],
                [, , "800\\d{5}", , , , "80001234"],
                [, , "90[09]\\d{5}", , , , "90012345"],
                [, , "80[1-9]\\d{5}", , , , "80112345"],
                [, , "700\\d{5}", , , , "70012345"],
                [, , , , , , , , , [-1]],
                "CY",
                357,
                "00",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [[, "(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , "(?:50|77)\\d{6}", , , , "77123456"],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              CZ: [, [, , "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", , , , , , , [9, 10, 11, 12]], [, , "(?:2\\d|3[1257-9]|4[16-9]|5[13-9])\\d{7}", , , , "212345678", , , [9]], [, , "(?:60[1-8]|7(?:0[2-5]|[2379]\\d))\\d{6}", , , , "601123456", , , [9]], [, , "800\\d{6}", , , , "800123456", , , [9]], [, , "9(?:0[05689]|76)\\d{6}", , , , "900123456", , , [9]], [, , "8[134]\\d{7}", , , , "811234567", , , [9]], [, , "70[01]\\d{6}", , , , "700123456", , , [9]], [, , "9[17]0\\d{6}", , , , "910123456", , , [9]], "CZ", 420, "00", , , , , , , , [
                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]],
                [, "(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]],
                [, "(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]],
                [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]
              ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "9(?:5\\d|7[2-4])\\d{6}", , , , "972123456", , , [9]], , , [, , "9(?:3\\d{9}|6\\d{7,10})", , , , "93123456789"]],
              DE: [, [
                ,
                ,
                "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}",
                ,
                ,
                ,
                ,
                ,
                ,
                [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                [2, 3]
              ], [
                ,
                ,
                "32\\d{9,11}|49[1-6]\\d{10}|322\\d{6}|49[0-7]\\d{3,9}|(?:[34]0|[68]9)\\d{3,13}|(?:2(?:0[1-689]|[1-3569]\\d|4[0-8]|7[1-7]|8[0-7])|3(?:[3569]\\d|4[0-79]|7[1-7]|8[1-8])|4(?:1[02-9]|[2-48]\\d|5[0-6]|6[0-8]|7[0-79])|5(?:0[2-8]|[124-6]\\d|[38][0-8]|[79][0-7])|6(?:0[02-9]|[1-358]\\d|[47][0-8]|6[1-9])|7(?:0[2-8]|1[1-9]|[27][0-7]|3\\d|[4-6][0-8]|8[0-5]|9[013-7])|8(?:0[2-9]|1[0-79]|2\\d|3[0-46-9]|4[0-6]|5[013-9]|6[1-8]|7[0-8]|8[0-24-6])|9(?:0[6-9]|[1-4]\\d|[589][0-7]|6[0-8]|7[0-467]))\\d{3,12}",
                ,
                ,
                ,
                "30123456",
                ,
                ,
                [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
                [2, 3, 4]
              ], [, , "15(?:[0-25-9]\\d\\d|310)\\d{6}|1(?:6[023]|7\\d)\\d{7,8}", , , , "15123456789", , , [10, 11]], [, , "800\\d{7,12}", , , , "8001234567890", , , [10, 11, 12, 13, 14, 15]], [, , "(?:137[7-9]|900(?:[135]|9\\d))\\d{6}", , , , "9001234567", , , [10, 11]], [, , "180\\d{5,11}|13(?:7[1-6]\\d\\d|8)\\d{4}", , , , "18012345", , , [7, 8, 9, 10, 11, 12, 13, 14]], [, , "700\\d{8}", , , , "70012345678", , , [11]], [, , , , , , , , , [-1]], "DE", 49, "00", "0", , , "0", , , , [
                [, "(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"],
                [
                  ,
                  "(\\d{3})(\\d{3,12})",
                  "$1 $2",
                  ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"],
                  "0$1"
                ],
                [
                  ,
                  "(\\d{4})(\\d{2,11})",
                  "$1 $2",
                  ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"],
                  "0$1"
                ],
                [, "(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"],
                [, "(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"],
                [, "(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"],
                [, "(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"],
                [, "(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"],
                [, "(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"],
                [, "(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"],
                [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                [, "(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"],
                [, "(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"],
                [, "(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|31)"], "0$1"],
                [, "(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"],
                [, "(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"],
                [, "(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"],
                [, "(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]
              ], , [, , "16(?:4\\d{1,10}|[89]\\d{1,11})", , , , "16412345", , , [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]], , , [, , , , , , , , , [-1]], [, , "18(?:1\\d{5,11}|[2-9]\\d{8})", , , , "18500123456", , , [8, 9, 10, 11, 12, 13, 14]], , , [
                ,
                ,
                "1(?:6(?:013|255|399)|7(?:(?:[015]1|[69]3)3|[2-4]55|[78]99))\\d{7,8}|15(?:(?:[03-68]00|113)\\d|2\\d55|7\\d99|9\\d33)\\d{7}",
                ,
                ,
                ,
                "177991234567",
                ,
                ,
                [12, 13]
              ]],
              DJ: [, [, , "(?:2\\d|77)\\d{6}", , , , , , , [8]], [, , "2(?:1[2-5]|7[45])\\d{5}", , , , "21360003"], [, , "77\\d{6}", , , , "77831001"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "DJ", 253, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              DK: [, [, , "[2-9]\\d{7}", , , , , , , [8]], [, , "(?:[2-7]\\d|8[126-9]|9[1-46-9])\\d{6}", , , , "32123456"], [
                ,
                ,
                "(?:[2-7]\\d|8[126-9]|9[1-46-9])\\d{6}",
                ,
                ,
                ,
                "32123456"
              ], [, , "80\\d{6}", , , , "80123456"], [, , "90\\d{6}", , , , "90123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "DK", 45, "00", , , , , , , 1, [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              DM: [
                ,
                [, , "(?:[58]\\d\\d|767|900)\\d{7}", , , , , , , [10], [7]],
                [, , "767(?:2(?:55|66)|4(?:2[01]|4[0-25-9])|50[0-4])\\d{4}", , , , "7674201234", , , , [7]],
                [, , "767(?:2(?:[2-4689]5|7[5-7])|31[5-7]|61[1-8]|70[1-6])\\d{4}", , , , "7672251234", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                [, , "900[2-9]\\d{6}", , , , "9002123456"],
                [, , , , , , , , , [-1]],
                [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]],
                "DM",
                1,
                "011",
                "1",
                ,
                ,
                "([2-7]\\d{6})$|1",
                "767$1",
                ,
                ,
                ,
                ,
                [, , , , , , , , , [-1]],
                ,
                "767",
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              DO: [, [, , "(?:[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]], [, , "8(?:[04]9[2-9]\\d\\d|29(?:2(?:[0-59]\\d|6[04-9]|7[0-27]|8[0237-9])|3(?:[0-35-9]\\d|4[7-9])|[45]\\d\\d|6(?:[0-27-9]\\d|[3-5][1-9]|6[0135-8])|7(?:0[013-9]|[1-37]\\d|4[1-35689]|5[1-4689]|6[1-57-9]|8[1-79]|9[1-8])|8(?:0[146-9]|1[0-48]|[248]\\d|3[1-79]|5[01589]|6[013-68]|7[124-8]|9[0-8])|9(?:[0-24]\\d|3[02-46-9]|5[0-79]|60|7[0169]|8[57-9]|9[02-9])))\\d{4}", , , , "8092345678", , , , [7]], [, , "8[024]9[2-9]\\d{6}", , , , "8092345678", , , , [7]], [
                ,
                ,
                "8(?:00(?:14|[2-9]\\d)|(?:33|44|55|66|77|88)[2-9]\\d)\\d{5}",
                ,
                ,
                ,
                "8002123456"
              ], [, , "900[2-9]\\d{6}", , , , "9002123456"], [, , , , , , , , , [-1]], [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"], [, , , , , , , , , [-1]], "DO", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "8001|8[024]9", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              DZ: [
                ,
                [, , "(?:[1-4]|[5-79]\\d|80)\\d{7}", , , , , , , [8, 9]],
                [, , "9619\\d{5}|(?:1\\d|2[013-79]|3[0-8]|4[013-689])\\d{6}", , , , "12345678"],
                [, , "(?:5(?:4[0-29]|5\\d|6[0-2])|6(?:[569]\\d|7[0-6])|7[7-9]\\d)\\d{6}", , , , "551234567", , , [9]],
                [, , "800\\d{6}", , , , "800123456", , , [9]],
                [, , "80[3-689]1\\d{5}", , , , "808123456", , , [9]],
                [, , "80[12]1\\d{5}", , , , "801123456", , , [9]],
                [, , , , , , , , , [-1]],
                [, , "98[23]\\d{6}", , , , "983123456", , , [9]],
                "DZ",
                213,
                "00",
                "0",
                ,
                ,
                "0",
                ,
                ,
                ,
                [
                  [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"],
                  [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"],
                  [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]
                ],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              EC: [
                ,
                [, , "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", , , , , , , [8, 9, 10, 11], [7]],
                [, , "[2-7][2-7]\\d{6}", , , , "22123456", , , [8], [7]],
                [, , "964[0-2]\\d{5}|9(?:39|[57][89]|6[0-36-9]|[89]\\d)\\d{6}", , , , "991234567", , , [9]],
                [, , "1800\\d{7}|1[78]00\\d{6}", , , , "18001234567", , , [10, 11]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "[2-7]890\\d{4}", , , , "28901234", , , [8]],
                "EC",
                593,
                "00",
                "0",
                ,
                ,
                "0",
                ,
                ,
                ,
                [[, "(\\d{3})(\\d{4})", "$1-$2", ["[2-7]"]], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]],
                [[, "(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-7]"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              EE: [, [, , "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", , , , , , , [7, 8, 10]], [
                ,
                ,
                "(?:3[23589]|4[3-8]|6\\d|7[1-9]|88)\\d{5}",
                ,
                ,
                ,
                "3212345",
                ,
                ,
                [7]
              ], [, , "(?:5\\d{5}|8(?:1(?:0(?:0(?:00|[178]\\d)|[3-9]\\d\\d)|(?:1(?:0[236]|1\\d)|(?:2[0-59]|[3-79]\\d)\\d)\\d)|2(?:0(?:0(?:00|4\\d)|(?:19|[2-7]\\d)\\d)|(?:(?:[124-6]\\d|3[5-9])\\d|7(?:[0-79]\\d|8[13-9])|8(?:[2-6]\\d|7[01]))\\d)|[349]\\d{4}))\\d\\d|5(?:(?:[02]\\d|5[0-478])\\d|1(?:[0-8]\\d|95)|6(?:4[0-4]|5[1-589]))\\d{3}", , , , "51234567", , , [7, 8]], [, , "800(?:(?:0\\d\\d|1)\\d|[2-9])\\d{3}", , , , "80012345"], [, , "(?:40\\d\\d|900)\\d{4}", , , , "9001234", , , [7, 8]], [, , , , , , , , , [-1]], [
                ,
                ,
                "70[0-2]\\d{5}",
                ,
                ,
                ,
                "70012345",
                ,
                ,
                [8]
              ], [, , , , , , , , , [-1]], "EE", 372, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], [, "(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]], , [, , , , , , , , , [-1]], , , [, , "800[2-9]\\d{3}", , , , , , , [7]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              EG: [, [
                ,
                ,
                "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",
                ,
                ,
                ,
                ,
                ,
                ,
                [8, 9, 10],
                [6, 7]
              ], [, , "13[23]\\d{6}|(?:15|57)\\d{6,7}|(?:2[2-4]|3|4[05-8]|5[05]|6[24-689]|8[2468]|9[235-7])\\d{7}", , , , "234567890", , , [8, 9], [6, 7]], [, , "1[0-25]\\d{8}", , , , "1001234567", , , [10]], [, , "800\\d{7}", , , , "8001234567", , , [10]], [, , "900\\d{7}", , , , "9001234567", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "EG", 20, "00", "0", , , "0", , , , [[, "(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], [, "(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], [
                ,
                "(\\d{3})(\\d{3})(\\d{4})",
                "$1 $2 $3",
                ["[89]"],
                "0$1"
              ], [, "(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              EH: [, [, , "[5-8]\\d{8}", , , , , , , [9]], [, , "528[89]\\d{5}", , , , "528812345"], [, , "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-2]|5[01]|8[0-3]))\\d{6}", , , , "650123456"], [, , "80[0-7]\\d{6}", , , , "801234567"], [, , "89\\d{7}", , , , "891234567"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}", , , , "592401234"], "EH", 212, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , "528[89]", [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              ER: [, [, , "[178]\\d{6}", , , , , , , [7], [6]], [, , "(?:1(?:1[12568]|[24]0|55|6[146])|8\\d\\d)\\d{4}", , , , "8370362", , , , [6]], [, , "(?:17[1-3]|7\\d\\d)\\d{4}", , , , "7123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "ER", 291, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              ES: [, [, , "[5-9]\\d{8}", , , , , , , [9]], [
                ,
                ,
                "96906(?:0[0-8]|1[1-9]|[2-9]\\d)\\d\\d|9(?:69(?:0[0-57-9]|[1-9]\\d)|73(?:[0-8]\\d|9[1-9]))\\d{4}|(?:8(?:[1356]\\d|[28][0-8]|[47][1-9])|9(?:[135]\\d|[268][0-8]|4[1-9]|7[124-9]))\\d{6}",
                ,
                ,
                ,
                "810123456"
              ], [, , "(?:590[16]00\\d|9(?:6906(?:09|10)|7390\\d\\d))\\d\\d|(?:6\\d|7[1-48])\\d{7}", , , , "612345678"], [, , "[89]00\\d{6}", , , , "800123456"], [, , "80[367]\\d{6}", , , , "803123456"], [, , "90[12]\\d{6}", , , , "901123456"], [, , "70\\d{7}", , , , "701234567"], [, , , , , , , , , [-1]], "ES", 34, "00", , , , , , , , [[, "(\\d{4})", "$1", ["905"]], [, "(\\d{6})", "$1", ["[79]9"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]], [
                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]],
                [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]
              ], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "51\\d{7}", , , , "511234567"], , , [, , , , , , , , , [-1]]],
              ET: [, [, , "(?:11|[2-579]\\d)\\d{7}", , , , , , , [9], [7]], [
                ,
                ,
                "11667[01]\\d{3}|(?:11(?:1(?:1[124]|2[2-7]|3[1-5]|5[5-8]|8[6-8])|2(?:13|3[6-8]|5[89]|7[05-9]|8[2-6])|3(?:2[01]|3[0-289]|4[1289]|7[1-4]|87)|4(?:1[69]|3[2-49]|4[0-3]|6[5-8])|5(?:1[578]|44|5[0-4])|6(?:1[578]|2[69]|39|4[5-7]|5[0-5]|6[0-59]|8[015-8]))|2(?:2(?:11[1-9]|22[0-7]|33\\d|44[1467]|66[1-68])|5(?:11[124-6]|33[2-8]|44[1467]|55[14]|66[1-3679]|77[124-79]|880))|3(?:3(?:11[0-46-8]|(?:22|55)[0-6]|33[0134689]|44[04]|66[01467])|4(?:44[0-8]|55[0-69]|66[0-3]|77[1-5]))|4(?:6(?:119|22[0-24-7]|33[1-5]|44[13-69]|55[14-689]|660|88[1-4])|7(?:(?:11|22)[1-9]|33[13-7]|44[13-6]|55[1-689]))|5(?:7(?:227|55[05]|(?:66|77)[14-8])|8(?:11[149]|22[013-79]|33[0-68]|44[013-8]|550|66[1-5]|77\\d)))\\d{4}",
                ,
                ,
                ,
                "111112345",
                ,
                ,
                ,
                [7]
              ], [, , "700[1-9]\\d{5}|(?:7(?:0[1-9]|1[0-8]|22|77|86|99)|9\\d\\d)\\d{6}", , , , "911234567"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "ET", 251, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              FI: [
                ,
                [, , "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", , , , , , , [5, 6, 7, 8, 9, 10, 11, 12]],
                [
                  ,
                  ,
                  "(?:1[3-79][1-8]|[23568][1-8]\\d|9(?:00|[1-8]\\d))\\d{2,6}",
                  ,
                  ,
                  ,
                  "131234567",
                  ,
                  ,
                  [5, 6, 7, 8, 9]
                ],
                [, , "4946\\d{2,6}|(?:4[0-8]|50)\\d{4,8}", , , , "412345678", , , [6, 7, 8, 9, 10]],
                [, , "800\\d{4,6}", , , , "800123456", , , [7, 8, 9]],
                [, , "[67]00\\d{5,6}", , , , "600123456", , , [8, 9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                "FI",
                358,
                "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))",
                "0",
                ,
                ,
                "0",
                ,
                "00",
                ,
                [[, "(\\d{5})", "$1", ["75[12]"], "0$1"], [, "(\\d{5})", "$1", ["20[2-59]"], "0$1"], [, "(\\d{6})", "$1", ["11"]], [, "(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], [
                  ,
                  "(\\d{2})(\\d{4,8})",
                  "$1 $2",
                  ["[14]|2[09]|50|7[135]"],
                  "0$1"
                ], [, "(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], [, "(\\d)(\\d{4,9})", "$1 $2", ["(?:1[3-79]|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]],
                [[, "(\\d{5})", "$1", ["20[2-59]"], "0$1"], [, "(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], [, "(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], [, "(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], [, "(\\d)(\\d{4,9})", "$1 $2", ["(?:1[3-79]|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]],
                [, , , , , , , , , [-1]],
                1,
                "1[03-79]|[2-9]",
                [, , "20(?:2[023]|9[89])\\d{1,6}|(?:60[12]\\d|7099)\\d{4,5}|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:[1-3]00|7(?:0[1-5]\\d\\d|5[03-9]))\\d{3,7}"],
                [, , "20\\d{4,8}|60[12]\\d{5,6}|7(?:099\\d{4,5}|5[03-9]\\d{3,7})|20[2-59]\\d\\d|(?:606|7(?:0[78]|1|3\\d))\\d{7}|(?:10|29|3[09]|70[1-5]\\d)\\d{4,8}", , , , "10112345"],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              FJ: [, [, , "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", , , , , , , [7, 11]], [, , "603\\d{4}|(?:3[0-5]|6[25-7]|8[58])\\d{5}", , , , "3212345", , , [7]], [
                ,
                ,
                "(?:[279]\\d|45|5[01568]|8[034679])\\d{5}",
                ,
                ,
                ,
                "7012345",
                ,
                ,
                [7]
              ], [, , "0800\\d{7}", , , , "08001234567", , , [11]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "FJ", 679, "0(?:0|52)", , , , , , "00", , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              FK: [
                ,
                [, , "[2-7]\\d{4}", , , , , , , [5]],
                [, , "[2-47]\\d{4}", , , , "31234"],
                [, , "[56]\\d{4}", , , , "51234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                "FK",
                500,
                "00",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              FM: [, [, , "(?:[39]\\d\\d|820)\\d{4}", , , , , , , [7]], [, , "31(?:00[67]|208|309)\\d\\d|(?:3(?:[2357]0[1-9]|602|804|905)|(?:820|9[2-6]\\d)\\d)\\d{3}", , , , "3201234"], [, , "31(?:00[67]|208|309)\\d\\d|(?:3(?:[2357]0[1-9]|602|804|905)|(?:820|9[2-7]\\d)\\d)\\d{3}", , , , "3501234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "FM", 691, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]], , [, , , , , , , , , [-1]], , , [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              FO: [, [, , "[2-9]\\d{5}", , , , , , , [6]], [, , "(?:20|[34]\\d|8[19])\\d{4}", , , , "201234"], [, , "(?:[27][1-9]|5\\d|9[16])\\d{4}", , , , "211234"], [, , "80[257-9]\\d{3}", , , , "802123"], [, , "90(?:[13-5][15-7]|2[125-7]|9\\d)\\d\\d", , , , "901123"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "(?:6[0-36]|88)\\d{4}", , , , "601234"], "FO", 298, "00", , , , "(10(?:01|[12]0|88))", , , , [[, "(\\d{6})", "$1", ["[2-9]"], , "$CC $1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              FR: [, [
                ,
                ,
                "[1-9]\\d{8}",
                ,
                ,
                ,
                ,
                ,
                ,
                [9]
              ], [, , "59[1-9]\\d{6}|(?:[1-3]\\d|4[1-9]|5[0-8])\\d{7}", , , , "123456789"], [, , "(?:6(?:[0-24-8]\\d|3[0-8]|9[589])|7[3-9]\\d)\\d{6}", , , , "612345678"], [, , "80[0-5]\\d{6}", , , , "801234567"], [, , "836(?:0[0-36-9]|[1-9]\\d)\\d{4}|8(?:1[2-9]|2[2-47-9]|3[0-57-9]|[569]\\d|8[0-35-9])\\d{6}", , , , "891123456"], [, , "8(?:1[01]|2[0156]|4[02]|84)\\d{6}", , , , "884012345"], [, , , , , , , , , [-1]], [, , "9\\d{8}", , , , "912345678"], "FR", 33, "00", "0", , , "0", , , , [[, "(\\d{4})", "$1", ["10"]], [, "(\\d{3})(\\d{3})", "$1 $2", ["1"]], [
                ,
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["8"],
                "0 $1"
              ], [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "80[6-9]\\d{6}", , , , "806123456"], , , [, , , , , , , , , [-1]]],
              GA: [, [, , "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", , , , , , , [7, 8]], [, , "[01]1\\d{6}", , , , "01441234", , , [8]], [
                ,
                ,
                "(?:(?:0[2-7]|7[467])\\d|6(?:0[0-4]|10|[256]\\d))\\d{5}|[2-7]\\d{6}",
                ,
                ,
                ,
                "06031234"
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "GA", 241, "00", , , , "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1", , , [[, "(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              GB: [, [
                ,
                ,
                "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",
                ,
                ,
                ,
                ,
                ,
                ,
                [7, 9, 10],
                [4, 5, 6, 8]
              ], [
                ,
                ,
                "(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:[0-5]\\d\\d|69[7-9]|70[0-79])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-2]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",
                ,
                ,
                ,
                "1212345678",
                ,
                ,
                [9, 10],
                [4, 5, 6, 7, 8]
              ], [, , "7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", , , , "7400123456", , , [10]], [, , "80[08]\\d{7}|800\\d{6}|8001111", , , , "8001234567"], [, , "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", , , , "9012345678", , , [7, 10]], [, , , , , , , , , [-1]], [, , "70\\d{8}", , , , "7012345678", , , [10]], [
                ,
                ,
                "56\\d{8}",
                ,
                ,
                ,
                "5612345678",
                ,
                ,
                [10]
              ], "GB", 44, "00", "0", " x", , "0", , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], [, "(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], [, "(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], [, "(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", [
                "[25]|7(?:0|6[02-9])",
                "[25]|7(?:0|6(?:[03-9]|2[356]))"
              ], "0$1"], [, "(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], , [, , "76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", , , , "7640123456", , , [10]], 1, , [, , , , , , , , , [-1]], [, , "(?:3[0347]|55)\\d{8}", , , , "5512345678", , , [10]], , , [, , , , , , , , , [-1]]],
              GD: [
                ,
                [, , "(?:473|[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]],
                [
                  ,
                  ,
                  "473(?:2(?:3[0-2]|69)|3(?:2[89]|86)|4(?:[06]8|3[5-9]|4[0-49]|5[5-79]|73|90)|63[68]|7(?:58|84)|800|938)\\d{4}",
                  ,
                  ,
                  ,
                  "4732691234",
                  ,
                  ,
                  ,
                  [7]
                ],
                [, , "473(?:4(?:0[2-79]|1[04-9]|2[0-5]|58)|5(?:2[01]|3[3-8])|901)\\d{4}", , , , "4734031234", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                [, , "900[2-9]\\d{6}", , , , "9002123456"],
                [, , , , , , , , , [-1]],
                [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]],
                "GD",
                1,
                "011",
                "1",
                ,
                ,
                "([2-9]\\d{6})$|1",
                "473$1",
                ,
                ,
                ,
                ,
                [, , , , , , , , , [-1]],
                ,
                "473",
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              GE: [, [, , "(?:[3-57]\\d\\d|800)\\d{6}", , , , , , , [9], [6, 7]], [, , "(?:3(?:[256]\\d|4[124-9]|7[0-4])|4(?:1\\d|2[2-7]|3[1-79]|4[2-8]|7[239]|9[1-7]))\\d{6}", , , , "322123456", , , , [6, 7]], [
                ,
                ,
                "5(?:(?:(?:0555|1(?:[17]77|555))[5-9]|757(?:7[7-9]|8[01]))\\d|22252[0-4])\\d\\d|(?:5(?:00(?:0\\d|11|22|33|44|5[05]|77|88|9[09])|1(?:1(?:00|[124]\\d|3[01])|4\\d\\d)|(?:44|68)\\d\\d|5(?:[0157-9]\\d\\d|200)|7(?:[0147-9]\\d\\d|5(?:00|[57]5))|8(?:0(?:[018]\\d|2[0-4])|58[89]|8(?:55|88))|9(?:090|[1-35-9]\\d\\d))|790\\d\\d)\\d{4}|5(?:0(?:0[17]0|505)|1(?:0[01]0|1(?:07|33|51))|2(?:0[02]0|2[25]2)|3(?:0[03]0|3[35]3)|(?:40[04]|900)0|5222)[0-4]\\d{3}",
                ,
                ,
                ,
                "555123456"
              ], [, , "800\\d{6}", , , , "800123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "70[67]\\d{6}", , , , "706123456"], "GE", 995, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , "70[67]\\d{6}"], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              GF: [, [
                ,
                ,
                "[56]94\\d{6}|(?:80|9\\d)\\d{7}",
                ,
                ,
                ,
                ,
                ,
                ,
                [9]
              ], [, , "594(?:[02-49]\\d|1[0-4]|5[6-9]|6[0-3]|80)\\d{4}", , , , "594101234"], [, , "694(?:[0-249]\\d|3[0-8])\\d{4}", , , , "694201234"], [, , "80[0-5]\\d{6}", , , , "800012345"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "9(?:(?:396|76\\d)\\d|476[0-5])\\d{4}", , , , "976012345"], "GF", 594, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]|9[47]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ]],
              GG: [, [, , "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", , , , , , , [7, 9, 10], [6]], [, , "1481[25-9]\\d{5}", , , , "1481256789", , , [10], [6]], [, , "7(?:(?:781|839)\\d|911[17])\\d{5}", , , , "7781123456", , , [10]], [, , "80[08]\\d{7}|800\\d{6}|8001111", , , , "8001234567"], [, , "(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", , , , "9012345678", , , [7, 10]], [, , , , , , , , , [-1]], [, , "70\\d{8}", , , , "7012345678", , , [10]], [, , "56\\d{8}", , , , "5612345678", , , [10]], "GG", 44, "00", "0", , , "([25-9]\\d{5})$|0", "1481$1", , , , , [
                ,
                ,
                "76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",
                ,
                ,
                ,
                "7640123456",
                ,
                ,
                [10]
              ], , , [, , , , , , , , , [-1]], [, , "(?:3[0347]|55)\\d{8}", , , , "5512345678", , , [10]], , , [, , , , , , , , , [-1]]],
              GH: [, [, , "(?:[235]\\d{3}|800)\\d{5}", , , , , , , [8, 9], [7]], [, , "3082[0-5]\\d{4}|3(?:0(?:[237]\\d|8[01])|[167](?:2[0-6]|7\\d|80)|2(?:2[0-5]|7\\d|80)|3(?:2[0-3]|7\\d|80)|4(?:2[013-9]|3[01]|7\\d|80)|5(?:2[0-7]|7\\d|80)|8(?:2[0-2]|7\\d|80)|9(?:[28]0|7\\d))\\d{5}", , , , "302345678", , , [9], [7]], [, , "(?:2(?:[0346-9]\\d|5[67])|5(?:[03-7]\\d|9[1-9]))\\d{6}", , , , "231234567", , , [9]], [
                ,
                ,
                "800\\d{5}",
                ,
                ,
                ,
                "80012345",
                ,
                ,
                [8]
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "GH", 233, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[237]|8[0-2]"]], [, "(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], [[, "(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], [, , , , , , , , , [-1]], , , [, , "800\\d{5}", , , , , , , [8]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              GI: [, [, , "(?:[25]\\d|60)\\d{6}", , , , , , , [8]], [
                ,
                ,
                "2190[0-2]\\d{3}|2(?:0(?:[02]\\d|3[01])|16[24-9]|2[2-5]\\d)\\d{4}",
                ,
                ,
                ,
                "20012345"
              ], [, , "5251[0-4]\\d{3}|(?:5(?:[146-8]\\d\\d|250)|60(?:1[01]|6\\d))\\d{4}", , , , "57123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "GI", 350, "00", , , , , , , , [[, "(\\d{3})(\\d{5})", "$1 $2", ["2"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              GL: [
                ,
                [, , "(?:19|[2-689]\\d|70)\\d{4}", , , , , , , [6]],
                [, , "(?:19|3[1-7]|[68][1-9]|70|9\\d)\\d{4}", , , , "321000"],
                [, , "[245]\\d{5}", , , , "221234"],
                [, , "80\\d{4}", , , , "801234"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "3[89]\\d{4}", , , , "381234"],
                "GL",
                299,
                "00",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              GM: [
                ,
                [, , "[2-9]\\d{6}", , , , , , , [7]],
                [, , "(?:4(?:[23]\\d\\d|4(?:1[024679]|[6-9]\\d))|5(?:5(?:3\\d|4[0-7])|6[67]\\d|7(?:1[04]|2[035]|3[58]|48))|8\\d{3})\\d{3}", , , , "5661234"],
                [, , "(?:[23679]\\d|5[0-489])\\d{5}", , , , "3012345"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                "GM",
                220,
                "00",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              GN: [, [, , "722\\d{6}|(?:3|6\\d)\\d{7}", , , , , , , [8, 9]], [, , "3(?:0(?:24|3[12]|4[1-35-7]|5[13]|6[189]|[78]1|9[1478])|1\\d\\d)\\d{4}", , , , "30241234", , , [8]], [, , "6[0-356]\\d{7}", , , , "601123456", , , [9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "722\\d{6}", , , , "722123456", , , [9]], "GN", 224, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], [
                ,
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[67]"]
              ]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              GP: [, [, , "590\\d{6}|(?:69|80|9\\d)\\d{7}", , , , , , , [9]], [, , "590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}", , , , "590201234"], [, , "69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}", , , , "690001234"], [, , "80[0-5]\\d{6}", , , , "800012345"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "9(?:(?:395|76[018])\\d|475[0-5])\\d{4}", , , , "976012345"], "GP", 590, "00", "0", , , "0", , , , [[
                ,
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[569]"],
                "0$1"
              ], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], , [, , , , , , , , , [-1]], 1, , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              GQ: [, [, , "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", , , , , , , [9]], [, , "33[0-24-9]\\d[46]\\d{4}|3(?:33|5\\d)\\d[7-9]\\d{4}", , , , "333091234"], [, , "(?:222|55\\d)\\d{6}", , , , "222123456"], [, , "80\\d[1-9]\\d{5}", , , , "800123456"], [, , "90\\d[1-9]\\d{5}", , , , "900123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "GQ", 240, "00", , , , , , , , [[
                ,
                "(\\d{3})(\\d{3})(\\d{3})",
                "$1 $2 $3",
                ["[235]"]
              ], [, "(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              GR: [, [, , "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", , , , , , , [10, 11, 12]], [
                ,
                ,
                "2(?:1\\d\\d|2(?:2[1-46-9]|[36][1-8]|4[1-7]|5[1-4]|7[1-5]|[89][1-9])|3(?:1\\d|2[1-57]|[35][1-3]|4[13]|7[1-7]|8[124-6]|9[1-79])|4(?:1\\d|2[1-8]|3[1-4]|4[13-5]|6[1-578]|9[1-5])|5(?:1\\d|[29][1-4]|3[1-5]|4[124]|5[1-6])|6(?:1\\d|[269][1-6]|3[1245]|4[1-7]|5[13-9]|7[14]|8[1-5])|7(?:1\\d|2[1-5]|3[1-6]|4[1-7]|5[1-57]|6[135]|9[125-7])|8(?:1\\d|2[1-5]|[34][1-4]|9[1-57]))\\d{6}",
                ,
                ,
                ,
                "2123456789",
                ,
                ,
                [10]
              ], [, , "68[57-9]\\d{7}|(?:69|94)\\d{8}", , , , "6912345678", , , [10]], [, , "800\\d{7,9}", , , , "8001234567"], [, , "90[19]\\d{7}", , , , "9091234567", , , [10]], [, , "8(?:0[16]|12|[27]5|50)\\d{7}", , , , "8011234567", , , [10]], [, , "70\\d{8}", , , , "7012345678", , , [10]], [, , , , , , , , , [-1]], "GR", 30, "00", , , , , , , , [[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], [, "(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], [
                ,
                "(\\d{3})(\\d{3,4})(\\d{5})",
                "$1 $2 $3",
                ["8"]
              ]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "5005000\\d{3}", , , , "5005000123", , , [10]], , , [, , , , , , , , , [-1]]],
              GT: [, [, , "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", , , , , , , [8, 11]], [, , "[267][2-9]\\d{6}", , , , "22456789", , , [8]], [, , "(?:[3-5]\\d\\d|80[0-4])\\d{5}", , , , "51234567", , , [8]], [, , "18[01]\\d{8}", , , , "18001112222", , , [11]], [, , "19\\d{9}", , , , "19001112222", , , [11]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "GT", 502, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], [
                ,
                "(\\d{4})(\\d{3})(\\d{4})",
                "$1 $2 $3",
                ["1"]
              ]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              GU: [, [, , "(?:[58]\\d\\d|671|900)\\d{7}", , , , , , , [10], [7]], [, , "671(?:2\\d\\d|3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[02-46-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}", , , , "6713001234", , , , [7]], [
                ,
                ,
                "671(?:2\\d\\d|3(?:00|3[39]|4[349]|55|6[26])|4(?:00|56|7[1-9]|8[02-46-9])|5(?:55|6[2-5]|88)|6(?:3[2-578]|4[24-9]|5[34]|78|8[235-9])|7(?:[0479]7|2[0167]|3[45]|8[7-9])|8(?:[2-57-9]8|6[48])|9(?:2[29]|6[79]|7[1279]|8[7-9]|9[78]))\\d{4}",
                ,
                ,
                ,
                "6713001234",
                ,
                ,
                ,
                [7]
              ], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"], [, , "900[2-9]\\d{6}", , , , "9002123456"], [, , , , , , , , , [-1]], [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"], [, , , , , , , , , [-1]], "GU", 1, "011", "1", , , "([2-9]\\d{6})$|1", "671$1", , 1, , , [, , , , , , , , , [-1]], , "671", [, , , , , , , , , [-1]], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], , , [, , , , , , , , , [-1]]],
              GW: [, [, , "[49]\\d{8}|4\\d{6}", , , , , , , [7, 9]], [, , "443\\d{6}", , , , "443201234", , , [9]], [, , "9(?:5\\d|6[569]|77)\\d{6}", , , , "955012345", , , [9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "40\\d{5}", , , , "4012345", , , [7]], "GW", 245, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["40"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              GY: [, [, , "(?:[2-8]\\d{3}|9008)\\d{3}", , , , , , , [7]], [
                ,
                ,
                "(?:2(?:1[6-9]|2[0-35-9]|3[1-4]|5[3-9]|6\\d|7[0-79])|3(?:2[25-9]|3\\d)|4(?:4[0-24]|5[56])|50[0-6]|77[1-57])\\d{4}",
                ,
                ,
                ,
                "2201234"
              ], [, , "(?:510|6\\d\\d|7(?:0\\d|1[0-8]|25|49))\\d{4}", , , , "6091234"], [, , "(?:289|8(?:00|6[28]|88|99))\\d{4}", , , , "2891234"], [, , "9008\\d{3}", , , , "9008123"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "515\\d{4}", , , , "5151234"], "GY", 592, "001", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              HK: [, [, , "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", , , , , , , [5, 6, 7, 8, 9, 11]], [
                ,
                ,
                "(?:2(?:[13-9]\\d|2[013-9])\\d|3(?:(?:[1569][0-24-9]|4[0-246-9]|7[0-24-69])\\d|8(?:4[0-8]|[59]\\d|6[01]))|58(?:0[1-9]|1[2-9]))\\d{4}",
                ,
                ,
                ,
                "21234567",
                ,
                ,
                [8]
              ], [, , "(?:4(?:44[5-9]|6(?:1[0-7]|4[0-57-9]|6[0-4]))|5(?:73[0-6]|95[0-8])|6(?:26[013-8]|66[0-3])|70(?:7[1-6]|8[0-4])|848[0-25-9]|9(?:29[013-9]|59[0-4]|899))\\d{4}|(?:4(?:4[0156]|6[02357-9])|5(?:[1-59][0-46-9]|6[0-4689]|7[0-246-9])|6(?:0[1-9]|[13-59]\\d|[268][0-57-9]|7[0-79])|709|84[09]|9(?:0[1-9]|1[02-9]|[2358][0-8]|[467]\\d))\\d{5}", , , , "51234567", , , [8]], [, , "800\\d{6}", , , , "800123456", , , [9]], [, , "900(?:[0-24-9]\\d{7}|3\\d{1,4})", , , , "90012345678", , , [5, 6, 7, 8, 11]], [, , , , , , , , , [-1]], [
                ,
                ,
                "8(?:1[0-4679]\\d|2(?:[0-36]\\d|7[0-4])|3(?:[034]\\d|2[09]|70))\\d{4}",
                ,
                ,
                ,
                "81123456",
                ,
                ,
                [8]
              ], [, , , , , , , , , [-1]], "HK", 852, "00(?:30|5[09]|[126-9]?)", , , , , , "00", , [[, "(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], [, "(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], , [
                ,
                ,
                "7(?:1(?:0[0-38]|1[0-3679]|3[013]|69|9[0136])|2(?:[02389]\\d|1[18]|7[27-9])|3(?:[0-38]\\d|7[0-369]|9[2357-9])|47\\d|5(?:[178]\\d|5[0-5])|6(?:0[0-7]|2[236-9]|[35]\\d)|7(?:[27]\\d|8[7-9])|8(?:[23689]\\d|7[1-9])|9(?:[025]\\d|6[0-246-8]|7[0-36-9]|8[238]))\\d{4}",
                ,
                ,
                ,
                "71123456",
                ,
                ,
                [8]
              ], , , [, , , , , , , , , [-1]], [, , "30(?:0[1-9]|[15-7]\\d|2[047]|89)\\d{4}", , , , "30161234", , , [8]], , , [, , , , , , , , , [-1]]],
              HN: [, [, , "8\\d{10}|[237-9]\\d{7}", , , , , , , [8, 11]], [
                ,
                ,
                "2(?:2(?:0[0-59]|1[1-9]|[23]\\d|4[02-6]|5[57]|6[245]|7[0135689]|8[01346-9]|9[0-2])|4(?:0[578]|2[3-59]|3[13-9]|4[0-68]|5[1-3589])|5(?:0[2357-9]|1[1-356]|4[03-5]|5\\d|6[014-69]|7[04]|80)|6(?:[056]\\d|17|2[067]|3[047]|4[0-378]|[78][0-8]|9[01])|7(?:0[5-79]|6[46-9]|7[02-9]|8[034]|91)|8(?:79|8[0-357-9]|9[1-57-9]))\\d{4}",
                ,
                ,
                ,
                "22123456",
                ,
                ,
                [8]
              ], [, , "[37-9]\\d{7}", , , , "91234567", , , [8]], [, , "8002\\d{7}", , , , "80021234567", , , [11]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "HN", 504, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]]], [[, "(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]], [, , , , , , , , , [-1]], , , [, , "8002\\d{7}", , , , , , , [11]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              HR: [, [, , "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", , , , , , , [6, 7, 8, 9]], [
                ,
                ,
                "1\\d{7}|(?:2[0-3]|3[1-5]|4[02-47-9]|5[1-3])\\d{6,7}",
                ,
                ,
                ,
                "12345678",
                ,
                ,
                [8, 9],
                [6, 7]
              ], [, , "9(?:(?:0[1-9]|[12589]\\d)\\d\\d|7(?:[0679]\\d\\d|5(?:[01]\\d|44|77|9[5-7])))\\d{4}|98\\d{6}", , , , "921234567", , , [8, 9]], [, , "80\\d{5,7}", , , , "800123456", , , [7, 8, 9]], [, , "6[01459]\\d{6}|6[01]\\d{4,5}", , , , "611234", , , [6, 7, 8]], [, , , , , , , , , [-1]], [, , "7[45]\\d{6}", , , , "74123456", , , [8]], [, , , , , , , , , [-1]], "HR", 385, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], [
                ,
                "(\\d)(\\d{4})(\\d{3})",
                "$1 $2 $3",
                ["1"],
                "0$1"
              ], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[67]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-5]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "62\\d{6,7}|72\\d{6}", , , , "62123456", , , [8, 9]], , , [, , , , , , , , , [-1]]],
              HT: [
                ,
                [, , "(?:[2-489]\\d|55)\\d{6}", , , , , , , [8]],
                [, , "2(?:2\\d|5[1-5]|81|9[149])\\d{5}", , , , "22453300"],
                [, , "(?:[34]\\d|55)\\d{6}", , , , "34101234"],
                [, , "8\\d{7}", , , , "80012345"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "9(?:[67][0-4]|8[0-3589]|9\\d)\\d{5}", , , , "98901234"],
                "HT",
                509,
                "00",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [[, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              HU: [
                ,
                [, , "[235-7]\\d{8}|[1-9]\\d{7}", , , , , , , [8, 9], [6, 7]],
                [, , "(?:1\\d|[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6[23689]|8[2-57-9]|9[2-69])\\d{6}", , , , "12345678", , , [8], [6, 7]],
                [, , "(?:[257]0|3[01])\\d{7}", , , , "201234567", , , [9]],
                [, , "(?:[48]0\\d|680[29])\\d{5}", , , , "80123456"],
                [, , "9[01]\\d{6}", , , , "90123456", , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "21\\d{7}", , , , "211234567", , , [9]],
                "HU",
                36,
                "00",
                "06",
                ,
                ,
                "06",
                ,
                ,
                ,
                [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , "(?:[48]0\\d|680[29])\\d{5}"],
                [, , "38\\d{7}", , , , "381234567", , , [9]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              ID: [, [
                ,
                ,
                "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}",
                ,
                ,
                ,
                ,
                ,
                ,
                [7, 8, 9, 10, 11, 12, 13],
                [5, 6]
              ], [
                ,
                ,
                "2[124]\\d{7,8}|619\\d{8}|2(?:1(?:14|500)|2\\d{3})\\d{3}|61\\d{5,8}|(?:2(?:[35][1-4]|6[0-8]|7[1-6]|8\\d|9[1-8])|3(?:1|[25][1-8]|3[1-68]|4[1-3]|6[1-3568]|7[0-469]|8\\d)|4(?:0[1-589]|1[01347-9]|2[0-36-8]|3[0-24-68]|43|5[1-378]|6[1-5]|7[134]|8[1245])|5(?:1[1-35-9]|2[25-8]|3[124-9]|4[1-3589]|5[1-46]|6[1-8])|6(?:[25]\\d|3[1-69]|4[1-6])|7(?:02|[125][1-9]|[36]\\d|4[1-8]|7[0-36-9])|9(?:0[12]|1[013-8]|2[0-479]|5[125-8]|6[23679]|7[159]|8[01346]))\\d{5,8}",
                ,
                ,
                ,
                "218350123",
                ,
                ,
                [7, 8, 9, 10, 11],
                [5, 6]
              ], [, , "8[1-35-9]\\d{7,10}", , , , "812345678", , , [9, 10, 11, 12]], [, , "00[17]803\\d{7}|(?:177\\d|800)\\d{5,7}|001803\\d{6}", , , , "8001234567", , , [8, 9, 10, 11, 12, 13]], [, , "809\\d{7}", , , , "8091234567", , , [10]], [, , "804\\d{7}", , , , "8041234567", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "ID", 62, "00[89]", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], [, "(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], [, "(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], [
                ,
                "(\\d{3})(\\d{5,8})",
                "$1 $2",
                ["[2-79]"],
                "(0$1)"
              ], [, "(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], [, "(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], [, "(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["001"]], [, "(\\d{2})(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["0"]]], [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], [
                ,
                "(\\d{2})(\\d{5,9})",
                "$1 $2",
                ["2[124]|[36]1"],
                "(0$1)"
              ], [, "(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], [, "(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], [, "(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], [, "(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], [, "(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], [, , , , , , , , , [-1]], , , [, , "001803\\d{6,7}|(?:007803\\d|8071)\\d{6}", , , , , , , [10, 12, 13]], [
                ,
                ,
                "(?:1500|8071\\d{3})\\d{3}",
                ,
                ,
                ,
                "8071123456",
                ,
                ,
                [7, 10]
              ], , , [, , , , , , , , , [-1]]],
              IE: [, [, , "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", , , , , , , [7, 8, 9, 10], [5, 6]], [, , "(?:1\\d|21)\\d{6,7}|(?:2[24-9]|4(?:0[24]|5\\d|7)|5(?:0[45]|1\\d|8)|6(?:1\\d|[237-9])|9(?:1\\d|[35-9]))\\d{5}|(?:23|4(?:[1-469]|8\\d)|5[23679]|6[4-6]|7[14]|9[04])\\d{7}", , , , "2212345", , , , [5, 6]], [, , "8(?:22|[35-9]\\d)\\d{6}", , , , "850123456", , , [9]], [, , "1800\\d{6}", , , , "1800123456", , , [10]], [, , "15(?:1[2-8]|[2-8]0|9[089])\\d{6}", , , , "1520123456", , , [10]], [
                ,
                ,
                "18[59]0\\d{6}",
                ,
                ,
                ,
                "1850123456",
                ,
                ,
                [10]
              ], [, , "700\\d{6}", , , , "700123456", , , [9]], [, , "76\\d{7}", , , , "761234567", , , [9]], "IE", 353, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], [, "(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], [, "(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], [
                ,
                "(\\d{2})(\\d{3})(\\d{4})",
                "$1 $2 $3",
                ["[78]"],
                "0$1"
              ], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], [, "(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , "18[59]0\\d{6}", , , , , , , [10]], [, , "818\\d{6}", , , , "818123456", , , [9]], , , [, , "88210[1-9]\\d{4}|8(?:[35-79]5\\d\\d|8(?:[013-9]\\d\\d|2(?:[01][1-9]|[2-9]\\d)))\\d{5}", , , , "8551234567", , , [10]]],
              IL: [, [, , "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", , , , , , , [7, 8, 9, 10, 11, 12]], [
                ,
                ,
                "153\\d{8,9}|29[1-9]\\d{5}|(?:2[0-8]|[3489]\\d)\\d{6}",
                ,
                ,
                ,
                "21234567",
                ,
                ,
                [8, 11, 12],
                [7]
              ], [, , "55410\\d{4}|5(?:(?:[02][02-9]|[149][2-9]|[36]\\d|8[3-7])\\d|5(?:01|2\\d|3[0-3]|4[34]|5[0-25689]|6[6-8]|7[0-267]|8[7-9]|9[1-9]))\\d{5}", , , , "502345678", , , [9]], [, , "1(?:255|80[019]\\d{3})\\d{3}", , , , "1800123456", , , [7, 10]], [, , "1212\\d{4}|1(?:200|9(?:0[0-2]|19))\\d{6}", , , , "1919123456", , , [8, 10]], [, , "1700\\d{6}", , , , "1700123456", , , [10]], [, , , , , , , , , [-1]], [
                ,
                ,
                "7(?:38(?:0\\d|5[09]|88)|8(?:33|55|77|81)\\d)\\d{4}|7(?:18|2[23]|3[237]|47|6[258]|7\\d|82|9[2-9])\\d{6}",
                ,
                ,
                ,
                "771234567",
                ,
                ,
                [9]
              ], "IL", 972, "0(?:0|1[2-9])", "0", , , "0", , , , [[, "(\\d{4})(\\d{3})", "$1-$2", ["125"]], [, "(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], [, "(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], [, "(\\d{4})(\\d{6})", "$1-$2", ["159"]], [, "(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], [, "(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], , [, , , , , , , , , [-1]], , , [, , "1700\\d{6}", , , , , , , [10]], [
                ,
                ,
                "1599\\d{6}",
                ,
                ,
                ,
                "1599123456",
                ,
                ,
                [10]
              ], , , [, , "151\\d{8,9}", , , , "15112340000", , , [11, 12]]],
              IM: [
                ,
                [, , "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", , , , , , , [10], [6]],
                [, , "1624(?:230|[5-8]\\d\\d)\\d{3}", , , , "1624756789", , , , [6]],
                [, , "76245[06]\\d{4}|7(?:4576|[59]24\\d|624[0-4689])\\d{5}", , , , "7924123456"],
                [, , "808162\\d{4}", , , , "8081624567"],
                [, , "8(?:440[49]06|72299\\d)\\d{3}|(?:8(?:45|70)|90[0167])624\\d{4}", , , , "9016247890"],
                [, , , , , , , , , [-1]],
                [, , "70\\d{8}", , , , "7012345678"],
                [, , "56\\d{8}", , , , "5612345678"],
                "IM",
                44,
                "00",
                "0",
                ,
                ,
                "([25-8]\\d{5})$|0",
                "1624$1",
                ,
                ,
                ,
                ,
                [, , , , , , , , , [-1]],
                ,
                "74576|(?:16|7[56])24",
                [, , , , , , , , , [-1]],
                [, , "3440[49]06\\d{3}|(?:3(?:08162|3\\d{4}|45624|7(?:0624|2299))|55\\d{4})\\d{4}", , , , "5512345678"],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              IN: [, [, , "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", , , , , , , [8, 9, 10, 11, 12, 13], [6, 7]], [
                ,
                ,
                "2717(?:[2-7]\\d|95)\\d{4}|(?:271[0-689]|782[0-6])[2-7]\\d{5}|(?:170[24]|2(?:(?:[02][2-79]|90)\\d|80[13468])|(?:3(?:23|80)|683|79[1-7])\\d|4(?:20[24]|72[2-8])|552[1-7])\\d{6}|(?:11|33|4[04]|80)[2-7]\\d{7}|(?:342|674|788)(?:[0189][2-7]|[2-7]\\d)\\d{5}|(?:1(?:2[0-249]|3[0-25]|4[145]|[59][14]|6[014]|7[1257]|8[01346])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568]|9[14])|3(?:26|4[13]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[014-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|2[14]|3[134]|4[47]|5[15]|[67]1)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91))[2-7]\\d{6}|(?:1(?:2[35-8]|3[346-9]|4[236-9]|[59][0235-9]|6[235-9]|7[34689]|8[257-9])|2(?:1[134689]|3[24-8]|4[2-8]|5[25689]|6[2-4679]|7[3-79]|8[2-479]|9[235-9])|3(?:01|1[79]|2[1245]|4[5-8]|5[125689]|6[235-7]|7[157-9]|8[2-46-8])|4(?:1[14578]|2[5689]|3[2-467]|5[4-7]|6[35]|73|8[2689]|9[2389])|5(?:[16][146-9]|2[14-8]|3[1346]|4[14-69]|5[46]|7[2-4]|8[2-8]|9[246])|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])|7(?:1[013-9]|2[0235-9]|3[2679]|4[1-35689]|5[2-46-9]|[67][02-9]|8[013-7]|9[089])|8(?:1[1357-9]|2[235-8]|3[03-57-9]|4[0-24-9]|5\\d|6[2457-9]|7[1-6]|8[1256]|9[2-4]))\\d[2-7]\\d{5}",
                ,
                ,
                ,
                "7410410123",
                ,
                ,
                [10],
                [6, 7, 8]
              ], [
                ,
                ,
                "(?:61279|7(?:887[02-9]|9(?:313|79[07-9]))|8(?:079[04-9]|(?:84|91)7[02-8]))\\d{5}|(?:6(?:12|[2-47]1|5[17]|6[13]|80)[0189]|7(?:1(?:2[0189]|9[0-5])|2(?:[14][017-9]|8[0-59])|3(?:2[5-8]|[34][017-9]|9[016-9])|4(?:1[015-9]|[29][89]|39|8[389])|5(?:[15][017-9]|2[04-9]|9[7-9])|6(?:0[0-47]|1[0-257-9]|2[0-4]|3[19]|5[4589])|70[0289]|88[089]|97[02-8])|8(?:0(?:6[67]|7[02-8])|70[017-9]|84[01489]|91[0-289]))\\d{6}|(?:7(?:31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[0189]\\d|7[02-8])\\d{5}|(?:6(?:[09]\\d|1[04679]|2[03689]|3[05-9]|4[0489]|50|6[069]|7[07]|8[7-9])|7(?:0\\d|2[0235-79]|3[05-8]|40|5[0346-8]|6[6-9]|7[1-9]|8[0-79]|9[089])|8(?:0[01589]|1[0-57-9]|2[235-9]|3[03-57-9]|[45]\\d|6[02457-9]|7[1-69]|8[0-25-9]|9[02-9])|9\\d\\d)\\d{7}|(?:6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|8[124-6])\\d|7(?:[235689]\\d|4[0189]))|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-5])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]|881))[0189]\\d{5}",
                ,
                ,
                ,
                "8123456789",
                ,
                ,
                [10]
              ], [, , "000800\\d{7}|1(?:600\\d{6}|80(?:0\\d{4,9}|3\\d{9}))", , , , "1800123456"], [, , "186[12]\\d{9}", , , , "1861123456789", , , [13]], [, , "1860\\d{7}", , , , "18603451234", , , [11]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "IN", 91, "00", "0", , , "0", , , , [[, "(\\d{7})", "$1", ["575"]], [, "(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], , , 1], [, "(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], , , 1], [
                ,
                "(\\d{3})(\\d{3})(\\d{4})",
                "$1 $2 $3",
                ["140"],
                ,
                ,
                1
              ], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", , 1], [
                ,
                "(\\d{3})(\\d{3})(\\d{4})",
                "$1 $2 $3",
                [
                  "1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]",
                  "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]",
                  "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"
                ],
                "0$1",
                ,
                1
              ], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", [
                "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807",
                "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]",
                "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"
              ], "0$1", , 1], [, "(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", , 1], [, "(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], , , 1], [
                ,
                "(\\d{3})(\\d{3})(\\d{3})(\\d{4})",
                "$1 $2 $3 $4",
                ["0"]
              ], [, "(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], , , 1]], [[, "(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], , , 1], [, "(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], , , 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], , , 1], [
                ,
                "(\\d{2})(\\d{4})(\\d{4})",
                "$1 $2 $3",
                ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"],
                "0$1",
                ,
                1
              ], [
                ,
                "(\\d{3})(\\d{3})(\\d{4})",
                "$1 $2 $3",
                [
                  "1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]",
                  "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]",
                  "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"
                ],
                "0$1",
                ,
                1
              ], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", [
                "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807",
                "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]",
                "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"
              ], "0$1", , 1], [, "(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", , 1], [, "(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], , , 1], [
                ,
                "(\\d{4})(\\d{3})(\\d{3})(\\d{3})",
                "$1 $2 $3 $4",
                ["18"],
                ,
                ,
                1
              ]], [, , , , , , , , , [-1]], , , [, , "1(?:600\\d{6}|800\\d{4,9})|(?:000800|18(?:03\\d\\d|6(?:0|[12]\\d\\d)))\\d{7}"], [, , "140\\d{7}", , , , "1409305260", , , [10]], , , [, , , , , , , , , [-1]]],
              IO: [, [, , "3\\d{6}", , , , , , , [7]], [, , "37\\d{5}", , , , "3709100"], [, , "38\\d{5}", , , , "3801234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "IO", 246, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["3"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              IQ: [, [
                ,
                ,
                "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",
                ,
                ,
                ,
                ,
                ,
                ,
                [8, 9, 10],
                [6, 7]
              ], [, , "1\\d{7}|(?:2[13-5]|3[02367]|4[023]|5[03]|6[026])\\d{6,7}", , , , "12345678", , , [8, 9], [6, 7]], [, , "7[3-9]\\d{8}", , , , "7912345678", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "IQ", 964, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              IR: [
                ,
                [, , "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", , , , , , , [4, 5, 6, 7, 10], [8]],
                [, , "(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])(?:[03-57]\\d{7}|[16]\\d{3}(?:\\d{4})?|[289]\\d{3}(?:\\d(?:\\d{3})?)?)|94(?:000[09]|2(?:121|[2689]0\\d)|30[0-2]\\d|4(?:111|40\\d))\\d{4}", , , , "2123456789", , , [6, 7, 10], [4, 5, 8]],
                [, , "9(?:(?:0(?:[0-35]\\d|4[4-6])|(?:[13]\\d|2[0-3])\\d)\\d|9(?:[0-46]\\d\\d|5[15]0|8(?:[12]\\d|88)|9(?:0[0-3]|[19]\\d|21|69|77|8[7-9])))\\d{5}", , , , "9123456789", , , [10]],
                [, , , , , , , , , [-1]],
                [
                  ,
                  ,
                  ,
                  ,
                  ,
                  ,
                  ,
                  ,
                  ,
                  [-1]
                ],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                "IR",
                98,
                "00",
                "0",
                ,
                ,
                "0",
                ,
                ,
                ,
                [[, "(\\d{4,5})", "$1", ["96"], "0$1"], [, "(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , "9(?:4440\\d{5}|6(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19]))", , , , , , , [4, 5, 10]],
                [
                  ,
                  ,
                  "96(?:0[12]|2[16-8]|3(?:08|[14]5|[23]|66)|4(?:0|80)|5[01]|6[89]|86|9[19])",
                  ,
                  ,
                  ,
                  "9601",
                  ,
                  ,
                  [4, 5]
                ],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              IS: [, [, , "(?:38\\d|[4-9])\\d{6}", , , , , , , [7, 9]], [, , "(?:4(?:1[0-24-69]|2[0-7]|[37][0-8]|4[0-24589]|5[0-68]|6\\d|8[0-36-8])|5(?:05|[156]\\d|2[02578]|3[0-579]|4[03-7]|7[0-2578]|8[0-35-9]|9[013-689])|872)\\d{4}", , , , "4101234", , , [7]], [, , "(?:38[589]\\d\\d|6(?:1[1-8]|2[0-6]|3[026-9]|4[014679]|5[0159]|6[0-69]|70|8[06-8]|9\\d)|7(?:5[057]|[6-9]\\d)|8(?:2[0-59]|[3-69]\\d|8[238]))\\d{4}", , , , "6111234"], [, , "80[0-8]\\d{4}", , , , "8001234", , , [7]], [
                ,
                ,
                "90(?:0\\d|1[5-79]|2[015-79]|3[135-79]|4[125-7]|5[25-79]|7[1-37]|8[0-35-7])\\d{3}",
                ,
                ,
                ,
                "9001234",
                ,
                ,
                [7]
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "49[0-24-79]\\d{4}", , , , "4921234", , , [7]], "IS", 354, "00|1(?:0(?:01|[12]0)|100)", , , , , , "00", , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "809\\d{4}", , , , "8091234", , , [7]], , , [, , "(?:689|8(?:7[18]|80)|95[48])\\d{4}", , , , "6891234", , , [7]]],
              IT: [, [, , "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", , , , , , , [6, 7, 8, 9, 10, 11, 12]], [
                ,
                ,
                "0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}",
                ,
                ,
                ,
                "0212345678",
                ,
                ,
                [6, 7, 8, 9, 10, 11]
              ], [, , "3[1-9]\\d{8}|3[2-9]\\d{7}", , , , "3123456789", , , [9, 10]], [, , "80(?:0\\d{3}|3)\\d{3}", , , , "800123456", , , [6, 9]], [, , "(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", , , , "899123456", , , [6, 8, 9, 10]], [, , "84(?:[08]\\d{3}|[17])\\d{3}", , , , "848123456", , , [6, 9]], [, , "1(?:78\\d|99)\\d{6}", , , , "1781234567", , , [9, 10]], [, , "55\\d{8}", , , , "5512345678", , , [10]], "IT", 39, "00", , , , , , , , [
                [, "(\\d{4,5})", "$1", ["1(?:0|9[246])", "1(?:0|9(?:2[2-9]|[46]))"]],
                [, "(\\d{6})", "$1", ["1(?:1|92)"]],
                [, "(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]],
                [, "(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],
                [, "(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]],
                [, "(\\d{4})(\\d{4})", "$1 $2", ["894"]],
                [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]],
                [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]"]],
                [, "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]],
                [
                  ,
                  "(\\d{2})(\\d{4})(\\d{5})",
                  "$1 $2 $3",
                  ["0[26]"]
                ],
                [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]],
                [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]
              ], [[, "(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], [, "(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], [, "(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["894"]], [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], [
                ,
                "(\\d{3})(\\d{3})(\\d{3,4})",
                "$1 $2 $3",
                ["1(?:44|[679])|[378]"]
              ], [, "(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], [, "(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], [, , , , , , , , , [-1]], 1, , [, , "848\\d{6}", , , , , , , [9]], [, , , , , , , , , [-1]], , , [, , "3[2-8]\\d{9,10}", , , , "33101234501", , , [11, 12]]],
              JE: [, [, , "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", , , , , , , [10], [6]], [, , "1534[0-24-8]\\d{5}", , , , "1534456789", , , , [6]], [
                ,
                ,
                "7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97[7-9]))\\d{5}",
                ,
                ,
                ,
                "7797712345"
              ], [, , "80(?:07(?:35|81)|8901)\\d{4}", , , , "8007354567"], [, , "(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}", , , , "9018105678"], [, , , , , , , , , [-1]], [, , "701511\\d{4}", , , , "7015115678"], [, , "56\\d{8}", , , , "5612345678"], "JE", 44, "00", "0", , , "([0-24-8]\\d{5})$|0", "1534$1", , , , , [, , "76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", , , , "7640123456"], , , [, , , , , , , , , [-1]], [
                ,
                ,
                "(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}",
                ,
                ,
                ,
                "5512345678"
              ], , , [, , , , , , , , , [-1]]],
              JM: [, [, , "(?:[58]\\d\\d|658|900)\\d{7}", , , , , , , [10], [7]], [, , "8766060\\d{3}|(?:658(?:2(?:[0-8]\\d|9[0-46-9])|[3-9]\\d\\d)|876(?:52[35]|6(?:0[1-3579]|1[0235-9]|[23]\\d|40|5[06]|6[2-589]|7[0-25-9]|8[04]|9[4-9])|7(?:0[2-689]|[1-6]\\d|8[056]|9[45])|9(?:0[1-8]|1[02378]|[2-8]\\d|9[2-468])))\\d{4}", , , , "8765230123", , , , [7]], [
                ,
                ,
                "(?:658295|876(?:2(?:0[1-9]|[13-9]\\d|2[013-9])|[348]\\d\\d|5(?:0[1-9]|[1-9]\\d)|6(?:4[89]|6[67])|7(?:0[07]|7\\d|8[1-47-9]|9[0-36-9])|9(?:[01]9|9[0579])))\\d{4}",
                ,
                ,
                ,
                "8762101234",
                ,
                ,
                ,
                [7]
              ], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"], [, , "900[2-9]\\d{6}", , , , "9002123456"], [, , , , , , , , , [-1]], [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"], [, , , , , , , , , [-1]], "JM", 1, "011", "1", , , "1", , , , , , [, , , , , , , , , [-1]], , "658|876", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ]],
              JO: [, [, , "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", , , , , , , [8, 9]], [
                ,
                ,
                "87(?:000|90[01])\\d{3}|(?:2(?:6(?:2[0-35-9]|3[0-578]|4[24-7]|5[0-24-8]|[6-8][023]|9[0-3])|7(?:0[1-79]|10|2[014-7]|3[0-689]|4[019]|5[0-3578]))|32(?:0[1-69]|1[1-35-7]|2[024-7]|3\\d|4[0-3]|[5-7][023])|53(?:0[0-3]|[13][023]|2[0-59]|49|5[0-35-9]|6[15]|7[45]|8[1-6]|9[0-36-9])|6(?:2(?:[05]0|22)|3(?:00|33)|4(?:0[0-25]|1[2-7]|2[0569]|[38][07-9]|4[025689]|6[0-589]|7\\d|9[0-2])|5(?:[01][056]|2[034]|3[0-57-9]|4[178]|5[0-69]|6[0-35-9]|7[1-379]|8[0-68]|9[0239]))|87(?:20|7[078]|99))\\d{4}",
                ,
                ,
                ,
                "62001234",
                ,
                ,
                [8]
              ], [, , "7(?:[78][0-25-9]|9\\d)\\d{6}", , , , "790123456", , , [9]], [, , "80\\d{6}", , , , "80012345", , , [8]], [, , "9\\d{7}", , , , "90012345", , , [8]], [, , "85\\d{6}", , , , "85012345", , , [8]], [, , "70\\d{7}", , , , "700123456", , , [9]], [, , , , , , , , , [-1]], "JO", 962, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], [, "(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], , [
                ,
                ,
                "74(?:66|77)\\d{5}",
                ,
                ,
                ,
                "746612345",
                ,
                ,
                [9]
              ], , , [, , , , , , , , , [-1]], [, , "8(?:10|8\\d)\\d{5}", , , , "88101234", , , [8]], , , [, , , , , , , , , [-1]]],
              JP: [, [, , "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", , , , , , , [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]], [, , "(?:1(?:1[235-8]|2[3-6]|3[3-9]|4[2-6]|[58][2-8]|6[2-7]|7[2-9]|9[1-9])|(?:2[2-9]|[36][1-9])\\d|4(?:[2-578]\\d|6[02-8]|9[2-59])|5(?:[2-589]\\d|6[1-9]|7[2-8])|7(?:[25-9]\\d|3[4-9]|4[02-9])|8(?:[2679]\\d|3[2-9]|4[5-9]|5[1-9]|8[03-9])|9(?:[2-58]\\d|[679][1-9]))\\d{6}", , , , "312345678", , , [9]], [
                ,
                ,
                "[7-9]0[1-9]\\d{7}",
                ,
                ,
                ,
                "9012345678",
                ,
                ,
                [10]
              ], [, , "00777(?:[01]|5\\d)\\d\\d|(?:00(?:7778|882[1245])|(?:120|800\\d)\\d\\d)\\d{4}|00(?:37|66|78)\\d{6,13}", , , , "120123456"], [, , "990\\d{6}", , , , "990123456", , , [9]], [, , , , , , , , , [-1]], [, , "60\\d{7}", , , , "601234567", , , [9]], [, , "50[1-9]\\d{7}", , , , "5012345678", , , [10]], "JP", 81, "010", "0", , , "(000[259]\\d{6})$|(?:(?:003768)0?)|0", "$1", , , [[, "(\\d{4})(\\d{4})", "$1-$2", ["007", "0077", "00777", "00777[01]"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], [
                ,
                "(\\d{4})(\\d)(\\d{4})",
                "$1-$2-$3",
                ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"],
                "0$1"
              ], [
                ,
                "(\\d{2})(\\d{3})(\\d{4})",
                "$1-$2-$3",
                ["60"],
                "0$1"
              ], [, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], [
                ,
                "(\\d{2})(\\d{3})(\\d{4})",
                "$1-$2-$3",
                [
                  "1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])",
                  "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]",
                  "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"
                ],
                "0$1"
              ], [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], [, "(\\d{4})(\\d{2})(\\d{3,4})", "$1-$2-$3", ["007", "0077"]], [, "(\\d{4})(\\d{2})(\\d{4})", "$1-$2-$3", ["008"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3,4})", "$1-$2-$3", ["0"]], [, "(\\d{4})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["0"]], [, "(\\d{4})(\\d{5})(\\d{5,6})", "$1-$2-$3", ["0"]], [
                ,
                "(\\d{4})(\\d{6})(\\d{6,7})",
                "$1-$2-$3",
                ["0"]
              ]], [[, "(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], [
                ,
                "(\\d{4})(\\d)(\\d{4})",
                "$1-$2-$3",
                ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"],
                "0$1"
              ], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], [
                ,
                "(\\d{2})(\\d{3})(\\d{4})",
                "$1-$2-$3",
                [
                  "1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])",
                  "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]",
                  "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"
                ],
                "0$1"
              ], [, "(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]], [, , "20\\d{8}", , , , "2012345678", , , [10]], , , [, , "00(?:777(?:[01]|(?:5|8\\d)\\d)|882[1245]\\d\\d)\\d\\d|00(?:37|66|78)\\d{6,13}"], [, , "570\\d{6}", , , , "570123456", , , [9]], , , [, , , , , , , , , [-1]]],
              KE: [, [, , "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", , , , , , , [7, 8, 9, 10]], [
                ,
                ,
                "(?:4[245]|5[1-79]|6[01457-9])\\d{5,7}|(?:4[136]|5[08]|62)\\d{7}|(?:[24]0|66)\\d{6,7}",
                ,
                ,
                ,
                "202012345",
                ,
                ,
                [7, 8, 9]
              ], [, , "(?:1(?:0[0-6]|1[0-5]|2[014]|30)|7\\d\\d)\\d{6}", , , , "712123456", , , [9]], [, , "800[2-8]\\d{5,6}", , , , "800223456", , , [9, 10]], [, , "900[02-9]\\d{5}", , , , "900223456", , , [9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "KE", 254, "000", "0", , , "0", , , , [[, "(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], [, "(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              KG: [, [
                ,
                ,
                "8\\d{9}|[235-9]\\d{8}",
                ,
                ,
                ,
                ,
                ,
                ,
                [9, 10],
                [5, 6]
              ], [, , "312(?:5[0-79]\\d|9(?:[0-689]\\d|7[0-24-9]))\\d{3}|(?:3(?:1(?:2[0-46-8]|3[1-9]|47|[56]\\d)|2(?:22|3[0-479]|6[0-7])|4(?:22|5[6-9]|6\\d)|5(?:22|3[4-7]|59|6\\d)|6(?:22|5[35-7]|6\\d)|7(?:22|3[468]|4[1-9]|59|[67]\\d)|9(?:22|4[1-8]|6\\d))|6(?:09|12|2[2-4])\\d)\\d{5}", , , , "312123456", , , [9], [5, 6]], [, , "312(?:58\\d|973)\\d{3}|(?:2(?:0[0-35]|2\\d)|5[0-24-7]\\d|600|7(?:[07]\\d|55)|88[08]|9(?:12|9[05-9]))\\d{6}", , , , "700123456", , , [9]], [, , "800\\d{6,7}", , , , "800123456"], [, , , , , , , , , [-1]], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "KG", 996, "00", "0", , , "0", , , , [[, "(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], [, "(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              KH: [
                ,
                [, , "1\\d{9}|[1-9]\\d{7,8}", , , , , , , [8, 9, 10], [6, 7]],
                [
                  ,
                  ,
                  "23(?:4(?:[2-4]|[56]\\d)|[568]\\d\\d)\\d{4}|23[236-9]\\d{5}|(?:2[4-6]|3[2-6]|4[2-4]|[5-7][2-5])(?:(?:[237-9]|4[56]|5\\d)\\d{5}|6\\d{5,6})",
                  ,
                  ,
                  ,
                  "23756789",
                  ,
                  ,
                  [8, 9],
                  [6, 7]
                ],
                [, , "(?:(?:1[28]|3[18]|9[67])\\d|6[016-9]|7(?:[07-9]|[16]\\d)|8(?:[013-79]|8\\d))\\d{6}|(?:1\\d|9[0-57-9])\\d{6}|(?:2[3-6]|3[2-6]|4[2-4]|[5-7][2-5])48\\d{5}", , , , "91234567", , , [8, 9]],
                [, , "1800(?:1\\d|2[019])\\d{4}", , , , "1800123456", , , [10]],
                [, , "1900(?:1\\d|2[09])\\d{4}", , , , "1900123456", , , [10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                "KH",
                855,
                "00[14-9]",
                "0",
                ,
                ,
                "0",
                ,
                ,
                ,
                [[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              KI: [, [, , "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", , , , , , , [5, 8]], [, , "(?:[24]\\d|3[1-9]|50|65(?:02[12]|12[56]|22[89]|[3-5]00)|7(?:27\\d\\d|3100|5(?:02[12]|12[56]|22[89]|[34](?:00|81)|500))|8[0-5])\\d{3}", , , , "31234"], [
                ,
                ,
                "(?:6200[01]|7(?:310[1-9]|5(?:02[03-9]|12[0-47-9]|22[0-7]|[34](?:0[1-9]|8[02-9])|50[1-9])))\\d{3}|(?:63\\d\\d|7(?:(?:[0146-9]\\d|2[0-689])\\d|3(?:[02-9]\\d|1[1-9])|5(?:[0-2][013-9]|[34][1-79]|5[1-9]|[6-9]\\d)))\\d{4}",
                ,
                ,
                ,
                "72001234",
                ,
                ,
                [8]
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "30(?:0[01]\\d\\d|12(?:11|20))\\d\\d", , , , "30010000", , , [8]], "KI", 686, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              KM: [, [, , "[3478]\\d{6}", , , , , , , [7], [4]], [, , "7[4-7]\\d{5}", , , , "7712345", , , , [4]], [, , "[34]\\d{6}", , , , "3212345"], [, , , , , , , , , [-1]], [, , "8\\d{6}", , , , "8001234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "KM", 269, "00", , , , , , , , [[
                ,
                "(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3",
                ["[3478]"]
              ]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              KN: [, [, , "(?:[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]], [, , "869(?:2(?:29|36)|302|4(?:6[015-9]|70)|56[5-7])\\d{4}", , , , "8692361234", , , , [7]], [, , "869(?:48[89]|55[6-8]|66\\d|76[02-7])\\d{4}", , , , "8697652917", , , , [7]], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"], [, , "900[2-9]\\d{6}", , , , "9002123456"], [, , , , , , , , , [-1]], [
                ,
                ,
                "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
                ,
                ,
                ,
                "5002345678"
              ], [, , , , , , , , , [-1]], "KN", 1, "011", "1", , , "([2-7]\\d{6})$|1", "869$1", , , , , [, , , , , , , , , [-1]], , "869", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              KP: [, [, , "85\\d{6}|(?:19\\d|[2-7])\\d{7}", , , , , , , [8, 10], [6, 7]], [, , "(?:(?:195|2)\\d|3[19]|4[159]|5[37]|6[17]|7[39]|85)\\d{6}", , , , "21234567", , , , [6, 7]], [, , "19[1-3]\\d{7}", , , , "1921234567", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "KP", 850, "00|99", "0", , , "0", , , , [[
                ,
                "(\\d{2})(\\d{3})(\\d{3})",
                "$1 $2 $3",
                ["8"],
                "0$1"
              ], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , "238[02-9]\\d{4}|2(?:[0-24-9]\\d|3[0-79])\\d{5}", , , , , , , [8]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              KR: [, [, , "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", , , , , , , [5, 6, 8, 9, 10, 11, 12, 13, 14], [3, 4, 7]], [
                ,
                ,
                "(?:2|3[1-3]|[46][1-4]|5[1-5])[1-9]\\d{6,7}|(?:3[1-3]|[46][1-4]|5[1-5])1\\d{2,3}",
                ,
                ,
                ,
                "22123456",
                ,
                ,
                [5, 6, 8, 9, 10],
                [3, 4, 7]
              ], [, , "1(?:05(?:[0-8]\\d|9[0-6])|22[13]\\d)\\d{4,5}|1(?:0[0-46-9]|[16-9]\\d|2[013-9])\\d{6,7}", , , , "1020000000", , , [9, 10]], [, , "00(?:308\\d{6,7}|798\\d{7,9})|(?:00368|80)\\d{7}", , , , "801234567", , , [9, 11, 12, 13, 14]], [, , "60[2-9]\\d{6}", , , , "602345678", , , [9]], [, , , , , , , , , [-1]], [, , "50\\d{8,9}", , , , "5012345678", , , [10, 11]], [, , "70\\d{8}", , , , "7012345678", , , [10]], "KR", 82, "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "0", , , "0(8(?:[1-46-8]|5\\d\\d))?", , , , [[
                ,
                "(\\d{5})",
                "$1",
                ["1[016-9]1", "1[016-9]11", "1[016-9]114"],
                "0$1"
              ], [, "(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1", "0$CC-$1"], [, "(\\d{4})(\\d{4})", "$1-$2", ["1"]], [, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1", "0$CC-$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1", "0$CC-$1"], [, "(\\d{5})(\\d{3})(\\d{3})", "$1 $2 $3", ["003", "0030"]], [
                ,
                "(\\d{2})(\\d{5})(\\d{4})",
                "$1-$2-$3",
                ["5"],
                "0$1",
                "0$CC-$1"
              ], [, "(\\d{5})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0"]], [, "(\\d{5})(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["0"]]], [
                [, "(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1", "0$CC-$1"],
                [, "(\\d{4})(\\d{4})", "$1-$2", ["1"]],
                [, "(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1", "0$CC-$1"],
                [, "(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1", "0$CC-$1"],
                [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1", "0$CC-$1"],
                [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1", "0$CC-$1"],
                [, "(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1", "0$CC-$1"]
              ], [, , "15\\d{7,8}", , , , "1523456789", , , [9, 10]], , , [, , "00(?:3(?:08\\d{6,7}|68\\d{7})|798\\d{7,9})", , , , , , , [11, 12, 13, 14]], [, , "1(?:5(?:22|33|44|66|77|88|99)|6(?:[07]0|44|6[168]|88)|8(?:00|33|55|77|99))\\d{4}", , , , "15441234", , , [8]], , , [, , , , , , , , , [-1]]],
              KW: [, [, , "18\\d{5}|(?:[2569]\\d|41)\\d{6}", , , , , , , [7, 8]], [, , "2(?:[23]\\d\\d|4(?:[1-35-9]\\d|44)|5(?:0[034]|[2-46]\\d|5[1-3]|7[1-7]))\\d{4}", , , , "22345678", , , [8]], [
                ,
                ,
                "(?:41\\d\\d|5(?:(?:[05]\\d|1[0-7]|6[56])\\d|2(?:22|5[25])|7(?:55|77)|88[58])|6(?:(?:0[034679]|5[015-9]|6\\d)\\d|1(?:00|11|66)|222|3[36]3|444|7(?:0[013-9]|[67]\\d)|888|9(?:[069]\\d|3[039]))|9(?:(?:0[09]|[4679]\\d|8[057-9])\\d|1(?:1[01]|99)|2(?:00|2\\d)|3(?:00|3[03])|5(?:00|5\\d)))\\d{4}",
                ,
                ,
                ,
                "50012345",
                ,
                ,
                [8]
              ], [, , "18\\d{5}", , , , "1801234", , , [7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "KW", 965, "00", , , , , , , , [[, "(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], [, "(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              KY: [, [, , "(?:345|[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]], [
                ,
                ,
                "345(?:2(?:22|3[23]|44|66)|333|444|6(?:23|38|40)|7(?:30|4[35-79]|6[6-9]|77)|8(?:00|1[45]|[48]8)|9(?:14|4[035-9]))\\d{4}",
                ,
                ,
                ,
                "3452221234",
                ,
                ,
                ,
                [7]
              ], [, , "345(?:32[1-9]|42[0-4]|5(?:1[67]|2[5-79]|4[6-9]|50|76)|649|82[56]|9(?:1[679]|2[2-9]|3[06-9]|90))\\d{4}", , , , "3453231234", , , , [7]], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"], [, , "(?:345976|900[2-9]\\d\\d)\\d{4}", , , , "9002345678"], [, , , , , , , , , [-1]], [
                ,
                ,
                "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
                ,
                ,
                ,
                "5002345678"
              ], [, , , , , , , , , [-1]], "KY", 1, "011", "1", , , "([2-9]\\d{6})$|1", "345$1", , , , , [, , "345849\\d{4}", , , , "3458491234"], , "345", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              KZ: [, [, , "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", , , , , , , [10, 14], [5, 6, 7]], [
                ,
                ,
                "(?:33622|7(?:1(?:0(?:[23]\\d|4[0-3]|59|63)|1(?:[23]\\d|4[0-79]|59)|2(?:[23]\\d|59)|3(?:2\\d|3[0-79]|4[0-35-9]|59)|4(?:[24]\\d|3[013-9]|5[1-9]|97)|5(?:2\\d|3[1-9]|4[0-7]|59)|6(?:[2-4]\\d|5[19]|61)|72\\d|8(?:[27]\\d|3[1-46-9]|4[0-5]|59))|2(?:1(?:[23]\\d|4[46-9]|5[3469])|2(?:2\\d|3[0679]|46|5[12679])|3(?:[2-4]\\d|5[139])|4(?:2\\d|3[1-35-9]|59)|5(?:[23]\\d|4[0-8]|59|61)|6(?:2\\d|3[1-9]|4[0-4]|59)|7(?:[2379]\\d|40|5[279])|8(?:[23]\\d|4[0-3]|59)|9(?:2\\d|3[124578]|59))))\\d{5}",
                ,
                ,
                ,
                "7123456789",
                ,
                ,
                [10],
                [5, 6, 7]
              ], [, , "7(?:0[0-25-8]|47|6[0-4]|7[15-8]|85)\\d{7}", , , , "7710009998", , , [10]], [, , "8(?:00|108\\d{3})\\d{7}", , , , "8001234567"], [, , "809\\d{7}", , , , "8091234567", , , [10]], [, , , , , , , , , [-1]], [, , "808\\d{7}", , , , "8081234567", , , [10]], [, , "751\\d{7}", , , , "7511234567", , , [10]], "KZ", 7, "810", "8", , , "8", , "8~10", , , , [, , , , , , , , , [-1]], , "33|7", [, , "751\\d{7}", , , , , , , [10]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              LA: [, [, , "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", , , , , , , [8, 9, 10], [6]], [
                ,
                ,
                "(?:2[13]|[35-7][14]|41|8[1468])\\d{6}",
                ,
                ,
                ,
                "21212862",
                ,
                ,
                [8],
                [6]
              ], [, , "(?:20(?:[2359]\\d|7[6-8]|88)|302\\d)\\d{6}", , , , "2023123456", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "LA", 856, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "30[013-9]\\d{6}", , , , "301234567", , , [9]], , , [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ]],
              LB: [, [, , "[27-9]\\d{7}|[13-9]\\d{6}", , , , , , , [7, 8]], [, , "7(?:62|8[0-7]|9[04-9])\\d{4}|(?:[14-69]\\d|2(?:[14-69]\\d|[78][1-9])|7[2-57]|8[02-9])\\d{5}", , , , "1123456"], [, , "793(?:[01]\\d|2[0-4])\\d{3}|(?:(?:3|81)\\d|7(?:[01]\\d|6[013-9]|8[89]|9[12]))\\d{5}", , , , "71123456"], [, , , , , , , , , [-1]], [, , "9[01]\\d{6}", , , , "90123456", , , [8]], [, , "80\\d{6}", , , , "80123456", , , [8]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "LB", 961, "00", "0", , , "0", , , , [[
                ,
                "(\\d)(\\d{3})(\\d{3})",
                "$1 $2 $3",
                ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"],
                "0$1"
              ], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              LC: [
                ,
                [, , "(?:[58]\\d\\d|758|900)\\d{7}", , , , , , , [10], [7]],
                [, , "758(?:234|4(?:30|5\\d|6[2-9]|8[0-2])|57[0-2]|(?:63|75)8)\\d{4}", , , , "7584305678", , , , [7]],
                [, , "758(?:28[4-7]|384|4(?:6[01]|8[4-9])|5(?:1[89]|20|84)|7(?:1[2-9]|2\\d|3[0-3])|812)\\d{4}", , , , "7582845678", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                [, , "900[2-9]\\d{6}", , , , "9002123456"],
                [, , , , , , , , , [-1]],
                [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]],
                "LC",
                1,
                "011",
                "1",
                ,
                ,
                "([2-8]\\d{6})$|1",
                "758$1",
                ,
                ,
                ,
                ,
                [, , , , , , , , , [-1]],
                ,
                "758",
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              LI: [, [, , "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", , , , , , , [7, 9]], [
                ,
                ,
                "(?:2(?:01|1[27]|2[02]|3\\d|6[02-578]|96)|3(?:[24]0|33|7[0135-7]|8[048]|9[0269]))\\d{4}",
                ,
                ,
                ,
                "2345678",
                ,
                ,
                [7]
              ], [, , "(?:6(?:(?:4[5-9]|5[0-469])\\d|6(?:[0245]\\d|[17]0|3[7-9]))\\d|7(?:[37-9]\\d|42|56))\\d{4}", , , , "660234567"], [, , "8002[28]\\d\\d|80(?:05\\d|9)\\d{4}", , , , "8002222"], [, , "90(?:02[258]|1(?:23|3[14])|66[136])\\d\\d", , , , "9002222", , , [7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "LI", 423, "00", "0", , , "(1001)|0", , , , [[, "(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"], , "$CC $1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], [
                ,
                "(\\d{2})(\\d{3})(\\d{4})",
                "$1 $2 $3",
                ["69"],
                ,
                "$CC $1"
              ], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"], , "$CC $1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "870(?:28|87)\\d\\d", , , , "8702812", , , [7]], , , [, , "697(?:42|56|[78]\\d)\\d{4}", , , , "697861234", , , [9]]],
              LK: [, [, , "[1-9]\\d{8}", , , , , , , [9], [7]], [, , "(?:12[2-9]|602|8[12]\\d|9(?:1\\d|22|9[245]))\\d{6}|(?:11|2[13-7]|3[1-8]|4[157]|5[12457]|6[35-7])[2-57]\\d{6}", , , , "112345678", , , , [7]], [, , "7(?:[0-25-8]\\d|4[0-4])\\d{6}", , , , "712345678"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], [, , , , , , , , , [-1]], "LK", 94, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "1973\\d{5}", , , , "197312345"], , , [, , , , , , , , , [-1]]],
              LR: [, [, , "(?:[25]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", , , , , , , [7, 8, 9]], [, , "2\\d{7}", , , , "21234567", , , [8]], [, , "(?:(?:(?:22|33)0|555|(?:77|88)\\d)\\d|4[67])\\d{5}|[56]\\d{6}", , , , "770123456", , , [7, 9]], [, , , , , , , , , [-1]], [
                ,
                ,
                "332(?:02|[34]\\d)\\d{4}",
                ,
                ,
                ,
                "332021234",
                ,
                ,
                [9]
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "LR", 231, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[4-6]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23578]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              LS: [, [, , "(?:[256]\\d\\d|800)\\d{5}", , , , , , , [8]], [, , "2\\d{7}", , , , "22123456"], [, , "[56]\\d{7}", , , , "50123456"], [, , "800[256]\\d{4}", , , , "80021234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], [, , , , , , , , , [-1]], "LS", 266, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              LT: [, [, , "(?:[3469]\\d|52|[78]0)\\d{6}", , , , , , , [8]], [, , "(?:3[1478]|4[124-6]|52)\\d{6}", , , , "31234567"], [, , "6\\d{7}", , , , "61234567"], [, , "80[02]\\d{5}", , , , "80012345"], [, , "9(?:0[0239]|10)\\d{5}", , , , "90012345"], [, , "808\\d{5}", , , , "80812345"], [, , "70[05]\\d{5}", , , , "70012345"], [, , "[89]01\\d{5}", , , , "80123456"], "LT", 370, "00", "8", , , "[08]", , , , [[
                ,
                "(\\d)(\\d{3})(\\d{4})",
                "$1 $2 $3",
                ["52[0-7]"],
                "(8-$1)",
                ,
                1
              ], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", , 1], [, "(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", , 1], [, "(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", , 1]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "70[67]\\d{5}", , , , "70712345"], , , [, , , , , , , , , [-1]]],
              LU: [, [, , "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", , , , , , , [4, 5, 6, 7, 8, 9, 10, 11]], [
                ,
                ,
                "(?:35[013-9]|80[2-9]|90[89])\\d{1,8}|(?:2[2-9]|3[0-46-9]|[457]\\d|8[13-9]|9[2-579])\\d{2,9}",
                ,
                ,
                ,
                "27123456"
              ], [, , "6(?:[269][18]|5[1568]|7[189]|81)\\d{6}", , , , "628123456", , , [9]], [, , "800\\d{5}", , , , "80012345", , , [8]], [, , "90[015]\\d{5}", , , , "90012345", , , [8]], [, , "801\\d{5}", , , , "80112345", , , [8]], [, , , , , , , , , [-1]], [, , "20(?:1\\d{5}|[2-689]\\d{1,7})", , , , "20201234", , , [4, 5, 6, 7, 8, 9, 10]], "LU", 352, "00", , , , "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)", , , , [[, "(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"], , "$CC $1"], [
                ,
                "(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3",
                ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"],
                ,
                "$CC $1"
              ], [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"], , "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"], , "$CC $1"], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"], , "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"], , "$CC $1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"], , "$CC $1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"], , "$CC $1"], [
                ,
                "(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})",
                "$1 $2 $3 $4",
                ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"],
                ,
                "$CC $1"
              ]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              LV: [, [, , "(?:[268]\\d|90)\\d{6}", , , , , , , [8]], [, , "6\\d{7}", , , , "63123456"], [, , "23(?:23[0-57-9]|33[0238])\\d{3}|2(?:[0-24-9]\\d\\d|3(?:0[07]|[14-9]\\d|2[024-9]|3[0-24-9]))\\d{4}", , , , "21234567"], [, , "80\\d{6}", , , , "80123456"], [, , "90\\d{6}", , , , "90123456"], [, , "81\\d{6}", , , , "81123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "LV", 371, "00", , , , , , , , [[
                ,
                "(\\d{2})(\\d{3})(\\d{3})",
                "$1 $2 $3",
                ["[269]|8[01]"]
              ]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              LY: [
                ,
                [, , "[2-9]\\d{8}", , , , , , , [9], [7]],
                [, , "(?:2(?:0[56]|[1-6]\\d|7[124579]|8[124])|3(?:1\\d|2[2356])|4(?:[17]\\d|2[1-357]|5[2-4]|8[124])|5(?:[1347]\\d|2[1-469]|5[13-5]|8[1-4])|6(?:[1-479]\\d|5[2-57]|8[1-5])|7(?:[13]\\d|2[13-79])|8(?:[124]\\d|5[124]|84))\\d{6}", , , , "212345678", , , , [7]],
                [, , "9[1-6]\\d{7}", , , , "912345678"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                "LY",
                218,
                "00",
                "0",
                ,
                ,
                "0",
                ,
                ,
                ,
                [[, "(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              MA: [, [, , "[5-8]\\d{8}", , , , , , , [9]], [, , "5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}", , , , "520123456"], [, , "(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-2]|5[01]|8[0-3]))\\d{6}", , , , "650123456"], [, , "80[0-7]\\d{6}", , , , "801234567"], [, , "89\\d{7}", , , , "891234567"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [
                ,
                ,
                "(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}",
                ,
                ,
                ,
                "592401234"
              ], "MA", 212, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], [, "(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-489]|3[5-9]|9)|8(?:0[89]|92)", "5(?:2(?:[2-49]|8[235-9])|3[5-9]|9)|8(?:0[89]|92)"], "0$1"], [, "(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], [, "(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], , [, , , , , , , , , [-1]], 1, , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              MC: [, [, , "(?:[3489]|6\\d)\\d{7}", , , , , , , [8, 9]], [, , "(?:870|9[2-47-9]\\d)\\d{5}", , , , "99123456", , , [8]], [
                ,
                ,
                "4(?:[46]\\d|5[1-9])\\d{5}|(?:3|6\\d)\\d{7}",
                ,
                ,
                ,
                "612345678"
              ], [, , "(?:800|90\\d)\\d{5}", , , , "90123456", , , [8]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "MC", 377, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["87"]], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], [
                ,
                "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[389]"]
              ], [, "(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], [, , , , , , , , , [-1]], , , [, , "8[07]0\\d{5}", , , , , , , [8]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              MD: [
                ,
                [, , "(?:[235-7]\\d|[89]0)\\d{6}", , , , , , , [8]],
                [, , "(?:(?:2[1-9]|3[1-79])\\d|5(?:33|5[257]))\\d{5}", , , , "22212345"],
                [, , "562\\d{5}|(?:6\\d|7[16-9])\\d{6}", , , , "62112345"],
                [, , "800\\d{5}", , , , "80012345"],
                [, , "90[056]\\d{5}", , , , "90012345"],
                [, , "808\\d{5}", , , , "80812345"],
                [, , , , , , , , , [-1]],
                [, , "3[08]\\d{6}", , , , "30123456"],
                "MD",
                373,
                "00",
                "0",
                ,
                ,
                "0",
                ,
                ,
                ,
                [[, "(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , "803\\d{5}", , , , "80312345"],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              ME: [
                ,
                [, , "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", , , , , , , [8, 9], [6]],
                [, , "(?:20[2-8]|3(?:[0-2][2-7]|3[24-7])|4(?:0[2-467]|1[2467])|5(?:0[2467]|1[24-7]|2[2-467]))\\d{5}", , , , "30234567", , , [8], [6]],
                [, , "6(?:[07-9]\\d|3[024]|6[0-25])\\d{5}", , , , "67622901", , , [8]],
                [, , "80(?:[0-2578]|9\\d)\\d{5}", , , , "80080002"],
                [, , "9(?:4[1568]|5[178])\\d{5}", , , , "94515151", , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "78[1-49]\\d{5}", , , , "78108780", , , [8]],
                "ME",
                382,
                "00",
                "0",
                ,
                ,
                "0",
                ,
                ,
                ,
                [[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , "77[1-9]\\d{5}", , , , "77273012", , , [8]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              MF: [, [, , "590\\d{6}|(?:69|80|9\\d)\\d{7}", , , , , , , [9]], [, , "590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}", , , , "590271234"], [
                ,
                ,
                "69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))\\d{4}",
                ,
                ,
                ,
                "690001234"
              ], [, , "80[0-5]\\d{6}", , , , "800012345"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "9(?:(?:395|76[018])\\d|475[0-5])\\d{4}", , , , "976012345"], "MF", 590, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              MG: [, [, , "[23]\\d{8}", , , , , , , [9], [7]], [, , "2072[29]\\d{4}|20(?:2\\d|4[47]|5[3467]|6[279]|7[35]|8[268]|9[245])\\d{5}", , , , "202123456", , , , [7]], [, , "3[2-47-9]\\d{7}", , , , "321234567"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [
                ,
                ,
                "22\\d{7}",
                ,
                ,
                ,
                "221234567"
              ], "MG", 261, "00", "0", , , "([24-9]\\d{6})$|0", "20$1", , , [[, "(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              MH: [, [, , "329\\d{4}|(?:[256]\\d|45)\\d{5}", , , , , , , [7]], [, , "(?:247|45[78]|528|625)\\d{4}", , , , "2471234"], [, , "(?:(?:23|54)5|329|45[356])\\d{4}", , , , "2351234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "635\\d{4}", , , , "6351234"], "MH", 692, "011", "1", , , "1", , , , [[
                ,
                "(\\d{3})(\\d{4})",
                "$1-$2",
                ["[2-6]"]
              ]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              MK: [
                ,
                [, , "[2-578]\\d{7}", , , , , , , [8], [6, 7]],
                [, , "(?:(?:2(?:62|77)0|3444)\\d|4[56]440)\\d{3}|(?:34|4[357])700\\d{3}|(?:2(?:[0-3]\\d|5[0-578]|6[01]|82)|3(?:1[3-68]|[23][2-68]|4[23568])|4(?:[23][2-68]|4[3-68]|5[2568]|6[25-8]|7[24-68]|8[4-68]))\\d{5}", , , , "22012345", , , , [6, 7]],
                [, , "7(?:3555|(?:474|9[019]7)7)\\d{3}|7(?:[0-25-8]\\d\\d|3(?:[1-48]\\d|6[01]|7[01578])|4(?:2\\d|60|7[01578])|9(?:[2-4]\\d|5[01]|7[015]))\\d{4}", , , , "72345678"],
                [, , "800\\d{5}", , , , "80012345"],
                [, , "5\\d{7}", , , , "50012345"],
                [, , "8(?:0[1-9]|[1-9]\\d)\\d{5}", , , , "80123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                "MK",
                389,
                "00",
                "0",
                ,
                ,
                "0",
                ,
                ,
                ,
                [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], [, "(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              ML: [, [, , "[24-9]\\d{7}", , , , , , , [8]], [
                ,
                ,
                "2(?:07[0-8]|12[67])\\d{4}|(?:2(?:02|1[4-689])|4(?:0[0-4]|4[1-39]))\\d{5}",
                ,
                ,
                ,
                "20212345"
              ], [, , "2(?:0(?:01|79)|17\\d)\\d{4}|(?:5[01]|[679]\\d|8[2-49])\\d{6}", , , , "65012345"], [, , "80\\d{6}", , , , "80012345"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "ML", 223, "00", , , , , , , , [[, "(\\d{4})", "$1", ["67[057-9]|74[045]", "67(?:0[09]|[59]9|77|8[89])|74(?:0[02]|44|55)"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]], [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]], [, , , , , , , , , [-1]], , , [, , "80\\d{6}"], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              MM: [
                ,
                [, , "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", , , , , , , [6, 7, 8, 9, 10], [5]],
                [
                  ,
                  ,
                  "(?:1(?:(?:2\\d|3[56]|[89][0-6])\\d|4(?:2[29]|62|7[0-2]|83)|6)|2(?:2(?:00|8[34])|4(?:0\\d|[26]2|7[0-2]|83)|51\\d\\d)|4(?:2(?:2\\d\\d|48[013])|3(?:20\\d|4(?:70|83)|56)|420\\d|5470)|6(?:0(?:[23]|88\\d)|(?:124|[56]2\\d)\\d|2472|3(?:20\\d|470)|4(?:2[04]\\d|472)|7(?:(?:3\\d|8[01459])\\d|4[67]0)))\\d{4}|5(?:2(?:2\\d{5,6}|47[02]\\d{4})|(?:3472|4(?:2(?:1|86)|470)|522\\d|6(?:20\\d|483)|7(?:20\\d|48[01])|8(?:20\\d|47[02])|9(?:20\\d|470))\\d{4})|7(?:(?:0470|4(?:25\\d|470)|5(?:202|470|96\\d))\\d{4}|1(?:20\\d{4,5}|4(?:70|83)\\d{4}))|8(?:1(?:2\\d{5,6}|4(?:10|7[01]\\d)\\d{3})|2(?:2\\d{5,6}|(?:320|490\\d)\\d{3})|(?:3(?:2\\d\\d|470)|4[24-7]|5(?:(?:2\\d|51)\\d|4(?:[1-35-9]\\d|4[0-57-9]))|6[23])\\d{4})|(?:1[2-6]\\d|4(?:2[24-8]|3[2-7]|[46][2-6]|5[3-5])|5(?:[27][2-8]|3[2-68]|4[24-8]|5[23]|6[2-4]|8[24-7]|9[2-7])|6(?:[19]20|42[03-6]|(?:52|7[45])\\d)|7(?:[04][24-8]|[15][2-7]|22|3[2-4])|8(?:1[2-689]|2[2-8]|[35]2\\d))\\d{4}|25\\d{5,6}|(?:2[2-9]|6(?:1[2356]|[24][2-6]|3[24-6]|5[2-4]|6[2-8]|7[235-7]|8[245]|9[24])|8(?:3[24]|5[245]))\\d{4}",
                  ,
                  ,
                  ,
                  "1234567",
                  ,
                  ,
                  [6, 7, 8, 9],
                  [5]
                ],
                [, , "(?:17[01]|9(?:2(?:[0-4]|[56]\\d\\d)|(?:3(?:[0-36]|4\\d)|(?:6\\d|8[89]|9[4-8])\\d|7(?:3|40|[5-9]\\d))\\d|4(?:(?:[0245]\\d|[1379])\\d|88)|5[0-6])\\d)\\d{4}|9[69]1\\d{6}|9(?:[68]\\d|9[089])\\d{5}", , , , "92123456", , , [7, 8, 9, 10]],
                [, , "80080(?:0[1-9]|2\\d)\\d{3}", , , , "8008001234", , , [10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "1333\\d{4}|[12]468\\d{4}", , , , "13331234", , , [8]],
                "MM",
                95,
                "00",
                "0",
                ,
                ,
                "0",
                ,
                ,
                ,
                [[, "(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], [
                  ,
                  "(\\d{2})(\\d{2})(\\d{3})",
                  "$1 $2 $3",
                  ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"],
                  "0$1"
                ], [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], [, "(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], [, "(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], [, "(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]],
                ,
                [
                  ,
                  ,
                  ,
                  ,
                  ,
                  ,
                  ,
                  ,
                  ,
                  [-1]
                ],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              MN: [, [, , "[12]\\d{7,9}|[5-9]\\d{7}", , , , , , , [8, 9, 10], [4, 5, 6]], [, , "[12]2[1-3]\\d{5,6}|(?:(?:[12](?:1|27)|5[368])\\d\\d|7(?:0(?:[0-5]\\d|7[078]|80)|128))\\d{4}|[12](?:3[2-8]|4[2-68]|5[1-4689])\\d{6,7}", , , , "53123456", , , , [4, 5, 6]], [, , "(?:83[01]|92[039])\\d{5}|(?:5[05]|6[069]|8[015689]|9[013-9])\\d{6}", , , , "88123456", , , [8]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [
                ,
                ,
                "712[0-79]\\d{4}|7(?:1[013-9]|[25-9]\\d)\\d{5}",
                ,
                ,
                ,
                "75123456",
                ,
                ,
                [8]
              ], "MN", 976, "001", "0", , , "0", , , , [[, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], [, "(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], [, "(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], [, "(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], [, "(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              MO: [, [, , "0800\\d{3}|(?:28|[68]\\d)\\d{6}", , , , , , , [7, 8]], [
                ,
                ,
                "(?:28[2-9]|8(?:11|[2-57-9]\\d))\\d{5}",
                ,
                ,
                ,
                "28212345",
                ,
                ,
                [8]
              ], [, , "6800[0-79]\\d{3}|6(?:[235]\\d\\d|6(?:0[0-5]|[1-9]\\d)|8(?:0[1-9]|[14-8]\\d|2[5-9]|[39][0-4]))\\d{4}", , , , "66123456", , , [8]], [, , "0800\\d{3}", , , , "0800501", , , [7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "MO", 853, "00", , , , , , , , [[, "(\\d{4})(\\d{3})", "$1 $2", ["0"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              MP: [, [, , "[58]\\d{9}|(?:67|90)0\\d{7}", , , , , , , [10], [7]], [
                ,
                ,
                "670(?:2(?:3[3-7]|56|8[4-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}",
                ,
                ,
                ,
                "6702345678",
                ,
                ,
                ,
                [7]
              ], [, , "670(?:2(?:3[3-7]|56|8[4-8])|32[1-38]|4(?:33|8[348])|5(?:32|55|88)|6(?:64|70|82)|78[3589]|8[3-9]8|989)\\d{4}", , , , "6702345678", , , , [7]], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"], [, , "900[2-9]\\d{6}", , , , "9002123456"], [, , , , , , , , , [-1]], [
                ,
                ,
                "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
                ,
                ,
                ,
                "5002345678"
              ], [, , , , , , , , , [-1]], "MP", 1, "011", "1", , , "([2-9]\\d{6})$|1", "670$1", , 1, , , [, , , , , , , , , [-1]], , "670", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              MQ: [
                ,
                [, , "596\\d{6}|(?:69|80|9\\d)\\d{7}", , , , , , , [9]],
                [, , "596(?:[03-7]\\d|10|2[7-9]|8[0-39]|9[04-9])\\d{4}", , , , "596301234"],
                [, , "69(?:6(?:[0-46-9]\\d|5[0-6])|727)\\d{4}", , , , "696201234"],
                [, , "80[0-5]\\d{6}", , , , "800012345"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "9(?:397[0-2]|477[0-5]|76(?:6\\d|7[0-367]))\\d{4}", , , , "976612345"],
                "MQ",
                596,
                "00",
                "0",
                ,
                ,
                "0",
                ,
                ,
                ,
                [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              MR: [, [, , "(?:[2-4]\\d\\d|800)\\d{5}", , , , , , , [8]], [, , "(?:25[08]|35\\d|45[1-7])\\d{5}", , , , "35123456"], [, , "[2-4][0-46-9]\\d{6}", , , , "22123456"], [, , "800\\d{5}", , , , "80012345"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "MR", 222, "00", , , , , , , , [[
                ,
                "(\\d{2})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[2-48]"]
              ]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              MS: [, [, , "(?:[58]\\d\\d|664|900)\\d{7}", , , , , , , [10], [7]], [, , "6644(?:1[0-3]|91)\\d{4}", , , , "6644912345", , , , [7]], [, , "664(?:3(?:49|9[1-6])|49[2-6])\\d{4}", , , , "6644923456", , , , [7]], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"], [, , "900[2-9]\\d{6}", , , , "9002123456"], [, , , , , , , , , [-1]], [
                ,
                ,
                "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
                ,
                ,
                ,
                "5002345678"
              ], [, , , , , , , , , [-1]], "MS", 1, "011", "1", , , "([34]\\d{6})$|1", "664$1", , , , , [, , , , , , , , , [-1]], , "664", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              MT: [, [, , "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", , , , , , , [8]], [, , "20(?:3[1-4]|6[059])\\d{4}|2(?:0[19]|[1-357]\\d|60)\\d{5}", , , , "21001234"], [, , "(?:7(?:210|[79]\\d\\d)|9(?:[29]\\d\\d|69[67]|8(?:1[1-3]|89|97)))\\d{4}", , , , "96961234"], [, , "800(?:02|[3467]\\d)\\d{3}", , , , "80071234"], [
                ,
                ,
                "5(?:0(?:0(?:37|43)|(?:6\\d|70|9[0168])\\d)|[12]\\d0[1-5])\\d{3}",
                ,
                ,
                ,
                "50037123"
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "3550\\d{4}", , , , "35501234"], "MT", 356, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]], , [, , "7117\\d{4}", , , , "71171234"], , , [, , , , , , , , , [-1]], [, , "501\\d{5}", , , , "50112345"], , , [, , , , , , , , , [-1]]],
              MU: [, [, , "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", , , , , , , [7, 8, 10]], [, , "(?:2(?:[0346-8]\\d|1[0-7])|4(?:[013568]\\d|2[4-8])|54(?:[3-5]\\d|71)|6\\d\\d|8(?:14|3[129]))\\d{4}", , , , "54480123", , , [7, 8]], [
                ,
                ,
                "5(?:4(?:2[1-389]|7[1-9])|87[15-8])\\d{4}|(?:5(?:2[5-9]|4[3-689]|[57]\\d|8[0-689]|9[0-8])|7(?:0[0-3]|3[013]))\\d{5}",
                ,
                ,
                ,
                "52512345",
                ,
                ,
                [8]
              ], [, , "802\\d{7}|80[0-2]\\d{4}", , , , "8001234", , , [7, 10]], [, , "30\\d{5}", , , , "3012345", , , [7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "3(?:20|9\\d)\\d{4}", , , , "3201234", , , [7]], "MU", 230, "0(?:0|[24-7]0|3[03])", , , , , , "020", , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], [, "(\\d{5})(\\d{5})", "$1 $2", ["8"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              MV: [, [, , "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", , , , , , , [7, 10]], [
                ,
                ,
                "(?:3(?:0[0-3]|3[0-59])|6(?:[58][024689]|6[024-68]|7[02468]))\\d{4}",
                ,
                ,
                ,
                "6701234",
                ,
                ,
                [7]
              ], [, , "(?:46[46]|[79]\\d\\d)\\d{4}", , , , "7712345", , , [7]], [, , "800\\d{7}", , , , "8001234567", , , [10]], [, , "900\\d{7}", , , , "9001234567", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "MV", 960, "0(?:0|19)", , , , , , "00", , [[, "(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "4(?:0[01]|50)\\d{4}", , , , "4001234", , , [7]], , , [, , , , , , , , , [-1]]],
              MW: [, [, , "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", , , , , , , [7, 9]], [
                ,
                ,
                "(?:1[2-9]|2[12]\\d\\d)\\d{5}",
                ,
                ,
                ,
                "1234567"
              ], [, , "111\\d{6}|(?:31|77|[89][89])\\d{7}", , , , "991234567", , , [9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "MW", 265, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              MX: [
                ,
                [
                  ,
                  ,
                  "1(?:(?:[27]2|44|87|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-9]|8[1-69]|9[1-8])|[2-9]\\d)\\d{8}",
                  ,
                  ,
                  ,
                  ,
                  ,
                  ,
                  [10, 11],
                  [7, 8]
                ],
                [, , "657[12]\\d{6}|(?:2(?:0[01]|2\\d|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[25-7][1-9]|3[1-8]|4\\d|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2\\d|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[0-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|6[1-9]|7[12]|8[1-8]|9\\d))\\d{7}", , , , "2001234567", , , [10], [7, 8]],
                [
                  ,
                  ,
                  "657[12]\\d{6}|(?:1(?:2(?:2[1-9]|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[24-7][1-9]|3[1-8]|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[1-467][1-9]|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[1-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|[69][1-9]|7[12]|8[1-8]))|2(?:2\\d|3[1-35-8]|4[13-9]|7[1-689]|8[1-578]|9[467])|3(?:1[1-79]|[2458][1-9]|3\\d|7[1-8]|9[1-5])|4(?:1[1-57-9]|[25-7][1-9]|3[1-8]|4\\d|8[1-35-9]|9[2-689])|5(?:[56]\\d|88|9[1-79])|6(?:1[2-68]|[2-4][1-9]|5[1-3689]|6[1-57-9]|7[1-7]|8[67]|9[4-8])|7(?:[13467][1-9]|2\\d|5[13-9]|8[1-69]|9[17])|8(?:1\\d|2[13-689]|3[1-6]|4[124-6]|6[1246-9]|7[0-378]|9[12479])|9(?:1[346-9]|2[1-4]|3[2-46-8]|5[1348]|6[1-9]|7[12]|8[1-8]|9\\d))\\d{7}",
                  ,
                  ,
                  ,
                  "12221234567",
                  ,
                  ,
                  ,
                  [7, 8]
                ],
                [, , "8(?:00|88)\\d{7}", , , , "8001234567", , , [10]],
                [, , "900\\d{7}", , , , "9001234567", , , [10]],
                [, , "300\\d{7}", , , , "3001234567", , , [10]],
                [, , "500\\d{7}", , , , "5001234567", , , [10]],
                [, , , , , , , , , [-1]],
                "MX",
                52,
                "0[09]",
                "01",
                ,
                ,
                "0(?:[12]|4[45])|1",
                ,
                "00",
                ,
                [[, "(\\d{5})", "$1", ["53"]], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], , , 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], , , 1], [, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], , , 1], [
                  ,
                  "(\\d)(\\d{3})(\\d{3})(\\d{4})",
                  "$2 $3 $4",
                  ["1"],
                  ,
                  ,
                  1
                ]],
                [[, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], , , 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], , , 1], [, "(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], , , 1], [, "(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], , , 1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              MY: [, [, , "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", , , , , , , [8, 9, 10], [6, 7]], [
                ,
                ,
                "(?:3(?:2[0-36-9]|3[0-368]|4[0-278]|5[0-24-8]|6[0-467]|7[1246-9]|8\\d|9[0-57])\\d|4(?:2[0-689]|[3-79]\\d|8[1-35689])|5(?:2[0-589]|[3468]\\d|5[0-489]|7[1-9]|9[23])|6(?:2[2-9]|3[1357-9]|[46]\\d|5[0-6]|7[0-35-9]|85|9[015-8])|7(?:[2579]\\d|3[03-68]|4[0-8]|6[5-9]|8[0-35-9])|8(?:[24][2-8]|3[2-5]|5[2-7]|6[2-589]|7[2-578]|[89][2-9])|9(?:0[57]|13|[25-7]\\d|[3489][0-8]))\\d{5}",
                ,
                ,
                ,
                "323856789",
                ,
                ,
                [8, 9],
                [6, 7]
              ], [, , "1(?:1888[689]|4400|8(?:47|8[27])[0-4])\\d{4}|1(?:0(?:[23568]\\d|4[0-6]|7[016-9]|9[0-8])|1(?:[1-5]\\d\\d|6(?:0[5-9]|[1-9]\\d)|7(?:[0-4]\\d|5[0-7]))|(?:[269]\\d|[37][1-9]|4[235-9])\\d|5(?:31|9\\d\\d)|8(?:1[23]|[236]\\d|4[06]|5(?:46|[7-9])|7[016-9]|8[01]|9[0-8]))\\d{5}", , , , "123456789", , , [9, 10]], [, , "1[378]00\\d{6}", , , , "1300123456", , , [10]], [, , "1600\\d{6}", , , , "1600123456", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [
                ,
                ,
                "15(?:4(?:6[0-4]\\d|8(?:0[125]|[17]\\d|21|3[01]|4[01589]|5[014]|6[02]))|6(?:32[0-6]|78\\d))\\d{4}",
                ,
                ,
                ,
                "1546012345",
                ,
                ,
                [10]
              ], "MY", 60, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], [, "(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], [, "(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], , , [, , , , , , , , , [-1]]],
              MZ: [, [, , "(?:2|8\\d)\\d{7}", , , , , , , [8, 9]], [, , "2(?:[1346]\\d|5[0-2]|[78][12]|93)\\d{5}", , , , "21123456", , , [8]], [, , "8[2-79]\\d{7}", , , , "821234567", , , [9]], [, , "800\\d{6}", , , , "800123456", , , [9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "MZ", 258, "00", , , , , , , , [[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              NA: [, [
                ,
                ,
                "[68]\\d{7,8}",
                ,
                ,
                ,
                ,
                ,
                ,
                [8, 9]
              ], [, , "64426\\d{3}|6(?:1(?:2[2-7]|3[01378]|4[0-4])|254|32[0237]|4(?:27|41|5[25])|52[236-8]|626|7(?:2[2-4]|30))\\d{4,5}|6(?:1(?:(?:0\\d|2[0189]|3[24-69]|4[5-9])\\d|17|69|7[014])|2(?:17|5[0-36-8]|69|70)|3(?:17|2[14-689]|34|6[289]|7[01]|81)|4(?:17|2[0-2]|4[06]|5[0137]|69|7[01])|5(?:17|2[0459]|69|7[01])|6(?:17|25|38|42|69|7[01])|7(?:17|2[569]|3[13]|6[89]|7[01]))\\d{4}", , , , "61221234"], [, , "(?:60|8[1245])\\d{7}", , , , "811234567", , , [9]], [, , "80\\d{7}", , , , "800123456", , , [9]], [
                ,
                ,
                "8701\\d{5}",
                ,
                ,
                ,
                "870123456",
                ,
                ,
                [9]
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "8(?:3\\d\\d|86)\\d{5}", , , , "88612345"], "NA", 264, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              NC: [, [, , "(?:050|[2-57-9]\\d\\d)\\d{3}", , , , , , , [6]], [, , "(?:2[03-9]|3[0-5]|4[1-7]|88)\\d{4}", , , , "201234"], [
                ,
                ,
                "(?:5[0-4]|[79]\\d|8[0-79])\\d{4}",
                ,
                ,
                ,
                "751234"
              ], [, , "050\\d{3}", , , , "050012"], [, , "36\\d{4}", , , , "366711"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "NC", 687, "00", , , , , , , , [[, "(\\d{3})", "$1", ["5[6-8]"]], [, "(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]], [[, "(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              NE: [, [, , "[027-9]\\d{7}", , , , , , , [8]], [
                ,
                ,
                "2(?:0(?:20|3[1-8]|4[13-5]|5[14]|6[14578]|7[1-578])|1(?:4[145]|5[14]|6[14-68]|7[169]|88))\\d{4}",
                ,
                ,
                ,
                "20201234"
              ], [, , "(?:23|7[047]|[89]\\d)\\d{6}", , , , "93123456"], [, , "08\\d{6}", , , , "08123456"], [, , "09\\d{6}", , , , "09123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "NE", 227, "00", , , , , , , , [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[047]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              NF: [, [, , "[13]\\d{5}", , , , , , , [6], [5]], [, , "(?:1(?:06|17|28|39)|3[0-2]\\d)\\d{3}", , , , "106609", , , , [5]], [
                ,
                ,
                "(?:14|3[58])\\d{4}",
                ,
                ,
                ,
                "381234",
                ,
                ,
                ,
                [5]
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "NF", 672, "00", , , , "([0-258]\\d{4})$", "3$1", , , [[, "(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], [, "(\\d)(\\d{5})", "$1 $2", ["[13]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              NG: [, [, , "(?:[124-7]|9\\d{3})\\d{6}|[1-9]\\d{7}|[78]\\d{9,13}", , , , , , , [7, 8, 10, 11, 12, 13, 14], [5, 6]], [
                ,
                ,
                "(?:(?:[1-356]\\d|4[02-8]|8[2-9])\\d|9(?:0[3-9]|[1-9]\\d))\\d{5}|7(?:0(?:[013-689]\\d|2[0-24-9])\\d{3,4}|[1-79]\\d{6})|(?:[12]\\d|4[147]|5[14579]|6[1578]|7[1-3578])\\d{5}",
                ,
                ,
                ,
                "18040123",
                ,
                ,
                [7, 8],
                [5, 6]
              ], [, , "(?:702[0-24-9]|819[01])\\d{6}|(?:70[13-689]|8(?:0[1-9]|1[0-8])|9(?:0[1-9]|1[1-356]))\\d{7}", , , , "8021234567", , , [10]], [, , "800\\d{7,11}", , , , "80017591759", , , [10, 11, 12, 13, 14]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "NG", 234, "009", "0", , , "0", , , , [[, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"], [, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-7]|8[2-9]"], "0$1"], [
                ,
                "(\\d{3})(\\d{3})(\\d{3,4})",
                "$1 $2 $3",
                ["[7-9]"],
                "0$1"
              ], [, "(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], [, "(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "700\\d{7,11}", , , , "7001234567", , , [10, 11, 12, 13, 14]], , , [, , , , , , , , , [-1]]],
              NI: [, [, , "(?:1800|[25-8]\\d{3})\\d{4}", , , , , , , [8]], [, , "2\\d{7}", , , , "21234567"], [, , "(?:5(?:5[0-7]|[78]\\d)|6(?:20|3[035]|4[045]|5[05]|77|8[1-9]|9[059])|(?:7[5-8]|8\\d)\\d)\\d{5}", , , , "81234567"], [, , "1800\\d{4}", , , , "18001234"], [, , , , , , , , , [-1]], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "NI", 505, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              NL: [, [, , "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", , , , , , , [5, 6, 7, 8, 9, 10, 11]], [
                ,
                ,
                "(?:1(?:[035]\\d|1[13-578]|6[124-8]|7[24]|8[0-467])|2(?:[0346]\\d|2[2-46-9]|5[125]|9[479])|3(?:[03568]\\d|1[3-8]|2[01]|4[1-8])|4(?:[0356]\\d|1[1-368]|7[58]|8[15-8]|9[23579])|5(?:[0358]\\d|[19][1-9]|2[1-57-9]|4[13-8]|6[126]|7[0-3578])|7\\d\\d)\\d{6}",
                ,
                ,
                ,
                "101234567",
                ,
                ,
                [9]
              ], [, , "(?:6[1-58]|970\\d)\\d{7}", , , , "612345678", , , [9, 11]], [, , "800\\d{4,7}", , , , "8001234", , , [7, 8, 9, 10]], [, , "90[069]\\d{4,7}", , , , "9061234", , , [7, 8, 9, 10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "(?:85|91)\\d{7}", , , , "851234567", , , [9]], "NL", 31, "00", "0", , , "0", , , , [[, "(\\d{4})", "$1", ["1[238]|[34]"]], [, "(\\d{2})(\\d{3,4})", "$1 $2", ["14"]], [, "(\\d{6})", "$1", ["1"]], [, "(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], [, "(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], [
                ,
                "(\\d{3})(\\d{3})(\\d{3})",
                "$1 $2 $3",
                ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],
                "0$1"
              ], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], [[, "(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], [, "(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], [
                ,
                "(\\d{3})(\\d{3})(\\d{5})",
                "$1 $2 $3",
                ["9"],
                "0$1"
              ]], [, , "66\\d{7}", , , , "662345678", , , [9]], , , [, , "140(?:1[035]|2[0346]|3[03568]|4[0356]|5[0358]|8[458])|140(?:1[16-8]|2[259]|3[124]|4[17-9]|5[124679]|7)\\d", , , , , , , [5, 6]], [, , "140(?:1[035]|2[0346]|3[03568]|4[0356]|5[0358]|8[458])|(?:140(?:1[16-8]|2[259]|3[124]|4[17-9]|5[124679]|7)|8[478]\\d{6})\\d", , , , "14020", , , [5, 6, 9]], , , [, , , , , , , , , [-1]]],
              NO: [, [, , "(?:0|[2-9]\\d{3})\\d{4}", , , , , , , [5, 8]], [, , "(?:2[1-4]|3[1-3578]|5[1-35-7]|6[1-4679]|7[0-8])\\d{6}", , , , "21234567", , , [8]], [
                ,
                ,
                "(?:4[015-8]|9\\d)\\d{6}",
                ,
                ,
                ,
                "40612345",
                ,
                ,
                [8]
              ], [, , "80[01]\\d{5}", , , , "80012345", , , [8]], [, , "82[09]\\d{5}", , , , "82012345", , , [8]], [, , "810(?:0[0-6]|[2-8]\\d)\\d{3}", , , , "81021234", , , [8]], [, , "880\\d{5}", , , , "88012345", , , [8]], [, , "85[0-5]\\d{5}", , , , "85012345", , , [8]], "NO", 47, "00", , , , , , , , [[, "(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], , [, , , , , , , , , [-1]], 1, "[02-689]|7[0-8]", [, , , , , , , , , [-1]], [, , "(?:0[2-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}", , , , "02000"], , , [
                ,
                ,
                "81[23]\\d{5}",
                ,
                ,
                ,
                "81212345",
                ,
                ,
                [8]
              ]],
              NP: [, [, , "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", , , , , , , [8, 10, 11], [6, 7]], [, , "(?:1[0-6]\\d|99[02-6])\\d{5}|(?:2[13-79]|3[135-8]|4[146-9]|5[135-7]|6[13-9]|7[15-9]|8[1-46-9]|9[1-7])[2-6]\\d{5}", , , , "14567890", , , [8], [6, 7]], [, , "9(?:6[0-3]|7[024-6]|8[0-24-68])\\d{7}", , , , "9841234567", , , [10]], [, , "1(?:66001|800\\d\\d)\\d{5}", , , , "16600101234", , , [11]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "NP", 977, "00", "0", , , "0", , , , [[, "(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], [
                ,
                "(\\d{2})(\\d{6})",
                "$1-$2",
                ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"],
                "0$1"
              ], [, "(\\d{3})(\\d{7})", "$1-$2", ["9"]], [, "(\\d{4})(\\d{2})(\\d{5})", "$1-$2-$3", ["1"]]], [[, "(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], [, "(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], [, "(\\d{3})(\\d{7})", "$1-$2", ["9"]]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              NR: [, [, , "(?:444|(?:55|8\\d)\\d|666)\\d{4}", , , , , , , [7]], [, , "444\\d{4}", , , , "4441234"], [, , "(?:55[3-9]|666|8\\d\\d)\\d{4}", , , , "5551234"], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "NR", 674, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              NU: [
                ,
                [, , "(?:[4-7]|888\\d)\\d{3}", , , , , , , [4, 7]],
                [, , "[47]\\d{3}", , , , "7012", , , [4]],
                [, , "(?:[56]|888[1-9])\\d{3}", , , , "8884012"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                "NU",
                683,
                "00",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [[, "(\\d{3})(\\d{4})", "$1 $2", ["8"]]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              NZ: [
                ,
                [, , "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", , , , , , , [5, 6, 7, 8, 9, 10]],
                [, , "24099\\d{3}|(?:3[2-79]|[49][2-9]|6[235-9]|7[2-57-9])\\d{6}", , , , "32345678", , , [8], [7]],
                [, , "2(?:[0-27-9]\\d|6)\\d{6,7}|2(?:1\\d|75)\\d{5}", , , , "211234567", , , [8, 9, 10]],
                [, , "508\\d{6,7}|80\\d{6,8}", , , , "800123456", , , [8, 9, 10]],
                [, , "(?:1[13-57-9]\\d{5}|50(?:0[08]|30|66|77|88))\\d{3}|90\\d{6,8}", , , , "900123456", , , [7, 8, 9, 10]],
                [, , , , , , , , , [-1]],
                [
                  ,
                  ,
                  "70\\d{7}",
                  ,
                  ,
                  ,
                  "701234567",
                  ,
                  ,
                  [9]
                ],
                [, , , , , , , , , [-1]],
                "NZ",
                64,
                "0(?:0|161)",
                "0",
                ,
                ,
                "0",
                ,
                "00",
                ,
                [[, "(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], [, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], [, "(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , "8(?:1[16-9]|22|3\\d|4[045]|5[459]|6[235-9]|7[0-3579]|90)\\d{2,7}", , , , "83012378"],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              OM: [
                ,
                [, , "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", , , , , , , [7, 8, 9]],
                [, , "2[1-6]\\d{6}", , , , "23123456", , , [8]],
                [, , "1505\\d{4}|(?:7(?:[1289]\\d|6[89]|7[0-5])|9(?:0[1-9]|[1-9]\\d))\\d{5}", , , , "92123456", , , [8]],
                [, , "8007\\d{4,5}|(?:500|800[05])\\d{4}", , , , "80071234"],
                [, , "900\\d{5}", , , , "90012345", , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                "OM",
                968,
                "00",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [[, "(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], [, "(\\d{2})(\\d{6})", "$1 $2", ["2"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              PA: [, [, , "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", , , , , , , [7, 8, 10, 11]], [
                ,
                ,
                "(?:1(?:0\\d|1[479]|2[37]|3[0137]|4[17]|5[05]|6[058]|7[0167]|8[2358]|9[1389])|2(?:[0235-79]\\d|1[0-7]|4[013-9]|8[02-9])|3(?:[089]\\d|1[0-7]|2[0-5]|33|4[0-79]|5[0-35]|6[068]|7[0-8])|4(?:00|3[0-579]|4\\d|7[0-57-9])|5(?:[01]\\d|2[0-7]|[56]0|79)|7(?:0[09]|2[0-26-8]|3[03]|4[04]|5[05-9]|6[0156]|7[0-24-9]|8[5-9]|90)|8(?:09|2[89]|3\\d|4[0-24-689]|5[014]|8[02])|9(?:0[5-9]|1[0135-8]|2[036-9]|3[35-79]|40|5[0457-9]|6[05-9]|7[04-9]|8[35-8]|9\\d))\\d{4}",
                ,
                ,
                ,
                "2001234",
                ,
                ,
                [7]
              ], [, , "(?:1[16]1|21[89]|6\\d{3}|8(?:1[01]|7[23]))\\d{4}", , , , "61234567", , , [7, 8]], [, , "800\\d{4,5}|(?:00800|800\\d)\\d{6}", , , , "8001234"], [, , "(?:8(?:22|55|60|7[78]|86)|9(?:00|81))\\d{4}", , , , "8601234", , , [7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "PA", 507, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], [, "(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              PE: [, [
                ,
                ,
                "(?:[14-8]|9\\d)\\d{7}",
                ,
                ,
                ,
                ,
                ,
                ,
                [8, 9],
                [6, 7]
              ], [, , "(?:(?:4[34]|5[14])[0-8]\\d|7(?:173|3[0-8]\\d)|8(?:10[05689]|6(?:0[06-9]|1[6-9]|29)|7(?:0[569]|[56]0)))\\d{4}|(?:1[0-8]|4[12]|5[236]|6[1-7]|7[246]|8[2-4])\\d{6}", , , , "11234567", , , [8], [6, 7]], [, , "9\\d{8}", , , , "912345678", , , [9]], [, , "800\\d{5}", , , , "80012345", , , [8]], [, , "805\\d{5}", , , , "80512345", , , [8]], [, , "801\\d{5}", , , , "80112345", , , [8]], [, , "80[24]\\d{5}", , , , "80212345", , , [8]], [, , , , , , , , , [-1]], "PE", 51, "00|19(?:1[124]|77|90)00", "0", " Anexo ", , "0", , "00", , [[
                ,
                "(\\d{3})(\\d{5})",
                "$1 $2",
                ["80"],
                "(0$1)"
              ], [, "(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], [, "(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              PF: [
                ,
                [, , "4\\d{5}(?:\\d{2})?|8\\d{7,8}", , , , , , , [6, 8, 9]],
                [, , "4(?:0[4-689]|9[4-68])\\d{5}", , , , "40412345", , , [8]],
                [, , "8[7-9]\\d{6}", , , , "87123456", , , [8]],
                [, , "80[0-5]\\d{6}", , , , "800012345", , , [9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "499\\d{5}", , , , "49901234", , , [8]],
                "PF",
                689,
                "00",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , "44\\d{4}", , , , , , , [6]],
                [, , "44\\d{4}", , , , "440123", , , [6]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              PG: [, [, , "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", , , , , , , [7, 8]], [, , "(?:(?:3[0-2]|4[257]|5[34]|9[78])\\d|64[1-9]|85[02-46-9])\\d{4}", , , , "3123456", , , [7]], [, , "(?:7\\d|8[128])\\d{6}", , , , "70123456", , , [8]], [
                ,
                ,
                "180\\d{4}",
                ,
                ,
                ,
                "1801234",
                ,
                ,
                [7]
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "2(?:0[0-57]|7[568])\\d{4}", , , , "2751234", , , [7]], "PG", 675, "00|140[1-3]", , , , , , "00", , [[, "(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], , [, , "27[01]\\d{4}", , , , "2700123", , , [7]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              PH: [, [, , "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", , , , , , , [6, 8, 9, 10, 11, 12, 13], [4, 5, 7]], [
                ,
                ,
                "(?:(?:2[3-8]|3[2-68]|4[2-9]|5[2-6]|6[2-58]|7[24578])\\d{3}|88(?:22\\d\\d|42))\\d{4}|(?:2|8[2-8]\\d\\d)\\d{5}",
                ,
                ,
                ,
                "232345678",
                ,
                ,
                [6, 8, 9, 10],
                [4, 5, 7]
              ], [, , "(?:8(?:1[37]|9[5-8])|9(?:0[5-9]|1[0-24-9]|[235-7]\\d|4[2-9]|8[135-9]|9[1-9]))\\d{7}", , , , "9051234567", , , [10]], [, , "1800\\d{7,9}", , , , "180012345678", , , [11, 12, 13]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "PH", 63, "00", "0", , , "0", , , , [[, "(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], [
                ,
                "(\\d{4})(\\d{4,6})",
                "$1 $2",
                ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],
                "(0$1)"
              ], [, "(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], [, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], [, "(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              PK: [, [
                ,
                ,
                "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",
                ,
                ,
                ,
                ,
                ,
                ,
                [8, 9, 10, 11, 12],
                [5, 6, 7]
              ], [, , "(?:(?:21|42)[2-9]|58[126])\\d{7}|(?:2[25]|4[0146-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]\\d{6,7}|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8]))[2-9]\\d{5,6}", , , , "2123456789", , , [9, 10], [5, 6, 7, 8]], [, , "3(?:[0-247]\\d|3[0-79]|55|64)\\d{7}", , , , "3012345678", , , [10]], [, , "800\\d{5}(?:\\d{3})?", , , , "80012345", , , [8, 11]], [, , "900\\d{5}", , , , "90012345", , , [8]], [, , , , , , , , , [-1]], [
                ,
                ,
                "122\\d{6}",
                ,
                ,
                ,
                "122044444",
                ,
                ,
                [9]
              ], [, , , , , , , , , [-1]], "PK", 92, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], [, "(\\d{4})(\\d{5})", "$1 $2", ["1"]], [
                ,
                "(\\d{3})(\\d{6,7})",
                "$1 $2",
                ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"],
                "(0$1)"
              ], [, "(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], [, "(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], [, "(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [
                ,
                ,
                "(?:2(?:[125]|3[2358]|4[2-4]|9[2-8])|4(?:[0-246-9]|5[3479])|5(?:[1-35-7]|4[2-467])|6(?:0[468]|[1-8])|7(?:[14]|2[236])|8(?:[16]|2[2-689]|3[23578]|4[3478]|5[2356])|9(?:1|22|3[27-9]|4[2-6]|6[3569]|9[2-7]))111\\d{6}",
                ,
                ,
                ,
                "21111825888",
                ,
                ,
                [11, 12]
              ], , , [, , , , , , , , , [-1]]],
              PL: [, [, , "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", , , , , , , [6, 7, 8, 9, 10]], [, , "47\\d{7}|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])(?:[02-9]\\d{6}|1(?:[0-8]\\d{5}|9\\d{3}(?:\\d{2})?))", , , , "123456789", , , [7, 9]], [, , "21(?:1(?:[145]\\d|3[1-5])|2\\d\\d)\\d{4}|(?:45|5[0137]|6[069]|7[2389]|88)\\d{7}", , , , "512345678", , , [9]], [, , "800\\d{6,7}", , , , "800123456", , , [9, 10]], [, , "70[01346-8]\\d{6}", , , , "701234567", , , [9]], [
                ,
                ,
                "801\\d{6}",
                ,
                ,
                ,
                "801234567",
                ,
                ,
                [9]
              ], [, , , , , , , , , [-1]], [, , "39\\d{7}", , , , "391234567", , , [9]], "PL", 48, "00", , , , , , , , [
                [, "(\\d{5})", "$1", ["19"]],
                [, "(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]],
                [, "(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],
                [, "(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]],
                [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],
                [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]],
                [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]
              ], , [, , "64\\d{4,7}", , , , "641234567", , , [6, 7, 8, 9]], , , [, , , , , , , , , [-1]], [, , "804\\d{6}", , , , "804123456", , , [9]], , , [, , , , , , , , , [-1]]],
              PM: [
                ,
                [, , "[45]\\d{5}|(?:708|80\\d)\\d{6}", , , , , , , [6, 9]],
                [, , "(?:4[1-35-7]|5[01])\\d{4}", , , , "430123", , , [6]],
                [, , "(?:4[02-4]|5[056]|708[45][0-5])\\d{4}", , , , "551234"],
                [, , "80[0-5]\\d{6}", , , , "800012345", , , [9]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                "PM",
                508,
                "00",
                "0",
                ,
                ,
                "0",
                ,
                ,
                ,
                [[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              PR: [, [, , "(?:[589]\\d\\d|787)\\d{7}", , , , , , , [10], [7]], [, , "(?:787|939)[2-9]\\d{6}", , , , "7872345678", , , , [7]], [, , "(?:787|939)[2-9]\\d{6}", , , , "7872345678", , , , [7]], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"], [
                ,
                ,
                "900[2-9]\\d{6}",
                ,
                ,
                ,
                "9002345678"
              ], [, , , , , , , , , [-1]], [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"], [, , , , , , , , , [-1]], "PR", 1, "011", "1", , , "1", , , 1, , , [, , , , , , , , , [-1]], , "787|939", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              PS: [, [, , "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", , , , , , , [8, 9, 10], [7]], [
                ,
                ,
                "(?:22[2-47-9]|42[45]|82[014-68]|92[3569])\\d{5}",
                ,
                ,
                ,
                "22234567",
                ,
                ,
                [8],
                [7]
              ], [, , "5[69]\\d{7}", , , , "599123456", , , [9]], [, , "1800\\d{6}", , , , "1800123456", , , [10]], [, , , , , , , , , [-1]], [, , "1700\\d{6}", , , , "1700123456", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "PS", 970, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              PT: [
                ,
                [, , "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", , , , , , , [9]],
                [, , "2(?:[12]\\d|3[1-689]|4[1-59]|[57][1-9]|6[1-35689]|8[1-69]|9[1256])\\d{6}", , , , "212345678"],
                [, , "6(?:[06]92(?:30|9\\d)|[35]92(?:3[03]|9\\d))\\d{3}|(?:(?:16|6[0356])93|9(?:[1-36]\\d\\d|480))\\d{5}", , , , "912345678"],
                [, , "80[02]\\d{6}", , , , "800123456"],
                [, , "(?:6(?:0[178]|4[68])\\d|76(?:0[1-57]|1[2-47]|2[237]))\\d{5}", , , , "760123456"],
                [, , "80(?:8\\d|9[1579])\\d{5}", , , , "808123456"],
                [, , "884[0-4689]\\d{5}", , , , "884123456"],
                [, , "30\\d{7}", , , , "301234567"],
                "PT",
                351,
                "00",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [[
                  ,
                  "(\\d{2})(\\d{3})(\\d{4})",
                  "$1 $2 $3",
                  ["2[12]"]
                ], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]],
                ,
                [, , "6222\\d{5}", , , , "622212345"],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , "70(?:38[01]|596|(?:7\\d|8[17])\\d)\\d{4}", , , , "707123456"],
                ,
                ,
                [, , "600\\d{6}|6[06]9233\\d{3}", , , , "600110000"]
              ],
              PW: [, [, , "(?:[24-8]\\d\\d|345|900)\\d{4}", , , , , , , [7]], [, , "(?:2(?:55|77)|345|488|5(?:35|44|87)|6(?:22|54|79)|7(?:33|47)|8(?:24|55|76)|900)\\d{4}", , , , "2771234"], [, , "(?:(?:46|83)[0-5]|6[2-4689]0)\\d{4}|(?:45|77|88)\\d{5}", , , , "6201234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "PW", 680, "01[12]", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              PY: [, [, , "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", , , , , , , [6, 7, 8, 9, 10, 11], [5]], [
                ,
                ,
                "(?:[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36])\\d{5,7}|(?:2(?:2[4-68]|[4-68]\\d|7[15]|9[1-5])|3(?:18|3[167]|4[2357]|51|[67]\\d)|4(?:3[12]|5[13]|9[1-47])|5(?:[1-4]\\d|5[02-4])|6(?:3[1-3]|44|7[1-8])|7(?:4[0-4]|5\\d|6[1-578]|75|8[0-8])|858)\\d{5,6}",
                ,
                ,
                ,
                "212345678",
                ,
                ,
                [7, 8, 9],
                [5, 6]
              ], [, , "9(?:51|6[129]|7[1-6]|8[1-7]|9[1-5])\\d{6}", , , , "961456789", , , [9]], [, , "9800\\d{5,7}", , , , "98000123456", , , [9, 10, 11]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "8700[0-4]\\d{4}", , , , "870012345", , , [9]], "PY", 595, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], [, "(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], [, "(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], [
                ,
                "(\\d{2})(\\d{3})(\\d{3,4})",
                "$1 $2 $3",
                ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],
                "(0$1)"
              ], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], [, "(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "[2-9]0\\d{4,7}", , , , "201234567", , , [6, 7, 8, 9]], , , [, , , , , , , , , [-1]]],
              QA: [, [, , "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", , , , , , , [7, 8, 9, 11]], [
                ,
                ,
                "4(?:1111|2022)\\d{3}|4(?:[04]\\d\\d|14[0-6]|999)\\d{4}",
                ,
                ,
                ,
                "44123456",
                ,
                ,
                [8]
              ], [, , "[35-7]\\d{7}", , , , "33123456", , , [8]], [, , "800\\d{4}|(?:0080[01]|800)\\d{6}", , , , "8001234", , , [7, 9, 11]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "QA", 974, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]], , [, , "2[16]\\d{5}", , , , "2123456", , , [7]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              RE: [, [, , "(?:26|[689]\\d)\\d{7}", , , , , , , [9]], [, , "26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}", , , , "262161234"], [
                ,
                ,
                "69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))\\d{4}",
                ,
                ,
                ,
                "692123456"
              ], [, , "80\\d{7}", , , , "801234567"], [, , "89[1-37-9]\\d{6}", , , , "891123456"], [, , "8(?:1[019]|2[0156]|84|90)\\d{6}", , , , "810123456"], [, , , , , , , , , [-1]], [, , "9(?:399[0-3]|479[0-5]|76(?:2[27]|3[0-37]))\\d{4}", , , , "939901234"], "RE", 262, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]], , [, , , , , , , , , [-1]], 1, , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              RO: [, [, , "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", , , , , , , [6, 9]], [
                ,
                ,
                "[23][13-6]\\d{7}|(?:2(?:19\\d|[3-6]\\d9)|31\\d\\d)\\d\\d",
                ,
                ,
                ,
                "211234567"
              ], [, , "7020\\d{5}|(?:6(?:2\\d|40)|7(?:0[013-9]|1[0-3]|[2-7]\\d|8[03-8]|9[0-39]))\\d{6}", , , , "712034567", , , [9]], [, , "800\\d{6}", , , , "800123456", , , [9]], [, , "90[0136]\\d{6}", , , , "900123456", , , [9]], [, , "801\\d{6}", , , , "801123456", , , [9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "RO", 40, "00", "0", " int ", , "0", , , , [[, "(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], [, "(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], [
                ,
                "(\\d{3})(\\d{3})(\\d{3})",
                "$1 $2 $3",
                ["[236-9]"],
                "0$1"
              ]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "(?:37\\d|80[578])\\d{6}", , , , "372123456", , , [9]], , , [, , , , , , , , , [-1]]],
              RS: [
                ,
                [, , "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", , , , , , , [6, 7, 8, 9, 10, 11, 12], [4, 5]],
                [, , "(?:11[1-9]\\d|(?:2[389]|39)(?:0[2-9]|[2-9]\\d))\\d{3,8}|(?:1[02-9]|2[0-24-7]|3[0-8])[2-9]\\d{4,9}", , , , "10234567", , , [7, 8, 9, 10, 11, 12], [4, 5, 6]],
                [, , "6(?:[0-689]|7\\d)\\d{6,7}", , , , "601234567", , , [8, 9, 10]],
                [, , "800\\d{3,9}", , , , "80012345"],
                [, , "(?:78\\d|90[0169])\\d{3,7}", , , , "90012345", , , [6, 7, 8, 9, 10]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                "RS",
                381,
                "00",
                "0",
                ,
                ,
                "0",
                ,
                ,
                ,
                [[, "(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], [, "(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , "7[06]\\d{4,10}", , , , "700123456"],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              RU: [, [, , "8\\d{13}|[347-9]\\d{9}", , , , , , , [10, 14], [7]], [
                ,
                ,
                "(?:3(?:0[12]|4[1-35-79]|5[1-3]|65|8[1-58]|9[0145])|4(?:01|1[1356]|2[13467]|7[1-5]|8[1-7]|9[1-689])|8(?:1[1-8]|2[01]|3[13-6]|4[0-8]|5[15]|6[1-35-79]|7[1-37-9]))\\d{7}",
                ,
                ,
                ,
                "3011234567",
                ,
                ,
                [10],
                [7]
              ], [, , "9\\d{9}", , , , "9123456789", , , [10]], [, , "8(?:0[04]|108\\d{3})\\d{7}", , , , "8001234567"], [, , "80[39]\\d{7}", , , , "8091234567", , , [10]], [, , , , , , , , , [-1]], [, , "808\\d{7}", , , , "8081234567", , , [10]], [, , , , , , , , , [-1]], "RU", 7, "810", "8", , , "8", , "8~10", , [[, "(\\d{3})(\\d{2})(\\d{2})", "$1-$2-$3", ["[0-79]"]], [
                ,
                "(\\d{4})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"],
                "8 ($1)",
                ,
                1
              ], [, "(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", , 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", , 1], [
                ,
                "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2-$3-$4",
                ["[349]|8(?:[02-7]|1[1-8])"],
                "8 ($1)",
                ,
                1
              ], [, "(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], [[, "(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", , 1], [
                ,
                "(\\d{5})(\\d)(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"],
                "8 ($1)",
                ,
                1
              ], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", , 1], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", , 1], [, "(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], [, , , , , , , , , [-1]], 1, "3[04-689]|[489]", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              RW: [, [, , "(?:06|[27]\\d\\d|[89]00)\\d{6}", , , , , , , [8, 9]], [, , "(?:06|2[23568]\\d)\\d{6}", , , , "250123456"], [, , "7[237-9]\\d{7}", , , , "720123456", , , [9]], [, , "800\\d{6}", , , , "800123456", , , [9]], [
                ,
                ,
                "900\\d{6}",
                ,
                ,
                ,
                "900123456",
                ,
                ,
                [9]
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "RW", 250, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              SA: [, [, , "92\\d{7}|(?:[15]|8\\d)\\d{8}", , , , , , , [9, 10], [7]], [, , "1(?:1\\d|2[24-8]|3[35-8]|4[3-68]|6[2-5]|7[235-7])\\d{6}", , , , "112345678", , , [9], [7]], [
                ,
                ,
                "579[01]\\d{5}|5(?:[013-689]\\d|7[0-8])\\d{6}",
                ,
                ,
                ,
                "512345678",
                ,
                ,
                [9]
              ], [, , "800\\d{7}", , , , "8001234567", , , [10]], [, , "925\\d{6}", , , , "925012345", , , [9]], [, , "920\\d{6}", , , , "920012345", , , [9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "SA", 966, "00", "0", , , "0", , , , [[, "(\\d{4})(\\d{5})", "$1 $2", ["9"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [
                ,
                ,
                "811\\d{7}",
                ,
                ,
                ,
                "8110123456",
                ,
                ,
                [10]
              ], , , [, , , , , , , , , [-1]]],
              SB: [
                ,
                [, , "(?:[1-6]|[7-9]\\d\\d)\\d{4}", , , , , , , [5, 7]],
                [, , "(?:1[4-79]|[23]\\d|4[0-2]|5[03]|6[0-37])\\d{3}", , , , "40123", , , [5]],
                [, , "48\\d{3}|(?:(?:7[1-9]|8[4-9])\\d|9(?:1[2-9]|2[013-9]|3[0-2]|[46]\\d|5[0-46-9]|7[0-689]|8[0-79]|9[0-8]))\\d{4}", , , , "7421234"],
                [, , "1[38]\\d{3}", , , , "18123", , , [5]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "5[12]\\d{3}", , , , "51123", , , [5]],
                "SB",
                677,
                "0[01]",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [[, "(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              SC: [, [, , "800\\d{4}|(?:[249]\\d|64)\\d{5}", , , , , , , [7]], [, , "4[2-46]\\d{5}", , , , "4217123"], [, , "2[125-8]\\d{5}", , , , "2510123"], [, , "800[08]\\d{3}", , , , "8000000"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "971\\d{4}|(?:64|95)\\d{5}", , , , "6412345"], "SC", 248, "010|0[0-2]", , , , , , "00", , [[, "(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              SD: [, [, , "[19]\\d{8}", , , , , , , [9]], [
                ,
                ,
                "1(?:5\\d|8[35-7])\\d{6}",
                ,
                ,
                ,
                "153123456"
              ], [, , "(?:1[0-2]|9[0-3569])\\d{7}", , , , "911231234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "SD", 249, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              SE: [, [, , "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", , , , , , , [6, 7, 8, 9, 10, 12]], [
                ,
                ,
                "(?:(?:[12][136]|3[356]|4[0246]|6[03]|8\\d)\\d|90[1-9])\\d{4,6}|(?:1(?:2[0-35]|4[0-4]|5[0-25-9]|7[13-6]|[89]\\d)|2(?:2[0-7]|4[0136-8]|5[0138]|7[018]|8[01]|9[0-57])|3(?:0[0-4]|1\\d|2[0-25]|4[056]|7[0-2]|8[0-3]|9[023])|4(?:1[013-8]|3[0135]|5[14-79]|7[0-246-9]|8[0156]|9[0-689])|5(?:0[0-6]|[15][0-5]|2[0-68]|3[0-4]|4\\d|6[03-5]|7[013]|8[0-79]|9[01])|6(?:1[1-3]|2[0-4]|4[02-57]|5[0-37]|6[0-3]|7[0-2]|8[0247]|9[0-356])|9(?:1[0-68]|2\\d|3[02-5]|4[0-3]|5[0-4]|[68][01]|7[0135-8]))\\d{5,6}",
                ,
                ,
                ,
                "8123456",
                ,
                ,
                [7, 8, 9]
              ], [, , "7[02369]\\d{7}", , , , "701234567", , , [9]], [, , "20\\d{4,7}", , , , "20123456", , , [6, 7, 8, 9]], [, , "649\\d{6}|99[1-59]\\d{4}(?:\\d{3})?|9(?:00|39|44)[1-8]\\d{3,6}", , , , "9001234567", , , [7, 8, 9, 10]], [, , "77[0-7]\\d{6}", , , , "771234567", , , [9]], [, , "75[1-8]\\d{6}", , , , "751234567", , , [9]], [, , , , , , , , , [-1]], "SE", 46, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1"], [, "(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1"], [
                ,
                "(\\d{2})(\\d{3})(\\d{2})",
                "$1-$2 $3",
                ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],
                "0$1"
              ], [, "(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1"], [, "(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1"], [, "(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1"], [, "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1"], [
                ,
                "(\\d)(\\d{3})(\\d{3})(\\d{2})",
                "$1-$2 $3 $4",
                ["8"],
                "0$1"
              ], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1"], [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1"]], [[, "(\\d{2})(\\d{2,3})(\\d{2})", "$1 $2 $3", ["20"]], [, "(\\d{3})(\\d{4})", "$1 $2", ["9(?:00|39|44|9)"]], [, "(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"]], [
                ,
                "(\\d)(\\d{2,3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["8"]
              ], [, "(\\d{3})(\\d{2,3})(\\d{2})", "$1 $2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]], [, "(\\d{3})(\\d{2,3})(\\d{3})", "$1 $2 $3", ["9(?:00|39|44)"]], [, "(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"]], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["10|7"]], [, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["8"]], [
                ,
                "(\\d{3})(\\d{2})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"]
              ], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["9"]], [, "(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]"]]], [, , "74[02-9]\\d{6}", , , , "740123456", , , [9]], , , [, , , , , , , , , [-1]], [, , "10[1-8]\\d{6}", , , , "102345678", , , [9]], , , [, , "(?:25[245]|67[3-68])\\d{9}", , , , "254123456789", , , [12]]],
              SG: [, [, , "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", , , , , , , [8, 10, 11]], [
                ,
                ,
                "662[0-24-9]\\d{4}|6(?:[0-578]\\d|6[013-57-9]|9[0-35-9])\\d{5}",
                ,
                ,
                ,
                "61234567",
                ,
                ,
                [8]
              ], [, , "8(?:08[013-9]|95[0-2])\\d{4}|(?:8(?:0[1-7]|[1-8]\\d|9[0-4])|9[0-8]\\d)\\d{5}", , , , "81234567", , , [8]], [, , "(?:18|8)00\\d{7}", , , , "18001234567", , , [10, 11]], [, , "1900\\d{7}", , , , "19001234567", , , [11]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "(?:3[12]\\d|666)\\d{5}", , , , "31234567", , , [8]], "SG", 65, "0[0-3]\\d", , , , , , , , [
                [, "(\\d{4,5})", "$1", ["1[013-9]|77", "1(?:[013-8]|9(?:0[1-9]|[1-9]))|77"]],
                [, "(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-8]|[1-9])"]],
                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]],
                [, "(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]],
                [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]
              ], [[, "(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-8]|[1-9])"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], [, "(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], [, "(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "7000\\d{7}", , , , "70001234567", , , [11]], , , [, , , , , , , , , [-1]]],
              SH: [, [, , "(?:[256]\\d|8)\\d{3}", , , , , , , [4, 5]], [, , "2(?:[0-57-9]\\d|6[4-9])\\d\\d", , , , "22158"], [
                ,
                ,
                "[56]\\d{4}",
                ,
                ,
                ,
                "51234",
                ,
                ,
                [5]
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "262\\d\\d", , , , "26212", , , [5]], "SH", 290, "00", , , , , , , , , , [, , , , , , , , , [-1]], 1, "[256]", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              SI: [
                ,
                [, , "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", , , , , , , [5, 6, 7, 8]],
                [, , "(?:[1-357][2-8]|4[24-8])\\d{6}", , , , "12345678", , , [8], [7]],
                [, , "65(?:[178]\\d|5[56]|6[01])\\d{4}|(?:[37][01]|4[0139]|51|6[489])\\d{6}", , , , "31234567", , , [8]],
                [, , "80\\d{4,6}", , , , "80123456", , , [6, 7, 8]],
                [, , "89[1-3]\\d{2,5}|90\\d{4,6}", , , , "90123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "(?:59\\d\\d|8(?:1(?:[67]\\d|8[0-589])|2(?:0\\d|2[0-37-9]|8[0-2489])|3[389]\\d))\\d{4}", , , , "59012345", , , [8]],
                "SI",
                386,
                "00|10(?:22|66|88|99)",
                "0",
                ,
                ,
                "0",
                ,
                "00",
                ,
                [[, "(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], [, "(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], [, "(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              SJ: [, [, , "0\\d{4}|(?:[489]\\d|79)\\d{6}", , , , , , , [5, 8]], [, , "79\\d{6}", , , , "79123456", , , [8]], [, , "(?:4[015-8]|9\\d)\\d{6}", , , , "41234567", , , [8]], [, , "80[01]\\d{5}", , , , "80012345", , , [8]], [, , "82[09]\\d{5}", , , , "82012345", , , [8]], [, , "810(?:0[0-6]|[2-8]\\d)\\d{3}", , , , "81021234", , , [8]], [, , "880\\d{5}", , , , "88012345", , , [8]], [, , "85[0-5]\\d{5}", , , , "85012345", , , [8]], "SJ", 47, "00", , , , , , , , , , [, , , , , , , , , [-1]], , "79", [, , , , , , , , , [-1]], [, , "(?:0[2-9]|81(?:0(?:0[7-9]|1\\d)|5\\d\\d))\\d{3}", , , , "02000"], , , [
                ,
                ,
                "81[23]\\d{5}",
                ,
                ,
                ,
                "81212345",
                ,
                ,
                [8]
              ]],
              SK: [
                ,
                [, , "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", , , , , , , [6, 7, 9]],
                [, , "(?:2(?:16|[2-9]\\d{3})|(?:(?:[3-5][1-8]\\d|819)\\d|601[1-5])\\d)\\d{4}|(?:2|[3-5][1-8])1[67]\\d{3}|[3-5][1-8]16\\d\\d", , , , "221234567"],
                [, , "909[1-9]\\d{5}|9(?:0[1-8]|1[0-24-9]|4[03-57-9]|5\\d)\\d{6}", , , , "912123456", , , [9]],
                [, , "800\\d{6}", , , , "800123456", , , [9]],
                [, , "9(?:00|[78]\\d)\\d{6}", , , , "900123456", , , [9]],
                [, , "8[5-9]\\d{7}", , , , "850123456", , , [9]],
                [, , , , , , , , , [-1]],
                [, , "6(?:02|5[0-4]|9[0-6])\\d{6}", , , , "690123456", , , [9]],
                "SK",
                421,
                "00",
                "0",
                ,
                ,
                "0",
                ,
                ,
                ,
                [[, "(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], [, "(\\d{4})(\\d{3})", "$1 $2", ["909", "9090"], "0$1"], [, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]],
                [[, "(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], [, "(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", [
                  "[3-5][1-8]1",
                  "[3-5][1-8]1[67]"
                ], "0$1"], [, "(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]],
                [, , "9090\\d{3}", , , , "9090123", , , [7]],
                ,
                ,
                [, , "9090\\d{3}|(?:602|8(?:00|[5-9]\\d)|9(?:00|[78]\\d))\\d{6}", , , , , , , [7, 9]],
                [, , "96\\d{7}", , , , "961234567", , , [9]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              SL: [, [, , "(?:[237-9]\\d|66)\\d{6}", , , , , , , [8], [6]], [, , "22[2-4][2-9]\\d{4}", , , , "22221234", , , , [6]], [
                ,
                ,
                "(?:25|3[0-5]|66|7[2-9]|8[08]|9[09])\\d{6}",
                ,
                ,
                ,
                "25123456"
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "SL", 232, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              SM: [, [, , "(?:0549|[5-7]\\d)\\d{6}", , , , , , , [8, 10], [6]], [, , "0549(?:8[0157-9]|9\\d)\\d{4}", , , , "0549886377", , , [10], [6]], [, , "6[16]\\d{6}", , , , "66661212", , , [8]], [, , , , , , , , , [-1]], [, , "7[178]\\d{6}", , , , "71123456", , , [8]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [
                ,
                ,
                "5[158]\\d{6}",
                ,
                ,
                ,
                "58001110",
                ,
                ,
                [8]
              ], "SM", 378, "00", , , , "([89]\\d{5})$", "0549$1", , , [[, "(\\d{6})", "$1", ["[89]"]], [, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], [, "(\\d{4})(\\d{6})", "$1 $2", ["0"]]], [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], [, "(\\d{4})(\\d{6})", "$1 $2", ["0"]]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              SN: [, [, , "(?:[378]\\d|93)\\d{7}", , , , , , , [9]], [, , "3(?:0(?:1[0-2]|80)|282|3(?:8[1-9]|9[3-9])|611)\\d{5}", , , , "301012345"], [
                ,
                ,
                "7(?:(?:[06-8]\\d|21|90)\\d|5(?:01|[19]0|25|[38]3|[4-7]\\d))\\d{5}",
                ,
                ,
                ,
                "701234567"
              ], [, , "800\\d{6}", , , , "800123456"], [, , "88[4689]\\d{6}", , , , "884123456"], [, , "81[02468]\\d{6}", , , , "810123456"], [, , , , , , , , , [-1]], [, , "(?:3(?:392|9[01]\\d)\\d|93(?:3[13]0|929))\\d{4}", , , , "933301234"], "SN", 221, "00", , , , , , , , [[, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              SO: [, [, , "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", , , , , , , [6, 7, 8, 9]], [
                ,
                ,
                "(?:1\\d|2[0-79]|3[0-46-8]|4[0-7]|5[57-9])\\d{5}|(?:[134]\\d|8[125])\\d{4}",
                ,
                ,
                ,
                "4012345",
                ,
                ,
                [6, 7]
              ], [, , "(?:(?:15|(?:3[59]|4[89]|6\\d|7[79]|8[08])\\d|9(?:0\\d|[2-9]))\\d|2(?:4\\d|8))\\d{5}|(?:[67]\\d\\d|904)\\d{5}", , , , "71123456", , , [7, 8, 9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "SO", 252, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], [, "(\\d{6})", "$1", ["[134]"]], [, "(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], [
                ,
                "(\\d)(\\d{7})",
                "$1 $2",
                ["(?:2|90)4|[67]"]
              ], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], [, "(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|77|9[2-9]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              SR: [, [, , "(?:[2-5]|68|[78]\\d)\\d{5}", , , , , , , [6, 7]], [, , "(?:2[1-3]|3[0-7]|(?:4|68)\\d|5[2-58])\\d{4}", , , , "211234"], [, , "(?:7[124-7]|8[124-9])\\d{5}", , , , "7412345", , , [7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "56\\d{4}", , , , "561234", , , [6]], "SR", 597, "00", , , , , , , , [[
                ,
                "(\\d{2})(\\d{2})(\\d{2})",
                "$1-$2-$3",
                ["56"]
              ], [, "(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], [, "(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              SS: [, [, , "[19]\\d{8}", , , , , , , [9]], [, , "1[89]\\d{7}", , , , "181234567"], [, , "(?:12|9[1257-9])\\d{7}", , , , "977123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "SS", 211, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ]],
              ST: [, [, , "(?:22|9\\d)\\d{5}", , , , , , , [7]], [, , "22\\d{5}", , , , "2221234"], [, , "900[5-9]\\d{3}|9(?:0[1-9]|[89]\\d)\\d{4}", , , , "9812345"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "ST", 239, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              SV: [, [, , "[267]\\d{7}|[89]00\\d{4}(?:\\d{4})?", , , , , , , [7, 8, 11]], [
                ,
                ,
                "2(?:79(?:0[0347-9]|[1-9]\\d)|89(?:0[024589]|[1-9]\\d))\\d{3}|2(?:[1-69]\\d|[78][0-8])\\d{5}",
                ,
                ,
                ,
                "21234567",
                ,
                ,
                [8]
              ], [, , "[67]\\d{7}", , , , "70123456", , , [8]], [, , "800\\d{4}(?:\\d{4})?", , , , "8001234", , , [7, 11]], [, , "900\\d{4}(?:\\d{4})?", , , , "9001234", , , [7, 11]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "SV", 503, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              SX: [
                ,
                [, , "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]],
                [
                  ,
                  ,
                  "7215(?:4[2-8]|8[239]|9[056])\\d{4}",
                  ,
                  ,
                  ,
                  "7215425678",
                  ,
                  ,
                  ,
                  [7]
                ],
                [, , "7215(?:1[02]|2\\d|5[034679]|8[014-8])\\d{4}", , , , "7215205678", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002123456"],
                [, , "900[2-9]\\d{6}", , , , "9002123456"],
                [, , , , , , , , , [-1]],
                [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"],
                [, , , , , , , , , [-1]],
                "SX",
                1,
                "011",
                "1",
                ,
                ,
                "(5\\d{6})$|1",
                "721$1",
                ,
                ,
                ,
                ,
                [, , , , , , , , , [-1]],
                ,
                "721",
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              SY: [, [, , "[1-39]\\d{8}|[1-5]\\d{7}", , , , , , , [8, 9], [6, 7]], [, , "21\\d{6,7}|(?:1(?:[14]\\d|[2356])|2[235]|3(?:[13]\\d|4)|4[134]|5[1-3])\\d{6}", , , , "112345678", , , , [6, 7]], [, , "9[1-689]\\d{7}", , , , "944567890", , , [9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "SY", 963, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", , 1], [
                ,
                "(\\d{3})(\\d{3})(\\d{3})",
                "$1 $2 $3",
                ["9"],
                "0$1",
                ,
                1
              ]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              SZ: [, [, , "0800\\d{4}|(?:[237]\\d|900)\\d{6}", , , , , , , [8, 9]], [, , "[23][2-5]\\d{6}", , , , "22171234", , , [8]], [, , "7[6-9]\\d{6}", , , , "76123456", , , [8]], [, , "0800\\d{4}", , , , "08001234", , , [8]], [, , "900\\d{6}", , , , "900012345", , , [9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "70\\d{6}", , , , "70012345", , , [8]], "SZ", 268, "00", , , , , , , , [[, "(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], [, "(\\d{5})(\\d{4})", "$1 $2", ["9"]]], , [, , , , , , , , , [-1]], , , [
                ,
                ,
                "0800\\d{4}",
                ,
                ,
                ,
                ,
                ,
                ,
                [8]
              ], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              TA: [, [, , "8\\d{3}", , , , , , , [4]], [, , "8\\d{3}", , , , "8999"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "TA", 290, "00", , , , , , , , , , [, , , , , , , , , [-1]], , "8", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              TC: [, [, , "(?:[58]\\d\\d|649|900)\\d{7}", , , , , , , [10], [7]], [, , "649(?:266|712|9(?:4\\d|50))\\d{4}", , , , "6497121234", , , , [7]], [, , "649(?:2(?:3[129]|4[1-79])|3\\d\\d|4[34][1-3])\\d{4}", , , , "6492311234", , , , [7]], [
                ,
                ,
                "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",
                ,
                ,
                ,
                "8002345678"
              ], [, , "900[2-9]\\d{6}", , , , "9002345678"], [, , , , , , , , , [-1]], [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"], [, , "649(?:71[01]|966)\\d{4}", , , , "6497101234", , , , [7]], "TC", 1, "011", "1", , , "([2-479]\\d{6})$|1", "649$1", , , , , [, , , , , , , , , [-1]], , "649", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              TD: [, [, , "(?:22|[69]\\d|77)\\d{6}", , , , , , , [8]], [, , "22(?:[37-9]0|5[0-5]|6[89])\\d{4}", , , , "22501234"], [, , "(?:6[0235689]|77|9\\d)\\d{6}", , , , "63012345"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "TD", 235, "00|16", , , , , , "00", , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              TG: [, [, , "[279]\\d{7}", , , , , , , [8]], [, , "2(?:2[2-7]|3[23]|4[45]|55|6[67]|77)\\d{5}", , , , "22212345"], [
                ,
                ,
                "(?:7[019]|9[0-36-9])\\d{6}",
                ,
                ,
                ,
                "90112345"
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "TG", 228, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              TH: [, [, , "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", , , , , , , [8, 9, 10, 13]], [, , "(?:1[0689]|2\\d|3[2-9]|4[2-5]|5[2-6]|7[3-7])\\d{6}", , , , "21234567", , , [8]], [, , "671[0-8]\\d{5}|(?:14|6[1-6]|[89]\\d)\\d{7}", , , , "812345678", , , [9]], [
                ,
                ,
                "(?:001800\\d|1800)\\d{6}",
                ,
                ,
                ,
                "1800123456",
                ,
                ,
                [10, 13]
              ], [, , "1900\\d{6}", , , , "1900123456", , , [10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "6[08]\\d{7}", , , , "601234567", , , [9]], "TH", 66, "00[1-9]", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], [, "(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              TJ: [
                ,
                [, , "[0-57-9]\\d{8}", , , , , , , [9], [3, 5, 6, 7]],
                [
                  ,
                  ,
                  "(?:3(?:1[3-5]|2[245]|3[12]|4[24-7]|5[25]|72)|4(?:46|74|87))\\d{6}",
                  ,
                  ,
                  ,
                  "372123456",
                  ,
                  ,
                  ,
                  [3, 5, 6, 7]
                ],
                [, , "(?:4(?:1[18]|4[02-479])|81[1-9])\\d{6}|(?:0[0-57-9]|1[017]|2[02]|[34]0|5[05]|7[0178]|8[078]|9\\d)\\d{7}", , , , "917123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                "TJ",
                992,
                "810",
                ,
                ,
                ,
                ,
                ,
                "8~10",
                ,
                [[, "(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], [, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], [, "(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              TK: [, [, , "[2-47]\\d{3,6}", , , , , , , [4, 5, 6, 7]], [, , "(?:2[2-4]|[34]\\d)\\d{2,5}", , , , "3101"], [, , "7[2-4]\\d{2,5}", , , , "7290"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "TK", 690, "00", , , , , , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              TL: [, [, , "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", , , , , , , [7, 8]], [, , "(?:2[1-5]|3[1-9]|4[1-4])\\d{5}", , , , "2112345", , , [7]], [, , "7[2-8]\\d{6}", , , , "77212345", , , [8]], [
                ,
                ,
                "80\\d{5}",
                ,
                ,
                ,
                "8012345",
                ,
                ,
                [7]
              ], [, , "90\\d{5}", , , , "9012345", , , [7]], [, , , , , , , , , [-1]], [, , "70\\d{5}", , , , "7012345", , , [7]], [, , , , , , , , , [-1]], "TL", 670, "00", , , , , , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], [, "(\\d{4})(\\d{4})", "$1 $2", ["7"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              TM: [
                ,
                [, , "[1-6]\\d{7}", , , , , , , [8]],
                [, , "(?:1(?:2\\d|3[1-9])|2(?:22|4[0-35-8])|3(?:22|4[03-9])|4(?:22|3[128]|4\\d|6[15])|5(?:22|5[7-9]|6[014-689]))\\d{5}", , , , "12345678"],
                [, , "6\\d{7}", , , , "66123456"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                "TM",
                993,
                "810",
                "8",
                ,
                ,
                "8",
                ,
                "8~10",
                ,
                [[, "(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], [, "(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], [, "(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              TN: [, [, , "[2-57-9]\\d{7}", , , , , , , [8]], [, , "81200\\d{3}|(?:3[0-2]|7\\d)\\d{6}", , , , "30010123"], [
                ,
                ,
                "3(?:001|[12]40)\\d{4}|(?:(?:[259]\\d|4[0-8])\\d|3(?:1[1-35]|6[0-4]|91))\\d{5}",
                ,
                ,
                ,
                "20123456"
              ], [, , "8010\\d{4}", , , , "80101234"], [, , "88\\d{6}", , , , "88123456"], [, , "8[12]10\\d{4}", , , , "81101234"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "TN", 216, "00", , , , , , , , [[, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              TO: [, [, , "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", , , , , , , [5, 7]], [, , "(?:2\\d|3[0-8]|4[0-4]|50|6[09]|7[0-24-69]|8[05])\\d{3}", , , , "20123", , , [5]], [
                ,
                ,
                "(?:55[4-6]|6(?:[09]\\d|3[02]|8[15-9])|(?:7\\d|8[46-9])\\d|999)\\d{4}",
                ,
                ,
                ,
                "7715123",
                ,
                ,
                [7]
              ], [, , "0800\\d{3}", , , , "0800222", , , [7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "55[0-37-9]\\d{4}", , , , "5510123", , , [7]], "TO", 676, "00", , , , , , , , [[, "(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], [, "(\\d{4})(\\d{3})", "$1 $2", ["0"]], [, "(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              TR: [, [, , "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", , , , , , , [7, 10, 12, 13]], [
                ,
                ,
                "(?:2(?:[13][26]|[28][2468]|[45][268]|[67][246])|3(?:[13][28]|[24-6][2468]|[78][02468]|92)|4(?:[16][246]|[23578][2468]|4[26]))\\d{7}",
                ,
                ,
                ,
                "2123456789",
                ,
                ,
                [10]
              ], [, , "561(?:011|61\\d)\\d{4}|5(?:0[15-7]|1[06]|24|[34]\\d|5[1-59]|9[46])\\d{7}", , , , "5012345678", , , [10]], [, , "8(?:00\\d{7}(?:\\d{2,3})?|11\\d{7})", , , , "8001234567", , , [10, 12, 13]], [, , "(?:8[89]8|900)\\d{7}", , , , "9001234567", , , [10]], [, , , , , , , , , [-1]], [, , "592(?:21[12]|461)\\d{4}", , , , "5922121234", , , [10]], [, , "850\\d{7}", , , , "8500123456", , , [10]], "TR", 90, "00", "0", , , "0", , , , [
                [, "(\\d{3})(\\d)(\\d{3})", "$1 $2 $3", ["444"], , , 1],
                [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", , 1],
                [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", , 1],
                [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", , 1],
                [, "(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", , 1]
              ], [[, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", , 1], [, "(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", , 1], [
                ,
                "(\\d{3})(\\d{3})(\\d{2})(\\d{2})",
                "$1 $2 $3 $4",
                ["[24][1-8]|3[1-9]"],
                "(0$1)",
                ,
                1
              ], [, "(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", , 1]], [, , "512\\d{7}", , , , "5123456789", , , [10]], , , [, , "(?:444|811\\d{3})\\d{4}", , , , , , , [7, 10]], [, , "444\\d{4}", , , , "4441444", , , [7]], , , [, , , , , , , , , [-1]]],
              TT: [, [, , "(?:[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]], [, , "868(?:2(?:01|1[5-9]|[23]\\d|4[0-2])|6(?:0[7-9]|1[02-8]|2[1-9]|[3-69]\\d|7[0-79])|82[124])\\d{4}", , , , "8682211234", , , , [7]], [
                ,
                ,
                "868(?:(?:2[5-9]|3\\d)\\d|4(?:3[0-6]|[6-9]\\d)|6(?:20|78|8\\d)|7(?:0[1-9]|1[02-9]|[2-9]\\d))\\d{4}",
                ,
                ,
                ,
                "8682911234",
                ,
                ,
                ,
                [7]
              ], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"], [, , "900[2-9]\\d{6}", , , , "9002345678"], [, , , , , , , , , [-1]], [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"], [, , , , , , , , , [-1]], "TT", 1, "011", "1", , , "([2-46-8]\\d{6})$|1", "868$1", , , , , [, , , , , , , , , [-1]], , "868", [, , , , , , , , , [-1]], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], , , [, , "868619\\d{4}", , , , "8686191234", , , , [7]]],
              TV: [, [, , "(?:2|7\\d\\d|90)\\d{4}", , , , , , , [5, 6, 7]], [, , "2[02-9]\\d{3}", , , , "20123", , , [5]], [, , "(?:7[01]\\d|90)\\d{4}", , , , "901234", , , [6, 7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "TV", 688, "00", , , , , , , , [[, "(\\d{2})(\\d{3})", "$1 $2", ["2"]], [, "(\\d{2})(\\d{4})", "$1 $2", ["90"]], [, "(\\d{2})(\\d{5})", "$1 $2", ["7"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              TW: [, [
                ,
                ,
                "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",
                ,
                ,
                ,
                ,
                ,
                ,
                [7, 8, 9, 10, 11]
              ], [
                ,
                ,
                "(?:2[2-8]\\d|370|55[01]|7[1-9])\\d{6}|4(?:(?:0(?:0[1-9]|[2-48]\\d)|1[023]\\d)\\d{4,5}|(?:[239]\\d\\d|4(?:0[56]|12|49))\\d{5})|6(?:[01]\\d{7}|4(?:0[56]|12|24|4[09])\\d{4,5})|8(?:(?:2(?:3\\d|4[0-269]|[578]0|66)|36[24-9]|90\\d\\d)\\d{4}|4(?:0[56]|12|24|4[09])\\d{4,5})|(?:2(?:2(?:0\\d\\d|4(?:0[68]|[249]0|3[0-467]|5[0-25-9]|6[0235689]))|(?:3(?:[09]\\d|1[0-4])|(?:4\\d|5[0-49]|6[0-29]|7[0-5])\\d)\\d)|(?:(?:3[2-9]|5[2-8]|6[0-35-79]|8[7-9])\\d\\d|4(?:2(?:[089]\\d|7[1-9])|(?:3[0-4]|[78]\\d|9[01])\\d))\\d)\\d{3}",
                ,
                ,
                ,
                "221234567",
                ,
                ,
                [8, 9]
              ], [, , "(?:40001[0-2]|9[0-8]\\d{4})\\d{3}", , , , "912345678", , , [9]], [, , "80[0-79]\\d{6}|800\\d{5}", , , , "800123456", , , [8, 9]], [, , "20(?:[013-9]\\d\\d|2)\\d{4}", , , , "203123456", , , [7, 9]], [, , , , , , , , , [-1]], [, , "99\\d{7}", , , , "990123456", , , [9]], [, , "7010(?:[0-2679]\\d|3[0-7]|8[0-5])\\d{5}|70\\d{8}", , , , "7012345678", , , [10, 11]], "TW", 886, "0(?:0[25-79]|19)", "0", "#", , "0", , , , [[, "(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], [
                ,
                "(\\d)(\\d{3,4})(\\d{4})",
                "$1 $2 $3",
                ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"],
                "0$1"
              ], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], [, "(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "50[0-46-9]\\d{6}", , , , "500123456", , , [9]], , , [, , , , , , , , , [-1]]],
              TZ: [, [, , "(?:[25-8]\\d|41|90)\\d{7}", , , , , , , [9]], [, , "2[2-8]\\d{7}", , , , "222345678"], [, , "77[2-9]\\d{6}|(?:6[125-9]|7[13-689])\\d{7}", , , , "621234567"], [, , "80[08]\\d{6}", , , , "800123456"], [
                ,
                ,
                "90\\d{7}",
                ,
                ,
                ,
                "900123456"
              ], [, , "8(?:40|6[01])\\d{6}", , , , "840123456"], [, , , , , , , , , [-1]], [, , "41\\d{7}", , , , "412345678"], "TZ", 255, "00[056]", "0", , , "0", , , , [[, "(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["5"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , "(?:8(?:[04]0|6[01])|90\\d)\\d{6}"], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              UA: [, [, , "[89]\\d{9}|[3-9]\\d{8}", , , , , , , [9, 10], [5, 6, 7]], [
                ,
                ,
                "(?:3[1-8]|4[13-8]|5[1-7]|6[12459])\\d{7}",
                ,
                ,
                ,
                "311234567",
                ,
                ,
                [9],
                [5, 6, 7]
              ], [, , "(?:39|50|6[36-8]|7[1-3]|9[1-9])\\d{7}", , , , "501234567", , , [9]], [, , "800[1-8]\\d{5,6}", , , , "800123456"], [, , "900[239]\\d{5,6}", , , , "900212345"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "89[1-579]\\d{6}", , , , "891234567", , , [9]], "UA", 380, "00", "0", , , "0", , "0~0", , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], [
                ,
                "(\\d{4})(\\d{5})",
                "$1 $2",
                ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"],
                "0$1"
              ], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              UG: [, [, , "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", , , , , , , [9], [5, 6, 7]], [
                ,
                ,
                "20(?:(?:240|30[67])\\d|6(?:00[0-2]|30[0-4]))\\d{3}|(?:20(?:[017]\\d|2[5-9]|32|5[0-4]|6[15-9])|[34]\\d{3})\\d{5}",
                ,
                ,
                ,
                "312345678",
                ,
                ,
                ,
                [5, 6, 7]
              ], [, , "726[01]\\d{5}|7(?:[015-8]\\d|20|36|4[0-4]|9[89])\\d{6}", , , , "712345678"], [, , "800[1-3]\\d{5}", , , , "800123456"], [, , "90[1-3]\\d{6}", , , , "901123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "UG", 256, "00[057]", "0", , , "0", , , , [[, "(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], [, "(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              US: [, [
                ,
                ,
                "[2-9]\\d{9}|3\\d{6}",
                ,
                ,
                ,
                ,
                ,
                ,
                [10],
                [7]
              ], [
                ,
                ,
                "(?:5056(?:[0-35-9]\\d|4[468])|73020\\d)\\d{4}|(?:472[24]|505[2-57-9]|983[289])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013569]|3[0-24679]|4[167]|5[0-2]|6[0149]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",
                ,
                ,
                ,
                "2015550123",
                ,
                ,
                ,
                [7]
              ], [
                ,
                ,
                "(?:5056(?:[0-35-9]\\d|4[468])|73020\\d)\\d{4}|(?:472[24]|505[2-57-9]|983[289])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013569]|3[0-24679]|4[167]|5[0-2]|6[0149]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|[34][016]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-7]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}",
                ,
                ,
                ,
                "2015550123",
                ,
                ,
                ,
                [7]
              ], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"], [, , "900[2-9]\\d{6}", , , , "9002345678"], [, , , , , , , , , [-1]], [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"], [, , , , , , , , , [-1]], "US", 1, "011", "1", , , "1", , , 1, [[, "(\\d{3})(\\d{4})", "$1-$2", ["310"], , , 1], [
                ,
                "(\\d{3})(\\d{4})",
                "$1-$2",
                ["[24-9]|3(?:[02-9]|1[1-9])"]
              ], [, "(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], , , 1]], [[, "(\\d{3})(\\d{4})", "$1-$2", ["310"], , , 1], [, "(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-9]"]]], [, , , , , , , , , [-1]], 1, , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              UY: [, [, , "0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", , , , , , , [6, 7, 8, 9, 10, 11, 12, 13]], [, , "(?:1(?:770|9(?:20|87))|(?:2\\d|4[2-7])\\d\\d)\\d{4}", , , , "21231234", , , [8], [7]], [, , "9[1-9]\\d{6}", , , , "94231234", , , [8]], [
                ,
                ,
                "0004\\d{2,9}|(?:405|80[05])\\d{4}",
                ,
                ,
                ,
                "8001234"
              ], [, , "90[0-8]\\d{4}", , , , "9001234", , , [7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "UY", 598, "0(?:0|1[3-9]\\d)", "0", " int. ", , "0", , "00", , [[, "(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], [, "(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], [, "(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], [, "(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], [, "(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ]],
              UZ: [, [, , "(?:20|33|[5-79]\\d|88)\\d{7}", , , , , , , [9]], [, , "(?:55\\d\\d|6(?:1(?:22|3[124]|4[1-4]|5[1-3578]|64)|2(?:22|3[0-57-9]|41)|5(?:22|3[3-7]|5[024-8])|6\\d\\d|7(?:[23]\\d|7[69])|9(?:22|4[1-8]|6[135]))|7(?:0(?:5[4-9]|6[0146]|7[124-6]|9[135-8])|(?:1[12]|[68]\\d)\\d|2(?:22|3[13-57-9]|4[1-3579]|5[14])|3(?:2\\d|3[1578]|4[1-35-7]|5[1-57]|61)|4(?:2\\d|3[1-579]|7[1-79])|5(?:22|5[1-9]|6[1457])|9(?:22|5[1-9])))\\d{5}", , , , "669050123"], [
                ,
                ,
                "(?:(?:[25]0|33|88|9[0-57-9])\\d{3}|6(?:1(?:2(?:2[01]|98)|35[0-4]|50\\d|61[23]|7(?:[01][017]|4\\d|55|9[5-9]))|2(?:(?:11|7\\d)\\d|2(?:[12]1|9[01379])|5(?:[126]\\d|3[0-4]))|5(?:19[01]|2(?:27|9[26])|(?:30|59|7\\d)\\d)|6(?:2(?:1[5-9]|2[0367]|38|41|52|60)|(?:3[79]|9[0-3])\\d|4(?:56|83)|7(?:[07]\\d|1[017]|3[07]|4[047]|5[057]|67|8[0178]|9[79]))|7(?:2(?:24|3[237]|4[5-9]|7[15-8])|5(?:7[12]|8[0589])|7(?:0\\d|[39][07])|9(?:0\\d|7[079]))|9(?:2(?:1[1267]|3[01]|5\\d|7[0-4])|(?:5[67]|7\\d)\\d|6(?:2[0-26]|8\\d)))|7(?:[07]\\d{3}|1(?:13[01]|6(?:0[47]|1[67]|66)|71[3-69]|98\\d)|2(?:2(?:2[79]|95)|3(?:2[5-9]|6[0-6])|57\\d|7(?:0\\d|1[17]|2[27]|3[37]|44|5[057]|66|88))|3(?:2(?:1[0-6]|21|3[469]|7[159])|(?:33|9[4-6])\\d|5(?:0[0-4]|5[579]|9\\d)|7(?:[0-3579]\\d|4[0467]|6[67]|8[078]))|4(?:2(?:29|5[0257]|6[0-7]|7[1-57])|5(?:1[0-4]|8\\d|9[5-9])|7(?:0\\d|1[024589]|2[0-27]|3[0137]|[46][07]|5[01]|7[5-9]|9[079])|9(?:7[015-9]|[89]\\d))|5(?:112|2(?:0\\d|2[29]|[49]4)|3[1568]\\d|52[6-9]|7(?:0[01578]|1[017]|[23]7|4[047]|[5-7]\\d|8[78]|9[079]))|9(?:22[128]|3(?:2[0-4]|7\\d)|57[02569]|7(?:2[05-9]|3[37]|4\\d|60|7[2579]|87|9[07]))))\\d{4}",
                ,
                ,
                ,
                "912345678"
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "UZ", 998, "810", "8", , , "8", , "8~10", , [[, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"], "8 $1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              VA: [, [, , "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", , , , , , , [6, 7, 8, 9, 10, 11, 12]], [, , "06698\\d{1,6}", , , , "0669812345", , , [6, 7, 8, 9, 10, 11]], [, , "3[1-9]\\d{8}|3[2-9]\\d{7}", , , , "3123456789", , , [9, 10]], [
                ,
                ,
                "80(?:0\\d{3}|3)\\d{3}",
                ,
                ,
                ,
                "800123456",
                ,
                ,
                [6, 9]
              ], [, , "(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", , , , "899123456", , , [6, 8, 9, 10]], [, , "84(?:[08]\\d{3}|[17])\\d{3}", , , , "848123456", , , [6, 9]], [, , "1(?:78\\d|99)\\d{6}", , , , "1781234567", , , [9, 10]], [, , "55\\d{8}", , , , "5512345678", , , [10]], "VA", 39, "00", , , , , , , , , , [, , , , , , , , , [-1]], , "06698", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , "3[2-8]\\d{9,10}", , , , "33101234501", , , [11, 12]]],
              VC: [
                ,
                [, , "(?:[58]\\d\\d|784|900)\\d{7}", , , , , , , [10], [7]],
                [, , "784(?:266|3(?:6[6-9]|7\\d|8[0-6])|4(?:38|5[0-36-8]|8[0-8])|5(?:55|7[0-2]|93)|638|784)\\d{4}", , , , "7842661234", , , , [7]],
                [, , "784(?:4(?:3[0-5]|5[45]|89|9[0-8])|5(?:2[6-9]|3[0-4])|720)\\d{4}", , , , "7844301234", , , , [7]],
                [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"],
                [, , "900[2-9]\\d{6}", , , , "9002345678"],
                [, , , , , , , , , [-1]],
                [
                  ,
                  ,
                  "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
                  ,
                  ,
                  ,
                  "5002345678"
                ],
                [, , "78451[0-2]\\d{4}", , , , "7845101234", , , , [7]],
                "VC",
                1,
                "011",
                "1",
                ,
                ,
                "([2-7]\\d{6})$|1",
                "784$1",
                ,
                ,
                ,
                ,
                [, , , , , , , , , [-1]],
                ,
                "784",
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              VE: [
                ,
                [, , "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", , , , , , , [10], [7]],
                [, , "(?:2(?:12|3[457-9]|[467]\\d|[58][1-9]|9[1-6])|[4-6]00)\\d{7}", , , , "2121234567", , , , [7]],
                [, , "4(?:1[24-8]|2[46])\\d{7}", , , , "4121234567"],
                [, , "800\\d{7}", , , , "8001234567"],
                [, , "90[01]\\d{7}", , , , "9001234567"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                "VE",
                58,
                "00",
                "0",
                ,
                ,
                "0",
                ,
                ,
                ,
                [[, "(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1", "$CC $1"]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , "501\\d{7}", , , , "5010123456", , , , [7]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              VG: [, [, , "(?:284|[58]\\d\\d|900)\\d{7}", , , , , , , [10], [7]], [, , "284(?:229|4(?:22|9[45])|774|8(?:52|6[459]))\\d{4}", , , , "2842291234", , , , [7]], [, , "284(?:245|3(?:0[0-3]|4[0-7]|68|9[34])|4(?:4[0-6]|68|9[69])|5(?:4[0-7]|68|9[69]))\\d{4}", , , , "2843001234", , , , [7]], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"], [
                ,
                ,
                "900[2-9]\\d{6}",
                ,
                ,
                ,
                "9002345678"
              ], [, , , , , , , , , [-1]], [, , "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}", , , , "5002345678"], [, , , , , , , , , [-1]], "VG", 1, "011", "1", , , "([2-578]\\d{6})$|1", "284$1", , , , , [, , , , , , , , , [-1]], , "284", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              VI: [, [, , "[58]\\d{9}|(?:34|90)0\\d{7}", , , , , , , [10], [7]], [
                ,
                ,
                "340(?:2(?:0[0-368]|2[06-8]|4[49]|77)|3(?:32|44)|4(?:2[23]|44|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|2[57]|7\\d)|884|998)\\d{4}",
                ,
                ,
                ,
                "3406421234",
                ,
                ,
                ,
                [7]
              ], [, , "340(?:2(?:0[0-368]|2[06-8]|4[49]|77)|3(?:32|44)|4(?:2[23]|44|7[34]|89)|5(?:1[34]|55)|6(?:2[56]|4[23]|77|9[023])|7(?:1[2-57-9]|2[57]|7\\d)|884|998)\\d{4}", , , , "3406421234", , , , [7]], [, , "8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", , , , "8002345678"], [, , "900[2-9]\\d{6}", , , , "9002345678"], [, , , , , , , , , [-1]], [
                ,
                ,
                "52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}",
                ,
                ,
                ,
                "5002345678"
              ], [, , , , , , , , , [-1]], "VI", 1, "011", "1", , , "([2-9]\\d{6})$|1", "340$1", , 1, , , [, , , , , , , , , [-1]], , "340", [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              VN: [, [, , "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", , , , , , , [7, 8, 9, 10]], [, , "2(?:0[3-9]|1[0-689]|2[0-25-9]|[38][2-9]|4[2-8]|5[124-9]|6[0-39]|7[0-7]|9[0-4679])\\d{7}", , , , "2101234567", , , [10]], [, , "(?:5(?:2[238]|59)|89[6-9]|99[013-9])\\d{6}|(?:3\\d|5[1689]|7[06-9]|8[1-8]|9[0-8])\\d{7}", , , , "912345678", , , [9]], [
                ,
                ,
                "1800\\d{4,6}|12(?:0[13]|28)\\d{4}",
                ,
                ,
                ,
                "1800123456",
                ,
                ,
                [8, 9, 10]
              ], [, , "1900\\d{4,6}", , , , "1900123456", , , [8, 9, 10]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "672\\d{6}", , , , "672012345", , , [9]], "VN", 84, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{4})", "$1 $2", ["[17]99"], "0$1", , 1], [, "(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", , 1], [, "(\\d{3})(\\d{4,5})", "$1 $2", ["69"], "0$1", , 1], [, "(\\d{4})(\\d{4,6})", "$1 $2", ["1"], , , 1], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", , 1], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", , 1], [
                ,
                "(\\d{2})(\\d{4})(\\d{4})",
                "$1 $2 $3",
                ["2[48]"],
                "0$1",
                ,
                1
              ], [, "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", , 1]], [[, "(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", , 1], [, "(\\d{4})(\\d{4,6})", "$1 $2", ["1"], , , 1], [, "(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", , 1], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", , 1], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", , 1], [, "(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", , 1]], [, , , , , , , , , [-1]], , , [, , "[17]99\\d{4}|69\\d{5,6}", , , , , , , [7, 8]], [
                ,
                ,
                "(?:[17]99|80\\d)\\d{4}|69\\d{5,6}",
                ,
                ,
                ,
                "1992000",
                ,
                ,
                [7, 8]
              ], , , [, , , , , , , , , [-1]]],
              VU: [
                ,
                [, , "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", , , , , , , [5, 7]],
                [, , "(?:38[0-8]|48[4-9])\\d\\d|(?:2[02-9]|3[4-7]|88)\\d{3}", , , , "22123", , , [5]],
                [, , "(?:[58]\\d|7[013-7])\\d{5}", , , , "5912345", , , [7]],
                [, , "81[18]\\d\\d", , , , "81123", , , [5]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "9(?:0[1-9]|1[01])\\d{4}", , , , "9010123", , , [7]],
                "VU",
                678,
                "00",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [[, "(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , "(?:3[03]|900\\d)\\d{3}", , , , "30123"],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              WF: [, [, , "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", , , , , , , [6, 9]], [, , "72\\d{4}", , , , "721234", , , [6]], [, , "(?:72|8[23])\\d{4}", , , , "821234", , , [6]], [, , "80[0-5]\\d{6}", , , , "800012345", , , [9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "WF", 681, "00", , , , , , , , [[, "(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]], [, "(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , "[48]0\\d{4}", , , , "401234", , , [6]]],
              WS: [, [
                ,
                ,
                "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",
                ,
                ,
                ,
                ,
                ,
                ,
                [5, 6, 7, 10]
              ], [, , "6[1-9]\\d{3}|(?:[2-5]|60)\\d{4}", , , , "22123", , , [5, 6]], [, , "(?:7[1-35-7]|8(?:[3-7]|9\\d{3}))\\d{5}", , , , "7212345", , , [7, 10]], [, , "800\\d{3}", , , , "800123", , , [6]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "WS", 685, "0", , , , , , , , [[, "(\\d{5})", "$1", ["[2-5]|6[1-9]"]], [, "(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], [, "(\\d{2})(\\d{5})", "$1 $2", ["7"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              XK: [, [, , "[23]\\d{7,8}|(?:4\\d\\d|[89]00)\\d{5}", , , , , , , [
                8,
                9
              ]], [, , "(?:2[89]|39)0\\d{6}|[23][89]\\d{6}", , , , "28012345"], [, , "4[3-9]\\d{6}", , , , "43201234", , , [8]], [, , "800\\d{5}", , , , "80001234", , , [8]], [, , "900\\d{5}", , , , "90001234", , , [8]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "XK", 383, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[23]"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              YE: [, [
                ,
                ,
                "(?:1|7\\d)\\d{7}|[1-7]\\d{6}",
                ,
                ,
                ,
                ,
                ,
                ,
                [7, 8, 9],
                [6]
              ], [, , "78[0-7]\\d{4}|17\\d{6}|(?:[12][2-68]|3[2358]|4[2-58]|5[2-6]|6[3-58]|7[24-6])\\d{5}", , , , "1234567", , , [7, 8], [6]], [, , "7[01378]\\d{7}", , , , "712345678", , , [9]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "YE", 967, "00", "0", , , "0", , , , [[, "(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              YT: [, [
                ,
                ,
                "(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}",
                ,
                ,
                ,
                ,
                ,
                ,
                [9]
              ], [, , "269(?:0[0-467]|5[0-4]|6\\d|[78]0)\\d{4}", , , , "269601234"], [, , "639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}", , , , "639012345"], [, , "80\\d{7}", , , , "801234567"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "9(?:(?:39|47)8[01]|769\\d)\\d{4}", , , , "939801234"], "YT", 262, "00", "0", , , "0", , , , , , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              ZA: [, [, , "[1-79]\\d{8}|8\\d{4,9}", , , , , , , [5, 6, 7, 8, 9, 10]], [
                ,
                ,
                "(?:2(?:0330|4302)|52087)0\\d{3}|(?:1[0-8]|2[1-378]|3[1-69]|4\\d|5[1346-8])\\d{7}",
                ,
                ,
                ,
                "101234567",
                ,
                ,
                [9]
              ], [, , "(?:1(?:3492[0-25]|4495[0235]|549(?:20|5[01]))|4[34]492[01])\\d{3}|8[1-4]\\d{3,7}|(?:2[27]|47|54)4950\\d{3}|(?:1(?:049[2-4]|9[12]\\d\\d)|(?:6\\d|7[0-46-9])\\d{3}|8(?:5\\d{3}|7(?:08[67]|158|28[5-9]|310)))\\d{4}|(?:1[6-8]|28|3[2-69]|4[025689]|5[36-8])4920\\d{3}|(?:12|[2-5]1)492\\d{4}", , , , "711234567", , , [5, 6, 7, 8, 9]], [, , "80\\d{7}", , , , "801234567", , , [9]], [, , "(?:86[2-9]|9[0-2]\\d)\\d{6}", , , , "862345678", , , [9]], [, , "860\\d{6}", , , , "860123456", , , [9]], [, , , , , , , , , [-1]], [
                ,
                ,
                "87(?:08[0-589]|15[0-79]|28[0-4]|31[1-9])\\d{4}|87(?:[02][0-79]|1[0-46-9]|3[02-9]|[4-9]\\d)\\d{5}",
                ,
                ,
                ,
                "871234567",
                ,
                ,
                [9]
              ], "ZA", 27, "00", "0", , , "0", , , , [[, "(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "861\\d{6,7}", , , , "861123456", , , [9, 10]], , , [, , , , , , , , , [-1]]],
              ZM: [, [, , "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", , , , , , , [9], [6]], [
                ,
                ,
                "21[1-8]\\d{6}",
                ,
                ,
                ,
                "211234567",
                ,
                ,
                ,
                [6]
              ], [, , "(?:7[5-79]|9[5-8])\\d{7}", , , , "955123456"], [, , "800\\d{6}", , , , "800123456"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "63\\d{7}", , , , "630123456"], "ZM", 260, "00", "0", , , "0", , , , [[, "(\\d{3})(\\d{3})", "$1 $2", ["[1-9]"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], [, "(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ]],
              ZW: [, [, , "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", , , , , , , [5, 6, 7, 8, 9, 10], [3, 4]], [
                ,
                ,
                "(?:1(?:(?:3\\d|9)\\d|[4-8])|2(?:(?:(?:0(?:2[014]|5)|(?:2[0157]|31|84|9)\\d\\d|[56](?:[14]\\d\\d|20)|7(?:[089]|2[03]|[35]\\d\\d))\\d|4(?:2\\d\\d|8))\\d|1(?:2|[39]\\d{4}))|3(?:(?:123|(?:29\\d|92)\\d)\\d\\d|7(?:[19]|[56]\\d))|5(?:0|1[2-478]|26|[37]2|4(?:2\\d{3}|83)|5(?:25\\d\\d|[78])|[689]\\d)|6(?:(?:[16-8]21|28|52[013])\\d\\d|[39])|8(?:[1349]28|523)\\d\\d)\\d{3}|(?:4\\d\\d|9[2-9])\\d{4,5}|(?:(?:2(?:(?:(?:0|8[146])\\d|7[1-7])\\d|2(?:[278]\\d|92)|58(?:2\\d|3))|3(?:[26]|9\\d{3})|5(?:4\\d|5)\\d\\d)\\d|6(?:(?:(?:[0-246]|[78]\\d)\\d|37)\\d|5[2-8]))\\d\\d|(?:2(?:[569]\\d|8[2-57-9])|3(?:[013-59]\\d|8[37])|6[89]8)\\d{3}",
                ,
                ,
                ,
                "1312345",
                ,
                ,
                ,
                [3, 4]
              ], [, , "7(?:[178]\\d|3[1-9])\\d{6}", , , , "712345678", , , [9]], [, , "80(?:[01]\\d|20|8[0-8])\\d{3}", , , , "8001234", , , [7]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "86(?:1[12]|22|30|44|55|77|8[368])\\d{6}", , , , "8686123456", , , [10]], "ZW", 263, "00", "0", , , "0", , , , [
                [, "(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"],
                [, "(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"],
                [, "(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"],
                [, "(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"],
                [, "(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"],
                [, "(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"],
                [, "(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"],
                [
                  ,
                  "(\\d{2})(\\d{3,5})",
                  "$1 $2",
                  ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"],
                  "0$1"
                ],
                [, "(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"],
                [, "(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]
              ], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              800: [
                ,
                [, , "(?:00|[1-9]\\d)\\d{6}", , , , , , , [8]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , "(?:00|[1-9]\\d)\\d{6}", , , , "12345678"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                "001",
                800,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                1,
                [[, "(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              808: [, [, , "[1-9]\\d{7}", , , , , , , [8]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "[1-9]\\d{7}", , , , "12345678"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "001", 808, , , , , , , , 1, [[, "(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              870: [, [, , "7\\d{11}|[35-7]\\d{8}", , , , , , , [9, 12]], [, , , , , , , , , [-1]], [, , "(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}", , , , "301234567"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], "001", 870, , , , , , , , , [[, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              878: [, [, , "10\\d{10}", , , , , , , [12]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "10\\d{10}", , , , "101234567890"], "001", 878, , , , , , , , 1, [[, "(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              881: [
                ,
                [, , "6\\d{9}|[0-36-9]\\d{8}", , , , , , , [9, 10]],
                [, , , , , , , , , [-1]],
                [, , "6\\d{9}|[0-36-9]\\d{8}", , , , "612345678"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                "001",
                881,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [[, "(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], [, "(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]],
                ,
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                ,
                [, , , , , , , , , [-1]]
              ],
              882: [, [, , "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", , , , , , , [7, 8, 9, 10, 11, 12]], [, , , , , , , , , [-1]], [
                ,
                ,
                "342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}",
                ,
                ,
                ,
                "3421234",
                ,
                ,
                [7, 8, 9, 10, 12]
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}", , , , "390123456789"], "001", 882, , , , , , , , , [[, "(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], [, "(\\d{2})(\\d{6})", "$1 $2", ["49"]], [, "(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], [, "(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], [
                ,
                "(\\d{2})(\\d{3,4})(\\d{4})",
                "$1 $2 $3",
                ["16"]
              ], [, "(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], [, "(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], [, "(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , "348[57]\\d{7}", , , , "34851234567", , , [11]]],
              883: [, [, , "(?:[1-4]\\d|51)\\d{6,10}", , , , , , , [8, 9, 10, 11, 12]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [
                ,
                ,
                "(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}",
                ,
                ,
                ,
                "510012345"
              ], "001", 883, , , , , , , , 1, [[, "(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], [, "(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], [, "(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], [, "(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], [, "(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]],
              888: [, [, , "\\d{11}", , , , , , , [11]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "001", 888, , , , , , , , 1, [[, "(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , "\\d{11}", , , , "12345678901"], , , [, , , , , , , , , [-1]]],
              979: [, [, , "[1359]\\d{8}", , , , , , , [9], [8]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , "[1359]\\d{8}", , , , "123456789", , , , [8]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], "001", 979, , , , , , , , 1, [[, "(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], , [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , [, , , , , , , , , [-1]]]
            };
            i18n.phonenumbers.PhoneNumberUtil = function() {
              this.regionToMetadataMap = {};
            };
            goog.addSingletonGetter(i18n.phonenumbers.PhoneNumberUtil);
            i18n.phonenumbers.Error = { INVALID_COUNTRY_CODE: "Invalid country calling code", NOT_A_NUMBER: "The string supplied did not seem to be a phone number", TOO_SHORT_AFTER_IDD: "Phone number too short after IDD", TOO_SHORT_NSN: "The string supplied is too short to be a phone number", TOO_LONG: "The string supplied is too long to be a phone number" };
            i18n.phonenumbers.PhoneNumberUtil.NANPA_COUNTRY_CODE_ = 1;
            i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_ = 2;
            i18n.phonenumbers.PhoneNumberUtil.MAX_LENGTH_FOR_NSN_ = 17;
            i18n.phonenumbers.PhoneNumberUtil.MAX_LENGTH_COUNTRY_CODE_ = 3;
            i18n.phonenumbers.PhoneNumberUtil.MAX_INPUT_STRING_LENGTH_ = 250;
            i18n.phonenumbers.PhoneNumberUtil.UNKNOWN_REGION_ = "ZZ";
            i18n.phonenumbers.PhoneNumberUtil.MOBILE_TOKEN_MAPPINGS_ = { 54: "9" };
            i18n.phonenumbers.PhoneNumberUtil.GEO_MOBILE_COUNTRIES_ = [52, 54, 55];
            i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN = "+";
            i18n.phonenumbers.PhoneNumberUtil.STAR_SIGN_ = "*";
            i18n.phonenumbers.PhoneNumberUtil.RFC3966_EXTN_PREFIX_ = ";ext=";
            i18n.phonenumbers.PhoneNumberUtil.RFC3966_PREFIX_ = "tel:";
            i18n.phonenumbers.PhoneNumberUtil.RFC3966_PHONE_CONTEXT_ = ";phone-context=";
            i18n.phonenumbers.PhoneNumberUtil.RFC3966_ISDN_SUBADDRESS_ = ";isub=";
            i18n.phonenumbers.PhoneNumberUtil.DIGIT_MAPPINGS = { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", "０": "0", "１": "1", "２": "2", "３": "3", "４": "4", "５": "5", "６": "6", "７": "7", "８": "8", "９": "9", "٠": "0", "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "۰": "0", "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9" };
            i18n.phonenumbers.PhoneNumberUtil.DIALLABLE_CHAR_MAPPINGS_ = { 0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", "+": i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN, "*": "*", "#": "#" };
            i18n.phonenumbers.PhoneNumberUtil.ALPHA_MAPPINGS_ = { A: "2", B: "2", C: "2", D: "3", E: "3", F: "3", G: "4", H: "4", I: "4", J: "5", K: "5", L: "5", M: "6", N: "6", O: "6", P: "7", Q: "7", R: "7", S: "7", T: "8", U: "8", V: "8", W: "9", X: "9", Y: "9", Z: "9" };
            i18n.phonenumbers.PhoneNumberUtil.ALL_NORMALIZATION_MAPPINGS_ = {
              0: "0",
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
              6: "6",
              7: "7",
              8: "8",
              9: "9",
              "０": "0",
              "１": "1",
              "２": "2",
              "３": "3",
              "４": "4",
              "５": "5",
              "６": "6",
              "７": "7",
              "８": "8",
              "９": "9",
              "٠": "0",
              "١": "1",
              "٢": "2",
              "٣": "3",
              "٤": "4",
              "٥": "5",
              "٦": "6",
              "٧": "7",
              "٨": "8",
              "٩": "9",
              "۰": "0",
              "۱": "1",
              "۲": "2",
              "۳": "3",
              "۴": "4",
              "۵": "5",
              "۶": "6",
              "۷": "7",
              "۸": "8",
              "۹": "9",
              A: "2",
              B: "2",
              C: "2",
              D: "3",
              E: "3",
              F: "3",
              G: "4",
              H: "4",
              I: "4",
              J: "5",
              K: "5",
              L: "5",
              M: "6",
              N: "6",
              O: "6",
              P: "7",
              Q: "7",
              R: "7",
              S: "7",
              T: "8",
              U: "8",
              V: "8",
              W: "9",
              X: "9",
              Y: "9",
              Z: "9"
            };
            i18n.phonenumbers.PhoneNumberUtil.ALL_PLUS_NUMBER_GROUPING_SYMBOLS_ = {
              0: "0",
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
              6: "6",
              7: "7",
              8: "8",
              9: "9",
              A: "A",
              B: "B",
              C: "C",
              D: "D",
              E: "E",
              F: "F",
              G: "G",
              H: "H",
              I: "I",
              J: "J",
              K: "K",
              L: "L",
              M: "M",
              N: "N",
              O: "O",
              P: "P",
              Q: "Q",
              R: "R",
              S: "S",
              T: "T",
              U: "U",
              V: "V",
              W: "W",
              X: "X",
              Y: "Y",
              Z: "Z",
              a: "A",
              b: "B",
              c: "C",
              d: "D",
              e: "E",
              f: "F",
              g: "G",
              h: "H",
              i: "I",
              j: "J",
              k: "K",
              l: "L",
              m: "M",
              n: "N",
              o: "O",
              p: "P",
              q: "Q",
              r: "R",
              s: "S",
              t: "T",
              u: "U",
              v: "V",
              w: "W",
              x: "X",
              y: "Y",
              z: "Z",
              "-": "-",
              "－": "-",
              "‐": "-",
              "‑": "-",
              "‒": "-",
              "–": "-",
              "—": "-",
              "―": "-",
              "−": "-",
              "/": "/",
              "／": "/",
              " ": " ",
              "　": " ",
              "⁠": " ",
              ".": ".",
              "．": "."
            };
            i18n.phonenumbers.PhoneNumberUtil.SINGLE_INTERNATIONAL_PREFIX_ = /[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?/;
            i18n.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION = "-x‐-―−ー－-／  ­​⁠　()（）［］.\\[\\]/~⁓∼～";
            i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ = "0-9０-９٠-٩۰-۹";
            i18n.phonenumbers.PhoneNumberUtil.VALID_ALPHA_ = "A-Za-z";
            i18n.phonenumbers.PhoneNumberUtil.PLUS_CHARS_ = "+＋";
            i18n.phonenumbers.PhoneNumberUtil.PLUS_CHARS_PATTERN = new RegExp("[" + i18n.phonenumbers.PhoneNumberUtil.PLUS_CHARS_ + "]+");
            i18n.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN = new RegExp("^[" + i18n.phonenumbers.PhoneNumberUtil.PLUS_CHARS_ + "]+");
            i18n.phonenumbers.PhoneNumberUtil.SEPARATOR_PATTERN_ = "[" + i18n.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION + "]+";
            i18n.phonenumbers.PhoneNumberUtil.CAPTURING_DIGIT_PATTERN = new RegExp("([" + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "])");
            i18n.phonenumbers.PhoneNumberUtil.VALID_START_CHAR_PATTERN_ = new RegExp("[" + i18n.phonenumbers.PhoneNumberUtil.PLUS_CHARS_ + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]");
            i18n.phonenumbers.PhoneNumberUtil.SECOND_NUMBER_START_PATTERN_ = /[\\\/] *x/;
            i18n.phonenumbers.PhoneNumberUtil.UNWANTED_END_CHAR_PATTERN_ = new RegExp("[^" + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + i18n.phonenumbers.PhoneNumberUtil.VALID_ALPHA_ + "#]+$");
            i18n.phonenumbers.PhoneNumberUtil.VALID_ALPHA_PHONE_PATTERN_ = /(?:.*?[A-Za-z]){3}.*/;
            i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_PHONE_NUMBER_PATTERN_ = "[" + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]{" + i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_ + "}";
            i18n.phonenumbers.PhoneNumberUtil.VALID_PHONE_NUMBER_ = "[" + i18n.phonenumbers.PhoneNumberUtil.PLUS_CHARS_ + "]*(?:[" + i18n.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION + i18n.phonenumbers.PhoneNumberUtil.STAR_SIGN_ + "]*[" + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]){3,}[" + i18n.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION + i18n.phonenumbers.PhoneNumberUtil.STAR_SIGN_ + i18n.phonenumbers.PhoneNumberUtil.VALID_ALPHA_ + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]*";
            i18n.phonenumbers.PhoneNumberUtil.DEFAULT_EXTN_PREFIX_ = " ext. ";
            i18n.phonenumbers.PhoneNumberUtil.RFC3966_VISUAL_SEPARATOR_ = "[\\-\\.\\(\\)]?";
            i18n.phonenumbers.PhoneNumberUtil.RFC3966_PHONE_DIGIT_ = "([" + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]|" + i18n.phonenumbers.PhoneNumberUtil.RFC3966_VISUAL_SEPARATOR_ + ")";
            i18n.phonenumbers.PhoneNumberUtil.RFC3966_GLOBAL_NUMBER_DIGITS_ = "^\\" + i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN + i18n.phonenumbers.PhoneNumberUtil.RFC3966_PHONE_DIGIT_ + "*[" + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]" + i18n.phonenumbers.PhoneNumberUtil.RFC3966_PHONE_DIGIT_ + "*$";
            i18n.phonenumbers.PhoneNumberUtil.RFC3966_GLOBAL_NUMBER_DIGITS_PATTERN_ = new RegExp(i18n.phonenumbers.PhoneNumberUtil.RFC3966_GLOBAL_NUMBER_DIGITS_);
            i18n.phonenumbers.PhoneNumberUtil.ALPHANUM_ = i18n.phonenumbers.PhoneNumberUtil.VALID_ALPHA_ + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_;
            i18n.phonenumbers.PhoneNumberUtil.RFC3966_DOMAINLABEL_ = "[" + i18n.phonenumbers.PhoneNumberUtil.ALPHANUM_ + "]+((\\-)*[" + i18n.phonenumbers.PhoneNumberUtil.ALPHANUM_ + "])*";
            i18n.phonenumbers.PhoneNumberUtil.RFC3966_TOPLABEL_ = "[" + i18n.phonenumbers.PhoneNumberUtil.VALID_ALPHA_ + "]+((\\-)*[" + i18n.phonenumbers.PhoneNumberUtil.ALPHANUM_ + "])*";
            i18n.phonenumbers.PhoneNumberUtil.RFC3966_DOMAINNAME_ = "^(" + i18n.phonenumbers.PhoneNumberUtil.RFC3966_DOMAINLABEL_ + "\\.)*" + i18n.phonenumbers.PhoneNumberUtil.RFC3966_TOPLABEL_ + "\\.?$";
            i18n.phonenumbers.PhoneNumberUtil.RFC3966_DOMAINNAME_PATTERN_ = new RegExp(i18n.phonenumbers.PhoneNumberUtil.RFC3966_DOMAINNAME_);
            i18n.phonenumbers.PhoneNumberUtil.extnDigits_ = function(a2) {
              return "([" + i18n.phonenumbers.PhoneNumberUtil.VALID_DIGITS_ + "]{1," + a2 + "})";
            };
            i18n.phonenumbers.PhoneNumberUtil.createExtnPattern_ = function() {
              var a2 = i18n.phonenumbers.PhoneNumberUtil.RFC3966_EXTN_PREFIX_ + i18n.phonenumbers.PhoneNumberUtil.extnDigits_("20"), b2 = "[  \\t,]*(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)[:\\.．]?[  \\t,-]*" + i18n.phonenumbers.PhoneNumberUtil.extnDigits_("20") + "#?", c2 = "[  \\t,]*(?:[xｘ#＃~～]|int|ｉｎｔ)[:\\.．]?[  \\t,-]*" + i18n.phonenumbers.PhoneNumberUtil.extnDigits_("9") + "#?", d2 = "[- ]+" + i18n.phonenumbers.PhoneNumberUtil.extnDigits_("6") + "#", e2 = "[  \\t]*(?:,{2}|;)[:\\.．]?[  \\t,-]*" + i18n.phonenumbers.PhoneNumberUtil.extnDigits_("15") + "#?", f2 = "[  \\t]*(?:,)+[:\\.．]?[  \\t,-]*" + i18n.phonenumbers.PhoneNumberUtil.extnDigits_("9") + "#?";
              return a2 + "|" + b2 + "|" + c2 + "|" + d2 + "|" + e2 + "|" + f2;
            };
            i18n.phonenumbers.PhoneNumberUtil.EXTN_PATTERN_ = new RegExp("(?:" + i18n.phonenumbers.PhoneNumberUtil.createExtnPattern_() + ")$", "i");
            i18n.phonenumbers.PhoneNumberUtil.VALID_PHONE_NUMBER_PATTERN_ = new RegExp("^" + i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_PHONE_NUMBER_PATTERN_ + "$|^" + i18n.phonenumbers.PhoneNumberUtil.VALID_PHONE_NUMBER_ + "(?:" + i18n.phonenumbers.PhoneNumberUtil.createExtnPattern_() + ")?$", "i");
            i18n.phonenumbers.PhoneNumberUtil.NON_DIGITS_PATTERN_ = /\D+/;
            i18n.phonenumbers.PhoneNumberUtil.FIRST_GROUP_PATTERN_ = /(\$\d)/;
            i18n.phonenumbers.PhoneNumberUtil.NP_PATTERN_ = /\$NP/;
            i18n.phonenumbers.PhoneNumberUtil.FG_PATTERN_ = /\$FG/;
            i18n.phonenumbers.PhoneNumberUtil.CC_PATTERN_ = /\$CC/;
            i18n.phonenumbers.PhoneNumberUtil.FIRST_GROUP_ONLY_PREFIX_PATTERN_ = /^\(?\$1\)?$/;
            i18n.phonenumbers.PhoneNumberUtil.REGION_CODE_FOR_NON_GEO_ENTITY = "001";
            i18n.phonenumbers.PhoneNumberFormat = { E164: 0, INTERNATIONAL: 1, NATIONAL: 2, RFC3966: 3 };
            i18n.phonenumbers.PhoneNumberType = { FIXED_LINE: 0, MOBILE: 1, FIXED_LINE_OR_MOBILE: 2, TOLL_FREE: 3, PREMIUM_RATE: 4, SHARED_COST: 5, VOIP: 6, PERSONAL_NUMBER: 7, PAGER: 8, UAN: 9, VOICEMAIL: 10, UNKNOWN: -1 };
            i18n.phonenumbers.PhoneNumberUtil.MatchType = { NOT_A_NUMBER: 0, NO_MATCH: 1, SHORT_NSN_MATCH: 2, NSN_MATCH: 3, EXACT_MATCH: 4 };
            i18n.phonenumbers.PhoneNumberUtil.ValidationResult = { IS_POSSIBLE: 0, IS_POSSIBLE_LOCAL_ONLY: 4, INVALID_COUNTRY_CODE: 1, TOO_SHORT: 2, INVALID_LENGTH: 5, TOO_LONG: 3 };
            i18n.phonenumbers.PhoneNumberUtil.extractPossibleNumber = function(a2) {
              var b2 = a2.search(i18n.phonenumbers.PhoneNumberUtil.VALID_START_CHAR_PATTERN_);
              0 <= b2 ? (a2 = a2.substring(b2), a2 = a2.replace(i18n.phonenumbers.PhoneNumberUtil.UNWANTED_END_CHAR_PATTERN_, ""), b2 = a2.search(i18n.phonenumbers.PhoneNumberUtil.SECOND_NUMBER_START_PATTERN_), 0 <= b2 && (a2 = a2.substring(0, b2))) : a2 = "";
              return a2;
            };
            i18n.phonenumbers.PhoneNumberUtil.isViablePhoneNumber = function(a2) {
              return a2.length < i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_ ? false : i18n.phonenumbers.PhoneNumberUtil.matchesEntirely(i18n.phonenumbers.PhoneNumberUtil.VALID_PHONE_NUMBER_PATTERN_, a2);
            };
            i18n.phonenumbers.PhoneNumberUtil.normalize = function(a2) {
              return i18n.phonenumbers.PhoneNumberUtil.matchesEntirely(i18n.phonenumbers.PhoneNumberUtil.VALID_ALPHA_PHONE_PATTERN_, a2) ? i18n.phonenumbers.PhoneNumberUtil.normalizeHelper_(a2, i18n.phonenumbers.PhoneNumberUtil.ALL_NORMALIZATION_MAPPINGS_, true) : i18n.phonenumbers.PhoneNumberUtil.normalizeDigitsOnly(a2);
            };
            i18n.phonenumbers.PhoneNumberUtil.normalizeSB_ = function(a2) {
              var b2 = i18n.phonenumbers.PhoneNumberUtil.normalize(a2.toString());
              a2.clear();
              a2.append(b2);
            };
            i18n.phonenumbers.PhoneNumberUtil.normalizeDigitsOnly = function(a2) {
              return i18n.phonenumbers.PhoneNumberUtil.normalizeHelper_(a2, i18n.phonenumbers.PhoneNumberUtil.DIGIT_MAPPINGS, true);
            };
            i18n.phonenumbers.PhoneNumberUtil.normalizeDiallableCharsOnly = function(a2) {
              return i18n.phonenumbers.PhoneNumberUtil.normalizeHelper_(a2, i18n.phonenumbers.PhoneNumberUtil.DIALLABLE_CHAR_MAPPINGS_, true);
            };
            i18n.phonenumbers.PhoneNumberUtil.convertAlphaCharactersInNumber = function(a2) {
              return i18n.phonenumbers.PhoneNumberUtil.normalizeHelper_(a2, i18n.phonenumbers.PhoneNumberUtil.ALL_NORMALIZATION_MAPPINGS_, false);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.getLengthOfGeographicalAreaCode = function(a2) {
              var b2 = this.getMetadataForRegion(this.getRegionCodeForNumber(a2));
              return null != b2 && (b2.hasNationalPrefix() || a2.hasItalianLeadingZero()) && this.isNumberGeographical(a2) ? this.getLengthOfNationalDestinationCode(a2) : 0;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.getLengthOfNationalDestinationCode = function(a2) {
              if (a2.hasExtension()) {
                var b2 = a2.clone();
                b2.clearExtension();
              } else
                b2 = a2;
              b2 = this.format(b2, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL).split(i18n.phonenumbers.PhoneNumberUtil.NON_DIGITS_PATTERN_);
              0 == b2[0].length && b2.shift();
              return 2 >= b2.length ? 0 : this.getNumberType(a2) == i18n.phonenumbers.PhoneNumberType.MOBILE && (a2 = i18n.phonenumbers.PhoneNumberUtil.getCountryMobileToken(a2.getCountryCodeOrDefault()), "" != a2) ? b2[2].length + a2.length : b2[1].length;
            };
            i18n.phonenumbers.PhoneNumberUtil.getCountryMobileToken = function(a2) {
              return i18n.phonenumbers.PhoneNumberUtil.MOBILE_TOKEN_MAPPINGS_[a2] || "";
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.getSupportedRegions = function() {
              return Object.keys(i18n.phonenumbers.metadata.countryToMetadata).filter(function(a2) {
                return isNaN(a2);
              });
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.getSupportedGlobalNetworkCallingCodes = function() {
              return Object.keys(i18n.phonenumbers.metadata.countryToMetadata).filter(function(a2) {
                return !isNaN(a2);
              }).map(function(a2) {
                return parseInt(a2, 10);
              });
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.getSupportedCallingCodes = function() {
              var a2 = Object.keys(i18n.phonenumbers.metadata.countryCodeToRegionCodeMap);
              return [].concat($jscomp.arrayFromIterable(this.getSupportedGlobalNetworkCallingCodes()), $jscomp.arrayFromIterable(a2.map(function(b2) {
                return parseInt(b2, 10);
              })));
            };
            i18n.phonenumbers.PhoneNumberUtil.descHasPossibleNumberData_ = function(a2) {
              return null != a2 && (1 != a2.possibleLengthCount() || -1 != a2.possibleLengthArray()[0]);
            };
            i18n.phonenumbers.PhoneNumberUtil.descHasData_ = function(a2) {
              return null != a2 && (a2.hasExampleNumber() || i18n.phonenumbers.PhoneNumberUtil.descHasPossibleNumberData_(a2) || a2.hasNationalNumberPattern());
            };
            i18n.phonenumbers.PhoneNumberUtil.getSupportedTypesForMetadata_ = function(a2) {
              var b2 = [];
              goog.object.forEach(i18n.phonenumbers.PhoneNumberType, function(c2) {
                if (c2 != i18n.phonenumbers.PhoneNumberType.FIXED_LINE_OR_MOBILE && c2 != i18n.phonenumbers.PhoneNumberType.UNKNOWN) {
                  var d2 = i18n.phonenumbers.PhoneNumberUtil.getNumberDescByType_(a2, c2);
                  i18n.phonenumbers.PhoneNumberUtil.descHasData_(d2) && b2.push(c2);
                }
              });
              return b2;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.getSupportedTypesForRegion = function(a2) {
              return this.isValidRegionCode_(a2) ? i18n.phonenumbers.PhoneNumberUtil.getSupportedTypesForMetadata_(this.getMetadataForRegion(a2)) : [];
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.getSupportedTypesForNonGeoEntity = function(a2) {
              a2 = this.getMetadataForNonGeographicalRegion(a2);
              return null == a2 ? [] : i18n.phonenumbers.PhoneNumberUtil.getSupportedTypesForMetadata_(a2);
            };
            i18n.phonenumbers.PhoneNumberUtil.normalizeHelper_ = function(a2, b2, c2) {
              for (var d2 = new goog.string.StringBuffer(), e2, f2, g2 = a2.length, h = 0; h < g2; ++h)
                e2 = a2.charAt(h), f2 = b2[e2.toUpperCase()], null != f2 ? d2.append(f2) : c2 || d2.append(e2);
              return d2.toString();
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.formattingRuleHasFirstGroupOnly = function(a2) {
              return 0 == a2.length || i18n.phonenumbers.PhoneNumberUtil.FIRST_GROUP_ONLY_PREFIX_PATTERN_.test(a2);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.isNumberGeographical = function(a2) {
              var b2 = this.getNumberType(a2);
              return b2 == i18n.phonenumbers.PhoneNumberType.FIXED_LINE || b2 == i18n.phonenumbers.PhoneNumberType.FIXED_LINE_OR_MOBILE || i18n.phonenumbers.PhoneNumberUtil.GEO_MOBILE_COUNTRIES_.includes(a2.getCountryCodeOrDefault()) && b2 == i18n.phonenumbers.PhoneNumberType.MOBILE;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.isValidRegionCode_ = function(a2) {
              return null != a2 && isNaN(a2) && a2.toUpperCase() in i18n.phonenumbers.metadata.countryToMetadata;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.hasValidCountryCallingCode_ = function(a2) {
              return a2 in i18n.phonenumbers.metadata.countryCodeToRegionCodeMap;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.format = function(a2, b2) {
              if (0 == a2.getNationalNumber() && a2.hasRawInput()) {
                var c2 = a2.getRawInputOrDefault();
                if (0 < c2.length)
                  return c2;
              }
              c2 = a2.getCountryCodeOrDefault();
              var d2 = this.getNationalSignificantNumber(a2);
              if (b2 == i18n.phonenumbers.PhoneNumberFormat.E164)
                return this.prefixNumberWithCountryCallingCode_(c2, i18n.phonenumbers.PhoneNumberFormat.E164, d2, "");
              if (!this.hasValidCountryCallingCode_(c2))
                return d2;
              var e2 = this.getRegionCodeForCountryCode(c2);
              e2 = this.getMetadataForRegionOrCallingCode_(
                c2,
                e2
              );
              a2 = this.maybeGetFormattedExtension_(a2, e2, b2);
              d2 = this.formatNsn_(d2, e2, b2);
              return this.prefixNumberWithCountryCallingCode_(c2, b2, d2, a2);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.formatByPattern = function(a2, b2, c2) {
              var d2 = a2.getCountryCodeOrDefault(), e2 = this.getNationalSignificantNumber(a2);
              if (!this.hasValidCountryCallingCode_(d2))
                return e2;
              var f2 = this.getRegionCodeForCountryCode(d2);
              f2 = this.getMetadataForRegionOrCallingCode_(d2, f2);
              var g2 = this.chooseFormattingPatternForNumber_(c2, e2);
              if (null != g2) {
                c2 = g2.clone();
                g2 = g2.getNationalPrefixFormattingRuleOrDefault();
                if (0 < g2.length) {
                  var h = f2.getNationalPrefixOrDefault();
                  0 < h.length ? (g2 = g2.replace(
                    i18n.phonenumbers.PhoneNumberUtil.NP_PATTERN_,
                    h
                  ).replace(i18n.phonenumbers.PhoneNumberUtil.FG_PATTERN_, "$1"), c2.setNationalPrefixFormattingRule(g2)) : c2.clearNationalPrefixFormattingRule();
                }
                e2 = this.formatNsnUsingPattern_(e2, c2, b2);
              }
              a2 = this.maybeGetFormattedExtension_(a2, f2, b2);
              return this.prefixNumberWithCountryCallingCode_(d2, b2, e2, a2);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.formatNationalNumberWithCarrierCode = function(a2, b2) {
              var c2 = a2.getCountryCodeOrDefault(), d2 = this.getNationalSignificantNumber(a2);
              if (!this.hasValidCountryCallingCode_(c2))
                return d2;
              var e2 = this.getRegionCodeForCountryCode(c2);
              e2 = this.getMetadataForRegionOrCallingCode_(c2, e2);
              a2 = this.maybeGetFormattedExtension_(a2, e2, i18n.phonenumbers.PhoneNumberFormat.NATIONAL);
              b2 = this.formatNsn_(d2, e2, i18n.phonenumbers.PhoneNumberFormat.NATIONAL, b2);
              return this.prefixNumberWithCountryCallingCode_(
                c2,
                i18n.phonenumbers.PhoneNumberFormat.NATIONAL,
                b2,
                a2
              );
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.getMetadataForRegionOrCallingCode_ = function(a2, b2) {
              return i18n.phonenumbers.PhoneNumberUtil.REGION_CODE_FOR_NON_GEO_ENTITY == b2 ? this.getMetadataForNonGeographicalRegion(a2) : this.getMetadataForRegion(b2);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.formatNationalNumberWithPreferredCarrierCode = function(a2, b2) {
              return this.formatNationalNumberWithCarrierCode(a2, 0 < a2.getPreferredDomesticCarrierCodeOrDefault().length ? a2.getPreferredDomesticCarrierCodeOrDefault() : b2);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.formatNumberForMobileDialing = function(a2, b2, c2) {
              var d2 = a2.getCountryCodeOrDefault();
              if (!this.hasValidCountryCallingCode_(d2))
                return a2.hasRawInput() ? a2.getRawInputOrDefault() : "";
              var e2 = "";
              a2 = a2.clone();
              a2.clearExtension();
              var f2 = this.getRegionCodeForCountryCode(d2), g2 = this.getNumberType(a2), h = g2 != i18n.phonenumbers.PhoneNumberType.UNKNOWN;
              if (b2 == f2)
                e2 = g2 == i18n.phonenumbers.PhoneNumberType.FIXED_LINE || g2 == i18n.phonenumbers.PhoneNumberType.MOBILE || g2 == i18n.phonenumbers.PhoneNumberType.FIXED_LINE_OR_MOBILE, "BR" == f2 && e2 ? e2 = 0 < a2.getPreferredDomesticCarrierCodeOrDefault().length ? this.formatNationalNumberWithPreferredCarrierCode(a2, "") : "" : d2 == i18n.phonenumbers.PhoneNumberUtil.NANPA_COUNTRY_CODE_ ? (b2 = this.getMetadataForRegion(b2), e2 = this.canBeInternationallyDialled(a2) && this.testNumberLength_(this.getNationalSignificantNumber(a2), b2) != i18n.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_SHORT ? this.format(a2, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL) : this.format(a2, i18n.phonenumbers.PhoneNumberFormat.NATIONAL)) : e2 = (f2 == i18n.phonenumbers.PhoneNumberUtil.REGION_CODE_FOR_NON_GEO_ENTITY || ("MX" == f2 || "CL" == f2 || "UZ" == f2) && e2) && this.canBeInternationallyDialled(a2) ? this.format(a2, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL) : this.format(a2, i18n.phonenumbers.PhoneNumberFormat.NATIONAL);
              else if (h && this.canBeInternationallyDialled(a2))
                return c2 ? this.format(a2, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL) : this.format(a2, i18n.phonenumbers.PhoneNumberFormat.E164);
              return c2 ? e2 : i18n.phonenumbers.PhoneNumberUtil.normalizeDiallableCharsOnly(e2);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.formatOutOfCountryCallingNumber = function(a2, b2) {
              if (!this.isValidRegionCode_(b2))
                return this.format(a2, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL);
              var c2 = a2.getCountryCodeOrDefault(), d2 = this.getNationalSignificantNumber(a2);
              if (!this.hasValidCountryCallingCode_(c2))
                return d2;
              if (c2 == i18n.phonenumbers.PhoneNumberUtil.NANPA_COUNTRY_CODE_) {
                if (this.isNANPACountry(b2))
                  return c2 + " " + this.format(a2, i18n.phonenumbers.PhoneNumberFormat.NATIONAL);
              } else if (c2 == this.getCountryCodeForValidRegion_(b2))
                return this.format(
                  a2,
                  i18n.phonenumbers.PhoneNumberFormat.NATIONAL
                );
              var e2 = this.getMetadataForRegion(b2), f2 = e2.getInternationalPrefixOrDefault();
              b2 = "";
              e2.hasPreferredInternationalPrefix() ? b2 = e2.getPreferredInternationalPrefixOrDefault() : i18n.phonenumbers.PhoneNumberUtil.matchesEntirely(i18n.phonenumbers.PhoneNumberUtil.SINGLE_INTERNATIONAL_PREFIX_, f2) && (b2 = f2);
              e2 = this.getRegionCodeForCountryCode(c2);
              e2 = this.getMetadataForRegionOrCallingCode_(c2, e2);
              d2 = this.formatNsn_(d2, e2, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL);
              a2 = this.maybeGetFormattedExtension_(
                a2,
                e2,
                i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL
              );
              return 0 < b2.length ? b2 + " " + c2 + " " + d2 + a2 : this.prefixNumberWithCountryCallingCode_(c2, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL, d2, a2);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.formatInOriginalFormat = function(a2, b2) {
              if (a2.hasRawInput() && !this.hasFormattingPatternForNumber_(a2))
                return a2.getRawInputOrDefault();
              if (!a2.hasCountryCodeSource())
                return this.format(a2, i18n.phonenumbers.PhoneNumberFormat.NATIONAL);
              switch (a2.getCountryCodeSource()) {
                case i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITH_PLUS_SIGN:
                  b2 = this.format(a2, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL);
                  break;
                case i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITH_IDD:
                  b2 = this.formatOutOfCountryCallingNumber(a2, b2);
                  break;
                case i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITHOUT_PLUS_SIGN:
                  b2 = this.format(a2, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL).substring(1);
                  break;
                default:
                  var c2 = this.getRegionCodeForCountryCode(a2.getCountryCodeOrDefault()), d2 = this.getNddPrefixForRegion(c2, true);
                  b2 = this.format(a2, i18n.phonenumbers.PhoneNumberFormat.NATIONAL);
                  if (null != d2 && 0 != d2.length && !this.rawInputContainsNationalPrefix_(a2.getRawInputOrDefault(), d2, c2) && (c2 = this.getMetadataForRegion(c2), d2 = this.getNationalSignificantNumber(a2), c2 = this.chooseFormattingPatternForNumber_(c2.numberFormatArray(), d2), null != c2)) {
                    d2 = c2.getNationalPrefixFormattingRuleOrDefault();
                    var e2 = d2.indexOf("$1");
                    0 >= e2 || (d2 = d2.substring(0, e2), d2 = i18n.phonenumbers.PhoneNumberUtil.normalizeDigitsOnly(d2), 0 != d2.length && (b2 = c2.clone(), b2.clearNationalPrefixFormattingRule(), b2 = this.formatByPattern(a2, i18n.phonenumbers.PhoneNumberFormat.NATIONAL, [b2])));
                  }
              }
              a2 = a2.getRawInputOrDefault();
              null != b2 && 0 < a2.length && (c2 = i18n.phonenumbers.PhoneNumberUtil.normalizeDiallableCharsOnly(b2), d2 = i18n.phonenumbers.PhoneNumberUtil.normalizeDiallableCharsOnly(a2), c2 != d2 && (b2 = a2));
              return b2;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.rawInputContainsNationalPrefix_ = function(a2, b2, c2) {
              a2 = i18n.phonenumbers.PhoneNumberUtil.normalizeDigitsOnly(a2);
              if (goog.string.startsWith(a2, b2))
                try {
                  return this.isValidNumber(this.parse(a2.substring(b2.length), c2));
                } catch (d2) {
                }
              return false;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.hasFormattingPatternForNumber_ = function(a2) {
              var b2 = a2.getCountryCodeOrDefault(), c2 = this.getRegionCodeForCountryCode(b2);
              b2 = this.getMetadataForRegionOrCallingCode_(b2, c2);
              if (null == b2)
                return false;
              a2 = this.getNationalSignificantNumber(a2);
              return null != this.chooseFormattingPatternForNumber_(b2.numberFormatArray(), a2);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.formatOutOfCountryKeepingAlphaChars = function(a2, b2) {
              var c2 = a2.getRawInputOrDefault();
              if (0 == c2.length)
                return this.formatOutOfCountryCallingNumber(a2, b2);
              var d2 = a2.getCountryCodeOrDefault();
              if (!this.hasValidCountryCallingCode_(d2))
                return c2;
              c2 = i18n.phonenumbers.PhoneNumberUtil.normalizeHelper_(c2, i18n.phonenumbers.PhoneNumberUtil.ALL_PLUS_NUMBER_GROUPING_SYMBOLS_, true);
              var e2 = this.getNationalSignificantNumber(a2);
              if (3 < e2.length) {
                var f2 = c2.indexOf(e2.substring(0, 3));
                -1 != f2 && (c2 = c2.substring(f2));
              }
              f2 = this.getMetadataForRegion(b2);
              if (d2 == i18n.phonenumbers.PhoneNumberUtil.NANPA_COUNTRY_CODE_) {
                if (this.isNANPACountry(b2))
                  return d2 + " " + c2;
              } else if (null != f2 && d2 == this.getCountryCodeForValidRegion_(b2)) {
                d2 = this.chooseFormattingPatternForNumber_(f2.numberFormatArray(), e2);
                if (null == d2)
                  return c2;
                d2 = d2.clone();
                d2.setPattern("(\\d+)(.*)");
                d2.setFormat("$1$2");
                return this.formatNsnUsingPattern_(c2, d2, i18n.phonenumbers.PhoneNumberFormat.NATIONAL);
              }
              b2 = "";
              null != f2 && (b2 = f2.getInternationalPrefixOrDefault(), b2 = i18n.phonenumbers.PhoneNumberUtil.matchesEntirely(
                i18n.phonenumbers.PhoneNumberUtil.SINGLE_INTERNATIONAL_PREFIX_,
                b2
              ) ? b2 : f2.getPreferredInternationalPrefixOrDefault());
              f2 = this.getRegionCodeForCountryCode(d2);
              f2 = this.getMetadataForRegionOrCallingCode_(d2, f2);
              a2 = this.maybeGetFormattedExtension_(a2, f2, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL);
              return 0 < b2.length ? b2 + " " + d2 + " " + c2 + a2 : this.prefixNumberWithCountryCallingCode_(d2, i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL, c2, a2);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.getNationalSignificantNumber = function(a2) {
              if (!a2.hasNationalNumber())
                return "";
              var b2 = "" + a2.getNationalNumber();
              return a2.hasItalianLeadingZero() && a2.getItalianLeadingZero() && 0 < a2.getNumberOfLeadingZerosOrDefault() ? Array(a2.getNumberOfLeadingZerosOrDefault() + 1).join("0") + b2 : b2;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.prefixNumberWithCountryCallingCode_ = function(a2, b2, c2, d2) {
              switch (b2) {
                case i18n.phonenumbers.PhoneNumberFormat.E164:
                  return i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN + a2 + c2 + d2;
                case i18n.phonenumbers.PhoneNumberFormat.INTERNATIONAL:
                  return i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN + a2 + " " + c2 + d2;
                case i18n.phonenumbers.PhoneNumberFormat.RFC3966:
                  return i18n.phonenumbers.PhoneNumberUtil.RFC3966_PREFIX_ + i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN + a2 + "-" + c2 + d2;
                default:
                  return c2 + d2;
              }
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.formatNsn_ = function(a2, b2, c2, d2) {
              b2 = 0 == b2.intlNumberFormatArray().length || c2 == i18n.phonenumbers.PhoneNumberFormat.NATIONAL ? b2.numberFormatArray() : b2.intlNumberFormatArray();
              b2 = this.chooseFormattingPatternForNumber_(b2, a2);
              return null == b2 ? a2 : this.formatNsnUsingPattern_(a2, b2, c2, d2);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.chooseFormattingPatternForNumber_ = function(a2, b2) {
              for (var c2, d2 = a2.length, e2 = 0; e2 < d2; ++e2) {
                c2 = a2[e2];
                var f2 = c2.leadingDigitsPatternCount();
                if (0 == f2 || 0 == b2.search(c2.getLeadingDigitsPattern(f2 - 1))) {
                  if (f2 = new RegExp(c2.getPattern()), i18n.phonenumbers.PhoneNumberUtil.matchesEntirely(f2, b2))
                    return c2;
                }
              }
              return null;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.formatNsnUsingPattern_ = function(a2, b2, c2, d2) {
              var e2 = b2.getFormatOrDefault(), f2 = new RegExp(b2.getPattern()), g2 = b2.getDomesticCarrierCodeFormattingRuleOrDefault();
              c2 == i18n.phonenumbers.PhoneNumberFormat.NATIONAL && null != d2 && 0 < d2.length && 0 < g2.length ? (b2 = g2.replace(i18n.phonenumbers.PhoneNumberUtil.CC_PATTERN_, d2), e2 = e2.replace(i18n.phonenumbers.PhoneNumberUtil.FIRST_GROUP_PATTERN_, b2), a2 = a2.replace(f2, e2)) : (b2 = b2.getNationalPrefixFormattingRuleOrDefault(), a2 = c2 == i18n.phonenumbers.PhoneNumberFormat.NATIONAL && null != b2 && 0 < b2.length ? a2.replace(f2, e2.replace(i18n.phonenumbers.PhoneNumberUtil.FIRST_GROUP_PATTERN_, b2)) : a2.replace(f2, e2));
              c2 == i18n.phonenumbers.PhoneNumberFormat.RFC3966 && (a2 = a2.replace(new RegExp("^" + i18n.phonenumbers.PhoneNumberUtil.SEPARATOR_PATTERN_), ""), a2 = a2.replace(new RegExp(i18n.phonenumbers.PhoneNumberUtil.SEPARATOR_PATTERN_, "g"), "-"));
              return a2;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.getExampleNumber = function(a2) {
              return this.getExampleNumberForType(a2, i18n.phonenumbers.PhoneNumberType.FIXED_LINE);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.getExampleNumberForType = function(a2, b2) {
              if (!this.isValidRegionCode_(a2))
                return null;
              b2 = i18n.phonenumbers.PhoneNumberUtil.getNumberDescByType_(this.getMetadataForRegion(a2), b2);
              try {
                if (b2.hasExampleNumber())
                  return this.parse(b2.getExampleNumber(), a2);
              } catch (c2) {
              }
              return null;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.getExampleNumberForNonGeoEntity = function(a2) {
              var b2 = this.getMetadataForNonGeographicalRegion(a2);
              if (null != b2 && (b2 = [b2.getMobile(), b2.getTollFree(), b2.getSharedCost(), b2.getVoip(), b2.getVoicemail(), b2.getUan(), b2.getPremiumRate()].find(function(c2, d2) {
                return c2.hasExampleNumber();
              }), void 0 !== b2))
                try {
                  return this.parse("+" + a2 + b2.getExampleNumber(), "ZZ");
                } catch (c2) {
                }
              return null;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.maybeGetFormattedExtension_ = function(a2, b2, c2) {
              return a2.hasExtension() && 0 != a2.getExtension().length ? c2 == i18n.phonenumbers.PhoneNumberFormat.RFC3966 ? i18n.phonenumbers.PhoneNumberUtil.RFC3966_EXTN_PREFIX_ + a2.getExtension() : b2.hasPreferredExtnPrefix() ? b2.getPreferredExtnPrefix() + a2.getExtensionOrDefault() : i18n.phonenumbers.PhoneNumberUtil.DEFAULT_EXTN_PREFIX_ + a2.getExtensionOrDefault() : "";
            };
            i18n.phonenumbers.PhoneNumberUtil.getNumberDescByType_ = function(a2, b2) {
              switch (b2) {
                case i18n.phonenumbers.PhoneNumberType.PREMIUM_RATE:
                  return a2.getPremiumRate();
                case i18n.phonenumbers.PhoneNumberType.TOLL_FREE:
                  return a2.getTollFree();
                case i18n.phonenumbers.PhoneNumberType.MOBILE:
                  return a2.getMobile();
                case i18n.phonenumbers.PhoneNumberType.FIXED_LINE:
                case i18n.phonenumbers.PhoneNumberType.FIXED_LINE_OR_MOBILE:
                  return a2.getFixedLine();
                case i18n.phonenumbers.PhoneNumberType.SHARED_COST:
                  return a2.getSharedCost();
                case i18n.phonenumbers.PhoneNumberType.VOIP:
                  return a2.getVoip();
                case i18n.phonenumbers.PhoneNumberType.PERSONAL_NUMBER:
                  return a2.getPersonalNumber();
                case i18n.phonenumbers.PhoneNumberType.PAGER:
                  return a2.getPager();
                case i18n.phonenumbers.PhoneNumberType.UAN:
                  return a2.getUan();
                case i18n.phonenumbers.PhoneNumberType.VOICEMAIL:
                  return a2.getVoicemail();
                default:
                  return a2.getGeneralDesc();
              }
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.getNumberType = function(a2) {
              var b2 = this.getRegionCodeForNumber(a2);
              b2 = this.getMetadataForRegionOrCallingCode_(a2.getCountryCodeOrDefault(), b2);
              if (null == b2)
                return i18n.phonenumbers.PhoneNumberType.UNKNOWN;
              a2 = this.getNationalSignificantNumber(a2);
              return this.getNumberTypeHelper_(a2, b2);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.getNumberTypeHelper_ = function(a2, b2) {
              return this.isNumberMatchingDesc_(a2, b2.getGeneralDesc()) ? this.isNumberMatchingDesc_(a2, b2.getPremiumRate()) ? i18n.phonenumbers.PhoneNumberType.PREMIUM_RATE : this.isNumberMatchingDesc_(a2, b2.getTollFree()) ? i18n.phonenumbers.PhoneNumberType.TOLL_FREE : this.isNumberMatchingDesc_(a2, b2.getSharedCost()) ? i18n.phonenumbers.PhoneNumberType.SHARED_COST : this.isNumberMatchingDesc_(a2, b2.getVoip()) ? i18n.phonenumbers.PhoneNumberType.VOIP : this.isNumberMatchingDesc_(
                a2,
                b2.getPersonalNumber()
              ) ? i18n.phonenumbers.PhoneNumberType.PERSONAL_NUMBER : this.isNumberMatchingDesc_(a2, b2.getPager()) ? i18n.phonenumbers.PhoneNumberType.PAGER : this.isNumberMatchingDesc_(a2, b2.getUan()) ? i18n.phonenumbers.PhoneNumberType.UAN : this.isNumberMatchingDesc_(a2, b2.getVoicemail()) ? i18n.phonenumbers.PhoneNumberType.VOICEMAIL : this.isNumberMatchingDesc_(a2, b2.getFixedLine()) ? b2.getSameMobileAndFixedLinePattern() || this.isNumberMatchingDesc_(a2, b2.getMobile()) ? i18n.phonenumbers.PhoneNumberType.FIXED_LINE_OR_MOBILE : i18n.phonenumbers.PhoneNumberType.FIXED_LINE : !b2.getSameMobileAndFixedLinePattern() && this.isNumberMatchingDesc_(a2, b2.getMobile()) ? i18n.phonenumbers.PhoneNumberType.MOBILE : i18n.phonenumbers.PhoneNumberType.UNKNOWN : i18n.phonenumbers.PhoneNumberType.UNKNOWN;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.getMetadataForRegion = function(a2) {
              if (null == a2)
                return null;
              a2 = a2.toUpperCase();
              var b2 = this.regionToMetadataMap[a2];
              if (null == b2) {
                b2 = new goog.proto2.PbLiteSerializer();
                var c2 = i18n.phonenumbers.metadata.countryToMetadata[a2];
                if (null == c2)
                  return null;
                b2 = b2.deserialize(i18n.phonenumbers.PhoneMetadata.getDescriptor(), c2);
                this.regionToMetadataMap[a2] = b2;
              }
              return b2;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.getMetadataForNonGeographicalRegion = function(a2) {
              return this.getMetadataForRegion("" + a2);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.isNumberMatchingDesc_ = function(a2, b2) {
              var c2 = a2.length;
              return 0 < b2.possibleLengthCount() && -1 == b2.possibleLengthArray().indexOf(c2) ? false : i18n.phonenumbers.PhoneNumberUtil.matchesEntirely(b2.getNationalNumberPatternOrDefault(), a2);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.isValidNumber = function(a2) {
              var b2 = this.getRegionCodeForNumber(a2);
              return this.isValidNumberForRegion(a2, b2);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.isValidNumberForRegion = function(a2, b2) {
              var c2 = a2.getCountryCodeOrDefault(), d2 = this.getMetadataForRegionOrCallingCode_(c2, b2);
              if (null == d2 || i18n.phonenumbers.PhoneNumberUtil.REGION_CODE_FOR_NON_GEO_ENTITY != b2 && c2 != this.getCountryCodeForValidRegion_(b2))
                return false;
              a2 = this.getNationalSignificantNumber(a2);
              return this.getNumberTypeHelper_(a2, d2) != i18n.phonenumbers.PhoneNumberType.UNKNOWN;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.getRegionCodeForNumber = function(a2) {
              if (null == a2)
                return null;
              var b2 = a2.getCountryCodeOrDefault();
              b2 = i18n.phonenumbers.metadata.countryCodeToRegionCodeMap[b2];
              return null == b2 ? null : 1 == b2.length ? b2[0] : this.getRegionCodeForNumberFromRegionList_(a2, b2);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.getRegionCodeForNumberFromRegionList_ = function(a2, b2) {
              a2 = this.getNationalSignificantNumber(a2);
              for (var c2, d2 = b2.length, e2 = 0; e2 < d2; e2++) {
                c2 = b2[e2];
                var f2 = this.getMetadataForRegion(c2);
                if (f2.hasLeadingDigits()) {
                  if (0 == a2.search(f2.getLeadingDigits()))
                    return c2;
                } else if (this.getNumberTypeHelper_(a2, f2) != i18n.phonenumbers.PhoneNumberType.UNKNOWN)
                  return c2;
              }
              return null;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.getRegionCodeForCountryCode = function(a2) {
              a2 = i18n.phonenumbers.metadata.countryCodeToRegionCodeMap[a2];
              return null == a2 ? i18n.phonenumbers.PhoneNumberUtil.UNKNOWN_REGION_ : a2[0];
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.getRegionCodesForCountryCode = function(a2) {
              a2 = i18n.phonenumbers.metadata.countryCodeToRegionCodeMap[a2];
              return null == a2 ? [] : a2;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.getCountryCodeForRegion = function(a2) {
              return this.isValidRegionCode_(a2) ? this.getCountryCodeForValidRegion_(a2) : 0;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.getCountryCodeForValidRegion_ = function(a2) {
              var b2 = this.getMetadataForRegion(a2);
              if (null == b2)
                throw Error("Invalid region code: " + a2);
              return b2.getCountryCodeOrDefault();
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.getNddPrefixForRegion = function(a2, b2) {
              a2 = this.getMetadataForRegion(a2);
              if (null == a2)
                return null;
              a2 = a2.getNationalPrefixOrDefault();
              if (0 == a2.length)
                return null;
              b2 && (a2 = a2.replace("~", ""));
              return a2;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.isNANPACountry = function(a2) {
              return null != a2 && i18n.phonenumbers.metadata.countryCodeToRegionCodeMap[i18n.phonenumbers.PhoneNumberUtil.NANPA_COUNTRY_CODE_].includes(a2.toUpperCase());
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.isAlphaNumber = function(a2) {
              if (!i18n.phonenumbers.PhoneNumberUtil.isViablePhoneNumber(a2))
                return false;
              a2 = new goog.string.StringBuffer(a2);
              this.maybeStripExtension(a2);
              return i18n.phonenumbers.PhoneNumberUtil.matchesEntirely(i18n.phonenumbers.PhoneNumberUtil.VALID_ALPHA_PHONE_PATTERN_, a2.toString());
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.isPossibleNumber = function(a2) {
              a2 = this.isPossibleNumberWithReason(a2);
              return a2 == i18n.phonenumbers.PhoneNumberUtil.ValidationResult.IS_POSSIBLE || a2 == i18n.phonenumbers.PhoneNumberUtil.ValidationResult.IS_POSSIBLE_LOCAL_ONLY;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.isPossibleNumberForType = function(a2, b2) {
              a2 = this.isPossibleNumberForTypeWithReason(a2, b2);
              return a2 == i18n.phonenumbers.PhoneNumberUtil.ValidationResult.IS_POSSIBLE || a2 == i18n.phonenumbers.PhoneNumberUtil.ValidationResult.IS_POSSIBLE_LOCAL_ONLY;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.testNumberLength_ = function(a2, b2) {
              return this.testNumberLengthForType_(a2, b2, i18n.phonenumbers.PhoneNumberType.UNKNOWN);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.testNumberLengthForType_ = function(a2, b2, c2) {
              var d2 = i18n.phonenumbers.PhoneNumberUtil.getNumberDescByType_(b2, c2), e2 = 0 == d2.possibleLengthCount() ? b2.getGeneralDesc().possibleLengthArray() : d2.possibleLengthArray();
              d2 = d2.possibleLengthLocalOnlyArray();
              if (c2 == i18n.phonenumbers.PhoneNumberType.FIXED_LINE_OR_MOBILE)
                if (i18n.phonenumbers.PhoneNumberUtil.descHasPossibleNumberData_(i18n.phonenumbers.PhoneNumberUtil.getNumberDescByType_(b2, i18n.phonenumbers.PhoneNumberType.FIXED_LINE)))
                  c2 = i18n.phonenumbers.PhoneNumberUtil.getNumberDescByType_(b2, i18n.phonenumbers.PhoneNumberType.MOBILE), i18n.phonenumbers.PhoneNumberUtil.descHasPossibleNumberData_(c2) && (e2 = e2.concat(0 == c2.possibleLengthCount() ? b2.getGeneralDesc().possibleLengthArray() : c2.possibleLengthArray()), e2.sort(), 0 == d2.length ? d2 = c2.possibleLengthLocalOnlyArray() : (d2 = d2.concat(c2.possibleLengthLocalOnlyArray()), d2.sort()));
                else
                  return this.testNumberLengthForType_(a2, b2, i18n.phonenumbers.PhoneNumberType.MOBILE);
              if (-1 == e2[0])
                return i18n.phonenumbers.PhoneNumberUtil.ValidationResult.INVALID_LENGTH;
              a2 = a2.length;
              if (-1 < d2.indexOf(a2))
                return i18n.phonenumbers.PhoneNumberUtil.ValidationResult.IS_POSSIBLE_LOCAL_ONLY;
              b2 = e2[0];
              return b2 == a2 ? i18n.phonenumbers.PhoneNumberUtil.ValidationResult.IS_POSSIBLE : b2 > a2 ? i18n.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_SHORT : e2[e2.length - 1] < a2 ? i18n.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_LONG : -1 < e2.indexOf(a2, 1) ? i18n.phonenumbers.PhoneNumberUtil.ValidationResult.IS_POSSIBLE : i18n.phonenumbers.PhoneNumberUtil.ValidationResult.INVALID_LENGTH;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.isPossibleNumberWithReason = function(a2) {
              return this.isPossibleNumberForTypeWithReason(a2, i18n.phonenumbers.PhoneNumberType.UNKNOWN);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.isPossibleNumberForTypeWithReason = function(a2, b2) {
              var c2 = this.getNationalSignificantNumber(a2);
              a2 = a2.getCountryCodeOrDefault();
              if (!this.hasValidCountryCallingCode_(a2))
                return i18n.phonenumbers.PhoneNumberUtil.ValidationResult.INVALID_COUNTRY_CODE;
              var d2 = this.getRegionCodeForCountryCode(a2);
              a2 = this.getMetadataForRegionOrCallingCode_(a2, d2);
              return this.testNumberLengthForType_(c2, a2, b2);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.isPossibleNumberString = function(a2, b2) {
              try {
                return this.isPossibleNumber(this.parse(a2, b2));
              } catch (c2) {
                return false;
              }
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.truncateTooLongNumber = function(a2) {
              if (this.isValidNumber(a2))
                return true;
              var b2 = a2.clone(), c2 = a2.getNationalNumberOrDefault();
              do
                if (c2 = Math.floor(c2 / 10), b2.setNationalNumber(c2), 0 == c2 || this.isPossibleNumberWithReason(b2) == i18n.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_SHORT)
                  return false;
              while (!this.isValidNumber(b2));
              a2.setNationalNumber(c2);
              return true;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.extractCountryCode = function(a2, b2) {
              a2 = a2.toString();
              if (0 == a2.length || "0" == a2.charAt(0))
                return 0;
              for (var c2, d2 = a2.length, e2 = 1; e2 <= i18n.phonenumbers.PhoneNumberUtil.MAX_LENGTH_COUNTRY_CODE_ && e2 <= d2; ++e2)
                if (c2 = parseInt(a2.substring(0, e2), 10), c2 in i18n.phonenumbers.metadata.countryCodeToRegionCodeMap)
                  return b2.append(a2.substring(e2)), c2;
              return 0;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.maybeExtractCountryCode = function(a2, b2, c2, d2, e2) {
              if (0 == a2.length)
                return 0;
              a2 = new goog.string.StringBuffer(a2);
              var f2;
              null != b2 && (f2 = b2.getInternationalPrefix());
              null == f2 && (f2 = "NonMatch");
              f2 = this.maybeStripInternationalPrefixAndNormalize(a2, f2);
              d2 && e2.setCountryCodeSource(f2);
              if (f2 != i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_DEFAULT_COUNTRY) {
                if (a2.getLength() <= i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_)
                  throw Error(i18n.phonenumbers.Error.TOO_SHORT_AFTER_IDD);
                b2 = this.extractCountryCode(a2, c2);
                if (0 != b2)
                  return e2.setCountryCode(b2), b2;
                throw Error(i18n.phonenumbers.Error.INVALID_COUNTRY_CODE);
              }
              if (null != b2) {
                f2 = b2.getCountryCodeOrDefault();
                var g2 = "" + f2, h = a2.toString();
                if (goog.string.startsWith(h, g2) && (g2 = new goog.string.StringBuffer(h.substring(g2.length)), h = b2.getGeneralDesc(), h = new RegExp(h.getNationalNumberPatternOrDefault()), this.maybeStripNationalPrefixAndCarrierCode(g2, b2, null), g2 = g2.toString(), !i18n.phonenumbers.PhoneNumberUtil.matchesEntirely(h, a2.toString()) && i18n.phonenumbers.PhoneNumberUtil.matchesEntirely(
                  h,
                  g2
                ) || this.testNumberLength_(a2.toString(), b2) == i18n.phonenumbers.PhoneNumberUtil.ValidationResult.TOO_LONG))
                  return c2.append(g2), d2 && e2.setCountryCodeSource(i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITHOUT_PLUS_SIGN), e2.setCountryCode(f2), f2;
              }
              e2.setCountryCode(0);
              return 0;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.parsePrefixAsIdd_ = function(a2, b2) {
              var c2 = b2.toString();
              if (0 == c2.search(a2)) {
                a2 = c2.match(a2)[0].length;
                var d2 = c2.substring(a2).match(i18n.phonenumbers.PhoneNumberUtil.CAPTURING_DIGIT_PATTERN);
                if (d2 && null != d2[1] && 0 < d2[1].length && "0" == i18n.phonenumbers.PhoneNumberUtil.normalizeDigitsOnly(d2[1]))
                  return false;
                b2.clear();
                b2.append(c2.substring(a2));
                return true;
              }
              return false;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.maybeStripInternationalPrefixAndNormalize = function(a2, b2) {
              var c2 = a2.toString();
              if (0 == c2.length)
                return i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_DEFAULT_COUNTRY;
              if (i18n.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN.test(c2))
                return c2 = c2.replace(i18n.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN, ""), a2.clear(), a2.append(i18n.phonenumbers.PhoneNumberUtil.normalize(c2)), i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITH_PLUS_SIGN;
              b2 = new RegExp(b2);
              i18n.phonenumbers.PhoneNumberUtil.normalizeSB_(a2);
              return this.parsePrefixAsIdd_(b2, a2) ? i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_NUMBER_WITH_IDD : i18n.phonenumbers.PhoneNumber.CountryCodeSource.FROM_DEFAULT_COUNTRY;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.maybeStripNationalPrefixAndCarrierCode = function(a2, b2, c2) {
              var d2 = a2.toString(), e2 = d2.length, f2 = b2.getNationalPrefixForParsing();
              if (0 == e2 || null == f2 || 0 == f2.length)
                return false;
              var g2 = new RegExp("^(?:" + f2 + ")");
              if (e2 = g2.exec(d2)) {
                f2 = new RegExp(b2.getGeneralDesc().getNationalNumberPatternOrDefault());
                var h = i18n.phonenumbers.PhoneNumberUtil.matchesEntirely(f2, d2), k = e2.length - 1;
                b2 = b2.getNationalPrefixTransformRule();
                if (null == b2 || 0 == b2.length || null == e2[k] || 0 == e2[k].length) {
                  if (h && !i18n.phonenumbers.PhoneNumberUtil.matchesEntirely(
                    f2,
                    d2.substring(e2[0].length)
                  ))
                    return false;
                  null != c2 && 0 < k && null != e2[k] && c2.append(e2[1]);
                  a2.set(d2.substring(e2[0].length));
                } else {
                  d2 = d2.replace(g2, b2);
                  if (h && !i18n.phonenumbers.PhoneNumberUtil.matchesEntirely(f2, d2))
                    return false;
                  null != c2 && 0 < k && c2.append(e2[1]);
                  a2.set(d2);
                }
                return true;
              }
              return false;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.maybeStripExtension = function(a2) {
              var b2 = a2.toString(), c2 = b2.search(i18n.phonenumbers.PhoneNumberUtil.EXTN_PATTERN_);
              if (0 <= c2 && i18n.phonenumbers.PhoneNumberUtil.isViablePhoneNumber(b2.substring(0, c2))) {
                for (var d2 = b2.match(i18n.phonenumbers.PhoneNumberUtil.EXTN_PATTERN_), e2 = d2.length, f2 = 1; f2 < e2; ++f2)
                  if (null != d2[f2] && 0 < d2[f2].length)
                    return a2.clear(), a2.append(b2.substring(0, c2)), d2[f2];
              }
              return "";
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.checkRegionForParsing_ = function(a2, b2) {
              return this.isValidRegionCode_(b2) || null != a2 && 0 < a2.length && i18n.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN.test(a2);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.parse = function(a2, b2) {
              return this.parseHelper_(a2, b2, false, true);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.parseAndKeepRawInput = function(a2, b2) {
              if (!this.isValidRegionCode_(b2) && 0 < a2.length && a2.charAt(0) != i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN)
                throw Error(i18n.phonenumbers.Error.INVALID_COUNTRY_CODE);
              return this.parseHelper_(a2, b2, true, true);
            };
            i18n.phonenumbers.PhoneNumberUtil.setItalianLeadingZerosForPhoneNumber_ = function(a2, b2) {
              if (1 < a2.length && "0" == a2.charAt(0)) {
                b2.setItalianLeadingZero(true);
                for (var c2 = 1; c2 < a2.length - 1 && "0" == a2.charAt(c2); )
                  c2++;
                1 != c2 && b2.setNumberOfLeadingZeros(c2);
              }
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.parseHelper_ = function(a2, b2, c2, d2) {
              if (null == a2)
                throw Error(i18n.phonenumbers.Error.NOT_A_NUMBER);
              if (a2.length > i18n.phonenumbers.PhoneNumberUtil.MAX_INPUT_STRING_LENGTH_)
                throw Error(i18n.phonenumbers.Error.TOO_LONG);
              var e2 = new goog.string.StringBuffer();
              this.buildNationalNumberForParsing_(a2, e2);
              if (!i18n.phonenumbers.PhoneNumberUtil.isViablePhoneNumber(e2.toString()))
                throw Error(i18n.phonenumbers.Error.NOT_A_NUMBER);
              if (d2 && !this.checkRegionForParsing_(e2.toString(), b2))
                throw Error(i18n.phonenumbers.Error.INVALID_COUNTRY_CODE);
              d2 = new i18n.phonenumbers.PhoneNumber();
              c2 && d2.setRawInput(a2);
              a2 = this.maybeStripExtension(e2);
              0 < a2.length && d2.setExtension(a2);
              var f2 = this.getMetadataForRegion(b2);
              a2 = new goog.string.StringBuffer();
              var g2 = 0, h = e2.toString();
              try {
                g2 = this.maybeExtractCountryCode(h, f2, a2, c2, d2);
              } catch (k) {
                if (k.message == i18n.phonenumbers.Error.INVALID_COUNTRY_CODE && i18n.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN.test(h)) {
                  if (h = h.replace(i18n.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN, ""), g2 = this.maybeExtractCountryCode(
                    h,
                    f2,
                    a2,
                    c2,
                    d2
                  ), 0 == g2)
                    throw k;
                } else
                  throw k;
              }
              0 != g2 ? (e2 = this.getRegionCodeForCountryCode(g2), e2 != b2 && (f2 = this.getMetadataForRegionOrCallingCode_(g2, e2))) : (i18n.phonenumbers.PhoneNumberUtil.normalizeSB_(e2), a2.append(e2.toString()), null != b2 ? (g2 = f2.getCountryCodeOrDefault(), d2.setCountryCode(g2)) : c2 && d2.clearCountryCodeSource());
              if (a2.getLength() < i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_)
                throw Error(i18n.phonenumbers.Error.TOO_SHORT_NSN);
              null != f2 && (b2 = new goog.string.StringBuffer(), e2 = new goog.string.StringBuffer(a2.toString()), this.maybeStripNationalPrefixAndCarrierCode(e2, f2, b2), f2 = this.testNumberLength_(e2.toString(), f2), g2 = i18n.phonenumbers.PhoneNumberUtil.ValidationResult, f2 != g2.TOO_SHORT && f2 != g2.IS_POSSIBLE_LOCAL_ONLY && f2 != g2.INVALID_LENGTH && (a2 = e2, c2 && 0 < b2.toString().length && d2.setPreferredDomesticCarrierCode(b2.toString())));
              c2 = a2.toString();
              a2 = c2.length;
              if (a2 < i18n.phonenumbers.PhoneNumberUtil.MIN_LENGTH_FOR_NSN_)
                throw Error(i18n.phonenumbers.Error.TOO_SHORT_NSN);
              if (a2 > i18n.phonenumbers.PhoneNumberUtil.MAX_LENGTH_FOR_NSN_)
                throw Error(i18n.phonenumbers.Error.TOO_LONG);
              i18n.phonenumbers.PhoneNumberUtil.setItalianLeadingZerosForPhoneNumber_(c2, d2);
              d2.setNationalNumber(parseInt(c2, 10));
              return d2;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.extractPhoneContext_ = function(a2) {
              var b2 = a2.indexOf(i18n.phonenumbers.PhoneNumberUtil.RFC3966_PHONE_CONTEXT_);
              if (-1 === b2)
                return null;
              b2 += i18n.phonenumbers.PhoneNumberUtil.RFC3966_PHONE_CONTEXT_.length;
              if (b2 >= a2.length)
                return "";
              var c2 = a2.indexOf(";", b2);
              return -1 !== c2 ? a2.substring(b2, c2) : a2.substring(b2);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.isPhoneContextValid_ = function(a2) {
              if (null == a2)
                return true;
              if (0 === a2.length)
                return false;
              var b2 = i18n.phonenumbers.PhoneNumberUtil.RFC3966_GLOBAL_NUMBER_DIGITS_PATTERN_.exec(a2);
              a2 = i18n.phonenumbers.PhoneNumberUtil.RFC3966_DOMAINNAME_PATTERN_.exec(a2);
              return null !== b2 || null !== a2;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.buildNationalNumberForParsing_ = function(a2, b2) {
              var c2 = i18n.phonenumbers.PhoneNumberUtil.prototype.extractPhoneContext_(a2);
              if (!i18n.phonenumbers.PhoneNumberUtil.prototype.isPhoneContextValid_(c2))
                throw Error(i18n.phonenumbers.Error.NOT_A_NUMBER);
              if (null != c2) {
                c2.charAt(0) === i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN && b2.append(c2);
                c2 = a2.indexOf(i18n.phonenumbers.PhoneNumberUtil.RFC3966_PREFIX_);
                c2 = 0 <= c2 ? c2 + i18n.phonenumbers.PhoneNumberUtil.RFC3966_PREFIX_.length : 0;
                var d2 = a2.indexOf(i18n.phonenumbers.PhoneNumberUtil.RFC3966_PHONE_CONTEXT_);
                b2.append(a2.substring(c2, d2));
              } else
                b2.append(i18n.phonenumbers.PhoneNumberUtil.extractPossibleNumber(null != a2 ? a2 : ""));
              a2 = b2.toString();
              c2 = a2.indexOf(i18n.phonenumbers.PhoneNumberUtil.RFC3966_ISDN_SUBADDRESS_);
              0 < c2 && (b2.clear(), b2.append(a2.substring(0, c2)));
            };
            i18n.phonenumbers.PhoneNumberUtil.copyCoreFieldsOnly_ = function(a2) {
              var b2 = new i18n.phonenumbers.PhoneNumber();
              b2.setCountryCode(a2.getCountryCodeOrDefault());
              b2.setNationalNumber(a2.getNationalNumberOrDefault());
              0 < a2.getExtensionOrDefault().length && b2.setExtension(a2.getExtensionOrDefault());
              a2.getItalianLeadingZero() && (b2.setItalianLeadingZero(true), b2.setNumberOfLeadingZeros(a2.getNumberOfLeadingZerosOrDefault()));
              return b2;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.isNumberMatch = function(a2, b2) {
              if ("string" == typeof a2)
                try {
                  var c2 = this.parse(a2, i18n.phonenumbers.PhoneNumberUtil.UNKNOWN_REGION_);
                } catch (f2) {
                  if (f2.message != i18n.phonenumbers.Error.INVALID_COUNTRY_CODE)
                    return i18n.phonenumbers.PhoneNumberUtil.MatchType.NOT_A_NUMBER;
                  if ("string" != typeof b2) {
                    var d2 = this.getRegionCodeForCountryCode(b2.getCountryCodeOrDefault());
                    if (d2 != i18n.phonenumbers.PhoneNumberUtil.UNKNOWN_REGION_) {
                      try {
                        c2 = this.parse(a2, d2);
                      } catch (g2) {
                        return i18n.phonenumbers.PhoneNumberUtil.MatchType.NOT_A_NUMBER;
                      }
                      var e2 = this.isNumberMatch(c2, b2);
                      return e2 == i18n.phonenumbers.PhoneNumberUtil.MatchType.EXACT_MATCH ? i18n.phonenumbers.PhoneNumberUtil.MatchType.NSN_MATCH : e2;
                    }
                  }
                  try {
                    c2 = this.parseHelper_(a2, null, false, false);
                  } catch (g2) {
                    return i18n.phonenumbers.PhoneNumberUtil.MatchType.NOT_A_NUMBER;
                  }
                }
              else
                c2 = a2.clone();
              if ("string" == typeof b2)
                try {
                  return e2 = this.parse(b2, i18n.phonenumbers.PhoneNumberUtil.UNKNOWN_REGION_), this.isNumberMatch(a2, e2);
                } catch (f2) {
                  return f2.message != i18n.phonenumbers.Error.INVALID_COUNTRY_CODE ? i18n.phonenumbers.PhoneNumberUtil.MatchType.NOT_A_NUMBER : this.isNumberMatch(b2, c2);
                }
              else
                e2 = b2.clone();
              a2 = i18n.phonenumbers.PhoneNumberUtil.copyCoreFieldsOnly_(c2);
              e2 = i18n.phonenumbers.PhoneNumberUtil.copyCoreFieldsOnly_(e2);
              if (a2.hasExtension() && e2.hasExtension() && a2.getExtension() != e2.getExtension())
                return i18n.phonenumbers.PhoneNumberUtil.MatchType.NO_MATCH;
              b2 = a2.getCountryCodeOrDefault();
              c2 = e2.getCountryCodeOrDefault();
              if (0 != b2 && 0 != c2)
                return a2.equals(e2) ? i18n.phonenumbers.PhoneNumberUtil.MatchType.EXACT_MATCH : b2 == c2 && this.isNationalNumberSuffixOfTheOther_(a2, e2) ? i18n.phonenumbers.PhoneNumberUtil.MatchType.SHORT_NSN_MATCH : i18n.phonenumbers.PhoneNumberUtil.MatchType.NO_MATCH;
              a2.setCountryCode(0);
              e2.setCountryCode(0);
              return a2.equals(e2) ? i18n.phonenumbers.PhoneNumberUtil.MatchType.NSN_MATCH : this.isNationalNumberSuffixOfTheOther_(a2, e2) ? i18n.phonenumbers.PhoneNumberUtil.MatchType.SHORT_NSN_MATCH : i18n.phonenumbers.PhoneNumberUtil.MatchType.NO_MATCH;
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.isNationalNumberSuffixOfTheOther_ = function(a2, b2) {
              a2 = "" + a2.getNationalNumber();
              b2 = "" + b2.getNationalNumber();
              return goog.string.endsWith(a2, b2) || goog.string.endsWith(b2, a2);
            };
            i18n.phonenumbers.PhoneNumberUtil.prototype.canBeInternationallyDialled = function(a2) {
              var b2 = this.getMetadataForRegion(this.getRegionCodeForNumber(a2));
              if (null == b2)
                return true;
              a2 = this.getNationalSignificantNumber(a2);
              return !this.isNumberMatchingDesc_(a2, b2.getNoInternationalDialling());
            };
            i18n.phonenumbers.PhoneNumberUtil.matchesEntirely = function(a2, b2) {
              return (a2 = "string" == typeof a2 ? b2.match("^(?:" + a2 + ")$") : b2.match(a2)) && a2[0].length == b2.length ? true : false;
            };
            i18n.phonenumbers.PhoneNumberUtil.matchesPrefix = function(a2, b2) {
              return (a2 = "string" == typeof a2 ? b2.match("^(?:" + a2 + ")") : b2.match(a2)) && goog.string.startsWith(b2, a2[0]) ? true : false;
            };
            i18n.phonenumbers.shortnumbermetadata = {};
            i18n.phonenumbers.shortnumbermetadata.countryCodeToRegionCodeMap = { 0: "AC AD AE AF AG AI AL AM AO AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BW BY BZ CA CC CD CF CG CH CI CK CL CM CN CO CR CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EH ER ES ET FI FJ FK FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GR GT GU GW GY HK HN HR HT HU ID IE IL IM IN IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PM PR PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TC TD TG TH TJ TL TM TN TO TR TT TV TW TZ UA UG US UY UZ VA VC VE VG VI VN VU WF WS XK YE YT ZA ZM ZW".split(" ") };
            i18n.phonenumbers.shortnumbermetadata.countryToMetadata = {
              AC: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:11|99)", , , , "911"], [, , , , , , , , , [-1]], , , , "AC", , , , , , , , , , , , , , , , , , [, , "9(?:11|99)", , , , "911"], , [, , "9(?:11|99)", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              AD: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "11[0268]", , , , "110"], [, , , , , , , , , [-1]], , , , "AD", , , , , , , , , , , , , , , , , , [, , "11[0268]", , , , "110"], , [, , "11[0268]", , , , "110"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              AE: [, [, , "[149]\\d{2,3}", , , , , , , [3, 4]], , , [
                ,
                ,
                "112|99[7-9]",
                ,
                ,
                ,
                "112",
                ,
                ,
                [3]
              ], [, , , , , , , , , [-1]], , , , "AE", , , , , , , , , , , , , , , , , , [, , "112|99[7-9]", , , , "112", , , [3]], , [, , "112|445[16]|99[7-9]", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , "445\\d", , , , "4450", , , [4]]],
              AF: [, [, , "[14]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "1(?:0[02]|19)", , , , "100", , , [3]], [, , , , , , , , , [-1]], , , , "AF", , , , , , , , , , , , , , , , , , [, , "1(?:0[02]|19)", , , , "100", , , [3]], , [, , "1(?:0[02]|19)|40404", , , , "100"], [, , , , , , , , , [-1]], [, , "404\\d\\d", , , , "40400", , , [5]], , [, , "404\\d\\d", , , , "40400", , , [5]]],
              AG: [
                ,
                [, , "[19]\\d\\d", , , , , , , [3]],
                ,
                ,
                [, , "9(?:11|88|99)", , , , "911"],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "AG",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "9(?:11|99)", , , , "911"],
                ,
                [, , "176|9(?:11|88|99)", , , , "176"],
                [, , , , , , , , , [-1]],
                [, , "176", , , , "176"],
                ,
                [, , "176", , , , "176"]
              ],
              AI: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], , , , "AI", , , , , , , , , , , , , , , , , , [, , "911", , , , "911"], , [, , "176|9(?:11|88)", , , , "176"], [, , , , , , , , , [-1]], [, , "176", , , , "176"], , [, , "176", , , , "176"]],
              AL: [, [, , "[15]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "1(?:1(?:2|6[01]\\d\\d)|2[7-9]|3[15]|41)", , , , "112", , , [3, 6]], [
                ,
                ,
                "5\\d{4}",
                ,
                ,
                ,
                "50000",
                ,
                ,
                [5]
              ], , , , "AL", , , , , , , , , , , , , , , , , , [, , "1(?:12|2[7-9])", , , , "112", , , [3]], , [, , "1(?:1(?:6(?:000|1(?:06|11|23))|8\\d\\d)|65\\d|89[12])|5\\d{4}|1(?:[1349]\\d|2[2-9])", , , , "110"], [, , , , , , , , , [-1]], [, , "123", , , , "123", , , [3]], , [, , "131|5\\d{4}", , , , "131", , , [3, 5]]],
              AM: [, [, , "[148]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "10[1-3]", , , , "101", , , [3]], [, , , , , , , , , [-1]], , , , "AM", , , , , , , , , , , , , , , , , , [, , "10[1-3]", , , , "101", , , [3]], , [, , "(?:1|8[1-7])\\d\\d|40404", , , , "100"], [, , , , , , , , , [-1]], [, , "404\\d\\d", , , , "40400", , , [5]], , [
                ,
                ,
                "404\\d\\d",
                ,
                ,
                ,
                "40400",
                ,
                ,
                [5]
              ]],
              AO: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "11[235]", , , , "112"], [, , , , , , , , , [-1]], , , , "AO", , , , , , , , , , , , , , , , , , [, , "11[235]", , , , "112"], , [, , "11[235]", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              AR: [, [, , "[01389]\\d{1,4}", , , , , , , [2, 3, 4, 5]], , , [, , "000|1(?:0[0-35-7]|1[0245]|2[015]|3[47]|4[478]|9)|911", , , , "19", , , [2, 3]], [, , , , , , , , , [-1]], , , , "AR", , , , , , , , , , , , , , , , , , [, , "10[017]|911", , , , "100", , , [3]], , [, , "000|1(?:0[0-35-7]|1[02-5]|2[015]|3[47]|4[478]|9)|3372|89338|911", , , , "19"], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], [, , "893\\d\\d", , , , "89300", , , [5]], , [, , "(?:337|893\\d)\\d", , , , "3370", , , [4, 5]]],
              AS: [, [, , "[49]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "9(?:11|88)", , , , "911", , , [3]], [, , , , , , , , , [-1]], , , , "AS", , , , , , , , , , , , , , , , , , [, , "911", , , , "911", , , [3]], , [, , "40404|9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , "404\\d\\d", , , , "40400", , , [5]]],
              AT: [
                ,
                [, , "[168]\\d\\d(?:\\d(?:\\d{2})?)?", , , , , , , [3, 4, 6]],
                ,
                ,
                [, , "1(?:12|2[0238]|3[03]|4[0-247])|1(?:16\\d\\d|4[58])\\d", , , , "112"],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "AT",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "1(?:[12]2|33|44)", , , , "112", , , [3]],
                ,
                [, , "1(?:1(?:2|6(?:00[06]|1(?:17|23)))|2[0238]|3[03]|4(?:[0-247]|5[05]|84))|(?:61|8108[1-3])0", , , , "112"],
                [, , , , , , , , , [-1]],
                [, , "610|810\\d{3}", , , , "610", , , [3, 6]],
                ,
                [, , , , , , , , , [-1]]
              ],
              AU: [, [, , "[0-27]\\d{2,7}", , , , , , , [3, 4, 5, 6, 7, 8]], , , [, , "000|1(?:06|12|258885|55\\d)|733", , , , "000", , , [3, 4, 7]], [, , "1(?:2(?:34|456)|9\\d{4,6})", , , , "1234", , , [4, 5, 6, 7, 8]], , , , "AU", , , , , , , , , , , , , , , , , , [, , "000|1(?:06|12)", , , , "000", , , [3]], , [
                ,
                ,
                "000|1(?:06|1(?:00|2|9[46])|2(?:014[1-3]|[23]\\d|(?:4|5\\d)\\d{2,3}|68[689]|72(?:20|3\\d\\d)|8(?:[013-9]\\d|2))|555|9\\d{4,6})|225|7(?:33|67)",
                ,
                ,
                ,
                "000"
              ], [, , "1(?:1[09]\\d|24733)|225|767", , , , "225", , , [3, 4, 6]], [, , "1(?:258885|55\\d)", , , , "1550", , , [4, 7]], , [, , "19\\d{4,6}", , , , "190000", , , [6, 7, 8]]],
              AW: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "100|911", , , , "100"], [, , , , , , , , , [-1]], , , , "AW", , , , , , , , , , , , , , , , , , [, , "100|911", , , , "100"], , [, , "1(?:00|18|76)|91[13]", , , , "100"], [, , , , , , , , , [-1]], [, , "176", , , , "176"], , [, , "176", , , , "176"]],
              AX: [, [, , "[17]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "112", , , , "112", , , [3]], [, , , , , , , , , [-1]], , , , "AX", , , , , , , , , , , , , , , , , , [, , "112", , , , "112", , , [3]], , [
                ,
                ,
                "112|75[12]\\d\\d",
                ,
                ,
                ,
                "112"
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              AZ: [, [, , "[148]\\d{2,3}", , , , , , , [3, 4]], , , [, , "1(?:0[1-3]|12)", , , , "101", , , [3]], [, , , , , , , , , [-1]], , , , "AZ", , , , , , , , , , , , , , , , , , [, , "1(?:0[1-3]|12)", , , , "101", , , [3]], , [, , "1(?:0[1-3]|12)|(?:404|880)0", , , , "101"], [, , , , , , , , , [-1]], [, , "(?:404|880)\\d", , , , "4040", , , [4]], , [, , "(?:404|880)\\d", , , , "4040", , , [4]]],
              BA: [, [, , "1\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "1(?:16\\d{3}|2[2-4])", , , , "122", , , [3, 6]], [, , , , , , , , , [-1]], , , , "BA", , , , , , , , , , , , , , , , , , [
                ,
                ,
                "12[2-4]",
                ,
                ,
                ,
                "122",
                ,
                ,
                [3]
              ], , [, , "1(?:16(?:00[06]|1(?:1[17]|23))|2(?:0[0-7]|[2-5]|6[0-26])|(?:[3-5]|7\\d)\\d\\d)|1(?:18|2[78])\\d\\d?", , , , "122"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              BB: [, [, , "[2-689]\\d\\d", , , , , , , [3]], , , [, , "988|[2359]11", , , , "211"], [, , , , , , , , , [-1]], , , , "BB", , , , , , , , , , , , , , , , , , [, , "[2359]11", , , , "211"], , [, , "988|[2-689]11", , , , "211"], [, , , , , , , , , [-1]], [, , "[468]11", , , , "411"], , [, , , , , , , , , [-1]]],
              BD: [
                ,
                [, , "[1579]\\d{2,4}", , , , , , , [3, 4, 5]],
                ,
                ,
                [, , "10[0-26]|[19]99", , , , "100", , , [3]],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "BD",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "10[0-2]|[19]99", , , , "100", , , [3]],
                ,
                [, , "1(?:0(?:[0-369]|5[1-4]|7[0-4]|8[0-29])|1[16-9]|2(?:[134]|2[0-5])|3(?:1\\d?|6[3-6])|5[2-9])|5012|786|9594|[19]99|1(?:0(?:50|6\\d)|33|4(?:0|1\\d))\\d", , , , "100"],
                [, , , , , , , , , [-1]],
                [, , "1(?:11|2[13])|(?:501|959)\\d|786", , , , "111", , , [3, 4]],
                ,
                [, , "959\\d", , , , "9590", , , [4]]
              ],
              BE: [, [, , "[1-9]\\d\\d(?:\\d(?:\\d{2})?)?", , , , , , , [3, 4, 6]], , , [, , "1(?:0[0-35-8]|1[0269]|7(?:12|77)|813)|(?:116|8)\\d{3}", , , , "100"], [
                ,
                ,
                "1(?:2[03]|40)4|(?:1(?:[24]1|3[01])|[2-79]\\d\\d)\\d",
                ,
                ,
                ,
                "1204",
                ,
                ,
                [4]
              ], , , , "BE", , , , , , , , , , , , , , , , , , [, , "1(?:0[01]|12)", , , , "100", , , [3]], , [, , "1(?:0[0-8]|16117|2(?:12|3[0-24])|313|414|5(?:1[05]|5[15]|66|95)|6(?:1[167]|36|6[16])|7(?:[07][017]|1[27-9]|22|33|65)|81[39])|[2-9]\\d{3}|11[02679]|1(?:1600|45)0|1(?:[2-4]9|78)9|1[2-4]0[47]", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , "[2-9]\\d{3}", , , , "2000", , , [4]]],
              BF: [, [, , "1\\d", , , , , , , [2]], , , [, , "1[78]", , , , "17"], [, , , , , , , , , [-1]], , , , "BF", , , , , , , , , , , , , , , , , , [, , "1[78]", , , , "17"], , [, , "1[78]", , , , "17"], [, , , , , , , , , [-1]], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], , [, , , , , , , , , [-1]]],
              BG: [, [, , "1\\d\\d(?:\\d{3})?", , , , , , , [3, 6]], , , [, , "1(?:1(?:2|6\\d{3})|50|6[06])", , , , "112"], [, , , , , , , , , [-1]], , , , "BG", , , , , , , , , , , , , , , , , , [, , "1(?:12|50|6[06])", , , , "112", , , [3]], , [, , "1(?:1(?:2|6(?:000|111))|50|6[06])", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              BH: [, [, , "[0189]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "(?:0[167]|81)\\d{3}|[19]99", , , , "199"], [, , "9[148]\\d{3}", , , , "91000", , , [5]], , , , "BH", , , , , , , , , , , , , , , , , , [, , "[19]99", , , , "199", , , [3]], , [
                ,
                ,
                "1(?:[02]\\d|12|4[01]|51|8[18]|9[169])|99[02489]|(?:0[167]|8[158]|9[148])\\d{3}",
                ,
                ,
                ,
                "100"
              ], [, , , , , , , , , [-1]], [, , "0[67]\\d{3}|88000|98555", , , , "06000", , , [5]], , [, , "88000|98555", , , , "88000", , , [5]]],
              BI: [, [, , "[16-9]\\d{2,3}", , , , , , , [3, 4]], , , [, , "11[237]|611", , , , "112", , , [3]], [, , , , , , , , , [-1]], , , , "BI", , , , , , , , , , , , , , , , , , [, , "11[237]", , , , "112", , , [3]], , [, , "1(?:1\\d|5[2-9]|6[0-256])|611|7(?:10|77|979)|8[28]8|900", , , , "110"], [, , , , , , , , , [-1]], [, , "611|7(?:10|77)|888|900", , , , "611", , , [3]], , [, , "(?:71|90)0", , , , "710", , , [3]]],
              BJ: [, [, , "[17]\\d{2,3}", , , , , , , [3, 4]], , , [, , "11[78]|7[3-5]\\d\\d", , , , "117"], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], , , , "BJ", , , , , , , , , , , , , , , , , , [, , "11[78]", , , , "117", , , [3]], , [, , "1(?:1[78]|2[02-5]|60)|7[0-5]\\d\\d", , , , "117"], [, , , , , , , , , [-1]], [, , "12[02-5]", , , , "120", , , [3]], , [, , , , , , , , , [-1]]],
              BL: [, [, , "1\\d", , , , , , , [2]], , , [, , "18", , , , "18"], [, , , , , , , , , [-1]], , , , "BL", , , , , , , , , , , , , , , , , , [, , "18", , , , "18"], , [, , "18", , , , "18"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              BM: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], , , , "BM", , , , , , , , , , , , , , , , , , [, , "911", , , , "911"], , [, , "176|9(?:11|88)", , , , "176"], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], [, , "176", , , , "176"], , [, , "176", , , , "176"]],
              BN: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "99[135]", , , , "991"], [, , , , , , , , , [-1]], , , , "BN", , , , , , , , , , , , , , , , , , [, , "99[135]", , , , "991"], , [, , "99[135]", , , , "991"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              BO: [, [, , "[14]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "11[089]", , , , "110", , , [3]], [, , , , , , , , , [-1]], , , , "BO", , , , , , , , , , , , , , , , , , [, , "11[089]", , , , "110", , , [3]], , [, , "11[089]|40404", , , , "110"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , "404\\d\\d", , , , "40400", , , [5]]],
              BQ: [, [
                ,
                ,
                "[19]\\d\\d",
                ,
                ,
                ,
                ,
                ,
                ,
                [3]
              ], , , [, , "112|911", , , , "112"], [, , , , , , , , , [-1]], , , , "BQ", , , , , , , , , , , , , , , , , , [, , "112|911", , , , "112"], , [, , "1(?:12|76)|911", , , , "112"], [, , , , , , , , , [-1]], [, , "176", , , , "176"], , [, , "176", , , , "176"]],
              BR: [, [, , "[1-69]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "1(?:00|12|28|8[015]|9[0-47-9])|4(?:57|82\\d)|911", , , , "100", , , [3, 4]], [, , , , , , , , , [-1]], , , , "BR", , , , , , , , , , , , , , , , , , [, , "1(?:12|28|9[023])|911", , , , "112", , , [3]], , [
                ,
                ,
                "1(?:0(?:[02]|3(?:1[2-579]|2[13-9]|3[124-9]|4[1-3578]|5[1-468]|6[139]|8[149]|9[168])|5[0-35-9]|6(?:0|1[0-35-8]?|2[0145]|3[0137]?|4[37-9]?|5[0-35]|6[016]?|7[137]?|8[5-8]|9[1359]))|1[25-8]|2[357-9]|3[024-68]|4[12568]|5\\d|6[0-8]|8[015]|9[0-47-9])|2(?:7(?:330|878)|85959?)|(?:32|91)1|4(?:0404?|57|828)|55555|6(?:0\\d{4}|10000)|(?:133|411)[12]",
                ,
                ,
                ,
                "100"
              ], [, , "102|273\\d\\d|321", , , , "102", , , [3, 5]], [, , "151|(?:278|555)\\d\\d|4(?:04\\d\\d?|11\\d|57)", , , , "151", , , [3, 4, 5]], , [, , "285\\d{2,3}|321|40404|(?:27[38]\\d|482)\\d|6(?:0\\d|10)\\d{3}", , , , "321"]],
              BS: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:1[19]|88)", , , , "911"], [, , , , , , , , , [-1]], , , , "BS", , , , , , , , , , , , , , , , , , [, , "91[19]", , , , "911"], , [, , "9(?:1[19]|88)", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              BT: [
                ,
                [, , "[14]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]],
                ,
                ,
                [, , "11[023]", , , , "110", , , [3]],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "BT",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "11[023]", , , , "110", , , [3]],
                ,
                [, , "11[0-6]|40404", , , , "110"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                [, , "404\\d\\d", , , , "40400", , , [5]]
              ],
              BW: [, [, , "[19]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "9(?:11|9[7-9])", , , , "911", , , [3]], [, , , , , , , , , [-1]], , , , "BW", , , , , , , , , , , , , , , , , , [, , "9(?:11|9[7-9])", , , , "911", , , [3]], , [, , "1(?:1[26]|3123)|9(?:1[14]|9[1-57-9])", , , , "112"], [, , , , , , , , , [-1]], [, , "131\\d\\d", , , , "13100", , , [5]], , [, , "131\\d\\d", , , , "13100", , , [5]]],
              BY: [
                ,
                [, , "1\\d\\d", , , , , , , [3]],
                ,
                ,
                [, , "1(?:0[1-3]|12)", , , , "101"],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "BY",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "1(?:0[1-3]|12)", , , , "101"],
                ,
                [, , "1(?:0[1-79]|1[246]|35|5[1-35]|6[89]|7[5-7]|8[58]|9[1-7])", , , , "101"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                [, , , , , , , , , [-1]]
              ],
              BZ: [, [, , "9\\d\\d?", , , , , , , [2, 3]], , , [, , "9(?:0|11|22|66|77|9[09])", , , , "90"], [, , , , , , , , , [-1]], , , , "BZ", , , , , , , , , , , , , , , , , , [, , "9(?:0|11|90)", , , , "90"], , [, , "9(?:0|11|22|66|77|9[09])", , , , "90"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              CA: [, [, , "[1-9]\\d\\d(?:\\d\\d(?:\\d(?:\\d{2})?)?)?", , , , , , , [3, 5, 6, 8]], , , [
                ,
                ,
                "112|988|[29]11",
                ,
                ,
                ,
                "112",
                ,
                ,
                [3]
              ], [, , , , , , , , , [-1]], , , , "CA", , , , , , , , , , , , , , , , , , [, , "112|911", , , , "112", , , [3]], , [, , "112|30000\\d{3}|[1-35-9]\\d{4,5}|[2-8]11|9(?:11|88)", , , , "112"], [, , , , , , , , , [-1]], [, , "[235-7]11", , , , "211", , , [3]], , [, , "300\\d{5}|[1-35-9]\\d{4,5}", , , , "10000", , , [5, 6, 8]]],
              CC: [, [, , "[01]\\d\\d", , , , , , , [3]], , , [, , "000|112", , , , "000"], [, , , , , , , , , [-1]], , , , "CC", , , , , , , , , , , , , , , , , , [, , "000|112", , , , "000"], , [, , "000|112", , , , "000"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              CD: [, [, , "[14]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [
                ,
                ,
                "1(?:1[348]|77|88)",
                ,
                ,
                ,
                "113",
                ,
                ,
                [3]
              ], [, , , , , , , , , [-1]], , , , "CD", , , , , , , , , , , , , , , , , , [, , "1(?:1[348]|77|88)", , , , "113", , , [3]], , [, , "1(?:1[348]|23|77|88)|40404", , , , "113"], [, , , , , , , , , [-1]], [, , "404\\d\\d", , , , "40400", , , [5]], , [, , "404\\d\\d", , , , "40400", , , [5]]],
              CF: [, [, , "1\\d{2,3}", , , , , , , [3, 4]], , , [, , "1(?:1[78]|22\\d)", , , , "117"], [, , , , , , , , , [-1]], , , , "CF", , , , , , , , , , , , , , , , , , [, , "1(?:1[78]|220)", , , , "117"], , [, , "1(?:1[478]|220)", , , , "114"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              CG: [, [, , "1\\d\\d", , , , , , , [3]], , , [
                ,
                ,
                "11[178]",
                ,
                ,
                ,
                "111"
              ], [, , , , , , , , , [-1]], , , , "CG", , , , , , , , , , , , , , , , , , [, , "11[78]", , , , "117"], , [, , "11[126-8]", , , , "111"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              CH: [, [, , "[1-9]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "1(?:1(?:[278]|6\\d{3})|4[47])|5200", , , , "112", , , [3, 4, 6]], [, , "1(?:14|8[0-2589])\\d|543|83111", , , , "543", , , [3, 4, 5]], , , , "CH", , , , , , , , , , , , , , , , , , [, , "1(?:1[278]|44)", , , , "112", , , [3]], , [
                ,
                ,
                "1(?:0[78]\\d\\d|1(?:[278]|45|6(?:000|111))|4(?:[03-57]|1[0145])|6(?:00|[1-46])|8(?:02|1[189]|[25]0|7|8[08]|99))|[2-9]\\d{2,4}",
                ,
                ,
                ,
                "112"
              ], [, , "1(?:4[035]|6[1-46])|1(?:41|60)\\d", , , , "140", , , [3, 4]], [, , "5(?:200|35)", , , , "535", , , [3, 4]], , [, , "[2-9]\\d{2,4}", , , , "200", , , [3, 4, 5]]],
              CI: [, [, , "[14]\\d{2,3}", , , , , , , [3, 4]], , , [, , "1(?:1[01]|[78]0)", , , , "110", , , [3]], [, , , , , , , , , [-1]], , , , "CI", , , , , , , , , , , , , , , , , , [, , "1(?:1[01]|[78]0)", , , , "110", , , [3]], , [, , "1(?:1[01]|[78]0)|4443", , , , "110"], [, , , , , , , , , [-1]], [, , "444\\d", , , , "4440", , , [4]], , [, , "444\\d", , , , "4440", , , [4]]],
              CK: [
                ,
                [, , "9\\d\\d", , , , , , , [3]],
                ,
                ,
                [, , "99[689]", , , , "996"],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "CK",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "99[689]", , , , "996"],
                ,
                [, , "99[689]", , , , "996"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                [, , , , , , , , , [-1]]
              ],
              CL: [
                ,
                [, , "[1-9]\\d{2,4}", , , , , , , [3, 4, 5]],
                ,
                ,
                [, , "1(?:213|3[1-3])|434\\d|911", , , , "131", , , [3, 4]],
                [, , "1(?:211|3(?:13|[348]0|5[01]))|(?:1(?:[05]6|[48]1|9[18])|2(?:01\\d|[23]2|77|88)|3(?:0[59]|13|3[279]|66)|4(?:[12]4|36\\d|4[017]|55)|5(?:00|41\\d|5[67]|99)|6(?:07\\d|13|22|3[06]|50|69)|787|8(?:[01]1|[48]8)|9(?:01|[12]0|33))\\d", , , , "1060", , , [4, 5]],
                ,
                ,
                ,
                "CL",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "13[1-3]|911", , , , "131", , , [3]],
                ,
                [, , "1(?:00|21[13]|3(?:13|[348]0|5[01])|4(?:0[02-6]|17|[379])|818|919)|2(?:0(?:01|122)|22[47]|323|777|882)|3(?:0(?:51|99)|132|3(?:29|[37]7)|665)|43656|5(?:(?:00|415)4|5(?:66|77)|995)|6(?:131|222|366|699)|7878|8(?:011|11[28]|482|889)|9(?:01|1)1|13\\d|4(?:[13]42|243|4(?:02|15|77)|554)|(?:1(?:[05]6|98)|339|6(?:07|[35])0|9(?:[12]0|33))0", , , , "100"],
                [, , "(?:200|333)\\d", , , , "2000", , , [4]],
                [, , , , , , , , , [-1]],
                ,
                [
                  ,
                  ,
                  "13(?:13|[348]0|5[01])|(?:1(?:[05]6|[28]1|4[01]|9[18])|2(?:0(?:0|1\\d)|[23]2|77|88)|3(?:0[59]|13|3[2379]|66)|436\\d|5(?:00|41\\d|5[67]|99)|6(?:07\\d|13|22|3[06]|50|69)|787|8(?:[01]1|[48]8)|9(?:01|[12]0|33))\\d|4(?:[1-3]4|4[017]|55)\\d",
                  ,
                  ,
                  ,
                  "1060",
                  ,
                  ,
                  [4, 5]
                ]
              ],
              CM: [, [, , "[18]\\d{1,3}", , , , , , , [2, 3, 4]], , , [, , "1(?:1[37]|[37])", , , , "13", , , [2, 3]], [, , , , , , , , , [-1]], , , , "CM", , , , , , , , , , , , , , , , , , [, , "1(?:1[37]|[37])", , , , "13", , , [2, 3]], , [, , "1(?:1[37]|[37])|8711", , , , "13"], [, , , , , , , , , [-1]], [, , "871\\d", , , , "8710", , , [4]], , [, , "871\\d", , , , "8710", , , [4]]],
              CN: [
                ,
                [, , "[19]\\d\\d(?:\\d{2,3})?", , , , , , , [3, 5, 6]],
                ,
                ,
                [, , "1(?:1[09]|20)", , , , "110", , , [3]],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "CN",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "1(?:1[09]|20)", , , , "110", , , [3]],
                ,
                [, , "1(?:00\\d\\d|1[029]|20)|95\\d{3,4}", , , , "110"],
                [, , "1(?:00\\d\\d|12)|95\\d{3,4}", , , , "112"],
                [, , , , , , , , , [-1]],
                ,
                [, , , , , , , , , [-1]]
              ],
              CO: [, [, , "[1-589]\\d\\d(?:\\d{2,3})?", , , , , , , [3, 5, 6]], , , [, , "1(?:1[29]|23|32|56)", , , , "112", , , [3]], [, , , , , , , , , [-1]], , , , "CO", , , , , , , , , , , , , , , , , , [, , "1(?:1[29]|23|32|56)", , , , "112", , , [3]], , [, , "1(?:06|1[2-9]|2[35-7]|3[27]|4[467]|5[36]|6[4-7]|95)|(?:29002|39003)9|40404|5930\\d\\d|85432|(?:[2359][57]|8(?:7|9\\d))\\d{3}", , , , "106"], [, , , , , , , , , [-1]], [, , "(?:40|85)4\\d\\d", , , , "40400", , , [5]], , [, , "(?:40|85)4\\d\\d", , , , "40400", , , [5]]],
              CR: [, [
                ,
                ,
                "[1359]\\d{2,3}",
                ,
                ,
                ,
                ,
                ,
                ,
                [3, 4]
              ], , , [, , "112|911", , , , "112", , , [3]], [, , , , , , , , , [-1]], , , , "CR", , , , , , , , , , , , , , , , , , [, , "112|911", , , , "112", , , [3]], , [, , "1(?:0(?:00|15|2[2-4679])|1(?:1[0-35-9]|2|37|[46]6|7[57]|8[79]|9[0-379])|2(?:00|[12]2|34|55)|3(?:21|33)|4(?:0[06]|1[4-6])|5(?:15|5[15])|693|7(?:00|1[7-9]|2[02]|[67]7)|975)|3855|5(?:0(?:30|49)|510)|911", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , "(?:385|5(?:0[34]|51))\\d", , , , "3850", , , [4]]],
              CU: [, [, , "[12]\\d\\d(?:\\d{3,4})?", , , , , , , [3, 6, 7]], , , [
                ,
                ,
                "10[4-7]|(?:116|204\\d)\\d{3}",
                ,
                ,
                ,
                "104"
              ], [, , , , , , , , , [-1]], , , , "CU", , , , , , , , , , , , , , , , , , [, , "10[4-6]", , , , "104", , , [3]], , [, , "1(?:0[4-7]|1(?:6111|8)|40)|2045252", , , , "104"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              CV: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "13[0-2]", , , , "130"], [, , , , , , , , , [-1]], , , , "CV", , , , , , , , , , , , , , , , , , [, , "13[0-2]", , , , "130"], , [, , "13[0-2]", , , , "130"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              CW: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "112|911", , , , "112"], [, , , , , , , , , [-1]], , , , "CW", , , , , , , , , , , , , , , , , , [, , "112|911", , , , "112"], , [
                ,
                ,
                "1(?:12|76)|911",
                ,
                ,
                ,
                "112"
              ], [, , , , , , , , , [-1]], [, , "176", , , , "176"], , [, , "176", , , , "176"]],
              CX: [, [, , "[01]\\d\\d", , , , , , , [3]], , , [, , "000|112", , , , "000"], [, , , , , , , , , [-1]], , , , "CX", , , , , , , , , , , , , , , , , , [, , "000|112", , , , "000"], , [, , "000|112", , , , "000"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              CY: [, [, , "1\\d\\d(?:\\d{3})?", , , , , , , [3, 6]], , , [, , "1(?:1(?:2|6\\d{3})|99)", , , , "112"], [, , , , , , , , , [-1]], , , , "CY", , , , , , , , , , , , , , , , , , [, , "1(?:12|99)", , , , "112", , , [3]], , [, , "1(?:1(?:2|6(?:000|111))|99)", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ]],
              CZ: [, [, , "1\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "1(?:1(?:2|6(?:00[06]|1(?:11|23)))|5\\d)", , , , "112", , , [3, 6]], [, , , , , , , , , [-1]], , , , "CZ", , , , , , , , , , , , , , , , , , [, , "1(?:12|5\\d)", , , , "112", , , [3]], , [, , "1(?:1(?:2|8\\d)|(?:2|3\\d)\\d{2,3}|5\\d|99)|1(?:16|4)\\d{3}", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              DE: [, [, , "1\\d\\d(?:\\d{2,3})?", , , , , , , [3, 5, 6]], , , [, , "11(?:[02]|6\\d{3})", , , , "110", , , [3, 6]], [, , , , , , , , , [-1]], , , , "DE", , , , , , , , , , , , , , , , , , [, , "11[02]", , , , "110", , , [3]], , [
                ,
                ,
                "11(?:[025]|6(?:00[06]|1(?:1[167]|23))|800\\d)|118\\d\\d",
                ,
                ,
                ,
                "110"
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              DJ: [, [, , "1\\d", , , , , , , [2]], , , [, , "1[78]", , , , "17"], [, , , , , , , , , [-1]], , , , "DJ", , , , , , , , , , , , , , , , , , [, , "1[78]", , , , "17"], , [, , "1[78]", , , , "17"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              DK: [, [, , "1\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "11(?:[24]|6\\d{3})", , , , "112", , , [3, 6]], [, , , , , , , , , [-1]], , , , "DK", , , , , , , , , , , , , , , , , , [, , "11[24]", , , , "112", , , [3]], , [, , "1(?:1(?:[2-48]|6(?:00[06]|111))|619[0-2]|8(?:01|1[0238]|28|30|5[13]|8[18]))", , , , "112"], [, , , , , , , , , [-1]], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], , [, , , , , , , , , [-1]]],
              DM: [, [, , "[39]\\d\\d", , , , , , , [3]], , , [, , "333|9(?:11|88|99)", , , , "333"], [, , , , , , , , , [-1]], , , , "DM", , , , , , , , , , , , , , , , , , [, , "333|9(?:11|99)", , , , "333"], , [, , "333|9(?:11|88|99)", , , , "333"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              DO: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "112|9(?:11|88)", , , , "112"], [, , , , , , , , , [-1]], , , , "DO", , , , , , , , , , , , , , , , , , [, , "112|911", , , , "112"], , [, , "112|9(?:11|88)", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              DZ: [
                ,
                [, , "[17]\\d{1,3}", , , , , , , [2, 3, 4]],
                ,
                ,
                [, , "1(?:12|[47]|54\\d)", , , , "14"],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "DZ",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "1(?:12|[47])", , , , "14", , , [2, 3]],
                ,
                [, , "1(?:055|12|[47]|548)|730", , , , "14"],
                [, , , , , , , , , [-1]],
                [, , "730", , , , "730", , , [3]],
                ,
                [, , "730", , , , "730", , , [3]]
              ],
              EC: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "1(?:0[12]|12)|911", , , , "101"], [, , , , , , , , , [-1]], , , , "EC", , , , , , , , , , , , , , , , , , [, , "1(?:0[12]|12)|911", , , , "101"], , [, , "1(?:0[12]|12)|911", , , , "101"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              EE: [, [, , "1\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [
                ,
                ,
                "1(?:1(?:[02]|6\\d{3})|2(?:05|28)|3(?:014|3(?:21|5\\d?)|660)|492|5(?:1[03]|410|501)|6(?:112|333|644)|7(?:012|127|89)|8(?:10|8[57])|9(?:0[134]|14))",
                ,
                ,
                ,
                "110"
              ], [
                ,
                ,
                "1(?:18(?:00|[12458]\\d?)|2(?:0(?:[02-46-8]\\d?|1[0-36])|1(?:[0-4]\\d?|6[06])|2(?:[0-4]\\d?|5[25])|[367]|4(?:0[04]|[12]\\d?|4[24]|54)|55[12457])|3(?:0(?:[02]\\d?|1[13578]|3[356])|1[1347]|2[02-5]|3(?:[01347]\\d?|2[023]|88)|4(?:[35]\\d?|4[34])|5(?:3[134]|5[035])|666)|4(?:2(?:00|4\\d?)|4(?:0[01358]|1[024]|50|7\\d?)|900)|5(?:0[0-35]|1(?:[1267]\\d?|5[0-7]|82)|2(?:[014-6]\\d?|22)|330|4(?:[35]\\d?|44)|5(?:00|[1-69]\\d?)|9(?:[159]\\d?|[38]0|77))|6(?:1(?:00|1[19]|[35-9]\\d?)|2(?:2[26]|[68]\\d?)|3(?:22|36|6[36])|5|6(?:[0-359]\\d?|6[0-26])|7(?:00|55|7\\d?|8[89])|9(?:00|1\\d?|69))|7(?:0(?:[023]\\d?|1[0578])|1(?:00|2[034]|[4-9]\\d?)|2(?:[07]\\d?|20|44)|7(?:[0-57]\\d?|9[79])|8(?:0[08]|2\\d?|8[0178])|9(?:00|97))|8(?:1[127]|8[1268]|9[269])|9(?:0(?:[02]\\d?|69|9[0269])|1[1-3689]|21))",
                ,
                ,
                ,
                "123",
                ,
                ,
                [3, 4, 5]
              ], , , , "EE", , , , , , , , , , , , , , , , , , [, , "11[02]", , , , "110", , , [3]], , [, , "1(?:1(?:[02-579]|6(?:000|111)|8(?:[09]\\d|[1-8]))|2[36-9]|3[7-9]|4[05-7]|5[6-8]|6[05]|7[3-6]|8[02-7]|9[3-9])|1(?:2[0-245]|3[0-6]|4[1-489]|5[0-59]|6[1-46-9]|7[0-27-9]|8[189]|9[0-2])\\d\\d?", , , , "110"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [
                ,
                ,
                "1(?:18[1258]|2(?:0(?:1[036]|[46]\\d?)|166|21|4(?:0[04]|1\\d?|5[47])|[67])|3(?:0(?:1[13-578]|2\\d?|3[56])|1[15]|2[045]|3(?:[13]\\d?|2[13])|43|5(?:00|3[34]|53))|44(?:0[0135]|14|50|7\\d?)|5(?:05|1(?:[12]\\d?|5[1246]|8[12])|2(?:[01]\\d?|22)|3(?:00|3[03])|4(?:15|5\\d?)|500|9(?:5\\d?|77|80))|6(?:1[35-8]|226|3(?:22|3[36]|66)|644|7(?:00|7\\d?|89)|9(?:00|69))|7(?:01[258]|1(?:00|[15]\\d?)|2(?:44|7\\d?)|8(?:00|87|9\\d?))|8(?:1[128]|8[56]|9(?:[26]\\d?|77))|90(?:2\\d?|69|92))",
                ,
                ,
                ,
                "126",
                ,
                ,
                [3, 4, 5]
              ]],
              EG: [, [, , "[13]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "1(?:2[23]|80)", , , , "122", , , [3]], [, , , , , , , , , [-1]], , , , "EG", , , , , , , , , , , , , , , , , , [, , "1(?:2[23]|80)", , , , "122", , , [3]], , [, , "1(?:2[23]|[69]\\d{3}|80)|34400", , , , "122"], [, , , , , , , , , [-1]], [, , "344\\d\\d", , , , "34400", , , [5]], , [, , "344\\d\\d", , , , "34400", , , [5]]],
              EH: [, [, , "1\\d\\d?", , , , , , , [2, 3]], , , [, , "1(?:[59]|77)", , , , "15"], [, , , , , , , , , [-1]], , , , "EH", , , , , , , , , , , , , , , , , , [, , "1(?:[59]|77)", , , , "15"], , [, , "1(?:[59]|77)", , , , "15"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ]],
              ER: [, [, , "[12]\\d\\d(?:\\d{3})?", , , , , , , [3, 6]], , , [, , "11[2-46]|(?:12[47]|20[12])\\d{3}", , , , "112"], [, , , , , , , , , [-1]], , , , "ER", , , , , , , , , , , , , , , , , , [, , "1(?:1[2-46]|24422)|20(?:1(?:606|917)|2914)|(?:1277|2020)99", , , , "112"], , [, , "1(?:1[2-6]|24422)|20(?:1(?:606|917)|2914)|(?:1277|2020)99", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              ES: [, [, , "[0-379]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "0(?:16|6[57]|8[58])|1(?:006|12|[3-7]\\d\\d)|(?:116|20\\d)\\d{3}", , , , "016", , , [3, 4, 6]], [
                ,
                ,
                "[12]2\\d{1,4}|90(?:5\\d|7)|(?:118|2(?:[357]\\d|80)|3[357]\\d)\\d\\d|[79]9[57]\\d{3}",
                ,
                ,
                ,
                "120"
              ], , , , "ES", , , , , , , , , , , , , , , , , , [, , "08[58]|112", , , , "085", , , [3]], , [, , "0(?:1[0-26]|6[0-257]|8[058]|9[12])|1(?:0[03-57]\\d{1,3}|1(?:2|6(?:000|111)|8\\d\\d)|2\\d{1,4}|[3-9]\\d\\d)|2(?:2\\d{1,4}|80\\d\\d)|90(?:5[124578]|7)|1(?:3[34]|77)|(?:2[01]\\d|[79]9[57])\\d{3}|[23][357]\\d{3}", , , , "010"], [, , "0(?:[16][0-2]|80|9[12])|21\\d{4}", , , , "010", , , [3, 6]], [, , "1(?:3[34]|77)|[12]2\\d{1,4}", , , , "120"], , [, , "(?:2[0-2]\\d|3[357]|[79]9[57])\\d{3}|2(?:[2357]\\d|80)\\d\\d", , , , "22000", , , [5, 6]]],
              ET: [, [
                ,
                ,
                "9\\d\\d?",
                ,
                ,
                ,
                ,
                ,
                ,
                [2, 3]
              ], , , [, , "9(?:07|11?|2|39?|9[17])", , , , "91"], [, , , , , , , , , [-1]], , , , "ET", , , , , , , , , , , , , , , , , , [, , "9(?:11?|2|39?|9[17])", , , , "91"], , [, , "9(?:07|11?|2|39?|45|9[17])", , , , "91"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              FI: [, [, , "[17]\\d\\d(?:\\d{2,3})?", , , , , , , [3, 5, 6]], , , [, , "11(?:2|6\\d{3})", , , , "112", , , [3, 6]], [, , , , , , , , , [-1]], , , , "FI", , , , , , , , , , , , , , , , , , [, , "112", , , , "112", , , [3]], , [, , "11(?:2|6(?:00[06]|1(?:1[17]|23)))|75[12]\\d\\d", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              FJ: [, [
                ,
                ,
                "[0-579]\\d(?:\\d(?:\\d{2})?)?",
                ,
                ,
                ,
                ,
                ,
                ,
                [2, 3, 5]
              ], , , [, , "91[17]", , , , "911", , , [3]], [, , , , , , , , , [-1]], , , , "FJ", , , , , , , , , , , , , , , , , , [, , "91[17]", , , , "911", , , [3]], , [, , "0(?:1[34]|8[1-4])|1(?:0[1-3]|[25]9)|2[289]|30|40404|91[137]|[45]4|75", , , , "22"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , "404\\d\\d", , , , "40400", , , [5]]],
              FK: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "999", , , , "999"], [, , , , , , , , , [-1]], , , , "FK", , , , , , , , , , , , , , , , , , [, , "999", , , , "999"], , [, , "1\\d\\d|999", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              FM: [
                ,
                [, , "[39]\\d\\d(?:\\d{3})?", , , , , , , [3, 6]],
                ,
                ,
                [, , "320\\d{3}|911", , , , "911"],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "FM",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "(?:32022|91)1", , , , "911"],
                ,
                [, , "(?:32022|91)1", , , , "911"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                [, , , , , , , , , [-1]]
              ],
              FO: [, [, , "1\\d{2,3}", , , , , , , [3, 4]], , , [, , "1(?:1[24]|81\\d)", , , , "112"], [, , , , , , , , , [-1]], , , , "FO", , , , , , , , , , , , , , , , , , [, , "11[24]", , , , "112", , , [3]], , [, , "1(?:1[248]|819)|1(?:4[124]|71|8[7-9])\\d", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              FR: [, [, , "[1-8]\\d{1,5}", , , , , , , [2, 3, 4, 5, 6]], , , [
                ,
                ,
                "1(?:0(?:07|[13]3)|1[02459]|[578]|9[167])|224|(?:3370|74)0|(?:116\\d|3[01])\\d\\d",
                ,
                ,
                ,
                "15"
              ], [, , "366\\d\\d|3[2-9]\\d\\d|(?:118|[4-8]\\d)\\d{3}", , , , "3200", , , [4, 5, 6]], , , , "FR", , , , , , , , , , , , , , , , , , [, , "1(?:12|[578])", , , , "15", , , [2, 3]], , [, , "1(?:0\\d\\d|1(?:[02459]|6(?:000|111)|8\\d{3})|[578]|9[167])|2(?:0(?:00|2)0|24)|[3-8]\\d{4}|3\\d{3}|6(?:1[14]|34)|7(?:0[06]|22|40)", , , , "15"], [, , "10(?:[134]4|2[23]|5\\d|99)|202\\d|634|70[06]|(?:106|61)[14]", , , , "611", , , [3, 4]], [, , "118777|224|6(?:1[14]|34)|7(?:0[06]|22|40)|20(?:0\\d|2)\\d", , , , "224", , , [3, 4, 5, 6]], , [, , "114|[3-8]\\d{4}", , , , "114", , , [3, 5]]],
              GA: [
                ,
                [, , "1\\d(?:\\d{2})?", , , , , , , [2, 4]],
                ,
                ,
                [, , "18|1(?:3\\d|73)\\d", , , , "18"],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "GA",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "1(?:3\\d\\d|730|8)", , , , "18"],
                ,
                [, , "1(?:3\\d\\d|730|8)", , , , "18"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                [, , , , , , , , , [-1]]
              ],
              GB: [, [, , "[1-46-9]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "1(?:05|1(?:[29]|6\\d{3})|7[56]\\d|8000)|2(?:20\\d|48)|4444|999", , , , "105"], [, , , , , , , , , [-1]], , , , "GB", , , , , , , , , , , , , , , , , , [, , "112|999", , , , "112", , , [3]], , [
                ,
                ,
                "1(?:0[015]|1(?:[129]|6(?:000|1(?:11|23))|8\\d{3})|2(?:[1-3]|50)|33|4(?:1|7\\d)|571|7(?:0\\d|[56]0)|800\\d|9[15])|2(?:0202|1300|2(?:02|11)|3(?:02|336|45)|4(?:25|8))|3[13]3|4(?:0[02]|35[01]|44[45]|5\\d)|(?:[68]\\d|7[089])\\d{3}|15\\d|2[02]2|650|789|9(?:01|99)",
                ,
                ,
                ,
                "100"
              ], [, , , , , , , , , [-1]], [, , "1(?:(?:25|7[56])\\d|571)|2(?:02(?:\\d{2})?|[13]3\\d\\d|48)|4444|901", , , , "202", , , [3, 4, 5]], , [, , "(?:125|2(?:020|13\\d)|(?:7[089]|8[01])\\d\\d)\\d", , , , "1250", , , [4, 5]]],
              GD: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], , , , "GD", , , , , , , , , , , , , , , , , , [, , "911", , , , "911"], , [, , "176|9(?:11|88)", , , , "176"], [, , , , , , , , , [-1]], [, , "176", , , , "176"], , [, , "176", , , , "176"]],
              GE: [, [, , "[014]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "0(?:11|33)|11[1-3]|[01]22", , , , "011", , , [3]], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], , , , "GE", , , , , , , , , , , , , , , , , , [, , "0(?:11|33)|11[1-3]|[01]22", , , , "011", , , [3]], , [, , "0(?:11|33)|11[1-3]|40404|[01]22", , , , "011"], [, , , , , , , , , [-1]], [, , "404\\d\\d", , , , "40400", , , [5]], , [, , "404\\d\\d", , , , "40400", , , [5]]],
              GF: [, [, , "1\\d", , , , , , , [2]], , , [, , "1[578]", , , , "15"], [, , , , , , , , , [-1]], , , , "GF", , , , , , , , , , , , , , , , , , [, , "1[578]", , , , "15"], , [, , "1[578]", , , , "15"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              GG: [
                ,
                [, , "[19]\\d{2,5}", , , , , , , [3, 4, 5, 6]],
                ,
                ,
                [, , "112|999", , , , "112", , , [3]],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "GG",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "112|999", , , , "112", , , [3]],
                ,
                [, , "1(?:0[01]|1[12]|23|41|55|9[05])|999|1(?:1[68]\\d\\d|47|800)\\d", , , , "100"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                [, , , , , , , , , [-1]]
              ],
              GH: [, [, , "[14589]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "19[1-3]|999", , , , "191", , , [3]], [, , , , , , , , , [-1]], , , , "GH", , , , , , , , , , , , , , , , , , [, , "19[1-3]|999", , , , "191", , , [3]], , [, , "19[1-3]|40404|(?:54|83)00|999", , , , "191"], [, , , , , , , , , [-1]], [, , "404\\d\\d|(?:54|83)0\\d", , , , "5400", , , [4, 5]], , [, , "404\\d\\d|(?:54|83)0\\d", , , , "5400", , , [4, 5]]],
              GI: [, [
                ,
                ,
                "[158]\\d{2,5}",
                ,
                ,
                ,
                ,
                ,
                ,
                [3, 4, 5, 6]
              ], , , [, , "1(?:00|1[25]|23|4(?:1|7\\d)|5[15]|9[02-49])|555|(?:116\\d|80)\\d\\d", , , , "100", , , [3, 4, 6]], [, , "8[1-69]\\d\\d", , , , "8100", , , [4]], , , , "GI", , , , , , , , , , , , , , , , , , [, , "1(?:12|9[09])", , , , "112", , , [3]], , [, , "1(?:00|1(?:[25]|6(?:00[06]|1(?:1[17]|23))|8\\d\\d)|23|4(?:1|7[014])|5[015]|9[02-49])|555|8[0-79]\\d\\d|8(?:00|4[0-2]|8[0-589])", , , , "100"], [, , "150|87\\d\\d", , , , "150", , , [3, 4]], [, , "1(?:00|1(?:5|8\\d\\d)|23|51|9[2-4])|555|8(?:00|4[0-2]|8[0-589])", , , , "100", , , [3, 5]], , [, , , , , , , , , [-1]]],
              GL: [, [
                ,
                ,
                "1\\d\\d",
                ,
                ,
                ,
                ,
                ,
                ,
                [3]
              ], , , [, , "112", , , , "112"], [, , , , , , , , , [-1]], , , , "GL", , , , , , , , , , , , , , , , , , [, , "112", , , , "112"], , [, , "1[1-8]\\d", , , , "110"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              GM: [, [, , "1\\d\\d?", , , , , , , [2, 3]], , , [, , "1(?:1[6-8]|[6-8])", , , , "16"], [, , , , , , , , , [-1]], , , , "GM", , , , , , , , , , , , , , , , , , [, , "1(?:1[6-8]|[6-8])", , , , "16"], , [, , "1(?:1[6-8]|[6-8])", , , , "16"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              GN: [, [, , "[14]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , , , "GN", , , , , , , , , , , , , , , , , , [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], , [, , "12\\d|40404", , , , "120"], [, , , , , , , , , [-1]], [, , "404\\d\\d", , , , "40400", , , [5]], , [, , "404\\d\\d", , , , "40400", , , [5]]],
              GP: [, [, , "1\\d", , , , , , , [2]], , , [, , "1[578]", , , , "15"], [, , , , , , , , , [-1]], , , , "GP", , , , , , , , , , , , , , , , , , [, , "1[578]", , , , "15"], , [, , "1[578]", , , , "15"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              GR: [, [, , "1\\d\\d(?:\\d{2,3})?", , , , , , , [3, 5, 6]], , , [, , "1(?:0[089]|1(?:2|6\\d{3})|66|99)", , , , "100", , , [3, 6]], [, , , , , , , , , [-1]], , , , "GR", , , , , , , , , , , , , , , , , , [, , "1(?:00|12|66|99)", , , , "100", , , [3]], , [
                ,
                ,
                "1(?:0[089]|1(?:2|320|6(?:000|1(?:1[17]|23)))|(?:389|9)9|66)",
                ,
                ,
                ,
                "100"
              ], [, , "113\\d\\d", , , , "11300", , , [5]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              GT: [, [, , "[14]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "1(?:10|2[03])", , , , "110", , , [3]], [, , , , , , , , , [-1]], , , , "GT", , , , , , , , , , , , , , , , , , [, , "1(?:10|2[03])", , , , "110", , , [3]], , [, , "110|40404|1(?:2|[57]\\d)\\d", , , , "110"], [, , , , , , , , , [-1]], [, , "404\\d\\d", , , , "40400", , , [5]], , [, , "404\\d\\d", , , , "40400", , , [5]]],
              GU: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], , , , "GU", , , , , , , , , , , , , , , , , , [, , "911", , , , "911"], , [, , "9(?:11|88)", , , , "911"], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              GW: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "11[378]", , , , "113"], [, , , , , , , , , [-1]], , , , "GW", , , , , , , , , , , , , , , , , , [, , "11[378]", , , , "113"], , [, , "11[378]", , , , "113"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              GY: [, [, , "[019]\\d{2,3}", , , , , , , [3, 4]], , , [, , "91[1-3]", , , , "911", , , [3]], [, , , , , , , , , [-1]], , , , "GY", , , , , , , , , , , , , , , , , , [, , "91[1-3]", , , , "911", , , [3]], , [, , "0(?:02|(?:17|80)1|444|7(?:[67]7|9)|9(?:0[78]|[2-47]))|1(?:443|5[568])|91[1-3]", , , , "002"], [, , , , , , , , , [-1]], [
                ,
                ,
                "144\\d",
                ,
                ,
                ,
                "1440",
                ,
                ,
                [4]
              ], , [, , "144\\d", , , , "1440", , , [4]]],
              HK: [
                ,
                [, , "[19]\\d{2,6}", , , , , , , [3, 4, 5, 6, 7]],
                ,
                ,
                [, , "112|99[29]", , , , "112", , , [3]],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "HK",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "112|99[29]", , , , "112", , , [3]],
                ,
                [, , "1(?:0(?:(?:[0136]\\d|2[14])\\d{0,3}|8[138])|12|2(?:[0-3]\\d{0,4}|(?:58|8[13])\\d{0,3})|7(?:[135-9]\\d{0,4}|219\\d{0,2})|8(?:0(?:(?:[13]|60\\d)\\d|8)|1(?:0\\d|[2-8])|2(?:0[5-9]|(?:18|2)2|3|8[128])|(?:(?:3[0-689]\\d|7(?:2[1-389]|8[0235-9]|93))\\d|8)\\d|50[138]|6(?:1(?:11|86)|8)))|99[29]|10[0139]", , , , "100"],
                [, , , , , , , , , [-1]],
                [, , "109|1(?:08|85\\d)\\d", , , , "109", , , [3, 4, 5]],
                ,
                [, , "992", , , , "992", , , [3]]
              ],
              HN: [, [, , "[14]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "199", , , , "199", , , [3]], [, , , , , , , , , [-1]], , , , "HN", , , , , , , , , , , , , , , , , , [, , "199", , , , "199", , , [3]], , [, , "199|40404", , , , "199"], [, , , , , , , , , [-1]], [, , "404\\d\\d", , , , "40400", , , [5]], , [, , "404\\d\\d", , , , "40400", , , [5]]],
              HR: [
                ,
                [, , "[19]\\d{1,5}", , , , , , , [2, 3, 4, 5, 6]],
                ,
                ,
                [, , "1(?:12|9[2-4])|9[34]|1(?:16\\d|39)\\d\\d", , , , "93", , , [2, 3, 5, 6]],
                [, , "118\\d\\d", , , , "11800", , , [5]],
                ,
                ,
                ,
                "HR",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "1(?:12|9[2-4])|9[34]", , , , "93", , , [2, 3]],
                ,
                [, , "1(?:1(?:2|6(?:00[06]|1(?:1[17]|23))|8\\d\\d)|3977|9(?:[2-5]|87))|9[34]", , , , "93"],
                [, , , , , , , , , [-1]],
                [, , "139\\d\\d", , , , "13900", , , [5]],
                ,
                [, , "139\\d\\d", , , , "13900", , , [5]]
              ],
              HT: [, [, , "[14]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "11[48]", , , , "114", , , [3]], [, , , , , , , , , [-1]], , , , "HT", , , , , , , , , , , , , , , , , , [, , "11[48]", , , , "114", , , [3]], , [, , "11[48]|40404", , , , "114"], [, , , , , , , , , [-1]], [, , "404\\d\\d", , , , "40400", , , [5]], , [, , "404\\d\\d", , , , "40400", , , [5]]],
              HU: [, [
                ,
                ,
                "1\\d{2,5}",
                ,
                ,
                ,
                ,
                ,
                ,
                [3, 4, 5, 6]
              ], , , [, , "1(?:0[457]|12|4[0-4]\\d)|1(?:16\\d|37|45)\\d\\d", , , , "104"], [, , , , , , , , , [-1]], , , , "HU", , , , , , , , , , , , , , , , , , [, , "1(?:0[457]|12)", , , , "104", , , [3]], , [, , "1(?:0[457]|1(?:2|6(?:000|1(?:11|23))|800)|2(?:0[0-4]|1[013489]|2[0-5]|3[0-46]|4[0-24-68]|5[0-2568]|6[06]|7[0-25-7]|8[028]|9[08])|37(?:00|37|7[07])|4(?:0[0-5]|1[013-8]|2[034]|3[23]|4[02-9]|5(?:00|41|67))|777|8(?:1[27-9]|2[04]|40|[589]))", , , , "104"], [, , , , , , , , , [-1]], [, , "1(?:4[0-4]|77)\\d|1(?:18|2|45)\\d\\d", , , , "1200", , , [4, 5]], , [
                ,
                ,
                "184\\d",
                ,
                ,
                ,
                "1840",
                ,
                ,
                [4]
              ]],
              ID: [, [, , "[178]\\d\\d(?:\\d{2,3})?", , , , , , , [3, 5, 6]], , , [, , "11[02389]", , , , "110", , , [3]], [, , , , , , , , , [-1]], , , , "ID", , , , , , , , , , , , , , , , , , [, , "11[02389]", , , , "110", , , [3]], , [, , "1(?:1[02389]|40\\d\\d|50264)|71400|89887", , , , "110"], [, , , , , , , , , [-1]], [, , "(?:714|898)\\d\\d", , , , "71400", , , [5]], , [, , "714\\d\\d", , , , "71400", , , [5]]],
              IE: [, [, , "[159]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "11(?:2|6\\d{3})|999", , , , "112", , , [3, 6]], [, , "5[37]\\d{3}", , , , "53000", , , [5]], , , , "IE", , , , , , , , , , , , , , , , , , [, , "112|999", , , , "112", , , [3]], , [
                ,
                ,
                "11(?:2|6(?:00[06]|1(?:1[17]|23)))|999|(?:1(?:18|9)|5[0137]\\d)\\d\\d",
                ,
                ,
                ,
                "112"
              ], [, , "51\\d{3}", , , , "51000", , , [5]], [, , "51210", , , , "51210", , , [5]], , [, , "51210|(?:118|5[037]\\d)\\d\\d", , , , "11800", , , [5]]],
              IL: [, [, , "[12]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "1(?:0[0-2]|12)", , , , "100", , , [3]], [, , , , , , , , , [-1]], , , , "IL", , , , , , , , , , , , , , , , , , [, , "1(?:0[0-2]|12)", , , , "100", , , [3]], , [, , "1(?:0[0-2]|1(?:[013-9]\\d|2)|[2-9]\\d\\d)|2407|(?:104|27)00", , , , "100"], [, , , , , , , , , [-1]], [, , "104\\d\\d", , , , "10400", , , [5]], , [, , "104\\d\\d", , , , "10400", , , [5]]],
              IM: [, [, , "[189]\\d\\d(?:\\d{2,3})?", , , , , , , [3, 5, 6]], , , [
                ,
                ,
                "999",
                ,
                ,
                ,
                "999",
                ,
                ,
                [3]
              ], [, , , , , , , , , [-1]], , , , "IM", , , , , , , , , , , , , , , , , , [, , "999", , , , "999", , , [3]], , [, , "1\\d\\d(?:\\d{3})?|8(?:6444|9887)|999", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , "8(?:64|98)\\d\\d", , , , "86400", , , [5]]],
              IN: [
                ,
                [, , "[12578]\\d{2,8}", , , , , , , [3, 4, 5, 6, 7, 8, 9]],
                ,
                ,
                [, , "1(?:0[0-248]|1[289]|21|[39][89]|4[01]|6(?:1|6\\d?)|8[12])|777|800|1[05]5\\d|1(?:07|51|94)\\d\\d?|(?:1(?:[05]5\\d|70)\\d|261)\\d|1(?:0[369]|10|29|3[126]|9[0-256])\\d", , , , "100", , , [3, 4, 5, 6]],
                [, , "11[67]\\d{4}|56161561", , , , "1160000", , , [7, 8]],
                ,
                ,
                ,
                "IN",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "1(?:0[0-28]|12|298)|2611", , , , "100", , , [3, 4]],
                ,
                [
                  ,
                  ,
                  "1(?:0(?:[0-248]|3[39]|5(?:010|6)|6[3468]|7(?:[01357]|[28]0?|4[01])|9[0135-9])|1(?:00|[289])|2(?:1|98)|3(?:11|2[0-2]|63|[89])|4[01]|5(?:1(?:0[0-36]|[127])|54)|6(?:1|6[01]?)|7000|8[12]|9(?:0[013-59]|12|25|4[4-9]\\d?|50|6[1347]|[89]))|2611|5(?:0(?:0(?:0\\d|1|20?)|325|5[2-79]\\d{3,5})|1(?:234|555|717|818|96[49])|2(?:0(?:0[01]|[14]0)|151|555|666|888|9(?:06|99\\d?))|3(?:0[01]0|131|553|(?:66|77)6)|(?:464|55[05])\\d{1,3}|6(?:070|3[68]|43)|717\\d)|777|800|5(?:05(?:0|1\\d)|221|3(?:03|3[23]))\\d{1,4}|5(?:(?:04|88)0|2(?:2[0267]|3[16])|4(?:1[04]|20|3[02])|5(?:3[16]|67)|6(?:06|[67]\\d)|787|9(?:64|90))\\d\\d?|(?:1(?:05[79]|(?:1[67][0-2]|802)\\d|55[23])\\d|5(?:(?:00(?:0\\d|1)|(?:304|616)\\d\\d)\\d|1(?:0[12]|4[2-4])|2(?:2[3589]|3(?:1\\d{3}|2)|4[04]|7[78])|4(?:[02]4|32\\d{4}|4[04]|99)|5(?:1[25]|[36]5|4[45]|93)|7(?:(?:17\\d|57)\\d\\d|[27]7|88)|8(?:3[4-69]|4[01]|5[58]|88(?:8\\d\\d|9)|99)|9(?:0(?:0|2\\d{3})|55|6[67]|77|88)))\\d",
                  ,
                  ,
                  ,
                  "100"
                ],
                [, , "5(?:14(?:2[5-9]|[34]\\d)|757555)", , , , "51425", , , [5, 7]],
                [, , "1(?:(?:1[67]\\d\\d|70)\\d\\d|55330|909)|5(?:300\\d|6161(?:17[89]|561))|1(?:[19][89]|21|4[01])", , , , "118", , , [3, 4, 5, 6, 7, 8]],
                ,
                [, , "1(?:39|90[019])|5(?:14(?:2[5-9]|[34]\\d)|6161(?:17[89]|561)|757555)", , , , "139", , , [3, 4, 5, 7, 8]]
              ],
              IQ: [, [, , "[1479]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "1(?:0[04]|15|22)", , , , "100", , , [3]], [, , , , , , , , , [-1]], , , , "IQ", , , , , , , , , , , , , , , , , , [, , "1(?:0[04]|15|22)", , , , "100", , , [3]], , [, , "1(?:0[04]|15|22)|4432|71117|9988", , , , "100"], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], [, , "(?:443|711\\d|998)\\d", , , , "4430", , , [4, 5]], , [, , "(?:443|711\\d|998)\\d", , , , "4430", , , [4, 5]]],
              IR: [, [, , "[129]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "1(?:1[0-68]|2[0-59]|9[0-579])|911", , , , "110", , , [3]], [, , , , , , , , , [-1]], , , , "IR", , , , , , , , , , , , , , , , , , [, , "1(?:1[025]|25)|911", , , , "110", , , [3]], , [
                ,
                ,
                "1(?:1[0-68]|2[0-59]|3[346-8]|4(?:[0147]|[289]0)|5(?:0[14]|1[02479]|2[0-3]|39|[49]0|65)|6(?:[16]6|[27]|90)|8(?:03|1[18]|22|3[37]|4[28]|88|99)|9[0-579])|20(?:[09]0|1(?:[038]|1[079]|26|9[69])|2[01])|9(?:11|9(?:0009|90))",
                ,
                ,
                ,
                "110"
              ], [, , "1(?:5[0-469]|8[0-489])\\d", , , , "1500", , , [4]], [, , "(?:1(?:5[0-469]|8[0-489])|99(?:0\\d\\d|9))\\d", , , , "1500", , , [4, 6]], , [, , "990\\d{3}", , , , "990000", , , [6]]],
              IS: [, [, , "1\\d\\d(?:\\d(?:\\d{2})?)?", , , , , , , [3, 4, 6]], , , [, , "1(?:12|71\\d)", , , , "112", , , [3, 4]], [, , , , , , , , , [-1]], , , , "IS", , , , , , , , , , , , , , , , , , [, , "112", , , , "112", , , [3]], , [, , "1(?:1(?:[28]|61(?:16|23))|4(?:00|1[145]|4[0146])|55|7(?:00|17|7[07-9])|8(?:[02]0|1[16-9]|88)|900)", , , , "112"], [, , , , , , , , , [-1]], [, , "14(?:0\\d|41)", , , , "1400", , , [4]], , [
                ,
                ,
                "1(?:415|90\\d)",
                ,
                ,
                ,
                "1415",
                ,
                ,
                [4]
              ]],
              IT: [
                ,
                [, , "[14]\\d{2,6}", , , , , , , [3, 4, 5, 6, 7]],
                ,
                ,
                [, , "1(?:1(?:[2358]|6\\d{3})|87)", , , , "112", , , [3, 6]],
                [, , "(?:12|4(?:[478](?:[0-4]|[5-9]\\d\\d)|55))\\d\\d", , , , "1200", , , [4, 5, 7]],
                ,
                ,
                ,
                "IT",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "11[2358]", , , , "112", , , [3]],
                ,
                [, , "1(?:0\\d{2,3}|1(?:[2-57-9]|6(?:000|111))|3[39]|4(?:82|9\\d{1,3})|5(?:00|1[58]|2[25]|3[03]|44|[59])|60|8[67]|9(?:[01]|2[2-9]|4\\d|696))|4(?:2323|5045)|(?:1(?:2|92[01])|4(?:3(?:[01]|[45]\\d\\d)|[478](?:[0-4]|[5-9]\\d\\d)|55))\\d\\d", , , , "112"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                [, , "4(?:3(?:[01]|[45]\\d\\d)|[478](?:[0-4]|[5-9]\\d\\d)|5[05])\\d\\d", , , , "43000", , , [5, 7]]
              ],
              JE: [, [, , "[129]\\d\\d(?:\\d(?:\\d{2})?)?", , , , , , , [3, 4, 6]], , , [, , "112|999", , , , "112", , , [3]], [, , , , , , , , , [-1]], , , , "JE", , , , , , , , , , , , , , , , , , [, , "112|999", , , , "112", , , [3]], , [, , "1(?:00|1(?:2|8\\d{3})|23|4(?:[14]|28|7\\d)|5\\d|7(?:0[12]|[128]|35?)|808|9[0135])|23[2-4]|999", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              JM: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "11[029]|9(?:11|88)", , , , "110"], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], , , , "JM", , , , , , , , , , , , , , , , , , [, , "11[029]|911", , , , "110"], , [, , "1(?:1[029]|76)|9(?:11|88)", , , , "110"], [, , , , , , , , , [-1]], [, , "176", , , , "176"], , [, , "176", , , , "176"]],
              JO: [, [, , "[19]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "1(?:0[235]|1[2-6]|9[127])|911", , , , "102", , , [3]], [, , "9[0-4689]\\d{3}", , , , "90000", , , [5]], , , , "JO", , , , , , , , , , , , , , , , , , [, , "1(?:12|9[127])|911", , , , "112", , , [3]], , [, , "1(?:0[2359]|1[0-68]|9[0-24-79])|9[0-4689]\\d{3}|911", , , , "102"], [, , , , , , , , , [-1]], [, , "9[0-4689]\\d{3}", , , , "90000", , , [5]], , [
                ,
                ,
                "9[0-4689]\\d{3}",
                ,
                ,
                ,
                "90000",
                ,
                ,
                [5]
              ]],
              JP: [, [, , "[01]\\d\\d(?:\\d{7})?", , , , , , , [3, 10]], , , [, , "11[089]", , , , "110", , , [3]], [, , , , , , , , , [-1]], , , , "JP", , , , , , , , , , , , , , , , , , [, , "11[09]", , , , "110", , , [3]], , [, , "000[259]\\d{6}|1(?:0[24]|1[089]|44|89)", , , , "102"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , "000[259]\\d{6}", , , , "0002000000", , , [10]]],
              KE: [, [, , "[1-9]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "1(?:1(?:[246]|9\\d)|5(?:01|2[127]|6[26]\\d))|999", , , , "112"], [, , "909\\d\\d", , , , "90900", , , [5]], , , , "KE", , , , , , , , , , , , , , , , , , [, , "11[24]|999", , , , "112", , , [3]], , [
                ,
                ,
                "1(?:0(?:[07-9]|1[0-25]|400)|1(?:[024-6]|9[0-579])|2[1-3]|3[01]|4[14]|5(?:[01][01]|2[0-24-79]|33|4[05]|5[59]|6(?:00|29|6[67]))|(?:6[035]\\d|[78])\\d|9(?:[02-9]\\d\\d|19))|(?:(?:2[0-79]|[37][0-29]|4[0-4]|6[2357]|8\\d)\\d|5(?:[0-7]\\d|99))\\d\\d|9(?:09\\d\\d|99)|8988",
                ,
                ,
                ,
                "100"
              ], [, , , , , , , , , [-1]], [, , "1(?:(?:04|6[35])\\d\\d|3[01]|4[14]|5(?:1\\d|2[25]))|(?:(?:2[0-79]|[37][0-29]|4[0-4]|6[2357]|8\\d)\\d|5(?:[0-7]\\d|99)|909)\\d\\d|898\\d", , , , "130"], , [, , "1(?:(?:04|6[035])\\d\\d|4[14]|5(?:01|55|6[26]\\d))|40404|8988|909\\d\\d", , , , "141"]],
              KG: [, [, , "[14]\\d{2,3}", , , , , , , [3, 4]], , , [, , "10[1-3]", , , , "101", , , [3]], [, , , , , , , , , [-1]], , , , "KG", , , , , , , , , , , , , , , , , , [, , "10[1-3]", , , , "101", , , [3]], , [, , "10[1-3]|4040", , , , "101"], [, , , , , , , , , [-1]], [, , "404\\d", , , , "4040", , , [4]], , [
                ,
                ,
                "404\\d",
                ,
                ,
                ,
                "4040",
                ,
                ,
                [4]
              ]],
              KH: [, [, , "[146]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "11[7-9]|666", , , , "117", , , [3]], [, , , , , , , , , [-1]], , , , "KH", , , , , , , , , , , , , , , , , , [, , "11[7-9]|666", , , , "117", , , [3]], , [, , "11[7-9]|40404|666", , , , "117"], [, , , , , , , , , [-1]], [, , "404\\d\\d", , , , "40400", , , [5]], , [, , "404\\d\\d", , , , "40400", , , [5]]],
              KI: [, [, , "[179]\\d{2,3}", , , , , , , [3, 4]], , , [, , "19[2-5]|99[2-4]", , , , "192", , , [3]], [, , , , , , , , , [-1]], , , , "KI", , , , , , , , , , , , , , , , , , [, , "19[2-5]|99[2-4]", , , , "192", , , [3]], , [, , "1(?:05[0-259]|88|9[2-5])|777|99[2-4]|10[0-8]", , , , "100"], [
                ,
                ,
                "103",
                ,
                ,
                ,
                "103",
                ,
                ,
                [3]
              ], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              KM: [, [, , "1\\d", , , , , , , [2]], , , [, , "1[78]", , , , "17"], [, , , , , , , , , [-1]], , , , "KM", , , , , , , , , , , , , , , , , , [, , "1[78]", , , , "17"], , [, , "1[78]", , , , "17"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              KN: [, [, , "[39]\\d\\d", , , , , , , [3]], , , [, , "333|9(?:11|88|99)", , , , "333"], [, , , , , , , , , [-1]], , , , "KN", , , , , , , , , , , , , , , , , , [, , "333|9(?:11|99)", , , , "333"], , [, , "333|9(?:11|88|99)", , , , "333"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              KP: [, [, , "[18]\\d\\d", , , , , , , [3]], , , [
                ,
                ,
                "11[29]|819",
                ,
                ,
                ,
                "112"
              ], [, , , , , , , , , [-1]], , , , "KP", , , , , , , , , , , , , , , , , , [, , "11[29]|819", , , , "112"], , [, , "11[29]|819", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              KR: [, [, , "1\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "1(?:1[27-9]|28|330|82)", , , , "112", , , [3, 4]], [, , , , , , , , , [-1]], , , , "KR", , , , , , , , , , , , , , , , , , [, , "11[29]", , , , "112", , , [3]], , [, , "1(?:[016-9]114|3(?:0[01]|2|3[0-35-9]|45?|5[057]|6[569]|7[79]|8[2589]|9[0189]))|1(?:0[015]|1\\d|2[01357-9]|41|8[28])", , , , "100"], [, , , , , , , , , [-1]], [
                ,
                ,
                "1(?:0[01]|1[4-6]|41)|1(?:[06-9]1\\d|111)\\d",
                ,
                ,
                ,
                "100",
                ,
                ,
                [3, 5]
              ], , [, , , , , , , , , [-1]]],
              KW: [, [, , "[18]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "112", , , , "112", , , [3]], [, , , , , , , , , [-1]], , , , "KW", , , , , , , , , , , , , , , , , , [, , "112", , , , "112", , , [3]], , [, , "1[0-7]\\d|89887", , , , "100"], [, , , , , , , , , [-1]], [, , "898\\d\\d", , , , "89800", , , [5]], , [, , , , , , , , , [-1]]],
              KY: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], , , , "KY", , , , , , , , , , , , , , , , , , [, , "911", , , , "911"], , [, , "9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              KZ: [, [, , "[134]\\d{2,4}", , , , , , , [
                3,
                4,
                5
              ]], , , [, , "1(?:0[1-3]|12)", , , , "101", , , [3]], [, , , , , , , , , [-1]], , , , "KZ", , , , , , , , , , , , , , , , , , [, , "1(?:0[1-3]|12)", , , , "101", , , [3]], , [, , "1(?:0[1-4]|12)|(?:3040|404)0", , , , "101"], [, , , , , , , , , [-1]], [, , "(?:304\\d|404)\\d", , , , "4040", , , [4, 5]], , [, , "(?:304\\d|404)\\d", , , , "4040", , , [4, 5]]],
              LA: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "19[015]", , , , "190"], [, , , , , , , , , [-1]], , , , "LA", , , , , , , , , , , , , , , , , , [, , "19[015]", , , , "190"], , [, , "19[015]", , , , "190"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              LB: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [
                ,
                ,
                "1(?:12|40|75)|999",
                ,
                ,
                ,
                "112"
              ], [, , , , , , , , , [-1]], , , , "LB", , , , , , , , , , , , , , , , , , [, , "1(?:12|40|75)|999", , , , "112"], , [, , "1(?:12|40|75)|999", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              LC: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:11|88|99)", , , , "911"], [, , , , , , , , , [-1]], , , , "LC", , , , , , , , , , , , , , , , , , [, , "9(?:11|99)", , , , "911"], , [, , "9(?:11|88|99)", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              LI: [, [, , "1\\d{2,3}", , , , , , , [3, 4]], , , [, , "1(?:1[278]|44)", , , , "112", , , [3]], [, , , , , , , , , [-1]], , , , "LI", , , , , , , , , , , , , , , , , , [
                ,
                ,
                "1(?:1[278]|44)",
                ,
                ,
                ,
                "112",
                ,
                ,
                [3]
              ], , [, , "1(?:1(?:[278]|45)|4[3-57]|50|75|81[18])", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              LK: [, [, , "1\\d{2,3}", , , , , , , [3, 4]], , , [, , "11[02689]", , , , "110", , , [3]], [, , , , , , , , , [-1]], , , , "LK", , , , , , , , , , , , , , , , , , [, , "11[02689]", , , , "110", , , [3]], , [, , "1(?:1[024-9]|3(?:00|1[2-49]|2[23]|3[1-3]|44|5[07]|[67]9|88|9[039])|9(?:0[0-2589]|1[0-357-9]|2[0-25689]|3[0389]|4[0489]|5[014-69]|6[0-2689]|7[03579]|8[02457-9]|9[0-2569]))", , , , "110"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              LR: [
                ,
                [, , "[3489]\\d{2,3}", , , , , , , [3, 4]],
                ,
                ,
                [, , "355|911", , , , "355", , , [3]],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "LR",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "355|911", , , , "355", , , [3]],
                ,
                [, , "355|4040|8(?:400|933)|911", , , , "355"],
                [, , , , , , , , , [-1]],
                [, , "(?:404|8(?:40|93))\\d", , , , "4040", , , [4]],
                ,
                [, , "(?:404|8(?:40|93))\\d", , , , "4040", , , [4]]
              ],
              LS: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "11[257]", , , , "112"], [, , , , , , , , , [-1]], , , , "LS", , , , , , , , , , , , , , , , , , [, , "11[257]", , , , "112"], , [, , "11[257]", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              LT: [, [
                ,
                ,
                "[01]\\d(?:\\d(?:\\d{3})?)?",
                ,
                ,
                ,
                ,
                ,
                ,
                [2, 3, 6]
              ], , , [, , "0(?:11?|22?|33?)|1(?:0[1-3]|1(?:2|6111))|116(?:0\\d|12)\\d", , , , "01"], [, , , , , , , , , [-1]], , , , "LT", , , , , , , , , , , , , , , , , , [, , "0(?:11?|22?|33?)|1(?:0[1-3]|12)", , , , "01", , , [2, 3]], , [, , "0(?:11?|22?|33?)|1(?:0[1-3]|1(?:[27-9]|6(?:000|1(?:1[17]|23))))", , , , "01"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              LU: [, [, , "1\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "11(?:[23]|6\\d{3})", , , , "112", , , [3, 6]], [, , , , , , , , , [-1]], , , , "LU", , , , , , , , , , , , , , , , , , [, , "11[23]", , , , "112", , , [3]], , [
                ,
                ,
                "11(?:[23]|6(?:000|111))|1(?:18|[25]\\d|3)\\d\\d",
                ,
                ,
                ,
                "112"
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              LV: [, [, , "[018]\\d{1,5}", , , , , , , [2, 3, 4, 5, 6]], , , [, , "0[1-3]|11(?:[023]|6\\d{3})", , , , "01", , , [2, 3, 6]], [, , "1180|821\\d\\d", , , , "1180", , , [4, 5]], , , , "LV", , , , , , , , , , , , , , , , , , [, , "0[1-3]|11[023]", , , , "01", , , [2, 3]], , [, , "0[1-4]|1(?:1(?:[02-4]|6(?:000|111)|8[0189])|(?:5|65)5|77)|821[57]4", , , , "01"], [, , "1181", , , , "1181", , , [4]], [, , "165\\d", , , , "1650", , , [4]], , [, , , , , , , , , [-1]]],
              LY: [
                ,
                [, , "1\\d\\d", , , , , , , [3]],
                ,
                ,
                [, , "19[013]", , , , "190"],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "LY",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "19[013]", , , , "190"],
                ,
                [, , "19[013]", , , , "190"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                [, , , , , , , , , [-1]]
              ],
              MA: [, [, , "1\\d\\d?", , , , , , , [2, 3]], , , [, , "1(?:[59]|77)", , , , "15"], [, , , , , , , , , [-1]], , , , "MA", , , , , , , , , , , , , , , , , , [, , "1(?:[59]|77)", , , , "15"], , [, , "1(?:[59]|77)", , , , "15"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              MC: [
                ,
                [, , "1\\d\\d?", , , , , , , [2, 3]],
                ,
                ,
                [, , "1(?:12|[578])", , , , "15"],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "MC",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "1(?:12|[578])", , , , "15"],
                ,
                [, , "1(?:12|41|[578])", , , , "15"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                [, , , , , , , , , [-1]]
              ],
              MD: [, [, , "[19]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "11(?:2|6(?:000|1(?:11|2\\d)))|90[1-3]", , , , "112", , , [3, 6]], [, , , , , , , , , [-1]], , , , "MD", , , , , , , , , , , , , , , , , , [, , "112|90[1-3]", , , , "112", , , [3]], , [, , "1(?:1(?:2|6(?:00[06]|1(?:1[17]|23))|8\\d\\d?|99)|90[04-9])|90[1-3]|1(?:4\\d\\d|6[0-389]|9[1-4])\\d", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              ME: [, [, , "1\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "1(?:12|2[2-4])", , , , "112", , , [3]], [, , , , , , , , , [-1]], , , , "ME", , , , , , , , , , , , , , , , , , [
                ,
                ,
                "1(?:12|2[2-4])",
                ,
                ,
                ,
                "112",
                ,
                ,
                [3]
              ], , [, , "1(?:1(?:(?:[013-57-9]|6\\d\\d)\\d|2)|[249]\\d{3}|5999|8(?:0[089]|1[0-8]|888))|1(?:[02-5]\\d\\d|60[06]|700)|12\\d", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              MF: [, [, , "1\\d", , , , , , , [2]], , , [, , "1[578]", , , , "15"], [, , , , , , , , , [-1]], , , , "MF", , , , , , , , , , , , , , , , , , [, , "1[578]", , , , "15"], , [, , "1[578]", , , , "15"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              MG: [
                ,
                [, , "1\\d\\d?", , , , , , , [2, 3]],
                ,
                ,
                [, , "1(?:1[78]|[78])", , , , "17"],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "MG",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "1(?:1[78]|[78])", , , , "17"],
                ,
                [, , "1(?:1[78]|[78])", , , , "17"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                [, , , , , , , , , [-1]]
              ],
              MH: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "911", , , , "911"], [, , , , , , , , , [-1]], , , , "MH", , , , , , , , , , , , , , , , , , [, , "911", , , , "911"], , [, , "911", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              MK: [
                ,
                [, , "1\\d\\d(?:\\d(?:\\d{2})?)?", , , , , , , [3, 4, 6]],
                ,
                ,
                [, , "1(?:1(?:2|6\\d{3})|9[2-4])", , , , "112", , , [3, 6]],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "MK",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "1(?:12|9[2-4])", , , , "112", , , [3]],
                ,
                [, , "1(?:1(?:2|8\\d)|3\\d|9[2-4])|1(?:16|2\\d)\\d{3}", , , , "112"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                [, , , , , , , , , [-1]]
              ],
              ML: [, [, , "[136-8]\\d{1,4}", , , , , , , [2, 3, 4, 5]], , , [, , "1[578]|(?:352|67)00|7402|(?:677|744|8000)\\d", , , , "15", , , [2, 4, 5]], [, , "(?:12|800)2\\d|3(?:52(?:11|2[02]|3[04-6]|99)|7574)", , , , "1220", , , [4, 5]], , , , "ML", , , , , , , , , , , , , , , , , , [, , "1[578]", , , , "15", , , [2]], , [, , "1(?:1(?:[013-9]\\d|2)|2(?:1[02-469]|2[13])|[578])|350(?:35|57)|67(?:0[09]|[59]9|77|8[89])|74(?:0[02]|44|55)|800[0-2][12]|3(?:52|[67]\\d)\\d\\d", , , , "15"], [, , "37(?:433|575)|7400|8001\\d", , , , "7400", , , [4, 5]], [
                ,
                ,
                "3503\\d|(?:3[67]\\d|800)\\d\\d",
                ,
                ,
                ,
                "35030",
                ,
                ,
                [5]
              ], , [, , "374(?:0[24-9]|[1-9]\\d)|7400|3(?:6\\d|75)\\d\\d", , , , "7400", , , [4, 5]]],
              MM: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "199", , , , "199"], [, , , , , , , , , [-1]], , , , "MM", , , , , , , , , , , , , , , , , , [, , "199", , , , "199"], , [, , "199", , , , "199"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              MN: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "10[0-35]", , , , "100"], [, , , , , , , , , [-1]], , , , "MN", , , , , , , , , , , , , , , , , , [, , "10[0-35]", , , , "100"], , [, , "10[0-35]", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              MO: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "999", , , , "999"], [, , , , , , , , , [-1]], , , , "MO", , , , , , , , , , , , , , , , , , [, , "999", , , , "999"], , [, , "999", , , , "999"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              MP: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], , , , "MP", , , , , , , , , , , , , , , , , , [, , "911", , , , "911"], , [, , "9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              MQ: [
                ,
                [, , "1\\d\\d?", , , , , , , [2, 3]],
                ,
                ,
                [, , "1(?:12|[578])", , , , "15"],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "MQ",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "1(?:12|[578])", , , , "15"],
                ,
                [, , "1(?:12|[578])", , , , "15"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                [, , , , , , , , , [-1]]
              ],
              MR: [, [, , "1\\d", , , , , , , [2]], , , [, , "1[78]", , , , "17"], [, , , , , , , , , [-1]], , , , "MR", , , , , , , , , , , , , , , , , , [, , "1[78]", , , , "17"], , [, , "1[78]", , , , "17"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              MS: [, [, , "[29]\\d\\d", , , , , , , [3]], , , [, , "9(?:11|88|99)", , , , "911"], [, , , , , , , , , [-1]], , , , "MS", , , , , , , , , , , , , , , , , , [, , "9(?:11|99)", , , , "911"], , [, , "211|9(?:11|88|99)", , , , "211"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              MT: [, [
                ,
                ,
                "1\\d\\d(?:\\d{3})?",
                ,
                ,
                ,
                ,
                ,
                ,
                [3, 6]
              ], , , [, , "11(?:2|6\\d{3})", , , , "112"], [, , , , , , , , , [-1]], , , , "MT", , , , , , , , , , , , , , , , , , [, , "112", , , , "112", , , [3]], , [, , "11(?:2|6(?:000|1(?:11|23)))", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              MU: [, [, , "[189]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "11[45]|99[59]", , , , "114", , , [3]], [, , , , , , , , , [-1]], , , , "MU", , , , , , , , , , , , , , , , , , [, , "11[45]|99[59]", , , , "114", , , [3]], , [, , "1\\d{2,4}|(?:8\\d\\d|99)\\d", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              MV: [, [, , "[14]\\d{2,3}", , , , , , , [3, 4]], , , [
                ,
                ,
                "1(?:02|1[89])",
                ,
                ,
                ,
                "102",
                ,
                ,
                [3]
              ], [, , , , , , , , , [-1]], , , , "MV", , , , , , , , , , , , , , , , , , [, , "1(?:02|1[89])", , , , "102", , , [3]], , [, , "1(?:[0-37-9]|[4-6]\\d)\\d|4040|1[45]1", , , , "100"], [, , , , , , , , , [-1]], [, , "1[45]1", , , , "141", , , [3]], , [, , , , , , , , , [-1]]],
              MW: [, [, , "[189]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "199|99[7-9]", , , , "199", , , [3]], [, , , , , , , , , [-1]], , , , "MW", , , , , , , , , , , , , , , , , , [, , "199|99[7-9]", , , , "199", , , [3]], , [, , "199|80400|99[7-9]", , , , "199"], [, , , , , , , , , [-1]], [, , "804\\d\\d", , , , "80400", , , [5]], , [, , "804\\d\\d", , , , "80400", , , [5]]],
              MX: [, [
                ,
                ,
                "[0579]\\d{2,4}",
                ,
                ,
                ,
                ,
                ,
                ,
                [3, 4, 5]
              ], , , [, , "0(?:6[0568]|80)|911", , , , "060", , , [3]], [, , "(?:530\\d|776)\\d", , , , "7760", , , [4, 5]], , , , "MX", , , , , , , , , , , , , , , , , , [, , "0(?:6[0568]|80)|911", , , , "060", , , [3]], , [, , "0[1-9]\\d|53053|7766|911", , , , "010"], [, , , , , , , , , [-1]], [, , "0(?:[249]0|[35][01])", , , , "020", , , [3]], , [, , , , , , , , , [-1]]],
              MY: [, [, , "[1369]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "112|999", , , , "112", , , [3]], [, , , , , , , , , [-1]], , , , "MY", , , , , , , , , , , , , , , , , , [, , "112|999", , , , "112", , , [3]], , [
                ,
                ,
                "1(?:0[01348]|1(?:[02]|1[128]|311)|2(?:0[125]|[13-6]|2\\d{0,2})|(?:3[1-35-79]|7[45])\\d\\d?|5(?:454|5\\d\\d?|77|888|999?)|8(?:18?|2|8[18])|9(?:[124]\\d?|68|71|9[0679]))|66628|99[1-469]|13[5-7]|(?:1(?:0[569]|309|5[12]|7[136-9]|9[03])|3[23679]\\d\\d)\\d",
                ,
                ,
                ,
                "100"
              ], [, , "666\\d\\d", , , , "66600", , , [5]], [, , , , , , , , , [-1]], , [, , "(?:3[23679]\\d|666)\\d\\d", , , , "32000", , , [5]]],
              MZ: [, [, , "1\\d{2,3}", , , , , , , [3, 4]], , , [, , "1(?:1[79]|9[78])", , , , "117", , , [3]], [, , , , , , , , , [-1]], , , , "MZ", , , , , , , , , , , , , , , , , , [, , "1(?:1[79]|9[78])", , , , "117", , , [3]], , [, , "1(?:[02-5]\\d\\d|1[79]|9[78])", , , , "117"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              NA: [, [, , "[19]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "10111", , , , "10111", , , [5]], [, , , , , , , , , [-1]], , , , "NA", , , , , , , , , , , , , , , , , , [, , "10111", , , , "10111", , , [5]], , [
                ,
                ,
                "(?:10|93)111|(?:1\\d|9)\\d\\d",
                ,
                ,
                ,
                "900"
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              NC: [, [, , "[135]\\d{1,3}", , , , , , , [2, 3, 4]], , , [, , "1(?:0(?:00|1[23]|3[0-2]|8\\d)|[5-8])|363\\d|577", , , , "15"], [, , , , , , , , , [-1]], , , , "NC", , , , , , , , , , , , , , , , , , [, , "1[5-8]", , , , "15", , , [2]], , [, , "1(?:0(?:0[06]|1[02-46]|20|3[0-25]|42|5[058]|77|88)|[5-8])|3631|5[6-8]\\d", , , , "15"], [, , "5(?:67|88)", , , , "567", , , [3]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              NE: [, [, , "[1-3578]\\d(?:\\d(?:\\d{3})?)?", , , , , , , [2, 3, 6]], , , [
                ,
                ,
                "1(?:18|[578])|723\\d{3}",
                ,
                ,
                ,
                "15"
              ], [, , , , , , , , , [-1]], , , , "NE", , , , , , , , , , , , , , , , , , [, , "1(?:18|[578])|723141", , , , "15"], , [, , "1(?:0[01]|1[128]|2[034]|3[013]|[46]0|55?|[78])|222|333|555|723141|888", , , , "15"], [, , , , , , , , , [-1]], [, , "1(?:0[01]|1[12]|2[034]|3[013]|[46]0|55)|222|333|555|888", , , , "100", , , [3]], , [, , , , , , , , , [-1]]],
              NF: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:11|55|77)", , , , "911"], [, , , , , , , , , [-1]], , , , "NF", , , , , , , , , , , , , , , , , , [, , "9(?:11|55|77)", , , , "911"], , [, , "9(?:11|55|77)", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              NG: [, [
                ,
                ,
                "[14]\\d\\d(?:\\d{2})?",
                ,
                ,
                ,
                ,
                ,
                ,
                [3, 5]
              ], , , [, , "199", , , , "199", , , [3]], [, , , , , , , , , [-1]], , , , "NG", , , , , , , , , , , , , , , , , , [, , "199", , , , "199", , , [3]], , [, , "199|40700", , , , "199"], [, , , , , , , , , [-1]], [, , "407\\d\\d", , , , "40700", , , [5]], , [, , "407\\d\\d", , , , "40700", , , [5]]],
              NI: [, [, , "[12467]\\d{2,3}", , , , , , , [3, 4]], , , [, , "1(?:1[58]|2[08])|737\\d", , , , "115"], [, , , , , , , , , [-1]], , , , "NI", , , , , , , , , , , , , , , , , , [, , "1(?:1[58]|2[08])", , , , "115", , , [3]], , [, , "1(?:1[58]|200)|4878|7(?:010|373)|12[0158]|(?:19|[267]1)00", , , , "115"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              NL: [
                ,
                [, , "[1349]\\d\\d(?:\\d(?:\\d{2})?)?", , , , , , , [3, 4, 6]],
                ,
                ,
                [, , "11(?:2|6\\d{3})|911", , , , "112", , , [3, 6]],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "NL",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "112|911", , , , "112", , , [3]],
                ,
                [, , "1(?:1(?:2|6(?:00[06]|1(?:11|23)))|2(?:0[0-4]|3[34]|44)|3[03-9]\\d|400|8(?:[02-9]\\d|1[0-79]))|[34]000|911", , , , "112"],
                [, , , , , , , , , [-1]],
                [, , "120\\d", , , , "1200", , , [4]],
                ,
                [, , "[34]00\\d", , , , "3000", , , [4]]
              ],
              NO: [
                ,
                [, , "1\\d\\d(?:\\d(?:\\d{2})?)?", , , , , , , [3, 4, 6]],
                ,
                ,
                [, , "11(?:[023]|6\\d{3})", , , , "110", , , [3, 6]],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "NO",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "11[023]", , , , "110", , , [3]],
                ,
                [, , "1(?:1(?:[0239]|61(?:1[17]|23))|2[048]|4(?:12|[59])|7[57]|8[5-9]\\d|90)", , , , "110"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                [, , , , , , , , , [-1]]
              ],
              NP: [, [, , "1\\d{2,3}", , , , , , , [3, 4]], , , [, , "1(?:0[0-36]|12)|1(?:09|11)\\d", , , , "100"], [, , , , , , , , , [-1]], , , , "NP", , , , , , , , , , , , , , , , , , [, , "1(?:0[0-3]|12)", , , , "100", , , [3]], , [, , "1(?:0(?:[0-36]|98)|1(?:1[1-4]|2))", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              NR: [
                ,
                [, , "1\\d\\d", , , , , , , [3]],
                ,
                ,
                [, , "11[0-2]", , , , "110"],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "NR",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "11[0-2]", , , , "110"],
                ,
                [, , "1(?:1[0-2]|23|92)", , , , "110"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                [, , , , , , , , , [-1]]
              ],
              NU: [, [, , "[019]\\d\\d", , , , , , , [3]], , , [, , "999", , , , "999"], [, , , , , , , , , [-1]], , , , "NU", , , , , , , , , , , , , , , , , , [, , "999", , , , "999"], , [, , "01[05]|101|999", , , , "010"], [, , , , , , , , , [-1]], [, , "010", , , , "010"], , [, , , , , , , , , [-1]]],
              NZ: [, [, , "\\d{3,4}", , , , , , , [3, 4]], , , [, , "111", , , , "111", , , [3]], [, , "018", , , , "018", , , [3]], , , , "NZ", , , , , , , , , , , , , , , , , , [, , "111", , , , "111", , , [3]], , [
                ,
                ,
                "018|1(?:(?:1|37)1|(?:23|94)4|7[03]7)|[2-57-9]\\d{2,3}|6(?:161|26[0-3]|742)",
                ,
                ,
                ,
                "018"
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , "018|(?:1(?:23|37|7[03]|94)|6(?:[12]6|74))\\d|[2-57-9]\\d{2,3}", , , , "018"]],
              OM: [, [, , "[19]\\d{3}", , , , , , , [4]], , , [, , "1444|999\\d", , , , "1444"], [, , , , , , , , , [-1]], , , , "OM", , , , , , , , , , , , , , , , , , [, , "1444|9999", , , , "1444"], , [, , "1(?:111|222|4(?:4[0-5]|50|66|7[7-9])|51[0-8])|9999|1(?:2[3-5]|3[0-2]|50)\\d", , , , "1111"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              PA: [
                ,
                [, , "[19]\\d\\d", , , , , , , [3]],
                ,
                ,
                [, , "911", , , , "911"],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "PA",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "911", , , , "911"],
                ,
                [, , "10[2-4]|911", , , , "102"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                [, , , , , , , , , [-1]]
              ],
              PE: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "1(?:05|1[67])", , , , "105"], [, , , , , , , , , [-1]], , , , "PE", , , , , , , , , , , , , , , , , , [, , "1(?:05|1[67])", , , , "105"], , [, , "1(?:05|1[67])", , , , "105"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              PF: [, [, , "1\\d", , , , , , , [2]], , , [, , "1[578]", , , , "15"], [, , , , , , , , , [-1]], , , , "PF", , , , , , , , , , , , , , , , , , [, , "1[578]", , , , "15"], , [, , "1[578]", , , , "15"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              PG: [, [, , "[01]\\d{2,6}", , , , , , , [
                3,
                4,
                5,
                6,
                7
              ]], , , [, , "000|11[01]", , , , "000", , , [3]], [, , , , , , , , , [-1]], , , , "PG", , , , , , , , , , , , , , , , , , [, , "000|11[01]", , , , "000", , , [3]], , [, , "000|1(?:1[01]|5\\d\\d|6\\d{2,5})", , , , "000"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , "16\\d{2,5}", , , , "1600", , , [4, 5, 6, 7]]],
              PH: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "11[27]|911", , , , "112"], [, , , , , , , , , [-1]], , , , "PH", , , , , , , , , , , , , , , , , , [, , "11[27]|911", , , , "112"], , [, , "11[27]|911", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              PK: [, [, , "1\\d{1,3}", , , , , , , [2, 3, 4]], , , [
                ,
                ,
                "1(?:1(?:2\\d?|5)|[56])",
                ,
                ,
                ,
                "15"
              ], [, , , , , , , , , [-1]], , , , "PK", , , , , , , , , , , , , , , , , , [, , "1(?:1(?:22?|5)|[56])", , , , "15"], , [, , "1(?:122|3[014]|[56])|11[2457-9]", , , , "15"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              PL: [, [, , "[19]\\d\\d(?:\\d{2,3})?", , , , , , , [3, 5, 6]], , , [, , "11(?:2|6\\d{3})|99[7-9]", , , , "112", , , [3, 6]], [, , , , , , , , , [-1]], , , , "PL", , , , , , , , , , , , , , , , , , [, , "112|99[7-9]", , , , "112", , , [3]], , [, , "1(?:1(?:2|61(?:11|23)|891[23])|9\\d{3})|9(?:8[4-7]|9[1-9])|11[68]000", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              PM: [, [
                ,
                ,
                "[13]\\d(?:\\d{2})?",
                ,
                ,
                ,
                ,
                ,
                ,
                [2, 4]
              ], , , [, , "1[578]", , , , "15", , , [2]], [, , , , , , , , , [-1]], , , , "PM", , , , , , , , , , , , , , , , , , [, , "1[578]", , , , "15", , , [2]], , [, , "1[578]|3103", , , , "15"], [, , , , , , , , , [-1]], [, , "310\\d", , , , "3100", , , [4]], , [, , , , , , , , , [-1]]],
              PR: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], , , , "PR", , , , , , , , , , , , , , , , , , [, , "911", , , , "911"], , [, , "9(?:11|88)", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              PS: [
                ,
                [, , "1\\d{2,3}", , , , , , , [3, 4]],
                ,
                ,
                [, , "1(?:0[0-2]|66)", , , , "100", , , [3]],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "PS",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "10[0-2]", , , , "100", , , [3]],
                ,
                [, , "1(?:0[0-2]|122|44|66|99)", , , , "100"],
                [, , , , , , , , , [-1]],
                [, , "112\\d", , , , "1120", , , [4]],
                ,
                [, , , , , , , , , [-1]]
              ],
              PT: [, [, , "1\\d\\d(?:\\d(?:\\d{2})?)?", , , , , , , [3, 4, 6]], , , [, , "11[257]|1(?:16\\d\\d|5[1589]|8[279])\\d", , , , "112"], [, , , , , , , , , [-1]], , , , "PT", , , , , , , , , , , , , , , , , , [, , "11[25]", , , , "112", , , [3]], , [, , "1(?:0(?:45|5[01])|1(?:[2578]|600[06])|4(?:1[45]|4)|583|6(?:1[0236]|3[02]|9[169]))|1(?:1611|59)1|1[068]78|1[08]9[16]|1(?:0[1-38]|40|5[15]|6[258]|82)0", , , , "112"], [, , , , , , , , , [-1]], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], , [, , , , , , , , , [-1]]],
              PW: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "911", , , , "911"], [, , , , , , , , , [-1]], , , , "PW", , , , , , , , , , , , , , , , , , [, , "911", , , , "911"], , [, , "911", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              PY: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "128|911", , , , "128"], [, , , , , , , , , [-1]], , , , "PY", , , , , , , , , , , , , , , , , , [, , "128|911", , , , "128"], , [, , "1[1-9]\\d|911", , , , "110"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              QA: [
                ,
                [, , "[129]\\d{2,4}", , , , , , , [3, 4, 5]],
                ,
                ,
                [, , "99\\d", , , , "990", , , [3]],
                [, , "900", , , , "900", , , [3]],
                ,
                ,
                ,
                "QA",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "999", , , , "999", , , [3]],
                ,
                [, , "9(?:00|[19]\\d)|(?:1|20|9[27]\\d)\\d\\d", , , , "100"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                [, , , , , , , , , [-1]]
              ],
              RE: [, [, , "1\\d\\d?", , , , , , , [2, 3]], , , [, , "1(?:12|[578])", , , , "15"], [, , , , , , , , , [-1]], , , , "RE", , , , , , , , , , , , , , , , , , [, , "1(?:12|[578])", , , , "15"], , [, , "1(?:12|[578])", , , , "15"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              RO: [
                ,
                [, , "[18]\\d{2,5}", , , , , , , [3, 4, 5, 6]],
                ,
                ,
                [, , "11(?:2|6\\d{3})", , , , "112", , , [3, 6]],
                [, , "(?:1(?:18[39]|[24])|8[48])\\d\\d", , , , "1200", , , [4, 6]],
                ,
                ,
                ,
                "RO",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "112", , , , "112", , , [3]],
                ,
                [, , "1(?:1(?:2|6(?:000|1(?:11|23))|8(?:(?:01|8[18])1|119|[23]00|932))|[24]\\d\\d|9(?:0(?:00|19)|1[19]|21|3[02]|5[178]))|8[48]\\d\\d", , , , "112"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                [, , "(?:1[24]|8[48])\\d\\d", , , , "1200", , , [4]]
              ],
              RS: [, [, , "[19]\\d{1,5}", , , , , , , [2, 3, 4, 5, 6]], , , [, , "112|9[2-4]", , , , "92", , , [2, 3]], [, , , , , , , , , [-1]], , , , "RS", , , , , , , , , , , , , , , , , , [, , "112|9[2-4]", , , , "92", , , [2, 3]], , [, , "1[189]\\d{1,4}|9[2-4]", , , , "92"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ]],
              RU: [, [, , "[01]\\d\\d?", , , , , , , [2, 3]], , , [, , "112|(?:0|10)[1-3]", , , , "01"], [, , , , , , , , , [-1]], , , , "RU", , , , , , , , , , , , , , , , , , [, , "112|(?:0|10)[1-3]", , , , "01"], , [, , "112|(?:0|10)[1-4]", , , , "01"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              RW: [, [, , "[14]\\d\\d", , , , , , , [3]], , , [, , "11[1245]", , , , "111"], [, , , , , , , , , [-1]], , , , "RW", , , , , , , , , , , , , , , , , , [, , "11[12]", , , , "111"], , [, , "1(?:0[0-2]|1[0-24-6]|2[13]|70|99)|456", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              SA: [, [, , "[19]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [
                ,
                ,
                "11(?:2|6\\d{3})|9(?:11|37|9[7-9])",
                ,
                ,
                ,
                "112",
                ,
                ,
                [3, 6]
              ], [, , , , , , , , , [-1]], , , , "SA", , , , , , , , , , , , , , , , , , [, , "112|9(?:11|9[79])", , , , "112", , , [3]], , [, , "1(?:1(?:00|2|6111)|410|9(?:00|1[89]|9(?:099|22|9[0-3])))|9(?:0[24-79]|11|3[379]|40|66|8[5-9]|9[02-9])", , , , "112"], [, , "141\\d", , , , "1410", , , [4]], [, , "1(?:10|41)\\d|90[24679]", , , , "902", , , [3, 4]], , [, , , , , , , , , [-1]]],
              SB: [, [, , "[127-9]\\d\\d", , , , , , , [3]], , , [, , "999", , , , "999"], [, , , , , , , , , [-1]], , , , "SB", , , , , , , , , , , , , , , , , , [, , "999", , , , "999"], , [
                ,
                ,
                "1(?:[02]\\d|1[12]|[35][01]|[49][1-9]|6[2-9]|7[7-9]|8[0-8])|269|777|835|9(?:[01]1|22|33|55|77|88|99)",
                ,
                ,
                ,
                "100"
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              SC: [, [, , "[19]\\d{2,3}", , , , , , , [3, 4]], , , [, , "1(?:1[1468]|60)|999", , , , "111", , , [3]], [, , , , , , , , , [-1]], , , , "SC", , , , , , , , , , , , , , , , , , [, , "999", , , , "999", , , [3]], , [, , "1(?:[06]\\d|1[0-246-8]|2[0-8]|3[13]|4[0-2]|5[15]|7[124-6]|8[158]|9[015])|9(?:6\\d\\d|99)", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              SD: [
                ,
                [, , "9\\d\\d", , , , , , , [3]],
                ,
                ,
                [, , "999", , , , "999"],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "SD",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "999", , , , "999"],
                ,
                [, , "999", , , , "999"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                [, , , , , , , , , [-1]]
              ],
              SE: [, [, , "[1-37-9]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "11(?:2|(?:3|6\\d)\\d\\d|414|77)|900\\d\\d", , , , "112"], [, , "11811[89]|72\\d{3}", , , , "72000", , , [5, 6]], , , , "SE", , , , , , , , , , , , , , , , , , [, , "112|90000", , , , "112", , , [3, 5]], , [, , "11(?:[25]|313|6(?:00[06]|1(?:1[17]|23))|7[0-8])|2(?:2[02358]|33|4[01]|50|6[1-4])|32[13]|8(?:22|88)|9(?:0(?:00|51)0|12)|(?:11(?:4|8[02-46-9])|7\\d\\d|90[2-4])\\d\\d|(?:118|90)1(?:[02-9]\\d|1[013-9])", , , , "112"], [, , , , , , , , , [-1]], [
                ,
                ,
                "2(?:2[02358]|33|4[01]|50|6[1-4])|32[13]|8(?:22|88)|912",
                ,
                ,
                ,
                "220",
                ,
                ,
                [3]
              ], , [, , "7\\d{4}", , , , "70000", , , [5]]],
              SG: [, [, , "[179]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "99[359]", , , , "993", , , [3]], [, , , , , , , , , [-1]], , , , "SG", , , , , , , , , , , , , , , , , , [, , "99[359]", , , , "993", , , [3]], , [, , "1(?:(?:[01368]\\d|44)\\d|[57]\\d{2,3}|9(?:0[1-9]|[1-9]\\d))|77222|99[02-9]|100", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , "772\\d\\d", , , , "77200", , , [5]]],
              SH: [, [, , "[129]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "9(?:11|99)", , , , "911", , , [3]], [, , , , , , , , , [-1]], , , , "SH", , , , , , , , , , , , , , , , , , [, , "9(?:11|99)", , , , "911", , , [3]], , [
                ,
                ,
                "1\\d{2,3}|26[01]\\d\\d|9(?:11|99)",
                ,
                ,
                ,
                "100"
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              SI: [, [, , "1\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "11(?:(?:0|6\\d)\\d\\d|[23]|8\\d\\d?)", , , , "112"], [, , , , , , , , , [-1]], , , , "SI", , , , , , , , , , , , , , , , , , [, , "11[23]", , , , "112", , , [3]], , [, , "1(?:1(?:00[146]|[23]|6(?:000|1(?:11|23))|8(?:[08]|99))|9(?:059|1(?:0[12]|16)|5|70|87|9(?:00|[149])))|19(?:08|81)[09]", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              SJ: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "11[023]", , , , "110"], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], , , , "SJ", , , , , , , , , , , , , , , , , , [, , "11[023]", , , , "110"], , [, , "11[023]", , , , "110"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              SK: [, [, , "1\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [, , "1(?:1(?:2|6\\d{3})|5[058])", , , , "112", , , [3, 6]], [, , , , , , , , , [-1]], , , , "SK", , , , , , , , , , , , , , , , , , [, , "1(?:12|5[058])", , , , "112", , , [3]], , [, , "1(?:1(?:2|6(?:000|111)|8[0-8])|[248]\\d{3}|5[0589])", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              SL: [, [, , "[069]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "(?:01|99)9", , , , "019", , , [3]], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], , , , "SL", , , , , , , , , , , , , , , , , , [, , "(?:01|99)9", , , , "019", , , [3]], , [, , "(?:01|99)9|60400", , , , "019"], [, , , , , , , , , [-1]], [, , "604\\d\\d", , , , "60400", , , [5]], , [, , "604\\d\\d", , , , "60400", , , [5]]],
              SM: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "11[358]", , , , "113"], [, , , , , , , , , [-1]], , , , "SM", , , , , , , , , , , , , , , , , , [, , "11[358]", , , , "113"], , [, , "11[358]", , , , "113"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              SN: [, [, , "[12]\\d{1,5}", , , , , , , [2, 3, 4, 5, 6]], , , [, , "1(?:515|[78])|2(?:00|1)\\d{3}", , , , "17", , , [2, 4, 5, 6]], [
                ,
                ,
                "2(?:0[246]|[468])\\d{3}",
                ,
                ,
                ,
                "24000",
                ,
                ,
                [5, 6]
              ], , , , "SN", , , , , , , , , , , , , , , , , , [, , "1[78]", , , , "17", , , [2]], , [, , "1(?:1[69]|(?:[246]\\d|51)\\d)|2(?:0[0-246]|[12468])\\d{3}|1[278]", , , , "12"], [, , "2(?:01|2)\\d{3}", , , , "22000", , , [5, 6]], [, , "1[46]\\d\\d", , , , "1400", , , [4]], , [, , "2[468]\\d{3}", , , , "24000", , , [5]]],
              SO: [, [, , "[57-9]\\d\\d", , , , , , , [3]], , , [, , "555|888|999", , , , "555"], [, , , , , , , , , [-1]], , , , "SO", , , , , , , , , , , , , , , , , , [, , "555|888|999", , , , "555"], , [, , "555|777|888|999", , , , "555"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              SR: [, [
                ,
                ,
                "1\\d{2,3}",
                ,
                ,
                ,
                ,
                ,
                ,
                [3, 4]
              ], , , [, , "115", , , , "115", , , [3]], [, , , , , , , , , [-1]], , , , "SR", , , , , , , , , , , , , , , , , , [, , "115", , , , "115", , , [3]], , [, , "1\\d{2,3}", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              SS: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "999", , , , "999"], [, , , , , , , , , [-1]], , , , "SS", , , , , , , , , , , , , , , , , , [, , "999", , , , "999"], , [, , "999", , , , "999"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              ST: [
                ,
                [, , "1\\d\\d", , , , , , , [3]],
                ,
                ,
                [, , "112", , , , "112"],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "ST",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "112", , , , "112"],
                ,
                [, , "112", , , , "112"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                [, , , , , , , , , [-1]]
              ],
              SV: [, [, , "[149]\\d\\d(?:\\d{2,3})?", , , , , , , [3, 5, 6]], , , [, , "116\\d{3}|911", , , , "911", , , [3, 6]], [, , , , , , , , , [-1]], , , , "SV", , , , , , , , , , , , , , , , , , [, , "91[13]", , , , "911", , , [3]], , [, , "1(?:1(?:2|6111)|2[136-8]|3[0-6]|9[05])|40404|9(?:1\\d|29)", , , , "112"], [, , , , , , , , , [-1]], [, , "404\\d\\d", , , , "40400", , , [5]], , [, , "404\\d\\d", , , , "40400", , , [5]]],
              SX: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:19|88)", , , , "919"], [, , , , , , , , , [-1]], , , , "SX", , , , , , , , , , , , , , , , , , [, , "919", , , , "919"], , [, , "9(?:19|88)", , , , "919"], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              SY: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "11[023]", , , , "110"], [, , , , , , , , , [-1]], , , , "SY", , , , , , , , , , , , , , , , , , [, , "11[023]", , , , "110"], , [, , "11[023]", , , , "110"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              SZ: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "999", , , , "999"], [, , , , , , , , , [-1]], , , , "SZ", , , , , , , , , , , , , , , , , , [, , "999", , , , "999"], , [, , "999", , , , "999"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              TC: [
                ,
                [, , "9\\d\\d", , , , , , , [3]],
                ,
                ,
                [, , "9(?:11|88|99)", , , , "911"],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "TC",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "9(?:11|99)", , , , "911"],
                ,
                [, , "9(?:11|88|99)", , , , "911"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                [, , , , , , , , , [-1]]
              ],
              TD: [, [, , "1\\d", , , , , , , [2]], , , [, , "1[78]", , , , "17"], [, , , , , , , , , [-1]], , , , "TD", , , , , , , , , , , , , , , , , , [, , "1[78]", , , , "17"], , [, , "1[78]", , , , "17"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              TG: [, [, , "1\\d{2,3}", , , , , , , [3, 4]], , , [, , "1(?:1[78]|7[127])", , , , "117", , , [3]], [, , , , , , , , , [-1]], , , , "TG", , , , , , , , , , , , , , , , , , [, , "1(?:1[78]|7[127])", , , , "117", , , [3]], , [, , "1(?:011|1[078]|7[127])", , , , "110"], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              TH: [, [, , "1\\d{2,3}", , , , , , , [3, 4]], , , [, , "1(?:1(?:00|2[03]|3[3479]|7[67]|9[0246])|578|6(?:44|6[79]|88|9[16])|88\\d|9[19])|1[15]55", , , , "191"], [, , "1(?:113|2[23]\\d|5(?:09|56))", , , , "1113", , , [4]], , , , "TH", , , , , , , , , , , , , , , , , , [, , "1(?:669|9[19])", , , , "191"], , [
                ,
                ,
                "1(?:0[0-2]|1(?:0[03]|1[1-35]|2[0358]|3[03-79]|4[02-489]|5[04-9]|6[04-79]|7[03-9]|8[027-9]|9[02-9])|2(?:22|3[89]|66)|3(?:18|2[23]|3[013]|5[56]|6[45]|73)|477|5(?:0\\d|4[0-37-9]|5[1-8]|6[01679]|7[12568]|8[0-24589]|9[013589])|6(?:0[0-29]|2[03]|4[3-6]|6[1-9]|7[0257-9]|8[0158]|9[014-9])|7(?:[14]9|7[27]|90)|888|9[19])",
                ,
                ,
                ,
                "100"
              ], [, , "1(?:1(?:03|1[15]|2[58]|3[056]|4[02-49]|5[046-9]|7[03-589]|9[57-9])|5(?:0[0-8]|4[0-378]|5[1-478]|7[156])|6(?:20|4[356]|6[1-68]|7[057-9]|8[015]|9[0457-9]))|1(?:1[68]|26|3[1-35]|5[689]|60|7[17])\\d", , , , "1103", , , [4]], [, , "114[89]", , , , "1148", , , [4]], , [, , , , , , , , , [-1]]],
              TJ: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "1(?:0[1-3]|12)", , , , "101"], [, , , , , , , , , [-1]], , , , "TJ", , , , , , , , , , , , , , , , , , [, , "1(?:0[1-3]|12)", , , , "101"], , [, , "1(?:0[1-3]|12)", , , , "101"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              TL: [, [
                ,
                ,
                "1\\d\\d",
                ,
                ,
                ,
                ,
                ,
                ,
                [3]
              ], , , [, , "11[25]", , , , "112"], [, , , , , , , , , [-1]], , , , "TL", , , , , , , , , , , , , , , , , , [, , "11[25]", , , , "112"], , [, , "1(?:0[02]|1[25]|2[0138]|72|9[07])", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              TM: [, [, , "0\\d", , , , , , , [2]], , , [, , "0[1-49]", , , , "01"], [, , , , , , , , , [-1]], , , , "TM", , , , , , , , , , , , , , , , , , [, , "0[1-3]", , , , "01"], , [, , "0[1-49]", , , , "01"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              TN: [
                ,
                [, , "1\\d\\d", , , , , , , [3]],
                ,
                ,
                [, , "19[078]", , , , "190"],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "TN",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "19[078]", , , , "190"],
                ,
                [, , "19[078]", , , , "190"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                [, , , , , , , , , [-1]]
              ],
              TO: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:11|22|33|99)", , , , "911"], [, , , , , , , , , [-1]], , , , "TO", , , , , , , , , , , , , , , , , , [, , "9(?:11|22|33|99)", , , , "911"], , [, , "9(?:11|22|33|99)", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              TR: [, [, , "[1-9]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "1(?:1[02]|22|3[126]|4[04]|5[15-9]|6[18]|77|83)", , , , "110", , , [3]], [, , , , , , , , , [-1]], , , , "TR", , , , , , , , , , , , , , , , , , [, , "1(?:1[02]|55)", , , , "110", , , [3]], , [
                ,
                ,
                "1(?:1(?:[02-79]|8(?:1[018]|2[0245]|3[2-4]|42|5[058]|6[06]|7[07]|8[01389]|9[089]))|3(?:37|[58]6|65)|471|5(?:07|78)|6(?:[02]6|99)|8(?:63|95))|2(?:077|268|4(?:17|23)|5(?:7[26]|82)|6[14]4|8\\d\\d|9(?:30|89))|3(?:0(?:05|72)|353|4(?:06|30|64)|502|674|747|851|9(?:1[29]|60))|4(?:0(?:25|3[12]|[47]2)|3(?:3[13]|[89]1)|439|5(?:43|55)|717|832)|5(?:145|290|[4-6]\\d\\d|772|833|9(?:[06]1|92))|6(?:236|6(?:12|39|8[59])|769)|7890|8(?:688|7(?:28|65)|85[06])|9(?:159|290)|1[2-9]\\d",
                ,
                ,
                ,
                "110"
              ], [, , "(?:285|542)0", , , , "2850", , , [4]], [, , , , , , , , , [-1]], , [, , "1(?:3(?:37|[58]6|65)|4(?:4|71)|5(?:07|78)|6(?:[02]6|99)|8(?:3|63|95))|(?:2(?:07|26|4[12]|5[78]|6[14]|8\\d|9[38])|3(?:0[07]|[38]5|4[036]|50|67|74|9[16])|4(?:0[2-47]|3[389]|[48]3|5[45]|71)|5(?:14|29|[4-6]\\d|77|83|9[069])|6(?:23|6[138]|76)|789|8(?:68|7[26]|85)|9(?:15|29))\\d", , , , "144", , , [3, 4]]],
              TT: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:88|9[09])", , , , "988"], [, , , , , , , , , [-1]], , , , "TT", , , , , , , , , , , , , , , , , , [, , "99[09]", , , , "990"], , [
                ,
                ,
                "9(?:88|9[09])",
                ,
                ,
                ,
                "988"
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              TV: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "911", , , , "911"], [, , , , , , , , , [-1]], , , , "TV", , , , , , , , , , , , , , , , , , [, , "911", , , , "911"], , [, , "1\\d\\d|911", , , , "100"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              TW: [, [, , "1\\d{2,3}", , , , , , , [3, 4]], , , [, , "11[0289]|1(?:81|92)\\d", , , , "110"], [, , "10[56]", , , , "105", , , [3]], , , , "TW", , , , , , , , , , , , , , , , , , [, , "11[029]", , , , "110", , , [3]], , [
                ,
                ,
                "1(?:0[04-6]|1[0237-9]|3[389]|6[05-8]|7[07]|8(?:0|11)|9(?:19|22|5[057]|68|8[05]|9[15689]))",
                ,
                ,
                ,
                "100"
              ], [, , "1(?:65|9(?:1\\d|50|85|98))", , , , "165"], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              TZ: [, [, , "[149]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "1(?:1[0-79]|9[09])|999", , , , "110", , , [3]], [, , , , , , , , , [-1]], , , , "TZ", , , , , , , , , , , , , , , , , , [, , "11[0-245]|999", , , , "110", , , [3]], , [, , "1(?:1\\d|9[09])|46400|999", , , , "110"], [, , , , , , , , , [-1]], [, , "464\\d\\d", , , , "46400", , , [5]], , [, , "464\\d\\d", , , , "46400", , , [5]]],
              UA: [
                ,
                [, , "[189]\\d{2,5}", , , , , , , [3, 4, 5, 6]],
                ,
                ,
                [, , "1(?:0[1-3]|1(?:2|6\\d{3}))", , , , "101", , , [3, 6]],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "UA",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "1(?:0[1-3]|12)", , , , "101", , , [3]],
                ,
                [, , "1(?:0[1-49]|1(?:2|6(?:000|1(?:11|23))|8\\d\\d?)|(?:[278]|5\\d)\\d)|[89]00\\d\\d?|151|1(?:06|4\\d|6)\\d\\d", , , , "101"],
                [, , , , , , , , , [-1]],
                [, , "(?:118|[89]00)\\d\\d?", , , , "1180", , , [4, 5]],
                ,
                [, , , , , , , , , [-1]]
              ],
              UG: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "999", , , , "999"], [, , , , , , , , , [-1]], , , , "UG", , , , , , , , , , , , , , , , , , [, , "999", , , , "999"], , [, , "999", , , , "999"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              US: [, [, , "[1-9]\\d{2,5}", , , , , , , [3, 4, 5, 6]], , , [
                ,
                ,
                "112|611|9(?:11|33|88)",
                ,
                ,
                ,
                "112",
                ,
                ,
                [3]
              ], [, , "24280|(?:381|968)35|4(?:3355|7553|8221)|5(?:(?:489|934)2|5928)|72078|(?:323|960)40|(?:276|414)63|(?:2(?:520|744)|7390|9968)9|(?:693|732|976)88|(?:3(?:556|825)|5294|8623|9729)4|(?:3378|4136|7642|8961|9979)6|(?:4(?:6(?:15|32)|827)|(?:591|720)8|9529)7", , , , "24280", , , [5]], , , , "US", , , , , , , , , , , , , , , , , , [, , "112|911", , , , "112", , , [3]], , [, , "11(?:2|5[1-47]|[68]\\d|7[0-57]|98)|[2-9]\\d{3,5}|[2-8]11|9(?:11|33|88)", , , , "112"], [
                ,
                ,
                "2(?:3333|(?:4224|7562|900)2|56447|6688)|3(?:1010|2665|7404)|40404|560560|6(?:0060|22639|5246|7622)|7(?:0701|3822|4666)|8(?:(?:3825|7226)5|4816)|99099",
                ,
                ,
                ,
                "23333",
                ,
                ,
                [5, 6]
              ], [, , "336\\d\\d|[2-9]\\d{3}|[2356]11", , , , "211", , , [3, 4, 5]], , [, , "[2-9]\\d{4,5}", , , , "20000", , , [5, 6]]],
              UY: [, [, , "[19]\\d{2,3}", , , , , , , [3, 4]], , , [, , "128|911", , , , "128", , , [3]], [, , , , , , , , , [-1]], , , , "UY", , , , , , , , , , , , , , , , , , [, , "128|911", , , , "128", , , [3]], , [, , "1(?:0[4-9]|1[2368]|2[0-3568]|787)|911", , , , "104"], [, , "178\\d", , , , "1780", , , [4]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              UZ: [
                ,
                [, , "[04]\\d(?:\\d(?:\\d{2})?)?", , , , , , , [2, 3, 5]],
                ,
                ,
                [, , "0(?:0[1-3]|[1-3]|50)", , , , "01", , , [2, 3]],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "UZ",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "0(?:0[1-3]|[1-3]|50)", , , , "01", , , [2, 3]],
                ,
                [, , "0(?:0[1-3]|[1-3]|50)|45400", , , , "01"],
                [, , , , , , , , , [-1]],
                [, , "454\\d\\d", , , , "45400", , , [5]],
                ,
                [, , "454\\d\\d", , , , "45400", , , [5]]
              ],
              VA: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "11[2358]", , , , "112"], [, , , , , , , , , [-1]], , , , "VA", , , , , , , , , , , , , , , , , , [, , "11[2358]", , , , "112"], , [, , "11[2358]", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              VC: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:11|88|99)", , , , "911"], [, , , , , , , , , [-1]], , , , "VC", , , , , , , , , , , , , , , , , , [, , "9(?:11|99)", , , , "911"], , [
                ,
                ,
                "9(?:11|88|99)",
                ,
                ,
                ,
                "911"
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              VE: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "1(?:12|71)|911", , , , "112"], [, , , , , , , , , [-1]], , , , "VE", , , , , , , , , , , , , , , , , , [, , "1(?:12|71)|911", , , , "112"], , [, , "1(?:12|71)|911", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              VG: [, [, , "9\\d\\d", , , , , , , [3]], , , [, , "9(?:11|88|99)", , , , "911"], [, , , , , , , , , [-1]], , , , "VG", , , , , , , , , , , , , , , , , , [, , "9(?:11|99)", , , , "911"], , [, , "9(?:11|88|99)", , , , "911"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              VI: [
                ,
                [, , "9\\d\\d", , , , , , , [3]],
                ,
                ,
                [, , "9(?:11|88)", , , , "911"],
                [, , , , , , , , , [-1]],
                ,
                ,
                ,
                "VI",
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [, , "911", , , , "911"],
                ,
                [, , "9(?:11|88)", , , , "911"],
                [, , , , , , , , , [-1]],
                [, , , , , , , , , [-1]],
                ,
                [, , , , , , , , , [-1]]
              ],
              VN: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "11[3-5]", , , , "113"], [, , , , , , , , , [-1]], , , , "VN", , , , , , , , , , , , , , , , , , [, , "11[3-5]", , , , "113"], , [, , "11[3-5]", , , , "113"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              VU: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "112", , , , "112"], [, , , , , , , , , [-1]], , , , "VU", , , , , , , , , , , , , , , , , , [, , "112", , , , "112"], , [
                ,
                ,
                "112",
                ,
                ,
                ,
                "112"
              ], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              WF: [, [, , "1\\d", , , , , , , [2]], , , [, , "1[578]", , , , "15"], [, , , , , , , , , [-1]], , , , "WF", , , , , , , , , , , , , , , , , , [, , "1[578]", , , , "15"], , [, , "1[578]", , , , "15"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              WS: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "9(?:11|9[4-69])", , , , "911"], [, , , , , , , , , [-1]], , , , "WS", , , , , , , , , , , , , , , , , , [, , "9(?:11|9[4-69])", , , , "911"], , [, , "1(?:1[12]|2[0-6]|[39]0)|9(?:11|9[4-79])", , , , "111"], [, , , , , , , , , [-1]], [, , "12[0-6]", , , , "120"], , [, , , , , , , , , [-1]]],
              XK: [, [
                ,
                ,
                "1\\d\\d",
                ,
                ,
                ,
                ,
                ,
                ,
                [3]
              ], , , [, , "1(?:12|9[2-4])", , , , "112"], [, , , , , , , , , [-1]], , , , "XK", , , , , , , , , , , , , , , , , , [, , "1(?:12|9[2-4])", , , , "112"], , [, , "1(?:12|9[2-4])", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              YE: [, [, , "1\\d\\d", , , , , , , [3]], , , [, , "19[1459]", , , , "191"], [, , , , , , , , , [-1]], , , , "YE", , , , , , , , , , , , , , , , , , [, , "19[1459]", , , , "191"], , [, , "19[1459]", , , , "191"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              YT: [, [, , "1\\d\\d?", , , , , , , [2, 3]], , , [, , "1(?:12|5)", , , , "15"], [, , , , , , , , , [-1]], , , , "YT", , , , , , , , , , , , , , , , , , [
                ,
                ,
                "1(?:12|5)",
                ,
                ,
                ,
                "15"
              ], , [, , "1(?:12|5)", , , , "15"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              ZA: [, [, , "[134]\\d{2,4}", , , , , , , [3, 4, 5]], , , [, , "1(?:01\\d\\d|12)", , , , "112", , , [3, 5]], [, , "41(?:348|851)", , , , "41348", , , [5]], , , , "ZA", , , , , , , , , , , , , , , , , , [, , "1(?:01(?:11|77)|12)", , , , "112", , , [3, 5]], , [, , "1(?:0(?:1(?:11|77)|20|7)|1[12]|77(?:3[237]|[45]7|6[279]|9[26]))|[34]\\d{4}", , , , "107"], [, , "3(?:078[23]|7(?:064|567)|8126)|4(?:394[16]|7751|8837)|4[23]699", , , , "30782", , , [5]], [, , "111", , , , "111", , , [3]], , [
                ,
                ,
                "[34]\\d{4}",
                ,
                ,
                ,
                "30000",
                ,
                ,
                [5]
              ]],
              ZM: [, [, , "[19]\\d\\d", , , , , , , [3]], , , [, , "112|99[139]", , , , "112"], [, , , , , , , , , [-1]], , , , "ZM", , , , , , , , , , , , , , , , , , [, , "112|99[139]", , , , "112"], , [, , "112|99[139]", , , , "112"], [, , , , , , , , , [-1]], [, , , , , , , , , [-1]], , [, , , , , , , , , [-1]]],
              ZW: [, [, , "[139]\\d\\d(?:\\d{2})?", , , , , , , [3, 5]], , , [, , "112|9(?:5[023]|61|9[3-59])", , , , "112", , , [3]], [, , "3[013-57-9]\\d{3}", , , , "30000", , , [5]], , , , "ZW", , , , , , , , , , , , , , , , , , [, , "112|99[3-59]", , , , "112", , , [3]], , [, , "11[2469]|3[013-57-9]\\d{3}|9(?:5[023]|6[0-25]|9[3-59])", , , , "112"], [
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                ,
                [-1]
              ], [, , "114|9(?:5[023]|6[0-25])", , , , "114", , , [3]], , [, , , , , , , , , [-1]]]
            };
            i18n.phonenumbers.ShortNumberInfo = function() {
              this.regionToMetadataMap = {};
            };
            goog.addSingletonGetter(i18n.phonenumbers.ShortNumberInfo);
            i18n.phonenumbers.ShortNumberInfo.REGIONS_WHERE_EMERGENCY_NUMBERS_MUST_BE_EXACT_ = ["BR", "CL", "NI"];
            i18n.phonenumbers.ShortNumberInfo.ShortNumberCost = { TOLL_FREE: 0, STANDARD_RATE: 1, PREMIUM_RATE: 2, UNKNOWN_COST: 3 };
            i18n.phonenumbers.ShortNumberInfo.prototype.getRegionCodesForCountryCode_ = function(a2) {
              return (a2 = i18n.phonenumbers.metadata.countryCodeToRegionCodeMap[a2]) ? a2 : [];
            };
            i18n.phonenumbers.ShortNumberInfo.prototype.regionDialingFromMatchesNumber_ = function(a2, b2) {
              a2 = this.getRegionCodesForCountryCode_(a2.getCountryCodeOrDefault());
              return null != b2 && a2.includes(b2);
            };
            i18n.phonenumbers.ShortNumberInfo.prototype.isPossibleShortNumberForRegion = function(a2, b2) {
              if (!this.regionDialingFromMatchesNumber_(a2, b2))
                return false;
              b2 = this.getMetadataForRegion_(b2);
              if (!b2)
                return false;
              a2 = this.getNationalSignificantNumber_(a2).length;
              return b2.getGeneralDesc().possibleLengthArray().includes(a2);
            };
            i18n.phonenumbers.ShortNumberInfo.prototype.isPossibleShortNumber = function(a2) {
              var b2 = this.getRegionCodesForCountryCode_(a2.getCountryCodeOrDefault());
              a2 = this.getNationalSignificantNumber_(a2).length;
              for (var c2 = 0; c2 < b2.length; c2++) {
                var d2 = this.getMetadataForRegion_(b2[c2]);
                if (d2 && d2.getGeneralDesc().possibleLengthArray().includes(a2))
                  return true;
              }
              return false;
            };
            i18n.phonenumbers.ShortNumberInfo.prototype.isValidShortNumberForRegion = function(a2, b2) {
              if (!this.regionDialingFromMatchesNumber_(a2, b2))
                return false;
              b2 = this.getMetadataForRegion_(b2);
              if (!b2)
                return false;
              a2 = this.getNationalSignificantNumber_(a2);
              var c2 = b2.getGeneralDesc();
              if (!this.matchesPossibleNumberAndNationalNumber_(a2, c2))
                return false;
              b2 = b2.getShortCode();
              return this.matchesPossibleNumberAndNationalNumber_(a2, b2);
            };
            i18n.phonenumbers.ShortNumberInfo.prototype.isValidShortNumber = function(a2) {
              var b2 = this.getRegionCodesForCountryCode_(a2.getCountryCodeOrDefault()), c2 = this.getRegionCodeForShortNumberFromRegionList_(a2, b2);
              return 1 < b2.length && null != c2 ? true : this.isValidShortNumberForRegion(a2, c2);
            };
            i18n.phonenumbers.ShortNumberInfo.prototype.getExpectedCostForRegion = function(a2, b2) {
              var c2 = i18n.phonenumbers.ShortNumberInfo.ShortNumberCost;
              if (!this.regionDialingFromMatchesNumber_(a2, b2))
                return c2.UNKNOWN_COST;
              var d2 = this.getMetadataForRegion_(b2);
              if (!d2)
                return c2.UNKNOWN_COST;
              a2 = this.getNationalSignificantNumber_(a2);
              return d2.getGeneralDesc().possibleLengthArray().includes(a2.length) ? this.matchesPossibleNumberAndNationalNumber_(a2, d2.getPremiumRate()) ? c2.PREMIUM_RATE : this.matchesPossibleNumberAndNationalNumber_(
                a2,
                d2.getStandardRate()
              ) ? c2.STANDARD_RATE : this.matchesPossibleNumberAndNationalNumber_(a2, d2.getTollFree()) || this.isEmergencyNumber(a2, b2) ? c2.TOLL_FREE : c2.UNKNOWN_COST : c2.UNKNOWN_COST;
            };
            i18n.phonenumbers.ShortNumberInfo.prototype.getExpectedCost = function(a2) {
              var b2 = i18n.phonenumbers.ShortNumberInfo.ShortNumberCost, c2 = this.getRegionCodesForCountryCode_(a2.getCountryCodeOrDefault());
              if (0 === c2.length)
                return b2.UNKNOWN_COST;
              if (1 === c2.length)
                return this.getExpectedCostForRegion(a2, c2[0]);
              for (var d2 = b2.TOLL_FREE, e2 = 0; e2 < c2.length; e2++) {
                var f2 = this.getExpectedCostForRegion(a2, c2[e2]);
                switch (f2) {
                  case b2.PREMIUM_RATE:
                    return b2.PREMIUM_RATE;
                  case b2.UNKNOWN_COST:
                    d2 = b2.UNKNOWN_COST;
                    break;
                  case b2.STANDARD_RATE:
                    d2 !== b2.UNKNOWN_COST && (d2 = b2.STANDARD_RATE);
                    break;
                  case b2.TOLL_FREE:
                    break;
                  default:
                    throw Error("Unrecognized cost for region: " + f2);
                }
              }
              return d2;
            };
            i18n.phonenumbers.ShortNumberInfo.prototype.getRegionCodeForShortNumberFromRegionList_ = function(a2, b2) {
              if (0 === b2.length)
                return null;
              if (1 === b2.length)
                return b2[0];
              a2 = this.getNationalSignificantNumber_(a2);
              for (var c2 = 0; c2 < b2.length; c2++) {
                var d2 = b2[c2], e2 = this.getMetadataForRegion_(d2);
                if (e2 && this.matchesPossibleNumberAndNationalNumber_(a2, e2.getShortCode()))
                  return d2;
              }
              return null;
            };
            i18n.phonenumbers.ShortNumberInfo.prototype.getSupportedRegions = function() {
              return Object.keys(i18n.phonenumbers.shortnumbermetadata.countryToMetadata).filter(function(a2) {
                return isNaN(a2);
              });
            };
            i18n.phonenumbers.ShortNumberInfo.prototype.getExampleShortNumber = function(a2) {
              a2 = this.getMetadataForRegion_(a2);
              if (!a2)
                return "";
              a2 = a2.getShortCode();
              return a2.hasExampleNumber() ? a2.getExampleNumber() || "" : "";
            };
            i18n.phonenumbers.ShortNumberInfo.prototype.getExampleShortNumberForCost = function(a2, b2) {
              a2 = this.getMetadataForRegion_(a2);
              if (!a2)
                return "";
              var c2 = i18n.phonenumbers.ShortNumberInfo.ShortNumberCost, d2 = null;
              switch (b2) {
                case c2.TOLL_FREE:
                  d2 = a2.getTollFree();
                  break;
                case c2.STANDARD_RATE:
                  d2 = a2.getStandardRate();
                  break;
                case c2.PREMIUM_RATE:
                  d2 = a2.getPremiumRate();
              }
              return d2 && d2.hasExampleNumber() ? d2.getExampleNumber() || "" : "";
            };
            i18n.phonenumbers.ShortNumberInfo.prototype.connectsToEmergencyNumber = function(a2, b2) {
              return this.matchesEmergencyNumberHelper_(a2, b2, true);
            };
            i18n.phonenumbers.ShortNumberInfo.prototype.isEmergencyNumber = function(a2, b2) {
              return this.matchesEmergencyNumberHelper_(a2, b2, false);
            };
            i18n.phonenumbers.ShortNumberInfo.prototype.getMetadataForRegion_ = function(a2) {
              if (!a2)
                return null;
              a2 = a2.toUpperCase();
              var b2 = this.regionToMetadataMap[a2];
              if (null == b2) {
                b2 = new goog.proto2.PbLiteSerializer();
                var c2 = i18n.phonenumbers.shortnumbermetadata.countryToMetadata[a2];
                if (null == c2)
                  return null;
                b2 = b2.deserialize(i18n.phonenumbers.PhoneMetadata.getDescriptor(), c2);
                this.regionToMetadataMap[a2] = b2;
              }
              return b2;
            };
            i18n.phonenumbers.ShortNumberInfo.prototype.matchesEmergencyNumberHelper_ = function(a2, b2, c2) {
              var d2 = i18n.phonenumbers.PhoneNumberUtil.extractPossibleNumber(a2);
              if (i18n.phonenumbers.PhoneNumberUtil.LEADING_PLUS_CHARS_PATTERN.test(d2))
                return false;
              a2 = this.getMetadataForRegion_(b2);
              if (null == a2 || !a2.hasEmergency())
                return false;
              d2 = i18n.phonenumbers.PhoneNumberUtil.normalizeDigitsOnly(d2);
              b2 = c2 && !i18n.phonenumbers.ShortNumberInfo.REGIONS_WHERE_EMERGENCY_NUMBERS_MUST_BE_EXACT_.includes(b2);
              c2 = a2.getEmergency().getNationalNumberPatternOrDefault();
              return i18n.phonenumbers.PhoneNumberUtil.matchesEntirely(c2, d2) || b2 && i18n.phonenumbers.PhoneNumberUtil.matchesPrefix(c2, d2);
            };
            i18n.phonenumbers.ShortNumberInfo.prototype.isCarrierSpecific = function(a2) {
              var b2 = this.getRegionCodesForCountryCode_(a2.getCountryCodeOrDefault());
              b2 = this.getRegionCodeForShortNumberFromRegionList_(a2, b2);
              a2 = this.getNationalSignificantNumber_(a2);
              b2 = this.getMetadataForRegion_(b2);
              return !!b2 && this.matchesPossibleNumberAndNationalNumber_(a2, b2.getCarrierSpecific());
            };
            i18n.phonenumbers.ShortNumberInfo.prototype.isCarrierSpecificForRegion = function(a2, b2) {
              if (!this.regionDialingFromMatchesNumber_(a2, b2))
                return false;
              a2 = this.getNationalSignificantNumber_(a2);
              b2 = this.getMetadataForRegion_(b2);
              return !!b2 && this.matchesPossibleNumberAndNationalNumber_(a2, b2.getCarrierSpecific());
            };
            i18n.phonenumbers.ShortNumberInfo.prototype.isSmsServiceForRegion = function(a2, b2) {
              if (!this.regionDialingFromMatchesNumber_(a2, b2))
                return false;
              b2 = this.getMetadataForRegion_(b2);
              a2 = this.getNationalSignificantNumber_(a2);
              return !!b2 && this.matchesPossibleNumberAndNationalNumber_(a2, b2.getSmsServices());
            };
            i18n.phonenumbers.ShortNumberInfo.prototype.getNationalSignificantNumber_ = function(a2) {
              if (!a2.hasNationalNumber())
                return "";
              var b2 = "" + a2.getNationalNumber();
              return a2.hasItalianLeadingZero() && a2.getItalianLeadingZero() && 0 < a2.getNumberOfLeadingZerosOrDefault() ? Array(a2.getNumberOfLeadingZerosOrDefault() + 1).join("0") + b2 : b2;
            };
            i18n.phonenumbers.ShortNumberInfo.prototype.matchesPossibleNumberAndNationalNumber_ = function(a2, b2) {
              return 0 < b2.possibleLengthArray().length && !b2.possibleLengthArray().includes(a2.length) ? false : i18n.phonenumbers.PhoneNumberUtil.matchesEntirely(b2.getNationalNumberPatternOrDefault(), a2.toString());
            };
            i18n.phonenumbers.AsYouTypeFormatter = function(a2) {
              this.DIGIT_PLACEHOLDER_ = " ";
              this.DIGIT_PATTERN_ = new RegExp(this.DIGIT_PLACEHOLDER_);
              this.currentOutput_ = "";
              this.formattingTemplate_ = new goog.string.StringBuffer();
              this.currentFormattingPattern_ = "";
              this.accruedInput_ = new goog.string.StringBuffer();
              this.accruedInputWithoutFormatting_ = new goog.string.StringBuffer();
              this.ableToFormat_ = true;
              this.isExpectingCountryCallingCode_ = this.isCompleteNumber_ = this.inputHasFormatting_ = false;
              this.phoneUtil_ = i18n.phonenumbers.PhoneNumberUtil.getInstance();
              this.positionToRemember_ = this.originalPosition_ = this.lastMatchPosition_ = 0;
              this.prefixBeforeNationalNumber_ = new goog.string.StringBuffer();
              this.shouldAddSpaceAfterNationalPrefix_ = false;
              this.extractedNationalPrefix_ = "";
              this.nationalNumber_ = new goog.string.StringBuffer();
              this.possibleFormats_ = [];
              this.defaultCountry_ = a2;
              this.defaultMetadata_ = this.currentMetadata_ = this.getMetadataForRegion_(this.defaultCountry_);
            };
            i18n.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_ = " ";
            i18n.phonenumbers.AsYouTypeFormatter.EMPTY_METADATA_ = new i18n.phonenumbers.PhoneMetadata();
            i18n.phonenumbers.AsYouTypeFormatter.EMPTY_METADATA_.setInternationalPrefix("NA");
            i18n.phonenumbers.AsYouTypeFormatter.ELIGIBLE_FORMAT_PATTERN_ = new RegExp("^[" + i18n.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION + "]*\\$1[" + i18n.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION + "]*(\\$\\d[" + i18n.phonenumbers.PhoneNumberUtil.VALID_PUNCTUATION + "]*)*$");
            i18n.phonenumbers.AsYouTypeFormatter.NATIONAL_PREFIX_SEPARATORS_PATTERN_ = /[- ]/;
            i18n.phonenumbers.AsYouTypeFormatter.MIN_LEADING_DIGITS_LENGTH_ = 3;
            i18n.phonenumbers.AsYouTypeFormatter.prototype.getMetadataForRegion_ = function(a2) {
              a2 = this.phoneUtil_.getCountryCodeForRegion(a2);
              a2 = this.phoneUtil_.getRegionCodeForCountryCode(a2);
              a2 = this.phoneUtil_.getMetadataForRegion(a2);
              return null != a2 ? a2 : i18n.phonenumbers.AsYouTypeFormatter.EMPTY_METADATA_;
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.maybeCreateNewTemplate_ = function() {
              for (var a2 = this.possibleFormats_.length, b2 = 0; b2 < a2; ++b2) {
                var c2 = this.possibleFormats_[b2], d2 = c2.getPatternOrDefault();
                if (this.currentFormattingPattern_ == d2)
                  return false;
                if (this.createFormattingTemplate_(c2))
                  return this.currentFormattingPattern_ = d2, this.shouldAddSpaceAfterNationalPrefix_ = i18n.phonenumbers.AsYouTypeFormatter.NATIONAL_PREFIX_SEPARATORS_PATTERN_.test(c2.getNationalPrefixFormattingRule()), this.lastMatchPosition_ = 0, true;
              }
              return this.ableToFormat_ = false;
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.getAvailableFormats_ = function(a2) {
              for (var b2 = this.isCompleteNumber_ && 0 == this.extractedNationalPrefix_.length && 0 < this.currentMetadata_.intlNumberFormatCount() ? this.currentMetadata_.intlNumberFormatArray() : this.currentMetadata_.numberFormatArray(), c2 = b2.length, d2 = 0; d2 < c2; ++d2) {
                var e2 = b2[d2];
                0 < this.extractedNationalPrefix_.length && this.phoneUtil_.formattingRuleHasFirstGroupOnly(e2.getNationalPrefixFormattingRuleOrDefault()) && !e2.getNationalPrefixOptionalWhenFormatting() && !e2.hasDomesticCarrierCodeFormattingRule() || (0 != this.extractedNationalPrefix_.length || this.isCompleteNumber_ || this.phoneUtil_.formattingRuleHasFirstGroupOnly(e2.getNationalPrefixFormattingRuleOrDefault()) || e2.getNationalPrefixOptionalWhenFormatting()) && i18n.phonenumbers.AsYouTypeFormatter.ELIGIBLE_FORMAT_PATTERN_.test(e2.getFormatOrDefault()) && this.possibleFormats_.push(e2);
              }
              this.narrowDownPossibleFormats_(a2);
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.narrowDownPossibleFormats_ = function(a2) {
              for (var b2 = [], c2 = a2.length - i18n.phonenumbers.AsYouTypeFormatter.MIN_LEADING_DIGITS_LENGTH_, d2 = this.possibleFormats_.length, e2 = 0; e2 < d2; ++e2) {
                var f2 = this.possibleFormats_[e2];
                if (0 == f2.leadingDigitsPatternCount())
                  b2.push(this.possibleFormats_[e2]);
                else {
                  var g2 = Math.min(c2, f2.leadingDigitsPatternCount() - 1);
                  f2 = f2.getLeadingDigitsPattern(g2);
                  0 == a2.search(f2) && b2.push(this.possibleFormats_[e2]);
                }
              }
              this.possibleFormats_ = b2;
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.createFormattingTemplate_ = function(a2) {
              var b2 = a2.getPatternOrDefault();
              this.formattingTemplate_.clear();
              a2 = this.getFormattingTemplate_(b2, a2.getFormatOrDefault());
              return 0 < a2.length ? (this.formattingTemplate_.append(a2), true) : false;
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.getFormattingTemplate_ = function(a2, b2) {
              var c2 = "999999999999999".match(a2)[0];
              if (c2.length < this.nationalNumber_.getLength())
                return "";
              a2 = c2.replace(new RegExp(a2, "g"), b2);
              return a2 = a2.replace(/9/g, this.DIGIT_PLACEHOLDER_);
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.clear = function() {
              this.currentOutput_ = "";
              this.accruedInput_.clear();
              this.accruedInputWithoutFormatting_.clear();
              this.formattingTemplate_.clear();
              this.lastMatchPosition_ = 0;
              this.currentFormattingPattern_ = "";
              this.prefixBeforeNationalNumber_.clear();
              this.extractedNationalPrefix_ = "";
              this.nationalNumber_.clear();
              this.ableToFormat_ = true;
              this.inputHasFormatting_ = false;
              this.originalPosition_ = this.positionToRemember_ = 0;
              this.isExpectingCountryCallingCode_ = this.isCompleteNumber_ = false;
              this.possibleFormats_ = [];
              this.shouldAddSpaceAfterNationalPrefix_ = false;
              this.currentMetadata_ != this.defaultMetadata_ && (this.currentMetadata_ = this.getMetadataForRegion_(this.defaultCountry_));
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.inputDigit = function(a2) {
              return this.currentOutput_ = this.inputDigitWithOptionToRememberPosition_(a2, false);
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.inputDigitAndRememberPosition = function(a2) {
              return this.currentOutput_ = this.inputDigitWithOptionToRememberPosition_(a2, true);
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.inputDigitWithOptionToRememberPosition_ = function(a2, b2) {
              this.accruedInput_.append(a2);
              b2 && (this.originalPosition_ = this.accruedInput_.getLength());
              this.isDigitOrLeadingPlusSign_(a2) ? a2 = this.normalizeAndAccrueDigitsAndPlusSign_(a2, b2) : (this.ableToFormat_ = false, this.inputHasFormatting_ = true);
              if (!this.ableToFormat_) {
                if (!this.inputHasFormatting_) {
                  if (this.attemptToExtractIdd_()) {
                    if (this.attemptToExtractCountryCallingCode_())
                      return this.attemptToChoosePatternWithPrefixExtracted_();
                  } else if (this.ableToExtractLongerNdd_())
                    return this.prefixBeforeNationalNumber_.append(i18n.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_), this.attemptToChoosePatternWithPrefixExtracted_();
                }
                return this.accruedInput_.toString();
              }
              switch (this.accruedInputWithoutFormatting_.getLength()) {
                case 0:
                case 1:
                case 2:
                  return this.accruedInput_.toString();
                case 3:
                  if (this.attemptToExtractIdd_())
                    this.isExpectingCountryCallingCode_ = true;
                  else
                    return this.extractedNationalPrefix_ = this.removeNationalPrefixFromNationalNumber_(), this.attemptToChooseFormattingPattern_();
                default:
                  if (this.isExpectingCountryCallingCode_)
                    return this.attemptToExtractCountryCallingCode_() && (this.isExpectingCountryCallingCode_ = false), this.prefixBeforeNationalNumber_.toString() + this.nationalNumber_.toString();
                  if (0 < this.possibleFormats_.length) {
                    a2 = this.inputDigitHelper_(a2);
                    b2 = this.attemptToFormatAccruedDigits_();
                    if (0 < b2.length)
                      return b2;
                    this.narrowDownPossibleFormats_(this.nationalNumber_.toString());
                    return this.maybeCreateNewTemplate_() ? this.inputAccruedNationalNumber_() : this.ableToFormat_ ? this.appendNationalNumber_(a2) : this.accruedInput_.toString();
                  }
                  return this.attemptToChooseFormattingPattern_();
              }
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.attemptToChoosePatternWithPrefixExtracted_ = function() {
              this.ableToFormat_ = true;
              this.isExpectingCountryCallingCode_ = false;
              this.possibleFormats_ = [];
              this.lastMatchPosition_ = 0;
              this.formattingTemplate_.clear();
              this.currentFormattingPattern_ = "";
              return this.attemptToChooseFormattingPattern_();
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.getExtractedNationalPrefix_ = function() {
              return this.extractedNationalPrefix_;
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.ableToExtractLongerNdd_ = function() {
              if (0 < this.extractedNationalPrefix_.length) {
                var a2 = this.nationalNumber_.toString();
                this.nationalNumber_.clear();
                this.nationalNumber_.append(this.extractedNationalPrefix_);
                this.nationalNumber_.append(a2);
                a2 = this.prefixBeforeNationalNumber_.toString();
                var b2 = a2.lastIndexOf(this.extractedNationalPrefix_);
                this.prefixBeforeNationalNumber_.clear();
                this.prefixBeforeNationalNumber_.append(a2.substring(0, b2));
              }
              return this.extractedNationalPrefix_ != this.removeNationalPrefixFromNationalNumber_();
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.isDigitOrLeadingPlusSign_ = function(a2) {
              return i18n.phonenumbers.PhoneNumberUtil.CAPTURING_DIGIT_PATTERN.test(a2) || 1 == this.accruedInput_.getLength() && i18n.phonenumbers.PhoneNumberUtil.PLUS_CHARS_PATTERN.test(a2);
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.attemptToFormatAccruedDigits_ = function() {
              for (var a2 = this.nationalNumber_.toString(), b2 = this.possibleFormats_.length, c2 = 0; c2 < b2; ++c2) {
                var d2 = this.possibleFormats_[c2], e2 = d2.getPatternOrDefault();
                if (new RegExp("^(?:" + e2 + ")$").test(a2) && (this.shouldAddSpaceAfterNationalPrefix_ = i18n.phonenumbers.AsYouTypeFormatter.NATIONAL_PREFIX_SEPARATORS_PATTERN_.test(d2.getNationalPrefixFormattingRule()), d2 = a2.replace(new RegExp(e2, "g"), d2.getFormat()), d2 = this.appendNationalNumber_(d2), i18n.phonenumbers.PhoneNumberUtil.normalizeDiallableCharsOnly(d2) == this.accruedInputWithoutFormatting_))
                  return d2;
              }
              return "";
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.appendNationalNumber_ = function(a2) {
              var b2 = this.prefixBeforeNationalNumber_.getLength();
              return this.shouldAddSpaceAfterNationalPrefix_ && 0 < b2 && this.prefixBeforeNationalNumber_.toString().charAt(b2 - 1) != i18n.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_ ? this.prefixBeforeNationalNumber_ + i18n.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_ + a2 : this.prefixBeforeNationalNumber_ + a2;
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.getRememberedPosition = function() {
              if (!this.ableToFormat_)
                return this.originalPosition_;
              for (var a2 = 0, b2 = 0, c2 = this.accruedInputWithoutFormatting_.toString(), d2 = this.currentOutput_.toString(); a2 < this.positionToRemember_ && b2 < d2.length; )
                c2.charAt(a2) == d2.charAt(b2) && a2++, b2++;
              return b2;
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.attemptToChooseFormattingPattern_ = function() {
              var a2 = this.nationalNumber_.toString();
              return a2.length >= i18n.phonenumbers.AsYouTypeFormatter.MIN_LEADING_DIGITS_LENGTH_ ? (this.getAvailableFormats_(a2), a2 = this.attemptToFormatAccruedDigits_(), 0 < a2.length ? a2 : this.maybeCreateNewTemplate_() ? this.inputAccruedNationalNumber_() : this.accruedInput_.toString()) : this.appendNationalNumber_(a2);
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.inputAccruedNationalNumber_ = function() {
              var a2 = this.nationalNumber_.toString(), b2 = a2.length;
              if (0 < b2) {
                for (var c2 = "", d2 = 0; d2 < b2; d2++)
                  c2 = this.inputDigitHelper_(a2.charAt(d2));
                return this.ableToFormat_ ? this.appendNationalNumber_(c2) : this.accruedInput_.toString();
              }
              return this.prefixBeforeNationalNumber_.toString();
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.isNanpaNumberWithNationalPrefix_ = function() {
              if (1 != this.currentMetadata_.getCountryCode())
                return false;
              var a2 = this.nationalNumber_.toString();
              return "1" == a2.charAt(0) && "0" != a2.charAt(1) && "1" != a2.charAt(1);
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.removeNationalPrefixFromNationalNumber_ = function() {
              var a2 = this.nationalNumber_.toString(), b2 = 0;
              if (this.isNanpaNumberWithNationalPrefix_())
                b2 = 1, this.prefixBeforeNationalNumber_.append("1").append(i18n.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_), this.isCompleteNumber_ = true;
              else if (this.currentMetadata_.hasNationalPrefixForParsing()) {
                var c2 = new RegExp("^(?:" + this.currentMetadata_.getNationalPrefixForParsing() + ")");
                c2 = a2.match(c2);
                null != c2 && null != c2[0] && 0 < c2[0].length && (this.isCompleteNumber_ = true, b2 = c2[0].length, this.prefixBeforeNationalNumber_.append(a2.substring(0, b2)));
              }
              this.nationalNumber_.clear();
              this.nationalNumber_.append(a2.substring(b2));
              return a2.substring(0, b2);
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.attemptToExtractIdd_ = function() {
              var a2 = this.accruedInputWithoutFormatting_.toString(), b2 = new RegExp("^(?:\\" + i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN + "|" + this.currentMetadata_.getInternationalPrefix() + ")");
              b2 = a2.match(b2);
              return null != b2 && null != b2[0] && 0 < b2[0].length ? (this.isCompleteNumber_ = true, b2 = b2[0].length, this.nationalNumber_.clear(), this.nationalNumber_.append(a2.substring(b2)), this.prefixBeforeNationalNumber_.clear(), this.prefixBeforeNationalNumber_.append(a2.substring(
                0,
                b2
              )), a2.charAt(0) != i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN && this.prefixBeforeNationalNumber_.append(i18n.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_), true) : false;
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.attemptToExtractCountryCallingCode_ = function() {
              if (0 == this.nationalNumber_.getLength())
                return false;
              var a2 = new goog.string.StringBuffer(), b2 = this.phoneUtil_.extractCountryCode(this.nationalNumber_, a2);
              if (0 == b2)
                return false;
              this.nationalNumber_.clear();
              this.nationalNumber_.append(a2.toString());
              a2 = this.phoneUtil_.getRegionCodeForCountryCode(b2);
              i18n.phonenumbers.PhoneNumberUtil.REGION_CODE_FOR_NON_GEO_ENTITY == a2 ? this.currentMetadata_ = this.phoneUtil_.getMetadataForNonGeographicalRegion(b2) : a2 != this.defaultCountry_ && (this.currentMetadata_ = this.getMetadataForRegion_(a2));
              this.prefixBeforeNationalNumber_.append("" + b2).append(i18n.phonenumbers.AsYouTypeFormatter.SEPARATOR_BEFORE_NATIONAL_NUMBER_);
              this.extractedNationalPrefix_ = "";
              return true;
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.normalizeAndAccrueDigitsAndPlusSign_ = function(a2, b2) {
              if (a2 == i18n.phonenumbers.PhoneNumberUtil.PLUS_SIGN) {
                var c2 = a2;
                this.accruedInputWithoutFormatting_.append(a2);
              } else
                c2 = i18n.phonenumbers.PhoneNumberUtil.DIGIT_MAPPINGS[a2], this.accruedInputWithoutFormatting_.append(c2), this.nationalNumber_.append(c2);
              b2 && (this.positionToRemember_ = this.accruedInputWithoutFormatting_.getLength());
              return c2;
            };
            i18n.phonenumbers.AsYouTypeFormatter.prototype.inputDigitHelper_ = function(a2) {
              var b2 = this.formattingTemplate_.toString();
              if (0 <= b2.substring(this.lastMatchPosition_).search(this.DIGIT_PATTERN_)) {
                var c2 = b2.search(this.DIGIT_PATTERN_);
                a2 = b2.replace(this.DIGIT_PATTERN_, a2);
                this.formattingTemplate_.clear();
                this.formattingTemplate_.append(a2);
                this.lastMatchPosition_ = c2;
                return a2.substring(0, this.lastMatchPosition_ + 1);
              }
              1 == this.possibleFormats_.length && (this.ableToFormat_ = false);
              this.currentFormattingPattern_ = "";
              return this.accruedInput_.toString();
            };
            Object.defineProperty(exports, "__esModule", { value: true });
            exports.default = i18n.phonenumbers;
            module.exports = exports["default"];
          }).call(this);
        }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
      }, {}] }, {}, [1])(1);
    });
  }
});

// node_modules/ngx-bootstrap/utils/fesm2022/ngx-bootstrap-utils.mjs
var Trigger = class {
  constructor(open, close) {
    this.open = open;
    this.close = close || open;
  }
  isManual() {
    return this.open === "manual" || this.close === "manual";
  }
};
var DEFAULT_ALIASES = {
  hover: ["mouseover", "mouseout"],
  focus: ["focusin", "focusout"]
};
function parseTriggers(triggers, aliases = DEFAULT_ALIASES) {
  const trimmedTriggers = (triggers || "").trim();
  if (trimmedTriggers.length === 0) {
    return [];
  }
  const parsedTriggers = trimmedTriggers.split(/\s+/).map((trigger) => trigger.split(":")).map((triggerPair) => {
    const alias = aliases[triggerPair[0]] || triggerPair;
    return new Trigger(alias[0], alias[1]);
  });
  const manualTriggers = parsedTriggers.filter((triggerPair) => triggerPair.isManual());
  if (manualTriggers.length > 1) {
    throw new Error("Triggers parse error: only one manual trigger is allowed");
  }
  if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
    throw new Error("Triggers parse error: manual trigger can't be mixed with other triggers");
  }
  return parsedTriggers;
}
function listenToTriggersV2(renderer, options) {
  const parsedTriggers = parseTriggers(options.triggers);
  const target = options.target;
  if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
    return Function.prototype;
  }
  const listeners = [];
  const _registerHide = [];
  const registerHide = () => {
    _registerHide.forEach((fn) => listeners.push(fn()));
    _registerHide.length = 0;
  };
  parsedTriggers.forEach((trigger) => {
    const useToggle = trigger.open === trigger.close;
    const showFn = useToggle ? options.toggle : options.show;
    if (!useToggle && trigger.close && options.hide) {
      const triggerClose = trigger.close;
      const optionsHide = options.hide;
      const _hide = () => renderer.listen(target, triggerClose, optionsHide);
      _registerHide.push(_hide);
    }
    if (showFn) {
      listeners.push(renderer.listen(target, trigger.open, () => showFn(registerHide)));
    }
  });
  return () => {
    listeners.forEach((unsubscribeFn) => unsubscribeFn());
  };
}
function registerOutsideClick(renderer, options) {
  if (!options.outsideClick) {
    return Function.prototype;
  }
  return renderer.listen("document", "click", (event) => {
    if (options.target && options.target.contains(event.target)) {
      return;
    }
    if (options.targets && options.targets.some((target) => target.contains(event.target))) {
      return;
    }
    if (options.hide) {
      options.hide();
    }
  });
}
function registerEscClick(renderer, options) {
  if (!options.outsideEsc) {
    return Function.prototype;
  }
  return renderer.listen("document", "keyup.esc", (event) => {
    if (options.target && options.target.contains(event.target)) {
      return;
    }
    if (options.targets && options.targets.some((target) => target.contains(event.target))) {
      return;
    }
    if (options.hide) {
      options.hide();
    }
  });
}
var win = typeof window !== "undefined" && window || {};
var document2 = win.document;
var location = win.location;
var gc = win.gc ? () => win.gc() : () => null;
var performance = win.performance ? win.performance : null;
var Event = win.Event;
var MouseEvent = win.MouseEvent;
var KeyboardEvent = win.KeyboardEvent;
var EventTarget = win.EventTarget;
var History = win.History;
var Location = win.Location;
var EventListener = win.EventListener;
var BsVerions;
(function(BsVerions2) {
  BsVerions2["isBs4"] = "bs4";
  BsVerions2["isBs5"] = "bs5";
})(BsVerions || (BsVerions = {}));
var guessedVersion;
function _guessBsVersion() {
  const spanEl = win.document.createElement("span");
  spanEl.innerText = "testing bs version";
  spanEl.classList.add("d-none");
  spanEl.classList.add("pl-1");
  win.document.head.appendChild(spanEl);
  const checkPadding = win.getComputedStyle(spanEl).paddingLeft;
  if (checkPadding && parseFloat(checkPadding)) {
    win.document.head.removeChild(spanEl);
    return "bs4";
  }
  win.document.head.removeChild(spanEl);
  return "bs5";
}
function setTheme(theme) {
  guessedVersion = theme;
}
function isBs4() {
  if (guessedVersion)
    return guessedVersion === "bs4";
  guessedVersion = _guessBsVersion();
  return guessedVersion === "bs4";
}
function isBs5() {
  if (guessedVersion)
    return guessedVersion === "bs5";
  guessedVersion = _guessBsVersion();
  return guessedVersion === "bs5";
}
function getBsVer() {
  return {
    isBs4: isBs4(),
    isBs5: isBs5()
  };
}
var _hideMsg = typeof console === "undefined" || !("warn" in console);

// node_modules/ngx-bootstrap/positioning/fesm2022/ngx-bootstrap-positioning.mjs
var MapPlacementInToRL;
(function(MapPlacementInToRL2) {
  MapPlacementInToRL2["top"] = "top";
  MapPlacementInToRL2["bottom"] = "bottom";
  MapPlacementInToRL2["left"] = "left";
  MapPlacementInToRL2["right"] = "right";
  MapPlacementInToRL2["auto"] = "auto";
  MapPlacementInToRL2["end"] = "right";
  MapPlacementInToRL2["start"] = "left";
  MapPlacementInToRL2["top left"] = "top left";
  MapPlacementInToRL2["top right"] = "top right";
  MapPlacementInToRL2["right top"] = "right top";
  MapPlacementInToRL2["right bottom"] = "right bottom";
  MapPlacementInToRL2["bottom right"] = "bottom right";
  MapPlacementInToRL2["bottom left"] = "bottom left";
  MapPlacementInToRL2["left bottom"] = "left bottom";
  MapPlacementInToRL2["left top"] = "left top";
  MapPlacementInToRL2["top start"] = "top left";
  MapPlacementInToRL2["top end"] = "top right";
  MapPlacementInToRL2["end top"] = "right top";
  MapPlacementInToRL2["end bottom"] = "right bottom";
  MapPlacementInToRL2["bottom end"] = "bottom right";
  MapPlacementInToRL2["bottom start"] = "bottom left";
  MapPlacementInToRL2["start bottom"] = "start bottom";
  MapPlacementInToRL2["start top"] = "left top";
})(MapPlacementInToRL || (MapPlacementInToRL = {}));
var PlacementForBs5;
(function(PlacementForBs52) {
  PlacementForBs52["top"] = "top";
  PlacementForBs52["bottom"] = "bottom";
  PlacementForBs52["left"] = "start";
  PlacementForBs52["right"] = "end";
  PlacementForBs52["auto"] = "auto";
  PlacementForBs52["end"] = "end";
  PlacementForBs52["start"] = "start";
  PlacementForBs52["top left"] = "top start";
  PlacementForBs52["top right"] = "top end";
  PlacementForBs52["right top"] = "end top";
  PlacementForBs52["right bottom"] = "end bottom";
  PlacementForBs52["bottom right"] = "bottom end";
  PlacementForBs52["bottom left"] = "bottom start";
  PlacementForBs52["left bottom"] = "start bottom";
  PlacementForBs52["left top"] = "start top";
  PlacementForBs52["top start"] = "top start";
  PlacementForBs52["top end"] = "top end";
  PlacementForBs52["end top"] = "end top";
  PlacementForBs52["end bottom"] = "end bottom";
  PlacementForBs52["bottom end"] = "bottom end";
  PlacementForBs52["bottom start"] = "bottom start";
  PlacementForBs52["start bottom"] = "start bottom";
  PlacementForBs52["start top"] = "start top";
})(PlacementForBs5 || (PlacementForBs5 = {}));
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  const window2 = element.ownerDocument.defaultView;
  const css = window2?.getComputedStyle(element, null);
  return property ? css && css[property] : css;
}
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }
  const noOffsetParent = null;
  let offsetParent = element?.offsetParent;
  let sibling = void 0;
  while (offsetParent === noOffsetParent && element.nextElementSibling && sibling !== element.nextElementSibling) {
    sibling = element.nextElementSibling;
    offsetParent = sibling.offsetParent;
  }
  const nodeName = offsetParent && offsetParent.nodeName;
  if (!nodeName || nodeName === "BODY" || nodeName === "HTML") {
    return sibling ? sibling.ownerDocument.documentElement : document.documentElement;
  }
  if (offsetParent && ["TH", "TD", "TABLE"].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, "position") === "static") {
    return getOffsetParent(offsetParent);
  }
  return offsetParent;
}
function isOffsetContainer(element) {
  const {
    nodeName
  } = element;
  if (nodeName === "BODY") {
    return false;
  }
  return nodeName === "HTML" || getOffsetParent(element.firstElementChild) === element;
}
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }
  return node;
}
function findCommonOffsetParent(element1, element2) {
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }
  const order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  const start = order ? element1 : element2;
  const end = order ? element2 : element1;
  const range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  const commonAncestorContainer = range.commonAncestorContainer;
  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }
    return getOffsetParent(commonAncestorContainer);
  }
  const element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
function getFixedPositionOffsetParent(element) {
  if (!element || !element.parentElement) {
    return document.documentElement;
  }
  let el = element.parentElement;
  while (el?.parentElement && getStyleComputedProperty(el, "transform") === "none") {
    el = el.parentElement;
  }
  return el || document.documentElement;
}
function getBordersSize(styles, axis) {
  const sideA = axis === "x" ? "Left" : "Top";
  const sideB = sideA === "Left" ? "Right" : "Bottom";
  return parseFloat(styles[`border${sideA}Width`]) + parseFloat(styles[`border${sideB}Width`]);
}
function getSize(axis, body, html) {
  const _body = body;
  const _html = html;
  return Math.max(_body[`offset${axis}`], _body[`scroll${axis}`], _html[`client${axis}`], _html[`offset${axis}`], _html[`scroll${axis}`], 0);
}
function getWindowSizes(document3) {
  const body = document3.body;
  const html = document3.documentElement;
  return {
    height: getSize("Height", body, html),
    width: getSize("Width", body, html)
  };
}
function getClientRect(offsets) {
  return __spreadProps(__spreadValues({}, offsets), {
    right: (offsets.left || 0) + offsets.width,
    bottom: (offsets.top || 0) + offsets.height
  });
}
function isNumeric(n) {
  return n !== "" && !isNaN(parseFloat(n)) && isFinite(Number(n));
}
function isNumber(value) {
  return typeof value === "number" || Object.prototype.toString.call(value) === "[object Number]";
}
function getBoundingClientRect(element) {
  const rect = element.getBoundingClientRect();
  if (!(rect && isNumber(rect.top) && isNumber(rect.left) && isNumber(rect.bottom) && isNumber(rect.right))) {
    return rect;
  }
  const result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };
  const sizes = element.nodeName === "HTML" ? getWindowSizes(element.ownerDocument) : void 0;
  const width = sizes?.width || element.clientWidth || isNumber(rect.right) && isNumber(result.left) && rect.right - result.left || 0;
  const height = sizes?.height || element.clientHeight || isNumber(rect.bottom) && isNumber(result.top) && rect.bottom - result.top || 0;
  let horizScrollbar = element.offsetWidth - width;
  let vertScrollbar = element.offsetHeight - height;
  if (horizScrollbar || vertScrollbar) {
    const styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, "x");
    vertScrollbar -= getBordersSize(styles, "y");
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }
  return getClientRect(result);
}
function getOffsetRectRelativeToArbitraryNode(children, parent, fixedPosition = false) {
  const isHTML = parent.nodeName === "HTML";
  const childrenRect = getBoundingClientRect(children);
  const parentRect = getBoundingClientRect(parent);
  const styles = getStyleComputedProperty(parent);
  const borderTopWidth = parseFloat(styles.borderTopWidth);
  const borderLeftWidth = parseFloat(styles.borderLeftWidth);
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top ?? 0, 0);
    parentRect.left = Math.max(parentRect.left ?? 0, 0);
  }
  const offsets = getClientRect({
    top: (childrenRect.top ?? 0) - (parentRect.top ?? 0) - borderTopWidth,
    left: (childrenRect.left ?? 0) - (parentRect.left ?? 0) - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;
  if (isHTML) {
    const marginTop = parseFloat(styles.marginTop);
    const marginLeft = parseFloat(styles.marginLeft);
    if (isNumber(offsets.top)) {
      offsets.top -= borderTopWidth - marginTop;
    }
    if (isNumber(offsets.bottom)) {
      offsets.bottom -= borderTopWidth - marginTop;
    }
    if (isNumber(offsets.left)) {
      offsets.left -= borderLeftWidth - marginLeft;
    }
    if (isNumber(offsets.right)) {
      offsets.right -= borderLeftWidth - marginLeft;
    }
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }
  return offsets;
}
function getParentNode(element) {
  if (element.nodeName === "HTML") {
    return element;
  }
  return element.parentNode || element.host;
}
function getScrollParent(element) {
  if (!element) {
    return document.body;
  }
  switch (element.nodeName) {
    case "HTML":
    case "BODY":
      return element.ownerDocument.body;
    case "#document":
      return element.body;
    default:
  }
  const {
    overflow,
    overflowX,
    overflowY
  } = getStyleComputedProperty(element);
  if (/(auto|scroll|overlay)/.test(String(overflow) + String(overflowY) + String(overflowX))) {
    return element;
  }
  return getScrollParent(getParentNode(element));
}
function getScroll(element, side = "top") {
  const upperSide = side === "top" ? "scrollTop" : "scrollLeft";
  const nodeName = element.nodeName;
  if (nodeName === "BODY" || nodeName === "HTML") {
    const html = element.ownerDocument.documentElement;
    const scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }
  return element[upperSide];
}
function getViewportOffsetRectRelativeToArtbitraryNode(element, excludeScroll = false) {
  const html = element.ownerDocument.documentElement;
  const relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  const width = Math.max(html.clientWidth, window.innerWidth || 0);
  const height = Math.max(html.clientHeight, window.innerHeight || 0);
  const scrollTop = !excludeScroll ? getScroll(html) : 0;
  const scrollLeft = !excludeScroll ? getScroll(html, "left") : 0;
  const offset = {
    top: scrollTop - Number(relativeOffset?.top) + Number(relativeOffset?.marginTop),
    left: scrollLeft - Number(relativeOffset?.left) + Number(relativeOffset?.marginLeft),
    width,
    height
  };
  return getClientRect(offset);
}
function isFixed(element) {
  const nodeName = element.nodeName;
  if (nodeName === "BODY" || nodeName === "HTML") {
    return false;
  }
  if (getStyleComputedProperty(element, "position") === "fixed") {
    return true;
  }
  return isFixed(getParentNode(element));
}
function getBoundaries(target, host, padding = 0, boundariesElement, fixedPosition = false) {
  let boundaries = {
    top: 0,
    left: 0
  };
  const offsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host);
  if (boundariesElement === "viewport") {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    let boundariesNode;
    if (boundariesElement === "scrollParent") {
      boundariesNode = getScrollParent(getParentNode(host));
      if (boundariesNode.nodeName === "BODY") {
        boundariesNode = target.ownerDocument.documentElement;
      }
    } else if (boundariesElement === "window") {
      boundariesNode = target.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }
    const offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
    if (offsets && boundariesNode.nodeName === "HTML" && !isFixed(offsetParent)) {
      const {
        height,
        width
      } = getWindowSizes(target.ownerDocument);
      if (isNumber(boundaries.top) && isNumber(offsets.top) && isNumber(offsets.marginTop)) {
        boundaries.top += offsets.top - offsets.marginTop;
      }
      if (isNumber(boundaries.top)) {
        boundaries.bottom = Number(height) + Number(offsets.top);
      }
      if (isNumber(boundaries.left) && isNumber(offsets.left) && isNumber(offsets.marginLeft)) {
        boundaries.left += offsets.left - offsets.marginLeft;
      }
      if (isNumber(boundaries.top)) {
        boundaries.right = Number(width) + Number(offsets.left);
      }
    } else if (offsets) {
      boundaries = offsets;
    }
  }
  if (isNumber(boundaries.left)) {
    boundaries.left += padding;
  }
  if (isNumber(boundaries.top)) {
    boundaries.top += padding;
  }
  if (isNumber(boundaries.right)) {
    boundaries.right -= padding;
  }
  if (isNumber(boundaries.bottom)) {
    boundaries.bottom -= padding;
  }
  return boundaries;
}
function getArea({
  width,
  height
}) {
  return width * height;
}
function computeAutoPlacement(placement, refRect, target, host, allowedPositions = ["top", "bottom", "right", "left"], boundariesElement = "viewport", padding = 0) {
  if (placement.indexOf("auto") === -1) {
    return placement;
  }
  const boundaries = getBoundaries(target, host, padding, boundariesElement);
  const rects = {
    top: {
      width: boundaries?.width ?? 0,
      height: (refRect?.top ?? 0) - (boundaries?.top ?? 0)
    },
    right: {
      width: (boundaries?.right ?? 0) - (refRect?.right ?? 0),
      height: boundaries?.height ?? 0
    },
    bottom: {
      width: boundaries?.width ?? 0,
      height: (boundaries?.bottom ?? 0) - (refRect?.bottom ?? 0)
    },
    left: {
      width: (refRect.left ?? 0) - (boundaries?.left ?? 0),
      height: boundaries?.height ?? 0
    }
  };
  const sortedAreas = Object.keys(rects).map((key) => __spreadProps(__spreadValues({
    position: key
  }, rects[key]), {
    area: getArea(rects[key])
  })).sort((a2, b2) => b2.area - a2.area);
  let filteredAreas = sortedAreas.filter(({
    width,
    height
  }) => {
    return width >= target.clientWidth && height >= target.clientHeight;
  });
  filteredAreas = filteredAreas.filter(({
    position
  }) => {
    return allowedPositions.some((allowedPosition) => {
      return allowedPosition === position;
    });
  });
  const computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].position : sortedAreas[0].position;
  const variation = placement.split(" ")[1];
  target.className = target.className.replace(/bs-tooltip-auto/g, `bs-tooltip-${getBsVer().isBs5 ? PlacementForBs5[computedPlacement] : computedPlacement}`);
  return computedPlacement + (variation ? `-${variation}` : "");
}
function getOffsets(data) {
  return {
    width: data.offsets.target.width,
    height: data.offsets.target.height,
    left: Math.floor(data.offsets.target.left ?? 0),
    top: Math.round(data.offsets.target.top ?? 0),
    bottom: Math.round(data.offsets.target.bottom ?? 0),
    right: Math.floor(data.offsets.target.right ?? 0)
  };
}
function getOppositePlacement(placement) {
  const hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  return placement.replace(/left|right|bottom|top/g, (matched) => hash[matched]);
}
function getOppositeVariation(variation) {
  if (variation === "right") {
    return "left";
  } else if (variation === "left") {
    return "right";
  }
  return variation;
}
var parse = (value, def = 0) => value ? parseFloat(value) : def;
function getOuterSizes(element) {
  const window2 = element.ownerDocument.defaultView;
  const styles = window2?.getComputedStyle(element);
  const x = parse(styles?.marginTop) + parse(styles?.marginBottom);
  const y = parse(styles?.marginLeft) + parse(styles?.marginRight);
  return {
    width: Number(element.offsetWidth) + y,
    height: Number(element.offsetHeight) + x
  };
}
function getReferenceOffsets(target, host, fixedPosition) {
  const commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host);
  return getOffsetRectRelativeToArbitraryNode(host, commonOffsetParent, fixedPosition);
}
function getTargetOffsets(target, hostOffsets, position) {
  const placement = position.split(" ")[0];
  const targetRect = getOuterSizes(target);
  const targetOffsets = {
    width: targetRect.width,
    height: targetRect.height
  };
  const isHoriz = ["right", "left"].indexOf(placement) !== -1;
  const mainSide = isHoriz ? "top" : "left";
  const secondarySide = isHoriz ? "left" : "top";
  const measurement = isHoriz ? "height" : "width";
  const secondaryMeasurement = !isHoriz ? "height" : "width";
  targetOffsets[mainSide] = (hostOffsets[mainSide] ?? 0) + hostOffsets[measurement] / 2 - targetRect[measurement] / 2;
  targetOffsets[secondarySide] = placement === secondarySide ? (hostOffsets[secondarySide] ?? 0) - targetRect[secondaryMeasurement] : hostOffsets[getOppositePlacement(secondarySide)] ?? 0;
  return targetOffsets;
}
function isModifierEnabled(options, modifierName) {
  return !!options.modifiers[modifierName]?.enabled;
}
var availablePositions = {
  top: ["top", "top start", "top end"],
  bottom: ["bottom", "bottom start", "bottom end"],
  start: ["start", "start top", "start bottom"],
  end: ["end", "end top", "end bottom"]
};
function checkPopoverMargin(placement, checkPosition) {
  if (!getBsVer().isBs5) {
    return false;
  }
  return availablePositions[checkPosition].includes(placement);
}
function checkMargins(placement) {
  if (!getBsVer().isBs5) {
    return "";
  }
  if (checkPopoverMargin(placement, "end")) {
    return "ms-2";
  }
  if (checkPopoverMargin(placement, "start")) {
    return "me-2";
  }
  if (checkPopoverMargin(placement, "top")) {
    return "mb-2";
  }
  if (checkPopoverMargin(placement, "bottom")) {
    return "mt-2";
  }
  return "";
}
function updateContainerClass(data, renderer) {
  const target = data.instance.target;
  let containerClass = target.className;
  const dataPlacement = getBsVer().isBs5 ? PlacementForBs5[data.placement] : data.placement;
  if (data.placementAuto) {
    containerClass = containerClass.replace(/bs-popover-auto/g, `bs-popover-${dataPlacement}`);
    containerClass = containerClass.replace(/ms-2|me-2|mb-2|mt-2/g, "");
    containerClass = containerClass.replace(/bs-tooltip-auto/g, `bs-tooltip-${dataPlacement}`);
    containerClass = containerClass.replace(/\sauto/g, ` ${dataPlacement}`);
    if (containerClass.indexOf("popover") !== -1) {
      containerClass = containerClass + " " + checkMargins(dataPlacement);
    }
    if (containerClass.indexOf("popover") !== -1 && containerClass.indexOf("popover-auto") === -1) {
      containerClass += " popover-auto";
    }
    if (containerClass.indexOf("tooltip") !== -1 && containerClass.indexOf("tooltip-auto") === -1) {
      containerClass += " tooltip-auto";
    }
  }
  containerClass = containerClass.replace(/left|right|top|bottom|end|start/g, `${dataPlacement.split(" ")[0]}`);
  if (renderer) {
    renderer.setAttribute(target, "class", containerClass);
    return;
  }
  target.className = containerClass;
}
function setStyles(element, styles, renderer) {
  if (!element || !styles) {
    return;
  }
  Object.keys(styles).forEach((prop) => {
    let unit = "";
    if (["width", "height", "top", "right", "bottom", "left"].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = "px";
    }
    if (renderer) {
      renderer.setStyle(element, prop, `${String(styles[prop])}${unit}`);
      return;
    }
    element.style[prop] = String(styles[prop]) + unit;
  });
}
function arrow(data) {
  let targetOffsets = data.offsets.target;
  const arrowElement = data.instance.target.querySelector(".arrow");
  if (!arrowElement) {
    return data;
  }
  const isVertical = ["left", "right"].indexOf(data.placement.split(" ")[0]) !== -1;
  const len = isVertical ? "height" : "width";
  const sideCapitalized = isVertical ? "Top" : "Left";
  const side = sideCapitalized.toLowerCase();
  const altSide = isVertical ? "left" : "top";
  const opSide = isVertical ? "bottom" : "right";
  const arrowElementSize = getOuterSizes(arrowElement)[len];
  const placementVariation = data.placement.split(" ")[1];
  if ((data.offsets.host[opSide] ?? 0) - arrowElementSize < (targetOffsets[side] ?? 0)) {
    targetOffsets[side] -= (targetOffsets[side] ?? 0) - ((data.offsets.host[opSide] ?? 0) - arrowElementSize);
  }
  if (Number(data.offsets.host[side]) + Number(arrowElementSize) > (targetOffsets[opSide] ?? 0)) {
    targetOffsets[side] += Number(data.offsets.host[side]) + Number(arrowElementSize) - Number(targetOffsets[opSide]);
  }
  targetOffsets = getClientRect(targetOffsets);
  const css = getStyleComputedProperty(data.instance.target);
  const targetMarginSide = parseFloat(css[`margin${sideCapitalized}`]) || 0;
  const targetBorderSide = parseFloat(css[`border${sideCapitalized}Width`]) || 0;
  let center;
  if (!placementVariation) {
    center = Number(data.offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
  } else {
    const targetBorderRadius = parseFloat(css["borderRadius"]) || 0;
    const targetSideArrowOffset = Number(targetMarginSide + targetBorderSide + targetBorderRadius);
    center = side === placementVariation ? Number(data.offsets.host[side]) + targetSideArrowOffset : Number(data.offsets.host[side]) + Number(data.offsets.host[len] - targetSideArrowOffset);
  }
  let sideValue = center - (targetOffsets[side] ?? 0) - targetMarginSide - targetBorderSide;
  sideValue = Math.max(Math.min(targetOffsets[len] - (arrowElementSize + 5), sideValue), 0);
  data.offsets.arrow = {
    [side]: Math.round(sideValue),
    [altSide]: ""
    // make sure to unset any eventual altSide value from the DOM node
  };
  data.instance.arrow = arrowElement;
  return data;
}
function flip(data) {
  data.offsets.target = getClientRect(data.offsets.target);
  if (!isModifierEnabled(data.options, "flip")) {
    data.offsets.target = __spreadValues(__spreadValues({}, data.offsets.target), getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
    return data;
  }
  const boundaries = getBoundaries(
    data.instance.target,
    data.instance.host,
    0,
    // padding
    "viewport",
    false
    // positionFixed
  );
  let placement = data.placement.split(" ")[0];
  let variation = data.placement.split(" ")[1] || "";
  const offsetsHost = data.offsets.host;
  const target = data.instance.target;
  const host = data.instance.host;
  const adaptivePosition = computeAutoPlacement("auto", offsetsHost, target, host, data.options.allowedPositions);
  const flipOrder = [placement, adaptivePosition];
  flipOrder.forEach((step, index) => {
    if (placement !== step || flipOrder.length === index + 1) {
      return;
    }
    placement = data.placement.split(" ")[0];
    const overlapsRef = placement === "left" && Math.floor(data.offsets.target.right ?? 0) > Math.floor(data.offsets.host.left ?? 0) || placement === "right" && Math.floor(data.offsets.target.left ?? 0) < Math.floor(data.offsets.host.right ?? 0) || placement === "top" && Math.floor(data.offsets.target.bottom ?? 0) > Math.floor(data.offsets.host.top ?? 0) || placement === "bottom" && Math.floor(data.offsets.target.top ?? 0) < Math.floor(data.offsets.host.bottom ?? 0);
    const overflowsLeft = Math.floor(data.offsets.target.left ?? 0) < Math.floor(boundaries.left ?? 0);
    const overflowsRight = Math.floor(data.offsets.target.right ?? 0) > Math.floor(boundaries.right ?? 0);
    const overflowsTop = Math.floor(data.offsets.target.top ?? 0) < Math.floor(boundaries.top ?? 0);
    const overflowsBottom = Math.floor(data.offsets.target.bottom ?? 0) > Math.floor(boundaries.bottom ?? 0);
    const overflowsBoundaries = placement === "left" && overflowsLeft || placement === "right" && overflowsRight || placement === "top" && overflowsTop || placement === "bottom" && overflowsBottom;
    const isVertical = ["top", "bottom"].indexOf(placement) !== -1;
    const flippedVariation = isVertical && variation === "left" && overflowsLeft || isVertical && variation === "right" && overflowsRight || !isVertical && variation === "left" && overflowsTop || !isVertical && variation === "right" && overflowsBottom;
    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }
      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }
      data.placement = placement + (variation ? ` ${variation}` : "");
      data.offsets.target = __spreadValues(__spreadValues({}, data.offsets.target), getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
    }
  });
  return data;
}
function initData(targetElement, hostElement, position, options) {
  if (!targetElement || !hostElement) {
    return;
  }
  const hostElPosition = getReferenceOffsets(targetElement, hostElement);
  if (!position.match(/^(auto)*\s*(left|right|top|bottom|start|end)*$/) && !position.match(/^(left|right|top|bottom|start|end)*(?: (left|right|top|bottom|start|end))*$/)) {
    position = "auto";
  }
  const placementAuto = !!position.match(/auto/g);
  let placement = position.match(/auto\s(left|right|top|bottom|start|end)/) ? position.split(" ")[1] || "auto" : position;
  const matches = placement.match(/^(left|right|top|bottom|start|end)* ?(?!\1)(left|right|top|bottom|start|end)?/);
  if (matches) {
    placement = matches[1] + (matches[2] ? ` ${matches[2]}` : "");
  }
  if (["left right", "right left", "top bottom", "bottom top"].indexOf(placement) !== -1) {
    placement = "auto";
  }
  placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement, options ? options.allowedPositions : void 0);
  const targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
  return {
    options: options || {
      modifiers: {}
    },
    instance: {
      target: targetElement,
      host: hostElement,
      arrow: void 0
    },
    offsets: {
      target: targetOffset,
      host: hostElPosition,
      arrow: void 0
    },
    positionFixed: false,
    placement,
    placementAuto
  };
}
function preventOverflow(data) {
  if (!isModifierEnabled(data.options, "preventOverflow")) {
    return data;
  }
  const transformProp = "transform";
  const targetStyles = data.instance.target.style;
  const {
    top,
    left,
    [transformProp]: transform
  } = targetStyles;
  targetStyles.top = "";
  targetStyles.left = "";
  targetStyles[transformProp] = "";
  const boundaries = getBoundaries(
    data.instance.target,
    data.instance.host,
    0,
    // padding
    data.options.modifiers.preventOverflow?.boundariesElement || "scrollParent",
    false
    // positionFixed
  );
  targetStyles.top = top;
  targetStyles.left = left;
  targetStyles[transformProp] = transform;
  const order = ["left", "right", "top", "bottom"];
  const check = {
    primary(placement) {
      let value = data.offsets.target[placement];
      if ((data.offsets.target[placement] ?? 0) < (boundaries[placement] ?? 0)) {
        value = Math.max(data.offsets.target[placement] ?? 0, boundaries[placement] ?? 0);
      }
      return {
        [placement]: value
      };
    },
    secondary(placement) {
      const isPlacementHorizontal = placement === "right";
      const mainSide = isPlacementHorizontal ? "left" : "top";
      const measurement = isPlacementHorizontal ? "width" : "height";
      let value = data.offsets.target[mainSide];
      if ((data.offsets.target[placement] ?? 0) > (boundaries[placement] ?? 0)) {
        value = Math.min(data.offsets.target[mainSide] ?? 0, (boundaries[placement] ?? 0) - data.offsets.target[measurement]);
      }
      return {
        [mainSide]: value
      };
    }
  };
  order.forEach((placement) => {
    const side = ["left", "top", "start"].indexOf(placement) !== -1 ? check["primary"] : check["secondary"];
    data.offsets.target = __spreadValues(__spreadValues({}, data.offsets.target), side(placement));
  });
  return data;
}
function shift(data) {
  const placement = data.placement;
  const basePlacement = placement.split(" ")[0];
  const shiftVariation = placement.split(" ")[1];
  if (shiftVariation) {
    const {
      host,
      target
    } = data.offsets;
    const isVertical = ["bottom", "top"].indexOf(basePlacement) !== -1;
    const side = isVertical ? "left" : "top";
    const measurement = isVertical ? "width" : "height";
    const shiftOffsets = {
      start: {
        [side]: host[side]
      },
      end: {
        [side]: (host[side] ?? 0) + host[measurement] - target[measurement]
      }
    };
    data.offsets.target = __spreadValues(__spreadValues({}, target), {
      [side]: side === shiftVariation ? shiftOffsets.start[side] : shiftOffsets.end[side]
    });
  }
  return data;
}
var Positioning = class {
  position(hostElement, targetElement) {
    return this.offset(
      hostElement,
      targetElement
      /*, false*/
    );
  }
  offset(hostElement, targetElement) {
    return getReferenceOffsets(targetElement, hostElement);
  }
  positionElements(hostElement, targetElement, position, appendToBody, options) {
    const chainOfModifiers = [flip, shift, preventOverflow, arrow];
    const _position = MapPlacementInToRL[position];
    const data = initData(targetElement, hostElement, _position, options);
    if (!data) {
      return;
    }
    return chainOfModifiers.reduce((modifiedData, modifier) => modifier(modifiedData), data);
  }
};
var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
  const data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
  if (!data) {
    return;
  }
  const offsets = getOffsets(data);
  setStyles(targetElement, {
    "will-change": "transform",
    top: "0px",
    left: "0px",
    transform: `translate3d(${offsets.left}px, ${offsets.top}px, 0px)`
  }, renderer);
  if (data.instance.arrow) {
    setStyles(data.instance.arrow, data.offsets.arrow, renderer);
  }
  updateContainerClass(data, renderer);
}
var _PositioningService = class _PositioningService {
  constructor(ngZone, rendererFactory, platformId) {
    this.update$$ = new Subject();
    this.positionElements = /* @__PURE__ */ new Map();
    this.isDisabled = false;
    if (isPlatformBrowser(platformId)) {
      ngZone.runOutsideAngular(() => {
        this.triggerEvent$ = merge(fromEvent(window, "scroll", {
          passive: true
        }), fromEvent(window, "resize", {
          passive: true
        }), of(0, animationFrameScheduler), this.update$$);
        this.triggerEvent$.subscribe(() => {
          if (this.isDisabled) {
            return;
          }
          this.positionElements.forEach((positionElement) => {
            positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, this.options, rendererFactory.createRenderer(null, null));
          });
        });
      });
    }
  }
  position(options) {
    this.addPositionElement(options);
  }
  get event$() {
    return this.triggerEvent$;
  }
  disable() {
    this.isDisabled = true;
  }
  enable() {
    this.isDisabled = false;
  }
  addPositionElement(options) {
    this.positionElements.set(_getHtmlElement(options.element), options);
  }
  calcPosition() {
    this.update$$.next(null);
  }
  deletePositionElement(elRef) {
    this.positionElements.delete(_getHtmlElement(elRef));
  }
  setOptions(options) {
    this.options = options;
  }
};
_PositioningService.ɵfac = function PositioningService_Factory(t) {
  return new (t || _PositioningService)(ɵɵinject(NgZone), ɵɵinject(RendererFactory2), ɵɵinject(PLATFORM_ID));
};
_PositioningService.ɵprov = ɵɵdefineInjectable({
  token: _PositioningService,
  factory: _PositioningService.ɵfac,
  providedIn: "root"
});
var PositioningService = _PositioningService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PositioningService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }, {
    type: RendererFactory2
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
function _getHtmlElement(element) {
  if (typeof element === "string") {
    return document.querySelector(element);
  }
  if (element instanceof ElementRef) {
    return element.nativeElement;
  }
  return element ?? null;
}

// node_modules/ngx-bootstrap/component-loader/fesm2022/ngx-bootstrap-component-loader.mjs
var ContentRef = class {
  constructor(nodes, viewRef, componentRef) {
    this.nodes = nodes;
    this.viewRef = viewRef;
    this.componentRef = componentRef;
  }
};
var ComponentLoader = class {
  /**
   * Do not use this directly, it should be instanced via
   * `ComponentLoadFactory.attach`
   * @internal
   */
  constructor(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService, _document) {
    this._viewContainerRef = _viewContainerRef;
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this._injector = _injector;
    this._componentFactoryResolver = _componentFactoryResolver;
    this._ngZone = _ngZone;
    this._applicationRef = _applicationRef;
    this._posService = _posService;
    this._document = _document;
    this.onBeforeShow = new EventEmitter();
    this.onShown = new EventEmitter();
    this.onBeforeHide = new EventEmitter();
    this.onHidden = new EventEmitter();
    this._providers = [];
    this._isHiding = false;
    this.containerDefaultSelector = "body";
    this._listenOpts = {};
    this._globalListener = Function.prototype;
  }
  get isShown() {
    if (this._isHiding) {
      return false;
    }
    return !!this._componentRef;
  }
  attach(compType) {
    this._componentFactory = this._componentFactoryResolver.resolveComponentFactory(compType);
    return this;
  }
  // todo: add behaviour: to target element, `body`, custom element
  to(container) {
    this.container = container || this.container;
    return this;
  }
  position(opts) {
    if (!opts) {
      return this;
    }
    this.attachment = opts.attachment || this.attachment;
    this._elementRef = opts.target || this._elementRef;
    return this;
  }
  provide(provider) {
    this._providers.push(provider);
    return this;
  }
  // todo: appendChild to element or document.querySelector(this.container)
  show(opts = {}) {
    this._subscribePositioning();
    this._innerComponent = void 0;
    if (!this._componentRef) {
      this.onBeforeShow.emit();
      this._contentRef = this._getContentRef(opts.content, opts.context, opts.initialState);
      const injector = Injector.create({
        providers: this._providers,
        parent: this._injector
      });
      if (!this._componentFactory) {
        return;
      }
      this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
      this._applicationRef.attachView(this._componentRef.hostView);
      this.instance = this._componentRef.instance;
      Object.assign(this._componentRef.instance, opts);
      if (this.container instanceof ElementRef) {
        this.container.nativeElement.appendChild(this._componentRef.location.nativeElement);
      }
      if (typeof this.container === "string" && typeof this._document !== "undefined") {
        const selectedElement = this._document.querySelector(this.container) || this._document.querySelector(this.containerDefaultSelector);
        if (!selectedElement) {
          return;
        }
        selectedElement.appendChild(this._componentRef.location.nativeElement);
      }
      if (!this.container && this._elementRef && this._elementRef.nativeElement.parentElement) {
        this._elementRef.nativeElement.parentElement.appendChild(this._componentRef.location.nativeElement);
      }
      if (this._contentRef.componentRef) {
        this._innerComponent = this._contentRef.componentRef.instance;
        this._contentRef.componentRef.changeDetectorRef.markForCheck();
        this._contentRef.componentRef.changeDetectorRef.detectChanges();
      }
      this._componentRef.changeDetectorRef.markForCheck();
      this._componentRef.changeDetectorRef.detectChanges();
      this.onShown.emit(opts.id ? {
        id: opts.id
      } : this._componentRef.instance);
    }
    this._registerOutsideClick();
    return this._componentRef;
  }
  hide(id) {
    if (!this._componentRef) {
      return this;
    }
    this._posService.deletePositionElement(this._componentRef.location);
    this.onBeforeHide.emit(this._componentRef.instance);
    const componentEl = this._componentRef.location.nativeElement;
    componentEl.parentNode?.removeChild(componentEl);
    this._contentRef?.componentRef?.destroy();
    if (this._viewContainerRef && this._contentRef?.viewRef) {
      this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
    }
    this._contentRef?.viewRef?.destroy();
    this._contentRef = void 0;
    this._componentRef = void 0;
    this._removeGlobalListener();
    this.onHidden.emit(id ? {
      id
    } : null);
    return this;
  }
  toggle() {
    if (this.isShown) {
      this.hide();
      return;
    }
    this.show();
  }
  dispose() {
    if (this.isShown) {
      this.hide();
    }
    this._unsubscribePositioning();
    if (this._unregisterListenersFn) {
      this._unregisterListenersFn();
    }
  }
  listen(listenOpts) {
    this.triggers = listenOpts.triggers || this.triggers;
    this._listenOpts.outsideClick = listenOpts.outsideClick;
    this._listenOpts.outsideEsc = listenOpts.outsideEsc;
    listenOpts.target = listenOpts.target || this._elementRef?.nativeElement;
    const hide = this._listenOpts.hide = () => listenOpts.hide ? listenOpts.hide() : void this.hide();
    const show = this._listenOpts.show = (registerHide) => {
      listenOpts.show ? listenOpts.show(registerHide) : this.show(registerHide);
      registerHide();
    };
    const toggle = (registerHide) => {
      this.isShown ? hide() : show(registerHide);
    };
    if (this._renderer) {
      this._unregisterListenersFn = listenToTriggersV2(this._renderer, {
        target: listenOpts.target,
        triggers: listenOpts.triggers,
        show,
        hide,
        toggle
      });
    }
    return this;
  }
  _removeGlobalListener() {
    if (this._globalListener) {
      this._globalListener();
      this._globalListener = Function.prototype;
    }
  }
  attachInline(vRef, template) {
    if (vRef && template) {
      this._inlineViewRef = vRef.createEmbeddedView(template);
    }
    return this;
  }
  _registerOutsideClick() {
    if (!this._componentRef || !this._componentRef.location) {
      return;
    }
    if (this._listenOpts.outsideClick) {
      const target = this._componentRef.location.nativeElement;
      setTimeout(() => {
        if (this._renderer && this._elementRef) {
          this._globalListener = registerOutsideClick(this._renderer, {
            targets: [target, this._elementRef.nativeElement],
            outsideClick: this._listenOpts.outsideClick,
            hide: () => this._listenOpts.hide && this._listenOpts.hide()
          });
        }
      });
    }
    if (this._listenOpts.outsideEsc && this._renderer && this._elementRef) {
      const target = this._componentRef.location.nativeElement;
      this._globalListener = registerEscClick(this._renderer, {
        targets: [target, this._elementRef.nativeElement],
        outsideEsc: this._listenOpts.outsideEsc,
        hide: () => this._listenOpts.hide && this._listenOpts.hide()
      });
    }
  }
  getInnerComponent() {
    return this._innerComponent;
  }
  _subscribePositioning() {
    if (this._zoneSubscription || !this.attachment) {
      return;
    }
    this.onShown.subscribe(() => {
      this._posService.position({
        element: this._componentRef?.location,
        target: this._elementRef,
        attachment: this.attachment,
        appendToBody: this.container === "body"
      });
    });
    this._zoneSubscription = this._ngZone.onStable.subscribe(() => {
      if (!this._componentRef) {
        return;
      }
      this._posService.calcPosition();
    });
  }
  _unsubscribePositioning() {
    if (!this._zoneSubscription) {
      return;
    }
    this._zoneSubscription.unsubscribe();
    this._zoneSubscription = void 0;
  }
  _getContentRef(content, context, initialState) {
    if (!content) {
      return new ContentRef([]);
    }
    if (content instanceof TemplateRef) {
      if (this._viewContainerRef) {
        const _viewRef = this._viewContainerRef.createEmbeddedView(content, context);
        _viewRef.markForCheck();
        return new ContentRef([_viewRef.rootNodes], _viewRef);
      }
      const viewRef = content.createEmbeddedView({});
      this._applicationRef.attachView(viewRef);
      return new ContentRef([viewRef.rootNodes], viewRef);
    }
    if (typeof content === "function") {
      const contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
      const modalContentInjector = Injector.create({
        providers: this._providers,
        parent: this._injector
      });
      const componentRef = contentCmptFactory.create(modalContentInjector);
      Object.assign(componentRef.instance, initialState);
      this._applicationRef.attachView(componentRef.hostView);
      return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
    }
    const nodes = this._renderer ? [this._renderer.createText(`${content}`)] : [];
    return new ContentRef([nodes]);
  }
};
var _ComponentLoaderFactory = class _ComponentLoaderFactory {
  constructor(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef, _document) {
    this._componentFactoryResolver = _componentFactoryResolver;
    this._ngZone = _ngZone;
    this._injector = _injector;
    this._posService = _posService;
    this._applicationRef = _applicationRef;
    this._document = _document;
  }
  /**
   *
   * @param _elementRef
   * @param _viewContainerRef
   * @param _renderer
   */
  createLoader(_elementRef, _viewContainerRef, _renderer) {
    return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService, this._document);
  }
};
_ComponentLoaderFactory.ɵfac = function ComponentLoaderFactory_Factory(t) {
  return new (t || _ComponentLoaderFactory)(ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(NgZone), ɵɵinject(Injector), ɵɵinject(PositioningService), ɵɵinject(ApplicationRef), ɵɵinject(DOCUMENT));
};
_ComponentLoaderFactory.ɵprov = ɵɵdefineInjectable({
  token: _ComponentLoaderFactory,
  factory: _ComponentLoaderFactory.ɵfac,
  providedIn: "root"
});
var ComponentLoaderFactory = _ComponentLoaderFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComponentLoaderFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: ComponentFactoryResolver$1
  }, {
    type: NgZone
  }, {
    type: Injector
  }, {
    type: PositioningService
  }, {
    type: ApplicationRef
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();

// node_modules/ngx-bootstrap/dropdown/fesm2022/ngx-bootstrap-dropdown.mjs
var _c0 = (a0) => ({
  dropdown: a0
});
var _c1 = ["*"];
var _BsDropdownConfig = class _BsDropdownConfig {
  constructor() {
    this.autoClose = true;
    this.insideClick = false;
    this.isAnimated = false;
    this.stopOnClickPropagation = false;
  }
};
_BsDropdownConfig.ɵfac = function BsDropdownConfig_Factory(t) {
  return new (t || _BsDropdownConfig)();
};
_BsDropdownConfig.ɵprov = ɵɵdefineInjectable({
  token: _BsDropdownConfig,
  factory: _BsDropdownConfig.ɵfac,
  providedIn: "root"
});
var BsDropdownConfig = _BsDropdownConfig;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDropdownConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _BsDropdownState = class _BsDropdownState {
  constructor() {
    this.direction = "down";
    this.autoClose = true;
    this.insideClick = false;
    this.isAnimated = false;
    this.stopOnClickPropagation = false;
    this.isOpenChange = new EventEmitter();
    this.isDisabledChange = new EventEmitter();
    this.toggleClick = new EventEmitter();
    this.counts = 0;
    this.dropdownMenu = new Promise((resolve) => {
      this.resolveDropdownMenu = resolve;
    });
  }
};
_BsDropdownState.ɵfac = function BsDropdownState_Factory(t) {
  return new (t || _BsDropdownState)();
};
_BsDropdownState.ɵprov = ɵɵdefineInjectable({
  token: _BsDropdownState,
  factory: _BsDropdownState.ɵfac,
  providedIn: "platform"
});
var BsDropdownState = _BsDropdownState;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDropdownState, [{
    type: Injectable,
    args: [{
      providedIn: "platform"
    }]
  }], () => [], null);
})();
var DROPDOWN_ANIMATION_TIMING = "220ms cubic-bezier(0, 0, 0.2, 1)";
var dropdownAnimation = [style({
  height: 0,
  overflow: "hidden"
}), animate(DROPDOWN_ANIMATION_TIMING, style({
  height: "*",
  overflow: "hidden"
}))];
var _BsDropdownContainerComponent = class _BsDropdownContainerComponent {
  get direction() {
    return this._state.direction;
  }
  constructor(_state, cd, _renderer, _element, _builder) {
    this._state = _state;
    this.cd = cd;
    this._renderer = _renderer;
    this._element = _element;
    this.isOpen = false;
    this._factoryDropDownAnimation = _builder.build(dropdownAnimation);
    this._subscription = _state.isOpenChange.subscribe((value) => {
      this.isOpen = value;
      const dropdown = this._element.nativeElement.querySelector(".dropdown-menu");
      this._renderer.addClass(this._element.nativeElement.querySelector("div"), "open");
      if (dropdown) {
        this._renderer.addClass(dropdown, "show");
        if (dropdown.classList.contains("dropdown-menu-right") || dropdown.classList.contains("dropdown-menu-end")) {
          this._renderer.setStyle(dropdown, "left", "auto");
          this._renderer.setStyle(dropdown, "right", "0");
        }
        if (this.direction === "up") {
          this._renderer.setStyle(dropdown, "top", "auto");
          this._renderer.setStyle(dropdown, "transform", "translateY(-101%)");
        }
      }
      if (dropdown && this._state.isAnimated) {
        this._factoryDropDownAnimation.create(dropdown).play();
      }
      this.cd.markForCheck();
      this.cd.detectChanges();
    });
  }
  /** @internal */
  _contains(el) {
    return this._element.nativeElement.contains(el);
  }
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
};
_BsDropdownContainerComponent.ɵfac = function BsDropdownContainerComponent_Factory(t) {
  return new (t || _BsDropdownContainerComponent)(ɵɵdirectiveInject(BsDropdownState), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(AnimationBuilder));
};
_BsDropdownContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: _BsDropdownContainerComponent,
  selectors: [["bs-dropdown-container"]],
  hostAttrs: [2, "display", "block", "position", "absolute", "z-index", "1040"],
  ngContentSelectors: _c1,
  decls: 2,
  vars: 9,
  consts: [[3, "ngClass"]],
  template: function BsDropdownContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassProp("dropup", ctx.direction === "up")("show", ctx.isOpen)("open", ctx.isOpen);
      ɵɵproperty("ngClass", ɵɵpureFunction1(7, _c0, ctx.direction === "down"));
    }
  },
  dependencies: [NgClass],
  encapsulation: 2,
  changeDetection: 0
});
var BsDropdownContainerComponent = _BsDropdownContainerComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDropdownContainerComponent, [{
    type: Component,
    args: [{
      selector: "bs-dropdown-container",
      changeDetection: ChangeDetectionStrategy.OnPush,
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        style: "display:block;position: absolute;z-index: 1040"
      },
      template: `
    <div [class.dropup]="direction === 'up'"
         [ngClass]="{dropdown: direction === 'down'}"
         [class.show]="isOpen"
         [class.open]="isOpen"><ng-content></ng-content>
    </div>
  `
    }]
  }], () => [{
    type: BsDropdownState
  }, {
    type: ChangeDetectorRef
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: AnimationBuilder
  }], null);
})();
var _BsDropdownDirective = class _BsDropdownDirective {
  /**
   * Indicates that dropdown will be closed on item or document click,
   * and after pressing ESC
   */
  set autoClose(value) {
    this._state.autoClose = value;
  }
  get autoClose() {
    return this._state.autoClose;
  }
  /**
   * Indicates that dropdown will be animated
   */
  set isAnimated(value) {
    this._state.isAnimated = value;
  }
  get isAnimated() {
    return this._state.isAnimated;
  }
  /**
   * This attribute indicates that the dropdown shouldn't close on inside click when autoClose is set to true
   */
  set insideClick(value) {
    this._state.insideClick = value;
  }
  get insideClick() {
    return this._state.insideClick;
  }
  /**
   * Disables dropdown toggle and hides dropdown menu if opened
   */
  set isDisabled(value) {
    this._isDisabled = value;
    this._state.isDisabledChange.emit(value);
    if (value) {
      this.hide();
    }
  }
  get isDisabled() {
    return this._isDisabled;
  }
  /**
   * Returns whether or not the popover is currently being shown
   */
  get isOpen() {
    if (this._showInline) {
      return this._isInlineOpen;
    }
    return this._dropdown.isShown;
  }
  set isOpen(value) {
    if (value) {
      this.show();
    } else {
      this.hide();
    }
  }
  get _showInline() {
    return !this.container;
  }
  constructor(_elementRef, _renderer, _viewContainerRef, _cis, _state, _config, _builder) {
    this._elementRef = _elementRef;
    this._renderer = _renderer;
    this._viewContainerRef = _viewContainerRef;
    this._cis = _cis;
    this._state = _state;
    this._config = _config;
    this.dropup = false;
    this._isInlineOpen = false;
    this._isDisabled = false;
    this._subscriptions = [];
    this._isInited = false;
    this._state.autoClose = this._config.autoClose;
    this._state.insideClick = this._config.insideClick;
    this._state.isAnimated = this._config.isAnimated;
    this._state.stopOnClickPropagation = this._config.stopOnClickPropagation;
    this._factoryDropDownAnimation = _builder.build(dropdownAnimation);
    this._dropdown = this._cis.createLoader(this._elementRef, this._viewContainerRef, this._renderer).provide({
      provide: BsDropdownState,
      useValue: this._state
    });
    this.onShown = this._dropdown.onShown;
    this.onHidden = this._dropdown.onHidden;
    this.isOpenChange = this._state.isOpenChange;
  }
  ngOnInit() {
    if (this._isInited) {
      return;
    }
    this._isInited = true;
    this._dropdown.listen({
      // because of dropdown inline mode
      outsideClick: false,
      triggers: this.triggers,
      show: () => this.show()
    });
    this._subscriptions.push(this._state.toggleClick.subscribe((value) => this.toggle(value)));
    this._subscriptions.push(this._state.isDisabledChange.pipe(filter((value) => value)).subscribe(() => this.hide()));
  }
  /**
   * Opens an element’s popover. This is considered a “manual” triggering of
   * the popover.
   */
  show() {
    if (this.isOpen || this.isDisabled) {
      return;
    }
    if (this._showInline) {
      if (!this._inlinedMenu) {
        this._state.dropdownMenu.then((dropdownMenu) => {
          this._dropdown.attachInline(dropdownMenu.viewContainer, dropdownMenu.templateRef);
          this._inlinedMenu = this._dropdown._inlineViewRef;
          this.addBs4Polyfills();
          if (this._inlinedMenu) {
            this._renderer.addClass(this._inlinedMenu.rootNodes[0].parentNode, "open");
          }
          this.playAnimation();
        }).catch();
      }
      this.addBs4Polyfills();
      this._isInlineOpen = true;
      this.onShown.emit(true);
      this._state.isOpenChange.emit(true);
      this.playAnimation();
      return;
    }
    this._state.dropdownMenu.then((dropdownMenu) => {
      const _dropup = this.dropup || typeof this.dropup !== "undefined" && this.dropup;
      this._state.direction = _dropup ? "up" : "down";
      const _placement = this.placement || (_dropup ? "top start" : "bottom start");
      this._dropdown.attach(BsDropdownContainerComponent).to(this.container).position({
        attachment: _placement
      }).show({
        content: dropdownMenu.templateRef,
        placement: _placement
      });
      this._state.isOpenChange.emit(true);
    }).catch();
  }
  /**
   * Closes an element’s popover. This is considered a “manual” triggering of
   * the popover.
   */
  hide() {
    if (!this.isOpen) {
      return;
    }
    if (this._showInline) {
      this.removeShowClass();
      this.removeDropupStyles();
      this._isInlineOpen = false;
      this.onHidden.emit(true);
    } else {
      this._dropdown.hide();
    }
    this._state.isOpenChange.emit(false);
  }
  /**
   * Toggles an element’s popover. This is considered a “manual” triggering of
   * the popover. With parameter <code>true</code> allows toggling, with parameter <code>false</code>
   * only hides opened dropdown. Parameter usage will be removed in ngx-bootstrap v3
   */
  toggle(value) {
    if (this.isOpen || !value) {
      return this.hide();
    }
    return this.show();
  }
  /** @internal */
  _contains(event) {
    return this._elementRef.nativeElement.contains(event.target) || this._dropdown.instance && this._dropdown.instance._contains(event.target);
  }
  navigationClick(event) {
    const ref = this._elementRef.nativeElement.querySelector(".dropdown-menu");
    if (!ref) {
      return;
    }
    const firstActive = this._elementRef.nativeElement.ownerDocument.activeElement;
    const allRef = ref.querySelectorAll(".dropdown-item");
    switch (event.keyCode) {
      case 38:
        if (this._state.counts > 0) {
          allRef[--this._state.counts].focus();
        }
        break;
      case 40:
        if (this._state.counts + 1 < allRef.length) {
          if (firstActive.classList !== allRef[this._state.counts].classList) {
            allRef[this._state.counts].focus();
          } else {
            allRef[++this._state.counts].focus();
          }
        }
        break;
      default:
    }
    event.preventDefault();
  }
  ngOnDestroy() {
    for (const sub of this._subscriptions) {
      sub.unsubscribe();
    }
    this._dropdown.dispose();
  }
  addBs4Polyfills() {
    this.addShowClass();
    this.checkRightAlignment();
    this.addDropupStyles();
  }
  playAnimation() {
    if (this._state.isAnimated && this._inlinedMenu) {
      setTimeout(() => {
        if (this._inlinedMenu) {
          this._factoryDropDownAnimation.create(this._inlinedMenu.rootNodes[0]).play();
        }
      });
    }
  }
  addShowClass() {
    if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
      this._renderer.addClass(this._inlinedMenu.rootNodes[0], "show");
    }
  }
  removeShowClass() {
    if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
      this._renderer.removeClass(this._inlinedMenu.rootNodes[0], "show");
    }
  }
  checkRightAlignment() {
    if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
      const isRightAligned = this._inlinedMenu.rootNodes[0].classList.contains("dropdown-menu-right") || this._inlinedMenu.rootNodes[0].classList.contains("dropdown-menu-end");
      this._renderer.setStyle(this._inlinedMenu.rootNodes[0], "left", isRightAligned ? "auto" : "0");
      this._renderer.setStyle(this._inlinedMenu.rootNodes[0], "right", isRightAligned ? "0" : "auto");
    }
  }
  addDropupStyles() {
    if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
      this._renderer.setStyle(this._inlinedMenu.rootNodes[0], "top", this.dropup ? "auto" : "100%");
      this._renderer.setStyle(this._inlinedMenu.rootNodes[0], "transform", this.dropup ? "translateY(-101%)" : "translateY(0)");
      this._renderer.setStyle(this._inlinedMenu.rootNodes[0], "bottom", "auto");
    }
  }
  removeDropupStyles() {
    if (this._inlinedMenu && this._inlinedMenu.rootNodes[0]) {
      this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], "top");
      this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], "transform");
      this._renderer.removeStyle(this._inlinedMenu.rootNodes[0], "bottom");
    }
  }
};
_BsDropdownDirective.ɵfac = function BsDropdownDirective_Factory(t) {
  return new (t || _BsDropdownDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ComponentLoaderFactory), ɵɵdirectiveInject(BsDropdownState), ɵɵdirectiveInject(BsDropdownConfig), ɵɵdirectiveInject(AnimationBuilder));
};
_BsDropdownDirective.ɵdir = ɵɵdefineDirective({
  type: _BsDropdownDirective,
  selectors: [["", "bsDropdown", ""], ["", "dropdown", ""]],
  hostVars: 6,
  hostBindings: function BsDropdownDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown.arrowDown", function BsDropdownDirective_keydown_arrowDown_HostBindingHandler($event) {
        return ctx.navigationClick($event);
      })("keydown.arrowUp", function BsDropdownDirective_keydown_arrowUp_HostBindingHandler($event) {
        return ctx.navigationClick($event);
      });
    }
    if (rf & 2) {
      ɵɵclassProp("dropup", ctx.dropup)("open", ctx.isOpen)("show", ctx.isOpen);
    }
  },
  inputs: {
    placement: "placement",
    triggers: "triggers",
    container: "container",
    dropup: "dropup",
    autoClose: "autoClose",
    isAnimated: "isAnimated",
    insideClick: "insideClick",
    isDisabled: "isDisabled",
    isOpen: "isOpen"
  },
  outputs: {
    isOpenChange: "isOpenChange",
    onShown: "onShown",
    onHidden: "onHidden"
  },
  exportAs: ["bs-dropdown"],
  features: [ɵɵProvidersFeature([BsDropdownState])]
});
var BsDropdownDirective = _BsDropdownDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDropdownDirective, [{
    type: Directive,
    args: [{
      selector: "[bsDropdown], [dropdown]",
      exportAs: "bs-dropdown",
      providers: [BsDropdownState],
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        "[class.dropup]": "dropup",
        "[class.open]": "isOpen",
        "[class.show]": "isOpen"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }, {
    type: ComponentLoaderFactory
  }, {
    type: BsDropdownState
  }, {
    type: BsDropdownConfig
  }, {
    type: AnimationBuilder
  }], {
    placement: [{
      type: Input
    }],
    triggers: [{
      type: Input
    }],
    container: [{
      type: Input
    }],
    dropup: [{
      type: Input
    }],
    autoClose: [{
      type: Input
    }],
    isAnimated: [{
      type: Input
    }],
    insideClick: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    isOpen: [{
      type: Input
    }],
    isOpenChange: [{
      type: Output
    }],
    onShown: [{
      type: Output
    }],
    onHidden: [{
      type: Output
    }],
    navigationClick: [{
      type: HostListener,
      args: ["keydown.arrowDown", ["$event"]]
    }, {
      type: HostListener,
      args: ["keydown.arrowUp", ["$event"]]
    }]
  });
})();
var _BsDropdownMenuDirective = class _BsDropdownMenuDirective {
  constructor(_state, _viewContainer, _templateRef) {
    _state.resolveDropdownMenu({
      templateRef: _templateRef,
      viewContainer: _viewContainer
    });
  }
};
_BsDropdownMenuDirective.ɵfac = function BsDropdownMenuDirective_Factory(t) {
  return new (t || _BsDropdownMenuDirective)(ɵɵdirectiveInject(BsDropdownState), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef));
};
_BsDropdownMenuDirective.ɵdir = ɵɵdefineDirective({
  type: _BsDropdownMenuDirective,
  selectors: [["", "bsDropdownMenu", ""], ["", "dropdownMenu", ""]],
  exportAs: ["bs-dropdown-menu"]
});
var BsDropdownMenuDirective = _BsDropdownMenuDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDropdownMenuDirective, [{
    type: Directive,
    args: [{
      selector: "[bsDropdownMenu],[dropdownMenu]",
      exportAs: "bs-dropdown-menu"
    }]
  }], () => [{
    type: BsDropdownState
  }, {
    type: ViewContainerRef
  }, {
    type: TemplateRef
  }], null);
})();
var _BsDropdownToggleDirective = class _BsDropdownToggleDirective {
  constructor(_changeDetectorRef, _dropdown, _element, _renderer, _state) {
    this._changeDetectorRef = _changeDetectorRef;
    this._dropdown = _dropdown;
    this._element = _element;
    this._renderer = _renderer;
    this._state = _state;
    this.isOpen = false;
    this._subscriptions = [];
    this._subscriptions.push(this._state.isOpenChange.subscribe((value) => {
      this.isOpen = value;
      if (value) {
        this._documentClickListener = this._renderer.listen("document", "click", (event) => {
          if (this._state.autoClose && event.button !== 2 && !this._element.nativeElement.contains(event.target) && !(this._state.insideClick && this._dropdown._contains(event))) {
            this._state.toggleClick.emit(false);
            this._changeDetectorRef.detectChanges();
          }
        });
        this._escKeyUpListener = this._renderer.listen(this._element.nativeElement, "keyup.esc", () => {
          if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
            this._changeDetectorRef.detectChanges();
          }
        });
      } else {
        this._documentClickListener && this._documentClickListener();
        this._escKeyUpListener && this._escKeyUpListener();
      }
    }));
    this._subscriptions.push(this._state.isDisabledChange.subscribe((value) => this.isDisabled = value || void 0));
  }
  onClick(event) {
    if (this._state.stopOnClickPropagation) {
      event.stopPropagation();
    }
    if (this.isDisabled) {
      return;
    }
    this._state.toggleClick.emit(true);
  }
  ngOnDestroy() {
    if (this._documentClickListener) {
      this._documentClickListener();
    }
    if (this._escKeyUpListener) {
      this._escKeyUpListener();
    }
    for (const sub of this._subscriptions) {
      sub.unsubscribe();
    }
  }
};
_BsDropdownToggleDirective.ɵfac = function BsDropdownToggleDirective_Factory(t) {
  return new (t || _BsDropdownToggleDirective)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(BsDropdownDirective), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(BsDropdownState));
};
_BsDropdownToggleDirective.ɵdir = ɵɵdefineDirective({
  type: _BsDropdownToggleDirective,
  selectors: [["", "bsDropdownToggle", ""], ["", "dropdownToggle", ""]],
  hostVars: 3,
  hostBindings: function BsDropdownToggleDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function BsDropdownToggleDirective_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("aria-haspopup", true)("disabled", ctx.isDisabled)("aria-expanded", ctx.isOpen);
    }
  },
  exportAs: ["bs-dropdown-toggle"]
});
var BsDropdownToggleDirective = _BsDropdownToggleDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDropdownToggleDirective, [{
    type: Directive,
    args: [{
      selector: "[bsDropdownToggle],[dropdownToggle]",
      exportAs: "bs-dropdown-toggle",
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        "[attr.aria-haspopup]": "true"
      }
    }]
  }], () => [{
    type: ChangeDetectorRef
  }, {
    type: BsDropdownDirective
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: BsDropdownState
  }], {
    isDisabled: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    isOpen: [{
      type: HostBinding,
      args: ["attr.aria-expanded"]
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var _BsDropdownModule = class _BsDropdownModule {
  static forRoot() {
    return {
      ngModule: _BsDropdownModule,
      providers: [ComponentLoaderFactory, PositioningService, BsDropdownState]
    };
  }
};
_BsDropdownModule.ɵfac = function BsDropdownModule_Factory(t) {
  return new (t || _BsDropdownModule)();
};
_BsDropdownModule.ɵmod = ɵɵdefineNgModule({
  type: _BsDropdownModule,
  declarations: [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownContainerComponent, BsDropdownDirective],
  imports: [CommonModule],
  exports: [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective]
});
_BsDropdownModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
var BsDropdownModule = _BsDropdownModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BsDropdownModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownContainerComponent, BsDropdownDirective],
      exports: [BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownDirective]
    }]
  }], null, null);
})();

export {
  require_libphonenumber,
  setTheme,
  BsDropdownDirective,
  BsDropdownMenuDirective,
  BsDropdownToggleDirective,
  BsDropdownModule
};
/*! Bundled license information:

ngx-bootstrap/utils/fesm2022/ngx-bootstrap-utils.mjs:
  (**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=chunk-XEQXSS5B.js.map
