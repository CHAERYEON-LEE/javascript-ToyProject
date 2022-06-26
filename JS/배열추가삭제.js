let fruits = ["apple", "orange", "melon"];
let ret;

ret = fruits.push("watermelon");  //배열에 끝에 추가
console.log(fruits);
console.log(fruits.length);
console.log(ret);

ret = fruits.pop();  //배열의 끝에서 꺼내기
console.log(fruits);
console.log(fruits.length);
console.log(ret);

ret = fruits.unshift("watermelon");  //배열의 앞에서 추가
console.log(fruits);
console.log(fruits.length);
console.log(ret);

ret = fruits.shift();  //배열의 앞에서 꺼내기
console.log(fruits);
console.log(fruits.length);
console.log(ret);

//배열 쪼개기 ()안의 매개변수로 받은 인덱스 이후로 짤라서 보관하라
console.log(fruits.splice(1));
console.log(ret);
console.log(fruits);

fruits = ["apple", "orange", "melon", "strawberry"];
ret = fruits.splice(1,1);  //인덱스 1에서 1개까지만 잘라라
console.log(ret);
console.log(fruits);

ret = fruits.splice(1,1, "mango", "kiwi"); //쪼개고 추가까지 가능 
console.log(ret);
console.log(fruits);  //[ 'apple', 'mango', 'kiwi', 'strawberry' ]

fruits = ["apple", "orange", "melon"];

console.log(fruits.slice(1));
console.log(fruits.slice(-2));  //뒤에서부터 세서 자르는것도 가능! 
console.log(fruits);  //slice는 원본으 유지시킴! 


let fruits_add = ["cherry", "banana"];
console.log(fruits.concat(fruits_add));  //원본데이터 건들지 않고 배열끼리 병합 가능