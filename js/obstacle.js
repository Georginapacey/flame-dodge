function Obstacle(ctx, x, y) {
    this.ctx = ctx;

    this.x = x ? x : Math.floor(Math.random()* this.ctx.canvas.width);
    this.y = y ? y :Math.floor(Math.random()* this.ctx.canvas.height);

    this.w = this.ctx.canvas.width / 20;
    this.h = this.w * 1.5;

    this.vx = 0;
    this.vy = 0;

    this.img = new Image();
    this.img.src = "img/tinder.svg";
}

Obstacle.prototype.draw = function(){
    this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
    )
};

