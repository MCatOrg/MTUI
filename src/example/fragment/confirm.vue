<template>
  <div id="confirm">
    <h2 class="lTitle">confirm</h2>
    <button class="mtui-btn mtui-btn__default" @click="confirm">confirm</button>
  </div>
</template>
<script>
import mtui from "../../js/mtui";
export default {
  methods:{
    confirm(){
      mtui.confirm('hello')
    }
  }
}
</script>
