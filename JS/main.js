const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8");

console.log(input);

let A = 123;
console.log(A);

A = 456;
console.log(A);

//syntaxError를 일으킴  let A = 789; 

//선언 후 할당
let hi;
hi = "hello";

//선언과 동시에 초기화
let halo = "hello";

//한 줄에 여러 변수 선언하고 초기화
let name = "john", age = 13, msg = 'hello';


let num_1 = 123.0;
let num_2 = 123.456;
console.log((num_1 - num_2).toFixed(3));

let user = {
    name: "john",
    age: 27
};

console.log(typeof user.name);
console.log(typeof user.age);

user.age = 30;
console.log(user.age);

user.weight = 72;
console.log(user);

delete user.age;
console.log(user);

console.log(String(123));
console.log(String(1/0));
console.log(String(-1/0));
console.log(String(NaN));
console.log(String(true));
console.log(String(false));
console.log(String(undefined));
console.log(String(null));
console.log(String("haha"));


console.log(Number(""));
console.log(Number("123"));
console.log(Number("hello"));
console.log(Number("123hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));


console.log(parseInt("123.123"));
console.log(parseFloat("123.123"));


console.log(Boolean(""));
console.log(Boolean("123"));
console.log(Boolean("hello"));
console.log(Boolean("0"));
console.log(Boolean(0));
console.log(Boolean(123));
console.log(Boolean(null));
console.log(Boolean(undefined));

let day_number = 2;
let day = "";

switch (day_number) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesay";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "error";
    break;
}

console.log(day);