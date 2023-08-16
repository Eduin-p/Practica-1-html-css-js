
const menuEmail = document.querySelector(".email img");//donde se hace click
const desktopMenu= document.querySelector(".desktop-menu"); // la clase que se modifica
menuEmail.addEventListener('click',toggledesktopMenu)// funcion cuando se hace click

const menuMobile = document.querySelector(".menu");
const mobileMenu= document.querySelector(".mobile-menu");
menuMobile.addEventListener('click',toggleMobileMenu)

const menuCarrito = document.querySelector(".carrito");
const asideMyorders= document.querySelector(".my-orders");
menuCarrito.addEventListener('click',toggleAsideMyorders)

function toggledesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}
function toggleAsideMyorders(){
    asideMyorders.classList.toggle('inactive');
}