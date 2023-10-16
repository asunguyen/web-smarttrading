<template>
  <div class="dashboard-container">
    <!-- <component :is="currentRole" /> -->
    <TVChartContainer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TVChartContainer from '@/components/TVChartContainer/index.vue'
// import adminDashboard from './admin'
// import editorDashboard from './editor'

export default {
  name: 'Dashboard',
  components: {
    TVChartContainer
  },
  // components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard',
      tradingViewOptions: {
        width: '100%',
        height: '100%',
        symbol: 'NASDAQ:AAPL',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: 1,
        locale: 'vi_VN',
        enable_publishing: true,
        withdateranges: true,
        range: '1D',
        hide_side_toolbar: false,
        allow_symbol_change: true,
        details: true,
        hotlist: true,
        calendar: true,
        show_popup_button: true,
        popup_width: '1000',
        popup_height: '650'
      }
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>
