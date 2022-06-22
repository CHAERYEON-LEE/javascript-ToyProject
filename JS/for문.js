for(let i = 0; i <3; i++){
    for(let j = 0; j < 3; j++){
        console.log(`${i} + ${j} = ${i+j}`);
    }
}


//for in 반복문, 객체의 key와 value형태를 반복해서 수행함 
const person = { fname: "john", lname:"bob", age:25};

let text = "";
for (let x in person){
    text += person[x];
}
console.log(text);

//for of 반복문 symbol 을 가지고 있어야 동작 가능함. ES6신문법
let language = "Javascript";
let text_1 = "";
for(let x of language){
    text_1 += x;
    console.log(x);
}

