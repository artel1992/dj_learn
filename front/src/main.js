import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Axios from "./plugins/http";
import router from './router'
import store from './store'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import './assets/css/style.css'
import 'aos/dist/aos.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
// import Loading from "element-ui/packages/loading/src";

Vue.prototype.$axios = Axios
Vue.use(ElementUI)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
// Vue.use(Loading)


new Vue({
    render: h => h(App),
    VueRouter,
    router,
    store,
    Axios
}).$mount('#app')


