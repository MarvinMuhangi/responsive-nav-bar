const humburger = document.querySelector('.humburger');
const navMenu = document.querySelector('.nav-menu');
const mainBody = document.querySelector('.main-body')
humburger.addEventListener('click', menu);

function menu(){
    navMenu.classList.toggle('active') ;
    humburger.classList.toggle('active');
    // console.log(navMenu.classList.toggle('active'));  
    mainBody.style.margin.top="50px"

};
// if( navMenu.style.width="100%"){
//     mainBody.style.position = "fixed";
//     mainBody.style.top = "40%";
//     mainBody.style.width ="100%";
//     console.log("true")
// } else{
//     mainBody.style.position = "fixed";
//     mainBody.style.top = "0";
//     mainBody.style.width ="100%";
//     console.log("false")
// }

