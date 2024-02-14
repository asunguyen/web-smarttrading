<template>
  <div ref="chartContainer" id="tvWidgetContainer" class="TVChartContainer" />
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
  name: "TVChartContainerCoso",
  props: {
    symbol: {
      default: "VNINDEX",
      type: String,
    },
    interval: {
      default: "D",
      type: String,
    },
    libraryPath: {
      default: "/charting_library/",
      type: String,
    },
    chartsStorageUrl: {
      default: "https://api.smtchart.vn/v1/data/cstrend",
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
      default: localStorage.getItem("iduser") + "_cstrend",
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
      trendBaseIndicators: [
        {
          name: "SMT Trend",
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
      charts_storage_url: this.chartsStorageUrl,
      charts_storage_api_version: this.chartsStorageApiVersion,
      client_id: this.clientId,
      user_id: this.userId,
      fullscreen: this.fullscreen,
      autosize: this.autosize,
      studies_overrides: this.studiesOverrides,
      load_last_chart: true,
      saveload_separate_drawings_storage: true,
      chart_template_storage: true,
      use_localstorage_for_settings: true,
      favorites: {},
      resolution: 1,
      widgetbar: {
        details: true,
        news: true,
        watchlist: true,
        datawindow: true,
      },
      overrides: {
        "mainSeriesProperties.showCountdown": true,
      },
      header_widget_buttons_mode: "fullsize",
      disabled_features: ["dom_widget"],
      enabled_features: [
        "header_layouttoggle",
        "right_toolbar",
        "trading_account_manager",
        "chart_template_storage",
        "use_localstorage_for_settings",
      ],
      custom_indicators_getter: function (PineJS) {
        return Promise.resolve([
          {
            name: "SMT Trend",
            metainfo: {
              _metainfoVersion: 51,
              description: "SMT Trend",
              shortDescription: "SMT Trend",
              is_hidden_study: false,
              is_price_study: true,
              isCustomIndicator: true,
              linkedToSeries: true,
              isTVScript: false,
              id: "SMT Trend@tv-basicstudies-1",

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
                plot_2: {
                  linestyle: 0,
                  visible: true,
                  linewidth: 2,
                  plottype: 0,
                  trackPrice: false,
                  transparency: 0,
                  color: "#008FFF",
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
                inputs: {},
                precision: 2,
              },
              inputs: [
                {
                  id: "atrPeriod",
                  name: "ATR Length",
                  type: "integer",
                  min: 1,
                  max: 50,
                },
                {
                  id: "factor",
                  name: "Factor",
                  type: "float",
                  min: 1,
                  step: 0.1,
                  max: 2e3,
                },
              ],
            },
            constructor: function () {
              this.init = function (context, inputCallback) {
                this._context = context;
                this._input = inputCallback;
              };
              this.main = function (context, inputCallback) {
                this._context = context;
                this._input = inputCallback;

                const atrPeriod = 10;
                const factor = 3;
                const low = PineJS.Std.low(this._context);
                const high = PineJS.Std.high(this._context);
                const close = PineJS.Std.close(this._context);
                const close1 = this._context.new_var(close).get(1);
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

                upperBand =
                  upperBand < prevUpperBand
                    ? upperBand
                    : close1 > prevUpperBand
                    ? upperBand
                    : prevUpperBand;
                upperBandS.set(upperBand);

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
                var signal = NaN;
                var signalS = this._context.new_var();
                signal = isNaN(signalS.get(0))
                  ? signalS.get(1)
                  : signalS.get(0);
                if (color == 1 && signalS.get(1) != 1) {
                  long = "LONG \n" + close;
                  signal = 1;
                } else if (color == 0 && signalS.get(1) != 0) {
                  short = "SHORT \n" + close;
                  signal = 0;
                }
                signalS.set(signal);

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
      tvWidget.activeChart().removeAllStudies();

      thisVue.restoreUserIndicators(
        thisVue.trendBaseIndicators,
        tvWidget.activeChart()
      );
      tvWidget.subscribe("onAutoSaveNeeded", (data) => {
        console.log("data save:: ", data);
      });

      var runrot = setInterval(() => {
        let managerroot = $("#tvWidgetContainer iframe")
          .contents()
          .find("#overlap-manager-root");
        if (managerroot && managerroot.length > 0) {
          var headerchartTypes = $("#tvWidgetContainer iframe")
            .contents()
            .find(
              "#header-toolbar-chart-styles .apply-common-tooltip.isOpened-merBkM5y"
            );
          if (headerchartTypes && headerchartTypes.length > 0) {
            let htmlpnf = `<div data-value="pnf" class="item-jFqVJoPk withIcon-jFqVJoPk"><span class="icon-jFqVJoPk"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M14.5 16a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm3.293-15.5l4.707 4.707.707-.707L18.5 4.793z"></path><path d="M18.5 10.207L23.207 5.5l-.707-.707L17.793 9.5zm-.707 1.293l4.707 4.707.707-.707-4.707-4.707z"></path><path d="M18.5 16.207l4.707-4.707-.707-.707-4.707 4.707zM5.793 17.5l4.707 4.707.707-.707L6.5 16.793z"></path><path d="M6.5 22.207l4.707-4.707-.707-.707L5.793 21.5zM5.793 5.5l4.707 4.707.707-.707L6.5 4.793z"></path><path d="M6.5 10.207L11.207 5.5l-.707-.707L5.793 9.5zM5.793 11.5l4.707 4.707.707-.707L6.5 10.793z"></path><path d="M6.5 16.207l4.707-4.707-.707-.707L5.793 15.5z"></path></svg></span><span class="labelRow-jFqVJoPk"><span class="label-jFqVJoPk">ĐIểm &amp; Số liệu</span></span><span class="toolbox-jFqVJoPk showOnHover-jFqVJoPk"></span></div>`;
            let itempnt = managerroot.find(
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
