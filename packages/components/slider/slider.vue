<template>
   <div>
     <h2 class="lTitle">{{title}}</h2>
     <div class="mtui-slider-box" ref="slider">
         <div class="mtui-slider__inner">
           <div class="mtui-slider__track" :class="mtPosition"></div>
           <div class="mtui-slider__handler" :class="mtPosition"></div>
         </div>
        <div class="mtui-slider__value">{{mtPosition.val}}</div>
     </div>
   </div>
</template>

<script>

/**
 * mt-slider
 * @module components/slider
 * @param {Number} [step] - 进度条位置
 * @param {Number} [defaultValue] - 滑块位置
 * @param {Number} [currentValue] - 滑动百分比值
 * @param {null} [mtDefault] - 初始化函数
 * @param {boolean} [value] - 不可直接修改prop
 *
 * @example
 * <mt-slider :step=10 :defaultValue=10 :currentValue=10></mt-slider>
 *
*/

export default {
  name: 'mt-slider',

  props: {
    title: String,
    step: {
      type: Number,
      default: 50,
    },
    defaultValue: {
      type: Number,
      default: 50,
    },
    currentValue: Number,
  },
  data() {
    return {
      mtPosition: {
        left: this.step,
        now: this.defaultValue,
        val: this.currentValue,
      },
      mtDefault: null,
    };
  },
  mounted() {
    // 滑块
    // 绑定元素
    const mtSlider = this.$refs.slider;
    const sliderTrack = mtSlider.children[0].children[0];
    const sliderHandler = mtSlider.children[0].children[1];

    // 给val赋值
    let mtWidth = this.step;
    this.mtPosition.val = mtWidth;

    if (this.step !== undefined) {
        // parseFloat解析一个字符串，并返回一个浮点数
        // 不为空则返回一个浮点数
        this.step = parseFloat(this.step);
        if (!this.step || this.step < 0) { // 不存在或小于零则报错
            throw new Error('Slider step must be a positive number.');
        }
    }
    // 默认百分比值存在但小于零，或大于一百，则报错
    if ((this.defaultValue !== undefined && this.defaultValue < 0) || this.defaultValue > 100) {
        throw new Error('Slider defaultValue must be >= 0 and <= 100.');
    }

    this.mtDefault = function () { // 初始化
      this.mtPosition.left = this.step;
      this.mtPosition.now = this.defaultValue;
      sliderTrack.style.width = `${this.mtPosition.left}%`;
      sliderHandler.style.left = `${this.mtPosition.now}%`;
    };

    mtSlider.addEventListener('touchmove', (e) => { // 屏幕滑动事件
        const pageX = e.touches[0].pageX; // 获取滑动x坐标
        mtWidth = (pageX / mtSlider.offsetWidth) * 100; // 计算百分比
        if (mtWidth > 100) { // 判断不超出范围
            mtWidth = 100;
          } else if (mtWidth < 0) {
            mtWidth = 0;
        }

        const sliderWidth = parseInt(mtWidth, 10);
        this.mtPosition.left = `${sliderWidth}%`;
        this.mtPosition.now = `${sliderWidth}%`;
        this.mtPosition.val = sliderWidth;

        sliderHandler.style.left = `${sliderWidth}%`;
        sliderTrack.style.width = `${sliderWidth}%`;
        this.$emit('change', this.mtPosition.val);
        // e.preventDefault();
    });
    this.mtDefault();
  },
};
</script>
