/*  scope
-> global scope: accessible everywhere
-> function scope: inside a function
-> block scope (if, for, while) : inside curly braces {}
*/

// global scope
var age = 25;
age = 30;
console.log("Var age:", age);

// function scope
function varTest() {
  var name = "Alice";
  console.log("Inside function, Var name:", name);
}

varTest();

// block scope
if (true) {
  var city = "New York";
}
console.log("Outside block, Var city:", city); // accessible

