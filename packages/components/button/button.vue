<template>
  <button
    class="mtui-btn"
    :type="nativeType"
    :class="['mtui-btn__' + type, 'mtui-btn__' + size, {
      'is-disabled': disabled,
      'is-plain': plain
    }]"
    :disabled="disabled">
    <label class="mtui-button-text"><slot></slot></label>
  </button>
</template>

<script>
// if (process.env.NODE_ENV === 'component') {
//   require('mint-ui/packages/font/style.css');
// }

/**
 * mt-button
 * @module components/button
 * @desc 按钮
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [plain=false] - 幽灵按钮
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 * @param {string} [native-type] - 原生 type 属性
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .mintui-xxx）
 * @param {slot} - 显示文本
 * @param {slot} [icon] 显示图标
 *
 * @example
 * <mt-button size="large" icon="back" type="primary">按钮</mt-button>
 */
export default {
  name: 'mt-button',
  props: {
      nativeType: String,
      disabled: Boolean,
      plain: Boolean,
      type: {
      type: String,
      default: 'default',
      validator(value) {
        return [
          'default',
          'warn',
          'out',
          'primary',
        ].indexOf(value) > -1;
      },
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) { // Prop 验证
        return [
          'mini',
          'normal',
          'large',
        ].indexOf(value) > -1;// 必须是数组内的元素
      },
    },
 },
};
</script>

