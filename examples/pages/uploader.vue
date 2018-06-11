<template>
  <div>
    <h2>图片上传</h2>
    <mt-uploader
    serverUrl="http://192.168.3.71:8058/ServiceAPI/usercenter/Manager.aspx"
    viewClickEvent="enlarge"
    :prefix="`fileData`"
    :maxCount="5"
    :afterWidth="1000"
    :IsWeixinClientRequest="false"
    :IsUseWeiXinSDKUpdatePic="false"
    :checkResult="checkResult"
    :IsBase64StringToImage="false"
    :ImageUpdateTimeout="70000"
    :quality="0.8"
    :ImgDirectory="undefined"
    ImageServer=""
    :IsImageServer="false"
    :onError="onError"
    :onSuccess="success"
    :beforeUpload="beforeUpload"
    :defaultFileList="defaultFileList"
    :setWatermark="false"
    :waterMarkConfig="waterMarkConfig"
    ></mt-uploader>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkResult: {
        getLocalImgData: true,
      },
      defaultFileList: [
        {
          url: 'http://192.168.3.222:8024/Upload/test/20180529/201805291858323395522.jpg',
          name: 'fileData0',
        },
      ],
      waterMarkConfig: {
        watermark: '猫态科技',
      },
    };
  },
  mounted() {
  },
  methods: {
    success(res) {
      console.log('res', res);
    },
    beforeUpload(data) {
      console.log(data);
    },
    onError(error) {
      console.log(error);
    },
  },
};
</script>

