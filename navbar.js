document.getElementById("openSidebar").addEventListener("click",()=>{
    event.preventDefault();
    document.getElementById("sideBar").style="left : 0";
});

document.getElementById("crossBtn").addEventListener("click",()=>{
    event.preventDefault();
    document.getElementById("sideBar").style="left : -28%";
});

document.getElementById("handleSubmit").addEventListener("click",()=>{
   let input = document.getElementById("search").value;
   if(input === "mens"){
    location.href = "";
   }
   else if(input === "womens"){
    location.href = "";
   }
   else if(input === "fashion"){
    location.href = "";
   }
   else if(input === "kids"){
    location.href = "";
   }
   else{
    // write path of home page
    location.href = "";
   }
});