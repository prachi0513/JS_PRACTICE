let arr = [2, 3, 4, 5];

function double(ele) {
  return ele * ele;
}

function triple(ele) {
  return 3 * ele;
}

function binary(ele) {
  return ele.toString(2);
}

const output = arr.map(binary);

const num = output.map(integ);

function integ(x) {
  return parseInt(x)
}

console.log(num);
