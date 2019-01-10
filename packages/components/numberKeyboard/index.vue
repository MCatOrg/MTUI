<template>
    <div class="mt-number-keyboard">
        <template v-if="isView">
            <mt-number-keyboard-container
            :type="type"
            :disorder="disorder"
            :ok-text="okText"
            :is-view="isView"
            @enter="$_onEnter"
            @delete="$_onDelete"
            @confirm="$_onConfirm"
            @hide="isKeyboardShow = false">
            </mt-number-keyboard-container>
        </template>
        <template v-else>
            <mt-popup
            v-model="isKeyboardShow"
            position="bottom"
            @show="$emit('show')"
            @hide="$emit('hide')"
            :has-mask="false">
                <mt-number-keyboard-container
                :type="type"
                :disorder="disorder"
                :ok-text="okText"
                :is-view="isView"
                @enter="$_onEnter"
                @delete="$_onDelete"
                @confirm="$_onConfirm"
                @hide="isKeyboardShow = false">
                </mt-number-keyboard-container>
            </mt-popup>
        </template>
    </div>
</template>

<script>
import Popup from '../popup/popup'
import Keyboard from './board'
const COMPONENT_NAME = 'mt-number-keyboard'
export default {
    name: COMPONENT_NAME,
    components: {
        [Popup.name]: Popup,
        [Keyboard.name]: Keyboard
    },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        type: {
            // simple, professional
            type: String
        },
        isView: {
            type: Boolean,
            default: false
        },
        disorder: {
            type: Boolean
        },
        okText: {
            type: String
        }
    },
    data() {
        return {
            isKeyboardShow: false
        }
    },
    watch: {
        value(val) {
            this.isKeyboardShow = val
        },
        isKeyboardShow(val) {
            this.$emit('input', val)
        }
    },
    mounted() {
        this.value && (this.isKeyboardShow = this.value)
    },
    methods: {
        $_onEnter(val) {
            this.$emit('enter', val)
        },
        $_onDelete() {
            this.$emit('delete')
        },
        $_onConfirm() {
            this.$emit('confirm')
            this.hide()
        },
        // public method
        show() {
            this.isKeyboardShow = true
        },
        hide() {
            this.isKeyboardShow = false
        }
    }
}
</script>

<style lang="less">
@import '../../styles/minxin/theme.less';
.mt-number-keyboard {
    .mt-popup, .mt-popup-box {
        z-index: @number-keyboard-zindex;
    }
    .mt-popup-box {
        background-color: @color-bg-base;
    }
}
</style>
