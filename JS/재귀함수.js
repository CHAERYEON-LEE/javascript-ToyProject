// 값에서 계속 마이너스 하면서 0일때 종료하는 함수
function recursive(num){
    if(num == 0) return;
    recursive(num-1);
    console.log(num);
}

recursive(3); 
/*1, 2, 3이 출력됨 console.log가 먼저 동작하지 않고 
계속해서 자기 자신을 실행하고 빠져나오면서 이런식으로 실행되는것임*/

function factorial(num){
    if(num == 0) return 1;  //탈출코드 누락하지말고 필수로 적어줘야함! 
    return num * factorial(num-1);
}

console.log(factorial(3));
