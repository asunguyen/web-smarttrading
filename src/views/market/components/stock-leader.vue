<template>
  <el-card class="stock-leader">
    <h2 class="stock-leader__title mt-2">Nhóm dẫn dắt thị trường</h2>
    <el-tabs v-model="activeTab" v-loading="isLoading" type="card">
      <el-tab-pane label="VNINDEX" name="VNINDEX">
        <div id="chart-container-stock-leader-vnindex" class="mt-4" />
      </el-tab-pane>
      <el-tab-pane label="HNX" name="HNX">
        <div id="chart-container-stock-leader-hnx" class="mt-4" />
      </el-tab-pane>
      <el-tab-pane label="VN30" name="VN30">
        <div id="chart-container-stock-leader-vn30" class="mt-4" />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import { getLeaderLarger } from '@/api/stock'

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
        this.getLeaderLarger(value, 'chart-container-stock-leader-vnindex')
      } else if (value === 'HNX') {
        this.getLeaderLarger(value, 'chart-container-stock-leader-hnx')
      } else if (value === 'VN30') {
        this.getLeaderLarger(value, 'chart-container-stock-leader-vn30')
      }
    }
  },
  mounted() {
    this.getLeaderLarger(this.activeTab)
  },
  methods: {
    async getLeaderLarger(floor, chartId) {
      try {
        this.isLoading = true
        const response = await getLeaderLarger(floor)

        const dataPositive = response.data.filter(item => item.point > 0)
        const amountOfPositiveItem = dataPositive.length >= 6 ? 6 : dataPositive.length
        dataPositive.sort((a, b) => {
          return b.point - a.point
        })
        const resultDataPositive = dataPositive.slice(0, amountOfPositiveItem)

        const dataNegative = response.data.filter(item => item.point < 0)
        const amountOfNegativeItem = dataNegative.length >= 6 ? 6 : dataNegative.length
        dataNegative.sort((a, b) => {
          return a.point - b.point
        })
        const resultDataNegative = dataNegative.slice(0, amountOfNegativeItem)

        this.createChart(resultDataPositive, resultDataNegative, chartId)
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    createChart(dataPositive, dataNegative, chartId = 'chart-container-stock-leader-vnindex') {
      const thisVue = this
      const dataPointPositive = dataPositive.map(item => item.point)
      const lengthOfDataPointPositive = dataPositive.length
      for (let i = 0; i < lengthOfDataPointPositive; i++) {
        dataPointPositive.push(0)
      }

      const dataPointNegative = dataNegative.map(item => item.point)
      const lengthOfDataPointNegative = dataPositive.length
      for (let i = 0; i < lengthOfDataPointNegative; i++) {
        dataPointNegative.push(0)
      }

      const dataSymbolPositive = dataPositive.map(item => item.symbol)
      const dataSymbolNegative = dataNegative.map(item => item.symbol)
      const dataSymbol = [...dataSymbolPositive, ...dataSymbolNegative.reverse()]

      // eslint-disable-next-line no-undef
      Highcharts.chart(chartId, {
        chart: {
          type: 'column'
        },
        title: {
          text: ''
        },
        xAxis: {
          categories: dataSymbol
        },
        yAxis: {
          title: {
            text: 'Mức độ đóng góp (điểm)'
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
            pointWidth: 12
          }
        },
        series: [
          {
            name: 'Mức đóng góp tăng',
            data: dataPointPositive,
            color: '#43B13E'
          },
          {
            name: 'Mức đóng góp giảm',
            data: dataPointNegative.reverse(),
            color: '#C32022'
          }
        ],
        tooltip: {
          formatter() {
            return `
              <b>${this.x}</b><br>
              Đóng góp vào ${thisVue.activeTab} ${this.y.toFixed(3)}
            `
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.stock-leader {
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
