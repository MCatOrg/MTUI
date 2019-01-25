<template>
    <div class="mt-codebox-wrapper">
        <div class="mt-codebox" @click="focus">
            <template v-if="maxlength > 0">
                <span
                v-for="i in num"
                :key="i"
                :class="['mt-codebox-box', (i === code.length + 1) && focused && 'is-active']">
                    <template v-if="code.charAt(i-1)">
                        <template v-if="mask">
                            <i class="mt-codebox-dot"></i>
                        </template>
                        <template v-else>
                            {{code.charAt(i-1)}}
                        </template>
                    </template>
                    <template v-if="i == code.length + 1 && focused">
                        <i class="mt-codebox-blink"></i>
                    </template>
                </span>
            </template>
            <template v-else>
                <input
                v-if="mask"
                type="password"
                :maxlength="maxlength"
                :value="code"
                readonly
                disabled
                :class="['mt-codebox-holder', focused && 'is-active']"/>
                <input
                v-else
                type="text"
                :maxlength="maxlength"
                :value="code"
                readonly
                disabled
                :class="['mt-codebox-holder', focused && 'is-active']"/>
            </template>
        </div>
        <form action="" v-show="system" @submit="$_onSubmit">
            <input
            :value="code"
            :type="mask ? 'password' : 'text'"
            :maxlength="maxlength"
            @input="$_onInputChange"
            ref="input"
            class="mt-codebox-input"/>
        </form>
        <mt-number-keyboard
            v-show="!system"
            ref="keyboard"
            class="mt-codebox-number-keyboard"
            :type="maxlength > 0 ? 'simple' : 'professional'"
            :okText="okText"
            :disorder="disorder"
            :is-view="isView"
            v-model="focused"
            @delete="$_onDelete"
            @enter="$_onEnter"
            @confirm="$_onConfirm"
            >
        </mt-number-keyboard>
    </div>
</template>

<script>
import NumberKeyboard from '../numberKeyboard/index'
const COMPONENT_NAME = 'mt-codebox'
export default {
    name: COMPONENT_NAME,
    components: {
        [NumberKeyboard.name]: NumberKeyboard
    },
    props: {
        value: {
            type: String,
            default: ''
        },
        maxlength: {
            type: [Number, String],
            default: 4
        },
        autofocus: {
            type: Boolean,
            default: false
        },
        mask: {
            type: Boolean,
            default: false
        },
        closable: {
            type: Boolean,
            default: true
        },
        system: {
            type: Boolean,
            default: false
        },
        okText: {
            type: String
        },
        disorder: {
            type: Boolean,
            default: false
        },
        isView: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            code: '',
            focused: this.autofocus
        }
    },
    watch: {
        value: {
            imediate: true,
            handler(val) {
                if (val !== this.code) {
                    this.code = val
                }
            }
        }
    },
    computed: {
        num() {
            return Math.abs(parseInt(this.maxlength, 10)) || 1
        }
    },
    mounted() {
        if (this.closable) {
            document.addEventListener('click', this.$_handleOutClick)
        }
        if (!this.system && !this.isView) {
            document.body.appendChild(this.$refs.keyboard.$el)
        }
    },
    beforeDestroy() {
        if (this.closable) {
            document.removeEventListener('click', this.$_handleOutClick)
        }
        if (this.focused) {
            this.blur()
        }
        if (!this.system && !this.isView) {
            document.body.removeChild(this.$refs.keyboard.$el)
        }
    },
    methods: {
        $_handleOutClick(e) {
            if (!this.$el.contains(e.target)) {
                this.focused = false
            }
        },
        $_onInputChange(e) {
            if (this.maxlength < 0 || e.target.value.length <= this.maxlength) {
                this.code = e.target.value
            }
            if (this.code.length === this.maxlength) {
                this.$emit('submit', this.code)
            }
            this.$emit('input', this.code)
        },
        $_onSubmit(e) {
            e.preventDefault()
            this.$emit('submit', this.code)
        },
        $_onEnter(val) {
            if ((this.maxlength < 0 || this.code.length < this.maxlength) && val !== '.') {
                this.code += val
            }
            if (this.code.length === this.maxlength) {
                this.$nextTick(function() {
                    this.$emit('submit', this.code)
                })
            }
            this.$emit('input', this.code)
        },
        $_onDelete() {
            this.code = this.code.slice(0, this.code.length - 1)
            this.$emit('input', this.code)
        },
        $_onConfirm() {
            this.$emit('submit', this.code)
        },
        // public method
        blur() {
            this.focused = false
            if (this.system) {
                this.$refs.input.blur()
            }
        },
        focus() {
            this.focused = true
            if (this.system) {
                this.$refs.input.focus()
            }
        },
    }
}
</script>

<style lang="less">
@import '../../styles/minxin/theme.less';
.mt-codebox-wrapper {
    .mt-codebox-input {
        position: absolute;
        left: -99.99rem;
        opacity: 0;
    }
}
.mt-codebox {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    .mt-codebox-box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: @codebox-width;
        color: @color-text-base;
        font-size: @codebox-font-size;
        margin-left: @codebox-gutter;
        margin-right: @codebox-gutter;
        position: relative;
        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 200%;
            height: 200%;
            border: 0.02rem solid #d9d9d9;
            box-sizing: border-box;
            -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
            -webkit-transform: scale(.5);
            transform: scale(.5);
            z-index: 2;
        }
        &::before {
            content: "";
            display: block;
            padding-bottom: 100%;
        }
        &::after {
            border-radius: @codebox-input-radius;
        }
        &.is-active {
            &::after {
                border-color: @codebox-border-active-color;
            }
        }
    }
    .mt-codebox-blink {
        display: block;
        height: 0.4rem;
        width: 0.02rem;
        background-color: @codebox-blink-color;
        animation: mt-codebox-flash steps(2) 1s infinite;
    }
    .mt-codebox-dot {
        display: block;
        height: 0.1rem;
        width: 0.1rem;
        line-height: 0.1rem;
        border-radius: 0.05rem;
        background-color: @codebox-dot-color;
    }
    .mt-codebox-holder {
        pointer-events: none;
        height: @codebox-input-height;
        padding: @codebox-input-padding;
        width: 100%;
        text-align: center;
        font-size: @codebox-input-font-size;
        outline: none;
        color: @color-text-base;
        letter-spacing: 0.1em;
        border-radius: 0;
        border-style: solid;
        border-width: 0 0 0.02rem 0;
        border-color: @codebox-input-border-color;
        background: none;
        box-shadow: none;
        box-sizing: border-box;
        -webkit-appearance: none;
        &[disabled], &[readonly] {
            color: @color-text-base;
            opacity: 1;
        }
        &.is-active {
            border-color: @codebox-border-active-color;
        }
    }
}
@keyframes mt-codebox-flash {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
}
</style>

