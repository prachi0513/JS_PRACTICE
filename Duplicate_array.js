
function count(str) {
    var count = str.split('')
    return count
}

let rescount = count("ghihggg")

// console.log(rescount);

function highest(rescount) {
    let count = {}
    rescount.forEach(ele => {
        count[ele] ? count[ele]++ : count[ele] = 1;
    });
    return count;
}

let h = highest(rescount)
console.log(h);

