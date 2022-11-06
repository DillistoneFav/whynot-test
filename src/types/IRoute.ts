import type Vue from 'vue'

export interface IRoute {
    path: string,
    name: string,
    component: Vue.Component
}
