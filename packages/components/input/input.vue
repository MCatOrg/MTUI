<template>
<div>
  <div class="mtui-cells__title">{{title}}</div>
  <div class="mtui-cells mtui-cells_form">
    <div class="mtui-cell">
      <div class="mtui-cell__hd">
        <label class="mtui-label" :for="id">{{label}}</label>
      </div>
      <div class="mtui-cell__bd">
        <input
        ref="input"
        @change="$emit('change', currentValue)"
        class="mtui-input"
        :type="type"
        v-model="currentValue"
        :name="name"
        :placeholder="placeholder"
        :id="id"
        @input="handleInput">
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
 * @param {string} [id] - for + id
 * @param {string} name - input名
 * @param {string} placeholder - 预设值
 * @param {string} label - input左侧标题
 * @param {Boolean} validate - 判断是否显示验证码元素
 *
 * @example
    <mt-input title="我是标题" placeholder="请输入验证码" label="验证码" validate></mt-input>
*/
export default {
  name: 'MtInput',

  props: {
      title: String,
      label: String,
      placeholder: String,
      value: String,
      id: String,
      name: String,
      type: {
        type: String,
        default: 'text',
      },
      validate: Boolean,
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  methods: {
    handleInput(evt) {
      this.currentValue = evt.target.value; // 监听获取输入值
    },
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },

    currentValue(val) {
      this.$emit('input', val);
      console.log(val);
    },
  },
};
</script>

<style>
.mtui-cells__title {
  margin: 0;
}
</style>
