// scope chaining
// function a() {
//     b()
//     function b() {
//         c()
//         function c() {
//             console.log(v);
//         }
//     }
// }
// let v = 10;
// a()

//closure
function fun () {
    let a  = 10 ;

    function y (){
        console.log(a);
    }
    return y
}

const output = fun()
output()

