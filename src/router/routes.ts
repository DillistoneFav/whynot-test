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
        name: 'Преимущества Tele2',
        component: Advantages
    },
    {
        path: '/rates',
        name: 'Тарифы',
        component: Rates
    },
    {
        path: '/stocks',
        name: 'Акции и спецпредложения',
        component: Stocks
    },
    {
        path: '/promo',
        name: 'Промотариф Tele2',
        component: Promo
    },
    {
        path: '/esim',
        name: 'Технология eSIM',
        component: EsimTech
    },
    {
        path: '/subscribers',
        name: 'Подключение нового абонента',
        component: Subscribers
    },
]
