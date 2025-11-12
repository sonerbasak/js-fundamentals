// type converting

let value = "5";
console.log(value, typeof value);

// string to number
let value1 = "7";
value1 = Number(value1);
console.log("string to number:", value1, typeof value1);

let value2 = "5";
value2 = parseInt(value2);
console.log("string to number:", value2, typeof value2);

// number to string
let value3 = 10;
value3 = String(value3);
console.log("number to string:", value3, typeof value3);

// boolean to string
let value4 = true;
value4 = String(value4);
console.log("boolean to string:", value4, typeof value4);

// string to boolean
let value5 = "";
value5 = Boolean(value5);
console.log("string to boolean:", value5, typeof value5);

let numbers = String([1, 2, 3, 4, 5]);
console.log(numbers, typeof numbers);