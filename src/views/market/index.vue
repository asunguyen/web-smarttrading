<template>
  <div class="app-container">
    <h2 class="mt-0">Toàn cảnh thị trường</h2>
    <el-row :gutter="10" class="mb-3">
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8"><MarketIndex /></el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8"><TopStocks /></el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8"><Valuation /></el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8"><Foreign /></el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8"><StockLeader /></el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8"><TopAccess /></el-col>
    </el-row>
    <el-row class="mt-4">
      <ForeignChart />
    </el-row>
    <!-- <h2>Tự doanh</h2> -->
    <el-row :gutter="10" class="mt-4">
      <el-col :xs="24" :sm="12" :md="16" :lg="16" :xl="16"><MarketLiquidity /></el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8"><MarketData /></el-col>
    </el-row>
    <el-row class="mt-4">
      <MarketWidth />
    </el-row>
  </div>
</template>

<script>
import MarketIndex from './components/market-index.vue'
import TopStocks from './components/top-stocks.vue'
import Foreign from './components/foreign.vue'
import TopAccess from './components/top-access.vue'
import StockLeader from './components/stock-leader.vue'
import Valuation from './components/valuation.vue'
import ForeignChart from './components/foreign-chart.vue'
import MarketLiquidity from './components/market-liquidity.vue'
import MarketData from './components/market-data.vue'
import MarketWidth from './components/market-width.vue'

export default {
  components: {
    MarketIndex,
    TopStocks,
    Foreign,
    StockLeader,
    TopAccess,
    Valuation,
    ForeignChart,
    MarketLiquidity,
    MarketData,
    MarketWidth
  }
}
</script>
