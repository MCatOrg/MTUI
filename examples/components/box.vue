<style lang="less" scoped>
.mybox{padding-left: .3rem; padding-right: .3rem; box-sizing: border-box;}
.mybox-title{padding-top: .3rem; padding-bottom: .3rem; text-align: center;
    h1{font-size: .4rem; font-weight: bold;}
    p{font-size: .3rem; line-height: .6rem;}
}
</style>

<template>
    <div class="mybox">
        <div class="mybox-title">
            <h1>{{message.title}}</h1>
            <p>{{message.name}}</p>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    computed: {
        message(){
            return {
                title: this.$route.meta && this.$route.meta.title || '未定义名称',
                name: this.$route.name,
            }
        }
    },
}
</script>
