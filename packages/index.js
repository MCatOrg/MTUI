import './util/rem';
import Toast from './components/toast';
import mtActionsheet from './components/action-sheet';
import mtMessageBox from './components/message-box';
import mtSpinner from './components/spinner';
import './styles/mtui.less';

const components = [
  Toast,
  mtActionsheet,
  mtSpinner,
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
  mtSpinner,
};
export {
  install,
  version,
  Toast,
  mtActionsheet,
  mtMessageBox,
};
