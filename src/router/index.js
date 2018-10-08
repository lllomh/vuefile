import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


import home from '@/views/home'
import guide from '@/views/guide'
import api from '@/views/api'
import styleguide from '@/views/styleguide'
import cookbook from '@/views/coobook'



const routes = [
  {
    path: '/',
    name: 'home',
    component: home
   },
    {
        path: '/guide',
        name: 'guide',
        component: guide
    },
    {
        path: '/api',
        name: 'api',
        component: api
    },
    {
        path: '/styleguide',
        name: 'styleguide',
        component: styleguide
    },
    {
        path: '/cookbook',
        name: 'cookbook',
        component: cookbook
    }

]

const router = new Router({
  routes
})

export default router
