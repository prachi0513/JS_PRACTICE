
// function x() {
//     let i = 2;
//     setTimeout(() => {
//         console.log(i);
//     }, 3000);
//     console.log("logged");
// }
// x()


function x() {

    for (let i = 0; i < 5; i++) {
        function y(i) {
            setTimeout(() => {
                console.log(i);
            }, i * 1000);
        }
        y(i)
    }
   
}

x()