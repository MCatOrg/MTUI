<template>
  <div id="dialog">
    <h2>全局使用</h2>
    <button @click="showMsg('我是普通的msg')">this.$messagebox('我是普通的msg')</button>
    <button @click="alert">this.$messagebox.alert('我是普通的alert')</button>
    <button @click="confirm">this.$messagebox.confirm('我是普通的confirm')</button>
    <button @click="prompt">this.$messagebox.prompt('我是普通的confirm')</button>
    <button @click="objMsg">this.$messagebox(obj)</button>
    <br>
    <button @click="showMsg('我是普通的msg','标题')">this.$messagebox('我是普通的msg','标题')</button>
    <button @click="alert">this.$messagebox.alert('我是普通的alert','标题')</button>
    <button @click="confirm">this.$messagebox.confirm('我是普通的confirm','标题')</button>
    <button @click="prompt">this.$messagebox.prompt('我是普通的confirm','标题')</button>
    <button @click="objMsg">this.$messagebox(obj)</button>
    <h2>局部使用</h2>
    <hr>
    <button @click="showMessageBox('我是普通的msg','标题')">MessageBox('我是普通的msg','标题')</button>
  </div>
</template>
<script>
import { mtMessageBox } from '~/index';

export default {
  created() {
    document.body.addEventListener('click', () => {
      console.log('我是全局点击事件');
    });
  },
  methods: {
    showMsg(msg, title) {
      this.$messagebox(msg, title).then((action) => {
        console.log(action);
      });
    },
    alert() {
      this.$messagebox.alert('我是普通的alert').then((action) => {
        console.log(action);
      });
    },
    confirm() {
      this.$messagebox.confirm('我是普通的confirm').then((action) => {
        console.log(action);
      });
    },
    prompt() {
      this.$messagebox.prompt('我是普通的confirm').then((action) => {
        console.log(action);
      });
    },
    objMsg() {
      this.$messagebox({
        confirmButtonText: '提交',
        cancelButtonText: '关闭',
        title: '我是提示',
        textarea: true,
        callback(action) {
          console.log(action);
        },
      });
    },
    showMessageBox(msg, title) {
      mtMessageBox(msg, title);
    },
  },
};
</script>
<style lang="less" scoped>
#dialog{
  button{
    margin: 0.2rem;
  }
}
</style>

