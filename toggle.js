
let button1 = document.querySelector(".button1")

button1.addEventListener("click", function() {
  document.querySelector(".blue").hidden = true;
  document.querySelector(".red").hidden = false;
} 
,false);

let button2 = document.querySelector(".button2")

button2.addEventListener("click", function() {
  document.querySelector(".red").hidden = true;
  document.querySelector(".blue").hidden = false;
} 
,false);

