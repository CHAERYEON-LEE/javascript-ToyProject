let str = new Set("Hello!");

console.log(str);

for(let item of str){
    console.log(item);
}

//set은 value값만 있기 때문에 key나 value나 모두 value값이 나옴
for(let item of str.keys()){
    console.log(item);
}

for(let item of str.values()){
    console.log(item);
}

//map과의 호환성을 위해 key,value값으로 반환함 
for(let item of str.entries()){
    console.log(item);
}