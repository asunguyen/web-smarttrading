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
          <el-table-column label="Mã CK" prop="Symbol">
            <template slot-scope="{row}">
              <span class="text-004370"><b>{{ row.Symbol }}</b></span>
            </template>
          </el-table-column>
          <el-table-column label="GT mua ròng (Tỷ đồng)" prop="Value" align="center">
            <template slot-scope="{row}">
              <span>{{ row.Value | formatBillion | roundTo2Digits }}</span>
            </template>
          </el-table-column>
          <el-table-column label="Giá" prop="CurrentPrice" align="center">
            <template slot-scope="{row}">
              <span
                :class="{
                  'text-success': row.ChangePricePercent > 0,
                  'text-danger': row.ChangePricePercent < 0,
                  'text-warning': row.ChangePricePercent === 0
                }"
              >
                {{ row.CurrentPrice }}
              </span>
            </template>
          </el-table-column>
          <el-table-column label="Thay đổi" align="center" width="120">
            <template slot-scope="{row}">
              <span
                :class="{
                  'text-success': row.ChangePricePercent > 0,
                  'text-danger': row.ChangePricePercent < 0,
                  'text-warning': row.ChangePricePercent === 0
                }"
              >
                {{ row.ChangePrice > 0 ? '+' : '' }}{{ row.ChangePrice }} ({{ row.ChangePricePercent > 0 ? '+' : '' }}{{ row.ChangePricePercent }}%)
              </span>
            </template>
          </el-table-column>
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
      try {
        this.isLoading = true
        const response = await getListForeigns({ type: typeForeign })
        this.tableData = response.data
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/element-variables.scss';

.foreign {
  &__title {
    text-align: center;
  }
  .text-success {
    color: $--color-success;
  }
  .text-danger {
    color: $--color-danger;
  }
  .text-warning {
    color: $--color-warning;
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
