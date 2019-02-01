<template>
  <div id="badge">
    <h1>Badge</h1>

    <div class="wrapper">
      <mt-grid :gridData="gridData"/>
    </div>

    <!-- <pre>
        <code>
          gridData: [
            {
              img: 'http://192.168.3.93/img/
              icon_tabbar.png',
              imgWidth： 60,
              imgHeight 60,
              fontIcon: '',
              fontIconColor: '#333',
              fontIconSize: '42',
              text: 'badge',
              textColor: '#333',
              to: '/',
            }
          ]
        </code>
      </pre> -->
      <!-- <h3>gridData</h3>
      <p>img: 图片  String default http://localhost/img/icon_tabbar.png,</p>
      <p>imgWidth: 图片宽度 Number default 60px,</p>
      <p>imgHeight: 图片高度 Nunber default 60px,</p>
      <p>fontIcon: icon名称 String (使用icon 图片将不展示) default '',</p>
      <p>fontIconColor: icon 颜色 String default #333,</p>
      <p>fontIconSize: icon大小 Number default 42px,</p>
      <p>to: 要导航的页面 String default /,</p>
      <p>text: item 文字 String default 首页,</p>
      <p>textColor: item 文字的颜色 String default #333,</p>
      <br> -->

  </div>
</template>
<script>
export default {
  data() {
    return {
      gridData: [
        {
          // img: 'http://192.168.3.93/img/icon_tabbar.png',
          fontIcon: 'mtui-icon-search',
          fontIconColor: 'red',
          fontIconSize: '48',
          to: '/badge',
          text: 'badges',
          textColor: '#666dcd',
        },
        {
          fontIcon: 'mtui-icon-search',
          fontIconColor: 'pink',
          to: '/switch',
          text: 'switch',
          textColor: '#333',
        },
        {
          imgWidth: 50,
          imgHeight: 50,
          fontIcon: '',
          fontIconColor: 'red',
          fontIconSize: '',
          to: '/tabbar',
          text: 'tabbar',
          textColor: 'red',
        },
        {
          imgWidth: 60,
          imgHeight: 60,
          fontIcon: '',
          fontIconColor: 'red',
          fontIconSize: '',
          to: '/tabs',
          text: 'tabs',
          textColor: 'blue',
        },
        {
          imgWidth: 42,
          imgHeight: 42,
          fontIcon: '',
          fontIconColor: 'red',
          fontIconSize: '',
          to: '/stepper',
          text: 'stepper',
          textColor: 'blue',
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>

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

