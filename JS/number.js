let us = 1e-6;

console.log(us.toString());
console.log(typeof us.toString());
console.log(typeof String(us));
console.log(typeof (us + ""));


let num_1 = 125.0;
let num_2 = 123.456;

console.log(num_1 - num_2);
console.log((num_1 - num_2).toFixed(3));
console.log((num_1 - num_2).toPrecision(3));

console.log(Number.isNaN(0.123));  //false
console.log(!Number.isNaN(0.123));  //true
console.log(Number.isNaN(0.123/"hello")); //true
console.log(Number.isFinite(-123));  //true
console.log(Number.isFinite(Infinity));  //false
console.log(Number.isFinite("hello"));  //false

console.log(Number.parseInt("125px"));
console.log(parseInt("125px"));
console.log(Number.parseFloat("1.25em"));
console.log(parseFloat("1.25em"));


