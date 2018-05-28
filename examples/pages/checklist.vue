<template>
  <div id="checklistPage">
    <mt-checklist
      title="普通复选框"
      v-model="value1"
      :options="['选项1','选项2','选项3']"
    ></mt-checklist>
    <mt-checklist
      title="带图标的复选框"
      v-model="value2"
      :options="options2"
    ></mt-checklist>
    <mt-checklist
      title="右对齐复选框"
      v-model="value3"
      :options="options3"
      align="right"
    ></mt-checklist>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: ['选项3'],
      value2: ['值B'],
      value3: ['值A'],
      options2: [
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
