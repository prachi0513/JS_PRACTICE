
let b = {
    name: "prachi",
    last:"vats",
    second : {
        name:"Chikoo",
        last :"sharma"
    }
}

//shalow copy

let com = {...b}
com.name = "vhee"
com.second.name="chikoo-vats"
// console.log(com);
// console.log(b);

// deep copy

let fruits = {
    apple : "red",
    mango :"yellow",
    kiwi : {
        color : "green",
        price :100
    }
}

let copy = JSON.parse(JSON.stringify(fruits));
copy.kiwi.color="yellow frew"
console.log("copy",copy);
console.log(fruits);