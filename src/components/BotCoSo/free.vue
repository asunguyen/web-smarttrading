<template>
  <div>
    <div id="tvWidgetContainer" ref="chartContainer" class="TVChartContainer" />
    <SmtIndicator @dataIndi="dataIndi"></SmtIndicator>
  </div>
</template>

<script>
let tvWidget;
import SmtIndicator from '../SMTIndicator';
import { widget } from "../../assets/charting_library/";
// import { UDFCompatibleDatafeed } from '../../assets/datafeeds/udf/lib/udf-compatible-datafeed'
import Datafeed from "@/assets/datafeed.js";
function getLanguageFromURL() {
  const regex = new RegExp("[\\?&]lang=([^&#]*)");
  const results = regex.exec(window.location.search);
  return results === null
    ? null
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}
export default {
  components: {
    SmtIndicator
  },
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
      default: "https://api.smtchart.vn/v1/data/csfree",
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
      default: localStorage.getItem("iduser") + "_csfree",
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
      freeBaseIndicators: [
        {
          name: "SMT Free",
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
          {
            name: "SMT Free",
            metainfo: {
              _metainfoVersion: 51,
              description: "SMT Free",
              shortDescription: "SMT Free",
              is_hidden_study: false,
              is_price_study: false,
              isCustomIndicator: true,
              linkedToSeries: true,

              id: "SMT Free@tv-basicstudies-1",

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
              ],
              styles: {
                plot_0: {
                  title: "Histogram",
                  histogramBase: 1,
                },
                plot_1: {
                  title: "Histogram",
                  histogramBase: 1,
                },
                plot_2: {
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
                inputs: {},
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
                var AV = 30;
                var PR = 14;
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
        ]);
      },
    };

    // eslint-disable-next-line new-cap
    tvWidget = new widget(widgetOptions);
    this.tvWidget = tvWidget;

    tvWidget.onChartReady(() => {
      tvWidget.activeChart().removeAllStudies();

      thisVue.restoreUserIndicators(
        thisVue.freeBaseIndicators,
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
    dataIndi(data) {
      console.log("data:: ",data)
      if (data && data.source) {
        console.log("tvWidget.activeChart():: ", tvWidget.activeChart().createStudyTemplate(data.source));
        
      }
    },
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
