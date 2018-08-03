<template>
    <div :class="className">
        <!-- tabsitem数量没有超过5个的 -->
        <div class="mtui-tabs" v-if="computedList.length < 6">
            <div :class="['mtui-tab',i == activeIndex?'active':'']"
            v-for="(v, i) in computedList" @click="tab(i)" :key="i"
            :style="i == activeIndex?computedColor:''">
                <span class="mtui-tab_text">
                    <span>{{v.text}}</span>
                    <span class="mtui-tab_badeg"
                    :style="computedColor" v-if="v.badeg">{{v.badeg}}</span>
                </span>
            </div>
        </div>
        <!-- tabsitem数量超过5个的 -->
        <div class="mtui-tabs overflow" v-else>
            <div class="mtui-tab_acbox"><div class="mtui-tab_action"></div></div>
            <input type="checkbox" id="inputID" ref="inputID" />
            <label class="mtui-tab_arrow" for="inputID"></label>

            <div class="mtui-tabs_list" ref="box">
                <div class="mtui-tab_title">全部</div>
                <div class="mtui-tab_box" :style="{width : computedList.length * 1.5 + 'rem'}">
                    <div v-for="(v, i) in computedList"
                    :key="i" @click="tab(i)"
                    :class="['mtui-tab',i == activeIndex?'active':'']"
                    :style="i == activeIndex?computedColor:''">
                        <span>{{v.text}}</span>
                        <span class="mtui-tab_badeg"
                        :style="computedColor" v-if="v.badeg">{{v.badeg}}</span>
                    </div>
                </div>
                <div class="mtui-tab_line active"
                :style="[{left: activeIndex * 1.5 + 0.15 + 'rem'},computedColor]"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'mtTabs',
  data() {
    return {
      activeIndex: 0,
    };
  },
  props: {
    className: {
      type: String,
    },
    list: {
      type: Array,
      required: true,
    },
    color: {
      type: String,
      default: window.MTtheme && window.MTtheme.primary || '',
    },
    active: {
      type: Number,
      default: 0,
    },
  },
  mounted() {
    this.activeIndex = this.active;
  },
  computed: {
    computedList() {
      return this.list.map((value, index) => {
        if (!value.value) value.value = index;
        if (value.badeg && typeof Number(value.badeg) === 'number' && value.badeg > 99) value.badeg = '99+';
        return value;
      });
    },
    computedColor() {
      console.log(this.color);
      if (this.color !== '') {
        return {
          color: this.color,
          borderColor: this.color,
        };
      } return '';
    },
  },
  methods: {
    tab(i) {
      this.$refs.inputID.checked = false;

      let width = document.documentElement.getBoundingClientRect().width;
      width>750 && (width=750);
      let rem = width * 100 / 750;

      let endLeft = ((i - 2) * rem * 1.5) > 0 ? ((i - 2) * rem * 1.5) : 0;
      let startLeft = (this.$refs.box.scrollLeft);
      let distance = endLeft - startLeft;

      let scrollWidth = this.$refs.box.scrollWidth;
      let offsetWidth = this.$refs.box.offsetWidth;
      //activeIndex * 1.5
      if(distance < 0){
        let timer = setInterval(()=>{
          if(this.$refs.box.scrollLeft <= endLeft){
            clearInterval(timer)
          }else{
            this.$refs.box.scrollLeft = this.$refs.box.scrollLeft -2;
          }
        },(3000 / Math.abs(distance)) / 6)
      }else{
        let timer = setInterval(()=>{
          if(this.$refs.box.scrollLeft >= endLeft || ((scrollWidth - this.$refs.box.scrollLeft) == offsetWidth)){
            clearInterval(timer)
          }else{
            this.$refs.box.scrollLeft = this.$refs.box.scrollLeft + 2;
          }
        },(3000 / Math.abs(distance)) / 10)
      }


      // this.$refs.box.scrollLeft = (i - 2) * rem * 1.5;
      this.activeIndex = i;
      this.$emit('onclick', this.list[i]);
    },
  },

};
</script>
