//date methods

const now = new Date();

console.log(now.toString());

console.log(now.getFullYear());

console.log(now.getDate());

console.log(now.getDay());

console.log(now.toLocaleDateString());

console.log(now.toLocaleTimeString());

console.log(now.toLocaleString());

//set methods

now.setFullYear(2025);

console.log(now.toString());

now.setDate(15);

console.log(now.toString());

//static date
const date1 = new Date('2020-01-01');
console.log(date1.toString());

