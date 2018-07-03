<style scoped>

</style>
<template>
    <div>
        <mt-tabs :list="list" :active="1" @onclick="onclick"></mt-tabs>
        <br />
        <mt-tabs :list="list2" color="#DFB559" @onclick="onclick2"></mt-tabs>
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          text: '选项1', // tabs选项的文字
          badeg: 100,
        },
        {
          text: '选项2', // tabs选项的文字
          badeg: 11,
        },
        {
          text: '选项3', // tabs选项的文字
        },
        {
          text: '选项4', // tabs选项的文字
        },
      ],
      list2: [
        {
          text: '选项1', // tabs选项的文字
          value: '自定义value',
          badeg: 100,
        },
        {
          text: '选项2', // tabs选项的文字
          badeg: 12,
        },
        {
          text: '选项3', // tabs选项的文字
          badeg: 123,
        },
        {
          text: '选项4', // tabs选项的文字
          badeg: 'new',
        },
        {
          text: '选项5', // tabs选项的文字
        },
        {
          text: '选项6', // tabs选项的文字
        },
      ],
    };
  },
  methods: {
    onclick(value) {
      console.log(value);
    },
    onclick2(value) {
      console.log(value);
    },
  },
};
</script>
