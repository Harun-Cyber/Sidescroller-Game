const gameFPS = 50;
var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = 500,
    height = 500,
    player = {
      x : width / 2,
      y : height - 5,
      width : 15,
      height : 15,
      speed : 3,
      MovementX : 0,
      MovementY : 0,
      jumping : false,
      grounded : false
    },
    keys = [],
    friction = 0.9,
    gravity = 0.15;

    let coins = []        //Array voor de coins die je kunt collecten
    //Dimensies
    coins.push({
      x: 15,
      y: 370,
      width: 20,
      height: 30
    });
    coins.push({
      x: 15,
      y: 270,
      width: 20,
      height: 30
    });
    coins.push({
      x: 15,
      y: 170,
      width: 20,
      height: 30
    });
    coins.push({
      x: 465,
      y: 370,
      width: 20,
      height: 30
    });
    coins.push({
      x: 465,
      y: 270,
      width: 20,
      height: 30
    });
    coins.push({
      x: 465,
      y: 170,
      width: 20,
      height: 30
    });

    let boxes = []        //Array voor de voorwerpen
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
      x: 0,
      y: 400,
      width: 150,
      height: 10
    });
    boxes.push({
      x: 350,
      y: 400,
      width: 150,
      height: 10
    });
    boxes.push({
      x: 0,
      y: 300,
      width: 150,
      height: 10
    });
    boxes.push({
      x: 350,
      y: 300,
      width: 150,
      height: 10
    });
    boxes.push({
      x: 0,
      y: 200,
      width: 150,
      height: 10
    });
    boxes.push({
      x: 350,
      y: 200,
      width: 150,
      height: 10
    });
canvas.width = width;
canvas.height = height;
 
function update(){
  // De toetsen
  if (keys[38]){
    // Up Arrow toets
    if(player.jumping == false && player.grounded == true){
      player.jumping = true;
      player.grounded = false;
      player.MovementY = -player.speed * 2;
    }
  }
  if (keys[39]){
    // Right Arrow toets
    if(player.MovementX < player.speed){
      player.MovementX++
    }
  }
  if (keys[37]){
    // Left Arrow toets
    if (player.MovementX > -player.speed){
      player.MovementX--
    }
  }
  player.MovementX = player.MovementX * friction;

  player.MovementY = player.MovementY + gravity;
  
  context.clearRect(0, 0, width, height);
  //De Coins
  context.fillStyle = "yellow";
  context.beginPath();
 
  for (var i = 0; i < coins.length; i++) {
    context.fillRect(coins[i].x, coins[i].y, coins[i].width, coins[i].height);
    
    var dir = CollisionChecker(player, coins[0]);

    if(dir === "l" || dir === "r"){
      window.location = 'lvl1.html';
    }
    if(dir === "b"){
      window.location = 'lvl1.html';
    }
    if(dir === "t"){
      window.location = 'lvl1.html';
    }
    var dir = CollisionChecker(player, coins[1]);

    if(dir === "l" || dir === "r"){
      window.location = 'lvl2.html';
    }
    if(dir === "b"){
      window.location = 'lvl2.html';
    }
    if(dir === "t"){
      window.location = 'lvl2.html';
    }
    var dir = CollisionChecker(player, coins[2]);

    if(dir === "l" || dir === "r"){
      window.location = 'lvl3.html';
    }
    if(dir === "b"){
      window.location = 'lvl3.html';
    }
    if(dir === "t"){
      window.location = 'lvl3.html';
    }
    var dir = CollisionChecker(player, coins[3]);

    if(dir === "l" || dir === "r"){
      window.location = 'lvl4.html';
    }
    if(dir === "b"){
      window.location = 'lvl4.html';
    }
    if(dir === "t"){
      window.location = 'lvl4.html';
    }
    var dir = CollisionChecker(player, coins[4]);

    if(dir === "l" || dir === "r"){
      window.location = 'lvl5.html';
    }
    if(dir === "b"){
      window.location = 'lvl5.html';
    }
    if(dir === "t"){
      window.location = 'lvl5.html';
    }
    var dir = CollisionChecker(player, coins[5]);

    if(dir === "l" || dir === "r"){
      window.location = 'lvl6.html';
    }
    if(dir === "b"){
      window.location = 'lvl6.html';
    }
    if(dir === "t"){
      window.location = 'lvl6.html';
    }
}
  context.fill();
  //De Platformen
  context.fillStyle = "black";
  context.beginPath();

  player.grounded = false;
  for(var i = 0; i < boxes.length; i++){
    context.fillRect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
    var dir = CollisionChecker(player, boxes[i]);

    if(dir === "l" || dir === "r"){
      player.MovementX = 0;
      player.jumping = false;
    }
    else if(dir === "b"){
      player.grounded = true;
      player.jumping = false;
    }
    else if(dir === "t"){
      player.MovementY = 0;
    }
  }

  if(player.grounded == true){
    player.MovementY = 0;
  }
  player.x = player.x + player.MovementX;
  player.y = player.y + player.MovementY;

  context.fill();
  //De Speler
  context.fillStyle = "red";
  context.fillRect(player.x, player.y, player.width, player.height);
}

function CollisionChecker(ShapeA, ShapeB){
  //Krijgt de positie van het midden van de speler
  var playerX = (ShapeA.x + (ShapeA.width / 2)) - (ShapeB.x + (ShapeB.width / 2)),
      playerY = (ShapeA.y + (ShapeA.height / 2)) - (ShapeB.y + (ShapeB.height / 2)),
      //Voeg de half witdhs en half heights van de objecten toe
      hWidths = (ShapeA.width / 2) + (ShapeB.width / 2),
      hHeights = (ShapeA.height / 2) + (ShapeB.height / 2),
      colDir = null;

  //If playerX en PlayerY minder dan de half width of half height zijn, dan moeten die in het object zijn. Hierdoor komt er een collision
  if (Math.abs(playerX) < hWidths && Math.abs(playerY) < hHeights) {  // berekent vanuit welke kant de collision plaatsvind (top, bottom, left, or right)         
    var objectX = hWidths - Math.abs(playerX),             
        objectY = hHeights - Math.abs(playerY);         
    if (objectX >= objectY) {
      if(playerY > 0){
        colDir = "t";
        ShapeA.y = ShapeA.y + objectY;
      }
      else{
        colDir = "b";
        ShapeA.y = ShapeA.y - objectY;
      }
    }
    else{
      if(playerX > 0){
        colDir = "l";
        ShapeA.x = ShapeA.x + objectX;
      }
      else{
        colDir = "r";
        ShapeA.x = ShapeA.x - objectX;
      }
    }
  }
  return colDir; 
}

document.body.addEventListener("keydown", function(e){
  keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function(e){
  keys[e.keyCode] = false;
});

intervalID = setInterval(update, 1000 / gameFPS);