
const arrowFun = function (variable)
{
    const mul = variable * 5;
    return mul;
}

console.log(arrowFun(5));

const arrowD = (variable,variable1) => 
{
    const sum1 = variable + 2;
    const sum2 = variable1 + 2;
    const mul = sum1 * sum2;
    return mul;
};
console.log(arrowD(5,4));

const arrowD2 = (variable,variable1) => ((variable + 2) * (variable1 + 2));

console.log(arrowD2(5,4));
