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
 *  animate: 'opacity'   节点动画，默认opacity，目前仅支持 opacity|back
 *  option: [
 *      {
 *          title: '步骤一',
 *          cont: 'info info info info info',
 *          status: true,
 *          animate: false,     //该点是否有动画，默认为status连续为true的最后一个
 *      }
 *  ]
 * }
 */
function step(options){

    function setOption(){
        for(let i=0; i<options.option.length; i++){
            if(!options.option[i].status && i != 0) if(options.option[i-1].status) options.option[i-1].animate = true;
        }
        return {
            orient: options.orient || 'horizon',
            animate: options.animate == undefined ? 'opacity' : options.animate,
            options: options.option
        }
    }
    

    // let tplOptions = {
    //     orient: options.orient || 'horizon',
    //     options: options.option
    // }

    console.log(setOption())
    
    $(options.el).append($($.render(chart, setOption())));
    
}
export default step;
