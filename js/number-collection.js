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

