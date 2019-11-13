var gameFPS = 50;
var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = 500,
    height = 200,
    player = {
      x : width / 2,
      y : height - 5,
      width : 5,
      height : 5,
      speed : 3,
      MovementX : 0,
      MovementY : 0,
      jumping : false
    },
    keys = [],
    friction = 0.9,
    gravity = 0.2;
 
canvas.width = width;
canvas.height = height;
 
function update(){
  // De toetsen
  if (keys[38]){
    // Up Arrow toets
    if(player.jumping == false){
      player.jumping = true;
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

  player.x = player.x + player.MovementX;
  player.y = player.y + player.MovementY;

  if(player.x >= width - player.width){
    player.x = width-player.width;
  }
  else if(player.x <= 0){
    player.x = 0;
  }

  if(player.y >= height - player.height){
    player.y = height - player.height;
    player.jumping = false;
  }

  // De speler
  context.clearRect(0, 0, width, height);
  context.fillStyle = "red";
  context.fillRect(player.x, player.y, player.width, player.height);
}

document.body.addEventListener("keydown", function(e){
  keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function(e){
  keys[e.keyCode] = false;
});

intervalID = setInterval(update, 1000 / gameFPS);