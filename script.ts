let myName: any = document.getElementById("name")
let desig: any = document.getElementById("desig")
let phone: any = document.getElementById("phone")
let email: any = document.getElementById("email")
let add: any = document.getElementById("add")
let pass: any = document.getElementById("pass")
let deg: any = document.getElementById("deg")
let uni: any = document.getElementById("uni")
let pass1: any = document.getElementById("pass1")
let deg1: any = document.getElementById("deg1")
let uni1: any = document.getElementById("uni1")
let pass2: any = document.getElementById("pass2")
let deg2: any = document.getElementById("deg2")
let uni2: any = document.getElementById("uni2")
let skill1: any = document.getElementById("skill1")
let skill2: any = document.getElementById("skill2")
let skill3: any = document.getElementById("skill3")
let skill4: any = document.getElementById("skill4")
let skill5: any = document.getElementById("skill5")
let lang1: any = document.getElementById("lang1")
let lang2: any = document.getElementById("lang2")
let language3: any = document.getElementById("language3")
let job: any = document.getElementById("job")
let styear: any = document.getElementById("styear")
let endyear: any = document.getElementById("endyear")
let company: any = document.getElementById("company")
let locat: any = document.getElementById("locat")
let ach1: any = document.getElementById("ach1")
let ach2: any = document.getElementById("ach2")
let ach3: any = document.getElementById("ach3")
let job1: any = document.getElementById("job1")
let styear1: any = document.getElementById("styear1")
let endyear1: any = document.getElementById("endyear1")
let company1: any = document.getElementById("company1")
let locat1: any = document.getElementById("locat1")
let ach4: any = document.getElementById("ach4")
let ach5: any = document.getElementById("ach5")
let ach6: any = document.getElementById("ach6")
let job3: any = document.getElementById("job3")
let styear3: any = document.getElementById("styear3")
let endyear3: any = document.getElementById("endyear3")
let company3: any = document.getElementById("company3")
let locat3: any = document.getElementById("locat3")
let ach7: any = document.getElementById("ach7")
let ach8: any = document.getElementById("ach8")
let ach9: any = document.getElementById("ach9")
let pic: any = document.getElementById("pic")


let submitBtn = document.getElementById('submitBtn')
let form = document.getElementById('form')

form?.addEventListener("submit", (event)=>{
 event.preventDefault();


 localStorage.setItem("name", myName.value)
 localStorage.setItem("desig", desig.value)
 localStorage.setItem("phone", phone.value)
 localStorage.setItem("email", email.value)
 localStorage.setItem("add", add.value)
 localStorage.setItem("pass", pass.value)
 localStorage.setItem("deg", deg.value)
 localStorage.setItem("uni", uni.value)
 localStorage.setItem("pass1", pass1.value)
 localStorage.setItem("deg1", deg1.value)
 localStorage.setItem("uni1", uni1.value)
 localStorage.setItem("pass2", pass2.value)
 localStorage.setItem("deg2", deg2.value)
 localStorage.setItem("uni2", uni2.value)
 localStorage.setItem("skill1", skill1.value)
 localStorage.setItem("skill2", skill2.value)
 localStorage.setItem("skill3", skill3.value)
 localStorage.setItem("skill4", skill4.value)
 localStorage.setItem("skill5", skill5.value)
 localStorage.setItem("lang1", lang1.value)
 localStorage.setItem("lang2", lang2.value)
 localStorage.setItem("language3", language3.value)
 localStorage.setItem("job", job.value)
 localStorage.setItem("styear", styear.value)
 localStorage.setItem("endyear", endyear.value)
 localStorage.setItem("company", company.value)
 localStorage.setItem("locat", locat.value)
 localStorage.setItem("ach1", ach1.value)
 localStorage.setItem("ach2", ach2.value)
 localStorage.setItem("ach3", ach3.value)
 localStorage.setItem("job1", job1.value)
 localStorage.setItem("styear1", styear1.value)
 localStorage.setItem("endyear1", endyear1.value)
 localStorage.setItem("company1", company1.value)
 localStorage.setItem("locat1", locat1.value)
 localStorage.setItem("ach4", ach4.value)
 localStorage.setItem("ach5", ach5.value)
 localStorage.setItem("ach6", ach6.value)
 localStorage.setItem("job3", job3.value)
 localStorage.setItem("styear3", styear3.value)
 localStorage.setItem("endyear3", endyear3.value)
 localStorage.setItem("company3", company3.value)
 localStorage.setItem("locat3", locat3.value)
 localStorage.setItem("ach7", ach7.value)
 localStorage.setItem("ach8", ach8.value)
 localStorage.setItem("ach9", ach9.value)

window.location.href = "./resume/resume.html"
  


if(pic.files && pic.files[0]){
   let reader = new FileReader()
   reader.addEventListener("load", ()=>{
    let textImg: any = reader.result
    localStorage.setItem("profile_pic", textImg)
    
    
   })
    reader.readAsDataURL(pic.files[0])
    
}



});



