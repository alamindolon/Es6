const array = [4,5,7,8,9];

// for eash & map ar same kaj but map return kore ar forEash return kore na..map array modde return kore forease sodu number return kore
console.log('map ar result');
const a = array.map(x => x* 2);
console.log('A:',a);

console.log('ForEase ar result');
const b = array.forEach(x => x*2);
console.log('B: ', b);

console.log('ForEase ar single result');
array.forEach(x => console.log(x*2));

console.log('find ar result');
const result = array.find(x => x>6 );
console.log(result);

console.log('filter ar result');
const Filter = array.filter(x => x>6 );
console.log(Filter);