let arr = [12, 13, 14, 15, 16, 17, 18, 19, 20];
function get() {
  console.log("get function called");
}

let a = 6;

let object = {
  name: "Prachi",
  age: 22,
  getIntro: function () {
    console.log(this.name + " " + this.age);
  },
};

let object2 = {
  name: "Deepika",
};


//here objec2 is pointing to the object , and it can access the properties of object.
object2.__proto__ = object;
