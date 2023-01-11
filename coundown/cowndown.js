let num1 = document.querySelector(".num")
let lower1 = document.querySelector(".lower")
let upper1 = document.querySelector(".upper")

let count = 0;

lower1.addEventListener("click",()=>{
    count--;
    num1.textContent = count; 

if(count < 0){
    num1.style.color = 'red';
}
if(count == 0){
    num1.style.color = 'black'; 
}
})

upper1.addEventListener("click",()=>{
    count++;
    num1.textContent = count;

if(count > 0){
    num1.style.color = 'green';
}
if(count == 0){
    num1.style.color = 'black'; 
}
})




