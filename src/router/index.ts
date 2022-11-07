import { createRouter, createWebHistory } from 'vue-router'
import {routes} from "@/router/routes";
import StartPage from "@/pages/Index.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Стартовая страница',
      component:StartPage
    },
    ...routes
  ],
})

export default router
