<template>    
    <footer>
        <div class="container-fluid footer-container">
            <r-link route="page-home" class="footer-logo">
                <img src="/assets/img/logo-footer.svg" alt="Logo">
                <div class="logo-title">ABA support</div>
            </r-link>
        </div>

        <div class="container-fluid footer-block-container">
            <div class="row footer-row">
                <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 footer-col">
                    <div class="footer-item">
                        <div class="footer-block">
                            <div class="footer-link-title">{{ 'Loyalty.FooterLinkTitle.Phone' | locale }} 9:00 to 18:00 (GMT +3)</div>
                            <a href="tel: +420228880237" class="footer-link">+420 228 880 237</a>
                        </div>
                        <div class="footer-block">
                            <div class="footer-link-title">{{ 'Loyalty.FooterLinkTitle.Support' | locale }}</div>
                            <a href="mailto: support@abapay.eu" class="footer-link">support@abapay.eu</a>
                        </div>
                        <div class="footer-block">
                            <div class="footer-link-title">{{ 'Loyalty.FooterLinkTitle.SWIFT.Code' | locale }}</div>
                            <span class="footer-link">EEPSCZPP</span>
                        </div>
                        <div class="footer-block">
                            <div class="footer-link-title">{{ 'Loyalty.FooterLinkTitle.License' | locale }}</div>
                            <span class="footer-link">2013/5370570</span>
                        </div>
                        <div class="footer-block">
                            <div class="footer-link-title">{{ 'Loyalty.FooterLinkTitle.Address' | locale }}</div>
                            <span class="footer-link">{{ 'Loyalty.FooterLink.Address' | locale }}</span>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 footer-col item-links-col">
                    <div class="footer-item item-links">
                        <r-link route="page-account" class="footer-link">{{ 'Loyalty.MenuItemAccount' | locale }}</r-link>
                        <r-link route="page-aba-card" class="footer-link">{{ 'Loyalty.MenuItemAbaCard' | locale }}</r-link>
                        <r-link route="page-rates" class="footer-link">{{ 'Loyalty.MenuItemAbaRates' | locale }}</r-link>
                        <r-link route="page-support" class="footer-link">{{ 'Loyalty.MenuItemAbaSupport' | locale }}</r-link>
                        <r-link route="page-privacy-policy" class="footer-link">{{ 'Loyalty.MenuItemAbaPrivacyPolicy' | locale }}</r-link>
                        <r-link route="page-terms-conditions" class="footer-link">{{ 'Loyalty.MenuItemAbaTermsAndConditions' | locale }}</r-link>
                        <a href="/assets/docs/Claims Procedure ABAPay.docx" download class="footer-link">{{ 'Loyalty.MenuItemAbaClaimsProcedure' | locale }}</a>
                    </div>
                </div>

                <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 footer-col">
                    <div class="footer-item">
                        <div class="social-widget">
                            <a href=""><svg><use xlink:href="/assets/img/svg-sprite.svg#facebook"></use></svg></a>
                            <a href=""><svg><use xlink:href="/assets/img/svg-sprite.svg#telegram"></use></svg></a>
                            <a href=""><svg><use xlink:href="/assets/img/svg-sprite.svg#whatsapp"></use></svg></a>
                            <a href=""><svg><use xlink:href="/assets/img/svg-sprite.svg#twitter"></use></svg></a>
                            <a href=""><svg><use xlink:href="/assets/img/svg-sprite.svg#linkedin"></use></svg></a>
                        </div>
                    </div>
                </div>
            </div>

            <p class="footer-text">{{ 'Loyalty.Footer.Text' | locale }}</p>
            <div class="copyright">
                <span>{{ 'Loyalty.Copyright' | locale }}</span>
            </div>
        </div>
    </footer>
</template>
<script lang="ts">

import Vue from "vue";
import { Component } from 'vue-property-decorator'

@Component
export default  class FooterDefaultComponent extends Vue {

}
    
</script>

<style lang="css">

footer {
    padding: 53px 0 68px 0;
    background-color: #0a0d18;
}
.footer-logo {
    margin-bottom: 30px;
    display: flex;
    align-items: center;
}
.footer-logo img {
    margin-right: 24px;
    max-width: 70px;
    width: 100%;
    height: auto;
    display: inline-block;
}
.logo-title {
    font-size: 24px;
    font-weight: 500;
    color: white;
}
.footer-col {
    margin-bottom: 30px;
}


/* footer-block */
.footer-block-container {
    max-width: 1080px;
}
.footer-block:not(:last-child) {
    margin-bottom: 30px;
}
.footer-link-title {
    margin-bottom: 5px;
    line-height: 110%;
    font-size: 15px;
    font-weight: 500;
    color: #949ead;
}
.footer-link {
    color: #3772ce;
    font-size: 16px;
    font-weight: 500;
    line-height: 125%;
    transition: all 0.2s ease;
}
a.footer-link:hover {
    color: #949ead;
}
.item-links-col {
    display: flex;
    justify-content: center;
}
.item-links a {
    margin-bottom: 30px;
    display: block;
    width: max-content;
}



.social-widget {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.social-widget a {
    display: flex;
}
.social-widget a:not(:last-child) {
    margin-right: 20px;
}
.social-widget a svg {
    max-width: 36px;
    max-height: 36px;
    fill: white;
    transition: all 0.2s ease;
}
.social-widget a:hover svg {
    fill: #3772ce;
}




.footer-text {
    margin: 0 auto;
    margin-top: 74px;
    margin-bottom: 45px;
    font-size: 14px;
    font-weight: 500;
    color: #949ead;
    line-height: 140%;
    text-align: center;
    max-width: 585px;
}
.copyright {
    display: flex;
    justify-content: space-between;
}
.copyright span {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    line-height: 125%;
    font-weight: 500;
    width: 100%;
    text-align: center;
}

@media all and (max-width: 768px) {
    .social-widget { width: 100%; justify-content: center; }
}
@media all and (max-width: 576px) {
    .footer-item { text-align: center; max-width: 400px; margin: 0 auto; }
    .item-links a { margin: 0 auto; margin-bottom: 30px; }
    .footer-logo { justify-content: center; }
}
@media all and (max-width: 320px) {
    .logo-title { display: none; }
    .footer-logo img { margin-right: 0; }
}
</style>