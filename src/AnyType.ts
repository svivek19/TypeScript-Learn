// TS any type or  dynamic type

// basic
let anyType: any;
anyType = 10;
anyType = "hello";
anyType = true;
console.log(anyType);

// array
let anyTypeArray: any[] = [];

anyTypeArray.push(10);
anyTypeArray.push("Test");
anyTypeArray.push(false);

console.log(anyTypeArray);

// object
type User = {
  name: any;
  age: any;
};

let user: User;

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
let x: null = null;
let y: undefined = undefined;

console.log(x, y);
