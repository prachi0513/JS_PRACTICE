function checkAnagram(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;

  if (len1 !== len2) {
    return false;
  }

  if (str1.split("").sort().join() === str2.split("").sort().join()) {
   return true;
  }else{
   return false;
  }
}

let ans = checkAnagram("indian", "naadni");
console.log(ans);
