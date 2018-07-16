<template>
  <div id="accordionPa">
    <mt-accordion :options="options">
      <div slot="title-0">
        hello
      </div>
      <mt-cell-g :slot="0">
        <mt-cell title="标题" value="卢大师" to="/cell"></mt-cell>
        <mt-cell title="标题" value="卢大师" to="/cell" :showLoading="true"></mt-cell>
        <mt-cell title="标题" tips="带说明、跳转的列表项" to="/cell"></mt-cell>
      </mt-cell-g>
      <mt-radio :slot="1" v-model="valueIcon" :options="optionsIcon"></mt-radio>
      <mt-checklist :slot="2" v-model="value3" :options="options3" align="right"></mt-checklist>
    </mt-accordion>
    <br>
    <hr>
    <br>
    <mt-accordion :options="priceList">
        <template v-for="(item,i) in priceList">
        <div  :key="i+'t'" :slot="`title-${i}`" class="demoItem">
          sdfsd
        </div>
        <div :key="i" :slot="i">
          sdfsf
        </div>
        </template>
      </mt-accordion>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          title: '一级',
        },
        {
          title: '二级',
          show: true,
        },
        {
          title: '三级',
        },
      ],
      priceList: [1, 2, 2, 2, 2, 22],
      valueIcon: '芋头',
      optionsIcon: [
        {
          value: '玉米',
          icon: 'https://avatars2.githubusercontent.com/u/26383766?s=88&v=4',
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
      value3: ['值A'],
      options3: [
        {
          label: '选中禁用',
          value: '选中禁用的值',
          disabled: true,
          icon: 'https://avatars2.githubusercontent.com/u/26383766?s=88&v=4',
        },
        {
          label: '选项A',
          value: '值A',
          icon: 'https://avatars2.githubusercontent.com/u/897401?s=64&v=4',
        },
        {
          label: '选项B',
          value: '值B',
          icon: 'https://avatars1.githubusercontent.com/u/8280645?s=64&v=4',
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.demoItem{
  height: 0.88rem;
}
</style>
