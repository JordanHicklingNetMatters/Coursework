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
// Basic function to lock the scroll it currently locks the screen once then locks it completely once you exit then press it again it allows scrolling therefore this is not working. 
function lockScroll() {
    document.body.classList.toggle('lock-scroll');
}

function openNav(){
    document.getElementsByClassName("sidebar")[0].style.width = "30%";
    document.getElementById("main").style.marginRight = "28%";
    document.getElementsByClassName("sidebar")[0].style.boxShadow = "0 0 0 10000px rgba(0,0,0,.50)";
}

// closing function for closebutton
closeButton.addEventListener("click", closeNav)
function closeNav(){
    document.getElementsByClassName("sidebar")[0].style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.getElementsByClassName("sidebar")[0].style.boxShadow = "0 0 0 10000px rgba(0,0,0,0)";
} 

// =====================================================================================================================================================================

// Sidebar click outside body function. Resource below:
// https://bobbyhadz.com/blog/javascript-hide-element-when-clicked-outside
// Using this code I have tried to manipulate the tags and classes to those of mine and hopefully make it work however it did not. I need to look further into this. 

// document.addEventListener('click', function handleClickOutsideSidebar(event) {
//     // 👇️ the element the user clicked
//     console.log('user clicked: ', event.target);
  
//     const sidebar = document.getElementsByClassName('sidebar');
  
//     if (!sidebar.contains(event.target)) {
//       sidebar.style.display = 'none';
//     }
//   });

// =====================================================================================================================================================================

// $sidebar = $('sidebar');
// $( "body" ).click(function( event ) {
//   var a  = event.target;
//   if(a === $sidebar){
//     document.getElementsByClassName("sidebar")[0].style.width = "0";
//     document.getElementById("main").style.marginRight = "0";
//     document.getElementsByClassName("sidebar")[0].style.boxShadow = "0 0 0 10000px rgba(0,0,0,0)";
//   }
// });

// JQuery to lock the mouse scroll when the Sidebar is open.
// if ($('sidebar').is(':visible')) {
//     $('body').addClass('lock-scroll');
// } else {
//     $('body').removeClass('lock-scroll');
// }


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

// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var headerHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta) 
        return;
    
    // If scrolled down and past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > headerHeight){
        // Scroll Down
        $('header').removeClass('header-down').addClass('header-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('header-up').addClass('header-down');
        }
    }
  
    lastScrollTop = st;
}


// const header = document.querySelector('header');
// let scrollPosition = 0;


// document.addEventListener('scroll', () => { 
//    let scroll = window.scrollY 
//    // scrollY stores the scroll position as a number
//    if (scroll < scrollPosition){
//       // upscroll
//       header.classList.add('sticky');
//       header.classList.remove('no-stick');
//    } if (scroll > scrollPosition) {
//       // downscroll
//       header.classList.remove('sticky');
//       header.classList.add('no-stick');
//    }
//    scrollPosition = scroll <= 0 ? 0 : scroll; 
// });



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

let flkty = new Flickity( '.sponsers-carousel', {
  // options
  cellAlign: 'left',
  contain: true
});

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

// $(document).ready(function(){
//   $('.carousel-sponser').slick({
//       accessibility: true,
//       infinite: true,
//       autoplay: true,
//       speed: 300,
//       slidesToShow: 1,
//       centerMode: true,
//       variableWidth: true
//   });
// });

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