window.onload = function() {
    var canvas = document.createElement("canvas");

    canvas.width = 700;
    canvas.height = 700;

    document.body.prepend(canvas);

    new Game(canvas, 2, 2).start();
}