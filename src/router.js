import Vue from 'vue';
import Router from 'vue-router';
import Top from './components/Top.vue';
import Works from './components/Works.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [ { path: '/', component: Top },
            { path: '/works', component: Works },
            { path: '/about', component: About },
            { path: '/contact', component: Contact } ]
});
