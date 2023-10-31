<template>
  <el-card class="market-data">
    <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
      <el-tab-pane
        v-for="type in listType"
        :key="type.label"
        :label="type.label"
        :name="type.name"
      >
        <el-table
          v-loading="isLoading"
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column label="STT" type="index" align="center" width="50" />
          <el-table-column label="Mã" prop="productName" />
          <el-table-column label="Giá" prop="price" />
          <el-table-column label="Thay đổi" prop="change" />
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'goods',
      listType: [
        { label: 'Hàng hoá', name: 'goods' },
        { label: 'Tỷ giá', name: 'rate' },
        { label: 'Tiền mã hoá', name: 'cryptocurrency' }
      ],
      isLoading: false,
      tableData: [
        { productName: 'Vàng SJC Hà Nội Mua', price: 70150, change: '0 (0%)' },
        { productName: 'Vàng SJC Hà Nội Mua', price: 70150, change: '0 (0%)' },
        { productName: 'Vàng SJC Hà Nội Mua', price: 70150, change: '0 (0%)' },
        { productName: 'Vàng SJC Hà Nội Mua', price: 70150, change: '0 (0%)' },
        { productName: 'Vàng SJC Hà Nội Mua', price: 70150, change: '0 (0%)' },
        { productName: 'Vàng SJC Hà Nội Mua', price: 70150, change: '0 (0%)' },
        { productName: 'Vàng SJC Hà Nội Mua', price: 70150, change: '0 (0%)' },
        { productName: 'Vàng SJC Hà Nội Mua', price: 70150, change: '0 (0%)' },
        { productName: 'Vàng SJC Hà Nội Mua', price: 70150, change: '0 (0%)' },
        { productName: 'Vàng SJC Hà Nội Mua', price: 70150, change: '0 (0%)' }
      ]
    }
  },
  methods: {
    handleClick() {}
  }
}
</script>

<style lang="scss" scoped>
.market-data {
  ::v-deep {
    .el-tabs__nav {
      width: 100%;
    }
    .el-tabs__item {
      width: 33.33%;
      text-align: center;
    }
  }
}
</style>
