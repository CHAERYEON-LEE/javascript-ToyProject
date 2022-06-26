let arr_1 = new Array(10);
let arr_2 = [];

console.log(arr_1);
console.log(arr_2);

let fruits = ["apple", "orange", "melon"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

fruits[1] = "kiwi";
console.log(fruits);

let nums = [];

nums.push("one");
nums.push("two");
console.log(nums);
console.log(nums.length);

console.log(Object.getOwnPropertyDescriptors(nums));

let num = 123.456;
let str = "here i am";
let fruit = ["apple", "orange", "melon"];

console.log(Array.isArray(num));
console.log(Array.isArray(str));
console.log(Array.isArray(fruit));

/*delete로 삭제를 해도 배열의 길이가 줄어들지 않고 
빈공간으로 남게 되기 때문에 삭제할때 사용하지 않음*/
delete fruit[1];
console.log(fruit);
console.log(fruit.length);