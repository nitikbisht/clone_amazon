import navbar2 from "../components/navbar2.js";
document.getElementById("navbar2").innerHTML=navbar2();
import fetchdata from "../components/fetchdata.js";

let category=localStorage.getItem("category");

let getfun=async()=>{
    var data=await fetchdata;
    //console.log(data)
    appenddata(data);
}
getfun();
function appenddata(data){
    data.map((el)=>{
        if(category=="men"){
            if(el.category==="men's clothing"){
                // displaydata(el);
            }
        }
        else if(category=="women"){
            //displaydata(el);
        }
        
    })
}
document.getElementById("womens").addEventListener("click",()=>{
    localStorage.setItem("category","women")
    location.href="./women.html"
})
document.getElementById("mens").addEventListener("click",()=>{
    localStorage.setItem("category","men")
    location.href="./men.html"
})