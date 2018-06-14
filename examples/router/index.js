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
import button from '@/pages/button';
import cell from '@/pages/cell';
import radio from '@/pages/radio';
import checklist from '@/pages/checklist';
import accordion from '@/pages/accordion';
import input from '@/pages/input';
import slider from '@/pages/slider';
import uploader from '@/pages/uploader';
import bigPicture from '@/pages/bigPicture';
import VConsole from '@/pages/VConsole';
import picker from '@/pages/picker';
import steps from '@/pages/steps';
import search from '@/pages/search';
import tabs from '@/pages/tabs';

Vue.use(Router);

const router = new Router({
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
    {
      path: '/button',
      name: 'button',
      component: button,
    },
    {
      path: '/cell',
      name: 'cell',
      component: cell,
    },
    {
      path: '/radio',
      name: 'radio',
      component: radio,
    },
    {
      path: '/checklist',
      name: 'checklist',
      component: checklist,
    },
    {
      path: '/accordion',
      name: 'accordion',
      component: accordion,
    },
    {
      path: '/input',
      name: 'input',
      component: input,
    },
    {
      path: '/slider',
      name: 'slider',
      component: slider,
    },
    {
      path: '/uploader',
      name: 'uploader',
      component: uploader,
    },
    {
      path: '/bigPicture',
      name: 'bigPicture',
      component: bigPicture,
    },
    {
      path: '/VConsole',
      name: 'VConsole',
      component: VConsole,
    },
    {
      path: '/picker',
      name: 'picker',
      component: picker,
    },
    {
      path: '/badge',
      name: 'badge',
      component: () => import('../pages/badge.vue'),
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import('../pages/grid.vue'),
    },
    {
      path: '/stepper',
      name: 'stepper',
      component: () => import('../pages/stepper.vue'),
    },
    {
      path: '/switch',
      name: 'switch',
      component: () => import('../pages/switch.vue'),
    },
    {
      path: '/tabbar',
      name: 'tabbar',
      component: () => import('../pages/tabbar.vue'),
    },
    {
      path: '/steps',
      name: 'steps',
      component: steps,
    },
    {
      path: '/search',
      name: 'search',
      component: search,
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: tabs,
    },
  ],
});

export default router;
