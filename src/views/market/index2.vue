<template>
  <div class="app-container">
    <iframe id="frameID" src="https://s.cafef.vn/du-lieu.chn#data" style="width: 100%; height: 100vh" />
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  mounted() {
    $(document).ready(function() {
      const iframe = document.getElementById('frameID').contentWindow
      console.log(iframe)
      iframe.document.querySelector('body').style.backgroundColor = 'blue'
    })

    // $(document).ready(function() {
    //   setTimeout(function() {
    //     $('#frameID').load(function() {
    //       $('#frameID').contents().find('body').html('Hey, i`ve changed content of <body>! Yay!!!')
    //     })
    //   }, 300)
    // })

    // $(document).ready(function() {
    //   setTimeout(
    //     function() {
    //       $('#frameID').contents().find('#header__clearFix').addClass('asdasd')
    //     },
    //     300
    //   )
    // })
  }
}
</script>
