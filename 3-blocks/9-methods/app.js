
// funtion with parameters
function sayHello(name, surname) {
  console.log("Hello " + name + " " + surname);
}

let name = prompt("Enter your name: ");
let surname = prompt("Enter your surname: ");

sayHello(name, surname);

// function with return value
function square(number) {
  return number * number;
}

value = square(Number(prompt("Enter a number to square: ")));
console.log("Square: " + value);