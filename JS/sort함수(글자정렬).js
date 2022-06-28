let ascending_order = function(x,y){
    x = x.toUpperCase();  //모두 대문자로 변환하고 사용함 
    y = y.toUpperCase();

    if(x > y) return 1;
    else if(y > x) return -1;
    else return 0;
}

let descending_order = function(x,y){
    x = x.toUpperCase();  //모두 대문자로 변환하고 사용함 
    y = y.toUpperCase();

    if(x < y) return 1;
    else if(y < x) return -1;
    else return 0;
}


let fruits = ["apple", "Orange", "orange", "melon"];
console.log(fruits.sort(ascending_order));
console.log(fruits.sort(descending_order));

