<template>
  <div>
    <div @change="$emit('change', currentValue)" class="mtui-cells mtui-cells_checkbox">
        <label v-text="title"></label>
        <mt-cell class="mtui-cells_checkbox" v-for="(option,i) in options"
        :key="i">
          <label class="mtui-cell mtui-check__label" slot="cell" :for="option.id">
            <div class="mtui-cell__hd" slot="titleBlock">
              <input
                type="checkbox"
                class="mtui-check"
                v-model="currentValue"
                :value="option.value || option"
                :disabled="option.disabled"
                :name="option.name"
                :id="option.id"/>
              <i class="mtui-icon-checked"></i>
            </div>
            <div slot="leftBlock" class="mtui-cell__bd">
            <span class="mtui-checkbox-label" v-text="option.label || option"></span>
          </div>
          </label>
          </mt-cell>
        </div>
  </div>
</template>
<script>

import mtCell from '../cell/cell';

/**
 * mt-checkbox
 * @module components/checkbox
 * @desc 单元格
 * @param {string} [title] - 标题文本
 * @param {string} [img] - 图标，填写链接地址
 * @param {string} [id] - 必填for + id
 * @param {Number} [max] - 最大可选数量
 * @param {Boolean} [disabled] 设置是否可选，disabled：true为不可选
 * @param {slot} - 单选文本
 * @param {string} value - 选中值
 * @param {string[], object[]} options - 选项数组，可以传入[{label: 'label', value: 'value', disabled: true}]
 *
 * @example
 *
 * <mt-checkbox
        title="多选列表2"
         v-model="value"
         :max="2"
         :options="options2">
      </mt-checkbox>
 */
export default {
  name: 'mt-checkbox',

  components: {
    mtCell,
  },

  props: {
      title: String,
      align: String,
      max: Number,
      img: String,
      options: {
          type: Array,
          required: true,
      },
      value: Array,
      name: String,
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  computed: {
    limit() {
      return this.max < this.currentValue.length;
    },
  },

  watch: {
    value(val) {
      this.currentValue = val; // value的值改变时触发
    },

    currentValue(val) {
      if (this.limit) val.pop(); // 传入值数量大于限制长度，则移除最后一个数组元素
      this.$emit('input', val); // 传入值
      console.log(val);
    },
  },
};

</script>


<style>
.mtui-cells__title, .mtui-cell__bd {
  text-align: left;
}
</style>
