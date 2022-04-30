import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home.vue'
import User from '../views/User.vue'
Vue.use(VueRouter);
const routes=[
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/user',
        name:'User',
        component:User
    }
]
const routers = new VueRouter({
    mode:'history',
    routes
})
export default routers