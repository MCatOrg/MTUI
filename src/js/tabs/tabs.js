import $ from '../util/util';
import tabsDefault from './tabsDefault.html';
import tabsOverflow from './tabsOverflow.html';


/*
    options = {
        el: '#box',         //tabs容器，必须
        active: 0,          //初始是否选中，以list的索引为参考，默认0
        color: 'red',       //样式类名、样式值
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
        colorClass = /^\./.test(options.color) ? options.color.replace('.','') : 'active',
        colorValue = /^(#|rgb|rgba)/.test(options.color) ? options.color : false,
        listLen = tabList.length,
        active = options.active ? options.active > listLen - 1 ? listLen - 1 : options.active : 0,
        inputID = listLen > 5 ? options.el.replace('.','') + Math.floor(Math.random() * 100) : false,
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
            tabList: tabList,
            colorClass: colorClass,
            colorValue: colorValue,
        };
    }

    
    let $tabs = $($.render(chart, setTplOption(checkActive()))),
        $tab = $tabs.find('.mtui-tab')
        ;

    let $inputID = null;
    let $mtuiTabBox = null;

    if(inputID){
        var $line = $tabs.find('.mtui-tab_line');
        $inputID = $tabs.find('#'+inputID);
        $mtuiTabBox = $tabs.find('.mtui-tabs_list');
        $tabs.find('.mtui-tab_box').css({'width' : listLen * 1.5 + 'rem'});
        $line.css({'left': active * 1.5 + 0.15 + 'rem'})
    }

    $tab.on('click',function(){
        $tab.removeClass(colorClass);
        $(this).addClass(colorClass);
        let box = $mtuiTabBox[0];
        if($inputID){
            console.log(123456)
            $inputID[0].checked = false
            let width = document.documentElement.getBoundingClientRect().width;
            width>750 && (width=750);
            let rem = width * 100 / 750;

            let endLeft = (($(this).index() - 2) * rem * 1.5) > 0 ? (($(this).index() - 2) * rem * 1.5) : 0;
            let startLeft = (box.scrollLeft);
            let distance = endLeft - startLeft;

            let scrollWidth = box.scrollWidth;
            let offsetWidth = box.offsetWidth;
            //activeIndex * 1.5
            if(distance < 0){
                let timer = setInterval(()=>{
                    if(box.scrollLeft <= endLeft){
                    clearInterval(timer)
                    }else{
                    box.scrollLeft = box.scrollLeft -2;
                    }
                },(3000 / Math.abs(distance)) / 6)
            }else{
                let timer = setInterval(()=>{
                    if(box.scrollLeft >= endLeft || ((scrollWidth - box.scrollLeft) == offsetWidth)){
                    clearInterval(timer)
                    }else{
                    box.scrollLeft = box.scrollLeft + 2;
                    }
                },(3000 / Math.abs(distance)) / 10)
            }
        }
        
        // console.dir("123",$inputID)
        if($line){
            $line.css({'left' : $(this).index() * 1.5 + 0.15 + 'rem'});
        }
        if(options.onclick) options.onclick(tabList[$(this).index()])
    })

    $container.append($tabs);

    return this;
    
}

export default tabs;