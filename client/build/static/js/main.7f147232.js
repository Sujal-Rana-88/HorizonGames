/*! For license information please see main.7f147232.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      463: function (e, t, n) {
        var r = n(791),
          a = n(296);
        function l(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          o = {};
        function u(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (o[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          m = {};
        function h(e, t, n, r, a, l, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = i);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new h(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new h(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new h(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new h(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new h(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new h(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(m, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (m[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new h(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(v, y);
              g[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(v, y);
            g[t] = new h(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new h(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          _ = Symbol.for("react.provider"),
          N = Symbol.for("react.context"),
          z = Symbol.for("react.forward_ref"),
          P = Symbol.for("react.suspense"),
          j = Symbol.for("react.suspense_list"),
          L = Symbol.for("react.memo"),
          O = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var T = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var M = Symbol.iterator;
        function R(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (M && e[M]) || e["@@iterator"])
            ? e
            : null;
        }
        var D,
          F = Object.assign;
        function I(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              D = (t && t[1]) || "";
            }
          return "\n" + D + e;
        }
        var A = !1;
        function U(e, t) {
          if (!e || A) return "";
          A = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (s) {
                  var r = s;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (s) {
                  r = s;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (s) {
                r = s;
              }
              e();
            }
          } catch (s) {
            if (s && r && "string" === typeof s.stack) {
              for (
                var a = s.stack.split("\n"),
                  l = r.stack.split("\n"),
                  i = a.length - 1,
                  o = l.length - 1;
                1 <= i && 0 <= o && a[i] !== l[o];

              )
                o--;
              for (; 1 <= i && 0 <= o; i--, o--)
                if (a[i] !== l[o]) {
                  if (1 !== i || 1 !== o)
                    do {
                      if ((i--, 0 > --o || a[i] !== l[o])) {
                        var u = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= i && 0 <= o);
                  break;
                }
            }
          } finally {
            (A = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? I(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return I(e.type);
            case 16:
              return I("Lazy");
            case 13:
              return I("Suspense");
            case 19:
              return I("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return "";
          }
        }
        function H(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case C:
              return "Profiler";
            case E:
              return "StrictMode";
            case P:
              return "Suspense";
            case j:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case N:
                return (e.displayName || "Context") + ".Consumer";
              case _:
                return (e._context.displayName || "Context") + ".Provider";
              case z:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case L:
                return null !== (t = e.displayName || null)
                  ? t
                  : H(e.type) || "Memo";
              case O:
                (t = e._payload), (e = e._init);
                try {
                  return H(e(t));
                } catch (n) {}
            }
          return null;
        }
        function V(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return H(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function $(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function W(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = W(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  l = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function G(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = W(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function K(e, t) {
          var n = t.checked;
          return F({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function X(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = $(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function Y(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          Y(e, t);
          var n = $(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, $(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + $(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
          return F({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(l(92));
              if (te(n)) {
                if (1 < n.length) throw Error(l(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: $(n) };
        }
        function le(e, t) {
          var n = $(t.value),
            r = $(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function oe(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ue(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? oe(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var se,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (se = se || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = se.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          me = ["Webkit", "ms", "Moz", "O"];
        function he(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = he(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          me.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ve = F(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ve[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(l(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(l(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          Ee = null;
        function Ce(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(l(280));
            var t = e.stateNode;
            t && ((t = xa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function _e(e) {
          Se ? (Ee ? Ee.push(e) : (Ee = [e])) : (Se = e);
        }
        function Ne() {
          if (Se) {
            var e = Se,
              t = Ee;
            if (((Ee = Se = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function ze(e, t) {
          return e(t);
        }
        function Pe() {}
        var je = !1;
        function Le(e, t, n) {
          if (je) return e(t, n);
          je = !0;
          try {
            return ze(e, t, n);
          } finally {
            (je = !1), (null !== Se || null !== Ee) && (Pe(), Ne());
          }
        }
        function Oe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = xa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var Te = !1;
        if (c)
          try {
            var Me = {};
            Object.defineProperty(Me, "passive", {
              get: function () {
                Te = !0;
              },
            }),
              window.addEventListener("test", Me, Me),
              window.removeEventListener("test", Me, Me);
          } catch (ce) {
            Te = !1;
          }
        function Re(e, t, n, r, a, l, i, o, u) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (c) {
            this.onError(c);
          }
        }
        var De = !1,
          Fe = null,
          Ie = !1,
          Ae = null,
          Ue = {
            onError: function (e) {
              (De = !0), (Fe = e);
            },
          };
        function Be(e, t, n, r, a, l, i, o, u) {
          (De = !1), (Fe = null), Re.apply(Ue, arguments);
        }
        function He(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ve(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function $e(e) {
          if (He(e) !== e) throw Error(l(188));
        }
        function We(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = He(e))) throw Error(l(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return $e(a), e;
                    if (i === r) return $e(a), t;
                    i = i.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var o = !1, u = a.child; u; ) {
                    if (u === n) {
                      (o = !0), (n = a), (r = i);
                      break;
                    }
                    if (u === r) {
                      (o = !0), (r = a), (n = i);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!o) {
                    for (u = i.child; u; ) {
                      if (u === n) {
                        (o = !0), (n = i), (r = a);
                        break;
                      }
                      if (u === r) {
                        (o = !0), (r = i), (n = a);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!o) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ge = a.unstable_scheduleCallback,
          qe = a.unstable_cancelCallback,
          Ke = a.unstable_shouldYield,
          Xe = a.unstable_requestPaint,
          Ye = a.unstable_now,
          Ze = a.unstable_getCurrentPriorityLevel,
          Je = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          lt = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((ot(e) / ut) | 0)) | 0;
              },
          ot = Math.log,
          ut = Math.LN2;
        var st = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var o = i & ~a;
            0 !== o ? (r = ft(o)) : 0 !== (l &= i) && (r = ft(l));
          } else 0 !== (i = n & ~a) ? (r = ft(i)) : 0 !== l && (r = ft(l));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (l = t & -t) || (16 === a && 0 !== (4194240 & l)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function mt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function ht() {
          var e = st;
          return 0 === (4194240 & (st <<= 1)) && (st = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function vt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var xt,
          kt,
          St,
          Et,
          Ct,
          _t = !1,
          Nt = [],
          zt = null,
          Pt = null,
          jt = null,
          Lt = new Map(),
          Ot = new Map(),
          Tt = [],
          Mt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Rt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              zt = null;
              break;
            case "dragenter":
            case "dragleave":
              Pt = null;
              break;
            case "mouseover":
            case "mouseout":
              jt = null;
              break;
            case "pointerover":
            case "pointerout":
              Lt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Ot.delete(t.pointerId);
          }
        }
        function Dt(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Ft(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = He(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ve(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function It(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Kt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function At(e, t, n) {
          It(e) && n.delete(t);
        }
        function Ut() {
          (_t = !1),
            null !== zt && It(zt) && (zt = null),
            null !== Pt && It(Pt) && (Pt = null),
            null !== jt && It(jt) && (jt = null),
            Lt.forEach(At),
            Ot.forEach(At);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            _t ||
              ((_t = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)));
        }
        function Ht(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < Nt.length) {
            Bt(Nt[0], e);
            for (var n = 1; n < Nt.length; n++) {
              var r = Nt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== zt && Bt(zt, e),
              null !== Pt && Bt(Pt, e),
              null !== jt && Bt(jt, e),
              Lt.forEach(t),
              Ot.forEach(t),
              n = 0;
            n < Tt.length;
            n++
          )
            (r = Tt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Tt.length && null === (n = Tt[0]).blockedOn; )
            Ft(n), null === n.blockedOn && Tt.shift();
        }
        var Vt = w.ReactCurrentBatchConfig,
          $t = !0;
        function Wt(e, t, n, r) {
          var a = bt,
            l = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 1), Gt(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = l);
          }
        }
        function Qt(e, t, n, r) {
          var a = bt,
            l = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 4), Gt(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = l);
          }
        }
        function Gt(e, t, n, r) {
          if ($t) {
            var a = Kt(e, t, n, r);
            if (null === a) $r(e, t, r, qt, n), Rt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (zt = Dt(zt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (Pt = Dt(Pt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (jt = Dt(jt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return Lt.set(l, Dt(Lt.get(l) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      Ot.set(l, Dt(Ot.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Rt(e, r), 4 & t && -1 < Mt.indexOf(e))) {
              for (; null !== a; ) {
                var l = ba(a);
                if (
                  (null !== l && xt(l),
                  null === (l = Kt(e, t, n, r)) && $r(e, t, r, qt, n),
                  l === a)
                )
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else $r(e, t, r, null, n);
          }
        }
        var qt = null;
        function Kt(e, t, n, r) {
          if (((qt = null), null !== (e = ya((e = xe(r))))))
            if (null === (t = He(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ve(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (qt = e), null;
        }
        function Xt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Yt = null,
          Zt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Zt,
            r = n.length,
            a = "value" in Yt ? Yt.value : Yt.textContent,
            l = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[l - t]; t++);
          return (Jt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, l) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            F(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var ln,
          on,
          un,
          sn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(sn),
          fn = F({}, sn, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = F({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== un &&
                    (un && "mousemove" === e.type
                      ? ((ln = e.screenX - un.screenX),
                        (on = e.screenY - un.screenY))
                      : (on = ln = 0),
                    (un = e)),
                  ln);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : on;
            },
          }),
          mn = an(pn),
          hn = an(F({}, pn, { dataTransfer: 0 })),
          gn = an(F({}, fn, { relatedTarget: 0 })),
          vn = an(
            F({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = F({}, sn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          wn = an(F({}, sn, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Cn() {
          return En;
        }
        var _n = F({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Nn = an(_n),
          zn = an(
            F({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Pn = an(
            F({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          jn = an(
            F({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Ln = F({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          On = an(Ln),
          Tn = [9, 13, 27, 32],
          Mn = c && "CompositionEvent" in window,
          Rn = null;
        c && "documentMode" in document && (Rn = document.documentMode);
        var Dn = c && "TextEvent" in window && !Rn,
          Fn = c && (!Mn || (Rn && 8 < Rn && 11 >= Rn)),
          In = String.fromCharCode(32),
          An = !1;
        function Un(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Tn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Hn = !1;
        var Vn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function $n(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Vn[e.type] : "textarea" === t;
        }
        function Wn(e, t, n, r) {
          _e(r),
            0 < (t = Qr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          Gn = null;
        function qn(e) {
          Ir(e, 0);
        }
        function Kn(e) {
          if (G(wa(e))) return e;
        }
        function Xn(e, t) {
          if ("change" === e) return t;
        }
        var Yn = !1;
        if (c) {
          var Zn;
          if (c) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Jn = "function" === typeof er.oninput);
            }
            Zn = Jn;
          } else Zn = !1;
          Yn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Qn && (Qn.detachEvent("onpropertychange", nr), (Gn = Qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Kn(Gn)) {
            var t = [];
            Wn(t, Gn, e, xe(e)), Le(qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Gn = n), (Qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Kn(Gn);
        }
        function lr(e, t) {
          if ("click" === e) return Kn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Kn(t);
        }
        var or =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ur(e, t) {
          if (or(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !or(e[a], t[a])) return !1;
          }
          return !0;
        }
        function sr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = sr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = sr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function mr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !e.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = cr(n, l));
                var i = cr(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var hr = c && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          vr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == gr ||
            gr !== q(r) ||
            ("selectionStart" in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && ur(yr, r)) ||
              ((yr = r),
              0 < (r = Qr(vr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function xr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          Sr = {},
          Er = {};
        function Cr(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var _r = Cr("animationend"),
          Nr = Cr("animationiteration"),
          zr = Cr("animationstart"),
          Pr = Cr("transitionend"),
          jr = new Map(),
          Lr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Or(e, t) {
          jr.set(e, t), u(t, [e]);
        }
        for (var Tr = 0; Tr < Lr.length; Tr++) {
          var Mr = Lr[Tr];
          Or(Mr.toLowerCase(), "on" + (Mr[0].toUpperCase() + Mr.slice(1)));
        }
        Or(_r, "onAnimationEnd"),
          Or(Nr, "onAnimationIteration"),
          Or(zr, "onAnimationStart"),
          Or("dblclick", "onDoubleClick"),
          Or("focusin", "onFocus"),
          Or("focusout", "onBlur"),
          Or(Pr, "onTransitionEnd"),
          s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          u(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          u(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          u("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          u(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          u(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Rr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Dr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Rr)
          );
        function Fr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, o, u, s) {
              if ((Be.apply(this, arguments), De)) {
                if (!De) throw Error(l(198));
                var c = Fe;
                (De = !1), (Fe = null), Ie || ((Ie = !0), (Ae = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ir(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var o = r[i],
                    u = o.instance,
                    s = o.currentTarget;
                  if (((o = o.listener), u !== l && a.isPropagationStopped()))
                    break e;
                  Fr(a, o, s), (l = u);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((u = (o = r[i]).instance),
                    (s = o.currentTarget),
                    (o = o.listener),
                    u !== l && a.isPropagationStopped())
                  )
                    break e;
                  Fr(a, o, s), (l = u);
                }
            }
          }
          if (Ie) throw ((e = Ae), (Ie = !1), (Ae = null), e);
        }
        function Ar(e, t) {
          var n = t[ha];
          void 0 === n && (n = t[ha] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Vr(t, e, 2, !1), n.add(r));
        }
        function Ur(e, t, n) {
          var r = 0;
          t && (r |= 4), Vr(n, e, r, t);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function Hr(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Dr.has(t) || Ur(t, !1, e), Ur(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), Ur("selectionchange", !1, t));
          }
        }
        function Vr(e, t, n, r) {
          switch (Xt(t)) {
            case 1:
              var a = Wt;
              break;
            case 4:
              a = Qt;
              break;
            default:
              a = Gt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Te ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function $r(e, t, n, r, a) {
          var l = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var o = r.stateNode.containerInfo;
                if (o === a || (8 === o.nodeType && o.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var u = i.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = i.stateNode.containerInfo) === a ||
                        (8 === u.nodeType && u.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== o; ) {
                  if (null === (i = ya(o))) return;
                  if (5 === (u = i.tag) || 6 === u) {
                    r = l = i;
                    continue e;
                  }
                  o = o.parentNode;
                }
              }
              r = r.return;
            }
          Le(function () {
            var r = l,
              a = xe(n),
              i = [];
            e: {
              var o = jr.get(e);
              if (void 0 !== o) {
                var u = cn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Nn;
                    break;
                  case "focusin":
                    (s = "focus"), (u = gn);
                    break;
                  case "focusout":
                    (s = "blur"), (u = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = mn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = hn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Pn;
                    break;
                  case _r:
                  case Nr:
                  case zr:
                    u = vn;
                    break;
                  case Pr:
                    u = jn;
                    break;
                  case "scroll":
                    u = dn;
                    break;
                  case "wheel":
                    u = On;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = zn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== o ? o + "Capture" : null) : o;
                c = [];
                for (var p, m = r; null !== m; ) {
                  var h = (p = m).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== h &&
                      ((p = h),
                      null !== d &&
                        null != (h = Oe(m, d)) &&
                        c.push(Wr(m, h, p))),
                    f)
                  )
                    break;
                  m = m.return;
                }
                0 < c.length &&
                  ((o = new u(o, s, null, n, a)),
                  i.push({ event: o, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(o = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ya(s) && !s[ma])) &&
                  (u || o) &&
                  ((o =
                    a.window === a
                      ? a
                      : (o = a.ownerDocument)
                      ? o.defaultView || o.parentWindow
                      : window),
                  u
                    ? ((u = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? ya(s)
                          : null) &&
                        (s !== (f = He(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((u = null), (s = r)),
                  u !== s))
              ) {
                if (
                  ((c = mn),
                  (h = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (m = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = zn),
                    (h = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (m = "pointer")),
                  (f = null == u ? o : wa(u)),
                  (p = null == s ? o : wa(s)),
                  ((o = new c(h, m + "leave", u, n, a)).target = f),
                  (o.relatedTarget = p),
                  (h = null),
                  ya(a) === r &&
                    (((c = new c(d, m + "enter", s, n, a)).target = p),
                    (c.relatedTarget = f),
                    (h = c)),
                  (f = h),
                  u && s)
                )
                  e: {
                    for (d = s, m = 0, p = c = u; p; p = Gr(p)) m++;
                    for (p = 0, h = d; h; h = Gr(h)) p++;
                    for (; 0 < m - p; ) (c = Gr(c)), m--;
                    for (; 0 < p - m; ) (d = Gr(d)), p--;
                    for (; m--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Gr(c)), (d = Gr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== u && qr(i, o, u, c, !1),
                  null !== s && null !== f && qr(i, f, s, c, !0);
              }
              if (
                "select" ===
                  (u =
                    (o = r ? wa(r) : window).nodeName &&
                    o.nodeName.toLowerCase()) ||
                ("input" === u && "file" === o.type)
              )
                var g = Xn;
              else if ($n(o))
                if (Yn) g = ir;
                else {
                  g = ar;
                  var v = rr;
                }
              else
                (u = o.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === o.type || "radio" === o.type) &&
                  (g = lr);
              switch (
                (g && (g = g(e, r))
                  ? Wn(i, g, n, a)
                  : (v && v(e, o, r),
                    "focusout" === e &&
                      (v = o._wrapperState) &&
                      v.controlled &&
                      "number" === o.type &&
                      ee(o, "number", o.value)),
                (v = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  ($n(v) || "true" === v.contentEditable) &&
                    ((gr = v), (vr = r), (yr = null));
                  break;
                case "focusout":
                  yr = vr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(i, n, a);
                  break;
                case "selectionchange":
                  if (hr) break;
                case "keydown":
                case "keyup":
                  wr(i, n, a);
              }
              var y;
              if (Mn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Hn
                  ? Un(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Fn &&
                  "ko" !== n.locale &&
                  (Hn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Hn && (y = en())
                    : ((Zt = "value" in (Yt = a) ? Yt.value : Yt.textContent),
                      (Hn = !0))),
                0 < (v = Qr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  i.push({ event: b, listeners: v }),
                  y ? (b.data = y) : null !== (y = Bn(n)) && (b.data = y))),
                (y = Dn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((An = !0), In);
                        case "textInput":
                          return (e = t.data) === In && An ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Hn)
                        return "compositionend" === e || (!Mn && Un(e, t))
                          ? ((e = en()), (Jt = Zt = Yt = null), (Hn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Ir(i, t);
          });
        }
        function Wr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = Oe(e, n)) && r.unshift(Wr(e, l, a)),
              null != (l = Oe(e, t)) && r.push(Wr(e, l, a))),
              (e = e.return);
          }
          return r;
        }
        function Gr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function qr(e, t, n, r, a) {
          for (var l = t._reactName, i = []; null !== n && n !== r; ) {
            var o = n,
              u = o.alternate,
              s = o.stateNode;
            if (null !== u && u === r) break;
            5 === o.tag &&
              null !== s &&
              ((o = s),
              a
                ? null != (u = Oe(n, l)) && i.unshift(Wr(n, u, o))
                : a || (null != (u = Oe(n, l)) && i.push(Wr(n, u, o)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Kr = /\r\n?/g,
          Xr = /\u0000|\uFFFD/g;
        function Yr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Kr, "\n")
            .replace(Xr, "");
        }
        function Zr(e, t, n) {
          if (((t = Yr(t)), Yr(e) !== t && n)) throw Error(l(425));
        }
        function Jr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          la = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof la
              ? function (e) {
                  return la.resolve(null).then(e).catch(oa);
                }
              : ra;
        function oa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ua(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Ht(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Ht(t);
        }
        function sa(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ma = "__reactContainer$" + fa,
          ha = "__reactEvents$" + fa,
          ga = "__reactListeners$" + fa,
          va = "__reactHandles$" + fa;
        function ya(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ma] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ma]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function xa(e) {
          return e[pa] || null;
        }
        var ka = [],
          Sa = -1;
        function Ea(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > Sa || ((e.current = ka[Sa]), (ka[Sa] = null), Sa--);
        }
        function _a(e, t) {
          Sa++, (ka[Sa] = e.current), (e.current = t);
        }
        var Na = {},
          za = Ea(Na),
          Pa = Ea(!1),
          ja = Na;
        function La(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Na;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            l = {};
          for (a in n) l[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function Oa(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ta() {
          Ca(Pa), Ca(za);
        }
        function Ma(e, t, n) {
          if (za.current !== Na) throw Error(l(168));
          _a(za, t), _a(Pa, n);
        }
        function Ra(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(l(108, V(e) || "Unknown", a));
          return F({}, n, r);
        }
        function Da(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Na),
            (ja = za.current),
            _a(za, e),
            _a(Pa, Pa.current),
            !0
          );
        }
        function Fa(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          n
            ? ((e = Ra(e, t, ja)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(Pa),
              Ca(za),
              _a(za, e))
            : Ca(Pa),
            _a(Pa, n);
        }
        var Ia = null,
          Aa = !1,
          Ua = !1;
        function Ba(e) {
          null === Ia ? (Ia = [e]) : Ia.push(e);
        }
        function Ha() {
          if (!Ua && null !== Ia) {
            Ua = !0;
            var e = 0,
              t = bt;
            try {
              var n = Ia;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ia = null), (Aa = !1);
            } catch (a) {
              throw (null !== Ia && (Ia = Ia.slice(e + 1)), Ge(Je, Ha), a);
            } finally {
              (bt = t), (Ua = !1);
            }
          }
          return null;
        }
        var Va = [],
          $a = 0,
          Wa = null,
          Qa = 0,
          Ga = [],
          qa = 0,
          Ka = null,
          Xa = 1,
          Ya = "";
        function Za(e, t) {
          (Va[$a++] = Qa), (Va[$a++] = Wa), (Wa = e), (Qa = t);
        }
        function Ja(e, t, n) {
          (Ga[qa++] = Xa), (Ga[qa++] = Ya), (Ga[qa++] = Ka), (Ka = e);
          var r = Xa;
          e = Ya;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - it(t) + a;
          if (30 < l) {
            var i = a - (a % 5);
            (l = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Xa = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Ya = l + e);
          } else (Xa = (1 << l) | (n << a) | r), (Ya = e);
        }
        function el(e) {
          null !== e.return && (Za(e, 1), Ja(e, 1, 0));
        }
        function tl(e) {
          for (; e === Wa; )
            (Wa = Va[--$a]), (Va[$a] = null), (Qa = Va[--$a]), (Va[$a] = null);
          for (; e === Ka; )
            (Ka = Ga[--qa]),
              (Ga[qa] = null),
              (Ya = Ga[--qa]),
              (Ga[qa] = null),
              (Xa = Ga[--qa]),
              (Ga[qa] = null);
        }
        var nl = null,
          rl = null,
          al = !1,
          ll = null;
        function il(e, t) {
          var n = Os(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function ol(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (nl = e), (rl = sa(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (nl = e), (rl = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ka ? { id: Xa, overflow: Ya } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Os(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (nl = e),
                (rl = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ul(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function sl(e) {
          if (al) {
            var t = rl;
            if (t) {
              var n = t;
              if (!ol(e, t)) {
                if (ul(e)) throw Error(l(418));
                t = sa(n.nextSibling);
                var r = nl;
                t && ol(e, t)
                  ? il(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e));
              }
            } else {
              if (ul(e)) throw Error(l(418));
              (e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e);
            }
          }
        }
        function cl(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          nl = e;
        }
        function fl(e) {
          if (e !== nl) return !1;
          if (!al) return cl(e), (al = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = rl))
          ) {
            if (ul(e)) throw (dl(), Error(l(418)));
            for (; t; ) il(e, t), (t = sa(t.nextSibling));
          }
          if ((cl(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      rl = sa(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              rl = null;
            }
          } else rl = nl ? sa(e.stateNode.nextSibling) : null;
          return !0;
        }
        function dl() {
          for (var e = rl; e; ) e = sa(e.nextSibling);
        }
        function pl() {
          (rl = nl = null), (al = !1);
        }
        function ml(e) {
          null === ll ? (ll = [e]) : ll.push(e);
        }
        var hl = w.ReactCurrentBatchConfig;
        function gl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = F({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var vl = Ea(null),
          yl = null,
          bl = null,
          wl = null;
        function xl() {
          wl = bl = yl = null;
        }
        function kl(e) {
          var t = vl.current;
          Ca(vl), (e._currentValue = t);
        }
        function Sl(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function El(e, t) {
          (yl = e),
            (wl = bl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wo = !0), (e.firstContext = null));
        }
        function Cl(e) {
          var t = e._currentValue;
          if (wl !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bl)
            ) {
              if (null === yl) throw Error(l(308));
              (bl = e), (yl.dependencies = { lanes: 0, firstContext: e });
            } else bl = bl.next = e;
          return t;
        }
        var _l = null;
        function Nl(e) {
          null === _l ? (_l = [e]) : _l.push(e);
        }
        function zl(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Nl(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            Pl(e, r)
          );
        }
        function Pl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var jl = !1;
        function Ll(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Ol(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Tl(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Ml(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Pu))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              Pl(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Nl(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            Pl(e, n)
          );
        }
        function Rl(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Dl(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === l ? (a = l = i) : (l = l.next = i), (n = n.next);
              } while (null !== n);
              null === l ? (a = l = t) : (l = l.next = t);
            } else a = l = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Fl(e, t, n, r) {
          var a = e.updateQueue;
          jl = !1;
          var l = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            o = a.shared.pending;
          if (null !== o) {
            a.shared.pending = null;
            var u = o,
              s = u.next;
            (u.next = null), null === i ? (l = s) : (i.next = s), (i = u);
            var c = e.alternate;
            null !== c &&
              (o = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === o ? (c.firstBaseUpdate = s) : (o.next = s),
              (c.lastBaseUpdate = u));
          }
          if (null !== l) {
            var f = a.baseState;
            for (i = 0, c = s = u = null, o = l; ; ) {
              var d = o.lane,
                p = o.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: o.callback,
                      next: null,
                    });
                e: {
                  var m = e,
                    h = o;
                  switch (((d = t), (p = n), h.tag)) {
                    case 1:
                      if ("function" === typeof (m = h.payload)) {
                        f = m.call(p, f, d);
                        break e;
                      }
                      f = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (m = h.payload)
                              ? m.call(p, f, d)
                              : m) ||
                        void 0 === d
                      )
                        break e;
                      f = F({}, f, d);
                      break e;
                    case 2:
                      jl = !0;
                  }
                }
                null !== o.callback &&
                  0 !== o.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [o]) : d.push(o));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                }),
                  null === c ? ((s = c = p), (u = f)) : (c = c.next = p),
                  (i |= d);
              if (null === (o = o.next)) {
                if (null === (o = a.shared.pending)) break;
                (o = (d = o).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (u = f),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === l && (a.shared.lanes = 0);
            (Fu |= i), (e.lanes = i), (e.memoizedState = f);
          }
        }
        function Il(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(l(191, a));
                a.call(r);
              }
            }
        }
        var Al = new r.Component().refs;
        function Ul(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : F({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Bl = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && He(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              l = Tl(r, a);
            (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Ml(e, l, a)) && (rs(t, e, a, r), Rl(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ts(),
              a = ns(e),
              l = Tl(r, a);
            (l.tag = 1),
              (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Ml(e, l, a)) && (rs(t, e, a, r), Rl(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ts(),
              r = ns(e),
              a = Tl(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Ml(e, a, r)) && (rs(t, e, r, n), Rl(t, e, r));
          },
        };
        function Hl(e, t, n, r, a, l, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ur(n, r) ||
                !ur(a, l);
        }
        function Vl(e, t, n) {
          var r = !1,
            a = Na,
            l = t.contextType;
          return (
            "object" === typeof l && null !== l
              ? (l = Cl(l))
              : ((a = Oa(t) ? ja : za.current),
                (l = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? La(e, a)
                  : Na)),
            (t = new t(n, l)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Bl),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            t
          );
        }
        function $l(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Bl.enqueueReplaceState(t, t.state, null);
        }
        function Wl(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Al), Ll(e);
          var l = t.contextType;
          "object" === typeof l && null !== l
            ? (a.context = Cl(l))
            : ((l = Oa(t) ? ja : za.current), (a.context = La(e, l))),
            (a.state = e.memoizedState),
            "function" === typeof (l = t.getDerivedStateFromProps) &&
              (Ul(e, t, l, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Bl.enqueueReplaceState(a, a.state, null),
              Fl(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Ql(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(l(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Al && (t = a.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(l(284));
            if (!n._owner) throw Error(l(290, e));
          }
          return e;
        }
        function Gl(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function ql(e) {
          return (0, e._init)(e._payload);
        }
        function Kl(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Ms(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function o(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Is(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            var l = n.type;
            return l === S
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === l ||
                  ("object" === typeof l &&
                    null !== l &&
                    l.$$typeof === O &&
                    ql(l) === t.type))
              ? (((r = a(t, n.props)).ref = Ql(e, t, n)), (r.return = e), r)
              : (((r = Rs(n.type, n.key, n.props, null, e.mode, r)).ref = Ql(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = As(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = Ds(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Is("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = Rs(t.type, t.key, t.props, null, e.mode, n)).ref = Ql(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = As(t, e.mode, n)).return = e), t;
                case O:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || R(t))
                return ((t = Ds(t, e.mode, n, null)).return = e), t;
              Gl(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : u(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === a ? s(e, t, n, r) : null;
                case k:
                  return n.key === a ? c(e, t, n, r) : null;
                case O:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || R(n)) return null !== a ? null : f(e, t, n, r, null);
              Gl(e, n);
            }
            return null;
          }
          function m(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return u(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case O:
                  return m(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || R(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              Gl(t, r);
            }
            return null;
          }
          function h(a, l, o, u) {
            for (
              var s = null, c = null, f = l, h = (l = 0), g = null;
              null !== f && h < o.length;
              h++
            ) {
              f.index > h ? ((g = f), (f = null)) : (g = f.sibling);
              var v = p(a, f, o[h], u);
              if (null === v) {
                null === f && (f = g);
                break;
              }
              e && f && null === v.alternate && t(a, f),
                (l = i(v, l, h)),
                null === c ? (s = v) : (c.sibling = v),
                (c = v),
                (f = g);
            }
            if (h === o.length) return n(a, f), al && Za(a, h), s;
            if (null === f) {
              for (; h < o.length; h++)
                null !== (f = d(a, o[h], u)) &&
                  ((l = i(f, l, h)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return al && Za(a, h), s;
            }
            for (f = r(a, f); h < o.length; h++)
              null !== (g = m(f, a, h, o[h], u)) &&
                (e &&
                  null !== g.alternate &&
                  f.delete(null === g.key ? h : g.key),
                (l = i(g, l, h)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              al && Za(a, h),
              s
            );
          }
          function g(a, o, u, s) {
            var c = R(u);
            if ("function" !== typeof c) throw Error(l(150));
            if (null == (u = c.call(u))) throw Error(l(151));
            for (
              var f = (c = null), h = o, g = (o = 0), v = null, y = u.next();
              null !== h && !y.done;
              g++, y = u.next()
            ) {
              h.index > g ? ((v = h), (h = null)) : (v = h.sibling);
              var b = p(a, h, y.value, s);
              if (null === b) {
                null === h && (h = v);
                break;
              }
              e && h && null === b.alternate && t(a, h),
                (o = i(b, o, g)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (h = v);
            }
            if (y.done) return n(a, h), al && Za(a, g), c;
            if (null === h) {
              for (; !y.done; g++, y = u.next())
                null !== (y = d(a, y.value, s)) &&
                  ((o = i(y, o, g)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return al && Za(a, g), c;
            }
            for (h = r(a, h); !y.done; g++, y = u.next())
              null !== (y = m(h, a, g, y.value, s)) &&
                (e &&
                  null !== y.alternate &&
                  h.delete(null === y.key ? g : y.key),
                (o = i(y, o, g)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                h.forEach(function (e) {
                  return t(a, e);
                }),
              al && Za(a, g),
              c
            );
          }
          return function e(r, l, i, u) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === S &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case x:
                  e: {
                    for (var s = i.key, c = l; null !== c; ) {
                      if (c.key === s) {
                        if ((s = i.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((l = a(c, i.props.children)).return = r),
                              (r = l);
                            break e;
                          }
                        } else if (
                          c.elementType === s ||
                          ("object" === typeof s &&
                            null !== s &&
                            s.$$typeof === O &&
                            ql(s) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((l = a(c, i.props)).ref = Ql(r, c, i)),
                            (l.return = r),
                            (r = l);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    i.type === S
                      ? (((l = Ds(i.props.children, r.mode, u, i.key)).return =
                          r),
                        (r = l))
                      : (((u = Rs(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          u
                        )).ref = Ql(r, l, i)),
                        (u.return = r),
                        (r = u));
                  }
                  return o(r);
                case k:
                  e: {
                    for (c = i.key; null !== l; ) {
                      if (l.key === c) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === i.containerInfo &&
                          l.stateNode.implementation === i.implementation
                        ) {
                          n(r, l.sibling),
                            ((l = a(l, i.children || [])).return = r),
                            (r = l);
                          break e;
                        }
                        n(r, l);
                        break;
                      }
                      t(r, l), (l = l.sibling);
                    }
                    ((l = As(i, r.mode, u)).return = r), (r = l);
                  }
                  return o(r);
                case O:
                  return e(r, l, (c = i._init)(i._payload), u);
              }
              if (te(i)) return h(r, l, i, u);
              if (R(i)) return g(r, l, i, u);
              Gl(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== l && 6 === l.tag
                  ? (n(r, l.sibling), ((l = a(l, i)).return = r), (r = l))
                  : (n(r, l), ((l = Is(i, r.mode, u)).return = r), (r = l)),
                o(r))
              : n(r, l);
          };
        }
        var Xl = Kl(!0),
          Yl = Kl(!1),
          Zl = {},
          Jl = Ea(Zl),
          ei = Ea(Zl),
          ti = Ea(Zl);
        function ni(e) {
          if (e === Zl) throw Error(l(174));
          return e;
        }
        function ri(e, t) {
          switch ((_a(ti, t), _a(ei, e), _a(Jl, Zl), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
              break;
            default:
              t = ue(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ca(Jl), _a(Jl, t);
        }
        function ai() {
          Ca(Jl), Ca(ei), Ca(ti);
        }
        function li(e) {
          ni(ti.current);
          var t = ni(Jl.current),
            n = ue(t, e.type);
          t !== n && (_a(ei, e), _a(Jl, n));
        }
        function ii(e) {
          ei.current === e && (Ca(Jl), Ca(ei));
        }
        var oi = Ea(0);
        function ui(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var si = [];
        function ci() {
          for (var e = 0; e < si.length; e++)
            si[e]._workInProgressVersionPrimary = null;
          si.length = 0;
        }
        var fi = w.ReactCurrentDispatcher,
          di = w.ReactCurrentBatchConfig,
          pi = 0,
          mi = null,
          hi = null,
          gi = null,
          vi = !1,
          yi = !1,
          bi = 0,
          wi = 0;
        function xi() {
          throw Error(l(321));
        }
        function ki(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!or(e[n], t[n])) return !1;
          return !0;
        }
        function Si(e, t, n, r, a, i) {
          if (
            ((pi = i),
            (mi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fi.current = null === e || null === e.memoizedState ? io : oo),
            (e = n(r, a)),
            yi)
          ) {
            i = 0;
            do {
              if (((yi = !1), (bi = 0), 25 <= i)) throw Error(l(301));
              (i += 1),
                (gi = hi = null),
                (t.updateQueue = null),
                (fi.current = uo),
                (e = n(r, a));
            } while (yi);
          }
          if (
            ((fi.current = lo),
            (t = null !== hi && null !== hi.next),
            (pi = 0),
            (gi = hi = mi = null),
            (vi = !1),
            t)
          )
            throw Error(l(300));
          return e;
        }
        function Ei() {
          var e = 0 !== bi;
          return (bi = 0), e;
        }
        function Ci() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === gi ? (mi.memoizedState = gi = e) : (gi = gi.next = e), gi
          );
        }
        function _i() {
          if (null === hi) {
            var e = mi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = hi.next;
          var t = null === gi ? mi.memoizedState : gi.next;
          if (null !== t) (gi = t), (hi = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (hi = e).memoizedState,
              baseState: hi.baseState,
              baseQueue: hi.baseQueue,
              queue: hi.queue,
              next: null,
            }),
              null === gi ? (mi.memoizedState = gi = e) : (gi = gi.next = e);
          }
          return gi;
        }
        function Ni(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function zi(e) {
          var t = _i(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = hi,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var o = a.next;
              (a.next = i.next), (i.next = o);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var u = (o = null),
              s = null,
              c = i;
            do {
              var f = c.lane;
              if ((pi & f) === f)
                null !== s &&
                  (s = s.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === s ? ((u = s = d), (o = r)) : (s = s.next = d),
                  (mi.lanes |= f),
                  (Fu |= f);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === s ? (o = r) : (s.next = u),
              or(r, t.memoizedState) || (wo = !0),
              (t.memoizedState = r),
              (t.baseState = o),
              (t.baseQueue = s),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (mi.lanes |= i), (Fu |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Pi(e) {
          var t = _i(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var o = (a = a.next);
            do {
              (i = e(i, o.action)), (o = o.next);
            } while (o !== a);
            or(i, t.memoizedState) || (wo = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function ji() {}
        function Li(e, t) {
          var n = mi,
            r = _i(),
            a = t(),
            i = !or(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (wo = !0)),
            (r = r.queue),
            Vi(Mi.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== gi && 1 & gi.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ii(9, Ti.bind(null, n, r, a, t), void 0, null),
              null === ju)
            )
              throw Error(l(349));
            0 !== (30 & pi) || Oi(n, t, a);
          }
          return a;
        }
        function Oi(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ti(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Ri(t) && Di(e);
        }
        function Mi(e, t, n) {
          return n(function () {
            Ri(t) && Di(e);
          });
        }
        function Ri(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !or(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Di(e) {
          var t = Pl(e, 1);
          null !== t && rs(t, e, 1, -1);
        }
        function Fi(e) {
          var t = Ci();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ni,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = to.bind(null, mi, e)),
            [t.memoizedState, e]
          );
        }
        function Ii(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = mi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (mi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Ai() {
          return _i().memoizedState;
        }
        function Ui(e, t, n, r) {
          var a = Ci();
          (mi.flags |= e),
            (a.memoizedState = Ii(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Bi(e, t, n, r) {
          var a = _i();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== hi) {
            var i = hi.memoizedState;
            if (((l = i.destroy), null !== r && ki(r, i.deps)))
              return void (a.memoizedState = Ii(t, n, l, r));
          }
          (mi.flags |= e), (a.memoizedState = Ii(1 | t, n, l, r));
        }
        function Hi(e, t) {
          return Ui(8390656, 8, e, t);
        }
        function Vi(e, t) {
          return Bi(2048, 8, e, t);
        }
        function $i(e, t) {
          return Bi(4, 2, e, t);
        }
        function Wi(e, t) {
          return Bi(4, 4, e, t);
        }
        function Qi(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Gi(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Bi(4, 4, Qi.bind(null, t, e), n)
          );
        }
        function qi() {}
        function Ki(e, t) {
          var n = _i();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ki(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Xi(e, t) {
          var n = _i();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ki(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Yi(e, t, n) {
          return 0 === (21 & pi)
            ? (e.baseState && ((e.baseState = !1), (wo = !0)),
              (e.memoizedState = n))
            : (or(n, t) ||
                ((n = ht()), (mi.lanes |= n), (Fu |= n), (e.baseState = !0)),
              t);
        }
        function Zi(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = di.transition;
          di.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (di.transition = r);
          }
        }
        function Ji() {
          return _i().memoizedState;
        }
        function eo(e, t, n) {
          var r = ns(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            no(e))
          )
            ro(t, n);
          else if (null !== (n = zl(e, t, n, r))) {
            rs(n, e, r, ts()), ao(n, t, r);
          }
        }
        function to(e, t, n) {
          var r = ns(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (no(e)) ro(t, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  o = l(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = o), or(o, i))) {
                  var u = t.interleaved;
                  return (
                    null === u
                      ? ((a.next = a), Nl(t))
                      : ((a.next = u.next), (u.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (s) {}
            null !== (n = zl(e, t, a, r)) &&
              (rs(n, e, r, (a = ts())), ao(n, t, r));
          }
        }
        function no(e) {
          var t = e.alternate;
          return e === mi || (null !== t && t === mi);
        }
        function ro(e, t) {
          yi = vi = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function ao(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var lo = {
            readContext: Cl,
            useCallback: xi,
            useContext: xi,
            useEffect: xi,
            useImperativeHandle: xi,
            useInsertionEffect: xi,
            useLayoutEffect: xi,
            useMemo: xi,
            useReducer: xi,
            useRef: xi,
            useState: xi,
            useDebugValue: xi,
            useDeferredValue: xi,
            useTransition: xi,
            useMutableSource: xi,
            useSyncExternalStore: xi,
            useId: xi,
            unstable_isNewReconciler: !1,
          },
          io = {
            readContext: Cl,
            useCallback: function (e, t) {
              return (Ci().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Cl,
            useEffect: Hi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ui(4194308, 4, Qi.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ui(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ui(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Ci();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Ci();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = eo.bind(null, mi, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ci().memoizedState = e);
            },
            useState: Fi,
            useDebugValue: qi,
            useDeferredValue: function (e) {
              return (Ci().memoizedState = e);
            },
            useTransition: function () {
              var e = Fi(!1),
                t = e[0];
              return (
                (e = Zi.bind(null, e[1])), (Ci().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = mi,
                a = Ci();
              if (al) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === ju)) throw Error(l(349));
                0 !== (30 & pi) || Oi(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Hi(Mi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Ii(9, Ti.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Ci(),
                t = ju.identifierPrefix;
              if (al) {
                var n = Ya;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Xa & ~(1 << (32 - it(Xa) - 1))).toString(32) + n)),
                  0 < (n = bi++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = wi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          oo = {
            readContext: Cl,
            useCallback: Ki,
            useContext: Cl,
            useEffect: Vi,
            useImperativeHandle: Gi,
            useInsertionEffect: $i,
            useLayoutEffect: Wi,
            useMemo: Xi,
            useReducer: zi,
            useRef: Ai,
            useState: function () {
              return zi(Ni);
            },
            useDebugValue: qi,
            useDeferredValue: function (e) {
              return Yi(_i(), hi.memoizedState, e);
            },
            useTransition: function () {
              return [zi(Ni)[0], _i().memoizedState];
            },
            useMutableSource: ji,
            useSyncExternalStore: Li,
            useId: Ji,
            unstable_isNewReconciler: !1,
          },
          uo = {
            readContext: Cl,
            useCallback: Ki,
            useContext: Cl,
            useEffect: Vi,
            useImperativeHandle: Gi,
            useInsertionEffect: $i,
            useLayoutEffect: Wi,
            useMemo: Xi,
            useReducer: Pi,
            useRef: Ai,
            useState: function () {
              return Pi(Ni);
            },
            useDebugValue: qi,
            useDeferredValue: function (e) {
              var t = _i();
              return null === hi
                ? (t.memoizedState = e)
                : Yi(t, hi.memoizedState, e);
            },
            useTransition: function () {
              return [Pi(Ni)[0], _i().memoizedState];
            },
            useMutableSource: ji,
            useSyncExternalStore: Li,
            useId: Ji,
            unstable_isNewReconciler: !1,
          };
        function so(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (l) {
            a = "\nError generating stack: " + l.message + "\n" + l.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function co(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fo(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var po = "function" === typeof WeakMap ? WeakMap : Map;
        function mo(e, t, n) {
          ((n = Tl(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Wu || ((Wu = !0), (Qu = r)), fo(0, t);
            }),
            n
          );
        }
        function ho(e, t, n) {
          (n = Tl(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fo(0, t);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              "function" === typeof l.componentDidCatch &&
              (n.callback = function () {
                fo(0, t),
                  "function" !== typeof r &&
                    (null === Gu ? (Gu = new Set([this])) : Gu.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function go(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new po();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = _s.bind(null, e, t, n)), t.then(e, e));
        }
        function vo(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yo(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Tl(-1, 1)).tag = 2), Ml(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bo = w.ReactCurrentOwner,
          wo = !1;
        function xo(e, t, n, r) {
          t.child = null === e ? Yl(t, null, n, r) : Xl(t, e.child, n, r);
        }
        function ko(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          return (
            El(t, a),
            (r = Si(e, t, n, r, l, a)),
            (n = Ei()),
            null === e || wo
              ? (al && n && el(t), (t.flags |= 1), xo(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wo(e, t, a))
          );
        }
        function So(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return "function" !== typeof l ||
              Ts(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Rs(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), Eo(e, t, l, r, a));
          }
          if (((l = e.child), 0 === (e.lanes & a))) {
            var i = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ur)(i, r) &&
              e.ref === t.ref
            )
              return Wo(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Ms(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Eo(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (ur(l, r) && e.ref === t.ref) {
              if (((wo = !1), (t.pendingProps = r = l), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Wo(e, t, a);
              0 !== (131072 & e.flags) && (wo = !0);
            }
          }
          return No(e, t, n, r, a);
        }
        function Co(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                _a(Mu, Tu),
                (Tu |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== l ? l.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  _a(Mu, Tu),
                  (Tu |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : n),
                _a(Mu, Tu),
                (Tu |= r);
            }
          else
            null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              _a(Mu, Tu),
              (Tu |= r);
          return xo(e, t, a, n), t.child;
        }
        function _o(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function No(e, t, n, r, a) {
          var l = Oa(n) ? ja : za.current;
          return (
            (l = La(t, l)),
            El(t, a),
            (n = Si(e, t, n, r, l, a)),
            (r = Ei()),
            null === e || wo
              ? (al && r && el(t), (t.flags |= 1), xo(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wo(e, t, a))
          );
        }
        function zo(e, t, n, r, a) {
          if (Oa(n)) {
            var l = !0;
            Da(t);
          } else l = !1;
          if ((El(t, a), null === t.stateNode))
            $o(e, t), Vl(t, n, r), Wl(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              o = t.memoizedProps;
            i.props = o;
            var u = i.context,
              s = n.contextType;
            "object" === typeof s && null !== s
              ? (s = Cl(s))
              : (s = La(t, (s = Oa(n) ? ja : za.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((o !== r || u !== s) && $l(t, i, r, s)),
              (jl = !1);
            var d = t.memoizedState;
            (i.state = d),
              Fl(t, r, i, a),
              (u = t.memoizedState),
              o !== r || d !== u || Pa.current || jl
                ? ("function" === typeof c &&
                    (Ul(t, n, c, r), (u = t.memoizedState)),
                  (o = jl || Hl(t, n, o, r, d, u, s))
                    ? (f ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (i.props = r),
                  (i.state = u),
                  (i.context = s),
                  (r = o))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Ol(e, t),
              (o = t.memoizedProps),
              (s = t.type === t.elementType ? o : gl(t.type, o)),
              (i.props = s),
              (f = t.pendingProps),
              (d = i.context),
              "object" === typeof (u = n.contextType) && null !== u
                ? (u = Cl(u))
                : (u = La(t, (u = Oa(n) ? ja : za.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((o !== f || d !== u) && $l(t, i, r, u)),
              (jl = !1),
              (d = t.memoizedState),
              (i.state = d),
              Fl(t, r, i, a);
            var m = t.memoizedState;
            o !== f || d !== m || Pa.current || jl
              ? ("function" === typeof p &&
                  (Ul(t, n, p, r), (m = t.memoizedState)),
                (s = jl || Hl(t, n, s, r, d, m, u) || !1)
                  ? (c ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, m, u),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, m, u)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (o === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = m)),
                (i.props = r),
                (i.state = m),
                (i.context = u),
                (r = s))
              : ("function" !== typeof i.componentDidUpdate ||
                  (o === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return Po(e, t, n, r, l, a);
        }
        function Po(e, t, n, r, a, l) {
          _o(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Fa(t, n, !1), Wo(e, t, l);
          (r = t.stateNode), (bo.current = t);
          var o =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Xl(t, e.child, null, l)),
                (t.child = Xl(t, null, o, l)))
              : xo(e, t, o, l),
            (t.memoizedState = r.state),
            a && Fa(t, n, !0),
            t.child
          );
        }
        function jo(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ma(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ma(0, t.context, !1),
            ri(e, t.containerInfo);
        }
        function Lo(e, t, n, r, a) {
          return pl(), ml(a), (t.flags |= 256), xo(e, t, n, r), t.child;
        }
        var Oo,
          To,
          Mo,
          Ro,
          Do = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Fo(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Io(e, t, n) {
          var r,
            a = t.pendingProps,
            i = oi.current,
            o = !1,
            u = 0 !== (128 & t.flags);
          if (
            ((r = u) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((o = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            _a(oi, 1 & i),
            null === e)
          )
            return (
              sl(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((u = a.children),
                  (e = a.fallback),
                  o
                    ? ((a = t.mode),
                      (o = t.child),
                      (u = { mode: "hidden", children: u }),
                      0 === (1 & a) && null !== o
                        ? ((o.childLanes = 0), (o.pendingProps = u))
                        : (o = Fs(u, a, 0, null)),
                      (e = Ds(e, a, n, null)),
                      (o.return = t),
                      (e.return = t),
                      (o.sibling = e),
                      (t.child = o),
                      (t.child.memoizedState = Fo(n)),
                      (t.memoizedState = Do),
                      e)
                    : Ao(t, u))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, o) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Uo(e, t, o, (r = co(Error(l(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = Fs(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = Ds(i, a, o, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && Xl(t, e.child, null, o),
                    (t.child.memoizedState = Fo(o)),
                    (t.memoizedState = Do),
                    i);
              if (0 === (1 & t.mode)) return Uo(e, t, o, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var u = r.dgst;
                return (
                  (r = u), Uo(e, t, o, (r = co((i = Error(l(419))), r, void 0)))
                );
              }
              if (((u = 0 !== (o & e.childLanes)), wo || u)) {
                if (null !== (r = ju)) {
                  switch (o & -o) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | o)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), Pl(e, a), rs(r, e, a, -1));
                }
                return gs(), Uo(e, t, o, (r = co(Error(l(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = zs.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (rl = sa(a.nextSibling)),
                  (nl = t),
                  (al = !0),
                  (ll = null),
                  null !== e &&
                    ((Ga[qa++] = Xa),
                    (Ga[qa++] = Ya),
                    (Ga[qa++] = Ka),
                    (Xa = e.id),
                    (Ya = e.overflow),
                    (Ka = t)),
                  (t = Ao(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, u, a, r, i, n);
          if (o) {
            (o = a.fallback), (u = t.mode), (r = (i = e.child).sibling);
            var s = { mode: "hidden", children: a.children };
            return (
              0 === (1 & u) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = s),
                  (t.deletions = null))
                : ((a = Ms(i, s)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (o = Ms(r, o))
                : ((o = Ds(o, u, n, null)).flags |= 2),
              (o.return = t),
              (a.return = t),
              (a.sibling = o),
              (t.child = a),
              (a = o),
              (o = t.child),
              (u =
                null === (u = e.child.memoizedState)
                  ? Fo(n)
                  : {
                      baseLanes: u.baseLanes | n,
                      cachePool: null,
                      transitions: u.transitions,
                    }),
              (o.memoizedState = u),
              (o.childLanes = e.childLanes & ~n),
              (t.memoizedState = Do),
              a
            );
          }
          return (
            (e = (o = e.child).sibling),
            (a = Ms(o, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Ao(e, t) {
          return (
            ((t = Fs(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Uo(e, t, n, r) {
          return (
            null !== r && ml(r),
            Xl(t, e.child, null, n),
            ((e = Ao(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Bo(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Sl(e.return, t, n);
        }
        function Ho(e, t, n, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a));
        }
        function Vo(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((xo(e, t, r.children, n), 0 !== (2 & (r = oi.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Bo(e, n, t);
                else if (19 === e.tag) Bo(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((_a(oi, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === ui(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Ho(t, !1, a, n, l);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === ui(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Ho(t, !0, n, null, l);
                break;
              case "together":
                Ho(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function $o(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Wo(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Fu |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = Ms((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ms(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Qo(e, t) {
          if (!al)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Go(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function qo(e, t, n) {
          var r = t.pendingProps;
          switch ((tl(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Go(t), null;
            case 1:
            case 17:
              return Oa(t.type) && Ta(), Go(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ai(),
                Ca(Pa),
                Ca(za),
                ci(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fl(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ll && (os(ll), (ll = null)))),
                To(e, t),
                Go(t),
                null
              );
            case 5:
              ii(t);
              var a = ni(ti.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Mo(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return Go(t), null;
                }
                if (((e = ni(Jl.current)), fl(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ar("cancel", r), Ar("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ar("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Rr.length; a++) Ar(Rr[a], r);
                      break;
                    case "source":
                      Ar("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ar("error", r), Ar("load", r);
                      break;
                    case "details":
                      Ar("toggle", r);
                      break;
                    case "input":
                      X(r, i), Ar("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Ar("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Ar("invalid", r);
                  }
                  for (var u in (ye(n, i), (a = null), i))
                    if (i.hasOwnProperty(u)) {
                      var s = i[u];
                      "children" === u
                        ? "string" === typeof s
                          ? r.textContent !== s &&
                            (!0 !== i.suppressHydrationWarning &&
                              Zr(r.textContent, s, e),
                            (a = ["children", s]))
                          : "number" === typeof s &&
                            r.textContent !== "" + s &&
                            (!0 !== i.suppressHydrationWarning &&
                              Zr(r.textContent, s, e),
                            (a = ["children", "" + s]))
                        : o.hasOwnProperty(u) &&
                          null != s &&
                          "onScroll" === u &&
                          Ar("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Q(r), J(r, i, !0);
                      break;
                    case "textarea":
                      Q(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Jr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (u = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = oe(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = u.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = u.createElement(n, { is: r.is }))
                        : ((e = u.createElement(n)),
                          "select" === n &&
                            ((u = e),
                            r.multiple
                              ? (u.multiple = !0)
                              : r.size && (u.size = r.size)))
                      : (e = u.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Oo(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((u = be(n, r)), n)) {
                      case "dialog":
                        Ar("cancel", e), Ar("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ar("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Rr.length; a++) Ar(Rr[a], e);
                        a = r;
                        break;
                      case "source":
                        Ar("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ar("error", e), Ar("load", e), (a = r);
                        break;
                      case "details":
                        Ar("toggle", e), (a = r);
                        break;
                      case "input":
                        X(e, r), (a = K(e, r)), Ar("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = F({}, r, { value: void 0 })),
                          Ar("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ar("invalid", e);
                    }
                    for (i in (ye(n, a), (s = a)))
                      if (s.hasOwnProperty(i)) {
                        var c = s[i];
                        "style" === i
                          ? ge(e, c)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === i
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (o.hasOwnProperty(i)
                              ? null != c && "onScroll" === i && Ar("scroll", e)
                              : null != c && b(e, i, c, u));
                      }
                    switch (n) {
                      case "input":
                        Q(e), J(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + $(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Go(t), null;
            case 6:
              if (e && null != t.stateNode) Ro(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((n = ni(ti.current)), ni(Jl.current), fl(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (i = r.nodeValue !== n) && null !== (e = nl))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return Go(t), null;
            case 13:
              if (
                (Ca(oi),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  al &&
                  null !== rl &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  dl(), pl(), (t.flags |= 98560), (i = !1);
                else if (((i = fl(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(l(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(l(317));
                    i[da] = t;
                  } else
                    pl(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Go(t), (i = !1);
                } else null !== ll && (os(ll), (ll = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & oi.current)
                        ? 0 === Ru && (Ru = 3)
                        : gs())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Go(t),
                  null);
            case 4:
              return (
                ai(),
                To(e, t),
                null === e && Hr(t.stateNode.containerInfo),
                Go(t),
                null
              );
            case 10:
              return kl(t.type._context), Go(t), null;
            case 19:
              if ((Ca(oi), null === (i = t.memoizedState))) return Go(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (u = i.rendering)))
                if (r) Qo(i, !1);
                else {
                  if (0 !== Ru || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (u = ui(e))) {
                        for (
                          t.flags |= 128,
                            Qo(i, !1),
                            null !== (r = u.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (u = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = u.childLanes),
                                (i.lanes = u.lanes),
                                (i.child = u.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = u.memoizedProps),
                                (i.memoizedState = u.memoizedState),
                                (i.updateQueue = u.updateQueue),
                                (i.type = u.type),
                                (e = u.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return _a(oi, (1 & oi.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Ye() > Vu &&
                    ((t.flags |= 128),
                    (r = !0),
                    Qo(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ui(u))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Qo(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !u.alternate &&
                        !al)
                    )
                      return Go(t), null;
                  } else
                    2 * Ye() - i.renderingStartTime > Vu &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Qo(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((u.sibling = t.child), (t.child = u))
                  : (null !== (n = i.last) ? (n.sibling = u) : (t.child = u),
                    (i.last = u));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Ye()),
                  (t.sibling = null),
                  (n = oi.current),
                  _a(oi, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Go(t), null);
            case 22:
            case 23:
              return (
                ds(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Tu) &&
                    (Go(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Go(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, t.tag));
        }
        function Ko(e, t) {
          switch ((tl(t), t.tag)) {
            case 1:
              return (
                Oa(t.type) && Ta(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ai(),
                Ca(Pa),
                Ca(za),
                ci(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return ii(t), null;
            case 13:
              if (
                (Ca(oi),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340));
                pl();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ca(oi), null;
            case 4:
              return ai(), null;
            case 10:
              return kl(t.type._context), null;
            case 22:
            case 23:
              return ds(), null;
            default:
              return null;
          }
        }
        (Oo = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (To = function () {}),
          (Mo = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), ni(Jl.current);
              var l,
                i = null;
              switch (n) {
                case "input":
                  (a = K(e, a)), (r = K(e, r)), (i = []);
                  break;
                case "select":
                  (a = F({}, a, { value: void 0 })),
                    (r = F({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var u = a[c];
                    for (l in u)
                      u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (o.hasOwnProperty(c)
                        ? i || (i = [])
                        : (i = i || []).push(c, null));
              for (c in r) {
                var s = r[c];
                if (
                  ((u = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && s !== u && (null != s || null != u))
                )
                  if ("style" === c)
                    if (u) {
                      for (l in u)
                        !u.hasOwnProperty(l) ||
                          (s && s.hasOwnProperty(l)) ||
                          (n || (n = {}), (n[l] = ""));
                      for (l in s)
                        s.hasOwnProperty(l) &&
                          u[l] !== s[l] &&
                          (n || (n = {}), (n[l] = s[l]));
                    } else n || (i || (i = []), i.push(c, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((s = s ? s.__html : void 0),
                        (u = u ? u.__html : void 0),
                        null != s && u !== s && (i = i || []).push(c, s))
                      : "children" === c
                      ? ("string" !== typeof s && "number" !== typeof s) ||
                        (i = i || []).push(c, "" + s)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (o.hasOwnProperty(c)
                          ? (null != s && "onScroll" === c && Ar("scroll", e),
                            i || u === s || (i = []))
                          : (i = i || []).push(c, s));
              }
              n && (i = i || []).push("style", n);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Ro = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Xo = !1,
          Yo = !1,
          Zo = "function" === typeof WeakSet ? WeakSet : Set,
          Jo = null;
        function eu(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Cs(e, t, r);
              }
            else n.current = null;
        }
        function tu(e, t, n) {
          try {
            n();
          } catch (r) {
            Cs(e, t, r);
          }
        }
        var nu = !1;
        function ru(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && tu(t, n, l);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function au(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function lu(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function iu(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), iu(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[ha],
              delete t[ga],
              delete t[va]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ou(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function uu(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ou(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function su(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (su(e, t, n), e = e.sibling; null !== e; )
              su(e, t, n), (e = e.sibling);
        }
        function cu(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cu(e, t, n), e = e.sibling; null !== e; )
              cu(e, t, n), (e = e.sibling);
        }
        var fu = null,
          du = !1;
        function pu(e, t, n) {
          for (n = n.child; null !== n; ) mu(e, t, n), (n = n.sibling);
        }
        function mu(e, t, n) {
          if (lt && "function" === typeof lt.onCommitFiberUnmount)
            try {
              lt.onCommitFiberUnmount(at, n);
            } catch (o) {}
          switch (n.tag) {
            case 5:
              Yo || eu(n, t);
            case 6:
              var r = fu,
                a = du;
              (fu = null),
                pu(e, t, n),
                (du = a),
                null !== (fu = r) &&
                  (du
                    ? ((e = fu),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : fu.removeChild(n.stateNode));
              break;
            case 18:
              null !== fu &&
                (du
                  ? ((e = fu),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ua(e.parentNode, n)
                      : 1 === e.nodeType && ua(e, n),
                    Ht(e))
                  : ua(fu, n.stateNode));
              break;
            case 4:
              (r = fu),
                (a = du),
                (fu = n.stateNode.containerInfo),
                (du = !0),
                pu(e, t, n),
                (fu = r),
                (du = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Yo &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var l = a,
                    i = l.destroy;
                  (l = l.tag),
                    void 0 !== i &&
                      (0 !== (2 & l) || 0 !== (4 & l)) &&
                      tu(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              pu(e, t, n);
              break;
            case 1:
              if (
                !Yo &&
                (eu(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (o) {
                  Cs(n, t, o);
                }
              pu(e, t, n);
              break;
            case 21:
              pu(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Yo = (r = Yo) || null !== n.memoizedState),
                  pu(e, t, n),
                  (Yo = r))
                : pu(e, t, n);
              break;
            default:
              pu(e, t, n);
          }
        }
        function hu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Zo()),
              t.forEach(function (t) {
                var r = Ps.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function gu(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  o = t,
                  u = o;
                e: for (; null !== u; ) {
                  switch (u.tag) {
                    case 5:
                      (fu = u.stateNode), (du = !1);
                      break e;
                    case 3:
                    case 4:
                      (fu = u.stateNode.containerInfo), (du = !0);
                      break e;
                  }
                  u = u.return;
                }
                if (null === fu) throw Error(l(160));
                mu(i, o, a), (fu = null), (du = !1);
                var s = a.alternate;
                null !== s && (s.return = null), (a.return = null);
              } catch (c) {
                Cs(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) vu(t, e), (t = t.sibling);
        }
        function vu(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((gu(t, e), yu(e), 4 & r)) {
                try {
                  ru(3, e, e.return), au(3, e);
                } catch (g) {
                  Cs(e, e.return, g);
                }
                try {
                  ru(5, e, e.return);
                } catch (g) {
                  Cs(e, e.return, g);
                }
              }
              break;
            case 1:
              gu(t, e), yu(e), 512 & r && null !== n && eu(n, n.return);
              break;
            case 5:
              if (
                (gu(t, e),
                yu(e),
                512 & r && null !== n && eu(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (g) {
                  Cs(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  o = null !== n ? n.memoizedProps : i,
                  u = e.type,
                  s = e.updateQueue;
                if (((e.updateQueue = null), null !== s))
                  try {
                    "input" === u &&
                      "radio" === i.type &&
                      null != i.name &&
                      Y(a, i),
                      be(u, o);
                    var c = be(u, i);
                    for (o = 0; o < s.length; o += 2) {
                      var f = s[o],
                        d = s[o + 1];
                      "style" === f
                        ? ge(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, c);
                    }
                    switch (u) {
                      case "input":
                        Z(a, i);
                        break;
                      case "textarea":
                        le(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var m = i.value;
                        null != m
                          ? ne(a, !!i.multiple, m, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (g) {
                    Cs(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((gu(t, e), yu(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (g) {
                  Cs(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (gu(t, e),
                yu(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Ht(t.containerInfo);
                } catch (g) {
                  Cs(e, e.return, g);
                }
              break;
            case 4:
            default:
              gu(t, e), yu(e);
              break;
            case 13:
              gu(t, e),
                yu(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Hu = Ye())),
                4 & r && hu(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Yo = (c = Yo) || f), gu(t, e), (Yo = c))
                  : gu(t, e),
                yu(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Jo = e, f = e.child; null !== f; ) {
                    for (d = Jo = f; null !== Jo; ) {
                      switch (((m = (p = Jo).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ru(4, p, p.return);
                          break;
                        case 1:
                          eu(p, p.return);
                          var h = p.stateNode;
                          if ("function" === typeof h.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (h.props = t.memoizedProps),
                                (h.state = t.memoizedState),
                                h.componentWillUnmount();
                            } catch (g) {
                              Cs(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          eu(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ku(d);
                            continue;
                          }
                      }
                      null !== m ? ((m.return = p), (Jo = m)) : ku(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((u = d.stateNode),
                              (o =
                                void 0 !== (s = d.memoizedProps.style) &&
                                null !== s &&
                                s.hasOwnProperty("display")
                                  ? s.display
                                  : null),
                              (u.style.display = he("display", o)));
                      } catch (g) {
                        Cs(e, e.return, g);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (g) {
                        Cs(e, e.return, g);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              gu(t, e), yu(e), 4 & r && hu(e);
            case 21:
          }
        }
        function yu(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (ou(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(l(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    cu(e, uu(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  su(e, uu(e), i);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (o) {
              Cs(e, e.return, o);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bu(e, t, n) {
          (Jo = e), wu(e, t, n);
        }
        function wu(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Jo; ) {
            var a = Jo,
              l = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Xo;
              if (!i) {
                var o = a.alternate,
                  u = (null !== o && null !== o.memoizedState) || Yo;
                o = Xo;
                var s = Yo;
                if (((Xo = i), (Yo = u) && !s))
                  for (Jo = a; null !== Jo; )
                    (u = (i = Jo).child),
                      22 === i.tag && null !== i.memoizedState
                        ? Su(a)
                        : null !== u
                        ? ((u.return = i), (Jo = u))
                        : Su(a);
                for (; null !== l; ) (Jo = l), wu(l, t, n), (l = l.sibling);
                (Jo = a), (Xo = o), (Yo = s);
              }
              xu(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), (Jo = l))
                : xu(e);
          }
        }
        function xu(e) {
          for (; null !== Jo; ) {
            var t = Jo;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yo || au(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Yo)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : gl(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Il(t, i, r);
                      break;
                    case 3:
                      var o = t.updateQueue;
                      if (null !== o) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Il(t, o, n);
                      }
                      break;
                    case 5:
                      var u = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = u;
                        var s = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            s.autoFocus && n.focus();
                            break;
                          case "img":
                            s.src && (n.src = s.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Ht(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(l(163));
                  }
                Yo || (512 & t.flags && lu(t));
              } catch (p) {
                Cs(t, t.return, p);
              }
            }
            if (t === e) {
              Jo = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Jo = n);
              break;
            }
            Jo = t.return;
          }
        }
        function ku(e) {
          for (; null !== Jo; ) {
            var t = Jo;
            if (t === e) {
              Jo = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Jo = n);
              break;
            }
            Jo = t.return;
          }
        }
        function Su(e) {
          for (; null !== Jo; ) {
            var t = Jo;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    au(4, t);
                  } catch (u) {
                    Cs(t, n, u);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (u) {
                      Cs(t, a, u);
                    }
                  }
                  var l = t.return;
                  try {
                    lu(t);
                  } catch (u) {
                    Cs(t, l, u);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    lu(t);
                  } catch (u) {
                    Cs(t, i, u);
                  }
              }
            } catch (u) {
              Cs(t, t.return, u);
            }
            if (t === e) {
              Jo = null;
              break;
            }
            var o = t.sibling;
            if (null !== o) {
              (o.return = t.return), (Jo = o);
              break;
            }
            Jo = t.return;
          }
        }
        var Eu,
          Cu = Math.ceil,
          _u = w.ReactCurrentDispatcher,
          Nu = w.ReactCurrentOwner,
          zu = w.ReactCurrentBatchConfig,
          Pu = 0,
          ju = null,
          Lu = null,
          Ou = 0,
          Tu = 0,
          Mu = Ea(0),
          Ru = 0,
          Du = null,
          Fu = 0,
          Iu = 0,
          Au = 0,
          Uu = null,
          Bu = null,
          Hu = 0,
          Vu = 1 / 0,
          $u = null,
          Wu = !1,
          Qu = null,
          Gu = null,
          qu = !1,
          Ku = null,
          Xu = 0,
          Yu = 0,
          Zu = null,
          Ju = -1,
          es = 0;
        function ts() {
          return 0 !== (6 & Pu) ? Ye() : -1 !== Ju ? Ju : (Ju = Ye());
        }
        function ns(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Pu) && 0 !== Ou
            ? Ou & -Ou
            : null !== hl.transition
            ? (0 === es && (es = ht()), es)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Xt(e.type));
        }
        function rs(e, t, n, r) {
          if (50 < Yu) throw ((Yu = 0), (Zu = null), Error(l(185)));
          vt(e, n, r),
            (0 !== (2 & Pu) && e === ju) ||
              (e === ju && (0 === (2 & Pu) && (Iu |= n), 4 === Ru && us(e, Ou)),
              as(e, r),
              1 === n &&
                0 === Pu &&
                0 === (1 & t.mode) &&
                ((Vu = Ye() + 500), Aa && Ha()));
        }
        function as(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var i = 31 - it(l),
                o = 1 << i,
                u = a[i];
              -1 === u
                ? (0 !== (o & n) && 0 === (o & r)) || (a[i] = pt(o, t))
                : u <= t && (e.expiredLanes |= o),
                (l &= ~o);
            }
          })(e, t);
          var r = dt(e, e === ju ? Ou : 0);
          if (0 === r)
            null !== n && qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Aa = !0), Ba(e);
                  })(ss.bind(null, e))
                : Ba(ss.bind(null, e)),
                ia(function () {
                  0 === (6 & Pu) && Ha();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = js(n, ls.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ls(e, t) {
          if (((Ju = -1), (es = 0), 0 !== (6 & Pu))) throw Error(l(327));
          var n = e.callbackNode;
          if (Ss() && e.callbackNode !== n) return null;
          var r = dt(e, e === ju ? Ou : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vs(e, r);
          else {
            t = r;
            var a = Pu;
            Pu |= 2;
            var i = hs();
            for (
              (ju === e && Ou === t) ||
              (($u = null), (Vu = Ye() + 500), ps(e, t));
              ;

            )
              try {
                bs();
                break;
              } catch (u) {
                ms(e, u);
              }
            xl(),
              (_u.current = i),
              (Pu = a),
              null !== Lu ? (t = 0) : ((ju = null), (Ou = 0), (t = Ru));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = mt(e)) && ((r = a), (t = is(e, a))),
              1 === t)
            )
              throw ((n = Du), ps(e, 0), us(e, r), as(e, Ye()), n);
            if (6 === t) us(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              l = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!or(l(), a)) return !1;
                            } catch (o) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = vs(e, r)) &&
                    0 !== (i = mt(e)) &&
                    ((r = i), (t = is(e, i))),
                  1 === t))
              )
                throw ((n = Du), ps(e, 0), us(e, r), as(e, Ye()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  ks(e, Bu, $u);
                  break;
                case 3:
                  if (
                    (us(e, r),
                    (130023424 & r) === r && 10 < (t = Hu + 500 - Ye()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ts(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(ks.bind(null, e, Bu, $u), t);
                    break;
                  }
                  ks(e, Bu, $u);
                  break;
                case 4:
                  if ((us(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var o = 31 - it(r);
                    (i = 1 << o), (o = t[o]) > a && (a = o), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ye() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Cu(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(ks.bind(null, e, Bu, $u), r);
                    break;
                  }
                  ks(e, Bu, $u);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return as(e, Ye()), e.callbackNode === n ? ls.bind(null, e) : null;
        }
        function is(e, t) {
          var n = Uu;
          return (
            e.current.memoizedState.isDehydrated && (ps(e, t).flags |= 256),
            2 !== (e = vs(e, t)) && ((t = Bu), (Bu = n), null !== t && os(t)),
            e
          );
        }
        function os(e) {
          null === Bu ? (Bu = e) : Bu.push.apply(Bu, e);
        }
        function us(e, t) {
          for (
            t &= ~Au,
              t &= ~Iu,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function ss(e) {
          if (0 !== (6 & Pu)) throw Error(l(327));
          Ss();
          var t = dt(e, 0);
          if (0 === (1 & t)) return as(e, Ye()), null;
          var n = vs(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = mt(e);
            0 !== r && ((t = r), (n = is(e, r)));
          }
          if (1 === n) throw ((n = Du), ps(e, 0), us(e, t), as(e, Ye()), n);
          if (6 === n) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ks(e, Bu, $u),
            as(e, Ye()),
            null
          );
        }
        function cs(e, t) {
          var n = Pu;
          Pu |= 1;
          try {
            return e(t);
          } finally {
            0 === (Pu = n) && ((Vu = Ye() + 500), Aa && Ha());
          }
        }
        function fs(e) {
          null !== Ku && 0 === Ku.tag && 0 === (6 & Pu) && Ss();
          var t = Pu;
          Pu |= 1;
          var n = zu.transition,
            r = bt;
          try {
            if (((zu.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (zu.transition = n), 0 === (6 & (Pu = t)) && Ha();
          }
        }
        function ds() {
          (Tu = Mu.current), Ca(Mu);
        }
        function ps(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Lu))
            for (n = Lu.return; null !== n; ) {
              var r = n;
              switch ((tl(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ta();
                  break;
                case 3:
                  ai(), Ca(Pa), Ca(za), ci();
                  break;
                case 5:
                  ii(r);
                  break;
                case 4:
                  ai();
                  break;
                case 13:
                case 19:
                  Ca(oi);
                  break;
                case 10:
                  kl(r.type._context);
                  break;
                case 22:
                case 23:
                  ds();
              }
              n = n.return;
            }
          if (
            ((ju = e),
            (Lu = e = Ms(e.current, null)),
            (Ou = Tu = t),
            (Ru = 0),
            (Du = null),
            (Au = Iu = Fu = 0),
            (Bu = Uu = null),
            null !== _l)
          ) {
            for (t = 0; t < _l.length; t++)
              if (null !== (r = (n = _l[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  l = n.pending;
                if (null !== l) {
                  var i = l.next;
                  (l.next = a), (r.next = i);
                }
                n.pending = r;
              }
            _l = null;
          }
          return e;
        }
        function ms(e, t) {
          for (;;) {
            var n = Lu;
            try {
              if ((xl(), (fi.current = lo), vi)) {
                for (var r = mi.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                vi = !1;
              }
              if (
                ((pi = 0),
                (gi = hi = mi = null),
                (yi = !1),
                (bi = 0),
                (Nu.current = null),
                null === n || null === n.return)
              ) {
                (Ru = 1), (Du = t), (Lu = null);
                break;
              }
              e: {
                var i = e,
                  o = n.return,
                  u = n,
                  s = t;
                if (
                  ((t = Ou),
                  (u.flags |= 32768),
                  null !== s &&
                    "object" === typeof s &&
                    "function" === typeof s.then)
                ) {
                  var c = s,
                    f = u,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var m = vo(o);
                  if (null !== m) {
                    (m.flags &= -257),
                      yo(m, o, u, 0, t),
                      1 & m.mode && go(i, c, t),
                      (s = c);
                    var h = (t = m).updateQueue;
                    if (null === h) {
                      var g = new Set();
                      g.add(s), (t.updateQueue = g);
                    } else h.add(s);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    go(i, c, t), gs();
                    break e;
                  }
                  s = Error(l(426));
                } else if (al && 1 & u.mode) {
                  var v = vo(o);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256),
                      yo(v, o, u, 0, t),
                      ml(so(s, u));
                    break e;
                  }
                }
                (i = s = so(s, u)),
                  4 !== Ru && (Ru = 2),
                  null === Uu ? (Uu = [i]) : Uu.push(i),
                  (i = o);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Dl(i, mo(0, s, t));
                      break e;
                    case 1:
                      u = s;
                      var y = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Gu || !Gu.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          Dl(i, ho(i, u, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              xs(n);
            } catch (w) {
              (t = w), Lu === n && null !== n && (Lu = n = n.return);
              continue;
            }
            break;
          }
        }
        function hs() {
          var e = _u.current;
          return (_u.current = lo), null === e ? lo : e;
        }
        function gs() {
          (0 !== Ru && 3 !== Ru && 2 !== Ru) || (Ru = 4),
            null === ju ||
              (0 === (268435455 & Fu) && 0 === (268435455 & Iu)) ||
              us(ju, Ou);
        }
        function vs(e, t) {
          var n = Pu;
          Pu |= 2;
          var r = hs();
          for ((ju === e && Ou === t) || (($u = null), ps(e, t)); ; )
            try {
              ys();
              break;
            } catch (a) {
              ms(e, a);
            }
          if ((xl(), (Pu = n), (_u.current = r), null !== Lu))
            throw Error(l(261));
          return (ju = null), (Ou = 0), Ru;
        }
        function ys() {
          for (; null !== Lu; ) ws(Lu);
        }
        function bs() {
          for (; null !== Lu && !Ke(); ) ws(Lu);
        }
        function ws(e) {
          var t = Eu(e.alternate, e, Tu);
          (e.memoizedProps = e.pendingProps),
            null === t ? xs(e) : (Lu = t),
            (Nu.current = null);
        }
        function xs(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = qo(n, t, Tu))) return void (Lu = n);
            } else {
              if (null !== (n = Ko(n, t)))
                return (n.flags &= 32767), void (Lu = n);
              if (null === e) return (Ru = 6), void (Lu = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Lu = t);
            Lu = t = e;
          } while (null !== t);
          0 === Ru && (Ru = 5);
        }
        function ks(e, t, n) {
          var r = bt,
            a = zu.transition;
          try {
            (zu.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Ss();
                } while (null !== Ku);
                if (0 !== (6 & Pu)) throw Error(l(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(l(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        l = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                    }
                  })(e, i),
                  e === ju && ((Lu = ju = null), (Ou = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    qu ||
                    ((qu = !0),
                    js(tt, function () {
                      return Ss(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = zu.transition), (zu.transition = null);
                  var o = bt;
                  bt = 1;
                  var u = Pu;
                  (Pu |= 4),
                    (Nu.current = null),
                    (function (e, t) {
                      if (((ea = $t), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (x) {
                                n = null;
                                break e;
                              }
                              var o = 0,
                                u = -1,
                                s = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var m;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (u = o + a),
                                    d !== i ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (s = o + r),
                                    3 === d.nodeType &&
                                      (o += d.nodeValue.length),
                                    null !== (m = d.firstChild);

                                )
                                  (p = d), (d = m);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (u = o),
                                    p === i && ++f === r && (s = o),
                                    null !== (m = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = m;
                              }
                              n =
                                -1 === u || -1 === s
                                  ? null
                                  : { start: u, end: s };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          $t = !1,
                          Jo = t;
                        null !== Jo;

                      )
                        if (
                          ((e = (t = Jo).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Jo = e);
                        else
                          for (; null !== Jo; ) {
                            t = Jo;
                            try {
                              var h = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== h) {
                                      var g = h.memoizedProps,
                                        v = h.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : gl(t.type, g),
                                          v
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (x) {
                              Cs(t, t.return, x);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Jo = e);
                              break;
                            }
                            Jo = t.return;
                          }
                      (h = nu), (nu = !1);
                    })(e, n),
                    vu(n, e),
                    mr(ta),
                    ($t = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bu(n, e, a),
                    Xe(),
                    (Pu = u),
                    (bt = o),
                    (zu.transition = i);
                } else e.current = n;
                if (
                  (qu && ((qu = !1), (Ku = e), (Xu = a)),
                  (i = e.pendingLanes),
                  0 === i && (Gu = null),
                  (function (e) {
                    if (lt && "function" === typeof lt.onCommitFiberRoot)
                      try {
                        lt.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  as(e, Ye()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Wu) throw ((Wu = !1), (e = Qu), (Qu = null), e);
                0 !== (1 & Xu) && 0 !== e.tag && Ss(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Zu
                      ? Yu++
                      : ((Yu = 0), (Zu = e))
                    : (Yu = 0),
                  Ha();
              })(e, t, n, r);
          } finally {
            (zu.transition = a), (bt = r);
          }
          return null;
        }
        function Ss() {
          if (null !== Ku) {
            var e = wt(Xu),
              t = zu.transition,
              n = bt;
            try {
              if (((zu.transition = null), (bt = 16 > e ? 16 : e), null === Ku))
                var r = !1;
              else {
                if (((e = Ku), (Ku = null), (Xu = 0), 0 !== (6 & Pu)))
                  throw Error(l(331));
                var a = Pu;
                for (Pu |= 4, Jo = e.current; null !== Jo; ) {
                  var i = Jo,
                    o = i.child;
                  if (0 !== (16 & Jo.flags)) {
                    var u = i.deletions;
                    if (null !== u) {
                      for (var s = 0; s < u.length; s++) {
                        var c = u[s];
                        for (Jo = c; null !== Jo; ) {
                          var f = Jo;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ru(8, f, i);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Jo = d);
                          else
                            for (; null !== Jo; ) {
                              var p = (f = Jo).sibling,
                                m = f.return;
                              if ((iu(f), f === c)) {
                                Jo = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = m), (Jo = p);
                                break;
                              }
                              Jo = m;
                            }
                        }
                      }
                      var h = i.alternate;
                      if (null !== h) {
                        var g = h.child;
                        if (null !== g) {
                          h.child = null;
                          do {
                            var v = g.sibling;
                            (g.sibling = null), (g = v);
                          } while (null !== g);
                        }
                      }
                      Jo = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== o)
                    (o.return = i), (Jo = o);
                  else
                    e: for (; null !== Jo; ) {
                      if (0 !== (2048 & (i = Jo).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ru(9, i, i.return);
                        }
                      var y = i.sibling;
                      if (null !== y) {
                        (y.return = i.return), (Jo = y);
                        break e;
                      }
                      Jo = i.return;
                    }
                }
                var b = e.current;
                for (Jo = b; null !== Jo; ) {
                  var w = (o = Jo).child;
                  if (0 !== (2064 & o.subtreeFlags) && null !== w)
                    (w.return = o), (Jo = w);
                  else
                    e: for (o = b; null !== Jo; ) {
                      if (0 !== (2048 & (u = Jo).flags))
                        try {
                          switch (u.tag) {
                            case 0:
                            case 11:
                            case 15:
                              au(9, u);
                          }
                        } catch (k) {
                          Cs(u, u.return, k);
                        }
                      if (u === o) {
                        Jo = null;
                        break e;
                      }
                      var x = u.sibling;
                      if (null !== x) {
                        (x.return = u.return), (Jo = x);
                        break e;
                      }
                      Jo = u.return;
                    }
                }
                if (
                  ((Pu = a),
                  Ha(),
                  lt && "function" === typeof lt.onPostCommitFiberRoot)
                )
                  try {
                    lt.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (zu.transition = t);
            }
          }
          return !1;
        }
        function Es(e, t, n) {
          (e = Ml(e, (t = mo(0, (t = so(n, t)), 1)), 1)),
            (t = ts()),
            null !== e && (vt(e, 1, t), as(e, t));
        }
        function Cs(e, t, n) {
          if (3 === e.tag) Es(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Es(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Gu || !Gu.has(r)))
                ) {
                  (t = Ml(t, (e = ho(t, (e = so(n, e)), 1)), 1)),
                    (e = ts()),
                    null !== t && (vt(t, 1, e), as(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function _s(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ts()),
            (e.pingedLanes |= e.suspendedLanes & n),
            ju === e &&
              (Ou & n) === n &&
              (4 === Ru ||
              (3 === Ru && (130023424 & Ou) === Ou && 500 > Ye() - Hu)
                ? ps(e, 0)
                : (Au |= n)),
            as(e, t);
        }
        function Ns(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = ts();
          null !== (e = Pl(e, t)) && (vt(e, t, n), as(e, n));
        }
        function zs(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Ns(e, n);
        }
        function Ps(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(l(314));
          }
          null !== r && r.delete(t), Ns(e, n);
        }
        function js(e, t) {
          return Ge(e, t);
        }
        function Ls(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Os(e, t, n, r) {
          return new Ls(e, t, n, r);
        }
        function Ts(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ms(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Os(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Rs(e, t, n, r, a, i) {
          var o = 2;
          if (((r = e), "function" === typeof e)) Ts(e) && (o = 1);
          else if ("string" === typeof e) o = 5;
          else
            e: switch (e) {
              case S:
                return Ds(n.children, a, i, t);
              case E:
                (o = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Os(12, n, t, 2 | a)).elementType = C), (e.lanes = i), e
                );
              case P:
                return (
                  ((e = Os(13, n, t, a)).elementType = P), (e.lanes = i), e
                );
              case j:
                return (
                  ((e = Os(19, n, t, a)).elementType = j), (e.lanes = i), e
                );
              case T:
                return Fs(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case _:
                      o = 10;
                      break e;
                    case N:
                      o = 9;
                      break e;
                    case z:
                      o = 11;
                      break e;
                    case L:
                      o = 14;
                      break e;
                    case O:
                      (o = 16), (r = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Os(o, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function Ds(e, t, n, r) {
          return ((e = Os(7, e, r, t)).lanes = n), e;
        }
        function Fs(e, t, n, r) {
          return (
            ((e = Os(22, e, r, t)).elementType = T),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Is(e, t, n) {
          return ((e = Os(6, e, null, t)).lanes = n), e;
        }
        function As(e, t, n) {
          return (
            ((t = Os(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Us(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Bs(e, t, n, r, a, l, i, o, u) {
          return (
            (e = new Us(e, t, n, o, u)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = Os(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Ll(l),
            e
          );
        }
        function Hs(e) {
          if (!e) return Na;
          e: {
            if (He((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Oa(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(l(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Oa(n)) return Ra(e, n, t);
          }
          return t;
        }
        function Vs(e, t, n, r, a, l, i, o, u) {
          return (
            ((e = Bs(n, r, !0, e, 0, l, 0, o, u)).context = Hs(null)),
            (n = e.current),
            ((l = Tl((r = ts()), (a = ns(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Ml(n, l, a),
            (e.current.lanes = a),
            vt(e, a, r),
            as(e, r),
            e
          );
        }
        function $s(e, t, n, r) {
          var a = t.current,
            l = ts(),
            i = ns(a);
          return (
            (n = Hs(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Tl(l, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Ml(a, t, i)) && (rs(e, a, i, l), Rl(e, a, i)),
            i
          );
        }
        function Ws(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qs(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Gs(e, t) {
          Qs(e, t), (e = e.alternate) && Qs(e, t);
        }
        Eu = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Pa.current) wo = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wo = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        jo(t), pl();
                        break;
                      case 5:
                        li(t);
                        break;
                      case 1:
                        Oa(t.type) && Da(t);
                        break;
                      case 4:
                        ri(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        _a(vl, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (_a(oi, 1 & oi.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Io(e, t, n)
                            : (_a(oi, 1 & oi.current),
                              null !== (e = Wo(e, t, n)) ? e.sibling : null);
                        _a(oi, 1 & oi.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Vo(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          _a(oi, oi.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Co(e, t, n);
                    }
                    return Wo(e, t, n);
                  })(e, t, n)
                );
              wo = 0 !== (131072 & e.flags);
            }
          else (wo = !1), al && 0 !== (1048576 & t.flags) && Ja(t, Qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              $o(e, t), (e = t.pendingProps);
              var a = La(t, za.current);
              El(t, n), (a = Si(null, t, r, e, a, n));
              var i = Ei();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Oa(r) ? ((i = !0), Da(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Ll(t),
                    (a.updater = Bl),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    Wl(t, r, e, n),
                    (t = Po(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    al && i && el(t),
                    xo(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  ($o(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Ts(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === z) return 11;
                        if (e === L) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = gl(r, e)),
                  a)
                ) {
                  case 0:
                    t = No(null, t, r, e, n);
                    break e;
                  case 1:
                    t = zo(null, t, r, e, n);
                    break e;
                  case 11:
                    t = ko(null, t, r, e, n);
                    break e;
                  case 14:
                    t = So(null, t, r, gl(r.type, e), n);
                    break e;
                }
                throw Error(l(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                No(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                zo(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 3:
              e: {
                if ((jo(t), null === e)) throw Error(l(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  Ol(e, t),
                  Fl(t, r, null, n);
                var o = t.memoizedState;
                if (((r = o.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: o.cache,
                      pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                      transitions: o.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Lo(e, t, r, n, (a = so(Error(l(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Lo(e, t, r, n, (a = so(Error(l(424)), t)));
                    break e;
                  }
                  for (
                    rl = sa(t.stateNode.containerInfo.firstChild),
                      nl = t,
                      al = !0,
                      ll = null,
                      n = Yl(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pl(), r === a)) {
                    t = Wo(e, t, n);
                    break e;
                  }
                  xo(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                li(t),
                null === e && sl(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (o = a.children),
                na(r, a)
                  ? (o = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                _o(e, t),
                xo(e, t, o, n),
                t.child
              );
            case 6:
              return null === e && sl(t), null;
            case 13:
              return Io(e, t, n);
            case 4:
              return (
                ri(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xl(t, null, r, n)) : xo(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                ko(e, t, r, (a = t.elementType === r ? a : gl(r, a)), n)
              );
            case 7:
              return xo(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xo(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (o = a.value),
                  _a(vl, r._currentValue),
                  (r._currentValue = o),
                  null !== i)
                )
                  if (or(i.value, o)) {
                    if (i.children === a.children && !Pa.current) {
                      t = Wo(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var u = i.dependencies;
                      if (null !== u) {
                        o = i.child;
                        for (var s = u.firstContext; null !== s; ) {
                          if (s.context === r) {
                            if (1 === i.tag) {
                              (s = Tl(-1, n & -n)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (s.next = s)
                                  : ((s.next = f.next), (f.next = s)),
                                  (c.pending = s);
                              }
                            }
                            (i.lanes |= n),
                              null !== (s = i.alternate) && (s.lanes |= n),
                              Sl(i.return, n, t),
                              (u.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else if (10 === i.tag)
                        o = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (o = i.return)) throw Error(l(341));
                        (o.lanes |= n),
                          null !== (u = o.alternate) && (u.lanes |= n),
                          Sl(o, n, t),
                          (o = i.sibling);
                      } else o = i.child;
                      if (null !== o) o.return = i;
                      else
                        for (o = i; null !== o; ) {
                          if (o === t) {
                            o = null;
                            break;
                          }
                          if (null !== (i = o.sibling)) {
                            (i.return = o.return), (o = i);
                            break;
                          }
                          o = o.return;
                        }
                      i = o;
                    }
                xo(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                El(t, n),
                (r = r((a = Cl(a)))),
                (t.flags |= 1),
                xo(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = gl((r = t.type), t.pendingProps)),
                So(e, t, r, (a = gl(r.type, a)), n)
              );
            case 15:
              return Eo(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : gl(r, a)),
                $o(e, t),
                (t.tag = 1),
                Oa(r) ? ((e = !0), Da(t)) : (e = !1),
                El(t, n),
                Vl(t, r, a),
                Wl(t, r, a, n),
                Po(null, t, r, !0, e, n)
              );
            case 19:
              return Vo(e, t, n);
            case 22:
              return Co(e, t, n);
          }
          throw Error(l(156, t.tag));
        };
        var qs =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Ks(e) {
          this._internalRoot = e;
        }
        function Xs(e) {
          this._internalRoot = e;
        }
        function Ys(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zs(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Js() {}
        function ec(e, t, n, r, a) {
          var l = n._reactRootContainer;
          if (l) {
            var i = l;
            if ("function" === typeof a) {
              var o = a;
              a = function () {
                var e = Ws(i);
                o.call(e);
              };
            }
            $s(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var l = r;
                  r = function () {
                    var e = Ws(i);
                    l.call(e);
                  };
                }
                var i = Vs(t, r, e, 0, null, !1, 0, "", Js);
                return (
                  (e._reactRootContainer = i),
                  (e[ma] = i.current),
                  Hr(8 === e.nodeType ? e.parentNode : e),
                  fs(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var o = r;
                r = function () {
                  var e = Ws(u);
                  o.call(e);
                };
              }
              var u = Bs(e, 0, !1, null, 0, !1, 0, "", Js);
              return (
                (e._reactRootContainer = u),
                (e[ma] = u.current),
                Hr(8 === e.nodeType ? e.parentNode : e),
                fs(function () {
                  $s(t, u, n, r);
                }),
                u
              );
            })(n, t, e, a, r);
          return Ws(i);
        }
        (Xs.prototype.render = Ks.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            $s(e, t, null, null);
          }),
          (Xs.prototype.unmount = Ks.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                fs(function () {
                  $s(null, e, null, null);
                }),
                  (t[ma] = null);
              }
            }),
          (Xs.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Tt.length && 0 !== t && t < Tt[n].priority;
                n++
              );
              Tt.splice(n, 0, e), 0 === n && Ft(e);
            }
          }),
          (xt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    as(t, Ye()),
                    0 === (6 & Pu) && ((Vu = Ye() + 500), Ha()));
                }
                break;
              case 13:
                fs(function () {
                  var t = Pl(e, 1);
                  if (null !== t) {
                    var n = ts();
                    rs(t, e, 1, n);
                  }
                }),
                  Gs(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Pl(e, 134217728);
              if (null !== t) rs(t, e, 134217728, ts());
              Gs(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = ns(e),
                n = Pl(e, t);
              if (null !== n) rs(n, e, t, ts());
              Gs(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = xa(r);
                      if (!a) throw Error(l(90));
                      G(r), Z(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                le(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (ze = cs),
          (Pe = fs);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, xa, _e, Ne, cs],
          },
          nc = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = We(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (lt = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Ys(t)) throw Error(l(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Ys(e)) throw Error(l(299));
            var n = !1,
              r = "",
              a = qs;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Bs(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ma] = t.current),
              Hr(8 === e.nodeType ? e.parentNode : e),
              new Ks(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(l(188));
              throw ((e = Object.keys(e).join(",")), Error(l(268, e)));
            }
            return (e = null === (e = We(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return fs(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zs(t)) throw Error(l(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Ys(e)) throw Error(l(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              o = qs;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (o = n.onRecoverableError)),
              (t = Vs(t, null, e, 1, null != n ? n : null, a, 0, i, o)),
              (e[ma] = t.current),
              Hr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Xs(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zs(t)) throw Error(l(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zs(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (fs(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ma] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cs),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zs(n)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        var r = n(791),
          a = Symbol.for("react.element"),
          l = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          o =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            l = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, r) && !u.hasOwnProperty(r) && (l[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: s,
            ref: c,
            props: l,
            _owner: o.current,
          };
        }
        (t.Fragment = l), (t.jsx = s), (t.jsxs = s);
      },
      117: function (e, t) {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          o = Symbol.for("react.provider"),
          u = Symbol.for("react.context"),
          s = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          g = {};
        function v(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || m);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = v.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), h(w, v.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            l = {},
            i = null,
            o = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (o = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              k.call(t, a) && !E.hasOwnProperty(a) && (l[a] = t[a]);
          var u = arguments.length - 2;
          if (1 === u) l.children = r;
          else if (1 < u) {
            for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
            l.children = s;
          }
          if (e && e.defaultProps)
            for (a in (u = e.defaultProps)) void 0 === l[a] && (l[a] = u[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: o,
            props: l,
            _owner: S.current,
          };
        }
        function _(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var N = /\/+/g;
        function z(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function P(e, t, a, l, i) {
          var o = typeof e;
          ("undefined" !== o && "boolean" !== o) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (o) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    u = !0;
                }
            }
          if (u)
            return (
              (i = i((u = e))),
              (e = "" === l ? "." + z(u, 0) : l),
              x(i)
                ? ((a = ""),
                  null != e && (a = e.replace(N, "$&/") + "/"),
                  P(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (_(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (u && u.key === i.key)
                          ? ""
                          : ("" + i.key).replace(N, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((u = 0), (l = "" === l ? "." : l + ":"), x(e)))
            for (var s = 0; s < e.length; s++) {
              var c = l + z((o = e[s]), s);
              u += P(o, t, a, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), s = 0; !(o = e.next()).done; )
              u += P((o = o.value), t, a, (c = l + z(o, s++)), i);
          else if ("object" === o)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return u;
        }
        function j(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            P(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function L(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var O = { current: null },
          T = { transition: null },
          M = {
            ReactCurrentDispatcher: O,
            ReactCurrentBatchConfig: T,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: j,
          forEach: function (e, t, n) {
            j(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              j(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              j(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!_(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = l),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = h({}, e.props),
              l = e.key,
              i = e.ref,
              o = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (o = S.current)),
                void 0 !== t.key && (l = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var u = e.type.defaultProps;
              for (s in t)
                k.call(t, s) &&
                  !E.hasOwnProperty(s) &&
                  (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) a.children = r;
            else if (1 < s) {
              u = Array(s);
              for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
              a.children = u;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: l,
              ref: i,
              props: a,
              _owner: o,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: u,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: o, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: s, render: e };
          }),
          (t.isValidElement = _),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: L,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = T.transition;
            T.transition = {};
            try {
              e();
            } finally {
              T.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return O.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return O.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return O.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return O.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return O.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return O.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return O.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return O.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return O.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return O.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return O.current.useRef(e);
          }),
          (t.useState = function (e) {
            return O.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return O.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return O.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        e.exports = n(117);
      },
      184: function (e, t, n) {
        e.exports = n(374);
      },
      813: function (e, t) {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var o = 2 * (r + 1) - 1,
                u = e[o],
                s = o + 1,
                c = e[s];
              if (0 > l(u, n))
                s < a && 0 > l(c, u)
                  ? ((e[r] = c), (e[s] = n), (r = s))
                  : ((e[r] = u), (e[o] = n), (r = o));
              else {
                if (!(s < a && 0 > l(c, n))) break e;
                (e[r] = c), (e[s] = n), (r = s);
              }
            }
          }
          return t;
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var o = Date,
            u = o.now();
          t.unstable_now = function () {
            return o.now() - u;
          };
        }
        var s = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          m = !1,
          h = !1,
          g = !1,
          v = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(s, t);
            }
            t = r(c);
          }
        }
        function x(e) {
          if (((g = !1), w(e), !h))
            if (null !== r(s)) (h = !0), T(k);
            else {
              var t = r(c);
              null !== t && M(x, t.startTime - e);
            }
        }
        function k(e, n) {
          (h = !1), g && ((g = !1), y(_), (_ = -1)), (m = !0);
          var l = p;
          try {
            for (
              w(n), d = r(s);
              null !== d && (!(d.expirationTime > n) || (e && !P()));

            ) {
              var i = d.callback;
              if ("function" === typeof i) {
                (d.callback = null), (p = d.priorityLevel);
                var o = i(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof o
                    ? (d.callback = o)
                    : d === r(s) && a(s),
                  w(n);
              } else a(s);
              d = r(s);
            }
            if (null !== d) var u = !0;
            else {
              var f = r(c);
              null !== f && M(x, f.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (d = null), (p = l), (m = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          E = !1,
          C = null,
          _ = -1,
          N = 5,
          z = -1;
        function P() {
          return !(t.unstable_now() - z < N);
        }
        function j() {
          if (null !== C) {
            var e = t.unstable_now();
            z = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? S() : ((E = !1), (C = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(j);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var L = new MessageChannel(),
            O = L.port2;
          (L.port1.onmessage = j),
            (S = function () {
              O.postMessage(null);
            });
        } else
          S = function () {
            v(j, 0);
          };
        function T(e) {
          (C = e), E || ((E = !0), S());
        }
        function M(e, n) {
          _ = v(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            h || m || ((h = !0), T(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (N = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(s);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof l && null !== l
                ? (l = "number" === typeof (l = l.delay) && 0 < l ? i + l : i)
                : (l = i),
              e)
            ) {
              case 1:
                var o = -1;
                break;
              case 2:
                o = 250;
                break;
              case 5:
                o = 1073741823;
                break;
              case 4:
                o = 1e4;
                break;
              default:
                o = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (o = l + o),
                sortIndex: -1,
              }),
              l > i
                ? ((e.sortIndex = l),
                  n(c, e),
                  null === r(s) &&
                    e === r(c) &&
                    (g ? (y(_), (_ = -1)) : (g = !0), M(x, l - i)))
                : ((e.sortIndex = o), n(s, e), h || m || ((h = !0), T(k))),
              e
            );
          }),
          (t.unstable_shouldYield = P),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var l = (t[r] = { exports: {} });
    return e[r](l, l.exports, n), l.exports;
  }
  !(function () {
    var e = n(791),
      t = n(250),
      r = n(184);
    var a = function () {
        return (0, r.jsx)("div", {
          children: (0, r.jsxs)("div", {
            className: "w-full bg-white py-16 px-4 ",
            children: [
              (0, r.jsx)("h3", {
                className: "text-black font-bold text-2xl text-center",
                children: "Buy Now",
              }),
              (0, r.jsxs)("div", {
                className:
                  "w-full max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0",
                children: [
                  (0, r.jsx)("img", {
                    className: "w-full md:w-[550px] mx-auto my-4",
                    src: "https://cyberpost.co/wp-content/uploads/2022/07/photo_2022-07-26_07-45-54.jpg",
                    alt: "Gaming Image",
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex flex-col justify-center",
                    children: [
                      (0, r.jsx)("p", {
                        className:
                          "text-[#00fd9a] font-bold text-center md:text-left",
                        children: "Feel the Pulse of Gaming",
                      }),
                      (0, r.jsx)("h1", {
                        className:
                          "md:text-4xl sm:text-3xl text-2xl font-bold text-center md:text-left py-4",
                        children: "Endless Thrills Await",
                      }),
                      (0, r.jsx)("p", {
                        className: "text-center md:text-left",
                        children:
                          "Celebrate the artistry of games and the camaraderie of gamers as we embark on a journey through virtual worlds. Join our community of passionate players and explore the immersive realms of gaming, where every challenge is an opportunity, and every victory is a triumph. Whether you're a seasoned pro or just starting your adventure, there's always a place for you here. Welcome to a world where fun knows no bounds!",
                      }),
                      (0, r.jsx)("button", {
                        className:
                          "bg-black text-[#00fd9a] w-full md:w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ",
                        children: "Get Started",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      },
      l = [
        {
          id: 1,
          title: "Red Dead Redemption 2",
          price: "$55",
          img: "https://preview.redd.it/hrlnadg3obx71.jpg?width=640&crop=smart&auto=webp&s=75154acdcd811d3e2c17d43d1145caa615ecf070",
        },
        {
          id: 2,
          title: "Halo",
          price: "$18",
          img: "https://i.ytimg.com/vi/j5ZJx5r7LB0/maxresdefault.jpg",
        },
        {
          id: 3,
          title: "Horizon Zero Down",
          price: "$19",
          img: "https://images.pushsquare.com/guides/all-ps4-pro-games-with-4k-resolution/1280x720.jpg",
        },
        {
          id: 4,
          title: "cyberpunk 2077",
          price: "$25",
          img: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/featured-games/geforce-featured-cyberpunk2077-465-l@2x.jpg",
        },
        {
          id: 5,
          title: "Fortnite",
          price: "Free",
          img: "https://miro.medium.com/v2/resize:fit:2000/1*OSVptnNeegbjhnSWo2V_qw.jpeg",
        },
        {
          id: 6,
          title: "Max Payne 3",
          price: "$20",
          img: "https://staticg.sportskeeda.com/editor/2018/11/978fb-15435769980440-800.jpg",
        },
        {
          id: 7,
          title: "Spider-Man: Miles Morales",
          price: "$15",
          img: "https://www.91-cdn.com/hub/wp-content/uploads/2023/01/agfp.jpg",
        },
        {
          id: 8,
          title: "The witcher 3: Wild Hunt",
          price: "$23",
          img: "https://images.laprovence.com/media/2015/07/13/118663.jpg?twic=v1/focus=0x0/cover=2510x1412",
        },
        {
          id: 9,
          title: "Valorant",
          price: "Free",
          img: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc655d62fc92e4acd/649bdd9094be10f2698941ed/071123_Val_EP7_China_CG_Banner.jpg?auto=webp&disable=upscale&height=549",
        },
        {
          id: 10,
          title: "Assassin Creed",
          price: "$13",
          img: "https://wallpapercave.com/wp/wp7043539.png",
        },
        {
          id: 11,
          title: "Gta-V",
          price: "$19",
          img: "https://cdn.akamai.steamstatic.com/steam/apps/271590/capsule_616x353.jpg?t=1678296348",
        },
      ],
      i = [
        {
          id: 5,
          name: "Gta V",
          category: "Open-World Games ",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJj0ED8CO4zoI6nGEf90JACB-TZkO025OfOjXLoZgnsvITfnxzHv-cjoi4TfQffu8rRJg&usqp=CAU",
          price: "$22.30",
        },
        {
          id: 6,
          name: "Far cry 6",
          category: "Open-World Games ",
          image: "https://images3.alphacoders.com/108/thumb-1920-1087064.jpg",
          price: "$24.40",
        },
        {
          id: 17,
          name: "Rdr 2",
          category: "Open-World Games ",
          image:
            "https://www.gamespot.com/a/uploads/scale_landscape/1575/15759911/3455089-reddeadredemption2-review-thumb-nologo.jpg",
          price: "$30.08",
        },
        {
          id: 7,
          name: "Days Gone",
          category: "Open-World Games ",
          image: "https://wallpapercave.com/wp/wp7431370.jpg",
          price: "$14.99",
        },
        {
          id: 8,
          name: "Tomb raider",
          category: "Action-adventure Games",
          image:
            "https://wallpapercrafter.com/desktop/50193-tomb-raider-games-xbox-games-ps-games-pc-games-hd-4k-5k-8k-10k.jpg",
          price: "$14.40",
        },
        {
          id: 9,
          name: "Witcher 3",
          category: "Action-adventure Games",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfJb4n5tkdc-iFsAMVf4SSxC6ra3AFbX6IBrTpP6S8HtUofB4Ztgtu76Ky1Ddu9NyO0Tc&usqp=CAU",
          price: "$10.02",
        },
        {
          id: 10,
          name: "God of war",
          category: "Action-adventure Games",
          image:
            "https://img2.wallspic.com/previews/4/3/7/1/5/151734/151734-illustration-games-pc_game-god_of_war-action_adventure_game-x750.jpg",
          price: "$13.10",
        },
        {
          id: 11,
          name: "Evil West",
          category: "Action-adventure Games",
          image: "https://images2.alphacoders.com/124/1245970.jpg",
          price: "$12.05",
        },
        {
          id: 12,
          name: "Forza Horizon 5",
          category: "Racing Games",
          image:
            "https://c4.wallpaperflare.com/wallpaper/770/1018/460/windows-racing-e3-2016-extreme-wallpaper-preview.jpg",
          price: "$23.20",
        },
        {
          id: 13,
          name: "Dirt 4",
          category: "Racing Games",
          image:
            "https://c4.wallpaperflare.com/wallpaper/678/903/786/5bf50a166ee09-wallpaper-preview.jpg",
          price: "$15.10",
        },
        {
          id: 14,
          name: "Asphalt 9",
          category: "Racing Games",
          image: "https://images6.alphacoders.com/100/thumb-1920-1007853.jpg",
          price: "$00.00",
        },
        {
          id: 15,
          name: "Need for speed",
          category: "Racing Games",
          image: "https://images6.alphacoders.com/601/601245.png",
          price: "$10.00",
        },
      ],
      o = [
        {
          id: 1,
          name: "ubisoft",
          image:
            "https://pixelbag.net/wp-content/uploads/2022/03/ubisoft-vector-logo.jpg",
        },
        {
          id: 2,
          name: "nintendo",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Nintendo_red_logo.svg/2560px-Nintendo_red_logo.svg.png",
        },
        {
          id: 3,
          name: "Rockstart",
          image:
            "https://i.cnnturk.com/i/cnnturk/75/740x416/5e3bcfe917aca916dc10437a.jpeg",
        },
        {
          id: 4,
          name: "Gameloft",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/6/6c/Gameloft_Oversimplifed_logo.png",
        },
        {
          id: 5,
          name: "Valve",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Valve_logo.svg/1200px-Valve_logo.svg.png",
        },
        {
          id: 6,
          name: "Nexon",
          image: "https://dypdvfcjkqkg2.cloudfront.net/large/557483-6203.jpg",
        },
        {
          id: 7,
          name: "Activision",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Activision.svg/1280px-Activision.svg.png",
        },
        {
          id: 8,
          name: "ZeniMax",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/a/ad/ZeniMax_Media_Inc_logo.png",
        },
        {
          id: 9,
          name: "Bungie",
          image:
            "https://i.pinimg.com/originals/a1/d3/ba/a1d3ba71fce704de3c3a4fab381890c4.png",
        },
        {
          id: 10,
          name: "Sega",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcPAtDjvaUZ8cp4u4dqCfkD7hRAhPONPMtw&usqp=CAU",
        },
        {
          id: 11,
          name: "Microsoft",
          image:
            "https://images.t3n.de/news/wp-content/uploads/2012/08/microsoft-logo-2012-gross.jpg?class=content-small",
        },
        {
          id: 12,
          name: "Blizzard",
          image:
            "https://vectorseek.com/wp-content/uploads/2022/01/Blizzard-Entertainment-Logo-Vector.jpg",
        },
      ],
      u = function () {
        return (
          console.log(o),
          (0, r.jsxs)("div", {
            className: "max-w-[1520px] m-auto px-4 py-12",
            children: [
              (0, r.jsx)("h1", {
                className: "text-black font-bold text-2xl text-center py-2",
                children: "Our Sponsers",
              }),
              (0, r.jsx)("div", {
                className: "grid gird-cols-2 md:grid-cols-6 gap-5 py-5 px-5",
                children: o.map(function (e) {
                  return (0,
                  r.jsx)("div", { className: "p-4 flex justify-center items-center hover:scale-105 duration-300", children: (0, r.jsx)("img", { className: "object-cover rounded-xl w-40 h-10 cursor-pointer shadow-xl", src: e.image, alt: e.name }) }, e.id);
                }),
              }),
            ],
          })
        );
      },
      s = function () {
        return (0, r.jsx)("div", {
          className: "max-w-[1520px] m-auto text-white px-4 bg-[#24262b] ",
          children: (0, r.jsxs)("div", {
            className: "mx-auto grid lg:grid-cols-3",
            children: [
              (0, r.jsxs)("div", {
                className: "lg:col-span-2 my-4",
                children: [
                  (0, r.jsx)("h1", { children: "Contact us for any query" }),
                  (0, r.jsx)("p", {
                    children:
                      "Sign Up today to stay updated with new game launches",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "my-4",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "flex flex-col sm:flex-row items-center justify-between w-full",
                    children: [
                      (0, r.jsx)("input", {
                        type: "email",
                        placeholder: "email",
                        className: "p-3 flex w-full rounded-md text-black",
                      }),
                      (0, r.jsx)("button", {
                        className:
                          "bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 border-none py-3",
                        children: "Notify me",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("p", {
                    children: [
                      "We are concerened about the security of your data ,Read",
                      " ",
                      (0, r.jsx)("span", {
                        className: "text-[#00df9a] underline",
                        children: "Privacy policy",
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)("hr", { className: "my-8 bg-gray-700 border-1" }),
            ],
          }),
        });
      };
    function c(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function f(e, t) {
      if (e) {
        if ("string" === typeof e) return c(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? c(e, t)
            : void 0
        );
      }
    }
    function d(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != n) {
            var r,
              a,
              l,
              i,
              o = [],
              u = !0,
              s = !1;
            try {
              if (((l = (n = n.call(e)).next), 0 === t)) {
                if (Object(n) !== n) return;
                u = !1;
              } else
                for (
                  ;
                  !(u = (r = l.call(n)).done) &&
                  (o.push(r.value), o.length !== t);
                  u = !0
                );
            } catch (e) {
              (s = !0), (a = e);
            } finally {
              try {
                if (
                  !u &&
                  null != n.return &&
                  ((i = n.return()), Object(i) !== i)
                )
                  return;
              } finally {
                if (s) throw a;
              }
            }
            return o;
          }
        })(e, t) ||
        f(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    var p = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0,
      },
      m = e.createContext && e.createContext(p),
      h = function () {
        return (
          (h =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var a in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
              return e;
            }),
          h.apply(this, arguments)
        );
      },
      g = function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            t.indexOf(r[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        }
        return n;
      };
    function v(t) {
      return (
        t &&
        t.map(function (t, n) {
          return e.createElement(t.tag, h({ key: n }, t.attr), v(t.child));
        })
      );
    }
    function y(t) {
      return function (n) {
        return e.createElement(b, h({ attr: h({}, t.attr) }, n), v(t.child));
      };
    }
    function b(t) {
      var n = function (n) {
        var r,
          a = t.attr,
          l = t.size,
          i = t.title,
          o = g(t, ["attr", "size", "title"]),
          u = l || n.size || "1em";
        return (
          n.className && (r = n.className),
          t.className && (r = (r ? r + " " : "") + t.className),
          e.createElement(
            "svg",
            h(
              {
                stroke: "currentColor",
                fill: "currentColor",
                strokeWidth: "0",
              },
              n.attr,
              a,
              o,
              {
                className: r,
                style: h(h({ color: t.color || n.color }, n.style), t.style),
                height: u,
                width: u,
                xmlns: "http://www.w3.org/2000/svg",
              }
            ),
            i && e.createElement("title", null, i),
            t.children
          )
        );
      };
      return void 0 !== m
        ? e.createElement(m.Consumer, null, function (e) {
            return n(e);
          })
        : n(p);
    }
    function w(e) {
      return y({
        tag: "svg",
        attr: { fill: "currentColor", viewBox: "0 0 16 16" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z",
            },
          },
        ],
      })(e);
    }
    function x(e) {
      return y({
        tag: "svg",
        attr: { fill: "currentColor", viewBox: "0 0 16 16" },
        child: [
          {
            tag: "path",
            attr: {
              fillRule: "evenodd",
              d: "M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z",
            },
          },
        ],
      })(e);
    }
    function k(e) {
      return y({
        tag: "svg",
        attr: { fill: "currentColor", viewBox: "0 0 16 16" },
        child: [
          {
            tag: "path",
            attr: {
              fillRule: "evenodd",
              d: "M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z",
            },
          },
        ],
      })(e);
    }
    function S(e) {
      return y({
        tag: "svg",
        attr: { fill: "currentColor", viewBox: "0 0 16 16" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z",
            },
          },
        ],
      })(e);
    }
    function E(e) {
      return y({
        tag: "svg",
        attr: { viewBox: "0 0 15 15", fill: "none" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z",
              fill: "currentColor",
            },
          },
        ],
      })(e);
    }
    var C = function () {
      var t = [
          {
            url: "https://wallpapers.com/images/hd/destiny-the-taken-king-4k-gaming-y31a8hm3p7kpqjzt.jpg",
          },
          {
            url: "https://www.pixel4k.com/wp-content/uploads/2018/10/uncharted-4k-game_1538941181.jpg",
          },
          { url: "https://hdfon.ru/wp-content/uploads/hdfon.ru-607210542.jpg" },
        ],
        n = d((0, e.useState)(0), 2),
        a = n[0],
        l = n[1];
      return (
        (0, e.useEffect)(
          function () {
            var e = setInterval(function () {
              var e = a === t.length - 1 ? 0 : a + 1;
              l(e);
            }, 5e3);
            return function () {
              return clearInterval(e);
            };
          },
          [a, t.length]
        ),
        (0, r.jsxs)("div", {
          className:
            " max-w-[1520px] h-[600px] w-full py-4 px-4 relative group",
          children: [
            (0, r.jsx)("div", {
              className:
                "w-full h-full rounded-2xl bg-center bg-cover duration-500",
              style: { backgroundImage: "url(".concat(t[a].url, ")") },
            }),
            (0, r.jsx)("div", {
              className:
                "hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%]  left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer",
              children: (0, r.jsx)(x, {
                onClick: function () {
                  var e = 0 === a ? t.length - 1 : a - 1;
                  l(e);
                },
              }),
            }),
            (0, r.jsx)("div", {
              className:
                "hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%]  right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer",
              children: (0, r.jsx)(k, {
                onClick: function () {
                  var e = a === t.length - 1 ? 0 : a + 1;
                  l(e);
                },
              }),
            }),
            (0, r.jsx)("div", {
              className: "flex top-4 justify-center py-2 ",
              children: t.map(function (e, t) {
                return (0, r.jsx)(
                  "div",
                  {
                    onClick: function () {
                      return (function (e) {
                        l(e);
                      })(t);
                    },
                    className: "text-2xl cursor-pointer",
                    children: (0, r.jsx)(E, {}),
                  },
                  t
                );
              }),
            }),
          ],
        })
      );
    };
    var _ = e.forwardRef(function (t, n) {
        return e.createElement(
          "svg",
          Object.assign(
            {
              xmlns: "http://www.w3.org/2000/svg",
              fill: "none",
              viewBox: "0 0 24 24",
              strokeWidth: 2,
              stroke: "currentColor",
              "aria-hidden": "true",
              ref: n,
            },
            t
          ),
          e.createElement("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M13 7l5 5m0 0l-5 5m5-5H6",
          })
        );
      }),
      N = function () {
        var t = d((0, e.useState)(i), 2),
          n = t[0],
          a = t[1],
          l = function (e) {
            a(
              i.filter(function (t) {
                return t.category === e;
              })
            );
          };
        return (0, r.jsxs)("div", {
          className: "text-black font-bold text-2xl text-center py-2",
          children: [
            (0, r.jsx)("h1", { className: "pt-4", children: "Our Games" }),
            (0, r.jsx)("div", {
              className: "flex flex-col lg:flex-row justify-center",
              children: (0, r.jsxs)("div", {
                className: "flex justify-center md:justify-center",
                children: [
                  (0, r.jsx)("button", {
                    onClick: function () {
                      return a(i);
                    },
                    className:
                      "m-1 border-black text-white bg-black hover:bg-white hover:text-black hover:border-black px-2 py-2 text-base md:text-lg",
                    children: "All",
                  }),
                  (0, r.jsx)("button", {
                    onClick: function () {
                      return l("Open-World Games");
                    },
                    className:
                      "m-1 border-black text-white bg-black hover:bg-white hover:text-black hover:border-black px-2 py-2 text-base md:text-lg",
                    children: "Open-World",
                  }),
                  (0, r.jsx)("button", {
                    onClick: function () {
                      return l("Action-adventure Games");
                    },
                    className:
                      "m-1 border-black text-white bg-black hover:bg-white hover:text-black hover:border-black px-2 py-2 text-base md:text-lg",
                    children: "Action-adventure",
                  }),
                  (0, r.jsx)("button", {
                    onClick: function () {
                      return l("Racing Games");
                    },
                    className:
                      "m-1 border-black text-white bg-black hover:bg-white hover:text-black hover:border-black px-2 py-2 text-base md:text-lg",
                    children: "Racing",
                  }),
                ],
              }),
            }),
            (0, r.jsx)("div", {
              className:
                "grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-6",
              children: n.map(function (e) {
                return (0,
                r.jsxs)("div", { className: "border-none hover:scale-105 duration-300 pl-4 pr-4", children: [(0, r.jsx)("img", { src: e.image, alt: e.name, className: "w-full h-[200px] object-cover rounded-lg" }), (0, r.jsxs)("div", { className: "flex justify-between py-2 px-2", children: [(0, r.jsx)("p", { className: "font-bold text-black", children: e.name }), (0, r.jsx)("p", { className: "bg-black h-13 w-18 rounded-full -mt-6 text-white py-2 px-2 border-4", children: e.price })] }), (0, r.jsx)("div", { className: "pl-2 py-4 -mt-7", children: (0, r.jsxs)("p", { className: "flex items-center text-indigo-600 font-normal text-xl", children: ["View More ", (0, r.jsx)(_, { className: "w-5 ml-2" })] }) })] }, e.id);
              }),
            }),
          ],
        });
      };
    function z(e) {
      return y({
        tag: "svg",
        attr: {
          viewBox: "0 0 1024 1024",
          fill: "currentColor",
          fillRule: "evenodd",
        },
        child: [
          {
            tag: "path",
            attr: {
              d: "M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z",
            },
          },
        ],
      })(e);
    }
    function P(e) {
      return y({
        tag: "svg",
        attr: { viewBox: "0 0 1024 1024" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z",
            },
          },
        ],
      })(e);
    }
    function j(e) {
      return y({
        tag: "svg",
        attr: { viewBox: "0 0 1024 1024" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z",
            },
          },
        ],
      })(e);
    }
    function L(e) {
      return y({
        tag: "svg",
        attr: {
          viewBox: "0 0 24 24",
          strokeWidth: "2",
          stroke: "currentColor",
          fill: "none",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
        child: [
          {
            tag: "path",
            attr: { stroke: "none", d: "M0 0h24v24H0z", fill: "none" },
          },
          {
            tag: "path",
            attr: { d: "M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" },
          },
          {
            tag: "path",
            attr: { d: "M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" },
          },
          {
            tag: "path",
            attr: { d: "M5 17h-2v-11a1 1 0 0 1 1 -1h9v6h-5l2 2m0 -4l-2 2" },
          },
          { tag: "path", attr: { d: "M9 17l6 0" } },
          { tag: "path", attr: { d: "M13 6h5l3 5v6h-2" } },
        ],
      })(e);
    }
    function O(e) {
      return y({
        tag: "svg",
        attr: { viewBox: "0 0 448 512" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z",
            },
          },
        ],
      })(e);
    }
    function T(e) {
      return y({
        tag: "svg",
        attr: { viewBox: "0 0 448 512" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z",
            },
          },
        ],
      })(e);
    }
    function M(e) {
      return y({
        tag: "svg",
        attr: { viewBox: "0 0 448 512" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M156.8 126.8c37.6 60.6 64.2 113.1 84.3 162.5-8.3 33.8-18.8 66.5-31.3 98.3-13.2-52.3-26.5-101.3-56-148.5 6.5-36.4 2.3-73.6 3-112.3zM109.3 200H16.1c-6.5 0-10.5 7.5-6.5 12.7C51.8 267 81.3 330.5 101.3 400h103.5c-16.2-69.7-38.7-133.7-82.5-193.5-3-4-8-6.5-13-6.5zm47.8-88c68.5 108 130 234.5 138.2 368H409c-12-138-68.4-265-143.2-368H157.1zm251.8-68.5c-1.8-6.8-8.2-11.5-15.2-11.5h-88.3c-5.3 0-9 5-7.8 10.3 13.2 46.5 22.3 95.5 26.5 146 48.2 86.2 79.7 178.3 90.6 270.8 15.8-60.5 25.3-133.5 25.3-203 0-73.6-12.1-145.1-31.1-212.6z",
            },
          },
        ],
      })(e);
    }
    function R(e) {
      return y({
        tag: "svg",
        attr: { viewBox: "0 0 448 512" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
            },
          },
        ],
      })(e);
    }
    function D(e) {
      return y({
        tag: "svg",
        attr: { viewBox: "0 0 448 512" },
        child: [
          {
            tag: "path",
            attr: {
              d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z",
            },
          },
        ],
      })(e);
    }
    function F(e) {
      return y({
        tag: "svg",
        attr: { viewBox: "0 0 24 24" },
        child: [
          { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
          {
            tag: "path",
            attr: {
              d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z",
            },
          },
        ],
      })(e);
    }
    function I(e) {
      return y({
        tag: "svg",
        attr: { viewBox: "0 0 24 24" },
        child: [
          { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } },
          {
            tag: "path",
            attr: {
              d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
            },
          },
        ],
      })(e);
    }
    var A = function () {
      var t = d((0, e.useState)(!1), 2),
        n = t[0],
        a = t[1];
      return (0, r.jsxs)("div", {
        className: "max-w-[1520] mx-auto flex justify-between items-center p-4",
        children: [
          (0, r.jsxs)("div", {
            className: "flex items-center",
            children: [
              (0, r.jsx)("div", {
                onClick: function () {
                  return a(!n);
                },
                className: "cursor-pointer",
                children: (0, r.jsx)(P, { size: 25 }),
              }),
              (0, r.jsxs)("h1", {
                className: "text-2xl sm:txt-3xl lg:text-4xl px-2",
                children: [
                  "Horizon",
                  (0, r.jsx)("span", {
                    className: "font-bold ",
                    children: "Games",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className:
                  "hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]",
                children: [
                  (0, r.jsx)("p", {
                    className: "bg-black text-white rounded-full p-2 text-bold",
                    children: "Horizon",
                  }),
                  (0, r.jsx)("p", {
                    className: "p-2 text-bold",
                    children: "Games",
                  }),
                ],
              }),
            ],
          }),
          (0, r.jsxs)("div", {
            className:
              "bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]",
            children: [
              (0, r.jsx)(j, { size: 25 }),
              (0, r.jsx)("input", {
                className: "bg-transparent p-2 w-full focus:outline-none",
                type: "text",
                placeholder: "search",
              }),
            ],
          }),
          (0, r.jsxs)("button", {
            className:
              "bg-black text-white hidden md:flex items-center py-2 rounded-full",
            children: [(0, r.jsx)(w, { size: 20 }), " Cart"],
          }),
          n
            ? (0, r.jsx)("div", {
                className:
                  "bg-black/60 fixed w-full h-screen z-10 top-0 left-0 ",
                onClick: function () {
                  return a(!n);
                },
              })
            : "",
          (0, r.jsxs)("div", {
            className: n
              ? "fixed top-0 left-0 w-[300px]  h-screen bg-white z-10 duration-300"
              : "fixed top-0 left-[-100%] w-[300px]  h-screen bg-white z-10 duration-300 ",
            children: [
              (0, r.jsx)(z, {
                onClick: function () {
                  return a(!n);
                },
                size: 25,
                className: "absolute right-4 top-4 cursor-pointer",
              }),
              (0, r.jsxs)("h2", {
                className: "text-2xl p-4 ",
                children: [
                  "Horizon ",
                  (0, r.jsx)("span", {
                    className: "text-black font-bold",
                    children: "Games",
                  }),
                  (0, r.jsx)("nav", {
                    children: (0, r.jsxs)("ul", {
                      className: "flex flex-col p-4 text-gray-900",
                      children: [
                        (0, r.jsxs)("li", {
                          className: "text-xl py-4 flex",
                          children: [
                            (0, r.jsx)(S, {
                              size: 25,
                              className:
                                "mr-4 text-white bg-black rounded-full",
                            }),
                            "My Account",
                          ],
                        }),
                        (0, r.jsxs)("li", {
                          className: "text-xl py-4 flex",
                          children: [
                            (0, r.jsx)(L, {
                              size: 25,
                              className:
                                "mr-4 text-white bg-black rounded-full",
                            }),
                            "Delivery",
                          ],
                        }),
                        (0, r.jsxs)("li", {
                          className: "text-xl py-4 flex",
                          children: [
                            (0, r.jsx)(I, {
                              size: 25,
                              className:
                                "mr-4 text-white bg-black rounded-full",
                            }),
                            "My favourites",
                          ],
                        }),
                        (0, r.jsxs)("li", {
                          className: "text-xl py-4 flex",
                          children: [
                            (0, r.jsx)(M, {
                              size: 25,
                              className:
                                "mr-4 text-white bg-black rounded-full",
                            }),
                            "My Wallet",
                          ],
                        }),
                        (0, r.jsxs)("li", {
                          className: "text-xl py-4 flex",
                          children: [
                            (0, r.jsx)(F, {
                              size: 25,
                              className:
                                "mr-4 text-white bg-black rounded-full",
                            }),
                            "Help",
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    };
    function U(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return c(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        f(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function B(e) {
      return (
        (B =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        B(e)
      );
    }
    function H(e) {
      var t = (function (e, t) {
        if ("object" !== B(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
          var r = n.call(e, t || "default");
          if ("object" !== B(r)) return r;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
      })(e, "string");
      return "symbol" === B(t) ? t : String(t);
    }
    function V(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, H(r.key), r);
      }
    }
    function $(e, t) {
      return (
        ($ = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        $(e, t)
      );
    }
    function W(e) {
      return (
        (W = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        W(e)
      );
    }
    function Q(e, t) {
      if (t && ("object" === B(t) || "function" === typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return (function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      })(e);
    }
    function G(e) {
      var t = (function () {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = W(e);
        if (t) {
          var a = W(this).constructor;
          n = Reflect.construct(r, arguments, a);
        } else n = r.apply(this, arguments);
        return Q(this, n);
      };
    }
    function q(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function K(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? q(Object(n), !0).forEach(function (t) {
              var r, a, l;
              (r = e),
                (a = t),
                (l = n[t]),
                (a = H(a)) in r
                  ? Object.defineProperty(r, a, {
                      value: l,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (r[a] = l);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : q(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function X(e, t) {
      if (null == e) return {};
      var n,
        r,
        a = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            a = {},
            l = Object.keys(e);
          for (r = 0; r < l.length; r++)
            (n = l[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
          return a;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++)
          (n = l[r]),
            t.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(e, n) &&
                (a[n] = e[n]));
      }
      return a;
    }
    var Y = ["children", "className"],
      Z = ["className", "tag", "hasTrack", "children"],
      J = ["children", "className"];
    function ee(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(e, r.key, r);
      }
    }
    var te = "(prefers-reduced-motion: reduce)",
      ne = 4,
      re = 5,
      ae = {
        CREATED: 1,
        MOUNTED: 2,
        IDLE: 3,
        MOVING: ne,
        SCROLLING: re,
        DRAGGING: 6,
        DESTROYED: 7,
      };
    function le(e) {
      e.length = 0;
    }
    function ie(e, t, n) {
      return Array.prototype.slice.call(e, t, n);
    }
    function oe(e) {
      return e.bind.apply(e, [null].concat(ie(arguments, 1)));
    }
    var ue = setTimeout,
      se = function () {};
    function ce(e) {
      return requestAnimationFrame(e);
    }
    function fe(e, t) {
      return typeof t === e;
    }
    function de(e) {
      return !ve(e) && fe("object", e);
    }
    var pe = Array.isArray,
      me = oe(fe, "function"),
      he = oe(fe, "string"),
      ge = oe(fe, "undefined");
    function ve(e) {
      return null === e;
    }
    function ye(e) {
      try {
        return e instanceof (e.ownerDocument.defaultView || window).HTMLElement;
      } catch (t) {
        return !1;
      }
    }
    function be(e) {
      return pe(e) ? e : [e];
    }
    function we(e, t) {
      be(e).forEach(t);
    }
    function xe(e, t) {
      return e.indexOf(t) > -1;
    }
    function ke(e, t) {
      return e.push.apply(e, be(t)), e;
    }
    function Se(e, t, n) {
      e &&
        we(t, function (t) {
          t && e.classList[n ? "add" : "remove"](t);
        });
    }
    function Ee(e, t) {
      Se(e, he(t) ? t.split(" ") : t, !0);
    }
    function Ce(e, t) {
      we(t, e.appendChild.bind(e));
    }
    function _e(e, t) {
      we(e, function (e) {
        var n = (t || e).parentNode;
        n && n.insertBefore(e, t);
      });
    }
    function Ne(e, t) {
      return ye(e) && (e.msMatchesSelector || e.matches).call(e, t);
    }
    function ze(e, t) {
      var n = e ? ie(e.children) : [];
      return t
        ? n.filter(function (e) {
            return Ne(e, t);
          })
        : n;
    }
    function Pe(e, t) {
      return t ? ze(e, t)[0] : e.firstElementChild;
    }
    var je = Object.keys;
    function Le(e, t, n) {
      return (
        e &&
          (n ? je(e).reverse() : je(e)).forEach(function (n) {
            "__proto__" !== n && t(e[n], n);
          }),
        e
      );
    }
    function Oe(e) {
      return (
        ie(arguments, 1).forEach(function (t) {
          Le(t, function (n, r) {
            e[r] = t[r];
          });
        }),
        e
      );
    }
    function Te(e) {
      return (
        ie(arguments, 1).forEach(function (t) {
          Le(t, function (t, n) {
            pe(t)
              ? (e[n] = t.slice())
              : de(t)
              ? (e[n] = Te({}, de(e[n]) ? e[n] : {}, t))
              : (e[n] = t);
          });
        }),
        e
      );
    }
    function Me(e, t) {
      we(t || je(e), function (t) {
        delete e[t];
      });
    }
    function Re(e, t) {
      we(e, function (e) {
        we(t, function (t) {
          e && e.removeAttribute(t);
        });
      });
    }
    function De(e, t, n) {
      de(t)
        ? Le(t, function (t, n) {
            De(e, n, t);
          })
        : we(e, function (e) {
            ve(n) || "" === n ? Re(e, t) : e.setAttribute(t, String(n));
          });
    }
    function Fe(e, t, n) {
      var r = document.createElement(e);
      return t && (he(t) ? Ee(r, t) : De(r, t)), n && Ce(n, r), r;
    }
    function Ie(e, t, n) {
      if (ge(n)) return getComputedStyle(e)[t];
      ve(n) || (e.style[t] = "" + n);
    }
    function Ae(e, t) {
      Ie(e, "display", t);
    }
    function Ue(e) {
      (e.setActive && e.setActive()) || e.focus({ preventScroll: !0 });
    }
    function Be(e, t) {
      return e.getAttribute(t);
    }
    function He(e, t) {
      return e && e.classList.contains(t);
    }
    function Ve(e) {
      return e.getBoundingClientRect();
    }
    function $e(e) {
      we(e, function (e) {
        e && e.parentNode && e.parentNode.removeChild(e);
      });
    }
    function We(e) {
      return Pe(new DOMParser().parseFromString(e, "text/html").body);
    }
    function Qe(e, t) {
      e.preventDefault(),
        t && (e.stopPropagation(), e.stopImmediatePropagation());
    }
    function Ge(e, t) {
      return e && e.querySelector(t);
    }
    function qe(e, t) {
      return t ? ie(e.querySelectorAll(t)) : [];
    }
    function Ke(e, t) {
      Se(e, t, !1);
    }
    function Xe(e) {
      return e.timeStamp;
    }
    function Ye(e) {
      return he(e) ? e : e ? e + "px" : "";
    }
    var Ze = "splide",
      Je = "data-" + Ze;
    function et(e, t) {
      if (!e) throw new Error("[" + Ze + "] " + (t || ""));
    }
    var tt = Math.min,
      nt = Math.max,
      rt = Math.floor,
      at = Math.ceil,
      lt = Math.abs;
    function it(e, t, n) {
      return lt(e - t) < n;
    }
    function ot(e, t, n, r) {
      var a = tt(t, n),
        l = nt(t, n);
      return r ? a < e && e < l : a <= e && e <= l;
    }
    function ut(e, t, n) {
      var r = tt(t, n),
        a = nt(t, n);
      return tt(nt(r, e), a);
    }
    function st(e) {
      return +(e > 0) - +(e < 0);
    }
    function ct(e, t) {
      return (
        we(t, function (t) {
          e = e.replace("%s", "" + t);
        }),
        e
      );
    }
    function ft(e) {
      return e < 10 ? "0" + e : "" + e;
    }
    var dt = {};
    function pt() {
      var e = [];
      function t(e, t, n) {
        we(e, function (e) {
          e &&
            we(t, function (t) {
              t.split(" ").forEach(function (t) {
                var r = t.split(".");
                n(e, r[0], r[1]);
              });
            });
        });
      }
      return {
        bind: function (n, r, a, l) {
          t(n, r, function (t, n, r) {
            var i = "addEventListener" in t,
              o = i
                ? t.removeEventListener.bind(t, n, a, l)
                : t.removeListener.bind(t, a);
            i ? t.addEventListener(n, a, l) : t.addListener(a),
              e.push([t, n, r, a, o]);
          });
        },
        unbind: function (n, r, a) {
          t(n, r, function (t, n, r) {
            e = e.filter(function (e) {
              return (
                !!(
                  e[0] !== t ||
                  e[1] !== n ||
                  e[2] !== r ||
                  (a && e[3] !== a)
                ) || (e[4](), !1)
              );
            });
          });
        },
        dispatch: function (e, t, n) {
          var r;
          return (
            "function" === typeof CustomEvent
              ? (r = new CustomEvent(t, { bubbles: true, detail: n }))
              : (r = document.createEvent("CustomEvent")).initCustomEvent(
                  t,
                  true,
                  !1,
                  n
                ),
            e.dispatchEvent(r),
            r
          );
        },
        destroy: function () {
          e.forEach(function (e) {
            e[4]();
          }),
            le(e);
        },
      };
    }
    var mt = "mounted",
      ht = "ready",
      gt = "move",
      vt = "moved",
      yt = "click",
      bt = "active",
      wt = "inactive",
      xt = "visible",
      kt = "hidden",
      St = "refresh",
      Et = "updated",
      Ct = "resize",
      _t = "resized",
      Nt = "drag",
      zt = "dragging",
      Pt = "dragged",
      jt = "scroll",
      Lt = "scrolled",
      Ot = "destroy",
      Tt = "arrows:mounted",
      Mt = "arrows:updated",
      Rt = "pagination:mounted",
      Dt = "pagination:updated",
      Ft = "navigation:mounted",
      It = "autoplay:play",
      At = "autoplay:playing",
      Ut = "autoplay:pause",
      Bt = "lazyload:loaded",
      Ht = "sk",
      Vt = "sh",
      $t = "ei";
    function Wt(e) {
      var t = e ? e.event.bus : document.createDocumentFragment(),
        n = pt();
      return (
        e && e.event.on(Ot, n.destroy),
        Oe(n, {
          bus: t,
          on: function (e, r) {
            n.bind(t, be(e).join(" "), function (e) {
              r.apply(r, pe(e.detail) ? e.detail : []);
            });
          },
          off: oe(n.unbind, t),
          emit: function (e) {
            n.dispatch(t, e, ie(arguments, 1));
          },
        })
      );
    }
    function Qt(e, t, n, r) {
      var a,
        l,
        i = Date.now,
        o = 0,
        u = !0,
        s = 0;
      function c() {
        if (!u) {
          if (
            ((o = e ? tt((i() - a) / e, 1) : 1),
            n && n(o),
            o >= 1 && (t(), (a = i()), r && ++s >= r))
          )
            return f();
          l = ce(c);
        }
      }
      function f() {
        u = !0;
      }
      function d() {
        l && cancelAnimationFrame(l), (o = 0), (l = 0), (u = !0);
      }
      return {
        start: function (t) {
          t || d(), (a = i() - (t ? o * e : 0)), (u = !1), (l = ce(c));
        },
        rewind: function () {
          (a = i()), (o = 0), n && n(o);
        },
        pause: f,
        cancel: d,
        set: function (t) {
          e = t;
        },
        isPaused: function () {
          return u;
        },
      };
    }
    var Gt = "Arrow",
      qt = Gt + "Left",
      Kt = Gt + "Right",
      Xt = Gt + "Up",
      Yt = Gt + "Down",
      Zt = "ttb",
      Jt = {
        width: ["height"],
        left: ["top", "right"],
        right: ["bottom", "left"],
        x: ["y"],
        X: ["Y"],
        Y: ["X"],
        ArrowLeft: [Xt, Kt],
        ArrowRight: [Yt, qt],
      };
    var en = "role",
      tn = "tabindex",
      nn = "aria-",
      rn = nn + "controls",
      an = nn + "current",
      ln = nn + "selected",
      on = nn + "label",
      un = nn + "labelledby",
      sn = nn + "hidden",
      cn = nn + "orientation",
      fn = nn + "roledescription",
      dn = nn + "live",
      pn = nn + "busy",
      mn = nn + "atomic",
      hn = [en, tn, "disabled", rn, an, on, un, sn, cn, fn],
      gn = Ze + "__",
      vn = "is-",
      yn = Ze,
      bn = gn + "track",
      wn = gn + "list",
      xn = gn + "slide",
      kn = xn + "--clone",
      Sn = xn + "__container",
      En = gn + "arrows",
      Cn = gn + "arrow",
      _n = Cn + "--prev",
      Nn = Cn + "--next",
      zn = gn + "pagination",
      Pn = zn + "__page",
      jn = gn + "progress" + "__bar",
      Ln = gn + "toggle",
      On = gn + "sr",
      Tn = vn + "initialized",
      Mn = vn + "active",
      Rn = vn + "prev",
      Dn = vn + "next",
      Fn = vn + "visible",
      In = vn + "loading",
      An = vn + "focus-in",
      Un = vn + "overflow",
      Bn = [Mn, Fn, Rn, Dn, In, An, Un],
      Hn = {
        slide: xn,
        clone: kn,
        arrows: En,
        arrow: Cn,
        prev: _n,
        next: Nn,
        pagination: zn,
        page: Pn,
        spinner: gn + "spinner",
      };
    var Vn = "touchstart mousedown",
      $n = "touchmove mousemove",
      Wn = "touchend touchcancel mouseup click";
    var Qn = "slide",
      Gn = "loop",
      qn = "fade";
    function Kn(e, t, n, r) {
      var a,
        l = Wt(e),
        i = l.on,
        o = l.emit,
        u = l.bind,
        s = e.Components,
        c = e.root,
        f = e.options,
        d = f.isNavigation,
        p = f.updateOnMove,
        m = f.i18n,
        h = f.pagination,
        g = f.slideFocus,
        v = s.Direction.resolve,
        y = Be(r, "style"),
        b = Be(r, on),
        w = n > -1,
        x = Pe(r, "." + Sn);
      function k() {
        var a = e.splides
          .map(function (e) {
            var n = e.splide.Components.Slides.getAt(t);
            return n ? n.slide.id : "";
          })
          .join(" ");
        De(r, on, ct(m.slideX, (w ? n : t) + 1)),
          De(r, rn, a),
          De(r, en, g ? "button" : ""),
          g && Re(r, fn);
      }
      function S() {
        a || E();
      }
      function E() {
        if (!a) {
          var n = e.index;
          !(function () {
            var e = C();
            e !== He(r, Mn) &&
              (Se(r, Mn, e), De(r, an, (d && e) || ""), o(e ? bt : wt, _));
          })(),
            (function () {
              var t = (function () {
                  if (e.is(qn)) return C();
                  var t = Ve(s.Elements.track),
                    n = Ve(r),
                    a = v("left", !0),
                    l = v("right", !0);
                  return rt(t[a]) <= at(n[a]) && rt(n[l]) <= at(t[l]);
                })(),
                n = !t && (!C() || w);
              e.state.is([ne, re]) || De(r, sn, n || "");
              De(qe(r, f.focusableNodes || ""), tn, n ? -1 : ""),
                g && De(r, tn, n ? -1 : 0);
              t !== He(r, Fn) && (Se(r, Fn, t), o(t ? xt : kt, _));
              if (!t && document.activeElement === r) {
                var a = s.Slides.getAt(e.index);
                a && Ue(a.slide);
              }
            })(),
            Se(r, Rn, t === n - 1),
            Se(r, Dn, t === n + 1);
        }
      }
      function C() {
        var r = e.index;
        return r === t || (f.cloneStatus && r === n);
      }
      var _ = {
        index: t,
        slideIndex: n,
        slide: r,
        container: x,
        isClone: w,
        mount: function () {
          w ||
            ((r.id = c.id + "-slide" + ft(t + 1)),
            De(r, en, h ? "tabpanel" : "group"),
            De(r, fn, m.slide),
            De(r, on, b || ct(m.slideLabel, [t + 1, e.length]))),
            u(r, "click", oe(o, yt, _)),
            u(r, "keydown", oe(o, Ht, _)),
            i([vt, Vt, Lt], E),
            i(Ft, k),
            p && i(gt, S);
        },
        destroy: function () {
          (a = !0),
            l.destroy(),
            Ke(r, Bn),
            Re(r, hn),
            De(r, "style", y),
            De(r, on, b || "");
        },
        update: E,
        style: function (e, t, n) {
          Ie((n && x) || r, e, t);
        },
        isWithin: function (n, r) {
          var a = lt(n - t);
          return (
            w || (!f.rewind && !e.is(Gn)) || (a = tt(a, e.length - a)), a <= r
          );
        },
      };
      return _;
    }
    var Xn = Je + "-interval";
    var Yn = { passive: !1, capture: !0 };
    var Zn = { Spacebar: " ", Right: Kt, Left: qt, Up: Xt, Down: Yt };
    function Jn(e) {
      return (e = he(e) ? e : e.key), Zn[e] || e;
    }
    var er = "keydown";
    var tr = Je + "-lazy",
      nr = tr + "-srcset",
      rr = "[" + tr + "], [" + nr + "]";
    var ar = [" ", "Enter"];
    var lr = Object.freeze({
        __proto__: null,
        Media: function (e, t, n) {
          var r = e.state,
            a = n.breakpoints || {},
            l = n.reducedMotion || {},
            i = pt(),
            o = [];
          function u(e) {
            e && i.destroy();
          }
          function s(e, t) {
            var n = matchMedia(t);
            i.bind(n, "change", c), o.push([e, n]);
          }
          function c() {
            var t = r.is(7),
              a = n.direction,
              l = o.reduce(function (e, t) {
                return Te(e, t[1].matches ? t[0] : {});
              }, {});
            Me(n),
              f(l),
              n.destroy
                ? e.destroy("completely" === n.destroy)
                : t
                ? (u(!0), e.mount())
                : a !== n.direction && e.refresh();
          }
          function f(t, a, l) {
            Te(n, t),
              a && Te(Object.getPrototypeOf(n), t),
              (!l && r.is(1)) || e.emit(Et, n);
          }
          return {
            setup: function () {
              var e = "min" === n.mediaQuery;
              je(a)
                .sort(function (t, n) {
                  return e ? +t - +n : +n - +t;
                })
                .forEach(function (t) {
                  s(a[t], "(" + (e ? "min" : "max") + "-width:" + t + "px)");
                }),
                s(l, te),
                c();
            },
            destroy: u,
            reduce: function (e) {
              matchMedia(te).matches && (e ? Te(n, l) : Me(n, je(l)));
            },
            set: f,
          };
        },
        Direction: function (e, t, n) {
          return {
            resolve: function (e, t, r) {
              var a =
                "rtl" !== (r = r || n.direction) || t ? (r === Zt ? 0 : -1) : 1;
              return (
                (Jt[e] && Jt[e][a]) ||
                e.replace(/width|left|right/i, function (e, t) {
                  var n = Jt[e.toLowerCase()][a] || e;
                  return t > 0 ? n.charAt(0).toUpperCase() + n.slice(1) : n;
                })
              );
            },
            orient: function (e) {
              return e * ("rtl" === n.direction ? 1 : -1);
            },
          };
        },
        Elements: function (e, t, n) {
          var r,
            a,
            l,
            i = Wt(e),
            o = i.on,
            u = i.bind,
            s = e.root,
            c = n.i18n,
            f = {},
            d = [],
            p = [],
            m = [];
          function h() {
            (r = y("." + bn)),
              (a = Pe(r, "." + wn)),
              et(r && a, "A track/list element is missing."),
              ke(d, ze(a, "." + xn + ":not(." + kn + ")")),
              Le(
                {
                  arrows: En,
                  pagination: zn,
                  prev: _n,
                  next: Nn,
                  bar: jn,
                  toggle: Ln,
                },
                function (e, t) {
                  f[t] = y("." + e);
                }
              ),
              Oe(f, { root: s, track: r, list: a, slides: d }),
              (function () {
                var e =
                    s.id || ((l = Ze), "" + l + ft((dt[l] = (dt[l] || 0) + 1))),
                  t = n.role;
                var l;
                (s.id = e),
                  (r.id = r.id || e + "-track"),
                  (a.id = a.id || e + "-list"),
                  !Be(s, en) && "SECTION" !== s.tagName && t && De(s, en, t);
                De(s, fn, c.carousel), De(a, en, "presentation");
              })(),
              v();
          }
          function g(e) {
            var t = hn.concat("style");
            le(d),
              Ke(s, p),
              Ke(r, m),
              Re([r, a], t),
              Re(s, e ? t : ["style", fn]);
          }
          function v() {
            Ke(s, p),
              Ke(r, m),
              (p = b(yn)),
              (m = b(bn)),
              Ee(s, p),
              Ee(r, m),
              De(s, on, n.label),
              De(s, un, n.labelledby);
          }
          function y(e) {
            var t = Ge(s, e);
            return t &&
              (function (e, t) {
                if (me(e.closest)) return e.closest(t);
                for (var n = e; n && 1 === n.nodeType && !Ne(n, t); )
                  n = n.parentElement;
                return n;
              })(t, "." + yn) === s
              ? t
              : void 0;
          }
          function b(e) {
            return [
              e + "--" + n.type,
              e + "--" + n.direction,
              n.drag && e + "--draggable",
              n.isNavigation && e + "--nav",
              e === yn && Mn,
            ];
          }
          return Oe(f, {
            setup: h,
            mount: function () {
              o(St, g),
                o(St, h),
                o(Et, v),
                u(
                  document,
                  Vn + " keydown",
                  function (e) {
                    l = "keydown" === e.type;
                  },
                  { capture: !0 }
                ),
                u(s, "focusin", function () {
                  Se(s, An, !!l);
                });
            },
            destroy: g,
          });
        },
        Slides: function (e, t, n) {
          var r = Wt(e),
            a = r.on,
            l = r.emit,
            i = r.bind,
            o = t.Elements,
            u = o.slides,
            s = o.list,
            c = [];
          function f() {
            u.forEach(function (e, t) {
              p(e, t, -1);
            });
          }
          function d() {
            h(function (e) {
              e.destroy();
            }),
              le(c);
          }
          function p(t, n, r) {
            var a = Kn(e, n, r, t);
            a.mount(),
              c.push(a),
              c.sort(function (e, t) {
                return e.index - t.index;
              });
          }
          function m(e) {
            return e
              ? g(function (e) {
                  return !e.isClone;
                })
              : c;
          }
          function h(e, t) {
            m(t).forEach(e);
          }
          function g(e) {
            return c.filter(
              me(e)
                ? e
                : function (t) {
                    return he(e) ? Ne(t.slide, e) : xe(be(e), t.index);
                  }
            );
          }
          return {
            mount: function () {
              f(), a(St, d), a(St, f);
            },
            destroy: d,
            update: function () {
              h(function (e) {
                e.update();
              });
            },
            register: p,
            get: m,
            getIn: function (e) {
              var r = t.Controller,
                a = r.toIndex(e),
                l = r.hasFocus() ? 1 : n.perPage;
              return g(function (e) {
                return ot(e.index, a, a + l - 1);
              });
            },
            getAt: function (e) {
              return g(e)[0];
            },
            add: function (e, t) {
              we(e, function (e) {
                if ((he(e) && (e = We(e)), ye(e))) {
                  var r = u[t];
                  r ? _e(e, r) : Ce(s, e),
                    Ee(e, n.classes.slide),
                    (function (e, t) {
                      var n = qe(e, "img"),
                        r = n.length;
                      r
                        ? n.forEach(function (e) {
                            i(e, "load error", function () {
                              --r || t();
                            });
                          })
                        : t();
                    })(e, oe(l, Ct));
                }
              }),
                l(St);
            },
            remove: function (e) {
              $e(
                g(e).map(function (e) {
                  return e.slide;
                })
              ),
                l(St);
            },
            forEach: h,
            filter: g,
            style: function (e, t, n) {
              h(function (r) {
                r.style(e, t, n);
              });
            },
            getLength: function (e) {
              return e ? u.length : c.length;
            },
            isEnough: function () {
              return c.length > n.perPage;
            },
          };
        },
        Layout: function (e, t, n) {
          var r,
            a,
            l,
            i = Wt(e),
            o = i.on,
            u = i.bind,
            s = i.emit,
            c = t.Slides,
            f = t.Direction.resolve,
            d = t.Elements,
            p = d.root,
            m = d.track,
            h = d.list,
            g = c.getAt,
            v = c.style;
          function y() {
            (r = n.direction === Zt),
              Ie(p, "maxWidth", Ye(n.width)),
              Ie(m, f("paddingLeft"), w(!1)),
              Ie(m, f("paddingRight"), w(!0)),
              b(!0);
          }
          function b(e) {
            var t = Ve(p);
            (e || a.width !== t.width || a.height !== t.height) &&
              (Ie(
                m,
                "height",
                (function () {
                  var e = "";
                  r &&
                    (et((e = x()), "height or heightRatio is missing."),
                    (e = "calc(" + e + " - " + w(!1) + " - " + w(!0) + ")"));
                  return e;
                })()
              ),
              v(f("marginRight"), Ye(n.gap)),
              v(
                "width",
                n.autoWidth ? null : Ye(n.fixedWidth) || (r ? "" : k())
              ),
              v(
                "height",
                Ye(n.fixedHeight) || (r ? (n.autoHeight ? null : k()) : x()),
                !0
              ),
              (a = t),
              s(_t),
              l !== (l = z()) && (Se(p, Un, l), s("overflow", l)));
          }
          function w(e) {
            var t = n.padding,
              r = f(e ? "right" : "left");
            return (t && Ye(t[r] || (de(t) ? 0 : t))) || "0px";
          }
          function x() {
            return Ye(n.height || Ve(h).width * n.heightRatio);
          }
          function k() {
            var e = Ye(n.gap);
            return (
              "calc((100%" +
              (e && " + " + e) +
              ")/" +
              (n.perPage || 1) +
              (e && " - " + e) +
              ")"
            );
          }
          function S() {
            return Ve(h)[f("width")];
          }
          function E(e, t) {
            var n = g(e || 0);
            return n ? Ve(n.slide)[f("width")] + (t ? 0 : N()) : 0;
          }
          function C(e, t) {
            var n = g(e);
            if (n) {
              var r = Ve(n.slide)[f("right")],
                a = Ve(h)[f("left")];
              return lt(r - a) + (t ? 0 : N());
            }
            return 0;
          }
          function _(t) {
            return C(e.length - 1) - C(0) + E(0, t);
          }
          function N() {
            var e = g(0);
            return (e && parseFloat(Ie(e.slide, f("marginRight")))) || 0;
          }
          function z() {
            return e.is(qn) || _(!0) > S();
          }
          return {
            mount: function () {
              y(),
                u(
                  window,
                  "resize load",
                  (function (e, t) {
                    var n = Qt(t || 0, e, null, 1);
                    return function () {
                      n.isPaused() && n.start();
                    };
                  })(oe(s, Ct))
                ),
                o([Et, St], y),
                o(Ct, b);
            },
            resize: b,
            listSize: S,
            slideSize: E,
            sliderSize: _,
            totalSize: C,
            getPadding: function (e) {
              return (
                parseFloat(Ie(m, f("padding" + (e ? "Right" : "Left")))) || 0
              );
            },
            isOverflow: z,
          };
        },
        Clones: function (e, t, n) {
          var r,
            a = Wt(e),
            l = a.on,
            i = t.Elements,
            o = t.Slides,
            u = t.Direction.resolve,
            s = [];
          function c() {
            l(St, f),
              l([Et, Ct], p),
              (r = m()) &&
                (!(function (t) {
                  var r = o.get().slice(),
                    a = r.length;
                  if (a) {
                    for (; r.length < t; ) ke(r, r);
                    ke(r.slice(-t), r.slice(0, t)).forEach(function (l, u) {
                      var c = u < t,
                        f = (function (t, r) {
                          var a = t.cloneNode(!0);
                          return (
                            Ee(a, n.classes.clone),
                            (a.id = e.root.id + "-clone" + ft(r + 1)),
                            a
                          );
                        })(l.slide, u);
                      c ? _e(f, r[0].slide) : Ce(i.list, f),
                        ke(s, f),
                        o.register(f, u - t + (c ? 0 : a), l.index);
                    });
                  }
                })(r),
                t.Layout.resize(!0));
          }
          function f() {
            d(), c();
          }
          function d() {
            $e(s), le(s), a.destroy();
          }
          function p() {
            var e = m();
            r !== e && (r < e || !e) && a.emit(St);
          }
          function m() {
            var r = n.clones;
            if (e.is(Gn)) {
              if (ge(r)) {
                var a = n[u("fixedWidth")] && t.Layout.slideSize(0);
                r =
                  (a && at(Ve(i.track)[u("width")] / a)) ||
                  (n[u("autoWidth")] && e.length) ||
                  2 * n.perPage;
              }
            } else r = 0;
            return r;
          }
          return { mount: c, destroy: d };
        },
        Move: function (e, t, n) {
          var r,
            a = Wt(e),
            l = a.on,
            i = a.emit,
            o = e.state.set,
            u = t.Layout,
            s = u.slideSize,
            c = u.getPadding,
            f = u.totalSize,
            d = u.listSize,
            p = u.sliderSize,
            m = t.Direction,
            h = m.resolve,
            g = m.orient,
            v = t.Elements,
            y = v.list,
            b = v.track;
          function w() {
            t.Controller.isBusy() ||
              (t.Scroll.cancel(), x(e.index), t.Slides.update());
          }
          function x(e) {
            k(_(e, !0));
          }
          function k(n, r) {
            if (!e.is(qn)) {
              var a = r
                ? n
                : (function (n) {
                    if (e.is(Gn)) {
                      var r = C(n),
                        a = r > t.Controller.getEnd();
                      (r < 0 || a) && (n = S(n, a));
                    }
                    return n;
                  })(n);
              Ie(y, "transform", "translate" + h("X") + "(" + a + "px)"),
                n !== a && i(Vt);
            }
          }
          function S(e, t) {
            var n = e - z(t),
              r = p();
            return (e -= g(r * (at(lt(n) / r) || 1)) * (t ? 1 : -1));
          }
          function E() {
            k(N(), !0), r.cancel();
          }
          function C(e) {
            for (
              var n = t.Slides.get(), r = 0, a = 1 / 0, l = 0;
              l < n.length;
              l++
            ) {
              var i = n[l].index,
                o = lt(_(i, !0) - e);
              if (!(o <= a)) break;
              (a = o), (r = i);
            }
            return r;
          }
          function _(t, r) {
            var a = g(
              f(t - 1) -
                (function (e) {
                  var t = n.focus;
                  return "center" === t ? (d() - s(e, !0)) / 2 : +t * s(e) || 0;
                })(t)
            );
            return r
              ? (function (t) {
                  n.trimSpace && e.is(Qn) && (t = ut(t, 0, g(p(!0) - d())));
                  return t;
                })(a)
              : a;
          }
          function N() {
            var e = h("left");
            return Ve(y)[e] - Ve(b)[e] + g(c(!1));
          }
          function z(e) {
            return _(e ? t.Controller.getEnd() : 0, !!n.trimSpace);
          }
          return {
            mount: function () {
              (r = t.Transition), l([mt, _t, Et, St], w);
            },
            move: function (e, t, n, a) {
              e !== t &&
                (function (e) {
                  var t = g(S(N(), e));
                  return e
                    ? t >= 0
                    : t <= y[h("scrollWidth")] - Ve(b)[h("width")];
                })(e > n) &&
                (E(), k(S(N(), e > n), !0)),
                o(ne),
                i(gt, t, n, e),
                r.start(t, function () {
                  o(3), i(vt, t, n, e), a && a();
                });
            },
            jump: x,
            translate: k,
            shift: S,
            cancel: E,
            toIndex: C,
            toPosition: _,
            getPosition: N,
            getLimit: z,
            exceededLimit: function (e, t) {
              t = ge(t) ? N() : t;
              var n = !0 !== e && g(t) < g(z(!1)),
                r = !1 !== e && g(t) > g(z(!0));
              return n || r;
            },
            reposition: w,
          };
        },
        Controller: function (e, t, n) {
          var r,
            a,
            l,
            i,
            o = Wt(e),
            u = o.on,
            s = o.emit,
            c = t.Move,
            f = c.getPosition,
            d = c.getLimit,
            p = c.toPosition,
            m = t.Slides,
            h = m.isEnough,
            g = m.getLength,
            v = n.omitEnd,
            y = e.is(Gn),
            b = e.is(Qn),
            w = oe(_, !1),
            x = oe(_, !0),
            k = n.start || 0,
            S = k;
          function E() {
            (a = g(!0)), (l = n.perMove), (i = n.perPage), (r = P());
            var e = ut(k, 0, v ? r : a - 1);
            e !== k && ((k = e), c.reposition());
          }
          function C() {
            r !== P() && s($t);
          }
          function _(e, t) {
            var n = l || (T() ? 1 : i),
              a = N(k + n * (e ? -1 : 1), k, !(l || T()));
            return -1 === a && b && !it(f(), d(!e), 1)
              ? e
                ? 0
                : r
              : t
              ? a
              : z(a);
          }
          function N(t, o, u) {
            if (h() || T()) {
              var s = (function (t) {
                if (b && "move" === n.trimSpace && t !== k)
                  for (
                    var r = f();
                    r === p(t, !0) && ot(t, 0, e.length - 1, !n.rewind);

                  )
                    t < k ? --t : ++t;
                return t;
              })(t);
              s !== t && ((o = t), (t = s), (u = !1)),
                t < 0 || t > r
                  ? (t =
                      l || (!ot(0, t, o, !0) && !ot(r, o, t, !0))
                        ? y
                          ? u
                            ? t < 0
                              ? -(a % i || i)
                              : a
                            : t
                          : n.rewind
                          ? t < 0
                            ? r
                            : 0
                          : -1
                        : j(L(t)))
                  : u && t !== o && (t = j(L(o) + (t < o ? -1 : 1)));
            } else t = -1;
            return t;
          }
          function z(e) {
            return y ? (e + a) % a || 0 : e;
          }
          function P() {
            for (var e = a - (T() || (y && l) ? 1 : i); v && e-- > 0; )
              if (p(a - 1, !0) !== p(e, !0)) {
                e++;
                break;
              }
            return ut(e, 0, a - 1);
          }
          function j(e) {
            return ut(T() ? e : i * e, 0, r);
          }
          function L(e) {
            return T() ? tt(e, r) : rt((e >= r ? a - 1 : e) / i);
          }
          function O(e) {
            e !== k && ((S = k), (k = e));
          }
          function T() {
            return !ge(n.focus) || n.isNavigation;
          }
          function M() {
            return e.state.is([ne, re]) && !!n.waitForTransition;
          }
          return {
            mount: function () {
              E(), u([Et, St, $t], E), u(_t, C);
            },
            go: function (e, t, n) {
              if (!M()) {
                var a = (function (e) {
                    var t = k;
                    if (he(e)) {
                      var n = e.match(/([+\-<>])(\d+)?/) || [],
                        a = n[1],
                        l = n[2];
                      "+" === a || "-" === a
                        ? (t = N(k + +("" + a + (+l || 1)), k))
                        : ">" === a
                        ? (t = l ? j(+l) : w(!0))
                        : "<" === a && (t = x(!0));
                    } else t = y ? e : ut(e, 0, r);
                    return t;
                  })(e),
                  l = z(a);
                l > -1 && (t || l !== k) && (O(l), c.move(a, l, S, n));
              }
            },
            scroll: function (e, n, a, l) {
              t.Scroll.scroll(e, n, a, function () {
                var e = z(c.toIndex(f()));
                O(v ? tt(e, r) : e), l && l();
              });
            },
            getNext: w,
            getPrev: x,
            getAdjacent: _,
            getEnd: P,
            setIndex: O,
            getIndex: function (e) {
              return e ? S : k;
            },
            toIndex: j,
            toPage: L,
            toDest: function (e) {
              var t = c.toIndex(e);
              return b ? ut(t, 0, r) : t;
            },
            hasFocus: T,
            isBusy: M,
          };
        },
        Arrows: function (e, t, n) {
          var r,
            a,
            l = Wt(e),
            i = l.on,
            o = l.bind,
            u = l.emit,
            s = n.classes,
            c = n.i18n,
            f = t.Elements,
            d = t.Controller,
            p = f.arrows,
            m = f.track,
            h = p,
            g = f.prev,
            v = f.next,
            y = {};
          function b() {
            !(function () {
              var e = n.arrows;
              !e ||
                (g && v) ||
                ((h = p || Fe("div", s.arrows)),
                (g = S(!0)),
                (v = S(!1)),
                (r = !0),
                Ce(h, [g, v]),
                !p && _e(h, m));
              g &&
                v &&
                (Oe(y, { prev: g, next: v }),
                Ae(h, e ? "" : "none"),
                Ee(h, (a = En + "--" + n.direction)),
                e &&
                  (i([mt, vt, St, Lt, $t], E),
                  o(v, "click", oe(k, ">")),
                  o(g, "click", oe(k, "<")),
                  E(),
                  De([g, v], rn, m.id),
                  u(Tt, g, v)));
            })(),
              i(Et, w);
          }
          function w() {
            x(), b();
          }
          function x() {
            l.destroy(),
              Ke(h, a),
              r ? ($e(p ? [g, v] : h), (g = v = null)) : Re([g, v], hn);
          }
          function k(e) {
            d.go(e, !0);
          }
          function S(e) {
            return We(
              '<button class="' +
                s.arrow +
                " " +
                (e ? s.prev : s.next) +
                '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="' +
                (n.arrowPath ||
                  "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") +
                '" />'
            );
          }
          function E() {
            if (g && v) {
              var t = e.index,
                n = d.getPrev(),
                r = d.getNext(),
                a = n > -1 && t < n ? c.last : c.prev,
                l = r > -1 && t > r ? c.first : c.next;
              (g.disabled = n < 0),
                (v.disabled = r < 0),
                De(g, on, a),
                De(v, on, l),
                u(Mt, g, v, n, r);
            }
          }
          return { arrows: y, mount: b, destroy: x, update: E };
        },
        Autoplay: function (e, t, n) {
          var r,
            a,
            l = Wt(e),
            i = l.on,
            o = l.bind,
            u = l.emit,
            s = Qt(n.interval, e.go.bind(e, ">"), function (e) {
              var t = f.bar;
              t && Ie(t, "width", 100 * e + "%"), u(At, e);
            }),
            c = s.isPaused,
            f = t.Elements,
            d = t.Elements,
            p = d.root,
            m = d.toggle,
            h = n.autoplay,
            g = "pause" === h;
          function v() {
            c() &&
              t.Slides.isEnough() &&
              (s.start(!n.resetProgress), (a = r = g = !1), w(), u(It));
          }
          function y(e) {
            void 0 === e && (e = !0), (g = !!e), w(), c() || (s.pause(), u(Ut));
          }
          function b() {
            g || (r || a ? y(!1) : v());
          }
          function w() {
            m && (Se(m, Mn, !g), De(m, on, n.i18n[g ? "play" : "pause"]));
          }
          function x(e) {
            var r = t.Slides.getAt(e);
            s.set((r && +Be(r.slide, Xn)) || n.interval);
          }
          return {
            mount: function () {
              h &&
                (!(function () {
                  n.pauseOnHover &&
                    o(p, "mouseenter mouseleave", function (e) {
                      (r = "mouseenter" === e.type), b();
                    });
                  n.pauseOnFocus &&
                    o(p, "focusin focusout", function (e) {
                      (a = "focusin" === e.type), b();
                    });
                  m &&
                    o(m, "click", function () {
                      g ? v() : y(!0);
                    });
                  i([gt, jt, St], s.rewind), i(gt, x);
                })(),
                m && De(m, rn, f.track.id),
                g || v(),
                w());
            },
            destroy: s.cancel,
            play: v,
            pause: y,
            isPaused: c,
          };
        },
        Cover: function (e, t, n) {
          var r = Wt(e).on;
          function a(e) {
            t.Slides.forEach(function (t) {
              var n = Pe(t.container || t.slide, "img");
              n && n.src && l(e, n, t);
            });
          }
          function l(e, t, n) {
            n.style(
              "background",
              e ? 'center/cover no-repeat url("' + t.src + '")' : "",
              !0
            ),
              Ae(t, e ? "none" : "");
          }
          return {
            mount: function () {
              n.cover && (r(Bt, oe(l, !0)), r([mt, Et, St], oe(a, !0)));
            },
            destroy: oe(a, !1),
          };
        },
        Scroll: function (e, t, n) {
          var r,
            a,
            l = Wt(e),
            i = l.on,
            o = l.emit,
            u = e.state.set,
            s = t.Move,
            c = s.getPosition,
            f = s.getLimit,
            d = s.exceededLimit,
            p = s.translate,
            m = e.is(Qn),
            h = 1;
          function g(e, n, l, i, f) {
            var p = c();
            if ((b(), l && (!m || !d()))) {
              var g = t.Layout.sliderSize(),
                w = st(e) * g * rt(lt(e) / g) || 0;
              e = s.toPosition(t.Controller.toDest(e % g)) + w;
            }
            var x = it(p, e, 1);
            (h = 1),
              (n = x ? 0 : n || nt(lt(e - p) / 1.5, 800)),
              (a = i),
              (r = Qt(n, v, oe(y, p, e, f), 1)),
              u(re),
              o(jt),
              r.start();
          }
          function v() {
            u(3), a && a(), o(Lt);
          }
          function y(e, t, r, l) {
            var i = c(),
              o =
                (e +
                  (t - e) *
                    (function (e) {
                      var t = n.easingFunc;
                      return t ? t(e) : 1 - Math.pow(1 - e, 4);
                    })(l) -
                  i) *
                h;
            p(i + o),
              m &&
                !r &&
                d() &&
                ((h *= 0.6), lt(o) < 10 && g(f(d(!0)), 600, !1, a, !0));
          }
          function b() {
            r && r.cancel();
          }
          function w() {
            r && !r.isPaused() && (b(), v());
          }
          return {
            mount: function () {
              i(gt, b), i([Et, St], w);
            },
            destroy: b,
            scroll: g,
            cancel: w,
          };
        },
        Drag: function (e, t, n) {
          var r,
            a,
            l,
            i,
            o,
            u,
            s,
            c,
            f = Wt(e),
            d = f.on,
            p = f.emit,
            m = f.bind,
            h = f.unbind,
            g = e.state,
            v = t.Move,
            y = t.Scroll,
            b = t.Controller,
            w = t.Elements.track,
            x = t.Media.reduce,
            k = t.Direction,
            S = k.resolve,
            E = k.orient,
            C = v.getPosition,
            _ = v.exceededLimit,
            N = !1;
          function z() {
            var e = n.drag;
            A(!e), (i = "free" === e);
          }
          function P(e) {
            if (((u = !1), !s)) {
              var t = I(e);
              !(function (e) {
                var t = n.noDrag;
                return !Ne(e, "." + Pn + ", ." + Cn) && (!t || !Ne(e, t));
              })(e.target) ||
                (!t && e.button) ||
                (b.isBusy()
                  ? Qe(e, !0)
                  : ((c = t ? w : window),
                    (o = g.is([ne, re])),
                    (l = null),
                    m(c, $n, j, Yn),
                    m(c, Wn, L, Yn),
                    v.cancel(),
                    y.cancel(),
                    T(e)));
            }
          }
          function j(t) {
            if ((g.is(6) || (g.set(6), p(Nt)), t.cancelable))
              if (o) {
                v.translate(r + M(t) / (N && e.is(Qn) ? 5 : 1));
                var a = R(t) > 200,
                  l = N !== (N = _());
                (a || l) && T(t), (u = !0), p(zt), Qe(t);
              } else
                (function (e) {
                  return lt(M(e)) > lt(M(e, !0));
                })(t) &&
                  ((o = (function (e) {
                    var t = n.dragMinThreshold,
                      r = de(t),
                      a = (r && t.mouse) || 0,
                      l = (r ? t.touch : +t) || 10;
                    return lt(M(e)) > (I(e) ? l : a);
                  })(t)),
                  Qe(t));
          }
          function L(r) {
            g.is(6) && (g.set(3), p(Pt)),
              o &&
                (!(function (r) {
                  var a = (function (t) {
                      if (e.is(Gn) || !N) {
                        var n = R(t);
                        if (n && n < 200) return M(t) / n;
                      }
                      return 0;
                    })(r),
                    l = (function (e) {
                      return (
                        C() +
                        st(e) *
                          tt(
                            lt(e) * (n.flickPower || 600),
                            i
                              ? 1 / 0
                              : t.Layout.listSize() * (n.flickMaxPages || 1)
                          )
                      );
                    })(a),
                    o = n.rewind && n.rewindByDrag;
                  x(!1),
                    i
                      ? b.scroll(l, 0, n.snap)
                      : e.is(qn)
                      ? b.go(E(st(a)) < 0 ? (o ? "<" : "-") : o ? ">" : "+")
                      : e.is(Qn) && N && o
                      ? b.go(_(!0) ? ">" : "<")
                      : b.go(b.toDest(l), !0);
                  x(!0);
                })(r),
                Qe(r)),
              h(c, $n, j),
              h(c, Wn, L),
              (o = !1);
          }
          function O(e) {
            !s && u && Qe(e, !0);
          }
          function T(e) {
            (l = a), (a = e), (r = C());
          }
          function M(e, t) {
            return F(e, t) - F(D(e), t);
          }
          function R(e) {
            return Xe(e) - Xe(D(e));
          }
          function D(e) {
            return (a === e && l) || a;
          }
          function F(e, t) {
            return (I(e) ? e.changedTouches[0] : e)["page" + S(t ? "Y" : "X")];
          }
          function I(e) {
            return "undefined" !== typeof TouchEvent && e instanceof TouchEvent;
          }
          function A(e) {
            s = e;
          }
          return {
            mount: function () {
              m(w, $n, se, Yn),
                m(w, Wn, se, Yn),
                m(w, Vn, P, Yn),
                m(w, "click", O, { capture: !0 }),
                m(w, "dragstart", Qe),
                d([mt, Et], z);
            },
            disable: A,
            isDragging: function () {
              return o;
            },
          };
        },
        Keyboard: function (e, t, n) {
          var r,
            a,
            l = Wt(e),
            i = l.on,
            o = l.bind,
            u = l.unbind,
            s = e.root,
            c = t.Direction.resolve;
          function f() {
            var e = n.keyboard;
            e && ((r = "global" === e ? window : s), o(r, er, m));
          }
          function d() {
            u(r, er);
          }
          function p() {
            var e = a;
            (a = !0),
              ue(function () {
                a = e;
              });
          }
          function m(t) {
            if (!a) {
              var n = Jn(t);
              n === c(qt) ? e.go("<") : n === c(Kt) && e.go(">");
            }
          }
          return {
            mount: function () {
              f(), i(Et, d), i(Et, f), i(gt, p);
            },
            destroy: d,
            disable: function (e) {
              a = e;
            },
          };
        },
        LazyLoad: function (e, t, n) {
          var r = Wt(e),
            a = r.on,
            l = r.off,
            i = r.bind,
            o = r.emit,
            u = "sequential" === n.lazyLoad,
            s = [vt, Lt],
            c = [];
          function f() {
            le(c),
              t.Slides.forEach(function (e) {
                qe(e.slide, rr).forEach(function (t) {
                  var r = Be(t, tr),
                    a = Be(t, nr);
                  if (r !== t.src || a !== t.srcset) {
                    var l = n.classes.spinner,
                      i = t.parentElement,
                      o = Pe(i, "." + l) || Fe("span", l, i);
                    c.push([t, e, o]), t.src || Ae(t, "none");
                  }
                });
              }),
              u ? h() : (l(s), a(s, d), d());
          }
          function d() {
            (c = c.filter(function (t) {
              var r = n.perPage * ((n.preloadPages || 1) + 1) - 1;
              return !t[1].isWithin(e.index, r) || p(t);
            })).length || l(s);
          }
          function p(e) {
            var t = e[0];
            Ee(e[1].slide, In),
              i(t, "load error", oe(m, e)),
              De(t, "src", Be(t, tr)),
              De(t, "srcset", Be(t, nr)),
              Re(t, tr),
              Re(t, nr);
          }
          function m(e, t) {
            var n = e[0],
              r = e[1];
            Ke(r.slide, In),
              "error" !== t.type && ($e(e[2]), Ae(n, ""), o(Bt, n, r), o(Ct)),
              u && h();
          }
          function h() {
            c.length && p(c.shift());
          }
          return {
            mount: function () {
              n.lazyLoad && (f(), a(St, f));
            },
            destroy: oe(le, c),
            check: d,
          };
        },
        Pagination: function (e, t, n) {
          var r,
            a,
            l = Wt(e),
            i = l.on,
            o = l.emit,
            u = l.bind,
            s = t.Slides,
            c = t.Elements,
            f = t.Controller,
            d = f.hasFocus,
            p = f.getIndex,
            m = f.go,
            h = t.Direction.resolve,
            g = c.pagination,
            v = [];
          function y() {
            r && ($e(g ? ie(r.children) : r), Ke(r, a), le(v), (r = null)),
              l.destroy();
          }
          function b(e) {
            m(">" + e, !0);
          }
          function w(e, t) {
            var n = v.length,
              r = Jn(t),
              a = x(),
              l = -1;
            r === h(Kt, !1, a)
              ? (l = ++e % n)
              : r === h(qt, !1, a)
              ? (l = (--e + n) % n)
              : "Home" === r
              ? (l = 0)
              : "End" === r && (l = n - 1);
            var i = v[l];
            i && (Ue(i.button), m(">" + l), Qe(t, !0));
          }
          function x() {
            return n.paginationDirection || n.direction;
          }
          function k(e) {
            return v[f.toPage(e)];
          }
          function S() {
            var e = k(p(!0)),
              t = k(p());
            if (e) {
              var n = e.button;
              Ke(n, Mn), Re(n, ln), De(n, tn, -1);
            }
            if (t) {
              var a = t.button;
              Ee(a, Mn), De(a, ln, !0), De(a, tn, "");
            }
            o(Dt, { list: r, items: v }, e, t);
          }
          return {
            items: v,
            mount: function t() {
              y(), i([Et, St, $t], t);
              var l = n.pagination;
              g && Ae(g, l ? "" : "none"),
                l &&
                  (i([gt, jt, Lt], S),
                  (function () {
                    var t = e.length,
                      l = n.classes,
                      i = n.i18n,
                      o = n.perPage,
                      p = d() ? f.getEnd() + 1 : at(t / o);
                    Ee(
                      (r = g || Fe("ul", l.pagination, c.track.parentElement)),
                      (a = zn + "--" + x())
                    ),
                      De(r, en, "tablist"),
                      De(r, on, i.select),
                      De(r, cn, x() === Zt ? "vertical" : "");
                    for (var m = 0; m < p; m++) {
                      var h = Fe("li", null, r),
                        y = Fe("button", { class: l.page, type: "button" }, h),
                        k = s.getIn(m).map(function (e) {
                          return e.slide.id;
                        }),
                        S = !d() && o > 1 ? i.pageX : i.slideX;
                      u(y, "click", oe(b, m)),
                        n.paginationKeyboard && u(y, "keydown", oe(w, m)),
                        De(h, en, "presentation"),
                        De(y, en, "tab"),
                        De(y, rn, k.join(" ")),
                        De(y, on, ct(S, m + 1)),
                        De(y, tn, -1),
                        v.push({ li: h, button: y, page: m });
                    }
                  })(),
                  S(),
                  o(Rt, { list: r, items: v }, k(e.index)));
            },
            destroy: y,
            getAt: k,
            update: S,
          };
        },
        Sync: function (e, t, n) {
          var r = n.isNavigation,
            a = n.slideFocus,
            l = [];
          function i() {
            e.splides.forEach(function (t) {
              t.isParent || (u(e, t.splide), u(t.splide, e));
            }),
              r &&
                (function () {
                  var t = Wt(e),
                    n = t.on;
                  n(yt, c),
                    n(Ht, f),
                    n([mt, Et], s),
                    l.push(t),
                    t.emit(Ft, e.splides);
                })();
          }
          function o() {
            l.forEach(function (e) {
              e.destroy();
            }),
              le(l);
          }
          function u(e, t) {
            var n = Wt(e);
            n.on(gt, function (e, n, r) {
              t.go(t.is(Gn) ? r : e);
            }),
              l.push(n);
          }
          function s() {
            De(t.Elements.list, cn, n.direction === Zt ? "vertical" : "");
          }
          function c(t) {
            e.go(t.index);
          }
          function f(e, t) {
            xe(ar, Jn(t)) && (c(e), Qe(t));
          }
          return {
            setup: oe(t.Media.set, { slideFocus: ge(a) ? r : a }, !0),
            mount: i,
            destroy: o,
            remount: function () {
              o(), i();
            },
          };
        },
        Wheel: function (e, t, n) {
          var r = Wt(e).bind,
            a = 0;
          function l(r) {
            if (r.cancelable) {
              var l = r.deltaY,
                i = l < 0,
                o = Xe(r),
                u = n.wheelMinThreshold || 0,
                s = n.wheelSleep || 0;
              lt(l) > u && o - a > s && (e.go(i ? "<" : ">"), (a = o)),
                (function (r) {
                  return (
                    !n.releaseWheel ||
                    e.state.is(ne) ||
                    -1 !== t.Controller.getAdjacent(r)
                  );
                })(i) && Qe(r);
            }
          }
          return {
            mount: function () {
              n.wheel && r(t.Elements.track, "wheel", l, Yn);
            },
          };
        },
        Live: function (e, t, n) {
          var r = Wt(e).on,
            a = t.Elements.track,
            l = n.live && !n.isNavigation,
            i = Fe("span", On),
            o = Qt(90, oe(u, !1));
          function u(e) {
            De(a, pn, e), e ? (Ce(a, i), o.start()) : ($e(i), o.cancel());
          }
          function s(e) {
            l && De(a, dn, e ? "off" : "polite");
          }
          return {
            mount: function () {
              l &&
                (s(!t.Autoplay.isPaused()),
                De(a, mn, !0),
                (i.textContent = "\u2026"),
                r(It, oe(s, !0)),
                r(Ut, oe(s, !1)),
                r([vt, Lt], oe(u, !0)));
            },
            disable: s,
            destroy: function () {
              Re(a, [dn, mn, pn]), $e(i);
            },
          };
        },
      }),
      ir = {
        type: "slide",
        role: "region",
        speed: 400,
        perPage: 1,
        cloneStatus: !0,
        arrows: !0,
        pagination: !0,
        paginationKeyboard: !0,
        interval: 5e3,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        resetProgress: !0,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
        drag: !0,
        direction: "ltr",
        trimSpace: !0,
        focusableNodes: "a, button, textarea, input, select, iframe",
        live: !0,
        classes: Hn,
        i18n: {
          prev: "Previous slide",
          next: "Next slide",
          first: "Go to first slide",
          last: "Go to last slide",
          slideX: "Go to slide %s",
          pageX: "Go to page %s",
          play: "Start autoplay",
          pause: "Pause autoplay",
          carousel: "carousel",
          slide: "slide",
          select: "Select a slide to show",
          slideLabel: "%s of %s",
        },
        reducedMotion: { speed: 0, rewindSpeed: 0, autoplay: "pause" },
      };
    function or(e, t, n) {
      var r = t.Slides;
      function a() {
        r.forEach(function (e) {
          e.style("transform", "translateX(-" + 100 * e.index + "%)");
        });
      }
      return {
        mount: function () {
          Wt(e).on([mt, St], a);
        },
        start: function (e, t) {
          r.style("transition", "opacity " + n.speed + "ms " + n.easing), ue(t);
        },
        cancel: se,
      };
    }
    function ur(e, t, n) {
      var r,
        a = t.Move,
        l = t.Controller,
        i = t.Scroll,
        o = t.Elements.list,
        u = oe(Ie, o, "transition");
      function s() {
        u(""), i.cancel();
      }
      return {
        mount: function () {
          Wt(e).bind(o, "transitionend", function (e) {
            e.target === o && r && (s(), r());
          });
        },
        start: function (t, o) {
          var s = a.toPosition(t, !0),
            c = a.getPosition(),
            f = (function (t) {
              var r = n.rewindSpeed;
              if (e.is(Qn) && r) {
                var a = l.getIndex(!0),
                  i = l.getEnd();
                if ((0 === a && t >= i) || (a >= i && 0 === t)) return r;
              }
              return n.speed;
            })(t);
          lt(s - c) >= 1 && f >= 1
            ? n.useScroll
              ? i.scroll(s, f, !1, o)
              : (u("transform " + f + "ms " + n.easing),
                a.translate(s, !0),
                (r = o))
            : (a.jump(t), o());
        },
        cancel: s,
      };
    }
    var sr = (function () {
        function e(t, n) {
          (this.event = Wt()),
            (this.Components = {}),
            (this.state = (function (e) {
              var t = e;
              return {
                set: function (e) {
                  t = e;
                },
                is: function (e) {
                  return xe(be(e), t);
                },
              };
            })(1)),
            (this.splides = []),
            (this._o = {}),
            (this._E = {});
          var r = he(t) ? Ge(document, t) : t;
          et(r, r + " is invalid."),
            (this.root = r),
            (n = Te(
              { label: Be(r, on) || "", labelledby: Be(r, un) || "" },
              ir,
              e.defaults,
              n || {}
            ));
          try {
            Te(n, JSON.parse(Be(r, Je)));
          } catch (a) {
            et(!1, "Invalid JSON");
          }
          this._o = Object.create(Te({}, n));
        }
        var t,
          n,
          r,
          a = e.prototype;
        return (
          (a.mount = function (e, t) {
            var n = this,
              r = this.state,
              a = this.Components;
            return (
              et(r.is([1, 7]), "Already mounted!"),
              r.set(1),
              (this._C = a),
              (this._T = t || this._T || (this.is(qn) ? or : ur)),
              (this._E = e || this._E),
              Le(Oe({}, lr, this._E, { Transition: this._T }), function (e, t) {
                var r = e(n, a, n._o);
                (a[t] = r), r.setup && r.setup();
              }),
              Le(a, function (e) {
                e.mount && e.mount();
              }),
              this.emit(mt),
              Ee(this.root, Tn),
              r.set(3),
              this.emit(ht),
              this
            );
          }),
          (a.sync = function (e) {
            return (
              this.splides.push({ splide: e }),
              e.splides.push({ splide: this, isParent: !0 }),
              this.state.is(3) &&
                (this._C.Sync.remount(), e.Components.Sync.remount()),
              this
            );
          }),
          (a.go = function (e) {
            return this._C.Controller.go(e), this;
          }),
          (a.on = function (e, t) {
            return this.event.on(e, t), this;
          }),
          (a.off = function (e) {
            return this.event.off(e), this;
          }),
          (a.emit = function (e) {
            var t;
            return (
              (t = this.event).emit.apply(t, [e].concat(ie(arguments, 1))), this
            );
          }),
          (a.add = function (e, t) {
            return this._C.Slides.add(e, t), this;
          }),
          (a.remove = function (e) {
            return this._C.Slides.remove(e), this;
          }),
          (a.is = function (e) {
            return this._o.type === e;
          }),
          (a.refresh = function () {
            return this.emit(St), this;
          }),
          (a.destroy = function (e) {
            void 0 === e && (e = !0);
            var t = this.event,
              n = this.state;
            return (
              n.is(1)
                ? Wt(this).on(ht, this.destroy.bind(this, e))
                : (Le(
                    this._C,
                    function (t) {
                      t.destroy && t.destroy(e);
                    },
                    !0
                  ),
                  t.emit(Ot),
                  t.destroy(),
                  e && le(this.splides),
                  n.set(7)),
              this
            );
          }),
          (t = e),
          (n = [
            {
              key: "options",
              get: function () {
                return this._o;
              },
              set: function (e) {
                this._C.Media.set(e, !0, !0);
              },
            },
            {
              key: "length",
              get: function () {
                return this._C.Slides.getLength(!0);
              },
            },
            {
              key: "index",
              get: function () {
                return this._C.Controller.getIndex();
              },
            },
          ]) && ee(t.prototype, n),
          r && ee(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          e
        );
      })(),
      cr = sr;
    (cr.defaults = {}), (cr.STATES = ae);
    var fr = [
      [mt, "onMounted"],
      [ht, "onReady"],
      [gt, "onMove"],
      [vt, "onMoved"],
      [yt, "onClick"],
      [bt, "onActive"],
      [wt, "onInactive"],
      [xt, "onVisible"],
      [kt, "onHidden"],
      [St, "onRefresh"],
      [Et, "onUpdated"],
      [Ct, "onResize"],
      [_t, "onResized"],
      [Nt, "onDrag"],
      [zt, "onDragging"],
      [Pt, "onDragged"],
      [jt, "onScroll"],
      [Lt, "onScrolled"],
      [Ot, "onDestroy"],
      [Tt, "onArrowsMounted"],
      [Mt, "onArrowsUpdated"],
      [Rt, "onPaginationMounted"],
      [Dt, "onPaginationUpdated"],
      [Ft, "onNavigationMounted"],
      [It, "onAutoplayPlay"],
      [At, "onAutoplayPlaying"],
      [Ut, "onAutoplayPause"],
      [Bt, "onLazyLoadLoaded"],
    ];
    function dr() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return t.filter(Boolean).join(" ");
    }
    function pr(e) {
      return null !== e && "object" === typeof e;
    }
    function mr(e, t) {
      if (Array.isArray(e) && Array.isArray(t))
        return (
          e.length === t.length &&
          !e.some(function (e, n) {
            return !mr(e, t[n]);
          })
        );
      if (pr(e) && pr(t)) {
        var n = Object.keys(e),
          r = Object.keys(t);
        return (
          n.length === r.length &&
          !n.some(function (n) {
            return (
              !Object.prototype.hasOwnProperty.call(t, n) || !mr(e[n], t[n])
            );
          })
        );
      }
      return e === t;
    }
    function hr(e, t) {
      var n = e;
      return (
        (function (e, t) {
          if (e)
            for (var n = Object.keys(e), r = 0; r < n.length; r++) {
              var a = n[r];
              if ("__proto__" !== a && !1 === t(e[a], a)) break;
            }
        })(t, function (e, t) {
          Array.isArray(e)
            ? (n[t] = e.slice())
            : pr(e)
            ? (n[t] = hr(pr(n[t]) ? n[t] : {}, e))
            : (n[t] = e);
        }),
        n
      );
    }
    var gr = function (t) {
        var n = t.children,
          r = t.className,
          a = X(t, Y);
        return e.createElement(
          "div",
          K({ className: dr("splide__track", r) }, a),
          e.createElement("ul", { className: "splide__list" }, n)
        );
      },
      vr = (function (t) {
        !(function (e, t) {
          if ("function" !== typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && $(e, t);
        })(i, t);
        var n,
          r,
          a,
          l = G(i);
        function i() {
          var t;
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, i),
            ((t = l.apply(this, arguments)).splideRef = e.createRef()),
            (t.slides = []),
            t
          );
        }
        return (
          (n = i),
          (r = [
            {
              key: "componentDidMount",
              value: function () {
                var e = this.props,
                  t = e.options,
                  n = e.extensions,
                  r = e.transition,
                  a = this.splideRef.current;
                a &&
                  ((this.splide = new cr(a, t)),
                  this.bind(this.splide),
                  this.splide.mount(n, r),
                  (this.options = hr({}, t || {})),
                  (this.slides = this.getSlides()));
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.splide && (this.splide.destroy(), (this.splide = void 0)),
                  (this.options = void 0),
                  (this.slides.length = 0);
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                if (this.splide) {
                  var e = this.props.options;
                  e &&
                    !mr(this.options, e) &&
                    ((this.splide.options = e), (this.options = hr({}, e)));
                  var t,
                    n,
                    r = this.getSlides();
                  (t = this.slides),
                    (n = r),
                    (t.length !== n.length ||
                      t.some(function (e, t) {
                        return e !== n[t];
                      })) &&
                      (this.splide.refresh(), (this.slides = r));
                }
              },
            },
            {
              key: "sync",
              value: function (e) {
                var t;
                null == (t = this.splide) || t.sync(e);
              },
            },
            {
              key: "go",
              value: function (e) {
                var t;
                null == (t = this.splide) || t.go(e);
              },
            },
            {
              key: "getSlides",
              value: function () {
                var e;
                if (this.splide) {
                  var t =
                    null == (e = this.splide.Components.Elements)
                      ? void 0
                      : e.list.children;
                  return (t && Array.prototype.slice.call(t)) || [];
                }
                return [];
              },
            },
            {
              key: "bind",
              value: function (e) {
                var t = this;
                fr.forEach(function (n) {
                  var r = d(n, 2),
                    a = r[0],
                    l = r[1],
                    i = t.props[l];
                  "function" === typeof i &&
                    e.on(a, function () {
                      for (
                        var t = arguments.length, n = new Array(t), r = 0;
                        r < t;
                        r++
                      )
                        n[r] = arguments[r];
                      i.apply(void 0, [e].concat(n));
                    });
                });
              },
            },
            {
              key: "omit",
              value: function (e, t) {
                return (
                  t.forEach(function (t) {
                    Object.prototype.hasOwnProperty.call(e, t) && delete e[t];
                  }),
                  e
                );
              },
            },
            {
              key: "render",
              value: function () {
                var t = this.props,
                  n = t.className,
                  r = t.tag,
                  a = void 0 === r ? "div" : r,
                  l = t.hasTrack,
                  i = void 0 === l || l,
                  o = t.children,
                  u = X(t, Z);
                return e.createElement(
                  a,
                  K(
                    { className: dr("splide", n), ref: this.splideRef },
                    this.omit(
                      u,
                      ["options"].concat(
                        U(
                          fr.map(function (e) {
                            return e[1];
                          })
                        )
                      )
                    )
                  ),
                  i ? e.createElement(gr, null, o) : o
                );
              },
            },
          ]),
          r && V(n.prototype, r),
          a && V(n, a),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          i
        );
      })(e.Component),
      yr = function (t) {
        var n = t.children,
          r = t.className,
          a = X(t, J);
        return e.createElement(
          "li",
          K({ className: dr("splide__slide", r) }, a),
          n
        );
      };
    var br = function () {
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("h1", {
              className: "text-black font-bold text-2xl text-center py-2  ",
              children: "Top Picks",
            }),
            (0, r.jsx)("div", {
              className: "hidden lg:flex max-w[1520px]  m-auto py-2 px-2  ",
              children: (0, r.jsx)(vr, {
                options: {
                  perPage: 4,
                  gap: "0.5rem",
                  drag: "free",
                  arrows: !1,
                },
                children: l.map(function (e) {
                  return (0,
                  r.jsx)(yr, { children: (0, r.jsxs)("div", { className: "rounded-3xl relative  ", children: [(0, r.jsxs)("div", { className: "absolute w-full h-full bg-black/50 rounded-3xl text-white ", children: [(0, r.jsx)("p", { className: "px-2", children: e.title }), (0, r.jsx)("p", { className: "px-2 font-bold text-2xl pt-4", children: e.price }), (0, r.jsx)("button", { className: "border-dotted border-white text-white mx-2 absolute bottom-4 ", children: "Add to Cart" })] }), (0, r.jsx)("img", { className: "h-[200px] w-full object-cover rounded-3xl cursor-pointer hover:scale-105 ease-out duration-300 ", src: e.img, alt: e.title })] }) }, e.id);
                }),
              }),
            }),
          ],
        });
      },
      wr = function () {
        return (0, r.jsxs)("div", {
          className: "max-w-[1520px] m-auto px-4 py-2 bg-[#24262b] ",
          children: [
            (0, r.jsxs)("div", {
              className: "py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ",
              children: [
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("h1", {
                      className: "w-full text-3xl font-bold text-white",
                      children: "Horizon Games",
                    }),
                    (0, r.jsx)("p", {
                      children: "Explore the gaming world with us!",
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex justify-between md:w-[75%] my-6",
                      children: [
                        (0, r.jsx)(O, { size: 30 }),
                        (0, r.jsx)(T, { size: 30 }),
                        (0, r.jsx)(R, { size: 30 }),
                        (0, r.jsx)(R, { size: 30 }),
                        (0, r.jsx)(D, { size: 30 }),
                      ],
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: "lg:col-span-2 flex justify-between mt-6",
                  children: [
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)("h6", {
                          className: "font-medium text-[#9b9b9b]",
                          children: "Popular Games",
                        }),
                        (0, r.jsxs)("ul", {
                          children: [
                            (0, r.jsx)("li", {
                              className: "py-2 text-sm",
                              children: "Fortnite",
                            }),
                            (0, r.jsx)("li", {
                              className: "py-2 text-sm",
                              children: "Call of Duty",
                            }),
                            (0, r.jsx)("li", {
                              className: "py-2 text-sm",
                              children: "League of Legends",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)("h6", {
                          className: "font-medium text-[#9b9b9b]",
                          children: "Gaming Communities",
                        }),
                        (0, r.jsxs)("ul", {
                          children: [
                            (0, r.jsx)("li", {
                              className: "py-2 text-sm",
                              children: "eSports",
                            }),
                            (0, r.jsx)("li", {
                              className: "py-2 text-sm",
                              children: "RPG Enthusiasts",
                            }),
                            (0, r.jsx)("li", {
                              className: "py-2 text-sm",
                              children: "Streamers",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)("h6", {
                          className: "font-medium text-[#9b9b9b]",
                          children: "Game Reviews",
                        }),
                        (0, r.jsxs)("ul", {
                          children: [
                            (0, r.jsx)("li", {
                              className: "py-2 text-sm",
                              children: "Latest Game Releases",
                            }),
                            (0, r.jsx)("li", {
                              className: "py-2 text-sm",
                              children: "Game Ratings",
                            }),
                            (0, r.jsx)("li", {
                              className: "py-2 text-sm",
                              children: "Player Insights",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)("div", {
              children: (0, r.jsx)("h1", {
                className: "flex text-white justify-center",
                children: "\xa9 2023 Horizon Games. All rights reserved.",
              }),
            }),
          ],
        });
      };
    var xr = function () {
      return (0, r.jsxs)("div", {
        className: "App",
        children: [
          (0, r.jsx)(A, {}),
          (0, r.jsx)(C, {}),
          (0, r.jsx)(a, {}),
          (0, r.jsx)(br, {}),
          (0, r.jsx)(N, {}),
          (0, r.jsx)(u, {}),
          (0, r.jsx)(s, {}),
          (0, r.jsx)(wr, {}),
        ],
      });
    };
    t.createRoot(document.getElementById("root")).render(
      (0, r.jsx)(e.StrictMode, { children: (0, r.jsx)(xr, {}) })
    );
  })();
})();
//# sourceMappingURL=main.7f147232.js.map
