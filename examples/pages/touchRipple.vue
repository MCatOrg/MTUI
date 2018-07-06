<template>
  <div>
    <mt-touch-ripple id="mr" color="#fff" @click="send">
      我就是我
    </mt-touch-ripple>
  </div>
</template>
<script>
export default {
  methods: {
    send() {
      alert('hello');
    },
  },
};
</script>

<style lang="less" scoped>
#mr{
  position: relative;
  width: 2rem;
  height: 1rem;
  background-color: #7e57c2;
  color: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
}
</style>

