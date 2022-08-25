const hamburgerButton = document.querySelector('.hamburger-btn');
const closeButton = document.querySelector('.close-btn');

hamburgerButton.addEventListener("click", openNav)
function openNav(){
    document.getElementsByClassName("big-screen-sidebar")[0].style.width = "22vw";
    document.getElementById("main").style.marginRight = "20vw";
}


closeButton.addEventListener("click", closeNav)
function closeNav(){
    document.getElementsByClassName("big-screen-sidebar")[0].style.width = "0";
    document.getElementById("main").style.marginRight = "0";
}