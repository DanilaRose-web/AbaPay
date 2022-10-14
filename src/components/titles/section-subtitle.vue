<template>    
    <h3 class="section-subtitle">
        <slot></slot>
    </h3>
</template>

<script lang="ts">

    import Vue from "vue";
    import { Component } from 'vue-property-decorator'

    @Component
    export default  class SectionSubtitleComponent extends Vue {

        
    }
    
</script>

<style lang="css" scoped>

.section-subtitle {
    margin: 0 auto;
    margin-bottom: 40px;
    font-size: 18px;
    font-weight: 500;
    line-height: 135%;
    color: #949ead;
    text-align: center;
    max-width: 700px;
}

.ta-left {
    text-align: left;
}

.large-subtitle {
    max-width: 100%;
}



.mb {
    margin-bottom: 88px;
}

@media all and (max-width: 768px) {
    .ta-center-768 { text-align: center; }
}
@media all and (max-width: 650px) {
    .center-650 { text-align: center; }
}

@media all and (max-width: 480px) {
    .section-subtitle { font-size: calc((100vw - 280px)/(480 - 280) * (18 - 16) + 16px); }
}



</style>