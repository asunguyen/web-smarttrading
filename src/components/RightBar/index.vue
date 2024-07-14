<template>
  <div id="right-bar-custom">
    <div class="list-item-menu">
      <ul>
        <li @click="selectContent('watchlist')">Watch list</li>
        <li @click="selectContent('news')">News</li>
      </ul>
    </div>
    <div v-show="contentShow != ''" class="list-item-content">
      <iframe
        v-show="contentShow == 'watchlist'"
        src="rightbar.html"
        scrolling="no"
        allowtransparency="true"
        frameborder="0"
        title="Smtchart.vn watch list"
        lang="en"
      />
      <iframe
        v-show="contentShow == 'news'"
        src="news.html"
        scrolling="no"
        allowtransparency="true"
        frameborder="0"
        title="Smtchart.vn watch list"
        lang="en"
      />
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      htmlRenderWatch: '',
      contentShow: ''
    }
  },
  created() {},
  methods: {
    selectContent(value) {
      if (this.contentShow == value) {
        this.contentShow = ''
      } else {
        this.contentShow = value
      }
    }
  }
}
</script>
<style scoped>
#right-bar-custom {
  position: fixed;
  bottom: 0;
  right: 0;
  background: #000;
  height: 40px;
  width: calc(100% - 280px);
}
#right-bar-custom iframe {
  float: left;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.list-item-menu ul {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.list-item-menu ul {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.list-item-menu ul li {
  color: #fff;
  cursor: pointer;
  list-style: none;
  display: inline-block;
  padding: 5px 20px;
  box-sizing: border-box;
  height: 100%;
  line-height: 40px;
}
.list-item-content {
  position: absolute;
  width: 100%;
  height: 300px;
  bottom: 40px;
  right: 0;
}
</style>
