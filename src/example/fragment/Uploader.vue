<template>
  <div id="slider-view">
    <h2 class="lTitle">Uploader（上传组件，一般配合组件Gallery来使用。）</h2>
          <div class="mtui-cells__title">方式一（'1':单个上传按钮，任意上传图片）</div>
          <div class="mtui-uploader" id="uploader1">
              <ul class="mtui-uploader__files" id="uploaderCustomFiles1">
                <li class="mtui-uploader__input-box module1" >
                  <input class="mtui-uploader__input" type='file' accept="image/*" multiple/>
                </li>
              </ul>
          </div>


          <div class="mtui-cells__title">方式二（多个上传按钮，固定input:hidden的name属性，为 2 时，fileName为必选）</div>
          <div class="mtui-uploader" id="uploader2">
              <ul class="mtui-uploader__files" id="uploaderCustomFiles2">
                <li class="mtui-uploader__input-box module2">
                  <input class="mtui-uploader__input" type='file' accept="image/*" multiple/>
                </li>
                <li class="mtui-uploader__input-box module2">
                  <input class="mtui-uploader__input" type='file' accept="image/*" multiple/>
                </li>
                <li class="mtui-uploader__input-box module2">
                  <input class="mtui-uploader__input" type='file' accept="image/*" multiple/>
                </li>
              </ul>
          </div>
          <button class="mtui-btn mtui-btn__primary" id="uploaderCustomBtn">上传图片</button>
  </div>
</template>
<style scoped>
body {
  background-color: #fff;
}
</style>
<script>
import $ from "webpack-zepto";
import mtui from "../../js/mtui";
export default {
  mounted() {
    var uploadCount = 0;
    mtui.uploader({
      serverUrl: "http://127.0.0.1:3000/upload", //上传图片的URL（必选）
      // serverUrl: "http://192.168.3.71:8066/ServiceAPI/usercenter/Manager.aspx", //上传图片的URL（必选）
      inputBoxClass: "module1", //input:file的父元素的class（必选）
      viewClass: "mtui-uploader__file", // 预览图片元素的class （必选）
      viewChildClass: "mtui-uploader__file-content", // 预览图片元素的子元素的class,（必选）
      prefix: "fileData", // input:hidden的name属性的前缀。String，默认'fileData'
      model: 1, //选择上传的方式，默认为1，可选值为（'1':单个上传按钮，任意上传图片; '2':多个上传按钮，固定input:hidden的name属性，为 2 时，fileName为必选）
      viewClickEvent: "enlarge", // 点击预览窗口时，呈现的效果，默认为 enlarge （放大），可选值为：enlarge（放大），del（删除），revise（修改）,
      maxCount: 3, // 上传图片的最大数量，默认为5张
      afterWidth: 1000, //压缩换算后的图片的宽度,默认1000
      IsWeixinClientRequest: false, //是否微信客户端发出的请求，默认false
      IsUseWeiXinSDKUpdatePic: false, //是否使用微信的API上传图片，默认false
      checkResult: {
        getLocalImgData: true
      }, //已开启的微信API列表，调用微信api时必填
      IsBase64StringToImage: true, //是否把图片转换成Base64然后上传到服务端，默认true
      ImageUpdateTimeout: 60000, //ajax上传超时时间，默认60秒
      quality: 0.8, //图片压缩率，默认0.8
      ImgDirectory: undefined, //上传至服务器的文件夹名，默认为当前页面的文件名
      ImageServer: "", //图片服务器的域名，默认为空
      IsImageServer: false, //是否上传至其它域名保存，默认为false
      callback: function(data) {
        console.log(data);
      } //默认的回调函数，默认为一个空的匿名函数，
    });

    // 方式二

    var uploadCustomFileList = [];
    mtui.uploader({
      serverUrl: "http://192.168.3.71:8066/ServiceAPI/usercenter/Manager.aspx", //上传图片的URL（必选）
      inputBoxClass: "module2", //input:file的父元素的class（必选）
      viewClass: "mtui-uploader__file", // 预览图片元素的class （必选）
      viewChildClass: "mtui-uploader__file-content", // 预览图片元素的子元素的class,（必选）
      model: 2, //选择上传的方式，默认为1，可选值为（'1':单个上传按钮，任意上传图片; '2':多个上传按钮，固定input:hidden的name属性，为 2 时，fileName为必选）
      fileName: ["portrait", "face", "back"], //input:hidden 的name属性
      viewClickEvent: "enlarge"
    });
    $("#uploaderCustomBtn").click(function() {
      uploadCustomFileList.forEach(function(file) {
        console.log(file);
        file.upload();
      });
    });
  }
};
</script>

