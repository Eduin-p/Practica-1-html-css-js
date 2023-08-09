const menuEmail = document.querySelector(".email img");
const desktopMenu= document.querySelector(".desktop-menu");
menuEmail.addEventListener('click',toggledesktopMenu)

const menuMobile = document.querySelector(".menu");
const mobileMenu= document.querySelector(".mobile-menu");
menuMobile.addEventListener('click',toggleMobileMenu)

function toggledesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('active-menu-mobile');
}