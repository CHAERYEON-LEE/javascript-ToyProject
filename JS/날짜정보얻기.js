let date = new Date(Date.UTC(2021, 0, 1));

console.log(date); //2021-01-01T00:00:00.000Z
console.log(date.getFullYear()); //2021
console.log(date.getMonth()); //0

//일요일(0)~토요일(6)
console.log(date.getDay()); //5 ->금요일

console.log(date.getHours()); //9
console.log(date.getUTCHours()); //0
console.log(date.getTime()); //1609459200000
console.log(new Date(date.getTime()));  //2021-01-01T00:00:00.000Z
console.log(date.getTimezoneOffset());  //-540 UCT와 우리나라가 시간차이가 얼마나 있는지 알 수 있음

