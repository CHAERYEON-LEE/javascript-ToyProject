console.log('line\nfeed');
console.log('line\u{1f60d}feed');

//문자열 길이
let str = "hello\nworld\n!!!";
console.log(str.length);

//문자열 내에 개별 문자 접근 방법
console.log(str.charAt(1));
console.log(str.charCodeAt(1));
console.log(str[3]);

//문자열 검색/변환
let text = "hello, world!!!";
console.log(text.indexOf("l")); //첫번째 만난 문자열 l의 위치를 리턴해줌 
console.log(text.indexOf("l", 5)); //5번쨰 이후부터 탐색하고 싶어~~ 
console.log(text.lastIndexOf("l")); //마지막부터 탐색해줘

console.log(text.includes("Hello")); //false , 무조건 대소문자 구분해서 검색
console.log(text.startsWith("ello")); //false , 처음부터 같아야 함
console.log(text.startsWith("ello", 1)); //true , 1번 인덱스부터 검색해라
console.log(text.endsWith("!!!")); 
console.log(text.endsWith("world")); 

//문자 대소문자 변경
console.log(text.toUpperCase());
console.log(text.toLowerCase());

//문자열 치환
let text_2 = "hello, world!!!";
let changed_text = "";

changed_text = text_2.replace("world", "earth");
console.log(changed_text);

//텍스트 변경하기, 단 한글자밖에 안됨 
console.log(text_2.replace("!", "?"));

//정규식을 이용해서 l을 모두 i로 바꾸기
console.log(text_2.replace(/l/g, "i"));

//문자열 추출
let text_3 = "hello, world!!!";

//위치기반 문자열추출
console.log(text_3.slice(0,5)); // 0~5까지 추출됨
console.log(text_3.slice(4,5)); //5만 추출됨
console.log(text_3.slice(4)); //4이상 모두 추출됨
console.log(text_3.slice(-4)); //뒤에서부터 세서 -4까지 추출됨

console.log(text_3.substring(2,6));
console.log(text_3.substring(6,2));
console.log(text_3.slice(2,6));
console.log(text_3.slice(6,2)); //작동 안함 

//길이기반 문자열 추출
console.log(text_3.substr(2,3));

//문자열 분할
console.log(text_3.split(" "));  //"" 안에는 어떤 기준으로 분할할건지 적어주면 됨 
