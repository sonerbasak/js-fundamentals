// array methods

var fruits = ["Apple", "Banana", "Cherry"];

//* push: adds one or more elements to the end of an array and returns the new length of the array.
fruits.push("Elderberry");
console.log("push: ", fruits);

//* pop: removes the last element from an array and returns that element.
var lastFruit = fruits.pop();
console.log(lastFruit);
console.log("pop: ", fruits);

//* shift: removes the first element from an array and returns that element.
var firstFruit = fruits.shift();
console.log(firstFruit);
console.log("shift: ", fruits);

//* unshift: adds one or more elements to the beginning of an array and returns the new length of the array.
fruits.unshift("Apricot");
console.log("unshift: ", fruits);

//* concat: merges two or more arrays and returns a new array.
var moreFruits = ["Fig", "Grape"];
var allFruits = fruits.concat(moreFruits);
console.log("concat: ", allFruits);

//* slice: returns a shallow copy of a portion of an array into a new array object.
var citrusFruits = allFruits.slice(1, 4);
console.log("slice: ", citrusFruits);

//* splice: changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
allFruits.splice(2, 1, "Blueberry");
console.log("splice: ", allFruits);

//* indexOf: returns the first index at which a given element can be found in the array, or -1 if it is not present.
var index = allFruits.indexOf("Grape");
console.log("indexOf: ", index);

//* forEach: executes a provided function once for each array element.
console.log("forEach:");
allFruits.forEach(function (fruit) {
  console.log(fruit);
});