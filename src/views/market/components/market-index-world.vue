<template>
  <div class="market-index-world">
    <el-tabs v-model="activeTab" class="tab-world">
      <el-tab-pane
        v-for="item in listContinents"
        :key="item.label"
        :label="item.label"
        :name="item.name"
      >
        <el-table
          v-loading="isLoading"
          :data="tableData"
          style="width: 100%"
          class="mt-4"
        >
          <el-table-column label="STT" type="index" align="center" width="50" />
          <el-table-column
            label="Chỉ số"
            prop="index"
          >
            <template slot-scope="{row}">
              <span class="text-004370"><b>{{ row.index }}</b></span>
            </template>
          </el-table-column>
          <el-table-column
            label="Điểm"
            prop="last"
          >
            <template slot-scope="{row}">
              <span
                :class="{
                  'text-success': row.change > 0,
                  'text-danger': row.change < 0,
                  'text-warning': row.change === 0
                }"
              >
                {{ row.last | toThousandFilter }}
              </span>
            </template>
          </el-table-column>
          <el-table-column
            label="Thay đổi"
          >
            <template slot-scope="{row}">
              <span
                :class="{
                  'text-success': row.change > 0,
                  'text-danger': row.change < 0,
                  'text-warning': row.change === 0
                }"
              >
                {{ row.change > 0 ? '+' : '' }}{{ row.change }} ({{ row.changePercent > 0 ? '+' : '' }}{{ row.changePercent }}%)
              </span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getIndexWorld } from '@/api/stock'

export default {
  data() {
    return {
      activeTab: '0',
      listContinents: [
        { label: 'Tất cả', name: '0' },
        { label: 'Châu Á', name: '1' },
        { label: 'Châu Âu', name: '2' },
        { label: 'Hoa Kỳ', name: '3' }
      ],
      isLoading: false,
      tableData: []
    }
  },
  watch: {
    activeTab(value) {
      this.getIndexWorld(value)
    }
  },
  mounted() {
    this.getIndexWorld(this.activeTab)
  },
  methods: {
    async getIndexWorld(type) {
      try {
        this.isLoading = true
        let response
        type === '0' ? response = await getIndexWorld({ type: '' }) : response = await getIndexWorld({ type })
        this.tableData = response.data.slice(0, 10)
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

.market-index-world {
  .text-success {
    color: $--color-success;
  }
  .text-danger {
    color: $--color-danger;
  }
  .text-warning {
    color: $--color-warning;
  }
  .tab-world {
    ::v-deep {
      .el-tabs__nav {
        width: 100%;
      }
      .el-tabs__item {
        width: 25%;
        text-align: center;
      }
    }
  }
}
</style>
