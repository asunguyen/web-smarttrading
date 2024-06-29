<template>
  <div id="right-bar-custom" />
</template>
<script>
export default {
  data: function() {
    return {

    }
  },
  mounted: function() {
    var tradingViewHtml = $('#tvWidgetContainer iframe').contents().find('.layout__area--right')
  },
  methods: {

  }
}
</script>
<style scoped>
</style>
