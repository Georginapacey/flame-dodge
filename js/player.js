function Player(ctx) {
    this.ctx = ctx;
    this.w = this.ctx.canvas.width / 10;
    this.h = this.w;

    this.direction = 'default';

    this.x = (this.ctx.canvas.width / 2) - (this.w / 2);
    this.y = this.x;

    this.vx = 0;
    this.vy = 0;

    this.img = new Image();
    this.img.src = "img/bubble-sprite.svg";

    this.img.frames = 3;
    this.img.frameIndex = 0;

    this.animateEvery = 5;
    this.initialLimit = 4;
    this.limit = this.initialLimit;
    this.growing = true;

    this.drawCount = 0;

}

Player.prototype.draw = function() {
        this.drawCount++;
    //to rotate
    /*  this.ctx.save();
    this.ctx.translate(this.x, this.y);
    this.ctx.rotate(220 * Math.PI/180);  */ 

    this.ctx.drawImage(
        this.img,
        (this.img.frameIndex * this.img.width / this.img.frames),
        0,
        this.img.width / this.img.frames,
        this.img.height,
        this.x,
        this.y,
        this.w,
        this.h
    )

    // end rotate
    //this.ctx.restore();

}

Player.prototype.checkBoundaries = function(){

    if(this.x <= 0) this.x = 0
    if(this.x + this.w >= this.ctx.canvas.width) this.x = this.ctx.canvas.width - this.w;
    if(this.y <= 0) this.y = 0
    if(this.y + this.h >= this.ctx.canvas.height) this.y = this.ctx.canvas.height - this.h;

}

Player.prototype.move = function() {
    
    if(this.drawCount % this.animateEvery === 0){
        this.animate();

        this.drawCount = 0;
    } 

    this.checkBoundaries();
    this.y += this.vy;
    this.x += this.vx;

    if(this.direction == 'up') {
        this.vy = -3
    } 
    if(this.direction == 'down') {
        this.vy = 3
    }
    if(this.direction == 'left') this.vx = -3
    if(this.direction == 'right') this.vx = 3
}


 Player.prototype.animate = function() {
    if (this.limit > 0 && this.growing) {
        this.limit--;
        this.w++;
        this.x--;
        this.w++;
        this.h--;
        this.y++;
        this.h--;
    } else if (this.limit == 0) {
        this.limit++;
        this.w--;
        this.x++;
        this.w--;
        this.h++;
        this.y--;
        this.h++;
        this.growing = false;
    } else if (this.limit > 0 && this.limit < this.initialLimit && this.growing == false ) {
        this.limit++;
        this.w--;
        this.x++;
        this.w--;
        this.h++;
        this.y--;
        this.h++;
    } else if (this.limit == this.initialLimit && this.growing == false) {
        this.growing = true;
        this.limit--;
        this.w++;
        this.x--;
        this.w++;
        this.h--;
        this.y++;
        this.h--;
    }
}; 

Player.prototype.TOP = 38;
Player.prototype.DOWN = 40;
Player.prototype.LEFT = 37;
Player.prototype.RIGHT = 39;

 Player.prototype.onKeyDown = function(code) {
    switch(code) {
        case this.TOP: 
        this.direction = 'up'
        //this.moveUp();
        break;
        case this.DOWN: 
        this.direction = 'down'
        //this.moveDown();
        break;
        case this.LEFT: 
        this.direction = 'left'
        //this.moveLeft();
        break;
        case this.RIGHT: 
        this.direction = 'right'
        //this.moveRight();
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