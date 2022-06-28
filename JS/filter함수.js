let users = [
    {name : "bob", age : 17, job : false},
    {name : "alice", age : 20, job : false},
    {name : "jhon", age : 27, job : true}
];

let filter_job = users.filter(function(user){
    return user.job == false;
});
console.log(filter_job);

let filter_age = users.filter(function(user){
    return user.age >= 19;
});
console.log(filter_age);