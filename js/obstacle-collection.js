function ObstacleCollection(ctx) {
    this.ctx = ctx;

    this.obstacles = [];


}

ObstacleCollection.prototype.draw = function() {
    this.generateObstacle();

    this.obstacles.forEach(function(o) {
        o.draw();
    });
    
}

ObstacleCollection.prototype.generateObstacle = function() {
    this.obstacles.push(
        new Obstacle(this.ctx, testx, 0)

    );

}

ObstacleCollection.prototype.returnRandomPosition = function(){   

    randomPosition = function(min,max){   
        return Math.floor(Math.random()*(max-min+1)+min);

    }
    return randomPosition(0,50);


}.bind(this)

var testx = ObstacleCollection.prototype.returnRandomPosition();