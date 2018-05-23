<template>
  <div id="tab-container">
    <ul>
      <li v-for="n in 3" :key="n">
        <button @click="selected=n">{{n}}</button>
      </li>
    </ul>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <div v-for="n in 8" :key="n">1</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div v-for="n in 10" :key="n">2</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div v-for="n in 5" :key="n">3</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        <div v-for="n in 5" :key="n">44444</div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: 1,
    };
  },
  watch: {
    selected(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="less" scoped>
#tab-container{
  width: 7.5rem;
  >ul{
    display: flex;
    justify-content: space-around;
    button{
      padding: 0.2rem;
    }
  }
}
</style>
