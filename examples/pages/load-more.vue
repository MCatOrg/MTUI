<style lang="less" scoped>
.container{background-color: #f5f5f5;}
.list{background-color: white;}

</style>


<template>
    <div class="container">
        <p>load more pages</p>

        <load-more class="list" ref="myLoadMore" @topLoadMethod="topLoadMethod" @onTopCancel="onTopCancel" @bottomLoadMethod="bottomLoadMethod">
            <div>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
                <p>lalala</p>
            </div>
        </load-more>
    </div>
</template>
<script>
export default {
    data(){
        return {
            timer: null
        }
    },
    methods: {
        topLoadMethod(){
            this.timer = setTimeout(_=>{
                this.$Toast("加载完成")

                this.$refs.myLoadMore.offTopLoad()          //重要，用于关闭上加载动画
            },3000)
        },
        onTopCancel(){
            console.log("取消刷新")
            if(this.timer) clearTimeout(this.timer)
        },
        bottomLoadMethod(){
            this.timer = setTimeout(_=>{
                this.$Toast("加载完成")

                this.$refs.myLoadMore.offBottomLoad()          //重要，用于关闭下加载动画
            },3000)
        },
    }
}
</script>
