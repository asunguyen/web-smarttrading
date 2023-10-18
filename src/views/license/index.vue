<template>
  <div class="app-container">
    <h2 class="mt-0">Quản lý License</h2>
  </div>
</template>

<script>
import { getListLicense } from '@/api/user'

export default {
  data() {
    return {

    }
  },
  created() {
    this.getListLicense()
  },
  methods: {
    async getListLicense() {
      const response = await getListLicense()
      console.log(response)
    }
  }
}
</script>
