  const person ={
    name: {
        common:'dolon',
        fullNamre: ['Al ', 'Amin'] 
    },
    age:32,
    isMeal:false,
    address:{
        street:"13/A DattaPara",
        house: 10,
    }
  };

  const stringFiledJson = JSON.stringify(person);
// console.log(stringFiledJson);

const persedJson = JSON.parse(stringFiledJson);
// console.log(persedJson);

const {name, age, isMeal, address} = persedJson;

const {common, fullNamre} = name;

const myself = `my name is ${common}, it is my called name and have a my special name .this name is ${fullNamre.join("")} my Gender is ${isMeal === true ? "male" : "female"}`;

console.log(myself);


