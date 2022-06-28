let ascending_order = function(x,y){
    if( typeof x === "string") x = x.toUpperCase();  //모두 대문자로 변환하고 사용함 
    if( typeof y === "string") y = y.toUpperCase();

    return x > y ? 1 : -1;
};

let descending_order = function(x,y){
    if( typeof x === "string") x = x.toUpperCase();  //모두 대문자로 변환하고 사용함 
    if( typeof y === "string") y = y.toUpperCase();

    return x < y ? 1 : -1;
};




let fruits = ["apple", "Orange", "orange", "melon"];
console.log(fruits.sort(ascending_order));
console.log(fruits.sort(descending_order));


let nums = [1,-1,4,0,10,20,12];
console.log(nums.sort(ascending_order)); //오름차순
console.log(nums.sort(descending_order)); //내림차순