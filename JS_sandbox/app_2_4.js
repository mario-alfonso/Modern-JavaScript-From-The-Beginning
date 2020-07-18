/*
  Data Types
  Primitive Types:
    String
    Number
    Boolean
    Null
    Undefined
    Symbols ( ES 6 )
  Referenced Types:
    Arrays
    Objects
    Functions
    Dates
    Anything Else ...
*/
// PRIMITIVE TYPES

// String
const name = 'John Doe';
// Number
const age = 45;
// Boolean
const hasKids = true;
// Null
const car = null;
// Undefined
let house;
// Symbol
const sym = Symbol();

// REFERENCED TYPES - Ojects
// Array
const numbers = [1,2,3,4];
// Object Literal
const address = {
  city: 'Belton',
  state: 'TX'
};
// Dates
const today = new Date();
console.log(today);
console.log(typeof today);