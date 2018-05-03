<style lang="less" scoped>
.group{padding-bottom: .2rem;}
</style>
<template>
    <div class="container">
        <mt-header :data="headerData"></mt-header>
        <main class="mt-body">
            <div class="group">
                <div class="group-header">单选列表</div>
                <div class="group-body">
                    <button class="mtui-btn mtui-btn__primary" @click="picker">单选列表</button>
                </div>
            </div>
            <div class="group">
                <div class="group-header">多列列表</div>
                <div class="group-body">
                    <button class="mtui-btn mtui-btn__primary" @click="pickers">多列列表</button>
                </div>
            </div>
            <div class="group">
                <div class="group-header">时间列表</div>
                <div class="group-body">
                    <button class="mtui-btn mtui-btn__primary" @click="dataPicker">时间列表</button>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import mtHeader from '../component/header'
import mtui from '../../js/mtui'
export default {
    components: {
        mtHeader,
    },
    data(){
        return {
            headerData:{
                title: 'Picker',
                info: '多列选择器，需要配合js实现'
            }
        }
    },
    methods:{
        //单列列表
        picker(){
            mtui.picker([{
                label: '飞机票',
                value: 0
            }, {
                label: '火车票',
                value: 1
            }, {
                label: '的士票',
                value: 2
            },{
                label: '公交票 (disabled)',
                disabled: true,
                value: 3
            }, {
                label: '其他',
                value: 4
            }], {
                onChange: function (result) {
                    console.log(result);
                },
                onConfirm: function (result) {
                    console.log(result);
                },
                search: true,
            });
        },
        //多列列表
        pickers(){
            mtui.picker([{
                label: '火车',
                value: 0,
                children: [
                    {
                        label: '卧铺',
                        value: 0
                    },{
                        label: '坐票',
                        value: 1
                    },{
                        label: '站票',
                        value: 2
                    },
                ]
            }, {
                label: '飞机',
                value: 1,
                children: [
                    {
                        label: '商务',
                        value: 0
                    },{
                        label: '普通',
                        value: 1
                    }
                ]
            }, {
                label: '大巴',
                value: 2,
                children: [
                    {
                        label: '特快',
                        value: 0
                    },{
                        label: '快线',
                        value: 1
                    },{
                        label: '普线',
                        value: 2
                    }
                ]
            }], {
                onChange: function (result) {
                    console.log(result);
                },
                onConfirm: function (result) {
                    console.log(result);
                },
                search: true,
            });
        },
        //时间列表
        dataPicker(){
            mtui.datePicker({
                start: 1990,
                end: new Date().getFullYear(),
                onChange: function (result) {
                    console.log(result);
                },
                onConfirm: function (result) {
                    console.log(result);
                }
            });
        }
    }
}
</script>
