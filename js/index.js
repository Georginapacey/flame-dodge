window.onload = function() {
    var canvas = document.createElement("canvas");

    canvas.width = 600;
    canvas.height = 600;

    document.body.prepend(canvas);

    new Game(canvas);
}