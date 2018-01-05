/*
* Tencent is pleased to support the open source community by making mtui.js available.
* 
* Copyright (C) 2017 THL A29 Limited, a Tencent company. All rights reserved.
* 
* Licensed under the MIT License (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at
* 
*       http://opensource.org/licenses/MIT
* 
* Unless required by applicable law or agreed to in writing, software distributed under the License is
* distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
* either express or implied. See the License for the specific language governing permissions and
* limitations under the License.
*/

import $ from '../util/util';
import tpl from './toast.html';

let _sington;

/**
 * toast 一般用于操作成功时的提示场景
 * @param {string} content toast的文字
 * @param {Object|function=} options 配置项或回调
 * @param {number=} [options.duration=3000] 多少毫秒后关闭toast
 * @param {function=} options.callback 关闭后的回调
 * @param {string=} options.className 自定义类名
 *
 * @example
 * mtui.toast('操作成功', 3000);
 * mtui.toast('操作成功', {
 *     duration: 3000,
 *     className: 'custom-classname',
 *     callback: function(){ console.log('close') }
 * });
 */
function toast(content = '', options = {}) {
    if(_sington) return _sington;

    if (typeof options === 'number') {
        options = {
            duration: options
        };
    }
    if (typeof options === 'function') {
        options = {
            callback: options
        };
    }

    options = $.extend({
        content: content,
        duration: 3000,
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
    }, options.duration);

    _sington = $toastWrap[0];
    return $toastWrap[0];
}
export default toast;
