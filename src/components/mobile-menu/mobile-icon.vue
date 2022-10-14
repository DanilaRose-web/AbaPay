<template>
    <div class="mobile-icon" @click="$emit('onClick')">
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component
export default class MobileIconComponent extends Vue {
    appearance = '0'
}
</script>

<style lang="css" scoped>

.mobile-icon {
    width: 24px;
    height: 20px;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.mobile-icon span {
    background-color: #487afa;
    width: 24px;
    height: 2px;
    transition: all 0.2s ease;
}

.mobile-icon:hover span {
    background: #fff;
}

@media all and (max-width: 1050px) {
    .mobile-icon { display: flex; margin-left: 30px; }
}

</style>