<template>
  <div id="stepper">
    <h1>stepper</h1>
    <div class="wrapper">
      <div>
        <p>正常</p>
        <mt-stepper @on-change="chagneStepper" minTip="突突突"/>
      </div>
      <div>
        <p>最大数6</p>
        <mt-stepper :min="0" :value="value" :max="6" @on-change="chagneStepper" maxTip="啦啦啦" minTip="突突突" />
      </div>
      <div>
        <p>最小数3</p>
        <mt-stepper :value="value" :min="3" @on-change="chagneStepper" minTip="突突突" />
      </div>
      <div>
        <p>步长2</p>
        <mt-stepper :step="2" @on-change="chagneStepper" v-model="vvv" minTip="突突突"/>
        <p>{{vvv}}</p>
      </div>
      <div>
        <p>禁用</p>
        <mt-stepper :disable="true" @on-change="chagneStepper" />
      </div>
    </div>


  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
      vvv: 2,
    };
  },
  methods: {
    chagneStepper(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 7rem;
  margin: 0 auto;
}
h1 {
  padding: .36rem;
  color: #666;
}
.box {
  width: 1rem;
  height: 1rem;
  line-height: 1rem;
  position: relative;
  margin: .2rem;
  text-align: center;
  display: inline-block;
  border: .01rem solid rgb(211, 65, 20);
}
</style>

