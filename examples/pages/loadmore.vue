<template>
  <div id="mtLoadMore">
    <!-- 父组件高度必须固定，且overflow-y:scroll -->
    <div class="page-loadmore-wrapper" ref="wrapper" :style="{height:`${wrapperHeight}px`}">
      <mt-loadmore
       ref="loadmore"
      :top-method="topMethod"
      :bottom-method="bottomMethod"
      @translate-change="translateChange"
      :bottom-all-loaded="bottomAllLoaded"
      top-loading-text="">
        <div class="proList">
          <div v-for="(pro,i) of proList" :key="i" class="item">
            <img :src="pro" alt="">
            <div>
              <h3>产品{{i+1}}</h3>
              <p>价格</p>
            </div>
          </div>
        </div>
      </mt-loadmore>
      <p v-if="bottomAllLoaded">已经到底部</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      proList: [],
      source: ['https://avatars3.githubusercontent.com/u/19727413?s=40&v=4',
        'https://avatars3.githubusercontent.com/u/19727413?s=40&v=4',
        'https://avatars3.githubusercontent.com/u/19727413?s=40&v=4',
        'https://avatars3.githubusercontent.com/u/19727413?s=40&v=4'],
      row: ['https://avatars3.githubusercontent.com/u/19727413?s=40&v=4',
        'https://avatars3.githubusercontent.com/u/19727413?s=40&v=4',
        'https://avatars3.githubusercontent.com/u/19727413?s=40&v=4',
        'https://avatars3.githubusercontent.com/u/19727413?s=40&v=4'],
      wrapperHeight: 0,
      bottomAllLoaded: false,
    };
  },
  mounted() {
    // 必须先设置高度
    const DW = document.documentElement.clientHeight;
    this.wrapperHeight = DW - this.$refs.wrapper.getBoundingClientRect().top;
    console.dir(this.$refs.wrapper.style.height);
    setTimeout(() => {
      this.proList = this.source.slice(0); // 模拟异步
    }, 200);
  },
  methods: {
    topMethod() {
      setTimeout(() => {
        this.proList = this.source.slice(0);
        this.bottomAllLoaded = false;
        this.$refs.loadmore.onTopLoaded();
      }, 2000);
    },
    translateChange() {
    },
    bottomMethod() {
      setTimeout(() => {
        if (this.proList.length > 30) {
          this.bottomAllLoaded = true;
        } else {
          this.proList = this.proList.concat(this.row);
        }
        this.$refs.loadmore.onBottomLoaded();
      }, 2000);
    },
  },
};
</script>
<style lang="less" scoped>
.proList{
  width: 7.5rem;
  .item{
    width: 7.5rem;
    box-sizing: border-box;
    padding: 0.2rem 0.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.01rem solid #e5e5e5;
    >img{
      width: 1rem;
      height: 1rem;
    }
  }
}
.page-loadmore-wrapper{
  overflow-y: scroll;
}
</style>

