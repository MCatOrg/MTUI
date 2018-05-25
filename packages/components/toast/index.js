import Vue from 'vue';
import Toast from './toast';

// this.$Toast('操作成功', 3000);
// 删除当前目标
const removeDom = (event) => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
};
function configOptions(ag) {
  let options = {};
  const len = ag.length;
  if (len === 0) {
    throw Error('$Toast必训传入一个字符串作为参数');
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
const ToastConstructor = Vue.extend(Toast);
ToastConstructor.prototype.config = function (options) {
  Object.keys(options).forEach((key) => {
    this[key] = options[key];
  });
  this.callback = this.callback || function () {};
};
ToastConstructor.prototype.show = function (options) {
  this.config(options);
  this.vm = this.$mount();
  document.body.appendChild(this.vm.$el);
  this.visible = true;
  this.timeOut = setTimeout(() => {
    this.close();
    this.callback();
  }, this.time);
};
ToastConstructor.prototype.close = function () {
  if (this.timeOut) {
    clearTimeout(this.timeOut);
  }
  this.$el.addEventListener('transitionend', removeDom);
  this.visible = false;
};


function MtToast(...ag) {
  const options = configOptions(ag);
  const tc = new ToastConstructor();
  tc.show(options);
  return tc;
}

export default MtToast;
