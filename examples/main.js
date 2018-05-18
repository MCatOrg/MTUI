import Vue from 'vue';
import App from './App';
import router from './router';
import { install } from '../packages/index';

Vue.use(install); // 载入MTUI

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

