<style lang="less" scoped>

//审核
.flex-between{display: flex; justify-content: space-between;}
.pass{font-size: .26rem; line-height: .6rem; padding: .1rem .3rem;}
.pass-item{border-bottom: 1px solid #eee; padding-bottom: .1rem; padding-top: .1rem;}
.pass-item:last-child{border-bottom: 0;}
.TargetRemark{height: 2rem; padding: .2rem; resize: none; border: 1px solid #e5e5e5; width: 100%; box-sizing: border-box;}
.pass_status{padding-left: .3rem; text-align: right;}
</style>
<template>
    <div class="container">
        <p>基本使用</p>
        <button @click="visible = true">popup</button>
        <mt-popup :visible.sync="visible"></mt-popup>

        <p>自定义标题和内容 和 监听事件</p>
        <button @click="delVisible = true">自定义标题和内容</button>
        <mt-popup :visible.sync="delVisible" :title="'系统提示'" :content="'操作将永久删除数据，是否继续？'" @oncancel="onDelCancel" @onsubmit="onDelSubmit"></mt-popup>

        <p>自定义内容</p>
        <button @click="passVisible = true">自定义标题和内容</button>
        <mt-popup :visible.sync="passVisible" :title="'审核'" @oncancel="onPassCancel" @onsubmit="onPassSubmit">
            <div slot="content">
                <div class="pass">
                    <div class="pass-item flex-between">
                        <div class="flex-between_hd">操作状态</div>
                        <div class="flex1 pass_status" @click="selectOperate">
                            <span>{{operate[operateIndex].label}}</span>
                            <i class="mtui-icon-right"></i>
                        </div>
                    </div>
                    <div class="pass-item">
                        <div style="text-align: left;">操作备注</div>
                        <div>
                            <textarea class="TargetRemark" v-model="TargetRemark"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </mt-popup>

        <p>出现动画 默认是由下往上 up</p>
        <button @click="downDisible = true">down</button>
        <mt-popup :visible.sync="downDisible" animate="down"></mt-popup>
        <button @click="leftDisible = true">left</button>
        <mt-popup :visible.sync="leftDisible" animate="left"></mt-popup>
        <button @click="rightDisible = true">right</button>
        <mt-popup :visible.sync="rightDisible" animate="right"></mt-popup>
        <button @click="opacityDisible = true">opacity</button>
        <mt-popup :visible.sync="opacityDisible" animate="opacity"></mt-popup>


        <p>点击mask不可关闭 和 mask点击事件</p>
        <button @click="maskDisible = true">down</button>
        <mt-popup :visible.sync="maskDisible" @onClickMask="onClickMask" :closeByMask="false" animate="down"></mt-popup>

    </div>
</template>
<script>
export default {
    data(){
        return {
            visible: false,
            delVisible: false,
            passVisible:  false,

            downDisible: false,
            leftDisible: false,
            rightDisible: false,
            opacityDisible: false,

            maskDisible: false,

            TargetRemark: '',
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
        }
    },
    methods: {
        onDelCancel(){
            this.$Toast('您点击了取消')
        },
        onDelSubmit(){
            this.$Toast('您点击了确定')
        },

        //审核
        //选择通过还是失败
        selectOperate(){
            this.$picker(this.operate, {
                id: 'selectOperate',
                onConfirm: value => {
                    this.operateIndex = value[0].value
                }
            })
        },
        onPassCancel(){
            this.$Toast('您点击了取消')
        },
        onPassSubmit(){
            this.$Toast('您点击了确定：'+this.operate[this.operateIndex].label)
            console.log({
                TargetRemark: this.TargetRemark,
                operate: this.operate[this.operateIndex].label
            })
        },

        onClickMask(){
            this.$Toast("点击了mask")
        }
    }
}
</script>
