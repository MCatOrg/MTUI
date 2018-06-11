<template>
    <input
      :class="['mt-switch', 'mt-'+type]"
      :disabled="disabled"
      v-model="currentValue"
      type="checkbox"
      checked/>
</template>
<script>
export default {
  name: 'mt-switch',
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'primary',
    },
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('on-change', val);
      },
    },
  },
};
</script>

<style lang='less'>
@mtSwitchHeight: 0.5rem;
@mtColorPrimary: #4a87d6; //主题颜色
@mtColorWarn: #eb5757; //警告色
@mtColorSuccess: #3cc51f; // 成功色

.mt-switch {
  -webkit-appearance: none;
  appearance: none;
}
.mt-switch,
.mt-switch-cp__box {
  position: relative;
  width: 1rem;
  height: @mtSwitchHeight;
  border: 0.01rem solid #dfdfdf;
  outline: 0;
  border-radius: 0.32rem;
  box-sizing: border-box;
  background-color: #dfdfdf;
  transition: background-color 0.1s, border 0.1s;

  &:before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 0.986rem;
    height: @mtSwitchHeight - 0.02;
    border-radius: 0.3rem;
    background-color: #fdfdfd;
    transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
  }
  &:after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: @mtSwitchHeight - 0.036;
    height: @mtSwitchHeight - 0.02;
    border-radius: 0.3rem;
    background-color: #ffffff;
    box-shadow: 0 0.01rem 0.03rem rgba(0, 0, 0, 0.4);
    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
  }
}
.mt-switch:checked,
.mt-switch-cp__input:checked ~ .mt-switch-cp__box {
  // border-color: @mtColorPrimary;
  // background-color: @mtColorPrimary;
  &:before {
    transform: scale(0);
  }
  &:after {
    transform: translateX(0.56rem);
  }
}
.mt-primary {
  // border-color: @mtColorPrimary;
  background-color: @mtColorPrimary;
}
.mt-warn {
  // border-color: @mtColorWarn;
  background-color: @mtColorWarn;
}
.mt-success {
  // border-color: @mtColorSuccess;
  background-color: @mtColorSuccess;
}

// 兼容IE Edge的版本
.mt-switch-cp__input {
  position: absolute;
  left: -99.99rem;
}
.mt-switch-cp__box {
  display: block;
}
</style>

