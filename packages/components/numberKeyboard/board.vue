<template>
    <div class="mt-number-keyboard-container" :class="type">
        <div class="keyboard-number">
            <ul class="keyboard-number-list">
                <mt-number-key 
                    v-for="n in 9"
                    :key="n-1"
                    :value="keyNumberList[n - 1]"
                    class="keyboard-number-item"
                    @press="$_onKeyboard">
                </mt-number-key>
                <template v-if="type === 'professional'">
                    <mt-number-key
                        class="keyboard-number-item"
                        v-if="!hideDot"
                        :value="dotText"
                        @press="$_onKeyboard"
                    ></mt-number-key>
                    <mt-number-key
                        class="keyboard-number-item"
                        :class="{'large-item': hideDot}"
                        :value="keyNumberList[9]"
                        @press="$_onKeyboard"
                    ></mt-number-key>
                    <li class="keyboard-number-item" v-if="isView"></li>
                    <mt-number-key
                        v-else
                        class="keyboard-number-item slidedown"
                        no-touch
                        @press="$_onSlideDoneKey"
                    ></mt-number-key>
                </template>
                <template v-else>
                    <li class="keyboard-number-item no-bg"></li>
                    <mt-number-key
                        class="keyboard-number-item"
                        :value="keyNumberList[9]"
                        @press="$_onKeyboard"
                    ></mt-number-key>
                    <mt-number-key
                        class="keyboard-number-item no-bg delete"
                        @press="$_onDeleteKey"
                    ></mt-number-key>
                </template>
            </ul>
        </div>
        <div class="keyboard-operate" v-if="type === 'professional'">
            <ul class="keyboard-operate-list">
                <mt-number-key
                class="keyboard-operate-item delete"
                @press="$_onDeleteKey"
                ></mt-number-key>
                <mt-number-key
                class="keyboard-operate-item confirm"
                :value="okText"
                no-touch
                @press="$_onConfirmKey"
                ></mt-number-key>
            </ul>
        </div>
    </div>
</template>

<script>
import Key from './key'
const COMPONENT_NAME = 'mt-number-keyboard-container'
export default {
    name: COMPONENT_NAME,
    components: {
        [Key.name]: Key
    },
    props: {
        type: {
            // simple, professional
            type: String,
            default: 'professional'
        },
        disorder: {
            type: Boolean,
            default: false
        },
        hideDot: {
            type: Boolean,
            default: false
        },
        isView: {
            type: Boolean
        },
        okText: {
            type: String,
            default: '确定'
        },
        textRender: {
            type: Function,
            default: () => {}
        }
    },
    data() {
        return {
            keyNumberList: [],
        }
    },
    computed: {
        dotText() {
            return this.textRender('.') || '.'
        },
    },
    created() {
        this.$_generateKeyNumber()
    },
    methods: {
        // private methods
        $_generateKeyNumber() {
            const baseStack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
            if (this.disorder) {
                let count = 0
                while(baseStack.length) {
                    this.$set(this.keyNumberList, count, baseStack.splice(parseInt(Math.random() * baseStack.length), 1)[0] || 0)
                    count ++
                }
            } else {
                this.keyNumberList = baseStack
            }
        },
        $_onKeyboard(key) {
            this.$emit('enter', key)
        },
        $_onDeleteKey() {
            this.$emit('delete')
        },
        $_onConfirmKey() {
            this.$emit('confirm')
        },
        $_onSlideDoneKey() {
            this.$emit('hide')
        }
    }
}
</script>

<style lang="less">
.mt-number-keyboard-container {
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    display: flex;
    width: 100%;
    height: 4.28rem;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        z-index: 2;
        background-color: #d9d9d9;
        transform-origin: 100% 50%;
        transform: scaleY(.5) translateY(100%);
        top: 0;
        left: 0;
        width: 100%;
        height: 0.01rem;
        @media (min-resolution: 3dppx) {
            transform: scaleY(.3) translateY(100%);
        }
    }
    .keyboard-number, .keyboard-operate {
        display: flex;
    }
    .keyboard-number {
        flex: 3;
        background: #ebebeb;
        .keyboard-number-list {
            float: left;
            width: 100%;
            .keyboard-number-item {
                float: left;
                width: 33.3%;
                height: 1.07rem;
                padding-top: 0.05rem;
                line-height: 1.07rem;
                position: relative;
                text-align: center;
                font-size: 0.48rem;
                font-family: DINPro-Medium;
                font-weight: 500;
                color: #666;
                transition: background .3s;
                background: #fff;
                box-sizing: border-box;
                &::before{
                    content: "";
                    position: absolute;
                    z-index: 2;
                    background-color: #d9d9d9;
                    -webkit-transform-origin: 100% 50%;
                    transform-origin: 100% 50%;
                    -webkit-transform: scaleY(0.5) translateX(100%);
                    transform: scaleX(0.5) translateX(100%);
                    top:0;
                    right: 0;
                    width: 0.02rem;
                    height: 100%;
                    @media (min-resolution: 3dppx) {
                        transform: scaleX(.33) translateX(100%);
                    }
                }
                &::after {
                    content: "";
                    position: absolute;
                    z-index: 2;
                    background-color: #d9d9d9;
                    transform-origin: 100% 50%;
                    -webkit-transform-origin: 100% 50%;
                    transform: scaleY(.5) translateY(-100%);
                    -webkit-transform: scaleY(.5) translateY(-100%);
                    top: 0;
                    left: 0;
                    right: auto;
                    bottom: auto;
                    width: 100%;
                    height: 0.02rem;
                    @media (min-resolution: 3dppx){
                        transform: scaleY(0.33) translateY(-100%);
                    }
                }

                &.no-bg {
                    background: transparent;
                }
                &:nth-of-type(-n+3) {
                    &::after {
                        display: none;
                    }
                }
                &:nth-of-type(3n) {
                    width: 33.4%
                }
                &.delete {
                    background: url(./images/keyboard-del.png) center no-repeat;
                    background-size: 0.46rem;
                }
                &.slidedown {
                    background: #fff url(./images/keyboard-hide.png) center no-repeat;
                    background-size: 0.54rem;
                }
                .large-item {
                    width: 66.6%;
                }
                &:active, &.active {
                    background-color: #f0f0f0;
                }
            }
        }
    }
    .keyboard-operate {
        flex: 1;
        .keyboard-operate-list {
            position: relative;
            float: left;
            width: 100%;
            display: flex;
            flex-direction: column;
            .keyboard-operate-item {
                position: relative;
                float: left;
                width: 100%;
                background: #fff;
                transition: background .3s;
                &.delete {
                    height: 1.07rem;
                    background: #fff url(./images/keyboard-del.png) center no-repeat;   
                    background-size: 0.42rem;
                    display: flex;
                    flex: 1;
                    &:active {
                        background-color: #f0f0f0;
                    }
                }
                &.confirm {
                    padding-top: 0.05rem;
                    color: #fff;
                    background: #4A90E2;
                    display: flex;
                    flex: 1;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.32rem;
                    font-weight: 500;
                    &:active {
                        background-color: #f0f0f0;
                    }
                }
            }
        }
    }
    &.simple {
        .keyboard-number-item {
            color: #000 !important;
        }
    }
}

.slide-enter-active, .slide-leave-active {
  transition: all .3s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateY(100%);
}
</style>
