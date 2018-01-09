<style lang="less" scoped>

</style>
<template>
    <div class="container">
        <mt-header :data="headerData"></mt-header>
        <main class="mt-body">
            <div class="group">
                <div class="group-header">默认样式</div>
                <div class="group-body">
                    <div class="mtui-tabs">
                        <div class="mtui-tab active">
                            <span class="mtui-tab_text">选项是</span>
                        </div>
                        <div class="mtui-tab ">
                            <span class="mtui-tab_text">选项</span>
                        </div>
                        <div class="mtui-tab">
                            <span class="mtui-tab_text">选项</span>
                        </div>
                        <div class="mtui-tab ">
                            <span class="mtui-tab_text">选项</span>
                        </div>
                        <div class="mtui-tab ">
                            <span class="mtui-tab_text">选项</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="group">
                <div class="group-header">超出5个的多选项tab</div>
                <div class="group-body">
                    <div class="mtui-tabs overflow">
                        <div class="mtui-tab_acbox"><div class="mtui-tab_action"></div></div>
                        <input type="checkbox" id="arrow" name="arrow">
                        <label for="arrow" class="mtui-tab_arrow"></label>
                        
                        <div class="mtui-tabs_list">
                            <div class="mtui-tab_title">全部</div>
                            <div class="mtui-tab_box">
                                <div class="mtui-tab active">选项是是</div>
                                <div class="mtui-tab ">选项</div>
                                <div class="mtui-tab ">选项</div>
                                <div class="mtui-tab ">选项</div>
                                <div class="mtui-tab ">选项</div>
                                <div class="mtui-tab ">选项</div>
                                <div class="mtui-tab ">选项</div>
                            </div>
                            <div class="mtui-tab_line"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="group">
                <div class="group-header">js渲染的简单（少于5个）tabs</div>
                <div class="group-body">
                    <div class="mtTabs"></div>
                </div>
            </div>
            <div class="group">
                <div class="group-header">js渲染的超出5个的tabs</div>
                <div class="group-body">
                    <div class="mtTabs2"></div>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import $ from "webpack-zepto";
import mtui from '../../js/mtui';
import mtHeader from '../component/header'
export default {
    components: {
        mtHeader,
    },
    data(){
        return {
            headerData:{
                title: 'Tabs',
                info: '工具栏'
            }
        }
    },
    mounted(){
        $('.mtui-tabs .mtui-tab').on('click',function(){
            $(this).addClass('active').siblings().removeClass('active');
            $('.mtui-tab_line').css('left',$(this).index() * 1.5 + 0.15 + 'rem')
        })

        mtui.tabs({
            el: '.mtTabs',
            list: [
                {
                    text: '选项1',
                },
                {
                    text: '选项2',
                },
                {
                    text: '选项3',
                }
            ],
            onclick: function(value){
                console.log(value)
            }
        })

        mtui.tabs({
            el: '.mtTabs2',
            active: 2,
            list: [
                {
                    text: '选项1',
                    value: '12'
                },
                {
                    text: '选项2',
                },
                {
                    text: '选项3',
                },
                {
                    text: '选项4',
                },
                {
                    text: '选项5',
                },
                {
                    text: '选项6',
                }
            ],
            onclick: function(value){
                console.log(value)
            }
        })
    }
}
</script>
