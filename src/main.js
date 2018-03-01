import Vue from 'vue'
import router from './router'
import mtui from './js/mtui'
import './styles/mtui.less';
import mttt from '../dist/mtui.min';
console.log(mttt)
new Vue({
  el: '#app',
  router,
}).$mount('#app')
