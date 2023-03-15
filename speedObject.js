const person = {
    name:'hero Alom',
    age:45,
    phone:'017400',
    address: 'bari dhara',
    p:[1,3,4,5,6]

}
const {name, age,adress, p: number} = person;

for (let i of number)
{
    console.log(i);
}

console.log(name);