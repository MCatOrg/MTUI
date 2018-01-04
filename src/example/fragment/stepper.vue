<style lang="less" scoped>
.mtui-stepper{display: inline-block;
    .mtui-stepper_reduce, .mtui-stepper_add, .mtui-stepper_input{float: left; height: .5rem; border: 1px solid #E5E5E5; line-height: .5rem; text-align: center; background-color: white;}

    .mtui-stepper_reduce, .mtui-stepper_add{width: .6rem; font-size: .4rem;}
    .mtui-stepper_reduce{margin-right: 4px;
        &.disable{color: #E6E6E6;}
    }
    .mtui-stepper_add{margin-left: 4px;}
    .mtui-stepper_reduce:before{content: "-";}
    .mtui-stepper_add:before{content: "+";}
    .mtui-stepper_input{width: 1rem; vertical-align: top; line-height: .5rem;}

    //disable
    &.disable{
        .mtui-stepper_reduce, .mtui-stepper_add, .mtui-stepper_input{background-color: #FAFAFB; border: none;}
        .mtui-stepper_reduce{color: #E6E6E6;}
    }
}
</style>
<template>
    <div class="container">
        <mt-header :data="headerData"></mt-header>
        <main class="mt-body">
            <div class="group">
                <div class="group-header">展示</div>
                <div class="group-body">
                    <div class="mtui-stepper">
                        <span class="mtui-stepper_reduce disable"></span>
                        <input id="input" q-value="value" type="number" class="mtui-stepper_input" >
                        <span class="mtui-stepper_add"></span>
                    </div>
                    <div class="mtui-stepper disable">
                        <span class="mtui-stepper_reduce disable"></span>
                        <input id="input2" q-value="value2" type="number" class="mtui-stepper_input" >
                        <span class="mtui-stepper_add"></span>
                    </div>
                </div>
            </div>
            <div class="group">
                <div class="group-header">双向数据绑定</div>
                <div class="group-body">
                    <div>
                        <span>1: </span>
                        <span id="el" q-text="value"></span>
                    </div>
                    <div>
                        <span>2: </span>
                        <span id="el2" q-text="value2"></span>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import mtHeader from '../component/header'
export default {
    components: {
        mtHeader,
    },
    data(){
        return {
            headerData:{
                title: 'Stepper',
                info: '数量加减'
            }
        }
    },
    mounted(){
        var elems = [document.getElementById('el'), document.getElementById('input'), document.getElementById('el2'), document.getElementById('input2')];

        var data = {
            value: 1,
            value2: 2
        };

        var command = {
            text: function(str) {
                this.innerHTML = str;
            },
            value: function(str) {
                this.setAttribute('value', str);
            }
        };

        var scan = function() {
            /**
             * 扫描带指令的节点属性
             */
            for (var i = 0, len = elems.length; i < len; i++) {
                var elem = elems[i];
                elem.command = [];
                for (var j = 0, len1 = elem.attributes.length; j < len1; j++) {
                    var attr = elem.attributes[j];
                    if (attr.nodeName.indexOf('q-') >= 0) {
                        /**
                         * 调用属性指令
                         */
                        command[attr.nodeName.slice(2)].call(elem, data[attr.nodeValue]);
                        elem.command.push(attr.nodeName.slice(2));

                    }
                }
            }
        }

        var bValue;
        /**
         * 定义属性设置劫持
         */
        var defineGetAndSet = function(obj, propName) {
            try {
                Object.defineProperty(obj, propName, {

                    get: function() {
                        return bValue;
                    },
                    set: function(newValue) {
                        bValue = newValue;
                        scan();
                    },

                    enumerable: true,
                    configurable: true
                });
            } catch (error) {
                console.log("browser not supported.");
            }
        }
        /**
         * 初始化数据
         */
        scan();

        /**
         * 可以理解为做数据劫持监听
         */
        defineGetAndSet(data, 'value');
        defineGetAndSet(data, 'value2');

        /**
         * 数据绑定监听
         */
        if(document.addEventListener){
            elems[1].addEventListener('keyup', function(e) {
                data.value = e.target.value;
            }, false);
            elems[3].addEventListener('keyup', function(e) {
                data.value = e.target.value;
            }, false);
        }else{
            elems[1].attachEvent('onkeyup', function(e) {
                data.value = e.target.value;
            }, false);
            elems[3].attachEvent('onkeyup', function(e) {
                data.value = e.target.value;
            }, false);
        }

        // setTimeout(function() {
        //     data.value = 'fuck';
        // }, 2000)
    }
}
</script>
