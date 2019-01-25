<template>
    <div class="mt-example-wrapper">
        <div class="mt-example-section">
            <div class="mt-example-title">基本</div>
            <mt-codebox
            v-model="code"
            :maxlength="4"
            :autofocus="true"
            ></mt-codebox>
        </div>
        <div class="mt-example-seciton">
            <div class="mt-example-title">掩码遮蔽</div>
            <mt-codebox
            :mask="true"
            v-model="maskCode"
            >
            </mt-codebox>
        </div>
        <div class="mt-example-seciton">
            <div class="mt-example-title">不限长度</div>
            <mt-codebox
            v-model="unLimitCode"
            :maxlength="-1"
            >
            </mt-codebox>
        </div>
        <div class="mt-example-seciton">
            <div class="mt-example-title">系统键盘</div>
            <mt-codebox
            v-model="sysCode"
            :maxlength="-1"
            system
            >
            </mt-codebox>
        </div>
    </div>
</template>

<script>
export default {
    name: 'codebox-demo',
    data() {
        return {
            code: '',
            maskCode: '',
            unLimitCode: '',
            sysCode: '',
        }
    }
}
</script>

<style lang="less" scoped>
.mt-example-wrapper {
    padding: 0 0.5rem;
}
.mt-example-section {
    padding: 0.1rem 0;
}
.mt-example-title {
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: left;
}
</style>

