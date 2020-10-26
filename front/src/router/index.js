import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/Main";
import Cars from "../components/Cars";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/cars',
        name: 'Cars',
        component: Cars
    }
]

export default new VueRouter({routes, mode: 'history', base: process.env.BASE_URL})