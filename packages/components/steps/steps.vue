<template>
    <div :class="['mtui-steps',orient,className]">
        <!-- 水平 -->
        <template v-if="orient === 'horizon'">
            <template v-for="(value,index) in computedLists">
                <div :class="['mtui-step',value.status?'active':'']"
                :style="value.status ? computedTextColor:''" :key="index">
                    <div class="mtui-step_chart">
                        <span :class="['step-chart_dot',value.animate?'cur':'']"
                        :style="value.status ? computedColor:''">
                            <span :class="['step-chart_animate',value.animate?animate:'']"
                            :style="value.status ? computedColor:''"></span>
                        </span>
                        <span class="step-chart_line"></span>
                        <span :class="['step-chart_line',value.status?'cur':'']"
                        :style="value.status ? computedColor:''"></span>
                    </div>
                    <p class="mtui-step_text">{{value.title}}</p>
                    <p class="mtui-step_text">{{value.cont}}</p>
                </div>
            </template>
        </template>
        <!-- 垂直 -->
        <template v-else>
            <div v-for="(value,index) in computedLists"
            :key="index" :class="['mtui-step',value.status?'active':'']">
                <div class="mtui-step_chart">
                    <span class="step-chart_dot" :style="value.status ? computedColor:''">
                        <span :class="['step-chart_animate',value.animate?animate:'']"
                        :style="value.animate ? computedColor:''"></span>
                    </span>
                    <span class="step-chart_line"></span>
                    <span :class="['step-chart_line',value.status&&!value.animate?'cur':'']"
                    :style="value.status&&!value.animate ? computedColor:''"></span>
                </div>
                <div class="mtui-step_cont" :style="value.status ? computedTextColor:''">
                    <h6 class="step-cont_title">{{value.title}}</h6>
                    <p class="step-cont_info">{{value.cont}}</p>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
export default {
  name: 'mt-steps',
  props: {
    className: {
      type: String,
    },
    color: {
      type: String,
      default: window.MTtheme && window.MTtheme.primary || ''
    },
    orient: {
      type: String,
      default: 'horizon',
      validator(value) {
        return ['vertical', 'horizon'].indexOf(value) !== -1;
      },
    },
    animate: {
      type: String,
      default: 'opacity',
      validator(value) {
        return ['opacity', 'back'].indexOf(value) !== -1;
      },
    },
    lists: {
      type: Array,
      required: true,
    },
  },
  computed: {
    computedColor() {
      if (this.color) return { backgroundColor: this.color };
      return null;
    },
    computedTextColor() {
      if (this.color) return { color: this.color };
      return null;
    },
    computedLists(){
      for (let i = 0; i < this.lists.length; i++) {
        if (!this.lists[i].status && i !== 0) {
          if (this.lists[i - 1].status) {
            this.lists[i - 1].animate = true;
          } else {
            this.lists[i - 1].animate = false;
          }
        } else {
          this.lists[i].animate = false;
        }
      }
      console.log(this.lists);
      return this.lists;
    }
  },
  created() {
    for (let i = 0; i < this.lists.length; i++) {
      if (!this.lists[i].status && i !== 0) {
        if (this.lists[i - 1].status) {
          this.lists[i - 1].animate = true;
        } else {
          this.lists[i - 1].animate = false;
        }
      } else {
        this.lists[i].animate = false;
      }
    }
  },
};
</script>
