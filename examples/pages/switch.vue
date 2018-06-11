<template>
  <div id="stepper">
    <h1>stepper</h1>
    <div class="wrapper">
        <div class="box">
          <h3>蓝色</h3>
          <mt-switch type="primary" @on-change="changeSwitch" />
        </div>
        <div class="box">
          <h3>红色</h3>
        <mt-switch type="warn" @on-change="changeSwitch" />
        </div>
        <div class="box">
          <h3>绿色</h3>
        <mt-switch type="success" @on-change="changeSwitch" />
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

