<template>
  <el-card class="foreign-chart">
    <h2 class="foreign-chart__title mt-0">Diễn biến giao dịch khối ngoại</h2>
    <el-tabs v-model="activeTab" v-loading="isLoading" type="card">
      <el-tab-pane label="Giá trị" name="value">
        <div id="chart-container-foreign-value" class="mt-4" />
      </el-tab-pane>
      <el-tab-pane label="Khối lượng" name="volume">
        <div id="chart-container-foreign-volume" class="mt-4" />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import { getForeignChart } from '@/api/stock'

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
        this.getForeign('chart-container-foreign-value')
      } else if (value === 'volume') {
        this.getForeign('chart-container-foreign-volume')
      }
    }
  },
  mounted() {
    this.getForeign()
  },
  methods: {
    async getForeign(chartId) {
      try {
        this.isLoading = true
        const response = await getForeignChart()
        const reversedData = response.data.reverse()

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
    createChart(dataTime, dataBuy, dataSell, chartId = 'chart-container-foreign-value') {
      // function redrawColumns(chart) {
      //   chart.series[0].data.forEach(item => {
      //     if (item.y < 0) {
      //       item.update({
      //         color: '#C32022'
      //       })
      //     }
      //   })
      // }
      // eslint-disable-next-line no-undef
      Highcharts.chart(chartId, {
        chart: {
          type: 'column'
          // events: {
          //   load: function() {
          //     redrawColumns(this)
          //   }
          // }
        },
        title: {
          text: ''
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
            name: 'Giá trị mua',
            data: dataBuy,
            color: '#004370'
          },
          {
            name: 'Giá trị bán',
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
.foreign-chart {
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
