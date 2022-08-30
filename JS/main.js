const hamburgerButton = document.querySelector('.hamburger-btn');
const closeButton = document.querySelector('.close-btn');

hamburgerButton.addEventListener("click", openNav)
function openNav(){
    document.getElementsByClassName("sidebar")[0].style.width = "30%";
    document.getElementById("main").style.marginRight = "25%";
    document.getElementsByClassName("main-logo").style.marginRight = "25%";
}


closeButton.addEventListener("click", closeNav)
function closeNav(){
    document.getElementsByClassName("sidebar")[0].style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}




// $(window).scroll(function() {
//     if ($(this).scrollTop() > 1){
//     $('sticky-header-nav').addClass('sticky-header');
//     }
//     else{
//     $('sticky-header-nav').removeClass('sticky-header');
//     }
// });


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("sticky-header").style.top = "0";
  } else {
    document.getElementsByClassName("sticky-header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

// let cookieModal = document.querySelector(".cookie-consent-modal")
// let changeCookieBtn = document.querySelector(".btn.cancel")
// let acceptCookieBtn = document.querySelector(".btn.accept")

// changeCookieBtn.addEventListener("click", function (){
//   cookieModal.classList.remove("active")
// })

// acceptCookieBtn.addEventListener("click", function (){
//   cookieModal.classList.remove("active")
//   localStorage.setItem("cookieAccepted", "yes")
// })

// setTimeout(function(){
//   let cookieAccepted = localStorage.getItem("cookieAccepted")
//   if (cookieAccepted != "yes"){
//   cookieModal.classList.add("active")
//   }
// }, 2000)











// window.onscroll = function() {stickyHeader()};

// let header = document.getElementById('sticky-header-nav');
// let sticky = header.offsetTop;

// function stickyHeader() {
//     if(window.pageYOffset > sticky){
//         header.classList.add('sticky-header');
//     } else {
//         header.classList.remove('sticky-header');
//     }
// }







// Testing if jquery is working
// window.onload = function() {
//     if (window.jQuery) {  
//         // jQuery is loaded  
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }