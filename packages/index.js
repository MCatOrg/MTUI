import './util/rem';
import Toast from './components/toast';
import mtActionsheet from './components/action-sheet';
import mtMessageBox from './components/message-box';
import './styles/mtui.less';

const components = [
  Toast,
  mtActionsheet,
];
const version = '1.0.0';
const install = (Vue) => {
  if (install.installed) return;
  components.map((component) => {
    Vue.component(component.name, component);
    return component;
  });
  Vue.prototype.$messagebox = mtMessageBox;
  Vue.prototype.$Toast = Toast;
};
// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  version,
  Toast,
  mtActionsheet,
  mtMessageBox,
};
export {
  install,
  version,
  Toast,
  mtActionsheet,
  mtMessageBox,
};
