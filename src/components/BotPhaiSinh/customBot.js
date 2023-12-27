
const { BAlgo } = __webpack_require__(/*! ../../algorithm */ "./.src/algorithm/index.js");
const { SIGNAL_TYPES, TREND_TYPES } = __webpack_require__(/*! ../../common/consts */ "./.src/common/consts.js");
const { Strategy } = __webpack_require__(/*! ../common */ "./.src/chart/common.js");
const { customStudies } = __webpack_require__(/*! ../studies */ "./.src/chart/studies.js");

const stdSTTrendVolume = { // SmartTrader Trend Volume
    name: "STTrendVolume",
    metainfo: {
        _metainfoVersion: 51,
        id: "STTrendVolume@tv-basicstudies-1",
        description: "STTrendVolume",
        shortDescription: "ST Volume",
        isCustomIndicator: 1,
        format: {
            type: "price",
            precision: 4
        },
        is_hidden_study: 1,
        is_price_study: 0,
        linkedToSeries: 0,

        isTVScript: !1,
        isTVScriptStub: !1,
        transparency: 65,

        defaults: {
            styles: {
                vol: {
                    plottype: 5,
                    linestyle: 0,
                    linewidth: 1,
                    trackPrice: !1,
                    transparency: 10,
                    visible: 1,
                    color: "#000080",
                },
                vol_ma: {
                    plottype: 0,
                    linestyle: 0,
                    linewidth: 1,
                    trackPrice: !1,
                    transparency: 10,
                    visible: 0,
                    color: "#FD0000",
                }
            },
            precision: 0,
            palettes: {
                volumePalette: {
                    colors: {
                        0: {
                            color: "#00FF00",
                            width: 1,
                            style: 0
                        },
                        1: {
                            color: "#1e90ff",
                            width: 1,
                            style: 0
                        },
                        2: {
                            color: "#ff0000",
                            width: 1,
                            style: 0
                        },
                        3: {
                            color: "#e39ff6",
                            width: 1,
                            style: 0
                        },
                        4: {
                            color: "#cfcfcf",
                            width: 1,
                            style: 0
                        }
                    }
                }
            },
            inputs: {
                iFast: 14,
                iSlow: 26,
                iMA: 52
            }
        },
        plots: [{
            id: "vol",
            type: "line"
        }, {
            id: "volumePalette",
            palette: "volumePalette",
            target: "vol",
            type: "colorer"
        }, {
            id: "vol_ma",
            type: "line"
        }],
        styles: {
            vol: {
                title: "Trend Volume",
                histogramBase: 0,
                isHidden : 1,
            },
            vol_ma: {
                title: "Fast",
                histogramBase: 0,
                isHidden : 1,
            }
        },
        palettes: {
            volumePalette: {
                colors: {
                    0: {
                        name: "Strong Long"
                    },
                    1: {
                        name: "Weak Long"
                    },
                    2: {
                        name: "Strong Short"
                    },
                    3: {
                        name: "Weak Short"
                    },
                    4: {
                        name: "Sideway"
                    }
                }
            }
        },

        inputs: [
            {
                id: "iFast",
                name: "Fast",
                defval: 14,
                type: "integer",
                min: 1,
                max: 200
            }, {
                id: "iSlow",
                name: "Slow",
                defval: 26,
                type: "integer",
                min: 1,
                max: 200
            }, {
                id: "iMA",
                name: "MA",
                defval: 52,
                type: "integer",
                min: 1,
                max: 200
            }
        ],
    },
    constructor: function() {
    
        this.init = function (context, input) {
        }

        this.main = function(e, t) {
            this._context = e; this._input = t;
            var result = [];

            try {
                result = BAlgo.stVolume(this._context, this._input);
                return result;
            } catch (e) {
                console.log(e);
                return result;
            }
        }
    }
}; 

const stdSTTrendPower = { // SmartTrader Trend Power
    name: "STTrendPower",
    metainfo: {
        _metainfoVersion: 51,
        id: "STTrendPower@tv-basicstudies-1",
        description: "STTrendPower",
        shortDescription: "ST Power",
        isCustomIndicator: 1,
        format: {
            type: "price",
            precision: 4
        },
        is_hidden_study: 1,
        is_price_study: 0,
        linkedToSeries: 0,

        isTVScript: !1,
        isTVScriptStub: !1,
        transparency: 65,

        plots: [{
            id: "vol",
            type: "line"
        }, {
            id: "volumePalette",
            palette: "volumePalette",
            target: "vol",
            type: "colorer"
        }, {
            id: "vol_ma",
            type: "line"
        }],

        defaults: {
            styles: {
                vol: {
                    plottype: 5,
                    linestyle: 0,
                    linewidth: 1,
                    trackPrice: !1,
                    transparency: 10,
                    visible: 1,
                    color: "#000080"
                },
                vol_ma: {
                    plottype: 0,
                    linestyle: 0,
                    linewidth: 1,
                    trackPrice: !1,
                    transparency: 10,
                    visible: 0,
                    color: "#FD0000"
                }
            },
            precision: 0,
            palettes: {
                volumePalette: {
                    colors: {
                        0: {
                            color: "#00FF00",
                            width: 1,
                            style: 0
                        },
                        1: {
                            color: "#1e90ff",
                            width: 1,
                            style: 0
                        },
                        2: {
                            color: "#ff0000",
                            width: 1,
                            style: 0
                        },
                        3: {
                            color: "#e39ff6",
                            width: 1,
                            style: 0
                        },
                        4: {
                            color: "#cfcfcf",
                            width: 1,
                            style: 0
                        }
                    }
                }
            },
            inputs: {
                iFast: 14,
                iSlow: 26,
                iMA: 52
            }
        },
        styles: {
            vol: {
                title: "Trend Power",
                histogramBase: 0,
                isHidden: 1,
            },
            vol_ma: {
                title: "Fast",
                histogramBase: 0,
                isHidden: 1,
            }
        },
        palettes: {
            volumePalette: {
                colors: {
                    0: {
                        name: "Strong Long"
                    },
                    1: {
                        name: "Weak Long"
                    },
                    2: {
                        name: "Strong Short"
                    },
                    3: {
                        name: "Weak Short"
                    },
                    4: {
                        name: "Sideway"
                    }
                }
            }
        },
        
        inputs: [
            {
                id: "iFast",
                name: "Fast",
                defval: 14,
                type: "integer",
                min: 1,
                max: 200
            }, {
                id: "iSlow",
                name: "Slow",
                defval: 26,
                type: "integer",
                min: 1,
                max: 200
            }, {
                id: "iMA",
                name: "MA",
                defval: 52,
                type: "integer",
                min: 1,
                max: 200
            }
        ],
    },

    constructor: function() {
        this.init = function(context, input) {
        
        }

        this.main = function(e, t) {
            this._context = e; this._input = t;
            var result = [];

            try {
                var ctx = this._context;
                var time = ctx.symbol.time;
                
                result =BAlgo.stPower(this._context, this._input);
                
                return result;
            } catch (e) {
                console.log(e);
                return result;
            }
        }
    }
};

const stdSTSignal = { // ST Signal Colorer
    name: 'ST Signal',
    metainfo: {
        _metainfoVersion: 51,
        id: 'STSignal@tv-basicstudies-1',
        description: 'STSignal',
        shortDescription: 'Signal',
        isCustomIndicator: 1,        
        format: {
            type: "price",
            precision: 4
        },
        
        is_hidden_study: 1,
        is_price_study: 1,
        linkedToSeries: 0,

        isTVScript: !1,
        isTVScriptStub: !1,
        scriptIdPart: '',

        plots: [
            {
                id: 'plot_0',
                type: 'ohlc_open',
                target: 'plotcandle_0',
            },
            {
                id: 'plot_1',
                type: 'ohlc_high',
                target: 'plotcandle_0',
            },
            {
                id: 'plot_2',
                type: 'ohlc_low',
                target: 'plotcandle_0',
            },
            {
                id: 'plot_3',
                type: 'ohlc_close',
                target: 'plotcandle_0',
            },
            {
                id: 'plot_4',
                type: 'ohlc_colorer',
                palette: 'palette_0',
                target: 'plotcandle_0',
            },
        ],

        palettes: {
            palette_0: {
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
            }
        },

        ohlcPlots: {
            plotcandle_0: {
                title: 'Signal',
            },
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


            palettes: {
                palette_0: {
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
                }
            },

            precision: 4,
            inputs: {
                iFast: 14,
                iSlow: 26,
                iMA: 52
            }
        },
        styles: {
        },

        inputs: [
            {
                id: "iFast",
                name: "Fast",
                defval: 14,
                type: "integer",
                min: 1,
                max: 200
            }, {
                id: "iSlow",
                name: "Slow",
                defval: 26,
                type: "integer",
                min: 1,
                max: 200
            }, {
                id: "iMA",
                name: "MA",
                defval: 52,
                type: "integer",
                min: 1,
                max: 200
            }
        ],
    },
    
    constructor: function() {
        this.init = function (context, input) {
            this._context = context;
            this._input = input;
        };

        this.main = function(e, t) {
            this._context = e; this._input = t;
            var result = [];

            try {
                var ctx = this._context;
                var time = ctx.symbol.time;
                var key = "stSignal";   

                result = BAlgo.stSignal(this._context, this._input);

                return result;
            } catch (e) {
                console.log(e);
                return result;
            }
        }
    }
};

const stdSTTrend = { // ST Trend with ema at timeframe0
    name: 'ST Trend',
    metainfo: {
        _metainfoVersion: 51,
        id: 'STTrend@tv-basicstudies-1',
        description: 'STTrend',
        shortDescription: 'ST Trend',
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
                'id': 'trend1',
                'type': 'line',
            },
            {
                id: 'trend1_colorer',
                type: 'colorer',
                target: 'trend1',
                palette: 'paletteId1',
            },
            {
                'id': 'trend2',
                'type': 'line',
            },
            {
                id: 'trend2_colorer',
                type: 'colorer',
                target: 'trend2',
                palette: 'paletteId2',
            },
            {
                'id': 'eHigh',
                'type': 'line',
            },
            {
                id: 'eHigh_colorer',
                type: 'colorer',
                target: 'eHigh',
                palette: 'paletteId2',
            },
            {
                'id': 'eLow',
                'type': 'line',
            },
            {
                id: 'eLow_colorer',
                type: 'colorer',
                target: 'eLow',
                palette: 'paletteId2',
            },
        ],

        filledAreas: [
            {
                id: 'fill_0',
                title: 'Cloud',
                objAId: 'trend1',
                objBId: 'trend2',
                type: 'plot_plot',
                palette: 'paletteId2',
                isHidden: 1,
            }
        ],

        palettes: {
            paletteId1: {
                colors: {
                    0: {
                            name: 'LONG',
                    },
                    1: {
                            name: 'SHORT',
                    },
                },
            },
            paletteId2: {
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
            }
        },
        defaults: {
        
            filledAreasStyle: {
                fill_0: {
                    color: '#8C8C8C',
                    transparency: 80,
                    visible: 1,
                }
            },
        
            palettes: {
                paletteId1: {
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
                paletteId2: {
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
            
            },

            inputs: {
                in_0 : 14,
                in_1 : 50,
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
        },
        inputs: [
            {
                id: "in_0",
                name: "Fast",
                defval: 14,
                type: "integer",
                min: 3,
                max: 300
            },{
                id: "in_1",
                name: "Slow",
                defval: 50,
                type: "integer",
                min: 3,
                max: 300
            }
        ],
    },
    constructor: function() {
  
        this.init = function (context, input) {
            this._context = context;
            this._input = input;
        };

        this.main = function(e, t) {
            this._context = e; this._input = t;
            var retTrend = [];

            try {
                var ctx = this._context;
                var time = ctx.symbol.time;                
                var key = "stTrend";
                
                retTrend = BAlgo.stTrend(this._context, this._input);
                
                return retTrend;
            } catch (e) {
                console.log(e);
                return retTrend;
            }
        }
    }
};

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

            this.stgName = "STAutoBot";  
            Strategy.init(this.stgName);
        };

        this.main = function(context, input) {
            const PineJS = getPineJS();
            const std = PineJS.Std;
            this._context = context; this._input = input;
            var result = [];

            try {
                const ctx = context;
                const inputs = {

                    signal: function (i) {
                        return input(i);
                    },

                    trend: function (i) {
                        return input(i+3);
                    },

                    power: function (i) {
                        return input(i+5);
                    },

                    volume: function (i) {
                        return input(i+8);
                    },

                    strategy: function (i) {
                        return input(i+11);
                    }
                };
                
                const retTrend = BAlgo.stTrend(this._context, inputs.trend);

                const retPower = BAlgo.stPower(this._context, inputs.power);

                const retVolume = BAlgo.stVolume(this._context, inputs.volume);

                const retSignal = BAlgo.stSignal(this._context, inputs.signal);

                for (var i=0; i<5; i++) 
                    result.push(retSignal[i]);

                for (var i=0; i<8; i++)
                    result.push(retTrend[i]);

                const trend = retTrend[8];
                const power = retPower[0];
                const volume = retVolume[0];

                // var time = std.time(ctx);
                // var from = Date.parse("2023-02-15 13:45:00");
                // var to = Date.parse("2023-02-15 13:50:00");

                // if (time>=from && time<=to) {
                //     debugger;

                //     var dt = new Date(time);
                //     console.log(dt, trend, power, volume);
                // }

                // điều kiện mua/bán
                var side = 0;

                var stgMode = inputs.strategy(0);
                
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

    

    findStudy(chart) {
        var studies = chart.getAllStudies();
        var stdName = studies.find(s => s.name == this.name || s.description == this.metainfo.description);
        if (!stdName) {
            console.error(`Study ${this.name} was not found`);
            return null;
        }

        var study = chart.getStudyById(stdName.id);
        if (!study) {
            console.error(`failed to get study instance ${stdName.id}`);
            return null;
        }

        return study;
    },

    getSignal(studyResult) {
        var index = 15;
        var buy = studyResult[index++]; // long text
        var sell = studyResult[index++]; // sell text
        var short = studyResult[index++]; // short text
        var cover = studyResult[index++]; // cover text

        if (buy)
            return SIGNAL_TYPES.BUY;
        else if (sell)
            return SIGNAL_TYPES.SELL;
        else if (short)
            return SIGNAL_TYPES.SHORT;
        else if (cover)
            return SIGNAL_TYPES.COVER;

        return SIGNAL_TYPES.NONE;
    },

    getSignals(chart, allbars=true) {
        try {

            var studyApi = this.findStudy(chart);
            if (!studyApi)  {
                console.error(`Study not found`);
                return [];
            }

            if (studyApi.isLoading())
                return [];

            var dataLength = studyApi.dataLength();
            if (dataLength <= 0)
                return [];

            var study = studyApi._study;
            var studyData = study.data();
            var size = studyData.size();
            var series = study.series();
            var seriesData = series.data();

            var allSignals = [];
            
            // NOTES: starting from the bar before last bar 
            var barMinIndex = Math.max(0, allbars ? 0 : size-2);
            for (var barIndex=size-1; barIndex>=barMinIndex; barIndex--) {
                var bar = seriesData.valueAt(barIndex);
                var studyResult = studyData.valueAt(barIndex);
                
                var side = studyResult[14]; // bgcolorer
                var signal = this.getSignal(studyResult);
                if (signal == SIGNAL_TYPES.NONE)
                    continue;
                
                var time = bar[0]; // time
                var price = bar[4]; // close
                
                var trend = side == 0 ? TREND_TYPES.LONG : side == 1 ? TREND_TYPES.SHORT : TREND_TYPES.NONE;
                
                var signal = new BotSignal( {
                    time: time,
                    index: barIndex,
                    isBarClosed: barIndex < size-1,

                    trend,
                    signal,
                    price,
                });

                allSignals.push(signal);
            }

            return allSignals;
        } catch (e) {
            console.error(e);
            return [];
        }
    }
}

const studies = [
    stdSTBot,
    stdSTSignal,
    stdSTTrend,
    stdSTTrendPower,
    stdSTTrendVolume,
];

if (typeof(customStudies) != 'undefined') {
    for (var s of studies)
        customStudies.push(s);
}

module.exports = {
    stdSTBot,
    stdSTSignal,
    stdSTTrend,
    stdSTTrendPower,
    stdSTTrendVolume,
};
