<style lang="less">
@import '../../styles/base/variable/color.less';
.mt-header{padding: .4rem;
    .mt-header_title{font-size: .6rem; color: @mtuiTextColorTitle}
    .mt-header_info{font-size: .3rem; color: @mtuiTextColorGray;}
}
</style>
<template>
    <header class="mt-header">
        <h2 class="mt-header_title">{{data.title}}</h2>
        <p class="mt-header_info">{{data.info}}</p>
    </header>
</template>
<script>
export default {
    props: {
        'data': {
            type: Object,
            default: {
                title: 'HELLO MTUI',
                info: '你好，猫态科技！'
            }
        }
    }
}
</script>
