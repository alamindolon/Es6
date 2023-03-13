const people = 
[
    { name: 'meena', age: 20},
    { name: 'rina', age: 25},
    { name: 'suchorita', age: 30}

]
let sum = 0;
for (let index = 0; index < people.length; index++) {
    const element = people[index].age;
    sum+=element;
    
    
}
console.log(sum);
const agetotal= people[0].age;
console.log(agetotal);