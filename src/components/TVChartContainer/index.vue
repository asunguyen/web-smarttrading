<template>
  <div ref="chartContainer" class="TVChartContainer" />
</template>

<script>
import { widget } from '../../assets/charting_library'
// import { UDFCompatibleDatafeed } from '../../assets/datafeeds/udf/lib/udf-compatible-datafeed'
import Datafeed from '@/assets/datafeed.js'
function getLanguageFromURL() {
  const regex = new RegExp('[\\?&]lang=([^&#]*)')
  const results = regex.exec(window.location.search)
  return results === null
    ? null
    : decodeURIComponent(results[1].replace(/\+/g, ' '))
}
export default {
  name: 'TVChartContainer',
  props: {
    symbol: {
      default: 'SSI',
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
      default: 'smarttrading.vn',
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
        return Promise.resolve([])
      },
      //type: ""
    }

    // eslint-disable-next-line new-cap
    let tvWidget = new widget(widgetOptions)
    this.tvWidget = tvWidget

    tvWidget.onChartReady(() => {
      tvWidget.subscribe('onAutoSaveNeeded', () => {
        // console.log({
        //   indicators: thisVue.getCurrentChartUserIndicators(
        //     tvWidget.activeChart()
        //   ),
        // });
      });
      //console.log("chua biết là gì:: ", tvWidget.chart().setChartType(6));
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
