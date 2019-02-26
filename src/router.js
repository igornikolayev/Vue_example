import Vue from 'vue'
import Router from 'vue-router'
import AppSingle from './components/AppSingle.vue'
import AppMultiplayer from './components/AppMultiplayer.vue'
import AppHome from './components/AppHome.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/single',
        name: 'single',
        component: AppSingle
    },
    {
        path: '/multiplayer',
        name: 'multiplayer',
        component: AppMultiplayer
    },
    {
        path: '/',
        name: 'header',
        component: AppHome
    },

    ]
})