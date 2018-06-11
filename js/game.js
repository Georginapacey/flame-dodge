function Game(canvasElement, obstacleAmount, numberAmount, pScore, speed) {
    this.ctx = canvasElement.getContext("2d");
    this.background = new Background(this.ctx);
    this.player = new Player(this.ctx);
    this.margin = 20;
    this.speed = speed ? speed : 1;
    this.obstacleCollection = new ObstacleCollection(this.ctx, obstacleAmount, this.player, this.margin, this.speed);
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
        }.bind(this), 200);
        
    }

};

Game.prototype.gameOver = function() {
    clearInterval(this.intervalId);

    document.getElementById("gameover-page").style.display = "block";
    if (document.getElementById("gameover-page").style.display === "block") {
        this.gameOverInfo();
        
        document.getElementById("play-again").onclick = function() {
            console.log(this.canvasElement);
            location.reload();
             /* setTimeout(function() { 
                document.getElementById("gameover-page").remove();
                
                new Game(this.canvasElement, 2, 3).start();
            }.bind(this), 700);  */
        };
    }
    /*  if (confirm("GAME OVER! Play again?")) {
        location.reload();
    }  */
};

Game.prototype.gameOverInfo = function() {

    var currentGameScore = this.score;
    
    document.getElementById("score").innerText = currentGameScore;
    var topScore = localStorage.getItem("High score") ? localStorage.getItem("High score") : 0;
    if (currentGameScore > topScore) {
        topScore = localStorage.setItem("High score", this.score);
        document.getElementById("new-top-score").style.display = "inline-block";
        
    } else {
        document.getElementById("top-score").innerText = topScore;
    }
    
} 

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
        this.fasterLevel();
    }
};

//conditional to increase speed when you get to level 5
Game.prototype.fasterLevel = function() {
    var speedIncrease;
    if (this.obstacleAmount >= 6) {
        speedIncrease = 1;
    } else {
        speedIncrease = 0;
    }
    var newGame = new Game(this.canvasElement, this.obstacleAmount + 1, this.numberAmount + 1, this.score, this.speed + speedIncrease).start();
};

Game.prototype.setKeyboardListeners = function() {
    document.onkeydown = function(event) {
        this.player.onKeyDown(event.keyCode);
    }.bind(this);
};