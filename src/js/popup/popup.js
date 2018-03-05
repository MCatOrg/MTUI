import $ from '../util/util';
import chart from './popup.html';

let _sington;

// mtui.popup({
//     el: '.text',
//     position: 'bottom',
//     width: 50,
//     height: 50,
//     showClose: true,
//     closeLabel: '返回',
// })


function popup(options = {}) {
    if(_sington) return _sington;

    let width = options.width ? options.width.toString().indexOf('px') > -1 ? options.width : options.width.toString().indexOf('%') > -1 ? options.width : options.width + '%' : false,
        height = options.height ? options.height.toString().indexOf('px') > -1 ? options.height : options.height.toString().indexOf('%') > -1 ? options.height : options.height + '%' : false,
        position = options.position || 'bottom';

    options = $.extend({
        position: position,
        showClose: options.showClose || false,
        closeLabel: options.closeLabel || '关闭'
    }, options);

    const $popupWrap = $($.render(chart, options));
    const $popup = $popupWrap.find('.popup');
    const $cont = $popupWrap.find('.popup-content');
    const $content = $popupWrap.find('.popup-content_html');
    const $mask = $popupWrap.find('.mtui-mask');
    const $close = $popupWrap.find('.popup-close');

    function _hide(callback){
        _hide = $.noop; // 防止二次调用导致报错

        if(position == 'bottom') $popup.addClass('mtui-animate-slide-down');
        else $popup.addClass('mtui-animate-slide-'+position+'-out')

        $mask.addClass('mtui-animate-fade-out');
        
        $popup.on('animationend webkitAnimationEnd', function () {
                $popupWrap.remove();
                _sington = false;
                callback && callback();
            });
    }
    function hide(callback){ _hide(callback); }

    $('body').append($popupWrap);
    // 不能直接把.mtui-animate-fade-in加到$dialog，会导致mask的z-index有问题
    
    $content[0].innerHTML = $(options.el)[0].innerHTML || ''
    $(options.el).css({'display':'none'})

    $mask.addClass('mtui-animate-fade-in');

    if(position == 'top') $popup.css({'top':'0','bottom':'auto'})
    if(position == 'right') $popup.css({'right':'0','left':'auto'})

    if(position == 'bottom') $popup.addClass('mtui-animate-slide-up');
    else $popup.addClass('mtui-animate-slide-'+position+'-in')
    
    if(width){
        $close.css({'width':width}); 
        $popup.css({'width':width}); 
    }
    if(height) $popup.css({'height':height});


    $close.on('click', function (evt) {
        hide();
    });
    $mask.on('click', function (evt) {
        hide();
    });

    _sington = $popupWrap[0];
    _sington.hide = hide;
    return _sington;
}
export default popup;