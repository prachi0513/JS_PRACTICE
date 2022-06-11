let radius = [1, 3, 5, 4, 5];

const area = function (r) {
  return Math.PI * r * r;
};

const diameter = function(d){
  return 2 * d
}

const calculate = function (radius,logic) {
  let output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }

  return output
};

console.log(calculate(radius,area));
console.log(calculate(radius,diameter));
