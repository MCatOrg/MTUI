<template>
  <div id="buttonPage">
    <mt-button @click="ck" :loading="true">默认</mt-button>
    <mt-button @click="ck">默认</mt-button>
    <mt-button @click="ck" type="primary">primary</mt-button>
    <mt-button @click="ck" type="warn">warn</mt-button>
    <mt-button @click="ck" :disabled="true">禁用</mt-button>
    <br>
    <hr>
    <br>
    <mt-button @click="ck" size="mini" :disabled="true">禁用</mt-button>
    <mt-button @click="ck" size="mini" type="warn">warn</mt-button>
    <mt-button @click="ck" size="mini" type="primary">primary</mt-button>
    <mt-button @click="ck" size="mini" class="newBtn">默认</mt-button>
  </div>
</template>
<script>
export default {
  methods: {
    ck() {
      console.log('ck');
    },
  },
};
</script>
<style lang="less">
#buttonPage .newBtn{
  width: 2rem;
}
</style>

