<template>
  <el-card>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Chỉ Số" name="chiso">
        <ChiSo></ChiSo>
      </el-tab-pane>
      <el-tab-pane label="Các thị trường" name="cacthitruong"
        ><!--content các thị trường--></el-tab-pane
      >
      <el-tab-pane label="Định Giá" name="dinhgia"
        >Content định giá</el-tab-pane
      >
      <el-tab-pane label="Thanh khoản" name="thanhkhoan"
        >content thanh khoản</el-tab-pane
      >
      <el-tab-pane label="Biến động" name="biendong"
        >content biến động</el-tab-pane
      >
    </el-tabs>
  </el-card>
</template>
<script>
import ChiSo from "./chiSo.vue";
export default {
  components: {
    ChiSo,
  },
  data() {
    return {
      activeName: "chiso",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
