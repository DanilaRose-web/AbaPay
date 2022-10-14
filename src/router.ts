import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import BaseLayout from "@layouts/base-layout.vue";
import PageHome from "@pages/page-home/page-home.vue";
import PageAccount from "@pages/page-account/page-account.vue";
import PageAbaCard from "@pages/page-aba-card/page-aba-card.vue";
import PageRates from "@pages/page-rates/page-rates.vue";
import PageSupport from "@pages/page-support/page-support.vue";
import PagePrivacyPolicy from "@pages/page-privacy-policy/page-privacy-policy.vue";
import PageTermsConditions from "@pages/page-terms-conditions/page-terms-conditions.vue";
import PageOther from "@pages/other/other.vue";



const router = new VueRouter({
  mode: "history",
  routes: [
    {
      name: "layout",
      path: "/",
      component: BaseLayout,
      children: [
      
        {
          name:"page-home",
          path: "/",
          component: PageHome
        },
        {
          name:"page-account",
          path: "page-account",
          component: PageAccount
        },
        {
          name:"page-aba-card",
          path: "page-aba-card",
          component: PageAbaCard
        },
        {
          name:"page-rates",
          path: "page-rates",
          component: PageRates
        },
        {
          name:"page-support",
          path: "page-support",
          component: PageSupport
        },
        {
          name:"page-privacy-policy",
          path: "page-privacy-policy",
          component: PagePrivacyPolicy
        },
        {
          name:"page-terms-conditions",
          path: "page-terms-conditions",
          component: PageTermsConditions
        },
        {
          name:"other",
          path: "other/:id?",
          component: PageOther
        }
      
        // {
        //   path: "Новости",
        //   component: EmptyLayout,
        //   children:[
        //     {
        //       name: "news",
        //       path: "",
        //       component: PageNews,
        //       meta: {
        //         title: "Новости"
        //       }
        //     },
        //     {
        //       name: "news-detail",
        //       path: ":code",
        //       component: PageNewsDetail
        //     }
        //   ]
        // },
        
      ]
    }
    // {
    //     name: loginRoute.name,
    //     path: "/" + routeLangPrefix + "/login",
    //     component: LoginComponent,
    //     meta: {
    //         allowAnonymous: true,
    //         title: "Авторизация"
    //     }
    // },
    // {
    //     name: '404',
    //     path: "*",
    //     component: LoginComponent,
    //     meta: {
    //         allowAnonymous: true,
    //         title: "Авторизация"
    //     }
    // },
  ]
});

router.beforeEach((to, from, next) => {
 // console.log(to, from, next);
  //var title = Vue.$mainStore.PageTitle;
  // if (to.meta.title) {
  //   if (title) title = `${to.meta.title} | ${title}`;
  //   else title = to.meta.title;
  // }
  // document.title = title;
  // console.log("document.head.title", document.head.title);


  // if(!Vue.$mainStore.SchoolInfo){
  //   Vue.$api.SchoolService.GetSchoolInfoEvent.once(()=>{
  //     next();
  //   });
  //   Vue.$api.SchoolService.GetSchoolInfo();
  // }
  // else
    next();
  
});

export default router;
