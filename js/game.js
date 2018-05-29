function Game(canvasElement) {
    this.ctx = canvasElement.getContext("2d");
    this.player = new Player(this.ctx);
    this.obstacleCollection = new ObstacleCollection(this.ctx);

    this.intervalId = null;

    this.setKeyboardListeners();
 
}



Game.prototype.start = function() {
    this.intervalId = setInterval(function() {
        this.clear();
        this.drawAll();

        this.moveAll();

    }.bind(this), 16);
};


Game.prototype.drawAll = function() {
    this.player.draw();
    this.obstacleCollection.draw();
}

Game.prototype.moveAll = function() {
    this.player.move();
}

Game.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
};


Game.prototype.setKeyboardListeners = function() {
    document.onkeydown = function(event) {
        this.player.onKeyDown(event.keyCode);
    }.bind(this);
    document.onkeyup = function(event) {
        this.player.onKeyUp(event.keyCode);
    }.bind(this);

};

