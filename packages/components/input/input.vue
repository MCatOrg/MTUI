<template>
  <div class="mtui-cell" :class="{'mtui-cell-error':showError,'mtui-disabled':disabled}">
    <div class="mtui-cell__hd">
      <slot name="head">
        <label class="mtui-label" :for="`mtui-input-${uuid}`" v-if="label">{{label}}</label>
      </slot>
    </div>
    <div class="mtui-cell__bd">
      <slot name="body">
          <input
          @blur="bulrEventHandle"
          @focus="focusEventHandle"
          @keyup="keyupEventHandle"
          class="mtui-input"
          :maxlength="max"
          :type="type"
          :name="name"
          :disabled="disabled"
          :placeholder="placeholder"
          :readonly="readonly"
          :style="{'text-align':textAlign}"
          v-model="currentValue"
          :id="`mtui-input-${uuid}`">
          <i v-if="showClear" v-show="showClearWithLen"
          class="mtui-input-clear mtui-icon-close" @click="clearValue"></i>
      </slot>
      <transition name="bounce">
        <div class="mtui-input-error" v-show="showError">
          <p>{{errorTip}}</p>
        </div>
      </transition>
    </div>
    <div class="mtui-cell__ft">
      <div v-if="getCode">
        <button class="mtui-vcode-btn" v-if="getCode" :style="{color: activeColor}" @click="clickHandleEvent">获取验证码</button>
        <img v-if="showCode" :src="codeImg" class="mtui-vcode-img" @click="clickHandleEvent"/>
      </div>
      <slot name="footer" v-else></slot>
    </div>
  </div>
</template>
<script>
import baseMixin from '../../util/mixin';
import regexp from '../../util/RegExp';

const typeList = ['text', 'tel', 'password', 'email', 'number'];
export default {
  name: 'mt-input',
  mixins: [baseMixin],
  props: {
    label: [String, Number],
    type: {
      type: String,
      default: 'text', // text,number,email,password,tel
      validator(val) {
        return typeList.indexOf(val) !== -1;
      },
    },
    name: {
      type: [String, Number],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    placeholder: [String, Number],
    textAlign: {
      type: String,
      default: 'left',
    },
    value: [String, Number],
    getCode: {
      type: Boolean,
      default: false,
    },
    codeImg: {
      default: '',
    },
    showClear: {
      type: Boolean,
      default: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
    max: Number,
    min: Number,
    isType: { // 内置格式检查器 ['email','china-name','china-mobile','number','idCard']
      type: [String, Function], // 若为Function时  需要同步返回一个对象{valid:true}或者{valid:false, msg:错误信息}
    },
    activeColor: {
      type: String,
      default() {
        return this.$MTUI_CONFIG && this.$MTUI_CONFIG.ColorPrimary || '#4A87D6'
      }
    }
  },
  data() {
    return {
      currentValue: '',
      showError: false,
      errorTip: '',
      checkEventList: [],
      isValid: true,
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val, oldVal) {
      const checkMax = this.checkMax(val, oldVal);
      if (checkMax) {
        this.$emit('input', val);
      }
    },
  },
  computed: {
    showClearWithLen() {
      if (this.currentValue === '' || this.currentValue.length === 0) {
        return false;
      }
      return true;
    },
    showCode() {
      if (this.codeImg === '' || !this.codeImg) {
        return false;
      }
      return true;
    },
  },
  methods: {
    clearValue() {
      this.currentValue = '';
      this.targetCheckEvent(this.currentValue);
    },
    keyupEventHandle(event) {
      this.$emit('keyup', event);
    },
    clickHandleEvent(event) {
      this.$emit('rightBtnClick', event);
    },
    bulrEventHandle(event) {
      this.targetCheckEvent(this.currentValue);
      this.$emit('blur', event);
    },
    focusEventHandle(event) {
      this.isValid = true;
      this.showError = false;
      this.$emit('focus', event);
    },
    checkEmail(val) {
      if (this.isType === 'email') {
        if (regexp.email(val)) {
          this.showErrorFn(`${this.label}格式不正确`);
          return false;
        }
      }
      return true;
    },
    checkChinaName(val) {
      if (this.isType === 'china-name') {
        if (regexp.isChinese(val)) {
          this.showErrorFn(`${this.label}必须是中文`);
          return false;
        }
      }
      return true;
    },
    checkChinaMobile(val) {
      if (this.isType === 'china-mobile') {
        if (regexp.phone(val) && regexp.callPhone(val)) {
          this.showErrorFn(`${this.label}格式不正确`);
          return false;
        }
      }
      return true;
    },
    checkNumber(val) {
      if (this.isType === 'number') {
        if (regexp.number(val)) {
          this.showErrorFn(`${this.label}应该是一个数字`);
          return false;
        }
      }
      return true;
    },
    checkIdCard(val) {
      if (this.isType === 'idCard') {
        if (regexp.idCard(val)) {
          this.showErrorFn(`${this.label}格式不正确`);
          return false;
        }
      }
      return true;
    },
    checkCustomFn(val) {
      if (typeof this.isType === 'function') {
        const result = this.isType(val);
        if (!result.valid) {
          this.showErrorFn(result.msg);
          return false;
        }
      }
      return true;
    },
    checkMax(val, oldVal) {
      if (typeof this.max === 'number') {
        if ((`${val}`).length > this.max) {
          this.currentValue = oldVal;
          return false;
        }
      }
      return true;
    },
    checkMin(val) {
      if (typeof this.min === 'number') {
        if ((`${val}`).length < this.min) {
          this.showErrorFn(`${this.label}长度不得小于${this.min}`);
          return false;
        }
      }
      return true;
    },
    notEmpty(val) {
      if (this.required && (val === '' || val === undefined || val === null)) {
        this.showErrorFn(`${this.label}不能为空！`);
        return false;
      }
      return true;
    },
    targetCheckEvent(...arg) {
      const val = arg.length > 0 ? arg : this.currentValue;
      for (let i = 0; i < this.checkEventList.length; i++) {
        if (!this.checkEventList[i].apply(this, val)) {
          return false;
        }
      }
      return true;
    },
    showErrorFn(alert) {
      this.isValid = false;
      this.showError = true;
      this.errorTip = alert;
    },
    checkValid() {
      console.log('checkValid');
    },
  },
  mounted() {
    this.checkEventList.push(
      this.notEmpty,
      this.checkMin,
      this.checkMax,
      this.checkChinaName,
      this.checkChinaMobile,
      this.checkCustomFn,
      this.checkNumber,
      this.checkIdCard,
    );
  },
};
</script>

