let obj = {
    a: 2,
    b: 6
}

// Object.keys(obj).forEach(key => {
//     if (key == "a" ? obj[key]++ : obj[key] == 6)
//         console.log(key, obj[key]);
// });

for(key in obj){
    if(key=='a'){
        obj[key]++
    }
}

console.log(obj);