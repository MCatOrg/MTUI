<template>
    <div class="mt-nothing" :class="className">
      <slot>
        <img :src="imgObj[type] || imgObj.info" alt="">
        <p>{{text}}</p>
      </slot>
    </div>
</template>
<script>
const typeList = [
  'info'
];
const info = require('./img/info.png');

export default {
  name: 'mt-nothing',
  props: {
    className: String,
    text: {
      type: String,
      default: '无相关内容',
    },
    type: {
      type: String,
      default: typeList[0],
    },
  },
  data() {
    return {
      imgObj: {
        info
      },
    };
  },
};
</script>
<style lang="less">
  .mt-nothing{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
    >img{
      max-width: 90%;
    }
    >p{
      font-size: 0.3rem;
      color: #666;
      width: 100%;
      text-align: center;
    }
  }
</style>
