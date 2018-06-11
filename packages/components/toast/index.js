import Vue from 'vue';
import Toast from './toast';

// this.$Toast('操作成功', 3000);
function configOptions(ag) {
  let options = {};
  const len = ag.length;
  if (len === 0) {
    throw Error('$Toast必须传入一个字符串作为参数');
  }
  if (len === 2) {
    if (typeof ag[1] === 'object') {
      options = {
        ...ag[1],
        content: ag[0],
      };
    } else {
      options = {
        content: ag[0],
        time: ag[1],
      };
    }
  }
  if (len === 1) {
    options.content = ag[0];
  }
  return options;
}
let tc;
const ToastConstructor = Vue.extend(Toast);
ToastConstructor.prototype.close = function () {
  if (this.timeOut) {
    clearTimeout(this.timeOut);
    this.timeOut = undefined;
  }
  this.visible = false;
};
function config(options) {
  Object.keys(options).forEach((key) => {
    tc[key] = options[key];
  });
  tc.callback = tc.callback || function () {};
}

function show(options) {
  config(options);
  const vm = tc.$mount();
  document.body.appendChild(vm.$el);
  tc.visible = true;
  tc.timeOut = setTimeout(() => {
    tc.close();
    tc.callback();
  }, tc.time);
}

function MtToast(...ag) {
  const options = configOptions(ag);
  if (!tc) {
    tc = new ToastConstructor();
  }
  if (tc.timeOut) {
    return tc;
  }
  show(options);
  return tc;
}

export default MtToast;
