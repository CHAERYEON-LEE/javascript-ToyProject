let date_now = new Date();
let date_str = Date();

console.log(date_now);  //국제 표준시
console.log(date_str);  //한국 표준시

let date_ms_1 = new Date(0);
console.log(date_ms_1);
let date_ms_2 = new Date(1000 * 3600 * 24);
console.log(date_ms_2);

let date_string = new Date("2020-01-01");
console.log(date_string);

//month : 1월(0)~12월(11)
let date_params_1 = new Date(2021, 0, 1); 
let date_params_2 = new Date(Date.UTC(2021, 0, 1)); 
console.log(date_params_1);
console.log(date_params_2);

