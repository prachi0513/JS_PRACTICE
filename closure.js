// scope chaining
function a() {
    b()
    function b() {
        c()
        function c() {
            console.log(v);
        }
    }
}
let v = 10;
a()

//closure
function fun () {
    let a  = 10 ;

    function y (){
        console.log(a);
    }
    return y
}


//  let z = fun();
//  z();

//  let v = 10;

//  function fun(){
//     console.log(v);
//     v = 20
//  }

//  fun()

