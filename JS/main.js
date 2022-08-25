const hamburgerButton = document.querySelector('.hamburger-btn');

hamburgerButton.addEventListener("click", openNav)
function openNav(){
    document.getElementsByClassName("big-screen-sidebar")[0].style.width = "40vh";
    document.getElementById("main").style.marginRight = "20%";
}


closeButton.addEventListener("click", closeNav)
function closeNav(){
    document.getElementsByClassName("sidebar-navigation")[0].style.width = "0";
}