

//function statement
function x() {
    console.log("x called");
}


//function expression
let a  = function () {
  console.log("a called");
}
x()
a()

//difference between function statement and function expression is the hoisting .
//we can access the function statement before initialization but we cant access the expression before initialization because
//it is trated as variable.

 
//Anonymous function
// function (){

// }

//Named function expression
let y = function xyz() {
    console.log("named function called");
}

y()

//Argument and parameter

function q (parameter){
    console.log("q");
}

q(Array)

//First clas function  -- > Ability to be used as a values
// passed to anothe rfunction and return from them is know as fire class function.


//first class citizens -- > Same as first class function.


//Arrow Function
