<template>
  <div>
      <mt-checkbox
        title="多选列表"
        :checkboxs="[{name: 'aa' , value: '测试一',rfor: 'bb'},
        {name: 'cc', value: '测试二',rfor: 'dd'}]">
      </mt-checkbox>
      <mt-checkbox
        title="多选列表2"
        :checkboxs="options1">
      </mt-checkbox>
    </div>
</template>
<script>

export default {

  created() {
    this.options1 = [
      {
        name: 'aaa',
        value: '测试一',
        rfor: 'bbb',
      },
      {
        name: 'aaaa',
        value: '测试二',
        rfor: 'bbbb',
      },
      {
        name: 'aaaaa',
        value: '测试三',
        rfor: 'bbbbb',
      },
    ];
  },
};

</script>

