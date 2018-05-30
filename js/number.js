function Number(ctx, number) {

    this.ctx = ctx;
    this.x = 300;
    this.y = 300;
    this.radius = 20;
    this.r = this.radius;
    
    this.number = number;
    this.textStyle = "20px sans-serif";
    
}

Number.prototype.draw = function(){
    this.ctx.beginPath();
    this.ctx.arc(
      this.x,
      this.y,
      this.radius,
      0,
      Math.PI * 2
    )
  
    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fillStyle ="#fff";
    this.ctx.fill();
    this.ctx.fillStyle = "#000";
    this.ctx.font = this.textStyle;

    this.ctx.fillText(this.number, (this.x - 5), (this.y + 5), 100);



};

