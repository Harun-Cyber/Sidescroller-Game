var gameFPS = 50;
var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = 500,
    height = 200,
    player = {
      x : width/2,
      y : height - 5,
      width : 5,
      height : 5
    };
 
canvas.width = width;
canvas.height = height;
 
function update(){
  // De speler
  context.fillStyle = "red";
  context.fillRect(player.x, player.y, player.width, player.height);
}
intervalID = setInterval(update, 1000 / gameFPS);
