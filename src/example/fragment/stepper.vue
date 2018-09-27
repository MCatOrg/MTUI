<style lang="less" scoped>
// .mtui-stepper{display: inline-block;
//     .mtui-stepper_box{display: inline-block;}
//     .mtui-stepper_reduce, .mtui-stepper_add, .mtui-stepper_input{float: left; height: .48rem; border: .01rem solid #E5E5E5; line-height: .48rem; text-align: center; background-color: white;}

//     .mtui-stepper_reduce, .mtui-stepper_add{width: .58rem; font-size: .4rem;}
//     .mtui-stepper_reduce{margin-right: 4px;
//         &.disable{color: #E6E6E6;}
//     }
//     .mtui-stepper_add{margin-left: 4px;}
//     .mtui-stepper_reduce:before{content: "-";}
//     .mtui-stepper_add:before{content: "+";}
//     .mtui-stepper_input{width: .98rem; vertical-align: top; line-height: .48rem;}

//     //disable
//     &.dark{
//         .mtui-stepper_reduce, .mtui-stepper_add, .mtui-stepper_input{background-color: #FAFAFB; border: .01rem solid #FAFAFB;}
//     }
// }
</style>
<template>
    <div class="container">
        <mt-header :data="headerData"></mt-header>
        <main class="mt-body">
            <div class="group">
                <div class="group-header">展示</div>
                <div class="group-body_pad3">
                    <div class="mtui-stepper">
                        <span class="mtui-stepper_reduce disable"></span>
                        <input value="1" type="number" class="mtui-stepper_input" >
                        <span class="mtui-stepper_add"></span>
                    </div>
                    <div class="mtui-stepper dark">
                        <div class="mtui-stepper_box">
                            <span class="mtui-stepper_reduce"></span>
                            <input value="2" type="number" class="mtui-stepper_input" >
                            <span class="mtui-stepper_add"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="group">
                <div class="group-header">使用js渲染stepper</div>
                <div class="group-body_pad3">
                    <div class="stepperBox s">
                        <div class="mtui-stepper" mt-value="1" mt-interval="2"></div>
                        <div class="mtui-stepper" mt-value="3" mt-min="2"></div>
                        <div class="mtui-stepper" mt-value="2" mt-max="99"></div>
                    </div>
                </div>
            </div>
            <div class="group">
                <div class="group-header">默认情况下初始value: 1, 区间: 1, 最小: 1, 无限制最大值</div>
                <div class="group-body_pad3">
                    <div class="stepperBox s1">
                        <div class="mtui-stepper"></div>
                    </div>
                </div>
            </div>
            <div class="group">
                <div class="group-header">初始值为10，增加减少区间为2,最小值为8</div>
                <div class="group-body_pad3">
                    <div class="stepperBox s2">
                        <div class="mtui-stepper" mt-index="10" mt-value="10" mt-interval="2" mt-min="8"></div>
                    </div>
                </div>
            </div>
            <div class="group">
                <div class="group-header">最大值为99</div>
                <div class="group-body_pad3">
                    <div class="stepperBox s3">
                        <div class="mtui-stepper" mt-value="98" mt-min="0" mt-max="0"></div>
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>
<script>
import mtui from '../../js/mtui'
import mtHeader from '../component/header'
export default {
    components: {
        mtHeader,
    },
    data(){
        return {
            headerData:{
                title: 'Stepper',
                info: '数量加减'
            }
        }
    },
    mounted(){
        mtui.stepper({
            onChange: function(value){
                console.log(value)
            }
        })
    },
    methods:{
    }
}
</script>
