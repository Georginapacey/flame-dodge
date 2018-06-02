function Obstacle(ctx, x, y) {
    this.ctx = ctx;

    this.w = this.ctx.canvas.width / 20;
    this.h = this.w * 1.5;

    this.x = x ? x : Math.floor(Math.random()* ((this.ctx.canvas.width - this.w) - this.w) + this.w );
    this.y = y ? y : Math.floor(Math.random()* ((this.ctx.canvas.height - this.h) - this.h) + this.h);

    this.vx = Math.random()* (1 - 0.5) + 0.5;
    this.vy = Math.random()* (1 - 0.5) + 0.5;

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

Obstacle.prototype.move = function(){
    this.x += this.vx;

    if (this.x + this.w > this.ctx.canvas.width ||
        this.x < 0) {
      this.vx *= -1;
    }

    this.y += this.vy;

    if (this.y + this.h > this.ctx.canvas.height ||
        this.y < 0) {
      this.vy *= -1;
    }
};
