import {
  EXIF,
  MegaPixImage,
  JPEGEncoder
} from './compressPlug';
/**
 * @MT 微信 上传图片
 * Copyright (c) 2015, 猫态科技 Inc.
 * All rights reserved.
 * By 神童  2018
 */

// 为了兼容 Object.assign
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String('abc');
    test1[5] = 'de';
    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    }

    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });
    if (order2.join('') !== '0123456789') {
      return false;
    }
    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join('') !==
      'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    return false;
  }
}
Object.assign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};

// Object.assign  end


function bytesToSize(bytes) {
  if (bytes === 0) return '0 B';
  var k = 1024, // or 1024
    sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}
var WxVision = function () {
  var agent = navigator.userAgent.toLowerCase();
  var a = agent.match(/micromessenger\/(\d+\.\d+\.\d+)/) || agent.match(/micromessenger\/(\d+\.\d+)/);
  return a ? a[1] : "";
}();
var IsWinWechat = function () {
  var agent = navigator.userAgent.toLowerCase();
  return agent.match(/windowswechat/i) == 'windowswechat' && agent.match(/micromessenger/i) == 'micromessenger'
}();
var GetImgDirectory = function () {
  var dir = "";
  if (window.location.pathname) {
    var arr = window.location.pathname.split('/');
    dir = arr[arr.length - 1];
    if (dir.indexOf('.aspx') !== -1) {
      dir = dir.replace(".aspx", "");
    } else if (dir.indexOf('.html') !== -1) {
      dir = dir.replace(".html", "");
    }
  }
  return dir;
}();
//圆环对象
function Cycle(opts) {
  this.width = opts.width;
  this.border = opts.border;
  this.height = opts.height;
  this.bgcolor = opts.bgcolor;
  this.pcolor = opts.pcolor;
  this.textcolor = opts.textcolor;
  this.percent = opts.percent;
  this.canvas = document.createElement('canvas');
  this.context = this.canvas.getContext("2d");
};
//动态扩展内置方法
Cycle.prototype = {
  constructor: Cycle, //声明指向构造器
  //设置参数
  update: function (percent) {
    var w = this.width;
    var h = this.height;
    var deg = percent || this.percent;
    var cradius = w / 2 - this.border;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.context.fillStyle = "rgba(255,255,255,0.5)";
    //绘制到画板中
    this.context.stroke();
    //清除画布
    this.context.clearRect(0, 0, w, h);
    //开始绘画
    this.context.beginPath();
    //设置圆的边框
    this.context.lineWidth = this.border;
    //绘制边框的颜色
    this.context.strokeStyle = this.bgcolor; //实心用fillstyle对应的方法是fill()
    //绘制圆
    this.context.arc(w / 2, h / 2, cradius, 0, 2 * Math.PI);
    //绘制到画板中
    this.context.stroke();
    //计算一个角度对应弧度是多少
    var d = deg * 3.6 / 180 * Math.PI;
    //重新绘制
    this.context.beginPath();
    //设置圆的边框
    this.context.lineWidth = this.border;
    //绘制边框的颜色
    this.context.strokeStyle = this.pcolor;
    //绘制圆
    this.context.arc(w / 2, h / 2, cradius, -Math.PI / 2, d - Math.PI / 2);
    //绘制到画板中
    this.context.stroke();
    //文字
    this.context.beginPath();
    //字体颜色
    this.context.fillStyle = this.textcolor;
    //字体样式
    this.context.font = "0.6rem 微软雅黑";
    var text = "压缩中";
    if (deg < 2) {
      text = "压缩中";
    }
    if (deg == 100) {
      text = "加载中";
    } else {
      text = deg + "%";
    }
    //获取文字宽度
    var textWidth = this.context.measureText(text).width;
    //绘制文字fillText("百分比",x,y);
    this.context.fillText(text, w / 2 - textWidth / 2, h / 2 + 6);
    return this;
  },
  GetImage: function () {
    return this.canvas.toDataURL("image/png", 1);
  }
};
var cycle = new Cycle({
  width: 80,
  height: 80,
  border: 10,
  percent: 0,
  bgcolor: "gray",
  pcolor: "green",
  textcolor: "#111"
});
var Base64StringToImage = function (opt) {
  console.log("进入Base64StringToImage");
  var ImgDirectory = opt.ImgDirectory || GetImgDirectory;
  var ImageDataBase64 = opt.ImageDataBase64 || "";
  var ImageServer = opt.ImageServer || "";
  var IsImageServer = opt.IsImageServer || false;
  var callback = opt.callback;
  var serverUrl = opt.serverUrl;
  var li = opt.li;
  console.log('li,',li);
  console.log("ImgDirectory:",ImageDataBase64);
  console.log("ImageServer:",ImageServer);
  console.log("IsImageServer:",IsImageServer);
  console.log("ImageDataBase64:",ImageDataBase64);
  console.log("serverUrl:",serverUrl);
  if (!ImageDataBase64) {
    alert("图片为空，请重新选择图片上传!");
    onFail(li);
    return;
  }
  try {
    var ot; //
    var oloaded;
    var xhr = new XMLHttpRequest();
    var form = new FormData(); // FormData 对象
    form.append("action", "base64stringtoimage"); // 方法
    form.append("ImgDirectory", ImgDirectory); // 目录
    form.append("ImageDataBase64", ImageDataBase64); // 数据
    xhr.open("post", serverUrl, true); //post方式，url为服务器请求地址
    xhr.timeout = opt.ImageUpdateTimeout || 60 * 1000;
    xhr.ontimeout = function () {
      xhr.abort();
      alert("上传图片，超时，请重试" + +JSON.stringify(xhr) + "," + navigator.userAgent);
      onFail(li);
      if (callback != undefined) {
        callback({
          status: 'fail',
          data: '超时'
        });
      }
    };
    xhr.onload = function (event) {
      console.log("xhr.onload:",this.responseText);
      var data = eval("data =" + this.responseText);
      console.log("xhr.onload:",data);
      if (data.id == 1) {
        console.log("data.id == 1",data);
        var url = new URL(data.url);
        var href = url.href;
        var pathname = url.pathname;
        //使用 如果不为空
        if (IsImageServer && ImageServer) {
          href = ImageServer + url.pathname;
          alert(href)
        }
        li.style.backgroundImage = 'url("' + href + '")';
        li.setAttribute('data-imgsrc', href);
        if (opt.model == 2) {
          opt.inputBox.style.display = 'none';
        } else {
          checkMax(opt);
        }
        li.getElementsByTagName('input')[0].value = pathname;
        console.log('li',li);
        // 此处将得到的图片数据回调
        if (callback != undefined) {
          callback({
            status: 'success',
            data: pathname
          });
        }
      } else {
        onFail(li);
        if (callback != undefined) {
          callback({
            status: 'fail',
            data: data.messages
          });
        }
        alert(data.messages);
        return;
      }
    }; //请求完成
    xhr.onerror = function (event) {
      alert("上传图片，网络异常，请重试" + +JSON.stringify(xhr) + "," + navigator.userAgent);
      onFail(li);
      if (callback != undefined) {
        callback({
          status: 'fail',
          data: event.messages
        });
      }
    }; //请求失败
    xhr.upload.onprogress = function (event) {
      var url = cycle.update(Math.round(event.loaded / event.total * 100)).GetImage();
      li.style.backgroundImage = 'url("' + url + '")';
    }; //【上传进度调用方法实现】
    xhr.upload.onloadstart = function () { //上传开始执行方法
      ot = new Date().getTime(); //设置上传开始时间
      oloaded = 0; //设置上传开始时，以上传的文件大小为0
      var url = cycle.update(0).GetImage();
      li.style.backgroundImage = 'url("' + url + '")';
    };
    xhr.send(form);
  } catch (e) {
    alert("上传图片，异常，请重试" + +JSON.stringify(xhr) + "," + navigator.userAgent);
    onFail(li);
    if (callback != undefined) {
      callback({
        status: 'fail',
        data: e.messages
      });
    }
  }
}

/**
 * 微信试取图
 * @param {Object} opt
 */
var wxcompress = function (opt) {
  console.log('微信取图')
  var inputBoxClass = opt.inputBoxClass;
  var afterWidth = opt.afterWidth;
  var callback = opt.callback;
  var inputBoxList = document.getElementsByClassName(inputBoxClass);
  var loading = cycle.update(0).GetImage();
  console.log('inputBoxList',inputBoxList);
  console.log('inputBoxList',loading);
  try {
    for (var i = 0; i < inputBoxList.length; i++) {
      var inputBox = inputBoxList[i];
      var inputFile = inputBox.getElementsByTagName('input')[0];
      (function (inputBox) {
        inputFile.addEventListener("click", function () {
          console.log(this.files)
          var viewLength = inputBox.parentNode.getElementsByClassName(opt.viewClass).length;
          if (viewLength > opt.maxCount) {
            alert('最多只能上传' + opt.maxCount + '张图片');
            return;
          }
          wx.chooseImage({
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
              //加载提示
              var li;
              var liIndex
              if (opt.model == 2) {
                liIndex = Array.prototype.indexOf.call(inputBoxList, inputBox);
                if (!!opt.fileName[liIndex]) {
                  li = createLiDOM(opt, opt.fileName[liIndex], liIndex);
                  console.log('li,liIndex',li);
                } else {
                  alert('model为2的情况下，fileName必须为一个长度和上传按钮数一致的数组');
                  return;
                }
              } else {
                liIndex = inputBoxList[0].parentNode.getElementsByClassName(opt.viewClass).length;
                li = createLiDOM(opt, opt.prefix + viewLength, liIndex);
                console.log('li,liIndex,else',li);
              }
              li.style.backgroundImage = 'url("' + loading + '")';
              inputBox.parentNode.insertBefore(li, inputBox); //添加图片预览容器
              console.log('li,style',li);
              // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
              try {
                if (opt.checkResult.getLocalImgData) {
                  wx.getLocalImgData({
                    localId: res.localIds[0], // 图片的localID
                    success: function (result) {
                      // localData是图片的base64数据，可以用img标签显示
                      var arr = result.localData.split(',');
                      //IPhone
                      if (arr.length == 2) {
                        arr[0] = "data:image/jpeg;base64";
                      } else if (arr.length == 1) {
                        //Android
                        arr.unshift("data:image/jpeg;base64");
                      }
                      result.localData = arr.join(',');
                      //上传 服务转换URL
                      if (opt.IsBase64StringToImage) {
                        opt.ImageDataBase64 = result.localData;
                        opt.li = li;
                        console.log('opt.li',li);
                        if (opt.model == 2) {
                          opt.inputBox = inputBox;
                        }
                        console.log('微信的这边的Base64StringToImage');
                        if(!!opt.setWatermark){  //是否添加水印
                          opt.setWatermark.imgSrc = opt.ImageDataBase64
                          setWatermark(opt); //设置水印
                        }else{
                          Base64StringToImage(opt);
                        }
                      } else {
                        li.style.backgroundImage = 'url("' + result.localData + '")';
                        li.setAttribute('data-imgsrc', result.localData);
                        // 此处将得到的图片数据回调
                        if (callback != undefined) {
                          callback({
                            status: 'success',
                            data: result.localData
                          });
                        }
                      }
                    },
                    cancel: function (res) {
                      if (callback != undefined) {
                        callback({
                          status: 'cancel',
                          data: '取消转换照片'
                        });
                      }
                      //取消选择图片
                    },
                    fail: function (res) {
                      if (callback != undefined) {
                        callback({
                          status: 'fail',
                          data: "转换图片失败，请重试：" + JSON.stringify(res) + "," + navigator.userAgent
                        });
                      }
                      alert("转换图片失败，请重试：" + JSON.stringify(res) + "," + navigator.userAgent);
                    }
                  });
                } else {
                  if (callback != undefined) {
                    callback({
                      status: 'fail',
                      data: "您的微信不支持,请升级您的微信\b\r" + navigator.userAgent
                    });
                  }
                  alert("您的微信不支持,请升级您的微信\b\r" + navigator.userAgent);
                }
              } catch (ex) {
                if (callback != undefined) {
                  callback({
                    status: 'fail',
                    data: "success转换图片失败，请重试：" + JSON.stringify(res) + "," + navigator.userAgent
                  });
                }
                alert("转图片失败，请重试：" + JSON.stringify(ex) + "," + navigator.userAgent);
              }
            },
            cancel: function (res) {
              if (callback != undefined) {
                callback({
                  status: 'cancel',
                  data: res
                });
              }
              //取消选择图片
            },
            fail: function (res) {
              console.log(res)
              if (callback != undefined) {
                callback({
                  status: 'fail',
                  data: res
                });
              }
              alert("选择图片失败，请重试：" + JSON.stringify(res) + "," + navigator.userAgent);
            }
          });
        }, false);
      })(inputBox)
    }
  } catch (e) {
    if (callback != undefined) {
      callback({
        status: 'fail',
        data: e
      });
    }
    alert(e);
  }

}
/**
 * 原生方式取图
 * @param {Object} opt
 */
var localcompress = function (opt) {
  console.log('进入localcompress');
  var inputBoxClass = opt.inputBoxClass;
  var afterWidth = opt.afterWidth;
  var callback = opt.callback;
  var inputBoxList = document.getElementsByClassName(inputBoxClass),
    hidCanvas = document.createElement('canvas'),
    hidCtx;

  var loading = cycle.update(0).GetImage();
  //生成隐藏画布
  if (hidCanvas.getContext) {} else {
    alert("对不起，您的浏览器不支持图片压缩及上传功能，请换个浏览器试试~");
    return;
  }
  try {
    for (var i = 0; i < inputBoxList.length; i++) {
      var inputBox = inputBoxList[i];
      var inputFile = inputBox.getElementsByTagName('input')[0];
      (function (inputBox) {
        inputFile.onchange = function (e) {
          var viewLength = inputBox.parentNode.getElementsByClassName(opt.viewClass).length;
          if (this.files.length === 0) {
            console.log('this.files.length === 0');
            return;
          } else if (viewLength > opt.maxCount) {
            alert('最多只能上传' + opt.maxCount + '张图片');
            return;
          }
          hidCanvas = hidCanvas || document.createElement('canvas');
          hidCtx = hidCtx || hidCanvas.getContext('2d');
          //加载提示
          var li;
          var liIndex
          if (opt.revise) {
            if (opt.model === 2) {
              li = inputBoxList[e.target.dataset.index].previousElementSibling;
            } else {
              li = this.parentNode.parentNode.getElementsByClassName(opt.viewClass)[e.target.dataset.index];
            }
            li.style.backgroundImage = 'url("' + loading + '")';
            console.log('li',li);
            opt.revise = false;
          } else {
            if (opt.model == 2) {
              liIndex = Array.prototype.indexOf.call(inputBoxList, inputBox);
              if (!!opt.fileName[liIndex]) {
                li = createLiDOM(opt, opt.fileName[liIndex], liIndex);
              } else {
                alert('model为2的情况下，fileName必须为一个长度和上传按钮数一致的数组');
                return;
              }
            } else {
              liIndex = inputBoxList[0].parentNode.getElementsByClassName(opt.viewClass).length;
              li = createLiDOM(opt, opt.prefix + viewLength, liIndex);
            }
            li.style.backgroundImage = 'url("' + loading + '")';
            console.log('li',li);
            inputBox.parentNode.insertBefore(li, inputBox); //添加图片预览容器
          }
          var file = e.target.files[0];
          //通过 this.files 取到 FileList ，这里只有一个
          var self = this;
          var quality = opt.quality; //压缩率，默认值为0.8
          var type = 'image/png,image/jpg,image/jpeg,image/pjpeg,image/gif,image/bmp,image/x-png';
          var maxsize = 1024 * 1024 * 3.5;
          if (file.size && file.size > maxsize) {
            alert("对不起，您的图片" + bytesToSize(file.size) + "太大请把图片压缩在" + bytesToSize(1024 * 1024 * 3.5) + "内再上传~");
            // 处理失败会执行
            onFail(li);
            return;

          } else if (type.indexOf(file.type) < 0) {
            alert('格式不正确');
            // 处理失败会执行
            onFail(li);
            return;
          } else {
            var orientation = 1;
            //获取图像的方位信息
            EXIF.getData(file, function () {
              orientation = parseInt(EXIF.getTag(file, "Orientation"));
              orientation = orientation ? orientation : 1;
            });
            var URL = window.URL || webkitURL;
            var blob = URL.createObjectURL(file);
            var img = new Image();
            img.src = blob;
            img.onload = function () {
              var upImgWidth = img.width,
                upImgHeight = img.height;
              //压缩换算后的图片高度
              var afterHeight = afterWidth * upImgHeight / upImgWidth;
              if (upImgWidth < 10 || upImgWidth < 10) {
                alert("请不要上传过小的图片");
                onFail(li);
                self.value = "";
                return false;
              } else {
                if (orientation <= 4) {
                  // 设置压缩canvas区域高度及宽度
                  hidCanvas.setAttribute("height", afterHeight);
                  hidCanvas.setAttribute("width", afterWidth);
                  if (orientation == 3 || orientation == 4) {
                    hidCtx.translate(afterWidth, afterHeight);
                    hidCtx.rotate(180 * Math.PI / 180);
                  }
                } else {
                  // 设置压缩canvas区域高度及宽度
                  hidCanvas.setAttribute("width", afterWidth);
                  hidCanvas.setAttribute("height", afterHeight);
                  if (orientation == 5 || orientation == 6) {
                    hidCtx.translate(afterHeight, 0);
                    hidCtx.rotate(90 * Math.PI / 180);
                  } else if (orientation == 7 || orientation == 8) {
                    hidCtx.translate(0, afterWidth);
                    hidCtx.rotate(270 * Math.PI / 180);
                  }
                }
                hidCtx.drawImage(this, 0, 0, afterWidth, afterHeight);
                var base64 = "";
                if (navigator.userAgent.match(/iphone/i)) {
                  var mpImg = new MegaPixImage(img);
                  mpImg.render(hidCanvas, {
                    maxWidth: afterWidth,
                    maxHeight: afterHeight,
                    quality: quality || 0.8,
                    orientation: orientation || 1
                  });
                  base64 = hidCanvas.toDataURL(file.type, quality || 0.8);
                } else if (navigator.userAgent.match(/Android/i)) {
                  // 修复android
                  var encoder = new JPEGEncoder();
                  base64 = encoder.encode(hidCtx.getImageData(0, 0, afterWidth, afterHeight),
                    quality * 100 || 80);
                } else {
                  base64 = hidCanvas.toDataURL(file.type, (quality || 0.8) * 1);
                }
                //上传 服务转换URL
                if (opt.IsBase64StringToImage) {
                  opt.ImageDataBase64 = base64;
                  opt.li = li;
                  console.log('li',li);
                  if (opt.model == 2) {
                    opt.inputBox = inputBox;
                  }
                  if(!!opt.setWatermark){ //是否添加水印
                    opt.setWatermark.imgSrc = opt.ImageDataBase64
                    setWatermark(opt); //设置水印
                  }else{
                    Base64StringToImage(opt);
                  }
                } else {
                  li.style.backgroundImage = 'url("' + base64 + '")';
                  li.setAttribute('data-imgsrc', base64);
                  if (callback != undefined) {
                    callback({
                      status:'base64',
                      data: base64
                    })
                  };
                  self.value = "";
                }
                // 释放内存
                hidCtx = null;
                hidCanvas = null;
              }
            };
          }
        };
      })(inputBox)
    }
  } catch (e) {
    if (callback != undefined) {
      callback({
        status: 'fail',
        data: "图片处理异常2:" + JSON.stringify(e) + "," + navigator.userAgent
      });
    }
    alert("图片处理异常2:" + JSON.stringify(e) + "," + navigator.userAgent);
  }
}

/**
 * 判断上传的图片是否达到最大数，从而隐藏上传按钮
 * @param {Object} opt
 */
function checkMax(opt) {
  var inputBox = document.getElementsByClassName(opt.inputBoxClass)[0];
  var viewLength = inputBox.parentNode.querySelectorAll('.' + opt.viewClass).length;
  if (viewLength === opt.maxCount) {
    inputBox.style.display = 'none';
  } else {
    if (inputBox.style.display === 'none') {
      inputBox.style.display = 'block';
    }
  }
}

// 生成一个预览图片的元素
function createLiDOM(opt, inputName, liIndex) {
  var li = document.createElement('li');
  li.setAttribute('class', opt.viewClass);
  if (liIndex !== undefined) {
    li.setAttribute('data-index', liIndex);
  }
  var inputHidden = document.createElement('input');
  inputHidden.setAttribute('class', opt.viewChildClass);
  inputHidden.setAttribute('type', 'hidden');
  inputHidden.setAttribute('name', inputName);
  li.appendChild(inputHidden);
  if (opt.viewClickEvent === 'revise') {
    var inputFile = document.createElement('input');
    inputFile.className = 'mtui-uploader__input';
    inputFile.setAttribute('type', 'file');
    inputFile.setAttribute('accept', 'image/*');
    inputFile.setAttribute('data-index', liIndex);
    li.appendChild(inputFile);
    inputFile.addEventListener('change', function (e) {
      var inputBoxList = document.getElementsByClassName(opt.inputBoxClass);
      opt.revise = true;
      if (opt.model == 2) {
        inputBoxList[liIndex].getElementsByTagName('input')[0].onchange(e);
      } else {
        inputBoxList[0].getElementsByTagName('input')[0].onchange(e);
      }
    });
  }
  return li;
}

// 失败时错作DOM
function onFail(ele) {
  ele.parentNode.removeChild(ele);
}

// 设置水印
function setWatermark(opt) {
  var setWatermark = Object.assign({
      watermarkType: "str", //水印的类型，图片img 或者 文字str
      fontSize:"20px",
      strColor: 'rgba(102, 102, 102, 0.3)', //当水印为文字是，可设置字体颜色 ，默认 rgba(102, 102, 102, 0.3)
      position: 'br' //位置 tl tr bl br 默认 br
  },opt.setWatermark)

  var img = new Image();
  img.src = setWatermark.imgSrc;
  // 加载完成开始绘制
  img.onload = function () {
      //准备canvas环境
      var canvas = document.createElement("canvas")
      canvas.width = this.width
      canvas.height = this.height
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      ctx.font =  setWatermark.fontSize+ " microsoft yahei";
      ctx.fillStyle = setWatermark.strColor;
      if (setWatermark.watermarkType === 'str') {
          // 文字
          if (setWatermark.position === 'tl') {
              ctx.fillText(setWatermark.watermark, 5, 20);
          } else if (setWatermark.position === 'tr') {
              ctx.fillText(setWatermark.watermark, 5, this.height - 5);
          } else if (setWatermark.position === 'bl') {
              ctx.fillText(setWatermark.watermark, this.width - 80 - 5, 20);
          } else {
              ctx.fillText(setWatermark.watermark, this.width - 80 - 5, this.height - 5);
          }
          opt.ImageDataBase64 = canvas.toDataURL("image/png");
          Base64StringToImage(opt);
      } else {
          //图片
          var watermark = new Image();
          watermark.src = setWatermark.watermark;
          watermark.onload = function () {
              var beishu = this.width / canvas.width / setWatermark.multiple,
                  watermarkWidth = this.width * beishu,
                  watermarkHeight = this.height * beishu
              if (setWatermark.position === 'tl') {
                  ctx.drawImage(watermark, 0, 0, watermarkWidth, watermarkHeight);
              } else if (setWatermark.position === 'tr') {
                  ctx.drawImage(watermark, 0, canvas.height - watermarkHeight, watermarkWidth, watermarkHeight);
              } else if (setWatermark.position === 'bl') {
                  ctx.drawImage(watermark, canvas.width - watermarkWidth, 0, watermarkWidth, watermarkHeight);
              } else {
                  ctx.drawImage(watermark, canvas.width - watermarkWidth, canvas.height - watermarkHeight, watermarkWidth, watermarkHeight);
              }
              opt.ImageDataBase64 = canvas.toDataURL("image/png");
              Base64StringToImage(opt);
          }
      }
  }
}


/**
 * @param {string} serverUrl  上传图片的URL（必选）
 * @param {string} inputBoxId  input:file的父元素的id（必选）
 * @param {string} viewClass 预览图片元素的class （必选）
 * @param {string} viewChildClass 预览图片元素的子元素的class,（必选）
 * @param {number=1} model 选择上传的方式，默认为1，可选值为（'1':单个上传按钮，任意上传图片; '2':多个上传按钮，固定input:hidden的name属性，为 2 时，fileName为必选）
 * @param {array} fileName input:hidden 的name属性,数组长度与上传按钮个数一致
 * @param {number=5} maxCount 上传图片的最大数量，默认为5张
 * @param {number=1000} afterWidth 压缩换算后的图片的宽度,默认1000
 * @param {boolean=false} IsWeixinClientRequest 是否微信客户端发出的请求，默认false
 * @param {boolean=false} IsUseWeiXinSDKUpdatePic 是否使用微信的API上传图片，默认false
 * @param {boolean=true} IsBase64StringToImage 是否把图片转换成Base64然后上传到服务端，默认true
 * @param {number=60000} ImageUpdateTimeout ajax上传超时时间，默认60秒
 * @param {number=0.8} quality 图片压缩率，默认0.8
 * @param {string=null} ImgDirectory 上传至服务器的文件夹名，默认为当前页面的文件名
 * @param {string=''}  ImageServer 图片服务器的域名，默认为空
 * @param {boolean=false} IsImageServer 是否上传至其它域名保存，默认为false
 * @param {function=} [callback] 上传完成后的回调函数,无论成功与否
 * **/

function compressor(opt) {
  console.log('参数，', opt)
  opt = Object.assign({
    maxCount: 5,
    prefix: 'fileData',
    afterWidth: 1000,
    IsWeixinClientRequest: false,
    IsUseWeiXinSDKUpdatePic: false,
    IsBase64StringToImage: true,
    ImageUpdateTimeout: 60000,
    quality: 0.8,
    model: 1,
    viewClickEvent: 'enlarge',
    callback: function (data) {}
  }, opt);
  // 如果 opt.viewClickEvent === 'enlarge' 的话，添加放大容器
  if (opt.viewClickEvent === 'enlarge') {
    console.log('添加方法容器');
    var divMark = document.createElement('div');
    divMark.setAttribute('style', "position: fixed;top: 0;bottom: 0;left: 0;right: 0;background-color: rgba(0, 0, 0, .5);display: none;z-index: 99;");
    divMark.innerHTML = '<div id="enlarge" style="width: 80%;margin: 30px auto;position: relative;"><img src="" alt="" style="display: block;width:100%;height:' + (window.screen.height - 200) + 'px;"><span id="del" style="position: absolute;bottom: -22px;width: 50%;text-align: center;cursor: pointer;color: #333;border-radius: 5px;left: 0;background-color: rgb(250, 125, 42);">删除</span><span id="revise" style="position: absolute;bottom: -22px;width: 50%;text-align: center;cursor: pointer;color: #333;border-radius: 5px;right: 0;background-color: rgb(115, 255, 0);">修改<input type="file" accept="image/*" style="opacity:  0;position:  absolute;left:  0;right:  0;top: 0;bottom:  0;width:  100%;height:  100%;"></span></div>';
    document.body.appendChild(divMark);
    var inputBoxList = document.getElementsByClassName(opt.inputBoxClass);
    divMark.addEventListener('click', function (e) {
      if (e.target.id === 'del') {
        if (confirm('确认删除图片吗？')) {
          this.style.display = 'none';
          var viewIndex = this.dataset.index;
          var viewList = inputBoxList[0].parentNode.querySelectorAll('.' + opt.viewClass);
          if (opt.model == 2) {
            inputBoxList[viewIndex].style.display = 'block';
            opt.e.target.parentNode.removeChild(opt.e.target);
          } else {
            // 重新排列input:hidden的name属性
            for (var i = viewIndex; i < viewList.length; i++) {
              viewList[i].getElementsByTagName('input')[0].name = opt.prefix + (i - 1);
            }
            viewList[viewIndex].parentNode.removeChild(viewList[viewIndex]);
            checkMax(opt);
          }
        }
      } else {
        this.style.display = 'none';
      }
      opt.e = null;
    });
    divMark.getElementsByTagName('input')[0].addEventListener('change', function (e) {
      e.target.dataset.index = divMark.dataset.index;
      opt.revise = true;
      if (opt.model == 2) {
        inputBoxList[divMark.dataset.index].getElementsByTagName('input')[0].onchange(e);
      } else {
        inputBoxList[0].getElementsByTagName('input')[0].onchange(e);
      }
    })
    opt.divMark = divMark;
  }
  // 绑定点击事件
  console.log('添加点击事件');
  var inputBoxList = document.getElementsByClassName(opt.inputBoxClass);
  inputBoxList[0].parentNode.addEventListener('click', function (e) {
    if (e.target.tagName.toLowerCase() !== 'li') return;
    var viewList = this.querySelectorAll('.' + opt.viewClass);
    var eIndex = Array.prototype.indexOf.call(viewList, e.target);
    if (opt.viewClickEvent === 'enlarge') { //放大图片
      opt.divMark.style.display = 'block';
      opt.divMark.getElementsByTagName('img')[0].setAttribute('src', e.target.dataset.imgsrc);
      console.log(e.target.dataset.index)
      opt.divMark.setAttribute('data-index', e.target.dataset.index);
      opt.e = e;
    } else if (opt.viewClickEvent === 'del') { //删除图片
      if (confirm('确认删除图片吗？')) {
        if (opt.model == 2) {
          console.dir(e.target)
          var liIndex = e.target.dataset.index;
          document.getElementsByClassName(opt.inputBoxClass)[liIndex].style.display = 'block';
          this.removeChild(e.target);
        } else {
          // 重新排列input:hidden的name属性
          for (var i = eIndex; i < viewList.length; i++) {
            viewList[i].getElementsByTagName('input')[0].name = opt.prefix + (i - 1);
          }
          this.removeChild(e.target);
          checkMax(opt);
        }
      }
    }
  });
  //如果是使用微信
  if (opt.IsWeixinClientRequest && opt.IsUseWeiXinSDKUpdatePic && wx) {
    console.log('调用微信');
    if (WxVision > '6.5.0' && !IsWinWechat) {
      console.log('调用微信接口......');
      wxcompress(opt);
    } else {
      console.log('调用原生接口1');
      localcompress(opt);
    }
  } else {
    console.log('调用原生接口2');
    localcompress(opt);
  }
}
// export default compressor
