<template>
  <div id="openVconsole" @click="openVconsole" ref="vconsole"></div>
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
      if (typeof window.VConsole !== 'undefined'){
        new window.VConsole();
        return;
      };
      if (openVconsoleCount === this.time) {
        clearTimeout(timeVconsole);
        timeVconsole = null;
        openVconsoleCount++;
        const script = document.createElement('script');
        document.body.appendChild(script);
        const that = this;
        script.onload = function () {
          const vc = new window.VConsole();
          if (that.$refs.vconsole.parentElement) {
            that.$refs.vconsole.parentElement.removeChild(that.$refs.vconsole);
          } else {
            document.body.removeChild(that.$refs.vconsole);
          }
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
  height: 1.2rem;
}
#openVconsole,#openVconsole:focus,#openVconsole:active,#openVconsole:hover{
  background-color: transparent !important;
}
</style>
