<template>
  <div class="app-container">
    <h2 class="mt-0">Quản lý nhân viên</h2>
    <el-table
      v-loading="isLoading"
      :data="listEmployee"
      border
      style="width: 100%"
    >
      <el-table-column label="STT" type="index" align="center" width="80" />
      <el-table-column label="Tên người dùng" prop="username" align="center" />
      <el-table-column label="Email" prop="email" align="center" />
      <el-table-column label="Số điện thoại" prop="phone" align="center" />
      <el-table-column label="Ngày tạo" prop="createdAt" align="center" />
      <el-table-column label="Ngày hết hạn" prop="expired" align="center" />
      <el-table-column label="Vai trò" align="center" />
    </el-table>
    <pagination
      :hidden="pagination.total === 0"
      :total="pagination.total"
      :page.sync="pagination.page"
      :limit.sync="pagination.limit"
    />
  </div>
</template>

<script>
import { getListEmployee } from '@/api/user'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
  },
  data() {
    return {
      isLoading: false,
      listEmployee: [],
      pagination: {
        total: 0,
        page: 1,
        limit: 10
      }
    }
  },
  created() {
    this.getListEmployee()
  },
  methods: {
    async getListEmployee() {
      this.isLoading = true
      const response = await getListEmployee()
      if (response.code === 200) {
        this.listEmployee = response.data
      }
      this.isLoading = false
    }
  }
}
</script>
