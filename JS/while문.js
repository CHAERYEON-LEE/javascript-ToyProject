let i = 0;

while(i<3){
    console.log(i);
    i++;
}

i = 4;
do{
    console.log(i);
    i++;
}while(i<3);


//break
let text = "";
for(let i = 0; i <10; i++){
    if(i===3)break;
    text = text + i;
}
console.log(text);

//continue
text = "";
for(let i = 0; i <10; i++){
    if(i===3)continue;
    text = text + i;
}
console.log(text);