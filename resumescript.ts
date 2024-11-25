let name1 = localStorage.getItem("name");

window.addEventListener("load", () => {

let desig = localStorage.getItem("desig");
let phone = localStorage.getItem("phone");
let email = localStorage.getItem("email");
let add = localStorage.getItem("add");
let pass = localStorage.getItem("pass");
let deg = localStorage.getItem("deg");
let uni = localStorage.getItem("uni");
let pass1 = localStorage.getItem("pass1");
let deg1 = localStorage.getItem("deg1");
let uni1 = localStorage.getItem("uni1");
let pass2 = localStorage.getItem("pass2");
let deg2 = localStorage.getItem("deg2");
let uni2 = localStorage.getItem("uni2");
let skill1 = localStorage.getItem("skill1");
let skill2 = localStorage.getItem("skill2");
let skill3 = localStorage.getItem("skill3");
let skill4 = localStorage.getItem("skill4");
let skill5 = localStorage.getItem("skill5");
let lang1 = localStorage.getItem("lang1");
let lang2 = localStorage.getItem("lang2");
let language3 = localStorage.getItem("language3");
let job = localStorage.getItem("job");
let styear = localStorage.getItem("styear");
let endyear = localStorage.getItem("endyear");
let company = localStorage.getItem("company");
let locat = localStorage.getItem("locat");
let ach1 = localStorage.getItem("ach1");
let ach2 = localStorage.getItem("ach2");
let ach3 = localStorage.getItem("ach3");
let job1 = localStorage.getItem("job1");
let styear1 = localStorage.getItem("styear1");
let endyear1 = localStorage.getItem("endyear1");
let company1 = localStorage.getItem("company1");
let locat1 = localStorage.getItem("locat1");
let ach4 = localStorage.getItem("ach4");
let ach5 = localStorage.getItem("ach5");
let ach6 = localStorage.getItem("ach6");
let job3 = localStorage.getItem("job3");
let styear3 = localStorage.getItem("styear3");
let endyear3 = localStorage.getItem("endyear3");
let company3 = localStorage.getItem("company3");
let locat3 = localStorage.getItem("locat3");
let ach7 = localStorage.getItem("ach7");
let ach8 = localStorage.getItem("ach8");
let ach9 = localStorage.getItem("ach9");

let picture = localStorage.getItem("profile_pic");

let resName: any = document.getElementById('resName')
 resName.textContent = name1

let resDesig: any = document.getElementById('resDesig')
 resDesig.textContent = desig 

let resPhone: any = document.getElementById('resPhone')
 resPhone.textContent = phone 

let resEmail: any = document.getElementById('resEmail')
 resEmail.textContent = email  

let resAdd: any = document.getElementById('resAdd')
 resAdd.textContent = add 

let passYear: any = document.getElementById('passYear')
 passYear.textContent = pass 

let resDeg: any = document.getElementById('resDeg')
 resDeg.textContent = deg 

let resUni: any = document.getElementById('resUni')
 resUni.textContent = uni 

let passYear1: any = document.getElementById('passYear1')
 passYear1.textContent = pass1  

let resDeg1: any = document.getElementById('resDeg1')
 resDeg1.textContent = deg1 

let resUni1: any = document.getElementById('resUni1')
 resUni1.textContent = uni1

 let passYear2: any = document.getElementById('passYear2')
 passYear2.textContent = pass2  

let resDeg2: any = document.getElementById('resDeg2')
 resDeg2.textContent = deg2 

let resUni2: any = document.getElementById('resUni2')
 resUni2.textContent = uni2
 
let resSkill1: any = document.getElementById('resSkill1')
 resSkill1.textContent = skill1 

let resSkill2: any = document.getElementById('resSkill2')
 resSkill2.textContent = skill2
 
let resSkill3: any = document.getElementById('resSkill3')
 resSkill3.textContent = skill3 

let resSkill4: any = document.getElementById('resSkill4')
 resSkill4.textContent = skill4 

let resSkill5: any = document.getElementById('resSkill5')
 resSkill5.textContent = skill5 

let resLang1: any = document.getElementById('resLang1')
 resLang1.textContent = lang1 

let resLang2: any = document.getElementById('resLang2')
 resLang2.textContent = lang2 

let resLang3: any = document.getElementById('resLang3')
 resLang3.textContent = language3 

let resStYear: any = document.getElementById('resStYear')
 resStYear.textContent = styear 

let resEndYear: any = document.getElementById('resEndYear')
 resEndYear.textContent = endyear 

let resCompany: any = document.getElementById('resCompany')
 resCompany.textContent = company 

let resLocat: any = document.getElementById('resLocat')
 resLocat.textContent = locat  

let resJob: any = document.getElementById('resJob')
 resJob.textContent = job  
 
let resAchv1: any = document.getElementById('resAchv1')
 resAchv1.textContent = ach1  

let resAchv2: any = document.getElementById('resAchv2')
 resAchv2.textContent = ach2 

let resAchv3: any = document.getElementById('resAchv3')
 resAchv3.textContent = ach3

let resStYear2: any = document.getElementById("resStYear2")
resStYear2.textContent = styear1 

let resEndYear2: any = document.getElementById("resEndYear2")
resEndYear2.textContent = endyear1 

let resCompany2: any = document.getElementById("resCompany2")
resCompany2.textContent = company1 

let resLocat2: any = document.getElementById("resLocat2")
 resLocat2.textContent = locat1  

let resJob2: any = document.getElementById("resJob2")
 resJob2.textContent = job1  
 
let resAchv4: any = document.getElementById("resAchv4")
 resAchv4.textContent = ach4  

let resAchv5: any = document.getElementById("resAchv5")
 resAchv5.textContent = ach5 

let resAchv6: any = document.getElementById("resAchv6")
 resAchv6.textContent = ach6 

let resStYear3: any = document.getElementById("resStYear3")
 resStYear3.textContent = styear3 
 
let resEndYear3: any = document.getElementById("resEndYear3")
 resEndYear3.textContent = endyear3 
 
let resCompany3: any = document.getElementById("resCompany3")
resCompany3.textContent = company3 
 
let resLocat3: any = document.getElementById("resLocat3")
  resLocat3.textContent = locat3  
 
let resJob3: any = document.getElementById("resJob3")
  resJob3.textContent = job3  
  
let resAchv7: any = document.getElementById("resAchv7")
  resAchv7.textContent = ach7  
 
let resAchv8: any = document.getElementById("resAchv8")
  resAchv8.textContent = ach8 
 
let resAchv9: any = document.getElementById("resAchv9")
  resAchv9.textContent = ach9  


let resImg: any = document.getElementById('resImg')
 resImg.src = picture
 
});

const printResume = () => {
    window.print();
  };
  
  document.getElementById("print_btn")?.addEventListener("click", printResume);

let edit_btn = document.getElementById("edit_btn");

edit_btn?.addEventListener("click", ()=>{
  window.history.back()
})
let share_btn = document.getElementById("share_btn");
let anchor = document.getElementById("anchor");
let userName;
if (name1){
 userName = name1.toLowerCase().replace(/\s+/g,"-")
}else{
  userName = "user"
}

let baseUrl = "http://127.0.0.1:5500/resume/resume.html";
let uniqueUrl = `${baseUrl}?/${name1}`

share_btn?.addEventListener("click", ()=>{
  anchor?.setAttribute("href", uniqueUrl)
})

let copy_btn = document.getElementById("copy_btn");
  
copy_btn?.addEventListener("click", ()=>{
  navigator.clipboard.writeText(uniqueUrl).then(()=>{
    alert("Link Successfuly Copied")
  })
})


