function NumberCollection(pCtx, pNumbersCount, pPlayer, pMargin) {
    this.ctx = pCtx;
    
    this.numbers = [];
    this.numbersCollected = 0;

    this.numbersCount = pNumbersCount;

    this.player = pPlayer;
    
    this.margin = pMargin;

    this.createNumbers();

}

NumberCollection.prototype.draw = function() {
    this.numbers.forEach(function(n) {
        n.draw();
    });
    
}

NumberCollection.prototype.createNumbers = function() {
    var numberAux;
    for (var i = 0; i < this.numbersCount; i++) {
        numberAux = new Number(this.ctx, i + 1);
        while (!this.isFarFromPlayer(numberAux, this.player)) {
            numberAux = new Number(this.ctx, i + 1);
        }
        this.numbers.push(numberAux);
        

    }
    return this.numbers;       
}

NumberCollection.prototype.isFarFromPlayer = function(n, p) {   

    var initialPlayerBoundaryX = p.x - this.margin;
    var initialPlayerBoundaryY = p.y - this.margin;
    var finalPlayerBoundaryX = p.x + p.w + this.margin;
    var finalPlayerBoundaryY = p.y + p.h + this.margin;

    var cx = (n.x <= finalPlayerBoundaryX) && (initialPlayerBoundaryX <= n.x + n.w);
    var cy = (finalPlayerBoundaryY >= n.y) && (initialPlayerBoundaryY <= n.y + n.w);

    return !(cx && cy);

}
