<template>
  <div :class="['mtui-stepper', disable ? 'dark' : '']" >
    <!-- <button class="mtui-stepper_reduce" :disabled="currentValue <= min"  @click="reduce"></button> -->
    <div :class="`mtui-stepper_reduce ${currentValue <= min ? 'disable' : ''}`"  @click="reduce"></div>
    <input :value="currentValue" @blur="handleValue" type="number" class="mtui-stepper_input" :readonly="disable">
    <div :class="`mtui-stepper_add ${currentValue >= max ? 'disable' : ''}`"  @click="add"></div>
    <!-- <button class="mtui-stepper_add" :disabled="currentValue >= max"  @click="add"></button> -->
  </div>
</template>
<script>

import toast from '../toast/';

export default {
  name: 'mt-stepper',
  data() {
    return {
      currentValue: this.value,
    };
  },
  props: {
    color: String,
    value: {
      type: Number,
      default: 0,
    },
    step: {
      type: Number,
      default: 1,
    },
    min: {
      type: Number,
      default: 0,
    },
    minTip: String,
    max: {
      type: Number,
      default: Infinity,
    },
    maxTip: String,
    disable: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    currentValue(val) {
      this.$emit('input', val);
      this.$emit('on-change', val);
    },
    value(val) {
      this.updateValue(val);
    },
  },
  methods: {
    reduce() {
      if (this.disable) return;
      if (this.min || this.min == 0) {
        if (this.currentValue <= this.min) {
          this.currentValue = this.min;
          if (this.minTip) toast(this.minTip);
        } else if (this.currentValue <= this.step) {
          this.currentValue = this.min;
        } else {
          this.currentValue -= this.step;
        }
        return;
      }
      if (this.currentValue <= this.min) {
        this.currentValue = this.min;
      } else {
        this.currentValue -= this.step;
      }
    },
    add() {
      if (this.disable) return;

      if (this.max !== Infinity) {
        if (this.currentValue >= this.max) {
          this.currentValue = this.max;
          if (this.maxTip) toast(this.maxTip);
        } else {
          this.currentValue += this.step;
        }
        return;
      }
      this.currentValue += this.step;
    },
    updateValue(val) {
      console.log(val);
      if (val) {
        if (val <= this.min) val = this.min;
        if (val >= this.max) val = this.max;
        this.currentValue = val;
      } else if (val == 0) this.currentValue = 0;
      else this.currentValue = this.min;
    },

    handleValue(event) {
      // if(event.target.value === '') return;
      const value = parseInt(Number(event.target.value.trim()), 10);
      const min = this.min;
      const max = this.max;

      if (this.disable) {
        this.currentValue = this.value;
        return;
      }
      if (this.isValueNumber(value)) {
        this.currentValue = value;
        event.target.value = value;
        if (value >= max) this.currentValue = max;
        if (value <= min) this.currentValue = min;
      } else {
        event.target.value = this.currentValue;
      }
    },

    isValueNumber(val) {
      return /(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/.test(`${val}`);
    },
  },
  mounted() {
    this.updateValue(this.value);
  },
};
</script>

<style lang='less'>
.mtui-stepper {
  display: inline-block;
  font-size: 0;
  .mtui-stepper_box {
    display: inline-block;
  }
  .mtui-stepper_reduce,
  .mtui-stepper_add,
  .mtui-stepper_input {
    float: left;
    height: 0.48rem;
    border: 0.01rem solid #e5e5e5;
    line-height: 0.48rem;
    text-align: center;
    background-color: white;
  }

  .mtui-stepper_reduce,
  .mtui-stepper_add {
    width: 0.58rem;
    font-size: 0.4rem;
  }
  .mtui-stepper_reduce {
    margin-right: 0.06rem;
    &.disable {
      color: #e6e6e6;
    }
  }
  .mtui-stepper_add {
    margin-left: 0.06rem;
  }
  .mtui-stepper_reduce:before {
    content: "-";
  }
  .mtui-stepper_add:before {
    content: "+";
  }
  .mtui-stepper_input {
    width: 0.98rem;
    vertical-align: top;
    line-height: 0.48rem;
  }
  .disable {
    background-color: #fafafb;
    border: 0.01rem solid #fafafb;
    color: #e6e6e6;
  }
  //disable
  &.dark {
    .mtui-stepper_reduce,
    .mtui-stepper_add,
    .mtui-stepper_input {
      background-color: #fafafb;
      border: 0.01rem solid #fafafb;
      color: #e6e6e6;
    }
  }
}
</style>

