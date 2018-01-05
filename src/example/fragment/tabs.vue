<style lang="less" scoped>

</style>
<template>
    <div class="container">
        <mt-header :data="headerData"></mt-header>
    </div>
</template>
<script>
import mtHeader from '../component/header'
export default {
    components: {
        mtHeader,
    },
    data(){
        return {
            headerData:{
                title: 'Tabs',
                info: '工具栏'
            }
        }
    },
}
</script>
