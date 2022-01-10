// Add a title attribute to every element that has the important class, stating This is an important item

// Create a const that selects all important classes
const important = document.querySelectorAll(".important");
// Add a title to important
important.title ="This is an important item";
// Console log the result
console.log(important);