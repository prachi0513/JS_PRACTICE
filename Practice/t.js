



function allNumber(str){
    let s = str.split('')
     let ans = [];
     for(let i=0;i<s.length;i++){
         if(s[i] == '('){
         }else if(s[i]== ')'){
         }else{
            ans.push(s[i])
         }
     }
     return ans

    
}

const number = (allNumber("6+4(6/2)+9"));

function count(number){

for(let i=0 ; i<number.length ;i++){
  if(typeof number[i] == 'string'){
      console.log("yes");
  }else{
      console.log("no");
  }
}


}

let g = count(number)
console.log(g);