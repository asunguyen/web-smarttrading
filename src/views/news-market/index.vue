<template>
  <div class="app-container news-market">
    <h2 class="mt-0">Tin tức thị trường</h2>
    <!-- <el-collapse v-model="activeNames">
      <div v-for="item in listNews" :key="item.ArticleID" class="news-item">
        <div class="mr-4">{{ item.PublishTimeConvertNew }}</div>
        <el-collapse-item :title="item.Title" :name="item.ArticleID">
        </el-collapse-item>
      </div>
    </el-collapse> -->
  </div>
</template>

<script>
import { getNews } from '@/api/stock'

export default {
  data() {
    return {
      activeNames: [],
      listNews: []
    }
  },
  mounted() {
    this.getNews()
  },
  methods: {
    async getNews() {
      const response = await getNews()
      this.listNews = response.data.Data
    }
  }
}
</script>

<style lang="scss" scoped>
.news-market {
  .news-item {
    display: flex;
  }
  .el-collapse-item {
    width: 100%;
  }
}
</style>

