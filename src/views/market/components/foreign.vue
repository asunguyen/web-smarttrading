<template>
  <el-card class="foreign">
    <h2 class="foreign__title  mt-2">Khối ngoại</h2>
    <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
      <el-tab-pane
        v-for="foreign in listForeign"
        :key="foreign.label"
        :label="foreign.label"
        :name="foreign.name"
      >
        <el-table
          v-loading="isLoading"
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column label="STT" type="index" align="center" width="50" />
          <el-table-column label="Mã CK" prop="symbol" align="center" />
          <el-table-column label="GT mua ròng" prop="value" align="center" />
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
      activeTab: 'buy',
      listForeign: [
        { label: 'NN mua ròng', name: 'buy' },
        { label: 'NN bán ròng', name: 'sell' }
      ],
      isLoading: false,
      tableData: [
        { symbol: 'VCI', value: 78.65, price: 35.6, change: '+1.6 (+4.71%)' },
        { symbol: 'VCI', value: 78.65, price: 35.6, change: '+1.6 (+4.71%)' },
        { symbol: 'VCI', value: 78.65, price: 35.6, change: '+1.6 (+4.71%)' },
        { symbol: 'VCI', value: 78.65, price: 35.6, change: '+1.6 (+4.71%)' },
        { symbol: 'VCI', value: 78.65, price: 35.6, change: '+1.6 (+4.71%)' },
        { symbol: 'VCI', value: 78.65, price: 35.6, change: '+1.6 (+4.71%)' },
        { symbol: 'VCI', value: 78.65, price: 35.6, change: '+1.6 (+4.71%)' },
        { symbol: 'VCI', value: 78.65, price: 35.6, change: '+1.6 (+4.71%)' },
        { symbol: 'VCI', value: 78.65, price: 35.6, change: '+1.6 (+4.71%)' },
        { symbol: 'VCI', value: 78.65, price: 35.6, change: '+1.6 (+4.71%)' }
      ]
    }
  },
  methods: {
    handleClick() {}
  }
}
</script>

<style lang="scss" scoped>
.foreign {
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
