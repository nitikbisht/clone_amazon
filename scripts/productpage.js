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
    display(data1)
}
function display(data){
    document.getElementById("adddescription").innerText=""
    document.getElementById("imgdiv").innerText=""
    let img=document.createElement("img")
    img.src=data.img
    document.getElementById("imgdiv").append(img)
    let p=document.createElement("p")
    p.innerText=data.description
    // console.log(data.description)
    document.getElementById("adddescription").append(p)
    displaydetail(data)
}
function displaydetail(el){
    let div=document.createElement("div")
    let div1=document.createElement("div")
    let head=document.createElement("h1")
    head.innerText=`${el.brand} ${el.title}`
    let div11 = document.createElement("div")
    div11.style.display = "flex"
    let rating = document.createElement("p")
    rating.innerText = `${el.rating.rate} out of 5`
    let count = document.createElement("p")
    count.innerText = el.rating.count + " reviews";
    count.style.color = "#007185"
    div11.append(rating, count);
    div1.append(head,div11);
    let div2=document.createElement("div")
    let mrp = document.createElement("p")
    mrp.innerText=`M.R.P : ₹${el.price}`
    mrp.style.textDecoration = "line-through"
    let div22=document.createElement("div")
    div22.style.display="flex"
    let deal = document.createElement("p")
    deal.innerText="Deal of the Day : "
    let op = document.createElement("h4")
    op.innerText=`₹${el.discPrice}`
    div22.append(deal,op)
    let end = document.createElement("p")
    end.innerText="Ends in 10 days"
    end.style.marginLeft="50%"
    let save = document.createElement("p")
    let dif=+el.price-el.discPrice
    // console.log(dif)
    save.innerText=`You Save: ₹${dif} (${el.discount}% off)`
    let tax = document.createElement("p")
    tax.innerText="Inclusive of all taxes"
    tax.style.marginLeft="50%"
    div2.append(mrp,div22,end,save,tax)
    let div3=document.createElement("div")
    div3.style.display="flex"
    let div31=document.createElement("div")
    let img1=document.createElement("img")
    img1.src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png"
    let p1=document.createElement("p")
    p1.innerText="Pay on Delivery"
    let div32=document.createElement("div")
    let img2=document.createElement("img")
    img2.src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png"
    let p2=document.createElement("p")
    p2.innerText="Free Delivery"
    let div33=document.createElement("div")
    let img3=document.createElement("img")
    img3.src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png"
    let p3=document.createElement("p")
    p3.innerText="30 Days Returns & Exchange"
    let div34=document.createElement("div")
    let img4=document.createElement("img")
    img4.src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png"
    let p4=document.createElement("p")
    p4.innerText="Amazon Delivered"
    div31.append(img1,p1)
    div32.append(img2,p2)
    div33.append(img3,p3)
    div34.append(img4,p4)
    div3.append(div31,div32,div33,div34)
    document.getElementById("pricediv").append(div1,div2,div3)
}
let getfun=async()=>{
    var data=await fetchdata;
    //console.log(data)
    appenddata(data);
}
getfun();
function appenddata(data){
    document.getElementById("relateddiv1").innerText=""
    data.map((el)=>{
        if(category=="men"){
            if(el.category==="men's clothing"&& el.id!=id){
                //displaydata(el);
                
                displaydata1(el);
                //console.log(el);
            }
        }
        else if(category=="women"){
            if(el.category==="women's clothing"&& el.id!=id){
                displaydata1(el);
                // console.log(el);
            }
        }
        
    })
}

function displaydata1(el){
    let div = document.createElement("div")
    div.addEventListener("click",()=>{
        localStorage.setItem("showid",el.id)
        location.href="./productpage.html"
    })
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
    let price = document.createElement("h3")
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