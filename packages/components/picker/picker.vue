<template>
  <div class="mtui-picker">
      <div class="mtui-picker-toolbar" v-if="showToolbar"><slot></slot></div>
      <!-- <div class="mtui-picker-search" v-if="showSearch">
        <input type="text" placeholder="请输入你的关键字" v-model="keyWord">
      </div> -->
      <div class="mtui-picker-items">
        <picker-slot
        v-for="(slot,index) in slots"
        :key="index"
        :valueKey="valueKey"
        :values="slot.values || []"
        :text-align="slot.textAlign || 'center'"
        :visible-item-count="visibleItemCount"
        :class-name="slot.className"
        :flex="slot.flex"
        v-model="values[slot.valueIndex]"
        :rotate-effect="rotateEffect"
        :delimiter="slot.divider"
        :content="slot.content"
        :itemHeight="itemHeight"
        :default-index="slot.defaultIndex"
        :selectedColor="selectedColor"
        @slotValueChange="slotValueChange"
        />
        <div class="mtui-picker-center-highlight"
        :style="{ height: itemHeight + 'px',
        marginTop: - itemHeight / 2 + 'px',
        borderColor:highlightBorderColor,
        backgroundColor:highlightBgColor
        }"></div>
      </div>
  </div>
</template>

<script>
import pickerSlot from './components/picker-slot';

export default {
  name: 'mt-picker',
  components: {
    pickerSlot,
  },
  props: {
    showToolbar: {
      type: Boolean,
      default: false,
    },
    slots: {
      type: Array,
      required: true,
    },
    showSearch: {
      type: Boolean,
      default: false,
    },
    itemHeight: {
      type: Number,
      default: 30,
    },
    visibleItemCount: {
      type: Number,
      default: 5,
    },
    valueKey: String,
    rotateEffect: {
      type: Boolean,
      default: true,
    },
    selectedColor: {
      type: String,
      default: '#000',
    },
    highlightBgColor: {
      type: String,
      default: '#FBF9FE',
    },
    highlightBorderColor: {
      type: String,
      default: '#eaeaea',
    },
  },
  data() {
    return {
      keyWord: '',
    };
  },
  methods: {
    slotValueChange() {
      this.$emit('change', this, this.values);
    },
    getSlot(slotIndex) {
      const slots = this.slots || [];
      let count = 0;
      let target;
      const children = this.$children.filter(child => child.$options.name === 'picker-slot');

      slots.forEach((slot, index) => {
        if (!slot.divider) {
          if (slotIndex === count) {
            target = children[index];
          }
          count++;
        }
      });

      return target;
    },
    getSlotValue(index) {
      const slot = this.getSlot(index);
      if (slot) {
        return slot.currentValue;
      }
      return null;
    },
    setSlotValue(index, value) {
      const slot = this.getSlot(index);
      if (slot) {
        slot.currentValue = value;
      }
    },
    getSlotValues(index) {
      const slot = this.getSlot(index);
      if (slot) {
        return slot.mutatingValues;
      }
      return null;
    },
    setSlotValues(index, values) {
      const slot = this.getSlot(index);
      if (slot) {
        slot.mutatingValues = values;
      }
    },
    getValues() {
      return this.values;
    },
    setValues(values) {
      const slotCount = this.slotCount;
      values = values || [];
      if (slotCount !== values.length) {
        throw new Error('values length is not equal slot count.');
      }
      values.forEach((value, index) => {
        this.setSlotValue(index, value);
      });
    },
  },

  computed: {
    values: {
      get() {
        const slots = this.slots || [];
        const values = [];
        let valueIndexCount = 0;
        slots.forEach((slot) => {
          if (!slot.divider) {
            slot.valueIndex = valueIndexCount++;
            values[slot.valueIndex] = (slot.values || [])[slot.defaultIndex || 0];
          }
        });
        return values;
      },
    },
    slotCount() {
      const slots = this.slots || [];
      let result = 0;
      slots.forEach((slot) => {
        if (!slot.divider) result++;
      });
      return result;
    },
  },
};
</script>
