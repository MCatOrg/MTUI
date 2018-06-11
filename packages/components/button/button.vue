<template>
  <div class="mtui-btn"
  :class="[`mtui-btn__${type}`,
  disabled||loading?'mtui-btn__disabled':'',
  size===''?'':`mtui-btn__${size}`]"
  @click="clickEvent">
    <label class="mtui-btn-label">
      <slot name="loading" v-if="loading">
        <mt-spinner :type="loadingType" :color="loadingColor" :size="0.5"></mt-spinner>
      </slot>
      <slot></slot>
    </label>
    <mt-touch-ripple v-if="!disabled" v-show="!loading"></mt-touch-ripple>
  </div>
</template>
<script>
import touchRipple from '../touchRipple';
import Spinner from '../spinner';

export default {
  name: 'mt-button',
  components: {
    touchRipple,
    Spinner,
  },
  props: {
    type: {
      type: String,
      default: 'default',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    loadingColor: {
      type: String,
      default: '#e6e6e6',
    },
    loadingType: {
      type: String,
      default: 'snake',
    },
  },
  methods: {
    clickEvent() {
      if (!this.disabled && !this.loading) {
        this.$emit('click');
      }
    },
  },
};
</script>

<style lang="less">
.mtui-btn{
  .mtui-btn-label{
    display: flex;
    align-items: center;
    justify-content: center;
    .mt-spinner{
      margin-right: 0.2rem;
    }
  }
}
</style>
