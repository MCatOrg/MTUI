<template>
  <div>
    <div class="mtui-cells__title">{{title}}</div>
    <div class="mtui-cells mtui-cells_radio">
        <label
          v-for="(radio, i) in radios" :key="i"
          class="mtui-cell mtui-check__label"
          :for="radio.ifor">
            <div class="mtui-cell__hd" v-if="radio.imgs">
              <img :src="radio.imgs">
            </div>
            <div class="mtui-cell__bd">{{radio.value}}</div>
            <div class="mtui-cell__ft">
              <input type="radio" class="mtui-check" :name="radio.name" :id="radio.ifor">
            <i class="mtui-icon-checked"></i>
            </div>
        </label>
    </div>
  </div>
</template>

<script>

/**
 * mt-radio
 * @module components/cell
 * @desc 单元格
 * @param {string} [title] - 标题文本
 * @param {string} [imgs] - 图标，填写链接地址
 * @param {string} [ifor] - for + id
 * @param {slot} - 单选文本
 * @param {string} value - 选中值
 * @param {string[], object[]} radios - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}]
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

  props: {
      title: String,
      ifor: String,
      imgs: String,
      radios: {
          type: Array,
          required: true,
      },
      value: String,
      name: String,
  },
};
</script>

<style>
.mtui-cells__title, .mtui-cell__bd {
  text-align: left;
}

</style>
