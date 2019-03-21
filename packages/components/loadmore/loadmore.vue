<template>
  <div class="mt-loadmore">
    <div class="mt-loadmore-content"
    :class="{ 'is-dropped': topDropped || bottomDropped}"
    :style="{ 'transform': transform }">
      <slot name="top">
        <div class="mt-loadmore-top" v-if="topMethod">
          <mt-spinner v-if="topStatus === 'loading'" type="dot" :size="1"></mt-spinner>
          <span class="mt-loadmore-text" v-if="topText!==''">{{ topText }}</span>
        </div>
      </slot>
      <slot></slot>
      <slot name="bottom">
        <div class="mt-loadmore-bottom" v-if="bottomMethod&&!bottomAllLoaded">
          <mt-spinner v-if="bottomStatus === 'loading'" type="dot" :size="1"></mt-spinner>
          <span class="mt-loadmore-text" v-if="bottomText!==''">{{ bottomText }}</span>
        </div>
      </slot>
    </div>
  </div>
</template>
<style lang="less">
.mt-loadmore{
  width: 100%;
}
.mt-loadmore-content{
  width: 100%;
  border-top: 0.01rem solid #e5e5e5;
  &.is-dropped{
    transition: .5s ease-out;
    -webkit-transition: .5s ease-out;
  }
  .mt-loadmore-top,.mt-loadmore-bottom{
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .mt-loadmore-top{
    margin-top: -50px;
  }
  .mt-loadmore-text{
    font-size: 0.25rem;
    color: #666;
  }
}
</style>
<script>
import Spinner from '../spinner';
let AnimationStarTime = 0,timeId=null;
export default {
  name: 'mt-loadmore',
  components: {
    Spinner,
  },
  props: {
    minAnimationTime:{//上拉加载更多动画和下拉刷新动画的至少持续的时间，如果onBottomLoaded或者onTopLoaded的执行的时间间隙没有达到这个时间，则延迟到这个时间结束
      type:Number,
      default:1*1000
    },
    maxDistance: {
      type: Number,
      default: 0,
    },
    autoFill: {
      type: Boolean,
      default: false,
    },
    distanceIndex: {
      type: Number,
      default: 1.5,
    },
    topMethod: Function,
    topDistance: {
      type: Number,
      default: 70,
    },
    topPullText: {
      type: String,
      default: '下拉刷新',
    },
    topDropText: {
      type: String,
      default: '释放更新',
    },
    topLoadingText: {
      type: String,
      default: '加载中...',
    },
    bottomMethod: Function,
    bottomDistance: {
      type: Number,
      default: 70,
    },
    bottomPullText: {
      type: String,
      default: '上拉刷新',
    },
    bottomDropText: {
      type: String,
      default: '释放更新',
    },
    bottomLoadingText: {
      type: String,
      default: '加载中...',
    },
    bottomAllLoaded: {
      type: Boolean,
      default: false,
    },
    wrapperHeight: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      translate: 0,
      scrollEventTarget: null,
      containerFilled: false,
      topText: '',
      topStatus: '',
      bottomStatus: '',
      startY: 0,
      currentY: 0,
      bottomReached: false,
      topDropped: false,
      bottomDropped: false,
      direction: '',
      bottomText: '',
      startScrollTop: 0,
    };
  },
  computed: {
    transform() {
      return this.translate === 0 ? null : `translate3d(0,${this.translate}px,0)`;
    },
  },
  watch: {
    topStatus(val) {
      this.$emit('top-status-change', val);
      switch (val) {
        case 'pull':
          this.topText = this.topPullText;
          break;
        case 'drop':
          this.topText = this.topDropText;
          break;
        case 'loading':
        default:
          this.topText = this.topLoadingText;
          break;
      }
    },
    bottomStatus(val) {
      this.$emit('bottom-status-change', val);
      switch (val) {
        case 'pull':
          this.bottomText = this.bottomPullText;
          break;
        case 'drop':
          this.bottomText = this.bottomDropText;
          break;
        case 'loading':
        default:
          this.bottomText = this.bottomLoadingText;
          break;
      }
    },
    wrapperHeight(val){
      this.setStyle();
    }
  },
  methods: {
    onTopLoaded() {
      var time = Date.now() - AnimationStarTime;
      if(timeId){
        clearTimeout(timeId);
        timeId = null;
      }
      AnimationStarTime=0;
      if(time>=this.minAnimationTime){
        this.translate = 0;
        this.topStatus = 'pull';
        this.$nextTick(() => {
          this.fillContainer();
        });
      }else{
        timeId = setTimeout(()=>{
          this.translate = 0;
          this.topStatus = 'pull';
          this.$nextTick(() => {
            this.fillContainer();
          });
          clearTimeout(timeId);
          timeId = null;
        },this.minAnimationTime-time);
      }
    },
    onBottomLoaded() {
      this.bottomStatus = 'pull';
      this.bottomDropped = false;
      if (!this.bottomAllLoaded && !this.containerFilled) {
        this.$nextTick(() => {
          this.fillContainer();
        });
      }
    },
    getScrollEventTarget(element) {
      let currentNode = element;
      while (currentNode && currentNode.tagName !== 'HTML' &&
      currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
        const overflowY = window.getComputedStyle(currentNode).overflowY;
        if (overflowY === 'scroll' || overflowY === 'auto') {
          return currentNode;
        }
        currentNode = currentNode.parentNode;
      }
      return window;
    },
    fillContainer() {
      console.log('fill');
      if (this.autoFill && typeof this.bottomMethod === 'function') {
        if (this.scrollEventTarget === window) {
          this.containerFilled = this.$el.getBoundingClientRect().bottom >=
          document.documentElement.getBoundingClientRect().bottom;
        } else {
          this.containerFilled = this.$el.getBoundingClientRect().bottom >=
          this.scrollEventTarget.getBoundingClientRect().bottom;
        }
        if (!this.containerFilled) {
          this.bottomStatus = 'loading';
          this.bottomMethod();
        }
      }
    },
    bindTouchEvents() {
      this.$el.addEventListener('touchstart', this.handleTouchStart);
      this.$el.addEventListener('touchmove', this.handleTouchMove);
      this.$el.addEventListener('touchend', this.handleTouchEnd);
    },
    getScrollTop(element) {
      if (element === window) {
        return Math.max(window.pageXOffset || 0, document.documentElement.scrollTop);
      }
      return element.scrollTop;
    },
    checkBottomReached() {
      if (this.scrollEventTarget === window) {
        return (document.documentElement.scrollTop ||
        document.body.scrollTop + document.documentElement.clientHeight + 1 >=
        document.body.scrollHeight);
      }
      return (parseInt(this.$el.getBoundingClientRect().bottom, 10) <=
        parseInt(this.scrollEventTarget.getBoundingClientRect().bottom, 10) + 1);
    },
    handleTouchStart(event) {
      this.startY = event.touches[0].clientY;
      this.startScrollTop = this.getScrollTop(this.scrollEventTarget);
      this.bottomReached = false;
      if (this.topStatus !== 'loading') {
        this.topStatus = 'pull';
        this.topDropped = false;
      }
      if (this.bottomStatus !== 'loading') {
        this.bottomStatus = 'pull';
        this.bottomDropped = false;
      }
    },
    handleTouchMove(event) {
      const $elRect = this.$el.getBoundingClientRect();
      if (this.startY < $elRect.top && this.startY > $elRect.bottom) {
        return;
      }
      this.currentY = event.touches[0].clientY;
      const distance = this.currentY - this.startY;
      this.direction = distance > 0 ? 'down' : 'up';
      if (typeof this.topMethod === 'function' && this.direction === 'down' &&
      this.getScrollTop(this.scrollEventTarget) === 0 && this.topStatus !== 'loading') {
        event.preventDefault();
        event.stopPropagation();
        if (this.maxDistance > 0) {
          this.translate = distance <= this.maxDistance ?
            (distance - this.startScrollTop) / this.distanceIndex : this.translate;
        } else {
          this.translate = (distance - this.startScrollTop) / this.distanceIndex;
        }
        if (this.translate < 0) {
          this.translate = 0;
        }
        this.topStatus = this.translate >= this.topDistance ? 'drop' : 'pull';
      }

      if (this.direction === 'up') {
        this.bottomReached = this.checkBottomReached() || this.bottomReached;
      }
      if (typeof this.bottomMethod === 'function' && this.direction === 'up' &&
      this.bottomReached && this.bottomStatus !== 'loading' && !this.bottomAllLoaded) {
        event.preventDefault();
        event.stopPropagation();
        let realGap;
        if (this.maxDistance > 0) {
          realGap = this.getScrollTop(this.scrollEventTarget) - this.startScrollTop;
          realGap += distance;
          this.translate = Math.abs(distance) <= this.maxDistance ?
            realGap / this.distanceIndex : this.translate;
        } else {
          realGap = this.getScrollTop(this.scrollEventTarget) - this.startScrollTop;
          realGap += distance;
          this.translate = realGap / this.distanceIndex;
        }
        if (this.translate > 0) {
          this.translate = 0;
        }
        this.bottomStatus = -this.translate >= this.bottomDistance ? 'drop' : 'pull';
      }
      this.$emit('translate-change', this.translate);
    },
    handleTouchEnd() {
      if (this.direction === 'down' && this.getScrollTop(this.scrollEventTarget) === 0
      && this.translate > 0) {
        AnimationStarTime = Date.now();//保存加载动画开始时间
        this.topDropped = true;
        if (this.topStatus === 'drop') {
          this.translate = '50';
          this.topStatus = 'loading';
          this.topMethod();
        } else {
          this.translate = '0';
          this.topStatus = 'pull';
        }
      }
      if (this.direction === 'up' && this.bottomReached && this.translate < 0) {
        this.bottomDropped = true;
        this.bottomReached = false;
        if (this.bottomStatus === 'drop') {
          this.translate = '0';
          this.bottomStatus = 'loading';
          this.bottomMethod();
        } else {
          this.translate = '0';
          this.bottomStatus = 'pull';
        }
      }
      this.$emit('translate-change', this.translate);
      this.direction = '';
    },
    setStyle(){
      /**
       * 自动设置父级高度并添加-webkit-overflow-scrolling样式
       * 问题1：
       * 当遇到一下页面结构时，建议手动设置高度：
       * 1. 滚动的上方(top)有着脱离文档流的元素结构
       * 2. 滚动的下方(bottom)有着其他结构
       * 3. 元素的内容是异步获取的(图片或者ajax)
       * 问题2：
       * 在单页面应用中，路由跳转是scrollTop是保留上一个页面的，这对自动计算高度是有很大影响的；建议在路由跳转后调整scrollTop:0,例如在vue-router的路由添加以下配置：
       * scrollBehavior (to, from, savedPosition) {
       *    if (savedPosition) {
       *      return savedPosition
       *    } else {
       *      return { x: 0, y: 0 }
       *    }
       *  }
       *  问题3：
       *  -webkit-overflow-scrolling使移动端滚动更流畅， 但是非标准的，在某些浏览器中有兼容性问题
       * @type {[type]}
       */
      let DW = document.documentElement.clientHeight;
      let wrapperHeight;
      if(this.wrapperHeight){
        wrapperHeight = this.wrapperHeight;
      }else{
        wrapperHeight = DW - this.scrollEventTarget.getBoundingClientRect().top;
      }
      let cssStyle = `height: ${wrapperHeight}px;-webkit-overflow-scrolling: touch;`;
      this.scrollEventTarget.setAttribute('style',cssStyle);

    },
    init() {
      this.topStatus = 'pull';
      this.bottomStatus = 'pull';
      this.topText = this.topPullText;
      this.scrollEventTarget = this.getScrollEventTarget(this.$el);
      let _this = this;
      this.$nextTick(()=>{
        this.setStyle();
      })
      document.addEventListener('readystatechange', function(){
        console.log(`state: ${document.readyState}`);
        if(document.readyState === "complete"){
            _this.setStyle();
        }
      });
      if (typeof this.bottomMethod === 'function') {
        this.$nextTick(() => {
          this.fillContainer();
        });
      }
      this.bindTouchEvents();
    },
  },
  mounted() {
    this.init();
  },
};
</script>
