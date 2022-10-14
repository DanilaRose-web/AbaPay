<template> 
        <transition name="menu-show">
            <section class="mobile-menu" v-if="show">
                <div class="close-menu" @click="$emit('closeMenu')">
                    <img src="/assets/img/close-menu.svg" alt="">
                </div>
                <nav id="mobile-menu">
                    <menu-nav class="mobile-menu-nav"></menu-nav>
                    <div class="nav-group">
                        <section-button class="small-btn light-btn mg-right header-btn mobile-small-btn">Sign In</section-button>
                        <section-button class="small-btn header-btn mobile-small-btn">Sign Up</section-button>
                        <languages-mobile></languages-mobile>
                    </div>
                </nav>
            </section> 
        </transition>
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Prop, Watch } from "vue-property-decorator"

@Component
export default class MobileMenuComponent extends Vue {
    @Prop({ type: Boolean, default: false }) show: boolean
    
    // showMenu: boolean = false
    // mounted() {
    //     this.showMenu = this.show
    // }
}
</script>


<style lang="css">

.mobile-menu {
    position: fixed;
    max-width: 400px;
    width: 100%;
    height: 100vh;
    top: 0;
    right: 0;
    background-color: #fff;
    opacity: 1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    z-index: 4;
    display: flex;
    align-items: center;
    overflow-y: auto;
    /* -webkit-transform: translateX(400px);
    transform: translateX(400px); */
    -webkit-transition: all 1s cubic-bezier(.16,.68,.18,1);
    transition: all 1s cubic-bezier(.16,.68,.18,1);
}

/* .mobile-menu.active {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-transition: all 1s cubic-bezier(.16,.68,.18,1);
    transition: all 1s cubic-bezier(.16,.68,.18,1);
} */

#mobile-menu {
    margin: 80px 20px 80px 0;
    padding: 0 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.close-menu {
    width: 30px;
    height: 29px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    cursor: pointer;
    z-index: 3;
    position: fixed;
    top: 100px;
    right: 20px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
}

.close-menu:active,
.close-menu:hover {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
}




.mobile-menu .nav-group {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.mobile-menu .nav-group .light-btn {
    margin-bottom: 15px;
    margin-right: 0;
}


/* vue transition */

/* .menu-show-enter-active {
  animation: menu-show 1s cubic-bezier(.16,.68,.18,1);
} */
.menu-show-leave-active {
  animation: menu-show 1s cubic-bezier(.16,.68,.18,1) reverse;
}

@keyframes menu-show {
  from { transform: translateX(400px); }
  to { transform: translateX(0); }
}


</style>