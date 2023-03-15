
// ... dile array gula ke numver a convert kore.
const number = [23,45,67,78,99];
const numbers = [23, ...number, 74,100];
console.log(numbers);


// first a number banay nise than max numver banaise 
const highest = Math.max(...numbers);
console.log(highest);


// ... na dile numver a convert hobe na . so ai ta kaj korbe na.
const highests = Math.max(number);
console.log(highests);


const array = [3, 4, 5, 6,7 ,8, 9];

const [a,b,...lastarary] = array;
console.log(a,b, lastarary);


