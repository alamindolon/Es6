

// const arrays = ['dolon','apon','jamal'];

// for(let i = 0; i<arrays.length; i++)
// {
//     const friend = [i];
//     const array = [23,...friend,45];
//     console.log(array);
//    const  even = array % 2;
//     // if(array.length = array/2)
// }


const arrowFunction = (friendsNameArray) =>
{
    const newarray = [];
    for (let index = 0; index < friendsNameArray.length; index++) {
        const element = friendsNameArray[index];

        if(element.length % 2  === 0 )
        {
            newarray.push(element);
        }
        
    }
    return newarray;
}

const friendsName = ['dolon','molon','jodu','modu'];
console.log(arrowFunction(friendsName))
