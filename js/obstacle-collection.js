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

ObstacleCollection.prototype.checkCollisions = function(p) {
    return this.obstacles.some(function(o){
        var cx = (o.x + o.w >= p.x);
        var cy = (p.y <= o.y + o.h);
        return cx && cy
    })
};
  

ObstacleCollection.prototype.generateObstacle = function() {
    this.obstacles.push(
        new Obstacle(this.ctx, 100, 100)
    );
    
}
