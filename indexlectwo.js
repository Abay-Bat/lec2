// My first js file 
// console.log('js file')

// let a = 1;
// a = 50;
// console.log(a)

// const b = 2;
// b = 99;
// console.log(b)
'use strict'
// tech's use 'use strict' to meet the ethical code
// let a;
// a = 25;
let customer = 'Aruzhan';
customer = 'Samat';
customer = 'Dalida'


console.log(customer)
// const never changes 
// `` can use various commands
// $ refer to the {given} line

// ("strings" ,)
const shopName = `Aroos shop customers's ${customer} `;
console.log( "1st name " ,shopName)


// old heads use var
// in this case using var instead of let is better
var city = 'Almaty';
city = 'Astana';
{
//  let
    var shop  = 'Dalida'
}
console.log(shop)


const a = 5;
const b = 10;
const c = `a + b =  ${a + b}`
console.log(c)

// ; is not as important, yet you need it to devide the lines like: [push] 
// alert(`Hello World`);
// [].push(1)

let vehicleWidth = 500; // camelcase
let car123 = "BMW";
let _car = ' ';

const   SHOP_NAME = `ARUZHAN'S cosmetics`; //snake_uppercase

// Data types

//Numbers,
let age = 25;
const   YEAR =  2022;
console.log(YEAR * 'nfactr') //  (NaN - can't work with a string )
console.log(-25/0) //  (infinity)


// Strings
//const name = 'Aruzhan';
const surnamename = "Zhaubassar";
// const city = 'Almaty';

// Boolean 
let isTeacher = true;
isTeacher = false;

// null 
let country = null;

// undefined 
let earth;
console.log(earth)
earth = 'Zemlya';
console.log(earth)


// Object 

const user = {
    name: 'Samat',
    isMentor: true,
    age: 28,
    friends:{
        first: 'Dalida',
        second: 'Aruzhan',
    }
}

console.log(user.name)

const user1 = {
    name: 'Dalida',
    isMentor: false,
    age: 29,
    'phone number':'+7007' // if you need to use the space in between strings use with [""]
   
}
// can't change constant
// use let instead if u wanna change the information
// use it through the dot . (user1.age = 18;)
console.log(user1.name, user1["phone number"])
console.log(user1)


// Adding to the Object 
user.isAnimeLover = true;
console.log(user)
delete user.friends // delete the string 
console.log(user)
delete user['phone number'] // delete the 'string' 
console.log(user)

// Iterate object 
for (let key  in user){
    console.log(" ")
    console.log(key,' = ', user[key])
}


// Arrays 
const salaries = [100, 150, 200, 250] ;
const students = ['Aruzhan', 'Aliya', 'Tleuzhan']; // always strarts with 0
console.log(students[3]);
console.log(students.length);

const techers = ['Samat', 100, true ]
console.log(techers)

// typeof (find the type)
console.log(typeof techers) 