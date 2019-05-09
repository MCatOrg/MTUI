<template>
  <div class="mt-tabbars" :class="{ 'fixed' : fixed}" :style="fixedDirSty">
    <div
      class="mt-tabbar"
      v-for="(item,index) in tabBarData"
      :key="index"
      @click="itemClick(item,index)"
      :style="{ 'color': index == tabBarIndex ? activeColor :color }"
      ref="tabBar"
    >
      <div class="mt-tabbar_icon">
        <i v-if="item.fontIcon" :class="item.fontIcon" :style="{fontSize: item.fontIconSize}"></i>
        <img
          v-else
          :src="index == tabBarIndex ? item.activeImg : item.img"
          :style="item|imgSize"
          alt
        >
      </div>
      <div class="mt-tabbar_label">{{item.text}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'mt-tab-bar',
  props: {
    // 颜色
    color: {
      type: String,
      default: '#B3B3B3',
    },
    // 图标选择颜色
    activeColor: {
      type: String,
      default: '#4A87D6',
    },
    // tabbar 数据
    tabBarData: {
      type: Array,
      default() {
        return [];
      },
    },
    // 是否定位
    fixed: {
      type: Boolean,
      default: true,
    },
    // 定位 位置 top bottom
    fixedDir: {
      type: String,
      default: 'bottom',
    },
    // 点到第几个
    index: Number,
    // 定位的z-index
    zIndex: {
      type: Number,
      default: 9,
    },
    // 图标大小
    iconSize: {
      type: Number,
      default: 38,
    },
  },
  data() {
    return {
      tabBarIndex: 0,
    };
  },
  watch: {
    tabBarData: {
      handler(n, o) {
        if (n && n.length) {
          n.forEach((item) => {
            item.activeImg = item.activeImg || item.img;
            item.fontIconSize = item.fontIconSize && `${item.fontIconSize / 100}rem` || `${this.iconSize / 100}rem`;
          });
        }
      },
      immediate: true,
    },
  },
  computed: {
    fixedDirSty() {
      return `${this.fixedDir}:0;z-index:${this.zIndex}`;
    },
  },
  filters: {
    imgSize(obj) {
      const w = obj.imgWidth || 50;
      const h = obj.imgHeight || 50;
      return `width: ${w / 100}rem;height: ${h / 100}rem`;
    },
  },
  methods: {
    itemClick(item, index) {
      this.tabBarIndex = index;
      if (item.path) {
        window.location.href = item.path;
      } else {
        this.$router.push(item.to);
      }
    },
  },
  mounted() {
    this.tabBarIndex = this.index || 0;
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
  }
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
  a {
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
  // bottom: 0;
  left: 0;
  right: 0;
  // z-index: 9;
}
@supports (bottom: constant(safe-area-inset-bottom)) or
  (bottom: env(safe-area-inset-bottom)) {
  .fixed {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>

