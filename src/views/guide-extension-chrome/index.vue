<template>
  <div class="app-container ext-chrome-guide">
    <el-card class="mb-4">
      <h2 class="mt-0">Giới thiệu</h2>
      <div class="paragraph">
        <b>Smarttrading VPS Extension</b> là công cụ mở rộng của trình duyệt (Chrome,
        Microsoft Edge,...) hỗ trợ hiển thị biểu đồ của thuật toán và cung cấp
        các chức năng để liên kết giữa thuật toán và công cụ giao dịch của VSP
        SmartPro/SmartEasy.
      </div>
    </el-card>
    <el-card class="mb-4">
      <h2 class="mt-0">Cài đặt</h2>
      <div class="paragraph">
        Bấm vào link <a href="@/assets/zip/smarttrading.zip" download class="link-download">Tải xuống</a> để download file zip về máy tính.<br>
        Dùng Windows Explorer để bung file zip ra thành thư mục trên máy tính.<br>
        <img src="@/assets/images/ext-guide-1.png" class="mt-2 mb-2"><br>
        Mở trình duyệt (Chrome), sau đó chọn Menu => Công cụ khác => Tiện ích mở rộng<br>
        <img src="@/assets/images/ext-guide-2.png" class="mt-2 mb-2"><br>
        Bật nút "Chế độ cho nhà phát triển" ("Developer mode"), bạn sẽ thấy giao diện như hình sau.<br>
        <img src="@/assets/images/ext-guide-3.png" class="mt-2 mb-2"><br>
        Nhấn vào nút "Tải tiện ích đã giải nén" ("Load unpacked") và chọn thư mục vừa giải nén là hoàn tất.<br>
        <img src="@/assets/images/ext-guide-4.png" class="mt-2">
      </div>
    </el-card>
    <el-card class="mb-4">
      <h2 class="mt-0">Lần đầu làm chuyện ấy</h2>
      <div class="paragraph">
        Mở trình duyệt và đăng nhập vào ứng dụng VPS SmartPro/SmartEasy. Sau đó bạn sẽ thấy như hình sau<br>
        <img src="@/assets/images/ext-guide-5.png" class="mt-2 mb-2"><br>
        Nhập số điện thoại/email mà bạn đã đăng ký ở smarttrading.vn.<br>
        Nếu chưa có bấm vào link Đăng ký để tạo tài khoản mới, sau đó quay lại và đăng nhập.<br>
        <img src="@/assets/images/ext-guide-6.png" class="mt-2 mb-2"><br>
        Đăng nhập thành công, bạn sẽ nhìn thấy biểu đồ thuật toán như hình sau.<br>
        <img src="@/assets/images/ext-guide-7.png" class="mt-2">
      </div>
    </el-card>
    <el-card>
      <h2 class="mt-0">Hỗ trợ</h2>
      <div>Zalo Hỗ trợ Kỹ thuật: Group BOT</div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.ext-chrome-guide {
  .paragraph {
    line-height: 22px;
  }
  .link-download {
    color: #1890ff;
    text-decoration: underline;
  }
}
</style>
