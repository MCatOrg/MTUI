<style lang="less" scoped>
.mtui-search_box{display: flex; transition: all .3s;}
.mtui-search{background-color: #F2F2F2; border-radius: .08rem; line-height: .6rem; display: flex; justify-content: flex-end; flex: 1;}
.mtui-search.circle{border-radius: .3rem; padding-left: .1rem; padding-right: .1rem;}
.mtui-search_icon{width: .6rem; height: .6rem; display: flex; justify-content: center; align-items: center; color: #666;}
.mtui-search_icon .mtui-icon-close{color: #999;}
.mtui-search_inputBox{flex: 1;}
.mtui-search_input{width: 100%; border: 0; background-color: transparent; height: .6rem; line-height: .6rem;}

.mtui-search_cancel{width: 1rem; line-height: .6rem; text-align: center; color: #666; font-size: .24rem;}
</style>

<template>
    <div>
        <div class="mtui-search_box">
            <div class="mtui-search">
                <!-- icon -->
                <div class="mtui-search_icon">
                    <i class="mtui-icon-search"></i>
                </div>
                <div class="mtui-search_inputBox">
                    <input @focus="onFocus = true" @blur="onFocus = false;" class="mtui-search_input" v-model="key" placeholder="搜索" type="text">
                </div>
                <div class="mtui-search_icon" v-if="!!key">
                    <i class="mtui-icon-close"></i>
                </div>
            </div>
            <div v-if="onFocus" class="mtui-search_cancel" @click="action(!!key)">{{!!key?'搜索':'取消'}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            key: '',
            onFocus: false,
        }
    },
    methods: {
        action(code){
            if(code){       //搜索
                console.log('搜索')
            }else{          //取消
                this.onFocus = false;
                this.key = '';
            }
        }
    }
    // props: {
    //     key: {
    //         type: String,
    //         required: true
    //     },
    //     placeholder: {
    //         type: String,
    //         default: '搜索'
    //     },
    // }
}
</script>
