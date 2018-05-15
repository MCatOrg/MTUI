<style lang="less" scoped>
.showBadge{padding-left: .3rem; padding-bottom: .3rem;}
</style>
<template>
    <div class="container">
        <mt-header :data="headerData"></mt-header>
        <main class="mt-body">
            <div class="group">
                <div class="group-header">所有徽章样式</div>
                <div class="group-body">
                    <div class="showBadge">
                        <span class="mtui-badge_dot"></span>
                        <span class="mtui-badge_circle">1</span>
                        <span class="mtui-badge_text">new</span>
                        <span class="mtui-badge_more"></span>
                    </div>
                </div>
            </div>
            <div class="group">
                <div class="group-header">列表中使用徽标</div>
                <div class="group-body">
                    <ul class="mtui-cells">
                        <li class="mtui-cell mtui-cell_access">
                            <div class="mtui-cell__bd">我的订单</div>
                            <div class="mtui-cell__ft">
                                <span>mtui-badge_dot</span>
                                <span class="mtui-badge_dot"></span>
                            </div>
                        </li>
                        <li class="mtui-cell mtui-cell_access">
                            <div class="mtui-cell__bd">我的订单</div>
                            <div class="mtui-cell__ft">
                                <span>mtui-badge_more</span>
                                <span class="mtui-badge_more"></span>
                            </div>
                        </li>
                        <li class="mtui-cell mtui-cell_access">
                            <div class="mtui-cell__bd">我的订单</div>
                            <div class="mtui-cell__ft">
                                <span>mtui-badge_circle</span>
                                <span class="mtui-badge_circle">99</span>
                            </div>
                        </li>
                        <li class="mtui-cell mtui-cell_access">
                            <div class="mtui-cell__bd">我的订单</div>
                            <div class="mtui-cell__ft">
                                <span>mtui-badge_text</span>
                                <span class="mtui-badge_text">123</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="group">
                <div class="group-header">右侧使用标徽</div>
                <div class="group-body">
                    <ul class="mtui-cells">
                        <li class="mtui-cell">
                            <div class="mtui-cell__hd">
                                <img src="../images/logo.png" style="width: .8rem; border: 1px solid #ccc; border-radius: .04rem;" alt="">
                                <span class="mtui-badge_dot" style="margin-left: -.2rem; margin-top: -.4rem;"></span>
                            </div>
                            <div class="mtui-cell__bd">
                                <p>
                                    <span>mtui-badge_dot</span>
                                    <span class="mtui-badge_dot"></span>
                                </p>
                                <p style="color: #999999; font-size: .24rem;">style="margin-left: -.2rem; margin-top: -.4rem;"</p>
                            </div>
                            <div class="mtui-cell__ft"></div>
                        </li>
                        <li class="mtui-cell mtui-cell_access">
                            <div class="mtui-cell__hd">
                                <img src="../images/logo.png" style="width: .8rem; border: 1px solid #ccc; border-radius: .04rem;" alt="">
                                <span class="mtui-badge_circle" style="margin-left: -.2rem; margin-top: -.4rem;">99</span>
                            </div>
                            <div class="mtui-cell__bd">
                                <p>mtui-badge_circle</p>
                                <p style="color: #999999; font-size: .24rem;">style="margin-left: -.2rem; margin-top: -.4rem;"</p>
                            </div>
                            <div class="mtui-cell__ft"></div>
                        </li>
                        <li class="mtui-cell mtui-cell_access">
                            <div class="mtui-cell__bd">
                                <span>我的订单</span>
                                <span class="mtui-badge_text">123</span>
                            </div>
                            <div class="mtui-cell__ft">
                                <span>mtui-badge_text</span>
                            </div>
                        </li>
                        <li class="mtui-cell mtui-cell_access">
                            <div class="mtui-cell__bd">
                                <span>我的订单</span>
                                <span class="mtui-badge_more"></span>
                            </div>
                            <div class="mtui-cell__ft">
                                <span>mtui-badge_more</span>
                            </div>
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
                title: 'Badge',
                info: '徽章'
            }
        }
    }
}
</script>
