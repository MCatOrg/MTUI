<style lang="less" scoped>
.div{height: 6rem;}
.div2{height: 12rem;}
</style>
<template>
    <div class="container">
        <loadmore>
            <div slot="top">啦啦啦</div>
            <div :class="['div',a?'div2':'']">
                <div>adsf</div>
                <button @click="load">加载</button>
            </div>
            <div slot="bottom">啦啦啦</div>
        </loadmore>
    </div>
</template>
<script>
export default {
    data(){
        return {
            a: false,
        }
    },
    methods: {
        load(){
            this.a = true
        }
    }
}
</script>
