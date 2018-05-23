import './util/rem';
import Toast from './components/toast';
import loading from './components/loading';
import mtActionsheet from './components/action-sheet';
import mtMessageBox from './components/message-box';
import mtSpinner from './components/spinner';
import mtLoadMore from './components/loadmore';
import mtTabContainer from './components/tab-container';
import mtTabContainerItem from './components/tab-container-item';
import mtLazyload from './components/lazyload';
import './styles/mtui.less';

const loadingImg = require('./assets/img.svg');
const errorImg = require('./assets/error-sign.svg');

const components = [
  Toast,
  mtActionsheet,
  mtSpinner,
  loading,
  mtLoadMore,
  mtTabContainer,
  mtTabContainerItem,
];
const version = '1.0.0';
const install = (Vue, config = {}) => {
  if (install.installed) return;
  components.map((component) => {
    Vue.component(component.name, component);
    return component;
  });
  Vue.use(mtLazyload, Object.assign({
    loading: loadingImg,
    attempt: 3,
    error: errorImg,
  }, config.lazyload));
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
  mtTabContainer,
  mtTabContainerItem,
};
export {
  install,
  version,
  Toast,
  loading,
  mtActionsheet,
  mtMessageBox,
  mtLoadMore,
  mtTabContainer,
  mtTabContainerItem,
};
