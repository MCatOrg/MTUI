<template>
  <div id="mtLoadMore">
    <mt-loadmore>
      <div class="proList">
        <div v-for="(pro,i) of proList" :key="i" class="item">
          <img :src="pro" alt="">
          <div>
            <h2>产品{{i+1}}</h2>
            <p>价格</p>
          </div>
        </div>
      </div>
    </mt-loadmore>
  </div>
</template>
<script>
export default {
  data() {
    return {
      proList: [
        'https://avatars3.githubusercontent.com/u/19727413?s=40&v=4',
        'https://avatars3.githubusercontent.com/u/19727413?s=40&v=4',
        'https://avatars3.githubusercontent.com/u/19727413?s=40&v=4',
        'https://avatars3.githubusercontent.com/u/19727413?s=40&v=4',
        'https://avatars3.githubusercontent.com/u/19727413?s=40&v=4',
        'https://avatars3.githubusercontent.com/u/19727413?s=40&v=4',
        'https://avatars3.githubusercontent.com/u/19727413?s=40&v=4',
      ],
    };
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
</style>

