import $ from '../util/util';
/**
 * Accordion 折叠面板 可以在折叠面板中放置任何内容；折叠面板默认收缩，若希望某个面板默认展开，只需要在包含.mtui-collapse类的li节点上，增加.mtui-collapse__active类即可
 * @param {string} selector Accordion的selector
 *
 * @example
 * #### html
 * ```html
 * <ul class="mtui-cells_collapse" id="Accordion">
      <li class="mtui-cells mtui-collapse mtui-collapse__active">
        <a href="#" class="mtui-cell mtui-collapse__title">
          <div class="mtui-cell__bd">一级列表</div>
          <div class="mtui-cell__ft"></div>
        </a>
        <div class="mtui-cells mtui-collapse__content">
          <div class="mtui-cell">二级列表</div>
          <div class="mtui-cell">二级列表</div>
          <div class="mtui-cell">二级列表</div>
        </div>
      </li>
      <li class="mtui-cells mtui-collapse">
        <a href="#" class="mtui-cell mtui-collapse__title">
          <div class="mtui-cell__bd">一级列表</div>
          <div class="mtui-cell__ft"></div>
        </a>
        <div class="mtui-collapse__content">
          是的
        </div>
      </li>
      <li class="mtui-cells mtui-collapse">
        <a href="#" class="mtui-cell mtui-collapse__title">
          <div class="mtui-cell__bd">一级列表</div>
          <div class="mtui-cell__ft"></div>
        </a>
        <div class="mtui-collapse__content">
          <img src="../images/logo.png" alt="">
        </div>
      </li>
    </ul>
 *
 * #### js
 * ```javascript
 * mtui.accordion("#Accordion")
 */

function accordion(selector) {
  const $collapse__title = $(selector).find('.mtui-collapse__title');
  $collapse__title.forEach((ele)=>{
    $(ele).on('click',function(){
      var li = this.parentNode;
      if(li.className.indexOf('mtui-collapse__active')===-1){
        $(li.parentNode).find('.mtui-collapse').removeClass('mtui-collapse__active')
        $(li).addClass('mtui-collapse__active');
      }else{
        $(li).removeClass('mtui-collapse__active');
      }
    });
  })
}

export default accordion;
