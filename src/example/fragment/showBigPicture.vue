<style lang="less" scoped>
// .mtui-bigPicturePopup{position: fixed; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; top: 0; left: 0;}
// .mtui-bigPicture{position: relative; z-index: 10001;}
.picture img{width: 3rem;}
</style>

<template>
    <div>
        <mt-header :data="headerData"></mt-header>

        <div class="main">
            <div class="picture">
                <img src="../images/123.jpg" class="mtui-showBigPicture" alt="">
                <img src="../images/456.jpg" class="mtui-showBigPicture" alt="">
                <img src="../images/logo.png" class="mtui-showBigPicture" alt="">
            </div>
        </div>

        <!-- <div class="mtui-bigPicturePopup">
            <div class="mtui-mask"></div>
            <img src="../images/logo.png" class="mtui-bigPicture" alt="">
        </div> -->
    </div>
</template>
<script>
import mtui from "../../js/mtui";
import $ from "webpack-zepto";
import mtHeader from '../component/header'
export default{
    components: {
        mtHeader,
    },
    data(){
        return {
            headerData:{
                title: '展示大图',
                info: 'showBigPicture'
            }
        }
    },
    mounted (){
        mtui.showBigPicture()
    }
}
</script>

