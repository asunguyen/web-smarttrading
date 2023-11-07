<template>
  <el-card class="valuation">
    <h2 class="valuation__title mt-2">Định giá</h2>
    <el-tabs v-model="activeTab" type="card" @tab-click="changeTab">
      <el-tab-pane
        v-for="floor in listFloor"
        :key="floor.label"
        :label="floor.label"
        :name="floor.name"
      >
        <el-table
          v-loading="isLoading"
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column label="Chỉ tiêu" prop="title">
            <template slot-scope="{row}">
              <span><b>{{ row.title | formatNameTableValuation }}</b></span>
            </template>
          </el-table-column>
          <el-table-column
            label="Hiện tại"
            prop="currentValue"
            align="center"
            width="100"
          >
            <template slot-scope="{row}">
              <span v-if="['ROAA_TR_AVG5Q', 'ROAE_TR_AVG5Q', 'DIVIDEND_YIELD'].includes(row.title)">
                {{ row.currentValue * 100 | roundTo2Digits }}
              </span>
              <span v-else-if="row.title === 'MARKETCAP'">{{ row.currentValue | formatBillion | roundUp | toThousandFilter }}</span>
              <span v-else>{{ row.currentValue | roundTo2Digits }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="2022"
            prop="lastYearValue"
            align="center"
            width="100"
          >
            <template slot-scope="{row}">
              <span v-if="['ROAA_TR_AVG5Q', 'ROAE_TR_AVG5Q', 'DIVIDEND_YIELD'].includes(row.title)">
                {{ row.lastYearValue * 100 | roundTo2Digits }}
              </span>
              <span v-else-if="row.title === 'MARKETCAP'">{{ row.lastYearValue | formatBillion | roundUp | toThousandFilter }}</span>
              <span v-else>{{ row.lastYearValue | roundTo2Digits }}</span>
            </template>
          </el-table-column>
        </el-table>
        <!-- <div id="chart-container" /> -->
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import { getListValuation, getListValuationLastYear } from '@/api/stock'
const names = ['AAPL', 'GOOG']

export default {
  filters: {
    formatNameTableValuation(value) {
      if (!value) return
      switch (value) {
        case 'PRICE_TO_EARNINGS': return 'P/E'
        case 'PRICE_TO_BOOK': return 'P/B'
        case 'PRICE_TO_SALES': return 'P/S'
        case 'ROAA_TR_AVG5Q': return 'ROAA (%)'
        case 'ROAE_TR_AVG5Q': return 'ROAE (%)'
        case 'DIVIDEND_YIELD': return 'Lợi tức cổ phần (%)'
        case 'MARKETCAP': return 'Vốn hoá TT (tỷ đồng)'
      }
    }
  },
  data() {
    return {
      activeTab: 'VNIndex',
      listFloor: [
        { label: 'VNINDEX', name: 'VNIndex' },
        { label: 'VN30', name: 'vn30' },
        { label: 'HNX', name: 'hnx' },
        { label: 'UPCOM', name: 'upcom' }
      ],
      isLoading: false,
      tableData: []
    }
  },
  mounted() {
    // this.getData()
    this.getListValuation(this.activeTab)
  },
  methods: {
    changeTab() {
      this.tableData = []
      this.getListValuation(this.activeTab)
    },
    async getListValuation(floor) {
      const response = await getListValuation({ floor })
      const response2 = await getListValuationLastYear({
        floor: this.activeTab
      })
      const array = [...response.data, ...response2.data]
      const convertedArray = Object.values(
        array.reduce((acc, item) => {
          acc[item.ratioCode]
            ? acc[item.ratioCode].cells.push({
              reportDate: item.reportDate,
              value: item.value
            })
            : (acc[item.ratioCode] = {
              ratioCode: item.ratioCode,
              cells: [{ reportDate: item.reportDate, value: item.value }]
            })
          return acc
        }, {})
      )
      convertedArray.forEach((item) => {
        const obj = {
          title: item.ratioCode
        }
        item.cells.forEach((item2) => {
          const currentYear = new Date().getFullYear()
          const lastYear = new Date().getFullYear() - 1
          if (item2.reportDate.includes(currentYear)) {
            obj.currentValue = item2.value
          } else if (item2.reportDate.includes(lastYear)) {
            obj.lastYearValue = item2.value
          }
        })
        this.tableData.push(obj)
      })
    },

    createChart(series) {
      // eslint-disable-next-line no-undef
      Highcharts.stockChart('chart-container', {
        rangeSelector: {
          selected: 4
        },
        yAxis: {
          labels: {
            format: '{#if (gt value 0)}+{/if}{value}%'
          },
          plotLines: [
            {
              value: 0,
              width: 2,
              color: 'silver'
            }
          ]
        },
        plotOptions: {
          series: {
            compare: 'percent',
            showInNavigator: true
          }
        },
        tooltip: {
          pointFormat:
            '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
          valueDecimals: 2,
          split: true
        },
        series
      })
    },
    async getData() {
      const promises = names.map(
        (name) =>
          new Promise((resolve) => {
            (async() => {
              const data = await fetch(
                'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/' +
                  'samples/data/' +
                  name.toLowerCase() +
                  '-c.json'
              ).then((response) => response.json())
              resolve({ name, data })
            })()
          })
      )

      const series = await Promise.all(promises)
      this.createChart(series)
    }
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
      width: 25%;
      text-align: center;
    }
  }
}
</style>
