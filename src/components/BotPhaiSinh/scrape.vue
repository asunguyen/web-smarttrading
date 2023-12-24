<template>
  <div ref="chartContainer" class="TVChartContainer" />
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
      default: "http://api.smtchart.vn/v1/data/bot-scrape",
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
      default: "public_user_id",
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
          name: "ZO TREND",
          visible: true,
        },
        {
          name: "ST POWER",
          visible: true,
        },
        {
          name: "ST VOLUME",
          visible: true,
        },
        {
          name: "ZO SIGNAL",
          visible: true,
        },
        //ZO TREND
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
      library_path: this.libraryPath,
      logo: {
        image: "@/assets/logo-st.png",
        link: "http://smtchart.vn/",
      },
      theme: "dark",
      //charts_storage_url: this.chartsStorageUrl,
      //charts_storage_api_version: this.chartsStorageApiVersion,
      client_id: this.clientId,
      user_id: this.userId,
      fullscreen: this.fullscreen,
      autosize: this.autosize,
      studies_overrides: this.studiesOverrides,
      load_last_chart: true,
      favorites: {
        indicators: ["Volume"],
      },
      resolution: 1,
      widgetbar: {
        details: true,
        news: true,
        watchlist: true,
        datawindow: true,
        watchlist_settings: {
          default_symbols: [
            "###STOCKS",
            "NASDAQ:AAPL",
            "NASDAQ:MSFT",
            "NYSE:IBM",
            "###FOREX",
            "FX:EURUSD",
            "FX:GBPUSD",
            "###CRYPTO",
            "CRYPTO:BTCUSD",
            "CRYPTO:ETHUSD",
          ],
        },
      },
      overrides: {
        "mainSeriesProperties.showCountdown": true,
      },
      disabled_features: [
        "use_localstorage_for_settings",
        "open_account_manager",
        "dom_widget",
      ],
      enabled_features: [
        "study_templates",
        "pre_post_market_sessions",
        "show_symbol_logos",
        "show_exchange_logos",
        "seconds_resolution",
        "secondary_series_extend_time_scale",
        "show_percent_option_for_right_margin",
        "display_data_mode",
      ],
      custom_indicators_getter: function (PineJS) {
        return Promise.resolve([
          //zo trend
          {
            name: "ZO TREND",
            metainfo: {
              _metainfoVersion: 51,
              description: "ZO TREND",
              shortDescription: "ZO TREND",
              is_hidden_study: false,
              is_price_study: false,
              isCustomIndicator: true,
              linkedToSeries: true,

              id: "ZO TREND@luuvietha",

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
          //zo signal
          {
            name: "ZO SIGNAL",
            metainfo: {
              _metainfoVersion: 51,

              id: "advancedcolouringcandles@tv-basicstudies-1",
              name: "ZO SIGNAL",
              description: "ZO SIGNAL",
              shortDescription: "ZO SIGNAL",

              isCustomIndicator: true,

              is_price_study: true,
              linkedToSeries: true,

              format: {
                type: "price",
                precision: 2,
              },

              plots: [
                {
                  id: "plot_open",
                  type: "ohlc_open",
                  target: "plot_candle",
                },
                {
                  id: "plot_high",
                  type: "ohlc_high",
                  target: "plot_candle",
                },
                {
                  id: "plot_low",
                  type: "ohlc_low",
                  target: "plot_candle",
                },
                {
                  id: "plot_close",
                  type: "ohlc_close",
                  target: "plot_candle",
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
              ],

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
              },

              ohlcPlots: {
                plot_candle: {
                  title: "Candles",
                },
              },

              defaults: {
                ohlcPlots: {
                  plot_candle: {
                    borderColor: "#000000",
                    color: "#000000",
                    drawBorder: true,
                    drawWick: true,
                    plottype: "ohlc_candles",
                    visible: true,
                    wickColor: "#000000",
                  },
                },

                palettes: {
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
                },
                precision: 2,
                inputs: {},
              },
              styles: {},
              inputs: [],
            },
            constructor: function () {
              this.init = function (context, inputCallback) {
                this._context = context;
                this._input = inputCallback;
                this.f_2 = function (src, len, ctx) {
                  var series_0 = ctx.new_var(
                    -PineJS.Std.min(PineJS.Std.change(src), 0)
                  );
                  return PineJS.Std.rma(series_0, len, ctx);
                };
                this.pvsra_security = function (
                  overridesym,
                  pvsra_sym,
                  sresolution,
                  sseries
                ) {
                  var symbol = overridesym
                    ? pvsra_sym
                    : window.tvWidget.activeChart().symbol().split(":")[1];
                  var realTimeIndex = barstate.isrealtime ? 1 : 0;
                  var series = sseries[realTimeIndex];
                };
              };
              this.main = function (context, inputCallback) {
                this._context = context;
                this._input = inputCallback;
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
                  pvsra_volume.get(1) * (pvsra_high.get(1) - pvsra_low.get(1));
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

                // Color is determined randomly
                const colour = Math.round(Math.random());
                return [
                  hashoS.get(0),
                  hashh,
                  hashl,
                  hashc1,
                  color /* bar*/,
                  color /* wick*/,
                  color /* border*/,
                ];
              };
            },
          },
          //st power
          {
            name: "ST POWER",
            metainfo: {
              _metainfoVersion: 51,
              description: "ST POWER",
              shortDescription: "ST POWER",
              is_hidden_study: false,
              is_price_study: false,
              isCustomIndicator: true,
              linkedToSeries: true,

              id: "ST POWER@tv-basicstudies-1",

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
                  id: "palette_0",
                  type: "colorer",
                  palette: "palette_0",
                  target: "plot_0",
                },
              ],
              palettes: {
                palette_0: {
                  colors: [
                    {
                      name: "Strong Long",
                    },
                    {
                      name: "Weak Long",
                    },
                    {
                      name: "Strong Short",
                    },
                    {
                      name: "Weak Short",
                    },
                    {
                      name: "None",
                    },
                  ],
                  valToIndex: {
                    0: 0,
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4,
                  },
                },
              },
              styles: {
                plot_0: {
                  title: "Histogram",
                  histogramBase: 1,
                },
              },
              defaults: {
                styles: {
                  plot_0: {
                    linestyle: 0,
                    visible: true,
                    linewidth: 1,
                    plottype: 5,
                    trackPrice: false,
                    transparency: 0,
                  },
                },
                inputs: {
                  rsi_pre: 14,
                  fast_pre: 26,
                  slow_pre: 52,
                },
                precision: 2,
                palettes: {
                  palette_0: {
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
                bands: [
                  {
                    color: "#808080",
                    linestyle: 2,
                    linewidth: 1,
                    visible: true,
                    value: 5,
                  },
                  {
                    color: "#808080",
                    linestyle: 2,
                    linewidth: 1,
                    visible: true,
                    value: -5,
                  },
                ],
                filledAreasStyle: {
                  fill_0: {
                    color: "#FFFFFF",
                    transparency: 80,
                    visible: true,
                  },
                },
              },
              inputs: [
                {
                  id: "rsi_pre",
                  name: "RSI PERIOD",
                  type: "integer",
                  min: 1,
                  max: 2e3,
                },
                {
                  id: "fast_pre",
                  name: "Fast PERIOD",
                  type: "integer",
                  min: 1,
                  max: 2e3,
                },
                {
                  id: "slow_pre",
                  name: "SLOW PERIOD",
                  type: "integer",
                  min: 1,
                  max: 2e3,
                },
              ],
              bands: [
                {
                  id: "hline_0",
                  name: "Upper Limit",
                },
                {
                  id: "hline_1",
                  name: "Lower Limit",
                },
              ],
              filledAreas: [
                {
                  id: "fill_0",
                  objAId: "hline_0",
                  objBId: "hline_1",
                  type: "hline_hline",
                  title: "Hlines Background",
                },
              ],
            },
            constructor: function () {
              this.init = function (context, inputCallback) {
                this._context = context;
                this._input = inputCallback;
                this.f_1 = function (src, len, ctx) {
                  var series_0 = ctx.new_var(
                    PineJS.Std.max(PineJS.Std.change(src), 0)
                  );
                  return PineJS.Std.rma(series_0, len, ctx);
                };

                this.f_2 = function (src, len, ctx) {
                  var series_0 = ctx.new_var(
                    -PineJS.Std.min(PineJS.Std.change(src), 0)
                  );
                  return PineJS.Std.rma(series_0, len, ctx);
                };
              };
              this.main = function (context, inputCallback) {
                this._context = context;
                this._input = inputCallback;
                var fast_rsi_period = this._input(0);
                var slow_rsi_period = this._input(1);
                var ma_period = this._input(2);
                var hl2 = PineJS.Std.hl2(this._context);
                var hl2S = this._context.new_var(hl2);
                var rsi_fast =
                  PineJS.Std.rsi(
                    this.f_1(hl2S, fast_rsi_period, this._context),
                    this.f_2(hl2S, fast_rsi_period, this._context)
                  ) - 50;
                var rsi_slow =
                  PineJS.Std.rsi(
                    this.f_1(hl2S, slow_rsi_period, this._context),
                    this.f_2(hl2S, slow_rsi_period, this._context)
                  ) - 50;
                var rsi_fast_series = this._context.new_var(rsi_fast);
                var rsi_slow_series = this._context.new_var(rsi_slow);
                var slowX = PineJS.Std.wma(
                  rsi_slow_series,
                  ma_period,
                  this._context
                );
                var fastX = PineJS.Std.wma(
                  rsi_fast_series,
                  ma_period,
                  this._context
                );
                var slowS = this._context.new_var(slowX);
                var fastS = this._context.new_var(fastX);
                var slow = [slowS.get(0), slowS.get(1)];
                var fast = [fastS.get(0), fastS.get(1)];
                var strong_long = false;
                if (fast[0] > fast[1] && slow[0] > slow[1] && fast[0] > 0) {
                  strong_long = true;
                }
                var strong_short = false;
                if (fast[0] < fast[1] && slow[0] < slow[1] && fast[0] < 0) {
                  strong_short = true;
                }
                var weak_long = false;
                if (
                  (fast[0] < fast[1] && slow[0] > slow[1] && fast[0] > 0) ||
                  (fast[0] > fast[1] &&
                    slow[0] > slow[1] &&
                    fast[0] < 0 &&
                    fast[0] > slow[0])
                ) {
                  weak_long = true;
                }
                var weak_short = false;
                if (
                  (fast[0] > fast[1] && fast[0] < 0 && fast[0] < slow[0]) ||
                  (fast[0] < fast[1] &&
                    slow[0] < slow[1] &&
                    fast[0] > 0 &&
                    fast[0] < slow[0])
                ) {
                  weak_short = true;
                }
                var color_power;
                if (strong_long) color_power = 0;
                else if (weak_long) color_power = 1;
                else if (strong_short) color_power = 2;
                else if (weak_short) color_power = 3;
                else color_power = 4;
                return [slowS.get(0), color_power];
              };
            },
          },
          //st volume
          {
            name: "ST VOLUME",
            metainfo: {
              _metainfoVersion: 51,
              description: "ST VOLUME",
              shortDescription: "ST VOLUME",
              is_hidden_study: false,
              is_price_study: false,
              isCustomIndicator: true,
              linkedToSeries: true,
              id: "ST VOLUME@tv-basicstudies-1",
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
                  id: "palette_0",
                  type: "colorer",
                  palette: "palette_0",
                  target: "plot_0",
                },
              ],
              palettes: {
                palette_0: {
                  colors: [
                    {
                      name: "Strong Long",
                    },
                    {
                      name: "Weak Long",
                    },
                    {
                      name: "Strong Short",
                    },
                    {
                      name: "Weak Short",
                    },
                    {
                      name: "None",
                    },
                  ],
                  valToIndex: {
                    0: 0,
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4,
                  },
                },
              },
              styles: {
                plot_0: {
                  title: "Histogram",
                  histogramBase: 1,
                },
              },
              defaults: {
                styles: {
                  plot_0: {
                    linestyle: 0,
                    visible: true,
                    linewidth: 1,
                    plottype: 5,
                    trackPrice: false,
                    transparency: 0,
                  },
                },
                inputs: {
                  rsi_pre: 14,
                  fast_pre: 26,
                  slow_pre: 52,
                },
                precision: 2,
                palettes: {
                  palette_0: {
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
                bands: [
                  {
                    color: "#808080",
                    linestyle: 2,
                    linewidth: 1,
                    visible: true,
                    value: 5,
                  },
                  {
                    color: "#808080",
                    linestyle: 2,
                    linewidth: 1,
                    visible: true,
                    value: -5,
                  },
                ],
                filledAreasStyle: {
                  fill_0: {
                    color: "#FFFFFF",
                    transparency: 80,
                    visible: true,
                  },
                },
              },
              inputs: [
                {
                  id: "rsi_pre",
                  name: "RSI PERIOD",
                  type: "integer",
                  min: 1,
                  max: 2e3,
                },
                {
                  id: "fast_pre",
                  name: "Fast PERIOD",
                  type: "integer",
                  min: 1,
                  max: 2e3,
                },
                {
                  id: "slow_pre",
                  name: "SLOW PERIOD",
                  type: "integer",
                  min: 1,
                  max: 2e3,
                },
              ],
              bands: [
                {
                  id: "hline_0",
                  name: "Upper Limit",
                },
                {
                  id: "hline_1",
                  name: "Lower Limit",
                },
              ],
              filledAreas: [
                {
                  id: "fill_0",
                  objAId: "hline_0",
                  objBId: "hline_1",
                  type: "hline_hline",
                  title: "Hlines Background",
                },
              ],
            },
            constructor: function () {
              this.init = function (context, inputCallback) {
                this._context = context;
                this._input = inputCallback;
                this.f_1 = function (src, len, ctx) {
                  var series_0 = ctx.new_var(
                    PineJS.Std.max(PineJS.Std.change(src), 0)
                  );
                  return PineJS.Std.rma(series_0, len, ctx);
                };

                this.f_2 = function (src, len, ctx) {
                  var series_0 = ctx.new_var(
                    -PineJS.Std.min(PineJS.Std.change(src), 0)
                  );
                  return PineJS.Std.rma(series_0, len, ctx);
                };
              };
              this.main = function (context, inputCallback) {
                this._context = context;
                this._input = inputCallback;
                var fast_rsi_period = this._input(0);
                var slow_rsi_period = this._input(1);
                var ma_period = this._input(2);
                var accdistV = PineJS.Std.accdist(this._context);
                var accdistS = this._context.new_var(accdistV);

                var rsi_fast =
                  PineJS.Std.rsi(
                    this.f_1(accdistS, fast_rsi_period, this._context),
                    this.f_2(accdistS, fast_rsi_period, this._context)
                  ) - 50;
                var rsi_slow =
                  PineJS.Std.rsi(
                    this.f_1(accdistS, slow_rsi_period, this._context),
                    this.f_2(accdistS, slow_rsi_period, this._context)
                  ) - 50;
                var rsi_fast_series = this._context.new_var(rsi_fast);
                var rsi_slow_series = this._context.new_var(rsi_slow);
                var slowX = PineJS.Std.wma(
                  rsi_slow_series,
                  ma_period,
                  this._context
                );
                var fastX = PineJS.Std.wma(
                  rsi_fast_series,
                  ma_period,
                  this._context
                );
                var slowS = this._context.new_var(slowX);
                var fastS = this._context.new_var(fastX);
                var slow = [slowS.get(0), slowS.get(1)];
                var fast = [fastS.get(0), fastS.get(1)];
                var strong_long = false;
                if (fast[0] > fast[1] && slow[0] > slow[1] && fast[0] > 0) {
                  strong_long = true;
                }
                var strong_short = false;
                if (fast[0] < fast[1] && slow[0] < slow[1] && fast[0] < 0) {
                  strong_short = true;
                }
                var weak_long = false;
                if (
                  (fast[0] < fast[1] && slow[0] > slow[1] && fast[0] > 0) ||
                  (fast[0] > fast[1] &&
                    slow[0] > slow[1] &&
                    fast[0] < 0 &&
                    fast[0] > slow[0])
                ) {
                  weak_long = true;
                }
                var weak_short = false;
                if (
                  (fast[0] > fast[1] && fast[0] < 0 && fast[0] < slow[0]) ||
                  (fast[0] < fast[1] &&
                    slow[0] < slow[1] &&
                    fast[0] > 0 &&
                    fast[0] < slow[0])
                ) {
                  weak_short = true;
                }
                var color_power;
                if (strong_long) color_power = 0;
                else if (weak_long) color_power = 1;
                else if (strong_short) color_power = 2;
                else if (weak_short) color_power = 3;
                else color_power = 4;
                // console.log(slowS.get(0));
                return [slowS.get(0), color_power];
              };
            },
          },
        ]);
      },
    };

    // eslint-disable-next-line new-cap
    const tvWidget = new widget(widgetOptions);
    this.tvWidget = tvWidget;

    tvWidget.onChartReady(() => {
      tvWidget.subscribe("onAutoSaveNeeded", () => {
        console.log({
          indicators: thisVue.getCurrentChartUserIndicators(
            tvWidget.activeChart()
          ),
        });
      });
      thisVue.restoreUserIndicators(
        thisVue.scrapeDerivativeIndicators,
        tvWidget.activeChart()
      );
    });
  },
  destroyed() {
    if (this.tvWidget !== null) {
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

    restoreUserIndicators(indicators, activeChart) {
      if (!indicators || indicators.length === 0) {
        return;
      }

      try {
        Promise.all(
          indicators.map(async (indicator) => {
            const visible = indicator.visible;
            console.log("indicator.inputs:: ", indicator.inputs);
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
