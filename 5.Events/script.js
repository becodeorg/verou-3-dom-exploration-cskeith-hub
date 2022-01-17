const _initTime = Date.now()

function getElapsedTime(){
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e){
    console.log(e.target.classList[1])
    console.log(getElapsedTime())

}

const actionsquares = document.querySelectorAll('.actionsquare')
for(let actionsquare of actionsquares) {
    actionsquare.addEventListener('click', clickOnSquare)

}

const displayedsquare = document.querySelector("displayedsquare-wrapper");

const lime = document.createElement("div");
lime.className = "displayedsquare";
lime.style.backgroundColor = "lime";


const magenta = document.createElement("div");
magenta.className = "displayedsquare";
magenta.style.backgroundColor = "magenta";


const orange = document.createElement("div");
orange.className = "displayedsquare";
orange.style.backgroundColor = "orange";


console.log(displayedsquare);












