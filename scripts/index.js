import loginGrid from "../components/landingLoginGrid.js";
import loginReq from "../components/loginreq.js";
import loginGrid2 from "../components/landingfooterlogin.js";
import loginReq2 from "../components/loginreq2.js";

const logFlag = localStorage.getItem('login');

if(logFlag==="true"){
    console.log(logFlag);
    document.querySelector('#landing-login-grid').innerHTML = loginGrid();
    document.querySelector('.landing-browsing-history').innerHTML = loginGrid2();

}else{
    console.log(logFlag);
    document.querySelector('#landing-login-grid').innerHTML = loginReq();
    document.querySelector('.landing-browsing-history').innerHTML = loginReq2();
}

localStorage.setItem('login',true);
