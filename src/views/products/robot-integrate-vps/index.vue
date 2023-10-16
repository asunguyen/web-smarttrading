<template>
  <div class="app-container">
    <el-card class="mb-4">
      <h2 id="robot" class="mt-0">Robot tích hợp VPS SmartPro</h2>
      <div class="mb-2">
        Công cụ tích hợp robot SmartTrading vào VPS SmartPro/SmartEasy đế hỗ trợ
        đi lệnh chủ động cho nhà đầu tư.
      </div>
      <div class="mb-2">Click vào hình sau để xem chi tiết về tính năng và cài đặt</div>
      <div>
        <router-link to="/ext-chrome-guide">
          <img src="@/assets/images/vpsext.png" style="width: 100%">
        </router-link>
      </div>
    </el-card>
    <el-card class="mb-4">
      <h2 id="copytrade" class="mt-0">CopyTrade</h2>
      <div class="mb-2">
        <span style="font-weight: bold">Smart CopyTrade</span> là công cụ mở rộng của trình duyện (Chrome, Microsoft
        Edge, ...) hỗ trợ các bạn Broker thực hiện giao dịch nhiều tài khoản
        cùng lúc một cách chủ động trên nền tảng VPS.
      </div>
      <div class="mb-2">Click vào hình sau để xem chi tiết về tính năng và cài đặt</div>
      <div>
        <router-link to="/copytrade-ext-guide">
          <img src="@/assets/images/copytrade.png" style="width: 100%">
        </router-link>
      </div>
    </el-card>
    <el-card>
      <h2 class="mt-0">Bộ lọc cổ phiếu</h2>
      <div>Robot tầm soát tất cả các mã chứng khoán trên thị trường cơ sở và xuất ra tín hiệu Mua/Bán.</div>
    </el-card>
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.$route.fullPath.includes('robot')) {
      document.getElementById('robot').scrollIntoView()
    } else if (this.$route.fullPath.includes('copytrade')) {
      document.getElementById('copytrade').scrollIntoView()
    }
  }
}
</script>
