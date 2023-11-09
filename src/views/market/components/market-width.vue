<template>
  <el-card class="market-width">
    <h2 class="market-width__title mt-0">Độ rộng thị trường</h2>
    <el-tabs v-model="activeTab" v-loading="isLoading" type="card">
      <el-tab-pane label="HOSE" name="VNINDEX">
        <div id="chart-container-market-width-vnindex" class="mt-4" />
      </el-tab-pane>
      <el-tab-pane label="HNX" name="HNX">
        <div id="chart-container-market-width-hnx" class="mt-4" />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import { getMarketWidth } from '@/api/stock'

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
        this.getMarketWidth(this.activeTab, 'chart-container-market-width-vnindex')
      } else if (value === 'HNX') {
        this.getMarketWidth(this.activeTab, 'chart-container-market-width-hnx')
      }
    }
  },
  mounted() {
    this.getMarketWidth(this.activeTab)
  },
  methods: {
    async getMarketWidth(floor, chartId) {
      try {
        this.isLoading = true
        const response = await getMarketWidth(floor)
        const toMilliseconds = (hrs, min, sec) => (hrs * 60 * 60 + min * 60 + sec) * 1000
        const dataNoChange = response.data.map(item => {
          const d = new Date(`2023-11-09 ${item.time}`)
          const hour = d.getHours()
          const minute = d.getMinutes()
          const second = d.getSeconds()
          return [toMilliseconds(hour, minute, second), item.noChange]
        })
        const dataAdvance = response.data.map(item => {
          const d = new Date(`2023-11-09 ${item.time}`)
          const hour = d.getHours()
          const minute = d.getMinutes()
          const second = d.getSeconds()
          return [toMilliseconds(hour, minute, second), item.advance]
        })
        const dataDecline = response.data.map(item => {
          const d = new Date(`2023-11-09 ${item.time}`)
          const hour = d.getHours()
          const minute = d.getMinutes()
          const second = d.getSeconds()
          return [toMilliseconds(hour, minute, second), item.decline]
        })
        this.createChart(dataDecline, dataNoChange, dataAdvance, chartId)
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    createChart(dataDecline, dataNoChange, dataAdvance, chartId = 'chart-container-market-width-vnindex') {
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
            text: 'Tỉ lệ %'
          }
        },
        tooltip: {
          xDateFormat: '%H:%M',
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: {point.y:,.1f} (<b>{point.percentage:.1f}%</b>)',
          split: true
        },
        plotOptions: {
          // series: {
          //   pointStart: 1990
          // },
          area: {
            stacking: 'percent',
            marker: {
              enabled: false
            }
          }
        },
        series: [
          {
            name: 'Tăng giá',
            data: dataAdvance,
            color: '#5AB55C'
          },
          {
            name: 'Đứng giá',
            data: dataNoChange,
            color: '#FCDA50'
          },
          {
            name: 'Giảm giá',
            data: dataDecline,
            color: '#BC3A36'
          }
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.market-width {
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
