<template>
  <div class="mt-tabbars" :class="{ 'fixed' : fixed}">
    <div class="mt-tabbar"
    v-for="(item,index) in tabBarData" :key="index"
    @click="itemClick(index)"  ref="tabBar">
      <router-link :to="item.to">
          <div class="mt-tabbar_icon">
            <i
              v-if="item.fontIcon"
              :class="item.fontIcon"
              :style="{fontSize: item.fontIconSize}">
            </i>
            <img
              v-else
              :src="item.img"
              :style="{width: item.imgWidth,height: item.imgHeight}" alt="">
          </div>
          <div
          class="mt-tabbar_label">{{item.text}}</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mt-tabBar',
  props: {
    color: {
      type: String,
      default: '#B3B3B3',
    },
    activeColor: {
      type: String,
      default: '#4A87D6',
    },
    tabBarData: {
      type: Array,
      default() {
        return [];
      },
    },
    fixed: {
      type: Boolean,
      default: true,
    },
    index: Number,
  },
  data() {
    return {
      tabBarIndex: 0,
    };
  },
  watch: {
    tabBarData: {
      handler() {
        if (this.tabBarData && this.tabBarData.length > 0) {
          this.tabBarData.forEach((item, index) => {
            this.tabBarData[index].img = item.img
              ? item.img
              : 'http://192.168.3.93/img/icon_tabbar.png';
            this.tabBarData[index].imgWidth = item.imgWidth
              ? `${item.imgWidth / 100}rem`
              : `${50 / 100}rem`;
            this.tabBarData[index].imgHeight = item.imgHeight
              ? `${item.imgHeight / 100}rem`
              : `${50 / 100}rem`;
            this.tabBarData[index].fontIcon = item.fontIcon
              ? item.fontIcon
              : '';
            this.tabBarData[index].fontIconSize = item.fontIconSize
              ? `${item.fontIconSize / 100}rem`
              : `${38 / 100}rem`;
            this.tabBarData[index].text = item.text ? item.text : '首页';
            this.tabBarData[index].to = item.to ? item.to : '/';
          });
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    init() {
      if (this.index) {
        this.tabBarIndex = this.index;
        this.$refs.tabBar[this.tabBarIndex].children[0].style = `color:${this.activeColor}`;
      } else {
        if (this.$refs.tabBar && this.$refs.tabBar.length) {
          this.$refs.tabBar.forEach((item) => {
            item.children[0].style = `color:${this.color}`;
          });
        }
        this.$refs.tabBar[0].children[0].style = `color:${this.activeColor}`;
      }
    },
    changeItem(index) {
      if (this.$refs.tabBar && this.$refs.tabBar.length) {
        this.$refs.tabBar.forEach((item) => {
          item.children[0].style = `color:${this.color}`;
        });
      }
      if (this.index) {
        this.$refs.tabBar[this.tabBarIndex].children[0].style = `color:${this.activeColor}`;
      } else {
        this.$refs.tabBar[index].children[0].style = `color:${this.activeColor}`;
      }
    },
    itemClick(index) {
      this.tabBarIndex = index;
      this.changeItem(index);
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang='less'>
@import "../../styles/base/fn";
@import "../../styles/base/variable/color";

.mt-tabbars {
  width: 100%;
  height: 0.88rem;
  display: flex;
  align-items: center;
  padding-top: 0.1rem;
  justify-content: space-around;
  position: relative;
  background: #fff;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    top: 0;
    border-top: 0.01rem solid#E5E5E5;
    // transform: scaleY(0.5);
  }
  // &::after {
  //   content: "";
  //   position: absolute;
  //   width: 100%;
  //   bottom: 0;
  //   border-bottom: 0.01rem solid#E5E5E5;
  //   // transform: scaleY(0.5);
  // }
}
.mt-tabbar {
  flex: 1;
  margin: 0 0.2rem;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  a{
    width: 100%;
    height: 100%;
  }
}
.mt-tabbar_label {
  font-size: 0.24rem;
  text-align: center;
  height: 0.36rem;
  line-height: 0.36rem;
  color: inherit;
}
.mt-tabbar_icon {
  overflow: hidden;
  // width: .52rem;
  height: 0.52rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 0.02rem;
  img {
    display: block;
    width: 0.52rem;
    height: 0.52rem;
  }
}

.fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>

