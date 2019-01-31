<template>
  <div id="uploaderPage">
    <h2>图片上传</h2>
    <mt-uploader
    id="uploader1"
    ref="uploader1"
    serverUrl="http://localhost:3011/upData"
    :canChangeImg="true"
    :canDeteleImg="true"
    :postOptions="{action:'base64stringtoimage'}"
    :prefix="`fileData`"
    :isOpenMultiple="true"
    :maxCount="10"
    :maxSize="1024*1024*10"
    :afterWidth="1000"
    :IsBase64StringToImage="true"
    :ImageUpdateTimeout="70000"
    :quality="0.6"
    :ImgDirectory="undefined"
    ImageServer=""
    :IsImageServer="false"
    :onError="onError"
    :onSuccess="success"
    :onDelete="deleteEvent"
    :onUploadListChange="onChange"
    :defaultFileList="defaultFileList"
    :beforeChange="beforeChange"
    :waterMarkConfig="waterMarkConfig"
    :clientType="1"
    :IsWeixinClientRequest="false"
    :IsUseWeiXinSDKUpdatePic="false"
    >
      <img src="../assets/upload.png" alt="">
    </mt-uploader>
    <mt-uploader
    ref="uploader2"
    serverUrl="/ServiceAPI/usercenter/Manager.aspx"
    :postOptions="{action:'base64stringtoimage'}"
    :canChangeImg="true"
    :canDeteleImg="true"
    :prefix="`fileData`"
    :maxCount="10"
    :isOpenMultiple="true"
    :maxSize="1024*1024*10"
    :afterWidth="1000"
    :IsBase64StringToImage="true"
    :ImageUpdateTimeout="70000"
    :quality="0.6"
    ImageServer=""
    :IsImageServer="false"
    :onError="onError"
    :onSuccess="success"
    :onDelete="deleteEvent"
    :onUploadListChange="onChange"
    :defaultFileList="defaultFileList"
    :waterMarkConfig="waterMarkConfig"
    :clientType="2"
    :IsWeixinClientRequest="true"
    :IsUseWeiXinSDKUpdatePic="true"
    ></mt-uploader>
    <mt-uploader
    ref="uploader3"
    serverUrl="/ServiceAPI/usercenter/Manager.aspx"
    :postOptions="{action:'base64stringtoimage'}"
    :canChangeImg="false"
    :canDeteleImg="false"
    :prefix="`fileData`"
    :maxCount="5"
    :maxSize="1024*1024*10"
    :afterWidth="1000"
    :IsBase64StringToImage="true"
    :ImageUpdateTimeout="70000"
    :quality="0.6"
    :ImgDirectory="undefined"
    ImageServer=""
    :IsImageServer="false"
    :onError="onError"
    :onSuccess="success"
    :onDelete="deleteEvent"
    :onUploadListChange="onChange"
    :defaultFileList="defaultFileList"
    :waterMarkConfig="waterMarkConfig2"
    :clientType="3"
    :IsWeixinClientRequest="false"
    :IsUseWeiXinSDKUpdatePic="false"
    ></mt-uploader>
    <mt-button @click="clearImgList" type="warn">清空图片上传队列</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      defaultFileList: [
        // {
        //   url: 'http://192.168.3.222:8024/Upload/test/20180529/201805291858323395522.jpg',
        //   name: 'fileData0',
        // },
      ],
      waterMarkConfig2:{
        watermarkType:"img",
        watermark:require("../assets/watermark.png"),
        multiple: 0.5,//图片缩小的倍数
        isRepeat:true,//是否重复，如果为true 属性position则无效
        marginX:170,//当isRepeat为true的时候生效，水印之间的水平间隙，单位像素
        marginY:250,//当isRepeat为true的时候生效，水印之间的垂直间隙，单位像素
        position: 9, // 矩形九宫格位置排序 1 2 3 4 5 6 7 8 9 默认 9
        rotate:45//水印旋转的角度 -90~90度 默认为0，超过这个范围则取0
      },
      waterMarkConfig: {
        watermark: '猫态科技技术',
        watermarkType: 'str', // 水印的类型，图片img 或者 文字str
        fontSize: 40,//字体大小，单位像素
        strColor: 'rgba(102, 102, 102, 0.3)', // 当水印为文字是，可设置字体颜色 ，默认 rgba(102, 102, 102, 0.3)
        position: 9, // 矩形九宫格位置排序 1 2 3 4 5 6 7 8 9 默认 9
        isRepeat:false,//是否重复，如果为true 属性position则无效
        marginX:180,//当isRepeat为true的时候生效，水印之间的水平间隙，单位像素
        marginY:100,//当isRepeat为true的时候生效，水印之间的垂直间隙，单位像素
        rotate:0//水印旋转的角度 -90~90度 默认为0，超过这个范围则取0
      },
    };
  },
  mounted() {
  },
  methods: {
    success(res) {
      console.log('res', res);
    },
    onError(error) {
      console.log(error);
    },
    deleteEvent(index) {
      console.log(index);
    },
    onChange(index) {
      console.log(index);
    },
    clearImgList(){//清空上传列表
      this.$refs.uploader.resetImgList();
    },
    beforeChange(){
      console.log('执行');
      return true;
    }
  },
};
</script>
<style lang="less" scoped>
#uploader1{
  /deep/.mtui-uploader{
    align-items: center;
    justify-content: center;
  }
  /deep/.mtui-uploader__input-box,/deep/.mtui-uploader__file{
    width: 1.5rem;
    height: 1.5rem;
    img{
      display: block;
      width: 80%;
      position: absolute;
      margin: auto;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
    &::before{
      display: none;
    }
    &::after{
      display: none;
    }
  }
}
</style>


