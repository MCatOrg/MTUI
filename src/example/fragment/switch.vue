<style lang="less">
.show-switch{padding-left: .3rem;}
</style>
<template>
    <div class="container">
        <header class="mt-header">
            <h2 class="mt-header_title">Switch</h2>
            <p class="mt-header_info">开关</p>
        </header>
        <main class="mt-body">
            <div class="group">
                <div class="group-header">全部开关</div>
                <div class="group-body">
                    <div class="show-switch">
                        <input class="mtui-switch" type="checkbox"/>
                    </div>
                </div>
            </div>
            <div class="group">
                <div class="group-header">列表中使用switch</div>
                <div class="group-body">
                    <div class="mtui-cells">
                        <div class="mtui-cell mtui-cell_switch">
                            <div class="mtui-cell__bd">标题文字</div>
                            <div class="mtui-cell__ft">
                                <input class="mtui-switch" type="checkbox"/>
                            </div>
                        </div>
                        <div class="mtui-cell mtui-cell_switch">
                            <div class="mtui-cell__bd">标题文字</div>
                            <div class="mtui-cell__ft">
                                <input class="mtui-switch" type="checkbox" checked/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
export default {

}
</script>
