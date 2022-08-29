const hamburgerButton = document.querySelector('.hamburger-btn');
const closeButton = document.querySelector('.close-btn');

hamburgerButton.addEventListener("click", openNav)
function openNav(){
    document.getElementsByClassName("big-screen-sidebar", "mobile-sidebar-navigation")[0].style.width = "24vw";
    document.getElementById("main").style.marginRight = "22vw";
}


closeButton.addEventListener("click", closeNav)
function closeNav(){
    document.getElementsByClassName("big-screen-sidebar", "mobile-sidebar-navigation")[0].style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}




$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('sticky-header-nav').addClass('sticky-header');
    }
    else{
    $('sticky-header-nav').removeClass('sticky-header');
    }
});

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