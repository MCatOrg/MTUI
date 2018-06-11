<template>
  <div id="sliderPage">
    <mt-slider
      v-model="value"
      :step="5"
      @onChange="changeEvent"
      color="red"
    ></mt-slider>
    <p>{{value}}</p>
    <mt-slider
      v-model="value2"
      :disabled="true"
    ></mt-slider>
    <p>{{value2}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 50,
      value2: 30,
    };
  },
  methods: {
    changeEvent(val) {
      console.log(val);
    },
  },
};
</script>

