<template>
  <div
  @touchstart="startDrag"
  @touchmove="onDrag"
  @touchend="endDrag"
  @mousedown="startDrag"
  class="mt-tab-container">
    <div
      ref="wrap"
      class="mt-tab-container-wrap"
      :style="{transform:`translate3d(${transformX}px,0,0)`}">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { once, on, off } from '../../util/domUtil';

export default {
  name: 'mt-tab-container',
  props: {
    value: {},
    swipeable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      start: { x: 0, y: 0 },
      swiping: false,
      activeItems: [],
      pageWidth: 0,
      currentActive: this.value,
      transformX: 0,
    };
  },
  watch: {
    value(val) {
      this.currentActive = +val;
    },
    currentActive(val, oldValue) {
      this.$emit('input', +val);
      if (!this.swipeable) return;
      const lastIndex = [].findIndex.call(this.$children, item => +item.id === oldValue);
      this.swipeLeaveTransition(lastIndex);
    },
  },
  mounted() {
    if (!this.swipeable) return;
    this.wrap = this.$refs.wrap;
    this.pageWidth = this.wrap.clientWidth;
    this.minWidthWithPage = this.pageWidth / 4;
  },
  destroyed() {
    off(document.documentElement, 'mousemove', this.onDrag);
    off(document.documentElement, 'mouseup', this.endDrag);
  },
  methods: {
    swipeLeaveTransition(lastIndex = 0) {
      if (typeof this.index !== 'number') {
        this.index = [].findIndex.call(this.$children, item => +item.id === this.currentActive);
        this.swipeMove(-lastIndex * this.pageWidth);
      }
      setTimeout(() => {
        this.wrap.classList.add('swipe-transition');
        this.swipeMove(-this.index * this.pageWidth);
        this.wrap.addEventListener('transitionend', this.transitionEndFn);
      });
    },
    transitionEndFn() {
      this.wrap.classList.remove('swipe-transition');
      this.transformX = 0;
      this.swiping = false;
      this.index = null;
      this.wrap.removeEventListener('transitionend', this.transitionEndFn);
    },
    swipeMove(offset) {
      this.transformX = offset;
      this.swiping = true;
    },
    startDrag(evt) {
      if (!this.swipeable) return;
      evt = evt.changedTouches ? evt.changedTouches[0] : evt;
      this.dragging = true;
      this.start.x = evt.pageX;
      this.start.y = evt.pageY;
      if (!evt.changedTouches) {
        on(document.documentElement, 'mousemove', this.onDrag);
        once(document.documentElement, 'mouseup', this.endDrag);
      }
    },
    onDrag(evt) {
      if (!this.dragging) return;
      const e = evt.changedTouches ? evt.changedTouches[0] : evt;
      const offsetTop = e.pageY - this.start.y;
      const offsetLeft = e.pageX - this.start.x;
      const y = Math.abs(offsetTop);
      const x = Math.abs(offsetLeft);
      const swiping = !(x < 5 || (x >= 5 && y >= x * 1.73)); // 防抖动
      if (!swiping) return;
      evt.preventDefault();
      const len = this.$children.length - 1;
      const index = [].findIndex.call(this.$children, item => +item.id === this.currentActive);
      const currentPageOffset = index * this.pageWidth;
      const offset = offsetLeft - currentPageOffset;
      const absOffset = Math.abs(offset);
      if (absOffset > len * this.pageWidth || (offset > 0 && offset < this.pageWidth)) {
        this.swiping = false;
        return;
      }
      this.offsetLeft = offsetLeft;
      this.index = index;
      this.swipeMove(offset);
    },
    endDrag(evt) {
      console.log('松开');
      if (!this.swiping) return;
      this.dragging = false;
      const direction = this.offsetLeft > 0 ? -1 : 1;
      const isChange = Math.abs(this.offsetLeft) > this.minWidthWithPage;

      if (isChange) {
        this.index += direction;
        const child = this.$children[this.index];
        if (child) {
          this.currentActive = +child.id;
          return;
        }
      }
      this.swipeLeaveTransition();
      if (!evt.changedTouches) {
        off(document.documentElement, 'mousemove', this.onDrag);
      }
    },
  },
};
</script>

<style lang="less">
.mt-tab-container{
  width: 100%;
  overflow-x: hidden;
  position: relative;
}
.mt-tab-container-wrap{
  display: flex;
}
.swipe-transition {
  transition: transform .2s ease-in-out;
}
</style>
