<template>
  <div class="mt-grids">
    <!-- <slot></slot> -->
    <router-link :to="item.to" tag="div" class="mt-grid"
      v-for="(item,index) in gridData"
      :key="index">
      <div class="mt-grid_icon">
        <i
          v-if="item.fontIcon"
          :class="item.fontIcon"
          :style="{color: item.fontIconColor,fontSize: item.fontIconSize}">
        </i>
        <img
          v-else
          :src="item.img"
          :style="{width: item.imgWidth,height: item.imgHeight}" alt="">
      </div>
      <div
      class="mt-grid_label"
      :style="{color: item.textColor}">{{item.text}}</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'mt-grid',
  props: {
    gridData: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  watch: {
    gridData: {
      // 监听数据赋默认值
      handler() {
        if (this.gridData && this.gridData.length > 0) {
          this.gridData.forEach((item, index) => {
            this.gridData[index].img = item.img ? item.img : 'http://192.168.3.93/img/icon_tabbar.png';
            this.gridData[index].imgWidth = item.imgWidth ? `${item.imgWidth / 100}rem` : `${60 / 100}rem`;
            this.gridData[index].imgHeight = item.imgHeight ? `${item.imgHeight / 100}rem` : `${60 / 100}rem`;
            this.gridData[index].fontIcon = item.fontIcon ? item.fontIcon : '';
            this.gridData[index].fontIconColor = item.fontIconColor ? item.fontIconColor : '#333';
            this.gridData[index].fontIconSize = item.fontIconSize ? `${item.fontIconSize / 100}rem` : `${42 / 100}rem`;
            this.gridData[index].text = item.text ? item.text : '首页';
            this.gridData[index].textColor = item.textColor ? item.textColor : '#333';
            this.gridData[index].to = item.to ? item.to : '/';
          });
        }
      },
      immediate: true,
      deep: true,
    },
  },

};
</script>

<style lang='less' scoped>
@import "../../styles/base/variable/color.less";
@import "../../styles/base/variable/global.less";
@import "../../styles/base/mixin/setOnepx.less";
@import "../../styles/icon/mtui-icon_font.less";

.mt-grids {
  position: relative;
  overflow: hidden;

  &:before {
    .setTopLine(@mtuiGridBorderColor);
  }
  &:after {
    .setLeftLine(@mtuiGridBorderColor);
  }
}

.mt-grid {
  position: relative;
  float: left;
  padding: 0.16rem 0.1rem;
  width: 100% / @mtuiGridColumnCount;
  box-sizing: border-box;

  &:before {
    .setRightLine(@mtuiGridBorderColor);
  }
  &:after {
    .setBottomLine(@mtuiGridBorderColor);
  }

  &:active {
    background-color: @mtuiBgColorActive;
  }
}

.mt-grid_icon {
  width: @mtuiGridIconSize;
  height: @mtuiGridIconSize;
  line-height: @mtuiGridIconSize;
  margin: 0 auto;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;


  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  & + .mt-grid_label {
    margin-top: 0.1rem;
  }
}

.mt-grid_label {
  display: block;
  text-align: center;
  height: 0.36rem;
  line-height: 0.36rem;
  color: inherit;
  font-size: @mtuiGridFontSize;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>

