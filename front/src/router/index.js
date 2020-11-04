import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/Main";
import Cars from "../components/Cars";
import Car from "../components/Car";
import Card from "../components/Card"
import Story from "../components/Story";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/cars',
        name: 'Cars model',
        component: Cars,
    },
    {
        path: '/cars/:id',
        name: 'Car',
        component: Car
    },
    {
        path: '/card',
        name: 'Card',
        component: Card
    },
    {
        path: '/story',
        name: 'Story',
        component: Story
    }
]

export default new VueRouter({routes, mode: 'history', base: process.env.BASE_URL})