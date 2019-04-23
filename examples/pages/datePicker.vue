<template>
  <div class="">
    <mt-date-picker ref="datePicker" startTime="1990" endTime="2050" @confirm="confirmFn">

    </mt-date-picker>
    <div class="">
      <button type="button" name="button" @click="chooise('createTime')">点击显示日期选择器</button>
      <span>选择时间: {{createTime}}</span>
    </div>

    <div class="">
      <button type="button" name="button" @click="chooise('createTime2')">点击显示日期选择器</button>
      <span>选择时间: {{createTime2}}</span>
    </div>

  </div>

</template>

<script>
export default {
  data(){
    return {
      createTime:'',
      createTime2:'',
    }
  },
  methods: {
    chooise(time){
      this.$refs.datePicker.show(time);
    },
    confirmFn(data,field){
      console.log(data);
      console.log(field);
      //field:
     // 可以是要修改的字段，也可以是唯一标识，比如可以根据它来进行不同的回调
     // 注意：field的值要在调用show的时候传入
      this[field] = data[0]+'-'+data[1]+'-'+data[2];
    }
  }
}
</script>

<style lang="less" scoped>
</style>
