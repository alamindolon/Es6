const student = {
    name: 'kolim',
    age: 15,
    marks: {
        math : 78,
        physics : 89,
        chemistry:65
    }

}


const chemistry = student['marks']['chemistry'];
console.log(chemistry);