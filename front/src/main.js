import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Axios from "./plugins/http";
import router from  './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    VueRouter,
    router,
    store,
    Axios
}).$mount('#app')
