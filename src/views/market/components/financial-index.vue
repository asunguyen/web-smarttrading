<template>
  <div class="financial-index">
    <h2 class="mt-0">Chỉ số tài chính</h2>
    <div id="chart-container-financial-index" class="mt-4" />
  </div>
</template>

<script>
import { getFinancialIndex } from '@/api/stock'

export default {
  data() {
    return {
      isLoading: false
    }
  },
  mounted() {
    this.getFinancialIndex()
  },
  methods: {
    async getFinancialIndex() {
      try {
        this.isLoading = true
        const response = await getFinancialIndex()
        const dataXAxis = response.data.map(item => item.ReportTerm)
        const data = response.data.map(item => item.Giá_trị)
        this.createChart(dataXAxis, data)
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    createChart(dataXAxis, data) {
      // eslint-disable-next-line no-undef
      Highcharts.chart('chart-container-financial-index', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Tỷ giá cuối kỳ'
        },
        xAxis: {
          categories: dataXAxis,
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Đơn vị tính: VND/USD'
          }
        },
        credits: {
          enabled: false
        },
        legend: {
          enabled: false
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [
          {
            name: 'Giá trị',
            data,
            color: '#004370'
          }
        ]
      })
    }
  }
}
</script>
