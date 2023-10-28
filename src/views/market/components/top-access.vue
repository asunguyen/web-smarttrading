<template>
  <el-card class="top-access">
    <h2 class="top-access__title  mt-2">Top 10 truy cập nhiều nhất</h2>
    <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
      <el-tab-pane
        v-for="typeStock in listTypeStock"
        :key="typeStock.label"
        :label="typeStock.label"
        :name="typeStock.name"
      >
        <el-table
          v-loading="isLoading"
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column label="STT" type="index" align="center" width="50" />
          <el-table-column label="Mã CK" prop="symbol" align="center" />
          <el-table-column label="KL mua ròng" prop="volume" align="center" />
          <el-table-column label="Giá" prop="price" align="center" />
          <el-table-column label="Thay đổi" prop="change" align="center" />
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'vn',
      listTypeStock: [
        { label: 'VN', name: 'vn' },
        { label: 'HNX', name: 'hnx' },
        { label: 'VN30', name: 'vn30' }
      ],
      isLoading: false,
      tableData: [
        { symbol: 'YEG', volume: 1504800, price: 17.4, change: '+1.1 (+6.75%)' },
        { symbol: 'YEG', volume: 1504800, price: 17.4, change: '+1.1 (+6.75%)' },
        { symbol: 'YEG', volume: 1504800, price: 17.4, change: '+1.1 (+6.75%)' },
        { symbol: 'YEG', volume: 1504800, price: 17.4, change: '+1.1 (+6.75%)' },
        { symbol: 'YEG', volume: 1504800, price: 17.4, change: '+1.1 (+6.75%)' },
        { symbol: 'YEG', volume: 1504800, price: 17.4, change: '+1.1 (+6.75%)' },
        { symbol: 'YEG', volume: 1504800, price: 17.4, change: '+1.1 (+6.75%)' },
        { symbol: 'YEG', volume: 1504800, price: 17.4, change: '+1.1 (+6.75%)' },
        { symbol: 'YEG', volume: 1504800, price: 17.4, change: '+1.1 (+6.75%)' },
        { symbol: 'YEG', volume: 1504800, price: 17.4, change: '+1.1 (+6.75%)' }
      ]
    }
  },
  methods: {
    handleClick() {}
  }
}
</script>

<style lang="scss" scoped>
.top-access {
  &__title {
    text-align: center;
  }
  ::v-deep {
    .el-tabs__nav {
      width: 100%;
    }
    .el-tabs__item {
      width: 50%;
      text-align: center;
    }
  }
}
</style>
