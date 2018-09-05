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
      <br> -->

      <mt-tabBar :fixed="false" :tabBarData="tabBarData1"></mt-tabBar>
      <br>
      <br>
      <mt-tabBar :fixed="false" :tabBarData="tabBarData2"
      color="#666" activeColor="red" :index="2"></mt-tabBar>
    </div>


  </div>
</template>
<script>
export default {
  data() {
    return {
      tabBarData1: [
        {
          imgWidth: 50,
          imgHeight: 50,
          fontIcon: '',
          fontIconSize: '',
          to: 'tabbar',
          text: '',
          path: 'http://baidu.com',
        },
        {
          fontIcon: 'mtui-icon-search',
          imgWidth: 50,
          imgHeight: 50,
          fontIconSize: '',
          to: 'tabbar',
          text: '分类',
        },
        {
          imgWidth: 50,
          imgHeight: 50,
          fontIcon: '',
          fontIconSize: '',
          to: 'tabbar',
          text: '购物车',
        },
        {
          imgWidth: 50,
          imgHeight: 50,
          fontIcon: '',
          fontIconSize: '',
          to: 'tabbar',
          text: '个人中心',
        },
      ],
      tabBarData2: [
        {
          imgWidth: 50,
          imgHeight: 50,
          fontIcon: '',
          fontIconSize: '',
          to: 'tabbar',
          text: '',
        },
        {
          fontIcon: 'mtui-icon-search',
          imgWidth: 50,
          imgHeight: 50,
          fontIconSize: '',
          to: 'tabbar',
          text: '分类',
        },
        {
          imgWidth: 50,
          imgHeight: 50,
          fontIcon: '',
          fontIconSize: '',
          to: 'tabbar',
          text: '购物车',
        },
        {
          imgWidth: 50,
          imgHeight: 50,
          fontIcon: '',
          fontIconSize: '',
          to: 'tabbar',
          text: '个人中心',
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
  padding: .36rem;
  color: #666;
}
.box {
  width: 1rem;
  height: 1rem;
  line-height: 1rem;
  position: relative;
  margin: .2rem;
  text-align: center;
  display: inline-block;
  border: .01rem solid rgb(211, 65, 20);
}
</style>

