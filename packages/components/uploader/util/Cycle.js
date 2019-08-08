class Cycle {
  constructor(opts) {
    this.width = opts.width;
    this.border = opts.border;
    this.height = opts.height;
    this.bgcolor = opts.bgcolor;
    this.pcolor = opts.pcolor;
    this.textcolor = opts.textcolor;
    this.percent = opts.percent;
    this.fontSize=opts.fontSize;
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
  }
  // 动态扩展内置方法
  update(percent) {
    const w = this.width;
    const h = this.height;
    const deg = percent || this.percent;
    let cradius = (w / 2) - this.border;
    if(cradius<=0){
      cradius = 30;
    }
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.context.fillStyle = 'rgba(255,255,255,0.5)';
    // 绘制到画板中
    this.context.stroke();
    // 清除画布
    this.context.clearRect(0, 0, w, h);
    // 开始绘画
    this.context.beginPath();
    // 设置圆的边框
    this.context.lineWidth = this.border;
    // 绘制边框的颜色
    this.context.strokeStyle = this.bgcolor; // 实心用fillstyle对应的方法是fill()
    // 绘制圆
    this.context.arc(w / 2, h / 2, cradius, 0, 2 * Math.PI);
    // 绘制到画板中
    this.context.stroke();
    // 重新绘制
    this.context.beginPath();
    // 设置圆的边框
    this.context.lineWidth = this.border;
    // 绘制边框的颜色
    this.context.strokeStyle = this.pcolor;
    // 绘制圆
    this.context.arc(w / 2, h / 2, cradius, 1.5*Math.PI, (deg/100*2+1.5)*Math.PI);
    // 绘制到画板中
    this.context.stroke();
    // 文字
    this.context.beginPath();
    // 字体颜色
    this.context.fillStyle = this.textcolor;
    // 字体样式
    this.context.font = this.fontSize+' 微软雅黑';
    let text = '压缩中';
    if (deg < 2) {
      text = '压缩中';
    }
    if (deg === 100) {
      text = '加载中';
    } else {
      text = `${deg}%`;
    }
    // 获取文字宽度
    const textWidth = this.context.measureText(text).width;
    // 绘制文字fillText("百分比",x,y);
    this.context.fillText(text, (w / 2) - (textWidth / 2), (h / 2) + 6);
    return this;
  }
  GetImage() {
    return this.canvas.toDataURL('image/png', 1);
  }
}

export default Cycle;
