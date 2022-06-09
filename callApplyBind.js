let user = {
    name : "Prachi",
    age:22,
     
}

//function borrowing
let print =  function(city,greet){
    console.log(this.name + " " + city + " "+ greet , this.age);
}
print.call(user,"delhi","hy")


let user2 = {
    name : "ashii",
    age:21,
}
print.call(user2,"faridabad","hello")

//apply method 

print.apply(user,["goa","maharashtra"])

//bind method 

let newFunc = print.bind(user2,"bangalore","heyy")
newFunc()