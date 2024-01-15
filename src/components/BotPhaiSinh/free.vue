<template>
  <div ref="chartContainer" class="TVChartContainer" id="tvWidgetContainer" />
</template>

<script>
var signal = NaN
var dataCurrMACD
import { widget } from '../../assets/charting_library'
// import { UDFCompatibleDatafeed } from '../../assets/datafeeds/udf/lib/udf-compatible-datafeed'
import Datafeed from '@/assets/datafeed.js'
// function getLanguageFromURL() {
//   const regex = new RegExp('[\\?&]lang=([^&#]*)')
//   const results = regex.exec(window.location.search)
//   return results === null
//     ? null
//     : decodeURIComponent(results[1].replace(/\+/g, ' '))
// }
export default {
  name: 'TVChartContainerPhaiSinh',
  props: {
    symbol: {
      default: 'VN30F1M',
      type: String
    },
    interval: {
      default: '1',
      type: String
    },
    libraryPath: {
      default: '/charting_library/',
      type: String
    },
    chartsStorageUrl: {
      default: 'https://saveload.tradingview.com',
      type: String
    },
    chartsStorageApiVersion: {
      default: '1.1',
      type: String
    },
    clientId: {
      default: 'smtchart.vn',
      type: String
    },
    userId: {
      default: 'public_user_id',
      type: String
    },
    fullscreen: {
      default: false,
      type: Boolean
    },
    autosize: {
      default: true,
      type: Boolean
    },
    studiesOverrides: {
      default: () => {},
      type: Object
    }
  },
  data: function() {
    return {
      freeDerivativeIndicators: [
        {
          name: 'SMT Free+',
          visible: true
        },
        {
          name: 'VOLUME',
          visible: true
        }
      ]
    }
  },
  tvWidget: null,
  mounted() {
    const thisVue = this
    const container = this.$refs.chartContainer
    const widgetOptions = {
      symbol: this.symbol,
      datafeed: Datafeed,
      locale: 'vi',
      timezone: 'Asia/Ho_Chi_Minh',
      interval: this.interval,
      container: container,
      library_path: this.libraryPath,
      logo: {
        image: '@/assets/logo-st.png',
        link: 'http://smtchart.vn/'
      },
      theme: 'dark',
      // charts_storage_url: this.chartsStorageUrl,
      charts_storage_api_version: this.chartsStorageApiVersion,
      client_id: this.clientId,
      user_id: this.userId,
      fullscreen: this.fullscreen,
      autosize: this.autosize,
      studies_overrides: this.studiesOverrides,
      load_last_chart: true,
      favorites: {
        indicators: ['Volume']
      },
      resolution: 1,
      widgetbar: {
        details: true,
        news: true,
        watchlist: true,
        datawindow: true,
        watchlist_settings: {
          default_symbols: [
            '###STOCKS',
            'NASDAQ:AAPL',
            'NASDAQ:MSFT',
            'NYSE:IBM',
            '###FOREX',
            'FX:EURUSD',
            'FX:GBPUSD',
            '###CRYPTO',
            'CRYPTO:BTCUSD',
            'CRYPTO:ETHUSD'
          ]
        }
      },
      overrides: {
        'mainSeriesProperties.showCountdown': true
      },
      disabled_features: [
        'use_localstorage_for_settings',
        'open_account_manager',
        'dom_widget'
      ],
      enabled_features: [
        'study_templates',
        'pre_post_market_sessions',
        'show_symbol_logos',
        'show_exchange_logos',
        'seconds_resolution',
        'secondary_series_extend_time_scale',
        'show_percent_option_for_right_margin',
        'display_data_mode'
      ],
      custom_indicators_getter: function(PineJS) {
        return Promise.resolve([
          {
            name: 'SMT Free+',
            metainfo: {
              _metainfoVersion: 51,
              description: 'SMT Free+',
              shortDescription: 'SMT Free+',
              is_hidden_study: false,
              is_price_study: true,
              isCustomIndicator: true,
              linkedToSeries: true,
              isTVScript: false,
              id: 'SMT Free+@tv-basicstudies-1',

              format: {
                type: 'price',
                precision: 2
              },
              plots: [
                {
                  id: 'plot_0',
                  type: 'shapes'
                },
                {
                  id: 'plot_1',
                  type: 'shapes'
                }
              ],
              palettes: {
                palette_0: {
                  colors: [
                    {
                      name: 'Buy'
                    },
                    {
                      name: 'Sell'
                    }
                  ],
                  valToIndex: {
                    0: 0,
                    1: 1
                  }
                }
              },
              styles: {
                plot_0: {
                  isHidden: false,
                  // location: 'Bottom',
                  size: 'normal', // size of the shape, possible values are 'auto', 'tiny', 'small', 'normal', 'large', 'huge'
                  text: 'BÁN',
                  title: 'BÁN'
                },
                plot_1: {
                  isHidden: false,
                  // location: 'Bottom',
                  size: 'normal', // size of the shape, possible values are 'auto', 'tiny', 'small', 'normal', 'large', 'huge'
                  text: 'MUA',
                  title: 'MUA'
                }
              },
              defaults: {
                styles: {
                  plot_0: {
                    color: '#B22222',
                    textColor: '#FFFFFF',
                    plottype: 'shape_label_down',
                    location: 'AboveBar',
                    visible: true,
                    transparency: 0
                  },
                  plot_1: {
                    color: '#32CD32',
                    textColor: '#FFFFFF',
                    plottype: 'shape_label_up',
                    location: 'BelowBar',
                    visible: true,
                    transparency: 0
                  }
                },
                inputs: {

                },
                precision: 2,
                palettes: {
                  palette_0: {
                    colors: {
                      0: {
                        color: '#642C94',
                        width: 2,
                        style: 0
                      },
                      1: {
                        color: '#32CD32',
                        width: 2,
                        style: 0
                      }
                    }
                  }
                }
              },
              inputs: [
                {
                  id: 'emalow',
                  name: 'ema low',
                  type: 'integer',
                  min: 1,
                  max: 500
                },
                {
                  id: 'emafast',
                  name: 'ema fast',
                  type: 'integer',
                  min: 1,
                  max: 500
                },
                {
                  id: 'ma',
                  name: 'Moving average',
                  type: 'integer',
                  min: 1,
                  max: 500
                }
              ]
            },
            constructor: function() {
              this.init = function(context, inputCallback) {
                this._context = context
                this._input = inputCallback
                this.macd = function(series, fastMA, slowMA) {
                  const fast = PineJS.Std.ema(series, fastMA, this._context)
                  const slow = PineJS.Std.ema(series, slowMA, this._context)
                  return slow - fast
                }
              }
              this.main = function(context, inputCallback) {
                this._context = context
                this._input = inputCallback
                const emafast = 260
                const emalow = 120
                const ma = 100
                const close = PineJS.Std.close(this._context)
                var closeS = this._context.new_var(close)
                const sma = PineJS.Std.ema(closeS, ma, this._context)
                const ema1000 = PineJS.Std.ema(closeS, 5000, this._context)
                var currMacd = this.macd(closeS, emafast, emalow)
                var currMacdS = this._context.new_var(currMacd)
                var preMacd = isNaN(currMacdS.get(1)) ? 0 : currMacdS.get(1)
                var long = NaN
                var short = NaN
                if (preMacd < 0 && currMacd >= 0 && close > sma && signal != 1) {
                  long = 'LONG \n' + close
                  signal = 1
                }
                if (preMacd > 0 && currMacd <= 0 && close < sma && signal != 0) {
                  short = 'SHORT \n' + close
                  signal = 0
                }
                return [short, long]
              }
            }
          }
        ])
      }
    }

    // eslint-disable-next-line new-cap
    const tvWidget = new widget(widgetOptions)
    this.tvWidget = tvWidget

    tvWidget.onChartReady(() => {
      tvWidget.subscribe('onAutoSaveNeeded', () => {
        console.log({
          indicators: thisVue.getCurrentChartUserIndicators(
            tvWidget.activeChart()
          )
        })
      })
      thisVue.restoreUserIndicators(
        thisVue.freeDerivativeIndicators,
        tvWidget.activeChart()
      )
      tvWidget.chart().setChartType(6);
      var runrot = setInterval(() => {
        let managerroot = $("#tvWidgetContainer iframe").contents().find("#overlap-manager-root");
        if (managerroot && managerroot.length > 0) {
          clearInterval(runrot);
          var headerchartTypes = $("#tvWidgetContainer iframe").contents().find("#header-toolbar-chart-styles .apply-common-tooltip.isOpened-merBkM5y");
          if (headerchartTypes && headerchartTypes.length > 0) {
            let htmlpnf = `<div data-value="pnf" class="item-jFqVJoPk withIcon-jFqVJoPk"><span class="icon-jFqVJoPk"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M14.5 16a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm3.293-15.5l4.707 4.707.707-.707L18.5 4.793z"></path><path d="M18.5 10.207L23.207 5.5l-.707-.707L17.793 9.5zm-.707 1.293l4.707 4.707.707-.707-4.707-4.707z"></path><path d="M18.5 16.207l4.707-4.707-.707-.707-4.707 4.707zM5.793 17.5l4.707 4.707.707-.707L6.5 16.793z"></path><path d="M6.5 22.207l4.707-4.707-.707-.707L5.793 21.5zM5.793 5.5l4.707 4.707.707-.707L6.5 4.793z"></path><path d="M6.5 10.207L11.207 5.5l-.707-.707L5.793 9.5zM5.793 11.5l4.707 4.707.707-.707L6.5 10.793z"></path><path d="M6.5 16.207l4.707-4.707-.707-.707L5.793 15.5z"></path></svg></span><span class="labelRow-jFqVJoPk"><span class="label-jFqVJoPk">ĐIểm &amp; Số liệu</span></span><span class="toolbox-jFqVJoPk showOnHover-jFqVJoPk"></span></div>`;
            let itempnt = managerroot.find('div[data-name="popup-menu-container"] div[data-name="menu-inner"] div[data-value="pnf"]');
            if (itempnt && itempnt.length > 0) {
            } else {
              managerroot.find('div[data-name="popup-menu-container"] div[data-name="menu-inner"]').append(htmlpnf);
            }
          managerroot.find('div[data-name="popup-menu-container"] div[data-name="menu-inner"] div[data-value="pnf"]').unbind("click").click(function() {
                tvWidget.chart().setChartType(6);
                managerroot.html("");
            });
          }
          
          managerroot.on('DOMSubtreeModified', function(){
            var headerchartTypes = $("#tvWidgetContainer iframe").contents().find("#header-toolbar-chart-styles .apply-common-tooltip.isOpened-merBkM5y");
            let htmlpnf = `<div data-value="pnf" class="item-jFqVJoPk withIcon-jFqVJoPk"><span class="icon-jFqVJoPk"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="currentColor"><path d="M14.5 16a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm3.293-15.5l4.707 4.707.707-.707L18.5 4.793z"></path><path d="M18.5 10.207L23.207 5.5l-.707-.707L17.793 9.5zm-.707 1.293l4.707 4.707.707-.707-4.707-4.707z"></path><path d="M18.5 16.207l4.707-4.707-.707-.707-4.707 4.707zM5.793 17.5l4.707 4.707.707-.707L6.5 16.793z"></path><path d="M6.5 22.207l4.707-4.707-.707-.707L5.793 21.5zM5.793 5.5l4.707 4.707.707-.707L6.5 4.793z"></path><path d="M6.5 10.207L11.207 5.5l-.707-.707L5.793 9.5zM5.793 11.5l4.707 4.707.707-.707L6.5 10.793z"></path><path d="M6.5 16.207l4.707-4.707-.707-.707L5.793 15.5z"></path></svg></span><span class="labelRow-jFqVJoPk"><span class="label-jFqVJoPk">ĐIểm &amp; Số liệu</span></span><span class="toolbox-jFqVJoPk showOnHover-jFqVJoPk"></span></div>`;
            if (headerchartTypes && headerchartTypes.length > 0) {
              let itempnt = managerroot.find('div[data-name="popup-menu-container"] div[data-name="menu-inner"] div[data-value="pnf"]');
            if (itempnt && itempnt.length > 0) {
            } else {
              managerroot.find('div[data-name="popup-menu-container"] div[data-name="menu-inner"]').append(htmlpnf);
            }
            managerroot.find('div[data-name="popup-menu-container"] div[data-name="menu-inner"] div[data-value="pnf"]').unbind("click").click(function() {
                tvWidget.chart().setChartType(6);
                managerroot.html("");
            });
            }
            
          });
        }
      }, 1000);
    })
  },
  destroyed() {
    if (this.tvWidget !== null) {
      this.tvWidget.remove()
      this.tvWidget = null
    }
  },
  methods: {
    getCurrentChartUserIndicators(activeChart) {
      if (!activeChart) {
        return []
      }

      return activeChart.getAllStudies().map((study) => ({
        name: study.name,
        visible: activeChart.getStudyById(study.id).isVisible(),
        inputs: activeChart.getStudyById(study.id).getInputValues()
        // get styles
      }))
    },

    restoreUserIndicators(indicators, activeChart) {
      if (!indicators || indicators.length === 0) {
        return
      }

      try {
        Promise.all(
          indicators.map(async(indicator) => {
            const visible = indicator.visible
            console.log('indicator.inputs:: ', indicator.inputs)
            const newStudyID = await activeChart.createStudy(
              indicator.name,
              false,
              false,
              indicator.inputs,
              { visible }
            )
            console.log('newStudyID:: ', newStudyID)
            // convert saved styles to overrides format ?
          })
        )
      } catch (e) {
        return
      }
    }
  }
}
</script>

    <style scoped>
.TVChartContainer {
  height: calc(100vh - 50px);
}
</style>
