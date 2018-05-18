<template>
    <div :class="className">
      <div class="mtui-mask" v-show="isShowMark" @click="close(closeOnClickModal)"></div>
      <transition name="scale" v-on:after-leave="afterLeave" v-on:before-enter="beforeEnter">
        <div class="mtui-dialog" v-show="isShow">
            <div class="mtui-dialog__hd" v-if="!!title">
              <strong class="mtui-dialog__title">{{title}}</strong>
            </div>
            <div class="mtui-dialog__bd" v-if="textarea||prompt">
              <textarea class="mtui-prompt_textarea" v-model="inputVal"
              v-if="!!textarea"></textarea>
              <input type="text"  v-model="inputVal"
              :placeholder="promptPlaceholder" class="mtui-prompt" v-else>
            </div>
            <div class="mtui-dialog__bd" v-else>{{message}}</div>
            <div class="mtui-dialog__ft">
                <a href="javascript:void(0)" v-if="showCancelButton"
                :class="['mtui-dialog__btn',cancelButtonClass]"
                @click.prevent="handleAction('cancel')"
                >{{cancelButtonText}}</a>
                <a href="javascript:void(0)" v-if="showConfirmButton"
                :class="['mtui-dialog__btn',confirmButtonClass]"
                @click.prevent="handleAction('confirm')"
                >{{confirmButtonText}}</a>
            </div>
        </div>
      </transition>
    </div>
</template>
<script>
const CONFIRM_TEXT = '确定';
const CANCEL_TEXT = '取消';
export default {
  name: 'mt-message-box',
  data() {
    return {
      className: '',
      title: '提示',
      message: '',
      prompt: false,
      promptPlaceholder: '',
      textarea: false,
      showConfirmButton: true,
      showCancelButton: false,
      confirmButtonText: CONFIRM_TEXT,
      confirmButtonClass: 'mtui-dialog__btn_primary',
      cancelButtonText: CANCEL_TEXT,
      cancelButtonClass: 'mtui-dialog__btn_default',
      isShow: false,
      closeOnClickModal: true,
      inputVal: '',
      isShowMark: false,
    };
  },
  methods: {
    close(closeOnClickModal) {
      if (typeof closeOnClickModal === 'boolean' && !this.closeOnClickModal) {
        return;
      }
      this.isShow = false;
    },
    handleAction(action) {
      this.close();
      if (this.prompt || this.textarea) {
        this.defaultCallback({ action, value: this.inputVal });
      } else {
        this.defaultCallback(action);
      }
    },
    beforeEnter() {
      this.isShowMark = true;
    },
    afterLeave() {
      this.isShowMark = false;
    },
  },
};
</script>
<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}
.scale-enter{
  transform: translate(-50%, -300%);
  opacity: 0;
}

.scale-leave-to {
  transform: translate(-50%, 300%);
  opacity: 0;
}
</style>
