import type {IRoute} from "@/types/IRoute";
import Advantages from "@/pages/Advantages.vue";
import Rates from "@/pages/Rates.vue";
import Stocks from "@/pages/Stocks.vue";
import Promo from "@/pages/Promo.vue";
import EsimTech from "@/pages/EsimTech.vue";
import Subscribers from "@/pages/Subscribers.vue";

export const routes: IRoute[] = [
    {
        path: '/advantages',
        name: 'advantages',
        component: Advantages
    },
    {
        path: '/rates',
        name: 'rates',
        component: Rates
    },
    {
        path: '/stocks',
        name: 'stocks',
        component: Stocks
    },
    {
        path: '/promo',
        name: 'promo',
        component: Promo
    },
    {
        path: '/esim',
        name: 'esim',
        component: EsimTech
    },
    {
        path: '/subscribers',
        name: 'subscribers',
        component: Subscribers
    },
]
