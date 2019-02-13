import './util/rem';
import Toast from './components/toast';
import loading from './components/loading';
import mtActionsheet from './components/action-sheet';
import mtMessageBox from './components/message-box';
import mtSpinner from './components/spinner';
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
import mtDirectives from './components/directives';
import mtBadge from './components/badge';
import mtStepper from './components/stepper';
import mtSwitch from './components/switch';
import mtTabBar from './components/tabbar';
import mtSearchbar from './components/searchbar';
import mtTabs from './components/tabs';
import mtNothing from './components/nothing';
import datePicker from './components/js-picker/datePicker';
import picker from './components/js-picker/picker';
import loadMore from './components/load-more';
import mtPopup from './components/popup';

import mtGrid from './components/grid'
import mtSteps from './components/steps'
import mtNumberKeyboard from './components/numberKeyboard'
import mtCodebox from './components/codebox'
import mtTabContainer from './components/tab-container'
import mtTabContainerItem from './components/tab-container-item'
import mtuiButton from './components/mtButton'

import './styles/mtui.less';

const components = [
  mtActionsheet,
  mtSpinner,
  loading,
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
  mtBadge,
  mtStepper,
  mtSwitch,
  mtTabBar,
  mtSearchbar,
  mtTabs,
  mtNothing,
  loadMore,
  mtPopup,

  mtGrid,
  mtSteps,
  mtNumberKeyboard,
  mtCodebox,
  mtTabContainer,
  mtTabContainerItem,
  mtuiButton,
];
const version = '2.0.0';
const install = (Vue, config = {}) => {
  if (install.installed) return;
  Vue.prototype.$MTUI_CONFIG = config
  // Vue.prototype.$config.ColorPrimary = config.ColorPrimary || 'red'
  components.map((component) => {
    Vue.component(component.name, component);
    return component;
  });
  Vue.prototype.$messagebox = mtMessageBox;
  Vue.prototype.$Toast = Toast;
  Vue.prototype.$loading = loading;
  Vue.prototype.$datePicker = datePicker;
  Vue.prototype.$picker = picker;
  // 全局添加自定义指令
  Object.keys(mtDirectives).forEach(k => Vue.directive(k, mtDirectives[k]));
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
  mtBadge,
  mtStepper,
  mtSwitch,
  mtTabBar,
  mtSearchbar,
  mtTabs,
  mtDirectives,
  mtNothing,
  loadMore,
  mtPopup,
  
  mtGrid,
  mtSteps,
  mtNumberKeyboard,
  mtCodebox,
  mtTabContainer,
  mtTabContainerItem,
  mtuiButton,
};
export default MTUI;
export {
  install,
  version,
  Toast,
  loading,
  mtActionsheet,
  mtMessageBox,
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
  mtBadge,
  mtStepper,
  mtSwitch,
  mtTabBar,
  mtSearchbar,
  mtTabs,
  mtDirectives,
  mtNothing,
  loadMore,
  mtPopup,
  
  mtGrid,
  mtSteps,
  mtNumberKeyboard,
  mtCodebox,
  mtTabContainer,
  mtTabContainerItem,
  mtuiButton,
};
