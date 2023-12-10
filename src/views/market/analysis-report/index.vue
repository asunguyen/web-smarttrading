<template>
  <div class="app-container">
    <BusinessResult />
    <InternalTrading />
  </div>
</template>

<script>
import BusinessResult from '../components/business-result.vue'
import InternalTrading from '../components/internal-trading.vue'

export default {
  components: {
    BusinessResult,
    InternalTrading
  }
}
</script>
