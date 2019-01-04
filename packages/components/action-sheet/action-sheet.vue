<template>
    <div :class="[className]">
        <div class="mtui-mask" @click="close(closeOnClickModal)" v-show="currentValue"></div>
        <transition name="actionsheet-float">
          <div class="mtui-actionsheet" v-show="currentValue">
              <div class="mtui-actionsheet__title" v-if="!!title" :class="titleClassName">
                  <p class="mtui-actionsheet__title-text">{{title}}</p>
              </div>
              <div class="mtui-actionsheet__menu">
                <div class="mtui-actionsheet__cell" :class="{'mtui-actionsheet__active': currentIndex == i}" v-for="(menu,i) in menus" :key="i"
                @click.stop="itemClick(menu,i)" :style="{color:menu.color?menu.color:'initial'}">
                  {{menu.text}}
                </div>
              </div>
              <div class="mtui-actionsheet__action" v-if="cancelText!==''">
                <div class="mtui-actionsheet__cell" @click.stop="currentValue=false">
                  {{cancelText}}
                </div>
              </div>
          </div>
        </transition>
    </div>
</template>
<script>
export default {
  name: 'mt-actionsheet',
  data() {
    return {
      currentValue: false,
      currentIndex: -1
    };
  },
  props: {
    menus: {
      type: Array,
      default: () => [],
    },
    cancelText: {
      type: String,
      default() {
        return '取消';
      },
    },
    closeOnClickModal: {
      type: Boolean,
      default: () => true,
    },
    className: String,
    titleClassName: String,
    title: String,
    value: Boolean,
  },
  methods: {
    close(closeOnClickModal) {
      if (typeof closeOnClickModal === 'boolean' && !this.closeOnClickModal) { return; }
      this.currentValue = false;
    },
    itemClick(item, i) {
      if (item.fn && typeof item.fn === 'function') {
        item.fn(item, i);
      }
      this.currentValue = false;
      this.currentIndex = i;
    },
  },
  watch: {
    currentValue(val) {
      this.$emit('input', val);
    },
    value(val) {
      this.currentValue = val;
    },
  },
  mounted() {
    if (this.value) {
      this.currentValue = true;
    }
  },
};
</script>
<style>
.actionsheet-float-enter,
.actionsheet-float-leave-to {
  transform: translate(0, 100%);
  opacity: 0;
}
.actionsheet-float-enter-active,.actionsheet-float-leave-active{
  transition: all .3s ease-out;
}
</style>
