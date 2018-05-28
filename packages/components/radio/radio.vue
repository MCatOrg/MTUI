<template>
  <div>
    <div class="mtui-cells mtui-cells_radio">
        <label v-text="title"></label>
        <mt-cell class="mtui-cells_radio" v-for="(option,i) in options"
        :key="i">
          <label
            class="mtui-cell__bd"
            :for="option.id"
            slot="leftBlock">
            <span>
              <img v-if="option.imgs" :src="option.img">
            </span>

            <span class="mtui-radio-label" v-text="option.label || option"></span>

          </label>
          <div slot="rightBlock" class="mtui-cell__ft">
            <input
                type="radio"
                class="mtui-check"
                v-model="currentValue"
                :value="option.value || option"
                :name="option.name"
                :id="option.id"/>
            <i class="mtui-icon-checked"></i>
          </div>
        </mt-cell>
    </div>
  </div>
</template>

<script>

import mtCell from '../cell/cell';
// import mtCell from '../cell';

/**
 * mt-radio
 * @module components/cell
 * @desc 单元格
 * @param {string} [title] - 标题文本
 * @param {string} [img] - 图标，填写链接地址
 * @param {string} [id] - for + id
 * @param {slot} - 单选文本
 * @param {string} value - 选中值
 * @param {string[], object[]} options - 选项数组，可以传入[{label: 'label', value: 'value', disabled: true}]
 *
 * @example
 *  <mt-radio
         title="单选列表"
         cname="label"
         :radios="[{value: '测试一',ifor: 'pp'},
         {value: '测试二',ifor: 'dd'}]">
    </mt-radio>
 */
export default {
  name: 'mt-radio',

  components: {
    mtCell,
  },

  props: {
      title: String,
      id: String,
      img: String,
      options: {
          type: Array,
          required: true,
      },
      value: String,
      name: String,
  },

  data() {
    return {
      currentValue: this.value,
    };
  },

  watch: {
    value(val) {
      this.currentValue = val; // 设置传入值
    },

    currentValue(val) {
      this.$emit('input', val); // 传入值
    },
  },
};
</script>

<style>
.mtui-cells__title, .mtui-cell__bd {
  text-align: left;
}
</style>
