import Vue from 'vue';
import loading from './loading';

const Loading = Vue.extend(loading);
let singleLoading;


export default {
  name: 'mt-loading',
  open(options = {}) {
    if (!singleLoading) {
      singleLoading = new Loading();
    }
    if (singleLoading.visible) return;
    if (typeof options === 'string') {
      singleLoading.text = options;
    } else {
      Object.keys(options).map((key) => {
        singleLoading[key] = options[key];
        return key;
      });
    }
    const vm = singleLoading.$mount();
    document.body.appendChild(vm.$el);
    Vue.nextTick(() => {
      singleLoading.visible = true;
    });
  },
  close() {
    if (!singleLoading || !singleLoading.visible) {
      return;
    }
    singleLoading.visible = false;
  },
};
