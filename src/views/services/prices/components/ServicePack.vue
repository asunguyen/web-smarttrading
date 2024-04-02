<template>
  <el-card class="service-pack">
    <h2 class="service-pack__title mt-2">Gói {{ packName }}</h2>
    <div class="service-pack__price mb-4">
      <span class="service-pack__price--old">{{ oldPrice | toThousandFilter }}</span>
      <span> / </span>
      <span class="service-pack__price--new">{{ newPrice | toThousandFilter }}</span>
    </div>
    <div class="service-pack__include">Bao gồm:</div>
    <ul class="service-pack__content">
      <li>Dữ liệu chứng khoán thời gian thực</li>
      <li>Biểu đồ cộng đồng</li>
      <li>Biểu đồ kỹ thuật Robot Phái sinh</li>
      <li>Biểu đồ kỹ thuật Robot Cơ sở</li>
      <li>Bộ lọc tín hiệu Mua/Bán Cơ sở</li>
      <li>Công cụ giả lập Phái sinh 24/24</li>
      <li>Không quảng cáo</li>
      <li>Không giới hạn số lượng chỉ báo trên Biểu đồ</li>
      <li>Tích hợp Robot Phái Sinh vào SmartOnce đi lệnh tự động</li>
      <div class="text-center w-100 mt-3"><button class="btn btn-thanhtoan">Thanh toán</button></div>
    </ul>
  </el-card>
</template>

<script>
export default {
  props: {
    months: {
      type: Number,
      required: true
    },
    oldPrice: {
      type: Number,
      required: true
    },
    newPrice: {
      type: Number,
      required: true
    }
  },
  computed: {
    packName() {
      if (this.months >= 12 && this.months % 12 === 0) {
        return `${this.months / 12} năm (360 ngày)`
      }
      return `${this.months} tháng (${this.months*30} ngày)`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/element-variables.scss';

.service-pack {
  display: flex;
  justify-content: center;
  &__title {
    text-align: center;
  }
  &__price {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    &--old {
      text-decoration: line-through;
      color: $--color-danger;
    }
    &--new {
      color: $--color-success;
    }
  }
  &__include {
    margin-left: 22px;
    color: gray;
  }
  &__content {
    li {
      line-height: 28px;
    }
  }
  .btn-thanhtoan{
    height: 35px;
    margin-left: -30px;
    background: #256ff3;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    padding: 0 10px;
    cursor: pointer;
  }
}
</style>
