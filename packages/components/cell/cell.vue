<template>
<div>
  <div class="mtui-cells__title">{{title}}</div>
    <div class="mtui-cells" v-for="(cell, i) in cells" :key="i">
      <a class="mtui-cell mtui-cell__link" :href="href">
      <div class="mtui-cell__hd" v-if="cell.title || cell.imgs">
        <slot name="icon">
          <img v-if="cell.imgs" :src="cell.imgs" alt="列表图标" :class="['mtui-img_' + icons]">
        </slot>
          {{cell.title}}
      </div>
      <div class="mtui-cell__bd">
        <p>{{cell.leftText}}</p>
        <span class="mtui-cells__tips">{{cell.tips}}</span>
      </div>
      <div class="mtui-cell__ft">{{cell.rightText}}</div>
    </a>
  </div>
</div>
</template>

<script>
/**
 * mt-cell
 * @module components/cell
 * @desc 单元格
 * @param {string|Object} [to] - 跳转链接，使用 vue-router 的情况下 to 会传递给 router.push，否则作为 a 标签的 href 属性处理
 * @param {string} [title] - 顶部标题
 * @param {string} [tips] - 备注信息
 * @param {string} [leftText] - 左侧信息
 * @param {string} [rightText] - 备注信息
 * @param {boolean} [is-link=false] - 可点击的链接
 * @param {string} [value] - 右侧显示文字
 * @param {slot} [icon] - 可插入元素标签，用于添加字体图标或图片, 会覆盖cell.img，用于传入本地图片
 * @param {string} [icons] - 设置图片样式大小，可选small和big
 * @param 不想要右边的箭头，可以手动把伪元素设置为display:none
 *
 * @example
 *  <mt-cell title="测试" :cells="test"></mt-cell>
    <mt-cell title="测试" :cells="[{title: '我是主题文字',rightText: '测试一',tips: '跳转github'}]"
    to="//github.com"></mt-cell>
    <mt-cell title="测试" :cells="[{title: '我是主题文字',rightText: '测试一'}]" to="/radio">
      <i slot="icon" style="display: block; width: 10px; height: 10px; background: red;"></i>
    </mt-cell>
 */
export default {
  name: 'mt-cell',

  props: {
    to: [String, Object],
    icon: String,
    title: String,
    label: String,
    isLink: Boolean,
    value: {},
    cells: {
      type: Array,
      required: true,
    },
    leftText: String,
    rightText: String,
    tips: String,
    icons: {
      type: String,
      default: 'small',
      validator(value) { // Prop 验证
        return [
          'small',
          'big',
        ].indexOf(value) > -1;// 必须是数组内的元素
      },
    },
  },

  computed: {
    href() {
      if (this.to && this.$router) {
        const resolved = this.$router.match(this.to);
        if (!resolved.matched.length) return this.to;

        this.$nextTick(() => {
          this.$el.addEventListener('click', this.handleClick);
        });
        return resolved.fullPath || resolved.path;
      }
      return this.to;
    },
  },

  methods: {
    handleClick($event) {
      $event.preventDefault();
      this.$router.push(this.href);
    },
  },
};
</script>

<style>
.mtui-cells{
  margin-bottom: 0;
}
</style>
