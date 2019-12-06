const gameFPS = 10;
const canvas = document.getElementById("snake"); //De vorm van de Canvas
var context = canvas.getContext("2d");
const width = 400;
const height = 400;
var score = 0;
var snake = {
    x: 10,
    y: 10,
    tail: 3,
    snaketrail: []
};
var gameWorld = {
    tileSize: 20,
    borderSize: 20,
    movementX: 0,
    movementY: 0
};
let keys = [];
var apple = {
    x: 15,
    y: 15,
    width: 20,
    height: 20
};

canvas.width = width;
canvas.height = height;

function update(){
    snake.x = snake.x + gameWorld.movementX;
    snake.y = snake.y + gameWorld.movementY;
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
    //De Slang
    context.fillStyle = "green";
    for(var i = 0; i < snake.snaketrail.length; i++){
        context.fillRect(
            snake.snaketrail[i].x * gameWorld.tileSize,
            snake.snaketrail[i].y * gameWorld.tileSize,
            gameWorld.tileSize,
            gameWorld.tileSize 
        );
        //Code voor als de slang zijn eigen staart bijt
        if(snake.snaketrail[i].x == snake.x && snake.snaketrail[i].y == snake.y){
            snake.tail = 3; 
        }
    }
    
    snake.snaketrail.push({
        x: snake.x,
        y: snake.y
    });
    
    while(snake.snaketrail.length > snake.tail){
        snake.snaketrail.shift();
    }
    
    //Code voor als de snake buiten de border gaat
    if (snake.x < 0){
        snake.x = gameWorld.borderSize - 1;
    }
    if(snake.x > gameWorld.borderSize -1){
        snake.x = 0;
    }
    if(snake.y < 0){
        snake.y = gameWorld.borderSize - 1;
    }
    if(snake.y > gameWorld.borderSize -1){
        snake.y = 0;
    }
    //De appel      
    context.fillStyle = "red";
    context.fillRect(apple.x * gameWorld.tileSize,
        apple.y * gameWorld.tileSize,
        apple.width,
        apple.height
    );
    //Code voor als de slang de appel eet
    while (apple.x == snake.x && apple.y == snake.y) {
        snake.tail++;
        apple.x = Math.floor(Math.random() * gameWorld.tileSize);
        apple.y = Math.floor(Math.random() * gameWorld.tileSize);
    }
}

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});
setInterval(update, 1000 / gameFPS);