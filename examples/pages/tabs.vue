<style scoped>

</style>
<template>
    <div>
        <mt-tabs :list="list" @onclick="onclick"></mt-tabs>
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
        }
    }
}
</script>
