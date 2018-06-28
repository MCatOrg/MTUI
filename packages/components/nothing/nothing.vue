<template>
    <div class="mt-nothing" :class="className">
      <slot>
        <img :src="imgObj[type]" alt="">
        <p>{{text}}</p>
      </slot>
    </div>
</template>
<script>
const typeList = [
  'order',
  'address',
  'like',
  'money',
  'carb',
  'info',
  'label',
  'book',
  'clock',
  'person'];
const order = require('./img/order.png');
const address = require('./img/address.png');
const like = require('./img/like.png');
const money = require('./img/money.png');
const carb = require('./img/carb.png');
const info = require('./img/info.png');
const label = require('./img/label.png');
const book = require('./img/book.png');
const clock = require('./img/clock.png');
const person = require('./img/person.png');

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
        person,
        order,
        address,
        like,
        money,
        carb,
        info,
        label,
        book,
        clock,
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
