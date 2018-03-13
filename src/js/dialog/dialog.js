
import $ from '../util/util';
import tpl from './dialog.html';

let _sington;

/**
 * dialog，弹窗，alert和confirm的父类
 *
 * @param {object=} options 配置项
 * @param {string=} options.title 弹窗的标题
 * @param {string=} options.content 弹窗的内容
 * @param {string=} options.className 弹窗的自定义类名
 * @param {array=} options.buttons 按钮配置项
 *
 * @param {string} [options.buttons[].label=确定] 按钮的文字
 * @param {string} [options.buttons[].type=primary] 按钮的类型 [primary, default]
 * @param {function} [options.buttons[].onClick=$.noop] 按钮的回调
 *
 * @example
 * mtui.dialog({
 *     title: 'dialog标题',
 *     content: 'dialog内容',
 *     className: 'custom-classname',
 *     buttons: [{
 *         label: '取消',
 *         type: 'default',
 *         onClick: function () { alert('取消') }
 *     }, {
 *         label: '确定',
 *         type: 'primary',
 *         onClick: function () { alert('确定') }
 *     }]
 * });
 *
 * // 主动关闭
 * var $dialog = mtui.dialog({...});
 * $dialog.hide(function(){
 *      console.log('`dialog` has been hidden');
 * });
 */
function dialog(options = {}) {
    if(_sington) return _sington;

    options = $.extend({
        title: null,
        content: '',
        prompt:false,  //是否带输入框的弹窗
        className: '',
        buttons: [{
            label: '确定',
            type: 'primary',
            onClick: $.noop
        }],
    }, options);
    console.log(options)
    const $dialogWrap = $($.render(tpl, options));
    const $dialog = $dialogWrap.find('.mtui-dialog');
    const $mask = $dialogWrap.find('.mtui-mask');

    function _hide(callback){
        _hide = $.noop; // 防止二次调用导致报错

        $mask.addClass('mtui-animate-fade-out');
        $dialog
            .addClass('mtui-animate-fade-out')
            .on('animationend webkitAnimationEnd', function () {
                $dialogWrap.remove();
                _sington = false;
                callback && callback();
            });
    }
    function hide(callback){ _hide(callback); }

    $('body').append($dialogWrap);
    // 不能直接把.mtui-animate-fade-in加到$dialog，会导致mask的z-index有问题
    $mask.addClass('mtui-animate-fade-in');
    $dialog.addClass('mtui-animate-fade-in');

    $dialogWrap.on('click', '.mtui-dialog__btn', function (evt) {
        const index = $(this).index();
        if (options.buttons[index].onClick) {
          if(options.prompt){
            console.log($("#prompt").val())
            if (options.buttons[index].onClick.call(this, $("#prompt").val(),options.buttons[index].type) !== false) hide();
          }else{
            if (options.buttons[index].onClick.call(this, evt) !== false) hide();
          }
        } else {
            hide();
        }
    });

    _sington = $dialogWrap[0];
    _sington.hide = hide;
    return _sington;
}
export default dialog;
