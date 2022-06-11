function x (y){
    console.log("x logged");
    y()
}

x(function y(){
    console.log("y logged");
})

setTimeout(function(){
   console.log("setTimeout logged");
},3000)