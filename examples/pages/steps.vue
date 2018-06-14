<style lang="less" scoped>
.aa{height: 300px;}
</style>

<template>
    <div>
        <div class="aa">
            <mt-steps :lists="lists" :animate="animate" :color="color" :orient="orient"></mt-steps>
        </div>
        <div>
            <button @click="animate = 'opacity'">动画一(默认)</button>
            <button @click="animate = 'back'">动画二</button>
        </div>
        <div>
            <button @click="orient = 'horizon'">水平</button>
            <button @click="orient = 'vertical'">垂直</button>
        </div>
        <div>
            <button @click="lists[1].status = true">步骤二</button>
            <button v-if="lists[1].status == true" @click="lists[2].status = true">步骤三</button>
            <button v-if="lists[2].status == true" @click="lists[3].status = true">步骤四</button>
        </div>
        <div>
            <button @click="lists[3].status = false">返回3</button>
            <button v-if="lists[3].status == false" @click="lists[2].status = false">返回2</button>
            <button v-if="lists[2].status == false" @click="lists[1].status = false">返回1</button>
        </div>
        <div>
            <button @click="color = '#0099FF'">直男色</button>
            <button @click="color = '#FF9999'">萝莉色</button>
            <button @click="color = '#33CC66'">原谅色</button>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      animate: 'opacity',
      orient: 'horizon',
      color: '',
      lists: [
        {
          title: '步骤一',
          cont: 'infoinfoinfoinfo1',
          status: true,
        }, {
          title: '步骤二',
          cont: 'infoinfoinfoinfo2',
          // animate: true,
          status: false,
        }, {
          title: '步骤三',
          cont: 'infoinfoinfoinfo3',
          status: false,
        }, {
          title: '步骤四',
          cont: 'infoinfoinfoinfo4',
          status: false,
        },
      ],

    };
  },
};
</script>
