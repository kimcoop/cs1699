
/*! DexterJS - v0.5.0 - 2014-02-02
 * https://github.com/leobalter/DexterJS
 * Copyright (c) 2014 Leonardo Balter; Licensed MIT, GPL */"use strict";
! function() {
    function a(a, b, c) {
        a._oldCall = b[c], a._seenObj = b, a._seenMethod = c
    }
    function b(b, c, d, e) {
        var g = this;
        if (this.called = 0, this.isActive = !0, "string" != typeof d) throw "Dexter should receive method name as a String";
        if (!c || "function" != typeof c[d]) throw 'Dexter should receive a valid object and method combination in arguments. Ex.: window & "alert".';
        "function" == typeof e && (this.callback = e), a(this, c, d), c[d] = function() {
            var a = [].slice.apply(arguments);
            return g.called = g.called + 1, f[b].call(this, g, a)
        }
    }
    function c(a) {
        return function(c, d, e) {
            var f = new b(a, c, d, e);
            return g.stored.push(f), f
        }
    }
    function d() {
        for (; g.stored.length;) g.stored.pop().restore();
        return 0 === g.stored.length
    }
    var e, f, g = {
        stored: []
    };
    e = function() {
        this._seenObj[this._seenMethod] = this._oldCall, this.isActive = !1
    }, f = {
        spy: function(a, b) {
            var c = a._oldCall.apply(this, b);
            return "function" == typeof a.callback && a.callback.apply(this, b), c
        },
        fake: function(a, b) {
            return "function" == typeof a.callback ? a.callback.apply(this, b) : void 0
        }
    }, b.prototype = {
        restore: e
    }, g.spy = c("spy"), g.fake = c("fake"), g.restore = d, "undefined" == typeof module || "undefined" == typeof module.exports ? window.Dexter = g : module.exports = g
}(),
function() {
    function a(a, b) {
        if (1 !== a || b) throw new Error("INVALID_STATE_ERR")
    }
    function b(a) {
        var b, c;
        return "undefined" != typeof d.DOMParser ? (c = new d.DOMParser, b = c.parseFromString(a, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a)), b
    }
    var c, d, e, f, g, h, i = {};
    return i.xhr = function() {
        var a;
        try {
            return a = new XMLHttpRequest, XMLHttpRequest
        } catch (b) {
            return !1
        }
    }(), i.xhr ? (c = window.Dexter, d = window, c.fakeXHR = function() {
        return new h
    }, e = {
        100: "Continue",
        101: "Switching Protocols",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        300: "Multiple Choice",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Request Entity Too Large",
        414: "Request-URI Too Long",
        415: "Unsupported Media Type",
        416: "Requested Range Not Satisfiable",
        417: "Expectation Failed",
        422: "Unprocessable Entity",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported"
    }, f = ["Accept-Charset", "Accept-Encoding", "Connection", "Content-Length", "Cookie", "Cookie2", "Content-Transfer-Encoding", "Date", "Expect", "Host", "Keep-Alive", "Referer", "TE", "Trailer", "Transfer-Encoding", "Upgrade", "User-Agent", "Via"], "undefined" == typeof Array.prototype.indexOf && (f.indexOf = function(a, b) {
        for (var c = b || 0, d = this.length; d > c; c++) if (this[c] === a) return c;
        return -1
    }), g = {
        UNSENT: 0,
        OPENED: 1,
        HEADERS_RECEIVED: 2,
        LOADING: 3,
        DONE: 4,
        onabort: null,
        onerror: null,
        onload: null,
        onloadend: null,
        onloadstart: null,
        onprogress: null,
        onreadystatechange: null,
        ontimeout: null,
        readyState: 0,
        response: "",
        responseText: "",
        responseType: "",
        responseXML: null,
        withCredentials: !1,
        status: 0,
        statusText: "",
        timeout: 0,
        abort: function() {
            this.aborted = !0, this.errorFlag = !0, this.method = null, this.url = null, this.async = void 0, this.username = null, this.password = null, this.responseText = null, this.responseXML = null, this.requestHeaders = {}, this.sendFlag = !1, this.__DexterStateChange(this.readyState > this.UNSENT && this.sendFlag ? this.DONE : this.UNSENT)
        },
        getResponseHeader: function(a) {
            var b, c = this.responseHeaders;
            if (this.readyState < this.HEADERS_RECEIVED) return null;
            if (/^Set-Cookie2?$/i.test(a)) return null;
            a = a.toLowerCase();
            for (b in c) if (c.hasOwnProperty(b) && b.toLowerCase() === a) return c[b];
            return null
        },
        open: function(a, b, c, d, e) {
            if ("undefined" == typeof a || "undefined" == typeof b) throw new Error("Not enough arguments");
            this.method = a, this.url = b, this.async = "undefined" == typeof c ? !0 : !! c, this.username = d, this.password = e, this.responseText = null, this.responseXML = null, this.requestHeaders = {}, this.sendFlag = !1, this.__DexterStateChange(this.OPENED)
        },
        send: function(b) {
            var c;
            a(this.readyState, this.sendFlag), /^(get|head)$/i.test(this.method) || (this.requestHeaders["Content-Type"] ? (c = this.requestHeaders["Content-Type"].split(";"), this.requestHeaders["Content-Type"] = c[0] + ";charset=utf-8") : this.requestHeaders["Content-Type"] = "text/plain;charset=utf-8", this.requestBody = b), this.errorFlag = !1, this.sendFlag = !0, this.__DexterStateChange(this.OPENED), "function" == typeof this.onSend && this.onSend(this)
        },
        setRequestHeader: function(b, c) {
            if (a(this.readyState, this.sendFlag), f.indexOf(b) >= 0 || /^(Sec-|Proxy-)/.test(b)) throw new Error('Refused to set unsafe header "' + b + '"');
            this.requestHeaders[b] ? this.requestHeaders[b] += "," + c : this.requestHeaders[b] = c
        },
        getAllResponseHeaders: function() {
            var a, b = "";
            if (this.readyState < this.HEADERS_RECEIVED) return "";
            for (a in this.responseHeaders) this.responseHeaders.hasOwnProperty(a) && !/^Set-Cookie2?$/i.test(a) && (b += a + ": " + this.responseHeaders[a] + "\r\n");
            return b
        },
        __DexterSetResponseHeaders: function(a) {
            var b;
            this.responseHeaders = {};
            for (b in a) a.hasOwnProperty(b) && (this.responseHeaders[b] = a[b]);
            this.async && this.__DexterStateChange(this.HEADERS_RECEIVED)
        },
        __DexterXHR: !0,
        __DexterStateChange: function(a) {
            var b;
            if (this.readyState = a, "function" == typeof this.onreadystatechange) {
                try {
                    b = document.createEvent("Event"), b.initEvent("readystatechange", !1, !1)
                } catch (c) {
                    b = {
                        type: "readystatechange"
                    }
                }
                this.onreadystatechange.call(this, [b])
            }
        },
        __DexterSetResponseBody: function(a) {
            var c, d = this.chunkSize || 10,
                e = 0;
            if (this.responseText = "", this.async) for (; e <= a.length;) this.__DexterStateChange(this.LOADING), this.responseText += a.substring(e, e += d);
            else this.responseText = a;
            if (c = this.getResponseHeader("Content-Type") || "", a && /(text\/xml)|(application\/xml)|(\+xml)/.test(c)) try {
                this.responseXML = b(a)
            } catch (f) {}
        },
        __DexterRespond: function(a) {
            var b = a.body || "",
                c = a.headers || {}, d = this.DONE;
            if (this.readyState === d) throw new Error("Request already done");
            this.__DexterSetResponseHeaders(c), this.status = a.status || 200, this.statusText = e[this.status], this.__DexterSetResponseBody(b), this.async ? this.__DexterStateChange(d) : this.readyState = d
        }
    }, h = function() {
        var a, b, c = this;
        this.requests = [], this.doneRequests = [], a = function() {
            return c.requests.push(this), this.__DexterRef = Date.now(), this
        }, b = function() {
            a.call(this)
        }, b.prototype = g, d.XMLHttpRequest = b
    }, void(h.prototype = {
        respond: function(a, b) {
            var c;
            a = a || {}, c = b ? this.requests.splice(b, 1)[0] : this.requests.shift(), c.__DexterRespond(a), this.doneRequests.push(c)
        },
        spy: function(a) {
            var b = c.spy(g, "send", a);
            return this.__spy = b, b
        },
        restore: function() {
            this.__spy && this.__spy.restore(), d.XMLHttpRequest = i.xhr
        }
    })) : (module.exports = function() {
        return {}
    }, !1)
}(); 