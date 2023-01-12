const blbOff = document.querySelector(".bulbOff")
const blbOn = document.querySelector(".bulbOn")

const btnOff = document.querySelector(".off")
const btnOn = document.querySelector(".on")

btnOn.addEventListener('click',()=>{
    blbOn.classList.remove("action")
})

btnOff.addEventListener('click',()=>{
    blbOn.classList.add("action")
})

