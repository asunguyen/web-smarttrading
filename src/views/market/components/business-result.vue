<template>
  <div class="business-result">
    <h2 class="mt-0">Kết quả kinh doanh</h2>
    <el-row :gutter="20" class="mb-4">
      <el-col :span="4">
        <el-radio v-model="radioType" label="floor" @change="resetSeachParams">Sàn</el-radio>
        <el-radio v-model="radioType" label="industry" @change="resetSeachParams">Ngành</el-radio>
      </el-col>
      <el-col :span="4">
        <el-select v-show="radioType === 'floor'" v-model="searchParams.catID" placeholder="">
          <el-option
            v-for="item in optionsCatID"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select v-show="radioType === 'industry'" v-model="searchParams.industryID" placeholder="">
          <el-option
            v-for="item in optionsIndustryID"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-input v-model="searchParams.code" placeholder="Nhập mã CK" />
      </el-col>
      <el-col :span="2">
        <el-button type="primary" @click="getBusinessResult">Tìm kiếm</el-button>
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
        prop="INDEX"
        label="Sàn"
        align="center"
      />
      <el-table-column label="Lợi nhuận ròng" align="center">
        <el-table-column
          prop="NetProfit"
          label="Q3 2023"
          align="center"
        >
          <template slot-scope="{row}">
            <span>{{ row.NetProfit | toThousandFilter | roundTo2Digits }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="Profit_DiffPreviousTerm"
          label="+/- kỳ trước (%)"
          align="center"
        />
        <el-table-column
          prop="Profit_DiffSameTerm"
          label="+/- cùng kỳ (%)"
          align="center"
        />
        <el-table-column
          prop="Profit_Accumulated"
          label="Luỹ kế 2023"
          align="center"
        >
          <template slot-scope="{row}">
            <span>{{ row.Profit_Accumulated | toThousandFilter | roundTo2Digits }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="Profit_Percent"
          label="% KH"
          align="center"
        >
          <template slot-scope="{row}">
            <span>{{ row.Profit_Percent }}%</span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column label="EPS" align="center">
        <el-table-column
          prop="EPS"
          label="Q3 2023"
          align="center"
        />
        <el-table-column
          prop="EPS_Accumulated"
          label="Luỹ kế 4 quý"
          align="center"
        />
      </el-table-column>
      <el-table-column label="P/E" align="center">
        <el-table-column
          prop="PE"
          label="Hiện tại"
          align="center"
        />
      </el-table-column>
      <el-table-column
        prop="AuditedStatus"
        label="Trạng thái BCTC"
        align="center"
      />
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
      @current-change="getBusinessResult"
    />
  </div>
</template>

<script>
import { getBusinessResult } from '@/api/stock'

export default {
  data() {
    return {
      isLoading: false,
      radioType: 'floor',
      searchParams: {
        catID: 0,
        industryID: 0,
        code: ''
      },
      optionsCatID: [
        { label: 'Tất cả', value: 0 },
        { label: 'HOSE', value: 1 },
        { label: 'HNX', value: 2 }
      ],
      optionsIndustryID: [
        {
          value: 0,
          label: 'Tất cả'
        },
        {
          value: 100,
          label: 'Sản xuất nông nghiệp'
        },
        {
          value: 200,
          label: 'Khai khoáng'
        },
        {
          value: 300,
          label: 'Tiện ích'
        },
        {
          value: 400,
          label: 'Xây dựng và Bất động sản'
        },
        {
          value: 500,
          label: 'Sản xuất'
        },
        {
          value: 600,
          label: 'Bán buôn'
        },
        {
          value: 700,
          label: 'Bán lẻ'
        },
        {
          value: 800,
          label: 'Vận tải và kho bãi'
        },
        {
          value: 900,
          label: 'Công nghệ và thông tin'
        },
        {
          value: 1000,
          label: 'Tài chính và bảo hiểm'
        },
        {
          value: 1100,
          label: 'Thuê và cho thuê'
        },
        {
          value: 1200,
          label: 'Dịch vụ chuyên môn, khoa học và công nghệ'
        },
        {
          value: 1300,
          label: 'Quản trị doanh nghiệp'
        },
        {
          value: 1400,
          label: 'Dịch vụ hỗ trợ (hành chính, du lịch, an ninh, kiểm định…) và xử lý rác thải'
        },
        {
          value: 1500,
          label: 'Dịch vụ giáo dục'
        },
        {
          value: 1600,
          label: 'Chăm sóc sức khỏe và hoạt động trợ giúp xã hội'
        },
        {
          value: 1700,
          label: 'Nghệ thuật, vui chơi và giải trí'
        },
        {
          value: 1800,
          label: 'Dịch vụ lưu trú và ăn uống'
        },
        {
          value: 1900,
          label: 'Dịch vụ khác (ngoại trừ hành chính công)'
        },
        {
          value: 2000,
          label: 'Hành chính công'
        }
      ],
      tableData: [],
      pagination: {
        total: 0,
        page: 1,
        pageSize: 20
      }
    }
  },
  mounted() {
    this.getBusinessResult()
  },
  methods: {
    async getBusinessResult() {
      try {
        this.isLoading = true
        const response = await getBusinessResult({
          catID: this.searchParams.catID,
          industryID: this.searchParams.industryID,
          code: this.searchParams.code,
          page: this.pagination.page,
          pageSize: this.pagination.pageSize
        })
        this.tableData = response.data
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    handleSizeChange() {

    },
    resetSeachParams() {
      this.searchParams = {
        catID: 0,
        industryID: 0,
        code: ''
      }
    }
  }
}
</script>

<style>

</style>
