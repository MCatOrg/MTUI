<template>
  <div>
    <div class="mtui-cells__title">{{title}}</div>
    <ul class="mtui-cells_collapse" >
      <li class="mtui-cells mtui-collapse"

      :class="{'mtui-collapse__active' : list[index].show}"
      v-for="(accordion, index) in list" :key="index">
        <div class="mtui-cell mtui-collapse__title" @click.stop.prevent="getIndex(index)">
          <div class="mtui-cell__bd">{{accordion.oneLevel}}</div>
          <div class="mtui-cell__ft"></div>
        </div>
        <div class="mtui-cells mtui-collapse__content" v-show="accordion.show">
          <slot name="content"></slot>
            <div class="mtui-cell" v-for="(twoLevel, idx) in accordion.twoLevel" :key="idx">
              <div>{{twoLevel}}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>

/**
 * mt-accordion
 * @module components/accordion
 * @param {string} [title] - 顶部标题
 * @param {string} [oneLevel] - 一级列表标题
 * @param {Array} [twoLevel] - 二级列表标题，使用一维数组
 * @param {boolean} [show] - 必须，每个数组必须有show
 * @param {boolean} [value] - 不可直接修改prop
 * @param {slot} [slot] - 可插入任意元素，name=content
 * @param {string[], object[]} [accordions] - 绑定数组名:accordions="list"，使用数组定义折叠列表
 *
 * @example
 * <mt-accordion title="Yoo" :accordions="list"></mt-accordion>
    <mt-accordion title="Yoo"
      :accordions="[{oneLevel: '一级列表',show: false,}]">
      <div slot="content">123456789</div>
    </mt-accordion>
 *
*/

export default {
  name: 'mt-accordion',

  data() {
    return {
      value: this.show,
      list: this.accordions,
    };
  },

  props: {
      title: String,
      oneLevel: String,
      twoLevel: String,
      show: Boolean,
      accordions: {
        type: Array,
        required: true,
      },
  },
  methods: {
    getIndex(index) {
        this.value = !this.value;
        this.list[index].show = this.value;
        console.log(this.list[index].show, index);
    },
  },
};

</script>

<style>
.div {
  display: block;
}
</style>

