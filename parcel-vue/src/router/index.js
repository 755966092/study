import Vue from "vue"
import VueRouter from "vue-router"

import news from "../components/news.vue"
import foods from "../components/foods.vue"

Vue.use(VueRouter)


const router = new VueRouter({
    routes: [{
            path: "/news",
            component: news
        },
        {
            path: "/foods",
            component: foods
        }
    ]
})

export default router