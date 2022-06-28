console.log(Math.max(1,-1));
console.log(Math.min(1,-1));

console.log(Math.max(1,-1,5,23,17,-4));
console.log(Math.min(1,-1,5,23,17,-4));

let nums = [1,-1,5,23,17,-4];
console.log(Math.max(nums)); //Math 로 받는 인자값이 무조건 values값만 받기 때문에 배열에 대한 처리를 해줘야 한다. 

console.log(Math.max.apply(null, nums)); //apply 이용해서 values값만 사용한다. 
console.log(Math.min.apply(null, nums)); //apply 이용해서 values값만 사용한다. 

console.log(Math.max(...nums)); //spread함수 이용해서 구하기 
console.log(Math.min(...nums));

console.log(Math.abs(1));  //숫자에 대한 절대값을 산출해줌!  1
console.log(Math.abs(-1));  // 절대값으로 변해서 1로 산출됨 
console.log(Math.abs(-Infinity));  // Infinity

//math property
console.log(Math.E);
console.log(Math.PI);

//math random 0~1사이의 랜덤값 구하기
console.log(Math.random());
console.log(Number.parseInt(Math.random()*1000));  //랜덤값의 범위를 의도적으로 바꿀 수 있음

//랜덤값 10개 구하기 
for(let i =0; i<10; i++){
    console.log(Number.parseInt(Math.random()*1000));
}

//값의 제곱처리  pow
console.log(Math.pow(2,3));  //옛날방법
console.log( 2 ** 3);  //현재는 제곱근 연산자가 나옴 


//제곱근 찾아주는 식  sqrt
console.log(Math.sqrt(4));  //2
console.log(Math.sqrt(2));  //1.4142135623730951

//소수점 이하 반올림 정수  round
console.log(Math.round(3.5));  //4
console.log(Math.round(-2.3));  //-2
console.log(Math.round(-2.7));  //-3

//소수점 이하 올림 ceil
console.log(Math.ceil(3.5))  //4
console.log(Math.ceil(-2.3))  //-2
console.log(Math.ceil(-2.7))  //-2

//소수점 이하 내림 floor
console.log(Math.floor(3.7))  //3
console.log(Math.floor(-2.3))  //-3
console.log(Math.floor(-2.7))  //-3

