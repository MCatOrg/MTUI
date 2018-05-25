<template>
  <div>
    <mt-accordion title="Yoo" :accordions="list"></mt-accordion>
    <mt-accordion title="Yoo"
      :accordions="[{oneLevel: '一级列表',show: false,}]">
      <div slot="content">123456789</div>
    </mt-accordion>
  </div>
</template>

<script>

export default {
  data() {
    return {
      list: [{
        oneLevel: '一级列表',
        twoLevel: ['二级列表1'],
        show: false,
    }, {
        oneLevel: '一级列表',
        twoLevel: ['二级列表2', '二级列表2', '二级列表2'],
        show: false,
    }],
    };
  },
};
</script>

<style>
.mtui-cells{
  margin: 0;
}
</style>
