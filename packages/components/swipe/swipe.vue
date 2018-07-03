<template>
  <div class="mt-swipe">
    <div class="mt-swipe-items-wrap" ref="wrap">
      <slot></slot>
    </div>
    <div class="mt-swipe-indicators" v-if="showIndicators">
      <div class="mt-swipe-indicator"
        v-for="(page,$index) in pages" :key="$index"
        :class="{'is-active':$index === index}"
      ></div>
    </div>
  </div>
</template>
<style lang="less">
.mt-swipe{
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
}
.mt-swipe-items-wrap{
  overflow: hidden;
  position: relative;
  height: 100%;
  width: 100%;
  >div{
    position: absolute;
    transform: translateX(-100%);
    width: 100%;
    height: 100%;
    display: none;
    &.is-active{
      display: block;
      transform: none;
    }
  }
}
.mt-swipe-indicators{
  position: absolute;
  bottom: 0.1rem;
  left: 50%;
  transform: translateX(-50%);
}
.mt-swipe-indicator{
  width: 0.1rem;
  height: 0.1rem;
  display: inline-block;
  border-radius: 100%;
  background-color: #000;
  opacity: 0.3;
  margin: 0 0.03rem;
  &.is-active{
    background: #fff;
  }
}
</style>

<script>
export default {
  name: 'mt-swipe',
  props: {
    showIndicators: {
      type: Boolean,
      default: true,
    },
    defaultIndex: {
      type: Number,
      default: 0,
    },
    noDragWhenSingle: {
      type: Boolean,
      default: true,
    },
    auto: {
      type: Number,
      default: 3000,
    },
    continuous: {
      type: Boolean,
      default: true,
    },
    speed: {
      type: Number,
      default: 300,
    },
    prevent: {
      type: Boolean,
      default: false,
    },
    stopPropagation: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.dragState = {};
  },
  data() {
    return {
      ready: false,
      dragging: false,
      index: 0,
      pages: [],
      timer: null,
      reInitTimer: null,
      animating: false,
      isDone: false,
      userScrolling: false,
      noDrag: false,
    };
  },
  watch: {
    index(newIndex) {
      this.$emit('change', newIndex);
    },
  },
  methods: {
    swipeItemCreated() {
      if (!this.ready) return;
      clearTimeout(this.reInitTimer);
      this.reInitTimer = setTimeout(() => {
        this.reInitPages();
      }, 100);
    },
    swipeItemDestroyed() {
      if (!this.ready) return;

      clearTimeout(this.reInitTimer);
      this.reInitTimer = setTimeout(() => {
        this.reInitPages();
      }, 100);
    },
    reInitPages() {
      const children = this.$children;
      this.noDrag = children.length === 1 && this.noDragWhenSingle;
      const pages = [];
      const intDefaultIndex = Math.floor(this.defaultIndex);
      const defaultIndex = (intDefaultIndex >= 0 &&
      intDefaultIndex < children.length) ? intDefaultIndex : 0;
      this.index = defaultIndex;
      children.forEach((child, index) => {
        pages.push(child.$el);
        child.$el.classList.remove('is-active');
        if (index === defaultIndex) {
          child.$el.classList.add('is-active');
        }
      });
      this.pages = pages;
    },
    initTimer() {
      if (this.auto > 0 && !this.timer) {
        this.timer = setInterval(() => {
          if (!this.continuous && (this.index >= this.pages.length - 1)) {
            return this.clearTimer();
          }
          if (!this.dragging && !this.animating) {
            this.next();
          }
          return false;
        }, this.auto);
      }
    },
    clearTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
    next() {
      this.doAnimate('next');
    },
    prev() {
      this.doAnimate('prev');
    },
    translate(element, offset, speed, callback) {
      if (speed) {
        this.animating = true;
        element.style.transition = `transform ${speed}ms ease-in-out`;
        setTimeout(() => {
          element.style.transform = `translate3d(${offset}px, 0, 0)`;
        }, 50);
        let called = false;
        const transitionEndCallback = (...arg) => {
          if (called) {
            element.removeEventListener('transitionend', transitionEndCallback);
            return;
          }
          called = true;
          this.animating = false;
          element.style.transition = '';
          element.style.transform = '';
          if (typeof callback === 'function') {
            callback.apply(this, arg);
          }
          element.removeEventListener('transitionend', transitionEndCallback);
        };
        element.addEventListener('transitionend', transitionEndCallback);
        setTimeout(transitionEndCallback, speed + 100); // 兼容低级浏览器
      } else {
        element.style.transition = '';
        element.style.transform = `translate3d(${offset}px, 0, 0)`;
      }
    },
    doAnimate(towards, options) {
      if (this.$children.length === 0) return;
      if (!options && this.$children.length < 2) return;
      let prevPage;
      let nextPage;
      let currentPage;
      let pageWidth;
      let offsetLeft;
      let speedX;
      const speed = this.speed || 300;
      const index = this.index;
      const pages = this.pages;
      const pageCount = pages.length;
      if (!options) {
        pageWidth = this.$el.clientWidth;
        prevPage = pages[index - 1];
        currentPage = pages[index];
        nextPage = pages[index + 1];
        if (this.continuous && pages.length > 1) {
          if (!prevPage) {
            prevPage = pages[pages.length - 1];
          }
          if (!nextPage) {
            nextPage = pages[0];
          }
        }
        if (prevPage) {
          prevPage.style.display = 'block';
          this.translate(prevPage, -pageWidth);
        }
        if (nextPage) {
          nextPage.style.display = 'block';
          this.translate(nextPage, pageWidth);
        }
      } else {
        prevPage = options.prevPage;
        currentPage = options.currentPage;
        nextPage = options.nextPage;
        pageWidth = options.pageWidth;
        offsetLeft = options.offsetLeft;
        speedX = options.speedX;
      }

      let newIndex;
      const oldPage = this.$children[index].$el;
      if (towards === 'prev') {
        if (index > 0) {
          newIndex = index - 1;
        }
        if (this.continuous && index === 0) {
          newIndex = pageCount - 1;
        }
      } else if (towards === 'next') {
        if (index < pageCount - 1) {
          newIndex = index + 1;
        }
        if (this.continuous && index === pageCount - 1) {
          newIndex = 0;
        }
      }
      const callback = () => {
        if (newIndex !== undefined) {
          const newPage = this.$children[newIndex].$el;
          oldPage.classList.remove('is-active');
          newPage.classList.add('is-active');
          this.index = newIndex;
        }
        if (this.isDone) {
          this.end();
        }
        if (prevPage) {
          prevPage.style.display = '';
        }
        if (nextPage) {
          nextPage.style.display = '';
        }
      };
      setTimeout(() => {
        if (towards === 'next') {
          this.isDone = true;
          this.before({ currentPage, newIndex });
          if (speedX) {
            this.rafTranslate(currentPage, offsetLeft, -pageWidth, callback, nextPage);
          } else {
            this.translate(currentPage, -pageWidth, speed, callback);
            if (nextPage) {
              this.translate(nextPage, 0, speed);
            }
          }
        } else if (towards === 'prev') {
          this.isDone = true;
          this.before({ currentPage, newIndex });
          if (speedX) {
            this.rafTranslate(currentPage, offsetLeft, pageWidth, callback, prevPage);
          } else {
            this.translate(currentPage, pageWidth, speed, callback);
            if (prevPage) {
              this.translate(prevPage, 0, speed);
            }
          }
        } else {
          this.isDone = false;
          this.translate(currentPage, 0, speed, callback);
          if (typeof offsetLeft !== 'undefined') {
            if (prevPage && offsetLeft > 0) {
              this.translate(prevPage, pageWidth * -1, speed);
            }
            if (nextPage && offsetLeft < 0) {
              this.translate(nextPage, pageWidth, speed);
            }
          } else {
            if (prevPage) {
              this.translate(prevPage, pageWidth * -1, speed);
            }
            if (nextPage) {
              this.translate(nextPage, pageWidth, speed);
            }
          }
        }
      }, 10);
    },
    rafTranslate(element, initOffset, offset, callback, nextElement) {
      const ALPHA = 0.88;
      this.animating = true;
      let pOffset = initOffset;
      let raf = 0;
      function animationLoop() {
        if (Math.abs(pOffset - offset) < 0.5) {
          this.animating = false;
          pOffset = offset;
          element.style.transform = '';
          if (nextElement) {
            nextElement.style.transform = '';
          }
          cancelAnimationFrame(raf);
          typeof callback === 'function' && callback();
          return;
        }
        pOffset = (ALPHA * pOffset) + ((1.0 - ALPHA) * offset);
        element.style.transform = `translate3d(${pOffset}px, 0, 0)`;
        if (nextElement) {
          nextElement.style.transform = `translate3d(${pOffset - offset}px, 0, 0)`;
        }
        raf = requestAnimationFrame(animationLoop.bind(this));
      }
      animationLoop.call(this);
    },
    before(obj) {
      this.$emit('before', obj);
    },
    end() {
      this.$emit('end', this.index);
    },
    doOnTouchStart(event) {
      if (this.noDrag) return;

      const element = this.$el;
      const dragState = this.dragState;
      const touch = event.touches[0];

      dragState.startTime = new Date();
      dragState.startLeft = touch.pageX;
      dragState.startTop = touch.pageY;
      dragState.startTopAbsolute = touch.clientY;

      dragState.pageWidth = element.offsetWidth;
      dragState.pageHeight = element.offsetHeight;

      let prevPage = this.$children[this.index - 1];
      const dragPage = this.$children[this.index];
      let nextPage = this.$children[this.index + 1];

      if (this.continuous && this.pages.length > 1) {
        if (!prevPage) {
          prevPage = this.$children[this.$children.length - 1];
        }
        if (!nextPage) {
          nextPage = this.$children[0];
        }
      }

      dragState.prevPage = prevPage ? prevPage.$el : null;
      dragState.dragPage = dragPage ? dragPage.$el : null;
      dragState.nextPage = nextPage ? nextPage.$el : null;

      if (dragState.prevPage) {
        dragState.prevPage.style.display = 'block';
      }

      if (dragState.nextPage) {
        dragState.nextPage.style.display = 'block';
      }
    },
    doOnTouchMove(event) {
      if (this.noDrag) return;

      const dragState = this.dragState;
      const touch = event.touches[0];

      dragState.speedX = touch.pageX - dragState.currentLeft;
      dragState.currentLeft = touch.pageX;
      dragState.currentTop = touch.pageY;
      dragState.currentTopAbsolute = touch.clientY;

      let offsetLeft = dragState.currentLeft - dragState.startLeft;
      const offsetTop = dragState.currentTopAbsolute - dragState.startTopAbsolute;

      const distanceX = Math.abs(offsetLeft);
      const distanceY = Math.abs(offsetTop);
      if (distanceX < 5 || (distanceX >= 5 && distanceY >= 1.73 * distanceX)) {
        this.userScrolling = true;
        return;
      }
      this.userScrolling = false;
      event.preventDefault();

      offsetLeft = Math.min(Math.max(-dragState.pageWidth + 1, offsetLeft),
        dragState.pageWidth - 1);

      const towards = offsetLeft < 0 ? 'next' : 'prev';

      if (dragState.prevPage && towards === 'prev') {
        this.translate(dragState.prevPage, offsetLeft - dragState.pageWidth);
      }
      this.translate(dragState.dragPage, offsetLeft);
      if (dragState.nextPage && towards === 'next') {
        this.translate(dragState.nextPage, offsetLeft + dragState.pageWidth);
      }
    },

    doOnTouchEnd() {
      if (this.noDrag) return;

      const dragState = this.dragState;

      const dragDuration = new Date() - dragState.startTime;
      let towards = null;

      const offsetLeft = dragState.currentLeft - dragState.startLeft;
      const offsetTop = dragState.currentTop - dragState.startTop;
      const pageWidth = dragState.pageWidth;
      const index = this.index;
      const pageCount = this.pages.length;

      if (dragDuration < 300) {
        let fireTap = Math.abs(offsetLeft) < 5 && Math.abs(offsetTop) < 5;
        if (isNaN(offsetLeft) || isNaN(offsetTop)) {
          fireTap = true;
        }
        if (fireTap) {
          this.$children[this.index].$emit('tap');
        }
      }

      if (dragDuration < 300 && dragState.currentLeft === undefined) return;

      if (dragDuration < 300 || Math.abs(offsetLeft) > pageWidth / 2) {
        towards = offsetLeft < 0 ? 'next' : 'prev';
      }

      if (!this.continuous) {
        if ((index === 0 && towards === 'prev') || (index === pageCount - 1 && towards === 'next')) {
          towards = null;
        }
      }

      if (this.$children.length < 2) {
        towards = null;
      }

      this.doAnimate(towards, {
        offsetLeft,
        pageWidth: dragState.pageWidth,
        prevPage: dragState.prevPage,
        currentPage: dragState.dragPage,
        nextPage: dragState.nextPage,
        speedX: dragState.speedX,
      });

      this.dragState = {};
    },
  },
  mounted() {
    this.ready = true;
    this.initTimer();
    this.reInitPages();
    this.$el.addEventListener('touchstart', (event) => {
      if (this.prevent)event.preventDefault();
      if (this.stopPropagation)event.preventDefault();
      if (this.animating) return;
      this.dragging = true;
      this.userScrolling = false;
      this.doOnTouchStart(event);
    });
    this.$el.addEventListener('touchmove', (event) => {
      if (!this.dragging) return;
      if (this.timer) this.clearTimer();
      this.doOnTouchMove(event);
    });
    this.$el.addEventListener('touchend', (event) => {
      if (this.userScrolling) {
        this.dragging = false;
        this.dragState = {};
        return;
      }
      if (!this.dragging) return;
      this.initTimer();
      this.doOnTouchEnd(event);
      this.dragging = false;
    });
  },
  destroyed() {
    if (this.timer) {
      this.clearTimer();
    }
    if (this.reInitTimer) {
      clearTimeout(this.reInitTimer);
      this.reInitTimer = null;
    }
  },
};
</script>
