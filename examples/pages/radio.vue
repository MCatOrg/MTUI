<template>
  <div id="radioPage">
    <mt-radio v-model="value" :options="options" title="单选框按钮"></mt-radio>
    <mt-radio v-model="valueIcon" :options="optionsIcon" title="带图标的单选框"></mt-radio>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 1,
      options: [1, 2, 3],
      valueIcon: '芋头',
      optionsIcon: [
        {
          value: '被禁用',
          icon: 'https://avatars2.githubusercontent.com/u/26383766?s=88&v=4',
          disabled: true,
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
    };
  },
  watch: {
  },
};
</script>
