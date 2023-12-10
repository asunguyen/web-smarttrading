<template>
  <div class="app-container market">
    <DataMacro />
    <FinancialIndex class="mt-4" />
  </div>
</template>

<script>
import DataMacro from '../components/data-macro.vue'
import FinancialIndex from '../components/financial-index.vue'

export default {
  components: {
    DataMacro,
    FinancialIndex
  }
}
</script>
