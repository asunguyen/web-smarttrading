<template>
  <div class="app-container">
    <h2 class="mt-0">Quản lý nhân viên</h2>
    <el-table
      v-loading="isLoading"
      :data="listEmployee"
      border
      style="width: 100%"
      class="mb-3"
    >
      <el-table-column label="STT" type="index" align="center" width="80" />
      <el-table-column label="Tên người dùng" prop="username" align="center" />
      <el-table-column label="Email" prop="email" align="center" />
      <el-table-column label="Số điện thoại" prop="phone" align="center" />
      <el-table-column label="Ngày tạo" prop="createdAt" align="center" />
      <el-table-column label="Ngày hết hạn" prop="expired" align="center" />
      <el-table-column label="Vai trò" align="center" />
    </el-table>
    <el-pagination
      :total="pagination.total"
      :current-page.sync="pagination.page"
      :page-size.sync="pagination.pageSize"
      :page-sizes="[10, 20, 30, 50]"
      layout="total, sizes, prev, pager, next, jumper"
      background
      hide-on-single-page
      @size-change="handleSizeChange"
      @current-change="getListEmployee"
    />
  </div>
</template>

<script>
import { getListEmployee } from '@/api/user'

export default {
  data() {
    return {
      isLoading: false,
      listEmployee: [],
      pagination: {
        total: 0,
        page: 1,
        pageSize: 10
      }
    }
  },
  created() {
    this.getListEmployee()
  },
  methods: {
    async getListEmployee() {
      try {
        this.isLoading = true
        const response = await getListEmployee({
          page: this.pagination.page,
          pageSize: this.pagination.pageSize
        })
        if (response.code === 200) {
          this.listEmployee = response.data
          this.pagination.total = response.totalItem
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    handleSizeChange() {
      this.pagination.page = 1
      this.getListEmployee()
    }
  }
}
</script>
