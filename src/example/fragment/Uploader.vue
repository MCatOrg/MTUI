<template>
  <div id="slider-view">
    <h2 class="lTitle">Uploader（上传组件，一般配合组件Gallery来使用。）</h2>
          <div class="mtui-uploader">
              <ul class="mtui-uploader__files">
                <li class="mtui-uploader__file" style="background-image:url(./src/example/images/logo.png)"></li>
                <li class="mtui-uploader__file" style="background-image:url(./src/example/images/logo.png)"></li>
                <li class="mtui-uploader__file" style="background-image:url(./src/example/images/logo.png)"></li>
                <li class="mtui-uploader__input-box">
                  <input class="mtui-uploader__input" type='file' accept="image/*" multiple/>
                </li>
              </ul>

              <div class="mtui-gallery">
                <span class="mtui-gallery__img" style=""></span>
                <div class="mtui-gallery__opr">
                  <a class="mtui-gallery__del">
                    <i class="">删除</i>
                  </a>
                </div>
              </div>
          </div>
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
    var tmpl =
        '<li class="mtui-uploader__file" style="background-image:url(#url#)"></li>',
      $gallery = $(".mtui-gallery"),
      $galleryImg = $(".mtui-gallery__img"),
      $uploaderInput = $(".mtui-uploader__input"),
      $uploaderFiles = $(".mtui-uploader__files");

    $uploaderInput.on("change", function(e) {
      var src,
        url = window.URL || window.webkitURL || window.mozURL,
        files = e.target.files;
      for (var i = 0, len = files.length; i < len; ++i) {
        var file = files[i];

        if (url) {
          src = url.createObjectURL(file);
        } else {
          src = e.target.result;
        }

        $('.mtui-uploader__input-box').before($(tmpl.replace("#url#", src)));
        console.log($(tmpl.replace("#url#", src)))
        // $uploaderFiles.append($(tmpl.replace("#url#", src)));
      }
    });
    $uploaderFiles.on("click", ".mtui-uploader__file", function() {
      $galleryImg.attr("style", this.getAttribute("style"));
      $gallery.show(100);
    });
    $gallery.on("click", function() {
      $gallery.hide(100);
    });
  }
};
</script>

