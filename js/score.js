function ScoreBox(ctx) {

    this.ctx = ctx;
    
    this.w = 120;
    this.h = 50;
    this.x = this.ctx.canvas.width - this.w;
    this.y = 0;
    
    this.textStyle = "16px Bubbler One";    
}

ScoreBox.prototype.draw = function(score){
    this.ctx.fillStyle = "rgba(125,125,125,0.5)";

    this.ctx.fillRect(this.x, this.y, this.w, this.h);

    this.ctx.font = this.textStyle;
    this.ctx.fillStyle = "#fff";
    this.ctx.fillText("SCORE: " + score, (this.x + 10), (this.y + this.h / 1.5), 100);

};