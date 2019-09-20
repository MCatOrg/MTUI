<template>
  <div id="pickerPage">
    <h4>单列</h4>
    <div class="box">
      <mt-picker :slots="list" @change="onValuesChange" selectedColor="#DFB559"
      :showToolbar="true"
      :showSearch="true">
        <!-- showToolbar -->
        <div class="pickerBar">
          <span>取消</span>
          <span>确定</span>
        </div>
        <!-- showToolbar -->
      </mt-picker>
    </div>
    <h4>多列</h4>
    <br>
    <mt-picker :slots="list2" @change="onValuesChange" highlightBorderColor="#DFB559"/>

    <br>
    <h4>js调用picker</h4>
    <button @click="jsPicker">picker</button>
    <br>
    <h4>js调用datePicker</h4>
    <button @click="jsDatePicker">js调用datePicker</button>
    <h4>js调用dateRangePicker</h4>
    <button @click="jsDateRangePicker">js调用dateRangePicker</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          flex: 1,
          values: ['1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995'],
          className: 'slot1',
          defaultIndex: 3,
        },
      ],
      list2: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right',
          defaultIndex: 2,
        }, {
          divider: true,
          content: '-',
          className: 'slot2',
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left',
        },
      ],
    };
  },
  methods: {
    onValuesChange(vm, value) {
      console.log('data', vm);
      console.log('value', value);
    },
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
    jsDateRangePicker() {
      this.$datePicker({
        start: 1990,
        end: new Date().getFullYear(),
        dateRange:true,
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
.pickerBar{
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 0.3rem;
  height: 0.88rem;
  justify-content: space-between;
  align-items: center;
  border-top: 0.01rem solid #e5e5e5;
  border-bottom: 0.01rem solid #e5e5e5;
  >span{
    color: #999;
    font-size: 0.34rem;
    &:last-of-type{
      color:red;
    }
  }
}
.box{
  width: 6.9rem;
  margin: 0.1rem auto;
  border: 0.01rem solid #e5e5e5;
}
</style>
