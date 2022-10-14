<template>
    <layout>
        <section class="main dark-theme-bg-blue not-full-height">
            <div class="container-fluid main-container">
                <div class="container-fluid main-container">
                    <div class="row main-row abaCard-main-row">
                        <div class="col-6 main-col">
                            <div class="main-block abaCard-main-row">
                                <h1 class="main-title center-title">Enjoy the freedom</h1>
                                <section-subtitle class="main-subtitle ta-left center-650">Manage your funds from anywhere in the world</section-subtitle>
                                <section-button class="main-btn">Open Account</section-button>
                            </div>
                        </div>

                        <div class="col-6 main-col">
                            <div class="main-block">
                                <div class="main-img">
                                    <img src="/assets/img/aba-black-card-img@2x.png" alt="Abapay mobile phone">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="finance dark-theme-bg-black">
            <div class="container-fluid finance-container">
                <div class="finance-img">
                    <img src="/assets/img/ab-acard/ab-acard.png" alt="Abapay card">
                </div>

                <section-title class="dark-theme">Anytime. Anywhere.</section-title>
                <section-subtitle class="mb">Use the card in your everyday life – pay a check in a restaurant or in a mall, or when shopping online, both in your home country and abroad.</section-subtitle>

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

                <section-button class="btn-center mt-60 btn-center">Open Account</section-button>
            </div>
        </section>

        <section class="appreciate dark-theme-bg-blue">
            <div class="container-fluid appreciate-container">
                <section-title>Opening an account and obtaining a card</section-title>
                <section-subtitle>ABA is different from traditional banks – you do not need to submit information about your credit history to open an account. We value your time, therefore registration in our system and identity authentication will take less than 10 minutes. All you need is a smartphone, Internet access and your passport or ID card, and a utility bill.</section-subtitle>
                <section-button class="btn-center mt-60">Open Account</section-button>
            </div>
        </section>
    </layout>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"
import FeaturesItemComponent from "../../components/features/models/FeaturesItemComponent"

@Component
export default class PageAbaCardComponent extends Vue {
    featuresItems: FeaturesItemComponent[] = []

    created() {
        this.featuresItems = [
            new FeaturesItemComponent(1, '/assets/img/features/img10.svg', 'tap', 'Pay with only one touch', 'Buy goods and services using contactless payment – simply touch the reading unit with your card at the cash desk.'),
            new FeaturesItemComponent(2, '/assets/img/features/img11.svg', 'control', 'Control everything', 'Your funds are always safe – whether you have lost your card or forgotten you PIN code, you block access to your bank account via your online account.'),
            new FeaturesItemComponent(3, '/assets/img/features/img12.svg', 'payments', 'No hidden payments', 'Transparent terms for all our clients — please see our price list in the “Rates” section')
        ]
    }
}
</script>

<style lang="less">

.main-row.abaCard-main-row {
    padding-top: 150px;
}

.main-col:nth-child(2) {
    display: flex;
    justify-content: flex-end;
}

@media all and (max-width: 1000px) {
    .main-row.abaCard-main-row { padding-top: calc((100vw - 650px)/(1000 - 650) * (150 - 70) + 70px); }
}

</style>