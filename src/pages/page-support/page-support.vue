<template>
    <layout>
        <section class="support dark-theme-bg-blue">
            <div class="container-fluid support-container">
                <div class="support-wrap">
                    <section-title class="medium-title">ABA support</section-title>
                    <section-subtitle>We will gladly answer your questions and offer you the best terms!</section-subtitle>

                    <div class="support-contact-links">
                        <a href="tel: +420 228 880 237">+420 228 880 237</a>
                        <a href="mailto: support@abapay.eu">support@abapay.eu</a>
                    </div>

                    <section-title class="small-title">Questions and answers</section-title>
                    <section-subtitle>Useful information about our service</section-subtitle>

                    <ol class="support-block">
                        <li>
                            <span class="question">What licenses does ABA have?</span>
                            <span class="answer">ABAPAY s.r.o. (registration number 29415152) has the Small Payment Institution licence from <a target="blank" href="https://www.cnb.cz/en/supervision_financial_market/lists_registers/">CzechNationalBank.</a></span>
                        </li>
                        <li>
                            <span class="question">What country is ABA service registered at?</span>
                            <span class="answer">ABA service is registered in the Czech Republic.</span>
                        </li>
                        <li>
                            <span class="question">How safe is ABA service?</span>
                            <span class="answer">We use technologies that guarantee secure online payments and two-factor authentication. Moreover, users receive real time notifications about all transactions on the account.</span>
                        </li>
                        <li>
                            <span class="question">How safe is it to keep money at ABA?</span>
                            <span class="answer">Funds of our customers are kept in a separate account in the Czech bank and can be used by no one, except for the customer, i.e. they are protected 100%.</span>
                        </li>
                        <li>
                            <span class="question">What documents must be presented for opening an account?</span>
                            <span class="answer">When opening an account, a passport or ID card is required, as well as any invoice paid up by you (for example, phone, internet or utility bills) or a bank statement on the account with your name and address.</span>
                        </li>
                        <li>
                            <span class="question">When will I get access to the online bank?</span>
                            <span class="answer">You will get access as soon as your identity is checked and verified. Usually, it takes from 30 minutes to several hours.</span>
                        </li>
                        <li>
                            <span class="question">Residents of what countries may not open an account?</span>
                            <span class="answer">urrently, an account may be opened, if you are over 18 and you are not a resident of the following countries: Afghanistan, Albania, Algeria, Central African Republic, China, Cuba, Democratic Republic of Congo, Ecuador, Guyana, Indonesia, India, Iran, Iraq, Ivory Coast, Nigeria, North Korea, Laos, Panama, Papua New Guinea, Sudan, Syria, Uganda, Yemen, Zimbabwe.</span>
                        </li>
                        <li>
                            <span class="question">How long does it take to deliver a card to my address?</span>
                            <span class="answer">On average, it takes from 7 to 14 days to deliver your card.</span>
                        </li>
                        <li>
                            <span class="question">How much must one pay for using the card?</span>
                            <span class="answer">Comprehensive information on the commissions can be found in the <r-link route="page-rates">Tariffs section</r-link></span>
                        </li>
                        <li>
                            <span class="question">May I use my ABA account for online shopping?</span>
                            <span class="answer">Yes, certainly! You may shop in any online stores and pay for services and subscriptions.</span>
                        </li>
                        <li>
                            <span class="question">What must I do if I lose my card?</span>
                            <span class="answer">Think fast! It’s easy to login to your account at <r-link route="page-home">www.abapay.eu</r-link> and manually block your card by clicking the ‘Lost Card’ button underthe ‘Balance’ tab, or call us +420 228880237 and follow the directions. Remember to have your Security Account Number (SAN) or Card Number ready. Your SAN number can be found on the back of your Prepaid Card. Please note that this is not your card number, it issimply a 9 digit number that is associated to your account without revealing any sensitive information.</span>
                        </li>
                        <li>
                            <span class="question">Do you need a consultation?</span>
                            <span class="answer">Call or write us and we will be glad to help you!</span>
                        </li>
                        <li>
                            <span class="question">Customer Support Hours</span>
                            <span class="answer">Monday to Friday <br /> 08:00 – 17:00 CET <br /> 07:00 – 16:00 GMT <br /> (Network rates may apply)</span>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    </layout>
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"
import FeaturesItemComponent from "../../components/features/models/FeaturesItemComponent"

@Component
export default class PageSupportComponent extends Vue {
    @Prop({ type: Boolean, default: false }) show: boolean

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

.support {
    padding: 80px 0 60px 0;
}
.support-wrap {
    margin: 0 auto;
    max-width: 700px;
}

.support-contact-links {
    margin: 60px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.support-contact-links a {
    font-size: 28px;
    font-weight: 400;
    line-height: 120%;
    color: #3772ce;
    transition: all 0.2s ease;
}
.support-contact-links a:hover {
    color: #949ead;
}
.support-contact-links a:first-child {
    margin-right: 20px;
}




.support-block {
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 50px;
    max-width: 730px;
    // list-style-type: decimal;
}

.support-block li {
    padding: 30px 30px 30px 30px;
    border-top: 1px solid #949ead;
    color: #949ead;
}

.support-block li .question {
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
    line-height: 120%;
    color: #3772ce;
    display: block;
}

.support-block li .answer {
    font-size: 18px;
    color: #949ead;
    font-weight: 400;
    line-height: 160%;
    display: block;
}

.support-block li a {
    color: rgb(55, 103, 177, 0.6);
    transition: all 0.2s ease;
}
.support-block li a:hover {
    color: #949ead;
    text-decoration: underline;
}

@media all and (max-width: 580px) {
    .support-contact-links { flex-direction: column; align-items: center; justify-content: center; }
    .support-contact-links a:first-child { margin-right: 0; margin-bottom: 5px; }
}
@media all and (max-width: 400px) {
    .support-block li { padding: 30px 10px 30px 10px; }
}
@media all and (max-width: 380px) {
    .support-contact-links a { font-size: calc((100vw - 280px)/(380 - 280) * (28 - 25) + 25px) }
}
</style>