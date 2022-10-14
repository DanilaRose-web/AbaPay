<template>
    <layout>
        <section class="main dark-theme-bg-blue">
            <div class="container-fluid main-container">
                <div class="container-fluid main-container">
                    <div class="row main-row">
                        <div class="col-6 main-col">
                            <div class="main-block mt-min">
                                <h1 class="main-title">{{ 'Loyalty.PageAccount.Main.Title' | locale }}</h1>
                                <section-subtitle class="main-subtitle ta-left">{{ 'Loyalty.PageAccount.Main.Subtitle' | locale }}</section-subtitle>
                                <section-button class="main-btn">{{ 'Loyalty.OpenAccountBtn' | locale }}</section-button>
                            </div>
                        </div>

                        <div class="col-6 main-col">
                            <div class="main-block">
                                <div class="main-img">
                                    <img src="/assets/img/account-bg@2x.png" alt="Abapay mobile phone">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="transfer dark-theme-bg-black">
            <div class="container-fluid transfer-container">
                <div class="row transfer-row">
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 order-2 order-sm-2 order-md-1 order-lg-1 order-xl-1 transfer-col">
                        <div class="transfer-img">
                            <picture>
                                <source srcset="/assets/img/transfer-img-mob@2x.png" media="(max-width: 768px)">
                                <img src="/assets/img/transfer-img@2x.png" alt="transfer-abapay">
                            </picture>
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 order-1 order-sm-1 order-md-2 order-lg-2 order-xl-2 transfer-col col-align-center">
                        <div class="transfer-block">
                            <section-title class="ta-left dark-theme ta-center-768">{{ 'Loyalty.PageAccount.Transfer.Title' | locale }}</section-title>
                            <section-subtitle class="ta-left ta-center-768">{{ 'Loyalty.PageAccount.Transfer.Subtitle' | locale }}</section-subtitle>
                            <section-button class="media-max-768">{{ 'Loyalty.OpenAccountBtn' | locale }}</section-button>
                        </div>
                    </div>
                </div>

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
                <section-button class="media-min-768 btn-center">Open Account</section-button>
            </div>
        </section>

        <section class="appreciate dark-theme-bg-blue">
            <div class="container-fluid appreciate-container">
                <section-title>{{ 'Loyalty.Appreciate.Title' | locale }}</section-title>
                <section-subtitle>{{ 'Loyalty.Appreciate.Subtitle' | locale }}</section-subtitle>
                <section-button class="btn-center mt-60">{{ 'Loyalty.OpenAccountBtn' | locale }}</section-button>
            </div>
        </section>
    </layout>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"
import FeaturesItemComponent from "../../components/features/models/FeaturesItemComponent"

@Component
export default class PageAccountComponent extends Vue {
    featuresItems: FeaturesItemComponent[] = []

    created() {
        this.featuresItems = [
            new FeaturesItemComponent(1, '/assets/img/features/img7.svg', 'credit-card', 'Personal data safety', 'We use modern technologies that fully meet all international requirements for Internet security and data storage.'),
            new FeaturesItemComponent(2, '/assets/img/features/img8.svg', 'analytics', 'Simple account statistics', 'Each user gets instant access to all the information regarding their current account, balance and transaction history.'),
            new FeaturesItemComponent(3, '/assets/img/features/img9.svg', 'pointer', 'One-click access', 'You can check your account balance, make a purchase or start a new transaction using your smartphone, computer or tablet')
        ]
    }
}
</script>

<style lang="less">

@media (max-width: 350px) {
    .main-col:nth-child(1) .main-block {
        margin-top: 0;
    }
}



/* saction transfer */
.transfer {
    padding: 0 0 64px 0;
}
.transfer-img {
    max-width: 100%;
}
.transfer-img img {
    max-width: 100%;
    height: auto;
}
.col-align-center {
    display: flex;
    align-items: center;
}

@media all and (max-width: 768px) {
    .transfer { padding: 64px 0 64px 0; }
}


/* appreciate */
.appreciate {
    padding: 64px 0 64px 0;
}

</style>