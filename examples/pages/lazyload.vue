<template>
  <div id="lazyload">
    <img v-for="(imgSrc,i) of list" :key="i" v-lazy="imgSrc" alt="">
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ['https://avatars3.githubusercontent.com/u/19727413?s=40&v=4',
        'https://avatars1.githubusercontent.com/u/8280645?s=64&v=4',
        'https://avatars0.githubusercontent.com/u/9313216?s=64&v=4',
        'https://avatars2.githubusercontent.com/u/16814336?v=4',
        'https://avatars1.githubusercontent.com/u/11811888?v=4',
        'https://github.com/lshengjian',
        'https://avatars2.githubusercontent.com/u/536297?s=64&v=4',
        'https://github.com/PanJiaChen',
        'https://assets-cdn.github.com/images/icons/emoji/unicode/1f409.png',
        'https://avatars1.githubusercontent.com/u/39451626?s=64&v=4',
        'https://avatars0.githubusercontent.com/u/26002161?s=64&v=4',
        'https://avatars1.githubusercontent.com/u/6436132?s=64&v=4',
        'https://avatars0.githubusercontent.com/u/3118295?s=64&v=4',
        'https://avatars0.githubusercontent.com/u/23147260?s=64&v=4',
        'https://avatars3.githubusercontent.com/u/25254?s=64&v=4',
        'https://avatars3.githubusercontent.com/u/26117697?s=64&v=4',
        'https://avatars1.githubusercontent.com/u/499550?s=64&v=4',
        'https://avatars0.githubusercontent.com/u/905434?s=64&v=4'],
    };
  },
};
</script>
<style lang="less" scoped>
#lazyload{
  img{
    display: block;
    width: 7.1rem;
    margin: 0.1rem auto;
  }
  image[lazy=loading] {
    width: 7.1rem;
    height: 100px;
    margin: auto;
}
}
</style>

