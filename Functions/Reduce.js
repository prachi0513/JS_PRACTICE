let arr = [5, 5, 7, 84, 7];

// const output = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);

// console.log(output);

const maxNumber = arr.reduce(function (acc, curr) {
  if (acc < curr) {
    acc = curr;
  }

  return acc;
}, 0);

console.log(maxNumber);
