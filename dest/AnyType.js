"use strict";
// TS any type or  dynamic type
// basic
let anyType;
anyType = 10;
anyType = "hello";
anyType = true;
console.log(anyType);
// array
let anyTypeArray = [];
anyTypeArray.push(10);
anyTypeArray.push("Test");
anyTypeArray.push(false);
console.log(anyTypeArray);
let user;
user = {
    name: "John",
    age: 30,
};
user = {
    name: 30,
    age: "test",
};
console.log(user);
// null and undefined
let x = null;
let y = undefined;
console.log(x, y);
