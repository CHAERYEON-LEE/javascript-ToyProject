//두 정수를 입력 받아 가장 큰 값을 출력해주는 함수를 작성하시오. 
function MAX(x, y){
    if( x > y){
        return x;
    }else{
        return y;
    }
}

console.log(MAX(0,3));
console.log(MAX(-1,5));
console.log(MAX(100,7));


function MAX_2(x,y){
    return x > y ? x : y; 
}

console.log(MAX_2(0,3));
console.log(MAX_2(-1,5));
console.log(MAX_2(100,7));

function MIN(x, y){
    if( x > y){
        return y;
    }else{
        return x;
    }
}

console.log(MIN(0,3));
console.log(MIN(-1,5));
console.log(MIN(100,7));