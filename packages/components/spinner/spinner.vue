<template>
  <div class="mt-spinner">
    <component :is="spinner"></component>
  </div>
</template>
<script>
import SpinnerRainbow from './components/rainbow';
import SpinnerDot from './components/dot';
import SpinnerPeeek from './components/peeek';
import SpinnerRectangle from './components/rectangle';
import SpinnerSnake from './components/snake';

const SPINNERS = ['dot', 'rainbow', 'peeek', 'rectangle', 'snake'];
const parseSpinner = function (index) {
  if ({}.toString.call(index) === '[object Number]') {
    if (SPINNERS.length <= index) {
      console.warn(`'${index}' spinner not found, use the default spinner.`);
      index = 0;
    }
    return SPINNERS[index];
  }

  if (SPINNERS.indexOf(index) === -1) {
    console.warn(`'${index}' spinner not found, use the default spinner.`);
    index = SPINNERS[0];
  }
  return index;
};
export default {
  name: 'mt-spinner',
  components: {
    SpinnerRainbow,
    SpinnerDot,
    SpinnerPeeek,
    SpinnerRectangle,
    SpinnerSnake,
  },
  props: {
    type: {
      default: 0,
    },
    size: {
      type: Number,
      default: 1,
    },
    color: {
      type: String,
      default: '#ccc',
    },
  },
  computed: {
    spinner() {
      return `spinner-${parseSpinner(this.type)}`;
    },
  },
};
</script>
<style lang="less" scoped>
.mt-spinner{
  display: inline-block;
}
</style>

