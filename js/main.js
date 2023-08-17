
const menuEmail = document.querySelector(".email img");//donde se hace click
const desktopMenu= document.querySelector(".desktop-menu"); // la clase que se modifica
menuEmail.addEventListener('click',toggledesktopMenu)// funcion cuando se hace click

const menuMobile = document.querySelector(".menu");
const mobileMenu= document.querySelector(".mobile-menu");
menuMobile.addEventListener('click',toggleMobileMenu)

const menuCarrito = document.querySelector(".carrito");
const flechaCarrito = document.querySelector(".menu-container figure img");
const asideMyorders= document.querySelector(".my-orders");
menuCarrito.addEventListener('click',toggleAsideMyorders)
flechaCarrito.addEventListener('click',toggleAsideMyorders)

function toggledesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    //pregunta si No tiene la clase
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }
    if (!asideMyorders.classList.contains('inactive')) {
        asideMyorders.classList.add('inactive');
    }
    
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
     //pregunta si No tiene la clase
     if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }
    if (!asideMyorders.classList.contains('inactive')) {
        asideMyorders.classList.add('inactive');
    }
}
function toggleAsideMyorders(){
    asideMyorders.classList.toggle('inactive');
     //pregunta si No tiene la clase
     if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }
}