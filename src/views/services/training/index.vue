<template>
  <div class="app-container training">
    <el-card id="training" class="mb-4">
      <h2 class="mt-0">Đào tạo chứng khoán từ cơ bản đến nâng cao</h2>
      <div class="paragraph">SmartTrading.vn cung cấp các khóa học cả Online và Offline từ cơ bản đến nâng cao</div>
      <ul class="mt-2 mb-0">
        <li>Chứng khoán cơ bản dành cho F0</li>
        <li>Phương pháp giao dịch Theo Trend</li>
        <li>Phương pháp giao dịch Price Action</li>
        <li>Quản lý rủi ro và cơ hội</li>
      </ul>
    </el-card>
    <el-card class="mb-4">
      <h2 class="mt-0">Hỗ trợ xây dựng đội nhóm</h2>
      <div class="paragraph">
        Bạn có định hướng muốn trở thành chuyên gia, người dẫn dắt đội nhóm trong quá trình chinh phục thử thách ở thị trường tài chính nhiều biến động?<br>
        SmartTrading.vn có đầy đủ các công cụ và những chuyên gia giàu kinh nghiệm bao quát tất cả các lĩnh vực từ marketing, quản lý, kỹ thuật,... để hỗ trợ cho bạn một cách tốt nhất đạt được mục tiêu của mình.<br>
        SmartTrading.vn luôn luôn chào đón các bạn Cộng tác viên có cùng yêu thích và đam mê trong lĩnh vực Chứng Khoán với nhiều chính sách ưu đãi và hấp dẫn.
      </div>
    </el-card>
    <el-card id="advice" class="mb-4">
      <h2 class="mt-0">Tư vấn đầu tư</h2>
      <div class="paragraph">Bạn là nhà đầu tư mới tham gia thị trường và muốn tìm ra những cổ phiếu tiềm năng?<br>
        Hay bạn là nhà đầu tư lâu năm muốn tìm một người đồng hành để trao đổi về các phương pháp đầu tư hiệu quả, hỗ trợ tìm thời điểm mua/bán thích hợp?<br>
        Với Dịch vụ Tư vấn đầu tư của SmartTrading.vn, chuyên viên tư vấn của chúng tôi sẽ đồng hành cùng bạn trong việc đầu tư chứng khoán và quản lý, phân bổ tài sản bao gồm:
      </div>
      <ul class="mt-2 mb-0">
        <li>Tư vấn xây dựng và quản lý danh mục đầu tư.</li>
        <li>Thiết lập và tuân thủ chiến lược đầu tư.</li>
        <li>Cung cấp kịp thời những thông tin liên quan đến các cổ phiếu trong danh mục.</li>
        <li>Gửi đến Quý khách các báo cáo vĩ mô, báo cáo ngành, báo cáo doanh nghiệp mới nhất.</li>
        <li>Khuyến nghị mua, bán chứng khoán và quản lý tài sản một cách hiệu quả.</li>
        <li>Đội ngũ chuyên viên tư vấn được đào tạo bài bản, dày dạn kinh nghiệm và tuân thủ nghiêm túc đạo đức nghề nghiệp sẽ đưa ra những gợi ý đầu tư quý báu giúp bạn nắm bắt kịp thời các cơ hội và gia tăng tài sản của mình.</li>
      </ul>
    </el-card>
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.$route.fullPath.includes('training')) {
      document.getElementById('training').scrollIntoView()
    } else if (this.$route.fullPath.includes('advice')) {
      document.getElementById('advice').scrollIntoView()
    }
  }
}
</script>

<style lang="scss" scoped>
.training {
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
