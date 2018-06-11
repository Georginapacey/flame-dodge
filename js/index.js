window.onload = function() {
    startGame("start-page");
 
}

function startGame(page) {

    var canvas = document.getElementById("gameCanvas");
    
    canvas.width = 700;
    canvas.height = 700;
    
    //I think this is not needed because I've put the canvas in the HTML
    //document.body.prepend(canvas);
    
    document.getElementById(page).onclick = function() {
        document.getElementById(page).style.display = "none";
        new Game(canvas, 2, 2, 1).start();
    };
}
