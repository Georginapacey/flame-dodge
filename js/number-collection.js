function NumberCollection(ctx, numbersCount) {
    this.ctx = ctx;
    
    this.numbers = [];
    this.numbersCollected = 0;

    for (var i = 0; i < numbersCount; i++) {
        this.numbers.push(new Number(this.ctx));
    }

}

NumberCollection.prototype.draw = function() {
    this.numbers.forEach(function(n) {
        n.draw();
    });
    
}

/* NumberCollection.prototype.numbersCaughtTotal = function() {

    for (var i = 0; i < this.numbers.length; i++) {
        if (true){
            this.numbersCollected++;
        }
        console.log(this.numbersCollected);
    }
}; */
    
NumberCollection.prototype.numbersCaught = function(p) {

    return this.numbers.some(function(n, i){
        return (n.x <= p.x + p.w) && (p.x <= n.x + n.r) && (p.y + p.h >= n.y) && (p.y <= n.y + n.r);
                /* var nx = (n.x <= p.x + p.w) && (p.x <= n.x + n.r);
        var ny = (p.y + p.h >= n.y) && (p.y <= n.y + n.r);
        
        return nx && ny  */
    });
    
};

/* NumberCollection.prototype.remove = function(index){
    this.numbers.splice(i, 1);
} */