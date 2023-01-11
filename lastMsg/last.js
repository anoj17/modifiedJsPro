let message = document.querySelector(".msg")
let text = document.querySelector(".last")
let buttons = document.querySelector(".btn")

buttons.addEventListener('click',()=>{
    let string = message.value;
    text.textContent = string
})



