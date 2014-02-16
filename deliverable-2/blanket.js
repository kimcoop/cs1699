/*! blanket - v1.1.5 */
"undefined" != typeof QUnit && (QUnit.config.autostart = !1),
function(a) {
    /*
  Copyright (C) 2012 Ariya Hidayat <ariya.hidayat@gmail.com>
  Copyright (C) 2012 Mathias Bynens <mathias@qiwi.be>
  Copyright (C) 2012 Joost-Wim Boekesteijn <joost-wim@boekesteijn.nl>
  Copyright (C) 2012 Kris Kowal <kris.kowal@cixar.com>
  Copyright (C) 2012 Yusuke Suzuki <utatane.tea@gmail.com>
  Copyright (C) 2012 Arpad Borsos <arpad.borsos@googlemail.com>
  Copyright (C) 2011 Ariya Hidayat <ariya.hidayat@gmail.com>

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
  ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
! function(b, c) {
        "use strict";
        "function" == typeof a && a.amd ? a(["exports"], c) : c("undefined" != typeof exports ? exports : b.esprima = {})
    }(this, function(a) {
        "use strict";

        function b(a, b) {
            if (!a) throw new Error("ASSERT: " + b)
        }
        function c(a, b) {
            return mc.slice(a, b)
        }
        function d(a) {
            return "0123456789".indexOf(a) >= 0
        }
        function e(a) {
            return "0123456789abcdefABCDEF".indexOf(a) >= 0
        }
        function f(a) {
            return "01234567".indexOf(a) >= 0
        }
        function g(a) {
            return " " === a || " " === a || "" === a || "\f" === a || "\xa0" === a || a.charCodeAt(0) >= 5760 && "\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\ufeff".indexOf(a) >= 0
        }
        function h(a) {
            return "\n" === a || "\r" === a || "\u2028" === a || "\u2029" === a
        }
        function i(a) {
            return "$" === a || "_" === a || "\\" === a || a >= "a" && "z" >= a || a >= "A" && "Z" >= a || a.charCodeAt(0) >= 128 && lc.NonAsciiIdentifierStart.test(a)
        }
        function j(a) {
            return "$" === a || "_" === a || "\\" === a || a >= "a" && "z" >= a || a >= "A" && "Z" >= a || a >= "0" && "9" >= a || a.charCodeAt(0) >= 128 && lc.NonAsciiIdentifierPart.test(a)
        }
        function k(a) {
            switch (a) {
                case "class":
                case "enum":
                case "export":
                case "extends":
                case "import":
                case "super":
                    return !0
            }
            return !1
        }
        function l(a) {
            switch (a) {
                case "implements":
                case "interface":
                case "package":
                case "private":
                case "protected":
                case "public":
                case "static":
                case "yield":
                case "let":
                    return !0
            }
            return !1
        }
        function m(a) {
            return "eval" === a || "arguments" === a
        }
        function n(a) {
            var b = !1;
            switch (a.length) {
                case 2:
                    b = "if" === a || "in" === a || "do" === a;
                    break;
                case 3:
                    b = "var" === a || "for" === a || "new" === a || "try" === a;
                    break;
                case 4:
                    b = "this" === a || "else" === a || "case" === a || "void" === a || "with" === a;
                    break;
                case 5:
                    b = "while" === a || "break" === a || "catch" === a || "throw" === a;
                    break;
                case 6:
                    b = "return" === a || "typeof" === a || "delete" === a || "switch" === a;
                    break;
                case 7:
                    b = "default" === a || "finally" === a;
                    break;
                case 8:
                    b = "function" === a || "continue" === a || "debugger" === a;
                    break;
                case 10:
                    b = "instanceof" === a
            }
            if (b) return !0;
            switch (a) {
                case "const":
                    return !0;
                case "yield":
                case "let":
                    return !0
            }
            return nc && l(a) ? !0 : k(a)
        }
        function o() {
            var a, b, c;
            for (b = !1, c = !1; rc > oc;) if (a = mc[oc], c) a = mc[oc++], h(a) && (c = !1, "\r" === a && "\n" === mc[oc] && ++oc, ++pc, qc = oc);
            else if (b) h(a) ? ("\r" === a && "\n" === mc[oc + 1] && ++oc, ++pc, ++oc, qc = oc, oc >= rc && A({}, kc.UnexpectedToken, "ILLEGAL")) : (a = mc[oc++], oc >= rc && A({}, kc.UnexpectedToken, "ILLEGAL"), "*" === a && (a = mc[oc], "/" === a && (++oc, b = !1)));
            else if ("/" === a) if (a = mc[oc + 1], "/" === a) oc += 2, c = !0;
            else {
                if ("*" !== a) break;
                oc += 2, b = !0, oc >= rc && A({}, kc.UnexpectedToken, "ILLEGAL")
            } else if (g(a))++oc;
            else {
                if (!h(a)) break;
                ++oc, "\r" === a && "\n" === mc[oc] && ++oc, ++pc, qc = oc
            }
        }
        function p(a) {
            var b, c, d, f = 0;
            for (c = "u" === a ? 4 : 2, b = 0; c > b; ++b) {
                if (!(rc > oc && e(mc[oc]))) return "";
                d = mc[oc++], f = 16 * f + "0123456789abcdef".indexOf(d.toLowerCase())
            }
            return String.fromCharCode(f)
        }
        function q() {
            var a, b, c, d;
            if (a = mc[oc], i(a)) {
                if (b = oc, "\\" === a) {
                    if (++oc, "u" !== mc[oc]) return;
                    if (++oc, d = oc, a = p("u")) {
                        if ("\\" === a || !i(a)) return;
                        c = a
                    } else oc = d, c = "u"
                } else c = mc[oc++];
                for (; rc > oc && (a = mc[oc], j(a));) if ("\\" === a) {
                    if (++oc, "u" !== mc[oc]) return;
                    if (++oc, d = oc, a = p("u")) {
                        if ("\\" === a || !j(a)) return;
                        c += a
                    } else oc = d, c += "u"
                } else c += mc[oc++];
                return 1 === c.length ? {
                    type: gc.Identifier,
                    value: c,
                    lineNumber: pc,
                    lineStart: qc,
                    range: [b, oc]
                } : n(c) ? {
                    type: gc.Keyword,
                    value: c,
                    lineNumber: pc,
                    lineStart: qc,
                    range: [b, oc]
                } : "null" === c ? {
                    type: gc.NullLiteral,
                    value: c,
                    lineNumber: pc,
                    lineStart: qc,
                    range: [b, oc]
                } : "true" === c || "false" === c ? {
                    type: gc.BooleanLiteral,
                    value: c,
                    lineNumber: pc,
                    lineStart: qc,
                    range: [b, oc]
                } : {
                    type: gc.Identifier,
                    value: c,
                    lineNumber: pc,
                    lineStart: qc,
                    range: [b, oc]
                }
            }
        }
        function r() {
            var a, b, c, e = oc,
                f = mc[oc];
            return ";" === f || "{" === f || "}" === f ? (++oc, {
                type: gc.Punctuator,
                value: f,
                lineNumber: pc,
                lineStart: qc,
                range: [e, oc]
            }) : "," === f || "(" === f || ")" === f ? (++oc, {
                type: gc.Punctuator,
                value: f,
                lineNumber: pc,
                lineStart: qc,
                range: [e, oc]
            }) : (a = mc[oc + 1], "." !== f || d(a) ? (b = mc[oc + 2], c = mc[oc + 3], ">" === f && ">" === a && ">" === b && "=" === c ? (oc += 4, {
                type: gc.Punctuator,
                value: ">>>=",
                lineNumber: pc,
                lineStart: qc,
                range: [e, oc]
            }) : "=" === f && "=" === a && "=" === b ? (oc += 3, {
                type: gc.Punctuator,
                value: "===",
                lineNumber: pc,
                lineStart: qc,
                range: [e, oc]
            }) : "!" === f && "=" === a && "=" === b ? (oc += 3, {
                type: gc.Punctuator,
                value: "!==",
                lineNumber: pc,
                lineStart: qc,
                range: [e, oc]
            }) : ">" === f && ">" === a && ">" === b ? (oc += 3, {
                type: gc.Punctuator,
                value: ">>>",
                lineNumber: pc,
                lineStart: qc,
                range: [e, oc]
            }) : "<" === f && "<" === a && "=" === b ? (oc += 3, {
                type: gc.Punctuator,
                value: "<<=",
                lineNumber: pc,
                lineStart: qc,
                range: [e, oc]
            }) : ">" === f && ">" === a && "=" === b ? (oc += 3, {
                type: gc.Punctuator,
                value: ">>=",
                lineNumber: pc,
                lineStart: qc,
                range: [e, oc]
            }) : "=" === a && "<>=!+-*%&|^/".indexOf(f) >= 0 ? (oc += 2, {
                type: gc.Punctuator,
                value: f + a,
                lineNumber: pc,
                lineStart: qc,
                range: [e, oc]
            }) : f === a && "+-<>&|".indexOf(f) >= 0 && "+-<>&|".indexOf(a) >= 0 ? (oc += 2, {
                type: gc.Punctuator,
                value: f + a,
                lineNumber: pc,
                lineStart: qc,
                range: [e, oc]
            }) : "[]<>+-*%&|^!~?:=/".indexOf(f) >= 0 ? {
                type: gc.Punctuator,
                value: mc[oc++],
                lineNumber: pc,
                lineStart: qc,
                range: [e, oc]
            } : void 0) : {
                type: gc.Punctuator,
                value: mc[oc++],
                lineNumber: pc,
                lineStart: qc,
                range: [e, oc]
            })
        }
        function s() {
            var a, c, g;
            if (g = mc[oc], b(d(g) || "." === g, "Numeric literal must start with a decimal digit or a decimal point"), c = oc, a = "", "." !== g) {
                if (a = mc[oc++], g = mc[oc], "0" === a) {
                    if ("x" === g || "X" === g) {
                        for (a += mc[oc++]; rc > oc && (g = mc[oc], e(g));) a += mc[oc++];
                        return a.length <= 2 && A({}, kc.UnexpectedToken, "ILLEGAL"), rc > oc && (g = mc[oc], i(g) && A({}, kc.UnexpectedToken, "ILLEGAL")), {
                            type: gc.NumericLiteral,
                            value: parseInt(a, 16),
                            lineNumber: pc,
                            lineStart: qc,
                            range: [c, oc]
                        }
                    }
                    if (f(g)) {
                        for (a += mc[oc++]; rc > oc && (g = mc[oc], f(g));) a += mc[oc++];
                        return rc > oc && (g = mc[oc], (i(g) || d(g)) && A({}, kc.UnexpectedToken, "ILLEGAL")), {
                            type: gc.NumericLiteral,
                            value: parseInt(a, 8),
                            octal: !0,
                            lineNumber: pc,
                            lineStart: qc,
                            range: [c, oc]
                        }
                    }
                    d(g) && A({}, kc.UnexpectedToken, "ILLEGAL")
                }
                for (; rc > oc && (g = mc[oc], d(g));) a += mc[oc++]
            }
            if ("." === g) for (a += mc[oc++]; rc > oc && (g = mc[oc], d(g));) a += mc[oc++];
            if ("e" === g || "E" === g) if (a += mc[oc++], g = mc[oc], ("+" === g || "-" === g) && (a += mc[oc++]), g = mc[oc], d(g)) for (a += mc[oc++]; rc > oc && (g = mc[oc], d(g));) a += mc[oc++];
            else g = "character " + g, oc >= rc && (g = "<end>"), A({}, kc.UnexpectedToken, "ILLEGAL");
            return rc > oc && (g = mc[oc], i(g) && A({}, kc.UnexpectedToken, "ILLEGAL")), {
                type: gc.NumericLiteral,
                value: parseFloat(a),
                lineNumber: pc,
                lineStart: qc,
                range: [c, oc]
            }
        }
        function t() {
            var a, c, d, e, g, i, j = "",
                k = !1;
            for (a = mc[oc], b("'" === a || '"' === a, "String literal must starts with a quote"), c = oc, ++oc; rc > oc;) {
                if (d = mc[oc++], d === a) {
                    a = "";
                    break
                }
                if ("\\" === d) if (d = mc[oc++], h(d))++pc, "\r" === d && "\n" === mc[oc] && ++oc;
                else switch (d) {
                    case "n":
                        j += "\n";
                        break;
                    case "r":
                        j += "\r";
                        break;
                    case "t":
                        j += "  ";
                        break;
                    case "u":
                    case "x":
                        i = oc, g = p(d), g ? j += g : (oc = i, j += d);
                        break;
                    case "b":
                        j += "\b";
                        break;
                    case "f":
                        j += "\f";
                        break;
                    case "v":
                        j += "";
                        break;
                    default:
                        f(d) ? (e = "01234567".indexOf(d), 0 !== e && (k = !0), rc > oc && f(mc[oc]) && (k = !0, e = 8 * e + "01234567".indexOf(mc[oc++]), "0123".indexOf(d) >= 0 && rc > oc && f(mc[oc]) && (e = 8 * e + "01234567".indexOf(mc[oc++]))), j += String.fromCharCode(e)) : j += d
                } else {
                    if (h(d)) break;
                    j += d
                }
            }
            return "" !== a && A({}, kc.UnexpectedToken, "ILLEGAL"), {
                type: gc.StringLiteral,
                value: j,
                octal: k,
                lineNumber: pc,
                lineStart: qc,
                range: [c, oc]
            }
        }
        function u() {
            var a, c, d, e, f, g, i, k = !1,
                l = !1;
            for (sc = null, o(), d = oc, c = mc[oc], b("/" === c, "Regular expression literal must start with a slash"), a = mc[oc++]; rc > oc;) if (c = mc[oc++], a += c, "\\" === c) c = mc[oc++], h(c) && A({}, kc.UnterminatedRegExp), a += c;
            else if (k) "]" === c && (k = !1);
            else {
                if ("/" === c) {
                    l = !0;
                    break
                }
                "[" === c ? k = !0 : h(c) && A({}, kc.UnterminatedRegExp)
            }
            for (l || A({}, kc.UnterminatedRegExp), e = a.substr(1, a.length - 2), f = ""; rc > oc && (c = mc[oc], j(c));) if (++oc, "\\" === c && rc > oc) if (c = mc[oc], "u" === c) if (++oc, i = oc, c = p("u")) for (f += c, a += "\\u"; oc > i; ++i) a += mc[i];
            else oc = i, f += "u", a += "\\u";
            else a += "\\";
            else f += c, a += c;
            try {
                g = new RegExp(e, f)
            } catch (m) {
                A({}, kc.InvalidRegExp)
            }
            return {
                literal: a,
                value: g,
                range: [d, oc]
            }
        }
        function v(a) {
            return a.type === gc.Identifier || a.type === gc.Keyword || a.type === gc.BooleanLiteral || a.type === gc.NullLiteral
        }
        function w() {
            var a, b;
            return o(), oc >= rc ? {
                type: gc.EOF,
                lineNumber: pc,
                lineStart: qc,
                range: [oc, oc]
            } : (b = r(), "undefined" != typeof b ? b : (a = mc[oc], "'" === a || '"' === a ? t() : "." === a || d(a) ? s() : (b = q(), "undefined" != typeof b ? b : void A({}, kc.UnexpectedToken, "ILLEGAL"))))
        }
        function x() {
            var a;
            return sc ? (oc = sc.range[1], pc = sc.lineNumber, qc = sc.lineStart, a = sc, sc = null, a) : (sc = null, w())
        }
        function y() {
            var a, b, c;
            return null !== sc ? sc : (a = oc, b = pc, c = qc, sc = w(), oc = a, pc = b, qc = c, sc)
        }
        function z() {
            var a, b, c, d;
            return a = oc, b = pc, c = qc, o(), d = pc !== b, oc = a, pc = b, qc = c, d
        }
        function A(a, b) {
            var c, d = Array.prototype.slice.call(arguments, 2),
                e = b.replace(/%(\d)/g, function(a, b) {
                    return d[b] || ""
                });
            throw "number" == typeof a.lineNumber ? (c = new Error("Line " + a.lineNumber + ": " + e), c.index = a.range[0], c.lineNumber = a.lineNumber, c.column = a.range[0] - qc + 1) : (c = new Error("Line " + pc + ": " + e), c.index = oc, c.lineNumber = pc, c.column = oc - qc + 1), c
        }
        function B() {
            try {
                A.apply(null, arguments)
            } catch (a) {
                if (!uc.errors) throw a;
                uc.errors.push(a)
            }
        }
        function C(a) {
            if (a.type === gc.EOF && A(a, kc.UnexpectedEOS), a.type === gc.NumericLiteral && A(a, kc.UnexpectedNumber), a.type === gc.StringLiteral && A(a, kc.UnexpectedString), a.type === gc.Identifier && A(a, kc.UnexpectedIdentifier), a.type === gc.Keyword) {
                if (k(a.value)) A(a, kc.UnexpectedReserved);
                else if (nc && l(a.value)) return void B(a, kc.StrictReservedWord);
                A(a, kc.UnexpectedToken, a.value)
            }
            A(a, kc.UnexpectedToken, a.value)
        }
        function D(a) {
            var b = x();
            (b.type !== gc.Punctuator || b.value !== a) && C(b)
        }
        function E(a) {
            var b = x();
            (b.type !== gc.Keyword || b.value !== a) && C(b)
        }
        function F(a) {
            var b = y();
            return b.type === gc.Punctuator && b.value === a
        }
        function G(a) {
            var b = y();
            return b.type === gc.Keyword && b.value === a
        }
        function H() {
            var a = y(),
                b = a.value;
            return a.type !== gc.Punctuator ? !1 : "=" === b || "*=" === b || "/=" === b || "%=" === b || "+=" === b || "-=" === b || "<<=" === b || ">>=" === b || ">>>=" === b || "&=" === b || "^=" === b || "|=" === b
        }
        function I() {
            var a, b;
            if (";" === mc[oc]) return void x();
            if (b = pc, o(), pc === b) {
                if (F(";")) return void x();
                a = y(), a.type === gc.EOF || F("}") || C(a)
            }
        }
        function J(a) {
            return a.type === ic.Identifier || a.type === ic.MemberExpression
        }
        function K() {
            var a = [];
            for (D("["); !F("]");) F(",") ? (x(), a.push(null)) : (a.push(jb()), F("]") || D(","));
            return D("]"), {
                type: ic.ArrayExpression,
                elements: a
            }
        }
        function L(a, b) {
            var c, d;
            return c = nc, d = Kb(), b && nc && m(a[0].name) && B(b, kc.StrictParamName), nc = c, {
                type: ic.FunctionExpression,
                id: null,
                params: a,
                defaults: [],
                body: d,
                rest: null,
                generator: !1,
                expression: !1
            }
        }
        function M() {
            var a = x();
            return a.type === gc.StringLiteral || a.type === gc.NumericLiteral ? (nc && a.octal && B(a, kc.StrictOctalLiteral), Wb(a)) : {
                type: ic.Identifier,
                name: a.value
            }
        }
        function N() {
            var a, b, c, d;
            return a = y(), a.type === gc.Identifier ? (c = M(), "get" !== a.value || F(":") ? "set" !== a.value || F(":") ? (D(":"), {
                type: ic.Property,
                key: c,
                value: jb(),
                kind: "init"
            }) : (b = M(), D("("), a = y(), a.type !== gc.Identifier ? (D(")"), B(a, kc.UnexpectedToken, a.value), {
                type: ic.Property,
                key: b,
                value: L([]),
                kind: "set"
            }) : (d = [nb()], D(")"), {
                type: ic.Property,
                key: b,
                value: L(d, a),
                kind: "set"
            })) : (b = M(), D("("), D(")"), {
                type: ic.Property,
                key: b,
                value: L([]),
                kind: "get"
            })) : a.type !== gc.EOF && a.type !== gc.Punctuator ? (b = M(), D(":"), {
                type: ic.Property,
                key: b,
                value: jb(),
                kind: "init"
            }) : void C(a)
        }
        function O() {
            var a, b, c, d = [],
                e = {}, f = String;
            for (D("{"); !F("}");) a = N(), b = a.key.type === ic.Identifier ? a.key.name : f(a.key.value), c = "init" === a.kind ? jc.Data : "get" === a.kind ? jc.Get : jc.Set, Object.prototype.hasOwnProperty.call(e, b) ? (e[b] === jc.Data ? nc && c === jc.Data ? B({}, kc.StrictDuplicateProperty) : c !== jc.Data && B({}, kc.AccessorDataProperty) : c === jc.Data ? B({}, kc.AccessorDataProperty) : e[b] & c && B({}, kc.AccessorGetSet), e[b] |= c) : e[b] = c, d.push(a), F("}") || D(",");
            return D("}"), {
                type: ic.ObjectExpression,
                properties: d
            }
        }
        function P() {
            var a;
            return D("("), a = kb(), D(")"), a
        }
        function Q() {
            var a = y(),
                b = a.type;
            if (b === gc.Identifier) return {
                type: ic.Identifier,
                name: x().value
            };
            if (b === gc.StringLiteral || b === gc.NumericLiteral) return nc && a.octal && B(a, kc.StrictOctalLiteral), Wb(x());
            if (b === gc.Keyword) {
                if (G("this")) return x(), {
                    type: ic.ThisExpression
                };
                if (G("function")) return Mb()
            }
            return b === gc.BooleanLiteral ? (x(), a.value = "true" === a.value, Wb(a)) : b === gc.NullLiteral ? (x(), a.value = null, Wb(a)) : F("[") ? K() : F("{") ? O() : F("(") ? P() : F("/") || F("/=") ? Wb(u()) : C(x())
        }
        function R() {
            var a = [];
            if (D("("), !F(")")) for (; rc > oc && (a.push(jb()), !F(")"));) D(",");
            return D(")"), a
        }
        function S() {
            var a = x();
            return v(a) || C(a), {
                type: ic.Identifier,
                name: a.value
            }
        }
        function T() {
            return D("."), S()
        }
        function U() {
            var a;
            return D("["), a = kb(), D("]"), a
        }
        function V() {
            var a;
            return E("new"), a = {
                type: ic.NewExpression,
                callee: X(),
                arguments: []
            }, F("(") && (a.arguments = R()), a
        }
        function W() {
            var a;
            for (a = G("new") ? V() : Q(); F(".") || F("[") || F("(");) a = F("(") ? {
                type: ic.CallExpression,
                callee: a,
                arguments: R()
            } : F("[") ? {
                type: ic.MemberExpression,
                computed: !0,
                object: a,
                property: U()
            } : {
                type: ic.MemberExpression,
                computed: !1,
                object: a,
                property: T()
            };
            return a
        }
        function X() {
            var a;
            for (a = G("new") ? V() : Q(); F(".") || F("[");) a = F("[") ? {
                type: ic.MemberExpression,
                computed: !0,
                object: a,
                property: U()
            } : {
                type: ic.MemberExpression,
                computed: !1,
                object: a,
                property: T()
            };
            return a
        }
        function Y() {
            var a, b = W();
            return a = y(), a.type !== gc.Punctuator ? b : (!F("++") && !F("--") || z() || (nc && b.type === ic.Identifier && m(b.name) && B({}, kc.StrictLHSPostfix), J(b) || B({}, kc.InvalidLHSInAssignment), b = {
                type: ic.UpdateExpression,
                operator: x().value,
                argument: b,
                prefix: !1
            }), b)
        }
        function Z() {
            var a, b;
            return a = y(), a.type !== gc.Punctuator && a.type !== gc.Keyword ? Y() : F("++") || F("--") ? (a = x(), b = Z(), nc && b.type === ic.Identifier && m(b.name) && B({}, kc.StrictLHSPrefix), J(b) || B({}, kc.InvalidLHSInAssignment), b = {
                type: ic.UpdateExpression,
                operator: a.value,
                argument: b,
                prefix: !0
            }) : F("+") || F("-") || F("~") || F("!") ? b = {
                type: ic.UnaryExpression,
                operator: x().value,
                argument: Z(),
                prefix: !0
            } : G("delete") || G("void") || G("typeof") ? (b = {
                type: ic.UnaryExpression,
                operator: x().value,
                argument: Z(),
                prefix: !0
            }, nc && "delete" === b.operator && b.argument.type === ic.Identifier && B({}, kc.StrictDelete), b) : Y()
        }
        function $() {
            for (var a = Z(); F("*") || F("/") || F("%");) a = {
                type: ic.BinaryExpression,
                operator: x().value,
                left: a,
                right: Z()
            };
            return a
        }
        function _() {
            for (var a = $(); F("+") || F("-");) a = {
                type: ic.BinaryExpression,
                operator: x().value,
                left: a,
                right: $()
            };
            return a
        }
        function ab() {
            for (var a = _(); F("<<") || F(">>") || F(">>>");) a = {
                type: ic.BinaryExpression,
                operator: x().value,
                left: a,
                right: _()
            };
            return a
        }
        function bb() {
            var a, b;
            for (b = tc.allowIn, tc.allowIn = !0, a = ab(); F("<") || F(">") || F("<=") || F(">=") || b && G("in") || G("instanceof");) a = {
                type: ic.BinaryExpression,
                operator: x().value,
                left: a,
                right: ab()
            };
            return tc.allowIn = b, a
        }
        function cb() {
            for (var a = bb(); F("==") || F("!=") || F("===") || F("!==");) a = {
                type: ic.BinaryExpression,
                operator: x().value,
                left: a,
                right: bb()
            };
            return a
        }
        function db() {
            for (var a = cb(); F("&");) x(), a = {
                type: ic.BinaryExpression,
                operator: "&",
                left: a,
                right: cb()
            };
            return a
        }
        function eb() {
            for (var a = db(); F("^");) x(), a = {
                type: ic.BinaryExpression,
                operator: "^",
                left: a,
                right: db()
            };
            return a
        }
        function fb() {
            for (var a = eb(); F("|");) x(), a = {
                type: ic.BinaryExpression,
                operator: "|",
                left: a,
                right: eb()
            };
            return a
        }
        function gb() {
            for (var a = fb(); F("&&");) x(), a = {
                type: ic.LogicalExpression,
                operator: "&&",
                left: a,
                right: fb()
            };
            return a
        }
        function hb() {
            for (var a = gb(); F("||");) x(), a = {
                type: ic.LogicalExpression,
                operator: "||",
                left: a,
                right: gb()
            };
            return a
        }
        function ib() {
            var a, b, c;
            return a = hb(), F("?") && (x(), b = tc.allowIn, tc.allowIn = !0, c = jb(), tc.allowIn = b, D(":"), a = {
                type: ic.ConditionalExpression,
                test: a,
                consequent: c,
                alternate: jb()
            }), a
        }
        function jb() {
            var a, b;
            return a = y(), b = ib(), H() && (J(b) || B({}, kc.InvalidLHSInAssignment), nc && b.type === ic.Identifier && m(b.name) && B(a, kc.StrictLHSAssignment), b = {
                type: ic.AssignmentExpression,
                operator: x().value,
                left: b,
                right: jb()
            }), b
        }
        function kb() {
            var a = jb();
            if (F(",")) for (a = {
                type: ic.SequenceExpression,
                expressions: [a]
            }; rc > oc && F(",");) x(), a.expressions.push(jb());
            return a
        }
        function lb() {
            for (var a, b = []; rc > oc && !F("}") && (a = Nb(), "undefined" != typeof a);) b.push(a);
            return b
        }
        function mb() {
            var a;
            return D("{"), a = lb(), D("}"), {
                type: ic.BlockStatement,
                body: a
            }
        }
        function nb() {
            var a = x();
            return a.type !== gc.Identifier && C(a), {
                type: ic.Identifier,
                name: a.value
            }
        }
        function ob(a) {
            var b = nb(),
                c = null;
            return nc && m(b.name) && B({}, kc.StrictVarName), "const" === a ? (D("="), c = jb()) : F("=") && (x(), c = jb()), {
                type: ic.VariableDeclarator,
                id: b,
                init: c
            }
        }
        function pb(a) {
            var b = [];
            do {
                if (b.push(ob(a)), !F(",")) break;
                x()
            } while (rc > oc);
            return b
        }
        function qb() {
            var a;
            return E("var"), a = pb(), I(), {
                type: ic.VariableDeclaration,
                declarations: a,
                kind: "var"
            }
        }
        function rb(a) {
            var b;
            return E(a), b = pb(a), I(), {
                type: ic.VariableDeclaration,
                declarations: b,
                kind: a
            }
        }
        function sb() {
            return D(";"), {
                type: ic.EmptyStatement
            }
        }
        function tb() {
            var a = kb();
            return I(), {
                type: ic.ExpressionStatement,
                expression: a
            }
        }
        function ub() {
            var a, b, c;
            return E("if"), D("("), a = kb(), D(")"), b = Jb(), G("else") ? (x(), c = Jb()) : c = null, {
                type: ic.IfStatement,
                test: a,
                consequent: b,
                alternate: c
            }
        }
        function vb() {
            var a, b, c;
            return E("do"), c = tc.inIteration, tc.inIteration = !0, a = Jb(), tc.inIteration = c, E("while"), D("("), b = kb(), D(")"), F(";") && x(), {
                type: ic.DoWhileStatement,
                body: a,
                test: b
            }
        }
        function wb() {
            var a, b, c;
            return E("while"), D("("), a = kb(), D(")"), c = tc.inIteration, tc.inIteration = !0, b = Jb(), tc.inIteration = c, {
                type: ic.WhileStatement,
                test: a,
                body: b
            }
        }
        function xb() {
            var a = x();
            return {
                type: ic.VariableDeclaration,
                declarations: pb(),
                kind: a.value
            }
        }
        function yb() {
            var a, b, c, d, e, f, g;
            return a = b = c = null, E("for"), D("("), F(";") ? x() : (G("var") || G("let") ? (tc.allowIn = !1, a = xb(), tc.allowIn = !0, 1 === a.declarations.length && G("in") && (x(), d = a, e = kb(), a = null)) : (tc.allowIn = !1, a = kb(), tc.allowIn = !0, G("in") && (J(a) || B({}, kc.InvalidLHSInForIn), x(), d = a, e = kb(), a = null)), "undefined" == typeof d && D(";")), "undefined" == typeof d && (F(";") || (b = kb()), D(";"), F(")") || (c = kb())), D(")"), g = tc.inIteration, tc.inIteration = !0, f = Jb(), tc.inIteration = g, "undefined" == typeof d ? {
                type: ic.ForStatement,
                init: a,
                test: b,
                update: c,
                body: f
            } : {
                type: ic.ForInStatement,
                left: d,
                right: e,
                body: f,
                each: !1
            }
        }
        function zb() {
            var a, b = null;
            return E("continue"), ";" === mc[oc] ? (x(), tc.inIteration || A({}, kc.IllegalContinue), {
                type: ic.ContinueStatement,
                label: null
            }) : z() ? (tc.inIteration || A({}, kc.IllegalContinue), {
                type: ic.ContinueStatement,
                label: null
            }) : (a = y(), a.type === gc.Identifier && (b = nb(), Object.prototype.hasOwnProperty.call(tc.labelSet, b.name) || A({}, kc.UnknownLabel, b.name)), I(), null !== b || tc.inIteration || A({}, kc.IllegalContinue), {
                type: ic.ContinueStatement,
                label: b
            })
        }
        function Ab() {
            var a, b = null;
            return E("break"), ";" === mc[oc] ? (x(), tc.inIteration || tc.inSwitch || A({}, kc.IllegalBreak), {
                type: ic.BreakStatement,
                label: null
            }) : z() ? (tc.inIteration || tc.inSwitch || A({}, kc.IllegalBreak), {
                type: ic.BreakStatement,
                label: null
            }) : (a = y(), a.type === gc.Identifier && (b = nb(), Object.prototype.hasOwnProperty.call(tc.labelSet, b.name) || A({}, kc.UnknownLabel, b.name)), I(), null !== b || tc.inIteration || tc.inSwitch || A({}, kc.IllegalBreak), {
                type: ic.BreakStatement,
                label: b
            })
        }
        function Bb() {
            var a, b = null;
            return E("return"), tc.inFunctionBody || B({}, kc.IllegalReturn), " " === mc[oc] && i(mc[oc + 1]) ? (b = kb(), I(), {
                type: ic.ReturnStatement,
                argument: b
            }) : z() ? {
                type: ic.ReturnStatement,
                argument: null
            } : (F(";") || (a = y(), F("}") || a.type === gc.EOF || (b = kb())), I(), {
                type: ic.ReturnStatement,
                argument: b
            })
        }
        function Cb() {
            var a, b;
            return nc && B({}, kc.StrictModeWith), E("with"), D("("), a = kb(), D(")"), b = Jb(), {
                type: ic.WithStatement,
                object: a,
                body: b
            }
        }
        function Db() {
            var a, b, c = [];
            for (G("default") ? (x(), a = null) : (E("case"), a = kb()), D(":"); rc > oc && !(F("}") || G("default") || G("case")) && (b = Jb(), "undefined" != typeof b);) c.push(b);
            return {
                type: ic.SwitchCase,
                test: a,
                consequent: c
            }
        }
        function Eb() {
            var a, b, c, d, e;
            if (E("switch"), D("("), a = kb(), D(")"), D("{"), b = [], F("}")) return x(), {
                type: ic.SwitchStatement,
                discriminant: a,
                cases: b
            };
            for (d = tc.inSwitch, tc.inSwitch = !0, e = !1; rc > oc && !F("}");) c = Db(), null === c.test && (e && A({}, kc.MultipleDefaultsInSwitch), e = !0), b.push(c);
            return tc.inSwitch = d, D("}"), {
                type: ic.SwitchStatement,
                discriminant: a,
                cases: b
            }
        }
        function Fb() {
            var a;
            return E("throw"), z() && A({}, kc.NewlineAfterThrow), a = kb(), I(), {
                type: ic.ThrowStatement,
                argument: a
            }
        }
        function Gb() {
            var a;
            return E("catch"), D("("), F(")") && C(y()), a = nb(), nc && m(a.name) && B({}, kc.StrictCatchVariable), D(")"), {
                type: ic.CatchClause,
                param: a,
                body: mb()
            }
        }
        function Hb() {
            var a, b = [],
                c = null;
            return E("try"), a = mb(), G("catch") && b.push(Gb()), G("finally") && (x(), c = mb()), 0 !== b.length || c || A({}, kc.NoCatchOrFinally), {
                type: ic.TryStatement,
                block: a,
                guardedHandlers: [],
                handlers: b,
                finalizer: c
            }
        }
        function Ib() {
            return E("debugger"), I(), {
                type: ic.DebuggerStatement
            }
        }
        function Jb() {
            var a, b, c = y();
            if (c.type === gc.EOF && C(c), c.type === gc.Punctuator) switch (c.value) {
                case ";":
                    return sb();
                case "{":
                    return mb();
                case "(":
                    return tb()
            }
            if (c.type === gc.Keyword) switch (c.value) {
                case "break":
                    return Ab();
                case "continue":
                    return zb();
                case "debugger":
                    return Ib();
                case "do":
                    return vb();
                case "for":
                    return yb();
                case "function":
                    return Lb();
                case "if":
                    return ub();
                case "return":
                    return Bb();
                case "switch":
                    return Eb();
                case "throw":
                    return Fb();
                case "try":
                    return Hb();
                case "var":
                    return qb();
                case "while":
                    return wb();
                case "with":
                    return Cb()
            }
            return a = kb(), a.type === ic.Identifier && F(":") ? (x(), Object.prototype.hasOwnProperty.call(tc.labelSet, a.name) && A({}, kc.Redeclaration, "Label", a.name), tc.labelSet[a.name] = !0, b = Jb(), delete tc.labelSet[a.name], {
                type: ic.LabeledStatement,
                label: a,
                body: b
            }) : (I(), {
                type: ic.ExpressionStatement,
                expression: a
            })
        }
        function Kb() {
            var a, b, d, e, f, g, h, i, j = [];
            for (D("{"); rc > oc && (b = y(), b.type === gc.StringLiteral) && (a = Nb(), j.push(a), a.expression.type === ic.Literal);) d = c(b.range[0] + 1, b.range[1] - 1), "use strict" === d ? (nc = !0, e && B(e, kc.StrictOctalLiteral)) : !e && b.octal && (e = b);
            for (f = tc.labelSet, g = tc.inIteration, h = tc.inSwitch, i = tc.inFunctionBody, tc.labelSet = {}, tc.inIteration = !1, tc.inSwitch = !1, tc.inFunctionBody = !0; rc > oc && !F("}") && (a = Nb(), "undefined" != typeof a);) j.push(a);
            return D("}"), tc.labelSet = f, tc.inIteration = g, tc.inSwitch = h, tc.inFunctionBody = i, {
                type: ic.BlockStatement,
                body: j
            }
        }
        function Lb() {
            var a, b, c, d, e, f, g, h, i, j = [];
            if (E("function"), d = y(), a = nb(), nc ? m(d.value) && B(d, kc.StrictFunctionName) : m(d.value) ? (f = d, g = kc.StrictFunctionName) : l(d.value) && (f = d, g = kc.StrictReservedWord), D("("), !F(")")) for (i = {}; rc > oc && (d = y(), b = nb(), nc ? (m(d.value) && (e = d, g = kc.StrictParamName), Object.prototype.hasOwnProperty.call(i, d.value) && (e = d, g = kc.StrictParamDupe)) : f || (m(d.value) ? (f = d, g = kc.StrictParamName) : l(d.value) ? (f = d, g = kc.StrictReservedWord) : Object.prototype.hasOwnProperty.call(i, d.value) && (f = d, g = kc.StrictParamDupe)), j.push(b), i[b.name] = !0, !F(")"));) D(",");
            return D(")"), h = nc, c = Kb(), nc && f && A(f, g), nc && e && B(e, g), nc = h, {
                type: ic.FunctionDeclaration,
                id: a,
                params: j,
                defaults: [],
                body: c,
                rest: null,
                generator: !1,
                expression: !1
            }
        }
        function Mb() {
            var a, b, c, d, e, f, g, h, i = null,
                j = [];
            if (E("function"), F("(") || (a = y(), i = nb(), nc ? m(a.value) && B(a, kc.StrictFunctionName) : m(a.value) ? (c = a, d = kc.StrictFunctionName) : l(a.value) && (c = a, d = kc.StrictReservedWord)), D("("), !F(")")) for (h = {}; rc > oc && (a = y(), e = nb(), nc ? (m(a.value) && (b = a, d = kc.StrictParamName), Object.prototype.hasOwnProperty.call(h, a.value) && (b = a, d = kc.StrictParamDupe)) : c || (m(a.value) ? (c = a, d = kc.StrictParamName) : l(a.value) ? (c = a, d = kc.StrictReservedWord) : Object.prototype.hasOwnProperty.call(h, a.value) && (c = a, d = kc.StrictParamDupe)), j.push(e), h[e.name] = !0, !F(")"));) D(",");
            return D(")"), g = nc, f = Kb(), nc && c && A(c, d), nc && b && B(b, d), nc = g, {
                type: ic.FunctionExpression,
                id: i,
                params: j,
                defaults: [],
                body: f,
                rest: null,
                generator: !1,
                expression: !1
            }
        }
        function Nb() {
            var a = y();
            if (a.type === gc.Keyword) switch (a.value) {
                case "const":
                case "let":
                    return rb(a.value);
                case "function":
                    return Lb();
                default:
                    return Jb()
            }
            return a.type !== gc.EOF ? Jb() : void 0
        }
        function Ob() {
            for (var a, b, d, e, f = []; rc > oc && (b = y(), b.type === gc.StringLiteral) && (a = Nb(), f.push(a), a.expression.type === ic.Literal);) d = c(b.range[0] + 1, b.range[1] - 1), "use strict" === d ? (nc = !0, e && B(e, kc.StrictOctalLiteral)) : !e && b.octal && (e = b);
            for (; rc > oc && (a = Nb(), "undefined" != typeof a);) f.push(a);
            return f
        }
        function Pb() {
            var a;
            return nc = !1, a = {
                type: ic.Program,
                body: Ob()
            }
        }
        function Qb(a, c, d, e, f) {
            b("number" == typeof d, "Comment must have valid position"), uc.comments.length > 0 && uc.comments[uc.comments.length - 1].range[1] > d || uc.comments.push({
                type: a,
                value: c,
                range: [d, e],
                loc: f
            })
        }
        function Rb() {
            var a, b, c, d, e, f;
            for (a = "", e = !1, f = !1; rc > oc;) if (b = mc[oc], f) b = mc[oc++], h(b) ? (c.end = {
                line: pc,
                column: oc - qc - 1
            }, f = !1, Qb("Line", a, d, oc - 1, c), "\r" === b && "\n" === mc[oc] && ++oc, ++pc, qc = oc, a = "") : oc >= rc ? (f = !1, a += b, c.end = {
                line: pc,
                column: rc - qc
            }, Qb("Line", a, d, rc, c)) : a += b;
            else if (e) h(b) ? ("\r" === b && "\n" === mc[oc + 1] ? (++oc, a += "\r\n") : a += b, ++pc, ++oc, qc = oc, oc >= rc && A({}, kc.UnexpectedToken, "ILLEGAL")) : (b = mc[oc++], oc >= rc && A({}, kc.UnexpectedToken, "ILLEGAL"), a += b, "*" === b && (b = mc[oc], "/" === b && (a = a.substr(0, a.length - 1), e = !1, ++oc, c.end = {
                line: pc,
                column: oc - qc
            }, Qb("Block", a, d, oc, c), a = "")));
            else if ("/" === b) if (b = mc[oc + 1], "/" === b) c = {
                start: {
                    line: pc,
                    column: oc - qc
                }
            }, d = oc, oc += 2, f = !0, oc >= rc && (c.end = {
                line: pc,
                column: oc - qc
            }, f = !1, Qb("Line", a, d, oc, c));
            else {
                if ("*" !== b) break;
                d = oc, oc += 2, e = !0, c = {
                    start: {
                        line: pc,
                        column: oc - qc - 2
                    }
                }, oc >= rc && A({}, kc.UnexpectedToken, "ILLEGAL")
            } else if (g(b))++oc;
            else {
                if (!h(b)) break;
                ++oc, "\r" === b && "\n" === mc[oc] && ++oc, ++pc, qc = oc
            }
        }
        function Sb() {
            var a, b, c, d = [];
            for (a = 0; a < uc.comments.length; ++a) b = uc.comments[a], c = {
                type: b.type,
                value: b.value
            }, uc.range && (c.range = b.range), uc.loc && (c.loc = b.loc), d.push(c);
            uc.comments = d
        }
        function Tb() {
            var a, b, d, e, f;
            return o(), a = oc, b = {
                start: {
                    line: pc,
                    column: oc - qc
                }
            }, d = uc.advance(), b.end = {
                line: pc,
                column: oc - qc
            }, d.type !== gc.EOF && (e = [d.range[0], d.range[1]], f = c(d.range[0], d.range[1]), uc.tokens.push({
                type: hc[d.type],
                value: f,
                range: e,
                loc: b
            })), d
        }
        function Ub() {
            var a, b, c, d;
            return o(), a = oc, b = {
                start: {
                    line: pc,
                    column: oc - qc
                }
            }, c = uc.scanRegExp(), b.end = {
                line: pc,
                column: oc - qc
            }, uc.tokens.length > 0 && (d = uc.tokens[uc.tokens.length - 1], d.range[0] === a && "Punctuator" === d.type && ("/" === d.value || "/=" === d.value) && uc.tokens.pop()), uc.tokens.push({
                type: "RegularExpression",
                value: c.literal,
                range: [a, oc],
                loc: b
            }), c
        }
        function Vb() {
            var a, b, c, d = [];
            for (a = 0; a < uc.tokens.length; ++a) b = uc.tokens[a], c = {
                type: b.type,
                value: b.value
            }, uc.range && (c.range = b.range), uc.loc && (c.loc = b.loc), d.push(c);
            uc.tokens = d
        }
        function Wb(a) {
            return {
                type: ic.Literal,
                value: a.value
            }
        }
        function Xb(a) {
            return {
                type: ic.Literal,
                value: a.value,
                raw: c(a.range[0], a.range[1])
            }
        }
        function Yb() {
            var a = {};
            return a.range = [oc, oc], a.loc = {
                start: {
                    line: pc,
                    column: oc - qc
                },
                end: {
                    line: pc,
                    column: oc - qc
                }
            }, a.end = function() {
                this.range[1] = oc, this.loc.end.line = pc, this.loc.end.column = oc - qc
            }, a.applyGroup = function(a) {
                uc.range && (a.groupRange = [this.range[0], this.range[1]]), uc.loc && (a.groupLoc = {
                    start: {
                        line: this.loc.start.line,
                        column: this.loc.start.column
                    },
                    end: {
                        line: this.loc.end.line,
                        column: this.loc.end.column
                    }
                })
            }, a.apply = function(a) {
                uc.range && (a.range = [this.range[0], this.range[1]]), uc.loc && (a.loc = {
                    start: {
                        line: this.loc.start.line,
                        column: this.loc.start.column
                    },
                    end: {
                        line: this.loc.end.line,
                        column: this.loc.end.column
                    }
                })
            }, a
        }
        function Zb() {
            var a, b;
            return o(), a = Yb(), D("("), b = kb(), D(")"), a.end(), a.applyGroup(b), b
        }
        function $b() {
            var a, b;
            for (o(), a = Yb(), b = G("new") ? V() : Q(); F(".") || F("[");) F("[") ? (b = {
                type: ic.MemberExpression,
                computed: !0,
                object: b,
                property: U()
            }, a.end(), a.apply(b)) : (b = {
                type: ic.MemberExpression,
                computed: !1,
                object: b,
                property: T()
            }, a.end(), a.apply(b));
            return b
        }
        function _b() {
            var a, b;
            for (o(), a = Yb(), b = G("new") ? V() : Q(); F(".") || F("[") || F("(");) F("(") ? (b = {
                type: ic.CallExpression,
                callee: b,
                arguments: R()
            }, a.end(), a.apply(b)) : F("[") ? (b = {
                type: ic.MemberExpression,
                computed: !0,
                object: b,
                property: U()
            }, a.end(), a.apply(b)) : (b = {
                type: ic.MemberExpression,
                computed: !1,
                object: b,
                property: T()
            }, a.end(), a.apply(b));
            return b
        }
        function ac(a) {
            var b, c, d;
            b = "[object Array]" === Object.prototype.toString.apply(a) ? [] : {};
            for (c in a) a.hasOwnProperty(c) && "groupRange" !== c && "groupLoc" !== c && (d = a[c], b[c] = null === d || "object" != typeof d || d instanceof RegExp ? d : ac(d));
            return b
        }
        function bc(a, b) {
            return function(c) {
                function d(a) {
                    return a.type === ic.LogicalExpression || a.type === ic.BinaryExpression
                }
                function e(c) {
                    var f, g;
                    d(c.left) && e(c.left), d(c.right) && e(c.right), a && (c.left.groupRange || c.right.groupRange ? (f = c.left.groupRange ? c.left.groupRange[0] : c.left.range[0], g = c.right.groupRange ? c.right.groupRange[1] : c.right.range[1], c.range = [f, g]) : "undefined" == typeof c.range && (f = c.left.range[0], g = c.right.range[1], c.range = [f, g])), b && (c.left.groupLoc || c.right.groupLoc ? (f = c.left.groupLoc ? c.left.groupLoc.start : c.left.loc.start, g = c.right.groupLoc ? c.right.groupLoc.end : c.right.loc.end, c.loc = {
                        start: f,
                        end: g
                    }) : "undefined" == typeof c.loc && (c.loc = {
                        start: c.left.loc.start,
                        end: c.right.loc.end
                    }))
                }
                return function() {
                    var f, g;
                    return o(), f = Yb(), g = c.apply(null, arguments), f.end(), a && "undefined" == typeof g.range && f.apply(g), b && "undefined" == typeof g.loc && f.apply(g), d(g) && e(g), g
                }
            }
        }
        function cc() {
            var a;
            uc.comments && (uc.skipComment = o, o = Rb), uc.raw && (uc.createLiteral = Wb, Wb = Xb), (uc.range || uc.loc) && (uc.parseGroupExpression = P, uc.parseLeftHandSideExpression = X, uc.parseLeftHandSideExpressionAllowCall = W, P = Zb, X = $b, W = _b, a = bc(uc.range, uc.loc), uc.parseAdditiveExpression = _, uc.parseAssignmentExpression = jb, uc.parseBitwiseANDExpression = db, uc.parseBitwiseORExpression = fb, uc.parseBitwiseXORExpression = eb, uc.parseBlock = mb, uc.parseFunctionSourceElements = Kb, uc.parseCatchClause = Gb, uc.parseComputedMember = U, uc.parseConditionalExpression = ib, uc.parseConstLetDeclaration = rb, uc.parseEqualityExpression = cb, uc.parseExpression = kb, uc.parseForVariableDeclaration = xb, uc.parseFunctionDeclaration = Lb, uc.parseFunctionExpression = Mb, uc.parseLogicalANDExpression = gb, uc.parseLogicalORExpression = hb, uc.parseMultiplicativeExpression = $, uc.parseNewExpression = V, uc.parseNonComputedProperty = S, uc.parseObjectProperty = N, uc.parseObjectPropertyKey = M, uc.parsePostfixExpression = Y, uc.parsePrimaryExpression = Q, uc.parseProgram = Pb, uc.parsePropertyFunction = L, uc.parseRelationalExpression = bb, uc.parseStatement = Jb, uc.parseShiftExpression = ab, uc.parseSwitchCase = Db, uc.parseUnaryExpression = Z, uc.parseVariableDeclaration = ob, uc.parseVariableIdentifier = nb, _ = a(uc.parseAdditiveExpression), jb = a(uc.parseAssignmentExpression), db = a(uc.parseBitwiseANDExpression), fb = a(uc.parseBitwiseORExpression), eb = a(uc.parseBitwiseXORExpression), mb = a(uc.parseBlock), Kb = a(uc.parseFunctionSourceElements), Gb = a(uc.parseCatchClause), U = a(uc.parseComputedMember), ib = a(uc.parseConditionalExpression), rb = a(uc.parseConstLetDeclaration), cb = a(uc.parseEqualityExpression), kb = a(uc.parseExpression), xb = a(uc.parseForVariableDeclaration), Lb = a(uc.parseFunctionDeclaration), Mb = a(uc.parseFunctionExpression), X = a(X), gb = a(uc.parseLogicalANDExpression), hb = a(uc.parseLogicalORExpression), $ = a(uc.parseMultiplicativeExpression), V = a(uc.parseNewExpression), S = a(uc.parseNonComputedProperty), N = a(uc.parseObjectProperty), M = a(uc.parseObjectPropertyKey), Y = a(uc.parsePostfixExpression), Q = a(uc.parsePrimaryExpression), Pb = a(uc.parseProgram), L = a(uc.parsePropertyFunction), bb = a(uc.parseRelationalExpression), Jb = a(uc.parseStatement), ab = a(uc.parseShiftExpression), Db = a(uc.parseSwitchCase), Z = a(uc.parseUnaryExpression), ob = a(uc.parseVariableDeclaration), nb = a(uc.parseVariableIdentifier)), "undefined" != typeof uc.tokens && (uc.advance = w, uc.scanRegExp = u, w = Tb, u = Ub)
        }
        function dc() {
            "function" == typeof uc.skipComment && (o = uc.skipComment), uc.raw && (Wb = uc.createLiteral), (uc.range || uc.loc) && (_ = uc.parseAdditiveExpression, jb = uc.parseAssignmentExpression, db = uc.parseBitwiseANDExpression, fb = uc.parseBitwiseORExpression, eb = uc.parseBitwiseXORExpression, mb = uc.parseBlock, Kb = uc.parseFunctionSourceElements, Gb = uc.parseCatchClause, U = uc.parseComputedMember, ib = uc.parseConditionalExpression, rb = uc.parseConstLetDeclaration, cb = uc.parseEqualityExpression, kb = uc.parseExpression, xb = uc.parseForVariableDeclaration, Lb = uc.parseFunctionDeclaration, Mb = uc.parseFunctionExpression, P = uc.parseGroupExpression, X = uc.parseLeftHandSideExpression, W = uc.parseLeftHandSideExpressionAllowCall, gb = uc.parseLogicalANDExpression, hb = uc.parseLogicalORExpression, $ = uc.parseMultiplicativeExpression, V = uc.parseNewExpression, S = uc.parseNonComputedProperty, N = uc.parseObjectProperty, M = uc.parseObjectPropertyKey, Q = uc.parsePrimaryExpression, Y = uc.parsePostfixExpression, Pb = uc.parseProgram, L = uc.parsePropertyFunction, bb = uc.parseRelationalExpression, Jb = uc.parseStatement, ab = uc.parseShiftExpression, Db = uc.parseSwitchCase, Z = uc.parseUnaryExpression, ob = uc.parseVariableDeclaration, nb = uc.parseVariableIdentifier), "function" == typeof uc.scanRegExp && (w = uc.advance, u = uc.scanRegExp)
        }
        function ec(a) {
            var b, c = a.length,
                d = [];
            for (b = 0; c > b; ++b) d[b] = a.charAt(b);
            return d
        }
        function fc(a, b) {
            var c, d;
            d = String, "string" == typeof a || a instanceof String || (a = d(a)), mc = a, oc = 0, pc = mc.length > 0 ? 1 : 0, qc = 0, rc = mc.length, sc = null, tc = {
                allowIn: !0,
                labelSet: {},
                inFunctionBody: !1,
                inIteration: !1,
                inSwitch: !1
            }, uc = {}, "undefined" != typeof b && (uc.range = "boolean" == typeof b.range && b.range, uc.loc = "boolean" == typeof b.loc && b.loc, uc.raw = "boolean" == typeof b.raw && b.raw, "boolean" == typeof b.tokens && b.tokens && (uc.tokens = []), "boolean" == typeof b.comment && b.comment && (uc.comments = []), "boolean" == typeof b.tolerant && b.tolerant && (uc.errors = [])), rc > 0 && "undefined" == typeof mc[0] && (a instanceof String && (mc = a.valueOf()), "undefined" == typeof mc[0] && (mc = ec(a))), cc();
            try {
                c = Pb(), "undefined" != typeof uc.comments && (Sb(), c.comments = uc.comments), "undefined" != typeof uc.tokens && (Vb(), c.tokens = uc.tokens), "undefined" != typeof uc.errors && (c.errors = uc.errors), (uc.range || uc.loc) && (c.body = ac(c.body))
            } catch (e) {
                throw e
            } finally {
                dc(), uc = {}
            }
            return c
        }
        var gc, hc, ic, jc, kc, lc, mc, nc, oc, pc, qc, rc, sc, tc, uc;
        gc = {
            BooleanLiteral: 1,
            EOF: 2,
            Identifier: 3,
            Keyword: 4,
            NullLiteral: 5,
            NumericLiteral: 6,
            Punctuator: 7,
            StringLiteral: 8
        }, hc = {}, hc[gc.BooleanLiteral] = "Boolean", hc[gc.EOF] = "<end>", hc[gc.Identifier] = "Identifier", hc[gc.Keyword] = "Keyword", hc[gc.NullLiteral] = "Null", hc[gc.NumericLiteral] = "Numeric", hc[gc.Punctuator] = "Punctuator", hc[gc.StringLiteral] = "String", ic = {
            AssignmentExpression: "AssignmentExpression",
            ArrayExpression: "ArrayExpression",
            BlockStatement: "BlockStatement",
            BinaryExpression: "BinaryExpression",
            BreakStatement: "BreakStatement",
            CallExpression: "CallExpression",
            CatchClause: "CatchClause",
            ConditionalExpression: "ConditionalExpression",
            ContinueStatement: "ContinueStatement",
            DoWhileStatement: "DoWhileStatement",
            DebuggerStatement: "DebuggerStatement",
            EmptyStatement: "EmptyStatement",
            ExpressionStatement: "ExpressionStatement",
            ForStatement: "ForStatement",
            ForInStatement: "ForInStatement",
            FunctionDeclaration: "FunctionDeclaration",
            FunctionExpression: "FunctionExpression",
            Identifier: "Identifier",
            IfStatement: "IfStatement",
            Literal: "Literal",
            LabeledStatement: "LabeledStatement",
            LogicalExpression: "LogicalExpression",
            MemberExpression: "MemberExpression",
            NewExpression: "NewExpression",
            ObjectExpression: "ObjectExpression",
            Program: "Program",
            Property: "Property",
            ReturnStatement: "ReturnStatement",
            SequenceExpression: "SequenceExpression",
            SwitchStatement: "SwitchStatement",
            SwitchCase: "SwitchCase",
            ThisExpression: "ThisExpression",
            ThrowStatement: "ThrowStatement",
            TryStatement: "TryStatement",
            UnaryExpression: "UnaryExpression",
            UpdateExpression: "UpdateExpression",
            VariableDeclaration: "VariableDeclaration",
            VariableDeclarator: "VariableDeclarator",
            WhileStatement: "WhileStatement",
            WithStatement: "WithStatement"
        }, jc = {
            Data: 1,
            Get: 2,
            Set: 4
        }, kc = {
            UnexpectedToken: "Unexpected token %0",
            UnexpectedNumber: "Unexpected number",
            UnexpectedString: "Unexpected string",
            UnexpectedIdentifier: "Unexpected identifier",
            UnexpectedReserved: "Unexpected reserved word",
            UnexpectedEOS: "Unexpected end of input",
            NewlineAfterThrow: "Illegal newline after throw",
            InvalidRegExp: "Invalid regular expression",
            UnterminatedRegExp: "Invalid regular expression: missing /",
            InvalidLHSInAssignment: "Invalid left-hand side in assignment",
            InvalidLHSInForIn: "Invalid left-hand side in for-in",
            MultipleDefaultsInSwitch: "More than one default clause in switch statement",
            NoCatchOrFinally: "Missing catch or finally after try",
            UnknownLabel: "Undefined label '%0'",
            Redeclaration: "%0 '%1' has already been declared",
            IllegalContinue: "Illegal continue statement",
            IllegalBreak: "Illegal break statement",
            IllegalReturn: "Illegal return statement",
            StrictModeWith: "Strict mode code may not include a with statement",
            StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode",
            StrictVarName: "Variable name may not be eval or arguments in strict mode",
            StrictParamName: "Parameter name eval or arguments is not allowed in strict mode",
            StrictParamDupe: "Strict mode function may not have duplicate parameter names",
            StrictFunctionName: "Function name may not be eval or arguments in strict mode",
            StrictOctalLiteral: "Octal literals are not allowed in strict mode.",
            StrictDelete: "Delete of an unqualified identifier in strict mode.",
            StrictDuplicateProperty: "Duplicate data property in object literal not allowed in strict mode",
            AccessorDataProperty: "Object literal may not have data and accessor property with the same name",
            AccessorGetSet: "Object literal may not have multiple get/set accessors with the same name",
            StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode",
            StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode",
            StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode",
            StrictReservedWord: "Use of future reserved word in strict mode"
        }, lc = {
            NonAsciiIdentifierStart: new RegExp("[\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]"),
            NonAsciiIdentifierPart: new RegExp("[\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0300-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u0483-\u0487\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u05d0-\u05ea\u05f0-\u05f2\u0610-\u061a\u0620-\u0669\u066e-\u06d3\u06d5-\u06dc\u06df-\u06e8\u06ea-\u06fc\u06ff\u0710-\u074a\u074d-\u07b1\u07c0-\u07f5\u07fa\u0800-\u082d\u0840-\u085b\u08a0\u08a2-\u08ac\u08e4-\u08fe\u0900-\u0963\u0966-\u096f\u0971-\u0977\u0979-\u097f\u0981-\u0983\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bc-\u09c4\u09c7\u09c8\u09cb-\u09ce\u09d7\u09dc\u09dd\u09df-\u09e3\u09e6-\u09f1\u0a01-\u0a03\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a59-\u0a5c\u0a5e\u0a66-\u0a75\u0a81-\u0a83\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abc-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ad0\u0ae0-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3c-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5c\u0b5d\u0b5f-\u0b63\u0b66-\u0b6f\u0b71\u0b82\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd0\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c58\u0c59\u0c60-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbc-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0cde\u0ce0-\u0ce3\u0ce6-\u0cef\u0cf1\u0cf2\u0d02\u0d03\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d-\u0d44\u0d46-\u0d48\u0d4a-\u0d4e\u0d57\u0d60-\u0d63\u0d66-\u0d6f\u0d7a-\u0d7f\u0d82\u0d83\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e01-\u0e3a\u0e40-\u0e4e\u0e50-\u0e59\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb9\u0ebb-\u0ebd\u0ec0-\u0ec4\u0ec6\u0ec8-\u0ecd\u0ed0-\u0ed9\u0edc-\u0edf\u0f00\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e-\u0f47\u0f49-\u0f6c\u0f71-\u0f84\u0f86-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1049\u1050-\u109d\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u135d-\u135f\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176c\u176e-\u1770\u1772\u1773\u1780-\u17d3\u17d7\u17dc\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1820-\u1877\u1880-\u18aa\u18b0-\u18f5\u1900-\u191c\u1920-\u192b\u1930-\u193b\u1946-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u19d0-\u19d9\u1a00-\u1a1b\u1a20-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1aa7\u1b00-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1bf3\u1c00-\u1c37\u1c40-\u1c49\u1c4d-\u1c7d\u1cd0-\u1cd2\u1cd4-\u1cf6\u1d00-\u1de6\u1dfc-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u200c\u200d\u203f\u2040\u2054\u2071\u207f\u2090-\u209c\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d7f-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2de0-\u2dff\u2e2f\u3005-\u3007\u3021-\u302f\u3031-\u3035\u3038-\u303c\u3041-\u3096\u3099\u309a\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua62b\ua640-\ua66f\ua674-\ua67d\ua67f-\ua697\ua69f-\ua6f1\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua827\ua840-\ua873\ua880-\ua8c4\ua8d0-\ua8d9\ua8e0-\ua8f7\ua8fb\ua900-\ua92d\ua930-\ua953\ua960-\ua97c\ua980-\ua9c0\ua9cf-\ua9d9\uaa00-\uaa36\uaa40-\uaa4d\uaa50-\uaa59\uaa60-\uaa76\uaa7a\uaa7b\uaa80-\uaac2\uaadb-\uaadd\uaae0-\uaaef\uaaf2-\uaaf6\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabea\uabec\uabed\uabf0-\uabf9\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\ufe70-\ufe74\ufe76-\ufefc\uff10-\uff19\uff21-\uff3a\uff3f\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]")
        }, "undefined" == typeof "esprima" [0] && (c = function(a, b) {
            return mc.slice(a, b).join("")
        }), a.version = "1.0.4", a.parse = fc, a.Syntax = function() {
            var a, b = {};
            "function" == typeof Object.create && (b = Object.create(null));
            for (a in ic) ic.hasOwnProperty(a) && (b[a] = ic[a]);
            return "function" == typeof Object.freeze && Object.freeze(b), b
        }()
    })
}(null),
/*!
 * falafel (c) James Halliday / MIT License
 * https://github.com/substack/node-falafel
 */
function(a, b) {
    function c(a, b, c) {
        function d(b) {
            c[a.range[0]] = b;
            for (var d = a.range[0] + 1; d < a.range[1]; d++) c[d] = ""
        }
        if (a.range) if (a.parent = b, a.source = function() {
            return c.slice(a.range[0], a.range[1]).join("")
        }, a.update && "object" == typeof a.update) {
            var g = a.update;
            f(e(g), function(a) {
                d[a] = g[a]
            }), a.update = d
        } else a.update = d
    }
    var d = a("esprima").parse,
        e = Object.keys || function(a) {
            var b = [];
            for (var c in a) b.push(c);
            return b
        }, f = function(a, b) {
            if (a.forEach) return a.forEach(b);
            for (var c = 0; c < a.length; c++) b.call(a, a[c], c, a)
        }, g = Array.isArray || function(a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        };
    b.exports = function(a, b, h) {
        "function" == typeof b && (h = b, b = {}), "object" == typeof a && (b = a, a = b.source, delete b.source), a = void 0 === a ? b.source : a, b.range = !0, "string" != typeof a && (a = String(a));
        var i = d(a, b),
            j = {
                chunks: a.split(""),
                toString: function() {
                    return j.chunks.join("")
                },
                inspect: function() {
                    return j.toString()
                }
            };
        return function k(a, b) {
            c(a, b, j.chunks), f(e(a), function(b) {
                if ("parent" !== b) {
                    var d = a[b];
                    g(d) ? f(d, function(b) {
                        b && "string" == typeof b.type && k(b, a)
                    }) : d && "string" == typeof d.type && (c(d, a, j.chunks), k(d, a))
                }
            }), h(a)
        }(i, void 0), j
    }, window.falafel = b.exports
}(function() {
    return {
        parse: esprima.parse
    }
}, {
    exports: {}
});
var inBrowser = "undefined" != typeof window && this === window,
    parseAndModify = inBrowser ? window.falafel : require("falafel");
(inBrowser ? window : exports).blanket = function() {
    var a, b = ["ExpressionStatement", "BreakStatement", "ContinueStatement", "VariableDeclaration", "ReturnStatement", "ThrowStatement", "TryStatement", "FunctionDeclaration", "IfStatement", "WhileStatement", "DoWhileStatement", "ForStatement", "ForInStatement", "SwitchStatement", "WithStatement"],
        c = ["IfStatement", "WhileStatement", "DoWhileStatement", "ForStatement", "ForInStatement", "WithStatement"],
        d = Math.floor(1e3 * Math.random()),
        e = {}, f = {
            reporter: null,
            adapter: null,
            filter: null,
            customVariable: null,
            loader: null,
            ignoreScriptError: !1,
            existingRequireJS: !1,
            autoStart: !1,
            timeout: 180,
            ignoreCors: !1,
            branchTracking: !1,
            sourceURL: !1,
            debug: !1,
            engineOnly: !1,
            testReadyCallback: null,
            commonJS: !1,
            instrumentCache: !1,
            modulePattern: null
        };
    return inBrowser && "undefined" != typeof window.blanket && (a = window.blanket.noConflict()), _blanket = {
        noConflict: function() {
            return a ? a : _blanket
        },
        _getCopyNumber: function() {
            return d
        },
        extend: function(a) {
            _blanket._extend(_blanket, a)
        },
        _extend: function(a, b) {
            if (b) for (var c in b) a[c] instanceof Object && "function" != typeof a[c] ? _blanket._extend(a[c], b[c]) : a[c] = b[c]
        },
        getCovVar: function() {
            var a = _blanket.options("customVariable");
            return a ? (_blanket.options("debug") && console.log("BLANKET-Using custom tracking variable:", a), inBrowser ? "window." + a : a) : inBrowser ? "window._$blanket" : "_$jscoverage"
        },
        options: function(a, b) {
            if ("string" != typeof a) _blanket._extend(f, a);
            else {
                if ("undefined" == typeof b) return f[a];
                f[a] = b
            }
        },
        instrument: function(a, b) {
            var c = a.inputFile,
                d = a.inputFileName;
            if (_blanket.options("instrumentCache") && sessionStorage && sessionStorage.getItem("blanket_instrument_store-" + d)) _blanket.options("debug") && console.log("BLANKET-Reading instrumentation from cache: ", d), b(sessionStorage.getItem("blanket_instrument_store-" + d));
            else {
                var e = _blanket._prepareSource(c);
                _blanket._trackingArraySetup = [], c = c.replace(/^\#\!.*/, "");
                var f = parseAndModify(c, {
                    loc: !0,
                    comment: !0
                }, _blanket._addTracking(d));
                f = _blanket._trackingSetup(d, e) + f, _blanket.options("sourceURL") && (f += "\n//@ sourceURL=" + d.replace("http://", "")), _blanket.options("debug") && console.log("BLANKET-Instrumented file: ", d), _blanket.options("instrumentCache") && sessionStorage && (_blanket.options("debug") && console.log("BLANKET-Saving instrumentation to cache: ", d), sessionStorage.setItem("blanket_instrument_store-" + d, f)), b(f)
            }
        },
        _trackingArraySetup: [],
        _branchingArraySetup: [],
        _prepareSource: function(a) {
            return a.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/(\r\n|\n|\r)/gm, "\n").split("\n")
        },
        _trackingSetup: function(a, b) {
            var c = _blanket.options("branchTracking"),
                d = b.join("',\n'"),
                e = "",
                f = _blanket.getCovVar();
            return e += "if (typeof " + f + " === 'undefined') " + f + " = {};\n", c && (e += "var _$branchFcn=function(f,l,c,r){ ", e += "if (!!r) { ", e += f + "[f].branchData[l][c][0] = " + f + "[f].branchData[l][c][0] || [];", e += f + "[f].branchData[l][c][0].push(r); }", e += "else { ", e += f + "[f].branchData[l][c][1] = " + f + "[f].branchData[l][c][1] || [];", e += f + "[f].branchData[l][c][1].push(r); }", e += "return r;};\n"), e += "if (typeof " + f + "['" + a + "'] === 'undefined'){", e += f + "['" + a + "']=[];\n", c && (e += f + "['" + a + "'].branchData=[];\n"), e += f + "['" + a + "'].source=['" + d + "'];\n", _blanket._trackingArraySetup.sort(function(a, b) {
                return parseInt(a, 10) > parseInt(b, 10)
            }).forEach(function(b) {
                e += f + "['" + a + "'][" + b + "]=0;\n"
            }), c && _blanket._branchingArraySetup.sort(function(a, b) {
                return a.line > b.line
            }).sort(function(a, b) {
                return a.column > b.column
            }).forEach(function(b) {
                b.file === a && (e += "if (typeof " + f + "['" + a + "'].branchData[" + b.line + "] === 'undefined'){\n", e += f + "['" + a + "'].branchData[" + b.line + "]=[];\n", e += "}", e += f + "['" + a + "'].branchData[" + b.line + "][" + b.column + "] = [];\n", e += f + "['" + a + "'].branchData[" + b.line + "][" + b.column + "].consequent = " + JSON.stringify(b.consequent) + ";\n", e += f + "['" + a + "'].branchData[" + b.line + "][" + b.column + "].alternate = " + JSON.stringify(b.alternate) + ";\n")
            }), e += "}"
        },
        _blockifyIf: function(a) {
            if (c.indexOf(a.type) > -1) {
                var b = a.consequent || a.body,
                    d = a.alternate;
                d && "BlockStatement" !== d.type && d.update("{\n" + d.source() + "}\n"), b && "BlockStatement" !== b.type && b.update("{\n" + b.source() + "}\n")
            }
        },
        _trackBranch: function(a, b) {
            var c = a.loc.start.line,
                d = a.loc.start.column;
            _blanket._branchingArraySetup.push({
                line: c,
                column: d,
                file: b,
                consequent: a.consequent.loc,
                alternate: a.alternate.loc
            });
            var e = "_$branchFcn('" + b + "'," + c + "," + d + "," + a.test.source() + ")?" + a.consequent.source() + ":" + a.alternate.source();
            a.update(e)
        },
        _addTracking: function(a) {
            var c = _blanket.getCovVar();
            return function(d) {
                if (_blanket._blockifyIf(d), b.indexOf(d.type) > -1 && "LabeledStatement" !== d.parent.type) {
                    if (_blanket._checkDefs(d, a), "VariableDeclaration" === d.type && ("ForStatement" === d.parent.type || "ForInStatement" === d.parent.type)) return;
                    if (!d.loc || !d.loc.start) throw new Error("The instrumenter encountered a node with no location: " + Object.keys(d));
                    d.update(c + "['" + a + "'][" + d.loc.start.line + "]++;\n" + d.source()), _blanket._trackingArraySetup.push(d.loc.start.line)
                } else _blanket.options("branchTracking") && "ConditionalExpression" === d.type && _blanket._trackBranch(d, a)
            }
        },
        _checkDefs: function(a, b) {
            if (inBrowser) {
                if ("VariableDeclaration" === a.type && a.declarations && a.declarations.forEach(function(c) {
                    if ("window" === c.id.name) throw new Error("Instrumentation error, you cannot redefine the 'window' variable in  " + b + ":" + a.loc.start.line)
                }), "FunctionDeclaration" === a.type && a.params && a.params.forEach(function(c) {
                    if ("window" === c.name) throw new Error("Instrumentation error, you cannot redefine the 'window' variable in  " + b + ":" + a.loc.start.line)
                }), "ExpressionStatement" === a.type && a.expression && a.expression.left && a.expression.left.object && a.expression.left.property && a.expression.left.object.name + "." + a.expression.left.property.name === _blanket.getCovVar()) throw new Error("Instrumentation error, you cannot redefine the coverage variable in  " + b + ":" + a.loc.start.line)
            } else if ("ExpressionStatement" === a.type && a.expression && a.expression.left && !a.expression.left.object && !a.expression.left.property && a.expression.left.name === _blanket.getCovVar()) throw new Error("Instrumentation error, you cannot redefine the coverage variable in  " + b + ":" + a.loc.start.line)
        },
        setupCoverage: function() {
            e.instrumentation = "blanket", e.stats = {
                suites: 0,
                tests: 0,
                passes: 0,
                pending: 0,
                failures: 0,
                start: new Date
            }
        },
        _checkIfSetup: function() {
            if (!e.stats) throw new Error("You must call blanket.setupCoverage() first.")
        },
        onTestStart: function() {
            _blanket.options("debug") && console.log("BLANKET-Test event started"), this._checkIfSetup(), e.stats.tests++, e.stats.pending++
        },
        onTestDone: function(a, b) {
            this._checkIfSetup(), b === a ? e.stats.passes++ : e.stats.failures++, e.stats.pending--
        },
        onModuleStart: function() {
            this._checkIfSetup(), e.stats.suites++
        },
        onTestsDone: function() {
            _blanket.options("debug") && console.log("BLANKET-Test event done"), this._checkIfSetup(), e.stats.end = new Date, inBrowser ? this.report(e) : (_blanket.options("branchTracking") || delete(inBrowser ? window : global)[_blanket.getCovVar()].branchFcn, this.options("reporter").call(this, e))
        }
    }
}(),
function(a) {
    var b = a.options;
    a.extend({
        outstandingRequireFiles: [],
        options: function(c, d) {
            var e = {};
            if ("string" != typeof c) b(c), e = c;
            else {
                if ("undefined" == typeof d) return b(c);
                b(c, d), e[c] = d
            }
            e.adapter && a._loadFile(e.adapter), e.loader && a._loadFile(e.loader)
        },
        requiringFile: function(b, c) {
            "undefined" == typeof b ? a.outstandingRequireFiles = [] : "undefined" == typeof c ? a.outstandingRequireFiles.push(b) : a.outstandingRequireFiles.splice(a.outstandingRequireFiles.indexOf(b), 1)
        },
        requireFilesLoaded: function() {
            return 0 === a.outstandingRequireFiles.length
        },
        showManualLoader: function() {
            if (!document.getElementById("blanketLoaderDialog")) {
                var a = "<div class='blanketDialogOverlay'>";
                a += " </div>", a += "<div class='blanketDialogVerticalOffset'>", a += "<div class='blanketDialogBox'>", a += "<b>Error:</b> Blanket.js encountered a cross origin request error while instrumenting the source files.  ", a += "<br><br>This is likely caused by the source files being referenced locally (using the file:// protocol). ", a += "<br><br>Some solutions include <a href='http://askubuntu.com/questions/160245/making-google-chrome-option-allow-file-access-from-files-permanent' target='_blank'>starting Chrome with special flags</a>, <a target='_blank' href='https://github.com/remy/servedir'>running a server locally</a>, or using a browser without these CORS restrictions (Safari).", a += "<br>", "undefined" != typeof FileReader && (a += "<br>Or, try the experimental loader.  When prompted, simply click on the directory containing all the source files you want covered.", a += "<a href='javascript:document.getElementById(\"fileInput\").click();'>Start Loader</a>", a += "<input type='file' type='application/x-javascript' accept='application/x-javascript' webkitdirectory id='fileInput' multiple onchange='window.blanket.manualFileLoader(this.files)' style='visibility:hidden;position:absolute;top:-50;left:-50'/>"), a += "<br><span style='float:right;cursor:pointer;'  onclick=document.getElementById('blanketLoaderDialog').style.display='none';>Close</span>", a += "<div style='clear:both'></div>", a += "</div></div>";
                var b = ".blanketDialogWrapper {";
                b += "display:block;", b += "position:fixed;", b += "z-index:40001; }", b += ".blanketDialogOverlay {", b += "position:fixed;", b += "width:100%;", b += "height:100%;", b += "background-color:black;", b += "opacity:.5; ", b += "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=50)'; ", b += "filter:alpha(opacity=50); ", b += "z-index:40001; }", b += ".blanketDialogVerticalOffset { ", b += "position:fixed;", b += "top:30%;", b += "width:100%;", b += "z-index:40002; }", b += ".blanketDialogBox { ", b += "width:405px; ", b += "position:relative;", b += "margin:0 auto;", b += "background-color:white;", b += "padding:10px;", b += "border:1px solid black; }";
                var c = document.createElement("style");
                c.innerHTML = b, document.head.appendChild(c);
                var d = document.createElement("div");
                d.id = "blanketLoaderDialog", d.className = "blanketDialogWrapper", d.innerHTML = a, document.body.insertBefore(d, document.body.firstChild)
            }
        },
        manualFileLoader: function(a) {
            function b(a) {
                var b = new FileReader;
                b.onload = g, b.readAsText(a)
            }
            var c = Array.prototype.slice;
            a = c.call(a).filter(function(a) {
                return "" !== a.type
            });
            var d = a.length - 1,
                e = 0,
                f = {};
            sessionStorage.blanketSessionLoader && (f = JSON.parse(sessionStorage.blanketSessionLoader));
            var g = function(c) {
                var g = c.currentTarget.result,
                    h = a[e],
                    i = h.webkitRelativePath && "" !== h.webkitRelativePath ? h.webkitRelativePath : h.name;
                f[i] = g, e++, e === d ? (sessionStorage.setItem("blanketSessionLoader", JSON.stringify(f)), document.location.reload()) : b(a[e])
            };
            b(a[e])
        },
        _loadFile: function(b) {
            if ("undefined" != typeof b) {
                var c = new XMLHttpRequest;
                c.open("GET", b, !1), c.send(), a._addScript(c.responseText)
            }
        },
        _addScript: function(a) {
            var b = document.createElement("script");
            b.type = "text/javascript", b.text = a, (document.body || document.getElementsByTagName("head")[0]).appendChild(b)
        },
        hasAdapter: function() {
            return null !== a.options("adapter")
        },
        report: function(b) {
            document.getElementById("blanketLoaderDialog") || (a.blanketSession = null), b.files = window._$blanket;
            blanket.options("commonJS") ? blanket._commonjs.require : window.require;
            if (!b.files || !Object.keys(b.files).length) return void(a.options("debug") && console.log("BLANKET-Reporting No files were instrumented."));
            if ("undefined" != typeof b.files.branchFcn && delete b.files.branchFcn, "string" == typeof a.options("reporter")) a._loadFile(a.options("reporter")), a.customReporter(b, a.options("reporter_options"));
            else if ("function" == typeof a.options("reporter")) a.options("reporter")(b, a.options("reporter_options"));
            else {
                if ("function" != typeof a.defaultReporter) throw new Error("no reporter defined.");
                a.defaultReporter(b, a.options("reporter_options"))
            }
        },
        _bindStartTestRunner: function(a, b) {
            a ? a(b) : window.addEventListener("load", b, !1)
        },
        _loadSourceFiles: function(b) {
            blanket.options("commonJS") ? blanket._commonjs.require : window.require;
            a.options("debug") && console.log("BLANKET-Collecting page scripts");
            var c = a.utils.collectPageScripts();
            if (0 === c.length) b();
            else {
                sessionStorage.blanketSessionLoader && (a.blanketSession = JSON.parse(sessionStorage.blanketSessionLoader)), c.forEach(function(b) {
                    a.utils.cache[b] = {
                        loaded: !1
                    }
                });
                var d = -1;
                a.utils.loadAll(function(a) {
                    return a ? "undefined" != typeof c[d + 1] : (d++, d >= c.length ? null : c[d])
                }, b)
            }
        },
        beforeStartTestRunner: function(b) {
            b = b || {}, b.checkRequirejs = "undefined" == typeof b.checkRequirejs ? !0 : b.checkRequirejs, b.callback = b.callback || function() {}, b.coverage = "undefined" == typeof b.coverage ? !0 : b.coverage, b.coverage ? a._bindStartTestRunner(b.bindEvent, function() {
                a._loadSourceFiles(function() {
                    var c = function() {
                        return b.condition ? b.condition() : a.requireFilesLoaded()
                    }, d = function() {
                        if (c()) {
                            a.options("debug") && console.log("BLANKET-All files loaded, init start test runner callback.");
                            var e = a.options("testReadyCallback");
                            e ? "function" == typeof e ? e(b.callback) : "string" == typeof e && (a._addScript(e), b.callback()) : b.callback()
                        } else setTimeout(d, 13)
                    };
                    d()
                })
            }) : b.callback()
        },
        utils: {
            qualifyURL: function(a) {
                var b = document.createElement("a");
                return b.href = a, b.href
            }
        }
    })
}(blanket), blanket.defaultReporter = function(a) {
    function b(a) {
        var b = document.getElementById(a);
        b.style.display = "block" === b.style.display ? "none" : "block"
    }
    function c(a) {
        return a.replace(/\&/g, "&").replace(/</g, "<").replace(/\>/g, ">").replace(/\"/g, """).replace(/\'/g, "'")
    }
    function d(a, b) {
        var c = b ? 0 : 1;
        return "undefined" == typeof a || null === typeof a || "undefined" == typeof a[c] ? !1 : a[c].length > 0
    }
    function e(a, b, f, g, h) {
        var i = "",
            j = "";
        if (q.length > 0) if (i += "<span class='" + (d(q[0][1], q[0][1].consequent === q[0][0]) ? "branchOkay" : "branchWarning") + "'>", q[0][0].end.line === h) {
            if (i += c(b.slice(0, q[0][0].end.column)) + "</span>", b = b.slice(q[0][0].end.column), q.shift(), q.length > 0) if (i += "<span class='" + (d(q[0][1], !1) ? "branchOkay" : "branchWarning") + "'>", q[0][0].end.line === h) {
                if (i += c(b.slice(0, q[0][0].end.column)) + "</span>", b = b.slice(q[0][0].end.column), q.shift(), !f) return {
                    src: i + c(b),
                    cols: f
                }
            } else {
                if (!f) return {
                    src: i + c(b) + "</span>",
                    cols: f
                };
                j = "</span>"
            } else if (!f) return {
                src: i + c(b),
                cols: f
            }
        } else {
            if (!f) return {
                src: i + c(b) + "</span>",
                cols: f
            };
            j = "</span>"
        }
        var k = f[a],
            l = k.consequent;
        if (l.start.line > h) q.unshift([k.alternate, k]), q.unshift([l, k]), b = c(b);
        else {
            var m = "<span class='" + (d(k, !0) ? "branchOkay" : "branchWarning") + "'>";
            if (i += c(b.slice(0, l.start.column - g)) + m, f.length > a + 1 && f[a + 1].consequent.start.line === h && f[a + 1].consequent.start.column - g < f[a].consequent.end.column - g) {
                var n = e(a + 1, b.slice(l.start.column - g, l.end.column - g), f, l.start.column - g, h);
                i += n.src, f = n.cols, f[a + 1] = f[a + 2], f.length--
            } else i += c(b.slice(l.start.column - g, l.end.column - g));
            i += "</span>";
            var o = k.alternate;
            if (o.start.line > h) i += c(b.slice(l.end.column - g)), q.unshift([o, k]);
            else {
                if (i += c(b.slice(l.end.column - g, o.start.column - g)), m = "<span class='" + (d(k, !1) ? "branchOkay" : "branchWarning") + "'>", i += m, f.length > a + 1 && f[a + 1].consequent.start.line === h && f[a + 1].consequent.start.column - g < f[a].alternate.end.column - g) {
                    var p = e(a + 1, b.slice(o.start.column - g, o.end.column - g), f, o.start.column - g, h);
                    i += p.src, f = p.cols, f[a + 1] = f[a + 2], f.length--
                } else i += c(b.slice(o.start.column - g, o.end.column - g));
                i += "</span>", i += c(b.slice(o.end.column - g)), b = i
            }
        }
        return {
            src: b + j,
            cols: f
        }
    }
    var f = "#blanket-main {margin:2px;background:#EEE;color:#333;clear:both;font-family:'Helvetica Neue Light', 'HelveticaNeue-Light', 'Helvetica Neue', Calibri, Helvetica, Arial, sans-serif; font-size:17px;} #blanket-main a {color:#333;text-decoration:none;}  #blanket-main a:hover {text-decoration:underline;} .blanket {margin:0;padding:5px;clear:both;border-bottom: 1px solid #FFFFFF;} .bl-error {color:red;}.bl-success {color:#5E7D00;} .bl-file{width:auto;} .bl-cl{float:left;} .blanket div.rs {margin-left:50px; width:150px; float:right} .bl-nb {padding-right:10px;} #blanket-main a.bl-logo {color: #EB1764;cursor: pointer;font-weight: bold;text-decoration: none} .bl-source{ overflow-x:scroll; background-color: #FFFFFF; border: 1px solid #CBCBCB; color: #363636; margin: 25px 20px; width: 80%;} .bl-source div{white-space: pre;font-family: monospace;} .bl-source > div > span:first-child{background-color: #EAEAEA;color: #949494;display: inline-block;padding: 0 10px;text-align: center;width: 30px;} .bl-source .miss{background-color:#e6c3c7} .bl-source span.branchWarning{color:#000;background-color:yellow;} .bl-source span.branchOkay{color:#000;background-color:transparent;}",
        g = 60,
        h = document.head,
        i = 0,
        j = document.body,
        k = Object.keys(a.files).some(function(b) {
            return "undefined" != typeof a.files[b].branchData
        }),
        l = "<div id='blanket-main'><div class='blanket bl-title'><div class='bl-cl bl-file'><a href='http://alex-seville.github.com/blanket/' target='_blank' class='bl-logo'>Blanket.js</a> results</div><div class='bl-cl rs'>Coverage (%)</div><div class='bl-cl rs'>Covered/Total Smts.</div>" + (k ? "<div class='bl-cl rs'>Covered/Total Branches</div>" : "") + "<div style='clear:both;'></div></div>",
        m = "<div class='blanket {{statusclass}}'><div class='bl-cl bl-file'><span class='bl-nb'>{{fileNumber}}.</span><a href='javascript:blanket_toggleSource(\"file-{{fileNumber}}\")'>{{file}}</a></div><div class='bl-cl rs'>{{percentage}} %</div><div class='bl-cl rs'>{{numberCovered}}/{{totalSmts}}</div>" + (k ? "<div class='bl-cl rs'>{{passedBranches}}/{{totalBranches}}</div>" : "") + "<div id='file-{{fileNumber}}' class='bl-source' style='display:none;'>{{source}}</div><div style='clear:both;'></div></div>";
    grandTotalTemplate = "<div class='blanket grand-total {{statusclass}}'><div class='bl-cl'>{{rowTitle}}</div><div class='bl-cl rs'>{{percentage}} %</div><div class='bl-cl rs'>{{numberCovered}}/{{totalSmts}}</div>" + (k ? "<div class='bl-cl rs'>{{passedBranches}}/{{totalBranches}}</div>" : "") + "<div style='clear:both;'></div></div>";
    var n = document.createElement("script");
    n.type = "text/javascript", n.text = b.toString().replace("function " + b.name, "function blanket_toggleSource"), j.appendChild(n);
    var o = function(a, b) {
        return Math.round(a / b * 100 * 100) / 100
    }, p = function(a, b, c) {
        var d = document.createElement(a);
        d.innerHTML = c, b.appendChild(d)
    }, q = [],
        r = function(a) {
            return "undefined" != typeof a
        }, s = a.files,
        t = {
            totalSmts: 0,
            numberOfFilesCovered: 0,
            passedBranches: 0,
            totalBranches: 0,
            moduleTotalStatements: {},
            moduleTotalCoveredStatements: {},
            moduleTotalBranches: {},
            moduleTotalCoveredBranches: {}
        }, u = _blanket.options("modulePattern"),
        v = u ? new RegExp(u) : null;
    for (var w in s) {
        i++;
        var x, y = s[w],
            z = 0,
            A = 0,
            B = [];
        for (x = 0; x < y.source.length; x += 1) {
            var C = y.source[x];
            if (q.length > 0 || "undefined" != typeof y.branchData) if ("undefined" != typeof y.branchData[x + 1]) {
                var D = y.branchData[x + 1].filter(r),
                    E = 0;
                C = e(E, C, D, 0, x + 1).src
            } else C = q.length ? e(0, C, null, 0, x + 1).src : c(C);
            else C = c(C);
            var F = "";
            y[x + 1] ? (A += 1, z += 1, F = "hit") : 0 === y[x + 1] && (z++, F = "miss"), B[x + 1] = "<div class='" + F + "'><span class=''>" + (x + 1) + "</span>" + C + "</div>"
        }
        t.totalSmts += z, t.numberOfFilesCovered += A;
        var G = 0,
            H = 0;
        if ("undefined" != typeof y.branchData) for (var I = 0; I < y.branchData.length; I++) if ("undefined" != typeof y.branchData[I]) for (var J = 0; J < y.branchData[I].length; J++) "undefined" != typeof y.branchData[I][J] && (G++, "undefined" != typeof y.branchData[I][J][0] && y.branchData[I][J][0].length > 0 && "undefined" != typeof y.branchData[I][J][1] && y.branchData[I][J][1].length > 0 && H++);
        if (t.passedBranches += H, t.totalBranches += G, v) {
            var K = w.match(v)[1];
            t.moduleTotalStatements.hasOwnProperty(K) || (t.moduleTotalStatements[K] = 0, t.moduleTotalCoveredStatements[K] = 0), t.moduleTotalStatements[K] += z, t.moduleTotalCoveredStatements[K] += A, t.moduleTotalBranches.hasOwnProperty(K) || (t.moduleTotalBranches[K] = 0, t.moduleTotalCoveredBranches[K] = 0), t.moduleTotalBranches[K] += G, t.moduleTotalCoveredBranches[K] += H
        }
        var L = o(A, z),
            M = m.replace("{{file}}", w).replace("{{percentage}}", L).replace("{{numberCovered}}", A).replace(/\{\{fileNumber\}\}/g, i).replace("{{totalSmts}}", z).replace("{{totalBranches}}", G).replace("{{passedBranches}}", H).replace("{{source}}", B.join(" "));
        M = g > L ? M.replace("{{statusclass}}", "bl-error") : M.replace("{{statusclass}}", "bl-success"), l += M
    }
    var N = function(a, b, c, d, e) {
        var f = o(b, a),
            h = g > f ? "bl-error" : "bl-success",
            i = e ? "Total for module: " + e : "Global total",
            j = grandTotalTemplate.replace("{{rowTitle}}", i).replace("{{percentage}}", f).replace("{{numberCovered}}", b).replace("{{totalSmts}}", a).replace("{{passedBranches}}", d).replace("{{totalBranches}}", c).replace("{{statusclass}}", h);
        l += j
    };
    if (v) for (var O in t.moduleTotalStatements) if (t.moduleTotalStatements.hasOwnProperty(O)) {
        var P = t.moduleTotalStatements[O],
            Q = t.moduleTotalCoveredStatements[O],
            R = t.moduleTotalBranches[O],
            S = t.moduleTotalCoveredBranches[O];
        N(P, Q, R, S, O)
    }
    N(t.totalSmts, t.numberOfFilesCovered, t.totalBranches, t.passedBranches, null), l += "</div>", p("style", h, f), document.getElementById("blanket-main") ? document.getElementById("blanket-main").innerHTML = l.slice(23, - 6) : p("div", j, l)
},
function() {
    var a = {}, b = Array.prototype.slice,
        c = b.call(document.scripts);
    b.call(c[c.length - 1].attributes).forEach(function(b) {
        if ("data-cover-only" === b.nodeName && (a.filter = b.nodeValue), "data-cover-never" === b.nodeName && (a.antifilter = b.nodeValue), "data-cover-reporter" === b.nodeName && (a.reporter = b.nodeValue), "data-cover-adapter" === b.nodeName && (a.adapter = b.nodeValue), "data-cover-loader" === b.nodeName && (a.loader = b.nodeValue), "data-cover-timeout" === b.nodeName && (a.timeout = b.nodeValue), "data-cover-modulepattern" === b.nodeName && (a.modulePattern = b.nodeValue), "data-cover-reporter-options" === b.nodeName) try {
            a.reporter_options = JSON.parse(b.nodeValue)
        } catch (c) {
            if (blanket.options("debug")) throw new Error("Invalid reporter options.  Must be a valid stringified JSON object.")
        }
        if ("data-cover-testReadyCallback" === b.nodeName && (a.testReadyCallback = b.nodeValue), "data-cover-customVariable" === b.nodeName && (a.customVariable = b.nodeValue), "data-cover-flags" === b.nodeName) {
            var d = " " + b.nodeValue + " ";
            d.indexOf(" ignoreError ") > -1 && (a.ignoreScriptError = !0), d.indexOf(" autoStart ") > -1 && (a.autoStart = !0), d.indexOf(" ignoreCors ") > -1 && (a.ignoreCors = !0), d.indexOf(" branchTracking ") > -1 && (a.branchTracking = !0), d.indexOf(" sourceURL ") > -1 && (a.sourceURL = !0), d.indexOf(" debug ") > -1 && (a.debug = !0), d.indexOf(" engineOnly ") > -1 && (a.engineOnly = !0), d.indexOf(" commonJS ") > -1 && (a.commonJS = !0), d.indexOf(" instrumentCache ") > -1 && (a.instrumentCache = !0)
        }
    }), blanket.options(a), "undefined" != typeof requirejs && blanket.options("existingRequireJS", !0), blanket.options("commonJS") && (blanket._commonjs = {})
}(),
function(a) {
    a.extend({
        utils: {
            normalizeBackslashes: function(a) {
                return a.replace(/\\/g, "/")
            },
            matchPatternAttribute: function(b, c) {
                if ("string" == typeof c) {
                    if (0 === c.indexOf("[")) {
                        var d = c.slice(1, c.length - 1).split(",");
                        return d.some(function(c) {
                            return a.utils.matchPatternAttribute(b, a.utils.normalizeBackslashes(c.slice(1, - 1)))
                        })
                    }
                    if (0 === c.indexOf("//")) {
                        var e = c.slice(2, c.lastIndexOf("/")),
                            f = c.slice(c.lastIndexOf("/") + 1),
                            g = new RegExp(e, f);
                        return g.test(b)
                    }
                    return 0 === c.indexOf("#") ? window[c.slice(1)].call(window, b) : b.indexOf(a.utils.normalizeBackslashes(c)) > -1
                }
                return c instanceof Array ? c.some(function(c) {
                    return a.utils.matchPatternAttribute(b, c)
                }) : c instanceof RegExp ? c.test(b) : "function" == typeof c ? c.call(window, b) : void 0
            },
            blanketEval: function(b) {
                a._addScript(b)
            },
            collectPageScripts: function() {
                var b = Array.prototype.slice,
                    c = (b.call(document.scripts), []),
                    d = [],
                    e = a.options("filter");
                if (null != e) {
                    var f = a.options("antifilter");
                    c = b.call(document.scripts).filter(function(c) {
                        return 1 === b.call(c.attributes).filter(function(b) {
                            return "src" === b.nodeName && a.utils.matchPatternAttribute(b.nodeValue, e) && ("undefined" == typeof f || !a.utils.matchPatternAttribute(b.nodeValue, f))
                        }).length
                    })
                } else c = b.call(document.querySelectorAll("script[data-cover]"));
                return d = c.map(function(c) {
                    return a.utils.qualifyURL(b.call(c.attributes).filter(function(a) {
                        return "src" === a.nodeName
                    })[0].nodeValue)
                }), e || a.options("filter", "['" + d.join("','") + "']"), d
            },
            loadAll: function(b, c) {
                var d = b(),
                    e = a.utils.scriptIsLoaded(d, a.utils.ifOrdered, b, c);
                if (a.utils.cache[d] && a.utils.cache[d].loaded) e();
                else {
                    var f = function() {
                        a.options("debug") && console.log("BLANKET-Mark script:" + d + ", as loaded and move to next script."), e()
                    }, g = function(b) {
                        a.options("debug") && console.log("BLANKET-File loading finished"), "undefined" != typeof b && (a.options("debug") && console.log("BLANKET-Add file to DOM."), a._addScript(b)), f()
                    };
                    a.utils.attachScript({
                        url: d
                    }, function(b) {
                        a.utils.processFile(b, d, g, g)
                    })
                }
            },
            attachScript: function(b, c) {
                var d = a.options("timeout") || 3e3;
                setTimeout(function() {
                    if (!a.utils.cache[b.url].loaded) throw new Error("error loading source script")
                }, d), a.utils.getFile(b.url, c, function() {
                    throw new Error("error loading source script")
                })
            },
            ifOrdered: function(b, c) {
                var d = b(!0);
                d ? a.utils.loadAll(b, c) : c(new Error("Error in loading chain."))
            },
            scriptIsLoaded: function(b, c, d, e) {
                return a.options("debug") && console.log("BLANKET-Returning function"),
                function() {
                    a.options("debug") && console.log("BLANKET-Marking file as loaded: " + b), a.utils.cache[b].loaded = !0, a.utils.allLoaded() ? (a.options("debug") && console.log("BLANKET-All files loaded"), e()) : c && (a.options("debug") && console.log("BLANKET-Load next file."), c(d, e))
                }
            },
            cache: {},
            allLoaded: function() {
                for (var b = Object.keys(a.utils.cache), c = 0; c < b.length; c++) if (!a.utils.cache[b[c]].loaded) return !1;
                return !0
            },
            processFile: function(b, c, d, e) {
                var f = a.options("filter"),
                    g = a.options("antifilter");
                "undefined" != typeof g && a.utils.matchPatternAttribute(c, g) ? (e(b), a.options("debug") && console.log("BLANKET-File will never be instrumented:" + c), a.requiringFile(c, !0)) : a.utils.matchPatternAttribute(c, f) ? (a.options("debug") && console.log("BLANKET-Attempting instrument of:" + c), a.instrument({
                    inputFile: b,
                    inputFileName: c
                }, function(e) {
                    try {
                        a.options("debug") && console.log("BLANKET-instrument of:" + c + " was successfull."), a.utils.blanketEval(e), d(), a.requiringFile(c, !0)
                    } catch (f) {
                        if (!a.options("ignoreScriptError")) throw new Error("Error parsing instrumented code: " + f);
                        a.options("debug") && console.log("BLANKET-There was an error loading the file:" + c), d(b), a.requiringFile(c, !0)
                    }
                })) : (a.options("debug") && console.log("BLANKET-Loading (without instrumenting) the file:" + c), e(b), a.requiringFile(c, !0))
            },
            cacheXhrConstructor: function() {
                var a, b, c;
                if ("undefined" != typeof XMLHttpRequest) a = XMLHttpRequest, this.createXhr = function() {
                    return new a
                };
                else if ("undefined" != typeof ActiveXObject) {
                    for (a = ActiveXObject, b = 0; 3 > b; b += 1) {
                        c = progIds[b];
                        try {
                            new ActiveXObject(c);
                            break
                        } catch (d) {}
                    }
                    this.createXhr = function() {
                        return new a(c)
                    }
                }
            },
            craeteXhr: function() {
                throw new Error("cacheXhrConstructor is supposed to overwrite this function.")
            },
            getFile: function(b, c, d, e) {
                var f = !1;
                if (a.blanketSession) for (var g = Object.keys(a.blanketSession), h = 0; h < g.length; h++) {
                    var i = g[h];
                    if (b.indexOf(i) > -1) return c(a.blanketSession[i]), void(f = !0)
                }
                if (!f) {
                    var j = a.utils.createXhr();
                    j.open("GET", b, !0), e && e(j, b), j.onreadystatechange = function() {
                        var a, e;
                        4 === j.readyState && (a = j.status, a > 399 && 600 > a ? (e = new Error(b + " HTTP status: " + a), e.xhr = j, d(e)) : c(j.responseText))
                    };
                    try {
                        j.send(null)
                    } catch (k) {
                        if (!k.code || 101 !== k.code && 1012 !== k.code || a.options("ignoreCors") !== !1) throw k;
                        a.showManualLoader()
                    }
                }
            }
        }
    }),
    function() {
        var b = (blanket.options("commonJS") ? blanket._commonjs.require : window.require, blanket.options("commonJS") ? blanket._commonjs.requirejs : window.requirejs);
        !a.options("engineOnly") && a.options("existingRequireJS") && (a.utils.oldloader = b.load, b.load = function(b, c, d) {
            a.requiringFile(d), a.utils.getFile(d, function(e) {
                a.utils.processFile(e, d, function() {
                    b.completeLoad(c)
                }, function() {
                    a.utils.oldloader(b, c, d)
                })
            }, function(b) {
                throw a.requiringFile(), b
            })
        }), a.utils.cacheXhrConstructor()
    }()
}(blanket),
function() {
    if ("undefined" != typeof QUnit) {
        var a = function() {
            return window.QUnit.config.queue.length > 0 && blanket.noConflict().requireFilesLoaded()
        };
        QUnit.config.urlConfig[0].tooltip ? (QUnit.config.urlConfig.push({
            id: "coverage",
            label: "Enable coverage",
            tooltip: "Enable code coverage."
        }), QUnit.urlParams.coverage || blanket.options("autoStart") ? (QUnit.begin(function() {
            blanket.noConflict().setupCoverage()
        }), QUnit.done(function() {
            blanket.noConflict().onTestsDone()
        }), QUnit.moduleStart(function() {
            blanket.noConflict().onModuleStart()
        }), QUnit.testStart(function() {
            blanket.noConflict().onTestStart()
        }), QUnit.testDone(function(a) {
            blanket.noConflict().onTestDone(a.total, a.passed)
        }), blanket.noConflict().beforeStartTestRunner({
            condition: a,
            callback: function() {
                (!blanket.options("existingRequireJS") || blanket.options("autoStart")) && QUnit.start()
            }
        })) : (blanket.options("existingRequireJS") && (requirejs.load = _blanket.utils.oldloader), blanket.noConflict().beforeStartTestRunner({
            condition: a,
            callback: function() {
                (!blanket.options("existingRequireJS") || blanket.options("autoStart")) && QUnit.start()
            },
            coverage: !1
        }))) : (QUnit.begin = function() {
            blanket.noConflict().setupCoverage()
        }, QUnit.done = function() {
            blanket.noConflict().onTestsDone()
        }, QUnit.moduleStart = function() {
            blanket.noConflict().onModuleStart()
        }, QUnit.testStart = function() {
            blanket.noConflict().onTestStart()
        }, QUnit.testDone = function(a) {
            blanket.noConflict().onTestDone(a.total, a.passed)
        }, blanket.beforeStartTestRunner({
            condition: a,
            callback: QUnit.start
        }))
    }
}(); 