const numbers = [1,2,3,5,6];

const total = numbers.reduce((previous, current) => previous + current, 0);

console.log(total);


const numbersAgain = [1,2,3,5,6];

const totalAgain = numbers.reduce((previous, current) => {
    console.log(previous , current);
    return previous + current ;
}, 0);

console.log(totalAgain);