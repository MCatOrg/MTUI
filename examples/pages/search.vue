<style lang="less" scoped>
.searchbox {
  font-size: 0.24rem;
  line-height: 0.44rem;
  transition: all 0.3s;
  z-index: 2;
}
.searchbox.cur {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.3rem;
  background-color: white;
  box-sizing: border-box;
  height: 100%;
}
.mt-search-close {
  position: absolute;
  width: 100%;
  line-height: 0.88rem;
  border-top: 1px solid #e5e5e5;
  bottom: 0;
  left: 0;
  text-align: center;
}
</style>

<template>
    <div style="padding-left:.3rem; padding-right: .3rem; text-align: left;">
        <p>默认</p>
        <mt-searchbar @onsearch="search" @onclear="onclear"></mt-searchbar>
         <br>
        <p>圆角</p>
        <mt-searchbar @onsearch="search" :circle="true"></mt-searchbar>
        <br>
        <p>onclear事件和oninput事件判断搜索条为空</p>
        <mt-searchbar @onsearch="search" @onclear="onclear" @onsearchInput="oninputss"></mt-searchbar>
        <p>除去action</p>
        <mt-searchbar @onsearch="search" :hasAction="false"></mt-searchbar>
        <br>
        <p>自定义placeholder</p>
        <mt-searchbar @onsearch="search" placeholder="输入你想要的关键词"></mt-searchbar>
        <br>
        <p>onfocus和oninput和oncancel用例</p>
        <div :class="['searchbox',searchFocus?'cur':'']">
            <div class="mt-search">
                <mt-searchbar
                @onsearch="search"
                @onsearchBlur="onsearchBlur"
                @onsearchFocus="onsearchFocus"
                @onsearchInput="onsearchInput"
                placeholder="输入你想要的水果"
                @oncancle="oncancle" :historys="historys" historysLabel="aaaa"></mt-searchbar>
            </div>
            <div v-if="searchFocus" @click="searchFocus = false" class="mt-search-close">关闭</div>
        </div>
        <br>
        <p>history功能</p>
        <mt-searchbar @onsearch="search" :historys="historys" historysLabel="aaaa" placeholder="输入你想要的水果"></mt-searchbar>
    </div>
</template>
<script>
export default {
  data() {
    return {
      searchKey: '',
      searchFocus: false,
      historys: [
        {
          aaaa: '苹果',
          url: '###',
        }, {
          aaaa: '香蕉',
          url: '###',
        }, {
          aaaa: '柠檬',
          url: '###',
        }, {
          aaaa: '火龙果',
          url: '###',
        }, {
          aaaa: '雪梨',
          url: '###',
        }, {
          aaaa: '菠萝',
          url: '###',
        },
      ],
    };
  },
  methods: {
    onclear(){
      console.log("清空了")
    },
    oninputss(value){
      if(value == '') console.log("清空了哈哈")
    },
    search(value) {
      console.log(value);
      this.$Toast(`你搜索了: ${value}`);
    },
    onsearchFocus() {
      console.log('focus');
      this.searchFocus = true;
    },
    onsearchBlur() {
      console.log('searchbar had blur');
    },
    oncancle() {
      this.searchFocus = false;
    },
    onsearchInput(value) {
      console.log('input event log: ', value);
      this.searchKey = value;
    },
  },
  computed: {
    historyList() {
      const that = this;
      return this.historys.map(value => (value.title.indexOf(that.searchKey) !== -1 && that.searchKey !== '' ? value : false));
    },
  },
};
</script>
