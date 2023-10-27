<template>
  <div class="app-container">
    <h2 class="mt-0">Toàn cảnh thị trường</h2>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8"><TopStocks /></el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8"><Foreign /></el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8"><TopAccess /></el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8"><StockLeader /></el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8"><Valuation /></el-col>
    </el-row>
  </div>
</template>

<script>
import TopStocks from './components/top-stocks.vue'
import Foreign from './components/foreign.vue'
import TopAccess from './components/top-access.vue'
import StockLeader from './components/stock-leader.vue'
import Valuation from './components/valuation.vue'

export default {
  components: {
    TopStocks,
    Foreign,
    TopAccess,
    StockLeader,
    Valuation
  }
}
</script>
