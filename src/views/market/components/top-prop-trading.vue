<template>
  <el-card class="top-prop-trading">
    <h2 class="top-prop-trading__title mt-2">Top tự doanh</h2>
    <el-tabs v-model="activeTab" type="card" @tab-click="changeTab">
      <el-tab-pane
        v-for="type in listType"
        :key="type.label"
        :label="type.label"
        :name="type.name"
      >
        <el-table
          v-loading="isLoading"
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column label="STT" type="index" align="center" width="50" />
          <el-table-column label="Mã CK" prop="Symbol">
            <template slot-scope="{row}">
              <span><b>{{ row.Symbol }}</b></span>
            </template>
          </el-table-column>
          <el-table-column :label="labelColumnValue" prop="Value" align="center">
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
import { getTopPropTrading } from '@/api/stock'

export default {
  data() {
    return {
      activeTab: 'BUYVALUE',
      listType: [
        { label: 'Mua ròng', name: 'BUYVALUE' },
        { label: 'Bán ròng', name: 'SELLVALUE' }
      ],
      isLoading: false,
      tableData: []
    }
  },
  computed: {
    labelColumnValue() {
      return this.activeTab === 'BUYVALUE' ? 'GT mua ròng' : 'GT bán ròng'
    }
  },
  mounted() {
    this.getTopPropTrading(this.activeTab)
  },
  methods: {
    changeTab() {
      this.getTopPropTrading(this.activeTab)
    },
    async getTopPropTrading(type) {
      try {
        this.isLoading = true
        const response = await getTopPropTrading({ type })
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

.top-prop-trading {
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
