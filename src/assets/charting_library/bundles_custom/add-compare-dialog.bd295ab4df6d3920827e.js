(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[731, 959, 6437], {
    259142: function(e, t) {
        var o, r, a;
        r = [t],
        o = function(e) {
            "use strict";
            function t(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, o = Array(e.length); t < e.length; t++)
                        o[t] = e[t];
                    return o
                }
                return Array.from(e)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = !1;
            if ("undefined" != typeof window) {
                var r = {
                    get passive() {
                        o = !0
                    }
                };
                window.addEventListener("testPassive", null, r),
                window.removeEventListener("testPassive", null, r)
            }
            var a = "undefined" != typeof window && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform)
              , n = []
              , i = !1
              , s = -1
              , l = void 0
              , c = void 0
              , u = function(e) {
                return n.some((function(t) {
                    return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e))
                }
                ))
            }
              , d = function(e) {
                var t = e || window.event;
                return !!u(t.target) || 1 < t.touches.length || (t.preventDefault && t.preventDefault(),
                !1)
            }
              , m = function() {
                setTimeout((function() {
                    void 0 !== c && (document.body.style.paddingRight = c,
                    c = void 0),
                    void 0 !== l && (document.body.style.overflow = l,
                    l = void 0)
                }
                ))
            };
            e.disableBodyScroll = function(e, r) {
                if (a) {
                    if (!e)
                        return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
                    if (e && !n.some((function(t) {
                        return t.targetElement === e
                    }
                    ))) {
                        var m = {
                            targetElement: e,
                            options: r || {}
                        };
                        n = [].concat(t(n), [m]),
                        e.ontouchstart = function(e) {
                            1 === e.targetTouches.length && (s = e.targetTouches[0].clientY)
                        }
                        ,
                        e.ontouchmove = function(t) {
                            var o, r, a, n;
                            1 === t.targetTouches.length && (r = e,
                            n = (o = t).targetTouches[0].clientY - s,
                            !u(o.target) && (r && 0 === r.scrollTop && 0 < n || (a = r) && a.scrollHeight - a.scrollTop <= a.clientHeight && n < 0 ? d(o) : o.stopPropagation()))
                        }
                        ,
                        i || (document.addEventListener("touchmove", d, o ? {
                            passive: !1
                        } : void 0),
                        i = !0)
                    }
                } else {
                    h = r,
                    setTimeout((function() {
                        if (void 0 === c) {
                            var e = !!h && !0 === h.reserveScrollBarGap
                              , t = window.innerWidth - document.documentElement.clientWidth;
                            e && 0 < t && (c = document.body.style.paddingRight,
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
                    n = [].concat(t(n), [p])
                }
                var h
            }
            ,
            e.clearAllBodyScrollLocks = function() {
                a ? (n.forEach((function(e) {
                    e.targetElement.ontouchstart = null,
                    e.targetElement.ontouchmove = null
                }
                )),
                i && (document.removeEventListener("touchmove", d, o ? {
                    passive: !1
                } : void 0),
                i = !1),
                n = [],
                s = -1) : (m(),
                n = [])
            }
            ,
            e.enableBodyScroll = function(e) {
                if (a) {
                    if (!e)
                        return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
                    e.ontouchstart = null,
                    e.ontouchmove = null,
                    n = n.filter((function(t) {
                        return t.targetElement !== e
                    }
                    )),
                    i && 0 === n.length && (document.removeEventListener("touchmove", d, o ? {
                        passive: !1
                    } : void 0),
                    i = !1)
                } else
                    1 === n.length && n[0].targetElement === e ? (m(),
                    n = []) : n = n.filter((function(t) {
                        return t.targetElement !== e
                    }
                    ))
            }
        }
        ,
        void 0 === (a = "function" == typeof o ? o.apply(t, r) : o) || (e.exports = a)
    },
    497754: (e,t)=>{
        var o;
        !function() {
            "use strict";
            var r = {}.hasOwnProperty;
            function a() {
                for (var e = [], t = 0; t < arguments.length; t++) {
                    var o = arguments[t];
                    if (o) {
                        var n = typeof o;
                        if ("string" === n || "number" === n)
                            e.push(o);
                        else if (Array.isArray(o) && o.length) {
                            var i = a.apply(null, o);
                            i && e.push(i)
                        } else if ("object" === n)
                            for (var s in o)
                                r.call(o, s) && o[s] && e.push(s)
                    }
                }
                return e.join(" ")
            }
            e.exports ? (a.default = a,
            e.exports = a) : void 0 === (o = function() {
                return a
            }
            .apply(t, [])) || (e.exports = o)
        }()
    }
    ,
    266783: e=>{
        "use strict";
        var t = Object.prototype.hasOwnProperty;
        function o(e, t) {
            return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
        }
        e.exports = function(e, r) {
            if (o(e, r))
                return !0;
            if ("object" != typeof e || null === e || "object" != typeof r || null === r)
                return !1;
            var a = Object.keys(e)
              , n = Object.keys(r);
            if (a.length !== n.length)
                return !1;
            for (var i = 0; i < a.length; i++)
                if (!t.call(r, a[i]) || !o(e[a[i]], r[a[i]]))
                    return !1;
            return !0
        }
    }
    ,
    758222: e=>{
        e.exports = {
            "light-button": "light-button-bYDQcOkp",
            link: "link-bYDQcOkp",
            content: "content-bYDQcOkp",
            nowrap: "nowrap-bYDQcOkp",
            "ellipsis-container": "ellipsis-container-bYDQcOkp",
            "text-wrap-container": "text-wrap-container-bYDQcOkp",
            "text-wrap-with-ellipsis": "text-wrap-with-ellipsis-bYDQcOkp",
            icon: "icon-bYDQcOkp",
            "force-direction-ltr": "force-direction-ltr-bYDQcOkp",
            "force-direction-rtl": "force-direction-rtl-bYDQcOkp",
            "with-grouped": "with-grouped-bYDQcOkp",
            "variant-quiet-primary": "variant-quiet-primary-bYDQcOkp",
            selected: "selected-bYDQcOkp",
            "typography-regular16px": "typography-regular16px-bYDQcOkp",
            "typography-medium16px": "typography-medium16px-bYDQcOkp",
            "typography-regular14px": "typography-regular14px-bYDQcOkp",
            activated: "activated-bYDQcOkp",
            "size-xsmall": "size-xsmall-bYDQcOkp",
            "with-start-icon": "with-start-icon-bYDQcOkp",
            "with-end-icon": "with-end-icon-bYDQcOkp",
            "no-content": "no-content-bYDQcOkp",
            wrap: "wrap-bYDQcOkp",
            "size-small": "size-small-bYDQcOkp",
            "size-medium": "size-medium-bYDQcOkp",
            "variant-primary": "variant-primary-bYDQcOkp",
            "color-gray": "color-gray-bYDQcOkp",
            caret: "caret-bYDQcOkp",
            grouped: "grouped-bYDQcOkp",
            "disable-active-on-touch": "disable-active-on-touch-bYDQcOkp",
            "disable-active-state-styles": "disable-active-state-styles-bYDQcOkp",
            "color-green": "color-green-bYDQcOkp",
            "color-red": "color-red-bYDQcOkp",
            "variant-secondary": "variant-secondary-bYDQcOkp",
            "variant-ghost": "variant-ghost-bYDQcOkp"
        }
    }
    ,
    470048: e=>{
        e.exports = {
            wrapper: "wrapper-GZajBGIm",
            input: "input-GZajBGIm",
            box: "box-GZajBGIm",
            icon: "icon-GZajBGIm",
            noOutline: "noOutline-GZajBGIm",
            "intent-danger": "intent-danger-GZajBGIm",
            check: "check-GZajBGIm",
            dot: "dot-GZajBGIm"
        }
    }
    ,
    357222: e=>{
        e.exports = {
            button: "button-Rc93kXa8",
            bordersVisible: "bordersVisible-Rc93kXa8",
            selected: "selected-Rc93kXa8"
        }
    }
    ,
    517723: e=>{
        e.exports = {
            footer: "footer-dwINHZFL"
        }
    }
    ,
    785286: e=>{
        e.exports = {
            wrap: "wrap-oc7l8ZQg",
            header: "header-oc7l8ZQg",
            item: "item-oc7l8ZQg"
        }
    }
    ,
    344467: e=>{
        e.exports = {
            label: "label-lVJKBKVk"
        }
    }
    ,
    678724: e=>{
        e.exports = {
            scrollable: "scrollable-sXALjK1u",
            spinnerWrap: "spinnerWrap-sXALjK1u",
            item: "item-sXALjK1u",
            heading: "heading-sXALjK1u",
            checkboxWrap: "checkboxWrap-sXALjK1u",
            checkbox: "checkbox-sXALjK1u",
            emptyState: "emptyState-sXALjK1u",
            image: "image-sXALjK1u",
            text: "text-sXALjK1u"
        }
    }
    ,
    610341: e=>{
        e.exports = {
            dialog: "dialog-IKuIIugL",
            tablet: "tablet-IKuIIugL"
        }
    }
    ,
    966076: e=>{
        e.exports = {
            "default-drawer-min-top-distance": "100px",
            wrap: "wrap-_HnK0UIN",
            positionBottom: "positionBottom-_HnK0UIN",
            backdrop: "backdrop-_HnK0UIN",
            drawer: "drawer-_HnK0UIN",
            positionLeft: "positionLeft-_HnK0UIN"
        }
    }
    ,
    671986: e=>{
        e.exports = {
            "tablet-small-breakpoint": "screen and (max-width: 430px)",
            item: "item-jFqVJoPk",
            hovered: "hovered-jFqVJoPk",
            isDisabled: "isDisabled-jFqVJoPk",
            isActive: "isActive-jFqVJoPk",
            shortcut: "shortcut-jFqVJoPk",
            toolbox: "toolbox-jFqVJoPk",
            withIcon: "withIcon-jFqVJoPk",
            "round-icon": "round-icon-jFqVJoPk",
            icon: "icon-jFqVJoPk",
            labelRow: "labelRow-jFqVJoPk",
            label: "label-jFqVJoPk",
            showOnHover: "showOnHover-jFqVJoPk",
            showOnFocus: "showOnFocus-jFqVJoPk"
        }
    }
    ,
    959189: (e,t,o)=>{
        "use strict";
        function r(e, t) {
            return t || null == e || ("string" == typeof e || Array.isArray(e)) && 0 === e.length
        }
        o.d(t, {
            isIconOnly: ()=>r
        })
    }
    ,
    223392: (e,t,o)=>{
        "use strict";
        o.d(t, {
            LightButton: ()=>b
        });
        var r = o(50959)
          , a = o(497754)
          , n = o(72571)
          , i = o(234539)
          , s = o(959189)
          , l = o(380327);
        const c = r.createContext({
            isInButtonGroup: !1
        });
        var u = o(602948)
          , d = o(758222)
          , m = o.n(d);
        const p = {
            xsmall: "regular14px",
            small: "regular16px",
            medium: "medium16px"
        }
          , h = (e,t)=>{
            const o = (0,
            r.useContext)(i.CustomBehaviourContext)
              , n = (0,
            r.useContext)(l.ControlGroupContext)
              , {isInButtonGroup: u} = (0,
            r.useContext)(c)
              , {className: d, isSelected: h, children: f, startIcon: b, showCaret: y, endIcon: v, forceDirection: S, iconOnly: g, color: k="gray", variant: _="primary", size: x="medium", enableActiveStateStyles: w=o.enableActiveStateStyles, typography: C, isLink: I=!1, textWrap: E, isActivated: N} = e;
            return a(d, m()["light-button"], I && m().link, h && m().selected, (0,
            s.isIconOnly)(f, g) && m()["no-content"], b && m()["with-start-icon"], (y || v) && m()["with-end-icon"], t && m()["with-grouped"], S && m()[`force-direction-${S}`], m()[`variant-${_}`], m()[`color-${k}`], m()[`size-${x}`], C ? m()[`typography-${C}`] : m()[`typography-${p[x]}`], !w && m()["disable-active-state-styles"], n.isGrouped && m().grouped, E && m().wrap, u && m()["disable-active-on-touch"], N && m().activated)
        }
        ;
        function f(e) {
            const {startIcon: t, endIcon: o, showCaret: i, iconOnly: l, ellipsis: c=!0, textWrap: d, children: p} = e;
            return r.createElement(r.Fragment, null, t && r.createElement(n.Icon, {
                className: m().icon,
                icon: t
            }), !(0,
            s.isIconOnly)(p, l) && r.createElement("span", {
                className: a(m().content, !d && m().nowrap)
            }, d || c ? r.createElement("span", {
                className: a(!d && c && m()["ellipsis-container"], d && m()["text-wrap-container"], d && c && m()["text-wrap-with-ellipsis"])
            }, p) : p), (o || i) && (e=>r.createElement(n.Icon, {
                className: a(m().icon, e.showCaret && m().caret),
                icon: e.showCaret ? u : e.endIcon
            }))(e))
        }
        function b(e) {
            const {isGrouped: t} = r.useContext(l.ControlGroupContext)
              , {reference: o, className: a, isSelected: n, children: i, startIcon: s, iconOnly: c, ellipsis: u, showCaret: d, forceDirection: m, endIcon: p, color: b, variant: y, size: v, enableActiveStateStyles: S, typography: g, textWrap: k=!1, maxLines: _, style: x={}, isActivated: w, ...C} = e
              , I = k ? null != _ ? _ : 2 : 1
              , E = I > 0 ? {
                ...x,
                "--ui-lib-light-button-content-max-lines": I
            } : x;
            return r.createElement("button", {
                ...C,
                className: h({
                    className: a,
                    isSelected: n,
                    children: i,
                    startIcon: s,
                    iconOnly: c,
                    showCaret: d,
                    forceDirection: m,
                    endIcon: p,
                    color: b,
                    variant: y,
                    size: v,
                    enableActiveStateStyles: S,
                    typography: g,
                    textWrap: k,
                    isActivated: w
                }, t),
                ref: o,
                style: E
            }, r.createElement(f, {
                showCaret: d,
                startIcon: s,
                endIcon: p,
                iconOnly: c,
                ellipsis: u,
                textWrap: k
            }, i))
        }
        o(591365)
    }
    ,
    408323: (e,t,o)=>{
        "use strict";
        o.d(t, {
            CheckboxInput: ()=>u
        });
        var r = o(50959)
          , a = o(497754)
          , n = o(800417)
          , i = o(72571)
          , s = o(465890)
          , l = o(470048)
          , c = o.n(l);
        function u(e) {
            const t = a(c().box, c()[`intent-${e.intent}`], {
                [c().check]: !Boolean(e.indeterminate),
                [c().dot]: Boolean(e.indeterminate),
                [c().noOutline]: -1 === e.tabIndex
            })
              , o = a(c().wrapper, e.className);
            return r.createElement("span", {
                className: o,
                title: e.title,
                style: e.style
            }, r.createElement("input", {
                id: e.id,
                tabIndex: e.tabIndex,
                className: c().input,
                type: "checkbox",
                name: e.name,
                checked: e.checked,
                disabled: e.disabled,
                value: e.value,
                autoFocus: e.autoFocus,
                role: e.role,
                onChange: function() {
                    e.onChange && e.onChange(e.value)
                },
                ref: e.reference,
                "aria-required": e["aria-required"],
                "aria-describedby": e["aria-describedby"],
                "aria-invalid": e["aria-invalid"],
                ...(0,
                n.filterDataProps)(e)
            }), r.createElement("span", {
                className: t
            }, r.createElement(i.Icon, {
                icon: s,
                className: c().icon
            })))
        }
    }
    ,
    380327: (e,t,o)=>{
        "use strict";
        o.d(t, {
            ControlGroupContext: ()=>r
        });
        const r = o(50959).createContext({
            isGrouped: !1,
            cellState: {
                isTop: !0,
                isRight: !0,
                isBottom: !0,
                isLeft: !0
            }
        })
    }
    ,
    409245: (e,t,o)=>{
        "use strict";
        function r(e) {
            const {reference: t, ...o} = e;
            return {
                ...o,
                ref: t
            }
        }
        o.d(t, {
            renameRef: ()=>r
        })
    }
    ,
    591365: (e,t,o)=>{
        "use strict";
        o.d(t, {
            CustomComponentDefaultLink: ()=>n
        });
        var r = o(50959)
          , a = o(409245);
        function n(e) {
            return r.createElement("a", {
                ...(0,
                a.renameRef)(e)
            })
        }
        r.PureComponent
    }
    ,
    234539: (e,t,o)=>{
        "use strict";
        o.d(t, {
            CustomBehaviourContext: ()=>r
        });
        const r = (0,
        o(50959).createContext)({
            enableActiveStateStyles: !0
        });
        r.displayName = "CustomBehaviourContext"
    }
    ,
    438980: (e,t,o)=>{
        "use strict";
        o.d(t, {
            Measure: ()=>a
        });
        var r = o(664332);
        function a(e) {
            const {children: t, onResize: o} = e;
            return t((0,
            r.useResizeObserver)(o || (()=>{}
            ), [null === o]))
        }
    }
    ,
    366171: (e,t,o)=>{
        "use strict";
        o.d(t, {
            SymbolSearchDialogFooter: ()=>s
        });
        var r = o(50959)
          , a = o(497754)
          , n = o.n(a)
          , i = o(517723);
        function s(e) {
            const {className: t, children: o} = e;
            return r.createElement("div", {
                className: n()(i.footer, t)
            }, o)
        }
    }
    ,
    881748: (e,t,o)=>{
        "use strict";
        o.r(t),
        o.d(t, {
            getCompareDialogRenderer: ()=>ie
        });
        var r = o(50959)
          , a = o(509806)
          , n = o(972535)
          , i = o(156963)
          , s = o(265831)
          , l = o(497754)
          , c = o.n(l)
          , u = o(650151)
          , d = o(72571)
          , m = o(742554)
          , p = o(297265)
          , h = o(665276)
          , f = o(651049)
          , b = o(702054)
          , y = o(438980)
          , v = o(944080)
          , S = o(56871);
        const g = r.createContext(null);
        var k = o(921258)
          , _ = o(840976);
        const x = r.createContext(null);
        var w = o(192063)
          , C = o(759339)
          , I = o(163694)
          , E = o(357222);
        function N(e) {
            const {theme: t=E, children: o, onClick: a, isSelected: n, areBordersVisible: i, isItemSelected: s, className: l, value: u, name: d} = e;
            return r.createElement("button", {
                type: "button",
                className: c()(l, t.button, n && t.selected, i && !n && !s && t.bordersVisible),
                name: d,
                value: u,
                onClick: a
            }, o)
        }
        function D(e) {
            const {value: t, onClick: o, ...a} = e
              , n = (0,
            r.useCallback)((e=>o(t, e)), [t, o]);
            return r.createElement(N, {
                ...a,
                value: String(t),
                onClick: n
            })
        }
        var z = o(6519)
          , M = o(785286);
        const L = {
            samePctScale: a.t(null, void 0, o(882642)),
            newPriceScale: a.t(null, void 0, o(534420)),
            newPane: a.t(null, void 0, o(167242)),
            sameScale: a.t(null, void 0, o(17547))
        };
        function O(e) {
            const {fullSymbolName: t, isSelected: n, className: i, isYield: l} = e
              , {isMobile: u, searchRef: d, setMode: m} = (0,
            _.useEnsuredContext)(v.SymbolSearchItemsDialogContext)
              , {compareModel: p, selectedCompareOption: h, setHoveredItemId: f, clearInput: b, allowExtendTimeScale: y} = (0,
            _.useEnsuredContext)(g)
              , {callback: S} = (0,
            _.useEnsuredContext)(x)
              , k = p.comparableOnSameScale({
                isYield: l
            })
              , E = k ? z.CompareOption.SameScale : z.CompareOption.SamePctScale
              , N = k ? L.sameScale : L.samePctScale;
            return u ? r.createElement(I.DrawerManager, null, r.createElement(C.Drawer, {
                position: "Bottom",
                onClose: O.bind(null, !1)
            }, r.createElement("div", {
                className: M.header
            }, a.t(null, void 0, o(279589))), r.createElement(w.PopupMenuItem, {
                className: M.item,
                onClick: T,
                onClickArg: E,
                label: N
            }), r.createElement(w.PopupMenuItem, {
                className: M.item,
                onClick: T,
                onClickArg: z.CompareOption.NewPriceScale,
                label: L.newPriceScale
            }), r.createElement(w.PopupMenuItem, {
                className: M.item,
                onClick: T,
                onClickArg: z.CompareOption.NewPane,
                label: L.newPane
            }))) : r.createElement("div", {
                className: c()(M.wrap, i),
                "data-name": "compare-buttons-group"
            }, r.createElement(D, {
                onClick: T,
                value: E,
                isItemSelected: Boolean(n),
                isSelected: n && h === E
            }, N), r.createElement(D, {
                onClick: T,
                value: z.CompareOption.NewPriceScale,
                isItemSelected: Boolean(n),
                isSelected: n && h === z.CompareOption.NewPriceScale
            }, L.newPriceScale), r.createElement(D, {
                onClick: T,
                value: z.CompareOption.NewPane,
                isItemSelected: Boolean(n),
                isSelected: n && h === z.CompareOption.NewPane
            }, L.newPane));
            function O(e) {
                u && S && S(),
                b && e && b(d, m)
            }
            function T(e, o) {
                if (o.preventDefault(),
                p && t && void 0 !== e) {
                    (0,
                    s.getSymbolSearchCompleteOverrideFunction)()(t).then((t=>{
                        p.applyStudy(t.symbol, e, y),
                        f(""),
                        O(!0)
                    }
                    ))
                }
            }
        }
        function T(e) {
            const {isSelected: t, fullSymbolName: o, onExpandClick: a, actions: i, id: l, isOffset: c, isYield: u} = e
              , {isMobile: d, toggleExpand: m, searchSpreads: p, searchRef: h, setMode: f, mode: b} = (0,
            _.useEnsuredContext)(v.SymbolSearchItemsDialogContext)
              , {compareModel: y, hoveredItemId: w, setHoveredItemId: C, clearInput: I, allowExtendTimeScale: E} = (0,
            _.useEnsuredContext)(g)
              , [N,D] = (0,
            r.useState)(!1)
              , M = (0,
            r.useRef)(null)
              , L = (0,
            k.useAccurateHover)(M)
              , T = (0,
            r.useMemo)((()=>({
                callback: B
            })), [B])
              , A = !Boolean(a) && !Boolean(i)
              , j = l === w;
            return r.createElement(x.Provider, {
                value: T
            }, r.createElement(S.SymbolSearchDialogContentItem, {
                hideMarkedListFlag: "compare" === b,
                ...e,
                reference: M,
                onClick: function(t) {
                    if (Boolean(a) && l && !c)
                        return null == t || t.preventDefault(),
                        void m(l);
                    if (!N && d)
                        return void D(!0);
                    if (p && e.onClick)
                        return void e.onClick(t);
                    if ((n.mobiletouch ? j : !N) && o) {
                        (0,
                        s.getSymbolSearchCompleteOverrideFunction)()(o).then((e=>{
                            const t = y.comparableOnSameScale({
                                isYield: u
                            }) ? z.CompareOption.SameScale : z.CompareOption.SamePctScale;
                            y.applyStudy(e.symbol, t, E)
                        }
                        )),
                        C(""),
                        I && I(h, f)
                    }
                    n.mobiletouch && !d && !j && l && C(l)
                },
                hoverComponent: function() {
                    if (!A)
                        return !1;
                    if (d)
                        return N;
                    if (n.mobiletouch)
                        return j;
                    return Boolean(L || t)
                }() ? O : void 0
            }));
            function B() {
                D(!1)
            }
        }
        var A = o(915550)
          , j = o(193986)
          , B = o(339750)
          , P = o(678724);
        function R(e) {
            const {handleListWidth: t} = (0,
            u.ensureNotNull)((0,
            r.useContext)(v.SymbolSearchItemsDialogContext))
              , {compareModel: n, selectedCompareIndex: i, selectedItemRef: s} = (0,
            u.ensureNotNull)((0,
            r.useContext)(g))
              , l = (0,
            p.useWatchedValueReadonly)({
                watchedValue: n.isDataReady()
            })
              , k = (0,
            p.useWatchedValueReadonly)({
                watchedValue: n.studies()
            })
              , _ = (0,
            p.useWatchedValueReadonly)({
                watchedValue: n.highlightedSymbol()
            })
              , x = (0,
            r.useMemo)((()=>k.filter((e=>e.checked))), [k])
              , w = (0,
            r.useMemo)((()=>k.filter((e=>!e.checked))), [k]);
            return (0,
            r.useEffect)((()=>(n.chartModel().dataSourceCollectionChanged().subscribe(n, n.handleSourcesChange),
            ()=>n.chartModel().dataSourceCollectionChanged().unsubscribe(n, n.handleSourcesChange))), [n]),
            r.createElement(y.Measure, {
                onResize: function([e]) {
                    t(e.contentRect.width)
                }
            }, (e=>r.createElement(m.TouchScrollContainer, {
                className: P.scrollable,
                ref: e
            }, function() {
                if (!l)
                    return r.createElement("div", {
                        className: P.spinnerWrap
                    }, r.createElement(h.Spinner, null));
                if (!Boolean(x.length) && !Boolean(w.length)) {
                    const e = b.watchedTheme.value() === f.StdTheme.Dark ? j : A;
                    return r.createElement("div", {
                        className: P.emptyState
                    }, r.createElement(d.Icon, {
                        className: P.image,
                        icon: e
                    }), r.createElement("div", {
                        className: P.text
                    }, a.t(null, void 0, o(542078))))
                }
                return r.createElement(r.Fragment, null, Boolean(x.length) && r.createElement(r.Fragment, null, r.createElement("div", {
                    className: P.heading
                }, a.t(null, void 0, o(646580))), x.map(((e,t)=>r.createElement(S.SymbolSearchDialogContentItem, {
                    "data-role": "added-symbol-item",
                    className: P.item,
                    key: e.id,
                    id: e.id,
                    shortName: e.title,
                    title: e.title,
                    logoId: e.logoId,
                    currencyLogoId: e.currencyLogoId,
                    baseCurrencyLogoId: e.baseCurrencyLogoId,
                    dangerousDescriptionHTML: e.description,
                    exchangeName: e.exchangeName,
                    marketType: e.marketType,
                    country: e.country,
                    providerId: e.providerId,
                    onClick: C.bind(null, e),
                    isHighlighted: e.id === _,
                    isSelected: I(e),
                    itemRef: I(e) ? s : void 0,
                    isYield: e.isYield,
                    actions: r.createElement("div", {
                        className: P.checkboxWrap
                    }, r.createElement(N, {
                        className: P.checkbox,
                        onClick: C.bind(null, e),
                        isSelected: I(e)
                    }, r.createElement(d.Icon, {
                        icon: B
                    })))
                })))), Boolean(w.length) && r.createElement(r.Fragment, null, r.createElement("div", {
                    className: P.heading
                }, a.t(null, void 0, o(957570))), w.map((e=>r.createElement(T, {
                    "data-role": "recent-symbol-item",
                    className: c()(P.item, e.id === _ && P.highlighted),
                    key: e.id,
                    id: e.id,
                    shortName: e.title,
                    logoId: e.logoId,
                    currencyLogoId: e.currencyLogoId,
                    baseCurrencyLogoId: e.baseCurrencyLogoId,
                    title: e.title,
                    dangerousDescriptionHTML: e.description,
                    exchangeName: e.exchangeName,
                    marketType: e.marketType,
                    country: e.country,
                    providerId: e.providerId,
                    fullSymbolName: e.symbol,
                    isSelected: I(e),
                    itemRef: I(e) ? s : void 0,
                    isYield: e.isYield
                })))))
            }())));
            function C(e, t) {
                null == t || t.preventDefault(),
                n.removeStudy(e)
            }
            function I(e) {
                return k.indexOf(e) === i
            }
        }
        var Y = o(870122);
        class H extends r.PureComponent {
            constructor(e) {
                super(e),
                this._selectedItemRef = r.createRef(),
                this._getContextValue = ()=>{
                    const {compareModel: e} = this.props
                      , {selectedCompareOption: t, selectedCompareIndex: o, hoveredItemId: r, allowExtendTimeScale: a} = this.state;
                    return {
                        compareModel: e,
                        selectedCompareOption: t,
                        setSelectedCompareOption: this._setSelectedCompareOption,
                        hoveredItemId: r,
                        setHoveredItemId: this._setHoveredItemId,
                        selectedCompareIndex: o,
                        setSelectedCompareIndex: this._setSelectedCompareIndex,
                        selectedItemRef: this._selectedItemRef,
                        clearInput: this._clearInput,
                        allowExtendTimeScale: a,
                        toggleAllowExtendTimeScale: this._toggleAllowExtendTimeScale
                    }
                }
                ,
                this._clearInput = (e,t)=>{
                    e && e.current && (e.current.value = "",
                    t("compare"))
                }
                ,
                this._setSelectedCompareOption = e=>{
                    this.setState({
                        selectedCompareOption: e
                    })
                }
                ,
                this._setHoveredItemId = e=>{
                    this.setState({
                        hoveredItemId: e
                    })
                }
                ,
                this._setSelectedCompareIndex = (e,t)=>{
                    this.setState({
                        selectedCompareIndex: e
                    }, t)
                }
                ,
                this._toggleAllowExtendTimeScale = ()=>{
                    const e = !this.state.allowExtendTimeScale;
                    Y.setValue("showAddSymbolDialog.extendCheckboxState", e),
                    this.setState({
                        allowExtendTimeScale: e
                    })
                }
                ,
                this.state = {
                    selectedCompareOption: 0,
                    selectedCompareIndex: -1,
                    hoveredItemId: void 0,
                    allowExtendTimeScale: Boolean(Y.getBool("showAddSymbolDialog.extendCheckboxState"))
                }
            }
            render() {
                const {children: e} = this.props;
                return r.createElement(g.Provider, {
                    value: this._getContextValue()
                }, e)
            }
        }
        var W = o(180185)
          , F = o(533408)
          , U = o(610341);
        const V = Object.keys(z.CompareOption).length / 2;
        function Q(e) {
            const {openedItems: t, searchRef: o, feedItems: a, selectedIndex: n, toggleExpand: i, onSearchComplete: s, mode: c, setMode: u, setSelectedIndex: d, isMobile: m, isTablet: h, onClose: f, upperCaseEnabled: b} = (0,
            _.useEnsuredContext)(v.SymbolSearchItemsDialogContext)
              , {compareModel: y, hoveredItemId: S, setHoveredItemId: k, selectedCompareOption: x, setSelectedCompareOption: w, selectedCompareIndex: C, setSelectedCompareIndex: I, selectedItemRef: E, clearInput: N, allowExtendTimeScale: D} = (0,
            _.useEnsuredContext)(g)
              , z = (0,
            p.useWatchedValueReadonly)({
                watchedValue: y.studies()
            })
              , M = a[n]
              , L = "compare" === c
              , O = "exchange" === c;
            return (0,
            r.useEffect)((()=>{
                S && k(""),
                C && I(-1)
            }
            ), [c]),
            r.createElement(F.AdaptivePopupDialog, {
                ...e,
                className: l(U.dialog, !m && h && U.tablet),
                onKeyDown: function(e) {
                    var r;
                    const l = (0,
                    W.hashFromEvent)(e)
                      , c = L ? C : n
                      , d = L ? z : a;
                    switch (l) {
                    case 38:
                        if (e.preventDefault(),
                        0 === c)
                            return;
                        if (-1 === c)
                            return void T(0);
                        T(c - 1);
                        break;
                    case 40:
                        if (e.preventDefault(),
                        c === d.length - 1)
                            return;
                        T(c + 1);
                        break;
                    case 37:
                        {
                            const o = j();
                            if (o && t.has(o))
                                return e.preventDefault(),
                                void i(o);
                            if (!x || o)
                                return;
                            e.preventDefault(),
                            w(x - 1);
                            break
                        }
                    case 39:
                        {
                            const o = j();
                            if (o && !t.has(o))
                                return e.preventDefault(),
                                void i(o);
                            if (x === V - 1 || o)
                                return;
                            e.preventDefault(),
                            w(x + 1);
                            break
                        }
                    case 13:
                        {
                            if (L)
                                return void function() {
                                    if (-1 === C)
                                        return;
                                    const e = z[C];
                                    e.checked ? y.removeStudy(e) : y.applyStudy(e.symbol, x, D);
                                    I(-1)
                                }();
                            const t = j();
                            if (t)
                                return e.preventDefault(),
                                void i(t);
                            e.preventDefault();
                            const a = null === (r = null == o ? void 0 : o.current) || void 0 === r ? void 0 : r.value.trim();
                            a && N && (s([{
                                symbol: b ? a.toUpperCase() : a,
                                resolved: !1,
                                compareOption: x,
                                allowExtendTimeScale: D
                            }]),
                            N(o, u));
                            break
                        }
                    case 27:
                        if (e.preventDefault(),
                        O)
                            return void u("symbolSearch");
                        f()
                    }
                },
                dataName: "compare-dialog",
                draggable: !0
            });
            function T(e) {
                L ? I(e, A) : d(e)
            }
            function A() {
                var e;
                null === (e = E.current) || void 0 === e || e.scrollIntoView({
                    block: "nearest"
                })
            }
            function j() {
                if (!M)
                    return;
                const {id: e, isOffset: t, onExpandClick: o} = M;
                return !t && Boolean(o) && e ? e : void 0
            }
        }
        var K = o(500962)
          , q = o(911597)
          , $ = o(19406);
        class G extends $.DialogRenderer {
            constructor(e) {
                super(),
                this._props = e
            }
            show(e) {
                if (this.visible().value())
                    return;
                const t = r.createElement(q.SymbolSearchItemsDialog, {
                    ...this._props,
                    shouldReturnFocus: null == e ? void 0 : e.shouldReturnFocus,
                    initialMode: this._props.initialMode || "symbolSearch",
                    onClose: ()=>this.hide()
                });
                K.render(t, this._container),
                this._setVisibility(!0)
            }
            hide() {
                var e, t;
                K.unmountComponentAtNode(this._container),
                this._visibility.setValue(!1),
                null === (t = (e = this._props).onClose) || void 0 === t || t.call(e)
            }
        }
        var Z = o(721167)
          , J = o(231862)
          , X = o(159223);
        function ee(e) {
            const {searchRef: t, setMode: o} = (0,
            _.useEnsuredContext)(v.SymbolSearchItemsDialogContext)
              , {currentMode: a} = (0,
            _.useEnsuredContext)(X.SymbolSearchDialogBodyContext);
            return (0,
            r.useEffect)((()=>{
                const e = t.current;
                if (e)
                    return e.addEventListener("input", n),
                    ()=>{
                        e && e.removeEventListener("input", n)
                    }
            }
            ), []),
            r.createElement(J.DialogSearch, {
                ...e
            });
            function n() {
                var e, r, n, i;
                t.current && a && ("compare" !== a.current || "" === (null === (r = null === (e = null == t ? void 0 : t.current) || void 0 === e ? void 0 : e.value) || void 0 === r ? void 0 : r.trim()) ? "symbolSearch" === a.current && "" === (null === (i = null === (n = null == t ? void 0 : t.current) || void 0 === n ? void 0 : n.value) || void 0 === i ? void 0 : i.trim()) && o("compare") : o("symbolSearch"))
            }
        }
        var te = o(408323)
          , oe = o(366171)
          , re = o(344467);
        function ae(e) {
            const {allowExtendTimeScale: t, toggleAllowExtendTimeScale: n} = (0,
            u.ensureNotNull)((0,
            r.useContext)(g));
            return r.createElement(oe.SymbolSearchDialogFooter, null, r.createElement("label", null, r.createElement(te.CheckboxInput, {
                checked: t,
                value: t ? "on" : "off",
                onChange: n
            }), r.createElement("span", {
                className: re.label
            }, a.t(null, void 0, o(471046)))))
        }
        const ne = i.enabled("secondary_series_extend_time_scale");
        function ie(e) {
            return new G({
                wrapper: (t = e,
                e=>r.createElement(H, {
                    ...e,
                    compareModel: t
                })),
                dialog: Q,
                contentItem: T,
                initialScreen: R,
                searchInput: ee,
                footer: ne ? r.createElement(ae) : void 0,
                initialMode: "compare",
                dialogTitle: a.t(null, void 0, o(822320)),
                autofocus: !n.mobiletouch,
                dialogWidth: "fixed",
                onSearchComplete: t=>{
                    const {compareOption: o, allowExtendTimeScale: r} = t[0];
                    if (void 0 !== o) {
                        (0,
                        s.getSymbolSearchCompleteOverrideFunction)()(t[0].symbol, t[0].result).then((t=>{
                            e.applyStudy(t.symbol, o, r)
                        }
                        ))
                    }
                }
                ,
                symbolTypes: (0,
                Z.getAvailableSymbolTypes)(),
                showSpreadActions: i.enabled("show_spread_operators") && i.enabled("compare_symbol_search_spread_operators")
            });
            var t
        }
    }
    ,
    6519: (e,t,o)=>{
        "use strict";
        var r;
        o.d(t, {
            CompareOption: ()=>r
        }),
        function(e) {
            e[e.SamePctScale = 0] = "SamePctScale",
            e[e.NewPriceScale = 1] = "NewPriceScale",
            e[e.NewPane = 2] = "NewPane",
            e[e.SameScale = 3] = "SameScale"
        }(r || (r = {}))
    }
    ,
    163694: (e,t,o)=>{
        "use strict";
        o.d(t, {
            DrawerContext: ()=>i,
            DrawerManager: ()=>n
        });
        var r = o(50959)
          , a = o(285089);
        class n extends r.PureComponent {
            constructor(e) {
                super(e),
                this._isBodyFixed = !1,
                this._addDrawer = e=>{
                    this.setState((t=>({
                        stack: [...t.stack, e]
                    })))
                }
                ,
                this._removeDrawer = e=>{
                    this.setState((t=>({
                        stack: t.stack.filter((t=>t !== e))
                    })))
                }
                ,
                this.state = {
                    stack: []
                }
            }
            componentDidUpdate(e, t) {
                !t.stack.length && this.state.stack.length && ((0,
                a.setFixedBodyState)(!0),
                this._isBodyFixed = !0),
                t.stack.length && !this.state.stack.length && this._isBodyFixed && ((0,
                a.setFixedBodyState)(!1),
                this._isBodyFixed = !1)
            }
            componentWillUnmount() {
                this.state.stack.length && this._isBodyFixed && (0,
                a.setFixedBodyState)(!1)
            }
            render() {
                return r.createElement(i.Provider, {
                    value: {
                        addDrawer: this._addDrawer,
                        removeDrawer: this._removeDrawer,
                        currentDrawer: this.state.stack.length ? this.state.stack[this.state.stack.length - 1] : null
                    }
                }, this.props.children)
            }
        }
        const i = r.createContext(null)
    }
    ,
    759339: (e,t,o)=>{
        "use strict";
        o.d(t, {
            Drawer: ()=>m
        });
        var r = o(50959)
          , a = o(650151)
          , n = o(497754)
          , i = o(189904)
          , s = o(8361)
          , l = o(163694)
          , c = o(28466)
          , u = o(742554)
          , d = o(966076);
        function m(e) {
            const {position: t="Bottom", onClose: o, children: u, className: m, theme: h=d} = e
              , f = (0,
            a.ensureNotNull)((0,
            r.useContext)(l.DrawerContext))
              , [b] = (0,
            r.useState)((()=>(0,
            i.randomHash)()))
              , y = (0,
            r.useRef)(null)
              , v = (0,
            r.useContext)(c.CloseDelegateContext);
            return (0,
            r.useLayoutEffect)((()=>((0,
            a.ensureNotNull)(y.current).focus({
                preventScroll: !0
            }),
            v.subscribe(f, o),
            f.addDrawer(b),
            ()=>{
                f.removeDrawer(b),
                v.unsubscribe(f, o)
            }
            )), []),
            r.createElement(s.Portal, null, r.createElement("div", {
                className: n(d.wrap, d[`position ${t}`])
            }, b === f.currentDrawer && r.createElement("div", {
                className: d.backdrop,
                onClick: o
            }), r.createElement(p, {
                className: n(h.drawer, d[`position ${t}`], m),
                ref: y,
                "data-name": e["data-name"]
            }, u)))
        }
        const p = (0,
        r.forwardRef)(((e,t)=>{
            const {className: o, ...a} = e;
            return r.createElement(u.TouchScrollContainer, {
                className: n(d.drawer, o),
                tabIndex: -1,
                ref: t,
                ...a
            })
        }
        ))
    }
    ,
    921258: (e,t,o)=>{
        "use strict";
        o.d(t, {
            hoverMouseEventFilter: ()=>n,
            useAccurateHover: ()=>i,
            useHover: ()=>a
        });
        var r = o(50959);
        function a() {
            const [e,t] = (0,
            r.useState)(!1);
            return [e, {
                onMouseOver: function(e) {
                    n(e) && t(!0)
                },
                onMouseOut: function(e) {
                    n(e) && t(!1)
                }
            }]
        }
        function n(e) {
            return !e.currentTarget.contains(e.relatedTarget)
        }
        function i(e) {
            const [t,o] = (0,
            r.useState)(!1);
            return (0,
            r.useEffect)((()=>{
                const t = t=>{
                    if (null === e.current)
                        return;
                    const r = e.current.contains(t.target);
                    o(r)
                }
                ;
                return document.addEventListener("mouseover", t),
                ()=>document.removeEventListener("mouseover", t)
            }
            ), []),
            t
        }
    }
    ,
    192063: (e,t,o)=>{
        "use strict";
        o.d(t, {
            DEFAULT_POPUP_MENU_ITEM_THEME: ()=>c,
            PopupMenuItem: ()=>d
        });
        var r = o(50959)
          , a = o(497754)
          , n = o(370981)
          , i = o(32133)
          , s = o(800417)
          , l = o(671986);
        const c = l;
        function u(e) {
            e.stopPropagation()
        }
        function d(e) {
            const {id: t, role: o, "aria-label": c, "aria-selected": d, "aria-checked": m, className: p, title: h, labelRowClassName: f, labelClassName: b, shortcut: y, forceShowShortcuts: v, icon: S, isActive: g, isDisabled: k, isHovered: _, appearAsDisabled: x, label: w, link: C, showToolboxOnHover: I, showToolboxOnFocus: E, target: N, rel: D, toolbox: z, reference: M, onMouseOut: L, onMouseOver: O, onKeyDown: T, suppressToolboxClick: A=!0, theme: j=l, tabIndex: B, tagName: P, renderComponent: R, roundedIcon: Y, iconAriaProps: H} = e
              , W = (0,
            s.filterDataProps)(e)
              , F = (0,
            r.useRef)(null)
              , U = (0,
            r.useMemo)((()=>function(e) {
                function t(t) {
                    const {reference: o, ...a} = t
                      , n = null != e ? e : a.href ? "a" : "div"
                      , i = "a" === n ? a : function(e) {
                        const {download: t, href: o, hrefLang: r, media: a, ping: n, rel: i, target: s, type: l, referrerPolicy: c, ...u} = e;
                        return u
                    }(a);
                    return r.createElement(n, {
                        ...i,
                        ref: o
                    })
                }
                return t.displayName = `DefaultComponent(${e})`,
                t
            }(P)), [P])
              , V = null != R ? R : U;
            return r.createElement(V, {
                ...W,
                id: t,
                role: o,
                "aria-label": c,
                "aria-selected": d,
                "aria-checked": m,
                className: a(p, j.item, S && j.withIcon, {
                    [j.isActive]: g,
                    [j.isDisabled]: k || x,
                    [j.hovered]: _
                }),
                title: h,
                href: C,
                target: N,
                rel: D,
                reference: function(e) {
                    F.current = e,
                    "function" == typeof M && M(e);
                    "object" == typeof M && (M.current = e)
                },
                onClick: function(t) {
                    const {dontClosePopup: o, onClick: r, onClickArg: a, trackEventObject: s} = e;
                    if (k)
                        return;
                    s && (0,
                    i.trackEvent)(s.category, s.event, s.label);
                    r && r(a, t);
                    o || (0,
                    n.globalCloseMenu)()
                },
                onContextMenu: function(t) {
                    const {trackEventObject: o, trackRightClick: r} = e;
                    o && r && (0,
                    i.trackEvent)(o.category, o.event, `${o.label}_rightClick`)
                },
                onMouseUp: function(t) {
                    const {trackEventObject: o, trackMouseWheelClick: r} = e;
                    if (1 === t.button && C && o) {
                        let e = o.label;
                        r && (e += "_mouseWheelClick"),
                        (0,
                        i.trackEvent)(o.category, o.event, e)
                    }
                },
                onMouseOver: O,
                onMouseOut: L,
                onKeyDown: T,
                tabIndex: B
            }, void 0 !== S && r.createElement("span", {
                "aria-label": H && H["aria-label"],
                "aria-hidden": H && Boolean(H["aria-hidden"]),
                className: a(j.icon, Y && l["round-icon"]),
                dangerouslySetInnerHTML: {
                    __html: S
                }
            }), r.createElement("span", {
                className: a(j.labelRow, f)
            }, r.createElement("span", {
                className: a(j.label, b)
            }, w)), (void 0 !== y || v) && r.createElement("span", {
                className: j.shortcut
            }, (Q = y) && Q.split("+").join(" + ")), void 0 !== z && r.createElement("span", {
                onClick: A ? u : void 0,
                className: a(j.toolbox, {
                    [j.showOnHover]: I,
                    [j.showOnFocus]: E
                })
            }, z));
            var Q
        }
    }
    ,
    28466: (e,t,o)=>{
        "use strict";
        o.d(t, {
            CloseDelegateContext: ()=>n
        });
        var r = o(50959)
          , a = o(370981);
        const n = r.createContext(a.globalCloseDelegate)
    }
    ,
    742554: (e,t,o)=>{
        "use strict";
        o.d(t, {
            TouchScrollContainer: ()=>s
        });
        var r = o(50959)
          , a = o(259142)
          , n = o(650151)
          , i = o(601227);
        const s = (0,
        r.forwardRef)(((e,t)=>{
            const {children: o, ...n} = e
              , s = (0,
            r.useRef)(null);
            return (0,
            r.useImperativeHandle)(t, (()=>s.current)),
            (0,
            r.useLayoutEffect)((()=>{
                if (i.CheckMobile.iOS())
                    return null !== s.current && (0,
                    a.disableBodyScroll)(s.current, {
                        allowTouchMove: l(s)
                    }),
                    ()=>{
                        null !== s.current && (0,
                        a.enableBodyScroll)(s.current)
                    }
            }
            ), []),
            r.createElement("div", {
                ref: s,
                ...n
            }, o)
        }
        ));
        function l(e) {
            return t=>{
                const o = (0,
                n.ensureNotNull)(e.current)
                  , r = document.activeElement;
                return !o.contains(t) || null !== r && o.contains(r) && r.contains(t)
            }
        }
    }
    ,
    695257: (e,t)=>{
        "use strict";
        var o = Symbol.for("react.element")
          , r = Symbol.for("react.portal")
          , a = Symbol.for("react.fragment")
          , n = Symbol.for("react.strict_mode")
          , i = Symbol.for("react.profiler")
          , s = Symbol.for("react.provider")
          , l = Symbol.for("react.context")
          , c = Symbol.for("react.forward_ref")
          , u = Symbol.for("react.suspense")
          , d = Symbol.for("react.memo")
          , m = Symbol.for("react.lazy")
          , p = Symbol.iterator;
        var h = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }
          , f = Object.assign
          , b = {};
        function y(e, t, o) {
            this.props = e,
            this.context = t,
            this.refs = b,
            this.updater = o || h
        }
        function v() {}
        function S(e, t, o) {
            this.props = e,
            this.context = t,
            this.refs = b,
            this.updater = o || h
        }
        y.prototype.isReactComponent = {},
        y.prototype.setState = function(e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
                throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, e, t, "setState")
        }
        ,
        y.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate")
        }
        ,
        v.prototype = y.prototype;
        var g = S.prototype = new v;
        g.constructor = S,
        f(g, y.prototype),
        g.isPureReactComponent = !0;
        var k = Array.isArray
          , _ = Object.prototype.hasOwnProperty
          , x = {
            current: null
        }
          , w = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
        function C(e, t, r) {
            var a, n = {}, i = null, s = null;
            if (null != t)
                for (a in void 0 !== t.ref && (s = t.ref),
                void 0 !== t.key && (i = "" + t.key),
                t)
                    _.call(t, a) && !w.hasOwnProperty(a) && (n[a] = t[a]);
            var l = arguments.length - 2;
            if (1 === l)
                n.children = r;
            else if (1 < l) {
                for (var c = Array(l), u = 0; u < l; u++)
                    c[u] = arguments[u + 2];
                n.children = c
            }
            if (e && e.defaultProps)
                for (a in l = e.defaultProps)
                    void 0 === n[a] && (n[a] = l[a]);
            return {
                $$typeof: o,
                type: e,
                key: i,
                ref: s,
                props: n,
                _owner: x.current
            }
        }
        function I(e) {
            return "object" == typeof e && null !== e && e.$$typeof === o
        }
        var E = /\/+/g;
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
        function D(e, t, a, n, i) {
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
                    case o:
                    case r:
                        l = !0
                    }
                }
            if (l)
                return i = i(l = e),
                e = "" === n ? "." + N(l, 0) : n,
                k(i) ? (a = "",
                null != e && (a = e.replace(E, "$&/") + "/"),
                D(i, t, a, "", (function(e) {
                    return e
                }
                ))) : null != i && (I(i) && (i = function(e, t) {
                    return {
                        $$typeof: o,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner
                    }
                }(i, a + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(E, "$&/") + "/") + e)),
                t.push(i)),
                1;
            if (l = 0,
            n = "" === n ? "." : n + ":",
            k(e))
                for (var c = 0; c < e.length; c++) {
                    var u = n + N(s = e[c], c);
                    l += D(s, t, a, u, i)
                }
            else if (u = function(e) {
                return null === e || "object" != typeof e ? null : "function" == typeof (e = p && e[p] || e["@@iterator"]) ? e : null
            }(e),
            "function" == typeof u)
                for (e = u.call(e),
                c = 0; !(s = e.next()).done; )
                    l += D(s = s.value, t, a, u = n + N(s, c++), i);
            else if ("object" === s)
                throw t = String(e),
                Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
            return l
        }
        function z(e, t, o) {
            if (null == e)
                return e;
            var r = []
              , a = 0;
            return D(e, r, "", "", (function(e) {
                return t.call(o, e, a++)
            }
            )),
            r
        }
        function M(e) {
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
          , O = {
            transition: null
        }
          , T = {
            ReactCurrentDispatcher: L,
            ReactCurrentBatchConfig: O,
            ReactCurrentOwner: x
        };
        t.Children = {
            map: z,
            forEach: function(e, t, o) {
                z(e, (function() {
                    t.apply(this, arguments)
                }
                ), o)
            },
            count: function(e) {
                var t = 0;
                return z(e, (function() {
                    t++
                }
                )),
                t
            },
            toArray: function(e) {
                return z(e, (function(e) {
                    return e
                }
                )) || []
            },
            only: function(e) {
                if (!I(e))
                    throw Error("React.Children.only expected to receive a single React element child.");
                return e
            }
        },
        t.Component = y,
        t.Fragment = a,
        t.Profiler = i,
        t.PureComponent = S,
        t.StrictMode = n,
        t.Suspense = u,
        t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T,
        t.cloneElement = function(e, t, r) {
            if (null == e)
                throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
            var a = f({}, e.props)
              , n = e.key
              , i = e.ref
              , s = e._owner;
            if (null != t) {
                if (void 0 !== t.ref && (i = t.ref,
                s = x.current),
                void 0 !== t.key && (n = "" + t.key),
                e.type && e.type.defaultProps)
                    var l = e.type.defaultProps;
                for (c in t)
                    _.call(t, c) && !w.hasOwnProperty(c) && (a[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c])
            }
            var c = arguments.length - 2;
            if (1 === c)
                a.children = r;
            else if (1 < c) {
                l = Array(c);
                for (var u = 0; u < c; u++)
                    l[u] = arguments[u + 2];
                a.children = l
            }
            return {
                $$typeof: o,
                type: e.type,
                key: n,
                ref: i,
                props: a,
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
        t.createElement = C,
        t.createFactory = function(e) {
            var t = C.bind(null, e);
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
                $$typeof: c,
                render: e
            }
        }
        ,
        t.isValidElement = I,
        t.lazy = function(e) {
            return {
                $$typeof: m,
                _payload: {
                    _status: -1,
                    _result: e
                },
                _init: M
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
            var t = O.transition;
            O.transition = {};
            try {
                e()
            } finally {
                O.transition = t
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
        t.useImperativeHandle = function(e, t, o) {
            return L.current.useImperativeHandle(e, t, o)
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
        t.useReducer = function(e, t, o) {
            return L.current.useReducer(e, t, o)
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
        t.useSyncExternalStore = function(e, t, o) {
            return L.current.useSyncExternalStore(e, t, o)
        }
        ,
        t.useTransition = function() {
            return L.current.useTransition()
        }
        ,
        t.version = "18.2.0"
    }
    ,
    50959: (e,t,o)=>{
        "use strict";
        e.exports = o(695257)
    }
    ,
    602948: e=>{
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M5.5 6.44a.75.75 0 1 0-1 1.12l1-1.12zM9 10.5l-.5.56c.29.25.71.25 1 0L9 10.5zm4.5-2.94a.75.75 0 0 0-1-1.12l1 1.12zm-9 0l4 3.5 1-1.12-4-3.5-1 1.12zm5 3.5l4-3.5-1-1.12-4 3.5 1 1.12z"/></svg>'
    }
    ,
    465890: e=>{
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 9" width="11" height="9" fill="none"><path stroke-width="2" d="M0.999878 4L3.99988 7L9.99988 1"/></svg>'
    }
    ,
    339750: e=>{
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 15l5 5L23 9"/></svg>'
    }
    ,
    193986: e=>{
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121 120" width="121" height="120"><path fill="#D1D4DC" d="M53.88 18.36a43.4 43.4 0 0 1 11.24 0 1 1 0 0 0 .26-1.98 45.42 45.42 0 0 0-11.76 0 1 1 0 1 0 .26 1.98zM43.04 21.26a1 1 0 0 0-.77-1.85A44.95 44.95 0 0 0 32.1 25.3a1 1 0 0 0 1.22 1.58 42.95 42.95 0 0 1 9.72-5.62zM75.42 19.96a1 1 0 0 1 1.3-.55A44.95 44.95 0 0 1 86.9 25.3a1 1 0 0 1-1.22 1.58 42.95 42.95 0 0 0-9.72-5.62 1 1 0 0 1-.54-1.3zM25.38 34.82a1 1 0 1 0-1.58-1.22 44.95 44.95 0 0 0-5.89 10.17 1 1 0 0 0 1.85.77 42.95 42.95 0 0 1 5.62-9.72zM16.86 55.38a1 1 0 0 0-1.98-.26 45.42 45.42 0 0 0 0 11.76 1 1 0 1 0 1.98-.26 43.4 43.4 0 0 1 0-11.24zM103 54.26a1 1 0 0 1 1.12.86 45.4 45.4 0 0 1 0 11.76 1 1 0 0 1-1.98-.26 43.37 43.37 0 0 0 0-11.24 1 1 0 0 1 .86-1.12zM19.76 77.46a1 1 0 0 0-1.85.77A44.95 44.95 0 0 0 23.8 88.4a1 1 0 0 0 1.58-1.22 42.95 42.95 0 0 1-5.62-9.72zM100.54 76.92a1 1 0 0 1 .54 1.3A44.95 44.95 0 0 1 95.2 88.4a1 1 0 0 1-1.58-1.22 42.95 42.95 0 0 0 5.62-9.72 1 1 0 0 1 1.3-.54zM33.32 95.12a1 1 0 1 0-1.22 1.58 44.94 44.94 0 0 0 10.17 5.88 1 1 0 0 0 .77-1.84 42.97 42.97 0 0 1-9.72-5.62zM87.08 95.3a1 1 0 0 1-.18 1.4 44.94 44.94 0 0 1-10.17 5.88 1 1 0 0 1-.77-1.84 42.98 42.98 0 0 0 9.72-5.62 1 1 0 0 1 1.4.18zM53.88 103.64a1 1 0 0 0-.26 1.98 45.4 45.4 0 0 0 11.76 0 1 1 0 0 0-.26-1.98 43.37 43.37 0 0 1-11.24 0zM62.81 53.17a1 1 0 0 0-.78 1.84 6.62 6.62 0 0 1 3.49 3.5 1 1 0 1 0 1.84-.78 8.62 8.62 0 0 0-4.55-4.56z"/><path fill="#D1D4DC" d="M45.5 61a14 14 0 1 1 24.28 9.5l7.92 7.92a1 1 0 0 1-1.42 1.42l-7.96-7.97A14 14 0 0 1 45.5 61zm14-12a12 12 0 1 0 0 24 12 12 0 0 0 0-24z"/><circle fill="#1976D2" cx="97.5" cy="39" r="13"/><path fill="#D1D4DC" d="M98.5 34a1 1 0 1 0-2 0v4h-4a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 0 0 0-2h-4v-4z"/></svg>'
    }
    ,
    915550: e=>{
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121 120" width="121" height="120"><path fill="#1E222D" d="M53.88 18.36a43.4 43.4 0 0 1 11.24 0 1 1 0 0 0 .26-1.98 45.42 45.42 0 0 0-11.76 0 1 1 0 1 0 .26 1.98zM43.04 21.26a1 1 0 0 0-.77-1.85A44.95 44.95 0 0 0 32.1 25.3a1 1 0 0 0 1.22 1.58 42.95 42.95 0 0 1 9.72-5.62zM75.42 19.96a1 1 0 0 1 1.3-.55A44.95 44.95 0 0 1 86.9 25.3a1 1 0 0 1-1.22 1.58 42.95 42.95 0 0 0-9.72-5.62 1 1 0 0 1-.54-1.3zM25.38 34.82a1 1 0 1 0-1.58-1.22 44.95 44.95 0 0 0-5.89 10.17 1 1 0 0 0 1.85.77 42.95 42.95 0 0 1 5.62-9.72zM16.86 55.38a1 1 0 0 0-1.98-.26 45.42 45.42 0 0 0 0 11.76 1 1 0 1 0 1.98-.26 43.4 43.4 0 0 1 0-11.24zM103 54.26a1 1 0 0 1 1.12.86 45.4 45.4 0 0 1 0 11.76 1 1 0 0 1-1.98-.26 43.37 43.37 0 0 0 0-11.24 1 1 0 0 1 .86-1.12zM19.76 77.46a1 1 0 0 0-1.85.77A44.95 44.95 0 0 0 23.8 88.4a1 1 0 0 0 1.58-1.22 42.95 42.95 0 0 1-5.62-9.72zM100.54 76.92a1 1 0 0 1 .54 1.3A44.95 44.95 0 0 1 95.2 88.4a1 1 0 0 1-1.58-1.22 42.95 42.95 0 0 0 5.62-9.72 1 1 0 0 1 1.3-.54zM33.32 95.12a1 1 0 1 0-1.22 1.58 44.94 44.94 0 0 0 10.17 5.88 1 1 0 0 0 .77-1.84 42.97 42.97 0 0 1-9.72-5.62zM87.08 95.3a1 1 0 0 1-.18 1.4 44.94 44.94 0 0 1-10.17 5.88 1 1 0 0 1-.77-1.84 42.98 42.98 0 0 0 9.72-5.62 1 1 0 0 1 1.4.18zM53.88 103.64a1 1 0 0 0-.26 1.98 45.4 45.4 0 0 0 11.76 0 1 1 0 0 0-.26-1.98 43.37 43.37 0 0 1-11.24 0zM62.81 53.17a1 1 0 0 0-.78 1.84 6.62 6.62 0 0 1 3.49 3.5 1 1 0 1 0 1.84-.78 8.62 8.62 0 0 0-4.55-4.56z"/><path fill="#1E222D" d="M45.5 61a14 14 0 1 1 24.28 9.5l7.92 7.92a1 1 0 0 1-1.42 1.42l-7.96-7.97A14 14 0 0 1 45.5 61zm14-12a12 12 0 1 0 0 24 12 12 0 0 0 0-24z"/><circle fill="#2196F3" cx="97.5" cy="39" r="13"/><path fill="#fff" d="M98.5 34a1 1 0 1 0-2 0v4h-4a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 0 0 0-2h-4v-4z"/></svg>'
    }
    ,
    716936: e=>{
        e.exports = {
            ar: ["عودة"],
            ca_ES: ["Enrere"],
            cs: "Back",
            de: ["Zurück"],
            el: "Back",
            en: "Back",
            es: ["Atrás"],
            fa: "Back",
            fr: ["Retour"],
            he_IL: ["חזור"],
            hu_HU: "Back",
            id_ID: ["Kembali"],
            it: ["Indietro"],
            ja: ["戻る"],
            ko: ["뒤로"],
            ms_MY: ["Kembali"],
            nl_NL: "Back",
            pl: ["Cofnij"],
            pt: ["Voltar"],
            ro: "Back",
            ru: ["Назад"],
            sv: ["Tillbaka"],
            th: ["กลับไป"],
            tr: ["Geri"],
            vi: ["Quay lại"],
            zh: ["返回"],
            zh_TW: ["返回"]
        }
    }
    ,
    709898: e=>{
        e.exports = {
            ar: ["حق"],
            ca_ES: ["Right (dret de subscripció)"],
            cs: "Right",
            de: ["Rechter"],
            el: "Right",
            en: "Right",
            es: ["Right (derecho de suscripción)"],
            fa: "Right",
            fr: ["De droite"],
            he_IL: ["זכות Right"],
            hu_HU: "Right",
            id_ID: ["Kanan"],
            it: ["Diritto"],
            ja: ["ストックオプション"],
            ko: ["라이트"],
            ms_MY: ["Benar"],
            nl_NL: "Right",
            pl: ["Prawo do udostępniania"],
            pt: ["Direita"],
            ro: "Right",
            ru: ["Право на акцию"],
            sv: ["Höger"],
            th: ["สิทธิ"],
            tr: ["Sağ"],
            vi: ["Phải"],
            zh: ["认股权"],
            zh_TW: ["認股權"]
        }
    }
    ,
    822320: e=>{
        e.exports = {
            ar: ["مقارنة الرمز"],
            ca_ES: ["Compara el símbol"],
            cs: "Compare symbol",
            de: ["Symbol vergleichen"],
            el: "Compare symbol",
            en: "Compare symbol",
            es: ["Comparar el símbolo"],
            fa: "Compare symbol",
            fr: ["Comparer le symbole"],
            he_IL: ["השווה סימול"],
            hu_HU: "Compare symbol",
            id_ID: ["Bandingkan simbol"],
            it: ["Confronta simbolo"],
            ja: ["シンボルを比較"],
            ko: ["심볼 견주기"],
            ms_MY: ["Bandingkan simbol"],
            nl_NL: "Compare symbol",
            pl: ["Porównaj symbol"],
            pt: ["Comparar símbolos"],
            ro: "Compare symbol",
            ru: ["Сравнить символ"],
            sv: ["Jämför symbol"],
            th: ["เปรียบเทียบสัญลักษณ์"],
            tr: ["Sembolü karşılaştır"],
            vi: ["So sánh mã"],
            zh: ["比较商品"],
            zh_TW: ["比較商品"]
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
    279589: e=>{
        e.exports = {
            ar: ["إضافة إلى"],
            ca_ES: ["Afegeix a"],
            cs: "Add to",
            de: ["hinzufügen zu"],
            el: "Add to",
            en: "Add to",
            es: ["Añadir a"],
            fa: "Add to",
            fr: ["Ajouter à"],
            he_IL: ["הוסף ל"],
            hu_HU: "Add to",
            id_ID: ["Tambahkan ke"],
            it: ["Aggiungi a"],
            ja: ["追加先"],
            ko: ["~에 넣기:"],
            ms_MY: ["Tambah kepada"],
            nl_NL: "Add to",
            pl: ["Dodaj do"],
            pt: ["Adicionar"],
            ro: "Add to",
            ru: ["Добавить"],
            sv: ["Lägg till"],
            th: ["เพิ่มไปที่"],
            tr: ["Buna ekle:"],
            vi: ["Thêm vào"],
            zh: ["添加到"],
            zh_TW: ["增加到"]
        }
    }
    ,
    646580: e=>{
        e.exports = {
            ar: ["الرموز المضافة"],
            ca_ES: ["Símbols afegits"],
            cs: "Added symbols",
            de: ["Hinzugefügte Symbole"],
            el: "Added symbols",
            en: "Added symbols",
            es: ["Símbolos añadidos"],
            fa: "Added symbols",
            fr: ["Symboles ajoutés"],
            he_IL: ["נוספו סימולים"],
            hu_HU: "Added symbols",
            id_ID: ["Simbol yang ditambahkan"],
            it: ["Simboli aggiunti"],
            ja: ["追加されているシンボル"],
            ko: ["더해진 심볼들"],
            ms_MY: ["Tambah simbol-simbol"],
            nl_NL: "Added symbols",
            pl: ["Dodane symbole"],
            pt: ["Símbolos adicionados"],
            ro: "Added symbols",
            ru: ["Добавленные инструменты"],
            sv: ["Tillagda symboler"],
            th: ["สัญลักษณ์ที่ถูกเพิ่มมา"],
            tr: ["Semboller eklendi"],
            vi: ["Các mã đã thêm"],
            zh: ["添加商品"],
            zh_TW: ["增加商品"]
        }
    }
    ,
    64498: e=>{
        e.exports = {
            ar: ["كل المصادر"],
            ca_ES: ["Totes les fonts"],
            cs: "All sources",
            de: ["Alle Quellen"],
            el: "All sources",
            en: "All sources",
            es: ["Todas las fuentes"],
            fa: "All sources",
            fr: ["Toutes les sources"],
            he_IL: ["כל המקורות"],
            hu_HU: "All sources",
            id_ID: ["Seluruh sumber"],
            it: ["Tutte le fonti"],
            ja: ["すべての提供元"],
            ko: ["모든 자료"],
            ms_MY: ["Kesemua sumber"],
            nl_NL: "All sources",
            pl: ["Wszystkie źródła"],
            pt: ["Todas as fontes"],
            ro: "All sources",
            ru: ["Все источники"],
            sv: ["Samtliga källor"],
            th: ["แหล่งที่มาทั้งหมด"],
            tr: ["Tüm kaynaklar"],
            vi: ["Tất cả các nguồn"],
            zh: ["全部来源"],
            zh_TW: ["全部來源"]
        }
    }
    ,
    471046: e=>{
        e.exports = {
            ar: ["السماح بتمديد النطاق الزمني"],
            ca_ES: ["Permet ampliar l'escala de temps"],
            cs: "Allow extend time scale",
            de: ["Zeitskala verlängern lassen"],
            el: "Allow extend time scale",
            en: "Allow extend time scale",
            es: ["Permitir ampliar la escala de tiempo"],
            fa: "Allow extend time scale",
            fr: ["Permettre d'étendre l'échelle de temps"],
            he_IL: ["אפשר להאריך את סולם הזמן"],
            hu_HU: "Allow extend time scale",
            id_ID: ["Izinkan ekstensi skala waktu"],
            it: ["Permetti estensione scala temporale"],
            ja: ["時間軸の延長を許可"],
            ko: ["타임 스케일 확장을 허용합니다"],
            ms_MY: ["Benarkan pemanjangan skala masa"],
            nl_NL: "Allow extend time scale",
            pl: ["Zezwól na rozszerzenie osi czasu"],
            pt: ["Permitir prolongar a escala de tempo"],
            ro: "Allow extend time scale",
            ru: ["Разрешить продолжение временной шкалы"],
            sv: ["Tillåt att förlängd tidsskala"],
            th: ["อนุญาตให้ขยายมาตราส่วนเวลา"],
            tr: ["Zaman ölçeğini uzatmaya izin ver"],
            vi: ["Cho phép mở rộng quy mô thời gian"],
            zh: ["允许延长时间坐标"],
            zh_TW: ["允許延長時間刻度"]
        }
    }
    ,
    879852: e=>{
        e.exports = {
            ar: ["سند"],
            ca_ES: ["Bo"],
            cs: "Bond",
            de: ["Anleihe"],
            el: "Bond",
            en: "Bond",
            es: ["Bono"],
            fa: "Bond",
            fr: ["Obligation"],
            he_IL: ["אגרת חוב"],
            hu_HU: "Bond",
            id_ID: ["Surat hutang"],
            it: ["Obbligazione"],
            ja: ["債券"],
            ko: ["채권"],
            ms_MY: ["Bon"],
            nl_NL: "Bond",
            pl: ["Obligacja"],
            pt: ["Título"],
            ro: "Bond",
            ru: ["Облигации"],
            sv: ["Obligation"],
            th: ["พันธบัตร"],
            tr: ["Tahvil"],
            vi: ["Trái phiếu"],
            zh: ["债券"],
            zh_TW: ["債券"]
        }
    }
    ,
    629601: e=>{
        e.exports = {
            ar: ["الوصف"],
            ca_ES: ["Descripció"],
            cs: ["Popis"],
            de: ["Beschreibung"],
            el: "Description",
            en: "Description",
            es: ["Descripción"],
            fa: ["شرح"],
            fr: "Description",
            he_IL: ["תיאור"],
            hu_HU: ["Leírás"],
            id_ID: ["Deskripsi"],
            it: ["Descrizione"],
            ja: ["詳細"],
            ko: ["설명"],
            ms_MY: ["Huraian"],
            nl_NL: ["Beschrijving"],
            pl: ["Opis"],
            pt: ["Descrição"],
            ro: "Description",
            ru: ["Описание"],
            sv: ["Beskrivning"],
            th: ["คำอธิบาย"],
            tr: ["Açıklama"],
            vi: ["Mô tả"],
            zh: ["描述"],
            zh_TW: ["描述"]
        }
    }
    ,
    929673: e=>{
        e.exports = {
            ar: ["لا توجد أسواق تطابق المعايير التي عينتها"],
            ca_ES: ["No hi ha mercats de valors que coincideixin amb els vostres criteris."],
            cs: "No exchanges match your criteria",
            de: ["Keine Börsen entsprechen Ihren Kriterien"],
            el: "No exchanges match your criteria",
            en: "No exchanges match your criteria",
            es: ["No hay mercados de valores que coincidan con sus criterios."],
            fa: "No exchanges match your criteria",
            fr: ["Aucun échange ne correspond à vos critères"],
            he_IL: ["אין בורסות התואמות את הקריטריונים שלך"],
            hu_HU: "No exchanges match your criteria",
            id_ID: ["Tidak ada bursa yang sesuai dengan kriteria anda"],
            it: ["Nessuna borsa corrisponde ai tuoi criteri"],
            ja: ["条件に合致する取引所はありません"],
            ko: ["조건에 맞는 익스체인지가 없음"],
            ms_MY: ["Tiada bursa saham yang memenuhi kriteria anda."],
            nl_NL: "No exchanges match your criteria",
            pl: ["Brak giełd spełniających Twoje kryteria"],
            pt: ["Nenhuma exchange corresponde ao seu critério"],
            ro: "No exchanges match your criteria",
            ru: ["Нет подходящих бирж"],
            sv: ["Inga börser matchar dina kriterier"],
            th: ["ไม่มีตลาดแลกเปลี่ยนใดๆ ตรงตามเงื่อนไขของคุณ"],
            tr: ["Kriterlerinize uygun borsa yok"],
            vi: ["Không có sàn giao dịch nào khớp với yêu cầu của bạn"],
            zh: ["没有交易所符合您的条件"],
            zh_TW: ["沒有交易所符合您的條件"]
        }
    }
    ,
    542078: e=>{
        e.exports = {
            ar: ["لا توجد رموز هنا حالياً — قم بإضافة الرموز"],
            ca_ES: ["Encara no hi ha símbols aquí, en voleu afegir algun?"],
            cs: "No symbols here yet — why not add some?",
            de: ["Hier gibt es noch keine Symbole - warum nicht welche hinzufügen?"],
            el: "No symbols here yet — why not add some?",
            en: "No symbols here yet — why not add some?",
            es: ["Todavía no hay símbolos aquí, ¿por qué no añadir algunos?"],
            fa: "No symbols here yet — why not add some?",
            fr: ["Pas encore de symboles ici - pourquoi ne pas en ajouter ?"],
            he_IL: ["עדיין אין כאן סימולים - למה לא להוסיף כמה?"],
            hu_HU: "No symbols here yet — why not add some?",
            id_ID: ["Belum ada simbol di sini — mengapa tidak menambahkan beberapa?"],
            it: ["Non ci sono simboli qui. Perchè non aggiungerne alcuni?"],
            ja: ["まだシンボルがありません — 追加してみませんか？"],
            ko: ["아직 종목이 없습니다. 종목을 추가하시겠습니까?"],
            ms_MY: ["Belum ada simbol di sini - mengapa tidak menambahkannya?"],
            nl_NL: "No symbols here yet — why not add some?",
            pl: ["Nie ma tu jeszcze żadnych symboli — chcesz coś dodać?"],
            pt: ["Ainda não há símbolos aqui - por que não acrescentar alguns?"],
            ro: "No symbols here yet — why not add some?",
            ru: ["Здесь еще нет инструментов — почему бы их не добавить?"],
            sv: ["Inga symboler här — ska du ta och lägga till några?"],
            th: ["ยังไม่มีสัญลักษณ์ - ทำไมไม่เพิ่มมันบ้างล่ะ?"],
            tr: ["Burada henüz sembol yok - neden biraz eklemiyorsunuz?"],
            vi: ["Không có mã giao dịch nào ở đây - tại sao không thêm một số?"],
            zh: ["这里还没有商品 — 为什么不添加一些呢？"],
            zh_TW: ["這裡還沒有商品 — 為什麼不增加一些呢？"]
        }
    }
    ,
    641379: e=>{
        e.exports = {
            ar: ["لا توجد رموز تطابق معاييرك"],
            ca_ES: ["Cap símbol coincideix amb els vostres criteris"],
            cs: "No symbols match your criteria",
            de: ["Für Ihre Kriterien gibt es keine übereinstimmenden Symbole"],
            el: "No symbols match your criteria",
            en: "No symbols match your criteria",
            es: ["Ningún símbolo coincide con sus criterios"],
            fa: "No symbols match your criteria",
            fr: ["Aucun symbole ne correspond à vos critères"],
            he_IL: ["אין סימולים תואמים את הקריטריונים שלך"],
            hu_HU: "No symbols match your criteria",
            id_ID: ["Tidak ada Simbol yang sesuai dengan kriteria anda"],
            it: ["Nessun simbolo corrisponde ai criteri"],
            ja: ["条件に合致するシンボルはありません"],
            ko: ["조건에 맞는 심볼이 없음"],
            ms_MY: ["Tiada Simbol yang menepati kriteria anda"],
            nl_NL: "No symbols match your criteria",
            pl: ["Brak symboli spełniających Twoje kryteria"],
            pt: ["Nenhum símbolo compatível com seu critério"],
            ro: "No symbols match your criteria",
            ru: ["Нет подходящих символов"],
            sv: ["Inga symboler matchar dina kriterier"],
            th: ["ไม่มีสัญลักษณ์ที่ตรงกับการค้นหาของคุณ"],
            tr: ["Kriterlerinize uygun sembol yok"],
            vi: ["Không có mã giao dịch nào khớp với tiêu chí của bạn"],
            zh: ["没有代码符合您的条件"],
            zh_TW: ["沒有商品符合您的條件"]
        }
    }
    ,
    167242: e=>{
        e.exports = {
            ar: ["جزء جديد"],
            ca_ES: ["Nou quadre"],
            cs: "New pane",
            de: ["Neuer Bereich"],
            el: "New pane",
            en: "New pane",
            es: ["Nuevo panel"],
            fa: "New pane",
            fr: ["Nouveau volet"],
            he_IL: ["חלונית חדשה"],
            hu_HU: "New pane",
            id_ID: ["Panel baru"],
            it: ["Nuovo pannello"],
            ja: ["新規ペイン"],
            ko: ["새 페인"],
            ms_MY: ["Panel baru"],
            nl_NL: "New pane",
            pl: ["Nowy panel"],
            pt: ["Novo Painel"],
            ro: "New pane",
            ru: ["Новая панель"],
            sv: ["Ny ruta"],
            th: ["หน้าต่างใหม่"],
            tr: ["Yeni bölme"],
            vi: ["Ngăn mới"],
            zh: ["新窗格"],
            zh_TW: ["新窗格"]
        }
    }
    ,
    534420: e=>{
        e.exports = {
            ar: ["مقياس سعر جديد"],
            ca_ES: ["Nova escala de preus"],
            cs: "New price scale",
            de: ["Neue Preisskala"],
            el: "New price scale",
            en: "New price scale",
            es: ["Nueva escala de precios"],
            fa: "New price scale",
            fr: ["Nouvelle échelle de prix"],
            he_IL: ["סולם מחירים חדש"],
            hu_HU: "New price scale",
            id_ID: ["Skala harga baru"],
            it: ["Nuova scala di prezzo"],
            ja: ["新しい価格スケール"],
            ko: ["새 프라이스 스케일"],
            ms_MY: ["Skala harga baru"],
            nl_NL: "New price scale",
            pl: ["Nowa skala cen"],
            pt: ["Nova escala de preço"],
            ro: "New price scale",
            ru: ["Новая ценовая шкала"],
            sv: ["Ny prisskala"],
            th: ["สเกลราคาใหม่"],
            tr: ["Yeni fiyat ölçeği"],
            vi: ["Khung giá mới"],
            zh: ["新价格坐标"],
            zh_TW: ["新的價格刻度"]
        }
    }
    ,
    719724: e=>{
        e.exports = {
            ar: ["مصادر"],
            ca_ES: ["Fonts"],
            cs: "Sources",
            de: ["Quellen"],
            el: "Sources",
            en: "Sources",
            es: ["Fuentes"],
            fa: "Sources",
            fr: "Sources",
            he_IL: ["מקורות"],
            hu_HU: "Sources",
            id_ID: ["Sumber"],
            it: ["Fonti"],
            ja: ["情報源"],
            ko: ["자료"],
            ms_MY: ["Sumber-sumber"],
            nl_NL: "Sources",
            pl: ["Źródła"],
            pt: ["Fontes"],
            ro: "Sources",
            ru: ["Источники"],
            sv: ["Källor"],
            th: ["แหล่งที่มา"],
            tr: ["Kaynak"],
            vi: ["Nguồn"],
            zh: ["来源"],
            zh_TW: ["來源"]
        }
    }
    ,
    882642: e=>{
        e.exports = {
            ar: ["نفس مقياس %"],
            ca_ES: ["Mateixa escala de %"],
            cs: "Same % scale",
            de: ["Selbe % Skala"],
            el: "Same % scale",
            en: "Same % scale",
            es: ["Misma escala de %"],
            fa: "Same % scale",
            fr: ["Même échelle %"],
            he_IL: ["אותו סולם%"],
            hu_HU: "Same % scale",
            id_ID: ["% skala yang sama"],
            it: ["Stessa scala %"],
            ja: ["同じ％スケール"],
            ko: ["같은 % 스케일"],
            ms_MY: ["Skala % yang sama"],
            nl_NL: "Same % scale",
            pl: ["Ta sama skala %"],
            pt: ["Mesma escala %"],
            ro: "Same % scale",
            ru: ["Та же % шкала"],
            sv: ["Samma %-skala"],
            th: ["เหมือน % สเกล"],
            tr: ["Aynı % ölçek"],
            vi: ["Cùng % quy mô"],
            zh: ["相同%坐标"],
            zh_TW: ["相同%刻度"]
        }
    }
    ,
    17547: e=>{
        e.exports = {
            ar: ["نفس المقياس"],
            ca_ES: ["Mateixa escala"],
            cs: "Same scale",
            de: ["Selbe Skala"],
            el: "Same scale",
            en: "Same scale",
            es: ["Misma escala"],
            fa: "Same scale",
            fr: ["Même échelle"],
            he_IL: ["אותו קנה מידה"],
            hu_HU: "Same scale",
            id_ID: ["Skala yang sama"],
            it: ["Stessa scala"],
            ja: ["同じスケール"],
            ko: ["같은 스케일"],
            ms_MY: ["Skala sama"],
            nl_NL: "Same scale",
            pl: ["Ta sama skala"],
            pt: ["Mesma escala"],
            ro: "Same scale",
            ru: ["Та же шкала"],
            sv: ["Samma skala"],
            th: ["เหมือน % สเกล"],
            tr: ["Aynı ölçek"],
            vi: ["Thang tương tự"],
            zh: ["相同坐标"],
            zh_TW: ["相同的刻度"]
        }
    }
    ,
    252298: e=>{
        e.exports = {
            ar: ["بحث"],
            ca_ES: ["Cercar"],
            cs: ["Hledat"],
            de: ["Suche"],
            el: ["Αναζήτησή"],
            en: "Search",
            es: ["Buscar"],
            fa: ["جستجو"],
            fr: ["Chercher"],
            he_IL: ["חפש"],
            hu_HU: ["Keresés"],
            id_ID: ["Cari"],
            it: ["Cerca"],
            ja: ["検索"],
            ko: ["찾기"],
            ms_MY: ["Cari"],
            nl_NL: ["Zoeken"],
            pl: ["Szukaj"],
            pt: ["Pesquisar"],
            ro: "Search",
            ru: ["Поиск"],
            sv: ["Sök"],
            th: ["ค้นหา"],
            tr: ["Ara"],
            vi: ["Tìm kiếm"],
            zh: ["搜索"],
            zh_TW: ["搜尋"]
        }
    }
    ,
    313269: e=>{
        e.exports = {
            ar: ["اختر مصدراً"],
            ca_ES: ["Selecciona font"],
            cs: "Select source",
            de: ["Quelle wählen"],
            el: "Select source",
            en: "Select source",
            es: ["Seleccionar fuente"],
            fa: "Select source",
            fr: ["Sélectionner la source"],
            he_IL: ["בחר מקור"],
            hu_HU: "Select source",
            id_ID: ["Pilih sumber"],
            it: ["Seleziona fonte"],
            ja: ["情報源を選択"],
            ko: ["자료 선택"],
            ms_MY: ["Pilih sumber"],
            nl_NL: "Select source",
            pl: ["Wybierz źródło"],
            pt: ["Selecionar fonte"],
            ro: "Select source",
            ru: ["Выбрать источник"],
            sv: ["Välj källa"],
            th: ["เลือกแหล่งที่มา"],
            tr: ["Kaynak seç"],
            vi: ["Chọn nguồn"],
            zh: ["选择来源"],
            zh_TW: ["選擇來源"]
        }
    }
    ,
    589053: e=>{
        e.exports = {
            ar: ["رمز"],
            ca_ES: ["Símbol"],
            cs: "Symbol",
            de: "Symbol",
            el: ["Σύμβολο"],
            en: "Symbol",
            es: ["Símbolo"],
            fa: ["نماد"],
            fr: ["Symbole"],
            he_IL: ["סימול"],
            hu_HU: ["Szimbólum"],
            id_ID: ["Simbol"],
            it: ["Simbolo"],
            ja: ["シンボル"],
            ko: ["심볼"],
            ms_MY: ["Simbol"],
            nl_NL: ["Symbool"],
            pl: "Symbol",
            pt: ["Símbolo"],
            ro: "Symbol",
            ru: ["Инструмент"],
            sv: "Symbol",
            th: ["สัญลักษณ์"],
            tr: ["Sembol"],
            vi: ["Mã"],
            zh: ["商品代码"],
            zh_TW: ["商品代碼"]
        }
    }
    ,
    948490: e=>{
        e.exports = {
            ar: ["الرمز والوصف"],
            ca_ES: ["Símbol i descripció"],
            cs: "Symbol & description",
            de: ["Symbol & Beschreibung"],
            el: "Symbol & description",
            en: "Symbol & description",
            es: ["Símbolo y descripción"],
            fa: "Symbol & description",
            fr: ["Symbole & description"],
            he_IL: ["סימול ותיאור"],
            hu_HU: "Symbol & description",
            id_ID: ["Simbol & deskripsi"],
            it: ["Simbolo e descrizione"],
            ja: ["シンボル & 詳細"],
            ko: ["심볼 & 설명"],
            ms_MY: ["Simbol & penjelasan"],
            nl_NL: "Symbol & description",
            pl: ["Symbol i opis"],
            pt: ["Símbolo & descrição"],
            ro: "Symbol & description",
            ru: ["Инструмент и описание"],
            sv: ["Symbol & beskrivning"],
            th: ["สัญลักษณ์และคำอธิบาย"],
            tr: ["Sembol ve açıklama"],
            vi: ["Mã giao dịch & mô tả"],
            zh: ["商品和描述"],
            zh_TW: ["商品&描述"]
        }
    }
    ,
    882719: e=>{
        e.exports = {
            ar: ["بحث عن الرموز"],
            ca_ES: ["Cerca de símbols"],
            cs: "Symbol Search",
            de: ["Symbol Suche"],
            el: "Symbol Search",
            en: "Symbol Search",
            es: ["Búsqueda de símbolos"],
            fa: "Symbol Search",
            fr: ["Recherche de symbole"],
            he_IL: ["חיפוש סימולים"],
            hu_HU: "Symbol Search",
            id_ID: ["Pencarian Simbol"],
            it: ["Ricerca simbolo"],
            ja: ["シンボル検索"],
            ko: ["심볼 찾기"],
            ms_MY: ["Cari simbol"],
            nl_NL: "Symbol Search",
            pl: ["Wyszukiwanie symboli"],
            pt: ["Pesquisa de Símbolo"],
            ro: "Symbol Search",
            ru: ["Поиск инструментов"],
            sv: ["Symbolsök"],
            th: ["ค้นหาตัวย่อ"],
            tr: ["Sembol Arama"],
            vi: ["Tìm kiếm Mã giao dịch"],
            zh: ["商品代码搜索"],
            zh_TW: ["商品搜尋"]
        }
    }
    ,
    957570: e=>{
        e.exports = {
            ar: ["الرموز الحديثة"],
            ca_ES: ["Símbols recents"],
            cs: "Recent symbols",
            de: ["Letzte Symbole"],
            el: "Recent symbols",
            en: "Recent symbols",
            es: ["Símbolos recientes"],
            fa: "Recent symbols",
            fr: ["Symboles récents"],
            he_IL: ["סימולים אחרונים"],
            hu_HU: "Recent symbols",
            id_ID: ["Simbol terbaru"],
            it: ["Simboli recenti"],
            ja: ["最近のシンボル"],
            ko: ["최근 심볼들"],
            ms_MY: ["Simbol-simbol terbaru"],
            nl_NL: "Recent symbols",
            pl: ["Niedawne symbole"],
            pt: ["Símbolos recentes"],
            ro: "Recent symbols",
            ru: ["Недавние инструменты"],
            sv: ["Senaste symboler"],
            th: ["สัญลักษณ์ล่าสุด"],
            tr: ["Son semboller"],
            vi: ["Các mã gần đây"],
            zh: ["最近的商品"],
            zh_TW: ["最近的商品"]
        }
    }
    ,
    812629: e=>{
        e.exports = {
            ar: ["السلع"],
            ca_ES: "commodity",
            cs: "commodity",
            de: ["Rohstoff"],
            el: "commodity",
            en: "commodity",
            es: ["materia prima"],
            fa: "commodity",
            fr: ["produit de base"],
            he_IL: ["סחורה"],
            hu_HU: "commodity",
            id_ID: ["komiditas"],
            it: ["materia prima"],
            ja: ["コモディティ"],
            ko: ["상품"],
            ms_MY: ["komoditi"],
            nl_NL: "commodity",
            pl: ["towar"],
            pt: "commodity",
            ro: "commodity",
            ru: ["товары"],
            sv: "commodity",
            th: ["คอมมอดิตี้"],
            tr: ["Emtia"],
            vi: ["hàng hóa"],
            zh: ["商品"],
            zh_TW: ["商品"]
        }
    }
    ,
    487592: e=>{
        e.exports = {
            ar: ["عقود الفروقات"],
            ca_ES: "cfd",
            cs: "cfd",
            de: "cfd",
            el: "cfd",
            en: "cfd",
            es: "cfd",
            fa: "cfd",
            fr: "cfd",
            he_IL: ["חוזה הפרשים cfd"],
            hu_HU: "cfd",
            id_ID: "cfd",
            it: "cfd",
            ja: ["CFD"],
            ko: ["씨에프디"],
            ms_MY: "cfd",
            nl_NL: "cfd",
            pl: "cfd",
            pt: "cfd",
            ro: "cfd",
            ru: "cfd",
            sv: "cfd",
            th: "cfd",
            tr: "cfd",
            vi: "cfd",
            zh: ["差价合约"],
            zh_TW: "cfd"
        }
    }
    ,
    308448: e=>{
        e.exports = {
            ar: ["العملات الرقمية"],
            ca_ES: ["cripto"],
            cs: "crypto",
            de: "crypto",
            el: "crypto",
            en: "crypto",
            es: ["cripto"],
            fa: "crypto",
            fr: "crypto",
            he_IL: ["קריפטו"],
            hu_HU: ["kripto"],
            id_ID: "crypto",
            it: ["cripto"],
            ja: ["暗号"],
            ko: ["크립토"],
            ms_MY: ["kripto"],
            nl_NL: "crypto",
            pl: ["krypto"],
            pt: ["Cripto"],
            ro: "crypto",
            ru: ["криптовалюты"],
            sv: ["krypto"],
            th: ["คริปโต"],
            tr: ["kripto"],
            vi: ["tiền điện tử"],
            zh: ["加密"],
            zh_TW: "crypto"
        }
    }
    ,
    667245: e=>{
        e.exports = {
            ar: ["إيصال إيداع"],
            ca_ES: "dr",
            cs: "dr",
            de: "dr",
            el: "dr",
            en: "dr",
            es: "dr",
            fa: "dr",
            fr: "dr",
            he_IL: "dr",
            hu_HU: "dr",
            id_ID: "dr",
            it: "dr",
            ja: ["預託証券"],
            ko: "dr",
            ms_MY: "dr",
            nl_NL: "dr",
            pl: ["Potwierdzenie wpłaty"],
            pt: "dr",
            ro: "dr",
            ru: ["Депоз. расписки"],
            sv: "dr",
            th: "dr",
            tr: "dr",
            vi: "dr",
            zh: "dr",
            zh_TW: "dr"
        }
    }
    ,
    488720: e=>{
        e.exports = {
            ar: ["اقتصاد"],
            ca_ES: ["economia"],
            cs: "economy",
            de: ["Wirtschaft"],
            el: "economy",
            en: "economy",
            es: ["economía"],
            fa: "economy",
            fr: ["économie"],
            he_IL: ["כַּלְכָּלָה"],
            hu_HU: "economy",
            id_ID: ["ekonomi"],
            it: ["economia"],
            ja: ["経済指標"],
            ko: ["경제"],
            ms_MY: ["ekonomi"],
            nl_NL: "economy",
            pl: ["gospodarka"],
            pt: ["economia"],
            ro: "economy",
            ru: ["экономические данные"],
            sv: ["ekonomi"],
            th: ["เศรษฐกิจ"],
            tr: ["ekonomi"],
            vi: ["kinh tế"],
            zh: ["经济"],
            zh_TW: ["經濟"]
        }
    }
    ,
    739512: e=>{
        e.exports = {
            ar: ["فوركس"],
            ca_ES: ["Forex"],
            cs: "forex",
            de: ["Devisen"],
            el: "forex",
            en: "forex",
            es: ["Forex"],
            fa: "forex",
            fr: ["Forex"],
            he_IL: ['מט"ח'],
            hu_HU: "forex",
            id_ID: "forex",
            it: "forex",
            ja: ["FX"],
            ko: ["외환"],
            ms_MY: "forex",
            nl_NL: "forex",
            pl: "forex",
            pt: "forex",
            ro: "forex",
            ru: ["форекс"],
            sv: ["valutor"],
            th: ["ฟอเร็กซ์"],
            tr: ["döviz"],
            vi: "forex",
            zh: ["外汇"],
            zh_TW: ["外匯"]
        }
    }
    ,
    781859: e=>{
        e.exports = {
            ar: ["العقود الآجلة"],
            ca_ES: ["futurs"],
            cs: "futures",
            de: ["Futures"],
            el: "futures",
            en: "futures",
            es: ["futuros"],
            fa: "futures",
            fr: "futures",
            he_IL: ["חוזים עתידיים"],
            hu_HU: "futures",
            id_ID: ["kontrak berjangka"],
            it: ["future"],
            ja: ["先物"],
            ko: ["퓨쳐스"],
            ms_MY: ["pasaran hadapan"],
            nl_NL: "futures",
            pl: ["Kontrakty terminowe"],
            pt: ["futuros"],
            ro: "futures",
            ru: ["фьючерсы"],
            sv: ["terminer"],
            th: ["ฟิวเจอร์ส"],
            tr: ["vadeli"],
            vi: ["hợp đồng tương lai"],
            zh: ["期货"],
            zh_TW: ["期貨"]
        }
    }
    ,
    612754: e=>{
        e.exports = {
            ar: ["مؤشر"],
            ca_ES: ["índex"],
            cs: "index",
            de: ["Index"],
            el: "index",
            en: "index",
            es: ["índice"],
            fa: "index",
            fr: ["indice"],
            he_IL: ["מדד"],
            hu_HU: "index",
            id_ID: ["indeks"],
            it: ["indice"],
            ja: ["指数"],
            ko: ["지수"],
            ms_MY: ["indeks"],
            nl_NL: "index",
            pl: ["indeks"],
            pt: ["índice"],
            ro: "index",
            ru: ["индексы"],
            sv: "index",
            th: ["ดัชนี"],
            tr: ["endeks"],
            vi: ["chỉ số"],
            zh: ["指数"],
            zh_TW: ["指數"]
        }
    }
    ,
    138071: e=>{
        e.exports = {
            ar: ["المؤشرات"],
            ca_ES: "indices",
            cs: "indices",
            de: ["Indizes"],
            el: "indices",
            en: "indices",
            es: ["índices"],
            fa: "indices",
            fr: "indices",
            he_IL: ["מדדים"],
            hu_HU: "indices",
            id_ID: ["indeks"],
            it: ["Indici"],
            ja: ["指数"],
            ko: ["지수"],
            ms_MY: ["indeks"],
            nl_NL: ["indexen"],
            pl: ["indeksy"],
            pt: ["índices"],
            ro: "indices",
            ru: ["индексы"],
            sv: ["index"],
            th: ["ดัชนี"],
            tr: ["endeks"],
            vi: ["các chỉ báo"],
            zh: ["指数"],
            zh_TW: ["指數"]
        }
    }
    ,
    636931: e=>{
        e.exports = {
            ar: ["سهم"],
            ca_ES: ["accions"],
            cs: "stock",
            de: ["Aktie"],
            el: "stock",
            en: "stock",
            es: ["acciones"],
            fa: "stock",
            fr: "stock",
            he_IL: ["מניה"],
            hu_HU: "stock",
            id_ID: ["saham"],
            it: ["azione"],
            ja: ["株式"],
            ko: ["스탁"],
            ms_MY: ["saham"],
            nl_NL: "stock",
            pl: ["akcja"],
            pt: ["ação"],
            ro: "stock",
            ru: ["акция"],
            sv: ["aktier"],
            th: ["หุ้น"],
            tr: ["hisse"],
            vi: ["cổ phiếu"],
            zh: ["股票"],
            zh_TW: ["股票"]
        }
    }
}]);
