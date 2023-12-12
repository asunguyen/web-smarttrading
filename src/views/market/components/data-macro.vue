<template>
  <div class="data-macro">
    <h2 class="mt-0">Dữ liệu vĩ mô</h2>
    <el-table
      v-loading="isLoading"
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        label="STT"
        type="index"
        align="center"
      />
      <el-table-column
        prop="NormName"
        label="Chỉ tiêu"
        align="center"
      >
        <template slot-scope="{row}">
          <span class="text-004370"><b>{{ row.NormName }}</b></span>
        </template>
      </el-table-column>
      <el-table-column
        prop="UnitCode"
        label="Đơn vị tính"
        align="center"
      />
      <el-table-column label="Số liệu mới nhất" align="center">
        <el-table-column
          prop="ReportTerm"
          label="Đồ thị"
          align="center"
        />
        <el-table-column
          prop="Value"
          label="Giá trị"
          align="center"
        >
          <template slot-scope="{row}">
            <span>{{ row.Value | toThousandFilter }}</span>
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="date"
        label="Đồ thị"
        align="center"
      >
        <template slot-scope="{row}">
          <span v-if="row.Chart" style="cursor: pointer" @click="showModalChart(row)">
            <svg-icon icon-class="chart" style="width: 14px; height: 14px" />
          </span>
        </template>
      </el-table-column>
    </el-table>

    <ModalChartMacro
      :dialog-visible="isShowModalChart"
      :chart="chartObject"
      :type-chart="typeChart"
      :top="top"
      @close="isShowModalChart = false"
    />
  </div>
</template>

<script>
import { getDataMacro } from '@/api/stock'
import ModalChartMacro from './modal-chart-marco.vue'

export default {
  components: {
    ModalChartMacro
  },
  data() {
    return {
      isLoading: false,
      tableData: [],
      isShowModalChart: false,
      chartObject: {},
      typeChart: 0,
      top: 0
    }
  },
  mounted() {
    this.getDataMacro()
  },
  methods: {
    async getDataMacro() {
      try {
        this.isLoading = true
        const response = await getDataMacro()
        this.tableData = response.data
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    showModalChart(row) {
      switch (row.NormID) {
        case 395:
          this.chartObject = {
            name: row.NormName,
            unit: row.UnitCode,
            type: 2,
            top: 12
          }
          break
        case 233:
          this.chartObject = {
            name: row.NormName,
            unit: row.UnitCode,
            type: 8,
            top: 10
          }
          break
        case 237:
          this.chartObject = {
            name: row.NormName,
            unit: row.UnitCode,
            type: 3,
            top: 10
          }
          break
        case 462:
          this.chartObject = {
            name: row.NormName,
            unit: row.UnitCode,
            type: 7,
            top: 12
          }
          break
        case 463:
          this.chartObject = {
            name: row.NormName,
            unit: row.UnitCode,
            type: 7,
            top: 12
          }
          break
        case 487:
          this.chartObject = {
            name: row.NormName,
            unit: row.UnitCode,
            type: 4,
            top: 10
          }
          break
        case 379:
          this.chartObject = {
            name: row.NormName,
            unit: row.UnitCode,
            type: 6,
            top: 12
          }
          break
        case 392:
          this.chartObject = {
            name: row.NormName,
            unit: row.UnitCode,
            type: 51,
            top: 36
          }
          break
        case 499:
          this.chartObject = {
            name: row.NormName,
            unit: row.UnitCode,
            type: 11,
            top: 40
          }
          break
        case 353:
          this.chartObject = {
            name: row.NormName,
            unit: row.UnitCode,
            type: 1,
            top: 13
          }
          break
        case 245:
          this.chartObject = {
            name: row.NormName,
            unit: row.UnitCode,
            type: 9,
            top: 11
          }
          break
      }
      this.isShowModalChart = true
    }
  }
}
</script>
