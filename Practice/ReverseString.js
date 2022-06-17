
//first approach
function reverseStr(str) {
    let split = str.split('')
    let st = "";
    for (let i = split.length-1; i >= 0; i--) {
        st+= split[i]
    }
    return st
}

//second approach
function rev(str){
    return str.split('').reverse().join('')
}




let ans = reverseStr("abc")
console.log(typeof(ans));
console.log("answer",ans);
console.log(rev("hello"));