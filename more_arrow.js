const domath = (x,y,z) => {
    const first  = x+ y;
    const second = y+z;

    const multiplyresult = first + second;
    const result  = multiplyresult / 2;
    return result;


}
console.log(domath(2,3,4));


// function name = paramerter = return type

const add = (a,b) => a+b;
console.log(add(3,4));