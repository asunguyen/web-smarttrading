<template>
  <div class="app-container" />
</template>

<script>
import { getSecuritiesDetail } from '@/api/stock'

export default {
  created() {
    this.getSecuritiesDetail()
  },
  methods: {
    async getSecuritiesDetail() {
      await getSecuritiesDetail()
    }
  }
}
</script>
