<template>
  <ul class="mtui-cells_collapse">
    <li class="mtui-cells mtui-collapse"
    v-for="(item,i) in list" :key="i"
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
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.options.forEach((item) => {
      const obj = {};
      obj.title = item.title;
      obj.show = !!item.show;
      this.list.push(obj);
    });
  },
  methods: {
    handleClick(index) {
      this.list[index].show = !this.list[index].show;
    },
  },
};
</script>
