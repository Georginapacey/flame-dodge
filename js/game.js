function Game(canvasElement, obstacleAmount, numberAmount) {
    this.ctx = canvasElement.getContext("2d");
    this.player = new Player(this.ctx);
    this.margin = 20;
    this.obstacleCollection = new ObstacleCollection(this.ctx, obstacleAmount, this.player, this.margin);
    this.numberCollection = new NumberCollection(this.ctx, numberAmount, this.player, this.margin);
    this.canvasElement = canvasElement;
    this.obstacleAmount = obstacleAmount;
    this.numberAmount = numberAmount;
    this.intervalId = null;
    this.setKeyboardListeners();
}

Game.prototype.start = function() {
    this.intervalId = setInterval(function() {
        this.clear();
        this.drawAll();
        
        this.checkGameOver();
        this.nextLevel();

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
    this.obstacleCollection.move();

}

Game.prototype.checkGameOver = function() {
    if (this.obstacleCollection.checkCollisions(this.player)) {
        this.gameOver();
    }
};

Game.prototype.gameOver = function() {
    clearInterval(this.intervalId);

    if (confirm("GAME OVER! Play again?")) {
        location.reload();
    }
};

Game.prototype.stop = function() {
    clearInterval(this.intervalId);
};

Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);


    
    this.numberCollection.numbers.forEach((number, i) => {

        
        
        if(
            (number.x <= this.player.x + this.player.w) && (this.player.x <= number.x + number.r) && (this.player.y + this.player.h >= number.y) && (this.player.y <= number.y + number.r)
        ){
            if (i == 0){
                this.numberCollection.numbers.splice(i,1);
                this.numberCollection.numbersCollected++;
                console.log(this.numberCollection.numbers.length);
            }
            
            
        }
    });
    
};

Game.prototype.nextLevel = function() {
    if (this.numberCollection.numbers.length <= 0) {
        this.stop();
        //is it ok to call a new Game within game prototype
        new Game(this.canvasElement, this.obstacleAmount + 1, this.numberAmount + 1).start();
    }
};


Game.prototype.setKeyboardListeners = function() {
    document.onkeydown = function(event) {
        this.player.onKeyDown(event.keyCode);
    }.bind(this);
    document.onkeyup = function(event) {
        this.player.onKeyUp(event.keyCode);
    }.bind(this);

};

