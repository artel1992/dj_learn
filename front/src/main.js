import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Axios from "./plugins/http";
import router from  './router'
import store from './store'
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    VueRouter,
    router,
    store,
    Axios
}).$mount('#app')
