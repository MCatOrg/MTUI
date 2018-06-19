<template>
  <div id="inputPage">
    <mt-cell-g title="input" ref="from">
      <mt-input
      label="姓名"
      v-model="name"
      placeholder='请输入你的名字'
      :required="true"></mt-input>

      <mt-input label="年龄"
      v-model="age"
      :max="3"
      type="number"
      placeholder='请输入你的年龄'
      is-type="number"></mt-input>

      <mt-input label="身份证"
      :required="true"
      v-model="id"
      placeholder='请输入你的身份证'
      :min="18"
      is-type="idCard"></mt-input>

      <mt-input label="手机"
      type="tel"
      v-model="tel"
      isType="china-mobile"
      placeholder='请输入你的手机'></mt-input>

      <mt-input label="密码" :isType="checkPwd" type="password"
      :required="true" v-model="pwd" placeholder='请输入你的密码'></mt-input>

      <mt-input label="确认密码" :isType="recheckPwd" type="password"
      :required="true" v-model="repwd" placeholder='请再次输入你的密码'>
        <div slot="footer"><i class="mtui-icon-search"></i></div>
      </mt-input>

      <mt-input label="短信验证码" v-model="code" placeholder='请输入你的验证码'
      @rightBtnClick="getCode"
      :getCode="true"></mt-input>
      <mt-input label="图片验证码" v-model="vcode" placeholder='请输入你的验证码'
      :codeImg="codeImg" @rightBtnClick="getCode"></mt-input>

      <mt-input label="禁用" placeholder='禁用' :disabled="true"></mt-input>

      <mt-button @click="sub" type="primary">提交</mt-button>
    </mt-cell-g>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      age: '',
      id: '',
      tel: '',
      pwd: '',
      code: '',
      vcode: '',
      repwd: '',
      codeImg: 'https://b-gold-cdn.xitu.io/v3/static/img/backend.53f0af7.png',
    };
  },
  methods: {
    sub() {
      const ch = this.$refs.from.$children;
      for (let i = 0; i < ch.length; i++) {
        if (ch[i].$vnode.componentOptions.tag === 'mt-input') {
          if (!ch[i].targetCheckEvent(ch[i].currentValue)) {
            break;
          }
        }
      }
    },
    getCode() {
      console.log('获取验证码');
    },
    checkPwd(val) {

      if (val.length < 8) {
        return {
          valid: false,
          msg: '密码不能长度不能小于8',
        };
      }
      return {
        valid: true,
      };
    },
    recheckPwd(val) {
      if (val !== this.pwd) {
        return {
          valid: false,
          msg: '两次输入的密码不一致',
        };
      }
      return {
        valid: true,
      };
    },
  },
};
</script>

