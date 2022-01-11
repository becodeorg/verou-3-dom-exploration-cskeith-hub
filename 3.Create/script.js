// Array with class mates
const names = [
    "Muhammet",
    "Dante",
    "Cloenic",
    "Feruz",
    "Pieter",
    "Colin",
    "Benjamin",
    "Magali",
    "Beryl",
    "Jordy",
    "Koen",
    "Kevin",
    "Ahmad",
    "Ruben",
    "Dery",
    "Michelle",
    "Ellen",
    "Sara",
    "Jian",
    "Michael",
    "Cynthia",
    "Jawid"
]

function shuffleArray(names) {
    for (var i = names.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = names[i];
        names[i] = names[j];
        names[j] = temp;
    }
}

function lightOrDark(color) {

    // Variables for red, green, blue values
    let red;
    let green;
    let blue;
    let hsp;

    // If hex --> Convert it to RGB: http://gist.github.com/983661
    color = +("0x" + color.slice(1).replace(
        color.length < 5 && /./g, '$&$&'));

    red = color >> 16;
    green = color >> 8 & 255;
    blue = color & 255;

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
        0.299 * (red * red) +
        0.587 * (green * green) +
        0.114 * (blue * blue)
    );

    // Using the HSP value, determine whether the color is light or dark
    if (hsp >= 127.5) {

        return color = "white";
    } else {

        return color = "black";
    }
}

const article = document.querySelector("article");

for (var i = 0; i < names.length; i++) {
    const section = document.createElement("section");
    const paragraph = document.createElement("p");
    paragraph.innerHTML = names[i];
    section.style.backgroundColor = "#" + randomColor;
    article.appendChild(section)
        .appendChild(paragraph)
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const sArray = shuffleArray(names);
    const bgColor = lightOrDark(randomColor);
    if (bgColor === "black") {
        paragraph.style.color = "white";
    } else
        paragraph.style.color = "black";
}



console.log(article);

// Create a section node
//const section = document.createElement("section");
// Create a paragraph node
//const paragraph = document.createElement("p");
// Create a text node
//const text = document.createTextNode(names);
// looking for article
//const article = document.querySelector("article").appendChild(section).appendChild(paragraph).appendChild(text);