<style lang="less">

</style>
<template>
    <div class="container">
        <header class="mt-header">
            <h2 class="mt-header_title">Step</h2>
            <p class="mt-header_info">步骤</p>
        </header>
        <main class="mt-body">
            <div class="group">
                <div class="group-header">水平Step</div>
                <div class="group-body">
                    <div class="mtui-steps horizon">
                        <div class="mtui-step active">
                            <div class="mtui-step_chart">
                                <span class="step-chart_dot"></span>
                            </div>
                            <p class="mtui-step_text">步骤一</p>
                        </div>
                        <div class="mtui-step active">
                            <div class="mtui-step_chart">
                                <span class="step-chart_dot"></span>
                                <span class="step-chart_line"></span>
                            </div>
                            <p class="mtui-step_text">步骤二</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="group">
                <div class="group-header">使用js渲染水平Step</div>
                <div class="group-body">
                    <div id="test"></div>
                </div>
            </div>

            <!-- 竖向step -->
            <div class="group">
                <div class="group-header">垂直step</div>
                <div class="group-body">
                    <div class="mtui-steps vertical">
                        <div class="mtui-step active">
                            <div class="mtui-step_chart">
                                <span class="step-chart_dot"></span>
                                <span class="step-chart_line"></span>
                            </div>
                            <div class="mtui-step_cont">
                                <h6 class="step-cont_title">TITLE</h6>
                                <p class="step-cont_info">infoinfoinfoinfoifnoinfoinfoinfoinfoinfoinfoinfoinfoifnoinfoinfoinfoinfoinfoinfo</p>
                            </div>
                        </div>
                        <div class="mtui-step">
                            <div class="mtui-step_chart">
                                <span class="step-chart_dot"></span>
                                <span class="step-chart_line"></span>
                            </div>
                            <div class="mtui-step_cont">
                                <h6 class="step-cont_title">TITLE</h6>
                                <p class="step-cont_info">infoinfoinfoinfoifnoinfoinfoinfoinfo</p>
                            </div>
                        </div>
                        <div class="mtui-step">
                            <div class="mtui-step_chart">
                                <span class="step-chart_dot"></span>
                                <!-- <span class="step-chart_line"></span> -->
                            </div>
                            <div class="mtui-step_cont">
                                <h6 class="step-cont_title">TITLE</h6>
                                <p class="step-cont_info">infoinfoinfoinfoifnoinfoinfoinfoinfo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- 竖向step -->
            <div class="group">
                <div class="group-header">使用js渲染垂直Step</div>
                <div class="group-body">
                    <div id="test2"></div>
                </div>
            </div>

        </main>
    </div>
</template>
<script>
import mtui from '../../js/mtui'
export default {
    mounted(){
        mtui.step({
            el: '#test',
            option: [
                {
                    cont: '步骤一',
                    status: true,
                },{
                    cont: '步骤二',
                    status: true
                },{
                    cont: '步骤三',
                    status: false
                }
            ]
        })
        mtui.step({
            el: '#test2',
            orient: 'vertical',
            option: [
                {
                    title: '步骤一',
                    cont: 'info info info info info info info',
                    status: false,
                },{
                    title: '步骤二',
                    cont: 'info info info info info',
                    status: true
                },{
                    title: '步骤三',
                    cont: 'info info info info',
                    status: true
                }
            ]
        })
    }
}
</script>
