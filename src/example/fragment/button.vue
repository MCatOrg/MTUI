<style lang="less">
.mtui-popup_content{width: 100%; background-color: white; position: fixed; bottom: 0; left: 0;}

</style>
<template>
    <div class="container">
        <div>
            <button class="mtui-btn" id="showPicker">点我</button>
            <button class="mtui-btn" id="showMyPopup" @click="showMyPopup">遮罩</button>
        </div>
        <div>
            <span class="mtui-icon-success-circle"></span>
            <span class="mtui-icon-back mtui-icon-circle"></span>
        </div>

        <!-- 自定义popup -->
        <div id="myPopup">
            <h1>自定义popup</h1>
            <h1>自定义popup</h1>
            <h1>自定义popup</h1>
            <h1>自定义popup</h1>
            <h1>自定义popup</h1>
            <h1>自定义popup</h1>
        </div>

        <!-- <div class="mtui-mask">
            <div class="mtui-popup_content">

            </div>
        </div> -->
        <input type="text" placeholder="lalal">
    </div>
</template>
<script>
import $ from 'webpack-zepto';
export default {
    data(){
        return{
            pickerList: [{
                label: "飞机",
                value: 0,
                children: [
                    {
                        label: '经济舱',
                        value: 1
                    },
                    {
                        label: '商务舱',
                        value: 2
                    }
                ]
            },{
                label: '火车',
                value: 1,
                children: [
                    {
                        label: '卧铺',
                        value: 1
                    },
                    {
                        label: '坐票',
                        value: 2
                    },
                    {
                        label: '站票',
                        value: 3
                    }
                ]
            },{
                label: '大巴',
                value: 2,
                children: [
                    {
                        label: '普线',
                        value: 1,
                        disabled: true,
                    },
                    {
                        label: '快线',
                        value: 2
                    }
                ]
            }],
            mtui: {
                version: '1.0.0',
                definePopup: function(obj){
                    /**
                     * obj = {
                     *  el: '#myPopup',     必要，popup容器
                     *  height: '50%',      非必要，默认auto
                     *  showAtFirst: false, 非必要，默认false，进入页面时就打开popup
                     * }
                     */
                    var $obj = $(obj.el),
                        contentStyle = {
                            width: '100%',
                            backgroundColor: 'white',
                            position: 'fixed',
                            zIndex: 1001,
                            bottom: 0,
                            left: 0,
                            height: obj.height || 'auto',
                            overflowY: !!obj.height?'scroll':'initial'
                        },
                        $objContent = $obj.html(),
                        $body = $('body'),
                        mask = document.createElement('div'),
                        popup = document.createElement('div')
                        ;


                    if(!obj.showAtFirst) $obj.css('display','none')
                    $(popup).css(contentStyle);
                    $(popup).html($objContent).addClass('mtui-animate-slide-up');
                    $(mask).addClass('mtui-mask mtui-animate-fade-in');
                    $obj.empty()
                    $obj.prepend($(mask)).append($(popup));


                    $(mask).on('click',function(){
                        $(popup).removeClass('mtui-animate-slide-up').addClass('mtui-animate-slide-down');
                        $(mask).removeClass('mtui-animate-fade-in').addClass('mtui-animate-fade-out');
                        setTimeout(function(){
                            $obj.css('display','none')
                            $(popup).removeClass('mtui-animate-slide-down').addClass('mtui-animate-slide-up');
                            $(mask).removeClass('mtui-animate-fade-out').addClass('mtui-animate-fade-in');
                        },300)
                    })
                },
                showDefinePopup: function(obj){
                    var object = obj.constructor == String ? $(obj) : obj.constructor == Object ? obj : null;
                    if(object){
                        $('body').find(obj).css('display','block')
                    }else{
                        console.error("showDefinePopup(obj)中obj必须是元素的id或元素对象")
                    }
                },
                hideDefinePopup: function(obj){
                    var object = obj.constructor == String ? $(obj) : obj.constructor == Object ? obj : null;
                    if(object){
                        $('body').find(obj).css('display','none')
                    }else{
                        console.error("showDefinePopup(obj)中obj必须是元素的id或元素对象")
                    }
                }
            }
        }
    },
    methods:{
        showMyPopup(){
            this.mtui.showDefinePopup('#myPopup')
        }
    },
    mounted(){
        var that = this;
        document.getElementById('showPicker').onclick = function(){
            mtui.picker(that.pickerList, {
                onChange: function (result) {
                    console.log(result);
                },
                onConfirm: function (result) {
                    console.log(result);
                }
            })
        }

        this.mtui.definePopup({
            el: '#myPopup',
        });

    }
}
</script>
