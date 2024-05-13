<template>
  <div class="app-container prices"></div>
</template>
  
  <script>
import { apiThanhtoanSS } from "@/api/thanhtoan";
export default {
  data: function () {
    return {};
  },
  mounted: async function () {
    let queryurl = this.$router.history.current.query;
    if (queryurl.vnp_ResponseCode && queryurl.vnp_ResponseCode == "00") {
      const res = await apiThanhtoanSS({
        id: queryurl.vnp_TxnRef,
      });
    } 
    this.$router.push({"path": "/"})
  },
};
</script>
  
  <style lang="scss" scoped>
.prices {
  .paragraph {
    line-height: 22px;
  }
  ul {
    li {
      line-height: 28px;
    }
  }
}
</style>
  