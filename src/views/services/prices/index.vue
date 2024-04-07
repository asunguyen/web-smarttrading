<template>
  <div class="app-container prices">
    <el-card class="mb-4">
      <h2 class="mt-0">Bảng giá Dịch vụ Web SmartTrading</h2>
      <el-row :gutter="10">
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6"><ServicePack :months="1" :old-price="900000" :new-price="600000" /></el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6"><ServicePack :months="3" :old-price="2200000" :new-price="1600000" /></el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6"><ServicePack :months="6" :old-price="4000000" :new-price="2800000" /></el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6"><ServicePack :months="12" :old-price="7200000" :new-price="5000000" /></el-col>
      </el-row>
    </el-card>
    <el-card class="mb-4">
      <h2 class="mt-0">Phương thức thanh toán</h2>
      <div>Khách hàng chuyển khoản vào TK sau:</div>
      <ul class="mt-2 mb-0">
        <li>Ngân hàng cổ phần Kỹ thương Việt Nam - Techcombank</li>
        <li>Số Tài Khoản: 19039710045016</li>
        <li>Chủ Tài Khoản: Vũ Văn Hiếu</li>
        <li>Ghi chú: 	&lt;Số điện thoại đăng ký&gt; &lt;Gói đăng ký&gt; </li>
        <li>Ví dụ: 0908204305 Goi 3 thang</li>
      </ul>
    </el-card>
    <el-card class="mb-4">
      <h2 class="mt-0">CopyTrade theo TK Chuyên gia</h2>
      <div class="paragraph">
        Khách hàng gắn Tài khoản đi lệnh theo chuyên gia. Lệnh sẽ được Copy 1:1 theo lệnh chuyên gia và tuyệt đối không dùng lệnh MAK rất bị thiệt về giá.<br>
        Liên hệ để được tư vấn thông tin chi tiết.
      </div>
    </el-card>
    <el-card class="mb-4">
      <h2 class="mt-0">Auto Trading Bot Server</h2>
      <div class="paragraph">
        Khách hàng gắn Tài khoản đi lệnh Phái Sinh theo bot tự động trên Cloud Server. Phù hợp với các nhà đầu tư không có thời gian theo dõi bảng lệnh. Bot sẽ tự đảo vị thế khi có tín hiệu tránh tình trạng bị cháy tài khoản.<br>
        Liên hệ để được tư vấn thông tin chi tiết.
      </div>
    </el-card>
  </div>
</template>

<script>
import ServicePack from './components/ServicePack.vue'

export default {
  components: { ServicePack }
}
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
