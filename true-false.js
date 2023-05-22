/*
1.true
2.any number (+ve, -ve is true)
3.0 is false
4.string is true  and empty string ''  is false
5.

*/

const x = false;
 if(x)
 {
    console.log('value of x is truthy');
 }
 else
{
    console.log('values of x is false');
}

// always if is true , jkon ! akta diba tokon oi ta flase hoy abr jokon !! 2 ta diba tkon se true hobe
 const v= null;
 if(!v)
 {
    console.log('vallue is false ');
 }
 const z= {class : 9};
 if(!!z)
 {
    console.log('value is true');
 }