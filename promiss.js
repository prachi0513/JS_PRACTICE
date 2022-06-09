let time = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("promiss completed")
    },2000)
})


time.then((result)=>{
    console.log(result);
})