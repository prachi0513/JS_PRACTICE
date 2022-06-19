function multiply(x, y) {
  console.log(x * y);
}

let output = multiply.bind(this, 2);
output(3);

let three = multiply.bind(this, 4);
three(4);

//--by using closuress-///

function fun(x) {
  return function (y) {
    console.log(x * y);
  };
}

let outputClosuress = fun(3);
outputClosuress(4);

// --------------------//

function add(a) {
  return function s(b) {
    console.log(a + b);
  };
}

let res = add(3)(5);
