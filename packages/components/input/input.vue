<template>
<div>
  <div class="mtui-cells__title">{{title}}</div>
  <div class="mtui-cells mtui-cells_form" v-for="(ipt, i) in inputs" :key="i">
    <div class="mtui-cell">
      <div class="mtui-cell__hd">
        <label class="mtui-label" :for="ipt.ifor">{{ipt.value}}</label>
      </div>
      <div class="mtui-cell__bd">
        <input :type="ipt.type" class="mtui-input" :name="name" :placeholder="val" :id="ipt.ifor">
      </div>
      <div class="mtui-cell__ft" v-if="validate">
        <button class="mtui-vcode-btn">获取验证码</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>

/**
 * mt-input
 * @module components/input
 * @desc 单元格
 * @param {string} [title] - 标题文本
 * @param {string} [ifor] - for + id
 * @param {string} name - input名
 * @param {string} val - 预设值
 * @param {string} value - input左侧标题
 * @param {Boolean} validate - 判断是否显示验证码元素
 * @param {string[], object[]} inputs - 选项数组，可以传入 [{label: 'label', value: 'value', disabled: true}]
 *
 * @example
    <mt-input title="循环多列" val="我是预设" :inputs="yo"></mt-input>
    <mt-input title="不循环单列" :inputs="[{value: 'yoyo~',name: 'yo'}]" validate></mt-input>
*
*/
export default {
  name: 'MtInput',

  props: {
      title: String,
      value: String,
      val: String,
      ifor: String,
      name: String,
      type: String,
      inputs: {
          type: Array,
          required: true,
      },
      validate: Boolean,
  },
};
</script>
