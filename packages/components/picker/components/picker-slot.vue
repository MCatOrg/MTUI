<template>
  <div class="picker-slot"
  :class="classNames"
  :style="flexStyle">
    <div v-if="!delimiter" ref="wrapper" class="picker-slot-wrapper"
    :class="{dragging:dragging}"
    :style="{height:contentHeight+'px'}">
      <div class="picker-item"
      v-for="(itemValue ,index) in mutatingValues" :key="index"
      :class="{'picker-selected':itemValue===currentValue}"
      :style="{height: itemHeight+'px',
      lineHeight: itemHeight + 'px',
      color:itemValue===currentValue?selectedColor:''}">
        {{itemValue|fItemValue}}
      </div>
    </div>
    <div v-if="delimiter">{{content}}</div>
  </div>
</template>
<script>
import emitter from '~/util/emitter';
import { once, addClass, removeClass } from '~/util/domUtil';
import translateUtil from '../translate';
import draggable from '../draggable';

const rotateElement = function (element, angle) {
  if (!element) return;
  const transformProperty = translateUtil.transformProperty;

  element.style[transformProperty] = `${element.style[transformProperty].replace(/rotateX\(.+?deg\)/gi, '')} rotateX(${angle}deg)`;
};
const VISIBLE_ITEMS_ANGLE_MAP = {
  3: -45,
  5: -20,
  7: -15,
};


export default {
  name: 'picker-slot',
  props: {
    values: {
      type: Array,
      default() {
        return [];
      },
    },
    value: {},
    delimiter: {
      type: Boolean,
      default: false,
    },
    rotateEffect: {
      type: Boolean,
      default: false,
    },
    valueKey: String,
    content: {
      type: [String, Number],
    },
    flex: {
      type: [String, Number],
    },
    textAlign: String,
    className: String,
    itemHeight: {
      type: Number,
      default: 30,
    },
    defaultIndex: {
      type: Number,
      default: 0,
    },
    visibleItemCount: {
      type: Number,
      default: 5,
    },
    selectedColor: {
      type: String,
      default: '#000',
    },
  },
  data() {
    return {
      dragging: false,
      currentValue: this.value,
      mutatingValues: this.values,
      animationFrameId: null,
    };
  },
  mixins: [emitter],
  computed: {
    flexStyle() {
      return {
        flex: this.flex,
        '-webkit-box-flex': this.flex,
        '-moz-box-flex': this.flex,
        '-ms-flex': this.flex,
      };
    },
    classNames() {
      const PREFIX = 'picker-slot-';
      const classArray = [];
      if (this.rotateEffect) {
        classArray.push(`${PREFIX}absolute`);
      }
      const textAlign = this.textAlign || 'center';
      classArray.push(PREFIX + textAlign);

      if (this.delimiter) {
        classArray.push(`${PREFIX}divider`);
      }

      if (this.className) {
        classArray.push(this.className);
      }
      return classArray.join(' ');
    },
    contentHeight() {
      return this.itemHeight * this.visibleItemCount;
    },
    valueIndex() {
      const valueKey = this.valueKey;
      if (this.currentValue instanceof Object) {
        for (let i = 0, len = this.mutatingValues.length; i < len; i++) {
          if (this.currentValue[valueKey] === this.mutatingValues[i][valueKey]) {
            return i;
          }
        }
        return -1;
      }
      return this.mutatingValues.indexOf(this.currentValue);
    },
    dragRange() {
      const values = this.mutatingValues;
      const visibleItemCount = this.visibleItemCount;
      const itemHeight = this.itemHeight;
      return [-itemHeight * (values.length - Math.ceil(visibleItemCount / 2)),
        itemHeight * Math.floor(visibleItemCount / 2)];
    },
    minTranslateY() {
      return this.itemHeight * (Math.ceil(this.visibleItemCount / 2) - this.mutatingValues.length);
    },
    maxTranslateY() {
      return this.itemHeight * Math.floor(this.visibleItemCount / 2);
    },
  },
  methods: {
    value2Translate(value) {
      const values = this.mutatingValues;
      const valueIndex = values.indexOf(value);
      const offset = Math.floor(this.visibleItemCount / 2);
      const itemHeight = this.itemHeight;
      if (valueIndex !== -1) {
        return (valueIndex - offset) * -itemHeight;
      }
      return 0;
    },
    translate2Value(translate) {
      const itemHeight = this.itemHeight;
      translate = Math.round(translate / itemHeight) * itemHeight;
      const index = -(translate - (Math.floor(this.visibleItemCount / 2) * itemHeight))
      / itemHeight;
      return this.mutatingValues[index];
    },
    updateRotate(currentTranslate, pickerItems) {
      if (this.delimiter) return;
      const dragRange = this.dragRange;
      const wrapper = this.$refs.wrapper;

      if (!pickerItems) {
        pickerItems = wrapper.querySelectorAll('.picker-item');
      }

      if (currentTranslate === undefined) {
        currentTranslate = translateUtil.getElementTranslate(wrapper).top;
      }

      const itemsFit = Math.ceil(this.visibleItemCount / 2);
      const angleUnit = VISIBLE_ITEMS_ANGLE_MAP[this.visibleItemCount] || -20;

      [].forEach.call(pickerItems, (item, index) => {
        const itemOffsetTop = index * this.itemHeight;
        const translateOffset = dragRange[1] - currentTranslate;
        const itemOffset = itemOffsetTop - translateOffset;
        const percentage = itemOffset / this.itemHeight;

        let angle = angleUnit * percentage;
        if (angle > 180) angle = 180;
        if (angle < -180) angle = -180;

        rotateElement(item, angle);

        if (Math.abs(percentage) > itemsFit) {
          addClass(item, 'picker-item-far');
        } else {
          removeClass(item, 'picker-item-far');
        }
      });
    },
    planUpdateRotate() {
      const el = this.$refs.wrapper;
      cancelAnimationFrame(this.animationFrameId);

      this.animationFrameId = requestAnimationFrame(() => {
        this.updateRotate();
      });

      once(el, translateUtil.transitionEndProperty, () => {
        cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = null;
      });
    },
    initEvents() {
      const el = this.$refs.wrapper;
      let dragState = {};

      let velocityTranslate;
      let prevTranslate;
      let pickerItems;

      draggable(el, {
        start: (event) => {
          cancelAnimationFrame(this.animationFrameId);
          this.animationFrameId = null;
          dragState = {
            range: this.dragRange,
            start: new Date(),
            startLeft: event.pageX,
            startTop: event.pageY,
            startTranslateTop: translateUtil.getElementTranslate(el).top,
          };
          pickerItems = el.querySelectorAll('.picker-item');
        },

        drag: (event) => {
          this.dragging = true;

          dragState.left = event.pageX;
          dragState.top = event.pageY;

          const deltaY = dragState.top - dragState.startTop;
          const translate = dragState.startTranslateTop + deltaY;

          translateUtil.translateElement(el, null, translate);

          velocityTranslate = translate - prevTranslate || translate;

          prevTranslate = translate;

          if (this.rotateEffect) {
            this.updateRotate(prevTranslate, pickerItems);
          }
        },

        end: (event) => {
          this.dragging = false;
          const momentumRatio = 7;
          let currentTranslate = translateUtil.getElementTranslate(el).top;
          const duration = new Date() - dragState.start;
          const distance = Math.abs(dragState.startTranslateTop - currentTranslate);
          const itemHeight = this.itemHeight;
          const visibleItemCount = this.visibleItemCount;

          let rect;
          let offset;
          if (distance < 6) {
            rect = this.$el.getBoundingClientRect();
            offset = Math.floor((event.clientY -
            (rect.top + ((visibleItemCount - 1) * (itemHeight / 2)))) / itemHeight) * itemHeight;

            if (offset > this.maxTranslateY) {
              offset = this.maxTranslateY;
            }

            velocityTranslate = 0;
            currentTranslate -= offset;
          }

          let momentumTranslate;
          if (duration < 300) {
            momentumTranslate = currentTranslate + (velocityTranslate * momentumRatio);
          }

          const dragRange = dragState.range;

          this.$nextTick(() => {
            let translate;
            if (momentumTranslate) {
              translate = Math.round(momentumTranslate / itemHeight) * itemHeight;
            } else {
              translate = Math.round(currentTranslate / itemHeight) * itemHeight;
            }

            translate = Math.max(Math.min(translate, dragRange[1]), dragRange[0]);

            translateUtil.translateElement(el, null, translate);

            this.currentValue = this.translate2Value(translate);

            if (this.rotateEffect) {
              this.planUpdateRotate();
            }
          });

          dragState = {};
        },
      });
    },
    doOnValueChange() {
      const value = this.currentValue;
      const wrapper = this.$refs.wrapper;
      translateUtil.translateElement(wrapper, null, this.value2Translate(value));
    },
    doOnValuesChange() {
      const el = this.$el;
      const items = el.querySelectorAll('.picker-item');
      [].forEach.call(items, (item, index) => {
        translateUtil.translateElement(item, null, this.itemHeight * index);
      });
      if (this.rotateEffect) {
        this.planUpdateRotate();
      }
    },
  },
  mounted() {
    this.ready = true;
    if (!this.delimiter) {
      this.initEvents();
      this.doOnValueChange();
    }
    if (this.rotateEffect) {
      this.doOnValuesChange();
    }
  },
  watch: {
    values(val) {
      this.mutatingValues = val;
    },

    mutatingValues(val) {
      if (this.valueIndex === -1) {
        this.currentValue = (val || [])[0];
      }
      if (this.rotateEffect) {
        this.$nextTick(() => {
          this.doOnValuesChange();
        });
      }
    },
    currentValue(val) {
      this.doOnValueChange();
      if (this.rotateEffect) {
        this.planUpdateRotate();
      }
      this.$emit('input', val);
      this.$emit('slotValueChange', this);
    },
    defaultIndex(val) {
      if ((this.mutatingValues[val] !== undefined) && (this.mutatingValues.length >= val + 1)) {
        this.currentValue = this.mutatingValues[val];
      }
    },
  },
  filters: {
    fItemValue(val) {
      if (typeof val === 'object' && (val[this.valueKey] !== undefined)) {
        return val[this.valueKey];
      }
      return val;
    },
  },
};
</script>
