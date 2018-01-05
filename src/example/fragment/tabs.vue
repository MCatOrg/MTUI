<style lang="less" scoped>
.mtui-tabs{display: flex;
    .mtui-tab{flex: 1;}
}
</style>
<template>
    <div class="container">
        <mt-header :data="headerData"></mt-header>
        <main class="mt-body">
            <div class="group">
                <div class="group-header">默认样式</div>
                <div class="group-body">
                    <div class="mtui-tabs">
                        <div class="mtui-tab active">选项</div>
                        <div class="mtui-tab">选项</div>
                        <div class="mtui-tab">选项</div>
                    </div>
                </div>
            </div>
        </main>
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
