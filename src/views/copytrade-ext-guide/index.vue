<template>
  <div class="app-container copytrade-ext-guide">
    <el-card class="mb-4">
      <h2 class="mt-0">Giới thiệu</h2>
      <div class="paragraph">
        <b>Smart CopyTrade</b> là công cụ mở rộng của trình duyệt (Chrome, Microsoft Edge,...) hỗ trợ các bạn Broker thực hiện giao dịch nhiều tài khoản cùng lúc một cách chủ động trên nền tảng VPS.
      </div>
    </el-card>
    <el-card class="mb-4">
      <h2 class="mt-0">Cài đặt</h2>
      <div class="paragraph">
        Bấm vào link <a href="@/assets/zip/copytrade.zip" download class="link-download">Tải xuống</a> để download file zip về máy tính.<br>
        Dùng Windows Explorer để bung file zip ra thành thư mục trên máy tính.<br>
        <img src="@/assets/images/copytrade-ext-guide-1.png" class="mt-2 mb-2"><br>
        Mở trình duyệt (Chrome), sau đó chọn Menu => Công cụ khác => Tiện ích mở rộng<br>
        <img src="@/assets/images/copytrade-ext-guide-2.png" class="mt-2 mb-2"><br>
        Bật nút "Chế độ cho nhà phát triển" ("Developer mode"), bạn sẽ thấy giao diện như hình sau.<br>
        <img src="@/assets/images/copytrade-ext-guide-3.png" class="mt-2 mb-2"><br>
        Nhấn vào nút "Tải tiện ích đã giải nén" ("Load unpacked") và chọn thư mục vừa giải nén là hoàn tất.<br>
        <img src="@/assets/images/copytrade-ext-guide-4.png" class="mt-2">
      </div>
    </el-card>
    <el-card class="mb-4">
      <h2 class="mt-0">Lần đầu làm chuyện ấy</h2>
      <div class="paragraph">
        Mở trình duyệt và đăng nhập vào ứng dụng VPS SmartPro/SmartEasy. Sau đó bạn sẽ thấy như hình sau<br>
        <img src="@/assets/images/copytrade-ext-guide-5.png" class="mt-2 mb-2"><br>
        Liên hệ <a href="https://zalo.me/g/pnqrit726" target="_blank" class="link-download">Group Zalo</a> để lấy mã kích hoạt
      </div>
    </el-card>
    <el-card class="mb-4">
      <h2 class="mt-0">Thêm tài khoản</h2>
      <div class="paragraph">
        Chức năng này dùng để thêm mới tài khoản vào danh sách CopyTrade. Nhấn nút "Thêm Tài Khoản" và nhập vào tên tài khoản/mật khẩu. Sau đó nhấn nút "Thêm TK", hệ thống sẽ kiểm tra tên đăng nhập và mật khẩu. Nếu hợp lệ, tài khoản sẽ được thêm vào danh sách CopyTrade.<br>
        <img src="@/assets/images/copytrade-ext-guide-6.png" class="mt-2 mb-2">
      </div>
    </el-card>
    <el-card class="mb-4">
      <h2 class="mt-0">Xoá tài khoản</h2>
      <div class="paragraph">
        Chức năng này dùng để xóa tài khoản được chọn khỏi danh sách CopyTrade.<br>
        <img src="@/assets/images/copytrade-ext-guide-7.png" class="mt-2 mb-2">
      </div>
    </el-card>
    <el-card class="mb-4">
      <h2 class="mt-0">Hủy tất cả lệnh</h2>
      <div class="paragraph">
        Chức năng này dùng để hủy nhanh tất cả Lệnh thường và Lệnh điều kiện cho các TK được chọn để tránh tình trạng lệnh rác phát sinh do các lệnh điều kiện.<br>
        <img src="@/assets/images/copytrade-ext-guide-8.png" class="mt-2 mb-2">
      </div>
    </el-card>
    <el-card class="mb-4">
      <h2 class="mt-0">Đóng vị thế</h2>
      <div class="paragraph">
        Chức năng này dùng để đóng nhanh vị thế của tất cả các tài khoản được chọn.<br>
        <img src="@/assets/images/copytrade-ext-guide-9.png" class="mt-2">
      </div>
    </el-card>
    <el-card>
      <h2 class="mt-0">Hỗ trợ</h2>
      <div>Zalo Hỗ trợ Kỹ thuật: <a href="https://zalo.me/g/pnqrit726" target="_blank" class="link-download">Group Zalo</a></div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.copytrade-ext-guide {
  .paragraph {
    line-height: 22px;
  }
  .link-download {
    color: #1890ff;
    text-decoration: underline;
  }
}
</style>
