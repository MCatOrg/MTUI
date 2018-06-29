<template>
  <mt-cell-g :title="title">
    <div class="mtui-cells mtui-cells_checkbox">
      <label class="mtui-cell mtui-check__label"
      v-for="(item,i) in options" :key="i"
      :class="{'mtui-disabled':item.disabled}">
        <div class="mtui-cell__hd">
          <template v-if="align!=='right'">
            <input type="checkbox" class="mtui-check"
          :disabled="item.disabled"
          v-model="currentValue"
          :value="item.value||item"
          :name="name">
          <i class="mtui-icon-select"></i>
          </template>
          <img :src="item.icon" alt="列表图标" v-if="item.icon">
        </div>
        <div class="mtui-cell__bd">{{item.label||item.value|| item}}</div>
        <div class="mtui-cell__ft" v-if="align==='right'">
          <input type="checkbox" class="mtui-check"
          :disabled="item.disabled"
          v-model="currentValue"
          :value="item.value||item"
          :name="name">
          <i class="mtui-icon-select"></i>
        </div>
        <mt-touch-ripple v-if="!item.disabled"></mt-touch-ripple>
      </label>
    </div>
  </mt-cell-g>
</template>
<script>
import mtCellG from '../cell-g';
import touchRipple from '../touchRipple';

export default {
  name: 'mt-checklist',
  components: {
    touchRipple,
    mtCellG,
  },
  props: {
    value: Array,
    title: [String, Number],
    options: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      default() {
        return `${Date.now()}`;
      },
    },
    align: {
      type: String,
      default: 'left',
    },
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.$emit('input', val);
    },
  },
};
</script>

