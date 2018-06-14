<template>
    <div :class="className">
        <!-- tabsitem数量没有超过5个的 -->
        <div class="mtui-tabs" v-if="computedList.length < 6">
            <div :class="['mtui-tab',i == activeIndex?'active':'']"
            v-for="(v, i) in computedList" @click="tab(i)" :key="i"
            :style="i == activeIndex?computedColor:''">
                <span class="mtui-tab_text">
                    <span>{{v.text}}</span>
                    <span class="mtui-tab_badeg"
                    :style="computedColor" v-if="v.badeg">{{v.badeg}}</span>
                </span>
            </div>
        </div>
        <!-- tabsitem数量超过5个的 -->
        <div class="mtui-tabs overflow" v-else>
            <div class="mtui-tab_acbox"><div class="mtui-tab_action"></div></div>
            <input type="checkbox" id="inputID">
            <label class="mtui-tab_arrow" for="inputID"></label>

            <div class="mtui-tabs_list">
                <div class="mtui-tab_title">全部</div>
                <div class="mtui-tab_box" :style="{width : computedList.length * 1.5 + 'rem'}">
                    <div v-for="(v, i) in computedList"
                    :key="i" @click="tab(i)"
                    :class="['mtui-tab',i == activeIndex?'active':'']"
                    :style="i == activeIndex?computedColor:''">
                        <span>{{v.text}}</span>
                        <span class="mtui-tab_badeg"
                        :style="computedColor" v-if="v.badeg">{{v.badeg}}</span>
                    </div>
                </div>
                <div class="mtui-tab_line active"
                :style="[{left: activeIndex * 1.5 + 0.15 + 'rem'},computedColor]"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'mtTabs',
  data() {
    return {
      activeIndex: 0,
    };
  },
  props: {
    className: {
      type: String,
    },
    list: {
      type: Array,
      required: true,
    },
    color: {
      type: String,
    },
    active: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.activeIndex = this.active;
  },
  computed: {
    computedList() {
      return this.list.map((value, index) => {
        if (!value.value) value.value = index;
        if (value.badeg && typeof Number(value.badeg) === 'number' && value.badeg > 99) value.badeg = '99+';
        return value;
      });
    },
    computedColor() {
      if (this.color) {
        return {
          color: this.color,
          borderColor: this.color,
        };
      } return '';
    },
  },
  methods: {
    tab(i) {
      this.activeIndex = i;
      this.$emit('onclick', this.list[i]);
    },
  },

};
</script>
