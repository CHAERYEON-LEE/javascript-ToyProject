
function between(a,b){
    let array_1 = [];

    if(a > b){
        //temp 스왑
        let temp = a;
        a = b;
        b = temp;
        //2번째 스왑방법  [a,b] = [b,a];
    }

    for(let i = a; i <= b; i++){
        array_1.push(i);
    }
    console.log(array_1);
}

between(3,7);
between(8,3);
between(12,10);

