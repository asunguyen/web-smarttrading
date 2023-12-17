<template>
  <div v-loading="isLoading" class="trading-result">
    <h2 class="mt-0">Kết quả giao dịch</h2>
    <el-row :gutter="20" class="mb-4">
      <el-col :span="6">
        <div class="mb-2">Sàn</div>
        <el-select v-model="searchParams.catID" placeholder="Sàn" @change="getListStock">
          <el-option
            v-for="item in optionsCatID"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="6">
        <div class="mb-2">Mã CK/Index</div>
        <el-select v-model="searchParams.stockID" filterable clearable placeholder="Mã CK/Index">
          <el-option
            v-for="item in optionsStockID"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="5">
        <div class="mb-2">Từ ngày</div>
        <el-date-picker
          v-model="searchParams.fromDate"
          type="date"
          placeholder="Từ ngày"
          format="dd/MM/yyyy"
          :clearable="false"
          :picker-options="pickerOptions"
        />
      </el-col>
      <el-col :span="5">
        <div class="mb-2">Đến ngày</div>
        <el-date-picker
          v-model="searchParams.toDate"
          type="date"
          placeholder="Đến ngày"
          format="dd/MM/yyyy"
          :clearable="false"
          :picker-options="pickerOptions"
        />
      </el-col>
      <el-col :span="2">
        <el-button type="primary" class="mt-4" @click="search">Tìm kiếm</el-button>
      </el-col>
    </el-row>
    <el-table
      v-show="isShowTableOverview"
      :data="tableDataOverview"
      border
      style="width: 100%"
    >
      <el-table-column
        prop="name"
        label=""
        align="center"
      />
      <el-table-column label="Giao dịch khớp lệnh" align="center">
        <el-table-column
          label="KL"
          align="center"
        >
          <template slot-scope="{row}">
            <span v-if="row.name === 'Toàn thị trường'">{{ row.TotalMatchVolTT | toThousandFilter }}</span>
            <span v-else-if="row.name === 'Cổ phiếu'">{{ row.TotalMatchVolStock | toThousandFilter }}</span>
            <span v-else-if="row.name === 'Trái phiếu'">{{ row.TotalMatchVolBond | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="%(*)"
          align="center"
        >
          <template slot-scope="{row}">
            <span v-if="row.name === 'Toàn thị trường'">{{ row.PerTotalMatchVolTT | roundTo2Digits }}%</span>
            <span v-else-if="row.name === 'Cổ phiếu'">{{ row.PerTotalMatchVolStock | roundTo2Digits }}%</span>
            <span v-else-if="row.name === 'Trái phiếu'">{{ row.PerTotalMatchVolBond | roundTo2Digits }}%</span>
          </template>
        </el-table-column>
        <el-table-column
          label="Giá trị"
          align="center"
        >
          <template slot-scope="{row}">
            <span v-if="row.name === 'Toàn thị trường'">{{ row.TotalMatchValTT | toThousandFilter }}</span>
            <span v-else-if="row.name === 'Cổ phiếu'">{{ row.TotalMatchValStock | toThousandFilter }}</span>
            <span v-else-if="row.name === 'Trái phiếu'">{{ row.TotalMatchValBond | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="%(*)"
          align="center"
        >
          <template slot-scope="{row}">
            <span v-if="row.name === 'Toàn thị trường'">{{ row.PerTotalMatchValTT | roundTo2Digits }}%</span>
            <span v-else-if="row.name === 'Cổ phiếu'">{{ row.PerTotalMatchValStock | roundTo2Digits }}%</span>
            <span v-else-if="row.name === 'Trái phiếu'">{{ row.PerTotalMatchValBond | roundTo2Digits }}%</span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="Giao dịch thoả thuận" align="center">
        <el-table-column
          label="KL"
          align="center"
        >
          <template slot-scope="{row}">
            <span v-if="row.name === 'Toàn thị trường'">{{ row.TotalPutVolTT | toThousandFilter }}</span>
            <span v-else-if="row.name === 'Cổ phiếu'">{{ row.TotalPutVolStock | toThousandFilter }}</span>
            <span v-else-if="row.name === 'Trái phiếu'">{{ row.TotalPutVolBond | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="%(*)"
          align="center"
        >
          <template slot-scope="{row}">
            <span v-if="row.name === 'Toàn thị trường'">{{ row.PerTotalPutVolTT | roundTo2Digits }}%</span>
            <span v-else-if="row.name === 'Cổ phiếu'">{{ row.PerTotalPutVolStock | roundTo2Digits }}%</span>
            <span v-else-if="row.name === 'Trái phiếu'">{{ row.PerTotalPutVolBond | roundTo2Digits }}%</span>
          </template>
        </el-table-column>
        <el-table-column
          label="Giá trị"
          align="center"
        >
          <template slot-scope="{row}">
            <span v-if="row.name === 'Toàn thị trường'">{{ row.TotalPutValTT | toThousandFilter }}</span>
            <span v-else-if="row.name === 'Cổ phiếu'">{{ row.TotalPutValStock | toThousandFilter }}</span>
            <span v-else-if="row.name === 'Trái phiếu'">{{ row.TotalPutValBond | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="%(*)"
          align="center"
        >
          <template slot-scope="{row}">
            <span v-if="row.name === 'Toàn thị trường'">{{ row.PerTotalPutValTT | roundTo2Digits }}%</span>
            <span v-else-if="row.name === 'Cổ phiếu'">{{ row.PerTotalPutValStock | roundTo2Digits }}%</span>
            <span v-else-if="row.name === 'Trái phiếu'">{{ row.PerTotalPutValBond | roundTo2Digits }}%</span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="Tổng" align="center">
        <el-table-column
          label="KL"
          align="center"
        >
          <template slot-scope="{row}">
            <span v-if="row.name === 'Toàn thị trường'">{{ row.TotalVolTT | toThousandFilter }}</span>
            <span v-else-if="row.name === 'Cổ phiếu'">{{ row.TotalVolStock | toThousandFilter }}</span>
            <span v-else-if="row.name === 'Trái phiếu'">{{ row.TotalVolBond | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="Giá trị"
          align="center"
        >
          <template slot-scope="{row}">
            <span v-if="row.name === 'Toàn thị trường'">{{ row.TotalValTT | toThousandFilter }}</span>
            <span v-else-if="row.name === 'Cổ phiếu'">{{ row.TotalValStock | toThousandFilter }}</span>
            <span v-else-if="row.name === 'Trái phiếu'">{{ row.TotalValBond | toThousandFilter }}</span>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>

    <el-table
      :data="tableDataFull"
      border
      style="width: 100%"
      class="mt-4"
    >
      <el-table-column
        label="STT"
        type="index"
        align="center"
      />
      <el-table-column
        prop="TradingDate"
        label="Ngày"
        align="center"
      >
        <template slot-scope="{row}">
          <span>{{ formatDate(row.TradingDate) }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="StockCode"
        label="Mã CK"
        align="center"
      >
        <template slot-scope="{row}">
          <span class="text-004370"><b>{{ row.StockCode }}</b></span>
        </template>
      </el-table-column>
      <el-table-column
        prop="BasicPrice"
        label="Tham chiếu"
        align="center"
      >
        <template slot-scope="{row}">
          <span>{{ row.BasicPrice | formatThousand }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="OpenPrice"
        label="Mở cửa"
        align="center"
      >
        <template slot-scope="{row}">
          <span>{{ row.OpenPrice | formatThousand }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="ClosePrice"
        label="Đóng cửa"
        align="center"
      >
        <template slot-scope="{row}">
          <span>{{ row.ClosePrice | formatThousand }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="HighestPrice"
        label="Cao nhất"
        align="center"
      >
        <template slot-scope="{row}">
          <span>{{ row.HighestPrice | formatThousand }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="LowestPrice"
        label="Thấp nhất"
        align="center"
      >
        <template slot-scope="{row}">
          <span>{{ row.LowestPrice | formatThousand }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="AvrPrice"
        label="Trung bình"
        align="center"
      >
        <template slot-scope="{row}">
          <span>{{ row.AvrPrice | formatThousand }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Thay đổi">
        <el-table-column
          prop="Change"
          label="+/-"
        />
        <el-table-column
          prop="PerChange"
          label="%"
        />
      </el-table-column>
      <el-table-column label="GD khớp lệnh">
        <el-table-column
          prop="M_TotalVol"
          label="KL"
        >
          <template slot-scope="{row}">
            <span>{{ row.M_TotalVol | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="M_TotalVal"
          label="GT"
        >
          <template slot-scope="{row}">
            <span>{{ row.M_TotalVal | toThousandFilter }}</span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="GD thoả thuận">
        <el-table-column
          prop="PT_TotalVal"
          label="KL"
        >
          <template slot-scope="{row}">
            <span>{{ row.PT_TotalVal | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="PT_TotalVol"
          label="GT"
        >
          <template slot-scope="{row}">
            <span>{{ row.PT_TotalVol | toThousandFilter }}</span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="Tổng giao dịch">
        <el-table-column
          prop="TotalVal"
          label="KL"
        >
          <template slot-scope="{row}">
            <span>{{ row.TotalVal | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="TotalVol"
          label="GT"
        >
          <template slot-scope="{row}">
            <span>{{ row.TotalVol | toThousandFilter }}</span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="MarketCap"
        label="Vốn hoá thị trường"
        align="center"
      >
        <template slot-scope="{row}">
          <span>{{ row.MarketCap | round | toThousandFilter }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import moment from 'moment'
import { getListStock, getTradingResult, getTradingResultStock } from '@/api/stock'

export default {
  data() {
    return {
      isLoading: false,
      searchParams: {
        catID: '1',
        stockID: '',
        fromDate: '',
        toDate: '2023-12-10'
      },
      optionsCatID: [
        { label: 'HOSE', value: '1' },
        { label: 'HNX', value: '2' },
        { label: 'VN30', value: '4' },
        { label: 'HNX30', value: '5' },
        { label: 'UPCOM', value: '3' }
      ],
      optionsStockID: [],
      isShowTableOverview: true,
      tableDataOverview: [],
      tableDataFull: [],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      }
    }
  },
  created() {
    const date = new Date()
    this.searchParams.fromDate = moment(date).subtract(1, 'month').format('YYYY-MM-DD')
    this.searchParams.toDate = moment(date).format('YYYY-MM-DD')
  },
  mounted() {
    this.getListStock()
    this.getTradingResult()
  },
  methods: {
    search() {
      if (!this.searchParams.stockID) {
        this.getTradingResult()
      } else {
        this.getTradingResultStock()
      }
    },
    async getTradingResult() {
      try {
        this.isLoading = true
        const response = await getTradingResult({
          catID: this.searchParams.catID,
          date: this.searchParams.toDate
        })
        const data = response.data[1][0]

        const dataTT = {
          name: 'Toàn thị trường'
        }
        Object.keys(data).forEach(item => {
          if (item.includes('TT')) {
            dataTT[item] = data[item]
          }
        })

        const dataStock = {
          name: 'Cổ phiếu'
        }
        Object.keys(data).forEach(item => {
          if (item.includes('Stock')) {
            dataStock[item] = data[item]
          }
        })

        const dataBond = {
          name: 'Trái phiếu'
        }
        Object.keys(data).forEach(item => {
          if (item.includes('Bond')) {
            dataBond[item] = data[item]
          }
        })

        this.isShowTableOverview = true
        this.tableDataOverview = [dataTT, dataStock, dataBond]

        this.tableDataFull = response.data[2]
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    async getTradingResultStock() {
      const response = await getTradingResultStock({
        catID: this.searchParams.catID,
        stockID: this.searchParams.stockID,
        fromDate: this.searchParams.fromDate,
        toDate: this.searchParams.toDate
      })
      this.isShowTableOverview = false
      this.tableDataFull = response.data[1]
    },
    async getListStock() {
      const response = await getListStock({ catID: this.searchParams.catID })
      this.optionsStockID = response.data.map(item => {
        return {
          label: item.StockCode,
          value: item.StockID
        }
      })
    },
    formatDate(date) {
      if (!date) return
      const timestamp = date.substring(date.indexOf('(') + 1, date.indexOf(')'))
      const d = new Date(Number(timestamp))
      return moment(d).format('DD/MM/YYYY')
    }
  }
}
</script>

<style>

</style>
