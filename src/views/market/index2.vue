<template>
  <div class="app-container">
    <iframe
      id="frameID"
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      allowFullscreen
      frameborder="0"
      style="width: 100%; height: 100vh"
    ></iframe>
  </div>
</template>

<script>
import $ from "jquery";
import request from "@/utils/request";
export default {
  methods: {
    async test() {
      const res = await request({
        url: "http://localhost:5001/v1/vimo/get-html",
        method: "get",
        params: { url: "https://s.cafef.vn/du-lieu.chn#data"},
      });
      if (res && res.code == 200) {
        const htmlHead = res.data.split("</head>")[0].split(`<head id="Head1">`)[1];
        const htmlBody = res.data.split("</body>")[0].split(`<body style="background-color: #fff;">`)[1];
        $("#frameID").contents().find("head").html(htmlHead);
        $("#frameID").contents().find("body").html(htmlBody);
        let iframeEL = $("#frameID").contents().find("body");
        iframeEL.find("#header__clearFix").remove();
        iframeEL.find(".v4__header").remove();
        iframeEL.find(".footer").remove();
      }
    },
  },
  mounted() {
    this.test();
  },
};
</script>
