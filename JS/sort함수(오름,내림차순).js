let nums = [1,-1,4,0,10,20,12];

console.log(nums.sort());
console.log(nums.reverse());


//
let ascending_order = function(x,y){
    return x - y;  
};

let descending_order = function(x,y){
    return y - x;
};

console.log(nums.sort(ascending_order)); //오름차순
console.log(nums.sort(descending_order)); //내림차순


