<template>
  <div>
    <div class="mtui-cells__title">{{title}}</div>
      <div class="mtui-cells mtui-cells_checkbox">
        <label class="mtui-cell mtui-check__label"
          v-for="(cbox, i) in checkboxs" :key="i"
          :for="cbox.ifor">
          <div class="mtui-cell__hd">
            <input type="checkbox" class="mtui-check" :name="cbox.name" :id="cbox.ifor">
            <i class="mtui-icon-checked"></i>
          </div>
          <div class="mtui-cell__bd">{{cbox.value}}</div>
        </label>
      </div>
  </div>
</template>
<script>

/**
 * mt-checkbox
 * @module components/cell
 * @desc 单元格
 * @param {string} [title] - 标题文本
 * @param {string} [imgs] - 图标，填写链接地址
 * @param {string} [cname] - 标题样式
 * @param {string} [ifor] - for + id
 * @param {slot} - 单选文本
 * @param {string} value - 选中值
 * @param {string[], object[]} checkboxs - 选项数组
 * 可以传入 [{label: 'label', value: 'value', disabled: true}] 或者 ['ab', 'cd', 'ef']
 *
 * @example
 * <mt-checkbox
        title="多选列表"
        cname="label"
        :options="[{name: 'bb' , value: '测试一',ifor: 'pp'},
        {name: 'cc', value: '测试二',ifor: 'dd'}]">
    </mt-checkbox>
 */
export default {
  name: 'mt-checkbox',

  props: {
      title: String,
      ifor: String,
      imgs: String,
      checkboxs: {
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
