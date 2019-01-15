import Vue from 'vue';
import Toast from './toast';

/**
 * 设置默认属性
 * @param {[type]} target [description]
 * @param {[type]} source [description]
 */
function setDefault(target,source){
  for(let k in source){
    if(source.hasOwnProperty(k)){
      target[k] = target[k]? target[k]: source[k];
    }
  }
}

let timer = null;

/**
 * 开启定时器
 */
function SetInterval(){
  ClearInterval();
  let oldUrl = window.location.href;
  let newUrl;
  timer = setInterval(function(){
    newUrl = window.location.href;
    // console.log(oldUrl, newUrl)
    if(newUrl!==oldUrl){
      tc&&tc.close();
    }
  },200)
}

/**
 * 关闭定时器
 */
function ClearInterval(){
  clearInterval(timer);
  timer = null;
}

// this.$Toast('操作成功', 3000);
function configOptions(ag) {
  let options = {};
  const len = ag.length;
  if (len === 0) {
    throw Error('$Toast必须传入一个字符串作为参数');
  }
  if (len === 2) {
    if (typeof ag[1] === 'object') {
      setDefault(ag[1],{showMask:false})
      console.log(ag[1].showMask);
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
  ClearInterval();
};
function config(options) {
  setDefault(options,{showMask:false})
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
  SetInterval(); //开启定时器监听路径变化
  tc.timeOut = setTimeout(() => {
    tc.close();
    tc.callback();
    removeEvent();
  }, tc.time);
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
  tc&&tc.close();
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
