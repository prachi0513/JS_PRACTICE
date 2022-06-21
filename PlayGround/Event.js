console.log("Starting");

document.querySelector("#granparent").addEventListener(
  "click",
  function () {
    console.log("grandparent clicked");
  },
  true
);

document.querySelector("#parent").addEventListener(
  "click",
  function () {
    console.log("parent clicked");
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  function (e) {
    console.log("child clicked");
    e.stopPropagation();
  },
  false
);


//when we give true argument event capturing will happen .
//when it is false , which is default behaviour it will act like bubbling .
//if we want to stop this peopagation we cant ' event.stopPropagation() ' function.