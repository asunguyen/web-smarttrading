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
          <el-table-column label="Mã" width="200">
            <template slot-scope="{row}">
              <span v-if="activeTab === '1'"><b>{{ row.goods }}</b></span>
              <span v-if="activeTab === '2'"><b>{{ row.ProductName }}</b></span>
              <span v-if="activeTab === '3'"><b>{{ row.symbol }}</b></span>
            </template>
          </el-table-column>
          <el-table-column label="Giá" prop="price">
            <template slot-scope="{row}">
              <span
                v-if="activeTab === '1'"
                :class="{
                  'text-success': row.change > 0,
                  'text-danger': row.change < 0,
                  'text-warning': row.change === 0
                }"
              >
                {{ row.last | toThousandFilter }}
              </span>
              <span
                v-if="activeTab === '2'"
                :class="{
                  'text-success': row.CurrentPrice > row.PrevPrice,
                  'text-danger': row.CurrentPrice < row.PrevPrice,
                  'text-warning': row.CurrentPrice === row.PrevPrice
                }"
              >
                {{ row.CurrentPrice | toThousandFilter }}
              </span>
              <span
                v-if="activeTab === '3'"
                :class="{
                  'text-success': row.change24H > 0,
                  'text-danger': row.change24H < 0,
                  'text-warning': row.change24H === 0
                }"
              >
                {{ row.price | toThousandFilter }}
              </span>
            </template>
          </el-table-column>
          <el-table-column label="Thay đổi" prop="changePct">
            <template slot-scope="{row}">
              <span
                v-if="activeTab === '1'"
                :class="{
                  'text-success': row.change > 0,
                  'text-danger': row.change < 0,
                  'text-warning': row.change === 0
                }"
              >
                {{ row.change | roundTo2Digits }} ({{ row.changePercent }}%)
              </span>
              <span
                v-if="activeTab === '2'"
                :class="{
                  'text-success': row.CurrentPrice > row.PrevPrice,
                  'text-danger': row.CurrentPrice < row.PrevPrice,
                  'text-warning': row.CurrentPrice === row.PrevPrice
                }"
              >
                {{ row.CurrentPrice - row.PrevPrice | roundTo2Digits }} ({{ Math.abs(row.CurrentPrice - row.PrevPrice) / row.CurrentPrice * 100 | roundTo2Digits }}%)
              </span>
              <span
                v-if="activeTab === '3'"
                :class="{
                  'text-success': row.change24H > 0,
                  'text-danger': row.change24H < 0,
                  'text-warning': row.change24H === 0
                }"
              >
                {{ (row.price * row.change24H / 100) | roundTo2Digits }} ({{ row.change24H | roundTo2Digits }}%)
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import { getGoods } from '@/api/stock'

export default {
  data() {
    return {
      activeTab: '1',
      listType: [
        { label: 'Hàng hoá', name: '1' },
        { label: 'Tỷ giá', name: '2' },
        { label: 'Tiền mã hoá', name: '3' }
      ],
      isLoading: false,
      tableData: []
    }
  },
  watch: {
    activeTab(value) {
      this.getGoods(value)
    }
  },
  mounted() {
    this.getGoods(this.activeTab)
  },
  methods: {
    async getGoods(type) {
      try {
        this.isLoading = true
        const response = await getGoods({ type })
        const goods = [
          'Vàng SJC Hà Nội Mua',
          'Bạc',
          'Kẽm',
          'Đồng',
          'Cà phê London',
          'Dầu Thô WTI',
          'Dầu Nhiên liệu',
          'Copper',
          'Đường Hoa Kỳ loại 11',
          'Yến mạch'
        ]
        if (this.activeTab === '1') {
          this.tableData = response.data.filter(item => goods.includes(item.goods))
        } else if (this.activeTab === '2') {
          this.tableData = response.data
        } else if (this.activeTab === '3') {
          this.tableData = response.data.slice(0, 10)
        }
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
      width: 33.33%;
      text-align: center;
    }
  }
}
</style>
