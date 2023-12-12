<template>
  <div ref="chartContainer" class="TVChartContainer" />
</template>

<script>
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
  name: 'TVChartContainerCoso',
  props: {
    symbol: {
      default: 'VNINDEX',
      type: String
    },
    interval: {
      default: 'D',
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
      freeBaseIndicators: [
        {
          name: 'SMT Free',
          visible: true
        }
      ],
      tBaseIndicators: [
        {
          name: 'SMT T+',
          visible: true
        }
      ],
      trendBaseIndicators: [
        {
          name: 'SMT Trend',
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
            name: 'SMT Trend',
            metainfo: {
              _metainfoVersion: 51,
              description: 'SMT Trend',
              shortDescription: 'SMT Trend',
              is_hidden_study: false,
              is_price_study: true,
              isCustomIndicator: true,
              linkedToSeries: true,
              isTVScript: false,
              id: 'SMT Trend@tv-basicstudies-1',

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
                },
                plot_2: {
                  linestyle: 0,
                  visible: true,
                  linewidth: 2,
                  plottype: 0,
                  trackPrice: false,
                  transparency: 0,
                  color: '#008FFF'
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
                  },
                },
                inputs: {
                  atrPeriod: 10,
                  factor: 3
                },
                precision: 2,
              },
              inputs: [
                {
                  id: 'atrPeriod',
                  name: 'ATR Length',
                  type: 'integer',
                  min: 1,
                  max: 50
                },
                {
                  id: 'factor',
                  name: 'Factor',
                  type: 'float',
                  min: 1,
                  step: 0.1,
                  max: 2e3
                }
              ]
            },
            constructor: function() {
              this.init = function(context, inputCallback) {
                this._context = context
                this._input = inputCallback
              }
              this.main = function(context, inputCallback) {
                this._context = context
                this._input = inputCallback

                const atrPeriod = this._input(0)
                const factor = this._input(1)
                const low = PineJS.Std.low(this._context)
                const high = PineJS.Std.high(this._context)
                const close = PineJS.Std.low(this._context)
                const close1 = this._context.new_var(close).get(1)
                const hl2 = (high + low) / 2
                const atr = PineJS.Std.atr(atrPeriod, this._context)
                const atr1 = this._context.new_var(atr).get(1)

                var upperBand = hl2 + factor * atr
                var upperBandS = this._context.new_var()
                var prevUpperBand = isNaN(upperBandS.get(1))
                  ? 0
                  : upperBandS.get(1)
                var lowerBand = hl2 - factor * atr
                var lowerBandS = this._context.new_var()
                var prevLowerBand = isNaN(lowerBandS.get(1))
                  ? 0
                  : lowerBandS.get(1)

                lowerBand =
                    lowerBand > prevLowerBand
                      ? lowerBand
                      : close1 < prevLowerBand
                        ? lowerBand
                        : prevLowerBand
                lowerBandS.set(lowerBand)

                upperBand =
                    upperBand < prevUpperBand
                      ? upperBand
                      : close1 > prevUpperBand
                        ? upperBand
                        : prevUpperBand
                upperBandS.set(upperBand)

                var direction = NaN
                var superTrend = NaN
                var superTrendS = this._context.new_var()
                var prevSuperTrend = superTrendS.get(1)
                if (isNaN(atr1)) direction = 1
                else if (prevSuperTrend == prevUpperBand) {
                  direction = close > upperBand ? -1 : 1
                } else direction = close < lowerBand ? 1 : -1
                superTrend = direction == -1 ? lowerBand : upperBand
                superTrendS.set(superTrend)

                var color = NaN
                if (direction < 0) color = 1
                else if (direction > 0) color = 0

                var long = NaN
                var short = NaN
                var signal = NaN
                var signalS = this._context.new_var()
                signal = isNaN(signalS.get(0))
                  ? signalS.get(1)
                  : signalS.get(0)
                if (color == 1 && signalS.get(1) != 1) {
                  long = 1
                  signal = 1
                } else if (color == 0 && signalS.get(1) != 0) {
                  short = 1
                  signal = 0
                }
                signalS.set(signal)

                return [short, long]
              }
            }
          },
          {
            name: 'SMT T+',
            metainfo: {
              _metainfoVersion: 51,
              description: 'SMT T+',
              shortDescription: 'SMT T+',
              is_hidden_study: false,
              is_price_study: true,
              isCustomIndicator: true,
              linkedToSeries: true,
              isTVScript: false,
              id: 'SMT T+@tv-basicstudies-1',

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
                },
                plot_2: {
                  linestyle: 0,
                  visible: true,
                  linewidth: 2,
                  plottype: 0,
                  trackPrice: false,
                  transparency: 0,
                  color: '#008FFF'
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
                  },
                },
                inputs: {
                  atrPeriod: 34,
                  factor: 3
                },
                precision: 2,
              },
              inputs: [
                {
                  id: 'atrPeriod',
                  name: 'ATR Length',
                  type: 'integer',
                  min: 1,
                  max: 50
                },
                {
                  id: 'factor',
                  name: 'Factor',
                  type: 'float',
                  min: 1,
                  step: 0.1,
                  max: 2e3
                }
              ]
            },
            constructor: function() {
              this.init = function(context, inputCallback) {
                this._context = context
                this._input = inputCallback
              }
              this.main = function(context, inputCallback) {
                this._context = context
                this._input = inputCallback

                const atrPeriod = this._input(0)
                const factor = this._input(1)
                const low = PineJS.Std.low(this._context)
                const high = PineJS.Std.high(this._context)
                const close = PineJS.Std.low(this._context)
                const close1 = this._context.new_var(close).get(1)
                const hl2 = (high + low) / 2
                const atr = PineJS.Std.atr(atrPeriod, this._context)
                const atr1 = this._context.new_var(atr).get(1)

                var upperBand = hl2 + factor * atr
                var upperBandS = this._context.new_var()
                var prevUpperBand = isNaN(upperBandS.get(1))
                  ? 0
                  : upperBandS.get(1)
                var lowerBand = hl2 - factor * atr
                var lowerBandS = this._context.new_var()
                var prevLowerBand = isNaN(lowerBandS.get(1))
                  ? 0
                  : lowerBandS.get(1)

                lowerBand =
                    lowerBand > prevLowerBand
                      ? lowerBand
                      : close1 < prevLowerBand
                        ? lowerBand
                        : prevLowerBand
                lowerBandS.set(lowerBand)

                upperBand =
                    upperBand < prevUpperBand
                      ? upperBand
                      : close1 > prevUpperBand
                        ? upperBand
                        : prevUpperBand
                upperBandS.set(upperBand)

                var direction = NaN
                var superTrend = NaN
                var superTrendS = this._context.new_var()
                var prevSuperTrend = superTrendS.get(1)
                if (isNaN(atr1)) direction = 1
                else if (prevSuperTrend == prevUpperBand) {
                  direction = close > upperBand ? -1 : 1
                } else direction = close < lowerBand ? 1 : -1
                superTrend = direction == -1 ? lowerBand : upperBand
                superTrendS.set(superTrend)

                var color = NaN
                if (direction < 0) color = 1
                else if (direction > 0) color = 0

                var long = NaN
                var short = NaN
                var signal = NaN
                var signalS = this._context.new_var()
                signal = isNaN(signalS.get(0))
                  ? signalS.get(1)
                  : signalS.get(0)
                if (color == 1 && signalS.get(1) != 1) {
                  long = 1
                  signal = 1
                } else if (color == 0 && signalS.get(1) != 0) {
                  short = 1
                  signal = 0
                }
                signalS.set(signal)

                return [short, long]
              }
            }
          },
          {
            name: 'SMT Free',
            metainfo: {
              _metainfoVersion: 51,
              description: 'SMT Free',
              shortDescription: 'SMT Free',
              is_hidden_study: false,
              is_price_study: false,
              isCustomIndicator: true,
              linkedToSeries: true,

              id: 'SMT Free@tv-basicstudies-1',

              format: {
                type: 'price',
                precision: 2
              },
              plots: [
                {
                  id: 'plot_0',
                  type: 'line'
                },
                {
                  id: 'plot_1',
                  type: 'line'
                },
                {
                  id: 'plot_2',
                  type: 'line'
                }
              ],
              styles: {
                plot_0: {
                  title: 'Histogram',
                  histogramBase: 1
                },
                plot_1: {
                  title: 'Histogram',
                  histogramBase: 1
                },
                plot_2: {
                  title: 'Histogram',
                  histogramBase: 1
                }
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
                    color: '#008FFF'
                  },
                  plot_1: {
                    linestyle: 0,
                    visible: true,
                    linewidth: 1,
                    plottype: 0,
                    trackPrice: false,
                    transparency: 0,
                    color: '#04FF00'
                  },
                  plot_2: {
                    linestyle: 0,
                    visible: true,
                    linewidth: 1,
                    plottype: 0,
                    trackPrice: false,
                    transparency: 0,
                    color: '#FF0000'
                  }
                },
                inputs: {
                  av: 30,
                  pr: 14
                },
                precision: 2
              },
              inputs: [
                {
                  id: 'av',
                  name: 'AV',
                  type: 'integer',
                  min: 1,
                  max: 2e3
                },
                {
                  id: 'pr',
                  name: 'PR',
                  type: 'integer',
                  min: 1,
                  max: 2e3
                }
              ]
            },
            constructor: function() {
              this.main = function(context, inputCallback) {
                this._context = context
                this._input = inputCallback
                var AV = this._input(0)
                var PR = this._input(1)
                var high = PineJS.Std.high(this._context)
                var highS = this._context.new_var(high)
                var low = PineJS.Std.low(this._context)
                var lowS = this._context.new_var(low)
                var upMove = highS.get(0) - highS.get(1)
                var downMove = lowS.get(0) - lowS.get(1)
                var plusDM = upMove > downMove && upMove > 0 ? upMove : 0
                var plusDMS = this._context.new_var(plusDM)
                var minusDM = downMove > upMove && downMove > 0 ? downMove : 0
                var minusDMS = this._context.new_var(minusDM)
                var tr1 = highS.get(0) - lowS.get(0)
                var close = PineJS.Std.low(this._context)
                var closeS = this._context.new_var(close)
                var tr2 = Math.abs(highS.get(0) - closeS.get(1))
                var tr3 = Math.abs(lowS.get(0) - closeS.get(1))
                var trueRange = Math.max(Math.max(tr1, tr2), tr3)
                var trueRangeS = this._context.new_var(trueRange)
                var plusDI =
                    (PineJS.Std.sma(plusDMS, PR, this._context) /
                      PineJS.Std.sma(trueRangeS, PR, this._context)) *
                    100
                var minusDI =
                    (PineJS.Std.sma(minusDMS, PR, this._context) /
                      PineJS.Std.sma(trueRangeS, PR, this._context)) *
                    100

                var DX =
                    (Math.abs(plusDI - minusDI) / (plusDI + minusDI)) * 100
                var DXS = this._context.new_var(DX)
                var ADX = PineJS.Std.sma(DXS, PR, this._context)

                const A = plusDI < 20
                const B = minusDI < 20
                const E = ADX > AV
                const P = plusDI
                const Q = minusDI

                const HL = P > Q
                const LH = Q > P
                const X = E && HL && B
                const Y = E && LH && A
                return [ADX, P, Q]
              }
            }
          },
         
        
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
      var pathName = this.$router.currentRoute.fullPath
      // add bot
      if (pathName === '/ai-trading/robot-base/free') {
        thisVue.restoreUserIndicators(
          thisVue.freeBaseIndicators,
          tvWidget.activeChart()
        )
      } else if (pathName === '/ai-trading/robot-base/t-plus') {
        thisVue.restoreUserIndicators(
          thisVue.tBaseIndicators,
          tvWidget.activeChart()
        )
      } else if (pathName === '/ai-trading/robot-base/trend') {
        thisVue.restoreUserIndicators(
          thisVue.trendBaseIndicators,
          tvWidget.activeChart()
        )
      }
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
