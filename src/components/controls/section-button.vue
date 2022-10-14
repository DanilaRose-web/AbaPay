<template>    
    <button class="section-button" @click="$emit('hideCookies')"><span><slot></slot></span></button>
</template>

<script lang="ts">

    import Vue from "vue";
    import { Component } from 'vue-property-decorator'

    @Component
    export default  class SectionButtonComponent extends Vue {

        
    }
    
</script>

<style lang="css" scoped>

.section-button {
    padding: 21px 39px;
    border-radius: 10px;
    background: #3772ce;
    font-size: 18px;
    font-weight: 600;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
}

.section-button:hover {
    background-color: #e1e1e1;
    background: #163461;
    color: white;
}

.section-button span {
    white-space: nowrap;
}

.light-btn {
    background-color: #e1e1e1;
    color: black;
}
.light-btn:hover {
    background: #163461;
    color: white;
}
.small-btn {
    padding: 11px 29px;
    width: 100%;
    min-height: 40px;
    font-size: 14px;
}

.mg-right {
    margin-right: 12px;
}

.btn-center {
    margin: 0 auto;
}

.media-min-768 {
    display: none;
}
.media-max-768 {
    display: flex;
}

.mt-60 {
    margin-top: 60px;
}

.cookies-btn {
    max-width: 100px;
}


@media all and (max-width: 1130px) {
    .header-btn { padding: 7px 24px; min-height: 34px; }
    .mobile-small-btn { min-height: 40px; padding: 11px 29px; }
}
@media all and (max-width: 768px) {
    .media-min-768 {
        display: flex;
    }
    .media-max-768 {
        display: none;
    }
}
@media all and (max-width: 650px) {
    .main-btn { margin: 0 auto; display: flex; }
}



</style>