var signsData = document.querySelectorAll("[data-signs]");
var turnO;
signsData.forEach(signs => {
    signs.addEventListener("click", clickSigns, {once: true})
});

function clickerSigns(){
    var signs = event.target;
    var turnCurrent = turnO ? "o" : "x";

    placerSigns(signs, turnCurrent);
}

function placerSigns()