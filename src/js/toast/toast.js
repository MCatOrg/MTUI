
import $ from '../util/util';
import tpl from './toast.html';

let _sington;

/**
 * toast 一般用于操作成功时的提示场景
 * @param {string} content toast的文字
 * @param {Object|function=} options 配置项或回调
 * @param {number=} [options.time=3000] 多少毫秒后关闭toast
 * @param {function=} options.callback 关闭后的回调
 * @param {string=} options.className 自定义类名
 *
 * @example
 * mtui.toast('操作成功', 3000);
 * mtui.toast('操作成功', {
 *     time: 3000,
 *     className: 'custom-classname',
 *     callback: function(){ console.log('close') }
 * });
 */
function toast(content = '', options = {}) {
    if(_sington) return _sington;

    if (typeof options === 'number') {
        options = {
            time: options
        };
    }
    if (typeof options === 'function') {
        options = {
            callback: options
        };
    }

    options = $.extend({
        content: content,
        time: 1000,
        callback: $.noop,
        className: ''
    }, options);

    const $toastWrap = $($.render(tpl, options));
    const $toast = $toastWrap.find('.mtui-toast');
    const $mask = $toastWrap.find('.mtui-mask');

    $('body').append($toastWrap);
    $toast.addClass('mtui-animate-fade-in');
    $mask.addClass('mtui-animate-fade-in');

    setTimeout(() => {
        $mask.addClass('mtui-animate-fade-out');
        $toast
            .addClass('mtui-animate-fade-out')
            .on('animationend webkitAnimationEnd', function () {
                $toastWrap.remove();
                _sington = false;
                options.callback();
            });
    }, options.time);

    _sington = $toastWrap[0];
    return $toastWrap[0];
}
export default toast;
