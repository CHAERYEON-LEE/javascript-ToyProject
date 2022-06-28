function FishBread(flavor, price){
    this.flavor = flavor;
    this.price = price;
    this.base = "flour";
}

let bread_1 = new FishBread("cream", 1200);
let bread_2 = new FishBread("redbean", 1000);
let bread_3 = new FishBread("milk", 1500);

console.log(bread_1);
console.log(bread_2);
console.log(bread_3);



//new.target 속성(property)을 사용하여 new와 함께 호출했는지 확인 가능 
function User(name){
    console.log(new.target);
    this.name = name;
}

let result_1 = User("jhon");  //undefinded


let result_2 = new User("jhon");  //new 키워드 이용해서 객체 생성 