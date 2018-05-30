function NumberCollection(ctx) {
    this.ctx = ctx;
    
    this.numbers = [];


}

NumberCollection.prototype.draw = function() {
    this.generateNumber();

    this.numbers.forEach(function(n) {
        n.draw();
    });
    
}

NumberCollection.prototype.generateNumber = function() {
    this.numbers.push(
        new Number(this.ctx, "1")
    );
    
}
