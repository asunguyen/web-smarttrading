<template>
  <div>
    <el-button
      class="custom-indicator-btn"
      type="text"
      @click="dialogVisible = true"
      >SMT Indicator</el-button
    >

    <el-dialog
      title="SMT Custom Indicator"
      :visible.sync="dialogVisible"
      width="600px"
    >
      <el-row :gutter="24">
        <el-col :span="16"
          ><div class="grid-content">
            <el-input
              placeholder="Please input"
              v-model="inputSearchIndicator"
              clearable
            >
            </el-input></div
        ></el-col>
        <el-col :span="8"
          ><div class="grid-content">
            <el-button type="primary" @click="getListIndi()">Search</el-button>
          </div></el-col
        >
      </el-row>
      <el-row>
        <el-table
          :data="tableData"
          style="width: 100%"
          height="350"
          @current-change="handleCurrentChange"
        >
          <el-table-column prop="author.username" label="Author" width="180">
          </el-table-column>
          <el-table-column prop="name" label="Name" width="320">
          </el-table-column>
        </el-table>
      </el-row>
    </el-dialog>
  </div>
</template>
<script>
import { getListIndi, getDetailIndi } from "@/api/bolocApi";
export default {
  data: function () {
    return {
      currentRow: null,
      tableData: [],
      inputSearchIndicator: "",
      dialogVisible: false,
    };
  },
  methods: {
    async handleCurrentChange(val) {
      this.currentRow = val;
      this.dialogVisible = false;
      const res = await getDetailIndi({ idIndi: val.id });
      this.$emit("dataIndi", res.data);
    },
    async getListIndi() {
      const res = await getListIndi({ search: this.inputSearchIndicator });
      console.log("res:: ", res);
      this.tableData = res.data;
    },
    handleClose(done) {
      this.$confirm("Are you sure to close this dialog?")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
};
</script>
<style scoped>
.custom-indicator-btn {
  position: fixed;
  z-index: 99999999999;
  top: 50px;
  right: 265px;
}
</style>