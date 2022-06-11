

console.log("start");

setTimeout(function x(){
    console.log("set Time out  callback function");
})


let start = new Date().getTime();
let end = start
while(end < start+10000){
    end = new Date().getTime()
}

console.log("while expired");