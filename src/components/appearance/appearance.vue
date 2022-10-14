<template>
    <div class="appearance">
        <slot></slot>  
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class AppearanceComponent extends Vue {
    
}
</script>

<style lang="css">

.appearance {
    max-width: 180px;
    width: 100%;
    border-radius: 8px;
    background: white;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
}

.appearance.large {
    margin: 0 auto;
    margin-bottom: 90px;
    max-width: 400px;
    background-color: #e1e1e1;
}
.appearance.large .item {
    max-width: 200px;
}
.appearance.large .item label {
    min-height: 60px;
    font-size: 18px;
}

@media all and (max-width: 1130px) {
    .appearance { max-width: 160px; }
}
@media all and (max-width: 1050px) {
    .appearance { max-width: 180px; }
}

@media all and (max-width: 500px) {
    .appearance.large .item label { font-size: calc((100vw - 280px)/(500 - 280) * (18 - 14) + 14px); }
}
@media all and (max-width: 380px) {
    .appearance.large .item label { min-height: 45px; }
}
@media all and (max-width: 350px) {
    .appearance.large { flex-direction: column; }
    .appearance.large .item { max-width: 100%; }
}
@media all and (max-width: 320px) {
    .appearance.small .item label { font-size: 12px; }
}
</style>