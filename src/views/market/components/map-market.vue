<template>
  <el-card class="map-market">
    <h2 class="map-market__title mt-0">Bản đồ thị trường</h2>
    <el-tabs v-model="activeTab" v-loading="isLoading" type="card">
      <el-tab-pane label="HOSE" name="1">
        <div id="container-map-market-1" style="height: 400px" />
      </el-tab-pane>
      <el-tab-pane label="HNX" name="2">
        <div id="container-map-market-2" style="height: 400px" />
      </el-tab-pane>
      <el-tab-pane label="UPCOM" name="9">
        <div id="container-map-market-9" style="height: 400px" />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import { getMapMarket } from '@/api/stock'

export default {
  data() {
    return {
      activeTab: '1',
      isLoading: false
      // type: 1,
      // listType: [
      //   { label: 'Khối lượng giao dịch', value: 1 },
      //   { label: 'Giá trị giao dịch', value: 2 },
      //   { label: 'Vốn hoá', value: 3 }
      // ],
      // category: 0,
      // listCategories: [
      //   { label: 'Tất cả các ngành', value: 0 },
      //   { label: 'Bất động sản và xây dựng', value: 345 },
      //   { label: 'Công nghệ', value: 347 },
      //   { label: 'Công nghiệp', value: 343 },
      //   { label: 'Dịch vụ', value: 346 },
      //   { label: 'Doanh nghiệp OTC', value: 349 },
      //   { label: 'Doanh nghiệp Upcom', value: 350 },
      //   { label: 'Hàng tiêu dùng', value: 339 },
      //   { label: 'Năng lượng', value: 340 },
      //   { label: 'Nguyên vật liệu', value: 344 },
      //   { label: 'Nông nghiệp', value: 338 },
      //   { label: 'Tài chính', value: 341 },
      //   { label: 'Viễn thông', value: 348 },
      //   { label: 'Y tế', value: 342 }
      // ]
    }
  },
  watch: {
    activeTab(value) {
      this.getMapMarket(this.type, this.category, this.activeTab, `container-map-market-${value}`)
    }
  },
  mounted() {
    this.getMapMarket(this.type, this.category, this.activeTab)
  },
  methods: {
    async getMapMarket(type, category, centerId, chartId = 'container-map-market-1') {
      try {
        this.isLoading = true
        const response = await getMapMarket({ type, category, centerId })

        const data = response.data.map(item => {
          return {
            name: item.Symbol,
            value: item.TotalVolume,
            changePercent: item.ChangePercent,
            price: item.Price,
            fill: this.getColor(item.Color)
          }
        })
        this.drawChart(data.slice(0, 100), chartId)
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    drawChart(data, chartId) {
      const dataChart = [
        {
          children: data
        }
      ]

      // eslint-disable-next-line no-undef
      const chart = anychart.treeMap(dataChart, 'as-tree')

      chart.container(chartId)
      chart.headers(false)
      chart.labels().useHtml(true)
      chart.labels().format(
        "<span style='font-weight:bold; color: #fff'>{%name}</span><br><span style='font-weight:bold; color: #fff'>({%changePercent}%)</span>"
      )
      chart.tooltip().format(
        'Khối lượng: {%value}\nThay đổi giá: {%changePercent}%\nĐang khớp: {%price}'
      )

      chart.draw()
    },
    getColor(color) {
      if (color === -2) return '#1F9FFC'
      else if (color === -1) return '#D23133'
      else if (color === 0) return '#FFB800'
      else if (color === 1) return '#33A42E'
      else if (color === 2) return '#6743CD'
    }
  }
}
</script>

<style lang="scss" scoped>
.map-market {
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
      width: 33.33%;
      text-align: center;
    }
    .anychart-credits {
      display: none;
    }
  }
}
</style>
