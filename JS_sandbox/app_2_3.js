/*
  Variables var, let & const
*/
// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // init variable
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // Rules for variable names, include
// // letters, numbers, _, $
// // Can not start with a number

// //  multi word variables
// var firstName = 'John'; // camel case
// var first_name = 'Sarah'; // PHP language - underscore
// var FirstName = 'Tom'; // Pascal case

// LET
// let name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// CONST
const name = 'John Doe';
console.log(name);
// can not reassign;
//name = 'Steve Smith';
console.log(name);
// Have to assign a value
//const lname;

const person = {
  name: 'John',
  age: 30
};

// this is valid because person objeect has not been reassigned.
person.name = 'Sarah';

console.log(person);