<template>
  <div id="pickerPage">
    <h4>js调用picker</h4>
    <button @click="jsPicker">picker</button>
    <br>
    <h4>js调用datePicker</h4>
    <button @click="jsDatePicker">js调用datePicker</button>
    <br>
    <h4>使用search</h4>
    <button @click="jsSearchPicker">js调用datePicker</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    jsPicker() {
      this.$picker([
        {
          label: '1',
          value: '1',
        }, {
          label: '2',
          value: '2',
        }, {
          label: '3',
          value: '3',
        },
      ], [
        {
          label: 'A',
          value: 'A',
        }, {
          label: 'B',
          value: 'B',
        }, {
          label: 'C',
          value: 'C',
        },
      ], [
        {
          label: 'A',
          value: 'A',
        }, {
          label: 'B',
          value: 'B',
        }, {
          label: 'C',
          value: 'C',
        },
      ], {
        search: true,
        searchPlaceholder:'选择',
        onChange(result) {
          console.log(result);
        },
        onConfirm(result) {
          console.log(result);
        },
      });
    },
    jsDatePicker() {
      this.$datePicker({
        start: 1990,
        end: new Date().getFullYear(),
        onChange(result) {
          console.log(result);
        },
        onConfirm(result) {
          console.log(result);
        },
      });
    },
    jsSearchPicker(){
      this.$picker([
        {
          label: '从化支行',
          value: '1',
        }, {
          label: '越秀支行',
          value: '2',
        }, {
          label: '荔湾支行',
          value: '3',
        },
      ], {
        search: true,
        searchPlaceholder:'选择',
        onChange(result) {
          console.log(result);
        },
        onConfirm(result) {
          console.log(result);
        },
      });
    }
  },
};
</script>
<style lang="less" scoped>
</style>
