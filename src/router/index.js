import Vue from 'vue';
//1.引入vue-router
import VueRouter from 'vue-router';
//使用vue-router
Vue.use(VueRouter);
import Home from '../pages/Home.vue';
import Cart from '../pages/Cart.vue';
import Classify from '../pages/Classify.vue';
import Mine from '../pages/Mine.vue';
import Reg from '../pages/Reg.vue';
import Login from '../pages/Login.vue';
import List from '../pages/List.vue';
import Detail from '../pages/Detail.vue';
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

        },
        {
            path: '/reg',
            component: Reg
        },
        {
            path: '/login',
            component: Login
        }, {

            name: "list",
            path: "/list",
            component: List
        }, {

            name: "detail",
            path: "/detail",
            component: Detail
        }

    ]
})
export default router;