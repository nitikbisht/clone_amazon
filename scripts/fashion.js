import navbar2 from "../components/navbar2.js";
document.getElementById("navbar2").innerHTML=navbar2();
document.getElementById("men").addEventListener("click",()=>{
    localStorage.setItem("category","men")
    location.href="./men.html"
})
