let str = "aaanhbhhhh";

let set = new Set();

let words = str.split("").forEach((ele) => {
  set.add(ele);
});

console.log(set);
