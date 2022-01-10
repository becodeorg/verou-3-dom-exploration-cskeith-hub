// console log title 
console.log(document.title);

// Change title
document.title = "Modifying the DOM";
console.log(document.title);

// change background-color
document.body.style.backgroundColor = "red";

// change background-color Random
function random_bg_color() {
    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.background = bgColor;
}

random_bg_color();



const show = document.body.children;

for (let i = 0; i < document.body.children.length; i++) {
    console.log(document.body.children[i]);
}