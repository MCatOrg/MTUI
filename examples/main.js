import Vue from 'vue';
import App from './App';
import router from './router';
import MTUI from '~/index';
// import MTUI from '../lib/mtui';
// import '../lib/index.css';

Vue.use(MTUI); // 载入MTUI

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

