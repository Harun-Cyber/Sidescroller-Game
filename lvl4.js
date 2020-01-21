var signsData = document.querySelectorAll("[data-signs]");
var game = document.getElementById("game");
var turnO;

firstTurn();

function firstTurn(){
    turnO = false;
    signsData.forEach(signs => {
        signs.addEventListener("click", clickerSigns, {once: true})
    });
    hoverSigns();
}

function clickerSigns(){
    var signs = event.target;
    var turnCurrent = turnO ? "o" : "x";
    placerSigns(signs, turnCurrent);
    witchTurn();
    hoverSigns();
}

function hoverSigns(){
    game.classList.remove("o");
    game.classList.remove("x");
    if(turnO){
        game.classList.add("o");
    }
    else{
        game.classList.add("x");
    }
}

function placerSigns(signs, turnCurrent){
    signs.classList.add(turnCurrent);
}

function witchTurn(){
    turnO = !turnO;
}