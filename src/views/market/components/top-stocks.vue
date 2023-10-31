<template>
  <el-card class="top-stocks">
    <h2 class="top-stocks__title  mt-2">Top 10 cổ phiếu</h2>
    <el-tabs v-model="activeTab" type="card" @tab-click="changeTab">
      <el-tab-pane
        v-for="typeStock in listTypeStock"
        :key="typeStock.label"
        :label="typeStock.label"
        :name="typeStock.name"
      >
        <el-tabs v-model="activeTabChild" @tab-click="changeTab">
          <el-tab-pane v-for="type in listType" :key="type.label" :label="type.label" :name="type.name">
            <el-table
              v-loading="isLoading"
              :data="tableData"
              border
              style="width: 100%"
            >
              <el-table-column label="STT" type="index" align="center" width="50" />
              <el-table-column label="Mã CK" prop="code" align="center">
                <template slot-scope="{row}">
                  <span><b>{{ row.code }}</b></span>
                </template>
              </el-table-column>
              <el-table-column label="KL mua ròng" prop="volume" align="center" />
              <el-table-column label="Giá" prop="lastPrice" align="center" />
              <el-table-column label="Thay đổi" align="center">
                <template slot-scope="{row}">
                  <span>{{ row.priceChgCr1D > 0 ? `+${row.priceChgCr1D}`: row.priceChgCr1D }}</span>
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
      listTypeStock: [
        { label: 'VNINDEX', name: 'VNIndex' },
        { label: 'VN30', name: 'vn30' },
        { label: 'HNX', name: 'hnx' }
      ],
      listType: [
        { label: 'Tăng giá', name: 'increase' },
        { label: 'Giảm giá', name: 'decrease' }
        // { label: 'KLGD', name: 'tradingVolume' }
      ],
      isLoading: false,
      tableData: [],
      query: {
        typeStock: 'VNIndex',
        type: 'gt',
        sort: 'priceChgPctCr1D'
      }
    }
  },
  mounted() {
    this.getListTopStocks()
  },
  methods: {
    changeTab() {
      this.query = {
        typeStock: this.activeTab,
        type: this.activeTabChild === 'increase' ? 'gt' : 'lt',
        sort: this.activeTabChild === 'increase' ? 'priceChgPctCr1D' : 'priceChgPctCr1D:asc'
      }
      this.getListTopStocks()
    },
    async getListTopStocks() {
      try {
        this.isLoading = true
        const response = await getListTopStocks(this.query)
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
.top-stocks {
  &__title {
    text-align: center;
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
