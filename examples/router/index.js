import Vue from 'vue';
import Router from 'vue-router';
import index from '@/pages/index';
import Button from '@/components/button';
import Radio from '@/components/radio';
import Checkbox from '@/components/checkbox';
import Cell from '@/components/cell';
import Input from '@/components/input';
import Accordion from '@/components/accordion';
import Slider from '@/components/slider';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: index,
    }, {
      path: '/button', // Button
      name: 'Button',
      component: Button,
    }, {
      path: '/radio', // radio
      name: 'Radio',
      component: Radio,
    }, {
      path: '/checkbox', // checkbox
      name: 'Checkbox',
      component: Checkbox,
    }, {
      path: '/cell', // cell
      name: 'Cell',
      component: Cell,
    }, {
      path: '/input', // input
      name: 'Input',
      component: Input,
    }, {
      path: '/accordion', // Accordion
      name: 'Accordion',
      component: Accordion,
    }, {
      path: '/slider', // Slider
      name: 'Slider',
      component: Slider,
    },
  ],
});
