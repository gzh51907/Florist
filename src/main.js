import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
import "./rem.js";
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// import axios from 'axions';
// Vue.prototype.$axios = axios;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')