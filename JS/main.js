//=======================================================
//
//            Start of Sidebar Navigation
//
//=======================================================

//vairables for the sidebar navigation.
const hamburgerButton = document.querySelector('.hamburger-btn');
const closeButton = document.querySelector('.close-btn');

//Open navigation on hamburger click. 
hamburgerButton.addEventListener("click", openNav)
function openNav(){
    document.getElementsByClassName("sidebar")[0].style.width = "30%";
    document.getElementById("main").style.marginRight = "25%";
}

//closing function for closebutton
closeButton.addEventListener("click", closeNav)
function closeNav(){
    document.getElementsByClassName("sidebar")[0].style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}

// $(document).click(function (e) {
 // function closeNav(){
 // }
// });

//scroll function for the sidebar
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementsByClassName("sticky-header").style.top = "0";
//   } else {
//     document.getElementsByClassName("sticky-header").style.top = "-100px";
//   }
//   prevScrollpos = currentScrollPos;
// }

// $( document ).click(function( event ) {
//   let target = $( event.target );
//   if(openNav){
//      closeSideBar();
//   } else {
//     if(target.is( '.sidebar' )){
//       closeNav();
//     }
//   }
// });

//=======================================================
//
//            End of Sidebar Navigation
//
//=======================================================

//=======================================================
//
//             Start of Sticky Header
//
//=======================================================

// function stickyHeader() {
//   if(window.pageYOffset > sticky){
//       header.classList.add('sticky-header');
//   } else {
//       header.classList.remove('sticky-header');
//   }
// }

// window.onscroll = function() {stickyHeader()};

// let header = document.getElementById('sticky-header-nav');
// let sticky = header.offsetTop;


// $(window).scroll(function() {
//     if ($(this).scrollTop() > 1){
//     $('sticky-header-nav').addClass('sticky-header');
//     }
//     else{
//     $('sticky-header-nav').removeClass('sticky-header');
//     }
// });

//=======================================================
//
//               End of Sticky Header
//
//=======================================================

//=======================================================
//
//               Start of Flickity
//
//=======================================================

// let flkty = new Flickity( '.sponsers-carousel', {
//   // options
//   cellAlign: 'left',
//   contain: true
// });

//=======================================================
//
//                End of Flickity
//
//=======================================================

//=======================================================
//
//                  Start of Slick
//
//=======================================================

// $('.variable-width').slick({
//   dots: false,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   centerMode: true,
//   variableWidth: true
// });

$(document).ready(function(){
  $('.carousel-sponser').slick({
      accessibility: true,
      infinite: true,
      autoplay: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true
  });
});

//=======================================================
//
//                    End of Slick
//
//=======================================================

//=======================================================
//
//               Start of Cookie Pop Up
//
//=======================================================

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

//=======================================================
//
//               End of Cookie Pop Up
//
//=======================================================

//=======================================================
//
//               Start of Jquery Test
//
//=======================================================

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

//=======================================================
//
//               End of Jquery Test
//
//=======================================================