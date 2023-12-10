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
      />
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
        />
      </el-table-column>
      <el-table-column
        prop="date"
        label="Đồ thị"
        align="center"
      />
    </el-table>
  </div>
</template>

<script>
import { getDataMacro } from '@/api/stock'

export default {
  data() {
    return {
      isLoading: false,
      tableData: []
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
    }
  }
}
</script>
