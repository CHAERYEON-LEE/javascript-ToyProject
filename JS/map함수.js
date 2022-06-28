// for loop
let nums = [1,2,3,4,5];
let use_for_loop = [];

for(let i = 0; i<nums.length; i++){
    use_for_loop.push(nums[i]*2);
}
console.log(use_for_loop);

let use_map = nums.map(function(item){
    return item *2;
});
console.log(use_map);