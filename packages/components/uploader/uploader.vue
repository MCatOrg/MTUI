<template>
  <div class="mtui-uploader" :id="ID">
    <ul class="mtui-uploader__files">
        <li v-for="(img,i) in uploadList" :key="i"
        class="mtui-uploader__file"
        :style="{'background-image':`url(${img.url})`}"
        @click="showBigImgEvent(img,i)"
        >
          <input type="hidden"
          :name="img.name"
          :value="img.url | removeOrigin"
          class="mtui-uploader__file-content" v-if="IsBase64StringToImage">
        </li>
        <li class="mtui-uploader__file"
        :style="{'background-image':`url(${loadingSrc})`,'background-size': 'contain','background-repeat':'no-repeat'}" v-show="isShowLoading"></li>
      <li ref="mtuiUploaderInputBox" class="mtui-uploader__input-box" v-show="isShowUploaderBox">
        <!-- 用于改变上传组件的初始样式 -->
        <slot></slot>
        <span class="mtui-uploader__input"  v-if="!forceCloseWx&&useWx" @click="wxCompress"></span>
        <input class="mtui-uploader__input"
        @change="localChangeEvent"
        :multiple="isOpenMultiple"
        type='file' accept="image/*" v-else ref="uploader__input"/>
      </li>
    </ul>
    <!-- 大图 -->
    <mt-big-picture
    :imgSrc="bigImgSrc"
    v-model="showBigImg"/>
    <div class="mtui-img-handle" v-show="showBigImg">
      <div @click="deleteImg" v-if="canDeteleImg">
        <img src="./images/delete_img_icon.png" alt="">
        <span>删除图片</span>
      </div>
      <div @click="changeImg" v-if="canChangeImg">
        <img src="./images/change_img_icon.png" alt="">
        <span>更换图片</span>
      </div>
    </div>
  </div>
</template>
<script>
import JPEGEncoder from './Plug/jpeg_encoder_basic';
import MegaPixImage from './Plug/MegaPixImage';
import LoadingConstructor from './util/Cycle';
import { get_android_version, get_ios_version } from '../../util/navigatorUtil';
import toast from '../toast';
import mtBigPicture from '../bigPicture';
import mtActionsheet from '../action-sheet';
import mtMessageBox from '../message-box';
import EXIF from './Plug/exif';
export default {
  name: 'mt-uploader',
  components: {
    mtBigPicture,
    mtActionsheet,
  },
  props: {
    ID:{
      type:String,
      default:''
    },
    clientType:{
      type:Number,
      default:0
    },//上传图片时，优先使用哪一种压缩图片的方式 1：IOS  2：Android  3:web  默认：0  根据客户端自动识别
    canChangeImg: { // 查看图片是是否显示更换图片按钮
      type: Boolean,
      default: true,
    },
    canDeteleImg: { // 查看图片是是否显示删除图片按钮
      type: Boolean,
      default: true,
    },
    serverUrl: { // 上传图片的URL（必选）
      type: String,
      required: true,
    },
    defaultFileList: { // 默认的上传列表
      type: Array,
      default() {
        return [];
      },
    },
    prefix: { // input:hidden的name属性的前缀。String，默认'fileData'
      type: String,
      default: 'fileData',
    },
    isOpenMultiple:{//是否开启多张照片上传，如果开启，则wx.chooimg
      type: Boolean,
      default: false,
    },
    maxCount: { // 上传图片的最大数量
      type: Number,
      default: 5,
    },
    maxSize: {// 上传图片的最大值
      type: Number,
      default() {
        return 1024 * 1024 * 3.5; // 3.5M
      },
    },
    isType: { // 支持的图片类型
      type: String,
      default: 'image/png,image/jpg,image/jpeg,image/pjpeg,image/gif,image/bmp,image/x-png',
    },
    minImgW: { // 上传的图片最小的宽度度
      type: Number,
      default: 10,
    },
    minImgH: { // 上传的图片最小的高度
      type: Number,
      default: 10,
    },
    afterWidth: {// 压缩换算后的图片的宽度,默认1000
      type: Number,
      default: 1000,
    },
    quality: { // 图片压缩率，默认0.8
      type: Number,
      default: 0.8,
    },
    IsBase64StringToImage: { // 是否传到服务器保存
      type: Boolean,
      default: true,
    },
    waterMarkConfig: { // 需要添加水印时的配置
      type: Object,
    },
    ImageServer: {
      type: String,
      default: '', // 图片服务器的域名，默认为空
    },
    IsImageServer: {
      type: Boolean,
      default: false, // 是否上传至其它域名保存，默认为false
    },
    ImageUpdateTimeout: {
      type: Number,
      default: 60 * 1000,
    },
    loadingFgColor: {
      type: String,
      default: '#e5e5e5',
    },
    loadingColor: {
      type: String,
      default: '#41B883',
    },
    loadingFontColor: {
      type: String,
      default: '#111',
    },
    beforeChange: { // 更换文件前的钩子，,显式返回false的话，则中断上传
      type: Function,
      default() {
        return function () {};
      },
    },
    beforeDelete: { // 删除文件前的钩子，,显式返回false的话，则中断上传
      type: Function,
      default() {
        return function () {};
      },
    },
    onSuccess: { // 文件上传成功钩子，返回一个对象，包含图片链接
      type: Function,
      default() {
        return function () {};
      },
    },
    onDelete: { // 删除已经上传的文件的钩子，返回被删除的文件在上传数组中的索引
      type: Function,
      default() {
        return function () {};
      },
    },
    onUploadListChange: { // 修改更换已经上传的文件的钩子，返回被删除的文件在上传数组中的索引
      type: Function,
      default() {
        return function () {};
      },
    },
    onError: { // 文件上传失败钩子，返回一个对象，包含错误信息
      type: Function,
      default() {
        return function () {};
      },
    },
    ImgDirectory:{
      type:String
    },
    IsUseWeiXinSDKUpdatePic:{ //是否使用微信SDK 上传图片 默认否 默认false-
      type:Boolean
    },
    IsWeixinClientRequest:{ // 是否是微信客户端请求
      type:Boolean
    },
    data:{ // 额外需要上传的参数
      type:Object,
      default(){
        return {}
      }
    },
    uploadType:{ // 上传的实体类型 base64 或者 file，如果是 file 则无法使用水印、图片压缩、微信选择图片、图片宽度限制等功能
      type:String,
      default:'base64'
    },
    uploadFormKey:{
      type:String,
      default:'ImageDataBase64'
    }
  },
  data() {
    // const loadingImg = new LoadingConstructor({
    //   width: 80,
    //   height: 80,
    //   border: 10,
    //   percent: 0,
    //   bgcolor: this.loadingFgColor,
    //   pcolor: this.loadingColor,
    //   textcolor: this.loadingFontColor,
    // });
    return {
      loadingImg:null,
      bigImgSrc: '',
      bigImgIndex: 0,
      uploadList: [],
      showBigImg: false,
      isShowLoading: false,
      loadingSrc: '',
      currentImgDirectory: this.ImgDirectory,
      XHRhanldeMehodsList: [], // 操作xhr对象的队列
      checkList: [], // 一系列检查方法的队列
      isChangeImg: false,
      fileType:undefined, // 用于微信图片上传记录图片类型
      isShowUploaderBtn:true, //正在上传的过程中，隐藏上传按钮
      forceCloseWx:false //强制关闭微信上传，当使用微信上传时，报错的时候，则变为true，使用原生上传
    };
  },
  computed: {
    isShowUploaderBox(){
      if(this.isShowUploaderBtn&&this.uploadList.length<this.maxCount){
        return true;
      }else{
        return false;
      }
    },
    useWx() {
      console.log(typeof wx === 'object',this.IsWinWechat(),this.getWxVision())
      if (typeof wx === 'object' && this.IsWinWechat() && this.getWxVision() > '6.5.0' && this.IsUseWeiXinSDKUpdatePic && this.IsWeixinClientRequest && this.uploadType !== 'file') {
        return true;
      }
      return false;
    },
    chooseImageCount(){
      if(this.isOpenMultiple){
        return this.maxCount<=9?this.maxCount:9;
      }else{
        return 1;
      }
    }
  },
  watch:{
    defaultFileList:{
      deep:true,
      handler(val){
        if(Object.prototype.toString.call(val) === "[object Array]"){
          this.uploadList.push(...val);
        }
      }
    }
  },
  created() {
    this.uploadList.push(...this.defaultFileList);
    this.XHRhanldeMehodsList.push({
      key: 'timeout',
      value: this.ImageUpdateTimeout,
    }, {
      key: 'ontimeout',
      value: this.xhrTimeOutEvent,
    }, {
      key: 'onerror',
      value: this.ErrorEvent,
    }, {
      parentKey: 'upload',
      key: 'onprogress',
      value: this.xhrProgressEvent,
    },
    {
      parentKey: 'upload',
      key: 'onloadstart',
      value: this.xhrLoadstartEvent,
    }, {
      key: 'onload',
      value: this.xhrLoadEvent,
    });
    this.checkList.push({name:'checkMax',handler:this.checkMax},{name:'createCanvas',handler:this.createCanvas},{name:'checkFile',handler:this.checkFile});
  },
  mounted(){
    var uploadBoxStyle = this.$refs.mtuiUploaderInputBox.getBoundingClientRect();
    var width = Math.max(uploadBoxStyle.width,uploadBoxStyle.height) || 80;
    this.loadingImg = new LoadingConstructor({
      width: width,
      height: width,
      border: 10,
      percent: 0,
      bgcolor: this.loadingFgColor,
      pcolor: this.loadingColor,
      textcolor: this.loadingFontColor,
      fontSize:`${width*0.00042+0.2264}rem`
    });
  },
  methods: {
    // 手动触发原生上传图片
    handClickInputFile(){
      if(this.$refs.uploader__input){
        this.$refs.uploader__input.click();
      }
    },
    getBase64Type(base64){
      var resultArr = base64.match(/\/\w+\;/);
      if(!resultArr)return undefined;
      return resultArr[0].replace(/\/|\;/g,'');
    },
    IsWinWechat() {//手机微信客户端
      const agent = navigator.userAgent.toLowerCase();
      var wc = agent.match(/windowswechat/i);
      var mm = agent.match(/micromessenger/i);
      return  !wc && mm;
    },
    getWxVision() {
      const agent = navigator.userAgent.toLowerCase();
      const a = agent.match(/micromessenger\/(\d+\.\d+\.\d+)/) || agent.match(/micromessenger\/(\d+\.\d+)/);
      return a ? a[1] : '';
    },
    bytesToSize(bytes) {
      if (bytes === 0) return '0 B';
      const k = 1024; // or 1024
      const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return `${(bytes / (k ** i)).toPrecision(3)} ${sizes[i]}`;
    },
    GetImgDirectory() {
      if (this.currentImgDirectory === undefined||this.currentImgDirectory === '') {
        let dir = '';
        if (window.location.pathname) {
          const arr = window.location.pathname.split('/');
          dir = arr[arr.length - 1];
          if (dir.indexOf('.aspx') !== -1) {
            dir = dir.replace('.aspx', '');
          } else if (dir.indexOf('.html') !== -1) {
            dir = dir.replace('.html', '');
          }
        }
        this.currentImgDirectory = dir;
      }
      return this.currentImgDirectory;
    },
    showBigImgEvent(img, index) {
      this.bigImgSrc = img.url;
      this.bigImgIndex = index;
      this.showBigImg = true;
    },
    hideBigImg() {
      this.showBigImg = false;
    },
    createCanvas() {
      if (this.loadingCanvas && this.loadingCtx) {
        return true;
      }
      this.loadingCanvas = document.createElement('canvas');
      if (!this.loadingCanvas.getContext) {
        toast('对不起，您的浏览器不支持图片压缩及上传功能，请换个浏览器试试~');
        return false;
      }
      this.loadingCtx = this.loadingCanvas.getContext('2d');
      return true;
    },
    checkMax() {
      if (this.isChangeImg) {
        if (this.uploadList.length === this.maxCount + 1) {
          toast(`最多只能上传${this.maxCount}张图片`);
          return false;
        }
      } else if (this.uploadList.length === this.maxCount) {
        toast(`最多只能上传${this.maxCount}张图片`);
        return false;
      }
      return true;
    },
    showLoading(percent) {
      this.loadingSrc = this.loadingImg.update(percent).GetImage();
      this.isShowLoading = true;
    },
    hideLoading() {
      this.loadingSrc = '';
      this.isShowLoading = false;
    },
    checkFile(files) {
      for (let i = 0; i < files.length; i++) {
        if (files[i].size && files[i].size > this.maxSize) {
          toast(`对不起，您的图片${this.bytesToSize(files[i].size)}太大请把图片压缩在${this.bytesToSize(this.maxSize)}内再上传~(${i})`);
          this.hideLoading();
          return false;
        } else if (this.isType.indexOf(files[i].type) === -1) {
          toast(`文件格式不正确(${i})`);
          this.hideLoading();
          return false;
        }
      }
      return true;
    },
    getImgPosition(file) {
      this.orientation = 1;
      EXIF.getData(file, () => {
        this.orientation = parseInt(EXIF.getTag(file, 'Orientation'), 10);
        this.orientation = this.orientation || 1;
        console.log('orientation', this.orientation);
      });
    },
    getImgBlob(file) {
      try {
        const URL = window.URL || window.webkitURL;
        return URL.createObjectURL(file);
      } catch (err) {
        console.error(err);
        throw new Error(err);
      }
    },
    localChangeEvent(event) {
      const files = event.target.files;
      if (files.length === 0) return false;
      if (this.isChangeImg&&this.beforeChange(event) === false) {//显式返回false则中断传输
        return false;
      }
      if (!this.checkListHandle({ checkFile: files })) return false;
      !this.isChangeImg&&(this.isShowUploaderBtn = false);
      this.file = files[0];
      this.showLoading(0); // 显示loading
      // 判断是以base64上传还是file直接上传
      if(this.uploadType === 'file'){
        this.uploadFileToServer();
      }else{
        this.getImgPosition(files[0]); // 获取图像的方位信息
        const imgUrl = this.getImgBlob(files[0]);
        this.transformStart(imgUrl);
      }
      return true;
    },
    uploadFileToServer(){
      const form = new FormData();
      // 添加附加的参数
      for(let key in this.data){
        form.append(key, this.data[key]);
      }
      form.append(this.uploadFormKey, this.file); // 数据
      this.sendXhr(form)
    },
    wxCompress() {
      console.log('微信接口');
      if(!this.createCanvas())return false;
      const wx = window.wx;
      wx.chooseImage({
        count: this.chooseImageCount, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: this.wxSuccessEvent,
        cancel: this.wxCancelEvent,
        fail: this.ErrorEvent,
      });
    },
    wxSuccessEvent(res) {
      const wx = window.wx;
      const vm = this;
      try {
        if (!wx.getLocalImgData) {
          this.hideLoading();
          this.onError({ status: 'fail', data: `您的微信不支持,请升级您的微信${navigator.userAgent}` });
          return false;
        }
        !this.isChangeImg&&(this.isShowUploaderBtn = false);
        wx.getLocalImgData({
          localId: res.localIds[0], // 图片的localID
          cancel: this.wxCancelEvent,
          fail: this.ErrorEvent,
          success(result) {
            if (vm.isChangeImg&&vm.beforeChange(res) === false) {//显式返回false则中断传输
              return vm.restConfig();
            }
            const arr = result.localData.split(',');
            // IPhone
            if (arr.length === 2) {
              arr[0] = 'data:image/jpeg;base64';
            } else if (arr.length === 1) {
              // Android
              arr.unshift('data:image/jpeg;base64');
            }
            result.localData = arr.join(',');
            vm.fileType = vm.getBase64Type(result.localData);
            if (vm.waterMarkConfig) {
              vm.proxySetWatermark(result.localData);
            } else if (vm.IsBase64StringToImage) {
              vm.Base64StringToImage(result.localData);
            } else {
              vm.addUpImg(result.localData);
            }
          },
        });
      } catch (err) {
        console.error(err);
        this.hideLoading();
        this.onError({ status: 'fail', data: err });
      }
      return true;
    },
    restConfig(){
      this.isShowUploaderBtn = true;
      return false;
    },
    wxCancelEvent(res) {
      this.hideLoading();
      this.restConfig()
      this.onError({ status: 'cancel', data: res });
    },
    compressConfig(img) {
      this.afterHeight = (this.afterWidth * img.height) / img.width;
      this.loadingCanvas.setAttribute('width', this.afterWidth);
      this.loadingCanvas.setAttribute('height', this.afterHeight);
      switch (this.orientation) {
        case 3:
        case 4:
          this.orientation34(this.afterHeight, this.afterWidth);
          break;
        case 5:
        case 6:
          this.orientation56(this.afterHeight);
          break;
        case 7:
        case 8:
          this.orientation56(this.afterWidth);
          break;
        default:
      }
      this.loadingCtx.drawImage(img, 0, 0, this.afterWidth, this.afterHeight);
    },
    checkImgWH(img) {
      if (img.width < this.minImgW || img.height < this.minImgH) {
        toast('请不要上传过小的图片');
        this.hideLoading();
        return false;
      }
      return true;
    },
    orientation34(w, h) {
      this.loadingCtx.translate(w, h);
      this.loadingCtx.rotate((180 * Math.PI) / 180);
    },
    orientation56(h) {
      this.loadingCtx.translate(h, 0);
      this.loadingCtx.rotate((90 * Math.PI) / 180);
    },
    orientation78(w) {
      this.loadingCtx.translate(0, w);
      this.loadingCtx.rotate((270 * Math.PI) / 180);
    },
    createIOSBase64(img) {
      const mpImg = new MegaPixImage(img);
      mpImg.render(this.loadingCanvas, {
        maxWidth: this.afterWidth,
        maxHeight: this.afterHeight,
        quality: this.quality,
        orientation: this.orientation || 1,
      });
      return this.loadingCanvas.toDataURL(this.fileType||this.file.type, this.quality);
    },
    createAndroidBase64() {
      const encoder = new JPEGEncoder();
      return encoder.encode(this.loadingCtx.getImageData(0, 0, this.afterWidth, this.afterHeight), this.quality * 100 || 80);
    },
    createWebBase64() {
      console.log('base64', this.file, this.fileType);
      return this.loadingCanvas.toDataURL(this.fileType||this.file.type, this.quality * 1);
    },
    createBase64(img) {
      const androidVersion = get_android_version();
      const iosVersion = get_ios_version();
        if(this.clientType === 1){
          this.createBase64 = this.createIOSBase64;
        }else if(this.clientType === 2){
          this.createBase64 = this.createAndroidBase64;
        }else if(this.clientType === 3){
          this.createBase64 = this.createWebBase64;
        } else if (iosVersion||androidVersion) {
          this.createBase64 = this.createIOSBase64;
        } else if (androidVersion&&androidVersion<4.1) {
          this.createBase64 = this.createAndroidBase64;
        } else {
          this.createBase64 = this.createWebBase64;
        }
      return this.createBase64(img);
    },
    checkListHandle(argObj) {
      const len = this.checkList.length;
      let key;
      for (let i = 0; i < len; i++) {
        key = this.checkList[i].name;
        if (!this.checkList[i].handler(argObj[key])) return false;
      }
      return true;
    },
    transformStart(imgUrl) {
      const img = new Image();
      img.src = imgUrl;
      img.onload = () => {
        if (!this.checkImgWH(img)) return this.restConfig();
        this.compressConfig(img);
        if (this.waterMarkConfig) {
          this.proxySetWatermark(img);
        } else if (this.IsBase64StringToImage) {
          const base64 = this.createBase64(img);
          this.Base64StringToImage(base64);
        } else {
          const base64 = this.createBase64(img);
          this.addUpImg(base64);
        }
        return true;
      };
    },
    proxySetWatermark(sourse) {
      if (sourse instanceof Image) {
        this.setWatermark(sourse);
      } else {
        const img = new Image();
        img.onload = () => {
          this.setWatermark(img);
        };
        img.src = sourse;
      }
    },
    setWatermark(img) {
      if (!this.waterMarkConfig) return;
      const waterMarkConfig = Object.assign({
        watermarkType: 'str', // 水印的类型，图片img 或者 文字str
        fontSize: '20px',
        strColor: 'rgba(102, 102, 102, 0.3)', // 当水印为文字是，可设置字体颜色 ，默认 rgba(102, 102, 102, 0.3)
        position: 'br', // 位置 tl tr bl br 默认 br
        multiple: 0.1,
      }, this.waterMarkConfig);
      this.loadingCanvas.width = img.width;
      this.loadingCanvas.height = img.height;
      this.loadingCtx.drawImage(img, 0, 0);
      if (waterMarkConfig.watermarkType === 'str') { // 文字
        this.loadingCtx.font = `${waterMarkConfig.fontSize} microsoft yahei`;
        this.loadingCtx.fillStyle = waterMarkConfig.strColor;
        if (waterMarkConfig.position === 'tl') {
          this.loadingCtx.fillText(waterMarkConfig.watermark, 5, 20);
        } else if (waterMarkConfig.position === 'tr') {
          this.loadingCtx.fillText(waterMarkConfig.watermark, 5, img.height - 5);
        } else if (waterMarkConfig.position === 'bl') {
          this.loadingCtx.fillText(waterMarkConfig.watermark, img.width - 80 - 5, 20);
        } else {
          this.loadingCtx.fillText(waterMarkConfig.watermark, img.width - 80 - 5,
            img.height - 5);
        }
        const base64 = this.createBase64(img);
        if (this.IsBase64StringToImage) {
          this.Base64StringToImage(base64);
        } else {
          this.addUpImg(base64);
        }
      } else {
        // 图片
        const watermark = new Image();
        watermark.src = waterMarkConfig.watermark;
        watermark.setAttribute('crossOrigin', 'Anonymous');
        watermark.onload = () => {
          const beishu = (watermark.width / this.loadingCanvas.width) / waterMarkConfig.multiple;
          const watermarkWidth = watermark.width * beishu;
          const watermarkHeight = watermark.height * beishu;
          if (waterMarkConfig.position === 'tl') {
            this.loadingCtx.drawImage(watermark, 0, 0, watermarkWidth, watermarkHeight);
          } else if (waterMarkConfig.position === 'tr') {
            this.loadingCtx.drawImage(watermark, 0, this.loadingCanvas.height - watermarkHeight,
              watermarkWidth, watermarkHeight);
          } else if (waterMarkConfig.position === 'bl') {
            this.loadingCtx.drawImage(watermark, this.loadingCanvas.width - watermarkWidth, 0,
              watermarkWidth, watermarkHeight);
          } else {
            this.loadingCtx.drawImage(watermark, this.loadingCanvas.width - watermarkWidth,
              this.loadingCanvas.height - watermarkHeight, watermarkWidth, watermarkHeight);
          }
          const base64 = this.createBase64(img);
          if (this.IsBase64StringToImage) {
            this.Base64StringToImage(base64);
          } else {
            this.addUpImg(base64);
          }
        };
      }
    },
    addUpImg(url) {
      if (this.isChangeImg) {
        this.uploadList.splice(this.bigImgIndex, 1, {
          url,
          name: `${this.prefix}${this.uploadList.length}`,
        });
        this.isChangeImg = false;
        this.onUploadListChange({
          index: this.bigImgIndex,
          uploadList: this.uploadList,
        });
      } else {
        this.uploadList.push({
          url,
          name: `${this.prefix}${this.uploadList.length}`,
        });
        this.restConfig();
      }
      this.hideLoading();
      this.loadingCtx.clearRect(0, 0, this.loadingCanvas.width, this.loadingCanvas.height);
      this.onSuccess({ status: 'success', data: url });
    },
    Base64StringToImage(base64) {
      this.GetImgDirectory();
      const form = new FormData();
      // 向后兼容，不删除
      form.append('action', 'base64stringtoimage'); // 方法
      form.append('ImgDirectory', this.currentImgDirectory); // 目录
      // 添加附加的参数
      for(let key in this.data){
        form.append(key, this.data[key]);
      }
      form.append(this.uploadFormKey, base64); // 数据
      this.sendXhr(form)
    },
    sendXhr(form){
      if (!this.xhr) {
        this.xhr = new XMLHttpRequest();
      }
      this.xhrHanldeMehods(); // 集中处理 xhr 对象
      this.xhr.open('post', this.serverUrl, true);
      this.xhr.send(form);
    },
    xhrTimeOutEvent() {
      this.xhr.abort();
      this.hideLoading();
      this.onError({ status: 'fail',
        data: '超时' });
    },
    ErrorEvent(event) {
      this.hideLoading();
      this.restConfig()
      if(typeof event.errMsg === 'string'&&event.errMsg.indexOf('getLocalImgData')!==-1||event.errMsg.indexOf('chooseImage')!==-1){//没有权限
        this.forceCloseWx = true;
        console.log("强制转换为原生上传方式",this.forceCloseWx)
        this.$nextTick(()=>{
          this.handClickInputFile();
        });
      }else{
        this.onError({ status: 'fail', data:  event });
      }
    },
    xhrProgressEvent(event) {
      this.showLoading(Math.round((event.loaded / event.total) * 100));
    },
    xhrLoadstartEvent() {
      this.$ot = new Date().getTime(); // 设置上传开始时间
      this.$oloaded = 0; // 设置上传开始时，以上传的文件大小为0
      this.showLoading(0);
    },
    xhrHanldeMehods() {
      if (!this.xhr) return;
      this.XHRhanldeMehodsList.map((item) => {
        const key = item.key;
        if (item.parentKey) {
          this.xhr[item.parentKey][key] = item.value;
        } else {
          this.xhr[key] = item.value;
        }
        return item;
      });
    },
    xhrLoadEvent(event) {
      console.log('event', event.target);
      const data = typeof event.target.responseText === 'string' ? JSON.parse(event.target.responseText) : event.target.responseText;
      if (data.id === 1) {
        const URL = window.URL || window.webkitURL;
        const url = new URL(data.url);
        let href = url.href;
        if (this.IsImageServer && this.ImageServer) {
          href = this.ImageServer + url.pathname;
          console.log('href', href);
        }
        this.addUpImg(href);
      } else {
        this.restConfig()
        this.hideLoading();
        this.onError({ status: 'fail', data: event });
      }
    },
    deleteImg() {
      if (this.beforeDelete() === false) {
        return false;
      }
      mtMessageBox.confirm('确定删除已上传的图片？').then((action) => {
        if (action === 'confirm') {
          this.uploadList.splice(this.bigImgIndex, 1);
          this.onDelete({
            index: this.bigImgIndex,
            uploadList: this.uploadList,
          });
          this.hideBigImg();
          toast('删除成功');
        }
      });
      return true;
    },
    changeImg() {
      this.isChangeImg = true;
      if (!this.forceCloseWx&&this.useWx) {
        this.wxCompress();
      } else {
        this.handClickInputFile();
        this.hideBigImg();
      }
      return true;
    },
    resetImgList(){//清空上传队列
      if(this.uploadList.length>0){
        this.uploadList = [];
      }
    }
  },
  filters: {
    removeOrigin(val) {
      if (val === undefined) return '';
      const URL = window.URL || window.webkitURL;
      const url = new URL(val);
      return url.pathname;
    },
  },
};
</script>
<style lang="less">
.mtui-img-handle{
  width: 100%;
  background-color: #000;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  height: 0.88rem;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  >div{
    display: flex;
    align-items: center;
    font-size: 0.26rem;
    height: 0.88rem;
    color: #EEEEEE;
    margin-right: 0.4rem;
    >img{
      display: block;
      width: 0.3rem;
      margin-right: 0.2rem;
    }
  }
}
span.mtui-uploader__input{
  cursor: pointer;
}
</style>
