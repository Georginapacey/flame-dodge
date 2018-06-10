function Game(canvasElement, obstacleAmount, numberAmount, pScore) {
    this.ctx = canvasElement.getContext("2d");
    this.background = new Background(this.ctx);
    this.player = new Player(this.ctx);
    this.margin = 20;
    this.obstacleCollection = new ObstacleCollection(this.ctx, obstacleAmount, this.player, this.margin);
    this.numberCollection = new NumberCollection(this.ctx, numberAmount, this.player, this.margin);
    this.canvasElement = canvasElement;
    this.obstacleAmount = obstacleAmount;
    this.numberAmount = numberAmount;
    this.intervalId = null;
    this.setKeyboardListeners();
    this.score = pScore == null ? 0 : pScore;
    this.scoreBox = new ScoreBox(this.ctx);

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
    this.background.draw();
    this.player.draw();
    this.scoreBox.draw(this.score);
    this.obstacleCollection.draw();
    this.numberCollection.draw();

}

Game.prototype.moveAll = function() {
    this.player.move();
    this.obstacleCollection.move();

}

Game.prototype.checkGameOver = function() {

    if (this.obstacleCollection.checkCollisions(this.player)) {
        this.player.img.frames = 1;
        this.player.img.src = "img/bubble-die.png";
        setTimeout(function() { 
            this.gameOver();
        }.bind(this), 100);
        
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
            (number.x <= this.player.x + this.player.w) && (this.player.x <= number.x + number.w) && (this.player.y + this.player.h >= number.y) && (this.player.y <= number.y + number.w)
        ){
            //check if collided number is the first one in the list
            if (i == 0){
                //later we will use this to change emotion
                this.player.img.frames = 7;
                this.player.img.src = "img/happy-bubble-sprite.png";
                this.delay();
                this.numberCollection.numbers.splice(i,1);
                this.numberCollection.numbersCollected++;
                this.score++;    
            }
            
        }
    });
    
};



 Game.prototype.delay = function() {
    setTimeout(function() { 
        this.player.img.frames = 1;
        this.player.img.src = "img/bubble.png";
    }.bind(this), 700);
} 
Game.prototype.nextLevel = function() {
    if (this.numberCollection.numbers.length <= 0) {
        this.stop();
        //is it ok to call a new Game within game prototype
        new Game(this.canvasElement, this.obstacleAmount + 1, this.numberAmount + 1, this.score).start();
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
