
import $ from '../util/util';
import dialog from '../dialog/dialog';

function prompt(title = '', complete = $.noop,options) {
    if(typeof complete === 'object'){
        options = complete;
        complete = $.noop;
    }

    options = $.extend({
        title:title,
        prompt:true,
        buttons: [{
            label: '取消',
            type: 'default',
            onClick: complete
        }, {
            label: '确定',
            type: 'primary',
            onClick: complete
        }]
    }, options);

    return dialog(options);
}
export default prompt;
