

const fname = document.querySelector('.first-name');
const lname = document.querySelector('.last-name');
const phone = document.querySelector('.phone');
const password = document.querySelector('.pwd');
const cpassword = document.querySelector('.cpwd');
const form = document.querySelector('.form');

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    validate();
    submitForm();
})

const validate = () =>{
   
const fnameVal = fname.value.trim();
const lnameVal = lname.value.trim();
const phoneVal = phone.value.trim();
const passwordVal = password.value.trim();
const cpasswordVal = cpassword.value.trim();
 
if(fnameVal ==""){
    setErrorMsg(fname,"cannot be blank");
}
else{
    setSuccess(fname);
}
if(lnameVal==""){
    setErrorMsg(lname,"cannot be blank");
}
else{
    setSuccess(lname)
}


if(phoneVal==""){
    setErrorMsg(phone,"cannot be blank");
}
else if(phoneVal.length!==10){
    setErrorMsg(phone,"phone number must be 10 digit");
}
else if(isNaN(phoneVal)){
    setErrorMsg(phone,"Enter only numbers");
}
else if(phoneVal.charAt(0)!=9 && phoneVal.charAt(1)!=8){
    setErrorMsg(phone,"start only 98");
}
else{
    setSuccess(phone)
}


if(passwordVal==""){
    setErrorMsg(password,"Enter your password");
}
else{
    setSuccess(password);
}


if(cpasswordVal==""){
    setErrorMsg(cpassword,"Enter your password");
}
else if(passwordVal!==cpasswordVal){
    setErrorMsg(cpassword,"wrong password");
}
else{
    setSuccess(cpassword);
}
}


const setErrorMsg = (input,errorMsg) =>{
   const first = input.parentElement;
   const small = first.querySelector("small");
   first.className = "first error";
   small.innerText = errorMsg;
}

const setSuccess = (input) =>{
    const first = input.parentElement;
    first.classList.remove('error');

}
const submitForm = async () => {
 
    const fnameVal = fname.value.trim();
const lnameVal = lname.value.trim();
const phoneVal = phone.value.trim();
const passwordVal = password.value.trim();
const cpasswordVal = cpassword.value.trim();

    const id = 20;
    const data = {
        fnameVal,lnameVal,phoneVal,passwordVal,cpasswordVal
    }
    console.log("hello",data)
   
    await fetch("http://localhost:3000/users",{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>{
       return res.json();
    })
    .then(data=>{
        console.log(data)
    })
    .catch(error=>{
        console.log("error",error)
    })
}
