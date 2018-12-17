<style lang="less" scoped>
.container{background-color: #f5f5f5;}

.title{line-height: 1rem; background-color: white; position: relative; z-index: 2;}

.list{background-color: white;}

</style>


<template>
    <div class="container">
        <p class="title">load more pages</p>

        <load-more class="list" ref="myLoadMore" :top-method="topLoadMethod" @onTopCancel="onTopCancel" :bottom-all-loaded="bottomAllLoaded" :bottom-method="bottomLoadMethod">
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
            </div>
        </load-more>
    </div>
</template>
<script>
export default {
    data(){
        return {
            timer: null,

            topRefushLock: false,               //顶部刷新的事务锁，为防止重复刷新
            canRefush: true,                    //控制是否需要刷新
            bottomAllLoaded: false,
        }
    },
    methods: {
        topLoadMethod(){
            if(!this.topRefushLock){                //事务锁
                console.log("执行了http请求")

                this.topRefushLock = true           //关锁
                this.timer = setTimeout(_=>{        //模拟http请求
                    if(this.canRefush){             //判断是否需要刷新
                        this.$Toast("加载完成")
                    }

                    //重要操作
                    this.canRefush = true                       //开锁
                    this.topRefushLock = false                  //开锁
                    this.$refs.myLoadMore.onTopLoaded()          //重要，用于关闭上加载动画
                },3000)
            }else this.canRefush = true                       //由于还在http请求耗时中，用户又开启了刷新，应该开锁
        },
        //当loading的时候，用户上推，会关闭loading，这时应该停止http请求，或不执行刷新
        onTopCancel(){
            console.log("取消刷新")
            this.canRefush = false              //不需要刷新
        },
        bottomLoadMethod(){
            this.timer = setTimeout(_=>{
                this.$Toast("加载完成")

                this.$refs.myLoadMore.onBottomLoaded()          //重要，用于关闭下加载动画
                this.bottomAllLoaded = true
            },3000)
        },
    }
}
</script>
