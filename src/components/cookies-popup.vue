<template>
    <transition name="cookies-show">
        <div class="cookies-popup" v-if="cookies">
            <div class="container-fluid cookies-popup-container">
                <p class="cookies-text">We use cookies to provide you with the best browsing experience. The data collected by cookies is used to optimise the website for our visitors and deliver targeted information to ABAPay users and prospective ABAPay customers. This data is used as part of our EU and global operations.</p>
                <section-button class="small-btn cookies-btn" @hideCookies="hideCookies">Hide</section-button>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator"
import Cookies = require("js-cookie")

@Component
export default class CookiesPopupComponent extends Vue {
    cookies: boolean = true
    _agree: string = null;
    
    created() {
        if (this.cookiesPopup) {
           this.cookies = this.cookiesPopup == 'true' ? true : false ;
        } else {
           this.cookiesPopup = 'true';
        }
    }
    
    hideCookies() {
        this.cookies = !this.cookies;
        this.cookiesPopup = this.cookies ? 'true' : 'false';
    }

    get cookiesPopup(): string {
        let agree = Cookies.get('agree');
        if (!agree) {
            return this._agree
        }
        return agree;
    }
    
    set cookiesPopup(value: string) {
        Cookies.set('agree', value);
        this._agree = value;
    }

}
</script>

<style lang="less">

.cookies-popup {
    padding: 20px 0;
    background: rgba(0, 19, 44, 0.7);
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 1;
}

.cookies-popup-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.cookies-text {
    margin-right: 100px;
    font-size: 14px;
    font-weight: 400;
    color: white;
    line-height: 160%;
}

.cookies-show-enter-active, .cookies-show-leave-active  {
    transition: all 1s cubic-bezier(.16,.68,.18,1);
}

.cookies-show-enter, .cookies-show-leave-to {
    opacity: 0;
    visibility: hidden;
}
</style>