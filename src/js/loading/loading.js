import $ from '../util/util';
import tpl from './loading.html';

let _sington;

/**
 * loading
 * @param {string} content loading的文字
 * @param {object=} options 配置项
 * @param {string=} options.className 自定义类名
 *
 * @example
 * var loading = mtui.loading('loading', {
 *     className: 'custom-classname'
 * });
 * setTimeout(function () {
 *     loading.hide(function() {
 *          console.log('`loading` has been hidden');
 *      });
 * }, 3000);
 */
function loading(content = '', options = {}) {
  if (_sington) return _sington;

  options = $.extend({
    content: content,
    className: ''
  }, options);

  const $loadingWrap = $($.render(tpl, options));
  function _hide(callback) {
    _hide = $.noop; // 防止二次调用导致报错

    $loadingWrap
      .addClass('mtui-animate-fade-out')
      .on('animationend webkitAnimationEnd', function () {
        $loadingWrap.remove();
        _sington = false;
        callback && callback();
      });
  }

  function hide(callback) {
    _hide(callback);
  }

  $('body').append($loadingWrap);

  _sington = $loadingWrap[0];
  _sington.hide = hide;
  return _sington;
}
export default loading;
