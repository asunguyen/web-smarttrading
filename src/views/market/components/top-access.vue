<template>
  <el-card class="top-access">
    <h2 class="top-access__title  mt-2">Top 10 truy cập nhiều nhất</h2>
    <el-tabs v-model="activeTab" type="card" @tab-click="changeTab">
      <el-tab-pane
        v-for="floorr in listFloor"
        :key="floorr.label"
        :label="floorr.label"
        :name="floorr.name"
      >
        <el-table
          v-loading="isLoading"
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column label="STT" type="index" align="center" width="50" />
          <el-table-column label="Mã CK" prop="Symbol" align="center">
            <template slot-scope="{row}">
              <span><b>{{ row.Symbol }}</b></span>
            </template>
          </el-table-column>
          <el-table-column label="KL mua ròng" prop="Volume" align="center" width="130">
            <template slot-scope="{row}">
              <span>{{ row.Volume | toThousandFilter }}</span>
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
          <el-table-column label="Thay đổi" prop="change" align="center" width="130">
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
import { getListTopAccess } from '@/api/stock'

export default {
  data() {
    return {
      activeTab: 'VN',
      listFloor: [
        { label: 'VN', name: 'VN' }
        // { label: 'HNX', name: 'HNX' },
        // { label: 'VN30', name: 'VN30' }
      ],
      isLoading: false,
      tableData: []
    }
  },
  mounted() {
    this.getListTopAccess()
  },
  methods: {
    changeTab() {},
    async getListTopAccess() {
      try {
        this.isLoading = true
        const response = await getListTopAccess()
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

.top-access {
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
      width: 100%;
      text-align: center;
    }
  }
}
</style>
