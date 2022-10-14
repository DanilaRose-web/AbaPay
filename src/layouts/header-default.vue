<template>    
    <header>
        <div class="container-fluid header-container">
            <r-link route="page-home" class="logo-header">
                <picture>
                    <source srcset="/assets/img/logo-footer.svg" media="(max-width: 450px)">
                    <img src="/assets/img/logo/ab-apay-logo@3x.png" alt="Logo">
                </picture>
            </r-link>
            

            <appearance class="small">
                <ui-radio 
                    :id="'business'"
                    :label="$locale.getTranslate('Loyalty.TypeThemeBusiness')"
                    :data="'0'"
                    v-model="appearance"
                />

                <ui-radio 
                    :id="'personal'"
                    :label="$locale.getTranslate('Loyalty.TypeThemePersonal')"
                    :data="'1'"
                    v-model="appearance"
                /> 
            </appearance>

            <menu-nav></menu-nav>

            
            
            <div class="nav-group">
                <languages></languages>
                <!-- <ui-dropdown :items="languages" ></ui-dropdown> -->
                <section-button class="small-btn light-btn mg-right header-btn">{{ 'Loyalty.SignIn' | locale }}</section-button>
                <section-button class="small-btn header-btn">{{ 'Loyalty.SignUp' | locale }}</section-button>
            </div>

            <mobile-icon @onClick="$emit('onClick')"></mobile-icon>
        </div>
       
    </header>
</template>

<script lang="ts">

    import Vue from "vue";
    import { Component, Prop, Watch } from 'vue-property-decorator'
    import ListViewItem from 'list-view/src/listviewitem';
    import LanguagesItem from "../components/languages-select/models/LanguagesItem"

    @Component
    export default class HeaderDefaultComponent extends Vue {  
        appearance = '0'
        // languages: ListViewItem<LanguagesItem>[] = [new ListViewItem(new LanguagesItem(1, 'EN'), true, false), new ListViewItem(new LanguagesItem(2, 'RU'), false, false)]

        created() {
            // console.log(this.languages, 'this.languages');
            
                
        }
    }
    
</script>

<style lang="css" scoped>

header { 
    padding: 18px 0;
    background-color: #00132c;
}

.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo-header {
    margin-right: 26px;
    max-width: 141px;
}
.logo-header img {
    max-width: 100%;
    height: auto;
}

.nav-group {
    margin-left: 74px;
    display: flex;
    align-items: center;
}

.menu-show-enter-active {
  animation: menu-show 1s cubic-bezier(.16,.68,.18,1);
}
.menu-show-leave-active {
  animation: menu-show 1s cubic-bezier(.16,.68,.18,1) reverse;
}

@keyframes menu-show {
  from { transform: translateX(400px); }
  to { transform: translateX(0); }
}

@media all and (max-width: 1200px) {
    .nav-group { margin-left: 30px }
}

@media all and (max-width: 1050px) {
    .nav-group { display: none; }
}

@media all and (max-width: 450px) {
    .logo-header { max-width: 50px; }
}
@media all and (max-width: 370px) {
    .logo-header { max-width: 35px; }
}


</style>