
x()
a()

//function statement
function x() {
    console.log("x called");
}


//function expression
let a  = function () {
  console.log("a called");
}

//difference between function statement and function expression is the hoisting .
//we can access the function statement before initialization but we cant access the expression before initialization because
//it is trated as variable.
