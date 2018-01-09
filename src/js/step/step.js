import $ from '../util/util';
import chart from './step.html';

/**
 * 
 * @param {object} options
 * 
 * horizon:
 * options = {
 *  el: '#test',    包裹step的元素对象
 *  orient: 'horizon'   方向，支持'horizon'/'vertical'两个值，默认horizon
 *  option: [
 *      {
 *          cont: '步骤一',
 *          status: true,
 *      }
 *  ]
 * }
 * 
 * vertical:
 * options = {
 *  el: '#test',    包裹step的元素对象
 *  orient: 'vertical'   方向，支持'horizon'/'vertical'两个值，默认horizon
 *  option: [
 *      {
 *          title: '步骤一',
 *          cont: 'info info info info info',
 *          status: true,
 *      }
 *  ]
 * }
 */
function step(options){

    let tplOptions = {
        orient: options.orient || 'horizon',
        options: options.option
    }
    
    $(options.el).append($($.render(chart, tplOptions)));
    
}
export default step;
