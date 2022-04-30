import Vue from "vue";
import VueRouter from "vue-router";
import Main from '../views/Main.vue'
import User from '../views/User/User.vue'
import Home from '../views/Home/Home.vue'
Vue.use(VueRouter);
const routes=[
    {
        path:'/',
        name:'Main',
        component:Main,
        children:[
            {
                path:'/home',
                component:Home,
                name:'home'
            },
            {
                path:'/user',
                name:'user',
                component:User
            }
        ]
    },
 
]
const routers = new VueRouter({
    mode:'history',
    routes
})
export default routers