<template>
  <div id="slider-view">
    <h2 class="lTitle">Uploader（上传组件，一般配合组件Gallery来使用。）</h2>
          <div class="mtui-uploader" id="uploader">
              <ul class="mtui-uploader__files" id="uploaderCustomFiles">
                <li class="mtui-uploader__input-box">
                  <input class="mtui-uploader__input" type='file' accept="image/*" multiple/>
                </li>
              </ul>
          </div>
          <button class="mtui-btn mtui-btn__primary">上传图片</button>
  </div>
</template>
<style>
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
    var uploadCustomFileList = [];
    mtui.uploader("#uploader", {
      url: "http://" + location.hostname + ":9000",
      auto: false, //是否自动上传，默认false
      type: "file",
      fileVal: "fileVal",
      compress: {
        //false 则为不压缩图片
        width: 1600,
        height: 1600,
        quality: 0.8
      },
      // onBeforeQueued: function(files) {
      //   // `this` 是轮询到的文件, `files` 是所有文件
      //   if (
      //     ["image/jpg", "image/jpeg", "image/png", "image/gif"].indexOf(
      //       this.type
      //     ) < 0
      //   ) {
      //     mtui.toast("请上传图片");
      //     return false; // 阻止文件添加
      //   }
      //   if (this.size > 10 * 1024 * 1024) {
      //     mtui.toast("请上传不超过10M的图片");
      //     return false;
      //   }
      //   if (files.length > 5) {
      //     // 防止一下子选择过多文件
      //     mtui.toast("最多只能上传5张图片，请重新选择");
      //     return false;
      //   }
      //   if (uploadCount + 1 > 5) {
      //     mtui.toast("最多只能上传5张图片");
      //     return false;
      //   }

      //   ++uploadCount;

      //   // return true; // 阻止默认行为，不插入预览图的框架
      // },
      onQueued: function() {
        console.log(this);
        uploadCustomFileList.push(this);
        // console.log(this.status); // 文件的状态：'ready', 'progress', 'success', 'fail'
        // console.log(this.base64); // 如果是base64上传，file.base64可以获得文件的base64

        // this.upload(); // 如果是手动上传，这里可以通过调用upload来实现；也可以用它来实现重传。
        // this.stop(); // 中断上传

        // return true; // 阻止默认行为，不显示预览图的图像
      },
      // onBeforeSend: function(data, headers) {
      //   console.log(this, data, headers);
      //   // $.extend(data, { test: 1 }); // 可以扩展此对象来控制上传参数
      //   // $.extend(headers, { Origin: 'http://127.0.0.1' }); // 可以扩展此对象来控制上传头部

      //   // return false; // 阻止文件上传
      // },
      // onProgress: function(procent) {
      //   console.log(this, procent);
      //   // return true; // 阻止默认行为，不使用默认的进度显示
      // },
      // onSuccess: function(ret) {
      //   console.log(this, ret);
      //   // return true; // 阻止默认行为，不使用默认的成功态
      // },
      // onError: function(err) {
      //   console.log(this, err);
      //   // return true; // 阻止默认行为，不使用默认的失败态
      // }
    });
    $("#uploaderCustomFiles").click(function(e) {
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
    // 点击上传
    $("#uploaderCustomBtn").click(function() {
      uploadCustomFileList.forEach(function(file) {
        file.upload();
      });
    });
  }
};
</script>

