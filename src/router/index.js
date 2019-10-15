import Vue from 'vue';
//1.引入vue-router
import VueRouter from 'vue-router';
//使用vue-router
Vue.use(VueRouter);
import Home from '../pages/Home.vue';
import Cart from '../pages/Cart.vue';
import Classify from '../pages/Classify.vue';
import Mine from '../pages/Mine.vue';
let router = new VueRouter({
    routes: [{
            name: 'home',
            path: '/home',
            component: Home,
        },
        {

            path: '/',
            redirect: '/home',
        },
        {
            name: "classify",
            path: "/classify",
            component: Classify
        },
        {
            name: "cart",
            path: "/cart",
            component: Cart,

        },
        {
            name: "mine",
            path: "/mine",
            component: Mine,

        }
    ]
})
export default router;