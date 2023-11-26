<template>
  <el-card class="prop-trading">
    <h2 class="prop-trading__title mt-0">Giao dịch tự doanh</h2>
    <el-tabs v-model="activeTab" v-loading="isLoading" type="card">
      <el-tab-pane label="Giá trị" name="value">
        <div id="chart-container-prop-trading-value" class="mt-4" />
      </el-tab-pane>
      <el-tab-pane label="Khối lượng" name="volume">
        <div id="chart-container-prop-trading-volume" class="mt-4" />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import { getPropTradingChart } from '@/api/stock'

export default {
  data() {
    return {
      activeTab: 'value',
      isLoading: false
    }
  },
  watch: {
    activeTab(value) {
      if (value === 'value') {
        this.getPropTradingChart('chart-container-prop-trading-value')
      } else if (value === 'volume') {
        this.getPropTradingChart('chart-container-prop-trading-volume')
      }
    }
  },
  mounted() {
    this.getPropTradingChart()
  },
  methods: {
    async getPropTradingChart(chartId) {
      try {
        this.isLoading = true
        const response = await getPropTradingChart({ symbol: 'VNINDEX' })
        const reversedData = response.data.overView.reverse()

        const dataTime = reversedData.map(item => {
          return new Date(item.date).getTime()
        })

        const dataBuy = reversedData.map(item => {
          return this.activeTab === 'value' ? item.buyVal / 1000000000 : item.buyVol / 1000000
        })

        const dataSell = reversedData.map(item => {
          return this.activeTab === 'value' ? -(item.sellVal / 1000000000) : -(item.sellVol / 1000000)
        })

        this.createChart(dataTime, dataBuy, dataSell, chartId)
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    createChart(dataTime, dataBuy, dataSell, chartId = 'chart-container-prop-trading-value') {
      // eslint-disable-next-line no-undef
      Highcharts.chart(chartId, {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Chi tiết giao dịch mua và bán'
        },
        xAxis: {
          type: 'datetime',
          categories: dataTime,
          labels: {
            format: '{value:%d/%m}'
          }
        },
        yAxis: {
          title: {
            text: this.activeTab === 'value' ? 'Tỷ đồng' : 'Triệu cổ phiếu'
          }
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          column: {
            borderRadius: '5%'
          },
          series: {
            pointWidth: 15
          }
        },
        tooltip: {
          xDateFormat: '%d/%m/%Y',
          pointFormat: '{series.name}: <b>{point.y:,.2f}</b><br/>'
        },
        series: [
          {
            name: 'Tự doanh mua',
            data: dataBuy,
            color: '#004370'
          },
          {
            name: 'Tự doanh bán',
            data: dataSell,
            color: '#C32022'
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.prop-trading {
  &__title {
    position: relative;
    top: 50px;
    margin-top: -50px;
  }
  ::v-deep {
    .el-tabs__nav {
      width: 20%;
      float: right;
    }
    .el-tabs__item {
      width: 50%;
      text-align: center;
    }
  }
}
</style>
