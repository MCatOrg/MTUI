<style lang="less" scoped>
@import '../../styles/base/reset';
</style>
<template>
    <div class="container">
        <mt-header :data="headerData"></mt-header>
        <main class="mt-body">
            <div class="group">
                <div class="group-header">九宫格示例</div>
                <div class="group-body">
                    <ul class="mtui-grids">
                        <li class="mtui-grid">
                            <div class="mtui-grid_icon">
                                <img src="../images/icon_tabbar.png" alt="">
                            </div>
                            <div class="mtui-grid_label">首页</div>
                        </li>
                        <li class="mtui-grid">
                            <div class="mtui-grid_icon">
                                <img src="../images/icon_tabbar.png" alt="">
                            </div>
                            <div class="mtui-grid_label">首页</div>
                        </li>
                        <li class="mtui-grid">
                            <div class="mtui-grid_icon">
                                <img src="../images/icon_tabbar.png" alt="">
                            </div>
                            <div class="mtui-grid_label">首页</div>
                        </li>
                        <li class="mtui-grid">
                            <div class="mtui-grid_icon">
                                <img src="../images/icon_tabbar.png" alt="">
                            </div>
                            <div class="mtui-grid_label">首页</div>
                        </li>
                        <li class="mtui-grid">
                            <div class="mtui-grid_icon">
                                <img src="../images/icon_tabbar.png" alt="">
                            </div>
                            <div class="mtui-grid_label">首页</div>
                        </li>
                        <li class="mtui-grid">
                            <div class="mtui-grid_icon">
                                <img src="../images/icon_tabbar.png" alt="">
                            </div>
                            <div class="mtui-grid_label">首页</div>
                        </li>
                        <li class="mtui-grid">
                            <div class="mtui-grid_icon">
                                <img src="../images/icon_tabbar.png" alt="">
                            </div>
                            <div class="mtui-grid_label">首页</div>
                        </li>
                        <li class="mtui-grid">
                            <div class="mtui-grid_icon">
                                <img src="../images/icon_tabbar.png" alt="">
                            </div>
                            <div class="mtui-grid_label">首页</div>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import mtHeader from '../component/header'
export default {
    components: {
        mtHeader,
    },
    data(){
        return {
            headerData:{
                title: 'Grid',
                info: '九宫格'
            }
        }
    }
}
</script>
