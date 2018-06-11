<template>
    <div :class="['mtui-search_box',className]">
        <div :class="['mtui-search',circle?'circle':'']">
            <!-- search icon -->
            <div class="mtui-search_icon">
                <i class="mtui-icon-search"></i>
            </div>
            <!-- search input -->
            <div class="mtui-search_inputBox">
                <input @keydown.enter="onsearch"
                v-model="searchKey" @focus="onsearchFocus"
                @blur="onsearchBlur" @input="onsearchInput"
                class="mtui-search_input" :placeholder="placeholder" type="text">
            </div>
            <!-- close icon -->
            <div class="mtui-search_icon" @click="searchKey = ''" v-if="!!searchKey">
                <i class="mtui-icon-close"></i>
            </div>
        </div>
        <div v-if="hasAction"
        :class="['mtui-search_cancel',onFocus || !!searchKey?'cur':'']"
        @click="action(!!searchKey)">{{!!searchKey?'搜索':'取消'}}</div>

        <!-- history -->
        <div v-if="historys.length > 0 && onFocus && historyList.length > 0"
          class="mtui-search_history">
            <div class="history-lists">
                <div @click="historyClick($event)" class="lists-item"
                v-for="(v,i) in historyList" :key="i">
                    <router-link class="lists-item_cont"
                    v-if="v.url" :to="v.url">{{v.title}}</router-link>
                    <span class="lists-item_cont" v-else>{{v.title}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'mtSearchbar',
  data() {
    return {
      onFocus: false,
      searchKey: '',
    };
  },
  props: {
    className: {
      type: String,
    },
    hasAction: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: '搜索',
    },
    circle: {
      type: Boolean,
      default: false,
    },
    historys: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    historyList() {
      const result = [];
      this.historys.map((i) => {
        if (i.title.indexOf(this.searchKey) !== -1 && this.searchKey !== '') {
          result.push(i);
        }
        return i;
      });
      return result;
    },
  },
  methods: {
    historyClick(ev) {
      this.searchKey = ev.target.innerText;
    },
    action(code) {
      if (code) { // 搜索
        this.onsearch();
      } else { // 取消
        this.$emit('oncancle');
      }
    },
    oncancle() {
      this.onFocus = false;
      this.searchKey = '';
      this.$emit('oncancle');
    },
    onsearch() {
      this.$emit('onsearch', this.searchKey);
    },
    onsearchInput() {
      this.$emit('onsearchInput', this.searchKey);
    },
    onsearchFocus() {
      this.onFocus = true;
      this.$emit('onsearchFocus');
    },
    onsearchBlur() {
      this.onFocus = false;
      this.$emit('onsearchBlur');
    },
  },
};
</script>
