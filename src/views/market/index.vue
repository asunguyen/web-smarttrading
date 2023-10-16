<template>
  <div class="app-container" />
</template>

<script>
import { getListSecurities, getSecuritiesDetail } from '@/api/stock'

export default {
  created() {
    this.getSecuritiesDetail()
  },
  methods: {
    async getSecuritiesDetail() {
      await getListSecurities()
      await getSecuritiesDetail()
    }
  }
}
</script>
