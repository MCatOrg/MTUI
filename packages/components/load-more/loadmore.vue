<style lang="less" scoped>
.container{position: relative;}
.top{position: absolute; line-height: .8rem; width: 100%; top: 0; transform: translateY(-100%);}
.bottom, .load__all{bottom: 0; line-height: 1rem ;}
</style>
<template>
    <div class="container" ref="box" @touchstart="start($event)" @touchmove="move($event)" @touchend="end($event)" :style="transform">
        <!-- 顶部加载的内容 -->
        <div class="top">
            <slot name="top">
                <div>{{topStatus[status]}}</div>
            </slot>
        </div>
        <slot></slot>
        <div class="load__all" v-if="loadAll || loadAllPower">
            <slot name="loadAll">
                <div>没有更多数据了</div>
            </slot>
        </div>
        <div class="bottom" v-else>
            <slot name="bottom">
                <div>{{bottomStatus[status]}}</div>
            </slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'loadmore',
    data(){
        return {
            topStatus: {
                pull: '下拉刷新',
                drop: '释放加载',
                loading: '加载中...'
            },
            bottomStatus: {
                pull: '上拉加载更多',
                drop: '释放加载',
                loading: '加载中...'
            },
            status: 'pull',
            loadAllPower: false,            //js判断是否加载完毕了，首次渲染

            //计算所用的变量
            startX: 0,
            startY: 0,
            moveY: 0,
        }
    },
    props: {
        loadAll: {
            type: Boolean,
            default: false,
        },
    },
    mounted() {
        let box = this.$refs.box;
        console.dir(box)
    },
    computed: {
        transform(){
            return {'transform': 'translateY('+((this.moveY-this.startY)/2)+'px)'}
        }
    },
    methods: {
        start(ev){
            this.startY = ev.touches[0].clientY
            this.moveY = ev.touches[0].clientY
        },
        move(ev){
            this.moveY = ev.touches[0].clientY
        },
        end(ev){
            this.startY = 0;
            this.moveY = 0;
        }
    }
}
</script>
