<template>
  <div>
      <mt-checkbox
        title="多选列表2"
         v-model="value"
         :max="2"
         :options="options2">
      </mt-checkbox>
    </div>
</template>
<script>

export default {
  created() {
    this.options2 = [{ label: '选项A', name: 'zzzzz', value: 'A', id: 'dd1', disabled: true },
    { label: '选项B', name: 'zzzz', value: 'B', id: 'dd2' },
    { label: '选项C', name: 'zzz', value: 'C', id: 'dd3' },
    { label: '选项D', name: 'zz', value: 'D', id: 'dd4' }];
  },
  data() {
    return {
      value: [],
    };
  },
};

</script>

