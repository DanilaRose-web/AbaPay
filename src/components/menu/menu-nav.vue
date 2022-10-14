<template>    
    <nav class="menu-nav">
        <ul class="menu-list">
            <li><r-link route="page-account">{{ 'Loyalty.MenuItemAccount' | locale }}</r-link></li>
            <li><r-link route="page-aba-card">{{ 'Loyalty.MenuItemAbaCard' | locale }}</r-link></li>
            <li><r-link route="page-rates">{{ 'Loyalty.MenuItemAbaRates' | locale }}</r-link></li>
            <li><r-link route="page-support">{{ 'Loyalty.MenuItemAbaSupport' | locale }}</r-link></li>
        </ul>
    </nav>
</template>

<script lang="ts">

import Vue from "vue";
import { Component } from 'vue-property-decorator'

@Component
export default  class HeaderMenuComponent extends Vue {

    
}
    
</script>

<style lang="css" scoped>

.menu-nav {
    margin-left: 30px;
}

.menu-list {
    display: flex;
    align-items: center;
}

.mobile-menu-nav {
    margin-left: 0;
    width: 100%;
}

.mobile-menu-nav .menu-list {
    flex-direction: column;
    align-items: center;
    width: 100%;
}

.menu-list > li:not(:first-child) {
    margin-left: 30px;
}

.mobile-menu-nav .menu-list > li:not(:first-child) {
    margin-left: 0;
    
}
.mobile-menu-nav .menu-list > li {
    margin-bottom: 30px;
}

.menu-list > li > a {
    padding: 10px;
    font-size: 16px;
    font-weight: 500;
    line-height: 0.38;
    color: #ffffff;
    position: relative;
    transition: all 0.2s ease;
}

.mobile-menu-nav .menu-list > li a {
    color: black;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
}

.menu-list > li > a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    background: #3772ce;
    transition: all 0.3s ease;
}

.menu-list > li > a:hover::after {
    width: 100%;
}

@media all and (max-width: 1250px) {
    .menu-list > li:not(:first-child) { margin-left: 15px; }
    .menu-nav { margin-left: 20px; }
    .mobile-menu-nav { margin-left: 0; width: 100%; }
}

@media all and (max-width: 1130px) {
    .menu-list > li:not(:first-child) { margin-left: 10px; }
    .menu-list > li > a { padding: 7px; font-size: 15px; }
}

@media all and (max-width: 1050px) {
    .menu-nav { display: none; }
    .mobile-menu-nav { display: flex; }
}

</style>