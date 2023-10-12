<template>
  <div class="app-container">
    <div class="trading-view-container">
      <VueTradingView :options="tradingViewOptions" />
    </div>
  </div>
</template>

<script>
import VueTradingView from 'vue-trading-view'

export default {
  components: {
    VueTradingView
  },
  data() {
    return {
      tradingViewOptions: {
        width: '100%',
        height: '100%',
        symbol: 'NASDAQ:AAPL',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: 1,
        locale: 'vi_VN',
        enable_publishing: true,
        withdateranges: true,
        range: '1D',
        hide_side_toolbar: false,
        allow_symbol_change: true,
        details: true,
        hotlist: true,
        calendar: true,
        show_popup_button: true,
        popup_width: '1000',
        popup_height: '650'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.trading-view-container {
  height: calc(100vh - 90px) !important;
}
</style>
