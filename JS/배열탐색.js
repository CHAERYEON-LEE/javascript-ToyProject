let fruits = ["apple", "orange", "banana", "orange", "melon"];

console.log(fruits.indexOf("orange")); //첫번째 만나는 오렌지의 인덱스 출력 : 1
console.log(fruits.indexOf("Orange")); //값이 없을때는 -1을 리턴함 : -1
console.log(fruits.indexOf("orange", 2)); //2번 인덱스 이후부터 찾음 : 3
console.log(fruits.lastIndexOf("orange")); //뒤에서부터 찾음 : 3
console.log(fruits.lastIndexOf("orange", -3)); //뒤에서부터 찾음 : 1
console.log(fruits.lastIndexOf("orange", 0)); //0 이후 뒤에서부터 찾음 : -1


console.log(fruits.includes("banana"));  //true
console.log(fruits.includes("Banana"));  //false
console.log(fruits.includes("0"));  //false  값이 없으면 false를 리턴
