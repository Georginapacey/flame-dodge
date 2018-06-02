function ObstacleCollection(pCtx, pObstaclesCount, pPlayer, pMargin) {
    this.ctx = pCtx;

    this.obstacles = [];

    this.obstaclesCount = pObstaclesCount;

    this.player = pPlayer;

    this.margin = pMargin;

    this.createObstacles();
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

    
}

ObstacleCollection.prototype.createObstacles = function() {
    var obstacleAux;
    for (var i = 0; i < this.obstaclesCount; i++) {
        obstacleAux = new Obstacle(this.ctx);
        while (!this.isFarFromPlayer(obstacleAux, this.player)) {
            obstacleAux = new Obstacle(this.ctx);
        }
        this.obstacles.push(obstacleAux);
        

    }
    return this.obstacles;       
}

ObstacleCollection.prototype.isFarFromPlayer = function(o, p) {   

    var initialPlayerBoundaryX = p.x - this.margin;
    var initialPlayerBoundaryY = p.y - this.margin;
    var finalPlayerBoundaryX = p.x + p.w + this.margin;
    var finalPlayerBoundaryY = p.y + p.h + this.margin;

    var cx = (o.x <= finalPlayerBoundaryX) && (initialPlayerBoundaryX <= o.x + o.w);
    var cy = (finalPlayerBoundaryY >= o.y) && (initialPlayerBoundaryY <= o.y + o.h);

    return !(cx && cy);

}

