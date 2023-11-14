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
import { getForeign, test } from '@/api/stock'

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
    test()
  },
  methods: {
    async getForeign(chartId) {
      try {
        this.isLoading = true
        const response = await getForeign()

        const dataNetValue = response.data.map(item => {
          return [new Date(item.tradingDate).getTime(), item.netVal / 1000000000]
        })

        const dataNetVolume = response.data.map(item => {
          return [new Date(item.tradingDate).getTime(), item.netVol / 1000000]
        })

        if (this.activeTab === 'value') {
          this.createChart(dataNetValue, chartId)
        } else if (this.activeTab === 'volume') {
          this.createChart(dataNetVolume, chartId)
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    createChart(data, chartId = 'chart-container-foreign-value') {
      function redrawColumns(chart) {
        chart.series[0].data.forEach(item => {
          if (item.y < 0) {
            item.update({
              color: '#C32022'
            })
          }
        })
      }
      // eslint-disable-next-line no-undef
      Highcharts.chart(chartId, {
        chart: {
          type: 'column',
          events: {
            load: function() {
              redrawColumns(this)
            }
          }
        },
        title: {
          text: ''
        },
        xAxis: {
          type: 'datetime',
          labels: {
            format: '{value:%d/%m}'
          }
        },
        yAxis: {
          title: {
            text: this.activeTab === 'value' ? 'Tỷ đồng' : 'Triệu cổ phiếu'
          }
        },
        legend: {
          enabled: false
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
            name: this.activeTab === 'value' ? 'Giá trị ròng' : 'Khối lượng ròng',
            data: data,
            color: '#43B13E'
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
