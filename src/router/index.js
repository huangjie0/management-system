import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home.vue'
Vue.use(VueRouter);
const routes=[
    {
        path:'/',
        name:'Home',
        component:Home
    }
]
const routers = new VueRouter({
    mode:'history',
    routes
})
export default routers