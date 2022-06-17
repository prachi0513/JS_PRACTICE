let name = {
  firstName: "John",
  lastName: "Doe",
};

let printName = function (state , country , count) {
  console.log(this.firstName + " " + this.lastName + " "+ state +" "+ country +" "+ count);
};

let Output = printName.bind(name , "hyderabad" ,"country" );
Output(12);

Function.prototype.myBind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0],[...params,...args2]);
  };
};

let myOutput = printName.myBind(name , "hyderabad","country");
myOutput(15);
