import Vue from 'vue';
import App from './App';
import router from './router/router';
import MTUI from '~/index';
// import MTUI from '../lib/mtui';
// import '../lib/mtui.css';

Vue.use(MTUI, {
  ColorPrimary: 'green'
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

