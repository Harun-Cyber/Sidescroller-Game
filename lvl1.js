const gameFPS = 50;
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
const width = 1500;
const height = 700;
var player = {
    x: width / 23,
    y: height - 80,
    width: 15,
    height: 15,
    speed: 3,
    MovementX: 0,
    MovementY: 0,
    jumping: false,
    grounded: false
}
let keys = [];
var friction = 0.9;
var gravity = 0.15;
let playerchanger = []; //Array voor een object dat de uiterlijk van de speler kan veranderen
//Dimensies
playerchanger.push({
    x: 920,
    y: 335,
    width: 10,
    height: 10,
    effect: 'shrink'
});

let coins = [] //Array voor de coins die je kunt collecten
//Dimensies
coins.push({
    x: 1430,
    y: 680,
    width: 10,
    height: 10
})

let boxes = []; //Array voor de voorwerpen
//Dimensies
boxes.push({
    x: 0,
    y: 0,
    width: 10,
    height: height
});
boxes.push({
    x: 0,
    y: height - 10,
    width: width,
    height: 50
});
boxes.push({
    x: width - 10,
    y: 0,
    width: 50,
    height: height
});
boxes.push({
    x: 50,
    y: 640,
    width: 50,
    height: 50
});
boxes.push({
    x: 150,
    y: 590,
    width: 50,
    height: 100
});
boxes.push({
    x: 400,
    y: 540,
    width: 350,
    height: 150
});
boxes.push({
    x: 400,
    y: 450,
    width: 50,
    height: 10
});
boxes.push({
    x: 340,
    y: 390,
    width: 60,
    height: 10
});
boxes.push({
    x: 270,
    y: 330,
    width: 70,
    height: 10
});
boxes.push({
    x: 190,
    y: 270,
    width: 80,
    height: 10
});
boxes.push({
    x: 270,
    y: 210,
    width: 70,
    height: 10
});
boxes.push({
    x: 340,
    y: 150,
    width: 60,
    height: 10
});
boxes.push({
    x: 400,
    y: 90,
    width: 50,
    height: 10
});
boxes.push({
    x: 700,
    y: 190,
    width: 50,
    height: 10
});
boxes.push({
    x: 900,
    y: 350,
    width: 50,
    height: 10
});
boxes.push({
    x: 1230,
    y: 500,
    width: 200,
    height: 300
});
boxes.push({
    x: 1440,
    y: 500,
    width: 50,
    height: 300
});

canvas.width = width;
canvas.height = height;

function update() {
    // De toetsen
    if (keys[38]) {
        // Up Arrow toets
        if (player.jumping == false && player.grounded == true) {
            player.jumping = true;
            player.grounded = false;
            player.MovementY = -player.speed * 2;
        }
    }
    if (keys[39]) {
        // Right Arrow toets
        if (player.MovementX < player.speed) {
            player.MovementX++
        }
    }
    if (keys[37]) {
        // Left Arrow toets
        if (player.MovementX > -player.speed) {
            player.MovementX--
        }
    }
    player.MovementX = player.MovementX * friction;

    player.MovementY = player.MovementY + gravity;

    context.clearRect(0, 0, width, height);

    //De Object voor de Playerchanger
    context.fillStyle = "#add8e6";
    context.beginPath();

    for (var i = 0; i < playerchanger.length; i++) {
        context.fillRect(playerchanger[i].x, playerchanger[i].y, playerchanger[i].width, playerchanger[i].height);
    }
    var dir = CollisionChecker(player, playerchanger[0]);

            if (dir === "l" || dir === "r") {
                player.width = 5;
                player.height = 5;
                player.speed = 5;
                playerchanger[0].x = 0;
                playerchanger[0].y = 0;
                playerchanger[0].width = 0;
                playerchanger[0].height = 0;
            }
            if (dir === "b") {
                player.width = 5;
                player.height = 5;
                player.speed = 5;
                playerchanger[0].x = 0;
                playerchanger[0].y = 0;
                playerchanger[0].width = 0;
                playerchanger[0].height = 0;
            }
            if (dir === "t") {
                player.width = 5;
                player.height = 5;
                player.speed = 5;
                playerchanger[0].x = 0;
                playerchanger[0].y = 0;
                playerchanger[0].width = 0;
                playerchanger[0].height = 0;
            }
        context.fill();
    
    //De Coins
    context.fillStyle = "Yellow";
    context.beginPath();
        for(var i = 0; i < coins.length; i++){
            context.fillRect(coins[i].x, coins[i].y, coins[i].width, coins[i].height);
            var dir = CollisionChecker(player, coins[i]);

            if (dir === "l" || dir === "r") {
                window.location = 'sidescroller.html';
            } else if (dir === "b") {
                window.location = 'sidescroller.html';
            } else if (dir === "t") {
                window.location = 'sidescroller.html';
            }
        }
        context.fill();
    //De Platformen
    context.fillStyle = "black";
    context.beginPath();

        player.grounded = false;
        for (var i = 0; i < boxes.length; i++) {
            context.fillRect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
            var dir = CollisionChecker(player, boxes[i]);

            if (dir === "l" || dir === "r") {
                player.MovementX = 0;
                player.jumping = false;
            } else if (dir === "b") {
                player.grounded = true;
                player.jumping = false;
            } else if (dir === "t") {
                player.MovementY = 0;
            }
        }

        if (player.grounded == true) {
            player.MovementY = 0;
        }
        player.x = player.x + player.MovementX;
        player.y = player.y + player.MovementY;

        context.fill();
    //De Speler
    context.fillStyle = "red";
    context.fillRect(player.x, player.y, player.width, player.height);
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