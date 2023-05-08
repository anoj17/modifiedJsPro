const username = document.querySelector(".username")

const password = document.querySelector(".password");

const form = document.querySelector(".form");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    fetchData();
})


const checkUser = (users,userInput,passInput) =>{
    let success=false;

  users.map(user=>{

    if(user.phoneVal===userInput){
    
    if(user.passwordVal===passInput){
        success = true
        alert("login successfull!!!")
    }
    }
})
if(!success){
    alert("user not found")
}
}

const fetchData = async () => {
    const userInput = username.value;
    const passInput = password.value;


      await fetch("http://localhost:3000/users",{
        method: "get",
        headers:{
            'Content-Type':"application/json"
        }})

        .then(res=> {
            return res.json()
        })
        .then(data=>{
           console.log(data)
           checkUser(data,userInput,passInput)
        })
}

