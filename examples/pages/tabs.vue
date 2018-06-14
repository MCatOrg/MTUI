<style scoped>

</style>
<template>
    <div>
        <mt-tabs :list="list" @onclick="onclick"></mt-tabs>
        <br />
        <mt-tabs :list="list2" @onclick="onclick2"></mt-tabs>
    </div>
</template>
<script>
export default {
    data(){
        return {
            list: [
                {
                    text: '选项1',    //tabs选项的文字
                },
                {
                    text: '选项2',    //tabs选项的文字
                },
                {
                    text: '选项3',    //tabs选项的文字
                },
                {
                    text: '选项4',    //tabs选项的文字
                },
            ],
            list2: [
                {
                    text: '选项1',    //tabs选项的文字
                    value: '自定义value',
                },
                {
                    text: '选项2',    //tabs选项的文字
                },
                {
                    text: '选项3',    //tabs选项的文字
                },
                {
                    text: '选项4',    //tabs选项的文字
                },
                {
                    text: '选项5',    //tabs选项的文字
                },
                {
                    text: '选项6',    //tabs选项的文字
                },
            ]
        }
    },
    methods: {
        onclick(value){
            console.log(value)
        },
        onclick2(value){
            console.log(value)
        }
    }
}
</script>
