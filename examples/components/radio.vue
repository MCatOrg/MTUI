<template>
    <div>
        <mt-radio
         title="单选列表"
         v-model="value1"
         :options="options1">
         </mt-radio>
        <mt-cell title="选中的项是" :value="value1">{{ value1 }}</mt-cell>
    </div>
</template>
<script>
export default {
  created() {
    this.options1 = [{ label: '选项A', name: 'zzz', value: 'A', id: 'dd1' },
    { label: '选项B', name: 'zzz', value: 'B', id: 'dd2' }];
  },
  data() {
    return {
      value1: 'A',
    };
  },
};
</script>

