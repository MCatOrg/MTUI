<template>
    <div
    v-show="isPopupShow"
    class="mt-popup"
    :class="[
        hasMask ? 'with-mask' : '',
        position
    ]">
        <transition name="fade">
            <div
            v-show="hasMask && isPopupBoxShow"
            @click="$_onPopupMaskClick"
            class="mt-popup-mask">
            </div>
        </transition>
        <transition
        :name="transition"
        @before-enter="$_onPopupTransitionStart"
        @before-leave="$_onPopupTransitionStart"
        @after-enter="$_onPopupTransitionEnd"
        @after-leave="$_onPopupTransitionEnd">
            <div
            v-show="isPopupBoxShow"
            class="mt-popup-box"
            :class="[
                transition
            ]">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
const COMPONENT_NAME = 'mt-popup'
export default {
    name: COMPONENT_NAME,
    props: {
        value: {
            type: Boolean,
            default: false,
        },
        hasMask: {
            type: Boolean,
            default: true
        },
        maskClosable: {
            type: Boolean,
            default: true
        },
        position: {
            type: String,
            default: 'center'
        },
        transition: {
            type: String,
            default() {
                switch (this.position) {
                    case 'bottom':
                        return 'slide-up'
                    case 'top':
                        return 'slide-down'
                    case 'left':
                        return 'slide-right'
                    case 'right':
                        return 'slide-left'
                    default:
                        return 'fade'
                }
            }
        },
        preventScroll: {
            type: Boolean,
            default: false,
        },
        preventScrollExclude: {
            type: [String, HTMLElement],
            default() {
                return ''
            }
        }
    },
    data() {
        return {
            // control popup mask & popup box
            isPopupShow: false,
            // control popup box
            isPopupBoxShow: false,
            // transition lock
            isAnimation: false
        }
    },
    watch: {
        value(val) {
            if (val) {
                if (this.isAnimation) {
                    setTimeout(() => {
                        this.$_showPopupBox()
                    }, 50)
                } else {
                    this.$_showPopupBox()
                }
            } else {
                setTimeout(() => {
                    this.$_hidePopupBox()
                }, 0)
            }
        },
        preventScrollExclude(val, oldVal) {
            // remove old listener before add
            this.$_preventScrollExclude(false, oldVal)

            this.$_preventScrollExclude(true, val)
        },
    },
    mounted() {
        this.value && this.$_showPopupBox()
    },
    methods: {
        $_showPopupBox() {
            this.isPopupShow = true
            this.isAnimation = true
            // popup box enter the animation after popup show
            this.$nextTick(() => {
                this.isPopupBoxShow = true
            })
            this.preventScroll && this.$_preventScroll(true)
        },
        $_hidePopupBox() {
            this.isAnimation = true
            this.isPopupBoxShow = false
            this.preventScroll && this.$_preventScroll(true)
            this.$emit('input', false)

        },
        $_onPopupMaskClick() {
            if (this.maskClosable) {
                this.$_hidePopupBox()
                this.$emit('maskClick')
            }
        },
        $_preventScroll(isBind) {
            const handler = isBind ? 'addEventListener' : 'removeEventListener'
            const masker = this.$el.querySelector('.md-popup-mask')
            const boxer = this.$el.querySelector('.md-popup-box')
            masker && masker[handler]('touchmove', this.$_preventDefault, false)
            boxer && boxer[handler]('touchmove', this.$_preventDefault, false)
            this.$_preventScrollExclude(isBind)
        },
        $_preventScrollExclude(isBind, preventScrollExclude) {
            const handler = isBind ? 'addEventListener' : 'removeEventListener'
            preventScrollExclude = preventScrollExclude || this.preventScrollExclude
            const excluder =
                preventScrollExclude && typeof preventScrollExclude === 'string'
                ? this.$el.querySelector(preventScrollExclude)
                : preventScrollExclude
            excluder && excluder[handler]('touchmove', this.$_stopImmediatePropagation, false)
        },
        $_preventDefault(event) {
            event.preventDefault()
        },
        $_stopImmediatePropagation(event) {
            event.stopImmediatePropagation()
        },

        $_onPopupTransitionStart() {
            if (!this.isPopupBoxShow) {
                this.$emit('beforeHide')
                this.$emit('before-hide')
            } else {
                this.$emit('beforeShow')
                this.$emit('before-show')
            }
        },
        $_onPopupTransitionEnd() {
            if (!this.isAnimation) {
                return
            }
            if (!this.isPopupBoxShow) {
                // popup hide after popup box finish animation
                this.isPopupShow = false
                this.$emit('hide')
            } else {
                this.$emit('show')
            }
            this.isAnimation = false
        },
    }
}
</script>

<style lang="less">
@import '../../styles/minxin/theme.less';
.mt-popup {
    &.with-mask {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 30;
        .mt-popup-box {
            position: absolute;
            z-index: 31;
        }
    }
    .mt-popup-box {
        position: fixed;
        z-index: 31;
        max-width: 100%;
        max-height: 100%;
        overflow: auto;
        will-change: auto;
        &.slide-up {
            padding-bottom: env(safe-area-inset-bottom);
        }
    }
    .mt-popup-mask {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 30;
        background-color:@popup-mask-bg;
    }
    &.center .mt-popup-box {
        top: 50%;
        right: auto;
        bottom: auto;
        left: 50%;
        transform: translate(-50%, -50%)
    }
    &.top, &.bottom, &.left, &.right {
        .mt-popup-box {
            transition: all .3s
        }
    }
    &.top, &.bottom {
        .mt-popup-box {
            width: 100%;
        }
    }
    &.left, &.right {
        .mt-popup-box {
            height: 100%;
        }
    }
    &.top .mt-popup-box {
        top: 0;
        left: 0;
    }
    &.bottom .mt-popup-box {
        bottom: 0;
        left: 0;
    }
    &.left .mt-popup-box {
        left: 0;
        top: 0;
    }
    &.right .mt-popup-box {
        right: 0;
        top: 0;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to, .fade-leave-active {
        opacity: 0;
    }
    .slide-up-enter-active, .slide-up-leave-active, .slide-down-enter-active, .slide-down-leave-active, .bottom .show {
        transform: translateY(0);
    }
    .slide-up-enter, .slide-up-leave-to {
    /* Solve the problem of hiding to show
    * in the animation state of elements outside the viewport
    */
        transform: translateY(70%);
    }
    .slide-up-leave-active {
        transform: translateY(100%);
    }
    .slide-down-enter, .slide-down-leave-to {
        transform: translateY(-70%);
    }
    .slide-down-leave-active {
        transform: translateY(-100%);
    }
    .slide-left-enter-active, .slide-left-leave-active, .slide-right-enter-active, .slide-right-leave-active {
        transform: translateX(0);
    }
    .slide-left-enter, .slide-left-leave-to {
        transform: translateX(70%);
    }
    .slide-left-leave-active {
        transform: translateX(100%);
    }
    .slide-right-enter, .slide-right-leave-to {
        transform: translateX(-70%);
    }
    .slide-right-leave-active {
        transform: translateX(-100%);
    }
}
</style>
