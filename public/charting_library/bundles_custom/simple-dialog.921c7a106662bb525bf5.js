(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[8890, 959, 6437], {
    259142: function(e, t) {
        var n, r, o;
        r = [t],
        n = function(e) {
            "use strict";
            function t(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                    return n
                }
                return Array.from(e)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = !1;
            if ("undefined" != typeof window) {
                var r = {
                    get passive() {
                        n = !0
                    }
                };
                window.addEventListener("testPassive", null, r),
                window.removeEventListener("testPassive", null, r)
            }
            var o = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform)
              , i = []
              , a = !1
              , s = -1
              , l = void 0
              , u = void 0
              , c = function(e) {
                return i.some((function(t) {
                    return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e))
                }
                ))
            }
              , d = function(e) {
                var t = e || window.event;
                return !!c(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(),
                !1)
            }
              , f = function() {
                setTimeout((function() {
                    void 0 !== u && (document.body.style.paddingRight = u,
                    u = void 0),
                    void 0 !== l && (document.body.style.overflow = l,
                    l = void 0)
                }
                ))
            };
            e.disableBodyScroll = function(e, r) {
                if (o) {
                    if (!e)
                        return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
                    if (e && !i.some((function(t) {
                        return t.targetElement === e
                    }
                    ))) {
                        var f = {
                            targetElement: e,
                            options: r || {}
                        };
                        i = [].concat(t(i), [f]),
                        e.ontouchstart = function(e) {
                            1 === e.targetTouches.length && (s = e.targetTouches[0].clientY)
                        }
                        ,
                        e.ontouchmove = function(t) {
                            var n, r, o, i;
                            1 === t.targetTouches.length && (r = e,
                            i = (n = t).targetTouches[0].clientY - s,
                            !c(n.target) && (r && 0 === r.scrollTop && 0 < i || (o = r) && o.scrollHeight - o.scrollTop <= o.clientHeight && i < 0 ? d(n) : n.stopPropagation()))
                        }
                        ,
                        a || (document.addEventListener("touchmove", d, n ? {
                            passive: !1
                        } : void 0),
                        a = !0)
                    }
                } else {
                    m = r,
                    setTimeout((function() {
                        if (void 0 === u) {
                            var e = !!m && !0 === m.reserveScrollBarGap
                              , t = window.innerWidth - document.documentElement.clientWidth;
                            e && 0 < t && (u = document.body.style.paddingRight,
                            document.body.style.paddingRight = t + "px")
                        }
                        void 0 === l && (l = document.body.style.overflow,
                        document.body.style.overflow = "hidden")
                    }
                    ));
                    var p = {
                        targetElement: e,
                        options: r || {}
                    };
                    i = [].concat(t(i), [p])
                }
                var m
            }
            ,
            e.clearAllBodyScrollLocks = function() {
                o ? (i.forEach((function(e) {
                    e.targetElement.ontouchstart = null,
                    e.targetElement.ontouchmove = null
                }
                )),
                a && (document.removeEventListener("touchmove", d, n ? {
                    passive: !1
                } : void 0),
                a = !1),
                i = [],
                s = -1) : (f(),
                i = [])
            }
            ,
            e.enableBodyScroll = function(e) {
                if (o) {
                    if (!e)
                        return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
                    e.ontouchstart = null,
                    e.ontouchmove = null,
                    i = i.filter((function(t) {
                        return t.targetElement !== e
                    }
                    )),
                    a && 0 === i.length && (document.removeEventListener("touchmove", d, n ? {
                        passive: !1
                    } : void 0),
                    a = !1)
                } else
                    1 === i.length && i[0].targetElement === e ? (f(),
                    i = []) : i = i.filter((function(t) {
                        return t.targetElement !== e
                    }
                    ))
            }
        }
        ,
        void 0 === (o = "function" == typeof n ? n.apply(t, r) : n) || (e.exports = o)
    },
    497754: (e,t)=>{
        var n;
        !function() {
            "use strict";
            var r = {}.hasOwnProperty;
            function o() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (n) {
                        var i = typeof n;
                        if ("string" === i || "number" === i)
                            e.push(n);
                        else if (Array.isArray(n) && n.length) {
                            var a = o.apply(null, n);
                            a && e.push(a)
                        } else if ("object" === i)
                            for (var s in n)
                                r.call(n, s) && n[s] && e.push(s)
                    }
                }
                return e.join(" ")
            }
            e.exports ? (o.default = o,
            e.exports = o) : void 0 === (n = function() {
                return o
            }
            .apply(t, [])) || (e.exports = n)
        }()
    }
    ,
    488803: e=>{
        e.exports = {
            "tablet-normal-breakpoint": "screen and (max-width: 768px)",
            "small-height-breakpoint": "screen and (max-height: 360px)",
            "tablet-small-breakpoint": "screen and (max-width: 430px)"
        }
    }
    ,
    30507: e=>{
        e.exports = {
            actionButton: "actionButton-k53vexPa",
            small: "small-k53vexPa",
            hiddenTitle: "hiddenTitle-k53vexPa"
        }
    }
    ,
    955021: e=>{
        e.exports = {
            label: "label-nb7ji1l2"
        }
    }
    ,
    854936: e=>{
        e.exports = {
            popupDialog: "popupDialog-B02UUUN3",
            wrap: "wrap-B02UUUN3",
            main: "main-B02UUUN3",
            small: "small-B02UUUN3",
            title: "title-B02UUUN3",
            content: "content-B02UUUN3",
            html: "html-B02UUUN3",
            footer: "footer-B02UUUN3",
            close: "close-B02UUUN3",
            marginWithoutCloseButton: "marginWithoutCloseButton-B02UUUN3"
        }
    }
    ,
    934587: e=>{
        e.exports = {
            icon: "icon-WB2y0EnP",
            dropped: "dropped-WB2y0EnP"
        }
    }
    ,
    252130: (e,t,n)=>{
        "use strict";
        n.d(t, {
            useIsMounted: ()=>o
        });
        var r = n(50959);
        const o = ()=>{
            const e = (0,
            r.useRef)(!1);
            return (0,
            r.useEffect)((()=>(e.current = !0,
            ()=>{
                e.current = !1
            }
            )), []),
            e
        }
    }
    ,
    778199: (e,t,n)=>{
        "use strict";
        function r(e, t, n, r, o) {
            function i(o) {
                if (e > o.timeStamp)
                    return;
                const i = o.target;
                void 0 !== n && null !== t && null !== i && i.ownerDocument === r && (t.contains(i) || n(o))
            }
            return o.click && r.addEventListener("click", i, !1),
            o.mouseDown && r.addEventListener("mousedown", i, !1),
            o.touchEnd && r.addEventListener("touchend", i, !1),
            o.touchStart && r.addEventListener("touchstart", i, !1),
            ()=>{
                r.removeEventListener("click", i, !1),
                r.removeEventListener("mousedown", i, !1),
                r.removeEventListener("touchend", i, !1),
                r.removeEventListener("touchstart", i, !1)
            }
        }
        n.d(t, {
            addOutsideEventListener: ()=>r
        })
    }
    ,
    908783: (e,t,n)=>{
        "use strict";
        n.d(t, {
            useOutsideEvent: ()=>i
        });
        var r = n(50959)
          , o = n(778199);
        function i(e) {
            const {click: t, mouseDown: n, touchEnd: i, touchStart: a, handler: s, reference: l, ownerDocument: u=document} = e
              , c = (0,
            r.useRef)(null)
              , d = (0,
            r.useRef)(new CustomEvent("timestamp").timeStamp);
            return (0,
            r.useLayoutEffect)((()=>{
                const e = {
                    click: t,
                    mouseDown: n,
                    touchEnd: i,
                    touchStart: a
                }
                  , r = l ? l.current : c.current;
                return (0,
                o.addOutsideEventListener)(d.current, r, s, u, e)
            }
            ), [t, n, i, a, s]),
            l || c
        }
    }
    ,
    72571: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Icon: ()=>o
        });
        var r = n(50959);
        const o = r.forwardRef(((e,t)=>{
            const {icon: n="", ...o} = e;
            return r.createElement("span", {
                ...o,
                ref: t,
                dangerouslySetInnerHTML: {
                    __html: n
                }
            })
        }
        ))
    }
    ,
    800417: (e,t,n)=>{
        "use strict";
        function r(e) {
            return i(e, a)
        }
        function o(e) {
            return i(e, s)
        }
        function i(e, t) {
            const n = Object.entries(e).filter(t)
              , r = {};
            for (const [e,t] of n)
                r[e] = t;
            return r
        }
        function a(e) {
            const [t,n] = e;
            return 0 === t.indexOf("data-") && "string" == typeof n
        }
        function s(e) {
            return 0 === e[0].indexOf("aria-")
        }
        n.d(t, {
            filterAriaProps: ()=>o,
            filterDataProps: ()=>r,
            filterProps: ()=>i,
            isAriaAttribute: ()=>s,
            isDataAttribute: ()=>a
        })
    }
    ,
    273388: (e,t,n)=>{
        "use strict";
        function r(e) {
            return t=>{
                e.forEach((e=>{
                    "function" == typeof e ? e(t) : null != e && (e.current = t)
                }
                ))
            }
        }
        function o(e) {
            return r([e])
        }
        n.d(t, {
            isomorphicRef: ()=>o,
            mergeRefs: ()=>r
        })
    }
    ,
    801808: (e,t,n)=>{
        "use strict";
        n.d(t, {
            OverlapManager: ()=>i,
            getRootOverlapManager: ()=>s
        });
        var r = n(650151);
        class o {
            constructor() {
                this._storage = []
            }
            add(e) {
                this._storage.push(e)
            }
            remove(e) {
                this._storage = this._storage.filter((t=>e !== t))
            }
            has(e) {
                return this._storage.includes(e)
            }
            getItems() {
                return this._storage
            }
        }
        class i {
            constructor(e=document) {
                this._storage = new o,
                this._windows = new Map,
                this._index = 0,
                this._document = e,
                this._container = e.createDocumentFragment()
            }
            setContainer(e) {
                const t = this._container
                  , n = null === e ? this._document.createDocumentFragment() : e;
                !function(e, t) {
                    Array.from(e.childNodes).forEach((e=>{
                        e.nodeType === Node.ELEMENT_NODE && t.appendChild(e)
                    }
                    ))
                }(t, n),
                this._container = n
            }
            registerWindow(e) {
                this._storage.has(e) || this._storage.add(e)
            }
            ensureWindow(e, t={
                position: "fixed",
                direction: "normal"
            }) {
                const n = this._windows.get(e);
                if (void 0 !== n)
                    return n;
                this.registerWindow(e);
                const r = this._document.createElement("div");
                if (r.style.position = t.position,
                r.style.zIndex = this._index.toString(),
                r.dataset.id = e,
                void 0 !== t.index) {
                    const e = this._container.childNodes.length;
                    if (t.index >= e)
                        this._container.appendChild(r);
                    else if (t.index <= 0)
                        this._container.insertBefore(r, this._container.firstChild);
                    else {
                        const e = this._container.childNodes[t.index];
                        this._container.insertBefore(r, e)
                    }
                } else
                    "reverse" === t.direction ? this._container.insertBefore(r, this._container.firstChild) : this._container.appendChild(r);
                return this._windows.set(e, r),
                ++this._index,
                r
            }
            unregisterWindow(e) {
                this._storage.remove(e);
                const t = this._windows.get(e);
                void 0 !== t && (null !== t.parentElement && t.parentElement.removeChild(t),
                this._windows.delete(e))
            }
            getZindex(e) {
                const t = this.ensureWindow(e);
                return parseInt(t.style.zIndex || "0")
            }
            moveToTop(e) {
                if (this.getZindex(e) !== this._index) {
                    this.ensureWindow(e).style.zIndex = (++this._index).toString()
                }
            }
            removeWindow(e) {
                this.unregisterWindow(e)
            }
        }
        const a = new WeakMap;
        function s(e=document) {
            const t = e.getElementById("overlap-manager-root");
            if (null !== t)
                return (0,
                r.ensureDefined)(a.get(t));
            {
                const t = new i(e)
                  , n = function(e) {
                    const t = e.createElement("div");
                    return t.style.position = "absolute",
                    t.style.zIndex = 150..toString(),
                    t.style.top = "0px",
                    t.style.left = "0px",
                    t.id = "overlap-manager-root",
                    t
                }(e);
                return a.set(n, t),
                t.setContainer(n),
                e.body.appendChild(n),
                t
            }
        }
    }
    ,
    285089: (e,t,n)=>{
        "use strict";
        n.d(t, {
            setFixedBodyState: ()=>l
        });
        var r = n(735922);
        const o = ()=>!window.matchMedia("screen and (min-width: 768px)").matches
          , i = ()=>!window.matchMedia("screen and (min-width: 1280px)").matches;
        let a = 0
          , s = !1;
        function l(e) {
            const {body: t} = document
              , n = t.querySelector(".widgetbar-wrap");
            if (e && 1 == ++a) {
                const e = (0,
                r.getCSSProperty)(t, "overflow")
                  , o = (0,
                r.getCSSPropertyNumericValue)(t, "padding-right");
                "hidden" !== e.toLowerCase() && t.scrollHeight > t.offsetHeight && ((0,
                r.setStyle)(n, "right", `${(0,
                r.getScrollbarWidth)()}px`),
                t.style.paddingRight = `${o + (0,
                r.getScrollbarWidth)()}px`,
                s = !0),
                t.classList.add("i-no-scroll")
            } else if (!e && a > 0 && 0 == --a && (t.classList.remove("i-no-scroll"),
            s)) {
                (0,
                r.setStyle)(n, "right", "0px");
                let e = 0;
                e = n ? (l = (0,
                r.getContentWidth)(n),
                o() ? 0 : i() ? 46 : Math.min(Math.max(l, 46), 450)) : 0,
                t.scrollHeight <= t.clientHeight && (e -= (0,
                r.getScrollbarWidth)()),
                t.style.paddingRight = (e < 0 ? 0 : e) + "px",
                s = !1
            }
            var l
        }
    }
    ,
    996038: (e,t,n)=>{
        "use strict";
        n.d(t, {
            DialogBreakpoints: ()=>o
        });
        var r = n(488803);
        const o = {
            SmallHeight: r["small-height-breakpoint"],
            TabletSmall: r["tablet-small-breakpoint"],
            TabletNormal: r["tablet-normal-breakpoint"]
        }
    }
    ,
    531275: (e,t,n)=>{
        "use strict";
        n.d(t, {
            SimpleDialogContext: ()=>r
        });
        const r = n(50959).createContext({
            isSmallTablet: !1,
            dialogCloseHandler: ()=>{}
        })
    }
    ,
    480994: (e,t,n)=>{
        "use strict";
        n.r(t),
        n.d(t, {
            confirmModule: ()=>g,
            renameModule: ()=>y,
            showSimpleDialog: ()=>w,
            warningModule: ()=>_
        });
        var r = n(50959)
          , o = n(509806)
          , i = n(859878);
        function a(e) {
            return "html"in e ? {
                html: e.html
            } : {
                content: e.text
            }
        }
        var s = n(531275)
          , l = n(73007)
          , u = n(955021);
        function c(e) {
            const {maxLength: t, value: n, placeholder: o, onValueChange: i, nameInputRef: a, source: c=[], autocompleteFilter: d} = e
              , {isSmallTablet: f} = (0,
            r.useContext)(s.SimpleDialogContext)
              , p = r.useRef(null);
            return (0,
            r.useLayoutEffect)((()=>{
                p.current && p.current.select()
            }
            ), []),
            r.createElement(r.Fragment, null, function() {
                if ("content"in e)
                    return r.createElement("div", {
                        className: u.label
                    }, e.content);
                if ("html"in e)
                    return r.createElement("div", {
                        className: u.label,
                        dangerouslySetInnerHTML: {
                            __html: e.html
                        }
                    });
                return null
            }(), r.createElement(l.Autocomplete, {
                maxLength: t,
                value: n,
                onChange: function(e) {
                    i(e)
                },
                allowUserDefinedValues: !0,
                preventOnFocusOpen: !0,
                noEmptyText: !0,
                source: c,
                preventSearchOnEmptyQuery: !0,
                filter: d,
                setupHTMLInput: function(e) {
                    p.current = e,
                    a && (a.current = e)
                },
                size: f ? "large" : void 0,
                placeholder: o,
                suggestionsInPortal: !0
            }))
        }
        function d(e) {
            return Boolean(e.trim())
        }
        function f(e) {
            const {buttonText: t, intentButton: r, actions: i} = e
              , a = [{
                name: "ok",
                title: t || o.t(null, void 0, n(468988)),
                intent: r,
                handler: ({dialogClose: e})=>{
                    e()
                }
            }];
            return i && i.forEach((e=>a.push(e))),
            a
        }
        var p = n(500962)
          , m = n(650151)
          , h = n(753327);
        const v = new (n(63192).DialogsOpenerManager);
        const g = function(e) {
            const {title: t, onClose: s=(()=>{}
            ), mainButtonText: l, mainButtonIntent: u, cancelButtonText: c, closeOnOutsideClick: d, onConfirm: f, onCancel: p} = e
              , m = a(e);
            return r.createElement(i.SimpleDialog, {
                ...m,
                title: t || o.t(null, void 0, n(994443)),
                onClose: s,
                actions: [{
                    name: "yes",
                    title: l || o.t(null, void 0, n(879831)),
                    intent: u || "success",
                    handler: f
                }, {
                    name: "no",
                    title: c || o.t(null, void 0, n(606255)),
                    appearance: "stroke",
                    intent: "default",
                    handler: e=>{
                        p ? p(e) : e.dialogClose()
                    }
                }],
                dataName: "confirm-dialog",
                closeOnOutsideClick: d
            })
        }
          , y = function(e) {
            const {title: t, maxLength: s, initValue: l, placeholder: u, onClose: f=(()=>{}
            ), mainButtonText: p, mainButtonIntent: m, cancelButtonText: h, validator: v=d, onRename: g, source: y, autocompleteFilter: _} = e
              , w = (0,
            r.useRef)(null)
              , [b,C] = (0,
            r.useState)(l || "")
              , [E,S] = (0,
            r.useState)((()=>v(b)))
              , x = a(e);
            return r.createElement(i.SimpleDialog, {
                title: t || o.t(null, void 0, n(435038)),
                content: r.createElement(c, {
                    ...x,
                    nameInputRef: w,
                    maxLength: s,
                    placeholder: u,
                    value: b,
                    onValueChange: function(e) {
                        C(e),
                        S(v(e))
                    },
                    source: y,
                    autocompleteFilter: _
                }),
                onClose: f,
                actions: [{
                    disabled: !E,
                    name: "save",
                    title: p || o.t(null, void 0, n(185520)),
                    intent: m || "primary",
                    handler: ({dialogClose: e, innerManager: t})=>g({
                        newValue: b,
                        focusInput: k,
                        dialogClose: e,
                        innerManager: t
                    })
                }, {
                    name: "cancel",
                    title: h || o.t(null, void 0, n(620036)),
                    appearance: "stroke",
                    intent: "default",
                    handler: ({dialogClose: e})=>{
                        e()
                    }
                }],
                dataName: "rename-dialog"
            });
            function k() {
                w.current && w.current.focus()
            }
        }
          , _ = function(e) {
            const {title: t, closeOnOutsideClick: s, onClose: l=(()=>{}
            )} = e
              , u = a(e);
            return r.createElement(i.SimpleDialog, {
                ...u,
                title: t || o.t(null, void 0, n(533603)),
                onClose: l,
                actions: f(e),
                dataName: "warning-dialog",
                closeOnOutsideClick: s
            })
        }
          , w = function(e, t, n) {
            const {title: o} = e
              , i = `${o}_ ${"text"in e ? e.text : e.html}`;
            if (v.isOpened(i))
                return (0,
                m.ensureDefined)(v.getDialogPayload(i)).closeHandler;
            const a = document.createElement("div")
              , s = ()=>{
                var t;
                null === (t = e.onClose) || void 0 === t || t.call(e),
                p.unmountComponentAtNode(a),
                v.setAsClosed(i)
            }
            ;
            return p.render(r.createElement(h.SlotContext.Provider, {
                value: n || null
            }, r.createElement(t, {
                ...e,
                onClose: s
            })), a),
            v.setAsOpened(i, {
                closeHandler: s
            }),
            s
        }
    }
    ,
    859878: (e,t,n)=>{
        "use strict";
        n.d(t, {
            SimpleDialog: ()=>E
        });
        var r = n(50959)
          , o = n(497754)
          , i = n(72571)
          , a = n(559410)
          , s = n(40766)
          , l = n(180185)
          , u = n(930052)
          , c = n(206594)
          , d = n(996038)
          , f = n(742554)
          , p = n(805184)
          , m = n(234404)
          , h = n(650151)
          , v = n(252130)
          , g = n(753327)
          , y = n(531275)
          , _ = n(30507);
        function w(e) {
            const {disabled: t, name: n, title: i, appearance: a, intent: s, handler: l, reference: u} = e
              , {isSmallTablet: c, dialogCloseHandler: d} = (0,
            r.useContext)(y.SimpleDialogContext)
              , f = (0,
            h.ensureNotNull)((0,
            r.useContext)(g.SlotContext))
              , w = (0,
            v.useIsMounted)()
              , [b,C] = (0,
            r.useState)(!1);
            return r.createElement(p.Button, {
                disabled: t,
                reference: u,
                className: o(_.actionButton, c && _.small),
                name: n,
                size: c ? "l" : void 0,
                appearance: a,
                intent: s,
                onClick: function() {
                    if (b)
                        return;
                    const e = l({
                        dialogClose: d,
                        innerManager: f
                    });
                    e && (C(!0),
                    e.then((()=>{
                        w.current && C(!1)
                    }
                    )))
                }
            }, r.createElement("span", {
                className: o(b && _.hiddenTitle)
            }, i), b && r.createElement(m.Loader, {
                color: "white"
            }))
        }
        var b = n(507720)
          , C = n(854936);
        function E(e) {
            const {title: t, onClose: n, actions: p, dataName: m, popupDialogClassName: h, contentClassName: v, wrapperClassName: g, backdrop: _, closeOnOutsideClick: E=!0, showCloseButton: S=!0, closeOnEscapePress: x=!0, events: k=!0} = e;
            (0,
            r.useEffect)((()=>(a.subscribe(c.CLOSE_POPUPS_AND_DIALOGS_COMMAND, n, null),
            ()=>{
                a.unsubscribe(c.CLOSE_POPUPS_AND_DIALOGS_COMMAND, n, null)
            }
            )), [n]);
            const [O,N] = (0,
            r.useState)(!0)
              , T = (0,
            r.useRef)(null);
            return r.createElement(u.MatchMedia, {
                rule: d.DialogBreakpoints.TabletSmall
            }, (a=>r.createElement(y.SimpleDialogContext.Provider, {
                value: {
                    isSmallTablet: a,
                    dialogCloseHandler: n
                }
            }, r.createElement(s.PopupDialog, {
                className: o(C.popupDialog, h),
                isOpened: O,
                backdrop: _,
                onClickBackdrop: k ? B : void 0,
                onClickOutside: E ? B : void 0,
                onKeyDown: D,
                autofocus: !0,
                fixedBody: !0
            }, r.createElement("div", {
                className: o(C.wrap, g),
                "data-name": m
            }, r.createElement("div", {
                className: o(C.main, !S && C.marginWithoutCloseButton, a && C.small)
            }, t && r.createElement("div", {
                className: o(C.title, a && C.small)
            }, t), function(t) {
                if ("html"in e)
                    return r.createElement(f.TouchScrollContainer, {
                        className: o(C.content, t && C.small, C.html, v),
                        dangerouslySetInnerHTML: {
                            __html: e.html
                        }
                    });
                if ("content"in e)
                    return r.createElement(f.TouchScrollContainer, {
                        className: o(C.content, t && C.small, v)
                    }, e.content);
                return null
            }(a), p && p.length > 0 && r.createElement("div", {
                className: o(C.footer, a && C.small)
            }, p.map(((e,t)=>r.createElement(w, {
                ...e,
                key: e.name,
                reference: 0 === t ? T : void 0
            }))))), S && r.createElement(i.Icon, {
                className: o(C.close, a && C.small),
                icon: b,
                onClick: B,
                "data-name": "close",
                "data-role": "button"
            }))))));
            function D(e) {
                switch ((0,
                l.hashFromEvent)(e)) {
                case 27:
                    O && x && (e.preventDefault(),
                    n());
                    break;
                case 13:
                    if (O && p && p.length) {
                        e.preventDefault();
                        const t = T.current;
                        t && t.click()
                    }
                }
            }
            function B() {
                N(!1),
                n()
            }
        }
    }
    ,
    63192: (e,t,n)=>{
        "use strict";
        n.d(t, {
            DialogsOpenerManager: ()=>r,
            dialogsOpenerManager: ()=>o
        });
        class r {
            constructor() {
                this._storage = new Map
            }
            setAsOpened(e, t) {
                this._storage.set(e, t)
            }
            setAsClosed(e) {
                this._storage.delete(e)
            }
            isOpened(e) {
                return this._storage.has(e)
            }
            getDialogPayload(e) {
                return this._storage.get(e)
            }
        }
        const o = new r
    }
    ,
    930052: (e,t,n)=>{
        "use strict";
        n.d(t, {
            MatchMedia: ()=>o
        });
        var r = n(50959);
        class o extends r.PureComponent {
            constructor(e) {
                super(e),
                this._handleChange = ()=>{
                    this.forceUpdate()
                }
                ,
                this.state = {
                    query: window.matchMedia(this.props.rule)
                }
            }
            componentDidMount() {
                this._subscribe(this.state.query)
            }
            componentDidUpdate(e, t) {
                this.state.query !== t.query && (this._unsubscribe(t.query),
                this._subscribe(this.state.query))
            }
            componentWillUnmount() {
                this._unsubscribe(this.state.query)
            }
            render() {
                return this.props.children(this.state.query.matches)
            }
            static getDerivedStateFromProps(e, t) {
                return e.rule !== t.query.media ? {
                    query: window.matchMedia(e.rule)
                } : null
            }
            _subscribe(e) {
                e.addListener(this._handleChange)
            }
            _unsubscribe(e) {
                e.removeListener(this._handleChange)
            }
        }
    }
    ,
    8361: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Portal: ()=>l,
            PortalContext: ()=>u
        });
        var r = n(50959)
          , o = n(500962)
          , i = n(189904)
          , a = n(801808)
          , s = n(753327);
        class l extends r.PureComponent {
            constructor() {
                super(...arguments),
                this._uuid = (0,
                i.guid)()
            }
            componentWillUnmount() {
                this._manager().removeWindow(this._uuid)
            }
            render() {
                const e = this._manager().ensureWindow(this._uuid, this.props.layerOptions);
                return e.style.top = this.props.top || "",
                e.style.bottom = this.props.bottom || "",
                e.style.left = this.props.left || "",
                e.style.right = this.props.right || "",
                e.style.pointerEvents = this.props.pointerEvents || "",
                o.createPortal(r.createElement(u.Provider, {
                    value: this
                }, this.props.children), e)
            }
            moveToTop() {
                this._manager().moveToTop(this._uuid)
            }
            _manager() {
                return null === this.context ? (0,
                a.getRootOverlapManager)() : this.context
            }
        }
        l.contextType = s.SlotContext;
        const u = r.createContext(null)
    }
    ,
    753327: (e,t,n)=>{
        "use strict";
        n.d(t, {
            Slot: ()=>o,
            SlotContext: ()=>i
        });
        var r = n(50959);
        class o extends r.Component {
            shouldComponentUpdate() {
                return !1
            }
            render() {
                return r.createElement("div", {
                    style: {
                        position: "fixed",
                        zIndex: 150,
                        left: 0,
                        top: 0
                    },
                    ref: this.props.reference
                })
            }
        }
        const i = r.createContext(null)
    }
    ,
    515783: (e,t,n)=>{
        "use strict";
        n.d(t, {
            ToolWidgetCaret: ()=>l
        });
        var r = n(50959)
          , o = n(497754)
          , i = n(72571)
          , a = n(934587)
          , s = n(100578);
        function l(e) {
            const {dropped: t, className: n} = e;
            return r.createElement(i.Icon, {
                className: o(n, a.icon, {
                    [a.dropped]: t
                }),
                icon: s
            })
        }
    }
    ,
    742554: (e,t,n)=>{
        "use strict";
        n.d(t, {
            TouchScrollContainer: ()=>s
        });
        var r = n(50959)
          , o = n(259142)
          , i = n(650151)
          , a = n(601227);
        const s = (0,
        r.forwardRef)(((e,t)=>{
            const {children: n, ...i} = e
              , s = (0,
            r.useRef)(null);
            return (0,
            r.useImperativeHandle)(t, (()=>s.current)),
            (0,
            r.useLayoutEffect)((()=>{
                if (a.CheckMobile.iOS())
                    return null !== s.current && (0,
                    o.disableBodyScroll)(s.current, {
                        allowTouchMove: l(s)
                    }),
                    ()=>{
                        null !== s.current && (0,
                        o.enableBodyScroll)(s.current)
                    }
            }
            ), []),
            r.createElement("div", {
                ref: s,
                ...i
            }, n)
        }
        ));
        function l(e) {
            return t=>{
                const n = (0,
                i.ensureNotNull)(e.current)
                  , r = document.activeElement;
                return !n.contains(t) || null !== r && n.contains(r) && r.contains(t)
            }
        }
    }
    ,
    695257: (e,t)=>{
        "use strict";
        var n = Symbol.for("react.element")
          , r = Symbol.for("react.portal")
          , o = Symbol.for("react.fragment")
          , i = Symbol.for("react.strict_mode")
          , a = Symbol.for("react.profiler")
          , s = Symbol.for("react.provider")
          , l = Symbol.for("react.context")
          , u = Symbol.for("react.forward_ref")
          , c = Symbol.for("react.suspense")
          , d = Symbol.for("react.memo")
          , f = Symbol.for("react.lazy")
          , p = Symbol.iterator;
        var m = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }
          , h = Object.assign
          , v = {};
        function g(e, t, n) {
            this.props = e,
            this.context = t,
            this.refs = v,
            this.updater = n || m
        }
        function y() {}
        function _(e, t, n) {
            this.props = e,
            this.context = t,
            this.refs = v,
            this.updater = n || m
        }
        g.prototype.isReactComponent = {},
        g.prototype.setState = function(e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
                throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, e, t, "setState")
        }
        ,
        g.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate")
        }
        ,
        y.prototype = g.prototype;
        var w = _.prototype = new y;
        w.constructor = _,
        h(w, g.prototype),
        w.isPureReactComponent = !0;
        var b = Array.isArray
          , C = Object.prototype.hasOwnProperty
          , E = {
            current: null
        }
          , S = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
        function x(e, t, r) {
            var o, i = {}, a = null, s = null;
            if (null != t)
                for (o in void 0 !== t.ref && (s = t.ref),
                void 0 !== t.key && (a = "" + t.key),
                t)
                    C.call(t, o) && !S.hasOwnProperty(o) && (i[o] = t[o]);
            var l = arguments.length - 2;
            if (1 === l)
                i.children = r;
            else if (1 < l) {
                for (var u = Array(l), c = 0; c < l; c++)
                    u[c] = arguments[c + 2];
                i.children = u
            }
            if (e && e.defaultProps)
                for (o in l = e.defaultProps)
                    void 0 === i[o] && (i[o] = l[o]);
            return {
                $$typeof: n,
                type: e,
                key: a,
                ref: s,
                props: i,
                _owner: E.current
            }
        }
        function k(e) {
            return "object" == typeof e && null !== e && e.$$typeof === n
        }
        var O = /\/+/g;
        function N(e, t) {
            return "object" == typeof e && null !== e && null != e.key ? function(e) {
                var t = {
                    "=": "=0",
                    ":": "=2"
                };
                return "$" + e.replace(/[=:]/g, (function(e) {
                    return t[e]
                }
                ))
            }("" + e.key) : t.toString(36)
        }
        function T(e, t, o, i, a) {
            var s = typeof e;
            "undefined" !== s && "boolean" !== s || (e = null);
            var l = !1;
            if (null === e)
                l = !0;
            else
                switch (s) {
                case "string":
                case "number":
                    l = !0;
                    break;
                case "object":
                    switch (e.$$typeof) {
                    case n:
                    case r:
                        l = !0
                    }
                }
            if (l)
                return a = a(l = e),
                e = "" === i ? "." + N(l, 0) : i,
                b(a) ? (o = "",
                null != e && (o = e.replace(O, "$&/") + "/"),
                T(a, t, o, "", (function(e) {
                    return e
                }
                ))) : null != a && (k(a) && (a = function(e, t) {
                    return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner
                    }
                }(a, o + (!a.key || l && l.key === a.key ? "" : ("" + a.key).replace(O, "$&/") + "/") + e)),
                t.push(a)),
                1;
            if (l = 0,
            i = "" === i ? "." : i + ":",
            b(e))
                for (var u = 0; u < e.length; u++) {
                    var c = i + N(s = e[u], u);
                    l += T(s, t, o, c, a)
                }
            else if (c = function(e) {
                return null === e || "object" != typeof e ? null : "function" == typeof (e = p && e[p] || e["@@iterator"]) ? e : null
            }(e),
            "function" == typeof c)
                for (e = c.call(e),
                u = 0; !(s = e.next()).done; )
                    l += T(s = s.value, t, o, c = i + N(s, u++), a);
            else if ("object" === s)
                throw t = String(e),
                Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
            return l
        }
        function D(e, t, n) {
            if (null == e)
                return e;
            var r = []
              , o = 0;
            return T(e, r, "", "", (function(e) {
                return t.call(n, e, o++)
            }
            )),
            r
        }
        function B(e) {
            if (-1 === e._status) {
                var t = e._result;
                (t = t()).then((function(t) {
                    0 !== e._status && -1 !== e._status || (e._status = 1,
                    e._result = t)
                }
                ), (function(t) {
                    0 !== e._status && -1 !== e._status || (e._status = 2,
                    e._result = t)
                }
                )),
                -1 === e._status && (e._status = 0,
                e._result = t)
            }
            if (1 === e._status)
                return e._result.default;
            throw e._result
        }
        var L = {
            current: null
        }
          , M = {
            transition: null
        }
          , R = {
            ReactCurrentDispatcher: L,
            ReactCurrentBatchConfig: M,
            ReactCurrentOwner: E
        };
        t.Children = {
            map: D,
            forEach: function(e, t, n) {
                D(e, (function() {
                    t.apply(this, arguments)
                }
                ), n)
            },
            count: function(e) {
                var t = 0;
                return D(e, (function() {
                    t++
                }
                )),
                t
            },
            toArray: function(e) {
                return D(e, (function(e) {
                    return e
                }
                )) || []
            },
            only: function(e) {
                if (!k(e))
                    throw Error("React.Children.only expected to receive a single React element child.");
                return e
            }
        },
        t.Component = g,
        t.Fragment = o,
        t.Profiler = a,
        t.PureComponent = _,
        t.StrictMode = i,
        t.Suspense = c,
        t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R,
        t.cloneElement = function(e, t, r) {
            if (null == e)
                throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
            var o = h({}, e.props)
              , i = e.key
              , a = e.ref
              , s = e._owner;
            if (null != t) {
                if (void 0 !== t.ref && (a = t.ref,
                s = E.current),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
                    var l = e.type.defaultProps;
                for (u in t)
                    C.call(t, u) && !S.hasOwnProperty(u) && (o[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u])
            }
            var u = arguments.length - 2;
            if (1 === u)
                o.children = r;
            else if (1 < u) {
                l = Array(u);
                for (var c = 0; c < u; c++)
                    l[c] = arguments[c + 2];
                o.children = l
            }
            return {
                $$typeof: n,
                type: e.type,
                key: i,
                ref: a,
                props: o,
                _owner: s
            }
        }
        ,
        t.createContext = function(e) {
            return (e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null
            }).Provider = {
                $$typeof: s,
                _context: e
            },
            e.Consumer = e
        }
        ,
        t.createElement = x,
        t.createFactory = function(e) {
            var t = x.bind(null, e);
            return t.type = e,
            t
        }
        ,
        t.createRef = function() {
            return {
                current: null
            }
        }
        ,
        t.forwardRef = function(e) {
            return {
                $$typeof: u,
                render: e
            }
        }
        ,
        t.isValidElement = k,
        t.lazy = function(e) {
            return {
                $$typeof: f,
                _payload: {
                    _status: -1,
                    _result: e
                },
                _init: B
            }
        }
        ,
        t.memo = function(e, t) {
            return {
                $$typeof: d,
                type: e,
                compare: void 0 === t ? null : t
            }
        }
        ,
        t.startTransition = function(e) {
            var t = M.transition;
            M.transition = {};
            try {
                e()
            } finally {
                M.transition = t
            }
        }
        ,
        t.unstable_act = function() {
            throw Error("act(...) is not supported in production builds of React.")
        }
        ,
        t.useCallback = function(e, t) {
            return L.current.useCallback(e, t)
        }
        ,
        t.useContext = function(e) {
            return L.current.useContext(e)
        }
        ,
        t.useDebugValue = function() {}
        ,
        t.useDeferredValue = function(e) {
            return L.current.useDeferredValue(e)
        }
        ,
        t.useEffect = function(e, t) {
            return L.current.useEffect(e, t)
        }
        ,
        t.useId = function() {
            return L.current.useId()
        }
        ,
        t.useImperativeHandle = function(e, t, n) {
            return L.current.useImperativeHandle(e, t, n)
        }
        ,
        t.useInsertionEffect = function(e, t) {
            return L.current.useInsertionEffect(e, t)
        }
        ,
        t.useLayoutEffect = function(e, t) {
            return L.current.useLayoutEffect(e, t)
        }
        ,
        t.useMemo = function(e, t) {
            return L.current.useMemo(e, t)
        }
        ,
        t.useReducer = function(e, t, n) {
            return L.current.useReducer(e, t, n)
        }
        ,
        t.useRef = function(e) {
            return L.current.useRef(e)
        }
        ,
        t.useState = function(e) {
            return L.current.useState(e)
        }
        ,
        t.useSyncExternalStore = function(e, t, n) {
            return L.current.useSyncExternalStore(e, t, n)
        }
        ,
        t.useTransition = function() {
            return L.current.useTransition()
        }
        ,
        t.version = "18.2.0"
    }
    ,
    50959: (e,t,n)=>{
        "use strict";
        e.exports = n(695257)
    }
    ,
    100578: e=>{
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 8" width="16" height="8"><path fill="currentColor" d="M0 1.475l7.396 6.04.596.485.593-.49L16 1.39 14.807 0 7.393 6.122 8.58 6.12 1.186.08z"/></svg>'
    }
    ,
    507720: e=>{
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" fill="currentColor"><path d="m.58 1.42.82-.82 15 15-.82.82z"/><path d="m.58 15.58 15-15 .82.82-15 15z"/></svg>'
    }
    ,
    994443: e=>{
        e.exports = {
            ar: ["تأكيد"],
            ca_ES: ["Confirmació"],
            cs: ["Potvrzení"],
            de: ["Bestätigung"],
            el: ["Επιβεβαίωση"],
            en: "Confirmation",
            es: ["Confirmación"],
            fa: ["تاییدیه"],
            fr: "Confirmation",
            he_IL: ["אישור"],
            hu_HU: ["Megerősítés"],
            id_ID: ["Konfirmasi"],
            it: ["Conferma"],
            ja: ["確認"],
            ko: ["확인"],
            ms_MY: ["Pengesahan"],
            nl_NL: ["Bevestig"],
            pl: ["Potwierdzenie"],
            pt: ["Confirmação"],
            ro: "Confirmation",
            ru: ["Подтвердите действие"],
            sv: ["Bekräftelse"],
            th: ["การยืนยัน"],
            tr: ["Onaylama"],
            vi: ["Xác nhận"],
            zh: ["确认"],
            zh_TW: ["確認"]
        }
    }
    ,
    620036: e=>{
        e.exports = {
            ar: ["إلغاء"],
            ca_ES: ["Cancel·la"],
            cs: ["Zrušit"],
            de: ["Abbrechen"],
            el: ["Άκυρο"],
            en: "Cancel",
            es: ["Cancelar"],
            fa: ["لغو"],
            fr: ["Annuler"],
            he_IL: ["ביטול"],
            hu_HU: ["Törlés"],
            id_ID: ["Batal"],
            it: ["Annulla"],
            ja: ["キャンセル"],
            ko: ["취소"],
            ms_MY: ["Batal"],
            nl_NL: ["Annuleren"],
            pl: ["Anuluj"],
            pt: ["Cancelar"],
            ro: "Cancel",
            ru: ["Отмена"],
            sv: ["Avbryt"],
            th: ["ยกเลิก"],
            tr: ["İptal"],
            vi: ["Hủy bỏ"],
            zh: ["取消"],
            zh_TW: ["取消"]
        }
    }
    ,
    468988: e=>{
        e.exports = {
            ar: ["موافق"],
            ca_ES: ["Acceptar"],
            cs: "Ok",
            de: "Ok",
            el: "Ok",
            en: "Ok",
            es: ["Aceptar"],
            fa: "Ok",
            fr: ["D'accord"],
            he_IL: ["אוקיי"],
            hu_HU: ["Oké"],
            id_ID: "Ok",
            it: "Ok",
            ja: ["OK"],
            ko: ["확인"],
            ms_MY: "Ok",
            nl_NL: "Ok",
            pl: "Ok",
            pt: "Ok",
            ro: "Ok",
            ru: ["Ок"],
            sv: ["OK"],
            th: ["ตกลง"],
            tr: ["Tamam"],
            vi: "Ok",
            zh: ["确认"],
            zh_TW: ["確認"]
        }
    }
    ,
    606255: e=>{
        e.exports = {
            ar: ["لا"],
            ca_ES: "No",
            cs: ["Ne"],
            de: ["Nein"],
            el: "No",
            en: "No",
            es: "No",
            fa: "No",
            fr: ["Non"],
            he_IL: ["לא"],
            hu_HU: ["Nem"],
            id_ID: ["Tidak"],
            it: "No",
            ja: ["いいえ"],
            ko: ["아니오"],
            ms_MY: ["Tidak"],
            nl_NL: "No",
            pl: ["Nie"],
            pt: ["Não"],
            ro: "No",
            ru: ["Нет"],
            sv: ["Nej"],
            th: ["ไม่"],
            tr: ["Hayır"],
            vi: ["Không"],
            zh: ["否"],
            zh_TW: ["否"]
        }
    }
    ,
    435038: e=>{
        e.exports = {
            ar: ["تغيير الأسم"],
            ca_ES: ["Reanomenar"],
            cs: "Rename",
            de: ["Umbenennen"],
            el: "Rename",
            en: "Rename",
            es: ["Renombrar."],
            fa: "Rename",
            fr: ["Renommer"],
            he_IL: ["שנה שם"],
            hu_HU: ["Átnevezés"],
            id_ID: ["Mengganti Nama"],
            it: ["Rinomina"],
            ja: ["名前の変更"],
            ko: ["이름 바꾸기"],
            ms_MY: ["Namakan semula"],
            nl_NL: "Rename",
            pl: ["Zmień nazwę"],
            pt: ["Renomear"],
            ro: "Rename",
            ru: ["Переименовать"],
            sv: ["Döp om"],
            th: ["เปลี่ยนชื่อ"],
            tr: ["Yeni Ad Ver"],
            vi: ["Đổi tên"],
            zh: ["重命名"],
            zh_TW: ["重新命名"]
        }
    }
    ,
    879831: e=>{
        e.exports = {
            ar: ["نعم"],
            ca_ES: ["Sí"],
            cs: ["Ano"],
            de: ["Ja"],
            el: "Yes",
            en: "Yes",
            es: ["Sí"],
            fa: "Yes",
            fr: ["Oui"],
            he_IL: ["כן"],
            hu_HU: ["Igen"],
            id_ID: ["Ya"],
            it: ["Sì"],
            ja: ["はい"],
            ko: ["예"],
            ms_MY: ["Ya"],
            nl_NL: "Yes",
            pl: ["Tak"],
            pt: ["Sim"],
            ro: "Yes",
            ru: ["Да"],
            sv: ["Ja"],
            th: ["ใช่"],
            tr: ["Evet"],
            vi: ["Có"],
            zh: ["是"],
            zh_TW: ["是"]
        }
    }
}]);