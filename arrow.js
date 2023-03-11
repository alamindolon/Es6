const add2 = function(first,second)
{
    const total  = first + second;
    return total;
}

console.log(add2(10,20));

const add3 = function(first,second)
{
    
    return first + second;
}

console.log(add3(10,20));

const add4 = function add(first,second)
{
    
    return first + second;
}

console.log(add3(10,20));

// sileme version 
// arrow function

const add6 = (first , second) => first + second;
const result = add6(10,40);
console.log(result);
