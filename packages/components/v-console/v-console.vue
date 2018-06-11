<template>
  <div id="openVconsole" @click="openVconsole"></div>
</template>
<script>
const { VConsole } = require('./plugs/vconsole.min.js');

let openVconsoleCount = 0;
let timeVconsole;
export default {
  name: 'Vconsole',
  props: {
    time: {
      type: Number,
      default: 5,
    },
  },
  methods: {
    openVconsole() {
      if (openVconsoleCount === this.time) {
        clearTimeout(timeVconsole);
        timeVconsole = null;
        openVconsoleCount++;
        const vc = new VConsole();
        console.dir(vc);
      } else if (timeVconsole === undefined || typeof timeVconsole === 'number') {
        openVconsoleCount++;
        clearTimeout(timeVconsole);
        timeVconsole = setTimeout(() => {
          openVconsoleCount = 0;
        }, 500);
      }
    },
  },
};
</script>

<style>
#openVconsole{
  width: 7.5rem;
  height: 0.88rem;
}
#openVconsole,#openVconsole:focus,#openVconsole:active,#openVconsole:hover{
  background-color: transparent !important;
}
</style>
