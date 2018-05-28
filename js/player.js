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
    this.y += this.vy;
}

Player.prototype.TOP = 38;
Player.prototype.DOWN = 40;
Player.prototype.LEFT = 37;
Player.prototype.RIGHT = 39;

 Player.prototype.onKeyDown = function(code) {
    switch(code) {
        case this.TOP:
        this.vy = -10;
        break;
    }
} 


Player.prototype.onKeyUp = function(code) {
    switch(code) {
        case this.TOP:
        this.vy = 0;
        break;
    }
}