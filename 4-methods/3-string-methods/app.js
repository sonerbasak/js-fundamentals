//string methods

//charAt: returns the character at the specified index.
var str = "Hello, World!";
var char = str.charAt(7);
console.log("charAt: ", char); // W

//concat: combines two or more strings and returns a new string.
var str1 = "Hello";
var str2 = "World";
var combinedStr = str1.concat(", ", str2, "!");
console.log("concat: ", combinedStr); // Hello, World!

//indexOf: returns the index of the first occurrence of a specified value in a string, or -1 if not found.
var index = str.indexOf("World");
console.log("indexOf: ", index); // 7

//lastIndexOf: returns the index of the last occurrence of a specified value in a string, or -1 if not found.
var lastIndex = str.lastIndexOf("o");
console.log("lastIndexOf: ", lastIndex); // 8

//toUpperCase: converts a string to uppercase letters.
var upperStr = str.toUpperCase();
console.log("toUpperCase: ", upperStr); // HELLO, WORLD!

//toLowerCase: converts a string to lowercase letters.
var lowerStr = str.toLowerCase();
console.log("toLowerCase: ", lowerStr); // hello, world!

//trim: removes whitespace from both ends of a string.
var strWithSpaces = "   Hello, World!   ";
var trimmedStr = strWithSpaces.trim();
console.log("trim: '", trimmedStr, "'"); // 'Hello, World!'

//slice: extracts a section of a string and returns it as a new string.
var slicedStr = str.slice(0, 5);
console.log("slice: ", slicedStr); // Hello

//substring: returns the part of the string between the start and end indexes, or to the end of the string.
var substringStr = str.substring(7, 12);
console.log("substring: ", substringStr); // World

//replace: searches a string for a specified value, or a regular expression, and returns a new string with the specified values replaced.
var replacedStr = str.replace("World", "JavaScript");
console.log("replace: ", replacedStr); // Hello, JavaScript!

//split: splits a string into an array of substrings based on a specified separator.
var strToSplit = "apple,banana,cherry";
var splitArr = strToSplit.split(",");
console.log("split: ", splitArr); // ['apple', 'banana', 'cherry']

//valueOf: returns the primitive value of a String object.
var stringObj = new String("Hello, World!");
var primitiveStr = stringObj.valueOf();
console.log("valueOf: ", primitiveStr); // Hello, World!

//startsWith: determines whether a string begins with the characters of a specified string.
var starts = str.startsWith("Hello");
console.log("startsWith: ", starts); // true

//endsWith: determines whether a string ends with the characters of a specified string.
var ends = str.endsWith("World!");
console.log("endsWith: ", ends); // true