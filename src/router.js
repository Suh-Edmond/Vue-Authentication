import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '@/components/Home.vue'
import Register from '@/components/Authentication/Register.vue'
import Login from '@/components/Authentication/Login.vue'
import Profile from '@/components/User/Profile.vue'
import Dashboard from '@/components/User/Dashboard.vue'
export default new VueRouter({
    mode:'history',
    base:__dirname,
    routes:[
        {
            path:"/",
            component:Home,
            name:"home"
        },
        {
            path:"/dashboard",
            component:Dashboard,
            name:"dashboard"
        },
        {
            path:"/user/register",
            component:Register,
            name:'register'
        },
        {
            path:"/user/login",
            component:Login,
            name:"login"
        },
        {
            path:"/user/profile",
            component:Profile,
            name:"profile"
        }
    ]
})