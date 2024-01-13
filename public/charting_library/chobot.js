(self.webpackChunktradingview = self.webpackChunktradingview || []).push([["chobot"], {
704952: (e, t, i) => {
    "use strict";
    i.d(t, {
        StudyBase: ()=>i(7049521).StudyBase,
        prepareStudyProperties: ()=>i(7049521).prepareStudyProperties,
        prepareStudyPropertiesForLoadChart: ()=>i(7049521).prepareStudyPropertiesForLoadChart
    });
},

7049521: (e,t,i)=>{
        "use strict";
        i.d(t, {
            StudyBase: ()=>StudyBase,
            prepareStudyProperties: ()=>prepareStudyProperties,
            prepareStudyPropertiesForLoadChart: ()=>prepareStudyPropertiesForLoadChart
        });
        var s = i(316230)
          , r = i(822914)
          , n = i(650151)
          , o = i(509806)
          , a = i(6835)
          , l = i(601227)
          , c = i(466052)
          , h = i.n(c)
          , d = i(280233)
          , u = i(779959)
          , p = i(168798)
          , _ = i(812853)
          , m = i(597399)
          , g = i(704672)
          , f = i(848801)
          , v = i(694454)
          , S = i(24667)
          , y = i(199619)
          , b = i(602907);
        class w extends S.StudyBaseWindowView {
            constructor(e, t) {
                super(e, t),
                this._showStudyValues = t.properties().childs().paneProperties.childs().legendProperties.childs().showStudyValues,
                this._showStudyValues.subscribe(this, this.update);
                const i = this._study.properties();
                i.childs().showLegendValues.subscribe(this, this.update);
                const s = this._study.metaInfo().plots
                  , r = new Set;
                s.forEach((e=>{
                    var t;
                    if ((0,
                    b.isOhlcPlot)(e)) {
                        const t = e.target;
                        if (r.has(t))
                            return;
                        r.add(t),
                        i.childs().ohlcPlots.childs()[t].childs().display.subscribe(this, this.update)
                    } else
                        (0,
                        b.isPlotSupportDisplay)(e) && (null === (t = i.childs().styles.childs()[e.id]) || void 0 === t || t.childs().display.subscribe(this, this.update))
                }))
            }
            areValuesVisible() {
                return this._showStudyValues.value()
            }
            additional() {
                return null
            }
            destroy() {
                this._showStudyValues.unsubscribeAll(this);
                const e = this._study.properties();
                e.childs().showLegendValues.unsubscribeAll(this);
                const t = this._study.metaInfo().plots
                  , i = new Set;
                t.forEach((t=>{
                    var s;
                    if ((0,
                    b.isOhlcPlot)(t)) {
                        const s = t.target;
                        if (i.has(s))
                            return;
                        i.add(s),
                        e.childs().ohlcPlots.childs()[s].childs().display.unsubscribe(this, this.update)
                    } else
                        (0,
                        b.isPlotSupportDisplay)(t) && (null === (s = e.childs().styles.childs()[t.id]) || void 0 === s || s.childs().display.unsubscribe(this, this.update))
                }
                ))
            }
            _createValuesProvider(e, t) {
                return new y.StudyLegendValuesProvider(e,t)
            }
        }
        var C = i(683471)
          , P = i(677635)
          , x = i(247414)
          , T = i(447996)
          , I = i(787868)
          , M = i(863653)
          , L = i(668138)
          , A = i.n(L)
          , k = i(372605)
          , E = i(424030);
        function D(e, t) {
            return e.studyId.localeCompare(t.studyId)
        }
        function B(e) {
            const t = new Set
              , i = [];
            return e.forEach((e=>{
                t.has(e.studyId) || (t.add(e.studyId),
                i.push(e))
            }
            )),
            i
        }
        function V(e) {
            const t = e.model().mainSeries();
            return {
                studyId: (0,
                n.ensureNotNull)(e.sourceId()),
                turnaround: e.turnaround(),
                sourceStudies: e.parentSources().filter((e=>e !== t)).map((e=>V(e)))
            }
        }
        var R = i(782425)
          , N = i(156963)
          , O = i(86441)
          , F = i(32240)
          , W = i(734792)
          , z = i(68717);
        class H extends z.BitmapCoordinatesPaneRenderer {
            constructor(e) {
                super(),
                this._data = e
            }
            hitTest(e) {
                return null
            }
            _drawImpl(e) {}
            _drawBackgroundImpl(e) {
                const {context: t, horizontalPixelRatio: i, bitmapSize: s} = e
                  , r = this._data;
                let n = null;
                const o = Math.round(this._data.barSpacing * i);
                for (let e = 0; e < r.items.length; ++e) {
                    const a = r.items[e];
                    if (null == a.color) {
                        n = null;
                        continue
                    }
                    t.fillStyle = a.color;
                    const l = Math.round(a.x * i);
                    let c = l;
                    if (e > 0) {
                        r.items[e - 1].index === a.index - 1 && null !== n && (c = n + 1)
                    }
                    const h = l + o
                      , d = h - c + 1;
                    t.fillRect(c, 0, d, s.height),
                    n = h
                }
            }
        }
        var U = i(313134);
        class j {
            constructor(e, t, i, s) {
                this._items = [],
                this._invalidated = !0,
                this._isMarkersEnabled = N.enabled("source_selection_markers"),
                this._study = e,
                this._series = t,
                this._model = i,
                this._plotName = s;
                const r = this._study.metaInfo().plots;
                for (let e = 0; e < r.length; e++) {
                    const t = r[e];
                    t.id === this._plotName && (this._plotIndex = e,
                    (0,
                    n.assert)((0,
                    b.isBgColorerPlot)(t), "Plot '" + this._plotName + "' is not a background colorer!"))
                }
                this._colorProvider = (0,
                U.createStudyPlotColorProvider)(e.metaInfo(), e.properties(), s)
            }
            items() {
                return this._items
            }
            update() {
                this._invalidated = !0
            }
            renderer() {
                if (1 != (1 & (0,
                n.ensureDefined)(this._study.properties().childs().styles.childs()[this._plotName]).childs().display.value()))
                    return null;
                if (!this._scalesReady())
                    return null;
                this._invalidated && (this._updateImpl(),
                this._invalidated = !1);
                const e = {
                    items: this._items,
                    barSpacing: this._model.timeScale().barSpacing()
                }
                  , t = new W.CompositeRenderer;
                return t.append(new H(e)),
                t
            }
            _scalesReady() {
                const e = this._model.timeScale()
                  , t = this._study.priceScale();
                return e && !e.isEmpty() && null !== t && !t.isEmpty()
            }
            _getTranspValue() {
                const e = (0,
                n.ensureDefined)(this._study.properties().childs().styles.childs()[this._plotName]).childs();
                let t = 0;
                return e.transparency && (t = e.transparency.value(),
                t = (0,
                k.isNumber)(t) ? t : 40),
                t
            }
            _updateImpl() {
                this._items = [],
                (0,
                n.assert)(this._scalesReady(), "Scales must be ready!");
                const e = this._model.timeScale().visibleBarsStrictRange();
                if (null === e)
                    return;
                const t = this._getTranspValue();
                let i = (0,
                n.ensureDefined)(this._series.nearestIndex(e.firstBar(), f.PlotRowSearchMode.NearestRight))
                  , s = (0,
                n.ensureDefined)(this._series.nearestIndex(e.lastBar(), f.PlotRowSearchMode.NearestLeft));
                const r = this._study.offset(this._plotName);
                r > 0 ? (i -= r,
                s += r) : (i += r,
                s -= r);
                const o = this._study.getMinFirstBarIndexForPlot(this._plotName);
                if (o > s)
                    return;
                i = Math.max(o, i);
                const a = this._study.data().rangeIterator(i, s);
                for (; a.hasNext(); ) {
                    const e = a.next();
                    let i = e.index;
                    const s = e.value;
                    i += r;
                    const o = new O.Point(Math.floor(i) - .5,NaN);
                    let l = (0,
                    k.isNumber)(t) ? t : 50;
                    l = Math.min(l, 100),
                    l = Math.max(l, 0);
                    const c = this._colorProvider.getPlotPointStyle(s);
                    void 0 !== c.colors[1] && (o.color = (0,
                    F.generateColor)((0,
                    n.ensureDefined)(c.colors[1]), l)),
                    o.index = i,
                    this._items.push(o)
                }
                this._model.timeScale().timedValuesToCoordinates(this._items)
            }
        }
        var G, q, $ = i(357739), Y = i(707555), K = i(355490), Z = i(44681), X = i(353795), J = i(319907), Q = i(944017), ee = i(44398), te = i(934026), ie = i(63022), se = i(384341), re = i(327714), ne = i(620218);
        !function(e) {
            e.Left = "left",
            e.Right = "right",
            e.Center = "center"
        }(G || (G = {})),
        function(e) {
            e.Top = "top",
            e.Bottom = "bottom",
            e.Middle = "middle"
        }(q || (q = {}));
        const oe = (0,
        ne.createDisconnectedCanvas)(document, (0,
        re.size)({
            width: 0,
            height: 0
        }), 1);
        class ae {
            constructor(e, t, i, s, r, o="center", a=0) {
                // updated by zhang khoa
                e = (e ?? "").toString();
                this._lines = e.split(/[^\S\r\n]*(?:\r\n|\r|\n)/),
                this._font = function(e, t, i, s) {
                    return (0,
                    se.makeFont)(s, i, `${e ? "bold " : ""}${t ? "italic " : ""}`)
                }(t, i, s, r),
                this._fontSize = r,
                this._verticalPadding = ~~(r / 6),
                this._textAlign = o,
                this._lineSpacing = a;
                const l = (0,
                n.ensureNotNull)(oe.getContext("2d"));
                l.font = this._font,
                l.textBaseline = "top";
                let c = 0;
                for (let e = 0; e < this._lines.length; ++e) {
                    const t = this._lines[e]
                      , i = l.measureText(t).width;
                    c = Math.max(c, i)
                }
                this.textImageWidth = c + 1,
                this.textImageHeight = this._lines.length * r + (this._lines.length - 1) * this._lineSpacing + this._verticalPadding
            }
            paintTo(e, t, i) {
                e.save();
                const s = t.pixelRatio
                  , r = i.location;
                e.translate(Math.round(function(e, t, i) {
                    let s = e;
                    switch (t) {
                    case "left":
                        break;
                    case "right":
                        s -= i;
                        break;
                    case "center":
                        s -= i / 2
                    }
                    return Math.round(s)
                }(r.x, r.horzAlign, this.textImageWidth) * s), Math.round(function(e, t, i) {
                    let s = e;
                    switch (t) {
                    case "top":
                        break;
                    case "bottom":
                        s -= i;
                        break;
                    case "middle":
                        s -= i / 2
                    }
                    return Math.round(s)
                }(r.y, r.vertAlign, this.textImageHeight) * s));
                const n = i.style;
                let o;
                switch (e.textBaseline = "top",
                e.font = this._font,
                e.lineJoin = "round",
                e.fillStyle = n.fillStyle,
                n.strokeStyle && (e.strokeStyle = n.strokeStyle),
                n.lineWidth && (e.lineWidth = n.lineWidth),
                this._textAlign) {
                case "left":
                    o = 0,
                    e.textAlign = "left";
                    break;
                case "right":
                    o = this.textImageWidth - 1,
                    e.textAlign = "right";
                    break;
                default:
                    o = this.textImageWidth / 2,
                    e.textAlign = "center"
                }
                let a = this._verticalPadding;
                (0,
                ne.drawScaled)(e, s, s, (()=>{
                    for (const t of this._lines)
                        n.strokeStyle && e.strokeText(t, o, a),
                        e.fillText(t, o, a),
                        a += this._fontSize,
                        a += this._lineSpacing
                }
                )),
                e.restore()
            }
        }
        class le extends ie.AbstractMapContainer {
            constructor(e) {
                super(),
                this._maxSize = e,
                this._keysQueue = []
            }
            get(e) {
                const {fontSize: t, text: i, align: s, font: r, lineSpacing: n=0} = e;
                if (!i || !t || !s)
                    return null;
                const o = (0,
                se.makeFont)(t, r)
                  , a = (0,
                ie.getDefault3)(this._map, n, s, o, new Map);
                let l = a.get(i);
                return void 0 !== l || (this._size >= this._maxSize ? this._deleteFirstKey() : ++this._size,
                this._keysQueue.push([o, s, n, i]),
                l = new ae(i,e.bold,e.italic,r,t,s,n),
                a.set(i, l)),
                l
            }
            _deleteFirstKey() {
                const e = this._keysQueue.shift()
                  , [t,i,s,r] = e
                  , o = (0,
                n.ensureDefined)(this._map.get(s))
                  , a = (0,
                n.ensureDefined)(o.get(i))
                  , l = (0,
                n.ensureDefined)(a.get(t));
                l.delete(r),
                0 === l.size && a.delete(t),
                0 === a.size && o.delete(i),
                0 === o.size && this._map.delete(s)
            }
        }
        var ce = i(526019);
        class he {
            constructor(e, t={
                skipRenderingOptimizations: !1
            }) {
                this._items = [],
                this._barSpacing = 0,
                this._vertOffset = 0,
                this._textCache = t.textCache || new le(5e3),
                this._drawOperation = t.skipRenderingOptimizations ? this._drawWithoutOptimizations.bind(this) : this._drawWithOptimizations.bind(this),
                null !== e && this.setData(e)
            }
            draw(e, t) {
                this._preDrawInit(),
                this._drawOperation(e, t)
            }
            hitTest(e) {
                const t = X.HitTarget.Regular;
                let i = null;
                for (const s of this._items) {
                    if (!s)
                        continue;
                    const r = this._calcBoundingBox(s);
                    if (r && (0,
                    te.pointInBox)(e, r)) {
                        const e = {
                            tooltip: this._getTooltip(s, r)
                        };
                        i = new X.HitTestResult(t,e)
                    }
                }
                return i
            }
            setData(e) {
                this._height = void 0 !== e.height ? e.height : e.width,
                this._width = void 0 !== e.width ? e.width : e.height,
                this._color = e.color,
                this._borderColor = e.borderColor,
                this._vertOffset = e.vertOffset || 0,
                e.text && (this._text = e.text,
                this._fontSize = e.fontSize,
                this._lineSpacing = e.lineSpacing,
                this._textColor = e.textColor,
                this._textAlign = e.textAlign || "center"),
                void 0 !== e.items && void 0 !== e.barSpacing && this.setItems(e.items, e.barSpacing)
            }
            setItems(e, t) {
                this._setBaseData(e, t)
            }
            _calcBoundingBox(e) {
                const t = e.vertOffset
                  , i = this._getTextCache(e);
                if (!i)
                    return;
                const s = i.textImageWidth
                  , r = i.textImageHeight
                  , n = s / 2
                  , o = e.y + t + e.textVertOffset
                  , a = t > 0 ? 0 : -r
                  , l = t > 0 ? r : 0
                  , c = new O.Point(e.x - n,o + a)
                  , h = new O.Point(e.x + n,o + l);
                return (0,
                O.box)(c, h)
            }
            _unionBox(e, t) {
                const i = Math.min(e.min.x, t.min.x)
                  , s = Math.max(e.max.x, t.max.x)
                  , r = Math.min(e.min.y, t.min.y)
                  , n = Math.max(e.max.y, t.max.y)
                  , o = new O.Point(i,r)
                  , a = new O.Point(s,n);
                return (0,
                O.box)(o, a)
            }
            _getTooltip(e, t) {
                if (e.tooltip)
                    return {
                        content: {
                            type: "text",
                            data: e.tooltip
                        },
                        tooltipDelay: 200,
                        extendMargin: !0,
                        rect: {
                            x: t.min.x,
                            y: t.min.y,
                            w: Math.abs(t.max.x - t.min.x),
                            h: Math.abs(t.max.y - t.min.y)
                        }
                    }
            }
            _setBaseData(e, t) {
                this._items.length = 0,
                this._barSpacing = t;
                for (const t of e) {
                    const e = void 0 === t.width ? (0,
                    n.ensureDefined)(this._width) : t.width
                      , i = void 0 === t.height ? (0,
                    n.ensureDefined)(this._height) : t.height
                      , s = void 0 === t.vertOffset ? this._vertOffset : t.vertOffset
                      , r = s > 0 ? i : -i;
                    this._items.push({
                        width: e,
                        height: i,
                        vertOffset: s,
                        textVertOffset: r,
                        shapeWidth: 0,
                        shapeHeight: 0,
                        stepX: 0,
                        stepY: 0,
                        ...t
                    })
                }
            }
            _drawItemText(e, t, i) {
                const s = this._getTextCache(i);
                if (null === s)
                    return;
                const r = i.x
                  , n = i.vertOffset
                  , o = i.y + n + i.textVertOffset;
                let a;
                a = i.style && void 0 !== i.style.textColor ? i.style.textColor : this._textColor;
                const l = {
                    style: {
                        fillStyle: a
                    },
                    location: {
                        x: r,
                        y: o,
                        horzAlign: G.Center,
                        vertAlign: n > 0 ? q.Top : q.Bottom
                    }
                };
                s.paintTo(e, t, l)
            }
            _drawWithOptimizations(e, t) {
                let i, s, r = null, n = !1;
                for (const o of this._items)
                    o.style && void 0 !== o.style.color ? (i = o.style.color || "rgba(0, 0, 0, 0)",
                    s = o.style.borderColor || "rgba(0, 0, 0, 0)") : (i = this._color,
                    s = this._borderColor),
                    (r !== i || l.isSafari) && (r = i,
                    n && this._endPath(e),
                    this._startPath(e, t, i, s)),
                    this._drawItemShape(e, t, o),
                    n = !0;
                n && this._endPath(e);
                for (const i of this._items)
                    this._drawItemText(e, t, i)
            }
            _drawWithoutOptimizations(e, t) {
                let i, s;
                for (const r of this._items) {
                    const o = (0,
                    n.ensureDefined)(r.style);
                    i = o.color || "rgba(0, 0, 0, 0)",
                    s = o.borderColor || "rgba(0, 0, 0, 0)",
                    this._startPath(e, t, i, s),
                    this._drawItemShape(e, t, r),
                    this._endPath(e),
                    this._drawItemText(e, t, r)
                }
            }
            _drawItemShape(e, t, i) {
                (0,
                ne.drawScaled)(e, t.pixelRatio, t.pixelRatio, (()=>this._drawItemShapeUsingCSSPixels(e, i)))
            }
            _drawItemShapeUsingCSSPixels(e, t) {}
            _preDrawInit() {}
            _startPath(e, t, i, s) {}
            _endPath(e) {}
            _getTextCache(e) {
                var t, i;
                const s = e.text || this._text
                  , r = e.fontSize || this._fontSize || 12
                  , n = null !== (t = e.lineSpacing) && void 0 !== t ? t : this._lineSpacing
                  , o = e.textAlign || this._textAlign || "center"
                  , a = null !== (i = e.font) && void 0 !== i ? i : ce.CHART_FONT_FAMILY;
                return this._textCache.get({
                    text: s,
                    bold: !1,
                    italic: !1,
                    font: a,
                    fontSize: r,
                    lineSpacing: n,
                    align: o
                })
            }
        }
        class de extends he {
            _startPath(e, t, i, s) {
                e.beginPath(),
                e.lineWidth = this._lineWidth(t),
                e.lineCap = "butt",
                e.strokeStyle = i
            }
            _endPath(e) {
                e.stroke()
            }
            _lineWidth(e) {
                return Math.max(1, Math.floor(2 * e.pixelRatio))
            }
        }
        class ue extends he {
            _startPath(e, t, i, s) {
                e.beginPath(),
                e.lineWidth = this._lineWidth(t),
                e.lineCap = "butt",
                e.fillStyle = i,
                e.strokeStyle = s
            }
            _endPath(e) {
                e.fill(),
                e.stroke()
            }
            _lineWidth(e) {
                return Math.max(1, Math.floor(e.pixelRatio))
            }
        }
        class pe extends ue {
            constructor() {
                super(...arguments),
                this._sign = 0,
                this._thinArrow = !1,
                this._thinArrowLineWidth = 0,
                this._headHeight = 0,
                this._arrowWidth = 0
            }
            setItems(e, t) {
                this._setBaseData(e, t)
            }
            _drawItemShape(e, t, i) {
                const s = t.pixelRatio
                  , r = this._lineWidth(t) % 2 ? .5 : 0
                  , n = this._sign
                  , o = this._arrowWidth
                  , a = this._headHeight
                  , l = Math.abs(i.height)
                  , c = Math.round(i.x * s) + r
                  , h = i.vertOffset
                  , d = Math.round((i.y + h + n * l / 2) * s) + r
                  , u = (0,
                Z.ceiledEven)(o * s)
                  , p = u / 2
                  , _ = Math.round(l * s)
                  , m = Math.round(a * s);
                e.translate(c, d),
                this._thinArrow ? (e.moveTo(0, 0),
                e.lineTo(-p, -p * n),
                e.moveTo(0, 0),
                e.lineTo(p, -p * n),
                e.moveTo(0, 0),
                e.lineTo(0, -_ * n),
                e.moveTo(-p, -_ * n),
                e.lineTo(p, -_ * n)) : (e.moveTo(0, 0),
                _ < m ? (e.lineTo(u, -_ * n),
                e.lineTo(-u, -_ * n)) : (e.lineTo(u, -m * n),
                e.lineTo(p, -m * n),
                e.lineTo(p, -_ * n),
                e.lineTo(-p, -_ * n),
                e.lineTo(-p, -m * n),
                e.lineTo(-u, -m * n)),
                e.lineTo(0, 0)),
                e.translate(-c, -d)
            }
            _preDrawInit() {
                const e = this._calculateWidth();
                this._arrowWidth = e,
                this._sign = this._isUp() ? -1 : 1,
                this._thinArrow = e < 4,
                this._thinArrowLineWidth = Math.max(e / 2, 1),
                this._headHeight = Math.round(e)
            }
            _startPath(e, t, i, s) {
                e.beginPath(),
                e.fillStyle = i,
                e.strokeStyle = s,
                e.lineWidth = this._lineWidth(t)
            }
            _lineWidth(e) {
                return this._thinArrow ? this._thinArrowLineWidth : super._lineWidth(e)
            }
            _calcBoundingBox(e) {
                const t = e.vertOffset
                  , i = this._sign
                  , s = this._arrowWidth
                  , r = this._headHeight
                  , n = Math.abs(e.height)
                  , o = e.x - s
                  , a = o + 2 * s
                  , l = e.y + t + i * Math.round(n / 2)
                  , c = l + (-n - r) * i
                  , h = new O.Point(o,l)
                  , d = new O.Point(a,c);
                let u = (0,
                O.box)(h, d);
                const p = super._calcBoundingBox(e);
                return p && (u = this._unionBox(u, p)),
                u
            }
            _calculateWidth() {
                return Math.round(this._barSpacing / 4)
            }
        }
        const _e = 2 * Math.PI;
        class me extends ue {
            setItems(e, t) {
                this._setBaseData(e, t);
                for (const e of this._items) {
                    const t = e.height;
                    e.stepX = Math.round(t / 2 * .65) + .5,
                    e.stepY = e.stepX;
                    const i = e.stepX / 2
                      , s = this._getTextCache(e);
                    if (null === s) {
                        e.shapeWidth = 2 * e.stepX,
                        e.shapeHeight = 2.5 * e.stepY,
                        e.vertOffset = this._calcVertOffset(e);
                        continue
                    }
                    const r = s.textImageWidth
                      , n = s.textImageHeight;
                    e.shapeWidth = r + 2 * e.stepX,
                    e.shapeHeight = n + 2 * i + e.stepY,
                    e.vertOffset = this._calcVertOffset(e),
                    e.textHorizOffset = this._getHorizontalTextOffset(e),
                    e.textVertOffset = this._getVerticalTextOffset(e)
                }
            }
            _calcVertOffset(e) {
                return e.vertOffset
            }
            _drawCorner(e, t, i, s, r) {
                const n = Math.max(1, Math.floor(2 * r));
                e.lineTo(t - n * s.prevPointSignX, i - n * s.prevPointSignY),
                e.arcTo(t, i, t + n * s.nextPointSignX, i + n * s.nextPointSignY, n)
            }
            _getArrowSize(e) {
                return e.stepX
            }
            _getHorizontalTextOffset(e) {
                return 0
            }
            _getVerticalTextOffset(e) {
                return 0
            }
            _hasText(e) {
                return Boolean(e.text) || Boolean(this._text)
            }
            _drawItemText(e, t, i) {
                var s;
                const r = this._getTextCache(i);
                if (null === r)
                    return;
                const o = i.textHorizOffset || 0
                  , a = i.x + o
                  , l = i.vertOffset
                  , c = i.y + l + i.textVertOffset
                  , h = (null === (s = i.style) || void 0 === s ? void 0 : s.textColor) || this._textColor
                  , d = {
                    style: {
                        fillStyle: (0,
                        n.ensureDefined)(h)
                    },
                    location: {
                        x: a,
                        y: c,
                        horzAlign: G.Center,
                        vertAlign: q.Middle
                    }
                };
                r.paintTo(e, t, d)
            }
        }
        class ge {
            constructor(e, t, i, s) {
                this.prevPointSignX = e,
                this.prevPointSignY = t,
                this.nextPointSignX = i,
                this.nextPointSignY = s
            }
        }
        var fe;
        !function(e) {
            e.rightUp = new ge(1,0,0,1),
            e.rightDown = new ge(0,1,-1,0),
            e.leftDown = new ge(-1,0,0,-1),
            e.leftUp = new ge(0,-1,1,0)
        }(fe || (fe = {}));
        class ve extends ue {
            _calcBoundingBox(e) {
                const t = e.width
                  , i = e.height
                  , s = t / 2
                  , r = Math.round(i / 3)
                  , n = e.x
                  , o = e.vertOffset - 2 * r
                  , a = e.y + o
                  , l = n - s
                  , c = n + s
                  , h = a
                  , d = a + i
                  , u = new O.Point(l,h)
                  , p = new O.Point(c,d);
                let _ = (0,
                O.box)(u, p);
                const m = super._calcBoundingBox(e);
                return m && (_ = this._unionBox(_, m)),
                _
            }
        }
        const Se = new Map;
        Se.set("PaneRendererArrowUp", class extends pe {
            _isUp() {
                return !0
            }
        }
        ),
        Se.set("PaneRendererArrowDown", class extends pe {
            _isUp() {
                return !1
            }
        }
        ),
        Se.set("PaneRendererCircleShape", class extends ue {
            _drawItemShapeUsingCSSPixels(e, t) {
                const i = Math.max(t.width, t.height) / 2
                  , s = t.x
                  , r = t.vertOffset
                  , n = t.y + r;
                e.moveTo(s + i, n),
                e.arc(s, n, i, 0, _e, !1)
            }
            _calcBoundingBox(e) {
                const t = Math.max(e.width, e.height) / 2
                  , i = e.x
                  , s = e.vertOffset
                  , r = e.y + s
                  , n = i - t
                  , o = i + t
                  , a = r - t
                  , l = r + t
                  , c = new O.Point(n,a)
                  , h = new O.Point(o,l);
                let d = (0,
                O.box)(c, h);
                const u = super._calcBoundingBox(e);
                return u && (d = this._unionBox(d, u)),
                d
            }
        }
        ),
        Se.set("PaneRendererCrossShape", class extends de {
            _drawItemShape(e, t, i) {
                const s = i.width
                  , r = i.height
                  , n = i.x - s / 2
                  , o = i.vertOffset
                  , a = i.y - r / 2 + o
                  , l = t.pixelRatio
                  , c = this._lineWidth(t)
                  , h = c % 2 ? .5 : 0
                  , d = Math.round(n * l);
                let u = Math.round((n + s) * l);
                (u - d) % 2 != c % 2 && (u += 1);
                const p = Math.floor((d + u) / 2) + h
                  , _ = Math.round(a * l);
                let m = Math.round((a + r) * l);
                (m - _) % 2 != c % 2 && (m += 1);
                const g = Math.floor((_ + m) / 2) + h;
                e.moveTo(p, _),
                e.lineTo(p, m),
                e.moveTo(d, g),
                e.lineTo(u, g)
            }
            _calcBoundingBox(e) {
                const t = e.width
                  , i = e.height
                  , s = e.x - t / 2
                  , r = e.vertOffset
                  , n = e.y - i / 2 + r
                  , o = s
                  , a = s + t
                  , l = n
                  , c = n + i
                  , h = new O.Point(o,l)
                  , d = new O.Point(a,c);
                let u = (0,
                O.box)(h, d);
                const p = super._calcBoundingBox(e);
                return p && (u = this._unionBox(u, p)),
                u
            }
        }
        ),
        Se.set("PaneRendererDiamond", class extends ue {
            _drawItemShapeUsingCSSPixels(e, t) {
                const i = Math.round(t.height / 2)
                  , s = t.x
                  , r = t.vertOffset
                  , n = t.y + r;
                e.moveTo(s, n - i),
                e.lineTo(s + i, n),
                e.lineTo(s, n + i),
                e.lineTo(s - i, n),
                e.lineTo(s, n - i)
            }
            _calcBoundingBox(e) {
                const t = Math.round(e.height / 2)
                  , i = e.x
                  , s = e.vertOffset
                  , r = e.y + s
                  , n = i - t
                  , o = i + t
                  , a = r - t
                  , l = r + t
                  , c = new O.Point(n,a)
                  , h = new O.Point(o,l);
                let d = (0,
                O.box)(c, h);
                const u = super._calcBoundingBox(e);
                return u && (d = this._unionBox(d, u)),
                d
            }
        }
        ),
        Se.set("PaneRendererFlagShape", class extends ue {
            _drawItemShapeUsingCSSPixels(e, t) {
                const i = t.width
                  , s = t.height
                  , r = s / 2
                  , n = (i - 3) / 3
                  , o = t.x - i / 2
                  , a = t.vertOffset
                  , l = t.y - r + a;
                e.moveTo(o, l),
                e.lineTo(o + 3, l),
                e.bezierCurveTo(o + n, l - n, o + 2 * n, l + n, o + i, l),
                e.lineTo(o + i, l + r),
                e.bezierCurveTo(o + i - n, l + r + n, o + i - 2 * n, l + r - n, o + 3, l + r),
                e.lineTo(o + 3, l + s),
                e.lineTo(o, l + s),
                e.lineTo(o, l)
            }
            _calcBoundingBox(e) {
                const t = e.width
                  , i = e.height
                  , s = i / 2
                  , r = e.x - t / 2
                  , n = e.vertOffset
                  , o = e.y - s + n
                  , a = r
                  , l = r + t
                  , c = o
                  , h = o + i
                  , d = new O.Point(a,c)
                  , u = new O.Point(l,h);
                let p = (0,
                O.box)(d, u);
                const _ = super._calcBoundingBox(e);
                return _ && (p = this._unionBox(p, _)),
                p
            }
        }
        ),
        Se.set("PaneRendererLabelUp", class extends me {
            _calcBoundingBox(e) {
                const t = e.x - e.shapeWidth / 2
                  , i = e.x + e.shapeWidth / 2
                  , s = e.y + e.vertOffset
                  , r = e.y + e.shapeHeight + e.vertOffset
                  , n = new O.Point(t,s)
                  , o = new O.Point(i,r);
                return (0,
                O.box)(n, o)
            }
            _drawItemShape(e, t, i) {
                const s = t.pixelRatio
                  , r = this._lineWidth(t) % 2 ? .5 : 0
                  , n = Math.max(1, Math.floor(s)) % 2 ? .5 : 0
                  , o = this._getArrowSize(i);
                let a = Math.round(o * s);
                (n + a) % 1 != r % 1 && (a += .5);
                let l = Math.round(i.shapeWidth / 2 * s);
                (n + l) % 1 != r % 1 && (l += .5);
                const c = Math.round(i.x * s) + n
                  , h = Math.round((i.y + i.vertOffset) * s) + r
                  , d = c - a
                  , u = Math.round((i.y + i.vertOffset + o) * s) + r
                  , p = c + a
                  , _ = c + l
                  , m = Math.round((i.y + i.vertOffset + i.shapeHeight) * s) + r
                  , g = c - l;
                e.moveTo(d, u),
                e.lineTo(c, h),
                e.lineTo(p, u),
                i.shapeWidth <= 2 * o ? (e.lineTo(_, u),
                this._drawCorner(e, _, m, fe.rightDown, s),
                this._drawCorner(e, g, m, fe.leftDown, s),
                e.lineTo(g, u)) : (this._drawCorner(e, _, u, fe.rightUp, s),
                this._drawCorner(e, _, m, fe.rightDown, s),
                this._drawCorner(e, g, m, fe.leftDown, s),
                this._drawCorner(e, g, u, fe.leftUp, s)),
                e.lineTo(d, u)
            }
            _getVerticalTextOffset(e) {
                return e.shapeHeight / 2 + this._getArrowSize(e) / 2
            }
            _calcVertOffset(e) {
                return Math.sign(e.vertOffset) >= 0 ? e.vertOffset : e.vertOffset - e.shapeHeight
            }
        }
        ),
        Se.set("PaneRendererLabelDown", class extends me {
            _calcBoundingBox(e) {
                const t = e.x - e.shapeWidth / 2
                  , i = e.x + e.shapeWidth / 2
                  , s = e.y - e.shapeHeight + e.vertOffset
                  , r = e.y + e.vertOffset
                  , n = new O.Point(t,s)
                  , o = new O.Point(i,r);
                return (0,
                O.box)(n, o)
            }
            _drawItemShape(e, t, i) {
                const s = t.pixelRatio
                  , r = this._lineWidth(t) % 2 ? .5 : 0
                  , n = Math.max(1, Math.floor(s)) % 2 ? .5 : 0
                  , o = this._getArrowSize(i);
                let a = Math.round(o * s);
                (n + a) % 1 != r % 1 && (a += .5);
                let l = Math.round(i.shapeWidth / 2 * s);
                (n + l) % 1 != r % 1 && (l += .5);
                const c = Math.round(i.x * s) + n
                  , h = Math.round((i.y + i.vertOffset) * s) + r
                  , d = c + a
                  , u = Math.round((i.y + i.vertOffset - o) * s) + r
                  , p = c - a
                  , _ = c + l
                  , m = Math.round((i.y + i.vertOffset - i.shapeHeight) * s) + r
                  , g = c - l;
                e.moveTo(d, u),
                e.lineTo(c, h),
                e.lineTo(p, u),
                i.shapeWidth <= 2 * o ? (e.lineTo(g, u),
                this._drawCorner(e, g, m, fe.leftUp, s),
                this._drawCorner(e, _, m, fe.rightUp, s),
                e.lineTo(_, u)) : (this._drawCorner(e, g, u, fe.leftDown, s),
                this._drawCorner(e, g, m, fe.leftUp, s),
                this._drawCorner(e, _, m, fe.rightUp, s),
                this._drawCorner(e, _, u, fe.rightDown, s)),
                e.lineTo(d, u)
            }
            _getVerticalTextOffset(e) {
                return -e.shapeHeight / 2 - this._getArrowSize(e) / 2
            }
            _calcVertOffset(e) {
                return Math.sign(e.vertOffset) <= 0 ? e.vertOffset : e.vertOffset + e.shapeHeight
            }
        }
        ),
        Se.set("PaneRendererSquare", class extends ue {
            _drawItemShape(e, t, i) {
                const s = t.pixelRatio
                  , r = Math.max(1, Math.floor(s)) % 2 ? .5 : 0
                  , n = this._lineWidth(t) % 2 ? .5 : 0;
                let o = Math.round(i.height / 2 * s);
                (r + o) % 1 != n % 1 && (o += .5);
                const a = Math.round(i.x * s) + r
                  , l = Math.round((i.y + i.vertOffset) * s) + r
                  , c = a - o
                  , h = l - o
                  , d = a + o
                  , u = l + o;
                e.rect(c, h, d - c, u - h)
            }
            _calcBoundingBox(e) {
                const t = e.height
                  , i = Math.round(t / 2)
                  , s = e.x - i
                  , r = e.vertOffset
                  , n = e.y + r - i
                  , o = s
                  , a = s + t
                  , l = n
                  , c = n + t
                  , h = new O.Point(o,l)
                  , d = new O.Point(a,c);
                let u = (0,
                O.box)(h, d);
                const p = super._calcBoundingBox(e);
                return p && (u = this._unionBox(u, p)),
                u
            }
        }
        ),
        Se.set("PaneRendererTriangleApexUp", class extends ve {
            _drawItemShape(e, t, i) {
                const s = i.width
                  , r = i.height
                  , n = Math.round(r / 3)
                  , o = i.vertOffset - 2 * n
                  , a = t.pixelRatio
                  , l = this._lineWidth(t) % 2 ? .5 : 0
                  , c = Math.max(1, Math.floor(a))
                  , h = c % 2 ? .5 : 0;
                let d = Math.round(s * a);
                d % 2 != c % 2 && (d += 1);
                const u = Math.round(i.x * a) + h
                  , p = Math.round((i.y + o) * a)
                  , _ = u + d / 2
                  , m = Math.round((i.y + o + r) * a) + l
                  , g = u - d / 2;
                e.moveTo(u, p),
                e.lineTo(_, m),
                e.lineTo(g, m),
                e.lineTo(u, p)
            }
        }
        ),
        Se.set("PaneRendererTriangleApexDown", class extends ve {
            _drawItemShape(e, t, i) {
                const s = i.width
                  , r = i.height
                  , n = Math.round(r / 3)
                  , o = i.vertOffset - n
                  , a = t.pixelRatio
                  , l = this._lineWidth(t) % 2 ? .5 : 0
                  , c = Math.max(1, Math.floor(a))
                  , h = c % 2 ? .5 : 0;
                let d = Math.round(s * a);
                d % 2 != c % 2 && (d += 1);
                const u = Math.round(i.x * a) + h
                  , p = Math.round((i.y + o) * a) + l
                  , _ = u + d / 2
                  , m = Math.round((i.y + o + r) * a)
                  , g = u - d / 2;
                e.moveTo(g, p),
                e.lineTo(_, p),
                e.lineTo(u, m),
                e.lineTo(g, p)
            }
        }
        ),
        Se.set("PaneRendererXCross", class extends de {
            _drawItemShapeUsingCSSPixels(e, t) {
                const i = t.width
                  , s = t.height
                  , r = t.x - i / 2
                  , n = t.vertOffset
                  , o = t.y - s / 2 + n;
                e.moveTo(r, o),
                e.lineTo(r + i, o + s),
                e.moveTo(r, o + s),
                e.lineTo(r + i, o)
            }
            _calcBoundingBox(e) {
                const t = e.width
                  , i = e.height
                  , s = e.x - t / 2
                  , r = e.vertOffset
                  , n = e.y - i / 2 + r
                  , o = s
                  , a = s + t
                  , l = n
                  , c = n + i
                  , h = new O.Point(o,l)
                  , d = new O.Point(a,c);
                let u = (0,
                O.box)(h, d);
                const p = super._calcBoundingBox(e);
                return p && (u = this._unionBox(u, p)),
                u
            }
        }
        );
        class ye {
            constructor(e, t, i, s) {
                var r;
                this._items = [],
                this._invalidated = !1,
                this._renderer = null,
                this._isMarkersEnabled = N.enabled("source_selection_markers"),
                this._selectionData = null,
                this._plotIndex = null,
                this._topCoord = 0,
                this._bottomCoord = 0,
                this._study = e,
                this._series = t,
                this._model = i,
                this._plotName = s;
                const o = e.metaInfo().plots;
                for (let e = 0; e < o.length; e++)
                    if (o[e].id === this._plotName) {
                        this._plotIndex = e;
                        break
                    }
                this._plotStyleInfo = (0,
                n.ensureDefined)(null === (r = e.metaInfo().styles) || void 0 === r ? void 0 : r[this._plotName]),
                this._colorProvider = (0,
                U.createStudyPlotColorProvider)(e.metaInfo(), e.properties(), s),
                this._selectionIndexer = new J.SelectionIndexes(i.timeScale())
            }
            items() {
                return this._items
            }
            update() {
                this._invalidated = !0
            }
            renderer() {
                if (!this._isPlotVisible() || !this._scalesReady())
                    return null;
                if (this._invalidated) {
                    const e = this._study.properties().childs().styles.childs()[this._plotName];
                    this._updateRenderer(e),
                    this._invalidated = !1
                }
                return this._renderer
            }
            _isPlotVisible() {
                return this._study.isPlotVisibleAt(this._plotName, 1)
            }
            _scalesReady() {
                const e = this._model.timeScale()
                  , t = this._study.priceScale();
                return e && null !== t && !e.isEmpty() && !t.isEmpty()
            }
            _updateImpl() {
                if (this._items = [],
                !this._scalesReady())
                    return;
                const e = this._model.timeScale()
                  , t = this._study.priceScale()
                  , i = e.visibleBarsStrictRange();
                if (null === i || null === t)
                    return;
                let s = this._series.nearestIndex(i.firstBar(), f.PlotRowSearchMode.NearestRight)
                  , r = this._series.nearestIndex(i.lastBar(), f.PlotRowSearchMode.NearestLeft);
                if (void 0 === s || void 0 === r)
                    return;
                const o = this._study.offset(this._plotName);
                o > 0 ? (s -= o,
                r += o) : (s += o,
                r -= o);
                const a = this._study.getMinFirstBarIndexForPlot(this._plotName);
                if (a > r)
                    return;
                s = Math.max(a, s);
                const l = this._study.data()
                  , c = this._study.firstValue();
                if (null === c)
                    return;
                const h = l.rangeIterator(s, r)
                  , d = this._getTranspValue();
                let u = [];
                const p = this._model.selection().isSelected(this._study);
                p ? (u = this._selectionIndexer.indexes(),
                this._selectionData = {
                    points: [],
                    hittestResult: X.HitTarget.Regular,
                    vertOffset: 0,
                    bgColors: [],
                    barSpacing: e.barSpacing(),
                    visible: !0
                }) : (this._selectionIndexer.clear(),
                this._selectionData = null);
                let _, m, g = null;
                switch (this._series.properties().childs().style.value()) {
                case 2:
                    g = "lineStyle";
                    break;
                case 14:
                    g = "lineWithMarkersStyle";
                    break;
                case 15:
                    g = "steplineStyle";
                    break;
                case 3:
                    g = "areaStyle"
                }
                g ? (_ = this._series.properties().childs()[g].childs().priceSource.value(),
                m = _) : (_ = "high",
                m = "low");
                const v = t.isInverted()
                  , S = t.coordinateToPrice(t.height() * t.topMargin(), c)
                  , y = t.coordinateToPrice(t.height() * (1 - t.bottomMargin()), c);
                this._topCoord = v ? y : S,
                this._bottomCoord = v ? S : y;
                const b = (0,
                n.ensureNotNull)(this._model.paneForSource(this._study)).height()
                  , w = this._study.properties().childs().styles.childs()[this._plotName].childs()
                  , C = w.color.value()
                  , P = w.textColor ? w.textColor.value() : void 0
                  , x = C
                  , T = C
                  , I = void 0 === P ? void 0 : P
                  , M = (0,
                n.ensureNotNull)(this._plotIndex)
                  , L = (0,
                ee.createEmptyStyle)();
                for (; h.hasNext(); ) {
                    const e = h.next()
                      , t = e.index
                      , i = e.value
                      , s = Math.floor(t + o)
                      , r = i[M + 1];
                    if (null == r)
                        continue;
                    const n = this._createItem(s, r, _, m);
                    if (null !== n) {
                        n.text = r; // updated by zhang khoa
                        if (this._colorProvider.isColorDefined()) {
                            n.style = {
                                color: x,
                                borderColor: T,
                                textColor: I
                            };
                            const e = this._colorProvider.getPlotPointStyle(i, L);
                            this._fillItemWithPointStyle(n, e, d)
                        }
                        p && -1 !== u.indexOf(t) && null !== this._selectionData && (this._selectionData.points.push(n),
                        this._selectionData.bgColors.push(this._model.backgroundColorAtYPercentFromTop(n.y / b))),
                        this._items.push(n)
                    }
                }
                this._convertItemsToCoordinates()
            }
            _fillItemWithPointStyle(e, t, i) {
                const s = (0,
                n.ensureDefined)(e.style);
                if (void 0 !== t.colors[0]) {
                    s.color = (0,
                    F.generateColor)((0,
                    n.ensureDefined)(t.colors[0]), i);
                    const e = i > 9 ? i - 10 : 0;
                    s.borderColor = (0,
                    F.generateColor)(s.color, e)
                }
                void 0 !== t.colors[2] && (s.textColor = (0,
                F.generateColor)((0,
                n.ensureDefined)(t.colors[2]), i))
            }
            _updateRenderer(e) {
                this._updateImpl();
                const t = this._model.timeScale()
                  , i = {}
                  , s = this._getTranspValue()
                  , r = t.barSpacing()
                  , n = this._calculateShapeHeight(r)
                  , o = this._study.properties().childs().styles.childs()[this._plotName].childs()
                  , a = o.location.value()
                  , l = this._calculateVerticalOffset(a, n + n / 2);
                i.barSpacing = r,
                i.items = this._items,
                i.color = (0,
                F.generateColor)(o.color.value(), s),
                i.height = n,
                i.vertOffset = l;
                const c = o.plottype.value()
                  , h = K.plotShapesData[c]
                  , d = new W.CompositeRenderer;
                h && d.append(this._createRenderer(h.paneRendererClass, i)),
                this._model.selection().isSelected(this._study) && this._isMarkersEnabled && null !== this._selectionData && (this._selectionData.vertOffset = l,
                d.append(new Y.SelectionRenderer(this._selectionData))),
                this._renderer = d
            }
            _createRenderer(e, t) {
                const i = Se.get(e);
                return new ((0,
                n.ensureDefined)(i))(t)
            }
            _getSeriesVal(e, t) {
                const i = (0,
                Q.barFunction)(e)
                  , s = this._series.data().valueAt(t);
                return null === s ? null : i(s)
            }
            _getTranspValue() {
                let e = 0;
                const t = this._study.properties().childs();
                t.transparency && (e = t.transparency.value(),
                e = (0,
                k.isNumber)(e) ? e : 50);
                const i = t.styles.childs()[this._plotName].childs();
                return i.transparency && (e = i.transparency.value(),
                e = (0,
                k.isNumber)(e) ? e : 50),
                (0,
                Z.clamp)(e, 0, 100)
            }
            _createItem(e, t, i, s) {
                const r = this._study.properties().childs().styles.childs()[this._plotName].childs().location.value();
                if ((null === t || 0 === t) && r !== v.MarkLocation.Absolute)
                    return null;
                let o;
                switch (r) {
                case v.MarkLocation.AboveBar:
                    const a = this._getSeriesVal(i, e);
                    if (null === a)
                        return null;
                    o = a;
                    break;
                case v.MarkLocation.BelowBar:
                    const l = this._getSeriesVal(s, e);
                    if (null === l)
                        return null;
                    o = l;
                    break;
                case v.MarkLocation.Top:
                    o = this._topCoord;
                    break;
                case v.MarkLocation.Bottom:
                    o = this._bottomCoord;
                    break;
                case v.MarkLocation.Absolute:
                    o = (0,
                    n.ensureNotNull)(t);
                    break;
                default:
                    throw new Error("Bad value: " + r)
                }
                return new O.Point(e,o)
            }
            _convertItemsToCoordinates() {
                const e = this._model.timeScale()
                  , t = this._study.priceScale();
                e.timedValuesToCoordinates(this._items);
                const i = (0,
                n.ensureNotNull)(this._study.firstValue());
                (0,
                n.ensureNotNull)(t).pointsArrayToCoordinates(this._items, i)
            }
            _calculateVerticalOffset(e, t) {
                let i = 0;
                switch (e) {
                case v.MarkLocation.AboveBar:
                case v.MarkLocation.Bottom:
                    i = -t;
                    break;
                case v.MarkLocation.BelowBar:
                case v.MarkLocation.Top:
                    i = t
                }
                return (0,
                n.ensureNotNull)(this._study.priceScale()).isInverted() && (i *= -1),
                i
            }
            _calculateShapeHeight(e, t) {
                let i = e;
                switch (t) {
                case b.PlotSymbolSize.Tiny:
                    i = .3 * e;
                    break;
                case b.PlotSymbolSize.Small:
                    i = .6 * e;
                    break;
                case b.PlotSymbolSize.Normal:
                    i = e;
                    break;
                case b.PlotSymbolSize.Large:
                    i = 1.5 * e;
                    break;
                case b.PlotSymbolSize.Huge:
                    i = 2 * e
                }
                return i
            }
        }
        class be extends ye {
            _updateRenderer(e) {
                const t = e.childs();
                this._updateImpl();
                const i = this._model.timeScale()
                  , s = {}
                  , r = this._getTranspValue()
                  , n = i.barSpacing();
                let o;
                o = this._plotStyleInfo.size ? this._calculateShapeHeight(25, this._plotStyleInfo.size) : Math.round(n / 2),
                o = Math.max(o, 1);
                const a = t.location.value()
                  , l = (0,
                F.generateColor)(t.color.value(), r)
                  , c = r > 19 ? r - 10 : 0
                  , h = this._calculateVerticalOffset(a, Math.round(1.5 * o));
                s.barSpacing = n,
                s.items = this.items(),
                s.color = l,
                s.borderColor = (0,
                F.generateColor)(t.color.value(), c),
                s.height = o,
                s.vertOffset = h;
                const d = t.plottype.value()
                  , u = K.plotShapesData[d]
                  , p = new W.CompositeRenderer
                  , _ = this._plotStyleInfo.text;
                if (void 0 !== _ && "" !== _.trim()) {
                    let e = _.trim().replace(/\\n/gm, "\n");
                    e = (0,
                    $.cleanButAmpersand)(e, !0),
                    s.text = e,
                    s.fontSize = 12;
                    const i = t.textColor ? t.textColor.value() : void 0;
                    s.textColor = i ? (0,
                    F.generateColor)(i, r) : l
                }
                p.append(super._createRenderer(u.paneRendererClass, s)),
                this._model.selection().isSelected(this._study) && this._isMarkersEnabled && null !== this._selectionData && (this._selectionData.vertOffset = h,
                p.append(new Y.SelectionRenderer(this._selectionData))),
                this._renderer = p
            }
        }
        var we = i(687795)
          , Ce = i.n(we)
          , Pe = i(466093);
        class xe extends he {
            constructor(e, t) {
                super(null, t),
                this._fontSizeEnsured = 0,
                this._ch = "",
                this._fontFamily = ce.CHART_FONT_FAMILY,
                this._charCache = null,
                null !== e && this.setData(e)
            }
            setData(e) {
                super.setData(e),
                this._fontSizeEnsured = (0,
                n.ensureDefined)(this._height);
                const t = e.char.slice(0, 40);
                this._ch = Ce()(t)[0] || " ",
                this._fontFamily = e.fontFamily || ce.CHART_FONT_FAMILY
            }
            hitTest(e) {
                const t = (0,
                Pe.interactionTolerance)().series + this._fontSizeEnsured / 2;
                for (const i of this._items) {
                    if (new O.Point(i.x,i.y + i.vertOffset).subtract(e).length() <= t)
                        return new X.HitTestResult(X.HitTarget.Regular)
                }
                return null
            }
            _drawItemShape(e, t, i) {
                const s = i.x
                  , r = i.vertOffset > 0 ? 1 : -1
                  , n = i.y + i.vertOffset - r * Math.round(this._fontSizeEnsured / 2);
                let o;
                o = i.style && void 0 !== i.style.color ? i.style.color : this._color;
                const a = this._textImageCache()
                  , l = t.pixelRatio;
                if (this._fontSizeEnsured <= 4 / l) {
                    e.save();
                    const t = Math.max(1, Math.floor(l));
                    let r = Math.max(1, Math.floor(a.textImageWidth * l));
                    r % 2 != t % 2 && (r += r > 1 ? -1 : 1);
                    const c = Math.round(n * l) + (i.vertOffset >= 0 ? 0 : -r);
                    return e.fillStyle = o,
                    e.fillRect(Math.round(s * l) + (l % 2 ? .5 : 0) - r / 2, c, r, r),
                    void e.restore()
                }
                const c = {
                    style: {
                        fillStyle: o
                    },
                    location: {
                        x: s,
                        y: n,
                        horzAlign: G.Center,
                        vertAlign: i.vertOffset > 0 ? q.Top : q.Bottom
                    }
                };
                a.paintTo(e, t, c)
            }
            _startPath(e, t, i, s) {}
            _endPath(e) {}
            _textImageCache() {
                return null !== this._charCache && this._charCache.fontFamily === this._fontFamily && this._charCache.fontSize === this._fontSizeEnsured || (this._charCache = {
                    fontSize: this._fontSizeEnsured,
                    fontFamily: this._fontFamily,
                    cache: new ae(this._ch,!1,!1,this._fontFamily,this._fontSizeEnsured,"center",0)
                }),
                this._charCache.cache
            }
        }
        class Te extends ye {
            constructor() {
                super(...arguments),
                this._compositeRenderer = new W.CompositeRenderer,
                this._charRenderer = new xe(null)
            }
            renderer() {
                return this._isPlotVisible() && this._scalesReady() ? (this._invalidated && (this._updateImpl(),
                this._invalidated = !1),
                this._compositeRenderer) : null
            }
            _updateImpl() {
                var e, t;
                if (this._compositeRenderer.clear(),
                super._updateImpl(),
                0 === this._items.length)
                    return;
                const i = this._getTranspValue()
                  , s = this._model.timeScale().barSpacing();
                let r;
                const o = this._study.properties().childs().styles.childs()[this._plotName].childs();
                r = this._plotStyleInfo.size ? this._calculateShapeHeight(50, this._plotStyleInfo.size) : Math.round(s);
                const a = o.location.value()
                  , l = (0,
                F.generateColor)(o.color.value(), i)
                  , c = this._calculateVerticalOffset(a, r)
                  , h = {
                    items: this.items(),
                    barSpacing: s,
                    char: (0,
                    n.ensureDefined)(null !== (t = null === (e = o.char) || void 0 === e ? void 0 : e.value()) && void 0 !== t ? t : this._plotStyleInfo.char),
                    height: r,
                    vertOffset: c,
                    color: l
                }
                  , d = this._plotStyleInfo.text;
                if (void 0 !== d && "" !== d.trim()) {
                    let e = d.trim().replace(/\\n/gm, "\n");
                    e = (0,
                    $.cleanButAmpersand)(e, !0),
                    h.text = e,
                    h.fontSize = 12;
                    const t = o.textColor ? o.textColor.value() : void 0;
                    h.textColor = t ? (0,
                    F.generateColor)(t, i) : l
                }
                this._charRenderer.setData(h),
                this._compositeRenderer.append(this._charRenderer),
                this._model.selection().isSelected(this._study) && this._isMarkersEnabled && null !== this._selectionData && (this._selectionData.vertOffset = c,
                this._compositeRenderer.append(new Y.SelectionRenderer(this._selectionData)))
            }
        }
        var Ie = i(724377);
        class Me extends O.Point {
            constructor(e, t, i, s) {
                super(e, t),
                this.height = i,
                this.isUp = s,
                this.style = {}
            }
        }
        function Le(e) {
            return Math.round(e / 4)
        }
        function Ae(e) {
            return Math.round(e / 2)
        }
        class ke extends z.BitmapCoordinatesPaneRenderer {
            constructor(e) {
                super(),
                this._data = e
            }
            hitTest(e) {
                const t = this._data
                  , i = Ae(t.barSpacing)
                  , s = Math.round(i / 2)
                  , r = Math.round(i)
                  , n = Le(t.barSpacing);
                for (const i of t.items) {
                    if (!i)
                        continue;
                    if (!Number.isFinite(i.x) || !Number.isFinite(i.y))
                        continue;
                    const t = Math.abs(i.height)
                      , o = i.isUp ? -1 : 1
                      , a = t + r
                      , l = i.y - o * n
                      , c = l - o * a
                      , h = i.x - s
                      , d = i.x + s;
                    if (h < e.x && e.x < d && (i.isUp ? l < e.y && e.y < c : c < e.y && e.y < l))
                        return new X.HitTestResult(X.HitTarget.Regular)
                }
                return null
            }
            _drawImpl(e) {
                var t;
                const {horizontalPixelRatio: i, verticalPixelRatio: s, context: r} = e
                  , n = this._data
                  , o = Ae(n.barSpacing)
                  , a = Le(n.barSpacing)
                  , l = o < 4
                  , c = Math.max(o / 2, 1)
                  , h = (0,
                Z.ceiledEven)(o * i)
                  , d = h / 2
                  , u = Math.round(o * s);
                r.lineCap = "butt",
                r.lineWidth = Math.max(1, Math.floor(i));
                const p = r.lineWidth % 2 ? .5 : 0;
                for (const e of n.items) {
                    const o = e.isUp ? -1 : 1
                      , _ = Math.round(Math.abs(e.height) * s)
                      , m = Math.round(e.x * i) + p
                      , g = Math.round((e.y - o * a) * s) + p;
                    r.beginPath(),
                    r.translate(m, g);
                    const f = null !== (t = e.style && e.style.color) && void 0 !== t ? t : e.isUp ? n.colorup : n.colordown;
                    l ? (r.moveTo(0, 0),
                    r.lineTo(-d, -d * o),
                    r.moveTo(0, 0),
                    r.lineTo(d, -d * o),
                    r.moveTo(0, 0),
                    r.lineTo(0, -_ * o),
                    r.moveTo(-d, -_ * o),
                    r.lineTo(d, -_ * o),
                    r.lineWidth = c,
                    r.strokeStyle = f,
                    r.stroke()) : (r.moveTo(0, 0),
                    _ < u ? (r.lineTo(h, -_ * o),
                    r.lineTo(-h, -_ * o)) : (r.lineTo(h, -u * o),
                    r.lineTo(d, -u * o),
                    r.lineTo(d, -_ * o),
                    r.lineTo(-d, -_ * o),
                    r.lineTo(-d, -u * o),
                    r.lineTo(-h, -u * o)),
                    r.lineTo(0, 0),
                    r.strokeStyle = e.isUp ? n.colorBorderUp : n.colorBorderDown,
                    r.stroke(),
                    r.fillStyle = f,
                    r.fill()),
                    r.translate(-m, -g)
                }
            }
        }
        class Ee extends Y.SelectionRenderer {
            _drawMarker(e, t, i, s) {
                const {context: r, horizontalPixelRatio: o, verticalPixelRatio: a} = e
                  , l = (0,
                n.ensureNotNull)(this._data)
                  , c = t.isUp ? 1 : -1;
                const h = i + c * Le(l.barSpacing) + c * Ae(l.barSpacing);
                let d = Math.round(3.5 * o * 2);
                d % 2 != s % 2 && (d += 1);
                const u = s % 2 / 2
                  , p = Math.round(t.x * o) + u
                  , _ = Math.round((t.y + h) * a) + u;
                r.beginPath(),
                r.arc(p, _, d / 2, 0, 2 * Math.PI, !0),
                r.closePath(),
                r.fill(),
                r.stroke()
            }
        }
        class De extends ye {
            constructor() {
                super(...arguments),
                this._maxAbsValue = 0
            }
            renderer() {
                if (!this._isPlotVisible() || !this._scalesReady())
                    return null;
                this._invalidated && (this._updateImpl(),
                this._invalidated = !1);
                const e = this._study.properties().childs().styles.childs()[this._plotName].childs()
                  , t = {}
                  , i = (0,
                Z.clamp)(this._getTranspValue(), 0, 100)
                  , s = this._model.timeScale().barSpacing();
                t.items = this._items,
                t.barSpacing = s,
                t.colorup = (0,
                F.generateColor)(e.colorup.value(), i),
                t.colordown = (0,
                F.generateColor)(e.colordown.value(), i);
                const r = (0,
                Ie.parseRgba)(t.colorup)
                  , n = r ? 100 * (1 - r[3]) : 0
                  , o = (0,
                Ie.parseRgba)(t.colordown)
                  , a = o ? 100 * (1 - o[3]) : 0;
                t.colorBorderUp = (0,
                F.generateColor)("#000000", n),
                t.colorBorderDown = (0,
                F.generateColor)("#000000", a),
                t.minHeight = this._plotStyleInfo.minHeight,
                t.maxHeight = this._plotStyleInfo.maxHeight;
                const l = new W.CompositeRenderer;
                if (l.append(new ke(t)),
                this._model.selection().isSelected(this._study) && null !== this._selectionData) {
                    const e = this._selectionData;
                    e.barSpacing = s,
                    l.append(new Ee(e))
                }
                return l
            }
            _fillItemWithPointStyle(e, t, i) {
                const s = (0,
                n.ensureDefined)(e.style);
                e.isUp ? void 0 !== t.colors[5] ? s.color = (0,
                F.generateColor)((0,
                n.ensureDefined)(t.colors[5]), i) : s.color = (0,
                F.generateColor)(this._study.properties().childs().styles.childs()[this._plotName].childs().colorup.value(), i) : void 0 !== t.colors[6] ? s.color = (0,
                F.generateColor)((0,
                n.ensureDefined)(t.colors[6]), i) : s.color = (0,
                F.generateColor)(this._study.properties().childs().styles.childs()[this._plotName].childs().colordown.value(), i)
            }
            _createItem(e, t, i, s) {
                if (0 === t)
                    return null;
                Math.abs(t) > this._maxAbsValue && (this._maxAbsValue = Math.abs(t));
                const r = t > 0;
                let n;
                if (r) {
                    const t = this._getSeriesVal(s, e);
                    if (null === t)
                        return null;
                    n = t
                } else {
                    const t = this._getSeriesVal(i, e);
                    if (null === t)
                        return null;
                    n = t
                }
                return new Me(e,n,t,r)
            }
            _convertItemsToCoordinates() {
                var e, t, i, s;
                const r = this._model.timeScale()
                  , o = (0,
                n.ensureNotNull)(this._study.priceScale());
                r.timedValuesToCoordinates(this._items),
                o.pointsArrayToCoordinates(this._items, (0,
                n.ensureNotNull)(this._study.firstValue()));
                const a = this._study.properties().childs().styles.childs();
                let l = Math.abs((0,
                n.ensureDefined)(null !== (t = null === (e = a[this._plotName].childs().minHeight) || void 0 === e ? void 0 : e.value()) && void 0 !== t ? t : this._plotStyleInfo.minHeight))
                  , c = Math.abs((0,
                n.ensureDefined)(null !== (s = null === (i = a[this._plotName].childs().maxHeight) || void 0 === i ? void 0 : i.value()) && void 0 !== s ? s : this._plotStyleInfo.maxHeight));
                if (l > c) {
                    const e = l;
                    l = c,
                    c = e
                }
                const h = (c - l) / this._maxAbsValue
                  , d = this._items;
                for (let e = 0; e < d.length; e++) {
                    const t = d[e]
                      , i = Math.abs(t.height);
                    t.height = i * h + l
                }
            }
        }
        var Be = i(826247);
        class Ve {
            constructor(e, t, i, s) {
                this._bars = [],
                this._invalidated = !1,
                this._isMarkersEnabled = N.enabled("source_selection_markers"),
                this._selectionData = null,
                this._ohlcPlotIndexes = new Map,
                this._study = e,
                this._series = t,
                this._model = i,
                this._plotName = s,
                this._isMarkersEnabled = N.enabled("source_selection_markers"),
                this._colorProvider = (0,
                U.createStudyPlotColorProvider)(e.metaInfo(), e.properties(), s),
                this._selectionIndexer = new J.SelectionIndexes(i.timeScale());
                const r = this._study.metaInfo().plots;
                for (let e = 0; e < r.length; e++) {
                    const t = r[e];
                    "target"in t && (t.target === this._plotName && ((0,
                    b.isOhlcOpenPlot)(t) && this._ohlcPlotIndexes.set(1, e),
                    (0,
                    b.isOhlcHighPlot)(t) && this._ohlcPlotIndexes.set(2, e),
                    (0,
                    b.isOhlcLowPlot)(t) && this._ohlcPlotIndexes.set(3, e),
                    (0,
                    b.isOhlcClosePlot)(t) && this._ohlcPlotIndexes.set(4, e)))
                }
            }
            update() {
                this._invalidated = !0
            }
            items() {
                return this._bars
            }
            _updateImpl() {
                this._bars.length = 0;
                const e = this._study.priceScale();
                if (this._model.timeScale().isEmpty() || null === e || e.isEmpty())
                    return;
                const t = this._model.timeScale().visibleBarsStrictRange();
                if (null === t)
                    return;
                let i = this._series.nearestIndex(t.firstBar(), f.PlotRowSearchMode.NearestRight);
                const s = this._series.nearestIndex(t.lastBar(), f.PlotRowSearchMode.NearestLeft);
                if (void 0 === i || void 0 === s)
                    return;
                const r = this._study.getMinFirstBarIndexForPlot(this._plotName);
                if (r > s)
                    return;
                i = Math.max(r, i);
                const o = this._study.data()
                  , a = this._study.firstValue();
                if (null === a)
                    return;
                const l = o.rangeIterator(i, s)
                  , c = (0,
                n.ensureDefined)(this._study.properties().childs().ohlcPlots).childs()[this._plotName].childs()
                  , h = new Map
                  , d = (e,t)=>{
                    const i = e + "@" + t;
                    if (!h.has(i)) {
                        const s = (0,
                        F.generateColor)(e, t);
                        return h.set(i, s),
                        s
                    }
                    return h.get(i)
                }
                  , u = (0,
                ee.createEmptyStyle)();
                for (; l.hasNext(); ) {
                    const e = l.next();
                    let t = e.index;
                    const i = e.value;
                    t = Math.floor(t);
                    let s = !0;
                    const r = new Map;
                    for (let e = 1; e <= 4; ++e) {
                        const t = this._ohlcPlotIndexes.get(e);
                        if (void 0 === t) {
                            s = !1;
                            break
                        }
                        const n = i[t + 1];
                        if (null == n) {
                            s = !1;
                            break
                        }
                        r.set(e, n)
                    }
                    if (!s)
                        continue;
                    const o = (0,
                    n.ensureDefined)(r.get(1))
                      , a = (0,
                    n.ensureDefined)(r.get(4))
                      , h = (0,
                    n.ensureDefined)(r.get(2))
                      , p = (0,
                    n.ensureDefined)(r.get(3))
                      , _ = Math.max(o, h, p, a)
                      , m = Math.min(o, h, p, a);
                    let g = (0,
                    n.ensureDefined)(d(c.color.value(), 0));
                    const f = this._colorProvider.getPlotPointStyle(i, u);
                    void 0 !== f.colors[0] && (g = (0,
                    n.ensureDefined)(f.colors[0]));
                    const v = {
                        time: Math.round(t),
                        open: o,
                        high: _,
                        low: m,
                        close: a,
                        color: g,
                        wickColor: f.colors[4],
                        borderColor: f.colors[3],
                        hollow: null
                    };
                    this._bars.push(v)
                }
                if (e.barPricesToCoordinates(this._bars, a),
                this._model.timeScale().barIndexesToCoordinates(this._bars),
                this._model.selection().isSelected(this._study)) {
                    const t = this._selectionIndexer.indexes();
                    this._selectionData = {
                        points: [],
                        hittestResult: X.HitTarget.Regular,
                        bgColors: [],
                        visible: !0,
                        barSpacing: this._model.timeScale().barSpacing()
                    };
                    const i = (0,
                    n.ensureNotNull)(this._model.paneForSource(this._study)).height()
                      , s = (0,
                    n.ensureDefined)(this._ohlcPlotIndexes.get(4));
                    for (let r = 0; r < t.length; r++) {
                        const n = t[r]
                          , o = this._study.data().valueAt(n);
                        if (null === o)
                            continue;
                        const l = o[s + 1];
                        if (null == l)
                            continue;
                        const c = this._model.timeScale().indexToCoordinate(Math.floor(n))
                          , h = e.priceToCoordinate(l, a);
                        this._selectionData.points.push(new O.Point(c,h)),
                        this._selectionData.bgColors.push(this._model.backgroundColorAtYPercentFromTop(h / i))
                    }
                } else
                    this._selectionIndexer.clear()
            }
            _isOHLCPlotVisible() {
                return this._study.isPlotVisibleAt(this._plotName, 1)
            }
        }
        class Re extends Ve {
            renderer() {
                if (!this._isOHLCPlotVisible())
                    return null;
                this._invalidated && (this._updateImpl(),
                this._invalidated = !1);
                const e = {
                    bars: this._bars,
                    barSpacing: this._model.timeScale().barSpacing(),
                    dontDrawOpen: this._series.properties().childs().barStyle.childs().dontDrawOpen.value(),
                    thinBars: this._series.properties().childs().barStyle.childs().thinBars.value()
                }
                  , t = new W.CompositeRenderer;
                return t.append(new Be.PaneRendererBars(e)),
                this._model.selection().isSelected(this._study) && this._isMarkersEnabled && this._selectionData && t.append(new Y.SelectionRenderer(this._selectionData)),
                t
            }
        }
        var Ne = i(608929);
        class Oe extends Ve {
            renderer() {
                if (!this._isOHLCPlotVisible())
                    return null;
                this._invalidated && (this._updateImpl(),
                this._invalidated = !1);
                const e = (0,
                n.ensureDefined)(this._study.properties().childs().ohlcPlots).childs()[this._plotName].childs()
                  , t = this._model.timeScale().barSpacing()
                  , i = {
                    bars: this._bars,
                    barSpacing: t,
                    wickVisible: e.drawWick.value(),
                    bodyVisible: !0,
                    borderVisible: e.drawBorder.value(),
                    barWidth: (0,
                    Pe.optimalBarWidth)(t),
                    borderColor: e.borderColor.value(),
                    wickColor: e.wickColor.value()
                }
                  , s = new W.CompositeRenderer;
                return s.append(new Ne.PaneRendererCandles(i)),
                this._model.selection().isSelected(this._series) && this._isMarkersEnabled && this._selectionData && s.append(new Y.SelectionRenderer(this._selectionData)),
                s
            }
        }
        var Fe = i(622224)
          , We = i(400329)
          , ze = i(543905)
          , He = i(549696);
        class Ue extends ze.HorizontalLinePaneView {
            constructor(e, t) {
                super(),
                this._lineRendererData.linestyle = He.LINESTYLE_DOTTED,
                this._study = e,
                this._plotName = t
            }
            _updateImpl() {
                this._lineRendererData.visible = !1;
                const e = this._study.properties().childs().styles.childs()[this._plotName].childs();
                if (!e.trackPrice.value() || !this._study.isPlotVisibleAt(this._plotName, 1))
                    return;
                const t = this._study.lastValueData(this._plotName, !0);
                t.noData || (this._lineRendererData.visible = !0,
                this._lineRendererData.y = t.coordinate,
                this._lineRendererData.color = t.color,
                this._lineRendererData.linewidth = e.linewidth.value())
            }
        }
        var je = i(408919)
          , Ge = i(150505);
        function qe(e) {
            return 0 === e.type ? `${e.color}` : `${e.color1}:${e.color2}:${e.value1}:${e.value2}`
        }
        class $e extends Ge.ObjectValuesCache {
            _newObject() {
                return {
                    plot1Value: void 0,
                    plot2Value: void 0,
                    colorValue: void 0
                }
            }
            _clearObject(e) {
                e.plot1Value = void 0,
                e.plot2Value = void 0,
                e.colorValue = void 0
            }
        }
        class Ye extends Ge.ObjectValuesCache {
            _newObject() {
                return {
                    type: void 0,
                    colorIndexOrRgba: void 0,
                    colorIndexOrRgba1: void 0,
                    colorIndexOrRgba2: void 0,
                    value1: void 0,
                    value2: void 0
                }
            }
            _clearObject(e) {
                const t = e;
                t.type = void 0,
                t.colorIndexOrRgba = void 0,
                t.colorIndexOrRgba1 = void 0,
                t.colorIndexOrRgba2 = void 0,
                t.value1 = void 0,
                t.value2 = void 0
            }
        }
        class Ke {
            constructor(e, t, i=!1) {
                this._isHlineFill = !1,
                this._bandAKey = null,
                this._bandBKey = null,
                this._colorPlotIndex = null,
                this._colors = new Ge.CachedContainer,
                this._areaRenderer = new je.AreaBackgroundRenderer,
                this._invalidated = !0,
                this._plIndex1 = null,
                this._plIndex2 = null,
                this._level1 = 0,
                this._level2 = 0,
                this._studyValuesCache = new $e,
                this._colorValuesCache = new Ye,
                this._points1 = new Ge.CachedContainer,
                this._points2 = new Ge.CachedContainer,
                this._timePoints = new Ge.CachedContainer,
                this._colorAreas = new je.CachedMap,
                this._source = e,
                this._model = t,
                this._fillGaps = i
            }
            update() {
                this._invalidated = !0
            }
            renderer(e, t) {
                return this._invalidated && (this._updateImpl(),
                this._invalidated = !1),
                this._areaRenderer
            }
            _correctVisibleRange(e, t) {
                var i, s, r, n;
                const o = this._source.data().plottableRange()
                  , a = e.firstBar() + Math.min(0, t) - 1
                  , l = e.lastBar() - t + 1
                  , c = this._plotIndex1()
                  , h = this._plotIndex2()
                  , d = o.search(a, f.PlotRowSearchMode.NearestLeft, c)
                  , u = o.search(a, f.PlotRowSearchMode.NearestLeft, h)
                  , p = o.search(l, f.PlotRowSearchMode.NearestRight, c)
                  , _ = o.search(l, f.PlotRowSearchMode.NearestRight, h)
                  , m = Math.min(null !== (i = null == d ? void 0 : d.index) && void 0 !== i ? i : 1 / 0, e.firstBar() - 1)
                  , g = Math.min(null !== (s = null == u ? void 0 : u.index) && void 0 !== s ? s : 1 / 0, e.firstBar() - 1)
                  , v = Math.max(null !== (r = null == p ? void 0 : p.index) && void 0 !== r ? r : -1 / 0, e.lastBar() + 1)
                  , S = Math.max(null !== (n = null == _ ? void 0 : _.index) && void 0 !== n ? n : -1 / 0, e.lastBar() + 1);
                let y = 1 / 0;
                if (null !== this._colorPlotIndex && (null !== d || null !== u)) {
                    const e = o.search(Math.min(m, g) - 1, f.PlotRowSearchMode.NearestLeft);
                    null !== e && (y = e.index)
                }
                return [Math.min(m, g, y), Math.max(v, S)]
            }
            _plotNames() {
                return this._source.metaInfo().plots.map((e=>e.id))
            }
            _plotIndex1() {
                return null === this._plIndex1 && (this._plIndex1 = this._plotNames().indexOf(this._plotAId()) + 1),
                this._plIndex1
            }
            _plotIndex2() {
                return null === this._plIndex2 && (this._plIndex2 = this._plotNames().indexOf(this._plotBId()) + 1),
                this._plIndex2
            }
            _updateImpl() {
                var e, t;
                if (this._areaRenderer.setData(null),
                !this._visible())
                    return;
                const i = this._source.priceScale()
                  , s = this._model
                  , r = s.timeScale();
                if (!i || i.isEmpty() || r.isEmpty())
                    return;
                if (s.mainSeries().bars().isEmpty())
                    return;
                const o = this._source.firstValue();
                if (null === o)
                    return;
                if (this._isHlineFill) {
                    const e = this._source.properties().bands[(0,
                    n.ensureNotNull)(this._bandAKey)]
                      , t = this._source.properties().bands[(0,
                    n.ensureNotNull)(this._bandBKey)];
                    this._level1 = i.priceToCoordinate(e.value.value(), o),
                    this._level2 = i.priceToCoordinate(t.value.value(), o)
                }
                const a = r.visibleBarsStrictRange();
                if (null === a)
                    return;
                const l = new Map
                  , c = e=>{
                    let t = l.get(e);
                    return void 0 === t && (t = i.priceToCoordinate(e, o),
                    l.set(e, t)),
                    t
                }
                  , h = (0,
                Z.clamp)(this._transparency(), 0, 100)
                  , d = new Map
                  , u = e=>{
                    let t = d.get(e);
                    return void 0 === t && (t = (0,
                    F.generateColor)(e, h),
                    d.set(e, t)),
                    t
                }
                ;
                this._timePoints.invalidateCache(),
                this._points1.invalidateCache(),
                this._points2.invalidateCache(),
                this._colors.invalidateCache(),
                this._colorAreas.invalidateCache();
                const p = this._source.offset(this._plotAId())
                  , _ = this._source.offset(this._plotBId())
                  , m = Math.min(p, _)
                  , g = Math.max(p, _)
                  , [f,v] = this._correctVisibleRange(a, g)
                  , S = null !== this._colorPlotIndex ? this._colors : null
                  , y = this._plotIndex1()
                  , b = this._plotIndex2()
                  , w = this._source.data().plottableRange();
                if (w.isEmpty())
                    return;
                let C, P;
                const x = (0,
                n.ensureNotNull)(w.firstIndex())
                  , T = (0,
                n.ensureNotNull)(w.lastIndex())
                  , I = x - Math.max(0, -m)
                  , M = T + Math.max(0, g)
                  , L = Math.max(f, I)
                  , A = Math.min(v, M)
                  , k = this._studyValuesCache
                  , E = this._colorValuesCache;
                k.invalidateCache(),
                E.invalidateCache();
                const D = L - g
                  , B = w.rangeIterator(D, A - m);
                let V;
                for (k.setStartIndex(D),
                E.setStartIndex(D); B.hasNext(); ) {
                    const e = B.next()
                      , t = e.index
                      , i = e.value
                      , s = i[y]
                      , r = i[b]
                      , o = t + p
                      , a = t + _;
                    if (o === a && k.isValidIndex(o)) {
                        const e = k.at(o);
                        e.plot1Value = s,
                        e.plot2Value = r
                    } else {
                        if (k.isValidIndex(o)) {
                            k.at(o).plot1Value = s
                        }
                        if (k.isValidIndex(a)) {
                            k.at(a).plot2Value = r
                        }
                    }
                    if (null !== S && void 0 !== V) {
                        const e = V + m;
                        if (k.isValidIndex(e)) {
                            const t = k.at(e)
                              , s = (0,
                            n.ensureNotNull)(this._colorPlotIndex);
                            if (0 === s.type) {
                                const r = E.at(e);
                                t.colorValue = r,
                                r.type = 0,
                                r.colorIndexOrRgba = i[s.colorIndexOrRgba + 1]
                            } else {
                                const r = E.at(e);
                                t.colorValue = r,
                                r.colorIndexOrRgba1 = void 0 === s.colorIndexOrRgba1 ? void 0 : i[s.colorIndexOrRgba1 + 1],
                                r.colorIndexOrRgba2 = void 0 === s.colorIndexOrRgba2 ? void 0 : i[s.colorIndexOrRgba2 + 1],
                                r.value1 = void 0 === s.valueIndex1 ? void 0 : i[s.valueIndex1 + 1],
                                r.value2 = void 0 === s.valueIndex2 ? void 0 : i[s.valueIndex2 + 1]
                            }
                        }
                    }
                    V = t
                }
                const R = this._timePoints
                  , N = this._points1
                  , O = this._points2;
                let W = null;
                const z = D + k.length();
                for (let i = D; i < z; i++) {
                    if (!this._fillGaps && (null === C || null === P)) {
                        const e = i - 1;
                        R.push(e),
                        N.push(NaN),
                        O.push(NaN),
                        null == S || S.push(null)
                    }
                    const s = k.at(i);
                    if (null !== this._colorPlotIndex) {
                        const e = s.colorValue;
                        void 0 === e || 0 === e.type && null == e.colorIndexOrRgba || 1 === e.type && (void 0 !== this._colorPlotIndex.valueIndex1 && null == e.value1 || void 0 !== this._colorPlotIndex.valueIndex2 && null == e.value2) ? W = null : (W = this._getColorByPlotValue(e),
                        null !== W && (1 === W.type ? (W.value1 = c(W.value1),
                        W.value2 = c(W.value2),
                        W.color1 = W.color1 && u(W.color1),
                        W.color2 = W.color2 && u(W.color2)) : W.color = u(W.color)))
                    }
                    if (this._isHlineFill) {
                        R.push(i),
                        null !== S && S.push(W);
                        continue
                    }
                    const r = null !== (e = s.plot1Value) && void 0 !== e ? e : null
                      , n = null !== (t = s.plot2Value) && void 0 !== t ? t : null;
                    (null !== r || null !== n || Number.isFinite(C) || Number.isFinite(P)) && (C = r,
                    P = n,
                    N.push(r),
                    O.push(n),
                    R.push(i),
                    null !== S && S.push(W))
                }
                i.pricesArrayToCoordinates(N.data(), o, N.length()),
                i.pricesArrayToCoordinates(O.data(), o, O.length()),
                r.indexesToCoordinates(R.data(), R.length());
                const H = {
                    barSpacing: this._model.timeScale().barSpacing(),
                    colorAreas: this._getFilledAreas(R, N, O, S, c, u)
                };
                this._areaRenderer.setData(H)
            }
            _getFilledAreas(e, t, i, s, r, n) {
                var o, a;
                const l = this._isHlineFill;
                if (!l && (0 === t.length() || 0 === i.length()))
                    return new je.CachedMap;
                const c = this._colorAreas;
                let h = null
                  , d = null;
                const u = {
                    type: 0,
                    color: ""
                }
                  , p = this._commonColor();
                1 === p.type ? (p.value1 = r(p.value1),
                p.value2 = r(p.value2),
                p.color1 = p.color1 && n(p.color1),
                p.color2 = p.color2 && n(p.color2)) : p.color = n(p.color);
                const _ = e.length();
                for (let r = 0; r < _; r++) {
                    const n = l ? this._level1 : t.at(r)
                      , f = l ? this._level2 : i.at(r)
                      , v = e.at(r)
                      , S = (0,
                    Pe.coordinateIsValid)(n)
                      , y = (0,
                    Pe.coordinateIsValid)(f);
                    if (this._fillGaps ? S || y : S && y) {
                        const e = s ? s.at(r) || u : p;
                        if (g = e,
                        !(null === (m = d) || null === g ? m === g : 0 === m.type && 0 === g.type ? m.color === g.color : 1 === m.type && 1 === g.type && m.color1 === g.color1 && m.color2 === g.color2 && m.value1 === g.value1 && m.value2 === g.value2) || null === h) {
                            if (null !== h && (S && h.addPoints1Point(v, n),
                            y && h.addPoints2Point(v, f)),
                            r === _ - 1)
                                continue;
                            d = e;
                            const t = qe(e)
                              , i = null !== (o = c.get(t)) && void 0 !== o ? o : new je.AreaBackgroundItemsGroup(e);
                            h = null !== (a = i.newItem()) && void 0 !== a ? a : new je.AreaBackgroundItem,
                            i.push(h),
                            c.set(t, i)
                        }
                        S && h.addPoints1Point(v, n),
                        y && h.addPoints2Point(v, f)
                    } else
                        this._fillGaps || (d = null,
                        h = null)
                }
                var m, g;
                return c.delete(qe(u)),
                c
            }
        }
        class Ze extends Ke {
            constructor(e, t) {
                super(e, t)
            }
            _plotAId() {
                return (0,
                n.ensureDefined)(this._source.metaInfo().area)[0].name
            }
            _plotBId() {
                return (0,
                n.ensureDefined)(this._source.metaInfo().area)[1].name
            }
            _commonColor() {
                return {
                    type: 0,
                    color: this._source.properties().areaBackground.backgroundColor.value()
                }
            }
            _transparency() {
                const e = this._source.properties().areaBackground.transparency.value();
                return (0,
                Z.clamp)(e, 0, 100)
            }
            _visible() {
                return this._source.properties().areaBackground.fillBackground.value()
            }
            _getColorByPlotValue(e) {
                return this._commonColor()
            }
        }
        const Xe = {
            type: 0,
            color: "transparent"
        };
        class Je extends Ke {
            constructor(e, t, i, s) {
                var r, o, a;
                super(e, t, !!i.fillgaps),
                this._palettesInfo = {},
                this._gradientPropsStateCache = null;
                const l = this._source.metaInfo();
                this._isRGB = Boolean(l.isRGB),
                this._isHlineFill = "hline_hline" === i.type,
                (0,
                n.assert)(this._isHlineFill || "plot_plot" === i.type, "Wrong filledArea type: " + i.type),
                this._isHlineFill && this._initBandIndexes(i.objAId, i.objBId),
                this._fillMetaInfo = i,
                this._fillStyleProps = s,
                this._gradientFillType = s.hasChild("fillType") && "gradient" === (null === (r = s.childs().fillType) || void 0 === r ? void 0 : r.value()),
                this._gradientStaticState = {
                    color1: i.topColor,
                    color2: i.bottomColor,
                    value1: i.topValue,
                    value2: i.bottomValue
                },
                this._hasAllGradientRequiredProps = this._gradientFillType && (void 0 !== this._gradientStaticState.color1 || s.hasChild("topColor") || void 0 !== this._gradientStaticState.color2 || s.hasChild("bottomColor")) && (void 0 !== this._gradientStaticState.value1 || s.hasChild("topValue")) && (void 0 !== this._gradientStaticState.value2 || s.hasChild("bottomValue"));
                const c = ()=>{
                    var e;
                    return this._colorPlotIndex = null !== (e = this._colorPlotIndex) && void 0 !== e ? e : {
                        type: 1
                    }
                }
                ;
                for (let t = 0; t < l.plots.length; ++t) {
                    const s = l.plots[t];
                    if (((0,
                    b.isColorerPlot)(s) || (0,
                    b.isDataPlot)(s)) && s.target === i.id) {
                        if ((0,
                        b.isColorerPlot)(s)) {
                            let i;
                            void 0 !== s.targetField ? "topColor" === s.targetField ? (c().colorIndexOrRgba1 = t,
                            i = "color1") : "bottomColor" === s.targetField && (c().colorIndexOrRgba2 = t,
                            i = "color2") : this._colorPlotIndex = {
                                type: 0,
                                colorIndexOrRgba: t
                            },
                            (0,
                            b.isPaletteColorerPlot)(s) && (this._palettesInfo[null != i ? i : "color"] = {
                                map: (0,
                                n.ensureDefined)(null === (o = (0,
                                n.ensureDefined)(l.palettes)[s.palette]) || void 0 === o ? void 0 : o.valToIndex),
                                values: e.properties().palettes[s.palette].colors
                            })
                        } else
                            (0,
                            b.isDataPlot)(s) && ("topValue" === s.targetField ? c().valueIndex1 = t : "bottomValue" === s.targetField && (c().valueIndex2 = t));
                        if (0 === (null === (a = this._colorPlotIndex) || void 0 === a ? void 0 : a.type))
                            break
                    }
                }
            }
            update() {
                super.update(),
                this._gradientPropsStateCache = null
            }
            _correctVisibleRange(e, t) {
                const i = super._correctVisibleRange(e, t)
                  , s = this._source.getMinFirstBarIndexForPlot(this._fillMetaInfo.id);
                return [Math.max(s, i[0]), i[1]]
            }
            _getColorByPlotValue(e) {
                var t, i, s;
                if (0 === e.type) {
                    let i;
                    if (this._isRGB) {
                        if (null == e.colorIndexOrRgba)
                            return null;
                        i = (0,
                        F.rgbaFromInteger)(e.colorIndexOrRgba)
                    } else {
                        const s = (0,
                        n.ensureDefined)(this._palettesInfo.color)
                          , r = (0,
                        n.ensureDefined)(s.map[(0,
                        n.ensure)(e.colorIndexOrRgba)]);
                        i = null === (t = s.values[r]) || void 0 === t ? void 0 : t.childs().color.value()
                    }
                    return {
                        type: 0,
                        color: i
                    }
                }
                const r = this._gradientColorPropsState();
                let o, a;
                if (this._isRGB)
                    null != e.colorIndexOrRgba1 && (o = (0,
                    F.rgbaFromInteger)(e.colorIndexOrRgba1)),
                    null != e.colorIndexOrRgba2 && (a = (0,
                    F.rgbaFromInteger)(e.colorIndexOrRgba2));
                else {
                    if (null != e.colorIndexOrRgba1) {
                        const t = (0,
                        n.ensureDefined)(this._palettesInfo.color1);
                        o = t.values[(0,
                        n.ensureDefined)(t.map[e.colorIndexOrRgba1])].childs().color.value()
                    }
                    if (null != e.colorIndexOrRgba2) {
                        const t = (0,
                        n.ensureDefined)(this._palettesInfo.color2);
                        a = t.values[(0,
                        n.ensureDefined)(t.map[e.colorIndexOrRgba2])].childs().color.value()
                    }
                }
                const l = null !== (i = e.value1) && void 0 !== i ? i : r.value1
                  , c = null !== (s = e.value2) && void 0 !== s ? s : r.value2;
                return o = null != o ? o : r.color1,
                a = null != a ? a : r.color2,
                void 0 === l || void 0 === c || void 0 === o && void 0 === a ? null : {
                    type: 1,
                    color1: o,
                    color2: a,
                    value1: l,
                    value2: c
                }
            }
            _plotAId() {
                return this._fillMetaInfo.objAId
            }
            _plotBId() {
                return this._fillMetaInfo.objBId
            }
            _commonColor() {
                const e = this._fillStyleProps.childs();
                if (this._gradientFillType) {
                    if (!this._hasAllGradientRequiredProps)
                        return Xe;
                    const e = this._gradientColorPropsState();
                    return {
                        type: 1,
                        color1: e.color1,
                        color2: e.color2,
                        value1: e.value1,
                        value2: e.value2
                    }
                }
                return {
                    type: 0,
                    color: e.color.value()
                }
            }
            _transparency() {
                return this._fillStyleProps.childs().transparency.value()
            }
            _visible() {
                return this._fillStyleProps.childs().visible.value()
            }
            _initBandIndexes(e, t) {
                this._bandAKey = null,
                this._bandBKey = null;
                const i = this._source.metaInfo().bands;
                if (void 0 !== i)
                    for (let s = 0; s < i.length; ++s) {
                        const r = i[s];
                        null !== this._bandAKey || r.id !== e ? null === this._bandBKey && r.id === t && (this._bandBKey = s) : this._bandAKey = s
                    }
            }
            _gradientColorPropsState() {
                var e, t, i, s;
                if (null === this._gradientPropsStateCache) {
                    const r = this._fillStyleProps.state();
                    this._gradientPropsStateCache = {
                        color1: null !== (e = this._gradientStaticState.color1) && void 0 !== e ? e : r.topColor,
                        color2: null !== (t = this._gradientStaticState.color2) && void 0 !== t ? t : r.bottomColor,
                        value1: null !== (i = this._gradientStaticState.value1) && void 0 !== i ? i : r.topValue,
                        value2: null !== (s = this._gradientStaticState.value2) && void 0 !== s ? s : r.bottomValue
                    }
                }
                return this._gradientPropsStateCache
            }
        }
        var Qe = i(188372)
          , et = i(591014);
        class tt {
            constructor(e, t) {
                this._invalidated = !0,
                this._lineRenderer = new et.HorizontalLineRenderer,
                this._source = t,
                this._points = [new O.Point(-1,-1)],
                this._invalidated = !0,
                this._properties = e
            }
            update() {
                this._invalidated = !0
            }
            renderer() {
                this._invalidated && (this._updateImpl(),
                this._invalidated = !1);
                const e = {
                    y: this._points[0].y,
                    color: this._properties.childs().color.value(),
                    linewidth: this._properties.childs().linewidth.value(),
                    linestyle: this._properties.childs().linestyle.value()
                };
                return this._lineRenderer.setData(e),
                this._lineRenderer
            }
            _updateImpl() {
                const e = this._source.priceScale();
                if (!e || e.isEmpty())
                    return void (this._points[0] = new O.Point(-1,-1));
                const t = this._properties.childs().value.value()
                  , i = this._source.firstValue()
                  , s = (0,
                k.isNumber)(t) && null !== i ? e.priceToCoordinate(t, i) : NaN;
                this._points[0] = new O.Point(-1,s)
            }
        }
        var it = i(104947);
        class st extends it.MediaCoordinatesPaneRenderer {
            constructor() {
                super(),
                this._data = null,
                this._data = null
            }
            setData(e=null) {
                this._data = e
            }
            hitTest() {
                return null
            }
            _drawImpl(e) {
                var t, i;
                if (null === this._data || 0 === this._data.points.length)
                    return;
                const s = e.context
                  , r = e.mediaSize.width;
                if (this._data.gradient) {
                    const e = s.createLinearGradient(0, this._data.coordinate1, 0, this._data.coordinate2);
                    e.addColorStop(0, null !== (t = this._data.backColor1) && void 0 !== t ? t : "transparent"),
                    e.addColorStop(1, null !== (i = this._data.backColor2) && void 0 !== i ? i : "transparent"),
                    s.fillStyle = e
                } else
                    s.fillStyle = this._data.backcolor;
                const n = Math.min(this._data.points[0], this._data.points[1])
                  , o = Math.max(this._data.points[0], this._data.points[1]);
                s.fillRect(0, n, r, o - n)
            }
        }
        class rt {
            constructor(e) {
                this._bandBgRenderer = new st,
                this._invalidated = !0,
                this._source = e
            }
            update() {
                this._invalidated = !0
            }
            renderer() {
                return this._invalidated && (this._updateImpl(),
                this._invalidated = !1),
                this._bandBgRenderer
            }
            _updateImpl() {
                this._bandBgRenderer.setData(null);
                const e = this._source.properties().childs()
                  , t = e.bands;
                if (t.childCount() < 2)
                    return;
                const i = e.bandsBackground;
                if (!(null == i ? void 0 : i.childs().fillBackground.value()))
                    return;
                const s = t[0].childs()
                  , r = t[1].childs()
                  , o = this._source.priceScale()
                  , a = this._source.firstValue();
                if (!o || o.isEmpty() || null === a)
                    return;
                const l = [o.priceToCoordinate(s.value.value(), a), o.priceToCoordinate(r.value.value(), a)]
                  , c = (0,
                n.ensureDefined)(e.bandsBackground).childs()
                  , h = (0,
                Z.clamp)(c.transparency.value(), 0, 100);
                this._bandBgRenderer.setData({
                    gradient: !1,
                    points: l,
                    backcolor: (0,
                    F.generateColor)(c.backgroundColor.value(), h)
                })
            }
        }
        class nt {
            constructor(e, t, i) {
                var s;
                this._bandBgRenderer = new st,
                this._bandAKey = null,
                this._bandBKey = null,
                this._invalidated = !0,
                this._source = e,
                (0,
                n.assert)("hline_hline" === t.type, "Wrong filledArea type: " + t.type),
                this._initBandIndexes(t.objAId, t.objBId),
                this._fillStyleProps = i,
                this._bandBgRenderer = new st,
                this._gradientFillType = i.hasChild("fillType") && "gradient" === (null === (s = i.childs().fillType) || void 0 === s ? void 0 : s.value()),
                this._gradientStaticState = {
                    color1: t.topColor,
                    color2: t.bottomColor,
                    value1: t.topValue,
                    value2: t.bottomValue
                }
            }
            update() {
                this._invalidated = !0
            }
            renderer() {
                return this._invalidated && (this._updateImpl(),
                this._invalidated = !1),
                this._bandBgRenderer
            }
            _updateImpl() {
                var e, t, i, s, r, o, a, l;
                if (this._bandBgRenderer.setData(null),
                !this._fillStyleProps.childs().visible.value())
                    return;
                if (null === this._bandAKey || null === this._bandBKey)
                    return;
                const c = (0,
                n.ensureDefined)(this._source.properties().childs().bands)
                  , h = c.childs()[this._bandAKey].childs()
                  , d = c.childs()[this._bandBKey].childs()
                  , u = this._source.priceScale()
                  , p = this._source.firstValue();
                if (!u || u.isEmpty() || null === p)
                    return;
                const _ = [u.priceToCoordinate(h.value.value(), p), u.priceToCoordinate(d.value.value(), p)]
                  , m = (0,
                Z.clamp)(this._fillStyleProps.childs().transparency.value(), 0, 100);
                let g;
                const f = this._fillStyleProps.childs();
                if (this._gradientFillType) {
                    const n = this._gradientStaticState
                      , c = f
                      , h = null !== (e = n.value1) && void 0 !== e ? e : null === (t = c.topValue) || void 0 === t ? void 0 : t.value()
                      , d = null !== (i = n.value2) && void 0 !== i ? i : null === (s = c.bottomValue) || void 0 === s ? void 0 : s.value();
                    if (void 0 === h || void 0 === d)
                        return;
                    const v = null !== (r = n.color1) && void 0 !== r ? r : null === (o = c.topColor) || void 0 === o ? void 0 : o.value()
                      , S = null !== (a = n.color2) && void 0 !== a ? a : null === (l = c.bottomColor) || void 0 === l ? void 0 : l.value();
                    if (void 0 === v && void 0 === S)
                        return;
                    g = {
                        gradient: !0,
                        points: _,
                        backColor1: v && (0,
                        F.generateColor)(v, m),
                        backColor2: S && (0,
                        F.generateColor)(S, m),
                        coordinate1: u.priceToCoordinate(h, p),
                        coordinate2: u.priceToCoordinate(d, p)
                    }
                } else
                    g = {
                        gradient: !1,
                        points: _,
                        backcolor: (0,
                        F.generateColor)(f.color.value(), m)
                    };
                this._bandBgRenderer.setData(g)
            }
            _initBandIndexes(e, t) {
                this._bandAKey = null,
                this._bandBKey = null;
                (0,
                n.ensureDefined)(this._source.metaInfo().bands).forEach(((i,s)=>{
                    null === this._bandAKey && i.id === e && (this._bandAKey = s),
                    null === this._bandBKey && i.id === t && (this._bandBKey = s)
                }
                ))
            }
        }
        var ot = i(590800)
          , at = i(76273)
          , lt = i(948251)
          , ct = i(364124)
          , ht = i(588517)
          , dt = i.n(ht)
          , ut = i(681434)
          , pt = i(34648)
          , _t = i(630432);
        class mt extends _t.PriceAxisView {
            constructor(e, t) {
                super(),
                this._model = e.model(),
                this._source = e,
                this._data = t
            }
            _updateRendererData(e, t, i) {
                e.visible = !1,
                t.visible = !1;
                const s = this._source.model()
                  , r = this._source.priceScale();
                if (null === r)
                    return;
                if (!s.isPriceScaleVisible(r))
                    return;
                const o = this._source.lastValueData(this._data.plotIndex, !1);
                if (o.noData)
                    return;
                const a = s.timeScale().visibleBarsStrictRange()
                  , l = s.mainSeries().bars().lastIndex();
                if (null !== a && null !== l) {
                    if (l <= a.lastBar()) {
                        i.background = (0,
                        F.resetTransparency)(o.color);
                        let s = o.color;
                        "transparent" === s && (s = this._model.properties().childs().scalesProperties.childs().backgroundColor.value()),
                        i.textColor = this.generateTextColor(s),
                        i.borderColor = void 0,
                        e.borderVisible = !1,
                        t.borderVisible = !1
                    } else {
                        const r = s.backgroundColorAtYPercentFromTop(o.coordinate / (0,
                        n.ensureNotNull)(s.paneForSource(this._source)).height());
                        i.background = r,
                        i.textColor = (0,
                        F.resetTransparency)(o.color),
                        i.borderColor = (0,
                        F.resetTransparency)(i.textColor),
                        e.borderVisible = !0,
                        t.borderVisible = !0
                    }
                    i.coordinate = o.coordinate,
                    i.floatCoordinate = o.floatCoordinate,
                    this._showAxisLabel() && (e.text = o.text,
                    e.visible = !0),
                    this._updatePaneRendererData(t)
                }
            }
            _showPaneLabel() {
                return !!this._model.properties().childs().scalesProperties.childs().showStudyPlotLabels.value() && this._source.properties().childs().showLabelsOnPriceScale.value() && this._source.isPlotVisibleAt(this._data.plotIndex, 4)
            }
            _showAxisLabel() {
                return !!this._model.properties().childs().scalesProperties.childs().showStudyLastValue.value() && this._source.properties().childs().showLabelsOnPriceScale.value() && this._source.isPlotVisibleAt(this._data.plotIndex, 4)
            }
            _updatePaneRendererData(e) {
                e.text = "",
                this._showPaneLabel() && (e.text = this._source.priceLabelText(this._data.plotIndex),
                e.visible = !0)
            }
        }
        var gt = i(377884)
          , ft = i(239945)
          , vt = i(559410)
          , St = i(902232)
          , yt = i(737261)
          , bt = i(602164)
          , wt = i(776631)
          , Ct = i(708745)
          , Pt = i(79232)
          , xt = i(815628)
          , Tt = i(357407)
          , It = i(637927)
          , Mt = i(529529);
        const Lt = (0,
        a.getLogger)("Chart.Study")
          , At = o.t(null, void 0, i(814177));
        const kt = {
            symbolsForDisplay: !1,
            symbolsForChartApi: !0,
            skipHiddenInputs: !1,
            skipFakeInputs: !1,
            skipBooleanInputs: N.enabled("dont_show_boolean_study_arguments"),
            asObject: !0,
            skippedGroups: [],
            skippedInputs: [],
            noExchanges: !1,
            noResolution: !1,
            keepOptionalSymbolsEmpty: !1,
            skipColorInputs: !1,
            skipTimeInputs: !1,
            skipOptionalEmptySymbolInputs: !1,
            skipTextareaInputs: !0,
            priceInputsForDisplay: !1
        }
          , Et = N.enabled("study_symbol_ticker_description")
          , Dt = N.enabled("hide_main_series_symbol_from_indicator_legend");
        function Bt(e, t) {
            const i = e.plots[t];
            if (!i || !(0,
            b.isOhlcPlot)(i))
                return !1;
            const s = i.target
              , r = e.defaults.styles && e.defaults.styles[s]
              , n = e.defaults.ohlcPlots && e.defaults.ohlcPlots[s]
              , o = e.ohlcPlots && e.ohlcPlots[s];
            return r && (0,
            b.isOhlcPlotStyleBars)(r) || n && (0,
            b.isOhlcPlotStyleBars)(n) || !!o && (0,
            b.isOhlcPlotStyleBars)(o)
        }
        function Vt(e, t) {
            const i = e.plots[t];
            if (!i || !(0,
            b.isOhlcPlot)(i))
                return !1;
            const s = i.target
              , r = e.defaults.styles && e.defaults.styles[s]
              , n = e.defaults.ohlcPlots && e.defaults.ohlcPlots[s]
              , o = e.ohlcPlots && e.ohlcPlots[s];
            return r && (0,
            b.isOhlcPlotStyleCandles)(r) || n && (0,
            b.isOhlcPlotStyleCandles)(n) || !!o && (0,
            b.isOhlcPlotStyleCandles)(o)
        }
        function Rt(e, t) {
            (0,
            n.assert)(void 0 !== e, "zOrder must be defined"),
            (0,
            n.assert)(!t.has(e), "zOrder must be unique")
        }
        function Nt(e, t) {
            return e.plots.some((e=>((0,
            b.isColorerPlot)(e) || (0,
            b.isDataPlot)(e)) && e.target === t))
        }
        function Ot(e, t) {
            var i;
            if (t.plots)
                for (let s = 0; s < t.plots.length; s++) {
                    const r = t.plots[s]
                      , o = r.id;
                    if ((0,
                    b.isColorerPlot)(r))
                        continue;
                    const a = {
                        display: 15,
                        color: "#0496FF",
                        linestyle: He.LINESTYLE_SOLID,
                        linewidth: 2,
                        plottype: b.LineStudyPlotStyle.Line,
                        transparency: 50,
                        trackPrice: !1
                    };
                    (0,
                    b.isBarColorerPlot)(r) && (a.transparency = 0),
                    a.plottype = r.type,
                    a.title = o,
                    e.styles && o in e.styles && (0,
                    k.merge)(a, null !== (i = e.styles[o]) && void 0 !== i ? i : {}),
                    (0,
                    n.ensureDefined)(e.styles)[o] = a
                }
        }
        function Ft(e, t, i, s) {
            var r, o;
            if (m.StudyMetaInfo.versionOf(e) < 1)
                throw new Error("This function cannot work with metainfo of the old format version. Required format version >= 1");
            let a = (0,
            k.clone)((0,
            St.defaults)("study"));
            Ot(a, e);
            const l = m.StudyMetaInfo.getStudyPropertyRootName(e);
            let c = (0,
            k.clone)((0,
            St.defaults)(l, s));
            c.intervalsVisibilities = (0,
            k.clone)(yt.intervalsVisibilitiesDefaults),
            "Overlay" !== e.shortId && "Compare" !== e.shortId || (c.currencyId = null,
            c.unitId = null),
            e.isTVScript && e.TVScriptSourceCode !== c.TVScriptSourceCode && (c = (0,
            k.clone)((0,
            St.factoryDefaults)(l))),
            (0,
            k.merge)(a, c),
            t && ((0,
            n.assert)(!(t instanceof A()), "propsState should not be an instance of Property"),
            (0,
            k.merge)(a, t));
            const h = (0,
            k.clone)(e.defaults)
              , d = {};
            Ct.StudyVersioning.mergeInputsObjPart(d, null !== (r = h.inputs) && void 0 !== r ? r : {}),
            Ct.StudyVersioning.mergeInputsObjPart(d, a.inputs),
            a.inputs = d,
            delete h.inputs;
            const u = {};
            if ((0,
            k.merge)(u, h),
            (0,
            k.merge)(u, (0,
            St.factoryDefaults)(l)),
            (0,
            k.merge)(u, a),
            a = u,
            null !== i) {
                const t = i.model().studiesColorRotatorFactory().getColorRotator(e);
                null !== t && ("Overlay@tv-basicstudies" === e.id ? a.lineStyle.color = t.getColor(a.lineStyle.color) : (0,
                k.merge)(a, function(e, t) {
                    for (const i of Object.keys(e.styles)) {
                        const s = e.styles[i];
                        if (s && "color"in s) {
                            const e = s.color;
                            s.color = t.getColor(e)
                        }
                    }
                    return e
                }(a, t)))
            }
            return t && (0,
            k.merge)(a.styles, null !== (o = t.styles) && void 0 !== o ? o : {}),
            a
        }
        function prepareStudyProperties(e, t, i, s, r) {
            return function(e, t, i, s, r, n) {
                const o = Ft(e, t, i, s);
                return m.StudyMetaInfo.getSourceInputIds(e).forEach(((e,t)=>{
                    const i = o.inputs[e];
                    t < n.length ? o.inputs[e] = `${n[t].id()}$0` : (0,
                    k.isString)(i) && i.includes("$") && (o.inputs[e] = "close")
                }
                )),
                Ht(e, r, o)
            }(e, t, i, s, m.StudyMetaInfo.getStudyPropertyRootName(e), r)
        }
        const zt = ["id", "description", "description_localized", "shortDescription", "_metainfoVersion", "is_price_study", "is_hidden_study", "priceScale", "fullId", "shortId", "scriptIdPart", "version", "packageId", "productId", "isTVScriptStub", "defaults", "symbolSource", "historyCalculationMayChange", "format", "linkedToSeries", "isTVLibrary", "docs", "exports", "exportTypes", "extra", "usesPrivateLib", "financialPeriod", "groupingKey", "pine", "isRGB", "isTVScript", "TVScriptMetaInfoExprs", "usePlotsZOrder", "isTVScriptStrategy", "TVScriptSourceCode", "lookaheadFutureData", "hasAlertFunction", "defaultStrategyAlertMessage", "tags", "canBeChild", "canNotBeChild", "_serverMetaInfoVersion", "warnings"];
        function Ht(e, t, i) {
            for (const e of zt)
                delete i[e];
            const s = new bt.DefaultProperty(t,i,!0);
            s.removeProperty("intervalsVisibilities"),
            s.addChild("intervalsVisibilities", new wt.IntervalsVisibilitiesProperty(i && i.intervalsVisibilities)),
            s.addExclusion("visible"),
            s.addExclusion("precision"),
            s.addExclusion("minTick"),
            s.addExclusion("intervalsVisibilities");
            for (let t = 0; t < e.inputs.length; ++t) {
                const i = e.inputs[t];
                i.isHidden && (s.addExclusion("inputs." + t.toString()),
                s.addExclusion("inputs." + i.id))
            }
            return "PivotPointsStandard@tv-basicstudies" !== e.id && "PivotPointsHighLow@tv-basicstudies" !== e.id || !s.hasChild("font") || s.removeProperty("font"),
            s
        }
        function Ut(e, t, i, s, r, n) {
            const o = function(e, t, i, s, r) {
                var n;
                e.version && i.version && e.version !== i.version && Lt.logWarn("Serialized metaInfo version " + e.version + " is not equal to the saved state version " + i.version);
                let o = (0,
                k.clone)((0,
                St.defaults)("study"));
                o.intervalsVisibilities = (0,
                k.clone)(yt.intervalsVisibilitiesDefaults),
                (0,
                k.merge)(o, (0,
                St.factoryDefaults)(m.StudyMetaInfo.getStudyPropertyRootName(e))),
                Ot(o, e),
                (0,
                k.merge)(o, i),
                o = s.updateStudyState(o, e, t),
                void 0 !== r && t && (o = r(i, o, e, t));
                const a = t || e
                  , l = (0,
                k.clone)(a.defaults);
                if (a && m.StudyMetaInfo.versionOf(a) >= 1) {
                    const e = {};
                    Ct.StudyVersioning.mergeInputsObjPart(e, null !== (n = l.inputs) && void 0 !== n ? n : {}),
                    Ct.StudyVersioning.mergeInputsObjPart(e, o.inputs),
                    o.inputs = e,
                    l && delete l.inputs;
                    const t = {};
                    (0,
                    k.merge)(t, l),
                    (0,
                    k.merge)(t, (0,
                    St.factoryDefaults)(m.StudyMetaInfo.getStudyPropertyRootName(a))),
                    (0,
                    k.merge)(t, o),
                    o = t
                }
                return o
            }(e, t, i, s, n);
            return Ht(t || e, r, o)
        }
        function prepareStudyPropertiesForLoadChart(e, t, i, s, r) {
            return Ut(e, t, i, s, m.StudyMetaInfo.getStudyPropertyRootName(e), r)
        }
        function Gt(e, t, i) {
            let s = 0
              , r = 0;
            return e.inputs.filter((e=>"source" === e.type)).forEach((e=>{
                (0,
                R.getInputValue)(i[e.id]).includes("$") && s++,
                (0,
                R.getInputValue)(t[e.id]).includes("$") && r++
            }
            )),
            Math.sign(r) - Math.sign(s)
        }
        class StudyBase extends u.PriceDataSource {
            constructor(e, t, i, s) {
                super(e);
                var r, o, a;
                this._onStart = new (h()),
                this._onHibernationStateChange = new (h()),
                this._symbolsResolved = new (h()),
                this._statusChanged = new (h()),
                this._restarting = !1,
                this._paneViews = [],
                this._legendView = null,
                this._priceAxisViews = [],
                this._inputsAnchorsPaneView = null,
                this._inputsLinesPaneView = null,
                this._inputsTimeAxisPaneViews = [],
                this._inputsPriceAxisPaneViews = [],
                this._resolvedSymbols = {},
                this._resolvedSymbolsByInput = {},
                this._sources = [],
                this._status = {
                    type: ot.StudyStatusType.Undefined
                },
                this._wasCompletedBefore = !1,
                this._studyId = null,
                this._isSubscribedToSessionId = !1,
                this._titleStrCache = {},
                this._titleInPartsCache = {},
                this._children = [],
                this._numericFormatter = new E.NumericFormatter,
                this._priceAxisViewsBase = [],
                this._priceLinesAxisViews = [],
                this._graphicsPriceAxisViews = [],
                this._labelPaneViews = [],
                this._ownFirstValue = null,
                this._plotOffsets = {},
                this._formatter = null,
                this._ongoingDataUpdate = Promise.resolve(),
                this._studyModified = !1,
                this._isDestroyed = !1,
                this._graphics = new g.LiveStudyGraphics,
                this._dataUpdated = new (h()),
                this._tagsChanged = new (h()),
                this._studyName = "",
                this._turnaround = "st0",
                this._currencySourceSymbolInputProperty = null,
                this._pendingResolveSymbols = new Map,
                this._onIsActualIntervalChange = new (h()),
                this._childStudyByRebind = new (h()),
                this._lastNonEmptyPlotRowCache = {},
                this._startMovingPoint = null,
                this._processHibernateBound = this.processHibernate.bind(this, 1),
                this._maxOffset = new (dt())(0),
                this._currencySourceSymbolInfo = null,
                this._turnaroundCounter = 0,
                this._deferredPinePatchProps = !1,
                this._chartApi = e.chartApi(),
                this._properties = t,
                this._metaInfo = s,
                this._series = this._model.mainSeries(),
                this._series.onIntervalChanged().subscribe(this, this._calcIsActualInterval),
                this._showStudyArgumentsProperty = e.properties().childs().paneProperties.childs().legendProperties.childs().showStudyArguments,
                e.collapsed().subscribe(this._processHibernateBound),
                this._sources = i,
                m.StudyMetaInfo.setChildStudyMetaInfoPropertiesSourceId(s, null === (r = this._sources[0]) || void 0 === r ? void 0 : r.id(), t),
                i.forEach((e=>{
                    e.setChild(this)
                }
                )),
                [this._series, ...i].forEach((e=>{
                    e.currencyChanged().subscribe(this, this._onSourceCurrencyChanged),
                    e.unitChanged().subscribe(this, this._onSourceUnitChanged),
                    e.priceRangeReadyChanged().subscribe(this, this._onSourcePriceRangeReadyChanged),
                    e.formatterChanged().subscribe(this, this._onSourceFormatterChanged),
                    e.priceStepChanged().subscribe(this, this._onSourcePriceStepChanged)
                }
                )),
                Et && this._model.mainSeries().properties().childs().statusViewStyle.childs().symbolTextSource.listeners().subscribe(this, (()=>{
                    this.invalidateTitleCache(!0)
                }
                ));
                const l = this._properties.childs();
                for (const e of m.StudyMetaInfo.getSourceInputIds(s))
                    null === (o = l.inputs.childs()[e]) || void 0 === o || o.subscribe(this, this._onSourceInputChanged);
                this._properties.subscribe(this, this._onPropertiesChanged),
                l.visible.subscribe(this, this._visibleChanged),
                l.visible.subscribe(this, (()=>this.processHibernate())),
                l.intervalsVisibilities.subscribe(this, this._calcIsActualInterval),
                l.inputs.listeners().subscribe(this, this._updateMaxOffsetValue),
                void 0 !== l.offsets && l.offsets.listeners().subscribe(this, this._updateMaxOffsetValue),
                void 0 !== l.offset && l.offset.listeners().subscribe(this, this._updateMaxOffsetValue),
                this._initializeCurrencySource(),
                C.hideAllIndicators().subscribe(this, this._visibleChanged);
                for (let e = 0; e < this._metaInfo.plots.length; e++) {
                    const t = this._metaInfo.plots[e].id
                      , i = this._properties.childs().styles.childs()[t];
                    null == i || i.childs().display.subscribe(this, (()=>this.processHibernate()))
                }
                for (const e of Object.keys(this._metaInfo.graphics))
                    for (const t of Object.keys(this._metaInfo.graphics[e])) {
                        const i = null === (a = l.graphics.childs()[e]) || void 0 === a ? void 0 : a.childs()[t];
                        i && i.childs().visible && (0,
                        n.ensureDefined)(i.childs().visible).subscribe(this, (()=>this.processHibernate()))
                    }
                this._isActualInterval = (0,
                at.isActualInterval)(this._series.intervalObj(), this._properties.childs().intervalsVisibilities),
                this._initializeStudyInputsPaneViews(),
                this._handler = e=>this.onData(e),
                this._handler.isTVScriptStrategy = this._metaInfo.isTVScriptStrategy,
                this._valuesProvider = new Pt.StudyValuesProvider(this,e)
            }
            destroy() {
                var e;
                this.parentSources().forEach((e=>{
                    e.currencyChanged().unsubscribeAll(this),
                    e.unitChanged().unsubscribeAll(this),
                    e.priceRangeReadyChanged().unsubscribeAll(this),
                    e.formatterChanged().unsubscribeAll(this),
                    e.priceStepChanged().unsubscribeAll(this)
                }
                )),
                this._series.properties().childs().statusViewStyle.childs().symbolTextSource.unsubscribeAll(this),
                this._series.onIntervalChanged().unsubscribeAll(this),
                this.formatterChanged().unsubscribe(this, this.invalidateTitleCache),
                C.hideAllIndicators().unsubscribe(this, this._visibleChanged),
                this._model.collapsed().unsubscribe(this._processHibernateBound),
                null !== this._currencySourceSymbolInputProperty && this._currencySourceSymbolInputProperty.unsubscribeAll(this),
                null === (e = this._legendView) || void 0 === e || e.destroy()
            }
            properties() {
                return this._properties
            }
            isDraggable() {
                return !this._metaInfo.linkedToSeries
            }
            lastValueData(e, t, i) {
                const s = {
                    noData: !0
                }
                  , r = this.priceScale();
                if (this._model.timeScale().isEmpty() || null === r || r.isEmpty() || this.data().isEmpty())
                    return s;
                const n = this._model.timeScale().visibleBarsStrictRange()
                  , o = this.firstValue(!0);
                if (null === n || null === o)
                    return s;
                if (!this._properties.childs().visible.value())
                    return s;
                const a = this._properties.childs().styles
                  , l = this._properties.childs().ohlcPlots;
                let c, h;
                if (a && a.childs()[e] && (c = a.childs()[e]),
                l && l.childs()[e] && (c = l.childs()[e]),
                !c || 0 === c.childs().display.value())
                    return s;
                const d = this.metaInfo().plots;
                for (h = 0; h < d.length; h++) {
                    const t = d[h];
                    if (t.id === e || (0,
                    b.isOhlcClosePlot)(t) && t.target === e)
                        break
                }
                const u = h + 1
                  , p = this.offset(e)
                  , _ = this.nearestIndex(n.lastBar() - p, f.PlotRowSearchMode.NearestLeft, u);
                if (void 0 === _)
                    return s;
                const m = this._lastNonEmptyPlotRow(u)
                  , g = null !== m && n.contains(m.index)
                  , v = null !== m ? m.value : null
                  , S = t || g ? v : this.data().valueAt(_);
                if (!S || !(0,
                k.isNumber)(S[u]))
                    return s;
                const y = S[u]
                  , w = this._valuesProvider.getPlotColor(h, S)
                  , C = r.priceToCoordinate(y, o)
                  , P = {
                    ...r.getFormattedValues(y, o),
                    noData: !1,
                    color: w,
                    floatCoordinate: C,
                    coordinate: C
                };
                return i && (P.price = y),
                P
            }
            isFailed() {
                return this._status.type === ot.StudyStatusType.Error
            }
            isLoading() {
                return this._status.type === ot.StudyStatusType.Loading
            }
            isSymbolInvalid() {
                return this._status.type === ot.StudyStatusType.Error && this._status.errorDescription.error === At
            }
            state(e, t) {
                var i, s;
                const r = (0,
                n.ensureNotNull)((0,
                l.className)(this.constructor))
                  , o = this.metaInfo();
                let a;
                o instanceof m.StudyMetaInfo ? a = (0,
                k.clone)(o.state()) : (a = (0,
                k.clone)(this.metaInfo()),
                a.id = m.StudyMetaInfo.parseIdString(a.id + (a.version ? "-" + a.version : "")).fullId);
                const c = {
                    type: r,
                    id: this.id(),
                    state: this.properties().state(),
                    zorder: this.zorder(),
                    ownFirstValue: this.isVisible() ? null : this._ownFirstValue,
                    metaInfo: a
                }
                  , h = this._sources.map((e=>e.id()));
                if (h.length && (c.parentSources = h),
                e) {
                    let e = this.data();
                    const t = this._model.timeScale()
                      , i = this._seriesDataRangeToSave(e);
                    null !== i && (e = e.range(i.firstBar(), i.lastBar())),
                    c.data = e.state(),
                    c.data.symbols = this._resolvedSymbols,
                    c.data.graphics = (0,
                    g.saveStudyGraphics)(this.graphics(), t.visibleBarsStrictRange()),
                    c.data.plotOffsets = this._plotOffsets
                }
                this.ownerSource() && (c.ownerSource = null === (i = this.ownerSource()) || void 0 === i ? void 0 : i.id());
                for (let e = 0; e < o.inputs.length; e++)
                    if ("bar_time" === o.inputs[e].type) {
                        const t = o.inputs[e].id
                          , i = c.state.inputs[t];
                        if (i < 0) {
                            const e = this._rightOffsetToUnixTime(-i);
                            c.state.inputs[t] = e && e >= 0 ? e : 0
                        }
                    }
                if (null === (s = c.state) || void 0 === s ? void 0 : s.inputs) {
                    const e = c.metaInfo.inputs.find((e=>"ILScript" === e.name));
                    e && delete c.state.inputs[e.id]
                }
                return c
            }
            restoreData(e) {
                var t, i;
                this._invalidateLastNonEmptyPlotRowCache(),
                this.data().restoreState(e),
                this._resolvedSymbols = null !== (t = e.symbols) && void 0 !== t ? t : {},
                this._graphics = e.graphics ? (0,
                g.loadStudyGraphics)(e.graphics) : (0,
                g.emptyStudyGraphics)(),
                this._postProcessGraphics(),
                this._plotOffsets = null !== (i = e.plotOffsets) && void 0 !== i ? i : {},
                this._setStatus({
                    type: ot.StudyStatusType.Completed
                }, !0)
            }
            hasStateForAlert() {
                return !1
            }
            stateForAlert() {
                throw new Error("Not implemented")
            }
            idForAlert() {
                return super.idForAlert()
            }
            alertCreationAvailable() {
                return new (dt())(!1).readonly()
            }
            hasBarColorer() {
                return (0,
                n.ensureNotNull)(this._metaInfo).plots.some(b.isBarColorerPlot)
            }
            barColorer() {
                const e = this._metaInfo.plots;
                let t = null;
                for (let i = 0; i < e.length; ++i)
                    if ((0,
                    b.isBarColorerPlot)(e[i])) {
                        const e = new ft.StudyBarColorer(this,i);
                        null === t ? t = e : t.pushBackBarColorer(e)
                    }
                return t
            }
            restart(e) {
                this._restarting = !0,
                this.clearData(),
                (e || N.enabled("stop_study_on_restart")) && this.stop(),
                setTimeout(this.start.bind(this), 0)
            }
            stop(e, t) {
                if (!0 === e && this._children)
                    for (const e of this._children)
                        e.stop(!0);
                this._stopStudyOnServer(),
                this.clearData(),
                this._unsubscribeToSessionId(),
                this.recalculate()
            }
            disconnect() {
                this._studyId = null,
                this._model.isSnapshot() || (this._resolvedSymbols = {},
                this._resolvedSymbolsByInput = {})
            }
            sourceId() {
                return this._studyId
            }
            parentSources() {
                return this._sources
            }
            symbolSource() {
                return this._firstSourceOrSeries().symbolSource()
            }
            barsProvider() {
                return this._firstSourceOrSeries().barsProvider()
            }
            ownerSource() {
                return this.isChildStudy() ? this._sources[0] : super.ownerSource()
            }
            isChildStudy() {
                return this._sources.length > 0
            }
            hasChildren() {
                return this._children.length > 0
            }
            isStarted() {
                return Boolean(this._studyId)
            }
            isRestarting() {
                return this._restarting
            }
            isActualInterval() {
                return this._isActualInterval
            }
            onIsActualIntervalChange() {
                return this._onIsActualIntervalChange
            }
            isVisible() {
                var e, t, i;
                const s = this._properties.childs();
                if (this._model.collapsed().value() || !s.visible.value() || !this.isActualInterval())
                    return !1;
                const r = this.metaInfo();
                if (r.plots.length > 0)
                    for (let e = 0; e < r.plots.length; e++) {
                        const t = r.plots[e].id
                          , i = s.styles.childs()[t];
                        if (void 0 === i)
                            continue;
                        if (0 !== i.childs().display.value())
                            return !0
                    }
                if (r.bands)
                    for (let e = 0; e < r.bands.length; e++)
                        if (s.bands.childs()[e].childs().visible.value())
                            return !0;
                for (const n of Object.keys(r.graphics))
                    for (const o of Object.keys(r.graphics[n])) {
                        const r = null === (e = s.graphics.childs()[n]) || void 0 === e ? void 0 : e.childs()[o];
                        if (void 0 !== r && (null === (i = null === (t = r.child("visible")) || void 0 === t ? void 0 : t.value()) || void 0 === i || i))
                            return !0
                    }
                if (r.filledAreas)
                    for (let e = 0; e < r.filledAreas.length; e++)
                        if (s.filledAreasStyle.childs()[r.filledAreas[e].id].childs().visible.value())
                            return !0;
                return !1
            }
            async start(e, t, i) {
                const s = this._model.mainSeries();
                s.isStarted() || await s.startedAndCompleted(),
                await Promise.all(this._sources.filter((e=>e.isHibernated())).map((e=>e.start())));
                const r = !(this.isHibernationAllowed() && !this.isVisible()) || !0 === t;
                if (this._chartApi && this._chartApi.isConnected().value() && r)
                    try {
                        await this._allSymbolsAreResolved(),
                        await this._startAfterSymbolsResolved(e, t)
                    } catch (e) {
                        const t = `ERROR: ${this._debugId()} start failed, ${e}`;
                        Lt.logError(t),
                        this._restarting = !1
                    }
            }
            replaceData(e, t, i) {
                this._invalidateLastNonEmptyPlotRowCache(),
                this.data().remove(e + 1),
                this.data().addTail(i, t)
            }
            inputs(e) {
                const t = (0,
                k.merge)((0,
                k.clone)(kt), e || {});
                t.skipOptionalEmptySymbolInputs && (t.keepOptionalSymbolsEmpty = !0);
                const i = (0,
                r.default)(this._buildInputs(t));
                return t.patchSosInputs && m.StudyMetaInfo.patchSoSInputs(i, (e=>{
                    var t, i;
                    return null !== (i = null === (t = this._sources.find((t=>t.id() === e))) || void 0 === t ? void 0 : t.sourceId()) && void 0 !== i ? i : null
                }
                )),
                i
            }
            metaInfo() {
                return this._metaInfo
            }
            status() {
                return this._status
            }
            name(e) {
                return e ? this.metaInfo().shortDescription || "Study" : this.metaInfo().description || "Study"
            }
            title(e, t, i, s) {
                i = void 0 === i ? !this._showStudyArgumentsProperty.value() : i;
                const r = JSON.stringify([e, t, i, s]);
                if (this._titleStrCache[r])
                    return this._titleStrCache[r];
                if (this._titleInPartsCache[r])
                    return this._joinTitlesParts(this._titleInPartsCache[r]);
                const n = this._title(e, t, i, s);
                return this._titleStrCache[r] = n,
                n
            }
            titleInParts(e, t, i, s) {
                i = void 0 === i ? !this._showStudyArgumentsProperty.value() : i;
                const r = JSON.stringify([e, t, i, s]);
                if (this._titleInPartsCache[r])
                    return this._titleInPartsCache[r];
                const n = this._titleInParts(e, t, i, s);
                return this._titleInPartsCache[r] = n,
                n
            }
            invalidateTitleCache(e) {
                if (this._titleStrCache = {},
                this._titleInPartsCache = {},
                !0 === e && this._children)
                    for (let t = 0; t < this._children.length; ++t)
                        this._children[t].invalidateTitleCache(e)
            }
            graphicsInfo() {
                return this._metaInfo.graphics
            }
            setOwnFirstValue(e) {
                this._ownFirstValue = e
            }
            firstValue(e) {
                if (!this.isChildStudy() && "Compare@tv-basicstudies" === this._metaInfo.id || !this._metaInfo.is_price_study) {
                    const t = this._model.timeScale().visibleBarsStrictRange();
                    if (null === t)
                        return null;
                    const i = this.properties().childs();
                    if (!i.visible.value() || !this.isActualInterval() || null !== this._startMovingPoint)
                        return this._ownFirstValue;
                    const s = t.firstBar()
                      , r = t.lastBar();
                    let o = null;
                    const a = this._metaInfo.plots || [];
                    if (null === o) {
                        const t = new Set
                          , l = this._metaInfo.filledAreas || [];
                        for (let e = 0; e < l.length; e++) {
                            const s = l[e];
                            i.filledAreasStyle.childs()[s.id].childs().visible.value() && (t.add(s.objAId),
                            t.add(s.objBId))
                        }
                        const c = this.data().rangeIterator(s, r);
                        for (; c.hasNext(); ) {
                            const s = c.next().value;
                            for (let r = 0; r < a.length; ++r) {
                                if ((0,
                                b.isColorerPlot)(a[r]))
                                    continue;
                                const l = s[r + 1];
                                if (null == l)
                                    continue;
                                const c = a[r].id;
                                if ((0 !== (0,
                                n.ensureDefined)(i.styles.childs()[c]).childs().display.value() || t.has(c)) && !(e && Math.abs(l) < 1e-10)) {
                                    o = l;
                                    break
                                }
                            }
                            if (null !== o)
                                break
                        }
                    }
                    return this._ownFirstValue = o,
                    null !== o ? o : this._bandsFirstValue(e)
                }
                if (this.isChildStudy()) {
                    const e = this._getNonPriceParent();
                    if (e && this.priceScale() === e.priceScale())
                        return null !== e._ownFirstValue ? e._ownFirstValue : e.firstValue()
                }
                return this._series.firstValue()
            }
            priceRange(e, t) {
                let i = null;
                const s = this._metaInfo
                  , r = this._fillPrecalculatedAutoscaleInfo(e, t);
                let o = this.data().minMaxOnRangeCached(e, t, r.fields);
                if (o = (0,
                _.mergeMinMax)(r.baseValueMinMax, o),
                r.useMainSeriesRange) {
                    const i = [{
                        name: "low",
                        offset: 0
                    }, {
                        name: "high",
                        offset: 0
                    }]
                      , s = this.series().data().bars().minMaxOnRangeCached(e, t, i);
                    o = (0,
                    _.mergeMinMax)(o, s)
                }
                if (null !== o && (i = new p.PriceRange(o.min,o.max)),
                s.bands)
                    for (let e = 0; e < s.bands.length; e++) {
                        const t = (0,
                        n.ensureDefined)(this._properties.childs().bands.childs()[e]).childs();
                        if (t.visible.value()) {
                            const e = t.value.value();
                            if (!(0,
                            k.isNumber)(e))
                                continue;
                            i ? i.apply(e, e) : i = new p.PriceRange(e,e)
                        }
                    }
                return this._postProcessPriceRange(i)
            }
            autoScaleInfo(e, t) {
                const i = {
                    topPixelMargin: 0,
                    bottomPixelMargin: 0
                };
                return {
                    range: this.priceRange(e, t),
                    topPixelMargin: i.topPixelMargin,
                    bottomPixelMargin: i.bottomPixelMargin
                }
            }
            formatter() {
                return this._formatter ? this._formatter : this._firstSourceOrSeries().formatter(!1)
            }
            updateAllViews(e) {
                var t, i, s, r, n;
                this._paneViews.forEach((t=>t.update(e))),
                this._labelPaneViews.forEach((t=>t.update(e))),
                null === (t = this._dataWindowView) || void 0 === t || t.update(),
                null === (i = this._legendView) || void 0 === i || i.update(),
                null === (s = this._statusView) || void 0 === s || s.update(),
                this._priceAxisViews.forEach((t=>t.update(e))),
                this._priceLinesAxisViews.forEach((t=>t.update(e))),
                null === (r = this._inputsLinesPaneView) || void 0 === r || r.update(e),
                null === (n = this._inputsAnchorsPaneView) || void 0 === n || n.update(e),
                this._inputsTimeAxisPaneViews.forEach((t=>t.update(e))),
                this._inputsPriceAxisPaneViews.forEach((t=>t.update(e)))
            }
            getStudyName() {
                return this._studyName
            }
            getMinFirstBarIndexForPlot(e) {
                var t, i, s, r, n, o, a, l, c, h, d, u, p, _, m;
                const g = this._properties.childs()
                  , f = this._metaInfo
                  , v = null !== (m = null !== (u = null !== (c = null !== (o = null !== (s = null === (i = null === (t = g.styles.childs()[e]) || void 0 === t ? void 0 : t.child("showLast")) || void 0 === i ? void 0 : i.value()) && void 0 !== s ? s : null === (n = null === (r = g.filledAreasStyle.childs()[e]) || void 0 === r ? void 0 : r.child("showLast")) || void 0 === n ? void 0 : n.value()) && void 0 !== o ? o : null === (l = null === (a = f.styles) || void 0 === a ? void 0 : a[e]) || void 0 === l ? void 0 : l.showLast) && void 0 !== c ? c : null === (d = null === (h = g.ohlcPlots.childs()[e]) || void 0 === h ? void 0 : h.child("showLast")) || void 0 === d ? void 0 : d.value()) && void 0 !== u ? u : null === (_ = null === (p = f.ohlcPlots) || void 0 === p ? void 0 : p[e]) || void 0 === _ ? void 0 : _.showLast) && void 0 !== m ? m : null;
                if (null === v)
                    return -1 / 0;
                const S = this.data().lastIndex();
                return null === S ? -1 / 0 : S - v + 1
            }
            guiPlotName(e) {
                var t, i, s;
                return null !== (s = null === (i = null === (t = this._metaInfo.styles) || void 0 === t ? void 0 : t[e]) || void 0 === i ? void 0 : i.title) && void 0 !== s ? s : this.title()
            }
            childStudyByRebind() {
                return this._childStudyByRebind
            }
            isPine() {
                return void 0 !== this._metaInfo.pine
            }
            isStandardPine() {
                return this.isPine() && m.StudyMetaInfo.isStandardPine(this._metaInfo.id)
            }
            isLinkedToSeries() {
                return !0 === this._metaInfo.linkedToSeries
            }
            defaultPlotIdForAlert() {
                return this._metaInfo.plots.length ? this._metaInfo.plots[0].id : null
            }
            resolvedSymbolInfoBySymbol(e) {
                return this._resolvedSymbols && e && this._resolvedSymbols[this._getSymbolForResolve(e)] || null
            }
            currency() {
                if (null !== this._currencySourceSymbolInfo)
                    return (0,
                    ut.symbolCurrency)(this._currencySourceSymbolInfo);
                const e = this.metaInfo();
                return Boolean(e) && e.is_price_study ? this._firstSourceOrSeries().currency() : null
            }
            currencySourceSymbolInfo() {
                var e, t, i;
                return null !== (e = this._currencySourceSymbolInfo) && void 0 !== e ? e : null !== (i = null === (t = this.symbolSource()) || void 0 === t ? void 0 : t.symbolInfo()) && void 0 !== i ? i : null
            }
            unit() {
                const e = this.metaInfo();
                return Boolean(e) && e.is_price_study ? this._firstSourceOrSeries().unit() : null
            }
            dataWindowView() {
                return this._dataWindowView
            }
            statusView() {
                return this._statusView
            }
            legendView() {
                return this._legendView
            }
            inputsForAlertState() {
                return this.inputs()
            }
            sessionId() {
                return this._firstSourceOrSeries().sessionId()
            }
            sessionIdChanged() {
                return this._firstSourceOrSeries().sessionIdChanged()
            }
            getSymbolString(e) {
                return "" === e ? "" : (0,
                x.encodeExtendedSymbolOrGetSimpleSymbolString)(this._getSymbolObject(e))
            }
            onStatusChanged() {
                return this._statusChanged
            }
            symbolsResolved() {
                return this._symbolsResolved
            }
            onHibernationStateChange() {
                return this._onHibernationStateChange
            }
            valuesProvider() {
                return new y.StudyLegendValuesProvider(this,this.model())
            }
            statusProvider(e) {
                return new M.StudyStatusProvider(this,this._model.properties().childs().scalesProperties.childs().textColor)
            }
            correctScaleMargins(e) {
                if ("Volume" === this.metaInfo().shortId) {
                    const t = this.model().paneForSource(this);
                    return null !== t && t.isOverlay(this) && t.containsMainSeries() ? {
                        top: .75,
                        bottom: 0
                    } : {
                        top: e.top,
                        bottom: 0
                    }
                }
                return e
            }
            canBeHiddenByGlobalFlag() {
                return !0
            }
            isSourceHidden() {
                return !this.isVisible() || this.canBeHiddenByGlobalFlag() && C.hideAllIndicators().value()
            }
            paneViews(e) {
                if (this.isSourceHidden() || !e.hasPriceDataSource(this))
                    return null;
                const t = [];
                return !this._startMovingPoint && this._wasCompletedBefore && t.push(...this._paneViews),
                this._inputsLinesPaneView && (this._startMovingPoint || this._model.selection().isSelected(this)) && t.push(this._inputsLinesPaneView),
                this._inputsAnchorsPaneView && t.push(this._inputsAnchorsPaneView),
                t
            }
            labelPaneViews() {
                return this.isSourceHidden() ? null : this._labelPaneViews
            }
            timeAxisViews() {
                return this._model.selection().isSelected(this) ? this._inputsTimeAxisPaneViews : null
            }
            priceAxisViews(e, t) {
                const i = this._properties.childs().oldShowLastValue;
                if (i && !i.value())
                    return null;
                let s = this._priceAxisViews.slice();
                return this._model.selection().isSelected(this) && (s = s.concat(this._inputsPriceAxisPaneViews)),
                e.findTargetPriceAxisViews(this, t, s, this._priceLinesAxisViews)
            }
            movable() {
                return null !== this._inputsAnchorsPaneView
            }
            startMoving(e, t, i, s) {
                this._startMovingPoint = e,
                this.stop()
            }
            move(e, t, i, s) {
                if (void 0 !== e.logical && null !== this._startMovingPoint) {
                    if (Array.isArray(t)) {
                        const i = t;
                        this._updateInputValue(e.logical, i[0]),
                        this._updateInputValue(e.logical, i[1])
                    } else
                        this._updateInputValue(e.logical, t);
                    this.updateAllViews((0,
                    ct.sourceChangeEvent)(this.id()))
                }
            }
            endMoving(e, t) {
                return this._startMovingPoint = null,
                this.start(),
                {
                    indexesChanged: !1,
                    pricesChanged: !1
                }
            }
            clearData() {
                var e;
                this._invalidateLastNonEmptyPlotRowCache(),
                this.data().clear(),
                this._graphics instanceof g.LiveStudyGraphics && (null === (e = this._graphics) || void 0 === e || e.clear()),
                this._plotOffsets = {},
                this.hasBarColorer() && this._model.mainSeries().invalidateBarStylesCache(),
                this.updateAllViews((0,
                ct.sourceChangeEvent)({
                    sourceId: this.id(),
                    clearData: !0
                }))
            }
            convertYCoordinateToPriceForMoving(e, t) {
                const i = this.priceScale();
                if (!t || !i || i.isEmpty())
                    return null;
                const s = t.firstValue();
                return null === s ? null : i.coordinateToPrice(e, s)
            }
            processHibernate(e) {
                const t = this.isVisible();
                if (!this.isStarted() && t && (this._sources.forEach((e=>{
                    e.processHibernate()
                }
                )),
                this.start(void 0, void 0, e),
                this._onHibernationStateChange.fire(!1)),
                this.isHibernationAllowed() && this.isStarted() && !t) {
                    for (const e of this._children)
                        e.processHibernate();
                    this.stop(void 0, e),
                    this._onHibernationStateChange.fire(!0)
                }
            }
            isHibernationAllowed() {
                return !this.metaInfo().historyCalculationMayChange && (!this.hasChildren() || !!this._model.collapsed().value() && this._children.every((e=>e.isHibernationAllowed())))
            }
            isPlotVisibleAt(e, t) {
                let i;
                const s = this.metaInfo().plots.find((t=>t.id === e));
                if (i = void 0 !== s ? (0,
                b.isOhlcPlot)(s) ? this._properties.childs().ohlcPlots.childs()[s.target] : this._properties.childs().styles.childs()[e] : this._properties.childs().ohlcPlots.childs()[e],
                void 0 === i)
                    throw new Error(`Study does not contain ${e} plot`);
                const r = i.childs().display.value();
                return null !== r && (r & t) === t
            }
            recalculate() {
                const e = this._model.paneForSource(this);
                this._model.recalculatePane(e, (0,
                ct.sourceChangeEvent)(this.id())),
                this._model.updateSource(this)
            }
            maxOffset() {
                return this._maxOffset
            }
            onStart() {
                return this._onStart
            }
            isHibernated() {
                return !this.isVisible() && !this.isStarted()
            }
            turnaround(e) {
                if (!e)
                    return this._turnaround;
                return function(e, t) {
                    let i = t.turnaround
                      , s = [t];
                    for (; s.length > 0; ) {
                        let e = [];
                        const t = [];
                        s.forEach((i=>{
                            const s = B(i.sourceStudies).sort(D);
                            if (s.length > 0) {
                                e = e.concat(s);
                                const i = s.map((e=>e.turnaround)).join("_");
                                t.push(i)
                            }
                        }
                        )),
                        t.length && (i = t.join("_") + "_" + i),
                        s = e
                    }
                    return e + "_" + i
                }(this._series.seriesSource().turnaround(), V(this))
            }
            canHaveChildren() {
                var e;
                return this._canHaveChildren = null !== (e = this._canHaveChildren) && void 0 !== e ? e : m.StudyMetaInfo.canHaveChildren(this._metaInfo),
                this._canHaveChildren
            }
            setChild(e) {
                -1 === this._children.indexOf(e) && this._children.push(e)
            }
            unsetChild(e) {
                const t = this._children.indexOf(e);
                ~t && this._children.splice(t, 1)
            }
            getAllChildren() {
                const e = this._children.slice();
                for (let t = 0; t < e.length; ++t) {
                    const i = e[t].getAllChildren();
                    for (let t = 0; t < i.length; ++t)
                        ~e.indexOf(i[t]) || e.push(i[t])
                }
                return e
            }
            parentSourceForInput(e) {
                var t;
                if (e.includes("$")) {
                    const i = e.split("$")[0];
                    return null !== (t = this._sources.find((e=>e.id() === i))) && void 0 !== t ? t : null
                }
                return this._series
            }
            priceStep() {
                return this._priceStep || this._firstSourceOrSeries().priceStep(!1)
            }
            _incrementTurnaround() {
                this._turnaround = "st" + ++this._turnaroundCounter
            }
            _checkTurnaround(e) {
                return e === this._turnaround || e === this._model.mainSeries().seriesSource().turnaround() || e === this.turnaround(!0)
            }
            _createStudyOnServer() {
                if (this._isDestroyed)
                    return;
                const e = this._getStudyIdWithLatestVersion();
                this._studyId = (0,
                T.makeNextStudyId)(),
                this._incrementTurnaround(),
                this._studyName = e;
                const t = (0,
                k.clone)((0,
                n.ensureDefined)(this._inputs));
                m.StudyMetaInfo.patchSoSInputs(t, (e=>{
                    var t, i;
                    return null !== (i = null === (t = this._sources.find((t=>t.id() === e))) || void 0 === t ? void 0 : t.sourceId()) && void 0 !== i ? i : null
                }
                )),
                this._chartApi.createStudy(this._studyId, this._turnaround, this.isChildStudy() ? (0,
                n.ensureNotNull)(this._sources[0].sourceId()) : (0,
                n.ensureNotNull)(this._series.seriesSource().instanceId()), this._studyName, t, this._handler, this.isChildStudy())
            }
            _stopStudyOnServer() {
                this._chartApi && this._chartApi.isConnected().value() && this.isStarted() && (this._chartApi.removeStudy((0,
                n.ensureNotNull)(this._studyId), this.isChildStudy()),
                this._setStatus({
                    type: ot.StudyStatusType.Undefined
                })),
                this._studyId = null
            }
            _modifyStudyOnServer(e, t) {
                const i = (0,
                k.clone)((0,
                n.ensureDefined)(e));
                m.StudyMetaInfo.patchSoSInputs(i, (e=>{
                    var t, i;
                    return null !== (i = null === (t = this._sources.find((t=>t.id() === e))) || void 0 === t ? void 0 : t.sourceId()) && void 0 !== i ? i : null
                }
                )),
                this._chartApi.modifyStudy((0,
                n.ensureNotNull)(this._studyId), this._turnaround, i, this._handler, t)
            }
            _transformData(e) {}
            _updateMaxOffsetValue() {
                let e = -1 / 0;
                for (const t of this._metaInfo.plots)
                    e = Math.max(this.offset(t.id), e);
                this._maxOffset.setValue(e)
            }
            _rightOffsetToUnixTime(e) {
                if (this._series.bars().size() >= e) {
                    const t = (0,
                    n.ensureNotNull)(this._series.bars().lastIndex()) - e;
                    return (0,
                    n.ensureNotNull)(this._series.bars().valueAt(t))[0]
                }
                return null
            }
            _invalidateLastNonEmptyPlotRowCache() {
                this._lastNonEmptyPlotRowCache = {}
            }
            _collectDepsForAlert() {
                throw new Error("Not implemented")
            }
            _allInputsAreValid() {
                for (const e of this._metaInfo.inputs)
                    if ("bar_time" === e.type) {
                        const t = e.id;
                        if (null == this._properties.childs().inputs.childs()[t].value())
                            return !1
                    }
                return !0
            }
            async _startAfterSymbolsResolved(e, t) {
                await Promise.all(this._sources.map((e=>!e.isStarted() || e.isRestarting() ? new Promise((t=>{
                    e.onStart().subscribe(this, t, !0)
                }
                )) : Promise.resolve()))),
                this.isStarted() && !this._restarting || (this._restarting = !1,
                this._allInputsAreValid() && (this._inputs = this._apiInputs(),
                this._createStudyOnServer(),
                this._subscribeToSessionId(),
                this._onStart.fire(),
                !0 === e && this._children && await this._children.map((e=>e.start(!0, t)))))
            }
            async _changeInputsImpl(e, t) {
                var s;
                const r = this._calcSources();
                let a = !0;
                const l = Gt(this._metaInfo, e, t);
                if (r.length !== this._sources.length || r[0] !== this._sources[0])
                    a = await this._rebindToSourceOrRestorePreviousValue(null !== (s = r[0]) && void 0 !== s ? s : this._series, e, t),
                    a && (this._inputs = e);
                else {
                    const s = ()=>{
                        for (const i of this._metaInfo.inputs) {
                            if ("source" !== i.type)
                                continue;
                            const s = e[i.id].v
                              , r = t[i.id].v;
                            if (s !== r) {
                                (0,
                                n.ensureDefined)(this._properties.childs().inputs.child(i.id)).setValue(r)
                            }
                        }
                    }
                    ;
                    if (this.isStarted() && this._chartApi.isConnected().value() && l > 0 && !this._chartApi.canCreateStudy(!0)) {
                        const e = window.user.pro_plan;
                        return createGoProDialog({
                            feature: "studyOnStudy",
                            actions: e && [ProPlans.ProPremium, ProPlans.ProPremiumTrial].includes(e) ? [{
                                text: o.t(null, void 0, i(875139)),
                                action: PredefinedAction.Close
                            }] : void 0
                        }),
                        void s()
                    }
                    this._inputs = e;
                    let a = !1;
                    const c = Object.values(R.RangeDependentStudyInputNames);
                    for (const i of Object.keys(e))
                        if (JSON.stringify(e[i]) !== JSON.stringify(t[i]) && !c.includes(i)) {
                            a = !0;
                            break
                        }
                    this._incrementTurnaround(),
                    a && this.disablePriceRangeReady();
                    try {
                        await this._updateParentSources(r, l, !0),
                        this._modifyStudyOnServer(e, l)
                    } catch (e) {
                        Lt.logError(`Error applying parent sources: ${e}`),
                        s()
                    }
                }
                this.invalidateTitleCache(),
                a && (this._studyModified = a)
            }
            createPriceAxisView(e) {
                return new mt(this,{
                    plotIndex: e
                })
            }
            createPriceLineAxisView(e) {
                return new gt.StudyPriceLineAxisView(this,e)
            }
            _createStudyPlotPaneView(e) {
                return new We.StudyPlotPaneView(this,this._series,this._model,e)
            }
            _createViews() {
                var e, t, i, s;
                this._priceAxisViewsBase = [],
                this._priceLinesAxisViews = [],
                this._paneViews = [],
                this._labelPaneViews = [];
                const r = new Set
                  , o = this.metaInfo()
                  , a = Boolean(o.usePlotsZOrder)
                  , l = new Map
                  , c = this._properties.childs();
                if (c.filledAreasStyle && o.filledAreas)
                    for (let e = 0; e < o.filledAreas.length; ++e) {
                        const t = o.filledAreas[e]
                          , i = (0,
                        n.ensureDefined)(c.filledAreasStyle.childs()[t.id])
                          , s = Nt(o, t.id);
                        let r;
                        if ("plot_plot" === t.type || s ? r = new Je(this,this.model(),t,i) : "hline_hline" === t.type ? r = new nt(this,t,i) : Lt.logWarn("Unsupported filledArea type: " + t.type),
                        void 0 !== r) {
                            const e = a ? (0,
                            n.ensureDefined)(t.zorder) : l.size;
                            Rt(e, l),
                            l.set(e, {
                                paneViews: [r]
                            })
                        }
                    }
                {
                    let s = -1e5;
                    for (let c = 0; c < o.plots.length; c++) {
                        const h = o.plots[c];
                        let d, u, p, _, m;
                        if ((0,
                        b.isNonVisualPlot)(h))
                            continue;
                        let g = h.id
                          , f = o.styles;
                        const v = (0,
                        b.isBgColorerPlot)(h);
                        if (v)
                            d = new j(this,this._series,this._model,g);
                        else if ((0,
                        b.isShapesPlot)(h))
                            d = new be(this,this._series,this._model,g);
                        else if ((0,
                        b.isCharsPlot)(h))
                            d = new Te(this,this._series,this._model,g);
                        else if ((0,
                        b.isArrowsPlot)(h))
                            d = new De(this,this._series,this._model,g);
                        else if ((0,
                        b.isOhlcPlot)(h)) {
                            const e = h.target;
                            if (r.has(e))
                                continue;
                            if (r.add(e),
                            Bt(o, c))
                                d = new Re(this,this._series,this._model,e);
                            else {
                                if (!Vt(o, c)) {
                                    Lt.logError(`plot ${h.id} looks to be invalid`);
                                    continue
                                }
                                d = new Oe(this,this._series,this._model,e)
                            }
                            _ = this.createPriceAxisView(e),
                            p = new Fe.PanePriceAxisView(_,this,this._model),
                            g = e,
                            f = o.ohlcPlots
                        } else
                            (0,
                            b.isDataPlot)(h) || (_ = this.createPriceAxisView(g),
                            m = this.createPriceLineAxisView(g),
                            d = this._createStudyPlotPaneView(g),
                            (null === (t = null === (e = this._properties.childs().styles.childs()[g]) || void 0 === e ? void 0 : e.child("trackPrice")) || void 0 === t ? void 0 : t.value()) && (u = new Ue(this,g)),
                            p = new Fe.PanePriceAxisView(_,this,this._model));
                        const S = a ? v ? s++ : (0,
                        n.ensureDefined)(null === (i = null == f ? void 0 : f[g]) || void 0 === i ? void 0 : i.zorder) : l.size;
                        Rt(S, l);
                        const y = {
                            paneViews: void 0 !== d ? [d] : [],
                            labelView: p,
                            priceAxisView: _,
                            priceLineAxisView: m
                        };
                        void 0 !== u && y.paneViews.push(u),
                        l.set(S, y)
                    }
                }
                (null !== (s = this._metaInfo.bands) && void 0 !== s ? s : []).forEach(((e,t)=>{
                    const i = c.bands.childs()[t];
                    if (i && i.childs().visible.value()) {
                        const t = new tt(i,this)
                          , s = a ? (0,
                        n.ensureDefined)(e.zorder) : l.size;
                        Rt(s, l),
                        l.set(s, {
                            paneViews: [t]
                        })
                    }
                }
                )),
                c.bandsBackground && ((0,
                n.assert)(!a, "'usePlotsZOrder' flag does not supported"),
                l.set(l.size, {
                    paneViews: [new rt(this)]
                }));
                const h = this._paneViews;
                this._createGraphicsPaneViews().then((e=>{
                    for (let t = 0; t < e.length; t++)
                        h.push(e[t]);
                    this._model.lightUpdate()
                }
                )),
                c.areaBackground && ((0,
                n.assert)(!a, "'usePlotsZOrder' flag does not supported"),
                l.set(l.size, {
                    paneViews: [new Ze(this,this.model())]
                }));
                const d = Array.from(l.keys()).sort(((e,t)=>e - t));
                for (let e = 0; e < d.length; e++) {
                    const t = (0,
                    n.ensureDefined)(l.get(d[e]));
                    this._paneViews.push(...t.paneViews),
                    t.labelView && this._labelPaneViews.push(t.labelView),
                    t.priceAxisView && this._priceAxisViewsBase.push(t.priceAxisView),
                    t.priceLineAxisView && this._priceLinesAxisViews.push(t.priceLineAxisView)
                }
                this._dataWindowView || (this._dataWindowView = new Qe.StudyDataWindowView(this,this._model)),
                this._legendView || (this._legendView = new w(this,this._model)),
                this._statusView || (this._statusView = new P.StudyStatusView(this)),
                this._concatPriceAxisViews()
            }
            _concatPriceAxisViews() {
                this._priceAxisViews = [...this._priceAxisViewsBase, ...this._graphicsPriceAxisViews]
            }
            onData(e) {
                switch (e.method) {
                case "study_loading":
                    this._onStudyLoading();
                    break;
                case "study_error":
                    this._onStudyError(e.params[2]);
                    break;
                case "study_completed":
                    if (!this._checkTurnaround(e.params[1]))
                        return;
                    this._onStudyCompleted(e.params[e.params.length - 1]);
                    break;
                case "data_update":
                    if (e.params.customId !== this.sourceId() || !this._checkTurnaround(e.params.turnaround))
                        return;
                    (0,
                    n.assert)(!!e.params.nonseries, "data.params.nonseries is missing"),
                    this._onDataUpdate(e.params.plots, (0,
                    n.ensureDefined)(e.params.nonseries), e.params.lastBar);
                    break;
                case "clear_data":
                    this._checkTurnaround(e.params.turnaround) && this.clearData()
                }
            }
            _onStudyLoading() {
                var e;
                this._setStatus({
                    type: ot.StudyStatusType.Loading,
                    startTime: Date.now()
                }),
                null === (e = this._statusView) || void 0 === e || e.update(),
                this._model.updateSource(this)
            }
            _getTelemetryObjectName() {
                return "study"
            }
            _handleStudyError(e) {
                var t;
                this.clearData(),
                this._setStatus(e),
                null === (t = this._statusView) || void 0 === t || t.update(),
                this._model.updateSource(this)
            }
            _onStudyError(e) {
                const t = "string" == typeof e ? {
                    error: this._getStudyErrorText(e)
                } : e;
                this._handleStudyError({
                    type: ot.StudyStatusType.Error,
                    errorDescription: t
                }),
                this._enablePriceRangeReady()
            }
            _onStudyCompleted(e) {
                var t;
                this._studyModified && (this.clearData(),
                this._studyModified = !1),
                this._setStatus({
                    type: ot.StudyStatusType.Completed
                }),
                null === (t = this._statusView) || void 0 === t || t.update();
                const i = this._model.paneForSource(this);
                this._model.recalculatePane(i, (0,
                ct.sourceChangeEvent)(this.id())),
                this._updateSources();
                const s = lt.InvalidationMask.full();
                null !== this._model.appliedTimeFrame().value() && s.lockVisibleTimeRangeOnResize(),
                this._model.invalidate(s)
            }
            _onDataUpdated(e, t, i, s) {
                if (this.hasBarColorer() && e.length > 0) {
                    const t = (0,
                    n.ensureNotNull)(this.barColorer()).firstColoredBar(e[0].index);
                    this._model.mainSeries().invalidateBarStylesCache(t)
                }
                null !== t && this._postProcessGraphics();
                const r = this._model.paneForSource(this);
                this._model.recalculatePane(r, (0,
                ct.sourceChangeEvent)({
                    sourceId: this.id(),
                    firstUpdatedTimePointIndex: null != s ? s : void 0
                })),
                this._updateSources()
            }
            _updateSources() {
                this._model.updateSource(this),
                this.hasBarColorer() && this._model.updateSource(this._model.mainSeries())
            }
            _titleInputs(e, t) {
                return this.inputs(this._titleInputsOptions(e, t))
            }
            _titleInputsOptions(e, t) {
                return {
                    symbolsForDisplay: !0,
                    skipHiddenInputs: !0,
                    skipFakeInputs: !1,
                    fakeInputsForDisplay: !0,
                    asObject: !1,
                    skippedGroups: [],
                    noExchanges: e,
                    noResolution: t,
                    skipColorInputs: !0,
                    skipTimeInputs: !0,
                    priceInputsForDisplay: !0,
                    skipOptionalEmptySymbolInputs: Dt
                }
            }
            _postProcessGraphics() {
                this._graphicsPriceAxisViews = this._createGraphicsPriceAxisViews(),
                this._concatPriceAxisViews()
            }
            async _createGraphicsPaneViews() {
                return (0,
                g.createGraphicsPaneViews)(this, this.model())
            }
            _createGraphicsPriceAxisViews() {
                return (0,
                g.createGraphicsPriceAxisViews)(this)
            }
            _subscribeToSessionId() {
                !this._isSubscribedToSessionId && this.hasSymbolInputs() && (this.sessionIdChanged().subscribe(this, this._onSessionIdChanged),
                this._isSubscribedToSessionId = !0)
            }
            _unsubscribeToSessionId() {
                this._isSubscribedToSessionId && (this.sessionIdChanged().unsubscribe(this, this._onSessionIdChanged),
                this._isSubscribedToSessionId = !1)
            }
            _onSessionIdChanged() {
                this.restart(!0)
            }
            _recreateFormatter() {
                this._formatter = this._tryCreateFormatter(),
                this._formatterChanged.fire();
                const e = this.priceScale();
                null !== e && e.updateFormatter(),
                this._model.fullUpdate()
            }
            _recreatePriceStep() {
                var e;
                let t = null;
                const i = null !== (e = this._priceScaleByProperties()) && void 0 !== e ? e : this._priceScaleByMetaInfo();
                null !== i && (t = 1 / i),
                this._priceStep !== t && (this._priceStep = t,
                this._priceStepChanged.fire())
            }
            _recreatePriceFormattingDependencies() {
                this._recreateFormatter(),
                this._recreatePriceStep()
            }
            _title(e, t, i, s) {
                const r = this._titleInParts(e, t, i, s);
                return this._joinTitlesParts(r)
            }
            _formatterByProperties() {
                const e = this.metaInfo().format
                  , t = this._priceScaleByProperties();
                if (null !== t)
                    switch (e.type) {
                    case "inherit":
                    case "price":
                        return new xt.PriceFormatter(t);
                    case "volume":
                        return new Tt.VolumeFormatter(Math.log10(t));
                    case "percent":
                        return new It.PercentageFormatter(t)
                    }
                return null
            }
            _formatterByMetaInfo() {
                var e, t;
                const i = this.metaInfo().format;
                if ("inherit" === i.type)
                    return null;
                const s = this.series().symbolInfo()
                  , r = (0,
                k.isNumber)(i.precision) ? Math.pow(10, i.precision) : void 0;
                {
                    const s = null !== (t = null === (e = null === Mt.customFormatters || void 0 === Mt.customFormatters ? void 0 : Mt.customFormatters.studyFormatterFactory) || void 0 === e ? void 0 : e.call(Mt.customFormatters, i, this.symbolSource().symbolInfo())) && void 0 !== t ? t : null;
                    if (null !== s)
                        return s
                }
                switch (i.type) {
                case "price":
                    return new xt.PriceFormatter(r);
                case "volume":
                    {
                        let e = i.precision;
                        return void 0 === e && (e = s && (0,
                        k.isNumber)(s.volume_precision) ? s.volume_precision : 0),
                        new Tt.VolumeFormatter(e)
                    }
                case "percent":
                    return new It.PercentageFormatter(r);
                default:
                    return Lt.logWarn(`Unsupported format type: ${i.type}`),
                    null
                }
            }
            _postProcessPriceRange(e) {
                if (e && e.minValue() === e.maxValue() && !this.metaInfo().is_price_study) {
                    const t = .005 * e.minValue();
                    e = new p.PriceRange(e.minValue() - t,e.maxValue() + t)
                }
                const t = this.priceScale();
                return t && t.isLog() && e ? new p.PriceRange(t.priceToLogical(e.minValue()),t.priceToLogical(e.maxValue())) : e
            }
            _joinTitlesParts(e) {
                const t = e[1] ? e[1].join(", ") : "";
                return e[0] + (t.length > 0 ? " (" + t + ")" : "")
            }
            _titleInParts(e, t, s, r) {
                var a;
                const l = this.name(e);
                t = t || {};
                const c = [o.t(l, {
                    context: "study"
                }, i(168716))];
                let h = [];
                if (!s) {
                    const i = this._getMTFResolutionInputTitle();
                    null !== i && i.length > 0 && c.push(i);
                    const s = this.metaInfo()
                      , o = this._titleInputs(r, !0) || [];
                    if (o.length > 0) {
                        const i = {};
                        if (this.isChildStudy())
                            for (let t = 0; t < s.inputs.length; ++t) {
                                const o = s.inputs[t];
                                if (!m.StudyMetaInfo.isSourceInput(o))
                                    continue;
                                const l = o.id
                                  , c = (0,
                                n.ensureDefined)(this._properties.childs().inputs.child(l)).value();
                                if (c.indexOf("$") >= 0) {
                                    const t = this.parentSourceForInput(c);
                                    if (t instanceof StudyBase) {
                                        const s = t.metaInfo()
                                          , n = t.title(e, {}, !0, r);
                                        if (1 === s.plots.length)
                                            i[c] = n;
                                        else {
                                            const e = c.split("$")[1]
                                              , t = null === (a = s.plots[parseInt(e)]) || void 0 === a ? void 0 : a.id
                                              , r = s.styles && s.styles[t]
                                              , o = r && r.title || t;
                                            i[c] = n + ": " + o
                                        }
                                    }
                                }
                            }
                        h = o.map((e=>{
                            let s = (0,
                            k.isNumber)(e) ? this._numericFormatter.format(e) : i && i[e.toString()] || e.toString();
                            return t && t[s.toString()] && (s = t[s.toString()]),
                            s
                        }
                        ))
                    }
                }
                return [c.join(" · "), h]
            }
            _getMTFResolutionInputTitle() {
                const e = this.metaInfo();
                for (let t = 0; t < e.inputs.length; t++) {
                    const i = e.inputs[t];
                    if ("resolution" === i.type && i.isMTFResolution)
                        return (0,
                        n.ensureDefined)(this._properties.childs().inputs.child(i.id)).value()
                }
                return null
            }
            _seriesDataRangeToSave(e) {
                return this._model.timeScale().visibleExtendedDataRange(e, 0)
            }
            _hasAvailableAlertPlots() {
                return !1
            }
            _hasAlertablePlots() {
                return !1
            }
            _hasAlertConditions() {
                return !1
            }
            _hasAlertFunction() {
                return !1
            }
            _onDataUpdate(e, t, i) {
                this._studyModified && (this.clearData(),
                this._studyModified = !1);
                const s = (0,
                d.unpackNonSeriesData)(t.d);
                return this._ongoingDataUpdate = this._ongoingDataUpdate.then((()=>s), (()=>s)).then(this._onDataUnpacked.bind(this, e, t.indexes, i)),
                this._ongoingDataUpdate
            }
            _mergeData(e) {
                return this._invalidateLastNonEmptyPlotRowCache(),
                this.data().merge(e)
            }
            _getSymbolForResolve(e) {
                return this.getSymbolString(this._getSymbolForApi(e))
            }
            _allSymbolsAreResolved() {
                const e = this.metaInfo()
                  , t = [];
                let i = !1;
                for (let s = 0; s < e.inputs.length; s++)
                    if ("symbol" === e.inputs[s].type) {
                        const r = e.inputs[s].id
                          , o = (0,
                        n.ensureDefined)(this._properties.childs().inputs.child(r)).value()
                          , a = this._getSymbolForResolve(o);
                        if ("" !== a)
                            if (this._resolvedSymbols[a])
                                i = !0;
                            else {
                                const e = this._resolveSymbol(a, o);
                                t.push(e)
                            }
                    }
                if (0 === t.length) {
                    const e = Promise.resolve();
                    return i ? e.then((()=>this._symbolsResolved.fire())) : e
                }
                return Promise.all(t).catch((e=>(this._setStatus({
                    type: ot.StudyStatusType.Error,
                    errorDescription: {
                        error: At
                    }
                }),
                this.stop(!0),
                this._model.updateSource(this),
                Promise.reject("Invalid symbol, " + e)))).then((()=>{
                    this._symbolsResolved.fire(),
                    this._recheckLineToolsActuality()
                }
                ))
            }
            _getSymbolForApi(e) {
                return e
            }
            _resolveSymbol(e, t) {
                if ("" === e)
                    return Promise.resolve();
                let i = this._pendingResolveSymbols.get(e);
                return void 0 !== i || (i = new Promise(((i,s)=>{
                    this._onSymbolResolvingStart(),
                    this._chartApi.resolveSymbol((0,
                    T.makeNextSymbolId)(), e, (r=>{
                        switch (this._pendingResolveSymbols.delete(e),
                        r.method) {
                        case "symbol_resolved":
                            this._setStatus({
                                type: ot.StudyStatusType.Undefined
                            }),
                            this._resolvedSymbols[e] = r.params[1],
                            this._resolvedSymbolsByInput[t] = r.params[1],
                            this._onSymbolResolved(e, t, r.params[1]),
                            this.invalidateTitleCache(!0),
                            i();
                            break;
                        case "symbol_error":
                            if (this._setStatus({
                                type: ot.StudyStatusType.Error,
                                errorDescription: {
                                    error: r.params[1]
                                }
                            }),
                            this._onSymbolError(),
                            r.params[1] === I.permissionDenied && r.params[2]) {
                                if (r.params[2] !== I.SymbolErrorPermissionDeniedReason.Symbol)
                                    return void this._resolveSymbol(r.params[2], t).then(i);
                                if (r.params[3])
                                    return void this._resolveSymbol(r.params[3], t).then(i)
                            }
                            0,
                            s()
                        }
                    }
                    ))
                }
                )),
                this._pendingResolveSymbols.set(e, i)),
                i
            }
            _recheckLineToolsActuality() {
                const e = this._model.paneForSource(this);
                null !== e && e.sourcesByGroup().lineSourcesForAllSymbols().forEach((e=>{
                    e.ownerSource() === this && e.calcIsActualSymbol()
                }
                ))
            }
            _getSymbolObject(e) {
                const t = {
                    symbol: e
                }
                  , i = this.currency();
                return null !== this._currencySourceSymbolInputProperty && null !== this._currencySourceSymbolInfo && this._getSymbolForApi(this._currencySourceSymbolInputProperty.value()) === e && (t["currency-id"] = i),
                t.session = this.sessionId(),
                t
            }
            _onSymbolResolved(e, t, i) {
                this._onCurrencyMayChange()
            }
            _onSymbolResolvingStart() {}
            _onSymbolError() {}
            _setStatus(e, t) {
                var i;
                this._status = e,
                e.type === ot.StudyStatusType.Completed ? this._wasCompletedBefore = !0 : e.type !== ot.StudyStatusType.Error && e.type !== ot.StudyStatusType.Undefined || (this._wasCompletedBefore = !1),
                t || (null === (i = this._statusView) || void 0 === i || i.update(),
                this._model.updateSource(this),
                this._statusChanged.fire(e))
            }
            _onPropertiesChanged() {
                this._restarting || (this._inputs ? this._tryChangeInputs() : this._chartApi && this._chartApi.isConnected().value() && this.restart()),
                this._recreatePaneViews(),
                (0,
                vt.emit)("study_properties_changed", this._id)
            }
            _bandsFirstValue(e) {
                const t = this._metaInfo;
                if (!t.bands)
                    return null;
                for (let i = 0; i < t.bands.length; i++) {
                    const t = (0,
                    n.ensureDefined)(this._properties.childs().bands).childs()[i];
                    if (t.childs().visible.value()) {
                        const i = t.childs().value.value();
                        if (e && 0 === i)
                            continue;
                        return i
                    }
                }
                return null
            }
            _prepareInputs(e) {
                (0,
                n.assert)(!!e, "options not set");
                const t = this.metaInfo()
                  , i = {}
                  , s = e.allowedInputTypes ? new Set(e.allowedInputTypes) : null;
                for (let r = 0; r < t.inputs.length; r++) {
                    const n = t.inputs[r];
                    if (null !== s && !s.has(n.type))
                        continue;
                    if (n.isFake && e.skipFakeInputs)
                        continue;
                    if (n.isMTFResolution && e.noResolution)
                        continue;
                    if (e.skipHiddenInputs) {
                        let t = !1;
                        switch (n.type) {
                        case "bool":
                            t = e.skipBooleanInputs;
                            break;
                        case "color":
                            t = e.skipColorInputs;
                            break;
                        case "time":
                            t = e.skipTimeInputs;
                            break;
                        case "text_area":
                            t = e.skipTextareaInputs;
                            break;
                        default:
                            t = Boolean(n.isHidden)
                        }
                        if (t)
                            continue
                    }
                    if (void 0 !== n.groupId && -1 !== e.skippedGroups.indexOf(n.groupId))
                        continue;
                    if (-1 !== e.skippedInputs.indexOf(n.id))
                        continue;
                    const o = this._prepareInput(n, e);
                    "symbol" === n.type && e.skipOptionalEmptySymbolInputs && "" === o || (i[n.id] = (0,
                    k.clone)(o))
                }
                return i
            }
            _getAllOwnerSources() {
                const e = [];
                let t = this.ownerSource();
                for (; null !== t; )
                    e.push(t),
                    t = t.ownerSource();
                return e
            }
            _getStudyIdWithLatestVersion() {
                return m.StudyMetaInfo.getStudyIdWithLatestVersion(this.metaInfo())
            }
            _lastNonEmptyPlotRow(e) {
                var t;
                if (!(0,
                k.isInteger)(e))
                    return Lt.logDebug("_lastNonEmptyPlotRow: incorrect plotIndex"),
                    null;
                let i = null !== (t = this._lastNonEmptyPlotRowCache[e]) && void 0 !== t ? t : null;
                if (null !== i)
                    return i;
                return i = this.data().findLast(((t,i)=>void 0 !== i[e]), 1e3),
                null === i ? null : (this._lastNonEmptyPlotRowCache[e] = i,
                i)
            }
            _onCurrencyChanged() {
                "alwaysOff" !== (0,
                pt.currencyUnitVisibilityProperty)().value() && this._model.fullUpdate(),
                this.isStarted() && this._tryChangeInputs(),
                this._currencyChanged.fire()
            }
            _apiInputs() {
                return this.inputs({
                    keepOptionalSymbolsEmpty: !0
                })
            }
            async _tryChangeInputs() {
                var e;
                const t = this.isStarted() && this._chartApi.isConnected().value();
                if (t && this._allInputsAreValid())
                    try {
                        await this._allSymbolsAreResolved();
                        const e = this._apiInputs()
                          , t = JSON.stringify(e) !== JSON.stringify(this._inputs);
                        if (this._isStopped())
                            return void (t && this.disablePriceRangeReady());
                        t && await this._changeInputsImpl(e, (0,
                        n.ensureDefined)((0,
                        k.clone)(this._inputs)))
                    } catch (e) {
                        Lt.logError(`ERROR: ${this._debugId()} _tryChangeInputs: cannot modify study, ${e}`)
                    }
                else {
                    t && this.stop(!0);
                    const i = this._apiInputs()
                      , s = (0,
                    n.ensureDefined)((0,
                    k.clone)(this._inputs));
                    if (JSON.stringify(i) !== JSON.stringify(this._inputs)) {
                        const t = this._calcSources();
                        if (t.length !== this._sources.length || t[0] !== this._sources[0])
                            await this._rebindToSourceOrRestorePreviousValue(null !== (e = t[0]) && void 0 !== e ? e : this._series, i, s);
                        else {
                            const e = Gt(this._metaInfo, i, s);
                            this._updateParentSources(t, e, !0)
                        }
                        this._inputs = i
                    }
                }
                this._tagsChanged.fire()
            }
            _debugId() {
                const e = [];
                return this._studyId && e.push(this._studyId),
                e.push(this._metaInfo.fullId),
                e.push(this._metaInfo.description),
                JSON.stringify({
                    study: e
                })
            }
            _onCurrencyMayChange() {
                if (null !== this._currencySourceSymbolInputProperty) {
                    const e = this.currency();
                    this._updateCurrencySourceSymbolInfo(),
                    e !== this.currency() && this._onCurrencyChanged()
                }
            }
            _fillPrecalculatedAutoscaleInfo(e, t) {
                const i = this._metaInfo
                  , s = this.properties().childs()
                  , r = new Set
                  , n = this._metaInfo.filledAreas || [];
                for (let e = 0; e < n.length; e++) {
                    const t = n[e];
                    s.filledAreasStyle.childs()[t.id].childs().visible.value() && (r.add(t.objAId),
                    r.add(t.objBId))
                }
                return i.plots.filter((e=>!(0,
                b.isPlotWithTechnicalValues)(e))).filter((e=>r.has(e.id) || this.isPlotVisibleAt(e.id, 1))).reduce(((i,s)=>this._applyPlotToPrecalculatedAutoscaleInfo(e, t, i, s)), {
                    fields: [],
                    useMainSeriesRange: !1,
                    baseValueMinMax: null
                })
            }
            _firstSourceOrSeries() {
                var e;
                return null !== (e = this._sources[0]) && void 0 !== e ? e : this._series
            }
            _skipHistogramBaseOnAutoScale() {
                return !1
            }
            _tryCreateFormatter() {
                let e = this._formatterByProperties();
                return null === e && (e = this._formatterByMetaInfo()),
                e
            }
            async _updateParentSources(e, t, i) {
                if (this._sources.forEach((e=>e.unsetChild(this))),
                i && await Promise.all(e.map((e=>e.isStarted() ? Promise.resolve() : e.start(!1, !0)))),
                e.forEach((e=>e.setChild(this))),
                this._sources = e,
                0 !== t && this._sources.length <= 1) {
                    const e = this._firstSourceOrSeries()
                      , t = this.m_priceScale
                      , i = (0,
                    n.ensureNotNull)(e.priceScale());
                    if (t !== i) {
                        const t = this._model.paneForSource(this)
                          , s = (0,
                        n.ensureNotNull)(this._model.paneForSource(e));
                        t === s && s.move(this, i, !0)
                    }
                }
            }
            _calcSources() {
                const e = this._properties.childs().inputs.state();
                return m.StudyMetaInfo.getSourceIdsByInputs(this._metaInfo.inputs, e).map((e=>{
                    if ("high" === e || "open" === e || "low" === e || "close" === e || "hl2" === e || "ohl3" === e || "ohlc4" === e)
                        return null;
                    {
                        const t = this._model.allStudies().find((t=>t.canHaveChildren() && t.id() === e));
                        return null != t ? t : null
                    }
                }
                )).filter(k.notNull)
            }
            _isStopped() {
                return !this.isStarted()
            }
            _onDataUnpacked(e, t, i, s) {
                if (this._isDestroyed)
                    return;
                "nochange" !== t && this._processPlotOffsets(s),
                this._transformData(e);
                const r = this._mergeData(e);
                null !== s && (s.indexes_replace ? ((0,
                n.assert)("nochange" !== t),
                this._graphics.replaceIndexesTo(t)) : ("nochange" !== t && this._graphics.replaceIndexesTo(t),
                void 0 !== s.graphicsCmds && this._graphics.processCommands(s.graphicsCmds, this._metaInfo.graphics))),
                this._onDataUpdated(e, s, t, r && r.index),
                this.priceRangeReady() || this._enablePriceRangeReady(),
                this._dataUpdated.fire(i, !1, r)
            }
            _processPlotOffsets(e) {
                if (e && e.indexes_replace)
                    return;
                const t = this._plotOffsets;
                this._plotOffsets = e && e.offsets || {},
                (0,
                s.default)(t, this._plotOffsets) || this.updateAllViews((0,
                ct.sourceChangeEvent)({
                    sourceId: this.id(),
                    clearData: !0
                })),
                this._updateMaxOffsetValue()
            }
            _applyPlotToPrecalculatedAutoscaleInfo(e, t, i, s) {
                var r;
                const o = s.id
                  , a = this._properties.childs().styles.childs()[o]
                  , l = (0,
                b.isShapesPlot)(s) || (0,
                b.isCharsPlot)(s);
                i.useMainSeriesRange = i.useMainSeriesRange || (0,
                b.isArrowsPlot)(s);
                let c = (0,
                b.isLinePlot)(s) || (0,
                b.isOhlcPlot)(s);
                if (l) {
                    const e = (0,
                    n.ensureDefined)(a).childs().location.value()
                      , t = [v.MarkLocation.Absolute, v.MarkLocation.Top, v.MarkLocation.Bottom].indexOf(e) < 0;
                    i.useMainSeriesRange = i.useMainSeriesRange || l && t,
                    c = c || e === v.MarkLocation.Absolute
                }
                if (!c)
                    return i;
                const h = {
                    name: o,
                    offset: this.offset(o)
                }
                  , d = a.childs().plottype.value();
                if (!this._skipHistogramBaseOnAutoScale() && [b.LineStudyPlotStyle.Histogram, b.LineStudyPlotStyle.Columns, b.LineStudyPlotStyle.Area].indexOf(d) >= 0) {
                    const s = (0,
                    n.ensureDefined)(null === (r = this._metaInfo.styles) || void 0 === r ? void 0 : r[o]).histogramBase
                      , a = this.data().minMaxOnRangeCached(e, t, [h]);
                    return (0,
                    k.isNumber)(s) && null !== a && (i.baseValueMinMax = (0,
                    _.mergeMinMax)(i.baseValueMinMax, {
                        min: s,
                        max: s
                    }),
                    i.baseValueMinMax = (0,
                    _.mergeMinMax)(i.baseValueMinMax, a)),
                    i
                }
                return i.fields.push(h),
                i
            }
            async _onSourceInputChanged() {
                var e;
                if (!this.isStarted()) {
                    const t = this._calcSources();
                    t[0] !== this._sources[0] && await this._rebindToSource(null !== (e = t[0]) && void 0 !== e ? e : this._series, this._apiInputs())
                }
            }
            async _rebindToSourceOrRestorePreviousValue(e, t, i) {
                let s = !0;
                if (!await this._rebindToSource(e, t)) {
                    const e = this._properties.childs().inputs.state()
                      , r = m.StudyMetaInfo.getSourceIdsByInputs(this._metaInfo.inputs, e)[0];
                    for (const e of Object.keys(i)) {
                        const o = (0,
                        R.getInputValue)(i[e])
                          , a = (0,
                        R.getInputValue)(t[e]);
                        if (i.hasOwnProperty(e) && o !== a && r && (0,
                        k.isString)(a) && 0 === a.indexOf(r)) {
                            const t = (0,
                            n.ensureDefined)(this._properties.childs().inputs.child(e))
                              , r = (0,
                            R.getInputValue)(i[e]);
                            t.setValue(r),
                            s = !1;
                            break
                        }
                    }
                }
                return s
            }
            async _rebindToSource(e, t) {
                const i = this.isStarted() && this._chartApi.isConnected().value();
                i && e instanceof StudyBase && !e.isStarted() && await e.start(!1, !0);
                const s = this._firstSourceOrSeries();
                let r;
                const o = (0,
                k.clone)((0,
                n.ensureDefined)(t))
                  , a = e instanceof StudyBase ? [e, ...this._sources] : this._sources;
                if (i && m.StudyMetaInfo.patchSoSInputs(o, (e=>{
                    var t, i;
                    return null !== (i = null === (t = a.find((t=>t.id() === e))) || void 0 === t ? void 0 : t.sourceId()) && void 0 !== i ? i : null
                }
                )),
                !this.isChildStudy())
                    return Lt.logError("Unable to rebind study to source of this type"),
                    !1;
                {
                    let t;
                    this._sources[0].unsetChild(this);
                    let s = null;
                    if (e === this._model.mainSeries())
                        this._sources = [],
                        this._ownerSource = null,
                        t = this._series.seriesSource().instanceId(),
                        s = 2;
                    else {
                        if (!(e instanceof StudyBase))
                            return Lt.logError("Unable to rebind study to source of this type"),
                            !1;
                        this._ownerSource = e,
                        this._sources = [e],
                        t = e.sourceId(),
                        e.setChild(this),
                        null === t && (r = e)
                    }
                    i && null !== t && (this._incrementTurnaround(),
                    this.disablePriceRangeReady(),
                    this._chartApi.rebindStudy((0,
                    n.ensureNotNull)(this._studyId), this._turnaround, t, this._studyName, o, this._handler, s))
                }
                r && (this.isStarted() && this.stop(),
                r.start(!0)),
                s instanceof StudyBase && s.processHibernate();
                const l = this.m_priceScale
                  , c = (0,
                n.ensureNotNull)(e.priceScale());
                if (l !== c) {
                    const t = this._model.paneForSource(this)
                      , i = (0,
                    n.ensureNotNull)(this._model.paneForSource(e));
                    t === i && i.move(this, c, !0)
                }
                const h = this._firstSourceOrSeries();
                return s.formatterChanged().unsubscribe(this, this._onSourceFormatterChanged),
                h.formatterChanged().subscribe(this, this._onSourceFormatterChanged),
                s.priceStepChanged().unsubscribe(this, this._onSourcePriceStepChanged),
                h.priceStepChanged().subscribe(this, this._onSourcePriceStepChanged),
                s.currencyChanged().unsubscribeAll(this),
                h.currencyChanged().subscribe(this, this._onSourceCurrencyChanged),
                s.unitChanged().unsubscribeAll(this),
                h.unitChanged().subscribe(this, this._onSourceUnitChanged),
                s.priceRangeReadyChanged().unsubscribeAll(this),
                h.priceRangeReadyChanged().subscribe(this, this._onSourcePriceRangeReadyChanged),
                this._recreatePriceFormattingDependencies(),
                !0
            }
            _buildInputs(e) {
                (0,
                n.assert)(!!e, "options not set");
                let t = {};
                try {
                    t = this._prepareInputs(e)
                } catch (e) {
                    Lt.logWarn("Failed to prepare study inputs: " + e)
                }
                if (e.asObject) {
                    const e = {};
                    return Object.keys(t).forEach((i=>{
                        null != t[i] && (e[i] = t[i])
                    }
                    )),
                    e
                }
                {
                    const e = [];
                    return Object.keys(t).forEach((i=>{
                        null != t[i] && e.push(t[i])
                    }
                    )),
                    e
                }
            }
            _prepareInput(e, t) {
                const i = this._prepareInputValue(e, t);
                return !e.isFake || t.fakeInputsForDisplay || t.onlyAtomValues ? i : {
                    v: i,
                    f: !0,
                    t: e.type
                }
            }
            _plotsForAlert() {
                return []
            }
            _dependenciesForAlerts() {
                throw new Error("Not implemented")
            }
            _calcIsActualInterval() {
                const e = this._isActualInterval;
                this._isActualInterval = (0,
                at.isActualInterval)(this._series.intervalObj(), this._properties.childs().intervalsVisibilities),
                e !== this._isActualInterval && (this._onIsActualIntervalChange.fire(),
                this._visibleChanged(),
                this.processHibernate())
            }
            _visibleChanged() {
                this._series.invalidateBarColorerCache()
            }
            _getNonPriceParent() {
                const e = this._sources;
                for (const t of e)
                    if (t instanceof StudyBase) {
                        const e = t.metaInfo();
                        return e.is_price_study && "Compare@tv-basicstudies" !== e.id ? t._getNonPriceParent() : t
                    }
                return null
            }
            _updateInputValue(e, t) {
                const i = this._properties.childs().inputs.childs();
                if (i[t.id])
                    if ("price" === t.type)
                        i[t.id].setValue(e.price);
                    else if ("time" === t.type) {
                        const s = this._model.timeScale().indexToTimePoint(e.index);
                        null !== s && i[t.id].setValue(1e3 * s)
                    }
            }
            _initializeStudyInputsPaneViews() {}
            _updateCurrencySourceSymbolInfo() {
                var e;
                null !== this._currencySourceSymbolInputProperty && (this._currencySourceSymbolInfo = null !== (e = this._resolvedSymbolsByInput[this._currencySourceSymbolInputProperty.value()]) && void 0 !== e ? e : null)
            }
            _initializeCurrencySource() {
                var e, t;
                const i = this.metaInfo()
                  , s = "symbolInputSymbolSource" === (null === (e = i.symbolSource) || void 0 === e ? void 0 : e.type) && (null === (t = i.symbolSource) || void 0 === t ? void 0 : t.inputId)
                  , r = i.inputs.find((e=>e.id === s))
                  , n = "symbol" === (null == r ? void 0 : r.type);
                if ("string" == typeof s && n && i.is_price_study) {
                    const e = this._properties.childs().inputs.childs()[s];
                    void 0 !== e && (e.subscribe(this, this._onCurrencyMayChange),
                    this._currencySourceSymbolInputProperty = e)
                }
            }
            _recreatePaneViews() {
                this.hasBarColorer() && this._model.mainSeries().invalidateBarStylesCache(),
                this._createViews(),
                this.recalculate(),
                this.updateAllViews((0,
                ct.sourceChangeEvent)(this.id()))
            }
            _pinePatchPropsAllowed() {
                return (this.isStarted() || this._metaInfo.inputs.some((e=>"symbol" === e.type))) && !this._restarting
            }
            _pinePatchProps() {
                throw new Error("Not implemented")
            }
            _areStudyInputsModified(e) {
                if (0 === Object.keys(e).length)
                    return !1;
                if (void 0 === this._oldStudyInputs)
                    return !0;
                const t = Object.keys(this._oldStudyInputs);
                (0,
                n.assert)(t.length === Object.keys(e).length, "keys quantity should be equal");
                for (const i of t)
                    if ((0,
                    n.assert)(e.hasOwnProperty(i), `key '${i}' should exist in study inputs`),
                    (0,
                    n.ensureDefined)(this._oldStudyInputs)[i] !== e[i])
                        return !0;
                return !1
            }
            _getStudyErrorText(e) {
                return e.split(":", 2)[0]
            }
            _priceScaleByProperties() {
                if ("default" === this.properties().childs().precision.value())
                    return null;
                const e = parseInt(this.properties().childs().precision.value());
                return isFinite(e) ? Math.pow(10, e) : null
            }
            _priceScaleByMetaInfo() {
                const e = this.metaInfo().format
                  , t = "inherit" !== e.type ? e.precision : void 0
                  , i = (0,
                k.isNumber)(t) ? Math.pow(10, t) : void 0;
                if ("price" === e.type || "percent" === e.type)
                    return i || 100;
                if ("volume" === e.type) {
                    if (void 0 === e.precision) {
                        const e = this.series().symbolInfo();
                        if (null !== e && (0,
                        k.isNumber)(e.volume_precision))
                            return Math.pow(10, e.volume_precision)
                    }
                    return 1
                }
                return "inherit" === e.type || Lt.logWarn("Unsupported format type: " + e.type),
                null
            }
        }
    },

main: (e, t, i) => {
    var libOld = i(704952); // Old Pane renderer library
},


}, e=>{
    e.O(0, [], ()=>{
        e("main");
        return t = "main";
    });
}
]);