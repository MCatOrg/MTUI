<style lang="less" scoped>
@import '../../styles/base/variable/color.less';
.fixed{position: fixed; width: 100%; height: 100%;}
.mask{background-color: black; z-index: 50; opacity: .4; top: 0; left: 0;}
.flex-between{display: flex; justify-content: space-between;}
.flex1{flex: 1;}

.pointer{cursor: pointer;}
.color-primary{color: @mtuiColorPrimary !important;}
.color-success{color: @mtuiDialogLinkColor !important;}
.color-danger{color: @mtuiColorWarn !important;}
.color-black{color: black !important;}
.color-gray{color: #666 !important;}

.main{width: 6rem; background-color: white; border-radius: .08rem; position: absolute; z-index: 51; top: 50%; left: 50%; transform: translate(-50%,-50%);
    .title{line-height: .88rem; border-bottom: 1px solid #EEE; text-align: center; padding-left: .2rem; padding-right: .2rem;}
    .content{padding-top: .3rem; padding-bottom: .3rem; padding-left: .2rem; padding-right: .2rem;}
    .tip{color: #666; font-size: .26rem; text-align: center; line-height: .44rem;}
    .action{line-height: .8rem; text-align: center; border-top: 1px solid #eee;
        >div:first-child{border-right: 1px solid #EEE;}
    }
}

// 动画
.fade-enter-active, .fade-leave-active {transition: all .3s;}
.fade-enter, .fade-leave-to {opacity: 0;}

// 进入效果
.up-enter-active, .up-leave-active {transition: all .3s;}
.up-enter, .up-leave-to {top: 100%; opacity: 0;}

.down-enter-active, .down-leave-active {transition: all .3s;}
.down-enter, .down-leave-to {top: -50%; opacity: 0;}

.left-enter-active, .left-leave-active {transition: all .3s;}
.left-enter, .left-leave-to {left: -50%; opacity: 0;}

.right-enter-active, .right-leave-active {transition: all .3s;}
.right-enter, .right-leave-to {left: 100%; opacity: 0;}
</style>
<template>
    <div class="popup">
        <transition name="fade">
            <div class="mask fixed" v-if="visible" @click="cancel"></div>
        </transition>
        <transition :name="animate">
            <div class="main" v-if="visible">
                <slot name="title">
                    <div class="title">{{title}}</div>
                </slot>

                <slot name="content">
                    <div class="content">
                        <p class="tip">{{content}}</p>
                    </div>
                </slot>

                <slot name="action">
                    <div class="flex-between action">
                        <div class="flex1" @click="cancel">取消</div>
                        <div class="flex1 color-primary" @click="submit">确定</div>
                    </div>
                </slot>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'mt-popup',
    props: {
        // opacity: {
        //     type: [Number, String],
        //     default: .4,
        // },
        title: {
            type: String,
            default: '标题'
        },
        content: {
            type: String,
            default: '提示内容'
        },
        visible: {
            type: Boolean,
            default: false,
        },
        animate: {
            type: String,
            validator: function (value) {
                return ['up', 'down', 'left', 'right', 'opacity'].indexOf(value) !== -1
            },
            default: 'up',
        }
    },
    data(){
        return {

        }
    },
    methods: {
        cancel(){
            this.$emit("update:visible",false)
            this.$emit("oncancel")
        },
        submit(){
            this.$emit("update:visible",false)
            this.$emit('onsubmit')
        },
    }
}
</script>
