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
  bindEvent();
  const vm = tc.$mount();
  document.body.appendChild(vm.$el);
  tc.visible = true;
  tc.timeOut = setTimeout(() => {
    tc.close();
    tc.callback();
    removeEvent();
  }, tc.time);
}

/*
 * 当vue-router使用 hsitory的api时，监听 hashchange 是没用的 ,
 * 而 popstate 只能监听浏览器前进后退按钮，对pushState是没法监听的
 * 目前的解决方法是：劫持原生的 pushState, replaceState事件
 * 
 */
(function(history){
    var pushState = history.pushState;
    var replaceState = history.replaceState;
    history.pushState = function(state) {
        if (typeof history.onpushstate == "function") {
            history.onpushstate({state: state});
        }
        // ... whatever else you want to do
        // maybe call onhashchange e.handler
        return pushState.apply(history, arguments);
    };

    history.replaceState = function(state) {
        if (typeof history.onreplaceState == "function") {
            history.onreplaceState({state: state});
        }
        // ... whatever else you want to do
        // maybe call onhashchange e.handler
        return replaceState.apply(history, arguments);
    };
})(window.history);

history.onpushstate = history.onreplaceState = function(e){
  routerChange();
}

function bindEvent(){
  window.addEventListener('load',routerChange,false);
  window.addEventListener('hashchange', routerChange, false);
  window.addEventListener('popstate', routerChange, false);
}

function removeEvent(){
  window.removeEventListener('load',routerChange,false);
  window.removeEventListener('hashchange',routerChange,false);
  window.removeEventListener('popstate',routerChange,false);
}

function routerChange(){
  // console.log('change');
  tc.close();
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
