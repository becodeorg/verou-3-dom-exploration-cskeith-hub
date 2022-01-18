const inputText = document.getElementById("firstname");
const age = document.getElementById("age");
const truth = document.getElementById("a-hard-truth");

inputText.addEventListener('keyup', function () {
    event.preventDefault();

    const inputText = document.getElementById("firstname").value;
    document.getElementById("display-firstname").innerHTML = inputText;

});


age.addEventListener('keyup', function () {
    const ageNumber = document.getElementById("age").value;
    console.log("truth");
    const not = "Not old enough"
    if (ageNumber > 17) {
        truth.style.visibility = "visible";
    }

});







