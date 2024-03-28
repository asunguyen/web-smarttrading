<template>
  <div id="tvWidgetContainer" ref="chartContainer" class="TVChartContainer" />
</template>

<script>
import { widget } from "../../assets/charting_library";
// import { UDFCompatibleDatafeed } from '../../assets/datafeeds/udf/lib/udf-compatible-datafeed'
import Datafeed from "@/assets/datafeed.js";
// function getLanguageFromURL() {
//   const regex = new RegExp('[\\?&]lang=([^&#]*)')
//   const results = regex.exec(window.location.search)
//   return results === null
//     ? null
//     : decodeURIComponent(results[1].replace(/\+/g, ' '))
// }
export default {
  name: "TVChartContainerPhaiSinh",
  props: {
    symbol: {
      default: "VN30F1M",
      type: String,
    },
    interval: {
      default: "1",
      type: String,
    },
    libraryPath: {
      default: "/charting_library/",
      type: String,
    },
    chartsStorageUrl: {
      default: "https://api.smtchart.vn/v1/data/ai",
      type: String,
    },
    chartsStorageApiVersion: {
      default: "1.1",
      type: String,
    },
    clientId: {
      default: "smtchart.vn",
      type: String,
    },
    userId: {
      default: localStorage.getItem("iduser") + "_scrape",
      type: String,
    },
    fullscreen: {
      default: false,
      type: Boolean,
    },
    autosize: {
      default: true,
      type: Boolean,
    },
    studiesOverrides: {
      default: () => {},
      type: Object,
    },
  },
  data: function () {
    return {
      scrapeDerivativeIndicators: [
        {
          name: "ST Bot",
          visible: true,
        },
        {
          name: "STTrendPower",
          visible: true,
        },
        {
          name: "STTrendVolume",
          visible: true,
        },
        // ZO TREND ST HTF
        // {
        //   name: "ST HTF",
        //   visible: true, visible: true,
        // },
      ],
    };
  },
  tvWidget: null,
  mounted() {
    const thisVue = this;
    const container = this.$refs.chartContainer;
    const widgetOptions = {
      symbol: this.symbol,
      datafeed: Datafeed,
      locale: "vi",
      timezone: "Asia/Ho_Chi_Minh",
      interval: this.interval,
      container: container,
      container_id: 'tvWidgetContainer',
      library_path: this.libraryPath,
      logo: {
        image: '@/assets/logo-st.png',
        link: 'http://smtchart.vn/'
      },
      theme: 'dark',
      charts_storage_url: this.chartsStorageUrl,
      charts_storage_api_version: this.chartsStorageApiVersion,
      client_id: this.clientId,
      user_id: this.userId,
      auto_save_delay: 5,
      // fullscreen: this.fullscreen,
      autosize: this.autosize,
      // studies_overrides: this.studiesOverrides,
      load_last_chart: true,
      favorites: {},
      resolution: 1,
      saveload_separate_drawings_storage: true,
      chart_template_storage: true,
      use_localstorage_for_settings: true,
      save_chart_properties_to_local_storage: true,
      symbol_search_request_delay:1000,
      widgetbar: {
        details: true,
        news: true,
        watchlist: true,
        datawindow: true
      },
      // overrides: {
      //   "mainSeriesProperties.showCountdown": true,
      //   "paneProperties.backgroundGradientStartColor": "#020024",
      //   "paneProperties.backgroundGradientEndColor": "#4f485e",
      // },
      disabled_features: ['dom_widget'],
      enabled_features: [
        'header_layouttoggle',
        'right_toolbar',
        'trading_account_manager',
        'watchlist_sections',
        'show_last_price_and_change_only_in_series_legend',
        'chart_template_storage',
        'use_localstorage_for_settings',
        'save_chart_properties_to_local_storage'
      ],
      custom_indicators_getter: function (PineJS) {
        return Promise.resolve([
          // st bot
          {
            // ST Bot
            name: "ST Bot",
            metainfo: {
              _metainfoVersion: 51,
              id: "ST Bot@tv-basicstudies-1",
              description: "ST Bot",
              shortDescription: "ST Bot",
              isCustomIndicator: true,
              format: {
                type: "price",
                precision: 2,
              },

              is_hidden_study: true,
              is_price_study: true,
              linkedToSeries: true,

              isTVScript: false,
              isTVScriptStub: false,
              scriptIdPart: "",

              plots: [
                {
                  id: "signal_plot_0",
                  type: "ohlc_open",
                  target: "plotcandle_0",
                },
                {
                  id: "signal_plot_1",
                  type: "ohlc_high",
                  target: "plotcandle_0",
                },
                {
                  id: "signal_plot_2",
                  type: "ohlc_low",
                  target: "plotcandle_0",
                },
                {
                  id: "signal_plot_3",
                  type: "ohlc_close",
                  target: "plotcandle_0",
                },
                {
                  id: "signal_plot_4",
                  type: "ohlc_colorer",
                  palette: "signal_palette_0",
                  target: "plotcandle_0",
                },

                {
                  id: "trend1",
                  type: "line",
                },
                {
                  id: "trend1_colorer",
                  type: "colorer",
                  target: "trend1",
                  palette: "trend_palette_1",
                },
                {
                  id: "trend2",
                  type: "line",
                },
                {
                  id: "trend2_colorer",
                  type: "colorer",
                  target: "trend2",
                  palette: "trend_palette_2",
                },
                {
                  id: "eHigh",
                  type: "line",
                },
                {
                  id: "eHigh_colorer",
                  type: "colorer",
                  target: "eHigh",
                  palette: "trend_palette_2",
                },
                {
                  id: "eLow",
                  type: "line",
                },
                {
                  id: "eLow_colorer",
                  type: "colorer",
                  target: "eLow",
                  palette: "trend_palette_2",
                },

                {
                  id: "BGColorer",
                  type: "bg_colorer",
                  palette: "bg_palette_1",
                },
                {
                  id: "BUY",
                  type: "shapes",
                },
                {
                  id: "SELL",
                  type: "shapes",
                },
                {
                  id: "SHORT",
                  type: "shapes",
                },
                {
                  id: "COVER",
                  type: "shapes",
                },
                {
                  id: "hl2",
                  type: "line",
                },
                {
                  id: "plot_bar_color",
                  type: "ohlc_colorer",
                  palette: "palette_bar",
                  target: "plot_candle",
                },
                {
                  id: "plot_wick_color",
                  type: "wick_colorer",
                  palette: "palette_wick",
                  target: "plot_candle",
                },
                {
                  id: "plot_border_color",
                  type: "border_colorer",
                  palette: "palette_border",
                  target: "plot_candle",
                },
                // plot htf
                {
                  id: "plot_0",
                  type: "line",
                },
                {
                  id: "plot_1",
                  type: "line",
                },
                {
                  id: "plot_2",
                  type: "line",
                },
                {
                  id: "plot_3",
                  type: "line",
                },
                {
                  id: "trend1_colorer1",
                  type: "colorer",
                  target: "plot_3",
                  palette: "trend_palette_3",
                },
              ],

              filledAreas: [
                {
                  id: "fill_0",
                  title: "Cloud",
                  objAId: "trend1",
                  objBId: "trend2",
                  type: "plot_plot",
                  palette: "trend_palette_2",
                  isHidden: 0,
                },
              ],

              ohlcPlots: {
                plotcandle_0: {
                  title: "Signal",
                },
              },

              palettes: {
                palette_bar: {
                  colors: [
                    { name: "Bullish Strong Long" },
                    { name: "Bullish Strong Short" },
                    { name: "Bullish Weak Long" },
                    { name: "Bullish Weak Short" },
                    { name: "Bearish Strong Long" },
                    { name: "Bearish Strong Short" },
                    { name: "Bearish Weak Long" },
                    { name: "Bearish Weak Short" },
                    { name: "Candle Color" },
                  ],

                  valToIndex: {
                    0: 0,
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4,
                    5: 5,
                    6: 6,
                    7: 7,
                    8: 8,
                  },
                },
                palette_wick: {
                  colors: [
                    { name: "Bullish Strong Long" },
                    { name: "Bullish Strong Short" },
                    { name: "Bullish Weak Long" },
                    { name: "Bullish Weak Short" },
                    { name: "Bearish Strong Long" },
                    { name: "Bearish Strong Short" },
                    { name: "Bearish Weak Long" },
                    { name: "Bearish Weak Short" },
                    { name: "Candle Color" },
                  ],

                  valToIndex: {
                    0: 0,
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4,
                    5: 5,
                    6: 6,
                    7: 7,
                    8: 8,
                  },
                },
                palette_border: {
                  colors: [
                    { name: "Bullish Strong Long" },
                    { name: "Bullish Strong Short" },
                    { name: "Bullish Weak Long" },
                    { name: "Bullish Weak Short" },
                    { name: "Bearish Strong Long" },
                    { name: "Bearish Strong Short" },
                    { name: "Bearish Weak Long" },
                    { name: "Bearish Weak Short" },
                    { name: "Candle Color" },
                  ],

                  valToIndex: {
                    0: 0,
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4,
                    5: 5,
                    6: 6,
                    7: 7,
                    8: 8,
                  },
                },
                signal_palette_0: {
                  colors: [
                    { name: "1 Color" },
                    { name: "2 Color" },
                    { name: "3 Color" },
                    { name: "4 Color" },
                    { name: "5 Color" },
                    { name: "6 Color" },
                    { name: "7 Color" },
                    { name: "8 Color" },
                    { name: "9 Color" },
                    { name: "10 Color" },
                  ],
                },

                trend_palette_1: {
                  colors: {
                    0: {
                      name: "LONG",
                    },
                    1: {
                      name: "SHORT",
                    },
                  },
                },
                trend_palette_2: {
                  colors: {
                    0: {
                      name: "LONG",
                    },
                    1: {
                      name: "SHORT",
                    },
                  },
                  valToIndex: {
                    0: 0,
                    1: 1,
                  },
                },
                fill_0: {
                  colors: {
                    0: {
                      name: "LONG",
                    },
                    1: {
                      name: "SHORT",
                    },
                  },
                  valToIndex: {
                    0: 0,
                    1: 1,
                  },
                },
                bg_palette_1: {
                  colors: [
                    { name: "LONG", color: "rgba(27, 94, 32, 0.2)" },
                    { name: "SHORT", color: "rgba(128, 63, 63, 0.2)" },
                    { name: "Normal", color: "#000000" },
                  ],
                },
                trend_palette_3: {
                  colors: {
                    0: {
                      name: "LONG",
                    },
                    1: {
                      name: "SHORT",
                    },
                  },
                },
              },

              defaults: {
                ohlcPlots: {
                  plotcandle_0: {
                    borderColor: "#000000",
                    color: "#000000",
                    drawBorder: false,
                    drawWick: true,
                    plottype: "ohlc_candles",
                    visible: true,
                    wickColor: "#737375",
                  },
                },

                filledAreasStyle: {
                  fill_0: {
                    color: "#8C8C8C",
                    transparency: 80,
                    visible: 1,
                  },
                },

                palettes: {
                  signal_palette_0: {
                    colors: [
                      { color: "#808080", width: 1, style: 0 },

                      { color: "#00F400", width: 1, style: 0 },
                      { color: "#006C00", width: 1, style: 0 },
                      { color: "#0057AE", width: 1, style: 0 },
                      { color: "#1A8CFF", width: 1, style: 0 },

                      { color: "#FF917D", width: 1, style: 0 },
                      { color: "#FD2600", width: 1, style: 0 },
                      { color: "#891289", width: 1, style: 0 },
                      { color: "#F29FF2", width: 1, style: 0 },
                      { color: "#FFEB3B", width: 1, style: 0 },
                    ],
                  },

                  trend_palette_1: {
                    colors: {
                      0: {
                        color: "#FA8072",
                        width: 2,
                        style: 0,
                      },
                      1: {
                        color: "#008080",
                        width: 2,
                        style: 0,
                      },
                    },
                  },
                  trend_palette_2: {
                    colors: {
                      0: {
                        color: "#FA8072",
                        width: 1,
                        style: 0,
                      },
                      1: {
                        color: "#008080",
                        width: 1,
                        style: 0,
                      },
                    },
                  },
                  palette_bar: {
                    colors: [
                      { color: "#00F400", width: 1, style: 0 },
                      { color: "#006C00", width: 1, style: 0 },
                      { color: "#0057AE", width: 1, style: 0 },
                      { color: "#1A8CFF", width: 1, style: 0 },
                      { color: "#FF917D", width: 1, style: 0 },
                      { color: "#FD2600", width: 1, style: 0 },
                      { color: "#891289", width: 1, style: 0 },
                      { color: "#F29FF2", width: 1, style: 0 },
                      { color: "#FFEB3B", width: 1, style: 0 },
                    ],
                  },
                  palette_wick: {
                    colors: [
                      { color: "#00F400" },
                      { color: "#006C00" },
                      { color: "#0057AE" },
                      { color: "#1A8CFF" },
                      { color: "#FF917D" },
                      { color: "#FD2600" },
                      { color: "#891289" },
                      { color: "#F29FF2" },
                      { color: "#FFEB3B" },
                    ],
                  },
                  palette_border: {
                    colors: [
                      { color: "#00F400" },
                      { color: "#006C00" },
                      { color: "#0057AE" },
                      { color: "#1A8CFF" },
                      { color: "#FF917D" },
                      { color: "#FD2600" },
                      { color: "#891289" },
                      { color: "#F29FF2" },
                      { color: "#FFEB3B" },
                    ],
                  },
                  trend_palette_3: {
                    colors: {
                      0: {
                        color: "#FF0000",
                        width: 2,
                        style: 0,
                      },
                      1: {
                        color: "#00FF00",
                        width: 2,
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
                    color: "#00FF00",
                    textColor: "#FFFFFF",
                    location: "BelowBar",
                    plottype: "shape_label_up",
                  },

                  SELL: {
                    visible: 1,
                    transparency: 10,
                    color: "#ff720b",
                    textColor: "#FFFFFF",
                    location: "AboveBar",
                    plottype: "shape_label_down",
                  },

                  SHORT: {
                    visible: 1,
                    transparency: 10,
                    color: "#FF0000",
                    textColor: "#FFFFFF",
                    location: "AboveBar",
                    plottype: "shape_label_down",
                  },

                  COVER: {
                    visible: 1,
                    transparency: 10,
                    color: "#ff720b",
                    textColor: "#FFFFFF",
                    location: "BelowBar",
                    plottype: "shape_label_up",
                  },
                  // htf
                  plot_0: {
                    linestyle: 0,
                    visible: false,
                    linewidth: 1,
                    plottype: 0,
                    trackPrice: false,
                    transparency: 0,
                    color: "#008FFF",
                  },
                  plot_1: {
                    linestyle: 0,
                    visible: false,
                    linewidth: 1,
                    plottype: 0,
                    trackPrice: false,
                    transparency: 0,
                    color: "#04FF00",
                  },
                  plot_2: {
                    linestyle: 0,
                    visible: false,
                    linewidth: 1,
                    plottype: 0,
                    trackPrice: false,
                    transparency: 0,
                    color: "#FF0000",
                  },
                },

                inputs: {
                  trend_fast: 13,
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
                  title: "Trend 1",
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
                  title: "Trend 2",
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
                  title: "High",
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
                  title: "Low",
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
                  title: "Buy",
                  plottype: "shape_label_up",
                  size: "normal",
                  text: "LONG ",

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
                  title: "Sell",
                  plottype: "shape_label_down",
                  size: "normal",
                  text: "Close ",

                  color: "#ff720b",
                  textColor: "#FFFFFF",
                  linestyle: 0,
                  linewidth: 2,
                  transparency: 10,
                  trackPrice: false,

                  isHidden: 0,
                },

                SHORT: {
                  visible: 1,
                  title: "Short",
                  plottype: "shape_label_down",
                  size: "normal",
                  text: "SHORT ",

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
                  title: "Cover",
                  plottype: "shape_label_up",
                  size: "normal",
                  text: "Close ",

                  color: "#ff720b",
                  textColor: "#FFFFFF",
                  linestyle: 0,
                  linewidth: 2,
                  transparency: 10,
                  trackPrice: false,

                  isHidden: 0,
                },

                hl2: {
                  title: "HL2",
                  visible: 0,
                  plottype: 0,

                  color: "#00F000",
                  linestyle: 0,
                  linewidth: 2,
                  transparency: 10,
                  trackPrice: false,

                  isHidden: 1,
                },
                // stype htf
                plot_0: {
                  title: "Trend MTF",
                  histogramBase: 1,
                  linestyle: 2,
                  linewidth: 2,
                  transparency: 10,
                  trackPrice: false,

                  isHidden: 1,
                },
                plot_1: {
                  title: "Current Trend TF",
                  histogramBase: 1,
                  linestyle: 2,
                  linewidth: 3,
                  transparency: 10,
                  trackPrice: false,

                  isHidden: 1,
                },
                plot_2: {
                  title: "High IZE Trend",
                  histogramBase: 1,
                  linestyle: 2,
                  linewidth: 2,
                  transparency: 10,
                  trackPrice: false,

                  isHidden: 1,
                },
                plot_3: {
                  title: "Low IZE Trend",
                  histogramBase: 1,
                  linestyle: 2,
                  linewidth: 2,
                  transparency: 10,
                  trackPrice: false,

                  isHidden: 1,
                },
              },
              inputs: [],
            },

            constructor: function () {
              this.init = function (context, input) {
                context.setMinimumAdditionalDepth(3000);
                this._context = context;
                this._input = input;
                this.getHigherTimeframe = function (period) {
                  period = parseInt(period);

                  if (period == 1) {
                    return 5;
                  } else if (period == 3) {
                    return 10;
                  } else if (period == 5) {
                    return 30;
                  } else if (period == 10) {
                    return 30;
                  } else if (period == 15) {
                    return 60;
                  } else if (period == 30) {
                    return 120;
                  } else if (period == 60) {
                    return 180;
                  } else if (period == 240) {
                    return "D";
                  }

                  return NaN;
                };
                this.getNextFrame = function (period) {
                  period = parseInt(period);

                  if (period == 1) {
                    return 5;
                  } else if (period == 5) {
                    return 30;
                  } else if (period == 30) {
                    return 60;
                  } else if (period == 15) {
                    return 60;
                  } else if (period == 60) {
                    return 240;
                  } else if (period == 240) {
                    return "D";
                  }else if (period == "D") {
                    return "W";
                  }else if (period == "W") {
                    return "M";
                  }

                  return period;
                };
                this.stTrend = function () {
                  PineJS.Std.ref = function (e, periods) {
                    return e.get(periods);
                  };
                  const ctx = this._context;
                  const std = PineJS.Std;

                  var values = [];
                  var iFast = 13;
                  var iSlow = 50;
                  var symbol;
                  var hour, min, minOdd;
                  var eh1s, el1s;

                  var data = {};

                  var tf0, tf1, tf1_mul;

                  var h0,
                    H0,
                    h1,
                    H1,
                    eh1,
                    EH1,
                    EH1S,
                    l0,
                    L0,
                    l1,
                    L1,
                    el1,
                    EL1,
                    EL1S,
                    c0,
                    C0,
                    c1h,
                    C1H,
                    c1l,
                    C1L,
                    rc1h,
                    rc1l,
                    reh1,
                    rel1,
                    eh0,
                    el0,
                    SIDE,
                    side,
                    trend,
                    clr,
                    cloud1,
                    cloud2;

                  try {
                    symbol = ctx.symbol;
                    hour = isNaN(symbol.time) ? NaN : std.hour(ctx);
                    min = isNaN(symbol.time) ? NaN : std.minute(ctx);
                    // console.log(`${hour}:${min} => ${hour*60+min}`);
                    min = hour * 60 + min;
                    tf0 = std.interval(ctx);
                    tf1 = this.getHigherTimeframe(tf0);
                    if (Number.isInteger(tf1) && tf1 < 240) {
                      tf1_mul = Math.round(tf1 / tf0);
                      if (std.isdwm(ctx)) {
                        // day, week, month
                        minOdd = symbol.index % tf1_mul;
                      } else {
                        // intraday
                        minOdd = min % tf1_mul;
                      }
                    } else if (tf1 >= 240 || tf1 == "W" || tf1 == "D") {
                      tf1_mul = 5;
                      minOdd = symbol.index % tf1_mul;
                      // console.log(minOdd);
                    } else {
                      return [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
                    }
                    h0 = std.high(ctx);
                    H0 = ctx.new_var(h0);

                    h1 = std.highest(H0, tf1_mul);
                    H1 = ctx.new_var(h1);

                    eh1 = std.ema(H1, iFast * tf1_mul, ctx);
                    EH1 = ctx.new_var(eh1);

                    EH1S = ctx.new_var(eh1);
                    if (minOdd == 0) {
                      EH1S.set((eh1s = eh1));
                    } else {
                      eh1s = std.ref(EH1S, 1);
                      EH1S.set(eh1s);
                    }

                    l0 = std.low(ctx);
                    L0 = ctx.new_var(l0);

                    l1 = std.lowest(L0, tf1_mul);
                    L1 = ctx.new_var(l1);

                    el1 = std.ema(L1, iFast * tf1_mul, ctx);
                    EL1 = ctx.new_var(el1);

                    EL1S = ctx.new_var(el1);
                    if (minOdd == 0) {
                      EL1S.set((el1s = el1));
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
                    var oc2 = (o0 + c0) / 2;
                    var OC2 = ctx.new_var(oc2);
                    var ma = std.sma(OC2, 5, ctx);
                    var MA = ctx.new_var(ma);
                    var rma = MA.get(1);

                    SIDE = ctx.new_var(NaN);
                    side = SIDE.get(1);

                    if (ma < el1) side = -1;
                    else if (ma > eh1) side = 1;

                    // update trend side
                    SIDE.set(side);

                    trend = isNaN(side) ? NaN : side > 0 ? el1 : eh1;
                    trend = isNaN(side) ? NaN : side > 0 ? el1s : eh1s;
                    clr = isNaN(side) ? 0 : side > 0 ? 1 : 0;

                    cloud1 = trend;
                    cloud2 = side > 0 ? el0 : eh0;

                    data = {
                      side: side,
                      eh1: eh1,
                      el1: el1,

                      eh1s: eh1s,
                      el1s: el1s,

                      eh0: eh0,
                      el0: el0,
                    };

                    values = [
                      cloud1,
                      clr,
                      cloud2,
                      clr,
                      eh0,
                      clr,
                      el0,
                      clr,
                      side,
                      eh1,
                      el1,
                      eh1s,
                      el1s,
                      eh0,
                      el0,
                      ma,
                    ];
                  } catch (e) {
                    console.log(e);
                  }

                  return values;
                };
                this.stTrendHTF = function () {
                  PineJS.Std.ref = function (e, periods) {
                    return e.get(periods);
                  };
                  const ctx = this._context;
                  const std = PineJS.Std;

                  var values = [];
                  var iFast = 13;
                  var iSlow = 50;
                  var symbol;
                  var hour, min, minOdd;
                  var eh1s, el1s;

                  var data = {};

                  var tf0, tf1, tf1_mul;

                  var h0,
                    H0,
                    h1,
                    H1,
                    eh1,
                    EH1,
                    EH1S,
                    l0,
                    L0,
                    l1,
                    L1,
                    el1,
                    EL1,
                    EL1S,
                    c0,
                    C0,
                    c1h,
                    C1H,
                    c1l,
                    C1L,
                    rc1h,
                    rc1l,
                    reh1,
                    rel1,
                    eh0,
                    el0,
                    SIDE,
                    side,
                    trend,
                    clr,
                    cloud1,
                    cloud2;

                  try {
                    symbol = ctx.symbol;
                    hour = isNaN(symbol.time) ? NaN : std.hour(ctx);
                    min = isNaN(symbol.time) ? NaN : std.minute(ctx);
                    // console.log(`${hour}:${min} => ${hour*60+min}`);
                    min = hour * 60 + min;
                    tf0 = std.interval(ctx);
                    tf1 = this.getNextFrame(this.getNextFrame(tf0));
                    if (Number.isInteger(tf1) && tf1 < 240) {
                      tf1_mul = Math.round(tf1 / tf0);
                      if (std.isdwm(ctx)) {
                        // day, week, month
                        minOdd = symbol.index % tf1_mul;
                      } else {
                        // intraday
                        minOdd = min % tf1_mul;
                      }
                    } else if (tf1 >= 240 || tf1 == "W" || tf1 == "D") {
                      tf1_mul = 5;
                      minOdd = symbol.index % tf1_mul;
                      // console.log(minOdd);
                    } else {
                      return [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
                    }
                    h0 = std.high(ctx);
                    H0 = ctx.new_var(h0);

                    h1 = std.highest(H0, tf1_mul);
                    H1 = ctx.new_var(h1);

                    eh1 = std.ema(H1, iFast * tf1_mul, ctx);
                    EH1 = ctx.new_var(eh1);

                    EH1S = ctx.new_var(eh1);
                    if (minOdd == 0) {
                      EH1S.set((eh1s = eh1));
                    } else {
                      eh1s = std.ref(EH1S, 1);
                      EH1S.set(eh1s);
                    }

                    l0 = std.low(ctx);
                    L0 = ctx.new_var(l0);

                    l1 = std.lowest(L0, tf1_mul);
                    L1 = ctx.new_var(l1);

                    el1 = std.ema(L1, iFast * tf1_mul, ctx);
                    EL1 = ctx.new_var(el1);

                    EL1S = ctx.new_var(el1);
                    if (minOdd == 0) {
                      EL1S.set((el1s = el1));
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
                    var oc2 = (o0 + c0) / 2;
                    var OC2 = ctx.new_var(oc2);
                    var ma = std.sma(OC2, 5, ctx);
                    var MA = ctx.new_var(ma);
                    var rma = MA.get(1);

                    SIDE = ctx.new_var(NaN);
                    side = SIDE.get(1);

                    if (ma < el1) side = -1;
                    else if (ma > eh1) side = 1;

                    // update trend side
                    SIDE.set(side);

                    trend = isNaN(side) ? NaN : side > 0 ? el1 : eh1;
                    trend = isNaN(side) ? NaN : side > 0 ? el1s : eh1s;
                    clr = isNaN(side) ? 0 : side > 0 ? 1 : 0;

                    cloud1 = trend;
                    cloud2 = side > 0 ? el0 : eh0;

                    data = {
                      side: side,
                      eh1: eh1,
                      el1: el1,

                      eh1s: eh1s,
                      el1s: el1s,

                      eh0: eh0,
                      el0: el0,
                    };

                    values = [
                      cloud1,
                      clr,
                      cloud2,
                      clr,
                      eh0,
                      clr,
                      el0,
                      clr,
                      side,
                      eh1,
                      el1,
                      eh1s,
                      el1s,
                      eh0,
                      el0,
                      ma,
                    ];
                  } catch (e) {
                    console.log(e);
                  }

                  return values;
                };
                this.stPower = function () {
                  var std = PineJS.Std;
                  var ctx = this._context;
                  var hl2, aHL2;
                  var rsiFast, fast, Fast, rsiSlow, slow, Slow;
                  var f0, s0, f1, s1;
                  var o, c;

                  var result = [NaN, 0, 0];

                  try {
                    var iFast = 14;
                    var iSlow = 26;
                    var iMA = 52;

                    o = std.open(ctx);
                    c = std.close(ctx);

                    hl2 = std.hl2(ctx);
                    aHL2 = ctx.new_var(hl2);
                    std.rsi2 = function (arr, p, ctx) {
                      var std = PineJS.Std;
                      var x0 = arr.get(0);
                      var x1 = arr.get(1);

                      var u = Math.max(x0 - x1, 0); // upward change
                      var d = Math.max(x1 - x0, 0); // downward change

                      var aU = ctx.new_unlimited_var(u);
                      var aD = ctx.new_unlimited_var(d);

                      var k = std.rma(aU, p, ctx);
                      var l = std.rma(aD, p, ctx);

                      return l != 0 ? 100 - 100 / (1 + k / l) : NaN;
                    };
                    rsiFast = std.rsi2(aHL2, iFast, ctx) - 50;
                    fast = std.wma(ctx.new_var(rsiFast), iMA, ctx);
                    Fast = ctx.new_var(fast);

                    rsiSlow = std.rsi2(aHL2, iSlow, ctx) - 50;
                    slow = std.wma(ctx.new_var(rsiSlow), iMA, ctx);
                    Slow = ctx.new_var(slow);

                    f0 = Fast.get(0);
                    f1 = Fast.get(1);
                    s0 = Slow.get(0);
                    s1 = Slow.get(1);

                    var strong_long = f0 > f1 && s0 > s1 && f0 > 0 ? 1 : 0;
                    var weak_long =
                      (f0 < f1 && s0 > s1 && f0 > 0) ||
                      (f0 > f1 && s0 > s1 && f0 < 0 && f0 > s0)
                        ? 1
                        : 0;
                    var strong_short = f0 < f1 && s0 < s1 && f0 < 0 ? 1 : 0;
                    var weak_short =
                      (f0 > f1 && f0 < 0 && f0 < s0) ||
                      (f0 < f1 && s0 < s1 && f0 > 0 && f0 < s0)
                        ? 1
                        : 0;

                    var color = strong_long
                      ? 0
                      : weak_long
                      ? 1
                      : strong_short
                      ? 2
                      : weak_short
                      ? 3
                      : 4;

                    result = [slow, color, fast];
                  } catch (e) {
                    console.log(e);
                  }
                  return result;
                };
                this.stVolume = function () {
                  var std = PineJS.Std;
                  var ctx = this._context;
                  var ac, aAC;
                  var rsiFast, fast, Fast, rsiSlow, slow, Slow;
                  var f0, s0, f1, s1;
                  var time;

                  var result = [NaN, 0, 0];

                  try {
                    var iFast = 14;
                    var iSlow = 26;
                    var iMA = 52;

                    time = ctx.symbol.time;

                    var h = std.high(ctx);
                    var l = std.low(ctx);
                    var c = std.close(ctx);
                    var v = std.volume(ctx);

                    var ad =
                      (c === h && c === l) || h === l
                        ? 0
                        : (v * (2 * c - l - h)) / (h - l);

                    ac = std.cum(ad, ctx);
                    aAC = ctx.new_var(ac);
                    std.rsi2 = function (arr, p, ctx) {
                      var std = PineJS.Std;
                      var x0 = arr.get(0);
                      var x1 = arr.get(1);

                      var u = Math.max(x0 - x1, 0); // upward change
                      var d = Math.max(x1 - x0, 0); // downward change

                      var aU = ctx.new_unlimited_var(u);
                      var aD = ctx.new_unlimited_var(d);

                      var k = std.rma(aU, p, ctx);
                      var l = std.rma(aD, p, ctx);

                      return l != 0 ? 100 - 100 / (1 + k / l) : NaN;
                    };
                    rsiFast = std.rsi2(aAC, iFast, ctx) - 50;
                    // rsiFast = std.rsi(aAC, iFast) - 50;
                    fast = std.wma(ctx.new_var(rsiFast), iMA, ctx);
                    Fast = ctx.new_var(fast);

                    rsiSlow = std.rsi2(aAC, iSlow, ctx) - 50;
                    // rsiSlow = std.rsi(aAC, iSlow) - 50;
                    slow = std.wma(ctx.new_var(rsiSlow), iMA, ctx);
                    Slow = ctx.new_var(slow);

                    f0 = Fast.get(0);
                    f1 = Fast.get(1);
                    s0 = Slow.get(0);
                    s1 = Slow.get(1);

                    var strong_long = f0 > f1 && s0 > s1 && f0 > 0 ? 1 : 0;
                    var weak_long =
                      (f0 < f1 && s0 > s1 && f0 > 0) ||
                      (f0 > f1 && s0 > s1 && f0 < 0 && f0 > s0)
                        ? 1
                        : 0;
                    var strong_short = f0 < f1 && s0 < s1 && f0 < 0 ? 1 : 0;
                    var weak_short =
                      (f0 > f1 && f0 < 0 && f0 < s0) ||
                      (f0 < f1 && s0 < s1 && f0 > 0 && f0 < s0)
                        ? 1
                        : 0;

                    var color = strong_long
                      ? 0
                      : weak_long
                      ? 1
                      : strong_short
                      ? 2
                      : weak_short
                      ? 3
                      : 4;
                    result = [slow, color, fast];
                  } catch (e) {
                    console.log(e);
                  }

                  return result;
                };
                this.stSignal = function () {
                  var ctx = this._context;
                  var std = PineJS.Std;
                  var result = [NaN, NaN, NaN, NaN, NaN, NaN, NaN];
                  var iPeriod, symbol;
                  var HH,
                    ii,
                    hi,
                    lo,
                    hl2,
                    vol,
                    aVol,
                    av,
                    value2,
                    aValue2,
                    hiValue2,
                    va,
                    aHL2,
                    sma1,
                    sma2,
                    ao,
                    a0,
                    a1,
                    aAO,
                    diff,
                    hasho,
                    hashc,
                    hashc1,
                    hashh,
                    hashl,
                    HO1,
                    HC1,
                    dx,
                    clrFin,
                    oref,
                    cref,
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
                    hl2 = (hi + lo) / 2;
                    vol = std.volume(ctx);
                    aVol = ctx.new_var(vol);
                    av = std.sum(aVol, 10, ctx) / 10;
                    value2 = vol * (hi - lo);
                    aValue2 = ctx.new_var(value2);
                    hiValue2 = std.highest(aValue2, 10);
                    va =
                      vol >= 2 * av || value2 > hiValue2
                        ? 1
                        : vol >= 1.5 * av
                        ? 2
                        : 0;
                    aHL2 = ctx.new_var(hl2);
                    sma1 = std.sma(aHL2, 5, ctx);
                    sma2 = std.sma(aHL2, 34, ctx);
                    ao = sma1 - sma2;
                    aAO = ctx.new_var(ao);
                    a0 = aAO.get(0);
                    a1 = aAO.get(1);
                    diff = a0 - a1;
                    // calculate hashc
                    hashc = (open + hi + lo + close) / 4;
                    HC1 = ctx.new_var(hashc);
                    // calculate hasho
                    HO1 = ctx.new_var(NaN);
                    cref = HO1.get(1);
                    oref = HC1.get(1);
                    hasho = isNaN(oref)
                      ? (open + close) / 2
                      : (oref + cref) / 2;
                    HO1.set(hasho);
                    // calculate hashc1
                    dx = Math.abs(hashc - hasho) / 2;
                    hashc1 = hasho < hashc ? hashc - dx : hashc + dx;
                    // calculate hash high
                    hashh = Math.max(hi, Math.max(hasho, hashc));
                    // calculate hash open
                    hashl = Math.min(lo, Math.min(hasho, hashc));
                    // console.log(`STSignal, ${HH}:${ii}, ${oref}, ${cref}, ${hasho}, ${hashc}, ${hashc1}, ${hashh}, ${hashl}`);
                    clrFin = 0;
                    if (ao >= 0) {
                      // BullishStrongLong
                      clr = 1;
                      clrFin =
                        clrFin == 0 && diff >= 0 && a0 > a1 && hashc >= hasho
                          ? clr
                          : clrFin; // ao tang, n?n tang(ao duong)
                      // BullishStrongShort
                      clr = 2;
                      clrFin =
                        clrFin == 0 && diff < 0 && a0 < a1 && hashc1 <= hasho
                          ? clr
                          : clrFin; // ao gi?m, n?n gi?m (ao duong)
                      // BullishWeakLong
                      clr = 3;
                      clrFin =
                        clrFin == 0 && diff >= 0 && a0 > a1 && hashc1 <= hasho
                          ? clr
                          : clrFin; // ao tang, n?n tang(ao duong)
                      // BullishWeakShort
                      clr = 4;
                      clrFin =
                        clrFin == 0 && diff < 0 && a0 < a1 && hashc1 >= hasho
                          ? clr
                          : clrFin; // ao gi?m, n?n gi?m(ao duong)
                    } else if (ao < 0) {
                      // BearishStrongLong
                      clr = 5;
                      clrFin =
                        clrFin == 0 && diff < 0 && a0 < a1 && hashc1 >= hasho
                          ? clr
                          : clrFin; // ao gi?m, n?n tang(ao âm)
                      // BearishStrongShort
                      clr = 6;
                      clrFin =
                        clrFin == 0 && diff < 0 && a0 < a1 && hashc1 <= hasho
                          ? clr
                          : clrFin; // ao gi?m, n?n gi?m
                      // BearishWeakLong
                      clr = 7;
                      clrFin =
                        clrFin == 0 && diff >= 0 && a0 > a1 && hashc1 <= hasho
                          ? clr
                          : clrFin; // ao tang, n?n gi?m
                      // BearishWeakShort
                      clr = 8;
                      clrFin =
                        clrFin == 0 && diff >= 0 && a0 > a1 && hashc1 >= hasho
                          ? clr
                          : clrFin; // ao tang, n?n tang
                    }
                    result = [hasho, hashh, hashl, hashc1, clrFin, va];
                  } catch (e) {
                    console.log(e);
                  }
                  return result;
                };
              };

              this.main = function (context, input) {
                const std = PineJS.Std;
                this._context = context;
                this._input = input;
                var result = [];

                var highMA = 13;
                var lowMA = 50;
                
                const high = PineJS.Std.high(context);
                const high0 = this._context.new_var(high);
                const low = PineJS.Std.low(context);
                const low0 = this._context.new_var(low);
                var ema_high = PineJS.Std.ema(high0, highMA, context);
                var ema_low = PineJS.Std.ema(low0, highMA, context);

                var ema_50_high = PineJS.Std.ema(high0, lowMA, context);
                var ema_50_low = PineJS.Std.ema(low0, lowMA, context);
                try {
                  const ctx = context;

                  const retTrend = this.stTrend();

                  const retPower = this.stPower();

                  const retVolume = this.stVolume();

                  const retSignal = this.stSignal();

                  for (var i = 0; i < 5; i++) result.push(retSignal[i]);

                  for (var i = 0; i < 8; i++) result.push(retTrend[i]);

                  const trend = retTrend[8];
                  const power = retPower[0];
                  const volume = retVolume[0];

                  // điều kiện mua/bán
                  var side = 0;

                  var stgMode = 1;

                  // load signal judgement from BAlgo
                  // if (BAlgo.stBotClientSettings) {
                  //     const clientSettings = BAlgo.stBotClientSettings;
                  //     stgMode = 0;
                  //     if (clientSettings.powerSamePhase) {
                  //         stgMode = stgMode | 1;
                  //     }

                  //     if (clientSettings.volumeSamePhase) {
                  //         stgMode = stgMode | 2;
                  //     }
                  // }

                  const phaseAll = stgMode == 3;
                  const phaseVolume = stgMode == 2;
                  const phasePower = stgMode == 1;

                  // console.log("tren:: ", trend);
                  if (phaseAll) {
                    if (trend < 0 && power < 0 && volume < 0) side = -1;
                    else if (trend > 0 && power > 0 && volume > 0) side = 1;
                  } else if (phaseVolume) {
                    if (trend < 0 && volume < 0) side = -1;
                    else if (trend > 0 && volume > 0) side = 1;
                  } else if (phasePower) {
                    if (trend < 0 && power < 0) side = -1;
                    else if (trend > 0 && power > 0) side = 1;
                  } else {
                    side = trend;
                  }

                  const SIDE = ctx.new_var(side);
                  const refSide = SIDE.get(1);

                  // long/short strategy
                  var buy = NaN;
                  var short = NaN;
                  var sell = NaN;
                  var cover = NaN;

                  if (!isNaN(refSide) && !isNaN(side) && refSide != side) {
                    buy = side > 0 ? 1 : NaN;
                    sell = refSide > 0 && side == 0 ? 1 : NaN;

                    short = side < 0 ? 1 : NaN;
                    cover = refSide < 0 && side == 0 ? 1 : NaN;
                  }

                  var price = std.close(ctx);
                  var buyPrice = buy ? price : NaN;
                  var BPRICE = ctx.new_var(buyPrice);
                  var shortPrice = short ? price : NaN;
                  var SPRICE = ctx.new_var(shortPrice);

                  if (side != refSide) {
                    // console.log(side, refSide, long, short);
                  }

                  const clr_bg = side > 0 ? 0 : side < 0 ? 1 : 2;
                  result.push(clr_bg);

                  var longText = buy ? "LONG \n" + price : NaN;
                  var shortText = short ? "SHORT \n" + price : NaN;
                  var sellText = sell ? "Close \n" + price : NaN;
                  var coverText = cover ? "Close \n" + price : NaN;

                  result.push(longText);
                  result.push(sellText);
                  result.push(shortText);
                  result.push(coverText);

                  var h0 = retSignal[0]; // std.high(ctx);
                  var l0 = retSignal[3]; // std.low(ctx);
                  var hl2 = (h0 + l0) * 0.5;
                  result.push(hl2);

                  // color bar zo-signal
                  this._context.select_sym(0);
                  const o = PineJS.Std.open(this._context);
                  const h = PineJS.Std.high(this._context);
                  const l = PineJS.Std.low(this._context);
                  const c = PineJS.Std.close(this._context);
                  const v = PineJS.Std.volume(this._context);

                  var overridesym = true;
                  var pvsra_sym = true;
                  var pvsra_volume = this._context.new_var(v);
                  var pvsra_high = this._context.new_var(h);
                  var pvsra_low = this._context.new_var(l);
                  var av =
                    PineJS.Std.sum(
                      this._context.new_var(pvsra_volume.get(1)),
                      10,
                      this._context
                    ) / 10;
                  var value2 =
                    pvsra_volume.get(1) *
                    (pvsra_high.get(1) - pvsra_low.get(1));
                  var value2S = this._context.new_var(value2);
                  var hivalue2 = PineJS.Std.highest(value2S, 10, this._context);
                  var va =
                    pvsra_volume.get(1) >= av * 2 || value2 >= hivalue2
                      ? 1
                      : pvsra_volume.get(1) >= av * 1.5
                      ? 2
                      : 0;
                  var hl2 = (h + l) / 2;
                  var hl2S = this._context.new_var(hl2);
                  var ao =
                    PineJS.Std.sma(hl2S, 5, this._context) -
                    PineJS.Std.sma(hl2S, 34, this._context);
                  var aoS = this._context.new_var(ao);
                  var diff = ao - aoS.get(1);
                  var hashc = (o + h + l + c) / 4;
                  var hashcS = this._context.new_var(hashc);
                  var hasho = (o + c) / 2;
                  var hashoS = this._context.new_var(hasho);
                  hasho =
                    (PineJS.Std.nz(hashoS.get(1), 0) +
                      PineJS.Std.nz(hashcS.get(1), 0)) /
                    2;
                  hashoS = this._context.new_var(hasho);
                  hasho =
                    (PineJS.Std.nz(hashoS.get(1), 0) +
                      PineJS.Std.nz(hashcS.get(1), 0)) /
                    2;
                  hashoS = this._context.new_var(hasho);
                  var hashc1 =
                    hashoS.get(0) < hashc
                      ? hashc - Math.abs(hashc - hashoS.get(0)) / 2
                      : hashc + Math.abs(hashc - hashoS.get(0)) / 2;
                  var hashh = Math.max(h, Math.max(hashoS.get(0), hashc));
                  var hashl = Math.min(l, Math.min(hashoS.get(0), hashc));

                  var color1 =
                    ao >= 0 &&
                    diff >= 0 &&
                    ao > aoS.get(1) &&
                    hashc1 >= hashoS.get(0)
                      ? 0
                      : 0; // ao xanh, nến tăng(ao dương)
                  var color2 =
                    ao >= 0 &&
                    diff < 0 &&
                    ao < aoS.get(1) &&
                    hashc1 <= hashoS.get(0)
                      ? 1
                      : 0; // ao giảm, nến giảm (ao dương)
                  var color3 =
                    ao >= 0 &&
                    diff >= 0 &&
                    ao > aoS.get(1) &&
                    hashc1 <= hashoS.get(0)
                      ? 2
                      : 0; // ao tăng, nến tăng(ao dương)
                  var color4 =
                    ao >= 0 &&
                    diff < 0 &&
                    ao < aoS.get(1) &&
                    hashc1 >= hashoS.get(0)
                      ? 3
                      : 0; // ao giảm, nến giảm(ao dương)
                  var color5 =
                    ao < 0 &&
                    diff < 0 &&
                    ao < aoS.get(1) &&
                    hashc1 >= hashoS.get(0)
                      ? 4
                      : 0; // ao giảm, nến tăng(ao âm)
                  var color6 =
                    ao < 0 &&
                    diff < 0 &&
                    ao < aoS.get(1) &&
                    hashc1 <= hashoS.get(0)
                      ? 5
                      : 0; // ao giảm, nến giảm
                  var color7 =
                    ao < 0 &&
                    diff >= 0 &&
                    ao > aoS.get(1) &&
                    hashc1 <= hashoS.get(0)
                      ? 6
                      : 0; // ao tăng, nến giảm
                  var color8 =
                    ao < 0 &&
                    diff >= 0 &&
                    ao > aoS.get(1) &&
                    hashc1 >= hashoS.get(0)
                      ? 7
                      : 0; // ao tăng, nến tăng
                  var color9 = va == 2 && va == 1.5 ? 8 : 0;
                  var color = Math.max(
                    color1,
                    color2,
                    color3,
                    color4,
                    color5,
                    color6,
                    color7,
                    color8,
                    color9
                  );
                  result.push(color);
                  result.push(color);
                  result.push(color);

                  // htf

                 const trendHTF = this.stTrendHTF();
                  result.push(trendHTF[2]);
                  result.push(trendHTF[0]);
                  result.push(ema_50_high);
                  result.push(trendHTF[0]);
                  result.push(trendHTF[1]);

                  // plot(trend_tf2, "Trend MTF", color = trend_tf2 === 1 ? Color.red : Color.green, style = plot.style_line, linewidth = 2);
                  // plot(trend_tf1, "Current Trend TF", color = trend_tf1 === 1 ? Color.orange : Color.blue, style = plot.style_line, linewidth = 3);

                  // plot(ema_50_high - ema_50_low, "High IZE Trend", color = ema_50_high > ema_50_low ? Color.red : Color.blue, style = plot.style_histogram);

                  return result;
                } catch (e) {
                  console.log(e);
                  return result;
                }
              };
            },
          },
          // power
          {
            // SmartTrader Trend Power
            name: "STTrendPower",
            metainfo: {
              _metainfoVersion: 51,
              id: "STTrendPower@tv-basicstudies-1",
              description: "STTrendPower",
              shortDescription: "ST Power",
              isCustomIndicator: 1,
              format: {
                type: "price",
                precision: 4,
              },
              is_hidden_study: 1,
              is_price_study: 0,
              linkedToSeries: 0,

              isTVScript: !1,
              isTVScriptStub: !1,
              transparency: 65,

              plots: [
                {
                  id: "vol",
                  type: "line",
                },
                {
                  id: "volumePalette",
                  palette: "volumePalette",
                  target: "vol",
                  type: "colorer",
                },
                {
                  id: "vol_ma",
                  type: "line",
                },
              ],

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
                  },
                },
                precision: 0,
                palettes: {
                  volumePalette: {
                    colors: {
                      0: {
                        color: "#00FF00",
                        width: 1,
                        style: 0,
                      },
                      1: {
                        color: "#1e90ff",
                        width: 1,
                        style: 0,
                      },
                      2: {
                        color: "#ff0000",
                        width: 1,
                        style: 0,
                      },
                      3: {
                        color: "#e39ff6",
                        width: 1,
                        style: 0,
                      },
                      4: {
                        color: "#cfcfcf",
                        width: 1,
                        style: 0,
                      },
                    },
                  },
                },
                inputs: {
                  iFast: 14,
                  iSlow: 26,
                  iMA: 52,
                },
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
                },
              },
              palettes: {
                volumePalette: {
                  colors: {
                    0: {
                      name: "Strong Long",
                    },
                    1: {
                      name: "Weak Long",
                    },
                    2: {
                      name: "Strong Short",
                    },
                    3: {
                      name: "Weak Short",
                    },
                    4: {
                      name: "Sideway",
                    },
                  },
                },
              },

              inputs: [],
            },

            constructor: function () {
              this.init = function (context, input) {
                this._context = context;
                this._input = input;
                this.stPower = function () {
                  var std = PineJS.Std;
                  var ctx = this._context;
                  var hl2, aHL2;
                  var rsiFast, fast, Fast, rsiSlow, slow, Slow;
                  var f0, s0, f1, s1;
                  var o, c;

                  var result = [NaN, 0, 0];

                  try {
                    var iFast = 14;
                    var iSlow = 26;
                    var iMA = 52;

                    o = std.open(ctx);
                    c = std.close(ctx);

                    hl2 = std.hl2(ctx);
                    aHL2 = ctx.new_var(hl2);
                    std.rsi2 = function (arr, p, ctx) {
                      var std = PineJS.Std;
                      var x0 = arr.get(0);
                      var x1 = arr.get(1);

                      var u = Math.max(x0 - x1, 0); // upward change
                      var d = Math.max(x1 - x0, 0); // downward change

                      var aU = ctx.new_unlimited_var(u);
                      var aD = ctx.new_unlimited_var(d);

                      var k = std.rma(aU, p, ctx);
                      var l = std.rma(aD, p, ctx);

                      return l != 0 ? 100 - 100 / (1 + k / l) : NaN;
                    };
                    rsiFast = std.rsi2(aHL2, iFast, ctx) - 50;
                    fast = std.wma(ctx.new_var(rsiFast), iMA, ctx);
                    Fast = ctx.new_var(fast);

                    rsiSlow = std.rsi2(aHL2, iSlow, ctx) - 50;
                    slow = std.wma(ctx.new_var(rsiSlow), iMA, ctx);
                    Slow = ctx.new_var(slow);

                    f0 = Fast.get(0);
                    f1 = Fast.get(1);
                    s0 = Slow.get(0);
                    s1 = Slow.get(1);

                    var strong_long = f0 > f1 && s0 > s1 && f0 > 0 ? 1 : 0;
                    var weak_long =
                      (f0 < f1 && s0 > s1 && f0 > 0) ||
                      (f0 > f1 && s0 > s1 && f0 < 0 && f0 > s0)
                        ? 1
                        : 0;
                    var strong_short = f0 < f1 && s0 < s1 && f0 < 0 ? 1 : 0;
                    var weak_short =
                      (f0 > f1 && f0 < 0 && f0 < s0) ||
                      (f0 < f1 && s0 < s1 && f0 > 0 && f0 < s0)
                        ? 1
                        : 0;

                    var color = strong_long
                      ? 0
                      : weak_long
                      ? 1
                      : strong_short
                      ? 2
                      : weak_short
                      ? 3
                      : 4;

                    result = [slow, color, fast];
                  } catch (e) {
                    console.log(e);
                  }
                  return result;
                };
              };

              this.main = function (e, t) {
                this._context = e;
                this._input = t;
                var result = [];

                try {
                  var ctx = this._context;
                  var time = ctx.symbol.time;

                  result = this.stPower(this._context, this._input);

                  return result;
                } catch (e) {
                  console.log(e);
                  return result;
                }
              };
            },
          },
          // volume
          {
            // SmartTrader Trend Volume
            name: "STTrendVolume",
            metainfo: {
              _metainfoVersion: 51,
              id: "STTrendVolume@tv-basicstudies-1",
              description: "STTrendVolume",
              shortDescription: "ST Volume",
              isCustomIndicator: 1,
              format: {
                type: "price",
                precision: 4,
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
                  },
                },
                precision: 0,
                palettes: {
                  volumePalette: {
                    colors: {
                      0: {
                        color: "#00FF00",
                        width: 1,
                        style: 0,
                      },
                      1: {
                        color: "#1e90ff",
                        width: 1,
                        style: 0,
                      },
                      2: {
                        color: "#ff0000",
                        width: 1,
                        style: 0,
                      },
                      3: {
                        color: "#e39ff6",
                        width: 1,
                        style: 0,
                      },
                      4: {
                        color: "#cfcfcf",
                        width: 1,
                        style: 0,
                      },
                    },
                  },
                },
                inputs: {
                  iFast: 14,
                  iSlow: 26,
                  iMA: 52,
                },
              },
              plots: [
                {
                  id: "vol",
                  type: "line",
                },
                {
                  id: "volumePalette",
                  palette: "volumePalette",
                  target: "vol",
                  type: "colorer",
                },
                {
                  id: "vol_ma",
                  type: "line",
                },
              ],
              styles: {
                vol: {
                  title: "Trend Volume",
                  histogramBase: 0,
                  isHidden: 1,
                },
                vol_ma: {
                  title: "Fast",
                  histogramBase: 0,
                  isHidden: 1,
                },
              },
              palettes: {
                volumePalette: {
                  colors: {
                    0: {
                      name: "Strong Long",
                    },
                    1: {
                      name: "Weak Long",
                    },
                    2: {
                      name: "Strong Short",
                    },
                    3: {
                      name: "Weak Short",
                    },
                    4: {
                      name: "Sideway",
                    },
                  },
                },
              },

              inputs: [
                {
                  id: "iFast",
                  name: "Fast",
                  defval: 14,
                  type: "integer",
                  min: 1,
                  max: 200,
                },
                {
                  id: "iSlow",
                  name: "Slow",
                  defval: 26,
                  type: "integer",
                  min: 1,
                  max: 200,
                },
                {
                  id: "iMA",
                  name: "MA",
                  defval: 52,
                  type: "integer",
                  min: 1,
                  max: 200,
                },
              ],
            },
            constructor: function () {
              this.init = function (context, input) {
                this.stVolume = function () {
                  var std = PineJS.Std;
                  var ctx = this._context;
                  var ac, aAC;
                  var rsiFast, fast, Fast, rsiSlow, slow, Slow;
                  var f0, s0, f1, s1;
                  var time;

                  var result = [NaN, 0, 0];

                  try {
                    var iFast = 14;
                    var iSlow = 26;
                    var iMA = 52;

                    time = ctx.symbol.time;

                    var h = std.high(ctx);
                    var l = std.low(ctx);
                    var c = std.close(ctx);
                    var v = std.volume(ctx);

                    var ad =
                      (c === h && c === l) || h === l
                        ? 0
                        : (v * (2 * c - l - h)) / (h - l);

                    ac = std.cum(ad, ctx);
                    aAC = ctx.new_var(ac);
                    std.rsi2 = function (arr, p, ctx) {
                      var std = PineJS.Std;
                      var x0 = arr.get(0);
                      var x1 = arr.get(1);

                      var u = Math.max(x0 - x1, 0); // upward change
                      var d = Math.max(x1 - x0, 0); // downward change

                      var aU = ctx.new_unlimited_var(u);
                      var aD = ctx.new_unlimited_var(d);

                      var k = std.rma(aU, p, ctx);
                      var l = std.rma(aD, p, ctx);

                      return l != 0 ? 100 - 100 / (1 + k / l) : NaN;
                    };
                    rsiFast = std.rsi2(aAC, iFast, ctx) - 50;
                    // rsiFast = std.rsi(aAC, iFast) - 50;
                    fast = std.wma(ctx.new_var(rsiFast), iMA, ctx);
                    Fast = ctx.new_var(fast);

                    rsiSlow = std.rsi2(aAC, iSlow, ctx) - 50;
                    // rsiSlow = std.rsi(aAC, iSlow) - 50;
                    slow = std.wma(ctx.new_var(rsiSlow), iMA, ctx);
                    Slow = ctx.new_var(slow);

                    f0 = Fast.get(0);
                    f1 = Fast.get(1);
                    s0 = Slow.get(0);
                    s1 = Slow.get(1);

                    var strong_long = f0 > f1 && s0 > s1 && f0 > 0 ? 1 : 0;
                    var weak_long =
                      (f0 < f1 && s0 > s1 && f0 > 0) ||
                      (f0 > f1 && s0 > s1 && f0 < 0 && f0 > s0)
                        ? 1
                        : 0;
                    var strong_short = f0 < f1 && s0 < s1 && f0 < 0 ? 1 : 0;
                    var weak_short =
                      (f0 > f1 && f0 < 0 && f0 < s0) ||
                      (f0 < f1 && s0 < s1 && f0 > 0 && f0 < s0)
                        ? 1
                        : 0;

                    var color = strong_long
                      ? 0
                      : weak_long
                      ? 1
                      : strong_short
                      ? 2
                      : weak_short
                      ? 3
                      : 4;
                    result = [slow, color, fast];
                  } catch (e) {
                    console.log(e);
                  }

                  return result;
                };
              };

              this.main = function (e, t) {
                this._context = e;
                this._input = t;
                var result = [];

                try {
                  result = this.stVolume();
                  return result;
                } catch (e) {
                  console.log(e);
                  return result;
                }
              };
            },
          },
          // zo trend
          {
            name: "ST HTF",
            metainfo: {
              _metainfoVersion: 51,
              description: "ST HTF",
              shortDescription: "ST HTF",
              is_hidden_study: false,
              is_price_study: false,
              isCustomIndicator: true,
              linkedToSeries: true,

              id: "ST HTF@luuvietha",

              format: {
                type: "price",
                precision: 2,
              },
              plots: [
                {
                  id: "plot_0",
                  type: "line",
                },
                {
                  id: "plot_1",
                  type: "line",
                },
                {
                  id: "plot_2",
                  type: "line",
                },
                {
                  id: "plot_3",
                  type: "line",
                },
              ],
              styles: {
                plot_0: {
                  title: "Trend MTF",
                  histogramBase: 1,
                },
                plot_1: {
                  title: "Current Trend TF",
                  histogramBase: 1,
                },
                plot_2: {
                  title: "High IZE Trend",
                  histogramBase: 1,
                },
                plot_3: {
                  title: "Low IZE Trend",
                  histogramBase: 1,
                },
              },
              defaults: {
                styles: {
                  plot_0: {
                    linestyle: 0,
                    visible: true,
                    linewidth: 1,
                    plottype: 0,
                    trackPrice: false,
                    transparency: 0,
                    color: "#008FFF",
                  },
                  plot_1: {
                    linestyle: 0,
                    visible: true,
                    linewidth: 1,
                    plottype: 0,
                    trackPrice: false,
                    transparency: 0,
                    color: "#04FF00",
                  },
                  plot_2: {
                    linestyle: 0,
                    visible: true,
                    linewidth: 1,
                    plottype: 0,
                    trackPrice: false,
                    transparency: 0,
                    color: "#FF0000",
                  },
                },
                inputs: {
                  av: 30,
                  pr: 14,
                },
                precision: 2,
              },
              inputs: [
                {
                  id: "av",
                  name: "AV",
                  type: "integer",
                  min: 1,
                  max: 2e3,
                },
                {
                  id: "pr",
                  name: "PR",
                  type: "integer",
                  min: 1,
                  max: 2e3,
                },
              ],
            },
            constructor: function () {
              this.main = function (context, inputCallback) {
                this._context = context;
                this._input = inputCallback;
                var AV = this._input(0);
                var PR = this._input(1);
                var high = PineJS.Std.high(this._context);
                var highS = this._context.new_var(high);
                var low = PineJS.Std.low(this._context);
                var lowS = this._context.new_var(low);
                var upMove = highS.get(0) - highS.get(1);
                var downMove = lowS.get(0) - lowS.get(1);
                var plusDM = upMove > downMove && upMove > 0 ? upMove : 0;
                var plusDMS = this._context.new_var(plusDM);
                var minusDM = downMove > upMove && downMove > 0 ? downMove : 0;
                var minusDMS = this._context.new_var(minusDM);
                var tr1 = highS.get(0) - lowS.get(0);
                var close = PineJS.Std.low(this._context);
                var closeS = this._context.new_var(close);
                var tr2 = Math.abs(highS.get(0) - closeS.get(1));
                var tr3 = Math.abs(lowS.get(0) - closeS.get(1));
                var trueRange = Math.max(Math.max(tr1, tr2), tr3);
                var trueRangeS = this._context.new_var(trueRange);
                var plusDI =
                  (PineJS.Std.sma(plusDMS, PR, this._context) /
                    PineJS.Std.sma(trueRangeS, PR, this._context)) *
                  100;
                var minusDI =
                  (PineJS.Std.sma(minusDMS, PR, this._context) /
                    PineJS.Std.sma(trueRangeS, PR, this._context)) *
                  100;

                var DX =
                  (Math.abs(plusDI - minusDI) / (plusDI + minusDI)) * 100;
                var DXS = this._context.new_var(DX);
                var ADX = PineJS.Std.sma(DXS, PR, this._context);

                const A = plusDI < 20;
                const B = minusDI < 20;
                const E = ADX > AV;
                const P = plusDI;
                const Q = minusDI;

                const HL = P > Q;
                const LH = Q > P;
                const X = E && HL && B;
                const Y = E && LH && A;
                return [ADX, P, Q];
              };
            },
          },
          // zo signal
        ]);
      },
    };

    // eslint-disable-next-line new-cap
    const tvWidget = new widget(widgetOptions);
    this.tvWidget = tvWidget;

    tvWidget.onChartReady(() => {
      tvWidget.activeChart().removeAllStudies();
      thisVue.restoreUserIndicators(
        thisVue.scrapeDerivativeIndicators,
        tvWidget.activeChart()
      );
      tvWidget.subscribe("onAutoSaveNeeded", () => {});

      var runrot = setInterval(() => {
        const managerroot = $("#tvWidgetContainer iframe")
          .contents()
          .find("#overlap-manager-root");
        if (managerroot && managerroot.length > 0) {
          var headerchartTypes = $("#tvWidgetContainer iframe")
            .contents()
            .find(
              "#header-toolbar-chart-styles .apply-common-tooltip.isOpened-merBkM5y"
            );
          if (headerchartTypes && headerchartTypes.length > 0) {
            const htmlpnf = `<div data-value="pnf" class="item-jFqVJoPk withIcon-jFqVJoPk"><span class="icon-jFqVJoPk"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M14.5 16a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm3.293-15.5l4.707 4.707.707-.707L18.5 4.793z"></path><path d="M18.5 10.207L23.207 5.5l-.707-.707L17.793 9.5zm-.707 1.293l4.707 4.707.707-.707-4.707-4.707z"></path><path d="M18.5 16.207l4.707-4.707-.707-.707-4.707 4.707zM5.793 17.5l4.707 4.707.707-.707L6.5 16.793z"></path><path d="M6.5 22.207l4.707-4.707-.707-.707L5.793 21.5zM5.793 5.5l4.707 4.707.707-.707L6.5 4.793z"></path><path d="M6.5 10.207L11.207 5.5l-.707-.707L5.793 9.5zM5.793 11.5l4.707 4.707.707-.707L6.5 10.793z"></path><path d="M6.5 16.207l4.707-4.707-.707-.707L5.793 15.5z"></path></svg></span><span class="labelRow-jFqVJoPk"><span class="label-jFqVJoPk">ĐIểm &amp; Số liệu</span></span><span class="toolbox-jFqVJoPk showOnHover-jFqVJoPk"></span></div>`;
            const itempnt = managerroot.find(
              'div[data-name="popup-menu-container"] div[data-name="menu-inner"] div[data-value="pnf"]'
            );
            if (itempnt && itempnt.length > 0) {
            } else {
              managerroot
                .find(
                  'div[data-name="popup-menu-container"] div[data-name="menu-inner"]'
                )
                .append(htmlpnf);
            }
            managerroot
              .find(
                'div[data-name="popup-menu-container"] div[data-name="menu-inner"] div[data-value="pnf"]'
              )
              .unbind("click")
              .click(function () {
                tvWidget.chart().setChartType(6);
                managerroot.html("");
              });
          }
        }
      }, 1000);
      tvWidget.changeTheme("dark");
      tvWidget.headerReady().then(function () {
        var button = tvWidget.createButton();
        button.setAttribute("title", "Dark or Light");
        button.setAttribute("class", "cus-theme");
        button.addEventListener("click", function () {
          if (tvWidget.getTheme() == "dark") {
            tvWidget.changeTheme("light");
          } else {
            tvWidget.changeTheme("dark");
          }
        });
        button.textContent = "Change theme";
      });
    });
  },
  beforeDestroy() {
    if (this.tvWidget !== null) {
      this.tvWidget.changeTheme("dark");
      this.tvWidget.remove();
      this.tvWidget = null;
    }
  },
  methods: {
    getCurrentChartUserIndicators(activeChart) {
      if (!activeChart) {
        return [];
      }

      return activeChart.getAllStudies().map((study) => ({
        name: study.name,
        visible: activeChart.getStudyById(study.id).isVisible(),
        inputs: activeChart.getStudyById(study.id).getInputValues(),
        // get styles
      }));
    },
    removeAllIndicators(activeChart) {
      if (!activeChart) {
        return [];
      }

      return activeChart.getAllStudies().map((study) => {
        activeChart.getStudyById(study.id).remove();
        // get styles
      });
    },

    restoreUserIndicators(indicators, activeChart) {
      if (!indicators || indicators.length === 0) {
        return;
      }

      try {
        Promise.all(
          indicators.map(async (indicator) => {
            const visible = indicator.visible;
            const newStudyID = await activeChart.createStudy(
              indicator.name,
              false,
              false,
              indicator.inputs,
              { visible }
            );
            console.log("newStudyID:: ", newStudyID);
            // convert saved styles to overrides format ?
          })
        );
      } catch (e) {
        return;
      }
    },
  },
};
</script>

    <style scoped>
.TVChartContainer {
  height: calc(100vh - 50px);
}
</style>
