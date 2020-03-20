import Vue from 'vue'
import Router from 'vue-router'
import Home from './vue/Home.vue'
import NotFound from './vue/error/Notfound.vue'
import Counter from './vue/components/Counter.vue'

Vue.use(Router);
const router = new Router({
    linkActiveClass: 'link-active',
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            alias: ['/home'],
        },
        {
            path: '*',
            name: '404',
            component : NotFound
        },
        {
            path: '/counter',
            name: 'Contador',
            component : Counter
        }
    ],
});
export default router;