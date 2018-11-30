<style lang="less" scoped>
.box{position: relative; overflow: hidden;}
.container{position: relative;}
.flex-center{display: flex; justify-content: center; align-items: center;}
.flex-center.column{flex-direction: column;}
.container.transition{transition: all .3s;}
.top{position: absolute; line-height: .88rem; width: 100%; top: 0; transform: translateY(-100%);}
.tipss{height: .88rem; color: #666; font-size: .26rem; line-height: .88rem;}
.bottom, .load__all{bottom: 0; line-height: 1rem;}
</style>
<template>
    <div class="box">
        <div :class="['container',hasTransition?'transition':'']" ref="box" @touchstart="start($event)" @touchmove="move($event)" @touchend="end($event)" :style="{top: len + 'px'}">
            <!-- 顶部加载的内容 -->
            <div class="top" :style="{backgroundColor: topBg, color: topColor}">
                <slot name="top">
                    <div v-if="topStatus == 'loading'" class="flex-center column tipss">
                        <img src="../../assets/svg/bars.svg" style="width: .44rem;" alt="">
                    </div>
                    <div v-else class="tipss">{{topStatusArr[topStatus]}}</div>
                </slot>
            </div>
            <slot></slot>
            <div class="tipss" v-if="loadAll || loadAllPower">
                <slot name="loadAll">
                    <div>没有更多数据了</div>
                </slot>
            </div>
            <div class="bottom" :style="{backgroundColor: bottomBg, color: bottomColor}" v-else @click="loadMoreBottom">
                <slot name="bottom">
                    <div v-if="bottomStatus == 'loading'" class="flex-center column tipss">
                        <img src="../../assets/svg/bars.svg" style="width: .44rem;" alt="">
                    </div>
                    <div v-else class="tipss">{{bottomStatusArr[bottomStatus]}}</div>
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'loadMore',
    data(){
        return {
            hasTransition: false,
            topStatusArr: {
                pull: '下拉刷新',
                drop: '释放加载',
                loading: '加载中...'
            },
            bottomStatusArr: {
                pull: '点击加载更多',
                drop: '释放加载',
                loading: '加载中...'
            },
            topStatus: 'pull',
            bottomStatus: 'pull',
            loadAllPower: false,            //js判断是否加载完毕了，首次渲染

            hasHttp: false,

            //计算所用的变量
            startScrollTop: 0,
            startX: 0,
            startY: 0,
            moveY: 0,
            len: 0
        }
    },
    props: {
        loadAll: {
            type: Boolean,
            default: false,
        },
        distance: {
            type: Number,
            default: 80
        },
        topBg: String,
        topColor: String,
        bottomBg: String,
        bottomColor: String,
    },
    mounted() {
        let box = this.$refs.box;
        console.dir(box)
    },
    // computed: {
    //     transform(){
    //         return {'top': ((this.moveY-this.startY)/2)+'px'}
    //     },
    // },
    methods: {
        isTop() {
            return document.body.scrollTop == 0 && document.documentElement.scrollTop == 0
        },
        isBottom() {
            var a = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var b = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
            var c = document.documentElement.scrollTop == 0 ? document.body.scrollHeight : document.documentElement.scrollHeight;

            if(a+Math.floor(b)==c || a+Math.ceil(b)==c) return true;
            return false;
        },
        start(ev){
            this.startY = ev.touches[0].clientY + document.documentElement.scrollTop
            this.startScrollTop = document.documentElement.scrollTop
        },
        move(ev){
            // if(this.isTop()) this.startY = ev.touches[0].clientY
            let len = (ev.touches[0].clientY - this.startY) / 2,
                scroll = len * 2 + this.startScrollTop > 0              //true 下滑，false 上滑

            if(scroll){                 //下滑
                if(this.isTop()){       //在顶部的情况下
                    ev.preventDefault();
                    if(this.topStatus != 'loading'){
                        this.len = len
                        if (this.len > this.distance) this.topStatus = 'drop';
                        else this.topStatus = 'pull';
                    }else this.len = len > 44 ? len : 44
                }
            }else{                  //上滑
                if(this.topStatus == 'loading'){
                    let len2 = 44 + (len * 2 + this.startScrollTop) / 2
                    if(len2 > 0){               //在0 - 44范围内
                        ev.preventDefault();
                        this.len = len2
                    }else this.len = 0
                }
            }
        },
        end(ev){
            if (this.len > this.distance) {
                this.hasTransition = true
                this.len = 44
                setTimeout(_=>{
                    this.hasTransition = false
                }, 300)

                this.topStatus = 'loading';

                // if(!this.hasHttp){
                //     this.hasHttp = true
                    this.$emit("topLoadMethod")
                // }
            }else{
                if(this.topStatus == 'loading'){
                    this.hasTransition = true
                    this.len = this.len < 22 ? 0 : 44
                    setTimeout(_=>{
                        this.hasTransition = false
                    }, 300)

                    if(this.len == 0){
                        this.topStatus = 'pull'
                        // this.hasHttp = false
                        this.$emit("onTopCancel")
                    }
                }else {
                    this.hasTransition = true
                    this.len = 0
                    setTimeout(_=>{
                        this.hasTransition = false
                    }, 300)
                }
            }
        },
        offTopLoad(){
            this.hasTransition = true
            this.topStatus = 'pull'
            this.len = 0
            setTimeout(_=>{
                this.hasTransition = false
            }, 300)
            // this.hasHttp = false
        },
        offBottomLoad(){
            this.bottomStatus = 'pull'
        },

        //点击加载更多
        loadMoreBottom(){
            this.bottomStatus = 'loading'
            this.$emit("bottomLoadMethod")
        },
    }
}
</script>
