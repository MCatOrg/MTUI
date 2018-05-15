import Vue from 'vue';
import Router from 'vue-router';
import index from '@/pages/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: index,
    },
  ],
});
