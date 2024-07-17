let body = document.getElementById("body");
let button = document.getElementById("button");
let h1 = document.getElementById("h1");
let p = document.getElementById("p");

button.onclick = function () {
  //   if (body.style.backgroundColor == "white") {
  //     body.style.backgroundColor = "black";
  //     h1.classList.add(".text-color");
  //     p.classList.add(".text-color");
  //   } else {
  //     body.style.backgroundColor = "white";
  //     h1.classList.remove(".text-color");
  //     p.classList.remove("text-color");
  //   }
  body.classList.toggle("text-color");
};
