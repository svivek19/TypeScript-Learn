// Object

// 1. Implicitly
let employee = {
  name: "John",
  age: 30,
  isPermanent: true,
};

employee.name = "John Smith";
// employee.department = "IT";
employee = {
  name: "John Smith",
  age: 32,
  isPermanent: false,
};

// 2. Explicitly

type Employee = {
  name: String;
  age: number;
};

let employee2: Employee = {
  name: "John",
  age: 30,
};

// 3. Optionals
type Data = {
  name: string;
  age?: number;
  isPermanent: boolean;
};

let Data2: Data = {
  name: "John",
  isPermanent: true,
};
