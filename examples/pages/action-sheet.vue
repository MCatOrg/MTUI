<template>
    <div id="className">
      <mt-actionsheet
        title="我是带取消按钮的"
        :menus="menus"
        v-model="showAS"
        @changeEvent="changeEvent"
        class-name=""
        title-class-name="">
      </mt-actionsheet>
      <mt-actionsheet
        @changeEvent="changeEvent"
        cancel-text=""
        title="我是不带取消按钮的"
        :menus="menus"
        v-model="showUnCancel"
        title-class-name=""
        :close-on-click-modal="false"
      >
      </mt-actionsheet>
      <mt-button @click="showAS=!showAS" type="primary">{{showAS?'隐藏带取消按钮的':'显示带取消按钮的'}}</mt-button>
      <mt-button @click="showUnCancel=!showUnCancel" type="primary">{{showUnCancel?'隐藏无取消按钮的':'显示无取消按钮的'}}</mt-button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      menus: [{
        text: '菜单一',
      }, {
        text: '菜单二',
        color: 'red',
      },{
        text: '菜单三',
        color: 'blue',
      },{
        text: '菜单666',
        color: 'green'
      }],
      showAS: false,
      showUnCancel: false,
    };
  },
  methods: {
    changeEvent(item, index){
      console.log(index, item);
    }
  },
};
</script>

