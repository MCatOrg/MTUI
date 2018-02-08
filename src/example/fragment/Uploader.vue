<template>
  <div id="slider-view">
    <h2 class="lTitle">Uploader（上传组件，一般配合组件Gallery来使用。）</h2>
          <div class="mtui-cells__title">自动上传</div>
          <div class="mtui-uploader" id="uploader1">
              <ul class="mtui-uploader__files" id="uploaderCustomFiles1">
                <li class="mtui-uploader__input-box">
                  <input class="mtui-uploader__input" type='file' accept="image/*" multiple/>
                </li>
              </ul>
          </div>


          <div class="mtui-cells__title">手动上传</div>
          <div class="mtui-uploader" id="uploader2">
              <ul class="mtui-uploader__files" id="uploaderCustomFiles2">
                <li class="mtui-uploader__input-box">
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
    // mtui.uploader("#uploader1", {
    //   url: "http://" + location.hostname + "/upload/index.php",
    //   auto: true, //是否自动上传，默认false
    //   type: "file",
    //   fileVal: "fileVal",
    //   compress: {
    //     //false 则为不压缩图片
    //     width: 1600,
    //     height: 1600,
    //     quality: 0.8
    //   },
    //   onBeforeQueued: function(files) {
    //     // `this` 是轮询到的文件, `files` 是所有文件
    //     if (
    //       ["image/jpg", "image/jpeg", "image/png", "image/gif"].indexOf(
    //         this.type
    //       ) < 0
    //     ) {
    //       mtui.toast("请上传图片");
    //       return false; // 阻止文件添加
    //     }
    //     if (this.size > 10 * 1024 * 1024) {
    //       mtui.toast("请上传不超过10M的图片");
    //       return false;
    //     }
    //     if (files.length > 5) {
    //       // 防止一下子选择过多文件
    //       mtui.toast("最多只能上传5张图片，请重新选择");
    //       return false;
    //     }
    //     if (uploadCount + 1 > 5) {
    //       mtui.toast("最多只能上传5张图片");
    //       return false;
    //     }

    //     ++uploadCount;

    //     // return true; // 阻止默认行为，不插入预览图的框架
    //   },
    //   onQueued: function() {
    //     console.log(this);
    //     // console.log(this.status); // 文件的状态：'ready', 'progress', 'success', 'fail'
    //     // console.log(this.base64); // 如果是base64上传，file.base64可以获得文件的base64

    //     // this.upload(); // 如果是手动上传，这里可以通过调用upload来实现；也可以用它来实现重传。
    //     // this.stop(); // 中断上传

    //     // return true; // 阻止默认行为，不显示预览图的图像
    //   },
    //   onBeforeSend: function(data, headers) {
    //     console.log(this, data, headers);
    //     // $.extend(data, { test: 1 }); // 可以扩展此对象来控制上传参数
    //     // $.extend(headers, { Origin: 'http://127.0.0.1' }); // 可以扩展此对象来控制上传头部

    //     // return false; // 阻止文件上传
    //   },
    //   onProgress: function(procent) {
    //     console.log(this, procent);
    //     // return true; // 阻止默认行为，不使用默认的进度显示
    //   },
    //   onSuccess: function(ret) {
    //     console.log(this, ret);
    //     // return true; // 阻止默认行为，不使用默认的成功态
    //   },
    //   onError: function(err) {
    //     console.error('报错',this, err);
    //     // return true; // 阻止默认行为，不使用默认的失败态
    //   }
    // });
    mtui.uploader({
      serverUrl: "http://192.168.3.71:8066/ServiceAPI/usercenter/Manager.aspx", //上传图片的URL（必选）
      inputBoxClass: "mtui-uploader__input-box", //input:file的父元素的class（必选）
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
      }, //已开启的微信API列表
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

    $("#uploaderCustomFiles1").click(function(e) {
      var target = e.target;
      if (target.tagName === "INPUT") return;
      while (!target.classList.contains("mtui-uploader__file") && target) {
        target = target.parentNode;
      }
      if (!target) return;
      var url = target.getAttribute("style") || "";
      var id = target.getAttribute("data-id");

      if (url) {
        url = url.match(/url\((.*?)\)/)[1].replace(/"/g, "");
      }
      var gallery = mtui.gallery(url, {
        onDelete: function() {
          mtui.confirm("确定删除该图片？", function() {
            console.log("删除");
            target.remove();
            gallery.hide();
          });
        }
      });
    });

    // 手动上传
    var uploadCustomFileList = [];

    // mtui.uploader("#uploader2", {
    //   url: "http://" + location.hostname + "/upload/index.php",
    //   auto: false, //是否自动上传，默认false
    //   type: "file",
    //   fileVal: "fileVal",
    //   compress: {
    //     //false 则为不压缩图片
    //     width: 1600,
    //     height: 1600,
    //     quality: 0.8
    //   },
    //   onQueued: function() {
    //     console.log("onQueued", this);
    //     uploadCustomFileList.push(this);
    //   }
    // });
    $("#uploaderCustomBtn").click(function() {
      uploadCustomFileList.forEach(function(file) {
        console.log(file);
        file.upload();
      });
    });
  }
};
</script>

