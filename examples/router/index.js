import Vue from 'vue';
import Router from 'vue-router';
import index from '@/pages/index';
import actionSheet from '@/pages/action-sheet';
import messageBox from '@/pages/message-box';
import spinner from '@/pages/spinner';
import loading from '@/pages/loading';
import loadmore from '@/pages/loadmore';
import tabContainer from '@/pages/tab-container';
import lazyload from '@/pages/lazyload';
import swipe from '@/pages/swipe';
import touchRipple from '@/pages/touchRipple';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: index,
    },
    {
      path: '/actionsheet',
      name: 'actionsheet',
      component: actionSheet,
    },
    {
      path: '/messageBox',
      name: 'messageBox',
      component: messageBox,
    },
    {
      path: '/spinner',
      name: 'spinner',
      component: spinner,
    },
    {
      path: '/loading',
      name: 'loading',
      component: loading,
    },
    {
      path: '/loadmore',
      name: 'loadmore',
      component: loadmore,
    },
    {
      path: '/tabContainer',
      name: 'tabContainer',
      component: tabContainer,
    },
    {
      path: '/lazyload',
      name: 'lazyload',
      component: lazyload,
    },
    {
      path: '/swipe',
      name: 'swipe',
      component: swipe,
    },
    {
      path: '/touchRipple',
      name: 'touchRipple',
      component: touchRipple,
    },
  ],
});
