import './util/rem';
import Toast from './components/toast';
import loading from './components/loading';
import mtActionsheet from './components/action-sheet';
import mtMessageBox from './components/message-box';
import mtSpinner from './components/spinner';
import mtLoadMore from './components/loadmore';
import './styles/mtui.less';

const components = [
  Toast,
  mtActionsheet,
  mtSpinner,
  loading,
  mtLoadMore,
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
  Vue.prototype.$loading = loading;
};
// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  version,
  Toast,
  loading,
  mtActionsheet,
  mtMessageBox,
  mtSpinner,
  mtLoadMore,
};
export {
  install,
  version,
  Toast,
  loading,
  mtActionsheet,
  mtMessageBox,
  mtLoadMore,
};
