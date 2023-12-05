<template>
  <div class="app-container market">
    <el-row :gutter="10" class="mt-4">
      <el-col :xs="24" :sm="12" :md="16" :lg="16" :xl="16"><MarketLiquidity /></el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8"><MarketData /></el-col>
    </el-row>
    <el-row class="mt-4">
      <MarketWidth />
    </el-row>
    <el-row class="mt-4">
      <MapMarket />
    </el-row>
  </div>
</template>

<script>
import MarketLiquidity from '../components/market-liquidity.vue'
import MarketData from '../components/market-data.vue'
import MarketWidth from '../components/market-width.vue'
import MapMarket from '../components/map-market.vue'

export default {
  components: {
    MarketLiquidity,
    MarketData,
    MarketWidth,
    MapMarket
  }
}
</script>

<style lang="scss" scoped>
.market {
  ::v-deep {
    .el-tabs--card > .el-tabs__header .el-tabs__nav {
      border: 1px solid #004370;
    }
    .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
      background-color: #004370;
      color: #fff;
      font-weight: bold;
      border-bottom: 1px solid #004370;
    }
  }
}
</style>
