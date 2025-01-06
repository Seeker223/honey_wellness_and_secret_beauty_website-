// nav = document.getElementsByClassName('navigation'),
// menubar= document.getElementsByClassName('menu');

// function navbutton(){
//     menubar.classList.toggle('navigation')
// }
// menuOpenImg = document.
menuOpen = document.querySelector("#menu-btn");
menuClose = document.querySelector("#menu-close");
sideBar = document.querySelector(".mobile-nav");



    sideBar.style.display = "";

menuOpen.addEventListener("click", function menuOpenBtn(){
    sideBar.style.display = "flex";
    menuOpen.style.display = "none";
    menuClose.style.width ='2rem'
    menuClose.style.margin_top =''
    
    
})
// menuOpen.addEventListener("load", function menuOpenBtn(){
//     sideBar.style.display = "none";
    
    
// })
menuClose.addEventListener("click", function menuCloseBtn(){
    sideBar.style.display = "none";
    menuOpen.style.display = "";

})
// menuCloseBtn();
// menuOpenBtn();