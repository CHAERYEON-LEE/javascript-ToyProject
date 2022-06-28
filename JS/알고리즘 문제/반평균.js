function answer(score){
    let average = 0;

    //1. 반 인원만큼 시험점수를 더하다.
    for ( let i = 0; i < score.length; i++){
        average += score[i];
    }
    //2. 반 인원 수만큼 더한 점수를 나눠 평균을 구한다.
    average /= score.length;
    //3. 소수 둘째자리까지 표현되도록 한다.(반올림처리)
    average = average.toFixed(2);
    return average;
}

