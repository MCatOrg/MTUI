<template>
  <div>
    <mt-button @click="showImg" type="primary">showBigImg</mt-button>
    <mt-big-picture :imgSrc="bigImgSrc" v-model="showBigImg"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showBigImg: false,
      bigImgSrc: 'https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=ea20cf5c59da81cb4ee684cb6a5db72b/e850352ac65c1038140de96aba119313b07e8922.jpg',
    };
  },
  methods: {
    showImg() {
      this.showBigImg = true;
    },
  },
};
</script>

