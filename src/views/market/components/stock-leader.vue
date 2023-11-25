<template>
  <el-card class="stock-leader">
    <h2 class="stock-leader__title mt-2">Nhóm dẫn dắt thị trường</h2>
    <el-tabs v-model="activeTab" v-loading="isLoading" type="card">
      <el-tab-pane label="VNINDEX" name="1">
        <div id="chart-container-stock-leader-vnindex" class="mt-4" />
      </el-tab-pane>
      <el-tab-pane label="HNX" name="2">
        <div id="chart-container-stock-leader-hnx" class="mt-4" />
      </el-tab-pane>
      <el-tab-pane label="UPCOM" name="9">
        <div id="chart-container-stock-leader-upcom" class="mt-4" />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import { getMarketLeader } from '@/api/stock'

export default {
  data() {
    return {
      activeTab: '1',
      activeTabName: 'VNINDEX',
      isLoading: false
    }
  },
  watch: {
    activeTab(value) {
      if (value === '1') {
        this.activeTabName = 'VNINDEX'
        this.getMarketLeader(value, 'chart-container-stock-leader-vnindex')
      } else if (value === '2') {
        this.activeTabName = 'HNX'
        this.getMarketLeader(value, 'chart-container-stock-leader-hnx')
      } else if (value === '9') {
        this.activeTabName = 'UPCOM'
        this.getMarketLeader(value, 'chart-container-stock-leader-upcom')
      }
    }
  },
  mounted() {
    this.getMarketLeader(this.activeTab)
  },
  methods: {
    async getMarketLeader(floor, chartId) {
      try {
        this.isLoading = true
        const response = await getMarketLeader({ centerId: floor })

        const dataPositive = response.data.filter(item => item.score > 0)
        const dataNegative = response.data.filter(item => item.score < 0)

        this.createChart(dataPositive, dataNegative, chartId)
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    createChart(dataPositive, dataNegative, chartId = 'chart-container-stock-leader-vnindex') {
      const thisVue = this
      const dataScorePostive = dataPositive.map(item => item.score)
      const lengthOfDataScorePostive = dataPositive.length
      for (let i = 0; i < lengthOfDataScorePostive; i++) {
        dataScorePostive.push(0)
      }

      const dataScoreNegative = dataNegative.map(item => item.score)
      const lengthOfDataScoreNegative = dataPositive.length
      for (let i = 0; i < lengthOfDataScoreNegative; i++) {
        dataScoreNegative.push(0)
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
            text: ''
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
            pointWidth: 8
          }
        },
        series: [
          {
            name: 'Mức đóng góp tăng',
            data: dataScorePostive,
            color: '#43B13E'
          },
          {
            name: 'Mức đóng góp giảm',
            data: dataScoreNegative.reverse(),
            color: '#C32022'
          }
        ],
        tooltip: {
          formatter() {
            return `
              <b>${this.x}</b><br>
              Đóng góp vào ${thisVue.activeTabName} ${this.y.toFixed(2)}
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
