<style lang="less" scoped>
// .aa{height: 400px;}
</style>

<template>
    <div>
        <div class="aa">
            <mt-steps :lists="lists" :orient="vertical"></mt-steps>
        </div>
        <div>
            <button @click="lists[1].status = true">click</button>
        </div>
        <div>
            <button @click="lists[2].status = true">click2</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            vertical: 'vertical',
            horizon: 'horizon',
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
