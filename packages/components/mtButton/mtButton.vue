<template>
    <button type="button" class="mtui-button" :class="[`mtui-button--${type}`, 
    size === '' ? '' : `mtui-button--${size}`, plain ? 'is-plain' : '',
    round ? 'is-round' : '', circle ? 'is-circle' : '',
    disabled || loading ? 'is-disabled' : '' ]" :disabled="disabled || loading" @click="btnClickEvent">
        <mt-spinner v-if="loading" :type="loadingType" :color="loadingColor" :size="loadingSize"></mt-spinner>
        <i class="mtui-button__icon" :class="icon" v-if="icon && !right"></i>
        <span class="mtui-button__label" v-if="label"><slot></slot></span>
        <i class="mtui-button__icon" :class="icon" v-if="icon && right"></i>
        <mt-touch-ripple v-if="!disabled && !loading && type !== 'text'"></mt-touch-ripple>
    </button>
</template>

<script>
import touchRipple from '../touchRipple';
import spinner from '../spinner';

export default {
    name: 'mtui-button',

    components: {
        "mt-touch-ripple": touchRipple,
        "mt-spinner": spinner
    },

    props: {
        // 按钮颜色： primary（主颜色：#409EFF）、success（成功：#67C23A）、info（信息：#909399）、warning（警告：#E6A23C）、danger（危险：#F56C6C）
        // 文字按钮：text
        type: {
            type: String,
            default: 'default'
        },

        // 按钮尺寸：size（尺寸：big、medium、small、mini）
        size: {
            type: String,
            default: 'big'
        },

        // 是否为朴素按钮（非填充）
        plain: {
            type: Boolean,
            default: false
        },

        // 是否为圆角按钮
        round: {
            type: Boolean,
            default: false
        },

        // 是否为圆形按钮
        circle: {
            type: Boolean,
            default: false
        },

        // 是否为禁用状态
        disabled: {
            type: Boolean,
            default: false
        },

        // 是否为加载中状态
        loading: {
            type: Boolean,
            default: false
        },

        // 加载动画类型（snake、dot、rectangle）
        loadingType: {
            type: String,
            default: 'snake'
        },

        // 加载动画颜色
        loadingColor: {
            type: String,
            default: '#fff'
        },

        // 加载动画尺寸
        loadingSize: {
            type: Number,
            default: 0.5
        },

        // 图标类名
        icon: {
            type: String,
            default: ''
        },

        // 图标是否显示在右边
        right: {
            type: Boolean,
            default: false
        },

        // 是否显示按钮文字
        label: {
            type: Boolean,
            default: true
        }
    },

    methods: {
        btnClickEvent() {
            // if (!this.disabled && !this.loading) {
            //     this.$emit('click');
            // }
            this.$emit('click');
        }
    }
}
</script>
