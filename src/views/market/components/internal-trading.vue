<template>
  <div class="internal-trading">
    <h2>Giao dịch nội bộ</h2>
    <el-row :gutter="20" class="mb-4">
      <el-col :span="4">
        <div class="mb-2">Mã CK</div>
        <el-input v-model="searchParams.stockCode" placeholder="" />
      </el-col>
      <el-col :span="4">
        <div class="mb-2">Từ ngày</div>
        <el-date-picker
          v-model="searchParams.fromDate"
          type="date"
          placeholder="Từ ngày"
          format="dd/MM/yyyy"
          :clearable="false"
        />
      </el-col>
      <el-col :span="4">
        <div class="mb-2">Đến ngày</div>
        <el-date-picker
          v-model="searchParams.toDate"
          type="date"
          placeholder="Đến ngày"
          format="dd/MM/yyyy"
          :clearable="false"
        />
      </el-col>
      <el-col :span="2">
        <el-button type="primary" class="mt-4" @click="getTradingInternal">Tìm kiếm</el-button>
      </el-col>
    </el-row>
    <el-table v-loading="isLoading" :data="tableData" border style="width: 100%" class="mb-3">
      <el-table-column
        label="STT"
        type="index"
        align="center"
      />
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
        prop="TypeName"
        label="Loại GD"
        align="center"
      />
      <el-table-column label="Người thực hiện" align="center">
        <el-table-column
          label="Họ và tên"
          align="center"
        >
          <template slot-scope="{row}">
            <span>{{ row.DTTHLQ || row.DTTHCD }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="Chức vụ"
          align="center"
        >
          <template slot-scope="{row}">
            <span>{{ row.PositionCD }}<span v-if="row.PositionCDEx">,</span> {{ row.PositionCDEx }}</span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="Người liên quan tại tổ chức NY" align="center">
        <el-table-column
          prop="DTLQLQ"
          label="Họ và tên"
          align="center"
        />
        <el-table-column
          prop="ExtraPositionNLQ"
          label="Chức vụ"
          align="center"
        />
        <el-table-column
          prop="RelationShipType"
          label="Quan hệ"
          align="center"
        />
      </el-table-column>
      <el-table-column label="Trước GD" align="center">
        <el-table-column
          prop="RegisterVolumeBefore"
          label="KL"
          align="center"
          width="100px"
        >
          <template slot-scope="{row}">
            <span>{{ row.RegisterVolumeBefore | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="RegisterVolumeBeforePercent"
          label="%"
          align="center"
        >
          <template slot-scope="{row}">
            <span v-if="row.RegisterVolumeBeforePercent">{{ row.RegisterVolumeBeforePercent }}</span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="Đăng ký" align="center">
        <el-table-column
          prop="RegisterBuyVolume"
          label="KLGD"
          align="center"
          width="100px"
        >
          <template slot-scope="{row}">
            <span>{{ row.RegisterBuyVolume | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="DateBuyExpected"
          label="Từ ngày"
          align="center"
          width="94px"
        >
          <template slot-scope="{row}">
            <span>{{ formatDate(row.DateBuyExpected) }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="DateSellExpected"
          label="Đến ngày"
          align="center"
          width="94px"
        >
          <template slot-scope="{row}">
            <span>{{ formatDate(row.DateSellExpected) }}</span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="Thực hiện" align="center">
        <el-table-column
          label="KLGD"
          align="center"
          width="100px"
        >
          <template slot-scope="{row}">
            <span v-if="row.BuyVolume">{{ row.BuyVolume | toThousandFilter }}</span>
            <span v-if="row.SellVolume">-{{ row.SellVolume | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="DateActionFrom"
          label="Từ ngày"
          align="center"
          width="94px"
        >
          <template slot-scope="{row}">
            <span>{{ formatDate(row.DateActionFrom) }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="DateActionTo"
          label="Đến ngày"
          align="center"
          width="94px"
        >
          <template slot-scope="{row}">
            <span>{{ formatDate(row.DateActionTo) }}</span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="Sau GD" align="center">
        <el-table-column
          prop="VolumeAfter"
          label="KL"
          align="center"
          width="100px"
        >
          <template slot-scope="{row}">
            <span>{{ row.VolumeAfter | toThousandFilter }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="VolumeAfterPercent"
          label="%"
          align="center"
        >
          <template slot-scope="{row}">
            <span v-if="row.VolumeAfterPercent">{{ row.VolumeAfterPercent }}</span>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
    <el-pagination
      :total="pagination.total"
      :current-page.sync="pagination.page"
      :page-size.sync="pagination.pageSize"
      :page-sizes="[10, 20, 30, 50]"
      layout="total, sizes, prev, pager, next"
      background
      hide-on-single-page
      @size-change="handleSizeChange"
      @current-change="getTradingInternal"
    />
  </div>
</template>

<script>
import moment from 'moment'
import { getTradingInternal } from '@/api/stock'

export default {
  data() {
    return {
      isLoading: false,
      searchParams: {
        stockCode: '',
        fromDate: '2023-11-10',
        toDate: '2024-01-10'
      },
      tableData: [],
      pagination: {
        total: 0,
        page: 1,
        pageSize: 20
      }
    }
  },
  created() {
    const date = new Date()
    this.searchParams.fromDate = moment(date).subtract(1, 'month').format('YYYY-MM-DD')
    this.searchParams.toDate = moment(date).add(1, 'month').format('YYYY-MM-DD')
  },
  mounted() {
    this.getTradingInternal()
  },
  methods: {
    async getTradingInternal() {
      try {
        this.isLoading = true
        const response = await getTradingInternal({
          transferTypeID: 0,
          stockCode: this.searchParams.stockCode,
          fDate: this.searchParams.fromDate,
          tDate: this.searchParams.toDate,
          orderBy: 'EventID',
          orderDir: 'DESC',
          page: this.pagination.page,
          pageSize: this.pagination.pageSize
        })
        response.data.forEach(item => {
          Object.keys(item).forEach(item2 => {
            if (item[item2] === 'Blank') item[item2] = ''
          })
        })
        this.tableData = response.data
        this.pagination.total = response.data[0]?.TotalRecord
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    handleSizeChange() {
      this.pagination.page = 1
      this.getTradingInternal()
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
