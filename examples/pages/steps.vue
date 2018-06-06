<style lang="less" scoped>
.aa{height: 300px;}
</style>

<template>
    <div>
        <div class="aa">
            <mt-steps :lists="lists" :color="color" :orient="orient"></mt-steps>
        </div>
        <div>
            <button @click="orient = 'horizon'">水平</button>
            <button @click="orient = 'vertical'">垂直</button>
        </div>
        <div>
            <button @click="lists[1].status = true">步骤二</button>
            <button v-if="lists[1].status == true" @click="lists[2].status = true">步骤三</button>
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
    data(){
        return {
            orient: 'horizon',
            color: '#EB5757',
            lists: [
                {
                    title: '步骤一',
                    cont: 'infoinfoinfoinfo1',
                    status: true,
                },{
                    title: '步骤二',
                    cont: 'infoinfoinfoinfo2',
                    // animate: true,
                    status: false,
                },{
                    title: '步骤三',
                    cont: 'infoinfoinfoinfo3',
                    status: false,
                },
            ],

        }
    }
}
</script>
