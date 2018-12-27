<template>
    <div class="popup-demo">
        <!-- 中部弹出 -->
        <mt-button type="primary" @click="showPopUp('center')">中部弹出</mt-button>
        <mt-popup v-model="isPopupShow.center" position="center">
            <div class="mt-example-popup-center">
               <div class="mt-example-center-item flex-between">
                   <div class="flex-between_hd">操作状态</div>
                   <div class="flex1 pass_status" @click="selectOperate">
                        <span>{{operate[operateIndex].label}}</span>
                        <i class="mtui-icon-right"></i>
                    </div>
               </div>
               <div class="mt-example-center-item">
                    <div style="text-align: left;">操作备注</div>
                    <div>
                        <textarea class="targetRemark" v-model="targetRemark"></textarea>
                    </div>
                </div>
            </div>
        </mt-popup>
        <!-- 顶部弹出 -->
        <mt-button type="primary" @click="showPopUp('top')">顶部弹出</mt-button>
        <mt-popup v-model="isPopupShow.top" position="top" :hasMask="false">
            <div class="mt-example-popup-top">
                Popup top
            <i class="icon mtui-icon-close" @click="hidePopUp('top')"></i>
            </div>
        </mt-popup>
        <!-- 底部弹出 -->
        <mt-button type="primary" @click="showPopUp('bottom')">底部弹出</mt-button>
        <mt-popup v-model="isPopupShow.bottom" position="bottom">
            <div class="mt-example-popup-bottom">
                Popup bottom
            </div>
        </mt-popup>
        <!-- 左侧弹出 -->
        <mt-button type="primary" @click="showPopUp('left')">左侧弹出</mt-button>
        <mt-popup v-model="isPopupShow.left" position="left" :hasMask="false">
            <div class="mt-example-popup-left">
                Popup Left
                <i class="icon mtui-icon-close" @click="hidePopUp('left')"></i>
            </div>
        </mt-popup>
        <!-- 右侧弹出 -->
        <mt-button type="primary" @click="showPopUp('right')">右侧弹出</mt-button>
        <mt-popup v-model="isPopupShow.right" position="right">
            <div class="mt-example-popup-right">
                Popup right
            </div>
        </mt-popup>
    </div>
</template>

<script>
export default {
    name: 'popup-demo',
    data() {
        return {
            isPopupShow: {},
            operate: [
                {
                    label: '审核通过',
                    value: 0,
                },{
                    label: '审核失败',
                    value: 1,
                }
            ],
            operateIndex: 0,
            targetRemark: '',
        }
    },
    methods: {
        showPopUp(type) {
            this.$set(this.isPopupShow, type, true)
        },
        hidePopUp(type) {
            this.$set(this.isPopupShow, type, false)
        },
        selectOperate() {
            this.$picker(this.operate, {
                id: 'selectOperate',
                onConfirm: value => {
                    this.operateIndex = value[0].value
                    this.$Toast(value[0].label)
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.popup-demo {
    width: 100%;
    height: 100%;
}
.mt-example-popup-center {
    width: 6rem;
    line-height: .6rem;
    background: #FFFFFF;
    font-size: .26rem;
    padding: .1rem .3rem;
    .mt-example-center-item{
        border-bottom: 1px solid #eee;
        padding-bottom: .1rem;
        padding-top: .1rem;
        &:last-child {
            border-bottom: 0;
        }
    }
    .flex-between{
        display: flex;
        justify-content: space-between;
    }
    .targetRemark{
        height: 2rem;
        padding: .2rem;
        resize: none; border: 1px solid #e5e5e5;
        width: 100%;
        box-sizing: border-box;
        -webkit-appearance:none;
    }
}
.mt-example-popup-left, .mt-example-popup-right {
    height: 100%;
    background: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
}
.mt-example-popup-left {
    width: 7.5rem;
    .mtui-icon-close {
        position: absolute;
        right: 0.2rem;
        top: 0.2rem;
    }
}
.mt-example-popup-right {
    padding: 0 1.5rem;
}
.mt-example-popup-top {
    width: 100%;
    height: 0.75rem;
    line-height: 0.75rem;
    text-align: center;
    background: rgba(74,144,226,0.8);
    color: #FFFFFF;
    .mtui-icon-close {
        position: absolute;
        right: 0.2rem;
        top: 50%;
        transform: translateY(-50%)
    }
}
.mt-example-popup-bottom {
    width: 100%;
    height: 6rem;
    line-height: 6rem;
    text-align: center;
    background: #FFFFFF;
}
</style>


