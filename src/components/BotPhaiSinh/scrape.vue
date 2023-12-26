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
      default: 'http://api.smtchart.vn/v1/data/bot-scrape',
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
      scrapeDerivativeIndicators: [
        {
          name: 'ST Bot',
          visible: true
        },
        {
          name: 'ZO TREND',
          visible: true
        },
        {
          name: 'ST POWER',
          visible: true
        },
        {
          name: 'ST VOLUME',
          visible: true
        },
        {
          name: 'ZO SIGNAL',
          visible: true
        }
        // ZO TREND
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
      // charts_storage_api_version: this.chartsStorageApiVersion,
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
          // st bot
          {
            name: 'ST Bot',
            metainfo: {
              _metainfoVersion: 51,
              id: 'ST Bot@tv-basicstudies-1',
              description: 'ST Bot',
              shortDescription: 'ST Bot',
              isCustomIndicator: true,
              format: {
                type: 'inherit'
              },
              is_hidden_study: false,
              is_price_study: true,
              linkedToSeries: true,
              isTVScript: false,
              isTVScriptStub: false,
              scriptIdPart: '',
              plots: [
                {
                  id: 'signal_plot_0',
                  type: 'ohlc_open',
                  target: 'plotcandle_0'
                },
                {
                  id: 'signal_plot_1',
                  type: 'ohlc_high',
                  target: 'plotcandle_0'
                },
                {
                  id: 'signal_plot_2',
                  type: 'ohlc_low',
                  target: 'plotcandle_0'
                },
                {
                  id: 'signal_plot_3',
                  type: 'ohlc_close',
                  target: 'plotcandle_0'
                },
                {
                  id: 'signal_plot_4',
                  type: 'ohlc_colorer',
                  palette: 'signal_palette_0',
                  target: 'plotcandle_0'
                },
                {
                  id: 'trend1',
                  type: 'line'
                },
                {
                  id: 'trend1_colorer',
                  type: 'colorer',
                  target: 'trend1',
                  palette: 'trend_palette_1'
                },
                {
                  id: 'trend2',
                  type: 'line'
                },
                {
                  id: 'trend2_colorer',
                  type: 'colorer',
                  target: 'trend2',
                  palette: 'trend_palette_2'
                },
                {
                  id: 'eHigh',
                  type: 'line'
                },
                {
                  id: 'eHigh_colorer',
                  type: 'colorer',
                  target: 'eHigh',
                  palette: 'trend_palette_2'
                },
                {
                  id: 'eLow',
                  type: 'line'
                },
                {
                  id: 'eLow_colorer',
                  type: 'colorer',
                  target: 'eLow',
                  palette: 'trend_palette_2'
                },
                {
                  id: 'BGColorer',
                  type: 'bg_colorer',
                  palette: 'bg_palette_1'
                },
                {
                  id: 'BUY',
                  type: 'shapes'
                },
                {
                  id: 'SELL',
                  type: 'shapes'
                },
                {
                  id: 'SHORT',
                  type: 'shapes'
                },
                {
                  id: 'COVER',
                  type: 'shapes'
                },
                {
                  id: 'hl2',
                  type: 'line'
                }
              ],
              filledAreas: [
                {
                  id: 'fill_0',
                  title: 'Cloud',
                  objAId: 'trend1',
                  objBId: 'trend2',
                  type: 'plot_plot',
                  palette: 'trend_palette_2',
                  isHidden: true
                }
              ],
              ohlcPlots: {
                plotcandle_0: {
                  title: 'Signal'
                }
              },
              palettes: {
                signal_palette_0: {
                  colors: [
                    {
                      name: '1 Color'
                    },
                    {
                      name: '2 Color'
                    },
                    {
                      name: '3 Color'
                    },
                    {
                      name: '4 Color'
                    },
                    {
                      name: '5 Color'
                    },
                    {
                      name: '6 Color'
                    },
                    {
                      name: '7 Color'
                    },
                    {
                      name: '8 Color'
                    },
                    {
                      name: '9 Color'
                    },
                    {
                      name: '10 Color'
                    }
                  ]
                },
                trend_palette_1: {
                  colors: {
                    0: {
                      name: 'LONG'
                    },
                    1: {
                      name: 'SHORT'
                    }
                  }
                },
                trend_palette_2: {
                  colors: {
                    0: {
                      name: 'LONG'
                    },
                    1: {
                      name: 'SHORT'
                    }
                  },
                  valToIndex: {
                    0: true,
                    1: true
                  }
                },
                pal_cloud: {
                  colors: {
                    0: {
                      name: 'LONG'
                    },
                    1: {
                      name: 'SHORT'
                    }
                  },
                  valToIndex: {
                    0: true,
                    1: true
                  }
                },
                bg_palette_1: {
                  colors: [
                    {
                      name: 'LONG',
                      color: 'rgba(27, 94, 32, 0.2)'
                    },
                    {
                      name: 'SHORT',
                      color: 'rgba(128, 63, 63, 0.2)'
                    },
                    {
                      name: 'Normal',
                      color: '#000000'
                    }
                  ]
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
                  }
                },
                filledAreasStyle: {
                  fill_0: {
                    color: '#8C8C8C',
                    transparency: 10,
                    visible: true
                  }
                },
                palettes: {
                  signal_palette_0: {
                    colors: [
                      {
                        color: '#808080',
                        width: 1,
                        style: 0
                      },
                      {
                        color: '#00F400',
                        width: 1,
                        style: 0
                      },
                      {
                        color: '#006C00',
                        width: 1,
                        style: 0
                      },
                      {
                        color: '#0057AE',
                        width: 1,
                        style: 0
                      },
                      {
                        color: '#1A8CFF',
                        width: 1,
                        style: 0
                      },
                      {
                        color: '#FF917D',
                        width: 1,
                        style: 0
                      },
                      {
                        color: '#FD2600',
                        width: 1,
                        style: 0
                      },
                      {
                        color: '#891289',
                        width: 1,
                        style: 0
                      },
                      {
                        color: '#F29FF2',
                        width: 1,
                        style: 0
                      },
                      {
                        color: '#FFEB3B',
                        width: 1,
                        style: 0
                      }
                    ]
                  },
                  trend_palette_1: {
                    colors: {
                      0: {
                        color: '#FA8072',
                        width: 1,
                        style: 0
                      },
                      1: {
                        color: '#008080',
                        width: 1,
                        style: 0
                      }
                    }
                  },
                  trend_palette_2: {
                    colors: {
                      0: {
                        color: '#FA8072',
                        width: true,
                        style: true
                      },
                      1: {
                        color: '#008080',
                        width: true,
                        style: true
                      }
                    }
                  }
                },
                styles: {
                  BGColorer: {
                    visible: true,
                    transparency: 10
                  },
                  BUY: {
                    visible: true,
                    transparency: 10,
                    color: '#00FF00',
                    textColor: '#FFFFFF',
                    location: 'BelowBar',
                    plottype: 'shape_label_up'
                  },
                  SELL: {
                    visible: true,
                    transparency: 10,
                    color: '#FF0000',
                    textColor: '#FFFFFF',
                    location: 'AboveBar',
                    plottype: 'shape_label_down'
                  },
                  SHORT: {
                    visible: true,
                    transparency: 10,
                    color: '#FF0000',
                    textColor: '#FFFFFF',
                    location: 'AboveBar',
                    plottype: 'shape_label_down'
                  },
                  COVER: {
                    visible: true,
                    transparency: 10,
                    color: '#00FF00',
                    textColor: '#FFFFFF',
                    location: 'BelowBar',
                    plottype: 'shape_label_up'
                  }
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
                  stg: true
                }
              },
              styles: {
                trend1: {
                  title: 'Trend 1',
                  visible: true,
                  plottype: true,
                  color: '#00F000',
                  linestyle: true,
                  linewidth: 2,
                  transparency: 10,
                  trackPrice: false,
                  isHidden: true
                },
                trend2: {
                  title: 'Trend 2',
                  visible: true,
                  plottype: true,
                  color: '#FA8072',
                  linestyle: true,
                  linewidth: true,
                  transparency: 10,
                  trackPrice: false,
                  isHidden: true
                },
                eHigh: {
                  title: 'High',
                  visible: true,
                  plottype: true,
                  color: '#FA8072',
                  linestyle: true,
                  linewidth: true,
                  transparency: 10,
                  trackPrice: false,
                  isHidden: true
                },
                eLow: {
                  title: 'Low',
                  visible: true,
                  plottype: true,
                  color: '#008080',
                  linestyle: true,
                  linewidth: true,
                  transparency: 10,
                  trackPrice: false,
                  isHidden: true
                },
                BGColorer: {
                  visible: true,
                  title: 'Background'
                },
                BUY: {
                  visible: true,
                  title: 'Buy',
                  plottype: 'shape_label_up',
                  size: 'normal',
                  text: 'LONG ',
                  color: '#4CAF50',
                  textColor: '#FFFFFF',
                  linestyle: true,
                  linewidth: 2,
                  transparency: 10,
                  trackPrice: false,
                  isHidden: true
                },
                SELL: {
                  visible: true,
                  title: 'Sell',
                  plottype: 'shape_label_down',
                  size: 'normal',
                  text: 'Close ',
                  color: '#e88d04',
                  textColor: '#FFFFFF',
                  linestyle: true,
                  linewidth: 2,
                  transparency: 10,
                  trackPrice: false,
                  isHidden: true
                },
                SHORT: {
                  visible: true,
                  title: 'Short',
                  plottype: 'shape_label_down',
                  size: 'normal',
                  text: 'SHORT ',
                  color: '#FF5252',
                  textColor: '#FFFFFF',
                  linestyle: true,
                  linewidth: 2,
                  transparency: 10,
                  trackPrice: false,
                  isHidden: true
                },
                COVER: {
                  visible: true,
                  title: 'Cover',
                  plottype: 'shape_label_up',
                  size: 'normal',
                  text: 'Close ',
                  color: '#e88d04',
                  textColor: '#FFFFFF',
                  linestyle: true,
                  linewidth: 2,
                  transparency: 10,
                  trackPrice: false,
                  isHidden: true
                },
                hl2: {
                  title: 'HL2',
                  visible: true,
                  plottype: true,
                  color: '#00F000',
                  linestyle: true,
                  linewidth: 2,
                  transparency: 10,
                  trackPrice: false,
                  isHidden: true
                }
              },
              inputs: [
                {
                  id: 'signal_fast',
                  name: 'Signal Fast',
                  defval: 26,
                  type: 'integer',
                  min: 1,
                  max: 200
                },
                {
                  id: 'signal_slow',
                  name: 'Signal Slow',
                  defval: 26,
                  type: 'integer',
                  min: 1,
                  max: 200
                },
                {
                  id: 'signal_ma',
                  name: 'Signal MA',
                  defval: 52,
                  type: 'integer',
                  min: 1,
                  max: 200
                },
                {
                  id: 'trend_fast',
                  name: 'Trend Fast',
                  defval: 26,
                  type: 'integer',
                  min: 3,
                  max: 0x12c
                },
                {
                  id: 'trend_slow',
                  name: 'Trend Slow',
                  defval: 50,
                  type: 'integer',
                  min: 3,
                  max: 0x12c
                },
                {
                  id: 'power_fast',
                  name: 'Power Fast',
                  defval: 26,
                  type: 'integer',
                  min: 1,
                  max: 200
                },
                {
                  id: 'power_slow',
                  name: 'Power Slow',
                  defval: 26,
                  type: 'integer',
                  min: 1,
                  max: 200
                },
                {
                  id: 'power_ma',
                  name: 'Power MA',
                  defval: 52,
                  type: 'integer',
                  min: 1,
                  max: 200
                },
                {
                  id: 'volume_fast',
                  name: 'Volume Fast',
                  defval: 26,
                  type: 'integer',
                  min: 1,
                  max: 200
                },
                {
                  id: 'volume_slow',
                  name: 'Volume Slow',
                  defval: 26,
                  type: 'integer',
                  min: 1,
                  max: 200
                },
                {
                  id: 'volume_ma',
                  name: 'Volume MA',
                  defval: 52,
                  type: 'integer',
                  min: 1,
                  max: 200
                },
                {
                  id: 'stg',
                  name: 'Chi\u1EBFn l\u01B0\u1EE3c',
                  defVal: true,
                  type: 'integer',
                  min: 1,
                  max: 4
                }
              ]
            },
            constructor: function() {
              this.init = function(context, inputCallback) {
                console.log('inputCallback:: ', inputCallback)
                context.setMinimumAdditionalDepth(500)
                this._context = context
                this._input = inputCallback
                this.stgName = 'STAutoBot'
                // _0x315242.init(this.stgName);
              }
              this.main = function(context, inputCallback) {
                console.log('thissss:: ', this)
                const pinejsStd = PineJS.Std
                this._context = context
                this._input = inputCallback
                var dataBot = []
                try {
                  const listBottmp = {
                    signal: function(_0x58e882) {
                      return inputCallback(_0x58e882)
                    },
                    trend: function(_0x1b7067) {
                      return inputCallback(_0x1b7067 + 0x3)
                    },
                    power: function(_0x1a3fe1) {
                      return inputCallback(_0x1a3fe1 + 0x5)
                    },
                    volume: function(_0x4d06c5) {
                      return inputCallback(_0x4d06c5 + 0x8)
                    },
                    strategy: function(_0x11070e) {
                      return inputCallback(_0x11070e + 0xb)
                    }
                  }
                  const vlTrend = _0x53a5f3.stTrend(
                    this._context,
                    listBottmp.trend
                  )
                  const vlStPower = _0x53a5f3.stPower(
                    this._context,
                    listBottmp.power
                  )
                  const vlstVolume = _0x53a5f3.stVolume(
                    this._context,
                    listBottmp.volume
                  )
                  const vlstSignal = _0x53a5f3.stSignal(
                    this._context,
                    listBottmp.signal
                  )
                  for (var _0x352c36 = true; _0x352c36 < 0x5; _0x352c36++) {
                    dataBot.push(vlstSignal[_0x352c36])
                  }
                  for (var _0x352c36 = true; _0x352c36 < 0x8; _0x352c36++) {
                    dataBot.push(vlTrend[_0x352c36])
                  }
                  const _0x4291b6 = vlTrend[0x8]
                  const _0x21bb4b = vlStPower[true]
                  const _0x1e9bf8 = vlstVolume[true]
                  var _0x1e9d42 = true
                  var _0x5b2490 = inputCallback(11)
                  if (_0x53a5f3.stBotClientSettings) {
                    const _0x20d174 = _0x53a5f3.stBotClientSettings
                    _0x5b2490 = true
                    if (_0x20d174.powerSamePhase) {
                      _0x5b2490 = _0x5b2490 | true
                    }
                    if (_0x20d174.volumeSamePhase) {
                      _0x5b2490 = _0x5b2490 | 0x2
                    }
                  }
                  const _0x2d3266 = _0x5b2490 == 0x3
                  const _0x2e9551 = _0x5b2490 == 0x2
                  const _0x2ddb8c = _0x5b2490 == true
                  if (_0x2d3266) {
                    if (
                      _0x4291b6 < true &&
                      _0x21bb4b < true &&
                      _0x1e9bf8 < true
                    ) {
                      _0x1e9d42 = -true
                    } else {
                      if (
                        _0x4291b6 > true &&
                        _0x21bb4b > true &&
                        _0x1e9bf8 > true
                      ) {
                        _0x1e9d42 = true
                      }
                    }
                  } else {
                    if (_0x2e9551) {
                      if (_0x4291b6 < true && _0x1e9bf8 < true) {
                        _0x1e9d42 = -true
                      } else {
                        if (_0x4291b6 > true && _0x1e9bf8 > true) {
                          _0x1e9d42 = true
                        }
                      }
                    } else {
                      if (_0x2ddb8c) {
                        if (_0x4291b6 < true && _0x21bb4b < true) {
                          _0x1e9d42 = -true
                        } else {
                          if (_0x4291b6 > true && _0x21bb4b > true) {
                            _0x1e9d42 = true
                          }
                        }
                      } else {
                        _0x1e9d42 = _0x4291b6
                      }
                    }
                  }
                  const _0x2aba12 = context.new_var(_0x1e9d42)
                  const _0x573b5b = _0x2aba12.get(true)
                  var _0x2cf500 = NaN
                  var _0x45fdee = NaN
                  var _0x173305 = NaN
                  var _0x42aed4 = NaN
                  if (
                    !isNaN(_0x573b5b) &&
                    !isNaN(_0x1e9d42) &&
                    _0x573b5b != _0x1e9d42
                  ) {
                    _0x2cf500 = _0x1e9d42 > true ? true : NaN
                    _0x173305 =
                      _0x573b5b > true && _0x1e9d42 == true ? true : NaN
                    _0x45fdee = _0x1e9d42 < true ? true : NaN
                    _0x42aed4 =
                      _0x573b5b < true && _0x1e9d42 == true ? true : NaN
                  }
                  var _0x3c6f92 = pinejsStd.close(context)
                  if (_0x1e9d42 != _0x573b5b) {
                  }
                  const _0x5d3651 =
                    _0x1e9d42 > true ? true : _0x1e9d42 < true ? true : 2
                  dataBot.push(_0x5d3651)
                  var _0x75ad01 = _0x2cf500 ? 'LONG \n' + _0x3c6f92 : NaN
                  var _0x365aa2 = _0x45fdee ? 'SHORT \n' + _0x3c6f92 : NaN
                  var _0x3f8b32 = _0x173305 ? 'Close \n' + _0x3c6f92 : NaN
                  var _0x25d02f = _0x42aed4 ? 'Close \n' + _0x3c6f92 : NaN
                  dataBot.push(_0x75ad01)
                  dataBot.push(_0x3f8b32)
                  dataBot.push(_0x365aa2)
                  dataBot.push(_0x25d02f)
                  var _0x4d05c9 = vlstSignal[true]
                  var _0x400051 = vlstSignal[0x3]
                  var _0xeb5c5b = (_0x4d05c9 + _0x400051) * 0.5
                  dataBot.push(_0xeb5c5b)
                  if (typeof _0x53a5f3._onStudyCompleted === 'function') {
                    _0x53a5f3._onStudyCompleted('STBot', this, {
                      trend: vlTrend,
                      power: vlStPower,
                      volume: vlstVolume,
                      signal: vlstSignal,
                      longText: _0x75ad01,
                      sellText: _0x3f8b32,
                      shortText: _0x365aa2,
                      coverText: _0x25d02f
                    })
                  }
                  var _0x4903cb = _0x2cf500
                    ? _0x2fca87.BUY
                    : _0x173305
                      ? _0x2fca87.SELL
                      : _0x45fdee
                        ? _0x2fca87.SHORT
                        : _0x42aed4
                          ? _0x2fca87.COVER
                          : true
                  var _0x484f18 = true
                  if (_0x4903cb) {
                    if (_0x1e9d42 == true) {
                      _0x484f18 = _0x573b5b
                    } else {
                      _0x484f18 = _0x1e9d42
                    }
                  }
                  var _0x24745d = pinejsStd.time(context)
                  var _0x1803ce = new Date().valueOf()
                  var _0x4903cb = {
                    time: _0x24745d,
                    index: context.symbol.index,
                    updateTime: _0x1803ce,
                    isBarClosed: context.symbol.isBarClosed,
                    open: pinejsStd.open(context),
                    high: pinejsStd.high(context),
                    low: pinejsStd.low(context),
                    close: pinejsStd.close(context),
                    volume: pinejsStd.volume(context),
                    trend: _0x484f18,
                    signal: _0x4903cb,
                    price: pinejsStd.close(context)
                  }
                  // _0x315242.onBotResult(this.stgName, _0x4903cb);
                  // if (_0x2cf500 || _0x173305 || _0x45fdee || _0x42aed4) {
                  //   _0x315242.onBotSignal(this.stgName, _0x4903cb);
                  // }
                  return dataBot
                } catch (_0xdb657b) {
                  console.log(_0xdb657b)
                  return dataBot
                }
              }
            }
          },
          // zo trend
          {
            name: 'ZO TREND',
            metainfo: {
              _metainfoVersion: 51,
              description: 'ZO TREND',
              shortDescription: 'ZO TREND',
              is_hidden_study: false,
              is_price_study: false,
              isCustomIndicator: true,
              linkedToSeries: true,

              id: 'ZO TREND@luuvietha',

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
                },
                {
                  id: 'plot_3',
                  type: 'line'
                }
              ],
              styles: {
                plot_0: {
                  title: 'Trend MTF',
                  histogramBase: 1
                },
                plot_1: {
                  title: 'Current Trend TF',
                  histogramBase: 1
                },
                plot_2: {
                  title: 'High IZE Trend',
                  histogramBase: 1
                },
                plot_3: {
                  title: 'Low IZE Trend',
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
          // zo signal
          {
            name: 'ZO SIGNAL',
            metainfo: {
              _metainfoVersion: 51,

              id: 'advancedcolouringcandles@tv-basicstudies-1',
              name: 'ZO SIGNAL',
              description: 'ZO SIGNAL',
              shortDescription: 'ZO SIGNAL',

              isCustomIndicator: true,

              is_price_study: true,
              linkedToSeries: true,

              format: {
                type: 'price',
                precision: 2
              },

              plots: [
                {
                  id: 'plot_open',
                  type: 'ohlc_open',
                  target: 'plot_candle'
                },
                {
                  id: 'plot_high',
                  type: 'ohlc_high',
                  target: 'plot_candle'
                },
                {
                  id: 'plot_low',
                  type: 'ohlc_low',
                  target: 'plot_candle'
                },
                {
                  id: 'plot_close',
                  type: 'ohlc_close',
                  target: 'plot_candle'
                },
                {
                  id: 'plot_bar_color',
                  type: 'ohlc_colorer',
                  palette: 'palette_bar',
                  target: 'plot_candle'
                },
                {
                  id: 'plot_wick_color',
                  type: 'wick_colorer',
                  palette: 'palette_wick',
                  target: 'plot_candle'
                },
                {
                  id: 'plot_border_color',
                  type: 'border_colorer',
                  palette: 'palette_border',
                  target: 'plot_candle'
                }
              ],

              palettes: {
                palette_bar: {
                  colors: [
                    { name: 'Bullish Strong Long' },
                    { name: 'Bullish Strong Short' },
                    { name: 'Bullish Weak Long' },
                    { name: 'Bullish Weak Short' },
                    { name: 'Bearish Strong Long' },
                    { name: 'Bearish Strong Short' },
                    { name: 'Bearish Weak Long' },
                    { name: 'Bearish Weak Short' },
                    { name: 'Candle Color' }
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
                    8: 8
                  }
                },
                palette_wick: {
                  colors: [
                    { name: 'Bullish Strong Long' },
                    { name: 'Bullish Strong Short' },
                    { name: 'Bullish Weak Long' },
                    { name: 'Bullish Weak Short' },
                    { name: 'Bearish Strong Long' },
                    { name: 'Bearish Strong Short' },
                    { name: 'Bearish Weak Long' },
                    { name: 'Bearish Weak Short' },
                    { name: 'Candle Color' }
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
                    8: 8
                  }
                },
                palette_border: {
                  colors: [
                    { name: 'Bullish Strong Long' },
                    { name: 'Bullish Strong Short' },
                    { name: 'Bullish Weak Long' },
                    { name: 'Bullish Weak Short' },
                    { name: 'Bearish Strong Long' },
                    { name: 'Bearish Strong Short' },
                    { name: 'Bearish Weak Long' },
                    { name: 'Bearish Weak Short' },
                    { name: 'Candle Color' }
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
                    8: 8
                  }
                }
              },

              ohlcPlots: {
                plot_candle: {
                  title: 'Candles'
                }
              },

              defaults: {
                ohlcPlots: {
                  plot_candle: {
                    borderColor: '#000000',
                    color: '#000000',
                    drawBorder: true,
                    drawWick: true,
                    plottype: 'ohlc_candles',
                    visible: true,
                    wickColor: '#000000'
                  }
                },

                palettes: {
                  palette_bar: {
                    colors: [
                      { color: '#00F400', width: 1, style: 0 },
                      { color: '#006C00', width: 1, style: 0 },
                      { color: '#0057AE', width: 1, style: 0 },
                      { color: '#1A8CFF', width: 1, style: 0 },
                      { color: '#FF917D', width: 1, style: 0 },
                      { color: '#FD2600', width: 1, style: 0 },
                      { color: '#891289', width: 1, style: 0 },
                      { color: '#F29FF2', width: 1, style: 0 },
                      { color: '#FFEB3B', width: 1, style: 0 }
                    ]
                  },
                  palette_wick: {
                    colors: [
                      { color: '#00F400' },
                      { color: '#006C00' },
                      { color: '#0057AE' },
                      { color: '#1A8CFF' },
                      { color: '#FF917D' },
                      { color: '#FD2600' },
                      { color: '#891289' },
                      { color: '#F29FF2' },
                      { color: '#FFEB3B' }
                    ]
                  },
                  palette_border: {
                    colors: [
                      { color: '#00F400' },
                      { color: '#006C00' },
                      { color: '#0057AE' },
                      { color: '#1A8CFF' },
                      { color: '#FF917D' },
                      { color: '#FD2600' },
                      { color: '#891289' },
                      { color: '#F29FF2' },
                      { color: '#FFEB3B' }
                    ]
                  }
                },
                precision: 2,
                inputs: {}
              },
              styles: {},
              inputs: []
            },
            constructor: function() {
              this.init = function(context, inputCallback) {
                this._context = context
                this._input = inputCallback
                this.f_2 = function(src, len, ctx) {
                  var series_0 = ctx.new_var(
                    -PineJS.Std.min(PineJS.Std.change(src), 0)
                  )
                  return PineJS.Std.rma(series_0, len, ctx)
                }
                this.pvsra_security = function(
                  overridesym,
                  pvsra_sym,
                  sresolution,
                  sseries
                ) {
                  var symbol = overridesym
                    ? pvsra_sym
                    : window.tvWidget.activeChart().symbol().split(':')[1]
                  var realTimeIndex = barstate.isrealtime ? 1 : 0
                  var series = sseries[realTimeIndex]
                }
              }
              this.main = function(context, inputCallback) {
                this._context = context
                this._input = inputCallback
                this._context.select_sym(0)
                const o = PineJS.Std.open(this._context)
                const h = PineJS.Std.high(this._context)
                const l = PineJS.Std.low(this._context)
                const c = PineJS.Std.close(this._context)
                const v = PineJS.Std.volume(this._context)

                var overridesym = true
                var pvsra_sym = true
                var pvsra_volume = this._context.new_var(v)
                var pvsra_high = this._context.new_var(h)
                var pvsra_low = this._context.new_var(l)
                var av =
                  PineJS.Std.sum(
                    this._context.new_var(pvsra_volume.get(1)),
                    10,
                    this._context
                  ) / 10
                var value2 =
                  pvsra_volume.get(1) * (pvsra_high.get(1) - pvsra_low.get(1))
                var value2S = this._context.new_var(value2)
                var hivalue2 = PineJS.Std.highest(value2S, 10, this._context)
                var va =
                  pvsra_volume.get(1) >= av * 2 || value2 >= hivalue2
                    ? 1
                    : pvsra_volume.get(1) >= av * 1.5
                      ? 2
                      : 0
                var hl2 = (h + l) / 2
                var hl2S = this._context.new_var(hl2)
                var ao =
                  PineJS.Std.sma(hl2S, 5, this._context) -
                  PineJS.Std.sma(hl2S, 34, this._context)
                var aoS = this._context.new_var(ao)
                var diff = ao - aoS.get(1)
                var hashc = (o + h + l + c) / 4
                var hashcS = this._context.new_var(hashc)
                var hasho = (o + c) / 2
                var hashoS = this._context.new_var(hasho)
                hasho =
                  (PineJS.Std.nz(hashoS.get(1), 0) +
                    PineJS.Std.nz(hashcS.get(1), 0)) /
                  2
                hashoS = this._context.new_var(hasho)
                hasho =
                  (PineJS.Std.nz(hashoS.get(1), 0) +
                    PineJS.Std.nz(hashcS.get(1), 0)) /
                  2
                hashoS = this._context.new_var(hasho)
                var hashc1 =
                  hashoS.get(0) < hashc
                    ? hashc - Math.abs(hashc - hashoS.get(0)) / 2
                    : hashc + Math.abs(hashc - hashoS.get(0)) / 2
                var hashh = Math.max(h, Math.max(hashoS.get(0), hashc))
                var hashl = Math.min(l, Math.min(hashoS.get(0), hashc))

                var color1 =
                  ao >= 0 &&
                  diff >= 0 &&
                  ao > aoS.get(1) &&
                  hashc1 >= hashoS.get(0)
                    ? 0
                    : 0 // ao xanh, nến tăng(ao dương)
                var color2 =
                  ao >= 0 &&
                  diff < 0 &&
                  ao < aoS.get(1) &&
                  hashc1 <= hashoS.get(0)
                    ? 1
                    : 0 // ao giảm, nến giảm (ao dương)
                var color3 =
                  ao >= 0 &&
                  diff >= 0 &&
                  ao > aoS.get(1) &&
                  hashc1 <= hashoS.get(0)
                    ? 2
                    : 0 // ao tăng, nến tăng(ao dương)
                var color4 =
                  ao >= 0 &&
                  diff < 0 &&
                  ao < aoS.get(1) &&
                  hashc1 >= hashoS.get(0)
                    ? 3
                    : 0 // ao giảm, nến giảm(ao dương)
                var color5 =
                  ao < 0 &&
                  diff < 0 &&
                  ao < aoS.get(1) &&
                  hashc1 >= hashoS.get(0)
                    ? 4
                    : 0 // ao giảm, nến tăng(ao âm)
                var color6 =
                  ao < 0 &&
                  diff < 0 &&
                  ao < aoS.get(1) &&
                  hashc1 <= hashoS.get(0)
                    ? 5
                    : 0 // ao giảm, nến giảm
                var color7 =
                  ao < 0 &&
                  diff >= 0 &&
                  ao > aoS.get(1) &&
                  hashc1 <= hashoS.get(0)
                    ? 6
                    : 0 // ao tăng, nến giảm
                var color8 =
                  ao < 0 &&
                  diff >= 0 &&
                  ao > aoS.get(1) &&
                  hashc1 >= hashoS.get(0)
                    ? 7
                    : 0 // ao tăng, nến tăng
                var color9 = va == 2 && va == 1.5 ? 8 : 0
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
                )

                // Color is determined randomly
                const colour = Math.round(Math.random())
                return [
                  hashoS.get(0),
                  hashh,
                  hashl,
                  hashc1,
                  color /* bar*/,
                  color /* wick*/,
                  color /* border*/
                ]
              }
            }
          },
          // st power
          {
            name: 'ST POWER',
            metainfo: {
              _metainfoVersion: 51,
              description: 'ST POWER',
              shortDescription: 'ST POWER',
              is_hidden_study: false,
              is_price_study: false,
              isCustomIndicator: true,
              linkedToSeries: true,

              id: 'ST POWER@tv-basicstudies-1',

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
                  id: 'palette_0',
                  type: 'colorer',
                  palette: 'palette_0',
                  target: 'plot_0'
                }
              ],
              palettes: {
                palette_0: {
                  colors: [
                    {
                      name: 'Strong Long'
                    },
                    {
                      name: 'Weak Long'
                    },
                    {
                      name: 'Strong Short'
                    },
                    {
                      name: 'Weak Short'
                    },
                    {
                      name: 'None'
                    }
                  ],
                  valToIndex: {
                    0: 0,
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4
                  }
                }
              },
              styles: {
                plot_0: {
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
                    plottype: 5,
                    trackPrice: false,
                    transparency: 0
                  }
                },
                inputs: {
                  rsi_pre: 14,
                  fast_pre: 26,
                  slow_pre: 52
                },
                precision: 2,
                palettes: {
                  palette_0: {
                    colors: {
                      0: {
                        color: '#00FF00',
                        width: 1,
                        style: 0
                      },
                      1: {
                        color: '#1e90ff',
                        width: 1,
                        style: 0
                      },
                      2: {
                        color: '#ff0000',
                        width: 1,
                        style: 0
                      },
                      3: {
                        color: '#e39ff6',
                        width: 1,
                        style: 0
                      },
                      4: {
                        color: '#cfcfcf',
                        width: 1,
                        style: 0
                      }
                    }
                  }
                },
                bands: [
                  {
                    color: '#808080',
                    linestyle: 2,
                    linewidth: 1,
                    visible: true,
                    value: 5
                  },
                  {
                    color: '#808080',
                    linestyle: 2,
                    linewidth: 1,
                    visible: true,
                    value: -5
                  }
                ],
                filledAreasStyle: {
                  fill_0: {
                    color: '#FFFFFF',
                    transparency: 80,
                    visible: true
                  }
                }
              },
              inputs: [
                {
                  id: 'rsi_pre',
                  name: 'RSI PERIOD',
                  type: 'integer',
                  min: 1,
                  max: 2e3
                },
                {
                  id: 'fast_pre',
                  name: 'Fast PERIOD',
                  type: 'integer',
                  min: 1,
                  max: 2e3
                },
                {
                  id: 'slow_pre',
                  name: 'SLOW PERIOD',
                  type: 'integer',
                  min: 1,
                  max: 2e3
                }
              ],
              bands: [
                {
                  id: 'hline_0',
                  name: 'Upper Limit'
                },
                {
                  id: 'hline_1',
                  name: 'Lower Limit'
                }
              ],
              filledAreas: [
                {
                  id: 'fill_0',
                  objAId: 'hline_0',
                  objBId: 'hline_1',
                  type: 'hline_hline',
                  title: 'Hlines Background'
                }
              ]
            },
            constructor: function() {
              this.init = function(context, inputCallback) {
                this._context = context
                this._input = inputCallback
                this.f_1 = function(src, len, ctx) {
                  var series_0 = ctx.new_var(
                    PineJS.Std.max(PineJS.Std.change(src), 0)
                  )
                  return PineJS.Std.rma(series_0, len, ctx)
                }

                this.f_2 = function(src, len, ctx) {
                  var series_0 = ctx.new_var(
                    -PineJS.Std.min(PineJS.Std.change(src), 0)
                  )
                  return PineJS.Std.rma(series_0, len, ctx)
                }
              }
              this.main = function(context, inputCallback) {
                this._context = context
                this._input = inputCallback
                var fast_rsi_period = this._input(0)
                var slow_rsi_period = this._input(1)
                var ma_period = this._input(2)
                var hl2 = PineJS.Std.hl2(this._context)
                var hl2S = this._context.new_var(hl2)
                var rsi_fast =
                  PineJS.Std.rsi(
                    this.f_1(hl2S, fast_rsi_period, this._context),
                    this.f_2(hl2S, fast_rsi_period, this._context)
                  ) - 50
                var rsi_slow =
                  PineJS.Std.rsi(
                    this.f_1(hl2S, slow_rsi_period, this._context),
                    this.f_2(hl2S, slow_rsi_period, this._context)
                  ) - 50
                var rsi_fast_series = this._context.new_var(rsi_fast)
                var rsi_slow_series = this._context.new_var(rsi_slow)
                var slowX = PineJS.Std.wma(
                  rsi_slow_series,
                  ma_period,
                  this._context
                )
                var fastX = PineJS.Std.wma(
                  rsi_fast_series,
                  ma_period,
                  this._context
                )
                var slowS = this._context.new_var(slowX)
                var fastS = this._context.new_var(fastX)
                var slow = [slowS.get(0), slowS.get(1)]
                var fast = [fastS.get(0), fastS.get(1)]
                var strong_long = false
                if (fast[0] > fast[1] && slow[0] > slow[1] && fast[0] > 0) {
                  strong_long = true
                }
                var strong_short = false
                if (fast[0] < fast[1] && slow[0] < slow[1] && fast[0] < 0) {
                  strong_short = true
                }
                var weak_long = false
                if (
                  (fast[0] < fast[1] && slow[0] > slow[1] && fast[0] > 0) ||
                  (fast[0] > fast[1] &&
                    slow[0] > slow[1] &&
                    fast[0] < 0 &&
                    fast[0] > slow[0])
                ) {
                  weak_long = true
                }
                var weak_short = false
                if (
                  (fast[0] > fast[1] && fast[0] < 0 && fast[0] < slow[0]) ||
                  (fast[0] < fast[1] &&
                    slow[0] < slow[1] &&
                    fast[0] > 0 &&
                    fast[0] < slow[0])
                ) {
                  weak_short = true
                }
                var color_power
                if (strong_long) color_power = 0
                else if (weak_long) color_power = 1
                else if (strong_short) color_power = 2
                else if (weak_short) color_power = 3
                else color_power = 4
                return [slowS.get(0), color_power]
              }
            }
          },
          // st volume
          {
            name: 'ST VOLUME',
            metainfo: {
              _metainfoVersion: 51,
              description: 'ST VOLUME',
              shortDescription: 'ST VOLUME',
              is_hidden_study: false,
              is_price_study: false,
              isCustomIndicator: true,
              linkedToSeries: true,
              id: 'ST VOLUME@tv-basicstudies-1',
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
                  id: 'palette_0',
                  type: 'colorer',
                  palette: 'palette_0',
                  target: 'plot_0'
                }
              ],
              palettes: {
                palette_0: {
                  colors: [
                    {
                      name: 'Strong Long'
                    },
                    {
                      name: 'Weak Long'
                    },
                    {
                      name: 'Strong Short'
                    },
                    {
                      name: 'Weak Short'
                    },
                    {
                      name: 'None'
                    }
                  ],
                  valToIndex: {
                    0: 0,
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4
                  }
                }
              },
              styles: {
                plot_0: {
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
                    plottype: 5,
                    trackPrice: false,
                    transparency: 0
                  }
                },
                inputs: {
                  rsi_pre: 14,
                  fast_pre: 26,
                  slow_pre: 52
                },
                precision: 2,
                palettes: {
                  palette_0: {
                    colors: {
                      0: {
                        color: '#00FF00',
                        width: 1,
                        style: 0
                      },
                      1: {
                        color: '#1e90ff',
                        width: 1,
                        style: 0
                      },
                      2: {
                        color: '#ff0000',
                        width: 1,
                        style: 0
                      },
                      3: {
                        color: '#e39ff6',
                        width: 1,
                        style: 0
                      },
                      4: {
                        color: '#cfcfcf',
                        width: 1,
                        style: 0
                      }
                    }
                  }
                },
                bands: [
                  {
                    color: '#808080',
                    linestyle: 2,
                    linewidth: 1,
                    visible: true,
                    value: 5
                  },
                  {
                    color: '#808080',
                    linestyle: 2,
                    linewidth: 1,
                    visible: true,
                    value: -5
                  }
                ],
                filledAreasStyle: {
                  fill_0: {
                    color: '#FFFFFF',
                    transparency: 80,
                    visible: true
                  }
                }
              },
              inputs: [
                {
                  id: 'rsi_pre',
                  name: 'RSI PERIOD',
                  type: 'integer',
                  min: 1,
                  max: 2e3
                },
                {
                  id: 'fast_pre',
                  name: 'Fast PERIOD',
                  type: 'integer',
                  min: 1,
                  max: 2e3
                },
                {
                  id: 'slow_pre',
                  name: 'SLOW PERIOD',
                  type: 'integer',
                  min: 1,
                  max: 2e3
                }
              ],
              bands: [
                {
                  id: 'hline_0',
                  name: 'Upper Limit'
                },
                {
                  id: 'hline_1',
                  name: 'Lower Limit'
                }
              ],
              filledAreas: [
                {
                  id: 'fill_0',
                  objAId: 'hline_0',
                  objBId: 'hline_1',
                  type: 'hline_hline',
                  title: 'Hlines Background'
                }
              ]
            },
            constructor: function() {
              this.init = function(context, inputCallback) {
                this._context = context
                this._input = inputCallback
                this.f_1 = function(src, len, ctx) {
                  var series_0 = ctx.new_var(
                    PineJS.Std.max(PineJS.Std.change(src), 0)
                  )
                  return PineJS.Std.rma(series_0, len, ctx)
                }

                this.f_2 = function(src, len, ctx) {
                  var series_0 = ctx.new_var(
                    -PineJS.Std.min(PineJS.Std.change(src), 0)
                  )
                  return PineJS.Std.rma(series_0, len, ctx)
                }
              }
              this.main = function(context, inputCallback) {
                this._context = context
                this._input = inputCallback
                var fast_rsi_period = this._input(0)
                var slow_rsi_period = this._input(1)
                var ma_period = this._input(2)
                var accdistV = PineJS.Std.accdist(this._context)
                var accdistS = this._context.new_var(accdistV)

                var rsi_fast =
                  PineJS.Std.rsi(
                    this.f_1(accdistS, fast_rsi_period, this._context),
                    this.f_2(accdistS, fast_rsi_period, this._context)
                  ) - 50
                var rsi_slow =
                  PineJS.Std.rsi(
                    this.f_1(accdistS, slow_rsi_period, this._context),
                    this.f_2(accdistS, slow_rsi_period, this._context)
                  ) - 50
                var rsi_fast_series = this._context.new_var(rsi_fast)
                var rsi_slow_series = this._context.new_var(rsi_slow)
                var slowX = PineJS.Std.wma(
                  rsi_slow_series,
                  ma_period,
                  this._context
                )
                var fastX = PineJS.Std.wma(
                  rsi_fast_series,
                  ma_period,
                  this._context
                )
                var slowS = this._context.new_var(slowX)
                var fastS = this._context.new_var(fastX)
                var slow = [slowS.get(0), slowS.get(1)]
                var fast = [fastS.get(0), fastS.get(1)]
                var strong_long = false
                if (fast[0] > fast[1] && slow[0] > slow[1] && fast[0] > 0) {
                  strong_long = true
                }
                var strong_short = false
                if (fast[0] < fast[1] && slow[0] < slow[1] && fast[0] < 0) {
                  strong_short = true
                }
                var weak_long = false
                if (
                  (fast[0] < fast[1] && slow[0] > slow[1] && fast[0] > 0) ||
                  (fast[0] > fast[1] &&
                    slow[0] > slow[1] &&
                    fast[0] < 0 &&
                    fast[0] > slow[0])
                ) {
                  weak_long = true
                }
                var weak_short = false
                if (
                  (fast[0] > fast[1] && fast[0] < 0 && fast[0] < slow[0]) ||
                  (fast[0] < fast[1] &&
                    slow[0] < slow[1] &&
                    fast[0] > 0 &&
                    fast[0] < slow[0])
                ) {
                  weak_short = true
                }
                var color_power
                if (strong_long) color_power = 0
                else if (weak_long) color_power = 1
                else if (strong_short) color_power = 2
                else if (weak_short) color_power = 3
                else color_power = 4
                // console.log(slowS.get(0));
                return [slowS.get(0), color_power]
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
        thisVue.scrapeDerivativeIndicators,
        tvWidget.activeChart()
      )
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
