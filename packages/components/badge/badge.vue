<template>
  <span
    :style="{ backgroundColor: color }"
    :class="['mt-badge_' + type,'mt-' + colorType]">
    <slot></slot>
  </span>
</template>
<script>
const TYPE = ['dot', 'text', 'circle', 'more'];
export default {
  name: 'mt-badge',
  props: {
    color: String, // 自定义颜色
    colorType: String, // 原有默认颜色
    type: {
      type: String,
      default: 'dot', // 类型
      validator(value) {
        if (TYPE.indexOf(value) !== -1) {
          return true;
        }
        throw Error(`[badge组件]你输入的type不正确，你输入的类型:${value}  可选类型：[dot, text, circle, more]`);
      },
    },
  },
};
</script>

<style lang='less'>
.mt-badge() {
  display: inline-block;
  height: 0.32rem;
  border-radius: 0.32rem;
  vertical-align: middle;
  background-color: #ff3b30;
  color: #ffffff;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%,-50%);
}
.mt-badge_text {
  .mt-badge();
  font-size: 0.14rem;
  line-height: 0.36rem;
  text-align: center;
  height: 0.32rem;
  min-width: 0.12rem;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
}
.mt-badge_circle {
  .mt-badge();
  font-size: 0.14rem;
  line-height: 0.36rem;
  text-align: center;
  height: 0.32rem;
  width: 0.32rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mt-badge_dot {
  display: inline-block;
  border-radius: 0.2rem;
  background-color: #ff3b30;
  height: 0.2rem;
  width: 0.2rem;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%,-50%);
  vertical-align: middle;
}
.mt-badge_more {
  .mt-badge();
  padding-left: 0.14rem;
  padding-right: 0.14rem;
  min-width: 0.2rem;
  line-height: 0.1rem;
}
.mt-badge_more::before {
  content: "...";
  font-size: .42rem;
  // content: "●●●";
}
</style>

