
function mostOccur(str){
    let spli = str.split('')
    let count = {}
    spli.forEach(ele => {
        count[ele] ?  count[ele]++ : count[ele]=1
    });
    
    let max = 0;
    let finKey ;
    for(let key in count){
        if(count[key]>max){
             finKey=key
        }
    }

    return finKey
}


let ans = mostOccur("tessssstsss")
console.log(ans);