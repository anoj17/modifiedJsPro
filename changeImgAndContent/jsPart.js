
(function(){
const btns = document.querySelector("btn")
const imgs = document.getElementsByTagName("img")
const para = document.getElementsByTagName("p")
const proName = document.getElementsByTagName("h3")

const index = 0;
const professor = []

function proDeatils(img,name,text){
    this.img = img;
    this.name = name;
    this.text = text;
}
function proDetail(img,name,text){

    let Img = `${img}.jpg`
    let proDeatils = new proDeatils(Img,name,text)

    professor.push(proDeatils);
}

proDeatil(0,"PRADIP PARIYAR","Hello I'am Pradip pariyar.And I am going to teach you Science Subject. I like to teach and give some information to student. I like childrens so I choose teaching. So I am form Gorkha which is most of the beautiful place of Nepal.I was graduate BESE degree form NCIT.")
proDeatil(1,"RAJU YADAV","Hello I'am raju yadav.And I am going to teach you Science Subject. I like to teach and give some information to student. I like childrens so I choose teaching. So I am form Janakpur which is most of the beautiful place of Nepal.I was graduate BESE degree form NCIT.")
proDeatil(2,"ANOJ BUDATHOKI","Hello I'am Anoj budathoki.And I am going to teach you Science Subject. I like to teach and give some information to student. I like childrens so I choose teaching. So I am form Syanfja which is most of the beautiful place of Nepal.I was graduate BESE degree form NCIT.")
proDeatil(3,"ANZEEL CHY","Hello I'am Anjeel chaudhary.And I am going to teach you Science Subject. I like to teach and give some information to student. I like childrens so I choose teaching. So I am form Kailali which is most of the beautiful place of Nepal.I was graduate BESE degree form NCIT.")

btns.forEach(function(button){
     button.addEventListener("click",function(e){
        if(e.target.parentElement.classList.contains("leftArr")){
            if(index === 0){
                index = professor.length
            }
            index--
            imgs.src = professor[index].img
            proName.textContent = professor[index].name
            para.textContent = professor[index].text
            
        }
        if(e.target.parentElement.classList.contains("rightArr")){
            if(index === professor.length){
                index = 0
            }
           
            imgs.src = professor[index].img
            proName.textContent = professor[index].name
            para.textContent = professor[index].text
            
        }
     })
})

})