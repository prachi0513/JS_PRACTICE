let user = {
    name : "Prachi",
    age:22,
     
}


let user2 = {
    name : "ashii",
    age:21,
}

let user3 = {
    name : "vscode",
    age:21,
}






//function borrowing
let print =  function(city,greet){
    console.log(this.name + " " + city + " "+ greet , this.age);
}



// print.call(user,"delhi","hy")
// print.call(user2,"faridabad","hello")
print.call(user3,"a","hi")

//apply method 

print.apply(user,["goa","maharashtra"])

//bind method 

let newFunc = print.bind(user2,"bangalore","heyy")
newFunc()