var express = require('express'),fs = require('fs'),path = require('path'),multer = require("multer");
let app = express();
var bodyParser = require('body-parser');
var upload = multer({dest:'./public/Images',limits: { fieldSize: 25 * 1024 * 1024 }});
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
  else  next();
});
app.post('/upData',upload.single('file'),(req,res)=>{
  var ImageDataBase64 = req.body.ImageDataBase64.replace(/^data:image\/png;base64,/,'');
  var imgPhath = `/public/Images/${Date.now()}.png`;
  fs.writeFile(path.join(__dirname, imgPhath),ImageDataBase64, "base64",(err)=>{
    res.send({id:1,url:'http://'+req.headers.host+imgPhath});//返回信息自己定义
  });
});
app.listen(3011,()=>{
  console.log('上传文件服务启动于：3011 端口')
});
