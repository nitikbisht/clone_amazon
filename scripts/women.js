import navbar2 from "../components/navbar2.js";
document.getElementById("navbar2").innerHTML=navbar2();
import fetchdata from "../components/fetchdata.js";

localStorage.setItem("showid","")
let category=localStorage.getItem("category");
let getfun=async()=>{
    var data=await fetchdata;
    console.log(data)
    appenddata(data);
}
getfun();
function appenddata(data){
    data.map((el)=>{
        if(el.category==="women's clothing"){
            displaydata(el);
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
function displaydata(el){
    let div=document.createElement("div")
    div.addEventListener("click",()=>{
        localStorage.setItem("showid",el.id)
        location.href="./productpage.html"
    })
            let imgdiv=document.createElement("div")
            let img=document.createElement("img")
            img.src=el.img
            imgdiv.setAttribute("id","imgdiv")
            imgdiv.append(img)
            let brand=document.createElement("h2")
            brand.innerText=el.brand
            let title=document.createElement("h3")
            title.innerText=el.title
            
            let div1=document.createElement("div")
            div1.style.display="flex"
            let rating=document.createElement("p")
            let star=document.createElement("i")
            star.setAttribute("class","fa-solid fa-star")
            star.style="color:yellow"
            rating.innerText=`${el.rating.rate} out of 5`
            // div1.append(star);
            let count=document.createElement("p")
            count.innerText=el.rating.count+" reviews";
            count.style.color="#007185"
            div1.append(rating,count);
            let div2=document.createElement("div")
            div2.style.display="flex"
            let oprice=document.createElement("p")
            oprice.innerText=`₹${el.price}`
            oprice.style.textDecoration="line-through"
            let price=document.createElement("h4")
            price.innerText=`₹${el.discPrice}`
            let disper=document.createElement("p")
            disper.innerText=`(${el.discount}% off)`
            div2.append(price,oprice,disper)
            div.append(imgdiv,brand,title,div1,div2)
            document.getElementById("showresult").append(div);
}