function Number(ctx, numberSeries, x, y) {
    this.ctx = ctx;

    this.w = this.ctx.canvas.width / 18;
    this.h = this.w;

    this.img = new Image();
    this.img.src = "img/number-bubble.svg";

    this.x = x ? x : Math.floor(Math.random()* (this.ctx.canvas.width - this.w));
    this.y = y ? y :Math.floor(Math.random()* (this.ctx.canvas.height - this.h));
    
    this.number = numberSeries;
    
    this.textStyle = "20px sans-serif";
    
}

Number.prototype.draw = function(){
    this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h 
    )

    this.ctx.font = this.textStyle;
    this.ctx.fillStyle = "#fff";
    this.ctx.fillText(this.number, (this.x + (this.w / 2.5)), (this.y + (this.h / 1.5)), 100);

};


