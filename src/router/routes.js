import Vue from "vue";
import VueRouter from "vue-router";

import Home from '../components/HcodeSectionBanner'
import News from '../components/HcodeSectionNews'
import Notice from '../components/HcodeSectionNotice'
import Hcode404 from '../components/HcodeErro404'

Vue.use(VueRouter)

export default new VueRouter({
    linkExactActiveClass: 'link-active',
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/news',
            component: News,
            alias: '/notices'
        },
        {
            path: '/news/:idnotice',
            name: 'notice',
            component: Notice
        },
        {
            path: '/admin',
            redirect: '/'
        },
        {
            path: '*',
            component: Hcode404
        }
    ]
})