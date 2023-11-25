<template>
  <el-card class="market-index">
    <el-tabs v-model="activeTab" type="card">
      <el-tab-pane label="Việt Nam" name="VIETNAM">
        <div style="display: flex; justify-content: space-between; align-items: center">
          Chọn kỳ thời gian
          <el-select v-model="period" placeholder="Select" @change="getIndexVietnamChartByTime(tradeCenterId, period)">
            <el-option
              v-for="item in listPeriods"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div id="chart-container-market-index" class="mt-4" />
        <el-table
          ref="table"
          v-loading="isLoading"
          :data="tableData"
          :show-header="false"
          highlight-current-row
          style="width: 100%"
          class="mt-4"
          @current-change="handleChangeRow"
        >
          <el-table-column
            label=""
            prop="TradeCenterId"
          >
            <template slot-scope="{row}">
              <span><b>{{ row.TradeCenterId | formatTradeCenter }}</b></span>
            </template>
          </el-table-column>
          <el-table-column
            label=""
            prop="CurrentIndex"
            align="center"
          >
            <template slot-scope="{row}">
              <span>{{ row.CurrentIndex | roundTo2Digits | toThousandFilter }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label=""
            align="center"
          >
            <template slot-scope="{row}">
              <span :class="{'text-success': row.CurrentIndex > row.PrevIndex, 'text-danger': row.CurrentIndex < row.PrevIndex, 'text-warning': row.CurrentIndex === row.PrevIndex}">
                {{ row.CurrentIndex - row.PrevIndex | roundTo2Digits }}
              </span>
            </template>
          </el-table-column>
          <el-table-column
            label="Thay đổi"
            prop="changePct"
            align="center"
          >
            <template slot-scope="{row}">
              <span :class="{'text-success': row.CurrentIndex > row.PrevIndex, 'text-danger': row.CurrentIndex < row.PrevIndex, 'text-warning': row.CurrentIndex === row.PrevIndex}">
                {{ (row.CurrentIndex - row.PrevIndex) / row.PrevIndex * 100 | roundTo2Digits }}%
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="Thế giới" name="WORLD">
        WORLD
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
/* eslint-disable no-undef */
import { getIndexVietnam } from '@/api/stock'

export default {
  filters: {
    formatTradeCenter(value) {
      switch (value) {
        case 1: return 'HOSE'
        case 2: return 'HNX'
        case 9: return 'UPCOM'
        case 11: return 'VN30'
        case 12: return 'HNX30'
        default: return ''
      }
    }
  },
  data() {
    return {
      activeTab: 'VIETNAM',
      period: 'day',
      listPeriods: [
        { label: '1 ngày', value: 'day' },
        { label: '1 tuần', value: '7days' },
        { label: '1 tháng', value: '1month' },
        { label: '3 tháng', value: '3months' },
        { label: '6 tháng', value: '6months' },
        { label: '1 năm', value: 'year' },
        { label: '3 năm', value: '3years' }
      ],
      tradeCenterId: 1,
      isLoading: false,
      tableData: []
    }
  },
  async mounted() {
    await this.getIndexVietnamMarket()
  },
  methods: {
    async getIndexVietnamMarket() {
      const response = await getIndexVietnam({ index: '1;2;9;11;12', type: 'market' })
      this.tableData = Object.values(response.data)
      const rowSelected = this.tableData.find(item => item.TradeCenterId === this.tradeCenterId)
      this.$refs.table.setCurrentRow(rowSelected)
    },
    async getIndexVietnamChart() {
      if (this.period === 'day') {
        const response = await getIndexVietnam({ index: '1;2;9;11;12', type: 'chart' })
        const data = response.data[this.tradeCenterId].map(item => {
          return [item.Time.substring(item.Time.indexOf('(') + 1, item.Time.indexOf(')')), item.Data]
        })
        this.createChart(data)
      } else {
        this.getIndexVietnamChartByTime(this.tradeCenterId, this.period)
      }
    },
    async getIndexVietnamChartByTime(tradeCenterId, time) {
      const response = await getIndexVietnam({ floorCode: tradeCenterId, typeChart: time })
      const data = response.data.reverse().map(item => {
        return [item.Time.substring(item.Time.indexOf('(') + 1, item.Time.indexOf(')')), item.Data]
      })
      this.createChart(data)
    },
    // async getVnMarketPrices(floorCode, period) {
    //   const response = await getVnMarketPrices(floorCode, period)
    //   const data = response.data.map(item => {
    //     return [new Date(item.date).getTime(), item.close]
    //   })
    //   this.createChart(data)
    // },
    handleChangeRow(row) {
      this.tradeCenterId = row.TradeCenterId
      this.getIndexVietnamChart()
    },
    createChart(data) {
      Highcharts.chart('chart-container-market-index', {
        title: {
          text: ''
        },
        credits: {
          enabled: false
        },
        xAxis: {
          type: 'datetime',
          labels: {
            // format: '{value:%H:%M:%S}',
            enabled: false
          }
        },
        yAxis: {
          title: {
            text: ''
          }
        },
        tooltip: {
          xDateFormat: '%Y-%m-%d %H:%M:%S',
          pointFormat: '<b>{point.y:,.2f}</b>'
          // formatter() {
          //   return new Date(this.x).toLocaleDateString() + '<br />' + '<b>' + this.y + '</b>'
          // }
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

.market-index {
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
