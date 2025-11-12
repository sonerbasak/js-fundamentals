/*
? Data Types in JavaScript
- Primitive Data Types:
  - String: Represents a sequence of characters.
  - Number: Represents both integer and floating-point numbers.
  - Boolean: Represents logical entities and can have two values: true or false.
  - Null: Represents the intentional absence of any object value.
  - Undefined: A variable that has been declared but not assigned a value.
  - Object: A collection of properties, where each property is defined as a key-value pair.
  - Function: A block of code designed to perform a particular task.
*/

// string
let name = "Soner";
console.log("Name:", name, "| Type:", typeof name);

// number
let age = 30;
console.log("Age:", age, "| Type:", typeof age);

// boolean
let isStudent = false;
console.log("Is Student:", isStudent, "| Type:", typeof isStudent);

// null
let address = null;
console.log("Address:", address, "| Type:", typeof address);

// undefined
let phoneNumber;
console.log("Phone Number:", phoneNumber, "| Type:", typeof phoneNumber);

// object
let person = {
  firstName: "Soner",
  lastName: "Basak",
  age: 30,
};
console.log("Person:", person, "| Type:", typeof person);

// function
function greet() {
  return "Hello, " + name + "!";
}
console.log("Greet Function:", greet, "| Type:", typeof greet);