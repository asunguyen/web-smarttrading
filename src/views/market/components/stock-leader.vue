<template>
  <el-card class="stock-leader">
    <h2 class="stock-leader__title">Nhóm dẫn dắt thị trường</h2>
    <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
      <el-tab-pane
        v-for="typeStock in listTypeStock"
        :key="typeStock.label"
        :label="typeStock.label"
        :name="typeStock.name"
      >
        <highcharts ref="chart" :options="chartOptions" />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'vn-index',
      listTypeStock: [
        { label: 'VN-Index', name: 'vn-index' },
        { label: 'HNX', name: 'hnx' },
        { label: 'UPCOM', name: 'upcom' }
      ],
      chartOptions: {
        chart: {
          type: 'column'
        },
        title: {
          text: ''
        },
        xAxis: {
          categories: ['PVS', 'CEO', 'SHS', 'THD', 'MBS', 'PVI', 'TNG', 'DHT', 'VNT', 'L14', 'PMS', 'TMB', 'S55', 'NTH', 'CDN', 'TVC', 'VNR', 'TAR', 'DTK', 'VIF'],
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
            pointWidth: 8
          }
        },
        series: [
          {
            name: 'Mức đóng góp tăng',
            data: [0.844, 0.545, 0.383, 0.272, 0.206, 0.11, 0.107, 0.104, 0.1, 0.094, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            color: '#43B13E'
          },
          {
            name: 'Mức đóng góp giảm',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -0.03, -0.032, -0.035, -0.055, -0.058, -0.07, -0.089, -0.101, -0.161, -0.206],
            color: '#C32022'
          }
        ],
        tooltip: {
          formatter() {
            return `
              <b>${this.x}</b><br>
              Đóng góp vào VN-Index ${this.y}
            `
          }
        }
      }
    }
  },
  methods: {
    handleClick() {}
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
