<template>
  <div>
    <mt-slider :step=10 :defaultValue=10 :value=10 v-model="value1"></mt-slider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 1,
    };
  },
  mounted() {
    console.log(this.value1);
  },
};
</script>
