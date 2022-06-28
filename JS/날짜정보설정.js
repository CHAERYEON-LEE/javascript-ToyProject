let date = new Date();

console.log(date); 

let ms_year = date.setFullYear(2020, 3, 15);
console.log(date);
console.log(new Date(ms_year));

date.setDate(1);
console.log(date);
date.setDate(0);  //0으로 설정하면 실제 기준의 하루 전날로 설정된다. 
console.log(date);

date.setHours(date.getHours() + 2);
console.log(date);