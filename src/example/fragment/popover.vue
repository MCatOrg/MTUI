<style lang="less" scoped>
.group-body_pad3{text-align: center;}
</style>
<template>
    <div class="container">
        <mt-header :data="headerData"></mt-header>
        <main class="mt-body">
            <div class="group">
                <div class="group-header">点击展示popover</div>
                <div class="group-body_pad3">
                    <button class="mtui-btn mtui-btn__mini mtui-btn__primary test">点击</button>
                </div>
            </div>
            <div class="group">
                <div class="group-header">点击展示js渲染的popover</div>
                <div class="group-body_pad3">
                    <button class="mtui-btn mtui-btn__mini mtui-btn__primary test2">点击</button>
                    <button class="mtui-btn mtui-btn__mini mtui-btn__primary test2">点击</button>
                </div>
            </div>
            <div class="group">
                <div class="group-header">点击展示js渲染的popover</div>
                <div class="group-body_pad3">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <button class="mtui-btn mtui-btn__mini mtui-btn__primary test2">点击</button>
                    <button class="mtui-btn mtui-btn__mini mtui-btn__primary test2">点击</button>
                    <button class="mtui-btn mtui-btn__mini mtui-btn__primary test2">点击</button>
                    <button class="mtui-btn mtui-btn__mini mtui-btn__primary test2">点击</button>
                    <button class="mtui-btn mtui-btn__mini mtui-btn__primary test2">点击</button>
                </div>
            </div>
        </main>
        
        <div class="mtui-popover left inTest">
            <div class="mtui-mask"></div>
            <div class="popover">
                <div class="popover-triangle">
                    <span></span>
                </div>
                <div class="popover-lists">
                    <a class="popover-list">
                        aaa
                    </a>
                    <a class="popover-list">
                        aaa
                    </a>
                    <a class="popover-list">
                        aaa
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from "webpack-zepto";
import mtui from '../../js/mtui'
import mtHeader from '../component/header'
export default {
    components: {
        mtHeader,
    },
    data(){
        return {
            headerData:{
                title: 'Popover',
                info: '弹出菜单'
            }
        }
    },
    mounted(){
        var code = 'left';
        $('.test').on('click',function(){
            let top = 0,
                left = 0;


            function computeTop(doc){
                top += doc.offsetTop
                if(doc.offsetParent != null) computeTop(doc.offsetParent)
                else return top;
            }
            function computeLeft(doc){
                left += doc.offsetLeft
                if(doc.offsetParent != null) computeTop(doc.offsetParent)
                else return left;
            }

            let tb_top = this.offsetTop + this.offsetHeight + 2,
                lr_top = this.offsetTop + this.offsetHeight / 2,
                bottom = window.outerHeight - computeTop(this) + 2,
                right = window.outerWidth - this.offsetLeft + 6,
                tb_left = this.offsetLeft + ( this.offsetWidth / 2 ),
                lr_left = this.offsetLeft + this.offsetWidth + 6,
                $obj = $('.inTest')
                ;
                console.dir($obj[0])
            
            if(code == 'bottom' || code == 'top'){
                if(code == 'bottom') $obj.css({'display':'block','top': tb_top,'left':tb_left});
                else $obj.css({'display':'block','bottom': bottom,'left':tb_left})
                

                //判断是否靠边
                if(tb_left < $obj[0].offsetWidth / 2){       //左靠边
                    $('.popover-lists').css({'transform':'translateX(50%)','left': -15})
                }else if(window.outerWidth - tb_left < $obj[0].offsetWidth / 2){     //右靠边
                    $('.popover-lists').css({'transform':'translateX(-50%)','left': 15})
                }
            }
            else if(code == 'right' || code == 'left'){
                if(code == 'right') $obj.css({'display':'block','top': lr_top,'left':lr_left})
                else $obj.css({'display':'block','top': lr_top,'right':right})

                //判断是否靠边
                if(lr_top < $obj[0].offsetHeight / 2){       //上靠边
                    $('.popover-lists').css({'transform':'translateY(50%)','top': -15})
                }else if(window.outerHeight - lr_top < $obj[0].offsetHeight / 2){     //下靠边
                    $('.popover-lists').css({'transform':'translateX(-50%)','top': 15})
                }
            }
            $obj.addClass('active')
            console.dir(this)
        })
        $('.inTest .mtui-mask').on('click',function(){
            $('.inTest').removeClass('active');
            setTimeout(function(){
                $('.inTest').css('display','none')
            },300)
        })


        mtui.popover({
            el: '.test2',
            position: 'top',
            list: [
                {
                    text: '选项一',
                },{
                    text: 'button',
                    href: '#/button'
                },{
                    text: 'step',
                    href: '#/step'
                },
            ],
            click: function(data){
                console.log(data)
            }
        })
    },
}
</script>
