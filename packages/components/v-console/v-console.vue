<template>
  <div id="openVconsole" @click="openVconsole"></div>
</template>
<script>
let openVconsoleCount = 0;
let timeVconsole;
export default {
  name: 'Vconsole',
  props: {
    time: {
      type: Number,
      default: 5,
    },
    vconsoleUrl: {
      type: String,
      required: true,
    },
  },
  methods: {
    openVconsole() {
      if (typeof window.VConsole !== 'undefined') return;
      if (openVconsoleCount === this.time) {
        clearTimeout(timeVconsole);
        timeVconsole = null;
        openVconsoleCount++;
        const script = document.createElement('script');
        document.body.appendChild(script);
        script.onload = function () {
          const vc = new window.VConsole();
          console.dir(vc);
        };
        script.src = this.vconsoleUrl;
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
