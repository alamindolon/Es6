const numbers = [2,4,6,7,8];
const output = [];
for (const number of numbers)
{

    const doubled = number * 2;
    output.push(doubled);
    
}

const doubleIT = num => num * 2;

const makeDouble = numbers.map(doubleIT);

const makeDoubleDirect = numbers.map( x => x*2 );
const fiveTimes = [1,2,3,4,5].map(x => x * 5);
console.log(fiveTimes);