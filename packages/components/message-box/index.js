import Vue from 'vue';
import msgboxVue from './message-box';

const CONFIRM_TEXT = '确定';
const CANCEL_TEXT = '取消';
// import { MessageBox } from 'mt-ui';
// MessageBox('提示', '操作成功');
// MessageBox({
//   title: '提示',
//   message: '确定执行此操作?',
//   showCancelButton: true
// });
// MessageBox.alert(message, title);
// MessageBox.confirm(message, title);
// MessageBox.prompt(message, title);
// MessageBox.close()
// this.$messagebox 同上
const MessageBoxConstructor = Vue.extend(msgboxVue);
let msgbox;
function defaultCallback(action) {
  if (typeof msgbox.callback === 'function') {
    msgbox.callback(action);
  }
  if (msgbox.resolve) {
    if (msgbox.prompt || msgbox.textarea) {
      if (action === 'cancel' && msgbox.reject) {
        msgbox.reject(action);
        return;
      }
    }
    msgbox.resolve(action);
  }
}
let defaultConfig = {
  className: '',
  title: '提示',
  message: '',
  prompt: false,
  promptPlaceholder: '',
  textarea: false,
  showConfirmButton: true,
  showCancelButton: false,
  confirmButtonText: CONFIRM_TEXT,
  confirmButtonClass: 'mtui-dialog__btn_primary',
  cancelButtonText: CANCEL_TEXT,
  cancelButtonClass: 'mtui-dialog__btn_default',
  isShow: false,
  closeOnClickModal: false,
  inputVal: '',
  callback: null,
  defaultCallback,
};
const tmpObj = Object.assign({}, defaultConfig);
function showMsg() {
  Object.keys(defaultConfig).forEach((key) => {
    msgbox[key] = defaultConfig[key];
  });
  const vm = msgbox.$mount();
  document.body.appendChild(vm.$el);
  msgbox.isShow = true;
  defaultConfig = Object.assign({}, tmpObj);
  console.log(tmpObj);
}
const initInstance = function () {
  if (!msgbox) {
    msgbox = new MessageBoxConstructor();
  }
  if (typeof Promise !== 'undefined') {
    return new Promise((resolve, reject) => {
      defaultConfig.resolve = resolve;
      defaultConfig.reject = reject;
      showMsg();
    });
  }
  showMsg();
  return msgbox;
};
function MessageBox(...arg) {
  const len = arg.length;
  if (len === 0) {
    throw Error('MessageBox必须传入至少一个字符串或对象作为参数');
  } else if (len === 1) {
    if (typeof arg[0] === 'string') {
      defaultConfig.message = arg[0];
    } else {
      defaultConfig = Object.assign(defaultConfig, arg[0]);
    }
  } else if (len === 2) {
    defaultConfig.message = arg[0];
    defaultConfig.title = arg[1] ? arg[1] : defaultConfig.title;
  } else {
    throw Error('MessageBox参数错误');
  }
  return initInstance();
}
MessageBox.alert = function (message, title, options) {
  if (typeof title === 'string') {
    defaultConfig.title = title;
  }
  return MessageBox(Object.assign(defaultConfig, {
    message,
  }, options));
};
MessageBox.confirm = function (message, title, options) {
  if (typeof title === 'string') {
    defaultConfig.title = title;
  }
  return MessageBox(Object.assign(defaultConfig, {
    message,
    showCancelButton: true,
  }, options));
};
MessageBox.prompt = function (message, title, options) {
  if (typeof title === 'string') {
    defaultConfig.title = title;
  }
  return MessageBox(Object.assign(defaultConfig, {
    message,
    showCancelButton: true,
    prompt: true,
  }, options));
};
MessageBox.close = function () {
  if (msgbox) {
    msgbox.isShow = false;
  }
};
export default MessageBox;
export { MessageBox };
