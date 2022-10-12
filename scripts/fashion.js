import navbar2 from "../components/navbar2.js";
document.getElementById("navbar2").innerHTML=navbar2();
localStorage.setItem("category","")
document.getElementById("men").addEventListener("click",()=>{
    localStorage.setItem("category","men")
    location.href="./men.html"
})
document.getElementById("mens").addEventListener("click",()=>{
    localStorage.setItem("category","men")
    location.href="./men.html"
})
document.getElementById("women").addEventListener("click",()=>{
    localStorage.setItem("category","women")
    location.href="./women.html"
})
document.getElementById("womens").addEventListener("click",()=>{
    localStorage.setItem("category","women")
    location.href="./women.html"
})

// import footer from "../footer/footer.js";
// document.getElementById("footer").innerHTML=footer();
