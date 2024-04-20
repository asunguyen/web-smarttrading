<template>
    <div>
        <iframe id="chart_dashboard" class="iframe-contain" src="https://fiintrade.vn/" scrolling="no">
            
        </iframe>
    </div>
</template>
<script>
//lamcao2205@gmail.com
//Nhatlam01
import {GetHtml} from "@/api/bolocApi";
export default {
    data: function() {
        return {

        }
    }, 
    methods: {
        async checkFrame() {
        }
    },
    mounted: function() {
        this.checkFrame();
    }
}
</script>
<style scoped>
#chart_dashboard{
    width: 100%;
    height: 100vh;
    margin-top: -60px;
}
</style>