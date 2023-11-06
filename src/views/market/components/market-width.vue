<template>
  <el-card class="market-width">
    <h2 class="market-width__title mt-0">Độ rộng thị trường</h2>
    <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
      <el-tab-pane
        v-for="typeStock in listTypeStock"
        :key="typeStock.label"
        :label="typeStock.label"
        :name="typeStock.name"
      >
        <!-- <highcharts ref="chart" :options="chartOptions" /> -->
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'hose',
      listTypeStock: [
        { label: 'HOSE', name: 'hose' },
        { label: 'HNX', name: 'hnx' }
      ],
      chartOptions: {
        chart: {
          type: 'area'
        },
        title: {
          text: ''
        },
        accessibility: {
          point: {
            valueDescriptionFormat: '{index}. {point.category}, {point.y:,.1f} billions, {point.percentage:.1f}%.'
          }
        },
        yAxis: {
          labels: {
            format: '{value}'
          },
          title: {
            enabled: false
          }
        },
        tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.1f} billion Gt)<br/>',
          split: true
        },
        plotOptions: {
          series: {
            pointStart: 1990
          },
          area: {
            stacking: 'percent',
            marker: {
              enabled: false
            }
          }
        },
        series: [
          {
            name: 'Giảm giá',
            data: [2.5, 2.6, 2.7, 2.9, 3.1, 3.4, 3.5, 3.5, 3.4, 3.4, 3.4,
              3.5, 3.9, 4.5, 5.2, 5.9, 6.5, 7, 7.5, 7.9, 8.6, 9.5, 9.8,
              10, 10, 9.8, 9.7, 9.9, 10.3, 10.5, 10.7, 10.9
            ],
            color: '#c32022'
          },
          {
            name: 'Đồng giá',
            data: [5.1, 5.1, 5.2, 5.3, 5.4, 5.4, 5.6, 5.7, 5.7, 5.8, 6, 5.9,
              5.9, 6, 6.1, 6.1, 6.1, 6.1, 5.9, 5.5, 5.7, 5.5, 5.3, 5.5,
              5.5, 5.4, 5.2, 5.2, 5.4, 5.3, 4.7, 5
            ],
            color: '#ffce51'
          },
          {
            name: 'Tăng giá',
            data: [3.9, 3.8, 3.7, 3.6, 3.6, 3.6, 3.7, 3.7, 3.6, 3.6, 3.6, 3.7,
              3.7, 3.7, 3.8, 3.7, 3.7, 3.7, 3.6, 3.3, 3.4, 3.3, 3.3, 3.2, 3,
              3.1, 3.1, 3.1, 3, 2.9, 2.6, 2.7
            ],
            color: '#43b13e'
          }
        ]
      }
    }
  },
  methods: {
    handleClick() {}
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
