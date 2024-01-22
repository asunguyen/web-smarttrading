(self.webpackChunktradingview = self.webpackChunktradingview || []).push([[6780], {
    92229: e=>{
        e.exports = {
            defaultsButtonText: "defaultsButtonText-zcLkuEMM",
            defaultsButtonItem: "defaultsButtonItem-zcLkuEMM",
            defaultsButtonIcon: "defaultsButtonIcon-zcLkuEMM"
        }
    }
    ,
    518008: e=>{
        e.exports = {
            themesButtonText: "themesButtonText-AeBgp7zz",
            themesButtonIcon: "themesButtonIcon-AeBgp7zz",
            defaultsButtonText: "defaultsButtonText-AeBgp7zz",
            defaultsButtonItem: "defaultsButtonItem-AeBgp7zz"
        }
    }
    ,
    255309: e=>{
        e.exports = {
            scrollable: "scrollable-Ycj0dUGE",
            tabs: "tabs-Ycj0dUGE"
        }
    }
    ,
    653018: e=>{
        e.exports = {
            titleWrap: "titleWrap-e3jFxbHm",
            ellipsis: "ellipsis-e3jFxbHm",
            hideInput: "hideInput-e3jFxbHm",
            hideText: "hideText-e3jFxbHm",
            empty: "empty-e3jFxbHm",
            hideEmpty: "hideEmpty-e3jFxbHm",
            editIcon: "editIcon-e3jFxbHm"
        }
    }
    ,
    31202: e=>{
        e.exports = {
            tabs: "tabs-xNPrJ8dY"
        }
    }
    ,
    839246: (e,t,a)=>{
        "use strict";
        a.d(t, {
            DialogTabs: ()=>l
        });
        var i = a(50959)
          , n = a(949781);
        const l = i.forwardRef((function(e, t) {
            const {id: a, tabs: l, activeTab: r, onChange: s, className: o} = e;
            return i.createElement("div", {
                className: o,
                ref: t
            }, i.createElement(n.UnderlineButtonTabs, {
                id: a,
                items: l,
                isActive: function(e) {
                    return e.id === r
                },
                onActivate: function(e) {
                    s(e.id)
                }
            }))
        }
        ))
    }
    ,
    674609: (e,t,a)=>{
        "use strict";
        a.d(t, {
            StudyDefaultsManager: ()=>p
        });
        var i = a(50959)
          , n = a(497754)
          , l = a.n(n)
          , r = a(72571)
          , s = a(509806)
          , o = a(299120)
          , c = a(192063)
          , d = a(844996)
          , u = a(92229);
        const m = {
            reset: s.t(null, void 0, a(79782)),
            saveAsDefault: s.t(null, void 0, a(418229)),
            defaults: s.t(null, void 0, a(698938))
        };
        class p extends i.PureComponent {
            constructor() {
                super(...arguments),
                this._handleResetToDefaults = ()=>{
                    this.props.model.restorePropertiesForSource(this.props.source)
                }
                ,
                this._handleSaveAsDefaults = ()=>{
                    this.props.source.properties().saveDefaults()
                }
            }
            render() {
                const {mode: e} = this.props;
                return i.createElement(o.ControlDisclosure, {
                    id: "study-defaults-manager",
                    className: l()("normal" === e && u.defaultsButtonText),
                    hideArrowButton: "compact" === e,
                    buttonChildren: this._getPlaceHolderItem("compact" === e)
                }, i.createElement(c.PopupMenuItem, {
                    className: u.defaultsButtonItem,
                    isActive: !1,
                    label: m.reset,
                    onClick: this._handleResetToDefaults
                }), i.createElement(c.PopupMenuItem, {
                    className: u.defaultsButtonItem,
                    isActive: !1,
                    label: m.saveAsDefault,
                    onClick: this._handleSaveAsDefaults
                }))
            }
            _getPlaceHolderItem(e) {
                return e ? i.createElement(r.Icon, {
                    className: u.defaultsButtonIcon,
                    icon: d
                }) : m.defaults
            }
        }
    }
    ,
    944316: (e,t,a)=>{
        "use strict";
        a.d(t, {
            FooterMenu: ()=>C
        });
        var i = a(50959)
          , n = a(386942)
          , l = a(601227)
          , r = a(986661)
          , s = a(509806)
          , o = a(664902)
          , c = a(72571)
          , d = a(299120)
          , u = a(930052)
          , m = a(518008)
          , p = a(844996);
        function h(e) {
            return e.isTabletWidth ? i.createElement(c.Icon, {
                className: m.themesButtonIcon,
                icon: p
            }) : i.createElement(i.Fragment, null, s.t(null, void 0, a(419611)))
        }
        function _(e) {
            return i.createElement(u.MatchMedia, {
                rule: "screen and (max-width: 768px)"
            }, (t=>i.createElement(d.ControlDisclosure, {
                className: !t && m.themesButtonText,
                hideArrowButton: t,
                buttonChildren: i.createElement(h, {
                    isTabletWidth: t
                })
            }, e.children)))
        }
        var g = a(192063)
          , T = a(72621)
          , f = a(921258)
          , v = a(972535);
        function b(e) {
            const {name: t, onRemove: a, onClick: n} = e
              , [l,r] = (0,
            f.useHover)()
              , s = i.useCallback((()=>n(t)), [n, t])
              , o = i.useCallback((()=>{
                a && a(t)
            }
            ), [a, t]);
            return i.createElement("div", {
                ...r
            }, i.createElement(g.PopupMenuItem, {
                className: m.defaultsButtonItem,
                isActive: !1,
                label: t,
                onClick: s,
                toolbox: a && i.createElement(T.RemoveButton, {
                    hidden: !v.mobiletouch && !l,
                    onClick: o
                })
            }))
        }
        var S = a(917850)
          , y = a(153055)
          , E = a(753327)
          , k = a(350299)
          , D = a(980458);
        var z = a(855342);
        const L = (0,
        n.connect)((function(e, t) {
            return {
                templates: e.templates[t.toolName]
            }
        }
        ), (function(e, t) {
            const {toolName: a, applyTemplate: i, getSourceTemplate: n} = t;
            return {
                getTemplates: ()=>e((0,
                z.getTemplates)(a)),
                loadTemplate: i ? t=>e((0,
                z.loadTemplate)(a, t, i)) : void 0,
                removeTemplate: t=>e((0,
                z.startRemoveTemplate)(a, t)),
                saveTemplate: n ? t=>e((0,
                z.saveTemplate)(a, t, JSON.stringify(n()))) : void 0
            }
        }
        ))((function(e) {
            const {templates: t, getTemplates: n, applyDefaults: l, saveTemplate: r, applyTemplate: o} = e
              , c = (0,
            i.useContext)(E.SlotContext);
            return (0,
            i.useEffect)((()=>{
                o && !t && n()
            }
            ), [t, n, o]),
            i.createElement(_, null, r && i.createElement(b, {
                onClick: function() {
                    window.runOrSignIn((()=>{
                        (0,
                        y.showRename)({
                            title: s.t(null, void 0, a(504315)),
                            text: s.t(null, void 0, a(350912)) + ":",
                            maxLength: 64,
                            source: t || [],
                            autocompleteFilter: D.autocompleteFilter,
                            onRename: ({newValue: i, focusInput: n, dialogClose: l, innerManager: r})=>{
                                var o;
                                if (t && -1 !== t.indexOf(i)) {
                                    const t = s.t(null, void 0, a(572405)).format({
                                        name: i
                                    });
                                    (0,
                                    y.showConfirm)({
                                        text: t,
                                        onConfirm: ({dialogClose: t})=>{
                                            var a;
                                            null === (a = e.saveTemplate) || void 0 === a || a.call(e, i),
                                            t(),
                                            l()
                                        }
                                        ,
                                        onClose: n
                                    }, r)
                                } else
                                    null === (o = e.saveTemplate) || void 0 === o || o.call(e, i),
                                    l()
                            }
                        }, c)
                    }
                    ), {
                        source: "Save line tool template",
                        sourceMeta: "Chart"
                    })
                },
                name: (0,
                k.appendEllipsis)(s.t(null, void 0, a(309908)))
            }), i.createElement(b, {
                onClick: l,
                name: s.t(null, void 0, a(473169))
            }), o && t && t.length > 0 && i.createElement(i.Fragment, null, i.createElement(S.PopupMenuSeparator, null), t.map((e=>i.createElement(b, {
                key: e,
                name: e,
                onRemove: d,
                onClick: u
            })))));
            function d(t) {
                window.runOrSignIn((()=>{
                    const i = s.t(null, void 0, a(506705)).format({
                        name: t
                    });
                    (0,
                    y.showConfirm)({
                        text: i,
                        onConfirm: ({dialogClose: a})=>{
                            e.removeTemplate(t),
                            a()
                        }
                    }, c)
                }
                ), {
                    source: "Delete line tool template"
                })
            }
            function u(t) {
                var a;
                null === (a = e.loadTemplate) || void 0 === a || a.call(e, t)
            }
        }
        ));
        const w = new o.TranslatedString("apply drawing template",s.t(null, void 0, a(349037)))
          , M = new o.TranslatedString("apply drawing template",s.t(null, void 0, a(349037)));
        function x(e) {
            const {sources: t, chartUndoModel: a} = e
              , n = (0,
            i.useMemo)((()=>t.every((e=>e.toolname === t[0].toolname))), [t]);
            return i.createElement(L, {
                toolName: t[0].toolname,
                applyDefaults: function() {
                    a.restoreLineToolsFactoryDefaults(t)
                },
                applyTemplate: n ? function(e) {
                    1 === t.length ? a.applyLineToolTemplate(t[0], e, w) : (a.beginUndoMacro(M),
                    t.forEach((t=>{
                        a.applyLineToolTemplate(t, e, null)
                    }
                    )),
                    a.endUndoMacro())
                }
                : void 0,
                getSourceTemplate: 1 === t.length ? function() {
                    return t[0].template()
                }
                : void 0
            })
        }
        function A(e) {
            return i.createElement(_, null, i.createElement(b, {
                onClick: function() {
                    const {sources: t, chartUndoModel: a} = e;
                    a.restoreLineToolsFactoryDefaults(t)
                },
                name: s.t(null, void 0, a(67049))
            }))
        }
        function C(e) {
            return (0,
            l.onWidget)() ? i.createElement(A, {
                ...e
            }) : i.createElement(n.Provider, {
                store: r.store
            }, i.createElement(x, {
                ...e
            }))
        }
    }
    ,
    380865: (e,t,a)=>{
        "use strict";
        a.d(t, {
            PropertiesEditorTab: ()=>c
        });
        var i = a(50959)
          , n = a(633064);
        const l = {
            "Elliott Impulse Wave (12345)Degree": "normal",
            "Elliott Triangle Wave (ABCDE)Degree": "normal",
            "Elliott Triple Combo Wave (WXYXZ)Degree": "normal",
            "Elliott Correction Wave (ABC)Degree": "normal",
            "Elliott Double Combo Wave (WXY)Degree": "normal",
            BarsPatternMode: "normal",
            StudyInputSource: "normal"
        }
          , r = {
            TextText: "big",
            AnchoredTextText: "big",
            NoteText: "big",
            AnchoredNoteText: "big",
            CalloutText: "big",
            BalloonText: "big"
        };
        var s = a(459837)
          , o = a(154526);
        function c(e) {
            const {page: t, pageRef: a, tableKey: c} = e;
            return i.createElement(n.ControlCustomHeightContext.Provider, {
                value: r
            }, i.createElement(n.ControlCustomWidthContext.Provider, {
                value: l
            }, t && i.createElement(s.PropertyTable, {
                reference: a,
                key: c
            }, t.definitions.value().map((e=>i.createElement(o.Section, {
                key: e.id,
                definition: e
            }))))))
        }
    }
    ,
    284145: (e,t,a)=>{
        "use strict";
        a.r(t),
        a.d(t, {
            SourcePropertiesEditorRenderer: ()=>C
        });
        var i = a(50959)
          , n = a(500962)
          , l = a(559410)
          , r = a(650151)
          , s = a(601227)
          , o = a(870122)
          , c = a.n(o)
          , d = a(509806)
          , u = a(976669)
          , m = a(370981)
          , p = a(944316)
          , h = a(380865)
          , _ = a(742554)
          , g = a(303097)
          , T = a(674609)
          , f = a(593194)
          , v = a(786129)
          , b = a(160069)
          , S = a(163890)
          , y = a(930052)
          , E = a(664902)
          , k = a(708123)
          , D = a(839246)
          , z = a(272675)
          , L = a(156963)
          , w = a(255309);
        const M = new E.TranslatedString("change {sourceTitle} title to {newSourceTitle}",d.t(null, void 0, a(328065)));
        class x extends i.PureComponent {
            constructor(e) {
                super(e),
                this._activePageRef = i.createRef(),
                this._lineToolsAffectChartInvalidation = new k.FeatureToggleWatchedValue("do_not_invalidate_chart_on_changing_line_tools",!1),
                this._handleChangeMode = e=>{
                    this.setState({
                        isRenaming: e
                    })
                }
                ,
                this._getTranslatedStringForSource = e=>new E.TranslatedString(e.name(),e.title()),
                this._setTitle = e=>{
                    const {source: t, model: a} = this.props
                      , i = M.format({
                        sourceTitle: t.properties().title.value() || this._getTranslatedStringForSource(t),
                        newSourceTitle: e
                    });
                    a.setProperty(t.properties().title, e, i, this._lineToolsAffectChartInvalidation.value())
                }
                ,
                this._getActionPageById = e=>{
                    if (!e)
                        return;
                    const {pages: t} = this.props;
                    return t.find((t=>t.id.toLowerCase() === e.toLowerCase()))
                }
                ,
                this._onChangeActivePageDefinitions = ()=>{
                    this.setState({
                        tableKey: Date.now()
                    }, (()=>{
                        this._requestResize && this._requestResize()
                    }
                    ))
                }
                ,
                this._renderFooterLeft = ()=>{
                    const {source: e, model: t} = this.props;
                    return (0,
                    g.isLineTool)(e) ? i.createElement(p.FooterMenu, {
                        sources: [e],
                        chartUndoModel: t
                    }) : i.createElement(y.MatchMedia, {
                        rule: "screen and (max-width: 430px)"
                    }, (a=>(0,
                    f.isStudy)(e) && i.createElement(T.StudyDefaultsManager, {
                        model: t,
                        source: e,
                        mode: a ? "compact" : "normal"
                    })))
                }
                ,
                this._subscribe = e=>{
                    e && e.definitions.subscribe(this._onChangeActivePageDefinitions)
                }
                ,
                this._unsubscribe = e=>{
                    e && e.definitions.unsubscribe(this._onChangeActivePageDefinitions)
                }
                ,
                this._getActiveTabSettingsName = ()=>{
                    const {source: e} = this.props;
                    return e instanceof v.Series ? "properties_dialog.active_tab.chart" : e instanceof b.LineDataSource ? "properties_dialog.active_tab.drawing" : e instanceof S.Study ? "properties_dialog.active_tab.study" : ""
                }
                ,
                this._handleSelectPage = e=>{
                    const {activePageId: t} = this.state
                      , a = this._getActionPageById(t)
                      , i = this._getActionPageById(e)
                      , n = this._getActiveTabSettingsName();
                    t !== e && (this._unsubscribe(a),
                    n && c().setValue(n, e),
                    this._subscribe(i),
                    this.setState({
                        activePageId: e,
                        tableKey: Date.now()
                    }, (()=>{
                        this._requestResize && this._requestResize(),
                        this._focusActivePageFirstTextInput()
                    }
                    )))
                }
                ,
                this._handleScroll = ()=>{
                    m.globalCloseDelegate.fire()
                }
                ,
                this._handleSubmit = ()=>{
                    this.props.onSubmit(),
                    this._closePopupDialog()
                }
                ,
                this._closePopupDialog = ()=>{
                    window.lineToolPropertiesToolbar && window.lineToolPropertiesToolbar.refresh(),
                    this.props.onClose()
                }
                ;
                const {pages: t} = this.props;
                let a;
                if (this._getActionPageById(this.props.activePageId))
                    a = (0,
                    r.ensureDefined)(this.props.activePageId);
                else {
                    const e = c().getValue(this._getActiveTabSettingsName(), "")
                      , i = this._getActionPageById(e);
                    a = i ? i.id : t[0].id
                }
                this.state = {
                    activePageId: a,
                    tableKey: Date.now(),
                    isRenaming: !1
                },
                window.lineToolPropertiesToolbar && window.lineToolPropertiesToolbar.hide()
            }
            componentDidMount() {
                const {activePageId: e} = this.state
                  , t = this._getActionPageById(e);
                this._focusActivePageFirstTextInput(),
                this._subscribe(t)
            }
            componentWillUnmount() {
                const {activePageId: e} = this.props
                  , t = this._getActionPageById(e);
                clearTimeout(this._timeout),
                this._unsubscribe(t)
            }
            render() {
                var e;
                const {onCancel: t, source: a} = this.props
                  , {activePageId: n, isRenaming: l} = this.state
                  , r = (null === (e = a.properties().title) || void 0 === e ? void 0 : e.value()) || a.title()
                  , s = i.createElement(z.Title, {
                    isRenaming: l,
                    onChangeMode: this._handleChangeMode,
                    setTitle: this._setTitle,
                    defaultTitle: r,
                    canBeRenamed: (0,
                    g.isLineTool)(a) && !L.enabled("widget")
                });
                return i.createElement(u.AdaptiveConfirmDialog, {
                    dataName: (0,
                    f.isStudy)(a) ? "indicator-properties-dialog" : "source-properties-editor",
                    dataDialogName: r,
                    title: s,
                    isOpened: !0,
                    onSubmit: this._handleSubmit,
                    onCancel: t,
                    onClickOutside: this._handleSubmit,
                    onClose: this._closePopupDialog,
                    footerLeftRenderer: this._renderFooterLeft,
                    render: this._renderChildren(n),
                    submitOnEnterKey: !1,
                    showCloseIcon: !l
                })
            }
            _renderChildren(e) {
                return ({requestResize: t})=>{
                    this._requestResize = t;
                    const {pages: a, source: n} = this.props
                      , l = a.find((t=>t.id === e))
                      , r = (0,
                    f.isStudy)(n) ? "indicator-properties-dialog-tabs" : "source-properties-editor-tabs"
                      , s = a.map((({title: e, id: t})=>({
                        label: e,
                        id: t,
                        dataId: `${r}-${t}`
                    })));
                    return i.createElement(i.Fragment, null, i.createElement(D.DialogTabs, {
                        className: w.tabs,
                        id: r,
                        activeTab: e,
                        onChange: this._handleSelectPage,
                        tabs: s
                    }), i.createElement(_.TouchScrollContainer, {
                        className: w.scrollable,
                        onScroll: this._handleScroll
                    }, i.createElement(h.PropertiesEditorTab, {
                        page: l,
                        pageRef: this._activePageRef,
                        tableKey: this.state.tableKey
                    })))
                }
            }
            _focusActivePageFirstTextInput() {
                if (!s.CheckMobile.any() && this._activePageRef.current) {
                    const e = this._activePageRef.current.querySelector("input[type=text],textarea");
                    e && (this._timeout = setTimeout((()=>{
                        e.focus()
                    }
                    ), 0))
                }
            }
        }
        var A = a(19406);
        class C extends A.DialogRenderer {
            constructor(e) {
                super(),
                this._timeout = null,
                this._handleClose = ()=>{
                    n.unmountComponentAtNode(this._container),
                    this._setVisibility(!1),
                    this._onClose && this._onClose(),
                    this._subscription.unsubscribe(this, this._handleCollectionChanged)
                }
                ,
                this._handleSubmit = ()=>{
                    const e = this._source;
                    (0,
                    g.isLineTool)(e) && e.hasAlert.value() && setTimeout((()=>{
                        e.areLocalAndServerAlertsMismatch() && e.synchronizeAlert(!0)
                    }
                    ))
                }
                ,
                this._handleCancel = ()=>{
                    this._model.undoToCheckpoint(this._checkpoint)
                }
                ,
                this._propertyPages = e.propertyPages,
                this._model = e.model,
                this._activePageId = e.activePageId,
                this._onClose = e.onClose,
                this._source = e.source,
                this._checkpoint = this._ensureCheckpoint(e.undoCheckPoint),
                this._subscription = this._model.model().dataSourceCollectionChanged(),
                this._subscription.subscribe(this, this._handleCollectionChanged)
            }
            hide(e) {
                e ? this._handleCancel() : this._handleSubmit(),
                this._handleClose()
            }
            isVisible() {
                return this.visible().value()
            }
            show(e) {
                n.render(i.createElement(x, {
                    source: this._source,
                    onSubmit: this._handleSubmit,
                    onClose: this._handleClose,
                    onCancel: this._handleCancel,
                    pages: this._propertyPages,
                    model: this._model,
                    activePageId: this._activePageId,
                    shouldReturnFocus: null == e ? void 0 : e.shouldReturnFocus
                }), this._container),
                this._setVisibility(!0),
                l.emit("drawings_settings_dialog", {
                    objectType: "drawing",
                    scriptTitle: this._source.title()
                })
            }
            _handleCollectionChanged() {
                null === this._timeout && (this._timeout = setTimeout((()=>{
                    this._closeDialogIfSourceIsDeleted(),
                    this._timeout = null
                }
                )))
            }
            _closeDialogIfSourceIsDeleted() {
                null === this._model.model().dataSourceForId(this._source.id()) && this._handleClose()
            }
            _ensureCheckpoint(e) {
                return void 0 === e && (e = this._model.createUndoCheckpoint()),
                e
            }
        }
    }
    ,
    272675: (e,t,a)=>{
        "use strict";
        a.d(t, {
            Title: ()=>m
        });
        var i = a(50959)
          , n = a(497754)
          , l = a(654936)
          , r = a(72571)
          , s = a(199663)
          , o = a(180185)
          , c = a(32133)
          , d = a(133055)
          , u = a(653018);
        function m(e) {
            const {isRenaming: t, onChangeMode: a, setTitle: m, defaultTitle: p, canBeRenamed: h} = e
              , _ = (0,
            i.useRef)(null)
              , [g,T] = (0,
            i.useState)(p)
              , [f,v] = (0,
            i.useState)(p);
            return (0,
            i.useEffect)((()=>{
                t && _.current && (_.current.focus(),
                _.current.setSelectionRange(0, g.length))
            }
            ), [t]),
            i.createElement(i.Fragment, null, i.createElement("div", {
                className: n(u.titleWrap, t && u.hideText)
            }, i.createElement("span", {
                className: u.ellipsis
            }, " ", f), h && i.createElement(i.Fragment, null, i.createElement(r.Icon, {
                className: n(u.editIcon),
                icon: d,
                onClick: function() {
                    (0,
                    c.trackEvent)("GUI", "Rename", "Drawing settings"),
                    T(f),
                    a(!0)
                },
                "data-name": "edit",
                "data-role": "button"
            }), i.createElement("div", {
                className: n(u.empty, !t && u.hideEmpty)
            }))), h && i.createElement("div", {
                className: n(!t && u.hideInput),
                "data-disable-drag": !0
            }, i.createElement(l.InputControl, {
                value: g,
                onChange: function(e) {
                    T(e.currentTarget.value)
                },
                onBlur: b,
                reference: _,
                onClick: s.preventDefault,
                onKeyDown: function(e) {
                    27 === (0,
                    o.hashFromEvent)(e) && (e.preventDefault(),
                    T(p),
                    a(!1));
                    13 === (0,
                    o.hashFromEvent)(e) && (e.preventDefault(),
                    b())
                },
                "data-disable-drag": !0,
                stretch: !0
            })));
            function b() {
                "" !== g && (m(g),
                v(g)),
                a(!1)
            }
        }
    }
    ,
    772551: (e,t,a)=>{
        "use strict";
        a.r(t),
        a.d(t, {
            SourcesPropertiesEditorRenderer: ()=>T
        });
        var i = a(50959)
          , n = a(500962)
          , l = a(19406)
          , r = a(509806)
          , s = a(742554)
          , o = a(976669)
          , c = a(944316)
          , d = a(380865)
          , u = a(272675)
          , m = a(156963)
          , p = a(839246)
          , h = a(31202);
        const _ = r.t(null, void 0, a(137214));
        function g(e) {
            const {propertyPages: t, onSubmit: a, onCancel: n, onClose: l, title: r, activeTabId: g, sources: T, undoModel: f, renamable: v} = e
              , b = g && t.filter((e=>e.id === g)).length > 0 ? g : t[0].id
              , S = f.model().lineToolsGroupModel().groupForLineTool(T[0])
              , y = !!(v && S && r && T.every((e=>{
                var t;
                return (null == S ? void 0 : S.id) === (null === (t = f.model().lineToolsGroupModel().groupForLineTool(e)) || void 0 === t ? void 0 : t.id)
            }
            )))
              , [E,k] = (0,
            i.useState)(b)
              , [D,z] = (0,
            i.useState)(!1)
              , [L,w] = (0,
            i.useState)(r || _)
              , M = (0,
            i.useMemo)((()=>t.map((({title: e, id: t})=>({
                label: e,
                id: t,
                dataId: `sources-properties-editor-tabs-${t}`
            })))), [t]);
            const x = i.createElement(u.Title, {
                isRenaming: D,
                onChangeMode: function(e) {
                    z(e)
                },
                setTitle: function(e) {
                    S && (S.setName(e),
                    w(e))
                },
                defaultTitle: L,
                canBeRenamed: y && !m.enabled("widget")
            });
            return i.createElement(o.AdaptiveConfirmDialog, {
                dataName: "sources-properties-editor",
                dataDialogName: L,
                title: x,
                isOpened: !0,
                onSubmit: a,
                onCancel: n,
                onClickOutside: l,
                onClose: l,
                footerLeftRenderer: function() {
                    return i.createElement(c.FooterMenu, {
                        sources: T,
                        chartUndoModel: f
                    })
                },
                render: function() {
                    const e = t.find((e=>e.id === E));
                    return i.createElement(i.Fragment, null, i.createElement(p.DialogTabs, {
                        className: h.tabs,
                        id: "sources-properties-editor-tabs",
                        activeTab: E,
                        onChange: k,
                        tabs: M
                    }), i.createElement(s.TouchScrollContainer, null, i.createElement(d.PropertiesEditorTab, {
                        page: e,
                        tableKey: E
                    })))
                },
                submitOnEnterKey: !1,
                showCloseIcon: !D
            })
        }
        class T extends l.DialogRenderer {
            constructor(e) {
                super(),
                this._dataSourceChangedPromise = null,
                this._submitHandler = ()=>{
                    Promise.resolve().then((()=>{
                        this._sources.map((e=>{
                            e.areLocalAndServerAlertsMismatch() && e.synchronizeAlert(!0)
                        }
                        ))
                    }
                    )),
                    this._close()
                }
                ,
                this._cancelHandler = ()=>{
                    this._undoModel.undoToCheckpoint(this._undoCheckpoint)
                }
                ,
                this._closeHandler = ()=>{
                    this._close()
                }
                ,
                this._dataSourceCollectionChangedHandler = ()=>{
                    null === this._dataSourceChangedPromise && (this._dataSourceChangedPromise = Promise.resolve().then((()=>{
                        const e = this._undoModel.model();
                        this._sources.find((t=>null === e.dataSourceForId(t.id()))) && this._close(),
                        this._dataSourceChangedPromise = null
                    }
                    )))
                }
                ,
                this._sources = e.sources,
                this._propertyPages = e.propertyPages,
                this._undoModel = e.undoModel,
                this._title = e.title,
                this._activeTabId = e.activeTabId,
                this._renamable = e.renamable,
                this._undoCheckpoint = this._undoModel.createUndoCheckpoint(),
                this._undoModel.model().dataSourceCollectionChanged().subscribe(this, this._dataSourceCollectionChangedHandler)
            }
            destroy() {
                this._close()
            }
            show() {
                this._isVisible() || (this._mount(),
                this._setVisibility(!0))
            }
            hide() {
                this._isVisible() && (this._unmount(),
                this._setVisibility(!1))
            }
            _mount() {
                n.render(i.createElement(g, {
                    propertyPages: this._propertyPages,
                    sources: this._sources,
                    undoModel: this._undoModel,
                    onSubmit: this._submitHandler,
                    onCancel: this._cancelHandler,
                    onClose: this._closeHandler,
                    title: this._title,
                    activeTabId: this._activeTabId,
                    renamable: this._renamable
                }), this._container)
            }
            _unmount() {
                n.unmountComponentAtNode(this._container)
            }
            _isVisible() {
                return this.visible().value()
            }
            _close() {
                this.hide(),
                this._undoModel.model().dataSourceCollectionChanged().unsubscribe(this, this._dataSourceCollectionChangedHandler)
            }
        }
    }
    ,
    855342: (e,t,a)=>{
        "use strict";
        a.d(t, {
            addTemplate: ()=>r,
            getTemplates: ()=>n,
            loadTemplate: ()=>d,
            removeTemplate: ()=>o,
            saveTemplate: ()=>c,
            setTemplates: ()=>l,
            startRemoveTemplate: ()=>s
        });
        var i = a(765827);
        function n(e, t) {
            return {
                type: i.GET_TEMPLATES,
                toolName: e,
                callback: t
            }
        }
        function l(e, t) {
            return {
                type: i.SET_TEMPLATES,
                templates: t,
                toolName: e
            }
        }
        function r(e, t) {
            return {
                type: i.ADD_TEMPLATE,
                templateName: t,
                toolName: e
            }
        }
        function s(e, t) {
            return {
                type: i.START_REMOVE_TEMPLATE,
                templateName: t,
                toolName: e
            }
        }
        function o(e, t) {
            return {
                type: i.REMOVE_TEMPLATE,
                templateName: t,
                toolName: e
            }
        }
        function c(e, t, a) {
            return {
                type: i.SAVE_TEMPLATE,
                templateName: t,
                toolName: e,
                content: a
            }
        }
        function d(e, t, a) {
            return {
                type: i.LOAD_TEMPLATE,
                toolName: e,
                templateName: t,
                callback: a
            }
        }
    }
    ,
    765827: (e,t,a)=>{
        "use strict";
        function i(e) {
            return "LINE_TOOL_TEMPLATE__" + e
        }
        a.d(t, {
            ADD_TEMPLATE: ()=>c,
            GET_TEMPLATES: ()=>n,
            LOAD_TEMPLATE: ()=>d,
            REMOVE_TEMPLATE: ()=>s,
            SAVE_TEMPLATE: ()=>o,
            SET_TEMPLATES: ()=>l,
            START_REMOVE_TEMPLATE: ()=>r
        });
        const n = i("GET_TEMPLATES")
          , l = i("SET_TEMPLATES")
          , r = i("START_REMOVE_TEMPLATE")
          , s = i("REMOVE_TEMPLATE")
          , o = i("SAVE_TEMPLATE")
          , c = i("ADD_TEMPLATE")
          , d = i("LOAD_TEMPLATE")
    }
    ,
    986661: (e,t,a)=>{
        "use strict";
        a.d(t, {
            store: ()=>y
        });
        var i = a(691622)
          , n = a(254773)
          , l = a(336349)
          , r = a(650151)
          , s = a(765827)
          , o = a(6835)
          , c = a(855342);
        function d(e, t) {
            return t
        }
        var u = a(362830);
        const m = (0,
        o.getLogger)("Chart.LineToolTemplatesList");
        function p(e, t) {
            return t
        }
        function *h() {
            for (; ; ) {
                const {toolName: e, templateName: t, content: a} = p(s.SAVE_TEMPLATE, yield(0,
                l.take)(s.SAVE_TEMPLATE));
                try {
                    yield(0,
                    l.call)(u.backend.saveDrawingTemplate, e, t, a),
                    yield(0,
                    l.put)((0,
                    c.addTemplate)(e, t))
                } catch (e) {
                    m.logWarn(e)
                }
            }
        }
        function *_() {
            for (; ; ) {
                const {toolName: e, templateName: t} = p(s.START_REMOVE_TEMPLATE, yield(0,
                l.take)(s.START_REMOVE_TEMPLATE));
                try {
                    yield(0,
                    l.call)(u.backend.removeDrawingTemplate, e, t),
                    yield(0,
                    l.put)((0,
                    c.removeTemplate)(e, t))
                } catch (e) {
                    m.logWarn(e)
                }
            }
        }
        function *g() {
            const e = new Map;
            for (; ; ) {
                const {toolName: a, callback: i} = p(s.GET_TEMPLATES, yield(0,
                l.take)(s.GET_TEMPLATES));
                e.has(a) ? (0,
                r.ensureDefined)(e.get(a)).push(i) : (e.set(a, [i]),
                yield(0,
                l.fork)(t, a))
            }
            function *t(t) {
                try {
                    const e = d(u.backend.getDrawingTemplates, yield(0,
                    l.call)(u.backend.getDrawingTemplates, t));
                    yield(0,
                    l.put)((0,
                    c.setTemplates)(t, e))
                } catch (e) {
                    m.logWarn(e)
                }
                (0,
                r.ensureDefined)(e.get(t)).forEach((e=>null == e ? void 0 : e())),
                e.delete(t)
            }
        }
        function *T() {
            for (; ; ) {
                const {toolName: e, templateName: t, callback: a} = p(s.LOAD_TEMPLATE, yield(0,
                l.take)(s.LOAD_TEMPLATE));
                try {
                    const i = d(u.backend.loadDrawingTemplate, yield(0,
                    l.call)(u.backend.loadDrawingTemplate, e, t));
                    a && a(i)
                } catch (e) {
                    m.logWarn(e)
                }
            }
        }
        function *f() {
            yield(0,
            l.all)([(0,
            l.call)(g), (0,
            l.call)(h), (0,
            l.call)(_), (0,
            l.call)(T)])
        }
        const v = {
            templates: {}
        };
        function b(e, t) {
            return e.localeCompare(t, void 0, {
                numeric: !0
            })
        }
        function S(e=v, t) {
            switch (t.type) {
            case s.ADD_TEMPLATE:
                {
                    const {toolName: a, templateName: i} = t;
                    if (!e.templates[a].includes(i)) {
                        const t = [...e.templates[a], i].sort(b);
                        return {
                            ...e,
                            templates: {
                                ...e.templates,
                                [a]: t
                            }
                        }
                    }
                    return e
                }
            case s.SET_TEMPLATES:
                {
                    const {toolName: a, templates: i} = t;
                    return {
                        ...e,
                        templates: {
                            ...e.templates,
                            [a]: [...i].sort(b)
                        }
                    }
                }
            case s.REMOVE_TEMPLATE:
                {
                    const {toolName: a, templateName: i} = t;
                    return {
                        ...e,
                        templates: {
                            ...e.templates,
                            [a]: e.templates[a].filter((e=>e !== i))
                        }
                    }
                }
            default:
                return e
            }
        }
        const y = function() {
            const e = (0,
            n.default)()
              , t = (0,
            i.createStore)(S, (0,
            i.applyMiddleware)(e));
            return e.run(f),
            t
        }()
    }
    ,
    980458: (e,t,a)=>{
        "use strict";
        function i(e, t) {
            return Boolean("" === e || e && -1 !== t.toLowerCase().indexOf(e.toLowerCase()))
        }
        a.d(t, {
            autocompleteFilter: ()=>i
        })
    }
    ,
    133055: e=>{
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.086 6.207a2 2 0 0 1 2.828 0l1.879 1.879a2 2 0 0 1 0 2.828l-.94.94-9 9-1 1-.146.146H6v-4.707l.146-.146 1-1 9-9 .94-.94zm2.121.707a1 1 0 0 0-1.414 0l-.586.586 1.647 1.646 1.646 1.647.586-.586a1 1 0 0 0 0-1.414l-1.879-1.879zm.586 4.586L18.5 10.207 10.207 18.5l1.293 1.293 8.293-8.293zm-9 9l-1.647-1.646L7.5 17.207l-.5.5V21h3.293l.5-.5zm-2.586-4L9.5 17.793 17.793 9.5 16.5 8.207 8.207 16.5z"/></svg>'
    }
    ,
    360558: e=>{
        e.exports = {
            ar: ["الحيوانات والطبيعة"],
            ca_ES: ["animals i natura"],
            cs: "animals & nature",
            de: ["Tiere & Natur"],
            el: "animals & nature",
            en: "animals & nature",
            es: ["animales y naturaleza"],
            fa: "animals & nature",
            fr: ["animaux & nature"],
            he_IL: ["בעלי חיים וטבע"],
            hu_HU: "animals & nature",
            id_ID: ["hewan & alam"],
            it: ["animali e natura"],
            ja: ["動物 & 自然"],
            ko: ["애니멀 & 네이처"],
            ms_MY: ["haiwan & alam"],
            nl_NL: "animals & nature",
            pl: ["zwierzęta i natura"],
            pt: ["animais & natureza"],
            ro: "animals & nature",
            ru: ["животные и природа"],
            sv: ["djur & natur"],
            th: ["สัตว์และธรรมชาติ"],
            tr: ["hayvanlar & doğa"],
            vi: ["động vật và thiên nhiên"],
            zh: ["动物&自然"],
            zh_TW: ["動物&自然"]
        }
    }
    ,
    414232: e=>{
        e.exports = {
            ar: ["أنشطة"],
            ca_ES: ["activitat"],
            cs: "activity",
            de: ["Aktivität"],
            el: "activity",
            en: "activity",
            es: ["actividad"],
            fa: "activity",
            fr: ["activité"],
            he_IL: ["פעילות"],
            hu_HU: "activity",
            id_ID: ["aktivitas"],
            it: ["attività"],
            ja: ["アクティビティ"],
            ko: ["액티비티"],
            ms_MY: ["aktiviti"],
            nl_NL: "activity",
            pl: ["aktywność"],
            pt: ["atividade"],
            ro: "activity",
            ru: ["спорт и активность"],
            sv: ["aktiviteter"],
            th: ["กิจกรรม"],
            tr: ["aktivite"],
            vi: ["hoạt động"],
            zh: ["活动"],
            zh_TW: ["活動"]
        }
    }
    ,
    935305: e=>{
        e.exports = {
            ar: ["الطعام والشراب"],
            ca_ES: ["menjar i begudes"],
            cs: "food & drink",
            de: ["Essen & Trinken"],
            el: "food & drink",
            en: "food & drink",
            es: ["comida y bebida"],
            fa: "food & drink",
            fr: ["nourriture & boissons"],
            he_IL: ["אוכל ושתייה"],
            hu_HU: "food & drink",
            id_ID: ["makanan & minuman"],
            it: ["cibo e bevande"],
            ja: ["フード & ドリンク"],
            ko: ["푸드 & 드링크"],
            ms_MY: ["makanan & minuman"],
            nl_NL: "food & drink",
            pl: ["żywność i napoje"],
            pt: ["comida & bebida"],
            ro: "food & drink",
            ru: ["еда и напитки"],
            sv: ["mat & dryck"],
            th: ["อาหารเครื่องดื่ม"],
            tr: ["yiyecek & içecek"],
            vi: ["đồ ăn & đồ uống"],
            zh: ["食物&饮料"],
            zh_TW: ["食物&飲料"]
        }
    }
    ,
    149546: e=>{
        e.exports = {
            ar: ["أعلام"],
            ca_ES: ["banderes"],
            cs: "flags",
            de: ["Flaggen"],
            el: "flags",
            en: "flags",
            es: ["banderas"],
            fa: "flags",
            fr: ["drapeaux"],
            he_IL: ["דגלים"],
            hu_HU: "flags",
            id_ID: ["bendera"],
            it: ["bandiere"],
            ja: ["旗"],
            ko: ["플래그"],
            ms_MY: ["bendera-bendera"],
            nl_NL: "flags",
            pl: ["flagi"],
            pt: ["bandeiras"],
            ro: "flags",
            ru: ["флаги"],
            sv: ["flaggor"],
            th: ["ธง"],
            tr: ["bayraklar"],
            vi: ["gắn cờ"],
            zh: ["旗帜"],
            zh_TW: ["旗幟"]
        }
    }
    ,
    572302: e=>{
        e.exports = {
            ar: ["أشياء"],
            ca_ES: ["objectes"],
            cs: "objects",
            de: ["Objekte"],
            el: "objects",
            en: "objects",
            es: ["objetos"],
            fa: "objects",
            fr: ["objets"],
            he_IL: ["אובייקטים"],
            hu_HU: "objects",
            id_ID: ["objek"],
            it: ["oggetti"],
            ja: ["モノ"],
            ko: ["오브젝트"],
            ms_MY: ["objek-objek"],
            nl_NL: "objects",
            pl: ["obiekty"],
            pt: ["objetos"],
            ro: "objects",
            ru: ["предметы"],
            sv: ["objekt"],
            th: ["วัตถุ"],
            tr: ["nesneler"],
            vi: ["các đối tượng"],
            zh: ["物品"],
            zh_TW: ["物品"]
        }
    }
    ,
    396330: e=>{
        e.exports = {
            ar: ["الابتسامات والأشخاص"],
            ca_ES: ["cares i gent"],
            cs: "smiles & people",
            de: ["Smilies & Menschen"],
            el: "smiles & people",
            en: "smiles & people",
            es: ["emoticonos y personas"],
            fa: "smiles & people",
            fr: ["sourires & personnes"],
            he_IL: ["חיוכים ואנשים"],
            hu_HU: "smiles & people",
            id_ID: ["senyuman & orang"],
            it: ["smile e persone"],
            ja: ["スマイル & 人物"],
            ko: ["스마일 & 피플"],
            ms_MY: ["senyuman & orang"],
            nl_NL: "smiles & people",
            pl: ["buźki i osoby"],
            pt: ["smiles & pessoas"],
            ro: "smiles & people",
            ru: ["эмоции и люди"],
            sv: ["leenden & människor"],
            th: ["รอยยิ้มและผู้คน"],
            tr: ["gülümsemeler & insanlar"],
            vi: ["nụ cười và mọi người"],
            zh: ["笑脸&人像"],
            zh_TW: ["笑臉&人像"]
        }
    }
    ,
    906878: e=>{
        e.exports = {
            ar: ["رموز"],
            ca_ES: ["símbols"],
            cs: "symbols",
            de: ["Symbole"],
            el: "symbols",
            en: "symbols",
            es: ["simbolos"],
            fa: "symbols",
            fr: ["symboles"],
            he_IL: ["סימולים"],
            hu_HU: "symbols",
            id_ID: ["simbol"],
            it: ["simboli"],
            ja: ["記号"],
            ko: ["심볼"],
            ms_MY: ["simbol-simbol"],
            nl_NL: "symbols",
            pl: ["symbole"],
            pt: ["símbolos"],
            ro: "symbols",
            ru: ["символы"],
            sv: ["symboler"],
            th: ["สัญญาลักษณ์"],
            tr: ["semboller"],
            vi: ["mã giao dịch"],
            zh: ["符号"],
            zh_TW: ["符號"]
        }
    }
    ,
    415426: e=>{
        e.exports = {
            ar: ["مستخدَمٌ حديثاً"],
            ca_ES: ["usat recentment"],
            cs: "recently used",
            de: ["Zuletzt genutzt"],
            el: "recently used",
            en: "recently used",
            es: ["usados con frecuencia"],
            fa: "recently used",
            fr: ["récemment utilisé"],
            he_IL: ["נעשה בו שימוש לאחרונה"],
            hu_HU: "recently used",
            id_ID: ["baru digunakan"],
            it: ["usato di recente"],
            ja: ["最近使用したもの"],
            ko: ["최근에 쓰임"],
            ms_MY: ["baru lepas digunakan"],
            nl_NL: "recently used",
            pl: ["ostatnio używane"],
            pt: ["usados recentemente"],
            ro: "recently used",
            ru: ["недавние"],
            sv: ["nyligen använd"],
            th: ["ที่เพิ่งใช้ล่าสุด"],
            tr: ["son zamanlarda kullanılanlar"],
            vi: ["Sử dụng gần đây"],
            zh: ["最近使用"],
            zh_TW: ["最近使用"]
        }
    }
    ,
    715395: e=>{
        e.exports = {
            ar: ["السفر والأماكن"],
            ca_ES: ["viatges i llocs"],
            cs: "travel & places",
            de: ["Reisen & Orte"],
            el: "travel & places",
            en: "travel & places",
            es: ["viajes y destinos"],
            fa: "travel & places",
            fr: ["voyages & lieux"],
            he_IL: ["נסיעות ומקומות"],
            hu_HU: "travel & places",
            id_ID: ["perjalanan & tempat"],
            it: ["viaggi e località"],
            ja: ["トラベル & 場所"],
            ko: ["트래블 & 플레이스"],
            ms_MY: ["melancong & tempat-tempat"],
            nl_NL: "travel & places",
            pl: ["podróże i miejsca"],
            pt: ["viagens & lugares"],
            ro: "travel & places",
            ru: ["путешествия"],
            sv: ["resor & platser"],
            th: ["การเดินทางและสถานที่"],
            tr: ["seyahat & yerler"],
            vi: ["du lịch & địa điểm"],
            zh: ["旅游&地点"],
            zh_TW: ["旅遊&地點"]
        }
    }
    ,
    72171: e=>{
        e.exports = {
            ar: ["مركز"],
            ca_ES: ["Centre"],
            cs: "Center",
            de: ["Zentrieren"],
            el: "Center",
            en: "Center",
            es: ["Centro"],
            fa: "Center",
            fr: ["Centre"],
            he_IL: ["מרכז"],
            hu_HU: "Center",
            id_ID: ["Pusat"],
            it: ["Centro"],
            ja: ["中央"],
            ko: ["센터"],
            ms_MY: ["Pusat"],
            nl_NL: "Center",
            pl: ["Środek"],
            pt: ["Centro"],
            ro: "Center",
            ru: ["По центру"],
            sv: ["Centrera"],
            th: ["ตรงกลาง"],
            tr: ["Orta"],
            vi: ["Trung tâm"],
            zh: ["中心"],
            zh_TW: ["中心"]
        }
    }
    ,
    67049: e=>{
        e.exports = {
            ar: ["تطبيق الإعدادات الافتراضية"],
            ca_ES: ["Aplica configuració predeterminada"],
            cs: "Apply Defaults",
            de: ["Voreinstellungen anwenden"],
            el: "Apply Defaults",
            en: "Apply Defaults",
            es: ["Aplicar configuración predeterminada"],
            fa: "Apply Defaults",
            fr: ["Appliquer les paramètres par défaut"],
            he_IL: ["החל ברירת מחדל"],
            hu_HU: ["Alapértelmezett Alkalmazása"],
            id_ID: ["Terapkan Pengaturan Awal"],
            it: ["Applica predefiniti"],
            ja: ["デフォルトを適用"],
            ko: ["기본설정"],
            ms_MY: ["Guna Pakai Lalai"],
            nl_NL: "Apply Defaults",
            pl: ["Zastosuj domyślne"],
            pt: ["Aplicar padrões"],
            ro: "Apply Defaults",
            ru: ["Применить по умолчанию"],
            sv: ["Tillämpa standardinställningarna"],
            th: ["ตั้งให้เป็นค่าเบื้องต้น"],
            tr: ["Varsayılanları Uygula"],
            vi: ["Áp dụng Nhiều mặc định"],
            zh: ["应用默认"],
            zh_TW: ["套用預設值"]
        }
    }
    ,
    473169: e=>{
        e.exports = {
            ar: ["تطبيق الإعدادات الافتراضية"],
            ca_ES: ["Aplica configuracions per defecte"],
            cs: ["Apply Defaults"],
            de: ["Voreinstellungen anwenden"],
            el: ["Apply Defaults"],
            en: "Apply defaults",
            es: ["Aplicar configuraciones por defecto"],
            fa: ["Apply Defaults"],
            fr: ["Appliquer les paramètres par défaut"],
            he_IL: ["החל ברירת מחדל"],
            hu_HU: ["Alapértelmezett Alkalmazása"],
            id_ID: ["Terapkan Pengaturan Awal"],
            it: ["Applica predefiniti"],
            ja: ["デフォルトを適用"],
            ko: ["기본설정"],
            ms_MY: ["Guna Pakai Lalai"],
            nl_NL: ["Apply Defaults"],
            pl: ["Zastosuj domyślne"],
            pt: ["Aplicar padrões"],
            ro: ["Apply Defaults"],
            ru: ["Применить по умолчанию"],
            sv: ["Tillämpa standardinställningarna"],
            th: ["ตั้งให้เป็นค่าเบื้องต้น"],
            tr: ["Varsayılanları uygula"],
            vi: ["Áp dụng Nhiều mặc định"],
            zh: ["应用默认"],
            zh_TW: ["套用預設值"]
        }
    }
    ,
    691757: e=>{
        e.exports = {
            ar: ["الأسفل"],
            ca_ES: ["Part inferior"],
            cs: "Bottom",
            de: ["Unten"],
            el: "Bottom",
            en: "Bottom",
            es: ["Parte inferior"],
            fa: ["پایین"],
            fr: ["Bas"],
            he_IL: ["תחתית"],
            hu_HU: ["Alsó"],
            id_ID: ["Dasar"],
            it: ["Sotto"],
            ja: ["下"],
            ko: ["아래"],
            ms_MY: ["Bawah"],
            nl_NL: "Bottom",
            pl: ["Dno"],
            pt: ["Em baixo"],
            ro: "Bottom",
            ru: ["Снизу"],
            sv: ["Botten"],
            th: ["ข้างล่าง"],
            tr: ["Alt"],
            vi: ["Đáy"],
            zh: ["底部"],
            zh_TW: ["底部"]
        }
    }
    ,
    16079: e=>{
        e.exports = {
            ar: ["متدرج"],
            ca_ES: "Gradient",
            cs: "Gradient",
            de: ["Farbverlauf"],
            el: "Gradient",
            en: "Gradient",
            es: ["Gradiente"],
            fa: "Gradient",
            fr: ["Dégradé"],
            he_IL: ["משולב"],
            hu_HU: "Gradient",
            id_ID: ["Gradien"],
            it: ["Gradiente"],
            ja: ["グラデーション"],
            ko: ["그래디언트"],
            ms_MY: ["Gradien"],
            nl_NL: "Gradient",
            pl: "Gradient",
            pt: ["Gradiente"],
            ro: "Gradient",
            ru: ["Градиент"],
            sv: ["Lutning"],
            th: ["ไล่เฉดสี"],
            tr: ["Gradyan"],
            vi: "Gradient",
            zh: ["渐变"],
            zh_TW: ["漸層"]
        }
    }
    ,
    506705: e=>{
        e.exports = {
            ar: ['هل تريد حقًا حذف قالب الرسم "{name}"؟'],
            ca_ES: ["De debò que voleu eliminar la plantilla de dibuix '{name}'?"],
            cs: "Do you really want to delete drawing template '{name}' ?",
            de: ["Möchten Sie die Zeichenvorlage '{name}' wirklich löschen?"],
            el: "Do you really want to delete drawing template '{name}' ?",
            en: "Do you really want to delete drawing template '{name}' ?",
            es: ["¿Está seguro de que desea eliminar la plantilla de dibujo '{name}'?"],
            fa: "Do you really want to delete drawing template '{name}' ?",
            fr: ['Souhaitez-vous vraiment supprimer le modèle de dessin "{name}" ?'],
            he_IL: ["האם אתה באמת רוצה למחוק את תבנית השרטוט '‎{name}‎'?"],
            hu_HU: "Do you really want to delete drawing template '{name}' ?",
            id_ID: ["Apakah anda yakin ingin menghapus Template Gambar '{name}'?"],
            it: ["Vuoi davvero eliminare il modello disegno '{name}'?"],
            ja: ["本当に描画テンプレート '{name}' を削除しますか？"],
            ko: ["'{name}' 드로잉 템플릿을 삭제하시겠습니까?"],
            ms_MY: ["Adakah anda pasti untuk padamkan templat lukisan '{name}' ?"],
            nl_NL: "Do you really want to delete drawing template '{name}' ?",
            pl: ["Czy na pewno chcesz usunąć szablon rysunku '{name}'?"],
            pt: ["Você realmente quer excluir o template de desenho '{name}' ?"],
            ro: "Do you really want to delete drawing template '{name}' ?",
            ru: ['Вы действительно хотите удалить шаблон "{name}"?'],
            sv: ["Vill du verkligen radera designmallen '{name}' ?"],
            th: ["คุณต้องการลบเทมเพลตการวาด '{name}' หรือไม่?"],
            tr: ["'{name}' çizim şablonunu gerçekten silmek istiyor musunuz?"],
            vi: ['Bạn có thực sự muốn xóa Mẫu Vẽ "{name}"?'],
            zh: ["您真的要删除绘图模板“{name}”吗？"],
            zh_TW: ["您真的要刪除繪圖模板'{name}'嗎？"]
        }
    }
    ,
    842973: e=>{
        e.exports = {
            ar: ["خط منقط"],
            ca_ES: ["Línia de punts"],
            cs: "Dotted line",
            de: ["Gepunktete Linie"],
            el: "Dotted line",
            en: "Dotted line",
            es: ["Linea de puntos"],
            fa: "Dotted line",
            fr: ["Ligne pointillée"],
            he_IL: ["קו מנוקד"],
            hu_HU: "Dotted line",
            id_ID: ["Garis titik-titik"],
            it: ["Linea punteggiata"],
            ja: ["点線"],
            ko: ["도트 라인"],
            ms_MY: ["Garis Bertitik"],
            nl_NL: "Dotted line",
            pl: ["Linia kropkowana"],
            pt: ["Linha Pontilhada"],
            ro: "Dotted line",
            ru: ["Точечный пунктир"],
            sv: ["Prickad linje"],
            th: ["เส้นไข่ปลา"],
            tr: ["Noktalı Çizgi"],
            vi: ["Đường chấm chấm"],
            zh: ["点虚线"],
            zh_TW: ["點虛線"]
        }
    }
    ,
    459317: e=>{
        e.exports = {
            ar: ["خط متقطع"],
            ca_ES: ["Línia discontínua"],
            cs: "Dashed line",
            de: ["Gestrichelte Linie"],
            el: "Dashed line",
            en: "Dashed line",
            es: ["Linea discontinua"],
            fa: "Dashed line",
            fr: ["Ligne traitillée"],
            he_IL: ["קו מקווקו"],
            hu_HU: "Dashed line",
            id_ID: ["Garis putus-putus"],
            it: ["Linea tratteggiata"],
            ja: ["破線"],
            ko: ["대쉬 라인"],
            ms_MY: ["Garis Putus-Putus"],
            nl_NL: "Dashed line",
            pl: ["Linia przerywana"],
            pt: ["Linha Tracejada"],
            ro: "Dashed line",
            ru: ["Штриховой пунктир"],
            sv: ["Streckad linje"],
            th: ["เส้นประ"],
            tr: ["Kesik Çizgi"],
            vi: ["Đường Đứt nét"],
            zh: ["短虚线"],
            zh_TW: ["短虛線"]
        }
    }
    ,
    698938: e=>{
        e.exports = {
            ar: ["الإعدادات الإفتراضية"],
            ca_ES: ["Predeterminats"],
            cs: ["Výchozí"],
            de: ["Standardeinstellungen"],
            el: ["Προεπιλογές"],
            en: "Defaults",
            es: ["Predeterminados"],
            fa: ["پیش‌فرض‌ها"],
            fr: ["Configurations par Défaut"],
            he_IL: ["ברירות מחדל"],
            hu_HU: ["Alapértelmezettek"],
            id_ID: ["Bawaan"],
            it: ["Predefiniti"],
            ja: ["デフォルト"],
            ko: ["기본설정"],
            ms_MY: ["Lalai"],
            nl_NL: ["Standaard"],
            pl: ["Domyślne"],
            pt: ["Padrões"],
            ro: "Defaults",
            ru: ["По умолчанию"],
            sv: ["Standardinställningar"],
            th: ["ค่าเริ่มต้น"],
            tr: ["Varsayılanlar"],
            vi: ["Các mặc định"],
            zh: ["系统预设"],
            zh_TW: ["預設值"]
        }
    }
    ,
    572405: e=>{
        e.exports = {
            ar: ['قالب الرسم "{name}" موجود بالفعل. هل تريد حقًا استبداله؟'],
            ca_ES: ["La plantilla de dibuix '{name}' ja existeix. De debò que voleu reemplaçar-la?"],
            cs: "Drawing template '{name}' already exists. Do you really want to replace it?",
            de: ["Die Zeichnungsvorlage '{name}' existiert bereits. Möchten Sie diese wirklich ersetzen?"],
            el: "Drawing template '{name}' already exists. Do you really want to replace it?",
            en: "Drawing template '{name}' already exists. Do you really want to replace it?",
            es: ["La plantilla de dibujo '{name}' ya existe. ¿Está seguro de que desea reemplazarla?"],
            fa: "Drawing template '{name}' already exists. Do you really want to replace it?",
            fr: ['Le modèle de dessin "{name}" existe déjà. Voulez-vous vraiment le remplacer?'],
            he_IL: ["תבנית השרטוט '{name}' כבר קיימת. האם אתה באמת רוצה להחליף אותה?"],
            hu_HU: "Drawing template '{name}' already exists. Do you really want to replace it?",
            id_ID: ["Template Gambar '{name}' telah ada. Apakah anda yakin ingin menggantinya?"],
            it: ["Il Modello disegno '{name}' esiste già. Sei sicuro di volerlo rimpiazzare?"],
            ja: ["描画テンプレート '{name}' は既に存在しています。本当に置き換えますか？"],
            ko: ["'{name}' 드로잉 템플릿이 이미 있습니다. 정말 교체하시겠습니까?"],
            ms_MY: ["Templat lukisan '{name}' telah wujud. Adakah anda pasti untuk menggantikannya?"],
            nl_NL: "Drawing template '{name}' already exists. Do you really want to replace it?",
            pl: ["Szablon '{name}' już istnieje. Czy na pewno chcesz go zastąpić?"],
            pt: ["O modelo de desenho '{name}' já existe. Você realmente quer substituí-lo?"],
            ro: "Drawing template '{name}' already exists. Do you really want to replace it?",
            ru: ["Шаблон '{name}' уже существует. Вы действительно хотите заменить его?"],
            sv: ["Designmallen '{name}' finns redan. Vill du verkligen ersätta den?"],
            th: ["มีเทมเพลตการวาด '{name}' แล้ว คุณต้องการที่จะแทนที่มันจริงๆหรือ?"],
            tr: ["'{name}' çizim şablonu zaten var. Gerçekten onu değiştirmek istiyor musun?"],
            vi: ["Mẫu Vẽ '{name}' đã có rồi. Bạn có muốn thay thế không?"],
            zh: ["绘图模板“{name}”已存在。您真的要替换它吗？"],
            zh_TW: ["繪圖模板'{name}'已存在。您真的要取代它嗎？"]
        }
    }
    ,
    577405: e=>{
        e.exports = {
            ar: ["أفقي"],
            ca_ES: ["Horitzontal"],
            cs: "Horizontal",
            de: "Horizontal",
            el: "Horizontal",
            en: "Horizontal",
            es: "Horizontal",
            fa: "Horizontal",
            fr: "Horizontal",
            he_IL: ["אופקי"],
            hu_HU: "Horizontal",
            id_ID: "Horizontal",
            it: ["Orizzontale"],
            ja: ["水平"],
            ko: ["가로"],
            ms_MY: ["Melintang"],
            nl_NL: "Horizontal",
            pl: ["Poziomo"],
            pt: "Horizontal",
            ro: "Horizontal",
            ru: ["Горизонтальная"],
            sv: ["Vågrät"],
            th: ["แนวนอน"],
            tr: ["Yatay"],
            vi: ["Ngang"],
            zh: ["横式"],
            zh_TW: ["橫式"]
        }
    }
    ,
    619286: e=>{
        e.exports = {
            ar: ["يسار"],
            ca_ES: ["Esquerra"],
            cs: "Left",
            de: ["Links"],
            el: "Left",
            en: "Left",
            es: ["Izquierda"],
            fa: "Left",
            fr: ["Gauche"],
            he_IL: ["שמאל"],
            hu_HU: ["Bal"],
            id_ID: ["Kiri"],
            it: ["Sinistra"],
            ja: ["左"],
            ko: ["왼쪽"],
            ms_MY: ["Kiri"],
            nl_NL: "Left",
            pl: ["Lewo"],
            pt: ["Esquerda"],
            ro: "Left",
            ru: ["Слева"],
            sv: ["Vänster"],
            th: ["ซ้าย"],
            tr: ["Sol"],
            vi: ["Bên trái"],
            zh: ["左"],
            zh_TW: ["左"]
        }
    }
    ,
    141610: e=>{
        e.exports = {
            ar: ["المزيد"],
            ca_ES: ["Més"],
            cs: ["Více"],
            de: ["Mehr"],
            el: "More",
            en: "More",
            es: ["Más"],
            fa: ["بیشتر"],
            fr: ["Plus"],
            he_IL: ["עוד"],
            hu_HU: ["Több"],
            id_ID: ["Lebih lanjut"],
            it: ["Altro"],
            ja: ["詳細"],
            ko: ["더보기"],
            ms_MY: ["Lebih"],
            nl_NL: ["Meer"],
            pl: ["Więcej"],
            pt: ["Mais"],
            ro: "More",
            ru: ["Ещё"],
            sv: ["Mer"],
            th: ["เพิ่มเติม"],
            tr: ["Daha Fazla"],
            vi: ["Thêm nữa"],
            zh: ["更多"],
            zh_TW: ["更多"]
        }
    }
    ,
    876476: e=>{
        e.exports = {
            ar: ["وسط"],
            ca_ES: ["Al mig"],
            cs: "Middle",
            de: ["Mitte"],
            el: "Middle",
            en: "Middle",
            es: ["En el medio"],
            fa: "Middle",
            fr: ["Milieu"],
            he_IL: ["אמצע"],
            hu_HU: "Middle",
            id_ID: ["Tengah"],
            it: ["Medio"],
            ja: ["中央"],
            ko: ["미들"],
            ms_MY: ["Tengah"],
            nl_NL: "Middle",
            pl: ["Środek"],
            pt: ["No meio"],
            ro: "Middle",
            ru: ["По центру"],
            sv: ["Mitten"],
            th: ["ตรงกลาง"],
            tr: ["Orta"],
            vi: ["Giữa"],
            zh: ["中间"],
            zh_TW: ["中間"]
        }
    }
    ,
    855362: e=>{
        e.exports = {
            ar: ["عادي"],
            ca_ES: "Normal",
            cs: ["Běžné"],
            de: "Normal",
            el: "Normal",
            en: "Normal",
            es: "Normal",
            fa: ["خط"],
            fr: "Normal",
            he_IL: ["רגיל"],
            hu_HU: ["Normális"],
            id_ID: "Normal",
            it: ["Normale"],
            ja: ["通常"],
            ko: ["정상"],
            ms_MY: ["Biasa"],
            nl_NL: ["Normaal"],
            pl: ["Normalny"],
            pt: "Normal",
            ro: "Normal",
            ru: ["Обычный"],
            sv: "Normal",
            th: ["ปกติ"],
            tr: "Normal",
            vi: ["Bình thường"],
            zh: ["正常"],
            zh_TW: ["正常"]
        }
    }
    ,
    735637: e=>{
        e.exports = {
            ar: ["ثابت"],
            ca_ES: ["Sòlid"],
            cs: "Solid",
            de: ["Einfarbig"],
            el: "Solid",
            en: "Solid",
            es: ["Sólido"],
            fa: "Solid",
            fr: ["Uni"],
            he_IL: ["סולידי"],
            hu_HU: "Solid",
            id_ID: "Solid",
            it: ["Tinta unita"],
            ja: ["ソリッド"],
            ko: ["솔리드"],
            ms_MY: ["Padu"],
            nl_NL: "Solid",
            pl: ["Jednolite"],
            pt: ["Sólido"],
            ro: "Solid",
            ru: ["Сплошной"],
            sv: "Solid",
            th: ["สีเดียว"],
            tr: ["Katı"],
            vi: "Solid",
            zh: "Solid",
            zh_TW: "Solid"
        }
    }
    ,
    418229: e=>{
        e.exports = {
            ar: ["حفظ كافتراضي"],
            ca_ES: ["Desa per defecte"],
            cs: ["Save As Default"],
            de: ["Als Standard speichern"],
            el: ["Save As Default"],
            en: "Save as default",
            es: ["Guardar por defecto"],
            fa: ["Save As Default"],
            fr: ["Sauvegarder comme Paramètres par Défaut"],
            he_IL: ["שמור כברירת מחדל"],
            hu_HU: ["Mentés Alapértelmezettként"],
            id_ID: ["Simpan Sebagai Bawaan"],
            it: ["Salva come predefinito"],
            ja: ["デフォルトを保存"],
            ko: ["기본설정으로 사용"],
            ms_MY: ["Simpan Sebagai Lalai"],
            nl_NL: ["Save As Default"],
            pl: ["Zapisz jako domyślny"],
            pt: ["Salvar como padrão"],
            ro: ["Save As Default"],
            ru: ["Сделать по умолчанию"],
            sv: ["Spara som standard"],
            th: ["บันทึกเป็นค่าเริ่มต้น"],
            tr: ["Varsayılan olarak sakla"],
            vi: ["Lưu Mặc định"],
            zh: ["保存为默认"],
            zh_TW: ["存為系統預設"]
        }
    }
    ,
    504315: e=>{
        e.exports = {
            ar: ["حفظ نموذج الرسم كـ"],
            ca_ES: ["Desa plantilla de dibuix com a"],
            cs: "Save drawing template as",
            de: ["Zeichenvorlage speichern als"],
            el: "Save drawing template as",
            en: "Save drawing template as",
            es: ["Guardar plantilla de dibujo como"],
            fa: "Save drawing template as",
            fr: ["Sauvegarder le modèle de dessin sous"],
            he_IL: ["שמור תבניות שרטוט בשם"],
            hu_HU: "Save drawing template as",
            id_ID: ["Simpan Template Gambar Sebagai"],
            it: ["Salva modello disegno come"],
            ja: ["描画テンプレートを別名で保存"],
            ko: ["드로잉 템플릿을 다음 이름으로 저장"],
            ms_MY: ["Simpan templat lukisan sebagai"],
            nl_NL: "Save drawing template as",
            pl: ["Zapisz szablon rysowania jako"],
            pt: ["Salvar template de desenho como"],
            ro: "Save drawing template as",
            ru: ["Сохранить шаблон как"],
            sv: ["Spara designmall som"],
            th: ["บันทึกเทมเพลตการวาดเป็น"],
            tr: ["Çizim şablonunu farklı kaydet"],
            vi: ["Lưu Bản mẫu Vẽ dưới dạng"],
            zh: ["将绘图模板另存为"],
            zh_TW: ["將繪圖模板另存為"]
        }
    }
    ,
    137214: e=>{
        e.exports = {
            ar: ["الرسومات المختارة"],
            ca_ES: ["Dibuixos seleccionats"],
            cs: "Selected Drawings",
            de: ["Ausgewählte Zeichnungen"],
            el: "Selected Drawings",
            en: "Selected Drawings",
            es: ["Dibujos seleccionados"],
            fa: "Selected Drawings",
            fr: ["Dessins sélectionnés"],
            he_IL: ["שרטוטים נבחרים"],
            hu_HU: "Selected Drawings",
            id_ID: ["Gambar yang dipilih"],
            it: ["Disegni selezionati"],
            ja: ["選択中の描画"],
            ko: ["고른 드로잉"],
            ms_MY: ["Lukisan Dipilih"],
            nl_NL: "Selected Drawings",
            pl: ["Wybrane Rysunki"],
            pt: ["Desenhos selecionados"],
            ro: "Selected Drawings",
            ru: ["Выбранные инструменты рисования"],
            sv: ["Utvalda ritningar"],
            th: ["ภาพวาดที่เลือก"],
            tr: ["Seçilmiş Çizimler"],
            vi: ["Bản vẽ đã chọn"],
            zh: ["已选绘图"],
            zh_TW: ["選定的繪圖"]
        }
    }
    ,
    79782: e=>{
        e.exports = {
            ar: ["إعادة ضبط الإعدادات"],
            ca_ES: ["Restablir configuració"],
            cs: "Reset settings",
            de: ["Einstellungen zurücksetzen"],
            el: ["Reset Settings"],
            en: "Reset settings",
            es: ["Restablecer configuración"],
            fa: "Reset settings",
            fr: ["Réinitialiser les paramètres"],
            he_IL: ["אפס הגדרות"],
            hu_HU: ["Alapbeállítások Visszaállítása"],
            id_ID: ["Atur Ulang Pengaturan"],
            it: ["Ripristina impostazioni"],
            ja: ["設定をリセット"],
            ko: ["설정초기화"],
            ms_MY: ["Set semula tetapan"],
            nl_NL: "Reset settings",
            pl: ["Resetuj ustawienia"],
            pt: ["Redefinir configurações"],
            ro: ["Reset Settings"],
            ru: ["Сбросить настройки"],
            sv: ["Återställ inställningar"],
            th: ["คืนค่าการตั้งค่า"],
            tr: ["Ayarları Sıfırla"],
            vi: ["Thiết lập lại Cài đặt"],
            zh: ["重置设置"],
            zh_TW: ["重設設定"]
        }
    }
    ,
    221141: e=>{
        e.exports = {
            ar: ["يمين"],
            ca_ES: ["Dreta"],
            cs: "Right",
            de: ["Rechts"],
            el: "Right",
            en: "Right",
            es: ["Derecha"],
            fa: "Right",
            fr: ["Droite"],
            he_IL: ["ימין"],
            hu_HU: ["Jobb"],
            id_ID: ["Kanan"],
            it: ["Destra"],
            ja: ["右"],
            ko: ["오른쪽"],
            ms_MY: ["Kanan"],
            nl_NL: "Right",
            pl: ["Prawy"],
            pt: ["Direita"],
            ro: "Right",
            ru: ["Справа"],
            sv: ["Höger"],
            th: ["ขวา"],
            tr: ["Sağ"],
            vi: ["Phải"],
            zh: ["右"],
            zh_TW: ["右"]
        }
    }
    ,
    865994: e=>{
        e.exports = {
            ar: ["الأعلى"],
            ca_ES: ["Part superior"],
            cs: "Top",
            de: ["Oben"],
            el: "Top",
            en: "Top",
            es: ["Parte superior"],
            fa: "Top",
            fr: ["Haut"],
            he_IL: ["עליון"],
            hu_HU: ["Felső"],
            id_ID: ["Teratas"],
            it: ["Sopra"],
            ja: ["上"],
            ko: ["탑"],
            ms_MY: ["Atas"],
            nl_NL: "Top",
            pl: ["Szczyt"],
            pt: ["Em cima"],
            ro: "Top",
            ru: ["Сверху"],
            sv: ["Topp"],
            th: ["บน"],
            tr: ["Üst"],
            vi: ["Trên đầu"],
            zh: ["顶部"],
            zh_TW: ["頂部"]
        }
    }
    ,
    792960: e=>{
        e.exports = {
            ar: ["محاذاة النص"],
            ca_ES: ["Alineació del text"],
            cs: "Text alignment",
            de: ["Textausrichtung"],
            el: "Text alignment",
            en: "Text alignment",
            es: ["Alineación del texto"],
            fa: "Text alignment",
            fr: ["Alignement du texte"],
            he_IL: ["יישור טקסט"],
            hu_HU: "Text alignment",
            id_ID: ["Perataan teks"],
            it: ["Allineamento testo"],
            ja: ["テキストの配置"],
            ko: ["텍스트 얼라인"],
            ms_MY: ["jajaran teks"],
            nl_NL: "Text alignment",
            pl: ["Wyrównanie tekstu"],
            pt: ["Alinhamento do texto"],
            ro: "Text alignment",
            ru: ["Выравнивание текста"],
            sv: ["Textjustering"],
            th: ["การจัดตำแหน่งตัวอักษร"],
            tr: ["Metin hizalama"],
            vi: ["Căn chỉnh chữ"],
            zh: ["文字对齐"],
            zh_TW: ["文字對齊"]
        }
    }
    ,
    390581: e=>{
        e.exports = {
            ar: ["اتجاه النص"],
            ca_ES: ["Orientació del text"],
            cs: "Text orientation",
            de: ["Text Ausrichtung"],
            el: "Text orientation",
            en: "Text orientation",
            es: ["Orientación del texto"],
            fa: "Text orientation",
            fr: ["Orientation du texte"],
            he_IL: ["כיוון טקסט"],
            hu_HU: "Text orientation",
            id_ID: ["Orientasi teks"],
            it: ["Orientamento testo"],
            ja: ["テキストの向き"],
            ko: ["텍스트 방향"],
            ms_MY: ["Orientasi teks"],
            nl_NL: "Text orientation",
            pl: ["Kierunek tekstu"],
            pt: ["Orientação do Texto"],
            ro: "Text orientation",
            ru: ["Ориентация текста"],
            sv: ["Textriktning"],
            th: ["การเรียงตัวของตัวอักษร"],
            tr: ["Metin yönü"],
            vi: ["Chiều của chữ"],
            zh: ["文字方向"],
            zh_TW: ["文字方向"]
        }
    }
    ,
    350912: e=>{
        e.exports = {
            ar: ["أسم القالب"],
            ca_ES: ["Nom de la plantilla"],
            cs: "Template name",
            de: ["Name der Vorlage"],
            el: "Template name",
            en: "Template name",
            es: ["Nombre de la plantilla"],
            fa: "Template name",
            fr: ["Nom du modèle"],
            he_IL: ["שם תבנית"],
            hu_HU: ["Sablon neve"],
            id_ID: ["Nama template"],
            it: ["Nome modello"],
            ja: ["テンプレート名"],
            ko: ["템플릿이름"],
            ms_MY: ["Nama templat"],
            nl_NL: "Template name",
            pl: ["Nazwa Szablonu"],
            pt: ["Nome do modelo"],
            ro: "Template name",
            ru: ["Имя шаблона"],
            sv: ["Mallnamn"],
            th: ["ชื่อเทมเพลต"],
            tr: ["Şablon adı"],
            vi: ["Tên Mẫu"],
            zh: ["模板名称"],
            zh_TW: ["範本名稱"]
        }
    }
    ,
    578019: e=>{
        e.exports = {
            ar: ["استخدم علامات رياضية خاصة لتحل محل الرسومات المحددة: + ، - ، / ، * للسعر و + ، - لفهرس العمود."],
            ca_ES: ["Feu servir signes matemàtics especials per desplaçar els dibuixos seleccionats: +,-,/,* per al preu i +,- per a l'índex de barres."],
            cs: "Use special math signs to displace selected drawings: +,-,/,* for price and +,- for bar index.",
            de: ["Verwenden Sie spezielle mathematische Zeichen, um ausgewählte Zeichnungen zu verschieben: +,-,/,* für Preis- und +,- für Balken-Index."],
            el: "Use special math signs to displace selected drawings: +,-,/,* for price and +,- for bar index.",
            en: "Use special math signs to displace selected drawings: +,-,/,* for price and +,- for bar index.",
            es: ["Utilice signos matemáticos especiales para desplazar los dibujos seleccionados: +,-,/,* para el precio y +,- para el índice de barras."],
            fa: "Use special math signs to displace selected drawings: +,-,/,* for price and +,- for bar index.",
            fr: ["Utilisez des signes mathématiques spéciaux pour déplacer les dessins sélectionnés : +,-,/,* pour le prix et +,- pour l'index des barres."],
            he_IL: ["השתמש בסימנים מתמטיים מיוחדים כדי להחליף שרטוטים נבחרים: +,-,/,* עבור המחיר ו-+,- עבור בר אינדקס."],
            hu_HU: "Use special math signs to displace selected drawings: +,-,/,* for price and +,- for bar index.",
            id_ID: ["Gunakan tanda matematika khusus untuk memindahkan gambar yang dipilih: +,-,/,* untuk harga dan +,- untuk indeks bar."],
            it: ["Per spostare i disegni selezionati, potete utilizzare i segni matematici speciali: +,-,/,* per il prezzo e +,- per l'indice delle barre."],
            ja: ["選択中の描画をまとめて移動するには演算子を使用します。価格に対しては+ , - , / , *、バーインデックスに対しては+ ,- を使用します。"],
            ko: ["선택한 드로윙을 대체하려면 특수 연산 부호를 사용합니다. 가격에는 +,-,/,*, 막대 인덱스는 +,-입니다."],
            ms_MY: ["Gunakan simbol matematik istimewa untuk menganjakkan lukisan-lukisan terpilih:  +,-,/,* untuk harga dan +,- untuk indeks bar."],
            nl_NL: "Use special math signs to displace selected drawings: +,-,/,* for price and +,- for bar index.",
            pl: ["Użyj specjalnych znaków matematycznych, aby zastąpić wybrane rysunki: +,-,/,* dla ceny i +,- dla indeksu słupka."],
            pt: ["Usar símbolos matemáticos especiais para deslocar os desenhos selecionados: +,-,/,* para preço e +,- para o índice de barras."],
            ro: "Use special math signs to displace selected drawings: +,-,/,* for price and +,- for bar index.",
            ru: ["Используйте специальные символы, чтобы перемещать выбранные объекты рисования: +, -, /, * для цены и +, - для индекса бара."],
            sv: ["Använd särskilda matematiska tecken för att förflytta valda ritningar: +,-,/,* för pris och +,- för stapelindex."],
            th: ["ใช้เครื่องหมายทางคณิตศาสตร์พิเศษเพื่อแทนที่ภาพวาดที่เลือก: +,-,/,* สำหรับราคา และ +,- สำหรับดัชนีแท่ง"],
            tr: ["Özel matematik işaretleri ile seçili çizimleri oynatın. +,-,/,* ile fiyatı ve +,- ile çubuk endeksi oynar."],
            vi: ["Sử dụng các dấu hiệu toán học đặc biệt để thay thế các bản vẽ đã chọn: +, -, /, * cho giá và +, - cho chỉ số thanh."],
            zh: ["使用特殊的数学符号替换选定的图形：+,-,/,* 表示价格，+,- 表示K线指数。"],
            zh_TW: ["使用特殊的數學符號替換選定的圖形：+,-,/,* 表示價格，+,- 表示K線指數。"]
        }
    }
    ,
    944085: e=>{
        e.exports = {
            ar: ["عمودي"],
            ca_ES: "Vertical",
            cs: "Vertical",
            de: ["Vertikal"],
            el: "Vertical",
            en: "Vertical",
            es: "Vertical",
            fa: "Vertical",
            fr: "Vertical",
            he_IL: ["אנכי"],
            hu_HU: "Vertical",
            id_ID: "Vertical",
            it: ["Verticale"],
            ja: ["垂直"],
            ko: ["세로"],
            ms_MY: ["Menegak"],
            nl_NL: "Vertical",
            pl: ["Pionowo"],
            pt: "Vertical",
            ro: "Vertical",
            ru: ["Вертикальная"],
            sv: ["Lodrät"],
            th: ["แนวตั้ง"],
            tr: ["Dikey"],
            vi: ["Dọc"],
            zh: ["竖式"],
            zh_TW: ["直式"]
        }
    }
    ,
    328065: e=>{
        e.exports = {
            ar: ["غيّر عنوان {sourceTitle} إلى {newSourceTitle}"],
            ca_ES: ["canvia el títol {sourceTitle} per {newSourceTitle}"],
            cs: "change {sourceTitle} title to {newSourceTitle}",
            de: ["{sourceTitle} zu {newSourceTitle} ändern"],
            el: "change {sourceTitle} title to {newSourceTitle}",
            en: "change {sourceTitle} title to {newSourceTitle}",
            es: ["cambiar el título {sourceTitle} por {newSourceTitle}"],
            fa: "change {sourceTitle} title to {newSourceTitle}",
            fr: ["Remplacer le titre {sourceTitle} par {newSourceTitle}"],
            he_IL: ["שנה את {sourceTitle} כותרת ל- {newSourceTitle}"],
            hu_HU: "change {sourceTitle} title to {newSourceTitle}",
            id_ID: ["Ubah judul {sourceTitle} menjadi {newSourceTitle}"],
            it: ["Cambia titolo da {sourceTitle} a {newSourceTitle}"],
            ja: ["{sourceTitle}のタイトルを{newSourceTitle}に変更"],
            ko: ["{sourceTitle} 타이틀을 {newSourceTitle} 으로 바꾸기"],
            ms_MY: ["Tukar tajuk {sourceTitle} kepada {newSourceTitle}"],
            nl_NL: "change {sourceTitle} title to {newSourceTitle}",
            pl: ["Zmień tytuł {sourceTitle} na {newSourceTitle}."],
            pt: ["Mudar {sourceTitle} título para {newSourceTitle}"],
            ro: ["Change {sourceTitle} title to {newSourceTitle}"],
            ru: ["изменение названия {sourceTitle} на {newSourceTitle}"],
            sv: ["Ändra {sourceTitle} titel till {newSourceTitle}"],
            th: ["เปลี่ยนชื่อ {sourceTitle} ไปเป็น {newSourceTitle}"],
            tr: ["{sourceTitle} başlığını {newSourceTitle} olarak değiştirin"],
            vi: ["Thay đổi {sourceTitle} tiêu đề sang {newSourceTitle}"],
            zh: ["将{sourceTitle}标题更改为{newSourceTitle}"],
            zh_TW: ["將{sourceTitle}標題更改為{newSourceTitle}"]
        }
    }
    ,
    976080: e=>{
        e.exports = {
            ar: ["على سبيل المثال +1"],
            ca_ES: ["p. ex., +1"],
            cs: "e.g. +1",
            de: ["z.B. +1"],
            el: "e.g. +1",
            en: "e.g. +1",
            es: ["p. ej., +1"],
            fa: "e.g. +1",
            fr: ["p. ex. +1"],
            he_IL: ["לְמָשָׁל /+1"],
            hu_HU: "e.g. +1",
            id_ID: ["misalnya +1"],
            it: ["es. +1"],
            ja: ["例. +1"],
            ko: "e.g. +1",
            ms_MY: ["cth. +1"],
            nl_NL: "e.g. +1",
            pl: ["np. +1"],
            pt: ["p. ex. +1"],
            ro: "e.g. +1",
            ru: ["н-р, +1"],
            sv: ["t. ex. +1"],
            th: ["เช่น. +1"],
            tr: ["örn. +1"],
            vi: "e.g. +1",
            zh: ["例如 +1"],
            zh_TW: ["例如+1"]
        }
    }
    ,
    495166: e=>{
        e.exports = {
            ar: ["/2"],
            ca_ES: ["p. ex., /2"],
            cs: "e.g. /2",
            de: ["z.B. /2"],
            el: "e.g. /2",
            en: "e.g. /2",
            es: ["p. ej., /2"],
            fa: "e.g. /2",
            fr: ["p. ex. /2"],
            he_IL: ["לְמָשָׁל /2"],
            hu_HU: "e.g. /2",
            id_ID: ["misalnya /2"],
            it: ["es. /2"],
            ja: ["例. /2"],
            ko: "e.g. /2",
            ms_MY: ["cth. /2"],
            nl_NL: "e.g. /2",
            pl: ["np. /2"],
            pt: ["p. ex. /2"],
            ro: "e.g. /2",
            ru: ["н-р, /2"],
            sv: ["t. ex. /2"],
            th: ["ยกตัวอย่าง/2"],
            tr: ["örn. /2"],
            vi: "e.g. /2",
            zh: ["例如 /2"],
            zh_TW: ["例如 /2"]
        }
    }
}]);
