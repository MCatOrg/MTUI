console.log('图片上传服务')
const Koa = require('koa');
const multer = require('koa-multer');
const route = require('koa-route');
var cors = require('koa2-cors');
const app = new Koa();
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploadImg/')
  },
  filename: function (req, file, cb) {
    var fileFormat = (file.originalname).split(".");
    cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})
//加载配置
var upload = multer({
  storage: storage
});
app.use(cors());
//路由
app.use(route.get('/ww',(ctx, next) => {
  console.log('地方地方')
}))
app.use(route.post('/upload', upload.single('file'), async (ctx, next) => {
  ctx.body = {
    filename: ctx.req.file.filename //返回文件名
  }
}))

app.listen(3000);
