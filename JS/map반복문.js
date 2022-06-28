let recipe_juice = new Map([
    ["strawberry",  50],
    ["banana", 100],
    ["ice", 150],
]);

for ( let item of recipe_juice.keys()){
    console.log(item);
}

for ( let amount of recipe_juice.values()){
    console.log(amount);
}

for ( let entity of recipe_juice){
    console.log(entity);
}

//map을 object로 변경   map <-> object
let recipe_juice_obj = Object.fromEntries(recipe_juice);
let recipe_juice_kv = Object.entries(recipe_juice_obj);


console.log(recipe_juice);
console.log(recipe_juice_obj);
console.log(recipe_juice_kv);
