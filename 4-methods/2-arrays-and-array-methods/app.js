// Arrays - Simple
let nums = [10, 20, 30, 40, 50];
console.log("Second element: " + nums[1]);

// Mixed array
let mixed = [100, "Hello", true, null, 50.5];
console.log("Mixed array: " + mixed);
console.log("First element of mixed array: " + mixed[2]);

// Accessing out of range index
console.log("out of range", mixed[20])

// Modifying array elements
nums[2] = 35;
console.log("Modified nums array: " + nums);

// empty array
let emptyArr = [];
let emptyArr2 = new Array();
emptyArr[0] = "First Element";
emptyArr2.push("First Element");
emptyArr2.push("First Element2");

console.log("Empty array: " + emptyArr);
console.log("Empty array 2: " + emptyArr2);


