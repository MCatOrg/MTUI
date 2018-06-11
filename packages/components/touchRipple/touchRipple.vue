<template>
  <div
  @mousedown="handleMouseDown" @mouseup="end()" @mouseleave="end()"
  @touchstart="handleTouchStart"  @touchend="end()" @touchcancel="end()">
    <div class="mt-ripple-wrapper" :class="rippleWrapperClass" ref="holder">
      <circle-ripple
      v-for="ripple in ripples"
      :key="ripple.key"
      :color="ripple.color"
      :opacity="ripple.opacity"
      :merge-style="ripple.style"
      ></circle-ripple>
    </div>
    <slot></slot>
  </div>
</template>
<script>
import circleRipple from './components/circleRipple';
import * as domUtil from '../../util/domUtil';

export default {
  name: 'mt-touch-ripple',
  props: {
    centerRipple: {
      type: Boolean,
      default: false,
    },
    rippleWrapperClass: {
    },
    color: {
      type: String,
      default: '',
    },
    opacity: {
      type: Number,
    },
  },
  components: {
    circleRipple,
  },
  data() {
    return {
      nextKey: 0,
      ripples: [],
    };
  },
  mounted() {
    this.ignoreNextMouseDown = false;
  },
  methods: {
    start(event, isRippleTouchGenerated) {
      if (this.ignoreNextMouseDown && !isRippleTouchGenerated) {
        this.ignoreNextMouseDown = false;
        return;
      }
      this.ripples.push({
        key: this.nextKey += 1,
        color: this.color,
        opacity: this.opacity,
        style: this.centerRipple ? {} : this.getRippleStyle(event),
      });
      this.ignoreNextMouseDown = isRippleTouchGenerated;
    },
    handleMouseDown(event) {
      if (event.button === 0) {
        this.start(event, false);
      }
    },
    handleTouchStart(event) {
      if (event.touches) {
        this.startListeningForScrollAbort(event);
        this.startTime = Date.now();
      }
      this.start(event.touches[0], true);
    },
    handleTouchMove(event) {
      const deltaY = Math.abs(event.touches[0].clientY - this.firstTouchY);
      const deltaX = Math.abs(event.touches[0].clientX - this.firstTouchX);
      if (deltaY > 6 || deltaX > 6) this.end();
    },
    end() {
      if (this.ripples.length === 0) return;
      this.ripples.splice(0, 1);
      this.stopListeningForScrollAbort();
    },
    startListeningForScrollAbort() {
      this.firstTouchY = event.touches[0].clientY;
      this.firstTouchX = event.touches[0].clientX;
      document.body.addEventListener('touchmove', this.handleMove, false);
    },
    stopListeningForScrollAbort() {
      if (!this.handleMove) this.handleMove = this.handleTouchMove.bind(this);
      document.body.removeEventListener('touchmove', this.handleMove, false);
    },
    getRippleStyle(event) {
      const el = this.$refs.holder;
      if (!el) return undefined;

      const elHeight = el.offsetHeight;
      const elWidth = el.offsetWidth;
      const offset = domUtil.getOffset(el);
      const isTouchEvent = event.touches && event.touches.length;
      const pageX = isTouchEvent ? event.touches[0].pageX : event.pageX;
      const pageY = isTouchEvent ? event.touches[0].pageY : event.pageY;
      const pointerX = pageX - offset.left;
      const pointerY = pageY - offset.top;
      const topLeftDiag = this.calcDiag(pointerX, pointerY);
      const topRightDiag = this.calcDiag(elWidth - pointerX, pointerY);
      const botRightDiag = this.calcDiag(elWidth - pointerX, elHeight - pointerY);
      const botLeftDiag = this.calcDiag(pointerX, elHeight - pointerY);
      const rippleRadius = Math.max(
        topLeftDiag, topRightDiag, botRightDiag, botLeftDiag,
      );
      const rippleSize = rippleRadius * 2;
      const left = pointerX - rippleRadius;
      const top = pointerY - rippleRadius;
      return {
        directionInvariant: true,
        height: `${rippleSize}px`,
        width: `${rippleSize}px`,
        top: `${top}px`,
        left: `${left}px`,
      };
    },
    calcDiag(a, b) {
      return Math.sqrt((a * a) + (b * b));
    },
  },
};
</script>
<style lang="less">
.mt-ripple-wrapper {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
</style>
