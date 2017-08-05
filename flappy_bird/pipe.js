//水管类
class Pipe {
  constructor(up_pipe,up_mod,down_pipe,down_mod) {
    //构造函数
    this.up_pipe = up_pipe;//上水管头部
    this.up_mod = up_mod;//上水管中间部分
    this.down_pipe = down_pipe;
    this.down_mod = down_mod;
    this.up_height = Math.floor(Math.random()*60);//随机生成上管体高度
    this.down_height = (60 - this.up_height)*3;//保证所有上下水管距离相同
    this.posX = 300;//横坐标
    this.up_posY = this.up_height*3+this.up_pipe.height;//上水管纵坐标
    this.down_posY = 362-this.down_height;//下水管纵坐标
    this.hadSkipped = false;//是否被越过
    this.hadSkippedChange = false;//去重
  }
  //绘制水管
  drawPipe() {
    ctx.drawImage(this.up_pipe,this.posX,this.up_height*3);
    ctx.drawImage(this.down_pipe,this.posX,362-this.down_height);
  }
  //绘制管体
  drawMods() {
    for(var i=0;i<this.up_height;i++){
      ctx.drawImage(this.up_mod,this.posX,i*3)
    }
    for(var j=0;j<this.down_height;j++){
      ctx.drawImage(this.down_mod,this.posX,362-this.down_height+this.down_pipe.height+j);
    }
  }
  //水管移动
  move() {
    this.posX -= 6;
    this.drawMods();
    this.drawPipe();
  }
}
