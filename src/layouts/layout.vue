<template>
  <div>
    <slot name="header">
      <layout-header/>
    </slot>    
   
    <div id="content">
      <div class="wrapper">
        <div class="fullpage">
          <header-default @onClick="showMenu"></header-default>
          <slot/>
          <footer-default></footer-default>
          <cookies-popup></cookies-popup>
        </div>
      
        <transition name="menu-show">
          <mobile-menu v-if="show" :show="show"  @closeMenu="hideMenu"></mobile-menu>
        </transition>
        
        <transition name="overlay-show">
          <div class="overlay" @closeMenu="hideMenu" @click="hideMenu" v-if="showOverlay" ></div>
        </transition>
      </div>
    </div>
    <slot name="footer">
      <layout-footer />
    </slot>    
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class LayoutComponent extends Vue {
  //name: "layout"
  constructor() {
    super();
    console.log("LayoutComponent created");
  }
  show: boolean = false
  showOverlay: boolean = false

  showMenu() {
    this.show = !this.show
    this.showOverlay = !this.showOverlay
    console.log(this.show);
  }

  hideMenu() {
    this.show = false
    this.showOverlay = false
  }
}
</script>

<style lang="css"> 

.fullpage {
  max-width: 100%;
  height: 100%;
  position: relative;
  -webkit-transition: all 10s cubic-bezier(.16,.68,.18,1);
  transition: all 10s cubic-bezier(.16,.68,.18,1);
}

/* .fullpage.hide {
  -webkit-transform: translateX(-400px);
  transform: translateX(-400px);
  
  -webkit-transition: all 1s cubic-bezier(.16,.68,.18,1);
  transition: all 1s cubic-bezier(.16,.68,.18,1);
} */


.menu-show-enter-active {
  animation: menu-show 1s cubic-bezier(.16,.68,.18,1);
}
/* .menu-show-leave-active {
  animation: menu-show 1s cubic-bezier(.16,.68,.18,1) reverse;
} */

@keyframes menu-show {
  from { transform: translateX(400px); }
  to { transform: translateX(0); }
}




/* overlay */

.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.7;
  /* -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  visibility: hidden; */
  -webkit-transition: all 1s cubic-bezier(.16,.68,.18,1);
  transition: all 1s cubic-bezier(.16,.68,.18,1);
  z-index: 3;
  /* animation: overlay-show-anim 1s cubic-bezier(.16,.68,.18,1); */
}

.overlay.show {
  opacity: 0.6;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
  visibility: visible;
  -webkit-transition: all 1s cubic-bezier(.16,.68,.18,1);
  transition: all 1s cubic-bezier(.16,.68,.18,1);
}

.overlay-show-enter-active {
  animation: overlay-show 1s cubic-bezier(.16,.68,.18,1);
}
.overlay-show-leave-active {
  animation: overlay-show 1s cubic-bezier(.16,.68,.18,1) reverse;
}

@keyframes overlay-show {
  from { opacity: 0; visibility: hidden; }
  to { opacity: 0.7; visibility: visible; }
}

</style>
