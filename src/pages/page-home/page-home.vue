<template>
    <layout>
        <section class="main dark-theme-bg-black">
            <div class="main-wrap">
                <div class="container-fluid main-container">
                    <div class="row main-row">
                        <div class="col-6 main-col">
                            <div class="main-block mt-max">
                                <h1 class="main-title">{{ 'Loyalty.PageHomeMainTitle' | locale }}</h1>
                                <section-subtitle class="main-subtitle ta-left">{{ 'Loyalty.PageHomeMainSubtitle' | locale }}</section-subtitle>
                                <section-button class="main-btn">{{ 'Loyalty.OpenAccountBtn' | locale }}</section-button>
                            </div>
                        </div>

                        <div class="col-6 main-col">
                            <div class="main-block">
                                <div class="main-img">
                                    <picture>
                                        <source srcset="/assets/img/mob-mockup/phone-for-mobile.png" media="(max-width: 650px)">
                                        <img src="/assets/img/mob-mockup/mob-mockup-01@2x.png" alt="Abapay mobile phone">
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="features">
            <div class="container-fluid features-container">
                <appearance class="large">
                    <ui-radio 
                        :id="'business-account'"
                        :label="$locale.getTranslate('Loyalty.TypeThemeBusinessFull')"
                        :data="'0'"
                        v-model="appearance"
                    />

                    <ui-radio 
                        :id="'personal-account'"
                        :label="$locale.getTranslate('Loyalty.TypeThemePersonalFull')"
                        :data="'1'"
                        v-model="appearance"
                    /> 
                </appearance>
                <section-title>{{ 'Loyalty.PageHomeTitleFeatures' | locale }}</section-title>
                <section-subtitle class="mb">{{ 'Loyalty.PageHomeSubtitleFeatures' | locale }}</section-subtitle>

                <features-block>
                    <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 features-col" v-for="item in featuresItems" :key="item.Id">
                        <div class="features-item">
                            <div class="features-img">
                                <img :src="item.Img" :alt="item.Alt">
                            </div>
                            <div class="features-title">{{ item.Title }}</div>
                            <p class="features-text">{{ item.Description }}</p>
                        </div>
                    </div>
                </features-block>

                <section-button class="btn-center">{{ 'Loyalty.OpenAccountBtn' | locale }}</section-button>
            </div>
        </section>

        <section class="finance dark-theme-bg-black">
            <div class="container-fluid finance-container">
                <div class="finance-img">
                    <img src="/assets/img/ab-acard/ab-acard.png" alt="Abapay card">
                </div>

                <section-title class="dark-theme">{{ 'Loyalty.PageHome.Finance.Title' | locale }}</section-title>
                <section-subtitle class="mb">{{ 'Loyalty.PageHome.Finance.Subtitle' | locale }}</section-subtitle>
                <section-button class="btn-center">{{ 'Loyalty.OpenAccountBtn' | locale }}</section-button>
            </div>
        </section>

        <section class="portfolio dark-theme-bg-blue">
            <div class="container-fluid portfolio-container">
                <div class="row portfolio-row">
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 order-2 order-sm-2 order-md-1 order-lg-1 order-xl-1 portfolio-col">
                        <div class="portfolio-item">
                            <div class="portfolio-img">
                                <picture>
                                    <source srcset="/assets/img/mob-mockup-build/mob-mockup-mobile.png" media="(max-width: 768px)">
                                    <img src="/assets/img/mob-mockup-build/mob-mockup-2.png" alt="Build Your Portfolio">
                                </picture>
                            </div>
                            <section-button class="media-min-768 btn-center">Open Account</section-button>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 order-1 order-sm-1 order-md-2 order-lg-2 order-xl-2 portfolio-col portfolio-col-mt">
                        <div class="portfolio-item">
                            <section-title class="ta-left dark-theme">{{ 'Loyalty.PageHome.Portfolio.Title' | locale }}</section-title>
                            <ul class="potfolio-list">
                                <li><span>{{ 'Loyalty.PageHome.Portfolio.ListItem1' | locale }}</span></li>
                                <li><span>{{ 'Loyalty.PageHome.Portfolio.ListItem2' | locale }}</span></li>
                                <li><span>{{ 'Loyalty.PageHome.Portfolio.ListItem3' | locale }}</span></li>
                            </ul>
                            <section-button class="media-max-768">{{ 'Loyalty.OpenAccountBtn' | locale }}</section-button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </layout>
</template>

<script lang="ts"> 

import Vue from "vue"
import { Component } from "vue-property-decorator"
import FeaturesItemComponent from "../../components/features/models/FeaturesItemComponent"

@Component
export default class PageHomeComponent extends Vue {

    appearance = '0'
    featuresItems: FeaturesItemComponent[] = []

    created() {
        this.featuresItems = [
            new FeaturesItemComponent(1, '/assets/img/features/img1.svg', 'quick account', "Quick account opening", 'Completing a form will take only about 10 minutes'),
            new FeaturesItemComponent(2, '/assets/img/features/img2.svg', 'cards', 'Payment cards', 'Manage your funds from anywhere in the world'),
            new FeaturesItemComponent(3, '/assets/img/features/img3.svg', 'crypto', 'Cryptocurrency', 'The ability to buy, sell and exchange with a click of a button'),
            new FeaturesItemComponent(4, '/assets/img/features/img4.svg', 'SEPA and SWIFT', 'SEPA & SWIFT', 'An easy way to money transfers money all over the world'),
            new FeaturesItemComponent(5, '/assets/img/features/img5.svg', 'currency', 'Currency exchange', 'Excellent exchange rate in more than 100 currencies'),
            new FeaturesItemComponent(6, '/assets/img/features/img6.svg', '24/7', 'Private manager', 'Your personal account manager ready to help you 24/7')
        ]
    }

}
</script>

<style lang="css">

.main {
    min-height: 100vh;
    /* background: white; */
}

.not-full-height {
    padding-bottom: 50px;
    min-height: 100%;
}

.main-wrap {
    background: url('/assets/img/main-bg.svg') no-repeat;
    background-size: contain;
    background-position-x: calc((100vw - 576px)/(1200 - 576) * (230 - 50) + 50%);
}

.main-row {
    padding-top: 37px;
}
.main-col { margin-bottom: 30px; }
.main-col:nth-child(1) .mt-max {
    margin-top: 140px;
}
.main-col:nth-child(1) .mt-min {
    margin-top: 60px;
}
.main-col:nth-child(2) {
    display: flex;
    justify-content: flex-end;
}





.main-title {
    margin-bottom: 46px;
    font-size: 72px;
    font-weight: 600;
    line-height: 125%;
    color: white;
}

.main-img {
    max-width: 540px;
    position: relative;
}

.main-img img {
    max-width: 100%;
    height: auto;
}

@media all and (max-width: 1000px) {
    .main-title { 
        font-size: calc((100vw - 768px)/(1000 - 768) * (72 - 58) + 58px); 
        margin-bottom: calc((100vw - 650px)/(1000 - 650) * (46 - 30) + 30px);
    }
    .main-col:nth-child(1) .mt-max { margin-top: calc((100vw - 768px)/(1000 - 768) * (140 - 70) + 70px); }
}

@media all and (max-width: 768px) {
    .main-title { font-size: calc((100vw - 650px)/(768 - 650) * (58 - 48) + 48px); }
}

@media all and (max-width: 650px) {
    .main-col { flex: 0 0 auto; max-width: 100%; }
    .main-col:nth-child(2) { justify-content: center; padding: 0; }
    .main-img { max-width: 100%; }
    .main-col:nth-child(1) .main-block { margin-top: 30px; }
    .main-title { font-size: calc((100vw - 280px)/(650 - 280) * (66 - 27) + 27px); margin-bottom: 30px; }
    .main-title.center-title { text-align: center; }
}


@media all and (max-width: 350px) {
    .main-col:nth-child(1) .mt-min, .main-col:nth-child(1) .mt-max { margin-top: 0; }
}




/* section features */
.features {
    padding: 54px 0 93px 0;
    background-color: #00132c;
}






/* section finance */
.finance {
    padding: 0 0 110px 0;
}

.finance-img {
    margin: 0 auto;
    max-width: 701px;
}
.finance-img img {
    max-width: 100%;
    height: auto;
}








/* section potfolio */
.portfolio {
    padding: 0 0 64px 0;
}

.portfolio-col-mt {
    padding-top: 50px;
}

.portfolio-img {
    max-width: 100%;
}
.portfolio-img img {
    max-width: 100%;
    width: 100%;
}

.potfolio-list {
    margin-top: 24px;
    margin-bottom: 40px;
    list-style: square;
    position: relative;
    z-index: 1;
    max-width: 700px;
}

.potfolio-list span {
    margin-left: 11px;
    padding: 0;
    color: #949ead;
    transition: all 0.3s ease;
    line-height: 130%;
    max-width: 500px;
    font-weight: 500;
    font-size: 18px;
}

.potfolio-list li {
    margin-bottom: 20px;
    padding: 0;
    display: flex;
    align-items: flex-start;
}

.potfolio-list li:before {
    margin-top: 3px;
    margin-right: 0px;
    content: '';
    width: 22px;
    height: 20px;
    flex: 0 0 22px;
    background: url('/assets/img/icon-ul.svg') no-repeat center;
    background-size: contain;
}

@media all and (max-width: 768px) {
    .portfolio-col:nth-child(1) { padding: 0; }
    .portfolio-img { margin-bottom: 29px; }
}
@media all and (max-width: 400px) {
    .potfolio-list span { font-size: calc((100vw - 280px)/(400 - 280) * (18 - 16) + 16px) }
}
</style>