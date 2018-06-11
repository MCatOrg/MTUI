<template>
  <div id="tab-container">
    <ul>
      <li v-for="n in 3" :key="n">
        <button @click="selected=n">{{n}}</button>
      </li>
    </ul>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1" class="cell">
        <div v-for="n in 8" :key="n"></div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2" class="cell">
        <div v-for="n in 10" :key="n"></div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3" class="cell">
        <div v-for="n in 5" :key="n"></div>
      </mt-tab-container-item>
      <mt-tab-container-item id="4" class="cell">
        <div v-for="n in 5" :key="n"></div>
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
  .cell{
    >div{
      height: 0.5rem;
      margin: 0.1rem 0;
      background-color: #e5e5e5;
    }
    &:nth-of-type(1){
      >div{
        background-color: red;
      }
    }
    &:nth-of-type(2){
      >div{
        background-color: yellow;
      }
    }
    &:nth-of-type(3){
      >div{
        background-color: burlywood;
      }
    }
  }
}
</style>
