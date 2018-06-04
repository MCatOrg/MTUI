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
import mtSwipe from './components/swipe';
import mtSwipeItem from './components/swipe-item';
import mtTouchRipple from './components/touchRipple';
import mtButton from './components/button';
import mtCell from './components/cell';
import mtCellG from './components/cell-g';
import mtRadio from './components/radio';
import mtChecklist from './components/checklist';
import mtAccordion from './components/accordion';
import mtInput from './components/input';
import mtSlider from './components/slider';
import mtUploader from './components/uploader';
import mtBigPicture from './components/bigPicture';
import './styles/mtui.less';

const loadingImg = require('./assets/img.svg');
const errorImg = require('./assets/error-sign.svg');

const components = [
  mtActionsheet,
  mtSpinner,
  loading,
  mtLoadMore,
  mtTabContainer,
  mtTabContainerItem,
  mtSwipeItem,
  mtSwipe,
  mtTouchRipple,
  mtButton,
  mtCell,
  mtCellG,
  mtRadio,
  mtChecklist,
  mtAccordion,
  mtInput,
  mtSlider,
  mtUploader,
  mtBigPicture,
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
const MTUI = {
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
  mtSwipeItem,
  mtSwipe,
  mtTouchRipple,
  mtButton,
  mtCell,
  mtCellG,
  mtRadio,
  mtChecklist,
  mtAccordion,
  mtInput,
  mtSlider,
  mtUploader,
  mtBigPicture,
};
export default MTUI;
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
  mtSwipeItem,
  mtSwipe,
  mtTouchRipple,
  mtButton,
  mtCell,
  mtCellG,
  mtRadio,
  mtChecklist,
  mtAccordion,
  mtInput,
  mtSlider,
  mtUploader,
  mtBigPicture,
};
