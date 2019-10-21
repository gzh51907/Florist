import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import goodlist from '../pages/goodlist.vue';
import userlist from '../pages/userlist.vue';
import adduser from '../pages/adduser.vue';
import order from '../pages/order.vue';
let router = new VueRouter({
    routes: [{
            name: 'goodlist',
            path: '/goodlist',
            component: goodlist,
        },
        {
            name: "userlist",
            path: "/userlist",
            component: userlist
        },
        {
            name: "adduser",
            path: "/adduser",
            component: adduser,

        },
        {
            name: "order",
            path: "/order",
            component: order,

        }

    ]
})
export default router;