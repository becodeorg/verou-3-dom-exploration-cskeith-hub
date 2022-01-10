// Add a title attribute to every element that has the important class, stating This is an important item

// Create a const that selects all important classes
const important = document.querySelectorAll(".important");
// Add a title to important
important.title = "This is an important item";
// Console log the result
console.log(important);


//Select all the img tags and loop through them. If they have no important class, turn their display property to none

// const that gets all images
const img = document.querySelectorAll('img');
// log images
console.log(img);
// for images in i log img
for (let i = 0; i < img.length; i++) {
    const currentImage = img[i];
    console.log(img[i]);
    // if currentImage is not equal to important display:none
    if (currentImage.className != "important")
        currentImage.style.display = "none";
}

//Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname has well

// get all paragraphs
const p = document.querySelectorAll('p');
console.log(p);
// for paragraph in i log p
for (let i = 0; i < p.length; i++) {
    const currentParagraph = p[i];
    console.log(p[i]);
    // if current p haves a className 
    if (currentParagraph.className)
        // console log currentParagraph with classname
        console.log(currentParagraph.className);
}
//Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.

