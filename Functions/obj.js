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
// addObj({ name: "ashii", age: 18 }, getObj);
let dataObj = new Promise((resolve, reject) => {
  let data = [
    {
      name: "prachi",
      age: 18,
    },
    {
      name: "chikoo",
      age: 22,
    },
  ];

  let fil = data.filter((ele) => {
    return ele.age === 18;
  });

  if (fil) {
    resolve(fil);
  } else {
    reject("promiss was rejected");
  }
});
dataObj
  .then((data) => {
    console.log("data received from server ---> ", data);
  })
  .catch((data) => {
    console.log("Failed to load data");
  });
