let obj = [
  { name: "prachi", age: 18 },
  { name: "juan", age: 22 },
];

function getObj() {
  setTimeout(() => {
    obj.map((ele) => {
      console.log(ele.name);
    });
  }, 1000);
}

function addObj(newObj, cb) {
  setTimeout(() => {
    obj.push(newObj);
    cb();
  }, 2000);
}

addObj({ name: "ashii", age: 18 }, getObj);
