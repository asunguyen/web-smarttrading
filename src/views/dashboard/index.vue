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
