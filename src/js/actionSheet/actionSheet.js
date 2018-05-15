
import $ from '../util/util';
import tpl from './actionSheet.html';

let _sington;

/**
 * actionsheet 弹出式菜单
 * @param {array} menus 上层的选项
 * @param {string} menus[].label 选项的文字
 * @param {function} menus[].onClick 选项点击时的回调
 *
 * @param {array} actions 下层的选项
 * @param {string} actions[].label 选项的文字
 * @param {function} actions[].onClick 选项点击时的回调
 *
 * @param {object=} options 配置项
 * @param {string=} options.className 自定义类名
 * @param {function=} [options.onClose] actionSheet关闭后的回调
 *
 * @example
 * mtui.actionSheet([
 *     {
 *         label: '拍照',
 *         onClick: function () {
 *             console.log('拍照');
 *         }
 *     }, {
 *         label: '从相册选择',
 *         onClick: function () {
 *             console.log('从相册选择');
 *         }
 *     }, {
 *         label: '其他',
 *         onClick: function () {
 *             console.log('其他');
 *         }
 *     }
 * ], [
 *     {
 *         label: '取消',
 *         onClick: function () {
 *             console.log('取消');
 *         }
 *     }
 * ], {
 *     className: 'custom-classname',
 *     onClose: function(){
 *         console.log('关闭');
 *     }
 * });
 */
function actionSheet(title,menus = [], actions = [], options = {}) {
    if(_sington) return _sington;

    options = $.extend({
        title:title,
        menus: menus,
        actions: actions,
        className: '',
        onClose: $.noop
    }, options);
    const $actionSheetWrap = $($.render(tpl, options));
    const $actionSheet = $actionSheetWrap.find('.mtui-actionsheet');
    const $actionSheetMask = $actionSheetWrap.find('.mtui-mask');

    function _hide(callback){
        _hide = $.noop; // 防止二次调用导致报错

        $actionSheet.addClass('mtui-animate-slide-down');
        $actionSheetMask
            .addClass('mtui-animate-fade-out')
            .on('animationend webkitAnimationEnd', function () {
                $actionSheetWrap.remove();
                _sington = false;
                options.onClose();
                callback && callback();
            });
    }
    function hide(callback){ _hide(callback); }

    $('body').append($actionSheetWrap);

    // 这里获取一下计算后的样式，强制触发渲染. fix IOS10下闪现的问题
    $.getStyle($actionSheet[0], 'transform');

    $actionSheet.addClass('mtui-animate-slide-up');
    $actionSheetMask
        .addClass('mtui-animate-fade-in')
        .on('click', function () { hide(); });
    $actionSheetWrap.find('.mtui-actionsheet__menu').on('click', '.mtui-actionsheet__cell', function (evt) {
        const index = $(this).index();
        menus[index].onClick.call(this, evt);
        hide();
    });
    $actionSheetWrap.find('.mtui-actionsheet__action').on('click', '.mtui-actionsheet__cell', function (evt) {
        const index = $(this).index();
        actions[index].onClick.call(this, evt);
        hide();
    });

    _sington = $actionSheetWrap[0];
    _sington.hide = hide;
    return _sington;
}
export default actionSheet;
