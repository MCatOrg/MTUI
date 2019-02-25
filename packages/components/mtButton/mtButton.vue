<template>
    <button type="button" class="mtui-button" :class="[`mtui-button--${type}`, 
    `mtui-button--${size}`, plain ? 'is-plain' : '', round ? 'is-round' : '', 
    circle ? 'is-circle' : '', disabled || loading ? 'is-disabled' : '' ]" 
    :disabled="disabled || loading" :style="btnStyle" @click="btnClickEvent">
        <!-- <mt-spinner v-if="loading" :type="loadingType" :color="(plain && type !== 'default') ? colorRgba(colors[type], 0.4) : (textColor ? colorRgba(textColor, 0.6) : loadingColor)" :size="loadingSize"></mt-spinner> -->
        <mt-spinner v-if="loading" :type="loadingType" :color="(plain && type !== 'default') ? (textColor ? colorRgba(textColor, 0.4) : colorRgba(colors[type], 0.4)) : loadingColor" :size="loadingSize"></mt-spinner>
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
    data(){
        return {
            colors: {
                default: '',
                primary: this.$MTUI_CONFIG && this.$MTUI_CONFIG.ColorPrimary ||'#409EFF',
                success: this.$MTUI_CONFIG && this.$MTUI_CONFIG.ColorSuccess ||'#67C23A',
                info: this.$MTUI_CONFIG && this.$MTUI_CONFIG.ColorInfo ||'#909399',
                warning: this.$MTUI_CONFIG && this.$MTUI_CONFIG.ColorWarning ||'#E6A23C',
                danger: this.$MTUI_CONFIG && this.$MTUI_CONFIG.ColorDanger ||'#F56C6C',
                text: this.$MTUI_CONFIG && this.$MTUI_CONFIG.ColorText ||'#409EFF',
            }
        }
    },

    components: {
        "mt-touch-ripple": touchRipple,
        "mt-spinner": spinner
    },

    computed: {
        btnStyle(){
            let result = false
            if (this.plain) {
                if (this.disabled || this.loading) {
                    result = {
                        backgroundColor: this.bgColor ? this.colorRgba(this.bgColor, 0.25) : this.colorRgba(this.colors[this.type], 0.25),
                        borderColor: this.borderColor || this.bgColor ? this.colorRgba((this.borderColor || this.bgColor), 0.4) : this.colorRgba(this.colors[this.type], 0.4),
                        color: this.textColor ? this.colorRgba(this.textColor, 0.4) : this.colorRgba(this.colors[this.type], 0.4)
                    }
                } else {
                    result = {
                        backgroundColor: this.bgColor ? this.colorRgba(this.bgColor, 0.25) : this.colorRgba(this.colors[this.type], 0.25),
                        borderColor: this.borderColor || this.bgColor ? (this.borderColor || this.bgColor) : this.colors[this.type],
                        color: this.textColor ? this.textColor : this.colors[this.type]
                    }
                }
            } else if (this.type === 'text') {
                result = {
                    color: this.disabled ? '#c0c4cc' : this.colors[this.type],
                }
            } else if (this.disabled || this.loading) {
                result = {
                    backgroundColor: this.bgColor ? this.colorRgba(this.bgColor, 0.6) : this.colorRgba(this.colors[this.type], 0.6),
                    borderColor: this.borderColor || this.bgColor ? this.colorRgba((this.borderColor || this.bgColor), 0.6) : this.colorRgba(this.colors[this.type], 0.6),
                    color: this.type === 'default' ? this.colorRgba('#606266', 0.6) : (this.textColor ? this.colorRgba(this.textColor, 0.6) : '')
                }
            } else {
                result = {
                    backgroundColor: this.bgColor ? this.bgColor : this.colors[this.type],
                    borderColor: this.borderColor || this.bgColor ? (this.borderColor || this.bgColor) : this.colors[this.type],
                    color: this.type === 'default' ? '#606266' : (this.textColor ? this.textColor : '')
                }
            }
            return result;
        }
    },

    props: {
        // 按钮颜色： primary（主颜色：#409EFF）、success（成功：#67C23A）、info（信息：#909399）、warning（警告：#E6A23C）、danger（危险：#F56C6C）
        // 文字按钮：text
        type: {
            type: String,
            default: 'default',
            validator: function (value) {
                // 这个值必须匹配下列字符串中的一个
                return ['default', 'primary', 'success',  'info', 'warning', 'danger', 'text'].indexOf(value) !== -1
            }
        },

        // 按钮尺寸：size（尺寸：big、medium、small、mini）
        size: {
            type: String,
            default: 'big',
            validator: function (value) {
                // 这个值必须匹配下列字符串中的一个
                return ['big', 'medium', 'small', 'mini'].indexOf(value) !== -1
            }
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
        },

        // 自定义按钮背景色
        bgColor: {
            type: String,
            default: ''
        },

        // 自定义按钮边框颜色
        borderColor: {
            type: String,
            default: ''
        },

        // 自定义按钮文本颜色
        textColor: {
            type: String,
            default: ''
        }
    },

    methods: {
        btnClickEvent() {
            // if (!this.disabled && !this.loading) {
            //     this.$emit('click');
            // }
            this.$emit('click');
        },

        // 十六进制颜色/rgb转为rgba
        colorRgba(strHexColor, alpha=1) {
            // console.log(strHexColor, alpha);
            let regColor = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/; // 十六进制颜色正则表达式
            if (!strHexColor) {
                return;
            } 
            let lowerCaseColor = strHexColor.toLowerCase(); // 转为小写
            // 十六进制颜色转为RGBA格式
            if (lowerCaseColor && regColor.test(lowerCaseColor)) {
                if (lowerCaseColor.length === 4) {
                    let newColor = "#";
                    for (let i = 1; i < 4; i+=1) {
                        newColor += lowerCaseColor.slice(i, i + 1).concat(lowerCaseColor.slice(i, i + 1));
                    }
                    lowerCaseColor = newColor;
                }
                // 处理6位的颜色值
                let changeColor = [];
                for (let i = 1; i < 7; i+=2) {
                    changeColor.push(parseInt("0x" + lowerCaseColor.slice(i, i + 2)));
                }
                return "rgba(" + changeColor.join(",") + "," + alpha + ")";
            } else if (/^rgb\(/.test(lowerCaseColor)) {
                let strRgbValue = lowerCaseColor.replace(/rgb|\(|\)/g, "");
                return "rgba(" + strRgbValue + "," + alpha + ")"; 
            } else {
                // return lowerCaseColor;
                console.log("请设置成16进制或RGB格式的颜色！");
            }
        }
    }
}
</script>
