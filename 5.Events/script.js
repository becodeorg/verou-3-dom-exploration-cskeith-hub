const _initTime = Date.now()

function getElapsedTime(){
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e){
    console.log(e.target.classList[1]);
    console.log(getElapsedTime());

    const displayedsquare = document.querySelector(".displayedsquare-wrapper");
    const div = document.createElement("div");
    div.classList.add("displayedsquare");
    displayedsquare.append(div);
    div.classList.add(e.target.classList[1]);

    const logBox = document.querySelector("ul");
    const log = document.createElement("li");
    logBox.appendChild(log);
    log.append( '[' + (getElapsedTime() + '] ') + (e.target.classList[1]));
}

const actionsquares = document.querySelectorAll('.actionsquare');
for(let actionsquare of actionsquares) {
    actionsquare.addEventListener('click', clickOnSquare);

}

const body = document.querySelector("body");
body.addEventListener('keydown', random_bg_color);

function random_bg_color(e) {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
    if(e.which === 32) {
        random_bg_color(body);
        const logBoxBg = document.querySelector("ul");
        const logBg = document.createElement("li");
        logBoxBg.appendChild(logBg);
        logBg.append( '[' + (getElapsedTime() + '] ' + bgColor));
        console.log(e.which);
    }
}


body.addEventListener('keydown', clickOnSquare, random_bg_color, remover);
function remover(e){
    if(e.which === 76){
        console.log(e.which);
    }

}



