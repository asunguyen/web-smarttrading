<template>
  <div class="app-container">
    <TradingResult />
    <IndustryIndex />
  </div>
</template>

<script>
import IndustryIndex from '../components/industry-index.vue'
import TradingResult from '../components/trading-result.vue'

export default {
  components: {
    IndustryIndex,
    TradingResult
  }
}
</script>
