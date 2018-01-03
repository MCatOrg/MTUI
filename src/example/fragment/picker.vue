<style lang="less">

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
                title: 'Picker',
                info: '多列选择器，需要配合js实现'
            }
        }
    }
}
</script>
