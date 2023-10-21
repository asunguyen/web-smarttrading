<template>
  <div ref="chartContainer" class="TVChartContainer" />
</template>

<script>
import { widget } from '../../assets/charting_library'
import { UDFCompatibleDatafeed } from '../../assets/datafeeds/udf/lib/udf-compatible-datafeed'
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
      default: 'AAPL',
      type: String
    },
    interval: {
      default: 'D',
      type: String
    },
    datafeedUrl: {
      default: 'https://demo_feed.tradingview.com',
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
      default: 'tradingview.com',
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
  tvWidget: null,
  mounted() {
    const container = this.$refs.chartContainer
    const widgetOptions = {
      symbol: this.symbol,
      // BEWARE: no trailing slash is expected in feed URL
      datafeed: new UDFCompatibleDatafeed(this.datafeedUrl),
      // datafeed: new window.Datafeeds.UDFCompatibleDatafeed(this.datafeedUrl),

      interval: this.interval,
      container: container,
      library_path: this.libraryPath,

      theme: 'dark',
      locale: getLanguageFromURL() || 'en',
      disabled_features: ['use_localstorage_for_settings'],
      enabled_features: ['study_templates'],
      charts_storage_url: this.chartsStorageUrl,
      charts_storage_api_version: this.chartsStorageApiVersion,
      client_id: this.clientId,
      user_id: this.userId,
      fullscreen: this.fullscreen,
      autosize: this.autosize,
      studies_overrides: this.studiesOverrides
    }

    // eslint-disable-next-line new-cap
    const tvWidget = new widget(widgetOptions)
    this.tvWidget = tvWidget
    console.log('tvWidget:: ', tvWidget)

    tvWidget.onChartReady(() => {
      tvWidget.headerReady().then(() => {
        const button = tvWidget.createButton()

        button.setAttribute('title', 'Click to show a notification popup')
        button.classList.add('apply-common-tooltip')

        button.addEventListener('click', () =>
          tvWidget.showNoticeDialog({
            title: 'Notification',
            body: 'TradingView Charting Library API works correctly',
            callback: () => {
              // eslint-disable-next-line no-console
              console.log('Noticed!')
            }
          })
        )

        button.innerHTML = 'Check API'
      })
    })
  },
  destroyed() {
    if (this.tvWidget !== null) {
      this.tvWidget.remove()
      this.tvWidget = null
    }
  },
  methods: {
    getData: async() => {

    }
  }
}
</script>

<style scoped>
.TVChartContainer {
	height: calc(100vh - 50px);
}
</style>

<!-- <template>
  <div>
    <div id="ohlc">
      <p>
        O<span class="green">12</span> H<span class="green">15</span> L<span
          class="green"
          >8</span
        >
        C<span class="green">13</span>
      </p>
    </div>
    <div id="rsi">
      <p>56.2</p>
    </div>
    <div ref="chartContainer" class="TVChartContainer" id="tvchart"></div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      tvWidget: null,
    };
  },
  methods: {},
  mounted() {
    renderChart();
  },
  destroyed() {
    if (this.tvWidget !== null) {
      this.tvWidget.remove();
      this.tvWidget = null;
    }
  },
};
</script>
<style scoped>
.TVChartContainer {
  height: calc(100vh - 50px);
}
#tvchart{
            position: absolute;
            width: 100vw;
            height: 100vh;
        }
        #ohlc{
            font-weight: bold;
        }
        .green{
            color: green;
        }
        .red{
            color: red;
        }
        #rsi{
            color: purple;
            z-index: 10;
            position: absolute;
            top: 1.5rem;
            left: 0.75rem;
        }
</style> -->
