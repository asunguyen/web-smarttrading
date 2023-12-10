var bot = {
  "panes": [
    {
      "sources": [
        {
          "type": "MainSeries",
          "id": "CuVS36",
          "state": {
            "style": 1,
            "esdShowDividends": true,
            "esdShowSplits": true,
            "esdShowEarnings": true,
            "esdShowBreaks": false,
            "esdBreaksStyle": {
              "color": "rgba( 235, 77, 92, 1)",
              "style": 2,
              "width": 1
            },
            "esdFlagSize": 2,
            "showCountdown": 1,
            "bidAsk": {
              "visible": false,
              "lineStyle": 1,
              "lineWidth": 1,
              "bidLineColor": "#2196F3",
              "askLineColor": "#EF5350"
            },
            "prePostMarket": {
              "visible": true,
              "lineStyle": 1,
              "lineWidth": 1,
              "preMarketColor": "#fb8c00",
              "postMarketColor": "#2196f3"
            },
            "highLowAvgPrice": {
              "highLowPriceLinesVisible": false,
              "highLowPriceLabelsVisible": false,
              "averageClosePriceLineVisible": false,
              "averageClosePriceLabelVisible": false
            },
            "showInDataWindow": true, "visible": true, "showPriceLine": true, "priceLineWidth": 1, "priceLineColor": "", "baseLineColor": "#5d606b", "showPrevClosePriceLine": false, "prevClosePriceLineWidth": 1, "prevClosePriceLineColor": "rgba( 85, 85, 85, 1)", "minTick": "default", "extendedHours": false, "dividendsAdjustment": {}, "sessVis": false, "statusViewStyle": { "fontSize": 16, "showExchange": true, "showInterval": true, "symbolTextSource": "description" }, "candleStyle": { "upColor": "#26a69a", "downColor": "#ef5350", "drawWick": true, "drawBorder": true, "borderColor": "#378658", "borderUpColor": "#26a69a", "borderDownColor": "#ef5350", "wickColor": "#B5B5B8", "wickUpColor": "#26a69a", "wickDownColor": "#ef5350", "barColorsOnPrevClose": false, "drawBody": true }, "hollowCandleStyle": { "upColor": "#26a69a", "downColor": "#ef5350", "drawWick": true, "drawBorder": true, "borderColor": "#378658", "borderUpColor": "#26a69a", "borderDownColor": "#ef5350", "wickColor": "#B5B5B8", "wickUpColor": "#26a69a", "wickDownColor": "#ef5350", "drawBody": true }, "haStyle": { "upColor": "#26a69a", "downColor": "#ef5350", "drawWick": true, "drawBorder": true, "borderColor": "#378658", "borderUpColor": "#26a69a", "borderDownColor": "#ef5350", "wickColor": "#B5B5B8", "wickUpColor": "#26a69a", "wickDownColor": "#ef5350", "showRealLastPrice": false, "barColorsOnPrevClose": false, "inputs": {}, "inputInfo": {}, "drawBody": true }, "barStyle": { "upColor": "#26a69a", "downColor": "#ef5350", "barColorsOnPrevClose": false, "dontDrawOpen": false, "thinBars": true }, "hiloStyle": { "color": "#2196f3", "showBorders": true, "borderColor": "#2196f3", "showLabels": true, "labelColor": "#2196f3", "fontSize": 7, "drawBody": true }, "lineStyle": { "color": "#2196f3", "linestyle": 0, "linewidth": 2, "priceSource": "close", "styleType": 2 }, "areaStyle": { "color1": "rgba(33, 150, 243, 0.28)", "color2": "#2196f3", "linecolor": "#2196f3", "linestyle": 0, "linewidth": 2, "priceSource": "close", "transparency": 100 }, "renkoStyle": { "upColor": "#26a69a", "downColor": "#ef5350", "borderUpColor": "#26a69a", "borderDownColor": "#ef5350", "upColorProjection": "#336854", "downColorProjection": "#7f323f", "borderUpColorProjection": "#336854", "borderDownColorProjection": "#7f323f", "wickUpColor": "#26a69a", "wickDownColor": "#ef5350", "inputs": { "source": "close", "sources": "Close", "boxSize": 3, "style": "ATR", "atrLength": 14, "wicks": true }, "inputInfo": { "source": { "name": "source" }, "sources": { "name": "Source" }, "boxSize": { "name": "Box size" }, "style": { "name": "Style" }, "atrLength": { "name": "ATR length" }, "wicks": { "name": "Wicks" } } }, "pbStyle": { "upColor": "#26a69a", "downColor": "#ef5350", "borderUpColor": "#26a69a", "borderDownColor": "#ef5350", "upColorProjection": "#336854", "downColorProjection": "#7f323f", "borderUpColorProjection": "#336854", "borderDownColorProjection": "#7f323f", "inputs": { "source": "close", "lb": 3 }, "inputInfo": { "source": { "name": "Source" }, "lb": { "name": "Number of line" } } }, "kagiStyle": { "upColor": "#26a69a", "downColor": "#ef5350", "upColorProjection": "#336854", "downColorProjection": "#7f323f", "inputs": { "source": "close", "style": "ATR", "atrLength": 14, "reversalAmount": 1 }, "inputInfo": { "source": { "name": "Source" }, "style": { "name": "Style" }, "atrLength": { "name": "ATR length" }, "reversalAmount": { "name": "Reversal amount" } } },
            "pnfStyle": {
              "upColor": "#26a69a",
              "downColor": "#ef5350",
              "upColorProjection": "#336854",
              "downColorProjection": "#7f323f",
              "inputs": {
                "sources": "Close",
                "reversalAmount": 3,
                "boxSize": 1,
                "style": "ATR",
                "atrLength": 14,
                "oneStepBackBuilding": false
              },
              "inputInfo": {
                "sources": {
                  "name": "Source"
                },
                "boxSize":
                {
                  "name": "Box size"
                },
                "reversalAmount": {
                  "name": "Reversal amount"
                },
                "style": {
                  "name": "Style"
                },
                "atrLength": {
                  "name": "ATR length"
                },
                "oneStepBackBuilding": {
                  "name": "One step back building"
                }
              }
            },
            "baselineStyle": {
              "baselineColor": "rgba( 117, 134, 150, 1)",
              "topFillColor1": "rgba( 38, 166, 154, 0.28)",
              "topFillColor2": "rgba( 38, 166, 154, 0.05)",
              "bottomFillColor1": "rgba( 239, 83, 80, 0.05)",
              "bottomFillColor2": "rgba( 239, 83, 80, 0.28)",
              "topLineColor": "rgba( 38, 166, 154, 1)",
              "bottomLineColor": "rgba( 239, 83, 80, 1)",
              "topLineWidth": 2,
              "bottomLineWidth": 2,
              "priceSource": "close",
              "transparency": 50,
              "baseLevelPercentage": 50
            },
            "rangeStyle": {
              "upColor": "#26a69a",
              "downColor": "#ef5350",
              "thinBars": true,
              "upColorProjection": "#336854",
              "downColorProjection": "#7f323f",
              "inputs": {
                "range": 10,
                "phantomBars": false
              },
              "inputInfo": {
                "range": {
                  "name": "Range"
                },
                "phantomBars": {
                  "name": "Phantom bars"
                }
              }
            },
            "symbol": "VN30F1M",
            "shortName": "VN30F1M",
            "timeframe": "",
            "onWidget": false,
            "interval": "1",
            "unitId": null,
            "currencyId": "VND",
            "priceAxisProperties": {
              "autoScale": true,
              "autoScaleDisabled": false,
              "lockScale": false,
              "percentage": false,
              "percentageDisabled": false,
              "log": false,
              "logDisabled": false,
              "alignLabels": true,
              "isInverted": false,
              "indexedTo100": false
            }
          },
          "zorder": -1,
          "haStyle": {
            "studyId": "BarSetHeikenAshi@tv-basicstudies-60"
          },
          "renkoStyle": {
            "studyId": "BarSetRenko@tv-prostudies-40"
          },
          "pbStyle": {
            "studyId": "BarSetPriceBreak@tv-prostudies-34"
          }, "kagiStyle":
          {
            "studyId": "BarSetKagi@tv-prostudies-34"
          },
          "pnfStyle": {
            "studyId": "BarSetPnF@tv-prostudies-34"
          },
          "rangeStyle": {
            "studyId": "BarSetRange@tv-basicstudies-72"
          }
        },
        {
          "type": "Study",
          "id": "79JGQH",
          "state": {
            "ohlcPlots": {
              "plotcandle_0": {
                "borderColor": "#000000",
                "color": "#000000",
                "drawBorder": false,
                "drawWick": true,
                "plottype": "ohlc_candles",
                "visible": true,
                "wickColor": "#737375",
                "title": "Signal"
              }
            },
            "filledAreasStyle":
            {
              "fill_0": {
                "color": "#8C8C8C",
                "transparency": 80,
                "visible": 1
              }
            },
            "palettes": {
              "signal_palette_0": {
                "colors": {
                  "0": {
                    "color": "#808080",
                    "width": 1,
                    "style": 0,
                    "name": "1 Color"
                  },
                  "1": {
                    "color": "#00F400",
                    "width": 1,
                    "style": 0,
                    "name": "2 Color"
                  },
                  "2": {
                    "color": "#006C00",
                    "width": 1,
                    "style": 0,
                    "name": "3 Color"
                  },
                  "3": {
                    "color": "#0057AE",
                    "width": 1,
                    "style": 0,
                    "name": "4 Color"
                  },
                  "4": {
                    "color": "#1A8CFF",
                    "width": 1,
                    "style": 0,
                    "name": "5 Color"
                  },
                  "5": {
                    "color": "#FF917D",
                    "width": 1,
                    "style": 0,
                    "name": "6 Color"
                  }, "6": {
                    "color": "#FD2600",
                    "width": 1,
                    "style": 0,
                    "name": "7 Color"
                  },
                  "7": {
                    "color": "#891289",
                    "width": 1,
                    "style": 0,
                    "name": "8 Color"
                  },
                  "8": {
                    "color": "#F29FF2",
                    "width": 1,
                    "style": 0,
                    "name": "9 Color"
                  },
                  "9": {
                    "color": "#FFEB3B",
                    "width": 1,
                    "style": 0,
                    "name": "10 Color"
                  }
                }
              },
              "trend_palette_1": {
                "colors": {
                  "0": { "color": "#FA8072", "width": 2, "style": 0, "name": "LONG" },
                  "1": { "color": "#008080", "width": 2, "style": 0, "name": "SHORT" }
                }
              },
              "trend_palette_2": {
                "colors": {
                  "0": { "color": "#FA8072", "width": 1, "style": 0, "name": "LONG" },
                  "1": { "color": "#008080", "width": 1, "style": 0, "name": "SHORT" }
                },
                "valToIndex": { "0": 0, "1": 1 }
              },
              "pal_cloud": {
                "colors": {
                  "0": { "name": "LONG" },
                  "1": { "name": "SHORT" }
                },
                "valToIndex": {
                  "0": 0, "1": 1
                }
              },
              "bg_palette_1": {
                "colors": {
                  "0": { "name": "LONG", "color": "rgba(27, 94, 32, 0.2)" },
                  "1": { "name": "SHORT", "color": "rgba(128, 63, 63, 0.2)" },
                  "2": { "name": "Normal", "color": "#000000" }
                }
              }
            },
            "styles": {
              "BGColorer": {
                "visible": 1, "transparency": 76,
                "color": "#0496ff",
                "linestyle": 0,
                "linewidth": 2,
                "plottype": "bg_colorer",
                "histogramBase": 0,
                "trackPrice": false,
                "joinPoints": false,
                "title": "Background",
                "isHidden": false
              },
              "BUY": {
                "visible": 1,
                "transparency": 10,
                "color": "#4CAF50",
                "textColor": "#FFFFFF",
                "location": "BelowBar",
                "plottype": "shape_label_up",
                "linestyle": 0, "linewidth": 2,
                "histogramBase": 0,
                "trackPrice": false,
                "joinPoints": false,
                "title": "Buy",
                "size": "normal",
                "text": "LONG ",
                "isHidden": false
              },
              "SELL": {
                "visible": 1,
                "transparency": 10,
                "color": "#e88d04",
                "textColor": "#FFFFFF",
                "location": "AboveBar",
                "plottype": "shape_label_down",
                "linestyle": 0, "linewidth": 2,
                "histogramBase": 0,
                "trackPrice": false,
                "joinPoints": false, "title": "Sell", "size": "normal", "text": "Close ", "isHidden": false
              },
              "SHORT": { "visible": 1, "transparency": 10, "color": "#FF5252", "textColor": "#FFFFFF", "location": "AboveBar", "plottype": "shape_label_down", "linestyle": 0, "linewidth": 2, "histogramBase": 0, "trackPrice": false, "joinPoints": false, "title": "Short", "size": "normal", "text": "SHORT ", "isHidden": false },
              "COVER": { "visible": 1, "transparency": 10, "color": "#e88d04", "textColor": "#FFFFFF", "location": "BelowBar", "plottype": "shape_label_up", "linestyle": 0, "linewidth": 2, "histogramBase": 0, "trackPrice": false, "joinPoints": false, "title": "Cover", "size": "normal", "text": "Close ", "isHidden": false }, 
              "signal_plot_0": {
                "visible": true,
                "color": "#0496ff",
                "linestyle": 0,
                "linewidth": 2,
                "plottype": "ohlc_open",
                "histogramBase": 0,
                "transparency": 50,
                "trackPrice": false,
                "joinPoints": false,
                "title": "signal_plot_0"
              },
              "signal_plot_1": {
                "visible": true,
                "color": "#0496ff",
                "linestyle": 0,
                "linewidth": 2,
                "plottype": "ohlc_high",
                "histogramBase": 0,
                "transparency": 50,
                "trackPrice": false,
                "joinPoints": false,
                "title": "signal_plot_1"
              },
              "signal_plot_2": {
                "visible": true,
                "color": "#0496ff",
                "linestyle": 0,
                "linewidth": 2,
                "plottype": "ohlc_low",
                "histogramBase": 0,
                "transparency": 50,
                "trackPrice": false,
                "joinPoints": false,
                "title": "signal_plot_2"
              },
              "signal_plot_3": {
                "visible": true,
                "color": "#0496ff",
                "linestyle": 0,
                "linewidth": 2,
                "plottype": "ohlc_close",
                "histogramBase": 0,
                "transparency": 50,
                "trackPrice": false,
                "joinPoints": false,
                "title": "signal_plot_3"
              },
              "signal_plot_4": {
                "visible": true,
                "color": "#0496ff",
                "linestyle": 0,
                "linewidth": 2,
                "plottype": "ohlc_colorer",
                "histogramBase": 0,
                "transparency": 50,
                "trackPrice": false,
                "joinPoints": false,
                "title": "signal_plot_4"
              },
              "trend1": {
                "visible": 1,
                "color": "#00F000",
                "linestyle": 0,
                "linewidth": 2,
                "plottype": 0,
                "histogramBase": 0,
                "transparency": 10,
                "trackPrice": false,
                "joinPoints": false,
                "title": "Trend 1",
                "isHidden": false
              },
              "trend2": {
                "visible": 1,
                "color": "#FA8072",
                "linestyle": 0,
                "linewidth": 1,
                "plottype": 0,
                "histogramBase": 0,
                "transparency": 10,
                "trackPrice": false,
                "joinPoints": false,
                "title": "Trend 2",
                "isHidden": false
              },
              "eHigh": {
                "visible": 1, "color": "#FA8072",
                "linestyle": 0, "linewidth": 1,
                "plottype": 0, "histogramBase": 0,
                "transparency": 10,
                "trackPrice": false,
                "joinPoints": false,
                "title": "High", "isHidden": false
              },
              "eLow": {
                "visible": 1,
                "color": "#008080",
                "linestyle": 0,
                "linewidth": 1,
                "plottype": 0,
                "histogramBase": 0,
                "transparency": 10,
                "trackPrice": false,
                "joinPoints": false,
                "title": "Low",
                "isHidden": false
              },
              "hl2": {
                "visible": 0,
                "color": "#00F000",
                "linestyle": 0,
                "linewidth": 2,
                "plottype": 0,
                "histogramBase": 0,
                "transparency": 10,
                "trackPrice": false,
                "joinPoints": false,
                "title": "HL2",
                "isHidden": false
              }
            },
            "inputs": {
              "trend_fast": 14,
              "trend_slow": 50,
              "signal_fast": 14,
              "signal_slow": 26,
              "signal_ma": 52,
              "power_fast": 14,
              "power_slow": 26,
              "power_ma": 52,
              "volume_fast": 14,
              "volume_slow": 26,
              "volume_ma": 52,
              "stg": 1
            },
            "precision": "default",
            "bands": {},
            "area": {},
            "graphics": {},
            "showInDataWindow": true,
            "visible": true,
            "showStudyArguments": true,
            "plots": {
              "0": { "id": "signal_plot_0", "type": "ohlc_open", "target": "plotcandle_0" },
              "1": { "id": "signal_plot_1", "type": "ohlc_high", "target": "plotcandle_0" },
              "2": { "id": "signal_plot_2", "type": "ohlc_low", "target": "plotcandle_0" },
              "3": { "id": "signal_plot_3", "type": "ohlc_close", "target": "plotcandle_0" },
              "4": { "id": "signal_plot_4", "type": "ohlc_colorer", "palette": "signal_palette_0", "target": "plotcandle_0" },
              "5": { "id": "trend1", "type": "line" },
              "6": { "id": "trend1_colorer", "type": "colorer", "target": "trend1", "palette": "trend_palette_1" },
              "7": { "id": "trend2", "type": "line" },
              "8": { "id": "trend2_colorer", "type": "colorer", "target": "trend2", "palette": "trend_palette_2" },
              "9": { "id": "eHigh", "type": "line" },
              "10": { "id": "eHigh_colorer", "type": "colorer", "target": "eHigh", "palette": "trend_palette_2" },
              "11": { "id": "eLow", "type": "line" },
              "12": { "id": "eLow_colorer", "type": "colorer", "target": "eLow", "palette": "trend_palette_2" },
              "13": { "id": "BGColorer", "type": "bg_colorer", "palette": "bg_palette_1" },
              "14": { "id": "BUY", "type": "shapes" },
              "15": { "id": "SELL", "type": "shapes" },
              "16": { "id": "SHORT", "type": "shapes" },
              "17": { "id": "COVER", "type": "shapes" },
              "18": { "id": "hl2", "type": "line" }
            },
            "_metainfoVersion": 51,
            "id": "STBot@tv-basicstudies",
            "description": "STBot",
            "shortDescription": "ST Bot",
            "isCustomIndicator": 1,
            "format": { "type": "inherit" },
            "is_hidden_study": false,
            "is_price_study": 1,
            "linkedToSeries": 0,
            "isTVScript": false,
            "isTVScriptStub": false,
            "scriptIdPart": "",
            "filledAreas": {
              "0": { "id": "fill_0", "title": "Cloud", "objAId": "trend1", "objBId": "trend2", "type": "plot_plot", "palette": "trend_palette_2", "isHidden": 1 }
            },
            "inputs_hidden": {
              "0": { "id": "signal_fast", "name": "Signal Fast", "defval": 14, "type": "integer", "min": 1, "max": 200 },
              "1": { "id": "signal_slow", "name": "Signal Slow", "defval": 26, "type": "integer", "min": 1, "max": 200 },
              "2": { "id": "signal_ma", "name": "Signal MA", "defval": 52, "type": "integer", "min": 1, "max": 200 },
              "3": { "id": "trend_fast", "name": "Trend Fast", "defval": 14, "type": "integer", "min": 3, "max": 300 },
              "4": { "id": "trend_slow", "name": "Trend Slow", "defval": 50, "type": "integer", "min": 3, "max": 300 }
            },
            "description_localized": "STBot",
            "shortId": "STBot",
            "packageId": "tv-basicstudies",
            "version": "1", "fullId": "STBot@tv-basicstudies-1",
            "productId": "tv-basicstudies",
            "name": "STBot@tv-basicstudies", "_serverMetaInfoVersion": 51
          },
          "zorder": -2,
          "metaInfo": {
            "palettes": {
              "signal_palette_0": {
                "colors": [
                  { "name": "1 Color" },
                  { "name": "2 Color" },
                  { "name": "3 Color" },
                  { "name": "4 Color" },
                  { "name": "5 Color" },
                  { "name": "6 Color" },
                  { "name": "7 Color" },
                  { "name": "8 Color" },
                  { "name": "9 Color" },
                  { "name": "10 Color" }
                ]
              },
              "trend_palette_1": {
                "colors": {
                  "0": { "name": "LONG" },
                  "1": { "name": "SHORT" }
                }
              },
              "trend_palette_2": {
                "colors": {
                  "0": { "name": "LONG" },
                  "1": { "name": "SHORT" }
                },
                "valToIndex": {
                  "0": 0,
                  "1": 1
                }
              },
              "pal_cloud": {
                "colors": {
                  "0": { "name": "LONG" },
                  "1": { "name": "SHORT" }
                },
                "valToIndex": {
                  "0": 0,
                  "1": 1
                }
              },
              "bg_palette_1": {
                "colors": [
                  { "name": "LONG", "color": "rgba(27, 94, 32, 0.2)" },
                  { "name": "SHORT", "color": "rgba(128, 63, 63, 0.2)" },
                  { "name": "Normal", "color": "#000000" }]
              }
            },
            "inputs": [
              { "id": "signal_fast", "name": "Signal Fast", "defval": 14, "type": "integer", "min": 1, "max": 200 },
              { "id": "signal_slow", "name": "Signal Slow", "defval": 26, "type": "integer", "min": 1, "max": 200 },
              { "id": "signal_ma", "name": "Signal MA", "defval": 52, "type": "integer", "min": 1, "max": 200 },
              { "id": "trend_fast", "name": "Trend Fast", "defval": 14, "type": "integer", "min": 3, "max": 300 },
              { "id": "trend_slow", "name": "Trend Slow", "defval": 50, "type": "integer", "min": 3, "max": 300 },
              { "id": "power_fast", "name": "Power Fast", "defval": 14, "type": "integer", "min": 1, "max": 200 },
              { "id": "power_slow", "name": "Power Slow", "defval": 26, "type": "integer", "min": 1, "max": 200 },
              { "id": "power_ma", "name": "Power MA", "defval": 52, "type": "integer", "min": 1, "max": 200 },
              { "id": "volume_fast", "name": "Volume Fast", "defval": 14, "type": "integer", "min": 1, "max": 200 },
              { "id": "volume_slow", "name": "Volume Slow", "defval": 26, "type": "integer", "min": 1, "max": 200 },
              { "id": "volume_ma", "name": "Volume MA", "defval": 52, "type": "integer", "min": 1, "max": 200 },
              { "id": "stg", "name": "Chi\u1ebfn l\u01b0\u1ee3c", "defVal": 0, "type": "integer", "min": 0, "max": 4 }
            ],
            "plots": [
              { "id": "signal_plot_0", "type": "ohlc_open", "target": "plotcandle_0" },
              { "id": "signal_plot_1", "type": "ohlc_high", "target": "plotcandle_0" },
              { "id": "signal_plot_2", "type": "ohlc_low", "target": "plotcandle_0" },
              { "id": "signal_plot_3", "type": "ohlc_close", "target": "plotcandle_0" },
              { "id": "signal_plot_4", "type": "ohlc_colorer", "palette": "signal_palette_0", "target": "plotcandle_0" },
              { "id": "trend1", "type": "line" },
              { "id": "trend1_colorer", "type": "colorer", "target": "trend1", "palette": "trend_palette_1" },
              { "id": "trend2", "type": "line" },
              { "id": "trend2_colorer", "type": "colorer", "target": "trend2", "palette": "trend_palette_2" },
              { "id": "eHigh", "type": "line" },
              { "id": "eHigh_colorer", "type": "colorer", "target": "eHigh", "palette": "trend_palette_2" },
              { "id": "eLow", "type": "line" },
              { "id": "eLow_colorer", "type": "colorer", "target": "eLow", "palette": "trend_palette_2" },
              { "id": "BGColorer", "type": "bg_colorer", "palette": "bg_palette_1" },
              { "id": "BUY", "type": "shapes" }, { "id": "SELL", "type": "shapes" },
              { "id": "SHORT", "type": "shapes" }, { "id": "COVER", "type": "shapes" },
              { "id": "hl2", "type": "line" }
            ],
            "graphics": {},
            "defaults": {
              "ohlcPlots": {
                "plotcandle_0":
                {
                  "borderColor": "#000000",
                  "color": "#000000",
                  "drawBorder": false,
                  "drawWick": true, "plottype": "ohlc_candles", "visible": true, "wickColor": "#737375"
                }
              }, "filledAreasStyle": { "fill_0": { "color": "#8C8C8C", "transparency": 80, "visible": 1 } }, "palettes": {
                "signal_palette_0": { "colors": [{ "color": "#808080", "width": 1, "style": 0 }, { "color": "#00F400", "width": 1, "style": 0 }, { "color": "#006C00", "width": 1, "style": 0 }, { "color": "#0057AE", "width": 1, "style": 0 }, { "color": "#1A8CFF", "width": 1, "style": 0 }, { "color": "#FF917D", "width": 1, "style": 0 }, { "color": "#FD2600", "width": 1, "style": 0 }, { "color": "#891289", "width": 1, "style": 0 }, { "color": "#F29FF2", "width": 1, "style": 0 }, { "color": "#FFEB3B", "width": 1, "style": 0 }] }, "trend_palette_1": { "colors": { "0": { "color": "#FA8072", "width": 2, "style": 0 }, "1": { "color": "#008080", "width": 2, "style": 0 } } },
                "trend_palette_2": {
                  "colors": {
                    "0": { "color": "#FA8072", "width": 1, "style": 0 },
                    "1": { "color": "#008080", "width": 1, "style": 0 }
                  }
                }
              },
              "styles": {
                "BGColorer": {
                  "visible": 1,
                  "transparency": 76
                },
                "BUY": {
                  "visible": 1,
                  "transparency": 10, "color": "#00FF00", "textColor": "#FFFFFF", "location": "BelowBar", "plottype": "shape_label_up"
                },
                "SELL": { "visible": 1, "transparency": 10, "color": "#FF0000", "textColor": "#FFFFFF", "location": "AboveBar", "plottype": "shape_label_down" },
                "SHORT": { "visible": 1, "transparency": 10, "color": "#FF0000", "textColor": "#FFFFFF", "location": "AboveBar", "plottype": "shape_label_down" },
                "COVER": { "visible": 1, "transparency": 10, "color": "#00FF00", "textColor": "#FFFFFF", "location": "BelowBar", "plottype": "shape_label_up" }
              },
              "inputs": {
                "trend_fast": 14,
                "trend_slow": 50,
                "signal_fast": 14,
                "signal_slow": 26,
                "signal_ma": 52,
                "power_fast": 14,
                "power_slow": 26,
                "power_ma": 52,
                "volume_fast": 14,
                "volume_slow": 26,
                "volume_ma": 52,
                "stg": 1
              }
            },
            "_metainfoVersion": 51,
            "id": "STBot@tv-basicstudies-1",
            "description": "STBot",
            "shortDescription": "ST Bot",
            "isCustomIndicator": 1,
            "format": {
              "type": "inherit"
            },
            "is_hidden_study": false,
            "is_price_study": 1,
            "linkedToSeries": 0,
            "isTVScript": false,
            "isTVScriptStub": false,
            "scriptIdPart": "",
            "filledAreas": [
              {
                "id": "fill_0",
                "title": "Cloud",
                "objAId": "trend1",
                "objBId": "trend2",
                "type": "plot_plot",
                "palette": "trend_palette_2",
                "isHidden": 1
              }
            ],
            "ohlcPlots": {
              "plotcandle_0": {
                "title": "Signal"
              }
            },
            "styles": {
              "trend1": {
                "title": "Trend 1",
                "visible": 1, "plottype": 0, "color": "#00F000", "linestyle": 0, "linewidth": 2, "transparency": 10, "trackPrice": false, "isHidden": false
              },
              "trend2": { "title": "Trend 2", "visible": 1, "plottype": 0, "color": "#FA8072", "linestyle": 0, "linewidth": 1, "transparency": 10, "trackPrice": false, "isHidden": false },
              "eHigh": { "title": "High", "visible": 1, "plottype": 0, "color": "#FA8072", "linestyle": 0, "linewidth": 1, "transparency": 10, "trackPrice": false, "isHidden": false },
              "eLow": { "title": "Low", "visible": 1, "plottype": 0, "color": "#008080", "linestyle": 0, "linewidth": 1, "transparency": 10, "trackPrice": false, "isHidden": false },
              "BGColorer": {
                "visible": 1,
                "title": "Background",
                "isHidden": false
              },
              "BUY": {
                "visible": 1,
                "title": "Buy",
                "plottype": "shape_label_up",
                "size": "normal",
                "text": "LONG ",
                "color": "#4CAF50",
                "textColor": "#FFFFFF",
                "linestyle": 0,
                "linewidth": 2,
                "transparency": 10,
                "trackPrice": false,
                "isHidden": false
              },
              "SELL": {
                "visible": 1,
                "title": "Sell",
                "plottype": "shape_label_down",
                "size": "normal",
                "text": "Close ",
                "color": "#e88d04",
                "textColor": "#FFFFFF",
                "linestyle": 0,
                "linewidth": 2,
                "transparency": 10,
                "trackPrice": false,
                "isHidden": false
              },
              "SHORT": {
                "visible": 1,
                "title": "Short",
                "plottype": "shape_label_down",
                "size": "normal",
                "text": "SHORT ",
                "color": "#FF5252",
                "textColor": "#FFFFFF",
                "linestyle": 0,
                "linewidth": 2,
                "transparency": 10,
                "trackPrice": false,
                "isHidden": false
              },
              "COVER": {
                "visible": 1,
                "title": "Cover",
                "plottype": "shape_label_up",
                "size": "normal",
                "text": "Close ",
                "color": "#e88d04",
                "textColor": "#FFFFFF",
                "linestyle": 0,
                "linewidth": 2,
                "transparency": 10,
                "trackPrice": false,
                "isHidden": false
              },
              "hl2": {
                "title": "HL2",
                "visible": 0,
                "plottype": 0,
                "color": "#00F000",
                "linestyle": 0,
                "linewidth": 2,
                "transparency": 10,
                "trackPrice": false,
                "isHidden": false
              }
            },
            "description_localized": "STBot",
            "shortId": "STBot",
            "packageId": "tv-basicstudies",
            "version": "1",
            "fullId": "STBot@tv-basicstudies-1",
            "productId": "tv-basicstudies",
            "name": "STBot@tv-basicstudies",
            "_serverMetaInfoVersion": 51
          }
        }],
      "leftAxisesState": [],
      "rightAxisesState":
        [
          {
            "state": {
              "id": "qprnZBMF0QJy",
              "m_priceRange": {
                "m_maxValue": 1173.1,
                "m_minValue": 1160.2607174494683
              },
              "m_isAutoScale": true,
              "m_isPercentage": false,
              "m_isIndexedTo100": false,
              "m_isLog": false,
              "m_isLockScale": false,
              "m_isInverted": false,
              "m_height": 386.4,
              "m_topMargin": 0.1,
              "m_bottomMargin": 0.08,
              "alignLabels": true
            }, "sources": ["CuVS36", "79JGQH"]
          }
        ], "overlayPriceScales": {},
      "stretchFactor": 2439.6039603960394,
      "mainSourceId": "CuVS36",
      "priceScaleRatio": null
    },
    {
      "sources": [
        {
          "type": "Study", "id": "v9YHg5", "state": {
            "styles":
              { "vol": { "plottype": 5, "linestyle": 0, "linewidth": 1, "trackPrice": false, "transparency": 10, "visible": 1, "color": "#000080", "histogramBase": 0, "joinPoints": false, "title": "Trend Volume", "isHidden": false }, "vol_ma": { "plottype": 0, "linestyle": 0, "linewidth": 1, "trackPrice": false, "transparency": 10, "visible": 0, "color": "#fd0000", "histogramBase": 0, "joinPoints": false, "title": "Fast", "isHidden": false } }, "precision": "default", "palettes": { "volumePalette": { "colors": { "0": { "color": "#00FF00", "width": 1, "style": 0, "name": "Strong Long" }, "1": { "color": "#1e90ff", "width": 1, "style": 0, "name": "Weak Long" }, "2": { "color": "#ff0000", "width": 1, "style": 0, "name": "Strong Short" }, "3": { "color": "#e39ff6", "width": 1, "style": 0, "name": "Weak Short" }, "4": { "color": "#cfcfcf", "width": 1, "style": 0, "name": "Sideway" } } } }, "inputs": { "iFast": 14, "iSlow": 26, "iMA": 52 }, "bands": {}, "area": {}, "graphics": {}, "showInDataWindow": true, "visible": true, "showStudyArguments": true, "plots": { "0": { "id": "vol", "type": "line" }, "1": { "id": "volumePalette", "palette": "volumePalette", "target": "vol", "type": "colorer" }, "2": { "id": "vol_ma", "type": "line" } }, "_metainfoVersion": 51,
            "id": "STTrendVolume@tv-basicstudies", "description": "STTrendVolume", "shortDescription": "ST Volume", "isCustomIndicator": 1, "format": { "type": "price", "precision": 4 }, "is_hidden_study": false, "is_price_study": 0, "linkedToSeries": 0, "isTVScript": false, "isTVScriptStub": false, "transparency": 65, "inputs_hidden": { "0": { "id": "iFast", "name": "Fast", "defval": 14, "type": "integer", "min": 1, "max": 200 }, "1": { "id": "iSlow", "name": "Slow", "defval": 26, "type": "integer", "min": 1, "max": 200 }, "2": { "id": "iMA", "name": "MA", "defval": 52, "type": "integer", "min": 1, "max": 200 } }, "description_localized": "STTrendVolume", "shortId": "STTrendVolume", "packageId": "tv-basicstudies", "version": "1", "fullId": "STTrendVolume@tv-basicstudies-1", "productId": "tv-basicstudies", "name": "STTrendVolume@tv-basicstudies", "_serverMetaInfoVersion": 51
          }, "zorder": -1, "metaInfo": {
            "palettes": { "volumePalette": { "colors": { "0": { "name": "Strong Long" }, "1": { "name": "Weak Long" }, "2": { "name": "Strong Short" }, "3": { "name": "Weak Short" }, "4": { "name": "Sideway" } } } }, "inputs": [{ "id": "iFast", "name": "Fast", "defval": 14, "type": "integer", "min": 1, "max": 200 }, { "id": "iSlow", "name": "Slow", "defval": 26, "type": "integer", "min": 1, "max": 200 }, { "id": "iMA", "name": "MA", "defval": 52, "type": "integer", "min": 1, "max": 200 }], "plots": [{ "id": "vol", "type": "line" }, { "id": "volumePalette", "palette": "volumePalette", "target": "vol", "type": "colorer" }, { "id": "vol_ma", "type": "line" }], "graphics": {}, "defaults": {
              "styles": { "vol": { "plottype": 5, "linestyle": 0, "linewidth": 1, "trackPrice": false, "transparency": 10, "visible": 1, "color": "#000080" }, "vol_ma": { "plottype": 0, "linestyle": 0, "linewidth": 1, "trackPrice": false, "transparency": 10, "visible": 0, "color": "#FD0000" } }, "precision": 0,
              "palettes": { "volumePalette": { "colors": { "0": { "color": "#00FF00", "width": 1, "style": 0 }, "1": { "color": "#1e90ff", "width": 1, "style": 0 }, "2": { "color": "#ff0000", "width": 1, "style": 0 }, "3": { "color": "#e39ff6", "width": 1, "style": 0 }, "4": { "color": "#cfcfcf", "width": 1, "style": 0 } } } }, "inputs": { "iFast": 14, "iSlow": 26, "iMA": 52 }
            }, "_metainfoVersion": 51, "id": "STTrendVolume@tv-basicstudies-1", "description": "STTrendVolume", "shortDescription": "ST Volume", "isCustomIndicator": 1, "format": { "type": "price", "precision": 4 }, "is_hidden_study": false, "is_price_study": 0, "linkedToSeries": 0, "isTVScript": false, "isTVScriptStub": false, "transparency": 65, "styles": { "vol": { "title": "Trend Volume", "histogramBase": 0, "isHidden": false }, "vol_ma": { "title": "Fast", "histogramBase": 0, "isHidden": false } }, "description_localized": "STTrendVolume", "shortId": "STTrendVolume", "packageId": "tv-basicstudies", "version": "1", "fullId": "STTrendVolume@tv-basicstudies-1", "productId": "tv-basicstudies", "name": "STTrendVolume@tv-basicstudies", "_serverMetaInfoVersion": 51
          }
        }], "leftAxisesState": [], "rightAxisesState": [{ "state": { "id": "TNMlwIWElDGB", "m_priceRange": { "m_maxValue": 5.87568077121377, "m_minValue": -9.281268452410094 }, "m_isAutoScale": true, "m_isPercentage": false, "m_isIndexedTo100": false, "m_isLog": false, "m_isLockScale": false, "m_isInverted": false, "m_height": 130.4, "m_topMargin": 0.1, "m_bottomMargin": 0.08, "alignLabels": true }, "sources": ["v9YHg5"] }], "overlayPriceScales": {}, "stretchFactor": 823.7623762376238, "mainSourceId": "v9YHg5", "priceScaleRatio": null
    }, {
      "sources": [{
        "type": "Study", "id": "q4nwGi", "state": {
          "styles": { "vol": { "plottype": 5, "linestyle": 0, "linewidth": 1, "trackPrice": false, "transparency": 10, "visible": 1, "color": "#000080", "histogramBase": 0, "joinPoints": false, "title": "Trend Power", "isHidden": false }, "vol_ma": { "plottype": 0, "linestyle": 0, "linewidth": 1, "trackPrice": false, "transparency": 10, "visible": 0, "color": "#fd0000", "histogramBase": 0, "joinPoints": false, "title": "Fast", "isHidden": false } }, "precision": "default", "palettes": { "volumePalette": { "colors": { "0": { "color": "#00FF00", "width": 1, "style": 0, "name": "Strong Long" }, "1": { "color": "#1e90ff", "width": 1, "style": 0, "name": "Weak Long" }, "2": { "color": "#ff0000", "width": 1, "style": 0, "name": "Strong Short" }, "3": { "color": "#e39ff6", "width": 1, "style": 0, "name": "Weak Short" }, "4": { "color": "#cfcfcf", "width": 1, "style": 0, "name": "Sideway" } } } }, "inputs": { "iFast": 14, "iSlow": 26, "iMA": 52 }, "bands": {}, "area": {}, "graphics": {}, "showInDataWindow": true, "visible": true, "showStudyArguments": true, "plots": { "0": { "id": "vol", "type": "line" }, "1": { "id": "volumePalette", "palette": "volumePalette", "target": "vol", "type": "colorer" }, "2": { "id": "vol_ma", "type": "line" } }, "_metainfoVersion": 51, "id": "STTrendPower@tv-basicstudies", "description": "STTrendPower", "shortDescription": "ST Power", "isCustomIndicator": 1, "format": { "type": "price", "precision": 4 }, 
          "is_hidden_study": false, "is_price_study": 0, "linkedToSeries": 0, "isTVScript": false, "isTVScriptStub": false, "transparency": 65, "inputs_hidden": { "0": { "id": "iFast", "name": "Fast", "defval": 14, "type": "integer", "min": 1, "max": 200 }, "1": { "id": "iSlow", "name": "Slow", "defval": 26, "type": "integer", "min": 1, "max": 200 }, "2": { "id": "iMA", "name": "MA", "defval": 52, "type": "integer", "min": 1, "max": 200 } }, "description_localized": "STTrendPower", "shortId": "STTrendPower", "packageId": "tv-basicstudies", "version": "1",
          "fullId": "STTrendPower@tv-basicstudies-1", "productId": "tv-basicstudies",
          "name": "STTrendPower@tv-basicstudies", "_serverMetaInfoVersion": 51
        }, "zorder": -1, "metaInfo": {
          "palettes": { "volumePalette": { "colors": { "0": { "name": "Strong Long" }, "1": { "name": "Weak Long" }, "2": { "name": "Strong Short" }, "3": { "name": "Weak Short" }, "4": { "name": "Sideway" } } } }, "inputs": [{ "id": "iFast", "name": "Fast", "defval": 14, "type": "integer", "min": 1, "max": 200 }, { "id": "iSlow", "name": "Slow", "defval": 26, "type": "integer", "min": 1, "max": 200 }, { "id": "iMA", "name": "MA", "defval": 52, "type": "integer", "min": 1, "max": 200 }], "plots": [{ "id": "vol", "type": "line" }, { "id": "volumePalette", "palette": "volumePalette", "target": "vol", "type": "colorer" }, { "id": "vol_ma", "type": "line" }], "graphics": {}, "defaults": { "styles": { "vol": { "plottype": 5, "linestyle": 0, "linewidth": 1, "trackPrice": false, "transparency": 10, "visible": 1, "color": "#000080" }, "vol_ma": { "plottype": 0, "linestyle": 0, "linewidth": 1, "trackPrice": false, "transparency": 10, "visible": 0, "color": "#FD0000" } }, "precision": 0, "palettes": { "volumePalette": { "colors": { "0": { "color": "#00FF00", "width": 1, "style": 0 }, "1": { "color": "#1e90ff", "width": 1, "style": 0 }, "2": { "color": "#ff0000", "width": 1, "style": 0 }, "3": { "color": "#e39ff6", "width": 1, "style": 0 }, "4": { "color": "#cfcfcf", "width": 1, "style": 0 } } } }, "inputs": { "iFast": 14, "iSlow": 26, "iMA": 52 } },
          "_metainfoVersion": 51, "id": "STTrendPower@tv-basicstudies-1", "description": "STTrendPower", "shortDescription": "ST Power", "isCustomIndicator": 1, "format": { "type": "price", "precision": 4 }, "is_hidden_study": false, 
          "is_price_study": 0, "linkedToSeries": 0, "isTVScript": false, "isTVScriptStub": false, "transparency": 65, "styles": { "vol": { "title": "Trend Power", "histogramBase": 0, "isHidden": false }, "vol_ma": { "title": "Fast", "histogramBase": 0, "isHidden": false } }, "description_localized": "STTrendPower", "shortId": "STTrendPower", "packageId": "tv-basicstudies", "version": "1", "fullId": "STTrendPower@tv-basicstudies-1", "productId": "tv-basicstudies", "name": "STTrendPower@tv-basicstudies", "_serverMetaInfoVersion": 51
        }
      }], "leftAxisesState": [], "rightAxisesState": [{ "state": { "id": "UZWfWm1h5wIL", "m_priceRange": { "m_maxValue": 11.902734443908672, "m_minValue": -5.391653163626874 }, "m_isAutoScale": true, "m_isPercentage": false, "m_isIndexedTo100": false, "m_isLog": false, "m_isLockScale": false, "m_isInverted": false, "m_height": 117.6, "m_topMargin": 0.1, "m_bottomMargin": 0.08, "alignLabels": true }, "sources": ["q4nwGi"] }], "overlayPriceScales": {}, "stretchFactor": 736.6336633663366, "mainSourceId": "q4nwGi", "priceScaleRatio": null
    }], "symbol": "VN30F1M", "interval": "1", "version": 2
}