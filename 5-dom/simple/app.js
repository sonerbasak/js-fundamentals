//Document Object Model

let value;

// value = document.links.item(0).getAttribute("id")
// value = document.links.item(0).getAttribute("class");
// value = document.links.item(0).classList[3];
// value = document.forms.item(0).getAttribute("id");
value = document.forms.item(0).children;
console.log(value);