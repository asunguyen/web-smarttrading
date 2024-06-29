<template>
  <div id="right-bar-custom"></div>
</template>
<script>
export default {
  data: function() {
    return {

    }
  },
  methods: {

  },
  mounted: function() {
    var tradingViewHtml = $("#tvWidgetContainer iframe").contents().find(".layout__area--right");

  }
};
</script>
<style scoped>
</style>