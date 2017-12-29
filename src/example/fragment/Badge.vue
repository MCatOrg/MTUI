<style lang="less" scoped>
@import '../../styles/base/reset';
.mt-header{padding: .4rem;
    .mt-header_title{font-size: .6rem; color: @mtuiTextColorTitle}
    .mt-header_info{font-size: .3rem; color: @mtuiTextColorGray;}
}
.mt-body{padding-left: .3rem;}
.group{margin-bottom: .3rem;
    .group-header{margin-bottom: .1rem; color: @mtuiTextColorGray; font-size: .28rem; line-height: .4rem;}
}
/*徽章样式 START*/
.mtui-badge(){
    display: inline-block;
    height: .32rem;
    border-radius: .32rem;
    vertical-align: middle;
    background-color: #FF3B30;
    color: #FFFFFF;
}
.mtui-badge_text {
    .mtui-badge();
    font-size: .14rem;
    line-height: .3rem;
    text-align: center;
    height: .32rem;
    min-width: .12rem;
    padding-left: .1rem;
    padding-right: .1rem;
}
.mtui-badge_dot {
    display: inline-block;
    border-radius: .2rem;
    background-color: #FF3B30;
    height: .2rem;
    width: .2rem;
    vertical-align: middle;
}
.mtui-badge_more{
    .mtui-badge();
    padding-left: .14rem;
    padding-right: .14rem;
    min-width: .2rem;
    line-height: .12rem;
    font-size: .32rem;
}
.mtui-badge_more::before{
    content: "...";
}
/*徽章样式 END*/
/*列表样式 START*/
// .mtui-list{padding-left: .3rem; .setTopLine(); .setBottomLine();
//     .mtui-list_cell{line-height: .44rem; .setBottomLine();
//         .list-cell_bd{flex: 1;}
//     }
// }
/*列表样式 END*/

</style>
<template>
    <div class="container">
        <header class="mt-header">
            <h2 class="mt-header_title">Badge</h2>
            <p class="mt-header_info">徽章</p>
        </header>
        <main class="mt-body">
            <div class="group">
                <div class="group-header">所有徽章样式</div>
                <div class="group-body">
                    <span class="mtui-badge_dot"></span>
                    <span class="mtui-badge_text">1</span>
                    <span class="mtui-badge_text">new</span>
                    <span class="mtui-badge_more"></span>
                </div>
            </div>
            <div class="group">
                <div class="group-header">列表中使用徽标</div>
                <div class="group-body">
                    <!-- <ul class="mtui-list">
                        <li class="mtui-list_cell">
                            <div class="list-cell_bd">我的订单</div>
                            <div class="list-cell_ft">
                                内容
                                <span class="mtui-badge_dot"></span>
                            </div>
                        </li>
                    </ul> -->
                </div>
            </div>
        </main>
    </div>
</template>
<script>
export default {

}
</script>
