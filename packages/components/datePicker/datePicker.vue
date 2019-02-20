<template>
    <div class="" >
      <transition name="fade">
          <div class="mask" @click.stop="hide" v-show="showPicker"></div>
      </transition>

        <transition name="translate">
          <div class="picker-popup" v-show="showPicker">
            <picker :slots="list" @change="onValuesChange"
                selectedColor="selectedColor"
            :showToolbar="true">
            <!-- showToolbar -->
            <div class="pickerBar">
              <span @click.stop="hide">取消</span>
              <span @click.stop="confirm">确定</span>
            </div>
            <!-- showToolbar -->
          </picker>
          </div>
        </transition>

      </div>
    </div>

</template>

<script>
import picker from '../picker/picker.vue'
export default {
  name: 'mt-date-picker',
  props: {
    startTime: {
      type: String,
      default: '1980'
    },
    endTime: {
      type: String,
      default:'2150'
    },
    selectedColor: {
        type: String,
        default: '#DFB559'
    },
    isToday: {
        type: Boolean,
        default: true
    }
  },
  data(){
    return {
      keyId: new Date().getTime(),
      showPicker: false, //是否显示
      currentYear: '',
      currentMonth: '',
      currentDay: '',
      targetField: '', //可能要修改的对象字段
      list: [
        {
          flex: 1,
          values: [],
          defaultIndex: 3,
        },
        {
          flex: 1,
          values: [],
          defaultIndex: 2,
        },
        {
          flex: 1,
          values: [],
          defaultIndex: 2,
        }
      ],
    }
  },
  components: {
    picker
  },
  created(){
      if(this.isToday){
          this.setToday()
      }
    this.countYear();
    this.countMonth();
    this.countDay();
  },
  methods: {
      setToday(){
          let date = new Date(); //获取当前的时间
          let year = date.getFullYear();
          let month = date.getMonth();
          let day = date.getDate();
          this.list[0].defaultIndex = year - this.startTime >0 ? year -
              this.startTime : 0;
          this.list[1].defaultIndex = month;
          this.list[2].defaultIndex = day-1;

      },
    countYear(){
      // 计算年
      let years = [];
      for(let i = this.startTime;i<=this.endTime;i++){
        years.push(i);
      }
      this.list[0].values = years;
      this.currentYear = this.list[0].values[this.list[0].defaultIndex];
    },
    countMonth(){
      // 计算月份
      let months = [];
      for(let i=1;i<=12;i++){
        months.push(i);
      }
      this.list[1].values = months;
      this.currentMonth = this.list[1].values[this.list[1].defaultIndex];

    },
    countDay(){
      // 计算天数
      let days = [];
      let counts = new Date(this.currentYear,this.currentMonth,0).getDate();
      //console.log(counts);
      for(let i=1;i<=counts;i++){
        days.push(i);
      }
      this.list[2].values = days;
      this.currentDay = this.list[2].values[this.list[2].defaultIndex];

    },
    onValuesChange(vm,value){
      // 拖动改变数据
        if(this.currentYear!=value[0] || this.currentMonth!=value[1]){
            
            this.currentYear = value[0];
            this.currentMonth = value[1];
            // 动态修改天数
            this.countDay()
        }
        if(this.currentDay!= value[2]){

            this.currentDay = value[2];
        }
    },
    confirm(){
      // 确定
      this.hide();
      let data = [this.currentYear,this.currentMonth,this.currentDay];
      this.$emit('confirm',data,this.targetField);
    },
    show(targetField=''){
      // 显示
      this.showPicker = true;
      this.targetField = targetField;
    },
    hide(){
      // 隐藏
      this.showPicker = false;
    }
  }

}
</script>

<style lang="less" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.translate-enter-active, .translate-leave-active {
  transform: translateY(0);
  transition: transform 0.5s;
}
.translate-enter, .translate-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(100%);
}
.mask {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
}

.picker-popup {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 31;
  width: 100%;
  background: #fff;
}

.pickerBar{
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 0.3rem;
  height: 0.88rem;
  justify-content: space-between;
  align-items: center;
  border-top: 0.01rem solid #e5e5e5;
  border-bottom: 0.01rem solid #e5e5e5;
  >span{
    color: #999;
    font-size: 0.34rem;
    &:last-of-type{
      color:#4a87d6;
    }
  }
}
</style>
