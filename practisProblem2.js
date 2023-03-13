
const array = [1,9,17,22];
const add = array.reduce((prenumber,currentNumber) => prenumber + currentNumber,0)
console.log(add);



const arrayD = [1,9,17,22];
let sum = 0;

for (let index = 0; index < arrayD.length; index++) {
    const element = arrayD[index];
    console.log(element);
    sum = element + sum; 
}

console.log('SUM: ',sum);