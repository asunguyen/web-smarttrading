<template>
  <el-card class="market-data">
    <el-tabs v-model="activeTab" type="card">
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
          <!-- Second column -->
          <el-table-column v-if="activeTab === 'goods'" label="Hàng hoá" prop="vnFullName" width="200">
            <template slot-scope="{row}">
              <span><b>{{ row.code | formatNameGoods }}</b></span>
            </template>
          </el-table-column>
          <el-table-column v-else-if="activeTab === 'currencies'" label="" prop="codeName" width="200">
            <template slot-scope="{row}">
              <span><b>{{ row.codeName }}</b></span>
            </template>
          </el-table-column>
          <!-- Third column -->
          <el-table-column v-if="activeTab === 'goods'" label="Giá" prop="price">
            <template slot-scope="{row}">
              <span :class="{'text-success': row.changePct > 0, 'text-danger': row.changePct < 0, 'text-warning': row.changePct === 0 || !row.changePct}">
                {{ row.price | roundTo2Digits | toThousandFilter }}
              </span>
            </template>
          </el-table-column>
          <el-table-column v-else-if="activeTab === 'currencies'" label="Giá trị" prop="closePrice">
            <template slot-scope="{row}">
              <span :class="{'text-success': row.changePct > 0, 'text-danger': row.changePct < 0, 'text-warning': row.changePct === 0 || !row.changePct}">
                {{ row.closePrice | roundTo2Digits | toThousandFilter }}
              </span>
            </template>
          </el-table-column>
          <!-- Fourth column -->
          <el-table-column label="Thay đổi" prop="changePct">
            <template slot-scope="{row}">
              <span :class="{'text-success': row.changePct > 0, 'text-danger': row.changePct < 0, 'text-warning': row.changePct === 0 || !row.changePct}">
                {{ row.changePct | roundTo2Digits | toThousandFilter }}%
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import { getGoods, getChangePricesGoods, getCurrenciesRate } from '@/api/stock'

export default {
  filters: {
    formatNameGoods(value) {
      if (!value) return
      switch (value) {
        case 'SPOT_GOLDS': return 'Vàng (USD/oz)'
        case 'GEN1ST_BRENT_OIL': return 'Dầu Brent (USD/thùng)'
        case 'GEN1ST_COTTON2': return 'Bông (UScent/pound)'
        case 'GEN1ST_RUB_TCM': return 'Cao su (USD/kg)'
        case 'GEN1ST_SUGAR11': return 'Đường (UScent/pound)'
        case 'FW3M_COPPER': return 'Đồng (USD/tấn)'
        case 'SPOT_IRON_QINGDAO': return 'Quặng Sắt 62% (USD/tấn)'
        case 'HRC_3MM_EXPORT': return 'Thép HRC (USD/tấn)'
      }
    }
  },
  data() {
    return {
      activeTab: 'goods',
      listType: [
        { label: 'Hàng hoá', name: 'goods' },
        { label: 'Tỷ giá', name: 'currencies' }
      ],
      isLoading: false,
      tableData: []
    }
  },
  watch: {
    activeTab(value) {
      if (value === 'goods') {
        this.getGoods()
      } else if (value === 'currencies') {
        this.getCurrenciesRate()
      }
    }
  },
  mounted() {
    this.getGoods()
  },
  methods: {
    async getGoods() {
      const response = await getGoods()
      const response2 = await getChangePricesGoods()
      response.data.forEach(item1 => {
        response2.data.forEach(item2 => {
          if (item1.code === item2.code) {
            item1.price = item2.price
            item1.changePct = item2.changePct
          }
        })
      })
      this.tableData = response.data
    },
    async getCurrenciesRate() {
      const response = await getCurrenciesRate()
      this.tableData = response.data
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/element-variables.scss';

.market-data {
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
