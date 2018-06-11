<template>
  <div id="badge">
    <h1>Badge</h1>
    <div class="wrapper">
      <div class="box">
        <mt-badge color="#000" type="dot"></mt-badge>
        dot
      </div>
      <div class="box">
        <mt-badge colorType="primary" type="dot"></mt-badge>
        dot
      </div>
      <div class="box">
        <mt-badge colorType="success" type="dot"></mt-badge>
        dot
      </div>
      <div class="box">
        <mt-badge colorType="warn" type="dot"></mt-badge>
        dot
      </div>
    </div>

    <div class="wrapper">
      <div class="box">
        <mt-badge colorType="primary" type="circle">1</mt-badge>
        circle
      </div>
      <div class="box">
        <mt-badge colorType="primary" type="circle">1</mt-badge>
        circle
      </div>
      <div class="box">
        <mt-badge colorType="success" type="circle">1</mt-badge>
        circle
      </div>
      <div class="box">
        <mt-badge colorType="warn" type="circle">1</mt-badge>
        circle
      </div>
    </div>

    <div class="wrapper">
      <div class="box">
        <mt-badge color="#000" type="more"></mt-badge>
        more
      </div>
      <div class="box">
        <mt-badge colorType="primary" type="more"></mt-badge>
        more
      </div>
      <div class="box">
        <mt-badge colorType="success" type="more"></mt-badge>
        more
      </div>
      <div class="box">
        <mt-badge colorType="warn" type="more"></mt-badge>
        more
      </div>
    </div>

    <div class="wrapper">
      <div class="box">
        <mt-badge color="#333" type="text">new</mt-badge>
        text
      </div>
      <div class="box">
        <mt-badge colorType="primary" type="text">new</mt-badge>
        text
      </div>
      <div class="box">
        <mt-badge colorType="success" type="text">new</mt-badge>
        text
      </div>
      <div class="box">
        <mt-badge colorType="warn" type="text">new</mt-badge>
        text
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
    };
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

