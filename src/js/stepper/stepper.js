import $ from '../util/util';
import chart from './stepper.html';
import toast from '../toast/toast';

function stepper(selector='body'){

    var $aSteppers = $(selector).find('.mtui-stepper')
        ;

    //获取所有mt-自定义属性
    function getMt(){
        let mtAttr = [],            //存储每个stepper的自定义属性
            mtAttrName,             //存储mt-自定义属性，用于删除mt-自定义属性
            mtValue,                //{}对象，存储mt-自定义属性的值
            key                     //存储自定义属性名
            ;
        for(let i of $aSteppers){                   //循环所有stepper
            mtValue = {};
            mtAttrName = [];
            for(let j of i.attributes){             //循环stepper里面attributes寻找所有的mt-xxx自定义属性
                key = j.nodeName;
                if(key.indexOf('mt-') > -1){
                    mtAttrName.push(key);
                    mtValue[key.slice(3)] = j.nodeValue         //保存所有mt-自定义属性
                }
            }
            $(i).removeAttr(mtAttrName)             //删除mt-自定义属性
            mtAttr.push(mtValue)
        }
        console.log("mtAttr",mtAttr)
        return mtAttr;
    }

    //渲染加减器
    function makeStepper(mtAttr){
        let tplOption,
            $tpl,
            $reduce,
            $add,
            $input,
            min,            //最低
            max,            //最高
            interval       //增加减少的区间
            ;
        function reduce(e){
            let $input = $(e.target.nextElementSibling),
                quantity = Number($input.val())
                ;
            if(quantity > this.mtmin){
                $input.val(quantity - this.mtinterval)
                if(quantity <= this.mtmin+this.mtinterval){
                    $(this).addClass('disable')
                }
            }
        }
        function add(e){
            let input = e.target.previousElementSibling,
                quantity = Number($(input).val()),
                addQuantity = quantity + this.mtinterval
                ;
            if(this.mtmax){                  //设置最大值
                if(addQuantity > this.mtmax){
                    toast('数量已达到库存量了',2000)
                }else{
                    $(input).val(addQuantity)
                }
            }else{                      //不限制最大值
                $(input).val(addQuantity)
            }
            if(addQuantity >= this.mtmin){
                $(input.previousElementSibling).removeClass('disable')
            }
        }
        function input(e){
            let quantity = $(this).val();
            if(quantity == ''){
                this.onblur = function(){
                    $(this).val(this.mtmin);
                    $(this.previousElementSibling).addClass('disable')
                    this.onblur = null;
                }
            }else if(quantity < this.mtmin){
                this.onblur = null;
                toast('数量不能少于'+this.mtmin,2000);
                $(this).val(this.mtmin)
                $(this.previousElementSibling).addClass('disable')
            }else if(quantity == this.mtmin){
                $(this.previousElementSibling).addClass('disable')
            }else{              //增加的
                this.onblur = null;
                if(this.mtmax){
                    if(quantity > this.mtmax) {
                        toast('数量已达到库存量了',2000);
                        $(this).val(this.mtmax)
                    }
                }
                $(this.previousElementSibling).removeClass('disable')
            }
        }
        for(let i=0; i<$aSteppers.length; i++){
            interval = Number(mtAttr[i].interval) || 1;
            max = Number(mtAttr[i].max) || false;
            min = Number(mtAttr[i].min) || interval;
            tplOption = {
                value: mtAttr[i].value || 1
            }
            
            $tpl = $($.render(chart, tplOption));

            $reduce = $tpl.find('.mtui-stepper_reduce'),
            $add = $tpl.find('.mtui-stepper_add'),
            $input = $tpl.find('.mtui-stepper_input');
            
            //初始化时如果input的数量等于最小数量，减功能键将变灰
            if($input.val() <= min) $reduce.addClass('disable')

            //将min，max，interval加入$reduce和$add
            $reduce[0].mtmin = min;
            $reduce[0].mtmax = max;
            $reduce[0].mtinterval = interval;
            $add[0].mtmin = min;
            $add[0].mtmax = max;
            $add[0].mtinterval = interval;
            $input[0].mtmin = min;
            $input[0].mtmax = max;
            $input[0].mtinterval = interval;

            $reduce.on('click',reduce)
            $add.on('click',add)
            $input.on('input',input)

            $($aSteppers[i]).append($tpl);

        }
    }

    //触发渲染操作
    makeStepper(getMt())
    
    console.log($aSteppers)
    
}

export default stepper;