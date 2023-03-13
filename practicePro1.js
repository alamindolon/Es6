const array = [1,3,5,7,9];
const odd = array.map( arr => arr+1);
// console.log(odd);

// const arrayFiler = [1,3,5,7,9,20,30];
// const TenDivisiable = arrayFiler.filter(x => 
//     {
//         if(x % 10 === 0)
//         return x;
//     })
// console.log(TenDivisiable);

const arrayFiler = [1,3,5,7,9,20,30];
const TenDivisiable = arrayFiler.filter(x => (x % 10 === 0))
console.log(TenDivisiable);

const arrayFind = [1,3,5,7,9,20,30];
const findDivisiable = arrayFind.find(x => (x % 10 === 0))
console.log(findDivisiable);