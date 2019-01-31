<template>
    <div class="mt-example-wrapper">
        <div class="mt-example-section" v-for="(keyboard, index) in numberKeyboard"
        :key="index">
            <div class="mt-example-title">{{keyboard.title}}</div>
            <div class="mt-example-describe">{{keyboard.describe}}</div>
            <mt-button type="primary" @click="keyboard.isKeyBoardShow = !keyboard.isKeyBoardShow">{{keyboard.isKeyBoardShow ? '收起键盘': '唤起键盘'}}</mt-button>
            <mt-number-keyboard
                v-model="keyboard.isKeyBoardShow"
                :type="keyboard.type"
                :disorder="keyboard.disorder"
                @enter="onNumberEnter($event, keyboard)"
                @delete="onNumberDelete(keyboard)">
            </mt-number-keyboard>
            <div class="mt-example-display" v-show="keyboard.isKeyBoardShow" v-text="keyboard.number"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "number-keyboard-demo",
    data() {
        return {
            numberKeyboard: [
                {
                    title: '基础',
                    describe: '有确认健和小数点，一般用于价格或金额输入',
                    isKeyBoardShow: false,
                    type: 'professional',
                    disorder: false,
                    number: '',
                },
                {
                    title: '简单类型',
                    describe: '无确认健和小数点，一般用于密码或验证码输入',
                    isKeyBoardShow: false,
                    type: 'simple',
                    disorder: false,
                    number: '',
                },
                {
                    title: '数字键乱序',
                    describe: '',
                    isKeyBoardShow: false,
                    type: 'professional',
                    disorder: true,
                    number: '',
                }
            ],
        }
    },
    methods: {
        onNumberEnter(val, keyboard) {
            keyboard.number += val
        },
        onNumberDelete(keyboard) {
            if (keyboard.number === '') {
                return
            }
            keyboard.number = keyboard.number.substr(0, keyboard.number.length - 1)
        }
    }
}
</script>

<style lang="less" scoped>
.mt-example-title {
    text-align: left;
    font-size: 0.28rem;
}
.mt-example-describe {
    margin-top: 0.15rem;
    text-align: left;
    font-size: 0.24rem;
    color: #666;
}
.mt-example-display {
    position: fixed;
    top: 30%;
    left: 50%;
    z-index: 9999;
    transform: translate(-50%, -50%);
    font-size: 42px;
    text-shadow: 0 4px 20px #666;
}
</style>

