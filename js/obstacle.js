function Obstacle(ctx, x, y) {
    this.ctx = ctx;

    this.y = y;

    this.w = this.ctx.canvas.width / 20;
    this.h = this.w * 1.5;

    this.vx = 0;
    this.vy = 0;

    this.img = new Image();
    this.img.src = "img/tinder.svg";

    this.x = x;

    
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


//how to I get this to be my x?
Obstacle.prototype.randomPosition = function(min,max){   
    return Math.floor(Math.random()*(max-min+1)+min);
}

