let map = new Map();

//map.set 으로 저장
map.set("name", "john"); //문자형 -> 문자형 가능
map.set(123,456);  //숫자형 -> 숫자형 저장 가능
map.set(true, "bool_type");  //불리언 자료형 -> 문자형 저장 가능
console.log(map);


//get으로 요소 접근 
console.log(map.get(123));
console.log(map.get("name"));
console.log(map.get(true));


//map.delete 일부삭제
map.delete(123);
console.log(map);


//map.clear로 전체삭제
map.clear();
console.log(map);


//계속 메달아서 한번에 데이터 저장 가능함! 
map.set(123,789).set(false, "bool_type").set("fruit", "banana");
console.log(map);

