<template>
    <div class="features-block">
        <div class="row features-row">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">

import Vue from "vue";
import { Component } from 'vue-property-decorator'

@Component
export default class FeaturesBlockComponent extends Vue {

}
</script>

<style lang="less">

.features-col {
    margin-bottom: 88px;
    display: flex;
}

.features-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.features-img {
    margin-bottom: 31px;
    min-height: 71px;
    max-width: 131px;
    display: flex;
    align-items: center;
}

.features-img img {
    object-fit: contain;
    object-position: center;
}

.features-title {
    margin-bottom: 23px;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    line-height: 100%;
    color: #3772ce;
    // flex: 1 1 auto;
}

.features-text {
    font-size: 18px;
    font-weight: 500;
    color: white;
    line-height: 120%;
    text-align: center;
    max-width: 300px;
}

@media all and (max-width: 360px) {
    .features-img { margin-bottom: 20px; }
}
</style>