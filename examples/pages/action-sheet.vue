<template>
    <div id="className">
      <mt-actionsheet
        title="我是带取消按钮的"
        :menus="menus"
        v-model="showAS"
        class-name=""
        title-class-name="">
      </mt-actionsheet>
      <mt-actionsheet
        title="我是无取消按钮的"
        cancel-text=""
        :menus="menus"
        v-model="showUnCancel"
        title-class-name=""
        :close-on-click-modal="false"
      >
      </mt-actionsheet>
      <button @click="showAS=!showAS">{{showAS?'隐藏带取消按钮的':'显示带取消按钮的'}}</button>
      <button @click="showUnCancel=!showUnCancel">{{showUnCancel?'隐藏无取消按钮的':'显示无取消按钮的'}}</button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [{
        text: '菜单一',
        fn: this.oneMenu,
      }, {
        text: '菜单二',
        fn: this.twoMenu,
      }],
      showAS: false,
      showUnCancel: false,
    };
  },
  methods: {
    oneMenu(item, index) {
      console.log('菜单一', index, item);
    },
    twoMenu(item, index) {
      console.log('菜单二', index, item);
    },
  },
};
</script>

