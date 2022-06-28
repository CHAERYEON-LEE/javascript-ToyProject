let users = [
    {name : "bob", age : 17, job : false},
    {name : "alice", age : 20, job : false},
    {name : "jhon", age : 27, job : true}
];

let find_job = users.find(function(user){
    return user.job == false;
});
console.log(find_job);

let find_age = users.find(function(user){
    return user.age >= 19;
});
console.log(find_age);