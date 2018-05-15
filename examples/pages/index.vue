<template>
  <div id="index">
    <button @click="showT">显示</button>
    <mtui-button type="default" size="small">12345</mtui-button>
<<<<<<< HEAD
=======
    <mtui-cell title="标题文字" label="描述信息"><span>icon 是图片</span></mtui-cell>
    <mtui-cell title="标题文字">555</mtui-cell>
    <!-- <mtui-radio></mtui-radio> -->
>>>>>>> cell
  </div>
</template>
<script>
import MtuiButton from '../../packages/components/button/button';
<<<<<<< HEAD
export default {
  components: {
      MtuiButton,
=======
// import MtuiRadio from '../../packages/components/radio/radio';
import MtuiCell from '../../packages/components/cell/cell';
export default {
  components: {
      MtuiButton,
      MtuiCell,
      // MtuiRadio
>>>>>>> cell
  },
  methods: {
    showT() {
      this.$Toast('测试用例3', {
        time: 2000,
        className: 'afei',
        callback() {},
      });
    },
  },
};
</script>

