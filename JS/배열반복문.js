let fruits = ["apple", "orange", "melon"];

//index접근
for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//element접근
for(let fruit of fruits){
    console.log(fruit);
}

//key접근
for(let key in fruits){
    console.log(key);
    console.log(fruits[key]);
}