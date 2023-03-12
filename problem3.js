const arrowFunction= (a,b) =>
{
    const aSquare  = a*a;
    const bSauare = b*b;
    const sum = aSquare + bSauare;
    const avg = sum/2;
    return avg;
}

console.log(arrowFunction(2,3));