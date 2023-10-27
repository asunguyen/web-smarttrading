<template>
  <el-card class="valuation">
    <h2 class="valuation__title">Định giá</h2>
    <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
      <el-tab-pane
        label="VN-Index"
        name="vn-index"
      >
        <el-table
          v-loading="isLoading"
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column label="Chỉ tiêu" prop="name" />
          <el-table-column label="2023" prop="value2023" align="center" width="100" />
          <el-table-column label="2022" prop="value2022" align="center" width="100" />
        </el-table>
        <!-- <highcharts ref="chart" :key="keyChart" :options="chartOptions" /> -->
      </el-tab-pane>
      <el-tab-pane
        label="VN30"
        name="vn30"
      >
        Tính năng đang phát triển
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'vn-index',
      isLoading: false,
      tableData: [
        { name: 'P/E', value2023: 11.73, value2022: 10.6 },
        { name: 'P/B', value2023: 'N/A', value2022: 'N/A' },
        { name: 'ROA(%)', value2023: 1.13, value2022: 'N/A' },
        { name: 'ROE(%)', value2023: 'N/A', value2022: 'N/A' },
        { name: 'Lợi tức cổ phần(%)', value2023: 'N/A', value2022: 'N/A' },
        { name: 'Vốn hoá thị trường(tỷ đồng)', value2023: 'N/A', value2022: 'N/A' }
      ],
      seriesOptions: [],
      seriesCounter: 0,
      names: ['MSFT', 'AAPL', 'GOOG'],
      keyChart: 0,
      chartOptions: {
        rangeSelector: {
          selected: 4
        },
        yAxis: {
          labels: {
            format: '{#if (gt value 0)}+{/if}{value}%'
          },
          plotLines: [{
            value: 0,
            width: 2,
            color: 'silver'
          }]
        },
        plotOptions: {
          series: {
            compare: 'percent',
            showInNavigator: true
          }
        },
        tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
          valueDecimals: 2,
          split: true
        },
        series: []
      }
    }
  },
  methods: {
    handleClick() {}
  }
}
</script>

<style lang="scss" scoped>
.valuation {
  &__title {
    text-align: center;
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
