import Vue from 'vue';

import router from './router';
import App from './App';
import VueResource from 'vue-resource';
import store from './vue/store'
import VueSession from 'vue-session'

Vue.use(VueSession)
Vue.use(VueResource);
new Vue({
    el: '#vue-app',
    store,
    router,
    components: { App },
    template: '<App/>',
});
Vue.prototype.$session.start();
console.log(Vue.prototype.$session.getAll())