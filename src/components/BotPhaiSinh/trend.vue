<template>
  <div ref="chartContainer" class="TVChartContainer" />
</template>

<script>
var signal = NaN;
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
      default: "https://saveload.tradingview.com",
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
      trendDerivativeIndicators: [
        {
          name: "SMT Trend+",
          visible: true,
        },
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
      // charts_storage_url: this.chartsStorageUrl,
      charts_storage_api_version: this.chartsStorageApiVersion,
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
          {
            name: "SMT Trend+",
            metainfo: {
              _metainfoVersion: 51,
              description: "SMT Trend+",
              shortDescription: "SMT Trend+",
              is_hidden_study: false,
              is_price_study: true,
              isCustomIndicator: true,
              linkedToSeries: true,
              isTVScript: false,
              id: "SMT Trend+@tv-basicstudies-1",

              format: {
                type: "price",
                precision: 2,
              },
              plots: [
                {
                  id: "plot_0",
                  type: "shapes",
                },
                {
                  id: "plot_1",
                  type: "shapes",
                },
              ],
              palettes: {
                palette_0: {
                  colors: [
                    {
                      name: "Buy",
                    },
                    {
                      name: "Sell",
                    },
                  ],
                  valToIndex: {
                    0: 0,
                    1: 1,
                  },
                },
              },
              styles: {
                plot_0: {
                  isHidden: false,
                  // location: 'Bottom',
                  size: "normal", // size of the shape, possible values are 'auto', 'tiny', 'small', 'normal', 'large', 'huge'
                  text: "BÁN",
                  title: "BÁN",
                },
                plot_1: {
                  isHidden: false,
                  // location: 'Bottom',
                  size: "normal", // size of the shape, possible values are 'auto', 'tiny', 'small', 'normal', 'large', 'huge'
                  text: "MUA",
                  title: "MUA",
                },
              },
              defaults: {
                styles: {
                  plot_0: {
                    color: "#B22222",
                    textColor: "#FFFFFF",
                    plottype: "shape_label_down",
                    location: "AboveBar",
                    visible: true,
                    transparency: 0,
                  },
                  plot_1: {
                    color: "#32CD32",
                    textColor: "#FFFFFF",
                    plottype: "shape_label_up",
                    location: "BelowBar",
                    visible: true,
                    transparency: 0,
                  },
                },
                inputs: {
                  emalow: 120,
                  emafast: 260,
                  ma: 150,
                },
                precision: 2,
                palettes: {
                  palette_0: {
                    colors: {
                      0: {
                        color: "#642C94",
                        width: 2,
                        style: 0,
                      },
                      1: {
                        color: "#32CD32",
                        width: 2,
                        style: 0,
                      },
                    },
                  },
                },
              },
              inputs: [
                {
                  id: "emalow",
                  name: "ema low",
                  type: "integer",
                  min: 1,
                  max: 500,
                },
                {
                  id: "emafast",
                  name: "ema fast",
                  type: "integer",
                  min: 1,
                  max: 500,
                },
                {
                  id: "ma",
                  name: "Moving average",
                  type: "integer",
                  min: 1,
                  max: 500,
                },
              ],
            },
            constructor: function () {
              this.init = function (context, inputCallback) {
                this._context = context;
                this._input = inputCallback;
                this.macd = function (source, fastMA, slowMA) {
                  const fast = PineJS.Std.ema(source, fastMA, this._context);
                  const slow = PineJS.Std.ema(source, slowMA, this._context);
                  return slow - fast;
                };
              };
              this.main = function (context, inputCallback) {
                this._context = context;
                this._input = inputCallback;

                const emafast = this._input(1);
                const emalow = this._input(0);
                const ma = this._input(2);
                const ema9 = 9 * Math.round(emalow / 12);
                const atrPeriod = 10;
                const factor = 3;
                const low = PineJS.Std.low(this._context);
                const high = PineJS.Std.high(this._context);
                const close = PineJS.Std.close(this._context);
                const closeS = this._context.new_var(close);
                const close1 = closeS.get(1);
                const sma = PineJS.Std.ema(closeS, ma, this._context);
                const ema2000 = PineJS.Std.ema(closeS, 5000, this._context);
                const currMacd = this.macd(closeS, emafast, emalow);
                var currMacdS = this._context.new_var(currMacd);
                var preMacd = isNaN(currMacdS.get(1)) ? 0 : currMacdS.get(1);

                const hl2 = (high + low) / 2;
                const atr = PineJS.Std.atr(atrPeriod, this._context);
                const atr1 = this._context.new_var(atr).get(1);
                var upperBand = hl2 + factor * atr;
                var upperBandS = this._context.new_var();
                var prevUpperBand = isNaN(upperBandS.get(1))
                  ? 0
                  : upperBandS.get(1);
                var lowerBand = hl2 - factor * atr;
                var lowerBandS = this._context.new_var();
                var prevLowerBand = isNaN(lowerBandS.get(1))
                  ? 0
                  : lowerBandS.get(1);

                lowerBand =
                  lowerBand > prevLowerBand
                    ? lowerBand
                    : close1 < prevLowerBand
                    ? lowerBand
                    : prevLowerBand;
                lowerBandS.set(lowerBand);
                lowerBand = PineJS.Std.highest(lowerBandS, 10, this._context);

                upperBand =
                  upperBand < prevUpperBand
                    ? upperBand
                    : close1 > prevUpperBand
                    ? upperBand
                    : prevUpperBand;
                upperBandS.set(upperBand);
                upperBand = PineJS.Std.lowest(upperBandS, 10, this._context);

                var direction = NaN;
                var superTrend = NaN;
                var superTrendS = this._context.new_var();
                var prevSuperTrend = superTrendS.get(1);
                if (isNaN(atr1)) direction = 1;
                else if (prevSuperTrend == prevUpperBand) {
                  direction = close > upperBand ? -1 : 1;
                } else direction = close < lowerBand ? 1 : -1;
                superTrend = direction == -1 ? lowerBand : upperBand;
                superTrendS.set(superTrend);

                var color = NaN;
                if (direction < 0) color = 1;
                else if (direction > 0) color = 0;
                var long = NaN;
                var short = NaN;
                if (preMacd < 0 && currMacd >= 0 && color == 1 && close > sma && signal != 1) {
                  long = 1;
                  signal = 1;
                } 
                if ( preMacd > 0 && currMacd <= 0 && color == 0 && close < sma && signal != 0 ) {
                  short = 1;
                  signal = 0;
                }

                return [short, long];
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
        thisVue.trendDerivativeIndicators,
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
