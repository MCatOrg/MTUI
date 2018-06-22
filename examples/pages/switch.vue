<template>
  <div id="stepper">
    <h1>stepper</h1>
    <div class="wrapper">
        <div class="box">
          <h3>蓝色(默认)</h3>
          <mt-switch
          :textList="['开','关']"
          v-model="s1"
          @on-change="changeSwitch" />
        </div>
        <div class="box">
          <h3>黄色</h3>
          <mt-switch color="#F3AD13"
          className="mySwich"
          :textList="['连扫','不连扫']"
          :width='2'
          :height="0.75"
          :translateX="1.46"
          v-model="s2"
          @on-change="changeSwitch" />
        </div>
        <div class="box">
          <h3>绿色</h3>
        <mt-switch color="green"
        v-model="s3"
        @on-change="changeSwitch" />
        </div>
        <div class="box">
          <h3>禁用</h3>
          <mt-switch :disabled="true" v-model="s4" @on-change="changeSwitch" />
        </div>
       <!-- <mt-cell to="cell">
        <p slot="head">标题</p>
        <mt-switch @on-change="changeSwitch" />
      </mt-cell> -->
    </div>


  </div>
</template>
<script>
export default {
  data() {
    return {
      s1: true,
      s2: true,
      s3: false,
      s4: true,
    };
  },
  methods: {
    changeSwitch(val) {
      console.log(val);
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
  text-align: center;
  display: inline-block;
  width: 100px;
h3 {
  padding: 10px 0;
}
}
</style>

