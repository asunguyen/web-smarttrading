<template>
  <el-card class="market-liquidity">
    <div slot="header">
      <h2 class="my-0">Thanh khoản thị trường</h2>
    </div>
    <el-tabs v-model="activeTab" v-loading="isLoading" type="card">
      <el-tab-pane label="HOSE" name="VNINDEX">
        <div id="chart-container-liquidity-vnindex" class="mt-4" />
      </el-tab-pane>
      <el-tab-pane label="HNX" name="HNX">
        <div id="chart-container-liquidity-hnx" class="mt-4" />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import { getIndexIntradayHistories, getIndexIntradayLastest } from '@/api/stock'

export default {
  data() {
    return {
      activeTab: 'VNINDEX',
      isLoading: false
    }
  },
  watch: {
    activeTab(value) {
      if (value === 'VNINDEX') {
        this.getIndexIntraday(this.activeTab, 'chart-container-liquidity-vnindex')
      } else if (value === 'HNX') {
        this.getIndexIntraday(this.activeTab, 'chart-container-liquidity-hnx')
      }
    }
  },
  mounted() {
    this.getIndexIntraday(this.activeTab)
  },
  methods: {
    async getIndexIntraday(floor, chartId) {
      try {
        this.isLoading = true
        const response = await getIndexIntradayHistories(floor)
        const response2 = await getIndexIntradayLastest(floor)
        const toMilliseconds = (hrs, min, sec) => (hrs * 60 * 60 + min * 60 + sec) * 1000
        const dataIndexIntradayHistories = response.data.map(item => {
          const d = new Date(item.tradingDate_Time)
          const hour = d.getHours()
          const minute = d.getMinutes()
          const second = d.getSeconds()
          return [toMilliseconds(hour, minute, second), item.accumulatedVal]
        })
        const dataIndexIntradayLastest = response2.data.map(item => {
          const d = new Date(item.tradingDate_Time)
          const hour = d.getHours()
          const minute = d.getMinutes()
          const second = d.getSeconds()
          return [toMilliseconds(hour, minute, second), item.accumulatedVal]
        })
        this.createChart(dataIndexIntradayHistories, dataIndexIntradayLastest, chartId)
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    createChart(dataHistories, dataLastest, chartId = 'chart-container-liquidity-vnindex') {
      // eslint-disable-next-line no-undef
      Highcharts.chart(chartId, {
        chart: {
          type: 'area'
        },
        title: {
          text: ''
        },
        credits: {
          enabled: false
        },
        xAxis: {
          type: 'datetime'
        },
        yAxis: {
          title: {
            text: 'GTGD (tỷ VNĐ)'
          }
        },
        tooltip: {
          xDateFormat: '%H:%M:%S'
          // pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
        },
        plotOptions: {
          area: {
            // pointStart: 1698976801000,
            marker: {
              enabled: false,
              symbol: 'circle',
              radius: 2,
              states: {
                hover: {
                  enabled: true
                }
              }
            }
          }
        },
        series: [{
          name: 'GTGD phiên trước',
          data: dataHistories,
          color: '#808285'
        }, {
          name: 'GTGD hôm nay',
          data: dataLastest,
          color: '#F7941F'
        }]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.market-liquidity {

}
</style>
