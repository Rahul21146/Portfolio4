

const menu=document.querySelector(".icon");
const icons=document.querySelector("#mode");
const menuList=document.querySelector(".ul-item");
const navbarList=document.querySelector(".navbar-list1");
let threeDots=true;



function menuswap(){
    if(threeDots==true){
        icons.className="fa-solid fa-xmark";
        threeDots=false;
        menuList.classList.add("active");
    }
    else{
        icons.className="fa-solid fa-bars";
        threeDots=true;
        menuList.classList.remove("active");
    }
}


menu.addEventListener("click",()=>{
    console.log("hello");
    menuswap();
});
navbarList.addEventListener("click",()=>{
    menuswap();
});



var typeData = new Typed(".role", {
    strings: [
      "Web Developer",
      "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });