<template>
  <div class="app-container autobot-server">
    <el-card>
      <h2 class="mt-0">AutoBot Server</h2>
      <div>Dịch vụ gởi TK đi lệnh theo AutoBot Server</div>
      <h3 class="mb-2">Giới thiệu</h3>
      <div>Dịch vụ AutoBot Server là một giải pháp đầu tư Chứng Khoán Phái Sinh dành cho KH không có nhiều thời gian trực bảng điện.</div>
      <div>Hệ thống vận hành ổn định trên server và tự động thực hiện các giao dịch theo tín hiệu của Trend.</div>
      <h3 class="mb-2">Chi phí và Cách tính</h3>
      <ul class="mt-0">
        <li>Chi phí: 150,000/ngày (SALE OFF 10% chỉ còn 135,000 / ngày) (*)</li>
        <li>Gói đăng ký:
          <ul>
            <li>Gói 10 ngày: Ký quỹ 1,500,000 VNĐ</li>
            <li>Gói 20 ngày: Ký quỹ 3,000,000 VNĐ</li>
            <li>Gói 40 ngày: Ký quỹ 4,500,000 VNĐ</li>
          </ul>
        </li>
        <li>Cách thức tính phí:
          <ul>
            <li>Trước phiên (Trước 8:30): KH truy xuất vào web để chủ động bật/tắt tính năng chạy theo AutoBot.</li>
            <li>Trong phiên (8:30 - 14:45): Khi bắt đầu vào phiên, hệ thống sẽ chốt danh sách TK chạy theo AutoBot cho toàn bộ ngày giao dịch.</li>
            <li>Cuối phiên (Sau 14:45): Sau khi đóng phiên, hệ thống sẽ tự động trừ chi phí hàng ngày dựa trên danh sách đã chốt đầu phiên vào số tiền Ký quỹ.</li>
          </ul>
        </li>
      </ul>
      <div>Ghi chú: (*): ngày tính theo đơn vị ngày giao dịch không tính ngày nghỉ (Thứ Bảy, Chủ Nhật) và cả ngày nghỉ lễ. 1 tháng chỉ tính 22 ngày giao dịch.</div>
      <h3 class="mb-2">Biểu đồ tín hiệu AutoBot</h3>
      <div>Click vào link này để xem chi tiết biểu đồ Tín hiệu của AutoBot.</div>
      <h3 class="mb-2">Dữ liệu back test</h3>
      <div class="mb-2">Để tự kiểm chứng, Quý khách có thể truy xuất vào đường link Backtest này để kiểm tra và xem sổ lệnh.</div>
      <div style="width: 70%;margin: 0 auto">
        <img src="@/assets/images/backtest.png" style="width: 100%">
        <div style="text-align: center; font-size: 14px">Kết quả Backtest từ 1/1/2019 đến 31/12/2022</div>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.autobot-server {
  ul {
    li {
      line-height: 28px;
    }
  }
}
</style>
