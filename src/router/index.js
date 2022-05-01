import Vue from "vue";
import VueRouter from "vue-router";
import Main from '../views/Main.vue'
import User from '../views/User/User.vue'
import Home from '../views/Home/Home.vue'
import Mall from '../views/Mall/mall.vue'
import PageOne from '../views/Other/pageOne.vue'
import PageTwo from '../views/Other/pageTwo.vue'
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
            },
            {
                path:'/mall',
                name:'mall',
                component:Mall
            },
            {
                path:'/page1',
                name:'page1',
                component:PageOne
            },
            {
                path:'/page2',
                name:'page2',
                component:PageTwo
            }
        ]
    },
 
]
const routers = new VueRouter({
    mode:'history',
    routes
})
export default routers