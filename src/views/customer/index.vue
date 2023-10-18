<template>
  <div class="app-container">
    <h2 class="mt-0">Quản lý khách hàng</h2>
  </div>
</template>

<script>
import { getListCustomer } from '@/api/user'

export default {
  data() {
    return {

    }
  },
  created() {
    this.getListCustomer()
  },
  methods: {
    async getListCustomer() {
      const response = await getListCustomer()
      console.log(response)
    }
  }
}
</script>
