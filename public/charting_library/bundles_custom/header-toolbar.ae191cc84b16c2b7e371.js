(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[3005], {
    164553: e => {
        e.exports = {
            wrap: "wrap-wXGVFOC9",
            wrapWithArrowsOuting: "wrapWithArrowsOuting-wXGVFOC9",
            wrapOverflow: "wrapOverflow-wXGVFOC9",
            scrollWrap: "scrollWrap-wXGVFOC9",
            noScrollBar: "noScrollBar-wXGVFOC9",
            icon: "icon-wXGVFOC9",
            scrollLeft: "scrollLeft-wXGVFOC9",
            scrollRight: "scrollRight-wXGVFOC9",
            isVisible: "isVisible-wXGVFOC9",
            iconWrap: "iconWrap-wXGVFOC9",
            fadeLeft: "fadeLeft-wXGVFOC9",
            fadeRight: "fadeRight-wXGVFOC9"
        }
    }
    ,
    670086: (e, t, s) => {
        "use strict";
        s.d(t, {
            FragmentMap: () => a
        });
        var i = s(50959);
        function a(e) {
            if (e.map) {
                return i.Children.toArray(e.children).map(e.map)
            }
            return e.children
        }
    }
    ,
    721043: e => {
        e.exports = {
            group: "group-MBOVGQRI",
            separator: "separator-MBOVGQRI",
            noLeftDecoration: "noLeftDecoration-MBOVGQRI",
            noRightDecoration: "noRightDecoration-MBOVGQRI",
            noMinimalWidth: "noMinimalWidth-MBOVGQRI",
            separatorWrap: "separatorWrap-MBOVGQRI"
        }
    }
    ,
    63869: e => {
        e.exports = {
            separator: "separator-xVhBjD5m"
        }
    }
    ,
    120694: e => {
        e.exports = {
            "css-value-header-toolbar-height": "38px",
            toolbar: "toolbar-qqNP9X6e",
            isHidden: "isHidden-qqNP9X6e",
            overflowWrap: "overflowWrap-qqNP9X6e",
            customButton: "customButton-qqNP9X6e",
            hover: "hover-qqNP9X6e"
        }
    }
    ,
    759468: e => {
        e.exports = {
            wrap: "wrap-_psvpUP2",
            icon: "icon-_psvpUP2"
        }
    }
    ,
    740620: e => {
        e.exports = {
            "css-value-header-toolbar-height": "38px",
            innerWrap: "innerWrap-OhqNVIYA",
            inner: "inner-OhqNVIYA",
            fake: "fake-OhqNVIYA",
            fill: "fill-OhqNVIYA",
            collapse: "collapse-OhqNVIYA",
            button: "button-OhqNVIYA",
            iconButton: "iconButton-OhqNVIYA",
            hidden: "hidden-OhqNVIYA",
            content: "content-OhqNVIYA",
            desktopPublish: "desktopPublish-OhqNVIYA",
            mobilePublish: "mobilePublish-OhqNVIYA"
        }
    }
    ,
    479289: (e, t, s) => {
        "use strict";
        s.d(t, {
            INTERVALS: () => a
        });
        var i = s(509806);
        const a = [{
            name: "",
            label: i.t(null, {
                context: "interval"
            }, s(537830))
        }, {
            name: "H",
            label: i.t(null, {
                context: "interval"
            }, s(705285))
        }, {
            name: "D",
            label: i.t(null, {
                context: "interval"
            }, s(306174))
        }, {
            name: "W",
            label: i.t(null, {
                context: "interval"
            }, s(725042))
        }, {
            name: "M",
            label: i.t(null, {
                context: "interval"
            }, s(179410))
        }]
    }
    ,
    325154: (e, t, s) => {
        "use strict";
        s.r(t);
        s.d(t, {
            HeaderToolbarRenderer: () => HeaderToolbarRenderer
        });
        var i = s(50959)
            , a = s(500962)
            , r = s(650151)
            , n = s(497754)
            , o = s.n(n)
            , l = s(685459)
            , SaveLoadSyncEmitter = s.n(l)
            , c = s(343370)
            , Settings = s(156963)
            , u = s(559410)
            , m = s(719036)
            , p = s(972535)
            , v = s(670086)
            , S = s(63869);
        function g(e) {
            return i.createElement("div", {
                className: o()(S.separator, e.className)
            })
        }
        var f = s(721043);
        function _(e) {
            const { children: t, className: s, noLeftDecoration: a, noRightDecoration: r, noMinimalWidth: o, onClick: l, removeSeparator: h } = e;
            return i.createElement(i.Fragment, null, !h && i.createElement("div", {
                className: f.separatorWrap
            }, i.createElement(g, {
                className: f.separator
            })), i.createElement("div", {
                className: n(s, f.group, {
                    [f.noMinimalWidth]: o,
                    [f.noLeftDecoration]: a,
                    [f.noRightDecoration]: r
                }),
                onClick: l
            }, t))
        }
        var y = s(438980)
            , C = s(509806)
            , b = s(72571)
            , E = s(759468)
            , w = s(245820);
        const M = {
            text: C.t(null, void 0, s(255646))
        };
        function I(e) {
            return i.createElement("div", {
                className: E.wrap
            }, i.createElement(b.Icon, {
                className: E.icon,
                icon: w
            }), M.text)
        }
        var k = s(350136)
            , V = s(49630)
            , R = s(710263)
            , W = s(661380)
            , F = s(164553);
        const L = {
            isVisibleScrollbar: !0,
            shouldMeasure: !0,
            hideButtonsFrom: 1
        };
        function N(e) {
            return i.createElement("div", {
                className: n(F.fadeLeft, e.className, {
                    [F.isVisible]: e.isVisible
                })
            })
        }
        function O(e) {
            return i.createElement("div", {
                className: n(F.fadeRight, e.className, {
                    [F.isVisible]: e.isVisible
                })
            })
        }
        function A(e) {
            return i.createElement(T, {
                ...e,
                className: F.scrollLeft
            })
        }
        function B(e) {
            return i.createElement(T, {
                ...e,
                className: F.scrollRight
            })
        }
        function T(e) {
            return i.createElement("div", {
                className: n(e.className, {
                    [F.isVisible]: e.isVisible
                }),
                onClick: e.onClick
            }, i.createElement("div", {
                className: F.iconWrap
            }, i.createElement(b.Icon, {
                icon: W,
                className: F.icon
            })))
        }
        const D = function (e = A, t = B, s = N, a = O) {
            var o;
            return (o = class extends i.PureComponent {
                constructor(e) {
                    super(e),
                        this._scroll = i.createRef(),
                        this._handleScrollLeft = () => {
                            if (this.props.onScrollButtonClick)
                                return void this.props.onScrollButtonClick("left");
                            const e = this.props.scrollStepSize || this.state.widthWrap - 50;
                            this.animateTo(Math.max(0, this.currentPosition() - e))
                        }
                        ,
                        this._handleScrollRight = () => {
                            if (this.props.onScrollButtonClick)
                                return void this.props.onScrollButtonClick("right");
                            const e = this.props.scrollStepSize || this.state.widthWrap - 50;
                            this.animateTo(Math.min((this.state.widthContent || 0) - (this.state.widthWrap || 0), this.currentPosition() + e))
                        }
                        ,
                        this._handleResizeWrap = ([e]) => {
                            const t = e.target.getBoundingClientRect();
                            this.props.onMeasureWrap && this.props.onMeasureWrap(t),
                                this.setState({
                                    widthWrap: t.width
                                }),
                                this._checkButtonsVisibility()
                        }
                        ,
                        this._handleResizeContent = ([e]) => {
                            const t = e.target.getBoundingClientRect();
                            this.props.onMeasureContent && this.props.onMeasureContent(t);
                            const { shouldDecreaseWidthContent: s, buttonsWidthIfDecreasedWidthContent: i } = this.props;
                            s && i ? this.setState({
                                widthContent: t.width + 2 * i
                            }) : this.setState({
                                widthContent: t.width
                            })
                        }
                        ,
                        this._handleScroll = () => {
                            const { onScroll: e } = this.props;
                            e && e(this.currentPosition(), this.isAtLeft(), this.isAtRight()),
                                this._checkButtonsVisibility()
                        }
                        ,
                        this._checkButtonsVisibility = () => {
                            const { isVisibleLeftButton: e, isVisibleRightButton: t } = this.state
                                , s = this.isAtLeft()
                                , i = this.isAtRight();
                            s || e ? s && e && this.setState({
                                isVisibleLeftButton: !1
                            }) : this.setState({
                                isVisibleLeftButton: !0
                            }),
                                i || t ? i && t && this.setState({
                                    isVisibleRightButton: !1
                                }) : this.setState({
                                    isVisibleRightButton: !0
                                })
                        }
                        ,
                        this.state = {
                            widthContent: 0,
                            widthWrap: 0,
                            isVisibleRightButton: !1,
                            isVisibleLeftButton: !1
                        }
                }
                componentDidMount() {
                    this._checkButtonsVisibility()
                }
                componentDidUpdate(e, t) {
                    t.widthWrap === this.state.widthWrap && t.widthContent === this.state.widthContent || this._handleScroll()
                }
                currentPosition() {
                    return this._scroll.current ? (0,
                        R.isRtl)() ? (0,
                            R.getLTRScrollLeft)(this._scroll.current) : this._scroll.current.scrollLeft : 0
                }
                isAtLeft() {
                    return !this._isOverflowed() || this.currentPosition() <= (0,
                        r.ensureDefined)(this.props.hideButtonsFrom)
                }
                isAtRight() {
                    return !this._isOverflowed() || this.currentPosition() + this.state.widthWrap >= this.state.widthContent - (0,
                        r.ensureDefined)(this.props.hideButtonsFrom)
                }
                animateTo(e, t = V.dur) {
                    const s = this._scroll.current;
                    s && ((0,
                        R.isRtl)() && (e = (0,
                            R.getLTRScrollLeftOffset)(s, e)),
                        t <= 0 ? s.scrollLeft = Math.round(e) : (0,
                            k.doAnimate)({
                                onStep(e, t) {
                                    s.scrollLeft = Math.round(t)
                                },
                                from: s.scrollLeft,
                                to: Math.round(e),
                                easing: V.easingFunc.easeInOutCubic,
                                duration: t
                            }))
                }
                render() {
                    const { children: r, isVisibleScrollbar: o, isVisibleFade: l, isVisibleButtons: h, shouldMeasure: c, shouldDecreaseWidthContent: d, buttonsWidthIfDecreasedWidthContent: u, onMouseOver: m, onMouseOut: p, scrollWrapClassName: v, fadeClassName: S } = this.props
                        , { isVisibleRightButton: g, isVisibleLeftButton: f } = this.state
                        , _ = d && u;
                    return i.createElement(y.Measure, {
                        onResize: c ? this._handleResizeWrap : null
                    }, (d => i.createElement("div", {
                        className: F.wrapOverflow,
                        onMouseOver: m,
                        onMouseOut: p,
                        ref: d
                    }, i.createElement("div", {
                        className: n(F.wrap, _ ? F.wrapWithArrowsOuting : "")
                    }, i.createElement("div", {
                        className: n(F.scrollWrap, v, {
                            [F.noScrollBar]: !o
                        }),
                        onScroll: this._handleScroll,
                        ref: this._scroll
                    }, i.createElement(y.Measure, {
                        onResize: c ? this._handleResizeContent : null
                    }, r)), l && i.createElement(s, {
                        isVisible: f,
                        className: S
                    }), l && i.createElement(a, {
                        isVisible: g,
                        className: S
                    }), h && i.createElement(e, {
                        onClick: this._handleScrollLeft,
                        isVisible: f
                    }), h && i.createElement(t, {
                        onClick: this._handleScrollRight,
                        isVisible: g
                    })))))
                }
                _isOverflowed() {
                    const { widthContent: e, widthWrap: t } = this.state;
                    return e > t
                }
            }
            ).defaultProps = L,
                o
        }(A, B, N, O);
        var x, P = s(199663);
        !function (e) {
            e.SymbolSearch = "header-toolbar-symbol-search";
            e.Intervals = "header-toolbar-intervals";
            e.ChartStyles = "header-toolbar-chart-styles";
            e.Compare = "header-toolbar-compare";
            e.Indicators = "header-toolbar-indicators";
            e.StudyTemplates = "header-toolbar-study-templates";
            e.Dropdown = "header-toolbar-dropdown";
            e.Alerts = "header-toolbar-alerts";
            e.Layouts = "header-toolbar-layouts";
            e.SaveLoad = "header-toolbar-save-load";
            e.UndoRedo = "header-toolbar-undo-redo";
            e.Properties = "header-toolbar-properties";
            e.QuickSearch = "header-toolbar-quick-search";
            e.PublishDesktop = "header-toolbar-publish-desktop";
            e.PublishMobile = "header-toolbar-publish-mobile";
            e.Fullscreen = "header-toolbar-fullscreen";
            e.Screenshot = "header-toolbar-screenshot";
            e.Replay = "header-toolbar-replay";
            e.Financials = "header-toolbar-financials"
        }(x || (x = {}));
        var z = s(921258)
            , H = s(261401)
            , q = s(622614)
            , G = s(892932)
            , X = s(740620);
        const U = (0, H.registryContextType)();
        const widgetEnabled = Settings.enabled("widget");
        class j extends i.PureComponent {
            constructor(e, t) {
                super(e, t),
                    this._handleMouseOver = e => {
                        (0,
                            z.hoverMouseEventFilter)(e) && this.setState({
                                isHovered: !0
                            })
                    }
                    ,
                    this._handleMouseOut = e => {
                        (0,
                            z.hoverMouseEventFilter)(e) && this.setState({
                                isHovered: !1
                            })
                    }
                    ,
                    this._handleInnerResize = ([e]) => {
                        const t = e.contentRect.width
                            , { onWidthChange: s } = this.props;
                        s && s(t)
                    }
                    ,
                    this._handleMeasureAvailableSpace = e => {
                        const { onAvailableSpaceChange: t } = this.props;
                        t && t(e.width)
                    }
                    ,
                    this._processCustoms = e => {
                        const { isFake: t, displayMode: s } = this.props
                            , { tools: a } = this.context;
                        return e.map((e => i.createElement(_, {
                            key: e.id
                        }, (e => {
                            switch (e.type) {
                                case "Button":
                                    return i.createElement(a.Custom, {
                                        ...e.params,
                                        isFake: t
                                    });
                                case "TradingViewStyledButton":
                                    return i.createElement(a.CustomTradingViewStyledButton, {
                                        ...e.params,
                                        className: X.button,
                                        displayMode: s
                                    });
                                case "Dropdown":
                                    return i.createElement(a.Dropdown, {
                                        displayMode: s,
                                        params: e.params
                                    });
                                default:
                                    return null
                            }
                        }
                        )(e))))
                    }
                    ,
                    this._fixLastGroup = (e, t, s) => {
                        if (t === s.length - 1 && i.isValidElement(e) && e.type === _) {
                            const t = void 0 !== this.context.tools.Publish && !this.props.readOnly;
                            return i.cloneElement(e, {
                                noRightDecoration: t
                            })
                        }
                        return e
                    }
                    ,
                    (0,
                        H.validateRegistry)(t, {
                            tools: m.any.isRequired
                        }),
                    this.state = {
                        isHovered: !1
                    }
            }
            render() {
                const { tools: tools } = this.context;
                const { features: t,
                    displayMode: s,
                    chartSaver: a,
                    studyMarket: r,
                    readOnly: o,
                    saveLoadSyncEmitter: l,
                    leftCustomElements: h,
                    rightCustomElements: c,
                    showScrollbarWhen: d,
                    isFake: u = !1
                } = this.props;

                const { isHovered: m } = this.state;
                const S = this._processCustoms(h);
                const g = this._processCustoms(c);
                const f = d.includes(s);
                
                return i.createElement(q.Toolbar, {
                    className: n(X.inner, {
                        [X.fake]: u
                    }),
                    onContextMenu: P.preventDefaultForContextMenu,
                    "data-is-fake-main-panel": u,
                    "aria-hidden": G.PLATFORM_ACCESSIBILITY_ENABLED ? u : void 0
                }, i.createElement(D, {
                    isVisibleFade: p.mobiletouch && f,
                    isVisibleButtons: !p.mobiletouch && f && m,
                    isVisibleScrollbar: !1,
                    shouldMeasure: !u,
                    onMouseOver: this._handleMouseOver,
                    onMouseOut: this._handleMouseOut,
                    onMeasureWrap: this._handleMeasureAvailableSpace
                }, (h => i.createElement("div", {
                    className: X.content,
                    ref: h,
                    role: G.PLATFORM_ACCESSIBILITY_ENABLED ? "none" : void 0
                }, i.createElement(y.Measure, {
                    onResize: u ? this._handleInnerResize : null
                }, (h => i.createElement("div", {
                    className: X.innerWrap,
                    ref: h
                }, i.createElement(v.FragmentMap, {
                    map: this._fixLastGroup
                }, !o && i.Children.toArray([(tools.SymbolSearch || tools.Compare) && i.createElement(_, {
                    key: "symbol"
                }, tools.SymbolSearch && i.createElement(tools.SymbolSearch, {
                    id: u ? void 0 : x.SymbolSearch,
                    isActionsVisible: t.allowSymbolSearchSpread
                }), tools.Compare && i.createElement(tools.Compare, {
                    id: u ? void 0 : x.Compare,
                    className: X.button,
                    displayMode: s
                })), tools.DateRange && i.createElement(_, {
                    key: "range"
                }, i.createElement(tools.DateRange, null)), tools.Intervals && i.createElement(_, {
                    key: "intervals"
                }, i.createElement(tools.Intervals, {
                    id: u ? void 0 : x.Intervals,
                    isShownQuicks: t.allowFavoriting,
                    isFavoritingAllowed: t.allowFavoriting,
                    displayMode: s,
                    isFake: u
                })), tools.Bars && i.createElement(_, {
                    key: "styles"
                }, i.createElement(tools.Bars, {
                    id: u ? void 0 : x.ChartStyles,
                    isShownQuicks: t.allowFavoriting,
                    isFavoritingAllowed: t.allowFavoriting,
                    displayMode: s,
                    isFake: u
                })), widgetEnabled && tools.Compare && !tools.SymbolSearch && i.createElement(_, {
                    key: "compare"
                }, i.createElement(tools.Compare, {
                    id: u ? void 0 : x.Compare,
                    className: X.button,
                    displayMode: s
                })), tools.Indicators && i.createElement(_, {
                    key: "indicators"
                }, i.createElement(tools.Indicators, {
                    id: u ? void 0 : x.Indicators,
                    className: X.button,
                    studyMarket: r,
                    displayMode: s
                }), tools.Templates && i.createElement(tools.Templates, {
                    id: u ? void 0 : x.StudyTemplates,
                    isShownQuicks: t.allowFavoriting,
                    isFavoritingAllowed: t.allowFavoriting,
                    displayMode: s
                })), tools.Alert && i.createElement(_, {
                    key: "alert"
                }, i.createElement(tools.Alert, {
                    id: u ? void 0 : x.Alerts,
                    className: X.button,
                    displayMode: s
                }), tools.Replay && i.createElement(tools.Replay, {
                    id: u ? void 0 : x.Replay,
                    className: X.button,
                    displayMode: s
                })), tools.AlertReferral && i.createElement(_, {
                    key: "alert-referral"
                }, i.createElement(tools.AlertReferral, {
                    className: X.button,
                    displayMode: s
                })), tools.ScalePercentage && i.createElement(_, {
                    key: "percentage"
                }, i.createElement(tools.ScalePercentage, null)), tools.ScaleLogarithm && i.createElement(_, {
                    key: "logarithm"
                }, i.createElement(tools.ScaleLogarithm, null)), ...S]), function (e) {
                    const t = e.findIndex((e => i.isValidElement(e) && !!e.key && -1 !== e.key.toString().indexOf("view-only-badge")));
                    return [t].filter((e => e >= 0)).forEach((t => {
                        e = i.Children.map(e, ((e, s) => {
                            if (i.isValidElement(e)) {
                                switch ([t - 1, t, t + 1].indexOf(s)) {
                                    case 0:
                                        const t = {
                                            noRightDecoration: !0
                                        };
                                        e = i.cloneElement(e, t);
                                        break;
                                    case 1:
                                        const s = {
                                            noLeftDecoration: !0,
                                            noRightDecoration: !0
                                        };
                                        e = i.cloneElement(e, s);
                                        break;
                                    case 2:
                                        const a = {
                                            noLeftDecoration: !0
                                        };
                                        e = i.cloneElement(e, a)
                                }
                            }
                            return e
                        }
                        ))
                    }
                    )),
                        e
                }(i.Children.toArray([o && i.createElement(_, {
                    key: "view-only-badge",
                    removeSeparator: !0
                }, i.createElement(I, null)), !o && tools.UndoRedo && i.createElement(_, {
                    key: "undo-redo"
                }, i.createElement(tools.UndoRedo, {
                    id: u ? void 0 : x.UndoRedo
                })), i.createElement(_, {
                    removeSeparator: !0,
                    key: "gap-1",
                    className: n(X.fill, u && X.collapse)
                }), (tools.Layout || tools.SaveLoad) && i.createElement(_, {
                    key: "layout",
                    removeSeparator: !0
                }, !o && tools.Layout && i.createElement(tools.Layout, {
                    id: u ? void 0 : x.Layouts
                }), tools.SaveLoad && i.createElement(tools.SaveLoad, {
                    id: u ? void 0 : x.SaveLoad,
                    chartSaver: a,
                    isReadOnly: o,
                    displayMode: s,
                    isFake: u,
                    stateSyncEmitter: l
                })), tools.SaveLoadReferral && i.createElement(_, {
                    key: "save-load-referral"
                }, i.createElement(tools.SaveLoadReferral, {
                    isReadOnly: o,
                    displayMode: s
                })), !1, t.showLaunchInPopupButton && tools.OpenPopup && i.createElement(_, {
                    key: "popup",
                    removeSeparator: !1
                }, i.createElement(tools.OpenPopup, null)), !o && tools.Properties && i.createElement(_, {
                    key: "properties",
                    removeSeparator: !1
                }, !o && tools.QuickSearch && i.createElement(tools.QuickSearch, {
                    id: u ? void 0 : x.QuickSearch,
                    className: X.iconButton
                }), !o && i.createElement(tools.Properties, {
                    id: u ? void 0 : x.Properties,
                    className: X.iconButton
                }), i.createElement(i.Fragment, null, !o && tools.Fullscreen && i.createElement(_, {
                    key: "fullscreen",
                    onClick: this._trackFullscreenButtonClick,
                    removeSeparator: !0
                }, i.createElement(tools.Fullscreen, {
                    id: u ? void 0 : x.Fullscreen
                })), tools.Screenshot && i.createElement(tools.Screenshot, {
                    id: u ? void 0 : x.Screenshot,
                    className: X.iconButton
                }))), widgetEnabled && !o && tools.Fullscreen && i.createElement(_, {
                    key: "fullscreen",
                    onClick: this._trackFullscreenButtonClick,
                    removeSeparator: !0
                }, i.createElement(tools.Fullscreen, {
                    id: u ? void 0 : x.Fullscreen
                })), widgetEnabled && tools.Screenshot && i.createElement(_, {
                    key: "screenshot",
                    removeSeparator: !0
                }, i.createElement(tools.Screenshot, {
                    id: u ? void 0 : x.Screenshot,
                    className: X.iconButton
                })), !o && tools.Publish && i.createElement(_, {
                    key: "publish",
                    className: X.mobilePublish,
                    removeSeparator: !0
                }, i.createElement(tools.Publish, {
                    id: u ? void 0 : x.PublishMobile
                })), ...g]))))))))), tools.Publish && !o && !u && i.createElement(tools.Publish, {
                    id: x.PublishDesktop,
                    className: X.desktopPublish
                }))
            }

            _trackFullscreenButtonClick() {
                0
            }
        }
        j.contextType = U;
        var Q = s(588517)
            , J = s.n(Q)
            , K = s(584776);
        class $ extends K.CommonJsonStoreService {
            constructor(e, t, s = []) {
                super(e, t, "FAVORITE_CHART_STYLES_CHANGED", "StyleWidget.quicks", s)
            }
        }
        var Z = s(739343)
            , ee = s(992741);
        class FavoriteIntervalsService extends K.AbstractJsonStoreService {
            constructor(e, t, s) {
                super(e, t, "FAVORITE_INTERVALS_CHANGED", "IntervalWidget.quicks", s)
            }
            _serialize(e) {
                return (0,
                    ee.uniq)(e.map(Z.normalizeIntervalString))
            }
            _deserialize(e) {
                return (0, ee.uniq)((0, Z.convertResolutionsFromSettings)(e)
                    .filter(Z.isResolutionMultiplierValid)
                    .map(Z.normalizeIntervalString))
            }
        }
        var se = s(688401)
            , ie = s(466052)
            , ae = s.n(ie)
            , defaultSettings = s(870122)
            , ne = s(717866);
        class CustomIntervalsServices extends K.AbstractJsonStoreService {
            constructor(e, t, s = []) {
                super(e, t, "CUSTOM_INTERVALS_CHANGED", "IntervalWidget.intervals", s)
            }
            set(e, t) {
                e.length,
                    this.get().length,
                    super.set(e, t)
            }
            _serialize(e) {
                return (0,
                    ee.uniq)(e.map(Z.normalizeIntervalString))
            }
            _deserialize(e) {
                return (0,
                    ee.uniq)((0,
                        Z.convertResolutionsFromSettings)(e).filter(Z.isResolutionMultiplierValid).map(Z.normalizeIntervalString))
            }
        }
        const customIntervalsServices = new CustomIntervalsServices(ne.TVXWindowEvents, defaultSettings);
        var he = s(479289);
        class IntervalService {
            constructor(chartApiInstance) {
                this._customIntervalsService = customIntervalsServices;
                this._supportedIntervalsMayChange = new (ae());
                this._fireSupportedIntervalsMayChange = () => {
                    this._supportedIntervalsMayChange.fire()
                };
                this._chartApiInstance = chartApiInstance;
                se.linking.supportedResolutions.subscribe(this._fireSupportedIntervalsMayChange);
                se.linking.range.subscribe(this._fireSupportedIntervalsMayChange);
                se.linking.seconds.subscribe(this._fireSupportedIntervalsMayChange);
                se.linking.ticks.subscribe(this._fireSupportedIntervalsMayChange);
                se.linking.intraday.subscribe(this._fireSupportedIntervalsMayChange);
                se.linking.dataFrequencyResolution.subscribe(this._fireSupportedIntervalsMayChange);
            }
            destroy() {
                se.linking.supportedResolutions.unsubscribe(this._fireSupportedIntervalsMayChange);
                se.linking.range.unsubscribe(this._fireSupportedIntervalsMayChange);
                se.linking.seconds.unsubscribe(this._fireSupportedIntervalsMayChange);
                se.linking.ticks.unsubscribe(this._fireSupportedIntervalsMayChange);
                se.linking.intraday.unsubscribe(this._fireSupportedIntervalsMayChange);
                se.linking.dataFrequencyResolution.unsubscribe(this._fireSupportedIntervalsMayChange);
            }
            getDefaultIntervals() {
                return null === this._chartApiInstance ? [] : this._chartApiInstance.defaultResolutions().map(Z.normalizeIntervalString);
            }
            getCustomIntervals() {
                return this._customIntervalsService.get();
            }
            add(e, t, s) {
                if (!this.isValidInterval(e, t))
                    return null;
                const i = (0, Z.normalizeIntervalString)(`${e}${t}`);
                const a = this.getCustomIntervals();

                return this._isIntervalDefault(i) || a.includes(i) ? null :
                    (this._customIntervalsService.set((0, Z.sortResolutions)([...a, i])), i);
            }
            remove(e) {
                this._customIntervalsService.set(this.getCustomIntervals().filter((t => t !== e)))
            }
            isValidInterval(e, t) {
                return (0, Z.isResolutionMultiplierValid)(`${e}${t}`)
            }
            isSupportedInterval(e) {
                return (0, Z.isAvailable)(e)
            }
            supportedIntervalsMayChange() {
                return this._supportedIntervalsMayChange
            }
            getOnChange() {
                return this._customIntervalsService.getOnChange()
            }
            getPossibleIntervals() {
                return he.INTERVALS
            }
            getResolutionUtils() {
                return {
                    getMaxResolutionValue: Z.getMaxResolutionValue,
                    getTranslatedResolutionModel: Z.getTranslatedResolutionModel,
                    mergeResolutions: Z.mergeResolutions,
                    sortResolutions: Z.sortResolutions
                }
            }
            _isIntervalDefault(e) {
                return this.getDefaultIntervals().includes(e)
            }
        }
        var de = s(632863)
            , ue = s(771737)
            , me = s(29257);
        const pe = {};
        let ve = null;
        class FavoriteScriptsModel {
            constructor(settings = defaultSettings) {
                this._favorites = [];
                this._favoritesChanged = new (ae());
                this._settings = settings;
                ne.TVXWindowEvents.on("StudyFavoritesChanged", (e => {
                    const t = JSON.parse(e);
                    this._loadFromState(t.favorites || [])
                }));
                this._settings.onSync.subscribe(this, this._loadFavs);
                this._loadFavs();
            }
            isFav(e) {
                const t = this.favId(e);
                return -1 !== this._findFavIndex(t)
            }
            toggleFavorite(e) {
                this.isFav(e) ? this.removeFavorite(e) : this.addFavorite(e)
            }
            addFavorite(e) {
                const t = this.favId(e);
                this._favorites.push(fe(t)),
                    this._favoritesChanged.fire(),
                    this._saveFavs()
            }
            removeFavorite(e) {
                const t = this.favId(e)
                    , s = this._findFavIndex(t);
                -1 !== s && (this._favorites.splice(s, 1),
                    this._favoritesChanged.fire()),
                    this._saveFavs()
            }
            favId(e) {
                return (0,
                    me.isPineIdString)(e) ? e : (0,
                        me.extractPineId)(e) || (0,
                            ue.extractStudyId)(e)
            }
            favorites() {
                return this._favorites
            }
            favoritePineIds() {
                return this._favorites.filter((e => "pine" === e.type)).map((e => e.pineId))
            }
            favoritesChanged() {
                return this._favoritesChanged
            }
            static getInstance() {
                null === ve && (ve = new FavoriteScriptsModel);
                return ve;
            }
            static create(e) {
                return new FavoriteScriptsModel(e);
            }
            _loadFavs() {
                const e = this._settings.getJSON("studyMarket.favorites", []);
                this._loadFromState(e)
            }
            _saveFavs() {
                const e = this._stateToSave();
                this._settings.setJSON("studyMarket.favorites", e, {
                    forceFlush: !0
                });
                ne.TVXWindowEvents.emit("StudyFavoritesChanged", JSON.stringify({
                    favorites: e
                }));
            }
            _stateToSave() {
                return this._favorites.map(ge);
            }
            _loadFromState(e) {
                this._favorites = e.map((e => fe(function (e) {
                    return e in pe ? pe[e] : e
                }(e))));

                this._favoritesChanged.fire();
            }
            _findFavIndex(e) {
                return this._favorites.findIndex((t => e === ge(t)))
            }
        }
        function ge(e) {
            return "java" === e.type ? e.studyId : e.pineId
        }
        function fe(e) {
            return (0,
                me.isPineIdString)(e) ? {
                type: "pine",
                pineId: e
            } : {
                type: "java",
                studyId: e
            }
        }
        var _e = s(628589);
        const ye = {
            [_e.ResolutionKind.Ticks]: !1,
            [_e.ResolutionKind.Seconds]: !1,
            [_e.ResolutionKind.Minutes]: !1,
            [_e.SpecialResolutionKind.Hours]: !1,
            [_e.ResolutionKind.Days]: !1,
            [_e.ResolutionKind.Range]: !1
        };
        class IntervalsMenuViewStateService extends K.CommonJsonStoreService {
            constructor(e, t, s = ye) {
                super(e, t, "INTERVALS_MENU_VIEW_STATE_CHANGED", "IntervalWidget.menu.viewState", s)
            }
            isAllowed(e) {
                return Object.keys(ye).includes(e)
            }
        }
        var be = s(868649);
        const ChartTypes = {
            Area: 3,
            "HLC area": 16,
            Bars: 0,
            Candles: 1,
            "Heiken Ashi": 8,
            "Hollow Candles": 9,
            Line: 2,
            Renko: 4,
            Kagi: 5,
            "Point & figure": 6,
            "Line Break": 7,
            Baseline: 10,
            LineWithMarkers: 14,
            Stepline: 15,
            Columns: 13,
            "High-low": 12
        }
            , we = ["1", "30", "60"];
        function Me(e = []) {
            let t = e.map((e => ChartTypes[e])) || [1, 4, 5, 6];
            Settings.enabled("widget") && (t = [0, 1, 3]);
            return t;
        }
        function Ie(e = []) {
            return (0, Z.mergeResolutions)(e, Settings.enabled("star_some_intervals_by_default") ? we : [])
        }
        new FavoriteIntervalsService(ne.TVXWindowEvents, defaultSettings, Ie()),
            new $(ne.TVXWindowEvents, defaultSettings, Me()),
            new be.FavoriteStudyTemplateService(ne.TVXWindowEvents, defaultSettings);
        const ke = {
            tools: m.any.isRequired,
            isFundamental: m.any,
            chartApiInstance: m.any,
            availableTimeFrames: m.any,
            chartWidgetCollection: m.any,
            windowMessageService: m.any,
            favoriteChartStylesService: m.any,
            favoriteIntervalsService: m.any,
            intervalService: m.any,
            favoriteStudyTemplatesService: m.any,
            studyTemplates: m.any,
            chartChangesWatcher: m.any,
            saveChartService: m.any,
            sharingChartService: m.any,
            loadChartService: m.any,
            chartWidget: m.any,
            favoriteScriptsModel: m.any,
            intervalsMenuViewStateService: m.any,
            templatesMenuViewStateService: m.any,
            openGlobalSearch: m.any,
            snapshotUrl: m.any
        };
        var Ve = s(98454)
            , Re = s(120694);
        const We = [];
        class HeaderToolbar extends i.PureComponent {
            constructor(props) {
                super(props);
                this._saveLoadSyncEmitter = new (SaveLoadSyncEmitter());
                this._handleFullWidthChange = e => {
                    this._fullWidth = e;
                    this.setState({ measureValid: !1 });
                };

                this._handleFavoritesWidthChange = e => {
                    this._favoritesWidth = e;
                    this.setState({ measureValid: !1 });
                };

                this._handleCollapseWidthChange = e => {
                    this._collapseWidth = e;
                    this.setState({ measureValid: !1 });
                }

                this._handleMeasure = e => {
                    this.setState({
                        availableWidth: e,
                        measureValid: !1
                    });
                }

                const {
                    tools: tools,
                    windowMessageService: windowMessageService,
                    chartWidgetCollection: chartWidgetCollection,
                    chartApiInstance: chartApiInstance,
                    availableTimeFrames: availableTimeFrames,
                    isFundamental: isFundamental,
                    favoriteIntervalsService: favoriteIntervalsService,
                    favoriteChartStylesService: favoriteChartStylesService,
                    favoriteStudyTemplatesService: favoriteStudyTemplatesService,
                    studyTemplates: studyTemplates,
                    saveChartService: saveChartService,
                    sharingChartService: sharingChartService,
                    loadChartService: loadChartService,
                    snapshotUrl: snapshotUrl,
                    openGlobalSearch: openGlobalSearch
                } = props;

                this._showScrollbarWhen = (0, r.ensureDefined)(props.allowedModes).slice(-1);
                this._panelWidthChangeHandlers = {
                    full: this._handleFullWidthChange,
                    medium: this._handleFavoritesWidthChange,
                    small: this._handleCollapseWidthChange
                };
                const { chartChangesWatcher: chartChangesWatcher } = props;
                this._chartChangesWatcher = chartChangesWatcher;
                const C = Me(this.props.defaultFavoriteStyles);
                this._favoriteChartStylesService = favoriteChartStylesService || new $(ne.TVXWindowEvents, defaultSettings, C);
                const b = Ie(this.props.defaultFavoriteIntervals);
                this._favoriteIntervalsService = favoriteIntervalsService || new FavoriteIntervalsService(ne.TVXWindowEvents, defaultSettings, b);
                this._intervalsMenuViewStateService = new IntervalsMenuViewStateService(ne.TVXWindowEvents, defaultSettings);
                this._intervalService = new IntervalService(chartApiInstance);

                this._registry = {
                    tools: tools,
                    isFundamental: isFundamental,
                    chartWidgetCollection: chartWidgetCollection,
                    windowMessageService: windowMessageService,
                    chartApiInstance: chartApiInstance,
                    availableTimeFrames: availableTimeFrames,
                    favoriteStudyTemplatesService: favoriteStudyTemplatesService,
                    studyTemplates: studyTemplates,
                    saveChartService: saveChartService,
                    sharingChartService: sharingChartService,
                    loadChartService: loadChartService,
                    intervalsMenuViewStateService: this._intervalsMenuViewStateService,
                    favoriteChartStylesService: this._favoriteChartStylesService,
                    favoriteIntervalsService: this._favoriteIntervalsService,
                    intervalService: this._intervalService,
                    chartChangesWatcher: this._chartChangesWatcher,
                    chartWidget: chartWidgetCollection.activeChartWidget.value(),
                    favoriteScriptsModel: FavoriteScriptsModel.getInstance(),
                    templatesMenuViewStateService: this._templatesMenuVuewStateService,
                    snapshotUrl: snapshotUrl,
                    openGlobalSearch: openGlobalSearch
                };

                this.state = {
                    isVisible: !0,
                    availableWidth: 0,
                    displayMode: "full",
                    measureValid: !1,
                    leftCustomElements: [],
                    rightCustomElements: []
                };

                this._readOnly = chartWidgetCollection.readOnly();

                this._features = {
                    allowFavoriting: Settings.enabled("items_favoriting"),
                    showIdeasButton: Boolean(this.props.ideas),
                    showLaunchInPopupButton: Boolean(this.props.popupButton),
                    allowSymbolSearchSpread: Settings.enabled("header_symbol_search") && Settings.enabled("show_spread_operators"),
                    allowToolbarHiding: Settings.enabled("collapsible_header")
                };
                this._setDisplayMode = (0, c.default)(this._setDisplayMode, 100);
                this._negotiateResizer();
            }
            componentDidUpdate(e, t) {
                const { isVisible: s, measureValid: i } = this.state;
                s !== t.isVisible && (u.emit("toggle_header", s), this._negotiateResizer());
                i || this._setDisplayMode();
            }
            render() {
                const { resizerBridge: resizerBridge, allowedModes: t, ...s } = this.props;
                const { displayMode: displayMode, isVisible: isVisible, leftCustomElements: left, rightCustomElements: right } = this.state;
                const c = {
                    features: this._features,
                    readOnly: this._readOnly,
                    isFake: !1,
                    saveLoadSyncEmitter: this._saveLoadSyncEmitter,
                    leftCustomElements: left,
                    rightCustomElements: right,
                    ...s
                };
                const d = {
                    ...c,
                    isFake: !0,
                    showScrollbarWhen: We
                };
                const u = (0, r.ensureDefined)(t);
                const m = this.props.tools.PublishButtonManager || i.Fragment;
                return i.createElement(H.RegistryProvider, {
                    value: this._registry,
                    validation: ke
                }, i.createElement(m, null, i.createElement("div", {
                    className: n(Re.toolbar, {
                        [Re.isHidden]: !isVisible
                    }),
                    onClick: this.props.onClick
                }, i.createElement("div", {
                    className: Re.overflowWrap
                }, u.map((e => i.createElement(j, {
                    key: e,
                    displayMode: e,
                    onWidthChange: this._panelWidthChangeHandlers[e],
                    ...d
                }))), i.createElement(j, {
                    key: "live",
                    showScrollbarWhen: this._showScrollbarWhen,
                    displayMode: displayMode,
                    onAvailableSpaceChange: this._handleMeasure,
                    ...c
                })))))
            }
            addButton(id, options) {
                if (!options.useTradingViewStyle)
                    return this._addCustomHTMLButton(id, options.align);
                this._addCustomTradingViewStyledButton(id, options)
            }
            addDropdown(id, params) {
                const { leftCustomElements: left, rightCustomElements: right } = this.state;
                const attr = {
                    type: "Dropdown",
                    id: id,
                    params: params
                };

                "left" === params.align ? this.setState({
                    leftCustomElements: [...left, attr]
                }) : this.setState({
                    rightCustomElements: [...right, attr]
                })
            }
            updateDropdown(id, options) {
                const filter = t => "Dropdown" === t.type && t.id === id;
                const i = this.state.leftCustomElements.find(filter) || this.state.rightCustomElements.find(filter);
                if (void 0 !== i) {
                    i.params = {
                        ...i.params,
                        ...options
                    };

                    this.setState({
                        leftCustomElements: this.state.leftCustomElements.slice(),
                        rightCustomElements: this.state.rightCustomElements.slice()
                    });
                }
            }
            removeDropdown(id) {
                const filter = t => "Dropdown" === t.type && t.id !== id;
                const left = this.state.leftCustomElements.filter(filter);
                const right = this.state.rightCustomElements.filter(filter);
                this.setState({
                    leftCustomElements: left,
                    rightCustomElements: right
                });
            }
            _negotiateResizer() {
                this.props.resizerBridge.negotiateHeight(this.state.isVisible ? de.HEADER_TOOLBAR_HEIGHT_EXPANDED : de.HEADER_TOOLBAR_HEIGHT_COLLAPSED);
            }
            _setDisplayMode() {
                const { availableWidth: availableWidth } = this.state
                const { allowedModes: allowedModes } = this.props;
                const s = {
                    full: this._fullWidth,
                    medium: this._favoritesWidth,
                    small: this._collapseWidth
                };
                const modes = (0, r.ensureDefined)(allowedModes);
                let a = modes.map((e => s[e])).findIndex((t => availableWidth >= t));
                -1 === a && (a = modes.length - 1);
                const displayMode = modes[a];
                this.setState({
                    measureValid: !0,
                    displayMode: displayMode
                })
            }
            _addCustomHTMLButton(id, align = "left") {
                const width = new (J())(0);
                const elm = (0, Ve.parseHtmlElement)(`<div class="apply-common-tooltip ${Re.customButton}">`);
                const options = {
                    type: "Button",
                    id: id,
                    params: {
                        key: Number(new Date()),
                        element: elm,
                        width: width
                    }
                };

                this._addCustomElementToState(align, options);
                return elm;
            }
            _addCustomTradingViewStyledButton(id, options) {
                const elm = {
                    type: "TradingViewStyledButton",
                    id: id,
                    params: {
                        key: Number(new Date),
                        text: options.text,
                        title: options.title,
                        onClick: options.onClick
                    }
                };

                this._addCustomElementToState(options.align, elm);
            }
            _addCustomElementToState(align, options) {
                const { leftCustomElements: leftElm, rightCustomElements: rightElm } = this.state;
                "left" === align ? this.setState({
                    leftCustomElements: [...leftElm, options]
                }) : this.setState({
                    rightCustomElements: [...rightElm, options]
                })
            }
        }

        HeaderToolbar.defaultProps = {
            allowedModes: ["full", "medium"]
        };

        class HeaderToolbarRenderer {
            constructor(e, t) {
                this._component = null;
                this._handleRef = components => {
                    this._component = components
                };
                this._container = e;
                a.render(i.createElement(HeaderToolbar, {
                    ...t,
                    ref: this._handleRef
                }), this._container);
            }

            destroy() {
                a.unmountComponentAtNode(this._container);
            }

            getComponent() {
                return (0, r.ensureNotNull)(this._component);
            }
        }
    }
    ,
    245820: e => {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"><path fill="currentColor" fill-rule="evenodd" d="M4.56 14a10.05 10.05 0 00.52.91c.41.69 1.04 1.6 1.85 2.5C8.58 19.25 10.95 21 14 21c3.05 0 5.42-1.76 7.07-3.58A17.18 17.18 0 0023.44 14a9.47 9.47 0 00-.52-.91c-.41-.69-1.04-1.6-1.85-2.5C19.42 8.75 17.05 7 14 7c-3.05 0-5.42 1.76-7.07 3.58A17.18 17.18 0 004.56 14zM24 14l.45-.21-.01-.03a7.03 7.03 0 00-.16-.32c-.11-.2-.28-.51-.5-.87-.44-.72-1.1-1.69-1.97-2.65C20.08 7.99 17.45 6 14 6c-3.45 0-6.08 2-7.8 3.92a18.18 18.18 0 00-2.64 3.84v.02h-.01L4 14l-.45-.21-.1.21.1.21L4 14l-.45.21.01.03a5.85 5.85 0 00.16.32c.11.2.28.51.5.87.44.72 1.1 1.69 1.97 2.65C7.92 20.01 10.55 22 14 22c3.45 0 6.08-2 7.8-3.92a18.18 18.18 0 002.64-3.84v-.02h.01L24 14zm0 0l.45.21.1-.21-.1-.21L24 14zm-10-3a3 3 0 100 6 3 3 0 000-6zm-4 3a4 4 0 118 0 4 4 0 01-8 0z"/></svg>'
    }
    ,
    306174: e => {
        e.exports = {
            ar: ["Ø£ÙØ§Ù…"],
            ca_ES: ["dies"],
            cs: "days",
            de: ["Tage"],
            el: "days",
            en: "days",
            es: ["dĂ­as"],
            fa: "days",
            fr: ["jours"],
            he_IL: ["×™××™×"],
            hu_HU: ["nap"],
            id_ID: ["hari"],
            it: ["giorni"],
            ja: ["æ—¥"],
            ko: ["ë‚ "],
            ms_MY: ["hari"],
            nl_NL: "days",
            pl: ["dni"],
            pt: ["dias"],
            ro: "days",
            ru: ["Đ´Đ½Đ¸"],
            sv: ["dagar"],
            th: ["à¸§à¸±à¸™"],
            tr: ["gĂ¼n"],
            vi: ["Ngày"],
            zh: ["æ—¥"],
            zh_TW: ["å¤©"]
        }
    }
    ,
    705285: e => {
        e.exports = {
            ar: ["Ø³Ø§Ø¹Ø§Øª"],
            ca_ES: ["hores"],
            cs: "hours",
            de: ["Stunden"],
            el: "hours",
            en: "hours",
            es: ["horas"],
            fa: "hours",
            fr: ["heures"],
            he_IL: ["×©×¢×•×ª"],
            hu_HU: ["Ă³ra"],
            id_ID: ["jam"],
            it: ["ore"],
            ja: ["æ™‚é–“"],
            ko: ["́‹œ"],
            ms_MY: ["jam"],
            nl_NL: "hours",
            pl: ["godziny"],
            pt: ["horas"],
            ro: "hours",
            ru: ["Ñ‡Đ°ÑÑ‹"],
            sv: ["timmar"],
            th: ["à¸à¸±à¹ˆà¸§à¹‚à¸¡à¸‡"],
            tr: ["saat"],
            vi: ["Giờ"],
            zh: ["å°æ—¶"],
            zh_TW: ["å°æ™‚"]
        }
    }
    ,
    179410: e => {
        e.exports = {
            ar: ["Ø´Ù‡ÙˆØ±"],
            ca_ES: ["mesos"],
            cs: "months",
            de: ["Monate"],
            el: "months",
            en: "months",
            es: ["meses"],
            fa: "months",
            fr: ["mois"],
            he_IL: ["×—×•×“×©×™×"],
            hu_HU: ["hĂ³nap"],
            id_ID: ["bulan"],
            it: ["mesi"],
            ja: ["æœˆ"],
            ko: ["ë‹¬"],
            ms_MY: ["bulan"],
            nl_NL: "months",
            pl: ["miesiÄ…ce"],
            pt: ["meses"],
            ro: "months",
            ru: ["Đ¼ĐµÑÑÑ†Ñ‹"],
            sv: ["mĂ¥nader"],
            th: ["à¹€à¸”à¸·à¸­à¸™"],
            tr: ["ay"],
            vi: ["Tháng"],
            zh: ["ä¸ªæœˆ"],
            zh_TW: ["å€‹æœˆ"]
        }
    }
    ,
    537830: e => {
        e.exports = {
            ar: ["Ø¯Ù‚Ø§Ø¦Ù‚"],
            ca_ES: ["minuts"],
            cs: "minutes",
            de: ["Minuten"],
            el: "minutes",
            en: "minutes",
            es: ["minutos"],
            fa: "minutes",
            fr: "minutes",
            he_IL: ["×“×§×•×ª"],
            hu_HU: ["perc"],
            id_ID: ["menit"],
            it: ["minuti"],
            ja: ["åˆ†"],
            ko: ["ë¶„"],
            ms_MY: ["minit"],
            nl_NL: "minutes",
            pl: ["minuty"],
            pt: ["minutos"],
            ro: "minutes",
            ru: ["Đ¼Đ¸Đ½ÑƒÑ‚Ñ‹"],
            sv: ["minuter"],
            th: ["à¸™à¸²à¸—à¸µ"],
            tr: ["dakika"],
            vi: ["phĂºt"],
            zh: ["åˆ†é’Ÿ"],
            zh_TW: ["åˆ†é˜"]
        }
    }
    ,
    725042: e => {
        e.exports = {
            ar: ["Ø£Ø³Ø§Ø¨ÙØ¹"],
            ca_ES: ["setmanes"],
            cs: "weeks",
            de: ["Wochen"],
            el: "weeks",
            en: "weeks",
            es: ["semanas"],
            fa: "weeks",
            fr: ["semaines"],
            he_IL: ["×©×‘×•×¢×•×ª"],
            hu_HU: ["hĂ©t"],
            id_ID: ["minggu"],
            it: ["settimane"],
            ja: ["é€±"],
            ko: ["́£¼"],
            ms_MY: ["minggu"],
            nl_NL: "weeks",
            pl: ["tygodnie"],
            pt: ["semanas"],
            ro: "weeks",
            ru: ["Đ½ĐµĐ´ĐµĐ»Đ¸"],
            sv: ["veckor"],
            th: ["à¸ªà¸±à¸›à¸”à¸²à¸«à¹Œ"],
            tr: ["hafta"],
            vi: ["Tuần"],
            zh: ["å‘¨"],
            zh_TW: ["å‘¨"]
        }
    }
    ,
    255646: e => {
        e.exports = {
            ar: ["ÙˆØ¶Ø¹ Ø§Ù„Ø¹Ø±Ø¶ ÙÙ‚Ø·"],
            ca_ES: ["Mode nomĂ©s lectura"],
            cs: "View Only Mode",
            de: ["Ansichtsmodus"],
            el: "View Only Mode",
            en: "View Only Mode",
            es: ["Modo sĂ³lo lectura"],
            fa: "View Only Mode",
            fr: ["Mode Voir uniquement"],
            he_IL: ["××¦×‘ ×ª×¦×•×’×” ×‘×œ×‘×“"],
            hu_HU: "View Only Mode",
            id_ID: ["Mode Hanya Melihat"],
            it: ["ModalitĂ  di sola visualizzazione"],
            ja: ["è¡¨ç¤ºå°‚ç”¨ăƒ¢ăƒ¼ăƒ‰"],
            ko: ["ë·° ́˜¨ë¦¬ ëª¨ë“œ"],
            ms_MY: ["Mod Lihat Sahaja"],
            nl_NL: "View Only Mode",
            pl: ["Tryb PodglÄ…du"],
            pt: ["Modo de VisualizaĂ§Ă£o"],
            ro: "View Only Mode",
            ru: ['Đ ĐµĐ¶Đ¸Đ¼ "Đ¢Đ¾Đ»ÑŒĐºĐ¾ Đ¿Ñ€Đ¾ÑĐ¼Đ¾Ñ‚Ñ€"'],
            sv: ["Endast visningslĂ¤ge"],
            th: ["à¹‚à¸«à¸¡à¸”à¹à¸à¸à¸”à¸¹à¸­à¸¢à¹ˆà¸²à¸‡à¹€à¸”à¸µà¸¢à¸§"],
            tr: ["Sadece GĂ¶rme Modu"],
            vi: ["Cháº¿ Ä‘á»™ chá»‰ xem"],
            zh: ["ä»…æŸ¥çœ‹æ¨¡å¼"],
            zh_TW: ["åƒ…æŸ¥çœ‹æ¨¡å¼"]
        }
    }
}]);