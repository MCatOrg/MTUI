import $ from '../util/util';
import tabsDefault from './tabsDefault.html';
import tabsOverflow from './tabsOverflow.html';


/*
    options = {
        el: '#box',         //tabs容器，必须
        active: 0,          //初始是否选中，以list的索引为参考，默认0
        list: [
            {
                text: '选项1',    //tabs选项的文字
                value: '1',       //tabs选项点击返回的值, 默认选项的index
            }
        ]
    }
*/

function tabs(options){
    var $container = $(options.el || 'body'),
        tabList = options.list,
        listLen = tabList.length,
        active = options.active ? options.active > listLen - 1 ? listLen - 1 : options.active : 0,
        inputID = listLen > 5 ? options.el + Math.random() * 100 : false,
        chart = inputID ? tabsOverflow : tabsDefault
        ;
    
    function checkActive(){
        for(let i=0; i<listLen; i++){
            tabList[i].value = tabList[i].value || i.toString();
        }
        return tabList;
    }
    
    function setTplOption(tabList){
        return {
            inputID: inputID,
            active: active,
            tabList: tabList
        };
    }
    
    let $tabs = $($.render(chart, setTplOption(checkActive()))),
        $tab = $tabs.find('.mtui-tab')
        ;

    if(inputID){
        var $line = $tabs.find('.mtui-tab_line')
        $tabs.find('.mtui-tab_box').css({'width' : listLen * 1.5 + 'rem'});
        $line.css({'left': active * 1.5 + 0.15 + 'rem'})
    }

    $tab.on('click',function(){
        $tab.removeClass('active');
        $(this).addClass('active');
        if($line){
            $line.css({'left' : $(this).index() * 1.5 + 0.15 + 'rem'});
        }
        if(options.onclick) options.onclick(tabList[$(this).index()])
    })

    $container.append($tabs);

    return this;
    
}

export default tabs;