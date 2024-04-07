<template>
    <div class="app-container prices">
      
    </div>
  </template>
  
  <script>
  
  export default {
    data: function() {
        return {

        }
    },
    mounted: function() {
        console.log(this.$router);
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .prices {
    .paragraph {
      line-height: 22px;
    }
    ul {
      li {
        line-height: 28px;
      }
    }
  }
  </style>
  