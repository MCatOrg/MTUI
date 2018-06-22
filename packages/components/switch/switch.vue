<template>
      <div class="mt-switch"
      @click="changeStatus"
      :class="{'mt-switch-active':currentValue,
      'mtui-switch-disabled':disabled,[className]:true}"
      :style="{
        'background-color':currentValue?color:'transparent',
        'height':`${height}rem`,
        'line-height':`${height}rem`,
        'width':`${width}rem`,
        'border-radius':`${width/2}rem`
      }"
      >
        <template v-if="textList">{{textList[0]}}</template>
        <span class="mt-switch-before"
        :style="{
          'color':color,
          'height':`${height-0.02}rem`,
          'line-height':`${height-0.02}rem`,
          'width':`${width-0.02}rem`,
          'border-radius':`${width/2}rem`
        }">
          <template v-if="textList">{{textList[1]}}</template>
        </span>
        <span class="mt-switch-after"
        :style="{
          height:`${height}rem`,
          width:`${height}rem`,
          transform: currentValue?`translateX(${translateX}rem)`:'',
          'border-radius':`${width/2}rem`
        }"></span>
      </div>
</template>
<script>
export default {
  name: 'mt-switch',
  props: {
    value: Boolean,
    className: String,
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '#4a87d6',
    },
    height: {
      type: Number,
      default: 0.5,
    },
    width: {
      type: Number,
      default: 1.04,
    },
    translateX: {
      type: Number,
      default: 0.76,
    },
    textList: {
      type: Array,
      validator(val) {
        if (val.length !== 2) {
          console.error('textList必须是长度为2的数组');
          return false;
        } else if (typeof val[0] !== 'string' || typeof val[1] !== 'string') {
          console.error('textListd的子项必须是一个字符串');
          return false;
        }
        return true;
      },
    },
  },
  data() {
    return {
      currentValue: this.value,
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
    changeStatus() {
      if (this.disabled) return false;
      this.currentValue = !this.currentValue;
      this.$emit('on-change', this.currentValue);
      return true;
    },
  },
};
</script>

<style lang='less'>

.mt-switch {
  position: relative;
  width: 1.04rem;
  border: 0.02rem solid #dfdfdf;
  outline: 0;
  border-radius: 0.32rem;
  transition: background-color 0.1s, border 0.1s;
  color: #fff;
  text-align: left;
  // box-sizing: border-box;
  padding-left: 0.2rem;
  .mt-switch-before {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.986rem;
    border-radius: 0.3rem;
    background-color: #fdfdfd;
    transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
    text-align: right;
    // box-sizing: border-box;
    padding-right: 0.2rem;
  }
  .mt-switch-after {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.3rem;
    background-color: #ffffff;
    box-shadow: 0 0.01rem 0.03rem rgba(0, 0, 0, 0.4);
    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  }
  &.mtui-switch-disabled{
    opacity: 0.5;
    background-color: rgba(0, 0, 0, 0.2);
    .mt-switch-before{
      background-color: rgba(0, 0, 0, 0.2);
    }
    .mt-switch-after{
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
}
.mt-switch-active{
  .mt-switch-before{
    transform: scale(0) !important;
  }
}
</style>

