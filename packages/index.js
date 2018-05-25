import './util/rem';
import Toast from './components/toast';
import mtButton from './components/button';
import mtAccordion from './components/accordion';
import mtCell from './components/cell';
import mtRadio from './components/radio';
import mtCheckbox from './components/checkbox';
import mtInput from './components/input';
import mtSlider from './components/slider';

import './styles/mtui.less';

const components = [
  Toast,
  mtButton,
  mtCell,
  mtRadio,
  mtCheckbox,
  mtInput,
  mtAccordion,
  mtSlider,
];
const version = '1.0.0';
const install = (Vue) => {
  if (install.installed) return;
  components.map((component) => {
    Vue.component(component.name, component);
    return component;
  });
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
  mtButton,
  mtCell,
  mtRadio,
  mtCheckbox,
  mtInput,
  mtAccordion,
  mtSlider,
};
