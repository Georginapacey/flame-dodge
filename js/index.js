window.onload = function() {
    var canvas = document.getElementById("gameCanvas");

    canvas.width = 700;
    canvas.height = 700;

    //I think this is not needed because I've put the canvas in the HTML
    //document.body.prepend(canvas);

    document.getElementById("start-page").onclick = function() {
        document.getElementById("start-page").remove();
        new Game(canvas, 2, 2, 2).start();
    };
 
}
