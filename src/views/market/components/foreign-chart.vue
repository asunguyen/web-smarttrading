<template>
  <el-card class="foreign-chart">
    <h2 class="foreign-chart__title mt-0">Diễn biến giao dịch khối ngoại</h2>
    <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
      <el-tab-pane label="Giá trị" name="value">
        <highcharts ref="chartValue" :options="chartValueOptions" />
      </el-tab-pane>
      <el-tab-pane label="Khối lượng" name="volume">
        <highcharts ref="chartVolume" :options="chartVolumeOptions" />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'value',
      chartValueOptions: {
        chart: {
          type: 'column'
        },
        title: {
          text: ''
        },
        xAxis: {
          categories: [
            '2/10/2023',
            '3/10/2023',
            '4/10/2023',
            '5/10/2023',
            '6/10/2023',
            '9/10/2023',
            '10/10/2023',
            '11/10/2023',
            '12/10/2023',
            '13/10/2023',
            '16/10/2023',
            '17/10/2023',
            '18/10/2023',
            '19/10/2023',
            '20/10/2023',
            '23/10/2023',
            '24/10/2023',
            '25/10/2023',
            '26/10/2023',
            '27/10/2023'
          ],
          labels: {
            style: {
              fontSize: '10px'
            }
          }
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
            borderRadius: '25%'
          },
          series: {
            pointWidth: 10
          }
        },
        series: [
          {
            name: 'Giá trị mua',
            data: [665, 969, 1034, 266, 800, 335, 558, 659, 607, 644, 316, 719, 1249, 1299, 1044, 501, 646, 415, 1369, 347],
            color: '#004370'
          },
          {
            name: 'Giá trị bán',
            data: [-549, -1096, -876, -966, -658, -839, -823, -590, -110, -795, -106, -624, -694, -1042, -848, -1573, -1082, -945, -1410, -1036],
            color: '#C32022'
          }
        ]
      },
      chartVolumeOptions: {}
    }
  },
  methods: {
    handleClick() {}
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
