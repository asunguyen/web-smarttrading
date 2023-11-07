<template>
  <el-card class="period">
    <h2 class="period__title mt-0">Việt Nam</h2>
    <div style="display: flex; justify-content: space-between; align-items: center">
      Chọn kỳ thời gian
      <el-select v-model="period" placeholder="Select">
        <el-option
          v-for="item in listPeriods"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div id="chart-container-period" class="mt-4" />
    <el-table
      ref="table"
      v-loading="isLoading"
      :data="tableData"
      highlight-current-row
      style="width: 100%"
      class="mt-4"
      @current-change="handleChangeRow"
    >
      <el-table-column
        label="Chỉ số"
        prop="code"
      >
        <template slot-scope="{row}">
          <span><b>{{ row.code }}</b></span>
        </template>
      </el-table-column>
      <el-table-column
        label="Điểm"
        prop="price"
        align="center"
      >
        <template slot-scope="{row}">
          <span :class="{'text-success': row.changePct > 0, 'text-danger': row.changePct < 0, 'text-warning': row.changePct === 0}">
            {{ row.price | roundTo2Digits | toThousandFilter }}
          </span>
        </template>
      </el-table-column>
      <el-table-column
        label=""
        prop="change"
        align="center"
      >
        <template slot-scope="{row}">
          <span :class="{'text-success': row.changePct > 0, 'text-danger': row.changePct < 0, 'text-warning': row.changePct === 0}">
            {{ row.change | roundTo2Digits | toThousandFilter }}
          </span>
        </template>
      </el-table-column>
      <el-table-column
        label="Thay đổi"
        prop="changePct"
        align="center"
      >
        <template slot-scope="{row}">
          <span :class="{'text-success': row.changePct > 0, 'text-danger': row.changePct < 0, 'text-warning': row.changePct === 0}">
            {{ row.changePct | roundTo2Digits }}%
          </span>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
/* eslint-disable no-undef */
import { getChangePrices, getVnMarketPrices } from '@/api/stock'

export default {
  data() {
    return {
      period: '1D',
      listPeriods: [
        { label: '1 ngày', value: '1D' },
        { label: 'Từ đầu tháng', value: 'MTD' },
        { label: 'Từ đầu quý', value: 'QTD' },
        { label: 'Từ đầu năm', value: 'YTD' },
        { label: '1 tuần', value: '5D' },
        { label: '1 tháng', value: '1M' },
        { label: '3 tháng', value: '3M' },
        { label: '6 tháng', value: '6M' },
        { label: '1 năm', value: '1Y' }
      ],
      floorCode: 'VNINDEX',
      isLoading: false,
      tableData: []
    }
  },
  watch: {
    period(value) {
      this.getChangePrices(value)
      this.getVnMarketPrices(this.floorCode, this.period)
    }
  },
  mounted() {
    this.getChangePrices(this.period)
    this.getVnMarketPrices(this.floorCode, this.period)
  },
  methods: {
    async getChangePrices(period) {
      const response = await getChangePrices(period)
      this.tableData = response.data
      const rowSelected = this.tableData.find(item => item.code === this.floorCode)
      this.$refs.table.setCurrentRow(rowSelected)
    },
    async getVnMarketPrices(floorCode, period) {
      const response = await getVnMarketPrices(floorCode, period)
      const data = response.data.map(item => {
        return [new Date(item.date).getTime(), item.close]
      })
      this.createChart(data)
    },
    handleChangeRow(row) {
      this.floorCode = row.code
      this.getVnMarketPrices(this.floorCode, this.period)
    },
    createChart(data) {
      Highcharts.chart('chart-container-period', {
        title: {
          text: ''
        },
        credits: {
          enabled: false
        },
        tooltip: {
          formatter() {
            return new Date(this.x).toLocaleDateString() + '<br />' + '<b>' + this.y + '</b>'
          }
        },
        xAxis: {
          type: 'datetime'
        },
        yAxis: {
          title: {
            text: ''
          }
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          area: {
            fillColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
              },
              stops: [
                [0, Highcharts.getOptions().colors[0]],
                [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
              ]
            },
            marker: {
              radius: 2
            },
            lineWidth: 1,
            states: {
              hover: {
                lineWidth: 1
              }
            },
            threshold: null
          }
        },
        series: [{
          type: 'area',
          data: data
        }]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/element-variables.scss';

.period {
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
}
</style>
