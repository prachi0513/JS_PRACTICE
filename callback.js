


function sum(a,b,cb){

    console.log("sum answer",a+b);
    cb(6)
}

function multiply (y){
    console.log("last multiplty", y*y);
    
}

function main(cb,cb2){
    console.log("main executed");
    console.log("sum started");
    cb(6,5,cb2)
}

main(sum,multiply);