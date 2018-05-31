function Game(canvasElement) {
    this.ctx = canvasElement.getContext("2d");
    this.player = new Player(this.ctx);
    //change second argument to level number
    this.obstacleCollection = new ObstacleCollection(this.ctx, 1);
    this.numberCollection = new NumberCollection(this.ctx, 4);


    this.intervalId = null;
    this.setKeyboardListeners();

}

Game.prototype.start = function() {
    this.intervalId = setInterval(function() {
        this.clear();
        this.drawAll();
        
        this.checkGameOver();

        /*  this.nextLevel();*/

        this.moveAll();

    }.bind(this), 16);
};

Game.prototype.drawAll = function() {
    this.player.draw();
    this.obstacleCollection.draw();
    this.numberCollection.draw();

}

Game.prototype.moveAll = function() {
    this.player.move();
}

Game.prototype.checkGameOver = function() {
    if (this.obstacleCollection.checkCollisions(this.player)) {
        this.gameOver();
    }
};
/* Game.prototype.nextLevel = function() {
    if (this.numberCollection.numbersCaught(this.player)) {
        this.numberCollection.numbersCollected++;
        console.log(this.numberCollection.numbersCollected)
    }

} */



Game.prototype.gameOver = function() {
    clearInterval(this.intervalId);

    if (confirm("GAME OVER! Play again?")) {
        location.reload();
    }
};

Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.numberCollection.numbers.forEach((number ,i) => {
        if(
            (number.x <= this.player.x + this.player.w) && (this.player.x <= number.x + number.r) && (this.player.y + this.player.h >= number.y) && (this.player.y <= number.y + number.r)
        ){
            this.numberCollection.numbers.splice(i,1);
        }
    });
    
};

Game.prototype.setKeyboardListeners = function() {
    document.onkeydown = function(event) {
        this.player.onKeyDown(event.keyCode);
    }.bind(this);
    document.onkeyup = function(event) {
        this.player.onKeyUp(event.keyCode);
    }.bind(this);

};

