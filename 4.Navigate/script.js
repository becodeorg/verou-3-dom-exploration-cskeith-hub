const section = document.querySelector('section');
const sectionsChildren = section.children;

console.log(sectionsChildren);

const ol = sectionsChildren[3];

console.log(ol);

const firstItem = ol.children[0];

console.log(firstItem);

const lastItem = ol.children[4];

console.log(lastItem);

ol.insertBefore(lastItem, firstItem);




















