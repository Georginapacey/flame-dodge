function Player(ctx) {
    this.ctx = ctx;
    this.w = this.ctx.canvas.width / 10;
    this.h = this.w;

    this.x = (this.ctx.canvas.width / 2) - (this.w / 2);
    this.y = this.x;

    this.vx = 0;
    this.vy = 0;

    this.img = new Image();
    this.img.src = "img/bubble.svg";

}

Player.prototype.draw = function() {
    this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h 
    )
}

Player.prototype.move = function(){
  
    this.vy = 15;
    this.vx = 15;
}

Player.prototype.TOP = 38;
Player.prototype.DOWN = 40;
Player.prototype.LEFT = 37;
Player.prototype.RIGHT = 39;

 Player.prototype.onKeyDown = function(code) {
    switch(code) {
        case this.TOP:
        this.moveUp();
        break;
        case this.DOWN:
        this.moveDown();
        break;
        case this.LEFT:
        this.moveLeft();
        break;
        case this.RIGHT:
        this.moveRight();
        break;
    }
} 

Player.prototype.onKeyUp = function(code) {
    switch(code) {
        case this.TOP:
        case this.DOWN:
        this.vy = 0;
        break;
        case this.LEFT:
        case this.RIGHT:
        this.vx = 0;
        break;
        
    }
}

Player.prototype.moveUp = function() {
    if (this.y > 0) {
        this.y -= this.vy;
    }
}

Player.prototype.moveDown = function() {
    if ((this.y + this.h) < this.ctx.canvas.height) {
        this.y += this.vy;
    }
}

Player.prototype.moveLeft = function() {
    if (this.x > 0) {
        this.x -= this.vx;
    }
}

Player.prototype.moveRight = function() {
    if ((this.x + this.w) < this.ctx.canvas.width) {
        this.x += this.vx;
    }
}