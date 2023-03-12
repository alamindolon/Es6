const numbers = [12, 5, 8, 6, 7,67];

const bignums = numbers.filter(Number => Number > 20)
console.log(bignums);


const tiny = numbers.filter(n => n< 10);
console.log(tiny);

const products = [

    {id: 1, name: 'laptop', price: '95000'},
    {id: 2, name: 'mobile', price: '65000'},
    {id: 3, name: 'watch', price: '25000'},
    {id: 4, name: 'tablet', price: '45000'},
]
const price =products.filter(pri => pri.price > 100000);
console.log(price);