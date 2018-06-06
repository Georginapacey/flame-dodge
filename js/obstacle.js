function Obstacle(ctx, x, y) {
    this.ctx = ctx;

    this.w = this.ctx.canvas.width / 10;
    this.h = this.w;

    this.x = x ? x : Math.floor(Math.random()* ((this.ctx.canvas.width - this.w) - this.w) + this.w);
    this.y = y ? y : Math.floor(Math.random()* ((this.ctx.canvas.height - this.h) - this.h) + this.h);

    this.vx = Math.random()* (1 - 0.5) + 0.5;
    this.vy = Math.random()* (1 - 0.5) + 0.5;

    this.img = new Image();
    this.img.src = "img/flame-sprite.png";

    this.img.frames = 5;
    this.img.frameIndex = 0;
    this.img.animateEvery = 5;

    this.drawCount = 0;

}

Obstacle.prototype.draw = function(){
    this.drawCount++;

    this.ctx.drawImage(
        this.img,
        this.img.frameIndex * this.img.width / this.img.frames,
        0,
        this.img.width / this.img.frames,
        this.img.height,
        this.x,
        this.y,
        this.w,
        this.h
    )
};

Obstacle.prototype.move = function(){
    if(this.drawCount % this.img.animateEvery === 0){
        this.animate();

        this.drawCount = 0;
    }

    this.x += this.vx;
    //TO FIX: -10 because image has it's own padding?
    if (this.x + (this.w - 10) > this.ctx.canvas.width ||
        this.x < 0) {
      this.vx *= -1;
    }

    this.y += this.vy;

    if (this.y + this.h > this.ctx.canvas.height ||
        this.y < 0) {
      this.vy *= -1;
    }
};

Obstacle.prototype.animate = function() {
    this.img.frameIndex++;

    if (this.img.frameIndex >= this.img.frames) {
        this.img.frameIndex = 0;
    }
};