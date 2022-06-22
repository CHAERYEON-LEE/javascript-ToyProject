//0~10까지의 정수중에 짝수만 더한 값을 구하라
const UNTIL_NUM = 10;
let sum = 0;

for(let i=0; i<11; i++){
    if(i % 2 == 0){
        sum += i;
    }
}

console.log(sum);

//반복문 for 2개를 이용해 2~9단까지 출력해주는 코드를 작성하라
for(let i=2; i<=9; i++){
    for(let j=1; j<10; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}
