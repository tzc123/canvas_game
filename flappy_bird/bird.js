var bird = {
  bird: [imgs.bird0,imgs.bird1],//正常状态，图片
  up_bird: [imgs.up_bird0,imgs.up_bird1],//向上飞状态
  down_bird: [imgs.down_bird0,imgs.down_bird1],//向下掉状态
  posX: 100,//横坐标
  posY: 200,//纵坐标Y
  speed: 0,//速度
  index: 0,//翅膀挥动，切换图片的标
  alive: true,//存活状态
  //绘制小鸟
  draw: function (bird) {
    ctx.drawImage(bird,this.posX,this.posY);
  },
  //飞行中
  fly: function () {
    //纵坐标随速度改变
    this.posY+=this.speed;
    //加速度为1
    this.speed++;
    //如果坠地，死亡
    if(this.posY >= 395){
      this.speed = 0;
      this.draw(this.bird[this.index]);
      this.dead();
    }
    //如果撞顶，弹回来
    if(this.posY <= 0){
      this.speed = 6;
    }
    //如果速度为正，则向下，反之，则向上，否则水平
    if(this.speed>0){
      this.draw(this.down_bird[this.index]);
    }else if(this.speed<0){
      this.draw(this.up_bird[this.index]);
    }else{
      this.draw(this.bird[this.index]);
    }
    //确保坠落速度不会太快
    if(bird.speed > 6){
      bird.speed = 6;
    }
  },
  //煽动翅膀，切换图片
  wingWave: function () {
    this.index++;
    if(this.index > 1){
      this.index = 0;
    }
  },
  //死亡
  dead: function() {
    this.alive = false;
  }
}
