import navbar2 from "../components/navbar2.js";
document.getElementById("navbar2").innerHTML=navbar2();
import fetchdata from "../components/fetchdata.js";

let category=localStorage.getItem("category");
let id=localStorage.getItem("showid")
getinfo();
async function getinfo(){
    let url=`http://localhost:3000/products/${id}`
    let res=await fetch(url);
    let data1=await res.json();
    console.log("data",data1);
}
let getfun=async()=>{
    var data=await fetchdata;
    //console.log(data)
    appenddata(data);
}
getfun();
function appenddata(data){
    
    data.map((el)=>{
        if(category=="men"){
            if(el.category==="men's clothing"&& el.id!=id){
                //displaydata(el);
                displaydata1(el);
                //console.log(el);
            }
        }
        else if(category=="women"){
            //displaydata(el);
        }
        
    })
}

function displaydata1(el){
    let div = document.createElement("div")
    let imgdiv = document.createElement("div")
    let img = document.createElement("img")
    img.src = el.img
    imgdiv.setAttribute("id", "imgdiv")
    imgdiv.append(img)
    let brand = document.createElement("h3")
    brand.innerText = el.brand
    let title = document.createElement("h7")
    title.innerText = el.title

    let div1 = document.createElement("div")
    div1.style.display = "flex"
    let rating = document.createElement("p")
    rating.innerText = `${el.rating.rate} out of 5`
    let count = document.createElement("p")
    count.innerText = el.rating.count + " reviews";
    count.style.color = "#007185"
    div1.append(rating, count);
    let div2 = document.createElement("div")
    div2.style.display = "flex"
    let oprice = document.createElement("p")
    oprice.innerText = `₹${el.price}`
    oprice.style.textDecoration = "line-through"
    let price = document.createElement("h4")
    price.innerText = `₹${el.discPrice}`
    let disper = document.createElement("p")
    disper.innerText = `(${el.discount}% off)`
    div2.append(oprice, disper)
    div.append(imgdiv, brand, title, div1,price,div2)
    document.getElementById("relateddiv1").append(div)
}
document.getElementById("womens").addEventListener("click",()=>{
    localStorage.setItem("category","women")
    location.href="./women.html"
})
document.getElementById("mens").addEventListener("click",()=>{
    localStorage.setItem("category","men")
    location.href="./men.html"
})