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
              <el-table-column label="Mã CK" prop="Symbol">
                <template slot-scope="{row}">
                  <span><b>{{ row.Symbol || '-' }}</b></span>
                </template>
              </el-table-column>
              <el-table-column label="KL mua ròng" prop="Volume" align="center" width="130">
                <template slot-scope="{row}">
                  <span v-if="row.Volume">{{ row.Volume | toThousandFilter }}</span>
                  <span v-else>-</span>
                </template>
              </el-table-column>
              <el-table-column label="Giá" prop="CurrentPrice" align="center">
                <template slot-scope="{row}">
                  <span :class="{'text-success': row.ChangePricePercent > 0, 'text-danger': row.ChangePricePercent < 0, 'text-warning': row.ChangePricePercent === 0}">
                    {{ row.CurrentPrice || '-' }}
                  </span>
                </template>
              </el-table-column>
              <el-table-column label="Thay đổi" align="center" width="130">
                <template slot-scope="{row}">
                  <span
                    v-if="row.ChangePricePercent !== null || row.ChangePricePercent !==''"
                    :class="{
                      'text-success': row.ChangePricePercent > 0,
                      'text-danger': row.ChangePricePercent < 0,
                      'text-warning': row.ChangePricePercent === 0
                    }"
                  >
                    {{ row.ChangePrice > 0 ? '+' : '' }}{{ row.ChangePrice }} ({{ row.ChangePricePercent > 0 ? '+' : '' }}{{ row.ChangePricePercent }}%)
                  </span>
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
      activeTab: 'HOSE',
      activeTabChild: 'UP',
      listFloor: [
        { label: 'HOSE', name: 'HOSE' },
        { label: 'VN30', name: 'VN30' },
        { label: 'HNX', name: 'HNX' }
      ],
      listType: [
        { label: 'Tăng giá', name: 'UP' },
        { label: 'Giảm giá', name: 'DOWN' },
        { label: 'KLGD', name: 'VOLUME' }
      ],
      isLoading: false,
      tableData: [],
      query: {
        centerID: 'HOSE',
        type: 'UP'
      }
    }
  },
  mounted() {
    this.getListTopStocks(this.query)
  },
  methods: {
    changeTab() {
      this.query = {
        centerID: this.activeTab,
        type: this.activeTabChild
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
              Symbol: null,
              Volume: null,
              CurrentPrice: null,
              ChangePricePercent: null
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
