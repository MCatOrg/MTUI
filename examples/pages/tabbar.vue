<template>
  <div id="tabbar">
    <h1>tabbar</h1>
    <div class="wrapper">
      <!-- <h3>tabBarData</h3>
      <p>img: 图片  String default http://192.168.3.93/img/icon_tabbar.png</p>
      <p>imgWidth: 图片大小 Number default 50px,</p>
      <p>imgHeight: 图片大小 Nunber default 50px,</p>
      <p>fontIcon: icon名称 String (使用icon 图片将不展示) default '',</p>
      <p>fontIconSize: icon大小 Number default 38px,</p>
      <p>to: 要导航的页面 String default /,</p>
      <p>text: item 文字 String default 首页,</p>
      <br>

      <h3>color</h3>
      <p>color: 没选中的颜色 String default #B3B3B3</p>
      <br>
      <h3>activeColor</h3>
      <p>activeColor: 选中的颜色 String default #4A87D6</p>
      <br>-->

      <mt-tab-bar :fixed="false" :tabBarData="tabBarData1" :iconSize="28"></mt-tab-bar>
      <mt-tab-bar :fixed="false" :tabBarData="tabBarData3" color="#666" activeColor="red" :index="2"></mt-tab-bar>
      <mt-tab-bar fixed :tabBarData="tabBarData1" :iconSize="28" fixedDir="top"></mt-tab-bar>
      <mt-tab-bar :fixed="true" :tabBarData="tabBarData2" color="#666" activeColor="red" :index="2"></mt-tab-bar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabBarData1: [
        {
          fontIcon: 'mtui-icon-shopIndex-o',
          fontIconSize: 38,
          to: 'tabbar',
          text: '首页',
          path: 'http://baidu.com',
        },
        {
          fontIcon: 'mtui-icon-shopClassify-o',
          fontIconSize: 48,
          to: 'tabbar',
          text: '分类',
        },
        {
          fontIcon: 'mtui-icon-purchaseList-o',
          fontIconSize: 58,
          to: 'tabbar',
          text: '购物车',
        },
        {
          fontIcon: 'mtui-icon-my-o',
          to: 'tabbar',
          text: '个人中心',
        },
      ],
      tabBarData3: [
        {
          img:
            'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/smiling-face-with-heart-shaped-eyes_1f60d.png',
          activeImg:
            'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/153/smiling-face-with-heart-shaped-eyes_1f60d.png',
          imgWidth: 44,
          imgHeight: 42,
          to: 'tabbar',
          text: '首页',
        },
        {
          img:
            'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/185/smiling-face-with-heart-shaped-eyes_1f60d.png',
          activeImg:
            'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojione/178/smiling-face-with-heart-shaped-eyes_1f60d.png',
          imgWidth: 44,
          imgHeight: 42,
          to: 'tabbar',
          text: 'tabbar',
        },
        {
          img:
            'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/smiling-face-with-heart-shaped-eyes_1f60d.png',
          activeImg:
            'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojidex/112/smiling-face-with-heart-shaped-eyes_1f60d.png',
          imgWidth: 44,
          imgHeight: 42,
          to: 'tabbar',
          text: '购物车',
        },
        {
          img: 'https://avatars3.githubusercontent.com/u/6128107?s=200&v=4',
          // activeImg:
          //   'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/146/grinning-face_1f600.png',
          imgWidth: 60,
          imgHeight: 58,
          to: 'tabbar',
          text: 'tabbar',
        },
      ],
      tabBarData2: [
        {
          img:
            'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/198/smiling-face-with-heart-shaped-eyes_1f60d.png',
          activeImg:
            'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/153/smiling-face-with-heart-shaped-eyes_1f60d.png',
          imgWidth: 44,
          imgHeight: 42,
          to: '/',
          text: '首页',
        },
        {
          img:
            'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/185/smiling-face-with-heart-shaped-eyes_1f60d.png',
          activeImg:
            'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojione/178/smiling-face-with-heart-shaped-eyes_1f60d.png',
          imgWidth: 44,
          imgHeight: 42,
          to: 'icon',
          text: 'icon',
        },
        {
          img:
            'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/smiling-face-with-heart-shaped-eyes_1f60d.png',
          activeImg:
            'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojidex/112/smiling-face-with-heart-shaped-eyes_1f60d.png',
          imgWidth: 44,
          imgHeight: 42,
          to: 'tabbar',
          text: '购物车',
        },
        {
          img: 'https://avatars3.githubusercontent.com/u/6128107?s=200&v=4',
          // activeImg:
          //   'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/146/grinning-face_1f600.png',
          imgWidth: 60,
          imgHeight: 58,
          path: 'https://cn.vuejs.org/',
          text: 'vue',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 7rem;
  margin: 0 auto;
}
h1 {
  padding: 0.36rem;
  color: #666;
}
.box {
  width: 1rem;
  height: 1rem;
  line-height: 1rem;
  position: relative;
  margin: 0.2rem;
  text-align: center;
  display: inline-block;
  border: 0.01rem solid rgb(211, 65, 20);
}
</style>

