<template>
  <el-card class="top-stocks">
    <h2 class="top-stocks__title  mt-2">Top 10 cổ phiếu</h2>
    <el-tabs v-model="activeTab" type="card" @tab-click="changeTab">
      <el-tab-pane
        v-for="floor in listFloor"
        :key="floor.label"
        :label="floor.label"
        :name="floor.name"
      >
        <el-tabs v-model="activeTabChild" @tab-click="changeTab">
          <el-tab-pane v-for="type in listType" :key="type.label" :label="type.label" :name="type.name">
            <el-table
              v-loading="isLoading"
              :data="tableData"
              style="width: 100%"
            >
              <el-table-column label="STT" type="index" align="center" width="50" />
              <el-table-column label="Mã CK" prop="code">
                <template slot-scope="{row}">
                  <span><b>{{ row.code || '-' }}</b></span>
                </template>
              </el-table-column>
              <el-table-column label="Giá" prop="lastPrice" align="center">
                <template slot-scope="{row}">
                  <span :class="{'text-success': row.priceChgCr1D > 0, 'text-danger': row.priceChgCr1D < 0, 'text-warning': row.priceChgCr1D === 0}">
                    {{ row.lastPrice || '-' }}
                  </span>
                </template>
              </el-table-column>
              <el-table-column label="Thay đổi" align="center" width="130">
                <template slot-scope="{row}">
                  <span
                    v-if="row.priceChgCr1D"
                    :class="{
                      'text-success': row.priceChgCr1D > 0,
                      'text-danger': row.priceChgCr1D < 0,
                      'text-warning': row.priceChgCr1D === 0
                    }"
                  >
                    {{ row.priceChgCr1D }} ({{ row.priceChgPctCr1D | roundTo2Digits }}%)
                  </span>
                  <span v-else>-</span>
                </template>
              </el-table-column>
              <el-table-column label="Giá trị (tỷ đồng)" prop="accumulatedVal" align="center" width="130">
                <template slot-scope="{row}">
                  <span v-if="row.accumulatedVal">{{ row.accumulatedVal | formatBillion | roundTo2Digits }}</span>
                  <span v-else>-</span>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import { getListTopStocks } from '@/api/stock'

export default {
  data() {
    return {
      activeTab: 'VNIndex',
      activeTabChild: 'increase',
      listFloor: [
        { label: 'VNINDEX', name: 'VNIndex' },
        { label: 'VN30', name: 'vn30' },
        { label: 'HNX', name: 'hnx' }
      ],
      listType: [
        { label: 'Tăng giá', name: 'increase' },
        { label: 'Giảm giá', name: 'decrease' },
        { label: 'GTGD lớn nhất', name: 'tradingValue' }
      ],
      isLoading: false,
      tableData: [],
      query: {
        floor: 'VNIndex',
        type: 'gt',
        sort: 'priceChgPctCr1D'
      }
    }
  },
  mounted() {
    this.getListTopStocks(this.query)
  },
  methods: {
    changeTab() {
      if (this.activeTabChild === 'tradingValue') {
        this.query = {
          ...this.query,
          name: 'accumulatedVal',
          floor: this.activeTab
        }
      } else {
        this.query = {
          floor: this.activeTab,
          type: this.activeTabChild === 'increase' ? 'gt' : 'lt',
          sort: this.activeTabChild === 'increase' ? 'priceChgPctCr1D' : 'priceChgPctCr1D:asc'
        }
      }
      this.getListTopStocks(this.query)
    },
    async getListTopStocks(data) {
      try {
        this.isLoading = true
        const response = await getListTopStocks(data)
        this.tableData = response.data
        if (this.tableData.length < 10) {
          const length = 10 - this.tableData.length
          for (let i = 0; i < length; i++) {
            this.tableData.push({
              code: null,
              lastPrice: null,
              priceChgCr1D: null,
              accumulatedVal: null
            })
          }
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

.top-stocks {
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
      width: 33.33%;
      text-align: center;
    }
  }
}
</style>
