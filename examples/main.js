import Vue from 'vue';
import App from './App';
import router from './router/router';
import MTUI from '~/index';
// import MTUI from '../lib/mtui';
// import '../lib/mtui.css';

Vue.use(MTUI, {
  ColorPrimary: 'rgb(65,105,225)',
  ColorSuccess: '',
  ColorInfo: '',
  ColorWarning: '',
  ColorDanger: '',
  ColorText: ''
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

