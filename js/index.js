window.onload = function() {
    var canvas = document.createElement("canvas");

    canvas.width = 750;
    canvas.height = 750;

    document.body.prepend(canvas);

    new Game(canvas).start();
}