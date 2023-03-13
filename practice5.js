const array = [3,4,5,6,7];

const arr = array.map( x => x*5);
console.log(arr);



const arrFilter = array.filter( x => x%2 != 0);
console.log(arrFilter);


let object  = [{
    price:600,
    name:'dolon'
}]
const findnum = object.find(x => x.price === 600);

console.log(findnum);


