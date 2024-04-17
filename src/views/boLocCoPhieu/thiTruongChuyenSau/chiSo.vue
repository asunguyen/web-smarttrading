<template>
  <div class="content-chiso">
    <el-row>
      <el-col :span="6">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content"></div>
      </el-col>
    </el-row>
    <el-row>
        <el-col :span="24">
            <div class="grid-content"></div>
        </el-col>
    </el-row>
  </div>
</template>
<script>
import { GetLatestIndices, GetIndexSeries } from "@/api/bolocApi";
export default {
  data: function () {
    return {
        dataDetail: {},
        dataTable: []
    };
  },
  created: function() {
    this.getListChiSo();
  }, 
  methods: {
    async getListChiSo() {
        const res = await GetIndexSeries();
        console.log(res);
    }
  }
};
</script>