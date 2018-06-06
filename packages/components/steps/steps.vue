<template>
    <div :class="['mtui-steps',orient]">
        <template v-if="orient === 'horizon'">
            <template v-for="(value,index) in computedLists">
                <div :class="['mtui-step',value.status?'active':'']" :key="index">
                    <div class="mtui-step_chart">
                        <span :class="['step-chart_dot',value.animate?'cur':'']">
                            <span :class="['step-chart_animate',value.animate?animate:'']"></span>
                        </span>
                        <span class="step-chart_line"></span>
                        <span :class="['step-chart_line',value.status?'cur':'']"></span>
                    </div>
                    <p class="mtui-step_text">{{value.title}}</p>
                    <p class="mtui-step_text">{{value.cont}}</p>
                </div>
            </template>
        </template>
        <template v-else>
            <div v-for="(value,index) in computedLists" :key="index" :class="['mtui-step',value.status?'active':'']">
                <div class="mtui-step_chart">
                    <span class="step-chart_dot">
                        <span :class="['step-chart_animate',value.animate?animate:'']"></span>
                    </span>
                    <!-- <span :class="['step-chart_line',value.animate?'lastActive':'']"></span> -->

                    <span class="step-chart_line"></span>
                    <span :class="['step-chart_line',value.status&&!value.animate?'cur':'']"></span>
                </div>
                <div class="mtui-step_cont">
                    <h6 class="step-cont_title">{{value.title}}</h6>
                    <p class="step-cont_info">{{value.cont}}</p>
                </div>
            </div>
        </template>
    </div>
</template>
<script>
export default {
    name: 'mt-steps',
    props: {
        color: {
            // type: String
            validator: function(value){
                if(typeof value !== 'string') return false;
                return value.indexOf('#') !== -1;
            }
        },
        orient: {
            type: String,
            default: 'horizon',
            validator: function(value){
                return ['vertical','horizon'].indexOf(value) !== -1;
            }
        },
        animate: {
            type: String,
            default: 'opacity',
            validator: function(value){
                return ['opacity','back'].indexOf(value) !== -1;
            }
        },
        lists: {
            type: Array,
            required: true
        },
    },
    computed: {
        computedLists(){
            for(let i=0; i<this.lists.length; i++){
                if(!this.lists[i].status && i != 0){
                    if(this.lists[i-1].status) this.lists[i-1].animate = true
                }else this.lists[i].animate = false;
            }
            return this.lists;
        }
    }
}
</script>
