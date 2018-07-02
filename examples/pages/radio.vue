<template>
  <div id="radioPage">
    <mt-radio v-model="value" :options="options" title="单选框按钮"></mt-radio>
    <mt-radio v-model="valueIcon" :options="optionsIcon" title="带图标的单选框"></mt-radio>
    <mt-radio v-model="payType" :options="payTypeList" title="带字体图标的单选框"></mt-radio>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 1,
      options: [1, 2, 3],
      valueIcon: '芋头',
      optionsIcon: [
        {
          value: '被禁用',
          icon: 'https://avatars2.githubusercontent.com/u/26383766?s=88&v=4',
          disabled: true,
        },
        {
          value: '芋头',
          icon: 'https://avatars2.githubusercontent.com/u/897401?s=64&v=4',
        },
        {
          value: '死月',
          icon: 'https://avatars1.githubusercontent.com/u/8280645?s=64&v=4',
        },
      ],
      payType: 1,
      payTypeList: [
        {
          label: '微信支付',
          value: 1,
          iconClass: 'mtui-icon-weChatPay',
        },
        {
          label: '支付宝支付',
          value: 2,
          iconClass: 'mtui-icon-alipay',
        },
      ],
    };
  },
  watch: {
  },
};
</script>
<style lang="less">
.mtui-icon-weChatPay{
      color:#09BB07;
    }
    .mtui-icon-alipay{
      color:#19A0E5;
    }
</style>
