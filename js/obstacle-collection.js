function ObstacleCollection(ctx, obstaclesCount) {
    this.ctx = ctx;
    
    this.obstacles = [];

    for (var i = 0; i < obstaclesCount; i++) {
        this.obstacles.push(new Obstacle(this.ctx));
    }
}

ObstacleCollection.prototype.draw = function() {
    this.obstacles.forEach(function(o) {
        o.draw();
    });
}

ObstacleCollection.prototype.checkCollisions = function(p) {
    
    return this.obstacles.some(function(o){
        
        var cx = (o.x <= p.x + p.w) && (p.x <= o.x + o.w);
        var cy = (p.y + p.h >= o.y) && (p.y <= o.y + o.h);
        return cx && cy 
    });
    
};
    

