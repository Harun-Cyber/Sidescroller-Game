const gameFPS = 15;
const canvas = document.getElementById("snake"); //De vorm van de Canvas
var context = canvas.getContext("2d");
const width = 400;
const height = 400;
var score = 0;
var snake = {
    x: 10,
    y: 10,
    snakeSize: 3,
    snaketrail: []
};
var gameWorld = {
    tileSize: 20,
    borderSize: 20,
    movementX: 0,
    movementY: 0
};
let keys = [];
var apple = []
apple.push({
    x: Math.random(),
    y: Math.random(),
    width: 15,
    height: 15
});

canvas.width = width;
canvas.height = height;

function update(){
    if (keys[38]) {
        // Up Arrow toets
        gameWorld.movementX = 0;
        gameWorld.movementY = -1;
    }
    if (keys[39]) {
        // Right Arrow toets
        gameWorld.movementX = 1;
        gameWorld.movementY = 0;
    }
    if (keys[37]) {
        // Left Arrow toets
        gameWorld.movementX = -1;
        gameWorld.movementY = 0;
    }
    if (keys[40]) {
        // Down Arrow toets
        gameWorld.movementX = 0;
        gameWorld.movementY = 1;
    }
    snake.x = snake.x + gameWorld.movementX;
    snake.y = snake.y + gameWorld.movementY;
    
    //Code voor als de snake buiten de border gaat
    if (snake.x < 0){
        snake.x = gameWorld.borderSize - 1;
    }
    if(snake.x > gameWorld.borderSize -1){
        snake.x = 0;
    }
    if(snake.y < 0){
        snake.y = gameWorld.borderSize -1;
    }
    if(snake.y > gameWorld.borderSize -1){
        snake.y = 0;
    }

//De appel
context.fillStyle = "red";
context.beginPath(); 

    for (var i = 0; i < apple.length; i++) {
        context.fillRect(apple[i].x, apple[i].y, apple[i].width, apple[i].height);
        var dir = CollisionChecker(player, apple[i]);

        if (dir === "l" || dir === "r" || dir === "b" || dir === "t") {
            apple[i].x = Math.random();
            apple[i].y = Math.random();          
        }
    }
    context.fill();
}
function CollisionChecker(ShapeA, ShapeB) {
    //Krijgt de positie van het midden van de speler
    var playerX = (ShapeA.x + (ShapeA.width / 2)) - (ShapeB.x + (ShapeB.width / 2)),
        playerY = (ShapeA.y + (ShapeA.height / 2)) - (ShapeB.y + (ShapeB.height / 2)),
        //Voeg de half witdhs en half heights van de objecten toe
        hWidths = (ShapeA.width / 2) + (ShapeB.width / 2),
        hHeights = (ShapeA.height / 2) + (ShapeB.height / 2),
        colDir = null;

    //If playerX en PlayerY minder dan de half width of half height zijn, dan moeten die in het object zijn. Hierdoor komt er een collision
    if (Math.abs(playerX) < hWidths && Math.abs(playerY) < hHeights) { // berekent vanuit welke kant de collision plaatsvind (top, bottom, left, or right)         
        var objectX = hWidths - Math.abs(playerX),
            objectY = hHeights - Math.abs(playerY);
        if (objectX >= objectY) {
            if (playerY > 0) {
                colDir = "t";
                ShapeA.y = ShapeA.y + objectY;
            } else {
                colDir = "b";
                ShapeA.y = ShapeA.y - objectY;
            }
        } else {
            if (playerX > 0) {
                colDir = "l";
                ShapeA.x = ShapeA.x + objectX;
            } else {
                colDir = "r";
                ShapeA.x = ShapeA.x - objectX;
            }
        }
    }
    return colDir;
}

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});
var intervalID = setInterval(update, 1000 / gameFPS);