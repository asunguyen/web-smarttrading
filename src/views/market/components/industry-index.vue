<template>
  <div class="industry-index">
    <h2 class="mb-0">Chỉ số ngành</h2>
    <el-tabs v-model="activeTab">
      <el-tab-pane v-for="type in listType" :key="type.label" :label="type.label" :name="type.name">
        <el-row v-loading="isLoading" :gutter="20">
          <el-col
            v-for="industryIndex in listIndustryIndex"
            :key="industryIndex.Text"
            :xs="24"
            :sm="12"
            :md="8"
            :lg="6"
            :xl="4"
          >
            <div
              class="industry-index-item"
              :class="{
                'text-success': industryIndex.ChangeClose > 0,
                'text-danger': industryIndex.ChangeClose < 0,
              }"
            >
              <div class="industry-index-item__text  mb-4">{{ industryIndex.Text }}</div>
              <div class="industry-index-item__value">{{ industryIndex.Value }}%</div>
            </div>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
import { getIndustryIndex } from '@/api/stock'

export default {
  data() {
    return {
      isLoading: false,
      activeTab: '1',
      listType: [
        { label: 'Mặc định', name: '1' },
        { label: 'Giảm dần', name: '2' },
        { label: 'Tăng dần', name: '3' }
      ],
      listIndustryIndex: []
    }
  },
  watch: {
    activeTab(value) {
      this.getIndustryIndex(value)
    }
  },
  mounted() {
    this.getIndustryIndex(this.activeTab)
  },
  methods: {
    async getIndustryIndex(type) {
      try {
        this.isLoading = true
        const response = await getIndustryIndex({ type })
        this.listIndustryIndex = response.data
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/element-variables.scss';

.industry-index {
  .text-success {
    background-color: $--color-success;
  }
  .text-danger {
    background-color: $--color-danger;
  }
  &-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 160px;
    margin-bottom: 20px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;

    &__text {
      text-align: center;
    }
    &__value {
      font-size: 40px;
    }
  }
}
</style>
