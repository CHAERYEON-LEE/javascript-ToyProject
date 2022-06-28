let nums = [1,-1,4,5,2,0];
console.log(nums.sort());  //오름차순으로 정렬
console.log(nums.reverse());  //반전으로 해서 내림차순으로 정렬


nums = [1,-1,4,5,2,0];
console.log(nums.reverse());  //반전 정렬 

fruits = ["apple", "orange", "melon", "strawberry"];
console.log(fruits.sort()); //글자의 앞글자를 따서 아스키코드의 숫자로 변형하여 오름차순으로 정렬해줌


fruits = ["apple", "orange", "banana" ,"melon"];
let str = fruits.join();
console.log(str);

let str_separator = fruits.join(";");
console.log(str_separator);

let result = str_separator.split(";");  //문자열을 다시 배열 형태로 만들기
console.log(result);
