import Vue from 'vue';
import App from './App';
import router from './router';
import MTUI from '../packages/index';
import '../packages/styles/mtui.less';

Vue.use(MTUI.install); // 载入MTUI

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

