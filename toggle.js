


function hidden(){ 
    red.style.display = 'none'; 
};

let button1 = document.querySelector(".red")
let button2 = document.querySelector(".blue")

button1.addEventListener("click", function(){
    hidden()
    red() 
});

button2.addEventListener("click", function(){
    blue()
    
});