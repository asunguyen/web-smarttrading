<template>
  <el-card class="foreign">
    <h2 class="foreign__title mt-2">Khối ngoại</h2>
    <el-tabs v-model="activeTab" type="card" @tab-click="changeTab">
      <el-tab-pane
        v-for="foreign in listForeign"
        :key="foreign.label"
        :label="foreign.label"
        :name="foreign.name"
      >
        <el-table
          v-loading="isLoading"
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column label="STT" type="index" align="center" width="50" />
          <el-table-column label="Mã CK" prop="code">
            <template slot-scope="{row}">
              <span><b>{{ row.code }}</b></span>
            </template>
          </el-table-column>
          <el-table-column label="GT mua ròng (Tỷ đồng)" prop="netVal" align="center">
            <template slot-scope="{row}">
              <span>{{ row.netVal | formatBillion | roundTo2Digits }}</span>
            </template>
          </el-table-column>
          <el-table-column label="Giá" prop="price" align="center" />
          <el-table-column label="Thay đổi" prop="change" align="center" />
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import { getListForeigns } from '@/api/stock'

export default {
  data() {
    return {
      activeTab: 'buy',
      listForeign: [
        { label: 'NN mua ròng', name: 'buy' },
        { label: 'NN bán ròng', name: 'sell' }
      ],
      isLoading: false,
      tableData: []
    }
  },
  mounted() {
    this.getListForeigns(this.activeTab)
  },
  methods: {
    changeTab() {
      this.getListForeigns(this.activeTab)
    },
    async getListForeigns(typeForeign) {
      const response = await getListForeigns(typeForeign)
      this.tableData = response.data
    }
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
