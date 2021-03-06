/*!
 * 
 *   red5pro-sdk - Red5 Pro HTML Publisher and Subscriber SDK.
 *   Author: Infrared5 Inc.
 *   Version: 7.0.0-release.b58
 *   Url: https://github.com/red5pro/red5pro-html-sdk#readme
 * 
 *   Copyright Â© 2015 Infrared5, Inc. All rights reserved.
 * 
 *   The accompanying code comprising examples for use solely in conjunction with Red5 Pro (the "Example Code") 
 *   is  licensed  to  you  by  Infrared5  Inc.  in  consideration  of  your  agreement  to  the  following  
 *   license terms  and  conditions.  Access,  use,  modification,  or  redistribution  of  the  accompanying  
 *   code  constitutes your acceptance of the following license terms and conditions.
 * 
 *   Permission is hereby granted, free of charge, to you to use the Example Code and associated documentation 
 *   files (collectively, the "Software") without restriction, including without limitation the rights to use, 
 *   copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit 
 *   persons to whom the Software is furnished to do so, subject to the following conditions:
 * 
 *   The Software shall be used solely in conjunction with Red5 Pro. Red5 Pro is licensed under a separate end 
 *   user  license  agreement  (the  "EULA"),  which  must  be  executed  with  Infrared5,  Inc.   
 *   An  example  of  the EULA can be found on our website at: https://account.red5pro.com/assets/LICENSE.txt.
 * 
 *   The above copyright notice and this license shall be included in all copies or portions of the Software.
 * 
 *   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,  INCLUDING  BUT  
 *   NOT  LIMITED  TO  THE  WARRANTIES  OF  MERCHANTABILITY, FITNESS  FOR  A  PARTICULAR  PURPOSE  AND  
 *   NONINFRINGEMENT.   IN  NO  EVENT  SHALL INFRARED5, INC. BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
 *   WHETHER IN  AN  ACTION  OF  CONTRACT,  TORT  OR  OTHERWISE,  ARISING  FROM,  OUT  OF  OR  IN CONNECTION 
 *   WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 */
! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.red5prosdk = t() : e.red5prosdk = t() }(this, function() {
    return function(e) {
        function t(r) { if (n[r]) return n[r].exports; var i = n[r] = { i: r, l: !1, exports: {} }; return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports }
        var n = {};
        return t.m = e, t.c = n, t.i = function(e) { return e }, t.d = function(e, n, r) { t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r }) }, t.n = function(e) { var n = e && e.__esModule ? function() { return e.default } : function() { return e }; return t.d(n, "a", n), n }, t.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, t.p = "", t(t.s = 211)
    }([function(e, t, n) {
        "use strict";
        t.__esModule = !0, t.default = function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(93),
            i = function(e) { return e && e.__esModule ? e : { default: e } }(r);
        t.default = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, i.default)(e, r.key, r)
                }
            }
            return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t }
        }()
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.fatal = t.error = t.warn = t.debug = t.info = t.trace = t.getLogger = t.establishLogger = t.LEVELS = void 0;
        var r = n(97),
            i = n(120),
            o = void 0,
            s = function(e) { return function(t) { return "(" + e + ") " + t } },
            a = function(e) { return function(t, n) { o[e](s(t)(n)) } },
            u = t.LEVELS = { TRACE: "trace", INFO: "info", DEBUG: "debug", WARN: "warn", ERROR: "error", FATAL: "fatal" };
        t.establishLogger = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                n = [];
            if (n.push({ level: e, stream: new i.RawStream, type: "raw" }), t) {
                var s = t.map(function(t) { t.level = e });
                n = n.concat(s)
            }
            o = (0, r.createLogger)({ level: e, name: "red5pro-sdk", streams: n })
        }, t.getLogger = function() { return o }, t.trace = a(u.TRACE), t.info = a(u.INFO), t.debug = a(u.DEBUG), t.warn = a(u.WARN), t.error = a(u.ERROR), t.fatal = a(u.FATAL)
    }, function(e, t) { var n = e.exports = { version: "2.4.0" }; "number" == typeof __e && (__e = n) }, function(e, t, n) {
        "use strict";

        function r() {
            !v && window.screenfull && window.screenfull.enabled && (v = !0, window.screenfull.onchange(function() {
                var e = void 0,
                    t = h.length;
                for (e = 0; e < t; e++) h[e](window.screenfull.isFullscreen)
            }))
        }

        function i(e) {
            var t = screen.orientation ? screen.orientation.angle : void 0,
                n = void 0 === t ? window.matchMedia("(orientation: portrait)").matches ? 0 : 90 : t,
                r = void 0,
                i = p.length;
            for ((0, l.debug)("[window:onorientationchange]", "orientation(" + n + ")."), r = 0; r < i; r++) p[r]((n + 90) % 360)
        }

        function o(e) {
            var t = void 0,
                n = b.length;
            for (t = 0; t < n; t++) b[t]();
            m = !0
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var s = n(62),
            a = function(e) { return e && e.__esModule ? e : { default: e } }(s),
            u = n(6),
            c = n(115),
            d = n(114),
            l = n(2),
            f = [],
            h = [],
            v = !1,
            p = [],
            b = [],
            m = !1,
            _ = function() { var e = "0,0,0"; try { e = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1] } catch (t) { try { navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (e = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]) } catch (e) {} } return e.split(",") },
            y = function(e) { return window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function(e) { return window.setTimeout(e, 1e3) } }(),
            g = window.adapter,
            S = !!navigator.mozGetUserMedia,
            E = !!document.documentMode,
            w = g ? "edge" === window.adapter.browserDetails.browser.toLowerCase() : !E && !!window.StyleMedia,
            k = "ontouchstart" in window || window.DocumentTouch && window.document instanceof window.DocumentTouch;
        g || (navigator.getUserMedia = navigator.mediaDevices && navigator.mediaDevices.getUserMedia || navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.msGetUserMedia), t.default = {
            requestFrame: y,
            getIsMoz: function() { return S },
            getIsEdge: function() { return w },
            isTouchEnabled: function() { return k },
            supportsWebSocket: function() { return !!window.WebSocket },
            supportsHLS: function() { var e = document.createElement("video"); return e.canPlayType("application/vnd.apple.mpegURL").length > 0 || e.canPlayType("application/x-mpegURL").length > 0 || e.canPlayType("audio/mpegurl").length > 0 || e.canPlayType("audio/x-mpegurl").length > 0 },
            supportsFlashVersion: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "."; return _()[0] >= e.split(t)[0] },
            resolveElement: function(e) { try { var t = document.getElementById(e); if (!t) throw new c.NoElementFoundError("Element with id(" + e + ") could not be found."); return t } catch (t) { throw new c.NoElementFoundError("Error in accessing element with id(" + e + "). " + t.message) } },
            createWebSocket: function(e) { return new WebSocket(e) },
            setVideoSource: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                try { e.srcObject = t } catch (n) {
                    (0, l.warn)("[setVideoSource:obj]", "Could not set srcObject: " + n.message), S ? e.mozSrcObject = t : e.src = window.URL.createObjectURL(t)
                }
                if (n) try {
                    var r = e.play();
                    r && r.then(function() { return (0, l.debug)("[setVideoSource:action]", "play (START)") }).catch(function(e) { return (0, l.warn)("[setVideoSource:action]", "play (FAULT) " + (e.message ? e.message : e)) })
                } catch (t) {
                    (0, l.warn)("[setVideoSource:action]", "play (CATCH::FAULT) " + t.message);
                    try { e.setAttribute("autoplay", !1), e.pause() } catch (e) {
                        (0, l.warn)("[setVideoSource:action]", "pause (CATCH::FAULT) " + e.message)
                    }
                } else try { e.setAttribute("autoplay", !1), e.pause() } catch (e) {}
            },
            injectScript: function(e) {
                var t = new u.DeferredPromise,
                    n = document.createElement("script");
                return n.type = "text/javascript", n.onload = function() { t.resolve() }, n.onreadystatechange = function() { "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t.resolve()) }, n.src = e, document.getElementsByTagName("head")[0].appendChild(n), t.promise
            },
            gUM: function(e) { return (navigator.mediaDevices || navigator).getUserMedia(e) },
            setGlobal: function(e, t) { window[e] = t },
            getSwfObject: function() { return window.swfobject },
            getEmbedObject: function(e) { return document.getElementById(e) },
            getElementId: function(e) { return e.getAttribute("id") },
            addOrientationChangeHandler: function(e) { var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; "onorientationchange" in window && ((0, l.debug)("[window:orientation]", "[addOrientationChangeHandler]", "adding responder."), p.push(e), t && i()), 1 === p.length && ((0, l.debug)("[window:orientation]", "[addOrientationChangeHandler]", "onorientationchange added."), window.addEventListener("orientationchange", i)) },
            removeOrientationChangeHandler: function(e) {
                for (var t = p.length; --t > -1;)
                    if (p[t] === e) { p.slice(t, 1); break }
                0 === p.length && ((0, l.debug)("[window:orientation]", "[removeOrientationChangeHandler]:: onorientationchange removed."), window.removeEventListener("onorientationchange", i))
            },
            addCloseHandler: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                b.splice(-1 === t ? b.length : t, 0, e), m || window.addEventListener("unload", o)
            },
            removeCloseHandler: function(e) {
                for (var t = b.length; --t > -1;)
                    if (b[t] === e) { b.slice(t, 1); break }
            },
            invoke: function(e, t) { window.hasOwnProperty(e) && window[e].call(window, t) },
            toggleFullScreen: function(e) { window.screenfull && window.screenfull.enabled && window.screenfull.toggle(e) },
            onFullScreenStateChange: function(e) { h.push(e), r(window.screenfull) },
            onOrientationMetadata: d.onOrientationMetadata,
            onStreamingModeMetadata: d.onStreamingModeMetadata,
            hasAttributeDefined: function(e, t) { var n = e.getAttribute(t); return null !== n && void 0 !== (void 0 === n ? "undefined" : (0, a.default)(n)) && "string" == typeof n && ("" === n || "true" === n || n === t) },
            hasClassDefined: function(e, t) { return e.classList.contains(t) },
            createElement: function(e, t) { return "text" === e ? document.createTextNode(t.toString()) : document.createElement(e, t) },
            addSubscriptionAssignmentHandler: function(e) { f.push(e), void 0 === window.setSubscriberId && (window.setSubscriberId = function(e) { f.shift()(e) }) },
            getMouseXFromEvent: function(e) { return e || (e = window.event), e.pageX ? e.pageX : e.clientX ? e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft : 0 },
            getScrollX: function() { return void 0 !== window.pageXOffset ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft },
            createEvent: function(e) { return document.createEvent(e) },
            getGlobal: function() { return window }
        }
    }, function(e, t, n) { e.exports = { default: n(160), __esModule: !0 } }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.Future = t.DeferredPromise = void 0;
        var i = n(60),
            o = r(i),
            s = n(0),
            a = r(s),
            u = function e() {
                var t = this;
                (0, a.default)(this, e), this.resolve = void 0, this.reject = void 0, this.promise = new o.default(function(e, n) { t.resolve = e, t.reject = n })
            },
            c = { createIfNotExist: function(e) { var t = e; return t || (t = new u), t } };
        t.DeferredPromise = u, t.Future = c
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        t.__esModule = !0;
        var i = n(143),
            o = r(i),
            s = n(141),
            a = r(s),
            u = n(62),
            c = r(u);
        t.default = function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, c.default)(t)));
            e.prototype = (0, a.default)(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (o.default ? (0, o.default)(e, t) : e.__proto__ = t)
        }
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(62),
            i = function(e) { return e && e.__esModule ? e : { default: e } }(r);
        t.default = function(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" !== (void 0 === t ? "undefined" : (0, i.default)(t)) && "function" != typeof t ? e : t }
    }, function(e, t, n) {
        var r = n(74)("wks"),
            i = n(55),
            o = n(11).Symbol,
            s = "function" == typeof o;
        (e.exports = function(e) { return r[e] || (r[e] = s && o[e] || (s ? o : i)("Symbol." + e)) }).store = r
    }, function(e, t, n) {
        var r = n(11),
            i = n(3),
            o = n(20),
            s = n(22),
            a = function(e, t, n) {
                var u, c, d, l = e & a.F,
                    f = e & a.G,
                    h = e & a.S,
                    v = e & a.P,
                    p = e & a.B,
                    b = e & a.W,
                    m = f ? i : i[t] || (i[t] = {}),
                    _ = m.prototype,
                    y = f ? r : h ? r[t] : (r[t] || {}).prototype;
                f && (n = t);
                for (u in n)(c = !l && y && void 0 !== y[u]) && u in m || (d = c ? y[u] : n[u], m[u] = f && "function" != typeof y[u] ? n[u] : p && c ? o(d, r) : b && y[u] == d ? function(e) {
                    var t = function(t, n, r) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                                case 0:
                                    return new e;
                                case 1:
                                    return new e(t);
                                case 2:
                                    return new e(t, n)
                            }
                            return new e(t, n, r)
                        }
                        return e.apply(this, arguments)
                    };
                    return t.prototype = e.prototype, t
                }(d) : v && "function" == typeof d ? o(Function.call, d) : d, v && ((m.virtual || (m.virtual = {}))[u] = d, e & a.R && _ && !_[u] && s(_, u, d)))
            };
        a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, e.exports = a
    }, function(e, t) { var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = n) }, function(e, t, n) { e.exports = { default: n(151), __esModule: !0 } }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.WebSocketStateEventTypes = t.SharedObjectEventTypes = t.FailoverSubscriberEventTypes = t.RTMPSubscriberEventTypes = t.RTCSubscriberEventTypes = t.SubscriberEventTypes = t.FailoverPublisherEventTypes = t.RTMPPublisherEventTypes = t.RTCPublisherEventTypes = t.PublisherEventTypes = t.WebSocketStateEvent = t.SharedObjectEvent = t.SubscriberEvent = t.PublisherEvent = t.Event = void 0;
        var i = n(5),
            o = r(i),
            s = n(8),
            a = r(s),
            u = n(7),
            c = r(u),
            d = n(0),
            l = r(d),
            f = n(1),
            h = r(f),
            v = n(82);
        Object.defineProperty(t, "PublisherEventTypes", { enumerable: !0, get: function() { return v.PublisherEventTypes } }), Object.defineProperty(t, "RTCPublisherEventTypes", { enumerable: !0, get: function() { return v.RTCPublisherEventTypes } }), Object.defineProperty(t, "RTMPPublisherEventTypes", { enumerable: !0, get: function() { return v.RTMPPublisherEventTypes } }), Object.defineProperty(t, "FailoverPublisherEventTypes", { enumerable: !0, get: function() { return v.FailoverPublisherEventTypes } });
        var p = n(84);
        Object.defineProperty(t, "SubscriberEventTypes", { enumerable: !0, get: function() { return p.SubscriberEventTypes } }), Object.defineProperty(t, "RTCSubscriberEventTypes", { enumerable: !0, get: function() { return p.RTCSubscriberEventTypes } }), Object.defineProperty(t, "RTMPSubscriberEventTypes", { enumerable: !0, get: function() { return p.RTMPSubscriberEventTypes } }), Object.defineProperty(t, "FailoverSubscriberEventTypes", { enumerable: !0, get: function() { return p.FailoverSubscriberEventTypes } });
        var b = n(83);
        Object.defineProperty(t, "SharedObjectEventTypes", { enumerable: !0, get: function() { return b.SharedObjectEventTypes } });
        var m = n(85);
        Object.defineProperty(t, "WebSocketStateEventTypes", { enumerable: !0, get: function() { return m.WebSocketStateEventTypes } });
        var _ = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                    (0, l.default)(this, e), this._type = t, this._data = n
                }
                return (0, h.default)(e, [{ key: "type", get: function() { return this._type } }, { key: "data", get: function() { return this._data } }]), e
            }(),
            y = function(e) {
                function t(e, n, r) {
                    (0, l.default)(this, t);
                    var i = (0, a.default)(this, (t.__proto__ || (0, o.default)(t)).call(this, e, r));
                    return i._publisher = n, i
                }
                return (0, c.default)(t, e), (0, h.default)(t, [{ key: "publisher", get: function() { return this._publisher } }]), t
            }(_),
            g = function(e) {
                function t(e, n, r) {
                    (0, l.default)(this, t);
                    var i = (0, a.default)(this, (t.__proto__ || (0, o.default)(t)).call(this, e, r));
                    return i._subscriber = n, i
                }
                return (0, c.default)(t, e), (0, h.default)(t, [{ key: "subscriber", get: function() { return this._subscriber } }]), t
            }(_),
            S = function(e) {
                function t(e, n, r) {
                    (0, l.default)(this, t);
                    var i = (0, a.default)(this, (t.__proto__ || (0, o.default)(t)).call(this, e, r));
                    return i._name = n, i
                }
                return (0, c.default)(t, e), (0, h.default)(t, [{ key: "name", get: function() { return this._name } }]), t
            }(_),
            E = function(e) {
                function t(e, n, r) {
                    (0, l.default)(this, t);
                    var i = (0, a.default)(this, (t.__proto__ || (0, o.default)(t)).call(this, e, r));
                    return i._name = n, i
                }
                return (0, c.default)(t, e), (0, h.default)(t, [{ key: "name", get: function() { return this._name } }]), t
            }(_);
        t.Event = _, t.PublisherEvent = y, t.SubscriberEvent = g, t.SharedObjectEvent = S, t.WebSocketStateEvent = E
    }, function(e, t) { e.exports = function(e) { return "object" == typeof e ? null !== e : "function" == typeof e } }, function(e, t, n) {
        var r = n(16),
            i = n(101),
            o = n(76),
            s = Object.defineProperty;
        t.f = n(17) ? Object.defineProperty : function(e, t, n) {
            if (r(e), t = o(t, !0), r(n), i) try { return s(e, t, n) } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    }, function(e, t, n) {
        var r = n(14);
        e.exports = function(e) { if (!r(e)) throw TypeError(e + " is not an object!"); return e }
    }, function(e, t, n) { e.exports = !n(25)(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }) }, function(e, t, n) { e.exports = { default: n(158), __esModule: !0 } }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(0),
            o = r(i),
            s = n(1),
            a = r(s),
            u = "RED5PRO",
            c = function() {
                function e() {
                    (0, o.default)(this, e), this._callbacks = {}, this._callbacks[u] = []
                }
                return (0, a.default)(e, [{
                    key: "_notify",
                    value: function(e, t) {
                        var n = void 0,
                            r = e.length;
                        for (n = 0; n < r; n++) e[n](t)
                    }
                }, {
                    key: "on",
                    value: function(e, t) {
                        if ("function" == typeof t) {
                            if ("*" === e) return void this._callbacks[u].push(t);
                            void 0 === this._callbacks[e] && (this._callbacks[e] = []), -1 === this._callbacks[e].indexOf(t) && this._callbacks[e].push(t)
                        }
                    }
                }, { key: "off", value: function(e, t) { var n = this._callbacks[e]; if ("*" === e && (n = this._callbacks[u]), n) { var r = n.indexOf(t); - 1 !== r && n.splice(r, 1) } } }, {
                    key: "trigger",
                    value: function(e) {
                        var t = e.type;
                        this._callbacks[t] && this._notify(this._callbacks[t], e), this._notify(this._callbacks[u], e)
                    }
                }]), e
            }();
        t.default = c
    }, function(e, t, n) {
        var r = n(63);
        e.exports = function(e, t, n) {
            if (r(e), void 0 === t) return e;
            switch (n) {
                case 1:
                    return function(n) { return e.call(t, n) };
                case 2:
                    return function(n, r) { return e.call(t, n, r) };
                case 3:
                    return function(n, r, i) { return e.call(t, n, r, i) }
            }
            return function() { return e.apply(t, arguments) }
        }
    }, function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) { return n.call(e, t) }
    }, function(e, t, n) {
        var r = n(15),
            i = n(38);
        e.exports = n(17) ? function(e, t, n) { return r.f(e, t, i(1, n)) } : function(e, t, n) { return e[t] = n, e }
    }, function(e, t, n) {
        var r = n(68),
            i = n(48);
        e.exports = function(e) { return r(i(e)) }
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.PlaybackControlsImpl = t.PlaybackControls = t.PlaybackController = void 0;
        var i = n(5),
            o = r(i),
            s = n(0),
            a = r(s),
            u = n(1),
            c = r(u),
            d = n(8),
            l = r(d),
            f = n(7),
            h = r(f),
            v = n(19),
            p = r(v),
            b = n(4),
            m = r(b),
            _ = n(128),
            y = r(_),
            g = n(88),
            S = n(35),
            E = n(2),
            w = "PlaybackControls",
            k = function(e) {
                function t() { return (0, a.default)(this, t), (0, l.default)(this, (t.__proto__ || (0, o.default)(t)).call(this)) }
                return (0, h.default)(t, e), (0, c.default)(t, [{ key: "play", value: function() {} }, { key: "pause", value: function() {} }, { key: "resume", value: function() {} }, { key: "stop", value: function() {} }, { key: "mute", value: function() {} }, { key: "unmute", value: function() {} }, { key: "setVolume", value: function(e) {} }, { key: "seekTo", value: function(e) { arguments.length > 1 && void 0 !== arguments[1] && arguments[1] } }, { key: "toggleFullScreen", value: function() {} }]), t
            }(p.default),
            C = function() {
                function e() {
                    (0, a.default)(this, e)
                }
                return (0, c.default)(e, [{ key: "getVolume", value: function() {} }, { key: "setVolume", value: function(e) {} }, { key: "setSeekTime", value: function(e) { arguments.length > 1 && void 0 !== arguments[1] && arguments[1] } }, { key: "setPlaybackDuration", value: function(e) {} }, { key: "getState", value: function() {} }, { key: "setState", value: function(e) {} }, { key: "setAsVOD", value: function(e) {} }, { key: "enable", value: function(e) {} }]), e
            }(),
            P = function(e) {
                function t(e, n) {
                    (0, a.default)(this, t);
                    var r = (0, l.default)(this, (t.__proto__ || (0, o.default)(t)).call(this));
                    return r.player = e, r.container = n, r._controlbar = void 0, r._playPauseButton = void 0, r._muteButton = void 0, r._volumeField = void 0, r._seekTimeField = void 0, r._timeField = void 0, r._fullScreenButton = void 0, r._state = S.PlaybackState.IDLE, r._mutedState = !1, r._resumeAfterSeek = !1, r._playbackDuration = 0, r._volumeValue = 1, r._onPlayPauseClickBound = r._onPlayPauseClick.bind(r), r.decorate(r.container), r
                }
                return (0, h.default)(t, e), (0, c.default)(t, [{
                    key: "decorate",
                    value: function(e) {
                        (0, E.debug)(w, "[decorate]");
                        var t = m.default.createElement("div");
                        t.classList.add("red5pro-media-control-bar"), this._playPauseButton = this._createPlayPauseButton(), this._muteButton = this._createMuteButton(), this._volumeField = this._createVolumeControl(), this._seekTimeField = this._createSeekControl(), this._timeField = this._createPlaybackTime(), this._fullScreenButton = this._createFullScreenToggle(), t.appendChild(this._playPauseButton), t.appendChild(this._timeField), t.appendChild(this._seekTimeField.view), t.appendChild(this._muteButton), t.appendChild(this._volumeField.view), t.appendChild(this._fullScreenButton), e.appendChild(t), this._controlbar = t;
                        var n = void 0,
                            r = function() { clearTimeout(n), n = setTimeout(function() { t.classList.remove("red5pro-media-control-bar-show") }, 6e3) };
                        m.default.isTouchEnabled() ? (t.classList.add("red5pro-media-control-bar-show"), this.container.addEventListener("touchend", function() { t.classList.toggle("red5pro-media-control-bar-show"), r() }), r()) : (this.container.addEventListener("mouseover", function() { t.classList.add("red5pro-media-control-bar-show") }), this.container.addEventListener("mouseout", function() { t.classList.remove("red5pro-media-control-bar-show") })), this.setState(S.PlaybackState.IDLE).onFullScreenChange(!1).setSeekTime(0).enable(!1)
                    }
                }, { key: "_onPlayPauseClick", value: function() { this.getState() === S.PlaybackState.PLAYING ? this.player.pause() : this.getState() === S.PlaybackState.PAUSED ? this.player.resume() : this.player.play() } }, { key: "_createPlayPauseButton", value: function() { var e = m.default.createElement("button"); return e.setAttribute("aria-label", "Toggle Playback"), e.classList.add("red5pro-media-control-element"), e.classList.add("red5pro-media-element-button"), e.classList.add("red5pro-media-playpause-button"), e } }, {
                    key: "_createMuteButton",
                    value: function() {
                        var e = this,
                            t = m.default.createElement("button");
                        return t.setAttribute("aria-label", "Toggle Mute Audio"), t.classList.add("red5pro-media-control-element"), t.classList.add("red5pro-media-element-button"), t.classList.add("red5pro-media-muteunmute-button"), t.addEventListener("click", function() { e.getMutedState() ? (e.player.unmute(), e.setMutedState(!1)) : (e.player.mute(), e.setMutedState(!0)) }), t
                    }
                }, {
                    key: "_createVolumeControl",
                    value: function() {
                        var e = this,
                            t = new y.default("volume");
                        return t.view.classList.add("red5pro-media-control-element"), t.view.classList.add("red5pro-media-volume-slider"), t.view.classList.add("red5pro-media-slider"), t.on(g.SliderEventTypes.CHANGE, function(t) {
                            var n = Number(t.data);
                            e.player.setVolume(n)
                        }), t
                    }
                }, {
                    key: "_createSeekControl",
                    value: function() {
                        var e = this,
                            t = new y.default("seek");
                        return t.view.classList.add("red5pro-media-control-element"), t.view.classList.add("red5pro-media-seektime-slider"), t.view.classList.add("red5pro-media-slider"), t.on(g.SliderEventTypes.CHANGE_START, function() { e.getState() === S.PlaybackState.PLAYING && (e._resumeAfterSeek = !0, e.player.pause()) }), t.on(g.SliderEventTypes.CHANGE, function(t) {
                            var n = Number(t.data);
                            e.player.seekTo(n, 0 === e._playbackDuration ? void 0 : e._playbackDuration), e.setSeekTime(n * e._playbackDuration, e._playbackDuration)
                        }), t.on(g.SliderEventTypes.CHANGE_COMPLETE, function() { e._resumeAfterSeek && e.getState() === S.PlaybackState.PAUSED && (e._resumeAfterSeek = !1, e.player.resume()) }), t
                    }
                }, {
                    key: "_createPlaybackTime",
                    value: function() {
                        var e = m.default.createElement("span"),
                            t = m.default.createElement("text", "hello!");
                        return e.classList.add("red5pro-media-control-element"), e.classList.add("red5pro-media-time-field"), e.appendChild(t), e
                    }
                }, {
                    key: "_createFullScreenToggle",
                    value: function() {
                        var e = this,
                            t = m.default.createElement("button");
                        return t.setAttribute("aria-label", "Toggle Fullscreen"), t.classList.add("red5pro-media-control-element"), t.classList.add("red5pro-media-element-button"), t.classList.add("red5pro-media-fullscreen-button"), t.addEventListener("click", function() { e.player.toggleFullScreen() }), t
                    }
                }, { key: "enable", value: function(e) { e ? (this._playPauseButton.classList.remove("red5pro-media-element-button-disabled"), this._playPauseButton.addEventListener("click", this._onPlayPauseClickBound)) : (this._playPauseButton.classList.add("red5pro-media-element-button-disabled"), this._playPauseButton.removeEventListener("click", this._onPlayPauseClickBound)) } }, {
                    key: "formatTime",
                    value: function(e) {
                        var t = 0,
                            n = 0 === e ? 0 : parseInt(e / 60),
                            r = 0;
                        n >= 60 && (t = parseInt(n / 60), n %= 60), r = 0 === e ? 0 : parseInt(e % 60);
                        var i = t < 10 ? ["0" + t] : [t];
                        return i.push(n < 10 ? ["0" + n] : [n]), i.push(r < 10 ? ["0" + r] : [r]), i.join(":")
                    }
                }, { key: "getVolume", value: function() { return this._volumeValue } }, { key: "setVolume", value: function(e) { return this._volumeField.value = e, this._volumeValue = e, 0 === e ? this.setMutedState(!0) : this.getMutedState() && this.setMutedState(!1), this } }, { key: "setSeekTime", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0; return this._seekTimeField.value = 0 === t ? 0 : e / t, 0 !== this._playbackDuration && parseInt(this._playbackDuration) <= parseInt(e) && (this._seekTimeField.value = 1), this._timeField.innerText = this.formatTime(Math.floor(e)), this } }, {
                    key: "setPlaybackDuration",
                    value: function(e) {
                        (0, E.debug)(w, "[setplaybackduration]: " + e), this._playbackDuration = e
                    }
                }, { key: "getState", value: function() { return this._state } }, { key: "setState", value: function(e) { return (0, E.debug)(w, "[setState]: " + S.PlaybackStateReadable[e]), this._state = e, this.onStateChange(this._state), this } }, { key: "getMutedState", value: function() { return "muted" in this.player ? this.player.muted : this._mutedState } }, { key: "setMutedState", value: function(e) { return this._mutedState = e, this.onMutedStateChange(this._mutedState), this } }, { key: "onStateChange", value: function(e) { return e === S.PlaybackState.PLAYING ? (this._playPauseButton.classList.remove("red5pro-media-play-button"), this._playPauseButton.classList.add("red5pro-media-pause-button")) : (this._playPauseButton.classList.add("red5pro-media-play-button"), this._playPauseButton.classList.remove("red5pro-media-pause-button")), this } }, { key: "onMutedStateChange", value: function(e) { e ? (this._muteButton.classList.add("red5pro-media-mute-button"), this._muteButton.classList.remove("red5pro-media-unmute-button"), this._volumeField.value = 0) : (this._muteButton.classList.remove("red5pro-media-mute-button"), this._muteButton.classList.add("red5pro-media-unmute-button"), this._volumeField.value = this._volumeValue) } }, { key: "onFullScreenChange", value: function(e) { return e ? (this._fullScreenButton.classList.add("red5pro-media-exit-fullscreen-button"), this._fullScreenButton.classList.remove("red5pro-media-fullscreen-button")) : (this._fullScreenButton.classList.remove("red5pro-media-exit-fullscreen-button"), this._fullScreenButton.classList.add("red5pro-media-fullscreen-button")), this } }, {
                    key: "setAsVOD",
                    value: function(e) {
                        (0, E.debug)(w, "[setAsVOD]: " + e), e ? this._seekTimeField.disabled = !1 : (this._seekTimeField.value = 0, this._seekTimeField.disabled = !0)
                    }
                }, { key: "detach", value: function() { this.enable(!1), this._controlbar && this._controlbar.parentNode === this.container && this.container.removeChild(this._controlbar) } }]), t
            }(C);
        t.PlaybackController = k, t.PlaybackControls = C, t.PlaybackControlsImpl = P
    }, function(e, t) { e.exports = function(e) { try { return !!e() } catch (e) { return !0 } } }, function(e, t, n) {
        "use strict";
        var r = n(184)(!0);
        n(69)(String, "String", function(e) { this._t = String(e), this._i = 0 }, function() {
            var e, t = this._t,
                n = this._i;
            return n >= t.length ? { value: void 0, done: !0 } : (e = r(t, n), this._i += e.length, { value: e, done: !1 })
        })
    }, function(e, t, n) {
        n(189);
        for (var r = n(11), i = n(22), o = n(30), s = n(9)("toStringTag"), a = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], u = 0; u < 5; u++) {
            var c = a[u],
                d = r[c],
                l = d && d.prototype;
            l && !l[s] && i(l, s, c), o[c] = o.Array
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.isObjectEmpty = t.metadataResolutionToObject = t.deepCopy = t.deepDefine = void 0;
        var i = n(59),
            o = r(i),
            s = n(12),
            a = r(s);
        t.deepDefine = function(e, t, n) {
            var r = 0,
                i = e,
                o = t.pop(),
                s = t.length;
            for (r; r < s; r++) {
                var a = t[r];
                i[a] = i[a] || {}, i = i[a]
            }
            i[o] = n
        }, t.deepCopy = function(e) { var t = (0, a.default)(e); return JSON.parse(t) }, t.metadataResolutionToObject = function(e) { if ("string" == typeof e) { var t = e.split(","); return { width: parseInt(t[0]), height: parseInt(t[1]) } } return e }, t.isObjectEmpty = function(e) { return 0 === (0, o.default)(e).length && e.constructor === Object }
    }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(140),
            i = function(e) { return e && e.__esModule ? e : { default: e } }(r);
        t.default = i.default || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e }
    }, function(e, t) { e.exports = {} }, function(e, t, n) {
        var r = n(55)("meta"),
            i = n(14),
            o = n(21),
            s = n(15).f,
            a = 0,
            u = Object.isExtensible || function() { return !0 },
            c = !n(25)(function() { return u(Object.preventExtensions({})) }),
            d = function(e) { s(e, r, { value: { i: "O" + ++a, w: {} } }) },
            l = function(e, t) {
                if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!o(e, r)) {
                    if (!u(e)) return "F";
                    if (!t) return "E";
                    d(e)
                }
                return e[r].i
            },
            f = function(e, t) {
                if (!o(e, r)) {
                    if (!u(e)) return !0;
                    if (!t) return !1;
                    d(e)
                }
                return e[r].w
            },
            h = function(e) { return c && v.NEED && u(e) && !o(e, r) && d(e), e },
            v = e.exports = { KEY: r, NEED: !1, fastKey: l, getWeak: f, onFreeze: h }
    }, function(e, t, n) {
        var r = n(110),
            i = n(67);
        e.exports = Object.keys || function(e) { return r(e, i) }
    }, function(e, t, n) {
        var r = n(48);
        e.exports = function(e) { return Object(r(e)) }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.PlaybackVideoEncoder = t.PlaybackAudioEncoder = t.PlaybackTypes = void 0;
        var r = n(18),
            i = function(e) { return e && e.__esModule ? e : { default: e } }(r);
        t.PlaybackTypes = (0, i.default)({ RTC: "rtc", RTMP: "rtmp", HLS: "hls" }), t.PlaybackAudioEncoder = (0, i.default)({ OPUS: "Opus", PCMU: "PCMU", PCMA: "PCMA", SPEEX: "Speex", NONE: "NONE" }), t.PlaybackVideoEncoder = (0, i.default)({ VP8: "VP8", H264: "H264", NONE: "NONE" })
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.PlaybackStateReadable = t.PlaybackState = void 0;
        var r = n(18),
            i = function(e) { return e && e.__esModule ? e : { default: e } }(r);
        t.PlaybackState = (0, i.default)({ UNAVAILABLE: 1e3, AVAILABLE: 0, IDLE: 1, PLAYING: 2, PAUSED: 3 }), t.PlaybackStateReadable = (0, i.default)({ 1e3: "Playback.UNAVAILABLE", 0: "Playback.AVAILABLE", 1: "Playback.IDLE", 2: "Playback.PLAYING", 3: "Playback.PAUSED" })
    }, function(e, t) {
        var n = {}.toString;
        e.exports = function(e) { return n.call(e).slice(8, -1) }
    }, function(e, t, n) {
        var r = n(20),
            i = n(104),
            o = n(102),
            s = n(16),
            a = n(54),
            u = n(79),
            c = {},
            d = {},
            t = e.exports = function(e, t, n, l, f) {
                var h, v, p, b, m = f ? function() { return e } : u(e),
                    _ = r(n, l, t ? 2 : 1),
                    y = 0;
                if ("function" != typeof m) throw TypeError(e + " is not iterable!");
                if (o(m)) {
                    for (h = a(e.length); h > y; y++)
                        if ((b = t ? _(s(v = e[y])[0], v[1]) : _(e[y])) === c || b === d) return b
                } else
                    for (p = m.call(e); !(v = p.next()).done;)
                        if ((b = i(p, _, v.value, t)) === c || b === d) return b
            };
        t.BREAK = c, t.RETURN = d
    }, function(e, t) { e.exports = function(e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } } }, function(e, t, n) {
        var r = n(15).f,
            i = n(21),
            o = n(9)("toStringTag");
        e.exports = function(e, t, n) { e && !i(e = n ? e : e.prototype, o) && r(e, o, { configurable: !0, value: t }) }
    }, function(e, t) {}, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.RTCSessionDescription = t.RTCIceCandidate = t.RTCPeerConnection = t.updateBandwidth = t.forceUserMedia = t.getUserMedia = t.isSupported = t.determineSupportedResolution = t.quickResolutionSupport = void 0;
        var i = n(12),
            o = r(i),
            s = n(4),
            a = r(s),
            u = n(6),
            c = n(90),
            d = n(28),
            l = n(2),
            f = [{ label: "4K(UHD)", width: 3840, height: 2160 }, { label: "1080p(FHD)", width: 1920, height: 1080 }, { label: "UXGA", width: 1600, height: 1200 }, { label: "720p(HD)", width: 1280, height: 720 }, { label: "SVGA", width: 800, height: 600 }, { label: "VGA", width: 640, height: 480 }, { label: "360p(nHD)", width: 640, height: 360 }, { label: "CIF", width: 352, height: 288 }, { label: "QVGA", width: 320, height: 240 }, { label: "QCIF", width: 176, height: 144 }, { label: "QQVGA", width: 160, height: 120 }],
            h = function(e) { return e.hasOwnProperty("video") && (e.video.hasOwnProperty("width") || e.video.hasOwnProperty("height")) },
            v = function(e) { return e.exact || e.ideal || e.max || e.min || e },
            p = (0, c.curry)(function(e, t) {
                if ("boolean" == typeof e.video) return !0;
                var n = e.video.hasOwnProperty("width") ? v(e.video.width) : 0,
                    r = e.video.hasOwnProperty("height") ? v(e.video.height) : 0,
                    i = n === t.width && r === t.height;
                return i && (0, l.debug)("[gum:isExact]", "Found matching resolution for " + t.width + ", " + t.height + "."), i
            }),
            b = (0, c.curry)(function(e, t) {
                var n = e.video.hasOwnProperty("width") ? v(e.video.width) : 0,
                    r = e.video.hasOwnProperty("height") ? v(e.video.height) : 0,
                    i = n * r;
                return t.width * t.height < i
            }),
            m = (0, c.curry)(function(e, t) { var n = (0, c.filter)(p(t))(e); return (0, l.debug)("[gum:hasMatchingFormat]", "Filtered list: " + (0, o.default)(n, null, 2)), n.length > 0 }),
            _ = (0, c.curry)(function(e, t) { var n = b(t); return (0, c.filter)(n)(e) }),
            y = function(e, t) {
                e.video = !0, a.default.gUM(e).then(function(n) { t.resolve({ media: n, constraints: e }) }).catch(function(n) {
                    var r = "string" == typeof n ? n : [n.name, n.message].join(": ");
                    (0, l.debug)("[gum:getUserMedia]", "Failure in getUserMedia: " + r + ". Attempting other resolution tests..."), (0, l.debug)("[gUM:findformat]", "Constraints declined by browser: " + (0, o.default)(e, null, 2)), t.reject("Could not find proper camera for provided constraints.")
                })
            },
            g = function e(t, n, r) {
                if (0 == n.length) return void y(t, r);
                var i = n.shift();
                t.video.width = { exact: i.width }, t.video.height = { exact: i.height }, a.default.gUM(t).then(function(e) { r.resolve({ media: e, constraints: t }) }).catch(function(i) {
                    var s = "string" == typeof i ? i : [i.name, i.message].join(": ");
                    (0, l.debug)("[gum:getUserMedia]", "Failure in getUserMedia: " + s + ". Attempting other resolution tests..."), (0, l.debug)("[gUM:findformat]", "Constraints declined by browser: " + (0, o.default)(t, null, 2)), e(t, n, r)
                })
            },
            S = t.quickResolutionSupport = function(e) { var t = (0, d.deepCopy)(e); return "boolean" == typeof e.video ? t : (e.video.width && (t.video.width = { exact: v(e.video.width) }), e.video.height && (t.video.height = { exact: v(e.video.height) }), t) },
            E = t.determineSupportedResolution = function(e) {
                (0, l.debug)("[gum:determineSupportedResolution]", "Determine next neighbor based on constraints: " + (0, o.default)(e, null, 2));
                var t = new u.DeferredPromise,
                    n = _(f)(e),
                    r = (0, d.deepCopy)(e);
                return g(r, n, t), t.promise
            },
            w = (t.isSupported = function() { return w && k && C }, t.getUserMedia = function(e, t) {
                var n = new u.DeferredPromise,
                    r = m(f);
                (0, l.debug)("[gum:getUserMedia]", "Is Available in format listing: " + r(e));
                var i = function(r) {
                    if (r) {
                        var i = "string" == typeof r ? r : [r.name, r.message].join(": ");
                        (0, l.debug)("[gum:getUserMedia]", "Failure in getUserMedia: " + i + ". Attempting other resolution tests...")
                    }
                    E(e).then(function(e) { n.resolve({ media: e.media, constraints: e.constraints }) }).catch(function(r) { t && t(e), n.reject({ error: r, constraints: e }) })
                };
                if (h(e))
                    if (r(e)) {
                        (0, l.debug)("[gum:getUserMedia]", "Found constraints in list. Checking quick support for faster setup with: " + (0, o.default)(e, null, 2));
                        var s = S(e);
                        a.default.gUM(s).then(function(e) { n.resolve({ media: e, constraints: s }) }).catch(i)
                    } else(0, l.debug)("[gum:getUserMedia]", "Could not find contraints in list. Attempting failover..."), t && t(e), i();
                else(0, l.debug)("[gum:getUserMedia]", "Constraints were not defined properly. Attempting failover..."), a.default.gUM(e).then(function(t) { n.resolve({ media: t, constraints: e }) }).catch(i);
                return n.promise
            }, t.forceUserMedia = function(e) { return a.default.gUM(e) }, t.updateBandwidth = function(e, t) {
                var n = t.indexOf("m=audio"),
                    r = t.indexOf("m=video"),
                    i = void 0,
                    o = void 0,
                    s = void 0;
                return n > -1 && (e.audio && (i = t.indexOf("\r\n", n), o = t.slice(0, i), s = t.slice(i + "\r\n".length, t.length), t = [o, "b=AS:" + e.audio, s].join("\r\n")), r = t.indexOf("m=video")), r > -1 && e.video && (i = t.indexOf("\r\n", r), o = t.slice(0, i), s = t.slice(i + "\r\n".length, t.length), t = [o, "b=AS:" + e.video, s].join("\r\n")), -1 === n && -1 === r && (t = t.replace(/b=AS([^\r\n]+\r\n)/g, ""), e.audio && (t = t.replace(/a=mid:audio\r\n/g, "a=mid:audio\r\nb=AS:" + e.audio + "\r\n")), e.video && (t = t.replace(/a=mid:video\r\n/g, "a=mid:video\r\nb=AS:" + e.video + "\r\n"))), t
            }, window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection),
            k = window.RTCIceCandidate || window.mozRTCIceCandidate || window.webkitRTCIceCandidate,
            C = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription;
        t.RTCPeerConnection = w, t.RTCIceCandidate = k, t.RTCSessionDescription = C
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.create = t.isSupported = void 0;
        var r = n(4),
            i = function(e) { return e && e.__esModule ? e : { default: e } }(r);
        t.isSupported = function() { return i.default.supportsWebSocket() }, t.create = function(e) { return i.default.createWebSocket(e) }
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(12),
            o = r(i),
            s = n(5),
            a = r(s),
            u = n(0),
            c = r(u),
            d = n(1),
            l = r(d),
            f = n(8),
            h = r(f),
            v = n(7),
            p = r(v),
            b = n(42),
            m = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(b),
            _ = n(4),
            y = r(_),
            g = n(19),
            S = r(g),
            E = n(13),
            w = n(6),
            k = n(2),
            C = function(e) {
                function t(e, n) {
                    (0, c.default)(this, t);
                    var r = (0, h.default)(this, (t.__proto__ || (0, a.default)(t)).call(this));
                    return r._responder = e, r._pendingPostRequests = [], r._websocket = void 0, r._connectionPromise = void 0, r._name = n, r._responseHandlers = [], r._isTerminated = !1, r._retryCount = 0, r._retryLimit = 1, r._readyCheckCount = 0, r._readyCheckLimit = 10, r._openState = 0, r._onclose = r.tearDown.bind(r), r._onopenTimeout = 0, r._asyncTickets = [], r
                }
                return (0, p.default)(t, e), (0, l.default)(t, [{
                    key: "_resetOnopenTimeout",
                    value: function(e, t) {
                        var n = this,
                            r = setTimeout(function() {
                                if (clearTimeout(r), 1 === e.readyState) {
                                    for ((0, k.info)(n._name, "[websocketopen]"), n._openState = 1; n._pendingPostRequests.length > 0;) n.post(n._pendingPostRequests.shift());
                                    n._responder && n._responder.onSocketOpen && n._responder.onSocketOpen(), n.trigger(new E.WebSocketStateEvent(E.WebSocketStateEventTypes.OPEN, n._name, { socket: n }))
                                } else 0 === e.readyState ? ++n._readyCheckCount > n._readyCheckLimit ? ((0, k.warn)(n._name, "WebSocket connection issue. We have waited for " + (n._readyCheckCount - 1) + " samples, without any connection."), n.clearRetry(), t.reject({ type: "Timeout" }), n.tearDown()) : ((0, k.info)(n._name, "WebSocket connection is still opening, will let it continue (" + n._readyCheckCount + ")..."), n._onopenTimeout = n._resetOnopenTimeout(e, t)) : (0, k.info)(n._name, "WebSocket connection attempts have ended with state (" + e.readyState + ").")
                            }, 500);
                        return r
                    }
                }, { key: "_removeSocketHandlers", value: function(e) { e && (e.onopen = void 0, e.onmessage = void 0, e.onerror = void 0, e.onclose = void 0) } }, {
                    key: "_addSocketHandlers",
                    value: function(e, t) {
                        var n = this;
                        this._openState = 0, this._readyCheckCount = 0, clearTimeout(this._onopenTimeout), this._onopenTimeout = this._resetOnopenTimeout(e, t), e.onerror = function(e) {
                            (0, k.warn)(n._name, "[websocketerror]: Error from WebSocket. " + e.type + "."), n.clearRetry(), t.reject(e), n.trigger(new E.WebSocketStateEvent(E.WebSocketStateEventTypes.ERROR, n._name, { socket: n, error: e }))
                        }, e.onmessage = function(e) { n.respond(e) }, e.onclose = function(t) { t.code > 1e3 ? (0, k.warn)(n._name, "[websocketclose]: " + t.code) : (0, k.debug)(n._name, "[websocketclose]: " + t.code), n._responder && n._responder.onSocketClose && n._responder.onSocketClose(t), n.clearRetry(), n._removeSocketHandlers(e || n._websocket), n._openState = 0, n.trigger(new E.WebSocketStateEvent(E.WebSocketStateEventTypes.CLOSE, n._name, { socket: n, event: t })) }
                    }
                }, { key: "_onUnexpectedSocketError", value: function(e) { this._responder && this._responder.onSocketClose && this._responder.onSocketClose(e), this.trigger(new E.WebSocketStateEvent(E.WebSocketStateEventTypes.CLOSE, this._name, { socket: this })), (0, k.warn)(this._name, "[websocketerror]: Possible Unexpected Error from WebSocket. " + e.type + ", " + e.detail), this.clearRetry(), this._removeSocketHandlers(this._websocket) } }, { key: "clearRetry", value: function() { this._retryCount = 0, this._readyCheckCount = 0, clearTimeout(this._onopenTimeout) } }, {
                    key: "setUp",
                    value: function(e, t) {
                        var n = this,
                            r = y.default.getIsMoz() || y.default.getIsEdge();
                        if ((0, k.debug)(this._name, "[websocket:setup] " + e + "."), this.tearDown(), this._isTerminated = !1, this._connectionPromise = t, y.default.addCloseHandler(this._onclose), this._websocket = m.create(e), this._addSocketHandlers(this._websocket, this._connectionPromise), r && this._retryCount++ < this._retryLimit) {
                            (0, k.debug)(this._name, "We have determined it is Firefox and are setting up a retry limit.");
                            var i = setTimeout(function() { n._websocket && 0 === n._websocket.readyState && ((0, k.debug)(n._name, "[websocket:FF-timeout]"), (0, k.debug)(n._name, "Our connection on Firefox to the wss endpoint has timed out. Let's try that again."), n._removeSocketHandlers(n._websocket), n.setUp(e, t)), clearTimeout(i) }, 2e3)
                        }
                    }
                }, {
                    key: "setUpWithSocket",
                    value: function(e, t) {
                        (0, k.debug)(this._name, "[websocket:setupWithSocket] " + e.url + "."), this.tearDown(), this._isTerminated = !1, this._connectionPromise = t, y.default.addCloseHandler(this._onclose), this._websocket = e, this._addSocketHandlers(this._websocket, this._connectionPromise)
                    }
                }, {
                    key: "tearDown",
                    value: function() {
                        if (this._pendingPostRequests.length = 0, void 0 !== this._websocket && !this._isTerminated) {
                            (0, k.debug)(this._name, "[teardown] >>"), (0, k.debug)(this._name, "[WebSocket(" + this._websocket.url + ")] close() >>");
                            try { this._websocket.close() } catch (e) {
                                (0, k.warn)(this._name, "Attempt to close WebSocket failed: " + e.message + "."), this._removeSocketHandlers(this._websocket)
                            } finally { this._websocket && (0, k.debug)(this._name, "<< [WebSocket(" + this._websocket.url + ")] close()") }(0, k.debug)(this._name, "<< [teardown]")
                        }
                        for (this._websocket = void 0, this._isTerminated = !0, this._openState = 0; this._responseHandlers.length > 0;) this._responseHandlers.shift();
                        y.default.removeCloseHandler(this._onclose)
                    }
                }, {
                    key: "getJsonFromSocketMessage",
                    value: function(e) {
                        try { return "string" == typeof e.data ? JSON.parse(e.data) : e.data } catch (t) {
                            (0, k.warn)(this._name, "Could not parse message as JSON. Message= " + e.data + ". Error= " + t.message)
                        }
                        return null
                    }
                }, { key: "addSharedObjectResponseHandler", value: function(e) { this._responseHandlers.push(e) } }, {
                    key: "removeSharedObjectResponseHandler",
                    value: function(e) {
                        for (var t = this._responseHandlers.length; --t > -1;)
                            if (this._responseHandlers[t] === e) return void this._responseHandlers.splice(t, 1)
                    }
                }, {
                    key: "handleMessageResponse",
                    value: function(e) {
                        var t = void 0,
                            n = void 0,
                            r = this._responseHandlers.length;
                        for (t = 0; t < r; t++)
                            if (n = this._responseHandlers[t], n.respond(e)) return !0;
                        return !1
                    }
                }, { key: "postEndOfCandidates", value: function(e) { this.post({ handleCandidate: e, data: { candidate: { type: "candidate", candidate: "" } } }) } }, { key: "post", value: function(e) { if (void 0 === this._websocket || 1 !== this._openState) return (void 0 === this._websocket || 2 !== this._websocket.readyState && 3 !== this._websocket.readyState) && (!this._isTerminated && (this._pendingPostRequests.push(e), !0)); try { return (0, k.debug)(this._name, "[websocket-post]: " + (0, o.default)(e, null, 2)), this._websocket.send((0, o.default)(e)), !0 } catch (t) { return (0, k.debug)(this._name, "Could not send request: " + e + ". " + t), !1 } } }, {
                    key: "postAsync",
                    value: function(e) {
                        var t = new w.DeferredPromise,
                            n = Math.floor(65536 * Math.random()).toString(16);
                        return e.id = n, e.async = !0, this._asyncTickets.push({ id: n, promise: t }), this.post(e), t.promise
                    }
                }, {
                    key: "respond",
                    value: function(e) {
                        var t = this.handleMessageResponse(e);
                        if (!t && e.data) {
                            var n = this.getJsonFromSocketMessage(e);
                            if (null === n) return (0, k.warn)(this._name, "Determined websocket response not in correct format. Aborting message handle."), !0;
                            if ((0, k.debug)(this._name, "[websocket-response]: " + (0, o.default)(n, null, 2)), void 0 !== n.isAvailable) return "boolean" == typeof n.isAvailable && n.isAvailable ? (this._responder && this._responder.onStreamAvailable(n), !0) : (this._responder && this._responder.onStreamUnavailable(n), !0);
                            if (n.async && n.id) {
                                var r = this._asyncTickets.find(function(e) { return e.id === n.id }),
                                    i = r.promise;
                                i && n.data ? i.resolve(n.data) : i && n.error && i.reject(n.error)
                            } else if (void 0 !== n.data) { var s = n.data; if (void 0 !== s.message) { if ("error" === s.type && this._responder) return this._responder.onSocketMessageError(s.message, s.detail), !0 } else if ("status" === s.type) { if ("NetConnection.Connect.Success" === s.code) return this._websocket.onerror = this._onUnexpectedSocketError.bind(this), this._connectionPromise.resolve(this), !0; if ("NetConnection.Connect.Rejected" === s.code) return this._connectionPromise.reject("NetConnection.Connect.Rejected"), !0 } else if ("error" === s.type) { if ("NetConnection.Connect.Rejected" === s.code) return this._connectionPromise.reject("NetConnection.Connect.Rejected"), !0; if ("NetConnection.Connect.Failed" === s.code) return this._connectionPromise.reject("NetConnection.Connect.Failed"), !0 } }
                        }
                        return t
                    }
                }, { key: "getRemoteSharedObject", value: function(e) { this.post({ sharedObjectGetRemote: { name: e } }) } }, { key: "connectToSharedObject", value: function(e) { this.post({ sharedObjectConnect: { name: e } }) } }, { key: "sendToSharedObject", value: function(e, t, n) { this.post({ sharedObjectSend: { name: e, method: t, message: n } }) } }, { key: "sendPropertyToSharedObject", value: function(e, t, n) { this.post({ sharedObjectSetProperty: { name: e, key: t, value: n } }) } }, { key: "closeSharedObject", value: function(e) { this.post({ sharedObjectClose: { name: e } }) } }, { key: "isTerminated", get: function() { return this._isTerminated } }]), t
            }(S.default);
        t.default = C
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.hlsSocketEndpointFromOptions = t.rtcSocketEndpointFromOptions = t.encodeKeyValues = void 0;
        var i = n(29),
            o = r(i),
            s = n(59),
            a = r(s),
            u = function(e) {
                switch (e) {
                    case 8083:
                    case "8083":
                        return console.warn("The default WebSocket port on the server has changed from 8083 to 443 for secure connections."), 443;
                    case 8081:
                    case "8081":
                        return console.warn("The default WebSocket port on the server has changed from 8081 to 5080 or 80 for secure connections."), 5080
                }
                return e
            },
            c = t.encodeKeyValues = function(e) { var t = {}; return (0, a.default)(e).forEach(function(n, r) { t[n] = encodeURIComponent(e[n]) }), t };
        t.rtcSocketEndpointFromOptions = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                n = e.wsprotocol || e.protocol,
                r = u(e.wsport || e.port),
                i = e.context ? [e.app, e.context].join("/") : e.app,
                s = n + "://" + e.host + ":" + r + "/" + i + "/";
            if (void 0 !== e.connectionParams) {
                var d = c(e.connectionParams);
                t = (0, o.default)(t, d)
            }
            if (void 0 !== t) {
                var l = [];
                (0, a.default)(t).forEach(function(e, n) { l.push([e, t[e]].join("=")) }), l.length > 0 && (s += "?" + l.join("&"))
            }
            return s
        }, t.hlsSocketEndpointFromOptions = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                n = e.socketParams,
                r = e.connectionParams,
                i = n.protocol,
                s = u(n.port || ("wss" === i ? 443 : 5080)),
                d = i + "://" + n.host + ":" + s + "/" + n.app + "/";
            if (r) {
                var l = c(e.connectionParams);
                t = (0, o.default)(t, l)
            }
            if (t) {
                var f = [];
                (0, a.default)(t).forEach(function(e, n) { f.push([e, t[e]].join("=")) }), f.length > 0 && (d += "?" + f.join("&"))
            }
            return d
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.PlaybackView = void 0;
        var i = n(0),
            o = r(i),
            s = n(1),
            a = r(s),
            u = n(4),
            c = r(u),
            d = n(2),
            l = "R5ProPlaybackView",
            f = "red5pro-subscriber",
            h = t.PlaybackView = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f;
                    (0, o.default)(this, e);
                    try { this._targetElement = c.default.resolveElement(t) } catch (e) { throw (0, d.error)(l, "Could not instantiate a new instance of Red5ProSubscriber. Reason: " + e.message), e }
                }
                return (0, a.default)(e, [{
                    key: "attachSubscriber",
                    value: function(e) {
                        (0, d.debug)(l, "[attachsubscriber]"), e.setView(this, c.default.getElementId(this._targetElement))
                    }
                }, {
                    key: "attachStream",
                    value: function(e) {
                        var t = this.isAutoplay;
                        (0, d.debug)(l, "[attachstream]"), c.default.setVideoSource(this._targetElement, e, t)
                    }
                }, { key: "isAutoplay", get: function() { return c.default.hasAttributeDefined(this._targetElement, "autoplay") } }, { key: "view", get: function() { return this._targetElement } }]), e
            }();
        t.default = h
    }, function(e, t) { e.exports = function(e, t, n, r) { if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!"); return e } }, function(e, t, n) {
        var r = n(36),
            i = n(9)("toStringTag"),
            o = "Arguments" == r(function() { return arguments }()),
            s = function(e, t) { try { return e[t] } catch (e) {} };
        e.exports = function(e) { var t, n, a; return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = s(t = Object(e), i)) ? n : o ? r(t) : "Object" == (a = r(t)) && "function" == typeof t.callee ? "Arguments" : a }
    }, function(e, t) { e.exports = function(e) { if (void 0 == e) throw TypeError("Can't call method on  " + e); return e } }, function(e, t) { e.exports = !0 }, function(e, t, n) {
        var r = n(16),
            i = n(180),
            o = n(67),
            s = n(73)("IE_PROTO"),
            a = function() {},
            u = function() {
                var e, t = n(66)("iframe"),
                    r = o.length;
                for (t.style.display = "none", n(100).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), u = e.F; r--;) delete u.prototype[o[r]];
                return u()
            };
        e.exports = Object.create || function(e, t) { var n; return null !== e ? (a.prototype = r(e), n = new a, a.prototype = null, n[s] = e) : n = u(), void 0 === t ? n : i(n, t) }
    }, function(e, t) { t.f = {}.propertyIsEnumerable }, function(e, t, n) {
        var r = n(10),
            i = n(3),
            o = n(25);
        e.exports = function(e, t) {
            var n = (i.Object || {})[e] || Object[e],
                s = {};
            s[e] = t(n), r(r.S + r.F * o(function() { n(1) }), "Object", s)
        }
    }, function(e, t, n) {
        var r = n(22);
        e.exports = function(e, t, n) { for (var i in t) n && e[i] ? e[i] = t[i] : r(e, i, t[i]); return e }
    }, function(e, t, n) {
        var r = n(75),
            i = Math.min;
        e.exports = function(e) { return e > 0 ? i(r(e), 9007199254740991) : 0 }
    }, function(e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function(e) { return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36)) }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.PublishModeTypes = t.PublishTypes = void 0;
        var r = n(18),
            i = function(e) { return e && e.__esModule ? e : { default: e } }(r);
        t.PublishTypes = (0, i.default)({ RTMP: "rtmp", RTC: "rtc" }), t.PublishModeTypes = (0, i.default)({ LIVE: "live", RECORD: "record", APPEND: "append" })
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.IceTransportTypes = void 0;
        var r = n(18),
            i = function(e) { return e && e.__esModule ? e : { default: e } }(r);
        t.IceTransportTypes = (0, i.default)({ UDP: "udp", TCP: "tcp" })
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(0),
            o = r(i),
            s = n(1),
            a = r(s),
            u = n(4),
            c = r(u),
            d = n(2),
            l = "R5ProPublishView",
            f = "red5pro-publisher",
            h = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f;
                    (0, o.default)(this, e);
                    try { this._targetElement = c.default.resolveElement(t) } catch (e) { throw (0, d.error)(l, "Could not instantiate a new instance of Red5ProPublisher. Reason: " + e.message), e }
                }
                return (0, a.default)(e, [{
                    key: "attachPublisher",
                    value: function(e) {
                        (0, d.debug)(l, "[attachpublisher]"), e.setView(this, c.default.getElementId(this._targetElement))
                    }
                }, {
                    key: "preview",
                    value: function(e) {
                        var t = this.isAutoplay;
                        (0, d.debug)(l, "[preview]: autoplay(" + t + ")"), c.default.setVideoSource(this._targetElement, e, t)
                    }
                }, { key: "isAutoplay", get: function() { return c.default.hasAttributeDefined(this._targetElement, "autoplay") } }, { key: "view", get: function() { return this._targetElement } }]), e
            }();
        t.default = h
    }, function(e, t, n) { e.exports = { default: n(161), __esModule: !0 } }, function(e, t, n) { e.exports = { default: n(163), __esModule: !0 } }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        t.__esModule = !0;
        var i = n(5),
            o = r(i),
            s = n(142),
            a = r(s);
        t.default = function e(t, n, r) { null === t && (t = Function.prototype); var i = (0, a.default)(t, n); if (void 0 === i) { var s = (0, o.default)(t); return null === s ? void 0 : e(s, n, r) } if ("value" in i) return i.value; var u = i.get; if (void 0 !== u) return u.call(r) }
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        t.__esModule = !0;
        var i = n(145),
            o = r(i),
            s = n(144),
            a = r(s),
            u = "function" == typeof a.default && "symbol" == typeof o.default ? function(e) { return typeof e } : function(e) { return e && "function" == typeof a.default && e.constructor === a.default && e !== a.default.prototype ? "symbol" : typeof e };
        t.default = "function" == typeof a.default && "symbol" === u(o.default) ? function(e) { return void 0 === e ? "undefined" : u(e) } : function(e) { return e && "function" == typeof a.default && e.constructor === a.default && e !== a.default.prototype ? "symbol" : void 0 === e ? "undefined" : u(e) }
    }, function(e, t) { e.exports = function(e) { if ("function" != typeof e) throw TypeError(e + " is not a function!"); return e } }, function(e, t, n) {
        var r = n(20),
            i = n(68),
            o = n(33),
            s = n(54),
            a = n(172);
        e.exports = function(e, t) {
            var n = 1 == e,
                u = 2 == e,
                c = 3 == e,
                d = 4 == e,
                l = 6 == e,
                f = 5 == e || l,
                h = t || a;
            return function(t, a, v) {
                for (var p, b, m = o(t), _ = i(m), y = r(a, v, 3), g = s(_.length), S = 0, E = n ? h(t, g) : u ? h(t, 0) : void 0; g > S; S++)
                    if ((f || S in _) && (p = _[S], b = y(p, S, m), e))
                        if (n) E[S] = b;
                        else if (b) switch (e) {
                        case 3:
                            return !0;
                        case 5:
                            return p;
                        case 6:
                            return S;
                        case 2:
                            E.push(p)
                    } else if (d) return !1;
                return l ? -1 : c || d ? d : E
            }
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(11),
            i = n(10),
            o = n(31),
            s = n(25),
            a = n(22),
            u = n(53),
            c = n(37),
            d = n(46),
            l = n(14),
            f = n(39),
            h = n(15).f,
            v = n(64)(0),
            p = n(17);
        e.exports = function(e, t, n, b, m, _) {
            var y = r[e],
                g = y,
                S = m ? "set" : "add",
                E = g && g.prototype,
                w = {};
            return p && "function" == typeof g && (_ || E.forEach && !s(function() {
                (new g).entries().next()
            })) ? (g = t(function(t, n) { d(t, g, e, "_c"), t._c = new y, void 0 != n && c(n, m, t[S], t) }), v("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function(e) {
                var t = "add" == e || "set" == e;
                e in E && (!_ || "clear" != e) && a(g.prototype, e, function(n, r) { if (d(this, g, e), !t && _ && !l(n)) return "get" == e && void 0; var i = this._c[e](0 === n ? 0 : n, r); return t ? this : i })
            }), "size" in E && h(g.prototype, "size", { get: function() { return this._c.size } })) : (g = b.getConstructor(t, e, m, S), u(g.prototype, n), o.NEED = !0), f(g, e), w[e] = g, i(i.G + i.W + i.F, w), _ || b.setStrong(g, e, m), g
        }
    }, function(e, t, n) {
        var r = n(14),
            i = n(11).document,
            o = r(i) && r(i.createElement);
        e.exports = function(e) { return o ? i.createElement(e) : {} }
    }, function(e, t) { e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, function(e, t, n) {
        var r = n(36);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) { return "String" == r(e) ? e.split("") : Object(e) }
    }, function(e, t, n) {
        "use strict";
        var r = n(49),
            i = n(10),
            o = n(72),
            s = n(22),
            a = n(21),
            u = n(30),
            c = n(177),
            d = n(39),
            l = n(109),
            f = n(9)("iterator"),
            h = !([].keys && "next" in [].keys()),
            v = function() { return this };
        e.exports = function(e, t, n, p, b, m, _) {
            c(n, t, p);
            var y, g, S, E = function(e) {
                    if (!h && e in P) return P[e];
                    switch (e) {
                        case "keys":
                        case "values":
                            return function() { return new n(this, e) }
                    }
                    return function() { return new n(this, e) }
                },
                w = t + " Iterator",
                k = "values" == b,
                C = !1,
                P = e.prototype,
                T = P[f] || P["@@iterator"] || b && P[b],
                O = T || E(b),
                R = b ? k ? E("entries") : O : void 0,
                A = "Array" == t ? P.entries || T : T;
            if (A && (S = l(A.call(new e))) !== Object.prototype && (d(S, w, !0), r || a(S, f) || s(S, f, v)), k && T && "values" !== T.name && (C = !0, O = function() { return T.call(this) }), r && !_ || !h && !C && P[f] || s(P, f, O), u[t] = O, u[w] = v, b)
                if (y = { values: k ? O : E("values"), keys: m ? O : E("keys"), entries: R }, _)
                    for (g in y) g in P || o(P, g, y[g]);
                else i(i.P + i.F * (h || C), t, y);
            return y
        }
    }, function(e, t, n) {
        var r = n(51),
            i = n(38),
            o = n(23),
            s = n(76),
            a = n(21),
            u = n(101),
            c = Object.getOwnPropertyDescriptor;
        t.f = n(17) ? c : function(e, t) {
            if (e = o(e), t = s(t, !0), u) try { return c(e, t) } catch (e) {}
            if (a(e, t)) return i(!r.f.call(e, t), e[t])
        }
    }, function(e, t) { t.f = Object.getOwnPropertySymbols }, function(e, t, n) { e.exports = n(22) }, function(e, t, n) {
        var r = n(74)("keys"),
            i = n(55);
        e.exports = function(e) { return r[e] || (r[e] = i(e)) }
    }, function(e, t, n) {
        var r = n(11),
            i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        e.exports = function(e) { return i[e] || (i[e] = {}) }
    }, function(e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function(e) { return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e) }
    }, function(e, t, n) {
        var r = n(14);
        e.exports = function(e, t) { if (!r(e)) return e; var n, i; if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i; if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i; if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i; throw TypeError("Can't convert object to primitive value") }
    }, function(e, t, n) {
        var r = n(11),
            i = n(3),
            o = n(49),
            s = n(78),
            a = n(15).f;
        e.exports = function(e) { var t = i.Symbol || (i.Symbol = o ? {} : r.Symbol || {}); "_" == e.charAt(0) || e in t || a(t, e, { value: s.f(e) }) }
    }, function(e, t, n) { t.f = n(9) }, function(e, t, n) {
        var r = n(47),
            i = n(9)("iterator"),
            o = n(30);
        e.exports = n(3).getIteratorMethod = function(e) { if (void 0 != e) return e[i] || e["@@iterator"] || o[r(e)] }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.embedSwfObject = t.defineEmbedElement = void 0;
        var r = n(4),
            i = function(e) { return e && e.__esModule ? e : { default: e } }(r),
            o = n(6);
        t.defineEmbedElement = function(e, t) {
            var n = new o.DeferredPromise,
                r = e.id;
            if ("video" === e.nodeName.toLowerCase()) {
                var s = i.default.createElement("div");
                s.id = r + "_rtmp", t.appendChild(s), e.parentElement && e.parentElement.removeChild(e), n.resolve(s.id)
            } else n.resolve(r);
            return n.promise
        }, t.embedSwfObject = function(e, t, n, r, i) {
            var s = new o.DeferredPromise,
                a = { quality: "high", wmode: "opaque", bgcolor: t.backgroundColor || "#000", allowscriptaccess: "always", allowfullscreen: "true", allownetworking: "all" },
                u = { id: e, name: e, align: "middle" };
            return r.hasFlashPlayerVersion(t.minFlashVersion) ? r.embedSWF(t.swf, i, t.embedWidth || 640, t.embedHeight || 480, t.minFlashVersion, t.productInstallURL, n, a, u, function(e) { e.success ? s.resolve() : s.reject("Flash Object embed failed.") }) : s.reject("Flash Player Version is not supported."), s.promise
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.applyOrientation = void 0;
        var r = n(4),
            i = function(e) { return e && e.__esModule ? e : { default: e } }(r),
            o = i.default.requestFrame,
            s = ["webkitTransformOrigin", "mozTransformOrigin", "msTransformOrigin", "oTransformOrigin", "transformOrigin"],
            a = ["webkitTransform", "mozTransform", "msTransform", "oTransform", "transform"],
            u = ["webkitTransition", "mozTransition", "msTransition", "oTransition", "transition"],
            c = { 0: { origin: "center center", transform: "rotate(0deg)" }, 90: { origin: "left top", transform: "rotate(90deg) translateY(-100%)" }, 180: { origin: "center center", transform: "rotate(180deg)" }, 270: { origin: "top left", transform: "rotate(270deg) translateX(-100%) translateY(0%)" }, "-90": { origin: "left top", transform: "rotate(-90deg) translateX(-100%)" }, "-180": { origin: "center center", transform: "rotate(-180deg)" }, "-270": { origin: "top left", transform: "rotate(-270deg) translateY(-100%)" } },
            d = function e(t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return function() {
                    var i = t.parentNode;
                    if (i) {
                        var o = i.clientWidth,
                            s = i.clientHeight;
                        t.style.width = r ? s + "px" : o + "px";
                        var a = t.clientWidth,
                            u = t.clientHeight,
                            c = .5 * (r ? o - u : o - a);
                        t.style.position = "relative", t.style.left = c + "px"
                    }
                    n && n(e(t, n, r))
                }
            };
        t.applyOrientation = function(e, t, n) {
            var r = void 0,
                i = a.length;
            t %= 360;
            var l = t % 180 != 0,
                f = e.parentNode,
                h = e.width ? e.width : f.clientWidth,
                v = e.height ? e.height : f.clientHeight,
                p = c[t.toString()];
            for (r = 0; r < i; r++) e.style[s[r]] = p.origin, e.style[a[r]] = p.transform, e.style[u[r]] = "transform 0.0s linear";
            l ? (e.style.width = v + "px", f.style.height = v + "px") : (e.style.width = h + "px", e.style.height = v + "px", f.style.height = "unset"), document.attachEvent ? f.attachEvent("resize", d(e, o, l)) : d(e, o, l)()
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.RTMPPublisherEventTypes = t.RTCPublisherEventTypes = t.FailoverPublisherEventTypes = t.PublisherEventTypes = void 0;
        var r = n(18),
            i = function(e) { return e && e.__esModule ? e : { default: e } }(r);
        t.PublisherEventTypes = (0, i.default)({ CONNECT_SUCCESS: "Connect.Success", CONNECT_FAILURE: "Connect.Failure", PUBLISH_START: "Publish.Start", PUBLISH_FAIL: "Publish.Fail", PUBLISH_INVALID_NAME: "Publish.InvalidName", UNPUBLISH_SUCCESS: "Unpublish.Success", PUBLISH_METADATA: "Publish.Metadata", PUBLISH_SEND_INVOKE: "Publish.Send.Invoke", CONNECTION_CLOSED: "Publisher.Connection.Closed", DIMENSION_CHANGE: "Publisher.Video.DimensionChange" }), t.FailoverPublisherEventTypes = (0, i.default)({ PUBLISHER_REJECT: "Publisher.Reject", PUBLISHER_ACCEPT: "Publisher.Accept" }), t.RTCPublisherEventTypes = (0, i.default)({ CONSTRAINTS_ACCEPTED: "WebRTC.MediaConstraints.Accepted", CONSTRAINTS_REJECTED: "WebRTC.MediaConstraints.Rejected", MEDIA_STREAM_AVAILABLE: "WebRTC.MediaStream.Available", PEER_CONNECTION_AVAILABLE: "WebRTC.PeerConnection.Available", OFFER_START: "WebRTC.Offer.Start", OFFER_END: "WebRTC.Offer.End", PEER_CANDIDATE_END: "WebRTC.PeerConnection.CandidateEnd", ICE_TRICKLE_COMPLETE: "WebRTC.IceTrickle.Complete", PEER_CONNECTION_OPEN: "WebRTC.PeerConnection.Open" }), t.RTMPPublisherEventTypes = (0, i.default)({ EMBED_SUCCESS: "FlashPlayer.Embed.Success", EMBED_FAILURE: "FlashPlayer.Embed.Failure" })
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.SharedObjectEventTypes = void 0;
        var r = n(18),
            i = function(e) { return e && e.__esModule ? e : { default: e } }(r);
        t.SharedObjectEventTypes = (0, i.default)({ CONNECT_SUCCESS: "Connect.Success", CONNECT_FAILURE: "Connect.Failure", PROPERTY_UPDATE: "SharedObject.PropertyUpdate", METHOD_UPDATE: "SharedObject.MethodUpdate", CONNECTION_CLOSED: "SharedObject.Connection.Closed" })
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.RTMPSubscriberEventTypes = t.RTCSubscriberEventTypes = t.FailoverSubscriberEventTypes = t.SubscriberEventTypes = void 0;
        var r = n(18),
            i = function(e) { return e && e.__esModule ? e : { default: e } }(r);
        t.SubscriberEventTypes = (0, i.default)({ CONNECT_SUCCESS: "Connect.Success", CONNECT_FAILURE: "Connect.Failure", SUBSCRIBE_START: "Subscribe.Start", SUBSCRIBE_STOP: "Subscribe.Stop", SUBSCRIBE_FAIL: "Subscribe.Fail", SUBSCRIBE_INVALID_NAME: "Subscribe.InvalidName", SUBSCRIBE_METADATA: "Subscribe.Metadata", SUBSCRIBE_SEND_INVOKE: "Subscribe.Send.Invoke", PLAY_UNPUBLISH: "Subscribe.Play.Unpublish", CONNECTION_CLOSED: "Subscribe.Connection.Closed", ORIENTATION_CHANGE: "Subscribe.Orientation.Change", STREAMING_MODE_CHANGE: "Subscribe.StreamingMode.Change", VIDEO_DIMENSIONS_CHANGE: "Subscribe.VideoDimensions.Change", VOLUME_CHANGE: "Subscribe.Volume.Change", PLAYBACK_TIME_UPDATE: "Subscribe.Time.Update", PLAYBACK_STATE_CHANGE: "Subscribe.Playback.Change", FULL_SCREEN_STATE_CHANGE: "Subscribe.FullScreen.Change", AUTO_PLAYBACK_FAILURE: "Subscribe.Autoplay.Failure", AUTO_PLAYBACK_MUTED: "Subscribe.Autoplay.Muted" }), t.FailoverSubscriberEventTypes = (0, i.default)({ SUBSCRIBER_REJECT: "Subscriber.Reject", SUBSCRIBER_ACCEPT: "Subscriber.Accept" }), t.RTCSubscriberEventTypes = (0, i.default)({ PEER_CONNECTION_AVAILABLE: "WebRTC.PeerConnection.Available", OFFER_START: "WebRTC.Offer.Start", OFFER_END: "WebRTC.Offer.End", ANSWER_START: "WebRTC.Answer.Start", ANSWER_END: "WebRTC.Answer.End", CANDIDATE_START: "WebRTC.Candidate.Start", CANDIDATE_END: "WebRTC.Candidate.End", PEER_CANDIDATE_END: "WebRTC.PeerConnection.CandidateEnd", ICE_TRICKLE_COMPLETE: "WebRTC.IceTrickle.Complete", PEER_CONNECTION_OPEN: "WebRTC.PeerConnection.Open", ON_ADD_STREAM: "WebRTC.Add.Stream" }), t.RTMPSubscriberEventTypes = (0, i.default)({ EMBED_SUCCESS: "FlashPlayer.Embed.Success", EMBED_FAILURE: "FlashPlayer.Embed.Failure", ABR_LEVEL_CHANGE: "RTMP.AdaptiveBitrate.Level" })
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.WebSocketStateEventTypes = void 0;
        var r = n(18),
            i = function(e) { return e && e.__esModule ? e : { default: e } }(r);
        t.WebSocketStateEventTypes = (0, i.default)({ OPEN: "WebSocket.Open", CLOSE: "WebSocket.Close" })
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(12),
            o = r(i),
            s = n(0),
            a = r(s),
            u = n(1),
            c = r(u),
            d = n(4),
            l = r(d),
            f = n(2),
            h = "R5ProRTMPSharedObjectHandler",
            v = function() {
                function e() {
                    (0, a.default)(this, e), this._element = void 0, this._responseHandlers = []
                }
                return (0, c.default)(e, [{ key: "addResponseHandler", value: function(e) { this._responseHandlers.push(e) } }, {
                    key: "removeResponseHandler",
                    value: function(e) {
                        for (var t = this._responseHandlers.length; --t > -1;)
                            if (this._responseHandlers[t] === e) return void this._responseHandlers.splice(t, 1)
                    }
                }, {
                    key: "handleSharedObjectEvent",
                    value: function(e) {
                        (0, f.debug)(h, "[sharedobject:event]");
                        var t = void 0,
                            n = this._responseHandlers.length,
                            r = void 0;
                        for (t = 0; t < n && (r = this._responseHandlers[t], !r.respond(JSON.parse(e))); t++);
                    }
                }, {
                    key: "assignSharedObjectResponder",
                    value: function(e, t) {
                        var n = this.handleSharedObjectEvent.bind(this),
                            r = t.id.split("-").join("_"),
                            i = ["handleSharedObjectEvent", r].join("_");
                        (0, f.debug)(h, "[assign:sharedobject:responder] :: " + r), (0, f.debug)(h, "[sharedoject:responder] :: " + i), t.setSharedObjectResponder(e, i), l.default.setGlobal(i, n)
                    }
                }, { key: "connect", value: function(e) { this._element = l.default.getEmbedObject(e), this._element || (0, f.warn)("Could not locate embedded Flash object for id: " + e) } }, { key: "disconnect", value: function() { for (; this._responseHandlers.length > 0;) this._responseHandlers.shift() } }, {
                    key: "sendToSharedObject",
                    value: function(e, t, n) {
                        (0, f.debug)(h, "[sendToSharedObject]");
                        try { this._element.sharedObjectSend(e, t, "string" == typeof n ? n : (0, o.default)(n)) } catch (t) {
                            (0, f.warn)("Could not send to shared object (" + e + "). Error: " + t.message)
                        }
                    }
                }, {
                    key: "sendPropertyToSharedObject",
                    value: function(e, t, n) {
                        (0, f.debug)(h, "[sendPropertyToSharedObject]");
                        try { this._element.sharedObjectSendProperty(e, t, n) } catch (t) {
                            (0, f.warn)("Could not send to shared object (" + e + "). Error: " + t.message)
                        }
                    }
                }, {
                    key: "getRemoteSharedObject",
                    value: function(e) {
                        (0, f.debug)(h, "[getRemoteSharedObject]");
                        try { this.assignSharedObjectResponder(e, this._element), this._element.getRemoteSharedObject(e) } catch (e) {
                            (0, f.warn)("Could not get remote shared object (" + name + "). Error: " + e.message)
                        }
                    }
                }, {
                    key: "connectToSharedObject",
                    value: function(e) {
                        (0, f.debug)(h, "[connectToSharedObject]");
                        try { this._element.connectToSharedObject(e) } catch (e) {
                            (0, f.warn)("Could not connect to shared object (" + name + "). Error: " + e.message)
                        }
                    }
                }, {
                    key: "closeSharedObject",
                    value: function(e) {
                        (0, f.debug)(h, "[disconnectToSharedObject]");
                        try { this._element.disconnectFromSharedObject(e) } catch (e) {
                            (0, f.warn)("Could not disconnect to shared object (" + name + "). Error: " + e.message)
                        }
                    }
                }]), e
            }();
        t.default = v
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.RTMPMediaConstraint = t.RTCMediaConstraint = void 0;
        var i = n(0),
            o = r(i),
            s = n(93),
            a = r(s),
            u = function(e, t, n) {
                (0, a.default)(e, t, { value: n, writable: !0, enumerable: !0 })
            },
            c = function e() {
                (0, o.default)(this, e), u(this, "width", { exact: 640 }), u(this, "height", { exact: 480 })
            },
            d = function e() {
                (0, o.default)(this, e), u(this, "width", 640), u(this, "height", 480), u(this, "force", !1), u(this, "framerate", 15), u(this, "bandwidth", 5e4), u(this, "quality", 80), u(this, "profile", "baseline"), u(this, "level", 3.1)
            },
            l = function e() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                (0, o.default)(this, e), u(this, "audio", t), u(this, "video", n || new c)
            },
            f = function e() {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                (0, o.default)(this, e), u(this, "audio", t), u(this, "video", n || new d)
            };
        t.RTCMediaConstraint = l, t.RTMPMediaConstraint = f
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.SliderEventTypes = t.SliderEvent = void 0;
        var i = n(18),
            o = r(i),
            s = n(5),
            a = r(s),
            u = n(0),
            c = r(u),
            d = n(1),
            l = r(d),
            f = n(8),
            h = r(f),
            v = n(7),
            p = r(v),
            b = n(13),
            m = function(e) {
                function t(e, n, r) {
                    (0, c.default)(this, t);
                    var i = (0, h.default)(this, (t.__proto__ || (0, a.default)(t)).call(this, e, r));
                    return i._control = n, i
                }
                return (0, p.default)(t, e), (0, l.default)(t, [{ key: "control", get: function() { return this._control } }]), t
            }(b.Event),
            _ = (0, o.default)({ CHANGE_START: "changestart", CHANGE: "change", CHANGE_COMPLETE: "changecomplete" });
        t.SliderEvent = m, t.SliderEventTypes = _
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.ImplFactoryOrder = void 0;
        var i = n(146),
            o = r(i),
            s = n(147),
            a = r(s),
            u = n(0),
            c = r(u),
            d = n(1),
            l = r(d),
            f = n(95),
            h = r(f),
            v = n(6),
            p = new h.default,
            b = function(e) { return p.has(e) || p.set(e, {}), p.get(e) },
            m = t.ImplFactoryOrder = function() {
                function e() {
                    var t = this;
                    (0, c.default)(this, e), this.listorder = function() {
                        return a.default.mark(function e(t) {
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(t.length > 0)) { e.next = 5; break }
                                        return e.next = 3, t.shift();
                                    case 3:
                                        e.next = 0;
                                        break;
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        })
                    }(), b(this).find = function(e, n, r, i) {
                        var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                            a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                            u = b(t).next(e, n),
                            c = (0, o.default)(u, 2),
                            d = c[0],
                            l = c[1];
                        if (l) {
                            var f = void 0,
                                h = r[d];
                            h = h || r, f = s ? (new l)[s](h) : new l(h), f.then(function(e) { i.resolve(e) }).catch(function(o) { a = o, b(t).find(e, n, r, i, s, a) })
                        } else i.reject(a)
                    }, b(this).next = function(e, t) {
                        var n = void 0,
                            r = void 0,
                            i = e.next();
                        return i.done || (r = i.value, n = t.get(r)), [r, n]
                    }
                }
                return (0, l.default)(e, [{
                    key: "create",
                    value: function(e, t, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                            i = new v.DeferredPromise;
                        return b(this).find(this.listorder(e.slice()), t, n, i, r), i.promise
                    }
                }]), e
            }();
        t.default = m
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = t.curry = function(e) { var t = e.length; return function n() { var r = Array.prototype.slice.call(arguments, 0); return r.length >= t ? e.apply(null, r) : function() { var e = Array.prototype.slice.call(arguments, 0); return n.apply(null, r.concat(e)) } } },
            i = (t.filter = r(function(e, t) { for (var n = 0, r = t.length, i = []; n < r;) e(t[n]) && (i[i.length] = t[n]), n += 1; return i }), t.toInt = function(e) { return "string" == typeof e ? parseInt(e, 10) : Math.round(e) });
        t.getOrElse = function(e, t) { return e || t }, t.getIntOrElse = function(e, t) { return isNaN(i(e)) ? t : i(e) }
    }, function(e, t, n) { e.exports = { default: n(152), __esModule: !0 } }, function(e, t, n) { e.exports = { default: n(153), __esModule: !0 } }, function(e, t, n) { e.exports = { default: n(157), __esModule: !0 } }, function(e, t, n) { e.exports = { default: n(164), __esModule: !0 } }, function(e, t, n) { e.exports = { default: n(167), __esModule: !0 } }, function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(136),
            i = function(e) { return e && e.__esModule ? e : { default: e } }(r);
        t.default = function(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return (0, i.default)(e) }
    }, function(e, t, n) {
        "use strict";

        function r(e) { if (void 0 === e || null === e) return e; if (Array.isArray(e)) return e.slice(); if ("object" == typeof e) { var t = {}; return Object.keys(e).forEach(function(n) { t[n] = e[n] }), t } return e }

        function i() {
            var e = {},
                t = Error.stackTraceLimit,
                n = Error.prepareStackTrace;
            return Error.stackTraceLimit = 3, Error.prepareStackTrace = function(t, n) {
                var r = n[2];
                e.file = r.getFileName(), e.line = r.getLineNumber();
                var i = r.getFunctionName();
                i && (e.func = i)
            }, Error.stackTraceLimit = t, Error.prepareStackTrace = n, e
        }

        function o(e, t) { return t || (t = "    "), t + e.split(/\r?\n/g).join("\n" + t) }

        function s(e, t) {
            if (t) {
                if (m[t]) return;
                m[t] = !0
            }
            console.error(e + "\n")
        }

        function a(e) { return m[e] }

        function u() {}

        function c() {}

        function d(e) { return "string" == typeof e ? w[e.toLowerCase()] : e }

        function l(e, t, n) {
            if (!(this instanceof l)) return new l(e, t);
            var i;
            if (void 0 !== t && (i = e, e = t, !(i instanceof l))) throw new TypeError("invalid Logger creation: do not pass a second arg");
            if (!e) throw new TypeError("options (object) is required");
            if (i) { if (e.name) throw new TypeError("invalid options.name: child cannot set logger name") } else if (!e.name) throw new TypeError("options.name (string) is required");
            if (e.stream && e.streams) throw new TypeError('cannot mix "streams" and "stream" options');
            if (e.streams && !Array.isArray(e.streams)) throw new TypeError("invalid options.streams: must be an array");
            if (e.serializers && ("object" != typeof e.serializers || Array.isArray(e.serializers))) throw new TypeError("invalid options.serializers: must be an object");
            var o, s, a;
            if (i && n) { this._isSimpleChild = !0, this._level = i._level, this.streams = i.streams, this.serializers = i.serializers, this.src = i.src, o = this.fields = {}; var c = Object.keys(i.fields); for (a = 0; a < c.length; a++) s = c[a], o[s] = i.fields[s]; var d = Object.keys(e); for (a = 0; a < d.length; a++) s = d[a], o[s] = e[s] } else {
                var f = this;
                if (i) {
                    for (this._level = i._level, this.streams = [], a = 0; a < i.streams.length; a++) {
                        var h = r(i.streams[a]);
                        h.closeOnExit = !1, this.streams.push(h)
                    }
                    this.serializers = r(i.serializers), this.src = i.src, this.fields = r(i.fields), e.level && this.level(e.level)
                } else this._level = Number.POSITIVE_INFINITY, this.streams = [], this.serializers = null, this.src = !1, this.fields = {};
                e.stream ? f.addStream({ type: "stream", stream: e.stream, closeOnExit: !1, level: e.level }) : e.streams ? e.streams.forEach(function(t) { f.addStream(t, e.level) }) : i && e.level ? this.level(e.level) : i || f.addStream({ type: "raw", stream: new u, closeOnExit: !1, level: e.level }), e.serializers && f.addSerializers(e.serializers), e.src && (this.src = !0), o = r(e), delete o.stream, delete o.level, delete o.streams, delete o.serializers, delete o.src, this.serializers && this._applySerializers(o), Object.keys(o).forEach(function(e) { f.fields[e] = o[e] })
            }
        }

        function f(e) {
            return function() {
                var t = this,
                    n = null,
                    o = arguments,
                    u = null;
                if (this._emit) {
                    if (0 === arguments.length) return this._level <= e;
                    this._level > e || (u = function(s) {
                        var a;
                        s[0] instanceof Error ? (n = { err: t.serializers && t.serializers.err ? t.serializers.err(s[0]) : l.stdSerializers.err(s[0]) }, a = { err: !0 }, o = 1 === s.length ? [n.err.message] : Array.prototype.slice.call(s, 1)) : "object" != typeof s[0] && null !== s[0] || Array.isArray(s[0]) ? (n = null, o = Array.prototype.slice.call(s)) : (n = s[0], o = Array.prototype.slice.call(s, 1));
                        var u = r(t.fields);
                        u.level = e;
                        var c = n ? r(n) : null;
                        return c && (t.serializers && t._applySerializers(c, a), Object.keys(c).forEach(function(e) { u[e] = c[e] })), u.levelName = k[e], u.msg = b.apply(t, o), u.time || (u.time = new Date), t.src && !u.src && (u.src = i()), u.v = p, u
                    }(o), this._emit(u))
                } else {
                    if (!a.unbound) {
                        var c = i();
                        s(b("bunyan usage error: %s:%s: attempt to log with an unbound log method: `this` is: %s", c.file, c.line, this.toString()), "unbound")
                    }
                }
            }
        }

        function h(e) {
            var t = e.stack || e.toString();
            if (e.cause && "function" == typeof e.cause) {
                var n = e.cause();
                n && (t += "\nCaused by: " + h(n))
            }
            return t
        }

        function v() { var e = []; return function(t, n) { return n && "object" == typeof n ? -1 !== e.indexOf(n) ? "[Circular]" : (e.push(n), n) : n } }
        var p = 0,
            b = function(e) {
                if (null === e) return "null";
                if ("string" != typeof e) return e.toString();
                for (var t = /%[sdj%]/g, n = 1, r = arguments, i = r.length, o = String(e).replace(t, function(e) {
                        if ("%%" === e) return "%";
                        if (n >= i) return e;
                        switch (e) {
                            case "%s":
                                return String(r[n++]);
                            case "%d":
                                return Number(r[n++]);
                            case "%j":
                                try { return JSON.stringify(r[n++]) } catch (e) { return "[Circular]" }
                                break;
                            default:
                                return e
                        }
                    }), s = r[n]; n < i; s = r[++n]) o += " " + s;
                return o
            },
            m = {};
        u.prototype.write = function(e) { e.level < y ? console.log(e) : e.level < g ? console.info(e) : e.level < S ? console.warn(e) : console.error(e), e.err && e.err.stack && console.error(e.err.stack) }, c.prototype.write = function(e) {
            function t(e, t) { return Array(t + 1 - (e + "").length).join("0") + e }
            var n;
            n = e.level < _ ? "color: DeepPink" : e.level < y ? "color: GoldenRod" : e.level < g ? "color: DarkTurquoise" : e.level < S ? "color: Purple" : e.level < E ? "color: Crimson" : "color: Black";
            var r = e.childName ? e.name + "/" + e.childName : e.name,
                i = k[e.level].toUpperCase();
            i = Array(6 - i.length).join(" ") + i, console.log("[%s:%s:%s:%s] %c%s%c: %s: %c%s", t(e.time.getHours(), 2), t(e.time.getMinutes(), 2), t(e.time.getSeconds(), 2), t(e.time.getMilliseconds(), 4), n, i, "color: DimGray", r, "color: SteelBlue", e.msg), e.err && e.err.stack && console.log("%c%s,", n, e.err.stack)
        };
        var _ = 20,
            y = 30,
            g = 40,
            S = 50,
            E = 60,
            w = { trace: 10, debug: _, info: y, warn: g, error: S, fatal: E },
            k = {};
        Object.keys(w).forEach(function(e) { k[w[e]] = e }), l.prototype.addStream = function(e, t) {
            var n = this;
            switch (null !== t && void 0 !== t || (t = y), e = r(e), !e.type && e.stream && (e.type = "raw"), e.raw = "raw" === e.type, e.level ? e.level = d(e.level) : e.level = d(t), e.level < n._level && (n._level = e.level), e.type) {
                case "stream":
                case "raw":
                    e.closeOnExit || (e.closeOnExit = !1);
                    break;
                default:
                    throw new TypeError('unknown stream type "' + e.type + '"')
            }
            n.streams.push(e), delete n.haveNonRawStreams
        }, l.prototype.addSerializers = function(e) {
            var t = this;
            t.serializers || (t.serializers = {}), Object.keys(e).forEach(function(n) {
                var r = e[n];
                if ("function" != typeof r) throw new TypeError(b('invalid serializer for "%s" field: must be a function', n));
                t.serializers[n] = r
            })
        }, l.prototype.child = function(e, t) { return new this.constructor(this, e || {}, t) }, l.prototype.level = function(e) {
            if (void 0 === e) return this._level;
            for (var t = d(e), n = this.streams.length, r = 0; r < n; r++) this.streams[r].level = t;
            this._level = t
        }, l.prototype.levels = function(e, t) {
            if (void 0 === e) return this.streams.map(function(e) { return e.level });
            var n;
            if ("number" == typeof e) { if (void 0 === (n = this.streams[e])) throw new Error("invalid stream index: " + e) } else { for (var r = this.streams.length, i = 0; i < r; i++) { var o = this.streams[i]; if (o.name === e) { n = o; break } } if (!n) throw new Error(b('no stream with name "%s"', e)) }
            if (void 0 === t) return n.level;
            var s = d(t);
            n.level = s, s < this._level && (this._level = s)
        }, l.prototype._applySerializers = function(e, t) {
            var n = this;
            Object.keys(this.serializers).forEach(function(r) { if (!(void 0 === e[r] || t && t[r])) try { e[r] = n.serializers[r](e[r]) } catch (t) { s(b('bunyan: ERROR: Exception thrown from the "%s" Bunyan serializer. This should never happen. This is a bugin that serializer function.\n%s', r, t.stack || t)), e[r] = b('(Error in Bunyan log "%s" serializer broke field. See stderr for details.)', r) } })
        }, l.prototype._emit = function(e, t) {
            var n;
            if (void 0 === this.haveNonRawStreams)
                for (this.haveNonRawStreams = !1, n = 0; n < this.streams.length; n++)
                    if (!this.streams[n].raw) { this.haveNonRawStreams = !0; break }
            var r;
            if (t || this.haveNonRawStreams) try { r = JSON.stringify(e, v()) + "\n" } catch (t) {
                var i = t.stack.split(/\n/g, 2).join("\n");
                s('bunyan: ERROR: Exception in `JSON.stringify(rec)`. You can install the "safe-json-stringify" module to have Bunyan fallback to safer stringification. Record:\n' + o(b("%s\n%s", e, t.stack)), i), r = b("(Exception in JSON.stringify(rec): %j. See stderr for details.)\n", t.message)
            }
            if (t) return r;
            var a = e.level;
            for (n = 0; n < this.streams.length; n++) {
                var u = this.streams[n];
                u.level <= a && u.stream.write(u.raw ? e : r)
            }
            return r
        }, l.prototype.trace = f(10), l.prototype.debug = f(_), l.prototype.info = f(y), l.prototype.warn = f(g), l.prototype.error = f(S), l.prototype.fatal = f(E), l.stdSerializers = {}, l.stdSerializers.err = function(e) { return e && e.stack ? { message: e.message, name: e.name, stack: h(e), code: e.code, signal: e.signal } : e }, e.exports = l, e.exports.TRACE = 10, e.exports.DEBUG = _, e.exports.INFO = y, e.exports.WARN = g, e.exports.ERROR = S, e.exports.FATAL = E, e.exports.resolveLevel = d, e.exports.levelFromName = w, e.exports.nameFromLevel = k, e.exports.VERSION = "0.2.3", e.exports.LOG_VERSION = p, e.exports.createLogger = function(e) { return new l(e) }, e.exports.safeCycles = v, e.exports.ConsoleFormattedStream = c, e.exports.ConsoleRawStream = u
    }, function(e, t, n) {
        "use strict";
        var r = n(15).f,
            i = n(50),
            o = n(53),
            s = n(20),
            a = n(46),
            u = n(48),
            c = n(37),
            d = n(69),
            l = n(106),
            f = n(111),
            h = n(17),
            v = n(31).fastKey,
            p = h ? "_s" : "size",
            b = function(e, t) {
                var n, r = v(t);
                if ("F" !== r) return e._i[r];
                for (n = e._f; n; n = n.n)
                    if (n.k == t) return n
            };
        e.exports = {
            getConstructor: function(e, t, n, d) {
                var l = e(function(e, r) { a(e, l, t, "_i"), e._i = i(null), e._f = void 0, e._l = void 0, e[p] = 0, void 0 != r && c(r, n, e[d], e) });
                return o(l.prototype, {
                    clear: function() {
                        for (var e = this, t = e._i, n = e._f; n; n = n.n) n.r = !0, n.p && (n.p = n.p.n = void 0), delete t[n.i];
                        e._f = e._l = void 0, e[p] = 0
                    },
                    delete: function(e) {
                        var t = this,
                            n = b(t, e);
                        if (n) {
                            var r = n.n,
                                i = n.p;
                            delete t._i[n.i], n.r = !0, i && (i.n = r), r && (r.p = i), t._f == n && (t._f = r), t._l == n && (t._l = i), t[p]--
                        }
                        return !!n
                    },
                    forEach: function(e) {
                        a(this, l, "forEach");
                        for (var t, n = s(e, arguments.length > 1 ? arguments[1] : void 0, 3); t = t ? t.n : this._f;)
                            for (n(t.v, t.k, this); t && t.r;) t = t.p
                    },
                    has: function(e) { return !!b(this, e) }
                }), h && r(l.prototype, "size", { get: function() { return u(this[p]) } }), l
            },
            def: function(e, t, n) { var r, i, o = b(e, t); return o ? o.v = n : (e._l = o = { i: i = v(t, !0), k: t, v: n, p: r = e._l, n: void 0, r: !1 }, e._f || (e._f = o), r && (r.n = o), e[p]++, "F" !== i && (e._i[i] = o)), e },
            getEntry: b,
            setStrong: function(e, t, n) { d(e, t, function(e, t) { this._t = e, this._k = t, this._l = void 0 }, function() { for (var e = this, t = e._k, n = e._l; n && n.r;) n = n.p; return e._t && (e._l = n = n ? n.n : e._t._f) ? "keys" == t ? l(0, n.k) : "values" == t ? l(0, n.v) : l(0, [n.k, n.v]) : (e._t = void 0, l(1)) }, n ? "entries" : "values", !n, !0), f(t) }
        }
    }, function(e, t, n) {
        var r = n(47),
            i = n(169);
        e.exports = function(e) { return function() { if (r(this) != e) throw TypeError(e + "#toJSON isn't generic"); return i(this) } }
    }, function(e, t, n) { e.exports = n(11).document && document.documentElement }, function(e, t, n) { e.exports = !n(17) && !n(25)(function() { return 7 != Object.defineProperty(n(66)("div"), "a", { get: function() { return 7 } }).a }) }, function(e, t, n) {
        var r = n(30),
            i = n(9)("iterator"),
            o = Array.prototype;
        e.exports = function(e) { return void 0 !== e && (r.Array === e || o[i] === e) }
    }, function(e, t, n) {
        var r = n(36);
        e.exports = Array.isArray || function(e) { return "Array" == r(e) }
    }, function(e, t, n) {
        var r = n(16);
        e.exports = function(e, t, n, i) { try { return i ? t(r(n)[0], n[1]) : t(n) } catch (t) { var o = e.return; throw void 0 !== o && r(o.call(e)), t } }
    }, function(e, t, n) {
        var r = n(9)("iterator"),
            i = !1;
        try {
            var o = [7][r]();
            o.return = function() { i = !0 }, Array.from(o, function() { throw 2 })
        } catch (e) {}
        e.exports = function(e, t) {
            if (!t && !i) return !1;
            var n = !1;
            try {
                var o = [7],
                    s = o[r]();
                s.next = function() { return { done: n = !0 } }, o[r] = function() { return s }, e(o)
            } catch (e) {}
            return n
        }
    }, function(e, t) { e.exports = function(e, t) { return { value: t, done: !!e } } }, function(e, t, n) {
        "use strict";
        var r = n(32),
            i = n(71),
            o = n(51),
            s = n(33),
            a = n(68),
            u = Object.assign;
        e.exports = !u || n(25)(function() {
            var e = {},
                t = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst";
            return e[n] = 7, r.split("").forEach(function(e) { t[e] = e }), 7 != u({}, e)[n] || Object.keys(u({}, t)).join("") != r
        }) ? function(e, t) {
            for (var n = s(e), u = arguments.length, c = 1, d = i.f, l = o.f; u > c;)
                for (var f, h = a(arguments[c++]), v = d ? r(h).concat(d(h)) : r(h), p = v.length, b = 0; p > b;) l.call(h, f = v[b++]) && (n[f] = h[f]);
            return n
        } : u
    }, function(e, t, n) {
        var r = n(110),
            i = n(67).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function(e) { return r(e, i) }
    }, function(e, t, n) {
        var r = n(21),
            i = n(33),
            o = n(73)("IE_PROTO"),
            s = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) { return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null }
    }, function(e, t, n) {
        var r = n(21),
            i = n(23),
            o = n(170)(!1),
            s = n(73)("IE_PROTO");
        e.exports = function(e, t) {
            var n, a = i(e),
                u = 0,
                c = [];
            for (n in a) n != s && r(a, n) && c.push(n);
            for (; t.length > u;) r(a, n = t[u++]) && (~o(c, n) || c.push(n));
            return c
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(11),
            i = n(3),
            o = n(15),
            s = n(17),
            a = n(9)("species");
        e.exports = function(e) {
            var t = "function" == typeof i[e] ? i[e] : r[e];
            s && t && !t[a] && o.f(t, a, { configurable: !0, get: function() { return this } })
        }
    }, function(e, t, n) {
        var r, i, o, s = n(20),
            a = n(176),
            u = n(100),
            c = n(66),
            d = n(11),
            l = d.process,
            f = d.setImmediate,
            h = d.clearImmediate,
            v = d.MessageChannel,
            p = 0,
            b = {},
            m = function() {
                var e = +this;
                if (b.hasOwnProperty(e)) {
                    var t = b[e];
                    delete b[e], t()
                }
            },
            _ = function(e) { m.call(e.data) };
        f && h || (f = function(e) { for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]); return b[++p] = function() { a("function" == typeof e ? e : Function(e), t) }, r(p), p }, h = function(e) { delete b[e] }, "process" == n(36)(l) ? r = function(e) { l.nextTick(s(m, e, 1)) } : v ? (i = new v, o = i.port2, i.port1.onmessage = _, r = s(o.postMessage, o, 1)) : d.addEventListener && "function" == typeof postMessage && !d.importScripts ? (r = function(e) { d.postMessage(e + "", "*") }, d.addEventListener("message", _, !1)) : r = "onreadystatechange" in c("script") ? function(e) { u.appendChild(c("script")).onreadystatechange = function() { u.removeChild(this), m.call(e) } } : function(e) { setTimeout(s(m, e, 1), 0) }), e.exports = { set: f, clear: h }
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function i(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.getLogger = t.LOG_LEVELS = t.setLogLevel = t.IceTransportTypes = t.PlaybackVideoEncoder = t.PlaybackAudioEncoder = t.WebSocketStateEventTypes = t.SharedObjectEventTypes = t.FailoverSubscriberEventTypes = t.RTMPSubscriberEventTypes = t.RTCSubscriberEventTypes = t.SubscriberEventTypes = t.FailoverPublisherEventTypes = t.RTCPublisherEventTypes = t.PublisherEventTypes = t.Red5ProSharedObjectSocket = t.Red5ProSharedObject = t.PlaybackControls = t.PublisherView = t.RTMPPublisher = t.RTCPublisher = t.Red5ProPublisher = t.PlaybackView = t.HLSSubscriber = t.RTMPSubscriber = t.RTCSubscriber = t.Red5ProSubscriber = void 0;
        var o = n(24);
        Object.defineProperty(t, "PlaybackControls", { enumerable: !0, get: function() { return o.PlaybackControls } });
        var s = n(2),
            a = n(129),
            u = i(a),
            c = n(121),
            d = i(c),
            l = n(125),
            f = i(l),
            h = n(34),
            v = i(h),
            p = n(57),
            b = i(p),
            m = n(82),
            _ = i(m),
            y = n(84),
            g = i(y),
            S = n(83),
            E = i(S),
            w = n(85),
            k = i(w),
            C = n(45),
            P = r(C),
            T = n(58),
            O = r(T);
        t.Red5ProSubscriber = u.Red5ProSubscriber, t.RTCSubscriber = u.RTCSubscriber, t.RTMPSubscriber = u.RTMPSubscriber, t.HLSSubscriber = u.HLSSubscriber;
        t.PlaybackView = P.default;
        t.Red5ProPublisher = d.Red5ProPublisher, t.RTCPublisher = d.RTCPublisher, t.RTMPPublisher = d.RTMPPublisher;
        t.PublisherView = O.default;
        t.Red5ProSharedObject = f.Red5ProSharedObject, t.Red5ProSharedObjectSocket = f.Red5ProSharedObjectSocket, t.PublisherEventTypes = _.PublisherEventTypes, t.RTCPublisherEventTypes = _.RTCPublisherEventTypes, t.FailoverPublisherEventTypes = _.FailoverPublisherEventTypes, t.SubscriberEventTypes = g.SubscriberEventTypes, t.RTCSubscriberEventTypes = g.RTCSubscriberEventTypes, t.RTMPSubscriberEventTypes = g.RTMPSubscriberEventTypes, t.FailoverSubscriberEventTypes = g.FailoverSubscriberEventTypes, t.SharedObjectEventTypes = E.SharedObjectEventTypes, t.WebSocketStateEventTypes = k.WebSocketStateEventTypes, t.PlaybackAudioEncoder = v.PlaybackAudioEncoder, t.PlaybackVideoEncoder = v.PlaybackVideoEncoder, t.IceTransportTypes = b.IceTransportTypes;
        (0, s.establishLogger)("error");
        t.setLogLevel = function(e) { s.LEVELS.hasOwnProperty(e.toUpperCase()) && ((0, s.establishLogger)(e), console && console.log("Red5 Pro SDK Version 7.0.0-release.b58")) }, t.LOG_LEVELS = s.LEVELS, t.getLogger = s.getLogger
    }, function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            var r = "",
                i = t,
                o = t + n;
            do { r += String.fromCharCode(e[i++]) } while (i < o);
            return r
        }

        function i(e, t) {
            try { return JSON.parse(e)[t] } catch (i) {
                var n = c.exec(e),
                    r = void 0;
                if (n && n.length > 1 && (r = d.exec(e), n[1] === t && r && r.length > 1)) return r[1];
                return
            }
        }

        function o(e) { var t = i(e, "orientation"); if (t) return { orientation: parseInt(t) } }

        function s(e) { var t = i(e, "streamingMode"); if (t) return { streamingMode: t } }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.removePlayerDelegates = t.onStreamingModeMetadata = t.onOrientationMetadata = void 0;
        var a = n(95),
            u = function(e) { return e && e.__esModule ? e : { default: e } }(a),
            c = /['"](.*?)['"]:/gi,
            d = /:['"](.*?)['"]/gi,
            l = new u.default,
            f = function(e) { return l.get(e) },
            h = function(e) {
                var t = "function" == typeof e.textTracks ? e.textTracks() : e.textTracks;
                t && (e.addTextTrack("metadata"), t.addEventListener("addtrack", function(t) {
                    var n = t.track;
                    n.mode = "hidden", n.addEventListener("cuechange", function(t) {
                        var i = void 0,
                            a = void 0;
                        for (t && t.currentTarget ? i = t.currentTarget.cues : (i = n.cues, i = i && i.length > 0 ? i : n.activeCues), i = i || [], a = 0; a < i.length; a++) {
                            var u = i[a];
                            u.value && function() {
                                var t = "string" == typeof u.value.data ? u.value.data : r(u.value.data, 0, u.size),
                                    n = o(t),
                                    i = s(t),
                                    a = f(e);
                                n && a && a.orientation && a.orientation.forEach(function(e) { e(n) }), i && a && a.streamingMode && a.streamingMode.forEach(function(e) { e(i) })
                            }()
                        }
                    })
                }))
            };
        t.onOrientationMetadata = function(e, t) {
            var n = l.get(e);
            l.has(e) ? n.hasOwnProperty("orientation") || (l.get(e).orientation = []) : (h(e), l.set(e, { orientation: [] })), l.get(e).orientation.push(t)
        }, t.onStreamingModeMetadata = function(e, t) {
            var n = l.get(e);
            l.has(e) ? n.hasOwnProperty("streamingMode") || (l.get(e).streamingMode = []) : (h(e), l.set(e, { streamingMode: [] })), l.get(e).streamingMode.push(t)
        }, t.removePlayerDelegates = function(e) { l.has(e) && l.delete(e) }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.NoSupportedCameraResolutionsError = t.NoElementFoundError = void 0;
        var r = n(0),
            i = function(e) { return e && e.__esModule ? e : { default: e } }(r);
        t.NoElementFoundError = function e(t) {
            (0, i.default)(this, e), this.name = "NoElementFound", this.message = t
        }, t.NoSupportedCameraResolutionsError = function e(t) {
            (0, i.default)(this, e), this.name = "NoSupportedCameraResolutionsError", this.message = t
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(5),
            o = r(i),
            s = n(0),
            a = r(s),
            u = n(1),
            c = r(u),
            d = n(8),
            l = r(d),
            f = n(61),
            h = r(f),
            v = n(7),
            p = r(v),
            b = n(43),
            m = r(b),
            _ = n(28),
            y = n(2),
            g = "R5ProPublisherSocket",
            S = function(e) {
                function t(e) { return (0, a.default)(this, t), (0, l.default)(this, (t.__proto__ || (0, o.default)(t)).call(this, e, g)) }
                return (0, p.default)(t, e), (0, c.default)(t, [{
                    key: "respond",
                    value: function(e) {
                        if (e.data) {
                            var n = this.getJsonFromSocketMessage(e);
                            (0, h.default)(t.prototype.__proto__ || (0, o.default)(t.prototype), "respond", this).call(this, e) || void 0 !== n.data && (void 0 !== n.data.sdp && "answer" === n.data.sdp.type && this._responder.onSDPAnswer(n.data), void 0 !== n.data.candidate && ((0, _.isObjectEmpty)(n.data.candidate) ? this._responder.onEmptyCandidate() : this._responder.onAddIceCandidate(n.data.candidate)), "status" === n.data.type && ("NetConnection.ICE.TricleCompleted" === n.data.code || "NetConnection.ICE.TrickleCompleted" === n.data.code ? this._responder.onSocketIceCandidateEnd() : this._responder.onPublisherStatus(n.data)), void 0 !== n.type && "metadata" === n.type.toLowerCase() && (void 0 !== n.method ? this._responder.onSendReceived(n.method, n.data) : this._responder.onMetaData(n.data)))
                        } else(0, y.warn)(g, "[ws.onmessage] - No Message Data.")
                    }
                }, { key: "postUnpublish", value: function(e) { return void 0 !== this._websocket && 1 === this._openState && (this.post({ unpublish: e }), !0) } }]), t
            }(m.default);
        t.default = S
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(5),
            o = r(i),
            s = n(0),
            a = r(s),
            u = n(1),
            c = r(u),
            d = n(8),
            l = r(d),
            f = n(61),
            h = r(f),
            v = n(7),
            p = r(v),
            b = n(43),
            m = r(b),
            _ = n(28),
            y = n(2),
            g = "R5ProSubscriptionSocket",
            S = function(e) {
                function t(e) { return (0, a.default)(this, t), (0, l.default)(this, (t.__proto__ || (0, o.default)(t)).call(this, e, g)) }
                return (0, p.default)(t, e), (0, c.default)(t, [{
                    key: "respond",
                    value: function(e) {
                        if (e.data) {
                            var n = this.getJsonFromSocketMessage(e);
                            (0, h.default)(t.prototype.__proto__ || (0, o.default)(t.prototype), "respond", this).call(this, e) || (void 0 !== n.data ? (void 0 !== n.data.sdp && "offer" === n.data.sdp.type && this._responder.onSDPOffer(n.data), void 0 !== n.data.candidate && ((0, _.isObjectEmpty)(n.data.candidate) ? this._responder.onEmptyCandidate() : this._responder.onAddIceCandidate(n.data.candidate)), "status" === n.data.type && ("NetConnection.ICE.TricleCompleted" === n.data.code || "NetConnection.ICE.TrickleCompleted" === n.data.code ? this._responder.onSocketIceCandidateEnd() : "NetStream.Play.UnpublishNotify" === n.data.code ? this._responder.onUnpublish() : "NetConnection.Connect.Closed" === n.data.code ? this._responder.onConnectionClosed() : this._responder.onSubscriberStatus(n.data)), n.data.hasOwnProperty("status") && "NetStream.Play.UnpublishNotify" === n.data.status && this._responder.onUnpublish(), void 0 !== n.type && "metadata" === n.type && (void 0 !== n.method ? this._responder.onSendReceived(n.method, n.data) : this._responder.onMetaData(n.data))) : void 0 !== n.type && "metadata" === n.type && this._responder.onMetaData(n.metadata))
                        } else(0, y.warn)(g, "[ws.onmessage] - No Message Data.")
                    }
                }]), t
            }(m.default);
        t.default = S
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(12),
            o = r(i),
            s = n(0),
            a = r(s),
            u = n(1),
            c = r(u),
            d = n(41),
            l = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(d),
            f = n(4),
            h = r(f),
            v = n(6),
            p = n(2),
            b = "R5ProPublishPeer",
            m = function() {
                function e(t) {
                    (0, a.default)(this, e), this._responder = t, this._peerConnection = void 0
                }
                return (0, c.default)(e, [{ key: "_removeConnectionHandlers", value: function(e) { e.onconnectionstatechange = void 0, e.oniceconnectionstatechange = void 0, e.onicecandidate = void 0 } }, {
                    key: "_addConnectionHandlers",
                    value: function(e, t) {
                        var n = this,
                            r = void 0;
                        e.onconnectionstatechange = function() {
                            (0, p.debug)(b, "[peer.onconnectionstatechange] - State: " + e.connectionState), "connected" === e.connectionState ? ((0, p.debug)(b, "[peerconnection:open]"), t ? t.resolve(n) : n._responder.onPeerConnectionOpen()) : "failed" !== e.connectionState && "disconnected" !== e.connectionState || ((0, p.warn)(b, "[peerconnection:error]"), t && t.reject(), "failed" === e.connectionState && n._responder.onPeerConnectionFail())
                        }, e.onicecandidate = function(e) {
                            (0, p.debug)(b, "[peer.onicecandidate] - Peer Candidate: " + e.candidate), e.candidate ? n._responder.onIceCandidate(e.candidate) : e.candidate
                        }, e.oniceconnectionstatechange = function(t) {
                            var i = e.iceConnectionState;
                            (0, p.debug)(b, "[peer.oniceconnectionstatechange] - State: " + i), "connected" === i && h.default.getIsEdge() ? ((0, p.debug)(b, "[edge/ortc:notify complete]"), n._responder.onPeerGatheringComplete()) : "failed" === i ? (r && clearTimeout(r), n._responder.onPeerConnectionClose(t)) : "disconnected" === i ? r = setTimeout(function() {
                                (0, p.debug)(b, "[peer.oniceconnectionstatechange] - Reconnect timeout reached. Closing PeerConnection."), clearTimeout(r), n._responder.onPeerConnectionClose(t)
                            }, 5e3) : r && ((0, p.debug)(b, "[peer.oniceconnectionstatechange] - Clearing timeout for reconnect."), clearTimeout(r))
                        }, e.onsignalingstatechange = function(t) {
                            var n = e.signalingState;
                            (0, p.debug)(b, "[peer.onsignalingstatechange] - State: " + n)
                        }, e.onicegatheringstatechange = function() {
                            var t = e.iceGatheringState;
                            (0, p.debug)(b, "[peer.onicegatheringstatechange] - State: " + t), "complete" === t && n._responder.onPeerGatheringComplete()
                        }, e.onremovestream = function() {
                            (0, p.debug)(b, "[peer.onremovestream]")
                        }
                    }
                }, { key: "getUserMedia", value: function(e, t) { return l.getUserMedia(e, t) } }, { key: "forceUserMedia", value: function(e) { return l.forceUserMedia(e) } }, {
                    key: "createOffer",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        (0, p.debug)(b, "[createoffer]");
                        var r = n || new v.DeferredPromise;
                        return this._peerConnection.createOffer().then(function(n) { e.setLocalDescription(n, t).then(function() { t && (n.sdp = l.updateBandwidth(t, n.sdp)), e._responder.onSDPSuccess(), r.resolve(n) }).catch(function(t) { e._responder.onSDPError(t), r.reject(t) }) }).catch(function(e) {
                            (0, p.debug)(b, "[createoffer:error]"), r.reject(e)
                        }), r.hasOwnProperty("promise") ? r.promise : r
                    }
                }, { key: "setLocalDescription", value: function(e) { return (0, p.debug)(b, "[setlocaldescription]"), this._peerConnection.setLocalDescription(e) } }, { key: "setRemoteDescription", value: function(e) { return (0, p.debug)(b, "[setremotedescription]"), this._peerConnection.setRemoteDescription(new l.RTCSessionDescription(e)) } }, { key: "addIceCandidate", value: function(e) { return (0, p.debug)(b, "[addcandidate]"), this._peerConnection.addIceCandidate(e) } }, {
                    key: "setUp",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                        this.tearDown();
                        var r = t || new v.DeferredPromise;
                        try {
                            var i = { iceServers: e, iceCandidatePoolSize: 2, bundlePolicy: "max-bundle" };
                            void 0 !== n && (i.rtcpMuxPolicy = n), (0, p.debug)(b, "[peerconnection:setup]: " + (0, o.default)(i, null, 2));
                            var s = new l.RTCPeerConnection(i, { optional: [{ RtpDataChannels: !1 }, { googCpuOveruseDetection: !0 }] });
                            this._addConnectionHandlers(s), this._peerConnection = s, r.resolve(s)
                        } catch (e) {
                            (0, p.warn)(b, "Could not establish a PeerConnection. " + e.message), r.reject(e.message)
                        }
                        return r.hasOwnProperty("promise") ? r.promise : r
                    }
                }, {
                    key: "setUpWithPeerConfiguration",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                        this.tearDown();
                        var n = t || new v.DeferredPromise;
                        try {
                            (0, p.debug)(b, "[peerconnection:setUpWithPeerConfiguration]: " + (0, o.default)(e, null, 2));
                            var r = new l.RTCPeerConnection(e, { optional: [{ RtpDataChannels: !1 }, { googCpuOveruseDetection: !0 }] });
                            this._addConnectionHandlers(r), this._peerConnection = r, n.resolve(r)
                        } catch (e) {
                            (0, p.warn)(b, "Could not establish a PeerConnection. " + e.message), n.reject(e.message)
                        }
                        return n.hasOwnProperty("promise") ? n.promise : n
                    }
                }, {
                    key: "tearDown",
                    value: function() {
                        if (this._peerConnection) {
                            (0, p.debug)(b, "[teardown]"), this._removeConnectionHandlers(this._peerConnection);
                            try { this._peerConnection.close() } catch (e) {
                                (0, p.warn)(b, "[peerconnection.close] error: " + e.message)
                            } finally { this._peerConnection = void 0 }
                        }
                    }
                }, { key: "connection", get: function() { return this._peerConnection } }]), e
            }();
        t.default = m
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(12),
            o = r(i),
            s = n(0),
            a = r(s),
            u = n(1),
            c = r(u),
            d = n(41),
            l = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(d),
            f = n(4),
            h = r(f),
            v = n(6),
            p = n(2),
            b = "R5ProSubscriptionPeer",
            m = function(e) { return void 0 === e || "string" == typeof e && 0 === e.length },
            _ = function() {
                function e(t) {
                    (0, a.default)(this, e), this._responder = t, this._peerConnection = void 0, this._pendingMediaStream = void 0
                }
                return (0, c.default)(e, [{ key: "_removeConnectionHandlers", value: function(e) { e.onconnectionstatechange = void 0, e.oniceconnectionstatechange = void 0, e.onicecandidate = void 0, e.ontrack = void 0 } }, {
                    key: "_addConnectionHandlers",
                    value: function(e, t) {
                        var n = this,
                            r = void 0;
                        e.onconnectionstatechange = function() {
                            (0, p.debug)(b, "[peer.onconnectionstatechange] - State: " + e.connectionState), "connected" === e.connectionState ? ((0, p.debug)(b, "[peerconnection:open]"), t ? t.resolve(n) : n._responder.onPeerConnectionOpen()) : "failed" !== e.connectionState && "disconnected" !== e.connectionState || ((0, p.warn)(b, "[peerconnection:error]"), t && t.reject())
                        }, e.onicecandidate = function(e) {
                            (0, p.debug)(b, "[peer.onicecandidate] - Peer Candidate: " + e.candidate), e.candidate ? n._responder.onIceCandidate(e.candidate) : null === e.candidate && n._pendingMediaStream && (n._responder.onIceCandidateTrickleEnd(n._pendingMediaStream), n._pendingMediaStream = void 0)
                        }, e.ontrack = function(e) {
                            (0, p.debug)(b, "(ontrack) Peer Add Stream: " + e.streams), e.streams && e.streams.length > 0 && void 0 === n._pendingMediaStream && (n._pendingMediaStream = e.streams[0], n._responder.onAnswerMediaStream(e.streams[0]))
                        }, e.oniceconnectionstatechange = function(t) {
                            var i = e.iceConnectionState;
                            (0, p.debug)(b, "[peer.oniceconnectionstatechange] - State: " + i), "connected" === i && h.default.getIsEdge() ? ((0, p.debug)(b, "[edge/ortc:notify complete]"), n._responder.onPeerGatheringComplete(), e.onicecandidate({ candidate: null })) : "failed" === i ? (r && clearTimeout(r), n._responder.onPeerConnectionFail(), n._responder.onPeerConnectionClose(t)) : "disconnected" === i ? r = setTimeout(function() {
                                (0, p.debug)(b, "[peer.oniceconnectionstatechange] - Reconnect timeout reached. Closing PeerConnection."), clearTimeout(r), n._responder.onPeerConnectionClose(t)
                            }, 5e3) : r && ((0, p.debug)(b, "[peer.oniceconnectionstatechange] - Clearing timeout for reconnect."), clearTimeout(r))
                        }, e.onicegatheringstatechange = function() {
                            var t = e.iceGatheringState;
                            (0, p.debug)(b, "[peer.onicegatheringstatechange] - State: " + t), "complete" === t && n._responder.onPeerGatheringComplete()
                        }, e.onremovestream = function() {
                            (0, p.debug)(b, "[peer.onremovestream]")
                        }
                    }
                }, {
                    key: "createAnswer",
                    value: function(e) {
                        var t = this;
                        (0, p.debug)(b, "[createanswer]");
                        var n = new v.DeferredPromise;
                        return this._peerConnection.setRemoteDescription(e).then(this._responder.onSDPSuccess).catch(function(e) { t._responder.onSDPError(e) }), this._peerConnection.createAnswer().then(function(e) { t._peerConnection.setLocalDescription(e).then(t._responder.onSDPSuccess).catch(function(e) { t._responder.onSDPError(e) }), n.resolve(e) }).catch(n.reject), n.promise
                    }
                }, {
                    key: "addIceCandidate",
                    value: function(e) {
                        if ((0, p.debug)(b, "checking if empty..."), m(e))(0, p.debug)(b, "[addicecandidate]:: empty");
                        else if (null !== e) {
                            (0, p.debug)(b, "[addicecandidate] :: non-empty");
                            var t = new l.RTCIceCandidate({ sdpMLineIndex: e.sdpMLineIndex, candidate: e.candidate });
                            this._peerConnection.addIceCandidate(t).then(function() {}).catch(function(e) {
                                (0, p.error)(b, "Error in add of ICE Candidiate + " + e)
                            })
                        } else(0, p.debug)(b, "[addicecandidate] :: null"), this._peerConnection.addIceCandidate(e).then(function() {}).catch(function(e) {
                            (0, p.error)(b, "Error in add of ICE Candidiate + " + e)
                        })
                    }
                }, {
                    key: "setUp",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                        this.tearDown();
                        var r = t || new v.DeferredPromise;
                        try {
                            var i = { iceServers: e, iceCandidatePoolSize: 2, bundlePolicy: "max-bundle" };
                            void 0 !== n && (i.rtcpMuxPolicy = n), (0, p.debug)(b, "[peerconnection:setup]: " + (0, o.default)(i, null, 2));
                            var s = new l.RTCPeerConnection(i, { optional: [{ RtpDataChannels: !1 }, { googCpuOveruseDetection: !0 }] });
                            this._peerConnection = s, this._addConnectionHandlers(s), r.resolve()
                        } catch (e) {
                            (0, p.warn)(b, "Could not create a RTCPeerConnection. Error: " + e.message), r.reject(e.message)
                        }
                        return r.hasOwnProperty("promise") ? r.promise : r
                    }
                }, {
                    key: "setUpWithPeerConfiguration",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                        this.tearDown();
                        var n = t || new v.DeferredPromise;
                        try {
                            (0, p.debug)(b, "[peerconnection:setUpWithPeerConfiguration]: " + (0, o.default)(e, null, 2));
                            var r = new l.RTCPeerConnection(e, { optional: [{ RtpDataChannels: !1 }, { googCpuOveruseDetection: !0 }] });
                            this._addConnectionHandlers(r), this._peerConnection = r, n.resolve(r)
                        } catch (e) {
                            (0, p.warn)(b, "Could not establish a PeerConnection. " + e.message), n.reject(e.message)
                        }
                        return n.hasOwnProperty("promise") ? n.promise : n
                    }
                }, {
                    key: "tearDown",
                    value: function() {
                        if (this._peerConnection) {
                            (0, p.debug)(b, "[teardown]"), this._removeConnectionHandlers(this._peerConnection);
                            try { this._peerConnection.close() } catch (e) {
                                (0, p.warn)(b, "[peerconnection.close] error: " + e.message)
                            }
                        }
                        this._pendingMediaStream = void 0, this._peerConnection = void 0
                    }
                }, { key: "connection", get: function() { return this._peerConnection } }]), e
            }();
        t.default = _
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.RawStream = void 0;
        var i = n(0),
            o = r(i),
            s = n(1),
            a = r(s),
            u = n(97);
        t.RawStream = function() {
            function e() {
                (0, o.default)(this, e)
            }
            return (0, a.default)(e, [{ key: "write", value: function(e) { console.log("%s - [%s] %s: %s", e.time.toISOString(), e.name, u.nameFromLevel[e.level], e.msg) } }]), e
        }()
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.RTCPublisher = t.RTMPPublisher = t.Red5ProPublisher = void 0;
        var i = n(94),
            o = r(i),
            s = n(96),
            a = r(s),
            u = n(5),
            c = r(u),
            d = n(0),
            l = r(d),
            f = n(1),
            h = r(f),
            v = n(8),
            p = r(v),
            b = n(7),
            m = r(b),
            _ = n(91),
            y = r(_),
            g = n(89),
            S = r(g),
            E = n(19),
            w = r(E),
            k = n(124),
            C = r(k),
            P = n(123),
            T = r(P),
            O = n(6),
            R = n(56),
            A = n(2),
            M = "Red5ProPublisher",
            N = new S.default,
            j = function() { var e = new y.default; return e.set(R.PublishTypes.RTC, T.default), e.set(R.PublishTypes.RTMP, C.default), e }(),
            I = function(e) {
                function t() {
                    (0, l.default)(this, t);
                    var e = (0, p.default)(this, (t.__proto__ || (0, c.default)(t)).call(this));
                    return e._options = void 0, e._order = [R.PublishTypes.RTC, R.PublishTypes.RTMP], e
                }
                return (0, m.default)(t, e), (0, h.default)(t, [{ key: "_getPublisherFromOrder", value: function(e, t) { return N.create(e, j, t, "init") } }, { key: "getPublishOrder", value: function() { return this._order } }, {
                    key: "setPublishOrder",
                    value: function(e) {
                        e = "string" == typeof e ? [e] : e;
                        var t = e.filter(function(e) {
                            var t = void 0;
                            for (t in R.PublishTypes)
                                if (R.PublishTypes[t].toLowerCase() === e.toLowerCase()) return !0;
                            return !1
                        }).map(function(e) { return e.toLowerCase() });
                        return this._order = [].concat((0, a.default)(new o.default(t))), (0, A.debug)(M, "[orderupdate]: " + this._order), this
                    }
                }, {
                    key: "init",
                    value: function(e) {
                        var t = new O.DeferredPromise;
                        return (0, A.debug)(M, "[publish]"), this._options = e, this._getPublisherFromOrder(this._order, this._options).then(function(e) { t.resolve(e) }).catch(function(e) {
                            (0, A.warn)(M, "[publisherror]: Could not implement a publisher: " + e), t.reject(e)
                        }), t.promise
                    }
                }, { key: "publishTypes", get: function() { return R.PublishTypes } }]), t
            }(w.default);
        t.Red5ProPublisher = I, t.RTMPPublisher = C.default, t.RTCPublisher = T.default
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(139),
            o = r(i),
            s = n(12),
            a = r(s),
            u = n(0),
            c = r(u),
            d = n(1),
            l = r(d),
            f = n(80),
            h = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(f),
            v = n(4),
            p = r(v),
            b = n(86),
            m = r(b),
            _ = n(90),
            y = n(28),
            g = n(6),
            S = n(2),
            E = "R5ProPublisherSourceHandler",
            w = function(e) { return e.exact || e.ideal || e.max || e.min || e },
            k = function(e, t) {
                var n = (0, y.deepCopy)(t);
                if ("boolean" == typeof e.video) n.video = e.video;
                else {
                    var r = void 0;
                    for (r in e.video) n[r] = w(e.video[r]);
                    n.video = !0
                }
                return n.audio = "boolean" != typeof e.audio || e.audio, n
            },
            C = function() {
                function e(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                    (0, c.default)(this, e), this.video = t, this.clone = this.video.cloneNode(!0), this.holder = this.video.parentNode, this._publisherType = n, this._swfId = null, this._embedFuture = void 0, this._soResponder = r || new m.default
                }
                return (0, l.default)(e, [{ key: "getEmbedOperation", value: function() { return this._embedFuture = g.Future.createIfNotExist(this._embedFuture), this._embedFuture.promise } }, { key: "cleanUp", value: function() { this.video.remove(), this.video = this.clone.cloneNode(!0), this.holder.appendChild(this.video), this._embedFuture = void 0 } }, {
                    key: "addSource",
                    value: function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        (0, S.debug)(E, "[addsource]");
                        var i = this;
                        this._swfId = e, this._embedFuture = g.Future.createIfNotExist(this._embedFuture);
                        var o = this._embedFuture;
                        return t.swf = n || t.swf, t.minFlashVersion = r || t.minFlashVersion, h.defineEmbedElement(this.video, this.holder).then(function(n) {
                            (0, S.debug)(E, "[element:complete]");
                            var r = { buffer: null != t.buffer ? t.buffer : 1, streamMode: t.streamMode, streamName: t.streamName, appName: t.app, host: t.host };
                            return t.backgroundColor && (r.backgroundColor = t.backgroundColor), t.context && (r.roomName = t.context), "100%" !== t.embedWidth && "100%" !== t.embedHeight || (r.autosize = !0), void 0 !== t.connectionParams && (r.connectionParams = encodeURIComponent((0, a.default)(t.connectionParams))), r = k(t.mediaConstraints, r), h.embedSwfObject(e, t, r, p.default.getSwfObject(), n)
                        }).then(function() {
                            (0, S.debug)(E, "[embed:complete]"), o.resolve(i)
                        }).catch(function(e) { return o.reject(e) }), o.promise
                    }
                }, {
                    key: "connect",
                    value: function(e) {
                        (0, S.debug)(E, "[connect]");
                        var t = p.default.getEmbedObject(this._swfId);
                        t ? (t.connect(e), this._soResponder.connect(this._swfId)) : (0, S.warn)(E, "Could not determine embedded element with swf id: " + this._swfId + ".")
                    }
                }, {
                    key: "disconnect",
                    value: function() {
                        (0, S.debug)(E, "[disconnect]");
                        try {
                            var e = p.default.getEmbedObject(this._swfId);
                            e && e.disconnect()
                        } catch (e) {}
                        this.cleanUp(), this._soResponder.disconnect()
                    }
                }, {
                    key: "send",
                    value: function(e, t) {
                        var n = p.default.getEmbedObject(this._swfId);
                        n && n.send(e, t)
                    }
                }, { key: "addSharedObjectResponseHandler", value: function(e) { this._soResponder.addResponseHandler(e) } }, { key: "removeSharedObjectResponseHandler", value: function(e) { this._soResponder.removeResponseHandler(e) } }, { key: "sendToSharedObject", value: function(e, t, n) { this._soResponder.sendToSharedObject(e, t, n) } }, { key: "sendPropertyToSharedObject", value: function(e, t, n) { this._soResponder.sendPropertyToSharedObject(e, t, n) } }, { key: "getRemoteSharedObject", value: function(e) { this._soResponder.getRemoteSharedObject(e) } }, { key: "connectToSharedObject", value: function(e) { this._soResponder.connectToSharedObject(e) } }, { key: "closeSharedObject", value: function(e) { this._soResponder.closeSharedObject(e) } }, {
                    key: "setMediaQuality",
                    value: function(e) {
                        var t = p.default.getEmbedObject(this._swfId);
                        if (t && e.video && "boolean" != typeof e.video) {
                            var n = isNaN(e.video.width) ? o.default : (0, _.toInt)(e.video.width),
                                r = isNaN(e.video.height) ? o.default : (0, _.toInt)(e.video.height);
                            t.updateResolution(n, r)
                        }
                    }
                }, { key: "getType", value: function() { return this._publisherType } }]), e
            }();
        t.default = C
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function i(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = n(60),
            s = i(o),
            a = n(29),
            u = i(a),
            c = n(12),
            d = i(c),
            l = n(5),
            f = i(l),
            h = n(0),
            v = i(h),
            p = n(1),
            b = i(p),
            m = n(8),
            _ = i(m),
            y = n(7),
            g = i(y),
            S = n(19),
            E = i(S),
            w = n(41),
            k = r(w),
            C = n(42),
            P = r(C),
            T = n(4),
            O = i(T),
            R = n(116),
            A = i(R),
            M = n(118),
            N = i(M),
            j = n(58),
            I = i(j),
            L = n(13),
            H = n(56),
            F = n(57),
            D = n(6),
            x = n(87),
            U = n(44),
            B = n(2),
            V = /(.*) starting/i,
            W = /(.*) stopping/i,
            G = "RTCPublisher",
            z = function(e) {
                (0, B.debug)(G, e)
            },
            Y = function(e) {
                (0, B.warn)(G, e)
            },
            q = function(e) {
                (0, B.error)(G, e)
            },
            K = { protocol: "wss", port: 443, app: "live", streamMode: H.PublishModeTypes.LIVE, keyFramerate: 3e3, mediaElementId: "red5pro-publisher", rtcConfiguration: { iceServers: [{ urls: "stun:stun2.l.google.com:19302" }], iceCandidatePoolSize: 2, bundlePolicy: "max-bundle" }, iceServers: void 0, iceTransport: F.IceTransportTypes.UDP, bandwidth: { audio: 56, video: 512 }, mediaConstraints: new x.RTCMediaConstraint, onGetUserMedia: void 0 },
            J = function(e) {
                var t = { audio: !1, video: !1 },
                    n = { audio: !1, video: !1 };
                return e.getTracks().forEach(function(e) { "video" === e.kind ? (n.video = e.getSettings(), t.video = e.getConstraints()) : "audio" === e.kind && (n.audio = e.getSettings(), t.audio = e.getConstraints()) }), { requested: t, accepted: n }
            },
            X = function(e) {
                function t() {
                    (0, v.default)(this, t);
                    var e = (0, _.default)(this, (t.__proto__ || (0, f.default)(t)).call(this));
                    return e._options = void 0, e._view = void 0, e._peerHelper = void 0, e._socketHelper = void 0, e._mediaStream = void 0, e._streamFuture = void 0, e._availableFuture = void 0, e._peerFuture = void 0, e._offerFuture = void 0, e._sendOfferFuture = void 0, e._trickleEndFuture = void 0, e._publishFuture = void 0, e._unpublishFuture = void 0, e._onOrientationChange = e._onOrientationChange.bind(e), e._gUMRejectionHandler = e._onGUMRejection.bind(e), e
                }
                return (0, g.default)(t, e), (0, b.default)(t, [{ key: "_getMediaStream", value: function() { return this._streamFuture = D.Future.createIfNotExist(this._streamFuture), this._streamFuture.promise } }, { key: "_getTrickleEnd", value: function() { return D.Future.createIfNotExist(this._trickleEndFuture) } }, {
                    key: "_gum",
                    value: function(e) {
                        var t = this,
                            n = function(e) { if (!e) return !1; var t = e.getTracks(); return !!(t && t.length > 1) && "video" === t[0].kind };
                        void 0 !== e.onGetUserMedia ? (z("Requesting gUM from user-defined configuration:onGetUserMedia."), e.onGetUserMedia().then(function(r) {
                            if (n(r)) return z("We received a MediaStream with mismatching track listing. Trying again..."), void t._gum(e);
                            t.trigger(new L.PublisherEvent(L.RTCPublisherEventTypes.CONSTRAINTS_ACCEPTED, t, J(r))), t._streamFuture.resolve(r)
                        }).catch(function(n) { q("Could not resolve MediaStream from provided gUM. Error - " + n), t.trigger(new L.PublisherEvent(L.RTCPublisherEventTypes.CONSTRAINTS_REJECTED, t, { constraints: e.mediaConstraints })), t._streamFuture.reject(n) })) : (z("Requesting gUM using mediaConstraints: " + (0, d.default)(e.mediaConstraints, null, 2)), this._peerHelper.getUserMedia(e.mediaConstraints, this._gUMRejectionHandler).then(function(r) {
                            if (n(r.media)) return z("We received a MediaStream with mismatching track listing. Trying again..."), void t._gum(e);
                            z("Found valid constraints: " + (0, d.default)(r.constraints, null, 2)), t.trigger(new L.PublisherEvent(L.RTCPublisherEventTypes.CONSTRAINTS_ACCEPTED, t, J(r.media))), t.trigger(new L.PublisherEvent(L.PublisherEventTypes.DIMENSION_CHANGE, t, r.constraints)), t._streamFuture.resolve(r.media)
                        }).catch(function(n) { z("Could not find valid constraint resolutions from: " + (0, d.default)(n.constraints, null, 2)), q("Could not resolve MediaStream from provided mediaConstraints. Error - " + n.error), z("Attempting to find resolutions from original provided constraints: " + (0, d.default)(n.constraints, null, 2)), t.trigger(new L.PublisherEvent(L.RTCPublisherEventTypes.CONSTRAINTS_REJECTED, t, { constraints: n.constraints })), e.onGetUserMedia = function() { return t._peerHelper.forceUserMedia(n.constraints) }, t._gum(e) }))
                    }
                }, { key: "_onGUMRejection", value: function(e) { this.trigger(new L.PublisherEvent(L.RTCPublisherEventTypes.CONSTRAINTS_REJECTED, this, { constraints: e })) } }, { key: "_onOrientationChange", value: function(e) { this._socketHelper && this._socketHelper.post({ send: { method: "onMetaData", data: { deviceOrientation: e } } }) } }, { key: "_onMediaStreamReceived", value: function(e) { this._mediaStream = e, this.trigger(new L.PublisherEvent(L.RTCPublisherEventTypes.MEDIA_STREAM_AVAILABLE, this, e)), this._view && this._view.preview(this._mediaStream) } }, { key: "_setViewIfNotExist", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0; if (void 0 === e && void 0 !== t) { new I.default(t).attachPublisher(this) } } }, { key: "_requestAvailability", value: function(e) { return z("[requestavailability]"), this._availableFuture = D.Future.createIfNotExist(this._availableFuture), this._socketHelper.post({ isAvailable: e, bundle: !1 }), this._availableFuture.promise } }, {
                    key: "_createPeerConnection",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                        z("[createpeeer]"), this._peerFuture = void 0, this._peerFuture = D.Future.createIfNotExist(this._peerFuture), t && e && (Y("The iceServers configuration property is considered deprecated. Please use the rtcConfiguration configuration property upon which you can assign iceServers. Reference: https://www.red5pro.com/docs/streaming/migrationguide.html"), e.iceServers = t);
                        return void 0 !== e ? this._peerHelper.setUpWithPeerConfiguration(e, this._peerFuture) : this._peerHelper.setUp(t, this._peerFuture, this._options.rtcpMuxPolicy)
                    }
                }, { key: "_createOffer", value: function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null; return z("[createoffer]"), this._offerFuture = void 0, this._offerFuture = D.Future.createIfNotExist(this._offerFuture), this._peerHelper.createOffer(e, this._offerFuture), this._offerFuture.promise } }, { key: "_setRemoteDescription", value: function(e) { return z("[setremotedescription]"), this._peerHelper.setRemoteDescription(e) } }, { key: "_sendOffer", value: function(e, t, n) { return z("[sendoffer]"), this._sendOfferFuture = void 0, this._sendOfferFuture = D.Future.createIfNotExist(this._sendOffFuture), this._socketHelper.post({ handleOffer: t, transport: n, data: { sdp: e } }), this._sendOfferFuture.promise } }, { key: "_sendCandidate", value: function(e, t) { z("[sendcandidate]"), this._socketHelper.post({ handleCandidate: t, data: { candidate: e } }) } }, { key: "_requestPublish", value: function(e, t, n) { return z("[requestpublish]"), this._publishFuture = void 0, this._publishFuture = D.Future.createIfNotExist(this._publishFuture), this._socketHelper.post({ publish: e, mode: t, keyFramerate: n }), this._publishFuture.promise } }, { key: "_requestUnpublish", value: function(e) { return this._unpublishFuture = void 0, this._unpublishFuture = D.Future.createIfNotExist(this._unpublishFuture), this._socketHelper.postUnpublish(e) || this._unpublishFuture.resolve(), this._unpublishFuture.promise } }, { key: "init", value: function(e) { this._streamFuture = void 0; var t = new D.DeferredPromise; return k.isSupported() && P.isSupported() ? (this._options = (0, u.default)({}, K, e), this._peerHelper = new N.default(this), this._socketHelper = new A.default(this), this._getMediaStream().then(this._onMediaStreamReceived.bind(this)).catch(function(e) { Y("[gum]: " + e) }), this._gum(this._options), this._setViewIfNotExist(this._view, this._options.mediaElementId), t.resolve(this)) : t.reject("Cannot create WebRTC playback instance. Your environment does not support WebRTC and/or WebSockets."), t.promise } }, {
                    key: "initWithStream",
                    value: function(e, t) {
                        z("[initWithStream]"), this._streamFuture = void 0;
                        var n = new D.DeferredPromise;
                        if (k.isSupported() && P.isSupported()) {
                            this._options = (0, u.default)({}, K, e), this._peerHelper = new N.default(this), this._socketHelper = new A.default(this), this._setViewIfNotExist(this._view, this._options.mediaElementId);
                            this._getMediaStream().then(this._onMediaStreamReceived.bind(this)).catch(function(e) { Y("[gum]: " + e) }), this._streamFuture.resolve(t), n.resolve(this)
                        } else n.reject("Cannot create WebRTC playback instance. Your environment does not support WebRTC and/or WebSockets.");
                        return n.promise
                    }
                }, { key: "setView", value: function(e) { return this._view = e, this._mediaStream && this._view && this._view.preview(this._mediaStream), this } }, {
                    key: "preview",
                    value: function() {
                        var e = this;
                        z("[preview]");
                        var t = new s.default(function(t) { t(e) });
                        return this._setViewIfNotExist(this._view, this._options.mediaElementId), t
                    }
                }, {
                    key: "publish",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        z("[publish]"), this._options.streamName = t || this._options.streamName;
                        var r = n || new D.DeferredPromise,
                            i = new D.DeferredPromise,
                            o = (0, U.rtcSocketEndpointFromOptions)(this._options, { id: this._options.streamName });
                        return this._trickleEndFuture = this._getTrickleEnd(), this._socketHelper.clearRetry(), this._socketHelper.setUp(o, i), i.promise.then(function() { return e.trigger(new L.PublisherEvent(L.PublisherEventTypes.CONNECT_SUCCESS, e)), e._getMediaStream() }).then(function() { return e._requestAvailability(e._options.streamName, e._options.streamType) }).then(function() { return e._createPeerConnection(e._options.rtcConfiguration, e._options.iceServers) }).then(function(t) { return e.trigger(new L.PublisherEvent(L.RTCPublisherEventTypes.PEER_CONNECTION_AVAILABLE, e, t)), e._mediaStream.getTracks().forEach(function(n) { t.addTrack(n, e._mediaStream) }), e._createOffer(e._options.bandwidth) }).then(function(t) { return e.trigger(new L.PublisherEvent(L.RTCPublisherEventTypes.OFFER_START, e, t)), e._sendOffer(t, e._options.streamName, e._options.iceTransport) }).then(function(t) { return e._setRemoteDescription(t.sdp) }).then(function(t) { return e.trigger(new L.PublisherEvent(L.RTCPublisherEventTypes.OFFER_END, e, t)), e._getTrickleEnd().promise }).then(function() { return e.trigger(new L.PublisherEvent(L.RTCPublisherEventTypes.ICE_TRICKLE_COMPLETE, e)), e._requestPublish(e._options.streamName, e._options.streamMode, e._options.keyFramerate) }).then(function() { O.default.addOrientationChangeHandler(e._onOrientationChange), r.resolve(e), e.trigger(new L.PublisherEvent(L.PublisherEventTypes.PUBLISH_START, e)) }).catch(function(t) { O.default.removeOrientationChangeHandler(e._onOrientationChange), r.reject(t), e.trigger(new L.PublisherEvent(L.PublisherEventTypes.CONNECT_FAILURE, e, t)) }), r.hasOwnProperty("promise") ? r.promise : r
                    }
                }, {
                    key: "publishWithSocket",
                    value: function(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        z("[publishWithSocket]"), this._options.streamName = n || this._options.streamName;
                        var i = r || new D.DeferredPromise,
                            o = new D.DeferredPromise;
                        return this._socketHelper = new A.default(this), this._socketHelper.setUpWithSocket(e, o), o.promise.then(function() { return t._requestPublish(t._options.streamName, t._options.streamMode, t._options.keyFramerate) }).then(function() { O.default.addOrientationChangeHandler(t._onOrientationChange), i.resolve(t), t.trigger(new L.PublisherEvent(L.PublisherEventTypes.PUBLISH_START, t)) }).catch(function(e) { O.default.removeOrientationChangeHandler(t._onOrientationChange), i.reject(e), t.trigger(new L.PublisherEvent(L.PublisherEventTypes.CONNECT_FAILURE, t, e)) }), i.hasOwnProperty("promise") ? i.promise : i
                    }
                }, {
                    key: "unpublish",
                    value: function() {
                        var e = this;
                        z(G);
                        var t = function() { e._socketHelper && (z(G), e._socketHelper.tearDown()), e._peerHelper && e._peerHelper.tearDown() };
                        this._availableFuture = void 0, this._peerFuture = void 0, this._offerFuture = void 0, this._sendOfferFuture = void 0, this._trickleEndFuture = void 0, this._publishFuture = void 0;
                        var n = this._requestUnpublish(this._options.streamName);
                        return n.then(function() { e._unpublishFuture = void 0, t(), e.trigger(new L.PublisherEvent(L.PublisherEventTypes.UNPUBLISH_SUCCESS, e)) }), O.default.removeOrientationChangeHandler(this._onOrientationChange), n
                    }
                }, { key: "mute", value: function() { this.muteAudio() } }, { key: "unmute", value: function() { this.unmuteAudio() } }, { key: "muteAudio", value: function() { this._socketHelper.post({ mute: { muteAudio: !0 } }) } }, { key: "unmuteAudio", value: function() { this._socketHelper.post({ mute: { muteAudio: !1 } }) } }, { key: "muteVideo", value: function() { this._socketHelper.post({ mute: { muteVideo: !0 } }) } }, { key: "unmuteVideo", value: function() { this._socketHelper.post({ mute: { muteVideo: !1 } }) } }, { key: "send", value: function(e, t) { this._socketHelper.post({ send: { method: e, data: "string" == typeof t ? JSON.parse(t) : t } }) } }, { key: "callServer", value: function(e, t) { return this._socketHelper.postAsync({ callAdapter: { method: e, arguments: t } }) } }, { key: "onStreamAvailable", value: function(e) { z("[onstreamavailable]: " + (0, d.default)(e, null, 2)), this._availableFuture = D.Future.createIfNotExist(this._availableFuture), this._availableFuture.reject("Stream with name " + this._options.streamName + " already has a broadcast session."), this.trigger(new L.PublisherEvent(L.PublisherEventTypes.PUBLISH_INVALID_NAME, this)) } }, { key: "onStreamUnavailable", value: function(e) { z("Stream " + this._options.streamName + " does not exist."), z("[onstreamunavailable]: " + (0, d.default)(e, null, 2)), this._availableFuture = D.Future.createIfNotExist(this._availableFuture), this._availableFuture.resolve(!0) } }, {
                    key: "onSocketMessageError",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        q("Error in stream publish: " + e + ".\n[Optional detail]: " + t), this._publishFuture && (this.trigger(new L.PublisherEvent(L.PublisherEventTypes.PUBLISH_FAIL, this)), this._publishFuture.reject(e))
                    }
                }, { key: "onSocketClose", value: function(e) { z("[onsocketclose]"), this._peerHelper && this._peerHelper.tearDown(), this.trigger(new L.PublisherEvent(L.PublisherEventTypes.CONNECTION_CLOSED, this, e)) } }, { key: "onPeerConnectionFail", value: function() { z("[onpeerconnectionfail]"), this.trigger(new L.PublisherEvent(L.PublisherEventTypes.PUBLISH_FAIL, this)), this._subscriptionResolver.reject("Peer Connection Failed.") } }, { key: "onPeerConnectionClose", value: function(e) { z("[onpeerconnectionclose]"), this._socketHelper && (z(G), this._socketHelper.tearDown()), this.onSocketClose(e) } }, { key: "onPeerConnectionOpen", value: function() { z("[onpeerconnectionopen]"), this.trigger(new L.PublisherEvent(L.RTCPublisherEventTypes.PEER_CONNECTION_OPEN)) } }, {
                    key: "onSDPSuccess",
                    value: function(e) {
                        var t = e ? ": " + (0, d.default)(e, null, 2) : "";
                        z("[onsdpsuccess]" + t)
                    }
                }, {
                    key: "onSDPError",
                    value: function(e) {
                        this.trigger(new L.PublisherEvent(L.PublisherEventTypes.PUBLISH_FAIL, this));
                        var t = e ? ": " + (0, d.default)(e, null, 2) : "";
                        t("[onsdperror]" + t)
                    }
                }, { key: "onSDPAnswer", value: function(e) { z("[sdpanswer]:: " + (0, d.default)(e, null, 2)), this._sendOfferFuture = D.Future.createIfNotExist(this._sendOfferFuture), this._sendOfferFuture.resolve(e) } }, { key: "onAddIceCandidate", value: function(e) { z("[addicecandidate]"), this._peerHelper.addIceCandidate(e).then(function() { z("[addicecandidate:success]") }).catch(function(e) { Y("[addicecandidate:error] - " + e) }) } }, { key: "onIceCandidate", value: function(e) { z("[icecandidatetrickle]"), this._sendCandidate(e, this._options.streamName) } }, { key: "onIceCandidateTrickleEnd", value: function() { z("[icecandidatetrickle:end]") } }, { key: "onEmptyCandidate", value: function() { z("[icecandidatetrickle:empty]"), this.trigger(new L.PublisherEvent(L.RTCPublisherEventTypes.PEER_CANDIDATE_END)) } }, { key: "onPeerGatheringComplete", value: function() { z("[icecandidategathering:end]"), this._socketHelper && this._socketHelper.postEndOfCandidates(this._options.streamName) } }, { key: "onSocketIceCandidateEnd", value: function() { z("[socketicecandidate:end]"), this._getTrickleEnd().resolve() } }, {
                    key: "onPublisherStatus",
                    value: function(e) {
                        z("[publisherstatus] - " + (0, d.default)(e, null, 2));
                        var t = W.exec(e.message),
                            n = V.exec(e.message);
                        t && t[1] === this._options.streamName ? this._unpublishFuture.resolve() : n && n[1] === this._options.streamName ? this._publishFuture.resolve() : Y("Publisher status received, but could not handle.")
                    }
                }, { key: "onSendReceived", value: function(e, t) { "onMetaData" === e ? this.onMetaData(t) : this.trigger(new L.PublisherEvent(L.PublisherEventTypes.PUBLISH_SEND_INVOKE, this, { methodName: e, data: t })) } }, { key: "onMetaData", value: function(e) { this.trigger(new L.PublisherEvent(L.PublisherEventTypes.PUBLISH_METADATA, this, e)) } }, { key: "overlayOptions", value: function(e) { this._options = (0, u.default)(this._options, e) } }, { key: "getConnection", value: function() { return this._socketHelper } }, { key: "getPeerConnection", value: function() { return this._peerHelper ? this._peerHelper.connection : void 0 } }, { key: "getMediaStream", value: function() { return this._mediaStream } }, { key: "getOptions", value: function() { return this._options } }, { key: "getType", value: function() { return H.PublishTypes.RTC.toUpperCase() } }]), t
            }(E.default);
        t.default = X
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(12),
            o = r(i),
            s = n(29),
            a = r(s),
            u = n(5),
            c = r(u),
            d = n(0),
            l = r(d),
            f = n(1),
            h = r(f),
            v = n(8),
            p = r(v),
            b = n(7),
            m = r(b),
            _ = n(19),
            y = r(_),
            g = n(4),
            S = r(g),
            E = n(122),
            w = r(E),
            k = n(58),
            C = r(k),
            P = n(13),
            T = n(6),
            O = n(56),
            R = n(87),
            A = n(2),
            M = "RTMPPublisher",
            N = { protocol: "rtmp", port: 1935, streamMode: "live", mediaElementId: "red5pro-publisher", embedWidth: "100%", embedHeight: "100%", minFlashVersion: "10.0.0", swf: "lib/red5pro/red5pro-publisher.swf", swfobjectURL: "lib/swfobject/swfobject.js", productInstallURL: "lib/swfobject/playerProductInstall.swf", mediaConstraints: new R.RTMPMediaConstraint },
            j = function(e) {
                function t() {
                    (0, l.default)(this, t);
                    var e = (0, p.default)(this, (t.__proto__ || (0, c.default)(t)).call(this));
                    return e._options = void 0, e._view = void 0, e._sourceHandler = void 0, e._elementId = void 0, e._connectFuture = void 0, e
                }
                return (0, m.default)(t, e), (0, h.default)(t, [{ key: "_setViewIfNotExist", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0; if (void 0 === e && void 0 !== t) { new C.default(t).attachPublisher(this) } } }, {
                    key: "setView",
                    value: function(e, t) {
                        var n = this;
                        return this._view = e, this._elementId = t, void 0 !== this._sourceHandler && (this._sourceHandler.disconnect(), this._sourceHandler = void 0), this._view && (this._sourceHandler = new w.default(this._view.view, this.getType())), this._options && this._sourceHandler && this._sourceHandler.addSource(this._elementId, this._options).catch(function(e) {
                            (0, A.error)(M, "Could not establish proper RTMP publisher: " + e), n.trigger(new P.PublisherEvent(P.RTMPPublisherEventTypes.EMBED_FAILURE, n))
                        }), this
                    }
                }, {
                    key: "_setUpConnectCallback",
                    value: function(e) {
                        var t = this;
                        window.setActiveId = function(n) {
                            (0, A.debug)(M, "Embed and connect() complete for publisher swf. successId(" + n + ")."), e.resolve(t), t.trigger(new P.PublisherEvent(P.RTMPPublisherEventTypes.EMBED_SUCCESS, t)), t._tearDownConnectCallback()
                        }
                    }
                }, { key: "_tearDownConnectCallback", value: function() { window.setActiveId = void 0 } }, {
                    key: "_establishExtIntHandlers",
                    value: function() {
                        var e = this,
                            t = this._options.streamName,
                            n = function(e) { return ["publisher", e, t.split("-").join("_")].join("_") };
                        window[n("r5proConnectClosed")] = function() { e.trigger(new P.PublisherEvent(P.PublisherEventTypes.CONNECTION_CLOSED, e)) }, window[n("r5proConnectSuccess")] = function() { return e.trigger(new P.PublisherEvent(P.PublisherEventTypes.CONNECT_SUCCESS, e)) }, window[n("r5proUnpublishSuccess")] = function() { return e.trigger(new P.PublisherEvent(P.PublisherEventTypes.UNPUBLISH_SUCCESS, e)) }, window[n("r5proPublishStart")] = function() { e._connectFuture.resolve(e), e.trigger(new P.PublisherEvent(P.PublisherEventTypes.PUBLISH_START, e)) }, window[n("r5proPublishMetadata")] = function(t) { return e.trigger(new P.PublisherEvent(P.PublisherEventTypes.PUBLISH_METADATA, e, t)) }, window[n("r5proConnectFailure")] = function() { e._connectFuture.reject(P.PublisherEventTypes.CONNECT_FAILURE), e.trigger(new P.PublisherEvent(P.PublisherEventTypes.CONNECT_FAILURE, e)) }, window[n("r5proPublishFail")] = function() { e._connectFuture.reject(P.PublisherEventTypes.PUBLISH_FAIL), e.trigger(new P.PublisherEvent(P.PublisherEventTypes.PUBLISH_FAIL, e)) }, window[n("r5proPublishInvalidName")] = function() { e._connectFuture.reject(P.PublisherEventTypes.PUBLISH_INVALID_NAME), e.trigger(new P.PublisherEvent(P.PublisherEventTypes.PUBLISH_INVALID_NAME, e)) }
                    }
                }, {
                    key: "init",
                    value: function(e) {
                        var t = this,
                            n = new T.DeferredPromise,
                            r = e.minFlashVersion || N.minFlashVersion;
                        if (S.default.supportsFlashVersion(r)) {
                            this._options = (0, a.default)({}, N, e);
                            try {
                                S.default.injectScript(this._options.swfobjectURL).then(function() { return (0, A.debug)(M, "SWFObject embedded."), t._sourceHandler ? ((0, A.debug)(M, "Publish handler established."), t._sourceHandler.addSource(t._elementId, t._options)) : ((0, A.debug)(M, "Publish handler not established."), !0) }).then(function() { t._setViewIfNotExist(t._view, t._options.mediaElementId), n.resolve(t) }).catch(function(e) {
                                    (0, A.error)(M, "Could not embed Flash-based RTMP Publisher. Reason: " + e), t._sourceHandler && t._sourceHandler.disconnect(), n.reject(e), t.trigger(new P.PublisherEvent(P.RTMPPublisherEventTypes.EMBED_FAILURE, t))
                                })
                            } catch (e) { n.reject("Could not inject Flash-based Publisher into the page. Reason: " + e.message), t.trigger(new P.PublisherEvent(P.RTMPPublisherEventTypes.EMBED_FAILURE, t)) }
                        } else n.reject("Could not resolve RTMPPublisher instance. Requires minimum Flash Player install of " + r);
                        return n.promise
                    }
                }, {
                    key: "publish",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                            r = n || new T.DeferredPromise;
                        this._setUpConnectCallback(r), this._options.streamName = t || this._options.streamName;
                        var i = this._options;
                        try {
                            var s = this._sourceHandler;
                            this._sourceHandler.getEmbedOperation().then(function() {
                                (0, A.debug)(M, "[handler:embed:complete]"), S.default.getEmbedObject(e._elementId) && e._establishExtIntHandlers();
                                var t = 0;
                                ! function e() {
                                    var n = void 0;
                                    n = setTimeout(function() {
                                        try { clearTimeout(n), s.connect((0, o.default)(i)) } catch (n) {
                                            if (t++ > 100) throw n;
                                            e()
                                        }
                                    }, 300)
                                }()
                            }).catch(function(t) { r.reject(t), e.trigger(new P.PublisherEvent(P.PublisherEventTypes.CONNECT_FAILURE, e)) })
                        } catch (e) {
                            (0, A.error)(M, "[handler:embed:error]"), r.reject("Could not initiate connection sequence. Reason: " + e.message), this.trigger(new P.PublisherEvent(P.PublisherEventTypes.CONNECT_FAILURE, this)), this._tearDownConnectCallback()
                        }
                        return this._connectFuture = r, r.promise
                    }
                }, {
                    key: "unpublish",
                    value: function() {
                        var e = new T.DeferredPromise;
                        try { S.default.getEmbedObject(this._elementId).unpublish(), e.resolve() } catch (t) {
                            (0, A.error)(M, "Could not initiate publish sequence. Reason: " + t.message), e.reject(t.message)
                        }
                        return this._connectFuture = void 0, e.promise
                    }
                }, { key: "send", value: function(e, t) { this._sourceHandler.send(e, "string" == typeof t ? t : (0, o.default)(t)) } }, { key: "setMediaQuality", value: function(e) { this._sourceHandler && this._sourceHandler.setMediaQuality(e) } }, { key: "overlayOptions", value: function(e) { this._options = (0, a.default)(this._options, e) } }, { key: "getConnection", value: function() { return this._sourceHandler } }, { key: "getOptions", value: function() { return this._options } }, { key: "getType", value: function() { return O.PublishTypes.RTMP.toUpperCase() } }]), t
            }(y.default);
        t.default = j
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.Red5ProSharedObjectSocket = t.Red5ProSharedObject = void 0;
        var i = n(126),
            o = r(i),
            s = n(127),
            a = r(s);
        t.Red5ProSharedObject = o.default, t.Red5ProSharedObjectSocket = a.default
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(12),
            o = r(i),
            s = n(59),
            a = r(s),
            u = n(5),
            c = r(u),
            d = n(8),
            l = r(d),
            f = n(7),
            h = r(f),
            v = n(0),
            p = r(v),
            b = n(1),
            m = r(b),
            _ = n(19),
            y = r(_),
            g = n(4),
            S = r(g),
            E = n(13),
            w = n(2),
            k = "Red5ProSharedObject",
            C = function(e, t) {
                (0, w.debug)([k, e].join(":"), t)
            },
            P = function(e, t) {
                (0, w.warn)([k, e].join(":"), t)
            },
            T = function(e, t) {
                (0, w.error)([k, e].join(":"), t)
            },
            O = function(e) { return "string" == typeof e ? JSON.parse(e) : e },
            R = function() {
                function e(t, n) {
                    (0, p.default)(this, e), this.key = t, this.value = n
                }
                return (0, m.default)(e, [{ key: "toObject", value: function() { var e = {}; return e[this.key] = this.value, e } }]), e
            }(),
            A = function() {
                function e(t, n) {
                    (0, p.default)(this, e), this.methodName = t;
                    var r = void 0;
                    if ("[object Array]" === Object.prototype.toString.call(n)) {
                        var i = void 0,
                            o = void 0,
                            s = n.length;
                        for (r = [], i = 0; i < s; i++) o = O(n[i]), "[object Array]" === Object.prototype.toString.call(n) ? r = r.concat(o) : r.push(o)
                    } else r = [O(n)];
                    this.message = 1 === r.length ? r[0] : r
                }
                return (0, m.default)(e, [{ key: "toObject", value: function() { return { methodName: this.methodName, message: this.message } } }]), e
            }(),
            M = function(e) {
                function t(e, n) {
                    (0, p.default)(this, t);
                    var r = (0, l.default)(this, (t.__proto__ || (0, c.default)(t)).call(this));
                    r._name = e, r._socket = n.getConnection(), r._socket.addSharedObjectResponseHandler(r), r._onclose = r.close.bind(r), r._handleSocketStateEvents = r._handleSocketStateEvents.bind(r);
                    try { C(r._name, "[sharedobject:connect:attempt]"), r._socket.getRemoteSharedObject(r._name), r._socket.on("*", r._handleSocketStateEvents), S.default.addCloseHandler(r._onclose, 0) } catch (e) { T(r._name, "[sharedobject:connect:error]: " + e.message) }
                    return r
                }
                return (0, h.default)(t, e), (0, m.default)(t, [{ key: "_handleSocketStateEvents", value: function(e) { C(this._name, e.name + ": " + e.type), e.type === E.WebSocketStateEventTypes.CLOSE && (this.trigger(new E.SharedObjectEvent(E.SharedObjectEventTypes.CONNECTION_CLOSED, this._name)), this.close()) } }, { key: "_getJsonFromSocketMessage", value: function(e) { try { return "string" == typeof e.data ? JSON.parse(e.data) : e.data } catch (t) { P(this._name, "Could not parse message as JSON. Message= " + e.data + ". Error= " + t.message) } return null } }, {
                    key: "_notifyOfPropertyValues",
                    value: function(e) {
                        if (0 === (0, a.default)(e).length) this.trigger(new E.SharedObjectEvent(E.SharedObjectEventTypes.PROPERTY_UPDATE, this._name, {}));
                        else { var t = void 0; for (t in e) this.trigger(new E.SharedObjectEvent(E.SharedObjectEventTypes.PROPERTY_UPDATE, this._name, new R(t, e[t]).toObject())) }
                    }
                }, {
                    key: "_notifyOfEvents",
                    value: function(e) {
                        var t = void 0,
                            n = void 0,
                            r = !1,
                            i = e.length;
                        for (t = 0; t < i; t++) switch (n = e[t], n.subtype) {
                            case 4:
                                n.attributes ? this._notifyOfPropertyValues(n.attributes) : this.trigger(new E.SharedObjectEvent(E.SharedObjectEventTypes.PROPERTY_UPDATE, this._name, new R(n.attribute, n.value).toObject())), r = !0;
                                break;
                            case 6:
                                this.trigger(new E.SharedObjectEvent(E.SharedObjectEventTypes.METHOD_UPDATE, this._name, new A(n.method, n.value).toObject())), r = !0
                        }
                        return r
                    }
                }, {
                    key: "respond",
                    value: function(e) {
                        if (e.data) {
                            var t = this._getJsonFromSocketMessage(e);
                            if (null === t) return P(this._name, "Determined websocket response not in correct format. Aborting message handle."), !0;
                            if (void 0 !== t.data)
                                if (t.data.name === this._name) { if (C(this._name, "[sharedobject-response]: " + (0, o.default)(t, null, 2)), "SharedObject.Status.GetRemote" === t.data.status && "Success" === t.data.message) return this._socket.connectToSharedObject(this._name), !0; if ("SharedObject.Status.GetRemote" === t.data.status && "Fail" === t.data.message) return this.trigger(new E.SharedObjectEvent(E.SharedObjectEventTypes.CONNECT_FAILURE, this._name)), !0; if ("SharedObject.Status.Connect" === t.data.status && "Success" === t.data.message) return this.trigger(new E.SharedObjectEvent(E.SharedObjectEventTypes.CONNECT_SUCCESS, this._name)), !0; if ("SharedObject.Status.Connect" === t.data.status && "Fail" === t.data.message) return this.trigger(new E.SharedObjectEvent(E.SharedObjectEventTypes.CONNECT_FAILURE, this._name)), !0; if ("SharedObject.Status.Disconnect" === t.data.status) return this.trigger(new E.SharedObjectEvent(E.SharedObjectEventTypes.CONNECTION_CLOSED, this._name)), !0; if ("sharedobject" === t.data.type) { if (t.data.hasOwnProperty("events")) return this._notifyOfEvents(t.data.events); if (t.data.hasOwnProperty("value")) return this._notifyOfPropertyValues(t.data.value) } } else C("Unhandled Socket exchange: " + (0, o.default)(t, null, 2))
                        }
                        return !1
                    }
                }, { key: "send", value: function(e, t) { this._socket ? this._socket.sendToSharedObject(this._name, e, t) : P(this._name, "No WebSocket connection available!") } }, { key: "setProperty", value: function(e, t) { this._socket.sendPropertyToSharedObject(this._name, e, t) } }, {
                    key: "close",
                    value: function() {
                        if (void 0 === this._socket && P("Socket no longer exist to close shared object properly."), this._socket) {
                            try { this._socket.closeSharedObject(this._name) } catch (e) {}
                            this._socket.removeSharedObjectResponseHandler(this), this._socket.off("*", this._handleSocketStateEvents)
                        }
                        this._socket = void 0, this._name = void 0, S.default.removeCloseHandler(this._onclose)
                    }
                }, { key: "getName", value: function() { return this._name } }]), t
            }(y.default);
        t.default = M
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(5),
            o = r(i),
            s = n(0),
            a = r(s),
            u = n(1),
            c = r(u),
            d = n(8),
            l = r(d),
            f = n(61),
            h = r(f),
            v = n(7),
            p = r(v),
            b = n(43),
            m = r(b),
            _ = n(6),
            y = n(44),
            g = function(e) {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                    (0, a.default)(this, t);
                    var n = Math.floor(65536 * Math.random()).toString(16),
                        r = "sharedobject-" + n,
                        i = (0, l.default)(this, (t.__proto__ || (0, o.default)(t)).call(this, e, r));
                    return i.id = r, i._sharedObjectName = void 0, i
                }
                return (0, p.default)(t, e), (0, c.default)(t, [{
                    key: "getRemoteSharedObject",
                    value: function(e) {
                        (0, h.default)(t.prototype.__proto__ || (0, o.default)(t.prototype), "getRemoteSharedObject", this).call(this, e), this._sharedObjectName = e
                    }
                }, {
                    key: "init",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                            n = new _.DeferredPromise;
                        this.id = t || this.id, this._name = this.id;
                        var r = (0, y.rtcSocketEndpointFromOptions)(e, { id: this.id, wsonly: "true" });
                        return this.setUp(r, n), n.promise
                    }
                }, { key: "respond", value: function(e) { if (!(0, h.default)(t.prototype.__proto__ || (0, o.default)(t.prototype), "respond", this).call(this, e) && e.data) { var n = this.getJsonFromSocketMessage(e); if (n && n.data) { var r = n.data; "status" === r.type && "NetConnection.Connect.Closed" === r.code && (this.respond({ data: { data: { status: "SharedObject.Status.Disconnect", message: r.code, name: this._sharedObjectName } } }), this._sharedObjectName = void 0) } } } }, { key: "close", value: function() { this._sharedObjectName = void 0, this.tearDown() } }, { key: "getConnection", value: function() { return this } }]), t
            }(m.default);
        t.default = g
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(5),
            o = r(i),
            s = n(0),
            a = r(s),
            u = n(1),
            c = r(u),
            d = n(8),
            l = r(d),
            f = n(7),
            h = r(f),
            v = n(19),
            p = r(v),
            b = n(4),
            m = r(b),
            _ = n(88),
            y = n(2),
            g = "ControlSlider",
            S = function(e) {
                function t(e) {
                    (0, a.default)(this, t);
                    var n = (0, l.default)(this, (t.__proto__ || (0, o.default)(t)).call(this));
                    return n.name = [g, e].join("::"), (0, y.debug)(n.name, "[init]"), n._container = m.default.createElement("div"), n._button = n.createButton(), n._track = n.createTrack(), n._progressBar = n.createProgressBar(), n._container.appendChild(n._track), n._container.appendChild(n._progressBar), n._container.appendChild(n._button), n._value = 0, n._disabled = !1, n._eventStartPosition = 0, n._layout(), n._mouseupHandler = n._mouseup.bind(n), n._mousedownHandler = n._mousedown.bind(n), n._mousemoveHandler = n._mousemove.bind(n), n._touchupHandler = n._touchproxy.bind(n), n._touchdownHandler = n._touchproxy.bind(n), n._touchmoveHandler = n._touchproxy.bind(n), n._updateHandlers(n._disabled), n
                }
                return (0, h.default)(t, e), (0, c.default)(t, [{
                    key: "_touchproxy",
                    value: function(e) {
                        if (e.preventDefault(), !(e.touches.length > 1 || "touchend" == e.type && e.touches.length > 0)) {
                            var t = m.default.createEvent("MouseEvent"),
                                n = void 0,
                                r = void 0,
                                i = e.originalTarget || e.target;
                            switch (e.type) {
                                case "touchstart":
                                    n = "mousedown", r = e.changedTouches[0];
                                    break;
                                case "touchmove":
                                    n = "mousemove", r = e.changedTouches[0];
                                    break;
                                case "touchend":
                                    n = "mouseup", r = e.changedTouches[0]
                            }
                            t.initMouseEvent(n, !0, !0, i.ownerDocument.defaultView, 0, r.screenX, r.screenY, r.clientX, r.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), i.dispatchEvent(t)
                        }
                    }
                }, { key: "_mouseup", value: function() { this._eventStartPosition = 0, document.removeEventListener("mousemove", this._mousemoveHandler), document.removeEventListener("mouseup", this._mouseupHandler), document.removeEventListener("touchmove", this._touchmoveHandler), document.removeEventListener("touchup", this._touchupHandler), this.trigger(new _.SliderEvent(_.SliderEventTypes.CHANGE_COMPLETE, this)) } }, {
                    key: "_mousemove",
                    value: function(e) {
                        var t = m.default.getMouseXFromEvent(e) - this._eventStartPosition,
                            n = this._button.parentNode.getBoundingClientRect(),
                            r = this._eventStartPosition + t - n.left;
                        r = Math.max(0, r), r = Math.min(r, n.width);
                        var i = r / n.width;
                        this.trigger(new _.SliderEvent(_.SliderEventTypes.CHANGE, this, i))
                    }
                }, { key: "_mousedown", value: function(e) { this._eventStartPosition = m.default.getMouseXFromEvent(e), this.trigger(new _.SliderEvent(_.SliderEventTypes.CHANGE_START, this)), document.addEventListener("mousemove", this._mousemoveHandler), document.addEventListener("mouseup", this._mouseupHandler), document.addEventListener("touchmove", this._touchmoveHandler), document.addEventListener("touchup", this._touchupHandler) } }, { key: "_updateHandlers", value: function(e) { this._eventStartPosition = 0, e ? (this._track.removeEventListener("click", this._mousemoveHandler), this._progressBar.removeEventListener("click", this._mousemoveHandler), this._button.removeEventListener("mousedown", this._mousedownHandler), document.removeEventListener("mousemove", this._mousemoveHandler), document.removeEventListener("mouseup", this._mouseupHandler), document.removeEventListener("touchmove", this._touchmoveHandler), document.removeEventListener("touchup", this._touchupHandler), this._track.classList.add("red5pro-media-slider-disabled"), this._progressBar.classList.add("red5pro-media-slider-disabled"), this._button.classList.add("red5pro-media-slider-disabled")) : (this._track.addEventListener("click", this._mousemoveHandler), this._progressBar.addEventListener("click", this._mousemoveHandler), this._button.addEventListener("mousedown", this._mousedownHandler), this._button.addEventListener("touchstart", this._touchdownHandler), this._track.classList.remove("red5pro-media-slider-disabled"), this._progressBar.classList.remove("red5pro-media-slider-disabled"), this._button.classList.remove("red5pro-media-slider-disabled")) } }, {
                    key: "_layout",
                    value: function() {
                        var e = this._progressBar.parentNode.clientWidth * this._value;
                        this._progressBar.style.width = e + "px", this._button.style.left = e - .5 * this._button.clientWidth + "px"
                    }
                }, { key: "createButton", value: function() { var e = m.default.createElement("span"); return e.classList.add("red5pro-media-slider-button"), e } }, { key: "createProgressBar", value: function() { var e = m.default.createElement("span"); return e.classList.add("red5pro-media-slider-progress"), e } }, { key: "createTrack", value: function() { var e = m.default.createElement("span"); return e.classList.add("red5pro-media-slider-track"), e } }, { key: "value", get: function() { return this._value }, set: function(e) { this._value = e, this._layout() } }, { key: "disabled", get: function() { return this._disabled }, set: function(e) { this._disabled = e, this._updateHandlers(e) } }, { key: "view", get: function() { return this._container } }]), t
            }(p.default);
        t.default = S
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.RTMPSubscriber = t.HLSSubscriber = t.RTCSubscriber = t.Red5ProSubscriber = void 0;
        var i = n(94),
            o = r(i),
            s = n(96),
            a = r(s),
            u = n(5),
            c = r(u),
            d = n(0),
            l = r(d),
            f = n(1),
            h = r(f),
            v = n(8),
            p = r(v),
            b = n(7),
            m = r(b),
            _ = n(91),
            y = r(_),
            g = n(89),
            S = r(g),
            E = n(19),
            w = r(E),
            k = n(131),
            C = r(k),
            P = n(132),
            T = r(P),
            O = n(130),
            R = r(O),
            A = n(6),
            M = n(34),
            N = n(2),
            j = "Red5ProSubscriber",
            I = new S.default,
            L = function() { var e = new y.default; return e.set(M.PlaybackTypes.RTC, C.default), e.set(M.PlaybackTypes.RTMP, T.default), e.set(M.PlaybackTypes.HLS, R.default), e }(),
            H = function(e) {
                function t() {
                    (0, l.default)(this, t);
                    var e = (0, p.default)(this, (t.__proto__ || (0, c.default)(t)).call(this));
                    return e._options = void 0, e._order = [M.PlaybackTypes.RTC, M.PlaybackTypes.RTMP, M.PlaybackTypes.HLS], e
                }
                return (0, m.default)(t, e), (0, h.default)(t, [{ key: "_getPlaybackFromOrder", value: function(e, t) { return I.create(e, L, t, "init") } }, { key: "getPlaybackOrder", value: function() { return this._order } }, {
                    key: "setPlaybackOrder",
                    value: function(e) {
                        e = "string" == typeof e ? [e] : e;
                        var t = e.filter(function(e) {
                            var t = void 0;
                            for (t in M.PlaybackTypes)
                                if (M.PlaybackTypes[t].toLowerCase() === e.toLowerCase()) return !0;
                            return !1
                        }).map(function(e) { return e.toLowerCase() });
                        return this._order = [].concat((0, a.default)(new o.default(t))), (0, N.debug)(j, "[orderupdate]: " + this._order), this
                    }
                }, {
                    key: "init",
                    value: function(e) {
                        this._options = e;
                        var t = new A.DeferredPromise;
                        return (0, N.debug)(j, "[init]"), this._getPlaybackFromOrder(this._order, this._options).then(function(e) {
                            (0, N.debug)(j, "[init:success]: subscriber found " + e.getType()), t.resolve(e)
                        }).catch(function(e) {
                            (0, N.warn)(j, "[playerror]: Could not implement a subscriber: " + e), t.reject(e)
                        }), t.promise
                    }
                }, { key: "playbackTypes", get: function() { return M.PlaybackTypes } }]), t
            }(w.default);
        t.Red5ProSubscriber = H, t.RTCSubscriber = C.default, t.HLSSubscriber = R.default, t.RTMPSubscriber = T.default
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(29),
            o = r(i),
            s = n(5),
            a = r(s),
            u = n(0),
            c = r(u),
            d = n(1),
            l = r(d),
            f = n(8),
            h = r(f),
            v = n(7),
            p = r(v),
            b = n(4),
            m = r(b),
            _ = n(42),
            y = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(_),
            g = n(43),
            S = r(g),
            E = n(133),
            w = r(E),
            k = n(45),
            C = r(k),
            P = n(24),
            T = n(13),
            O = n(34),
            R = n(6),
            A = n(2),
            M = n(44),
            N = "HLSSubscriber",
            j = { protocol: "https", port: 443, app: "live", mimeType: "application/x-mpegURL", mediaElementId: "red5pro-subscriber", autoLayoutOrientation: !0, muteOnAutoplayRestriction: !0, subscriptionId: function() { return "subscriber-" + Math.floor(65536 * Math.random()).toString(16) }() },
            I = /^http(|s).*\.m3u8/g,
            L = function(e) {
                var t = e.hlsprotocol ? e.hlsprotocol : e.protocol,
                    n = e.hlsport ? e.hlsport : e.port,
                    r = e.context ? [e.app, e.context].join("/") : e.app;
                return t + "://" + e.host + ":" + n + "/" + r + "/" + e.streamName + ".m3u8"
            },
            H = function(e) {
                function t() {
                    (0, c.default)(this, t);
                    var e = (0, h.default)(this, (t.__proto__ || (0, a.default)(t)).call(this));
                    return e._options = void 0, e._view = void 0, e._sourceHandler = void 0, e._socketHelper = void 0, e._viewResolver = new R.DeferredPromise, e._subscriptionResolver = new R.DeferredPromise, e._boundBubbleSubscriberEvents = e.bubbleSubscriberEvents.bind(e), e
                }
                return (0, p.default)(t, e), (0, l.default)(t, [{ key: "_getViewResolverPromise", value: function() { return this._viewResolver.promise } }, { key: "_getSubscriptionResolverPromise", value: function() { return this._subscriptionResolver.promise } }, { key: "bubbleSubscriberEvents", value: function(e) { e.type === T.SubscriberEventTypes.SUBSCRIBE_START && this._subscriptionResolver.resolve(this), this.trigger(new T.SubscriberEvent(e.type, this, e.data)) } }, {
                    key: "_glomSourceHandlerAPI",
                    value: function(e) {
                        var t = this;
                        this.play = e.play.bind(e), this.pause = e.pause.bind(e), this.resume = e.resume.bind(e), this.stop = e.stop.bind(e), this.mute = e.mute.bind(e), this.unmute = e.unmute.bind(e), this.setVolume = e.setVolume.bind(e), this.seekTo = e.seekTo.bind(e), this.toggleFullScreen = e.toggleFullScreen.bind(e), e.on("*", function(e) { t.trigger(new T.SubscriberEvent(e.type, t, e.data)) })
                    }
                }, { key: "_setViewIfNotExist", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0; if (void 0 === e && void 0 !== t) { new C.default(t).attachSubscriber(this) } } }, {
                    key: "_initHandler",
                    value: function(e) {
                        var t = this,
                            n = this._options,
                            r = n.streamName,
                            i = n.mimeType,
                            o = r.match(I) ? r : L(this._options);
                        this._sourceHandler.on("*", this._boundBubbleSubscriberEvents), this._sourceHandler.addSource(o, i, e).then(function() { t.trigger(new T.SubscriberEvent(T.SubscriberEventTypes.CONNECT_SUCCESS)), t._trackStreamingModeState(t._sourceHandler) }).catch(function(e) {
                            (0, A.error)(N, "Could not establish an HLS Subscriber: " + e), t.trigger(new T.SubscriberEvent(T.SubscriberEventTypes.CONNECT_FAILURE))
                        })
                    }
                }, {
                    key: "_trackStreamingModeState",
                    value: function(e) {
                        var t = this;
                        e.on(T.SubscriberEventTypes.STREAMING_MODE_CHANGE, function(e) {
                            var n = e.data,
                                r = n.streamingMode,
                                i = n.previousStreamingMode;
                            if ("Empty" !== r && "Empty" === i) {
                                t._sourceHandler.disconnect();
                                var o = t._options,
                                    s = o.streamName,
                                    a = o.mimeType,
                                    u = s.match(I) ? s : L(t._options);
                                t._sourceHandler.addSource(u, a, t._options).then(function() { return t.subscribe() }).catch(function(e) { return e(N, e) })
                            }
                        })
                    }
                }, {
                    key: "init",
                    value: function(e) {
                        var t = this,
                            n = new R.DeferredPromise;
                        if (m.default.supportsHLS())
                            if (e.connectionParams && !y.isSupported())(0, A.warn)(N, "Could not resolve HLSSubscriber instance with connection params. WebSocket support is required."), n.reject(N, "Could not resolve HLSSubscriber instance with connection params. WebSocket support is required.");
                            else {
                                this._options = (0, o.default)({}, j, e);
                                var r = new R.DeferredPromise;
                                if (this._options.connectionParams) try {
                                    this._socketHelper = new S.default(this, "HLSSubscriptionSocket");
                                    var i = (0, M.hlsSocketEndpointFromOptions)(this._options, { id: this._options.subscriptionId });
                                    this._socketHelper.setUp(i, r)
                                } catch (e) {
                                    (0, A.error)(N, e.message), n.reject(N, "Could not set up WebSocket for authentication with connectionParams: " + e.message)
                                } else r.resolve();
                                r.promise.then(function() { t._socketHelper && (t._socketHelper.tearDown(), t._socketHelper = void 0), t._setViewIfNotExist(t._view, t._options.mediaElementId), t._getViewResolverPromise().then(function(e) { t._sourceHandler = new w.default(e.view, t.getType()), t._glomSourceHandlerAPI(t._sourceHandler), t._options && t._initHandler(t._options) }), n.resolve(t) }).catch(function(e) { n.reject(e), t.trigger(new T.SubscriberEvent(T.SubscriberEventTypes.CONNECT_FAILURE, t, e)) })
                            }
                        else(0, A.warn)(N, "Could not resolve HLSSubscriber instance."), n.reject("Could not resolve HLSSubscriber instance.");
                        return n.promise
                    }
                }, { key: "setView", value: function(e) { return this._view = e, this._viewResolver.resolve(e), this } }, { key: "subscribe", value: function() { return this._getSubscriptionResolverPromise() } }, {
                    key: "unsubscribe",
                    value: function() {
                        (0, A.debug)(N, "[unscubscribe]");
                        var e = new R.DeferredPromise;
                        this._socketHelper && this._socketHelper.tearDown();
                        try { this._sourceHandler.stop(), this._sourceHandler.disconnect(), e.resolve() } catch (t) { e.reject(t.message) }
                        return e.promise
                    }
                }, { key: "getConnection", value: function() { return this._sourceHandler } }, { key: "getControls", value: function() { return this._sourceHandler ? this._sourceHandler.getControls() : void 0 } }, { key: "getOptions", value: function() { return this._options } }, { key: "getPlayer", value: function() { return this._view.view } }, { key: "getType", value: function() { return O.PlaybackTypes.HLS.toUpperCase() } }]), t
            }(P.PlaybackController);
        t.default = H
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        }

        function i(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o = n(12),
            s = i(o),
            a = n(29),
            u = i(a),
            c = n(5),
            d = i(c),
            l = n(0),
            f = i(l),
            h = n(1),
            v = i(h),
            p = n(8),
            b = i(p),
            m = n(7),
            _ = i(m),
            y = n(4),
            g = i(y),
            S = n(81),
            E = n(41),
            w = r(E),
            k = n(42),
            C = r(k),
            P = n(134),
            T = i(P),
            O = n(117),
            R = i(O),
            A = n(119),
            M = i(A),
            N = n(45),
            j = i(N),
            I = n(24),
            L = n(28),
            H = n(44),
            F = n(13),
            D = n(34),
            x = n(57),
            U = n(6),
            B = n(2),
            V = /(.*) starting/i,
            W = "RTCSubscriber",
            G = function() { return "subscriber-" + Math.floor(65536 * Math.random()).toString(16) },
            z = { protocol: "wss", port: 443, app: "live", autoLayoutOrientation: !0, mediaElementId: "red5pro-subscriber", rtcConfiguration: { iceServers: [{ urls: "stun:stun2.l.google.com:19302" }], iceCandidatePoolSize: 2, bundlePolicy: "max-bundle" }, iceServers: void 0, iceTransport: x.IceTransportTypes.UDP, muteOnAutoplayRestriction: !0, maintainConnectionOnSubscribeErrors: !1 },
            Y = function(e) {
                function t() {
                    (0, f.default)(this, t);
                    var e = (0, b.default)(this, (t.__proto__ || (0, d.default)(t)).call(this));
                    return e._view = void 0, e._options = void 0, e._peerHelper = void 0, e._socketHelper = void 0, e._connectionClosed = !0, e._sourceHandler = void 0, e._mediaStream = void 0, e._viewResolver = new U.DeferredPromise, e._availabilityResolver = new U.DeferredPromise, e._subscriptionResolver = new U.DeferredPromise, e._orientation = 0, e._streamingMode = "Video/Audio", e
                }
                return (0, _.default)(t, e), (0, v.default)(t, [{ key: "_getViewResolverPromise", value: function() { return this._viewResolver.promise } }, { key: "_getAvailabilityResolverPromise", value: function() { return this._availabilityResolver.promise } }, { key: "_getSubscriptionResolverPromise", value: function() { return this._subscriptionResolver.promise } }, {
                    key: "_glomSourceHandlerAPI",
                    value: function(e) {
                        var t = this;
                        this.play = e.play.bind(e), this.pause = e.pause.bind(e), this.resume = e.resume.bind(e), this.stop = e.stop.bind(e), this.mute = e.mute.bind(e), this.unmute = e.unmute.bind(e), this.setVolume = e.setVolume.bind(e), this.seekTo = e.seekTo.bind(e), this.toggleFullScreen = e.toggleFullScreen.bind(e), e.on("*", function(e) { t.trigger(new F.SubscriberEvent(e.type, t, e.data)) })
                    }
                }, { key: "_setViewIfNotExist", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0; if (void 0 === e && void 0 !== t) { new j.default(t).attachSubscriber(this) } } }, { key: "_initHandler", value: function(e, t) { e && t && (t.on("*", this._boundBubbleSubscriberEvents), t.addSource(e)) } }, {
                    key: "_requestAvailability",
                    value: function(e) {
                        (0, B.debug)(W, "[requestavailability]"), this._socketHelper.post({ isAvailable: e })
                    }
                }, {
                    key: "_requestOffer",
                    value: function(e, t, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
                            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0;
                        (0, B.debug)(W, "[requestoffer]");
                        var o = { requestOffer: e, requestId: t, transport: n };
                        void 0 !== r && r !== D.PlaybackVideoEncoder.NONE ? o.videoEncoding = r : g.default.getIsEdge(), void 0 !== i && i !== D.PlaybackAudioEncoder.NONE && (o.audioEncoding = i), this.trigger(new F.SubscriberEvent(F.RTCSubscriberEventTypes.OFFER_START, this)), this._socketHelper.post(o)
                    }
                }, {
                    key: "_requestAnswer",
                    value: function(e) {
                        var t = this;
                        (0, B.debug)(W, "[requestanswer]"), this._peerHelper.createAnswer(e).then(function(e) {
                            (0, B.debug)(W, "[onanswercreated]"), (0, B.debug)(W, "[> sendanswer]"), t._sendAnswer(t._options.streamName, t._options.subscriptionId, e)
                        }).catch(function(e) { t.onSDPError(e) })
                    }
                }, {
                    key: "_sendAnswer",
                    value: function(e, t, n) {
                        (0, B.debug)(W, "[sendanswer]: streamname(" + e + "), subscriptionid(" + t + ")"), this.trigger(new F.SubscriberEvent(F.RTCSubscriberEventTypes.ANSWER_START, this, n)), this._socketHelper.post({ handleAnswer: e, requestId: t, data: { sdp: n } })
                    }
                }, {
                    key: "_sendCandidate",
                    value: function(e) {
                        (0, B.debug)(W, "[sendcandidate]"), this.trigger(new F.SubscriberEvent(F.RTCSubscriberEventTypes.CANDIDATE_START, this, e)), this._socketHelper.post({ handleCandidate: this._options.streamName, requestId: this._options.subscriptionId, data: { candidate: e } })
                    }
                }, {
                    key: "_connect",
                    value: function(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                        (0, B.debug)(W, "[connect]"), n && e && ((0, B.warn)("The iceServers configuration property is considered deprecated. Please use the rtcConfiguration configuration property upon which you can assign iceServers. Reference: https://www.red5pro.com/docs/streaming/migrationguide.html"), e.iceServers = n), this._options.iceServers = e ? e.iceServers : n;
                        var r = void 0;
                        return r = void 0 !== e ? this._peerHelper.setUpWithPeerConfiguration(e, void 0) : this._peerHelper.setUp(this._options.iceServers, void 0, this._options.rtcpMuxPolicy), r.then(function(e) { t.trigger(new F.SubscriberEvent(F.RTCSubscriberEventTypes.PEER_CONNECTION_AVAILABLE, t, e)), t._requestOffer(t._options.streamName, t._options.subscriptionId, t._options.iceTransport, t._options.videoEncoding, t._options.audioEncoding) }).catch(function() {
                            (0, B.warn)(W, "Could not establish RTCPeerConnection."), t.trigger(new F.SubscriberEvent(F.SubscriberEventTypes.CONNECT_FAILURE, t))
                        }), this
                    }
                }, { key: "_disconnect", value: function() { this._socketHelper && ((0, B.debug)(W, "[disconnect:socket]"), this._socketHelper.tearDown()), this._peerHelper && ((0, B.debug)(W, "[disconnect:peer]"), this._peerHelper.tearDown()), this._sourceHandler && ((0, B.debug)(W, "[disconnect:source]"), this._sourceHandler.disconnect()), this._connectionClosed = !0 } }, { key: "_playIfAutoplaySet", value: function(e, t) { e && t && (e.autoplay = g.default.hasAttributeDefined(t.view, "autoplay"), e.autoplay && this._sourceHandler.attemptAutoplay(e.muteOnAutoplayRestriction)) } }, {
                    key: "_sendSubscribe",
                    value: function() {
                        (0, B.debug)(W, "[sendsubscribe]"), this._socketHelper.post({ subscribe: this._options.streamName, requestId: this._options.subscriptionId })
                    }
                }, {
                    key: "init",
                    value: function(e) {
                        var t = this,
                            n = new U.DeferredPromise;
                        if (w.isSupported() && C.isSupported()) {
                            this._disconnect(), this._options = (0, u.default)({}, z, e), this._options.subscriptionId = this._options.subscriptionId || G(), this._peerHelper = new M.default(this), this._socketHelper = new R.default(this);
                            var r = new U.DeferredPromise,
                                i = (0, H.rtcSocketEndpointFromOptions)(this._options, { id: this._options.subscriptionId });
                            r.promise.then(function() { n.resolve(t), t._connectionClosed = !1, t.trigger(new F.SubscriberEvent(F.SubscriberEventTypes.CONNECT_SUCCESS, t)) }).catch(function(e) { n.reject(e), t.trigger(new F.SubscriberEvent(F.SubscriberEventTypes.CONNECT_FAILURE, t, e)) }), this._socketHelper.setUp(i, r)
                        } else n.reject("Cannot create WebRTC playback instance. Your environment does not support WebRTC and/or WebSockets.");
                        return n.promise
                    }
                }, { key: "setView", value: function(e) { return this._view = e, this._viewResolver.resolve(this._view), this } }, { key: "subscribe", value: function() { var e = this; return this._getViewResolverPromise().then(function(t) { e._sourceHandler = new T.default(t.view, e.getType()), e._glomSourceHandlerAPI(e._sourceHandler), e._initHandler(e._options, e._sourceHandler) }).catch(function() {}), this._getAvailabilityResolverPromise().then(function() { e._connect(e._options.rtcConfiguration, e._options.iceServers) }).catch(function() {}), this._setViewIfNotExist(this._view, this._options.mediaElementId), this._requestAvailability(this._options.streamName, this._options.streamType), this._getSubscriptionResolverPromise() } }, {
                    key: "unsubscribe",
                    value: function() {
                        (0, B.debug)(W, "[unsubscribe]");
                        var e = new U.DeferredPromise;
                        return this.stop(), this._disconnect(), this._mediaStream = void 0, e.resolve(this), this.trigger(new F.SubscriberEvent(F.SubscriberEventTypes.SUBSCRIBE_STOP, this)), e.promise
                    }
                }, {
                    key: "onStreamAvailable",
                    value: function(e) {
                        (0, B.debug)(W, "[onstreamavailable]: " + (0, s.default)(e, null, 2)), this._availabilityResolver.resolve(this)
                    }
                }, {
                    key: "onStreamUnavailable",
                    value: function(e) {
                        (0, B.debug)(W, "Stream " + this._options.streamName + " does not exist."), (0, B.debug)(W, "[onstreamunavailable]: " + (0, s.default)(e, null, 2)), this.trigger(new F.SubscriberEvent(F.SubscriberEventTypes.SUBSCRIBE_INVALID_NAME, this)), this._availabilityResolver.reject("Stream " + this._options.streamName + " does not exist."), this._subscriptionResolver.reject("Stream " + this._options.streamName + " does not exist."), this._options.maintainConnectionOnSubscribeErrors ? (this._availabilityResolver = new U.DeferredPromise, this._subscriptionResolver = new U.DeferredPromise) : this._disconnect()
                    }
                }, {
                    key: "onSDPSuccess",
                    value: function(e) {
                        (0, B.debug)(W, "[onsdpsuccess]: " + (0, s.default)(e, null, 2))
                    }
                }, {
                    key: "onSDPOffer",
                    value: function(e) {
                        (0, B.debug)(W, "[onsdpoffer]: " + (0, s.default)(e, null, 2));
                        var t = new w.RTCSessionDescription(e.sdp);
                        this.trigger(new F.SubscriberEvent(F.RTCSubscriberEventTypes.OFFER_END, this)), this._requestAnswer(t)
                    }
                }, { key: "onSDPError", value: function(e) { this.trigger(new F.SubscriberEvent(F.SubscriberEventTypes.SUBSCRIBE_FAIL, this, e)), this._subscriptionResolver.reject("Invalid SDP."), (0, B.error)(W, "[onsdperror]"), (0, B.error)(W, e) } }, {
                    key: "onAnswerMediaStream",
                    value: function() {
                        arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.trigger(new F.SubscriberEvent(F.RTCSubscriberEventTypes.ANSWER_END, this))
                    }
                }, {
                    key: "onIceCandidate",
                    value: function(e) {
                        (0, B.debug)(W, "[onicecandidate]"), this.trigger(new F.SubscriberEvent(F.RTCSubscriberEventTypes.CANDIDATE_END, this)), this._sendCandidate(e)
                    }
                }, {
                    key: "onIceCandidateTrickleEnd",
                    value: function(e) {
                        var t = this;
                        (0, B.debug)(W, "[onicetrickleend]"), this._getViewResolverPromise().then(function(n) { n.attachStream(e), t._mediaStream = e, t.trigger(new F.SubscriberEvent(F.RTCSubscriberEventTypes.ON_ADD_STREAM, t, t._mediaStream)) })
                    }
                }, {
                    key: "onAddIceCandidate",
                    value: function(e) {
                        (0, B.debug)(W, "[onaddicecandidate]"), this._peerHelper.addIceCandidate(e)
                    }
                }, {
                    key: "onEmptyCandidate",
                    value: function() {
                        (0, B.debug)(W, "[icecandidatetrickle:empty]"), this.trigger(new F.SubscriberEvent(F.RTCSubscriberEventTypes.PEER_CANDIDATE_END))
                    }
                }, {
                    key: "onPeerGatheringComplete",
                    value: function() {
                        (0, B.debug)(W, "[icecandidategathering:end]"), this._socketHelper && this._socketHelper.postEndOfCandidates(this._options.streamName)
                    }
                }, {
                    key: "onSocketIceCandidateEnd",
                    value: function() {
                        (0, B.debug)(W, "[onsocketicecandidateend]"), this.trigger(new F.SubscriberEvent(F.RTCSubscriberEventTypes.ICE_TRICKLE_COMPLETE, this)), this._sendSubscribe()
                    }
                }, {
                    key: "onSocketMessageError",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                        (0, B.error)(W, "Error in stream subscription: " + e + ".\n[Optional detail]: " + t), this._subscriptionResolver.reject("Error in stream subscription: " + e + "."), this.trigger(new F.SubscriberEvent(F.SubscriberEventTypes.SUBSCRIBE_FAIL, this, e))
                    }
                }, {
                    key: "onSocketClose",
                    value: function(e) {
                        (0, B.debug)(W, "[onsocketclose]"), this._peerHelper && this._peerHelper.tearDown(), this.onConnectionClosed(e)
                    }
                }, {
                    key: "onPeerConnectionFail",
                    value: function() {
                        (0, B.debug)(W, "[onpeerconnectionfail]"), this.trigger(new F.SubscriberEvent(F.SubscriberEventTypes.SUBSCRIBE_FAIL, this, "fail")), this._subscriptionResolver.reject("Peer Connection Failed.")
                    }
                }, {
                    key: "onPeerConnectionClose",
                    value: function(e) {
                        (0, B.debug)(W, "[onpeerconnectionclose]"), this._socketHelper && this._socketHelper.tearDown(), this.onSocketClose(e)
                    }
                }, {
                    key: "onPeerConnectionOpen",
                    value: function() {
                        (0, B.debug)(W, "[onpeerconnectionopen]"), this.trigger(new F.SubscriberEvent(F.RTCSubscriberEventTypes.PEER_CONNECTION_OPEN))
                    }
                }, {
                    key: "onUnpublish",
                    value: function() {
                        (0, B.debug)(W, "[onunpublish]"), this._sourceHandler && this._sourceHandler.unpublish(), this.trigger(new F.SubscriberEvent(F.SubscriberEventTypes.PLAY_UNPUBLISH, this))
                    }
                }, {
                    key: "onConnectionClosed",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                        this._connectionClosed || ((0, B.debug)(W, "[onconnectionclosed]"), this._disconnect(), this.trigger(new F.SubscriberEvent(F.SubscriberEventTypes.CONNECTION_CLOSED, this, e)))
                    }
                }, { key: "onSendReceived", value: function(e, t) { "onMetaData" === e ? this.onMetaData(t) : this.trigger(new F.SubscriberEvent(F.SubscriberEventTypes.SUBSCRIBE_SEND_INVOKE, this, { methodName: e, data: t })) } }, {
                    key: "onSubscriberStatus",
                    value: function(e) {
                        (0, B.debug)(W, "[subscriberstatus] - " + (0, s.default)(e, null, 2));
                        var t = V.exec(e.message);
                        t && t[1] === this._options.streamName && (this._subscriptionResolver.resolve(this), this.trigger(new F.SubscriberEvent(F.SubscriberEventTypes.SUBSCRIBE_START, this)), this._playIfAutoplaySet(this._options, this._view))
                    }
                }, {
                    key: "onMetaData",
                    value: function(e) {
                        var t = e.orientation,
                            n = e.streamingMode,
                            r = this._streamingMode;
                        void 0 !== t && t !== this._orientation && (this._orientation = t, this._options.autoLayoutOrientation && ((0, S.applyOrientation)(this._view.view, parseInt(t, 10), (0, L.metadataResolutionToObject)(e.resolution)), this._sourceHandler && this._sourceHandler.handleOrientationChange(parseInt(t, 10))), this.trigger(new F.SubscriberEvent(F.SubscriberEventTypes.ORIENTATION_CHANGE, this, { orientation: parseInt(t, 10), viewElement: this._view.view }))), void 0 !== n && n !== r && (this._streamingMode = n, this.trigger(new F.SubscriberEvent(F.SubscriberEventTypes.STREAMING_MODE_CHANGE, this, { streamingMode: n, previousStreamingMode: r, viewElement: this._view.view }))), this.trigger(new F.SubscriberEvent(F.SubscriberEventTypes.SUBSCRIBE_METADATA, this, e))
                    }
                }, { key: "callServer", value: function(e, t) { return this._socketHelper.postAsync({ callAdapter: { method: e, arguments: t } }) } }, { key: "enableStandby", value: function() { this._socketHelper.post({ standby: !0 }) } }, { key: "disableStandby", value: function() { this._socketHelper.post({ standby: !1 }) } }, { key: "getConnection", value: function() { return this._socketHelper } }, { key: "getPeerConnection", value: function() { return this._peerHelper ? this._peerHelper.connection : void 0 } }, { key: "getMediaStream", value: function() { return this._mediaStream } }, { key: "getControls", value: function() { return this._sourceHandler ? this._sourceHandler.getControls() : void 0 } }, { key: "getPlayer", value: function() { return this._view.view } }, { key: "getOptions", value: function() { return this._options } }, { key: "getType", value: function() { return D.PlaybackTypes.RTC.toUpperCase() } }]), t
            }(I.PlaybackController);
        t.default = Y
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(60),
            o = r(i),
            s = n(29),
            a = r(s),
            u = n(5),
            c = r(u),
            d = n(0),
            l = r(d),
            f = n(1),
            h = r(f),
            v = n(8),
            p = r(v),
            b = n(7),
            m = r(b),
            _ = n(4),
            y = r(_),
            g = n(135),
            S = r(g),
            E = n(45),
            w = r(E),
            k = n(24),
            C = n(13),
            P = n(34),
            T = n(35),
            O = n(6),
            R = n(2),
            A = "RTMPSubcriber",
            M = { protocol: "rtmp", port: 1935, width: 320, height: 240, embedWidth: "100%", embedHeight: "100%", minFlashVersion: "10.0.0", swf: "lib/red5pro/red5pro-subscriber.swf", swfobjectURL: "lib/swfobject/swfobject.js", productInstallURL: "lib/swfobject/playerProductInstall.swf", mediaElementId: "red5pro-subscriber", useAdaptiveBitrateController: !1, abrVariants: void 0, abrVariantUpgradeSettings: { minimumDowngradePlaybackSpan: 1e4, upgrade: [{ level: 1, retryTimeout: 0 }, { level: 2, retryTimeout: 1e4 }, { level: 3, retryTimeout: 2e4 }] } },
            N = function(e) {
                function t() {
                    (0, l.default)(this, t);
                    var e = (0, p.default)(this, (t.__proto__ || (0, c.default)(t)).call(this));
                    return e._options = void 0, e._view = void 0, e._sourceHandler = void 0, e._elementId = void 0, e._embedPromise = void 0, e._getEmbedPromise().then(function() { e.onEmbedComplete() }).catch(function(t) { return e.onEmbedFailure(t) }), e._viewResolver = new O.DeferredPromise, e._subscriptionResolver = new O.DeferredPromise, e._orientation = 0, e._streamingMode = "Video/Audio", e
                }
                return (0, m.default)(t, e), (0, h.default)(t, [{ key: "_getViewResolverPromise", value: function() { return this._viewResolver.promise } }, { key: "_getSubscriptionResolverPromise", value: function() { return this._subscriptionResolver.promise } }, { key: "_getEmbedPromise", value: function() { return this._embedPromise = O.Future.createIfNotExist(this._embedPromise), this._embedPromise.promise } }, {
                    key: "_glomSourceHandlerAPI",
                    value: function(e) {
                        var t = this;
                        this.pause = e.pause.bind(e), this.resume = e.resume.bind(e), this.stop = e.stop.bind(e), this.mute = e.mute.bind(e), this.unmute = e.unmute.bind(e), this.setVolume = e.setVolume.bind(e), this.seekTo = e.seekTo.bind(e), this.toggleFullScreen = e.toggleFullScreen.bind(e), this.setABRLevel = e.setABRLevel.bind(e), this.setABRVariants = e.setABRVariants.bind(e), this.stopABRController = e.stopABRController.bind(e), this.startABRController = e.startABRController.bind(e), this.setABRVariantUpgradeSettings = e.setABRVariantUpgradeSettings.bind(e), e.on("*", function(e) { t.trigger(new C.SubscriberEvent(e.type, t, e.data)) })
                    }
                }, { key: "_setViewIfNotExist", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0; if (void 0 === e && void 0 !== t) { new w.default(t).attachSubscriber(this) } } }, {
                    key: "_establishExtIntHandlers",
                    value: function(e) {
                        var t = this;
                        (0, R.debug)(A, "Subscriber ID provided to client: (" + e + ").");
                        var n = function(t) { return ["subscriber", t, e.split("-").join("_")].join("_") };
                        window[n("r5proConnectClosed")] = function() { return t.trigger(new C.SubscriberEvent(C.SubscriberEventTypes.CONNECTION_CLOSED, t)) }, window[n("r5proConnectSuccess")] = function() { return t.trigger(new C.SubscriberEvent(C.SubscriberEventTypes.CONNECT_SUCCESS, t)) }, window[n("r5proConnectFailure")] = function() { t.trigger(new C.SubscriberEvent(C.SubscriberEventTypes.CONNECT_FAILURE, t)) }, window[n("r5proSubscribeStop")] = function() { return t.trigger(new C.SubscriberEvent(C.SubscriberEventTypes.SUBSCRIBE_STOP, t)) }, window[n("r5proSubscribeMetadata")] = function(e) {
                            var n = JSON.parse(e),
                                r = n.orientation,
                                i = n.streamingMode,
                                o = parseInt(r, 10),
                                s = t._streamingMode;
                            t._orientation !== o && (t._orientation = o, t.trigger(new C.SubscriberEvent(C.SubscriberEventTypes.ORIENTATION_CHANGE, t, { orientation: o }))), s !== i && (t._streamingMode = i, t.trigger(new C.SubscriberEvent(C.SubscriberEventTypes.STREAMING_MODE_CHANGE, t, { streamingMode: i, previousStreamingMode: s }))), t.trigger(new C.SubscriberEvent(C.SubscriberEventTypes.SUBSCRIBE_METADATA, t, JSON.parse(e)))
                        }, window[n("r5proSubscribeUnpublish")] = function() { t.onUnpublish() }, window[n("r5proSubscribeSendInvoke")] = function(e) { t.trigger(new C.SubscriberEvent(C.SubscriberEventTypes.SUBSCRIBE_SEND_INVOKE, t, "string" == typeof e ? JSON.parse(e) : e)) }, window[n("r5proSubscribePlayRequest")] = function() { t.play() }, window[n("r5proSubscribeStart")] = function() { t._subscriptionResolver.resolve(t), t.trigger(new C.SubscriberEvent(C.SubscriberEventTypes.SUBSCRIBE_START, t)) }, window[n("r5proSubscribeInvalidName")] = function() { t._subscriptionResolver.reject("NetStream.Play.StreamNotFound", t), t.trigger(new C.SubscriberEvent(C.SubscriberEventTypes.SUBSCRIBE_INVALID_NAME, t)) }, window[n("r5proSubscribeFail")] = function() { t._subscriptionResolver.reject("NetStream.Failed", t), t.trigger(new C.SubscriberEvent(C.SubscriberEventTypes.SUBSCRIBE_FAIL, t)) }, window[n("r5proSubscribeVolumeChange")] = function(e) { t.trigger(new C.SubscriberEvent(C.SubscriberEventTypes.VOLUME_CHANGE, t, { volume: JSON.parse(e).volume })) }, window[n("r5proSubscribePlaybackStalled")] = function() {
                            (0, R.debug)(A, "playback has stalled...")
                        }, window[n("r5proSubscribePlaybackTimeChange")] = function(e) {
                            var n = JSON.parse(e);
                            t.trigger(new C.SubscriberEvent(C.SubscriberEventTypes.PLAYBACK_TIME_UPDATE, t, { time: n.value, duration: n.duration }))
                        }, window[n("r5proSubscribePlaybackStateChange")] = function(e) {
                            var n = JSON.parse(e).code;
                            t.trigger(new C.SubscriberEvent(C.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, t, { code: n, state: T.PlaybackStateReadable[n] }))
                        }, window[n("r5proSubscribeABRLevelChange")] = function(e) {
                            var n = JSON.parse(e),
                                r = n.level,
                                i = n.stream,
                                o = JSON.parse(decodeURIComponent(i));
                            t.trigger(new C.SubscriberEvent(C.RTMPSubscriberEventTypes.ABR_LEVEL_CHANGE, t, { level: r, stream: o }))
                        }
                    }
                }, {
                    key: "init",
                    value: function(e) {
                        var t = this,
                            n = new O.DeferredPromise,
                            r = e.minFlashVersion || M.minFlashVersion;
                        if (y.default.supportsFlashVersion(r)) {
                            this._options = (0, a.default)({}, M, e);
                            var i = function() {
                                t._getViewResolverPromise().then(function(e) {
                                    if (t._sourceHandler = new S.default(t, e.view, t.getType()), t._glomSourceHandlerAPI(t._sourceHandler), t._options) {
                                        var n = t._embedPromise;
                                        t._sourceHandler.addSource(t._elementId, t._options).then(function(e) { t._establishExtIntHandlers(e), n.resolve(t) }).catch(function(e) { return n.reject(e) })
                                    }
                                })
                            };
                            try {
                                y.default.injectScript(this._options.swfobjectURL).then(function() { var e = t._embedPromise; return (0, R.debug)(A, "SWFObject embedded."), t._sourceHandler ? (t._sourceHandler.addSource(t._elementId, t._options).then(function(n) { t._establishExtIntHandlers(n), e.resolve(t) }).catch(function(t) { e.reject(t) }), t._getEmbedPromise()) : (i(), !0) }).then(function() { t._setViewIfNotExist(t._view, t._options.mediaElementId), n.resolve(t) }).catch(function(e) {
                                    (0, R.error)(A, "Could not embed Flash-based RTMP Player. Reason: " + e), t._sourceHandler && t._sourceHandler.disconnect(), n.reject(e), t.trigger(new C.SubscriberEvent(C.RTMPSubscriberEventTypes.EMBED_FAILURE, t))
                                })
                            } catch (e) { n.reject("Could not inject Flash-based Player into the page. Reason: " + e.message), this.trigger(new C.SubscriberEvent(C.RTMPSubscriberEventTypes.EMBED_FAILURE, this)) }
                        } else(0, R.warn)(A, "Could not resolve RTMPSubscriber instance. Requires minimum Flash Player install of " + r + "."), n.reject("Could not resolve RTMPSubscriber instance. Requires minimum Flash Player install of " + r + ".");
                        return n.promise
                    }
                }, { key: "setView", value: function(e, t) { return this._view = e, this._elementId = t, this._viewResolver.resolve(this._view), this } }, { key: "subscribe", value: function() { return this._getSubscriptionResolverPromise() } }, {
                    key: "unsubscribe",
                    value: function() {
                        var e = this;
                        (0, R.debug)(A, "[unsubscribe]");
                        var t = function(t, n) { try { e._sourceHandler.disconnect(), t() } catch (e) { n(e.message) } };
                        return new o.default(t)
                    }
                }, {
                    key: "play",
                    value: function() {
                        var e = this;
                        (0, R.debug)(A, "[play]"), this._getEmbedPromise().then(function() { e._sourceHandler.play() })
                    }
                }, {
                    key: "onEmbedComplete",
                    value: function() {
                        (0, R.debug)(A, "[embed:complete]"), this.trigger(new C.SubscriberEvent(C.RTMPSubscriberEventTypes.EMBED_SUCCESS, this))
                    }
                }, {
                    key: "onEmbedFailure",
                    value: function(e) {
                        (0, R.debug)(A, "[embed:failure] - " + e), this.trigger(new C.SubscriberEvent(C.RTMPSubscriberEventTypes.EMBED_FAILURE, this))
                    }
                }, {
                    key: "onUnpublish",
                    value: function() {
                        (0, R.debug)(A, "[onunpublish]"), this._sourceHandler && this._sourceHandler.unpublish(), this.trigger(new C.SubscriberEvent(C.SubscriberEventTypes.PLAY_UNPUBLISH, this)), this._sourceHandler && this._sourceHandler.disconnect()
                    }
                }, { key: "getConnection", value: function() { return this._sourceHandler } }, { key: "getControls", value: function() { return this._sourceHandler ? this._sourceHandler.getControls() : void 0 } }, { key: "getOptions", value: function() { return this._options } }, { key: "getPlayer", value: function() { return this._sourceHandler ? this._sourceHandler.getEmbeddedView() : void 0 } }, { key: "getType", value: function() { return P.PlaybackTypes.RTMP.toUpperCase() } }]), t
            }(k.PlaybackController);
        t.default = N
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(12),
            o = r(i),
            s = n(92),
            a = r(s),
            u = n(5),
            c = r(u),
            d = n(0),
            l = r(d),
            f = n(1),
            h = r(f),
            v = n(8),
            p = r(v),
            b = n(7),
            m = r(b),
            _ = n(4),
            y = r(_),
            g = n(81),
            S = n(28),
            E = n(24),
            w = n(35),
            k = n(13),
            C = n(6),
            P = n(2),
            T = "HLSSourceHandler",
            O = function(e) {
                function t(e, n) {
                    (0, l.default)(this, t);
                    var r = (0, p.default)(this, (t.__proto__ || (0, c.default)(t)).call(this));
                    return r.media = e, r.clone = r.media.cloneNode(!0), r.parent = r.media.parentNode, r.holder = r._determineHolder(e), r.playerType = n, r._mediaSource = void 0, r._isVOD = !1, r._controls = void 0, r._orientation = 0, r._streamingMode = "Video/Audio", r._autoLayoutOrientation = !0, r._playbackNotificationCenter = r.media, r._handleOrientationChange = r._handleOrientationChange.bind(r), r._onOrientationMetadata = r._onOrientationMetadata.bind(r), r._onStreamingModeMetadata = r._onStreamingModeMetadata.bind(r), y.default.onFullScreenStateChange(r._handleFullScreenChange.bind(r)), r
                }
                return (0, m.default)(t, e), (0, h.default)(t, [{
                    key: "_determineHolder",
                    value: function(e) {
                        if (e.parentNode.classList.contains("red5pro-media-container")) return e.parentNode;
                        var t = e.parentNode,
                            n = y.default.createElement("div");
                        return n.classList.add("red5pro-media-container"), t.insertBefore(n, e), t.removeChild(e), n.appendChild(e), n
                    }
                }, {
                    key: "_cleanUp",
                    value: function() {
                        var e = this.media,
                            t = this._mediaSource,
                            n = e.parentNode,
                            r = this.holder;
                        if (t && e.removeChild(t), n) n.removeChild(e), n !== this.parent && (n.parentNode.removeChild(n), r = this.parent);
                        else try { e.remove() } catch (e) {
                            (0, P.warn)(T, "Issue in DOM cleanup of HLS video object: " + e.message)
                        }
                        this.media = this.clone.cloneNode(!0), r.appendChild(this.media), this._controls && this._controls.detach(), this.media.setAttribute("autoplay", !0), this.clone = this.media.cloneNode(!0), this.parent = this.media.parentNode, this.holder = this._determineHolder(this.media), this._orientation = 0, this.isVOD = !1
                    }
                }, {
                    key: "_addPlaybackHandlers",
                    value: function(e) {
                        var t = this,
                            n = this.getControls(),
                            r = void 0 !== n;
                        e.oncanplay = function() { n && n.enable(!0), t.trigger(new k.SubscriberEvent(k.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, void 0, { code: w.PlaybackState.AVAILABLE, state: w.PlaybackStateReadable[w.PlaybackState.AVAILABLE] })), t.trigger(new k.SubscriberEvent(k.SubscriberEventTypes.VOLUME_CHANGE, void 0, { volume: e.volume })) }, e.ondurationchange = function(i) {!isNaN(e.duration) && (0, a.default)(e.duration) && (t.isVOD = !0), r && n.setPlaybackDuration(e.duration) }, e.onended = function() {
                            (0, P.debug)(T, "[videoelement:onended]"), r && n.setState(w.PlaybackState.IDLE), t.trigger(new k.SubscriberEvent(k.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, void 0, { code: w.PlaybackState.IDLE, state: w.PlaybackStateReadable[w.PlaybackState.IDLE] }))
                        }, e.ontimeupdate = function(i) { r && n.setSeekTime(e.currentTime, self.isVOD ? e.duration : void 0), t.trigger(new k.SubscriberEvent(k.SubscriberEventTypes.PLAYBACK_TIME_UPDATE, void 0, { time: e.currentTime, duration: e.duration })) }, e.onseeked = function(e) {}, e.onseeking = function(e) {}, e.onplay = function() { r && n.setState(w.PlaybackState.PLAYING), t.trigger(new k.SubscriberEvent(k.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, void 0, { code: w.PlaybackState.PLAYING, state: w.PlaybackStateReadable[w.PlaybackState.PLAYING] })) }, e.onpause = function() { r && n.setState(w.PlaybackState.PAUSED), t.trigger(new k.SubscriberEvent(k.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, void 0, { code: w.PlaybackState.PAUSED, state: w.PlaybackStateReadable[w.PlaybackState.PAUSED] })) }, e.onvolumechange = function(i) { r && n.getVolume() !== t.media.volume && n.setVolume(t.media.volume), t.trigger(new k.SubscriberEvent(k.SubscriberEventTypes.VOLUME_CHANGE, void 0, { volume: e.muted ? 0 : e.volume })) }, e.onencrypted = function() {
                            (0, P.debug)(T, "[videoelement:event] encrypted")
                        }, e.onemptied = function() {
                            (0, P.debug)(T, "[videoelement:event] emptied")
                        }, e.onloadeddata = function() {
                            (0, P.debug)(T, "[videoelement:event] loadeddata")
                        }, e.onresize = function() {
                            (0, P.debug)(T, "[videoelement:event] resize"), t.trigger(new k.SubscriberEvent(k.SubscriberEventTypes.VIDEO_DIMENSIONS_CHANGE, void 0, { width: t.media.videoWidth, height: t.media.videoHeight }))
                        }, e.onloadedmetadata = function() {
                            (0, P.debug)(T, "[videoelement:event] loadedmetadata"), t.trigger(new k.SubscriberEvent(k.SubscriberEventTypes.SUBSCRIBE_START, void 0, {}))
                        }, e.onloadstart = function() {
                            (0, P.debug)(T, "[videoelement:event] loadedstart")
                        }, e.onstalled = function() {
                            (0, P.debug)(T, "[videoelement:event] stalled")
                        }, e.onsuspend = function() {
                            (0, P.debug)(T, "[videoelement:event] suspend")
                        }, e.onwaiting = function() {
                            (0, P.debug)(T, "[videoelement:event] waiting")
                        }
                    }
                }, { key: "_handleFullScreenChange", value: function(e) { e ? (this.holder.classList.add("red5pro-media-container-full-screen"), this.media.classList.add("red5pro-media-container-full-screen")) : (this.holder.classList.remove("red5pro-media-container-full-screen"), this.media.classList.remove("red5pro-media-container-full-screen")), this.trigger(new k.SubscriberEvent(k.SubscriberEventTypes.FULL_SCREEN_STATE_CHANGE, void 0, e)) } }, {
                    key: "_embedMediaSource",
                    value: function(e, t, n) {
                        var r = new C.DeferredPromise;
                        try {
                            var i = y.default.createElement("source");
                            i.type = t, i.src = e, this.media.type = t, this.media.firstChild ? this.media.insertBefore(i, this.media.firstChild) : this.media.appendChild(i), this._mediaSource = i, this._autoLayoutOrientation = n.autoLayoutOrientation, y.default.onOrientationMetadata(this.media, this._onOrientationMetadata), y.default.onStreamingModeMetadata(this.media, this._onStreamingModeMetadata), r.resolve()
                        } catch (e) { r.reject(e.message) }
                        return r.promise
                    }
                }, {
                    key: "_onOrientationMetadata",
                    value: function(e) {
                        var t = e.orientation,
                            n = e.resolution,
                            r = parseInt(t, 10);
                        t && this._orientation !== r && ((0, P.debug)(T, "Metadata received: " + (0, o.default)(e, null, 2)), this._orientation = r, this._autoLayoutOrientation && ((0, g.applyOrientation)(this.media, this._orientation, (0, S.metadataResolutionToObject)(n)), this._handleOrientationChange(this._orientation)), this.trigger(new k.SubscriberEvent(k.SubscriberEventTypes.ORIENTATION_CHANGE, void 0, { orientation: this._orientation, viewElement: this.media })), this.trigger(new k.SubscriberEvent(k.SubscriberEventTypes.SUBSCRIBE_METADATA, void 0, e)))
                    }
                }, {
                    key: "_onStreamingModeMetadata",
                    value: function(e) {
                        var t = e.streamingMode,
                            n = this._streamingMode;
                        t && n !== t && ((0, P.debug)(T, "Metadata received: " + (0, o.default)(e, null, 2)), this._streamingMode = t, this.trigger(new k.SubscriberEvent(k.SubscriberEventTypes.STREAMING_MODE_CHANGE, void 0, { streamingMode: this._streamingMode, previousStreamingMode: n, viewElement: this.media })), this.trigger(new k.SubscriberEvent(k.SubscriberEventTypes.SUBSCRIBE_METADATA, void 0, e)))
                    }
                }, {
                    key: "addSource",
                    value: function(e, t, n) {
                        var r = this;
                        (0, P.debug)(T, "[addsource]"), this.holder = this._determineHolder(this.media);
                        var i = new C.DeferredPromise,
                            o = n.controls,
                            s = y.default.hasAttributeDefined(this.media, "muted"),
                            a = y.default.hasAttributeDefined(this.media, "autoplay");
                        s || this.media.setAttribute("autoplay", !1);
                        var u = y.default.hasAttributeDefined(this.media, "controls") && y.default.hasClassDefined(this.media, "red5pro-media");
                        return this._embedMediaSource(e, t, n).then(function() {
                            (o || u) && (r._controls = o ? n.controls : new E.PlaybackControlsImpl(r, r.holder), r.media.controls = !1, r._controls.setAsVOD(r.isVOD), r._controls.setMutedState(s)), r._addPlaybackHandlers(r._playbackNotificationCenter), a && r.attemptAutoplay(n.muteOnAutoplayRestriction), i.resolve()
                        }).catch(function(e) { return i.reject(e) }), i.promise
                    }
                }, {
                    key: "connect",
                    value: function() {
                        (0, P.debug)(T, "[connect]")
                    }
                }, {
                    key: "attemptAutoplay",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.play().catch(function(n) { t ? (e.mute(), e.play().then(function() { e.trigger(new k.SubscriberEvent(k.SubscriberEventTypes.AUTO_PLAYBACK_MUTED, void 0, { element: e.media })) }).catch(function(t) { e.trigger(new k.SubscriberEvent(k.SubscriberEventTypes.AUTO_PLAYBACK_FAILURE, void 0, { error: t.message ? t.message : t, element: e.media })) })) : e.trigger(new k.SubscriberEvent(k.SubscriberEventTypes.AUTO_PLAYBACK_FAILURE, void 0, { error: n.message ? n.message : n, element: e.media })) })
                    }
                }, {
                    key: "play",
                    value: function() {
                        (0, P.debug)(T, "[videoelement:action] play");
                        var e = new C.DeferredPromise;
                        try {
                            var t = this.media.play();
                            t ? t.then(function() {
                                (0, P.debug)(T, "[videoelement:action] play (START)"), e.resolve()
                            }).catch(e.reject) : ((0, P.debug)(T, "[videoelement:action] play (START)"), e.resolve())
                        } catch (t) {
                            (0, P.error)(T, "[videoelement:action] play (FAULT) - " + t.message), e.reject(t)
                        }
                        return e.promise
                    }
                }, {
                    key: "pause",
                    value: function() {
                        (0, P.debug)(T, "[videoelement:action] pause");
                        try { this.media.pause() } catch (e) {
                            (0, P.debug)(T, "[videoelement:action] pause (FAULT) - " + e.message)
                        }
                    }
                }, {
                    key: "resume",
                    value: function() {
                        (0, P.debug)(T, "[videoelement:action] resume");
                        try {
                            var e = this.media.play();
                            e && e.then(function() { return (0, P.debug)(T, "[videoelement:action] play (START)") }).catch(function(e) { return (0, P.error)(T, "[videoelement:action] play (FAULT) " + (e.message ? e.message : e)) })
                        } catch (e) {
                            (0, P.error)(T, "[videoelement:action] resume (FAULT) - " + e.message)
                        }
                    }
                }, { key: "stop", value: function() { try { this.media.stop() } catch (e) {} } }, {
                    key: "mute",
                    value: function() {
                        this.media.muted = !0;
                        var e = this.getControls();
                        e && e.setMutedState(!0)
                    }
                }, {
                    key: "unmute",
                    value: function() {
                        this.media.muted = !1;
                        var e = this.getControls();
                        e && e.setMutedState(!1)
                    }
                }, { key: "setVolume", value: function(e) { this.unmute(), this.media.volume = e } }, {
                    key: "seekTo",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                        this.media.currentTime = t ? e * t : e
                    }
                }, { key: "toggleFullScreen", value: function() { try { y.default.toggleFullScreen(this.holder) } catch (e) { throw e } } }, { key: "unpublish", value: function() { try { this.stop(), this.media.onended.call(this.media) } catch (e) {} } }, { key: "disconnect", value: function() { this._cleanUp() } }, { key: "_handleOrientationChange", value: function(e) { this._controls && e % 180 != 0 && (this.holder.classList.add("red5pro-media-background"), this.media.classList.remove("red5pro-media-background")) } }, { key: "addSharedObjectResponseHandler", value: function(e) {} }, { key: "removeSharedObjectResponseHandler", value: function(e) {} }, { key: "sendToSharedObject", value: function(e, t, n) {} }, { key: "sendPropertyToSharedObject", value: function(e, t, n) {} }, { key: "getRemoteSharedObject", value: function(e) {} }, { key: "connectToSharedObject", value: function(e) {} }, { key: "closeSharedObject", value: function(e) {} }, { key: "getControls", value: function() { return this._controls } }, { key: "getType", value: function() { return this.playerType } }, { key: "isVOD", get: function() { return this._isVOD }, set: function(e) { this._isVOD = e, this._controls && this._controls.setAsVOD(e) } }]), t
            }(E.PlaybackController);
        t.default = O
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(92),
            o = r(i),
            s = n(5),
            a = r(s),
            u = n(0),
            c = r(u),
            d = n(1),
            l = r(d),
            f = n(8),
            h = r(f),
            v = n(7),
            p = r(v),
            b = n(4),
            m = r(b),
            _ = n(24),
            y = n(35),
            g = n(13),
            S = n(6),
            E = n(2),
            w = "RTCSourceHandler",
            k = function(e) {
                function t(e, n) {
                    (0, c.default)(this, t);
                    var r = (0, h.default)(this, (t.__proto__ || (0, a.default)(t)).call(this));
                    return r.media = e, r.clone = r.media.cloneNode(!0), r.parent = r.media.parentNode, r.holder = r._determineHolder(r.media), r.playerType = n, r._isVOD = !1, r._controls = void 0, r._playbackNotificationCenter = r.media, m.default.onFullScreenStateChange(r._handleFullScreenChange.bind(r)), r
                }
                return (0, p.default)(t, e), (0, l.default)(t, [{
                    key: "_determineHolder",
                    value: function(e) {
                        if (e.parentNode.classList.contains("red5pro-media-container")) return e.parentNode;
                        var t = e.parentNode,
                            n = m.default.createElement("div");
                        return n.classList.add("red5pro-media-container"), t.insertBefore(n, e), t.removeChild(e), n.appendChild(e), n
                    }
                }, {
                    key: "_cleanUp",
                    value: function() {
                        var e = this.media,
                            t = e.parentNode,
                            n = this.holder;
                        if (t) t.removeChild(e), t !== this.parent && (t.parentNode.removeChild(t), n = this.parent);
                        else try { e.remove() } catch (e) {
                            (0, E.warn)(w, "Issue in DOM cleanup of WebRTC video object: " + e.message)
                        }
                        this.media = this.clone.cloneNode(!0), n.appendChild(this.media), this._controls && this._controls.detach()
                    }
                }, {
                    key: "_addPlaybackHandlers",
                    value: function(e) {
                        var t = this,
                            n = this.getControls(),
                            r = void 0 !== n;
                        e.oncanplay = function() {
                            (0, E.debug)(w, "[videoelement:event] canplay"), n && n.enable(!0), t.trigger(new g.SubscriberEvent(g.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, void 0, { code: y.PlaybackState.AVAILABLE, state: y.PlaybackStateReadable[y.PlaybackState.AVAILABLE] })), t.trigger(new g.SubscriberEvent(g.SubscriberEventTypes.VOLUME_CHANGE, void 0, { volume: e.volume }))
                        }, e.ondurationchange = function(i) {
                            (0, E.debug)(w, "[videoelement:event] durationchange"), !isNaN(e.duration) && (0, o.default)(e.duration) && (t.isVOD = !0), r && n.setPlaybackDuration(e.duration)
                        }, e.onended = function() {
                            (0, E.debug)(w, "[videoelement:event] ended"), r && n.setState(y.PlaybackState.IDLE), t.trigger(new g.SubscriberEvent(g.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, void 0, { code: y.PlaybackState.IDLE, state: y.PlaybackStateReadable[y.PlaybackState.IDLE] }))
                        }, e.ontimeupdate = function(i) { r && n.setSeekTime(e.currentTime, self.isVOD ? e.duration : void 0), t.trigger(new g.SubscriberEvent(g.SubscriberEventTypes.PLAYBACK_TIME_UPDATE, void 0, { time: e.currentTime, duration: e.duration })) }, e.onseeked = function(e) {}, e.onseeking = function(e) {}, e.onplay = function() {
                            (0, E.debug)(w, "[videoelement:event] play"), r && n.setState(y.PlaybackState.PLAYING), t.trigger(new g.SubscriberEvent(g.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, void 0, { code: y.PlaybackState.PLAYING, state: y.PlaybackStateReadable[y.PlaybackState.PLAYING] }))
                        }, e.onpause = function() {
                            (0, E.debug)(w, "[videoelement:event] pause"), r && n.setState(y.PlaybackState.PAUSED), t.trigger(new g.SubscriberEvent(g.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, void 0, { code: y.PlaybackState.PAUSED, state: y.PlaybackStateReadable[y.PlaybackState.PAUSED] }))
                        }, e.onvolumechange = function(i) { r && n.getVolume() !== t.media.volume && n.setVolume(t.media.volume), t.trigger(new g.SubscriberEvent(g.SubscriberEventTypes.VOLUME_CHANGE, void 0, { volume: e.muted ? 0 : e.volume })) }, e.onencrypted = function() {
                            (0, E.debug)(w, "[videoelement:event] encrypted")
                        }, e.onemptied = function() {
                            (0, E.debug)(w, "[videoelement:event] emptied")
                        }, e.onloadeddata = function() {
                            (0, E.debug)(w, "[videoelement:event] loadeddata"), t.trigger(new g.SubscriberEvent(g.SubscriberEventTypes.VIDEO_DIMENSIONS_CHANGE, void 0, { width: t.media.videoWidth, height: t.media.videoHeight }))
                        }, e.onresize = function() {
                            (0, E.debug)(w, "[videoelement:event] resize"), t.trigger(new g.SubscriberEvent(g.SubscriberEventTypes.VIDEO_DIMENSIONS_CHANGE, void 0, { width: t.media.videoWidth, height: t.media.videoHeight }))
                        }, e.onloadedmetadata = function() {
                            (0, E.debug)(w, "[videoelement:event] loadedmetadata")
                        }, e.onloadstart = function() {
                            (0, E.debug)(w, "[videoelement:event] loadedstart")
                        }, e.onstalled = function() {
                            (0, E.debug)(w, "[videoelement:event] stalled")
                        }, e.onsuspend = function() {
                            (0, E.debug)(w, "[videoelement:event] suspend")
                        }, e.onwaiting = function() {
                            (0, E.debug)(w, "[videoelement:event] waiting")
                        }
                    }
                }, { key: "_handleFullScreenChange", value: function(e) { e ? (this.holder.classList.add("red5pro-media-container-full-screen"), this.media.classList.add("red5pro-media-container-full-screen")) : (this.holder.classList.remove("red5pro-media-container-full-screen"), this.media.classList.remove("red5pro-media-container-full-screen")), this.trigger(new g.SubscriberEvent(g.SubscriberEventTypes.FULL_SCREEN_STATE_CHANGE, void 0, e)) } }, {
                    key: "addSource",
                    value: function(e) {
                        (0, E.debug)(w, "[addsource]"), this.holder = this._determineHolder(this.media);
                        var t = new S.DeferredPromise,
                            n = e.controls,
                            r = m.default.hasAttributeDefined(this.media, "muted"),
                            i = m.default.hasAttributeDefined(this.media, "controls") && m.default.hasClassDefined(this.media, "red5pro-media");
                        return (n || i) && (this._controls = n ? e.controls : new _.PlaybackControlsImpl(this, this.holder), this.media.controls = !1, this._controls.setAsVOD(this.isVOD), this._controls.setMutedState(r)), this._addPlaybackHandlers(this._playbackNotificationCenter), t.resolve(), t.promise
                    }
                }, {
                    key: "connect",
                    value: function() {
                        (0, E.debug)(w, "[connect]")
                    }
                }, {
                    key: "attemptAutoplay",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.play().catch(function(n) { t ? (e.mute(), e.play().then(function() { e.trigger(new g.SubscriberEvent(g.SubscriberEventTypes.AUTO_PLAYBACK_MUTED, void 0, { element: e.media })) }).catch(function(t) { e.trigger(new g.SubscriberEvent(g.SubscriberEventTypes.AUTO_PLAYBACK_FAILURE, void 0, { error: t.message ? t.message : t, element: e.media })) })) : e.trigger(new g.SubscriberEvent(g.SubscriberEventTypes.AUTO_PLAYBACK_FAILURE, void 0, { error: n.message ? n.message : n, element: e.media })) })
                    }
                }, {
                    key: "play",
                    value: function() {
                        (0, E.debug)(w, "[videoelement:action] play");
                        var e = new S.DeferredPromise;
                        try {
                            var t = this.media.play();
                            t ? t.then(function() {
                                (0, E.debug)(w, "[videoelement:action] play (START)"), e.resolve()
                            }).catch(e.reject) : ((0, E.debug)(w, "[videoelement:action] play (START)"), e.resolve())
                        } catch (t) {
                            (0, E.error)(w, "[videoelement:action] play (FAULT) - " + t.message), e.reject(t)
                        }
                        return e.promise
                    }
                }, {
                    key: "pause",
                    value: function() {
                        (0, E.debug)(w, "[videoelement:action] pause");
                        try { this.media.pause() } catch (e) {
                            (0, E.warn)(w, "[videoelement:action] pause (CATCH::FAULT) - " + e.message)
                        }
                    }
                }, {
                    key: "resume",
                    value: function() {
                        (0, E.debug)(w, "[videoelement:action] resume");
                        try {
                            var e = this.media.play();
                            e && e.then(function() { return (0, E.debug)(w, "[videoelement:action] play (START)") }).catch(function(e) { return (0, E.warn)(w, "[videoelement:action] play (CATCH::FAULT) " + (e.message ? e.message : e)) })
                        } catch (e) {
                            (0, E.warn)(w, "[videoelement:action] resume (CATCH::FAULT) - " + e.message)
                        }
                    }
                }, {
                    key: "stop",
                    value: function() {
                        (0, E.debug)(w, "[videoelement:action] stop");
                        try { this.media.stop() } catch (e) {}
                    }
                }, {
                    key: "mute",
                    value: function() {
                        this.media.muted = !0;
                        var e = this.getControls();
                        e && e.setMutedState(!0)
                    }
                }, {
                    key: "unmute",
                    value: function() {
                        this.media.muted = !1;
                        var e = this.getControls();
                        e && e.setMutedState(!1)
                    }
                }, { key: "setVolume", value: function(e) { this.unmute(), this.media.volume = e } }, {
                    key: "seekTo",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                        this.media.currentTime = t ? e * t : e
                    }
                }, { key: "toggleFullScreen", value: function() { try { m.default.toggleFullScreen(this.holder) } catch (e) { throw e } } }, { key: "unpublish", value: function() { try { this.stop(), this.media.onended.call(this.media) } catch (e) {} } }, { key: "disconnect", value: function() { this._cleanUp() } }, { key: "handleOrientationChange", value: function(e) { this._controls && e % 180 != 0 && (this.holder.classList.add("red5pro-media-background"), this.media.classList.remove("red5pro-media-background")) } }, { key: "addSharedObjectResponseHandler", value: function(e) {} }, { key: "removeSharedObjectResponseHandler", value: function(e) {} }, { key: "sendToSharedObject", value: function(e, t, n) {} }, { key: "sendPropertyToSharedObject", value: function(e, t, n) {} }, { key: "getRemoteSharedObject", value: function(e) {} }, { key: "connectToSharedObject", value: function(e) {} }, { key: "closeSharedObject", value: function(e) {} }, { key: "getControls", value: function() { return this._controls } }, { key: "getType", value: function() { return this.playerType } }, { key: "isVOD", get: function() { return this._isVOD }, set: function(e) { this._isVOD = e, this._controls && this._controls.setAsVOD(e) } }]), t
            }(_.PlaybackController);
        t.default = k
    }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(12),
            o = r(i),
            s = n(5),
            a = r(s),
            u = n(0),
            c = r(u),
            d = n(1),
            l = r(d),
            f = n(8),
            h = r(f),
            v = n(7),
            p = r(v),
            b = n(80),
            m = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }(b),
            _ = n(4),
            y = r(_),
            g = n(86),
            S = r(g),
            E = n(24),
            w = n(35),
            k = n(13),
            C = n(6),
            P = n(2),
            T = "RTMPSourceHandler",
            O = function(e) { return "string" == typeof e ? parseInt(e, 10) : Math.round(e) },
            R = function(e) { return /^.*\.(flv|mp4|mp3)/.test(e) },
            A = function(e) {
                function t(e, n, r) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0;
                    (0, c.default)(this, t);
                    var o = (0, h.default)(this, (t.__proto__ || (0, a.default)(t)).call(this));
                    return o.media = n, o.clone = o.media.cloneNode(!0), o.parent = o.media.parentNode, o.holder = o._determineHolder(o.media), o.playerType = r, o._swfId = void 0, o._controls = void 0, o._soResponder = i || new S.default, o._playbackNotificationCenter = e, y.default.onFullScreenStateChange(o._handleFullScreenChange.bind(o)), o
                }
                return (0, p.default)(t, e), (0, l.default)(t, [{
                    key: "_determineHolder",
                    value: function(e) {
                        if (e.parentNode.classList.contains("red5pro-media-container")) return e.parentNode;
                        var t = e.parentNode,
                            n = y.default.createElement("div");
                        return n.classList.add("red5pro-media-container"), t.insertBefore(n, e), t.removeChild(e), n.appendChild(e), n
                    }
                }, {
                    key: "_cleanUp",
                    value: function() {
                        var e = this.getEmbeddedView(),
                            t = e.parentNode,
                            n = this.holder;
                        if (t) t.removeChild(e), t !== this.parent && (t.parentNode.removeChild(t), n = this.parent);
                        else try { e.remove() } catch (e) {
                            (0, P.warn)(T, "Issue in DOM cleanup of flash object embed: " + e.message)
                        }
                        this.media = this.clone.cloneNode(!0), n.appendChild(this.media), this._controls && this._controls.detach()
                    }
                }, {
                    key: "_addPlaybackHandlers",
                    value: function(e) {
                        var t = this.getControls();
                        void 0 !== t && (e.on(k.SubscriberEventTypes.SUBSCRIBE_START, function() { t.setState(w.PlaybackState.PLAYING) }), e.on(k.SubscriberEventTypes.SUBSCRIBE_STOP, function() { t.setState(w.PlaybackState.IDLE) }), e.on(k.SubscriberEventTypes.PLAY_UNPUBLISH, function() { t.setState(w.PlaybackState.IDLE) }), e.on(k.SubscriberEventTypes.SUBSCRIBE_METADATA, function(e) { e.data.duration && t.setPlaybackDuration(e.data.duration) }), e.on(k.SubscriberEventTypes.VOLUME_CHANGE, function(e) { t.setVolume(e.data.volume) }), e.on(k.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, function(e) { e.data.code === w.PlaybackState.AVAILABLE && t.enable(!0), t.setState(e.data.code) }), e.on(k.SubscriberEventTypes.PLAYBACK_TIME_UPDATE, function(e) { t.setSeekTime(e.data.time, e.data.duration) }), e.on(k.SubscriberEventTypes.FULL_SCREEN_STATE_CHANGE, function(e) { t.onFullScreenChange(e.data) }))
                    }
                }, {
                    key: "_handleFullScreenChange",
                    value: function(e) {
                        var t = this.getEmbeddedView();
                        e ? (this.holder.classList.add("red5pro-media-container-full-screen"), t.classList.add("red5pro-media-container-full-screen")) : (this.holder.classList.remove("red5pro-media-container-full-screen"), t.classList.remove("red5pro-media-container-full-screen")), this.trigger(new k.SubscriberEvent(k.SubscriberEventTypes.FULL_SCREEN_STATE_CHANGE, void 0, e))
                    }
                }, {
                    key: "_setUpInitCallback",
                    value: function(e) {
                        var t = this;
                        y.default.addSubscriptionAssignmentHandler(function(n) {
                            (0, P.debug)(T, "Embed and init() complete for subscriber swf. successId(" + n + ")."), e.resolve(n), t._tearDownInitCallback()
                        })
                    }
                }, { key: "_tearDownInitCallback", value: function() {} }, {
                    key: "addSource",
                    value: function(e, t) {
                        var n = this,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        (0, P.debug)(T, "[addsource]"), this._swfId = e, this.holder = this._determineHolder(this.media);
                        var s = this._soResponder,
                            a = new C.DeferredPromise,
                            u = t.controls,
                            c = y.default.hasAttributeDefined(this.media, "muted"),
                            d = y.default.hasAttributeDefined(this.media, "controls") && y.default.hasClassDefined(this.media, "red5pro-media");
                        t.swf = r || t.swf, t.minFlashVersion = i || t.minFlashVersion, this._setUpInitCallback(a);
                        var l = this.media.classList;
                        return m.defineEmbedElement(this.media, this.holder).then(function(r) { var i = { stream: t.streamName, app: t.context ? t.app + "/" + t.context : t.app, host: t.host, muted: y.default.hasAttributeDefined(n.media, "muted"), autoplay: y.default.hasAttributeDefined(n.media, "autoplay"), useAdaptiveBitrateController: t.useAdaptiveBitrateController }; return t.backgroundColor && (i.backgroundColor = t.backgroundColor), t.buffer && !isNaN(Number(t.buffer)) && (i.buffer = t.buffer), t.width && !isNaN(t.width) && (i.width = O(t.width)), t.height && !isNaN(t.height) && (i.height = O(t.height)), "100%" !== t.embedWidth && "100%" !== t.embedHeight || (i.autosize = !0), n._swfId = e, void 0 !== t.connectionParams && (i.connectionParams = encodeURIComponent((0, o.default)(t.connectionParams))), void 0 !== t.abrVariants && (i.abrVariants = encodeURIComponent((0, o.default)(t.abrVariants))), void 0 !== t.abrVariantUpgradeSettings && (i.abrVariantUpgradeSettings = encodeURIComponent((0, o.default)(t.abrVariantUpgradeSettings))), m.embedSwfObject(e, t, i, y.default.getSwfObject(), r) }).then(function() { if (u || d) { n._controls = u ? t.controls : new E.PlaybackControlsImpl(n, n.holder), n.media.controls = !1, n._controls.setAsVOD(R(t.streamName)), n._controls.setMutedState(c); for (var e = n.getEmbeddedView(), r = l.length, i = void 0; --r > -1;) i = l.item(r), e.classList.add(i) } return n._addPlaybackHandlers(n._playbackNotificationCenter), n.trigger(new k.SubscriberEvent(k.SubscriberEventTypes.PLAYBACK_STATE_CHANGE, void 0, { code: w.PlaybackState.AVAILABLE, state: w.PlaybackStateReadable[w.PlaybackState.AVAILABLE] })), !0 }).then(function() { return s.connect(e), !0 }).catch(function(e) { return a.reject(e) }), a.promise
                    }
                }, {
                    key: "connect",
                    value: function() {
                        (0, P.debug)(T, "[connect]");
                        try { this.getEmbeddedView().connect() } catch (e) { throw e }
                    }
                }, { key: "play", value: function() { try { this.getEmbeddedView().play() } catch (e) { throw e } } }, { key: "pause", value: function() { try { this.getEmbeddedView().pause() } catch (e) { throw e } } }, { key: "resume", value: function() { try { this.getEmbeddedView().resume() } catch (e) { throw e } } }, { key: "stop", value: function() { try { this.getEmbeddedView().stop() } catch (e) { throw e } } }, { key: "mute", value: function() { try { this.getEmbeddedView().mute() } catch (e) { throw e } } }, { key: "unmute", value: function() { try { this.getEmbeddedView().unmute() } catch (e) { throw e } } }, { key: "setVolume", value: function(e) { try { this.getEmbeddedView().setVolume(e) } catch (e) { throw e } } }, { key: "seekTo", value: function(e) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0; try { this.getEmbeddedView().seekTo(e, t) } catch (e) { throw e } } }, { key: "toggleFullScreen", value: function() { try { y.default.toggleFullScreen(this.holder) } catch (e) { throw e } } }, { key: "unpublish", value: function() { this.stop() } }, {
                    key: "disconnect",
                    value: function() {
                        try { this.getEmbeddedView().disconnect(), (0, P.debug)(T, "[disconnect]") } catch (e) {}
                        this._cleanUp(), this._soResponder.disconnect()
                    }
                }, { key: "addSharedObjectResponseHandler", value: function(e) { this._soResponder.addResponseHandler(e) } }, { key: "removeSharedObjectResponseHandler", value: function(e) { this._soResponder.removeResponseHandler(e) } }, { key: "sendToSharedObject", value: function(e, t, n) { this._soResponder.sendToSharedObject(e, t, n) } }, { key: "sendPropertyToSharedObject", value: function(e, t, n) { this._soResponder.sendPropertyToSharedObject(e, t, n) } }, { key: "getRemoteSharedObject", value: function(e) { this._soResponder.getRemoteSharedObject(e) } }, { key: "connectToSharedObject", value: function(e) { this._soResponder.connectToSharedObject(e) } }, { key: "closeSharedObject", value: function(e) { this._soResponder.closeSharedObject(e) } }, {
                    key: "startABRController",
                    value: function() {
                        try { this.getEmbeddedView().startABRController() } catch (e) {
                            (0, P.debug)(T, "Could not start the Adaptive Bitrate Controller: " + e.message)
                        }
                    }
                }, {
                    key: "stopABRController",
                    value: function() {
                        try { this.getEmbeddedView().stopABRController() } catch (e) {
                            (0, P.debug)(T, "Could not stop the Adaptive Bitrate Controller: " + e.message)
                        }
                    }
                }, {
                    key: "setABRVariants",
                    value: function(e, t) {
                        try {
                            var n = "string" == typeof e ? encodeURIComponent(e) : encodeURIComponent((0, o.default)(e));
                            this.getEmbeddedView().setABRVariants(n, t || 1)
                        } catch (e) {
                            (0, P.debug)(T, "Could not set ABR Variants: " + e.message)
                        }
                    }
                }, {
                    key: "setABRLevel",
                    value: function(e, t) {
                        try { this.getEmbeddedView().setABRLevel(e, !!t) } catch (e) {
                            (0, P.debug)(T, "Could not set ABR level: " + e.message)
                        }
                    }
                }, {
                    key: "setABRVariantUpgradeSettings",
                    value: function(e) {
                        try {
                            var t = "string" == typeof abrVariants ? encodeURIComponent(e) : encodeURIComponent((0, o.default)(e));
                            this.getEmbeddedView().setABRVariantUpgradeSettings(t)
                        } catch (e) {
                            (0, P.debug)(T, "Could not set ABR Variants: " + e.message)
                        }
                    }
                }, { key: "getEmbeddedView", value: function() { return y.default.getEmbedObject(this._swfId) } }, { key: "getControls", value: function() { return this._controls } }, { key: "getType", value: function() { return this.playerType } }]), t
            }(E.PlaybackController);
        t.default = A
    }, function(e, t, n) { e.exports = { default: n(148), __esModule: !0 } }, function(e, t, n) { e.exports = { default: n(149), __esModule: !0 } }, function(e, t, n) { e.exports = { default: n(150), __esModule: !0 } }, function(e, t, n) { e.exports = { default: n(154), __esModule: !0 } }, function(e, t, n) { e.exports = { default: n(155), __esModule: !0 } }, function(e, t, n) { e.exports = { default: n(156), __esModule: !0 } }, function(e, t, n) { e.exports = { default: n(159), __esModule: !0 } }, function(e, t, n) { e.exports = { default: n(162), __esModule: !0 } }, function(e, t, n) { e.exports = { default: n(165), __esModule: !0 } }, function(e, t, n) { e.exports = { default: n(166), __esModule: !0 } }, function(e, t, n) {
        "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        t.__esModule = !0;
        var i = n(138),
            o = r(i),
            s = n(137),
            a = r(s);
        t.default = function() {
            function e(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try { for (var s, u = (0, a.default)(e); !(r = (s = u.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0); } catch (e) { i = !0, o = e } finally { try {!r && u.return && u.return() } finally { if (i) throw o } }
                return n
            }
            return function(t, n) { if (Array.isArray(t)) return t; if ((0, o.default)(Object(t))) return e(t, n); throw new TypeError("Invalid attempt to destructure non-iterable instance") }
        }()
    }, function(e, t, n) { e.exports = n(209) }, function(e, t, n) { n(26), n(188), e.exports = n(3).Array.from }, function(e, t, n) { n(27), n(26), e.exports = n(186) }, function(e, t, n) { n(27), n(26), e.exports = n(187) }, function(e, t, n) {
        var r = n(3),
            i = r.JSON || (r.JSON = { stringify: JSON.stringify });
        e.exports = function(e) { return i.stringify.apply(i, arguments) }
    }, function(e, t, n) { n(40), n(26), n(27), n(190), n(205), e.exports = n(3).Map }, function(e, t, n) { n(191), e.exports = n(3).Number.isFinite }, function(e, t, n) { n(192), e.exports = n(3).Number.isNaN }, function(e, t, n) { n(193), e.exports = n(3).Object.assign }, function(e, t, n) {
        n(194);
        var r = n(3).Object;
        e.exports = function(e, t) { return r.create(e, t) }
    }, function(e, t, n) {
        n(195);
        var r = n(3).Object;
        e.exports = function(e, t, n) { return r.defineProperty(e, t, n) }
    }, function(e, t, n) { n(196), e.exports = n(3).Object.freeze }, function(e, t, n) {
        n(197);
        var r = n(3).Object;
        e.exports = function(e, t) { return r.getOwnPropertyDescriptor(e, t) }
    }, function(e, t, n) { n(198), e.exports = n(3).Object.getPrototypeOf }, function(e, t, n) { n(199), e.exports = n(3).Object.keys }, function(e, t, n) { n(200), e.exports = n(3).Object.setPrototypeOf }, function(e, t, n) { n(40), n(26), n(27), n(201), e.exports = n(3).Promise }, function(e, t, n) { n(40), n(26), n(27), n(202), n(206), e.exports = n(3).Set }, function(e, t, n) { n(203), n(40), n(207), n(208), e.exports = n(3).Symbol }, function(e, t, n) { n(26), n(27), e.exports = n(78).f("iterator") }, function(e, t, n) { n(40), n(27), n(204), e.exports = n(3).WeakMap }, function(e, t) { e.exports = function() {} }, function(e, t, n) {
        var r = n(37);
        e.exports = function(e, t) { var n = []; return r(e, !1, n.push, n, t), n }
    }, function(e, t, n) {
        var r = n(23),
            i = n(54),
            o = n(185);
        e.exports = function(e) {
            return function(t, n, s) {
                var a, u = r(t),
                    c = i(u.length),
                    d = o(s, c);
                if (e && n != n) {
                    for (; c > d;)
                        if ((a = u[d++]) != a) return !0
                } else
                    for (; c > d; d++)
                        if ((e || d in u) && u[d] === n) return e || d || 0; return !e && -1
            }
        }
    }, function(e, t, n) {
        var r = n(14),
            i = n(103),
            o = n(9)("species");
        e.exports = function(e) { var t; return i(e) && (t = e.constructor, "function" != typeof t || t !== Array && !i(t.prototype) || (t = void 0), r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t }
    }, function(e, t, n) {
        var r = n(171);
        e.exports = function(e, t) { return new(r(e))(t) }
    }, function(e, t, n) {
        "use strict";
        var r = n(53),
            i = n(31).getWeak,
            o = n(16),
            s = n(14),
            a = n(46),
            u = n(37),
            c = n(64),
            d = n(21),
            l = c(5),
            f = c(6),
            h = 0,
            v = function(e) { return e._l || (e._l = new p) },
            p = function() { this.a = [] },
            b = function(e, t) { return l(e.a, function(e) { return e[0] === t }) };
        p.prototype = {
            get: function(e) { var t = b(this, e); if (t) return t[1] },
            has: function(e) { return !!b(this, e) },
            set: function(e, t) {
                var n = b(this, e);
                n ? n[1] = t : this.a.push([e, t])
            },
            delete: function(e) { var t = f(this.a, function(t) { return t[0] === e }); return ~t && this.a.splice(t, 1), !!~t }
        }, e.exports = { getConstructor: function(e, t, n, o) { var c = e(function(e, r) { a(e, c, t, "_i"), e._i = h++, e._l = void 0, void 0 != r && u(r, n, e[o], e) }); return r(c.prototype, { delete: function(e) { if (!s(e)) return !1; var t = i(e); return !0 === t ? v(this).delete(e) : t && d(t, this._i) && delete t[this._i] }, has: function(e) { if (!s(e)) return !1; var t = i(e); return !0 === t ? v(this).has(e) : t && d(t, this._i) } }), c }, def: function(e, t, n) { var r = i(o(t), !0); return !0 === r ? v(e).set(t, n) : r[e._i] = n, e }, ufstore: v }
    }, function(e, t, n) {
        "use strict";
        var r = n(15),
            i = n(38);
        e.exports = function(e, t, n) { t in e ? r.f(e, t, i(0, n)) : e[t] = n }
    }, function(e, t, n) {
        var r = n(32),
            i = n(71),
            o = n(51);
        e.exports = function(e) {
            var t = r(e),
                n = i.f;
            if (n)
                for (var s, a = n(e), u = o.f, c = 0; a.length > c;) u.call(e, s = a[c++]) && t.push(s);
            return t
        }
    }, function(e, t) {
        e.exports = function(e, t, n) {
            var r = void 0 === n;
            switch (t.length) {
                case 0:
                    return r ? e() : e.call(n);
                case 1:
                    return r ? e(t[0]) : e.call(n, t[0]);
                case 2:
                    return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                case 3:
                    return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                case 4:
                    return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
            }
            return e.apply(n, t)
        }
    }, function(e, t, n) {
        "use strict";
        var r = n(50),
            i = n(38),
            o = n(39),
            s = {};
        n(22)(s, n(9)("iterator"), function() { return this }), e.exports = function(e, t, n) { e.prototype = r(s, { next: i(1, n) }), o(e, t + " Iterator") }
    }, function(e, t, n) {
        var r = n(32),
            i = n(23);
        e.exports = function(e, t) {
            for (var n, o = i(e), s = r(o), a = s.length, u = 0; a > u;)
                if (o[n = s[u++]] === t) return n
        }
    }, function(e, t, n) {
        var r = n(11),
            i = n(112).set,
            o = r.MutationObserver || r.WebKitMutationObserver,
            s = r.process,
            a = r.Promise,
            u = "process" == n(36)(s);
        e.exports = function() {
            var e, t, n, c = function() {
                var r, i;
                for (u && (r = s.domain) && r.exit(); e;) { i = e.fn, e = e.next; try { i() } catch (r) { throw e ? n() : t = void 0, r } }
                t = void 0, r && r.enter()
            };
            if (u) n = function() { s.nextTick(c) };
            else if (o) {
                var d = !0,
                    l = document.createTextNode("");
                new o(c).observe(l, { characterData: !0 }), n = function() { l.data = d = !d }
            } else if (a && a.resolve) {
                var f = a.resolve();
                n = function() { f.then(c) }
            } else n = function() { i.call(r, c) };
            return function(r) {
                var i = { fn: r, next: void 0 };
                t && (t.next = i), e || (e = i, n()), t = i
            }
        }
    }, function(e, t, n) {
        var r = n(15),
            i = n(16),
            o = n(32);
        e.exports = n(17) ? Object.defineProperties : function(e, t) { i(e); for (var n, s = o(t), a = s.length, u = 0; a > u;) r.f(e, n = s[u++], t[n]); return e }
    }, function(e, t, n) {
        var r = n(23),
            i = n(108).f,
            o = {}.toString,
            s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
            a = function(e) { try { return i(e) } catch (e) { return s.slice() } };
        e.exports.f = function(e) { return s && "[object Window]" == o.call(e) ? a(e) : i(r(e)) }
    }, function(e, t, n) {
        var r = n(14),
            i = n(16),
            o = function(e, t) { if (i(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!") };
        e.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, r) { try { r = n(20)(Function.call, n(70).f(Object.prototype, "__proto__").set, 2), r(e, []), t = !(e instanceof Array) } catch (e) { t = !0 } return function(e, n) { return o(e, n), t ? e.__proto__ = n : r(e, n), e } }({}, !1) : void 0), check: o }
    }, function(e, t, n) {
        var r = n(16),
            i = n(63),
            o = n(9)("species");
        e.exports = function(e, t) { var n, s = r(e).constructor; return void 0 === s || void 0 == (n = r(s)[o]) ? t : i(n) }
    }, function(e, t, n) {
        var r = n(75),
            i = n(48);
        e.exports = function(e) {
            return function(t, n) {
                var o, s, a = String(i(t)),
                    u = r(n),
                    c = a.length;
                return u < 0 || u >= c ? e ? "" : void 0 : (o = a.charCodeAt(u), o < 55296 || o > 56319 || u + 1 === c || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? e ? a.charAt(u) : o : e ? a.slice(u, u + 2) : s - 56320 + (o - 55296 << 10) + 65536)
            }
        }
    }, function(e, t, n) {
        var r = n(75),
            i = Math.max,
            o = Math.min;
        e.exports = function(e, t) { return e = r(e), e < 0 ? i(e + t, 0) : o(e, t) }
    }, function(e, t, n) {
        var r = n(16),
            i = n(79);
        e.exports = n(3).getIterator = function(e) { var t = i(e); if ("function" != typeof t) throw TypeError(e + " is not iterable!"); return r(t.call(e)) }
    }, function(e, t, n) {
        var r = n(47),
            i = n(9)("iterator"),
            o = n(30);
        e.exports = n(3).isIterable = function(e) { var t = Object(e); return void 0 !== t[i] || "@@iterator" in t || o.hasOwnProperty(r(t)) }
    }, function(e, t, n) {
        "use strict";
        var r = n(20),
            i = n(10),
            o = n(33),
            s = n(104),
            a = n(102),
            u = n(54),
            c = n(174),
            d = n(79);
        i(i.S + i.F * !n(105)(function(e) { Array.from(e) }), "Array", {
            from: function(e) {
                var t, n, i, l, f = o(e),
                    h = "function" == typeof this ? this : Array,
                    v = arguments.length,
                    p = v > 1 ? arguments[1] : void 0,
                    b = void 0 !== p,
                    m = 0,
                    _ = d(f);
                if (b && (p = r(p, v > 2 ? arguments[2] : void 0, 2)), void 0 == _ || h == Array && a(_))
                    for (t = u(f.length), n = new h(t); t > m; m++) c(n, m, b ? p(f[m], m) : f[m]);
                else
                    for (l = _.call(f), n = new h; !(i = l.next()).done; m++) c(n, m, b ? s(l, p, [i.value, m], !0) : i.value);
                return n.length = m, n
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(168),
            i = n(106),
            o = n(30),
            s = n(23);
        e.exports = n(69)(Array, "Array", function(e, t) { this._t = s(e), this._i = 0, this._k = t }, function() {
            var e = this._t,
                t = this._k,
                n = this._i++;
            return !e || n >= e.length ? (this._t = void 0, i(1)) : "keys" == t ? i(0, n) : "values" == t ? i(0, e[n]) : i(0, [n, e[n]])
        }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
    }, function(e, t, n) {
        "use strict";
        var r = n(98);
        e.exports = n(65)("Map", function(e) { return function() { return e(this, arguments.length > 0 ? arguments[0] : void 0) } }, { get: function(e) { var t = r.getEntry(this, e); return t && t.v }, set: function(e, t) { return r.def(this, 0 === e ? 0 : e, t) } }, r, !0)
    }, function(e, t, n) {
        var r = n(10),
            i = n(11).isFinite;
        r(r.S, "Number", { isFinite: function(e) { return "number" == typeof e && i(e) } })
    }, function(e, t, n) {
        var r = n(10);
        r(r.S, "Number", { isNaN: function(e) { return e != e } })
    }, function(e, t, n) {
        var r = n(10);
        r(r.S + r.F, "Object", { assign: n(107) })
    }, function(e, t, n) {
        var r = n(10);
        r(r.S, "Object", { create: n(50) })
    }, function(e, t, n) {
        var r = n(10);
        r(r.S + r.F * !n(17), "Object", { defineProperty: n(15).f })
    }, function(e, t, n) {
        var r = n(14),
            i = n(31).onFreeze;
        n(52)("freeze", function(e) { return function(t) { return e && r(t) ? e(i(t)) : t } })
    }, function(e, t, n) {
        var r = n(23),
            i = n(70).f;
        n(52)("getOwnPropertyDescriptor", function() { return function(e, t) { return i(r(e), t) } })
    }, function(e, t, n) {
        var r = n(33),
            i = n(109);
        n(52)("getPrototypeOf", function() { return function(e) { return i(r(e)) } })
    }, function(e, t, n) {
        var r = n(33),
            i = n(32);
        n(52)("keys", function() { return function(e) { return i(r(e)) } })
    }, function(e, t, n) {
        var r = n(10);
        r(r.S, "Object", { setPrototypeOf: n(182).set })
    }, function(e, t, n) {
        "use strict";
        var r, i, o, s = n(49),
            a = n(11),
            u = n(20),
            c = n(47),
            d = n(10),
            l = n(14),
            f = n(63),
            h = n(46),
            v = n(37),
            p = n(183),
            b = n(112).set,
            m = n(179)(),
            _ = a.TypeError,
            y = a.process,
            g = a.Promise,
            y = a.process,
            S = "process" == c(y),
            E = function() {},
            w = !! function() {
                try {
                    var e = g.resolve(1),
                        t = (e.constructor = {})[n(9)("species")] = function(e) { e(E, E) };
                    return (S || "function" == typeof PromiseRejectionEvent) && e.then(E) instanceof t
                } catch (e) {}
            }(),
            k = function(e, t) { return e === t || e === g && t === o },
            C = function(e) { var t; return !(!l(e) || "function" != typeof(t = e.then)) && t },
            P = function(e) { return k(g, e) ? new T(e) : new i(e) },
            T = i = function(e) {
                var t, n;
                this.promise = new e(function(e, r) {
                    if (void 0 !== t || void 0 !== n) throw _("Bad Promise constructor");
                    t = e, n = r
                }), this.resolve = f(t), this.reject = f(n)
            },
            O = function(e) { try { e() } catch (e) { return { error: e } } },
            R = function(e, t) {
                if (!e._n) {
                    e._n = !0;
                    var n = e._c;
                    m(function() {
                        for (var r = e._v, i = 1 == e._s, o = 0; n.length > o;) ! function(t) {
                            var n, o, s = i ? t.ok : t.fail,
                                a = t.resolve,
                                u = t.reject,
                                c = t.domain;
                            try { s ? (i || (2 == e._h && N(e), e._h = 1), !0 === s ? n = r : (c && c.enter(), n = s(r), c && c.exit()), n === t.promise ? u(_("Promise-chain cycle")) : (o = C(n)) ? o.call(n, a, u) : a(n)) : u(r) } catch (e) { u(e) }
                        }(n[o++]);
                        e._c = [], e._n = !1, t && !e._h && A(e)
                    })
                }
            },
            A = function(e) { b.call(a, function() { var t, n, r, i = e._v; if (M(e) && (t = O(function() { S ? y.emit("unhandledRejection", i, e) : (n = a.onunhandledrejection) ? n({ promise: e, reason: i }) : (r = a.console) && r.error && r.error("Unhandled promise rejection", i) }), e._h = S || M(e) ? 2 : 1), e._a = void 0, t) throw t.error }) },
            M = function(e) {
                if (1 == e._h) return !1;
                for (var t, n = e._a || e._c, r = 0; n.length > r;)
                    if (t = n[r++], t.fail || !M(t.promise)) return !1;
                return !0
            },
            N = function(e) {
                b.call(a, function() {
                    var t;
                    S ? y.emit("rejectionHandled", e) : (t = a.onrejectionhandled) && t({ promise: e, reason: e._v })
                })
            },
            j = function(e) {
                var t = this;
                t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), R(t, !0))
            },
            I = function(e) {
                var t, n = this;
                if (!n._d) {
                    n._d = !0, n = n._w || n;
                    try {
                        if (n === e) throw _("Promise can't be resolved itself");
                        (t = C(e)) ? m(function() { var r = { _w: n, _d: !1 }; try { t.call(e, u(I, r, 1), u(j, r, 1)) } catch (e) { j.call(r, e) } }): (n._v = e, n._s = 1, R(n, !1))
                    } catch (e) { j.call({ _w: n, _d: !1 }, e) }
                }
            };
        w || (g = function(e) { h(this, g, "Promise", "_h"), f(e), r.call(this); try { e(u(I, this, 1), u(j, this, 1)) } catch (e) { j.call(this, e) } }, r = function(e) { this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1 }, r.prototype = n(53)(g.prototype, { then: function(e, t) { var n = P(p(this, g)); return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = S ? y.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && R(this, !1), n.promise }, catch: function(e) { return this.then(void 0, e) } }), T = function() {
            var e = new r;
            this.promise = e, this.resolve = u(I, e, 1), this.reject = u(j, e, 1)
        }), d(d.G + d.W + d.F * !w, { Promise: g }), n(39)(g, "Promise"), n(111)("Promise"), o = n(3).Promise, d(d.S + d.F * !w, "Promise", { reject: function(e) { var t = P(this); return (0, t.reject)(e), t.promise } }), d(d.S + d.F * (s || !w), "Promise", { resolve: function(e) { if (e instanceof g && k(e.constructor, this)) return e; var t = P(this); return (0, t.resolve)(e), t.promise } }), d(d.S + d.F * !(w && n(105)(function(e) { g.all(e).catch(E) })), "Promise", {
            all: function(e) {
                var t = this,
                    n = P(t),
                    r = n.resolve,
                    i = n.reject,
                    o = O(function() {
                        var n = [],
                            o = 0,
                            s = 1;
                        v(e, !1, function(e) {
                            var a = o++,
                                u = !1;
                            n.push(void 0), s++, t.resolve(e).then(function(e) { u || (u = !0, n[a] = e, --s || r(n)) }, i)
                        }), --s || r(n)
                    });
                return o && i(o.error), n.promise
            },
            race: function(e) {
                var t = this,
                    n = P(t),
                    r = n.reject,
                    i = O(function() { v(e, !1, function(e) { t.resolve(e).then(n.resolve, r) }) });
                return i && r(i.error), n.promise
            }
        })
    }, function(e, t, n) {
        "use strict";
        var r = n(98);
        e.exports = n(65)("Set", function(e) { return function() { return e(this, arguments.length > 0 ? arguments[0] : void 0) } }, { add: function(e) { return r.def(this, e = 0 === e ? 0 : e, e) } }, r)
    }, function(e, t, n) {
        "use strict";
        var r = n(11),
            i = n(21),
            o = n(17),
            s = n(10),
            a = n(72),
            u = n(31).KEY,
            c = n(25),
            d = n(74),
            l = n(39),
            f = n(55),
            h = n(9),
            v = n(78),
            p = n(77),
            b = n(178),
            m = n(175),
            _ = n(103),
            y = n(16),
            g = n(23),
            S = n(76),
            E = n(38),
            w = n(50),
            k = n(181),
            C = n(70),
            P = n(15),
            T = n(32),
            O = C.f,
            R = P.f,
            A = k.f,
            M = r.Symbol,
            N = r.JSON,
            j = N && N.stringify,
            I = h("_hidden"),
            L = h("toPrimitive"),
            H = {}.propertyIsEnumerable,
            F = d("symbol-registry"),
            D = d("symbols"),
            x = d("op-symbols"),
            U = Object.prototype,
            B = "function" == typeof M,
            V = r.QObject,
            W = !V || !V.prototype || !V.prototype.findChild,
            G = o && c(function() { return 7 != w(R({}, "a", { get: function() { return R(this, "a", { value: 7 }).a } })).a }) ? function(e, t, n) {
                var r = O(U, t);
                r && delete U[t], R(e, t, n), r && e !== U && R(U, t, r)
            } : R,
            z = function(e) { var t = D[e] = w(M.prototype); return t._k = e, t },
            Y = B && "symbol" == typeof M.iterator ? function(e) { return "symbol" == typeof e } : function(e) { return e instanceof M },
            q = function(e, t, n) { return e === U && q(x, t, n), y(e), t = S(t, !0), y(n), i(D, t) ? (n.enumerable ? (i(e, I) && e[I][t] && (e[I][t] = !1), n = w(n, { enumerable: E(0, !1) })) : (i(e, I) || R(e, I, E(1, {})), e[I][t] = !0), G(e, t, n)) : R(e, t, n) },
            K = function(e, t) { y(e); for (var n, r = m(t = g(t)), i = 0, o = r.length; o > i;) q(e, n = r[i++], t[n]); return e },
            J = function(e, t) { return void 0 === t ? w(e) : K(w(e), t) },
            X = function(e) { var t = H.call(this, e = S(e, !0)); return !(this === U && i(D, e) && !i(x, e)) && (!(t || !i(this, e) || !i(D, e) || i(this, I) && this[I][e]) || t) },
            Q = function(e, t) { if (e = g(e), t = S(t, !0), e !== U || !i(D, t) || i(x, t)) { var n = O(e, t); return !n || !i(D, t) || i(e, I) && e[I][t] || (n.enumerable = !0), n } },
            $ = function(e) { for (var t, n = A(g(e)), r = [], o = 0; n.length > o;) i(D, t = n[o++]) || t == I || t == u || r.push(t); return r },
            Z = function(e) { for (var t, n = e === U, r = A(n ? x : g(e)), o = [], s = 0; r.length > s;) !i(D, t = r[s++]) || n && !i(U, t) || o.push(D[t]); return o };
        B || (M = function() {
            if (this instanceof M) throw TypeError("Symbol is not a constructor!");
            var e = f(arguments.length > 0 ? arguments[0] : void 0),
                t = function(n) { this === U && t.call(x, n), i(this, I) && i(this[I], e) && (this[I][e] = !1), G(this, e, E(1, n)) };
            return o && W && G(U, e, { configurable: !0, set: t }), z(e)
        }, a(M.prototype, "toString", function() { return this._k }), C.f = Q, P.f = q, n(108).f = k.f = $, n(51).f = X, n(71).f = Z, o && !n(49) && a(U, "propertyIsEnumerable", X, !0), v.f = function(e) { return z(h(e)) }), s(s.G + s.W + s.F * !B, { Symbol: M });
        for (var ee = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), te = 0; ee.length > te;) h(ee[te++]);
        for (var ee = T(h.store), te = 0; ee.length > te;) p(ee[te++]);
        s(s.S + s.F * !B, "Symbol", { for: function(e) { return i(F, e += "") ? F[e] : F[e] = M(e) }, keyFor: function(e) { if (Y(e)) return b(F, e); throw TypeError(e + " is not a symbol!") }, useSetter: function() { W = !0 }, useSimple: function() { W = !1 } }), s(s.S + s.F * !B, "Object", { create: J, defineProperty: q, defineProperties: K, getOwnPropertyDescriptor: Q, getOwnPropertyNames: $, getOwnPropertySymbols: Z }), N && s(s.S + s.F * (!B || c(function() { var e = M(); return "[null]" != j([e]) || "{}" != j({ a: e }) || "{}" != j(Object(e)) })), "JSON", { stringify: function(e) { if (void 0 !== e && !Y(e)) { for (var t, n, r = [e], i = 1; arguments.length > i;) r.push(arguments[i++]); return t = r[1], "function" == typeof t && (n = t), !n && _(t) || (t = function(e, t) { if (n && (t = n.call(this, e, t)), !Y(t)) return t }), r[1] = t, j.apply(N, r) } } }), M.prototype[L] || n(22)(M.prototype, L, M.prototype.valueOf), l(M, "Symbol"), l(Math, "Math", !0), l(r.JSON, "JSON", !0)
    }, function(e, t, n) {
        "use strict";
        var r, i = n(64)(0),
            o = n(72),
            s = n(31),
            a = n(107),
            u = n(173),
            c = n(14),
            d = s.getWeak,
            l = Object.isExtensible,
            f = u.ufstore,
            h = {},
            v = function(e) { return function() { return e(this, arguments.length > 0 ? arguments[0] : void 0) } },
            p = { get: function(e) { if (c(e)) { var t = d(e); return !0 === t ? f(this).get(e) : t ? t[this._i] : void 0 } }, set: function(e, t) { return u.def(this, e, t) } },
            b = e.exports = n(65)("WeakMap", v, p, u, !0, !0);
        7 != (new b).set((Object.freeze || Object)(h), 7).get(h) && (r = u.getConstructor(v), a(r.prototype, p), s.NEED = !0, i(["delete", "has", "get", "set"], function(e) {
            var t = b.prototype,
                n = t[e];
            o(t, e, function(t, i) { if (c(t) && !l(t)) { this._f || (this._f = new r); var o = this._f[e](t, i); return "set" == e ? this : o } return n.call(this, t, i) })
        }))
    }, function(e, t, n) {
        var r = n(10);
        r(r.P + r.R, "Map", { toJSON: n(99)("Map") })
    }, function(e, t, n) {
        var r = n(10);
        r(r.P + r.R, "Set", { toJSON: n(99)("Set") })
    }, function(e, t, n) { n(77)("asyncIterator") }, function(e, t, n) { n(77)("observable") }, function(e, t, n) {
        var r = function() { return this }() || Function("return this")(),
            i = r.regeneratorRuntime && Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
            o = i && r.regeneratorRuntime;
        if (r.regeneratorRuntime = void 0, e.exports = n(210), i) r.regeneratorRuntime = o;
        else try { delete r.regeneratorRuntime } catch (e) { r.regeneratorRuntime = void 0 }
    }, function(e, t) {
        ! function(t) {
            "use strict";

            function n(e, t, n, r) {
                var o = t && t.prototype instanceof i ? t : i,
                    s = Object.create(o.prototype),
                    a = new h(r || []);
                return s._invoke = c(e, n, a), s
            }

            function r(e, t, n) { try { return { type: "normal", arg: e.call(t, n) } } catch (e) { return { type: "throw", arg: e } } }

            function i() {}

            function o() {}

            function s() {}

            function a(e) {
                ["next", "throw", "return"].forEach(function(t) { e[t] = function(e) { return this._invoke(t, e) } })
            }

            function u(e) {
                function t(n, i, o, s) {
                    var a = r(e[n], e, i);
                    if ("throw" !== a.type) {
                        var u = a.arg,
                            c = u.value;
                        return c && "object" == typeof c && _.call(c, "__await") ? Promise.resolve(c.__await).then(function(e) { t("next", e, o, s) }, function(e) { t("throw", e, o, s) }) : Promise.resolve(c).then(function(e) { u.value = e, o(u) }, s)
                    }
                    s(a.arg)
                }

                function n(e, n) {
                    function r() { return new Promise(function(r, i) { t(e, n, r, i) }) }
                    return i = i ? i.then(r, r) : r()
                }
                var i;
                this._invoke = n
            }

            function c(e, t, n) {
                var i = C;
                return function(o, s) {
                    if (i === T) throw new Error("Generator is already running");
                    if (i === O) { if ("throw" === o) throw s; return p() }
                    for (n.method = o, n.arg = s;;) {
                        var a = n.delegate;
                        if (a) { var u = d(a, n); if (u) { if (u === R) continue; return u } }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if (i === C) throw i = O, n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        i = T;
                        var c = r(e, t, n);
                        if ("normal" === c.type) { if (i = n.done ? O : P, c.arg === R) continue; return { value: c.arg, done: n.done } }
                        "throw" === c.type && (i = O, n.method = "throw", n.arg = c.arg)
                    }
                }
            }

            function d(e, t) {
                var n = e.iterator[t.method];
                if (n === b) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = b, d(e, t), "throw" === t.method)) return R;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return R
                }
                var i = r(n, e.iterator, t.arg);
                if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, R;
                var o = i.arg;
                return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = b), t.delegate = null, R) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, R)
            }

            function l(e) {
                var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
            }

            function f(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t
            }

            function h(e) { this.tryEntries = [{ tryLoc: "root" }], e.forEach(l, this), this.reset(!0) }

            function v(e) {
                if (e) {
                    var t = e[g];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var n = -1,
                            r = function t() {
                                for (; ++n < e.length;)
                                    if (_.call(e, n)) return t.value = e[n], t.done = !1, t;
                                return t.value = b, t.done = !0, t
                            };
                        return r.next = r
                    }
                }
                return { next: p }
            }

            function p() { return { value: b, done: !0 } }
            var b, m = Object.prototype,
                _ = m.hasOwnProperty,
                y = "function" == typeof Symbol ? Symbol : {},
                g = y.iterator || "@@iterator",
                S = y.asyncIterator || "@@asyncIterator",
                E = y.toStringTag || "@@toStringTag",
                w = "object" == typeof e,
                k = t.regeneratorRuntime;
            if (k) return void(w && (e.exports = k));
            k = t.regeneratorRuntime = w ? e.exports : {}, k.wrap = n;
            var C = "suspendedStart",
                P = "suspendedYield",
                T = "executing",
                O = "completed",
                R = {},
                A = {};
            A[g] = function() { return this };
            var M = Object.getPrototypeOf,
                N = M && M(M(v([])));
            N && N !== m && _.call(N, g) && (A = N);
            var j = s.prototype = i.prototype = Object.create(A);
            o.prototype = j.constructor = s, s.constructor = o, s[E] = o.displayName = "GeneratorFunction", k.isGeneratorFunction = function(e) { var t = "function" == typeof e && e.constructor; return !!t && (t === o || "GeneratorFunction" === (t.displayName || t.name)) }, k.mark = function(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, s) : (e.__proto__ = s, E in e || (e[E] = "GeneratorFunction")), e.prototype = Object.create(j), e }, k.awrap = function(e) { return { __await: e } }, a(u.prototype), u.prototype[S] = function() { return this }, k.AsyncIterator = u, k.async = function(e, t, r, i) { var o = new u(n(e, t, r, i)); return k.isGeneratorFunction(t) ? o : o.next().then(function(e) { return e.done ? e.value : o.next() }) }, a(j), j[E] = "Generator", j[g] = function() { return this }, j.toString = function() { return "[object Generator]" }, k.keys = function(e) {
                var t = [];
                for (var n in e) t.push(n);
                return t.reverse(),
                    function n() { for (; t.length;) { var r = t.pop(); if (r in e) return n.value = r, n.done = !1, n } return n.done = !0, n }
            }, k.values = v, h.prototype = {
                constructor: h,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = b, this.done = !1, this.delegate = null, this.method = "next", this.arg = b, this.tryEntries.forEach(f), !e)
                        for (var t in this) "t" === t.charAt(0) && _.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = b)
                },
                stop: function() {
                    this.done = !0;
                    var e = this.tryEntries[0],
                        t = e.completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    function t(t, r) { return o.type = "throw", o.arg = e, n.next = t, r && (n.method = "next", n.arg = b), !!r }
                    if (this.done) throw e;
                    for (var n = this, r = this.tryEntries.length - 1; r >= 0; --r) {
                        var i = this.tryEntries[r],
                            o = i.completion;
                        if ("root" === i.tryLoc) return t("end");
                        if (i.tryLoc <= this.prev) {
                            var s = _.call(i, "catchLoc"),
                                a = _.call(i, "finallyLoc");
                            if (s && a) { if (this.prev < i.catchLoc) return t(i.catchLoc, !0); if (this.prev < i.finallyLoc) return t(i.finallyLoc) } else if (s) { if (this.prev < i.catchLoc) return t(i.catchLoc, !0) } else { if (!a) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return t(i.finallyLoc) }
                        }
                    }
                },
                abrupt: function(e, t) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) { var r = this.tryEntries[n]; if (r.tryLoc <= this.prev && _.call(r, "finallyLoc") && this.prev < r.finallyLoc) { var i = r; break } }
                    i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                    var o = i ? i.completion : {};
                    return o.type = e, o.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, R) : this.complete(o)
                },
                complete: function(e, t) { if ("throw" === e.type) throw e.arg; return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), R },
                finish: function(e) { for (var t = this.tryEntries.length - 1; t >= 0; --t) { var n = this.tryEntries[t]; if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), f(n), R } },
                catch: function(e) {
                    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var n = this.tryEntries[t];
                        if (n.tryLoc === e) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var i = r.arg;
                                f(n)
                            }
                            return i
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(e, t, n) { return this.delegate = { iterator: v(e), resultName: t, nextLoc: n }, "next" === this.method && (this.arg = b), R }
            }
        }(function() { return this }() || Function("return this")())
    }, function(e, t, n) { e.exports = n(113) }])
});