
function 대소비교(x,y){
    if(x>y){
        return '>';
    }else if(x<y){
        return '<';
    }else{
        return '=';
    }
}

console.log(대소비교(3,5));
console.log(대소비교(7,4));
console.log(대소비교(2,2));

