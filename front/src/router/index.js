import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/Main";

Vue.use(VueRouter)
//
const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    }
]

export default new VueRouter({routes, mode: 'history', base: process.env.BASE_URL})