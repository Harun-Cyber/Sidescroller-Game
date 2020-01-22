var signsData = document.querySelectorAll("[data-signs]");
var game = document.getElementById("game");
var winnerMessage = document.getElementById("winner-text")
var buttonRestart = document.getElementById("buttonRestart")
var winnnerText = document.querySelector("[data-winner-text]")
var turnO;

firstTurn();

buttonRestart.addEventListener("click", firstTurn);

function firstTurn(){
    turnO = false;
    signsData.forEach(signs => {
        signs.classList.remove("x")
        signs.classList.remove("o")
        signs.removeEventListener("click", clickerSigns)
        signs.addEventListener("click", clickerSigns, {once: true})
    });
    hoverSigns();
    winnerMessage.classList.remove("show");
}

function clickerSigns(){
    var signs = event.target;
    var turnCurrent = turnO ? "o" : "x";
    placerSigns(signs, turnCurrent);
    if(trueWinner(turnCurrent)){
        winnerDetermined(false)
    }
    else if(trueDraw()){
        winnerDetermined(true)
    }
    else{
        witchTurn();
        hoverSigns();    
    }
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

function trueWinner(turnCurrent){
    return winner.some(winnerCombo => {
        return winnerCombo.every(id => {
            return signsData[id].classList.contains(turnCurrent)
        })
    })
}

function winnerDetermined(draw){
    if (draw){
        winnnerText.innerText = "Draw, try again!"
    }
    else{
        if(turnO){
            winnnerText.innerText = "O wint, congratulations!"
        }
        else{
            winnnerText.innerText = "X wint, congratulations!"
        }
    }
    winnerMessage.classList.add("show")
}

function trueDraw(){
    return [...signsData].every(signs => {
        return signs.classList.contains("o") || signs.classList.contains("x")
    })
}

var winner = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];