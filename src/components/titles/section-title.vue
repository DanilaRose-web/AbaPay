<template>    
    <h2 class="section-title">
        <slot></slot>
    </h2>
</template>

<script lang="ts">

    import Vue from "vue";
    import { Component } from 'vue-property-decorator'

    @Component
    export default  class SectionSubtitleComponent extends Vue {
        
    }
    
</script>

<style lang="css" scoped>

.section-title {
    margin: 0 auto;
    margin-bottom: 30px;
    font-size: 60px;
    font-weight: 400;
    text-align: center;
    color: #ffffff;
    max-width: 700px;
}

.medium-title {
    font-size: 38px;
    line-height: 120%;
    font-weight: 500;
}
.small-title {
    font-size: 28px;
    line-height: 120%;
    font-weight: 500;
}
.very-small-title {
    font-size: 20px;
    line-height: 120%;
    font-weight: 600;
}

.light-theme {
    color: black;
}
.dark-theme {
    color: white;
}


.ta-left {
    text-align: left;
}

@media all and (max-width: 1000px) {
    .section-title.ta-left { font-size: calc((100vw - 768px)/(1000 - 768) * (60 - 48) + 48px); }
}
@media all and (max-width: 768px) {
    .section-title.ta-left { font-size: 60px; }
    .ta-center-768 { text-align: center; }
}

@media all and (max-width: 540px) {
    .section-title, .section-title.ta-left { font-size: calc((100vw - 375px)/(540 - 375) * (60 - 35) + 35px); }
    .small-title { font-size: 28px }
    .medium-title { font-size: 38px; }
    .very-small-title { font-size: 20px; }
}
@media all and (max-width: 400px) {
    .section-title.ta-left { text-align: center; }
}
@media all and (max-width: 375px) {
    .section-title, .section-title.ta-left { font-size: calc((100vw - 280px)/(375 - 280) * (35 - 33) + 33px); }
    .small-title { font-size: 28px }
    .medium-title { font-size: 38px; }
    .very-small-title { font-size: 20px; }
}

 

</style>