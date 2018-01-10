import $ from '../util/util';
import chart from './popover.html';

/**
 * options={
 *  el: '#test',        //点击弹窗的元素对象
 *  position: 'top',    //popover的位置，基于点击元素，top|bottom|left|right, 默认top
 *  list: [             //必须
 *      {
 *          text: 'google',                 //选项文字 必须
 *          href: 'www.google.com',         //可为空，为空就是空链接
 *          xxx: 'google',                  //自定义内容，可多个添加
 *      }
 *  ]
 *  click: function(data){                  //点击选项返回对应的list子项
 *      console.log(data)
 *  }
 * }
 */

function popover(options){
    var $obj = $(options.el),
        position = options.position || 'top',
        $popover = $($.render(chart, {list: options.list, position: position})),
        $mask = $popover.find('.mtui-mask'),
        $popoverItem = $popover.find('.popover-list')
        ;

    $obj.on('click',function(){

        $('body').append($popover)

        let tb_top = this.offsetTop + this.offsetHeight + 2,
            lr_top = this.offsetTop + this.offsetHeight / 2,
            bottom = window.outerHeight - this.offsetTop + 2,
            right = window.outerWidth - this.offsetLeft + 6,
            tb_left = this.offsetLeft + ( this.offsetWidth / 2 ),
            lr_left = this.offsetLeft + this.offsetWidth + 6
            ;
        
        if(position == 'bottom' || position == 'top'){
            if(position == 'bottom') $popover.css({'display':'block','top': tb_top + 'px','left':tb_left + 'px'});
            else{
                $popover.css({'display':'block','bottom': bottom + 'px','left': tb_left + 'px'})
            }
            

            //判断是否靠边
            if(tb_left < $popover[0].offsetWidth / 2){       //左靠边
                $('.popover-lists').css({'transform':'translateX(50%)','left': -15 + 'px'})
            }else if(window.outerWidth - tb_left < $popover[0].offsetWidth / 2){     //右靠边
                $('.popover-lists').css({'transform':'translateX(-50%)','left': 15 + 'px'})
            }
        }
        else if(position == 'right' || position == 'left'){
            if(position == 'right') $popover.css({'display':'block','top': lr_top + 'px','left':lr_left + 'px'})
            else $popover.css({'display':'block','top': lr_top + 'px','right':right + 'px'})

            //判断是否靠边
            if(lr_top < $popover[0].offsetHeight / 2){       //上靠边
                $('.popover-lists').css({'transform':'translateY(50%)','top': -15 + 'px'})
            }else if(window.outerHeight - lr_top < $popover[0].offsetHeight / 2){     //下靠边
                $('.popover-lists').css({'transform':'translateX(-50%)','top': 15 + 'px'})
            }
        }

        function hidePopover(){
            $popover.removeClass('active');
            setTimeout(function(){
                $popover.remove();
            },300)
        }

        $popover.addClass('active')

        $mask[0].onclick = function(){
            hidePopover()
        }

        for(let i of $popoverItem){
            i.onclick = function(){
                hidePopover()
                if(options.click) options.click(options.list[$(this).index()])
            }
        }

    })
    
    return $popover[0];

}

export default popover;