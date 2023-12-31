const stdSTBot = { // ST Bot
    name: 'ST Bot',
    metainfo: {
        _metainfoVersion: 51,
        id: 'STBot@tv-basicstudies-1',
        description: 'STBot',
        shortDescription: 'ST Bot',
        isCustomIndicator: 1,        
        format: {
            type: "inherit"
        },
        
        is_hidden_study: 1,
        is_price_study: 1,
        linkedToSeries: 0,

        isTVScript: !1,
        isTVScriptStub: !1,
        scriptIdPart: '',

        plots: [
            {
                id: 'signal_plot_0',
                type: 'ohlc_open',
                target: 'plotcandle_0',
            },
            {
                id: 'signal_plot_1',
                type: 'ohlc_high',
                target: 'plotcandle_0',
            },
            {
                id: 'signal_plot_2',
                type: 'ohlc_low',
                target: 'plotcandle_0',
            },
            {
                id: 'signal_plot_3',
                type: 'ohlc_close',
                target: 'plotcandle_0',
            },
            {
                id: 'signal_plot_4',
                type: 'ohlc_colorer',
                palette: 'signal_palette_0',
                target: 'plotcandle_0',
            },

            {
                'id': 'trend1',
                'type': 'line',
            },
            {
                id: 'trend1_colorer',
                type: 'colorer',
                target: 'trend1',
                palette: 'trend_palette_1',
            },
            {
                'id': 'trend2',
                'type': 'line',
            },
            {
                id: 'trend2_colorer',
                type: 'colorer',
                target: 'trend2',
                palette: 'trend_palette_2',
            },
            {
                'id': 'eHigh',
                'type': 'line',
            },
            {
                id: 'eHigh_colorer',
                type: 'colorer',
                target: 'eHigh',
                palette: 'trend_palette_2',
            },
            {
                'id': 'eLow',
                'type': 'line',
            },
            {
                id: 'eLow_colorer',
                type: 'colorer',
                target: 'eLow',
                palette: 'trend_palette_2',
            },

            {
                id: "BGColorer",
                type: 'bg_colorer',
                palette: 'bg_palette_1',
            },
            {
                'id': 'BUY',
                'type': 'shapes',
            },
            {
                'id': 'SELL',
                'type': 'shapes',
            },
            {
                'id': 'SHORT',
                'type': 'shapes',
            },
            {
                'id': 'COVER',
                'type': 'shapes',
            },
            {
                'id': 'hl2',
                'type': 'line',
            },
        ],

        filledAreas: [
            {
                id: 'fill_0',
                title: 'Cloud',
                objAId: 'trend1',
                objBId: 'trend2',
                type: 'plot_plot',
                palette: 'trend_palette_2',
                isHidden: 1,
            }
        ],

        ohlcPlots: {
            plotcandle_0: {
                title: 'Signal',
            },
        },

        palettes: {
            signal_palette_0: {
                colors: [
                    { name: '1 Color' },
                    { name: '2 Color' },
                    { name: '3 Color' },
                    { name: '4 Color' },
                    { name: '5 Color' },
                    { name: '6 Color' },
                    { name: '7 Color' },
                    { name: '8 Color' },
                    { name: '9 Color' },
                    { name: '10 Color' }
                ]
            },

            trend_palette_1: {
                colors: {
                    0: {
                            name: 'LONG',
                    },
                    1: {
                            name: 'SHORT',
                    },
                },
            },
            trend_palette_2: {
                colors: {
                    0: {
                            name: 'LONG',
                    },
                    1: {
                            name: 'SHORT',
                    },
                },
                valToIndex: {
                    0: 0,
                    1: 1
                }
            },
            pal_cloud: {
                colors: {
                    0: {
                            name: 'LONG',
                    },
                    1: {
                            name: 'SHORT',
                    },
                },
                valToIndex: {
                    0: 0,
                    1: 1
                }
            },
            bg_palette_1 : {
                colors: [
                    { name: 'LONG', color: "rgba(27, 94, 32, 0.2)"},
                    { name: 'SHORT', color: "rgba(128, 63, 63, 0.2)" },
                    { name: 'Normal', color: "#000000" },
                ],
            }
        },

        defaults: {
            ohlcPlots: {
                plotcandle_0: {
                    borderColor: '#000000',
                    color: '#000000',
                    drawBorder: false,
                    drawWick: true,
                    plottype: 'ohlc_candles',
                    visible: true,
                    wickColor: '#737375'
                },
            },
        
            filledAreasStyle: {
                fill_0: {
                    color: '#8C8C8C',
                    transparency: 80,
                    visible: 1,
                }
            },
        
            palettes: {
            
                signal_palette_0: {
                    colors: [
                        { color: '#808080', width: 1, style: 0 },

                        { color: '#00F400', width: 1, style: 0 },
                        { color: '#006C00', width: 1, style: 0 },
                        { color: '#0057AE', width: 1, style: 0 },
                        { color: '#1A8CFF', width: 1, style: 0 },

                        { color: '#FF917D', width: 1, style: 0 },
                        { color: '#FD2600', width: 1, style: 0 },
                        { color: '#891289', width: 1, style: 0 },
                        { color: '#F29FF2', width: 1, style: 0 },
                        { color: '#FFEB3B', width: 1, style: 0 },
                    ]
                },

                trend_palette_1: {
                    colors: {
                        0: {
                            color: '#FA8072',
                            width: 2,
                            style: 0,
                        },
                        1: {
                            color: '#008080',
                            width: 2,
                            style: 0,
                        },
                    },
                },
                trend_palette_2: {
                    colors: {
                        0: {
                            color: '#FA8072',
                            width: 1,
                            style: 0,
                        },
                        1: {
                            color: '#008080',
                            width: 1,
                            style: 0,
                        },
                    },
                },
            },

            styles: {
            
                BGColorer: {
                    visible: 1,
                    transparency: 76,
                },
                BUY: {
                    visible: 1,
                    transparency: 10,
                    color: '#00FF00',
                    textColor: '#FFFFFF',
                    location: 'BelowBar',
                    plottype: 'shape_label_up',
                },

                SELL: {
                    visible: 1,
                    transparency: 10,
                    color: '#FF0000',
                    textColor: '#FFFFFF',
                    location: 'AboveBar',
                    plottype: 'shape_label_down',
                }, 

                SHORT : {
                    visible: 1,
                    transparency: 10,
                    color: '#FF0000',
                    textColor: '#FFFFFF',
                    location: 'AboveBar',
                    plottype: 'shape_label_down',
                }, 

                COVER: {
                    visible: 1,
                    transparency: 10,
                    color: '#00FF00',
                    textColor: '#FFFFFF',
                    location: 'BelowBar',
                    plottype: 'shape_label_up',
                },
            },

            inputs: {
                trend_fast: 14,
                trend_slow: 50,

                signal_fast: 14,
                signal_slow: 26,
                signal_ma: 52,

                power_fast: 14,
                power_slow: 26,
                power_ma: 52,

                volume_fast: 14,
                volume_slow: 26,
                volume_ma: 52,

                stg: 1,
            },
        },
        styles: {
            
            trend1: {
                title : "Trend 1",
                visible: 1,
                plottype: 0,

                color: "#00F000",
                linestyle: 0,
                linewidth: 2,
                transparency: 10,
                trackPrice: false,

                isHidden: 1,
            },
            trend2: {
                title : "Trend 2",
                visible: 1,
                plottype: 0,

                color: "#FA8072",
                linestyle: 0,
                linewidth: 1,
                transparency: 10,
                trackPrice: false,

                isHidden: 1,
            },
            eHigh: {
                title : "High",
                visible: 1,
                plottype: 0,

                color: "#FA8072",
                linestyle: 0,
                linewidth: 1,
                transparency: 10,
                trackPrice: false,

                isHidden: 1,
            },
            eLow: {
                title : "Low",
                visible: 1,
                plottype: 0,

                color: "#008080",
                linestyle: 0,
                linewidth: 1,
                transparency: 10,
                trackPrice: false,

                isHidden: 1,
            },
            
            BGColorer: {
                visible: 1,
                title: "Background",
            },

            BUY: {
                visible: 1,
                title : "Buy",
                plottype: 'shape_label_up',
                size: 'normal',
                text: 'LONG ',

                color: "#4CAF50",
                textColor: "#FFFFFF",   
                linestyle: 0,
                linewidth: 2,
                transparency: 10,
                trackPrice: false,

                isHidden: 0,
            },
            
            SELL: {
                visible: 1,
                title : "Sell",
                plottype: 'shape_label_down',
                size: 'normal',
                text: 'Close ',

                color: "#e88d04",   
                textColor: "#FFFFFF",             
                linestyle: 0,
                linewidth: 2,
                transparency: 10,
                trackPrice: false,

                isHidden: 0,
            },

            SHORT: {
                visible: 1,
                title : "Short",
                plottype: 'shape_label_down',
                size: 'normal',
                text: 'SHORT ',

                color: "#FF5252",   
                textColor: "#FFFFFF",             
                linestyle: 0,
                linewidth: 2,
                transparency: 10,
                trackPrice: false,

                isHidden: 0,
            },

            COVER: {
                visible: 1,
                title : "Cover",
                plottype: 'shape_label_up',
                size: 'normal',
                text: 'Close ',

                color: "#e88d04",
                textColor: "#FFFFFF",   
                linestyle: 0,
                linewidth: 2,
                transparency: 10,
                trackPrice: false,

                isHidden: 0,
            },
            
            
            hl2: {
                title : "HL2",
                visible: 0,
                plottype: 0,

                color: "#00F000",
                linestyle: 0,
                linewidth: 2,
                transparency: 10,
                trackPrice: false,

                isHidden: 1,
            },
        },

        inputs: [
            
            {
                id: "signal_fast",
                name: "Signal Fast",
                defval: 14,
                type: "integer",
                min: 1,
                max: 200
            }, {
                id: "signal_slow",
                name: "Signal Slow",
                defval: 26,
                type: "integer",
                min: 1,
                max: 200
            }, {
                id: "signal_ma",
                name: "Signal MA",
                defval: 52,
                type: "integer",
                min: 1,
                max: 200
            },

            {
                id: "trend_fast",
                name: "Trend Fast",
                defval: 14,
                type: "integer",
                min: 3,
                max: 300
            },{
                id: "trend_slow",
                name: "Trend Slow",
                defval: 50,
                type: "integer",
                min: 3,
                max: 300
            },

            {
                id: "power_fast",
                name: "Power Fast",
                defval: 14,
                type: "integer",
                min: 1,
                max: 200
            }, {
                id: "power_slow",
                name: "Power Slow",
                defval: 26,
                type: "integer",
                min: 1,
                max: 200
            }, {
                id: "power_ma",
                name: "Power MA",
                defval: 52,
                type: "integer",
                min: 1,
                max: 200
            },

            {
                id: "volume_fast",
                name: "Volume Fast",
                defval: 14,
                type: "integer",
                min: 1,
                max: 200
            }, {
                id: "volume_slow",
                name: "Volume Slow",
                defval: 26,
                type: "integer",
                min: 1,
                max: 200
            }, {
                id: "volume_ma",
                name: "Volume MA",
                defval: 52,
                type: "integer",
                min: 1,
                max: 200
            },

            {
                id: "stg",
                name: "Chiến lược",
                defVal: 0,
                type: "integer",
                min: 0,
                max: 4,
            }
        ],
    },

    constructor: function() {

        this.init = function (context, input) {
            context.setMinimumAdditionalDepth(3000);
            this._context = context;
            this._input = input;
            this.stTrend = function() {
                const ctx = this._context, std = PineJS.Std;
                var values = [];
                var iFast = 13;
                var iSlow = 50;
                var symbol;
                var hour, min, minOdd;
                var eh1s, el1s;
        
                var data = {};
                
                var tf0, tf1, tf1_mul;
        
                var h0, H0, h1, H1, eh1, EH1, EH1S,
                    l0, L0, l1, L1, el1, EL1, EL1S,
                    c0, C0, c1h, C1H, c1l, C1L, 
                    rc1h, rc1l, reh1, rel1,
                    eh0, el0, SIDE, side,
                    trend, clr, cloud1, cloud2;
        
                try {
                    symbol = ctx.symbol;
                    hour = isNaN(symbol.time) ? NaN : std.hour(ctx);
                    min = isNaN(symbol.time) ? NaN : std.minute(ctx);
                    //console.log(`${hour}:${min} => ${hour*60+min}`);
                    min = hour*60 + min;
                    tf0 = std.interval(ctx);
                    tf1 = BAlgo.getHigherTimeframe(tf0);
                    if (Number.isInteger(tf1) && tf1<240) {
                        tf1_mul = Math.round(tf1/tf0);
                        if (std.isdwm(ctx)) { // day, week, month
                            minOdd = symbol.index % tf1_mul;
                        } else { // intraday
                            minOdd = min % tf1_mul;
                        }
                    } else if (tf1>=240 || tf1 == "W" || tf1 == "D") {
                        tf1_mul = 5;
                        minOdd = (symbol.index % tf1_mul);
                        //console.log(minOdd);
                    } else {
                        return [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, ];
                    }
        
                    h0 = std.high(ctx);
                    H0 = ctx.new_var(h0);
        
                    h1 = std.highest(H0, tf1_mul);
                    H1 = ctx.new_var(h1);
        
                    eh1 = std.ema(H1, iFast*tf1_mul, ctx);
                    EH1 = ctx.new_var(eh1);
                    
                    EH1S = ctx.new_var(eh1);
                    if (minOdd==0) {
                        EH1S.set((eh1s=eh1));
                    } else {
                        eh1s = std.ref(EH1S, 1);
                        EH1S.set(eh1s);
                    }
        
                    l0 = std.low(ctx);
                    L0 = ctx.new_var(l0);
        
                    l1 = std.lowest(L0, tf1_mul);
                    L1 = ctx.new_var(l1);
        
                    el1 = std.ema(L1, iFast*tf1_mul, ctx);
                    EL1 = ctx.new_var(el1);
        
                    EL1S = ctx.new_var(el1);
                    if (minOdd==0) {
                        EL1S.set((el1s=el1));
                    } else {
                        el1s = std.ref(EL1S, 1);
                        EL1S.set(el1s);
                    }
        
                    c0 = std.close(ctx);
                    C0 = ctx.new_var(c0);
        
                    c1h = std.highest(C0, tf1_mul);
                    C1H = ctx.new_var(c1h);
        
                    c1l = std.lowest(C0, tf1_mul);
                    C1L = ctx.new_var(c1l);
                    
                    rc1h = std.ref(C1H, 1);
                    rc1l = std.ref(C1L, 1);
                    
                    reh1 = std.ref(EH1, 1);
                    rel1 = std.ref(EL1, 1);
        
                    eh0 = std.ema(H0, iSlow, ctx);
                    el0 = std.ema(L0, iSlow, ctx);
        
                    SIDE = ctx.new_var(NaN);
                    side = SIDE.get(1);
                    const o0 = std.open(ctx);
                    var oc2 = (o0+c0)/2;
                    var OC2 = ctx.new_var(oc2);
                    var ma = std.sma(OC2, 5, ctx);
                    var MA = ctx.new_var(ma);
                    var rma = MA.get(1);
        
                    SIDE = ctx.new_var(NaN);
                    side = SIDE.get(1);
        
                    if (ma < el1)
                        side = -1;
                    else if (ma > eh1)
                        side = 1;
                    
                    // update trend side
                    SIDE.set(side);
        
                    trend = isNaN(side) ? NaN : (side > 0 ? el1 : eh1);
                    trend = isNaN(side) ? NaN : (side > 0 ? el1s : eh1s);
                    clr = isNaN(side) ? 0 : (side > 0 ? 1 : 0);
        
                    cloud1 = trend;
                    cloud2 = side>0 ? el0 : eh0;
        
                    data = {
                        side: side,
                        eh1 : eh1,
                        el1 : el1,
        
                        eh1s : eh1s,
                        el1s : el1s,
        
                        eh0 : eh0,
                        el0 : el0
                    };
        
                    values = [cloud1, clr, cloud2, clr, eh0, clr, el0, clr, 
                        side, eh1, el1, eh1s, el1s, eh0, el0, ma];
                } catch (e) { 
                    console.log(e);
                }
        
                return values;        
            };
            this.stPower = function(){
                var std = PineJS.Std;
                var ctx = this._context;
                var hl2, aHL2;
                var rsiFast, fast, Fast, rsiSlow, slow, Slow;
                var f0, s0, f1, s1;
                var o, c;
                
                var result = [NaN, 0, 0];
        
                try {
        
                    var iFast=14;
                    var iSlow=26;
                    var iMA=52;
        
                    std.context_fix(ctx);
                    o = std.open(ctx); 
                    c = std.close(ctx);
        
                    hl2 = std.hl2(ctx);
                    aHL2 = ctx.new_var(hl2);
        
                    rsiFast = std.rsi2(aHL2, iFast, ctx) - 50;
                    fast = std.wma(ctx.new_var(rsiFast), iMA, ctx);
                    Fast = ctx.new_var(fast);
        
                    rsiSlow = std.rsi2(aHL2, iSlow, ctx) - 50;
                    slow = std.wma(ctx.new_var(rsiSlow), iMA, ctx);
                    Slow = ctx.new_var(slow);
        
                    f0 = Fast.get(0); f1 = Fast.get(1);
                    s0 = Slow.get(0); s1 = Slow.get(1);
        
                    var strong_long = (f0>f1 && s0>s1 && f0>0) ? 1 : 0;
                    var weak_long = ((f0 < f1 && s0 > s1 && f0 > 0) || (f0 > f1 && s0 > s1 && f0 < 0 && f0 > s0 )) ? 1 : 0;
                    var strong_short = (f0 < f1 && s0 < s1 && f0 < 0) ? 1 : 0;
                    var weak_short = ((f0 > f1 && f0 < 0 && f0 < s0 ) || (f0 < f1 && s0 < s1 && f0 > 0 && f0 < s0)) ? 1 : 0;
        
                    var color = strong_long ? 0 : weak_long ? 1 : strong_short ? 2 : weak_short ? 3 : 4;
                    
                    result = [slow, color, fast];
                
                } catch (e) {
                    console.log(e);
                }
                return result;
            };
            this.stVolume = function() {
                var std = PineJS.Std;
                var ctx = this._context;
                var ac, aAC;
                var rsiFast, fast, Fast, rsiSlow, slow, Slow;
                var f0, s0, f1, s1;
                var time;
        
                var result = [NaN, 0, 0];
        
                try {
                    var iFast=14; 
                    var iSlow=26; 
                    var iMA=52;
        
                    time = ctx.symbol.time;
        
                    ac = BAlgo.accdist(ctx);
                    aAC = ctx.new_var(ac);
        
                    rsiFast = std.rsi2(aAC, iFast, ctx) - 50;
                    //rsiFast = std.rsi(aAC, iFast) - 50;
                    fast = std.wma(ctx.new_var(rsiFast), iMA, ctx);
                    Fast = ctx.new_var(fast);
        
                    rsiSlow = std.rsi2(aAC, iSlow, ctx) - 50;
                    //rsiSlow = std.rsi(aAC, iSlow) - 50;
                    slow = std.wma(ctx.new_var(rsiSlow), iMA, ctx);
                    Slow = ctx.new_var(slow);
        
                    f0 = Fast.get(0); f1 = Fast.get(1);
                    s0 = Slow.get(0); s1 = Slow.get(1);
        
                    var strong_long = (f0>f1 && s0>s1 && f0>0) ? 1 : 0;
                    var weak_long = ((f0 < f1 && s0 > s1 && f0 > 0) || (f0 > f1 && s0 > s1 && f0 < 0 && f0 > s0 )) ? 1 : 0;
                    var strong_short = (f0 < f1 && s0 < s1 && f0 < 0) ? 1 : 0;
                    var weak_short = ((f0 > f1 && f0 < 0 && f0 < s0 ) || (f0 < f1 && s0 < s1 && f0 > 0 && f0 < s0)) ? 1 : 0;
        
                    var color = strong_long ? 0 : weak_long ? 1 : strong_short ? 2 : weak_short ? 3 : 4;
                    result = [slow, color, fast];
                } catch (e) {
                    console.log(e);
                }
        
                return result;
            };
            this.stSignal = function() {
                var ctx = this._context;
                var std = PineJS.Std;
                var result = [NaN, NaN, NaN, NaN, NaN, NaN, NaN];
        
                var iPeriod, symbol;
                var HH, ii, hi, lo, hl2, vol, aVol, 
                    av, value2, aValue2, hiValue2,
                    va, aHL2, sma1, sma2, ao, a0, a1, aAO, diff,
                    hasho, hashc, hashc1, hashh, hashl,
                    HO1, HC1, dx, clrFin, oref, cref, 
                    clr;
        
                try {
        
                    iPeriod = 50;
        
                    symbol = ctx.symbol;
                    HH = !isNaN(symbol.time) ? std.hour(ctx) : NaN;
                    ii = !isNaN(symbol.time) ? std.minute(ctx) : NaN;
        
                    open = std.open(ctx);
                    close = std.close(ctx);
                    hi = std.high(ctx);
                    lo = std.low(ctx);
                    hl2 = (hi+lo)/2;
                    vol = std.volume(ctx);
        
                    aVol = ctx.new_var(vol);
                    av = std.sum(aVol, 10, ctx) / 10;
        
                    value2 = vol*(hi-lo);
                    aValue2 = ctx.new_var(value2);
        
                    hiValue2 = std.highest(aValue2, 10);
                    va =  (vol>=2*av) || (value2>hiValue2) ? 1 : ((vol>=1.5*av) ? 2 : 0);
        
                    aHL2 = ctx.new_var(hl2);
                    sma1 = std.sma(aHL2, 5, ctx);
                    sma2 = std.sma(aHL2, 34, ctx);
                    
                    ao = sma1 - sma2;
                    aAO = ctx.new_var(ao);
                    
                    a0 = aAO.get(0); a1 = aAO.get(1);
                    diff = a0 - a1;
        
                    // calculate hashc
                    hashc = (open+hi+lo+close)/4;
                    HC1 = ctx.new_var(hashc);
                    
                    // calculate hasho
                    HO1 = ctx.new_var(NaN);
        
                    cref = HO1.get(1);
                    oref = HC1.get(1);
        
                    hasho = isNaN(oref) ? (open+close)/2 : (oref+cref)/2;
                    
                    HO1.set(hasho);
                    
                    // calculate hashc1
                    dx = Math.abs(hashc-hasho)/2;
                    hashc1 = hasho < hashc ? (hashc - dx) : (hashc + dx);
                    
                    // calculate hash high
                    hashh = Math.max(hi, Math.max(hasho, hashc));
        
                    // calculate hash open
                    hashl = Math.min(lo, Math.min(hasho, hashc));
        
                    //console.log(`STSignal, ${HH}:${ii}, ${oref}, ${cref}, ${hasho}, ${hashc}, ${hashc1}, ${hashh}, ${hashl}`);
        
                    clrFin = 0;
        
                    if (ao >= 0) {
                        // BullishStrongLong
                        clr = 1;
                        clrFin = clrFin==0 && diff >= 0 && a0 > a1 && (hashc >= hasho) ? clr : clrFin; // ao tang, n?n tang(ao duong)
        
                        // BullishStrongShort
                        clr = 2;
                        clrFin = clrFin==0 && diff < 0 && a0 < a1 && (hashc1 <= hasho) ? clr : clrFin;// ao gi?m, n?n gi?m (ao duong)
        
                        //BullishWeakLong
                        clr = 3;
                        clrFin = clrFin==0 && diff >= 0 && a0 > a1 && hashc1 <= hasho ? clr : clrFin; // ao tang, n?n tang(ao duong)
        
                        // BullishWeakShort
                        clr = 4;
                        clrFin = clrFin==0 && diff < 0 && a0 < a1 && hashc1 >= hasho ? clr : clrFin; // ao gi?m, n?n gi?m(ao duong)
                    } else if (ao < 0) {
                        // BearishStrongLong
                        clr = 5;
                        clrFin = clrFin==0 && diff < 0 && a0 < a1 && hashc1 >= hasho ? clr : clrFin; // ao gi?m, n?n tang(ao âm)
        
                        // BearishStrongShort
                        clr = 6;
                        clrFin = clrFin==0 && diff < 0 && a0 < a1 && hashc1 <= hasho ? clr : clrFin; // ao gi?m, n?n gi?m
        
                        // BearishWeakLong
                        clr = 7;
                        clrFin = clrFin==0 && diff >= 0 && a0 > a1 && hashc1 <= hasho ? clr : clrFin;// ao tang, n?n gi?m
        
                        // BearishWeakShort
                        clr = 8;
                        clrFin = clrFin==0 && diff >= 0 && a0 > a1 && hashc1 >= hasho ? clr : clrFin; // ao tang, n?n tang
                    }
                    
        
                    result = [hasho, hashh, hashl, hashc1, clrFin, va];
                } catch (e) {
                    console.log(e);
                }
        
                return result;
            };
        };

        this.main = function(context, input) {
            const std = PineJS.Std;
            this._context = context; 
            this._input = input;
            var result = [];

            try {
                const ctx = context;
                
                const retTrend = this.stTrend();

                const retPower = this.stPower();

                const retVolume = this.stVolume();

                const retSignal = this.stSignal();

                for (var i=0; i<5; i++) 
                    result.push(retSignal[i]);

                for (var i=0; i<8; i++)
                    result.push(retTrend[i]);

                const trend = retTrend[8];
                const power = retPower[0];
                const volume = retVolume[0];

                // điều kiện mua/bán
                var side = 0;

                var stgMode = 3;
                
                // load signal judgement from BAlgo
                if (BAlgo.stBotClientSettings) {
                    const clientSettings = BAlgo.stBotClientSettings;
                    stgMode = 0;
                    if (clientSettings.powerSamePhase) {
                        stgMode = stgMode | 1;        
                    } 
                    
                    if (clientSettings.volumeSamePhase) {
                        stgMode = stgMode | 2;
                    }
                }

                const phaseAll = stgMode==3;
                const phaseVolume = stgMode==2;
                const phasePower = stgMode==1;

                if (phaseAll) {
                    if (trend<0 && power<0 && volume<0)
                        side = -1;
                    else if (trend>0 && power>0 && volume>0)
                        side = 1;
                } else if (phaseVolume) {                
                    if (trend<0 && volume<0)
                        side = -1;
                    else if (trend>0 && volume>0)
                        side = 1;
                } else if (phasePower) {                
                    if (trend<0 && power<0)
                        side = -1;
                    else if (trend>0 && power>0)
                        side = 1;
                } else {
                    side = trend;
                }

                const SIDE = ctx.new_var(side);
                const refSide = SIDE.get(1);
                
                // long/short strategy
                var buy=NaN, short=NaN;
                var sell=NaN, cover=NaN

                if (!isNaN(refSide) && !isNaN(side) && refSide!=side) {
                    buy = (side > 0) ? 1 : NaN;
                    sell = (refSide>0 && side==0) ? 1 : NaN;

                    short = (side < 0) ? 1 : NaN;
                    cover = (refSide<0 && side==0) ? 1 : NaN;
                }

                var price = std.close(ctx);
                var buyPrice = buy ? price : NaN;
                var BPRICE = ctx.new_var(buyPrice);
                var shortPrice = short ? price : NaN;
                var SPRICE = ctx.new_var(shortPrice);

                if (side != refSide) {
                    //console.log(side, refSide, long, short);
                }

                const clr_bg = side>0 ? 0 : side<0 ? 1 : 2;
                result.push(clr_bg);

                var longText = buy ? ("LONG \n" + price) : NaN;
                var shortText = short ? ("SHORT \n" + price) : NaN;
                var sellText = sell ? ("Close \n" + price) : NaN;
                var coverText = cover ? ("Close \n" + price) : NaN;

                result.push(longText);
                result.push(sellText);
                result.push(shortText);
                result.push(coverText);

                var h0 = retSignal[0]; // std.high(ctx);
                var l0 = retSignal[3]; // std.low(ctx);
                var hl2 = (h0+l0)*0.5;
                result.push(hl2);

                if ("function" == typeof(BAlgo._onStudyCompleted)) {
                    BAlgo._onStudyCompleted("STBot", this, {
                        trend: retTrend,
                        power: retPower,
                        volume: retVolume,
                        signal: retSignal,
                        longText,
                        sellText,
                        shortText,
                        coverText
                    });
                }

                // update strategy
                var botSignal = buy ? SIGNAL_TYPES.BUY : sell ? SIGNAL_TYPES.SELL : short ? SIGNAL_TYPES.SHORT : cover ? SIGNAL_TYPES.COVER : 0;
                var strend = 0;
                if (botSignal) {
                    if (side == 0) {
                        strend = refSide;
                    } else {
                        strend = side;
                    }
                }

                var time = std.time(ctx); 
                var updateTime = new Date().valueOf();
                var botSignal = {

                    time,
                    index: ctx.symbol.index,
                    updateTime: updateTime,
                    isBarClosed: ctx.symbol.isBarClosed,

                    open : std.open(ctx),
                    high: std.high(ctx),
                    low: std.low(ctx),
                    close: std.close(ctx),
                    volume: std.volume(ctx),

                    trend: strend,
                    signal: botSignal,
                    price: std.close(ctx),
                };

                // update bot result
                //console.debug("New bot result: ", time, botResult);
                Strategy.onBotResult(this.stgName, botSignal);

                // invoke Strategy with signal
                if (buy||sell||short||cover)
                    Strategy.onBotSignal(this.stgName, botSignal);
            
                return result;
            } catch (e) {
                console.log(e);
                return result;
            }
        }
    },
}