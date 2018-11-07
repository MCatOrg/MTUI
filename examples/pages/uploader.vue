<template>
  <div>
    <h2>图片上传</h2>
    <mt-uploader
    serverUrl="/ServiceAPI/usercenter/Manager.aspx"
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
    :setWatermark="false"
    :waterMarkConfig="waterMarkConfig"
    :clientType="0"
    :IsWeixinClientRequest="true"
    :IsUseWeiXinSDKUpdatePic="true"
    ></mt-uploader>
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
    onError(error) {
      console.log(error);
    },
    deleteEvent(index) {
      console.log(index);
    },
    onChange(index) {
      console.log(index);
    },
  },
};
</script>

