// TypeScript - Union Types
//More than one type - we can use Union Type
// Union Type represents using OR operator - '|'

// implicit or TypeScript inference
let unionArray = [1, "demo", true];
unionArray.push(100);
unionArray.push("vivek");
unionArray.push(false);

console.log("UnionArray", unionArray);

//Explicit
let unionArray2: (number | string | boolean)[] = [];

unionArray2.push("401");
unionArray2.push(401);
unionArray2.push("Not Found");

console.log(unionArray2);
