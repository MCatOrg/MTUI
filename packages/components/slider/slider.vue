<template>
  <div class="mtui-slider__inner" ref="inner"
  @click="clickEvent" :style="{opacity:disabled?'0.5':'1'}">
      <div
      :style="{width:`${currentValue}%`,'background-color':color}"
      class="mtui-slider__track"></div>
      <div
      @touchstart="dragStart"
      @touchmove="dragMove"
      @mousedown="dragStart"
      :style="{left:`${currentValue}%`}"
      class="mtui-slider__handler" ref="handler"></div>
    </div>
</template>
<script>
import { getOffset, once, on, off } from '../../util/domUtil';

export default {
  name: 'mt-slider',
  props: {
    step: {
      type: Number,
      default: 1,
      validator(val) {
        return (val > 0 && val <= 100); // 1到100 百分比
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: Number,
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    color: {
      type: String,
      default() {
        return this.$MTUI_CONFIG && this.$MTUI_CONFIG.ColorPrimary || '#4A87D6'
      }
    },
  },
  created() {
    if (this.max <= this.min) {
      throw new Error('props max 必须大于 min');
    }
  },
  data() {
    return {
      currentValue: this.value,
      sliderLength: 0,
      sliderLeft: 0,
      handlerStartPos: 0,
      handlerStartX: 0,
      stepWidth: 0,
      distance: 0,
    };
  },
  watch: {
    currentValue(val) {
      this.$emit('input', val);
    },
    value(val) {
      this.currentValue = val;
    },
  },
  methods: {
    dragStart(event) {
      if (this.disabled) return;
      if (event.changedTouches) {
        event = event.changedTouches[0];
      }
      this.handlerStartPos = this.getHandlerPos();
      this.handlerStartX = event.clientX;
      if (!event.changedTouches) {
        on(document.documentElement, 'mousemove', this.dragMove);
        once(document.documentElement, 'mouseup', this.dragEnd);
      }
    },
    dragMove(event) {
      if (this.disabled) return;
      if (event.changedTouches) {
        event = event.changedTouches[0];
      }
      this.distance = event.clientX - this.handlerStartX;
      this.setHandler();
      this.$emit('onChange', this.currentValue);
    },
    dragEnd() {
      off(document.documentElement, 'mousemove', this.dragMove);
    },
    clickEvent(event) {
      if (this.disabled) return;
      this.handlerStartPos = this.getHandlerPos();
      this.distance = (event.pageX - this.sliderLeft) - this.handlerStartPos;
      this.setHandler();
      this.$emit('onChange', this.currentValue);
    },
    getHandlerPos() {
      let pos = this.$refs.handler.getBoundingClientRect().left;
      if (/%/.test(pos)) {
        pos = (this.sliderLength * parseFloat(pos)) / 100;
      } else {
        pos = parseFloat(pos);
      }
      return pos;
    },
    setHandler() {
      const distance = Math.round(this.distance / this.stepWidth) * this.stepWidth;
      let dist = this.handlerStartPos + distance; // handler的目标位置
      if (dist < 0) {
        dist = 0;
      } else if (dist > this.sliderLength) {
        dist = this.sliderLength;
      }
      this.currentValue = parseInt((100 * dist) / this.sliderLength, 10);
    },
    init() {
      this.sliderLength = parseInt(this.$refs.inner.getBoundingClientRect().width, 10);
      this.sliderLeft = getOffset(this.$refs.inner).left;
      this.stepWidth = (this.sliderLength * this.step) / 100;
      this.distance = (this.sliderLength * this.currentValue) / 100;
      this.setHandler();
    },
  },
  mounted() {
    this.init();
  },
};
</script>

