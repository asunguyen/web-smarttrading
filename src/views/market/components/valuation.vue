<template>
  <el-card class="valuation">
    <h2 class="valuation__title mt-2">Định giá</h2>
    <el-tabs v-model="activeTab" type="card">
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
              <span class="text-004370"><b>{{ row.title | formatNameTableValuation }}</b></span>
            </template>
          </el-table-column>
          <el-table-column
            label="2023"
            prop="value"
            align="center"
            width="100"
          >
            <template slot-scope="{row}">
              <span v-if="row.title === 'MaketCap'">{{ row.value | formatBillion | round | toThousandFilter }}</span>
              <span v-else>{{ row.value | roundTo2Digits }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="2022"
            prop="oldValue"
            align="center"
            width="100"
          >
            <template slot-scope="{row}">
              <span v-if="row.title === 'MaketCap'">{{ row.oldValue | formatBillion | round | toThousandFilter }}</span>
              <span v-else>{{ row.oldValue | roundTo2Digits }}</span>
            </template>
          </el-table-column>
        </el-table>
        <div id="chart-container-valuation" />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import { getValuation } from '@/api/stock'

export default {
  filters: {
    formatNameTableValuation(value) {
      if (!value) return
      switch (value) {
        case 'PE': return 'P/E'
        case 'PB': return 'P/B'
        case 'ROA': return 'ROA(%)'
        case 'ROE': return 'ROE(%)'
        // case 'DIVIDEND_YIELD': return 'Lợi tức cổ phần (%)'
        case 'MaketCap': return 'Vốn hoá thị trường (tỷ đồng)'
      }
    }
  },
  data() {
    return {
      activeTab: 'VNIndex',
      listFloor: [
        { label: 'VNINDEX', name: 'VNIndex' }
      ],
      isLoading: false,
      tableData: []
    }
  },
  mounted() {
    this.getValuation()
  },
  methods: {
    async getValuation() {
      const response = await getValuation()

      this.tableData = this.getChangeArray(response.data.NowDataFinance, response.data.PastDataFinance)

      // response.data.DataChart.sort((a, b) => {
      //   return a.Time.substring(a.Time.indexOf('(') + 1, a.Time.indexOf(')')) - b.Time.substring(b.Time.indexOf('(') + 1, b.Time.indexOf(')'))
      // })

      // let dataPE = response.data.DataChart.map(item => {
      //   return [item.Time.substring(item.Time.indexOf('(') + 1, item.Time.indexOf(')')), item.Pe]
      // })
      // let dataIndex = response.data.DataChart.map(item => {
      //   return [item.Time.substring(item.Time.indexOf('(') + 1, item.Time.indexOf(')')), item.Index]
      // })

      // dataPE = dataPE.slice(0, 1000)
      // dataIndex = dataIndex.slice(0, 1000)
      // this.createChart(dataPE, dataIndex)
    },
    getChangeArray(obj1, obj2) {
      return Object.entries(obj1).reduce((acc, [key, value]) => {
        if (obj2[key] !== value) {
          acc.push({ title: key, value, oldValue: obj2[key] })
        }
        return acc
      }, [])
    },

    createChart(dataPE, dataIndex) {
      // eslint-disable-next-line no-undef
      Highcharts.stockChart('chart-container-valuation', {
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
        series: [
          {
            name: 'PE',
            data: dataPE
          },
          {
            name: 'Index',
            data: dataIndex
          }
        ]
      })
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
      width: 100%;
      text-align: center;
    }
  }
}
</style>
