<template>
  <el-card class="market-index">
    <el-tabs v-model="activeTab" type="card">
      <el-tab-pane label="Việt Nam" name="VIETNAM">
        <MarketIndexVietnam />
      </el-tab-pane>
      <el-tab-pane label="Thế giới" name="WORLD">
        <MarketIndexWorld />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
/* eslint-disable no-undef */
import MarketIndexVietnam from './market-index-vietnam.vue'
import MarketIndexWorld from './market-index-world.vue'

export default {
  components: {
    MarketIndexVietnam,
    MarketIndexWorld
  },
  data() {
    return {
      activeTab: 'VIETNAM'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/element-variables.scss';

.market-index {
  ::v-deep {
    .el-tabs__nav {
      width: 100%;
    }
    .el-tabs__item {
      width: 50%;
      text-align: center;
    }
  }
}
</style>
