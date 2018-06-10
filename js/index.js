window.onload = function() {
    var canvas = document.getElementById("gameCanvas");

    canvas.width = 700;
    canvas.height = 700;

    document.body.prepend(canvas);

    document.getElementById("start-page").onclick = function() {
        document.getElementById("start-page").remove();
        new Game(canvas, 2, 3).start();
    };
    
}