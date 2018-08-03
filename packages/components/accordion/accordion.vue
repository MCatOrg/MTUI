<template>
  <ul class="mtui-cells_collapse">
    <li class="mtui-cells mtui-collapse"
    v-for="(item,i) in options" :key="i"
    :class="{'mtui-collapse__active':item.show}">
      <a class="mtui-cell mtui-collapse__title" @click="handleClick(i)">
        <div class="mtui-cell__bd">
          <slot :name="`title-${i}`">{{item.title}}</slot>
        </div>
        <div class="mtui-cell__ft"></div>
      </a>
        <div class="mtui-cells mtui-collapse__content" v-show="item.show">
          <slot :name="i"></slot>
        </div>
    </li>
  </ul>
</template>
<script>

export default {
  name: 'mt-accordion',
  props: {
    options: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleClick(index) {
      this.options[index].show = !this.options[index].show;
    },
  },
};
</script>
