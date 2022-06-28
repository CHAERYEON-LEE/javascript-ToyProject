let set = new Set();
let num = new Set([1,2,3,4,5]);
let str = new Set("Hello!");

console.log(set);
console.log(num);
console.log(str);  //중복된값은 제거되기 때문에 h e l l o ! 에서 l 한개는 제거되서 저장됨! 

set.add(1).add(1).add(10).add(20);
console.log(set);

console.log(set.has(10));
console.log(set.has(2));


set.delete(1);
set.delete(-1);  //자료가 없는것은 오류로 반환되지 않고 그냥 실행되지 않음! 
console.log(set.delete(-1));  //false로 반환됨 
console.log(set);
