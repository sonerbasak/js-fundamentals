// var
var name = "Soner";
console.log("Var name:", name);


// if use var, it is function scoped and accessible outside block
function varExample() {
  if (true) {
    var a = 2;
    console.log("Inside block, Var a:", a);
  }
  console.log("Outside block, Var a:", a); // accessible
}
varExample();


// let and const has block scope fields
// if we used const and let, we shouldn't use variables name again in the same scope
function letExample() {
  if (true) {
    let b = 2;
    const c = 3;
    console.log("Inside block, Let b and c:", b, c);
  }
  //console.log("Outside block, Let b and c:", b, c); // not accessible
}
letExample();


// difference between let and const
let x = 10;
x = 20;
console.log("Let x:", x);

const y = 10;
//y = 20; // Error: Assignment to constant variable.
console.log("Const y:", y);


// using const with objects and arrays
const person = {
  name: "John",
  age: 30,
};
//person = {} // Error: Assignment to constant variable.
// we can change properties of the object
person.age = 31;
console.log("Const person:", person);