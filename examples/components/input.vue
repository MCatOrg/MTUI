<template>
  <div>
    <mt-input title="循环多列输入" val="我是预设" :inputs="yo"></mt-input>
    <mt-input title="不循环单列输入" :inputs="[{value: 'yoyo',name: 'yo'}]" validate></mt-input>
  </div>
</template>
<script>

export default {

  created() {
    this.yo = [{
      value: 'yoyo',
      name: 'yo',
      ifor: 'yo1',
      type: 'number',
    }, {
      value: 'yoyo',
      name: 'yoo',
      ifor: 'yo2',
      type: 'number',
    },
    ];
  },
};
</script>
