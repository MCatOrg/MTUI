<template>
  <div>
    <mt-input title="我是标题" placeholder="请输入用户名" label="用户名" v-model="test"></mt-input>
    <mt-input placeholder="请输入密码" label="密码"></mt-input>
    <mt-input title="我是标题" placeholder="请输入验证码" label="验证码" validate></mt-input>
    {{test}}
  </div>
</template>
<script>
export default {
  data() {
    return {
      test: '',
    };
  },
};
</script>
