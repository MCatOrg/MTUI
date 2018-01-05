<template>
  <div id="actionSheet-view">
    <h2 class="lTitle">ActionSheet</h2>
    <button id="showActionSheet" class="mtui-btn mtui-btn__default">ActionSheet</button>
  </div>
</template>
<style>
body {
  background-color: #fff;
}
</style>
<script>
import mtui from "../../js/mtui";
// *  主动关闭
// * var $actionSheet = mtui.actionSheet({...});
// * $actionSheet.hide(function(){
// *      console.log('`actionSheet` has been hidden');
// * });
export default {
  mounted() {
    document
      .getElementById("showActionSheet")
      .addEventListener("click", function() {
        var $actionSheet = mtui.actionSheet(
          "这是一个标题",      //弹出菜单的title，默认无
          [                    //弹出菜单的各个选项，数组
            {
              label: "拍照",
              onClick: function() {
                console.log("拍照");
              }
            },
            {
              label: "从相册选择",
              onClick: function() {
                console.log("从相册选择");
              }
            },
            {
              label: "其他",
              onClick: function() {
                console.log("其他");
              }
            }
          ],
          [                     //弹出菜单的底下操作按钮，数组
            {
              label: "取消",             //选择此项时的回调函数，同时会触发关闭的默认回调函数
              onClick: function() {
                console.log("取消");
              }
            }
          ],
          {                                 //弹出菜单的其它配置项
            className: "Actionsheet-box",     //容器的class名
            onClose: function() {           //关闭时的默认回调函数
              console.log("关闭");
            }
          }
        );
        setTimeout(function(){
          $actionSheet.hide(function(){
            console.log('主动关闭')
          })
        },2000)
      });
  }
};
</script>

