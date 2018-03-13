<style lang="less">
.bgcolor{background-color: red !important;}
</style>
<template>
    <div>
        <div>js弹出popup</div>
        <div>
            <button class="mtui-btn mtui-btn__mini mtui-btn__primary" @click="show">点我</button>
        </div>
        <div class="text">
            <p>打法上发文拉完了网络科技</p>
            <p>打法上发文拉完了网络科技</p>
            <p>打法上发文拉完了网络科技</p>
            <p>打法上发文拉完了网络科技</p>
            <p>打法上发文拉完了网络科技</p>
        </div>
    </div>
</template>
<script>
import mtui from '../../js/mtui'
export default {
    mounted(){
        mtui.popup({
            el: '.text',
            // position: 'top',
            // width: 50,
            height: 80,
            // showClose: true,
            // closeLabel: '返回',
            bgColor: '.bgcolor'
        })
    },
    methods:{
        show(){
            mtui.popup({
                el: '.text',
                height: 80,
            })
        }
    }
}
</script>
